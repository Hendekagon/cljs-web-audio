// Compiled by ClojureScript 0.0-2030
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t17213 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t17213 = (function (f,fn_handler,meta17214){
this.f = f;
this.fn_handler = fn_handler;
this.meta17214 = meta17214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t17213.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t17213.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t17213";
cljs.core.async.impl.ioc_helpers.t17213.cljs$lang$ctorPrWriter = (function (this__3660__auto__,writer__3661__auto__,opt__3662__auto__){return cljs.core._write.call(null,writer__3661__auto__,"cljs.core.async.impl.ioc-helpers/t17213");
});
cljs.core.async.impl.ioc_helpers.t17213.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t17213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t17213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t17213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17215){var self__ = this;
var _17215__$1 = this;return self__.meta17214;
});
cljs.core.async.impl.ioc_helpers.t17213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17215,meta17214__$1){var self__ = this;
var _17215__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t17213(self__.f,self__.fn_handler,meta17214__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t17213 = (function __GT_t17213(f__$1,fn_handler__$1,meta17214){return (new cljs.core.async.impl.ioc_helpers.t17213(f__$1,fn_handler__$1,meta17214));
});
}
return (new cljs.core.async.impl.ioc_helpers.t17213(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e17217){if((e17217 instanceof Object))
{var ex = e17217;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17217;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_17220_17222 = state;(statearr_17220_17222[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_17220_17222[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_17221_17223 = state;(statearr_17221_17223[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_17221_17223[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_17226_17228 = state;(statearr_17226_17228[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_17226_17228[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_17227_17229 = state;(statearr_17227_17229[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_17227_17229[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__17230){var map__17235 = p__17230;var map__17235__$1 = ((cljs.core.seq_QMARK_.call(null,map__17235))?cljs.core.apply.call(null,cljs.core.hash_map,map__17235):map__17235);var opts = map__17235__$1;var statearr_17236_17239 = state;(statearr_17236_17239[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,(function (val){var statearr_17237_17240 = state;(statearr_17237_17240[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_17238_17241 = state;(statearr_17238_17241[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__17230 = null;if (arguments.length > 3) {
  p__17230 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__17230);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__17242){
var state = cljs.core.first(arglist__17242);
arglist__17242 = cljs.core.next(arglist__17242);
var cont_block = cljs.core.first(arglist__17242);
arglist__17242 = cljs.core.next(arglist__17242);
var ports = cljs.core.first(arglist__17242);
var p__17230 = cljs.core.rest(arglist__17242);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__17230);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){return null;
})));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3673__auto__){var self__ = this;
var this__3673__auto____$1 = this;var h__3527__auto__ = self__.__hash;if(!((h__3527__auto__ == null)))
{return h__3527__auto__;
} else
{var h__3527__auto____$1 = cljs.core.hash_imap.call(null,this__3673__auto____$1);self__.__hash = h__3527__auto____$1;
return h__3527__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3678__auto__,k__3679__auto__){var self__ = this;
var this__3678__auto____$1 = this;return cljs.core._lookup.call(null,this__3678__auto____$1,k__3679__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3680__auto__,k17244,else__3681__auto__){var self__ = this;
var this__3680__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k17244,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17244,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17244,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17244,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k17244,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k17244,else__3681__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3685__auto__,k__3686__auto__,G__17243){var self__ = this;
var this__3685__auto____$1 = this;var pred__17246 = cljs.core.keyword_identical_QMARK_;var expr__17247 = k__3686__auto__;if(pred__17246.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__17247))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__17243,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(pred__17246.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__17247))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__17243,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(pred__17246.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__17247))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__17243,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(pred__17246.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__17247))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__17243,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(pred__17246.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__17247))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__17243,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3686__auto__,G__17243),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3692__auto__,writer__3693__auto__,opts__3694__auto__){var self__ = this;
var this__3692__auto____$1 = this;var pr_pair__3695__auto__ = (function (keyval__3696__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3693__auto__,cljs.core.pr_writer,""," ","",opts__3694__auto__,keyval__3696__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3693__auto__,pr_pair__3695__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__3694__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],true)], true),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3683__auto__,entry__3684__auto__){var self__ = this;
var this__3683__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3684__auto__))
{return cljs.core._assoc.call(null,this__3683__auto____$1,cljs.core._nth.call(null,entry__3684__auto__,0),cljs.core._nth.call(null,entry__3684__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3683__auto____$1,entry__3684__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3690__auto__){var self__ = this;
var this__3690__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],true)], true),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3682__auto__){var self__ = this;
var this__3682__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3674__auto__,other__3675__auto__){var self__ = this;
var this__3674__auto____$1 = this;if(cljs.core.truth_((function (){var and__3114__auto__ = other__3675__auto__;if(cljs.core.truth_(and__3114__auto__))
{var and__3114__auto____$1 = (this__3674__auto____$1.constructor === other__3675__auto__.constructor);if(and__3114__auto____$1)
{return cljs.core.equiv_map.call(null,this__3674__auto____$1,other__3675__auto__);
} else
{return and__3114__auto____$1;
}
} else
{return and__3114__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3677__auto__,G__17243){var self__ = this;
var this__3677__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__17243,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3676__auto__){var self__ = this;
var this__3676__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3687__auto__,k__3688__auto__){var self__ = this;
var this__3687__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], true),k__3688__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3687__auto____$1),self__.__meta),k__3688__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3688__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__3712__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__3712__auto__,writer__3713__auto__){return cljs.core._write.call(null,writer__3713__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__17245){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__17245),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__17245),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__17245),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__17245),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__17245),null,cljs.core.dissoc.call(null,G__17245,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_17250 = state;(statearr_17250[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_17250;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3114__auto__ = exception;if(cljs.core.truth_(and__3114__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__3114__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3114__auto__ = exception;if(cljs.core.truth_(and__3114__auto__))
{var and__3114__auto____$1 = catch_block;if(cljs.core.truth_(and__3114__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3114__auto____$1;
}
} else
{return and__3114__auto__;
}
})()))
{var statearr_17256 = state;(statearr_17256[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_17256[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_17256[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_17256[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_17256;
} else
{if(cljs.core.truth_((function (){var and__3114__auto__ = exception;if(cljs.core.truth_(and__3114__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3114__auto__;
}
})()))
{var statearr_17257_17261 = state;(statearr_17257_17261[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__17262 = state;
state = G__17262;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3114__auto__ = exception;if(cljs.core.truth_(and__3114__auto__))
{var and__3114__auto____$1 = cljs.core.not.call(null,catch_block);if(and__3114__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3114__auto____$1;
}
} else
{return and__3114__auto__;
}
})()))
{var statearr_17258 = state;(statearr_17258[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_17258[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_17258;
} else
{if(cljs.core.truth_((function (){var and__3114__auto__ = cljs.core.not.call(null,exception);if(and__3114__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3114__auto__;
}
})()))
{var statearr_17259 = state;(statearr_17259[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_17259[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_17259;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_17260 = state;(statearr_17260[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_17260[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_17260;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,false))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=ioc_helpers.js.map