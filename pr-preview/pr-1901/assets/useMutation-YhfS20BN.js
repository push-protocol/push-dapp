var K=r=>{throw TypeError(r)};var E=(r,s,i)=>s.has(r)||K("Cannot "+i);var e=(r,s,i)=>(E(r,s,"read from private field"),i?i.call(r):s.get(r)),p=(r,s,i)=>s.has(r)?K("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(r):s.set(r,i),b=(r,s,i,h)=>(E(r,s,"write to private field"),h?h.call(r,i):s.set(r,i),i),m=(r,s,i)=>(E(r,s,"access private method"),i);import{gE as U,gF as k,gG as w,gH as I,gI as L,gJ as P,cs as g,gK as A,gL as F,__tla as G}from"./index-QF3il865.js";let R,H=Promise.all([(()=>{try{return G}catch{}})()]).then(async()=>{var s,i,h,n,u,C,S,_;var r=(_=class extends U{constructor(t,a){super();p(this,u);p(this,s);p(this,i);p(this,h);p(this,n);b(this,s,t),this.setOptions(a),this.bindMethods(),m(this,u,C).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var o;const a=this.options;this.options=e(this,s).defaultMutationOptions(t),k(this.options,a)||e(this,s).getMutationCache().notify({type:"observerOptionsUpdated",mutation:e(this,h),observer:this}),a!=null&&a.mutationKey&&this.options.mutationKey&&w(a.mutationKey)!==w(this.options.mutationKey)?this.reset():((o=e(this,h))==null?void 0:o.state.status)==="pending"&&e(this,h).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||((t=e(this,h))==null||t.removeObserver(this))}onMutationUpdate(t){m(this,u,C).call(this),m(this,u,S).call(this,t)}getCurrentResult(){return e(this,i)}reset(){var t;(t=e(this,h))==null||t.removeObserver(this),b(this,h,void 0),m(this,u,C).call(this),m(this,u,S).call(this)}mutate(t,a){var o;return b(this,n,a),(o=e(this,h))==null||o.removeObserver(this),b(this,h,e(this,s).getMutationCache().build(e(this,s),this.options)),e(this,h).addObserver(this),e(this,h).execute(t)}},s=new WeakMap,i=new WeakMap,h=new WeakMap,n=new WeakMap,u=new WeakSet,C=function(){var a;const t=((a=e(this,h))==null?void 0:a.state)??I();b(this,i,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},S=function(t){L.batch(()=>{var a,o,c,y,l,O,M,x;if(e(this,n)&&this.hasListeners()){const d=e(this,i).variables,f=e(this,i).context;(t==null?void 0:t.type)==="success"?((o=(a=e(this,n)).onSuccess)==null||o.call(a,t.data,d,f),(y=(c=e(this,n)).onSettled)==null||y.call(c,t.data,null,d,f)):(t==null?void 0:t.type)==="error"&&((O=(l=e(this,n)).onError)==null||O.call(l,t.error,d,f),(x=(M=e(this,n)).onSettled)==null||x.call(M,void 0,t.error,d,f))}this.listeners.forEach(d=>{d(e(this,i))})})},_);R=function(v,t){const a=P(),[o]=g.useState(()=>new r(a,v));g.useEffect(()=>{o.setOptions(v)},[o,v]);const c=g.useSyncExternalStore(g.useCallback(l=>o.subscribe(L.batchCalls(l)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),y=g.useCallback((l,O)=>{o.mutate(l,O).catch(A)},[o]);if(c.error&&F(o.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:y,mutateAsync:c.mutate}}});export{H as __tla,R as u};
