import{gJ as S,cs as u,jZ as xe,gI as ge,cv as e,cV as me,hK as j,j_ as v,j$ as U,k0 as fe,k1 as ye,hL as we,k2 as je,k3 as C,k4 as ve,k5 as P,h3 as be,cw as l,cU as x,iK as E,gn as T,ha as ke,cT as B,hA as _,k6 as Se,hB as J,cx as L,cy as M,cS as _e,k7 as Ie,k8 as Ce,__tla as Pe}from"./index-OH6gUJzS.js";import{c as Ee,a as V,u as Te,__tla as Le}from"./index.esm-DoXab1jn.js";import{P as Me,__tla as Oe}from"./PushLogo-BFghMDJ1.js";import{u as O,__tla as Re}from"./useMutation-C-0B1FqK.js";import{u as R,L as N,I as q,__tla as Ne}from"./LeaderboardNullState-V2mpeh-R.js";import{C as qe,__tla as ze}from"./ContentLayout-Dfrr2GVL.js";let G,Fe=Promise.all([(()=>{try{return Pe}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Oe}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return ze}catch{}})()]).then(async()=>{function z(t,r){return t.findAll(r.filters).map(a=>r.select?r.select(a):a.state)}function Q(t={},r){const a=S().getMutationCache(),n=u.useRef(t),i=u.useRef(null);return i.current||(i.current=z(a,t)),u.useEffect(()=>{n.current=t}),u.useSyncExternalStore(u.useCallback(o=>a.subscribe(()=>{const s=xe(i.current,z(a,n.current));i.current!==s&&(i.current=s,ge.schedule(o))}),[a]),()=>i.current,()=>i.current)}const Z=t=>{const{svgProps:r,...a}=t;return e.jsx(me,{componentName:"Search",icon:e.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[e.jsx("circle",{cx:"15.12",cy:"14.25",r:"9",stroke:"currentColor","stroke-width":"2"}),e.jsx("path",{d:"M21.62 20.75L27.62 26.75",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})]}),...a})},X=t=>t,Y=t=>t,ee=t=>({id:t.data.id,followersCount:t.data.public_metrics.followers_count,followingCount:t.data.public_metrics.following_count,likeCount:t.data.public_metrics.like_count,listedCount:t.data.public_metrics.listed_count,name:t.data.name,tweetCount:t.data.public_metrics.tweet_count,username:t.data.username}),te=t=>j({method:"POST",url:`${v()}/auth/login`,data:{username:t.username,password:t.password},headers:{"Content-Type":"application/json"}}).then(r=>X(r.data)),re=({activityId:t,token:r})=>j({method:"POST",url:`${v()}/activities/approved`,data:{activities:[{activityId:t}]},headers:{"Content-Type":"application/json",Authorization:r}}).then(a=>a.data),I=({page:t,status:r,pageSize:a,token:n,wallet:i,twitter:o,activityTypeId:s})=>j({method:"GET",url:`${v()}/activities/list`,params:{status:r,page:t,pageSize:a,wallet:i,twitter:o,activityTypeId:s},headers:{"Content-Type":"application/json",Authorization:n}}).then(c=>Y(c.data)),ae=({twitterHandle:t,token:r})=>j({method:"GET",url:`${v()}/twitter/user/${t}`,headers:{"Content-Type":"application/json",Authorization:r}}).then(a=>ee(a.data)),ie=({activityId:t,token:r})=>j({method:"POST",url:`${v()}/activities/rejected`,data:{activities:[{activityId:t}]},headers:{"Content-Type":"application/json",Authorization:r}}).then(a=>a.data),ne=()=>O({mutationKey:[U],mutationFn:te}),se=()=>O({mutationFn:re,mutationKey:[fe]}),oe=()=>O({mutationFn:ie,mutationKey:[ye]}),le=(t,r)=>we({queryKey:[je,t],queryFn:()=>ae({twitterHandle:t,token:r}),staleTime:1/0,retry:!1,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1,enabled:!!r&&!!t}),y=()=>{var t,r;return(r=(t=Q({filters:{mutationKey:[U]},select:a=>a.state.data}))==null?void 0:t[0])==null?void 0:r.token},ce=({status:t,pageSize:r=20,token:a,twitter:n,wallet:i,activityTypeId:o})=>R({queryKey:[C,`${n}-${i}`],initialPageParam:1,queryFn:({pageParam:s})=>I({status:t,page:s,pageSize:r,token:a,twitter:n,wallet:i,activityTypeId:o}),getNextPageParam:({page:s,total:c})=>s>=c?null:s+1,enabled:!!a,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1}),de=({status:t,pageSize:r=20,token:a,twitter:n,wallet:i,activityTypeId:o})=>R({queryKey:[ve,`${n}-${i}`],initialPageParam:1,queryFn:({pageParam:s})=>I({status:t,page:s,pageSize:r,token:a,twitter:n,wallet:i,activityTypeId:o}),getNextPageParam:({page:s,total:c})=>s>=c?null:s+1,enabled:!!a,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1}),ue=({status:t,pageSize:r=20,token:a,twitter:n,wallet:i,activityTypeId:o})=>R({queryKey:[P,`${n}-${i}`],initialPageParam:1,queryFn:({pageParam:s})=>I({status:t,page:s,pageSize:r,token:a,twitter:n,wallet:i,activityTypeId:o}),getNextPageParam:({page:s,total:c})=>s>=c?null:s+1,enabled:!!a,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1});function he(t,r){var a=u.useRef(!1),n=u.useRef(),i=u.useRef(t),o=u.useCallback(function(){return a.current},[]),s=u.useCallback(function(){a.current=!1,n.current&&clearTimeout(n.current),n.current=setTimeout(function(){a.current=!0,i.current()},r)},[r]),c=u.useCallback(function(){a.current=null,n.current&&clearTimeout(n.current)},[]);return u.useEffect(function(){i.current=t},[t]),u.useEffect(function(){return s(),c},[r]),[o,c,s]}function pe(t,r,a){a===void 0&&(a=[]);var n=he(t,r),i=n[0],o=n[1],s=n[2];return u.useEffect(s,a),[i,o]}let F,b,A,k,D,$,K,W,H;F=({handleSetActiveView:t})=>{const{mutate:r,isPending:a}=ne(),n=Ee().shape({username:V().required("Username is required"),password:V().required("Password is required")}),i=Te({initialValues:{username:"",password:""},validationSchema:n,onSubmit:c=>{s({...c})}}),o=be(),s=({username:c,password:h})=>{r({username:c,password:h},{onSuccess:p=>{t("list")},onError:p=>{p.name&&o.showMessageToast({toastTitle:"Error",toastMessage:p.response.data.error,toastType:"ERROR",getToastIcon:f=>e.jsx(ke,{size:f,color:"red"})})}})};return e.jsxs(l,{alignItems:"center",display:"flex",flexDirection:"column",gap:"spacing-xxl",children:[e.jsxs(l,{display:"flex",gap:"spacing-xxxs",alignItems:"center",children:[e.jsx(Me,{}),e.jsx(x,{variant:"h2-semibold",color:"text-primary",children:"Push"})]}),e.jsxs(l,{width:"374px",display:"flex",alignItems:"center",padding:"spacing-md",flexDirection:"column",gap:"spacing-md",backgroundColor:"surface-primary",borderRadius:"radius-md",children:[e.jsx(x,{variant:"h4-bold",color:"text-primary",children:"Points Vault Login"}),e.jsx(l,{width:"100%",children:e.jsx("form",{onSubmit:i.handleSubmit,children:e.jsxs(l,{display:"flex",alignItems:"center",flexDirection:"column",gap:"spacing-xs",width:"100%",children:[e.jsx(l,{width:"100%",children:e.jsx(E,{placeholder:"User",value:i.values.username,disabled:a,onChange:i.handleChange("username"),error:i.touched.username&&!!i.errors.username,errorMessage:i.touched.username?i.errors.username:""})}),e.jsx(l,{width:"100%",children:e.jsx(E,{type:"password",placeholder:"Password",disabled:a,value:i.values.password,onChange:i.handleChange("password"),error:i.touched.password&&!!i.errors.password,errorMessage:i.touched.password?i.errors.password:""})}),e.jsx(l,{margin:"spacing-md spacing-none spacing-none spacing-none",children:e.jsx(T,{disabled:a,children:a?"Authenticating":"Login"})})]})})})]})]})},b=()=>e.jsxs(l,{display:"flex",justifyContent:"space-between",children:[e.jsx(l,{width:"345px",children:e.jsx(x,{variant:"c-bold",color:"text-tertiary",children:"USER"})}),e.jsx(l,{width:"345px",children:e.jsx(x,{variant:"c-bold",color:"text-tertiary",children:"TWITTER LINK"})}),e.jsx(l,{width:"42px",justifyContent:"center",display:"flex",children:e.jsx(x,{variant:"c-bold",color:"text-tertiary",children:"FOLLOWERS"})}),e.jsx(l,{width:"245px",display:"flex",justifyContent:"center",children:e.jsx(x,{variant:"c-bold",color:"text-tertiary",children:"ACTION"})})]}),A=({status:t,item:r,refetch:a})=>{const n=y(),{mutate:i,isPending:o}=oe(),{mutate:s,isPending:c}=se(),h=async()=>{i({activityId:r.activityId,currentStatus:t,token:n},{onSuccess:()=>a("REJECTED")})},p=async()=>{s({activityId:r.activityId,currentStatus:t,token:n},{onSuccess:()=>a("COMPLETED")})};return e.jsxs(l,{width:"208px",minWidth:"208px",minHeight:"22px",display:"flex",justifyContent:"center",gap:"spacing-xxs",children:[t!=="COMPLETED"&&e.jsx(T,{variant:"outline",size:"extraSmall",disabled:c||o,onClick:p,children:"Approve"}),t!=="REJECTED"&&e.jsx(T,{variant:"dangerSecondary",size:"extraSmall",disabled:c||o,onClick:h,children:"Reject"})]})},k=({isLoading:t,item:r,refetch:a})=>{var o,s,c;const n=y(),{data:i}=le((o=r.data)==null?void 0:o.twitter,n);return e.jsxs(l,{height:"48px",display:"flex",justifyContent:"space-between",alignItems:"center",css:B`
        border-bottom: var(--border-sm) solid var(--stroke-secondary);
      `,children:[e.jsx(_,{isLoading:t,children:e.jsx(l,{display:"flex",alignItems:"center",width:"345px",height:"22px",children:e.jsx(x,{variant:"bs-semibold",color:"text-secondary",children:Se(r.userWallet)})})}),e.jsx(_,{isLoading:t,children:e.jsx(l,{display:"flex",alignItems:"center",width:"345px",children:e.jsx(J,{to:`https://x.com/${(s=r.data)==null?void 0:s.twitter}`,target:"_blank",rel:"noopener noreferrer",children:e.jsxs(x,{color:"text-brand-medium",variant:"bs-semibold",children:["https://x.com/",(c=r.data)==null?void 0:c.twitter]})})})}),e.jsx(_,{isLoading:t,children:e.jsx(l,{display:"flex",alignItems:"center",justifyContent:"center",width:"42px",children:e.jsx(x,{variant:"bs-semibold",color:i!=null&&i.followersCount&&i.followersCount<50?"text-state-danger-bold":"text-primary",children:(i==null?void 0:i.followersCount)??"-"})})}),e.jsx(_,{isLoading:t,children:e.jsx(l,{width:"245px",minHeight:"22px",display:"flex",justifyContent:"center",children:e.jsx(A,{refetch:a,status:r.status,item:r})})})]})},D=({query:t})=>{const r=y(),a=S(),{data:n,fetchNextPage:i,hasNextPage:o,isFetchingNextPage:s,isLoading:c,isError:h,refetch:p}=ce({status:"COMPLETED",token:r,pageSize:20,twitter:t.twitter,wallet:t.wallet,activityTypeId:"follow_push_on_twitter"}),f=!s&&o,g=c?Array(5).fill(0):(n==null?void 0:n.pages.flatMap(d=>d.activities))||[];if(!g.length)return e.jsx(N,{refetchLeaderboard:h?p:void 0,heading:"No Users Found",error:h,subHeading:h?"Please refresh to view the List":""});const w=()=>{p(),a.invalidateQueries({queryKey:[P]})};return e.jsx(l,{gap:"spacing-sm",display:"flex",flexDirection:"column",children:e.jsxs(l,{height:"calc(100vh - 356px)",overflow:"auto",children:[e.jsx(b,{}),e.jsx(q,{pageStart:0,loadMore:()=>i(),hasMore:f,loader:e.jsx(l,{margin:"spacing-xs",children:e.jsx(L,{spinnerSize:24,type:M.SEAMLESS})},"loader-spinner"),useWindow:!1,threshold:150,children:g.map((d,m)=>e.jsx(k,{item:d,isLoading:c,refetch:w},(d==null?void 0:d.activityId)||m))})]})})},$=({query:t})=>{const r=y(),a=S(),{data:n,fetchNextPage:i,hasNextPage:o,isFetchingNextPage:s,isLoading:c,isError:h,refetch:p}=de({status:"PENDING",token:r,pageSize:20,twitter:t.twitter,wallet:t.wallet,activityTypeId:"follow_push_on_twitter"}),f=!s&&o,g=c?Array(5).fill(0):(n==null?void 0:n.pages.flatMap(d=>d.activities))||[];if(!g.length)return e.jsx(N,{refetchLeaderboard:h?p:void 0,heading:"No Users Found",error:h,subHeading:h?"Please refresh to view the List":""});const w=d=>{p();const m=d==="COMPLETED"?C:d==="REJECTED"?P:void 0;m&&a.invalidateQueries({queryKey:[m]})};return e.jsx(l,{gap:"spacing-sm",display:"flex",flexDirection:"column",children:e.jsxs(l,{height:"calc(100vh - 356px)",overflow:"auto",children:[e.jsx(b,{}),e.jsx(q,{pageStart:0,loadMore:()=>i(),hasMore:f,loader:e.jsx(l,{margin:"spacing-xs",children:e.jsx(L,{spinnerSize:24,type:M.SEAMLESS})},"loader-spinner"),useWindow:!1,threshold:150,children:g.map((d,m)=>e.jsx(k,{item:d,isLoading:c,refetch:w},(d==null?void 0:d.activityId)||m))})]})})},K=({query:t})=>{const r=y(),a=S(),{data:n,fetchNextPage:i,hasNextPage:o,isFetchingNextPage:s,isLoading:c,isError:h,refetch:p}=ue({status:"REJECTED",token:r,pageSize:20,twitter:t.twitter,wallet:t.wallet,activityTypeId:"follow_push_on_twitter"}),f=!s&&o,g=c?Array(5).fill(0):(n==null?void 0:n.pages.flatMap(d=>d.activities))||[];if(!g.length)return e.jsx(N,{refetchLeaderboard:h?p:void 0,heading:"No Users Found",error:h,subHeading:h?"Please refresh to view the List":""});const w=()=>{p(),a.invalidateQueries({queryKey:[C]})};return e.jsx(l,{gap:"spacing-sm",display:"flex",flexDirection:"column",children:e.jsxs(l,{height:"calc(100vh - 356px)",overflow:"auto",children:[e.jsx(b,{}),e.jsx(q,{pageStart:0,loadMore:()=>i(),hasMore:f,loader:e.jsx(l,{margin:"spacing-xs",children:e.jsx(L,{spinnerSize:24,type:M.SEAMLESS})},"loader-spinner"),useWindow:!1,threshold:150,children:g.map((d,m)=>e.jsx(k,{item:d,isLoading:c,refetch:w},(d==null?void 0:d.activityId)||m))})]})})},W=()=>{const[t,r]=u.useState(""),[a,n]=u.useState({}),i=u.useCallback(o=>{if(!o)return{};const s=_e(o),c=s?"wallet":"twitter",h=s?`eip155:${o}`:o;return{[c]:h}},[]);return pe(()=>n(i(t)),500,[t]),e.jsxs(l,{backgroundColor:"surface-primary",padding:"spacing-md",borderRadius:"radius-md",children:[e.jsx(x,{variant:"h4-bold",color:"text-primary",children:"Points Vault"}),e.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"spacing-none spacing-none spacing-md spacing-none",children:[e.jsxs(l,{display:"flex",gap:"spacing-xxxs",children:[e.jsx(x,{color:"text-tertiary",variant:"bs-regular",children:"Ensure the user has at-least 50 Followers and is following"}),e.jsx(J,{to:"https://x.com/pushprotocol",target:"_blank",referrerPolicy:"no-referrer",children:e.jsx(x,{color:"text-brand-medium",variant:"bs-regular",children:"@pushprotocol"})})," ",e.jsx(x,{color:"text-tertiary",variant:"bs-regular",children:"on Twitter"})]}),e.jsx("img",{src:Ie,alt:"Push Icon"})]}),e.jsx(l,{position:"relative",width:"100%",children:e.jsx(l,{position:"absolute",width:"302px",css:B`
            right: 0px;
          `,children:e.jsx(E,{placeholder:"Search user or x handle or else",icon:e.jsx(Z,{}),value:t,onChange:o=>r(o.target.value)})})}),e.jsx(Ce,{variant:"fill",onChange:()=>r(""),items:[{key:"PENDING",label:"Pending",children:e.jsx($,{query:a})},{key:"COMPLETED",label:"Approved",children:e.jsx(D,{query:a})},{key:"REJECTED",label:"Rejected",children:e.jsx(K,{query:a})}]})]})},H=()=>{const[t,r]=u.useState("login");return e.jsxs(l,{height:"100%",width:"-webkit-fill-available",children:[t==="login"&&e.jsx(F,{handleSetActiveView:r}),t==="list"&&e.jsx(W,{})]})},G=()=>e.jsx(qe,{children:e.jsx(H,{})})});export{Fe as __tla,G as default};
