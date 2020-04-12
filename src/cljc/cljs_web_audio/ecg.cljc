(ns cljs-web-audio.ecg
  (:require [clojure.core.async :as as]))

(defn vm [f op] (fn [m p & args]
  (with-meta (apply f m p args) {:op op :path p})))

(def asoc (vm assoc-in :+))

(def updt (vm update-in :*))

(defn dissoc-in [m p]
  (let [pp (butlast p) lp (last p)]
    (if (empty? pp)
      (dissoc m lp)
      (update-in m pp (fn [n] (dissoc n lp))))))

(def disc (vm dissoc-in :-))

(defn hand [s e]
  (({
     {:key :w} (fn [s e] (updt s [:x :y :w] inc))
     {:key :q} (fn [s e] (updt s [:x :y :w] dec))
     {:key :a} (fn [s e] (asoc s [:x :q] 5))
     {:key :s} (fn [s e] (updt s [:x :q] inc))
     {:key :d} (fn [s e] (disc s [:x :q]))
     } e (fn [s e] s)) s e))

(defmulti component (fn [s p] (:kind s)))

(defmethod component :thing [q p]
  [:div {:class :thing} q])

(defmethod component :root [{x :x q :q :as root} p]
  [:div {}
    "root" [component root [:q]]])

(defprotocol Component
  (c+ [this parent])
  (c- [this parent])
  (c* [this parent]))

(defrecord TestComp [spec]
  Component
  (c+ [this parent] (let [e :an-element] (println "(set! .-textContent e children) (.appendChild parent e)") (assoc spec :node e)))
  (c- [this parent] (println "(.removeChild parent node)") (dissoc spec :node))
  (c* [this parent] (println "(mutate)") spec))

(defn mount-ch [{rc :ch-render :as s}]
  (let [root :docment
        d (as/<!! rc)
        {op :op path :path} (meta d)
        h (component (assoc d :kind :root) [])
        ce (TestComp. {:parent root :spec h})
        node-by-spec {h ce}
        ]
    (c+ ce root)
    (as/go-loop [{re :ch-render} s]
      (let [d (as/<! rc) {op :op path :path} (meta d)]
        (case op
          :+ (c+ ce root)
          :- (c- ce root)
          :* (c* ce root)))
      (when rc (recur s)))
      (assoc s :nodes node-by-spec)))

(defn make-channel-graph []
  (let [
         ch-state (as/chan)
         ch-event (as/chan)
         ch-eval  (as/map hand [ch-state ch-event])
         ch-mult  (as/mult ch-eval)
         ch-loop  (as/chan)
         ch-render (as/chan)
       ]
   (as/tap ch-mult ch-loop)
   (as/tap ch-mult ch-render)
   (as/pipe ch-loop ch-state)
   {
     :close! (fn [] (doseq [c [ch-state ch-event ch-eval ch-loop ch-render]]
                      (as/close! c)))
     :ch-state ch-state
     :ch-event ch-event
     :ch-render ch-render
   }))

(defn component-fns [c]
  (filter (fn [tc] (and (vector? tc) (or (fn? (first tc)) (= (type (first tc)) clojure.lang.MultiFn)))) c))

(defn make-atom-graph []
  (let [
         state (atom {:q 4 :x {:y {:w 5 :z 9}}})
         root :root
         h (component (assoc @state :kind :root) [])
         ce (TestComp. {:parent root :spec h})
         nodes (loop [n {[] ce} {{[k a & c :as s] :spec} :spec} ce]
                       (println ">>" (component-fns c) c)
                        (let [cc (first (component-fns c))]
                          (if cc
                            (let [nc (apply (first cc) (rest cc))]
                              (recur (assoc n (last cc) (TestComp. {:parent ce :spec nc})) nc))
                            n)))
         render-fn (fn [o n {op :op path :path}]
          (println ">" op path)
          (case op
            :+ (c+ (nodes path) root)
            :- (c- (nodes path) root)
            :* (c* (nodes path) root)))
       ]
   (add-watch state :render
     (fn [k r o n]
       (let [{path :path :as m} (meta n)]
         (when (not= o n)
           (render-fn o n
             (if (and (get-in o path) (get-in n path))
               (assoc m :op :*) m))))))
    {
     :close! (fn [] (remove-watch state :render))
     :state state
     :nodes nodes
     }))