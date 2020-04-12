(ns cljs-web-audio.main
  (:require
    ;[cljs-web-audio.examples.test :as x]
    [cljs-web-audio.core :as audio :refer [pc o Yf<!G f<!G play! osc+ oscillations! redosc! chorus]]
    [cljs.core.async :refer [put! take! chan <! >! map< filter< mult pipe tap to-chan sliding-buffer]]
    [cljs-web-audio.examples.ear :as ear]
    [cljs-web-audio.timing :as timing]))

; last time I played with this the accelerations were in the
; range -4000 - 40000 on ios
(defn play-iphone
  ([]
   (play-iphone
     ;(audio/ws<! "ws://127.0.0.1:8080/")
     (audio/device-motion-channel!)))
  ([device-motion-channel]
   (audio/play!
     (audio/red<f!G
       [
        (map< (comp (partial + 5000) :agx) device-motion-channel)
        (map< (comp (partial + 4000) :agy) device-motion-channel)
        (map< (comp (partial + 4000) :agz) device-motion-channel)
        ]))))

(defn play-some-data-as-morse! []
  (play!
    (oscillations!
      (timing/exp-to-morse '(map inc (range 4))) 8)))

(defn start! []
  ;(play! (chorus ))
  ;(play-some-data-as-morse!)
  (audio/fvt... {:coll [{:f 400 :v 1 :t 2} {:f 500 :v 1 :t 4} {:f 800 :v 1 :t 2}]})
  )

(start!)