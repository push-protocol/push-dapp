import{i6 as S,dX as u,i7 as pe,i8 as xe,e_ as w,gB as v,fW as P,i9 as U,ia as ge,ib as fe,fb as me,ic as ye,id as C,ie as je,ig as T,g6 as we,d_ as e,g8 as ve,d$ as o,e2 as x,go as k,em as L,e3 as B,ej as I,ih as be,fZ as J,e0 as M,e1 as O,eh as _e,ii as Se,ij as Ie,__tla as Ee}from"./index-CfbKVokx.js";import{c as Pe,a as V,u as Ce,__tla as Te}from"./index.esm-rfMWlQya.js";import{P as ke,__tla as Le}from"./PushLogo-CLdnWu9c.js";import{S as Me,__tla as Oe}from"./Search-BINUoixg.js";import{u as R,I as q,__tla as Re}from"./InfiniteScroll-Bt0SwFI6.js";import{L as z,__tla as qe}from"./LeaderboardNullState-CigJjcja.js";import{C as ze,__tla as Ne}from"./ContentLayout-DiIo4zwr.js";let G,Fe=Promise.all([(()=>{try{return Ee}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Oe}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return qe}catch{}})(),(()=>{try{return Ne}catch{}})()]).then(async()=>{function N(t,a){return t.findAll(a.filters).map(r=>a.select?a.select(r):r.state)}function Q(t={},a){const r=S().getMutationCache(),n=u.useRef(t),i=u.useRef(null);return i.current||(i.current=N(r,t)),u.useEffect(()=>{n.current=t}),u.useSyncExternalStore(u.useCallback(l=>r.subscribe(()=>{const s=pe(i.current,N(r,n.current));i.current!==s&&(i.current=s,xe.schedule(l))}),[r]),()=>i.current,()=>i.current)}const X=t=>t,Z=t=>t,Y=t=>({id:t.data.id,followersCount:t.data.public_metrics.followers_count,followingCount:t.data.public_metrics.following_count,likeCount:t.data.public_metrics.like_count,listedCount:t.data.public_metrics.listed_count,name:t.data.name,tweetCount:t.data.public_metrics.tweet_count,username:t.data.username}),ee=t=>w({method:"POST",url:`${v()}/auth/login`,data:{username:t.username,password:t.password},headers:{"Content-Type":"application/json"}}).then(a=>X(a.data)),te=({activityId:t,token:a})=>w({method:"POST",url:`${v()}/activities/approved`,data:{activities:[{activityId:t}]},headers:{"Content-Type":"application/json",Authorization:a}}).then(r=>r.data),E=({page:t,status:a,pageSize:r,token:n,wallet:i,twitter:l,activityTypeId:s})=>w({method:"GET",url:`${v()}/activities/list`,params:{status:a,page:t,pageSize:r,wallet:i,twitter:l,activityTypeId:s},headers:{"Content-Type":"application/json",Authorization:n}}).then(c=>Z(c.data)),ae=({twitterHandle:t,token:a})=>w({method:"GET",url:`${v()}/twitter/user/${t}`,headers:{"Content-Type":"application/json",Authorization:a}}).then(r=>Y(r.data)),re=({activityId:t,token:a})=>w({method:"POST",url:`${v()}/activities/rejected`,data:{activities:[{activityId:t}]},headers:{"Content-Type":"application/json",Authorization:a}}).then(r=>r.data),ie=()=>P({mutationKey:[U],mutationFn:ee}),ne=()=>P({mutationFn:te,mutationKey:[ge]}),se=()=>P({mutationFn:re,mutationKey:[fe]}),le=(t,a)=>me({queryKey:[ye,t],queryFn:()=>ae({twitterHandle:t,token:a}),staleTime:1/0,retry:!1,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1,enabled:!!a&&!!t}),y=()=>{var t,a;return(a=(t=Q({filters:{mutationKey:[U]},select:r=>r.state.data}))==null?void 0:t[0])==null?void 0:a.token},oe=({status:t,pageSize:a=20,token:r,twitter:n,wallet:i,activityTypeId:l})=>R({queryKey:[C,`${n}-${i}`],initialPageParam:1,queryFn:({pageParam:s})=>E({status:t,page:s,pageSize:a,token:r,twitter:n,wallet:i,activityTypeId:l}),getNextPageParam:({page:s,total:c})=>s>=c?null:s+1,enabled:!!r,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1}),ce=({status:t,pageSize:a=20,token:r,twitter:n,wallet:i,activityTypeId:l})=>R({queryKey:[je,`${n}-${i}`],initialPageParam:1,queryFn:({pageParam:s})=>E({status:t,page:s,pageSize:a,token:r,twitter:n,wallet:i,activityTypeId:l}),getNextPageParam:({page:s,total:c})=>s>=c?null:s+1,enabled:!!r,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1}),de=({status:t,pageSize:a=20,token:r,twitter:n,wallet:i,activityTypeId:l})=>R({queryKey:[T,`${n}-${i}`],initialPageParam:1,queryFn:({pageParam:s})=>E({status:t,page:s,pageSize:a,token:r,twitter:n,wallet:i,activityTypeId:l}),getNextPageParam:({page:s,total:c})=>s>=c?null:s+1,enabled:!!r,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1});function ue(t,a){var r=u.useRef(!1),n=u.useRef(),i=u.useRef(t),l=u.useCallback(function(){return r.current},[]),s=u.useCallback(function(){r.current=!1,n.current&&clearTimeout(n.current),n.current=setTimeout(function(){r.current=!0,i.current()},a)},[a]),c=u.useCallback(function(){r.current=null,n.current&&clearTimeout(n.current)},[]);return u.useEffect(function(){i.current=t},[t]),u.useEffect(function(){return s(),c},[a]),[l,c,s]}function he(t,a,r){r===void 0&&(r=[]);var n=ue(t,a),i=n[0],l=n[1],s=n[2];return u.useEffect(s,r),[i,l]}let F,b,A,_,D,$,K,W,H;F=({handleSetActiveView:t})=>{const{mutate:a,isPending:r}=ie(),n=Pe().shape({username:V().required("Username is required"),password:V().required("Password is required")}),i=Ce({initialValues:{username:"",password:""},validationSchema:n,onSubmit:c=>{s({...c})}}),l=we(),s=({username:c,password:h})=>{a({username:c,password:h},{onSuccess:p=>{t("list")},onError:p=>{p.name&&l.showMessageToast({toastTitle:"Error",toastMessage:p.response.data.error,toastType:"ERROR",getToastIcon:m=>e.jsx(ve,{size:m,color:"red"})})}})};return e.jsxs(o,{alignItems:"center",display:"flex",flexDirection:"column",gap:"spacing-xxl",children:[e.jsxs(o,{display:"flex",gap:"spacing-xxxs",alignItems:"center",children:[e.jsx(ke,{}),e.jsx(x,{variant:"h2-semibold",color:"text-primary",children:"Push"})]}),e.jsxs(o,{width:"374px",display:"flex",alignItems:"center",padding:"spacing-md",flexDirection:"column",gap:"spacing-md",backgroundColor:"surface-primary",borderRadius:"radius-md",children:[e.jsx(x,{variant:"h4-bold",color:"text-primary",children:"Points Vault Login"}),e.jsx(o,{width:"100%",children:e.jsx("form",{onSubmit:i.handleSubmit,children:e.jsxs(o,{display:"flex",alignItems:"center",flexDirection:"column",gap:"spacing-xs",width:"100%",children:[e.jsx(o,{width:"100%",children:e.jsx(k,{placeholder:"User",value:i.values.username,disabled:r,onChange:i.handleChange("username"),error:i.touched.username&&!!i.errors.username,errorMessage:i.touched.username?i.errors.username:""})}),e.jsx(o,{width:"100%",children:e.jsx(k,{type:"password",placeholder:"Password",disabled:r,value:i.values.password,onChange:i.handleChange("password"),error:i.touched.password&&!!i.errors.password,errorMessage:i.touched.password?i.errors.password:""})}),e.jsx(o,{margin:"spacing-md spacing-none spacing-none spacing-none",children:e.jsx(L,{disabled:r,children:r?"Authenticating":"Login"})})]})})})]})]})},b=()=>e.jsxs(o,{display:"flex",justifyContent:"space-between",children:[e.jsx(o,{width:"345px",children:e.jsx(x,{variant:"c-bold",color:"text-tertiary",children:"USER"})}),e.jsx(o,{width:"345px",children:e.jsx(x,{variant:"c-bold",color:"text-tertiary",children:"TWITTER LINK"})}),e.jsx(o,{width:"42px",justifyContent:"center",display:"flex",children:e.jsx(x,{variant:"c-bold",color:"text-tertiary",children:"FOLLOWERS"})}),e.jsx(o,{width:"245px",display:"flex",justifyContent:"center",children:e.jsx(x,{variant:"c-bold",color:"text-tertiary",children:"ACTION"})})]}),A=({status:t,item:a,refetch:r})=>{const n=y(),{mutate:i,isPending:l}=se(),{mutate:s,isPending:c}=ne(),h=async()=>{i({activityId:a.activityId,currentStatus:t,token:n},{onSuccess:()=>r("REJECTED")})},p=async()=>{s({activityId:a.activityId,currentStatus:t,token:n},{onSuccess:()=>r("COMPLETED")})};return e.jsxs(o,{width:"208px",minWidth:"208px",minHeight:"22px",display:"flex",justifyContent:"center",gap:"spacing-xxs",children:[t!=="COMPLETED"&&e.jsx(L,{variant:"outline",size:"extraSmall",disabled:c||l,onClick:p,children:"Approve"}),t!=="REJECTED"&&e.jsx(L,{variant:"dangerSecondary",size:"extraSmall",disabled:c||l,onClick:h,children:"Reject"})]})},_=({isLoading:t,item:a,refetch:r})=>{var l,s,c;const n=y(),{data:i}=le((l=a.data)==null?void 0:l.twitter,n);return e.jsxs(o,{height:"48px",display:"flex",justifyContent:"space-between",alignItems:"center",css:B`
        border-bottom: var(--border-sm) solid var(--stroke-secondary);
      `,children:[e.jsx(I,{isLoading:t,children:e.jsx(o,{display:"flex",alignItems:"center",width:"345px",height:"22px",children:e.jsx(x,{variant:"bs-semibold",color:"text-secondary",children:be(a.userWallet)})})}),e.jsx(I,{isLoading:t,children:e.jsx(o,{display:"flex",alignItems:"center",width:"345px",children:e.jsx(J,{to:`https://x.com/${(s=a.data)==null?void 0:s.twitter}`,target:"_blank",rel:"noopener noreferrer",children:e.jsxs(x,{color:"text-brand-medium",variant:"bs-semibold",children:["https://x.com/",(c=a.data)==null?void 0:c.twitter]})})})}),e.jsx(I,{isLoading:t,children:e.jsx(o,{display:"flex",alignItems:"center",justifyContent:"center",width:"42px",children:e.jsx(x,{variant:"bs-semibold",color:i!=null&&i.followersCount&&i.followersCount<50?"text-state-danger-bold":"text-primary",children:(i==null?void 0:i.followersCount)??"-"})})}),e.jsx(I,{isLoading:t,children:e.jsx(o,{width:"245px",minHeight:"22px",display:"flex",justifyContent:"center",children:e.jsx(A,{refetch:r,status:a.status,item:a})})})]})},D=({query:t})=>{const a=y(),r=S(),{data:n,fetchNextPage:i,hasNextPage:l,isFetchingNextPage:s,isLoading:c,isError:h,refetch:p}=oe({status:"COMPLETED",token:a,pageSize:20,twitter:t.twitter,wallet:t.wallet,activityTypeId:"follow_push_on_twitter"}),m=!s&&l,g=c?Array(5).fill(0):(n==null?void 0:n.pages.flatMap(d=>d.activities))||[];if(!g.length)return e.jsx(z,{refetchLeaderboard:h?p:void 0,heading:"No Users Found",error:h,subHeading:h?"Please refresh to view the List":""});const j=()=>{p(),r.invalidateQueries({queryKey:[T]})};return e.jsx(o,{gap:"spacing-sm",display:"flex",flexDirection:"column",children:e.jsxs(o,{height:"calc(100vh - 356px)",overflow:"auto",children:[e.jsx(b,{}),e.jsx(q,{pageStart:0,loadMore:()=>i(),hasMore:m,loader:e.jsx(o,{margin:"spacing-xs",children:e.jsx(M,{spinnerSize:24,type:O.SEAMLESS})},"loader-spinner"),useWindow:!1,threshold:150,children:g.map((d,f)=>e.jsx(_,{item:d,isLoading:c,refetch:j},(d==null?void 0:d.activityId)||f))})]})})},$=({query:t})=>{const a=y(),r=S(),{data:n,fetchNextPage:i,hasNextPage:l,isFetchingNextPage:s,isLoading:c,isError:h,refetch:p}=ce({status:"PENDING",token:a,pageSize:20,twitter:t.twitter,wallet:t.wallet,activityTypeId:"follow_push_on_twitter"}),m=!s&&l,g=c?Array(5).fill(0):(n==null?void 0:n.pages.flatMap(d=>d.activities))||[];if(!g.length)return e.jsx(z,{refetchLeaderboard:h?p:void 0,heading:"No Users Found",error:h,subHeading:h?"Please refresh to view the List":""});const j=d=>{p();const f=d==="COMPLETED"?C:d==="REJECTED"?T:void 0;f&&r.invalidateQueries({queryKey:[f]})};return e.jsx(o,{gap:"spacing-sm",display:"flex",flexDirection:"column",children:e.jsxs(o,{height:"calc(100vh - 356px)",overflow:"auto",children:[e.jsx(b,{}),e.jsx(q,{pageStart:0,loadMore:()=>i(),hasMore:m,loader:e.jsx(o,{margin:"spacing-xs",children:e.jsx(M,{spinnerSize:24,type:O.SEAMLESS})},"loader-spinner"),useWindow:!1,threshold:150,children:g.map((d,f)=>e.jsx(_,{item:d,isLoading:c,refetch:j},(d==null?void 0:d.activityId)||f))})]})})},K=({query:t})=>{const a=y(),r=S(),{data:n,fetchNextPage:i,hasNextPage:l,isFetchingNextPage:s,isLoading:c,isError:h,refetch:p}=de({status:"REJECTED",token:a,pageSize:20,twitter:t.twitter,wallet:t.wallet,activityTypeId:"follow_push_on_twitter"}),m=!s&&l,g=c?Array(5).fill(0):(n==null?void 0:n.pages.flatMap(d=>d.activities))||[];if(!g.length)return e.jsx(z,{refetchLeaderboard:h?p:void 0,heading:"No Users Found",error:h,subHeading:h?"Please refresh to view the List":""});const j=()=>{p(),r.invalidateQueries({queryKey:[C]})};return e.jsx(o,{gap:"spacing-sm",display:"flex",flexDirection:"column",children:e.jsxs(o,{height:"calc(100vh - 356px)",overflow:"auto",children:[e.jsx(b,{}),e.jsx(q,{pageStart:0,loadMore:()=>i(),hasMore:m,loader:e.jsx(o,{margin:"spacing-xs",children:e.jsx(M,{spinnerSize:24,type:O.SEAMLESS})},"loader-spinner"),useWindow:!1,threshold:150,children:g.map((d,f)=>e.jsx(_,{item:d,isLoading:c,refetch:j},(d==null?void 0:d.activityId)||f))})]})})},W=()=>{const[t,a]=u.useState(""),[r,n]=u.useState({}),i=u.useCallback(l=>{if(!l)return{};const s=_e(l),c=s?"wallet":"twitter",h=s?`eip155:${l}`:l;return{[c]:h}},[]);return he(()=>n(i(t)),500,[t]),e.jsxs(o,{backgroundColor:"surface-primary",padding:"spacing-md",borderRadius:"radius-md",children:[e.jsx(x,{variant:"h4-bold",color:"text-primary",children:"Points Vault"}),e.jsxs(o,{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"spacing-none spacing-none spacing-md spacing-none",children:[e.jsxs(o,{display:"flex",gap:"spacing-xxxs",children:[e.jsx(x,{color:"text-tertiary",variant:"bs-regular",children:"Ensure the user has at-least 50 Followers and is following"}),e.jsx(J,{to:"https://x.com/pushprotocol",target:"_blank",referrerPolicy:"no-referrer",children:e.jsx(x,{color:"text-brand-medium",variant:"bs-regular",children:"@pushprotocol"})})," ",e.jsx(x,{color:"text-tertiary",variant:"bs-regular",children:"on Twitter"})]}),e.jsx("img",{src:Se,alt:"Push Icon"})]}),e.jsx(o,{position:"relative",width:"100%",children:e.jsx(o,{position:"absolute",width:"302px",css:B`
            right: 0px;
          `,children:e.jsx(k,{placeholder:"Search user or x handle or else",icon:e.jsx(Me,{}),value:t,onChange:l=>a(l.target.value)})})}),e.jsx(Ie,{variant:"fill",onChange:()=>a(""),items:[{key:"PENDING",label:"Pending",children:e.jsx($,{query:r})},{key:"COMPLETED",label:"Approved",children:e.jsx(D,{query:r})},{key:"REJECTED",label:"Rejected",children:e.jsx(K,{query:r})}]})]})},H=()=>{const[t,a]=u.useState("login");return e.jsxs(o,{height:"100%",width:"-webkit-fill-available",children:[t==="login"&&e.jsx(F,{handleSetActiveView:a}),t==="list"&&e.jsx(W,{})]})},G=()=>e.jsx(ze,{children:e.jsx(H,{})})});export{Fe as __tla,G as default};
