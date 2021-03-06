(ns cljs-web-audio.timing)

(defn relative-to-absolute
  ([start duration timings] (relative-to-absolute start duration (/ duration (reduce + timings)) timings))
  ([start duration total-1 timings]
    (reductions + (cons start (map (partial * total-1) timings)))))

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
    \+ :.-.-.
    \* :.-.-.-
    \\ :.-.-.-.-
    \- :-....-
    \_ :..--.-
    \= :-...-
    \# :-..-..-..-..
    \% :.-----.
    \? :..--..
    \@ :.--.-.
    \space :_
    \. :_
   })

(def morse-timing
  (reduce
    (fn [m [c k]]
      (assoc m c
        (interleave
          (map (fn [d] ({\- [1 3] \. [1 1] \_ [0 2]} d)) (name k)) (repeat [0 1]))))
    {}
    morse))

(defn string-to-morse [s]
  (mapcat (fn [c] (get morse-timing c [[0 1]])) (.toLowerCase s)))

(defn exp-to-morse
  "Return a Morse-coding of the given Clojure expression"
  ([x] (exp-to-morse 0 (concat x ["."])))
  ([level x]
    (cond
      (or (seq? x) (list? x) (vector? x) (associative? x)) (mapcat (partial exp-to-morse (inc level)) x)
      (or (symbol? x) (keyword? x)) (map (partial cons (+ 400 (* 100 level))) (string-to-morse (name x)))
      :default (map (partial cons (+ 400 (* 100 level))) (string-to-morse (str x))))))

