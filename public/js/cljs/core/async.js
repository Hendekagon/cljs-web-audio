// Compiled by ClojureScript 0.0-2173
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9937 = (function (f,fn_handler,meta9938){
this.f = f;
this.fn_handler = fn_handler;
this.meta9938 = meta9938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9937.cljs$lang$type = true;
cljs.core.async.t9937.cljs$lang$ctorStr = "cljs.core.async/t9937";
cljs.core.async.t9937.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9937");
});
cljs.core.async.t9937.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9939){var self__ = this;
var _9939__$1 = this;return self__.meta9938;
});
cljs.core.async.t9937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9939,meta9938__$1){var self__ = this;
var _9939__$1 = this;return (new cljs.core.async.t9937(self__.f,self__.fn_handler,meta9938__$1));
});
cljs.core.async.__GT_t9937 = (function __GT_t9937(f__$1,fn_handler__$1,meta9938){return (new cljs.core.async.t9937(f__$1,fn_handler__$1,meta9938));
});
}
return (new cljs.core.async.t9937(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9941 = buff;if(G__9941)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__9941.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9941.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9941);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9941);
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
{var val_9942 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9942);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9942);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___9943 = n;var x_9944 = 0;while(true){
if((x_9944 < n__4289__auto___9943))
{(a[x_9944] = 0);
{
var G__9945 = (x_9944 + 1);
x_9944 = G__9945;
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
var G__9946 = (i + 1);
i = G__9946;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9950 = (function (flag,alt_flag,meta9951){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9951 = meta9951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9950.cljs$lang$type = true;
cljs.core.async.t9950.cljs$lang$ctorStr = "cljs.core.async/t9950";
cljs.core.async.t9950.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9950");
});
cljs.core.async.t9950.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9950.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9950.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9952){var self__ = this;
var _9952__$1 = this;return self__.meta9951;
});
cljs.core.async.t9950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9952,meta9951__$1){var self__ = this;
var _9952__$1 = this;return (new cljs.core.async.t9950(self__.flag,self__.alt_flag,meta9951__$1));
});
cljs.core.async.__GT_t9950 = (function __GT_t9950(flag__$1,alt_flag__$1,meta9951){return (new cljs.core.async.t9950(flag__$1,alt_flag__$1,meta9951));
});
}
return (new cljs.core.async.t9950(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9956 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9956 = (function (cb,flag,alt_handler,meta9957){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9957 = meta9957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9956.cljs$lang$type = true;
cljs.core.async.t9956.cljs$lang$ctorStr = "cljs.core.async/t9956";
cljs.core.async.t9956.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9956");
});
cljs.core.async.t9956.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9956.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9956.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9958){var self__ = this;
var _9958__$1 = this;return self__.meta9957;
});
cljs.core.async.t9956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9958,meta9957__$1){var self__ = this;
var _9958__$1 = this;return (new cljs.core.async.t9956(self__.cb,self__.flag,self__.alt_handler,meta9957__$1));
});
cljs.core.async.__GT_t9956 = (function __GT_t9956(cb__$1,flag__$1,alt_handler__$1,meta9957){return (new cljs.core.async.t9956(cb__$1,flag__$1,alt_handler__$1,meta9957));
});
}
return (new cljs.core.async.t9956(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9959_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9959_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9960 = (i + 1);
i = G__9960;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3429__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__9961){var map__9963 = p__9961;var map__9963__$1 = ((cljs.core.seq_QMARK_.call(null,map__9963))?cljs.core.apply.call(null,cljs.core.hash_map,map__9963):map__9963);var opts = map__9963__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9961 = null;if (arguments.length > 1) {
  p__9961 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9961);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9964){
var ports = cljs.core.first(arglist__9964);
var p__9961 = cljs.core.rest(arglist__9964);
return alts_BANG___delegate(ports,p__9961);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9972 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9972 = (function (ch,f,map_LT_,meta9973){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9973 = meta9973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9972.cljs$lang$type = true;
cljs.core.async.t9972.cljs$lang$ctorStr = "cljs.core.async/t9972";
cljs.core.async.t9972.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9972");
});
cljs.core.async.t9972.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9972.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9975 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9975 = (function (fn1,_,meta9973,ch,f,map_LT_,meta9976){
this.fn1 = fn1;
this._ = _;
this.meta9973 = meta9973;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9976 = meta9976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9975.cljs$lang$type = true;
cljs.core.async.t9975.cljs$lang$ctorStr = "cljs.core.async/t9975";
cljs.core.async.t9975.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9975");
});
cljs.core.async.t9975.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9975.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9965_SHARP_){return f1.call(null,(((p1__9965_SHARP_ == null))?null:self__.f.call(null,p1__9965_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9977){var self__ = this;
var _9977__$1 = this;return self__.meta9976;
});
cljs.core.async.t9975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9977,meta9976__$1){var self__ = this;
var _9977__$1 = this;return (new cljs.core.async.t9975(self__.fn1,self__._,self__.meta9973,self__.ch,self__.f,self__.map_LT_,meta9976__$1));
});
cljs.core.async.__GT_t9975 = (function __GT_t9975(fn1__$1,___$2,meta9973__$1,ch__$2,f__$2,map_LT___$2,meta9976){return (new cljs.core.async.t9975(fn1__$1,___$2,meta9973__$1,ch__$2,f__$2,map_LT___$2,meta9976));
});
}
return (new cljs.core.async.t9975(fn1,___$1,self__.meta9973,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9972.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9974){var self__ = this;
var _9974__$1 = this;return self__.meta9973;
});
cljs.core.async.t9972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9974,meta9973__$1){var self__ = this;
var _9974__$1 = this;return (new cljs.core.async.t9972(self__.ch,self__.f,self__.map_LT_,meta9973__$1));
});
cljs.core.async.__GT_t9972 = (function __GT_t9972(ch__$1,f__$1,map_LT___$1,meta9973){return (new cljs.core.async.t9972(ch__$1,f__$1,map_LT___$1,meta9973));
});
}
return (new cljs.core.async.t9972(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9981 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9981 = (function (ch,f,map_GT_,meta9982){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9982 = meta9982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9981.cljs$lang$type = true;
cljs.core.async.t9981.cljs$lang$ctorStr = "cljs.core.async/t9981";
cljs.core.async.t9981.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9981");
});
cljs.core.async.t9981.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9981.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9981.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9983){var self__ = this;
var _9983__$1 = this;return self__.meta9982;
});
cljs.core.async.t9981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9983,meta9982__$1){var self__ = this;
var _9983__$1 = this;return (new cljs.core.async.t9981(self__.ch,self__.f,self__.map_GT_,meta9982__$1));
});
cljs.core.async.__GT_t9981 = (function __GT_t9981(ch__$1,f__$1,map_GT___$1,meta9982){return (new cljs.core.async.t9981(ch__$1,f__$1,map_GT___$1,meta9982));
});
}
return (new cljs.core.async.t9981(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9987 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9987 = (function (ch,p,filter_GT_,meta9988){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9988 = meta9988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9987.cljs$lang$type = true;
cljs.core.async.t9987.cljs$lang$ctorStr = "cljs.core.async/t9987";
cljs.core.async.t9987.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9987");
});
cljs.core.async.t9987.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9987.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9987.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9989){var self__ = this;
var _9989__$1 = this;return self__.meta9988;
});
cljs.core.async.t9987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9989,meta9988__$1){var self__ = this;
var _9989__$1 = this;return (new cljs.core.async.t9987(self__.ch,self__.p,self__.filter_GT_,meta9988__$1));
});
cljs.core.async.__GT_t9987 = (function __GT_t9987(ch__$1,p__$1,filter_GT___$1,meta9988){return (new cljs.core.async.t9987(ch__$1,p__$1,filter_GT___$1,meta9988));
});
}
return (new cljs.core.async.t9987(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___10072 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10051){var state_val_10052 = (state_10051[1]);if((state_val_10052 === 1))
{var state_10051__$1 = state_10051;var statearr_10053_10073 = state_10051__$1;(statearr_10053_10073[2] = null);
(statearr_10053_10073[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 2))
{var state_10051__$1 = state_10051;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10051__$1,4,ch);
} else
{if((state_val_10052 === 3))
{var inst_10049 = (state_10051[2]);var state_10051__$1 = state_10051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10051__$1,inst_10049);
} else
{if((state_val_10052 === 4))
{var inst_10033 = (state_10051[7]);var inst_10033__$1 = (state_10051[2]);var inst_10034 = (inst_10033__$1 == null);var state_10051__$1 = (function (){var statearr_10054 = state_10051;(statearr_10054[7] = inst_10033__$1);
return statearr_10054;
})();if(cljs.core.truth_(inst_10034))
{var statearr_10055_10074 = state_10051__$1;(statearr_10055_10074[1] = 5);
} else
{var statearr_10056_10075 = state_10051__$1;(statearr_10056_10075[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 5))
{var inst_10036 = cljs.core.async.close_BANG_.call(null,out);var state_10051__$1 = state_10051;var statearr_10057_10076 = state_10051__$1;(statearr_10057_10076[2] = inst_10036);
(statearr_10057_10076[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 6))
{var inst_10033 = (state_10051[7]);var inst_10038 = p.call(null,inst_10033);var state_10051__$1 = state_10051;if(cljs.core.truth_(inst_10038))
{var statearr_10058_10077 = state_10051__$1;(statearr_10058_10077[1] = 8);
} else
{var statearr_10059_10078 = state_10051__$1;(statearr_10059_10078[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 7))
{var inst_10047 = (state_10051[2]);var state_10051__$1 = state_10051;var statearr_10060_10079 = state_10051__$1;(statearr_10060_10079[2] = inst_10047);
(statearr_10060_10079[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 8))
{var inst_10033 = (state_10051[7]);var state_10051__$1 = state_10051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10051__$1,11,out,inst_10033);
} else
{if((state_val_10052 === 9))
{var state_10051__$1 = state_10051;var statearr_10061_10080 = state_10051__$1;(statearr_10061_10080[2] = null);
(statearr_10061_10080[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 10))
{var inst_10044 = (state_10051[2]);var state_10051__$1 = (function (){var statearr_10062 = state_10051;(statearr_10062[8] = inst_10044);
return statearr_10062;
})();var statearr_10063_10081 = state_10051__$1;(statearr_10063_10081[2] = null);
(statearr_10063_10081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 11))
{var inst_10041 = (state_10051[2]);var state_10051__$1 = state_10051;var statearr_10064_10082 = state_10051__$1;(statearr_10064_10082[2] = inst_10041);
(statearr_10064_10082[1] = 10);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10068 = [null,null,null,null,null,null,null,null,null];(statearr_10068[0] = state_machine__5509__auto__);
(statearr_10068[1] = 1);
return statearr_10068;
});
var state_machine__5509__auto____1 = (function (state_10051){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10051);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10069){if((e10069 instanceof Object))
{var ex__5512__auto__ = e10069;var statearr_10070_10083 = state_10051;(statearr_10070_10083[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10051);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10069;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10084 = state_10051;
state_10051 = G__10084;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10051){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10071 = f__5524__auto__.call(null);(statearr_10071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10072);
return statearr_10071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10236){var state_val_10237 = (state_10236[1]);if((state_val_10237 === 1))
{var state_10236__$1 = state_10236;var statearr_10238_10275 = state_10236__$1;(statearr_10238_10275[2] = null);
(statearr_10238_10275[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 2))
{var state_10236__$1 = state_10236;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10236__$1,4,in$);
} else
{if((state_val_10237 === 3))
{var inst_10234 = (state_10236[2]);var state_10236__$1 = state_10236;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10236__$1,inst_10234);
} else
{if((state_val_10237 === 4))
{var inst_10182 = (state_10236[7]);var inst_10182__$1 = (state_10236[2]);var inst_10183 = (inst_10182__$1 == null);var state_10236__$1 = (function (){var statearr_10239 = state_10236;(statearr_10239[7] = inst_10182__$1);
return statearr_10239;
})();if(cljs.core.truth_(inst_10183))
{var statearr_10240_10276 = state_10236__$1;(statearr_10240_10276[1] = 5);
} else
{var statearr_10241_10277 = state_10236__$1;(statearr_10241_10277[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 5))
{var inst_10185 = cljs.core.async.close_BANG_.call(null,out);var state_10236__$1 = state_10236;var statearr_10242_10278 = state_10236__$1;(statearr_10242_10278[2] = inst_10185);
(statearr_10242_10278[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 6))
{var inst_10182 = (state_10236[7]);var inst_10187 = f.call(null,inst_10182);var inst_10192 = cljs.core.seq.call(null,inst_10187);var inst_10193 = inst_10192;var inst_10194 = null;var inst_10195 = 0;var inst_10196 = 0;var state_10236__$1 = (function (){var statearr_10243 = state_10236;(statearr_10243[8] = inst_10196);
(statearr_10243[9] = inst_10194);
(statearr_10243[10] = inst_10195);
(statearr_10243[11] = inst_10193);
return statearr_10243;
})();var statearr_10244_10279 = state_10236__$1;(statearr_10244_10279[2] = null);
(statearr_10244_10279[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 7))
{var inst_10232 = (state_10236[2]);var state_10236__$1 = state_10236;var statearr_10245_10280 = state_10236__$1;(statearr_10245_10280[2] = inst_10232);
(statearr_10245_10280[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 8))
{var inst_10196 = (state_10236[8]);var inst_10195 = (state_10236[10]);var inst_10198 = (inst_10196 < inst_10195);var inst_10199 = inst_10198;var state_10236__$1 = state_10236;if(cljs.core.truth_(inst_10199))
{var statearr_10246_10281 = state_10236__$1;(statearr_10246_10281[1] = 10);
} else
{var statearr_10247_10282 = state_10236__$1;(statearr_10247_10282[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 9))
{var inst_10229 = (state_10236[2]);var state_10236__$1 = (function (){var statearr_10248 = state_10236;(statearr_10248[12] = inst_10229);
return statearr_10248;
})();var statearr_10249_10283 = state_10236__$1;(statearr_10249_10283[2] = null);
(statearr_10249_10283[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 10))
{var inst_10196 = (state_10236[8]);var inst_10194 = (state_10236[9]);var inst_10201 = cljs.core._nth.call(null,inst_10194,inst_10196);var state_10236__$1 = state_10236;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10236__$1,13,out,inst_10201);
} else
{if((state_val_10237 === 11))
{var inst_10207 = (state_10236[13]);var inst_10193 = (state_10236[11]);var inst_10207__$1 = cljs.core.seq.call(null,inst_10193);var state_10236__$1 = (function (){var statearr_10253 = state_10236;(statearr_10253[13] = inst_10207__$1);
return statearr_10253;
})();if(inst_10207__$1)
{var statearr_10254_10284 = state_10236__$1;(statearr_10254_10284[1] = 14);
} else
{var statearr_10255_10285 = state_10236__$1;(statearr_10255_10285[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 12))
{var inst_10227 = (state_10236[2]);var state_10236__$1 = state_10236;var statearr_10256_10286 = state_10236__$1;(statearr_10256_10286[2] = inst_10227);
(statearr_10256_10286[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 13))
{var inst_10196 = (state_10236[8]);var inst_10194 = (state_10236[9]);var inst_10195 = (state_10236[10]);var inst_10193 = (state_10236[11]);var inst_10203 = (state_10236[2]);var inst_10204 = (inst_10196 + 1);var tmp10250 = inst_10194;var tmp10251 = inst_10195;var tmp10252 = inst_10193;var inst_10193__$1 = tmp10252;var inst_10194__$1 = tmp10250;var inst_10195__$1 = tmp10251;var inst_10196__$1 = inst_10204;var state_10236__$1 = (function (){var statearr_10257 = state_10236;(statearr_10257[14] = inst_10203);
(statearr_10257[8] = inst_10196__$1);
(statearr_10257[9] = inst_10194__$1);
(statearr_10257[10] = inst_10195__$1);
(statearr_10257[11] = inst_10193__$1);
return statearr_10257;
})();var statearr_10258_10287 = state_10236__$1;(statearr_10258_10287[2] = null);
(statearr_10258_10287[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 14))
{var inst_10207 = (state_10236[13]);var inst_10209 = cljs.core.chunked_seq_QMARK_.call(null,inst_10207);var state_10236__$1 = state_10236;if(inst_10209)
{var statearr_10259_10288 = state_10236__$1;(statearr_10259_10288[1] = 17);
} else
{var statearr_10260_10289 = state_10236__$1;(statearr_10260_10289[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 15))
{var state_10236__$1 = state_10236;var statearr_10261_10290 = state_10236__$1;(statearr_10261_10290[2] = null);
(statearr_10261_10290[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 16))
{var inst_10225 = (state_10236[2]);var state_10236__$1 = state_10236;var statearr_10262_10291 = state_10236__$1;(statearr_10262_10291[2] = inst_10225);
(statearr_10262_10291[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 17))
{var inst_10207 = (state_10236[13]);var inst_10211 = cljs.core.chunk_first.call(null,inst_10207);var inst_10212 = cljs.core.chunk_rest.call(null,inst_10207);var inst_10213 = cljs.core.count.call(null,inst_10211);var inst_10193 = inst_10212;var inst_10194 = inst_10211;var inst_10195 = inst_10213;var inst_10196 = 0;var state_10236__$1 = (function (){var statearr_10263 = state_10236;(statearr_10263[8] = inst_10196);
(statearr_10263[9] = inst_10194);
(statearr_10263[10] = inst_10195);
(statearr_10263[11] = inst_10193);
return statearr_10263;
})();var statearr_10264_10292 = state_10236__$1;(statearr_10264_10292[2] = null);
(statearr_10264_10292[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 18))
{var inst_10207 = (state_10236[13]);var inst_10216 = cljs.core.first.call(null,inst_10207);var state_10236__$1 = state_10236;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10236__$1,20,out,inst_10216);
} else
{if((state_val_10237 === 19))
{var inst_10222 = (state_10236[2]);var state_10236__$1 = state_10236;var statearr_10265_10293 = state_10236__$1;(statearr_10265_10293[2] = inst_10222);
(statearr_10265_10293[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10237 === 20))
{var inst_10207 = (state_10236[13]);var inst_10218 = (state_10236[2]);var inst_10219 = cljs.core.next.call(null,inst_10207);var inst_10193 = inst_10219;var inst_10194 = null;var inst_10195 = 0;var inst_10196 = 0;var state_10236__$1 = (function (){var statearr_10266 = state_10236;(statearr_10266[15] = inst_10218);
(statearr_10266[8] = inst_10196);
(statearr_10266[9] = inst_10194);
(statearr_10266[10] = inst_10195);
(statearr_10266[11] = inst_10193);
return statearr_10266;
})();var statearr_10267_10294 = state_10236__$1;(statearr_10267_10294[2] = null);
(statearr_10267_10294[1] = 8);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10271[0] = state_machine__5509__auto__);
(statearr_10271[1] = 1);
return statearr_10271;
});
var state_machine__5509__auto____1 = (function (state_10236){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10236);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10272){if((e10272 instanceof Object))
{var ex__5512__auto__ = e10272;var statearr_10273_10295 = state_10236;(statearr_10273_10295[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10236);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10296 = state_10236;
state_10236 = G__10296;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10236){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10274 = f__5524__auto__.call(null);(statearr_10274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5523__auto___10377 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10356){var state_val_10357 = (state_10356[1]);if((state_val_10357 === 1))
{var state_10356__$1 = state_10356;var statearr_10358_10378 = state_10356__$1;(statearr_10358_10378[2] = null);
(statearr_10358_10378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10357 === 2))
{var state_10356__$1 = state_10356;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10356__$1,4,from);
} else
{if((state_val_10357 === 3))
{var inst_10354 = (state_10356[2]);var state_10356__$1 = state_10356;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10356__$1,inst_10354);
} else
{if((state_val_10357 === 4))
{var inst_10339 = (state_10356[7]);var inst_10339__$1 = (state_10356[2]);var inst_10340 = (inst_10339__$1 == null);var state_10356__$1 = (function (){var statearr_10359 = state_10356;(statearr_10359[7] = inst_10339__$1);
return statearr_10359;
})();if(cljs.core.truth_(inst_10340))
{var statearr_10360_10379 = state_10356__$1;(statearr_10360_10379[1] = 5);
} else
{var statearr_10361_10380 = state_10356__$1;(statearr_10361_10380[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10357 === 5))
{var state_10356__$1 = state_10356;if(cljs.core.truth_(close_QMARK_))
{var statearr_10362_10381 = state_10356__$1;(statearr_10362_10381[1] = 8);
} else
{var statearr_10363_10382 = state_10356__$1;(statearr_10363_10382[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10357 === 6))
{var inst_10339 = (state_10356[7]);var state_10356__$1 = state_10356;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10356__$1,11,to,inst_10339);
} else
{if((state_val_10357 === 7))
{var inst_10352 = (state_10356[2]);var state_10356__$1 = state_10356;var statearr_10364_10383 = state_10356__$1;(statearr_10364_10383[2] = inst_10352);
(statearr_10364_10383[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10357 === 8))
{var inst_10343 = cljs.core.async.close_BANG_.call(null,to);var state_10356__$1 = state_10356;var statearr_10365_10384 = state_10356__$1;(statearr_10365_10384[2] = inst_10343);
(statearr_10365_10384[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10357 === 9))
{var state_10356__$1 = state_10356;var statearr_10366_10385 = state_10356__$1;(statearr_10366_10385[2] = null);
(statearr_10366_10385[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10357 === 10))
{var inst_10346 = (state_10356[2]);var state_10356__$1 = state_10356;var statearr_10367_10386 = state_10356__$1;(statearr_10367_10386[2] = inst_10346);
(statearr_10367_10386[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10357 === 11))
{var inst_10349 = (state_10356[2]);var state_10356__$1 = (function (){var statearr_10368 = state_10356;(statearr_10368[8] = inst_10349);
return statearr_10368;
})();var statearr_10369_10387 = state_10356__$1;(statearr_10369_10387[2] = null);
(statearr_10369_10387[1] = 2);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10373 = [null,null,null,null,null,null,null,null,null];(statearr_10373[0] = state_machine__5509__auto__);
(statearr_10373[1] = 1);
return statearr_10373;
});
var state_machine__5509__auto____1 = (function (state_10356){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10356);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10374){if((e10374 instanceof Object))
{var ex__5512__auto__ = e10374;var statearr_10375_10388 = state_10356;(statearr_10375_10388[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10356);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10389 = state_10356;
state_10356 = G__10389;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10356){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10376 = f__5524__auto__.call(null);(statearr_10376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10377);
return statearr_10376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5523__auto___10476 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10454){var state_val_10455 = (state_10454[1]);if((state_val_10455 === 1))
{var state_10454__$1 = state_10454;var statearr_10456_10477 = state_10454__$1;(statearr_10456_10477[2] = null);
(statearr_10456_10477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10455 === 2))
{var state_10454__$1 = state_10454;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10454__$1,4,ch);
} else
{if((state_val_10455 === 3))
{var inst_10452 = (state_10454[2]);var state_10454__$1 = state_10454;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10454__$1,inst_10452);
} else
{if((state_val_10455 === 4))
{var inst_10435 = (state_10454[7]);var inst_10435__$1 = (state_10454[2]);var inst_10436 = (inst_10435__$1 == null);var state_10454__$1 = (function (){var statearr_10457 = state_10454;(statearr_10457[7] = inst_10435__$1);
return statearr_10457;
})();if(cljs.core.truth_(inst_10436))
{var statearr_10458_10478 = state_10454__$1;(statearr_10458_10478[1] = 5);
} else
{var statearr_10459_10479 = state_10454__$1;(statearr_10459_10479[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10455 === 5))
{var inst_10438 = cljs.core.async.close_BANG_.call(null,tc);var inst_10439 = cljs.core.async.close_BANG_.call(null,fc);var state_10454__$1 = (function (){var statearr_10460 = state_10454;(statearr_10460[8] = inst_10438);
return statearr_10460;
})();var statearr_10461_10480 = state_10454__$1;(statearr_10461_10480[2] = inst_10439);
(statearr_10461_10480[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10455 === 6))
{var inst_10435 = (state_10454[7]);var inst_10441 = p.call(null,inst_10435);var state_10454__$1 = state_10454;if(cljs.core.truth_(inst_10441))
{var statearr_10462_10481 = state_10454__$1;(statearr_10462_10481[1] = 9);
} else
{var statearr_10463_10482 = state_10454__$1;(statearr_10463_10482[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10455 === 7))
{var inst_10450 = (state_10454[2]);var state_10454__$1 = state_10454;var statearr_10464_10483 = state_10454__$1;(statearr_10464_10483[2] = inst_10450);
(statearr_10464_10483[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10455 === 8))
{var inst_10447 = (state_10454[2]);var state_10454__$1 = (function (){var statearr_10465 = state_10454;(statearr_10465[9] = inst_10447);
return statearr_10465;
})();var statearr_10466_10484 = state_10454__$1;(statearr_10466_10484[2] = null);
(statearr_10466_10484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10455 === 9))
{var state_10454__$1 = state_10454;var statearr_10467_10485 = state_10454__$1;(statearr_10467_10485[2] = tc);
(statearr_10467_10485[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10455 === 10))
{var state_10454__$1 = state_10454;var statearr_10468_10486 = state_10454__$1;(statearr_10468_10486[2] = fc);
(statearr_10468_10486[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10455 === 11))
{var inst_10435 = (state_10454[7]);var inst_10445 = (state_10454[2]);var state_10454__$1 = state_10454;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10454__$1,8,inst_10445,inst_10435);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10472 = [null,null,null,null,null,null,null,null,null,null];(statearr_10472[0] = state_machine__5509__auto__);
(statearr_10472[1] = 1);
return statearr_10472;
});
var state_machine__5509__auto____1 = (function (state_10454){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10454);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10473){if((e10473 instanceof Object))
{var ex__5512__auto__ = e10473;var statearr_10474_10487 = state_10454;(statearr_10474_10487[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10454);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10488 = state_10454;
state_10454 = G__10488;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10454){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10475 = f__5524__auto__.call(null);(statearr_10475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10476);
return statearr_10475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10535){var state_val_10536 = (state_10535[1]);if((state_val_10536 === 7))
{var inst_10531 = (state_10535[2]);var state_10535__$1 = state_10535;var statearr_10537_10553 = state_10535__$1;(statearr_10537_10553[2] = inst_10531);
(statearr_10537_10553[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10536 === 6))
{var inst_10521 = (state_10535[7]);var inst_10524 = (state_10535[8]);var inst_10528 = f.call(null,inst_10521,inst_10524);var inst_10521__$1 = inst_10528;var state_10535__$1 = (function (){var statearr_10538 = state_10535;(statearr_10538[7] = inst_10521__$1);
return statearr_10538;
})();var statearr_10539_10554 = state_10535__$1;(statearr_10539_10554[2] = null);
(statearr_10539_10554[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10536 === 5))
{var inst_10521 = (state_10535[7]);var state_10535__$1 = state_10535;var statearr_10540_10555 = state_10535__$1;(statearr_10540_10555[2] = inst_10521);
(statearr_10540_10555[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10536 === 4))
{var inst_10524 = (state_10535[8]);var inst_10524__$1 = (state_10535[2]);var inst_10525 = (inst_10524__$1 == null);var state_10535__$1 = (function (){var statearr_10541 = state_10535;(statearr_10541[8] = inst_10524__$1);
return statearr_10541;
})();if(cljs.core.truth_(inst_10525))
{var statearr_10542_10556 = state_10535__$1;(statearr_10542_10556[1] = 5);
} else
{var statearr_10543_10557 = state_10535__$1;(statearr_10543_10557[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10536 === 3))
{var inst_10533 = (state_10535[2]);var state_10535__$1 = state_10535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10535__$1,inst_10533);
} else
{if((state_val_10536 === 2))
{var state_10535__$1 = state_10535;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10535__$1,4,ch);
} else
{if((state_val_10536 === 1))
{var inst_10521 = init;var state_10535__$1 = (function (){var statearr_10544 = state_10535;(statearr_10544[7] = inst_10521);
return statearr_10544;
})();var statearr_10545_10558 = state_10535__$1;(statearr_10545_10558[2] = null);
(statearr_10545_10558[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_10549 = [null,null,null,null,null,null,null,null,null];(statearr_10549[0] = state_machine__5509__auto__);
(statearr_10549[1] = 1);
return statearr_10549;
});
var state_machine__5509__auto____1 = (function (state_10535){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10535);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10550){if((e10550 instanceof Object))
{var ex__5512__auto__ = e10550;var statearr_10551_10559 = state_10535;(statearr_10551_10559[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10535);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10560 = state_10535;
state_10535 = G__10560;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10535){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10552 = f__5524__auto__.call(null);(statearr_10552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10622){var state_val_10623 = (state_10622[1]);if((state_val_10623 === 1))
{var inst_10602 = cljs.core.seq.call(null,coll);var inst_10603 = inst_10602;var state_10622__$1 = (function (){var statearr_10624 = state_10622;(statearr_10624[7] = inst_10603);
return statearr_10624;
})();var statearr_10625_10643 = state_10622__$1;(statearr_10625_10643[2] = null);
(statearr_10625_10643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10623 === 2))
{var inst_10603 = (state_10622[7]);var state_10622__$1 = state_10622;if(cljs.core.truth_(inst_10603))
{var statearr_10626_10644 = state_10622__$1;(statearr_10626_10644[1] = 4);
} else
{var statearr_10627_10645 = state_10622__$1;(statearr_10627_10645[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10623 === 3))
{var inst_10620 = (state_10622[2]);var state_10622__$1 = state_10622;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10622__$1,inst_10620);
} else
{if((state_val_10623 === 4))
{var inst_10603 = (state_10622[7]);var inst_10606 = cljs.core.first.call(null,inst_10603);var state_10622__$1 = state_10622;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10622__$1,7,ch,inst_10606);
} else
{if((state_val_10623 === 5))
{var state_10622__$1 = state_10622;if(cljs.core.truth_(close_QMARK_))
{var statearr_10628_10646 = state_10622__$1;(statearr_10628_10646[1] = 8);
} else
{var statearr_10629_10647 = state_10622__$1;(statearr_10629_10647[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10623 === 6))
{var inst_10618 = (state_10622[2]);var state_10622__$1 = state_10622;var statearr_10630_10648 = state_10622__$1;(statearr_10630_10648[2] = inst_10618);
(statearr_10630_10648[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10623 === 7))
{var inst_10603 = (state_10622[7]);var inst_10608 = (state_10622[2]);var inst_10609 = cljs.core.next.call(null,inst_10603);var inst_10603__$1 = inst_10609;var state_10622__$1 = (function (){var statearr_10631 = state_10622;(statearr_10631[7] = inst_10603__$1);
(statearr_10631[8] = inst_10608);
return statearr_10631;
})();var statearr_10632_10649 = state_10622__$1;(statearr_10632_10649[2] = null);
(statearr_10632_10649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10623 === 8))
{var inst_10613 = cljs.core.async.close_BANG_.call(null,ch);var state_10622__$1 = state_10622;var statearr_10633_10650 = state_10622__$1;(statearr_10633_10650[2] = inst_10613);
(statearr_10633_10650[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10623 === 9))
{var state_10622__$1 = state_10622;var statearr_10634_10651 = state_10622__$1;(statearr_10634_10651[2] = null);
(statearr_10634_10651[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10623 === 10))
{var inst_10616 = (state_10622[2]);var state_10622__$1 = state_10622;var statearr_10635_10652 = state_10622__$1;(statearr_10635_10652[2] = inst_10616);
(statearr_10635_10652[1] = 6);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10639 = [null,null,null,null,null,null,null,null,null];(statearr_10639[0] = state_machine__5509__auto__);
(statearr_10639[1] = 1);
return statearr_10639;
});
var state_machine__5509__auto____1 = (function (state_10622){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10622);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10640){if((e10640 instanceof Object))
{var ex__5512__auto__ = e10640;var statearr_10641_10653 = state_10622;(statearr_10641_10653[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10622);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10654 = state_10622;
state_10622 = G__10654;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10622){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10642 = f__5524__auto__.call(null);(statearr_10642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
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
cljs.core.async.Mux = (function (){var obj10656 = {};return obj10656;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10658 = {};return obj10658;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10873 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10873 = (function (cs,ch,mult,meta10874){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10874 = meta10874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10873.cljs$lang$type = true;
cljs.core.async.t10873.cljs$lang$ctorStr = "cljs.core.async/t10873";
cljs.core.async.t10873.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t10873");
});})(cs))
;
cljs.core.async.t10873.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10873.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10873.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10873.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10873.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10875){var self__ = this;
var _10875__$1 = this;return self__.meta10874;
});})(cs))
;
cljs.core.async.t10873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10875,meta10874__$1){var self__ = this;
var _10875__$1 = this;return (new cljs.core.async.t10873(self__.cs,self__.ch,self__.mult,meta10874__$1));
});})(cs))
;
cljs.core.async.__GT_t10873 = ((function (cs){
return (function __GT_t10873(cs__$1,ch__$1,mult__$1,meta10874){return (new cljs.core.async.t10873(cs__$1,ch__$1,mult__$1,meta10874));
});})(cs))
;
}
return (new cljs.core.async.t10873(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5523__auto___11087 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11005){var state_val_11006 = (state_11005[1]);if((state_val_11006 === 32))
{var inst_10878 = (state_11005[7]);var inst_10954 = (state_11005[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11005,31,Object,null,30);var inst_10961 = cljs.core.async.put_BANG_.call(null,inst_10954,inst_10878,done);var state_11005__$1 = state_11005;var statearr_11007_11088 = state_11005__$1;(statearr_11007_11088[2] = inst_10961);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11005__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 1))
{var state_11005__$1 = state_11005;var statearr_11008_11089 = state_11005__$1;(statearr_11008_11089[2] = null);
(statearr_11008_11089[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 33))
{var inst_10967 = (state_11005[9]);var inst_10969 = cljs.core.chunked_seq_QMARK_.call(null,inst_10967);var state_11005__$1 = state_11005;if(inst_10969)
{var statearr_11009_11090 = state_11005__$1;(statearr_11009_11090[1] = 36);
} else
{var statearr_11010_11091 = state_11005__$1;(statearr_11010_11091[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 2))
{var state_11005__$1 = state_11005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11005__$1,4,ch);
} else
{if((state_val_11006 === 34))
{var state_11005__$1 = state_11005;var statearr_11011_11092 = state_11005__$1;(statearr_11011_11092[2] = null);
(statearr_11011_11092[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 3))
{var inst_11003 = (state_11005[2]);var state_11005__$1 = state_11005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11005__$1,inst_11003);
} else
{if((state_val_11006 === 35))
{var inst_10992 = (state_11005[2]);var state_11005__$1 = state_11005;var statearr_11012_11093 = state_11005__$1;(statearr_11012_11093[2] = inst_10992);
(statearr_11012_11093[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 4))
{var inst_10878 = (state_11005[7]);var inst_10878__$1 = (state_11005[2]);var inst_10879 = (inst_10878__$1 == null);var state_11005__$1 = (function (){var statearr_11013 = state_11005;(statearr_11013[7] = inst_10878__$1);
return statearr_11013;
})();if(cljs.core.truth_(inst_10879))
{var statearr_11014_11094 = state_11005__$1;(statearr_11014_11094[1] = 5);
} else
{var statearr_11015_11095 = state_11005__$1;(statearr_11015_11095[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 36))
{var inst_10967 = (state_11005[9]);var inst_10971 = cljs.core.chunk_first.call(null,inst_10967);var inst_10972 = cljs.core.chunk_rest.call(null,inst_10967);var inst_10973 = cljs.core.count.call(null,inst_10971);var inst_10946 = inst_10972;var inst_10947 = inst_10971;var inst_10948 = inst_10973;var inst_10949 = 0;var state_11005__$1 = (function (){var statearr_11016 = state_11005;(statearr_11016[10] = inst_10946);
(statearr_11016[11] = inst_10949);
(statearr_11016[12] = inst_10947);
(statearr_11016[13] = inst_10948);
return statearr_11016;
})();var statearr_11017_11096 = state_11005__$1;(statearr_11017_11096[2] = null);
(statearr_11017_11096[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 5))
{var inst_10885 = cljs.core.deref.call(null,cs);var inst_10886 = cljs.core.seq.call(null,inst_10885);var inst_10887 = inst_10886;var inst_10888 = null;var inst_10889 = 0;var inst_10890 = 0;var state_11005__$1 = (function (){var statearr_11018 = state_11005;(statearr_11018[14] = inst_10887);
(statearr_11018[15] = inst_10890);
(statearr_11018[16] = inst_10889);
(statearr_11018[17] = inst_10888);
return statearr_11018;
})();var statearr_11019_11097 = state_11005__$1;(statearr_11019_11097[2] = null);
(statearr_11019_11097[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 37))
{var inst_10967 = (state_11005[9]);var inst_10976 = cljs.core.first.call(null,inst_10967);var state_11005__$1 = (function (){var statearr_11020 = state_11005;(statearr_11020[18] = inst_10976);
return statearr_11020;
})();var statearr_11021_11098 = state_11005__$1;(statearr_11021_11098[2] = null);
(statearr_11021_11098[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 6))
{var inst_10937 = cljs.core.deref.call(null,cs);var inst_10938 = cljs.core.keys.call(null,inst_10937);var inst_10939 = cljs.core.count.call(null,inst_10938);var inst_10940 = cljs.core.reset_BANG_.call(null,dctr,inst_10939);var inst_10945 = cljs.core.seq.call(null,inst_10938);var inst_10946 = inst_10945;var inst_10947 = null;var inst_10948 = 0;var inst_10949 = 0;var state_11005__$1 = (function (){var statearr_11022 = state_11005;(statearr_11022[10] = inst_10946);
(statearr_11022[11] = inst_10949);
(statearr_11022[12] = inst_10947);
(statearr_11022[13] = inst_10948);
(statearr_11022[19] = inst_10940);
return statearr_11022;
})();var statearr_11023_11099 = state_11005__$1;(statearr_11023_11099[2] = null);
(statearr_11023_11099[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 38))
{var inst_10989 = (state_11005[2]);var state_11005__$1 = state_11005;var statearr_11024_11100 = state_11005__$1;(statearr_11024_11100[2] = inst_10989);
(statearr_11024_11100[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 7))
{var inst_11001 = (state_11005[2]);var state_11005__$1 = state_11005;var statearr_11025_11101 = state_11005__$1;(statearr_11025_11101[2] = inst_11001);
(statearr_11025_11101[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 39))
{var inst_10967 = (state_11005[9]);var inst_10985 = (state_11005[2]);var inst_10986 = cljs.core.next.call(null,inst_10967);var inst_10946 = inst_10986;var inst_10947 = null;var inst_10948 = 0;var inst_10949 = 0;var state_11005__$1 = (function (){var statearr_11026 = state_11005;(statearr_11026[10] = inst_10946);
(statearr_11026[11] = inst_10949);
(statearr_11026[12] = inst_10947);
(statearr_11026[13] = inst_10948);
(statearr_11026[20] = inst_10985);
return statearr_11026;
})();var statearr_11027_11102 = state_11005__$1;(statearr_11027_11102[2] = null);
(statearr_11027_11102[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 8))
{var inst_10890 = (state_11005[15]);var inst_10889 = (state_11005[16]);var inst_10892 = (inst_10890 < inst_10889);var inst_10893 = inst_10892;var state_11005__$1 = state_11005;if(cljs.core.truth_(inst_10893))
{var statearr_11028_11103 = state_11005__$1;(statearr_11028_11103[1] = 10);
} else
{var statearr_11029_11104 = state_11005__$1;(statearr_11029_11104[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 40))
{var inst_10976 = (state_11005[18]);var inst_10977 = (state_11005[2]);var inst_10978 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10979 = cljs.core.async.untap_STAR_.call(null,m,inst_10976);var state_11005__$1 = (function (){var statearr_11030 = state_11005;(statearr_11030[21] = inst_10977);
(statearr_11030[22] = inst_10978);
return statearr_11030;
})();var statearr_11031_11105 = state_11005__$1;(statearr_11031_11105[2] = inst_10979);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11005__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 9))
{var inst_10935 = (state_11005[2]);var state_11005__$1 = state_11005;var statearr_11032_11106 = state_11005__$1;(statearr_11032_11106[2] = inst_10935);
(statearr_11032_11106[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 41))
{var inst_10976 = (state_11005[18]);var inst_10878 = (state_11005[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11005,40,Object,null,39);var inst_10983 = cljs.core.async.put_BANG_.call(null,inst_10976,inst_10878,done);var state_11005__$1 = state_11005;var statearr_11033_11107 = state_11005__$1;(statearr_11033_11107[2] = inst_10983);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11005__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 10))
{var inst_10890 = (state_11005[15]);var inst_10888 = (state_11005[17]);var inst_10896 = cljs.core._nth.call(null,inst_10888,inst_10890);var inst_10897 = cljs.core.nth.call(null,inst_10896,0,null);var inst_10898 = cljs.core.nth.call(null,inst_10896,1,null);var state_11005__$1 = (function (){var statearr_11034 = state_11005;(statearr_11034[23] = inst_10897);
return statearr_11034;
})();if(cljs.core.truth_(inst_10898))
{var statearr_11035_11108 = state_11005__$1;(statearr_11035_11108[1] = 13);
} else
{var statearr_11036_11109 = state_11005__$1;(statearr_11036_11109[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 42))
{var inst_10998 = (state_11005[2]);var state_11005__$1 = (function (){var statearr_11037 = state_11005;(statearr_11037[24] = inst_10998);
return statearr_11037;
})();var statearr_11038_11110 = state_11005__$1;(statearr_11038_11110[2] = null);
(statearr_11038_11110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 11))
{var inst_10907 = (state_11005[25]);var inst_10887 = (state_11005[14]);var inst_10907__$1 = cljs.core.seq.call(null,inst_10887);var state_11005__$1 = (function (){var statearr_11039 = state_11005;(statearr_11039[25] = inst_10907__$1);
return statearr_11039;
})();if(inst_10907__$1)
{var statearr_11040_11111 = state_11005__$1;(statearr_11040_11111[1] = 16);
} else
{var statearr_11041_11112 = state_11005__$1;(statearr_11041_11112[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 12))
{var inst_10933 = (state_11005[2]);var state_11005__$1 = state_11005;var statearr_11042_11113 = state_11005__$1;(statearr_11042_11113[2] = inst_10933);
(statearr_11042_11113[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 13))
{var inst_10897 = (state_11005[23]);var inst_10900 = cljs.core.async.close_BANG_.call(null,inst_10897);var state_11005__$1 = state_11005;var statearr_11046_11114 = state_11005__$1;(statearr_11046_11114[2] = inst_10900);
(statearr_11046_11114[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 14))
{var state_11005__$1 = state_11005;var statearr_11047_11115 = state_11005__$1;(statearr_11047_11115[2] = null);
(statearr_11047_11115[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 15))
{var inst_10887 = (state_11005[14]);var inst_10890 = (state_11005[15]);var inst_10889 = (state_11005[16]);var inst_10888 = (state_11005[17]);var inst_10903 = (state_11005[2]);var inst_10904 = (inst_10890 + 1);var tmp11043 = inst_10887;var tmp11044 = inst_10889;var tmp11045 = inst_10888;var inst_10887__$1 = tmp11043;var inst_10888__$1 = tmp11045;var inst_10889__$1 = tmp11044;var inst_10890__$1 = inst_10904;var state_11005__$1 = (function (){var statearr_11048 = state_11005;(statearr_11048[14] = inst_10887__$1);
(statearr_11048[15] = inst_10890__$1);
(statearr_11048[26] = inst_10903);
(statearr_11048[16] = inst_10889__$1);
(statearr_11048[17] = inst_10888__$1);
return statearr_11048;
})();var statearr_11049_11116 = state_11005__$1;(statearr_11049_11116[2] = null);
(statearr_11049_11116[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 16))
{var inst_10907 = (state_11005[25]);var inst_10909 = cljs.core.chunked_seq_QMARK_.call(null,inst_10907);var state_11005__$1 = state_11005;if(inst_10909)
{var statearr_11050_11117 = state_11005__$1;(statearr_11050_11117[1] = 19);
} else
{var statearr_11051_11118 = state_11005__$1;(statearr_11051_11118[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 17))
{var state_11005__$1 = state_11005;var statearr_11052_11119 = state_11005__$1;(statearr_11052_11119[2] = null);
(statearr_11052_11119[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 18))
{var inst_10931 = (state_11005[2]);var state_11005__$1 = state_11005;var statearr_11053_11120 = state_11005__$1;(statearr_11053_11120[2] = inst_10931);
(statearr_11053_11120[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 19))
{var inst_10907 = (state_11005[25]);var inst_10911 = cljs.core.chunk_first.call(null,inst_10907);var inst_10912 = cljs.core.chunk_rest.call(null,inst_10907);var inst_10913 = cljs.core.count.call(null,inst_10911);var inst_10887 = inst_10912;var inst_10888 = inst_10911;var inst_10889 = inst_10913;var inst_10890 = 0;var state_11005__$1 = (function (){var statearr_11054 = state_11005;(statearr_11054[14] = inst_10887);
(statearr_11054[15] = inst_10890);
(statearr_11054[16] = inst_10889);
(statearr_11054[17] = inst_10888);
return statearr_11054;
})();var statearr_11055_11121 = state_11005__$1;(statearr_11055_11121[2] = null);
(statearr_11055_11121[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 20))
{var inst_10907 = (state_11005[25]);var inst_10917 = cljs.core.first.call(null,inst_10907);var inst_10918 = cljs.core.nth.call(null,inst_10917,0,null);var inst_10919 = cljs.core.nth.call(null,inst_10917,1,null);var state_11005__$1 = (function (){var statearr_11056 = state_11005;(statearr_11056[27] = inst_10918);
return statearr_11056;
})();if(cljs.core.truth_(inst_10919))
{var statearr_11057_11122 = state_11005__$1;(statearr_11057_11122[1] = 22);
} else
{var statearr_11058_11123 = state_11005__$1;(statearr_11058_11123[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 21))
{var inst_10928 = (state_11005[2]);var state_11005__$1 = state_11005;var statearr_11059_11124 = state_11005__$1;(statearr_11059_11124[2] = inst_10928);
(statearr_11059_11124[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 22))
{var inst_10918 = (state_11005[27]);var inst_10921 = cljs.core.async.close_BANG_.call(null,inst_10918);var state_11005__$1 = state_11005;var statearr_11060_11125 = state_11005__$1;(statearr_11060_11125[2] = inst_10921);
(statearr_11060_11125[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 23))
{var state_11005__$1 = state_11005;var statearr_11061_11126 = state_11005__$1;(statearr_11061_11126[2] = null);
(statearr_11061_11126[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 24))
{var inst_10907 = (state_11005[25]);var inst_10924 = (state_11005[2]);var inst_10925 = cljs.core.next.call(null,inst_10907);var inst_10887 = inst_10925;var inst_10888 = null;var inst_10889 = 0;var inst_10890 = 0;var state_11005__$1 = (function (){var statearr_11062 = state_11005;(statearr_11062[14] = inst_10887);
(statearr_11062[15] = inst_10890);
(statearr_11062[16] = inst_10889);
(statearr_11062[17] = inst_10888);
(statearr_11062[28] = inst_10924);
return statearr_11062;
})();var statearr_11063_11127 = state_11005__$1;(statearr_11063_11127[2] = null);
(statearr_11063_11127[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 25))
{var inst_10949 = (state_11005[11]);var inst_10948 = (state_11005[13]);var inst_10951 = (inst_10949 < inst_10948);var inst_10952 = inst_10951;var state_11005__$1 = state_11005;if(cljs.core.truth_(inst_10952))
{var statearr_11064_11128 = state_11005__$1;(statearr_11064_11128[1] = 27);
} else
{var statearr_11065_11129 = state_11005__$1;(statearr_11065_11129[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 26))
{var inst_10996 = (state_11005[2]);var state_11005__$1 = (function (){var statearr_11066 = state_11005;(statearr_11066[29] = inst_10996);
return statearr_11066;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11005__$1,42,dchan);
} else
{if((state_val_11006 === 27))
{var inst_10949 = (state_11005[11]);var inst_10947 = (state_11005[12]);var inst_10954 = cljs.core._nth.call(null,inst_10947,inst_10949);var state_11005__$1 = (function (){var statearr_11067 = state_11005;(statearr_11067[8] = inst_10954);
return statearr_11067;
})();var statearr_11068_11130 = state_11005__$1;(statearr_11068_11130[2] = null);
(statearr_11068_11130[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 28))
{var inst_10946 = (state_11005[10]);var inst_10967 = (state_11005[9]);var inst_10967__$1 = cljs.core.seq.call(null,inst_10946);var state_11005__$1 = (function (){var statearr_11072 = state_11005;(statearr_11072[9] = inst_10967__$1);
return statearr_11072;
})();if(inst_10967__$1)
{var statearr_11073_11131 = state_11005__$1;(statearr_11073_11131[1] = 33);
} else
{var statearr_11074_11132 = state_11005__$1;(statearr_11074_11132[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 29))
{var inst_10994 = (state_11005[2]);var state_11005__$1 = state_11005;var statearr_11075_11133 = state_11005__$1;(statearr_11075_11133[2] = inst_10994);
(statearr_11075_11133[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 30))
{var inst_10946 = (state_11005[10]);var inst_10949 = (state_11005[11]);var inst_10947 = (state_11005[12]);var inst_10948 = (state_11005[13]);var inst_10963 = (state_11005[2]);var inst_10964 = (inst_10949 + 1);var tmp11069 = inst_10946;var tmp11070 = inst_10947;var tmp11071 = inst_10948;var inst_10946__$1 = tmp11069;var inst_10947__$1 = tmp11070;var inst_10948__$1 = tmp11071;var inst_10949__$1 = inst_10964;var state_11005__$1 = (function (){var statearr_11076 = state_11005;(statearr_11076[30] = inst_10963);
(statearr_11076[10] = inst_10946__$1);
(statearr_11076[11] = inst_10949__$1);
(statearr_11076[12] = inst_10947__$1);
(statearr_11076[13] = inst_10948__$1);
return statearr_11076;
})();var statearr_11077_11134 = state_11005__$1;(statearr_11077_11134[2] = null);
(statearr_11077_11134[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 31))
{var inst_10954 = (state_11005[8]);var inst_10955 = (state_11005[2]);var inst_10956 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10957 = cljs.core.async.untap_STAR_.call(null,m,inst_10954);var state_11005__$1 = (function (){var statearr_11078 = state_11005;(statearr_11078[31] = inst_10955);
(statearr_11078[32] = inst_10956);
return statearr_11078;
})();var statearr_11079_11135 = state_11005__$1;(statearr_11079_11135[2] = inst_10957);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11005__$1);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_11083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11083[0] = state_machine__5509__auto__);
(statearr_11083[1] = 1);
return statearr_11083;
});
var state_machine__5509__auto____1 = (function (state_11005){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11005);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11084){if((e11084 instanceof Object))
{var ex__5512__auto__ = e11084;var statearr_11085_11136 = state_11005;(statearr_11085_11136[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11137 = state_11005;
state_11005 = G__11137;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11005){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11086 = f__5524__auto__.call(null);(statearr_11086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11087);
return statearr_11086;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
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
cljs.core.async.Mix = (function (){var obj11139 = {};return obj11139;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11249 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11249 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11250){
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
this.meta11250 = meta11250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11249.cljs$lang$type = true;
cljs.core.async.t11249.cljs$lang$ctorStr = "cljs.core.async/t11249";
cljs.core.async.t11249.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11249");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11249.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11249.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11249.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11249.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11249.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11249.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11249.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11249.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11251){var self__ = this;
var _11251__$1 = this;return self__.meta11250;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11251,meta11250__$1){var self__ = this;
var _11251__$1 = this;return (new cljs.core.async.t11249(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11250__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11249 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11249(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11250){return (new cljs.core.async.t11249(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11250));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11249(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5523__auto___11358 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11316){var state_val_11317 = (state_11316[1]);if((state_val_11317 === 1))
{var inst_11255 = (state_11316[7]);var inst_11255__$1 = calc_state.call(null);var inst_11256 = cljs.core.seq_QMARK_.call(null,inst_11255__$1);var state_11316__$1 = (function (){var statearr_11318 = state_11316;(statearr_11318[7] = inst_11255__$1);
return statearr_11318;
})();if(inst_11256)
{var statearr_11319_11359 = state_11316__$1;(statearr_11319_11359[1] = 2);
} else
{var statearr_11320_11360 = state_11316__$1;(statearr_11320_11360[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 2))
{var inst_11255 = (state_11316[7]);var inst_11258 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11255);var state_11316__$1 = state_11316;var statearr_11321_11361 = state_11316__$1;(statearr_11321_11361[2] = inst_11258);
(statearr_11321_11361[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 3))
{var inst_11255 = (state_11316[7]);var state_11316__$1 = state_11316;var statearr_11322_11362 = state_11316__$1;(statearr_11322_11362[2] = inst_11255);
(statearr_11322_11362[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 4))
{var inst_11255 = (state_11316[7]);var inst_11261 = (state_11316[2]);var inst_11262 = cljs.core.get.call(null,inst_11261,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11263 = cljs.core.get.call(null,inst_11261,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11264 = cljs.core.get.call(null,inst_11261,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11265 = inst_11255;var state_11316__$1 = (function (){var statearr_11323 = state_11316;(statearr_11323[8] = inst_11265);
(statearr_11323[9] = inst_11263);
(statearr_11323[10] = inst_11264);
(statearr_11323[11] = inst_11262);
return statearr_11323;
})();var statearr_11324_11363 = state_11316__$1;(statearr_11324_11363[2] = null);
(statearr_11324_11363[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 5))
{var inst_11265 = (state_11316[8]);var inst_11268 = cljs.core.seq_QMARK_.call(null,inst_11265);var state_11316__$1 = state_11316;if(inst_11268)
{var statearr_11325_11364 = state_11316__$1;(statearr_11325_11364[1] = 7);
} else
{var statearr_11326_11365 = state_11316__$1;(statearr_11326_11365[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 6))
{var inst_11314 = (state_11316[2]);var state_11316__$1 = state_11316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11316__$1,inst_11314);
} else
{if((state_val_11317 === 7))
{var inst_11265 = (state_11316[8]);var inst_11270 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11265);var state_11316__$1 = state_11316;var statearr_11327_11366 = state_11316__$1;(statearr_11327_11366[2] = inst_11270);
(statearr_11327_11366[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 8))
{var inst_11265 = (state_11316[8]);var state_11316__$1 = state_11316;var statearr_11328_11367 = state_11316__$1;(statearr_11328_11367[2] = inst_11265);
(statearr_11328_11367[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 9))
{var inst_11273 = (state_11316[12]);var inst_11273__$1 = (state_11316[2]);var inst_11274 = cljs.core.get.call(null,inst_11273__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11275 = cljs.core.get.call(null,inst_11273__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11276 = cljs.core.get.call(null,inst_11273__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11316__$1 = (function (){var statearr_11329 = state_11316;(statearr_11329[13] = inst_11275);
(statearr_11329[12] = inst_11273__$1);
(statearr_11329[14] = inst_11276);
return statearr_11329;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11316__$1,10,inst_11274);
} else
{if((state_val_11317 === 10))
{var inst_11280 = (state_11316[15]);var inst_11281 = (state_11316[16]);var inst_11279 = (state_11316[2]);var inst_11280__$1 = cljs.core.nth.call(null,inst_11279,0,null);var inst_11281__$1 = cljs.core.nth.call(null,inst_11279,1,null);var inst_11282 = (inst_11280__$1 == null);var inst_11283 = cljs.core._EQ_.call(null,inst_11281__$1,change);var inst_11284 = (inst_11282) || (inst_11283);var state_11316__$1 = (function (){var statearr_11330 = state_11316;(statearr_11330[15] = inst_11280__$1);
(statearr_11330[16] = inst_11281__$1);
return statearr_11330;
})();if(cljs.core.truth_(inst_11284))
{var statearr_11331_11368 = state_11316__$1;(statearr_11331_11368[1] = 11);
} else
{var statearr_11332_11369 = state_11316__$1;(statearr_11332_11369[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 11))
{var inst_11280 = (state_11316[15]);var inst_11286 = (inst_11280 == null);var state_11316__$1 = state_11316;if(cljs.core.truth_(inst_11286))
{var statearr_11333_11370 = state_11316__$1;(statearr_11333_11370[1] = 14);
} else
{var statearr_11334_11371 = state_11316__$1;(statearr_11334_11371[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 12))
{var inst_11295 = (state_11316[17]);var inst_11276 = (state_11316[14]);var inst_11281 = (state_11316[16]);var inst_11295__$1 = inst_11276.call(null,inst_11281);var state_11316__$1 = (function (){var statearr_11335 = state_11316;(statearr_11335[17] = inst_11295__$1);
return statearr_11335;
})();if(cljs.core.truth_(inst_11295__$1))
{var statearr_11336_11372 = state_11316__$1;(statearr_11336_11372[1] = 17);
} else
{var statearr_11337_11373 = state_11316__$1;(statearr_11337_11373[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 13))
{var inst_11312 = (state_11316[2]);var state_11316__$1 = state_11316;var statearr_11338_11374 = state_11316__$1;(statearr_11338_11374[2] = inst_11312);
(statearr_11338_11374[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 14))
{var inst_11281 = (state_11316[16]);var inst_11288 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11281);var state_11316__$1 = state_11316;var statearr_11339_11375 = state_11316__$1;(statearr_11339_11375[2] = inst_11288);
(statearr_11339_11375[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 15))
{var state_11316__$1 = state_11316;var statearr_11340_11376 = state_11316__$1;(statearr_11340_11376[2] = null);
(statearr_11340_11376[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 16))
{var inst_11291 = (state_11316[2]);var inst_11292 = calc_state.call(null);var inst_11265 = inst_11292;var state_11316__$1 = (function (){var statearr_11341 = state_11316;(statearr_11341[18] = inst_11291);
(statearr_11341[8] = inst_11265);
return statearr_11341;
})();var statearr_11342_11377 = state_11316__$1;(statearr_11342_11377[2] = null);
(statearr_11342_11377[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 17))
{var inst_11295 = (state_11316[17]);var state_11316__$1 = state_11316;var statearr_11343_11378 = state_11316__$1;(statearr_11343_11378[2] = inst_11295);
(statearr_11343_11378[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 18))
{var inst_11275 = (state_11316[13]);var inst_11276 = (state_11316[14]);var inst_11281 = (state_11316[16]);var inst_11298 = cljs.core.empty_QMARK_.call(null,inst_11276);var inst_11299 = inst_11275.call(null,inst_11281);var inst_11300 = cljs.core.not.call(null,inst_11299);var inst_11301 = (inst_11298) && (inst_11300);var state_11316__$1 = state_11316;var statearr_11344_11379 = state_11316__$1;(statearr_11344_11379[2] = inst_11301);
(statearr_11344_11379[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 19))
{var inst_11303 = (state_11316[2]);var state_11316__$1 = state_11316;if(cljs.core.truth_(inst_11303))
{var statearr_11345_11380 = state_11316__$1;(statearr_11345_11380[1] = 20);
} else
{var statearr_11346_11381 = state_11316__$1;(statearr_11346_11381[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 20))
{var inst_11280 = (state_11316[15]);var state_11316__$1 = state_11316;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11316__$1,23,out,inst_11280);
} else
{if((state_val_11317 === 21))
{var state_11316__$1 = state_11316;var statearr_11347_11382 = state_11316__$1;(statearr_11347_11382[2] = null);
(statearr_11347_11382[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 22))
{var inst_11273 = (state_11316[12]);var inst_11309 = (state_11316[2]);var inst_11265 = inst_11273;var state_11316__$1 = (function (){var statearr_11348 = state_11316;(statearr_11348[19] = inst_11309);
(statearr_11348[8] = inst_11265);
return statearr_11348;
})();var statearr_11349_11383 = state_11316__$1;(statearr_11349_11383[2] = null);
(statearr_11349_11383[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 23))
{var inst_11306 = (state_11316[2]);var state_11316__$1 = state_11316;var statearr_11350_11384 = state_11316__$1;(statearr_11350_11384[2] = inst_11306);
(statearr_11350_11384[1] = 22);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_11354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11354[0] = state_machine__5509__auto__);
(statearr_11354[1] = 1);
return statearr_11354;
});
var state_machine__5509__auto____1 = (function (state_11316){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11316);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11355){if((e11355 instanceof Object))
{var ex__5512__auto__ = e11355;var statearr_11356_11385 = state_11316;(statearr_11356_11385[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11316);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11355;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11386 = state_11316;
state_11316 = G__11386;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11316){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11357 = f__5524__auto__.call(null);(statearr_11357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11358);
return statearr_11357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
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
cljs.core.async.Pub = (function (){var obj11388 = {};return obj11388;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
return (function (topic){var or__3441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3441__auto__,mults){
return (function (p1__11389_SHARP_){if(cljs.core.truth_(p1__11389_SHARP_.call(null,topic)))
{return p1__11389_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11389_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11514 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11514 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11515){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11515 = meta11515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11514.cljs$lang$type = true;
cljs.core.async.t11514.cljs$lang$ctorStr = "cljs.core.async/t11514";
cljs.core.async.t11514.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11514");
});})(mults,ensure_mult))
;
cljs.core.async.t11514.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11514.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11514.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11514.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11514.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11514.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11514.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11516){var self__ = this;
var _11516__$1 = this;return self__.meta11515;
});})(mults,ensure_mult))
;
cljs.core.async.t11514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11516,meta11515__$1){var self__ = this;
var _11516__$1 = this;return (new cljs.core.async.t11514(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11515__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11514 = ((function (mults,ensure_mult){
return (function __GT_t11514(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11515){return (new cljs.core.async.t11514(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11515));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11514(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5523__auto___11638 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11590){var state_val_11591 = (state_11590[1]);if((state_val_11591 === 1))
{var state_11590__$1 = state_11590;var statearr_11592_11639 = state_11590__$1;(statearr_11592_11639[2] = null);
(statearr_11592_11639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 2))
{var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11590__$1,4,ch);
} else
{if((state_val_11591 === 3))
{var inst_11588 = (state_11590[2]);var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11590__$1,inst_11588);
} else
{if((state_val_11591 === 4))
{var inst_11519 = (state_11590[7]);var inst_11519__$1 = (state_11590[2]);var inst_11520 = (inst_11519__$1 == null);var state_11590__$1 = (function (){var statearr_11593 = state_11590;(statearr_11593[7] = inst_11519__$1);
return statearr_11593;
})();if(cljs.core.truth_(inst_11520))
{var statearr_11594_11640 = state_11590__$1;(statearr_11594_11640[1] = 5);
} else
{var statearr_11595_11641 = state_11590__$1;(statearr_11595_11641[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 5))
{var inst_11526 = cljs.core.deref.call(null,mults);var inst_11527 = cljs.core.vals.call(null,inst_11526);var inst_11528 = cljs.core.seq.call(null,inst_11527);var inst_11529 = inst_11528;var inst_11530 = null;var inst_11531 = 0;var inst_11532 = 0;var state_11590__$1 = (function (){var statearr_11596 = state_11590;(statearr_11596[8] = inst_11532);
(statearr_11596[9] = inst_11531);
(statearr_11596[10] = inst_11530);
(statearr_11596[11] = inst_11529);
return statearr_11596;
})();var statearr_11597_11642 = state_11590__$1;(statearr_11597_11642[2] = null);
(statearr_11597_11642[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 6))
{var inst_11567 = (state_11590[12]);var inst_11519 = (state_11590[7]);var inst_11569 = (state_11590[13]);var inst_11567__$1 = topic_fn.call(null,inst_11519);var inst_11568 = cljs.core.deref.call(null,mults);var inst_11569__$1 = cljs.core.get.call(null,inst_11568,inst_11567__$1);var state_11590__$1 = (function (){var statearr_11598 = state_11590;(statearr_11598[12] = inst_11567__$1);
(statearr_11598[13] = inst_11569__$1);
return statearr_11598;
})();if(cljs.core.truth_(inst_11569__$1))
{var statearr_11599_11643 = state_11590__$1;(statearr_11599_11643[1] = 19);
} else
{var statearr_11600_11644 = state_11590__$1;(statearr_11600_11644[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 7))
{var inst_11586 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11601_11645 = state_11590__$1;(statearr_11601_11645[2] = inst_11586);
(statearr_11601_11645[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 8))
{var inst_11532 = (state_11590[8]);var inst_11531 = (state_11590[9]);var inst_11534 = (inst_11532 < inst_11531);var inst_11535 = inst_11534;var state_11590__$1 = state_11590;if(cljs.core.truth_(inst_11535))
{var statearr_11605_11646 = state_11590__$1;(statearr_11605_11646[1] = 10);
} else
{var statearr_11606_11647 = state_11590__$1;(statearr_11606_11647[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 9))
{var inst_11565 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11607_11648 = state_11590__$1;(statearr_11607_11648[2] = inst_11565);
(statearr_11607_11648[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 10))
{var inst_11532 = (state_11590[8]);var inst_11531 = (state_11590[9]);var inst_11530 = (state_11590[10]);var inst_11529 = (state_11590[11]);var inst_11537 = cljs.core._nth.call(null,inst_11530,inst_11532);var inst_11538 = cljs.core.async.muxch_STAR_.call(null,inst_11537);var inst_11539 = cljs.core.async.close_BANG_.call(null,inst_11538);var inst_11540 = (inst_11532 + 1);var tmp11602 = inst_11531;var tmp11603 = inst_11530;var tmp11604 = inst_11529;var inst_11529__$1 = tmp11604;var inst_11530__$1 = tmp11603;var inst_11531__$1 = tmp11602;var inst_11532__$1 = inst_11540;var state_11590__$1 = (function (){var statearr_11608 = state_11590;(statearr_11608[8] = inst_11532__$1);
(statearr_11608[9] = inst_11531__$1);
(statearr_11608[10] = inst_11530__$1);
(statearr_11608[11] = inst_11529__$1);
(statearr_11608[14] = inst_11539);
return statearr_11608;
})();var statearr_11609_11649 = state_11590__$1;(statearr_11609_11649[2] = null);
(statearr_11609_11649[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 11))
{var inst_11543 = (state_11590[15]);var inst_11529 = (state_11590[11]);var inst_11543__$1 = cljs.core.seq.call(null,inst_11529);var state_11590__$1 = (function (){var statearr_11610 = state_11590;(statearr_11610[15] = inst_11543__$1);
return statearr_11610;
})();if(inst_11543__$1)
{var statearr_11611_11650 = state_11590__$1;(statearr_11611_11650[1] = 13);
} else
{var statearr_11612_11651 = state_11590__$1;(statearr_11612_11651[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 12))
{var inst_11563 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11613_11652 = state_11590__$1;(statearr_11613_11652[2] = inst_11563);
(statearr_11613_11652[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 13))
{var inst_11543 = (state_11590[15]);var inst_11545 = cljs.core.chunked_seq_QMARK_.call(null,inst_11543);var state_11590__$1 = state_11590;if(inst_11545)
{var statearr_11614_11653 = state_11590__$1;(statearr_11614_11653[1] = 16);
} else
{var statearr_11615_11654 = state_11590__$1;(statearr_11615_11654[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 14))
{var state_11590__$1 = state_11590;var statearr_11616_11655 = state_11590__$1;(statearr_11616_11655[2] = null);
(statearr_11616_11655[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 15))
{var inst_11561 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11617_11656 = state_11590__$1;(statearr_11617_11656[2] = inst_11561);
(statearr_11617_11656[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 16))
{var inst_11543 = (state_11590[15]);var inst_11547 = cljs.core.chunk_first.call(null,inst_11543);var inst_11548 = cljs.core.chunk_rest.call(null,inst_11543);var inst_11549 = cljs.core.count.call(null,inst_11547);var inst_11529 = inst_11548;var inst_11530 = inst_11547;var inst_11531 = inst_11549;var inst_11532 = 0;var state_11590__$1 = (function (){var statearr_11618 = state_11590;(statearr_11618[8] = inst_11532);
(statearr_11618[9] = inst_11531);
(statearr_11618[10] = inst_11530);
(statearr_11618[11] = inst_11529);
return statearr_11618;
})();var statearr_11619_11657 = state_11590__$1;(statearr_11619_11657[2] = null);
(statearr_11619_11657[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 17))
{var inst_11543 = (state_11590[15]);var inst_11552 = cljs.core.first.call(null,inst_11543);var inst_11553 = cljs.core.async.muxch_STAR_.call(null,inst_11552);var inst_11554 = cljs.core.async.close_BANG_.call(null,inst_11553);var inst_11555 = cljs.core.next.call(null,inst_11543);var inst_11529 = inst_11555;var inst_11530 = null;var inst_11531 = 0;var inst_11532 = 0;var state_11590__$1 = (function (){var statearr_11620 = state_11590;(statearr_11620[8] = inst_11532);
(statearr_11620[9] = inst_11531);
(statearr_11620[10] = inst_11530);
(statearr_11620[11] = inst_11529);
(statearr_11620[16] = inst_11554);
return statearr_11620;
})();var statearr_11621_11658 = state_11590__$1;(statearr_11621_11658[2] = null);
(statearr_11621_11658[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 18))
{var inst_11558 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11622_11659 = state_11590__$1;(statearr_11622_11659[2] = inst_11558);
(statearr_11622_11659[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 19))
{var state_11590__$1 = state_11590;var statearr_11623_11660 = state_11590__$1;(statearr_11623_11660[2] = null);
(statearr_11623_11660[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 20))
{var state_11590__$1 = state_11590;var statearr_11624_11661 = state_11590__$1;(statearr_11624_11661[2] = null);
(statearr_11624_11661[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 21))
{var inst_11583 = (state_11590[2]);var state_11590__$1 = (function (){var statearr_11625 = state_11590;(statearr_11625[17] = inst_11583);
return statearr_11625;
})();var statearr_11626_11662 = state_11590__$1;(statearr_11626_11662[2] = null);
(statearr_11626_11662[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 22))
{var inst_11580 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11627_11663 = state_11590__$1;(statearr_11627_11663[2] = inst_11580);
(statearr_11627_11663[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 23))
{var inst_11567 = (state_11590[12]);var inst_11571 = (state_11590[2]);var inst_11572 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11567);var state_11590__$1 = (function (){var statearr_11628 = state_11590;(statearr_11628[18] = inst_11571);
return statearr_11628;
})();var statearr_11629_11664 = state_11590__$1;(statearr_11629_11664[2] = inst_11572);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11590__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 24))
{var inst_11519 = (state_11590[7]);var inst_11569 = (state_11590[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11590,23,Object,null,22);var inst_11576 = cljs.core.async.muxch_STAR_.call(null,inst_11569);var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11590__$1,25,inst_11576,inst_11519);
} else
{if((state_val_11591 === 25))
{var inst_11578 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11630_11665 = state_11590__$1;(statearr_11630_11665[2] = inst_11578);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11590__$1);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_11634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11634[0] = state_machine__5509__auto__);
(statearr_11634[1] = 1);
return statearr_11634;
});
var state_machine__5509__auto____1 = (function (state_11590){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11590);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11635){if((e11635 instanceof Object))
{var ex__5512__auto__ = e11635;var statearr_11636_11666 = state_11590;(statearr_11636_11666[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11590);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11667 = state_11590;
state_11590 = G__11667;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11590){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11637 = f__5524__auto__.call(null);(statearr_11637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11638);
return statearr_11637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
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
,cljs.core.range.call(null,cnt));var c__5523__auto___11804 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11774){var state_val_11775 = (state_11774[1]);if((state_val_11775 === 1))
{var state_11774__$1 = state_11774;var statearr_11776_11805 = state_11774__$1;(statearr_11776_11805[2] = null);
(statearr_11776_11805[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 2))
{var inst_11737 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11738 = 0;var state_11774__$1 = (function (){var statearr_11777 = state_11774;(statearr_11777[7] = inst_11738);
(statearr_11777[8] = inst_11737);
return statearr_11777;
})();var statearr_11778_11806 = state_11774__$1;(statearr_11778_11806[2] = null);
(statearr_11778_11806[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 3))
{var inst_11772 = (state_11774[2]);var state_11774__$1 = state_11774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11774__$1,inst_11772);
} else
{if((state_val_11775 === 4))
{var inst_11738 = (state_11774[7]);var inst_11740 = (inst_11738 < cnt);var state_11774__$1 = state_11774;if(cljs.core.truth_(inst_11740))
{var statearr_11779_11807 = state_11774__$1;(statearr_11779_11807[1] = 6);
} else
{var statearr_11780_11808 = state_11774__$1;(statearr_11780_11808[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 5))
{var inst_11758 = (state_11774[2]);var state_11774__$1 = (function (){var statearr_11781 = state_11774;(statearr_11781[9] = inst_11758);
return statearr_11781;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11774__$1,12,dchan);
} else
{if((state_val_11775 === 6))
{var state_11774__$1 = state_11774;var statearr_11782_11809 = state_11774__$1;(statearr_11782_11809[2] = null);
(statearr_11782_11809[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 7))
{var state_11774__$1 = state_11774;var statearr_11783_11810 = state_11774__$1;(statearr_11783_11810[2] = null);
(statearr_11783_11810[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 8))
{var inst_11756 = (state_11774[2]);var state_11774__$1 = state_11774;var statearr_11784_11811 = state_11774__$1;(statearr_11784_11811[2] = inst_11756);
(statearr_11784_11811[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 9))
{var inst_11738 = (state_11774[7]);var inst_11751 = (state_11774[2]);var inst_11752 = (inst_11738 + 1);var inst_11738__$1 = inst_11752;var state_11774__$1 = (function (){var statearr_11785 = state_11774;(statearr_11785[7] = inst_11738__$1);
(statearr_11785[10] = inst_11751);
return statearr_11785;
})();var statearr_11786_11812 = state_11774__$1;(statearr_11786_11812[2] = null);
(statearr_11786_11812[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 10))
{var inst_11742 = (state_11774[2]);var inst_11743 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11774__$1 = (function (){var statearr_11787 = state_11774;(statearr_11787[11] = inst_11742);
return statearr_11787;
})();var statearr_11788_11813 = state_11774__$1;(statearr_11788_11813[2] = inst_11743);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11774__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 11))
{var inst_11738 = (state_11774[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11774,10,Object,null,9);var inst_11747 = chs__$1.call(null,inst_11738);var inst_11748 = done.call(null,inst_11738);var inst_11749 = cljs.core.async.take_BANG_.call(null,inst_11747,inst_11748);var state_11774__$1 = state_11774;var statearr_11789_11814 = state_11774__$1;(statearr_11789_11814[2] = inst_11749);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11774__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 12))
{var inst_11760 = (state_11774[12]);var inst_11760__$1 = (state_11774[2]);var inst_11761 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11760__$1);var state_11774__$1 = (function (){var statearr_11790 = state_11774;(statearr_11790[12] = inst_11760__$1);
return statearr_11790;
})();if(cljs.core.truth_(inst_11761))
{var statearr_11791_11815 = state_11774__$1;(statearr_11791_11815[1] = 13);
} else
{var statearr_11792_11816 = state_11774__$1;(statearr_11792_11816[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 13))
{var inst_11763 = cljs.core.async.close_BANG_.call(null,out);var state_11774__$1 = state_11774;var statearr_11793_11817 = state_11774__$1;(statearr_11793_11817[2] = inst_11763);
(statearr_11793_11817[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 14))
{var inst_11760 = (state_11774[12]);var inst_11765 = cljs.core.apply.call(null,f,inst_11760);var state_11774__$1 = state_11774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11774__$1,16,out,inst_11765);
} else
{if((state_val_11775 === 15))
{var inst_11770 = (state_11774[2]);var state_11774__$1 = state_11774;var statearr_11794_11818 = state_11774__$1;(statearr_11794_11818[2] = inst_11770);
(statearr_11794_11818[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 16))
{var inst_11767 = (state_11774[2]);var state_11774__$1 = (function (){var statearr_11795 = state_11774;(statearr_11795[13] = inst_11767);
return statearr_11795;
})();var statearr_11796_11819 = state_11774__$1;(statearr_11796_11819[2] = null);
(statearr_11796_11819[1] = 2);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_11800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11800[0] = state_machine__5509__auto__);
(statearr_11800[1] = 1);
return statearr_11800;
});
var state_machine__5509__auto____1 = (function (state_11774){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11774);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11801){if((e11801 instanceof Object))
{var ex__5512__auto__ = e11801;var statearr_11802_11820 = state_11774;(statearr_11802_11820[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11774);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11821 = state_11774;
state_11774 = G__11821;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11774){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11803 = f__5524__auto__.call(null);(statearr_11803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11804);
return statearr_11803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___11929 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11905){var state_val_11906 = (state_11905[1]);if((state_val_11906 === 1))
{var inst_11876 = cljs.core.vec.call(null,chs);var inst_11877 = inst_11876;var state_11905__$1 = (function (){var statearr_11907 = state_11905;(statearr_11907[7] = inst_11877);
return statearr_11907;
})();var statearr_11908_11930 = state_11905__$1;(statearr_11908_11930[2] = null);
(statearr_11908_11930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11906 === 2))
{var inst_11877 = (state_11905[7]);var inst_11879 = cljs.core.count.call(null,inst_11877);var inst_11880 = (inst_11879 > 0);var state_11905__$1 = state_11905;if(cljs.core.truth_(inst_11880))
{var statearr_11909_11931 = state_11905__$1;(statearr_11909_11931[1] = 4);
} else
{var statearr_11910_11932 = state_11905__$1;(statearr_11910_11932[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11906 === 3))
{var inst_11903 = (state_11905[2]);var state_11905__$1 = state_11905;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11905__$1,inst_11903);
} else
{if((state_val_11906 === 4))
{var inst_11877 = (state_11905[7]);var state_11905__$1 = state_11905;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11905__$1,7,inst_11877);
} else
{if((state_val_11906 === 5))
{var inst_11899 = cljs.core.async.close_BANG_.call(null,out);var state_11905__$1 = state_11905;var statearr_11911_11933 = state_11905__$1;(statearr_11911_11933[2] = inst_11899);
(statearr_11911_11933[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11906 === 6))
{var inst_11901 = (state_11905[2]);var state_11905__$1 = state_11905;var statearr_11912_11934 = state_11905__$1;(statearr_11912_11934[2] = inst_11901);
(statearr_11912_11934[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11906 === 7))
{var inst_11885 = (state_11905[8]);var inst_11884 = (state_11905[9]);var inst_11884__$1 = (state_11905[2]);var inst_11885__$1 = cljs.core.nth.call(null,inst_11884__$1,0,null);var inst_11886 = cljs.core.nth.call(null,inst_11884__$1,1,null);var inst_11887 = (inst_11885__$1 == null);var state_11905__$1 = (function (){var statearr_11913 = state_11905;(statearr_11913[8] = inst_11885__$1);
(statearr_11913[10] = inst_11886);
(statearr_11913[9] = inst_11884__$1);
return statearr_11913;
})();if(cljs.core.truth_(inst_11887))
{var statearr_11914_11935 = state_11905__$1;(statearr_11914_11935[1] = 8);
} else
{var statearr_11915_11936 = state_11905__$1;(statearr_11915_11936[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11906 === 8))
{var inst_11885 = (state_11905[8]);var inst_11886 = (state_11905[10]);var inst_11884 = (state_11905[9]);var inst_11877 = (state_11905[7]);var inst_11889 = (function (){var c = inst_11886;var v = inst_11885;var vec__11882 = inst_11884;var cs = inst_11877;return ((function (c,v,vec__11882,cs,inst_11885,inst_11886,inst_11884,inst_11877,state_val_11906){
return (function (p1__11822_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11822_SHARP_);
});
;})(c,v,vec__11882,cs,inst_11885,inst_11886,inst_11884,inst_11877,state_val_11906))
})();var inst_11890 = cljs.core.filterv.call(null,inst_11889,inst_11877);var inst_11877__$1 = inst_11890;var state_11905__$1 = (function (){var statearr_11916 = state_11905;(statearr_11916[7] = inst_11877__$1);
return statearr_11916;
})();var statearr_11917_11937 = state_11905__$1;(statearr_11917_11937[2] = null);
(statearr_11917_11937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11906 === 9))
{var inst_11885 = (state_11905[8]);var state_11905__$1 = state_11905;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11905__$1,11,out,inst_11885);
} else
{if((state_val_11906 === 10))
{var inst_11897 = (state_11905[2]);var state_11905__$1 = state_11905;var statearr_11919_11938 = state_11905__$1;(statearr_11919_11938[2] = inst_11897);
(statearr_11919_11938[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11906 === 11))
{var inst_11877 = (state_11905[7]);var inst_11894 = (state_11905[2]);var tmp11918 = inst_11877;var inst_11877__$1 = tmp11918;var state_11905__$1 = (function (){var statearr_11920 = state_11905;(statearr_11920[11] = inst_11894);
(statearr_11920[7] = inst_11877__$1);
return statearr_11920;
})();var statearr_11921_11939 = state_11905__$1;(statearr_11921_11939[2] = null);
(statearr_11921_11939[1] = 2);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_11925 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11925[0] = state_machine__5509__auto__);
(statearr_11925[1] = 1);
return statearr_11925;
});
var state_machine__5509__auto____1 = (function (state_11905){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11905);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11926){if((e11926 instanceof Object))
{var ex__5512__auto__ = e11926;var statearr_11927_11940 = state_11905;(statearr_11927_11940[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11905);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11941 = state_11905;
state_11905 = G__11941;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11905){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11928 = f__5524__auto__.call(null);(statearr_11928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11929);
return statearr_11928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___12034 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12011){var state_val_12012 = (state_12011[1]);if((state_val_12012 === 1))
{var inst_11988 = 0;var state_12011__$1 = (function (){var statearr_12013 = state_12011;(statearr_12013[7] = inst_11988);
return statearr_12013;
})();var statearr_12014_12035 = state_12011__$1;(statearr_12014_12035[2] = null);
(statearr_12014_12035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12012 === 2))
{var inst_11988 = (state_12011[7]);var inst_11990 = (inst_11988 < n);var state_12011__$1 = state_12011;if(cljs.core.truth_(inst_11990))
{var statearr_12015_12036 = state_12011__$1;(statearr_12015_12036[1] = 4);
} else
{var statearr_12016_12037 = state_12011__$1;(statearr_12016_12037[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12012 === 3))
{var inst_12008 = (state_12011[2]);var inst_12009 = cljs.core.async.close_BANG_.call(null,out);var state_12011__$1 = (function (){var statearr_12017 = state_12011;(statearr_12017[8] = inst_12008);
return statearr_12017;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12011__$1,inst_12009);
} else
{if((state_val_12012 === 4))
{var state_12011__$1 = state_12011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12011__$1,7,ch);
} else
{if((state_val_12012 === 5))
{var state_12011__$1 = state_12011;var statearr_12018_12038 = state_12011__$1;(statearr_12018_12038[2] = null);
(statearr_12018_12038[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12012 === 6))
{var inst_12006 = (state_12011[2]);var state_12011__$1 = state_12011;var statearr_12019_12039 = state_12011__$1;(statearr_12019_12039[2] = inst_12006);
(statearr_12019_12039[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12012 === 7))
{var inst_11993 = (state_12011[9]);var inst_11993__$1 = (state_12011[2]);var inst_11994 = (inst_11993__$1 == null);var inst_11995 = cljs.core.not.call(null,inst_11994);var state_12011__$1 = (function (){var statearr_12020 = state_12011;(statearr_12020[9] = inst_11993__$1);
return statearr_12020;
})();if(inst_11995)
{var statearr_12021_12040 = state_12011__$1;(statearr_12021_12040[1] = 8);
} else
{var statearr_12022_12041 = state_12011__$1;(statearr_12022_12041[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12012 === 8))
{var inst_11993 = (state_12011[9]);var state_12011__$1 = state_12011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12011__$1,11,out,inst_11993);
} else
{if((state_val_12012 === 9))
{var state_12011__$1 = state_12011;var statearr_12023_12042 = state_12011__$1;(statearr_12023_12042[2] = null);
(statearr_12023_12042[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12012 === 10))
{var inst_12003 = (state_12011[2]);var state_12011__$1 = state_12011;var statearr_12024_12043 = state_12011__$1;(statearr_12024_12043[2] = inst_12003);
(statearr_12024_12043[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12012 === 11))
{var inst_11988 = (state_12011[7]);var inst_11998 = (state_12011[2]);var inst_11999 = (inst_11988 + 1);var inst_11988__$1 = inst_11999;var state_12011__$1 = (function (){var statearr_12025 = state_12011;(statearr_12025[7] = inst_11988__$1);
(statearr_12025[10] = inst_11998);
return statearr_12025;
})();var statearr_12026_12044 = state_12011__$1;(statearr_12026_12044[2] = null);
(statearr_12026_12044[1] = 2);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_12030 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12030[0] = state_machine__5509__auto__);
(statearr_12030[1] = 1);
return statearr_12030;
});
var state_machine__5509__auto____1 = (function (state_12011){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_12011);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12031){if((e12031 instanceof Object))
{var ex__5512__auto__ = e12031;var statearr_12032_12045 = state_12011;(statearr_12032_12045[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12011);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12046 = state_12011;
state_12011 = G__12046;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12011){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12033 = f__5524__auto__.call(null);(statearr_12033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12034);
return statearr_12033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___12143 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12118){var state_val_12119 = (state_12118[1]);if((state_val_12119 === 1))
{var inst_12095 = null;var state_12118__$1 = (function (){var statearr_12120 = state_12118;(statearr_12120[7] = inst_12095);
return statearr_12120;
})();var statearr_12121_12144 = state_12118__$1;(statearr_12121_12144[2] = null);
(statearr_12121_12144[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 2))
{var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12118__$1,4,ch);
} else
{if((state_val_12119 === 3))
{var inst_12115 = (state_12118[2]);var inst_12116 = cljs.core.async.close_BANG_.call(null,out);var state_12118__$1 = (function (){var statearr_12122 = state_12118;(statearr_12122[8] = inst_12115);
return statearr_12122;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12118__$1,inst_12116);
} else
{if((state_val_12119 === 4))
{var inst_12098 = (state_12118[9]);var inst_12098__$1 = (state_12118[2]);var inst_12099 = (inst_12098__$1 == null);var inst_12100 = cljs.core.not.call(null,inst_12099);var state_12118__$1 = (function (){var statearr_12123 = state_12118;(statearr_12123[9] = inst_12098__$1);
return statearr_12123;
})();if(inst_12100)
{var statearr_12124_12145 = state_12118__$1;(statearr_12124_12145[1] = 5);
} else
{var statearr_12125_12146 = state_12118__$1;(statearr_12125_12146[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 5))
{var inst_12098 = (state_12118[9]);var inst_12095 = (state_12118[7]);var inst_12102 = cljs.core._EQ_.call(null,inst_12098,inst_12095);var state_12118__$1 = state_12118;if(inst_12102)
{var statearr_12126_12147 = state_12118__$1;(statearr_12126_12147[1] = 8);
} else
{var statearr_12127_12148 = state_12118__$1;(statearr_12127_12148[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 6))
{var state_12118__$1 = state_12118;var statearr_12129_12149 = state_12118__$1;(statearr_12129_12149[2] = null);
(statearr_12129_12149[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 7))
{var inst_12113 = (state_12118[2]);var state_12118__$1 = state_12118;var statearr_12130_12150 = state_12118__$1;(statearr_12130_12150[2] = inst_12113);
(statearr_12130_12150[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 8))
{var inst_12095 = (state_12118[7]);var tmp12128 = inst_12095;var inst_12095__$1 = tmp12128;var state_12118__$1 = (function (){var statearr_12131 = state_12118;(statearr_12131[7] = inst_12095__$1);
return statearr_12131;
})();var statearr_12132_12151 = state_12118__$1;(statearr_12132_12151[2] = null);
(statearr_12132_12151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 9))
{var inst_12098 = (state_12118[9]);var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12118__$1,11,out,inst_12098);
} else
{if((state_val_12119 === 10))
{var inst_12110 = (state_12118[2]);var state_12118__$1 = state_12118;var statearr_12133_12152 = state_12118__$1;(statearr_12133_12152[2] = inst_12110);
(statearr_12133_12152[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 11))
{var inst_12098 = (state_12118[9]);var inst_12107 = (state_12118[2]);var inst_12095 = inst_12098;var state_12118__$1 = (function (){var statearr_12134 = state_12118;(statearr_12134[10] = inst_12107);
(statearr_12134[7] = inst_12095);
return statearr_12134;
})();var statearr_12135_12153 = state_12118__$1;(statearr_12135_12153[2] = null);
(statearr_12135_12153[1] = 2);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_12139 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12139[0] = state_machine__5509__auto__);
(statearr_12139[1] = 1);
return statearr_12139;
});
var state_machine__5509__auto____1 = (function (state_12118){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_12118);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12140){if((e12140 instanceof Object))
{var ex__5512__auto__ = e12140;var statearr_12141_12154 = state_12118;(statearr_12141_12154[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12118);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12155 = state_12118;
state_12118 = G__12155;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12118){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12142 = f__5524__auto__.call(null);(statearr_12142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12143);
return statearr_12142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___12290 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12260){var state_val_12261 = (state_12260[1]);if((state_val_12261 === 1))
{var inst_12223 = (new Array(n));var inst_12224 = inst_12223;var inst_12225 = 0;var state_12260__$1 = (function (){var statearr_12262 = state_12260;(statearr_12262[7] = inst_12225);
(statearr_12262[8] = inst_12224);
return statearr_12262;
})();var statearr_12263_12291 = state_12260__$1;(statearr_12263_12291[2] = null);
(statearr_12263_12291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 2))
{var state_12260__$1 = state_12260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12260__$1,4,ch);
} else
{if((state_val_12261 === 3))
{var inst_12258 = (state_12260[2]);var state_12260__$1 = state_12260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12260__$1,inst_12258);
} else
{if((state_val_12261 === 4))
{var inst_12228 = (state_12260[9]);var inst_12228__$1 = (state_12260[2]);var inst_12229 = (inst_12228__$1 == null);var inst_12230 = cljs.core.not.call(null,inst_12229);var state_12260__$1 = (function (){var statearr_12264 = state_12260;(statearr_12264[9] = inst_12228__$1);
return statearr_12264;
})();if(inst_12230)
{var statearr_12265_12292 = state_12260__$1;(statearr_12265_12292[1] = 5);
} else
{var statearr_12266_12293 = state_12260__$1;(statearr_12266_12293[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 5))
{var inst_12228 = (state_12260[9]);var inst_12233 = (state_12260[10]);var inst_12225 = (state_12260[7]);var inst_12224 = (state_12260[8]);var inst_12232 = (inst_12224[inst_12225] = inst_12228);var inst_12233__$1 = (inst_12225 + 1);var inst_12234 = (inst_12233__$1 < n);var state_12260__$1 = (function (){var statearr_12267 = state_12260;(statearr_12267[10] = inst_12233__$1);
(statearr_12267[11] = inst_12232);
return statearr_12267;
})();if(cljs.core.truth_(inst_12234))
{var statearr_12268_12294 = state_12260__$1;(statearr_12268_12294[1] = 8);
} else
{var statearr_12269_12295 = state_12260__$1;(statearr_12269_12295[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 6))
{var inst_12225 = (state_12260[7]);var inst_12246 = (inst_12225 > 0);var state_12260__$1 = state_12260;if(cljs.core.truth_(inst_12246))
{var statearr_12271_12296 = state_12260__$1;(statearr_12271_12296[1] = 12);
} else
{var statearr_12272_12297 = state_12260__$1;(statearr_12272_12297[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 7))
{var inst_12256 = (state_12260[2]);var state_12260__$1 = state_12260;var statearr_12273_12298 = state_12260__$1;(statearr_12273_12298[2] = inst_12256);
(statearr_12273_12298[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 8))
{var inst_12233 = (state_12260[10]);var inst_12224 = (state_12260[8]);var tmp12270 = inst_12224;var inst_12224__$1 = tmp12270;var inst_12225 = inst_12233;var state_12260__$1 = (function (){var statearr_12274 = state_12260;(statearr_12274[7] = inst_12225);
(statearr_12274[8] = inst_12224__$1);
return statearr_12274;
})();var statearr_12275_12299 = state_12260__$1;(statearr_12275_12299[2] = null);
(statearr_12275_12299[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 9))
{var inst_12224 = (state_12260[8]);var inst_12238 = cljs.core.vec.call(null,inst_12224);var state_12260__$1 = state_12260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12260__$1,11,out,inst_12238);
} else
{if((state_val_12261 === 10))
{var inst_12244 = (state_12260[2]);var state_12260__$1 = state_12260;var statearr_12276_12300 = state_12260__$1;(statearr_12276_12300[2] = inst_12244);
(statearr_12276_12300[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 11))
{var inst_12240 = (state_12260[2]);var inst_12241 = (new Array(n));var inst_12224 = inst_12241;var inst_12225 = 0;var state_12260__$1 = (function (){var statearr_12277 = state_12260;(statearr_12277[7] = inst_12225);
(statearr_12277[8] = inst_12224);
(statearr_12277[12] = inst_12240);
return statearr_12277;
})();var statearr_12278_12301 = state_12260__$1;(statearr_12278_12301[2] = null);
(statearr_12278_12301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 12))
{var inst_12224 = (state_12260[8]);var inst_12248 = cljs.core.vec.call(null,inst_12224);var state_12260__$1 = state_12260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12260__$1,15,out,inst_12248);
} else
{if((state_val_12261 === 13))
{var state_12260__$1 = state_12260;var statearr_12279_12302 = state_12260__$1;(statearr_12279_12302[2] = null);
(statearr_12279_12302[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 14))
{var inst_12253 = (state_12260[2]);var inst_12254 = cljs.core.async.close_BANG_.call(null,out);var state_12260__$1 = (function (){var statearr_12280 = state_12260;(statearr_12280[13] = inst_12253);
return statearr_12280;
})();var statearr_12281_12303 = state_12260__$1;(statearr_12281_12303[2] = inst_12254);
(statearr_12281_12303[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 15))
{var inst_12250 = (state_12260[2]);var state_12260__$1 = state_12260;var statearr_12282_12304 = state_12260__$1;(statearr_12282_12304[2] = inst_12250);
(statearr_12282_12304[1] = 14);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_12286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12286[0] = state_machine__5509__auto__);
(statearr_12286[1] = 1);
return statearr_12286;
});
var state_machine__5509__auto____1 = (function (state_12260){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_12260);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12287){if((e12287 instanceof Object))
{var ex__5512__auto__ = e12287;var statearr_12288_12305 = state_12260;(statearr_12288_12305[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12306 = state_12260;
state_12260 = G__12306;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12260){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12289 = f__5524__auto__.call(null);(statearr_12289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12290);
return statearr_12289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___12449 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12419){var state_val_12420 = (state_12419[1]);if((state_val_12420 === 1))
{var inst_12378 = [];var inst_12379 = inst_12378;var inst_12380 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12419__$1 = (function (){var statearr_12421 = state_12419;(statearr_12421[7] = inst_12380);
(statearr_12421[8] = inst_12379);
return statearr_12421;
})();var statearr_12422_12450 = state_12419__$1;(statearr_12422_12450[2] = null);
(statearr_12422_12450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 2))
{var state_12419__$1 = state_12419;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12419__$1,4,ch);
} else
{if((state_val_12420 === 3))
{var inst_12417 = (state_12419[2]);var state_12419__$1 = state_12419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12419__$1,inst_12417);
} else
{if((state_val_12420 === 4))
{var inst_12383 = (state_12419[9]);var inst_12383__$1 = (state_12419[2]);var inst_12384 = (inst_12383__$1 == null);var inst_12385 = cljs.core.not.call(null,inst_12384);var state_12419__$1 = (function (){var statearr_12423 = state_12419;(statearr_12423[9] = inst_12383__$1);
return statearr_12423;
})();if(inst_12385)
{var statearr_12424_12451 = state_12419__$1;(statearr_12424_12451[1] = 5);
} else
{var statearr_12425_12452 = state_12419__$1;(statearr_12425_12452[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 5))
{var inst_12383 = (state_12419[9]);var inst_12380 = (state_12419[7]);var inst_12387 = (state_12419[10]);var inst_12387__$1 = f.call(null,inst_12383);var inst_12388 = cljs.core._EQ_.call(null,inst_12387__$1,inst_12380);var inst_12389 = cljs.core.keyword_identical_QMARK_.call(null,inst_12380,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12390 = (inst_12388) || (inst_12389);var state_12419__$1 = (function (){var statearr_12426 = state_12419;(statearr_12426[10] = inst_12387__$1);
return statearr_12426;
})();if(cljs.core.truth_(inst_12390))
{var statearr_12427_12453 = state_12419__$1;(statearr_12427_12453[1] = 8);
} else
{var statearr_12428_12454 = state_12419__$1;(statearr_12428_12454[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 6))
{var inst_12379 = (state_12419[8]);var inst_12404 = inst_12379.length;var inst_12405 = (inst_12404 > 0);var state_12419__$1 = state_12419;if(cljs.core.truth_(inst_12405))
{var statearr_12430_12455 = state_12419__$1;(statearr_12430_12455[1] = 12);
} else
{var statearr_12431_12456 = state_12419__$1;(statearr_12431_12456[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 7))
{var inst_12415 = (state_12419[2]);var state_12419__$1 = state_12419;var statearr_12432_12457 = state_12419__$1;(statearr_12432_12457[2] = inst_12415);
(statearr_12432_12457[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 8))
{var inst_12383 = (state_12419[9]);var inst_12387 = (state_12419[10]);var inst_12379 = (state_12419[8]);var inst_12392 = inst_12379.push(inst_12383);var tmp12429 = inst_12379;var inst_12379__$1 = tmp12429;var inst_12380 = inst_12387;var state_12419__$1 = (function (){var statearr_12433 = state_12419;(statearr_12433[7] = inst_12380);
(statearr_12433[11] = inst_12392);
(statearr_12433[8] = inst_12379__$1);
return statearr_12433;
})();var statearr_12434_12458 = state_12419__$1;(statearr_12434_12458[2] = null);
(statearr_12434_12458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 9))
{var inst_12379 = (state_12419[8]);var inst_12395 = cljs.core.vec.call(null,inst_12379);var state_12419__$1 = state_12419;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12419__$1,11,out,inst_12395);
} else
{if((state_val_12420 === 10))
{var inst_12402 = (state_12419[2]);var state_12419__$1 = state_12419;var statearr_12435_12459 = state_12419__$1;(statearr_12435_12459[2] = inst_12402);
(statearr_12435_12459[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 11))
{var inst_12383 = (state_12419[9]);var inst_12387 = (state_12419[10]);var inst_12397 = (state_12419[2]);var inst_12398 = [];var inst_12399 = inst_12398.push(inst_12383);var inst_12379 = inst_12398;var inst_12380 = inst_12387;var state_12419__$1 = (function (){var statearr_12436 = state_12419;(statearr_12436[7] = inst_12380);
(statearr_12436[12] = inst_12399);
(statearr_12436[13] = inst_12397);
(statearr_12436[8] = inst_12379);
return statearr_12436;
})();var statearr_12437_12460 = state_12419__$1;(statearr_12437_12460[2] = null);
(statearr_12437_12460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 12))
{var inst_12379 = (state_12419[8]);var inst_12407 = cljs.core.vec.call(null,inst_12379);var state_12419__$1 = state_12419;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12419__$1,15,out,inst_12407);
} else
{if((state_val_12420 === 13))
{var state_12419__$1 = state_12419;var statearr_12438_12461 = state_12419__$1;(statearr_12438_12461[2] = null);
(statearr_12438_12461[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 14))
{var inst_12412 = (state_12419[2]);var inst_12413 = cljs.core.async.close_BANG_.call(null,out);var state_12419__$1 = (function (){var statearr_12439 = state_12419;(statearr_12439[14] = inst_12412);
return statearr_12439;
})();var statearr_12440_12462 = state_12419__$1;(statearr_12440_12462[2] = inst_12413);
(statearr_12440_12462[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12420 === 15))
{var inst_12409 = (state_12419[2]);var state_12419__$1 = state_12419;var statearr_12441_12463 = state_12419__$1;(statearr_12441_12463[2] = inst_12409);
(statearr_12441_12463[1] = 14);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_12445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12445[0] = state_machine__5509__auto__);
(statearr_12445[1] = 1);
return statearr_12445;
});
var state_machine__5509__auto____1 = (function (state_12419){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_12419);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12446){if((e12446 instanceof Object))
{var ex__5512__auto__ = e12446;var statearr_12447_12464 = state_12419;(statearr_12447_12464[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12419);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12465 = state_12419;
state_12419 = G__12465;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12419){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12448 = f__5524__auto__.call(null);(statearr_12448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12449);
return statearr_12448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
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