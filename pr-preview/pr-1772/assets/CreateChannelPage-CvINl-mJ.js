import{cq as o,cr as i,cs as e,ct as m,cu as h,cv as t,cw as f,cx as u,cy as p,__tla as y}from"./index-DYUgkmoC.js";import{C as d,__tla as x}from"./ContentLayout-C9UQLdmf.js";import{C,__tla as j}from"./CreateChannel-Dvgf0MS4.js";import{__tla as g}from"./Stepper-DnlXVO3R.js";import{__tla as D}from"./StakingVariant-CNM18SqI.js";import{__tla as E}from"./useMutation-C5Qht-_Y.js";import{__tla as S}from"./PushTokenContractHelper-PdBhPHrn.js";import{__tla as v}from"./index.esm-D2Ufvr_S.js";import"./Common.form-iMV6nXze.js";import{__tla as w}from"./ImportPushTokenMessage-tEGDXt7W.js";let c,L=Promise.all([(()=>{try{return y}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return S}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return w}catch{}})()]).then(async()=>{c=()=>{const{account:a,isWalletConnected:l,connect:s}=o(),n=i();e.useEffect(()=>{l||s()},[a]);const{channelDetails:r,loadingChannelDetails:_}=m();return e.useEffect(()=>{r&&!_&&n(`${h.ChannelDashboard}/${a}`)},[r]),_?t.jsx(f,{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:t.jsx(u,{type:p.SEAMLESS,title:"Loading Channel Details. Please wait..."})}):t.jsx(d,{children:t.jsx(C,{})})}});export{L as __tla,c as default};