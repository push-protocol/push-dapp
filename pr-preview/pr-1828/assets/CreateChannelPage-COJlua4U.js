import{dY as o,dZ as i,d_ as _,d$ as m,e0 as h,e1 as t,e2 as f,e3 as u,e4 as d,__tla as p}from"./index-CWATc5SK.js";import{C as y,__tla as C}from"./ContentLayout-_MyshW35.js";import{C as x,__tla as j}from"./CreateChannel-CRe7Xx4E.js";import{__tla as g}from"./Stepper-MTFBGwF5.js";import{__tla as D}from"./ImportPushTokenMessage-BrWk3Aec.js";import{__tla as E}from"./useMutation-CNjXtMzM.js";import{__tla as S}from"./PushTokenContractHelper-D9lx5T4P.js";import{__tla as $}from"./index.esm-CuTRccy8.js";import"./Common.form-LPxQflxb.js";let l,L=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return S}catch{}})(),(()=>{try{return $}catch{}})()]).then(async()=>{l=()=>{const{account:a,isWalletConnected:s,connect:n}=o(),c=i();_.useEffect(()=>{s||n()},[a]);const{channelDetails:r,loadingChannelDetails:e}=m();return _.useEffect(()=>{r&&!e&&c(`${h.ChannelDashboard}/${a}`)},[r]),e?t.jsx(f,{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:t.jsx(u,{type:d.SEAMLESS,title:"Loading Channel Details. Please wait..."})}):t.jsx(y,{children:t.jsx(x,{})})}});export{L as __tla,l as default};