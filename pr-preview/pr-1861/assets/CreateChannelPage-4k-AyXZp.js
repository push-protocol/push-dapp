import{dY as o,dZ as i,d_ as e,d$ as m,e0 as h,e1 as t,e2 as f,e3 as u,e4 as p,__tla as y}from"./index-Bhn10mo9.js";import{C as d,__tla as C}from"./ContentLayout-BvTFjhws.js";import{C as x,__tla as j}from"./CreateChannel-Bz_Dxdaw.js";import{__tla as g}from"./StakingVariant-BwpwYn4A.js";import{__tla as D}from"./useMutation-BhDCgnik.js";import{__tla as E}from"./Stepper-sGgzq3OS.js";import{__tla as S}from"./IpfsHelper-DgdN2Uz-.js";import"./browser-Cr_ZWWON.js";import{__tla as L}from"./useGetChannelCategories-DUPTSdIt.js";import{__tla as P}from"./index.esm-ZA5riEy9.js";import"./Common.form-Ds5bAxK4.js";import{__tla as $}from"./ImportPushTokenMessage-C4HolomC.js";let l,b=Promise.all([(()=>{try{return y}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return S}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return P}catch{}})(),(()=>{try{return $}catch{}})()]).then(async()=>{l=()=>{const{account:a,isWalletConnected:s,connect:n}=o(),c=i();e.useEffect(()=>{s||n()},[a]);const{channelDetails:r,loadingChannelDetails:_}=m();return e.useEffect(()=>{r&&!_&&c(`${h.ChannelDashboard(a)}`)},[r]),_?t.jsx(f,{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:t.jsx(u,{type:p.SEAMLESS,title:"Loading Channel Details. Please wait..."})}):t.jsx(d,{children:t.jsx(x,{})})}});export{b as __tla,l as default};
