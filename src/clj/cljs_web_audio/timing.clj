(ns cljs-web-audio.timing)

; this will be where the scheduling functions can go

(defn relative-to-absolute
  ([start duration timings] (relative-to-absolute start duration (/ duration (reduce + timings)) timings))
  ([start duration total-1 timings]
    (reductions + (cons start (map (partial * total-1) timings)))
  )
)