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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14654 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14654 = (function (f,fn_handler,meta14655){
this.f = f;
this.fn_handler = fn_handler;
this.meta14655 = meta14655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14654.cljs$lang$type = true;
cljs.core.async.t14654.cljs$lang$ctorStr = "cljs.core.async/t14654";
cljs.core.async.t14654.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14654");
});
cljs.core.async.t14654.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14656){var self__ = this;
var _14656__$1 = this;return self__.meta14655;
});
cljs.core.async.t14654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14656,meta14655__$1){var self__ = this;
var _14656__$1 = this;return (new cljs.core.async.t14654(self__.f,self__.fn_handler,meta14655__$1));
});
cljs.core.async.__GT_t14654 = (function __GT_t14654(f__$1,fn_handler__$1,meta14655){return (new cljs.core.async.t14654(f__$1,fn_handler__$1,meta14655));
});
}
return (new cljs.core.async.t14654(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14658 = buff;if(G__14658)
{var bit__3742__auto__ = null;if(cljs.core.truth_((function (){var or__3123__auto__ = bit__3742__auto__;if(cljs.core.truth_(or__3123__auto__))
{return or__3123__auto__;
} else
{return G__14658.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14658.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14658);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14658);
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
{var val_14659 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14659);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14659);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3912__auto___14660 = n;var x_14661 = 0;while(true){
if((x_14661 < n__3912__auto___14660))
{(a[x_14661] = 0);
{
var G__14662 = (x_14661 + 1);
x_14661 = G__14662;
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
var G__14663 = (i + 1);
i = G__14663;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14667 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14667 = (function (flag,alt_flag,meta14668){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14668 = meta14668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14667.cljs$lang$type = true;
cljs.core.async.t14667.cljs$lang$ctorStr = "cljs.core.async/t14667";
cljs.core.async.t14667.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14667");
});
cljs.core.async.t14667.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14667.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14667.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14669){var self__ = this;
var _14669__$1 = this;return self__.meta14668;
});
cljs.core.async.t14667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14669,meta14668__$1){var self__ = this;
var _14669__$1 = this;return (new cljs.core.async.t14667(self__.flag,self__.alt_flag,meta14668__$1));
});
cljs.core.async.__GT_t14667 = (function __GT_t14667(flag__$1,alt_flag__$1,meta14668){return (new cljs.core.async.t14667(flag__$1,alt_flag__$1,meta14668));
});
}
return (new cljs.core.async.t14667(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14673 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14673 = (function (cb,flag,alt_handler,meta14674){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14674 = meta14674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14673.cljs$lang$type = true;
cljs.core.async.t14673.cljs$lang$ctorStr = "cljs.core.async/t14673";
cljs.core.async.t14673.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14673");
});
cljs.core.async.t14673.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14675){var self__ = this;
var _14675__$1 = this;return self__.meta14674;
});
cljs.core.async.t14673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14675,meta14674__$1){var self__ = this;
var _14675__$1 = this;return (new cljs.core.async.t14673(self__.cb,self__.flag,self__.alt_handler,meta14674__$1));
});
cljs.core.async.__GT_t14673 = (function __GT_t14673(cb__$1,flag__$1,alt_handler__$1,meta14674){return (new cljs.core.async.t14673(cb__$1,flag__$1,alt_handler__$1,meta14674));
});
}
return (new cljs.core.async.t14673(cb,flag,alt_handler,null));
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
return (function (p1__14676_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__14676_SHARP_,port], true));
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
var G__14677 = (i + 1);
i = G__14677;
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
var alts_BANG___delegate = function (ports,p__14678){var map__14680 = p__14678;var map__14680__$1 = ((cljs.core.seq_QMARK_.call(null,map__14680))?cljs.core.apply.call(null,cljs.core.hash_map,map__14680):map__14680);var opts = map__14680__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14678 = null;if (arguments.length > 1) {
  p__14678 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14678);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14681){
var ports = cljs.core.first(arglist__14681);
var p__14678 = cljs.core.rest(arglist__14681);
return alts_BANG___delegate(ports,p__14678);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14689 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14689 = (function (ch,f,map_LT_,meta14690){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14690 = meta14690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14689.cljs$lang$type = true;
cljs.core.async.t14689.cljs$lang$ctorStr = "cljs.core.async/t14689";
cljs.core.async.t14689.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14689");
});
cljs.core.async.t14689.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14689.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14689.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14689.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14692 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14692 = (function (fn1,_,meta14690,ch,f,map_LT_,meta14693){
this.fn1 = fn1;
this._ = _;
this.meta14690 = meta14690;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14693 = meta14693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14692.cljs$lang$type = true;
cljs.core.async.t14692.cljs$lang$ctorStr = "cljs.core.async/t14692";
cljs.core.async.t14692.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14692");
});
cljs.core.async.t14692.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14692.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14682_SHARP_){return f1.call(null,(((p1__14682_SHARP_ == null))?null:self__.f.call(null,p1__14682_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14694){var self__ = this;
var _14694__$1 = this;return self__.meta14693;
});
cljs.core.async.t14692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14694,meta14693__$1){var self__ = this;
var _14694__$1 = this;return (new cljs.core.async.t14692(self__.fn1,self__._,self__.meta14690,self__.ch,self__.f,self__.map_LT_,meta14693__$1));
});
cljs.core.async.__GT_t14692 = (function __GT_t14692(fn1__$1,___$2,meta14690__$1,ch__$2,f__$2,map_LT___$2,meta14693){return (new cljs.core.async.t14692(fn1__$1,___$2,meta14690__$1,ch__$2,f__$2,map_LT___$2,meta14693));
});
}
return (new cljs.core.async.t14692(fn1,___$1,self__.meta14690,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14689.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14689.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14691){var self__ = this;
var _14691__$1 = this;return self__.meta14690;
});
cljs.core.async.t14689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14691,meta14690__$1){var self__ = this;
var _14691__$1 = this;return (new cljs.core.async.t14689(self__.ch,self__.f,self__.map_LT_,meta14690__$1));
});
cljs.core.async.__GT_t14689 = (function __GT_t14689(ch__$1,f__$1,map_LT___$1,meta14690){return (new cljs.core.async.t14689(ch__$1,f__$1,map_LT___$1,meta14690));
});
}
return (new cljs.core.async.t14689(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14698 = (function (ch,f,map_GT_,meta14699){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14699 = meta14699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14698.cljs$lang$type = true;
cljs.core.async.t14698.cljs$lang$ctorStr = "cljs.core.async/t14698";
cljs.core.async.t14698.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14698");
});
cljs.core.async.t14698.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14698.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14698.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14698.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14698.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14698.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14700){var self__ = this;
var _14700__$1 = this;return self__.meta14699;
});
cljs.core.async.t14698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14700,meta14699__$1){var self__ = this;
var _14700__$1 = this;return (new cljs.core.async.t14698(self__.ch,self__.f,self__.map_GT_,meta14699__$1));
});
cljs.core.async.__GT_t14698 = (function __GT_t14698(ch__$1,f__$1,map_GT___$1,meta14699){return (new cljs.core.async.t14698(ch__$1,f__$1,map_GT___$1,meta14699));
});
}
return (new cljs.core.async.t14698(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14704 = (function (ch,p,filter_GT_,meta14705){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14705 = meta14705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14704.cljs$lang$type = true;
cljs.core.async.t14704.cljs$lang$ctorStr = "cljs.core.async/t14704";
cljs.core.async.t14704.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t14704");
});
cljs.core.async.t14704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14704.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14706){var self__ = this;
var _14706__$1 = this;return self__.meta14705;
});
cljs.core.async.t14704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14706,meta14705__$1){var self__ = this;
var _14706__$1 = this;return (new cljs.core.async.t14704(self__.ch,self__.p,self__.filter_GT_,meta14705__$1));
});
cljs.core.async.__GT_t14704 = (function __GT_t14704(ch__$1,p__$1,filter_GT___$1,meta14705){return (new cljs.core.async.t14704(ch__$1,p__$1,filter_GT___$1,meta14705));
});
}
return (new cljs.core.async.t14704(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5486__auto___14789 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_14768){var state_val_14769 = (state_14768[1]);if((state_val_14769 === 1))
{var state_14768__$1 = state_14768;var statearr_14770_14790 = state_14768__$1;(statearr_14770_14790[2] = null);
(statearr_14770_14790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14769 === 2))
{var state_14768__$1 = state_14768;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14768__$1,4,ch);
} else
{if((state_val_14769 === 3))
{var inst_14766 = (state_14768[2]);var state_14768__$1 = state_14768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14768__$1,inst_14766);
} else
{if((state_val_14769 === 4))
{var inst_14750 = (state_14768[7]);var inst_14750__$1 = (state_14768[2]);var inst_14751 = (inst_14750__$1 == null);var state_14768__$1 = (function (){var statearr_14771 = state_14768;(statearr_14771[7] = inst_14750__$1);
return statearr_14771;
})();if(cljs.core.truth_(inst_14751))
{var statearr_14772_14791 = state_14768__$1;(statearr_14772_14791[1] = 5);
} else
{var statearr_14773_14792 = state_14768__$1;(statearr_14773_14792[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14769 === 5))
{var inst_14753 = cljs.core.async.close_BANG_.call(null,out);var state_14768__$1 = state_14768;var statearr_14774_14793 = state_14768__$1;(statearr_14774_14793[2] = inst_14753);
(statearr_14774_14793[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14769 === 6))
{var inst_14750 = (state_14768[7]);var inst_14755 = p.call(null,inst_14750);var state_14768__$1 = state_14768;if(cljs.core.truth_(inst_14755))
{var statearr_14775_14794 = state_14768__$1;(statearr_14775_14794[1] = 8);
} else
{var statearr_14776_14795 = state_14768__$1;(statearr_14776_14795[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14769 === 7))
{var inst_14764 = (state_14768[2]);var state_14768__$1 = state_14768;var statearr_14777_14796 = state_14768__$1;(statearr_14777_14796[2] = inst_14764);
(statearr_14777_14796[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14769 === 8))
{var inst_14750 = (state_14768[7]);var state_14768__$1 = state_14768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14768__$1,11,out,inst_14750);
} else
{if((state_val_14769 === 9))
{var state_14768__$1 = state_14768;var statearr_14778_14797 = state_14768__$1;(statearr_14778_14797[2] = null);
(statearr_14778_14797[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14769 === 10))
{var inst_14761 = (state_14768[2]);var state_14768__$1 = (function (){var statearr_14779 = state_14768;(statearr_14779[8] = inst_14761);
return statearr_14779;
})();var statearr_14780_14798 = state_14768__$1;(statearr_14780_14798[2] = null);
(statearr_14780_14798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14769 === 11))
{var inst_14758 = (state_14768[2]);var state_14768__$1 = state_14768;var statearr_14781_14799 = state_14768__$1;(statearr_14781_14799[2] = inst_14758);
(statearr_14781_14799[1] = 10);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_14785 = (new Array(9));(statearr_14785[0] = state_machine__5417__auto__);
(statearr_14785[1] = 1);
return statearr_14785;
});
var state_machine__5417__auto____1 = (function (state_14768){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_14768);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e14786){if((e14786 instanceof Object))
{var ex__5420__auto__ = e14786;var statearr_14787_14800 = state_14768;(statearr_14787_14800[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14768);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14801 = state_14768;
state_14768 = G__14801;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_14768){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_14768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_14788 = f__5487__auto__.call(null);(statearr_14788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto___14789);
return statearr_14788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5486__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_14953){var state_val_14954 = (state_14953[1]);if((state_val_14954 === 1))
{var state_14953__$1 = state_14953;var statearr_14955_14992 = state_14953__$1;(statearr_14955_14992[2] = null);
(statearr_14955_14992[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 2))
{var state_14953__$1 = state_14953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14953__$1,4,in$);
} else
{if((state_val_14954 === 3))
{var inst_14951 = (state_14953[2]);var state_14953__$1 = state_14953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14953__$1,inst_14951);
} else
{if((state_val_14954 === 4))
{var inst_14899 = (state_14953[7]);var inst_14899__$1 = (state_14953[2]);var inst_14900 = (inst_14899__$1 == null);var state_14953__$1 = (function (){var statearr_14956 = state_14953;(statearr_14956[7] = inst_14899__$1);
return statearr_14956;
})();if(cljs.core.truth_(inst_14900))
{var statearr_14957_14993 = state_14953__$1;(statearr_14957_14993[1] = 5);
} else
{var statearr_14958_14994 = state_14953__$1;(statearr_14958_14994[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 5))
{var inst_14902 = cljs.core.async.close_BANG_.call(null,out);var state_14953__$1 = state_14953;var statearr_14959_14995 = state_14953__$1;(statearr_14959_14995[2] = inst_14902);
(statearr_14959_14995[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 6))
{var inst_14899 = (state_14953[7]);var inst_14904 = f.call(null,inst_14899);var inst_14909 = cljs.core.seq.call(null,inst_14904);var inst_14910 = inst_14909;var inst_14911 = null;var inst_14912 = 0;var inst_14913 = 0;var state_14953__$1 = (function (){var statearr_14960 = state_14953;(statearr_14960[8] = inst_14910);
(statearr_14960[9] = inst_14911);
(statearr_14960[10] = inst_14912);
(statearr_14960[11] = inst_14913);
return statearr_14960;
})();var statearr_14961_14996 = state_14953__$1;(statearr_14961_14996[2] = null);
(statearr_14961_14996[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 7))
{var inst_14949 = (state_14953[2]);var state_14953__$1 = state_14953;var statearr_14962_14997 = state_14953__$1;(statearr_14962_14997[2] = inst_14949);
(statearr_14962_14997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 8))
{var inst_14912 = (state_14953[10]);var inst_14913 = (state_14953[11]);var inst_14915 = (inst_14913 < inst_14912);var inst_14916 = inst_14915;var state_14953__$1 = state_14953;if(cljs.core.truth_(inst_14916))
{var statearr_14963_14998 = state_14953__$1;(statearr_14963_14998[1] = 10);
} else
{var statearr_14964_14999 = state_14953__$1;(statearr_14964_14999[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 9))
{var inst_14946 = (state_14953[2]);var state_14953__$1 = (function (){var statearr_14965 = state_14953;(statearr_14965[12] = inst_14946);
return statearr_14965;
})();var statearr_14966_15000 = state_14953__$1;(statearr_14966_15000[2] = null);
(statearr_14966_15000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 10))
{var inst_14911 = (state_14953[9]);var inst_14913 = (state_14953[11]);var inst_14918 = cljs.core._nth.call(null,inst_14911,inst_14913);var state_14953__$1 = state_14953;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14953__$1,13,out,inst_14918);
} else
{if((state_val_14954 === 11))
{var inst_14924 = (state_14953[13]);var inst_14910 = (state_14953[8]);var inst_14924__$1 = cljs.core.seq.call(null,inst_14910);var state_14953__$1 = (function (){var statearr_14970 = state_14953;(statearr_14970[13] = inst_14924__$1);
return statearr_14970;
})();if(inst_14924__$1)
{var statearr_14971_15001 = state_14953__$1;(statearr_14971_15001[1] = 14);
} else
{var statearr_14972_15002 = state_14953__$1;(statearr_14972_15002[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 12))
{var inst_14944 = (state_14953[2]);var state_14953__$1 = state_14953;var statearr_14973_15003 = state_14953__$1;(statearr_14973_15003[2] = inst_14944);
(statearr_14973_15003[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 13))
{var inst_14910 = (state_14953[8]);var inst_14911 = (state_14953[9]);var inst_14912 = (state_14953[10]);var inst_14913 = (state_14953[11]);var inst_14920 = (state_14953[2]);var inst_14921 = (inst_14913 + 1);var tmp14967 = inst_14910;var tmp14968 = inst_14911;var tmp14969 = inst_14912;var inst_14910__$1 = tmp14967;var inst_14911__$1 = tmp14968;var inst_14912__$1 = tmp14969;var inst_14913__$1 = inst_14921;var state_14953__$1 = (function (){var statearr_14974 = state_14953;(statearr_14974[8] = inst_14910__$1);
(statearr_14974[14] = inst_14920);
(statearr_14974[9] = inst_14911__$1);
(statearr_14974[10] = inst_14912__$1);
(statearr_14974[11] = inst_14913__$1);
return statearr_14974;
})();var statearr_14975_15004 = state_14953__$1;(statearr_14975_15004[2] = null);
(statearr_14975_15004[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 14))
{var inst_14924 = (state_14953[13]);var inst_14926 = cljs.core.chunked_seq_QMARK_.call(null,inst_14924);var state_14953__$1 = state_14953;if(inst_14926)
{var statearr_14976_15005 = state_14953__$1;(statearr_14976_15005[1] = 17);
} else
{var statearr_14977_15006 = state_14953__$1;(statearr_14977_15006[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 15))
{var state_14953__$1 = state_14953;var statearr_14978_15007 = state_14953__$1;(statearr_14978_15007[2] = null);
(statearr_14978_15007[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 16))
{var inst_14942 = (state_14953[2]);var state_14953__$1 = state_14953;var statearr_14979_15008 = state_14953__$1;(statearr_14979_15008[2] = inst_14942);
(statearr_14979_15008[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 17))
{var inst_14924 = (state_14953[13]);var inst_14928 = cljs.core.chunk_first.call(null,inst_14924);var inst_14929 = cljs.core.chunk_rest.call(null,inst_14924);var inst_14930 = cljs.core.count.call(null,inst_14928);var inst_14910 = inst_14929;var inst_14911 = inst_14928;var inst_14912 = inst_14930;var inst_14913 = 0;var state_14953__$1 = (function (){var statearr_14980 = state_14953;(statearr_14980[8] = inst_14910);
(statearr_14980[9] = inst_14911);
(statearr_14980[10] = inst_14912);
(statearr_14980[11] = inst_14913);
return statearr_14980;
})();var statearr_14981_15009 = state_14953__$1;(statearr_14981_15009[2] = null);
(statearr_14981_15009[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 18))
{var inst_14924 = (state_14953[13]);var inst_14933 = cljs.core.first.call(null,inst_14924);var state_14953__$1 = state_14953;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14953__$1,20,out,inst_14933);
} else
{if((state_val_14954 === 19))
{var inst_14939 = (state_14953[2]);var state_14953__$1 = state_14953;var statearr_14982_15010 = state_14953__$1;(statearr_14982_15010[2] = inst_14939);
(statearr_14982_15010[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14954 === 20))
{var inst_14924 = (state_14953[13]);var inst_14935 = (state_14953[2]);var inst_14936 = cljs.core.next.call(null,inst_14924);var inst_14910 = inst_14936;var inst_14911 = null;var inst_14912 = 0;var inst_14913 = 0;var state_14953__$1 = (function (){var statearr_14983 = state_14953;(statearr_14983[8] = inst_14910);
(statearr_14983[9] = inst_14911);
(statearr_14983[10] = inst_14912);
(statearr_14983[11] = inst_14913);
(statearr_14983[15] = inst_14935);
return statearr_14983;
})();var statearr_14984_15011 = state_14953__$1;(statearr_14984_15011[2] = null);
(statearr_14984_15011[1] = 8);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_14988 = (new Array(16));(statearr_14988[0] = state_machine__5417__auto__);
(statearr_14988[1] = 1);
return statearr_14988;
});
var state_machine__5417__auto____1 = (function (state_14953){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_14953);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e14989){if((e14989 instanceof Object))
{var ex__5420__auto__ = e14989;var statearr_14990_15012 = state_14953;(statearr_14990_15012[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14953);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15013 = state_14953;
state_14953 = G__15013;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_14953){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_14953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_14991 = f__5487__auto__.call(null);(statearr_14991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto__);
return statearr_14991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
}));
return c__5486__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5486__auto___15094 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_15073){var state_val_15074 = (state_15073[1]);if((state_val_15074 === 1))
{var state_15073__$1 = state_15073;var statearr_15075_15095 = state_15073__$1;(statearr_15075_15095[2] = null);
(statearr_15075_15095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15074 === 2))
{var state_15073__$1 = state_15073;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15073__$1,4,from);
} else
{if((state_val_15074 === 3))
{var inst_15071 = (state_15073[2]);var state_15073__$1 = state_15073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15073__$1,inst_15071);
} else
{if((state_val_15074 === 4))
{var inst_15056 = (state_15073[7]);var inst_15056__$1 = (state_15073[2]);var inst_15057 = (inst_15056__$1 == null);var state_15073__$1 = (function (){var statearr_15076 = state_15073;(statearr_15076[7] = inst_15056__$1);
return statearr_15076;
})();if(cljs.core.truth_(inst_15057))
{var statearr_15077_15096 = state_15073__$1;(statearr_15077_15096[1] = 5);
} else
{var statearr_15078_15097 = state_15073__$1;(statearr_15078_15097[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15074 === 5))
{var state_15073__$1 = state_15073;if(cljs.core.truth_(close_QMARK_))
{var statearr_15079_15098 = state_15073__$1;(statearr_15079_15098[1] = 8);
} else
{var statearr_15080_15099 = state_15073__$1;(statearr_15080_15099[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15074 === 6))
{var inst_15056 = (state_15073[7]);var state_15073__$1 = state_15073;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15073__$1,11,to,inst_15056);
} else
{if((state_val_15074 === 7))
{var inst_15069 = (state_15073[2]);var state_15073__$1 = state_15073;var statearr_15081_15100 = state_15073__$1;(statearr_15081_15100[2] = inst_15069);
(statearr_15081_15100[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15074 === 8))
{var inst_15060 = cljs.core.async.close_BANG_.call(null,to);var state_15073__$1 = state_15073;var statearr_15082_15101 = state_15073__$1;(statearr_15082_15101[2] = inst_15060);
(statearr_15082_15101[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15074 === 9))
{var state_15073__$1 = state_15073;var statearr_15083_15102 = state_15073__$1;(statearr_15083_15102[2] = null);
(statearr_15083_15102[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15074 === 10))
{var inst_15063 = (state_15073[2]);var state_15073__$1 = state_15073;var statearr_15084_15103 = state_15073__$1;(statearr_15084_15103[2] = inst_15063);
(statearr_15084_15103[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15074 === 11))
{var inst_15066 = (state_15073[2]);var state_15073__$1 = (function (){var statearr_15085 = state_15073;(statearr_15085[8] = inst_15066);
return statearr_15085;
})();var statearr_15086_15104 = state_15073__$1;(statearr_15086_15104[2] = null);
(statearr_15086_15104[1] = 2);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_15090 = (new Array(9));(statearr_15090[0] = state_machine__5417__auto__);
(statearr_15090[1] = 1);
return statearr_15090;
});
var state_machine__5417__auto____1 = (function (state_15073){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_15073);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e15091){if((e15091 instanceof Object))
{var ex__5420__auto__ = e15091;var statearr_15092_15105 = state_15073;(statearr_15092_15105[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15073);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15106 = state_15073;
state_15073 = G__15106;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_15073){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_15073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_15093 = f__5487__auto__.call(null);(statearr_15093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto___15094);
return statearr_15093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5486__auto___15193 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_15171){var state_val_15172 = (state_15171[1]);if((state_val_15172 === 1))
{var state_15171__$1 = state_15171;var statearr_15173_15194 = state_15171__$1;(statearr_15173_15194[2] = null);
(statearr_15173_15194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 2))
{var state_15171__$1 = state_15171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15171__$1,4,ch);
} else
{if((state_val_15172 === 3))
{var inst_15169 = (state_15171[2]);var state_15171__$1 = state_15171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15171__$1,inst_15169);
} else
{if((state_val_15172 === 4))
{var inst_15152 = (state_15171[7]);var inst_15152__$1 = (state_15171[2]);var inst_15153 = (inst_15152__$1 == null);var state_15171__$1 = (function (){var statearr_15174 = state_15171;(statearr_15174[7] = inst_15152__$1);
return statearr_15174;
})();if(cljs.core.truth_(inst_15153))
{var statearr_15175_15195 = state_15171__$1;(statearr_15175_15195[1] = 5);
} else
{var statearr_15176_15196 = state_15171__$1;(statearr_15176_15196[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 5))
{var inst_15155 = cljs.core.async.close_BANG_.call(null,tc);var inst_15156 = cljs.core.async.close_BANG_.call(null,fc);var state_15171__$1 = (function (){var statearr_15177 = state_15171;(statearr_15177[8] = inst_15155);
return statearr_15177;
})();var statearr_15178_15197 = state_15171__$1;(statearr_15178_15197[2] = inst_15156);
(statearr_15178_15197[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 6))
{var inst_15152 = (state_15171[7]);var inst_15158 = p.call(null,inst_15152);var state_15171__$1 = state_15171;if(cljs.core.truth_(inst_15158))
{var statearr_15179_15198 = state_15171__$1;(statearr_15179_15198[1] = 9);
} else
{var statearr_15180_15199 = state_15171__$1;(statearr_15180_15199[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 7))
{var inst_15167 = (state_15171[2]);var state_15171__$1 = state_15171;var statearr_15181_15200 = state_15171__$1;(statearr_15181_15200[2] = inst_15167);
(statearr_15181_15200[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 8))
{var inst_15164 = (state_15171[2]);var state_15171__$1 = (function (){var statearr_15182 = state_15171;(statearr_15182[9] = inst_15164);
return statearr_15182;
})();var statearr_15183_15201 = state_15171__$1;(statearr_15183_15201[2] = null);
(statearr_15183_15201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 9))
{var state_15171__$1 = state_15171;var statearr_15184_15202 = state_15171__$1;(statearr_15184_15202[2] = tc);
(statearr_15184_15202[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 10))
{var state_15171__$1 = state_15171;var statearr_15185_15203 = state_15171__$1;(statearr_15185_15203[2] = fc);
(statearr_15185_15203[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 11))
{var inst_15152 = (state_15171[7]);var inst_15162 = (state_15171[2]);var state_15171__$1 = state_15171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15171__$1,8,inst_15162,inst_15152);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_15189 = (new Array(10));(statearr_15189[0] = state_machine__5417__auto__);
(statearr_15189[1] = 1);
return statearr_15189;
});
var state_machine__5417__auto____1 = (function (state_15171){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_15171);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e15190){if((e15190 instanceof Object))
{var ex__5420__auto__ = e15190;var statearr_15191_15204 = state_15171;(statearr_15191_15204[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15171);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15205 = state_15171;
state_15171 = G__15205;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_15171){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_15171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_15192 = f__5487__auto__.call(null);(statearr_15192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto___15193);
return statearr_15192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5486__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_15252){var state_val_15253 = (state_15252[1]);if((state_val_15253 === 7))
{var inst_15248 = (state_15252[2]);var state_15252__$1 = state_15252;var statearr_15254_15270 = state_15252__$1;(statearr_15254_15270[2] = inst_15248);
(statearr_15254_15270[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15253 === 6))
{var inst_15238 = (state_15252[7]);var inst_15241 = (state_15252[8]);var inst_15245 = f.call(null,inst_15238,inst_15241);var inst_15238__$1 = inst_15245;var state_15252__$1 = (function (){var statearr_15255 = state_15252;(statearr_15255[7] = inst_15238__$1);
return statearr_15255;
})();var statearr_15256_15271 = state_15252__$1;(statearr_15256_15271[2] = null);
(statearr_15256_15271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15253 === 5))
{var inst_15238 = (state_15252[7]);var state_15252__$1 = state_15252;var statearr_15257_15272 = state_15252__$1;(statearr_15257_15272[2] = inst_15238);
(statearr_15257_15272[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15253 === 4))
{var inst_15241 = (state_15252[8]);var inst_15241__$1 = (state_15252[2]);var inst_15242 = (inst_15241__$1 == null);var state_15252__$1 = (function (){var statearr_15258 = state_15252;(statearr_15258[8] = inst_15241__$1);
return statearr_15258;
})();if(cljs.core.truth_(inst_15242))
{var statearr_15259_15273 = state_15252__$1;(statearr_15259_15273[1] = 5);
} else
{var statearr_15260_15274 = state_15252__$1;(statearr_15260_15274[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15253 === 3))
{var inst_15250 = (state_15252[2]);var state_15252__$1 = state_15252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15252__$1,inst_15250);
} else
{if((state_val_15253 === 2))
{var state_15252__$1 = state_15252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15252__$1,4,ch);
} else
{if((state_val_15253 === 1))
{var inst_15238 = init;var state_15252__$1 = (function (){var statearr_15261 = state_15252;(statearr_15261[7] = inst_15238);
return statearr_15261;
})();var statearr_15262_15275 = state_15252__$1;(statearr_15262_15275[2] = null);
(statearr_15262_15275[1] = 2);
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
var state_machine__5417__auto____0 = (function (){var statearr_15266 = (new Array(9));(statearr_15266[0] = state_machine__5417__auto__);
(statearr_15266[1] = 1);
return statearr_15266;
});
var state_machine__5417__auto____1 = (function (state_15252){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_15252);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e15267){if((e15267 instanceof Object))
{var ex__5420__auto__ = e15267;var statearr_15268_15276 = state_15252;(statearr_15268_15276[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15252);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15277 = state_15252;
state_15252 = G__15277;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_15252){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_15252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_15269 = f__5487__auto__.call(null);(statearr_15269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto__);
return statearr_15269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
}));
return c__5486__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5486__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_15339){var state_val_15340 = (state_15339[1]);if((state_val_15340 === 1))
{var inst_15319 = cljs.core.seq.call(null,coll);var inst_15320 = inst_15319;var state_15339__$1 = (function (){var statearr_15341 = state_15339;(statearr_15341[7] = inst_15320);
return statearr_15341;
})();var statearr_15342_15360 = state_15339__$1;(statearr_15342_15360[2] = null);
(statearr_15342_15360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 2))
{var inst_15320 = (state_15339[7]);var state_15339__$1 = state_15339;if(cljs.core.truth_(inst_15320))
{var statearr_15343_15361 = state_15339__$1;(statearr_15343_15361[1] = 4);
} else
{var statearr_15344_15362 = state_15339__$1;(statearr_15344_15362[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 3))
{var inst_15337 = (state_15339[2]);var state_15339__$1 = state_15339;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15339__$1,inst_15337);
} else
{if((state_val_15340 === 4))
{var inst_15320 = (state_15339[7]);var inst_15323 = cljs.core.first.call(null,inst_15320);var state_15339__$1 = state_15339;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15339__$1,7,ch,inst_15323);
} else
{if((state_val_15340 === 5))
{var state_15339__$1 = state_15339;if(cljs.core.truth_(close_QMARK_))
{var statearr_15345_15363 = state_15339__$1;(statearr_15345_15363[1] = 8);
} else
{var statearr_15346_15364 = state_15339__$1;(statearr_15346_15364[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 6))
{var inst_15335 = (state_15339[2]);var state_15339__$1 = state_15339;var statearr_15347_15365 = state_15339__$1;(statearr_15347_15365[2] = inst_15335);
(statearr_15347_15365[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 7))
{var inst_15320 = (state_15339[7]);var inst_15325 = (state_15339[2]);var inst_15326 = cljs.core.next.call(null,inst_15320);var inst_15320__$1 = inst_15326;var state_15339__$1 = (function (){var statearr_15348 = state_15339;(statearr_15348[8] = inst_15325);
(statearr_15348[7] = inst_15320__$1);
return statearr_15348;
})();var statearr_15349_15366 = state_15339__$1;(statearr_15349_15366[2] = null);
(statearr_15349_15366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 8))
{var inst_15330 = cljs.core.async.close_BANG_.call(null,ch);var state_15339__$1 = state_15339;var statearr_15350_15367 = state_15339__$1;(statearr_15350_15367[2] = inst_15330);
(statearr_15350_15367[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 9))
{var state_15339__$1 = state_15339;var statearr_15351_15368 = state_15339__$1;(statearr_15351_15368[2] = null);
(statearr_15351_15368[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 10))
{var inst_15333 = (state_15339[2]);var state_15339__$1 = state_15339;var statearr_15352_15369 = state_15339__$1;(statearr_15352_15369[2] = inst_15333);
(statearr_15352_15369[1] = 6);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_15356 = (new Array(9));(statearr_15356[0] = state_machine__5417__auto__);
(statearr_15356[1] = 1);
return statearr_15356;
});
var state_machine__5417__auto____1 = (function (state_15339){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_15339);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e15357){if((e15357 instanceof Object))
{var ex__5420__auto__ = e15357;var statearr_15358_15370 = state_15339;(statearr_15358_15370[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15339);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15371 = state_15339;
state_15339 = G__15371;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_15339){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_15339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_15359 = f__5487__auto__.call(null);(statearr_15359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto__);
return statearr_15359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
}));
return c__5486__auto__;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15586 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15586 = (function (cs,ch,mult,meta15587){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15587 = meta15587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15586.cljs$lang$type = true;
cljs.core.async.t15586.cljs$lang$ctorStr = "cljs.core.async/t15586";
cljs.core.async.t15586.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t15586");
});})(cs))
;
cljs.core.async.t15586.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15586.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15586.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15586.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15586.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15588){var self__ = this;
var _15588__$1 = this;return self__.meta15587;
});})(cs))
;
cljs.core.async.t15586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15588,meta15587__$1){var self__ = this;
var _15588__$1 = this;return (new cljs.core.async.t15586(self__.cs,self__.ch,self__.mult,meta15587__$1));
});})(cs))
;
cljs.core.async.__GT_t15586 = ((function (cs){
return (function __GT_t15586(cs__$1,ch__$1,mult__$1,meta15587){return (new cljs.core.async.t15586(cs__$1,ch__$1,mult__$1,meta15587));
});})(cs))
;
}
return (new cljs.core.async.t15586(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5486__auto___15800 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_15718){var state_val_15719 = (state_15718[1]);if((state_val_15719 === 32))
{var inst_15667 = (state_15718[7]);var inst_15591 = (state_15718[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15718,31,Object,null,30);var inst_15674 = cljs.core.async.put_BANG_.call(null,inst_15667,inst_15591,done);var state_15718__$1 = state_15718;var statearr_15720_15801 = state_15718__$1;(statearr_15720_15801[2] = inst_15674);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15718__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 1))
{var state_15718__$1 = state_15718;var statearr_15721_15802 = state_15718__$1;(statearr_15721_15802[2] = null);
(statearr_15721_15802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 33))
{var inst_15680 = (state_15718[9]);var inst_15682 = cljs.core.chunked_seq_QMARK_.call(null,inst_15680);var state_15718__$1 = state_15718;if(inst_15682)
{var statearr_15722_15803 = state_15718__$1;(statearr_15722_15803[1] = 36);
} else
{var statearr_15723_15804 = state_15718__$1;(statearr_15723_15804[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 2))
{var state_15718__$1 = state_15718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15718__$1,4,ch);
} else
{if((state_val_15719 === 34))
{var state_15718__$1 = state_15718;var statearr_15724_15805 = state_15718__$1;(statearr_15724_15805[2] = null);
(statearr_15724_15805[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 3))
{var inst_15716 = (state_15718[2]);var state_15718__$1 = state_15718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15718__$1,inst_15716);
} else
{if((state_val_15719 === 35))
{var inst_15705 = (state_15718[2]);var state_15718__$1 = state_15718;var statearr_15725_15806 = state_15718__$1;(statearr_15725_15806[2] = inst_15705);
(statearr_15725_15806[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 4))
{var inst_15591 = (state_15718[8]);var inst_15591__$1 = (state_15718[2]);var inst_15592 = (inst_15591__$1 == null);var state_15718__$1 = (function (){var statearr_15726 = state_15718;(statearr_15726[8] = inst_15591__$1);
return statearr_15726;
})();if(cljs.core.truth_(inst_15592))
{var statearr_15727_15807 = state_15718__$1;(statearr_15727_15807[1] = 5);
} else
{var statearr_15728_15808 = state_15718__$1;(statearr_15728_15808[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 36))
{var inst_15680 = (state_15718[9]);var inst_15684 = cljs.core.chunk_first.call(null,inst_15680);var inst_15685 = cljs.core.chunk_rest.call(null,inst_15680);var inst_15686 = cljs.core.count.call(null,inst_15684);var inst_15659 = inst_15685;var inst_15660 = inst_15684;var inst_15661 = inst_15686;var inst_15662 = 0;var state_15718__$1 = (function (){var statearr_15729 = state_15718;(statearr_15729[10] = inst_15659);
(statearr_15729[11] = inst_15661);
(statearr_15729[12] = inst_15662);
(statearr_15729[13] = inst_15660);
return statearr_15729;
})();var statearr_15730_15809 = state_15718__$1;(statearr_15730_15809[2] = null);
(statearr_15730_15809[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 5))
{var inst_15598 = cljs.core.deref.call(null,cs);var inst_15599 = cljs.core.seq.call(null,inst_15598);var inst_15600 = inst_15599;var inst_15601 = null;var inst_15602 = 0;var inst_15603 = 0;var state_15718__$1 = (function (){var statearr_15731 = state_15718;(statearr_15731[14] = inst_15603);
(statearr_15731[15] = inst_15602);
(statearr_15731[16] = inst_15601);
(statearr_15731[17] = inst_15600);
return statearr_15731;
})();var statearr_15732_15810 = state_15718__$1;(statearr_15732_15810[2] = null);
(statearr_15732_15810[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 37))
{var inst_15680 = (state_15718[9]);var inst_15689 = cljs.core.first.call(null,inst_15680);var state_15718__$1 = (function (){var statearr_15733 = state_15718;(statearr_15733[18] = inst_15689);
return statearr_15733;
})();var statearr_15734_15811 = state_15718__$1;(statearr_15734_15811[2] = null);
(statearr_15734_15811[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 6))
{var inst_15650 = cljs.core.deref.call(null,cs);var inst_15651 = cljs.core.keys.call(null,inst_15650);var inst_15652 = cljs.core.count.call(null,inst_15651);var inst_15653 = cljs.core.reset_BANG_.call(null,dctr,inst_15652);var inst_15658 = cljs.core.seq.call(null,inst_15651);var inst_15659 = inst_15658;var inst_15660 = null;var inst_15661 = 0;var inst_15662 = 0;var state_15718__$1 = (function (){var statearr_15735 = state_15718;(statearr_15735[19] = inst_15653);
(statearr_15735[10] = inst_15659);
(statearr_15735[11] = inst_15661);
(statearr_15735[12] = inst_15662);
(statearr_15735[13] = inst_15660);
return statearr_15735;
})();var statearr_15736_15812 = state_15718__$1;(statearr_15736_15812[2] = null);
(statearr_15736_15812[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 38))
{var inst_15702 = (state_15718[2]);var state_15718__$1 = state_15718;var statearr_15737_15813 = state_15718__$1;(statearr_15737_15813[2] = inst_15702);
(statearr_15737_15813[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 7))
{var inst_15714 = (state_15718[2]);var state_15718__$1 = state_15718;var statearr_15738_15814 = state_15718__$1;(statearr_15738_15814[2] = inst_15714);
(statearr_15738_15814[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 39))
{var inst_15680 = (state_15718[9]);var inst_15698 = (state_15718[2]);var inst_15699 = cljs.core.next.call(null,inst_15680);var inst_15659 = inst_15699;var inst_15660 = null;var inst_15661 = 0;var inst_15662 = 0;var state_15718__$1 = (function (){var statearr_15739 = state_15718;(statearr_15739[10] = inst_15659);
(statearr_15739[11] = inst_15661);
(statearr_15739[12] = inst_15662);
(statearr_15739[13] = inst_15660);
(statearr_15739[20] = inst_15698);
return statearr_15739;
})();var statearr_15740_15815 = state_15718__$1;(statearr_15740_15815[2] = null);
(statearr_15740_15815[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 8))
{var inst_15603 = (state_15718[14]);var inst_15602 = (state_15718[15]);var inst_15605 = (inst_15603 < inst_15602);var inst_15606 = inst_15605;var state_15718__$1 = state_15718;if(cljs.core.truth_(inst_15606))
{var statearr_15741_15816 = state_15718__$1;(statearr_15741_15816[1] = 10);
} else
{var statearr_15742_15817 = state_15718__$1;(statearr_15742_15817[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 40))
{var inst_15689 = (state_15718[18]);var inst_15690 = (state_15718[2]);var inst_15691 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15692 = cljs.core.async.untap_STAR_.call(null,m,inst_15689);var state_15718__$1 = (function (){var statearr_15743 = state_15718;(statearr_15743[21] = inst_15691);
(statearr_15743[22] = inst_15690);
return statearr_15743;
})();var statearr_15744_15818 = state_15718__$1;(statearr_15744_15818[2] = inst_15692);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15718__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 9))
{var inst_15648 = (state_15718[2]);var state_15718__$1 = state_15718;var statearr_15745_15819 = state_15718__$1;(statearr_15745_15819[2] = inst_15648);
(statearr_15745_15819[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 41))
{var inst_15689 = (state_15718[18]);var inst_15591 = (state_15718[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15718,40,Object,null,39);var inst_15696 = cljs.core.async.put_BANG_.call(null,inst_15689,inst_15591,done);var state_15718__$1 = state_15718;var statearr_15746_15820 = state_15718__$1;(statearr_15746_15820[2] = inst_15696);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15718__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 10))
{var inst_15603 = (state_15718[14]);var inst_15601 = (state_15718[16]);var inst_15609 = cljs.core._nth.call(null,inst_15601,inst_15603);var inst_15610 = cljs.core.nth.call(null,inst_15609,0,null);var inst_15611 = cljs.core.nth.call(null,inst_15609,1,null);var state_15718__$1 = (function (){var statearr_15747 = state_15718;(statearr_15747[23] = inst_15610);
return statearr_15747;
})();if(cljs.core.truth_(inst_15611))
{var statearr_15748_15821 = state_15718__$1;(statearr_15748_15821[1] = 13);
} else
{var statearr_15749_15822 = state_15718__$1;(statearr_15749_15822[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 42))
{var inst_15711 = (state_15718[2]);var state_15718__$1 = (function (){var statearr_15750 = state_15718;(statearr_15750[24] = inst_15711);
return statearr_15750;
})();var statearr_15751_15823 = state_15718__$1;(statearr_15751_15823[2] = null);
(statearr_15751_15823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 11))
{var inst_15620 = (state_15718[25]);var inst_15600 = (state_15718[17]);var inst_15620__$1 = cljs.core.seq.call(null,inst_15600);var state_15718__$1 = (function (){var statearr_15752 = state_15718;(statearr_15752[25] = inst_15620__$1);
return statearr_15752;
})();if(inst_15620__$1)
{var statearr_15753_15824 = state_15718__$1;(statearr_15753_15824[1] = 16);
} else
{var statearr_15754_15825 = state_15718__$1;(statearr_15754_15825[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 12))
{var inst_15646 = (state_15718[2]);var state_15718__$1 = state_15718;var statearr_15755_15826 = state_15718__$1;(statearr_15755_15826[2] = inst_15646);
(statearr_15755_15826[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 13))
{var inst_15610 = (state_15718[23]);var inst_15613 = cljs.core.async.close_BANG_.call(null,inst_15610);var state_15718__$1 = state_15718;var statearr_15759_15827 = state_15718__$1;(statearr_15759_15827[2] = inst_15613);
(statearr_15759_15827[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 14))
{var state_15718__$1 = state_15718;var statearr_15760_15828 = state_15718__$1;(statearr_15760_15828[2] = null);
(statearr_15760_15828[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 15))
{var inst_15603 = (state_15718[14]);var inst_15602 = (state_15718[15]);var inst_15601 = (state_15718[16]);var inst_15600 = (state_15718[17]);var inst_15616 = (state_15718[2]);var inst_15617 = (inst_15603 + 1);var tmp15756 = inst_15602;var tmp15757 = inst_15601;var tmp15758 = inst_15600;var inst_15600__$1 = tmp15758;var inst_15601__$1 = tmp15757;var inst_15602__$1 = tmp15756;var inst_15603__$1 = inst_15617;var state_15718__$1 = (function (){var statearr_15761 = state_15718;(statearr_15761[26] = inst_15616);
(statearr_15761[14] = inst_15603__$1);
(statearr_15761[15] = inst_15602__$1);
(statearr_15761[16] = inst_15601__$1);
(statearr_15761[17] = inst_15600__$1);
return statearr_15761;
})();var statearr_15762_15829 = state_15718__$1;(statearr_15762_15829[2] = null);
(statearr_15762_15829[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 16))
{var inst_15620 = (state_15718[25]);var inst_15622 = cljs.core.chunked_seq_QMARK_.call(null,inst_15620);var state_15718__$1 = state_15718;if(inst_15622)
{var statearr_15763_15830 = state_15718__$1;(statearr_15763_15830[1] = 19);
} else
{var statearr_15764_15831 = state_15718__$1;(statearr_15764_15831[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 17))
{var state_15718__$1 = state_15718;var statearr_15765_15832 = state_15718__$1;(statearr_15765_15832[2] = null);
(statearr_15765_15832[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 18))
{var inst_15644 = (state_15718[2]);var state_15718__$1 = state_15718;var statearr_15766_15833 = state_15718__$1;(statearr_15766_15833[2] = inst_15644);
(statearr_15766_15833[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 19))
{var inst_15620 = (state_15718[25]);var inst_15624 = cljs.core.chunk_first.call(null,inst_15620);var inst_15625 = cljs.core.chunk_rest.call(null,inst_15620);var inst_15626 = cljs.core.count.call(null,inst_15624);var inst_15600 = inst_15625;var inst_15601 = inst_15624;var inst_15602 = inst_15626;var inst_15603 = 0;var state_15718__$1 = (function (){var statearr_15767 = state_15718;(statearr_15767[14] = inst_15603);
(statearr_15767[15] = inst_15602);
(statearr_15767[16] = inst_15601);
(statearr_15767[17] = inst_15600);
return statearr_15767;
})();var statearr_15768_15834 = state_15718__$1;(statearr_15768_15834[2] = null);
(statearr_15768_15834[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 20))
{var inst_15620 = (state_15718[25]);var inst_15630 = cljs.core.first.call(null,inst_15620);var inst_15631 = cljs.core.nth.call(null,inst_15630,0,null);var inst_15632 = cljs.core.nth.call(null,inst_15630,1,null);var state_15718__$1 = (function (){var statearr_15769 = state_15718;(statearr_15769[27] = inst_15631);
return statearr_15769;
})();if(cljs.core.truth_(inst_15632))
{var statearr_15770_15835 = state_15718__$1;(statearr_15770_15835[1] = 22);
} else
{var statearr_15771_15836 = state_15718__$1;(statearr_15771_15836[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 21))
{var inst_15641 = (state_15718[2]);var state_15718__$1 = state_15718;var statearr_15772_15837 = state_15718__$1;(statearr_15772_15837[2] = inst_15641);
(statearr_15772_15837[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 22))
{var inst_15631 = (state_15718[27]);var inst_15634 = cljs.core.async.close_BANG_.call(null,inst_15631);var state_15718__$1 = state_15718;var statearr_15773_15838 = state_15718__$1;(statearr_15773_15838[2] = inst_15634);
(statearr_15773_15838[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 23))
{var state_15718__$1 = state_15718;var statearr_15774_15839 = state_15718__$1;(statearr_15774_15839[2] = null);
(statearr_15774_15839[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 24))
{var inst_15620 = (state_15718[25]);var inst_15637 = (state_15718[2]);var inst_15638 = cljs.core.next.call(null,inst_15620);var inst_15600 = inst_15638;var inst_15601 = null;var inst_15602 = 0;var inst_15603 = 0;var state_15718__$1 = (function (){var statearr_15775 = state_15718;(statearr_15775[14] = inst_15603);
(statearr_15775[15] = inst_15602);
(statearr_15775[16] = inst_15601);
(statearr_15775[28] = inst_15637);
(statearr_15775[17] = inst_15600);
return statearr_15775;
})();var statearr_15776_15840 = state_15718__$1;(statearr_15776_15840[2] = null);
(statearr_15776_15840[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 25))
{var inst_15661 = (state_15718[11]);var inst_15662 = (state_15718[12]);var inst_15664 = (inst_15662 < inst_15661);var inst_15665 = inst_15664;var state_15718__$1 = state_15718;if(cljs.core.truth_(inst_15665))
{var statearr_15777_15841 = state_15718__$1;(statearr_15777_15841[1] = 27);
} else
{var statearr_15778_15842 = state_15718__$1;(statearr_15778_15842[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 26))
{var inst_15709 = (state_15718[2]);var state_15718__$1 = (function (){var statearr_15779 = state_15718;(statearr_15779[29] = inst_15709);
return statearr_15779;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15718__$1,42,dchan);
} else
{if((state_val_15719 === 27))
{var inst_15662 = (state_15718[12]);var inst_15660 = (state_15718[13]);var inst_15667 = cljs.core._nth.call(null,inst_15660,inst_15662);var state_15718__$1 = (function (){var statearr_15780 = state_15718;(statearr_15780[7] = inst_15667);
return statearr_15780;
})();var statearr_15781_15843 = state_15718__$1;(statearr_15781_15843[2] = null);
(statearr_15781_15843[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 28))
{var inst_15659 = (state_15718[10]);var inst_15680 = (state_15718[9]);var inst_15680__$1 = cljs.core.seq.call(null,inst_15659);var state_15718__$1 = (function (){var statearr_15785 = state_15718;(statearr_15785[9] = inst_15680__$1);
return statearr_15785;
})();if(inst_15680__$1)
{var statearr_15786_15844 = state_15718__$1;(statearr_15786_15844[1] = 33);
} else
{var statearr_15787_15845 = state_15718__$1;(statearr_15787_15845[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 29))
{var inst_15707 = (state_15718[2]);var state_15718__$1 = state_15718;var statearr_15788_15846 = state_15718__$1;(statearr_15788_15846[2] = inst_15707);
(statearr_15788_15846[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 30))
{var inst_15659 = (state_15718[10]);var inst_15661 = (state_15718[11]);var inst_15662 = (state_15718[12]);var inst_15660 = (state_15718[13]);var inst_15676 = (state_15718[2]);var inst_15677 = (inst_15662 + 1);var tmp15782 = inst_15659;var tmp15783 = inst_15661;var tmp15784 = inst_15660;var inst_15659__$1 = tmp15782;var inst_15660__$1 = tmp15784;var inst_15661__$1 = tmp15783;var inst_15662__$1 = inst_15677;var state_15718__$1 = (function (){var statearr_15789 = state_15718;(statearr_15789[10] = inst_15659__$1);
(statearr_15789[11] = inst_15661__$1);
(statearr_15789[12] = inst_15662__$1);
(statearr_15789[13] = inst_15660__$1);
(statearr_15789[30] = inst_15676);
return statearr_15789;
})();var statearr_15790_15847 = state_15718__$1;(statearr_15790_15847[2] = null);
(statearr_15790_15847[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15719 === 31))
{var inst_15667 = (state_15718[7]);var inst_15668 = (state_15718[2]);var inst_15669 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15670 = cljs.core.async.untap_STAR_.call(null,m,inst_15667);var state_15718__$1 = (function (){var statearr_15791 = state_15718;(statearr_15791[31] = inst_15668);
(statearr_15791[32] = inst_15669);
return statearr_15791;
})();var statearr_15792_15848 = state_15718__$1;(statearr_15792_15848[2] = inst_15670);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15718__$1);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_15796 = (new Array(33));(statearr_15796[0] = state_machine__5417__auto__);
(statearr_15796[1] = 1);
return statearr_15796;
});
var state_machine__5417__auto____1 = (function (state_15718){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_15718);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e15797){if((e15797 instanceof Object))
{var ex__5420__auto__ = e15797;var statearr_15798_15849 = state_15718;(statearr_15798_15849[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15718);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15850 = state_15718;
state_15718 = G__15850;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_15718){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_15718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_15799 = f__5487__auto__.call(null);(statearr_15799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto___15800);
return statearr_15799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
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
;var m = (function (){if(typeof cljs.core.async.t15960 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15960 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15961){
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
this.meta15961 = meta15961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15960.cljs$lang$type = true;
cljs.core.async.t15960.cljs$lang$ctorStr = "cljs.core.async/t15960";
cljs.core.async.t15960.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t15960");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15960.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15960.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15960.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15960.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15960.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15960.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15960.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15962){var self__ = this;
var _15962__$1 = this;return self__.meta15961;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15962,meta15961__$1){var self__ = this;
var _15962__$1 = this;return (new cljs.core.async.t15960(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15961__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15960 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15960(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15961){return (new cljs.core.async.t15960(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15961));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15960(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5486__auto___16069 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_16027){var state_val_16028 = (state_16027[1]);if((state_val_16028 === 1))
{var inst_15966 = (state_16027[7]);var inst_15966__$1 = calc_state.call(null);var inst_15967 = cljs.core.seq_QMARK_.call(null,inst_15966__$1);var state_16027__$1 = (function (){var statearr_16029 = state_16027;(statearr_16029[7] = inst_15966__$1);
return statearr_16029;
})();if(inst_15967)
{var statearr_16030_16070 = state_16027__$1;(statearr_16030_16070[1] = 2);
} else
{var statearr_16031_16071 = state_16027__$1;(statearr_16031_16071[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 2))
{var inst_15966 = (state_16027[7]);var inst_15969 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15966);var state_16027__$1 = state_16027;var statearr_16032_16072 = state_16027__$1;(statearr_16032_16072[2] = inst_15969);
(statearr_16032_16072[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 3))
{var inst_15966 = (state_16027[7]);var state_16027__$1 = state_16027;var statearr_16033_16073 = state_16027__$1;(statearr_16033_16073[2] = inst_15966);
(statearr_16033_16073[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 4))
{var inst_15966 = (state_16027[7]);var inst_15972 = (state_16027[2]);var inst_15973 = cljs.core.get.call(null,inst_15972,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15974 = cljs.core.get.call(null,inst_15972,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15975 = cljs.core.get.call(null,inst_15972,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15976 = inst_15966;var state_16027__$1 = (function (){var statearr_16034 = state_16027;(statearr_16034[8] = inst_15976);
(statearr_16034[9] = inst_15975);
(statearr_16034[10] = inst_15974);
(statearr_16034[11] = inst_15973);
return statearr_16034;
})();var statearr_16035_16074 = state_16027__$1;(statearr_16035_16074[2] = null);
(statearr_16035_16074[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 5))
{var inst_15976 = (state_16027[8]);var inst_15979 = cljs.core.seq_QMARK_.call(null,inst_15976);var state_16027__$1 = state_16027;if(inst_15979)
{var statearr_16036_16075 = state_16027__$1;(statearr_16036_16075[1] = 7);
} else
{var statearr_16037_16076 = state_16027__$1;(statearr_16037_16076[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 6))
{var inst_16025 = (state_16027[2]);var state_16027__$1 = state_16027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16027__$1,inst_16025);
} else
{if((state_val_16028 === 7))
{var inst_15976 = (state_16027[8]);var inst_15981 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15976);var state_16027__$1 = state_16027;var statearr_16038_16077 = state_16027__$1;(statearr_16038_16077[2] = inst_15981);
(statearr_16038_16077[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 8))
{var inst_15976 = (state_16027[8]);var state_16027__$1 = state_16027;var statearr_16039_16078 = state_16027__$1;(statearr_16039_16078[2] = inst_15976);
(statearr_16039_16078[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 9))
{var inst_15984 = (state_16027[12]);var inst_15984__$1 = (state_16027[2]);var inst_15985 = cljs.core.get.call(null,inst_15984__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15986 = cljs.core.get.call(null,inst_15984__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15987 = cljs.core.get.call(null,inst_15984__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16027__$1 = (function (){var statearr_16040 = state_16027;(statearr_16040[13] = inst_15987);
(statearr_16040[14] = inst_15986);
(statearr_16040[12] = inst_15984__$1);
return statearr_16040;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16027__$1,10,inst_15985);
} else
{if((state_val_16028 === 10))
{var inst_15991 = (state_16027[15]);var inst_15992 = (state_16027[16]);var inst_15990 = (state_16027[2]);var inst_15991__$1 = cljs.core.nth.call(null,inst_15990,0,null);var inst_15992__$1 = cljs.core.nth.call(null,inst_15990,1,null);var inst_15993 = (inst_15991__$1 == null);var inst_15994 = cljs.core._EQ_.call(null,inst_15992__$1,change);var inst_15995 = (inst_15993) || (inst_15994);var state_16027__$1 = (function (){var statearr_16041 = state_16027;(statearr_16041[15] = inst_15991__$1);
(statearr_16041[16] = inst_15992__$1);
return statearr_16041;
})();if(cljs.core.truth_(inst_15995))
{var statearr_16042_16079 = state_16027__$1;(statearr_16042_16079[1] = 11);
} else
{var statearr_16043_16080 = state_16027__$1;(statearr_16043_16080[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 11))
{var inst_15991 = (state_16027[15]);var inst_15997 = (inst_15991 == null);var state_16027__$1 = state_16027;if(cljs.core.truth_(inst_15997))
{var statearr_16044_16081 = state_16027__$1;(statearr_16044_16081[1] = 14);
} else
{var statearr_16045_16082 = state_16027__$1;(statearr_16045_16082[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 12))
{var inst_15987 = (state_16027[13]);var inst_15992 = (state_16027[16]);var inst_16006 = (state_16027[17]);var inst_16006__$1 = inst_15987.call(null,inst_15992);var state_16027__$1 = (function (){var statearr_16046 = state_16027;(statearr_16046[17] = inst_16006__$1);
return statearr_16046;
})();if(cljs.core.truth_(inst_16006__$1))
{var statearr_16047_16083 = state_16027__$1;(statearr_16047_16083[1] = 17);
} else
{var statearr_16048_16084 = state_16027__$1;(statearr_16048_16084[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 13))
{var inst_16023 = (state_16027[2]);var state_16027__$1 = state_16027;var statearr_16049_16085 = state_16027__$1;(statearr_16049_16085[2] = inst_16023);
(statearr_16049_16085[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 14))
{var inst_15992 = (state_16027[16]);var inst_15999 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15992);var state_16027__$1 = state_16027;var statearr_16050_16086 = state_16027__$1;(statearr_16050_16086[2] = inst_15999);
(statearr_16050_16086[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 15))
{var state_16027__$1 = state_16027;var statearr_16051_16087 = state_16027__$1;(statearr_16051_16087[2] = null);
(statearr_16051_16087[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 16))
{var inst_16002 = (state_16027[2]);var inst_16003 = calc_state.call(null);var inst_15976 = inst_16003;var state_16027__$1 = (function (){var statearr_16052 = state_16027;(statearr_16052[8] = inst_15976);
(statearr_16052[18] = inst_16002);
return statearr_16052;
})();var statearr_16053_16088 = state_16027__$1;(statearr_16053_16088[2] = null);
(statearr_16053_16088[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 17))
{var inst_16006 = (state_16027[17]);var state_16027__$1 = state_16027;var statearr_16054_16089 = state_16027__$1;(statearr_16054_16089[2] = inst_16006);
(statearr_16054_16089[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 18))
{var inst_15987 = (state_16027[13]);var inst_15986 = (state_16027[14]);var inst_15992 = (state_16027[16]);var inst_16009 = cljs.core.empty_QMARK_.call(null,inst_15987);var inst_16010 = inst_15986.call(null,inst_15992);var inst_16011 = cljs.core.not.call(null,inst_16010);var inst_16012 = (inst_16009) && (inst_16011);var state_16027__$1 = state_16027;var statearr_16055_16090 = state_16027__$1;(statearr_16055_16090[2] = inst_16012);
(statearr_16055_16090[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 19))
{var inst_16014 = (state_16027[2]);var state_16027__$1 = state_16027;if(cljs.core.truth_(inst_16014))
{var statearr_16056_16091 = state_16027__$1;(statearr_16056_16091[1] = 20);
} else
{var statearr_16057_16092 = state_16027__$1;(statearr_16057_16092[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 20))
{var inst_15991 = (state_16027[15]);var state_16027__$1 = state_16027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16027__$1,23,out,inst_15991);
} else
{if((state_val_16028 === 21))
{var state_16027__$1 = state_16027;var statearr_16058_16093 = state_16027__$1;(statearr_16058_16093[2] = null);
(statearr_16058_16093[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 22))
{var inst_15984 = (state_16027[12]);var inst_16020 = (state_16027[2]);var inst_15976 = inst_15984;var state_16027__$1 = (function (){var statearr_16059 = state_16027;(statearr_16059[19] = inst_16020);
(statearr_16059[8] = inst_15976);
return statearr_16059;
})();var statearr_16060_16094 = state_16027__$1;(statearr_16060_16094[2] = null);
(statearr_16060_16094[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16028 === 23))
{var inst_16017 = (state_16027[2]);var state_16027__$1 = state_16027;var statearr_16061_16095 = state_16027__$1;(statearr_16061_16095[2] = inst_16017);
(statearr_16061_16095[1] = 22);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_16065 = (new Array(20));(statearr_16065[0] = state_machine__5417__auto__);
(statearr_16065[1] = 1);
return statearr_16065;
});
var state_machine__5417__auto____1 = (function (state_16027){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_16027);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e16066){if((e16066 instanceof Object))
{var ex__5420__auto__ = e16066;var statearr_16067_16096 = state_16027;(statearr_16067_16096[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16027);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16097 = state_16027;
state_16027 = G__16097;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_16027){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_16027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_16068 = f__5487__auto__.call(null);(statearr_16068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto___16069);
return statearr_16068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
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
return (function (p1__16098_SHARP_){if(cljs.core.truth_(p1__16098_SHARP_.call(null,topic)))
{return p1__16098_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16098_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3123__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16223 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16223 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16224){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16224 = meta16224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16223.cljs$lang$type = true;
cljs.core.async.t16223.cljs$lang$ctorStr = "cljs.core.async/t16223";
cljs.core.async.t16223.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async/t16223");
});})(mults,ensure_mult))
;
cljs.core.async.t16223.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16223.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16223.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16223.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16223.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16223.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16225){var self__ = this;
var _16225__$1 = this;return self__.meta16224;
});})(mults,ensure_mult))
;
cljs.core.async.t16223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16225,meta16224__$1){var self__ = this;
var _16225__$1 = this;return (new cljs.core.async.t16223(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16224__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16223 = ((function (mults,ensure_mult){
return (function __GT_t16223(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16224){return (new cljs.core.async.t16223(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16224));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16223(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5486__auto___16347 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_16299){var state_val_16300 = (state_16299[1]);if((state_val_16300 === 1))
{var state_16299__$1 = state_16299;var statearr_16301_16348 = state_16299__$1;(statearr_16301_16348[2] = null);
(statearr_16301_16348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 2))
{var state_16299__$1 = state_16299;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16299__$1,4,ch);
} else
{if((state_val_16300 === 3))
{var inst_16297 = (state_16299[2]);var state_16299__$1 = state_16299;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16299__$1,inst_16297);
} else
{if((state_val_16300 === 4))
{var inst_16228 = (state_16299[7]);var inst_16228__$1 = (state_16299[2]);var inst_16229 = (inst_16228__$1 == null);var state_16299__$1 = (function (){var statearr_16302 = state_16299;(statearr_16302[7] = inst_16228__$1);
return statearr_16302;
})();if(cljs.core.truth_(inst_16229))
{var statearr_16303_16349 = state_16299__$1;(statearr_16303_16349[1] = 5);
} else
{var statearr_16304_16350 = state_16299__$1;(statearr_16304_16350[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 5))
{var inst_16235 = cljs.core.deref.call(null,mults);var inst_16236 = cljs.core.vals.call(null,inst_16235);var inst_16237 = cljs.core.seq.call(null,inst_16236);var inst_16238 = inst_16237;var inst_16239 = null;var inst_16240 = 0;var inst_16241 = 0;var state_16299__$1 = (function (){var statearr_16305 = state_16299;(statearr_16305[8] = inst_16239);
(statearr_16305[9] = inst_16238);
(statearr_16305[10] = inst_16241);
(statearr_16305[11] = inst_16240);
return statearr_16305;
})();var statearr_16306_16351 = state_16299__$1;(statearr_16306_16351[2] = null);
(statearr_16306_16351[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 6))
{var inst_16278 = (state_16299[12]);var inst_16228 = (state_16299[7]);var inst_16276 = (state_16299[13]);var inst_16276__$1 = topic_fn.call(null,inst_16228);var inst_16277 = cljs.core.deref.call(null,mults);var inst_16278__$1 = cljs.core.get.call(null,inst_16277,inst_16276__$1);var state_16299__$1 = (function (){var statearr_16307 = state_16299;(statearr_16307[12] = inst_16278__$1);
(statearr_16307[13] = inst_16276__$1);
return statearr_16307;
})();if(cljs.core.truth_(inst_16278__$1))
{var statearr_16308_16352 = state_16299__$1;(statearr_16308_16352[1] = 19);
} else
{var statearr_16309_16353 = state_16299__$1;(statearr_16309_16353[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 7))
{var inst_16295 = (state_16299[2]);var state_16299__$1 = state_16299;var statearr_16310_16354 = state_16299__$1;(statearr_16310_16354[2] = inst_16295);
(statearr_16310_16354[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 8))
{var inst_16241 = (state_16299[10]);var inst_16240 = (state_16299[11]);var inst_16243 = (inst_16241 < inst_16240);var inst_16244 = inst_16243;var state_16299__$1 = state_16299;if(cljs.core.truth_(inst_16244))
{var statearr_16314_16355 = state_16299__$1;(statearr_16314_16355[1] = 10);
} else
{var statearr_16315_16356 = state_16299__$1;(statearr_16315_16356[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 9))
{var inst_16274 = (state_16299[2]);var state_16299__$1 = state_16299;var statearr_16316_16357 = state_16299__$1;(statearr_16316_16357[2] = inst_16274);
(statearr_16316_16357[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 10))
{var inst_16239 = (state_16299[8]);var inst_16238 = (state_16299[9]);var inst_16241 = (state_16299[10]);var inst_16240 = (state_16299[11]);var inst_16246 = cljs.core._nth.call(null,inst_16239,inst_16241);var inst_16247 = cljs.core.async.muxch_STAR_.call(null,inst_16246);var inst_16248 = cljs.core.async.close_BANG_.call(null,inst_16247);var inst_16249 = (inst_16241 + 1);var tmp16311 = inst_16239;var tmp16312 = inst_16238;var tmp16313 = inst_16240;var inst_16238__$1 = tmp16312;var inst_16239__$1 = tmp16311;var inst_16240__$1 = tmp16313;var inst_16241__$1 = inst_16249;var state_16299__$1 = (function (){var statearr_16317 = state_16299;(statearr_16317[8] = inst_16239__$1);
(statearr_16317[9] = inst_16238__$1);
(statearr_16317[10] = inst_16241__$1);
(statearr_16317[11] = inst_16240__$1);
(statearr_16317[14] = inst_16248);
return statearr_16317;
})();var statearr_16318_16358 = state_16299__$1;(statearr_16318_16358[2] = null);
(statearr_16318_16358[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 11))
{var inst_16238 = (state_16299[9]);var inst_16252 = (state_16299[15]);var inst_16252__$1 = cljs.core.seq.call(null,inst_16238);var state_16299__$1 = (function (){var statearr_16319 = state_16299;(statearr_16319[15] = inst_16252__$1);
return statearr_16319;
})();if(inst_16252__$1)
{var statearr_16320_16359 = state_16299__$1;(statearr_16320_16359[1] = 13);
} else
{var statearr_16321_16360 = state_16299__$1;(statearr_16321_16360[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 12))
{var inst_16272 = (state_16299[2]);var state_16299__$1 = state_16299;var statearr_16322_16361 = state_16299__$1;(statearr_16322_16361[2] = inst_16272);
(statearr_16322_16361[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 13))
{var inst_16252 = (state_16299[15]);var inst_16254 = cljs.core.chunked_seq_QMARK_.call(null,inst_16252);var state_16299__$1 = state_16299;if(inst_16254)
{var statearr_16323_16362 = state_16299__$1;(statearr_16323_16362[1] = 16);
} else
{var statearr_16324_16363 = state_16299__$1;(statearr_16324_16363[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 14))
{var state_16299__$1 = state_16299;var statearr_16325_16364 = state_16299__$1;(statearr_16325_16364[2] = null);
(statearr_16325_16364[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 15))
{var inst_16270 = (state_16299[2]);var state_16299__$1 = state_16299;var statearr_16326_16365 = state_16299__$1;(statearr_16326_16365[2] = inst_16270);
(statearr_16326_16365[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 16))
{var inst_16252 = (state_16299[15]);var inst_16256 = cljs.core.chunk_first.call(null,inst_16252);var inst_16257 = cljs.core.chunk_rest.call(null,inst_16252);var inst_16258 = cljs.core.count.call(null,inst_16256);var inst_16238 = inst_16257;var inst_16239 = inst_16256;var inst_16240 = inst_16258;var inst_16241 = 0;var state_16299__$1 = (function (){var statearr_16327 = state_16299;(statearr_16327[8] = inst_16239);
(statearr_16327[9] = inst_16238);
(statearr_16327[10] = inst_16241);
(statearr_16327[11] = inst_16240);
return statearr_16327;
})();var statearr_16328_16366 = state_16299__$1;(statearr_16328_16366[2] = null);
(statearr_16328_16366[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 17))
{var inst_16252 = (state_16299[15]);var inst_16261 = cljs.core.first.call(null,inst_16252);var inst_16262 = cljs.core.async.muxch_STAR_.call(null,inst_16261);var inst_16263 = cljs.core.async.close_BANG_.call(null,inst_16262);var inst_16264 = cljs.core.next.call(null,inst_16252);var inst_16238 = inst_16264;var inst_16239 = null;var inst_16240 = 0;var inst_16241 = 0;var state_16299__$1 = (function (){var statearr_16329 = state_16299;(statearr_16329[16] = inst_16263);
(statearr_16329[8] = inst_16239);
(statearr_16329[9] = inst_16238);
(statearr_16329[10] = inst_16241);
(statearr_16329[11] = inst_16240);
return statearr_16329;
})();var statearr_16330_16367 = state_16299__$1;(statearr_16330_16367[2] = null);
(statearr_16330_16367[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 18))
{var inst_16267 = (state_16299[2]);var state_16299__$1 = state_16299;var statearr_16331_16368 = state_16299__$1;(statearr_16331_16368[2] = inst_16267);
(statearr_16331_16368[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 19))
{var state_16299__$1 = state_16299;var statearr_16332_16369 = state_16299__$1;(statearr_16332_16369[2] = null);
(statearr_16332_16369[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 20))
{var state_16299__$1 = state_16299;var statearr_16333_16370 = state_16299__$1;(statearr_16333_16370[2] = null);
(statearr_16333_16370[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 21))
{var inst_16292 = (state_16299[2]);var state_16299__$1 = (function (){var statearr_16334 = state_16299;(statearr_16334[17] = inst_16292);
return statearr_16334;
})();var statearr_16335_16371 = state_16299__$1;(statearr_16335_16371[2] = null);
(statearr_16335_16371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 22))
{var inst_16289 = (state_16299[2]);var state_16299__$1 = state_16299;var statearr_16336_16372 = state_16299__$1;(statearr_16336_16372[2] = inst_16289);
(statearr_16336_16372[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 23))
{var inst_16276 = (state_16299[13]);var inst_16280 = (state_16299[2]);var inst_16281 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16276);var state_16299__$1 = (function (){var statearr_16337 = state_16299;(statearr_16337[18] = inst_16280);
return statearr_16337;
})();var statearr_16338_16373 = state_16299__$1;(statearr_16338_16373[2] = inst_16281);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16299__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16300 === 24))
{var inst_16278 = (state_16299[12]);var inst_16228 = (state_16299[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16299,23,Object,null,22);var inst_16285 = cljs.core.async.muxch_STAR_.call(null,inst_16278);var state_16299__$1 = state_16299;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16299__$1,25,inst_16285,inst_16228);
} else
{if((state_val_16300 === 25))
{var inst_16287 = (state_16299[2]);var state_16299__$1 = state_16299;var statearr_16339_16374 = state_16299__$1;(statearr_16339_16374[2] = inst_16287);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16299__$1);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_16343 = (new Array(19));(statearr_16343[0] = state_machine__5417__auto__);
(statearr_16343[1] = 1);
return statearr_16343;
});
var state_machine__5417__auto____1 = (function (state_16299){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_16299);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e16344){if((e16344 instanceof Object))
{var ex__5420__auto__ = e16344;var statearr_16345_16375 = state_16299;(statearr_16345_16375[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16299);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16376 = state_16299;
state_16299 = G__16376;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_16299){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_16299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_16346 = f__5487__auto__.call(null);(statearr_16346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto___16347);
return statearr_16346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
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
,cljs.core.range.call(null,cnt));var c__5486__auto___16513 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_16483){var state_val_16484 = (state_16483[1]);if((state_val_16484 === 1))
{var state_16483__$1 = state_16483;var statearr_16485_16514 = state_16483__$1;(statearr_16485_16514[2] = null);
(statearr_16485_16514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16484 === 2))
{var inst_16446 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16447 = 0;var state_16483__$1 = (function (){var statearr_16486 = state_16483;(statearr_16486[7] = inst_16447);
(statearr_16486[8] = inst_16446);
return statearr_16486;
})();var statearr_16487_16515 = state_16483__$1;(statearr_16487_16515[2] = null);
(statearr_16487_16515[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16484 === 3))
{var inst_16481 = (state_16483[2]);var state_16483__$1 = state_16483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16483__$1,inst_16481);
} else
{if((state_val_16484 === 4))
{var inst_16447 = (state_16483[7]);var inst_16449 = (inst_16447 < cnt);var state_16483__$1 = state_16483;if(cljs.core.truth_(inst_16449))
{var statearr_16488_16516 = state_16483__$1;(statearr_16488_16516[1] = 6);
} else
{var statearr_16489_16517 = state_16483__$1;(statearr_16489_16517[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16484 === 5))
{var inst_16467 = (state_16483[2]);var state_16483__$1 = (function (){var statearr_16490 = state_16483;(statearr_16490[9] = inst_16467);
return statearr_16490;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16483__$1,12,dchan);
} else
{if((state_val_16484 === 6))
{var state_16483__$1 = state_16483;var statearr_16491_16518 = state_16483__$1;(statearr_16491_16518[2] = null);
(statearr_16491_16518[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16484 === 7))
{var state_16483__$1 = state_16483;var statearr_16492_16519 = state_16483__$1;(statearr_16492_16519[2] = null);
(statearr_16492_16519[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16484 === 8))
{var inst_16465 = (state_16483[2]);var state_16483__$1 = state_16483;var statearr_16493_16520 = state_16483__$1;(statearr_16493_16520[2] = inst_16465);
(statearr_16493_16520[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16484 === 9))
{var inst_16447 = (state_16483[7]);var inst_16460 = (state_16483[2]);var inst_16461 = (inst_16447 + 1);var inst_16447__$1 = inst_16461;var state_16483__$1 = (function (){var statearr_16494 = state_16483;(statearr_16494[10] = inst_16460);
(statearr_16494[7] = inst_16447__$1);
return statearr_16494;
})();var statearr_16495_16521 = state_16483__$1;(statearr_16495_16521[2] = null);
(statearr_16495_16521[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16484 === 10))
{var inst_16451 = (state_16483[2]);var inst_16452 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16483__$1 = (function (){var statearr_16496 = state_16483;(statearr_16496[11] = inst_16451);
return statearr_16496;
})();var statearr_16497_16522 = state_16483__$1;(statearr_16497_16522[2] = inst_16452);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16483__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16484 === 11))
{var inst_16447 = (state_16483[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16483,10,Object,null,9);var inst_16456 = chs__$1.call(null,inst_16447);var inst_16457 = done.call(null,inst_16447);var inst_16458 = cljs.core.async.take_BANG_.call(null,inst_16456,inst_16457);var state_16483__$1 = state_16483;var statearr_16498_16523 = state_16483__$1;(statearr_16498_16523[2] = inst_16458);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16483__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16484 === 12))
{var inst_16469 = (state_16483[12]);var inst_16469__$1 = (state_16483[2]);var inst_16470 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16469__$1);var state_16483__$1 = (function (){var statearr_16499 = state_16483;(statearr_16499[12] = inst_16469__$1);
return statearr_16499;
})();if(cljs.core.truth_(inst_16470))
{var statearr_16500_16524 = state_16483__$1;(statearr_16500_16524[1] = 13);
} else
{var statearr_16501_16525 = state_16483__$1;(statearr_16501_16525[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16484 === 13))
{var inst_16472 = cljs.core.async.close_BANG_.call(null,out);var state_16483__$1 = state_16483;var statearr_16502_16526 = state_16483__$1;(statearr_16502_16526[2] = inst_16472);
(statearr_16502_16526[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16484 === 14))
{var inst_16469 = (state_16483[12]);var inst_16474 = cljs.core.apply.call(null,f,inst_16469);var state_16483__$1 = state_16483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16483__$1,16,out,inst_16474);
} else
{if((state_val_16484 === 15))
{var inst_16479 = (state_16483[2]);var state_16483__$1 = state_16483;var statearr_16503_16527 = state_16483__$1;(statearr_16503_16527[2] = inst_16479);
(statearr_16503_16527[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16484 === 16))
{var inst_16476 = (state_16483[2]);var state_16483__$1 = (function (){var statearr_16504 = state_16483;(statearr_16504[13] = inst_16476);
return statearr_16504;
})();var statearr_16505_16528 = state_16483__$1;(statearr_16505_16528[2] = null);
(statearr_16505_16528[1] = 2);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_16509 = (new Array(14));(statearr_16509[0] = state_machine__5417__auto__);
(statearr_16509[1] = 1);
return statearr_16509;
});
var state_machine__5417__auto____1 = (function (state_16483){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_16483);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e16510){if((e16510 instanceof Object))
{var ex__5420__auto__ = e16510;var statearr_16511_16529 = state_16483;(statearr_16511_16529[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16510;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16530 = state_16483;
state_16483 = G__16530;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_16483){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_16483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_16512 = f__5487__auto__.call(null);(statearr_16512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto___16513);
return statearr_16512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5486__auto___16638 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_16614){var state_val_16615 = (state_16614[1]);if((state_val_16615 === 1))
{var inst_16585 = cljs.core.vec.call(null,chs);var inst_16586 = inst_16585;var state_16614__$1 = (function (){var statearr_16616 = state_16614;(statearr_16616[7] = inst_16586);
return statearr_16616;
})();var statearr_16617_16639 = state_16614__$1;(statearr_16617_16639[2] = null);
(statearr_16617_16639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 2))
{var inst_16586 = (state_16614[7]);var inst_16588 = cljs.core.count.call(null,inst_16586);var inst_16589 = (inst_16588 > 0);var state_16614__$1 = state_16614;if(cljs.core.truth_(inst_16589))
{var statearr_16618_16640 = state_16614__$1;(statearr_16618_16640[1] = 4);
} else
{var statearr_16619_16641 = state_16614__$1;(statearr_16619_16641[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 3))
{var inst_16612 = (state_16614[2]);var state_16614__$1 = state_16614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16614__$1,inst_16612);
} else
{if((state_val_16615 === 4))
{var inst_16586 = (state_16614[7]);var state_16614__$1 = state_16614;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16614__$1,7,inst_16586);
} else
{if((state_val_16615 === 5))
{var inst_16608 = cljs.core.async.close_BANG_.call(null,out);var state_16614__$1 = state_16614;var statearr_16620_16642 = state_16614__$1;(statearr_16620_16642[2] = inst_16608);
(statearr_16620_16642[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 6))
{var inst_16610 = (state_16614[2]);var state_16614__$1 = state_16614;var statearr_16621_16643 = state_16614__$1;(statearr_16621_16643[2] = inst_16610);
(statearr_16621_16643[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 7))
{var inst_16593 = (state_16614[8]);var inst_16594 = (state_16614[9]);var inst_16593__$1 = (state_16614[2]);var inst_16594__$1 = cljs.core.nth.call(null,inst_16593__$1,0,null);var inst_16595 = cljs.core.nth.call(null,inst_16593__$1,1,null);var inst_16596 = (inst_16594__$1 == null);var state_16614__$1 = (function (){var statearr_16622 = state_16614;(statearr_16622[8] = inst_16593__$1);
(statearr_16622[10] = inst_16595);
(statearr_16622[9] = inst_16594__$1);
return statearr_16622;
})();if(cljs.core.truth_(inst_16596))
{var statearr_16623_16644 = state_16614__$1;(statearr_16623_16644[1] = 8);
} else
{var statearr_16624_16645 = state_16614__$1;(statearr_16624_16645[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 8))
{var inst_16586 = (state_16614[7]);var inst_16593 = (state_16614[8]);var inst_16595 = (state_16614[10]);var inst_16594 = (state_16614[9]);var inst_16598 = (function (){var c = inst_16595;var v = inst_16594;var vec__16591 = inst_16593;var cs = inst_16586;return ((function (c,v,vec__16591,cs,inst_16586,inst_16593,inst_16595,inst_16594,state_val_16615){
return (function (p1__16531_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16531_SHARP_);
});
;})(c,v,vec__16591,cs,inst_16586,inst_16593,inst_16595,inst_16594,state_val_16615))
})();var inst_16599 = cljs.core.filterv.call(null,inst_16598,inst_16586);var inst_16586__$1 = inst_16599;var state_16614__$1 = (function (){var statearr_16625 = state_16614;(statearr_16625[7] = inst_16586__$1);
return statearr_16625;
})();var statearr_16626_16646 = state_16614__$1;(statearr_16626_16646[2] = null);
(statearr_16626_16646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 9))
{var inst_16594 = (state_16614[9]);var state_16614__$1 = state_16614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16614__$1,11,out,inst_16594);
} else
{if((state_val_16615 === 10))
{var inst_16606 = (state_16614[2]);var state_16614__$1 = state_16614;var statearr_16628_16647 = state_16614__$1;(statearr_16628_16647[2] = inst_16606);
(statearr_16628_16647[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16615 === 11))
{var inst_16586 = (state_16614[7]);var inst_16603 = (state_16614[2]);var tmp16627 = inst_16586;var inst_16586__$1 = tmp16627;var state_16614__$1 = (function (){var statearr_16629 = state_16614;(statearr_16629[7] = inst_16586__$1);
(statearr_16629[11] = inst_16603);
return statearr_16629;
})();var statearr_16630_16648 = state_16614__$1;(statearr_16630_16648[2] = null);
(statearr_16630_16648[1] = 2);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_16634 = (new Array(12));(statearr_16634[0] = state_machine__5417__auto__);
(statearr_16634[1] = 1);
return statearr_16634;
});
var state_machine__5417__auto____1 = (function (state_16614){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_16614);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e16635){if((e16635 instanceof Object))
{var ex__5420__auto__ = e16635;var statearr_16636_16649 = state_16614;(statearr_16636_16649[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16614);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16650 = state_16614;
state_16614 = G__16650;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_16614){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_16614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_16637 = f__5487__auto__.call(null);(statearr_16637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto___16638);
return statearr_16637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5486__auto___16743 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_16720){var state_val_16721 = (state_16720[1]);if((state_val_16721 === 1))
{var inst_16697 = 0;var state_16720__$1 = (function (){var statearr_16722 = state_16720;(statearr_16722[7] = inst_16697);
return statearr_16722;
})();var statearr_16723_16744 = state_16720__$1;(statearr_16723_16744[2] = null);
(statearr_16723_16744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16721 === 2))
{var inst_16697 = (state_16720[7]);var inst_16699 = (inst_16697 < n);var state_16720__$1 = state_16720;if(cljs.core.truth_(inst_16699))
{var statearr_16724_16745 = state_16720__$1;(statearr_16724_16745[1] = 4);
} else
{var statearr_16725_16746 = state_16720__$1;(statearr_16725_16746[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16721 === 3))
{var inst_16717 = (state_16720[2]);var inst_16718 = cljs.core.async.close_BANG_.call(null,out);var state_16720__$1 = (function (){var statearr_16726 = state_16720;(statearr_16726[8] = inst_16717);
return statearr_16726;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16720__$1,inst_16718);
} else
{if((state_val_16721 === 4))
{var state_16720__$1 = state_16720;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16720__$1,7,ch);
} else
{if((state_val_16721 === 5))
{var state_16720__$1 = state_16720;var statearr_16727_16747 = state_16720__$1;(statearr_16727_16747[2] = null);
(statearr_16727_16747[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16721 === 6))
{var inst_16715 = (state_16720[2]);var state_16720__$1 = state_16720;var statearr_16728_16748 = state_16720__$1;(statearr_16728_16748[2] = inst_16715);
(statearr_16728_16748[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16721 === 7))
{var inst_16702 = (state_16720[9]);var inst_16702__$1 = (state_16720[2]);var inst_16703 = (inst_16702__$1 == null);var inst_16704 = cljs.core.not.call(null,inst_16703);var state_16720__$1 = (function (){var statearr_16729 = state_16720;(statearr_16729[9] = inst_16702__$1);
return statearr_16729;
})();if(inst_16704)
{var statearr_16730_16749 = state_16720__$1;(statearr_16730_16749[1] = 8);
} else
{var statearr_16731_16750 = state_16720__$1;(statearr_16731_16750[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16721 === 8))
{var inst_16702 = (state_16720[9]);var state_16720__$1 = state_16720;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16720__$1,11,out,inst_16702);
} else
{if((state_val_16721 === 9))
{var state_16720__$1 = state_16720;var statearr_16732_16751 = state_16720__$1;(statearr_16732_16751[2] = null);
(statearr_16732_16751[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16721 === 10))
{var inst_16712 = (state_16720[2]);var state_16720__$1 = state_16720;var statearr_16733_16752 = state_16720__$1;(statearr_16733_16752[2] = inst_16712);
(statearr_16733_16752[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16721 === 11))
{var inst_16697 = (state_16720[7]);var inst_16707 = (state_16720[2]);var inst_16708 = (inst_16697 + 1);var inst_16697__$1 = inst_16708;var state_16720__$1 = (function (){var statearr_16734 = state_16720;(statearr_16734[7] = inst_16697__$1);
(statearr_16734[10] = inst_16707);
return statearr_16734;
})();var statearr_16735_16753 = state_16720__$1;(statearr_16735_16753[2] = null);
(statearr_16735_16753[1] = 2);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_16739 = (new Array(11));(statearr_16739[0] = state_machine__5417__auto__);
(statearr_16739[1] = 1);
return statearr_16739;
});
var state_machine__5417__auto____1 = (function (state_16720){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_16720);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e16740){if((e16740 instanceof Object))
{var ex__5420__auto__ = e16740;var statearr_16741_16754 = state_16720;(statearr_16741_16754[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16720);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16755 = state_16720;
state_16720 = G__16755;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_16720){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_16720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_16742 = f__5487__auto__.call(null);(statearr_16742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto___16743);
return statearr_16742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5486__auto___16852 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_16827){var state_val_16828 = (state_16827[1]);if((state_val_16828 === 1))
{var inst_16804 = null;var state_16827__$1 = (function (){var statearr_16829 = state_16827;(statearr_16829[7] = inst_16804);
return statearr_16829;
})();var statearr_16830_16853 = state_16827__$1;(statearr_16830_16853[2] = null);
(statearr_16830_16853[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16828 === 2))
{var state_16827__$1 = state_16827;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16827__$1,4,ch);
} else
{if((state_val_16828 === 3))
{var inst_16824 = (state_16827[2]);var inst_16825 = cljs.core.async.close_BANG_.call(null,out);var state_16827__$1 = (function (){var statearr_16831 = state_16827;(statearr_16831[8] = inst_16824);
return statearr_16831;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16827__$1,inst_16825);
} else
{if((state_val_16828 === 4))
{var inst_16807 = (state_16827[9]);var inst_16807__$1 = (state_16827[2]);var inst_16808 = (inst_16807__$1 == null);var inst_16809 = cljs.core.not.call(null,inst_16808);var state_16827__$1 = (function (){var statearr_16832 = state_16827;(statearr_16832[9] = inst_16807__$1);
return statearr_16832;
})();if(inst_16809)
{var statearr_16833_16854 = state_16827__$1;(statearr_16833_16854[1] = 5);
} else
{var statearr_16834_16855 = state_16827__$1;(statearr_16834_16855[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16828 === 5))
{var inst_16807 = (state_16827[9]);var inst_16804 = (state_16827[7]);var inst_16811 = cljs.core._EQ_.call(null,inst_16807,inst_16804);var state_16827__$1 = state_16827;if(inst_16811)
{var statearr_16835_16856 = state_16827__$1;(statearr_16835_16856[1] = 8);
} else
{var statearr_16836_16857 = state_16827__$1;(statearr_16836_16857[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16828 === 6))
{var state_16827__$1 = state_16827;var statearr_16838_16858 = state_16827__$1;(statearr_16838_16858[2] = null);
(statearr_16838_16858[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16828 === 7))
{var inst_16822 = (state_16827[2]);var state_16827__$1 = state_16827;var statearr_16839_16859 = state_16827__$1;(statearr_16839_16859[2] = inst_16822);
(statearr_16839_16859[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16828 === 8))
{var inst_16804 = (state_16827[7]);var tmp16837 = inst_16804;var inst_16804__$1 = tmp16837;var state_16827__$1 = (function (){var statearr_16840 = state_16827;(statearr_16840[7] = inst_16804__$1);
return statearr_16840;
})();var statearr_16841_16860 = state_16827__$1;(statearr_16841_16860[2] = null);
(statearr_16841_16860[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16828 === 9))
{var inst_16807 = (state_16827[9]);var state_16827__$1 = state_16827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16827__$1,11,out,inst_16807);
} else
{if((state_val_16828 === 10))
{var inst_16819 = (state_16827[2]);var state_16827__$1 = state_16827;var statearr_16842_16861 = state_16827__$1;(statearr_16842_16861[2] = inst_16819);
(statearr_16842_16861[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16828 === 11))
{var inst_16807 = (state_16827[9]);var inst_16816 = (state_16827[2]);var inst_16804 = inst_16807;var state_16827__$1 = (function (){var statearr_16843 = state_16827;(statearr_16843[10] = inst_16816);
(statearr_16843[7] = inst_16804);
return statearr_16843;
})();var statearr_16844_16862 = state_16827__$1;(statearr_16844_16862[2] = null);
(statearr_16844_16862[1] = 2);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_16848 = (new Array(11));(statearr_16848[0] = state_machine__5417__auto__);
(statearr_16848[1] = 1);
return statearr_16848;
});
var state_machine__5417__auto____1 = (function (state_16827){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_16827);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e16849){if((e16849 instanceof Object))
{var ex__5420__auto__ = e16849;var statearr_16850_16863 = state_16827;(statearr_16850_16863[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16827);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16864 = state_16827;
state_16827 = G__16864;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_16827){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_16827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_16851 = f__5487__auto__.call(null);(statearr_16851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto___16852);
return statearr_16851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5486__auto___16999 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_16969){var state_val_16970 = (state_16969[1]);if((state_val_16970 === 1))
{var inst_16932 = (new Array(n));var inst_16933 = inst_16932;var inst_16934 = 0;var state_16969__$1 = (function (){var statearr_16971 = state_16969;(statearr_16971[7] = inst_16934);
(statearr_16971[8] = inst_16933);
return statearr_16971;
})();var statearr_16972_17000 = state_16969__$1;(statearr_16972_17000[2] = null);
(statearr_16972_17000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16970 === 2))
{var state_16969__$1 = state_16969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16969__$1,4,ch);
} else
{if((state_val_16970 === 3))
{var inst_16967 = (state_16969[2]);var state_16969__$1 = state_16969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16969__$1,inst_16967);
} else
{if((state_val_16970 === 4))
{var inst_16937 = (state_16969[9]);var inst_16937__$1 = (state_16969[2]);var inst_16938 = (inst_16937__$1 == null);var inst_16939 = cljs.core.not.call(null,inst_16938);var state_16969__$1 = (function (){var statearr_16973 = state_16969;(statearr_16973[9] = inst_16937__$1);
return statearr_16973;
})();if(inst_16939)
{var statearr_16974_17001 = state_16969__$1;(statearr_16974_17001[1] = 5);
} else
{var statearr_16975_17002 = state_16969__$1;(statearr_16975_17002[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16970 === 5))
{var inst_16934 = (state_16969[7]);var inst_16942 = (state_16969[10]);var inst_16937 = (state_16969[9]);var inst_16933 = (state_16969[8]);var inst_16941 = (inst_16933[inst_16934] = inst_16937);var inst_16942__$1 = (inst_16934 + 1);var inst_16943 = (inst_16942__$1 < n);var state_16969__$1 = (function (){var statearr_16976 = state_16969;(statearr_16976[10] = inst_16942__$1);
(statearr_16976[11] = inst_16941);
return statearr_16976;
})();if(cljs.core.truth_(inst_16943))
{var statearr_16977_17003 = state_16969__$1;(statearr_16977_17003[1] = 8);
} else
{var statearr_16978_17004 = state_16969__$1;(statearr_16978_17004[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16970 === 6))
{var inst_16934 = (state_16969[7]);var inst_16955 = (inst_16934 > 0);var state_16969__$1 = state_16969;if(cljs.core.truth_(inst_16955))
{var statearr_16980_17005 = state_16969__$1;(statearr_16980_17005[1] = 12);
} else
{var statearr_16981_17006 = state_16969__$1;(statearr_16981_17006[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16970 === 7))
{var inst_16965 = (state_16969[2]);var state_16969__$1 = state_16969;var statearr_16982_17007 = state_16969__$1;(statearr_16982_17007[2] = inst_16965);
(statearr_16982_17007[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16970 === 8))
{var inst_16942 = (state_16969[10]);var inst_16933 = (state_16969[8]);var tmp16979 = inst_16933;var inst_16933__$1 = tmp16979;var inst_16934 = inst_16942;var state_16969__$1 = (function (){var statearr_16983 = state_16969;(statearr_16983[7] = inst_16934);
(statearr_16983[8] = inst_16933__$1);
return statearr_16983;
})();var statearr_16984_17008 = state_16969__$1;(statearr_16984_17008[2] = null);
(statearr_16984_17008[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16970 === 9))
{var inst_16933 = (state_16969[8]);var inst_16947 = cljs.core.vec.call(null,inst_16933);var state_16969__$1 = state_16969;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16969__$1,11,out,inst_16947);
} else
{if((state_val_16970 === 10))
{var inst_16953 = (state_16969[2]);var state_16969__$1 = state_16969;var statearr_16985_17009 = state_16969__$1;(statearr_16985_17009[2] = inst_16953);
(statearr_16985_17009[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16970 === 11))
{var inst_16949 = (state_16969[2]);var inst_16950 = (new Array(n));var inst_16933 = inst_16950;var inst_16934 = 0;var state_16969__$1 = (function (){var statearr_16986 = state_16969;(statearr_16986[7] = inst_16934);
(statearr_16986[8] = inst_16933);
(statearr_16986[12] = inst_16949);
return statearr_16986;
})();var statearr_16987_17010 = state_16969__$1;(statearr_16987_17010[2] = null);
(statearr_16987_17010[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16970 === 12))
{var inst_16933 = (state_16969[8]);var inst_16957 = cljs.core.vec.call(null,inst_16933);var state_16969__$1 = state_16969;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16969__$1,15,out,inst_16957);
} else
{if((state_val_16970 === 13))
{var state_16969__$1 = state_16969;var statearr_16988_17011 = state_16969__$1;(statearr_16988_17011[2] = null);
(statearr_16988_17011[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16970 === 14))
{var inst_16962 = (state_16969[2]);var inst_16963 = cljs.core.async.close_BANG_.call(null,out);var state_16969__$1 = (function (){var statearr_16989 = state_16969;(statearr_16989[13] = inst_16962);
return statearr_16989;
})();var statearr_16990_17012 = state_16969__$1;(statearr_16990_17012[2] = inst_16963);
(statearr_16990_17012[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16970 === 15))
{var inst_16959 = (state_16969[2]);var state_16969__$1 = state_16969;var statearr_16991_17013 = state_16969__$1;(statearr_16991_17013[2] = inst_16959);
(statearr_16991_17013[1] = 14);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_16995 = (new Array(14));(statearr_16995[0] = state_machine__5417__auto__);
(statearr_16995[1] = 1);
return statearr_16995;
});
var state_machine__5417__auto____1 = (function (state_16969){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_16969);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e16996){if((e16996 instanceof Object))
{var ex__5420__auto__ = e16996;var statearr_16997_17014 = state_16969;(statearr_16997_17014[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16969);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17015 = state_16969;
state_16969 = G__17015;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_16969){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_16969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_16998 = f__5487__auto__.call(null);(statearr_16998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto___16999);
return statearr_16998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5486__auto___17158 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5487__auto__ = (function (){var switch__5416__auto__ = (function (state_17128){var state_val_17129 = (state_17128[1]);if((state_val_17129 === 1))
{var inst_17087 = (new Array(0));var inst_17088 = inst_17087;var inst_17089 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17128__$1 = (function (){var statearr_17130 = state_17128;(statearr_17130[7] = inst_17088);
(statearr_17130[8] = inst_17089);
return statearr_17130;
})();var statearr_17131_17159 = state_17128__$1;(statearr_17131_17159[2] = null);
(statearr_17131_17159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17129 === 2))
{var state_17128__$1 = state_17128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17128__$1,4,ch);
} else
{if((state_val_17129 === 3))
{var inst_17126 = (state_17128[2]);var state_17128__$1 = state_17128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17128__$1,inst_17126);
} else
{if((state_val_17129 === 4))
{var inst_17092 = (state_17128[9]);var inst_17092__$1 = (state_17128[2]);var inst_17093 = (inst_17092__$1 == null);var inst_17094 = cljs.core.not.call(null,inst_17093);var state_17128__$1 = (function (){var statearr_17132 = state_17128;(statearr_17132[9] = inst_17092__$1);
return statearr_17132;
})();if(inst_17094)
{var statearr_17133_17160 = state_17128__$1;(statearr_17133_17160[1] = 5);
} else
{var statearr_17134_17161 = state_17128__$1;(statearr_17134_17161[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17129 === 5))
{var inst_17092 = (state_17128[9]);var inst_17096 = (state_17128[10]);var inst_17089 = (state_17128[8]);var inst_17096__$1 = f.call(null,inst_17092);var inst_17097 = cljs.core._EQ_.call(null,inst_17096__$1,inst_17089);var inst_17098 = cljs.core.keyword_identical_QMARK_.call(null,inst_17089,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17099 = (inst_17097) || (inst_17098);var state_17128__$1 = (function (){var statearr_17135 = state_17128;(statearr_17135[10] = inst_17096__$1);
return statearr_17135;
})();if(cljs.core.truth_(inst_17099))
{var statearr_17136_17162 = state_17128__$1;(statearr_17136_17162[1] = 8);
} else
{var statearr_17137_17163 = state_17128__$1;(statearr_17137_17163[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17129 === 6))
{var inst_17088 = (state_17128[7]);var inst_17113 = inst_17088.length;var inst_17114 = (inst_17113 > 0);var state_17128__$1 = state_17128;if(cljs.core.truth_(inst_17114))
{var statearr_17139_17164 = state_17128__$1;(statearr_17139_17164[1] = 12);
} else
{var statearr_17140_17165 = state_17128__$1;(statearr_17140_17165[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17129 === 7))
{var inst_17124 = (state_17128[2]);var state_17128__$1 = state_17128;var statearr_17141_17166 = state_17128__$1;(statearr_17141_17166[2] = inst_17124);
(statearr_17141_17166[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17129 === 8))
{var inst_17092 = (state_17128[9]);var inst_17096 = (state_17128[10]);var inst_17088 = (state_17128[7]);var inst_17101 = inst_17088.push(inst_17092);var tmp17138 = inst_17088;var inst_17088__$1 = tmp17138;var inst_17089 = inst_17096;var state_17128__$1 = (function (){var statearr_17142 = state_17128;(statearr_17142[7] = inst_17088__$1);
(statearr_17142[8] = inst_17089);
(statearr_17142[11] = inst_17101);
return statearr_17142;
})();var statearr_17143_17167 = state_17128__$1;(statearr_17143_17167[2] = null);
(statearr_17143_17167[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17129 === 9))
{var inst_17088 = (state_17128[7]);var inst_17104 = cljs.core.vec.call(null,inst_17088);var state_17128__$1 = state_17128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17128__$1,11,out,inst_17104);
} else
{if((state_val_17129 === 10))
{var inst_17111 = (state_17128[2]);var state_17128__$1 = state_17128;var statearr_17144_17168 = state_17128__$1;(statearr_17144_17168[2] = inst_17111);
(statearr_17144_17168[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17129 === 11))
{var inst_17092 = (state_17128[9]);var inst_17096 = (state_17128[10]);var inst_17106 = (state_17128[2]);var inst_17107 = (new Array(0));var inst_17108 = inst_17107.push(inst_17092);var inst_17088 = inst_17107;var inst_17089 = inst_17096;var state_17128__$1 = (function (){var statearr_17145 = state_17128;(statearr_17145[7] = inst_17088);
(statearr_17145[8] = inst_17089);
(statearr_17145[12] = inst_17108);
(statearr_17145[13] = inst_17106);
return statearr_17145;
})();var statearr_17146_17169 = state_17128__$1;(statearr_17146_17169[2] = null);
(statearr_17146_17169[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17129 === 12))
{var inst_17088 = (state_17128[7]);var inst_17116 = cljs.core.vec.call(null,inst_17088);var state_17128__$1 = state_17128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17128__$1,15,out,inst_17116);
} else
{if((state_val_17129 === 13))
{var state_17128__$1 = state_17128;var statearr_17147_17170 = state_17128__$1;(statearr_17147_17170[2] = null);
(statearr_17147_17170[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17129 === 14))
{var inst_17121 = (state_17128[2]);var inst_17122 = cljs.core.async.close_BANG_.call(null,out);var state_17128__$1 = (function (){var statearr_17148 = state_17128;(statearr_17148[14] = inst_17121);
return statearr_17148;
})();var statearr_17149_17171 = state_17128__$1;(statearr_17149_17171[2] = inst_17122);
(statearr_17149_17171[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17129 === 15))
{var inst_17118 = (state_17128[2]);var state_17128__$1 = state_17128;var statearr_17150_17172 = state_17128__$1;(statearr_17150_17172[2] = inst_17118);
(statearr_17150_17172[1] = 14);
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
});return ((function (switch__5416__auto__){
return (function() {
var state_machine__5417__auto__ = null;
var state_machine__5417__auto____0 = (function (){var statearr_17154 = (new Array(15));(statearr_17154[0] = state_machine__5417__auto__);
(statearr_17154[1] = 1);
return statearr_17154;
});
var state_machine__5417__auto____1 = (function (state_17128){while(true){
var ret_value__5418__auto__ = (function (){try{while(true){
var result__5419__auto__ = switch__5416__auto__.call(null,state_17128);if(cljs.core.keyword_identical_QMARK_.call(null,result__5419__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5419__auto__;
}
break;
}
}catch (e17155){if((e17155 instanceof Object))
{var ex__5420__auto__ = e17155;var statearr_17156_17173 = state_17128;(statearr_17156_17173[5] = ex__5420__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17128);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5418__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17174 = state_17128;
state_17128 = G__17174;
continue;
}
} else
{return ret_value__5418__auto__;
}
break;
}
});
state_machine__5417__auto__ = function(state_17128){
switch(arguments.length){
case 0:
return state_machine__5417__auto____0.call(this);
case 1:
return state_machine__5417__auto____1.call(this,state_17128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5417__auto____0;
state_machine__5417__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5417__auto____1;
return state_machine__5417__auto__;
})()
;})(switch__5416__auto__))
})();var state__5488__auto__ = (function (){var statearr_17157 = f__5487__auto__.call(null);(statearr_17157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5486__auto___17158);
return statearr_17157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5488__auto__);
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