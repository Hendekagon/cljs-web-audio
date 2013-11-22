(defproject cljs-web-audio "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies
  [
    [org.clojure/clojure "1.5.1"]
    [org.clojure/clojurescript "0.0-2030"]
    [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]
  ]
  :plugins [[lein-cljsbuild "0.3.4"]]
  :source-paths ["./src/clj"]
  :cljsbuild
  {
  :builds
   [
    {:source-paths ["./src/cljs"]
     :id "dev"
     :compiler
       {
        :pretty-print false
        :output-dir "./public/js/"
        :output-to "./public/js/cljs-web-audio.js"
        :crossover-path "cljs"
        :source-map true
        :optimizations :none
       }
     }
    ]
  :crossovers [cljs-web-audio.timing]
  }
)
