import{dV as o,dW as i,dX as e,dY as m,dZ as h,d_ as t,d$ as f,e0 as d,e1 as u,__tla as p}from"./index-C29vdlfD.js";import{C as y,__tla as C}from"./ContentLayout-C1nw65Zk.js";import{C as x,__tla as j}from"./CreateChannel-CV9asxs5.js";import{__tla as g}from"./StakingVariant-DQIYsuDF.js";import{__tla as D}from"./Stepper-CQFc9I9G.js";import{__tla as E}from"./useGetChannelCategories-qRZLR8eO.js";import{__tla as S}from"./index.esm-C99ScU-D.js";import"./Common.form-Ds5bAxK4.js";import{__tla as L}from"./ImportPushTokenMessage-CpE9udP1.js";import{__tla as P}from"./ImageClipper-BOlVv0RF.js";let l,W=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return S}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return P}catch{}})()]).then(async()=>{l=()=>{const{account:a,isWalletConnected:s,connect:n}=o(),c=i();e.useEffect(()=>{s||n()},[a]);const{channelDetails:r,loadingChannelDetails:_}=m();return e.useEffect(()=>{r&&!_&&c(`${h.ChannelDashboard(a)}`)},[r]),_?t.jsx(f,{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:t.jsx(d,{type:u.SEAMLESS,title:"Loading Channel Details. Please wait..."})}):t.jsx(y,{children:t.jsx(x,{})})}});export{W as __tla,l as default};
