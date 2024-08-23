import{ed as ne,ee as ie,bi as k,b1 as e,b2 as r,ef as A,dW as U,dU as te,bY as b,aY as P,a_ as j,bq as x,b$ as W,dw as Z,cC as B,aZ as G,b0 as C,cI as re,cJ as H,dZ as le,bp as oe,d_ as ce,d$ as de,cG as he,e0 as ge,__tla as ue}from"./index-BFh_mb4t.js";import{u as J,__tla as xe}from"./useMutation-CEFnVlKO.js";import{S as pe,__tla as me}from"./Stepper-Cpvk0obs.js";import{g as fe,__tla as ye}from"./Common.utils-DkSEtTZq.js";import{c as we,a as Q,u as be,F as je,b as Ce,__tla as _e}from"./index.esm-C3FqussQ.js";import{i as Ie,__tla as ve}from"./ValidationHelper-BiU5bbWp.js";import{C as Se,__tla as ke}from"./ContentLayout-D3WMo2b1.js";let X,De=Promise.all([(()=>{try{return ue}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return ke}catch{}})()]).then(async()=>{let E,T,M,N,K,F,R,D,$,V,_,q,z,Y,L;E=a=>a,T=a=>a,M=({userPushSDKInstance:a,alias:s})=>a.channel.alias.initiate(s).then(E),N=({userPushSDKInstance:a,channelAddress:s})=>a.channel.alias.verify(s).then(T),K=()=>J({mutationKey:[ne],mutationFn:M}),F=()=>J({mutationKey:[ie],mutationFn:N}),R=[{label:"New Address",value:"newaddress"},{label:"Change Network",value:"changenetwork"},{label:"Verify Alias Chain",value:"verifyalias"}],D=k.allowedNetworks.filter(a=>a!=k.coreContractChain),$=we().shape({alias:Q().required("Address is required").test("is-valid-address","Invalid wallet address",Ie),chainId:Q().required("ChainId is required")}),V=({children:a,onSubmit:s})=>{const t=be({initialValues:{alias:"",chainId:D[0].toString()},validationSchema:$,onSubmit:s});return e.jsx(je,{value:t,children:a})},_=()=>{const a=Ce();if(!a)throw new Error("useChainAliasFormikContext must be used within a FormikChainAliasProvider");return a},q=({isLoading:a,channelDetails:s})=>{const t=fe(D),{values:o,handleSubmit:h,handleChange:g,errors:n,touched:i}=_(),u=s==null?void 0:s.aliases.find(l=>l.alias_blockchain_id===o.chainId&&l.is_alias_verified),y=()=>!(!u&&o.alias);return e.jsxs(r,{width:"100%",display:"flex",flexDirection:"column",gap:"spacing-lg",children:[u&&e.jsx(A,{variant:"error",heading:"Channel already exists on this chain. Select a different chain to proceed.",showIcon:!0}),e.jsx("form",{onSubmit:h,children:e.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",gap:"spacing-xl",children:[e.jsxs(r,{display:"flex",flexDirection:{ml:"column",dp:"row"},gap:"spacing-xs",alignItems:"flex-start",width:"100%",children:[e.jsx(r,{width:{dp:"60%",ml:"100%"},children:e.jsx(U,{label:"Your Address on New Chain",description:"Make sure you own this alias as verification will take place.",value:o.alias,onChange:g("alias"),error:(i==null?void 0:i.alias)&&!!(n!=null&&n.alias),errorMessage:i!=null&&i.alias?n==null?void 0:n.alias:""})}),e.jsx(r,{display:"flex",alignSelf:"center",width:{dp:"auto",ml:"100%"},margin:"spacing-none spacing-none spacing-xxxs spacing-none",children:e.jsx(te,{options:t,value:o.chainId,onSelect:g("chainId"),error:(i==null?void 0:i.chainId)&&!!(n!=null&&n.chainId),errorMessage:i!=null&&i.chainId?n.chainId:""})})]}),e.jsx(b,{disabled:y(),variant:"primary",loading:a,children:a?"Adding new chain":"Add"})]})})]})},z=({handleNextStep:a})=>{const{switchChain:s,chainId:t}=P(),{values:o}=_(),h=parseInt(o.chainId);return j.useEffect(()=>{t===h&&a("verifyalias")},[t]),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignItems:"center",children:[e.jsx(x,{variant:"bs-semibold",color:"text-primary",children:"Switch to the desired chain in your wallet to add it to your channel."}),e.jsx(b,{onClick:()=>s(h),children:"Change Network"})]})},Y=({alaisDetails:a})=>{const{userPushSDKInstance:s}=W(c=>c.user),{account:t,chainId:o}=P(),{mutate:h,isPending:g}=F(),{values:n}=_(),i=parseInt(n.chainId),{data:u,refetch:y}=Z((a==null?void 0:a.channel)||""),l=n.alias,p=B(),w=G(),m=u==null?void 0:u.aliases.find(c=>c.alias_blockchain_id===n.chainId&&c.is_alias_verified),f=m?"Channel already exists on this chain.":t!==l?"Incorrect address. Connect using the correct address to proceed.":"",I=()=>!(!m&&o===i&&t===l),v=()=>{h({userPushSDKInstance:s,channelAddress:(a==null?void 0:a.channel)??""},{onSuccess:()=>{p.showMessageToast({toastTitle:"Success",toastMessage:"Verification Successful",toastType:"SUCCESS",getToastIcon:c=>e.jsx(re,{size:c,color:"green"})}),y(),w(`${C.ChannelDashboard}/${t}}`)},onError:c=>{c&&p.showMessageToast({toastTitle:"Error",toastMessage:c.message,toastType:"ERROR",getToastIcon:S=>e.jsx(H,{size:S,color:"red"})})}})};return e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing-xl",width:"100%",alignItems:"center",children:[f&&e.jsx(r,{width:"100%",children:e.jsx(A,{variant:"error",heading:f,showIcon:!0,onAction:m?()=>w(`${C.ChannelDashboard}/${t}}`):void 0,actionText:m?"Back to Home":void 0})}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing-sm",children:[e.jsxs(x,{variant:"bs-semibold",textAlign:"center",color:"text-primary",children:["You\u2019re almost there!",e.jsx("br",{})," Verify the address on the new chain to send notifications."]}),e.jsx(U,{disabled:!0,value:l})]}),e.jsx(b,{disabled:I(),onClick:v,loading:g,children:g?"Verifying":"Verify New Address"})]})},L=()=>{const[a,s]=j.useState("newaddress"),[t,o]=j.useState(["newaddress"]),[h,g]=j.useState(!0),n=B(),{mutate:i,isPending:u,isError:y}=K(),{userPushSDKInstance:l}=W(d=>d.user),{account:p,chainId:w,switchChain:m}=P(),{data:f}=Z(p),{data:I}=le({alias:p,aliasChain:ge[w]}),v=G();j.useEffect(()=>{g(l&&(l==null?void 0:l.readmode()))},[l]);const c=(d,ae)=>{o(["newaddress"]),i({userPushSDKInstance:l,alias:he(d,parseInt(ae))},{onSuccess:()=>{S("changenetwork")},onError:O=>{O&&n.showMessageToast({toastTitle:"Error",toastMessage:O.message,toastType:"ERROR",getToastIcon:se=>e.jsx(H,{size:se,color:"red"})})}})},S=d=>{o([...new Set([...t,d])]),s(d)},ee=()=>{v(f?`${C.ChannelDashboard}/${p}}`:C.WelcomeDashboard),g(!1)};return e.jsx(V,{onSubmit:d=>c(d.alias,d.chainId),children:e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing-sm",alignItems:"center",children:[e.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",margin:{ml:"spacing-lg spacing-md spacing-none spacing-md",dp:"spacing-lg spacing-none spacing-none spacing-none"},padding:{dp:"spacing-lg",ml:"spacing-sm"},gap:"spacing-lg",borderRadius:"radius-lg",backgroundColor:"surface-primary",children:[e.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing-xxxs",children:[e.jsx(x,{color:"text-primary",variant:"h3-semibold",display:{ml:"none",dp:"block"},children:"Add New Chain to Channel"}),e.jsx(x,{color:"text-primary",variant:"h4-semibold",display:{ml:"block",dp:"none"},children:"Add New Chain to Channel"}),e.jsx(x,{color:"text-tertiary",variant:"bs-regular",display:{ml:"none",dp:"block"},children:"Add an alias chain to your channel to enable notifications to that chain."}),e.jsx(x,{display:{ml:"block",dp:"none"},color:"text-tertiary",variant:"bes-regular",children:"Add an alias chain to your channel to enable notifications to that chain."})]}),w!==k.coreContractChain&&t.length===1?e.jsxs(e.Fragment,{children:[e.jsx(r,{display:"flex",padding:"spacing-md",flexDirection:"column",gap:"spacing-sm",alignSelf:"stretch",alignItems:"flex-start",borderRadius:"radius-sm",backgroundColor:"surface-secondary",children:e.jsx(x,{textAlign:"center",color:"text-brand-medium",variant:"h5-semibold",children:"Please change your network to Ethereum to proceed."})}),e.jsx(b,{onClick:()=>m(k.coreContractChain),children:"Change Network"})]}):f||I?e.jsxs(e.Fragment,{children:[e.jsx(r,{width:"100%",children:e.jsx(pe,{steps:R,completedSteps:t,setActiveStepKey:d=>s(d)})}),a==="newaddress"&&e.jsx(q,{isLoading:u&&!y,channelDetails:f}),a==="changenetwork"&&e.jsx(z,{handleNextStep:S}),a==="verifyalias"&&e.jsx(Y,{alaisDetails:I})]}):e.jsxs(e.Fragment,{children:[e.jsx(A,{variant:"error",showIcon:!0,heading:"User does not have a channel on Push. Create a channel to proceed."}),e.jsx(b,{onClick:()=>v(C.CreateChannel),children:"Create Channel"})]}),h&&e.jsx(r,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:oe`
                z-index: 99999;
              `,children:e.jsx(ce,{type:de.MODAL,showConnectModal:!0,onClose:ee,description:"Unlock your profile to proceed."})})]}),e.jsx(x,{color:"text-tertiary",variant:"c-semibold",children:"Tip: Please do not exit the process before the address is verified. If you leave, you will need to start over."})]})})},X=()=>e.jsx(Se,{children:e.jsx(L,{})})});export{De as __tla,X as default};
