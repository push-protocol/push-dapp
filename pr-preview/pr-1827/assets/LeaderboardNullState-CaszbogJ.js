var N=Object.defineProperty;var O=(h,n,l)=>n in h?N(h,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):h[n]=l;var L=(h,n,l)=>O(h,typeof n!="symbol"?n+"":n,l);import{de as T,df as k,dg as _,dh as H,di as W,b1 as s,br as j,a_ as D,dj as i,bg as F,b2 as M,bq as S,bY as z,__tla as I}from"./index-BFh_mb4t.js";let E,R,C,y,Y=Promise.all([(()=>{try{return I}catch{}})()]).then(async()=>{var l;var h=class extends T{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:k()},t)}getOptimisticResult(e){return e.behavior=k(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var x,f;const{state:r}=e,o=super.createResult(e,t),{isFetching:p,isRefetching:a,isError:c,isRefetchError:P}=o,d=(f=(x=r.fetchMeta)==null?void 0:x.fetchMore)==null?void 0:f.direction,u=c&&d==="forward",m=p&&d==="forward",w=c&&d==="backward",v=p&&d==="backward";return{...o,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:_(t,r.data),hasPreviousPage:H(t,r.data),isFetchNextPageError:u,isFetchingNextPage:m,isFetchPreviousPageError:w,isFetchingPreviousPage:v,isRefetchError:P&&!u&&!w,isRefetching:a&&!m&&!v}}};y=function(e,t){return W(e,h)};let n;C=e=>{const{svgProps:t,...r}=e;return s.jsx(j,{componentName:"Refresh",icon:s.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[s.jsx("path",{d:"M25.6146 10.9474C23.0882 5.89476 19.0525 5.26318 16.1409 5.26318C9.86228 5.26318 4.77246 10.353 4.77246 16.6316C4.77246 22.9102 9.86228 28 16.1409 28C21.5512 28 26.0788 24.2206 27.2276 19.1579",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),s.jsx("path",{d:"M18.6674 11.5789H26.2463V4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),...r})},n=e=>{const{svgProps:t,...r}=e;return s.jsx(j,{componentName:"UserSwitch",icon:s.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[s.jsxs("g",{"clip-path":"url(#clip0_3426_11246)",children:[s.jsx("path",{d:"M16 19.3333C18.3932 19.3333 20.3333 17.3932 20.3333 15C20.3333 12.6067 18.3932 10.6666 16 10.6666C13.6067 10.6666 11.6666 12.6067 11.6666 15C11.6666 17.3932 13.6067 19.3333 16 19.3333Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),s.jsx("path",{d:"M9 24C9.65629 22.596 10.6577 21.4167 11.8933 20.593C13.1288 19.7693 14.5503 19.3333 16 19.3333C17.4497 19.3333 18.8712 19.7693 20.1067 20.593C21.3423 21.4167 22.3437 22.596 23 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),s.jsx("path",{d:"M23.6666 16L26.3333 18.6667L29 16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),s.jsx("path",{d:"M3 16L5.66667 13.3333L8.33333 16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),s.jsx("path",{d:"M5.66663 13.3333V15.9992C5.66582 18.2569 6.35708 20.4565 7.64085 22.2814C8.92463 24.1063 10.7347 25.4622 12.8103 26.1539C14.8859 26.8456 17.12 26.8373 19.1908 26.1302C21.2615 25.4232 23.0622 24.0539 24.3333 22.2196",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),s.jsx("path",{d:"M26.3333 18.6666V16.0008C26.3341 13.7431 25.6428 11.5434 24.3591 9.71854C23.0753 7.89366 21.2653 6.53774 19.1896 5.84607C17.114 5.1544 14.8799 5.16268 12.8092 5.86972C10.7384 6.57675 8.93775 7.94605 7.66663 9.7804",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_3426_11246",children:s.jsx("rect",{width:"32",height:"32",fill:"white"})})})]}),...r})},E=(l=class extends D.Component{constructor(e){super(e),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let e=!1;const t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch{}return e}eventListenerOptions(){let e=this.props.useCapture;return this.isPassiveSupported()?e={useCapture:this.props.useCapture,passive:!0}:e={passive:!1},e}setDefaultLoader(e){this.defaultLoader=e}detachMousewheelListener(){let e=window;this.props.useWindow===!1&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let e=window;this.props.useWindow===!1&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(e){return(this.props.getScrollParent&&this.props.getScrollParent())??(e&&e.parentNode)}filterProps(e){return e}attachScrollListener(){const e=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!e)return;let t=window;this.props.useWindow===!1&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(e){e.deltaY===1&&!this.isPassiveSupported()&&e.preventDefault()}scrollListener(){const e=this.scrollComponent,t=window,r=this.getParentElement(e);let o;if(this.props.useWindow){const p=document.documentElement||document.body.parentNode||document.body,a=t.pageYOffset!==void 0?t.pageYOffset:p.scrollTop;this.props.isReverse?o=a:o=this.calculateOffset(e,a)}else this.props.isReverse?o=r.scrollTop:o=e.scrollHeight-r.scrollTop-r.clientHeight;o<Number(this.props.threshold)&&e&&e.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=r.scrollHeight,this.beforeScrollTop=r.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}calculateTopPosition(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}render(){const e=this.filterProps(this.props),{children:t,element:r,hasMore:o,initialLoad:p,isReverse:a,loader:c,loadMore:P,pageStart:d,ref:u,threshold:m,useCapture:w,useWindow:v,getScrollParent:x,...f}=e;f.ref=b=>{this.scrollComponent=b,u&&u(b)};const g=[t];return o&&(c?a?g.unshift(c):g.push(c):this.defaultLoader&&(a?g.unshift(this.defaultLoader):g.push(this.defaultLoader))),F.createElement(r,f,g)}},L(l,"propTypes",{children:i.node.isRequired,element:i.node,hasMore:i.bool,initialLoad:i.bool,isReverse:i.bool,loader:i.node,loadMore:i.func.isRequired,pageStart:i.number,ref:i.func,getScrollParent:i.func,threshold:i.number,useCapture:i.bool,useWindow:i.bool}),L(l,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null}),l),R=({heading:e,subHeading:t,error:r=!1,refetchLeaderboard:o})=>s.jsxs(M,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"spacing-sm",padding:"spacing-xxxl",height:"200px",children:[s.jsx(n,{size:48,color:"icon-primary"}),s.jsxs(M,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing-xxxs",children:[e&&s.jsx(S,{textAlign:"center",variant:"h5-bold",color:"text-primary",children:e}),t&&s.jsx(S,{textAlign:"center",variant:"bs-regular",color:"text-tertiary-inverse",children:t})]}),r&&s.jsx(z,{onClick:()=>o==null?void 0:o(),variant:"tertiary",size:"small",leadingIcon:s.jsx(C,{}),children:"Refresh"})]})});export{E as I,R as L,C as R,Y as __tla,y as u};
