import{nm as o,mW as I,nn as A,no as k,np as x,nq as C,nr as O,ns as S,na as g,n8 as j,d$ as q,n9 as M,nb as T,nc as U,mQ as E,nd as P,ne as W,nf as z,ng as F,df as K,de as L,nh as Q,ni as R,nj as $,nk as D,nl as V,__tla as B}from"./index-ByWTRx_f.js";let l,h,d,_,f,G=Promise.all([(()=>{try{return B}catch{}})()]).then(async()=>{let p,c,v,y;p=function(s){o(i,s);function i(n,e){return s.call(this)||this}return i.prototype.schedule=function(n,e){return this},i}(I),c={setInterval:function(s,i){for(var n=[],e=2;e<arguments.length;e++)n[e-2]=arguments[e];return setInterval.apply(void 0,A([s,i],k(n)))},clearInterval:function(s){return clearInterval(s)},delegate:void 0},v=function(s){o(i,s);function i(n,e){var t=s.call(this,n,e)||this;return t.scheduler=n,t.work=e,t.pending=!1,t}return i.prototype.schedule=function(n,e){var t;if(e===void 0&&(e=0),this.closed)return this;this.state=n;var r=this.id,a=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(a,r,e)),this.pending=!0,this.delay=e,this.id=(t=this.id)!==null&&t!==void 0?t:this.requestAsyncId(a,this.id,e),this},i.prototype.requestAsyncId=function(n,e,t){return t===void 0&&(t=0),c.setInterval(n.flush.bind(n,this),t)},i.prototype.recycleAsyncId=function(n,e,t){if(t===void 0&&(t=0),t!=null&&this.delay===t&&this.pending===!1)return e;e!=null&&c.clearInterval(e)},i.prototype.execute=function(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var t=this._execute(n,e);if(t)return t;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},i.prototype._execute=function(n,e){var t=!1,r;try{this.work(n)}catch(a){t=!0,r=a||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),r},i.prototype.unsubscribe=function(){if(!this.closed){var n=this,e=n.id,t=n.scheduler,r=t.actions;this.work=this.state=this.scheduler=null,this.pending=!1,x(r,this),e!=null&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,s.prototype.unsubscribe.call(this)}},i}(p),l=function(){function s(i,n){n===void 0&&(n=s.now),this.schedulerActionCtor=i,this.now=n}return s.prototype.schedule=function(i,n,e){return n===void 0&&(n=0),new this.schedulerActionCtor(this,i).schedule(e,n)},s.now=C.now,s}(),y=function(s){o(i,s);function i(n,e){e===void 0&&(e=l.now);var t=s.call(this,n,e)||this;return t.actions=[],t._active=!1,t}return i.prototype.flush=function(n){var e=this.actions;if(this._active){e.push(n);return}var t;this._active=!0;do if(t=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,t){for(;n=e.shift();)n.unsubscribe();throw t}},i}(l),h=new y(v),d=function(s,i){return i===void 0&&(i=h),O(function(n,e){var t=null,r=null,a=null,b=function(){if(t){t.unsubscribe(),t=null;var u=r;r=null,e.next(u)}};function m(){var u=a+s,w=i.now();if(w<u){t=this.schedule(void 0,u-w),e.add(t);return}b()}n.subscribe(S(e,function(u){r=u,a=i.now(),t||(t=i.schedule(m,s),e.add(t))},function(){b(),e.complete()},void 0,function(){r=t=null}))})},f=function(s){return g(function(i,n){return s<=n})},_=Object.freeze(Object.defineProperty({__proto__:null,concatAll:j,debounceTime:d,distinctUntilChanged:q,distinctUntilKeyChanged:M,filter:g,map:T,mapTo:U,mergeAll:E,mergeMap:P,observeOn:W,pluck:z,share:F,shareReplay:K,skip:f,startWith:L,subscribeOn:Q,switchMap:R,take:$,takeUntil:D,withLatestFrom:V},Symbol.toStringTag,{value:"Module"}))});export{l as S,G as __tla,h as a,d,_ as i,f as s};