import{e7 as $,e8 as B,e9 as G,b2 as e,bj as H,b3 as o,dQ as P,dO as J,bW as f,aZ as K,b0 as m,bq as u,bZ as R,cV as V,a_ as q,d5 as F,dN as X,b1 as ee,cY as z,a$ as ae,br as se,dU as ne,dV as ie,__tla as te}from"./index-pmR1DyNh.js";import{u as O,__tla as re}from"./useMutation-9xiR_-ZB.js";import{S as le,__tla as oe}from"./Stepper-C5t5enU2.js";import{g as ce,__tla as de}from"./Common.utils-D6cBaakH.js";import{c as he,a as L,u as ue,F as pe,b as xe,__tla as ge}from"./index.esm-CkmgTcE3.js";import{C as me,__tla as fe}from"./ContentLayout-Bwtz6kzk.js";let Y,ye=Promise.all([(()=>{try{return te}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return fe}catch{}})()]).then(async()=>{let y,b,j,w,I,_,S,v,C,k,p,A,D,T,E;y=a=>a,b=a=>a,j=({userPushSDKInstance:a,alias:n})=>a.channel.alias.initiate(n).then(y),w=({userPushSDKInstance:a,alias:n})=>a.channel.alias.verify(n).then(b),I=()=>O({mutationKey:[$],mutationFn:j}),_=()=>O({mutationKey:[B],mutationFn:w}),S=[{label:"New Address",value:"newaddress"},{label:"Change Network",value:"changenetwork"},{label:"Verify Alias Chain",value:"verifyalias"}],v=a=>G(a),C=he().shape({alias:L().required("Address is required").test("is-valid-address","Invalid wallet address",v),chainId:L().required("ChainId is required")}),k=({children:a,onSubmit:n})=>{const i=ue({initialValues:{alias:"",chainId:"11155111"},validationSchema:C,onSubmit:n});return e.jsx(pe,{value:i,children:a})},p=()=>{const a=xe();if(!a)throw new Error("useChainAliasFormikContext must be used within a FormikChainAliasProvider");return a},A=({isLoading:a})=>{const n=ce(H.allowedNetworks),{values:i,handleSubmit:c,handleChange:l,errors:t,touched:s}=p();return e.jsx(o,{width:"100%",children:e.jsx("form",{onSubmit:c,children:e.jsxs(o,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",gap:"spacing-xl",children:[e.jsxs(o,{display:"flex",flexDirection:{ml:"column",dp:"row"},gap:"spacing-xs",alignItems:"flex-start",width:"100%",children:[e.jsx(P,{label:"Your Address on New Chain",description:"Make sure you own this alias as verification will take place.",value:i.alias,onChange:l("alias"),error:(s==null?void 0:s.alias)&&!!(t!=null&&t.alias),errorMessage:s!=null&&s.alias?t==null?void 0:t.alias:""}),e.jsx(o,{display:"flex",alignSelf:"center",width:{dp:"auto",ml:"100%"},margin:"spacing-xxxs spacing-none spacing-none spacing-none",children:e.jsx(J,{options:n,value:i.chainId,onSelect:l("chainId"),error:(s==null?void 0:s.chainId)&&!!(t!=null&&t.chainId),errorMessage:s!=null&&s.chainId?t.chainId:""})})]}),e.jsx(f,{disabled:!i.alias||a,variant:"primary",children:a?"Initiating":"Add"})]})})})},D=({handleNextStep:a})=>{const{switchChain:n,chainId:i}=K(),{values:c}=p(),l=parseInt(c.chainId);return m.useEffect(()=>{i===l&&a("verifyalias")},[i]),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignItems:"center",children:[e.jsx(u,{variant:"bs-semibold",color:"text-primary",children:"Switch to the desired chain in your wallet to add it to your channel."}),e.jsx(f,{onClick:()=>n(l),children:"Change Network"})]})},T=()=>{const{userPushSDKInstance:a}=R(d=>d.user),{mutate:n,isPending:i}=_(),{values:c}=p(),l=V(),t=q(),s=parseInt(c.chainId),x=c.alias,h=()=>{n({userPushSDKInstance:a,alias:F(x,s)},{onSuccess:()=>{l.showMessageToast({toastTitle:"Success",toastMessage:"Verification Successful",toastType:"SUCCESS",getToastIcon:d=>e.jsx(X,{size:d,color:"green"})}),t(ee.Dashboard)},onError:d=>{d&&l.showMessageToast({toastTitle:"Error",toastMessage:d.message,toastType:"ERROR",getToastIcon:g=>e.jsx(z,{size:g,color:"red"})})}})};return e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignItems:"center",children:[e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing-sm",children:[e.jsxs(u,{variant:"bs-semibold",textAlign:"center",color:"text-primary",children:["You\u2019re almost there!",e.jsx("br",{})," Verify the address on the new chain to send notifications."]}),e.jsx(P,{disabled:!0,value:x})]}),e.jsx(f,{onClick:h,disabled:i,children:i?"Verifying":"Verify New Address"})]})},E=()=>{const[a,n]=m.useState("newaddress"),[i,c]=m.useState(["newaddress"]),l=V(),{mutate:t,isPending:s,isError:x}=I(),{userPushSDKInstance:h}=R(r=>r.user),{account:d}=K(),{data:g}=ae(d),U=q();m.useEffect(()=>{g||U("/channels")},[g]);const Z=(r,Q)=>{t({userPushSDKInstance:h,alias:F(r,parseInt(Q))},{onSuccess:()=>{N("changenetwork")},onError:M=>{M&&l.showMessageToast({toastTitle:"Error",toastMessage:M.message,toastType:"ERROR",getToastIcon:W=>e.jsx(z,{size:W,color:"red"})})}})},N=r=>{c([...new Set([...i,r])]),n(r)};return e.jsx(k,{onSubmit:r=>Z(r.alias,r.chainId),children:e.jsxs(o,{display:"flex",flexDirection:"column",alignItems:"center",margin:{ml:"spacing-lg spacing-md",dp:"spacing-lg spacing-none spacing-none spacing-none"},padding:{dp:"spacing-lg",ml:"spacing-sm"},gap:"spacing-lg",borderRadius:"radius-lg",backgroundColor:"surface-primary",children:[e.jsxs(o,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing-xxxs",children:[e.jsx(u,{color:"text-primary",variant:"h3-semibold",display:{ml:"none",dp:"block"},children:"Add New Chain to Channel"}),e.jsx(u,{color:"text-primary",variant:"h4-semibold",display:{ml:"block",dp:"none"},children:"Add New Chain to Channel"}),e.jsx(u,{color:"text-tertiary",variant:"bs-regular",display:{ml:"none",dp:"block"},children:"Add an alias chain to your channel to enable notifications to that chain."}),e.jsx(u,{display:{ml:"block",dp:"none"},color:"text-tertiary",variant:"bes-regular",children:"Add an alias chain to your channel to enable notifications to that chain."})]}),e.jsx(le,{steps:S,completedSteps:i,setActiveStepKey:r=>n(r)}),a==="newaddress"&&e.jsx(A,{isLoading:s&&!x}),a==="changenetwork"&&e.jsx(D,{handleNextStep:N}),a==="verifyalias"&&e.jsx(T,{}),h&&(h==null?void 0:h.readmode())&&e.jsx(o,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:se`
              z-index: 99999;
            `,children:e.jsx(ne,{type:ie.MODAL,showConnectModal:!0})})]})})},Y=()=>e.jsx(me,{children:e.jsx(E,{})})});export{ye as __tla,Y as default};
