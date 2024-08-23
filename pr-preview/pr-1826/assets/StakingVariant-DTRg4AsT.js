import{u as L,__tla as H}from"./useMutation-DTNvpBJ1.js";import{b1 as e,br as O,bj as I,bk as v,bl as B,d6 as D,bi as M,cn as R,b2 as s,d7 as l,bq as n,bY as U,d8 as A,d9 as E,da as F,co as N,aY as Y,a_ as j,db as z,__tla as G}from"./index-C8zcvIb_.js";import{g as K,m as q,__tla as W}from"./PushTokenContractHelper-ITveOoUx.js";let _,P,J=Promise.all([(()=>{try{return H}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return W}catch{}})()]).then(async()=>{let y,f,k;y=i=>{const{svgProps:o,...r}=i;return e.jsx(O,{componentName:"Swap",icon:e.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:[e.jsx("path",{d:"M13.25 5L5 13.25H27",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M18.75 27L27 18.75H5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),...r})},f=async i=>{const{noOfTokenToApprove:o,signer:r}=i;return(await new I(v.pushToken,B.pushToken,r).approve(v.epnscore,o)).wait()},P=()=>L({mutationKey:[D],mutationFn:f}),k=({noOfPushTokensToCheck:i,mintPushToken:o,mintingPush:r,loadingBalance:t})=>{const a=M.appEnv==="prod",{isModalOpen:c,showModal:x,ModalComponent:u}=R();return e.jsxs(s,{display:"flex",padding:"spacing-sm spacing-md",backgroundColor:"surface-brand-subtle",borderRadius:"radius-none radius-none radius-sm radius-sm",justifyContent:"space-between",alignItems:"center",flexDirection:{ml:"column",initial:"row"},gap:"spacing-xs",children:[e.jsx(l,{isLoading:r||t,children:e.jsx(n,{variant:"c-regular",color:"text-primary",children:a?"Your balance is low. Swap to get PUSH Tokens.":"Follow these steps to get Testnet PUSH."})}),a?e.jsx(U,{size:"extraSmall",leadingIcon:e.jsx(y,{}),onClick:x,children:"Swap PUSH Token"}):e.jsxs(s,{display:"flex",gap:"spacing-xs",children:[e.jsx(l,{isLoading:r||t,children:e.jsx(A,{to:E,target:"_blank",children:e.jsxs(s,{display:"flex",gap:"spacing-xxs",alignItems:"baseline",color:"text-brand-medium",cursor:"pointer",children:[e.jsx(s,{border:"border-sm solid stroke-brand-medium",width:"16px",height:"15px",borderRadius:"radius-xl",display:"flex",justifyContent:"center",color:"text-brand-medium",children:e.jsx(n,{variant:"c-regular",color:"text-brand-medium",children:"1"})}),e.jsx(n,{color:"text-brand-medium",children:"Sepolia ETH Faucet"})]})})}),e.jsx(l,{isLoading:r||t,children:e.jsxs(s,{display:"flex",gap:"spacing-xxs",alignItems:"baseline",color:"text-brand-medium",cursor:"pointer",onClick:()=>o(1e3),children:[e.jsx(s,{border:"border-sm solid stroke-brand-medium",width:"16px",height:"15px",borderRadius:"radius-xl",display:"flex",justifyContent:"center",children:e.jsx(n,{variant:"c-regular",color:"text-brand-medium",children:"2"})}),e.jsx(n,{color:"text-brand-medium",children:"Get Testnet Push"})]})})]}),c&&e.jsx(u,{InnerComponent:F,InnerComponentProps:{defaultPushTokenAmount:i},modalPadding:"0px",modalPosition:N.ON_ROOT})]})},_=({fees:i,pushApprovalAmount:o,title:r,description:t,balance:a=0,setBalance:c=()=>{},showFaucet:x=!1,showBalance:u=!1})=>{const{provider:m,account:p}=Y(),[d,w]=j.useState(!1),[T,h]=j.useState(!1),C=async()=>{w(!0);const b=await K({address:p,provider:m});w(!1),c(b)};j.useEffect(()=>{!p||!m||C()},[a,p]);const S=async b=>{h(!0);try{const g=await q({noOfTokens:b,provider:m,account:p});h(!1),c(g)}catch(g){console.log("Error >>",g),h(!1)}};return e.jsx(s,{display:"flex",flexDirection:"column",gap:"spacing-sm",width:"-webkit-fill-available",children:e.jsxs(s,{display:"flex",flexDirection:"column",alignSelf:"stretch",children:[e.jsxs(s,{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"surface-secondary",borderRadius:a<i?"radius-sm radius-sm radius-none radius-none":"radius-sm",padding:"spacing-sm spacing-md",alignItems:"center",children:[e.jsx(l,{isLoading:d,children:e.jsxs(s,{width:{initial:"inherit",ml:"200px"},children:[e.jsx(n,{variant:"h4-semibold",color:"text-primary",display:{ml:"none",dp:"block"},children:r}),e.jsx(n,{variant:"h5-semibold",color:"text-primary",display:{ml:"block",dp:"none"},children:r}),e.jsx(n,{variant:"c-regular",color:"text-tertiary",display:{ml:"none",dp:"block"},children:t}),e.jsx(n,{variant:"c-regular",color:"text-tertiary",display:{ml:"block",dp:"none"},children:t})]})}),e.jsxs(s,{display:"flex",children:[!!o&&o>=i&&e.jsx(z,{color:"icon-brand-medium",size:24}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing-xxxs",children:[e.jsxs(l,{isLoading:d,children:[e.jsxs(n,{variant:"h4-semibold",color:"text-brand-medium",display:{ml:"none",dp:"block"},children:[i," PUSH"]}),e.jsxs(n,{variant:"h5-semibold",color:"text-brand-medium",display:{ml:"block",dp:"none"},children:[i," PUSH"]})]}),e.jsx(l,{isLoading:d,children:u&&e.jsxs(n,{variant:"bes-semibold",color:"text-tertiary",children:["Balance: ",a==null?void 0:a.toLocaleString()]})})]})]})]}),!d&&a<i&&x&&e.jsx(k,{mintPushToken:S,noOfPushTokensToCheck:50,mintingPush:T,loadingBalance:d})]})})}});export{_ as S,J as __tla,P as u};
