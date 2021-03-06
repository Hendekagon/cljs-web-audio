(ns cljs-web-audio.examples.test
  (:require
    [clojure.string :as string]
    [cljs-web-audio.timing :as timing]
    [cljs-web-audio.maths :as maths  :refer [pow trans F]]
    [cljs-web-audio.examples.data :as data]
    [cljs-web-audio.examples.ear :as ear]
    [cljs-web-audio.core :as audio :refer [pc o Yf<!G f<!G play! osc+ oscillations! redosc!]]
    [cljs.core.async :refer [put! take! chan <! >! map< filter< mult pipe tap to-chan sliding-buffer]]))

"Some examples - good luck understanding any of this"

(defn cfn [m ml] (fn [x] (max (/ (get m (int (Math/floor (* x ml)))) 3) 0)))


(defn test4
  ([] (test4 (audio/context)))
  ([context]
    (test4 context
      ;(.createGainNode context)
      (.-destination context)))
  ([context dest]
    (let [
           r (audio/to-float32array (cons 0 (repeat 63 0.0)))
           i (audio/to-float32array (cons 0 (repeat 63 0.0)))
           wt (audio/create-wavetable context r i)
           o (audio/oscillator context wt)
           xy (audio/mouse-position-channel!)
          ]
       (println context dest)
      (audio/connect! o dest)
      (audio/note-on! o)
      (audio/log<!G (filter< (comp not :shift) xy) )
      (audio/T! r (filter< :shift xy))
      (audio/T! i (filter< (comp not :shift) xy))
      (audio/GP<! (partial audio/update-wavetable! o r i) xy)
      ;(.log js/console (str (.-numberOfInputs dest)))
      {:osc o :r r :i i :context context}
      )
    )
)

(defn testmbs
  ([] (testmbs (audio/context)))
  ([context]
    (testmbs context
      ;(.createGainNode context)
      (.-destination context)
      )
    )
  ([context dest]
    (let
        [
          r (audio/to-float32array (cons 0 (repeat 63 0.0)))
          i (audio/to-float32array (cons 0 (repeat 63 0.0)))
          wt (audio/create-wavetable context r i)
          o (audio/oscillator context wt)
          xy (audio/mouse-position-channel!)
        ]
      (audio/connect! o dest)
      (audio/note-on! o)
      (audio/asetting! r
                       (map<
                         (fn [{x :x y :y}]
            (cons 0 (map ear/mandelbrot (map (F vector y) (range -2 1 (/ 3 63)))))) xy))
      (audio/asetting! i
        (map<
          (fn [{x :x y :y}]
            (cons 0 (map ear/mandelbrot (map (partial vector x) (range -1 1 (/ 2 63)))))) xy))
      (audio/GP<! (partial audio/update-wavetable! o r i) xy)
      ;(.log js/console (str (.-numberOfInputs dest)))
      {:osc o :r r :i i :context context}
      )
    )
)

(defn test5
  ([] (test5 (audio/context)))
  ([context]
    (test5 context
      ;(morse-convolution context "morse")
      (audio/convolver-fn context
        3000
        (fn [x] (if (or (and (> x 0.1) (< x 0.11))  (and (> x 0.51) (< x 0.513)) ) (- 1.0 x) 0.0)) ; TODO environment for this
        ;(fn [x] (* (rand) (Math/sin (* Math/PI x))))
        )
      (audio/gain context)
      (.-destination context)
    )
  )
  ([context c gain-node dest]
    (let [
           ri (audio/to-float32array [0 1 0 0 0 0 0 1 0 0 0 0 0 0.6 0 0 0 0.1 0 0 0 0 0 0.1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0])
           o (audio/oscillator context) ;(create-wavetable context ri))
         ]
      (audio/connect! c dest) ; TODO graph-type representation of connections with maps
      (audio/connect! o gain-node)
      (audio/connect! gain-node c)
      (audio/connect! gain-node dest)
      ;(connect! o gain)
      (audio/note-on! o)
      (audio/gain context gain-node [0 0 1 0 0 1 0] [2 3 3.1 3.2 8 8.1 8.2]) ; TODO scheduler with this
      ;(.log js/console (.getChannelData (.-buffer c) 0))
      {:osc o :ri ri :context context}
      )
    ))


(defn tanh
  ([x] (tanh x (Math/exp (* 2 x))) )
  ([x ex2] (/ (- ex2 1) (+ ex2 1)) )
)

(defn u [x] [(+ (* 0.3 (nth x 1)) (* 0.1 (nth x 2)) (* 0.6 (* 3.5 (nth x 0) (- 1 (nth x 0))))) (+ (* 0.1 (nth x 0)) (* 0.9 (* 3.9 (nth x 1) (- 1 (nth x 1))))) (* (nth x 0) (/ 1 (reduce + x)))] )

(defn w [x]
  [
    (tanh (reduce + (map * x [1.1 0.1 0.2])))
    (tanh (reduce + (map * x [-0.1 1 -0.9])))
    (tanh (reduce + (map * x [-1 0.9 0.1])))
  ]
)

(defn w1 [x]
  [
    (tanh (reduce + (map * x [0.8 0.7 0.1 0.0 0.8])))
    (tanh (reduce + (map * x [-0.5 1 0.9 0.0 0.3])))
    (tanh (reduce + (map * x [-1.3 0.9 0.1 0  0.1])))
    (reduce + (map * x [0.1 0 0 0 0]))
    (reduce + (map * x [0 0 0 0.6 0.1]))
  ]
)


(def t '(defn map
  ([f coll]
   (lazy-seq
    (when-let [s (seq coll)]
      (if (chunked-seq? s)
        (let [c (chunk-first s)
              size (int (count c))
              b (chunk-buffer size)]
          (dotimes [i size]
              (chunk-append b (f (.nth c i))))
          (chunk-cons (chunk b) (map f (chunk-rest s))))
        (cons (f (first s)) (map f (rest s)))))))
  ([f c1 c2]
   (lazy-seq
    (let [s1 (seq c1) s2 (seq c2)]
      (when (and s1 s2)
        (cons (f (first s1) (first s2))
              (map f (rest s1) (rest s2)))))))
  ([f c1 c2 c3]
   (lazy-seq
    (let [s1 (seq c1) s2 (seq c2) s3 (seq c3)]
      (when (and s1 s2 s3)
        (cons (f (first s1) (first s2) (first s3))
              (map f (rest s1) (rest s2) (rest s3)))))))
  ([f c1 c2 c3 & colls]
   (let [step (fn step [cs]
                 (lazy-seq
                  (let [ss (map seq cs)]
                    (when (every? identity ss)
                      (cons (map first ss) (step (map rest ss)))))))]
     (map #(apply f %) (step (conj colls c3 c2 c1)))))))

(defn theremin!
  ([] (theremin! (audio/mouse-position-channel!)))
  ([xy] (f<!G (map< (comp (partial * 2000) :x) xy))))

(defn aclm [r x]
  (* r x (- 1 x)))

(defn ot
  ([] (ot (audio/mouse-position-channel!)))
  ([xy]
  (play!
    (Yf<!G
    (f<!G
     (map<
      (pc * first
        (map< (comp (partial + 1) (partial * 15000) :y) xy)
        4000)
      (o
        (pc
          (fn [r [x y]]
            [
            (aclm r (/ (+ x y) 2))
            (aclm (+ r 0.1) (/ (+ x y) 2))
            ]
          )
          identity
          (map< (comp (partial + 3.5) (partial * 0.5) :x) xy)
          3.1
        ) [0.3 0.7]))
    )
     (map<
      (pc * identity
        (map< (comp (partial + 10) (partial * 10000) :y) xy)
        2000)
      (o
        (pc
          (fn [r x] (* r x (- 1 x))) identity
          (map< (comp (partial + 3) (partial * 1) :x) xy)
          2.1
        ) 0.6))
    )
  )
  )
)

(defn ot1
  ([] (ot1 (audio/mouse-position-channel!)))
  ([xy]
  (play!
    (f<!G
      (map<
        (pc * first
            (map< (comp (partial + 1) (partial * 15000) :y) xy)
            4000)
        (o
          (pc
            (fn [r [x y]]
              [
                (aclm r x)
              ]
            )
            identity
            (map< (comp (partial + 3) :x) xy)
            3.13859273885
          ) [0.3 0.7]))
      )
  )
  )
)

(defn test17 []
  (osc+
    (oscillations!
    [[3000 1 1] [2000 1 2] [4000 1 1] [1000 0 3] [300 0.5 3] [400 0.2 3] [600 0.1 3] [500 0.6 1] [900 0.9 0.5] [400 0 1]] 4)
    [[300 1 2] [100 1 1] [400 1 3] [1000 0 1] [100 1 2] [450 0.2 4] [1600 0.1 1] [700 0.6 3] [910 0.9 0.5] [430 0 1]]
    8
  )
)


(defn test61 []
  (play!
   (oscillations!
     (timing/exp-to-morse '(map inc (range 4))) 8)))

(defn phi [x] (/ (js/Math.exp (* -0.5 x x)) (js/Math.sqrt (* 2 Math/PI))))

(defn guassian
  ([x u s] (guassian x u s (/ 1 s)))
  ([x u s s1] (* s1 (phi (* s1 (- x u)))))
)

(defn sheperd
  ([]
   (play! (audio/fvts (ear/sheperd 9)))
    ;(audio/chorus (data/sheperd))
  )
)

(defn play-us-flu [] (play! (audio/redosc! (take 52 (rest (data/flu data/flu-us 161))) 32)))

(defn play-au-flu [] (play! (audio/redosc! (rest (data/flu data/flu-au 7)) 32)))

(defn play-world-flu [] (play! (audio/redosc! (data/flu data/flu-world (count data/world-countries)) 32)))

(defn play-water []
  (play!
    (audio/redosc!
      (trans (map (fn [[x y]] [(* x 5000) (* 0.5 y)]) (data/water))) 32)))


(defn mm [x] (+ 500 (* 100
  (.cos js/Math (* 16 x)))))

(defn ddd [x] (mod (int (/ x 6)) 2))

(defn ves
  ([]
    (iterate ves [[1 0 0] 3]))
  ([[s c]]
    (let
      [x (inc (count (take-while (complement (partial == (first s))) (rest s))))]
      [(cons (if (== x c) 0 x) s) (inc c)]))
  )

(defn play-ves []
  (play!
   (audio/redosc!
     [(map
        (fn [x] (* x 100))
        (first (last (take 600 (ves)))))] 60)))

(comment
  (audio/play!
   (audio/redosc!
     (ear/offset-pitches
       (ear/to-pitch data/PF06899)) 60)))


;(audio/play! (audio/redfreqs [(map (comp amino-acid-freqs keyword) data/titin)] 4096))

;(play! (theremin!))

;(play-iphone)

;(play-water)

;(play! (theremin!))
