import{dV as o,dW as i,dX as e,dY as m,dZ as h,d_ as t,d$ as f,e0 as u,e1 as d,__tla as p}from"./index-BRwDlXEy.js";import{C as y,__tla as C}from"./ContentLayout-Bd1VwTGH.js";import{C as x,__tla as j}from"./CreateChannel-BToemwTF.js";import{__tla as g}from"./StakingVariant-C3VzctSV.js";import{__tla as D}from"./useMutation-BI_Hh3vn.js";import{__tla as E}from"./Stepper-DNmb__R6.js";import{__tla as S}from"./useGetChannelCategories-DiG9tQ81.js";import{__tla as L}from"./index.esm-Dk_9Ejq8.js";import"./Common.form-Ds5bAxK4.js";import{__tla as P}from"./ImportPushTokenMessage-CXah2tAL.js";import{__tla as W}from"./ImageClipper-BNhIFt5Y.js";let l,$=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return S}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return P}catch{}})(),(()=>{try{return W}catch{}})()]).then(async()=>{l=()=>{const{account:a,isWalletConnected:s,connect:n}=o(),c=i();e.useEffect(()=>{s||n()},[a]);const{channelDetails:r,loadingChannelDetails:_}=m();return e.useEffect(()=>{r&&!_&&c(`${h.ChannelDashboard(a)}`)},[r]),_?t.jsx(f,{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:t.jsx(u,{type:d.SEAMLESS,title:"Loading Channel Details. Please wait..."})}):t.jsx(y,{children:t.jsx(x,{})})}});export{$ as __tla,l as default};
