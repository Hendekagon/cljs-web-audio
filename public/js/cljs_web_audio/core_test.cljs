(ns cljs-web-audio.core-test
  (:require
    [cljs-web-audio.core :as audio]
  )
)

(def morse
  {
    \a :.-
    \b :-...
    \c :-.-.
    \d :-..
    \e :.
    \f :..-.
    \g :--.
    \h :...
    \i :..
    \j :.---
    \k :-.-
    \l :.-..
    \m :--
    \n :-.
    \o :---
    \p :.--.
    \q :--.-
    \r :.-.
    \s :...
    \t :-
    \u :..-
    \v :...-
    \w :.--
    \x :-..-
    \y :-.--
    \z :--..
    \1 :.---
    \2 :..---
    \3 :...--
    \4 :....-
    \5 :.....
    \6 :-....
    \7 :--...
    \8 :---..
    \9 :----.
    \0 :-----
    \+ :·–·–·
    \* :.-.-.-
    \\ :.-.-.-.-
    \- :–····–
    \_ :··––·–
    \= :–···–
    \# :-..-..-..-..
    \% :.-----.
    \? :··––··
    \@ :·––·–·
    \space :_
    \. :_
   }
 )

(def morse-timing
  (reduce
    (fn [m [c k]] (assoc m c (interleave (map (fn [d] ({\- [1 3] \. [1 1] \_ [0 2]} d)) (name k)) (repeat [0 1]))))
    {}
    morse
  )
)

(defn string-to-morse [s]
  (mapcat (fn [c] (get morse-timing c [[0 1]])) (.toLowerCase s))
)

(defn exp-to-morse
  ([x] (exp-to-morse 1 x))
  ([level x]
    (cond
      (or (seq? x) (list? x) (vector? x) (associative? x)) (mapcat (partial exp-to-morse (inc level)) x)
      (or (symbol? x) (keyword? x)) (map (partial cons (+ 400 (* 100 level))) (string-to-morse (name x)))
      :default (map (partial cons (+ 400 (* 100 level))) (string-to-morse (str x)))
    ))
)

(defn cfn [m ml] (fn [x] (max (/ (get m (int (Math/floor (* x ml)))) 3) 0)))

(defn hear
  ([context f] (hear context (audio/fn-source context 1024 f)
                 (audio/convolver-fn context 1024
                   (fn [x]
                     (* (* 0.5 (- 1 x)) (* (Math/sin (* 0.5 (* x pi2))) (Math/sin (* 4 (* x pi2)))))
                     )
                   )
                 f))
  ([f] (hear (audio/context) f) )
  ([context node c f]
    (.log js/console node
      ;(.getChannelData (.-buffer node) 0)

      )
    (set! (.-loop node) false)
    (audio/connect! node c)
    (audio/connect! c (.-destination context))
    (audio/note-on! node)
    (audio/note-on! (audio/connect! (audio/fn-source context node) c) 3)
    (audio/note-on! (audio/connect! (audio/fn-source context node) c) 6)
    (audio/note-on! (audio/connect! (audio/fn-source context node) c) 7)
    )
  )

(defn test3
  ([] (test3 (audio/context)))
  ([context]
    (test3 context (repeatedly 3 #(audio/oscillator context))
      ;(.createGainNode context)
      (.-destination context)
      )
    )
  ([context oscs dest]

    (doall (map (fn [o]
                  (audio/connect! o dest) (audio/frequency! o (+ 440 (* 20 (rand)))) (audio/note-on! o)) oscs))
    ;(doall (map (fn [x] (.log js/console (str x)) (update! oscs x)) (take 1000 (iterate u x))))
    ;(.log js/console (str (.-numberOfInputs dest)))
    ;(connect! dest (.-destination context))
    oscs
    )
  )

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
           ri (audio/to-float32array [ 0 0 0 0.5 0 0 0 0.5])
           o (audio/oscillator context (audio/create-wavetable context ri))
           ]

      (audio/connect! o dest)
      (audio/note-on! o)
      ;(.log js/console (str (.-numberOfInputs dest)))
      {:osc o :ri ri :context context}
      )
    ))

(defn test5
  ([] (test5 (audio/context)))
  ([context]
    (test5 context
      ;(morse-convolution context "morse")
      (audio/convolver-fn context
        3000
        (fn [x] (if (or (and (> x 0.1) (< x 0.11))  (and (> x 0.51) (< x 0.53)) ) (- 1.0 x) 0.0)) ; TODO environment for this
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


(defn test2 []
  (hear
    (fn [x] (* x (Math/sin (* 10 (* x pi2)))))
  )
)

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

(defn test-playing []
  (audio/play!
    (audio/combine!
      (audio/playing!
        [[3000 1 1] [2000 1 2] [4000 1 1] [1000 0 3] [300 0.5 3] [400 0.2 3] [600 0.1 3] [500 0.6 1] [900 0.9 0.5] [400 0 1] ] 8)
      [[300  1 2] [100 1 1]  [400 1 3]  [1000 0 1] [100 1 2] [450   0.2 4] [1600 0.1 1][700 0.6 3] [910 0.9 0.5] [430 0 1] ]
    )
  )
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

;(audio/play! (audio/playing (exp-to-morse '(map (partial (seq coll) first) coll)) 16))