import{d_ as t,ei as G,e_ as Te,ed as P,hG as $e,hH as Ie,ex as Re,dX as f,hI as Be,hJ as qe,hK as We,hL as J,ev as Ue,d$ as d,go as Ke,gp as Ge,gK as H,e3 as L,em as X,hM as Q,ej as Je,gz as He,fK as Y,gy as Xe,gx as Z,hN as Qe,gd as ee,e2 as Ye,__tla as Ze}from"./index-CfbKVokx.js";import{S as ie,__tla as ei}from"./Search-BINUoixg.js";import{u as ii,__tla as ai}from"./useGetChannelsList-DpWdS-hw.js";import{u as ti,I as ri,__tla as ni}from"./InfiniteScroll-Bt0SwFI6.js";import{u as si,__tla as li}from"./useGetChannelCategories-dILxnU2b.js";import{C as oi,__tla as ci}from"./ChannelDetailsCard-BnZTtfEk.js";import{u as hi,__tla as di}from"./VerifiedChannelTooltipContent-Cl-ZkTlh.js";import{U as ui,b as gi,__tla as pi}from"./UnlockProfileWrapper-DTfou2eh.js";import{C as fi,__tla as mi}from"./ContentLayout-DiIo4zwr.js";import{__tla as xi}from"./PushLogo-CLdnWu9c.js";let ae,yi=Promise.all([(()=>{try{return Ze}catch{}})(),(()=>{try{return ei}catch{}})(),(()=>{try{return ai}catch{}})(),(()=>{try{return ni}catch{}})(),(()=>{try{return li}catch{}})(),(()=>{try{return ci}catch{}})(),(()=>{try{return di}catch{}})(),(()=>{try{return pi}catch{}})(),(()=>{try{return mi}catch{}})(),(()=>{try{return xi}catch{}})()]).then(async()=>{const te=e=>{const{svgProps:i,...r}=e;return t.jsx(G,{componentName:"CaretLeft",icon:t.jsx("svg",{width:"inherit",height:"inherit",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:t.jsx("path",{d:"M14.8389 17.5875L9.25137 12L14.8389 6.41248",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),...r})},re=e=>{const{svgProps:i,...r}=e;return t.jsx(G,{componentName:"CaretRight",icon:t.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[t.jsx("g",{"clip-path":"url(#clip0_4239_16009)",children:t.jsx("path",{d:"M9.25146 6.41254L14.8389 12L9.25146 17.5875",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_4239_16009",children:t.jsx("rect",{width:"15.9553",height:"8.72765",fill:"white",transform:"translate(16.4089 4.02235) rotate(90)"})})})]}),...r})},ne=e=>e,se=({page:e,pageSize:i,query:r,chain:s,tag:a})=>Te({method:"GET",url:`${P.apiUrl}/v1/channels/search`,params:{page:e,limit:i,query:r,...s?{filter:s}:{},...a?{tag:a}:{}}}).then(c=>ne(c.data)),le=({pageSize:e,query:i,chain:r,tag:s})=>ti({queryKey:[$e,i,r,s],initialPageParam:1,enabled:!!i,queryFn:({pageParam:a})=>se({pageSize:e,page:a,query:i,chain:r,tag:s}),getNextPageParam:({itemCount:a},c,n)=>(console.log(a,n,e,e*(n+1)>=a),e*(n+1)>=a?null:n+1)}),oe=({initialChain:e,initialCategory:i})=>{const[,r]=Ie(),{search:s}=Re(),a=f.useMemo(()=>Object.fromEntries(new URLSearchParams(s).entries()),[s]),c=n=>{const l=Object.entries({...a,...n}).reduce((o,[u,g])=>g?{...o,[u]:g}:o,{});r(l)};return f.useEffect(()=>{const n={};(!a.chain||!a.category)&&(n.chain=a.chain||e,n.category=a.category||i),(a.chain!==e||a.search)&&a.category!==i&&(n.category=i),Object.keys(n).length&&c(n)},[]),{filters:{chain:(a==null?void 0:a.chain)||e,category:(a==null?void 0:a.category)||"",search:(a==null?void 0:a.search)||""},setFilter:c}};var ce=Be,he=function(){return ce.Date.now()},de=he,ue=/\s/;function ge(e){for(var i=e.length;i--&&ue.test(e.charAt(i)););return i}var pe=ge,fe=pe,me=/^\s+/;function xe(e){return e&&e.slice(0,fe(e)+1).replace(me,"")}var ye=xe,ve=qe,_e=We,je="[object Symbol]";function be(e){return typeof e=="symbol"||_e(e)&&ve(e)==je}var we=be,Ce=ye,A=J,Le=we,O=NaN,Se=/^[-+]0x[0-9a-f]+$/i,Me=/^0b[01]+$/i,ke=/^0o[0-7]+$/i,Pe=parseInt;function Ne(e){if(typeof e=="number")return e;if(Le(e))return O;if(A(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=A(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=Ce(e);var r=Me.test(e);return r||ke.test(e)?Pe(e.slice(2),r?2:8):Se.test(e)?O:+e}var Ee=Ne,De=J,N=de,z=Ee,Ve="Expected a function",Ae=Math.max,Oe=Math.min;function ze(e,i,r){var s,a,c,n,l,o,u=0,g=!1,x=!1,_=!0;if(typeof e!="function")throw new TypeError(Ve);i=z(i)||0,De(r)&&(g=!!r.leading,x="maxWait"in r,c=x?Ae(z(r.maxWait)||0,i):c,_="trailing"in r?!!r.trailing:_);function j(h){var m=s,C=a;return s=a=void 0,u=h,n=e.apply(C,m),n}function b(h){return u=h,l=setTimeout(y,i),g?j(h):n}function S(h){var m=h-o,C=h-u,K=i-m;return x?Oe(K,c-C):K}function M(h){var m=h-o,C=h-u;return o===void 0||m>=i||m<0||x&&C>=c}function y(){var h=N();if(M(h))return w(h);l=setTimeout(y,S(h))}function w(h){return l=void 0,_&&s?j(h):(s=a=void 0,n)}function k(){l!==void 0&&clearTimeout(l),u=0,s=o=a=l=void 0}function v(){return l===void 0?n:w(N())}function V(){var h=N(),m=M(h);if(s=arguments,a=this,o=h,m){if(l===void 0)return b(o);if(x)return clearTimeout(l),l=setTimeout(y,i),j(o)}return l===void 0&&(l=setTimeout(y,i)),n}return V.cancel=k,V.flush=v,V}var Fe=ze;let F,p,E,T,$,I,D,R,B,q,W,U;F=Ue(Fe),p="All",E=["0x8AAAa9c3a06a4A9FE7C5cCe17d8B5db1E225Eadf"],T=({filters:e,setFilter:i})=>{const[r,s]=f.useState(e.search),[a,c]=f.useState(!0),n=f.useCallback(F(l=>{l!==""&&i({search:l,category:p})},800),[i]);return f.useEffect(()=>{e.search||s("")},[e.search]),f.useEffect(()=>{!a&&n(r)},[r]),f.useEffect(()=>{c(!1)},[]),t.jsxs(d,{display:"flex",gap:"spacing-xs",flexDirection:{initial:"row",ml:"column"},width:"100%",children:[t.jsx(d,{width:"100%",children:t.jsx(Ke,{icon:t.jsx(ie,{}),onChange:l=>s(l.target.value),placeholder:"Search Web3 domain or 0x123",value:r})}),t.jsx(d,{width:{initial:"300px",ml:"100%"},children:t.jsx(Ge,{options:H(P.allowedNetworks),value:e.chain,onSelect:l=>i({chain:l,category:p})})})]})},$=150,I=({filters:e,setFilter:i})=>{const r=f.useRef(null),{data:s,isLoading:a}=si(),c=a?Array(15).fill(0):(s==null?void 0:s.tags)||[];return t.jsxs(d,{display:"flex",alignItems:"center",css:L`
        flex-shrink: 0;
      `,gap:"spacing-xs",maxWidth:{mm:"346px",ml:"392px"},position:"relative",children:[t.jsx(d,{backgroundColor:"surface-primary",css:L`
          position: absolute;
        `,borderRadius:"radius-round",children:t.jsx(X,{iconOnly:t.jsx(te,{}),circular:!0,variant:"outline",size:"small",onClick:()=>{var n;(n=r==null?void 0:r.current)==null||n.scrollBy({left:-150,behavior:"smooth"})}})}),t.jsxs(d,{display:"flex",overflow:"hidden",gap:"spacing-xs",width:"100%",ref:r,padding:"spacing-none spacing-xxl",children:[!a&&t.jsx(Q,{isActive:e.category===p,onClick:()=>i({category:p}),children:p}),c.map((n,l)=>t.jsx(Je,{isLoading:a,width:"200px",borderRadius:"radius-round",children:t.jsx(Q,{isActive:n===e.category,onClick:()=>i({category:n,search:"",chain:P.coreContractChain.toString()}),children:n},`${l}`)}))]}),t.jsx(d,{backgroundColor:"surface-primary",css:L`
          position: absolute;
          right: 0;
        `,borderRadius:"radius-round",children:t.jsx(X,{iconOnly:t.jsx(re,{}),circular:!0,variant:"outline",size:"small",onClick:()=>{var n;(n=r==null?void 0:r.current)==null||n.scrollBy({left:$,behavior:"smooth"})}})})]})},D=({channelDetails:e,isLoading:i,onChangeProfileModalVisibility:r,profileModalVisibility:s})=>{const{data:a,refetch:c,isLoading:n}=hi(void 0,{refetchOnWindowFocus:!1,staleTime:1/0,refetchInterval:9e5}),l=()=>{c()},o=a==null?void 0:a.find(g=>g.channel===(e==null?void 0:e.channel)),u=JSON.parse((o==null?void 0:o.user_settings)||"[]")||[];return t.jsx(oi,{onChangeProfileModalVisibility:r,profileModalVisibility:s,channelDetails:e,isLoading:i,isSubscribed:!!o,isSubscriptionLoading:n,handleRefetch:l,subscribeButtonVariant:"outline",userSettings:u,width:{initial:"inherit",tb:"auto",lp:"auto",mm:"auto"}})},R=({channelAddress:e,onChangeProfileModalVisibility:i,profileModalVisibility:r})=>{const{data:s,isLoading:a}=He(e);return t.jsx(D,{channelDetails:s,isLoading:a,onChangeProfileModalVisibility:i,profileModalVisibility:r})},B=({channels:e,hasMoreData:i,isLoading:r,isLoadingNextPage:s,loadMore:a,suggestedChannels:c})=>{const[n,l]=f.useState({isVisible:!1,channel_id:null});return t.jsxs(d,{height:"100%",overflow:"auto",customScrollbar:!0,padding:"spacing-none spacing-xxs",margin:{initial:"spacing-none spacing-sm",ml:"spacing-none spacing-xxs"},css:L`
        .channel-scroll {
          display: grid;
          gap: var(--spacing-md);
          grid-template-columns: repeat(3, minmax(0px, 1fr));

          @media${Y.tablet} {
            grid-template-columns: repeat(2, minmax(0px, 1fr));
          }
          @media${Y.mobileL} {
            grid-template-columns: repeat(1, minmax(0px, 1fr));
          }
        }
      `,children:[t.jsxs(ri,{pageStart:1,loadMore:a,hasMore:i,useWindow:!1,threshold:150,className:"channel-scroll",children:[c.map(o=>t.jsx(R,{channelAddress:o},`${o}`)),e.map((o,u)=>t.jsx(D,{onChangeProfileModalVisibility:g=>l(g),profileModalVisibility:n,channelDetails:o,isLoading:r},`${u}`))]}),s&&t.jsx(d,{justifyContent:"center",display:"flex",padding:"spacing-sm",children:t.jsx(Xe,{size:"medium",variant:"primary"})}),(n==null?void 0:n.isVisible)&&t.jsx(d,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:L`
            z-index: 99999;
          `,children:t.jsx(ui,{type:gi.MODAL,showConnectModal:!0,onClose:()=>l({isVisible:!1,channel_id:null}),description:"Unlock your profile to proceed."})})]})},q=e=>Qe()==="prod"&&(e==null?void 0:e.category)&&(e==null?void 0:e.category)!=p,W=(e,i)=>{if(q(i)){const r=e.map(s=>s.channel);return Object.keys(Z).filter(s=>!r.includes(s)&&!E.includes(s)&&Z[s]===i.category)}return[]},U=()=>{var w,k;const e=H(P.allowedNetworks),{filters:i,setFilter:r}=oe({initialChain:e[0].value,initialCategory:p}),s=(w=e.find(v=>v.value===i.chain))==null?void 0:w.label.includes("Ethereum"),{data:a,isLoading:c,fetchNextPage:n,isFetchingNextPage:l,hasNextPage:o}=ii({pageSize:21,order:ee.ChannelListOrderType.DESCENDING,sort:ee.ChannelListSortType.SUBSCRIBER,chain:s?"":i.chain,tag:i.category===p?"":i.category}),{data:u,isLoading:g,fetchNextPage:x,isFetchingNextPage:_,hasNextPage:j}=le({pageSize:21,query:i.search,chain:s?"":i.chain,tag:i.category===p?"":i.category}),b=c||g?Array(9).fill(0):((k=i.search?u:a)==null?void 0:k.pages.flatMap(v=>v.channels).filter(v=>!E.includes(v.channel)))||[],S=W(b,i),M=i.search?!_&&j:!l&&o,y=c||g;return t.jsx(d,{display:"flex",width:"-webkit-fill-available",overflow:"scroll",height:"100%",children:t.jsxs(d,{display:"flex",flexDirection:"column",width:"100%",gap:{initial:"spacing-md",ml:"spacing-lg"},children:[t.jsxs(d,{display:"flex",flexDirection:"column",gap:"spacing-sm",padding:{initial:"spacing-md spacing-md spacing-none spacing-md",ml:"spacing-sm spacing-sm spacing-none spacing-sm"},children:[t.jsx(T,{filters:i,setFilter:r}),t.jsx(I,{filters:i,setFilter:r})]}),!b.length&&!S.length&&!y?t.jsxs(d,{display:"flex",gap:"spacing-xs",alignItems:"center",flexDirection:"column",justifyContent:"center",height:"100%",children:[t.jsx(ie,{size:48,color:"icon-tertiary"}),t.jsx(Ye,{variant:"h5-bold",children:"No channels to display"})]}):t.jsx(B,{channels:b,hasMoreData:M,suggestedChannels:S,isLoading:y,isLoadingNextPage:l||_,loadMore:i.search?x:n})]})})},ae=()=>t.jsx(fi,{variant:"verticalStretch",children:t.jsx(U,{})})});export{yi as __tla,ae as default};
