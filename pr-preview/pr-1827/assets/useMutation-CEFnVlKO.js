var K=r=>{throw TypeError(r)};var _=(r,s,i)=>s.has(r)||K("Cannot "+i);var e=(r,s,i)=>(_(r,s,"read from private field"),i?i.call(r):s.get(r)),p=(r,s,i)=>s.has(r)?K("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(r):s.set(r,i),b=(r,s,i,h)=>(_(r,s,"write to private field"),h?h.call(r,i):s.set(r,i),i),m=(r,s,i)=>(_(r,s,"access private method"),i);import{c4 as k,c5 as L,c6 as w,c7 as P,c8 as R,c9 as A,a_ as v,ca as I,cb as j,__tla as q}from"./index-BFh_mb4t.js";let U,z=Promise.all([(()=>{try{return q}catch{}})()]).then(async()=>{var s,i,h,n,u,C,S,E;var r=(E=class extends k{constructor(t,a){super();p(this,u);p(this,s);p(this,i);p(this,h);p(this,n);b(this,s,t),this.setOptions(a),this.bindMethods(),m(this,u,C).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var o;const a=this.options;this.options=e(this,s).defaultMutationOptions(t),L(this.options,a)||e(this,s).getMutationCache().notify({type:"observerOptionsUpdated",mutation:e(this,h),observer:this}),a!=null&&a.mutationKey&&this.options.mutationKey&&w(a.mutationKey)!==w(this.options.mutationKey)?this.reset():((o=e(this,h))==null?void 0:o.state.status)==="pending"&&e(this,h).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||((t=e(this,h))==null||t.removeObserver(this))}onMutationUpdate(t){m(this,u,C).call(this),m(this,u,S).call(this,t)}getCurrentResult(){return e(this,i)}reset(){var t;(t=e(this,h))==null||t.removeObserver(this),b(this,h,void 0),m(this,u,C).call(this),m(this,u,S).call(this)}mutate(t,a){var o;return b(this,n,a),(o=e(this,h))==null||o.removeObserver(this),b(this,h,e(this,s).getMutationCache().build(e(this,s),this.options)),e(this,h).addObserver(this),e(this,h).execute(t)}},s=new WeakMap,i=new WeakMap,h=new WeakMap,n=new WeakMap,u=new WeakSet,C=function(){var a;const t=((a=e(this,h))==null?void 0:a.state)??P();b(this,i,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},S=function(t){R.batch(()=>{var a,o,c,O,l,f,M,x;if(e(this,n)&&this.hasListeners()){const d=e(this,i).variables,g=e(this,i).context;(t==null?void 0:t.type)==="success"?((o=(a=e(this,n)).onSuccess)==null||o.call(a,t.data,d,g),(O=(c=e(this,n)).onSettled)==null||O.call(c,t.data,null,d,g)):(t==null?void 0:t.type)==="error"&&((f=(l=e(this,n)).onError)==null||f.call(l,t.error,d,g),(x=(M=e(this,n)).onSettled)==null||x.call(M,void 0,t.error,d,g))}this.listeners.forEach(d=>{d(e(this,i))})})},E);U=function(y,t){const a=A(),[o]=v.useState(()=>new r(a,y));v.useEffect(()=>{o.setOptions(y)},[o,y]);const c=v.useSyncExternalStore(v.useCallback(l=>o.subscribe(R.batchCalls(l)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),O=v.useCallback((l,f)=>{o.mutate(l,f).catch(I)},[o]);if(c.error&&j(o.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:O,mutateAsync:c.mutate}}});export{z as __tla,U as u};
