// Compiled by ClojureScript 0.0-2030
goog.provide('cljs_web_audio.test');
goog.require('cljs.core');
goog.require('cljs_web_audio.core');
goog.require('cljs_web_audio.core');
cljs_web_audio.test.morse = cljs.core.PersistentHashMap.fromArrays([" ","@","a","b","#","c","d","%","e","f","g","h","i","*","j","+","k","l","-","m",".","n","o","0","p","1","q","2","r","3","s","4","t","5","u","6","v","7","w","8","x","9","y","z","\\","=","?","_"],[new cljs.core.Keyword(null,"_","_",1013904337),new cljs.core.Keyword(null,"\u00B7\u2013\u2013\u00B7\u2013\u00B7","\u00B7\u2013\u2013\u00B7\u2013\u00B7",1196212406),new cljs.core.Keyword(null,".-",".-",1013905713),new cljs.core.Keyword(null,"-...","-...",1015290515),new cljs.core.Keyword(null,"-..-..-..-..","-..-..-..-..",3359085874),new cljs.core.Keyword(null,"-.-.","-.-.",1015290484),new cljs.core.Keyword(null,"-..","-..",1013948959),new cljs.core.Keyword(null,".-----.",".-----.",4515623425),new cljs.core.Keyword(null,".",".",1013904288),new cljs.core.Keyword(null,"..-.","..-.",1015320275),new cljs.core.Keyword(null,"--.","--.",1013948928),new cljs.core.Keyword(null,"...","...",1013949920),new cljs.core.Keyword(null,"..","..",1013905714),new cljs.core.Keyword(null,".-.-.-",".-.-.-",2373818735),new cljs.core.Keyword(null,".---",".---",1015319313),new cljs.core.Keyword(null,"\u00B7\u2013\u00B7\u2013\u00B7","\u00B7\u2013\u00B7\u2013\u00B7",1427953073),new cljs.core.Keyword(null,"-.-","-.-",1013948958),new cljs.core.Keyword(null,".-..",".-..",1015319345),new cljs.core.Keyword(null,"\u2013\u00B7\u00B7\u00B7\u00B7\u2013","\u2013\u00B7\u00B7\u00B7\u00B7\u2013",4334274962),new cljs.core.Keyword(null,"--","--",1013905682),new cljs.core.Keyword(null,"_","_",1013904337),new cljs.core.Keyword(null,"-.","-.",1013905683),new cljs.core.Keyword(null,"---","---",1013948927),new cljs.core.Keyword(null,"-----","-----",1056847967),new cljs.core.Keyword(null,".--.",".--.",1015319314),new cljs.core.Keyword(null,".---",".---",1015319313),new cljs.core.Keyword(null,"--.-","--.-",1015289553),new cljs.core.Keyword(null,"..---","..---",1057801279),new cljs.core.Keyword(null,".-.",".-.",1013949889),new cljs.core.Keyword(null,"...--","...--",1057802240),new cljs.core.Keyword(null,"...","...",1013949920),new cljs.core.Keyword(null,"....-","....-",1057802271),new cljs.core.Keyword(null,"-","-",1013904287),new cljs.core.Keyword(null,".....",".....",1057802272),new cljs.core.Keyword(null,"..-","..-",1013949919),new cljs.core.Keyword(null,"-....","-....",1056878751),new cljs.core.Keyword(null,"...-","...-",1015320305),new cljs.core.Keyword(null,"--...","--...",1056848960),new cljs.core.Keyword(null,".--",".--",1013949888),new cljs.core.Keyword(null,"---..","---..",1056847999),new cljs.core.Keyword(null,"-..-","-..-",1015290514),new cljs.core.Keyword(null,"----.","----.",1056847968),new cljs.core.Keyword(null,"-.--","-.--",1015290483),new cljs.core.Keyword(null,"--..","--..",1015289554),new cljs.core.Keyword(null,".-.-.-.-",".-.-.-.-",2221675502),new cljs.core.Keyword(null,"\u2013\u00B7\u00B7\u00B7\u2013","\u2013\u00B7\u00B7\u00B7\u2013",4307609377),new cljs.core.Keyword(null,"\u00B7\u00B7\u2013\u2013\u00B7\u00B7","\u00B7\u00B7\u2013\u2013\u00B7\u00B7",2379586450),new cljs.core.Keyword(null,"\u00B7\u00B7\u2013\u2013\u00B7\u2013","\u00B7\u00B7\u2013\u2013\u00B7\u2013",2379594478)]);
cljs_web_audio.test.morse_timing = cljs.core.reduce.call(null,(function (m,p__761046){var vec__761047 = p__761046;var c = cljs.core.nth.call(null,vec__761047,0,null);var k = cljs.core.nth.call(null,vec__761047,1,null);return cljs.core.assoc.call(null,m,c,cljs.core.interleave.call(null,cljs.core.map.call(null,(function (d){return cljs.core.PersistentArrayMap.fromArray(["-",cljs.core.PersistentVector.fromArray([1,3], true),".",cljs.core.PersistentVector.fromArray([1,1], true),"_",cljs.core.PersistentVector.fromArray([0,2], true)], true).call(null,d);
}),cljs.core.name.call(null,k)),cljs.core.repeat.call(null,cljs.core.PersistentVector.fromArray([0,1], true))));
}),cljs.core.PersistentArrayMap.EMPTY,cljs_web_audio.test.morse);
cljs_web_audio.test.string_to_morse = (function string_to_morse(s){return cljs.core.mapcat.call(null,(function (c){return cljs.core.get.call(null,cljs_web_audio.test.morse_timing,c,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1], true)], true));
}),s.toLowerCase());
});
cljs_web_audio.test.exp_to_morse = (function() {
var exp_to_morse = null;
var exp_to_morse__1 = (function (x){return exp_to_morse.call(null,1,x);
});
var exp_to_morse__2 = (function (level,x){if((cljs.core.seq_QMARK_.call(null,x)) || (cljs.core.list_QMARK_.call(null,x)) || (cljs.core.vector_QMARK_.call(null,x)) || (cljs.core.associative_QMARK_.call(null,x)))
{return cljs.core.mapcat.call(null,cljs.core.partial.call(null,exp_to_morse,(level + 1)),x);
} else
{if(((x instanceof cljs.core.Symbol)) || ((x instanceof cljs.core.Keyword)))
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.cons,(400 + (100 * level))),cljs_web_audio.test.string_to_morse.call(null,cljs.core.name.call(null,x)));
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.cons,(400 + (100 * level))),cljs_web_audio.test.string_to_morse.call(null,[cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
exp_to_morse = function(level,x){
switch(arguments.length){
case 1:
return exp_to_morse__1.call(this,level);
case 2:
return exp_to_morse__2.call(this,level,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
exp_to_morse.cljs$core$IFn$_invoke$arity$1 = exp_to_morse__1;
exp_to_morse.cljs$core$IFn$_invoke$arity$2 = exp_to_morse__2;
return exp_to_morse;
})()
;
cljs_web_audio.test.cfn = (function cfn(m,ml){return (function (x){var x__3428__auto__ = (cljs.core.get.call(null,m,(Math.floor.call(null,(x * ml)) | 0)) / 3);var y__3429__auto__ = 0;return ((x__3428__auto__ > y__3429__auto__) ? x__3428__auto__ : y__3429__auto__);
});
});
cljs_web_audio.test.hear = (function() {
var hear = null;
var hear__1 = (function (f){return hear.call(null,cljs_web_audio.core.context.call(null),f);
});
var hear__2 = (function (context,f){return hear.call(null,context,cljs_web_audio.core.fn_source.call(null,context,1024,f),cljs_web_audio.core.convolver_fn.call(null,context,1024,(function (x){return ((0.5 * (1 - x)) * (Math.sin.call(null,(0.5 * (x * cljs_web_audio.core.pi2))) * Math.sin.call(null,(4 * (x * cljs_web_audio.core.pi2)))));
})),f);
});
var hear__4 = (function (context,node,c,f){console.log(node);
node.loop = false;
cljs_web_audio.core.connect_BANG_.call(null,node,c);
cljs_web_audio.core.connect_BANG_.call(null,c,context.destination);
cljs_web_audio.core.note_on_BANG_.call(null,node);
cljs_web_audio.core.note_on_BANG_.call(null,cljs_web_audio.core.connect_BANG_.call(null,cljs_web_audio.core.fn_source.call(null,context,node),c),3);
cljs_web_audio.core.note_on_BANG_.call(null,cljs_web_audio.core.connect_BANG_.call(null,cljs_web_audio.core.fn_source.call(null,context,node),c),6);
return cljs_web_audio.core.note_on_BANG_.call(null,cljs_web_audio.core.connect_BANG_.call(null,cljs_web_audio.core.fn_source.call(null,context,node),c),7);
});
hear = function(context,node,c,f){
switch(arguments.length){
case 1:
return hear__1.call(this,context);
case 2:
return hear__2.call(this,context,node);
case 4:
return hear__4.call(this,context,node,c,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hear.cljs$core$IFn$_invoke$arity$1 = hear__1;
hear.cljs$core$IFn$_invoke$arity$2 = hear__2;
hear.cljs$core$IFn$_invoke$arity$4 = hear__4;
return hear;
})()
;
cljs_web_audio.test.test3 = (function() {
var test3 = null;
var test3__0 = (function (){return test3.call(null,cljs_web_audio.core.context.call(null));
});
var test3__1 = (function (context){return test3.call(null,context,cljs.core.repeatedly.call(null,3,(function (){return cljs_web_audio.core.oscillator.call(null,context);
})),context.destination);
});
var test3__3 = (function (context,oscs,dest){cljs.core.doall.call(null,cljs.core.map.call(null,(function (o){cljs_web_audio.core.connect_BANG_.call(null,o,dest);
cljs_web_audio.core.frequency_BANG_.call(null,o,(440 + (20 * cljs.core.rand.call(null))));
return cljs_web_audio.core.note_on_BANG_.call(null,o);
}),oscs));
return oscs;
});
test3 = function(context,oscs,dest){
switch(arguments.length){
case 0:
return test3__0.call(this);
case 1:
return test3__1.call(this,context);
case 3:
return test3__3.call(this,context,oscs,dest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test3.cljs$core$IFn$_invoke$arity$0 = test3__0;
test3.cljs$core$IFn$_invoke$arity$1 = test3__1;
test3.cljs$core$IFn$_invoke$arity$3 = test3__3;
return test3;
})()
;
cljs_web_audio.test.test4 = (function() {
var test4 = null;
var test4__0 = (function (){return test4.call(null,cljs_web_audio.core.context.call(null));
});
var test4__1 = (function (context){return test4.call(null,context,context.destination);
});
var test4__2 = (function (context,dest){var ri = cljs_web_audio.core.to_float32array.call(null,cljs.core.PersistentVector.fromArray([0,0,0,0.5,0,0,0,0.5], true));var o = cljs_web_audio.core.oscillator.call(null,context,cljs_web_audio.core.create_wavetable.call(null,context,ri));cljs_web_audio.core.connect_BANG_.call(null,o,dest);
cljs_web_audio.core.note_on_BANG_.call(null,o);
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"osc","osc",1014014577),o,new cljs.core.Keyword(null,"ri","ri",1013907881),ri,new cljs.core.Keyword(null,"context","context",1965435169),context], true);
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
cljs_web_audio.test.test5 = (function() {
var test5 = null;
var test5__0 = (function (){return test5.call(null,cljs_web_audio.core.context.call(null));
});
var test5__1 = (function (context){return test5.call(null,context,cljs_web_audio.core.convolver_fn.call(null,context,3000,(function (x){if((((x > 0.1)) && ((x < 0.11))) || (((x > 0.51)) && ((x < 0.53))))
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
cljs_web_audio.core.gain.call(null,context,gain_node,cljs.core.PersistentVector.fromArray([0,0,1,0,0,1,0], true),cljs.core.PersistentVector.fromArray([2,3,3.1,3.2,8,8.1,8.2], true));
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"osc","osc",1014014577),o,new cljs.core.Keyword(null,"ri","ri",1013907881),ri,new cljs.core.Keyword(null,"context","context",1965435169),context], true);
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
cljs_web_audio.test.test2 = (function test2(){return cljs_web_audio.test.hear.call(null,(function (x){return (x * Math.sin.call(null,(10 * (x * cljs_web_audio.core.pi2))));
}));
});
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
cljs_web_audio.test.u = (function u(x){return cljs.core.PersistentVector.fromArray([(((0.3 * cljs.core.nth.call(null,x,1)) + (0.1 * cljs.core.nth.call(null,x,2))) + (0.6 * ((3.5 * cljs.core.nth.call(null,x,0)) * (1 - cljs.core.nth.call(null,x,0))))),((0.1 * cljs.core.nth.call(null,x,0)) + (0.9 * ((3.9 * cljs.core.nth.call(null,x,1)) * (1 - cljs.core.nth.call(null,x,1))))),(cljs.core.nth.call(null,x,0) * (1 / cljs.core.reduce.call(null,cljs.core._PLUS_,x)))], true);
});
cljs_web_audio.test.w = (function w(x){return cljs.core.PersistentVector.fromArray([cljs_web_audio.test.tanh.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,cljs.core.PersistentVector.fromArray([1.1,0.1,0.2], true)))),cljs_web_audio.test.tanh.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,cljs.core.PersistentVector.fromArray([-0.1,1,-0.9], true)))),cljs_web_audio.test.tanh.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,cljs.core.PersistentVector.fromArray([-1,0.9,0.1], true))))], true);
});
cljs_web_audio.test.w1 = (function w1(x){return cljs.core.PersistentVector.fromArray([cljs_web_audio.test.tanh.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,cljs.core.PersistentVector.fromArray([0.8,0.7,0.1,0.0,0.8], true)))),cljs_web_audio.test.tanh.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,cljs.core.PersistentVector.fromArray([-0.5,1,0.9,0.0,0.3], true)))),cljs_web_audio.test.tanh.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,cljs.core.PersistentVector.fromArray([-1.3,0.9,0.1,0,0.1], true)))),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,cljs.core.PersistentVector.fromArray([0.1,0,0,0,0], true))),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,x,cljs.core.PersistentVector.fromArray([0,0,0,0.6,0.1], true)))], true);
});
cljs_web_audio.test.test_playing = (function test_playing(){return cljs_web_audio.core.play_BANG_.call(null,cljs_web_audio.core.combine_BANG_.call(null,cljs_web_audio.core.playing_BANG_.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([3000,1,1], true),cljs.core.PersistentVector.fromArray([2000,1,2], true),cljs.core.PersistentVector.fromArray([4000,1,1], true),cljs.core.PersistentVector.fromArray([1000,0,3], true),cljs.core.PersistentVector.fromArray([300,0.5,3], true),cljs.core.PersistentVector.fromArray([400,0.2,3], true),cljs.core.PersistentVector.fromArray([600,0.1,3], true),cljs.core.PersistentVector.fromArray([500,0.6,1], true),cljs.core.PersistentVector.fromArray([900,0.9,0.5], true),cljs.core.PersistentVector.fromArray([400,0,1], true)], true),8),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([300,1,2], true),cljs.core.PersistentVector.fromArray([100,1,1], true),cljs.core.PersistentVector.fromArray([400,1,3], true),cljs.core.PersistentVector.fromArray([1000,0,1], true),cljs.core.PersistentVector.fromArray([100,1,2], true),cljs.core.PersistentVector.fromArray([450,0.2,4], true),cljs.core.PersistentVector.fromArray([1600,0.1,1], true),cljs.core.PersistentVector.fromArray([700,0.6,3], true),cljs.core.PersistentVector.fromArray([910,0.9,0.5], true),cljs.core.PersistentVector.fromArray([430,0,1], true)], true)));
});
cljs_web_audio.test.t = cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-1637452094,null),new cljs.core.Symbol(null,"map","map",-1640423659,null),cljs.core.list(cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"f","f",-1640531425,null),new cljs.core.Symbol(null,"coll","coll",-1637472091,null)], true),cljs.core.list(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",1398891583,null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",401149633,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"s","s",-1640531412,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"coll","coll",-1637472091,null))], true),cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),cljs.core.list(new cljs.core.Symbol(null,"chunked-seq?","chunked-seq?",1729307354,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"c","c",-1640531428,null),cljs.core.list(new cljs.core.Symbol(null,"chunk-first","chunk-first",1163541769,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)),new cljs.core.Symbol(null,"size","size",-1637000774,null),cljs.core.list(new cljs.core.Symbol(null,"int","int",-1640427096,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"c","c",-1640531428,null))),new cljs.core.Symbol(null,"b","b",-1640531429,null),cljs.core.list(new cljs.core.Symbol(null,"chunk-buffer","chunk-buffer",-717409959,null),new cljs.core.Symbol(null,"size","size",-1637000774,null))], true),cljs.core.list(new cljs.core.Symbol(null,"dotimes","dotimes",203723604,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"i","i",-1640531422,null),new cljs.core.Symbol(null,"size","size",-1637000774,null)], true),cljs.core.list(new cljs.core.Symbol(null,"chunk-append","chunk-append",-750359501,null),new cljs.core.Symbol(null,"b","b",-1640531429,null),cljs.core.list(new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,".nth",".nth",-1639051731,null),new cljs.core.Symbol(null,"c","c",-1640531428,null),new cljs.core.Symbol(null,"i","i",-1640531422,null))))),cljs.core.list(new cljs.core.Symbol(null,"chunk-cons","chunk-cons",1082238026,null),cljs.core.list(new cljs.core.Symbol(null,"chunk","chunk",-1545888730,null),new cljs.core.Symbol(null,"b","b",-1640531429,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"chunk-rest","chunk-rest",1082675437,null),new cljs.core.Symbol(null,"s","s",-1640531412,null))))),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",-1637472022,null),cljs.core.list(new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"s","s",-1640531412,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)))))))),cljs.core.list(cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"f","f",-1640531425,null),new cljs.core.Symbol(null,"c1","c1",-1640528409,null),new cljs.core.Symbol(null,"c2","c2",-1640528408,null)], true),cljs.core.list(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",1398891583,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"s1","s1",-1640527913,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"c1","c1",-1640528409,null)),new cljs.core.Symbol(null,"s2","s2",-1640527912,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"c2","c2",-1640528408,null))], true),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),new cljs.core.Symbol(null,"s1","s1",-1640527913,null),new cljs.core.Symbol(null,"s2","s2",-1640527912,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",-1637472022,null),cljs.core.list(new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"s1","s1",-1640527913,null)),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"s2","s2",-1640527912,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"s1","s1",-1640527913,null)),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"s2","s2",-1640527912,null)))))))),cljs.core.list(cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"f","f",-1640531425,null),new cljs.core.Symbol(null,"c1","c1",-1640528409,null),new cljs.core.Symbol(null,"c2","c2",-1640528408,null),new cljs.core.Symbol(null,"c3","c3",-1640528407,null)], true),cljs.core.list(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",1398891583,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"s1","s1",-1640527913,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"c1","c1",-1640528409,null)),new cljs.core.Symbol(null,"s2","s2",-1640527912,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"c2","c2",-1640528408,null)),new cljs.core.Symbol(null,"s3","s3",-1640527911,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"c3","c3",-1640528407,null))], true),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),new cljs.core.Symbol(null,"s1","s1",-1640527913,null),new cljs.core.Symbol(null,"s2","s2",-1640527912,null),new cljs.core.Symbol(null,"s3","s3",-1640527911,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",-1637472022,null),cljs.core.list(new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"s1","s1",-1640527913,null)),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"s2","s2",-1640527912,null)),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"s3","s3",-1640527911,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"f","f",-1640531425,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"s1","s1",-1640527913,null)),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"s2","s2",-1640527912,null)),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"s3","s3",-1640527911,null)))))))),cljs.core.list(cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"f","f",-1640531425,null),new cljs.core.Symbol(null,"c1","c1",-1640528409,null),new cljs.core.Symbol(null,"c2","c2",-1640528408,null),new cljs.core.Symbol(null,"c3","c3",-1640528407,null),new cljs.core.Symbol(null,"&","&",-1640531489,null),new cljs.core.Symbol(null,"colls","colls",-1545688896,null)], true),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"step","step",-1636990843,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.Symbol(null,"step","step",-1636990843,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"cs","cs",-1640528343,null)], true),cljs.core.list(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",1398891583,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"ss","ss",-1640527847,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"cs","cs",-1640528343,null))], true),cljs.core.list(new cljs.core.Symbol(null,"when","when",-1636883213,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),new cljs.core.Symbol(null,"identity","identity",-1776293257,null),new cljs.core.Symbol(null,"ss","ss",-1640527847,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",-1637472022,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"first","first",-1543091095,null),new cljs.core.Symbol(null,"ss","ss",-1640527847,null)),cljs.core.list(new cljs.core.Symbol(null,"step","step",-1636990843,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"rest","rest",-1637034611,null),new cljs.core.Symbol(null,"ss","ss",-1640527847,null))))))))], true),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"p1__761048#","p1__761048#",-760302247,null)], true),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"f","f",-1640531425,null),new cljs.core.Symbol(null,"p1__761048#","p1__761048#",-760302247,null))),cljs.core.list(new cljs.core.Symbol(null,"step","step",-1636990843,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1637472031,null),new cljs.core.Symbol(null,"colls","colls",-1545688896,null),new cljs.core.Symbol(null,"c3","c3",-1640528407,null),new cljs.core.Symbol(null,"c2","c2",-1640528408,null),new cljs.core.Symbol(null,"c1","c1",-1640528409,null)))))));
cljs_web_audio.core.ot.call(null);

//# sourceMappingURL=test.js.map