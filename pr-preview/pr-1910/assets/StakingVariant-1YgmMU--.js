import{u as L,__tla as H}from"./useMutation-BhDERXdM.js";import{e1 as e,er as O,ej as I,ek as v,el as B,g8 as D,ei as M,fo as R,e2 as n,g9 as l,eq as s,eY as U,ga as A,gb as E,gc as F,fp as N,dY as Y,d_ as b,gd as z,__tla as G}from"./index-ClHCzr3e.js";import{g as K,m as q,__tla as W}from"./PushTokenContractHelper-kTn640fN.js";let _,P,J=Promise.all([(()=>{try{return H}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return W}catch{}})()]).then(async()=>{let f,y,k;f=i=>{const{svgProps:o,...r}=i;return e.jsx(O,{componentName:"Swap",icon:e.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:[e.jsx("path",{d:"M13.25 5L5 13.25H27",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M18.75 27L27 18.75H5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),...r})},y=async i=>{const{noOfTokenToApprove:o,signer:r}=i;return(await new I(v.pushToken,B.pushToken,r).approve(v.epnscore,o)).wait()},P=()=>L({mutationKey:[D],mutationFn:y}),k=({noOfPushTokensToCheck:i,mintPushToken:o,mintingPush:r,loadingBalance:t})=>{const a=M.appEnv==="prod",{isModalOpen:c,showModal:p,ModalComponent:u}=R();return e.jsxs(n,{display:"flex",padding:"spacing-sm spacing-md",backgroundColor:"surface-brand-subtle",borderRadius:"radius-none radius-none radius-sm radius-sm",justifyContent:"space-between",alignItems:"center",flexDirection:{ml:"column",initial:"row"},gap:"spacing-xs",children:[e.jsx(l,{isLoading:r||t,children:e.jsx(s,{variant:"c-regular",color:"text-primary",children:a?"Your balance is low. Swap to get PUSH Tokens.":"Follow these steps to get Testnet PUSH."})}),a?e.jsx(U,{size:"extraSmall",leadingIcon:e.jsx(f,{}),onClick:p,children:"Swap PUSH Token"}):e.jsxs(n,{display:"flex",gap:"spacing-xs",children:[e.jsx(l,{isLoading:r||t,children:e.jsx(A,{to:E,target:"_blank",children:e.jsxs(n,{display:"flex",gap:"spacing-xxs",alignItems:"baseline",color:"text-brand-medium",cursor:"pointer",children:[e.jsx(n,{border:"border-sm solid stroke-brand-medium",width:"16px",height:"15px",borderRadius:"radius-xl",display:"flex",justifyContent:"center",color:"text-brand-medium",children:e.jsx(s,{variant:"c-regular",color:"text-brand-medium",children:"1"})}),e.jsx(s,{color:"text-brand-medium",children:"Sepolia ETH Faucet"})]})})}),e.jsx(l,{isLoading:r||t,children:e.jsxs(n,{display:"flex",gap:"spacing-xxs",alignItems:"baseline",color:"text-brand-medium",cursor:"pointer",onClick:()=>o(1e3),children:[e.jsx(n,{border:"border-sm solid stroke-brand-medium",width:"16px",height:"15px",borderRadius:"radius-xl",display:"flex",justifyContent:"center",children:e.jsx(s,{variant:"c-regular",color:"text-brand-medium",children:"2"})}),e.jsx(s,{color:"text-brand-medium",children:"Get Testnet Push"})]})})]}),c&&e.jsx(u,{InnerComponent:F,InnerComponentProps:{defaultPushTokenAmount:i},modalPadding:"0px",modalPosition:N.ON_ROOT})]})},_=({fees:i,pushApprovalAmount:o,title:r,description:t,balance:a=0,setBalance:c=()=>{},showFaucet:p=!1,showBalance:u=!1})=>{const{provider:m,account:x}=Y(),[d,w]=b.useState(!1),[T,h]=b.useState(!1),C=async()=>{w(!0);const g=await K({address:x,provider:m});w(!1),c(g)};b.useEffect(()=>{!x||!m||C()},[a,x]);const S=async g=>{h(!0);try{const j=await q({noOfTokens:g,provider:m,account:x});h(!1),c(j)}catch(j){console.log("Error >>",j),h(!1)}};return e.jsx(n,{display:"flex",flexDirection:"column",gap:"spacing-sm",width:"-webkit-fill-available",children:e.jsxs(n,{display:"flex",flexDirection:"column",alignSelf:"stretch",children:[e.jsxs(n,{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"surface-secondary",borderRadius:a<i?"radius-sm radius-sm radius-none radius-none":"radius-sm",padding:"spacing-sm spacing-md",alignItems:"center",children:[e.jsx(l,{isLoading:d,children:e.jsxs(n,{width:{initial:"inherit",ml:"200px"},children:[e.jsx(s,{variant:"h4-semibold",color:"text-primary",display:{ml:"none",initial:"block"},children:r}),e.jsx(s,{variant:"h5-semibold",color:"text-primary",display:{ml:"block",initial:"none"},children:r}),e.jsx(s,{variant:"c-regular",color:"text-tertiary",display:{ml:"none",initial:"block"},children:t}),e.jsx(s,{variant:"c-regular",color:"text-tertiary",display:{ml:"block",initial:"none"},children:t})]})}),e.jsxs(n,{display:"flex",children:[!!o&&o>=i&&e.jsx(z,{color:"icon-brand-medium",size:24}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing-xxxs",children:[e.jsxs(l,{isLoading:d,children:[e.jsxs(s,{variant:"h4-semibold",color:"text-brand-medium",display:{ml:"none",initial:"block"},children:[i," PUSH"]}),e.jsxs(s,{variant:"h5-semibold",color:"text-brand-medium",display:{ml:"block",initial:"none"},children:[i," PUSH"]})]}),e.jsx(l,{isLoading:d,children:u&&e.jsxs(s,{variant:"bes-semibold",color:"text-tertiary",children:["Balance: ",a==null?void 0:a.toLocaleString()]})})]})]})]}),!d&&a<i&&p&&e.jsx(k,{mintPushToken:S,noOfPushTokensToCheck:50,mintingPush:T,loadingBalance:d})]})})}});export{_ as S,J as __tla,P as u};
