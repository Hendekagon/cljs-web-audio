// Compiled by ClojureScript 0.0-2030
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14140 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14140 = (function (f,fn_handler,meta14141){
this.f = f;
this.fn_handler = fn_handler;
this.meta14141 = meta14141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14140.cljs$lang$type = true;
cljs.core.async.t14140.cljs$lang$ctorStr = "cljs.core.async/t14140";
cljs.core.async.t14140.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14140");
});
cljs.core.async.t14140.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14142){var self__ = this;
var _14142__$1 = this;return self__.meta14141;
});
cljs.core.async.t14140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14142,meta14141__$1){var self__ = this;
var _14142__$1 = this;return (new cljs.core.async.t14140(self__.f,self__.fn_handler,meta14141__$1));
});
cljs.core.async.__GT_t14140 = (function __GT_t14140(f__$1,fn_handler__$1,meta14141){return (new cljs.core.async.t14140(f__$1,fn_handler__$1,meta14141));
});
}
return (new cljs.core.async.t14140(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14144 = buff;if(G__14144)
{var bit__3742__auto__ = null;if(cljs.core.truth_((function (){var or__3123__auto__ = bit__3742__auto__;if(cljs.core.truth_(or__3123__auto__))
{return or__3123__auto__;
} else
{return G__14144.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14144.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14144);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14144);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_14145 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14145);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14145);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3114__auto__ = ret;if(cljs.core.truth_(and__3114__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3114__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3912__auto___14146 = n;var x_14147 = 0;while(true){
if((x_14147 < n__3912__auto___14146))
{(a[x_14147] = 0);
{
var G__14148 = (x_14147 + 1);
x_14147 = G__14148;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14149 = (i + 1);
i = G__14149;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14153 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14153 = (function (flag,alt_flag,meta14154){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14154 = meta14154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14153.cljs$lang$type = true;
cljs.core.async.t14153.cljs$lang$ctorStr = "cljs.core.async/t14153";
cljs.core.async.t14153.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14153");
});
cljs.core.async.t14153.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14153.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14153.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14155){var self__ = this;
var _14155__$1 = this;return self__.meta14154;
});
cljs.core.async.t14153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14155,meta14154__$1){var self__ = this;
var _14155__$1 = this;return (new cljs.core.async.t14153(self__.flag,self__.alt_flag,meta14154__$1));
});
cljs.core.async.__GT_t14153 = (function __GT_t14153(flag__$1,alt_flag__$1,meta14154){return (new cljs.core.async.t14153(flag__$1,alt_flag__$1,meta14154));
});
}
return (new cljs.core.async.t14153(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14159 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14159 = (function (cb,flag,alt_handler,meta14160){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14160 = meta14160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14159.cljs$lang$type = true;
cljs.core.async.t14159.cljs$lang$ctorStr = "cljs.core.async/t14159";
cljs.core.async.t14159.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14159");
});
cljs.core.async.t14159.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14161){var self__ = this;
var _14161__$1 = this;return self__.meta14160;
});
cljs.core.async.t14159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14161,meta14160__$1){var self__ = this;
var _14161__$1 = this;return (new cljs.core.async.t14159(self__.cb,self__.flag,self__.alt_handler,meta14160__$1));
});
cljs.core.async.__GT_t14159 = (function __GT_t14159(cb__$1,flag__$1,alt_handler__$1,meta14160){return (new cljs.core.async.t14159(cb__$1,flag__$1,alt_handler__$1,meta14160));
});
}
return (new cljs.core.async.t14159(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14162_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__14162_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__3123__auto__ = wport;if(cljs.core.truth_(or__3123__auto__))
{return or__3123__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__14163 = (i + 1);
i = G__14163;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3123__auto__ = ret;if(cljs.core.truth_(or__3123__auto__))
{return or__3123__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3114__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3114__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3114__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14164){var map__14166 = p__14164;var map__14166__$1 = ((cljs.core.seq_QMARK_.call(null,map__14166))?cljs.core.apply.call(null,cljs.core.hash_map,map__14166):map__14166);var opts = map__14166__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14164 = null;if (arguments.length > 1) {
  p__14164 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14164);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14167){
var ports = cljs.core.first(arglist__14167);
var p__14164 = cljs.core.rest(arglist__14167);
return alts_BANG___delegate(ports,p__14164);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14175 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14175 = (function (ch,f,map_LT_,meta14176){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14176 = meta14176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14175.cljs$lang$type = true;
cljs.core.async.t14175.cljs$lang$ctorStr = "cljs.core.async/t14175";
cljs.core.async.t14175.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14175");
});
cljs.core.async.t14175.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14175.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14175.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14175.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14178 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14178 = (function (fn1,_,meta14176,ch,f,map_LT_,meta14179){
this.fn1 = fn1;
this._ = _;
this.meta14176 = meta14176;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14179 = meta14179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14178.cljs$lang$type = true;
cljs.core.async.t14178.cljs$lang$ctorStr = "cljs.core.async/t14178";
cljs.core.async.t14178.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14178");
});
cljs.core.async.t14178.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14178.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14168_SHARP_){return f1.call(null,(((p1__14168_SHARP_ == null))?null:self__.f.call(null,p1__14168_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14180){var self__ = this;
var _14180__$1 = this;return self__.meta14179;
});
cljs.core.async.t14178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14180,meta14179__$1){var self__ = this;
var _14180__$1 = this;return (new cljs.core.async.t14178(self__.fn1,self__._,self__.meta14176,self__.ch,self__.f,self__.map_LT_,meta14179__$1));
});
cljs.core.async.__GT_t14178 = (function __GT_t14178(fn1__$1,___$2,meta14176__$1,ch__$2,f__$2,map_LT___$2,meta14179){return (new cljs.core.async.t14178(fn1__$1,___$2,meta14176__$1,ch__$2,f__$2,map_LT___$2,meta14179));
});
}
return (new cljs.core.async.t14178(fn1,___$1,self__.meta14176,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3114__auto__ = ret;if(cljs.core.truth_(and__3114__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3114__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14175.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14175.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14177){var self__ = this;
var _14177__$1 = this;return self__.meta14176;
});
cljs.core.async.t14175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14177,meta14176__$1){var self__ = this;
var _14177__$1 = this;return (new cljs.core.async.t14175(self__.ch,self__.f,self__.map_LT_,meta14176__$1));
});
cljs.core.async.__GT_t14175 = (function __GT_t14175(ch__$1,f__$1,map_LT___$1,meta14176){return (new cljs.core.async.t14175(ch__$1,f__$1,map_LT___$1,meta14176));
});
}
return (new cljs.core.async.t14175(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14184 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14184 = (function (ch,f,map_GT_,meta14185){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14185 = meta14185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14184.cljs$lang$type = true;
cljs.core.async.t14184.cljs$lang$ctorStr = "cljs.core.async/t14184";
cljs.core.async.t14184.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14184");
});
cljs.core.async.t14184.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14184.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14184.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14186){var self__ = this;
var _14186__$1 = this;return self__.meta14185;
});
cljs.core.async.t14184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14186,meta14185__$1){var self__ = this;
var _14186__$1 = this;return (new cljs.core.async.t14184(self__.ch,self__.f,self__.map_GT_,meta14185__$1));
});
cljs.core.async.__GT_t14184 = (function __GT_t14184(ch__$1,f__$1,map_GT___$1,meta14185){return (new cljs.core.async.t14184(ch__$1,f__$1,map_GT___$1,meta14185));
});
}
return (new cljs.core.async.t14184(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14190 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14190 = (function (ch,p,filter_GT_,meta14191){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14191 = meta14191;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14190.cljs$lang$type = true;
cljs.core.async.t14190.cljs$lang$ctorStr = "cljs.core.async/t14190";
cljs.core.async.t14190.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14190");
});
cljs.core.async.t14190.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14190.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14190.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14190.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14190.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14190.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14192){var self__ = this;
var _14192__$1 = this;return self__.meta14191;
});
cljs.core.async.t14190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14192,meta14191__$1){var self__ = this;
var _14192__$1 = this;return (new cljs.core.async.t14190(self__.ch,self__.p,self__.filter_GT_,meta14191__$1));
});
cljs.core.async.__GT_t14190 = (function __GT_t14190(ch__$1,p__$1,filter_GT___$1,meta14191){return (new cljs.core.async.t14190(ch__$1,p__$1,filter_GT___$1,meta14191));
});
}
return (new cljs.core.async.t14190(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5484__auto___14275 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_14254){var state_val_14255 = (state_14254[1]);if((state_val_14255 === 1))
{var state_14254__$1 = state_14254;var statearr_14256_14276 = state_14254__$1;(statearr_14256_14276[2] = null);
(statearr_14256_14276[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14255 === 2))
{var state_14254__$1 = state_14254;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14254__$1,4,ch);
} else
{if((state_val_14255 === 3))
{var inst_14252 = (state_14254[2]);var state_14254__$1 = state_14254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14254__$1,inst_14252);
} else
{if((state_val_14255 === 4))
{var inst_14236 = (state_14254[7]);var inst_14236__$1 = (state_14254[2]);var inst_14237 = (inst_14236__$1 == null);var state_14254__$1 = (function (){var statearr_14257 = state_14254;(statearr_14257[7] = inst_14236__$1);
return statearr_14257;
})();if(cljs.core.truth_(inst_14237))
{var statearr_14258_14277 = state_14254__$1;(statearr_14258_14277[1] = 5);
} else
{var statearr_14259_14278 = state_14254__$1;(statearr_14259_14278[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14255 === 5))
{var inst_14239 = cljs.core.async.close_BANG_.call(null,out);var state_14254__$1 = state_14254;var statearr_14260_14279 = state_14254__$1;(statearr_14260_14279[2] = inst_14239);
(statearr_14260_14279[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14255 === 6))
{var inst_14236 = (state_14254[7]);var inst_14241 = p.call(null,inst_14236);var state_14254__$1 = state_14254;if(cljs.core.truth_(inst_14241))
{var statearr_14261_14280 = state_14254__$1;(statearr_14261_14280[1] = 8);
} else
{var statearr_14262_14281 = state_14254__$1;(statearr_14262_14281[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14255 === 7))
{var inst_14250 = (state_14254[2]);var state_14254__$1 = state_14254;var statearr_14263_14282 = state_14254__$1;(statearr_14263_14282[2] = inst_14250);
(statearr_14263_14282[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14255 === 8))
{var inst_14236 = (state_14254[7]);var state_14254__$1 = state_14254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14254__$1,11,out,inst_14236);
} else
{if((state_val_14255 === 9))
{var state_14254__$1 = state_14254;var statearr_14264_14283 = state_14254__$1;(statearr_14264_14283[2] = null);
(statearr_14264_14283[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14255 === 10))
{var inst_14247 = (state_14254[2]);var state_14254__$1 = (function (){var statearr_14265 = state_14254;(statearr_14265[8] = inst_14247);
return statearr_14265;
})();var statearr_14266_14284 = state_14254__$1;(statearr_14266_14284[2] = null);
(statearr_14266_14284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14255 === 11))
{var inst_14244 = (state_14254[2]);var state_14254__$1 = state_14254;var statearr_14267_14285 = state_14254__$1;(statearr_14267_14285[2] = inst_14244);
(statearr_14267_14285[1] = 10);
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
}
}
}
});return ((function (switch__5414__auto__){
return (function() {
var state_machine__5415__auto__ = null;
var state_machine__5415__auto____0 = (function (){var statearr_14271 = (new Array(9));(statearr_14271[0] = state_machine__5415__auto__);
(statearr_14271[1] = 1);
return statearr_14271;
});
var state_machine__5415__auto____1 = (function (state_14254){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_14254);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e14272){if((e14272 instanceof Object))
{var ex__5418__auto__ = e14272;var statearr_14273_14286 = state_14254;(statearr_14273_14286[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14254);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14287 = state_14254;
state_14254 = G__14287;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_14254){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_14254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_14274 = f__5485__auto__.call(null);(statearr_14274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto___14275);
return statearr_14274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5484__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_14439){var state_val_14440 = (state_14439[1]);if((state_val_14440 === 1))
{var state_14439__$1 = state_14439;var statearr_14441_14478 = state_14439__$1;(statearr_14441_14478[2] = null);
(statearr_14441_14478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 2))
{var state_14439__$1 = state_14439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14439__$1,4,in$);
} else
{if((state_val_14440 === 3))
{var inst_14437 = (state_14439[2]);var state_14439__$1 = state_14439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14439__$1,inst_14437);
} else
{if((state_val_14440 === 4))
{var inst_14385 = (state_14439[7]);var inst_14385__$1 = (state_14439[2]);var inst_14386 = (inst_14385__$1 == null);var state_14439__$1 = (function (){var statearr_14442 = state_14439;(statearr_14442[7] = inst_14385__$1);
return statearr_14442;
})();if(cljs.core.truth_(inst_14386))
{var statearr_14443_14479 = state_14439__$1;(statearr_14443_14479[1] = 5);
} else
{var statearr_14444_14480 = state_14439__$1;(statearr_14444_14480[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 5))
{var inst_14388 = cljs.core.async.close_BANG_.call(null,out);var state_14439__$1 = state_14439;var statearr_14445_14481 = state_14439__$1;(statearr_14445_14481[2] = inst_14388);
(statearr_14445_14481[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 6))
{var inst_14385 = (state_14439[7]);var inst_14390 = f.call(null,inst_14385);var inst_14395 = cljs.core.seq.call(null,inst_14390);var inst_14396 = inst_14395;var inst_14397 = null;var inst_14398 = 0;var inst_14399 = 0;var state_14439__$1 = (function (){var statearr_14446 = state_14439;(statearr_14446[8] = inst_14398);
(statearr_14446[9] = inst_14399);
(statearr_14446[10] = inst_14396);
(statearr_14446[11] = inst_14397);
return statearr_14446;
})();var statearr_14447_14482 = state_14439__$1;(statearr_14447_14482[2] = null);
(statearr_14447_14482[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 7))
{var inst_14435 = (state_14439[2]);var state_14439__$1 = state_14439;var statearr_14448_14483 = state_14439__$1;(statearr_14448_14483[2] = inst_14435);
(statearr_14448_14483[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 8))
{var inst_14398 = (state_14439[8]);var inst_14399 = (state_14439[9]);var inst_14401 = (inst_14399 < inst_14398);var inst_14402 = inst_14401;var state_14439__$1 = state_14439;if(cljs.core.truth_(inst_14402))
{var statearr_14449_14484 = state_14439__$1;(statearr_14449_14484[1] = 10);
} else
{var statearr_14450_14485 = state_14439__$1;(statearr_14450_14485[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 9))
{var inst_14432 = (state_14439[2]);var state_14439__$1 = (function (){var statearr_14451 = state_14439;(statearr_14451[12] = inst_14432);
return statearr_14451;
})();var statearr_14452_14486 = state_14439__$1;(statearr_14452_14486[2] = null);
(statearr_14452_14486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 10))
{var inst_14399 = (state_14439[9]);var inst_14397 = (state_14439[11]);var inst_14404 = cljs.core._nth.call(null,inst_14397,inst_14399);var state_14439__$1 = state_14439;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14439__$1,13,out,inst_14404);
} else
{if((state_val_14440 === 11))
{var inst_14410 = (state_14439[13]);var inst_14396 = (state_14439[10]);var inst_14410__$1 = cljs.core.seq.call(null,inst_14396);var state_14439__$1 = (function (){var statearr_14456 = state_14439;(statearr_14456[13] = inst_14410__$1);
return statearr_14456;
})();if(inst_14410__$1)
{var statearr_14457_14487 = state_14439__$1;(statearr_14457_14487[1] = 14);
} else
{var statearr_14458_14488 = state_14439__$1;(statearr_14458_14488[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 12))
{var inst_14430 = (state_14439[2]);var state_14439__$1 = state_14439;var statearr_14459_14489 = state_14439__$1;(statearr_14459_14489[2] = inst_14430);
(statearr_14459_14489[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 13))
{var inst_14398 = (state_14439[8]);var inst_14399 = (state_14439[9]);var inst_14396 = (state_14439[10]);var inst_14397 = (state_14439[11]);var inst_14406 = (state_14439[2]);var inst_14407 = (inst_14399 + 1);var tmp14453 = inst_14398;var tmp14454 = inst_14396;var tmp14455 = inst_14397;var inst_14396__$1 = tmp14454;var inst_14397__$1 = tmp14455;var inst_14398__$1 = tmp14453;var inst_14399__$1 = inst_14407;var state_14439__$1 = (function (){var statearr_14460 = state_14439;(statearr_14460[14] = inst_14406);
(statearr_14460[8] = inst_14398__$1);
(statearr_14460[9] = inst_14399__$1);
(statearr_14460[10] = inst_14396__$1);
(statearr_14460[11] = inst_14397__$1);
return statearr_14460;
})();var statearr_14461_14490 = state_14439__$1;(statearr_14461_14490[2] = null);
(statearr_14461_14490[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 14))
{var inst_14410 = (state_14439[13]);var inst_14412 = cljs.core.chunked_seq_QMARK_.call(null,inst_14410);var state_14439__$1 = state_14439;if(inst_14412)
{var statearr_14462_14491 = state_14439__$1;(statearr_14462_14491[1] = 17);
} else
{var statearr_14463_14492 = state_14439__$1;(statearr_14463_14492[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 15))
{var state_14439__$1 = state_14439;var statearr_14464_14493 = state_14439__$1;(statearr_14464_14493[2] = null);
(statearr_14464_14493[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 16))
{var inst_14428 = (state_14439[2]);var state_14439__$1 = state_14439;var statearr_14465_14494 = state_14439__$1;(statearr_14465_14494[2] = inst_14428);
(statearr_14465_14494[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 17))
{var inst_14410 = (state_14439[13]);var inst_14414 = cljs.core.chunk_first.call(null,inst_14410);var inst_14415 = cljs.core.chunk_rest.call(null,inst_14410);var inst_14416 = cljs.core.count.call(null,inst_14414);var inst_14396 = inst_14415;var inst_14397 = inst_14414;var inst_14398 = inst_14416;var inst_14399 = 0;var state_14439__$1 = (function (){var statearr_14466 = state_14439;(statearr_14466[8] = inst_14398);
(statearr_14466[9] = inst_14399);
(statearr_14466[10] = inst_14396);
(statearr_14466[11] = inst_14397);
return statearr_14466;
})();var statearr_14467_14495 = state_14439__$1;(statearr_14467_14495[2] = null);
(statearr_14467_14495[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 18))
{var inst_14410 = (state_14439[13]);var inst_14419 = cljs.core.first.call(null,inst_14410);var state_14439__$1 = state_14439;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14439__$1,20,out,inst_14419);
} else
{if((state_val_14440 === 19))
{var inst_14425 = (state_14439[2]);var state_14439__$1 = state_14439;var statearr_14468_14496 = state_14439__$1;(statearr_14468_14496[2] = inst_14425);
(statearr_14468_14496[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 20))
{var inst_14410 = (state_14439[13]);var inst_14421 = (state_14439[2]);var inst_14422 = cljs.core.next.call(null,inst_14410);var inst_14396 = inst_14422;var inst_14397 = null;var inst_14398 = 0;var inst_14399 = 0;var state_14439__$1 = (function (){var statearr_14469 = state_14439;(statearr_14469[15] = inst_14421);
(statearr_14469[8] = inst_14398);
(statearr_14469[9] = inst_14399);
(statearr_14469[10] = inst_14396);
(statearr_14469[11] = inst_14397);
return statearr_14469;
})();var statearr_14470_14497 = state_14439__$1;(statearr_14470_14497[2] = null);
(statearr_14470_14497[1] = 8);
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
}
}
}
}
}
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
var state_machine__5415__auto____0 = (function (){var statearr_14474 = (new Array(16));(statearr_14474[0] = state_machine__5415__auto__);
(statearr_14474[1] = 1);
return statearr_14474;
});
var state_machine__5415__auto____1 = (function (state_14439){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_14439);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e14475){if((e14475 instanceof Object))
{var ex__5418__auto__ = e14475;var statearr_14476_14498 = state_14439;(statearr_14476_14498[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14439);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14475;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14499 = state_14439;
state_14439 = G__14499;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_14439){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_14439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_14477 = f__5485__auto__.call(null);(statearr_14477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto__);
return statearr_14477;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return c__5484__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5484__auto___14580 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_14559){var state_val_14560 = (state_14559[1]);if((state_val_14560 === 1))
{var state_14559__$1 = state_14559;var statearr_14561_14581 = state_14559__$1;(statearr_14561_14581[2] = null);
(statearr_14561_14581[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14560 === 2))
{var state_14559__$1 = state_14559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14559__$1,4,from);
} else
{if((state_val_14560 === 3))
{var inst_14557 = (state_14559[2]);var state_14559__$1 = state_14559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14559__$1,inst_14557);
} else
{if((state_val_14560 === 4))
{var inst_14542 = (state_14559[7]);var inst_14542__$1 = (state_14559[2]);var inst_14543 = (inst_14542__$1 == null);var state_14559__$1 = (function (){var statearr_14562 = state_14559;(statearr_14562[7] = inst_14542__$1);
return statearr_14562;
})();if(cljs.core.truth_(inst_14543))
{var statearr_14563_14582 = state_14559__$1;(statearr_14563_14582[1] = 5);
} else
{var statearr_14564_14583 = state_14559__$1;(statearr_14564_14583[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14560 === 5))
{var state_14559__$1 = state_14559;if(cljs.core.truth_(close_QMARK_))
{var statearr_14565_14584 = state_14559__$1;(statearr_14565_14584[1] = 8);
} else
{var statearr_14566_14585 = state_14559__$1;(statearr_14566_14585[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14560 === 6))
{var inst_14542 = (state_14559[7]);var state_14559__$1 = state_14559;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14559__$1,11,to,inst_14542);
} else
{if((state_val_14560 === 7))
{var inst_14555 = (state_14559[2]);var state_14559__$1 = state_14559;var statearr_14567_14586 = state_14559__$1;(statearr_14567_14586[2] = inst_14555);
(statearr_14567_14586[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14560 === 8))
{var inst_14546 = cljs.core.async.close_BANG_.call(null,to);var state_14559__$1 = state_14559;var statearr_14568_14587 = state_14559__$1;(statearr_14568_14587[2] = inst_14546);
(statearr_14568_14587[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14560 === 9))
{var state_14559__$1 = state_14559;var statearr_14569_14588 = state_14559__$1;(statearr_14569_14588[2] = null);
(statearr_14569_14588[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14560 === 10))
{var inst_14549 = (state_14559[2]);var state_14559__$1 = state_14559;var statearr_14570_14589 = state_14559__$1;(statearr_14570_14589[2] = inst_14549);
(statearr_14570_14589[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14560 === 11))
{var inst_14552 = (state_14559[2]);var state_14559__$1 = (function (){var statearr_14571 = state_14559;(statearr_14571[8] = inst_14552);
return statearr_14571;
})();var statearr_14572_14590 = state_14559__$1;(statearr_14572_14590[2] = null);
(statearr_14572_14590[1] = 2);
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
}
}
}
});return ((function (switch__5414__auto__){
return (function() {
var state_machine__5415__auto__ = null;
var state_machine__5415__auto____0 = (function (){var statearr_14576 = (new Array(9));(statearr_14576[0] = state_machine__5415__auto__);
(statearr_14576[1] = 1);
return statearr_14576;
});
var state_machine__5415__auto____1 = (function (state_14559){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_14559);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e14577){if((e14577 instanceof Object))
{var ex__5418__auto__ = e14577;var statearr_14578_14591 = state_14559;(statearr_14578_14591[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14559);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14592 = state_14559;
state_14559 = G__14592;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_14559){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_14559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_14579 = f__5485__auto__.call(null);(statearr_14579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto___14580);
return statearr_14579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5484__auto___14679 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_14657){var state_val_14658 = (state_14657[1]);if((state_val_14658 === 1))
{var state_14657__$1 = state_14657;var statearr_14659_14680 = state_14657__$1;(statearr_14659_14680[2] = null);
(statearr_14659_14680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 2))
{var state_14657__$1 = state_14657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14657__$1,4,ch);
} else
{if((state_val_14658 === 3))
{var inst_14655 = (state_14657[2]);var state_14657__$1 = state_14657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14657__$1,inst_14655);
} else
{if((state_val_14658 === 4))
{var inst_14638 = (state_14657[7]);var inst_14638__$1 = (state_14657[2]);var inst_14639 = (inst_14638__$1 == null);var state_14657__$1 = (function (){var statearr_14660 = state_14657;(statearr_14660[7] = inst_14638__$1);
return statearr_14660;
})();if(cljs.core.truth_(inst_14639))
{var statearr_14661_14681 = state_14657__$1;(statearr_14661_14681[1] = 5);
} else
{var statearr_14662_14682 = state_14657__$1;(statearr_14662_14682[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 5))
{var inst_14641 = cljs.core.async.close_BANG_.call(null,tc);var inst_14642 = cljs.core.async.close_BANG_.call(null,fc);var state_14657__$1 = (function (){var statearr_14663 = state_14657;(statearr_14663[8] = inst_14641);
return statearr_14663;
})();var statearr_14664_14683 = state_14657__$1;(statearr_14664_14683[2] = inst_14642);
(statearr_14664_14683[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 6))
{var inst_14638 = (state_14657[7]);var inst_14644 = p.call(null,inst_14638);var state_14657__$1 = state_14657;if(cljs.core.truth_(inst_14644))
{var statearr_14665_14684 = state_14657__$1;(statearr_14665_14684[1] = 9);
} else
{var statearr_14666_14685 = state_14657__$1;(statearr_14666_14685[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 7))
{var inst_14653 = (state_14657[2]);var state_14657__$1 = state_14657;var statearr_14667_14686 = state_14657__$1;(statearr_14667_14686[2] = inst_14653);
(statearr_14667_14686[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 8))
{var inst_14650 = (state_14657[2]);var state_14657__$1 = (function (){var statearr_14668 = state_14657;(statearr_14668[9] = inst_14650);
return statearr_14668;
})();var statearr_14669_14687 = state_14657__$1;(statearr_14669_14687[2] = null);
(statearr_14669_14687[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 9))
{var state_14657__$1 = state_14657;var statearr_14670_14688 = state_14657__$1;(statearr_14670_14688[2] = tc);
(statearr_14670_14688[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 10))
{var state_14657__$1 = state_14657;var statearr_14671_14689 = state_14657__$1;(statearr_14671_14689[2] = fc);
(statearr_14671_14689[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 11))
{var inst_14638 = (state_14657[7]);var inst_14648 = (state_14657[2]);var state_14657__$1 = state_14657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14657__$1,8,inst_14648,inst_14638);
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
}
}
}
});return ((function (switch__5414__auto__){
return (function() {
var state_machine__5415__auto__ = null;
var state_machine__5415__auto____0 = (function (){var statearr_14675 = (new Array(10));(statearr_14675[0] = state_machine__5415__auto__);
(statearr_14675[1] = 1);
return statearr_14675;
});
var state_machine__5415__auto____1 = (function (state_14657){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_14657);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e14676){if((e14676 instanceof Object))
{var ex__5418__auto__ = e14676;var statearr_14677_14690 = state_14657;(statearr_14677_14690[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14657);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14691 = state_14657;
state_14657 = G__14691;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_14657){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_14657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_14678 = f__5485__auto__.call(null);(statearr_14678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto___14679);
return statearr_14678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5484__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_14738){var state_val_14739 = (state_14738[1]);if((state_val_14739 === 7))
{var inst_14734 = (state_14738[2]);var state_14738__$1 = state_14738;var statearr_14740_14756 = state_14738__$1;(statearr_14740_14756[2] = inst_14734);
(statearr_14740_14756[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14739 === 6))
{var inst_14724 = (state_14738[7]);var inst_14727 = (state_14738[8]);var inst_14731 = f.call(null,inst_14724,inst_14727);var inst_14724__$1 = inst_14731;var state_14738__$1 = (function (){var statearr_14741 = state_14738;(statearr_14741[7] = inst_14724__$1);
return statearr_14741;
})();var statearr_14742_14757 = state_14738__$1;(statearr_14742_14757[2] = null);
(statearr_14742_14757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14739 === 5))
{var inst_14724 = (state_14738[7]);var state_14738__$1 = state_14738;var statearr_14743_14758 = state_14738__$1;(statearr_14743_14758[2] = inst_14724);
(statearr_14743_14758[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14739 === 4))
{var inst_14727 = (state_14738[8]);var inst_14727__$1 = (state_14738[2]);var inst_14728 = (inst_14727__$1 == null);var state_14738__$1 = (function (){var statearr_14744 = state_14738;(statearr_14744[8] = inst_14727__$1);
return statearr_14744;
})();if(cljs.core.truth_(inst_14728))
{var statearr_14745_14759 = state_14738__$1;(statearr_14745_14759[1] = 5);
} else
{var statearr_14746_14760 = state_14738__$1;(statearr_14746_14760[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14739 === 3))
{var inst_14736 = (state_14738[2]);var state_14738__$1 = state_14738;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14738__$1,inst_14736);
} else
{if((state_val_14739 === 2))
{var state_14738__$1 = state_14738;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14738__$1,4,ch);
} else
{if((state_val_14739 === 1))
{var inst_14724 = init;var state_14738__$1 = (function (){var statearr_14747 = state_14738;(statearr_14747[7] = inst_14724);
return statearr_14747;
})();var statearr_14748_14761 = state_14738__$1;(statearr_14748_14761[2] = null);
(statearr_14748_14761[1] = 2);
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
var state_machine__5415__auto____0 = (function (){var statearr_14752 = (new Array(9));(statearr_14752[0] = state_machine__5415__auto__);
(statearr_14752[1] = 1);
return statearr_14752;
});
var state_machine__5415__auto____1 = (function (state_14738){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_14738);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e14753){if((e14753 instanceof Object))
{var ex__5418__auto__ = e14753;var statearr_14754_14762 = state_14738;(statearr_14754_14762[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14738);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14763 = state_14738;
state_14738 = G__14763;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_14738){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_14738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_14755 = f__5485__auto__.call(null);(statearr_14755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto__);
return statearr_14755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return c__5484__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5484__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_14825){var state_val_14826 = (state_14825[1]);if((state_val_14826 === 1))
{var inst_14805 = cljs.core.seq.call(null,coll);var inst_14806 = inst_14805;var state_14825__$1 = (function (){var statearr_14827 = state_14825;(statearr_14827[7] = inst_14806);
return statearr_14827;
})();var statearr_14828_14846 = state_14825__$1;(statearr_14828_14846[2] = null);
(statearr_14828_14846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14826 === 2))
{var inst_14806 = (state_14825[7]);var state_14825__$1 = state_14825;if(cljs.core.truth_(inst_14806))
{var statearr_14829_14847 = state_14825__$1;(statearr_14829_14847[1] = 4);
} else
{var statearr_14830_14848 = state_14825__$1;(statearr_14830_14848[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14826 === 3))
{var inst_14823 = (state_14825[2]);var state_14825__$1 = state_14825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14825__$1,inst_14823);
} else
{if((state_val_14826 === 4))
{var inst_14806 = (state_14825[7]);var inst_14809 = cljs.core.first.call(null,inst_14806);var state_14825__$1 = state_14825;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14825__$1,7,ch,inst_14809);
} else
{if((state_val_14826 === 5))
{var state_14825__$1 = state_14825;if(cljs.core.truth_(close_QMARK_))
{var statearr_14831_14849 = state_14825__$1;(statearr_14831_14849[1] = 8);
} else
{var statearr_14832_14850 = state_14825__$1;(statearr_14832_14850[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14826 === 6))
{var inst_14821 = (state_14825[2]);var state_14825__$1 = state_14825;var statearr_14833_14851 = state_14825__$1;(statearr_14833_14851[2] = inst_14821);
(statearr_14833_14851[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14826 === 7))
{var inst_14806 = (state_14825[7]);var inst_14811 = (state_14825[2]);var inst_14812 = cljs.core.next.call(null,inst_14806);var inst_14806__$1 = inst_14812;var state_14825__$1 = (function (){var statearr_14834 = state_14825;(statearr_14834[7] = inst_14806__$1);
(statearr_14834[8] = inst_14811);
return statearr_14834;
})();var statearr_14835_14852 = state_14825__$1;(statearr_14835_14852[2] = null);
(statearr_14835_14852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14826 === 8))
{var inst_14816 = cljs.core.async.close_BANG_.call(null,ch);var state_14825__$1 = state_14825;var statearr_14836_14853 = state_14825__$1;(statearr_14836_14853[2] = inst_14816);
(statearr_14836_14853[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14826 === 9))
{var state_14825__$1 = state_14825;var statearr_14837_14854 = state_14825__$1;(statearr_14837_14854[2] = null);
(statearr_14837_14854[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14826 === 10))
{var inst_14819 = (state_14825[2]);var state_14825__$1 = state_14825;var statearr_14838_14855 = state_14825__$1;(statearr_14838_14855[2] = inst_14819);
(statearr_14838_14855[1] = 6);
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
}
}
});return ((function (switch__5414__auto__){
return (function() {
var state_machine__5415__auto__ = null;
var state_machine__5415__auto____0 = (function (){var statearr_14842 = (new Array(9));(statearr_14842[0] = state_machine__5415__auto__);
(statearr_14842[1] = 1);
return statearr_14842;
});
var state_machine__5415__auto____1 = (function (state_14825){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_14825);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e14843){if((e14843 instanceof Object))
{var ex__5418__auto__ = e14843;var statearr_14844_14856 = state_14825;(statearr_14844_14856[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14825);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14857 = state_14825;
state_14825 = G__14857;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_14825){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_14825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_14845 = f__5485__auto__.call(null);(statearr_14845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto__);
return statearr_14845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return c__5484__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3114__auto__ = _;if(and__3114__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3114__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3719__auto__ = (((_ == null))?null:_);return (function (){var or__3123__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3114__auto__ = m;if(and__3114__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3114__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3719__auto__ = (((m == null))?null:m);return (function (){var or__3123__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3114__auto__ = m;if(and__3114__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3114__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3719__auto__ = (((m == null))?null:m);return (function (){var or__3123__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3114__auto__ = m;if(and__3114__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3114__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3719__auto__ = (((m == null))?null:m);return (function (){var or__3123__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15072 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15072 = (function (cs,ch,mult,meta15073){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15073 = meta15073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15072.cljs$lang$type = true;
cljs.core.async.t15072.cljs$lang$ctorStr = "cljs.core.async/t15072";
cljs.core.async.t15072.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t15072");
});})(cs))
;
cljs.core.async.t15072.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15072.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15072.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15072.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15072.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15072.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15074){var self__ = this;
var _15074__$1 = this;return self__.meta15073;
});})(cs))
;
cljs.core.async.t15072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15074,meta15073__$1){var self__ = this;
var _15074__$1 = this;return (new cljs.core.async.t15072(self__.cs,self__.ch,self__.mult,meta15073__$1));
});})(cs))
;
cljs.core.async.__GT_t15072 = ((function (cs){
return (function __GT_t15072(cs__$1,ch__$1,mult__$1,meta15073){return (new cljs.core.async.t15072(cs__$1,ch__$1,mult__$1,meta15073));
});})(cs))
;
}
return (new cljs.core.async.t15072(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5484__auto___15286 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_15204){var state_val_15205 = (state_15204[1]);if((state_val_15205 === 32))
{var inst_15077 = (state_15204[7]);var inst_15153 = (state_15204[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15204,31,Object,null,30);var inst_15160 = cljs.core.async.put_BANG_.call(null,inst_15153,inst_15077,done);var state_15204__$1 = state_15204;var statearr_15206_15287 = state_15204__$1;(statearr_15206_15287[2] = inst_15160);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15204__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 1))
{var state_15204__$1 = state_15204;var statearr_15207_15288 = state_15204__$1;(statearr_15207_15288[2] = null);
(statearr_15207_15288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 33))
{var inst_15166 = (state_15204[9]);var inst_15168 = cljs.core.chunked_seq_QMARK_.call(null,inst_15166);var state_15204__$1 = state_15204;if(inst_15168)
{var statearr_15208_15289 = state_15204__$1;(statearr_15208_15289[1] = 36);
} else
{var statearr_15209_15290 = state_15204__$1;(statearr_15209_15290[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 2))
{var state_15204__$1 = state_15204;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15204__$1,4,ch);
} else
{if((state_val_15205 === 34))
{var state_15204__$1 = state_15204;var statearr_15210_15291 = state_15204__$1;(statearr_15210_15291[2] = null);
(statearr_15210_15291[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 3))
{var inst_15202 = (state_15204[2]);var state_15204__$1 = state_15204;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15204__$1,inst_15202);
} else
{if((state_val_15205 === 35))
{var inst_15191 = (state_15204[2]);var state_15204__$1 = state_15204;var statearr_15211_15292 = state_15204__$1;(statearr_15211_15292[2] = inst_15191);
(statearr_15211_15292[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 4))
{var inst_15077 = (state_15204[7]);var inst_15077__$1 = (state_15204[2]);var inst_15078 = (inst_15077__$1 == null);var state_15204__$1 = (function (){var statearr_15212 = state_15204;(statearr_15212[7] = inst_15077__$1);
return statearr_15212;
})();if(cljs.core.truth_(inst_15078))
{var statearr_15213_15293 = state_15204__$1;(statearr_15213_15293[1] = 5);
} else
{var statearr_15214_15294 = state_15204__$1;(statearr_15214_15294[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 36))
{var inst_15166 = (state_15204[9]);var inst_15170 = cljs.core.chunk_first.call(null,inst_15166);var inst_15171 = cljs.core.chunk_rest.call(null,inst_15166);var inst_15172 = cljs.core.count.call(null,inst_15170);var inst_15145 = inst_15171;var inst_15146 = inst_15170;var inst_15147 = inst_15172;var inst_15148 = 0;var state_15204__$1 = (function (){var statearr_15215 = state_15204;(statearr_15215[10] = inst_15148);
(statearr_15215[11] = inst_15146);
(statearr_15215[12] = inst_15147);
(statearr_15215[13] = inst_15145);
return statearr_15215;
})();var statearr_15216_15295 = state_15204__$1;(statearr_15216_15295[2] = null);
(statearr_15216_15295[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 5))
{var inst_15084 = cljs.core.deref.call(null,cs);var inst_15085 = cljs.core.seq.call(null,inst_15084);var inst_15086 = inst_15085;var inst_15087 = null;var inst_15088 = 0;var inst_15089 = 0;var state_15204__$1 = (function (){var statearr_15217 = state_15204;(statearr_15217[14] = inst_15089);
(statearr_15217[15] = inst_15086);
(statearr_15217[16] = inst_15088);
(statearr_15217[17] = inst_15087);
return statearr_15217;
})();var statearr_15218_15296 = state_15204__$1;(statearr_15218_15296[2] = null);
(statearr_15218_15296[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 37))
{var inst_15166 = (state_15204[9]);var inst_15175 = cljs.core.first.call(null,inst_15166);var state_15204__$1 = (function (){var statearr_15219 = state_15204;(statearr_15219[18] = inst_15175);
return statearr_15219;
})();var statearr_15220_15297 = state_15204__$1;(statearr_15220_15297[2] = null);
(statearr_15220_15297[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 6))
{var inst_15136 = cljs.core.deref.call(null,cs);var inst_15137 = cljs.core.keys.call(null,inst_15136);var inst_15138 = cljs.core.count.call(null,inst_15137);var inst_15139 = cljs.core.reset_BANG_.call(null,dctr,inst_15138);var inst_15144 = cljs.core.seq.call(null,inst_15137);var inst_15145 = inst_15144;var inst_15146 = null;var inst_15147 = 0;var inst_15148 = 0;var state_15204__$1 = (function (){var statearr_15221 = state_15204;(statearr_15221[10] = inst_15148);
(statearr_15221[11] = inst_15146);
(statearr_15221[12] = inst_15147);
(statearr_15221[13] = inst_15145);
(statearr_15221[19] = inst_15139);
return statearr_15221;
})();var statearr_15222_15298 = state_15204__$1;(statearr_15222_15298[2] = null);
(statearr_15222_15298[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 38))
{var inst_15188 = (state_15204[2]);var state_15204__$1 = state_15204;var statearr_15223_15299 = state_15204__$1;(statearr_15223_15299[2] = inst_15188);
(statearr_15223_15299[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 7))
{var inst_15200 = (state_15204[2]);var state_15204__$1 = state_15204;var statearr_15224_15300 = state_15204__$1;(statearr_15224_15300[2] = inst_15200);
(statearr_15224_15300[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 39))
{var inst_15166 = (state_15204[9]);var inst_15184 = (state_15204[2]);var inst_15185 = cljs.core.next.call(null,inst_15166);var inst_15145 = inst_15185;var inst_15146 = null;var inst_15147 = 0;var inst_15148 = 0;var state_15204__$1 = (function (){var statearr_15225 = state_15204;(statearr_15225[10] = inst_15148);
(statearr_15225[11] = inst_15146);
(statearr_15225[12] = inst_15147);
(statearr_15225[13] = inst_15145);
(statearr_15225[20] = inst_15184);
return statearr_15225;
})();var statearr_15226_15301 = state_15204__$1;(statearr_15226_15301[2] = null);
(statearr_15226_15301[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 8))
{var inst_15089 = (state_15204[14]);var inst_15088 = (state_15204[16]);var inst_15091 = (inst_15089 < inst_15088);var inst_15092 = inst_15091;var state_15204__$1 = state_15204;if(cljs.core.truth_(inst_15092))
{var statearr_15227_15302 = state_15204__$1;(statearr_15227_15302[1] = 10);
} else
{var statearr_15228_15303 = state_15204__$1;(statearr_15228_15303[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 40))
{var inst_15175 = (state_15204[18]);var inst_15176 = (state_15204[2]);var inst_15177 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15178 = cljs.core.async.untap_STAR_.call(null,m,inst_15175);var state_15204__$1 = (function (){var statearr_15229 = state_15204;(statearr_15229[21] = inst_15177);
(statearr_15229[22] = inst_15176);
return statearr_15229;
})();var statearr_15230_15304 = state_15204__$1;(statearr_15230_15304[2] = inst_15178);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15204__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 9))
{var inst_15134 = (state_15204[2]);var state_15204__$1 = state_15204;var statearr_15231_15305 = state_15204__$1;(statearr_15231_15305[2] = inst_15134);
(statearr_15231_15305[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 41))
{var inst_15175 = (state_15204[18]);var inst_15077 = (state_15204[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15204,40,Object,null,39);var inst_15182 = cljs.core.async.put_BANG_.call(null,inst_15175,inst_15077,done);var state_15204__$1 = state_15204;var statearr_15232_15306 = state_15204__$1;(statearr_15232_15306[2] = inst_15182);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15204__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 10))
{var inst_15089 = (state_15204[14]);var inst_15087 = (state_15204[17]);var inst_15095 = cljs.core._nth.call(null,inst_15087,inst_15089);var inst_15096 = cljs.core.nth.call(null,inst_15095,0,null);var inst_15097 = cljs.core.nth.call(null,inst_15095,1,null);var state_15204__$1 = (function (){var statearr_15233 = state_15204;(statearr_15233[23] = inst_15096);
return statearr_15233;
})();if(cljs.core.truth_(inst_15097))
{var statearr_15234_15307 = state_15204__$1;(statearr_15234_15307[1] = 13);
} else
{var statearr_15235_15308 = state_15204__$1;(statearr_15235_15308[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 42))
{var inst_15197 = (state_15204[2]);var state_15204__$1 = (function (){var statearr_15236 = state_15204;(statearr_15236[24] = inst_15197);
return statearr_15236;
})();var statearr_15237_15309 = state_15204__$1;(statearr_15237_15309[2] = null);
(statearr_15237_15309[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 11))
{var inst_15106 = (state_15204[25]);var inst_15086 = (state_15204[15]);var inst_15106__$1 = cljs.core.seq.call(null,inst_15086);var state_15204__$1 = (function (){var statearr_15238 = state_15204;(statearr_15238[25] = inst_15106__$1);
return statearr_15238;
})();if(inst_15106__$1)
{var statearr_15239_15310 = state_15204__$1;(statearr_15239_15310[1] = 16);
} else
{var statearr_15240_15311 = state_15204__$1;(statearr_15240_15311[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 12))
{var inst_15132 = (state_15204[2]);var state_15204__$1 = state_15204;var statearr_15241_15312 = state_15204__$1;(statearr_15241_15312[2] = inst_15132);
(statearr_15241_15312[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 13))
{var inst_15096 = (state_15204[23]);var inst_15099 = cljs.core.async.close_BANG_.call(null,inst_15096);var state_15204__$1 = state_15204;var statearr_15245_15313 = state_15204__$1;(statearr_15245_15313[2] = inst_15099);
(statearr_15245_15313[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 14))
{var state_15204__$1 = state_15204;var statearr_15246_15314 = state_15204__$1;(statearr_15246_15314[2] = null);
(statearr_15246_15314[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 15))
{var inst_15089 = (state_15204[14]);var inst_15086 = (state_15204[15]);var inst_15088 = (state_15204[16]);var inst_15087 = (state_15204[17]);var inst_15102 = (state_15204[2]);var inst_15103 = (inst_15089 + 1);var tmp15242 = inst_15086;var tmp15243 = inst_15088;var tmp15244 = inst_15087;var inst_15086__$1 = tmp15242;var inst_15087__$1 = tmp15244;var inst_15088__$1 = tmp15243;var inst_15089__$1 = inst_15103;var state_15204__$1 = (function (){var statearr_15247 = state_15204;(statearr_15247[26] = inst_15102);
(statearr_15247[14] = inst_15089__$1);
(statearr_15247[15] = inst_15086__$1);
(statearr_15247[16] = inst_15088__$1);
(statearr_15247[17] = inst_15087__$1);
return statearr_15247;
})();var statearr_15248_15315 = state_15204__$1;(statearr_15248_15315[2] = null);
(statearr_15248_15315[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 16))
{var inst_15106 = (state_15204[25]);var inst_15108 = cljs.core.chunked_seq_QMARK_.call(null,inst_15106);var state_15204__$1 = state_15204;if(inst_15108)
{var statearr_15249_15316 = state_15204__$1;(statearr_15249_15316[1] = 19);
} else
{var statearr_15250_15317 = state_15204__$1;(statearr_15250_15317[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 17))
{var state_15204__$1 = state_15204;var statearr_15251_15318 = state_15204__$1;(statearr_15251_15318[2] = null);
(statearr_15251_15318[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 18))
{var inst_15130 = (state_15204[2]);var state_15204__$1 = state_15204;var statearr_15252_15319 = state_15204__$1;(statearr_15252_15319[2] = inst_15130);
(statearr_15252_15319[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 19))
{var inst_15106 = (state_15204[25]);var inst_15110 = cljs.core.chunk_first.call(null,inst_15106);var inst_15111 = cljs.core.chunk_rest.call(null,inst_15106);var inst_15112 = cljs.core.count.call(null,inst_15110);var inst_15086 = inst_15111;var inst_15087 = inst_15110;var inst_15088 = inst_15112;var inst_15089 = 0;var state_15204__$1 = (function (){var statearr_15253 = state_15204;(statearr_15253[14] = inst_15089);
(statearr_15253[15] = inst_15086);
(statearr_15253[16] = inst_15088);
(statearr_15253[17] = inst_15087);
return statearr_15253;
})();var statearr_15254_15320 = state_15204__$1;(statearr_15254_15320[2] = null);
(statearr_15254_15320[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 20))
{var inst_15106 = (state_15204[25]);var inst_15116 = cljs.core.first.call(null,inst_15106);var inst_15117 = cljs.core.nth.call(null,inst_15116,0,null);var inst_15118 = cljs.core.nth.call(null,inst_15116,1,null);var state_15204__$1 = (function (){var statearr_15255 = state_15204;(statearr_15255[27] = inst_15117);
return statearr_15255;
})();if(cljs.core.truth_(inst_15118))
{var statearr_15256_15321 = state_15204__$1;(statearr_15256_15321[1] = 22);
} else
{var statearr_15257_15322 = state_15204__$1;(statearr_15257_15322[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 21))
{var inst_15127 = (state_15204[2]);var state_15204__$1 = state_15204;var statearr_15258_15323 = state_15204__$1;(statearr_15258_15323[2] = inst_15127);
(statearr_15258_15323[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 22))
{var inst_15117 = (state_15204[27]);var inst_15120 = cljs.core.async.close_BANG_.call(null,inst_15117);var state_15204__$1 = state_15204;var statearr_15259_15324 = state_15204__$1;(statearr_15259_15324[2] = inst_15120);
(statearr_15259_15324[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 23))
{var state_15204__$1 = state_15204;var statearr_15260_15325 = state_15204__$1;(statearr_15260_15325[2] = null);
(statearr_15260_15325[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 24))
{var inst_15106 = (state_15204[25]);var inst_15123 = (state_15204[2]);var inst_15124 = cljs.core.next.call(null,inst_15106);var inst_15086 = inst_15124;var inst_15087 = null;var inst_15088 = 0;var inst_15089 = 0;var state_15204__$1 = (function (){var statearr_15261 = state_15204;(statearr_15261[14] = inst_15089);
(statearr_15261[28] = inst_15123);
(statearr_15261[15] = inst_15086);
(statearr_15261[16] = inst_15088);
(statearr_15261[17] = inst_15087);
return statearr_15261;
})();var statearr_15262_15326 = state_15204__$1;(statearr_15262_15326[2] = null);
(statearr_15262_15326[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 25))
{var inst_15148 = (state_15204[10]);var inst_15147 = (state_15204[12]);var inst_15150 = (inst_15148 < inst_15147);var inst_15151 = inst_15150;var state_15204__$1 = state_15204;if(cljs.core.truth_(inst_15151))
{var statearr_15263_15327 = state_15204__$1;(statearr_15263_15327[1] = 27);
} else
{var statearr_15264_15328 = state_15204__$1;(statearr_15264_15328[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 26))
{var inst_15195 = (state_15204[2]);var state_15204__$1 = (function (){var statearr_15265 = state_15204;(statearr_15265[29] = inst_15195);
return statearr_15265;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15204__$1,42,dchan);
} else
{if((state_val_15205 === 27))
{var inst_15148 = (state_15204[10]);var inst_15146 = (state_15204[11]);var inst_15153 = cljs.core._nth.call(null,inst_15146,inst_15148);var state_15204__$1 = (function (){var statearr_15266 = state_15204;(statearr_15266[8] = inst_15153);
return statearr_15266;
})();var statearr_15267_15329 = state_15204__$1;(statearr_15267_15329[2] = null);
(statearr_15267_15329[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 28))
{var inst_15145 = (state_15204[13]);var inst_15166 = (state_15204[9]);var inst_15166__$1 = cljs.core.seq.call(null,inst_15145);var state_15204__$1 = (function (){var statearr_15271 = state_15204;(statearr_15271[9] = inst_15166__$1);
return statearr_15271;
})();if(inst_15166__$1)
{var statearr_15272_15330 = state_15204__$1;(statearr_15272_15330[1] = 33);
} else
{var statearr_15273_15331 = state_15204__$1;(statearr_15273_15331[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 29))
{var inst_15193 = (state_15204[2]);var state_15204__$1 = state_15204;var statearr_15274_15332 = state_15204__$1;(statearr_15274_15332[2] = inst_15193);
(statearr_15274_15332[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 30))
{var inst_15148 = (state_15204[10]);var inst_15146 = (state_15204[11]);var inst_15147 = (state_15204[12]);var inst_15145 = (state_15204[13]);var inst_15162 = (state_15204[2]);var inst_15163 = (inst_15148 + 1);var tmp15268 = inst_15146;var tmp15269 = inst_15147;var tmp15270 = inst_15145;var inst_15145__$1 = tmp15270;var inst_15146__$1 = tmp15268;var inst_15147__$1 = tmp15269;var inst_15148__$1 = inst_15163;var state_15204__$1 = (function (){var statearr_15275 = state_15204;(statearr_15275[10] = inst_15148__$1);
(statearr_15275[11] = inst_15146__$1);
(statearr_15275[12] = inst_15147__$1);
(statearr_15275[13] = inst_15145__$1);
(statearr_15275[30] = inst_15162);
return statearr_15275;
})();var statearr_15276_15333 = state_15204__$1;(statearr_15276_15333[2] = null);
(statearr_15276_15333[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15205 === 31))
{var inst_15153 = (state_15204[8]);var inst_15154 = (state_15204[2]);var inst_15155 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15156 = cljs.core.async.untap_STAR_.call(null,m,inst_15153);var state_15204__$1 = (function (){var statearr_15277 = state_15204;(statearr_15277[31] = inst_15155);
(statearr_15277[32] = inst_15154);
return statearr_15277;
})();var statearr_15278_15334 = state_15204__$1;(statearr_15278_15334[2] = inst_15156);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15204__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__5415__auto____0 = (function (){var statearr_15282 = (new Array(33));(statearr_15282[0] = state_machine__5415__auto__);
(statearr_15282[1] = 1);
return statearr_15282;
});
var state_machine__5415__auto____1 = (function (state_15204){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_15204);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e15283){if((e15283 instanceof Object))
{var ex__5418__auto__ = e15283;var statearr_15284_15335 = state_15204;(statearr_15284_15335[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15204);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15283;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15336 = state_15204;
state_15204 = G__15336;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_15204){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_15204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_15285 = f__5485__auto__.call(null);(statearr_15285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto___15286);
return statearr_15285;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3114__auto__ = m;if(and__3114__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3114__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3719__auto__ = (((m == null))?null:m);return (function (){var or__3123__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3114__auto__ = m;if(and__3114__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3114__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3719__auto__ = (((m == null))?null:m);return (function (){var or__3123__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3114__auto__ = m;if(and__3114__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3114__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3719__auto__ = (((m == null))?null:m);return (function (){var or__3123__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3114__auto__ = m;if(and__3114__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3114__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3719__auto__ = (((m == null))?null:m);return (function (){var or__3123__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3114__auto__ = m;if(and__3114__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3114__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3719__auto__ = (((m == null))?null:m);return (function (){var or__3123__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15446 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15446 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15447){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta15447 = meta15447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15446.cljs$lang$type = true;
cljs.core.async.t15446.cljs$lang$ctorStr = "cljs.core.async/t15446";
cljs.core.async.t15446.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t15446");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15446.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15446.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15446.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15446.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15446.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15446.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15446.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15448){var self__ = this;
var _15448__$1 = this;return self__.meta15447;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15448,meta15447__$1){var self__ = this;
var _15448__$1 = this;return (new cljs.core.async.t15446(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15447__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15446 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15446(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15447){return (new cljs.core.async.t15446(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15447));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15446(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5484__auto___15555 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_15513){var state_val_15514 = (state_15513[1]);if((state_val_15514 === 1))
{var inst_15452 = (state_15513[7]);var inst_15452__$1 = calc_state.call(null);var inst_15453 = cljs.core.seq_QMARK_.call(null,inst_15452__$1);var state_15513__$1 = (function (){var statearr_15515 = state_15513;(statearr_15515[7] = inst_15452__$1);
return statearr_15515;
})();if(inst_15453)
{var statearr_15516_15556 = state_15513__$1;(statearr_15516_15556[1] = 2);
} else
{var statearr_15517_15557 = state_15513__$1;(statearr_15517_15557[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 2))
{var inst_15452 = (state_15513[7]);var inst_15455 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15452);var state_15513__$1 = state_15513;var statearr_15518_15558 = state_15513__$1;(statearr_15518_15558[2] = inst_15455);
(statearr_15518_15558[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 3))
{var inst_15452 = (state_15513[7]);var state_15513__$1 = state_15513;var statearr_15519_15559 = state_15513__$1;(statearr_15519_15559[2] = inst_15452);
(statearr_15519_15559[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 4))
{var inst_15452 = (state_15513[7]);var inst_15458 = (state_15513[2]);var inst_15459 = cljs.core.get.call(null,inst_15458,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15460 = cljs.core.get.call(null,inst_15458,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15461 = cljs.core.get.call(null,inst_15458,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15462 = inst_15452;var state_15513__$1 = (function (){var statearr_15520 = state_15513;(statearr_15520[8] = inst_15459);
(statearr_15520[9] = inst_15460);
(statearr_15520[10] = inst_15462);
(statearr_15520[11] = inst_15461);
return statearr_15520;
})();var statearr_15521_15560 = state_15513__$1;(statearr_15521_15560[2] = null);
(statearr_15521_15560[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 5))
{var inst_15462 = (state_15513[10]);var inst_15465 = cljs.core.seq_QMARK_.call(null,inst_15462);var state_15513__$1 = state_15513;if(inst_15465)
{var statearr_15522_15561 = state_15513__$1;(statearr_15522_15561[1] = 7);
} else
{var statearr_15523_15562 = state_15513__$1;(statearr_15523_15562[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 6))
{var inst_15511 = (state_15513[2]);var state_15513__$1 = state_15513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15513__$1,inst_15511);
} else
{if((state_val_15514 === 7))
{var inst_15462 = (state_15513[10]);var inst_15467 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15462);var state_15513__$1 = state_15513;var statearr_15524_15563 = state_15513__$1;(statearr_15524_15563[2] = inst_15467);
(statearr_15524_15563[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 8))
{var inst_15462 = (state_15513[10]);var state_15513__$1 = state_15513;var statearr_15525_15564 = state_15513__$1;(statearr_15525_15564[2] = inst_15462);
(statearr_15525_15564[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 9))
{var inst_15470 = (state_15513[12]);var inst_15470__$1 = (state_15513[2]);var inst_15471 = cljs.core.get.call(null,inst_15470__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15472 = cljs.core.get.call(null,inst_15470__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15473 = cljs.core.get.call(null,inst_15470__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15513__$1 = (function (){var statearr_15526 = state_15513;(statearr_15526[12] = inst_15470__$1);
(statearr_15526[13] = inst_15473);
(statearr_15526[14] = inst_15472);
return statearr_15526;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15513__$1,10,inst_15471);
} else
{if((state_val_15514 === 10))
{var inst_15477 = (state_15513[15]);var inst_15478 = (state_15513[16]);var inst_15476 = (state_15513[2]);var inst_15477__$1 = cljs.core.nth.call(null,inst_15476,0,null);var inst_15478__$1 = cljs.core.nth.call(null,inst_15476,1,null);var inst_15479 = (inst_15477__$1 == null);var inst_15480 = cljs.core._EQ_.call(null,inst_15478__$1,change);var inst_15481 = (inst_15479) || (inst_15480);var state_15513__$1 = (function (){var statearr_15527 = state_15513;(statearr_15527[15] = inst_15477__$1);
(statearr_15527[16] = inst_15478__$1);
return statearr_15527;
})();if(cljs.core.truth_(inst_15481))
{var statearr_15528_15565 = state_15513__$1;(statearr_15528_15565[1] = 11);
} else
{var statearr_15529_15566 = state_15513__$1;(statearr_15529_15566[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 11))
{var inst_15477 = (state_15513[15]);var inst_15483 = (inst_15477 == null);var state_15513__$1 = state_15513;if(cljs.core.truth_(inst_15483))
{var statearr_15530_15567 = state_15513__$1;(statearr_15530_15567[1] = 14);
} else
{var statearr_15531_15568 = state_15513__$1;(statearr_15531_15568[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 12))
{var inst_15492 = (state_15513[17]);var inst_15473 = (state_15513[13]);var inst_15478 = (state_15513[16]);var inst_15492__$1 = inst_15473.call(null,inst_15478);var state_15513__$1 = (function (){var statearr_15532 = state_15513;(statearr_15532[17] = inst_15492__$1);
return statearr_15532;
})();if(cljs.core.truth_(inst_15492__$1))
{var statearr_15533_15569 = state_15513__$1;(statearr_15533_15569[1] = 17);
} else
{var statearr_15534_15570 = state_15513__$1;(statearr_15534_15570[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 13))
{var inst_15509 = (state_15513[2]);var state_15513__$1 = state_15513;var statearr_15535_15571 = state_15513__$1;(statearr_15535_15571[2] = inst_15509);
(statearr_15535_15571[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 14))
{var inst_15478 = (state_15513[16]);var inst_15485 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15478);var state_15513__$1 = state_15513;var statearr_15536_15572 = state_15513__$1;(statearr_15536_15572[2] = inst_15485);
(statearr_15536_15572[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 15))
{var state_15513__$1 = state_15513;var statearr_15537_15573 = state_15513__$1;(statearr_15537_15573[2] = null);
(statearr_15537_15573[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 16))
{var inst_15488 = (state_15513[2]);var inst_15489 = calc_state.call(null);var inst_15462 = inst_15489;var state_15513__$1 = (function (){var statearr_15538 = state_15513;(statearr_15538[10] = inst_15462);
(statearr_15538[18] = inst_15488);
return statearr_15538;
})();var statearr_15539_15574 = state_15513__$1;(statearr_15539_15574[2] = null);
(statearr_15539_15574[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 17))
{var inst_15492 = (state_15513[17]);var state_15513__$1 = state_15513;var statearr_15540_15575 = state_15513__$1;(statearr_15540_15575[2] = inst_15492);
(statearr_15540_15575[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 18))
{var inst_15473 = (state_15513[13]);var inst_15472 = (state_15513[14]);var inst_15478 = (state_15513[16]);var inst_15495 = cljs.core.empty_QMARK_.call(null,inst_15473);var inst_15496 = inst_15472.call(null,inst_15478);var inst_15497 = cljs.core.not.call(null,inst_15496);var inst_15498 = (inst_15495) && (inst_15497);var state_15513__$1 = state_15513;var statearr_15541_15576 = state_15513__$1;(statearr_15541_15576[2] = inst_15498);
(statearr_15541_15576[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 19))
{var inst_15500 = (state_15513[2]);var state_15513__$1 = state_15513;if(cljs.core.truth_(inst_15500))
{var statearr_15542_15577 = state_15513__$1;(statearr_15542_15577[1] = 20);
} else
{var statearr_15543_15578 = state_15513__$1;(statearr_15543_15578[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 20))
{var inst_15477 = (state_15513[15]);var state_15513__$1 = state_15513;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15513__$1,23,out,inst_15477);
} else
{if((state_val_15514 === 21))
{var state_15513__$1 = state_15513;var statearr_15544_15579 = state_15513__$1;(statearr_15544_15579[2] = null);
(statearr_15544_15579[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 22))
{var inst_15470 = (state_15513[12]);var inst_15506 = (state_15513[2]);var inst_15462 = inst_15470;var state_15513__$1 = (function (){var statearr_15545 = state_15513;(statearr_15545[10] = inst_15462);
(statearr_15545[19] = inst_15506);
return statearr_15545;
})();var statearr_15546_15580 = state_15513__$1;(statearr_15546_15580[2] = null);
(statearr_15546_15580[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15514 === 23))
{var inst_15503 = (state_15513[2]);var state_15513__$1 = state_15513;var statearr_15547_15581 = state_15513__$1;(statearr_15547_15581[2] = inst_15503);
(statearr_15547_15581[1] = 22);
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
}
}
}
}
}
}
}
}
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
var state_machine__5415__auto____0 = (function (){var statearr_15551 = (new Array(20));(statearr_15551[0] = state_machine__5415__auto__);
(statearr_15551[1] = 1);
return statearr_15551;
});
var state_machine__5415__auto____1 = (function (state_15513){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_15513);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e15552){if((e15552 instanceof Object))
{var ex__5418__auto__ = e15552;var statearr_15553_15582 = state_15513;(statearr_15553_15582[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15513);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15583 = state_15513;
state_15513 = G__15583;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_15513){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_15513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_15554 = f__5485__auto__.call(null);(statearr_15554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto___15555);
return statearr_15554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3114__auto__ = p;if(and__3114__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3114__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3719__auto__ = (((p == null))?null:p);return (function (){var or__3123__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3114__auto__ = p;if(and__3114__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3114__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3719__auto__ = (((p == null))?null:p);return (function (){var or__3123__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3114__auto__ = p;if(and__3114__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3114__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3719__auto__ = (((p == null))?null:p);return (function (){var or__3123__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3114__auto__ = p;if(and__3114__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3114__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3719__auto__ = (((p == null))?null:p);return (function (){var or__3123__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3719__auto__)]);if(or__3123__auto__)
{return or__3123__auto__;
} else
{var or__3123__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3123__auto____$1)
{return or__3123__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3123__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3123__auto__))
{return or__3123__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3123__auto__,mults){
return (function (p1__15584_SHARP_){if(cljs.core.truth_(p1__15584_SHARP_.call(null,topic)))
{return p1__15584_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15584_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3123__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15709 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15709 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15710){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15710 = meta15710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15709.cljs$lang$type = true;
cljs.core.async.t15709.cljs$lang$ctorStr = "cljs.core.async/t15709";
cljs.core.async.t15709.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t15709");
});})(mults,ensure_mult))
;
cljs.core.async.t15709.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15709.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15709.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15709.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15709.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15711){var self__ = this;
var _15711__$1 = this;return self__.meta15710;
});})(mults,ensure_mult))
;
cljs.core.async.t15709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15711,meta15710__$1){var self__ = this;
var _15711__$1 = this;return (new cljs.core.async.t15709(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15710__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15709 = ((function (mults,ensure_mult){
return (function __GT_t15709(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15710){return (new cljs.core.async.t15709(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15710));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15709(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5484__auto___15833 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_15785){var state_val_15786 = (state_15785[1]);if((state_val_15786 === 1))
{var state_15785__$1 = state_15785;var statearr_15787_15834 = state_15785__$1;(statearr_15787_15834[2] = null);
(statearr_15787_15834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 2))
{var state_15785__$1 = state_15785;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15785__$1,4,ch);
} else
{if((state_val_15786 === 3))
{var inst_15783 = (state_15785[2]);var state_15785__$1 = state_15785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15785__$1,inst_15783);
} else
{if((state_val_15786 === 4))
{var inst_15714 = (state_15785[7]);var inst_15714__$1 = (state_15785[2]);var inst_15715 = (inst_15714__$1 == null);var state_15785__$1 = (function (){var statearr_15788 = state_15785;(statearr_15788[7] = inst_15714__$1);
return statearr_15788;
})();if(cljs.core.truth_(inst_15715))
{var statearr_15789_15835 = state_15785__$1;(statearr_15789_15835[1] = 5);
} else
{var statearr_15790_15836 = state_15785__$1;(statearr_15790_15836[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 5))
{var inst_15721 = cljs.core.deref.call(null,mults);var inst_15722 = cljs.core.vals.call(null,inst_15721);var inst_15723 = cljs.core.seq.call(null,inst_15722);var inst_15724 = inst_15723;var inst_15725 = null;var inst_15726 = 0;var inst_15727 = 0;var state_15785__$1 = (function (){var statearr_15791 = state_15785;(statearr_15791[8] = inst_15724);
(statearr_15791[9] = inst_15725);
(statearr_15791[10] = inst_15726);
(statearr_15791[11] = inst_15727);
return statearr_15791;
})();var statearr_15792_15837 = state_15785__$1;(statearr_15792_15837[2] = null);
(statearr_15792_15837[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 6))
{var inst_15714 = (state_15785[7]);var inst_15764 = (state_15785[12]);var inst_15762 = (state_15785[13]);var inst_15762__$1 = topic_fn.call(null,inst_15714);var inst_15763 = cljs.core.deref.call(null,mults);var inst_15764__$1 = cljs.core.get.call(null,inst_15763,inst_15762__$1);var state_15785__$1 = (function (){var statearr_15793 = state_15785;(statearr_15793[12] = inst_15764__$1);
(statearr_15793[13] = inst_15762__$1);
return statearr_15793;
})();if(cljs.core.truth_(inst_15764__$1))
{var statearr_15794_15838 = state_15785__$1;(statearr_15794_15838[1] = 19);
} else
{var statearr_15795_15839 = state_15785__$1;(statearr_15795_15839[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 7))
{var inst_15781 = (state_15785[2]);var state_15785__$1 = state_15785;var statearr_15796_15840 = state_15785__$1;(statearr_15796_15840[2] = inst_15781);
(statearr_15796_15840[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 8))
{var inst_15726 = (state_15785[10]);var inst_15727 = (state_15785[11]);var inst_15729 = (inst_15727 < inst_15726);var inst_15730 = inst_15729;var state_15785__$1 = state_15785;if(cljs.core.truth_(inst_15730))
{var statearr_15800_15841 = state_15785__$1;(statearr_15800_15841[1] = 10);
} else
{var statearr_15801_15842 = state_15785__$1;(statearr_15801_15842[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 9))
{var inst_15760 = (state_15785[2]);var state_15785__$1 = state_15785;var statearr_15802_15843 = state_15785__$1;(statearr_15802_15843[2] = inst_15760);
(statearr_15802_15843[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 10))
{var inst_15724 = (state_15785[8]);var inst_15725 = (state_15785[9]);var inst_15726 = (state_15785[10]);var inst_15727 = (state_15785[11]);var inst_15732 = cljs.core._nth.call(null,inst_15725,inst_15727);var inst_15733 = cljs.core.async.muxch_STAR_.call(null,inst_15732);var inst_15734 = cljs.core.async.close_BANG_.call(null,inst_15733);var inst_15735 = (inst_15727 + 1);var tmp15797 = inst_15724;var tmp15798 = inst_15725;var tmp15799 = inst_15726;var inst_15724__$1 = tmp15797;var inst_15725__$1 = tmp15798;var inst_15726__$1 = tmp15799;var inst_15727__$1 = inst_15735;var state_15785__$1 = (function (){var statearr_15803 = state_15785;(statearr_15803[8] = inst_15724__$1);
(statearr_15803[14] = inst_15734);
(statearr_15803[9] = inst_15725__$1);
(statearr_15803[10] = inst_15726__$1);
(statearr_15803[11] = inst_15727__$1);
return statearr_15803;
})();var statearr_15804_15844 = state_15785__$1;(statearr_15804_15844[2] = null);
(statearr_15804_15844[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 11))
{var inst_15738 = (state_15785[15]);var inst_15724 = (state_15785[8]);var inst_15738__$1 = cljs.core.seq.call(null,inst_15724);var state_15785__$1 = (function (){var statearr_15805 = state_15785;(statearr_15805[15] = inst_15738__$1);
return statearr_15805;
})();if(inst_15738__$1)
{var statearr_15806_15845 = state_15785__$1;(statearr_15806_15845[1] = 13);
} else
{var statearr_15807_15846 = state_15785__$1;(statearr_15807_15846[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 12))
{var inst_15758 = (state_15785[2]);var state_15785__$1 = state_15785;var statearr_15808_15847 = state_15785__$1;(statearr_15808_15847[2] = inst_15758);
(statearr_15808_15847[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 13))
{var inst_15738 = (state_15785[15]);var inst_15740 = cljs.core.chunked_seq_QMARK_.call(null,inst_15738);var state_15785__$1 = state_15785;if(inst_15740)
{var statearr_15809_15848 = state_15785__$1;(statearr_15809_15848[1] = 16);
} else
{var statearr_15810_15849 = state_15785__$1;(statearr_15810_15849[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 14))
{var state_15785__$1 = state_15785;var statearr_15811_15850 = state_15785__$1;(statearr_15811_15850[2] = null);
(statearr_15811_15850[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 15))
{var inst_15756 = (state_15785[2]);var state_15785__$1 = state_15785;var statearr_15812_15851 = state_15785__$1;(statearr_15812_15851[2] = inst_15756);
(statearr_15812_15851[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 16))
{var inst_15738 = (state_15785[15]);var inst_15742 = cljs.core.chunk_first.call(null,inst_15738);var inst_15743 = cljs.core.chunk_rest.call(null,inst_15738);var inst_15744 = cljs.core.count.call(null,inst_15742);var inst_15724 = inst_15743;var inst_15725 = inst_15742;var inst_15726 = inst_15744;var inst_15727 = 0;var state_15785__$1 = (function (){var statearr_15813 = state_15785;(statearr_15813[8] = inst_15724);
(statearr_15813[9] = inst_15725);
(statearr_15813[10] = inst_15726);
(statearr_15813[11] = inst_15727);
return statearr_15813;
})();var statearr_15814_15852 = state_15785__$1;(statearr_15814_15852[2] = null);
(statearr_15814_15852[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 17))
{var inst_15738 = (state_15785[15]);var inst_15747 = cljs.core.first.call(null,inst_15738);var inst_15748 = cljs.core.async.muxch_STAR_.call(null,inst_15747);var inst_15749 = cljs.core.async.close_BANG_.call(null,inst_15748);var inst_15750 = cljs.core.next.call(null,inst_15738);var inst_15724 = inst_15750;var inst_15725 = null;var inst_15726 = 0;var inst_15727 = 0;var state_15785__$1 = (function (){var statearr_15815 = state_15785;(statearr_15815[8] = inst_15724);
(statearr_15815[9] = inst_15725);
(statearr_15815[10] = inst_15726);
(statearr_15815[11] = inst_15727);
(statearr_15815[16] = inst_15749);
return statearr_15815;
})();var statearr_15816_15853 = state_15785__$1;(statearr_15816_15853[2] = null);
(statearr_15816_15853[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 18))
{var inst_15753 = (state_15785[2]);var state_15785__$1 = state_15785;var statearr_15817_15854 = state_15785__$1;(statearr_15817_15854[2] = inst_15753);
(statearr_15817_15854[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 19))
{var state_15785__$1 = state_15785;var statearr_15818_15855 = state_15785__$1;(statearr_15818_15855[2] = null);
(statearr_15818_15855[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 20))
{var state_15785__$1 = state_15785;var statearr_15819_15856 = state_15785__$1;(statearr_15819_15856[2] = null);
(statearr_15819_15856[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 21))
{var inst_15778 = (state_15785[2]);var state_15785__$1 = (function (){var statearr_15820 = state_15785;(statearr_15820[17] = inst_15778);
return statearr_15820;
})();var statearr_15821_15857 = state_15785__$1;(statearr_15821_15857[2] = null);
(statearr_15821_15857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 22))
{var inst_15775 = (state_15785[2]);var state_15785__$1 = state_15785;var statearr_15822_15858 = state_15785__$1;(statearr_15822_15858[2] = inst_15775);
(statearr_15822_15858[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 23))
{var inst_15762 = (state_15785[13]);var inst_15766 = (state_15785[2]);var inst_15767 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15762);var state_15785__$1 = (function (){var statearr_15823 = state_15785;(statearr_15823[18] = inst_15766);
return statearr_15823;
})();var statearr_15824_15859 = state_15785__$1;(statearr_15824_15859[2] = inst_15767);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15785__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15786 === 24))
{var inst_15714 = (state_15785[7]);var inst_15764 = (state_15785[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15785,23,Object,null,22);var inst_15771 = cljs.core.async.muxch_STAR_.call(null,inst_15764);var state_15785__$1 = state_15785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15785__$1,25,inst_15771,inst_15714);
} else
{if((state_val_15786 === 25))
{var inst_15773 = (state_15785[2]);var state_15785__$1 = state_15785;var statearr_15825_15860 = state_15785__$1;(statearr_15825_15860[2] = inst_15773);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15785__$1);
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
}
}
}
}
}
}
}
}
}
}
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
var state_machine__5415__auto____0 = (function (){var statearr_15829 = (new Array(19));(statearr_15829[0] = state_machine__5415__auto__);
(statearr_15829[1] = 1);
return statearr_15829;
});
var state_machine__5415__auto____1 = (function (state_15785){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_15785);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e15830){if((e15830 instanceof Object))
{var ex__5418__auto__ = e15830;var statearr_15831_15861 = state_15785;(statearr_15831_15861[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15785);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15862 = state_15785;
state_15785 = G__15862;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_15785){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_15785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_15832 = f__5485__auto__.call(null);(statearr_15832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto___15833);
return statearr_15832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5484__auto___15999 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_15969){var state_val_15970 = (state_15969[1]);if((state_val_15970 === 1))
{var state_15969__$1 = state_15969;var statearr_15971_16000 = state_15969__$1;(statearr_15971_16000[2] = null);
(statearr_15971_16000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15970 === 2))
{var inst_15932 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15933 = 0;var state_15969__$1 = (function (){var statearr_15972 = state_15969;(statearr_15972[7] = inst_15933);
(statearr_15972[8] = inst_15932);
return statearr_15972;
})();var statearr_15973_16001 = state_15969__$1;(statearr_15973_16001[2] = null);
(statearr_15973_16001[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15970 === 3))
{var inst_15967 = (state_15969[2]);var state_15969__$1 = state_15969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15969__$1,inst_15967);
} else
{if((state_val_15970 === 4))
{var inst_15933 = (state_15969[7]);var inst_15935 = (inst_15933 < cnt);var state_15969__$1 = state_15969;if(cljs.core.truth_(inst_15935))
{var statearr_15974_16002 = state_15969__$1;(statearr_15974_16002[1] = 6);
} else
{var statearr_15975_16003 = state_15969__$1;(statearr_15975_16003[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15970 === 5))
{var inst_15953 = (state_15969[2]);var state_15969__$1 = (function (){var statearr_15976 = state_15969;(statearr_15976[9] = inst_15953);
return statearr_15976;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15969__$1,12,dchan);
} else
{if((state_val_15970 === 6))
{var state_15969__$1 = state_15969;var statearr_15977_16004 = state_15969__$1;(statearr_15977_16004[2] = null);
(statearr_15977_16004[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15970 === 7))
{var state_15969__$1 = state_15969;var statearr_15978_16005 = state_15969__$1;(statearr_15978_16005[2] = null);
(statearr_15978_16005[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15970 === 8))
{var inst_15951 = (state_15969[2]);var state_15969__$1 = state_15969;var statearr_15979_16006 = state_15969__$1;(statearr_15979_16006[2] = inst_15951);
(statearr_15979_16006[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15970 === 9))
{var inst_15933 = (state_15969[7]);var inst_15946 = (state_15969[2]);var inst_15947 = (inst_15933 + 1);var inst_15933__$1 = inst_15947;var state_15969__$1 = (function (){var statearr_15980 = state_15969;(statearr_15980[7] = inst_15933__$1);
(statearr_15980[10] = inst_15946);
return statearr_15980;
})();var statearr_15981_16007 = state_15969__$1;(statearr_15981_16007[2] = null);
(statearr_15981_16007[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15970 === 10))
{var inst_15937 = (state_15969[2]);var inst_15938 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15969__$1 = (function (){var statearr_15982 = state_15969;(statearr_15982[11] = inst_15937);
return statearr_15982;
})();var statearr_15983_16008 = state_15969__$1;(statearr_15983_16008[2] = inst_15938);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15969__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15970 === 11))
{var inst_15933 = (state_15969[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15969,10,Object,null,9);var inst_15942 = chs__$1.call(null,inst_15933);var inst_15943 = done.call(null,inst_15933);var inst_15944 = cljs.core.async.take_BANG_.call(null,inst_15942,inst_15943);var state_15969__$1 = state_15969;var statearr_15984_16009 = state_15969__$1;(statearr_15984_16009[2] = inst_15944);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15969__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15970 === 12))
{var inst_15955 = (state_15969[12]);var inst_15955__$1 = (state_15969[2]);var inst_15956 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15955__$1);var state_15969__$1 = (function (){var statearr_15985 = state_15969;(statearr_15985[12] = inst_15955__$1);
return statearr_15985;
})();if(cljs.core.truth_(inst_15956))
{var statearr_15986_16010 = state_15969__$1;(statearr_15986_16010[1] = 13);
} else
{var statearr_15987_16011 = state_15969__$1;(statearr_15987_16011[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15970 === 13))
{var inst_15958 = cljs.core.async.close_BANG_.call(null,out);var state_15969__$1 = state_15969;var statearr_15988_16012 = state_15969__$1;(statearr_15988_16012[2] = inst_15958);
(statearr_15988_16012[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15970 === 14))
{var inst_15955 = (state_15969[12]);var inst_15960 = cljs.core.apply.call(null,f,inst_15955);var state_15969__$1 = state_15969;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15969__$1,16,out,inst_15960);
} else
{if((state_val_15970 === 15))
{var inst_15965 = (state_15969[2]);var state_15969__$1 = state_15969;var statearr_15989_16013 = state_15969__$1;(statearr_15989_16013[2] = inst_15965);
(statearr_15989_16013[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15970 === 16))
{var inst_15962 = (state_15969[2]);var state_15969__$1 = (function (){var statearr_15990 = state_15969;(statearr_15990[13] = inst_15962);
return statearr_15990;
})();var statearr_15991_16014 = state_15969__$1;(statearr_15991_16014[2] = null);
(statearr_15991_16014[1] = 2);
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
}
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
var state_machine__5415__auto____0 = (function (){var statearr_15995 = (new Array(14));(statearr_15995[0] = state_machine__5415__auto__);
(statearr_15995[1] = 1);
return statearr_15995;
});
var state_machine__5415__auto____1 = (function (state_15969){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_15969);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e15996){if((e15996 instanceof Object))
{var ex__5418__auto__ = e15996;var statearr_15997_16015 = state_15969;(statearr_15997_16015[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15969);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16016 = state_15969;
state_15969 = G__16016;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_15969){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_15969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_15998 = f__5485__auto__.call(null);(statearr_15998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto___15999);
return statearr_15998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5484__auto___16124 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_16100){var state_val_16101 = (state_16100[1]);if((state_val_16101 === 1))
{var inst_16071 = cljs.core.vec.call(null,chs);var inst_16072 = inst_16071;var state_16100__$1 = (function (){var statearr_16102 = state_16100;(statearr_16102[7] = inst_16072);
return statearr_16102;
})();var statearr_16103_16125 = state_16100__$1;(statearr_16103_16125[2] = null);
(statearr_16103_16125[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16101 === 2))
{var inst_16072 = (state_16100[7]);var inst_16074 = cljs.core.count.call(null,inst_16072);var inst_16075 = (inst_16074 > 0);var state_16100__$1 = state_16100;if(cljs.core.truth_(inst_16075))
{var statearr_16104_16126 = state_16100__$1;(statearr_16104_16126[1] = 4);
} else
{var statearr_16105_16127 = state_16100__$1;(statearr_16105_16127[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16101 === 3))
{var inst_16098 = (state_16100[2]);var state_16100__$1 = state_16100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16100__$1,inst_16098);
} else
{if((state_val_16101 === 4))
{var inst_16072 = (state_16100[7]);var state_16100__$1 = state_16100;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16100__$1,7,inst_16072);
} else
{if((state_val_16101 === 5))
{var inst_16094 = cljs.core.async.close_BANG_.call(null,out);var state_16100__$1 = state_16100;var statearr_16106_16128 = state_16100__$1;(statearr_16106_16128[2] = inst_16094);
(statearr_16106_16128[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16101 === 6))
{var inst_16096 = (state_16100[2]);var state_16100__$1 = state_16100;var statearr_16107_16129 = state_16100__$1;(statearr_16107_16129[2] = inst_16096);
(statearr_16107_16129[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16101 === 7))
{var inst_16080 = (state_16100[8]);var inst_16079 = (state_16100[9]);var inst_16079__$1 = (state_16100[2]);var inst_16080__$1 = cljs.core.nth.call(null,inst_16079__$1,0,null);var inst_16081 = cljs.core.nth.call(null,inst_16079__$1,1,null);var inst_16082 = (inst_16080__$1 == null);var state_16100__$1 = (function (){var statearr_16108 = state_16100;(statearr_16108[10] = inst_16081);
(statearr_16108[8] = inst_16080__$1);
(statearr_16108[9] = inst_16079__$1);
return statearr_16108;
})();if(cljs.core.truth_(inst_16082))
{var statearr_16109_16130 = state_16100__$1;(statearr_16109_16130[1] = 8);
} else
{var statearr_16110_16131 = state_16100__$1;(statearr_16110_16131[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16101 === 8))
{var inst_16081 = (state_16100[10]);var inst_16080 = (state_16100[8]);var inst_16079 = (state_16100[9]);var inst_16072 = (state_16100[7]);var inst_16084 = (function (){var c = inst_16081;var v = inst_16080;var vec__16077 = inst_16079;var cs = inst_16072;return ((function (c,v,vec__16077,cs,inst_16081,inst_16080,inst_16079,inst_16072,state_val_16101){
return (function (p1__16017_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16017_SHARP_);
});
;})(c,v,vec__16077,cs,inst_16081,inst_16080,inst_16079,inst_16072,state_val_16101))
})();var inst_16085 = cljs.core.filterv.call(null,inst_16084,inst_16072);var inst_16072__$1 = inst_16085;var state_16100__$1 = (function (){var statearr_16111 = state_16100;(statearr_16111[7] = inst_16072__$1);
return statearr_16111;
})();var statearr_16112_16132 = state_16100__$1;(statearr_16112_16132[2] = null);
(statearr_16112_16132[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16101 === 9))
{var inst_16080 = (state_16100[8]);var state_16100__$1 = state_16100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16100__$1,11,out,inst_16080);
} else
{if((state_val_16101 === 10))
{var inst_16092 = (state_16100[2]);var state_16100__$1 = state_16100;var statearr_16114_16133 = state_16100__$1;(statearr_16114_16133[2] = inst_16092);
(statearr_16114_16133[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16101 === 11))
{var inst_16072 = (state_16100[7]);var inst_16089 = (state_16100[2]);var tmp16113 = inst_16072;var inst_16072__$1 = tmp16113;var state_16100__$1 = (function (){var statearr_16115 = state_16100;(statearr_16115[7] = inst_16072__$1);
(statearr_16115[11] = inst_16089);
return statearr_16115;
})();var statearr_16116_16134 = state_16100__$1;(statearr_16116_16134[2] = null);
(statearr_16116_16134[1] = 2);
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
}
}
}
});return ((function (switch__5414__auto__){
return (function() {
var state_machine__5415__auto__ = null;
var state_machine__5415__auto____0 = (function (){var statearr_16120 = (new Array(12));(statearr_16120[0] = state_machine__5415__auto__);
(statearr_16120[1] = 1);
return statearr_16120;
});
var state_machine__5415__auto____1 = (function (state_16100){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_16100);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e16121){if((e16121 instanceof Object))
{var ex__5418__auto__ = e16121;var statearr_16122_16135 = state_16100;(statearr_16122_16135[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16100);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16136 = state_16100;
state_16100 = G__16136;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_16100){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_16100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_16123 = f__5485__auto__.call(null);(statearr_16123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto___16124);
return statearr_16123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5484__auto___16229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_16206){var state_val_16207 = (state_16206[1]);if((state_val_16207 === 1))
{var inst_16183 = 0;var state_16206__$1 = (function (){var statearr_16208 = state_16206;(statearr_16208[7] = inst_16183);
return statearr_16208;
})();var statearr_16209_16230 = state_16206__$1;(statearr_16209_16230[2] = null);
(statearr_16209_16230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16207 === 2))
{var inst_16183 = (state_16206[7]);var inst_16185 = (inst_16183 < n);var state_16206__$1 = state_16206;if(cljs.core.truth_(inst_16185))
{var statearr_16210_16231 = state_16206__$1;(statearr_16210_16231[1] = 4);
} else
{var statearr_16211_16232 = state_16206__$1;(statearr_16211_16232[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16207 === 3))
{var inst_16203 = (state_16206[2]);var inst_16204 = cljs.core.async.close_BANG_.call(null,out);var state_16206__$1 = (function (){var statearr_16212 = state_16206;(statearr_16212[8] = inst_16203);
return statearr_16212;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16206__$1,inst_16204);
} else
{if((state_val_16207 === 4))
{var state_16206__$1 = state_16206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16206__$1,7,ch);
} else
{if((state_val_16207 === 5))
{var state_16206__$1 = state_16206;var statearr_16213_16233 = state_16206__$1;(statearr_16213_16233[2] = null);
(statearr_16213_16233[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16207 === 6))
{var inst_16201 = (state_16206[2]);var state_16206__$1 = state_16206;var statearr_16214_16234 = state_16206__$1;(statearr_16214_16234[2] = inst_16201);
(statearr_16214_16234[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16207 === 7))
{var inst_16188 = (state_16206[9]);var inst_16188__$1 = (state_16206[2]);var inst_16189 = (inst_16188__$1 == null);var inst_16190 = cljs.core.not.call(null,inst_16189);var state_16206__$1 = (function (){var statearr_16215 = state_16206;(statearr_16215[9] = inst_16188__$1);
return statearr_16215;
})();if(inst_16190)
{var statearr_16216_16235 = state_16206__$1;(statearr_16216_16235[1] = 8);
} else
{var statearr_16217_16236 = state_16206__$1;(statearr_16217_16236[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16207 === 8))
{var inst_16188 = (state_16206[9]);var state_16206__$1 = state_16206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16206__$1,11,out,inst_16188);
} else
{if((state_val_16207 === 9))
{var state_16206__$1 = state_16206;var statearr_16218_16237 = state_16206__$1;(statearr_16218_16237[2] = null);
(statearr_16218_16237[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16207 === 10))
{var inst_16198 = (state_16206[2]);var state_16206__$1 = state_16206;var statearr_16219_16238 = state_16206__$1;(statearr_16219_16238[2] = inst_16198);
(statearr_16219_16238[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16207 === 11))
{var inst_16183 = (state_16206[7]);var inst_16193 = (state_16206[2]);var inst_16194 = (inst_16183 + 1);var inst_16183__$1 = inst_16194;var state_16206__$1 = (function (){var statearr_16220 = state_16206;(statearr_16220[10] = inst_16193);
(statearr_16220[7] = inst_16183__$1);
return statearr_16220;
})();var statearr_16221_16239 = state_16206__$1;(statearr_16221_16239[2] = null);
(statearr_16221_16239[1] = 2);
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
}
}
}
});return ((function (switch__5414__auto__){
return (function() {
var state_machine__5415__auto__ = null;
var state_machine__5415__auto____0 = (function (){var statearr_16225 = (new Array(11));(statearr_16225[0] = state_machine__5415__auto__);
(statearr_16225[1] = 1);
return statearr_16225;
});
var state_machine__5415__auto____1 = (function (state_16206){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_16206);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e16226){if((e16226 instanceof Object))
{var ex__5418__auto__ = e16226;var statearr_16227_16240 = state_16206;(statearr_16227_16240[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16241 = state_16206;
state_16206 = G__16241;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_16206){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_16206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_16228 = f__5485__auto__.call(null);(statearr_16228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto___16229);
return statearr_16228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5484__auto___16338 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_16313){var state_val_16314 = (state_16313[1]);if((state_val_16314 === 1))
{var inst_16290 = null;var state_16313__$1 = (function (){var statearr_16315 = state_16313;(statearr_16315[7] = inst_16290);
return statearr_16315;
})();var statearr_16316_16339 = state_16313__$1;(statearr_16316_16339[2] = null);
(statearr_16316_16339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16314 === 2))
{var state_16313__$1 = state_16313;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16313__$1,4,ch);
} else
{if((state_val_16314 === 3))
{var inst_16310 = (state_16313[2]);var inst_16311 = cljs.core.async.close_BANG_.call(null,out);var state_16313__$1 = (function (){var statearr_16317 = state_16313;(statearr_16317[8] = inst_16310);
return statearr_16317;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16313__$1,inst_16311);
} else
{if((state_val_16314 === 4))
{var inst_16293 = (state_16313[9]);var inst_16293__$1 = (state_16313[2]);var inst_16294 = (inst_16293__$1 == null);var inst_16295 = cljs.core.not.call(null,inst_16294);var state_16313__$1 = (function (){var statearr_16318 = state_16313;(statearr_16318[9] = inst_16293__$1);
return statearr_16318;
})();if(inst_16295)
{var statearr_16319_16340 = state_16313__$1;(statearr_16319_16340[1] = 5);
} else
{var statearr_16320_16341 = state_16313__$1;(statearr_16320_16341[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16314 === 5))
{var inst_16290 = (state_16313[7]);var inst_16293 = (state_16313[9]);var inst_16297 = cljs.core._EQ_.call(null,inst_16293,inst_16290);var state_16313__$1 = state_16313;if(inst_16297)
{var statearr_16321_16342 = state_16313__$1;(statearr_16321_16342[1] = 8);
} else
{var statearr_16322_16343 = state_16313__$1;(statearr_16322_16343[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16314 === 6))
{var state_16313__$1 = state_16313;var statearr_16324_16344 = state_16313__$1;(statearr_16324_16344[2] = null);
(statearr_16324_16344[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16314 === 7))
{var inst_16308 = (state_16313[2]);var state_16313__$1 = state_16313;var statearr_16325_16345 = state_16313__$1;(statearr_16325_16345[2] = inst_16308);
(statearr_16325_16345[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16314 === 8))
{var inst_16290 = (state_16313[7]);var tmp16323 = inst_16290;var inst_16290__$1 = tmp16323;var state_16313__$1 = (function (){var statearr_16326 = state_16313;(statearr_16326[7] = inst_16290__$1);
return statearr_16326;
})();var statearr_16327_16346 = state_16313__$1;(statearr_16327_16346[2] = null);
(statearr_16327_16346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16314 === 9))
{var inst_16293 = (state_16313[9]);var state_16313__$1 = state_16313;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16313__$1,11,out,inst_16293);
} else
{if((state_val_16314 === 10))
{var inst_16305 = (state_16313[2]);var state_16313__$1 = state_16313;var statearr_16328_16347 = state_16313__$1;(statearr_16328_16347[2] = inst_16305);
(statearr_16328_16347[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16314 === 11))
{var inst_16293 = (state_16313[9]);var inst_16302 = (state_16313[2]);var inst_16290 = inst_16293;var state_16313__$1 = (function (){var statearr_16329 = state_16313;(statearr_16329[7] = inst_16290);
(statearr_16329[10] = inst_16302);
return statearr_16329;
})();var statearr_16330_16348 = state_16313__$1;(statearr_16330_16348[2] = null);
(statearr_16330_16348[1] = 2);
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
}
}
}
});return ((function (switch__5414__auto__){
return (function() {
var state_machine__5415__auto__ = null;
var state_machine__5415__auto____0 = (function (){var statearr_16334 = (new Array(11));(statearr_16334[0] = state_machine__5415__auto__);
(statearr_16334[1] = 1);
return statearr_16334;
});
var state_machine__5415__auto____1 = (function (state_16313){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_16313);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e16335){if((e16335 instanceof Object))
{var ex__5418__auto__ = e16335;var statearr_16336_16349 = state_16313;(statearr_16336_16349[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16313);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16350 = state_16313;
state_16313 = G__16350;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_16313){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_16313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_16337 = f__5485__auto__.call(null);(statearr_16337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto___16338);
return statearr_16337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5484__auto___16485 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_16455){var state_val_16456 = (state_16455[1]);if((state_val_16456 === 1))
{var inst_16418 = (new Array(n));var inst_16419 = inst_16418;var inst_16420 = 0;var state_16455__$1 = (function (){var statearr_16457 = state_16455;(statearr_16457[7] = inst_16420);
(statearr_16457[8] = inst_16419);
return statearr_16457;
})();var statearr_16458_16486 = state_16455__$1;(statearr_16458_16486[2] = null);
(statearr_16458_16486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16456 === 2))
{var state_16455__$1 = state_16455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16455__$1,4,ch);
} else
{if((state_val_16456 === 3))
{var inst_16453 = (state_16455[2]);var state_16455__$1 = state_16455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16455__$1,inst_16453);
} else
{if((state_val_16456 === 4))
{var inst_16423 = (state_16455[9]);var inst_16423__$1 = (state_16455[2]);var inst_16424 = (inst_16423__$1 == null);var inst_16425 = cljs.core.not.call(null,inst_16424);var state_16455__$1 = (function (){var statearr_16459 = state_16455;(statearr_16459[9] = inst_16423__$1);
return statearr_16459;
})();if(inst_16425)
{var statearr_16460_16487 = state_16455__$1;(statearr_16460_16487[1] = 5);
} else
{var statearr_16461_16488 = state_16455__$1;(statearr_16461_16488[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16456 === 5))
{var inst_16423 = (state_16455[9]);var inst_16420 = (state_16455[7]);var inst_16428 = (state_16455[10]);var inst_16419 = (state_16455[8]);var inst_16427 = (inst_16419[inst_16420] = inst_16423);var inst_16428__$1 = (inst_16420 + 1);var inst_16429 = (inst_16428__$1 < n);var state_16455__$1 = (function (){var statearr_16462 = state_16455;(statearr_16462[10] = inst_16428__$1);
(statearr_16462[11] = inst_16427);
return statearr_16462;
})();if(cljs.core.truth_(inst_16429))
{var statearr_16463_16489 = state_16455__$1;(statearr_16463_16489[1] = 8);
} else
{var statearr_16464_16490 = state_16455__$1;(statearr_16464_16490[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16456 === 6))
{var inst_16420 = (state_16455[7]);var inst_16441 = (inst_16420 > 0);var state_16455__$1 = state_16455;if(cljs.core.truth_(inst_16441))
{var statearr_16466_16491 = state_16455__$1;(statearr_16466_16491[1] = 12);
} else
{var statearr_16467_16492 = state_16455__$1;(statearr_16467_16492[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16456 === 7))
{var inst_16451 = (state_16455[2]);var state_16455__$1 = state_16455;var statearr_16468_16493 = state_16455__$1;(statearr_16468_16493[2] = inst_16451);
(statearr_16468_16493[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16456 === 8))
{var inst_16428 = (state_16455[10]);var inst_16419 = (state_16455[8]);var tmp16465 = inst_16419;var inst_16419__$1 = tmp16465;var inst_16420 = inst_16428;var state_16455__$1 = (function (){var statearr_16469 = state_16455;(statearr_16469[7] = inst_16420);
(statearr_16469[8] = inst_16419__$1);
return statearr_16469;
})();var statearr_16470_16494 = state_16455__$1;(statearr_16470_16494[2] = null);
(statearr_16470_16494[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16456 === 9))
{var inst_16419 = (state_16455[8]);var inst_16433 = cljs.core.vec.call(null,inst_16419);var state_16455__$1 = state_16455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16455__$1,11,out,inst_16433);
} else
{if((state_val_16456 === 10))
{var inst_16439 = (state_16455[2]);var state_16455__$1 = state_16455;var statearr_16471_16495 = state_16455__$1;(statearr_16471_16495[2] = inst_16439);
(statearr_16471_16495[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16456 === 11))
{var inst_16435 = (state_16455[2]);var inst_16436 = (new Array(n));var inst_16419 = inst_16436;var inst_16420 = 0;var state_16455__$1 = (function (){var statearr_16472 = state_16455;(statearr_16472[7] = inst_16420);
(statearr_16472[12] = inst_16435);
(statearr_16472[8] = inst_16419);
return statearr_16472;
})();var statearr_16473_16496 = state_16455__$1;(statearr_16473_16496[2] = null);
(statearr_16473_16496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16456 === 12))
{var inst_16419 = (state_16455[8]);var inst_16443 = cljs.core.vec.call(null,inst_16419);var state_16455__$1 = state_16455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16455__$1,15,out,inst_16443);
} else
{if((state_val_16456 === 13))
{var state_16455__$1 = state_16455;var statearr_16474_16497 = state_16455__$1;(statearr_16474_16497[2] = null);
(statearr_16474_16497[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16456 === 14))
{var inst_16448 = (state_16455[2]);var inst_16449 = cljs.core.async.close_BANG_.call(null,out);var state_16455__$1 = (function (){var statearr_16475 = state_16455;(statearr_16475[13] = inst_16448);
return statearr_16475;
})();var statearr_16476_16498 = state_16455__$1;(statearr_16476_16498[2] = inst_16449);
(statearr_16476_16498[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16456 === 15))
{var inst_16445 = (state_16455[2]);var state_16455__$1 = state_16455;var statearr_16477_16499 = state_16455__$1;(statearr_16477_16499[2] = inst_16445);
(statearr_16477_16499[1] = 14);
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
var state_machine__5415__auto____0 = (function (){var statearr_16481 = (new Array(14));(statearr_16481[0] = state_machine__5415__auto__);
(statearr_16481[1] = 1);
return statearr_16481;
});
var state_machine__5415__auto____1 = (function (state_16455){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_16455);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e16482){if((e16482 instanceof Object))
{var ex__5418__auto__ = e16482;var statearr_16483_16500 = state_16455;(statearr_16483_16500[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16455);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16501 = state_16455;
state_16455 = G__16501;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_16455){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_16455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_16484 = f__5485__auto__.call(null);(statearr_16484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto___16485);
return statearr_16484;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5484__auto___16644 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5485__auto__ = (function (){var switch__5414__auto__ = (function (state_16614){var state_val_16615 = (state_16614[1]);if((state_val_16615 === 1))
{var inst_16573 = (new Array(0));var inst_16574 = inst_16573;var inst_16575 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16614__$1 = (function (){var statearr_16616 = state_16614;(statearr_16616[7] = inst_16574);
(statearr_16616[8] = inst_16575);
return statearr_16616;
})();var statearr_16617_16645 = state_16614__$1;(statearr_16617_16645[2] = null);
(statearr_16617_16645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 2))
{var state_16614__$1 = state_16614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16614__$1,4,ch);
} else
{if((state_val_16615 === 3))
{var inst_16612 = (state_16614[2]);var state_16614__$1 = state_16614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16614__$1,inst_16612);
} else
{if((state_val_16615 === 4))
{var inst_16578 = (state_16614[9]);var inst_16578__$1 = (state_16614[2]);var inst_16579 = (inst_16578__$1 == null);var inst_16580 = cljs.core.not.call(null,inst_16579);var state_16614__$1 = (function (){var statearr_16618 = state_16614;(statearr_16618[9] = inst_16578__$1);
return statearr_16618;
})();if(inst_16580)
{var statearr_16619_16646 = state_16614__$1;(statearr_16619_16646[1] = 5);
} else
{var statearr_16620_16647 = state_16614__$1;(statearr_16620_16647[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 5))
{var inst_16582 = (state_16614[10]);var inst_16578 = (state_16614[9]);var inst_16575 = (state_16614[8]);var inst_16582__$1 = f.call(null,inst_16578);var inst_16583 = cljs.core._EQ_.call(null,inst_16582__$1,inst_16575);var inst_16584 = cljs.core.keyword_identical_QMARK_.call(null,inst_16575,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16585 = (inst_16583) || (inst_16584);var state_16614__$1 = (function (){var statearr_16621 = state_16614;(statearr_16621[10] = inst_16582__$1);
return statearr_16621;
})();if(cljs.core.truth_(inst_16585))
{var statearr_16622_16648 = state_16614__$1;(statearr_16622_16648[1] = 8);
} else
{var statearr_16623_16649 = state_16614__$1;(statearr_16623_16649[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 6))
{var inst_16574 = (state_16614[7]);var inst_16599 = inst_16574.length;var inst_16600 = (inst_16599 > 0);var state_16614__$1 = state_16614;if(cljs.core.truth_(inst_16600))
{var statearr_16625_16650 = state_16614__$1;(statearr_16625_16650[1] = 12);
} else
{var statearr_16626_16651 = state_16614__$1;(statearr_16626_16651[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 7))
{var inst_16610 = (state_16614[2]);var state_16614__$1 = state_16614;var statearr_16627_16652 = state_16614__$1;(statearr_16627_16652[2] = inst_16610);
(statearr_16627_16652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 8))
{var inst_16582 = (state_16614[10]);var inst_16578 = (state_16614[9]);var inst_16574 = (state_16614[7]);var inst_16587 = inst_16574.push(inst_16578);var tmp16624 = inst_16574;var inst_16574__$1 = tmp16624;var inst_16575 = inst_16582;var state_16614__$1 = (function (){var statearr_16628 = state_16614;(statearr_16628[11] = inst_16587);
(statearr_16628[7] = inst_16574__$1);
(statearr_16628[8] = inst_16575);
return statearr_16628;
})();var statearr_16629_16653 = state_16614__$1;(statearr_16629_16653[2] = null);
(statearr_16629_16653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 9))
{var inst_16574 = (state_16614[7]);var inst_16590 = cljs.core.vec.call(null,inst_16574);var state_16614__$1 = state_16614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16614__$1,11,out,inst_16590);
} else
{if((state_val_16615 === 10))
{var inst_16597 = (state_16614[2]);var state_16614__$1 = state_16614;var statearr_16630_16654 = state_16614__$1;(statearr_16630_16654[2] = inst_16597);
(statearr_16630_16654[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 11))
{var inst_16582 = (state_16614[10]);var inst_16578 = (state_16614[9]);var inst_16592 = (state_16614[2]);var inst_16593 = (new Array(0));var inst_16594 = inst_16593.push(inst_16578);var inst_16574 = inst_16593;var inst_16575 = inst_16582;var state_16614__$1 = (function (){var statearr_16631 = state_16614;(statearr_16631[12] = inst_16592);
(statearr_16631[13] = inst_16594);
(statearr_16631[7] = inst_16574);
(statearr_16631[8] = inst_16575);
return statearr_16631;
})();var statearr_16632_16655 = state_16614__$1;(statearr_16632_16655[2] = null);
(statearr_16632_16655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 12))
{var inst_16574 = (state_16614[7]);var inst_16602 = cljs.core.vec.call(null,inst_16574);var state_16614__$1 = state_16614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16614__$1,15,out,inst_16602);
} else
{if((state_val_16615 === 13))
{var state_16614__$1 = state_16614;var statearr_16633_16656 = state_16614__$1;(statearr_16633_16656[2] = null);
(statearr_16633_16656[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 14))
{var inst_16607 = (state_16614[2]);var inst_16608 = cljs.core.async.close_BANG_.call(null,out);var state_16614__$1 = (function (){var statearr_16634 = state_16614;(statearr_16634[14] = inst_16607);
return statearr_16634;
})();var statearr_16635_16657 = state_16614__$1;(statearr_16635_16657[2] = inst_16608);
(statearr_16635_16657[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 15))
{var inst_16604 = (state_16614[2]);var state_16614__$1 = state_16614;var statearr_16636_16658 = state_16614__$1;(statearr_16636_16658[2] = inst_16604);
(statearr_16636_16658[1] = 14);
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
var state_machine__5415__auto____0 = (function (){var statearr_16640 = (new Array(15));(statearr_16640[0] = state_machine__5415__auto__);
(statearr_16640[1] = 1);
return statearr_16640;
});
var state_machine__5415__auto____1 = (function (state_16614){while(true){
var ret_value__5416__auto__ = (function (){try{while(true){
var result__5417__auto__ = switch__5414__auto__.call(null,state_16614);if(cljs.core.keyword_identical_QMARK_.call(null,result__5417__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5417__auto__;
}
break;
}
}catch (e16641){if((e16641 instanceof Object))
{var ex__5418__auto__ = e16641;var statearr_16642_16659 = state_16614;(statearr_16642_16659[5] = ex__5418__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16614);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16660 = state_16614;
state_16614 = G__16660;
continue;
}
} else
{return ret_value__5416__auto__;
}
break;
}
});
state_machine__5415__auto__ = function(state_16614){
switch(arguments.length){
case 0:
return state_machine__5415__auto____0.call(this);
case 1:
return state_machine__5415__auto____1.call(this,state_16614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5415__auto____0;
state_machine__5415__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5415__auto____1;
return state_machine__5415__auto__;
})()
;})(switch__5414__auto__))
})();var state__5486__auto__ = (function (){var statearr_16643 = f__5485__auto__.call(null);(statearr_16643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5484__auto___16644);
return statearr_16643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5486__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map