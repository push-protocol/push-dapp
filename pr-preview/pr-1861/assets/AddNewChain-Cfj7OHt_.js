import{h4 as ne,h5 as ie,ej as k,e1 as e,gW as te,e2 as t,h6 as A,gZ as Q,gX as re,es as w,dY as P,d_ as C,eo as u,fh as U,gQ as W,fK as Z,dZ as H,e0 as b,fQ as le,fR as X,h0 as oe,en as ce,h1 as de,h2 as he,fO as ge,h3 as xe,__tla as ue}from"./index-BAjRPsh3.js";import{u as B,__tla as pe}from"./useMutation-BBwZGWZi.js";import{S as me,__tla as fe}from"./Stepper-BvV-8iGY.js";import{c as ye,a as G,u as je,F as we,b as Ce,__tla as be}from"./index.esm-CPaI4CCU.js";import{i as Ie,__tla as ve}from"./ValidationHelper-Dy0wingu.js";import{C as _e,__tla as Se}from"./ContentLayout-CxwHFvX-.js";let J,ke=Promise.all([(()=>{try{return ue}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return Se}catch{}})()]).then(async()=>{let E,T,M,N,K,R,F,D,V,q,I,z,O,L,Y;E=a=>a,T=a=>a,M=({userPushSDKInstance:a,alias:s})=>a.channel.alias.initiate(s).then(E),N=({userPushSDKInstance:a,channelAddress:s})=>a.channel.alias.verify(s).then(T),K=()=>B({mutationKey:[ne],mutationFn:M}),R=()=>B({mutationKey:[ie],mutationFn:N}),F=[{label:"New Address",value:"newaddress"},{label:"Change Network",value:"changenetwork"},{label:"Verify Alias Chain",value:"verifyalias"}],D=k.allowedNetworks.filter(a=>a!=k.coreContractChain),V=ye().shape({alias:G().required("Address is required").test("is-valid-address","Invalid wallet address",Ie),chainId:G().required("ChainId is required")}),q=({children:a,onSubmit:s})=>{const r=je({initialValues:{alias:"",chainId:D[0].toString()},validationSchema:V,onSubmit:s});return e.jsx(we,{value:r,children:a})},I=()=>{const a=Ce();if(!a)throw new Error("useChainAliasFormikContext must be used within a FormikChainAliasProvider");return a},z=({isLoading:a,channelDetails:s})=>{const r=te(D),{values:o,handleSubmit:h,handleChange:g,errors:n,touched:i}=I(),x=s==null?void 0:s.aliases.find(l=>l.alias_blockchain_id===o.chainId&&l.is_alias_verified),y=()=>!(!x&&o.alias);return e.jsxs(t,{width:"100%",display:"flex",flexDirection:"column",gap:"spacing-lg",children:[x&&e.jsx(A,{variant:"error",heading:"Channel already exists on this chain. Select a different chain to proceed.",showIcon:!0}),e.jsx("form",{onSubmit:h,children:e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",gap:"spacing-xl",children:[e.jsxs(t,{display:"flex",flexDirection:{ml:"column",dp:"row"},gap:"spacing-xs",alignItems:"flex-start",width:"100%",children:[e.jsx(t,{width:{dp:"60%",ml:"100%"},children:e.jsx(Q,{label:"Your Address on New Chain",description:"Make sure you own this alias as verification will take place.",value:o.alias,onChange:g("alias"),error:(i==null?void 0:i.alias)&&!!(n!=null&&n.alias),errorMessage:i!=null&&i.alias?n==null?void 0:n.alias:""})}),e.jsx(t,{display:"flex",alignSelf:"center",width:{dp:"auto",ml:"100%"},margin:"spacing-none spacing-none spacing-xxxs spacing-none",children:e.jsx(re,{options:r,value:o.chainId,onSelect:g("chainId"),error:(i==null?void 0:i.chainId)&&!!(n!=null&&n.chainId),errorMessage:i!=null&&i.chainId?n.chainId:""})})]}),e.jsx(w,{disabled:y(),variant:"primary",loading:a,children:a?"Adding new chain":"Add"})]})})]})},O=({handleNextStep:a})=>{const{switchChain:s,chainId:r}=P(),{values:o}=I(),h=parseInt(o.chainId);return C.useEffect(()=>{r===h&&a("verifyalias")},[r]),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignItems:"center",children:[e.jsx(u,{variant:"bs-semibold",color:"text-primary",children:"Switch to the desired chain in your wallet to add it to your channel."}),e.jsx(w,{onClick:()=>s(h),children:"Change Network"})]})},L=({alaisDetails:a})=>{const{userPushSDKInstance:s}=U(c=>c.user),{account:r,chainId:o}=P(),{mutate:h,isPending:g}=R(),{values:n}=I(),i=parseInt(n.chainId),{data:x,refetch:y}=W((a==null?void 0:a.channel)||""),l=n.alias,p=Z(),j=H(),m=x==null?void 0:x.aliases.find(c=>c.alias_blockchain_id===n.chainId&&c.is_alias_verified),f=m?"Channel already exists on this chain.":r!==l?"Incorrect address. Connect using the correct address to proceed.":"",v=()=>!(!m&&o===i&&r===l),_=()=>{h({userPushSDKInstance:s,channelAddress:(a==null?void 0:a.channel)??""},{onSuccess:()=>{p.showMessageToast({toastTitle:"Success",toastMessage:"Verification Successful",toastType:"SUCCESS",getToastIcon:c=>e.jsx(le,{size:c,color:"green"})}),y(),j(`${b.ChannelDashboard(r)}`)},onError:c=>{c&&p.showMessageToast({toastTitle:"Error",toastMessage:c.message,toastType:"ERROR",getToastIcon:S=>e.jsx(X,{size:S,color:"red"})})}})};return e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing-xl",width:"100%",alignItems:"center",children:[f&&e.jsx(t,{width:"100%",children:e.jsx(A,{variant:"error",heading:f,showIcon:!0,onAction:m?()=>j(`${b.ChannelDashboard(r)}`):void 0,actionText:m?"Back to Home":void 0})}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing-sm",children:[e.jsxs(u,{variant:"bs-semibold",textAlign:"center",color:"text-primary",children:["You\u2019re almost there!",e.jsx("br",{})," Verify the address on the new chain to send notifications."]}),e.jsx(Q,{disabled:!0,value:l})]}),e.jsx(w,{disabled:v(),onClick:_,loading:g,children:g?"Verifying":"Verify New Address"})]})},Y=()=>{const[a,s]=C.useState("newaddress"),[r,o]=C.useState(["newaddress"]),[h,g]=C.useState(!0),n=Z(),{mutate:i,isPending:x,isError:y}=K(),{userPushSDKInstance:l}=U(d=>d.user),{account:p,chainId:j,switchChain:m}=P(),{data:f}=W(p),{data:v}=oe({alias:p,aliasChain:xe[j]}),_=H();C.useEffect(()=>{g(l&&(l==null?void 0:l.readmode()))},[l]);const c=(d,ae)=>{o(["newaddress"]),i({userPushSDKInstance:l,alias:ge(d,parseInt(ae))},{onSuccess:()=>{S("changenetwork")},onError:$=>{$&&n.showMessageToast({toastTitle:"Error",toastMessage:$.message,toastType:"ERROR",getToastIcon:se=>e.jsx(X,{size:se,color:"red"})})}})},S=d=>{o([...new Set([...r,d])]),s(d)},ee=()=>{_(f?`${b.ChannelDashboard(p)}}`:b.WelcomeDashboard),g(!1)};return e.jsx(q,{onSubmit:d=>c(d.alias,d.chainId),children:e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing-sm",alignItems:"center",children:[e.jsxs(t,{width:{dp:"648px",ml:"357px"},display:"flex",flexDirection:"column",alignItems:"center",margin:{ml:"spacing-lg spacing-md spacing-none spacing-md",dp:"spacing-lg spacing-none spacing-none spacing-none"},padding:{dp:"spacing-lg",ml:"spacing-sm"},gap:"spacing-lg",borderRadius:"radius-lg",backgroundColor:"surface-primary",children:[e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing-xxxs",children:[e.jsx(u,{color:"text-primary",variant:"h3-semibold",display:{ml:"none",initial:"block"},children:"Add New Chain to Channel"}),e.jsx(u,{color:"text-primary",variant:"h4-semibold",display:{ml:"block",initial:"none"},children:"Add New Chain to Channel"}),e.jsx(u,{color:"text-tertiary",variant:"bs-regular",display:{ml:"none",initial:"block"},children:"Add an alias chain to your channel to enable notifications to that chain."}),e.jsx(u,{display:{ml:"block",initial:"none"},color:"text-tertiary",variant:"bes-regular",children:"Add an alias chain to your channel to enable notifications to that chain."})]}),j!==k.coreContractChain&&r.length===1?e.jsxs(e.Fragment,{children:[e.jsx(t,{display:"flex",padding:"spacing-md",flexDirection:"column",gap:"spacing-sm",alignSelf:"stretch",alignItems:"flex-start",borderRadius:"radius-sm",backgroundColor:"surface-secondary",children:e.jsx(u,{textAlign:"center",color:"text-brand-medium",variant:"h5-semibold",children:"Please change your network to Ethereum to proceed."})}),e.jsx(w,{onClick:()=>m(k.coreContractChain),children:"Change Network"})]}):f||v?e.jsxs(e.Fragment,{children:[e.jsx(t,{width:"100%",children:e.jsx(me,{steps:F,completedSteps:r,setActiveStepKey:d=>s(d)})}),a==="newaddress"&&e.jsx(z,{isLoading:x&&!y,channelDetails:f}),a==="changenetwork"&&e.jsx(O,{handleNextStep:S}),a==="verifyalias"&&e.jsx(L,{alaisDetails:v})]}):e.jsxs(e.Fragment,{children:[e.jsx(A,{variant:"error",showIcon:!0,heading:"User does not have a channel on Push. Create a channel to proceed."}),e.jsx(w,{onClick:()=>_(b.CreateChannel),children:"Create Channel"})]}),h&&e.jsx(t,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:ce`
                z-index: 99999;
              `,children:e.jsx(de,{type:he.MODAL,showConnectModal:!0,onClose:ee,description:"Unlock your profile to proceed."})})]}),e.jsx(t,{margin:"spacing-none spacing-md",children:e.jsx(u,{color:"text-tertiary",variant:"c-semibold",children:"Tip: Please do not exit the process before the address is verified. If you leave, you will need to start over."})})]})})},J=()=>e.jsx(_e,{children:e.jsx(Y,{})})});export{ke as __tla,J as default};