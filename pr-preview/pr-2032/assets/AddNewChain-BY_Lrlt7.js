import{fW as W,h6 as ie,h7 as te,eh as k,d_ as e,gO as re,d$ as t,gn as T,go as Y,gp as le,ep as w,dV as P,dX as C,e2 as p,eR as B,gz as H,g6 as X,dW as Z,dZ as b,gP as oe,g8 as G,gS as ce,e3 as de,gb as he,gT as ge,__tla as xe}from"./index-SVBZTWc1.js";import{S as pe,__tla as ue}from"./Stepper-ChU4yIva.js";import{c as me,a as J,u as fe,F as ye,b as je,__tla as we}from"./index.esm-CK2JbSbj.js";import{i as Ce,__tla as be}from"./ValidationHelper-KLsaYgmR.js";import{U as Ie,a as ve,__tla as _e}from"./UnlockProfileWrapper-BeHIfhhi.js";import{C as Se,__tla as ke}from"./ContentLayout-C4eqGqWK.js";let Q,De=Promise.all([(()=>{try{return xe}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return ke}catch{}})()]).then(async()=>{let E,M,N,K,R,F,V,D,z,O,I,$,q,L,U;E=a=>a,M=a=>a,N=({userPushSDKInstance:a,alias:s})=>a.channel.alias.initiate(s).then(E),K=({userPushSDKInstance:a,channelAddress:s})=>a.channel.alias.verify(s).then(M),R=()=>W({mutationKey:[ie],mutationFn:N}),F=()=>W({mutationKey:[te],mutationFn:K}),V=[{label:"New Address",value:"newaddress"},{label:"Change Network",value:"changenetwork"},{label:"Verify Alias Chain",value:"verifyalias"}],D=k.allowedNetworks.filter(a=>a!=k.coreContractChain),z=me().shape({alias:J().required("Address is required").test("is-valid-address","Invalid wallet address",Ce),chainId:J().required("ChainId is required")}),O=({children:a,onSubmit:s})=>{const r=fe({initialValues:{alias:"",chainId:D[0].toString()},validationSchema:z,onSubmit:s});return e.jsx(ye,{value:r,children:a})},I=()=>{const a=je();if(!a)throw new Error("useChainAliasFormikContext must be used within a FormikChainAliasProvider");return a},$=({isLoading:a,channelDetails:s})=>{const r=re(D),{values:o,handleSubmit:h,handleChange:g,errors:n,touched:i}=I(),x=s==null?void 0:s.aliases.find(l=>l.alias_blockchain_id===o.chainId&&l.is_alias_verified),y=()=>!(!x&&o.alias);return e.jsxs(t,{width:"100%",display:"flex",flexDirection:"column",gap:"spacing-lg",children:[x&&e.jsx(T,{variant:"error",heading:"Channel already exists on this chain. Select a different chain to proceed.",showIcon:!0}),e.jsx("form",{onSubmit:h,children:e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",gap:"spacing-xl",children:[e.jsxs(t,{display:"flex",flexDirection:{ml:"column",dp:"row"},gap:"spacing-xs",alignItems:"flex-start",width:"100%",children:[e.jsx(t,{width:{dp:"60%",ml:"100%"},children:e.jsx(Y,{label:"Your Address on New Chain",description:"Make sure you own this alias as verification will take place.",value:o.alias,onChange:g("alias"),error:(i==null?void 0:i.alias)&&!!(n!=null&&n.alias),errorMessage:i!=null&&i.alias?n==null?void 0:n.alias:""})}),e.jsx(t,{display:"flex",alignSelf:"center",width:{dp:"auto",ml:"100%"},margin:"spacing-none spacing-none spacing-xxxs spacing-none",children:e.jsx(le,{options:r,value:o.chainId,onSelect:g("chainId"),error:(i==null?void 0:i.chainId)&&!!(n!=null&&n.chainId),errorMessage:i!=null&&i.chainId?n.chainId:""})})]}),e.jsx(w,{disabled:y(),variant:"primary",loading:a,children:a?"Adding new chain":"Add"})]})})]})},q=({handleNextStep:a})=>{const{switchChain:s,chainId:r}=P(),{values:o}=I(),h=parseInt(o.chainId);return C.useEffect(()=>{r===h&&a("verifyalias")},[r]),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignItems:"center",children:[e.jsx(p,{variant:"bs-semibold",color:"text-primary",children:"Switch to the desired chain in your wallet to add it to your channel."}),e.jsx(w,{onClick:()=>s(h),children:"Change Network"})]})},L=({alaisDetails:a})=>{const{userPushSDKInstance:s}=B(c=>c.user),{account:r,chainId:o}=P(),{mutate:h,isPending:g}=F(),{values:n}=I(),i=parseInt(n.chainId),{data:x,refetch:y}=H((a==null?void 0:a.channel)||""),l=n.alias,u=X(),j=Z(),m=x==null?void 0:x.aliases.find(c=>c.alias_blockchain_id===n.chainId&&c.is_alias_verified),f=m?"Channel already exists on this chain.":r!==l?"Incorrect address. Connect using the correct address to proceed.":"",v=()=>!(!m&&o===i&&r===l),_=()=>{h({userPushSDKInstance:s,channelAddress:(a==null?void 0:a.channel)??""},{onSuccess:()=>{u.showMessageToast({toastTitle:"Success",toastMessage:"Verification Successful",toastType:"SUCCESS",getToastIcon:c=>e.jsx(oe,{size:c,color:"green"})}),y(),j(`${b.ChannelDashboard(r)}`)},onError:c=>{c&&u.showMessageToast({toastTitle:"Error",toastMessage:c.message,toastType:"ERROR",getToastIcon:S=>e.jsx(G,{size:S,color:"red"})})}})};return e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing-xl",width:"100%",alignItems:"center",children:[f&&e.jsx(t,{width:"100%",children:e.jsx(T,{variant:"error",heading:f,showIcon:!0,onAction:m?()=>j(`${b.ChannelDashboard(r)}`):void 0,actionText:m?"Back to Home":void 0})}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing-sm",children:[e.jsxs(p,{variant:"bs-semibold",textAlign:"center",color:"text-primary",children:["You\u2019re almost there!",e.jsx("br",{})," Verify the address on the new chain to send notifications."]}),e.jsx(Y,{disabled:!0,value:l})]}),e.jsx(w,{disabled:v(),onClick:_,loading:g,children:g?"Verifying":"Verify New Address"})]})},U=()=>{const[a,s]=C.useState("newaddress"),[r,o]=C.useState(["newaddress"]),[h,g]=C.useState(!0),n=X(),{mutate:i,isPending:x,isError:y}=R(),{userPushSDKInstance:l}=B(d=>d.user),{account:u,chainId:j,switchChain:m}=P(),{data:f}=H(u),{data:v}=ce({alias:u,aliasChain:ge[j]}),_=Z();C.useEffect(()=>{g(l&&(l==null?void 0:l.readmode()))},[l]);const c=(d,ae)=>{o(["newaddress"]),i({userPushSDKInstance:l,alias:he(d,parseInt(ae))},{onSuccess:()=>{S("changenetwork")},onError:A=>{if(A){const se=/user rejected transaction/i.test(A.message);n.showMessageToast({toastTitle:"Error",toastMessage:se?"Transaction rejected by user.":A.message,toastType:"ERROR",getToastIcon:ne=>e.jsx(G,{size:ne,color:"red"})})}}})},S=d=>{o([...new Set([...r,d])]),s(d)},ee=()=>{_(f?`${b.ChannelDashboard(u)}}`:b.WelcomeDashboard),g(!1)};return e.jsx(O,{onSubmit:d=>c(d.alias,d.chainId),children:e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing-sm",alignItems:"center",children:[e.jsxs(t,{width:{dp:"648px",ml:"357px"},display:"flex",flexDirection:"column",alignItems:"center",margin:{ml:"spacing-lg spacing-md spacing-none spacing-md",dp:"spacing-lg spacing-none spacing-none spacing-none"},padding:{dp:"spacing-lg",ml:"spacing-sm"},gap:"spacing-lg",borderRadius:"radius-lg",backgroundColor:"surface-primary",children:[e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing-xxxs",children:[e.jsx(p,{color:"text-primary",variant:"h3-semibold",display:{ml:"none",initial:"block"},children:"Add New Chain to Channel"}),e.jsx(p,{color:"text-primary",variant:"h4-semibold",display:{ml:"block",initial:"none"},children:"Add New Chain to Channel"}),e.jsx(p,{color:"text-tertiary",variant:"bs-regular",display:{ml:"none",initial:"block"},children:"Add an alias chain to your channel to enable notifications to that chain."}),e.jsx(p,{display:{ml:"block",initial:"none"},color:"text-tertiary",variant:"bes-regular",children:"Add an alias chain to your channel to enable notifications to that chain."})]}),j!==k.coreContractChain&&r.length===1?e.jsxs(e.Fragment,{children:[e.jsx(t,{display:"flex",padding:"spacing-md",flexDirection:"column",gap:"spacing-sm",alignSelf:"stretch",alignItems:"flex-start",borderRadius:"radius-sm",backgroundColor:"surface-secondary",children:e.jsx(p,{textAlign:"center",color:"text-brand-medium",variant:"h5-semibold",children:"Please change your network to Ethereum to proceed."})}),e.jsx(w,{onClick:()=>m(k.coreContractChain),children:"Change Network"})]}):f||v?e.jsxs(e.Fragment,{children:[e.jsx(t,{width:"100%",children:e.jsx(pe,{steps:V,completedSteps:r,setActiveStepKey:d=>s(d)})}),a==="newaddress"&&e.jsx($,{isLoading:x&&!y,channelDetails:f}),a==="changenetwork"&&e.jsx(q,{handleNextStep:S}),a==="verifyalias"&&e.jsx(L,{alaisDetails:v})]}):e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"error",showIcon:!0,heading:"User does not have a channel on Push. Create a channel to proceed."}),e.jsx(w,{onClick:()=>_(b.CreateChannel),children:"Create Channel"})]}),h&&e.jsx(t,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:de`
                z-index: 99999;
              `,children:e.jsx(Ie,{type:ve.MODAL,showConnectModal:!0,onClose:ee,description:"Unlock your profile to proceed."})})]}),e.jsx(t,{margin:"spacing-none spacing-md",children:e.jsx(p,{color:"text-tertiary",variant:"c-semibold",children:"Tip: Please do not exit the process before the address is verified. If you leave, you will need to start over."})})]})})},Q=()=>e.jsx(Se,{children:e.jsx(U,{})})});export{De as __tla,Q as default};
