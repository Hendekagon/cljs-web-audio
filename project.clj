(defproject cljs-web-audio "0.1.1"
  :description
    "A Clojurescipt interface to the Web Audio API with a focus on sonification as opposed to music"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies
  [
    [org.clojure/clojure "1.8.0"]
    [org.clojure/data.csv "0.1.3"]
    [org.clojure/core.match "0.3.0-alpha4"]
    [org.clojure/core.async "0.2.374"]
    [org.clojure/clojurescript "1.8.51"]
    [cljs-ajax "0.5.5"]
    [com.lucasbradstreet/instaparse-cljs "1.4.1.2"]
  ]
  :source-paths ["src"]
)
