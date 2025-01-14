import{lD as o,lb as I,lE as A,lF as k,lG as x,lH as C,lI as O,lJ as S,lr as g,lp as q,db as E,lq as M,ls as T,lt as U,l5 as j,lu as z,lv as F,lw as P,lx as B,cs as D,cr as G,ly as H,lz as K,lA as R,lB as W,lC as J,__tla as L}from"./index-D0jDe29v.js";let a,h,d,_,f,V=Promise.all([(()=>{try{return L}catch{}})()]).then(async()=>{let p,c,v,y;p=function(i){o(s,i);function s(e,n){return i.call(this)||this}return s.prototype.schedule=function(e,n){return this},s}(I),c={setInterval:function(i,s){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];return setInterval.apply(void 0,A([i,s],k(e)))},clearInterval:function(i){return clearInterval(i)},delegate:void 0},v=function(i){o(s,i);function s(e,n){var t=i.call(this,e,n)||this;return t.scheduler=e,t.work=n,t.pending=!1,t}return s.prototype.schedule=function(e,n){var t;if(n===void 0&&(n=0),this.closed)return this;this.state=e;var r=this.id,l=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(l,r,n)),this.pending=!0,this.delay=n,this.id=(t=this.id)!==null&&t!==void 0?t:this.requestAsyncId(l,this.id,n),this},s.prototype.requestAsyncId=function(e,n,t){return t===void 0&&(t=0),c.setInterval(e.flush.bind(e,this),t)},s.prototype.recycleAsyncId=function(e,n,t){if(t===void 0&&(t=0),t!=null&&this.delay===t&&this.pending===!1)return n;n!=null&&c.clearInterval(n)},s.prototype.execute=function(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var t=this._execute(e,n);if(t)return t;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},s.prototype._execute=function(e,n){var t=!1,r;try{this.work(e)}catch(l){t=!0,r=l||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),r},s.prototype.unsubscribe=function(){if(!this.closed){var e=this,n=e.id,t=e.scheduler,r=t.actions;this.work=this.state=this.scheduler=null,this.pending=!1,x(r,this),n!=null&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null,i.prototype.unsubscribe.call(this)}},s}(p),a=function(){function i(s,e){e===void 0&&(e=i.now),this.schedulerActionCtor=s,this.now=e}return i.prototype.schedule=function(s,e,n){return e===void 0&&(e=0),new this.schedulerActionCtor(this,s).schedule(n,e)},i.now=C.now,i}(),y=function(i){o(s,i);function s(e,n){n===void 0&&(n=a.now);var t=i.call(this,e,n)||this;return t.actions=[],t._active=!1,t}return s.prototype.flush=function(e){var n=this.actions;if(this._active){n.push(e);return}var t;this._active=!0;do if(t=e.execute(e.state,e.delay))break;while(e=n.shift());if(this._active=!1,t){for(;e=n.shift();)e.unsubscribe();throw t}},s}(a),h=new y(v),d=function(i,s){return s===void 0&&(s=h),O(function(e,n){var t=null,r=null,l=null,b=function(){if(t){t.unsubscribe(),t=null;var u=r;r=null,n.next(u)}};function m(){var u=l+i,w=s.now();if(w<u){t=this.schedule(void 0,u-w),n.add(t);return}b()}e.subscribe(S(n,function(u){r=u,l=s.now(),t||(t=s.schedule(m,i),n.add(t))},function(){b(),n.complete()},void 0,function(){r=t=null}))})},f=function(i){return g(function(s,e){return i<=e})},_=Object.freeze(Object.defineProperty({__proto__:null,concatAll:q,debounceTime:d,distinctUntilChanged:E,distinctUntilKeyChanged:M,filter:g,map:T,mapTo:U,mergeAll:j,mergeMap:z,observeOn:F,pluck:P,share:B,shareReplay:D,skip:f,startWith:G,subscribeOn:H,switchMap:K,take:R,takeUntil:W,withLatestFrom:J},Symbol.toStringTag,{value:"Module"}))});export{a as S,V as __tla,h as a,d,_ as i,f as s};
