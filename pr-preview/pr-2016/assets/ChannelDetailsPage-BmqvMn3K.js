import{eO as R,fc as V,gr as F,gs as K,dV as q,d_ as n,ej as f,el as T,em as N,en as $,gt as O,d$ as i,e2 as x,e3 as j,gu as W,dX as b,dW as _,ed as B,dZ as w,gv as E,eo as P,gh as H,ep as J,gw as z,gx as A,eq as U,gy as X,gk as Z,gz as G,gA as Q,__tla as Y}from"./index-CaxTSMQW.js";import{u as ss,__tla as ns}from"./useGetChannelsList-BH7WzU4u.js";import{u as is,U as as,N as es,V as rs,T as ls,__tla as ts}from"./VerifiedChannelTooltipContent-DqY_pBc-.js";import{C as cs,__tla as os}from"./CopyButton-Mi0k1jnt.js";import{I as ds,__tla as hs}from"./InfiniteScroll-DIPn4VI6.js";import{C as xs,__tla as gs}from"./ContentLayout-DaTcSsAz.js";import{__tla as ps}from"./PushLogo-aCZbbR4i.js";import{__tla as ms}from"./Copy-DvDPtg__.js";let M,us=Promise.all([(()=>{try{return Y}catch{}})(),(()=>{try{return ns}catch{}})(),(()=>{try{return ts}catch{}})(),(()=>{try{return os}catch{}})(),(()=>{try{return hs}catch{}})(),(()=>{try{return gs}catch{}})(),(()=>{try{return ps}catch{}})(),(()=>{try{return ms}catch{}})()]).then(async()=>{let v,S,C,y,k,D,L,I;v=s=>s==null?void 0:s.notifications,S=({userPushSDKInstance:s,address:t,limit:c,page:l})=>s.channel.notifications(t,{page:l,limit:c}).then(v),C=(s,t,c)=>{const{userPushSDKInstance:l}=R(d=>d.user);return V({queryKey:[F,s],queryFn:()=>S({userPushSDKInstance:l,address:s,page:t,limit:c}),enabled:s!==K})},y=({channel:s})=>{var a;const{wallet:t}=q(),c=!!((a=t==null?void 0:t.accounts)!=null&&a.length),{data:l,refetch:d,isLoading:o}=is(s==null?void 0:s.channel,{enabled:c}),e=l&&(l==null?void 0:l.length),r=()=>{d()};return n.jsxs(f,{isLoading:o,children:[s&&!e&&n.jsx(T,{channelDetails:s,onSuccess:r,children:n.jsx(N,{variant:"tertiary",size:"small",block:!0,children:"Subscribe"})}),s&&!!e&&n.jsx(as,{channelDetail:s,onSuccess:r,userSetting:JSON.parse(l[0].user_settings),children:n.jsx(N,{variant:"secondary",size:"small",block:!0,leadingIcon:n.jsx(es,{}),trailingIcon:n.jsx($,{}),children:"Subscribed"})})]})},k=({channelAddress:s})=>{const{mode:t}=O(),{data:c,isLoading:l,isSuccess:d}=C(s,1,20),o=l?Array(10).fill(0):c;return n.jsxs(i,{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"scroll",customScrollbar:!0,gap:"spacing-sm",children:[n.jsx(i,{padding:{ml:"spacing-none spacing-sm"},children:n.jsx(x,{color:"text-primary",variant:"h4-semibold",children:"Recent Notifications"})}),n.jsxs(i,{display:"flex",width:"-webkit-fill-available",height:"100%",flexDirection:"column",gap:"spacing-sm",padding:{ml:"spacing-none spacing-xxs",initial:"spacing-none spacing-xxs spacing-none spacing-none"},margin:{ml:"spacing-none spacing-xxs",initial:"spacing-none spacing-sm spacing-none spacing-none"},overflow:"scroll",justifyContent:"flex-start",customScrollbar:!0,children:[d&&!l&&!(o!=null&&o.length)&&n.jsx(i,{display:"flex",alignSelf:"center",width:"fit-content",borderRadius:"radius-xl",backgroundColor:"surface-secondary",padding:"spacing-xxs spacing-sm",children:n.jsxs(x,{color:"text-primary",variant:"bs-regular",children:[" ","No notifications to show yet"]})}),o==null?void 0:o.map(e=>{var a,m,h,u;const r=(a=e==null?void 0:e.message)==null?void 0:a.payload;return n.jsx(f,{isLoading:l,children:n.jsx(i,{css:j`
                  & > div {
                    margin: 0;
                  }
                `,children:n.jsx(W,{notificationTitle:r==null?void 0:r.title,notificationBody:r==null?void 0:r.body,cta:r==null?void 0:r.cta,image:r==null?void 0:r.embed,app:(m=e==null?void 0:e.channel)==null?void 0:m.name,icon:(h=e==null?void 0:e.channel)==null?void 0:h.icon,url:(u=e==null?void 0:e.channel)==null?void 0:u.url,chainName:e==null?void 0:e.source,theme:t})},e.payload_id)})})]})]})},D=({channel:s,isLoading:t})=>{var a,m,h,u;const[c,l]=b.useState(!1),d=_(),o=((s==null?void 0:s.info)||"").length>250,e=o?c?(s==null?void 0:s.info)||"":((s==null?void 0:s.info)||"").substring(0,250):(s==null?void 0:s.info)||"";let r=[B.coreContractChain,...((a=s==null?void 0:s.aliases)==null?void 0:a.filter(g=>g.is_alias_verified).map(g=>parseInt(g.alias_blockchain_id)))||[]];return n.jsxs(i,{display:"flex",flexDirection:"column",width:"100%",height:"100%",gap:"spacing-xl",children:[n.jsxs(i,{display:"flex",flexDirection:"column",gap:"spacing-sm",width:"-webkit-fill-available",padding:{initial:"spacing-none spacing-md spacing-none spacing-none",ml:"spacing-sm"},children:[n.jsxs(i,{display:"flex",flexDirection:"column",gap:"spacing-xs",width:"100%",children:[n.jsx(i,{onClick:()=>d(w.Channels),cursor:"pointer",children:n.jsx(E,{size:24,color:"icon-primary"})}),n.jsxs(i,{display:"flex",justifyContent:"space-between",width:"100%",children:[n.jsxs(i,{display:"flex",gap:{initial:"spacing-sm",ml:"spacing-xs"},alignItems:{initial:"center",ml:"flex-start"},children:[n.jsxs(f,{isLoading:t,children:[n.jsx(i,{width:"90px",height:"90px",borderRadius:"radius-md",overflow:"hidden",border:"border-sm solid stroke-secondary",display:{initial:"flex",ml:"none"},css:j`
                    flex-shrink: 0;
                  `,children:n.jsx("img",{width:"100%",height:"100%",src:(s==null?void 0:s.iconV2)||"",alt:(s==null?void 0:s.name)||""})}),n.jsx(i,{width:"52px",height:"52px",borderRadius:"radius-sm",border:"border-sm solid stroke-secondary",display:{initial:"none",ml:"flex"},overflow:"hidden",children:n.jsx("img",{width:"100%",height:"100%",src:(s==null?void 0:s.iconV2)||"",alt:(s==null?void 0:s.name)||""})})]}),n.jsxs(i,{display:"flex",flexDirection:"column",gap:"spacing-xs",children:[n.jsx(f,{isLoading:t,children:n.jsxs(i,{display:"flex",flexDirection:"column",children:[n.jsxs(i,{display:"flex",alignItems:"center",gap:"spacing-xxxs",children:[n.jsx(x,{color:"text-primary",variant:"h4-semibold",children:(s==null?void 0:s.name)||""}),!!(s!=null&&s.verified_status)&&n.jsx(P,{overlay:n.jsx(rs,{}),children:n.jsx(i,{cursor:"pointer",display:"flex",children:n.jsx(ls,{color:"icon-tertiary",size:18})})}),r.length>0&&n.jsx(i,{display:"flex",alignItems:"center",margin:"spacing-none spacing-none spacing-none spacing-xxxs",children:r.map(g=>{const p=U[g];return p?n.jsx(i,{display:"flex",css:j`
                                  margin-left: -4px;
                                `,children:n.jsx(p,{width:18,height:18},g)}):null})})]}),n.jsxs(i,{display:"flex",gap:"spacing-xxxs",alignItems:"center",children:[n.jsx(x,{color:"text-tertiary",variant:"bs-regular",children:H((s==null?void 0:s.channel)||"",10,10)||""}),n.jsx(cs,{tooltipTitle:"Copy Address",content:(s==null?void 0:s.channel)||""})]})]})}),n.jsx(f,{isLoading:t,children:n.jsxs(i,{display:"flex",gap:"spacing-xs",css:j`
                      flex-wrap: wrap;
                    `,alignItems:"center",children:[n.jsxs(x,{color:"text-tertiary-inverse",variant:"c-regular",children:[J(s==null?void 0:s.subscriber_count)," subscribers"]}),((m=s==null?void 0:s.tags)==null?void 0:m[0])&&n.jsx(z,{label:s.tags[0],variant:"info"}),!((h=s==null?void 0:s.tags)!=null&&h[0])&&((u=A)==null?void 0:u[s==null?void 0:s.channel])&&n.jsx(P,{title:"Suggested by Push",children:n.jsx(i,{cursor:"pointer",children:n.jsx(z,{label:A[s.channel]})})})]})})]})]}),n.jsx(i,{display:{initial:"inline",ml:"none"},children:n.jsx(y,{channel:s})})]})]}),n.jsx(f,{isLoading:t,children:n.jsxs(i,{children:[n.jsx(x,{display:{initial:"inline",ml:"none"},variant:"bs-regular",color:"text-tertiary",as:"span",children:e}),n.jsx(x,{display:{initial:"none",ml:"inline"},variant:"bs-regular",color:"text-tertiary",as:"span",children:e}),o&&n.jsxs(i,{as:"span",cursor:"pointer",onClick:()=>l(!c),children:[n.jsxs(x,{display:{initial:"inline",ml:"none"},color:"text-brand-medium",as:"span",children:[" ",`Show ${c?"Less":"More"}`]}),n.jsxs(x,{display:{initial:"none",ml:"inline"},color:"text-brand-medium",as:"span",children:[" ",`Show ${c?"Less":"More"}`]})]})]})}),n.jsx(i,{display:{initial:"none",ml:"block"},children:n.jsx(y,{channel:s})})]}),n.jsx(k,{channelAddress:s==null?void 0:s.channel})]})},L=({channels:s,fetchNextPage:t,setSelectedChannelId:c,isLoading:l,hasMoreData:d,isFetchingNextPage:o})=>{const e=_(),r=a=>{c(a==null?void 0:a.channel),e(w.ChannelDetails(a==null?void 0:a.channel))};return n.jsxs(i,{display:{initial:"flex",ml:"none"},width:"fit-content",justifyContent:"flex-start",overflow:"scroll",customScrollbar:!0,height:"100%",maxHeight:"100%",padding:"spacing-none spacing-sm spacing-none spacing-none",flexDirection:"column",children:[n.jsx(ds,{pageStart:1,loadMore:()=>{t()},hasMore:d,useWindow:!1,threshold:150,children:n.jsx(i,{display:"flex",flexDirection:"column",gap:"spacing-md",children:s==null?void 0:s.map(a=>n.jsx(f,{isLoading:l,children:n.jsx(i,{width:"46px",height:"46px",overflow:"hidden",borderRadius:"radius-sm",cursor:"pointer",onClick:()=>r(a),css:j`
                  flex-shrink: 0;
                `,children:n.jsx("img",{width:"100%",height:"100%",src:a==null?void 0:a.iconV2,alt:a==null?void 0:a.name})},a==null?void 0:a.channel)}))})}),o&&n.jsx(i,{justifyContent:"center",display:"flex",padding:"spacing-sm",children:n.jsx(X,{size:"small",variant:"primary"})})]})},I=()=>{const{id:s}=Z(),t=_(),[c,l]=b.useState(s||""),{data:d,fetchNextPage:o,hasNextPage:e,isLoading:r,isFetchingNextPage:a}=ss({pageSize:15}),{data:m}=G(s||""),h=r?Array(10).fill(0):(d==null?void 0:d.pages.flatMap(p=>p.channels))||[],u=!a&&e,g=(h==null?void 0:h.find(p=>(p==null?void 0:p.channel)===c))||m;return b.useEffect(()=>{Q.isAddress(s||"")||t(w.Channels)},[s]),(h==null?void 0:h.length)&&n.jsxs(i,{width:"-webkit-fill-available",padding:{initial:"spacing-md spacing-none spacing-none spacing-sm",ml:"spacing-none"},display:"flex",height:"100%",justifyContent:"flex-start",borderRadius:"radius-md radius-md radius-none radius-none",gap:"spacing-md",border:"border-sm solid stroke-secondary",backgroundColor:"surface-primary",children:[n.jsx(L,{channels:h,fetchNextPage:o,hasMoreData:u,isLoading:r,setSelectedChannelId:l,isFetchingNextPage:a}),n.jsx(D,{channel:g,isLoading:r})]})},M=()=>n.jsx(xs,{variant:"verticalStretch",children:n.jsx(I,{})})});export{us as __tla,M as default};
