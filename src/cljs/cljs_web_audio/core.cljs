(ns cljs-web-audio.core
  "
  A web-audio lib for Clojurescript,
  aimed at sonification of data and code, rather than music.

  Very very rough!!!

  This is currently just a disorganized bunch of badly-named functions,
  and experiments, just to get the ball rolling. There are no clever abstractions
  and it's hardly usable.

  Copyright © 2013 Matthew Chadwick

  Distributed under the Eclipse Public License, the same as Clojure.

  Many thanks to the following people:

  http://0xfe.blogspot.com.au/2011/08/generating-tones-with-web-audio-api.html
  https://github.com/cwilso/SynthTemplate
  http://webaudio-io2012.appspot.com/#43
  http://swannodette.github.io/2013/11/07/clojurescript-101/
  "
  (:require
    [oops.core :refer [oget oget+ oset! ocall]]
    [cljs-web-audio.timing :as t]
    [cljs-web-audio.ecg :refer [Component]]
    [cljs.core.async :as as :refer [put! take! chan <! >! go go-loop close! timeout mult pipe
                             tap to-chan onto-chan sliding-buffer dropping-buffer]]
    [cljs.core.async.impl.buffers :refer [ring-buffer]]
    [cljs.core.async :as w])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defrecord DOMComponent [{parent :parent :spec [kind attrs children :as spec]}]
 Component
  (c+ [this parent c] (let [e (.createElement document (name kind))] (set! .-textContent e children) (.appendChild parant e) (assoc c :node e)))
  (fn [this parent {node :node :as c}] (.removeChild parent node) (dissoc c :node))
  (fn [this parent {[kind attrs children] :spec node :node :as c}] c))

(defn log<!G
"Returns a channel which logs messages it reads from"
([channel]
  (go
    (while true (println (<! channel))))))

(defn G
  "Do the function f at regular intervals
  and send the results to g, starting with x.
  (G looks like an arrow looping back on itself, and an ear)
  "
  ([g f x n]
    (. js/window setTimeout
      (fn [x] (g x) (G g f (f x) n)) n x) )
  ([f x n]
    (. js/window setTimeout
      (fn [x] (G f (f x) n)) n x)))

(def is-webkit
  (try js/webkitAudioContext
    (catch js/Error e false)))

(def context-
  (fn []
    (if is-webkit
      (js/webkitAudioContext.)
      (js/AudioContext.))))

(defn context
  ([] (context-))
  ([node] (.-context node)))

(defn sample-rate [context]
  (.-sample-rate context))

(defn current-time [context]
  (.-currentTime context))

(defn millis-to-frames [context millis]
  (* (.-sampleRate context) (/ millis 1000)))

(defn node
  ([context f] (node context 1024 1 1 f))
  ([context size inputs outputs f]
    (node context (.createJavaScriptNode context size inputs outputs) f))
  ([context node f]
    (set! (.-onaudioprocess node)
      (fn [e] (f (aget (.getChannelData (.-outputBuffer e) ) 0) )))
    node))

(defn buffer-map!
"Sets the given buffer with the given function, the function taking
value from 0-1 representing the position in the buffer being set"
  ([f buffer] (buffer-map! f buffer (alength buffer)))
  ([f buffer length]
    (map (fn [i] (aset buffer i (f (/ i length)))) (range length))))

(defn float32array
  ([size] (js/Float32Array. size))
  ([size f] (buffer-map! (float32array size) f)))

(defn to-float32array
  ([coll] (to-float32array coll (float32array (count coll))))
  ([coll array] (doall (map (partial aset array) (range (count coll)) coll) ) array))

(defn set-wavetable!
  ([osc wavetable] (.setPeriodicWave osc wavetable)))

;https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#AudioContext-section
; SYNTAX_ERR: DOM Exception 12: An invalid or illegal string was specified.
; on Safari because it doesn't implement that arity of this method

(defn create-buffer
  ([context f32] (create-buffer context f32 (.-buffer f32)))
  ([context f32 buffer] (.createBuffer context buffer false)))

(defn to-buffer
  ([context coll] (.createBuffer context (to-float32array coll) false))
  ([context size f] (create-buffer context (float32array size f))))

(defn create-wavetable
  ([context real] (create-wavetable context real (to-float32array (repeat (alength real) 0))))
  ([context real imag]
    (.createPeriodicWave context real imag)))

(defn frequency!
  ([osc f] (frequency! osc f 0))
  ([osc f t] (.setValueAtTime (.-frequency osc) f t) osc))

(defn exp-frequency!
  ([osc f] (frequency! osc f 0))
  ([osc f t] (.exponentialRampToValueAtTime (.-frequency osc) f t) osc))

(defn panner
  ([context]
    (panner context {}))
  ([context properties]
    (let [p (.createPanner context)]
      (doseq [[k v] properties]
        (oset! p [k] v)))))

(defn oscillator
"Returns an oscillator node"
  ([] (oscillator (context)))
  ([context] (.createOscillator context))
  ([context wavetable] (oscillator context (oscillator context) wavetable))
  ([context oscillator wavetable] (set-wavetable! oscillator wavetable) oscillator))

(defn create-buffer-source
  ([context coll] (create-buffer-source context coll (.createBufferSource context)))
  ([context coll node] (set! (.-buffer node) (to-buffer context coll)) node))

(defn buffer-fn
  ([context size f] (buffer-fn context size (.createBuffer context 1 size (.-sampleRate context)) f))
  ([context size buffer f] (buffer-map! f (.getChannelData buffer 0)) buffer))

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
      identity))
  ([context node buffer f]
    (set! (.-buffer node) buffer)
    node))

(defn note-on!
  ([o] (note-on! o 0))
  ([o delay] (.start o delay) o))

(defn note-off!
  ([o] (note-off! o 0))
  ([o delay] (.stop o delay) o))

(defn gain! [node v] (set! (.-gain node) v) node)

; huh ? why ?
(defn gain
  ([context] (gain! (.createGain context) 1))
  ([context volumes times] (gain context (gain context) (current-time context) volumes times))
  ([context node volumes times] (gain context node  (current-time context) volumes times))
  ([context gain t volumes times] (doall (map (fn [v dt] (.linearRampToValueAtTime (.-gain gain) v (+ t dt))) volumes times)) gain))

(defn connect! [source destination] (.connect source destination) source)

(defn convolver
  ([context coll] (convolver context (.createConvolver context) coll))
  ([context convolver coll] (set! (.-buffer convolver) (to-buffer context coll)) convolver)
  ([context] (.createConvolver context)))

(defn convolver-fn
  ([context millis f] (convolver-fn context millis (convolver context) f) )
  ([context millis convolver f] (set! (.-buffer convolver) (buffer-fn context (millis-to-frames context millis) f)) convolver))

(defn update-fn [f context] (fn [t] (f (.-currentTime context) (- (.-currentTime context) t))))

(defn frequencies-over-time!
  ([coll] (frequencies-over-time! coll 1))
  ([coll dt] (frequencies-over-time! coll dt (context)))
  ([coll dt context] (frequencies-over-time! coll dt context (oscillator context)))
  ([coll dt context osc]
    (connect! osc (.-destination context))
    (doall
      (map (fn [x t] (frequency! osc x t))
       coll
       (range (current-time context) (+ dt (current-time context)) (/ dt (count coll)))))
    (note-on! osc)
    {
      :context context
      :oscillator osc
    }))

(defn oscillator-3d
  [context params]
  (let [o (oscillator context)
        p (panner context params)
        g (gain context)]
    (.connect o g)
    (.connect g p)
    (.connect p (.-destination context))
  {
    :context context
    :panner p
    :gain g
    :oscillator o
  }))

(defn set-value-at-time [param x t]
  (.setValueAtTime param x t))

(defn exp-to [param x t]
  (.exponentialRampToValueAtTime param x t))

(defn linear-to [param x t]
  (.linearRampToValueAtTime param x t))

(defn values-over-time
  ([{coll :coll context :context param :param duration :duration}]
    (values-over-time coll (current-time context) duration param))
  ([coll start duration param]
    (values-over-time coll start duration param (range start (+ duration start) (/ duration (count coll)))))
  ([coll start duration param timings]
    (map (fn [[x1 x2] [t1 t2]]
      (linear-to param x1 t1)
      (linear-to param x1 (+ t1 (* 0.98 (- t2 t1))))
      (linear-to param x2 t2))
         (partition 2 1 coll) (partition 2 1 timings))))

(defn coll-chan [coll]
  (let [c (chan)]
    (go-loop [[f & r] (cycle coll)]
      (as/>! c f)
      (recur r))))

(defn fvt...
  ([]
    (fvt... (coll-chan coll) (current-time context) duration param))
  ([{coll :coll context :context rate :rate :as params :or {context (context)}}]
    (let [ch-in (coll-chan coll)
          ch-control (chan)
          t (current-time context)
          {o :oscillator p :panner g :gain} (oscillator-3d context params)
          p {:f (.-frequency o) :v (.-gain g)}
         ]
     (go-loop [t (current-time context) rate (or rate 1)]
       (let [m (<! ch-in) cm (<! ch-control)]
         (doseq [k (keys m)]
           (linear-to (p k) (m k) t))
         (when (not= cm :stop)
           (recur (+ t (* rate (:t m))) (or (:rate cm) rate))))))))

(defn p<!G
"make the given channel control the given parameter"
  [channel context param]
  (go
    (while true
      (linear-to param (<! channel) (current-time context)))))

(defn fvt
  ([params [times & values]]
    (map exp-to params values (map + times (repeat current-time))))
  ([fp gp context [f v t]]
   ; (println f v t)
    (set-value-at-time fp f (+ t (current-time context)))
    (set-value-at-time gp v (+ t (current-time context)))))

(defn pm<!G
"make the given channel control the given parameter"
  [channel params]
  (go
    (while true
      (fvt params (<! channel)))))

(defn pmm<!G
"make the given channel control the given parameter"
  [channel context fp gp]
  (go
    (while true
      (fvt fp gp context (<! channel)))))

(defn f<!G
  "returns an oscillator whos frequency is controlled by the given channel"
  ([channel] (f<!G channel (context)))
  ([channel context] (f<!G channel context (oscillator context)))
  ([channel context oscillator]
    (connect! oscillator (.-destination context))
    {
      :context context
      :duration :forever
      :sounds [{:oscillator oscillator :channel (p<!G channel context (.-frequency oscillator))}]
    }))

(defn pp<!G
  "returns an oscillator whos frequency, volume & timing are controlled by the given channel"
  ([channel] (pp<!G channel (context)))
  ([channel context] (pp<!G channel context (gain context) (oscillator context)))
  ([channel context gain oscillator]
    (connect! gain (.-destination context))
    (connect! oscillator gain)
    {
      :context context
      :sounds
      [
        {
          :oscillator oscillator :gain gain
          :channel (pmm<!G channel context (.-frequency oscillator) (.-gain gain))
        }
      ]
    }))

(defn coll-osc
  "returns an oscillator whos frequency, volume & timing are controlled by the given channel"
  ([coll] (coll-osc coll (context)))
  ([coll context] (coll-osc coll context (gain context) (oscillator context)))
  ([coll context gain oscillator]
    (connect! gain (.-destination context))
    (connect! oscillator gain)
    {
      :context context
      :sounds
       {
         coll
         {
          :oscillator oscillator
          :gain gain
         }
       }
    }))

(defn Yf<!G
"combine a oscillations! map with an oscillator for the given channel"
  [m channel]
  (merge-with concat m
    (select-keys (f<!G channel (:context m)) [:sounds])))

(defn oscillations!
"Return a map representing the playing of some sounds
 input format is [[frequency amplitude duration] ...]
 hmmm this is not there yet..."
  ([coll] (oscillations! coll 1))
  ([coll duration] (oscillations! coll duration (context)))
  ([coll duration context] (oscillations! coll (current-time context) duration context))
  ([coll start duration context]
    (oscillations! coll start duration (oscillator context) (gain context) context
      (t/relative-to-absolute start duration (map last coll))))
  ([coll start duration osc gain context timings]
    (connect! osc gain)
    (doall (values-over-time (map first coll) start duration  (.-frequency osc) timings))
    (doall (values-over-time (map second coll) start duration (.-gain gain) timings))
   (let [p (panner context)]
    (connect! gain p)
    (connect! p (.-destination context))
    {
     :duration duration
     :context context
     :sounds [{:gain gain :oscillator osc :panner p :collection coll}]
     })))

(defn osc+
"combine a oscillations! map with an oscillator for the given channel"
  [m1 coll dur]
  (merge-with concat m1
    (select-keys (oscillations! coll dur (:context m1)) [:sounds])))

(defn fill [x] (if (seq? x) (concat x (take (- 3 (count x)) [440 0.1 1])) (cons x [0.1 1])))

(defn red<f!G
  "returns oscillators taking values asynchronously from the given channels"
  ([channel context]
    (f<!G channel context))
  ([channels]
    (reduce
      (fn [r channel] (merge-with concat r (select-keys (red<f!G channel (:context r)) [:sounds])))
    {:context (context) :duration :forever}
    channels)))

(defn redosc!
  ([coll duration context]
    (oscillations! (map fill coll) duration context))
  ([colls duration]
    (reduce
      (fn [r coll] (merge-with concat r (select-keys (redosc! coll duration (:context r)) [:sounds])))
    {:context (context) :duration duration}
    colls)))

(defn redosc
  "Return oscillators for the given collections"
  ([context coll]
   (redosc context coll
    (oscillator context (create-wavetable context (to-float32array coll)))
    (gain context)))
  ([context coll osc gain]
    (let [p (panner context)]
      (connect! osc gain)
      (connect! gain p)
      (connect! p (.-destination context))
      {
        :context context
        :sounds [{:gain gain :oscillator osc :panner p :collection coll}]
      }))
  ([colls]
    (reduce
      (fn [r coll]
        (merge-with concat r
        (select-keys (redosc (:context r) (cons 0 coll)) [:sounds]))
      )
    {:context (context)}
    colls)))

(defn play!
  "Start playing the sounds in the sound map thing given
  ...only handles oscillators atm
  "
  ([{context :context sounds :sounds duration :duration}]
  (println "play" context)
    (doall (map note-on! (map :oscillator sounds)))
    (cond
      (number? duration)
        (doall (map (fn [o] (note-off! o (inc duration))) (map :oscillator sounds))))))

(defn events-channel!
  "Returns a channel of events of the given :type"
  ([type] (events-channel! type (chan (dropping-buffer 64))))
  ([type channel]
    (.addEventListener
      js/window
      (name type)
      (fn [e] (put! channel e)))
      channel))

(defn mouse-events-channel!
  ([] (events-channel! :mousemove)))

(defn mouse-position-channel!
  ([] (mouse-position-channel! (mouse-events-channel!)))
  ([channel w h]
    (map
      (fn [e]
        {:x (/ (.-x e) w) :y (/ (.-y e) h) :shift (.-shiftKey e)}
       ) channel))
  ([channel] (mouse-position-channel! channel
    (- (.-width js/window.screen) (.-screenX js/window))
    (- (.-height js/window.screen) (.-screenY js/window)))))

(defn device-motion-channel!
  ([]
    (map
        (fn [e]
          {
            :ax (.-x (.-acceleration e))
            :ay (.-y (.-acceleration e))
            :az (.-z (.-acceleration e))
            :agx (.-x (.-accelerationIncludingGravity e))
            :agy (.-y (.-accelerationIncludingGravity e))
            :agz (.-z (.-accelerationIncludingGravity e))
            :rx (.-alpha (.-rotationRate e))
            :ry (.-beta  (.-rotationRate e))
            :rz (.-gamma (.-rotationRate e))
            :dt (.-interval e)
          }) (events-channel! :devicemotion))))

(defn o
  "returns a channel filling from an iterative process"
  ([f i] (o f (chan (sliding-buffer 16)) i 30))
  ([f c i n]
    (G (fn [x] (put! c x)) f i n) c)
  ([coll] (o coll rest (chan (sliding-buffer 16))))
  ([coll f channel]
    (G (fn [col]
     ; (println (str (first col)) (str (empty? coll)))
       (put! channel (first col))) f coll 600)
    channel))

(defn oo
  ([playing]
    (println "play:" (str playing))
    (oo
      playing
      (:context playing)
      (keys (:sounds playing))
      (map :oscillator (vals (:sounds playing)))
      (map :gain (vals (:sounds playing)))))
  ([playing context colls oscs gains]
    (println "starting...")
    (G (fn [colls]
        (doall
          (map
            (fn [coll osc gain]
              (println coll osc gain)
              (fvt (.-frequency osc) (.-gain gain) context (first coll)))
              colls oscs gains))) (partial map rest) colls 500)
    playing))

(defn fvts
  "frequency volume times - control f,v,t from given collections independently"
  ([colls]
    (reduce
      (fn [r coll]
        (merge-with concat r
          (select-keys
          (pp<!G (o coll) (:context r)) [:sounds])))
    {:context (context) :duration :forever}
    colls)))

(defn chorus
  "Control the frequencies of a bunch of oscillators from the values of the given collections"
  ([colls]
  (println "making " (count colls))
    (reduce
      (fn [r coll]
      (println " make one" )
        (update-in r [:sounds] (partial merge (:sounds (coll-osc coll (:context r))))))
    {:context (context) :duration :forever}
    colls)))

(defn pc
  "returns a partial function with first param controlled by a channel"
  ([f g c iv] (pc f g c (atom iv) iv))
  ([f g c va iv]
    (go (while true (reset! va (<! c))))
    (fn [x] (f @va (g x)))))

(defn aset01!
  "Set the element of the given array at the position given by :x (a real from 0-1) to :y"
  ([array {x :x y :y}] (aset array (inc (int (* x (dec (alength array))))) y)))

(defn asetall!
  "Set all elements of the given array from the given collection"
  ([array coll]
   (doall (map-indexed (fn [i x] (aset array i x)) coll))))

(defn asetting!
  "The process of setting the given array with values taken from the given channel"
  ([array channel]
    (go (while true (asetall! array (<! channel))))))

(defn update-wavetable! [osc r i m]
  (set-wavetable! osc (create-wavetable (context osc) r i)))

(defn T!
  "mutates the given array from the given channel's messages which are {:x [0-1 postion] :y value}"
  ([array channel]
    (go
      (while true
        (aset01! array (<! channel))))))

(defn GP<!
  ""
  ([f channel]
    (go
      (while true
        (f (<! channel))))))