import{u as L,__tla as H}from"./useMutation-CEj9URYZ.js";import{cv as e,cX as O,cR as B,cS as v,cT as I,hB as R,cQ as D,gR as E,cw as n,hC as l,cW as s,gp as F,hD as M,hE as U,hF as A,gS as N,cq as z,cs as b,hG as G,__tla as K}from"./index-C8uskVBT.js";import{g as Q,m as W,__tla as q}from"./PushTokenContractHelper-Cc1y9MAp.js";let T,_,X=Promise.all([(()=>{try{return H}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return q}catch{}})()]).then(async()=>{let y,f,k;y=i=>{const{svgProps:o,...r}=i;return e.jsx(O,{componentName:"Swap",icon:e.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:[e.jsx("path",{d:"M13.25 5L5 13.25H27",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M18.75 27L27 18.75H5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),...r})},f=async i=>{const{noOfTokenToApprove:o,signer:r}=i;return(await new B(v.pushToken,I.pushToken,r).approve(v.epnscore,o)).wait()},_=()=>L({mutationKey:[R],mutationFn:f}),k=({noOfPushTokensToCheck:i,mintPushToken:o,mintingPush:r,loadingBalance:t})=>{const a=D.appEnv==="prod",{isModalOpen:d,showModal:p,ModalComponent:u}=E();return e.jsxs(n,{display:"flex",padding:"spacing-sm spacing-md",backgroundColor:"surface-brand-subtle",borderRadius:"radius-none radius-none radius-sm radius-sm",justifyContent:"space-between",alignItems:"center",flexDirection:{ml:"column",initial:"row"},gap:"spacing-xs",children:[e.jsx(l,{isLoading:r||t,children:e.jsx(s,{variant:"c-regular",color:"text-primary",children:a?"Your balance is low. Swap to get PUSH Tokens.":"Follow these steps to get Testnet PUSH."})}),a?e.jsx(F,{size:"extraSmall",leadingIcon:e.jsx(y,{}),onClick:p,children:"Swap PUSH Token"}):e.jsxs(n,{display:"flex",gap:"spacing-xs",children:[e.jsx(l,{isLoading:r||t,children:e.jsx(M,{to:U,target:"_blank",children:e.jsxs(n,{display:"flex",gap:"spacing-xxs",alignItems:"baseline",color:"text-brand-medium",cursor:"pointer",children:[e.jsx(n,{border:"border-sm solid stroke-brand-medium",width:"16px",height:"15px",borderRadius:"radius-xl",display:"flex",justifyContent:"center",color:"text-brand-medium",children:e.jsx(s,{variant:"c-regular",color:"text-brand-medium",children:"1"})}),e.jsx(s,{color:"text-brand-medium",children:"Sepolia ETH Faucet"})]})})}),e.jsx(l,{isLoading:r||t,children:e.jsxs(n,{display:"flex",gap:"spacing-xxs",alignItems:"baseline",color:"text-brand-medium",cursor:"pointer",onClick:()=>o(1e3),children:[e.jsx(n,{border:"border-sm solid stroke-brand-medium",width:"16px",height:"15px",borderRadius:"radius-xl",display:"flex",justifyContent:"center",children:e.jsx(s,{variant:"c-regular",color:"text-brand-medium",children:"2"})}),e.jsx(s,{color:"text-brand-medium",children:"Get Testnet Push"})]})})]}),d&&e.jsx(u,{InnerComponent:A,InnerComponentProps:{defaultPushTokenAmount:i},modalPadding:"0px",modalPosition:N.ON_ROOT})]})},T=({fees:i,pushApprovalAmount:o,title:r,description:t,balance:a=0,setBalance:d=()=>{},showFaucet:p=!1,showBalance:u=!1})=>{const{provider:h,account:x}=z(),[c,w]=b.useState(!1),[P,m]=b.useState(!1),S=async()=>{w(!0);const g=await Q({address:x,provider:h});w(!1),d(g)};b.useEffect(()=>{!x||!h||S()},[a,x]);const C=async g=>{m(!0);try{const j=await W({noOfTokens:g,provider:h,account:x});m(!1),d(j)}catch(j){console.log("Error >>",j),m(!1)}};return e.jsx(n,{display:"flex",flexDirection:"column",gap:"spacing-sm",width:"-webkit-fill-available",children:e.jsxs(n,{display:"flex",flexDirection:"column",alignSelf:"stretch",children:[e.jsxs(n,{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"surface-secondary",borderRadius:a<i?"radius-sm radius-sm radius-none radius-none":"radius-sm",padding:"spacing-sm spacing-md",alignItems:"center",children:[e.jsx(l,{isLoading:c,children:e.jsxs(n,{width:{initial:"inherit",ml:"200px"},children:[e.jsx(s,{variant:"h4-semibold",color:"text-primary",display:{ml:"none",initial:"block"},children:r}),e.jsx(s,{variant:"h5-semibold",color:"text-primary",display:{ml:"block",initial:"none"},children:r}),e.jsx(s,{variant:"c-regular",color:"text-tertiary",display:{ml:"none",initial:"block"},children:t}),e.jsx(s,{variant:"c-regular",color:"text-tertiary",display:{ml:"block",initial:"none"},children:t})]})}),e.jsxs(n,{display:"flex",children:[!!o&&o>=i&&e.jsx(G,{color:"icon-brand-medium",size:24}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing-xxxs",children:[e.jsxs(l,{isLoading:c,children:[e.jsxs(s,{variant:"h4-semibold",color:"text-brand-medium",display:{ml:"none",initial:"block"},children:[i," PUSH"]}),e.jsxs(s,{variant:"h5-semibold",color:"text-brand-medium",display:{ml:"block",initial:"none"},children:[i," PUSH"]})]}),e.jsx(l,{isLoading:c,children:u&&e.jsxs(s,{variant:"bes-semibold",color:"text-tertiary",children:["Balance: ",a==null?void 0:a.toLocaleString()]})})]})]})]}),!c&&a<i&&p&&e.jsx(k,{mintPushToken:C,noOfPushTokensToCheck:50,mintingPush:P,loadingBalance:c})]})})}});export{T as S,X as __tla,_ as u};