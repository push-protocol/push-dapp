import{mc as o,lM as I,md as A,me as k,mf as x,mg as C,mh as M,mi as O,m0 as w,l_ as S,dd as T,l$ as U,m1 as j,m2 as q,lG as E,m3 as P,m4 as z,m5 as F,m6 as G,cu as K,ct as L,m7 as R,m8 as W,m9 as $,ma as D,mb as V,__tla as B}from"./index-ClFky8uL.js";let l,h,d,g,f,H=Promise.all([(()=>{try{return B}catch{}})()]).then(async()=>{let p,c,v,y;p=function(i){o(s,i);function s(e,n){return i.call(this)||this}return s.prototype.schedule=function(e,n){return this},s}(I),c={setInterval:function(i,s){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];return setInterval.apply(void 0,A([i,s],k(e)))},clearInterval:function(i){return clearInterval(i)},delegate:void 0},v=function(i){o(s,i);function s(e,n){var t=i.call(this,e,n)||this;return t.scheduler=e,t.work=n,t.pending=!1,t}return s.prototype.schedule=function(e,n){var t;if(n===void 0&&(n=0),this.closed)return this;this.state=e;var r=this.id,u=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(u,r,n)),this.pending=!0,this.delay=n,this.id=(t=this.id)!==null&&t!==void 0?t:this.requestAsyncId(u,this.id,n),this},s.prototype.requestAsyncId=function(e,n,t){return t===void 0&&(t=0),c.setInterval(e.flush.bind(e,this),t)},s.prototype.recycleAsyncId=function(e,n,t){if(t===void 0&&(t=0),t!=null&&this.delay===t&&this.pending===!1)return n;n!=null&&c.clearInterval(n)},s.prototype.execute=function(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var t=this._execute(e,n);if(t)return t;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},s.prototype._execute=function(e,n){var t=!1,r;try{this.work(e)}catch(u){t=!0,r=u||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),r},s.prototype.unsubscribe=function(){if(!this.closed){var e=this,n=e.id,t=e.scheduler,r=t.actions;this.work=this.state=this.scheduler=null,this.pending=!1,x(r,this),n!=null&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null,i.prototype.unsubscribe.call(this)}},s}(p),l=function(){function i(s,e){e===void 0&&(e=i.now),this.schedulerActionCtor=s,this.now=e}return i.prototype.schedule=function(s,e,n){return e===void 0&&(e=0),new this.schedulerActionCtor(this,s).schedule(n,e)},i.now=C.now,i}(),y=function(i){o(s,i);function s(e,n){n===void 0&&(n=l.now);var t=i.call(this,e,n)||this;return t.actions=[],t._active=!1,t}return s.prototype.flush=function(e){var n=this.actions;if(this._active){n.push(e);return}var t;this._active=!0;do if(t=e.execute(e.state,e.delay))break;while(e=n.shift());if(this._active=!1,t){for(;e=n.shift();)e.unsubscribe();throw t}},s}(l),h=new y(v),d=function(i,s){return s===void 0&&(s=h),M(function(e,n){var t=null,r=null,u=null,m=function(){if(t){t.unsubscribe(),t=null;var a=r;r=null,n.next(a)}};function _(){var a=u+i,b=s.now();if(b<a){t=this.schedule(void 0,a-b),n.add(t);return}m()}e.subscribe(O(n,function(a){r=a,u=s.now(),t||(t=s.schedule(_,i),n.add(t))},function(){m(),n.complete()},void 0,function(){r=t=null}))})},f=function(i){return w(function(s,e){return i<=e})},g=Object.freeze(Object.defineProperty({__proto__:null,concatAll:S,debounceTime:d,distinctUntilChanged:T,distinctUntilKeyChanged:U,filter:w,map:j,mapTo:q,mergeAll:E,mergeMap:P,observeOn:z,pluck:F,share:G,shareReplay:K,skip:f,startWith:L,subscribeOn:R,switchMap:W,take:$,takeUntil:D,withLatestFrom:V},Symbol.toStringTag,{value:"Module"}))});export{l as S,H as __tla,h as a,d,g as i,f as s};
