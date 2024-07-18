var Q=Object.defineProperty;var I=i=>{throw TypeError(i)};var J=(i,o,a)=>o in i?Q(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var T=(i,o,a)=>J(i,typeof o!="symbol"?o+"":o,a),H=(i,o,a)=>o.has(i)||I("Cannot "+a);var n=(i,o,a)=>(H(i,o,"read from private field"),a?a.call(i):o.get(i)),P=(i,o,a)=>o.has(i)?I("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(i):o.set(i,a),k=(i,o,a,f)=>(H(i,o,"write to private field"),f?f.call(i,a):o.set(i,a),a),M=(i,o,a)=>(H(i,o,"access private method"),a);import{dt as X,du as U,dv as $,dw as ee,dx as te,dy as se,dz as z,dA as re,dB as K,dC as ie,b7 as j,dD as oe,dE as ne,dF as he,aZ as h,cV as V,dG as u,ba as ae,bf as A,cH as B,cI as le,__tla as ce}from"./index-BH6Jm5Rc.js";let q,Y,_,Z,G,de=Promise.all([(()=>{try{return ce}catch{}})()]).then(async()=>{var f,w,l,m,v,O,W,D,y;var i=class extends X{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:U()},t)}getOptimisticResult(e){return e.behavior=U(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var N,S;const{state:s}=e,r=super.createResult(e,t),{isFetching:c,isRefetching:p,isError:d,isRefetchError:x}=r,C=(S=(N=s.fetchMeta)==null?void 0:N.fetchMore)==null?void 0:S.direction,b=d&&C==="forward",g=c&&C==="forward",L=d&&C==="backward",R=c&&C==="backward";return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:$(t,s.data),hasPreviousPage:ee(t,s.data),isFetchNextPageError:b,isFetchingNextPage:g,isFetchPreviousPageError:L,isFetchingPreviousPage:R,isRefetchError:x&&!b&&!L,isRefetching:p&&!g&&!R}}},o=(D=class extends te{constructor(t,s){super();P(this,v);P(this,f);P(this,w);P(this,l);P(this,m);k(this,f,t),this.setOptions(s),this.bindMethods(),M(this,v,O).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const s=this.options;this.options=n(this,f).defaultMutationOptions(t),se(this.options,s)||n(this,f).getMutationCache().notify({type:"observerOptionsUpdated",mutation:n(this,l),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&z(s.mutationKey)!==z(this.options.mutationKey)?this.reset():((r=n(this,l))==null?void 0:r.state.status)==="pending"&&n(this,l).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||((t=n(this,l))==null||t.removeObserver(this))}onMutationUpdate(t){M(this,v,O).call(this),M(this,v,W).call(this,t)}getCurrentResult(){return n(this,w)}reset(){var t;(t=n(this,l))==null||t.removeObserver(this),k(this,l,void 0),M(this,v,O).call(this),M(this,v,W).call(this)}mutate(t,s){var r;return k(this,m,s),(r=n(this,l))==null||r.removeObserver(this),k(this,l,n(this,f).getMutationCache().build(n(this,f),this.options)),n(this,l).addObserver(this),n(this,l).execute(t)}},f=new WeakMap,w=new WeakMap,l=new WeakMap,m=new WeakMap,v=new WeakSet,O=function(){var s;const t=((s=n(this,l))==null?void 0:s.state)??re();k(this,w,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},W=function(t){K.batch(()=>{var s,r,c,p,d,x,C,b;if(n(this,m)&&this.hasListeners()){const g=n(this,w).variables,L=n(this,w).context;(t==null?void 0:t.type)==="success"?((r=(s=n(this,m)).onSuccess)==null||r.call(s,t.data,g,L),(p=(c=n(this,m)).onSettled)==null||p.call(c,t.data,null,g,L)):(t==null?void 0:t.type)==="error"&&((x=(d=n(this,m)).onError)==null||x.call(d,t.error,g,L),(b=(C=n(this,m)).onSettled)==null||b.call(C,void 0,t.error,g,L))}this.listeners.forEach(g=>{g(n(this,w))})})},D);Z=function(e,t){const s=ie(),[r]=j.useState(()=>new o(s,e));j.useEffect(()=>{r.setOptions(e)},[r,e]);const c=j.useSyncExternalStore(j.useCallback(d=>r.subscribe(K.batchCalls(d)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),p=j.useCallback((d,x)=>{r.mutate(d,x).catch(oe)},[r]);if(c.error&&ne(r.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:p,mutateAsync:c.mutate}},G=function(e,t){return he(e,i)};let a;_=e=>{const{svgProps:t,...s}=e;return h.jsx(V,{componentName:"Refresh",icon:h.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[h.jsx("path",{d:"M25.6146 10.9474C23.0882 5.89476 19.0525 5.26318 16.1409 5.26318C9.86228 5.26318 4.77246 10.353 4.77246 16.6316C4.77246 22.9102 9.86228 28 16.1409 28C21.5512 28 26.0788 24.2206 27.2276 19.1579",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M18.6674 11.5789H26.2463V4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),...s})},a=e=>{const{svgProps:t,...s}=e;return h.jsx(V,{componentName:"UserSwitch",icon:h.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[h.jsxs("g",{"clip-path":"url(#clip0_3426_11246)",children:[h.jsx("path",{d:"M16 19.3333C18.3932 19.3333 20.3333 17.3932 20.3333 15C20.3333 12.6067 18.3932 10.6666 16 10.6666C13.6067 10.6666 11.6666 12.6067 11.6666 15C11.6666 17.3932 13.6067 19.3333 16 19.3333Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M9 24C9.65629 22.596 10.6577 21.4167 11.8933 20.593C13.1288 19.7693 14.5503 19.3333 16 19.3333C17.4497 19.3333 18.8712 19.7693 20.1067 20.593C21.3423 21.4167 22.3437 22.596 23 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M23.6666 16L26.3333 18.6667L29 16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M3 16L5.66667 13.3333L8.33333 16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M5.66663 13.3333V15.9992C5.66582 18.2569 6.35708 20.4565 7.64085 22.2814C8.92463 24.1063 10.7347 25.4622 12.8103 26.1539C14.8859 26.8456 17.12 26.8373 19.1908 26.1302C21.2615 25.4232 23.0622 24.0539 24.3333 22.2196",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M26.3333 18.6666V16.0008C26.3341 13.7431 25.6428 11.5434 24.3591 9.71854C23.0753 7.89366 21.2653 6.53774 19.1896 5.84607C17.114 5.1544 14.8799 5.16268 12.8092 5.86972C10.7384 6.57675 8.93775 7.94605 7.66663 9.7804",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),h.jsx("defs",{children:h.jsx("clipPath",{id:"clip0_3426_11246",children:h.jsx("rect",{width:"32",height:"32",fill:"white"})})})]}),...s})},q=(y=class extends j.Component{constructor(e){super(e),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let e=!1;const t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch{}return e}eventListenerOptions(){let e=this.props.useCapture;return this.isPassiveSupported()?e={useCapture:this.props.useCapture,passive:!0}:e={passive:!1},e}setDefaultLoader(e){this.defaultLoader=e}detachMousewheelListener(){let e=window;this.props.useWindow===!1&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let e=window;this.props.useWindow===!1&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(e){return(this.props.getScrollParent&&this.props.getScrollParent())??(e&&e.parentNode)}filterProps(e){return e}attachScrollListener(){const e=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!e)return;let t=window;this.props.useWindow===!1&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(e){e.deltaY===1&&!this.isPassiveSupported()&&e.preventDefault()}scrollListener(){const e=this.scrollComponent,t=window,s=this.getParentElement(e);let r;if(this.props.useWindow){const c=document.documentElement||document.body.parentNode||document.body,p=t.pageYOffset!==void 0?t.pageYOffset:c.scrollTop;this.props.isReverse?r=p:r=this.calculateOffset(e,p)}else this.props.isReverse?r=s.scrollTop:r=e.scrollHeight-s.scrollTop-s.clientHeight;r<Number(this.props.threshold)&&e&&e.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=s.scrollHeight,this.beforeScrollTop=s.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}calculateTopPosition(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}render(){const e=this.filterProps(this.props),{children:t,element:s,hasMore:r,initialLoad:c,isReverse:p,loader:d,loadMore:x,pageStart:C,ref:b,threshold:g,useCapture:L,useWindow:R,getScrollParent:N,...S}=e;S.ref=F=>{this.scrollComponent=F,b&&b(F)};const E=[t];return r&&(d?p?E.unshift(d):E.push(d):this.defaultLoader&&(p?E.unshift(this.defaultLoader):E.push(this.defaultLoader))),ae.createElement(s,S,E)}},T(y,"propTypes",{children:u.node.isRequired,element:u.node,hasMore:u.bool,initialLoad:u.bool,isReverse:u.bool,loader:u.node,loadMore:u.func.isRequired,pageStart:u.number,ref:u.func,getScrollParent:u.func,threshold:u.number,useCapture:u.bool,useWindow:u.bool}),T(y,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null}),y),Y=({heading:e,subHeading:t,error:s=!1,refetchLeaderboard:r})=>h.jsxs(A,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"s4",padding:"s15",height:"200px",children:[h.jsx(a,{size:48,color:"gray-300"}),h.jsxs(A,{display:"flex",flexDirection:"column",alignItems:"center",gap:"s1",children:[e&&h.jsx(B,{textAlign:"center",variant:"h5-bold",color:{light:"black",dark:"white"},children:e}),t&&h.jsx(B,{textAlign:"center",variant:"bs-regular",color:{light:"gray-600",dark:"gray-500"},children:t})]}),s&&h.jsx(le,{onClick:()=>r==null?void 0:r(),variant:"tertiary",size:"small",leadingIcon:h.jsx(_,{}),children:"Refresh"})]})});export{q as I,Y as L,_ as R,de as __tla,Z as a,G as u};
