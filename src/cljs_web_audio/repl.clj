(ns cljs-web-audio.repl
  "

  "
  (:use clojure.pprint clojure.stacktrace)
  (:require
    [cljs.build.api :as cljs]
    [cljs.repl.browser :as brepl]
    [clojure.tools.nrepl :as nrepl]
    ))

(def cljs-options
  {
   :source-paths ["src"]
   :production {
                :output-to "public/js/main.js"
                :output-dir "public/js"
                :asset-path "js"
                :optimizations :advanced
                :externs ["src/externs.js"]
                :main "cljs-web-audio.examples.test"
                :pretty-print false
                :parallel-build true}

   :dev {
         :source-map true
         :source-map-timestamp true
         :source-map-path "public/js"
         :output-to "public/js/main.js"
         :output-dir "public/js"
         :asset-path "js"
         :optimizations :none
         :main "cljs-web-audio.examples.test"
         :pretty-print true
         :warnings true
         :compiler-stats true
         :parallel-build true
         }})

(defn cljs-build []
  (cljs/build "src" (:dev cljs-options)))

(defn cljs-build-production []
  (cljs/build "src" (:production cljs-options)))

(defn cljs-watch []
  (cljs/watch "src" (:dev cljs-options)))