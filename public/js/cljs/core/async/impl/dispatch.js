// Compiled by ClojureScript 0.0-2030
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.message_channel = null;
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,32);
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = 1024;
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){cljs.core.async.impl.dispatch.running_QMARK_ = true;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
var count_17199 = 0;while(true){
var m_17200 = cljs.core.async.impl.dispatch.tasks.pop();if((m_17200 == null))
{} else
{m_17200.call(null);
if((count_17199 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__17201 = (count_17199 + 1);
count_17199 = G__17201;
continue;
}
} else
{}
}
break;
}
cljs.core.async.impl.dispatch.running_QMARK_ = false;
if((cljs.core.async.impl.dispatch.tasks.length > 0))
{return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else
{return null;
}
});
if(typeof MessageChannel !== 'undefined')
{cljs.core.async.impl.dispatch.message_channel = (new MessageChannel());
cljs.core.async.impl.dispatch.message_channel.port1.onmessage = (function (msg){return cljs.core.async.impl.dispatch.process_messages.call(null);
});
} else
{}
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__3114__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__3114__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__3114__auto__;
}
})()))
{return null;
} else
{cljs.core.async.impl.dispatch.queued_QMARK_ = true;
if(typeof MessageChannel !== 'undefined')
{return cljs.core.async.impl.dispatch.message_channel.port2.postMessage(0);
} else
{if(typeof setImmediate !== 'undefined')
{return setImmediate(cljs.core.async.impl.dispatch.process_messages);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return setTimeout(cljs.core.async.impl.dispatch.process_messages,0);
} else
{return null;
}
}
}
}
});
cljs.core.async.impl.dispatch.run = (function run(f){cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){return setTimeout(f,delay);
});

//# sourceMappingURL=dispatch.js.map