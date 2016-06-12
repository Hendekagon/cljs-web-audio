(ns cljs-web-audio.repl
  "

  Some convenience functions for working in a REPL

  Configure logging, build the client, run the server etc

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
                :main "cljs-web-audio.test"
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
         :main "cljs-web-audio.test"
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

(comment (defn running-the-server []
   (ns server)
   (use :reload 'dynomics.ui.css)
   (require :reload '[dynomics.server :as s])
   (require
     '[manifold.stream :as ms])
   (use 'clojure.stacktrace 'dynomics.repl)
   (eval '(do
            (timbre/merge-config! logging-config)
            (defonce my-server (atom nil))
            (println "-----")
            (defn reload-style [] (do (use :reload 'dynomics.ui.css) (ms/put! @(:channel @my-server) (pr-str {:verb :new :type :style :style (make-main-gui-style)}))))
            (defn stop! [] (cond @my-server (try (.close @my-server) (catch Exception e))) (reset! my-server nil))
            (defn restart! ([] (restart! {:host "127.0.0.1" :port 8081})) ([config] (stop!) (reset! my-server (s/start config))))
            (println "--- Server ---")
            (println)
            (println "to run the server (restart!), or (restart {:host \"ip-address\" :port 8081})")
            (println "to stop it (stop!)")
            (println "server state is in my-server")
            (println "Remember to (cljs-build) the client if you haven't already")
            17))))