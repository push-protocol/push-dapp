import{aY as o,aZ as i,a_ as _,a$ as m,b0 as h,b1 as t,b2 as f,b3 as u,b4 as p,__tla as y}from"./index-COtUxmek.js";import{C as d,__tla as x}from"./ContentLayout-BkfG5eVg.js";import{C,__tla as b}from"./CreateChannel-DO32OL6t.js";import{__tla as j}from"./Stepper-MAXo_H3n.js";import{__tla as g}from"./ImportPushTokenMessage-B0ZsnHHR.js";import{__tla as D}from"./useMutation-Cst03QPp.js";import{__tla as E}from"./PushTokenContractHelper-hi1Htm6c.js";import{__tla as S}from"./index.esm-EOjRXuPp.js";import"./Common.form-LPxQflxb.js";let l,$=Promise.all([(()=>{try{return y}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return b}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return S}catch{}})()]).then(async()=>{l=()=>{const{account:a,isWalletConnected:s,connect:n}=o(),c=i();_.useEffect(()=>{s||n()},[a]);const{channelDetails:r,loadingChannelDetails:e}=m();return _.useEffect(()=>{r&&!e&&c(`${h.ChannelDashboard}/${a}`)},[r]),e?t.jsx(f,{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:t.jsx(u,{type:p.SEAMLESS,title:"Loading Channel Details. Please wait..."})}):t.jsx(d,{children:t.jsx(C,{})})}});export{$ as __tla,l as default};
