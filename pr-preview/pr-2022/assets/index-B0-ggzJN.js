import{lz as o,l7 as I,lA as A,lB as k,lC as x,lD as C,lE as O,lF as S,ln as g,ll as q,db as E,lm as M,lo as T,lp as U,l1 as j,lq as z,lr as F,ls as P,lt as B,cs as D,cr as K,lu as L,lv as R,lw as W,lx as H,ly as V,__tla as G}from"./index-CaaSAJkL.js";let a,h,d,_,f,J=Promise.all([(()=>{try{return G}catch{}})()]).then(async()=>{let p,c,v,y;p=function(n){o(s,n);function s(e,i){return n.call(this)||this}return s.prototype.schedule=function(e,i){return this},s}(I),c={setInterval:function(n,s){for(var e=[],i=2;i<arguments.length;i++)e[i-2]=arguments[i];return setInterval.apply(void 0,A([n,s],k(e)))},clearInterval:function(n){return clearInterval(n)},delegate:void 0},v=function(n){o(s,n);function s(e,i){var t=n.call(this,e,i)||this;return t.scheduler=e,t.work=i,t.pending=!1,t}return s.prototype.schedule=function(e,i){var t;if(i===void 0&&(i=0),this.closed)return this;this.state=e;var r=this.id,l=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(l,r,i)),this.pending=!0,this.delay=i,this.id=(t=this.id)!==null&&t!==void 0?t:this.requestAsyncId(l,this.id,i),this},s.prototype.requestAsyncId=function(e,i,t){return t===void 0&&(t=0),c.setInterval(e.flush.bind(e,this),t)},s.prototype.recycleAsyncId=function(e,i,t){if(t===void 0&&(t=0),t!=null&&this.delay===t&&this.pending===!1)return i;i!=null&&c.clearInterval(i)},s.prototype.execute=function(e,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var t=this._execute(e,i);if(t)return t;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},s.prototype._execute=function(e,i){var t=!1,r;try{this.work(e)}catch(l){t=!0,r=l||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),r},s.prototype.unsubscribe=function(){if(!this.closed){var e=this,i=e.id,t=e.scheduler,r=t.actions;this.work=this.state=this.scheduler=null,this.pending=!1,x(r,this),i!=null&&(this.id=this.recycleAsyncId(t,i,null)),this.delay=null,n.prototype.unsubscribe.call(this)}},s}(p),a=function(){function n(s,e){e===void 0&&(e=n.now),this.schedulerActionCtor=s,this.now=e}return n.prototype.schedule=function(s,e,i){return e===void 0&&(e=0),new this.schedulerActionCtor(this,s).schedule(i,e)},n.now=C.now,n}(),y=function(n){o(s,n);function s(e,i){i===void 0&&(i=a.now);var t=n.call(this,e,i)||this;return t.actions=[],t._active=!1,t}return s.prototype.flush=function(e){var i=this.actions;if(this._active){i.push(e);return}var t;this._active=!0;do if(t=e.execute(e.state,e.delay))break;while(e=i.shift());if(this._active=!1,t){for(;e=i.shift();)e.unsubscribe();throw t}},s}(a),h=new y(v),d=function(n,s){return s===void 0&&(s=h),O(function(e,i){var t=null,r=null,l=null,b=function(){if(t){t.unsubscribe(),t=null;var u=r;r=null,i.next(u)}};function m(){var u=l+n,w=s.now();if(w<u){t=this.schedule(void 0,u-w),i.add(t);return}b()}e.subscribe(S(i,function(u){r=u,l=s.now(),t||(t=s.schedule(m,n),i.add(t))},function(){b(),i.complete()},void 0,function(){r=t=null}))})},f=function(n){return g(function(s,e){return n<=e})},_=Object.freeze(Object.defineProperty({__proto__:null,concatAll:q,debounceTime:d,distinctUntilChanged:E,distinctUntilKeyChanged:M,filter:g,map:T,mapTo:U,mergeAll:j,mergeMap:z,observeOn:F,pluck:P,share:B,shareReplay:D,skip:f,startWith:K,subscribeOn:L,switchMap:R,take:W,takeUntil:H,withLatestFrom:V},Symbol.toStringTag,{value:"Module"}))});export{a as S,J as __tla,h as a,d,_ as i,f as s};
