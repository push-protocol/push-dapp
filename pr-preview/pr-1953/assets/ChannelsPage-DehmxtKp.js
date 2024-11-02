import{e1 as t,el as K,e_ as $e,ee as N,hF as ze,hG as Be,fj as Ie,d_ as p,hH as qe,hI as We,hJ as Ge,hK as H,ew as Ue,e2 as d,h1 as Je,g$ as Ke,gZ as V,ej as P,eo as Z,hL as Q,em as He,gT as Ve,g5 as X,gS as Ze,gR as Y,hM as Qe,gr as ee,ek as Xe,__tla as Ye}from"./index-Di-5xBRn.js";import{S as ae,__tla as ea}from"./Search-BcjVKpiK.js";import{u as aa,__tla as ta}from"./useGetChannelsList-DE9ilB5L.js";import{u as ia,I as ra,__tla as na}from"./InfiniteScroll-oJVpzJsL.js";import{u as sa,__tla as ca}from"./useGetChannelCategories-BAE-J1WX.js";import{C as la,__tla as oa}from"./ChannelDetailsCard-BM2ZmUhE.js";import{u as ha,__tla as da}from"./VerifiedChannelTooltipContent-D2upaRWP.js";import{C as ua,__tla as ga}from"./ContentLayout-C8xxgXwC.js";import{__tla as pa}from"./useMutation-DP-pyt6D.js";import{__tla as fa}from"./PushLogo-CZLw1sGI.js";let te,ma=Promise.all([(()=>{try{return Ye}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return fa}catch{}})()]).then(async()=>{const ie=e=>{const{svgProps:a,...i}=e;return t.jsx(K,{componentName:"CaretLeft",icon:t.jsx("svg",{width:"inherit",height:"inherit",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:t.jsx("path",{d:"M14.8389 17.5875L9.25137 12L14.8389 6.41248",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),...i})},re=e=>{const{svgProps:a,...i}=e;return t.jsx(K,{componentName:"CaretRight",icon:t.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[t.jsx("g",{"clip-path":"url(#clip0_4239_16009)",children:t.jsx("path",{d:"M9.25146 6.41254L14.8389 12L9.25146 17.5875",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_4239_16009",children:t.jsx("rect",{width:"15.9553",height:"8.72765",fill:"white",transform:"translate(16.4089 4.02235) rotate(90)"})})})]}),...i})},ne=e=>e,se=({page:e,pageSize:a,query:i,chain:s,tag:r})=>$e({method:"GET",url:`${N.apiUrl}/v1/channels/search`,params:{page:e,limit:a,query:i,...s?{filter:s}:{},...r?{tag:r}:{}}}).then(l=>ne(l.data)),ce=({pageSize:e,query:a,chain:i,tag:s})=>ia({queryKey:[ze,a,i,s],initialPageParam:1,enabled:!!a,queryFn:({pageParam:r})=>se({pageSize:e,page:r,query:a,chain:i,tag:s}),getNextPageParam:({itemCount:r},l,n)=>(console.log(r,n,e,e*(n+1)>=r),e*(n+1)>=r?null:n+1)}),le=({initialChain:e,initialCategory:a})=>{const[,i]=Be(),{search:s}=Ie(),r=p.useMemo(()=>Object.fromEntries(new URLSearchParams(s).entries()),[s]),l=n=>{const c=Object.entries({...r,...n}).reduce((h,[g,f])=>f?{...h,[g]:f}:h,{});i(c)};return p.useEffect(()=>{const n={};(!r.chain||!r.category)&&(n.chain=r.chain||e,n.category=r.category||a),(r.chain!==e||r.search)&&r.category!==a&&(n.category=a),Object.keys(n).length&&l(n)},[]),{filters:{chain:(r==null?void 0:r.chain)||e,category:(r==null?void 0:r.category)||"",search:(r==null?void 0:r.search)||""},setFilter:l}};var oe=qe,he=function(){return oe.Date.now()},de=he,ue=/\s/;function ge(e){for(var a=e.length;a--&&ue.test(e.charAt(a)););return a}var pe=ge,fe=pe,me=/^\s+/;function xe(e){return e&&e.slice(0,fe(e)+1).replace(me,"")}var ye=xe,ve=We,_e=Ge,je="[object Symbol]";function we(e){return typeof e=="symbol"||_e(e)&&ve(e)==je}var be=we,Ce=ye,T=H,Se=be,O=NaN,Le=/^[-+]0x[0-9a-f]+$/i,ke=/^0b[01]+$/i,Ne=/^0o[0-7]+$/i,Pe=parseInt;function Ee(e){if(typeof e=="number")return e;if(Se(e))return O;if(T(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=T(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=Ce(e);var i=ke.test(e);return i||Ne.test(e)?Pe(e.slice(2),i?2:8):Le.test(e)?O:+e}var De=Ee,Me=H,E=de,R=De,Ae="Expected a function",Fe=Math.max,Te=Math.min;function Oe(e,a,i){var s,r,l,n,c,h,g=0,f=!1,x=!1,_=!0;if(typeof e!="function")throw new TypeError(Ae);a=R(a)||0,Me(i)&&(f=!!i.leading,x="maxWait"in i,l=x?Fe(R(i.maxWait)||0,a):l,_="trailing"in i?!!i.trailing:_);function j(o){var m=s,C=r;return s=r=void 0,g=o,n=e.apply(C,m),n}function w(o){return g=o,c=setTimeout(y,a),f?j(o):n}function S(o){var m=o-h,C=o-g,J=a-m;return x?Te(J,l-C):J}function L(o){var m=o-h,C=o-g;return h===void 0||m>=a||m<0||x&&C>=l}function y(){var o=E();if(L(o))return b(o);c=setTimeout(y,S(o))}function b(o){return c=void 0,_&&s?j(o):(s=r=void 0,n)}function k(){c!==void 0&&clearTimeout(c),g=0,s=h=r=c=void 0}function v(){return c===void 0?n:b(E())}function F(){var o=E(),m=L(o);if(s=arguments,r=this,h=o,m){if(c===void 0)return w(h);if(x)return clearTimeout(c),c=setTimeout(y,a),j(h)}return c===void 0&&(c=setTimeout(y,a)),n}return F.cancel=k,F.flush=v,F}var Re=Oe;let $,u,D,z,M,B,A,I,q,W,G,U;$=Ue(Re),u="All",D=["0x8AAAa9c3a06a4A9FE7C5cCe17d8B5db1E225Eadf"],z=({filters:e,setFilter:a})=>{const[i,s]=p.useState(e.search),[r,l]=p.useState(!0),n=p.useCallback($(c=>{c!==""&&a({search:c,category:u})},800),[a]);return p.useEffect(()=>{e.search||s("")},[e.search]),p.useEffect(()=>{!r&&n(i)},[i]),p.useEffect(()=>{l(!1)},[]),t.jsxs(d,{display:"flex",gap:"spacing-xs",flexDirection:{initial:"row",ml:"column"},width:"100%",children:[t.jsx(d,{width:"100%",children:t.jsx(Je,{icon:t.jsx(ae,{}),onChange:c=>s(c.target.value),placeholder:"Search Web3 domain or 0x123",value:i})}),t.jsx(d,{width:{initial:"300px",ml:"100%"},children:t.jsx(Ke,{options:V(N.allowedNetworks),value:e.chain,onSelect:c=>a({chain:c,category:u})})})]})},M=150,B=({filters:e,setFilter:a})=>{const i=p.useRef(null),{data:s,isLoading:r}=sa(),l=r?Array(15).fill(0):(s==null?void 0:s.tags)||[];return t.jsxs(d,{display:"flex",alignItems:"center",css:P`
        flex-shrink: 0;
      `,gap:"spacing-xs",maxWidth:{mm:"346px",ml:"392px"},position:"relative",children:[t.jsx(d,{backgroundColor:"surface-primary",css:P`
          position: absolute;
        `,borderRadius:"radius-round",children:t.jsx(Z,{iconOnly:t.jsx(ie,{}),circular:!0,variant:"outline",size:"small",onClick:()=>{var n;(n=i==null?void 0:i.current)==null||n.scrollBy({left:-M,behavior:"smooth"})}})}),t.jsxs(d,{display:"flex",overflow:"hidden",gap:"spacing-xs",width:"100%",ref:i,padding:"spacing-none spacing-xxl",children:[!r&&t.jsx(Q,{isActive:e.category===u,onClick:()=>a({category:u}),children:u}),l.map((n,c)=>t.jsx(He,{isLoading:r,width:"200px",borderRadius:"radius-round",children:t.jsx(Q,{isActive:n===e.category,onClick:()=>a({category:n,search:"",chain:N.coreContractChain.toString()}),children:n},`${c}`)}))]}),t.jsx(d,{backgroundColor:"surface-primary",css:P`
          position: absolute;
          right: 0;
        `,borderRadius:"radius-round",children:t.jsx(Z,{iconOnly:t.jsx(re,{}),circular:!0,variant:"outline",size:"small",onClick:()=>{var n;(n=i==null?void 0:i.current)==null||n.scrollBy({left:M,behavior:"smooth"})}})})]})},A=({channelDetails:e,isLoading:a})=>{const{data:i,refetch:s,isLoading:r}=ha(void 0,{refetchOnWindowFocus:!1,staleTime:1/0,refetchInterval:9e5}),l=()=>{s()},n=i==null?void 0:i.find(h=>h.channel===(e==null?void 0:e.channel)),c=JSON.parse((n==null?void 0:n.user_settings)||"[]")||[];return t.jsx(la,{channelDetails:e,isLoading:a,isSubscribed:!!n,isSubscriptionLoading:r,handleRefetch:l,subscribeButtonVariant:"outline",userSettings:c,width:{initial:"inherit",tb:"auto",lp:"auto",mm:"auto"}})},I=({channelAddress:e})=>{const{data:a,isLoading:i}=Ve(e);return t.jsx(A,{channelDetails:a,isLoading:i})},q=({channels:e,hasMoreData:a,isLoading:i,isLoadingNextPage:s,loadMore:r,suggestedChannels:l})=>t.jsxs(d,{height:"100%",overflow:"auto",customScrollbar:!0,padding:"spacing-none spacing-xxs",margin:{initial:"spacing-none spacing-sm",ml:"spacing-none spacing-xxs"},css:P`
        .channel-scroll {
          display: grid;
          gap: var(--spacing-md);
          grid-template-columns: repeat(3, minmax(0px, 1fr));

          @media${X.tablet} {
            grid-template-columns: repeat(2, minmax(0px, 1fr));
          }
          @media${X.mobileL} {
            grid-template-columns: repeat(1, minmax(0px, 1fr));
          }
        }
      `,children:[t.jsxs(ra,{pageStart:1,loadMore:r,hasMore:a,useWindow:!1,threshold:150,className:"channel-scroll",children:[l.map(n=>t.jsx(I,{channelAddress:n},`${n}`)),e.map((n,c)=>t.jsx(A,{channelDetails:n,isLoading:i},`${c}`))]}),s&&t.jsx(d,{justifyContent:"center",display:"flex",padding:"spacing-sm",children:t.jsx(Ze,{size:"medium",variant:"primary"})})]}),W=e=>Qe()==="prod"&&(e==null?void 0:e.category)&&(e==null?void 0:e.category)!=u,G=(e,a)=>{if(W(a)){const i=e.map(s=>s.channel);return Object.keys(Y).filter(s=>!i.includes(s)&&!D.includes(s)&&Y[s]===a.category)}return[]},U=()=>{var b,k;const e=V(N.allowedNetworks),{filters:a,setFilter:i}=le({initialChain:e[0].value,initialCategory:u}),s=(b=e.find(v=>v.value===a.chain))==null?void 0:b.label.includes("Ethereum"),{data:r,isLoading:l,fetchNextPage:n,isFetchingNextPage:c,hasNextPage:h}=aa({pageSize:21,order:ee.ChannelListOrderType.DESCENDING,sort:ee.ChannelListSortType.SUBSCRIBER,chain:s?"":a.chain,tag:a.category===u?"":a.category}),{data:g,isLoading:f,fetchNextPage:x,isFetchingNextPage:_,hasNextPage:j}=ce({pageSize:21,query:a.search,chain:s?"":a.chain,tag:a.category===u?"":a.category}),w=l||f?Array(9).fill(0):((k=a.search?g:r)==null?void 0:k.pages.flatMap(v=>v.channels).filter(v=>!D.includes(v.channel)))||[],S=G(w,a),L=a.search?!_&&j:!c&&h,y=l||f;return t.jsx(d,{display:"flex",width:"-webkit-fill-available",overflow:"scroll",height:"100%",children:t.jsxs(d,{display:"flex",flexDirection:"column",width:"100%",gap:{initial:"spacing-md",ml:"spacing-lg"},children:[t.jsxs(d,{display:"flex",flexDirection:"column",gap:"spacing-sm",padding:{initial:"spacing-md spacing-md spacing-none spacing-md",ml:"spacing-sm spacing-sm spacing-none spacing-sm"},children:[t.jsx(z,{filters:a,setFilter:i}),t.jsx(B,{filters:a,setFilter:i})]}),!w.length&&!S.length&&!y?t.jsxs(d,{display:"flex",gap:"spacing-xs",alignItems:"center",flexDirection:"column",justifyContent:"center",height:"100%",children:[t.jsx(ae,{size:48,color:"icon-tertiary"}),t.jsx(Xe,{variant:"h5-bold",children:"No channels to display"})]}):t.jsx(q,{channels:w,hasMoreData:L,suggestedChannels:S,isLoading:y,isLoadingNextPage:c||_,loadMore:a.search?x:n})]})})},te=()=>t.jsx(ua,{variant:"verticalStretch",children:t.jsx(U,{})})});export{ma as __tla,te as default};
