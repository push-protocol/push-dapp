import{c7 as C,b7 as u,eW as xe,c6 as ge,aZ as e,cW as fe,cN as j,eX as v,eY as ne,eZ as me,e_ as ye,cO as we,e$ as je,f0 as P,f1 as ve,f2 as E,dd as be,bg as l,cQ as x,dQ as T,bM as k,dg as _e,bh as se,f3 as I,f4 as Se,f5 as oe,bU as L,bV as M,be as Ce,f6 as Ie,f7 as Pe,__tla as Ee}from"./index-6qj2EOfW.js";import{c as Te,a as le,u as ke,__tla as Le}from"./index.esm-CK7k9HNX.js";import{P as Me,__tla as Oe}from"./PushLogo-BeW2WAkJ.js";import{u as O,__tla as Re}from"./useMutation-Cd0Em7vX.js";import{u as R,L as N,I as q,__tla as Ne}from"./LeaderboardNullState-C1XiSNy7.js";import{C as qe,__tla as ze}from"./ContentLayout-CFlE4eJg.js";let ce,Fe=Promise.all([(()=>{try{return Ee}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Oe}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return ze}catch{}})()]).then(async()=>{function z(t,a){return t.findAll(a.filters).map(r=>a.select?a.select(r):r.state)}function de(t={},a){const r=C().getMutationCache(),n=u.useRef(t),i=u.useRef(null);return i.current||(i.current=z(r,t)),u.useEffect(()=>{n.current=t}),u.useSyncExternalStore(u.useCallback(o=>r.subscribe(()=>{const s=xe(i.current,z(r,n.current));i.current!==s&&(i.current=s,ge.schedule(o))}),[r]),()=>i.current,()=>i.current)}const ue=t=>{const{svgProps:a,...r}=t;return e.jsx(fe,{componentName:"Search",icon:e.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("circle",{cx:"15.12",cy:"14.25",r:"9",stroke:"currentColor","stroke-width":"2"}),e.jsx("path",{d:"M21.62 20.75L27.62 26.75",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})]}),...r})};function he(t,a){var r=u.useRef(!1),n=u.useRef(),i=u.useRef(t),o=u.useCallback(function(){return r.current},[]),s=u.useCallback(function(){r.current=!1,n.current&&clearTimeout(n.current),n.current=setTimeout(function(){r.current=!0,i.current()},a)},[a]),c=u.useCallback(function(){r.current=null,n.current&&clearTimeout(n.current)},[]);return u.useEffect(function(){i.current=t},[t]),u.useEffect(function(){return s(),c},[a]),[o,c,s]}function pe(t,a,r){r===void 0&&(r=[]);var n=he(t,a),i=n[0],o=n[1],s=n[2];return u.useEffect(s,r),[i,o]}let F,A,D,$,W,b,K,H,U,V,B,J,y,Q,G,Z,X,_,Y,S,ee,te,ae,re,ie;F=t=>t,A=t=>t,D=t=>({id:t.data.id,followersCount:t.data.public_metrics.followers_count,followingCount:t.data.public_metrics.following_count,likeCount:t.data.public_metrics.like_count,listedCount:t.data.public_metrics.listed_count,name:t.data.name,tweetCount:t.data.public_metrics.tweet_count,username:t.data.username}),$=t=>j({method:"POST",url:`${v()}/auth/login`,data:{username:t.username,password:t.password},headers:{"Content-Type":"application/json"}}).then(a=>F(a.data)),W=({activityId:t,token:a})=>j({method:"POST",url:`${v()}/activities/approved`,data:{activities:[{activityId:t}]},headers:{"Content-Type":"application/json",Authorization:a}}).then(r=>r.data),b=({page:t,status:a,pageSize:r,token:n,wallet:i,twitter:o,activityTypeId:s})=>j({method:"GET",url:`${v()}/activities/list`,params:{status:a,page:t,pageSize:r,wallet:i,twitter:o,activityTypeId:s},headers:{"Content-Type":"application/json",Authorization:n}}).then(c=>A(c.data)),K=({twitterHandle:t,token:a})=>j({method:"GET",url:`${v()}/twitter/user/${t}`,headers:{"Content-Type":"application/json",Authorization:a}}).then(r=>D(r.data)),H=({activityId:t,token:a})=>j({method:"POST",url:`${v()}/activities/rejected`,data:{activities:[{activityId:t}]},headers:{"Content-Type":"application/json",Authorization:a}}).then(r=>r.data),U=()=>O({mutationKey:[ne],mutationFn:$}),V=()=>O({mutationFn:W,mutationKey:[me]}),B=()=>O({mutationFn:H,mutationKey:[ye]}),J=(t,a)=>we({queryKey:[je,t],queryFn:()=>K({twitterHandle:t,token:a}),staleTime:1/0,retry:!1,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1,enabled:!!a&&!!t}),y=()=>{var t,a;return(a=(t=de({filters:{mutationKey:[ne]},select:r=>r.state.data}))==null?void 0:t[0])==null?void 0:a.token},Q=({status:t,pageSize:a=20,token:r,twitter:n,wallet:i,activityTypeId:o})=>R({queryKey:[P,`${n}-${i}`],initialPageParam:1,queryFn:({pageParam:s})=>b({status:t,page:s,pageSize:a,token:r,twitter:n,wallet:i,activityTypeId:o}),getNextPageParam:({page:s,total:c})=>s>=c?null:s+1,enabled:!!r,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1}),G=({status:t,pageSize:a=20,token:r,twitter:n,wallet:i,activityTypeId:o})=>R({queryKey:[ve,`${n}-${i}`],initialPageParam:1,queryFn:({pageParam:s})=>b({status:t,page:s,pageSize:a,token:r,twitter:n,wallet:i,activityTypeId:o}),getNextPageParam:({page:s,total:c})=>s>=c?null:s+1,enabled:!!r,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1}),Z=({status:t,pageSize:a=20,token:r,twitter:n,wallet:i,activityTypeId:o})=>R({queryKey:[E,`${n}-${i}`],initialPageParam:1,queryFn:({pageParam:s})=>b({status:t,page:s,pageSize:a,token:r,twitter:n,wallet:i,activityTypeId:o}),getNextPageParam:({page:s,total:c})=>s>=c?null:s+1,enabled:!!r,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1}),X=({handleSetActiveView:t})=>{const{mutate:a,isPending:r}=U(),n=Te().shape({username:le().required("Username is required"),password:le().required("Password is required")}),i=ke({initialValues:{username:"",password:""},validationSchema:n,onSubmit:c=>{s({...c})}}),o=be(),s=({username:c,password:h})=>{a({username:c,password:h},{onSuccess:p=>{t("list")},onError:p=>{p.name&&o.showMessageToast({toastTitle:"Error",toastMessage:p.response.data.error,toastType:"ERROR",getToastIcon:m=>e.jsx(_e,{size:m,color:"red"})})}})};return e.jsxs(l,{alignItems:"center",display:"flex",flexDirection:"column",gap:"spacing-xxl",children:[e.jsxs(l,{display:"flex",gap:"spacing-xxxs",alignItems:"center",children:[e.jsx(Me,{}),e.jsx(x,{variant:"h2-semibold",color:"text-primary",children:"Push"})]}),e.jsxs(l,{width:"374px",display:"flex",alignItems:"center",padding:"spacing-md",flexDirection:"column",gap:"spacing-md",backgroundColor:"surface-primary",borderRadius:"radius-md",children:[e.jsx(x,{variant:"h4-bold",color:"text-primary",children:"Points Vault Login"}),e.jsx(l,{width:"100%",children:e.jsx("form",{onSubmit:i.handleSubmit,children:e.jsxs(l,{display:"flex",alignItems:"center",flexDirection:"column",gap:"spacing-xs",width:"100%",children:[e.jsx(l,{width:"100%",children:e.jsx(T,{placeholder:"User",value:i.values.username,disabled:r,onChange:i.handleChange("username"),error:i.touched.username&&!!i.errors.username,errorMessage:i.touched.username?i.errors.username:""})}),e.jsx(l,{width:"100%",children:e.jsx(T,{type:"password",placeholder:"Password",disabled:r,value:i.values.password,onChange:i.handleChange("password"),error:i.touched.password&&!!i.errors.password,errorMessage:i.touched.password?i.errors.password:""})}),e.jsx(l,{margin:"spacing-md spacing-none spacing-none spacing-none",children:e.jsx(k,{disabled:r,children:r?"Authenticating":"Login"})})]})})})]})]})},_=()=>e.jsxs(l,{display:"flex",justifyContent:"space-between",children:[e.jsx(l,{width:"345px",children:e.jsx(x,{variant:"c-bold",color:"text-tertiary",children:"USER"})}),e.jsx(l,{width:"345px",children:e.jsx(x,{variant:"c-bold",color:"text-tertiary",children:"TWITTER LINK"})}),e.jsx(l,{width:"42px",justifyContent:"center",display:"flex",children:e.jsx(x,{variant:"c-bold",color:"text-tertiary",children:"FOLLOWERS"})}),e.jsx(l,{width:"245px",display:"flex",justifyContent:"center",children:e.jsx(x,{variant:"c-bold",color:"text-tertiary",children:"ACTION"})})]}),Y=({status:t,item:a,refetch:r})=>{const n=y(),{mutate:i,isPending:o}=B(),{mutate:s,isPending:c}=V(),h=async()=>{i({activityId:a.activityId,currentStatus:t,token:n},{onSuccess:()=>r("REJECTED")})},p=async()=>{s({activityId:a.activityId,currentStatus:t,token:n},{onSuccess:()=>r("COMPLETED")})};return e.jsxs(l,{width:"208px",minWidth:"208px",minHeight:"22px",display:"flex",justifyContent:"center",gap:"spacing-xxs",children:[t!=="COMPLETED"&&e.jsx(k,{variant:"outline",size:"extraSmall",disabled:c||o,onClick:p,children:"Approve"}),t!=="REJECTED"&&e.jsx(k,{variant:"dangerSecondary",size:"extraSmall",disabled:c||o,onClick:h,children:"Reject"})]})},S=({isLoading:t,item:a,refetch:r})=>{var o,s,c;const n=y(),{data:i}=J((o=a.data)==null?void 0:o.twitter,n);return e.jsxs(l,{height:"48px",display:"flex",justifyContent:"space-between",alignItems:"center",css:se`
        border-bottom: var(--border-sm) solid var(--stroke-secondary);
      `,children:[e.jsx(I,{isLoading:t,children:e.jsx(l,{display:"flex",alignItems:"center",width:"345px",height:"22px",children:e.jsx(x,{variant:"bs-semibold",color:"text-secondary",children:Se(a.userWallet)})})}),e.jsx(I,{isLoading:t,children:e.jsx(l,{display:"flex",alignItems:"center",width:"345px",children:e.jsx(oe,{to:`https://x.com/${(s=a.data)==null?void 0:s.twitter}`,target:"_blank",rel:"noopener noreferrer",children:e.jsxs(x,{color:"text-brand-medium",variant:"bs-semibold",children:["https://x.com/",(c=a.data)==null?void 0:c.twitter]})})})}),e.jsx(I,{isLoading:t,children:e.jsx(l,{display:"flex",alignItems:"center",justifyContent:"center",width:"42px",children:e.jsx(x,{variant:"bs-semibold",color:i!=null&&i.followersCount&&i.followersCount<50?"text-state-danger-bold":"text-primary",children:(i==null?void 0:i.followersCount)??"-"})})}),e.jsx(I,{isLoading:t,children:e.jsx(l,{width:"245px",minHeight:"22px",display:"flex",justifyContent:"center",children:e.jsx(Y,{refetch:r,status:a.status,item:a})})})]})},ee=({query:t})=>{const a=y(),r=C(),{data:n,fetchNextPage:i,hasNextPage:o,isFetchingNextPage:s,isLoading:c,isError:h,refetch:p}=Q({status:"COMPLETED",token:a,pageSize:20,twitter:t.twitter,wallet:t.wallet,activityTypeId:"follow_push_on_twitter"}),m=!s&&o,g=c?Array(5).fill(0):(n==null?void 0:n.pages.flatMap(d=>d.activities))||[];if(!g.length)return e.jsx(N,{refetchLeaderboard:h?p:void 0,heading:"No Users Found",error:h,subHeading:h?"Please refresh to view the List":""});const w=()=>{p(),r.invalidateQueries({queryKey:[E]})};return e.jsx(l,{gap:"spacing-sm",display:"flex",flexDirection:"column",children:e.jsxs(l,{height:"calc(100vh - 356px)",overflow:"auto",children:[e.jsx(_,{}),e.jsx(q,{pageStart:0,loadMore:()=>i(),hasMore:m,loader:e.jsx(l,{margin:"spacing-xs",children:e.jsx(L,{spinnerSize:24,type:M.SEAMLESS})},"loader-spinner"),useWindow:!1,threshold:150,children:g.map((d,f)=>e.jsx(S,{item:d,isLoading:c,refetch:w},(d==null?void 0:d.activityId)||f))})]})})},te=({query:t})=>{const a=y(),r=C(),{data:n,fetchNextPage:i,hasNextPage:o,isFetchingNextPage:s,isLoading:c,isError:h,refetch:p}=G({status:"PENDING",token:a,pageSize:20,twitter:t.twitter,wallet:t.wallet,activityTypeId:"follow_push_on_twitter"}),m=!s&&o,g=c?Array(5).fill(0):(n==null?void 0:n.pages.flatMap(d=>d.activities))||[];if(!g.length)return e.jsx(N,{refetchLeaderboard:h?p:void 0,heading:"No Users Found",error:h,subHeading:h?"Please refresh to view the List":""});const w=d=>{p();const f=d==="COMPLETED"?P:d==="REJECTED"?E:void 0;f&&r.invalidateQueries({queryKey:[f]})};return e.jsx(l,{gap:"spacing-sm",display:"flex",flexDirection:"column",children:e.jsxs(l,{height:"calc(100vh - 356px)",overflow:"auto",children:[e.jsx(_,{}),e.jsx(q,{pageStart:0,loadMore:()=>i(),hasMore:m,loader:e.jsx(l,{margin:"spacing-xs",children:e.jsx(L,{spinnerSize:24,type:M.SEAMLESS})},"loader-spinner"),useWindow:!1,threshold:150,children:g.map((d,f)=>e.jsx(S,{item:d,isLoading:c,refetch:w},(d==null?void 0:d.activityId)||f))})]})})},ae=({query:t})=>{const a=y(),r=C(),{data:n,fetchNextPage:i,hasNextPage:o,isFetchingNextPage:s,isLoading:c,isError:h,refetch:p}=Z({status:"REJECTED",token:a,pageSize:20,twitter:t.twitter,wallet:t.wallet,activityTypeId:"follow_push_on_twitter"}),m=!s&&o,g=c?Array(5).fill(0):(n==null?void 0:n.pages.flatMap(d=>d.activities))||[];if(!g.length)return e.jsx(N,{refetchLeaderboard:h?p:void 0,heading:"No Users Found",error:h,subHeading:h?"Please refresh to view the List":""});const w=()=>{p(),r.invalidateQueries({queryKey:[P]})};return e.jsx(l,{gap:"spacing-sm",display:"flex",flexDirection:"column",children:e.jsxs(l,{height:"calc(100vh - 356px)",overflow:"auto",children:[e.jsx(_,{}),e.jsx(q,{pageStart:0,loadMore:()=>i(),hasMore:m,loader:e.jsx(l,{margin:"spacing-xs",children:e.jsx(L,{spinnerSize:24,type:M.SEAMLESS})},"loader-spinner"),useWindow:!1,threshold:150,children:g.map((d,f)=>e.jsx(S,{item:d,isLoading:c,refetch:w},(d==null?void 0:d.activityId)||f))})]})})},re=()=>{const[t,a]=u.useState(""),[r,n]=u.useState({}),i=u.useCallback(o=>{if(!o)return{};const s=Ce(o),c=s?"wallet":"twitter",h=s?`eip155:${o}`:o;return{[c]:h}},[]);return pe(()=>n(i(t)),500,[t]),e.jsxs(l,{backgroundColor:"surface-primary",padding:"spacing-md",borderRadius:"radius-md",children:[e.jsx(x,{variant:"h4-bold",color:"text-primary",children:"Points Vault"}),e.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"spacing-none spacing-none spacing-md spacing-none",children:[e.jsxs(l,{display:"flex",gap:"spacing-xxxs",children:[e.jsx(x,{color:"text-tertiary",variant:"bs-regular",children:"Ensure the user has at-least 50 Followers and is following"}),e.jsx(oe,{to:"https://x.com/pushprotocol",target:"_blank",referrerPolicy:"no-referrer",children:e.jsx(x,{color:"text-brand-medium",variant:"bs-regular",children:"@pushprotocol"})})," ",e.jsx(x,{color:"text-tertiary",variant:"bs-regular",children:"on Twitter"})]}),e.jsx("img",{src:Ie,alt:"Push Icon"})]}),e.jsx(l,{position:"relative",width:"100%",children:e.jsx(l,{position:"absolute",width:"302px",css:se`
            right: 0px;
          `,children:e.jsx(T,{placeholder:"Search user or x handle or else",icon:e.jsx(ue,{}),value:t,onChange:o=>a(o.target.value)})})}),e.jsx(Pe,{variant:"fill",onChange:()=>a(""),items:[{key:"PENDING",label:"Pending",children:e.jsx(te,{query:r})},{key:"COMPLETED",label:"Approved",children:e.jsx(ee,{query:r})},{key:"REJECTED",label:"Rejected",children:e.jsx(ae,{query:r})}]})]})},ie=()=>{const[t,a]=u.useState("login");return e.jsxs(l,{height:"100%",width:"-webkit-fill-available",children:[t==="login"&&e.jsx(X,{handleSetActiveView:a}),t==="list"&&e.jsx(re,{})]})},ce=()=>e.jsx(qe,{children:e.jsx(ie,{})})});export{Fe as __tla,ce as default};
