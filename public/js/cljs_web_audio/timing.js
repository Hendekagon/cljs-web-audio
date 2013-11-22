// Compiled by ClojureScript 0.0-2030
goog.provide('cljs_web_audio.timing');
goog.require('cljs.core');
cljs_web_audio.timing.relative_to_absolute = (function() {
var relative_to_absolute = null;
var relative_to_absolute__3 = (function (start,duration,timings){return relative_to_absolute.call(null,start,duration,(duration / cljs.core.reduce.call(null,cljs.core._PLUS_,timings)),timings);
});
var relative_to_absolute__4 = (function (start,duration,total_1,timings){return cljs.core.reductions.call(null,cljs.core._PLUS_,cljs.core.cons.call(null,start,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,total_1),timings)));
});
relative_to_absolute = function(start,duration,total_1,timings){
switch(arguments.length){
case 3:
return relative_to_absolute__3.call(this,start,duration,total_1);
case 4:
return relative_to_absolute__4.call(this,start,duration,total_1,timings);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
relative_to_absolute.cljs$core$IFn$_invoke$arity$3 = relative_to_absolute__3;
relative_to_absolute.cljs$core$IFn$_invoke$arity$4 = relative_to_absolute__4;
return relative_to_absolute;
})()
;

//# sourceMappingURL=timing.js.map