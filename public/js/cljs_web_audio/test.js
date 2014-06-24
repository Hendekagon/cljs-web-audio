// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_web_audio.test');
goog.require('cljs.core');
goog.require('cljs_web_audio.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs_web_audio.data');
goog.require('cljs_web_audio.data');
goog.require('cljs_web_audio.timing');
goog.require('cljs_web_audio.timing');
goog.require('cljs_web_audio.core');
goog.require('cljs_web_audio.core');
cljs_web_audio.test.cfn = (function cfn(m,ml){return (function (x){var x__3748__auto__ = (cljs.core.get.call(null,m,(Math.floor.call(null,(x * ml)) | 0)) / 3);var y__3749__auto__ = 0;return ((x__3748__auto__ > y__3749__auto__) ? x__3748__auto__ : y__3749__auto__);
});
});
cljs_web_audio.test.test4 = (function() {
var test4 = null;
var test4__0 = (function (){return test4.call(null,cljs_web_audio.core.context.call(null));
});
var test4__1 = (function (context){return test4.call(null,context,context.destination);
});
var test4__2 = (function (context,dest){var r = cljs_web_audio.core.to_float32array.call(null,cljs.core.cons.call(null,0,cljs.core.repeat.call(null,63,0.0)));var i = cljs_web_audio.core.to_float32array.call(null,cljs.core.cons.call(null,0,cljs.core.repeat.call(null,63,0.0)));var wt = cljs_web_audio.core.create_wavetable.call(null,context,r,i);var o = cljs_web_audio.core.oscillator.call(null,context,wt);var xy = cljs_web_audio.core.mouse_position_channel_BANG_.call(null);cljs_web_audio.core.connect_BANG_.call(null,o,dest);
cljs_web_audio.core.note_on_BANG_.call(null,o);
cljs_web_audio.core.T_BANG_.call(null,r,cljs.core.async.filter_LT_.call(null,new cljs.core.Keyword(null,"shift","shift",1123311604),xy));
cljs_web_audio.core.T_BANG_.call(null,i,cljs.core.async.filter_LT_.call(null,cljs_web_audio.core.C.call(null,cljs.core.not,new cljs.core.Keyword(null,"shift","shift",1123311604)),xy));
cljs_web_audio.core.GP_LT__BANG_.call(null,cljs_web_audio.core.P.call(null,cljs_web_audio.core.update_wavetable_BANG_,o,r,i),xy);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"osc","osc",1014014577),o,new cljs.core.Keyword(null,"r","r",1013904356),r,new cljs.core.Keyword(null,"i","i",1013904347),i,new cljs.core.Keyword(null,"context","context",1965435169),context], null);
});
test4 = function(context,dest){
switch(arguments.length){
case 0:
return test4__0.call(this);
case 1:
return test4__1.call(this,context);
case 2:
return test4__2.call(this,context,dest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test4.cljs$core$IFn$_invoke$arity$0 = test4__0;
test4.cljs$core$IFn$_invoke$arity$1 = test4__1;
test4.cljs$core$IFn$_invoke$arity$2 = test4__2;
return test4;
})()
;
cljs_web_audio.test.testmbs = (function() {
var testmbs = null;
var testmbs__0 = (function (){return testmbs.call(null,cljs_web_audio.core.context.call(null));
});
var testmbs__1 = (function (context){return testmbs.call(null,context,context.destination);
});
var testmbs__2 = (function (context,dest){var r = cljs_web_audio.core.to_float32array.call(null,cljs.core.cons.call(null,0,cljs.core.repeat.call(null,63,0.0)));var i = cljs_web_audio.core.to_float32array.call(null,cljs.core.cons.call(null,0,cljs.core.repeat.call(null,63,0.0)));var wt = cljs_web_audio.core.create_wavetable.call(null,context,r,i);var o = cljs_web_audio.core.oscillator.call(null,context,wt);var xy = cljs_web_audio.core.mouse_position_channel_BANG_.call(null);cljs_web_audio.core.connect_BANG_.call(null,o,dest);
cljs_web_audio.core.note_on_BANG_.call(null,o);
cljs_web_audio.core.asetting_BANG_.call(null,r,cljs.core.async.map_LT_.call(null,(function (p__28499){var map__28500 = p__28499;var map__28500__$1 = ((cljs.core.seq_QMARK_.call(null,map__28500))?cljs.core.apply.call(null,cljs.core.hash_map,map__28500):map__28500);var x = cljs.core.get.call(null,map__28500__$1,new cljs.core.Keyword(null,"x","x",1013904362));var y = cljs.core.get.call(null,map__28500__$1,new cljs.core.Keyword(null,"y","y",1013904363));return cljs.core.cons.call(null,0,cljs.core.map.call(null,cljs_web_audio.data.mandelbrot,cljs.core.map.call(null,cljs_web_audio.core.__.call(null,cljs.core.vector,y),cljs.core.range.call(null,-2,1,(3 / 63)))));
}),xy));
cljs_web_audio.core.asetting_BANG_.call(null,i,cljs.core.async.map_LT_.call(null,(function (p__28501){var map__28502 = p__28501;var map__28502__$1 = ((cljs.core.seq_QMARK_.call(null,map__28502))?cljs.core.apply.call(null,cljs.core.hash_map,map__28502):map__28502);var x = cljs.core.get.call(null,map__28502__$1,new cljs.core.Keyword(null,"x","x",1013904362));var y = cljs.core.get.call(null,map__28502__$1,new cljs.core.Keyword(null,"y","y",1013904363));return cljs.core.cons.call(null,0,cljs.core.map.call(null,cljs_web_audio.data.mandelbrot,cljs.core.map.call(null,cljs_web_audio.core.P.call(null,cljs.core.vector,x),cljs.core.range.call(null,-1,1,(2 / 63)))));
}),xy));
cljs_web_audio.core.GP_LT__BANG_.call(null,cljs_web_audio.core.P.call(null,cljs_web_audio.core.update_wavetable_BANG_,o,r,i),xy);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"osc","osc",1014014577),o,new cljs.core.Keyword(null,"r","r",1013904356),r,new cljs.core.Keyword(null,"i","i",1013904347),i,new cljs.core.Keyword(null,"context","context",1965435169),context], null);
});
testmbs = function(context,dest){
switch(arguments.length){
case 0:
return testmbs__0.call(this);
case 1:
return testmbs__1.call(this,context);
case 2:
return testmbs__2.call(this,context,dest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
testmbs.cljs$core$IFn$_invoke$arity$0 = testmbs__0;
testmbs.cljs$core$IFn$_invoke$arity$1 = testmbs__1;
testmbs.cljs$core$IFn$_invoke$arity$2 = testmbs__2;
return testmbs;
})()
;
cljs_web_audio.test.test5 = (function() {
var test5 = null;
var test5__0 = (function (){return test5.call(null,cljs_web_audio.core.context.call(null));
});
var test5__1 = (function (context){return test5.call(null,context,cljs_web_audio.core.convolver_fn.call(null,context,3000,(function (x){if((((x > 0.1)) && ((x < 0.11))) || (((x > 0.51)) && ((x < 0.513))))
{return (1.0 - x);
} else
{return 0.0;
}
})),cljs_web_audio.core.gain.call(null,context),context.destination);
});
var test5__4 = (function (context,c,gain_node,dest){var ri = cljs_web_audio.core.to_float32array.call(null,cljs.core.PersistentVector.fromArray([0,1,0,0,0,0,0,1,0,0,0,0,0,0.6,0,0,0,0.1,0,0,0,0,0,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], true));var o = cljs_web_audio.core.oscillator.call(null,context);cljs_web_audio.core.connect_BANG_.call(null,c,dest);
cljs_web_audio.core.connect_BANG_.call(null,o,gain_node);
cljs_web_audio.core.connect_BANG_.call(null,gain_node,c);
cljs_web_audio.core.connect_BANG_.call(null,gain_node,dest);
cljs_web_audio.core.note_on_BANG_.call(null,o);
cljs_web_audio.core.gain.call(null,context,gain_node,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,1,0,0,1,0], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,3,3.1,3.2,8,8.1,8.2], null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"osc","osc",1014014577),o,new cljs.core.Keyword(null,"ri","ri",1013907881),ri,new cljs.core.Keyword(null,"context","context",1965435169),context], null);
});
test5 = function(context,c,gain_node,dest){
switch(arguments.length){
case 0:
return test5__0.call(this);
case 1:
return test5__1.call(this,context);
case 4:
return test5__4.call(this,context,c,gain_node,dest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test5.cljs$core$IFn$_invoke$arity$0 = test5__0;
test5.cljs$core$IFn$_invoke$arity$1 = test5__1;
test5.cljs$core$IFn$_invoke$arity$4 = test5__4;
return test5;
})()
;
cljs_web_audio.test.tanh = (function() {
var tanh = null;
var tanh__1 = (function (x){return tanh.call(null,x,Math.exp.call(null,(2 * x)));
});
var tanh__2 = (function (x,ex2){return ((ex2 - 1) / (ex2 + 1));
});
tanh = function(x,ex2){
switch(arguments.length){
case 1:
return tanh__1.call(this,x);
case 2:
return tanh__2.call(this,x,ex2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tanh.cljs$core$IFn$_invoke$arity$1 = tanh__1;
tanh.cljs$core$IFn$_invoke$arity$2 = tanh__2;
return tanh;
})()
;
cljs_web_audio.test.u = (function u(x){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((0.3 * cljs.core.nth.call(null,x,1)) + (0.1 * cljs.core.nth.call(null,x,2))) + (0.6 * ((3.5 * cljs.core.nth.call(null,x,0)) * (1 - cljs.core.nth.call(null,x,0))))),((0.1 * cljs.core.nth.call(null,x,0)) + (0.9 * ((3.9 * cljs.core.nth.call(null,x,1)) * (1 - cljs.core.nth.call(null,x,1))))),(cljs.core.nth.call(null,x,0) * (1 / cljs.core.reduce.call(null,cljs.core._PLUS_,x)))], null);
});
cljs_web_audio.test.w = (function w(x){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_web_audio.test.tanh.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.1,0.1,0.2], null)))),cljs_web_audio.test.tanh.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.1,1,-0.9], null)))),cljs_web_audio.test.tanh.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0.9,0.1], null))))], null);
});
cljs_web_audio.test.w1 = (function w1(x){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_web_audio.test.tanh.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,0.7,0.1,0.0,0.8], null)))),cljs_web_audio.test.tanh.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,1,0.9,0.0,0.3], null)))),cljs_web_audio.test.tanh.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.3,0.9,0.1,0,0.1], null)))),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0,0,0,0], null))),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0,0.6,0.1], null)))], null);
});
cljs_web_audio.test.t = cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-1637452094,null),new cljs.core.Symbol(null,"map","map",-1640423659,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",-1640531425,null),new cljs.core.Symbol(null,"coll","coll",-1637472091,null)], null),cljs.core.list(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",1398891583,null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",401149633,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-1640531412,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"coll","coll",-1637472091,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),cljs.core.list(new cljs.core.Symbol(null,"chunked-seq?","chunked-seq?",1729307354,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-1640531428,null),cljs.core.list(new cljs.core.Symbol(null,"chunk-first","chunk-first",1163541769,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)),new cljs.core.Symbol(null,"size","size",-1637000774,null),cljs.core.list(new cljs.core.Symbol(null,"int","int",-1640427096,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"c","c",-1640531428,null))),new cljs.core.Symbol(null,"b","b",-1640531429,null),cljs.core.list(new cljs.core.Symbol(null,"chunk-buffer","chunk-buffer",-717409959,null),new cljs.core.Symbol(null,"size","size",-1637000774,null))], null),cljs.core.list(new cljs.core.Symbol(null,"dotimes","dotimes",203723604,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",-1640531422,null),new cljs.core.Symbol(null,"size","size",-1637000774,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chunk-append","chunk-append",-750359501,null),new cljs.core.Symbol(null,"b","b",-1640531429,null),cljs.core.list(new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,".nth",".nth",-1639051731,null),new cljs.core.Symbol(null,"c","c",-1640531428,null),new cljs.core.Symbol(null,"i","i",-1640531422,null))))),cljs.core.list(new cljs.core.Symbol(null,"chunk-cons","chunk-cons",1082238026,null),cljs.core.list(new cljs.core.Symbol(null,"chunk","chunk",-1545888730,null),new cljs.core.Symbol(null,"b","b",-1640531429,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"chunk-rest","chunk-rest",1082675437,null),new cljs.core.Symbol(null,"s","s",-1640531412,null))))),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",-1637472022,null),cljs.core.list(new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"s","s",-1640531412,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)))))))),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",-1640531425,null),new cljs.core.Symbol(null,"c1","c1",-1640528409,null),new cljs.core.Symbol(null,"c2","c2",-1640528408,null)], null),cljs.core.list(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",1398891583,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s1","s1",-1640527913,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"c1","c1",-1640528409,null)),new cljs.core.Symbol(null,"s2","s2",-1640527912,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"c2","c2",-1640528408,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),new cljs.core.Symbol(null,"s1","s1",-1640527913,null),new cljs.core.Symbol(null,"s2","s2",-1640527912,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",-1637472022,null),cljs.core.list(new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"s1","s1",-1640527913,null)),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"s2","s2",-1640527912,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"s1","s1",-1640527913,null)),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"s2","s2",-1640527912,null)))))))),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",-1640531425,null),new cljs.core.Symbol(null,"c1","c1",-1640528409,null),new cljs.core.Symbol(null,"c2","c2",-1640528408,null),new cljs.core.Symbol(null,"c3","c3",-1640528407,null)], null),cljs.core.list(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",1398891583,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s1","s1",-1640527913,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"c1","c1",-1640528409,null)),new cljs.core.Symbol(null,"s2","s2",-1640527912,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"c2","c2",-1640528408,null)),new cljs.core.Symbol(null,"s3","s3",-1640527911,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"c3","c3",-1640528407,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),new cljs.core.Symbol(null,"s1","s1",-1640527913,null),new cljs.core.Symbol(null,"s2","s2",-1640527912,null),new cljs.core.Symbol(null,"s3","s3",-1640527911,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",-1637472022,null),cljs.core.list(new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"s1","s1",-1640527913,null)),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"s2","s2",-1640527912,null)),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"s3","s3",-1640527911,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"s1","s1",-1640527913,null)),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"s2","s2",-1640527912,null)),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"s3","s3",-1640527911,null)))))))),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",-1640531425,null),new cljs.core.Symbol(null,"c1","c1",-1640528409,null),new cljs.core.Symbol(null,"c2","c2",-1640528408,null),new cljs.core.Symbol(null,"c3","c3",-1640528407,null),new cljs.core.Symbol(null,"&","&",-1640531489,null),new cljs.core.Symbol(null,"colls","colls",-1545688896,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"step","step",-1636990843,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.Symbol(null,"step","step",-1636990843,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cs","cs",-1640528343,null)], null),cljs.core.list(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",1398891583,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ss","ss",-1640527847,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"cs","cs",-1640528343,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),new cljs.core.Symbol(null,"identity","identity",-1776293257,null),new cljs.core.Symbol(null,"ss","ss",-1640527847,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",-1637472022,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"ss","ss",-1640527847,null)),cljs.core.list(new cljs.core.Symbol(null,"step","step",-1636990843,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"ss","ss",-1640527847,null))))))))], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__28503#","p1__28503#",1710366667,null)], null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"f","f",-1640531425,null),new cljs.core.Symbol(null,"p1__28503#","p1__28503#",1710366667,null))),cljs.core.list(new cljs.core.Symbol(null,"step","step",-1636990843,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1637472031,null),new cljs.core.Symbol(null,"colls","colls",-1545688896,null),new cljs.core.Symbol(null,"c3","c3",-1640528407,null),new cljs.core.Symbol(null,"c2","c2",-1640528408,null),new cljs.core.Symbol(null,"c1","c1",-1640528409,null)))))));
cljs_web_audio.test.theremin_BANG_ = (function() {
var theremin_BANG_ = null;
var theremin_BANG___0 = (function (){return theremin_BANG_.call(null,cljs_web_audio.core.mouse_position_channel_BANG_.call(null));
});
var theremin_BANG___1 = (function (xy){return cljs_web_audio.core.f_LT__BANG_G.call(null,cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._STAR_,2000),new cljs.core.Keyword(null,"x","x",1013904362)),xy));
});
theremin_BANG_ = function(xy){
switch(arguments.length){
case 0:
return theremin_BANG___0.call(this);
case 1:
return theremin_BANG___1.call(this,xy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
theremin_BANG_.cljs$core$IFn$_invoke$arity$0 = theremin_BANG___0;
theremin_BANG_.cljs$core$IFn$_invoke$arity$1 = theremin_BANG___1;
return theremin_BANG_;
})()
;
cljs_web_audio.test.aclm = (function aclm(r,x){return ((r * x) * (1 - x));
});
cljs_web_audio.test.ot = (function() {
var ot = null;
var ot__0 = (function (){return ot.call(null,cljs_web_audio.core.mouse_position_channel_BANG_.call(null));
});
var ot__1 = (function (xy){return cljs_web_audio.core.play_BANG_.call(null,cljs_web_audio.core.Yf_LT__BANG_G.call(null,cljs_web_audio.core.f_LT__BANG_G.call(null,cljs.core.async.map_LT_.call(null,cljs_web_audio.core.pc.call(null,cljs.core._STAR_,cljs.core.first,cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._PLUS_,1),cljs_web_audio.core.P.call(null,cljs.core._STAR_,15000),new cljs.core.Keyword(null,"y","y",1013904363)),xy),4000),cljs_web_audio.core.o.call(null,cljs_web_audio.core.pc.call(null,(function (r,p__28506){var vec__28507 = p__28506;var x = cljs.core.nth.call(null,vec__28507,0,null);var y = cljs.core.nth.call(null,vec__28507,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_web_audio.test.aclm.call(null,r,((x + y) / 2)),cljs_web_audio.test.aclm.call(null,(r + 0.1),((x + y) / 2))], null);
}),cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._PLUS_,3.5),cljs_web_audio.core.P.call(null,cljs.core._STAR_,0.5),new cljs.core.Keyword(null,"x","x",1013904362)),xy),3.1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,0.7], null)))),cljs.core.async.map_LT_.call(null,cljs_web_audio.core.pc.call(null,cljs.core._STAR_,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._PLUS_,10),cljs_web_audio.core.P.call(null,cljs.core._STAR_,10000),new cljs.core.Keyword(null,"y","y",1013904363)),xy),2000),cljs_web_audio.core.o.call(null,cljs_web_audio.core.pc.call(null,(function (r,x){return ((r * x) * (1 - x));
}),cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._PLUS_,3),cljs_web_audio.core.P.call(null,cljs.core._STAR_,1),new cljs.core.Keyword(null,"x","x",1013904362)),xy),2.1),0.6))));
});
ot = function(xy){
switch(arguments.length){
case 0:
return ot__0.call(this);
case 1:
return ot__1.call(this,xy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ot.cljs$core$IFn$_invoke$arity$0 = ot__0;
ot.cljs$core$IFn$_invoke$arity$1 = ot__1;
return ot;
})()
;
cljs_web_audio.test.ot1 = (function() {
var ot1 = null;
var ot1__0 = (function (){return ot1.call(null,cljs_web_audio.core.mouse_position_channel_BANG_.call(null));
});
var ot1__1 = (function (xy){return cljs_web_audio.core.play_BANG_.call(null,cljs_web_audio.core.f_LT__BANG_G.call(null,cljs.core.async.map_LT_.call(null,cljs_web_audio.core.pc.call(null,cljs.core._STAR_,cljs.core.first,cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._PLUS_,1),cljs_web_audio.core.P.call(null,cljs.core._STAR_,15000),new cljs.core.Keyword(null,"y","y",1013904363)),xy),4000),cljs_web_audio.core.o.call(null,cljs_web_audio.core.pc.call(null,(function (r,p__28510){var vec__28511 = p__28510;var x = cljs.core.nth.call(null,vec__28511,0,null);var y = cljs.core.nth.call(null,vec__28511,1,null);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_web_audio.test.aclm.call(null,r,x)], null);
}),cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._PLUS_,3),new cljs.core.Keyword(null,"x","x",1013904362)),xy),3.13859273885),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,0.7], null)))));
});
ot1 = function(xy){
switch(arguments.length){
case 0:
return ot1__0.call(this);
case 1:
return ot1__1.call(this,xy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ot1.cljs$core$IFn$_invoke$arity$0 = ot1__0;
ot1.cljs$core$IFn$_invoke$arity$1 = ot1__1;
return ot1;
})()
;
cljs_web_audio.test.test17 = (function test17(){return cljs_web_audio.core.osc_PLUS_.call(null,cljs_web_audio.core.oscillations_BANG_.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3000,1,1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2000,1,2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [4000,1,1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1000,0,3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [300,0.5,3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [400,0.2,3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [600,0.1,3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [500,0.6,1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [900,0.9,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [400,0,1], null)], null),4),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [300,1,2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [100,1,1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [400,1,3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1000,0,1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [100,1,2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [450,0.2,4], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1600,0.1,1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [700,0.6,3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [910,0.9,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [430,0,1], null)], null),8);
});
cljs_web_audio.test.test61 = (function test61(){return cljs_web_audio.core.play_BANG_.call(null,cljs_web_audio.core.oscillations_BANG_.call(null,cljs_web_audio.timing.exp_to_morse.call(null,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"inc","inc",-1640427113,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1532251402,null),4))),8));
});
cljs_web_audio.test.phi = (function phi(x){return (Math.exp(((-0.5 * x) * x)) / Math.sqrt((2 * Math.PI)));
});
cljs_web_audio.test.guassian = (function() {
var guassian = null;
var guassian__3 = (function (x,u,s){return guassian.call(null,x,u,s,(1 / s));
});
var guassian__4 = (function (x,u,s,s1){return (s1 * cljs_web_audio.test.phi.call(null,(s1 * (x - u))));
});
guassian = function(x,u,s,s1){
switch(arguments.length){
case 3:
return guassian__3.call(this,x,u,s);
case 4:
return guassian__4.call(this,x,u,s,s1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guassian.cljs$core$IFn$_invoke$arity$3 = guassian__3;
guassian.cljs$core$IFn$_invoke$arity$4 = guassian__4;
return guassian;
})()
;
cljs_web_audio.test.sheperd = (function sheperd(){return cljs_web_audio.core.chorus.call(null,cljs_web_audio.data.sheperd.call(null));
});
cljs_web_audio.test.play_us_flu = (function play_us_flu(){return cljs_web_audio.core.play_BANG_.call(null,cljs_web_audio.core.redfreqs.call(null,cljs.core.take.call(null,52,cljs.core.rest.call(null,cljs_web_audio.data.flu.call(null,cljs_web_audio.data.flu_us,161))),32));
});
cljs_web_audio.test.play_au_flu = (function play_au_flu(){return cljs_web_audio.core.play_BANG_.call(null,cljs_web_audio.core.redfreqs.call(null,cljs.core.rest.call(null,cljs_web_audio.data.flu.call(null,cljs_web_audio.data.flu_au,7)),32));
});
cljs_web_audio.test.play_world_flu = (function play_world_flu(){return cljs_web_audio.core.play_BANG_.call(null,cljs_web_audio.core.redfreqs.call(null,cljs_web_audio.data.flu.call(null,cljs_web_audio.data.flu_world,cljs.core.count.call(null,cljs_web_audio.data.world_countries)),32));
});
cljs_web_audio.test.play_water = (function play_water(){return cljs_web_audio.core.play_BANG_.call(null,cljs_web_audio.core.redfreqs.call(null,cljs_web_audio.core.trans.call(null,cljs.core.map.call(null,(function (p__28514){var vec__28515 = p__28514;var x = cljs.core.nth.call(null,vec__28515,0,null);var y = cljs.core.nth.call(null,vec__28515,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x * 5000),(0.5 * y)], null);
}),cljs_web_audio.data.water.call(null))),32));
});
cljs_web_audio.test.inspect = (function inspect(x){if(cljs.core.truth_(document.getElementById("debug")))
{document.getElementById("debug").textContent = [cljs.core.str(x)].join('');
} else
{}
return x;
});
cljs_web_audio.test.to_rgb = (function to_rgb(x){return [cljs.core.str("rgb("),cljs.core.str((255 * new cljs.core.Keyword(null,"ax","ax",1013907369).cljs$core$IFn$_invoke$arity$1(x))),cljs.core.str(","),cljs.core.str((255 * new cljs.core.Keyword(null,"ay","ay",1013907370).cljs$core$IFn$_invoke$arity$1(x))),cljs.core.str(","),cljs.core.str((255 * new cljs.core.Keyword(null,"az","az",1013907371).cljs$core$IFn$_invoke$arity$1(x))),cljs.core.str(")")].join('');
});
cljs_web_audio.test.rgb_BANG_ = (function rgb_BANG_(x){document.documentElement.style.backgroundColor = cljs_web_audio.test.to_rgb.call(null,x);
return x;
});
cljs_web_audio.test.mm = (function mm(x){return (500 + (100 * Math.cos((16 * x))));
});
cljs_web_audio.test.ddd = (function ddd(x){return cljs.core.mod.call(null,((x / 6) | 0),2);
});
cljs_web_audio.test.red = (function red(){return cljs_web_audio.test.rgb_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ax","ax",1013907369),0,new cljs.core.Keyword(null,"ay","ay",1013907370),1,new cljs.core.Keyword(null,"az","az",1013907371),0], null));
});
cljs_web_audio.test.play_iphone = (function() {
var play_iphone = null;
var play_iphone__0 = (function (){console.log("playing iphone ",cljs_web_audio.test.to_rgb.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ax","ax",1013907369),0.8,new cljs.core.Keyword(null,"ay","ay",1013907370),0.1,new cljs.core.Keyword(null,"az","az",1013907371),0.2], null)),document.documentElement.style.backgroundColor);
return play_iphone.call(null,cljs_web_audio.core.device_motion_channel_BANG_.call(null));
});
var play_iphone__1 = (function (device_motion_channel){return cljs_web_audio.core.play_BANG_.call(null,cljs_web_audio.core.red_LT_f_BANG_G.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._PLUS_,500),cljs_web_audio.core.P.call(null,cljs.core._STAR_,200),cljs_web_audio.test.ddd,cljs_web_audio.core.P.call(null,cljs.core._STAR_,360),new cljs.core.Keyword(null,"agx","agx",1014000772)),device_motion_channel),cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._PLUS_,300),cljs_web_audio.core.P.call(null,cljs.core._STAR_,200),cljs_web_audio.test.ddd,cljs_web_audio.core.P.call(null,cljs.core._STAR_,360),new cljs.core.Keyword(null,"agy","agy",1014000773)),device_motion_channel),cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._PLUS_,100),cljs_web_audio.core.P.call(null,cljs.core._STAR_,200),cljs_web_audio.test.ddd,cljs_web_audio.core.P.call(null,cljs.core._STAR_,360),new cljs.core.Keyword(null,"agz","agz",1014000774)),device_motion_channel)], null)));
});
play_iphone = function(device_motion_channel){
switch(arguments.length){
case 0:
return play_iphone__0.call(this);
case 1:
return play_iphone__1.call(this,device_motion_channel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
play_iphone.cljs$core$IFn$_invoke$arity$0 = play_iphone__0;
play_iphone.cljs$core$IFn$_invoke$arity$1 = play_iphone__1;
return play_iphone;
})()
;

//# sourceMappingURL=test.js.map