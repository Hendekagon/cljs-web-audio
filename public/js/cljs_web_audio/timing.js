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
cljs_web_audio.timing.morse = cljs.core.PersistentHashMap.fromArrays([" ","@","a","b","#","c","d","%","e","f","g","h","i","*","j","+","k","l","-","m",".","n","o","0","p","1","q","2","r","3","s","4","t","5","u","6","v","7","w","8","x","9","y","z","\\","=","?","_"],[new cljs.core.Keyword(null,"_","_",1013904337),new cljs.core.Keyword(null,"\u00B7\u2013\u2013\u00B7\u2013\u00B7","\u00B7\u2013\u2013\u00B7\u2013\u00B7",1196212406),new cljs.core.Keyword(null,".-",".-",1013905713),new cljs.core.Keyword(null,"-...","-...",1015290515),new cljs.core.Keyword(null,"-..-..-..-..","-..-..-..-..",3359085874),new cljs.core.Keyword(null,"-.-.","-.-.",1015290484),new cljs.core.Keyword(null,"-..","-..",1013948959),new cljs.core.Keyword(null,".-----.",".-----.",4515623425),new cljs.core.Keyword(null,".",".",1013904288),new cljs.core.Keyword(null,"..-.","..-.",1015320275),new cljs.core.Keyword(null,"--.","--.",1013948928),new cljs.core.Keyword(null,"...","...",1013949920),new cljs.core.Keyword(null,"..","..",1013905714),new cljs.core.Keyword(null,".-.-.-",".-.-.-",2373818735),new cljs.core.Keyword(null,".---",".---",1015319313),new cljs.core.Keyword(null,"\u00B7\u2013\u00B7\u2013\u00B7","\u00B7\u2013\u00B7\u2013\u00B7",1427953073),new cljs.core.Keyword(null,"-.-","-.-",1013948958),new cljs.core.Keyword(null,".-..",".-..",1015319345),new cljs.core.Keyword(null,"\u2013\u00B7\u00B7\u00B7\u00B7\u2013","\u2013\u00B7\u00B7\u00B7\u00B7\u2013",4334274962),new cljs.core.Keyword(null,"--","--",1013905682),new cljs.core.Keyword(null,"_","_",1013904337),new cljs.core.Keyword(null,"-.","-.",1013905683),new cljs.core.Keyword(null,"---","---",1013948927),new cljs.core.Keyword(null,"-----","-----",1056847967),new cljs.core.Keyword(null,".--.",".--.",1015319314),new cljs.core.Keyword(null,".---",".---",1015319313),new cljs.core.Keyword(null,"--.-","--.-",1015289553),new cljs.core.Keyword(null,"..---","..---",1057801279),new cljs.core.Keyword(null,".-.",".-.",1013949889),new cljs.core.Keyword(null,"...--","...--",1057802240),new cljs.core.Keyword(null,"...","...",1013949920),new cljs.core.Keyword(null,"....-","....-",1057802271),new cljs.core.Keyword(null,"-","-",1013904287),new cljs.core.Keyword(null,".....",".....",1057802272),new cljs.core.Keyword(null,"..-","..-",1013949919),new cljs.core.Keyword(null,"-....","-....",1056878751),new cljs.core.Keyword(null,"...-","...-",1015320305),new cljs.core.Keyword(null,"--...","--...",1056848960),new cljs.core.Keyword(null,".--",".--",1013949888),new cljs.core.Keyword(null,"---..","---..",1056847999),new cljs.core.Keyword(null,"-..-","-..-",1015290514),new cljs.core.Keyword(null,"----.","----.",1056847968),new cljs.core.Keyword(null,"-.--","-.--",1015290483),new cljs.core.Keyword(null,"--..","--..",1015289554),new cljs.core.Keyword(null,".-.-.-.-",".-.-.-.-",2221675502),new cljs.core.Keyword(null,"\u2013\u00B7\u00B7\u00B7\u2013","\u2013\u00B7\u00B7\u00B7\u2013",4307609377),new cljs.core.Keyword(null,"\u00B7\u00B7\u2013\u2013\u00B7\u00B7","\u00B7\u00B7\u2013\u2013\u00B7\u00B7",2379586450),new cljs.core.Keyword(null,"\u00B7\u00B7\u2013\u2013\u00B7\u2013","\u00B7\u00B7\u2013\u2013\u00B7\u2013",2379594478)]);
cljs_web_audio.timing.morse_timing = cljs.core.reduce.call(null,(function (m,p__14649){var vec__14650 = p__14649;var c = cljs.core.nth.call(null,vec__14650,0,null);var k = cljs.core.nth.call(null,vec__14650,1,null);return cljs.core.assoc.call(null,m,c,cljs.core.interleave.call(null,cljs.core.map.call(null,(function (d){return cljs.core.PersistentArrayMap.fromArray(["-",cljs.core.PersistentVector.fromArray([1,3], true),".",cljs.core.PersistentVector.fromArray([1,1], true),"_",cljs.core.PersistentVector.fromArray([0,2], true)], true).call(null,d);
}),cljs.core.name.call(null,k)),cljs.core.repeat.call(null,cljs.core.PersistentVector.fromArray([0,1], true))));
}),cljs.core.PersistentArrayMap.EMPTY,cljs_web_audio.timing.morse);
cljs_web_audio.timing.string_to_morse = (function string_to_morse(s){return cljs.core.mapcat.call(null,(function (c){return cljs.core.get.call(null,cljs_web_audio.timing.morse_timing,c,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1], true)], true));
}),s.toLowerCase());
});
cljs_web_audio.timing.exp_to_morse = (function() {
var exp_to_morse = null;
var exp_to_morse__1 = (function (x){return exp_to_morse.call(null,0,cljs.core.concat.call(null,x,cljs.core.PersistentVector.fromArray(["."], true)));
});
var exp_to_morse__2 = (function (level,x){if((cljs.core.seq_QMARK_.call(null,x)) || (cljs.core.list_QMARK_.call(null,x)) || (cljs.core.vector_QMARK_.call(null,x)) || (cljs.core.associative_QMARK_.call(null,x)))
{return cljs.core.mapcat.call(null,cljs.core.partial.call(null,exp_to_morse,(level + 1)),x);
} else
{if(((x instanceof cljs.core.Symbol)) || ((x instanceof cljs.core.Keyword)))
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.cons,(400 + (100 * level))),cljs_web_audio.timing.string_to_morse.call(null,cljs.core.name.call(null,x)));
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.cons,(400 + (100 * level))),cljs_web_audio.timing.string_to_morse.call(null,[cljs.core.str(x)].join('')));
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

//# sourceMappingURL=timing.js.map