import{dY as o,dZ as i,d_ as _,d$ as m,e0 as h,e1 as t,e2 as f,e3 as u,e4 as p,__tla as d}from"./index-Di-5xBRn.js";import{C as y,__tla as C}from"./ContentLayout-C8xxgXwC.js";import{C as x,__tla as j}from"./CreateChannel-CwW8NNZH.js";import{__tla as g}from"./StakingVariant-CDXzDstZ.js";import{__tla as D}from"./useMutation-DP-pyt6D.js";import{__tla as E}from"./Stepper-B9XtZ2TZ.js";import{__tla as S}from"./useGetChannelCategories-BAE-J1WX.js";import{__tla as L}from"./index.esm-SRfCKLTy.js";import"./Common.form-Ds5bAxK4.js";import{__tla as P}from"./ImportPushTokenMessage-nPJDiMDh.js";let l,$=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return S}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return P}catch{}})()]).then(async()=>{l=()=>{const{account:a,isWalletConnected:s,connect:n}=o(),c=i();_.useEffect(()=>{s||n()},[a]);const{channelDetails:r,loadingChannelDetails:e}=m();return _.useEffect(()=>{r&&!e&&c(`${h.ChannelDashboard(a)}`)},[r]),e?t.jsx(f,{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:t.jsx(u,{type:p.SEAMLESS,title:"Loading Channel Details. Please wait..."})}):t.jsx(y,{children:t.jsx(x,{})})}});export{$ as __tla,l as default};
