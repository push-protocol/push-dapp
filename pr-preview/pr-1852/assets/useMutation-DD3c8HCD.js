var K=r=>{throw TypeError(r)};var _=(r,s,i)=>s.has(r)||K("Cannot "+i);var e=(r,s,i)=>(_(r,s,"read from private field"),i?i.call(r):s.get(r)),p=(r,s,i)=>s.has(r)?K("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(r):s.set(r,i),b=(r,s,i,h)=>(_(r,s,"write to private field"),h?h.call(r,i):s.set(r,i),i),m=(r,s,i)=>(_(r,s,"access private method"),i);import{f6 as k,f7 as L,f8 as w,f9 as P,fa as R,fb as A,d_ as f,fc as I,fd as j,__tla as q}from"./index-BTRg2c5V.js";let U,z=Promise.all([(()=>{try{return q}catch{}})()]).then(async()=>{var s,i,h,n,u,C,S,E;var r=(E=class extends k{constructor(t,a){super();p(this,u);p(this,s);p(this,i);p(this,h);p(this,n);b(this,s,t),this.setOptions(a),this.bindMethods(),m(this,u,C).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var o;const a=this.options;this.options=e(this,s).defaultMutationOptions(t),L(this.options,a)||e(this,s).getMutationCache().notify({type:"observerOptionsUpdated",mutation:e(this,h),observer:this}),a!=null&&a.mutationKey&&this.options.mutationKey&&w(a.mutationKey)!==w(this.options.mutationKey)?this.reset():((o=e(this,h))==null?void 0:o.state.status)==="pending"&&e(this,h).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||((t=e(this,h))==null||t.removeObserver(this))}onMutationUpdate(t){m(this,u,C).call(this),m(this,u,S).call(this,t)}getCurrentResult(){return e(this,i)}reset(){var t;(t=e(this,h))==null||t.removeObserver(this),b(this,h,void 0),m(this,u,C).call(this),m(this,u,S).call(this)}mutate(t,a){var o;return b(this,n,a),(o=e(this,h))==null||o.removeObserver(this),b(this,h,e(this,s).getMutationCache().build(e(this,s),this.options)),e(this,h).addObserver(this),e(this,h).execute(t)}},s=new WeakMap,i=new WeakMap,h=new WeakMap,n=new WeakMap,u=new WeakSet,C=function(){var a;const t=((a=e(this,h))==null?void 0:a.state)??P();b(this,i,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},S=function(t){R.batch(()=>{var a,o,c,y,d,O,M,x;if(e(this,n)&&this.hasListeners()){const l=e(this,i).variables,g=e(this,i).context;(t==null?void 0:t.type)==="success"?((o=(a=e(this,n)).onSuccess)==null||o.call(a,t.data,l,g),(y=(c=e(this,n)).onSettled)==null||y.call(c,t.data,null,l,g)):(t==null?void 0:t.type)==="error"&&((O=(d=e(this,n)).onError)==null||O.call(d,t.error,l,g),(x=(M=e(this,n)).onSettled)==null||x.call(M,void 0,t.error,l,g))}this.listeners.forEach(l=>{l(e(this,i))})})},E);U=function(v,t){const a=A(),[o]=f.useState(()=>new r(a,v));f.useEffect(()=>{o.setOptions(v)},[o,v]);const c=f.useSyncExternalStore(f.useCallback(d=>o.subscribe(R.batchCalls(d)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),y=f.useCallback((d,O)=>{o.mutate(d,O).catch(I)},[o]);if(c.error&&j(o.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:y,mutateAsync:c.mutate}}});export{z as __tla,U as u};
