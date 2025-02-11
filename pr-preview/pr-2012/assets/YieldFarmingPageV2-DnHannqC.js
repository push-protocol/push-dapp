var Ls=Object.defineProperty;var Ns=(fe,we,Ee)=>we in fe?Ls(fe,we,{enumerable:!0,configurable:!0,writable:!0,value:Ee}):fe[we]=Ee;var he=(fe,we,Ee)=>Ns(fe,typeof we!="symbol"?we+"":we,Ee);import{eu as I,fE as p,eb as ce,d_ as e,fX as Vs,hi as Rt,eT as b,hj as L,e7 as a,dV as Ce,dX as n,ga as Ae,e2 as We,fP as be,eW as ge,fT as c,fS as T,fd as oe,fW as ye,eV as Oe,e0 as re,e1 as le,f1 as _e,hk as $s,fh as pt,gc as N,fD as C,fC as y,gR as pe,gb as vt,e9 as Ge,fO as Bs,fg as Ft,hl as xt,hm as Hs,em as ae,hn as Ws,g0 as Os,fi as Ye,fj as Ke,d$ as Je,fG as Mt,fm as Ut,fn as At,eX as xe,e_ as Xe,ho as Re,eS as _s,eZ as Ze,__tla as Gs}from"./index-TcVMqmjB.js";import{n as Z,f as _,b as Ys,__tla as Ks}from"./StakingHelper-BKtpagxs.js";import{C as Js,__tla as Xs}from"./ContentLayout-DBzh3fr-.js";let zt,Zs=Promise.all([(()=>{try{return Gs}catch{}})(),(()=>{try{return Ks}catch{}})(),(()=>{try{return Xs}catch{}})()]).then(async()=>{const fe=I.from(1).mul(I.from(10).pow(I.from(18))),we=3e4,Ee=35e3,dt=t=>t.mul(I.from(10).pow(I.from(18))),Pe=t=>t.div(I.from(10).pow(I.from(10))).toNumber()/1e8,ke=class ke{constructor(){he(this,"state",{account:null,signer:null,staking:null,yieldFarmingPUSH:null,yieldFarmingLP:null,rewardForCurrentEpochPush:null,rewardForCurrentEpochLP:null,genesisEpochAmountPUSH:we,deprecationPerEpochPUSH:100,genesisEpochAmountLP:Ee,deprecationPerEpochLP:100,uniswapV2Router02:null});he(this,"init",(s,i,l,o,r,g)=>{this.state.account=s,this.state.pushToken=i,this.state.staking=l,this.state.yieldFarmingPUSH=o,this.state.yieldFarmingLP=r,this.state.uniswapV2Router02=g});he(this,"getPoolStats",()=>new Promise(async(s,i)=>{const l=await this.state.yieldFarmingPUSH.getCurrentEpoch(),o=await this.state.uniswapV2Router02.getAmountsOut(fe.toString(),[p.pushToken,p.WETHAddress,p.USDTAddress]);let r;ce.coreContractChain===42||ce.coreContractChain===5?r=o[o.length-1].div(1e6).toNumber():r=o[o.length-1].toNumber()/1e6,console.debug("Push PRice",r);const g=Pe(await this.state.pushToken.balanceOf(p.uniV2LPToken)),x=Pe(await this.state.pushToken.attach(p.WETHAddress).balanceOf(p.uniV2LPToken)),d=await this.state.uniswapV2Router02.getAmountsOut(fe.toString(),[p.WETHAddress,p.USDTAddress]);let h;ce.coreContractChain===42||ce.coreContractChain===5?h=Pe(d[d.length-1]):h=d[d.length-1].toNumber()/1e6,console.debug("Eth Price",h);const R=Pe(await this.state.pushToken.attach(p.uniV2LPToken).totalSupply()),v=(g*r+x*h)/R/r;s({currentEpoch:l,lpToPushRatio:v})}));he(this,"getPUSHPoolStats",async()=>new Promise(async(s,i)=>{const l=this.state.yieldFarmingPUSH;let o=await l.NR_OF_EPOCHS();const r=await l.getCurrentEpoch();o=o.toString()>r.toString()?r:o;const g=dt(I.from(this.state.genesisEpochAmountPUSH)),x=dt(I.from(this.state.deprecationPerEpochPUSH)),d=this.calcTotalAmountPerEpoch(g,o,x);this.state.rewardForCurrentEpochPush=d;const h=await l.getPoolSize(r.add(1));s({currentEpochPUSH:r,totalEpochPUSH:o,poolBalance:h})}));he(this,"getLPPoolStats",async s=>new Promise(async(i,l)=>{const o=this.state.yieldFarmingLP;let r=await o.NR_OF_EPOCHS();const g=await o.getCurrentEpoch();r=r.toString()>g.toString()?g:r;const x=await o.getPoolSize(g.add(1));i({currentEpochPUSH:g,totalEpochPUSH:r,poolBalance:x})}));he(this,"getUserData",async s=>new Promise(async(i,l)=>{if(this.state.account){const o=await s.getCurrentEpoch().then(W=>I.from(Math.min(W,100))),r=await s.getCurrentEpoch(),g=await s.getEpochStake(this.state.account,r.add(1)),x=(await s.lastEpochIdHarvested(this.state.account)).toNumber();let d=this.getAccumulatedReward(o,s),h=this.getTotalAvailableRewards(x,o,s),[R,v]=await Promise.all([d,h]);i({epochStakeNext:g,totalAccumulatedReward:R,totalAvailableReward:v})}}));he(this,"getTotalAvailableRewards",async(s,i,l)=>{let o=[];for(var r=s+1;r<=i.toNumber();r++){const x=this.calculateUserEpochReward(r,l);o.push(x)}let g=(await Promise.all(o)).reduce((x,d)=>x+d,0);return g=g.toFixed(2),g});he(this,"getAccumulatedReward",async(s,i)=>{let l=[];for(var o=0;o<=s.toNumber();o++){const g=this.calculateUserEpochReward(o,i);l.push(g)}let r=(await Promise.all(l)).reduce((g,x)=>g+x,0);return r=r.toFixed(2),r});he(this,"calcTotalAmountPerEpoch",(s,i,l)=>s.sub(i.mul(l)));he(this,"calculateUserEpochReward",async(s,i)=>{const l=Pe(await i.getEpochStake(this.state.account,s)),o=Pe(await i.getPoolSize(s));let r=0;if(o>0)if(i.address==p.yieldFarmLP){const g=this.state.genesisEpochAmountLP,x=this.state.deprecationPerEpochLP,d=g-x*s;r=l/o*d}else{const g=this.state.genesisEpochAmountPUSH,x=this.state.deprecationPerEpochPUSH,d=g-x*s;r=l/o*d}return r})}static getInstance(){return ke.instance||(ke.instance=new ke),ke.instance}};he(ke,"instance",null);let Te=ke;const J=t=>e.jsx(Vs,{wrapperProps:{width:"100%",maxWidth:"none",minWidth:"auto",display:"flex",flex:"1",margin:t.margin?t.margin:"0"},placementProps:{background:"none",bottom:t.bottom?t.bottom:"25px",left:t.error?"40px":"0px"},tooltipContent:t.error?e.jsx(It,{title:t.ToolTipTitle,width:t.ToolTipWidth}):e.jsx(ct,{title:t.ToolTipTitle,body:t.ToolTipBody}),children:t.children}),It=t=>e.jsx(b,{width:t.width,background:"#131313",justifyContent:"flex-start",border:"1px solid rgba(173, 176, 190, 0.2)",alignItems:"flex-start",padding:"0.75rem 0.75rem 0.75rem 1rem",boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.05)",color:"#FFF",borderRadius:"2px 12px 12px 12px",children:e.jsx(L,{color:"inherit",children:t.title})}),ct=({title:t,body:s})=>e.jsxs(Dt,{children:[e.jsx(Lt,{children:t}),e.jsxs(Nt,{children:[s,"  "," ",s.includes("Push Fee Pool APR")&&e.jsx(Rt,{cursor:"pointer",href:"https://medium.com/push-protocol/new-push-yield-farming-rewards-full-details-4a9ff473226d",target:"_blank",children:"here"})]})]}),Dt=a(b)`
  box-sizing: border-box;
  width: 16rem;
  background: ${t=>t.theme.default.bg};
  justify-content: flex-start;
  border: 1px solid rgba(173, 176, 190, 0.2);
  align-items: flex-start;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius:1rem 1rem 1rem 0.125rem;

  @media (max-width:400px){
    width:16.75rem;
  }


`,Lt=a(L)`
  color: ${t=>t.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`,Nt=a(L)`
  color: ${t=>t.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
  text-align:left;
`,de="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15284_45077)'%3e%3cpath%20d='M8.5%2014.5C11.8137%2014.5%2014.5%2011.8137%2014.5%208.5C14.5%205.18629%2011.8137%202.5%208.5%202.5C5.18629%202.5%202.5%205.18629%202.5%208.5C2.5%2011.8137%205.18629%2014.5%208.5%2014.5Z'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%208C8.13261%208%208.25979%208.05268%208.35355%208.14645C8.44732%208.24021%208.5%208.36739%208.5%208.5V11C8.5%2011.1326%208.55268%2011.2598%208.64645%2011.3536C8.74021%2011.4473%208.86739%2011.5%209%2011.5'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.25%206.5C8.66421%206.5%209%206.16421%209%205.75C9%205.33579%208.66421%205%208.25%205C7.83579%205%207.5%205.33579%207.5%205.75C7.5%206.16421%207.83579%206.5%208.25%206.5Z'%20fill='%23797D8F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15284_45077'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",ht=({poolName:t,userData:s,PoolStats:i,poolAddress:l,getUserData:o,tokenAddress:r,setActiveTab:g})=>{const{account:x,provider:d,isWalletConnected:h,connect:R}=Ce(),[v,W]=n.useState(!1),[G,D]=n.useState(!1),[O,V]=n.useState(!1),[X,$]=n.useState(null),[Y,ie]=n.useState(null),[q,E]=n.useState(null),[B,F]=n.useState(0),m=Ae(),k=We(),K=async()=>{if(!h){R();return}if(!G){if((s==null?void 0:s.totalAvailableReward)==0){E("No Rewards to Claim"),D(!1);return}D(!0);var A=d.getSigner(x);new C(l,y.yieldFarming,A).massHarvest().then(async z=>{m.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await d.waitForTransaction(z.hash),m.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:w=>e.jsx(pe,{size:w,color:"green"})}),o(),D(!1)}catch(w){m.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${w.name}+ ")`,toastType:"ERROR",getToastIcon:P=>e.jsx(N,{size:P,color:"red"})}),D(!1)}}).catch(z=>{m.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:w=>e.jsx(N,{size:w,color:"red"})}),D(!1)})}},Q=async()=>{if(!h){R();return}if(v)return;W(!0);const A=_(s.epochStakeNext);if(A==0){ie("Nothing to unstake, Stake Now in new reward program."),W(!1);return}var z=d.getSigner(x);let w=new C(p.staking,y.staking,z);await w.balanceOf(x,r),w.withdraw(r,I.from(A).mul(I.from(10).pow(18))).then(async P=>{m.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await d.waitForTransaction(P.hash),m.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:u=>e.jsx(pe,{size:u,color:"green"})}),W(!1),o()}catch(u){console.error("Error",u),m.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${u.name}+ ")`,toastType:"ERROR",getToastIcon:f=>e.jsx(N,{size:f,color:"red"})}),W(!1)}}).catch(P=>{m.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Cancelled! ${P.message}`,toastType:"ERROR",getToastIcon:u=>e.jsx(N,{size:u,color:"red"})}),W(!1)})},me=async()=>{if(!h){R();return}if(O)return;let A=3;const z=_(s.epochStakeNext);if(z==0){m.showMessageToast({toastTitle:"Error",toastMessage:"Nothing to Withdraw!",toastType:"ERROR",getToastIcon:H=>e.jsx(N,{size:H,color:"red"})}),V(!1),$(null);return}var w=d.getSigner(x);let P=new C(p.staking,y.staking,w);const u=r===p.pushToken?p.pushCoreV2:p.stakingV2;var f=new C(r,y.pushToken,w);let j=await f.allowance(x,u),U=_(j);parseInt(U)>=parseInt(z)?(A=2,F(50)):(A=3,F(33)),V(!0),$(`Withdrawing 1/${A}`);let te;te=P.withdraw(r,I.from(z).mul(I.from(10).pow(18))),te.then(async H=>{if(m.showLoaderToast({loaderMessage:"Withdrawing! Please Wait..."}),await d.waitForTransaction(H.hash),m.showMessageToast({toastTitle:"Success",toastMessage:"Successfully withdrawn!",toastType:"SUCCESS",getToastIcon:ne=>e.jsx(pe,{size:ne,color:"green"})}),r===p.pushToken){var se=new C(r,y.pushToken,w);let ne=await se.allowance(x,p.pushCoreV2),ue=_(ne);parseInt(ue)>=parseInt(z)?ee(H,z,A):(H=se.approve(p.pushCoreV2,I.from(z).mul(I.from(10).pow(18))),$(`Approving 2/${A}`),F(66),H.then(async je=>{m.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await d.waitForTransaction(je.hash),m.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:Se=>e.jsx(pe,{size:Se,color:"green"})}),ee(je,z,A)}).catch(je=>{console.error("Error in approving 2",je),m.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:Se=>e.jsx(N,{size:Se,color:"red"})}),V(!1),$(null),o(),F(0)}))}else{var se=new C(r,y.pushToken,w);let ue=await se.allowance(x,p.stakingV2),je=_(ue);parseInt(je)>=parseInt(z)?M(H,z,A):(H=se.approve(p.stakingV2,I.from(z).mul(I.from(10).pow(18))),$(`Approving 2/${A}`),F(66),H.then(async Se=>{m.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await d.waitForTransaction(Se.hash),m.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:lt=>e.jsx(pe,{size:lt,color:"green"})}),M(Se,z,A)}).catch(Se=>{console.error("Error in approving",Se),m.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:lt=>e.jsx(N,{size:lt,color:"red"})}),V(!1),$(null),o(),F(0)}))}}).catch(H=>{console.error("Error in withdrawing: ",H),m.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Withdraw!",toastType:"ERROR",getToastIcon:se=>e.jsx(N,{size:se,color:"red"})}),V(!1),$(null),F(0)})},M=async(A,z,w)=>{if(!h){R();return}var P=d.getSigner(x),u=new C(p.stakingV2,y.stakingV2,P);$(`Staking ${w}/${w}`),F(100),A=u.deposit(r,I.from(z).mul(I.from(10).pow(18))),A.then(async f=>{m.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await d.waitForTransaction(f.hash),m.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!Successfully Deposited the UNI-V2 Token to V2 ",toastType:"SUCCESS",getToastIcon:j=>e.jsx(pe,{size:j,color:"green"})}),V(!1),o(),$(null),g(0)}).catch(f=>{console.error("Error in depositing: ",f),m.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit the Amount",toastType:"ERROR",getToastIcon:j=>e.jsx(N,{size:j,color:"red"})}),V(!1),o(),$(null),F(0)})},ee=async(A,z,w)=>{if(!h){R();return}var P=d.getSigner(x);let u=new C(p.pushCoreV2,y.pushCoreV2,P);$(`Staking ${w}/${w}`),F(100),A=u.stake(I.from(z).mul(I.from(10).pow(18))),A.then(async f=>{m.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await d.waitForTransaction(f.hash),m.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Successfully Deposited the Push Token to V2 ",toastType:"SUCCESS",getToastIcon:j=>e.jsx(pe,{size:j,color:"green"})}),V(!1),o(),$(null),g(0)}).catch(f=>{console.error("Error in depositing: ",f),m.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit Push Token",toastType:"ERROR",getToastIcon:j=>e.jsx(N,{size:j,color:"red"})}),V(!1),o(),$(null),F(0)})};n.useEffect(()=>{E(null),ie(null)},[x]);const S=be(600);return e.jsxs(Vt,{margin:t==="UNI-V2"?" 10px 0 10px 10px ":"  10px 10px 10px 0",children:[e.jsx(b,{margin:"0px 0px 20px 0",children:i?e.jsxs(e.Fragment,{children:[e.jsxs($t,{children:[t==="UNI-V2"?"Uniswap V2 Staking Pool":"PUSH Staking Pool ",e.jsx(Bt,{children:"Deprecated"})]}),e.jsxs(qe,{children:["Current APR"," ",e.jsx(ge,{color:"#D53A94",fontWeight:"600",children:"0%"})]})]}):e.jsxs(Fe,{padding:"15px 15px 0 15px",children:[e.jsx(c,{height:"15px",width:"234px",margin:"0 0 10px 0"}),e.jsx(c,{height:"15px",width:"112px"})]})}),e.jsxs(b,{children:[e.jsxs(Ot,{border:`1px solid ${k.stakingBorder}`,borderRadius:"16px",children:[e.jsx(b,{margin:S?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:S?" 7px":"10px",children:i?e.jsxs(e.Fragment,{children:[e.jsx(qe,{children:"Current Reward"}),e.jsx(L,{fontSize:S?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:"0 PUSH"})]}):e.jsxs(Fe,{padding:S?"0px":"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:S?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(c,{height:"12px",width:S?"65px":"100px}"})]})}),e.jsx(Ht,{width:"10px",height:"100%"}),e.jsx(b,{margin:S?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:S?" 7px":"10px",children:i?e.jsxs(e.Fragment,{children:[e.jsx(qe,{children:"Total Staked"}),e.jsxs(Wt,{fontSize:S?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[Z(_(i==null?void 0:i.poolBalance))," ",t=="UNI-V2"?"UNI-V2":"PUSH"]})]}):e.jsxs(Fe,{padding:S?"0px":"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:S?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(c,{height:"12px",width:S?"65px":"100px}"})]})})]}),e.jsx(T,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:i?e.jsxs(e.Fragment,{children:[e.jsx(gt,{padding:"0px 5px 0px 0px",children:"Current Epoch"}),e.jsx(gt,{margin:"0 0 0 5px",children:"100 / 100"})]}):e.jsx(Fe,{padding:"6px 0px 0 15px",children:e.jsx(c,{height:"17px",width:"124px"})})}),e.jsx(_t,{children:s?e.jsxs(b,{children:[e.jsxs(T,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(ze,{children:["User Deposit",e.jsx(Ie,{children:e.jsx(J,{ToolTipTitle:"User Deposited",ToolTipBody:`Amount of ${t} Token User Staked`,children:e.jsx(oe,{src:de,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(De,{children:[" ",_(s==null?void 0:s.epochStakeNext)," ",t=="UNI-V2"?"UNI-V2":"PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(ze,{children:["Rewards Claimed",e.jsx(Ie,{children:e.jsx(J,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(oe,{src:de,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(De,{children:[" ",Z(((s==null?void 0:s.totalAccumulatedReward)-(s==null?void 0:s.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(ze,{children:["Current Epoch Reward",e.jsx(Ie,{children:e.jsx(J,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(oe,{src:de,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsx(De,{children:"0 PUSH"})]}),e.jsxs(T,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(ze,{children:["Available for Claiming",e.jsx(Ie,{children:e.jsx(J,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(oe,{src:de,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(De,{children:[Z(s==null?void 0:s.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(ye,{padding:"16px 15px 16px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]})]})})]}),e.jsx(Gt,{padding:S?"0px ":"0px 14px",margin:"24px 0px 0px 0px",children:s?e.jsxs(e.Fragment,{children:[e.jsx(ut,{children:_(s==null?void 0:s.epochStakeNext)==="0"?e.jsx(J,{error:!0,ToolTipTitle:"Nothing to Withdraw, so you cannot Migrate.",ToolTipWidth:"16rem",bottom:"-50px",margin:"0 0 15px 0",children:e.jsx(ve,{border:"none",cursor:"default",background:k.disableButtonBg,color:k.disabledButtonText,children:e.jsx(mt,{children:!O&&X==null&&e.jsxs(Oe,{color:k.disabledButtonText,weight:"400",cursor:"default",children:["Migrate to ",t==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]})})})}):e.jsxs(Yt,{onClick:me,children:[e.jsx(Kt,{style:{width:`${B}%`}}),e.jsxs(mt,{children:[!O&&X==null&&e.jsxs(Oe,{color:"#FFF",weight:"400",cursor:"pointer",children:["Migrate to ",t==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]}),O&&X!=null&&e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:"#FFF",title:X,titleColor:"#FFF"})]})]})}),e.jsxs(ut,{children:[_(s==null?void 0:s.epochStakeNext)==="0"?e.jsx(J,{error:!0,ToolTipTitle:Y||"Nothing to unstake, Stake First",ToolTipWidth:"16rem",margin:"0 10px 0 0",bottom:"-30px",children:e.jsx(ve,{border:"none",cursor:"default",background:k.disableButtonBg,color:k.disabledButtonText,children:v?e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:k.activeButtonText,title:"Claiming",titleColor:k.activeButtonText}):` Unstake ${t}`})}):e.jsx(ve,{border:`1px solid ${k.activeButtonText}`,background:"transparent",color:k.activeButtonText,cursor:"pointer",margin:"0 10px 0 0",onClick:Q,children:v?e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:k.activeButtonText,title:"Unstaking",titleColor:k.activeButtonText}):` Unstake ${t}`}),(s==null?void 0:s.totalAvailableReward)==="0.00"?e.jsx(J,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,ToolTipWidth:"10rem",children:e.jsx(ve,{border:"none",cursor:"default",background:k.disableButtonBg,color:k.disabledButtonText,children:G?e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:k.activeButtonText,title:"Claiming",titleColor:k.activeButtonText}):" Claim Rewards"})}):e.jsx(ve,{border:`1px solid ${k.activeButtonText}`,background:"transparent",color:k.activeButtonText,cursor:"pointer",onClick:K,children:G?e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:k.activeButtonText,title:"Claiming",titleColor:k.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Fe,{width:"100%",children:[e.jsx(c,{height:"49px",width:"100%",margin:"0 0 11px 0"}),e.jsx(c,{height:"49px",width:"100%"})]})})]})},Vt=a(_e)`
  border: 1px solid ${t=>t.theme.stakingBorder};
  border-radius: 24px;
  padding: 24px 19px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  // min-height: 587px;
  color: ${t=>t.theme.stakingPrimaryText};
`,$t=a(L)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  display: flex;
  align-items: center;
  color: ${t=>t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 470px) {
    flex-direction: column;
  }
`,Bt=a(ge)`
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #d53a94;
  margin-left: 10px;
  padding: 2px 6px;
  background: #f3d7fa;
  border-radius: 6px;
  height: 17px;
`,qe=a.p`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Ht=a.div`
  width: 1px;
  height: 100%;
  background: ${t=>t.theme.stakingBorder};
`,ze=a.div`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${t=>t.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Wt=a(L)`
  color: ${t=>t.theme.stakingSecondaryText};
`,gt=a($s)`
  font-weight: 600;
  text-align: right;
  letter-spacing: normal;
  font-size: 16px;
  margin-left: 5px;
  line-height: 141%;
  color: ${t=>t.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,Ie=a(ge)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,Ot=a(T)`
  max-height: 108px;
  min-height: 108px;
  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,De=a(L)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${t=>t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,_t=a(b)`
  min-height: 150px;
`,Gt=a(b)`
  // min-height:132px;
`,ut=a.div`
  display: flex;
  width: 100%;
  // margin:15px 0px 0px 0px;
`;a(pt)`
  width: 100%;
  background: #d53a94;
  border: 1px solid #d53a94;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  line-height: 141%;
  flex-direction: row;
  letter-spacing: normal;
  color: #ffffff;
  cursor: pointer;
  & > div {
    display: block;
  }
`;const Yt=a(pt)`
  width: 100%;
  background: #d53a94;
  border: 1px solid #d53a94;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  line-height: 141%;
  flex-direction: row;
  letter-spacing: normal;
  color: #ffffff;
  cursor: pointer;
  justify-content: flex-start;
  margin: 0px 0px 15px 0px;
  min-height: 49px;
  position: relative;

  &:after {
    background: transparent;
  }

  & > div {
    display: block;
  }

  &:hover {
    opacity: 1;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,Kt=a.div`
  min-height: 37px;
  background-color: rgb(183, 46, 126);
  transition: width 0.5s ease 0s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,mt=a.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #eee;
`,ve=a(pt)`
  font-size: 16px;
  line-height: 19px;
  flex-direction: row;
  flex: 1;
  // width: 145px;
  height: 49px;
  padding: 12px;
  border-radius: 8px;
  & > div {
    display: block;
  }
  &:after {
    background: transparent;
  }

  &:hover {
    opacity: 1;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,Fe=a(ye)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,wt=({logo:t,title:s,body:i,setActiveTab:l})=>{const o=be(600);return e.jsxs(T,{style:{color:t==="announcement"?"white":"#333"},justifyContent:"stretch",padding:o?"12px":"16px",background:t==="announcement"?"linear-gradient(90deg, #121315 -2.55%, #2A2A39 32.62%, #8E317A 68.34%, #121315 102.97%)":"#FFF7DA",borderRadius:"16px",children:[e.jsx(oe,{width:t==="announcement"?"60px":"32px",height:t==="announcement"?"60px":"32px",src:vt(`svg/${t}.svg`),alt:"Announcement Logo"}),e.jsxs(b,{margin:t==="announcement"?"0 0 0 16px":"0 0 0 13px",justifyContent:"center",alignItems:"flex-start",gap:t==="announcement"?"4px":"0px",children:[e.jsx(L,{color:"inherit",fontSize:o?"20px":"24px",textAlign:"left",fontWeight:500,children:s}),e.jsxs(L,{color:"inherit",fontSize:o?"12px":"16px",textAlign:"left",fontWeight:500,children:[i," ",s.includes("New V2")&&e.jsxs(e.Fragment,{children:[e.jsx(Jt,{onClick:()=>l(1),children:"here"})," to migrate."]})]})]})]})},Jt=a(Rt)`
  cursor: pointer;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;ce.coreContractChain;const Xt=({setActiveTab:t})=>{const{account:s,provider:i}=Ce(),[l,o]=n.useState(null),[r,g]=n.useState(null),[x,d]=n.useState(null),[h,R]=n.useState(null),[v,W]=n.useState(null),[G,D]=n.useState(null),[O,V]=n.useState(null),[X,$]=n.useState(null),[Y,ie]=n.useState(null),[q,E]=n.useState(null),B=i==null?void 0:i.getSigner(s),F=n.useCallback(async()=>{const M=await Te.getInstance().getPoolStats();D({...M})},[l,r,x,h,v]),m=n.useCallback(async()=>{const M=await Te.getInstance().getPUSHPoolStats();V({...M})},[l,r,x,h,v]),k=n.useCallback(async M=>{const ee=await Te.getInstance().getLPPoolStats(M);$({...ee})},[l,r,x,h,v]),K=n.useCallback(async()=>{const M=await Te.getInstance().getUserData(h);ie({...M})},[h]),Q=n.useCallback(async()=>{const M=await Te.getInstance().getUserData(x);E({...M})},[x]);n.useEffect(()=>{let M=new C(p.pushToken,y.pushToken,B),ee=new C(p.staking,y.staking,B),S=new C(p.depYieldFarmPUSH,y.yieldFarming,B),A=new C(p.depYieldFarmLP,y.yieldFarming,B),z=new C(p.uniswapV2Router02,y.uniswapV2Router02,B);if(o(M),g(ee),R(S),d(A),W(z),B&&s){var w=i.getSigner(s);let P=new C(p.pushToken,y.pushToken,w),u=new C(p.staking,y.staking,w),f=new C(p.depYieldFarmPUSH,y.yieldFarming,w),j=new C(p.depYieldFarmLP,y.yieldFarming,w),U=new C(p.uniswapV2Router02,y.uniswapV2Router02,w);o(P),g(u),R(f),d(j),W(U)}},[s]),n.useEffect(()=>{l!=null&&r!=null&&h!=null&&(Te.getInstance().init(s,l,r,h,x,v),F())},[F]),n.useEffect(()=>{G&&me(G)},[G]);const me=async M=>{m(),k(M),K(),Q()};return e.jsxs(e.Fragment,{children:[e.jsx(wt,{logo:"WarningCircle",title:"This reward program (V1) has ended.",body:"To continue earning rewards please migrate to new pools.",setActiveTab:t}),e.jsxs(Zt,{children:[e.jsx(ht,{poolName:"PUSH",userData:Y,PoolStats:O,poolAddress:p.depYieldFarmPUSH,getUserData:K,getPoolStats:m,tokenAddress:p.pushToken,setActiveTab:t}),e.jsx(ht,{poolName:"UNI-V2",userData:q,PoolStats:X,poolAddress:p.depYieldFarmLP,getUserData:Q,getPoolStats:k,tokenAddress:p.uniV2LPToken,setActiveTab:t})]})]})},Zt=a(T)`
  @media (max-width: 1300px) {
    margin: auto;
    width: 75%;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
  }
`,qt=({poolStats:t})=>{function s(l){return l==null?void 0:l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const i=be(600);return e.jsx(Qt,{justifyContent:"stretch",children:t?e.jsxs(e.Fragment,{children:[e.jsx(ft,{fontSize:i?"16px":"18px",textAlign:"left",fontWeight:600,children:"Push Price"}),e.jsxs(T,{gap:"5px",justifyContent:"flex-end",children:[e.jsxs(ft,{fontSize:i?"18px ":"24px",textAlign:"left",fontWeight:600,children:["$",s(t==null?void 0:t.pushPrice.toFixed(2))]}),e.jsx(oe,{width:"25px",height:i?"20px":"27px",src:vt("svg/uniswapLogo.svg"),alt:"Uniswap Logo"})]})]}):e.jsxs(es,{children:[e.jsx(c,{height:"12px",width:"135px",margin:"10px 0 10px 0"}),e.jsx(c,{height:"12px",width:"135px",margin:"10px 0 10px 0"})]})})},Qt=a(T)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;

  border: 1px solid #bac4d6;
  border-color: ${t=>t.theme.default.borderColor};
  border-radius: 14px;

  @media (max-width: 600px) {
    padding: 7px 14px;
  }
`,ft=a(L)`
  color: ${t=>t.theme.stakingPrimaryText};
`,es=a(ye)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
  flex-direction: row;
  justify-content: inherit;
  flex: 1;
`,ts=({getLpPoolStats:t,poolStats:s,setPoolStats:i})=>{const[l,o]=Ge.useState(""),[r,g]=Ge.useState(),x=()=>{const h=s.epochEndTime,R=new Date().getTime()+h*1e3;g(R)};Ge.useEffect(()=>{s&&x()},[s]);const d=()=>{if(s!=null&&s.epochEndTimestamp){s.epochEndTimestamp.toNumber();const h=new Date().getTime(),R=r-h;R<0&&(i(null),t());const v=Math.floor(R/(1e3*60*60*24)),W=Math.floor(R%(1e3*60*60*24)/(1e3*60*60)),G=Math.floor(R%(1e3*60*60)/(1e3*60)),D=Math.floor(R%(1e3*60)/1e3);o(`${v}D ${W}H ${G}M ${D}S`)}};return Ge.useEffect(()=>{const h=setTimeout(()=>{d()},1e3);return()=>clearTimeout(h)}),e.jsxs(ss,{children:[e.jsxs(et,{alignItems:"baseline",justifyContent:"center",background:"linear-gradient(0deg, #7ADDB3, #7ADDB3), #FFFFFF",children:[e.jsx(tt,{background:"radial-gradient(70% 90% at 40% 16.25%, #7CDCB4 2.6%, #7ADDB3 53.65%, #E888F8 85.42%, #F99DEA 100%)"}),s?e.jsx(e.Fragment,{children:e.jsxs(at,{children:[e.jsx(st,{children:"Total Value Locked"}),e.jsx(it,{children:`$ ${Z(s==null?void 0:s.totalValueLocked.toFixed(2))}`})]})}):e.jsx(Qe,{})]}),e.jsxs(et,{alignItems:"baseline",justifyContent:"center",background:"#F58DF8",children:[e.jsx(tt,{background:"radial-gradient(70% 90% at 40% 16.25%, #F58DF8 2.6%, #F47EF8 53.65%, #A17DEF 85.42%, #AE68F4 100%)"}),s?e.jsx(e.Fragment,{children:e.jsxs(at,{children:[e.jsx(st,{children:"Push Rewards Given"}),e.jsxs(ot,{justifyContent:"end",children:[e.jsx(it,{children:Z(Math.min(_(s==null?void 0:s.pushRewardsDistributed),_(s==null?void 0:s.totalDistributedAmount)))}),e.jsxs(ge,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:["out of ",Z(_(s==null?void 0:s.totalDistributedAmount))]})]})]})}):e.jsx(Qe,{})]}),e.jsxs(et,{alignItems:"baseline",justifyContent:"center",background:"#A17DEF",children:[e.jsx(tt,{background:"radial-gradient(70% 90% at 40% 16.25%, #A17DEF 2.6%, #9770ED 53.65%, #DF7EEF 85.42%, #F488E3 100%)"}),l?e.jsx(e.Fragment,{children:e.jsxs(at,{children:[e.jsx(st,{children:"Time Left"}),e.jsxs(ot,{justifyContent:"end",children:[e.jsx(it,{children:l}),e.jsx(ge,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:"until next epoch"})]})]})}):e.jsx(Qe,{})]})]})},Qe=()=>{const t=be(1300);return e.jsxs(is,{padding:"21px 15px",children:[e.jsx(c,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(c,{height:"26px;",width:t?"175px":"189px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(c,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"})]})},ss=a(T)`
  column-gap: 12px;

  @media (max-width: 992px) {
    flex-direction: column;
    row-gap: 12px;
  }
`,et=a(b)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`,tt=a(b)`
  position: absolute;
  width: 170px;
  height: 170px;
  right: 5px;
  top: -35px;
  border-radius: 50%;

  box-shadow: 0px 30px 50px rgba(240, 86, 254, 0.5);
  filter: blur(2.5px);
`,st=a(ge)`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 141%;

  @media (max-width: 600px) {
    font-size: 16px;
  }

  @media (min-width: 992px) and (max-width: 1150px) {
    font-size: 14px;
  }

  @media (min-width: 1150px) and (max-width: 1300px) {
    font-size: 16px;
  }
`,it=a(ge)`
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  line-height: 141%;

  @media (max-width: 992px) {
    font-size: 24px;
  }

  @media (min-width: 992px) and (max-width: 1150px) {
    font-size: 18px;
  }

  @media (min-width: 1150px) and (max-width: 1300px) {
    font-size: 24px;
  }
`,ot=a(b)`
  align-items: flex-start;
`,at=a(ot)`
  padding: 20px 10px 20px 15px;
  // gap: 8px;
  justify-content: center;
`,is=a(ye)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  justify-content: center;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,Tt=({onClose:t,InnerComponentProps:s,toastObject:i})=>{const{title:l,getUserData:o,getPoolStats:r,setUnstakeErrorMessage:g,setWithdrawErrorMessage:x}=s,{account:d,provider:h,isWalletConnected:R,connect:v}=Ce(),[W,G]=n.useState(0),[D,O]=n.useState(0),[V,X]=n.useState(!1),[$,Y]=n.useState(!1),[ie,q]=n.useState(!1),[E,B]=n.useState(null),{handleConnectWalletAndEnableProfile:F}=n.useContext(Bs),[m,k]=n.useState(0),K=()=>{g(null),x(null),t()},Q=We(),me=n.useRef(null);Ft(me,()=>K());const M=async()=>{var u=h.getSigner(d);const f=l==="Uni-V2"?p.uniV2LPToken:p.pushToken,j=new C(f,y.uniV2LpToken,u);let U=Ys(await j.balanceOf(d));G(parseInt(U.toString().replace(/\D/,""))||0)},ee=async()=>{Y(!0);var u=h.getSigner(d);let f;l==="Uni-V2"?f=await new C(p.uniV2LPToken,y.uniV2LpToken,u).allowance(d,p.stakingV2):f=await new C(p.pushToken,y.uniV2LpToken,u).allowance(d,p.pushCoreV2),O(_(f)),Y(!1)};n.useEffect(()=>{M(),ee()},[]);const S=async()=>{if(!R){v();return}if(V||$)return;Y(!0);var u=h.getSigner(d);let f;const j=Os(m.toString(),18);l==="Uni-V2"?f=new C(p.uniV2LPToken,y.uniV2LpToken,u).approve(p.stakingV2,j):f=new C(p.pushToken,y.uniV2LpToken,u).approve(p.pushCoreV2,j),f.then(async U=>{i.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await h.waitForTransaction(U.hash),i.showMessageToast({toastTitle:"Success",toastMessage:`Successfully approved ${l} Tokens!`,toastType:"SUCCESS",getToastIcon:te=>e.jsx(pe,{size:te,color:"green"})}),Y(!1),X(!0)}catch(te){console.error("Error",te),i.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:H=>e.jsx(N,{size:H,color:"red"})}),Y(!1)}}).catch(U=>{console.error("Error",U),i.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature",toastType:"ERROR",getToastIcon:te=>e.jsx(N,{size:te,color:"red"})}),Y(!1)})},A=async()=>{if(!R){v();return}if(ie||!V)return;if(q(!0),m==0){i.showMessageToast({toastTitle:"Error",toastMessage:`You need to deposit atleast 1 ${l} token `,toastType:"ERROR",getToastIcon:j=>e.jsx(N,{size:j,color:"red"})}),q(!1);return}var u=h.getSigner(d);let f;l==="Uni-V2"?f=new C(p.stakingV2,y.stakingV2,u).deposit(p.uniV2LPToken,I.from(m).mul(I.from(10).pow(18))):f=new C(p.pushCoreV2,y.pushCoreV2,u).stake(I.from(m).mul(I.from(10).pow(18))),f.then(async j=>{i.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await h.waitForTransaction(j.hash),i.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:U=>e.jsx(pe,{size:U,color:"green"})}),r(),o(),q(!1),K()}catch(U){console.error("Error",U),i.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${U.name}+ ")`,toastType:"ERROR",getToastIcon:te=>e.jsx(N,{size:te,color:"red"})}),q(!1)}}).catch(j=>{console.error("Error in depositing",j),j.reason=j.reason.slice(j.reason.indexOf("::")+1),i.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Cancelled! ${j.reason}`,toastType:"ERROR",getToastIcon:U=>e.jsx(N,{size:U,color:"red"})}),q(!1)})},z=u=>{u.preventDefault(),k(parseInt(u.target.value.replace(/\D/,""))||0),D>=parseInt(u.target.value.replace(/\D/,""))?X(!0):X(!1)},w=u=>{k(parseInt(u.toString().replace(/\D/,""))||0)},P=be(600);return e.jsxs(os,{children:[e.jsxs(T,{justifyContent:"space-between",children:[e.jsx(as,{children:l==="Uni-V2"?"Uniswap V2 Staking Pool":"Push Fee Staking Pool"}),e.jsx(xt,{onClick:()=>K(),style:{cursor:"pointer"}})]}),e.jsxs(b,{children:[e.jsx(Hs,{weight:"500",size:"14px",self:"baseline",color:Q.stakingSecondaryText,children:"You are Staking"}),e.jsxs(T,{width:"-webkit-fill-available",background:Q.default.bg,height:"60px",padding:P?"8px":"14px",borderRadius:"12px",border:`1px solid ${Q.modalBorderColor}`,children:[e.jsx(ns,{placeholder:"Enter Amount",flex:"2",radius:"4px",size:"32px",height:"32px",self:"auto",bg:"#FFF",color:Q.stakingSecondaryText,value:m,onChange:u=>{u.preventDefault(),z(u)},autoFocus:!0}),e.jsxs(rs,{onClick:()=>w(W),children:["Max: ",W]})]})]}),e.jsxs(T,{margin:"20px 0",gap:"12px",children:[e.jsxs(ae,{variant:"primary",size:"medium",onClick:S,disabled:!!V,children:[!V&&!$&&e.jsxs(Oe,{color:"#FFFFFF",weight:"400",cursor:"pointer",children:["Approve ",l]}),$&&!V&&e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:"#fff",title:"Approving",titleColor:"#FFF"}),V&&e.jsx(Oe,{color:Q.emptyButtonText,weight:"600",cursor:"default",children:"Approved"})]}),e.jsxs(ae,{variant:"outline",size:"medium",disabled:!!(!V||ie),onClick:A,children:[!ie&&"Deposit",ie&&e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFFF",title:"Depositing",titleColor:"#FFF"})]})]})]})},os=a.div`
  padding: 16px 20px;
  width: 340px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  @media (max-width: 500px) {
    width: 270px;
    padding: 16px 15px;
  }
`,as=a(L)`
  font-size: 16px;
  letter-spacing: normal;
  color: ${t=>t.theme.stakingPrimaryText};
`,ns=a(Ws)`
  background: transparent;
  width: 100%;
`,rs=a.p`
  font-size: 14px;
  text-align: right;
  text-decoration-line: underline;
  color: #657795;
  margin: 0px;
  cursor: pointer;
`,ls=({lpPoolStats:t,userDataLP:s,getLpPoolStats:i,getUserDataLP:l})=>{const{account:o,provider:r}=Ce(),[g,x]=n.useState(!1),[d,h]=n.useState(!1),[R,v]=n.useState(null),[W,G]=n.useState(null),D=Ae(),O=We(),V=async()=>{if(g)return;x(!0);const B=_(s.epochStakeNext);if(B==0){G("Nothing to unstake. You need to stake first"),x(!1);return}var F=r.getSigner(o);let m=new C(p.stakingV2,y.stakingV2,F);await m.balanceOf(o,p.uniV2LPToken),m.withdraw(p.uniV2LPToken,I.from(B).mul(I.from(10).pow(18))).then(async k=>{D.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await r.waitForTransaction(k.hash),D.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:K=>e.jsx(pe,{size:K,color:"green"})}),x(!1),i(),l()}catch(K){console.error("Error",K),D.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${K.name}+ ")`,toastType:"ERROR",getToastIcon:Q=>e.jsx(N,{size:Q,color:"red"})}),x(!1)}}).catch(k=>{D.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:K=>e.jsx(N,{size:K,color:"red"})}),x(!1)})},X=async()=>{if(!d){if((s==null?void 0:s.totalAvailableReward)==0){v("No Rewards to Claim!");return}if(console.debug("Lp POOL stats",t),!t.currentEpochLP||t.currentEpochLP==1){D.showMessageToast({toastTitle:"Error",toastMessage:"Harvest unlocks from Epoch 2!)",toastType:"ERROR",getToastIcon:F=>e.jsx(N,{size:F,color:"red"})});return}h(!0);var B=r.getSigner(o);new C(p.yieldFarmLP,y.yieldFarming,B).massHarvest().then(async F=>{D.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await r.waitForTransaction(F.hash),D.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:m=>e.jsx(pe,{size:m,color:"green"})}),l(),h(!1)}catch(m){D.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${m.name}+ ")`,toastType:"ERROR",getToastIcon:k=>e.jsx(N,{size:k,color:"red"})}),h(!1)}}).catch(F=>{D.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:m=>e.jsx(N,{size:m,color:"red"})}),h(!1)})}};n.useEffect(()=>{v(null),G(null)},[o]);const $=()=>{(t==null?void 0:t.currentEpochLP.toNumber())+1<=(t==null?void 0:t.totalEpochLP.toNumber())?Y():D.showMessageToast({toastTitle:"Error",toastMessage:"Epochs have ended!",toastType:"ERROR",getToastIcon:B=>e.jsx(N,{size:B,color:"red"})})},{showModal:Y,ModalComponent:ie}=Ye(),q=Ae(),E=be(600);return e.jsxs(ps,{children:[e.jsx(ie,{InnerComponent:Tt,InnerComponentProps:{title:"Uni-V2",getUserData:l,getPoolStats:i,setUnstakeErrorMessage:G,setWithdrawErrorMessage:v},toastObject:q,modalPosition:Ke.ON_PARENT}),e.jsx(b,{margin:"0px 0px 20px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(xs,{children:"Uniswap V2 LP Staking Pool"}),e.jsxs(nt,{children:["Current APR"," ",e.jsxs(ge,{color:"#D53A94",fontWeight:"600",children:[">",Z(t==null?void 0:t.stakingAPR),"%"]})]})]}):e.jsxs(Me,{padding:"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(c,{height:"12px",width:"112px"})]})}),e.jsxs(b,{flex:"5",children:[e.jsxs(ds,{border:`1px solid ${O.stakingBorder}`,borderRadius:"16px",children:[e.jsx(b,{padding:E?" 1px":"8px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(nt,{children:"Current Reward"}),e.jsxs(L,{fontSize:E?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:[Z(_(t==null?void 0:t.rewardForCurrentEpoch))," PUSH"]})]}):e.jsxs(Me,{padding:E?"0px":"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:E?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(c,{height:"12px",width:E?"65px":"100px}"})]})}),e.jsx(cs,{width:"10px",height:"100%"}),e.jsx(b,{padding:E?" 1px":"8px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(nt,{children:"Total Staked"}),e.jsxs(hs,{fontSize:E?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[Z(_(t==null?void 0:t.poolBalance))," UNI-V2"]})]}):e.jsxs(Me,{padding:E?"0px":"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:E?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(c,{height:"12px",width:E?"65px":"100px}"})]})})]}),e.jsx(T,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:t?e.jsxs(e.Fragment,{children:[e.jsx(jt,{children:"Current Epoch"}),e.jsxs(jt,{children:[Math.min(t==null?void 0:t.currentEpochLP,t==null?void 0:t.totalEpochLP).toString(),"/",t==null?void 0:t.totalEpochLP.toString()]})]}):e.jsx(Me,{padding:"5px 0px 0 15px",children:e.jsx(c,{height:"12px",width:"124px"})})}),s?e.jsxs(b,{children:[e.jsxs(T,{justifyContent:"space-between",margin:E?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Le,{children:["User Deposit",e.jsx(Ne,{children:e.jsx(J,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(oe,{src:de,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ve,{children:[_(s==null?void 0:s.epochStakeNext)," UNI-V2"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:E?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Le,{children:["Rewards Claimed",e.jsx(Ne,{children:e.jsx(J,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(oe,{src:de,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ve,{children:[" ",Z(((s==null?void 0:s.totalAccumulatedReward)-(s==null?void 0:s.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:E?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Le,{children:["Current Epoch Reward",e.jsx(Ne,{children:e.jsx(J,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(oe,{src:de,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ve,{children:[" ",Z(s==null?void 0:s.potentialUserReward)," PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:E?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Le,{children:["Available for Claiming",e.jsx(Ne,{children:e.jsx(J,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(oe,{src:de,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ve,{children:[" ",Z(s==null?void 0:s.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(ye,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]})]})]}),e.jsx(b,{padding:E?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:s?e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(ae,{variant:"primary",size:"medium",block:!0,onClick:()=>{$()},children:"Stake $UNI-V2 LP Tokens"})}),e.jsxs(gs,{children:[e.jsx(Je,{width:"50%",children:_(s==null?void 0:s.epochStakeNext)==="0"?e.jsx(J,{error:!0,ToolTipTitle:"Nothing to unstake! Stake First.",ToolTipWidth:"16rem",bottom:"-30px",children:e.jsx(ae,{disabled:!0,size:"medium",block:!0,children:g?e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Unstake $UNI-V2"})}):e.jsx(ae,{size:"medium",variant:"outline",block:!0,onClick:V,children:g?e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:O.activeButtonText,title:"Unstaking",titleColor:O.activeButtonText}):"Unstake $UNI-V2"})}),e.jsx(Je,{width:"50%",children:(s==null?void 0:s.totalAvailableReward)==="0.00"?e.jsx(J,{bottom:"-30px",left:"40px",ToolTipTitle:"No Rewards to Claim!",error:!0,ToolTipWidth:"10rem",children:e.jsx(ae,{disabled:!0,size:"medium",block:!0,children:d?e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFF"}):"Claim Rewards"})}):e.jsx(ae,{variant:"outline",size:"medium",block:!0,onClick:()=>X(),children:d?e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:O.activeButtonText,title:"Claiming",titleColor:O.activeButtonText}):"Claim Rewards"})})]})]}):e.jsxs(Me,{width:"100%",children:[e.jsx(c,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(c,{height:"49px",width:"100%"})]})})]})},ps=a(_e)`
  border: 1px solid ${t=>t.theme.stakingBorder};
  border-radius: 24px;
  padding: 20px;

  font-family: 'FK Grotesk Neu';

  margin: 10px 0 10px 10px;

  font-style: normal;
  font-weight: 500;
  min-height: 587px;
  color: ${t=>t.theme.stakingPrimaryText};
  width: -webkit-fill-available;
  @media (max-width: 1300px) {
    margin: 0 0 10px 0;
  }
  @media (max-width: 600px) {
    padding: 16px;
  }
`,xs=a(L)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${t=>t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`,nt=a.div`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  // color: #333333;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,ds=a(T)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,cs=a.div`
  width: 1px;
  height: 100%;
  background: ${t=>t.theme.stakingBorder};
`,Le=a.div`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  // color: rgba(87, 93, 115, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${t=>t.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,hs=a(L)`
  color: ${t=>t.theme.stakingSecondaryText};
`,jt=a(Mt)`
  font-weight: 600;
  text-align: right;
  letter-spacing: normal;
  font-size: 16px;
  line-height: 141%;
  margin-right: 5px;
  color: ${t=>t.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,Ne=a(ge)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,Ve=a(L)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${t=>t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,gs=a.div`
  display: flex;
  gap: 12px;
  margin: 15px 0px 0px 0px;
  width: 100%;
`,Me=a(ye)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,us=t=>n.createElement("svg",{width:29,height:28,viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M26.1673 14.0002C26.1673 20.4431 20.9436 25.6668 14.5007 25.6668C8.05773 25.6668 2.83398 20.4431 2.83398 14.0002C2.83398 7.55725 8.05773 2.3335 14.5007 2.3335C20.9436 2.3335 26.1673 7.55725 26.1673 14.0002Z",fill:"#30CC8B"}),n.createElement("path",{d:"M20.6751 8.5083L12.7593 16.4335L9.49146 13.175L7.8418 14.8246L12.7616 19.7328L22.3254 10.158L20.6751 8.5083Z",fill:"white"})),ms=({onClose:t,InnerComponentProps:s})=>{const{currentTransactionNo:i,totalTransactionNo:l,transactionSteps:o,transactionText:r,setCurrentTransactionNo:g,setTotalTransactionNo:x,setTransactionSteps:d,claimRewards:h,unstakeTokensPaginated:R}=s,v=()=>{d(0),t()},W=async()=>{d(0),x(0),g(0),r!=null&&r.includes("Unstaking")?R():h()};return e.jsx(ws,{children:l?e.jsxs(e.Fragment,{children:[e.jsx(T,{justifyContent:"end",children:e.jsx(xt,{onClick:()=>v(),style:{cursor:"pointer"}})}),o===0&&e.jsxs(e.Fragment,{children:[e.jsx(Ut,{size:42,color:xe.COLORS.PRIMARY_PINK,type:At.PROCESSING}),e.jsxs(b,{gap:"24px",margin:"16px 0 0 0",children:[e.jsxs(b,{children:[e.jsxs(L,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:["Please sign transaction ",i,"/",l]}),e.jsx(L,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"Processing your request"})]}),e.jsx(L,{fontSize:"18px",fontWeight:"400",color:"#657795",children:r}),e.jsx(b,{padding:"16px",children:e.jsx(L,{fontSize:"16px",fontWeight:"400",color:"#D53A94",children:"Confirm the request in your wallet"})})]})]}),o===1&&e.jsxs(b,{gap:"24px",children:[e.jsx(b,{gap:"9px",children:e.jsx(L,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:"Transaction Error"})}),e.jsx(b,{children:e.jsx(ae,{variant:"primary",size:"medium",onClick:W,children:"Retry"})})]}),o===2&&e.jsxs(b,{gap:"24px",children:[e.jsxs(b,{children:[e.jsx(us,{height:"50px",width:"50px"}),e.jsxs(b,{gap:"9px",children:[e.jsx(L,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:"Transactions Successful"}),e.jsx(L,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"You have claimed all the rewards."})]})]}),e.jsx(ae,{variant:"primary",size:"medium",onClick:v,children:"Close"})]})]}):e.jsx(Ut,{size:42,color:xe.COLORS.PRIMARY_PINK,type:At.PROCESSING})})},ws=a(b)`
  min-width: 493px;
  padding: 32px 24px;
`,fs=({userDataPush:t,getUserDataPush:s,PUSHPoolstats:i,getPUSHPoolStats:l})=>{const{account:o,provider:r}=Ce(),[g,x]=n.useState(!1),[d,h]=n.useState(!1),[R,v]=n.useState(null),[W,G]=n.useState(null),[D,O]=n.useState(0),[V,X]=n.useState(0),[$,Y]=n.useState(0),[ie,q]=n.useState(""),E=Ae(),B=We(),F=async w=>{var P=r.getSigner(o);let u=new C(p.pushToken,y.pushToken,P);if(await u.holderDelegation(o,w.address))return!0;try{E.showLoaderToast({loaderMessage:"Delegating! Please wait.."});const f=await u.setHolderDelegation(w.address,"true");return await r.waitForTransaction(f.hash),E.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Address Delegated",toastType:"SUCCESS",getToastIcon:j=>e.jsx(pe,{size:j,color:"green"})}),!0}catch(f){return console.error("Error in delegating",f),E.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${f.reason}`,toastType:"ERROR",getToastIcon:j=>e.jsx(N,{size:j,color:"red"})}),x(!1),!1}},m=async w=>{const P=(await w.userFeesInfo(o)).lastClaimedBlock;if(P.toNumber()!==0){const u=await w.genesisEpoch(),f=await w.epochDuration();return(P-u)/f}},k=async()=>{if(d)return;if(h(!0),(t==null?void 0:t.availableRewards)==0){G("No Rewards to Claim"),h(!1);return}var w=r.getSigner(o);let P=new C(p.pushCoreV2,y.pushCoreV2,w);const u=i==null?void 0:i.currentEpochNumber,f=14;if(!await F(P))return;let j=1;j=await m(P),A(),h(!1);let U=0;u-j<f,U=Math.ceil((u-j)/f),X(U),U!=0&&(await K(U,j,P,f),s(),Y(2),O(0))},K=async(w,P,u,f)=>{const j=i==null?void 0:i.currentEpochNumber;let U=0;for(let te=0;te<w;te++){let H=P;P+=f;let se=Math.min(P,j-1);q(`Claiming the rewards from Epoch ${H} to ${se} `),await u.harvestPaginated(se,{gasLimit:91e4}).then(async ne=>{try{E.showLoaderToast({loaderMessage:"Waiting for confirmation"}),await r.waitForTransaction(ne.hash),E.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:ue=>e.jsx(pe,{size:ue,color:"green"})}),U++,O(U)}catch{console.error("Error in the transaction",ne);return}}).catch(ne=>{throw console.error("Error in claiming the reward",ne),E.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${ne.reason}`,toastType:"ERROR",getToastIcon:ue=>e.jsx(N,{size:ue,color:"red"})}),q(""),x(!1),s(),Y(1),O(0),ne})}},Q=async()=>{if(g)return;if(x(!0),_(t==null?void 0:t.userStaked)==0){v("Nothing to unstake, You need to stake first"),x(!1);return}var w=r.getSigner(o);let P=new C(p.pushCoreV2,y.pushCoreV2,w);const u=await F(P);if(h(!1),!u)return;const f=i==null?void 0:i.currentEpochNumber,j=14;let U=0;if(U=await m(P),U>=f-1){x(!1),v("PUSH cannot be unstaked until current epoch is over."),E.showMessageToast({toastTitle:"Unstaking Error",toastMessage:"You cannot unstake until Current Epoch gets over.",toastType:"ERROR",getToastIcon:H=>e.jsx(N,{size:H,color:"red"})});return}A();const te=Math.ceil((f-U)/j);X(te),te>1&&await K(te-1,U,P,j),q("Unstaking Your Push Tokens. Please wait..."),P.unstake().then(async H=>{E.showLoaderToast({loaderMessage:"Unstaking! Waiting for Confirmation..."});try{await r.waitForTransaction(H.hash),E.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:se=>e.jsx(pe,{size:se,color:"green"})}),l(),s(),x(!1),Y(2),O(0)}catch(se){console.error("Error",se),E.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${se.name}+ ")`,toastType:"ERROR",getToastIcon:ne=>e.jsx(N,{size:ne,color:"red"})}),q(""),x(!1)}}).catch(H=>{console.error("Error: ",H);const se=H.reason.includes("PushCoreV2::unstake:"),ne=H.reason.includes("PushCoreV2::harvestPaginated:");if(se||ne)v("PUSH cannot be unstaked until current epoch is over.");else{let ue=H.reason.slice(H.reason.indexOf("::")+1);ue=ue.replace("unstake:",""),E.showMessageToast({toastTitle:"Error",toastMessage:`${ue}`,toastType:"ERROR",getToastIcon:je=>e.jsx(N,{size:je,color:"red"})})}x(!1),s(),Y(1),O(0)})};n.useEffect(()=>{G(null),v(null)},[o]);const{showModal:me,ModalComponent:M}=Ye(),ee=Ae(),S=be(600),{showModal:A,ModalComponent:z}=Ye();return e.jsxs(Cs,{children:[e.jsx(M,{InnerComponent:Tt,InnerComponentProps:{title:"PUSH",getUserData:s,getPoolStats:l,setUnstakeErrorMessage:v,setWithdrawErrorMessage:G},toastObject:ee,modalPosition:Ke.ON_PARENT}),e.jsx(z,{InnerComponent:ms,InnerComponentProps:{currentTransactionNo:D,totalTransactionNo:V,transactionSteps:$,transactionText:ie,setCurrentTransactionNo:O,setTotalTransactionNo:X,setTransactionSteps:Y,claimRewards:k,unstakeTokensPaginated:Q},onConfirm:()=>{},modalPadding:"0px",modalPosition:Ke.ON_ROOT}),e.jsx(b,{margin:"0px 0px 20px 0px",children:i?e.jsxs(e.Fragment,{children:[e.jsx(ys,{children:"PUSH Fee Staking Pool"}),e.jsxs(ks,{children:["Current APR",e.jsxs(ge,{color:"#D53A94",fontWeight:"600",margin:"0 5px 0 5px",children:[">",Z(i==null?void 0:i.stakingAPR),"% + Fee"]}),e.jsx(Ts,{})]})]}):e.jsxs(Ue,{padding:"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(c,{height:"12px",width:"112px"})]})}),e.jsxs(b,{flex:"5",children:[e.jsxs(bs,{border:`1px solid ${B.stakingBorder}`,borderRadius:"16px",children:[e.jsx(b,{padding:S?" 1px":"8px",children:i?e.jsxs(e.Fragment,{children:[e.jsx(Ct,{children:"Current Reward"}),e.jsxs(L,{fontSize:S?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:[Z(_(i==null?void 0:i.currentReward))," PUSH"]})]}):e.jsxs(Ue,{padding:S?"0px":"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:S?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(c,{height:"12px",width:S?"65px":"100px}"})]})}),e.jsx(Es,{width:"10px",height:"100%"}),e.jsx(b,{padding:S?" 1px":"8px",children:i?e.jsxs(e.Fragment,{children:[e.jsx(Ct,{children:"Total Staked"}),e.jsxs(Ps,{fontSize:S?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[Z(_(i==null?void 0:i.totalStakedAmount))," PUSH"]})]}):e.jsxs(Ue,{padding:S?"0px":"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:S?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(c,{height:"12px",width:S?"65px":"100px}"})]})})]}),e.jsx(T,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:i?e.jsxs(e.Fragment,{children:[e.jsx(yt,{children:"Current Epoch"}),e.jsx(yt,{children:i==null?void 0:i.currentEpochNumber})]}):e.jsx(Ue,{padding:"5px 0px 0 15px",children:e.jsx(c,{height:"12px",width:"124px"})})}),t?e.jsxs(b,{children:[e.jsxs(T,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs($e,{children:["User Deposit",e.jsx(Be,{children:e.jsx(J,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(oe,{src:de,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(He,{children:[" ",Z(_(t==null?void 0:t.userStaked))," PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs($e,{children:["Rewards Claimed",e.jsx(Be,{children:e.jsx(J,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(oe,{src:de,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(He,{children:[" ",Z((t==null?void 0:t.claimedReward).toFixed(2))," PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs($e,{children:["Current Epoch Reward",e.jsx(Be,{children:e.jsx(J,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(oe,{src:de,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(He,{children:[" ",Z((t==null?void 0:t.potentialReward).toFixed(2))," PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs($e,{children:["Available for Claiming",e.jsx(Be,{children:e.jsx(J,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(oe,{src:de,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(He,{children:[" ",Z((t==null?void 0:t.availableRewards).toFixed(2))," PUSH"]})]})]}):e.jsxs(ye,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]})]})]}),e.jsx(b,{padding:S?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(ae,{variant:"primary",size:"medium",block:!0,onClick:me,children:"Stake $PUSH"})}),e.jsxs(Rs,{children:[e.jsx(Je,{width:"50%",children:(i==null?void 0:i.currentEpochNumber)<=2?e.jsx(St,{ToolTipTitle:"You can unstake once epoch 2 ends.",ButtonTitle:"Unstake PUSH"}):_(t==null?void 0:t.userStaked)==0||R!==null?e.jsx(St,{ToolTipTitle:R||"Nothing to unstake, Stake First",ButtonTitle:"Unstake PUSH"}):e.jsx(ae,{variant:"outline",size:"medium",block:!0,onClick:Q,children:g?e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:B.activeButtonText,title:"Unstaking",titleColor:B.activeButtonText}):"Unstake $PUSH"})}),e.jsx(Je,{width:"50%",children:(t==null?void 0:t.availableRewards)===0?e.jsx(J,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,left:"40px",ToolTipWidth:"10rem",children:e.jsx(ae,{size:"medium",block:!0,disabled:!0,children:d?e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Claim Rewards"})}):e.jsx(ae,{variant:"outline",size:"medium",block:!0,onClick:k,children:d?e.jsx(re,{type:le.SEAMLESS,spinnerSize:26,spinnerColor:B.activeButtonText,title:"Claiming",titleColor:B.activeButtonText}):"Claim Rewards"})})]})]}):e.jsxs(Ue,{width:"100%",children:[e.jsx(c,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(c,{height:"49px",width:"100%"})]})})]})},St=t=>e.jsx(J,{error:!0,ToolTipTitle:t.ToolTipTitle,ToolTipWidth:"16rem",bottom:"-30px",children:e.jsx(ae,{size:"medium",block:!0,disabled:!0,children:t.ButtonTitle})}),Ts=()=>{const[t,s]=n.useState(!1),i=()=>s(!1),l=n.useRef(null);return Ft(l,()=>i()),e.jsxs(js,{ref:l,children:[e.jsx(oe,{onClick:()=>s(!t),src:de,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}}),t&&e.jsx(Ss,{id:"channel",children:e.jsx(ct,{title:"",body:"Push Fee Pool APR distributes yield farming rewards + fee earned by protocol. More Info "})})]})},js=a.div`
  width: 34%;
  width: 100%;
  min-width: none;
  max-width: none;
  display: flex;
  flex: 1;
  height: fit-content;
  position: relative;
  @media ${Xe.tablet} {
    width: 100%;
    max-width: 100%;
  }
`,Ss=a.div`
  position: absolute;
  border-radius: 17px;
  background: none;
  bottom: 25px;
  left: 5px;
  color: #fff;
  background: #131313;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  line-height: 21px;
  z-index: 10;
  &::before {
    bottom: 100%;
    border-bottom-color: #131313;
  }
`,Cs=a(_e)`
  border: 1px solid ${t=>t.theme.stakingBorder};
  border-radius: 24px;
  padding: 20px;
  margin: 10px 10px 10px 0;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  min-height: 587px;
  color: ${t=>t.theme.stakingPrimaryText};
  width: -webkit-fill-available;
  @media (max-width: 1300px) {
    margin: 10px 0;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
`,ys=a(L)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${t=>t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`,ks=a.div`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Ct=a.p`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`,bs=a(T)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,Es=a.div`
  width: 1px;
  height: 100%;
  background: ${t=>t.theme.stakingBorder};
`,$e=a.div`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${t=>t.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Ps=a(L)`
  color: ${t=>t.theme.stakingSecondaryText};
`,yt=a(Mt)`
  font-weight: 600;
  text-align: right;
  letter-spacing: normal;
  font-size: 16px;
  line-height: 141%;
  margin-right: 5px;
  color: ${t=>t.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,Be=a(ge)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,He=a(L)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${t=>t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Rs=a.div`
  display: flex;
  margin: 15px 0px 0px 0px;
  gap: var(--s3);
  width: 100%;
`,Ue=a(ye)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,vs=({setActiveTab:t})=>{const{provider:s,account:i,chainId:l}=Ce(),[o,r]=n.useState(),[g,x]=n.useState(),[d,h]=n.useState(),[R,v]=n.useState(),[W,G]=n.useState(),[D,O]=n.useState(null),[V,X]=n.useState(null),[$,Y]=n.useState(null),[ie,q]=n.useState(null),[E,B]=n.useState(null),F=s==null?void 0:s.getSigner(i),m=n.useCallback(async()=>{const M=await Re.getInstance().getPoolStats(s);O({...M})},[g,o,R,d,W,s]),k=n.useCallback(async()=>{const M=await Re.getInstance().getPoolStats(s),ee=await Re.getInstance().getLPPoolStats(M);X({...ee})},[g,o,R,d,W,s]),K=n.useCallback(async()=>{},[]),Q=n.useCallback(async()=>{const M=await Re.getInstance().getUserDataLP();Y({...M})},[g,o,R,d,W]),me=n.useCallback(async()=>{const[M,ee]=await Re.getInstance().getUserDataPUSH(s);B({...M}),q({...ee})},[g,o,R,d,W,s]);return n.useEffect(()=>{if(l!==ce.coreContractChain&&l!==ce.mainnetCoreContractChain)return;X(null),Y(null),B(null),q(null);let M=new C(p.stakingV2,y.stakingV2,F),ee=new C(p.pushToken,y.pushToken,F),S=new C(p.pushCoreV2,y.pushCoreV2,F),A=new C(p.yieldFarmLP,y.yieldFarming,F),z=new C(p.uniswapV2Router02,y.uniswapV2Router02,F);if(x(M),r(ee),v(S),h(A),G(z),F&&i){var w=s==null?void 0:s.getSigner(i);let P=new C(p.stakingV2,y.stakingV2,w),u=new C(p.pushToken,y.pushToken,w),f=new C(p.pushCoreV2,y.pushCoreV2,w),j=new C(p.yieldFarmLP,y.yieldFarming,w),U=new C(p.uniswapV2Router02,y.uniswapV2Router02,w);x(P),r(u),v(f),h(j),G(U)}Re.getInstance().init(i,M,ee,S,A,z),m(),Q(),k(),me()},[i,l]),e.jsxs(e.Fragment,{children:[e.jsx(wt,{logo:"announcement",title:"New V2 Pools are now Live! Stake or migrate now.",body:"Users who were part of the previous Push staking program, need to migrate to new pools to continue earning rewards. Click",setActiveTab:t}),e.jsx(ts,{getLpPoolStats:k,poolStats:D,setPoolStats:O}),e.jsx(qt,{poolStats:D}),e.jsxs(Fs,{children:[e.jsx(fs,{userDataPush:ie,getUserDataPush:me,PUSHPoolstats:E,getPUSHPoolStats:K}),e.jsx(ls,{lpPoolStats:V,userDataLP:$,getLpPoolStats:k,getUserDataLP:Q})]})]})},Fs=a(T)`
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`,Ms=({onClose:t})=>{const{chainId:s,switchChain:i}=Ce(),l=()=>{const o=ce.allowedNetworks[0];s!==1&&s!==11155111&&(console.info("Current Chain ID ",s),console.info("Chain Id to pass",o),i(ce.coreContractChain))};return n.useEffect(()=>{(s===ce.coreContractChain||s===ce.mainnetCoreContractChain)&&t()},[s]),e.jsxs(Us,{children:[e.jsx(xt,{style:{cursor:"pointer",alignSelf:"end"}}),e.jsxs(As,{children:[e.jsx(zs,{children:"Unsupported Network"}),e.jsxs(Is,{children:["Push Yield Farm V2 is only live on Ethereum Chain.",e.jsx("br",{}),"Kindly switch to Ethereum"]})]}),e.jsx(Ds,{children:e.jsx(ae,{onClick:l,variant:"primary",size:"large",children:"Switch Network"})})]})},Us=a(b)`
  padding: 32px 36px;
  width: 445px;
`,As=a(b)`
  font-family: FK Grotesk Neu;
  font-style: normal;
  line-height: 141%; /* 39.48px */
  letter-spacing: normal;
`,zs=a.div`
  font-size: 28px;
  font-weight: 500;
  color: ${t=>t.theme.stakingSecondaryText};
`,Is=a.div`
  color: ${t=>t.theme.activeButtonText};
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 24px 0;
`,Ds=a.div``;ce.coreContractChain;let kt,bt,Et,rt,Pt;kt=()=>{_s.pageview("/yield");const[t,s]=n.useState(0),[i,l]=n.useState(!1),{chainId:o,switchChain:r}=Ce(),g=()=>{const h=ce.allowedNetworks[0];o!==1&&o!==5&&r(h)};n.useEffect(()=>{o!==1&&o!==11155111&&(x(),g())},[o]);const{showModal:x,ModalComponent:d}=Ye();return e.jsxs(bt,{children:[e.jsx(d,{InnerComponent:Ms,onConfirm:()=>{},modalPadding:"0px",modalPosition:Ke.ON_PARENT}),e.jsxs(Et,{children:[e.jsx(rt,{isActive:!t,onClick:()=>{l(!0),s(0)},children:"Yield Farming V2"}),e.jsxs(rt,{isActive:t,onClick:()=>{l(!1),s(1)},children:["Yield Farming V1 ",e.jsx(Pt,{children:"Deprecated"})]})]}),t===0&&e.jsx(vs,{setActiveTab:s}),t===1&&e.jsx(Xt,{setActiveTab:s})]})},bt=a(_e)`
	align-items: stretch;
	align-self: center;
  flex: 1;
	background: ${t=>t.theme.default.bg};
	border-radius: ${xe.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${xe.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: calc(
    100% - ${Ze.MINI_MODULES.DESKTOP.RIGHT} - ${Ze.MINI_MODULES.DESKTOP.LEFT} -
      ${xe.ADJUSTMENTS.PADDING.BIG} - ${xe.ADJUSTMENTS.PADDING.BIG}
  );
  gap: 16px;
  padding: 24px;

  margin: ${xe.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  
  @media ${Xe.laptop} {
    margin: ${xe.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${Xe.tablet} {
    width: calc(
      100% - ${Ze.MINI_MODULES.TABLET.RIGHT} - ${Ze.MINI_MODULES.TABLET.LEFT} -
        ${xe.ADJUSTMENTS.PADDING.DEFAULT} - ${xe.ADJUSTMENTS.PADDING.DEFAULT}
    );
    margin: ${xe.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding:16px;
  }

  @media ${Xe.mobileL} {
    margin: ${xe.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    border: ${xe.ADJUSTMENTS.RADIUS.LARGE};
    width: 100%;
    padding: ${xe.ADJUSTMENTS.PADDING.DEFAULT};
`,Et=a(T)`
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 51px;
  position: relative;

  :after {
    position: absolute;
    height: 2px;
    left: 0;
    bottom: 0px;
    width: 100%;
    content: '';
    background-color: ${t=>t.theme.default.border};
  }
`,rt=a.div`
  cursor: pointer;
  // padding: 0 25px;
  width: 250px;
  justify-content: center;
  display: flex;
  height: 25px;
  line-height: 141%;
  text-align: center;
  position: relative;
  color: ${t=>t.isActive?"#CF1C84":t.theme.color};

  @media (max-width: 638px) {
    width: 150px;
    flex: 1;
    flex-direction: column;
    align-items: baseline;
  }

  ${t=>t.isActive&&`&:after{
        position: absolute;
        height: 2px;
        left: 0;
        bottom: -13px;
        width: 100%;
        content: '';
        background-color: #CF1C84;
        z-index: 1;
        
    }`}
`,Pt=a(ge)`
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #d53a94;
  margin-left: 10px;
  padding: 2px 6px;
  background: #f3d7fa;
  border-radius: 6px;
  height: 17px;
  width: fit-content;
`,zt=()=>e.jsx(Js,{children:e.jsx(kt,{})})});export{Zs as __tla,zt as default};
