goog.provide('cljs_web_audio.core');
goog.require('cljs.core');
goog.require('cljs_web_audio.timing');
goog.require('cljs_web_audio.timing');
cljs_web_audio.core.pi2 = (2 * Math.PI);
/**
* @param {...*} var_args
*/
cljs_web_audio.core.log = (function() { 
var log__delegate = function (m){return console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",m)));
};
var log = function (var_args){
var m = null;if (arguments.length > 0) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,m);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__4702){
var m = cljs.core.seq(arglist__4702);
return log__delegate(m);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Do the function f at regular intervals and send the results to g, starting with x
*/
cljs_web_audio.core.repeat_BANG_ = (function() {
var repeat_BANG_ = null;
var repeat_BANG___3 = (function (f,x,n){return window.setTimeout((function (x__$1){return repeat_BANG_.call(null,f,f.call(null,x__$1),n);
}),n,x);
});
var repeat_BANG___4 = (function (g,f,x,n){return window.setTimeout((function (x__$1){g.call(null,x__$1);
return repeat_BANG_.call(null,g,f,f.call(null,x__$1),n);
}),n,x);
});
repeat_BANG_ = function(g,f,x,n){
switch(arguments.length){
case 3:
return repeat_BANG___3.call(this,g,f,x);
case 4:
return repeat_BANG___4.call(this,g,f,x,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat_BANG_.cljs$core$IFn$_invoke$arity$3 = repeat_BANG___3;
repeat_BANG_.cljs$core$IFn$_invoke$arity$4 = repeat_BANG___4;
return repeat_BANG_;
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
var oscillator__1 = (function (context){return context.createOscillator();
});
var oscillator__2 = (function (context,wavetable){return oscillator.call(null,context,oscillator.call(null,context),wavetable);
});
var oscillator__3 = (function (context,oscillator__$1,wavetable){oscillator__$1.setWaveTable(wavetable);
return oscillator__$1;
});
oscillator = function(context,oscillator__$1,wavetable){
switch(arguments.length){
case 1:
return oscillator__1.call(this,context);
case 2:
return oscillator__2.call(this,context,oscillator__$1);
case 3:
return oscillator__3.call(this,context,oscillator__$1,wavetable);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
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
cljs_web_audio.core.values_over_time_BANG_ = (function() {
var values_over_time_BANG_ = null;
var values_over_time_BANG___1 = (function (p__4703){var map__4705 = p__4703;var map__4705__$1 = ((cljs.core.seq_QMARK_.call(null,map__4705))?cljs.core.apply.call(null,cljs.core.hash_map,map__4705):map__4705);var coll = cljs.core.get.call(null,map__4705__$1,new cljs.core.Keyword(null,"coll","coll",1016963678));var context = cljs.core.get.call(null,map__4705__$1,new cljs.core.Keyword(null,"context","context",1965435169));var param = cljs.core.get.call(null,map__4705__$1,new cljs.core.Keyword(null,"param","param",1120340991));var duration = cljs.core.get.call(null,map__4705__$1,new cljs.core.Keyword(null,"duration","duration",3316859142));return values_over_time_BANG_.call(null,coll,cljs_web_audio.core.current_time.call(null,context),duration,param);
});
var values_over_time_BANG___4 = (function (coll,start,duration,param){return values_over_time_BANG_.call(null,coll,start,duration,param,cljs.core.range.call(null,start,(duration + start),(duration / cljs.core.count.call(null,coll))));
});
var values_over_time_BANG___5 = (function (coll,start,duration,param,timings){return cljs.core.map.call(null,(function (x,t){return param.setValueAtTime(x,t);
}),coll,timings);
});
values_over_time_BANG_ = function(coll,start,duration,param,timings){
switch(arguments.length){
case 1:
return values_over_time_BANG___1.call(this,coll);
case 4:
return values_over_time_BANG___4.call(this,coll,start,duration,param);
case 5:
return values_over_time_BANG___5.call(this,coll,start,duration,param,timings);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
values_over_time_BANG_.cljs$core$IFn$_invoke$arity$1 = values_over_time_BANG___1;
values_over_time_BANG_.cljs$core$IFn$_invoke$arity$4 = values_over_time_BANG___4;
values_over_time_BANG_.cljs$core$IFn$_invoke$arity$5 = values_over_time_BANG___5;
return values_over_time_BANG_;
})()
;
cljs_web_audio.core.playing = (function() {
var playing = null;
var playing__1 = (function (coll){return playing.call(null,coll,1);
});
var playing__2 = (function (coll,duration){return playing.call(null,coll,duration,cljs_web_audio.core.context.call(null));
});
var playing__3 = (function (coll,duration,context){return playing.call(null,coll,cljs_web_audio.core.current_time.call(null,context),duration,context);
});
var playing__4 = (function (coll,start,duration,context){return playing.call(null,coll,start,duration,cljs_web_audio.core.oscillator.call(null,context),cljs_web_audio.core.gain.call(null,context),context,cljs_web_audio.timing.relative_to_absolute.call(null,start,duration,cljs.core.map.call(null,cljs.core.last,coll)));
});
var playing__7 = (function (coll,start,duration,osc,gain,context,timings){cljs_web_audio.core.connect_BANG_.call(null,osc,gain);
cljs_web_audio.core.connect_BANG_.call(null,gain,context.destination);
cljs.core.doall.call(null,cljs_web_audio.core.values_over_time_BANG_.call(null,cljs.core.map.call(null,cljs.core.first,coll),start,duration,osc.frequency,timings));
cljs.core.doall.call(null,cljs_web_audio.core.values_over_time_BANG_.call(null,cljs.core.map.call(null,cljs.core.second,coll),start,duration,gain.gain,timings));
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"duration","duration",3316859142),duration,new cljs.core.Keyword(null,"context","context",1965435169),context,new cljs.core.Keyword(null,"sounds","sounds",4412361910),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"gain","gain",1017069297),gain,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),osc], true)], true)], true);
});
playing = function(coll,start,duration,osc,gain,context,timings){
switch(arguments.length){
case 1:
return playing__1.call(this,coll);
case 2:
return playing__2.call(this,coll,start);
case 3:
return playing__3.call(this,coll,start,duration);
case 4:
return playing__4.call(this,coll,start,duration,osc);
case 7:
return playing__7.call(this,coll,start,duration,osc,gain,context,timings);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
playing.cljs$core$IFn$_invoke$arity$1 = playing__1;
playing.cljs$core$IFn$_invoke$arity$2 = playing__2;
playing.cljs$core$IFn$_invoke$arity$3 = playing__3;
playing.cljs$core$IFn$_invoke$arity$4 = playing__4;
playing.cljs$core$IFn$_invoke$arity$7 = playing__7;
return playing;
})()
;
cljs_web_audio.core.combine = (function combine(x,y){return cljs.core.merge_with.call(null,cljs.core.concat,x,cljs.core.select_keys.call(null,cljs_web_audio.core.playing.call(null,y,new cljs.core.Keyword(null,"duration","duration",3316859142).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(x)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"sounds","sounds",4412361910)], true)));
});
cljs_web_audio.core.play_BANG_ = (function play_BANG_(p__4706){var map__4708 = p__4706;var map__4708__$1 = ((cljs.core.seq_QMARK_.call(null,map__4708))?cljs.core.apply.call(null,cljs.core.hash_map,map__4708):map__4708);var context = cljs.core.get.call(null,map__4708__$1,new cljs.core.Keyword(null,"context","context",1965435169));var sounds = cljs.core.get.call(null,map__4708__$1,new cljs.core.Keyword(null,"sounds","sounds",4412361910));var duration = cljs.core.get.call(null,map__4708__$1,new cljs.core.Keyword(null,"duration","duration",3316859142));return cljs.core.doall.call(null,cljs.core.map.call(null,cljs_web_audio.core.note_on_BANG_,cljs.core.map.call(null,new cljs.core.Keyword(null,"oscillator","oscillator",1609739282),sounds)));
});
cljs_web_audio.core.mousey_BANG_ = (function mousey_BANG_(f){return window.onmousemove = (function (e){return f.call(null,e);
});
});
cljs_web_audio.core.mousey_BANG_.call(null);

//@ sourceMappingURL=core.js.map