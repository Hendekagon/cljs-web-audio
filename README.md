# clj-web-audio

An extremely rough Clojurescript interface to the Web Audio API.

The aim of this library is (was) to provide some nice abstractions for
sonification of data, *not* for playing or generating music.

I've pretty much given-up on this though, because I don't know enough about
audio to do this right (esp WRT timing, I mean my use of core.async was probably a mistake for a start
, then there's the issue of how to schedule sounds to play at the right times,
which this code doesn't address at all)

It could be useful for you to read anyway just to see how to use web-audio from Clojurescript

Enough apologes


## Usage

Use

$ lein cljbuild once

to compile, then call it from your webpage as in the examples given in ./public

or, use a repl - if you know Clojurescript you'll know what to do.

It's so rough it's barely usable, but see tests.cljs, which are my experiments.

(Examples here)[http://celeriac.net/sx/public/]

FIXME

## License

Copyright © 2013 Matthew Chadwick

Distributed under the Eclipse Public License, the same as Clojure.
