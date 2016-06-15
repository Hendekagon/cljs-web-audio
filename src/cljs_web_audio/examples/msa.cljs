(ns cljs-web-audio.examples.msa
  (:require
  [clojure.string :as string]
  [ajax.core :refer [GET POST]]
  [instaparse.core :as ip]
  [cljs.core.match :refer-macros [match]]))

(def stockholm-format-parser
  (ip/parser
    "
      stockholm = line+ <'//'>
      line = markupline | namedsequence
      markupline = <'#'> <markupstart> (markup <spaces>?)+ <'\n'>
      namedsequence = name <spaces> sequence <'\n'>
      spaces = #'\\s+'
      name = #'\\w+_\\w+/\\d+-\\d+'
      sequence = #'[a-zA-Z\\.\\+]+'
      markup = #'\\S+'
      markupstart = #'=|\\s'
      newline =#'\n'
    "
    ))

(defn parse-stockholm-lines [l]
  (stockholm-format-parser (apply str (interpose \newline l))))

(defn parse-markup-line
  ([[t & stuff]]
    (case t
      "STOCKHOLM" [[:version] (first stuff)]
      "GF" ((fn [[feature content]] [[:GF (keyword feature)] content]) stuff)
      "GC" ((fn [[feature content]] [[:GF (keyword feature)] content]) stuff)
      "GS" ((fn [[seqname feature content]] [[:GS seqname (keyword feature)] content]) stuff)
      "GR" ((fn [[seqname feature content]] [[:GS seqname (keyword feature)] content]) stuff)
      [[:nothing] :nothing]
      )))

(defn sequences-from-stockholm
  ([s]
   (match [s]
    [[:stockholm & lines]]
      (reduce (fn [r [k v]] (assoc-in r k v)) {} (map sequences-from-stockholm lines))
    [[:line [:namedsequence [:name name] [:sequence sequence]]]]
      [[:sequences name] {:name name :sequence sequence}]
    [[:line [:markupline & markups]]]
      (parse-markup-line (map last markups))
    :else nil)))

(defn get-pfam [id f]
  (GET (str "http://cors.io/?u=http://pfam.xfam.org/family/" id "/alignment/seed")
       {:handler
                         (fn [r]
                           (f (sequences-from-stockholm
                                (parse-stockholm-lines
                                  (string/split-lines r)))))
        :error-handler   (fn [e] (println e))
        :response-format :text
        }))