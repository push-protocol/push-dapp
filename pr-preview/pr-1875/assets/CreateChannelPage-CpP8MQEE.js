import{dY as o,dZ as i,d_ as _,d$ as m,e0 as h,e1 as t,e2 as f,e3 as u,e4 as p,__tla as d}from"./index-BZmdvrlc.js";import{C as y,__tla as C}from"./ContentLayout-BU7JLwI9.js";import{C as x,__tla as j}from"./CreateChannel-80d_sHuJ.js";import{__tla as g}from"./Stepper-BWV9xvmN.js";import{__tla as D}from"./StakingVariant-CDdMtw6p.js";import{__tla as E}from"./useMutation-Dk6A35Zf.js";import{__tla as S}from"./PushTokenContractHelper-DAV9cM5Y.js";import{__tla as $}from"./index.esm-LDExghJQ.js";import"./Common.form-iMV6nXze.js";import{__tla as L}from"./ImportPushTokenMessage-cfnuXwMi.js";let l,P=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return S}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return L}catch{}})()]).then(async()=>{l=()=>{const{account:a,isWalletConnected:s,connect:n}=o(),c=i();_.useEffect(()=>{s||n()},[a]);const{channelDetails:r,loadingChannelDetails:e}=m();return _.useEffect(()=>{r&&!e&&c(`${h.ChannelDashboard}/${a}`)},[r]),e?t.jsx(f,{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:t.jsx(u,{type:p.SEAMLESS,title:"Loading Channel Details. Please wait..."})}):t.jsx(y,{children:t.jsx(x,{})})}});export{P as __tla,l as default};