var E=Object.defineProperty;var M=(n,o,e)=>o in n?E(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e;var P=(n,o,e)=>M(n,typeof o!="symbol"?o+"":o,e);import{fx as R,fy as b,fz as x,fA as N,fB as O,dX as T,fC as s,eb as y,__tla as H}from"./index-cMtIxPwU.js";let S,C,W=Promise.all([(()=>{try{return H}catch{}})()]).then(async()=>{var o;var n=class extends R{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:b()},t)}getOptimisticResult(e){return e.behavior=b(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var L,u;const{state:r}=e,i=super.createResult(e,t),{isFetching:a,isRefetching:l,isError:h,isRefetchError:v}=i,p=(u=(L=r.fetchMeta)==null?void 0:L.fetchMore)==null?void 0:u.direction,c=h&&p==="forward",f=a&&p==="forward",g=h&&p==="backward",m=a&&p==="backward";return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:x(t,r.data),hasPreviousPage:N(t,r.data),isFetchNextPageError:c,isFetchingNextPage:f,isFetchPreviousPageError:g,isFetchingPreviousPage:m,isRefetchError:v&&!c&&!g,isRefetching:l&&!f&&!m}}};C=function(e,t){return O(e,n)},S=(o=class extends T.Component{constructor(e){super(e),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let e=!1;const t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch{}return e}eventListenerOptions(){let e=this.props.useCapture;return this.isPassiveSupported()?e={useCapture:this.props.useCapture,passive:!0}:e={passive:!1},e}setDefaultLoader(e){this.defaultLoader=e}detachMousewheelListener(){let e=window;this.props.useWindow===!1&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let e=window;this.props.useWindow===!1&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(e){return(this.props.getScrollParent&&this.props.getScrollParent())??(e&&e.parentNode)}filterProps(e){return e}attachScrollListener(){const e=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!e)return;let t=window;this.props.useWindow===!1&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(e){e.deltaY===1&&!this.isPassiveSupported()&&e.preventDefault()}scrollListener(){const e=this.scrollComponent,t=window,r=this.getParentElement(e);let i;if(this.props.useWindow){const a=document.documentElement||document.body.parentNode||document.body,l=t.pageYOffset!==void 0?t.pageYOffset:a.scrollTop;this.props.isReverse?i=l:i=this.calculateOffset(e,l)}else this.props.isReverse?i=r.scrollTop:i=e.scrollHeight-r.scrollTop-r.clientHeight;i<Number(this.props.threshold)&&e&&e.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=r.scrollHeight,this.beforeScrollTop=r.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}calculateTopPosition(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}render(){const e=this.filterProps(this.props),{children:t,element:r,hasMore:i,initialLoad:a,isReverse:l,loader:h,loadMore:v,pageStart:p,ref:c,threshold:f,useCapture:g,useWindow:m,getScrollParent:L,...u}=e;u.ref=w=>{this.scrollComponent=w,c&&c(w)};const d=[t];return i&&(h?l?d.unshift(h):d.push(h):this.defaultLoader&&(l?d.unshift(this.defaultLoader):d.push(this.defaultLoader))),y.createElement(r,u,d)}},P(o,"propTypes",{children:s.node.isRequired,element:s.node,hasMore:s.bool,initialLoad:s.bool,isReverse:s.bool,loader:s.node,loadMore:s.func.isRequired,pageStart:s.number,ref:s.func,getScrollParent:s.func,threshold:s.number,useCapture:s.bool,useWindow:s.bool}),P(o,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null}),o)});export{S as I,W as __tla,C as u};
