import{ll as o,kV as I,lm as k,ln as A,lo as x,lp as O,lq as C,lr as S,l9 as w,l7 as j,aO as q,l8 as M,la as P,lb as T,kP as U,lc as E,ld as z,le as F,lf as K,a3 as L,a2 as R,lg as V,lh as W,li as B,lj as D,lk as H,__tla as G}from"./index-CAoYq-L-.js";let c,h,d,_,f,J=Promise.all([(()=>{try{return G}catch{}})()]).then(async()=>{let p,u,v,y;p=function(i){o(s,i);function s(e,n){return i.call(this)||this}return s.prototype.schedule=function(e,n){return this},s}(I),u={setInterval:function(i,s){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];return setInterval.apply(void 0,k([i,s],A(e)))},clearInterval:function(i){var s=u.delegate;return((s==null?void 0:s.clearInterval)||clearInterval)(i)},delegate:void 0},v=function(i){o(s,i);function s(e,n){var t=i.call(this,e,n)||this;return t.scheduler=e,t.work=n,t.pending=!1,t}return s.prototype.schedule=function(e,n){var t;if(n===void 0&&(n=0),this.closed)return this;this.state=e;var r=this.id,l=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(l,r,n)),this.pending=!0,this.delay=n,this.id=(t=this.id)!==null&&t!==void 0?t:this.requestAsyncId(l,this.id,n),this},s.prototype.requestAsyncId=function(e,n,t){return t===void 0&&(t=0),u.setInterval(e.flush.bind(e,this),t)},s.prototype.recycleAsyncId=function(e,n,t){if(t===void 0&&(t=0),t!=null&&this.delay===t&&this.pending===!1)return n;n!=null&&u.clearInterval(n)},s.prototype.execute=function(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var t=this._execute(e,n);if(t)return t;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},s.prototype._execute=function(e,n){var t=!1,r;try{this.work(e)}catch(l){t=!0,r=l||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),r},s.prototype.unsubscribe=function(){if(!this.closed){var e=this,n=e.id,t=e.scheduler,r=t.actions;this.work=this.state=this.scheduler=null,this.pending=!1,x(r,this),n!=null&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null,i.prototype.unsubscribe.call(this)}},s}(p),c=function(){function i(s,e){e===void 0&&(e=i.now),this.schedulerActionCtor=s,this.now=e}return i.prototype.schedule=function(s,e,n){return e===void 0&&(e=0),new this.schedulerActionCtor(this,s).schedule(n,e)},i.now=O.now,i}(),y=function(i){o(s,i);function s(e,n){n===void 0&&(n=c.now);var t=i.call(this,e,n)||this;return t.actions=[],t._active=!1,t}return s.prototype.flush=function(e){var n=this.actions;if(this._active){n.push(e);return}var t;this._active=!0;do if(t=e.execute(e.state,e.delay))break;while(e=n.shift());if(this._active=!1,t){for(;e=n.shift();)e.unsubscribe();throw t}},s}(c),h=new y(v),d=function(i,s){return s===void 0&&(s=h),C(function(e,n){var t=null,r=null,l=null,b=function(){if(t){t.unsubscribe(),t=null;var a=r;r=null,n.next(a)}};function m(){var a=l+i,g=s.now();if(g<a){t=this.schedule(void 0,a-g),n.add(t);return}b()}e.subscribe(S(n,function(a){r=a,l=s.now(),t||(t=s.schedule(m,i),n.add(t))},function(){b(),n.complete()},void 0,function(){r=t=null}))})},f=function(i){return w(function(s,e){return i<=e})},_=Object.freeze(Object.defineProperty({__proto__:null,concatAll:j,debounceTime:d,distinctUntilChanged:q,distinctUntilKeyChanged:M,filter:w,map:P,mapTo:T,mergeAll:U,mergeMap:E,observeOn:z,pluck:F,share:K,shareReplay:L,skip:f,startWith:R,subscribeOn:V,switchMap:W,take:B,takeUntil:D,withLatestFrom:H},Symbol.toStringTag,{value:"Module"}))});export{c as S,J as __tla,h as a,d,_ as i,f as s};