var da=Object.defineProperty;var ca=(be,Se,Re)=>Se in be?da(be,Se,{enumerable:!0,configurable:!0,writable:!0,value:Re}):be[Se]=Re;var D=(be,Se,Re)=>ca(be,typeof Se!="symbol"?Se+"":Se,Re);import{ct as y,cw as c,bd as X,a_ as p,bD as R,dP as $,aZ as e,e7 as ua,e0 as _t,a$ as ze,bF as Te,eJ as ha,d1 as j,c2 as fe,eK as Ce,b9 as ke,b7 as u,bN as xa,cQ as Ot,c$ as Be,b1 as Ve,d$ as ve,eL as g,b_ as le,bB as _e,bS as ce,bT as ue,cv as P,cu as A,dg as he,d2 as H,d0 as $t,ba as et,eM as ga,cs as Ht,eN as ma,bU as ya,c1 as Wt,d3 as mt,eO as Ta,eP as wa,cy as Gt,c3 as tt,c4 as nt,c7 as Jt,by as xe,c8 as Yt,bA as at,bz as it,bC as fa,__tla as Sa}from"./index-Bok5VDIQ.js";let Kt,ba=Promise.all([(()=>{try{return Sa}catch{}})()]).then(async()=>{const be=y.from(1).mul(y.from(10).pow(y.from(18))),Se=3e4,Re=35e3,yt=n=>n.mul(y.from(10).pow(y.from(18))),Me=n=>n.div(y.from(10).pow(y.from(10))).toNumber()/1e8,Pe=class Pe{constructor(){D(this,"state",{account:null,signer:null,staking:null,yieldFarmingPUSH:null,yieldFarmingLP:null,rewardForCurrentEpochPush:null,rewardForCurrentEpochLP:null,genesisEpochAmountPUSH:Se,deprecationPerEpochPUSH:100,genesisEpochAmountLP:Re,deprecationPerEpochLP:100,uniswapV2Router02:null});D(this,"init",(t,a,o,s,i,r)=>{this.state.account=t,this.state.pushToken=a,this.state.staking=o,this.state.yieldFarmingPUSH=s,this.state.yieldFarmingLP=i,this.state.uniswapV2Router02=r});D(this,"getPoolStats",()=>new Promise(async(t,a)=>{const o=await this.state.yieldFarmingPUSH.getCurrentEpoch(),s=await this.state.uniswapV2Router02.getAmountsOut(be.toString(),[c.pushToken,c.WETHAddress,c.USDTAddress]);let i;X.coreContractChain===42||X.coreContractChain===5?i=s[s.length-1].div(1e6).toNumber():i=s[s.length-1].toNumber()/1e6,console.debug("Push PRice",i);const r=Me(await this.state.pushToken.balanceOf(c.uniV2LPToken)),l=Me(await this.state.pushToken.attach(c.WETHAddress).balanceOf(c.uniV2LPToken)),d=await this.state.uniswapV2Router02.getAmountsOut(be.toString(),[c.WETHAddress,c.USDTAddress]);let h;X.coreContractChain===42||X.coreContractChain===5?h=Me(d[d.length-1]):h=d[d.length-1].toNumber()/1e6,console.debug("Eth Price",h);const m=Me(await this.state.pushToken.attach(c.uniV2LPToken).totalSupply()),x=(r*i+l*h)/m/i;t({currentEpoch:o,lpToPushRatio:x})}));D(this,"getPUSHPoolStats",async()=>new Promise(async(t,a)=>{const o=this.state.yieldFarmingPUSH;let s=await o.NR_OF_EPOCHS();const i=await o.getCurrentEpoch();s=s.toString()>i.toString()?i:s;const r=yt(y.from(this.state.genesisEpochAmountPUSH)),l=yt(y.from(this.state.deprecationPerEpochPUSH)),d=this.calcTotalAmountPerEpoch(r,s,l);this.state.rewardForCurrentEpochPush=d;const h=await o.getPoolSize(i.add(1));t({currentEpochPUSH:i,totalEpochPUSH:s,poolBalance:h})}));D(this,"getLPPoolStats",async t=>new Promise(async(a,o)=>{const s=this.state.yieldFarmingLP;let i=await s.NR_OF_EPOCHS();const r=await s.getCurrentEpoch();i=i.toString()>r.toString()?r:i;const l=await s.getPoolSize(r.add(1));a({currentEpochPUSH:r,totalEpochPUSH:i,poolBalance:l})}));D(this,"getUserData",async t=>new Promise(async(a,o)=>{if(this.state.account){const s=await t.getCurrentEpoch().then(M=>y.from(Math.min(M,100))),i=await t.getCurrentEpoch(),r=await t.getEpochStake(this.state.account,i.add(1)),l=(await t.lastEpochIdHarvested(this.state.account)).toNumber();let d=this.getAccumulatedReward(s,t),h=this.getTotalAvailableRewards(l,s,t),[m,x]=await Promise.all([d,h]);a({epochStakeNext:r,totalAccumulatedReward:m,totalAvailableReward:x})}}));D(this,"getTotalAvailableRewards",async(t,a,o)=>{let s=[];for(var i=t+1;i<=a.toNumber();i++){const l=this.calculateUserEpochReward(i,o);s.push(l)}let r=(await Promise.all(s)).reduce((l,d)=>l+d,0);return r=r.toFixed(2),r});D(this,"getAccumulatedReward",async(t,a)=>{let o=[];for(var s=0;s<=t.toNumber();s++){const r=this.calculateUserEpochReward(s,a);o.push(r)}let i=(await Promise.all(o)).reduce((r,l)=>r+l,0);return i=i.toFixed(2),i});D(this,"calcTotalAmountPerEpoch",(t,a,o)=>t.sub(a.mul(o)));D(this,"calculateUserEpochReward",async(t,a)=>{const o=Me(await a.getEpochStake(this.state.account,t)),s=Me(await a.getPoolSize(t));let i=0;if(s>0)if(a.address==c.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,d=r-l*t;i=o/s*d}else{const r=this.state.genesisEpochAmountPUSH,l=this.state.deprecationPerEpochPUSH,d=r-l*t;i=o/s*d}return i})}static getInstance(){return Pe.instance||(Pe.instance=new Pe),Pe.instance}};D(Pe,"instance",null);let je=Pe;const q=n=>e.jsx(ua,{wrapperProps:{width:"100%",maxWidth:"none",minWidth:"auto",display:"flex",flex:"1",margin:n.margin?n.margin:"0"},placementProps:{background:"none",bottom:n.bottom?n.bottom:"25px",left:n.error?"40px":"0px"},tooltipContent:n.error?e.jsx(qt,{title:n.ToolTipTitle,width:n.ToolTipWidth}):e.jsx(Tt,{title:n.ToolTipTitle,body:n.ToolTipBody}),children:n.children}),qt=n=>e.jsx(R,{width:n.width,background:"#131313",justifyContent:"flex-start",border:"1px solid rgba(173, 176, 190, 0.2)",alignItems:"flex-start",padding:"0.75rem 0.75rem 0.75rem 1rem",boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.05)",color:"#FFF",borderRadius:"2px 12px 12px 12px",children:e.jsx($,{color:"inherit",children:n.title})}),Tt=({title:n,body:t})=>e.jsxs(Zt,{children:[e.jsx(Xt,{children:n}),e.jsxs(Qt,{children:[t,"  "," ",t.includes("Push Fee Pool APR")&&e.jsx(_t,{cursor:"pointer",href:"https://medium.com/push-protocol/new-push-yield-farming-rewards-full-details-4a9ff473226d",target:"_blank",children:"here"})]})]}),Zt=p(R)`
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


`,Xt=p($)`
  color: ${n=>n.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`,Qt=p($)`
  color: ${n=>n.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
  text-align:left;
`,ge="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15284_45077)'%3e%3cpath%20d='M8.5%2014.5C11.8137%2014.5%2014.5%2011.8137%2014.5%208.5C14.5%205.18629%2011.8137%202.5%208.5%202.5C5.18629%202.5%202.5%205.18629%202.5%208.5C2.5%2011.8137%205.18629%2014.5%208.5%2014.5Z'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%208C8.13261%208%208.25979%208.05268%208.35355%208.14645C8.44732%208.24021%208.5%208.36739%208.5%208.5V11C8.5%2011.1326%208.55268%2011.2598%208.64645%2011.3536C8.74021%2011.4473%208.86739%2011.5%209%2011.5'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.25%206.5C8.66421%206.5%209%206.16421%209%205.75C9%205.33579%208.66421%205%208.25%205C7.83579%205%207.5%205.33579%207.5%205.75C7.5%206.16421%207.83579%206.5%208.25%206.5Z'%20fill='%23797D8F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15284_45077'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",G=n=>n.div(y.from(10).pow(18)).toString(),Z=n=>{var t;return(t=n==null?void 0:n.toString())==null?void 0:t.replace(/\B(?=(\d{3})+(?!\d))/g,",")},en=function(n,t=null){return y.from(n)},tn=function(n){return n.div(en(10).pow(18))},wt=({poolName:n,userData:t,PoolStats:a,poolAddress:o,getUserData:s,tokenAddress:i,setActiveTab:r})=>{const{account:l,provider:d}=ke(),[h,m]=u.useState(!1),[x,M]=u.useState(!1),[N,U]=u.useState(!1),[I,F]=u.useState(null),[Q,se]=u.useState(null),[J,te]=u.useState(null),{userPushSDKInstance:V}=xa(S=>S.user),{handleConnectWallet:L}=u.useContext(Ot),[f,v]=u.useState(0),T=Be(),E=Ve(),ee=async()=>{if(!V.signer){L();return}if(!x){if((t==null?void 0:t.totalAvailableReward)==0){te("No Rewards to Claim"),M(!1);return}M(!0);var S=d.getSigner(l);new P(o,A.yieldFarming,S).massHarvest().then(async b=>{T.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await d.waitForTransaction(b.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:w=>e.jsx(he,{size:w,color:"green"})}),s(),M(!1)}catch(w){T.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${w.name}+ ")`,toastType:"ERROR",getToastIcon:B=>e.jsx(H,{size:B,color:"red"})}),M(!1)}}).catch(b=>{T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:w=>e.jsx(H,{size:w,color:"red"})}),M(!1)})}},Y=async()=>{if(!V.signer){L();return}if(h)return;m(!0);const S=G(t.epochStakeNext);if(S==0){se("Nothing to unstake, Stake Now in new reward program."),m(!1);return}var b=d.getSigner(l);let w=new P(c.staking,A.staking,b);await w.balanceOf(l,i),w.withdraw(i,y.from(S).mul(y.from(10).pow(18))).then(async B=>{T.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await d.waitForTransaction(B.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:C=>e.jsx(he,{size:C,color:"green"})}),m(!1),s()}catch(C){console.error("Error",C),T.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${C.name}+ ")`,toastType:"ERROR",getToastIcon:k=>e.jsx(H,{size:k,color:"red"})}),m(!1)}}).catch(B=>{T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:C=>e.jsx(H,{size:C,color:"red"})}),m(!1)})},we=async()=>{if(!V.signer){L();return}if(N)return;let S=3;const b=G(t.epochStakeNext);if(b==0){T.showMessageToast({toastTitle:"Error",toastMessage:"Nothing to Withdraw!",toastType:"ERROR",getToastIcon:W=>e.jsx(H,{size:W,color:"red"})}),U(!1),F(null);return}var w=d.getSigner(l);let B=new P(c.staking,A.staking,w);const C=i===c.pushToken?c.pushCoreV2:c.stakingV2;var k=new P(i,A.pushToken,w);let _=await k.allowance(l,C),K=G(_);parseInt(K)>=parseInt(b)?(S=2,v(50)):(S=3,v(33)),U(!0),F(`Withdrawing 1/${S}`);let oe;oe=B.withdraw(i,y.from(b).mul(y.from(10).pow(18))),oe.then(async W=>{if(T.showLoaderToast({loaderMessage:"Withdrawing! Please Wait..."}),await d.waitForTransaction(W.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Successfully withdrawn!",toastType:"SUCCESS",getToastIcon:pe=>e.jsx(he,{size:pe,color:"green"})}),i===c.pushToken){var de=new P(i,A.pushToken,w);let pe=await de.allowance(l,c.pushCoreV2),ye=G(pe);parseInt(ye)>=parseInt(b)?ne(W,b,S):(W=de.approve(c.pushCoreV2,y.from(b).mul(y.from(10).pow(18))),F(`Approving 2/${S}`),v(66),W.then(async ae=>{T.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await d.waitForTransaction(ae.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:re=>e.jsx(he,{size:re,color:"green"})}),ne(ae,b,S)}).catch(ae=>{console.error("Error in approving 2",ae),T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:re=>e.jsx(H,{size:re,color:"red"})}),U(!1),F(null),s(),v(0)}))}else{var de=new P(i,A.pushToken,w);let ye=await de.allowance(l,c.stakingV2),ae=G(ye);parseInt(ae)>=parseInt(b)?z(W,b,S):(W=de.approve(c.stakingV2,y.from(b).mul(y.from(10).pow(18))),F(`Approving 2/${S}`),v(66),W.then(async re=>{T.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await d.waitForTransaction(re.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:Le=>e.jsx(he,{size:Le,color:"green"})}),z(re,b,S)}).catch(re=>{console.error("Error in approving",re),T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:Le=>e.jsx(H,{size:Le,color:"red"})}),U(!1),F(null),s(),v(0)}))}}).catch(W=>{console.error("Error in withdrawing: ",W),T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Withdraw!",toastType:"ERROR",getToastIcon:de=>e.jsx(H,{size:de,color:"red"})}),U(!1),F(null),v(0)})},z=async(S,b,w)=>{if(!V.signer){L();return}var B=d.getSigner(l),C=new P(c.stakingV2,A.stakingV2,B);F(`Staking ${w}/${w}`),v(100),S=C.deposit(i,y.from(b).mul(y.from(10).pow(18))),S.then(async k=>{T.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await d.waitForTransaction(k.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!Successfully Deposited the UNI-V2 Token to V2 ",toastType:"SUCCESS",getToastIcon:_=>e.jsx(he,{size:_,color:"green"})}),U(!1),s(),F(null),r(0)}).catch(k=>{console.error("Error in depositing: ",k),T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit the Amount",toastType:"ERROR",getToastIcon:_=>e.jsx(H,{size:_,color:"red"})}),U(!1),s(),F(null),v(0)})},ne=async(S,b,w)=>{if(!V.signer){L();return}var B=d.getSigner(l);let C=new P(c.pushCoreV2,A.pushCoreV2,B);F(`Staking ${w}/${w}`),v(100),S=C.stake(y.from(b).mul(y.from(10).pow(18))),S.then(async k=>{T.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await d.waitForTransaction(k.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Successfully Deposited the Push Token to V2 ",toastType:"SUCCESS",getToastIcon:_=>e.jsx(he,{size:_,color:"green"})}),U(!1),s(),F(null),r(0)}).catch(k=>{console.error("Error in depositing: ",k),T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit Push Token",toastType:"ERROR",getToastIcon:_=>e.jsx(H,{size:_,color:"red"})}),U(!1),s(),F(null),v(0)})};u.useEffect(()=>{te(null),se(null)},[l]);const O=ve(600);return e.jsxs(nn,{margin:n==="UNI-V2"?" 10px 0 10px 10px ":"  10px 10px 10px 0",children:[e.jsx(R,{margin:"0px 0px 20px 0",children:a?e.jsxs(e.Fragment,{children:[e.jsxs(an,{children:[n==="UNI-V2"?"Uniswap V2 Staking Pool":"PUSH Staking Pool ",e.jsx(sn,{children:"Deprecated"})]}),e.jsxs(st,{children:["Current APR"," ",e.jsx(Te,{color:"#D53A94",fontWeight:"600",children:"0%"})]})]}):e.jsxs(Ue,{padding:"15px 15px 0 15px",children:[e.jsx(g,{height:"15px",width:"234px",margin:"0 0 10px 0"}),e.jsx(g,{height:"15px",width:"112px"})]})}),e.jsxs(R,{children:[e.jsxs(pn,{border:`1px solid ${E.stakingBorder}`,borderRadius:"16px",children:[e.jsx(R,{margin:O?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:O?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(st,{children:"Current Reward"}),e.jsx($,{fontSize:O?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:"0 PUSH"})]}):e.jsxs(Ue,{padding:O?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:O?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:O?"65px":"100px}"})]})}),e.jsx(on,{width:"10px",height:"100%"}),e.jsx(R,{margin:O?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:O?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(st,{children:"Total Staked"}),e.jsxs(rn,{fontSize:O?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[Z(G(a==null?void 0:a.poolBalance))," ",n=="UNI-V2"?"UNI-V2":"PUSH"]})]}):e.jsxs(Ue,{padding:O?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:O?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:O?"65px":"100px}"})]})})]}),e.jsx(j,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:a?e.jsxs(e.Fragment,{children:[e.jsx(ft,{padding:"0px 5px 0px 0px",children:"Current Epoch"}),e.jsx(ft,{margin:"0 0 0 5px",children:"100 / 100"})]}):e.jsx(Ue,{padding:"6px 0px 0 15px",children:e.jsx(g,{height:"17px",width:"124px"})})}),e.jsx(ln,{children:t?e.jsxs(R,{children:[e.jsxs(j,{justifyContent:"space-between",margin:O?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Oe,{children:["User Deposit",e.jsx($e,{children:e.jsx(q,{ToolTipTitle:"User Deposited",ToolTipBody:`Amount of ${n} Token User Staked`,children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(He,{children:[" ",G(t==null?void 0:t.epochStakeNext)," ",n=="UNI-V2"?"UNI-V2":"PUSH"]})]}),e.jsxs(j,{justifyContent:"space-between",margin:O?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Oe,{children:["Rewards Claimed",e.jsx($e,{children:e.jsx(q,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(He,{children:[" ",Z(((t==null?void 0:t.totalAccumulatedReward)-(t==null?void 0:t.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(j,{justifyContent:"space-between",margin:O?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Oe,{children:["Current Epoch Reward",e.jsx($e,{children:e.jsx(q,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsx(He,{children:"0 PUSH"})]}),e.jsxs(j,{justifyContent:"space-between",margin:O?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Oe,{children:["Available for Claiming",e.jsx($e,{children:e.jsx(q,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(He,{children:[Z(t==null?void 0:t.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(Ce,{padding:"16px 15px 16px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(j,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(j,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(j,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(j,{justifyContent:"space-between",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]})]})})]}),e.jsx(dn,{padding:O?"0px ":"0px 14px",margin:"24px 0px 0px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(St,{children:G(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(q,{error:!0,ToolTipTitle:"Nothing to Withdraw, so you cannot Migrate.",ToolTipWidth:"16rem",bottom:"-50px",margin:"0 0 15px 0",children:e.jsx(Fe,{border:"none",cursor:"default",background:E.disableButtonBg,color:E.disabledButtonText,children:e.jsx(bt,{children:!N&&I==null&&e.jsxs(_e,{color:E.disabledButtonText,weight:"400",cursor:"default",children:["Migrate to ",n==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]})})})}):e.jsxs(cn,{onClick:we,children:[e.jsx(un,{style:{width:`${f}%`}}),e.jsxs(bt,{children:[!N&&I==null&&e.jsxs(_e,{color:"#FFF",weight:"400",cursor:"pointer",children:["Migrate to ",n==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]}),N&&I!=null&&e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#FFF",title:I,titleColor:"#FFF"})]})]})}),e.jsxs(St,{children:[G(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(q,{error:!0,ToolTipTitle:Q||"Nothing to unstake, Stake First",ToolTipWidth:"16rem",margin:"0 10px 0 0",bottom:"-30px",children:e.jsx(Fe,{border:"none",cursor:"default",background:E.disableButtonBg,color:E.disabledButtonText,children:h?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:E.activeButtonText,title:"Claiming",titleColor:E.activeButtonText}):` Unstake ${n}`})}):e.jsx(Fe,{border:`1px solid ${E.activeButtonText}`,background:"transparent",color:E.activeButtonText,cursor:"pointer",margin:"0 10px 0 0",onClick:Y,children:h?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:E.activeButtonText,title:"Unstaking",titleColor:E.activeButtonText}):` Unstake ${n}`}),(t==null?void 0:t.totalAvailableReward)==="0.00"?e.jsx(q,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,ToolTipWidth:"10rem",children:e.jsx(Fe,{border:"none",cursor:"default",background:E.disableButtonBg,color:E.disabledButtonText,children:x?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:E.activeButtonText,title:"Claiming",titleColor:E.activeButtonText}):" Claim Rewards"})}):e.jsx(Fe,{border:`1px solid ${E.activeButtonText}`,background:"transparent",color:E.activeButtonText,cursor:"pointer",onClick:ee,children:x?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:E.activeButtonText,title:"Claiming",titleColor:E.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Ue,{width:"100%",children:[e.jsx(g,{height:"49px",width:"100%",margin:"0 0 11px 0"}),e.jsx(g,{height:"49px",width:"100%"})]})})]})},nn=p(ze)`
  border: 1px solid ${n=>n.theme.stakingBorder};
  border-radius: 24px;
  padding: 24px 19px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  // min-height: 587px;
  color: ${n=>n.theme.stakingPrimaryText};
`,an=p($)`
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
`,sn=p(Te)`
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
`,on=p.div`
  width: 1px;
  height: 100%;
  background: ${n=>n.theme.stakingBorder};
`,Oe=p.div`
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
`,rn=p($)`
  color: ${n=>n.theme.stakingSecondaryText};
`,ft=p(ha)`
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
`,$e=p(Te)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,pn=p(j)`
  max-height: 108px;
  min-height: 108px;
  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,He=p($)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,ln=p(R)`
  min-height: 150px;
`,dn=p(R)`
  // min-height:132px;
`,St=p.div`
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
`;const cn=p(fe)`
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
`,un=p.div`
  min-height: 37px;
  background-color: rgb(183, 46, 126);
  transition: width 0.5s ease 0s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,bt=p.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #eee;
`,Fe=p(fe)`
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
`,Ue=p(Ce)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,jt=({logo:n,title:t,body:a,setActiveTab:o})=>{const s=ve(600);return e.jsxs(j,{style:{color:n==="announcement"?"white":"#333"},justifyContent:"stretch",padding:s?"12px":"16px",background:n==="announcement"?"linear-gradient(90deg, #121315 -2.55%, #2A2A39 32.62%, #8E317A 68.34%, #121315 102.97%)":"#FFF7DA",borderRadius:"16px",children:[e.jsx(le,{width:n==="announcement"?"60px":"32px",height:n==="announcement"?"60px":"32px",src:$t(`svg/${n}.svg`),alt:"Announcement Logo"}),e.jsxs(R,{margin:n==="announcement"?"0 0 0 16px":"0 0 0 13px",justifyContent:"center",alignItems:"flex-start",gap:n==="announcement"?"4px":"0px",children:[e.jsx($,{color:"inherit",fontSize:s?"20px":"24px",textAlign:"left",fontWeight:500,children:t}),e.jsxs($,{color:"inherit",fontSize:s?"12px":"16px",textAlign:"left",fontWeight:500,children:[a," ",t.includes("New V2")&&e.jsxs(e.Fragment,{children:[e.jsx(hn,{onClick:()=>o(1),children:"here"})," to migrate."]})]})]})]})},hn=p(_t)`
  cursor: pointer;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;X.coreContractChain;const xn=({setActiveTab:n})=>{const{account:t,provider:a}=ke(),[o,s]=u.useState(null),[i,r]=u.useState(null),[l,d]=u.useState(null),[h,m]=u.useState(null),[x,M]=u.useState(null),[N,U]=u.useState(null),[I,F]=u.useState(null),[Q,se]=u.useState(null),[J,te]=u.useState(null),[V,L]=u.useState(null),f=a==null?void 0:a.getSigner(t),v=u.useCallback(async()=>{const z=await je.getInstance().getPoolStats();U({...z})},[o,i,l,h,x]),T=u.useCallback(async()=>{const z=await je.getInstance().getPUSHPoolStats();F({...z})},[o,i,l,h,x]),E=u.useCallback(async z=>{const ne=await je.getInstance().getLPPoolStats(z);se({...ne})},[o,i,l,h,x]),ee=u.useCallback(async()=>{const z=await je.getInstance().getUserData(h);te({...z})},[h]),Y=u.useCallback(async()=>{const z=await je.getInstance().getUserData(l);L({...z})},[l]);u.useEffect(()=>{let z=new P(c.pushToken,A.pushToken,f),ne=new P(c.staking,A.staking,f),O=new P(c.depYieldFarmPUSH,A.yieldFarming,f),S=new P(c.depYieldFarmLP,A.yieldFarming,f),b=new P(c.uniswapV2Router02,A.uniswapV2Router02,f);if(s(z),r(ne),m(O),d(S),M(b),f&&t){var w=a.getSigner(t);let B=new P(c.pushToken,A.pushToken,w),C=new P(c.staking,A.staking,w),k=new P(c.depYieldFarmPUSH,A.yieldFarming,w),_=new P(c.depYieldFarmLP,A.yieldFarming,w),K=new P(c.uniswapV2Router02,A.uniswapV2Router02,w);s(B),r(C),m(k),d(_),M(K)}},[t]),u.useEffect(()=>{o!=null&&i!=null&&h!=null&&(je.getInstance().init(t,o,i,h,l,x),v())},[v]),u.useEffect(()=>{N&&we(N)},[N]);const we=async z=>{T(),E(z),ee(),Y()};return e.jsxs(e.Fragment,{children:[e.jsx(jt,{logo:"WarningCircle",title:"This reward program (V1) has ended.",body:"To continue earning rewards please migrate to new pools.",setActiveTab:n}),e.jsxs(gn,{children:[e.jsx(wt,{poolName:"PUSH",userData:J,PoolStats:I,poolAddress:c.depYieldFarmPUSH,getUserData:ee,getPoolStats:T,tokenAddress:c.pushToken,setActiveTab:n}),e.jsx(wt,{poolName:"UNI-V2",userData:V,PoolStats:Q,poolAddress:c.depYieldFarmLP,getUserData:Y,getPoolStats:E,tokenAddress:c.uniV2LPToken,setActiveTab:n})]})]})},gn=p(j)`
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
`,mn=({poolStats:n})=>{function t(o){return o==null?void 0:o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const a=ve(600);return e.jsx(yn,{justifyContent:"stretch",children:n?e.jsxs(e.Fragment,{children:[e.jsx(Et,{fontSize:a?"16px":"18px",textAlign:"left",fontWeight:600,children:"Push Price"}),e.jsxs(j,{gap:"5px",justifyContent:"flex-end",children:[e.jsxs(Et,{fontSize:a?"18px ":"24px",textAlign:"left",fontWeight:600,children:["$",t(n==null?void 0:n.pushPrice.toFixed(2))]}),e.jsx(le,{width:"25px",height:a?"20px":"27px",src:$t("svg/uniswapLogo.svg"),alt:"Uniswap Logo"})]})]}):e.jsxs(Tn,{children:[e.jsx(g,{height:"12px",width:"135px",margin:"10px 0 10px 0"}),e.jsx(g,{height:"12px",width:"135px",margin:"10px 0 10px 0"})]})})},yn=p(j)`
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
`,Et=p($)`
  color: ${n=>n.theme.stakingPrimaryText};
`,Tn=p(Ce)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
  flex-direction: row;
  justify-content: inherit;
  flex: 1;
`,wn=({getLpPoolStats:n,poolStats:t,setPoolStats:a})=>{const[o,s]=et.useState(""),[i,r]=et.useState(),l=()=>{const h=t.epochEndTime,m=new Date().getTime()+h*1e3;r(m)};et.useEffect(()=>{t&&l()},[t]);const d=()=>{if(t!=null&&t.epochEndTimestamp){t.epochEndTimestamp.toNumber();const h=new Date().getTime(),m=i-h;m<0&&(a(null),n());const x=Math.floor(m/(1e3*60*60*24)),M=Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),N=Math.floor(m%(1e3*60*60)/(1e3*60)),U=Math.floor(m%(1e3*60)/1e3);s(`${x}D ${M}H ${N}M ${U}S`)}};return et.useEffect(()=>{const h=setTimeout(()=>{d()},1e3);return()=>clearTimeout(h)}),e.jsxs(fn,{children:[e.jsxs(rt,{alignItems:"baseline",justifyContent:"center",background:"linear-gradient(0deg, #7ADDB3, #7ADDB3), #FFFFFF",children:[e.jsx(pt,{background:"radial-gradient(70% 90% at 40% 16.25%, #7CDCB4 2.6%, #7ADDB3 53.65%, #E888F8 85.42%, #F99DEA 100%)"}),t?e.jsx(e.Fragment,{children:e.jsxs(ut,{children:[e.jsx(lt,{children:"Total Value Locked"}),e.jsx(dt,{children:`$ ${Z(t==null?void 0:t.totalValueLocked.toFixed(2))}`})]})}):e.jsx(ot,{})]}),e.jsxs(rt,{alignItems:"baseline",justifyContent:"center",background:"#F58DF8",children:[e.jsx(pt,{background:"radial-gradient(70% 90% at 40% 16.25%, #F58DF8 2.6%, #F47EF8 53.65%, #A17DEF 85.42%, #AE68F4 100%)"}),t?e.jsx(e.Fragment,{children:e.jsxs(ut,{children:[e.jsx(lt,{children:"Push Rewards Given"}),e.jsxs(ct,{justifyContent:"end",children:[e.jsx(dt,{children:Z(Math.min(G(t==null?void 0:t.pushRewardsDistributed),G(t==null?void 0:t.totalDistributedAmount)))}),e.jsxs(Te,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:["out of ",Z(G(t==null?void 0:t.totalDistributedAmount))]})]})]})}):e.jsx(ot,{})]}),e.jsxs(rt,{alignItems:"baseline",justifyContent:"center",background:"#A17DEF",children:[e.jsx(pt,{background:"radial-gradient(70% 90% at 40% 16.25%, #A17DEF 2.6%, #9770ED 53.65%, #DF7EEF 85.42%, #F488E3 100%)"}),o?e.jsx(e.Fragment,{children:e.jsxs(ut,{children:[e.jsx(lt,{children:"Time Left"}),e.jsxs(ct,{justifyContent:"end",children:[e.jsx(dt,{children:o}),e.jsx(Te,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:"until next epoch"})]})]})}):e.jsx(ot,{})]})]})},ot=()=>{const n=ve(1300);return e.jsxs(Sn,{padding:"21px 15px",children:[e.jsx(g,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(g,{height:"26px;",width:n?"175px":"189px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(g,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"})]})},fn=p(j)`
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
`,lt=p(Te)`
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
`,dt=p(Te)`
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
`,Sn=p(Ce)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  justify-content: center;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,ht=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"channelType",type:"uint8"},{indexed:!1,internalType:"bytes",name:"identity",type:"bytes"}],name:"AddChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!1,internalType:"bytes",name:"_subGraphData",type:"bytes"}],name:"AddSubGraph",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"oldBridge",type:"address"},{indexed:!0,internalType:"address",name:"newBridge",type:"address"}],name:"BridgeAddressUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"}],name:"ChannelBlocked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"_channel",type:"address"},{indexed:!1,internalType:"uint256",name:"totalNotifOptions",type:"uint256"},{indexed:!1,internalType:"string",name:"_notifSettings",type:"string"},{indexed:!1,internalType:"string",name:"_notifDescription",type:"string"}],name:"ChannelNotifcationSettingsAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"ChannelOwnershipTransfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"revoker",type:"address"}],name:"ChannelVerificationRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"verifier",type:"address"}],name:"ChannelVerified",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountClaimed",type:"uint256"}],name:"ChatIncentiveClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountRefunded",type:"uint256"}],name:"DeactivateChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"requestSender",type:"address"},{indexed:!1,internalType:"address",name:"requestReceiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amountForReqReceiver",type:"uint256"},{indexed:!1,internalType:"uint256",name:"feePoolAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"}],name:"IncentivizeChatReqReceived",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountDeposited",type:"uint256"}],name:"ReactivateChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"oldRelayer",type:"address"},{indexed:!0,internalType:"address",name:"newRelayer",type:"address"}],name:"RelayerAddressUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"rewardAmount",type:"uint256"}],name:"RewardsClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"rewardAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"fromEpoch",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tillEpoch",type:"uint256"}],name:"RewardsHarvested",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountStaked",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountRefunded",type:"uint256"}],name:"TimeBoundChannelDestroyed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountUnstaked",type:"uint256"}],name:"Unstaked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!1,internalType:"bytes",name:"identity",type:"bytes"}],name:"UpdateChannel",type:"event"},{inputs:[],name:"ADD_CHANNEL_MIN_FEES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"CHANNEL_POOL_FUNDS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"CREATE_CHANNEL_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DOMAIN_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"FEE_AMOUNT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MIN_POOL_CONTRIBUTION",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PROTOCOL_POOL_FEES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PUSH_TOKEN_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"REFERRAL_CODE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"UNISWAP_V2_ROUTER",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"WETH_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"aDaiAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_rewardAmount",type:"uint256"}],name:"addPoolFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"_subGraphData",type:"bytes"}],name:"addSubGraph",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_startIndex",type:"uint256"},{internalType:"uint256",name:"_endIndex",type:"uint256"},{internalType:"address[]",name:"_channelList",type:"address[]"}],name:"batchVerification",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channelAddress",type:"address"}],name:"blockChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"bridgeAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_epochId",type:"uint256"}],name:"calculateEpochRewards",outputs:[{internalType:"uint256",name:"rewards",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"celebUserFunds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"channelById",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channelNotifSettings",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channelUpdateCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channels",outputs:[{internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"channelType",type:"uint8"},{internalType:"uint8",name:"channelState",type:"uint8"},{internalType:"address",name:"verifiedBy",type:"address"},{internalType:"uint256",name:"poolContribution",type:"uint256"},{internalType:"uint256",name:"channelHistoricalZ",type:"uint256"},{internalType:"uint256",name:"channelFairShareCount",type:"uint256"},{internalType:"uint256",name:"channelLastUpdate",type:"uint256"},{internalType:"uint256",name:"channelStartBlock",type:"uint256"},{internalType:"uint256",name:"channelUpdateBlock",type:"uint256"},{internalType:"uint256",name:"channelWeight",type:"uint256"},{internalType:"uint256",name:"expiryTime",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"channelsCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"claimChatIncentives",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_notifOptions",type:"uint256"},{internalType:"string",name:"_notifSettings",type:"string"},{internalType:"string",name:"_notifDescription",type:"string"},{internalType:"uint256",name:"_amountDeposited",type:"uint256"}],name:"createChannelSettings",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"_channelType",type:"uint8"},{internalType:"bytes",name:"_identity",type:"bytes"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"uint256",name:"_channelExpiryTime",type:"uint256"}],name:"createChannelWithPUSH",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"daiAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tillEpoch",type:"uint256"}],name:"daoHarvestPaginated",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"deactivateChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channelAddress",type:"address"}],name:"destroyTimeBoundChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"epnsCommunicator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"epochDuration",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"epochRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"epochToTotalStakedWeight",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"genesisEpoch",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"getChannelVerfication",outputs:[{internalType:"uint8",name:"verificationStatus",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"governance",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupFairShareCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupHistoricalZ",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupLastUpdate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupNormalizedWeight",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"requestSender",type:"address"},{internalType:"address",name:"requestReceiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"vaa",type:"bytes"}],name:"handleChatRequestData",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"harvestAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_tillEpoch",type:"uint256"}],name:"harvestPaginated",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_pushChannelAdmin",type:"address"},{internalType:"address",name:"_pushTokenAddress",type:"address"},{internalType:"address",name:"_wethAddress",type:"address"},{internalType:"address",name:"_uniswapRouterAddress",type:"address"},{internalType:"address",name:"_lendingPoolProviderAddress",type:"address"},{internalType:"address",name:"_daiAddress",type:"address"},{internalType:"address",name:"_aDaiAddress",type:"address"},{internalType:"uint256",name:"_referralCode",type:"uint256"}],name:"initialize",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"initializeStake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"isMigrationComplete",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_from",type:"uint256"},{internalType:"uint256",name:"_to",type:"uint256"}],name:"lastEpochRelative",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lendingPoolProviderAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"pauseContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"previouslySetEpochRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"pushChannelAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"reactivateChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"relayerAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_bridge",type:"address"}],name:"setBridgeAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_commAddress",type:"address"}],name:"setEpnsCommunicatorAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newFees",type:"uint256"}],name:"setFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_governanceAddress",type:"address"}],name:"setGovernanceAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newFees",type:"uint256"}],name:"setMinChannelCreationFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newAmount",type:"uint256"}],name:"setMinPoolContribution",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_relayer",type:"address"}],name:"setRelayerAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalStakedAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_newAdmin",type:"address"}],name:"transferPushChannelAdminControl",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unPauseContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unstake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"unverifyChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"},{internalType:"bytes",name:"_newIdentity",type:"bytes"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"updateChannelMeta",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userFeesInfo",outputs:[{internalType:"uint256",name:"stakedAmount",type:"uint256"},{internalType:"uint256",name:"stakedWeight",type:"uint256"},{internalType:"uint256",name:"lastStakedBlock",type:"uint256"},{internalType:"uint256",name:"lastClaimedBlock",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"usersRewardsClaimed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"verifyChannel",outputs:[],stateMutability:"nonpayable",type:"function"}];class Ct{static createInterface(){return new ga(ht)}static connect(t,a){return new P(t,ht,a)}}D(Ct,"abi",ht);const kt={config:{SLOTS:{userFeesInfo:134}},epochDuration:21*7156},me={toBN:n=>y.from(n),getCoreV2Contract:(n,t)=>Ct.connect(t,n),lastEpochRelative:(n,t)=>Math.floor((t-n)/kt.epochDuration+1),epochToUserStakedWeight:async(n,t,a,o)=>{const s=kt.config.SLOTS.userFeesInfo,i=Ht(["uint256","uint256"],[t,s]),r=y.from(i).add(4).toHexString(),l=Ht(["uint256","uint256"],[a,r]),d=await n.getStorageAt(o,l);return y.from(d)},deepCopy(n){return JSON.parse(JSON.stringify(n))},getEmptyState(){return{currentEpoch:0,currentBlockNumber:0,genesisEpoch:0,epochRewards:[],lastEpochInitialized:0,lastTotalStakeEpochInitialized:0,epochToTotalStakedWeight:[],previouslySetEpochRewards:y.from(0),userFeesInfo:{epochToUserStakedWeight:[],lastClaimedBlock:y.from(0),lastStakedBlock:y.from(0),stakedAmount:y.from(0),stakedWeight:y.from(0)}}}};class Pt{constructor(t,a){D(this,"STATE");D(this,"coreV2Contract");D(this,"userAddress");this.coreV2Contract=t,this.userAddress=a,this.STATE=me.getEmptyState()}async initState(){const t=this.coreV2Contract,a=await t.provider.getBlockNumber(),o=await t.genesisEpoch().then(x=>x.toNumber()),s=me.lastEpochRelative(o,a);this.STATE.currentBlockNumber=a,this.STATE.genesisEpoch=o,this.STATE.currentEpoch=s,this.STATE.currentBlockNumber=a,this.STATE.genesisEpoch=o,this.STATE.currentEpoch=s;const i=Array.from({length:s+1},(x,M)=>M),r=await Promise.all(i.map(x=>t.epochRewards(x))),l=await Promise.all(i.map(x=>t.epochToTotalStakedWeight(x))),d=await t.provider.getStorageAt(t.address,129).then(x=>Number(x)),h=await t.provider.getStorageAt(t.address,130).then(x=>Number(x));this.STATE.lastEpochInitialized=d,this.STATE.lastTotalStakeEpochInitialized=h,this.STATE.epochRewards=r,this.STATE.epochToTotalStakedWeight=l,this.STATE.previouslySetEpochRewards=await t.previouslySetEpochRewards();const m=await t.userFeesInfo(this.userAddress);this.STATE.userFeesInfo.stakedAmount=m.stakedAmount,this.STATE.userFeesInfo.stakedWeight=m.stakedWeight,this.STATE.userFeesInfo.lastStakedBlock=m.lastStakedBlock,this.STATE.userFeesInfo.lastClaimedBlock=m.lastClaimedBlock,this.STATE.userFeesInfo.epochToUserStakedWeight=await Promise.all(i.map(x=>me.epochToUserStakedWeight(t.provider,this.userAddress,x,this.coreV2Contract.address)))}async _setupEpochsRewardAndWeights(t){const a=this.coreV2Contract,o=await a.genesisEpoch().then(r=>r.toNumber()),s=me.lastEpochRelative(o,this.STATE.lastEpochInitialized),i=this.STATE.currentEpoch;if(console.debug(`

Doing with: _currentEpoch, _lastEpochInitiliazed`,i,s,`
`),i>s||i==1){const r=await a.PROTOCOL_POOL_FEES(),l=await a.previouslySetEpochRewards(),d=r.sub(l);i-s>1?this.STATE.epochRewards[i-1]=this.STATE.epochRewards[i-1].add(d):this.STATE.epochRewards[i]=me.toBN(this.STATE.epochRewards[i].toString()).add(d),this.STATE.lastEpochInitialized=await a.provider.getBlockNumber(),this.STATE.previouslySetEpochRewards=r}if(this.STATE.lastTotalStakeEpochInitialized==0||this.STATE.lastTotalStakeEpochInitialized==i)this.STATE.epochToTotalStakedWeight[i]=this.STATE.epochToTotalStakedWeight[i].add(t);else{for(let r=this.STATE.lastTotalStakeEpochInitialized+1;r<=i-1;r++)this.STATE.epochToTotalStakedWeight[r].toNumber()==0&&(this.STATE.epochToTotalStakedWeight[r]=this.STATE.epochToTotalStakedWeight[this.STATE.lastTotalStakeEpochInitialized]);this.STATE.epochToTotalStakedWeight[i]=this.STATE.epochToTotalStakedWeight[this.STATE.lastTotalStakeEpochInitialized].add(t)}this.STATE.lastTotalStakeEpochInitialized=i}async _adjustUserAndTotalStake(t){await this._setupEpochsRewardAndWeights(t);const a=this.STATE.currentEpoch,o=this.STATE.userFeesInfo.stakedWeight;if(o.isZero())this.STATE.userFeesInfo.stakedWeight=me.toBN(t);else{const s=me.lastEpochRelative(this.STATE.genesisEpoch,this.STATE.userFeesInfo.lastStakedBlock.toNumber());if(a==s)this.STATE.userFeesInfo.stakedWeight=o.add(t);else for(let i=s;i<=a;i++)i!=a?this.STATE.userFeesInfo.epochToUserStakedWeight[i]=o:(this.STATE.userFeesInfo.stakedWeight=o.add(t),this.STATE.userFeesInfo.epochToUserStakedWeight[i]=this.STATE.userFeesInfo.stakedWeight)}t!=0&&(this.STATE.userFeesInfo.lastStakedBlock=me.toBN(this.STATE.currentBlockNumber))}calculateEpochRewards(t){return this.STATE.userFeesInfo.epochToUserStakedWeight[t].mul(this.STATE.epochRewards[t]).div(this.STATE.epochToTotalStakedWeight[t].add(1))}async estimateHarvestAll(){await this.initState();const t=this.STATE.currentEpoch-1;if(await this._adjustUserAndTotalStake(0),!(this.STATE.currentEpoch>t))return me.toBN(0);const a=me.lastEpochRelative(this.STATE.genesisEpoch,Math.max(this.STATE.userFeesInfo.lastClaimedBlock.toNumber(),this.STATE.genesisEpoch));if(this.coreV2Contract,!(t>=a))return me.toBN(0);let o=me.toBN(0);for(let s=a;s<=t;s++){const i=this.calculateEpochRewards(s);o=o.add(i)}return o}async getUserPotentialEpochReward(){await this.initState(),await this._setupEpochsRewardAndWeights(0);const t=this.STATE.epochRewards[this.STATE.currentEpoch],a=this.STATE.epochToTotalStakedWeight[this.STATE.currentEpoch],o=this.STATE.userFeesInfo.stakedWeight.mul(t).div(a),s=this.STATE.currentEpoch,i=this.STATE.userFeesInfo.stakedAmount;return{potentialReward:o,epochRewards:t,userStaked:i,currentEpochNumber:s}}}const At=async(n,t,a)=>{const o=me.getCoreV2Contract(n,a),s=new Pt(o,t),i=new Pt(o,t),[r,l]=await Promise.all([s.estimateHarvestAll(),i.getUserPotentialEpochReward()]);return{availableRewards:r,...l}},vt=y.from(1).mul(y.from(10).pow(y.from(18))),bn=59400,jn=75300,En=1323100,We=function(n,t=null){return y.from(n)},Ie=n=>n.mul(y.from(10).pow(y.from(18))),ie=n=>parseFloat(ma(n)),Cn="0x0000000000000000000000000000000000000001",Ae=class Ae{constructor(){D(this,"state",{account:null,signer:null,staking:null,yieldFarmingPUSH:null,yieldFarmingLP:null,rewardForCurrentEpochPush:null,rewardForCurrentEpochLP:null,highCapLPStakingAPR:200,highCapPUSHStakingAPR:200,genesisEpochAmountPUSH:bn,deprecationPerEpochPUSH:900,genesisEpochAmountLP:jn,deprecationPerEpochLP:900,annualPushReward:En,uniswapV2Router02:null});D(this,"init",(t,a,o,s,i,r)=>{this.state.account=t,this.state.staking=a,this.state.pushToken=o,this.state.pushCoreV2=s,this.state.yieldFarmingLP=i,this.state.uniswapV2Router02=r});D(this,"getPoolStats",t=>new Promise(async(a,o)=>{const s=this.state.pushCoreV2,i=this.state.yieldFarmingLP,r=await i.getCurrentEpoch(),l=await this.currentEpochCalculation(t);let d;const h=await this.state.uniswapV2Router02.getAmountsOut(vt.toString(),[c.pushToken,c.WETHAddress,c.USDTAddress]);X.coreContractChain===42||X.coreContractChain===5?d=ie(h[h.length-1]):d=h[h.length-1].toNumber()/1e6;const m=ie(await this.state.pushToken.balanceOf(c.uniV2LPToken)),x=ie(await this.state.pushToken.attach(c.WETHAddress).balanceOf(c.uniV2LPToken));let M;const N=await this.state.uniswapV2Router02.getAmountsOut(vt.toString(),[c.WETHAddress,c.USDTAddress]);X.coreContractChain===42||X.coreContractChain===5?M=ie(N[N.length-1]):M=N[N.length-1].toNumber()/1e6;const U=ie(await this.state.pushToken.attach(c.uniV2LPToken).totalSupply()),I=(m*d+x*M)/U,F=I/d,Q=ie(await i.getPoolSize(r.add(1))),se=ie(await s.totalStakedAmount())*d+Q*I,J=await i.epochDuration(),te=(await i.epochStart()).add(r.sub(1).mul(J)).add(J);let V=await t.getBlock("latest");V=V.number;const L=await s.genesisEpoch(),f=await s.epochDuration();let v=(f.toNumber()-(V-L.toNumber())%f.toNumber())*12.6;v=Math.round(v);const T=Ie(y.from(this.state.annualPushReward)),E=await i.TOTAL_DISTRIBUTED_AMOUNT(),ee=T.add(E),Y=await this.getPushRewardsDistributed(l,r);a({pushPrice:d,lpToPushRatio:F,epochEndTimestamp:te,epochEndTime:v,totalValueLocked:se,totalDistributedAmount:ee,pushRewardsDistributed:Y})}));D(this,"getPushRewardsDistributed",async(t,a)=>{const o=this.state.pushCoreV2,s=await this.state.yieldFarmingLP.NR_OF_EPOCHS();a=a.toNumber()>s.toNumber()?s:a;const i=Ie(y.from(this.state.genesisEpochAmountLP)),r=Ie(y.from(this.state.deprecationPerEpochLP));let l=y.from(0),d=y.from(0);for(var h=0;h<a.toNumber();h++){const m=this.calcTotalAmountPerEpoch(i,y.from(h),r);d=d.add(m);const x=await o.epochRewards(h);d=d.add(x)}return l.add(d)});D(this,"getLPPoolStats",async t=>new Promise(async(a,o)=>{const s=this.state.yieldFarmingLP,i=await s.NR_OF_EPOCHS(),r=await s.getCurrentEpoch().then(M=>M.toNumber()>i.toNumber()?i:M),l=Ie(y.from(this.state.genesisEpochAmountLP)),d=Ie(y.from(this.state.deprecationPerEpochLP)),h=this.calcTotalAmountPerEpoch(l,r,d);this.state.rewardForCurrentEpochLP=h;const m=await s.getPoolSize(r.add(1));let x=await this.calcLPPoolAPR(l,r,d,m,t);x=Math.min(this.state.highCapLPStakingAPR,x),a({currentEpochLP:r,totalEpochLP:i,rewardForCurrentEpoch:h,poolBalance:m,stakingAPR:x})}));D(this,"getUserDataLP",async()=>new Promise(async(t,a)=>{if(this.state.account){const o=this.state.yieldFarmingLP,s=await o.NR_OF_EPOCHS(),i=await o.getCurrentEpoch().then(U=>U.toNumber()>s.toNumber()?s:U);let r=o.getEpochStake(this.state.account,i.add(1));const l=(await this.calculateUserEpochReward(i.toNumber(),o)).toFixed(2),d=(await o.lastEpochIdHarvested(this.state.account)).toNumber();let h=this.getAccumulatedReward(i,o),m=this.getTotalAvailableRewards(d,i,o),[x,M,N]=await Promise.all([h,m,r]);t({potentialUserReward:l,epochStakeNext:N,totalAccumulatedReward:x,totalAvailableReward:M})}}));D(this,"calculateLpEpochRewards",async(t,a)=>{t=t+1;const o=ie(await a.getEpochStake(this.state.account,t)),s=ie(await a.getPoolSize(t));let i=0;if(s>0&&a.address==c.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,d=r-l*t;i=o/s*d}return i});D(this,"getAccumulatedReward",async(t,a)=>{let o=[];for(var s=0;s<t.sub(1).toNumber();s++){const r=this.calculateLpEpochRewards(s,a);o.push(r)}let i=(await Promise.all(o)).reduce((r,l)=>r+l,0);return i=i.toFixed(2),i});D(this,"getTotalAvailableRewards",async(t,a,o)=>{let s=[];for(var i=t;i<a.sub(1).toNumber();i++){const l=this.calculateLpEpochRewards(i,o);s.push(l)}let r=(await Promise.all(s)).reduce((l,d)=>l+d,0);return r=r.toFixed(2),r});D(this,"getUserDataPUSH",async t=>new Promise(async(a,o)=>{if(this.state.account){const s=this.state.pushCoreV2;let{epochRewards:i=We(0),currentEpochNumber:r=0,userStaked:l=We(0),potentialReward:d=We(0),availableRewards:h=We(0)}={};({epochRewards:i,currentEpochNumber:r}=await At(t,this.state.account,c.pushCoreV2)),this.state.account!==Cn&&({userStaked:l,potentialReward:d,availableRewards:h}=await At(t,this.state.account,c.pushCoreV2));const m=await s.totalStakedAmount();let x=await s.usersRewardsClaimed(this.state.account);x=ie(x);let M=i;this.state.rewardForCurrentEpochPush=M;let N=this.calcPushStakingAPR(m);N=Math.min(this.state.highCapPUSHStakingAPR,N),d=ie(d),h=ie(h),a([{currentEpochNumber:r,currentReward:M,totalStakedAmount:m,stakingAPR:N},{userStaked:l,claimedReward:x,potentialReward:d,availableRewards:h}])}}));D(this,"calculateUserEpochReward",async(t,a)=>{const o=ie(await a.getEpochStake(this.state.account,t)),s=ie(await a.getPoolSize(t));let i=0;if(s>0&&a.address==c.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,d=r-l*t;i=o/s*d}return i});D(this,"calcTotalAmountPerEpoch",(t,a,o)=>a.toNumber()===0?t.mul(0):t.sub(a.mul(o)));D(this,"currentEpochCalculation",async t=>{const a=this.state.pushCoreV2,o=await a.genesisEpoch(),s=await t.getBlock("latest");return await a.lastEpochRelative(o,s.number)});D(this,"calcAnnualEpochReward",(t,a,o)=>{const s=this.calcTotalAmountPerEpoch(t,a,o);let i=s;for(let r=a.toNumber();r<a.toNumber()+12;r++)i=i.add(s.sub(o.mul(r)));return i});D(this,"calcPushStakingAPR",t=>{const a=this.state.annualPushReward;let o;return X.coreContractChain===42||X.coreContractChain===5?o=a/Math.max(ie(t),1)*100:o=a/ie(t)*100,o.toFixed(2)});D(this,"calcLPPoolAPR",async(t,a,o,s,i)=>{const r=this.calcAnnualEpochReward(t,a,o),l=s*i.lpToPushRatio;return(r.mul(100)/l).toFixed(2)})}static getInstance(){return Ae.instance||(Ae.instance=new Ae),Ae.instance}};D(Ae,"instance",null);let Ee=Ae;const Rt=({onClose:n,InnerComponentProps:t,toastObject:a})=>{const{title:o,getUserData:s,getPoolStats:i,setUnstakeErrorMessage:r,setWithdrawErrorMessage:l}=t,{account:d,provider:h,isWalletConnected:m,connect:x}=ke(),[M,N]=u.useState(0),[U,I]=u.useState(0),[F,Q]=u.useState(!1),[se,J]=u.useState(!1),[te,V]=u.useState(!1);u.useState(null),u.useContext(Ot);const[L,f]=u.useState(0),v=()=>{r(null),l(null),n()},T=Ve(),E=u.useRef(null);Wt(E,()=>v());const ee=async()=>{var b=h.getSigner(d);const w=o==="Uni-V2"?c.uniV2LPToken:c.pushToken,B=new P(w,A.uniV2LpToken,b);let C=tn(await B.balanceOf(d));N(parseInt(C.toString().replace(/\D/,""))||0)},Y=async()=>{J(!0);var b=h.getSigner(d);let w;o==="Uni-V2"?w=await new P(c.uniV2LPToken,A.uniV2LpToken,b).allowance(d,c.stakingV2):w=await new P(c.pushToken,A.uniV2LpToken,b).allowance(d,c.pushCoreV2),I(G(w)),J(!1)};u.useEffect(()=>{ee(),Y()},[]);const we=async()=>{if(!m){x();return}if(F||se)return;J(!0);var b=h.getSigner(d);let w;const B=wa(L.toString(),18);o==="Uni-V2"?w=new P(c.uniV2LPToken,A.uniV2LpToken,b).approve(c.stakingV2,B):w=new P(c.pushToken,A.uniV2LpToken,b).approve(c.pushCoreV2,B),w.then(async C=>{a.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await h.waitForTransaction(C.hash),a.showMessageToast({toastTitle:"Success",toastMessage:`Successfully approved ${o} Tokens!`,toastType:"SUCCESS",getToastIcon:k=>e.jsx(he,{size:k,color:"green"})}),J(!1),Q(!0)}catch(k){console.error("Error",k),a.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:_=>e.jsx(H,{size:_,color:"red"})}),J(!1)}}).catch(C=>{console.error("Error",C),a.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature",toastType:"ERROR",getToastIcon:k=>e.jsx(H,{size:k,color:"red"})}),J(!1)})},z=async()=>{if(!m){x();return}if(te||!F)return;if(V(!0),L==0){a.showMessageToast({toastTitle:"Error",toastMessage:`You need to deposit atleast 1 ${o} token `,toastType:"ERROR",getToastIcon:B=>e.jsx(H,{size:B,color:"red"})}),V(!1);return}var b=h.getSigner(d);let w;o==="Uni-V2"?w=new P(c.stakingV2,A.stakingV2,b).deposit(c.uniV2LPToken,y.from(L).mul(y.from(10).pow(18))):w=new P(c.pushCoreV2,A.pushCoreV2,b).stake(y.from(L).mul(y.from(10).pow(18))),w.then(async B=>{a.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await h.waitForTransaction(B.hash),a.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:C=>e.jsx(he,{size:C,color:"green"})}),i(),s(),V(!1),v()}catch(C){console.error("Error",C),a.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${C.name}+ ")`,toastType:"ERROR",getToastIcon:k=>e.jsx(H,{size:k,color:"red"})}),V(!1)}}).catch(B=>{console.error("Error in depositing",B),B.reason=B.reason.slice(B.reason.indexOf("::")+1),a.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Cancelled! ${B.reason}`,toastType:"ERROR",getToastIcon:C=>e.jsx(H,{size:C,color:"red"})}),V(!1)})},ne=b=>{b.preventDefault(),f(parseInt(b.target.value.replace(/\D/,""))||0),U>=parseInt(b.target.value.replace(/\D/,""))?Q(!0):Q(!1)},O=b=>{f(parseInt(b.toString().replace(/\D/,""))||0)},S=ve(600);return e.jsxs(kn,{children:[e.jsxs(j,{justifyContent:"space-between",children:[e.jsx(Pn,{children:o==="Uni-V2"?"Uniswap V2 Staking Pool":"Push Fee Staking Pool"}),e.jsx(mt,{onClick:()=>v(),style:{cursor:"pointer"}})]}),e.jsxs(R,{children:[e.jsx(Ta,{weight:"500",size:"14px",self:"baseline",color:T.stakingSecondaryText,children:"You are Staking"}),e.jsxs(j,{width:"-webkit-fill-available",background:T.default.bg,height:"60px",padding:S?"8px":"14px",borderRadius:"12px",border:`1px solid ${T.modalBorderColor}`,children:[e.jsx(An,{placeholder:"Enter Amount",flex:"2",radius:"4px",size:"32px",height:"32px",self:"auto",bg:"#FFF",color:T.stakingSecondaryText,value:L,onChange:b=>{b.preventDefault(),ne(b)},autoFocus:!0}),e.jsxs(vn,{onClick:()=>O(M),children:["Max: ",M]})]})]}),e.jsxs(j,{margin:"20px 0",children:[e.jsxs(Rn,{onClick:we,background:F?T.stakingEmptyButtonBG:"#D53A94",cursor:F?"default":"pointer",disabled:!!F,children:[!F&&!se&&e.jsxs(_e,{color:"#FFFFFF",weight:"400",cursor:"pointer",children:["Approve ",o]}),se&&!F&&e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#fff",title:"Approving",titleColor:"#FFF"}),F&&e.jsx(_e,{color:T.emptyButtonText,weight:"600",cursor:"default",children:"Approved"})]}),e.jsxs(Mn,{cursor:F?"pointer":"default",background:F?"#D53A94":T.stakingEmptyButtonBG,disabled:!!(!F||te),onClick:z,children:[!te&&e.jsx(_e,{color:F?"#FFFFFF":T.emptyButtonText,weight:"400",cursor:F?"pointer":"default",children:"Deposit"}),te&&e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFFF",title:"Depositing",titleColor:"#FFF"})]})]})]})},kn=p.div`
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
`,Pn=p($)`
  font-size: 16px;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};
`,An=p(ya)`
  background: transparent;
`,vn=p.p`
  font-size: 14px;
  text-align: right;
  text-decoration-line: underline;
  color: #657795;
  margin: 0px;
  cursor: pointer;
`,Rn=p(fe)`
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
`,Mn=p(fe)`
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
`,Fn=({lpPoolStats:n,userDataLP:t,getLpPoolStats:a,getUserDataLP:o})=>{const{account:s,provider:i}=ke(),[r,l]=u.useState(!1),[d,h]=u.useState(!1),[m,x]=u.useState(null),[M,N]=u.useState(null),U=Be(),I=Ve(),F=async()=>{if(r)return;l(!0);const v=G(t.epochStakeNext);if(v==0){N("Nothing to unstake. You need to stake first"),l(!1);return}var T=i.getSigner(s);let E=new P(c.stakingV2,A.stakingV2,T);await E.balanceOf(s,c.uniV2LPToken),E.withdraw(c.uniV2LPToken,y.from(v).mul(y.from(10).pow(18))).then(async ee=>{U.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await i.waitForTransaction(ee.hash),U.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:Y=>e.jsx(he,{size:Y,color:"green"})}),l(!1),a(),o()}catch(Y){console.error("Error",Y),U.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${Y.name}+ ")`,toastType:"ERROR",getToastIcon:we=>e.jsx(H,{size:we,color:"red"})}),l(!1)}}).catch(ee=>{U.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:Y=>e.jsx(H,{size:Y,color:"red"})}),l(!1)})},Q=async()=>{if(!d){if((t==null?void 0:t.totalAvailableReward)==0){x("No Rewards to Claim!");return}if(console.debug("Lp POOL stats",n),!n.currentEpochLP||n.currentEpochLP==1){U.showMessageToast({toastTitle:"Error",toastMessage:"Harvest unlocks from Epoch 2!)",toastType:"ERROR",getToastIcon:T=>e.jsx(H,{size:T,color:"red"})});return}h(!0);var v=i.getSigner(s);new P(c.yieldFarmLP,A.yieldFarming,v).massHarvest().then(async T=>{U.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await i.waitForTransaction(T.hash),U.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:E=>e.jsx(he,{size:E,color:"green"})}),o(),h(!1)}catch(E){U.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${E.name}+ ")`,toastType:"ERROR",getToastIcon:ee=>e.jsx(H,{size:ee,color:"red"})}),h(!1)}}).catch(T=>{U.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:E=>e.jsx(H,{size:E,color:"red"})}),h(!1)})}};u.useEffect(()=>{x(null),N(null)},[s]);const se=()=>{(n==null?void 0:n.currentEpochLP.toNumber())+1<=(n==null?void 0:n.totalEpochLP.toNumber())?te():U.showMessageToast({toastTitle:"Error",toastMessage:"Epochs have ended!",toastType:"ERROR",getToastIcon:v=>e.jsx(H,{size:v,color:"red"})})},{isModalOpen:J,showModal:te,ModalComponent:V}=tt(),L=Be(),f=ve(600);return e.jsxs(Un,{children:[e.jsx(V,{InnerComponent:Rt,InnerComponentProps:{title:"Uni-V2",getUserData:o,getPoolStats:a,setUnstakeErrorMessage:N,setWithdrawErrorMessage:x},toastObject:L,modalPosition:nt.ON_PARENT}),e.jsx(R,{margin:"0px 0px 20px 0px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(In,{children:"Uniswap V2 LP Staking Pool"}),e.jsxs(xt,{children:["Current APR"," ",e.jsxs(Te,{color:"#D53A94",fontWeight:"600",children:[">",Z(n==null?void 0:n.stakingAPR),"%"]})]})]}):e.jsxs(Ne,{padding:"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(g,{height:"12px",width:"112px"})]})}),e.jsxs(R,{flex:"5",children:[e.jsxs(Nn,{border:`1px solid ${I.stakingBorder}`,borderRadius:"16px",children:[e.jsx(R,{margin:f?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:f?" 7px":"10px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(xt,{children:"Current Reward"}),e.jsxs($,{fontSize:f?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:[Z(G(n==null?void 0:n.rewardForCurrentEpoch))," PUSH"]})]}):e.jsxs(Ne,{padding:f?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:f?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:f?"65px":"100px}"})]})}),e.jsx(Dn,{width:"10px",height:"100%"}),e.jsx(R,{margin:f?"0 0 0 6px":"0 0 0 18px",padding:f?" 7px":"10px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(xt,{children:"Total Staked"}),e.jsxs(Ln,{fontSize:f?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[Z(G(n==null?void 0:n.poolBalance))," UNI-V2"]})]}):e.jsxs(Ne,{padding:f?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:f?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:f?"65px":"100px}"})]})})]}),e.jsx(j,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:n?e.jsxs(e.Fragment,{children:[e.jsx(Mt,{children:"Current Epoch"}),e.jsxs(Mt,{children:[Math.min(n==null?void 0:n.currentEpochLP,n==null?void 0:n.totalEpochLP).toString(),"/",n==null?void 0:n.totalEpochLP.toString()]})]}):e.jsx(Ne,{padding:"5px 0px 0 15px",children:e.jsx(g,{height:"12px",width:"124px"})})}),t?e.jsxs(R,{children:[e.jsxs(j,{justifyContent:"space-between",margin:f?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ge,{children:["User Deposit",e.jsx(Je,{children:e.jsx(q,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ye,{children:[G(t==null?void 0:t.epochStakeNext)," UNI-V2"]})]}),e.jsxs(j,{justifyContent:"space-between",margin:f?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ge,{children:["Rewards Claimed",e.jsx(Je,{children:e.jsx(q,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ye,{children:[" ",Z(((t==null?void 0:t.totalAccumulatedReward)-(t==null?void 0:t.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(j,{justifyContent:"space-between",margin:f?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ge,{children:["Current Epoch Reward",e.jsx(Je,{children:e.jsx(q,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ye,{children:[" ",Z(t==null?void 0:t.potentialUserReward)," PUSH"]})]}),e.jsxs(j,{justifyContent:"space-between",margin:f?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ge,{children:["Available for Claiming",e.jsx(Je,{children:e.jsx(q,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ye,{children:[" ",Z(t==null?void 0:t.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(Ce,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(j,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(j,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(j,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(j,{justifyContent:"space-between",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]})]})]}),e.jsx(R,{padding:f?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx(Bn,{onClick:()=>{se()},children:"Stake $UNI-V2 LP Tokens"})}),e.jsxs(zn,{children:[G(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(q,{error:!0,ToolTipTitle:"Nothing to unstake! Stake First.",ToolTipWidth:"16rem",margin:"0 10px 0 0",bottom:"-30px",children:e.jsx(Ke,{border:"none",background:I.disableButtonBg,cursor:"default",color:I.disabledButtonText,children:r?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Unstake $UNI-V2"})}):e.jsx(Ke,{border:`1px solid ${I.activeButtonText}`,background:"transparent",color:I.activeButtonText,cursor:"pointer",onClick:F,style:{margin:"0px 10px 0px 0px"},children:r?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:I.activeButtonText,title:"Unstaking",titleColor:I.activeButtonText}):"Unstake $UNI-V2"}),(t==null?void 0:t.totalAvailableReward)==="0.00"?e.jsx(q,{bottom:"-30px",left:"40px",ToolTipTitle:"No Rewards to Claim!",error:!0,ToolTipWidth:"10rem",children:e.jsx(Ke,{border:"none",cursor:"default",background:I.disableButtonBg,color:I.disabledButtonText,children:d?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFF"}):"Claim Rewards"})}):e.jsx(Ke,{border:`1px solid ${I.activeButtonText}`,background:"transparent",color:I.activeButtonText,cursor:"pointer",onClick:()=>Q(),children:d?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:I.activeButtonText,title:"Claiming",titleColor:I.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Ne,{width:"100%",children:[e.jsx(g,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(g,{height:"49px",width:"100%"})]})})]})},Un=p(ze)`
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
`,In=p($)`
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
`,Nn=p(j)`
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
`,Ln=p($)`
  color: ${n=>n.theme.stakingSecondaryText};
`,Mt=p(Gt)`
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
`,Je=p(Te)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,Ye=p($)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,zn=p.div`
  display: flex;
  width: 100%;
  margin: 15px 0px 0px 0px;
`,Bn=p(fe)`
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
`,Ke=p(fe)`
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
`;const Ne=p(Ce)`
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
`;const Vn=n=>u.createElement("svg",{width:29,height:28,viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},u.createElement("path",{d:"M26.1673 14.0002C26.1673 20.4431 20.9436 25.6668 14.5007 25.6668C8.05773 25.6668 2.83398 20.4431 2.83398 14.0002C2.83398 7.55725 8.05773 2.3335 14.5007 2.3335C20.9436 2.3335 26.1673 7.55725 26.1673 14.0002Z",fill:"#30CC8B"}),u.createElement("path",{d:"M20.6751 8.5083L12.7593 16.4335L9.49146 13.175L7.8418 14.8246L12.7616 19.7328L22.3254 10.158L20.6751 8.5083Z",fill:"white"})),_n=({onClose:n,InnerComponentProps:t})=>{const{currentTransactionNo:a,totalTransactionNo:o,transactionSteps:s,transactionText:i,setCurrentTransactionNo:r,setTotalTransactionNo:l,setTransactionSteps:d,claimRewards:h,unstakeTokensPaginated:m}=t,x=()=>{d(0),n()},M=async()=>{d(0),l(0),r(0),i!=null&&i.includes("Unstaking")?m():h()};return e.jsx(On,{children:o?e.jsxs(e.Fragment,{children:[e.jsx(j,{justifyContent:"end",children:e.jsx(mt,{onClick:()=>x(),style:{cursor:"pointer"}})}),s===0&&e.jsxs(e.Fragment,{children:[e.jsx(Jt,{size:42,color:xe.COLORS.PRIMARY_PINK,type:Yt.PROCESSING}),e.jsxs(R,{gap:"24px",margin:"16px 0 0 0",children:[e.jsxs(R,{children:[e.jsxs($,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:["Please sign transaction ",a,"/",o]}),e.jsx($,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"Processing your request"})]}),e.jsx($,{fontSize:"18px",fontWeight:"400",color:"#657795",children:i}),e.jsx(R,{padding:"16px",children:e.jsx($,{fontSize:"16px",fontWeight:"400",color:"#D53A94",children:"Confirm the request in your wallet"})})]})]}),s===1&&e.jsxs(R,{gap:"24px",children:[e.jsx(R,{gap:"9px",children:e.jsx($,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:"Transaction Error"})}),e.jsx(R,{children:e.jsx(Ft,{onClick:M,children:"Retry"})})]}),s===2&&e.jsxs(R,{gap:"24px",children:[e.jsxs(R,{children:[e.jsx(Vn,{height:"50px",width:"50px"}),e.jsxs(R,{gap:"9px",children:[e.jsx($,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:"Transactions Successful"}),e.jsx($,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"You have claimed all the rewards."})]})]}),e.jsx(R,{onClick:x,children:e.jsx(Ft,{children:"Close"})})]})]}):e.jsx(Jt,{size:42,color:xe.COLORS.PRIMARY_PINK,type:Yt.PROCESSING})})},On=p(R)`
  min-width: 493px;
  padding: 32px 24px;
`,Ft=p(fe)`
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
`,$n=({userDataPush:n,getUserDataPush:t,PUSHPoolstats:a,getPUSHPoolStats:o})=>{const{account:s,provider:i}=ke(),[r,l]=u.useState(!1),[d,h]=u.useState(!1),[m,x]=u.useState(null),[M,N]=u.useState(null),[U,I]=u.useState(0),[F,Q]=u.useState(0),[se,J]=u.useState(0),[te,V]=u.useState(""),L=Be(),f=Ve(),v=async C=>{var k=i.getSigner(s);let _=new P(c.pushToken,A.pushToken,k);if(await _.holderDelegation(s,C.address))return!0;try{L.showLoaderToast({loaderMessage:"Delegating! Please wait.."});const K=await _.setHolderDelegation(C.address,"true");return await i.waitForTransaction(K.hash),L.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Address Delegated",toastType:"SUCCESS",getToastIcon:oe=>e.jsx(he,{size:oe,color:"green"})}),!0}catch(K){return console.error("Error in delegating",K),L.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${K.reason}`,toastType:"ERROR",getToastIcon:oe=>e.jsx(H,{size:oe,color:"red"})}),l(!1),!1}},T=async C=>{const k=(await C.userFeesInfo(s)).lastClaimedBlock;if(k.toNumber()!==0){const _=await C.genesisEpoch(),K=await C.epochDuration();return(k-_)/K}},E=async()=>{if(d)return;if(h(!0),(n==null?void 0:n.availableRewards)==0){N("No Rewards to Claim"),h(!1);return}var C=i.getSigner(s);let k=new P(c.pushCoreV2,A.pushCoreV2,C);const _=a==null?void 0:a.currentEpochNumber,K=14;if(!await v(k))return;let oe=1;oe=await T(k),w(),h(!1);let W=0;_-oe<K,W=Math.ceil((_-oe)/K),Q(W),W!=0&&(await ee(W,oe,k,K),t(),J(2),I(0))},ee=async(C,k,_,K)=>{const oe=a==null?void 0:a.currentEpochNumber;let W=0;for(let de=0;de<C;de++){let pe=k;k+=K;let ye=Math.min(k,oe-1);V(`Claiming the rewards from Epoch ${pe} to ${ye} `),await _.harvestPaginated(ye,{gasLimit:91e4}).then(async ae=>{try{L.showLoaderToast({loaderMessage:"Waiting for confirmation"}),await i.waitForTransaction(ae.hash),L.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:re=>e.jsx(he,{size:re,color:"green"})}),W++,I(W)}catch{console.error("Error in the transaction",ae);return}}).catch(ae=>{throw console.error("Error in claiming the reward",ae),L.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${ae.reason}`,toastType:"ERROR",getToastIcon:re=>e.jsx(H,{size:re,color:"red"})}),V(""),l(!1),t(),J(1),I(0),ae})}},Y=async()=>{if(r)return;if(l(!0),G(n==null?void 0:n.userStaked)==0){x("Nothing to unstake, You need to stake first"),l(!1);return}var C=i.getSigner(s);let k=new P(c.pushCoreV2,A.pushCoreV2,C);const _=await v(k);if(h(!1),!_)return;const K=a==null?void 0:a.currentEpochNumber,oe=14;let W=0;if(W=await T(k),W>=K-1){l(!1),x("PUSH cannot be unstaked until current epoch is over."),L.showMessageToast({toastTitle:"Unstaking Error",toastMessage:"You cannot unstake until Current Epoch gets over.",toastType:"ERROR",getToastIcon:pe=>e.jsx(H,{size:pe,color:"red"})});return}w();const de=Math.ceil((K-W)/oe);Q(de),de>1&&await ee(de-1,W,k,oe),V("Unstaking Your Push Tokens. Please wait..."),k.unstake().then(async pe=>{L.showLoaderToast({loaderMessage:"Unstaking! Waiting for Confirmation..."});try{await i.waitForTransaction(pe.hash),L.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:ye=>e.jsx(he,{size:ye,color:"green"})}),o(),t(),l(!1),J(2),I(0)}catch(ye){console.error("Error",ye),L.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${ye.name}+ ")`,toastType:"ERROR",getToastIcon:ae=>e.jsx(H,{size:ae,color:"red"})}),V(""),l(!1)}}).catch(pe=>{console.error("Error: ",pe);const ye=pe.reason.includes("PushCoreV2::unstake:"),ae=pe.reason.includes("PushCoreV2::harvestPaginated:");if(ye||ae)x("PUSH cannot be unstaked until current epoch is over.");else{let re=pe.reason.slice(pe.reason.indexOf("::")+1);re=re.replace("unstake:",""),L.showMessageToast({toastTitle:"Error",toastMessage:`${re}`,toastType:"ERROR",getToastIcon:Le=>e.jsx(H,{size:Le,color:"red"})})}l(!1),t(),J(1),I(0)})};u.useEffect(()=>{N(null),x(null)},[s]);const{isModalOpen:we,showModal:z,ModalComponent:ne}=tt(),O=Be(),S=ve(600),{isModalOpen:b,showModal:w,ModalComponent:B}=tt();return e.jsxs(Jn,{children:[e.jsx(ne,{InnerComponent:Rt,InnerComponentProps:{title:"PUSH",getUserData:t,getPoolStats:o,setUnstakeErrorMessage:x,setWithdrawErrorMessage:N},toastObject:O,modalPosition:nt.ON_PARENT}),e.jsx(B,{InnerComponent:_n,InnerComponentProps:{currentTransactionNo:U,totalTransactionNo:F,transactionSteps:se,transactionText:te,setCurrentTransactionNo:I,setTotalTransactionNo:Q,setTransactionSteps:J,claimRewards:E,unstakeTokensPaginated:Y},onConfirm:()=>{},modalPadding:"0px",modalPosition:nt.ON_ROOT}),e.jsx(R,{margin:"0px 0px 20px 0px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Yn,{children:"PUSH Fee Staking Pool"}),e.jsxs(Kn,{children:["Current APR",e.jsxs(Te,{color:"#D53A94",fontWeight:"600",margin:"0 5px 0 5px",children:[">",Z(a==null?void 0:a.stakingAPR),"% + Fee"]}),e.jsx(Hn,{})]})]}):e.jsxs(De,{padding:"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(g,{height:"12px",width:"112px"})]})}),e.jsxs(R,{flex:"5",children:[e.jsxs(qn,{border:`1px solid ${f.stakingBorder}`,borderRadius:"16px",children:[e.jsx(R,{margin:S?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:S?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(It,{children:"Current Reward"}),e.jsxs($,{fontSize:S?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:[Z(G(a==null?void 0:a.currentReward))," PUSH"]})]}):e.jsxs(De,{padding:S?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:S?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:S?"65px":"100px}"})]})}),e.jsx(Zn,{width:"10px",height:"100%"}),e.jsx(R,{margin:S?"0 0 0 6px":"0 0 0 18px",padding:S?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(It,{children:"Total Staked"}),e.jsxs(Xn,{fontSize:S?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[Z(G(a==null?void 0:a.totalStakedAmount))," PUSH"]})]}):e.jsxs(De,{padding:S?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:S?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:S?"65px":"100px}"})]})})]}),e.jsx(j,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Nt,{children:"Current Epoch"}),e.jsx(Nt,{children:a==null?void 0:a.currentEpochNumber})]}):e.jsx(De,{padding:"5px 0px 0 15px",children:e.jsx(g,{height:"12px",width:"124px"})})}),n?e.jsxs(R,{children:[e.jsxs(j,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(qe,{children:["User Deposit",e.jsx(Ze,{children:e.jsx(q,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Xe,{children:[" ",Z(G(n==null?void 0:n.userStaked))," PUSH"]})]}),e.jsxs(j,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(qe,{children:["Rewards Claimed",e.jsx(Ze,{children:e.jsx(q,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Xe,{children:[" ",Z((n==null?void 0:n.claimedReward).toFixed(2))," PUSH"]})]}),e.jsxs(j,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(qe,{children:["Current Epoch Reward",e.jsx(Ze,{children:e.jsx(q,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Xe,{children:[" ",Z((n==null?void 0:n.potentialReward).toFixed(2))," PUSH"]})]}),e.jsxs(j,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(qe,{children:["Available for Claiming",e.jsx(Ze,{children:e.jsx(q,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Xe,{children:[" ",Z((n==null?void 0:n.availableRewards).toFixed(2))," PUSH"]})]})]}):e.jsxs(Ce,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(j,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(j,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(j,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(j,{justifyContent:"space-between",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]})]})]}),e.jsx(R,{padding:S?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx(ea,{onClick:z,children:" Stake $PUSH"})}),e.jsxs(Qn,{children:[(a==null?void 0:a.currentEpochNumber)<=2?e.jsx(Ut,{ToolTipTitle:"You can unstake once epoch 2 ends.",ButtonTitle:"Unstake PUSH"}):G(n==null?void 0:n.userStaked)==0||m!==null?e.jsx(Ut,{ToolTipTitle:m||"Nothing to unstake, Stake First",ButtonTitle:"Unstake PUSH"}):e.jsx(Qe,{border:`1px solid ${f.activeButtonText}`,background:"transparent",color:f.activeButtonText,cursor:"pointer",onClick:Y,style:{margin:"0px 10px 0px 0px"},children:r?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:f.activeButtonText,title:"Unstaking",titleColor:f.activeButtonText}):"Unstake $PUSH"}),(n==null?void 0:n.availableRewards)===0?e.jsx(q,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,left:"40px",ToolTipWidth:"10rem",children:e.jsx(Qe,{border:"none",background:f.disableButtonBg,cursor:"default",color:f.disabledButtonText,children:d?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Claim Rewards"})}):e.jsx(Qe,{border:`1px solid ${f.activeButtonText}`,background:"transparent",color:f.activeButtonText,cursor:"pointer",onClick:E,children:d?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:f.activeButtonText,title:"Claiming",titleColor:f.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(De,{width:"100%",children:[e.jsx(g,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(g,{height:"49px",width:"100%"})]})})]})},Ut=n=>{const t=Ve();return e.jsx(q,{error:!0,ToolTipTitle:n.ToolTipTitle,ToolTipWidth:"16rem",margin:"0 10px 0 0",bottom:"-30px",children:e.jsx(Qe,{border:"none",background:t.disableButtonBg,cursor:"default",color:t.disabledButtonText,children:n.ButtonTitle})})},Hn=()=>{const[n,t]=u.useState(!1),a=()=>t(!1),o=u.useRef(null);return Wt(o,()=>a()),e.jsxs(Wn,{ref:o,children:[e.jsx(le,{onClick:()=>t(!n),src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}}),n&&e.jsx(Gn,{id:"channel",children:e.jsx(Tt,{title:"",body:"Push Fee Pool APR distributes yield farming rewards + fee earned by protocol. More Info "})})]})},Wn=p.div`
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
`,Gn=p.div`
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
`,Jn=p(ze)`
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
`,Yn=p($)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`,Kn=p.div`
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
`,It=p.p`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`,qn=p(j)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,Zn=p.div`
  width: 1px;
  height: 100%;
  background: ${n=>n.theme.stakingBorder};
`,qe=p.div`
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
`,Xn=p($)`
  color: ${n=>n.theme.stakingSecondaryText};
`,Nt=p(Gt)`
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
`,Ze=p(Te)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,Xe=p($)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;p(j)`
  align-self: end;
  margin: 12px 13px 24px 0px;
  letter-spacing: normal;
  color: ${n=>n.theme.modalDescriptionTextColor};
`;const Qn=p.div`
  display: flex;
  width: 100%;
  margin: 15px 0px 0px 0px;
`,ea=p(fe)`
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
`;const ta=({setActiveTab:n})=>{const{provider:t,account:a,chainId:o}=ke(),[s,i]=u.useState(),[r,l]=u.useState(),[d,h]=u.useState(),[m,x]=u.useState(),[M,N]=u.useState(),[U,I]=u.useState(null),[F,Q]=u.useState(null),[se,J]=u.useState(null),[te,V]=u.useState(null),[L,f]=u.useState(null),v=t==null?void 0:t.getSigner(a),T=u.useCallback(async()=>{const z=await Ee.getInstance().getPoolStats(t);I({...z})},[r,s,m,d,M,t]),E=u.useCallback(async()=>{const z=await Ee.getInstance().getPoolStats(t),ne=await Ee.getInstance().getLPPoolStats(z);Q({...ne})},[r,s,m,d,M,t]),ee=u.useCallback(async()=>{},[]),Y=u.useCallback(async()=>{const z=await Ee.getInstance().getUserDataLP();J({...z})},[r,s,m,d,M]),we=u.useCallback(async()=>{const[z,ne]=await Ee.getInstance().getUserDataPUSH(t);f({...z}),V({...ne})},[r,s,m,d,M,t]);return u.useEffect(()=>{if(o!==X.coreContractChain&&o!==X.mainnetCoreContractChain)return;Q(null),J(null),f(null),V(null);let z=new P(c.stakingV2,A.stakingV2,v),ne=new P(c.pushToken,A.pushToken,v),O=new P(c.pushCoreV2,A.pushCoreV2,v),S=new P(c.yieldFarmLP,A.yieldFarming,v),b=new P(c.uniswapV2Router02,A.uniswapV2Router02,v);if(l(z),i(ne),x(O),h(S),N(b),v&&a){var w=t==null?void 0:t.getSigner(a);let B=new P(c.stakingV2,A.stakingV2,w),C=new P(c.pushToken,A.pushToken,w),k=new P(c.pushCoreV2,A.pushCoreV2,w),_=new P(c.yieldFarmLP,A.yieldFarming,w),K=new P(c.uniswapV2Router02,A.uniswapV2Router02,w);l(B),i(C),x(k),h(_),N(K)}Ee.getInstance().init(a,z,ne,O,S,b),T(),Y(),E(),we()},[a,o]),e.jsxs(e.Fragment,{children:[e.jsx(jt,{logo:"announcement",title:"New V2 Pools are now Live! Stake or migrate now.",body:"Users who were part of the previous Push staking program, need to migrate to new pools to continue earning rewards. Click",setActiveTab:n}),e.jsx(wn,{getLpPoolStats:E,poolStats:U,setPoolStats:I}),e.jsx(mn,{poolStats:U}),e.jsxs(na,{children:[e.jsx($n,{userDataPush:te,getUserDataPush:we,PUSHPoolstats:L,getPUSHPoolStats:ee}),e.jsx(Fn,{lpPoolStats:F,userDataLP:se,getLpPoolStats:E,getUserDataLP:Y})]})]})},na=p(j)`
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`,aa=({onClose:n})=>{const{chainId:t,switchChain:a}=ke(),o=()=>{const s=X.allowedNetworks[0];t!==1&&t!==11155111&&(console.info("Current Chain ID ",t),console.info("Chain Id to pass",s),a(X.coreContractChain))};return u.useEffect(()=>{(t===X.coreContractChain||t===X.mainnetCoreContractChain)&&n()},[t]),e.jsxs(ia,{children:[e.jsx(mt,{style:{cursor:"pointer",alignSelf:"end"}}),e.jsxs(sa,{children:[e.jsx(oa,{children:"Unsupported Network"}),e.jsxs(ra,{children:["Push Yield Farm V2 is only live on Ethereum Chain.",e.jsx("br",{}),"Kindly switch to Ethereum"]})]}),e.jsx(pa,{children:e.jsx(la,{onClick:o,children:"Switch Network"})})]})},ia=p(R)`
  padding: 32px 36px;
  width: 445px;
`,sa=p(R)`
  font-family: FK Grotesk Neu;
  font-style: normal;
  line-height: 141%; /* 39.48px */
  letter-spacing: normal;
`,oa=p.div`
  font-size: 28px;
  font-weight: 500;
  color: ${n=>n.theme.stakingSecondaryText};
`,ra=p.div`
  color: ${n=>n.theme.activeButtonText};
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 24px 0;
`,pa=p.div``,la=p(fe)`
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
`;X.coreContractChain;let Dt,Lt,zt,gt,Bt,Vt;Dt=()=>{fa.pageview("/yield");const[n,t]=u.useState(0),[a,o]=u.useState(!1),{account:s,chainId:i,switchChain:r}=ke(),l=()=>{const x=X.allowedNetworks[0];i!==1&&i!==5&&r(x)};u.useEffect(()=>{i!==1&&i!==11155111&&(h(),l())},[i]);const{isModalOpen:d,showModal:h,ModalComponent:m}=tt();return e.jsxs(Lt,{children:[e.jsx(m,{InnerComponent:aa,onConfirm:()=>{},modalPadding:"0px",modalPosition:nt.ON_PARENT}),e.jsxs(zt,{children:[e.jsx(gt,{isActive:!n,onClick:()=>{o(!0),t(0)},children:"Yield Farming V2"}),e.jsxs(gt,{isActive:n,onClick:()=>{o(!1),t(1)},children:["Yield Farming V1 ",e.jsx(Bt,{children:"Deprecated"})]})]}),n===0&&e.jsx(ta,{setActiveTab:t}),n===1&&e.jsx(xn,{setActiveTab:t})]})},Lt=p(ze)`
	align-items: stretch;
	align-self: center;
  flex: 1;
	background: ${n=>n.theme.default.bg};
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
    100% - ${it.MINI_MODULES.DESKTOP.RIGHT} - ${it.MINI_MODULES.DESKTOP.LEFT} -
      ${xe.ADJUSTMENTS.PADDING.BIG} - ${xe.ADJUSTMENTS.PADDING.BIG}
  );
  gap: 16px;
  padding: 24px;

  margin: ${xe.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  
  @media ${at.laptop} {
    margin: ${xe.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${at.tablet} {
    width: calc(
      100% - ${it.MINI_MODULES.TABLET.RIGHT} - ${it.MINI_MODULES.TABLET.LEFT} -
        ${xe.ADJUSTMENTS.PADDING.DEFAULT} - ${xe.ADJUSTMENTS.PADDING.DEFAULT}
    );
    margin: ${xe.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding:16px;
  }

  @media ${at.mobileL} {
    margin: ${xe.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    border: ${xe.ADJUSTMENTS.RADIUS.LARGE};
    width: 100%;
    padding: ${xe.ADJUSTMENTS.PADDING.DEFAULT};
`,zt=p(j)`
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
`,Bt=p(Te)`
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
`,Kt=()=>e.jsx(Vt,{children:e.jsx(Dt,{})}),Vt=p(ze)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{ba as __tla,Kt as default};
