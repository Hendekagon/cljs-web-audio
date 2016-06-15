(ns cljs-web-audio.maths)


(defn F [f y] (fn [x] (f x y)))

(def trans (partial apply (partial map vector)))

(def PI #?(:clj Math/PI :cljs js/Math.PI))

(def PI2 (* 2 PI))

(defn pow [x y] #?(:clj (Math/pow x y) :cljs (.pow js/Math x y)))

(defn exp [x] #?(:clj (Math/exp x) :cljs (.exp js/Math )))

(defn ln [x] #?(:clj (Math/log x) :cljs (.sqrt js/log x)))

(def x2 (F pow 2))

(defn sqrt [x] #?(:clj (Math/sqrt x) :cljs (.sqrt js/Math x)))

(defn round [x] #?(:clj (Math/round x) :cljs (.round js/Math x)))

(defn abs [x] #?(:clj (Math/abs x) :cljs (.abs js/Math x)))

(defn phi [x] (/ (exp (* -0.5 x x)) (sqrt (* 2 PI))))

(defn gaussian ([u s x] (gaussian u s (/ 1 s) x)) ([u s s1 x] (* s1 (phi (* s1 (- x u))))))
