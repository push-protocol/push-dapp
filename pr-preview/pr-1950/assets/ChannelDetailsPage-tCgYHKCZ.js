import{fh as K,fk as T,gJ as F,gK as V,d_ as y,e1 as n,eq as b,e2 as i,gL as q,dY as E,em as f,eo as M,ep as J,gM as O,ek as x,ej as j,gN as $,dZ as w,ee as B,e0 as v,gO as H,gv as Q,er as U,gP as z,gQ as R,es as W,gR as Y,gx as Z,gS as G,gT as X,__tla as ee}from"./index-DeR_IPDz.js";import{u as ne,__tla as ie}from"./useGetChannelsList-wLlicx8m.js";import{u as ae,S as se,U as te,N as le,V as re,T as ce,__tla as oe}from"./VerifiedChannelTooltipContent-B7G48Ygy.js";import{C as de,__tla as he}from"./Copy-Da0Gwqn0.js";import{I as xe,__tla as ge}from"./InfiniteScroll-CSmP2ImQ.js";import{C as pe,__tla as me}from"./ContentLayout--S20wwbW.js";import{__tla as ue}from"./useMutation-DsapgMDy.js";import{__tla as fe}from"./OptOut-BwI0U2z0.js";import{__tla as je}from"./PushLogo-DR-FM71e.js";let A,ye=Promise.all([(()=>{try{return ee}catch{}})(),(()=>{try{return ie}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return je}catch{}})()]).then(async()=>{let S,C,k,L,_,D,I,N,P;S=e=>e==null?void 0:e.notifications,C=({userPushSDKInstance:e,address:r,limit:c,page:l})=>e.channel.notifications(r,{page:l,limit:c}).then(S),k=(e,r,c)=>{const{userPushSDKInstance:l}=K(d=>d.user);return T({queryKey:[F,e],queryFn:()=>C({userPushSDKInstance:l,address:e,page:r,limit:c}),enabled:e!==V})},L=({tooltipTitle:e,content:r})=>{const[c,l]=y.useState(!1);return n.jsx(b,{title:e,children:n.jsx(i,{cursor:"pointer",display:"flex",onClick:()=>q(r),onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:n.jsx(de,{color:c?"icon-primary":"icon-tertiary",size:12})})})},_=({channel:e})=>{var a;const{wallet:r}=E(),c=!!((a=r==null?void 0:r.accounts)!=null&&a.length),{data:l,refetch:d,isLoading:o}=ae(e==null?void 0:e.channel,{enabled:c}),s=l&&(l==null?void 0:l.length),t=()=>{d()};return n.jsxs(f,{isLoading:o,children:[e&&!s&&n.jsx(se,{channelDetails:e,onSuccess:t,children:n.jsx(M,{variant:"tertiary",size:"small",block:!0,children:"Subscribe"})}),e&&!!s&&n.jsx(te,{channelDetail:e,onSuccess:t,userSetting:JSON.parse(l[0].user_settings),children:n.jsx(M,{variant:"secondary",size:"small",block:!0,leadingIcon:n.jsx(le,{}),trailingIcon:n.jsx(J,{}),children:"Subscribed"})})]})},D=({channelAddress:e})=>{const{mode:r}=O(),{data:c,isLoading:l,isSuccess:d}=k(e,1,20),o=l?Array(10).fill(0):c;return n.jsxs(i,{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"scroll",customScrollbar:!0,gap:"spacing-sm",children:[n.jsx(i,{padding:{ml:"spacing-none spacing-sm"},children:n.jsx(x,{color:"text-primary",variant:"h4-semibold",children:"Recent Notifications"})}),n.jsxs(i,{display:"flex",width:"-webkit-fill-available",height:"100%",flexDirection:"column",gap:"spacing-sm",padding:{ml:"spacing-none spacing-xxs",initial:"spacing-none spacing-xxs spacing-none spacing-none"},margin:{ml:"spacing-none spacing-xxs",initial:"spacing-none spacing-sm spacing-none spacing-none"},overflow:"scroll",justifyContent:"flex-start",customScrollbar:!0,children:[d&&!l&&!(o!=null&&o.length)&&n.jsx(i,{display:"flex",alignSelf:"center",width:"fit-content",borderRadius:"radius-xl",backgroundColor:"surface-secondary",padding:"spacing-xxs spacing-sm",children:n.jsxs(x,{color:"text-primary",variant:"bs-regular",children:[" ","No notifications to show yet"]})}),o==null?void 0:o.map(s=>{var a,m,h,u;const t=(a=s==null?void 0:s.message)==null?void 0:a.payload;return n.jsx(f,{isLoading:l,children:n.jsx(i,{css:j`
                  & > div {
                    margin: 0;
                  }
                `,children:n.jsx($,{notificationTitle:t==null?void 0:t.title,notificationBody:t==null?void 0:t.body,cta:t==null?void 0:t.cta,image:t==null?void 0:t.embed,app:(m=s==null?void 0:s.channel)==null?void 0:m.name,icon:(h=s==null?void 0:s.channel)==null?void 0:h.icon,url:(u=s==null?void 0:s.channel)==null?void 0:u.url,chainName:s==null?void 0:s.source,theme:r})},s.payload_id)})})]})]})},I=({channel:e,isLoading:r})=>{var a,m,h,u;const[c,l]=y.useState(!1),d=w(),o=((e==null?void 0:e.info)||"").length>250,s=o?c?(e==null?void 0:e.info)||"":((e==null?void 0:e.info)||"").substring(0,250):(e==null?void 0:e.info)||"";let t=[B.coreContractChain,...((a=e==null?void 0:e.aliases)==null?void 0:a.filter(g=>g.is_alias_verified).map(g=>parseInt(g.alias_blockchain_id)))||[]];return n.jsxs(i,{display:"flex",flexDirection:"column",width:"100%",height:"100%",gap:"spacing-xl",children:[n.jsxs(i,{display:"flex",flexDirection:"column",gap:"spacing-sm",width:"-webkit-fill-available",padding:{initial:"spacing-none spacing-md spacing-none spacing-none",ml:"spacing-sm"},children:[n.jsxs(i,{display:"flex",flexDirection:"column",gap:"spacing-xs",width:"100%",children:[n.jsx(i,{onClick:()=>d(v.Channels),cursor:"pointer",children:n.jsx(H,{size:24,color:"icon-primary"})}),n.jsxs(i,{display:"flex",justifyContent:"space-between",width:"100%",children:[n.jsxs(i,{display:"flex",gap:{initial:"spacing-sm",ml:"spacing-xs"},alignItems:{initial:"center",ml:"flex-start"},children:[n.jsxs(f,{isLoading:r,children:[n.jsx(i,{width:"90px",height:"90px",borderRadius:"radius-md",overflow:"hidden",border:"border-sm solid stroke-secondary",display:{initial:"flex",ml:"none"},css:j`
                    flex-shrink: 0;
                  `,children:n.jsx("img",{width:"100%",height:"100%",src:(e==null?void 0:e.iconV2)||"",alt:(e==null?void 0:e.name)||""})}),n.jsx(i,{width:"52px",height:"52px",borderRadius:"radius-sm",border:"border-sm solid stroke-secondary",display:{initial:"none",ml:"flex"},overflow:"hidden",children:n.jsx("img",{width:"100%",height:"100%",src:(e==null?void 0:e.iconV2)||"",alt:(e==null?void 0:e.name)||""})})]}),n.jsxs(i,{display:"flex",flexDirection:"column",gap:"spacing-xs",children:[n.jsx(f,{isLoading:r,children:n.jsxs(i,{display:"flex",flexDirection:"column",children:[n.jsxs(i,{display:"flex",alignItems:"center",gap:"spacing-xxxs",children:[n.jsx(x,{color:"text-primary",variant:"h4-semibold",children:(e==null?void 0:e.name)||""}),!!(e!=null&&e.verified_status)&&n.jsx(b,{overlay:n.jsx(re,{}),children:n.jsx(i,{cursor:"pointer",display:"flex",children:n.jsx(ce,{color:"icon-tertiary",size:18})})}),t.length>0&&n.jsx(i,{display:"flex",alignItems:"center",margin:"spacing-none spacing-none spacing-none spacing-xxxs",children:t.map(g=>{const p=W[g];return p?n.jsx(i,{display:"flex",css:j`
                                  margin-left: -4px;
                                `,children:n.jsx(p,{width:18,height:18},g)}):null})})]}),n.jsxs(i,{display:"flex",gap:"spacing-xxxs",alignItems:"center",children:[n.jsx(x,{color:"text-tertiary",variant:"bs-regular",children:Q((e==null?void 0:e.channel)||"",10,10)||""}),n.jsx(L,{tooltipTitle:"Copy Address",content:(e==null?void 0:e.channel)||""})]})]})}),n.jsx(f,{isLoading:r,children:n.jsxs(i,{display:"flex",gap:"spacing-xs",css:j`
                      flex-wrap: wrap;
                    `,alignItems:"center",children:[n.jsxs(x,{color:"text-tertiary-inverse",variant:"c-regular",children:[U(e==null?void 0:e.subscriber_count)," subscribers"]}),((m=e==null?void 0:e.tags)==null?void 0:m[0])&&n.jsx(z,{label:e.tags[0],variant:"info"}),!((h=e==null?void 0:e.tags)!=null&&h[0])&&((u=R)==null?void 0:u[e==null?void 0:e.channel])&&n.jsx(b,{title:"Suggested by Push",children:n.jsx(i,{cursor:"pointer",children:n.jsx(z,{label:R[e.channel]})})})]})})]})]}),n.jsx(i,{display:{initial:"inline",ml:"none"},children:n.jsx(_,{channel:e})})]})]}),n.jsx(f,{isLoading:r,children:n.jsxs(i,{children:[n.jsx(x,{display:{initial:"inline",ml:"none"},variant:"bs-regular",color:"text-tertiary",as:"span",children:s}),n.jsx(x,{display:{initial:"none",ml:"inline"},variant:"bs-regular",color:"text-tertiary",as:"span",children:s}),o&&n.jsxs(i,{as:"span",cursor:"pointer",onClick:()=>l(!c),children:[n.jsxs(x,{display:{initial:"inline",ml:"none"},color:"text-brand-medium",as:"span",children:[" ",`Show ${c?"Less":"More"}`]}),n.jsxs(x,{display:{initial:"none",ml:"inline"},color:"text-brand-medium",as:"span",children:[" ",`Show ${c?"Less":"More"}`]})]})]})}),n.jsx(i,{display:{initial:"none",ml:"block"},children:n.jsx(_,{channel:e})})]}),n.jsx(D,{channelAddress:e==null?void 0:e.channel})]})},N=({channels:e,fetchNextPage:r,setSelectedChannelId:c,isLoading:l,hasMoreData:d,isFetchingNextPage:o})=>{const s=w(),t=a=>{c(a==null?void 0:a.channel),s(v.ChannelDetails(a==null?void 0:a.channel))};return n.jsxs(i,{display:{initial:"flex",ml:"none"},width:"fit-content",justifyContent:"flex-start",overflow:"scroll",customScrollbar:!0,height:"100%",maxHeight:"100%",padding:"spacing-none spacing-sm spacing-none spacing-none",flexDirection:"column",children:[n.jsx(xe,{pageStart:1,loadMore:()=>{r()},hasMore:d,useWindow:!1,threshold:150,children:n.jsx(i,{display:"flex",flexDirection:"column",gap:"spacing-md",children:e==null?void 0:e.map(a=>n.jsx(f,{isLoading:l,children:n.jsx(i,{width:"46px",height:"46px",overflow:"hidden",borderRadius:"radius-sm",cursor:"pointer",onClick:()=>t(a),css:j`
                  flex-shrink: 0;
                `,children:n.jsx("img",{width:"100%",height:"100%",src:a==null?void 0:a.iconV2,alt:a==null?void 0:a.name})},a==null?void 0:a.channel)}))})}),o&&n.jsx(i,{justifyContent:"center",display:"flex",padding:"spacing-sm",children:n.jsx(Y,{size:"small",variant:"primary"})})]})},P=()=>{const{id:e}=Z(),r=w(),[c,l]=y.useState(e||""),{data:d,fetchNextPage:o,hasNextPage:s,isLoading:t,isFetchingNextPage:a}=ne({pageSize:15}),{data:m}=G(e||""),h=t?Array(10).fill(0):(d==null?void 0:d.pages.flatMap(p=>p.channels))||[],u=!a&&s,g=(h==null?void 0:h.find(p=>(p==null?void 0:p.channel)===c))||m;return y.useEffect(()=>{X.isAddress(e||"")||r(v.Channels)},[e]),(h==null?void 0:h.length)&&n.jsxs(i,{width:"-webkit-fill-available",padding:{initial:"spacing-md spacing-none spacing-none spacing-sm",ml:"spacing-none"},display:"flex",height:"100%",justifyContent:"flex-start",borderRadius:"radius-md radius-md radius-none radius-none",gap:"spacing-md",border:"border-sm solid stroke-secondary",backgroundColor:"surface-primary",children:[n.jsx(N,{channels:h,fetchNextPage:o,hasMoreData:u,isLoading:t,setSelectedChannelId:l,isFetchingNextPage:a}),n.jsx(I,{channel:g,isLoading:t})]})},A=()=>n.jsx(pe,{variant:"verticalStretch",children:n.jsx(P,{})})});export{ye as __tla,A as default};
