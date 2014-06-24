(ns cljs-web-audio.test
  (:require
    [cljs-web-audio.core :as audio]
    [cljs-web-audio.timing :as timing]
    [cljs-web-audio.data :as data]
    [cljs-web-audio.core :refer
      [C P -_ pc o Yf<!G f<!G play! osc+ oscillations! redfreqs trans]
    ]
    [cljs.core.async :refer
      [put! take! chan <! >! map< filter<
        mult pipe tap to-chan
      sliding-buffer]
    ]
  )
)

"Some examples"

(defn cfn [m ml] (fn [x] (max (/ (get m (int (Math/floor (* x ml)))) 3) 0)))


(defn test4
  ([] (test4 (audio/context)))
  ([context]
    (test4 context
      ;(.createGainNode context)
      (.-destination context)
      )
    )
  ([context dest]
    (let [
           r (audio/to-float32array (cons 0 (repeat 63 0.0)))
           i (audio/to-float32array (cons 0 (repeat 63 0.0)))
           wt (audio/create-wavetable context r i)
           o (audio/oscillator context wt)
           xy (audio/mouse-position-channel!)
          ]
      (audio/connect! o dest)
      (audio/note-on! o)
      ;(audio/log<!G (filter< (C not :shift) xy) )
      (audio/T! r (filter< :shift xy))
      (audio/T! i (filter< (C not :shift) xy))
      (audio/GP<! (P audio/update-wavetable! o r i) xy)
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
            (cons 0 (map data/mandelbrot (map (-_ vector y) (range -2 1 (/ 3 63)))))) xy))
      (audio/asetting! i
        (map<
          (fn [{x :x y :y}]
            (cons 0 (map data/mandelbrot (map (P vector x) (range -1 1 (/ 2 63)))))) xy))
      (audio/GP<! (P audio/update-wavetable! o r i) xy)
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
  ([xy] (f<!G (map< (C (P * 2000) :x) xy)))
)

(defn aclm [r x]
  (* r x (- 1 x))
)

(defn ot
  ([] (ot (audio/mouse-position-channel!)))
  ([xy]
  (play!
    (Yf<!G
    (f<!G
     (map<
      (pc * first
        (map< (C (P + 1) (P * 15000) :y) xy)
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
          (map< (C (P + 3.5) (P * 0.5) :x) xy)
          3.1
        ) [0.3 0.7]))
    )
     (map<
      (pc * identity
        (map< (C (P + 10) (P * 10000) :y) xy)
        2000)
      (o
        (pc
          (fn [r x] (* r x (- 1 x))) identity
          (map< (C (P + 3) (P * 1) :x) xy)
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
            (map< (C (P + 1) (P * 15000) :y) xy)
            4000)
        (o
          (pc
            (fn [r [x y]]
              [
                (aclm r x)
              ]
            )
            identity
            (map< (C (P + 3) :x) xy)
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
   ;(play! (audio/fvts (data/sheperd)))
   (audio/chorus (data/sheperd))
  )
)

;(ot)
;(hear (P * 10000 (P aclm 4)))
;(audio/test)

;(audio/G (fn [x] (.log js/console x) (inc x)) 0 100)

;(test4)

;(audio/log<!G (audio/mouse-position-channel!))

;(play! (test17))

;(audio/log<!G (audio/get<! "http://www.google.org/flutrends/au/data.txt"))

;(play! (audio/redosc (timing/flu)))

(defn play-us-flu [] (play! (audio/redfreqs (take 52 (rest (data/flu data/flu-us 161))) 32)))

(defn play-au-flu [] (play! (audio/redfreqs (rest (data/flu data/flu-au 7)) 32)))

(defn play-world-flu [] (play! (audio/redfreqs (data/flu data/flu-world (count data/world-countries)) 32)))

(defn play-water []
  (play!
    (audio/redfreqs
      (trans (map (fn [[x y]] [(* x 5000) (* 0.5 y)]) (data/water))) 32)))

;(play! (audio/redosc [[0.5 0.25 0.5 0.7]]))

;(.log js/console (count (:sounds (audio/redosc (timing/flu)))))

;(ot1)

;(testmbs)

;(sheperd)

;(audio/log<!G (audio/ws<! "ws://127.0.0.1:8080/"))

(defn inspect [x]
  (cond
    (.getElementById js/document "debug")
    (set! (.-textContent (.getElementById js/document "debug")) (str x))
  ) x)

(defn to-rgb [x] (str "rgb(" (* 255 (:ax x)) "," (* 255 (:ay x)) "," (* 255 (:az x)) ")"))

(defn rgb! [x]
  (set! (.-backgroundColor (.-style (.-documentElement js/document)))
        (to-rgb x))
     x)

(defn mm [x] (+ 500 (* 100
  (.cos js/Math (* 16 x)))))

(defn ddd [x] (mod (int (/ x 6)) 2))

(defn red [] (rgb! {:ax 0 :ay 1 :az 0}))

(defn play-iphone
  ([]
    (.log js/console "playing iphone " (to-rgb {:ax 0.8 :ay 0.1 :az 0.2}) (.-backgroundColor (.-style (.-documentElement js/document))))
    (play-iphone
      ;(audio/ws<! "ws://127.0.0.1:8080/")
      (audio/device-motion-channel!)
      ))
  ([device-motion-channel]
  (audio/play!
    (audio/red<f!G
      [
        (map< (C (P + 500) (P * 200) ddd (P * 360) :agx) device-motion-channel)
        (map< (C (P + 300) (P * 200) ddd (P * 360) :agy) device-motion-channel)
        (map< (C (P + 100) (P * 200) ddd (P * 360) :agz) device-motion-channel)
      ]
     )
     )))

;(play-iphone)

;(play-water)

;(play! (theremin!))