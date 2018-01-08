(defproject cljs-web-audio "0.1.1"
  :description
    "A Clojurescipt interface to the Web Audio API with a focus on sonification as opposed to music"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies
  [
    [org.clojure/clojure "1.9.0"]
    [org.clojure/data.csv "0.1.4"]
    [org.clojure/core.match "0.3.0-alpha4"]
    [org.clojure/core.async "0.3.465"]
    [org.clojure/clojurescript "1.9.946"]
    [cljs-ajax "0.7.3"]
    [aleph "0.4.3"]
    [compojure "1.6.0"]
    [ring/ring-jetty-adapter "1.4.0"]
    [ring/ring-defaults "0.3.1"]
    [com.lucasbradstreet/instaparse-cljs "1.4.1.2"]
  ]
  :plugins [[lein-cljsbuild "1.1.5" :exclusions [org.clojure/clojure]]
            [lein-figwheel "0.5.13" :exclusions [org.clojure/clojure]]]
  :source-paths ["src/clj" "src/cljs"]
  :cljsbuild {:builds
              [
               {
                :id           "dev"
                :source-paths ["src/cljc" "src/cljs"]
                :figwheel     {
                               :websocket-host "192.168.1.84"
                               ;:before-jsload  "actin.ui.main/before-start!"
                               :on-jsload      "cljs-web-audio.main/start!"
                               }
                :compiler     {
                               :main                 "cljs-web-audio.main"
                               :asset-path           "js"
                               :source-map           true
                               :source-map-timestamp true
                               :pretty-print         true
                               :externs              ["externs.js"]
                               :output-to            "public/js/main.js"
                               :output-dir           "public/js"
                               :optimizations        :none
                               :parallel-build       true
                               }
                }
               {
                :id           "min"
                :source-paths ["src/cljc" "src/cljs"]
                :compiler     {
                               :main             "cljs-web-audio.main"
                               :asset-path       "js"
                               :externs          ["externs.js"]
                               :output-to        "public/js/min/main.js"
                               :output-dir       "public/js/min"
                               :optimizations    :advanced
                               :static-fns       true
                               :fn-invoke-direct true
                               :parallel-build   true
                               }
                }
               ]}
)
