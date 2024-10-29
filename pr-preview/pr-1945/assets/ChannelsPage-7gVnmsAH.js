import{e1 as t,el as J,e_ as Be,ee as N,hB as Re,hC as $e,fj as Ie,d_ as p,hD as qe,hE as We,hF as Ge,hG as K,ew as Ue,e2 as d,g_ as He,gY as Je,gW as Q,ej as P,eo as V,hH as Y,em as Ke,gQ as Qe,g5 as X,gP as Ve,gO as Z,hI as Ye,gr as ee,ek as Xe,__tla as Ze}from"./index-CtHIn1vx.js";import{S as ae,__tla as ea}from"./Search-BlKxcbez.js";import{u as aa,__tla as ta}from"./useGetChannelsList-CJsh2PWX.js";import{u as ia,I as ra,__tla as na}from"./InfiniteScroll-DJBu5mC0.js";import{u as sa,__tla as ca}from"./useGetChannelCategories-DiSua7y1.js";import{C as la,__tla as oa}from"./ChannelDetailsCard-C_Yy6Kc9.js";import{u as ha,__tla as da}from"./VerifiedChannelTooltipContent-BuzaHP8A.js";import{C as ua,__tla as ga}from"./ContentLayout-BtaXPb0p.js";import{__tla as pa}from"./useMutation-BqhsEu0q.js";import{__tla as ma}from"./OptOut-iXGeuZKj.js";import{__tla as fa}from"./PushLogo-Brq59qmK.js";let te,xa=Promise.all([(()=>{try{return Ze}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return fa}catch{}})()]).then(async()=>{const ie=e=>{const{svgProps:a,...i}=e;return t.jsx(J,{componentName:"CaretLeft",icon:t.jsx("svg",{width:"inherit",height:"inherit",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:t.jsx("path",{d:"M14.8389 17.5875L9.25137 12L14.8389 6.41248",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),...i})},re=e=>{const{svgProps:a,...i}=e;return t.jsx(J,{componentName:"CaretRight",icon:t.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[t.jsx("g",{"clip-path":"url(#clip0_4239_16009)",children:t.jsx("path",{d:"M9.25146 6.41254L14.8389 12L9.25146 17.5875",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_4239_16009",children:t.jsx("rect",{width:"15.9553",height:"8.72765",fill:"white",transform:"translate(16.4089 4.02235) rotate(90)"})})})]}),...i})},ne=e=>e,se=({page:e,pageSize:a,query:i,chain:s,tag:r})=>Be({method:"GET",url:`${N.apiUrl}/v1/channels/search`,params:{page:e,limit:a,query:i,...s?{filter:s}:{},...r?{tag:r}:{}}}).then(l=>ne(l.data)),ce=({pageSize:e,query:a,chain:i,tag:s})=>ia({queryKey:[Re,a,i,s],initialPageParam:1,enabled:!!a,queryFn:({pageParam:r})=>se({pageSize:e,page:r,query:a,chain:i,tag:s}),getNextPageParam:({itemCount:r},l,n)=>(console.log(r,n,e,e*(n+1)>=r),e*(n+1)>=r?null:n+1)}),le=({initialChain:e,initialCategory:a})=>{const[,i]=$e(),{search:s}=Ie(),r=p.useMemo(()=>Object.fromEntries(new URLSearchParams(s).entries()),[s]),l=n=>{const c=Object.entries({...r,...n}).reduce((h,[g,m])=>m?{...h,[g]:m}:h,{});i(c)};return p.useEffect(()=>{const n={};(!r.chain||!r.category)&&(n.chain=r.chain||e,n.category=r.category||a),(r.chain!==e||r.search)&&r.category!==a&&(n.category=a),Object.keys(n).length&&l(n)},[]),{filters:{chain:(r==null?void 0:r.chain)||e,category:(r==null?void 0:r.category)||"",search:(r==null?void 0:r.search)||""},setFilter:l}};var oe=qe,he=function(){return oe.Date.now()},de=he,ue=/\s/;function ge(e){for(var a=e.length;a--&&ue.test(e.charAt(a)););return a}var pe=ge,me=pe,fe=/^\s+/;function xe(e){return e&&e.slice(0,me(e)+1).replace(fe,"")}var ye=xe,_e=We,ve=Ge,je="[object Symbol]";function we(e){return typeof e=="symbol"||ve(e)&&_e(e)==je}var be=we,Ce=ye,O=K,Se=be,T=NaN,Le=/^[-+]0x[0-9a-f]+$/i,ke=/^0b[01]+$/i,Ne=/^0o[0-7]+$/i,Pe=parseInt;function Ee(e){if(typeof e=="number")return e;if(Se(e))return T;if(O(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=O(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=Ce(e);var i=ke.test(e);return i||Ne.test(e)?Pe(e.slice(2),i?2:8):Le.test(e)?T:+e}var De=Ee,Ae=K,E=de,z=De,Fe="Expected a function",Me=Math.max,Oe=Math.min;function Te(e,a,i){var s,r,l,n,c,h,g=0,m=!1,x=!1,v=!0;if(typeof e!="function")throw new TypeError(Fe);a=z(a)||0,Ae(i)&&(m=!!i.leading,x="maxWait"in i,l=x?Me(z(i.maxWait)||0,a):l,v="trailing"in i?!!i.trailing:v);function j(o){var f=s,C=r;return s=r=void 0,g=o,n=e.apply(C,f),n}function w(o){return g=o,c=setTimeout(y,a),m?j(o):n}function S(o){var f=o-h,C=o-g,H=a-f;return x?Oe(H,l-C):H}function L(o){var f=o-h,C=o-g;return h===void 0||f>=a||f<0||x&&C>=l}function y(){var o=E();if(L(o))return b(o);c=setTimeout(y,S(o))}function b(o){return c=void 0,v&&s?j(o):(s=r=void 0,n)}function k(){c!==void 0&&clearTimeout(c),g=0,s=h=r=c=void 0}function _(){return c===void 0?n:b(E())}function M(){var o=E(),f=L(o);if(s=arguments,r=this,h=o,f){if(c===void 0)return w(h);if(x)return clearTimeout(c),c=setTimeout(y,a),j(h)}return c===void 0&&(c=setTimeout(y,a)),n}return M.cancel=k,M.flush=_,M}var ze=Te;let B,u,D,R,A,$,F,I,q,W,G,U;B=Ue(ze),u="All",D=["0x8AAAa9c3a06a4A9FE7C5cCe17d8B5db1E225Eadf"],R=({filters:e,setFilter:a})=>{const[i,s]=p.useState(e.search),[r,l]=p.useState(!0),n=p.useCallback(B(c=>{c!==""&&a({search:c,category:u})},800),[a]);return p.useEffect(()=>{e.search||s("")},[e.search]),p.useEffect(()=>{!r&&n(i)},[i]),p.useEffect(()=>{l(!1)},[]),t.jsxs(d,{display:"flex",gap:"spacing-xs",flexDirection:{initial:"row",ml:"column"},width:"100%",children:[t.jsx(d,{width:"100%",children:t.jsx(He,{icon:t.jsx(ae,{}),onChange:c=>s(c.target.value),placeholder:"Search Web3 domain or 0x123",value:i})}),t.jsx(d,{width:{initial:"300px",ml:"100%"},children:t.jsx(Je,{options:Q(N.allowedNetworks),value:e.chain,onSelect:c=>a({chain:c,category:u})})})]})},A=150,$=({filters:e,setFilter:a})=>{const i=p.useRef(null),{data:s,isLoading:r}=sa(),l=r?Array(15).fill(0):(s==null?void 0:s.tags)||[];return t.jsxs(d,{display:"flex",alignItems:"center",css:P`
        flex-shrink: 0;
      `,gap:"spacing-xs",maxWidth:{mm:"346px",ml:"392px"},position:"relative",children:[t.jsx(d,{backgroundColor:"surface-primary",css:P`
          position: absolute;
        `,borderRadius:"radius-round",children:t.jsx(V,{iconOnly:t.jsx(ie,{}),circular:!0,variant:"outline",size:"small",onClick:()=>{var n;(n=i==null?void 0:i.current)==null||n.scrollBy({left:-A,behavior:"smooth"})}})}),t.jsxs(d,{display:"flex",overflow:"hidden",gap:"spacing-xs",width:"100%",ref:i,padding:"spacing-none spacing-xxl",children:[!r&&t.jsx(Y,{isActive:e.category===u,onClick:()=>a({category:u}),children:u}),l.map((n,c)=>t.jsx(Ke,{isLoading:r,width:"200px",borderRadius:"radius-round",children:t.jsx(Y,{isActive:n===e.category,onClick:()=>a({category:n,search:"",chain:N.coreContractChain.toString()}),children:n},`${c}`)}))]}),t.jsx(d,{backgroundColor:"surface-primary",css:P`
          position: absolute;
          right: 0;
        `,borderRadius:"radius-round",children:t.jsx(V,{iconOnly:t.jsx(re,{}),circular:!0,variant:"outline",size:"small",onClick:()=>{var n;(n=i==null?void 0:i.current)==null||n.scrollBy({left:A,behavior:"smooth"})}})})]})},F=({channelDetails:e,isLoading:a})=>{const{data:i,refetch:s,isLoading:r}=ha(void 0,{refetchOnWindowFocus:!1,staleTime:1/0,refetchInterval:9e5}),l=()=>{s()},n=i==null?void 0:i.find(h=>h.channel===(e==null?void 0:e.channel)),c=JSON.parse((n==null?void 0:n.user_settings)||"[]")||[];return t.jsx(la,{channelDetails:e,isLoading:a,isSubscribed:!!n,isSubscriptionLoading:r,handleRefetch:l,subscribeButtonVariant:"outline",userSettings:c,width:{initial:"inherit",tb:"auto",lp:"auto",mm:"auto"}})},I=({channelAddress:e})=>{const{data:a,isLoading:i}=Qe(e);return t.jsx(F,{channelDetails:a,isLoading:i})},q=({channels:e,hasMoreData:a,isLoading:i,isLoadingNextPage:s,loadMore:r,suggestedChannels:l})=>t.jsxs(d,{height:"100%",overflow:"auto",customScrollbar:!0,padding:"spacing-none spacing-xxs",margin:{initial:"spacing-none spacing-sm",ml:"spacing-none spacing-xxs"},css:P`
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
      `,children:[t.jsxs(ra,{pageStart:1,loadMore:r,hasMore:a,useWindow:!1,threshold:150,className:"channel-scroll",children:[l.map(n=>t.jsx(I,{channelAddress:n},`${n}`)),e.map((n,c)=>t.jsx(F,{channelDetails:n,isLoading:i},`${c}`))]}),s&&t.jsx(d,{justifyContent:"center",display:"flex",padding:"spacing-sm",children:t.jsx(Ve,{size:"medium",variant:"primary"})})]}),W=e=>Ye()==="prod"&&(e==null?void 0:e.category)&&(e==null?void 0:e.category)!=u,G=(e,a)=>{if(W(a)){const i=e.map(s=>s.channel);return Object.keys(Z).filter(s=>!i.includes(s)&&!D.includes(s)&&Z[s]===a.category)}return[]},U=()=>{var b,k;const e=Q(N.allowedNetworks),{filters:a,setFilter:i}=le({initialChain:e[0].value,initialCategory:u}),s=(b=e.find(_=>_.value===a.chain))==null?void 0:b.label.includes("Ethereum"),{data:r,isLoading:l,fetchNextPage:n,isFetchingNextPage:c,hasNextPage:h}=aa({pageSize:21,order:ee.ChannelListOrderType.DESCENDING,sort:ee.ChannelListSortType.SUBSCRIBER,chain:s?"":a.chain,tag:a.category===u?"":a.category}),{data:g,isLoading:m,fetchNextPage:x,isFetchingNextPage:v,hasNextPage:j}=ce({pageSize:21,query:a.search,chain:s?"":a.chain,tag:a.category===u?"":a.category}),w=l||m?Array(9).fill(0):((k=a.search?g:r)==null?void 0:k.pages.flatMap(_=>_.channels).filter(_=>!D.includes(_.channel)))||[],S=G(w,a),L=a.search?!v&&j:!c&&h,y=l||m;return t.jsx(d,{display:"flex",width:"-webkit-fill-available",overflow:"scroll",height:"100%",children:t.jsxs(d,{display:"flex",flexDirection:"column",width:"100%",gap:{initial:"spacing-md",ml:"spacing-lg"},children:[t.jsxs(d,{display:"flex",flexDirection:"column",gap:"spacing-sm",padding:{initial:"spacing-md spacing-md spacing-none spacing-md",ml:"spacing-sm spacing-sm spacing-none spacing-sm"},children:[t.jsx(R,{filters:a,setFilter:i}),t.jsx($,{filters:a,setFilter:i})]}),!w.length&&!S.length&&!y?t.jsxs(d,{display:"flex",gap:"spacing-xs",alignItems:"center",flexDirection:"column",justifyContent:"center",height:"100%",children:[t.jsx(ae,{size:48,color:"icon-tertiary"}),t.jsx(Xe,{variant:"h5-bold",children:"No channels to display"})]}):t.jsx(q,{channels:w,hasMoreData:L,suggestedChannels:S,isLoading:y,isLoadingNextPage:c||v,loadMore:a.search?x:n})]})})},te=()=>t.jsx(ua,{variant:"verticalStretch",children:t.jsx(U,{})})});export{xa as __tla,te as default};
