(defproject cljs-web-audio "0.1.0-SNAPSHOT"
  :description "A Clojurescipt interface to the Web Audio API with a focus on sonification as opposed to music"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies
  [
    [org.clojure/clojure "1.6.0"]
    [org.clojure/data.csv "0.1.2"]
    [org.clojure/clojurescript "0.0-2030"]
    [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]
    [incanter "1.5.4"]
    [org.clojure/clojurescript "0.0-2173"]
  ]
  :plugins [[lein-cljsbuild "1.0.2"]]
  :source-paths ["./src/clj" "./src/server"]
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
  :crossovers [cljs-web-audio.timing cljs-web-audio.data]
  }
)
