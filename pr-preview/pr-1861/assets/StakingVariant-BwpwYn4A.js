import{u as F,__tla as M}from"./useMutation-BhDCgnik.js";import{e1 as e,em as N,fW as h,fX as c,fV as p,gd as z,e_ as b,ge as O,eg as G,fn as K,e2 as i,en as m,el as t,ep as V,gf as W,gg as X,gh as Y,fo as q,dY as J,d_ as j,gi as Q,__tla as Z}from"./index-Bhn10mo9.js";let H,L,A,I,T,B,v,E,$=Promise.all([(()=>{try{return M}catch{}})(),(()=>{try{return Z}catch{}})()]).then(async()=>{let S,P,C;S=n=>{const{svgProps:a,...s}=n;return e.jsx(N,{componentName:"Swap",icon:e.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("path",{d:"M13.25 5L5 13.25H27",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M18.75 27L27 18.75H5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),...s})},P=async n=>{const{noOfTokenToApprove:a,signer:s}=n;return(await new h(c.pushToken,p.pushToken,s).approve(c.epnscore,a)).wait()},E=()=>F({mutationKey:[z],mutationFn:P}),L=async({address:n,provider:a,contractAddress:s})=>{try{const o=await new h(c.pushToken,p.pushToken,a).allowance(n,s);return b(o.toString())}catch(o){console.error(o.message)}},A=async({address:n,provider:a,noOfPushTokensToCheck:s})=>{try{const o=await new h(c.pushToken,p.pushToken,a).balanceOf(n);return+b(o.toString())>=s}catch(o){console.error(o.message)}},T=async({address:n,provider:a})=>{try{const s=await new h(c.pushToken,p.pushToken,a).balanceOf(n);return+b(s.toString())}catch(s){console.error(s.message)}},I=async({signer:n,contractAddress:a,amount:s})=>{try{const o=new h(c.pushToken,p.pushToken,n),r=O(s.toString(),18);return await(await o.approve(a,r)).wait(),!0}catch(o){throw console.error(o),o}},B=async()=>{try{const n="Ethereum Push Notification Service";return await window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:c.pushToken,symbol:"PUSH",decimals:18}}}),!0}catch(n){throw console.error(n),n}},v=async({noOfTokens:n,provider:a,account:s})=>{try{var o=a.getSigner(s);let l=new h(c.pushToken,p.pushToken,o);console.info({pushTokenContract:l}),console.info(1);const d=O(n.toString(),18);console.info(d);var r=l.mint(d);console.info(3);const u=await r;return console.info(u),await a.waitForTransaction(u.hash),console.info(4),console.info("Transaction Completed"),n}catch(l){return console.error(l),0}},C=({noOfPushTokensToCheck:n,mintPushToken:a,mintingPush:s,loadingBalance:o})=>{const r=G.appEnv==="prod",{isModalOpen:l,showModal:d,ModalComponent:u}=K();return e.jsxs(i,{display:"flex",padding:"spacing-sm spacing-md",backgroundColor:"surface-brand-subtle",borderRadius:"radius-none radius-none radius-sm radius-sm",justifyContent:"space-between",alignItems:"center",flexDirection:{ml:"column",initial:"row"},gap:"spacing-xs",children:[e.jsx(m,{isLoading:s||o,children:e.jsx(t,{variant:"c-regular",color:"text-primary",children:r?"Your balance is low. Swap to get PUSH Tokens.":"Follow these steps to get Testnet PUSH."})}),r?e.jsx(V,{size:"extraSmall",leadingIcon:e.jsx(S,{}),onClick:d,children:"Swap PUSH Token"}):e.jsxs(i,{display:"flex",gap:"spacing-xs",children:[e.jsx(m,{isLoading:s||o,children:e.jsx(W,{to:X,target:"_blank",children:e.jsxs(i,{display:"flex",gap:"spacing-xxs",alignItems:"baseline",color:"text-brand-medium",cursor:"pointer",children:[e.jsx(i,{border:"border-sm solid stroke-brand-medium",width:"16px",height:"15px",borderRadius:"radius-xl",display:"flex",justifyContent:"center",color:"text-brand-medium",children:e.jsx(t,{variant:"c-regular",color:"text-brand-medium",children:"1"})}),e.jsx(t,{color:"text-brand-medium",children:"Sepolia ETH Faucet"})]})})}),e.jsx(m,{isLoading:s||o,children:e.jsxs(i,{display:"flex",gap:"spacing-xxs",alignItems:"baseline",color:"text-brand-medium",cursor:"pointer",onClick:()=>a(1e3),children:[e.jsx(i,{border:"border-sm solid stroke-brand-medium",width:"16px",height:"15px",borderRadius:"radius-xl",display:"flex",justifyContent:"center",children:e.jsx(t,{variant:"c-regular",color:"text-brand-medium",children:"2"})}),e.jsx(t,{color:"text-brand-medium",children:"Get Testnet Push"})]})})]}),l&&e.jsx(u,{InnerComponent:Y,InnerComponentProps:{defaultPushTokenAmount:n},modalPadding:"0px",modalPosition:q.ON_ROOT})]})},H=({fees:n,pushApprovalAmount:a,title:s,description:o,balance:r=0,setBalance:l=()=>{},showFaucet:d=!1,showBalance:u=!1})=>{const{provider:f,account:g}=J(),[x,_]=j.useState(!1),[R,w]=j.useState(!1),U=async()=>{_(!0);const k=await T({address:g,provider:f});_(!1),l(k)};j.useEffect(()=>{!g||!f||U()},[r,g]);const D=async k=>{w(!0);try{const y=await v({noOfTokens:k,provider:f,account:g});w(!1),l(y)}catch(y){console.log("Error >>",y),w(!1)}};return e.jsx(i,{display:"flex",flexDirection:"column",gap:"spacing-sm",width:"-webkit-fill-available",children:e.jsxs(i,{display:"flex",flexDirection:"column",alignSelf:"stretch",children:[e.jsxs(i,{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"surface-secondary",borderRadius:r<n?"radius-sm radius-sm radius-none radius-none":"radius-sm",padding:"spacing-sm spacing-md",alignItems:"center",children:[e.jsx(m,{isLoading:x,children:e.jsxs(i,{width:{initial:"inherit",ml:"200px"},children:[e.jsx(t,{variant:"h4-semibold",color:"text-primary",display:{ml:"none",initial:"block"},children:s}),e.jsx(t,{variant:"h5-semibold",color:"text-primary",display:{ml:"block",initial:"none"},children:s}),e.jsx(t,{variant:"c-regular",color:"text-tertiary",display:{ml:"none",initial:"block"},children:o}),e.jsx(t,{variant:"c-regular",color:"text-tertiary",display:{ml:"block",initial:"none"},children:o})]})}),e.jsxs(i,{display:"flex",children:[!!a&&a>=n&&e.jsx(Q,{color:"icon-brand-medium",size:24}),e.jsxs(i,{display:"flex",flexDirection:"column",gap:"spacing-xxxs",children:[e.jsxs(m,{isLoading:x,children:[e.jsxs(t,{variant:"h4-semibold",color:"text-brand-medium",display:{ml:"none",initial:"block"},children:[n," PUSH"]}),e.jsxs(t,{variant:"h5-semibold",color:"text-brand-medium",display:{ml:"block",initial:"none"},children:[n," PUSH"]})]}),e.jsx(m,{isLoading:x,children:u&&e.jsxs(t,{variant:"bes-semibold",color:"text-tertiary",children:["Balance: ",r==null?void 0:r.toLocaleString()]})})]})]})]}),!x&&r<n&&d&&e.jsx(C,{mintPushToken:D,noOfPushTokensToCheck:50,mintingPush:R,loadingBalance:x})]})})}});export{H as S,$ as __tla,L as a,A as b,I as c,T as g,B as i,v as m,E as u};
