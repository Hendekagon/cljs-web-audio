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
cljs_web_audio.core.is_webkit = (function (){try{return webkitAudioContext;
}catch (e215475){if((e215475 instanceof Error))
{var e = e215475;return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e215475;
} else
{return null;
}
}
}})();
cljs_web_audio.core.pi2 = (2 * Math.PI);
/**
* Returns a channel which logs messages it reads from
*/
cljs_web_audio.core.log_LT__BANG_G = (function log_LT__BANG_G(channel){var c__5486__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_215516){var state_val_215517 = (state_215516[1]);if((state_val_215517 === 7))
{var inst_215507 = (state_215516[2]);var inst_215508 = console.log(inst_215507);var state_215516__$1 = (function (){var statearr_215518 = state_215516;(statearr_215518[7] = inst_215508);
return statearr_215518;
})();var statearr_215519_215532 = state_215516__$1;(statearr_215519_215532[2] = null);
(statearr_215519_215532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215517 === 6))
{var inst_215512 = (state_215516[2]);var state_215516__$1 = state_215516;var statearr_215520_215533 = state_215516__$1;(statearr_215520_215533[2] = inst_215512);
(statearr_215520_215533[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215517 === 5))
{var state_215516__$1 = state_215516;var statearr_215521_215534 = state_215516__$1;(statearr_215521_215534[2] = null);
(statearr_215521_215534[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215517 === 4))
{var state_215516__$1 = state_215516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_215516__$1,7,channel);
} else
{if((state_val_215517 === 3))
{var inst_215514 = (state_215516[2]);var state_215516__$1 = state_215516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_215516__$1,inst_215514);
} else
{if((state_val_215517 === 2))
{var state_215516__$1 = state_215516;if(true)
{var statearr_215522_215535 = state_215516__$1;(statearr_215522_215535[1] = 4);
} else
{var statearr_215523_215536 = state_215516__$1;(statearr_215523_215536[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215517 === 1))
{var state_215516__$1 = state_215516;var statearr_215524_215537 = state_215516__$1;(statearr_215524_215537[2] = null);
(statearr_215524_215537[1] = 2);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_215528 = (new Array(8));(statearr_215528[0] = state_machine__5417__auto__);
(statearr_215528[1] = 1);
return statearr_215528;
});
var state_machine__5417__auto____1 = (function (state_215516){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_215516);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e215529){if((e215529 instanceof Object))
{var ex__5420__auto__ = e215529;var statearr_215530_215538 = state_215516;(statearr_215530_215538[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_215516);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e215529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__215539 = state_215516;
state_215516 = G__215539;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_215516){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_215516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_215531 = f__5487__auto__.call(null);(statearr_215531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto__);
return statearr_215531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
}));
return c__5486__auto__;
});
cljs_web_audio.core.P = cljs.core.partial;
cljs_web_audio.core.C = cljs.core.comp;
cljs_web_audio.core.__ = (function __(f,y){return (function (x){return f.call(null,x,y);
});
});
cljs_web_audio.core.trans = cljs_web_audio.core.P.call(null,cljs.core.apply,cljs_web_audio.core.P.call(null,cljs.core.map,cljs.core.vector));
/**
* Do the function f at regular intervals
* and send the results to g, starting with x.
* (G looks like an arrow looping back on itself, and an ear)
* 
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
cljs_web_audio.core.context_ = (cljs.core.truth_(cljs_web_audio.core.is_webkit)?(function (){return (new webkitAudioContext());
}):(function (){return (new AudioContext());
}));
cljs_web_audio.core.context = (function() {
var context = null;
var context__0 = (function (){return cljs_web_audio.core.context_.call(null);
});
var context__1 = (function (node){return node.context;
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
cljs_web_audio.core.set_wavetable_BANG_ = (cljs.core.truth_(cljs_web_audio.core.is_webkit)?(function (osc,wavetable){return osc.setPeriodicWave(wavetable);
}):(function (osc,wavetable){return osc.setWaveTable(wavetable);
}));
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
var create_wavetable__2 = (function (context,real){return create_wavetable.call(null,context,real,cljs_web_audio.core.to_float32array.call(null,cljs.core.repeat.call(null,real.length,0)));
});
var create_wavetable__3 = (function (context,real,imag){return context.createPeriodicWave(real,imag);
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
var oscillator__3 = (function (context,oscillator__$1,wavetable){cljs_web_audio.core.set_wavetable_BANG_.call(null,oscillator__$1,wavetable);
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
var note_on_BANG___2 = (function (o,delay){o.start(delay);
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
var note_off_BANG___2 = (function (o,delay){o.stop(delay);
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
var gain__1 = (function (context){return cljs_web_audio.core.gain_BANG_.call(null,context.createGain(),1);
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
cljs_web_audio.core.exp_to = (function exp_to(param,x,t){return param.exponentialRampToValueAtTime(x,t);
});
cljs_web_audio.core.linear_to = (function linear_to(param,x,t){return param.linearRampToValueAtTime(x,t);
});
cljs_web_audio.core.values_over_time = (function() {
var values_over_time = null;
var values_over_time__1 = (function (p__215540){var map__215542 = p__215540;var map__215542__$1 = ((cljs.core.seq_QMARK_.call(null,map__215542))?cljs.core.apply.call(null,cljs.core.hash_map,map__215542):map__215542);var coll = cljs.core.get.call(null,map__215542__$1,new cljs.core.Keyword(null,"coll","coll",1016963678));var context = cljs.core.get.call(null,map__215542__$1,new cljs.core.Keyword(null,"context","context",1965435169));var param = cljs.core.get.call(null,map__215542__$1,new cljs.core.Keyword(null,"param","param",1120340991));var duration = cljs.core.get.call(null,map__215542__$1,new cljs.core.Keyword(null,"duration","duration",3316859142));return values_over_time.call(null,coll,cljs_web_audio.core.current_time.call(null,context),duration,param);
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
/**
* make the given channel control the given parameter
*/
cljs_web_audio.core.p_LT__BANG_G = (function p_LT__BANG_G(channel,context,param){var c__5486__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_215587){var state_val_215588 = (state_215587[1]);if((state_val_215588 === 7))
{var inst_215576 = (state_215587[2]);var inst_215577 = cljs_web_audio.core.current_time.call(null,context);var inst_215578 = (0.01 + inst_215577);var inst_215579 = cljs_web_audio.core.exp_to.call(null,param,inst_215576,inst_215578);var state_215587__$1 = (function (){var statearr_215589 = state_215587;(statearr_215589[7] = inst_215579);
return statearr_215589;
})();var statearr_215590_215603 = state_215587__$1;(statearr_215590_215603[2] = null);
(statearr_215590_215603[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215588 === 6))
{var inst_215583 = (state_215587[2]);var state_215587__$1 = state_215587;var statearr_215591_215604 = state_215587__$1;(statearr_215591_215604[2] = inst_215583);
(statearr_215591_215604[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215588 === 5))
{var state_215587__$1 = state_215587;var statearr_215592_215605 = state_215587__$1;(statearr_215592_215605[2] = null);
(statearr_215592_215605[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215588 === 4))
{var state_215587__$1 = state_215587;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_215587__$1,7,channel);
} else
{if((state_val_215588 === 3))
{var inst_215585 = (state_215587[2]);var state_215587__$1 = state_215587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_215587__$1,inst_215585);
} else
{if((state_val_215588 === 2))
{var state_215587__$1 = state_215587;if(true)
{var statearr_215593_215606 = state_215587__$1;(statearr_215593_215606[1] = 4);
} else
{var statearr_215594_215607 = state_215587__$1;(statearr_215594_215607[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215588 === 1))
{var state_215587__$1 = state_215587;var statearr_215595_215608 = state_215587__$1;(statearr_215595_215608[2] = null);
(statearr_215595_215608[1] = 2);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_215599 = (new Array(8));(statearr_215599[0] = state_machine__5417__auto__);
(statearr_215599[1] = 1);
return statearr_215599;
});
var state_machine__5417__auto____1 = (function (state_215587){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_215587);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e215600){if((e215600 instanceof Object))
{var ex__5420__auto__ = e215600;var statearr_215601_215609 = state_215587;(statearr_215601_215609[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_215587);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e215600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__215610 = state_215587;
state_215587 = G__215610;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_215587){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_215587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_215602 = f__5487__auto__.call(null);(statearr_215602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto__);
return statearr_215602;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
}));
return c__5486__auto__;
});
cljs_web_audio.core.fvt = (function() {
var fvt = null;
var fvt__2 = (function (params,p__215611){var vec__215615 = p__215611;var times = cljs.core.nth.call(null,vec__215615,0,null);var values = cljs.core.nthnext.call(null,vec__215615,1);return cljs.core.map.call(null,cljs_web_audio.core.exp_to,params,values,cljs.core.map.call(null,cljs.core._PLUS_,times,cljs.core.repeat.call(null,cljs_web_audio.core.current_time)));
});
var fvt__4 = (function (fp,gp,context,p__215612){var vec__215616 = p__215612;var f = cljs.core.nth.call(null,vec__215616,0,null);var v = cljs.core.nth.call(null,vec__215616,1,null);var t = cljs.core.nth.call(null,vec__215616,2,null);cljs_web_audio.core.set_value_at_time.call(null,fp,f,(t + cljs_web_audio.core.current_time.call(null,context)));
return cljs_web_audio.core.set_value_at_time.call(null,gp,v,(t + cljs_web_audio.core.current_time.call(null,context)));
});
fvt = function(fp,gp,context,p__215612){
switch(arguments.length){
case 2:
return fvt__2.call(this,fp,gp);
case 4:
return fvt__4.call(this,fp,gp,context,p__215612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fvt.cljs$core$IFn$_invoke$arity$2 = fvt__2;
fvt.cljs$core$IFn$_invoke$arity$4 = fvt__4;
return fvt;
})()
;
/**
* make the given channel control the given parameter
*/
cljs_web_audio.core.pm_LT__BANG_G = (function pm_LT__BANG_G(channel,params){var c__5486__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_215657){var state_val_215658 = (state_215657[1]);if((state_val_215658 === 7))
{var inst_215648 = (state_215657[2]);var inst_215649 = cljs_web_audio.core.fvt.call(null,params,inst_215648);var state_215657__$1 = (function (){var statearr_215659 = state_215657;(statearr_215659[7] = inst_215649);
return statearr_215659;
})();var statearr_215660_215673 = state_215657__$1;(statearr_215660_215673[2] = null);
(statearr_215660_215673[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215658 === 6))
{var inst_215653 = (state_215657[2]);var state_215657__$1 = state_215657;var statearr_215661_215674 = state_215657__$1;(statearr_215661_215674[2] = inst_215653);
(statearr_215661_215674[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215658 === 5))
{var state_215657__$1 = state_215657;var statearr_215662_215675 = state_215657__$1;(statearr_215662_215675[2] = null);
(statearr_215662_215675[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215658 === 4))
{var state_215657__$1 = state_215657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_215657__$1,7,channel);
} else
{if((state_val_215658 === 3))
{var inst_215655 = (state_215657[2]);var state_215657__$1 = state_215657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_215657__$1,inst_215655);
} else
{if((state_val_215658 === 2))
{var state_215657__$1 = state_215657;if(true)
{var statearr_215663_215676 = state_215657__$1;(statearr_215663_215676[1] = 4);
} else
{var statearr_215664_215677 = state_215657__$1;(statearr_215664_215677[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215658 === 1))
{var state_215657__$1 = state_215657;var statearr_215665_215678 = state_215657__$1;(statearr_215665_215678[2] = null);
(statearr_215665_215678[1] = 2);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_215669 = (new Array(8));(statearr_215669[0] = state_machine__5417__auto__);
(statearr_215669[1] = 1);
return statearr_215669;
});
var state_machine__5417__auto____1 = (function (state_215657){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_215657);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e215670){if((e215670 instanceof Object))
{var ex__5420__auto__ = e215670;var statearr_215671_215679 = state_215657;(statearr_215671_215679[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_215657);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e215670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__215680 = state_215657;
state_215657 = G__215680;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_215657){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_215657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_215672 = f__5487__auto__.call(null);(statearr_215672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto__);
return statearr_215672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
}));
return c__5486__auto__;
});
/**
* make the given channel control the given parameter
*/
cljs_web_audio.core.pmm_LT__BANG_G = (function pmm_LT__BANG_G(channel,context,fp,gp){var c__5486__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_215721){var state_val_215722 = (state_215721[1]);if((state_val_215722 === 7))
{var inst_215712 = (state_215721[2]);var inst_215713 = cljs_web_audio.core.fvt.call(null,fp,gp,context,inst_215712);var state_215721__$1 = (function (){var statearr_215723 = state_215721;(statearr_215723[7] = inst_215713);
return statearr_215723;
})();var statearr_215724_215737 = state_215721__$1;(statearr_215724_215737[2] = null);
(statearr_215724_215737[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215722 === 6))
{var inst_215717 = (state_215721[2]);var state_215721__$1 = state_215721;var statearr_215725_215738 = state_215721__$1;(statearr_215725_215738[2] = inst_215717);
(statearr_215725_215738[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215722 === 5))
{var state_215721__$1 = state_215721;var statearr_215726_215739 = state_215721__$1;(statearr_215726_215739[2] = null);
(statearr_215726_215739[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215722 === 4))
{var state_215721__$1 = state_215721;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_215721__$1,7,channel);
} else
{if((state_val_215722 === 3))
{var inst_215719 = (state_215721[2]);var state_215721__$1 = state_215721;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_215721__$1,inst_215719);
} else
{if((state_val_215722 === 2))
{var state_215721__$1 = state_215721;if(true)
{var statearr_215727_215740 = state_215721__$1;(statearr_215727_215740[1] = 4);
} else
{var statearr_215728_215741 = state_215721__$1;(statearr_215728_215741[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215722 === 1))
{var state_215721__$1 = state_215721;var statearr_215729_215742 = state_215721__$1;(statearr_215729_215742[2] = null);
(statearr_215729_215742[1] = 2);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_215733 = (new Array(8));(statearr_215733[0] = state_machine__5417__auto__);
(statearr_215733[1] = 1);
return statearr_215733;
});
var state_machine__5417__auto____1 = (function (state_215721){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_215721);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e215734){if((e215734 instanceof Object))
{var ex__5420__auto__ = e215734;var statearr_215735_215743 = state_215721;(statearr_215735_215743[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_215721);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e215734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__215744 = state_215721;
state_215721 = G__215744;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_215721){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_215721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_215736 = f__5487__auto__.call(null);(statearr_215736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto__);
return statearr_215736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
}));
return c__5486__auto__;
});
/**
* returns an oscillator whos frequency is controlled by the given channel
*/
cljs_web_audio.core.f_LT__BANG_G = (function() {
var f_LT__BANG_G = null;
var f_LT__BANG_G__1 = (function (channel){return f_LT__BANG_G.call(null,channel,cljs_web_audio.core.context.call(null));
});
var f_LT__BANG_G__2 = (function (channel,context){return f_LT__BANG_G.call(null,channel,context,cljs_web_audio.core.oscillator.call(null,context));
});
var f_LT__BANG_G__3 = (function (channel,context,oscillator){cljs_web_audio.core.connect_BANG_.call(null,oscillator,context.destination);
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"duration","duration",3316859142),new cljs.core.Keyword(null,"forever","forever",4631209177),new cljs.core.Keyword(null,"sounds","sounds",4412361910),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),oscillator,new cljs.core.Keyword(null,"channel","channel",1752854645),cljs_web_audio.core.p_LT__BANG_G.call(null,channel,context,oscillator.frequency)], true)], true)], true);
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
/**
* returns an oscillator whos frequency, volume & timing are controlled by the given channel
*/
cljs_web_audio.core.pp_LT__BANG_G = (function() {
var pp_LT__BANG_G = null;
var pp_LT__BANG_G__1 = (function (channel){return pp_LT__BANG_G.call(null,channel,cljs_web_audio.core.context.call(null));
});
var pp_LT__BANG_G__2 = (function (channel,context){return pp_LT__BANG_G.call(null,channel,context,cljs_web_audio.core.gain.call(null,context),cljs_web_audio.core.oscillator.call(null,context));
});
var pp_LT__BANG_G__4 = (function (channel,context,gain,oscillator){cljs_web_audio.core.connect_BANG_.call(null,gain,context.destination);
cljs_web_audio.core.connect_BANG_.call(null,oscillator,gain);
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"sounds","sounds",4412361910),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),oscillator,new cljs.core.Keyword(null,"gain","gain",1017069297),gain,new cljs.core.Keyword(null,"channel","channel",1752854645),cljs_web_audio.core.pmm_LT__BANG_G.call(null,channel,context,oscillator.frequency,gain.gain)], true)], true)], true);
});
pp_LT__BANG_G = function(channel,context,gain,oscillator){
switch(arguments.length){
case 1:
return pp_LT__BANG_G__1.call(this,channel);
case 2:
return pp_LT__BANG_G__2.call(this,channel,context);
case 4:
return pp_LT__BANG_G__4.call(this,channel,context,gain,oscillator);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pp_LT__BANG_G.cljs$core$IFn$_invoke$arity$1 = pp_LT__BANG_G__1;
pp_LT__BANG_G.cljs$core$IFn$_invoke$arity$2 = pp_LT__BANG_G__2;
pp_LT__BANG_G.cljs$core$IFn$_invoke$arity$4 = pp_LT__BANG_G__4;
return pp_LT__BANG_G;
})()
;
/**
* combine a oscillations! map with an oscillator for the given channel
*/
cljs_web_audio.core.Yf_LT__BANG_G = (function Yf_LT__BANG_G(m,channel){return cljs.core.merge_with.call(null,cljs.core.concat,m,cljs.core.select_keys.call(null,cljs_web_audio.core.f_LT__BANG_G.call(null,channel,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"sounds","sounds",4412361910)], true)));
});
/**
* Return a map representing the playing of some sounds
* input format is [[frequency amplitude duration] ...]
* hmmm this is not there yet...
*/
cljs_web_audio.core.oscillations_BANG_ = (function() {
var oscillations_BANG_ = null;
var oscillations_BANG___1 = (function (coll){return oscillations_BANG_.call(null,coll,1);
});
var oscillations_BANG___2 = (function (coll,duration){return oscillations_BANG_.call(null,coll,duration,cljs_web_audio.core.context.call(null));
});
var oscillations_BANG___3 = (function (coll,duration,context){return oscillations_BANG_.call(null,coll,cljs_web_audio.core.current_time.call(null,context),duration,context);
});
var oscillations_BANG___4 = (function (coll,start,duration,context){return oscillations_BANG_.call(null,coll,start,duration,cljs_web_audio.core.oscillator.call(null,context),cljs_web_audio.core.gain.call(null,context),context,cljs_web_audio.timing.relative_to_absolute.call(null,start,duration,cljs.core.map.call(null,cljs.core.last,coll)));
});
var oscillations_BANG___7 = (function (coll,start,duration,osc,gain,context,timings){cljs_web_audio.core.connect_BANG_.call(null,osc,gain);
cljs_web_audio.core.connect_BANG_.call(null,gain,context.destination);
cljs.core.doall.call(null,cljs_web_audio.core.values_over_time.call(null,cljs.core.map.call(null,cljs.core.first,coll),start,duration,osc.frequency,timings));
cljs.core.doall.call(null,cljs_web_audio.core.values_over_time.call(null,cljs.core.map.call(null,cljs.core.second,coll),start,duration,gain.gain,timings));
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"duration","duration",3316859142),duration,new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"sounds","sounds",4412361910),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"gain","gain",1017069297),gain,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),osc], true)], true)], true);
});
oscillations_BANG_ = function(coll,start,duration,osc,gain,context,timings){
switch(arguments.length){
case 1:
return oscillations_BANG___1.call(this,coll);
case 2:
return oscillations_BANG___2.call(this,coll,start);
case 3:
return oscillations_BANG___3.call(this,coll,start,duration);
case 4:
return oscillations_BANG___4.call(this,coll,start,duration,osc);
case 7:
return oscillations_BANG___7.call(this,coll,start,duration,osc,gain,context,timings);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
oscillations_BANG_.cljs$core$IFn$_invoke$arity$1 = oscillations_BANG___1;
oscillations_BANG_.cljs$core$IFn$_invoke$arity$2 = oscillations_BANG___2;
oscillations_BANG_.cljs$core$IFn$_invoke$arity$3 = oscillations_BANG___3;
oscillations_BANG_.cljs$core$IFn$_invoke$arity$4 = oscillations_BANG___4;
oscillations_BANG_.cljs$core$IFn$_invoke$arity$7 = oscillations_BANG___7;
return oscillations_BANG_;
})()
;
/**
* combine a oscillationss! map with an oscillator for the given channel
*/
cljs_web_audio.core.osc_PLUS_ = (function osc_PLUS_(m1,coll,dur){return cljs.core.merge_with.call(null,cljs.core.concat,m1,cljs.core.select_keys.call(null,cljs_web_audio.core.oscillations_BANG_.call(null,coll,dur,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(m1)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"sounds","sounds",4412361910)], true)));
});
cljs_web_audio.core.fill = (function fill(x){if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.concat.call(null,x,cljs.core.take.call(null,(3 - cljs.core.count.call(null,x)),cljs.core.PersistentVector.fromArray([440,0.1,1], true)));
} else
{return cljs.core.cons.call(null,x,cljs.core.PersistentVector.fromArray([0.1,1], true));
}
});
cljs_web_audio.core.redfreqs = (function() {
var redfreqs = null;
var redfreqs__2 = (function (colls,duration){return cljs.core.reduce.call(null,(function (r,coll){return cljs.core.merge_with.call(null,cljs.core.concat,r,cljs.core.select_keys.call(null,redfreqs.call(null,coll,duration,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(r)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"sounds","sounds",4412361910)], true)));
}),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"context","context",1965435169),cljs_web_audio.core.context.call(null),new cljs.core.Keyword(null,"duration","duration",3316859142),duration], true),colls);
});
var redfreqs__3 = (function (coll,duration,context){return cljs_web_audio.core.oscillations_BANG_.call(null,cljs.core.map.call(null,cljs_web_audio.core.fill,coll),duration,context);
});
redfreqs = function(coll,duration,context){
switch(arguments.length){
case 2:
return redfreqs__2.call(this,coll,duration);
case 3:
return redfreqs__3.call(this,coll,duration,context);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redfreqs.cljs$core$IFn$_invoke$arity$2 = redfreqs__2;
redfreqs.cljs$core$IFn$_invoke$arity$3 = redfreqs__3;
return redfreqs;
})()
;
cljs_web_audio.core.redosc = (function() {
var redosc = null;
var redosc__1 = (function (colls){return cljs.core.reduce.call(null,(function (r,coll){return cljs.core.merge_with.call(null,cljs.core.concat,r,cljs.core.select_keys.call(null,redosc.call(null,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(r),cljs.core.cons.call(null,0,coll)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"sounds","sounds",4412361910)], true)));
}),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"context","context",1965435169),cljs_web_audio.core.context.call(null)], true),colls);
});
var redosc__2 = (function (context,coll){return redosc.call(null,context,coll,cljs_web_audio.core.oscillator.call(null,context,cljs_web_audio.core.create_wavetable.call(null,context,cljs_web_audio.core.to_float32array.call(null,coll))),cljs_web_audio.core.gain.call(null,context));
});
var redosc__4 = (function (context,coll,osc,gain){cljs_web_audio.core.connect_BANG_.call(null,osc,gain);
cljs_web_audio.core.connect_BANG_.call(null,gain,context.destination);
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"sounds","sounds",4412361910),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"gain","gain",1017069297),gain,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),osc], true)], true)], true);
});
redosc = function(context,coll,osc,gain){
switch(arguments.length){
case 1:
return redosc__1.call(this,context);
case 2:
return redosc__2.call(this,context,coll);
case 4:
return redosc__4.call(this,context,coll,osc,gain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redosc.cljs$core$IFn$_invoke$arity$1 = redosc__1;
redosc.cljs$core$IFn$_invoke$arity$2 = redosc__2;
redosc.cljs$core$IFn$_invoke$arity$4 = redosc__4;
return redosc;
})()
;
cljs_web_audio.core.play_BANG_ = (function play_BANG_(p__215745){var map__215747 = p__215745;var map__215747__$1 = ((cljs.core.seq_QMARK_.call(null,map__215747))?cljs.core.apply.call(null,cljs.core.hash_map,map__215747):map__215747);var context = cljs.core.get.call(null,map__215747__$1,new cljs.core.Keyword(null,"context","context",1965435169));var sounds = cljs.core.get.call(null,map__215747__$1,new cljs.core.Keyword(null,"sounds","sounds",4412361910));var duration = cljs.core.get.call(null,map__215747__$1,new cljs.core.Keyword(null,"duration","duration",3316859142));cljs.core.doall.call(null,cljs.core.map.call(null,cljs_web_audio.core.note_on_BANG_,cljs.core.map.call(null,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),sounds)));
if(typeof duration === 'number')
{return cljs.core.doall.call(null,cljs.core.map.call(null,(function (o){return cljs_web_audio.core.note_off_BANG_.call(null,o,(duration + 1));
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),sounds)));
} else
{return null;
}
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
cljs_web_audio.core.mouse_position_channel_BANG_ = (function() {
var mouse_position_channel_BANG_ = null;
var mouse_position_channel_BANG___0 = (function (){return mouse_position_channel_BANG_.call(null,cljs_web_audio.core.mouse_events_channel_BANG_.call(null));
});
var mouse_position_channel_BANG___1 = (function (channel){return mouse_position_channel_BANG_.call(null,channel,(window.screen.width - window.screenX),(window.screen.height - window.screenY));
});
var mouse_position_channel_BANG___3 = (function (channel,w,h){return cljs.core.async.map_LT_.call(null,(function (e){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"x","x",1013904362),(e.x / w),new cljs.core.Keyword(null,"y","y",1013904363),(e.y / h),new cljs.core.Keyword(null,"shift","shift",1123311604),e.shiftKey], true);
}),channel);
});
mouse_position_channel_BANG_ = function(channel,w,h){
switch(arguments.length){
case 0:
return mouse_position_channel_BANG___0.call(this);
case 1:
return mouse_position_channel_BANG___1.call(this,channel);
case 3:
return mouse_position_channel_BANG___3.call(this,channel,w,h);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mouse_position_channel_BANG_.cljs$core$IFn$_invoke$arity$0 = mouse_position_channel_BANG___0;
mouse_position_channel_BANG_.cljs$core$IFn$_invoke$arity$1 = mouse_position_channel_BANG___1;
mouse_position_channel_BANG_.cljs$core$IFn$_invoke$arity$3 = mouse_position_channel_BANG___3;
return mouse_position_channel_BANG_;
})()
;
/**
* returns a channel filling from an iterative process
*/
cljs_web_audio.core.o = (function() {
var o = null;
var o__1 = (function (coll){return o.call(null,coll,cljs.core.rest,cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,16)));
});
var o__2 = (function (f,i){return o.call(null,f,cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,16)),i,30);
});
var o__3 = (function (coll,f,channel){cljs_web_audio.core.G.call(null,(function (col){return cljs.core.async.put_BANG_.call(null,channel,cljs.core.first.call(null,col));
}),f,coll,500);
return channel;
});
var o__4 = (function (f,c,i,n){cljs_web_audio.core.G.call(null,(function (x){return cljs.core.async.put_BANG_.call(null,c,x);
}),f,i,n);
return c;
});
o = function(f,c,i,n){
switch(arguments.length){
case 1:
return o__1.call(this,f);
case 2:
return o__2.call(this,f,c);
case 3:
return o__3.call(this,f,c,i);
case 4:
return o__4.call(this,f,c,i,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
o.cljs$core$IFn$_invoke$arity$1 = o__1;
o.cljs$core$IFn$_invoke$arity$2 = o__2;
o.cljs$core$IFn$_invoke$arity$3 = o__3;
o.cljs$core$IFn$_invoke$arity$4 = o__4;
return o;
})()
;
cljs_web_audio.core.fvts = (function fvts(colls){return cljs.core.reduce.call(null,(function (r,coll){return cljs.core.merge_with.call(null,cljs.core.concat,r,cljs.core.select_keys.call(null,cljs_web_audio.core.pp_LT__BANG_G.call(null,cljs_web_audio.core.o.call(null,coll),new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(r)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"sounds","sounds",4412361910)], true)));
}),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"context","context",1965435169),cljs_web_audio.core.context.call(null),new cljs.core.Keyword(null,"duration","duration",3316859142),new cljs.core.Keyword(null,"forever","forever",4631209177)], true),colls);
});
/**
* returns a partial function with first param controlled by a channel
*/
cljs_web_audio.core.pc = (function() {
var pc = null;
var pc__4 = (function (f,g,c,iv){return pc.call(null,f,g,c,cljs.core.atom.call(null,iv),iv);
});
var pc__5 = (function (f,g,c,va,iv){var c__5486__auto___215804 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_215788){var state_val_215789 = (state_215788[1]);if((state_val_215789 === 7))
{var inst_215779 = (state_215788[2]);var inst_215780 = cljs.core.reset_BANG_.call(null,va,inst_215779);var state_215788__$1 = (function (){var statearr_215790 = state_215788;(statearr_215790[7] = inst_215780);
return statearr_215790;
})();var statearr_215791_215805 = state_215788__$1;(statearr_215791_215805[2] = null);
(statearr_215791_215805[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215789 === 6))
{var inst_215784 = (state_215788[2]);var state_215788__$1 = state_215788;var statearr_215792_215806 = state_215788__$1;(statearr_215792_215806[2] = inst_215784);
(statearr_215792_215806[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215789 === 5))
{var state_215788__$1 = state_215788;var statearr_215793_215807 = state_215788__$1;(statearr_215793_215807[2] = null);
(statearr_215793_215807[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215789 === 4))
{var state_215788__$1 = state_215788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_215788__$1,7,c);
} else
{if((state_val_215789 === 3))
{var inst_215786 = (state_215788[2]);var state_215788__$1 = state_215788;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_215788__$1,inst_215786);
} else
{if((state_val_215789 === 2))
{var state_215788__$1 = state_215788;if(true)
{var statearr_215794_215808 = state_215788__$1;(statearr_215794_215808[1] = 4);
} else
{var statearr_215795_215809 = state_215788__$1;(statearr_215795_215809[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215789 === 1))
{var state_215788__$1 = state_215788;var statearr_215796_215810 = state_215788__$1;(statearr_215796_215810[2] = null);
(statearr_215796_215810[1] = 2);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_215800 = (new Array(8));(statearr_215800[0] = state_machine__5417__auto__);
(statearr_215800[1] = 1);
return statearr_215800;
});
var state_machine__5417__auto____1 = (function (state_215788){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_215788);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e215801){if((e215801 instanceof Object))
{var ex__5420__auto__ = e215801;var statearr_215802_215811 = state_215788;(statearr_215802_215811[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_215788);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e215801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__215812 = state_215788;
state_215788 = G__215812;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_215788){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_215788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_215803 = f__5487__auto__.call(null);(statearr_215803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto___215804);
return statearr_215803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
}));
return (function (x){return f.call(null,cljs.core.deref.call(null,va),g.call(null,x));
});
});
pc = function(f,g,c,va,iv){
switch(arguments.length){
case 4:
return pc__4.call(this,f,g,c,va);
case 5:
return pc__5.call(this,f,g,c,va,iv);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pc.cljs$core$IFn$_invoke$arity$4 = pc__4;
pc.cljs$core$IFn$_invoke$arity$5 = pc__5;
return pc;
})()
;
cljs_web_audio.core.aset01_BANG_ = (function aset01_BANG_(array,p__215813){var map__215815 = p__215813;var map__215815__$1 = ((cljs.core.seq_QMARK_.call(null,map__215815))?cljs.core.apply.call(null,cljs.core.hash_map,map__215815):map__215815);var x = cljs.core.get.call(null,map__215815__$1,new cljs.core.Keyword(null,"x","x",1013904362));var y = cljs.core.get.call(null,map__215815__$1,new cljs.core.Keyword(null,"y","y",1013904363));return (array[(((x * (array.length - 1)) | 0) + 1)] = y);
});
cljs_web_audio.core.asetall_BANG_ = (function asetall_BANG_(array,coll){return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,x){return (array[i] = x);
}),coll));
});
cljs_web_audio.core.asetting_BANG_ = (function asetting_BANG_(array,channel){var c__5486__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_215856){var state_val_215857 = (state_215856[1]);if((state_val_215857 === 7))
{var inst_215847 = (state_215856[2]);var inst_215848 = cljs_web_audio.core.asetall_BANG_.call(null,array,inst_215847);var state_215856__$1 = (function (){var statearr_215858 = state_215856;(statearr_215858[7] = inst_215848);
return statearr_215858;
})();var statearr_215859_215872 = state_215856__$1;(statearr_215859_215872[2] = null);
(statearr_215859_215872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215857 === 6))
{var inst_215852 = (state_215856[2]);var state_215856__$1 = state_215856;var statearr_215860_215873 = state_215856__$1;(statearr_215860_215873[2] = inst_215852);
(statearr_215860_215873[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215857 === 5))
{var state_215856__$1 = state_215856;var statearr_215861_215874 = state_215856__$1;(statearr_215861_215874[2] = null);
(statearr_215861_215874[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215857 === 4))
{var state_215856__$1 = state_215856;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_215856__$1,7,channel);
} else
{if((state_val_215857 === 3))
{var inst_215854 = (state_215856[2]);var state_215856__$1 = state_215856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_215856__$1,inst_215854);
} else
{if((state_val_215857 === 2))
{var state_215856__$1 = state_215856;if(true)
{var statearr_215862_215875 = state_215856__$1;(statearr_215862_215875[1] = 4);
} else
{var statearr_215863_215876 = state_215856__$1;(statearr_215863_215876[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215857 === 1))
{var state_215856__$1 = state_215856;var statearr_215864_215877 = state_215856__$1;(statearr_215864_215877[2] = null);
(statearr_215864_215877[1] = 2);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_215868 = (new Array(8));(statearr_215868[0] = state_machine__5417__auto__);
(statearr_215868[1] = 1);
return statearr_215868;
});
var state_machine__5417__auto____1 = (function (state_215856){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_215856);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e215869){if((e215869 instanceof Object))
{var ex__5420__auto__ = e215869;var statearr_215870_215878 = state_215856;(statearr_215870_215878[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_215856);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e215869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__215879 = state_215856;
state_215856 = G__215879;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_215856){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_215856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_215871 = f__5487__auto__.call(null);(statearr_215871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto__);
return statearr_215871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
}));
return c__5486__auto__;
});
cljs_web_audio.core.update_wavetable_BANG_ = (function update_wavetable_BANG_(osc,r,i,m){return cljs_web_audio.core.set_wavetable_BANG_.call(null,osc,cljs_web_audio.core.create_wavetable.call(null,cljs_web_audio.core.context.call(null,osc),r,i));
});
/**
* mutates the given array from the given channel's messages which are {:x [0-1 postion] :y value}
*/
cljs_web_audio.core.T_BANG_ = (function T_BANG_(array,channel){var c__5486__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_215920){var state_val_215921 = (state_215920[1]);if((state_val_215921 === 7))
{var inst_215911 = (state_215920[2]);var inst_215912 = cljs_web_audio.core.aset01_BANG_.call(null,array,inst_215911);var state_215920__$1 = (function (){var statearr_215922 = state_215920;(statearr_215922[7] = inst_215912);
return statearr_215922;
})();var statearr_215923_215936 = state_215920__$1;(statearr_215923_215936[2] = null);
(statearr_215923_215936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215921 === 6))
{var inst_215916 = (state_215920[2]);var state_215920__$1 = state_215920;var statearr_215924_215937 = state_215920__$1;(statearr_215924_215937[2] = inst_215916);
(statearr_215924_215937[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215921 === 5))
{var state_215920__$1 = state_215920;var statearr_215925_215938 = state_215920__$1;(statearr_215925_215938[2] = null);
(statearr_215925_215938[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215921 === 4))
{var state_215920__$1 = state_215920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_215920__$1,7,channel);
} else
{if((state_val_215921 === 3))
{var inst_215918 = (state_215920[2]);var state_215920__$1 = state_215920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_215920__$1,inst_215918);
} else
{if((state_val_215921 === 2))
{var state_215920__$1 = state_215920;if(true)
{var statearr_215926_215939 = state_215920__$1;(statearr_215926_215939[1] = 4);
} else
{var statearr_215927_215940 = state_215920__$1;(statearr_215927_215940[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215921 === 1))
{var state_215920__$1 = state_215920;var statearr_215928_215941 = state_215920__$1;(statearr_215928_215941[2] = null);
(statearr_215928_215941[1] = 2);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_215932 = (new Array(8));(statearr_215932[0] = state_machine__5417__auto__);
(statearr_215932[1] = 1);
return statearr_215932;
});
var state_machine__5417__auto____1 = (function (state_215920){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_215920);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e215933){if((e215933 instanceof Object))
{var ex__5420__auto__ = e215933;var statearr_215934_215942 = state_215920;(statearr_215934_215942[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_215920);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e215933;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__215943 = state_215920;
state_215920 = G__215943;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_215920){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_215920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_215935 = f__5487__auto__.call(null);(statearr_215935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto__);
return statearr_215935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
}));
return c__5486__auto__;
});
/**
* mutates the given array from the given channel's messages which are {:x [0-1 postion] :y value}
*/
cljs_web_audio.core.GP_LT__BANG_ = (function GP_LT__BANG_(f,channel){var c__5486__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_215984){var state_val_215985 = (state_215984[1]);if((state_val_215985 === 7))
{var inst_215975 = (state_215984[2]);var inst_215976 = f.call(null,inst_215975);var state_215984__$1 = (function (){var statearr_215986 = state_215984;(statearr_215986[7] = inst_215976);
return statearr_215986;
})();var statearr_215987_216000 = state_215984__$1;(statearr_215987_216000[2] = null);
(statearr_215987_216000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215985 === 6))
{var inst_215980 = (state_215984[2]);var state_215984__$1 = state_215984;var statearr_215988_216001 = state_215984__$1;(statearr_215988_216001[2] = inst_215980);
(statearr_215988_216001[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215985 === 5))
{var state_215984__$1 = state_215984;var statearr_215989_216002 = state_215984__$1;(statearr_215989_216002[2] = null);
(statearr_215989_216002[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215985 === 4))
{var state_215984__$1 = state_215984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_215984__$1,7,channel);
} else
{if((state_val_215985 === 3))
{var inst_215982 = (state_215984[2]);var state_215984__$1 = state_215984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_215984__$1,inst_215982);
} else
{if((state_val_215985 === 2))
{var state_215984__$1 = state_215984;if(true)
{var statearr_215990_216003 = state_215984__$1;(statearr_215990_216003[1] = 4);
} else
{var statearr_215991_216004 = state_215984__$1;(statearr_215991_216004[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_215985 === 1))
{var state_215984__$1 = state_215984;var statearr_215992_216005 = state_215984__$1;(statearr_215992_216005[2] = null);
(statearr_215992_216005[1] = 2);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_215996 = (new Array(8));(statearr_215996[0] = state_machine__5417__auto__);
(statearr_215996[1] = 1);
return statearr_215996;
});
var state_machine__5417__auto____1 = (function (state_215984){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_215984);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e215997){if((e215997 instanceof Object))
{var ex__5420__auto__ = e215997;var statearr_215998_216006 = state_215984;(statearr_215998_216006[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_215984);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e215997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__216007 = state_215984;
state_215984 = G__216007;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_215984){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_215984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_215999 = f__5487__auto__.call(null);(statearr_215999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto__);
return statearr_215999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
}));
return c__5486__auto__;
});
cljs_web_audio.core.get_LT__BANG_ = (function() {
var get_LT__BANG_ = null;
var get_LT__BANG___1 = (function (url){return get_LT__BANG_.call(null,(new XMLHttpRequest()),url,cljs.core.async.chan.call(null));
});
var get_LT__BANG___3 = (function (xhttp,url,channel){xhttp.open("GET",url,true);
cljs.core.async.put_BANG_.call(null,channel,"open...");
xhttp.onreadystatechange = (function (){cljs.core.async.put_BANG_.call(null,channel,"change");
if(cljs.core._EQ_.call(null,xhttp.readyState,4))
{return cljs.core.async.put_BANG_.call(null,channel,xhttp.responseXML);
} else
{return null;
}
});
xhttp.send(null);
return channel;
});
get_LT__BANG_ = function(xhttp,url,channel){
switch(arguments.length){
case 1:
return get_LT__BANG___1.call(this,xhttp);
case 3:
return get_LT__BANG___3.call(this,xhttp,url,channel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_LT__BANG_.cljs$core$IFn$_invoke$arity$1 = get_LT__BANG___1;
get_LT__BANG_.cljs$core$IFn$_invoke$arity$3 = get_LT__BANG___3;
return get_LT__BANG_;
})()
;

//# sourceMappingURL=core.js.map