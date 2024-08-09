import{dA as _,r as h,gn as pe,dz as xe,m as e,eo as ye,ee as j,go as v,gp as se,gq as fe,gr as me,ef as we,gs as je,gt as E,gu as ve,gv as I,eH as be,D as o,eh as p,fh as P,ei as T,eK as ke,gw as Se,E as ne,gx as C,gy as _e,gz as le,dj as L,dk as M,B as Ce,gA as Ee,gB as Ie,__tla as Pe}from"./index-htEh1Ze7.js";import{c as Te,a as oe,u as Le,__tla as Me}from"./index.esm-iK2lp9eT.js";import{P as Oe,__tla as Re}from"./PushLogo-CCgVPqH7.js";import{u as O,__tla as ze}from"./useMutation-DDAYArKv.js";import{u as R,L as z,I as N,__tla as Ne}from"./LeaderboardNullState-CElWTU3A.js";import{C as qe,__tla as Ae}from"./ContentLayout-CU9ZIgUh.js";let ce,De=Promise.all([(()=>{try{return Pe}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return Ae}catch{}})()]).then(async()=>{function q(t,r){return t.findAll(r.filters).map(a=>r.select?r.select(a):a.state)}function de(t={},r){const a=_().getMutationCache(),s=h.useRef(t),i=h.useRef(null);return i.current||(i.current=q(a,t)),h.useEffect(()=>{s.current=t}),h.useSyncExternalStore(h.useCallback(l=>a.subscribe(()=>{const n=pe(i.current,q(a,s.current));i.current!==n&&(i.current=n,xe.schedule(l))}),[a]),()=>i.current,()=>i.current)}const ue=t=>{const{svgProps:r,...a}=t;return e.jsx(ye,{componentName:"Search",icon:e.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[e.jsx("circle",{cx:"15.12",cy:"14.25",r:"9",stroke:"currentColor","stroke-width":"2"}),e.jsx("path",{d:"M21.62 20.75L27.62 26.75",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})]}),...a})};function he(t,r){var a=h.useRef(!1),s=h.useRef(),i=h.useRef(t),l=h.useCallback(function(){return a.current},[]),n=h.useCallback(function(){a.current=!1,s.current&&clearTimeout(s.current),s.current=setTimeout(function(){a.current=!0,i.current()},r)},[r]),c=h.useCallback(function(){a.current=null,s.current&&clearTimeout(s.current)},[]);return h.useEffect(function(){i.current=t},[t]),h.useEffect(function(){return n(),c},[r]),[l,c,n]}function ge(t,r,a){a===void 0&&(a=[]);var s=he(t,r),i=s[0],l=s[1],n=s[2];return h.useEffect(n,a),[i,l]}let A,D,F,$,K,b,W,B,H,U,J,V,m,G,Q,X,Y,k,Z,S,ee,te,re,ae,ie;A=t=>t,D=t=>t,F=t=>({id:t.data.id,followersCount:t.data.public_metrics.followers_count,followingCount:t.data.public_metrics.following_count,likeCount:t.data.public_metrics.like_count,listedCount:t.data.public_metrics.listed_count,name:t.data.name,tweetCount:t.data.public_metrics.tweet_count,username:t.data.username}),$=t=>j({method:"POST",url:`${v()}/auth/login`,data:{username:t.username,password:t.password},headers:{"Content-Type":"application/json"}}).then(r=>A(r.data)),K=({activityId:t,token:r})=>j({method:"POST",url:`${v()}/activities/approved`,data:{activities:[{activityId:t}]},headers:{"Content-Type":"application/json",Authorization:r}}).then(a=>a.data),b=({page:t,status:r,pageSize:a,token:s,wallet:i,twitter:l,activityTypeId:n})=>j({method:"GET",url:`${v()}/activities/list`,params:{status:r,page:t,pageSize:a,wallet:i,twitter:l,activityTypeId:n},headers:{"Content-Type":"application/json",Authorization:s}}).then(c=>D(c.data)),W=({twitterHandle:t,token:r})=>j({method:"GET",url:`${v()}/twitter/user/${t}`,headers:{"Content-Type":"application/json",Authorization:r}}).then(a=>F(a.data)),B=({activityId:t,token:r})=>j({method:"POST",url:`${v()}/activities/rejected`,data:{activities:[{activityId:t}]},headers:{"Content-Type":"application/json",Authorization:r}}).then(a=>a.data),H=()=>O({mutationKey:[se],mutationFn:$}),U=()=>O({mutationFn:K,mutationKey:[fe]}),J=()=>O({mutationFn:B,mutationKey:[me]}),V=(t,r)=>we({queryKey:[je,t],queryFn:()=>W({twitterHandle:t,token:r}),staleTime:1/0,retry:!1,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1,enabled:!!r&&!!t}),m=()=>{var t,r;return(r=(t=de({filters:{mutationKey:[se]},select:a=>a.state.data}))==null?void 0:t[0])==null?void 0:r.token},G=({status:t,pageSize:r=20,token:a,twitter:s,wallet:i,activityTypeId:l})=>R({queryKey:[E,`${s}-${i}`],initialPageParam:1,queryFn:({pageParam:n})=>b({status:t,page:n,pageSize:r,token:a,twitter:s,wallet:i,activityTypeId:l}),getNextPageParam:({page:n,total:c})=>n>=c?null:n+1,enabled:!!a,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1}),Q=({status:t,pageSize:r=20,token:a,twitter:s,wallet:i,activityTypeId:l})=>R({queryKey:[ve,`${s}-${i}`],initialPageParam:1,queryFn:({pageParam:n})=>b({status:t,page:n,pageSize:r,token:a,twitter:s,wallet:i,activityTypeId:l}),getNextPageParam:({page:n,total:c})=>n>=c?null:n+1,enabled:!!a,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1}),X=({status:t,pageSize:r=20,token:a,twitter:s,wallet:i,activityTypeId:l})=>R({queryKey:[I,`${s}-${i}`],initialPageParam:1,queryFn:({pageParam:n})=>b({status:t,page:n,pageSize:r,token:a,twitter:s,wallet:i,activityTypeId:l}),getNextPageParam:({page:n,total:c})=>n>=c?null:n+1,enabled:!!a,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,retryOnMount:!1}),Y=({handleSetActiveView:t})=>{const{mutate:r,isPending:a}=H(),s=Te().shape({username:oe().required("Username is required"),password:oe().required("Password is required")}),i=Le({initialValues:{username:"",password:""},validationSchema:s,onSubmit:c=>{n({...c})}}),l=be(),n=({username:c,password:u})=>{r({username:c,password:u},{onSuccess:g=>{t("list")},onError:g=>{g.name&&l.showMessageToast({toastTitle:"Error",toastMessage:g.response.data.error,toastType:"ERROR",getToastIcon:f=>e.jsx(ke,{size:f,color:"red"})})}})};return e.jsxs(o,{alignItems:"center",display:"flex",flexDirection:"column",gap:"s12",children:[e.jsxs(o,{display:"flex",gap:"s1",alignItems:"center",children:[e.jsx(Oe,{}),e.jsx(p,{variant:"h2-semibold",color:{light:"gray-1000",dark:"white"},children:"Push"})]}),e.jsxs(o,{width:"374px",display:"flex",alignItems:"center",padding:"s6",flexDirection:"column",gap:"s6",backgroundColor:{dark:"gray-900",light:"white"},borderRadius:"r6",children:[e.jsx(p,{variant:"h4-bold",color:{light:"gray-1000",dark:"gray-100"},children:"Points Vault Login"}),e.jsx(o,{width:"100%",children:e.jsx("form",{onSubmit:i.handleSubmit,children:e.jsxs(o,{display:"flex",alignItems:"center",flexDirection:"column",gap:"s3",width:"100%",children:[e.jsx(P,{placeholder:"User",value:i.values.username,disabled:a,onChange:i.handleChange("username"),error:i.touched.username&&!!i.errors.username,errorMessage:i.touched.username?i.errors.username:""}),e.jsx(P,{type:"password",placeholder:"Password",disabled:a,value:i.values.password,onChange:i.handleChange("password"),error:i.touched.password&&!!i.errors.password,errorMessage:i.touched.password?i.errors.password:""}),e.jsx(o,{margin:"s6 s0 s0 s0",children:e.jsx(T,{disabled:a,children:a?"Authenticating":"Login"})})]})})})]})]})},k=()=>e.jsxs(o,{display:"flex",justifyContent:"space-between",children:[e.jsx(o,{width:"345px",children:e.jsx(p,{variant:"c-bold",color:{light:"gray-500",dark:"gray-600"},children:"USER"})}),e.jsx(o,{width:"345px",children:e.jsx(p,{variant:"c-bold",color:{light:"gray-500",dark:"gray-600"},children:"TWITTER LINK"})}),e.jsx(o,{width:"42px",justifyContent:"center",display:"flex",children:e.jsx(p,{variant:"c-bold",color:{light:"gray-500",dark:"gray-600"},children:"FOLLOWERS"})}),e.jsx(o,{width:"245px",display:"flex",justifyContent:"center",children:e.jsx(p,{variant:"c-bold",color:{light:"gray-500",dark:"gray-600"},children:"ACTION"})})]}),Z=({status:t,item:r,refetch:a})=>{const s=m(),{mutate:i,isPending:l}=J(),{mutate:n,isPending:c}=U(),u=async()=>{i({activityId:r.activityId,currentStatus:t,token:s},{onSuccess:()=>a("REJECTED")})},g=async()=>{n({activityId:r.activityId,currentStatus:t,token:s},{onSuccess:()=>a("COMPLETED")})};return e.jsxs(o,{width:"208px",minWidth:"208px",minHeight:"22px",display:"flex",justifyContent:"center",gap:"s2",children:[t!=="COMPLETED"&&e.jsx(T,{variant:"outline",size:"extraSmall",disabled:c||l,onClick:g,children:"Approve"}),t!=="REJECTED"&&e.jsx(T,{variant:"dangerSecondary",size:"extraSmall",disabled:c||l,onClick:u,children:"Reject"})]})},S=({isLoading:t,item:r,refetch:a})=>{var n,c,u;const{mode:s}=Se(),i=m(),{data:l}=V((n=r.data)==null?void 0:n.twitter,i);return e.jsxs(o,{height:"48px",display:"flex",justifyContent:"space-between",alignItems:"center",css:ne`
        border-bottom: 1px solid var(--${s==="dark"?"gray-800":"gray-200"});
      `,children:[e.jsx(C,{isLoading:t,children:e.jsx(o,{display:"flex",alignItems:"center",width:"345px",height:"22px",children:e.jsx(p,{variant:"bs-semibold",color:{light:"gray-1000",dark:"gray-100"},children:_e(r.userWallet)})})}),e.jsx(C,{isLoading:t,children:e.jsx(o,{display:"flex",alignItems:"center",width:"345px",children:e.jsx(le,{to:`https://x.com/${(c=r.data)==null?void 0:c.twitter}`,target:"_blank",rel:"noopener noreferrer",children:e.jsxs(p,{color:"pink-600",variant:"bs-semibold",children:["https://x.com/",(u=r.data)==null?void 0:u.twitter]})})})}),e.jsx(C,{isLoading:t,children:e.jsx(o,{display:"flex",alignItems:"center",justifyContent:"center",width:"42px",children:e.jsx(p,{variant:"bs-semibold",color:l!=null&&l.followersCount&&l.followersCount<50?"red-700":{light:"gray-1000",dark:"gray-100"},children:(l==null?void 0:l.followersCount)??"-"})})}),e.jsx(C,{isLoading:t,children:e.jsx(o,{width:"245px",minHeight:"22px",display:"flex",justifyContent:"center",children:e.jsx(Z,{refetch:a,status:r.status,item:r})})})]})},ee=({query:t})=>{const r=m(),a=_(),{data:s,fetchNextPage:i,hasNextPage:l,isFetchingNextPage:n,isLoading:c,isError:u,refetch:g}=G({status:"COMPLETED",token:r,pageSize:20,twitter:t.twitter,wallet:t.wallet,activityTypeId:"follow_push_on_twitter"}),f=!n&&l,x=c?Array(5).fill(0):(s==null?void 0:s.pages.flatMap(d=>d.activities))||[];if(!x.length)return e.jsx(z,{refetchLeaderboard:u?g:void 0,heading:"No Users Found",error:u,subHeading:u?"Please refresh to view the List":""});const w=()=>{g(),a.invalidateQueries({queryKey:[I]})};return e.jsx(o,{gap:"s4",display:"flex",flexDirection:"column",children:e.jsxs(o,{height:"calc(100vh - 356px)",overflow:"auto",children:[e.jsx(k,{}),e.jsx(N,{pageStart:0,loadMore:()=>i(),hasMore:f,loader:e.jsx(o,{margin:"s3",children:e.jsx(L,{spinnerSize:24,type:M.SEAMLESS})},"loader-spinner"),useWindow:!1,threshold:150,children:x.map((d,y)=>e.jsx(S,{item:d,isLoading:c,refetch:w},(d==null?void 0:d.activityId)||y))})]})})},te=({query:t})=>{const r=m(),a=_(),{data:s,fetchNextPage:i,hasNextPage:l,isFetchingNextPage:n,isLoading:c,isError:u,refetch:g}=Q({status:"PENDING",token:r,pageSize:20,twitter:t.twitter,wallet:t.wallet,activityTypeId:"follow_push_on_twitter"}),f=!n&&l,x=c?Array(5).fill(0):(s==null?void 0:s.pages.flatMap(d=>d.activities))||[];if(!x.length)return e.jsx(z,{refetchLeaderboard:u?g:void 0,heading:"No Users Found",error:u,subHeading:u?"Please refresh to view the List":""});const w=d=>{g();const y=d==="COMPLETED"?E:d==="REJECTED"?I:void 0;y&&a.invalidateQueries({queryKey:[y]})};return e.jsx(o,{gap:"s4",display:"flex",flexDirection:"column",children:e.jsxs(o,{height:"calc(100vh - 356px)",overflow:"auto",children:[e.jsx(k,{}),e.jsx(N,{pageStart:0,loadMore:()=>i(),hasMore:f,loader:e.jsx(o,{margin:"s3",children:e.jsx(L,{spinnerSize:24,type:M.SEAMLESS})},"loader-spinner"),useWindow:!1,threshold:150,children:x.map((d,y)=>e.jsx(S,{item:d,isLoading:c,refetch:w},(d==null?void 0:d.activityId)||y))})]})})},re=({query:t})=>{const r=m(),a=_(),{data:s,fetchNextPage:i,hasNextPage:l,isFetchingNextPage:n,isLoading:c,isError:u,refetch:g}=X({status:"REJECTED",token:r,pageSize:20,twitter:t.twitter,wallet:t.wallet,activityTypeId:"follow_push_on_twitter"}),f=!n&&l,x=c?Array(5).fill(0):(s==null?void 0:s.pages.flatMap(d=>d.activities))||[];if(!x.length)return e.jsx(z,{refetchLeaderboard:u?g:void 0,heading:"No Users Found",error:u,subHeading:u?"Please refresh to view the List":""});const w=()=>{g(),a.invalidateQueries({queryKey:[E]})};return e.jsx(o,{gap:"s4",display:"flex",flexDirection:"column",children:e.jsxs(o,{height:"calc(100vh - 356px)",overflow:"auto",children:[e.jsx(k,{}),e.jsx(N,{pageStart:0,loadMore:()=>i(),hasMore:f,loader:e.jsx(o,{margin:"s3",children:e.jsx(L,{spinnerSize:24,type:M.SEAMLESS})},"loader-spinner"),useWindow:!1,threshold:150,children:x.map((d,y)=>e.jsx(S,{item:d,isLoading:c,refetch:w},(d==null?void 0:d.activityId)||y))})]})})},ae=()=>{const[t,r]=h.useState(""),[a,s]=h.useState({}),i=h.useCallback(l=>{if(!l)return{};const n=Ce(l),c=n?"wallet":"twitter",u=n?`eip155:${l}`:l;return{[c]:u}},[]);return ge(()=>s(i(t)),500,[t]),e.jsxs(o,{backgroundColor:{light:"white",dark:"gray-900"},padding:"s6",borderRadius:"r6",children:[e.jsx(p,{variant:"h4-bold",color:"gray-1000",children:"Points Vault"}),e.jsxs(o,{display:"flex",justifyContent:"space-between",alignItems:"center",css:[{marginBottom:"var(--s6)"}],children:[e.jsxs(o,{display:"flex",gap:"s1",children:[e.jsx(p,{color:"gray-500",variant:"bs-regular",children:"Ensure the user has at-least 50 Followers and is following"}),e.jsx(le,{to:"https://x.com/pushprotocol",target:"_blank",referrerPolicy:"no-referrer",children:e.jsx(p,{color:"pink-400",variant:"bs-regular",children:"@pushprotocol"})})," ",e.jsx(p,{color:"gray-500",variant:"bs-regular",children:"on Twitter"})]}),e.jsx("img",{src:Ee,alt:"Push Icon"})]}),e.jsx(o,{position:"relative",width:"100%",children:e.jsx(o,{position:"absolute",width:"302px",css:ne`
            right: 0px;
          `,children:e.jsx(P,{placeholder:"Search user or x handle or else",icon:e.jsx(ue,{}),value:t,onChange:l=>r(l.target.value)})})}),e.jsx(Ie,{variant:"fill",onChange:()=>r(""),items:[{key:"PENDING",label:"Pending",children:e.jsx(te,{query:a})},{key:"COMPLETED",label:"Approved",children:e.jsx(ee,{query:a})},{key:"REJECTED",label:"Rejected",children:e.jsx(re,{query:a})}]})]})},ie=()=>{const[t,r]=h.useState("login");return e.jsxs(o,{height:"100%",width:"-webkit-fill-available",children:[t==="login"&&e.jsx(Y,{handleSetActiveView:r}),t==="list"&&e.jsx(ae,{})]})},ce=()=>e.jsx(qe,{children:e.jsx(ie,{})})});export{De as __tla,ce as default};