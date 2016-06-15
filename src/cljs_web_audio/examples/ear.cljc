(ns cljs-web-audio.examples.ear
  (:require
    [cljs-web-audio.maths :as maths  :refer [pow gaussian]]))

(def amino-acid-symbols-vec
  '(\A \C \D \E \F \G \H \I \K \L \M \N \P \Q \R \S \T \V \W \Y))

(defn mandelbrot
  ([p]
   (ffirst
     (drop-while
       (fn [[r i x y]] (and (< i 100) (< r 4)))
       (iterate (fn [[r i x y]] [(- (* x x) (* y y)) (* 2 x y) (+ (* x x) (* y y)) (inc i)]) (concat [0 0] p))))))

(defn sheperd
"The Sheperd tone"
  ([] (sheperd 9))
  ([n]
   (map
    (partial map vector)
        (map cycle
          (apply (partial map vector) (map
                            (partial map (comp (partial * 100) #(pow 2 %)))
                            (take n (iterate (partial map (partial + (/ 1 n))) (range n))))))
    (map (fn [x] (cycle (map (partial gaussian 0 1) (range x (+ x (/ 7 n)) (/ 1 n))))) (range -3 (+ 3 (/ 7 n)) (/ 7 n)))
    (map (comp cycle (partial take n)) (map repeat (repeat n 0.1))))))


(defn aa-pitch
  ([]
  (aa-pitch (concat [\. \-] amino-acid-symbols-vec)))
  ([k]
    (zipmap
     k
      (concat
       [0 0]
       (map
         (fn [i] (+ 256 (int (pow 2 (+ 4 i)))))
         (range 0 7))
       (map
         (fn [i] (+ 269 (int (pow 2 (+ 4 i)))))
         (range 0 7))
       (map
         (fn [i] (+ 285 (int (pow 2 (+ 4 i)))))
         (range 0 6))))))

(defn offset-pitches [colls]
  (map
    (fn [coll j]
      (map (fn [i] (if (== 0 i) 0 (+ i (* 1 j)))) coll))
  colls (range)))

(defn to-pitch [sequences]
  (map
    (partial map (aa-pitch))
    (map :sequence sequences)))

(def test-aa
  (concat
    (repeatedly 2
       (fn [] {:sequence amino-acid-symbols-vec}))
    (repeatedly 2
       (fn [] {:sequence (reverse amino-acid-symbols-vec)}))))