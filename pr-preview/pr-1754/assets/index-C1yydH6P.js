import{jZ as o,jx as m,j_ as I,j$ as k,k0 as A,k1 as x,k2 as O,k3 as S,jN as w,jL as C,aa as M,jM as T,jO as U,jP as P,jr as q,jQ as E,jR as L,jS as R,jT as W,o as z,n as F,jU as K,jV as N,jW as Q,jX as V,jY as Y,__tla as X}from"./index-DPiek688.js";let c,h,d,g,f,Z=Promise.all([(()=>{try{return X}catch{}})()]).then(async()=>{let p,l,v,y;p=function(i){o(s,i);function s(e,n){return i.call(this)||this}return s.prototype.schedule=function(e,n){return this},s}(m),l={setInterval:function(i,s){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];return setInterval.apply(void 0,I([i,s],k(e)))},clearInterval:function(i){var s=l.delegate;return((s==null?void 0:s.clearInterval)||clearInterval)(i)},delegate:void 0},v=function(i){o(s,i);function s(e,n){var t=i.call(this,e,n)||this;return t.scheduler=e,t.work=n,t.pending=!1,t}return s.prototype.schedule=function(e,n){var t;if(n===void 0&&(n=0),this.closed)return this;this.state=e;var r=this.id,a=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(a,r,n)),this.pending=!0,this.delay=n,this.id=(t=this.id)!==null&&t!==void 0?t:this.requestAsyncId(a,this.id,n),this},s.prototype.requestAsyncId=function(e,n,t){return t===void 0&&(t=0),l.setInterval(e.flush.bind(e,this),t)},s.prototype.recycleAsyncId=function(e,n,t){if(t===void 0&&(t=0),t!=null&&this.delay===t&&this.pending===!1)return n;n!=null&&l.clearInterval(n)},s.prototype.execute=function(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var t=this._execute(e,n);if(t)return t;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},s.prototype._execute=function(e,n){var t=!1,r;try{this.work(e)}catch(a){t=!0,r=a||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),r},s.prototype.unsubscribe=function(){if(!this.closed){var e=this,n=e.id,t=e.scheduler,r=t.actions;this.work=this.state=this.scheduler=null,this.pending=!1,A(r,this),n!=null&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null,i.prototype.unsubscribe.call(this)}},s}(p),c=function(){function i(s,e){e===void 0&&(e=i.now),this.schedulerActionCtor=s,this.now=e}return i.prototype.schedule=function(s,e,n){return e===void 0&&(e=0),new this.schedulerActionCtor(this,s).schedule(n,e)},i.now=x.now,i}(),y=function(i){o(s,i);function s(e,n){n===void 0&&(n=c.now);var t=i.call(this,e,n)||this;return t.actions=[],t._active=!1,t}return s.prototype.flush=function(e){var n=this.actions;if(this._active){n.push(e);return}var t;this._active=!0;do if(t=e.execute(e.state,e.delay))break;while(e=n.shift());if(this._active=!1,t){for(;e=n.shift();)e.unsubscribe();throw t}},s}(c),h=new y(v),d=function(i,s){return s===void 0&&(s=h),O(function(e,n){var t=null,r=null,a=null,b=function(){if(t){t.unsubscribe(),t=null;var u=r;r=null,n.next(u)}};function _(){var u=a+i,j=s.now();if(j<u){t=this.schedule(void 0,u-j),n.add(t);return}b()}e.subscribe(S(n,function(u){r=u,a=s.now(),t||(t=s.schedule(_,i),n.add(t))},function(){b(),n.complete()},void 0,function(){r=t=null}))})},f=function(i){return w(function(s,e){return i<=e})},g=Object.freeze(Object.defineProperty({__proto__:null,concatAll:C,debounceTime:d,distinctUntilChanged:M,distinctUntilKeyChanged:T,filter:w,map:U,mapTo:P,mergeAll:q,mergeMap:E,observeOn:L,pluck:R,share:W,shareReplay:z,skip:f,startWith:F,subscribeOn:K,switchMap:N,take:Q,takeUntil:V,withLatestFrom:Y},Symbol.toStringTag,{value:"Module"}))});export{c as S,Z as __tla,h as a,d,g as i,f as s};