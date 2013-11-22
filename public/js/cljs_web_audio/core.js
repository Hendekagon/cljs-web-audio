// Compiled by ClojureScript 0.0-2030
goog.provide('cljs_web_audio.core');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async');
goog.require('cljs_web_audio.timing');
goog.require('cljs_web_audio.timing');
cljs_web_audio.core.pi2 = (2 * Math.PI);
cljs_web_audio.core.log_LT__BANG_G = (function log_LT__BANG_G(channel){var c__5484__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_84255){var state_val_84256 = (state_84255[1]);if((state_val_84256 === 7))
{var inst_84246 = (state_84255[2]);var inst_84247 = console.log(inst_84246);var state_84255__$1 = (function (){var statearr_84257 = state_84255;(statearr_84257[7] = inst_84247);
return statearr_84257;
})();var statearr_84258_84271 = state_84255__$1;(statearr_84258_84271[2] = null);
(statearr_84258_84271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84256 === 6))
{var inst_84251 = (state_84255[2]);var state_84255__$1 = state_84255;var statearr_84259_84272 = state_84255__$1;(statearr_84259_84272[2] = inst_84251);
(statearr_84259_84272[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84256 === 5))
{var state_84255__$1 = state_84255;var statearr_84260_84273 = state_84255__$1;(statearr_84260_84273[2] = null);
(statearr_84260_84273[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84256 === 4))
{var state_84255__$1 = state_84255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84255__$1,7,channel);
} else
{if((state_val_84256 === 3))
{var inst_84253 = (state_84255[2]);var state_84255__$1 = state_84255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84255__$1,inst_84253);
} else
{if((state_val_84256 === 2))
{var state_84255__$1 = state_84255;if(true)
{var statearr_84261_84274 = state_84255__$1;(statearr_84261_84274[1] = 4);
} else
{var statearr_84262_84275 = state_84255__$1;(statearr_84262_84275[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84256 === 1))
{var state_84255__$1 = state_84255;var statearr_84263_84276 = state_84255__$1;(statearr_84263_84276[2] = null);
(statearr_84263_84276[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5414__auto__){
return (function() {
var state_machine__5415__auto__ = null;
var state_machine__5415__auto____0 = (function (){var statearr_84267 = (new Array(8));(statearr_84267[0] = state_machine__5415__auto__);
(statearr_84267[1] = 1);
return statearr_84267;
});
var state_machine__5415__auto____1 = (function (state_84255){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_84255);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e84268){if((e84268 instanceof Object))
{var ex__5418__auto__ = e84268;var statearr_84269_84277 = state_84255;(statearr_84269_84277[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84255);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e84268;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__84278 = state_84255;
state_84255 = G__84278;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_84255){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_84255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_84270 = f__5485__auto__.call(null);(statearr_84270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto__);
return statearr_84270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return c__5484__auto__;
});
cljs_web_audio.core.P = cljs.core.partial;
cljs_web_audio.core.C = cljs.core.comp;
/**
* Do the function f at regular intervals and send the results to g, starting with x
*/
cljs_web_audio.core.G = (function() {
var G = null;
var G__3 = (function (f,x,n){return window.setTimeout((function (x__$1){return G.call(null,f,f.call(null,x__$1),n);
}),n,x);
});
var G__4 = (function (g,f,x,n){return window.setTimeout((function (x__$1){g.call(null,x__$1);
return G.call(null,g,f,f.call(null,x__$1),n);
}),n,x);
});
G = function(g,f,x,n){
switch(arguments.length){
case 3:
return G__3.call(this,g,f,x);
case 4:
return G__4.call(this,g,f,x,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G.cljs$core$IFn$_invoke$arity$3 = G__3;
G.cljs$core$IFn$_invoke$arity$4 = G__4;
return G;
})()
;
cljs_web_audio.core.context = (function() {
var context = null;
var context__0 = (function (){return (new webkitAudioContext());
});
var context__1 = (function (node){return node.context();
});
context = function(node){
switch(arguments.length){
case 0:
return context__0.call(this);
case 1:
return context__1.call(this,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
context.cljs$core$IFn$_invoke$arity$0 = context__0;
context.cljs$core$IFn$_invoke$arity$1 = context__1;
return context;
})()
;
cljs_web_audio.core.sample_rate = (function sample_rate(context){return context.sample_rate;
});
cljs_web_audio.core.current_time = (function current_time(context){return context.currentTime;
});
cljs_web_audio.core.millis_to_frames = (function millis_to_frames(context,millis){return (context.sampleRate * (millis / 1000));
});
cljs_web_audio.core.node = (function() {
var node = null;
var node__2 = (function (context,f){return node.call(null,context,1024,1,1,f);
});
var node__3 = (function (context,node__$1,f){node__$1.onaudioprocess = (function (e){return f.call(null,(e.outputBuffer.getChannelData()[0]));
});
return node__$1;
});
var node__5 = (function (context,size,inputs,outputs,f){return node.call(null,context,context.createJavaScriptNode(size,inputs,outputs),f);
});
node = function(context,size,inputs,outputs,f){
switch(arguments.length){
case 2:
return node__2.call(this,context,size);
case 3:
return node__3.call(this,context,size,inputs);
case 5:
return node__5.call(this,context,size,inputs,outputs,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
node.cljs$core$IFn$_invoke$arity$2 = node__2;
node.cljs$core$IFn$_invoke$arity$3 = node__3;
node.cljs$core$IFn$_invoke$arity$5 = node__5;
return node;
})()
;
cljs_web_audio.core.buffer_map_BANG_ = (function() {
var buffer_map_BANG_ = null;
var buffer_map_BANG___2 = (function (f,buffer){return buffer_map_BANG_.call(null,f,buffer,buffer.length);
});
var buffer_map_BANG___3 = (function (f,buffer,length){return cljs.core.map.call(null,(function (i){return (buffer[i] = f.call(null,(i / length)));
}),cljs.core.range.call(null,length));
});
buffer_map_BANG_ = function(f,buffer,length){
switch(arguments.length){
case 2:
return buffer_map_BANG___2.call(this,f,buffer);
case 3:
return buffer_map_BANG___3.call(this,f,buffer,length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
buffer_map_BANG_.cljs$core$IFn$_invoke$arity$2 = buffer_map_BANG___2;
buffer_map_BANG_.cljs$core$IFn$_invoke$arity$3 = buffer_map_BANG___3;
return buffer_map_BANG_;
})()
;
cljs_web_audio.core.float32array = (function() {
var float32array = null;
var float32array__1 = (function (size){return (new Float32Array(size));
});
var float32array__2 = (function (size,f){return cljs_web_audio.core.buffer_map_BANG_.call(null,float32array.call(null,size),f);
});
float32array = function(size,f){
switch(arguments.length){
case 1:
return float32array__1.call(this,size);
case 2:
return float32array__2.call(this,size,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
float32array.cljs$core$IFn$_invoke$arity$1 = float32array__1;
float32array.cljs$core$IFn$_invoke$arity$2 = float32array__2;
return float32array;
})()
;
cljs_web_audio.core.to_float32array = (function() {
var to_float32array = null;
var to_float32array__1 = (function (coll){return to_float32array.call(null,coll,cljs_web_audio.core.float32array.call(null,cljs.core.count.call(null,coll)));
});
var to_float32array__2 = (function (coll,array){cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.aset,array),cljs.core.range.call(null,cljs.core.count.call(null,coll)),coll));
return array;
});
to_float32array = function(coll,array){
switch(arguments.length){
case 1:
return to_float32array__1.call(this,coll);
case 2:
return to_float32array__2.call(this,coll,array);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_float32array.cljs$core$IFn$_invoke$arity$1 = to_float32array__1;
to_float32array.cljs$core$IFn$_invoke$arity$2 = to_float32array__2;
return to_float32array;
})()
;
cljs_web_audio.core.set_wavetable_BANG_ = (function set_wavetable_BANG_(osc,wavetable){return osc.setWaveTable(wavetable);
});
cljs_web_audio.core.create_buffer = (function() {
var create_buffer = null;
var create_buffer__2 = (function (context,f32){return create_buffer.call(null,context,f32,f32.buffer);
});
var create_buffer__3 = (function (context,f32,buffer){return context.createBuffer(buffer,false);
});
create_buffer = function(context,f32,buffer){
switch(arguments.length){
case 2:
return create_buffer__2.call(this,context,f32);
case 3:
return create_buffer__3.call(this,context,f32,buffer);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_buffer.cljs$core$IFn$_invoke$arity$2 = create_buffer__2;
create_buffer.cljs$core$IFn$_invoke$arity$3 = create_buffer__3;
return create_buffer;
})()
;
cljs_web_audio.core.to_buffer = (function() {
var to_buffer = null;
var to_buffer__2 = (function (context,coll){return context.createBuffer(cljs_web_audio.core.to_float32array.call(null,coll),false);
});
var to_buffer__3 = (function (context,size,f){return cljs_web_audio.core.create_buffer.call(null,context,cljs_web_audio.core.float32array.call(null,size,f));
});
to_buffer = function(context,size,f){
switch(arguments.length){
case 2:
return to_buffer__2.call(this,context,size);
case 3:
return to_buffer__3.call(this,context,size,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_buffer.cljs$core$IFn$_invoke$arity$2 = to_buffer__2;
to_buffer.cljs$core$IFn$_invoke$arity$3 = to_buffer__3;
return to_buffer;
})()
;
cljs_web_audio.core.create_wavetable = (function() {
var create_wavetable = null;
var create_wavetable__2 = (function (context,real){return create_wavetable.call(null,context,real,real);
});
var create_wavetable__3 = (function (context,real,imag){return context.createWaveTable(real,imag);
});
create_wavetable = function(context,real,imag){
switch(arguments.length){
case 2:
return create_wavetable__2.call(this,context,real);
case 3:
return create_wavetable__3.call(this,context,real,imag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_wavetable.cljs$core$IFn$_invoke$arity$2 = create_wavetable__2;
create_wavetable.cljs$core$IFn$_invoke$arity$3 = create_wavetable__3;
return create_wavetable;
})()
;
cljs_web_audio.core.frequency_BANG_ = (function() {
var frequency_BANG_ = null;
var frequency_BANG___2 = (function (osc,f){return frequency_BANG_.call(null,osc,f,0);
});
var frequency_BANG___3 = (function (osc,f,t){osc.frequency.setValueAtTime(f,t);
return osc;
});
frequency_BANG_ = function(osc,f,t){
switch(arguments.length){
case 2:
return frequency_BANG___2.call(this,osc,f);
case 3:
return frequency_BANG___3.call(this,osc,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frequency_BANG_.cljs$core$IFn$_invoke$arity$2 = frequency_BANG___2;
frequency_BANG_.cljs$core$IFn$_invoke$arity$3 = frequency_BANG___3;
return frequency_BANG_;
})()
;
cljs_web_audio.core.exp_frequency_BANG_ = (function() {
var exp_frequency_BANG_ = null;
var exp_frequency_BANG___2 = (function (osc,f){return cljs_web_audio.core.frequency_BANG_.call(null,osc,f,0);
});
var exp_frequency_BANG___3 = (function (osc,f,t){osc.frequency.exponentialRampToValueAtTime(f,t);
return osc;
});
exp_frequency_BANG_ = function(osc,f,t){
switch(arguments.length){
case 2:
return exp_frequency_BANG___2.call(this,osc,f);
case 3:
return exp_frequency_BANG___3.call(this,osc,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
exp_frequency_BANG_.cljs$core$IFn$_invoke$arity$2 = exp_frequency_BANG___2;
exp_frequency_BANG_.cljs$core$IFn$_invoke$arity$3 = exp_frequency_BANG___3;
return exp_frequency_BANG_;
})()
;
cljs_web_audio.core.oscillator = (function() {
var oscillator = null;
var oscillator__0 = (function (){return oscillator.call(null,cljs_web_audio.core.context.call(null));
});
var oscillator__1 = (function (context){return context.createOscillator();
});
var oscillator__2 = (function (context,wavetable){return oscillator.call(null,context,oscillator.call(null,context),wavetable);
});
var oscillator__3 = (function (context,oscillator__$1,wavetable){oscillator__$1.setWaveTable(wavetable);
return oscillator__$1;
});
oscillator = function(context,oscillator__$1,wavetable){
switch(arguments.length){
case 0:
return oscillator__0.call(this);
case 1:
return oscillator__1.call(this,context);
case 2:
return oscillator__2.call(this,context,oscillator__$1);
case 3:
return oscillator__3.call(this,context,oscillator__$1,wavetable);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
oscillator.cljs$core$IFn$_invoke$arity$0 = oscillator__0;
oscillator.cljs$core$IFn$_invoke$arity$1 = oscillator__1;
oscillator.cljs$core$IFn$_invoke$arity$2 = oscillator__2;
oscillator.cljs$core$IFn$_invoke$arity$3 = oscillator__3;
return oscillator;
})()
;
cljs_web_audio.core.create_buffer_source = (function() {
var create_buffer_source = null;
var create_buffer_source__2 = (function (context,coll){return create_buffer_source.call(null,context,coll,context.createBufferSource());
});
var create_buffer_source__3 = (function (context,coll,node){node.buffer = cljs_web_audio.core.to_buffer.call(null,context,coll);
return node;
});
create_buffer_source = function(context,coll,node){
switch(arguments.length){
case 2:
return create_buffer_source__2.call(this,context,coll);
case 3:
return create_buffer_source__3.call(this,context,coll,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_buffer_source.cljs$core$IFn$_invoke$arity$2 = create_buffer_source__2;
create_buffer_source.cljs$core$IFn$_invoke$arity$3 = create_buffer_source__3;
return create_buffer_source;
})()
;
cljs_web_audio.core.buffer_fn = (function() {
var buffer_fn = null;
var buffer_fn__3 = (function (context,size,f){return buffer_fn.call(null,context,size,context.createBuffer(1,size,context.sampleRate),f);
});
var buffer_fn__4 = (function (context,size,buffer,f){cljs_web_audio.core.buffer_map_BANG_.call(null,f,buffer.getChannelData(0));
return buffer;
});
buffer_fn = function(context,size,buffer,f){
switch(arguments.length){
case 3:
return buffer_fn__3.call(this,context,size,buffer);
case 4:
return buffer_fn__4.call(this,context,size,buffer,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
buffer_fn.cljs$core$IFn$_invoke$arity$3 = buffer_fn__3;
buffer_fn.cljs$core$IFn$_invoke$arity$4 = buffer_fn__4;
return buffer_fn;
})()
;
cljs_web_audio.core.fn_source = (function() {
var fn_source = null;
var fn_source__2 = (function (context,node){return fn_source.call(null,context,context.createBufferSource(),node.buffer,cljs.core.identity);
});
var fn_source__3 = (function (context,size,f){return fn_source.call(null,context,context.createBufferSource(),cljs_web_audio.core.buffer_fn.call(null,context,size,f),f);
});
var fn_source__4 = (function (context,node,buffer,f){node.buffer = buffer;
return node;
});
fn_source = function(context,node,buffer,f){
switch(arguments.length){
case 2:
return fn_source__2.call(this,context,node);
case 3:
return fn_source__3.call(this,context,node,buffer);
case 4:
return fn_source__4.call(this,context,node,buffer,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fn_source.cljs$core$IFn$_invoke$arity$2 = fn_source__2;
fn_source.cljs$core$IFn$_invoke$arity$3 = fn_source__3;
fn_source.cljs$core$IFn$_invoke$arity$4 = fn_source__4;
return fn_source;
})()
;
cljs_web_audio.core.note_on_BANG_ = (function() {
var note_on_BANG_ = null;
var note_on_BANG___1 = (function (o){return note_on_BANG_.call(null,o,0);
});
var note_on_BANG___2 = (function (o,delay){o.noteOn(delay);
return o;
});
note_on_BANG_ = function(o,delay){
switch(arguments.length){
case 1:
return note_on_BANG___1.call(this,o);
case 2:
return note_on_BANG___2.call(this,o,delay);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
note_on_BANG_.cljs$core$IFn$_invoke$arity$1 = note_on_BANG___1;
note_on_BANG_.cljs$core$IFn$_invoke$arity$2 = note_on_BANG___2;
return note_on_BANG_;
})()
;
cljs_web_audio.core.note_off_BANG_ = (function() {
var note_off_BANG_ = null;
var note_off_BANG___1 = (function (o){return note_off_BANG_.call(null,o,0);
});
var note_off_BANG___2 = (function (o,delay){o.noteOff(delay);
return o;
});
note_off_BANG_ = function(o,delay){
switch(arguments.length){
case 1:
return note_off_BANG___1.call(this,o);
case 2:
return note_off_BANG___2.call(this,o,delay);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
note_off_BANG_.cljs$core$IFn$_invoke$arity$1 = note_off_BANG___1;
note_off_BANG_.cljs$core$IFn$_invoke$arity$2 = note_off_BANG___2;
return note_off_BANG_;
})()
;
cljs_web_audio.core.gain_BANG_ = (function gain_BANG_(node,v){node.gain = v;
return node;
});
cljs_web_audio.core.gain = (function() {
var gain = null;
var gain__1 = (function (context){return cljs_web_audio.core.gain_BANG_.call(null,context.createGainNode(),1);
});
var gain__3 = (function (context,volumes,times){return gain.call(null,context,gain.call(null,context),cljs_web_audio.core.current_time.call(null,context),volumes,times);
});
var gain__4 = (function (context,node,volumes,times){return gain.call(null,context,node,cljs_web_audio.core.current_time.call(null,context),volumes,times);
});
var gain__5 = (function (context,gain__$1,t,volumes,times){cljs.core.doall.call(null,cljs.core.map.call(null,(function (v,dt){return gain__$1.gain.linearRampToValueAtTime(v,(t + dt));
}),volumes,times));
return gain__$1;
});
gain = function(context,gain__$1,t,volumes,times){
switch(arguments.length){
case 1:
return gain__1.call(this,context);
case 3:
return gain__3.call(this,context,gain__$1,t);
case 4:
return gain__4.call(this,context,gain__$1,t,volumes);
case 5:
return gain__5.call(this,context,gain__$1,t,volumes,times);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gain.cljs$core$IFn$_invoke$arity$1 = gain__1;
gain.cljs$core$IFn$_invoke$arity$3 = gain__3;
gain.cljs$core$IFn$_invoke$arity$4 = gain__4;
gain.cljs$core$IFn$_invoke$arity$5 = gain__5;
return gain;
})()
;
cljs_web_audio.core.connect_BANG_ = (function connect_BANG_(source,destination){source.connect(destination);
return source;
});
cljs_web_audio.core.convolver = (function() {
var convolver = null;
var convolver__1 = (function (context){return context.createConvolver();
});
var convolver__2 = (function (context,coll){return convolver.call(null,context,context.createConvolver(),coll);
});
var convolver__3 = (function (context,convolver__$1,coll){convolver__$1.buffer = cljs_web_audio.core.to_buffer.call(null,context,coll);
return convolver__$1;
});
convolver = function(context,convolver__$1,coll){
switch(arguments.length){
case 1:
return convolver__1.call(this,context);
case 2:
return convolver__2.call(this,context,convolver__$1);
case 3:
return convolver__3.call(this,context,convolver__$1,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
convolver.cljs$core$IFn$_invoke$arity$1 = convolver__1;
convolver.cljs$core$IFn$_invoke$arity$2 = convolver__2;
convolver.cljs$core$IFn$_invoke$arity$3 = convolver__3;
return convolver;
})()
;
cljs_web_audio.core.convolver_fn = (function() {
var convolver_fn = null;
var convolver_fn__3 = (function (context,millis,f){return convolver_fn.call(null,context,millis,cljs_web_audio.core.convolver.call(null,context),f);
});
var convolver_fn__4 = (function (context,millis,convolver,f){convolver.buffer = cljs_web_audio.core.buffer_fn.call(null,context,cljs_web_audio.core.millis_to_frames.call(null,context,millis),f);
return convolver;
});
convolver_fn = function(context,millis,convolver,f){
switch(arguments.length){
case 3:
return convolver_fn__3.call(this,context,millis,convolver);
case 4:
return convolver_fn__4.call(this,context,millis,convolver,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
convolver_fn.cljs$core$IFn$_invoke$arity$3 = convolver_fn__3;
convolver_fn.cljs$core$IFn$_invoke$arity$4 = convolver_fn__4;
return convolver_fn;
})()
;
cljs_web_audio.core.update_fn = (function update_fn(f,context){return (function (t){return f.call(null,context.currentTime,(context.currentTime - t));
});
});
cljs_web_audio.core.frequencies_over_time_BANG_ = (function() {
var frequencies_over_time_BANG_ = null;
var frequencies_over_time_BANG___1 = (function (coll){return frequencies_over_time_BANG_.call(null,coll,1);
});
var frequencies_over_time_BANG___2 = (function (coll,dt){return frequencies_over_time_BANG_.call(null,coll,dt,cljs_web_audio.core.context.call(null));
});
var frequencies_over_time_BANG___3 = (function (coll,dt,context){return frequencies_over_time_BANG_.call(null,coll,dt,context,cljs_web_audio.core.oscillator.call(null,context));
});
var frequencies_over_time_BANG___4 = (function (coll,dt,context,osc){cljs_web_audio.core.connect_BANG_.call(null,osc,context.destination);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (x,t){return cljs_web_audio.core.frequency_BANG_.call(null,osc,x,t);
}),coll,cljs.core.range.call(null,cljs_web_audio.core.current_time.call(null,context),(dt + cljs_web_audio.core.current_time.call(null,context)),(dt / cljs.core.count.call(null,coll)))));
cljs_web_audio.core.note_on_BANG_.call(null,osc);
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),osc], true);
});
frequencies_over_time_BANG_ = function(coll,dt,context,osc){
switch(arguments.length){
case 1:
return frequencies_over_time_BANG___1.call(this,coll);
case 2:
return frequencies_over_time_BANG___2.call(this,coll,dt);
case 3:
return frequencies_over_time_BANG___3.call(this,coll,dt,context);
case 4:
return frequencies_over_time_BANG___4.call(this,coll,dt,context,osc);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frequencies_over_time_BANG_.cljs$core$IFn$_invoke$arity$1 = frequencies_over_time_BANG___1;
frequencies_over_time_BANG_.cljs$core$IFn$_invoke$arity$2 = frequencies_over_time_BANG___2;
frequencies_over_time_BANG_.cljs$core$IFn$_invoke$arity$3 = frequencies_over_time_BANG___3;
frequencies_over_time_BANG_.cljs$core$IFn$_invoke$arity$4 = frequencies_over_time_BANG___4;
return frequencies_over_time_BANG_;
})()
;
cljs_web_audio.core.set_value_at_time = (function set_value_at_time(param,x,t){return param.setValueAtTime(x,t);
});
cljs_web_audio.core.values_over_time = (function() {
var values_over_time = null;
var values_over_time__1 = (function (p__84279){var map__84281 = p__84279;var map__84281__$1 = ((cljs.core.seq_QMARK_.call(null,map__84281))?cljs.core.apply.call(null,cljs.core.hash_map,map__84281):map__84281);var coll = cljs.core.get.call(null,map__84281__$1,new cljs.core.Keyword(null,"coll","coll",1016963678));var context = cljs.core.get.call(null,map__84281__$1,new cljs.core.Keyword(null,"context","context",1965435169));var param = cljs.core.get.call(null,map__84281__$1,new cljs.core.Keyword(null,"param","param",1120340991));var duration = cljs.core.get.call(null,map__84281__$1,new cljs.core.Keyword(null,"duration","duration",3316859142));return values_over_time.call(null,coll,cljs_web_audio.core.current_time.call(null,context),duration,param);
});
var values_over_time__4 = (function (coll,start,duration,param){return values_over_time.call(null,coll,start,duration,param,cljs.core.range.call(null,start,(duration + start),(duration / cljs.core.count.call(null,coll))));
});
var values_over_time__5 = (function (coll,start,duration,param,timings){return cljs.core.map.call(null,(function (x,t){return param.setValueAtTime(x,t);
}),coll,timings);
});
values_over_time = function(coll,start,duration,param,timings){
switch(arguments.length){
case 1:
return values_over_time__1.call(this,coll);
case 4:
return values_over_time__4.call(this,coll,start,duration,param);
case 5:
return values_over_time__5.call(this,coll,start,duration,param,timings);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
values_over_time.cljs$core$IFn$_invoke$arity$1 = values_over_time__1;
values_over_time.cljs$core$IFn$_invoke$arity$4 = values_over_time__4;
values_over_time.cljs$core$IFn$_invoke$arity$5 = values_over_time__5;
return values_over_time;
})()
;
cljs_web_audio.core.p_LT__BANG_G = (function p_LT__BANG_G(channel,context,param){var c__5484__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_84324){var state_val_84325 = (state_84324[1]);if((state_val_84325 === 7))
{var inst_84314 = (state_84324[2]);var inst_84315 = cljs_web_audio.core.current_time.call(null,context);var inst_84316 = cljs_web_audio.core.set_value_at_time.call(null,param,inst_84314,inst_84315);var state_84324__$1 = (function (){var statearr_84326 = state_84324;(statearr_84326[7] = inst_84316);
return statearr_84326;
})();var statearr_84327_84340 = state_84324__$1;(statearr_84327_84340[2] = null);
(statearr_84327_84340[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84325 === 6))
{var inst_84320 = (state_84324[2]);var state_84324__$1 = state_84324;var statearr_84328_84341 = state_84324__$1;(statearr_84328_84341[2] = inst_84320);
(statearr_84328_84341[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84325 === 5))
{var state_84324__$1 = state_84324;var statearr_84329_84342 = state_84324__$1;(statearr_84329_84342[2] = null);
(statearr_84329_84342[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84325 === 4))
{var state_84324__$1 = state_84324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84324__$1,7,channel);
} else
{if((state_val_84325 === 3))
{var inst_84322 = (state_84324[2]);var state_84324__$1 = state_84324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84324__$1,inst_84322);
} else
{if((state_val_84325 === 2))
{var state_84324__$1 = state_84324;if(true)
{var statearr_84330_84343 = state_84324__$1;(statearr_84330_84343[1] = 4);
} else
{var statearr_84331_84344 = state_84324__$1;(statearr_84331_84344[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84325 === 1))
{var state_84324__$1 = state_84324;var statearr_84332_84345 = state_84324__$1;(statearr_84332_84345[2] = null);
(statearr_84332_84345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5414__auto__){
return (function() {
var state_machine__5415__auto__ = null;
var state_machine__5415__auto____0 = (function (){var statearr_84336 = (new Array(8));(statearr_84336[0] = state_machine__5415__auto__);
(statearr_84336[1] = 1);
return statearr_84336;
});
var state_machine__5415__auto____1 = (function (state_84324){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_84324);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e84337){if((e84337 instanceof Object))
{var ex__5418__auto__ = e84337;var statearr_84338_84346 = state_84324;(statearr_84338_84346[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84324);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e84337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__84347 = state_84324;
state_84324 = G__84347;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_84324){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_84324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_84339 = f__5485__auto__.call(null);(statearr_84339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto__);
return statearr_84339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return c__5484__auto__;
});
cljs_web_audio.core.f_LT__BANG_G = (function() {
var f_LT__BANG_G = null;
var f_LT__BANG_G__1 = (function (channel){return f_LT__BANG_G.call(null,channel,cljs_web_audio.core.context.call(null));
});
var f_LT__BANG_G__2 = (function (channel,context){return f_LT__BANG_G.call(null,channel,context,cljs_web_audio.core.oscillator.call(null,context));
});
var f_LT__BANG_G__3 = (function (channel,context,oscillator){cljs_web_audio.core.connect_BANG_.call(null,oscillator,context.destination);
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"sounds","sounds",4412361910),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),oscillator,new cljs.core.Keyword(null,"channel","channel",1752854645),cljs_web_audio.core.p_LT__BANG_G.call(null,channel,context,oscillator.frequency)], true)], true)], true);
});
f_LT__BANG_G = function(channel,context,oscillator){
switch(arguments.length){
case 1:
return f_LT__BANG_G__1.call(this,channel);
case 2:
return f_LT__BANG_G__2.call(this,channel,context);
case 3:
return f_LT__BANG_G__3.call(this,channel,context,oscillator);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
f_LT__BANG_G.cljs$core$IFn$_invoke$arity$1 = f_LT__BANG_G__1;
f_LT__BANG_G.cljs$core$IFn$_invoke$arity$2 = f_LT__BANG_G__2;
f_LT__BANG_G.cljs$core$IFn$_invoke$arity$3 = f_LT__BANG_G__3;
return f_LT__BANG_G;
})()
;
cljs_web_audio.core.Yf_LT__BANG_G = (function Yf_LT__BANG_G(m,channel){return cljs.core.merge_with.call(null,cljs.core.concat,m,cljs.core.select_keys.call(null,cljs_web_audio.core.f_LT__BANG_G.call(null,channel,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"sounds","sounds",4412361910)], true)));
});
cljs_web_audio.core.playing_BANG_ = (function() {
var playing_BANG_ = null;
var playing_BANG___1 = (function (coll){return playing_BANG_.call(null,coll,1);
});
var playing_BANG___2 = (function (coll,duration){return playing_BANG_.call(null,coll,duration,cljs_web_audio.core.context.call(null));
});
var playing_BANG___3 = (function (coll,duration,context){return playing_BANG_.call(null,coll,cljs_web_audio.core.current_time.call(null,context),duration,context);
});
var playing_BANG___4 = (function (coll,start,duration,context){return playing_BANG_.call(null,coll,start,duration,cljs_web_audio.core.oscillator.call(null,context),cljs_web_audio.core.gain.call(null,context),context,cljs_web_audio.timing.relative_to_absolute.call(null,start,duration,cljs.core.map.call(null,cljs.core.last,coll)));
});
var playing_BANG___7 = (function (coll,start,duration,osc,gain,context,timings){cljs_web_audio.core.connect_BANG_.call(null,osc,gain);
cljs_web_audio.core.connect_BANG_.call(null,gain,context.destination);
cljs.core.doall.call(null,cljs_web_audio.core.values_over_time.call(null,cljs.core.map.call(null,cljs.core.first,coll),start,duration,osc.frequency,timings));
cljs.core.doall.call(null,cljs_web_audio.core.values_over_time.call(null,cljs.core.map.call(null,cljs.core.second,coll),start,duration,gain.gain,timings));
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"duration","duration",3316859142),duration,new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"sounds","sounds",4412361910),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"gain","gain",1017069297),gain,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),osc], true)], true)], true);
});
playing_BANG_ = function(coll,start,duration,osc,gain,context,timings){
switch(arguments.length){
case 1:
return playing_BANG___1.call(this,coll);
case 2:
return playing_BANG___2.call(this,coll,start);
case 3:
return playing_BANG___3.call(this,coll,start,duration);
case 4:
return playing_BANG___4.call(this,coll,start,duration,osc);
case 7:
return playing_BANG___7.call(this,coll,start,duration,osc,gain,context,timings);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
playing_BANG_.cljs$core$IFn$_invoke$arity$1 = playing_BANG___1;
playing_BANG_.cljs$core$IFn$_invoke$arity$2 = playing_BANG___2;
playing_BANG_.cljs$core$IFn$_invoke$arity$3 = playing_BANG___3;
playing_BANG_.cljs$core$IFn$_invoke$arity$4 = playing_BANG___4;
playing_BANG_.cljs$core$IFn$_invoke$arity$7 = playing_BANG___7;
return playing_BANG_;
})()
;
cljs_web_audio.core.combine_BANG_ = (function combine_BANG_(x,y){return cljs.core.merge_with.call(null,cljs.core.concat,x,cljs.core.select_keys.call(null,cljs_web_audio.core.playing_BANG_.call(null,y,new cljs.core.Keyword(null,"duration","duration",3316859142).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(x)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"sounds","sounds",4412361910)], true)));
});
cljs_web_audio.core.play_BANG_ = (function play_BANG_(p__84348){var map__84350 = p__84348;var map__84350__$1 = ((cljs.core.seq_QMARK_.call(null,map__84350))?cljs.core.apply.call(null,cljs.core.hash_map,map__84350):map__84350);var context = cljs.core.get.call(null,map__84350__$1,new cljs.core.Keyword(null,"context","context",1965435169));var sounds = cljs.core.get.call(null,map__84350__$1,new cljs.core.Keyword(null,"sounds","sounds",4412361910));var duration = cljs.core.get.call(null,map__84350__$1,new cljs.core.Keyword(null,"duration","duration",3316859142));return cljs.core.doall.call(null,cljs.core.map.call(null,cljs_web_audio.core.note_on_BANG_,cljs.core.map.call(null,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),sounds)));
});
cljs_web_audio.core.mouse_events_channel_BANG_ = (function() {
var mouse_events_channel_BANG_ = null;
var mouse_events_channel_BANG___0 = (function (){return mouse_events_channel_BANG_.call(null,cljs.core.async.chan.call(null));
});
var mouse_events_channel_BANG___1 = (function (mouse_events){window.addEventListener("mousemove",(function (e){return cljs.core.async.put_BANG_.call(null,mouse_events,e);
}));
return mouse_events;
});
mouse_events_channel_BANG_ = function(mouse_events){
switch(arguments.length){
case 0:
return mouse_events_channel_BANG___0.call(this);
case 1:
return mouse_events_channel_BANG___1.call(this,mouse_events);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mouse_events_channel_BANG_.cljs$core$IFn$_invoke$arity$0 = mouse_events_channel_BANG___0;
mouse_events_channel_BANG_.cljs$core$IFn$_invoke$arity$1 = mouse_events_channel_BANG___1;
return mouse_events_channel_BANG_;
})()
;
cljs_web_audio.core.xy = (function() {
var xy = null;
var xy__1 = (function (channel){return xy.call(null,channel,(window.screen.width - window.screenX),(window.screen.height - window.screenY));
});
var xy__3 = (function (channel,w,h){return cljs.core.async.map_LT_.call(null,(function (e){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"x","x",1013904362),(e.x / w),new cljs.core.Keyword(null,"y","y",1013904363),(e.y / h)], true);
}),channel);
});
xy = function(channel,w,h){
switch(arguments.length){
case 1:
return xy__1.call(this,channel);
case 3:
return xy__3.call(this,channel,w,h);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
xy.cljs$core$IFn$_invoke$arity$1 = xy__1;
xy.cljs$core$IFn$_invoke$arity$3 = xy__3;
return xy;
})()
;
cljs_web_audio.core.o = (function() {
var o = null;
var o__2 = (function (f,i){return o.call(null,f,cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,16)),i,1);
});
var o__4 = (function (f,c,i,n){cljs_web_audio.core.G.call(null,(function (x){return cljs.core.async.put_BANG_.call(null,c,x);
}),f,i,n);
return c;
});
o = function(f,c,i,n){
switch(arguments.length){
case 2:
return o__2.call(this,f,c);
case 4:
return o__4.call(this,f,c,i,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
o.cljs$core$IFn$_invoke$arity$2 = o__2;
o.cljs$core$IFn$_invoke$arity$4 = o__4;
return o;
})()
;
cljs_web_audio.core.theremin_BANG_ = (function() {
var theremin_BANG_ = null;
var theremin_BANG___0 = (function (){return theremin_BANG_.call(null,cljs_web_audio.core.xy.call(null,cljs_web_audio.core.mouse_events_channel_BANG_.call(null)));
});
var theremin_BANG___1 = (function (mouse_events){return cljs_web_audio.core.play_BANG_.call(null,cljs_web_audio.core.f_LT__BANG_G.call(null,cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._STAR_,2000),new cljs.core.Keyword(null,"x","x",1013904362)),mouse_events)));
});
theremin_BANG_ = function(mouse_events){
switch(arguments.length){
case 0:
return theremin_BANG___0.call(this);
case 1:
return theremin_BANG___1.call(this,mouse_events);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
theremin_BANG_.cljs$core$IFn$_invoke$arity$0 = theremin_BANG___0;
theremin_BANG_.cljs$core$IFn$_invoke$arity$1 = theremin_BANG___1;
return theremin_BANG_;
})()
;
cljs_web_audio.core.pc = (function() {
var pc = null;
var pc__3 = (function (f,c,iv){return pc.call(null,f,c,cljs.core.atom.call(null,iv),iv);
});
var pc__4 = (function (f,c,va,iv){var c__5484__auto___84407 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_84391){var state_val_84392 = (state_84391[1]);if((state_val_84392 === 7))
{var inst_84382 = (state_84391[2]);var inst_84383 = cljs.core.reset_BANG_.call(null,va,inst_84382);var state_84391__$1 = (function (){var statearr_84393 = state_84391;(statearr_84393[7] = inst_84383);
return statearr_84393;
})();var statearr_84394_84408 = state_84391__$1;(statearr_84394_84408[2] = null);
(statearr_84394_84408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84392 === 6))
{var inst_84387 = (state_84391[2]);var state_84391__$1 = state_84391;var statearr_84395_84409 = state_84391__$1;(statearr_84395_84409[2] = inst_84387);
(statearr_84395_84409[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84392 === 5))
{var state_84391__$1 = state_84391;var statearr_84396_84410 = state_84391__$1;(statearr_84396_84410[2] = null);
(statearr_84396_84410[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84392 === 4))
{var state_84391__$1 = state_84391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84391__$1,7,c);
} else
{if((state_val_84392 === 3))
{var inst_84389 = (state_84391[2]);var state_84391__$1 = state_84391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84391__$1,inst_84389);
} else
{if((state_val_84392 === 2))
{var state_84391__$1 = state_84391;if(true)
{var statearr_84397_84411 = state_84391__$1;(statearr_84397_84411[1] = 4);
} else
{var statearr_84398_84412 = state_84391__$1;(statearr_84398_84412[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84392 === 1))
{var state_84391__$1 = state_84391;var statearr_84399_84413 = state_84391__$1;(statearr_84399_84413[2] = null);
(statearr_84399_84413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5414__auto__){
return (function() {
var state_machine__5415__auto__ = null;
var state_machine__5415__auto____0 = (function (){var statearr_84403 = (new Array(8));(statearr_84403[0] = state_machine__5415__auto__);
(statearr_84403[1] = 1);
return statearr_84403;
});
var state_machine__5415__auto____1 = (function (state_84391){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_84391);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e84404){if((e84404 instanceof Object))
{var ex__5418__auto__ = e84404;var statearr_84405_84414 = state_84391;(statearr_84405_84414[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84391);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e84404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__84415 = state_84391;
state_84391 = G__84415;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_84391){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_84391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_84406 = f__5485__auto__.call(null);(statearr_84406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto___84407);
return statearr_84406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return (function (x){return f.call(null,cljs.core.deref.call(null,va),x);
});
});
pc = function(f,c,va,iv){
switch(arguments.length){
case 3:
return pc__3.call(this,f,c,va);
case 4:
return pc__4.call(this,f,c,va,iv);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pc.cljs$core$IFn$_invoke$arity$3 = pc__3;
pc.cljs$core$IFn$_invoke$arity$4 = pc__4;
return pc;
})()
;
cljs_web_audio.core.ot = (function ot(){return cljs_web_audio.core.play_BANG_.call(null,cljs_web_audio.core.Yf_LT__BANG_G.call(null,cljs_web_audio.core.f_LT__BANG_G.call(null,cljs.core.async.map_LT_.call(null,cljs_web_audio.core.pc.call(null,cljs.core._STAR_,cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._PLUS_,1),cljs_web_audio.core.P.call(null,cljs.core._STAR_,15000),new cljs.core.Keyword(null,"y","y",1013904363)),cljs_web_audio.core.xy.call(null,cljs_web_audio.core.mouse_events_channel_BANG_.call(null))),2000),cljs_web_audio.core.o.call(null,cljs_web_audio.core.pc.call(null,(function (r,x){return ((r * x) * (1 - x));
}),cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._PLUS_,3),cljs_web_audio.core.P.call(null,cljs.core._STAR_,1),new cljs.core.Keyword(null,"x","x",1013904362)),cljs_web_audio.core.xy.call(null,cljs_web_audio.core.mouse_events_channel_BANG_.call(null))),2.1),0.3))),cljs.core.async.map_LT_.call(null,cljs_web_audio.core.pc.call(null,cljs.core._STAR_,cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._PLUS_,1),cljs_web_audio.core.P.call(null,cljs.core._STAR_,20000),new cljs.core.Keyword(null,"y","y",1013904363)),cljs_web_audio.core.xy.call(null,cljs_web_audio.core.mouse_events_channel_BANG_.call(null))),2000),cljs_web_audio.core.o.call(null,cljs_web_audio.core.pc.call(null,(function (r,x){return ((r * x) * (1 - x));
}),cljs.core.async.map_LT_.call(null,cljs_web_audio.core.C.call(null,cljs_web_audio.core.P.call(null,cljs.core._,4),cljs_web_audio.core.P.call(null,cljs.core._STAR_,1),new cljs.core.Keyword(null,"x","x",1013904362)),cljs_web_audio.core.xy.call(null,cljs_web_audio.core.mouse_events_channel_BANG_.call(null))),2.1),0.3))));
});

//# sourceMappingURL=core.js.map