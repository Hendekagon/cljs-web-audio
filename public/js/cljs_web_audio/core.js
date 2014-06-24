// Compiled by ClojureScript 0.0-2173
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
}catch (e27849){if((e27849 instanceof Error))
{var e = e27849;return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27849;
} else
{return null;
}
}
}})();
cljs_web_audio.core.pi2 = (2 * Math.PI);
/**
* Returns a channel which logs messages it reads from
*/
cljs_web_audio.core.log_LT__BANG_G = (function log_LT__BANG_G(channel){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_27890){var state_val_27891 = (state_27890[1]);if((state_val_27891 === 7))
{var inst_27881 = (state_27890[2]);var inst_27882 = console.log(inst_27881);var state_27890__$1 = (function (){var statearr_27892 = state_27890;(statearr_27892[7] = inst_27882);
return statearr_27892;
})();var statearr_27893_27906 = state_27890__$1;(statearr_27893_27906[2] = null);
(statearr_27893_27906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27891 === 6))
{var inst_27886 = (state_27890[2]);var state_27890__$1 = state_27890;var statearr_27894_27907 = state_27890__$1;(statearr_27894_27907[2] = inst_27886);
(statearr_27894_27907[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27891 === 5))
{var state_27890__$1 = state_27890;var statearr_27895_27908 = state_27890__$1;(statearr_27895_27908[2] = null);
(statearr_27895_27908[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27891 === 4))
{var state_27890__$1 = state_27890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27890__$1,7,channel);
} else
{if((state_val_27891 === 3))
{var inst_27888 = (state_27890[2]);var state_27890__$1 = state_27890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27890__$1,inst_27888);
} else
{if((state_val_27891 === 2))
{var state_27890__$1 = state_27890;if(true)
{var statearr_27896_27909 = state_27890__$1;(statearr_27896_27909[1] = 4);
} else
{var statearr_27897_27910 = state_27890__$1;(statearr_27897_27910[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27891 === 1))
{var state_27890__$1 = state_27890;var statearr_27898_27911 = state_27890__$1;(statearr_27898_27911[2] = null);
(statearr_27898_27911[1] = 2);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_27902 = [null,null,null,null,null,null,null,null];(statearr_27902[0] = state_machine__5509__auto__);
(statearr_27902[1] = 1);
return statearr_27902;
});
var state_machine__5509__auto____1 = (function (state_27890){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_27890);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e27903){if((e27903 instanceof Object))
{var ex__5512__auto__ = e27903;var statearr_27904_27912 = state_27890;(statearr_27904_27912[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27890);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27903;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27913 = state_27890;
state_27890 = G__27913;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_27890){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_27890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_27905 = f__5524__auto__.call(null);(statearr_27905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_27905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
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
/**
* Sets the given buffer with the given function, the function taking
* value from 0-1 representing the position in the buffer being set
*/
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
cljs_web_audio.core.set_wavetable_BANG_ = (function set_wavetable_BANG_(osc,wavetable){return osc.setPeriodicWave(wavetable);
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
/**
* Returns an oscillator node
*/
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),osc], null);
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
var values_over_time__1 = (function (p__27914){var map__27916 = p__27914;var map__27916__$1 = ((cljs.core.seq_QMARK_.call(null,map__27916))?cljs.core.apply.call(null,cljs.core.hash_map,map__27916):map__27916);var coll = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"coll","coll",1016963678));var context = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"context","context",1965435169));var param = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"param","param",1120340991));var duration = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"duration","duration",3316859142));return values_over_time.call(null,coll,cljs_web_audio.core.current_time.call(null,context),duration,param);
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
cljs_web_audio.core.p_LT__BANG_G = (function p_LT__BANG_G(channel,context,param){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_27968){var state_val_27969 = (state_27968[1]);if((state_val_27969 === 8))
{var inst_27957 = (state_27968[2]);var inst_27958 = cljs_web_audio.core.current_time.call(null,context);var inst_27959 = (0.064 + inst_27958);var inst_27960 = cljs_web_audio.core.linear_to.call(null,param,inst_27957,inst_27959);var state_27968__$1 = (function (){var statearr_27970 = state_27968;(statearr_27970[7] = inst_27960);
return statearr_27970;
})();var statearr_27971_27985 = state_27968__$1;(statearr_27971_27985[2] = null);
(statearr_27971_27985[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27969 === 7))
{var inst_27955 = (state_27968[2]);var state_27968__$1 = (function (){var statearr_27972 = state_27968;(statearr_27972[8] = inst_27955);
return statearr_27972;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27968__$1,8,channel);
} else
{if((state_val_27969 === 6))
{var inst_27964 = (state_27968[2]);var state_27968__$1 = state_27968;var statearr_27973_27986 = state_27968__$1;(statearr_27973_27986[2] = inst_27964);
(statearr_27973_27986[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27969 === 5))
{var state_27968__$1 = state_27968;var statearr_27974_27987 = state_27968__$1;(statearr_27974_27987[2] = null);
(statearr_27974_27987[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27969 === 4))
{var inst_27953 = cljs.core.async.timeout.call(null,64);var state_27968__$1 = state_27968;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27968__$1,7,inst_27953);
} else
{if((state_val_27969 === 3))
{var inst_27966 = (state_27968[2]);var state_27968__$1 = state_27968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27968__$1,inst_27966);
} else
{if((state_val_27969 === 2))
{var state_27968__$1 = state_27968;if(true)
{var statearr_27975_27988 = state_27968__$1;(statearr_27975_27988[1] = 4);
} else
{var statearr_27976_27989 = state_27968__$1;(statearr_27976_27989[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27969 === 1))
{var state_27968__$1 = state_27968;var statearr_27977_27990 = state_27968__$1;(statearr_27977_27990[2] = null);
(statearr_27977_27990[1] = 2);
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
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_27981 = [null,null,null,null,null,null,null,null,null];(statearr_27981[0] = state_machine__5509__auto__);
(statearr_27981[1] = 1);
return statearr_27981;
});
var state_machine__5509__auto____1 = (function (state_27968){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_27968);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e27982){if((e27982 instanceof Object))
{var ex__5512__auto__ = e27982;var statearr_27983_27991 = state_27968;(statearr_27983_27991[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27968);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27992 = state_27968;
state_27968 = G__27992;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_27968){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_27968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_27984 = f__5524__auto__.call(null);(statearr_27984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_27984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
cljs_web_audio.core.fvt = (function() {
var fvt = null;
var fvt__2 = (function (params,p__27993){var vec__27997 = p__27993;var times = cljs.core.nth.call(null,vec__27997,0,null);var values = cljs.core.nthnext.call(null,vec__27997,1);return cljs.core.map.call(null,cljs_web_audio.core.exp_to,params,values,cljs.core.map.call(null,cljs.core._PLUS_,times,cljs.core.repeat.call(null,cljs_web_audio.core.current_time)));
});
var fvt__4 = (function (fp,gp,context,p__27994){var vec__27998 = p__27994;var f = cljs.core.nth.call(null,vec__27998,0,null);var v = cljs.core.nth.call(null,vec__27998,1,null);var t = cljs.core.nth.call(null,vec__27998,2,null);cljs_web_audio.core.set_value_at_time.call(null,fp,f,(t + cljs_web_audio.core.current_time.call(null,context)));
return cljs_web_audio.core.set_value_at_time.call(null,gp,v,(t + cljs_web_audio.core.current_time.call(null,context)));
});
fvt = function(fp,gp,context,p__27994){
switch(arguments.length){
case 2:
return fvt__2.call(this,fp,gp);
case 4:
return fvt__4.call(this,fp,gp,context,p__27994);
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
cljs_web_audio.core.pm_LT__BANG_G = (function pm_LT__BANG_G(channel,params){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_28039){var state_val_28040 = (state_28039[1]);if((state_val_28040 === 7))
{var inst_28030 = (state_28039[2]);var inst_28031 = cljs_web_audio.core.fvt.call(null,params,inst_28030);var state_28039__$1 = (function (){var statearr_28041 = state_28039;(statearr_28041[7] = inst_28031);
return statearr_28041;
})();var statearr_28042_28055 = state_28039__$1;(statearr_28042_28055[2] = null);
(statearr_28042_28055[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28040 === 6))
{var inst_28035 = (state_28039[2]);var state_28039__$1 = state_28039;var statearr_28043_28056 = state_28039__$1;(statearr_28043_28056[2] = inst_28035);
(statearr_28043_28056[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28040 === 5))
{var state_28039__$1 = state_28039;var statearr_28044_28057 = state_28039__$1;(statearr_28044_28057[2] = null);
(statearr_28044_28057[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28040 === 4))
{var state_28039__$1 = state_28039;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28039__$1,7,channel);
} else
{if((state_val_28040 === 3))
{var inst_28037 = (state_28039[2]);var state_28039__$1 = state_28039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28039__$1,inst_28037);
} else
{if((state_val_28040 === 2))
{var state_28039__$1 = state_28039;if(true)
{var statearr_28045_28058 = state_28039__$1;(statearr_28045_28058[1] = 4);
} else
{var statearr_28046_28059 = state_28039__$1;(statearr_28046_28059[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28040 === 1))
{var state_28039__$1 = state_28039;var statearr_28047_28060 = state_28039__$1;(statearr_28047_28060[2] = null);
(statearr_28047_28060[1] = 2);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_28051 = [null,null,null,null,null,null,null,null];(statearr_28051[0] = state_machine__5509__auto__);
(statearr_28051[1] = 1);
return statearr_28051;
});
var state_machine__5509__auto____1 = (function (state_28039){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_28039);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e28052){if((e28052 instanceof Object))
{var ex__5512__auto__ = e28052;var statearr_28053_28061 = state_28039;(statearr_28053_28061[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28039);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28052;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28062 = state_28039;
state_28039 = G__28062;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_28039){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_28039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_28054 = f__5524__auto__.call(null);(statearr_28054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_28054;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
/**
* make the given channel control the given parameter
*/
cljs_web_audio.core.pmm_LT__BANG_G = (function pmm_LT__BANG_G(channel,context,fp,gp){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_28103){var state_val_28104 = (state_28103[1]);if((state_val_28104 === 7))
{var inst_28094 = (state_28103[2]);var inst_28095 = cljs_web_audio.core.fvt.call(null,fp,gp,context,inst_28094);var state_28103__$1 = (function (){var statearr_28105 = state_28103;(statearr_28105[7] = inst_28095);
return statearr_28105;
})();var statearr_28106_28119 = state_28103__$1;(statearr_28106_28119[2] = null);
(statearr_28106_28119[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28104 === 6))
{var inst_28099 = (state_28103[2]);var state_28103__$1 = state_28103;var statearr_28107_28120 = state_28103__$1;(statearr_28107_28120[2] = inst_28099);
(statearr_28107_28120[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28104 === 5))
{var state_28103__$1 = state_28103;var statearr_28108_28121 = state_28103__$1;(statearr_28108_28121[2] = null);
(statearr_28108_28121[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28104 === 4))
{var state_28103__$1 = state_28103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28103__$1,7,channel);
} else
{if((state_val_28104 === 3))
{var inst_28101 = (state_28103[2]);var state_28103__$1 = state_28103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28103__$1,inst_28101);
} else
{if((state_val_28104 === 2))
{var state_28103__$1 = state_28103;if(true)
{var statearr_28109_28122 = state_28103__$1;(statearr_28109_28122[1] = 4);
} else
{var statearr_28110_28123 = state_28103__$1;(statearr_28110_28123[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28104 === 1))
{var state_28103__$1 = state_28103;var statearr_28111_28124 = state_28103__$1;(statearr_28111_28124[2] = null);
(statearr_28111_28124[1] = 2);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_28115 = [null,null,null,null,null,null,null,null];(statearr_28115[0] = state_machine__5509__auto__);
(statearr_28115[1] = 1);
return statearr_28115;
});
var state_machine__5509__auto____1 = (function (state_28103){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_28103);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e28116){if((e28116 instanceof Object))
{var ex__5512__auto__ = e28116;var statearr_28117_28125 = state_28103;(statearr_28117_28125[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28103);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28126 = state_28103;
state_28103 = G__28126;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_28103){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_28103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_28118 = f__5524__auto__.call(null);(statearr_28118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_28118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"duration","duration",3316859142),new cljs.core.Keyword(null,"forever","forever",4631209177),new cljs.core.Keyword(null,"sounds","sounds",4412361910),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),oscillator,new cljs.core.Keyword(null,"channel","channel",1752854645),cljs_web_audio.core.p_LT__BANG_G.call(null,channel,context,oscillator.frequency)], null)], null)], null);
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"sounds","sounds",4412361910),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),oscillator,new cljs.core.Keyword(null,"gain","gain",1017069297),gain,new cljs.core.Keyword(null,"channel","channel",1752854645),cljs_web_audio.core.pmm_LT__BANG_G.call(null,channel,context,oscillator.frequency,gain.gain)], null)], null)], null);
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
* returns an oscillator whos frequency, volume & timing are controlled by the given channel
*/
cljs_web_audio.core.coll_osc = (function() {
var coll_osc = null;
var coll_osc__1 = (function (coll){return coll_osc.call(null,coll,cljs_web_audio.core.context.call(null));
});
var coll_osc__2 = (function (coll,context){return coll_osc.call(null,coll,context,cljs_web_audio.core.gain.call(null,context),cljs_web_audio.core.oscillator.call(null,context));
});
var coll_osc__4 = (function (coll,context,gain,oscillator){cljs_web_audio.core.connect_BANG_.call(null,gain,context.destination);
cljs_web_audio.core.connect_BANG_.call(null,oscillator,gain);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"sounds","sounds",4412361910),new cljs.core.PersistentArrayMap.fromArray([coll,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),oscillator,new cljs.core.Keyword(null,"gain","gain",1017069297),gain], null)], true, false)], null);
});
coll_osc = function(coll,context,gain,oscillator){
switch(arguments.length){
case 1:
return coll_osc__1.call(this,coll);
case 2:
return coll_osc__2.call(this,coll,context);
case 4:
return coll_osc__4.call(this,coll,context,gain,oscillator);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coll_osc.cljs$core$IFn$_invoke$arity$1 = coll_osc__1;
coll_osc.cljs$core$IFn$_invoke$arity$2 = coll_osc__2;
coll_osc.cljs$core$IFn$_invoke$arity$4 = coll_osc__4;
return coll_osc;
})()
;
/**
* combine a oscillations! map with an oscillator for the given channel
*/
cljs_web_audio.core.Yf_LT__BANG_G = (function Yf_LT__BANG_G(m,channel){return cljs.core.merge_with.call(null,cljs.core.concat,m,cljs.core.select_keys.call(null,cljs_web_audio.core.f_LT__BANG_G.call(null,channel,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(m)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sounds","sounds",4412361910)], null)));
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration","duration",3316859142),duration,new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"sounds","sounds",4412361910),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gain","gain",1017069297),gain,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),osc], null)], null)], null);
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
* combine a oscillations! map with an oscillator for the given channel
*/
cljs_web_audio.core.osc_PLUS_ = (function osc_PLUS_(m1,coll,dur){return cljs.core.merge_with.call(null,cljs.core.concat,m1,cljs.core.select_keys.call(null,cljs_web_audio.core.oscillations_BANG_.call(null,coll,dur,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(m1)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sounds","sounds",4412361910)], null)));
});
cljs_web_audio.core.fill = (function fill(x){if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.concat.call(null,x,cljs.core.take.call(null,(3 - cljs.core.count.call(null,x)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [440,0.1,1], null)));
} else
{return cljs.core.cons.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,1], null));
}
});
/**
* returns oscillators taking values asynchronously from the given channels
*/
cljs_web_audio.core.red_LT_f_BANG_G = (function() {
var red_LT_f_BANG_G = null;
var red_LT_f_BANG_G__1 = (function (channels){return cljs.core.reduce.call(null,(function (r,channel){return cljs.core.merge_with.call(null,cljs.core.concat,r,cljs.core.select_keys.call(null,red_LT_f_BANG_G.call(null,channel,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sounds","sounds",4412361910)], null)));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",1965435169),cljs_web_audio.core.context.call(null),new cljs.core.Keyword(null,"duration","duration",3316859142),new cljs.core.Keyword(null,"forever","forever",4631209177)], null),channels);
});
var red_LT_f_BANG_G__2 = (function (channel,context){return cljs_web_audio.core.f_LT__BANG_G.call(null,channel,context);
});
red_LT_f_BANG_G = function(channel,context){
switch(arguments.length){
case 1:
return red_LT_f_BANG_G__1.call(this,channel);
case 2:
return red_LT_f_BANG_G__2.call(this,channel,context);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
red_LT_f_BANG_G.cljs$core$IFn$_invoke$arity$1 = red_LT_f_BANG_G__1;
red_LT_f_BANG_G.cljs$core$IFn$_invoke$arity$2 = red_LT_f_BANG_G__2;
return red_LT_f_BANG_G;
})()
;
cljs_web_audio.core.redfreqs = (function() {
var redfreqs = null;
var redfreqs__2 = (function (colls,duration){return cljs.core.reduce.call(null,(function (r,coll){return cljs.core.merge_with.call(null,cljs.core.concat,r,cljs.core.select_keys.call(null,redfreqs.call(null,coll,duration,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sounds","sounds",4412361910)], null)));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",1965435169),cljs_web_audio.core.context.call(null),new cljs.core.Keyword(null,"duration","duration",3316859142),duration], null),colls);
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
/**
* Return oscillators for the given collections
*/
cljs_web_audio.core.redosc = (function() {
var redosc = null;
var redosc__1 = (function (colls){return cljs.core.reduce.call(null,(function (r,coll){return cljs.core.merge_with.call(null,cljs.core.concat,r,cljs.core.select_keys.call(null,redosc.call(null,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(r),cljs.core.cons.call(null,0,coll)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sounds","sounds",4412361910)], null)));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context","context",1965435169),cljs_web_audio.core.context.call(null)], null),colls);
});
var redosc__2 = (function (context,coll){return redosc.call(null,context,coll,cljs_web_audio.core.oscillator.call(null,context,cljs_web_audio.core.create_wavetable.call(null,context,cljs_web_audio.core.to_float32array.call(null,coll))),cljs_web_audio.core.gain.call(null,context));
});
var redosc__4 = (function (context,coll,osc,gain){cljs_web_audio.core.connect_BANG_.call(null,osc,gain);
cljs_web_audio.core.connect_BANG_.call(null,gain,context.destination);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"sounds","sounds",4412361910),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gain","gain",1017069297),gain,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),osc], null)], null)], null);
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
/**
* Start playing the sounds in the sound map thing given
* ...only handles oscillators atm
* 
*/
cljs_web_audio.core.play_BANG_ = (function play_BANG_(p__28127){var map__28129 = p__28127;var map__28129__$1 = ((cljs.core.seq_QMARK_.call(null,map__28129))?cljs.core.apply.call(null,cljs.core.hash_map,map__28129):map__28129);var context = cljs.core.get.call(null,map__28129__$1,new cljs.core.Keyword(null,"context","context",1965435169));var sounds = cljs.core.get.call(null,map__28129__$1,new cljs.core.Keyword(null,"sounds","sounds",4412361910));var duration = cljs.core.get.call(null,map__28129__$1,new cljs.core.Keyword(null,"duration","duration",3316859142));console.log(duration);
cljs.core.doall.call(null,cljs.core.map.call(null,cljs_web_audio.core.note_on_BANG_,cljs.core.map.call(null,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),sounds)));
if(typeof duration === 'number')
{return cljs.core.doall.call(null,cljs.core.map.call(null,(function (o){return cljs_web_audio.core.note_off_BANG_.call(null,o,(duration + 1));
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),sounds)));
} else
{return null;
}
});
/**
* Returns a channel of events of the given :type
*/
cljs_web_audio.core.events_channel_BANG_ = (function() {
var events_channel_BANG_ = null;
var events_channel_BANG___1 = (function (type){return events_channel_BANG_.call(null,type,cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,64)));
});
var events_channel_BANG___2 = (function (type,channel){window.addEventListener(cljs.core.name.call(null,type),(function (e){return cljs.core.async.put_BANG_.call(null,channel,e);
}));
return channel;
});
events_channel_BANG_ = function(type,channel){
switch(arguments.length){
case 1:
return events_channel_BANG___1.call(this,type);
case 2:
return events_channel_BANG___2.call(this,type,channel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
events_channel_BANG_.cljs$core$IFn$_invoke$arity$1 = events_channel_BANG___1;
events_channel_BANG_.cljs$core$IFn$_invoke$arity$2 = events_channel_BANG___2;
return events_channel_BANG_;
})()
;
cljs_web_audio.core.mouse_events_channel_BANG_ = (function mouse_events_channel_BANG_(){return cljs_web_audio.core.events_channel_BANG_.call(null,new cljs.core.Keyword(null,"mousemove","mousemove",1601016168));
});
cljs_web_audio.core.mouse_position_channel_BANG_ = (function() {
var mouse_position_channel_BANG_ = null;
var mouse_position_channel_BANG___0 = (function (){return mouse_position_channel_BANG_.call(null,cljs_web_audio.core.mouse_events_channel_BANG_.call(null));
});
var mouse_position_channel_BANG___1 = (function (channel){return mouse_position_channel_BANG_.call(null,channel,(window.screen.width - window.screenX),(window.screen.height - window.screenY));
});
var mouse_position_channel_BANG___3 = (function (channel,w,h){return cljs.core.async.map_LT_.call(null,(function (e){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),(e.x / w),new cljs.core.Keyword(null,"y","y",1013904363),(e.y / h),new cljs.core.Keyword(null,"shift","shift",1123311604),e.shiftKey], null);
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
cljs_web_audio.core.device_motion_channel_BANG_ = (function device_motion_channel_BANG_(){return cljs.core.async.map_LT_.call(null,(function (e){return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"agz","agz",1014000774),new cljs.core.Keyword(null,"rx","rx",1013907896),new cljs.core.Keyword(null,"dt","dt",1013907458),new cljs.core.Keyword(null,"ry","ry",1013907897),new cljs.core.Keyword(null,"agy","agy",1014000773),new cljs.core.Keyword(null,"agx","agx",1014000772),new cljs.core.Keyword(null,"ax","ax",1013907369),new cljs.core.Keyword(null,"az","az",1013907371),new cljs.core.Keyword(null,"ay","ay",1013907370),new cljs.core.Keyword(null,"rz","rz",1013907898)],[e.accelerationIncludingGravity.z,e.rotationRate.alpha,e.interval,e.rotationRate.beta,e.accelerationIncludingGravity.y,e.accelerationIncludingGravity.x,e.acceleration.x,e.acceleration.z,e.acceleration.y,e.rotationRate.gamma]);
}),cljs_web_audio.core.events_channel_BANG_.call(null,new cljs.core.Keyword(null,"devicemotion","devicemotion",825637118)));
});
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
}),f,coll,30);
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
cljs_web_audio.core.oo = (function() {
var oo = null;
var oo__1 = (function (playing){console.log("play:",[cljs.core.str(playing)].join(''));
return oo.call(null,playing,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(playing),cljs.core.keys.call(null,new cljs.core.Keyword(null,"sounds","sounds",4412361910).cljs$core$IFn$_invoke$arity$1(playing)),cljs.core.map.call(null,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),cljs.core.vals.call(null,new cljs.core.Keyword(null,"sounds","sounds",4412361910).cljs$core$IFn$_invoke$arity$1(playing))),cljs.core.map.call(null,new cljs.core.Keyword(null,"gain","gain",1017069297),cljs.core.vals.call(null,new cljs.core.Keyword(null,"sounds","sounds",4412361910).cljs$core$IFn$_invoke$arity$1(playing))));
});
var oo__5 = (function (playing,context,colls,oscs,gains){console.log("starting...");
cljs_web_audio.core.G.call(null,(function (colls__$1){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (coll,osc,gain){console.log(coll,osc,gain);
return cljs_web_audio.core.fvt.call(null,osc.frequency,gain.gain,context,cljs.core.first.call(null,coll));
}),colls__$1,oscs,gains));
}),cljs_web_audio.core.P.call(null,cljs.core.map,cljs.core.rest),colls,500);
return playing;
});
oo = function(playing,context,colls,oscs,gains){
switch(arguments.length){
case 1:
return oo__1.call(this,playing);
case 5:
return oo__5.call(this,playing,context,colls,oscs,gains);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
oo.cljs$core$IFn$_invoke$arity$1 = oo__1;
oo.cljs$core$IFn$_invoke$arity$5 = oo__5;
return oo;
})()
;
/**
* frequency volume times - control f,v,t from given collections independently
*/
cljs_web_audio.core.fvts = (function fvts(colls){return cljs.core.reduce.call(null,(function (r,coll){return cljs.core.merge_with.call(null,cljs.core.concat,r,cljs.core.select_keys.call(null,cljs_web_audio.core.pp_LT__BANG_G.call(null,cljs_web_audio.core.o.call(null,coll),new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sounds","sounds",4412361910)], null)));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",1965435169),cljs_web_audio.core.context.call(null),new cljs.core.Keyword(null,"duration","duration",3316859142),new cljs.core.Keyword(null,"forever","forever",4631209177)], null),colls);
});
/**
* Control the frequencies of a bunch of oscillators from the values of the given collections
*/
cljs_web_audio.core.chorus = (function chorus(colls){console.log("making ",cljs.core.count.call(null,colls));
return cljs.core.reduce.call(null,(function (r,coll){console.log(" make one");
return cljs.core.update_in.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sounds","sounds",4412361910)], null),cljs_web_audio.core.P.call(null,cljs.core.merge,new cljs.core.Keyword(null,"sounds","sounds",4412361910).cljs$core$IFn$_invoke$arity$1(cljs_web_audio.core.coll_osc.call(null,coll,new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(r)))));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",1965435169),cljs_web_audio.core.context.call(null),new cljs.core.Keyword(null,"duration","duration",3316859142),new cljs.core.Keyword(null,"forever","forever",4631209177)], null),colls);
});
/**
* returns a partial function with first param controlled by a channel
*/
cljs_web_audio.core.pc = (function() {
var pc = null;
var pc__4 = (function (f,g,c,iv){return pc.call(null,f,g,c,cljs.core.atom.call(null,iv),iv);
});
var pc__5 = (function (f,g,c,va,iv){var c__5523__auto___28186 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_28170){var state_val_28171 = (state_28170[1]);if((state_val_28171 === 7))
{var inst_28161 = (state_28170[2]);var inst_28162 = cljs.core.reset_BANG_.call(null,va,inst_28161);var state_28170__$1 = (function (){var statearr_28172 = state_28170;(statearr_28172[7] = inst_28162);
return statearr_28172;
})();var statearr_28173_28187 = state_28170__$1;(statearr_28173_28187[2] = null);
(statearr_28173_28187[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 6))
{var inst_28166 = (state_28170[2]);var state_28170__$1 = state_28170;var statearr_28174_28188 = state_28170__$1;(statearr_28174_28188[2] = inst_28166);
(statearr_28174_28188[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 5))
{var state_28170__$1 = state_28170;var statearr_28175_28189 = state_28170__$1;(statearr_28175_28189[2] = null);
(statearr_28175_28189[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 4))
{var state_28170__$1 = state_28170;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28170__$1,7,c);
} else
{if((state_val_28171 === 3))
{var inst_28168 = (state_28170[2]);var state_28170__$1 = state_28170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28170__$1,inst_28168);
} else
{if((state_val_28171 === 2))
{var state_28170__$1 = state_28170;if(true)
{var statearr_28176_28190 = state_28170__$1;(statearr_28176_28190[1] = 4);
} else
{var statearr_28177_28191 = state_28170__$1;(statearr_28177_28191[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 1))
{var state_28170__$1 = state_28170;var statearr_28178_28192 = state_28170__$1;(statearr_28178_28192[2] = null);
(statearr_28178_28192[1] = 2);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_28182 = [null,null,null,null,null,null,null,null];(statearr_28182[0] = state_machine__5509__auto__);
(statearr_28182[1] = 1);
return statearr_28182;
});
var state_machine__5509__auto____1 = (function (state_28170){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_28170);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e28183){if((e28183 instanceof Object))
{var ex__5512__auto__ = e28183;var statearr_28184_28193 = state_28170;(statearr_28184_28193[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28170);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28183;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28194 = state_28170;
state_28170 = G__28194;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_28170){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_28170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_28185 = f__5524__auto__.call(null);(statearr_28185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___28186);
return statearr_28185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
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
/**
* Set the element of the given array at the position given by :x (a real from 0-1) to :y
*/
cljs_web_audio.core.aset01_BANG_ = (function aset01_BANG_(array,p__28195){var map__28197 = p__28195;var map__28197__$1 = ((cljs.core.seq_QMARK_.call(null,map__28197))?cljs.core.apply.call(null,cljs.core.hash_map,map__28197):map__28197);var x = cljs.core.get.call(null,map__28197__$1,new cljs.core.Keyword(null,"x","x",1013904362));var y = cljs.core.get.call(null,map__28197__$1,new cljs.core.Keyword(null,"y","y",1013904363));return (array[(((x * (array.length - 1)) | 0) + 1)] = y);
});
/**
* Set all elements of the given array from the given collection
*/
cljs_web_audio.core.asetall_BANG_ = (function asetall_BANG_(array,coll){return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,x){return (array[i] = x);
}),coll));
});
/**
* The process of setting the given array with values taken from the given channel
*/
cljs_web_audio.core.asetting_BANG_ = (function asetting_BANG_(array,channel){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_28238){var state_val_28239 = (state_28238[1]);if((state_val_28239 === 7))
{var inst_28229 = (state_28238[2]);var inst_28230 = cljs_web_audio.core.asetall_BANG_.call(null,array,inst_28229);var state_28238__$1 = (function (){var statearr_28240 = state_28238;(statearr_28240[7] = inst_28230);
return statearr_28240;
})();var statearr_28241_28254 = state_28238__$1;(statearr_28241_28254[2] = null);
(statearr_28241_28254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28239 === 6))
{var inst_28234 = (state_28238[2]);var state_28238__$1 = state_28238;var statearr_28242_28255 = state_28238__$1;(statearr_28242_28255[2] = inst_28234);
(statearr_28242_28255[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28239 === 5))
{var state_28238__$1 = state_28238;var statearr_28243_28256 = state_28238__$1;(statearr_28243_28256[2] = null);
(statearr_28243_28256[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28239 === 4))
{var state_28238__$1 = state_28238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28238__$1,7,channel);
} else
{if((state_val_28239 === 3))
{var inst_28236 = (state_28238[2]);var state_28238__$1 = state_28238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28238__$1,inst_28236);
} else
{if((state_val_28239 === 2))
{var state_28238__$1 = state_28238;if(true)
{var statearr_28244_28257 = state_28238__$1;(statearr_28244_28257[1] = 4);
} else
{var statearr_28245_28258 = state_28238__$1;(statearr_28245_28258[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28239 === 1))
{var state_28238__$1 = state_28238;var statearr_28246_28259 = state_28238__$1;(statearr_28246_28259[2] = null);
(statearr_28246_28259[1] = 2);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_28250 = [null,null,null,null,null,null,null,null];(statearr_28250[0] = state_machine__5509__auto__);
(statearr_28250[1] = 1);
return statearr_28250;
});
var state_machine__5509__auto____1 = (function (state_28238){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_28238);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e28251){if((e28251 instanceof Object))
{var ex__5512__auto__ = e28251;var statearr_28252_28260 = state_28238;(statearr_28252_28260[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28238);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28261 = state_28238;
state_28238 = G__28261;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_28238){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_28238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_28253 = f__5524__auto__.call(null);(statearr_28253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_28253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
cljs_web_audio.core.update_wavetable_BANG_ = (function update_wavetable_BANG_(osc,r,i,m){return cljs_web_audio.core.set_wavetable_BANG_.call(null,osc,cljs_web_audio.core.create_wavetable.call(null,cljs_web_audio.core.context.call(null,osc),r,i));
});
/**
* mutates the given array from the given channel's messages which are {:x [0-1 postion] :y value}
*/
cljs_web_audio.core.T_BANG_ = (function T_BANG_(array,channel){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_28302){var state_val_28303 = (state_28302[1]);if((state_val_28303 === 7))
{var inst_28293 = (state_28302[2]);var inst_28294 = cljs_web_audio.core.aset01_BANG_.call(null,array,inst_28293);var state_28302__$1 = (function (){var statearr_28304 = state_28302;(statearr_28304[7] = inst_28294);
return statearr_28304;
})();var statearr_28305_28318 = state_28302__$1;(statearr_28305_28318[2] = null);
(statearr_28305_28318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28303 === 6))
{var inst_28298 = (state_28302[2]);var state_28302__$1 = state_28302;var statearr_28306_28319 = state_28302__$1;(statearr_28306_28319[2] = inst_28298);
(statearr_28306_28319[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28303 === 5))
{var state_28302__$1 = state_28302;var statearr_28307_28320 = state_28302__$1;(statearr_28307_28320[2] = null);
(statearr_28307_28320[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28303 === 4))
{var state_28302__$1 = state_28302;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28302__$1,7,channel);
} else
{if((state_val_28303 === 3))
{var inst_28300 = (state_28302[2]);var state_28302__$1 = state_28302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28302__$1,inst_28300);
} else
{if((state_val_28303 === 2))
{var state_28302__$1 = state_28302;if(true)
{var statearr_28308_28321 = state_28302__$1;(statearr_28308_28321[1] = 4);
} else
{var statearr_28309_28322 = state_28302__$1;(statearr_28309_28322[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28303 === 1))
{var state_28302__$1 = state_28302;var statearr_28310_28323 = state_28302__$1;(statearr_28310_28323[2] = null);
(statearr_28310_28323[1] = 2);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_28314 = [null,null,null,null,null,null,null,null];(statearr_28314[0] = state_machine__5509__auto__);
(statearr_28314[1] = 1);
return statearr_28314;
});
var state_machine__5509__auto____1 = (function (state_28302){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_28302);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e28315){if((e28315 instanceof Object))
{var ex__5512__auto__ = e28315;var statearr_28316_28324 = state_28302;(statearr_28316_28324[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28302);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28315;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28325 = state_28302;
state_28302 = G__28325;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_28302){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_28302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_28317 = f__5524__auto__.call(null);(statearr_28317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_28317;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
/**
* mutates the given array from the given channel's messages which are {:x [0-1 postion] :y value}
*/
cljs_web_audio.core.GP_LT__BANG_ = (function GP_LT__BANG_(f,channel){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_28366){var state_val_28367 = (state_28366[1]);if((state_val_28367 === 7))
{var inst_28357 = (state_28366[2]);var inst_28358 = f.call(null,inst_28357);var state_28366__$1 = (function (){var statearr_28368 = state_28366;(statearr_28368[7] = inst_28358);
return statearr_28368;
})();var statearr_28369_28382 = state_28366__$1;(statearr_28369_28382[2] = null);
(statearr_28369_28382[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28367 === 6))
{var inst_28362 = (state_28366[2]);var state_28366__$1 = state_28366;var statearr_28370_28383 = state_28366__$1;(statearr_28370_28383[2] = inst_28362);
(statearr_28370_28383[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28367 === 5))
{var state_28366__$1 = state_28366;var statearr_28371_28384 = state_28366__$1;(statearr_28371_28384[2] = null);
(statearr_28371_28384[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28367 === 4))
{var state_28366__$1 = state_28366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28366__$1,7,channel);
} else
{if((state_val_28367 === 3))
{var inst_28364 = (state_28366[2]);var state_28366__$1 = state_28366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28366__$1,inst_28364);
} else
{if((state_val_28367 === 2))
{var state_28366__$1 = state_28366;if(true)
{var statearr_28372_28385 = state_28366__$1;(statearr_28372_28385[1] = 4);
} else
{var statearr_28373_28386 = state_28366__$1;(statearr_28373_28386[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28367 === 1))
{var state_28366__$1 = state_28366;var statearr_28374_28387 = state_28366__$1;(statearr_28374_28387[2] = null);
(statearr_28374_28387[1] = 2);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_28378 = [null,null,null,null,null,null,null,null];(statearr_28378[0] = state_machine__5509__auto__);
(statearr_28378[1] = 1);
return statearr_28378;
});
var state_machine__5509__auto____1 = (function (state_28366){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_28366);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e28379){if((e28379 instanceof Object))
{var ex__5512__auto__ = e28379;var statearr_28380_28388 = state_28366;(statearr_28380_28388[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28366);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28379;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28389 = state_28366;
state_28366 = G__28389;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_28366){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_28366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_28381 = f__5524__auto__.call(null);(statearr_28381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_28381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
/**
* returns a channel reading from a websocket
*/
cljs_web_audio.core.ws_LT__BANG_ = (function() {
var ws_LT__BANG_ = null;
var ws_LT__BANG___1 = (function (url){return ws_LT__BANG_.call(null,(new WebSocket(url)),url,cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,16)));
});
var ws_LT__BANG___3 = (function (ws,url,channel){ws.onmessage = (function (message){return cljs.core.async.put_BANG_.call(null,channel,cljs.core.js__GT_clj.call(null,JSON.parse(message.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
});
ws.onopen = (function (){return ws.send(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hello","hello",1113066564),new cljs.core.Keyword(null,"hi","hi",1013907571)], null));
});
ws.onclose = (function (){return cljs.core.async.close_BANG_.call(null,channel);
});
return channel;
});
ws_LT__BANG_ = function(ws,url,channel){
switch(arguments.length){
case 1:
return ws_LT__BANG___1.call(this,ws);
case 3:
return ws_LT__BANG___3.call(this,ws,url,channel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ws_LT__BANG_.cljs$core$IFn$_invoke$arity$1 = ws_LT__BANG___1;
ws_LT__BANG_.cljs$core$IFn$_invoke$arity$3 = ws_LT__BANG___3;
return ws_LT__BANG_;
})()
;

//# sourceMappingURL=core.js.map