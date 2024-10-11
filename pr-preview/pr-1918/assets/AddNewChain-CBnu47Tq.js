import{hp as ne,hq as ie,em as k,e1 as e,e2 as t,hr as A,h6 as Y,h4 as te,f0 as j,dY as P,d_ as C,es as p,f3 as H,gI as W,fH as Z,dZ as B,e0 as b,fN as re,fO as G,h9 as le,er as oe,ha as ce,hb as de,fL as he,hc as ge,__tla as xe}from"./index-ClFky8uL.js";import{u as J,__tla as pe}from"./useMutation-DsRVmpS-.js";import{S as ue,__tla as me}from"./Stepper-LQdw7-rX.js";import{g as fe,__tla as ye}from"./Common.utils-BQlMr6Hl.js";import{c as we,a as Q,u as je,F as Ce,b as be,__tla as _e}from"./index.esm-D1lJBfOj.js";import{i as Ie,__tla as ve}from"./ValidationHelper-Bn1W1Vkv.js";import{C as Se,__tla as ke}from"./ContentLayout-CK3hovNx.js";let X,De=Promise.all([(()=>{try{return xe}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return ke}catch{}})()]).then(async()=>{let E,N,T,M,K,F,R,D,V,$,_,q,z,L,O;E=a=>a,N=a=>a,T=({userPushSDKInstance:a,alias:s})=>a.channel.alias.initiate(s).then(E),M=({userPushSDKInstance:a,channelAddress:s})=>a.channel.alias.verify(s).then(N),K=()=>J({mutationKey:[ne],mutationFn:T}),F=()=>J({mutationKey:[ie],mutationFn:M}),R=[{label:"New Address",value:"newaddress"},{label:"Change Network",value:"changenetwork"},{label:"Verify Alias Chain",value:"verifyalias"}],D=k.allowedNetworks.filter(a=>a!=k.coreContractChain),V=we().shape({alias:Q().required("Address is required").test("is-valid-address","Invalid wallet address",Ie),chainId:Q().required("ChainId is required")}),$=({children:a,onSubmit:s})=>{const r=je({initialValues:{alias:"",chainId:D[0].toString()},validationSchema:V,onSubmit:s});return e.jsx(Ce,{value:r,children:a})},_=()=>{const a=be();if(!a)throw new Error("useChainAliasFormikContext must be used within a FormikChainAliasProvider");return a},q=({isLoading:a,channelDetails:s})=>{const r=fe(D),{values:o,handleSubmit:h,handleChange:g,errors:n,touched:i}=_(),x=s==null?void 0:s.aliases.find(l=>l.alias_blockchain_id===o.chainId&&l.is_alias_verified),y=()=>!(!x&&o.alias);return e.jsxs(t,{width:"100%",display:"flex",flexDirection:"column",gap:"spacing-lg",children:[x&&e.jsx(A,{variant:"error",heading:"Channel already exists on this chain. Select a different chain to proceed.",showIcon:!0}),e.jsx("form",{onSubmit:h,children:e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",gap:"spacing-xl",children:[e.jsxs(t,{display:"flex",flexDirection:{ml:"column",dp:"row"},gap:"spacing-xs",alignItems:"flex-start",width:"100%",children:[e.jsx(t,{width:{dp:"60%",ml:"100%"},children:e.jsx(Y,{label:"Your Address on New Chain",description:"Make sure you own this alias as verification will take place.",value:o.alias,onChange:g("alias"),error:(i==null?void 0:i.alias)&&!!(n!=null&&n.alias),errorMessage:i!=null&&i.alias?n==null?void 0:n.alias:""})}),e.jsx(t,{display:"flex",alignSelf:"center",width:{dp:"auto",ml:"100%"},margin:"spacing-none spacing-none spacing-xxxs spacing-none",children:e.jsx(te,{options:r,value:o.chainId,onSelect:g("chainId"),error:(i==null?void 0:i.chainId)&&!!(n!=null&&n.chainId),errorMessage:i!=null&&i.chainId?n.chainId:""})})]}),e.jsx(j,{disabled:y(),variant:"primary",loading:a,children:a?"Adding new chain":"Add"})]})})]})},z=({handleNextStep:a})=>{const{switchChain:s,chainId:r}=P(),{values:o}=_(),h=parseInt(o.chainId);return C.useEffect(()=>{r===h&&a("verifyalias")},[r]),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignItems:"center",children:[e.jsx(p,{variant:"bs-semibold",color:"text-primary",children:"Switch to the desired chain in your wallet to add it to your channel."}),e.jsx(j,{onClick:()=>s(h),children:"Change Network"})]})},L=({alaisDetails:a})=>{const{userPushSDKInstance:s}=H(c=>c.user),{account:r,chainId:o}=P(),{mutate:h,isPending:g}=F(),{values:n}=_(),i=parseInt(n.chainId),{data:x,refetch:y}=W((a==null?void 0:a.channel)||""),l=n.alias,u=Z(),w=B(),m=x==null?void 0:x.aliases.find(c=>c.alias_blockchain_id===n.chainId&&c.is_alias_verified),f=m?"Channel already exists on this chain.":r!==l?"Incorrect address. Connect using the correct address to proceed.":"",I=()=>!(!m&&o===i&&r===l),v=()=>{h({userPushSDKInstance:s,channelAddress:(a==null?void 0:a.channel)??""},{onSuccess:()=>{u.showMessageToast({toastTitle:"Success",toastMessage:"Verification Successful",toastType:"SUCCESS",getToastIcon:c=>e.jsx(re,{size:c,color:"green"})}),y(),w(`${b.ChannelDashboard}/${r}}`)},onError:c=>{c&&u.showMessageToast({toastTitle:"Error",toastMessage:c.message,toastType:"ERROR",getToastIcon:S=>e.jsx(G,{size:S,color:"red"})})}})};return e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing-xl",width:"100%",alignItems:"center",children:[f&&e.jsx(t,{width:"100%",children:e.jsx(A,{variant:"error",heading:f,showIcon:!0,onAction:m?()=>w(`${b.ChannelDashboard}/${r}}`):void 0,actionText:m?"Back to Home":void 0})}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing-sm",children:[e.jsxs(p,{variant:"bs-semibold",textAlign:"center",color:"text-primary",children:["You\u2019re almost there!",e.jsx("br",{})," Verify the address on the new chain to send notifications."]}),e.jsx(Y,{disabled:!0,value:l})]}),e.jsx(j,{disabled:I(),onClick:v,loading:g,children:g?"Verifying":"Verify New Address"})]})},O=()=>{const[a,s]=C.useState("newaddress"),[r,o]=C.useState(["newaddress"]),[h,g]=C.useState(!0),n=Z(),{mutate:i,isPending:x,isError:y}=K(),{userPushSDKInstance:l}=H(d=>d.user),{account:u,chainId:w,switchChain:m}=P(),{data:f}=W(u),{data:I}=le({alias:u,aliasChain:ge[w]}),v=B();C.useEffect(()=>{g(l&&(l==null?void 0:l.readmode()))},[l]);const c=(d,ae)=>{o(["newaddress"]),i({userPushSDKInstance:l,alias:he(d,parseInt(ae))},{onSuccess:()=>{S("changenetwork")},onError:U=>{U&&n.showMessageToast({toastTitle:"Error",toastMessage:U.message,toastType:"ERROR",getToastIcon:se=>e.jsx(G,{size:se,color:"red"})})}})},S=d=>{o([...new Set([...r,d])]),s(d)},ee=()=>{v(f?`${b.ChannelDashboard}/${u}}`:b.WelcomeDashboard),g(!1)};return e.jsx($,{onSubmit:d=>c(d.alias,d.chainId),children:e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing-sm",alignItems:"center",children:[e.jsxs(t,{width:{dp:"648px",ml:"357px"},display:"flex",flexDirection:"column",alignItems:"center",margin:{ml:"spacing-lg spacing-md spacing-none spacing-md",dp:"spacing-lg spacing-none spacing-none spacing-none"},padding:{dp:"spacing-lg",ml:"spacing-sm"},gap:"spacing-lg",borderRadius:"radius-lg",backgroundColor:"surface-primary",children:[e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing-xxxs",children:[e.jsx(p,{color:"text-primary",variant:"h3-semibold",display:{ml:"none",initial:"block"},children:"Add New Chain to Channel"}),e.jsx(p,{color:"text-primary",variant:"h4-semibold",display:{ml:"block",initial:"none"},children:"Add New Chain to Channel"}),e.jsx(p,{color:"text-tertiary",variant:"bs-regular",display:{ml:"none",initial:"block"},children:"Add an alias chain to your channel to enable notifications to that chain."}),e.jsx(p,{display:{ml:"block",initial:"none"},color:"text-tertiary",variant:"bes-regular",children:"Add an alias chain to your channel to enable notifications to that chain."})]}),w!==k.coreContractChain&&r.length===1?e.jsxs(e.Fragment,{children:[e.jsx(t,{display:"flex",padding:"spacing-md",flexDirection:"column",gap:"spacing-sm",alignSelf:"stretch",alignItems:"flex-start",borderRadius:"radius-sm",backgroundColor:"surface-secondary",children:e.jsx(p,{textAlign:"center",color:"text-brand-medium",variant:"h5-semibold",children:"Please change your network to Ethereum to proceed."})}),e.jsx(j,{onClick:()=>m(k.coreContractChain),children:"Change Network"})]}):f||I?e.jsxs(e.Fragment,{children:[e.jsx(t,{width:"100%",children:e.jsx(ue,{steps:R,completedSteps:r,setActiveStepKey:d=>s(d)})}),a==="newaddress"&&e.jsx(q,{isLoading:x&&!y,channelDetails:f}),a==="changenetwork"&&e.jsx(z,{handleNextStep:S}),a==="verifyalias"&&e.jsx(L,{alaisDetails:I})]}):e.jsxs(e.Fragment,{children:[e.jsx(A,{variant:"error",showIcon:!0,heading:"User does not have a channel on Push. Create a channel to proceed."}),e.jsx(j,{onClick:()=>v(b.CreateChannel),children:"Create Channel"})]}),h&&e.jsx(t,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:oe`
                z-index: 99999;
              `,children:e.jsx(ce,{type:de.MODAL,showConnectModal:!0,onClose:ee,description:"Unlock your profile to proceed."})})]}),e.jsx(t,{margin:"spacing-none spacing-md",children:e.jsx(p,{color:"text-tertiary",variant:"c-semibold",children:"Tip: Please do not exit the process before the address is verified. If you leave, you will need to start over."})})]})})},X=()=>e.jsx(Se,{children:e.jsx(O,{})})});export{De as __tla,X as default};
