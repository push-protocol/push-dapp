import{aY as i,aZ as m,a_ as h,a$ as f,b0 as _,b1 as u,b2 as a,b3 as p,b4 as y,b5 as d,__tla as g}from"./index-pmR1DyNh.js";import{C as b,__tla as x}from"./ContentLayout-Bwtz6kzk.js";import{C,__tla as j}from"./ChannelDashboard-CPk4szts.js";import"./_Uint8Array-DoJxpxb2.js";import{__tla as D}from"./ErrorFilled-CNkEaGVj.js";import{__tla as E}from"./ImportPushTokenMessage-D6G1U2se.js";import{__tla as I}from"./PushTokenContractHelper-ezb5XHjJ.js";import{__tla as v}from"./useMutation-9xiR_-ZB.js";import{__tla as L}from"./index.esm-CkmgTcE3.js";import"./Common.form-LPxQflxb.js";import{__tla as S}from"./Cross-Cj60KpTg.js";import{__tla as P}from"./Copy-AQ-EizQx.js";import{__tla as $}from"./Add-DkQo0nSM.js";let l,w=Promise.all([(()=>{try{return g}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return I}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return S}catch{}})(),(()=>{try{return P}catch{}})(),(()=>{try{return $}catch{}})()]).then(async()=>{l=({channelID:A})=>{i();const{account:n}=m(),s=h(),{data:t,isLoading:c,refetch:o,isRefetching:r}=f(n);if(console.log("Getting vhannel details in dashboard",t,r),_.useEffect(()=>{t||s(`${u.CreateChannel}`)},[t]),_.useEffect(()=>{let e;return console.log("channelDetails && !channelDetails.name",t&&!t.name),t&&!t.name&&(e=setInterval(()=>{o()},3e3)),()=>{clearInterval(e)}},[t,t==null?void 0:t.name]),c||r||!(t!=null&&t.name))return a.jsx(p,{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:a.jsx(y,{type:d.SEAMLESS,title:"Loading Channel Details. Please wait..."})});if(t!=null&&t.name)return a.jsx(b,{children:a.jsx(C,{})})}});export{w as __tla,l as default};
