(ns cljs-web-audio.core
  (:require
    [cljs-web-audio.timing :as t]
    [cljs.core.async :refer
      [put! take! chan <! >! map<
        mult pipe tap to-chan
      sliding-buffer]
    ]
    [cljs.core.async.impl.buffers :refer
      [ring-buffer]
    ]
    [cljs.core.async :as w]
  )
  (:require-macros [cljs.core.async.macros :refer [go]])
)

; First go at a web-audio lib for Clojurescript
; thanks to:
; http://0xfe.blogspot.com.au/2011/08/generating-tones-with-web-audio-api.html
; https://github.com/cwilso/SynthTemplate
; http://webaudio-io2012.appspot.com/#43
; http://swannodette.github.io/2013/11/07/clojurescript-101/

(def pi2 (* 2 Math/PI))

(defn log<!G
([channel]
    (go
    (while true (.log js/console (<! channel))
    )))
)

(def P partial)
(def C comp)

(defn G
  "Do the function f at regular intervals and send the results to g, starting with x"
  ([g f x n]
    (. js/window setTimeout
      (fn [x] (g x) (G g f (f x) n)) n x) )
  ([f x n]
    (. js/window setTimeout
      (fn [x] (G f (f x) n)) n x))
)

(defn context
  ([] (js/webkitAudioContext.))
  ([node] (.context node))
)

(defn sample-rate [context] (.-sample-rate context))

(defn current-time [context] (.-currentTime context))

(defn millis-to-frames [context millis] (* (.-sampleRate context) (/ millis 1000)))

(defn node
  ([context f] (node context 1024 1 1 f))
  ([context size inputs outputs f] (node context (.createJavaScriptNode context size inputs outputs) f))
  ([context node f]
    (set! (.-onaudioprocess node) (fn [e] (f (aget (.getChannelData (.-outputBuffer e) ) 0) )))
    node
  )
)

(defn buffer-map!
  ([f buffer] (buffer-map! f buffer (alength buffer)))
  ([f buffer length] (map (fn [i] (aset buffer i (f (/ i length)))) (range length)))
)

(defn float32array
  ([size] (js/Float32Array. size))
  ([size f] (buffer-map! (float32array size) f))
)

(defn to-float32array
  ([coll] (to-float32array coll (float32array (count coll))))
  ([coll array] (doall (map (partial aset array) (range (count coll)) coll) ) array)
)

(defn set-wavetable! [osc wavetable] (.setWaveTable osc wavetable))

;https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#AudioContext-section
; SYNTAX_ERR: DOM Exception 12: An invalid or illegal string was specified.
; on Safari because it doesn't implement that arity of this method
(defn create-buffer
  ([context f32] (create-buffer context f32 (.-buffer f32)))
  ([context f32 buffer] (.createBuffer context buffer false))
)

(defn to-buffer
  ([context coll] (.createBuffer context (to-float32array coll) false))
  ([context size f] (create-buffer context (float32array size f)))
)

(defn create-wavetable
  ([context real] (create-wavetable context real real))
  ([context real imag] (.createWaveTable context real imag))
)

(defn frequency!
  ([osc f] (frequency! osc f 0))
  ([osc f t] (.setValueAtTime (.-frequency osc) f t) osc)
)

(defn exp-frequency!
  ([osc f] (frequency! osc f 0))
  ([osc f t] (.exponentialRampToValueAtTime (.-frequency osc) f t) osc)
)

(defn oscillator
  ([] (oscillator (context)))
  ([context] (.createOscillator context))
  ([context wavetable] (oscillator context (oscillator context) wavetable))
  ([context oscillator wavetable] (.setWaveTable oscillator wavetable) oscillator)
)

(defn create-buffer-source
  ([context coll] (create-buffer-source context coll (.createBufferSource context)))
  ([context coll node] (set! (.-buffer node) (to-buffer context coll)) node)
)

(defn buffer-fn
  ([context size f] (buffer-fn context size (.createBuffer context 1 size (.-sampleRate context)) f))
  ([context size buffer f] (buffer-map! f (.getChannelData buffer 0)) buffer)
)

(defn fn-source
  ([context size f]
    (fn-source
      context
      (.createBufferSource context)
      (buffer-fn context size f)
      f))
  ([context node]
    (fn-source context
      (.createBufferSource context)
      (.-buffer node)
      identity
      )
    )
  ([context node buffer f]
    (set! (.-buffer node) buffer)
    node
    )
  )

(defn note-on!
  ([o] (note-on! o 0))
  ([o delay] (.noteOn o delay) o)
)

(defn note-off!
  ([o] (note-off! o 0))
  ([o delay] (.noteOff o delay) o)
)

(defn gain! [node v] (set! (.-gain node) v) node)

; huh ? naming ? sort this out
(defn gain
  ([context] (gain! (.createGainNode context) 1))
  ([context volumes times] (gain context (gain context) (current-time context) volumes times))
  ([context node volumes times] (gain context node  (current-time context) volumes times))
  ([context gain t volumes times] (doall (map (fn [v dt] (.linearRampToValueAtTime (.-gain gain) v (+ t dt))) volumes times)) gain)
)

(defn connect! [source destination] (.connect source destination) source)

(defn convolver
  ([context coll] (convolver context (.createConvolver context) coll))
  ([context convolver coll] (set! (.-buffer convolver) (to-buffer context coll)) convolver)
  ([context] (.createConvolver context))
)

(defn convolver-fn
  ([context millis f] (convolver-fn context millis (convolver context) f) )
  ([context millis convolver f] (set! (.-buffer convolver) (buffer-fn context (millis-to-frames context millis) f)) convolver)
)

(defn update-fn [f context] (fn [t] (f (.-currentTime context) (- (.-currentTime context) t)) )  )

(defn frequencies-over-time!
  ([coll] (frequencies-over-time! coll 1))
  ([coll dt] (frequencies-over-time! coll dt (context)))
  ([coll dt context] (frequencies-over-time! coll dt context (oscillator context)))
  ([coll dt context osc]
    (connect! osc (.-destination context))
    (doall (map (fn [x t] (frequency! osc x t)) coll (range (current-time context) (+ dt (current-time context)) (/ dt (count coll)))))
    (note-on! osc)
    {
      :context context
      :oscillator osc
    }
  )
)

(defn set-value-at-time [param x t]
  (.setValueAtTime param x t)
)

(defn values-over-time
  ([{coll :coll context :context param :param duration :duration}]
    (values-over-time coll (current-time context) duration param))
  ([coll start duration param]
    (values-over-time coll start duration param (range start (+ duration start) (/ duration (count coll)))))
  ([coll start duration param timings]
    (map (fn [x t] (.setValueAtTime param x t)) coll timings)
  )
)

(defn p<!G [channel context param]
  (go
    (while true
      (set-value-at-time param (<! channel) (current-time context))))
)
;;
(defn f<!G
  ([channel] (f<!G channel (context)))
  ([channel context] (f<!G channel context (oscillator context)))
  ([channel context oscillator]
    (connect! oscillator (.-destination context))
    {
      :context context
      :sounds [{:oscillator oscillator :channel (p<!G channel context (.-frequency oscillator))}]
    }
  )
)

(defn Yf<!G [m channel]
  (merge-with concat m
    (select-keys (f<!G channel (:context m)) [:sounds]))
)

; input format is [[frequency amplitude duration] ...]
; hmm need to think about this
(defn playing!
  ([coll] (playing! coll 1))
  ([coll duration] (playing! coll duration (context)))
  ([coll duration context] (playing! coll (current-time context) duration context))
  ([coll start duration context]
    (playing! coll start duration (oscillator context) (gain context) context
      (t/relative-to-absolute start duration (map last coll))))
  ([coll start duration osc gain context timings]
    (connect! osc gain)
    (connect! gain (.-destination context))
    (doall (values-over-time (map first coll) start duration  (.-frequency osc) timings))
    (doall (values-over-time (map second coll) start duration (.-gain gain) timings))
    {
      :duration duration
      :context context
      :sounds [{:gain gain :oscillator osc}]
    }
  )
)

; x is a playing!, y is a collection
(defn combine! [x y]
  (merge-with concat x (select-keys (playing! y (:duration x) (:context x)) [:sounds]))
)

(defn play!
  ([{context :context sounds :sounds duration :duration}]
    (doall (map note-on! (map :oscillator sounds)))
  )
)

(defn mouse-events-channel!
  ([] (mouse-events-channel! (chan)))
  ([mouse-events]
    (.addEventListener
      js/window
      "mousemove"
      (fn [e] (put! mouse-events e)))
    mouse-events
  )
)

(defn xy
  ([channel w h]
    (map<
      (fn [e]
        {:x (/ (.-x e) w) :y (/ (.-y e) h)}
       ) channel))
  ([channel] (xy channel
    (- (.-width js/window.screen) (.-screenX js/window))
    (- (.-height js/window.screen) (.-screenY js/window))))
)

(defn o
  ([f i] (o f (chan (sliding-buffer 16)) i 1))
  ([f c i n]
    (G (fn [x] (put! c x)) f i n)
    c
  )
)

(defn theremin!
  ([] (theremin! (xy (mouse-events-channel!))))
  ([mouse-events]
    (play!
      (f<!G (map< (C (P * 2000) :x) mouse-events))
    )
  )
)

(defn pc
  ([f c iv] (pc f c (atom iv) iv))
  ([f c va iv]
    (go (while true (reset! va (<! c))))
    (fn [x] (f @va x))
  )
)

(defn ot []
  (play!
    (Yf<!G
    (f<!G
     (map<
      (pc *
        (map< (C (P + 1) (P * 15000) :y) (xy (mouse-events-channel!)))
        2000)
      (o
        (pc
          (fn [r x] (* r x (- 1 x)))
          (map< (C (P + 3) (P * 1) :x) (xy (mouse-events-channel!)))
          2.1
        ) 0.3))
    )

     (map<
      (pc *
        (map< (C (P + 1) (P * 20000) :y) (xy (mouse-events-channel!)))
        2000)
      (o
        (pc
          (fn [r x] (* r x (- 1 x)))
          (map< (C (P - 4) (P * 1) :x) (xy (mouse-events-channel!)))
          2.1
        ) 0.3))
    )
  )
)

