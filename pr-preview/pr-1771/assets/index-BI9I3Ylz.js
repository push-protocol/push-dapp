import{iu as o,i0 as I,iv as A,iw as k,ix as x,iy as C,iz as O,iA as S,ih as g,ie as j,aa as q,ig as M,ii as T,ij as U,hW as z,ik as E,il as P,im as W,io as F,o as K,n as L,ip as R,iq as B,ir as D,is as H,it as V,__tla as G}from"./index-Deq-LGKx.js";let c,h,d,_,f,J=Promise.all([(()=>{try{return G}catch{}})()]).then(async()=>{let p,l,v,y;p=function(s){o(n,s);function n(e,i){return s.call(this)||this}return n.prototype.schedule=function(e,i){return this},n}(I),l={setInterval:function(s,n){for(var e=[],i=2;i<arguments.length;i++)e[i-2]=arguments[i];return setInterval.apply(void 0,A([s,n],k(e)))},clearInterval:function(s){var n=l.delegate;return((n==null?void 0:n.clearInterval)||clearInterval)(s)},delegate:void 0},v=function(s){o(n,s);function n(e,i){var t=s.call(this,e,i)||this;return t.scheduler=e,t.work=i,t.pending=!1,t}return n.prototype.schedule=function(e,i){var t;if(i===void 0&&(i=0),this.closed)return this;this.state=e;var r=this.id,a=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(a,r,i)),this.pending=!0,this.delay=i,this.id=(t=this.id)!==null&&t!==void 0?t:this.requestAsyncId(a,this.id,i),this},n.prototype.requestAsyncId=function(e,i,t){return t===void 0&&(t=0),l.setInterval(e.flush.bind(e,this),t)},n.prototype.recycleAsyncId=function(e,i,t){if(t===void 0&&(t=0),t!=null&&this.delay===t&&this.pending===!1)return i;i!=null&&l.clearInterval(i)},n.prototype.execute=function(e,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var t=this._execute(e,i);if(t)return t;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(e,i){var t=!1,r;try{this.work(e)}catch(a){t=!0,r=a||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),r},n.prototype.unsubscribe=function(){if(!this.closed){var e=this,i=e.id,t=e.scheduler,r=t.actions;this.work=this.state=this.scheduler=null,this.pending=!1,x(r,this),i!=null&&(this.id=this.recycleAsyncId(t,i,null)),this.delay=null,s.prototype.unsubscribe.call(this)}},n}(p),c=function(){function s(n,e){e===void 0&&(e=s.now),this.schedulerActionCtor=n,this.now=e}return s.prototype.schedule=function(n,e,i){return e===void 0&&(e=0),new this.schedulerActionCtor(this,n).schedule(i,e)},s.now=C.now,s}(),y=function(s){o(n,s);function n(e,i){i===void 0&&(i=c.now);var t=s.call(this,e,i)||this;return t.actions=[],t._active=!1,t}return n.prototype.flush=function(e){var i=this.actions;if(this._active){i.push(e);return}var t;this._active=!0;do if(t=e.execute(e.state,e.delay))break;while(e=i.shift());if(this._active=!1,t){for(;e=i.shift();)e.unsubscribe();throw t}},n}(c),h=new y(v),d=function(s,n){return n===void 0&&(n=h),O(function(e,i){var t=null,r=null,a=null,b=function(){if(t){t.unsubscribe(),t=null;var u=r;r=null,i.next(u)}};function m(){var u=a+s,w=n.now();if(w<u){t=this.schedule(void 0,u-w),i.add(t);return}b()}e.subscribe(S(i,function(u){r=u,a=n.now(),t||(t=n.schedule(m,s),i.add(t))},function(){b(),i.complete()},void 0,function(){r=t=null}))})},f=function(s){return g(function(n,e){return s<=e})},_=Object.freeze(Object.defineProperty({__proto__:null,concatAll:j,debounceTime:d,distinctUntilChanged:q,distinctUntilKeyChanged:M,filter:g,map:T,mapTo:U,mergeAll:z,mergeMap:E,observeOn:P,pluck:W,share:F,shareReplay:K,skip:f,startWith:L,subscribeOn:R,switchMap:B,take:D,takeUntil:H,withLatestFrom:V},Symbol.toStringTag,{value:"Module"}))});export{c as S,J as __tla,h as a,d,_ as i,f as s};
