var X=Object.defineProperty;var F=i=>{throw TypeError(i)};var $=(i,o,a)=>o in i?X(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var T=(i,o,a)=>$(i,typeof o!="symbol"?o+"":o,a),_=(i,o,a)=>o.has(i)||F("Cannot "+a);var n=(i,o,a)=>(_(i,o,"read from private field"),a?a.call(i):o.get(i)),x=(i,o,a)=>o.has(i)?F("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(i):o.set(i,a),k=(i,o,a,f)=>(_(i,o,"write to private field"),f?f.call(i,a):o.set(i,a),a),M=(i,o,a)=>(_(i,o,"access private method"),a);import{eS as G,eT as I,eU as J,eV as ee,eW as te,eX as se,eY as z,eZ as re,e_ as K,e$ as ie,r as j,f0 as oe,f1 as ne,f2 as he,m as h,eg as V,f3 as p,R as ae,B as A,ej as B,el as le,__tla as ce}from"./index-DLFlONIp.js";let Y,q,H,Z,Q,ue=Promise.all([(()=>{try{return ce}catch{}})()]).then(async()=>{var f,w,l,m,v,O,W,U,y;var i=class extends G{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:I()},t)}getOptimisticResult(e){return e.behavior=I(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var N,S;const{state:s}=e,r=super.createResult(e,t),{isFetching:c,isRefetching:d,isError:u,isRefetchError:P}=r,C=(S=(N=s.fetchMeta)==null?void 0:N.fetchMore)==null?void 0:S.direction,L=u&&C==="forward",g=c&&C==="forward",b=u&&C==="backward",R=c&&C==="backward";return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:J(t,s.data),hasPreviousPage:ee(t,s.data),isFetchNextPageError:L,isFetchingNextPage:g,isFetchPreviousPageError:b,isFetchingPreviousPage:R,isRefetchError:P&&!L&&!b,isRefetching:d&&!g&&!R}}},o=(U=class extends te{constructor(t,s){super();x(this,v);x(this,f);x(this,w);x(this,l);x(this,m);k(this,f,t),this.setOptions(s),this.bindMethods(),M(this,v,O).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const s=this.options;this.options=n(this,f).defaultMutationOptions(t),se(this.options,s)||n(this,f).getMutationCache().notify({type:"observerOptionsUpdated",mutation:n(this,l),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&z(s.mutationKey)!==z(this.options.mutationKey)?this.reset():((r=n(this,l))==null?void 0:r.state.status)==="pending"&&n(this,l).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||((t=n(this,l))==null||t.removeObserver(this))}onMutationUpdate(t){M(this,v,O).call(this),M(this,v,W).call(this,t)}getCurrentResult(){return n(this,w)}reset(){var t;(t=n(this,l))==null||t.removeObserver(this),k(this,l,void 0),M(this,v,O).call(this),M(this,v,W).call(this)}mutate(t,s){var r;return k(this,m,s),(r=n(this,l))==null||r.removeObserver(this),k(this,l,n(this,f).getMutationCache().build(n(this,f),this.options)),n(this,l).addObserver(this),n(this,l).execute(t)}},f=new WeakMap,w=new WeakMap,l=new WeakMap,m=new WeakMap,v=new WeakSet,O=function(){var s;const t=((s=n(this,l))==null?void 0:s.state)??re();k(this,w,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},W=function(t){K.batch(()=>{var s,r,c,d,u,P,C,L;if(n(this,m)&&this.hasListeners()){const g=n(this,w).variables,b=n(this,w).context;(t==null?void 0:t.type)==="success"?((r=(s=n(this,m)).onSuccess)==null||r.call(s,t.data,g,b),(d=(c=n(this,m)).onSettled)==null||d.call(c,t.data,null,g,b)):(t==null?void 0:t.type)==="error"&&((P=(u=n(this,m)).onError)==null||P.call(u,t.error,g,b),(L=(C=n(this,m)).onSettled)==null||L.call(C,void 0,t.error,g,b))}this.listeners.forEach(g=>{g(n(this,w))})})},U);Z=function(e,t){const s=ie(),[r]=j.useState(()=>new o(s,e));j.useEffect(()=>{r.setOptions(e)},[r,e]);const c=j.useSyncExternalStore(j.useCallback(u=>r.subscribe(K.batchCalls(u)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),d=j.useCallback((u,P)=>{r.mutate(u,P).catch(oe)},[r]);if(c.error&&ne(r.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:d,mutateAsync:c.mutate}},Q=function(e,t){return he(e,i)};let a;H=e=>{const{svgProps:t,...s}=e;return h.jsx(V,{componentName:"Refresh",icon:h.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[h.jsx("path",{d:"M25.6146 10.9474C23.0882 5.89476 19.0525 5.26318 16.1409 5.26318C9.86228 5.26318 4.77246 10.353 4.77246 16.6316C4.77246 22.9102 9.86228 28 16.1409 28C21.5512 28 26.0788 24.2206 27.2276 19.1579",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M18.6674 11.5789H26.2463V4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),...s})},a=e=>{const{svgProps:t,...s}=e;return h.jsx(V,{componentName:"UserSwitch",icon:h.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[h.jsxs("g",{"clip-path":"url(#clip0_3426_11246)",children:[h.jsx("path",{d:"M16 19.3333C18.3932 19.3333 20.3333 17.3932 20.3333 15C20.3333 12.6067 18.3932 10.6666 16 10.6666C13.6067 10.6666 11.6666 12.6067 11.6666 15C11.6666 17.3932 13.6067 19.3333 16 19.3333Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M9 24C9.65629 22.596 10.6577 21.4167 11.8933 20.593C13.1288 19.7693 14.5503 19.3333 16 19.3333C17.4497 19.3333 18.8712 19.7693 20.1067 20.593C21.3423 21.4167 22.3437 22.596 23 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M23.6666 16L26.3333 18.6667L29 16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M3 16L5.66667 13.3333L8.33333 16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M5.66663 13.3333V15.9992C5.66582 18.2569 6.35708 20.4565 7.64085 22.2814C8.92463 24.1063 10.7347 25.4622 12.8103 26.1539C14.8859 26.8456 17.12 26.8373 19.1908 26.1302C21.2615 25.4232 23.0622 24.0539 24.3333 22.2196",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M26.3333 18.6666V16.0008C26.3341 13.7431 25.6428 11.5434 24.3591 9.71854C23.0753 7.89366 21.2653 6.53774 19.1896 5.84607C17.114 5.1544 14.8799 5.16268 12.8092 5.86972C10.7384 6.57675 8.93775 7.94605 7.66663 9.7804",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),h.jsx("defs",{children:h.jsx("clipPath",{id:"clip0_3426_11246",children:h.jsx("rect",{width:"32",height:"32",fill:"white"})})})]}),...s})},Y=(y=class extends j.Component{constructor(e){super(e),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let e=!1;const t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch{}return e}eventListenerOptions(){let e=this.props.useCapture;return this.isPassiveSupported()?e={useCapture:this.props.useCapture,passive:!0}:e={passive:!1},e}setDefaultLoader(e){this.defaultLoader=e}detachMousewheelListener(){let e=window;this.props.useWindow===!1&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let e=window;this.props.useWindow===!1&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(e){return(this.props.getScrollParent&&this.props.getScrollParent())??(e&&e.parentNode)}filterProps(e){return e}attachScrollListener(){const e=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!e)return;let t=window;this.props.useWindow===!1&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(e){e.deltaY===1&&!this.isPassiveSupported()&&e.preventDefault()}scrollListener(){const e=this.scrollComponent,t=window,s=this.getParentElement(e);let r;if(this.props.useWindow){const c=document.documentElement||document.body.parentNode||document.body,d=t.pageYOffset!==void 0?t.pageYOffset:c.scrollTop;this.props.isReverse?r=d:r=this.calculateOffset(e,d)}else this.props.isReverse?r=s.scrollTop:r=e.scrollHeight-s.scrollTop-s.clientHeight;r<Number(this.props.threshold)&&e&&e.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=s.scrollHeight,this.beforeScrollTop=s.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}calculateTopPosition(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}render(){const e=this.filterProps(this.props),{children:t,element:s,hasMore:r,initialLoad:c,isReverse:d,loader:u,loadMore:P,pageStart:C,ref:L,threshold:g,useCapture:b,useWindow:R,getScrollParent:N,...S}=e;S.ref=D=>{this.scrollComponent=D,L&&L(D)};const E=[t];return r&&(u?d?E.unshift(u):E.push(u):this.defaultLoader&&(d?E.unshift(this.defaultLoader):E.push(this.defaultLoader))),ae.createElement(s,S,E)}},T(y,"propTypes",{children:p.node.isRequired,element:p.node,hasMore:p.bool,initialLoad:p.bool,isReverse:p.bool,loader:p.node,loadMore:p.func.isRequired,pageStart:p.number,ref:p.func,getScrollParent:p.func,threshold:p.number,useCapture:p.bool,useWindow:p.bool}),T(y,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null}),y),q=({heading:e,subHeading:t,error:s=!1,refetchLeaderboard:r})=>h.jsxs(A,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"s4",padding:"s15",height:"200px",children:[h.jsx(a,{size:48,color:"gray-300"}),h.jsxs(A,{display:"flex",flexDirection:"column",alignItems:"center",gap:"s1",children:[e&&h.jsx(B,{textAlign:"center",variant:"h5-bold",color:{light:"black",dark:"white"},children:e}),t&&h.jsx(B,{textAlign:"center",variant:"bs-regular",color:{light:"gray-600",dark:"gray-500"},children:t})]}),s&&h.jsx(le,{onClick:()=>r==null?void 0:r(),variant:"tertiary",size:"small",leadingIcon:h.jsx(H,{}),children:"Refresh"})]})});export{Y as I,q as L,H as R,ue as __tla,Z as a,Q as u};
