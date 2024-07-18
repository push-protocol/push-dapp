var ca=Object.defineProperty;var ua=(je,be,Me)=>be in je?ca(je,be,{enumerable:!0,configurable:!0,writable:!0,value:Me}):je[be]=Me;var N=(je,be,Me)=>ua(je,typeof be!="symbol"?be+"":be,Me);import{ct as m,cw as c,bd as Q,a_ as p,bD as R,dP as W,aZ as e,e7 as ha,e0 as $t,a$ as ze,bF as ye,eJ as xa,d1 as b,c2 as fe,eK as Ce,b9 as Pe,b7 as u,bN as ga,cQ as _t,c$ as Be,b1 as Ve,d$ as Re,eL as g,b_ as re,bB as Oe,bS as de,bT as ce,cv as k,cu as v,dg as ue,d2 as H,d0 as Wt,ba as et,eM as ma,cs as Ht,eN as ya,bU as Ta,c1 as Gt,d3 as yt,eO as wa,eP as fa,cy as Yt,c3 as tt,c4 as nt,c7 as Kt,by as he,c8 as qt,bA as at,bz as it,bC as Sa,__tla as ba}from"./index-CatBsT14.js";let Jt,ja=Promise.all([(()=>{try{return ba}catch{}})()]).then(async()=>{const je=m.from(1).mul(m.from(10).pow(m.from(18))),be=3e4,Me=35e3,Tt=n=>n.mul(m.from(10).pow(m.from(18))),Fe=n=>n.div(m.from(10).pow(m.from(10))).toNumber()/1e8,Ae=class Ae{constructor(){N(this,"state",{account:null,signer:null,staking:null,yieldFarmingPUSH:null,yieldFarmingLP:null,rewardForCurrentEpochPush:null,rewardForCurrentEpochLP:null,genesisEpochAmountPUSH:be,deprecationPerEpochPUSH:100,genesisEpochAmountLP:Me,deprecationPerEpochLP:100,uniswapV2Router02:null});N(this,"init",(t,a,o,s,i,r)=>{this.state.account=t,this.state.pushToken=a,this.state.staking=o,this.state.yieldFarmingPUSH=s,this.state.yieldFarmingLP=i,this.state.uniswapV2Router02=r});N(this,"getPoolStats",()=>new Promise(async(t,a)=>{const o=await this.state.yieldFarmingPUSH.getCurrentEpoch(),s=await this.state.uniswapV2Router02.getAmountsOut(je.toString(),[c.pushToken,c.WETHAddress,c.USDTAddress]);let i;Q.coreContractChain===42||Q.coreContractChain===5?i=s[s.length-1].div(1e6).toNumber():i=s[s.length-1].toNumber()/1e6,console.debug("Push PRice",i);const r=Fe(await this.state.pushToken.balanceOf(c.uniV2LPToken)),l=Fe(await this.state.pushToken.attach(c.WETHAddress).balanceOf(c.uniV2LPToken)),d=await this.state.uniswapV2Router02.getAmountsOut(je.toString(),[c.WETHAddress,c.USDTAddress]);let h;Q.coreContractChain===42||Q.coreContractChain===5?h=Fe(d[d.length-1]):h=d[d.length-1].toNumber()/1e6,console.debug("Eth Price",h);const y=Fe(await this.state.pushToken.attach(c.uniV2LPToken).totalSupply()),x=(r*i+l*h)/y/i;t({currentEpoch:o,lpToPushRatio:x})}));N(this,"getPUSHPoolStats",async()=>new Promise(async(t,a)=>{const o=this.state.yieldFarmingPUSH;let s=await o.NR_OF_EPOCHS();const i=await o.getCurrentEpoch();s=s.toString()>i.toString()?i:s;const r=Tt(m.from(this.state.genesisEpochAmountPUSH)),l=Tt(m.from(this.state.deprecationPerEpochPUSH)),d=this.calcTotalAmountPerEpoch(r,s,l);this.state.rewardForCurrentEpochPush=d;const h=await o.getPoolSize(i.add(1));t({currentEpochPUSH:i,totalEpochPUSH:s,poolBalance:h})}));N(this,"getLPPoolStats",async t=>new Promise(async(a,o)=>{const s=this.state.yieldFarmingLP;let i=await s.NR_OF_EPOCHS();const r=await s.getCurrentEpoch();i=i.toString()>r.toString()?r:i;const l=await s.getPoolSize(r.add(1));a({currentEpochPUSH:r,totalEpochPUSH:i,poolBalance:l})}));N(this,"getUserData",async t=>new Promise(async(a,o)=>{if(this.state.account){const s=await t.getCurrentEpoch().then(U=>m.from(Math.min(U,100))),i=await t.getCurrentEpoch(),r=await t.getEpochStake(this.state.account,i.add(1)),l=(await t.lastEpochIdHarvested(this.state.account)).toNumber();let d=this.getAccumulatedReward(s,t),h=this.getTotalAvailableRewards(l,s,t),[y,x]=await Promise.all([d,h]);a({epochStakeNext:r,totalAccumulatedReward:y,totalAvailableReward:x})}}));N(this,"getTotalAvailableRewards",async(t,a,o)=>{let s=[];for(var i=t+1;i<=a.toNumber();i++){const l=this.calculateUserEpochReward(i,o);s.push(l)}let r=(await Promise.all(s)).reduce((l,d)=>l+d,0);return r=r.toFixed(2),r});N(this,"getAccumulatedReward",async(t,a)=>{let o=[];for(var s=0;s<=t.toNumber();s++){const r=this.calculateUserEpochReward(s,a);o.push(r)}let i=(await Promise.all(o)).reduce((r,l)=>r+l,0);return i=i.toFixed(2),i});N(this,"calcTotalAmountPerEpoch",(t,a,o)=>t.sub(a.mul(o)));N(this,"calculateUserEpochReward",async(t,a)=>{const o=Fe(await a.getEpochStake(this.state.account,t)),s=Fe(await a.getPoolSize(t));let i=0;if(s>0)if(a.address==c.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,d=r-l*t;i=o/s*d}else{const r=this.state.genesisEpochAmountPUSH,l=this.state.deprecationPerEpochPUSH,d=r-l*t;i=o/s*d}return i})}static getInstance(){return Ae.instance||(Ae.instance=new Ae),Ae.instance}};N(Ae,"instance",null);let Ee=Ae;const J=n=>e.jsx(ha,{wrapperProps:{width:"100%",maxWidth:"none",minWidth:"auto",display:"flex",flex:"1",margin:n.margin?n.margin:"0"},placementProps:{background:"none",bottom:n.bottom?n.bottom:"25px",left:n.error?"40px":"0px"},tooltipContent:n.error?e.jsx(Xt,{title:n.ToolTipTitle,width:n.ToolTipWidth}):e.jsx(wt,{title:n.ToolTipTitle,body:n.ToolTipBody}),children:n.children}),Xt=n=>e.jsx(R,{width:n.width,background:"#131313",justifyContent:"flex-start",border:"1px solid rgba(173, 176, 190, 0.2)",alignItems:"flex-start",padding:"0.75rem 0.75rem 0.75rem 1rem",boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.05)",color:"#FFF",borderRadius:"2px 12px 12px 12px",children:e.jsx(W,{color:"inherit",children:n.title})}),wt=({title:n,body:t})=>e.jsxs(Zt,{children:[e.jsx(Qt,{children:n}),e.jsxs(en,{children:[t,"  "," ",t.includes("Push Fee Pool APR")&&e.jsx($t,{cursor:"pointer",href:"https://medium.com/push-protocol/new-push-yield-farming-rewards-full-details-4a9ff473226d",target:"_blank",children:"here"})]})]}),Zt=p(R)`
  box-sizing: border-box;
  width: 16rem;
  background: ${n=>n.theme.default.bg};
  justify-content: flex-start;
  border: 1px solid rgba(173, 176, 190, 0.2);
  align-items: flex-start;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius:1rem 1rem 1rem 0.125rem;

  @media (max-width:400px){
    width:16.75rem;
  }


`,Qt=p(W)`
  color: ${n=>n.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`,en=p(W)`
  color: ${n=>n.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
  text-align:left;
`,xe="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15284_45077)'%3e%3cpath%20d='M8.5%2014.5C11.8137%2014.5%2014.5%2011.8137%2014.5%208.5C14.5%205.18629%2011.8137%202.5%208.5%202.5C5.18629%202.5%202.5%205.18629%202.5%208.5C2.5%2011.8137%205.18629%2014.5%208.5%2014.5Z'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%208C8.13261%208%208.25979%208.05268%208.35355%208.14645C8.44732%208.24021%208.5%208.36739%208.5%208.5V11C8.5%2011.1326%208.55268%2011.2598%208.64645%2011.3536C8.74021%2011.4473%208.86739%2011.5%209%2011.5'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.25%206.5C8.66421%206.5%209%206.16421%209%205.75C9%205.33579%208.66421%205%208.25%205C7.83579%205%207.5%205.33579%207.5%205.75C7.5%206.16421%207.83579%206.5%208.25%206.5Z'%20fill='%23797D8F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15284_45077'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",K=n=>n.div(m.from(10).pow(18)).toString(),X=n=>{var t;return(t=n==null?void 0:n.toString())==null?void 0:t.replace(/\B(?=(\d{3})+(?!\d))/g,",")},tn=function(n,t=null){return m.from(n)},nn=function(n){return n.div(tn(10).pow(18))},ft=({poolName:n,userData:t,PoolStats:a,poolAddress:o,getUserData:s,tokenAddress:i,setActiveTab:r})=>{const{account:l,provider:d,wallet:h}=Pe(),[y,x]=u.useState(!1),[U,I]=u.useState(!1),[L,C]=u.useState(!1),[_,z]=u.useState(null),[ae,G]=u.useState(null),[ie,Y]=u.useState(null),{userPushSDKInstance:D}=ga(f=>f.user),{handleConnectWalletAndEnableProfile:T}=u.useContext(_t),[V,M]=u.useState(0),S=Be(),F=Ve(),q=async()=>{if(!D.signer){T({wallet:h});return}if(!U){if((t==null?void 0:t.totalAvailableReward)==0){Y("No Rewards to Claim"),I(!1);return}I(!0);var f=d.getSigner(l);new k(o,v.yieldFarming,f).massHarvest().then(async w=>{S.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await d.waitForTransaction(w.hash),S.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:P=>e.jsx(ue,{size:P,color:"green"})}),s(),I(!1)}catch(P){S.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${P.name}+ ")`,toastType:"ERROR",getToastIcon:A=>e.jsx(H,{size:A,color:"red"})}),I(!1)}}).catch(w=>{S.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:P=>e.jsx(H,{size:P,color:"red"})}),I(!1)})}},Te=async()=>{if(!D.signer){T({wallet:h});return}if(y)return;x(!0);const f=K(t.epochStakeNext);if(f==0){G("Nothing to unstake, Stake Now in new reward program."),x(!1);return}var w=d.getSigner(l);let P=new k(c.staking,v.staking,w);await P.balanceOf(l,i),P.withdraw(i,m.from(f).mul(m.from(10).pow(18))).then(async A=>{S.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await d.waitForTransaction(A.hash),S.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:E=>e.jsx(ue,{size:E,color:"green"})}),x(!1),s()}catch(E){console.error("Error",E),S.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${E.name}+ ")`,toastType:"ERROR",getToastIcon:O=>e.jsx(H,{size:O,color:"red"})}),x(!1)}}).catch(A=>{S.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:E=>e.jsx(H,{size:E,color:"red"})}),x(!1)})},B=async()=>{if(!D.signer){T({wallet:h});return}if(L)return;let f=3;const w=K(t.epochStakeNext);if(w==0){S.showMessageToast({toastTitle:"Error",toastMessage:"Nothing to Withdraw!",toastType:"ERROR",getToastIcon:ee=>e.jsx(H,{size:ee,color:"red"})}),C(!1),z(null);return}var P=d.getSigner(l);let A=new k(c.staking,v.staking,P);const E=i===c.pushToken?c.pushCoreV2:c.stakingV2;var O=new k(i,v.pushToken,P);let $=await O.allowance(l,E),se=K($);parseInt(se)>=parseInt(w)?(f=2,M(50)):(f=3,M(33)),C(!0),z(`Withdrawing 1/${f}`);let oe;oe=A.withdraw(i,m.from(w).mul(m.from(10).pow(18))),oe.then(async ee=>{if(S.showLoaderToast({loaderMessage:"Withdrawing! Please Wait..."}),await d.waitForTransaction(ee.hash),S.showMessageToast({toastTitle:"Success",toastMessage:"Successfully withdrawn!",toastType:"SUCCESS",getToastIcon:me=>e.jsx(ue,{size:me,color:"green"})}),i===c.pushToken){var Z=new k(i,v.pushToken,P);let me=await Z.allowance(l,c.pushCoreV2),pe=K(me);parseInt(pe)>=parseInt(w)?we(ee,w,f):(ee=Z.approve(c.pushCoreV2,m.from(w).mul(m.from(10).pow(18))),z(`Approving 2/${f}`),M(66),ee.then(async le=>{S.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await d.waitForTransaction(le.hash),S.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:Se=>e.jsx(ue,{size:Se,color:"green"})}),we(le,w,f)}).catch(le=>{console.error("Error in approving 2",le),S.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:Se=>e.jsx(H,{size:Se,color:"red"})}),C(!1),z(null),s(),M(0)}))}else{var Z=new k(i,v.pushToken,P);let pe=await Z.allowance(l,c.stakingV2),le=K(pe);parseInt(le)>=parseInt(w)?te(ee,w,f):(ee=Z.approve(c.stakingV2,m.from(w).mul(m.from(10).pow(18))),z(`Approving 2/${f}`),M(66),ee.then(async Se=>{S.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await d.waitForTransaction(Se.hash),S.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:mt=>e.jsx(ue,{size:mt,color:"green"})}),te(Se,w,f)}).catch(Se=>{console.error("Error in approving",Se),S.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:mt=>e.jsx(H,{size:mt,color:"red"})}),C(!1),z(null),s(),M(0)}))}}).catch(ee=>{console.error("Error in withdrawing: ",ee),S.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Withdraw!",toastType:"ERROR",getToastIcon:Z=>e.jsx(H,{size:Z,color:"red"})}),C(!1),z(null),M(0)})},te=async(f,w,P)=>{if(!D.signer){T({wallet:h});return}var A=d.getSigner(l),E=new k(c.stakingV2,v.stakingV2,A);z(`Staking ${P}/${P}`),M(100),f=E.deposit(i,m.from(w).mul(m.from(10).pow(18))),f.then(async O=>{S.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await d.waitForTransaction(O.hash),S.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!Successfully Deposited the UNI-V2 Token to V2 ",toastType:"SUCCESS",getToastIcon:$=>e.jsx(ue,{size:$,color:"green"})}),C(!1),s(),z(null),r(0)}).catch(O=>{console.error("Error in depositing: ",O),S.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit the Amount",toastType:"ERROR",getToastIcon:$=>e.jsx(H,{size:$,color:"red"})}),C(!1),s(),z(null),M(0)})},we=async(f,w,P)=>{if(!D.signer){T({wallet:h});return}var A=d.getSigner(l);let E=new k(c.pushCoreV2,v.pushCoreV2,A);z(`Staking ${P}/${P}`),M(100),f=E.stake(m.from(w).mul(m.from(10).pow(18))),f.then(async O=>{S.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await d.waitForTransaction(O.hash),S.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Successfully Deposited the Push Token to V2 ",toastType:"SUCCESS",getToastIcon:$=>e.jsx(ue,{size:$,color:"green"})}),C(!1),s(),z(null),r(0)}).catch(O=>{console.error("Error in depositing: ",O),S.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit Push Token",toastType:"ERROR",getToastIcon:$=>e.jsx(H,{size:$,color:"red"})}),C(!1),s(),z(null),M(0)})};u.useEffect(()=>{Y(null),G(null)},[l]);const j=Re(600);return e.jsxs(an,{margin:n==="UNI-V2"?" 10px 0 10px 10px ":"  10px 10px 10px 0",children:[e.jsx(R,{margin:"0px 0px 20px 0",children:a?e.jsxs(e.Fragment,{children:[e.jsxs(sn,{children:[n==="UNI-V2"?"Uniswap V2 Staking Pool":"PUSH Staking Pool ",e.jsx(on,{children:"Deprecated"})]}),e.jsxs(st,{children:["Current APR"," ",e.jsx(ye,{color:"#D53A94",fontWeight:"600",children:"0%"})]})]}):e.jsxs(Ie,{padding:"15px 15px 0 15px",children:[e.jsx(g,{height:"15px",width:"234px",margin:"0 0 10px 0"}),e.jsx(g,{height:"15px",width:"112px"})]})}),e.jsxs(R,{children:[e.jsxs(ln,{border:`1px solid ${F.stakingBorder}`,borderRadius:"16px",children:[e.jsx(R,{margin:j?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:j?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(st,{children:"Current Reward"}),e.jsx(W,{fontSize:j?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:"0 PUSH"})]}):e.jsxs(Ie,{padding:j?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:j?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:j?"65px":"100px}"})]})}),e.jsx(rn,{width:"10px",height:"100%"}),e.jsx(R,{margin:j?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:j?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(st,{children:"Total Staked"}),e.jsxs(pn,{fontSize:j?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[X(K(a==null?void 0:a.poolBalance))," ",n=="UNI-V2"?"UNI-V2":"PUSH"]})]}):e.jsxs(Ie,{padding:j?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:j?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:j?"65px":"100px}"})]})})]}),e.jsx(b,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:a?e.jsxs(e.Fragment,{children:[e.jsx(St,{padding:"0px 5px 0px 0px",children:"Current Epoch"}),e.jsx(St,{margin:"0 0 0 5px",children:"100 / 100"})]}):e.jsx(Ie,{padding:"6px 0px 0 15px",children:e.jsx(g,{height:"17px",width:"124px"})})}),e.jsx(dn,{children:t?e.jsxs(R,{children:[e.jsxs(b,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs($e,{children:["User Deposit",e.jsx(_e,{children:e.jsx(J,{ToolTipTitle:"User Deposited",ToolTipBody:`Amount of ${n} Token User Staked`,children:e.jsx(re,{src:xe,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(We,{children:[" ",K(t==null?void 0:t.epochStakeNext)," ",n=="UNI-V2"?"UNI-V2":"PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs($e,{children:["Rewards Claimed",e.jsx(_e,{children:e.jsx(J,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(re,{src:xe,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(We,{children:[" ",X(((t==null?void 0:t.totalAccumulatedReward)-(t==null?void 0:t.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs($e,{children:["Current Epoch Reward",e.jsx(_e,{children:e.jsx(J,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(re,{src:xe,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsx(We,{children:"0 PUSH"})]}),e.jsxs(b,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs($e,{children:["Available for Claiming",e.jsx(_e,{children:e.jsx(J,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(re,{src:xe,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(We,{children:[X(t==null?void 0:t.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(Ce,{padding:"16px 15px 16px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]})]})})]}),e.jsx(cn,{padding:j?"0px ":"0px 14px",margin:"24px 0px 0px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(bt,{children:K(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(J,{error:!0,ToolTipTitle:"Nothing to Withdraw, so you cannot Migrate.",ToolTipWidth:"16rem",bottom:"-50px",margin:"0 0 15px 0",children:e.jsx(Ue,{border:"none",cursor:"default",background:F.disableButtonBg,color:F.disabledButtonText,children:e.jsx(jt,{children:!L&&_==null&&e.jsxs(Oe,{color:F.disabledButtonText,weight:"400",cursor:"default",children:["Migrate to ",n==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]})})})}):e.jsxs(un,{onClick:B,children:[e.jsx(hn,{style:{width:`${V}%`}}),e.jsxs(jt,{children:[!L&&_==null&&e.jsxs(Oe,{color:"#FFF",weight:"400",cursor:"pointer",children:["Migrate to ",n==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]}),L&&_!=null&&e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:"#FFF",title:_,titleColor:"#FFF"})]})]})}),e.jsxs(bt,{children:[K(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(J,{error:!0,ToolTipTitle:ae||"Nothing to unstake, Stake First",ToolTipWidth:"16rem",margin:"0 10px 0 0",bottom:"-30px",children:e.jsx(Ue,{border:"none",cursor:"default",background:F.disableButtonBg,color:F.disabledButtonText,children:y?e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:F.activeButtonText,title:"Claiming",titleColor:F.activeButtonText}):` Unstake ${n}`})}):e.jsx(Ue,{border:`1px solid ${F.activeButtonText}`,background:"transparent",color:F.activeButtonText,cursor:"pointer",margin:"0 10px 0 0",onClick:Te,children:y?e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:F.activeButtonText,title:"Unstaking",titleColor:F.activeButtonText}):` Unstake ${n}`}),(t==null?void 0:t.totalAvailableReward)==="0.00"?e.jsx(J,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,ToolTipWidth:"10rem",children:e.jsx(Ue,{border:"none",cursor:"default",background:F.disableButtonBg,color:F.disabledButtonText,children:U?e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:F.activeButtonText,title:"Claiming",titleColor:F.activeButtonText}):" Claim Rewards"})}):e.jsx(Ue,{border:`1px solid ${F.activeButtonText}`,background:"transparent",color:F.activeButtonText,cursor:"pointer",onClick:q,children:U?e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:F.activeButtonText,title:"Claiming",titleColor:F.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Ie,{width:"100%",children:[e.jsx(g,{height:"49px",width:"100%",margin:"0 0 11px 0"}),e.jsx(g,{height:"49px",width:"100%"})]})})]})},an=p(ze)`
  border: 1px solid ${n=>n.theme.stakingBorder};
  border-radius: 24px;
  padding: 24px 19px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  // min-height: 587px;
  color: ${n=>n.theme.stakingPrimaryText};
`,sn=p(W)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  display: flex;
  align-items: center;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 470px) {
    flex-direction: column;
  }
`,on=p(ye)`
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
`,st=p.p`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,rn=p.div`
  width: 1px;
  height: 100%;
  background: ${n=>n.theme.stakingBorder};
`,$e=p.div`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${n=>n.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,pn=p(W)`
  color: ${n=>n.theme.stakingSecondaryText};
`,St=p(xa)`
  font-weight: 600;
  text-align: right;
  letter-spacing: normal;
  font-size: 16px;
  margin-left: 5px;
  line-height: 141%;
  color: ${n=>n.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,_e=p(ye)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,ln=p(b)`
  max-height: 108px;
  min-height: 108px;
  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,We=p(W)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,dn=p(R)`
  min-height: 150px;
`,cn=p(R)`
  // min-height:132px;
`,bt=p.div`
  display: flex;
  width: 100%;
  // margin:15px 0px 0px 0px;
`;p(fe)`
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
`;const un=p(fe)`
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
`,hn=p.div`
  min-height: 37px;
  background-color: rgb(183, 46, 126);
  transition: width 0.5s ease 0s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,jt=p.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #eee;
`,Ue=p(fe)`
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
`,Ie=p(Ce)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,Et=({logo:n,title:t,body:a,setActiveTab:o})=>{const s=Re(600);return e.jsxs(b,{style:{color:n==="announcement"?"white":"#333"},justifyContent:"stretch",padding:s?"12px":"16px",background:n==="announcement"?"linear-gradient(90deg, #121315 -2.55%, #2A2A39 32.62%, #8E317A 68.34%, #121315 102.97%)":"#FFF7DA",borderRadius:"16px",children:[e.jsx(re,{width:n==="announcement"?"60px":"32px",height:n==="announcement"?"60px":"32px",src:Wt(`svg/${n}.svg`),alt:"Announcement Logo"}),e.jsxs(R,{margin:n==="announcement"?"0 0 0 16px":"0 0 0 13px",justifyContent:"center",alignItems:"flex-start",gap:n==="announcement"?"4px":"0px",children:[e.jsx(W,{color:"inherit",fontSize:s?"20px":"24px",textAlign:"left",fontWeight:500,children:t}),e.jsxs(W,{color:"inherit",fontSize:s?"12px":"16px",textAlign:"left",fontWeight:500,children:[a," ",t.includes("New V2")&&e.jsxs(e.Fragment,{children:[e.jsx(xn,{onClick:()=>o(1),children:"here"})," to migrate."]})]})]})]})},xn=p($t)`
  cursor: pointer;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;Q.coreContractChain;const gn=({setActiveTab:n})=>{const{account:t,provider:a}=Pe(),[o,s]=u.useState(null),[i,r]=u.useState(null),[l,d]=u.useState(null),[h,y]=u.useState(null),[x,U]=u.useState(null),[I,L]=u.useState(null),[C,_]=u.useState(null),[z,ae]=u.useState(null),[G,ie]=u.useState(null),[Y,D]=u.useState(null),T=a==null?void 0:a.getSigner(t),V=u.useCallback(async()=>{const B=await Ee.getInstance().getPoolStats();L({...B})},[o,i,l,h,x]),M=u.useCallback(async()=>{const B=await Ee.getInstance().getPUSHPoolStats();_({...B})},[o,i,l,h,x]),S=u.useCallback(async B=>{const te=await Ee.getInstance().getLPPoolStats(B);ae({...te})},[o,i,l,h,x]),F=u.useCallback(async()=>{const B=await Ee.getInstance().getUserData(h);ie({...B})},[h]),q=u.useCallback(async()=>{const B=await Ee.getInstance().getUserData(l);D({...B})},[l]);u.useEffect(()=>{let B=new k(c.pushToken,v.pushToken,T),te=new k(c.staking,v.staking,T),we=new k(c.depYieldFarmPUSH,v.yieldFarming,T),j=new k(c.depYieldFarmLP,v.yieldFarming,T),f=new k(c.uniswapV2Router02,v.uniswapV2Router02,T);if(s(B),r(te),y(we),d(j),U(f),T&&t){var w=a.getSigner(t);let P=new k(c.pushToken,v.pushToken,w),A=new k(c.staking,v.staking,w),E=new k(c.depYieldFarmPUSH,v.yieldFarming,w),O=new k(c.depYieldFarmLP,v.yieldFarming,w),$=new k(c.uniswapV2Router02,v.uniswapV2Router02,w);s(P),r(A),y(E),d(O),U($)}},[t]),u.useEffect(()=>{o!=null&&i!=null&&h!=null&&(Ee.getInstance().init(t,o,i,h,l,x),V())},[V]),u.useEffect(()=>{I&&Te(I)},[I]);const Te=async B=>{M(),S(B),F(),q()};return e.jsxs(e.Fragment,{children:[e.jsx(Et,{logo:"WarningCircle",title:"This reward program (V1) has ended.",body:"To continue earning rewards please migrate to new pools.",setActiveTab:n}),e.jsxs(mn,{children:[e.jsx(ft,{poolName:"PUSH",userData:G,PoolStats:C,poolAddress:c.depYieldFarmPUSH,getUserData:F,getPoolStats:M,tokenAddress:c.pushToken,setActiveTab:n}),e.jsx(ft,{poolName:"UNI-V2",userData:Y,PoolStats:z,poolAddress:c.depYieldFarmLP,getUserData:q,getPoolStats:S,tokenAddress:c.uniV2LPToken,setActiveTab:n})]})]})},mn=p(b)`
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
`,yn=({poolStats:n})=>{function t(o){return o==null?void 0:o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const a=Re(600);return e.jsx(Tn,{justifyContent:"stretch",children:n?e.jsxs(e.Fragment,{children:[e.jsx(kt,{fontSize:a?"16px":"18px",textAlign:"left",fontWeight:600,children:"Push Price"}),e.jsxs(b,{gap:"5px",justifyContent:"flex-end",children:[e.jsxs(kt,{fontSize:a?"18px ":"24px",textAlign:"left",fontWeight:600,children:["$",t(n==null?void 0:n.pushPrice.toFixed(2))]}),e.jsx(re,{width:"25px",height:a?"20px":"27px",src:Wt("svg/uniswapLogo.svg"),alt:"Uniswap Logo"})]})]}):e.jsxs(wn,{children:[e.jsx(g,{height:"12px",width:"135px",margin:"10px 0 10px 0"}),e.jsx(g,{height:"12px",width:"135px",margin:"10px 0 10px 0"})]})})},Tn=p(b)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;

  border: 1px solid #bac4d6;
  border-color: ${n=>n.theme.default.borderColor};
  border-radius: 14px;

  @media (max-width: 600px) {
    padding: 7px 14px;
  }
`,kt=p(W)`
  color: ${n=>n.theme.stakingPrimaryText};
`,wn=p(Ce)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
  flex-direction: row;
  justify-content: inherit;
  flex: 1;
`,fn=({getLpPoolStats:n,poolStats:t,setPoolStats:a})=>{const[o,s]=et.useState(""),[i,r]=et.useState(),l=()=>{const h=t.epochEndTime,y=new Date().getTime()+h*1e3;r(y)};et.useEffect(()=>{t&&l()},[t]);const d=()=>{if(t!=null&&t.epochEndTimestamp){t.epochEndTimestamp.toNumber();const h=new Date().getTime(),y=i-h;y<0&&(a(null),n());const x=Math.floor(y/(1e3*60*60*24)),U=Math.floor(y%(1e3*60*60*24)/(1e3*60*60)),I=Math.floor(y%(1e3*60*60)/(1e3*60)),L=Math.floor(y%(1e3*60)/1e3);s(`${x}D ${U}H ${I}M ${L}S`)}};return et.useEffect(()=>{const h=setTimeout(()=>{d()},1e3);return()=>clearTimeout(h)}),e.jsxs(Sn,{children:[e.jsxs(rt,{alignItems:"baseline",justifyContent:"center",background:"linear-gradient(0deg, #7ADDB3, #7ADDB3), #FFFFFF",children:[e.jsx(pt,{background:"radial-gradient(70% 90% at 40% 16.25%, #7CDCB4 2.6%, #7ADDB3 53.65%, #E888F8 85.42%, #F99DEA 100%)"}),t?e.jsx(e.Fragment,{children:e.jsxs(ut,{children:[e.jsx(lt,{children:"Total Value Locked"}),e.jsx(dt,{children:`$ ${X(t==null?void 0:t.totalValueLocked.toFixed(2))}`})]})}):e.jsx(ot,{})]}),e.jsxs(rt,{alignItems:"baseline",justifyContent:"center",background:"#F58DF8",children:[e.jsx(pt,{background:"radial-gradient(70% 90% at 40% 16.25%, #F58DF8 2.6%, #F47EF8 53.65%, #A17DEF 85.42%, #AE68F4 100%)"}),t?e.jsx(e.Fragment,{children:e.jsxs(ut,{children:[e.jsx(lt,{children:"Push Rewards Given"}),e.jsxs(ct,{justifyContent:"end",children:[e.jsx(dt,{children:X(Math.min(K(t==null?void 0:t.pushRewardsDistributed),K(t==null?void 0:t.totalDistributedAmount)))}),e.jsxs(ye,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:["out of ",X(K(t==null?void 0:t.totalDistributedAmount))]})]})]})}):e.jsx(ot,{})]}),e.jsxs(rt,{alignItems:"baseline",justifyContent:"center",background:"#A17DEF",children:[e.jsx(pt,{background:"radial-gradient(70% 90% at 40% 16.25%, #A17DEF 2.6%, #9770ED 53.65%, #DF7EEF 85.42%, #F488E3 100%)"}),o?e.jsx(e.Fragment,{children:e.jsxs(ut,{children:[e.jsx(lt,{children:"Time Left"}),e.jsxs(ct,{justifyContent:"end",children:[e.jsx(dt,{children:o}),e.jsx(ye,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:"until next epoch"})]})]})}):e.jsx(ot,{})]})]})},ot=()=>{const n=Re(1300);return e.jsxs(bn,{padding:"21px 15px",children:[e.jsx(g,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(g,{height:"26px;",width:n?"175px":"189px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(g,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"})]})},Sn=p(b)`
  column-gap: 12px;

  @media (max-width: 992px) {
    flex-direction: column;
    row-gap: 12px;
  }
`,rt=p(R)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`,pt=p(R)`
  position: absolute;
  width: 170px;
  height: 170px;
  right: 5px;
  top: -35px;
  border-radius: 50%;

  box-shadow: 0px 30px 50px rgba(240, 86, 254, 0.5);
  filter: blur(2.5px);
`,lt=p(ye)`
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
`,dt=p(ye)`
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
`,ct=p(R)`
  align-items: flex-start;
`,ut=p(ct)`
  padding: 20px 10px 20px 15px;
  // gap: 8px;
  justify-content: center;
`,bn=p(Ce)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  justify-content: center;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,ht=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"channelType",type:"uint8"},{indexed:!1,internalType:"bytes",name:"identity",type:"bytes"}],name:"AddChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!1,internalType:"bytes",name:"_subGraphData",type:"bytes"}],name:"AddSubGraph",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"oldBridge",type:"address"},{indexed:!0,internalType:"address",name:"newBridge",type:"address"}],name:"BridgeAddressUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"}],name:"ChannelBlocked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"_channel",type:"address"},{indexed:!1,internalType:"uint256",name:"totalNotifOptions",type:"uint256"},{indexed:!1,internalType:"string",name:"_notifSettings",type:"string"},{indexed:!1,internalType:"string",name:"_notifDescription",type:"string"}],name:"ChannelNotifcationSettingsAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"ChannelOwnershipTransfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"revoker",type:"address"}],name:"ChannelVerificationRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"verifier",type:"address"}],name:"ChannelVerified",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountClaimed",type:"uint256"}],name:"ChatIncentiveClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountRefunded",type:"uint256"}],name:"DeactivateChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"requestSender",type:"address"},{indexed:!1,internalType:"address",name:"requestReceiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amountForReqReceiver",type:"uint256"},{indexed:!1,internalType:"uint256",name:"feePoolAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"}],name:"IncentivizeChatReqReceived",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountDeposited",type:"uint256"}],name:"ReactivateChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"oldRelayer",type:"address"},{indexed:!0,internalType:"address",name:"newRelayer",type:"address"}],name:"RelayerAddressUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"rewardAmount",type:"uint256"}],name:"RewardsClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"rewardAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"fromEpoch",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tillEpoch",type:"uint256"}],name:"RewardsHarvested",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountStaked",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountRefunded",type:"uint256"}],name:"TimeBoundChannelDestroyed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountUnstaked",type:"uint256"}],name:"Unstaked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!1,internalType:"bytes",name:"identity",type:"bytes"}],name:"UpdateChannel",type:"event"},{inputs:[],name:"ADD_CHANNEL_MIN_FEES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"CHANNEL_POOL_FUNDS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"CREATE_CHANNEL_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DOMAIN_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"FEE_AMOUNT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MIN_POOL_CONTRIBUTION",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PROTOCOL_POOL_FEES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PUSH_TOKEN_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"REFERRAL_CODE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"UNISWAP_V2_ROUTER",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"WETH_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"aDaiAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_rewardAmount",type:"uint256"}],name:"addPoolFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"_subGraphData",type:"bytes"}],name:"addSubGraph",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_startIndex",type:"uint256"},{internalType:"uint256",name:"_endIndex",type:"uint256"},{internalType:"address[]",name:"_channelList",type:"address[]"}],name:"batchVerification",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channelAddress",type:"address"}],name:"blockChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"bridgeAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_epochId",type:"uint256"}],name:"calculateEpochRewards",outputs:[{internalType:"uint256",name:"rewards",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"celebUserFunds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"channelById",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channelNotifSettings",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channelUpdateCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channels",outputs:[{internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"channelType",type:"uint8"},{internalType:"uint8",name:"channelState",type:"uint8"},{internalType:"address",name:"verifiedBy",type:"address"},{internalType:"uint256",name:"poolContribution",type:"uint256"},{internalType:"uint256",name:"channelHistoricalZ",type:"uint256"},{internalType:"uint256",name:"channelFairShareCount",type:"uint256"},{internalType:"uint256",name:"channelLastUpdate",type:"uint256"},{internalType:"uint256",name:"channelStartBlock",type:"uint256"},{internalType:"uint256",name:"channelUpdateBlock",type:"uint256"},{internalType:"uint256",name:"channelWeight",type:"uint256"},{internalType:"uint256",name:"expiryTime",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"channelsCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"claimChatIncentives",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_notifOptions",type:"uint256"},{internalType:"string",name:"_notifSettings",type:"string"},{internalType:"string",name:"_notifDescription",type:"string"},{internalType:"uint256",name:"_amountDeposited",type:"uint256"}],name:"createChannelSettings",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"_channelType",type:"uint8"},{internalType:"bytes",name:"_identity",type:"bytes"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"uint256",name:"_channelExpiryTime",type:"uint256"}],name:"createChannelWithPUSH",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"daiAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tillEpoch",type:"uint256"}],name:"daoHarvestPaginated",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"deactivateChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channelAddress",type:"address"}],name:"destroyTimeBoundChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"epnsCommunicator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"epochDuration",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"epochRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"epochToTotalStakedWeight",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"genesisEpoch",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"getChannelVerfication",outputs:[{internalType:"uint8",name:"verificationStatus",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"governance",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupFairShareCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupHistoricalZ",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupLastUpdate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupNormalizedWeight",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"requestSender",type:"address"},{internalType:"address",name:"requestReceiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"vaa",type:"bytes"}],name:"handleChatRequestData",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"harvestAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_tillEpoch",type:"uint256"}],name:"harvestPaginated",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_pushChannelAdmin",type:"address"},{internalType:"address",name:"_pushTokenAddress",type:"address"},{internalType:"address",name:"_wethAddress",type:"address"},{internalType:"address",name:"_uniswapRouterAddress",type:"address"},{internalType:"address",name:"_lendingPoolProviderAddress",type:"address"},{internalType:"address",name:"_daiAddress",type:"address"},{internalType:"address",name:"_aDaiAddress",type:"address"},{internalType:"uint256",name:"_referralCode",type:"uint256"}],name:"initialize",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"initializeStake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"isMigrationComplete",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_from",type:"uint256"},{internalType:"uint256",name:"_to",type:"uint256"}],name:"lastEpochRelative",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lendingPoolProviderAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"pauseContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"previouslySetEpochRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"pushChannelAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"reactivateChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"relayerAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_bridge",type:"address"}],name:"setBridgeAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_commAddress",type:"address"}],name:"setEpnsCommunicatorAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newFees",type:"uint256"}],name:"setFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_governanceAddress",type:"address"}],name:"setGovernanceAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newFees",type:"uint256"}],name:"setMinChannelCreationFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newAmount",type:"uint256"}],name:"setMinPoolContribution",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_relayer",type:"address"}],name:"setRelayerAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalStakedAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_newAdmin",type:"address"}],name:"transferPushChannelAdminControl",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unPauseContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unstake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"unverifyChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"},{internalType:"bytes",name:"_newIdentity",type:"bytes"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"updateChannelMeta",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userFeesInfo",outputs:[{internalType:"uint256",name:"stakedAmount",type:"uint256"},{internalType:"uint256",name:"stakedWeight",type:"uint256"},{internalType:"uint256",name:"lastStakedBlock",type:"uint256"},{internalType:"uint256",name:"lastClaimedBlock",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"usersRewardsClaimed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"verifyChannel",outputs:[],stateMutability:"nonpayable",type:"function"}];class Ct{static createInterface(){return new ma(ht)}static connect(t,a){return new k(t,ht,a)}}N(Ct,"abi",ht);const Pt={config:{SLOTS:{userFeesInfo:134}},epochDuration:21*7156},ge={toBN:n=>m.from(n),getCoreV2Contract:(n,t)=>Ct.connect(t,n),lastEpochRelative:(n,t)=>Math.floor((t-n)/Pt.epochDuration+1),epochToUserStakedWeight:async(n,t,a,o)=>{const s=Pt.config.SLOTS.userFeesInfo,i=Ht(["uint256","uint256"],[t,s]),r=m.from(i).add(4).toHexString(),l=Ht(["uint256","uint256"],[a,r]),d=await n.getStorageAt(o,l);return m.from(d)},deepCopy(n){return JSON.parse(JSON.stringify(n))},getEmptyState(){return{currentEpoch:0,currentBlockNumber:0,genesisEpoch:0,epochRewards:[],lastEpochInitialized:0,lastTotalStakeEpochInitialized:0,epochToTotalStakedWeight:[],previouslySetEpochRewards:m.from(0),userFeesInfo:{epochToUserStakedWeight:[],lastClaimedBlock:m.from(0),lastStakedBlock:m.from(0),stakedAmount:m.from(0),stakedWeight:m.from(0)}}}};class At{constructor(t,a){N(this,"STATE");N(this,"coreV2Contract");N(this,"userAddress");this.coreV2Contract=t,this.userAddress=a,this.STATE=ge.getEmptyState()}async initState(){const t=this.coreV2Contract,a=await t.provider.getBlockNumber(),o=await t.genesisEpoch().then(x=>x.toNumber()),s=ge.lastEpochRelative(o,a);this.STATE.currentBlockNumber=a,this.STATE.genesisEpoch=o,this.STATE.currentEpoch=s,this.STATE.currentBlockNumber=a,this.STATE.genesisEpoch=o,this.STATE.currentEpoch=s;const i=Array.from({length:s+1},(x,U)=>U),r=await Promise.all(i.map(x=>t.epochRewards(x))),l=await Promise.all(i.map(x=>t.epochToTotalStakedWeight(x))),d=await t.provider.getStorageAt(t.address,129).then(x=>Number(x)),h=await t.provider.getStorageAt(t.address,130).then(x=>Number(x));this.STATE.lastEpochInitialized=d,this.STATE.lastTotalStakeEpochInitialized=h,this.STATE.epochRewards=r,this.STATE.epochToTotalStakedWeight=l,this.STATE.previouslySetEpochRewards=await t.previouslySetEpochRewards();const y=await t.userFeesInfo(this.userAddress);this.STATE.userFeesInfo.stakedAmount=y.stakedAmount,this.STATE.userFeesInfo.stakedWeight=y.stakedWeight,this.STATE.userFeesInfo.lastStakedBlock=y.lastStakedBlock,this.STATE.userFeesInfo.lastClaimedBlock=y.lastClaimedBlock,this.STATE.userFeesInfo.epochToUserStakedWeight=await Promise.all(i.map(x=>ge.epochToUserStakedWeight(t.provider,this.userAddress,x,this.coreV2Contract.address)))}async _setupEpochsRewardAndWeights(t){const a=this.coreV2Contract,o=await a.genesisEpoch().then(r=>r.toNumber()),s=ge.lastEpochRelative(o,this.STATE.lastEpochInitialized),i=this.STATE.currentEpoch;if(console.debug(`

Doing with: _currentEpoch, _lastEpochInitiliazed`,i,s,`
`),i>s||i==1){const r=await a.PROTOCOL_POOL_FEES(),l=await a.previouslySetEpochRewards(),d=r.sub(l);i-s>1?this.STATE.epochRewards[i-1]=this.STATE.epochRewards[i-1].add(d):this.STATE.epochRewards[i]=ge.toBN(this.STATE.epochRewards[i].toString()).add(d),this.STATE.lastEpochInitialized=await a.provider.getBlockNumber(),this.STATE.previouslySetEpochRewards=r}if(this.STATE.lastTotalStakeEpochInitialized==0||this.STATE.lastTotalStakeEpochInitialized==i)this.STATE.epochToTotalStakedWeight[i]=this.STATE.epochToTotalStakedWeight[i].add(t);else{for(let r=this.STATE.lastTotalStakeEpochInitialized+1;r<=i-1;r++)this.STATE.epochToTotalStakedWeight[r].toNumber()==0&&(this.STATE.epochToTotalStakedWeight[r]=this.STATE.epochToTotalStakedWeight[this.STATE.lastTotalStakeEpochInitialized]);this.STATE.epochToTotalStakedWeight[i]=this.STATE.epochToTotalStakedWeight[this.STATE.lastTotalStakeEpochInitialized].add(t)}this.STATE.lastTotalStakeEpochInitialized=i}async _adjustUserAndTotalStake(t){await this._setupEpochsRewardAndWeights(t);const a=this.STATE.currentEpoch,o=this.STATE.userFeesInfo.stakedWeight;if(o.isZero())this.STATE.userFeesInfo.stakedWeight=ge.toBN(t);else{const s=ge.lastEpochRelative(this.STATE.genesisEpoch,this.STATE.userFeesInfo.lastStakedBlock.toNumber());if(a==s)this.STATE.userFeesInfo.stakedWeight=o.add(t);else for(let i=s;i<=a;i++)i!=a?this.STATE.userFeesInfo.epochToUserStakedWeight[i]=o:(this.STATE.userFeesInfo.stakedWeight=o.add(t),this.STATE.userFeesInfo.epochToUserStakedWeight[i]=this.STATE.userFeesInfo.stakedWeight)}t!=0&&(this.STATE.userFeesInfo.lastStakedBlock=ge.toBN(this.STATE.currentBlockNumber))}calculateEpochRewards(t){return this.STATE.userFeesInfo.epochToUserStakedWeight[t].mul(this.STATE.epochRewards[t]).div(this.STATE.epochToTotalStakedWeight[t].add(1))}async estimateHarvestAll(){await this.initState();const t=this.STATE.currentEpoch-1;if(await this._adjustUserAndTotalStake(0),!(this.STATE.currentEpoch>t))return ge.toBN(0);const a=ge.lastEpochRelative(this.STATE.genesisEpoch,Math.max(this.STATE.userFeesInfo.lastClaimedBlock.toNumber(),this.STATE.genesisEpoch));if(this.coreV2Contract,!(t>=a))return ge.toBN(0);let o=ge.toBN(0);for(let s=a;s<=t;s++){const i=this.calculateEpochRewards(s);o=o.add(i)}return o}async getUserPotentialEpochReward(){await this.initState(),await this._setupEpochsRewardAndWeights(0);const t=this.STATE.epochRewards[this.STATE.currentEpoch],a=this.STATE.epochToTotalStakedWeight[this.STATE.currentEpoch],o=this.STATE.userFeesInfo.stakedWeight.mul(t).div(a),s=this.STATE.currentEpoch,i=this.STATE.userFeesInfo.stakedAmount;return{potentialReward:o,epochRewards:t,userStaked:i,currentEpochNumber:s}}}const vt=async(n,t,a)=>{const o=ge.getCoreV2Contract(n,a),s=new At(o,t),i=new At(o,t),[r,l]=await Promise.all([s.estimateHarvestAll(),i.getUserPotentialEpochReward()]);return{availableRewards:r,...l}},Rt=m.from(1).mul(m.from(10).pow(m.from(18))),jn=59400,En=75300,kn=1323100,He=function(n,t=null){return m.from(n)},Ne=n=>n.mul(m.from(10).pow(m.from(18))),ne=n=>parseFloat(ya(n)),Cn="0x0000000000000000000000000000000000000001",ve=class ve{constructor(){N(this,"state",{account:null,signer:null,staking:null,yieldFarmingPUSH:null,yieldFarmingLP:null,rewardForCurrentEpochPush:null,rewardForCurrentEpochLP:null,highCapLPStakingAPR:200,highCapPUSHStakingAPR:200,genesisEpochAmountPUSH:jn,deprecationPerEpochPUSH:900,genesisEpochAmountLP:En,deprecationPerEpochLP:900,annualPushReward:kn,uniswapV2Router02:null});N(this,"init",(t,a,o,s,i,r)=>{this.state.account=t,this.state.staking=a,this.state.pushToken=o,this.state.pushCoreV2=s,this.state.yieldFarmingLP=i,this.state.uniswapV2Router02=r});N(this,"getPoolStats",t=>new Promise(async(a,o)=>{const s=this.state.pushCoreV2,i=this.state.yieldFarmingLP,r=await i.getCurrentEpoch(),l=await this.currentEpochCalculation(t);let d;const h=await this.state.uniswapV2Router02.getAmountsOut(Rt.toString(),[c.pushToken,c.WETHAddress,c.USDTAddress]);Q.coreContractChain===42||Q.coreContractChain===5?d=ne(h[h.length-1]):d=h[h.length-1].toNumber()/1e6;const y=ne(await this.state.pushToken.balanceOf(c.uniV2LPToken)),x=ne(await this.state.pushToken.attach(c.WETHAddress).balanceOf(c.uniV2LPToken));let U;const I=await this.state.uniswapV2Router02.getAmountsOut(Rt.toString(),[c.WETHAddress,c.USDTAddress]);Q.coreContractChain===42||Q.coreContractChain===5?U=ne(I[I.length-1]):U=I[I.length-1].toNumber()/1e6;const L=ne(await this.state.pushToken.attach(c.uniV2LPToken).totalSupply()),C=(y*d+x*U)/L,_=C/d,z=ne(await i.getPoolSize(r.add(1))),ae=ne(await s.totalStakedAmount())*d+z*C,G=await i.epochDuration(),ie=(await i.epochStart()).add(r.sub(1).mul(G)).add(G);let Y=await t.getBlock("latest");Y=Y.number;const D=await s.genesisEpoch(),T=await s.epochDuration();let V=(T.toNumber()-(Y-D.toNumber())%T.toNumber())*12.6;V=Math.round(V);const M=Ne(m.from(this.state.annualPushReward)),S=await i.TOTAL_DISTRIBUTED_AMOUNT(),F=M.add(S),q=await this.getPushRewardsDistributed(l,r);a({pushPrice:d,lpToPushRatio:_,epochEndTimestamp:ie,epochEndTime:V,totalValueLocked:ae,totalDistributedAmount:F,pushRewardsDistributed:q})}));N(this,"getPushRewardsDistributed",async(t,a)=>{const o=this.state.pushCoreV2,s=await this.state.yieldFarmingLP.NR_OF_EPOCHS();a=a.toNumber()>s.toNumber()?s:a;const i=Ne(m.from(this.state.genesisEpochAmountLP)),r=Ne(m.from(this.state.deprecationPerEpochLP));let l=m.from(0),d=m.from(0);for(var h=0;h<a.toNumber();h++){const y=this.calcTotalAmountPerEpoch(i,m.from(h),r);d=d.add(y);const x=await o.epochRewards(h);d=d.add(x)}return l.add(d)});N(this,"getLPPoolStats",async t=>new Promise(async(a,o)=>{const s=this.state.yieldFarmingLP,i=await s.NR_OF_EPOCHS(),r=await s.getCurrentEpoch().then(U=>U.toNumber()>i.toNumber()?i:U),l=Ne(m.from(this.state.genesisEpochAmountLP)),d=Ne(m.from(this.state.deprecationPerEpochLP)),h=this.calcTotalAmountPerEpoch(l,r,d);this.state.rewardForCurrentEpochLP=h;const y=await s.getPoolSize(r.add(1));let x=await this.calcLPPoolAPR(l,r,d,y,t);x=Math.min(this.state.highCapLPStakingAPR,x),a({currentEpochLP:r,totalEpochLP:i,rewardForCurrentEpoch:h,poolBalance:y,stakingAPR:x})}));N(this,"getUserDataLP",async()=>new Promise(async(t,a)=>{if(this.state.account){const o=this.state.yieldFarmingLP,s=await o.NR_OF_EPOCHS(),i=await o.getCurrentEpoch().then(L=>L.toNumber()>s.toNumber()?s:L);let r=o.getEpochStake(this.state.account,i.add(1));const l=(await this.calculateUserEpochReward(i.toNumber(),o)).toFixed(2),d=(await o.lastEpochIdHarvested(this.state.account)).toNumber();let h=this.getAccumulatedReward(i,o),y=this.getTotalAvailableRewards(d,i,o),[x,U,I]=await Promise.all([h,y,r]);t({potentialUserReward:l,epochStakeNext:I,totalAccumulatedReward:x,totalAvailableReward:U})}}));N(this,"calculateLpEpochRewards",async(t,a)=>{t=t+1;const o=ne(await a.getEpochStake(this.state.account,t)),s=ne(await a.getPoolSize(t));let i=0;if(s>0&&a.address==c.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,d=r-l*t;i=o/s*d}return i});N(this,"getAccumulatedReward",async(t,a)=>{let o=[];for(var s=0;s<t.sub(1).toNumber();s++){const r=this.calculateLpEpochRewards(s,a);o.push(r)}let i=(await Promise.all(o)).reduce((r,l)=>r+l,0);return i=i.toFixed(2),i});N(this,"getTotalAvailableRewards",async(t,a,o)=>{let s=[];for(var i=t;i<a.sub(1).toNumber();i++){const l=this.calculateLpEpochRewards(i,o);s.push(l)}let r=(await Promise.all(s)).reduce((l,d)=>l+d,0);return r=r.toFixed(2),r});N(this,"getUserDataPUSH",async t=>new Promise(async(a,o)=>{if(this.state.account){const s=this.state.pushCoreV2;let{epochRewards:i=He(0),currentEpochNumber:r=0,userStaked:l=He(0),potentialReward:d=He(0),availableRewards:h=He(0)}={};({epochRewards:i,currentEpochNumber:r}=await vt(t,this.state.account,c.pushCoreV2)),this.state.account!==Cn&&({userStaked:l,potentialReward:d,availableRewards:h}=await vt(t,this.state.account,c.pushCoreV2));const y=await s.totalStakedAmount();let x=await s.usersRewardsClaimed(this.state.account);x=ne(x);let U=i;this.state.rewardForCurrentEpochPush=U;let I=this.calcPushStakingAPR(y);I=Math.min(this.state.highCapPUSHStakingAPR,I),d=ne(d),h=ne(h),a([{currentEpochNumber:r,currentReward:U,totalStakedAmount:y,stakingAPR:I},{userStaked:l,claimedReward:x,potentialReward:d,availableRewards:h}])}}));N(this,"calculateUserEpochReward",async(t,a)=>{const o=ne(await a.getEpochStake(this.state.account,t)),s=ne(await a.getPoolSize(t));let i=0;if(s>0&&a.address==c.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,d=r-l*t;i=o/s*d}return i});N(this,"calcTotalAmountPerEpoch",(t,a,o)=>a.toNumber()===0?t.mul(0):t.sub(a.mul(o)));N(this,"currentEpochCalculation",async t=>{const a=this.state.pushCoreV2,o=await a.genesisEpoch(),s=await t.getBlock("latest");return await a.lastEpochRelative(o,s.number)});N(this,"calcAnnualEpochReward",(t,a,o)=>{const s=this.calcTotalAmountPerEpoch(t,a,o);let i=s;for(let r=a.toNumber();r<a.toNumber()+12;r++)i=i.add(s.sub(o.mul(r)));return i});N(this,"calcPushStakingAPR",t=>{const a=this.state.annualPushReward;let o;return Q.coreContractChain===42||Q.coreContractChain===5?o=a/Math.max(ne(t),1)*100:o=a/ne(t)*100,o.toFixed(2)});N(this,"calcLPPoolAPR",async(t,a,o,s,i)=>{const r=this.calcAnnualEpochReward(t,a,o),l=s*i.lpToPushRatio;return(r.mul(100)/l).toFixed(2)})}static getInstance(){return ve.instance||(ve.instance=new ve),ve.instance}};N(ve,"instance",null);let ke=ve;const Mt=({onClose:n,InnerComponentProps:t,toastObject:a})=>{const{title:o,getUserData:s,getPoolStats:i,setUnstakeErrorMessage:r,setWithdrawErrorMessage:l}=t,{account:d,provider:h,isWalletConnected:y,connect:x}=Pe(),[U,I]=u.useState(0),[L,C]=u.useState(0),[_,z]=u.useState(!1),[ae,G]=u.useState(!1),[ie,Y]=u.useState(!1);u.useState(null),u.useContext(_t);const[D,T]=u.useState(0),V=()=>{r(null),l(null),n()},M=Ve(),S=u.useRef(null);Gt(S,()=>V());const F=async()=>{var f=h.getSigner(d);const w=o==="Uni-V2"?c.uniV2LPToken:c.pushToken,P=new k(w,v.uniV2LpToken,f);let A=nn(await P.balanceOf(d));I(parseInt(A.toString().replace(/\D/,""))||0)},q=async()=>{G(!0);var f=h.getSigner(d);let w;o==="Uni-V2"?w=await new k(c.uniV2LPToken,v.uniV2LpToken,f).allowance(d,c.stakingV2):w=await new k(c.pushToken,v.uniV2LpToken,f).allowance(d,c.pushCoreV2),C(K(w)),G(!1)};u.useEffect(()=>{F(),q()},[]);const Te=async()=>{if(!y){x();return}if(_||ae)return;G(!0);var f=h.getSigner(d);let w;const P=fa(D.toString(),18);o==="Uni-V2"?w=new k(c.uniV2LPToken,v.uniV2LpToken,f).approve(c.stakingV2,P):w=new k(c.pushToken,v.uniV2LpToken,f).approve(c.pushCoreV2,P),w.then(async A=>{a.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await h.waitForTransaction(A.hash),a.showMessageToast({toastTitle:"Success",toastMessage:`Successfully approved ${o} Tokens!`,toastType:"SUCCESS",getToastIcon:E=>e.jsx(ue,{size:E,color:"green"})}),G(!1),z(!0)}catch(E){console.error("Error",E),a.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:O=>e.jsx(H,{size:O,color:"red"})}),G(!1)}}).catch(A=>{console.error("Error",A),a.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature",toastType:"ERROR",getToastIcon:E=>e.jsx(H,{size:E,color:"red"})}),G(!1)})},B=async()=>{if(!y){x();return}if(ie||!_)return;if(Y(!0),D==0){a.showMessageToast({toastTitle:"Error",toastMessage:`You need to deposit atleast 1 ${o} token `,toastType:"ERROR",getToastIcon:P=>e.jsx(H,{size:P,color:"red"})}),Y(!1);return}var f=h.getSigner(d);let w;o==="Uni-V2"?w=new k(c.stakingV2,v.stakingV2,f).deposit(c.uniV2LPToken,m.from(D).mul(m.from(10).pow(18))):w=new k(c.pushCoreV2,v.pushCoreV2,f).stake(m.from(D).mul(m.from(10).pow(18))),w.then(async P=>{a.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await h.waitForTransaction(P.hash),a.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:A=>e.jsx(ue,{size:A,color:"green"})}),i(),s(),Y(!1),V()}catch(A){console.error("Error",A),a.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${A.name}+ ")`,toastType:"ERROR",getToastIcon:E=>e.jsx(H,{size:E,color:"red"})}),Y(!1)}}).catch(P=>{console.error("Error in depositing",P),P.reason=P.reason.slice(P.reason.indexOf("::")+1),a.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Cancelled! ${P.reason}`,toastType:"ERROR",getToastIcon:A=>e.jsx(H,{size:A,color:"red"})}),Y(!1)})},te=f=>{f.preventDefault(),T(parseInt(f.target.value.replace(/\D/,""))||0),L>=parseInt(f.target.value.replace(/\D/,""))?z(!0):z(!1)},we=f=>{T(parseInt(f.toString().replace(/\D/,""))||0)},j=Re(600);return e.jsxs(Pn,{children:[e.jsxs(b,{justifyContent:"space-between",children:[e.jsx(An,{children:o==="Uni-V2"?"Uniswap V2 Staking Pool":"Push Fee Staking Pool"}),e.jsx(yt,{onClick:()=>V(),style:{cursor:"pointer"}})]}),e.jsxs(R,{children:[e.jsx(wa,{weight:"500",size:"14px",self:"baseline",color:M.stakingSecondaryText,children:"You are Staking"}),e.jsxs(b,{width:"-webkit-fill-available",background:M.default.bg,height:"60px",padding:j?"8px":"14px",borderRadius:"12px",border:`1px solid ${M.modalBorderColor}`,children:[e.jsx(vn,{placeholder:"Enter Amount",flex:"2",radius:"4px",size:"32px",height:"32px",self:"auto",bg:"#FFF",color:M.stakingSecondaryText,value:D,onChange:f=>{f.preventDefault(),te(f)},autoFocus:!0}),e.jsxs(Rn,{onClick:()=>we(U),children:["Max: ",U]})]})]}),e.jsxs(b,{margin:"20px 0",children:[e.jsxs(Mn,{onClick:Te,background:_?M.stakingEmptyButtonBG:"#D53A94",cursor:_?"default":"pointer",disabled:!!_,children:[!_&&!ae&&e.jsxs(Oe,{color:"#FFFFFF",weight:"400",cursor:"pointer",children:["Approve ",o]}),ae&&!_&&e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:"#fff",title:"Approving",titleColor:"#FFF"}),_&&e.jsx(Oe,{color:M.emptyButtonText,weight:"600",cursor:"default",children:"Approved"})]}),e.jsxs(Fn,{cursor:_?"pointer":"default",background:_?"#D53A94":M.stakingEmptyButtonBG,disabled:!!(!_||ie),onClick:B,children:[!ie&&e.jsx(Oe,{color:_?"#FFFFFF":M.emptyButtonText,weight:"400",cursor:_?"pointer":"default",children:"Deposit"}),ie&&e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFFF",title:"Depositing",titleColor:"#FFF"})]})]})]})},Pn=p.div`
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
`,An=p(W)`
  font-size: 16px;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};
`,vn=p(Ta)`
  background: transparent;
`,Rn=p.p`
  font-size: 14px;
  text-align: right;
  text-decoration-line: underline;
  color: #657795;
  margin: 0px;
  cursor: pointer;
`,Mn=p(fe)`
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  line-height: 141%;
  letter-spacing: normal;
  width: 145px;
  height: 48px;
  border: none;
  & > div {
    display: block;
  }
  &:after {
    background: transparent;
  }

  &:hover {
    opacity: 1;
  }
`,Fn=p(fe)`
  font-size: 16px;
  line-height: 19px;
  flex: 1;
  width: 145px;
  height: 48px;
  border-radius: 8px;
  margin-left: 10px;
  border: none;
  & > div {
    display: block;
  }
  &:after {
    background: transparent;
  }

  &:hover {
    opacity: 1;
  }
`,Un=({lpPoolStats:n,userDataLP:t,getLpPoolStats:a,getUserDataLP:o})=>{const{account:s,provider:i}=Pe(),[r,l]=u.useState(!1),[d,h]=u.useState(!1),[y,x]=u.useState(null),[U,I]=u.useState(null),L=Be(),C=Ve(),_=async()=>{if(r)return;l(!0);const V=K(t.epochStakeNext);if(V==0){I("Nothing to unstake. You need to stake first"),l(!1);return}var M=i.getSigner(s);let S=new k(c.stakingV2,v.stakingV2,M);await S.balanceOf(s,c.uniV2LPToken),S.withdraw(c.uniV2LPToken,m.from(V).mul(m.from(10).pow(18))).then(async F=>{L.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await i.waitForTransaction(F.hash),L.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:q=>e.jsx(ue,{size:q,color:"green"})}),l(!1),a(),o()}catch(q){console.error("Error",q),L.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${q.name}+ ")`,toastType:"ERROR",getToastIcon:Te=>e.jsx(H,{size:Te,color:"red"})}),l(!1)}}).catch(F=>{L.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:q=>e.jsx(H,{size:q,color:"red"})}),l(!1)})},z=async()=>{if(!d){if((t==null?void 0:t.totalAvailableReward)==0){x("No Rewards to Claim!");return}if(console.debug("Lp POOL stats",n),!n.currentEpochLP||n.currentEpochLP==1){L.showMessageToast({toastTitle:"Error",toastMessage:"Harvest unlocks from Epoch 2!)",toastType:"ERROR",getToastIcon:M=>e.jsx(H,{size:M,color:"red"})});return}h(!0);var V=i.getSigner(s);new k(c.yieldFarmLP,v.yieldFarming,V).massHarvest().then(async M=>{L.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await i.waitForTransaction(M.hash),L.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:S=>e.jsx(ue,{size:S,color:"green"})}),o(),h(!1)}catch(S){L.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${S.name}+ ")`,toastType:"ERROR",getToastIcon:F=>e.jsx(H,{size:F,color:"red"})}),h(!1)}}).catch(M=>{L.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:S=>e.jsx(H,{size:S,color:"red"})}),h(!1)})}};u.useEffect(()=>{x(null),I(null)},[s]);const ae=()=>{(n==null?void 0:n.currentEpochLP.toNumber())+1<=(n==null?void 0:n.totalEpochLP.toNumber())?ie():L.showMessageToast({toastTitle:"Error",toastMessage:"Epochs have ended!",toastType:"ERROR",getToastIcon:V=>e.jsx(H,{size:V,color:"red"})})},{isModalOpen:G,showModal:ie,ModalComponent:Y}=tt(),D=Be(),T=Re(600);return e.jsxs(In,{children:[e.jsx(Y,{InnerComponent:Mt,InnerComponentProps:{title:"Uni-V2",getUserData:o,getPoolStats:a,setUnstakeErrorMessage:I,setWithdrawErrorMessage:x},toastObject:D,modalPosition:nt.ON_PARENT}),e.jsx(R,{margin:"0px 0px 20px 0px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(Nn,{children:"Uniswap V2 LP Staking Pool"}),e.jsxs(xt,{children:["Current APR"," ",e.jsxs(ye,{color:"#D53A94",fontWeight:"600",children:[">",X(n==null?void 0:n.stakingAPR),"%"]})]})]}):e.jsxs(Le,{padding:"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(g,{height:"12px",width:"112px"})]})}),e.jsxs(R,{flex:"5",children:[e.jsxs(Ln,{border:`1px solid ${C.stakingBorder}`,borderRadius:"16px",children:[e.jsx(R,{margin:T?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:T?" 7px":"10px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(xt,{children:"Current Reward"}),e.jsxs(W,{fontSize:T?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:[X(K(n==null?void 0:n.rewardForCurrentEpoch))," PUSH"]})]}):e.jsxs(Le,{padding:T?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:T?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:T?"65px":"100px}"})]})}),e.jsx(Dn,{width:"10px",height:"100%"}),e.jsx(R,{margin:T?"0 0 0 6px":"0 0 0 18px",padding:T?" 7px":"10px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(xt,{children:"Total Staked"}),e.jsxs(zn,{fontSize:T?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[X(K(n==null?void 0:n.poolBalance))," UNI-V2"]})]}):e.jsxs(Le,{padding:T?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:T?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:T?"65px":"100px}"})]})})]}),e.jsx(b,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:n?e.jsxs(e.Fragment,{children:[e.jsx(Ft,{children:"Current Epoch"}),e.jsxs(Ft,{children:[Math.min(n==null?void 0:n.currentEpochLP,n==null?void 0:n.totalEpochLP).toString(),"/",n==null?void 0:n.totalEpochLP.toString()]})]}):e.jsx(Le,{padding:"5px 0px 0 15px",children:e.jsx(g,{height:"12px",width:"124px"})})}),t?e.jsxs(R,{children:[e.jsxs(b,{justifyContent:"space-between",margin:T?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ge,{children:["User Deposit",e.jsx(Ye,{children:e.jsx(J,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(re,{src:xe,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ke,{children:[K(t==null?void 0:t.epochStakeNext)," UNI-V2"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:T?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ge,{children:["Rewards Claimed",e.jsx(Ye,{children:e.jsx(J,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(re,{src:xe,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ke,{children:[" ",X(((t==null?void 0:t.totalAccumulatedReward)-(t==null?void 0:t.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:T?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ge,{children:["Current Epoch Reward",e.jsx(Ye,{children:e.jsx(J,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(re,{src:xe,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ke,{children:[" ",X(t==null?void 0:t.potentialUserReward)," PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:T?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ge,{children:["Available for Claiming",e.jsx(Ye,{children:e.jsx(J,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(re,{src:xe,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ke,{children:[" ",X(t==null?void 0:t.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(Ce,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]})]})]}),e.jsx(R,{padding:T?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx(Vn,{onClick:()=>{ae()},children:"Stake $UNI-V2 LP Tokens"})}),e.jsxs(Bn,{children:[K(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(J,{error:!0,ToolTipTitle:"Nothing to unstake! Stake First.",ToolTipWidth:"16rem",margin:"0 10px 0 0",bottom:"-30px",children:e.jsx(qe,{border:"none",background:C.disableButtonBg,cursor:"default",color:C.disabledButtonText,children:r?e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Unstake $UNI-V2"})}):e.jsx(qe,{border:`1px solid ${C.activeButtonText}`,background:"transparent",color:C.activeButtonText,cursor:"pointer",onClick:_,style:{margin:"0px 10px 0px 0px"},children:r?e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:C.activeButtonText,title:"Unstaking",titleColor:C.activeButtonText}):"Unstake $UNI-V2"}),(t==null?void 0:t.totalAvailableReward)==="0.00"?e.jsx(J,{bottom:"-30px",left:"40px",ToolTipTitle:"No Rewards to Claim!",error:!0,ToolTipWidth:"10rem",children:e.jsx(qe,{border:"none",cursor:"default",background:C.disableButtonBg,color:C.disabledButtonText,children:d?e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFF"}):"Claim Rewards"})}):e.jsx(qe,{border:`1px solid ${C.activeButtonText}`,background:"transparent",color:C.activeButtonText,cursor:"pointer",onClick:()=>z(),children:d?e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:C.activeButtonText,title:"Claiming",titleColor:C.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Le,{width:"100%",children:[e.jsx(g,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(g,{height:"49px",width:"100%"})]})})]})},In=p(ze)`
  border: 1px solid ${n=>n.theme.stakingBorder};
  border-radius: 24px;
  padding: 20px;

  font-family: 'FK Grotesk Neu';

  margin: 10px 0 10px 10px;

  font-style: normal;
  font-weight: 500;
  min-height: 587px;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 1300px) {
    margin: 0 0 10px 0;
  }
  @media (max-width: 600px) {
    padding: 16px;
  }
`,Nn=p(W)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`,xt=p.div`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  // color: #333333;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Ln=p(b)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,Dn=p.div`
  width: 1px;
  height: 100%;
  background: ${n=>n.theme.stakingBorder};
`,Ge=p.div`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  // color: rgba(87, 93, 115, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${n=>n.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,zn=p(W)`
  color: ${n=>n.theme.stakingSecondaryText};
`,Ft=p(Yt)`
  font-weight: 600;
  text-align: right;
  letter-spacing: normal;
  font-size: 16px;
  line-height: 141%;
  margin-right: 5px;
  color: ${n=>n.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,Ye=p(ye)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,Ke=p(W)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Bn=p.div`
  display: flex;
  width: 100%;
  margin: 15px 0px 0px 0px;
`,Vn=p(fe)`
  width: 100%;
  background: #d53a94;
  border: 1px solid #d53a94;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  line-height: 141%;
  letter-spacing: normal;
  color: #ffffff;
  cursor: pointer;
  & > div {
    display: block;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,qe=p(fe)`
  font-size: 16px;
  line-height: 19px;
  flex-direction: row;
  flex: 1;
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
`;p.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,p.div`
  margin: 0px 10px;
`;const Le=p(Ce)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`;p(g)`
  height: 25px;
  width: 100%;
  border-radius: 2px;
`,p(g)`
  height: 20px;
  width: 100%;
  border-radius: 2px;
`;const On=n=>u.createElement("svg",{width:29,height:28,viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},u.createElement("path",{d:"M26.1673 14.0002C26.1673 20.4431 20.9436 25.6668 14.5007 25.6668C8.05773 25.6668 2.83398 20.4431 2.83398 14.0002C2.83398 7.55725 8.05773 2.3335 14.5007 2.3335C20.9436 2.3335 26.1673 7.55725 26.1673 14.0002Z",fill:"#30CC8B"}),u.createElement("path",{d:"M20.6751 8.5083L12.7593 16.4335L9.49146 13.175L7.8418 14.8246L12.7616 19.7328L22.3254 10.158L20.6751 8.5083Z",fill:"white"})),$n=({onClose:n,InnerComponentProps:t})=>{const{currentTransactionNo:a,totalTransactionNo:o,transactionSteps:s,transactionText:i,setCurrentTransactionNo:r,setTotalTransactionNo:l,setTransactionSteps:d,claimRewards:h,unstakeTokensPaginated:y}=t,x=()=>{d(0),n()},U=async()=>{d(0),l(0),r(0),i!=null&&i.includes("Unstaking")?y():h()};return e.jsx(_n,{children:o?e.jsxs(e.Fragment,{children:[e.jsx(b,{justifyContent:"end",children:e.jsx(yt,{onClick:()=>x(),style:{cursor:"pointer"}})}),s===0&&e.jsxs(e.Fragment,{children:[e.jsx(Kt,{size:42,color:he.COLORS.PRIMARY_PINK,type:qt.PROCESSING}),e.jsxs(R,{gap:"24px",margin:"16px 0 0 0",children:[e.jsxs(R,{children:[e.jsxs(W,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:["Please sign transaction ",a,"/",o]}),e.jsx(W,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"Processing your request"})]}),e.jsx(W,{fontSize:"18px",fontWeight:"400",color:"#657795",children:i}),e.jsx(R,{padding:"16px",children:e.jsx(W,{fontSize:"16px",fontWeight:"400",color:"#D53A94",children:"Confirm the request in your wallet"})})]})]}),s===1&&e.jsxs(R,{gap:"24px",children:[e.jsx(R,{gap:"9px",children:e.jsx(W,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:"Transaction Error"})}),e.jsx(R,{children:e.jsx(Ut,{onClick:U,children:"Retry"})})]}),s===2&&e.jsxs(R,{gap:"24px",children:[e.jsxs(R,{children:[e.jsx(On,{height:"50px",width:"50px"}),e.jsxs(R,{gap:"9px",children:[e.jsx(W,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:"Transactions Successful"}),e.jsx(W,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"You have claimed all the rewards."})]})]}),e.jsx(R,{onClick:x,children:e.jsx(Ut,{children:"Close"})})]})]}):e.jsx(Kt,{size:42,color:he.COLORS.PRIMARY_PINK,type:qt.PROCESSING})})},_n=p(R)`
  min-width: 493px;
  padding: 32px 24px;
`,Ut=p(fe)`
  min-width: 200px;
  background: #d53a94;
  border: 1px solid #d53a94;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  line-height: 141%;
  letter-spacing: normal;
  color: #ffffff;
  cursor: pointer;
  & > div {
    display: block;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,Wn=({userDataPush:n,getUserDataPush:t,PUSHPoolstats:a,getPUSHPoolStats:o})=>{const{account:s,provider:i}=Pe(),[r,l]=u.useState(!1),[d,h]=u.useState(!1),[y,x]=u.useState(null),[U,I]=u.useState(null),[L,C]=u.useState(0),[_,z]=u.useState(0),[ae,G]=u.useState(0),[ie,Y]=u.useState(""),D=Be(),T=Ve(),V=async A=>{var E=i.getSigner(s);let O=new k(c.pushToken,v.pushToken,E);if(await O.holderDelegation(s,A.address))return!0;try{D.showLoaderToast({loaderMessage:"Delegating! Please wait.."});const $=await O.setHolderDelegation(A.address,"true");return await i.waitForTransaction($.hash),D.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Address Delegated",toastType:"SUCCESS",getToastIcon:se=>e.jsx(ue,{size:se,color:"green"})}),!0}catch($){return console.error("Error in delegating",$),D.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${$.reason}`,toastType:"ERROR",getToastIcon:se=>e.jsx(H,{size:se,color:"red"})}),l(!1),!1}},M=async A=>{const E=(await A.userFeesInfo(s)).lastClaimedBlock;if(E.toNumber()!==0){const O=await A.genesisEpoch(),$=await A.epochDuration();return(E-O)/$}},S=async()=>{if(d)return;if(h(!0),(n==null?void 0:n.availableRewards)==0){I("No Rewards to Claim"),h(!1);return}var A=i.getSigner(s);let E=new k(c.pushCoreV2,v.pushCoreV2,A);const O=a==null?void 0:a.currentEpochNumber,$=14;if(!await V(E))return;let se=1;se=await M(E),w(),h(!1);let oe=0;O-se<$,oe=Math.ceil((O-se)/$),z(oe),oe!=0&&(await F(oe,se,E,$),t(),G(2),C(0))},F=async(A,E,O,$)=>{const se=a==null?void 0:a.currentEpochNumber;let oe=0;for(let ee=0;ee<A;ee++){let Z=E;E+=$;let me=Math.min(E,se-1);Y(`Claiming the rewards from Epoch ${Z} to ${me} `),await O.harvestPaginated(me,{gasLimit:91e4}).then(async pe=>{try{D.showLoaderToast({loaderMessage:"Waiting for confirmation"}),await i.waitForTransaction(pe.hash),D.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:le=>e.jsx(ue,{size:le,color:"green"})}),oe++,C(oe)}catch{console.error("Error in the transaction",pe);return}}).catch(pe=>{throw console.error("Error in claiming the reward",pe),D.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${pe.reason}`,toastType:"ERROR",getToastIcon:le=>e.jsx(H,{size:le,color:"red"})}),Y(""),l(!1),t(),G(1),C(0),pe})}},q=async()=>{if(r)return;if(l(!0),K(n==null?void 0:n.userStaked)==0){x("Nothing to unstake, You need to stake first"),l(!1);return}var A=i.getSigner(s);let E=new k(c.pushCoreV2,v.pushCoreV2,A);const O=await V(E);if(h(!1),!O)return;const $=a==null?void 0:a.currentEpochNumber,se=14;let oe=0;if(oe=await M(E),oe>=$-1){l(!1),x("PUSH cannot be unstaked until current epoch is over."),D.showMessageToast({toastTitle:"Unstaking Error",toastMessage:"You cannot unstake until Current Epoch gets over.",toastType:"ERROR",getToastIcon:Z=>e.jsx(H,{size:Z,color:"red"})});return}w();const ee=Math.ceil(($-oe)/se);z(ee),ee>1&&await F(ee-1,oe,E,se),Y("Unstaking Your Push Tokens. Please wait..."),E.unstake().then(async Z=>{D.showLoaderToast({loaderMessage:"Unstaking! Waiting for Confirmation..."});try{await i.waitForTransaction(Z.hash),D.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:me=>e.jsx(ue,{size:me,color:"green"})}),o(),t(),l(!1),G(2),C(0)}catch(me){console.error("Error",me),D.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${me.name}+ ")`,toastType:"ERROR",getToastIcon:pe=>e.jsx(H,{size:pe,color:"red"})}),Y(""),l(!1)}}).catch(Z=>{console.error("Error: ",Z);const me=Z.reason.includes("PushCoreV2::unstake:"),pe=Z.reason.includes("PushCoreV2::harvestPaginated:");if(me||pe)x("PUSH cannot be unstaked until current epoch is over.");else{let le=Z.reason.slice(Z.reason.indexOf("::")+1);le=le.replace("unstake:",""),D.showMessageToast({toastTitle:"Error",toastMessage:`${le}`,toastType:"ERROR",getToastIcon:Se=>e.jsx(H,{size:Se,color:"red"})})}l(!1),t(),G(1),C(0)})};u.useEffect(()=>{I(null),x(null)},[s]);const{isModalOpen:Te,showModal:B,ModalComponent:te}=tt(),we=Be(),j=Re(600),{isModalOpen:f,showModal:w,ModalComponent:P}=tt();return e.jsxs(Kn,{children:[e.jsx(te,{InnerComponent:Mt,InnerComponentProps:{title:"PUSH",getUserData:t,getPoolStats:o,setUnstakeErrorMessage:x,setWithdrawErrorMessage:I},toastObject:we,modalPosition:nt.ON_PARENT}),e.jsx(P,{InnerComponent:$n,InnerComponentProps:{currentTransactionNo:L,totalTransactionNo:_,transactionSteps:ae,transactionText:ie,setCurrentTransactionNo:C,setTotalTransactionNo:z,setTransactionSteps:G,claimRewards:S,unstakeTokensPaginated:q},onConfirm:()=>{},modalPadding:"0px",modalPosition:nt.ON_ROOT}),e.jsx(R,{margin:"0px 0px 20px 0px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(qn,{children:"PUSH Fee Staking Pool"}),e.jsxs(Jn,{children:["Current APR",e.jsxs(ye,{color:"#D53A94",fontWeight:"600",margin:"0 5px 0 5px",children:[">",X(a==null?void 0:a.stakingAPR),"% + Fee"]}),e.jsx(Hn,{})]})]}):e.jsxs(De,{padding:"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(g,{height:"12px",width:"112px"})]})}),e.jsxs(R,{flex:"5",children:[e.jsxs(Xn,{border:`1px solid ${T.stakingBorder}`,borderRadius:"16px",children:[e.jsx(R,{margin:j?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:j?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Nt,{children:"Current Reward"}),e.jsxs(W,{fontSize:j?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:[X(K(a==null?void 0:a.currentReward))," PUSH"]})]}):e.jsxs(De,{padding:j?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:j?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:j?"65px":"100px}"})]})}),e.jsx(Zn,{width:"10px",height:"100%"}),e.jsx(R,{margin:j?"0 0 0 6px":"0 0 0 18px",padding:j?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Nt,{children:"Total Staked"}),e.jsxs(Qn,{fontSize:j?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[X(K(a==null?void 0:a.totalStakedAmount))," PUSH"]})]}):e.jsxs(De,{padding:j?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:j?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:j?"65px":"100px}"})]})})]}),e.jsx(b,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Lt,{children:"Current Epoch"}),e.jsx(Lt,{children:a==null?void 0:a.currentEpochNumber})]}):e.jsx(De,{padding:"5px 0px 0 15px",children:e.jsx(g,{height:"12px",width:"124px"})})}),n?e.jsxs(R,{children:[e.jsxs(b,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Je,{children:["User Deposit",e.jsx(Xe,{children:e.jsx(J,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(re,{src:xe,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ze,{children:[" ",X(K(n==null?void 0:n.userStaked))," PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Je,{children:["Rewards Claimed",e.jsx(Xe,{children:e.jsx(J,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(re,{src:xe,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ze,{children:[" ",X((n==null?void 0:n.claimedReward).toFixed(2))," PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Je,{children:["Current Epoch Reward",e.jsx(Xe,{children:e.jsx(J,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(re,{src:xe,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ze,{children:[" ",X((n==null?void 0:n.potentialReward).toFixed(2))," PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Je,{children:["Available for Claiming",e.jsx(Xe,{children:e.jsx(J,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(re,{src:xe,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ze,{children:[" ",X((n==null?void 0:n.availableRewards).toFixed(2))," PUSH"]})]})]}):e.jsxs(Ce,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]})]})]}),e.jsx(R,{padding:j?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx(ta,{onClick:B,children:" Stake $PUSH"})}),e.jsxs(ea,{children:[(a==null?void 0:a.currentEpochNumber)<=2?e.jsx(It,{ToolTipTitle:"You can unstake once epoch 2 ends.",ButtonTitle:"Unstake PUSH"}):K(n==null?void 0:n.userStaked)==0||y!==null?e.jsx(It,{ToolTipTitle:y||"Nothing to unstake, Stake First",ButtonTitle:"Unstake PUSH"}):e.jsx(Qe,{border:`1px solid ${T.activeButtonText}`,background:"transparent",color:T.activeButtonText,cursor:"pointer",onClick:q,style:{margin:"0px 10px 0px 0px"},children:r?e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:T.activeButtonText,title:"Unstaking",titleColor:T.activeButtonText}):"Unstake $PUSH"}),(n==null?void 0:n.availableRewards)===0?e.jsx(J,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,left:"40px",ToolTipWidth:"10rem",children:e.jsx(Qe,{border:"none",background:T.disableButtonBg,cursor:"default",color:T.disabledButtonText,children:d?e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Claim Rewards"})}):e.jsx(Qe,{border:`1px solid ${T.activeButtonText}`,background:"transparent",color:T.activeButtonText,cursor:"pointer",onClick:S,children:d?e.jsx(de,{type:ce.SEAMLESS,spinnerSize:26,spinnerColor:T.activeButtonText,title:"Claiming",titleColor:T.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(De,{width:"100%",children:[e.jsx(g,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(g,{height:"49px",width:"100%"})]})})]})},It=n=>{const t=Ve();return e.jsx(J,{error:!0,ToolTipTitle:n.ToolTipTitle,ToolTipWidth:"16rem",margin:"0 10px 0 0",bottom:"-30px",children:e.jsx(Qe,{border:"none",background:t.disableButtonBg,cursor:"default",color:t.disabledButtonText,children:n.ButtonTitle})})},Hn=()=>{const[n,t]=u.useState(!1),a=()=>t(!1),o=u.useRef(null);return Gt(o,()=>a()),e.jsxs(Gn,{ref:o,children:[e.jsx(re,{onClick:()=>t(!n),src:xe,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}}),n&&e.jsx(Yn,{id:"channel",children:e.jsx(wt,{title:"",body:"Push Fee Pool APR distributes yield farming rewards + fee earned by protocol. More Info "})})]})},Gn=p.div`
  width: 34%;
  width: 100%;
  min-width: none;
  max-width: none;
  display: flex;
  flex: 1;
  height: fit-content;
  position: relative;
  @media ${at.tablet} {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`,Yn=p.div`
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
`,Kn=p(ze)`
  border: 1px solid ${n=>n.theme.stakingBorder};
  border-radius: 24px;
  padding: 20px;
  margin: 10px 10px 10px 0;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  min-height: 587px;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 1300px) {
    margin: 10px 0;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
`,qn=p(W)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`,Jn=p.div`
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
`,Nt=p.p`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Xn=p(b)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,Zn=p.div`
  width: 1px;
  height: 100%;
  background: ${n=>n.theme.stakingBorder};
`,Je=p.div`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${n=>n.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Qn=p(W)`
  color: ${n=>n.theme.stakingSecondaryText};
`,Lt=p(Yt)`
  font-weight: 600;
  text-align: right;
  letter-spacing: normal;
  font-size: 16px;
  line-height: 141%;
  margin-right: 5px;
  color: ${n=>n.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,Xe=p(ye)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,Ze=p(W)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;p(b)`
  align-self: end;
  margin: 12px 13px 24px 0px;
  letter-spacing: normal;
  color: ${n=>n.theme.modalDescriptionTextColor};
`;const ea=p.div`
  display: flex;
  width: 100%;
  margin: 15px 0px 0px 0px;
`,ta=p(fe)`
  width: 100%;
  background: #d53a94;
  border: 1px solid #d53a94;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  line-height: 141%;
  letter-spacing: normal;
  color: #ffffff;
  cursor: pointer;
  & > div {
    display: block;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,Qe=p(fe)`
  font-size: 16px;
  line-height: 19px;
  flex-direction: row;
  flex: 1;
  padding: 11px;
  // width: 145px;
  height: 49px;
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
`,De=p(Ce)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`;p(g)`
  height: 25px;
  width: 100%;
  border-radius: 2px;
`,p(g)`
  height: 20px;
  width: 100%;
  border-radius: 2px;
`;const na=({setActiveTab:n})=>{const{provider:t,account:a,chainId:o}=Pe(),[s,i]=u.useState(),[r,l]=u.useState(),[d,h]=u.useState(),[y,x]=u.useState(),[U,I]=u.useState(),[L,C]=u.useState(null),[_,z]=u.useState(null),[ae,G]=u.useState(null),[ie,Y]=u.useState(null),[D,T]=u.useState(null),V=t==null?void 0:t.getSigner(a),M=u.useCallback(async()=>{const B=await ke.getInstance().getPoolStats(t);C({...B})},[r,s,y,d,U,t]),S=u.useCallback(async()=>{const B=await ke.getInstance().getPoolStats(t),te=await ke.getInstance().getLPPoolStats(B);z({...te})},[r,s,y,d,U,t]),F=u.useCallback(async()=>{},[]),q=u.useCallback(async()=>{const B=await ke.getInstance().getUserDataLP();G({...B})},[r,s,y,d,U]),Te=u.useCallback(async()=>{const[B,te]=await ke.getInstance().getUserDataPUSH(t);T({...B}),Y({...te})},[r,s,y,d,U,t]);return u.useEffect(()=>{if(o!==Q.coreContractChain&&o!==Q.mainnetCoreContractChain)return;z(null),G(null),T(null),Y(null);let B=new k(c.stakingV2,v.stakingV2,V),te=new k(c.pushToken,v.pushToken,V),we=new k(c.pushCoreV2,v.pushCoreV2,V),j=new k(c.yieldFarmLP,v.yieldFarming,V),f=new k(c.uniswapV2Router02,v.uniswapV2Router02,V);if(l(B),i(te),x(we),h(j),I(f),V&&a){var w=t==null?void 0:t.getSigner(a);let P=new k(c.stakingV2,v.stakingV2,w),A=new k(c.pushToken,v.pushToken,w),E=new k(c.pushCoreV2,v.pushCoreV2,w),O=new k(c.yieldFarmLP,v.yieldFarming,w),$=new k(c.uniswapV2Router02,v.uniswapV2Router02,w);l(P),i(A),x(E),h(O),I($)}ke.getInstance().init(a,B,te,we,j,f),M(),q(),S(),Te()},[a,o]),e.jsxs(e.Fragment,{children:[e.jsx(Et,{logo:"announcement",title:"New V2 Pools are now Live! Stake or migrate now.",body:"Users who were part of the previous Push staking program, need to migrate to new pools to continue earning rewards. Click",setActiveTab:n}),e.jsx(fn,{getLpPoolStats:S,poolStats:L,setPoolStats:C}),e.jsx(yn,{poolStats:L}),e.jsxs(aa,{children:[e.jsx(Wn,{userDataPush:ie,getUserDataPush:Te,PUSHPoolstats:D,getPUSHPoolStats:F}),e.jsx(Un,{lpPoolStats:_,userDataLP:ae,getLpPoolStats:S,getUserDataLP:q})]})]})},aa=p(b)`
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`,ia=({onClose:n})=>{const{chainId:t,switchChain:a}=Pe(),o=()=>{const s=Q.allowedNetworks[0];t!==1&&t!==11155111&&(console.info("Current Chain ID ",t),console.info("Chain Id to pass",s),a(Q.coreContractChain))};return u.useEffect(()=>{(t===Q.coreContractChain||t===Q.mainnetCoreContractChain)&&n()},[t]),e.jsxs(sa,{children:[e.jsx(yt,{style:{cursor:"pointer",alignSelf:"end"}}),e.jsxs(oa,{children:[e.jsx(ra,{children:"Unsupported Network"}),e.jsxs(pa,{children:["Push Yield Farm V2 is only live on Ethereum Chain.",e.jsx("br",{}),"Kindly switch to Ethereum"]})]}),e.jsx(la,{children:e.jsx(da,{onClick:o,children:"Switch Network"})})]})},sa=p(R)`
  padding: 32px 36px;
  width: 445px;
`,oa=p(R)`
  font-family: FK Grotesk Neu;
  font-style: normal;
  line-height: 141%; /* 39.48px */
  letter-spacing: normal;
`,ra=p.div`
  font-size: 28px;
  font-weight: 500;
  color: ${n=>n.theme.stakingSecondaryText};
`,pa=p.div`
  color: ${n=>n.theme.activeButtonText};
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 24px 0;
`,la=p.div``,da=p(fe)`
  // width:100%;
  background: #d53a94;
  border: 1px solid #d53a94;
  border-radius: 8px;
  padding: 16px;
  width: 165px;
  font-size: 16px;
  line-height: 141%;
  letter-spacing: normal;
  color: #ffffff;
  cursor: pointer;
  & > div {
    display: block;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;Q.coreContractChain;let Dt,zt,Bt,gt,Vt,Ot;Dt=()=>{Sa.pageview("/yield");const[n,t]=u.useState(0),[a,o]=u.useState(!1),{account:s,chainId:i,switchChain:r}=Pe(),l=()=>{const x=Q.allowedNetworks[0];i!==1&&i!==5&&r(x)};u.useEffect(()=>{i!==1&&i!==11155111&&(h(),l())},[i]);const{isModalOpen:d,showModal:h,ModalComponent:y}=tt();return e.jsxs(zt,{children:[e.jsx(y,{InnerComponent:ia,onConfirm:()=>{},modalPadding:"0px",modalPosition:nt.ON_PARENT}),e.jsxs(Bt,{children:[e.jsx(gt,{isActive:!n,onClick:()=>{o(!0),t(0)},children:"Yield Farming V2"}),e.jsxs(gt,{isActive:n,onClick:()=>{o(!1),t(1)},children:["Yield Farming V1 ",e.jsx(Vt,{children:"Deprecated"})]})]}),n===0&&e.jsx(na,{setActiveTab:t}),n===1&&e.jsx(gn,{setActiveTab:t})]})},zt=p(ze)`
	align-items: stretch;
	align-self: center;
  flex: 1;
	background: ${n=>n.theme.default.bg};
	border-radius: ${he.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${he.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: calc(
    100% - ${it.MINI_MODULES.DESKTOP.RIGHT} - ${it.MINI_MODULES.DESKTOP.LEFT} -
      ${he.ADJUSTMENTS.PADDING.BIG} - ${he.ADJUSTMENTS.PADDING.BIG}
  );
  gap: 16px;
  padding: 24px;

  margin: ${he.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  
  @media ${at.laptop} {
    margin: ${he.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${at.tablet} {
    width: calc(
      100% - ${it.MINI_MODULES.TABLET.RIGHT} - ${it.MINI_MODULES.TABLET.LEFT} -
        ${he.ADJUSTMENTS.PADDING.DEFAULT} - ${he.ADJUSTMENTS.PADDING.DEFAULT}
    );
    margin: ${he.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding:16px;
  }

  @media ${at.mobileL} {
    margin: ${he.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    border: ${he.ADJUSTMENTS.RADIUS.LARGE};
    width: 100%;
    padding: ${he.ADJUSTMENTS.PADDING.DEFAULT};
`,Bt=p(b)`
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
    background-color: ${n=>n.theme.default.border};
  }
`,gt=p.div`
  cursor: pointer;
  // padding: 0 25px;
  width: 250px;
  justify-content: center;
  display: flex;
  height: 25px;
  line-height: 141%;
  text-align: center;
  position: relative;
  color: ${n=>n.isActive?"#CF1C84":n.theme.color};

  @media (max-width: 638px) {
    width: 150px;
    flex: 1;
    flex-direction: column;
    align-items: baseline;
  }

  ${n=>n.isActive&&`&:after{
        position: absolute;
        height: 2px;
        left: 0;
        bottom: -13px;
        width: 100%;
        content: '';
        background-color: #CF1C84;
        z-index: 1;
        
    }`}
`,Vt=p(ye)`
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
`,Jt=()=>e.jsx(Ot,{children:e.jsx(Dt,{})}),Ot=p(ze)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{ja as __tla,Jt as default};
