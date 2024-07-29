var aa=Object.defineProperty;var ia=(je,be,Me)=>be in je?aa(je,be,{enumerable:!0,configurable:!0,writable:!0,value:Me}):je[be]=Me;var N=(je,be,Me)=>ia(je,typeof be!="symbol"?be+"":be,Me);import{cJ as y,bg as d,be as Q,a_ as c,bM as v,dm as $,aZ as e,e0 as sa,dV as Bt,a$ as De,bO as Te,eI as oa,cW as S,ci as mt,eJ as ke,ba as Pe,b8 as u,cU as Ve,b1 as qe,dU as Re,eK as m,ce as re,bK as Xe,b$ as ce,c0 as ue,bf as k,bh as A,ds as he,cX as H,cV as Ot,bb as Ze,eL as ra,cI as _t,bi as la,c1 as pa,d9 as da,ch as Wt,eM as gt,eN as ca,bT as le,bj as ua,cL as $t,cj as Qe,ck as et,cn as Ht,bH as xe,co as Gt,bJ as tt,bI as nt,bL as ha,__tla as xa}from"./index-BVCZN7ZR.js";let Jt,ma=Promise.all([(()=>{try{return xa}catch{}})()]).then(async()=>{const je=y.from(1).mul(y.from(10).pow(y.from(18))),be=3e4,Me=35e3,yt=n=>n.mul(y.from(10).pow(y.from(18))),Fe=n=>n.div(y.from(10).pow(y.from(10))).toNumber()/1e8,Ae=class Ae{constructor(){N(this,"state",{account:null,signer:null,staking:null,yieldFarmingPUSH:null,yieldFarmingLP:null,rewardForCurrentEpochPush:null,rewardForCurrentEpochLP:null,genesisEpochAmountPUSH:be,deprecationPerEpochPUSH:100,genesisEpochAmountLP:Me,deprecationPerEpochLP:100,uniswapV2Router02:null});N(this,"init",(t,a,o,s,i,r)=>{this.state.account=t,this.state.pushToken=a,this.state.staking=o,this.state.yieldFarmingPUSH=s,this.state.yieldFarmingLP=i,this.state.uniswapV2Router02=r});N(this,"getPoolStats",()=>new Promise(async(t,a)=>{const o=await this.state.yieldFarmingPUSH.getCurrentEpoch(),s=await this.state.uniswapV2Router02.getAmountsOut(je.toString(),[d.pushToken,d.WETHAddress,d.USDTAddress]);let i;Q.coreContractChain===42||Q.coreContractChain===5?i=s[s.length-1].div(1e6).toNumber():i=s[s.length-1].toNumber()/1e6,console.debug("Push PRice",i);const r=Fe(await this.state.pushToken.balanceOf(d.uniV2LPToken)),l=Fe(await this.state.pushToken.attach(d.WETHAddress).balanceOf(d.uniV2LPToken)),p=await this.state.uniswapV2Router02.getAmountsOut(je.toString(),[d.WETHAddress,d.USDTAddress]);let h;Q.coreContractChain===42||Q.coreContractChain===5?h=Fe(p[p.length-1]):h=p[p.length-1].toNumber()/1e6,console.debug("Eth Price",h);const g=Fe(await this.state.pushToken.attach(d.uniV2LPToken).totalSupply()),x=(r*i+l*h)/g/i;t({currentEpoch:o,lpToPushRatio:x})}));N(this,"getPUSHPoolStats",async()=>new Promise(async(t,a)=>{const o=this.state.yieldFarmingPUSH;let s=await o.NR_OF_EPOCHS();const i=await o.getCurrentEpoch();s=s.toString()>i.toString()?i:s;const r=yt(y.from(this.state.genesisEpochAmountPUSH)),l=yt(y.from(this.state.deprecationPerEpochPUSH)),p=this.calcTotalAmountPerEpoch(r,s,l);this.state.rewardForCurrentEpochPush=p;const h=await o.getPoolSize(i.add(1));t({currentEpochPUSH:i,totalEpochPUSH:s,poolBalance:h})}));N(this,"getLPPoolStats",async t=>new Promise(async(a,o)=>{const s=this.state.yieldFarmingLP;let i=await s.NR_OF_EPOCHS();const r=await s.getCurrentEpoch();i=i.toString()>r.toString()?r:i;const l=await s.getPoolSize(r.add(1));a({currentEpochPUSH:r,totalEpochPUSH:i,poolBalance:l})}));N(this,"getUserData",async t=>new Promise(async(a,o)=>{if(this.state.account){const s=await t.getCurrentEpoch().then(M=>y.from(Math.min(M,100))),i=await t.getCurrentEpoch(),r=await t.getEpochStake(this.state.account,i.add(1)),l=(await t.lastEpochIdHarvested(this.state.account)).toNumber();let p=this.getAccumulatedReward(s,t),h=this.getTotalAvailableRewards(l,s,t),[g,x]=await Promise.all([p,h]);a({epochStakeNext:r,totalAccumulatedReward:g,totalAvailableReward:x})}}));N(this,"getTotalAvailableRewards",async(t,a,o)=>{let s=[];for(var i=t+1;i<=a.toNumber();i++){const l=this.calculateUserEpochReward(i,o);s.push(l)}let r=(await Promise.all(s)).reduce((l,p)=>l+p,0);return r=r.toFixed(2),r});N(this,"getAccumulatedReward",async(t,a)=>{let o=[];for(var s=0;s<=t.toNumber();s++){const r=this.calculateUserEpochReward(s,a);o.push(r)}let i=(await Promise.all(o)).reduce((r,l)=>r+l,0);return i=i.toFixed(2),i});N(this,"calcTotalAmountPerEpoch",(t,a,o)=>t.sub(a.mul(o)));N(this,"calculateUserEpochReward",async(t,a)=>{const o=Fe(await a.getEpochStake(this.state.account,t)),s=Fe(await a.getPoolSize(t));let i=0;if(s>0)if(a.address==d.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,p=r-l*t;i=o/s*p}else{const r=this.state.genesisEpochAmountPUSH,l=this.state.deprecationPerEpochPUSH,p=r-l*t;i=o/s*p}return i})}static getInstance(){return Ae.instance||(Ae.instance=new Ae),Ae.instance}};N(Ae,"instance",null);let Ee=Ae;const q=n=>e.jsx(sa,{wrapperProps:{width:"100%",maxWidth:"none",minWidth:"auto",display:"flex",flex:"1",margin:n.margin?n.margin:"0"},placementProps:{background:"none",bottom:n.bottom?n.bottom:"25px",left:n.error?"40px":"0px"},tooltipContent:n.error?e.jsx(Yt,{title:n.ToolTipTitle,width:n.ToolTipWidth}):e.jsx(Tt,{title:n.ToolTipTitle,body:n.ToolTipBody}),children:n.children}),Yt=n=>e.jsx(v,{width:n.width,background:"#131313",justifyContent:"flex-start",border:"1px solid rgba(173, 176, 190, 0.2)",alignItems:"flex-start",padding:"0.75rem 0.75rem 0.75rem 1rem",boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.05)",color:"#FFF",borderRadius:"2px 12px 12px 12px",children:e.jsx($,{color:"inherit",children:n.title})}),Tt=({title:n,body:t})=>e.jsxs(Kt,{children:[e.jsx(qt,{children:n}),e.jsxs(Xt,{children:[t,"  "," ",t.includes("Push Fee Pool APR")&&e.jsx(Bt,{cursor:"pointer",href:"https://medium.com/push-protocol/new-push-yield-farming-rewards-full-details-4a9ff473226d",target:"_blank",children:"here"})]})]}),Kt=c(v)`
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


`,qt=c($)`
  color: ${n=>n.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`,Xt=c($)`
  color: ${n=>n.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
  text-align:left;
`,me="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15284_45077)'%3e%3cpath%20d='M8.5%2014.5C11.8137%2014.5%2014.5%2011.8137%2014.5%208.5C14.5%205.18629%2011.8137%202.5%208.5%202.5C5.18629%202.5%202.5%205.18629%202.5%208.5C2.5%2011.8137%205.18629%2014.5%208.5%2014.5Z'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%208C8.13261%208%208.25979%208.05268%208.35355%208.14645C8.44732%208.24021%208.5%208.36739%208.5%208.5V11C8.5%2011.1326%208.55268%2011.2598%208.64645%2011.3536C8.74021%2011.4473%208.86739%2011.5%209%2011.5'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.25%206.5C8.66421%206.5%209%206.16421%209%205.75C9%205.33579%208.66421%205%208.25%205C7.83579%205%207.5%205.33579%207.5%205.75C7.5%206.16421%207.83579%206.5%208.25%206.5Z'%20fill='%23797D8F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15284_45077'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",J=n=>n.div(y.from(10).pow(18)).toString(),X=n=>{var t;return(t=n==null?void 0:n.toString())==null?void 0:t.replace(/\B(?=(\d{3})+(?!\d))/g,",")},Zt=function(n,t=null){return y.from(n)},Qt=function(n){return n.div(Zt(10).pow(18))},wt=({poolName:n,userData:t,PoolStats:a,poolAddress:o,getUserData:s,tokenAddress:i,setActiveTab:r})=>{const{account:l,provider:p,wallet:h,isWalletConnected:g,connect:x}=Pe(),[M,F]=u.useState(!1),[L,O]=u.useState(!1),[Y,_]=u.useState(!1),[ee,U]=u.useState(null),[ie,G]=u.useState(null),[W,b]=u.useState(null),[D,I]=u.useState(0),w=Ve(),R=qe(),K=async()=>{if(!g){x();return}if(!L){if((t==null?void 0:t.totalAvailableReward)==0){b("No Rewards to Claim"),O(!1);return}O(!0);var f=p.getSigner(l);new k(o,A.yieldFarming,f).massHarvest().then(async T=>{w.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await p.waitForTransaction(T.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:P=>e.jsx(he,{size:P,color:"green"})}),s(),O(!1)}catch(P){w.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${P.name}+ ")`,toastType:"ERROR",getToastIcon:C=>e.jsx(H,{size:C,color:"red"})}),O(!1)}}).catch(T=>{w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:P=>e.jsx(H,{size:P,color:"red"})}),O(!1)})}},we=async()=>{if(!g){x();return}if(M)return;F(!0);const f=J(t.epochStakeNext);if(f==0){G("Nothing to unstake, Stake Now in new reward program."),F(!1);return}var T=p.getSigner(l);let P=new k(d.staking,A.staking,T);await P.balanceOf(l,i),P.withdraw(i,y.from(f).mul(y.from(10).pow(18))).then(async C=>{w.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await p.waitForTransaction(C.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:E=>e.jsx(he,{size:E,color:"green"})}),F(!1),s()}catch(E){console.error("Error",E),w.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${E.name}+ ")`,toastType:"ERROR",getToastIcon:V=>e.jsx(H,{size:V,color:"red"})}),F(!1)}}).catch(C=>{w.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Cancelled! ${C.message}`,toastType:"ERROR",getToastIcon:E=>e.jsx(H,{size:E,color:"red"})}),F(!1)})},z=async()=>{if(!g){x();return}if(Y)return;let f=3;const T=J(t.epochStakeNext);if(T==0){w.showMessageToast({toastTitle:"Error",toastMessage:"Nothing to Withdraw!",toastType:"ERROR",getToastIcon:te=>e.jsx(H,{size:te,color:"red"})}),_(!1),U(null);return}var P=p.getSigner(l);let C=new k(d.staking,A.staking,P);const E=i===d.pushToken?d.pushCoreV2:d.stakingV2;var V=new k(i,A.pushToken,P);let B=await V.allowance(l,E),se=J(B);parseInt(se)>=parseInt(T)?(f=2,I(50)):(f=3,I(33)),_(!0),U(`Withdrawing 1/${f}`);let oe;oe=C.withdraw(i,y.from(T).mul(y.from(10).pow(18))),oe.then(async te=>{if(w.showLoaderToast({loaderMessage:"Withdrawing! Please Wait..."}),await p.waitForTransaction(te.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Successfully withdrawn!",toastType:"SUCCESS",getToastIcon:ye=>e.jsx(he,{size:ye,color:"green"})}),i===d.pushToken){var Z=new k(i,A.pushToken,P);let ye=await Z.allowance(l,d.pushCoreV2),pe=J(ye);parseInt(pe)>=parseInt(T)?fe(te,T,f):(te=Z.approve(d.pushCoreV2,y.from(T).mul(y.from(10).pow(18))),U(`Approving 2/${f}`),I(66),te.then(async de=>{w.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await p.waitForTransaction(de.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:Se=>e.jsx(he,{size:Se,color:"green"})}),fe(de,T,f)}).catch(de=>{console.error("Error in approving 2",de),w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:Se=>e.jsx(H,{size:Se,color:"red"})}),_(!1),U(null),s(),I(0)}))}else{var Z=new k(i,A.pushToken,P);let pe=await Z.allowance(l,d.stakingV2),de=J(pe);parseInt(de)>=parseInt(T)?ne(te,T,f):(te=Z.approve(d.stakingV2,y.from(T).mul(y.from(10).pow(18))),U(`Approving 2/${f}`),I(66),te.then(async Se=>{w.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await p.waitForTransaction(Se.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:xt=>e.jsx(he,{size:xt,color:"green"})}),ne(Se,T,f)}).catch(Se=>{console.error("Error in approving",Se),w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:xt=>e.jsx(H,{size:xt,color:"red"})}),_(!1),U(null),s(),I(0)}))}}).catch(te=>{console.error("Error in withdrawing: ",te),w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Withdraw!",toastType:"ERROR",getToastIcon:Z=>e.jsx(H,{size:Z,color:"red"})}),_(!1),U(null),I(0)})},ne=async(f,T,P)=>{if(!g){x();return}var C=p.getSigner(l),E=new k(d.stakingV2,A.stakingV2,C);U(`Staking ${P}/${P}`),I(100),f=E.deposit(i,y.from(T).mul(y.from(10).pow(18))),f.then(async V=>{w.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await p.waitForTransaction(V.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!Successfully Deposited the UNI-V2 Token to V2 ",toastType:"SUCCESS",getToastIcon:B=>e.jsx(he,{size:B,color:"green"})}),_(!1),s(),U(null),r(0)}).catch(V=>{console.error("Error in depositing: ",V),w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit the Amount",toastType:"ERROR",getToastIcon:B=>e.jsx(H,{size:B,color:"red"})}),_(!1),s(),U(null),I(0)})},fe=async(f,T,P)=>{if(!g){x();return}var C=p.getSigner(l);let E=new k(d.pushCoreV2,A.pushCoreV2,C);U(`Staking ${P}/${P}`),I(100),f=E.stake(y.from(T).mul(y.from(10).pow(18))),f.then(async V=>{w.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await p.waitForTransaction(V.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Successfully Deposited the Push Token to V2 ",toastType:"SUCCESS",getToastIcon:B=>e.jsx(he,{size:B,color:"green"})}),_(!1),s(),U(null),r(0)}).catch(V=>{console.error("Error in depositing: ",V),w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit Push Token",toastType:"ERROR",getToastIcon:B=>e.jsx(H,{size:B,color:"red"})}),_(!1),s(),U(null),I(0)})};u.useEffect(()=>{b(null),G(null)},[l]);const j=Re(600);return e.jsxs(en,{margin:n==="UNI-V2"?" 10px 0 10px 10px ":"  10px 10px 10px 0",children:[e.jsx(v,{margin:"0px 0px 20px 0",children:a?e.jsxs(e.Fragment,{children:[e.jsxs(tn,{children:[n==="UNI-V2"?"Uniswap V2 Staking Pool":"PUSH Staking Pool ",e.jsx(nn,{children:"Deprecated"})]}),e.jsxs(at,{children:["Current APR"," ",e.jsx(Te,{color:"#D53A94",fontWeight:"600",children:"0%"})]})]}):e.jsxs(Ie,{padding:"15px 15px 0 15px",children:[e.jsx(m,{height:"15px",width:"234px",margin:"0 0 10px 0"}),e.jsx(m,{height:"15px",width:"112px"})]})}),e.jsxs(v,{children:[e.jsxs(on,{border:`1px solid ${R.stakingBorder}`,borderRadius:"16px",children:[e.jsx(v,{margin:j?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:j?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(at,{children:"Current Reward"}),e.jsx($,{fontSize:j?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:"0 PUSH"})]}):e.jsxs(Ie,{padding:j?"0px":"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:j?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(m,{height:"12px",width:j?"65px":"100px}"})]})}),e.jsx(an,{width:"10px",height:"100%"}),e.jsx(v,{margin:j?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:j?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(at,{children:"Total Staked"}),e.jsxs(sn,{fontSize:j?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[X(J(a==null?void 0:a.poolBalance))," ",n=="UNI-V2"?"UNI-V2":"PUSH"]})]}):e.jsxs(Ie,{padding:j?"0px":"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:j?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(m,{height:"12px",width:j?"65px":"100px}"})]})})]}),e.jsx(S,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:a?e.jsxs(e.Fragment,{children:[e.jsx(ft,{padding:"0px 5px 0px 0px",children:"Current Epoch"}),e.jsx(ft,{margin:"0 0 0 5px",children:"100 / 100"})]}):e.jsx(Ie,{padding:"6px 0px 0 15px",children:e.jsx(m,{height:"17px",width:"124px"})})}),e.jsx(rn,{children:t?e.jsxs(v,{children:[e.jsxs(S,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Be,{children:["User Deposit",e.jsx(Oe,{children:e.jsx(q,{ToolTipTitle:"User Deposited",ToolTipBody:`Amount of ${n} Token User Staked`,children:e.jsx(re,{src:me,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(_e,{children:[" ",J(t==null?void 0:t.epochStakeNext)," ",n=="UNI-V2"?"UNI-V2":"PUSH"]})]}),e.jsxs(S,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Be,{children:["Rewards Claimed",e.jsx(Oe,{children:e.jsx(q,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(re,{src:me,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(_e,{children:[" ",X(((t==null?void 0:t.totalAccumulatedReward)-(t==null?void 0:t.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(S,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Be,{children:["Current Epoch Reward",e.jsx(Oe,{children:e.jsx(q,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(re,{src:me,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsx(_e,{children:"0 PUSH"})]}),e.jsxs(S,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Be,{children:["Available for Claiming",e.jsx(Oe,{children:e.jsx(q,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(re,{src:me,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(_e,{children:[X(t==null?void 0:t.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(ke,{padding:"16px 15px 16px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(S,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(S,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(S,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(S,{justifyContent:"space-between",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]})]})})]}),e.jsx(ln,{padding:j?"0px ":"0px 14px",margin:"24px 0px 0px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(St,{children:J(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(q,{error:!0,ToolTipTitle:"Nothing to Withdraw, so you cannot Migrate.",ToolTipWidth:"16rem",bottom:"-50px",margin:"0 0 15px 0",children:e.jsx(Ue,{border:"none",cursor:"default",background:R.disableButtonBg,color:R.disabledButtonText,children:e.jsx(bt,{children:!Y&&ee==null&&e.jsxs(Xe,{color:R.disabledButtonText,weight:"400",cursor:"default",children:["Migrate to ",n==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]})})})}):e.jsxs(pn,{onClick:z,children:[e.jsx(dn,{style:{width:`${D}%`}}),e.jsxs(bt,{children:[!Y&&ee==null&&e.jsxs(Xe,{color:"#FFF",weight:"400",cursor:"pointer",children:["Migrate to ",n==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]}),Y&&ee!=null&&e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#FFF",title:ee,titleColor:"#FFF"})]})]})}),e.jsxs(St,{children:[J(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(q,{error:!0,ToolTipTitle:ie||"Nothing to unstake, Stake First",ToolTipWidth:"16rem",margin:"0 10px 0 0",bottom:"-30px",children:e.jsx(Ue,{border:"none",cursor:"default",background:R.disableButtonBg,color:R.disabledButtonText,children:M?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:R.activeButtonText,title:"Claiming",titleColor:R.activeButtonText}):` Unstake ${n}`})}):e.jsx(Ue,{border:`1px solid ${R.activeButtonText}`,background:"transparent",color:R.activeButtonText,cursor:"pointer",margin:"0 10px 0 0",onClick:we,children:M?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:R.activeButtonText,title:"Unstaking",titleColor:R.activeButtonText}):` Unstake ${n}`}),(t==null?void 0:t.totalAvailableReward)==="0.00"?e.jsx(q,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,ToolTipWidth:"10rem",children:e.jsx(Ue,{border:"none",cursor:"default",background:R.disableButtonBg,color:R.disabledButtonText,children:L?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:R.activeButtonText,title:"Claiming",titleColor:R.activeButtonText}):" Claim Rewards"})}):e.jsx(Ue,{border:`1px solid ${R.activeButtonText}`,background:"transparent",color:R.activeButtonText,cursor:"pointer",onClick:K,children:L?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:R.activeButtonText,title:"Claiming",titleColor:R.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Ie,{width:"100%",children:[e.jsx(m,{height:"49px",width:"100%",margin:"0 0 11px 0"}),e.jsx(m,{height:"49px",width:"100%"})]})})]})},en=c(De)`
  border: 1px solid ${n=>n.theme.stakingBorder};
  border-radius: 24px;
  padding: 24px 19px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  // min-height: 587px;
  color: ${n=>n.theme.stakingPrimaryText};
`,tn=c($)`
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
`,nn=c(Te)`
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
`,at=c.p`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,an=c.div`
  width: 1px;
  height: 100%;
  background: ${n=>n.theme.stakingBorder};
`,Be=c.div`
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
`,sn=c($)`
  color: ${n=>n.theme.stakingSecondaryText};
`,ft=c(oa)`
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
`,Oe=c(Te)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,on=c(S)`
  max-height: 108px;
  min-height: 108px;
  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,_e=c($)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,rn=c(v)`
  min-height: 150px;
`,ln=c(v)`
  // min-height:132px;
`,St=c.div`
  display: flex;
  width: 100%;
  // margin:15px 0px 0px 0px;
`;c(mt)`
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
`;const pn=c(mt)`
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
`,dn=c.div`
  min-height: 37px;
  background-color: rgb(183, 46, 126);
  transition: width 0.5s ease 0s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,bt=c.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #eee;
`,Ue=c(mt)`
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
`,Ie=c(ke)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,jt=({logo:n,title:t,body:a,setActiveTab:o})=>{const s=Re(600);return e.jsxs(S,{style:{color:n==="announcement"?"white":"#333"},justifyContent:"stretch",padding:s?"12px":"16px",background:n==="announcement"?"linear-gradient(90deg, #121315 -2.55%, #2A2A39 32.62%, #8E317A 68.34%, #121315 102.97%)":"#FFF7DA",borderRadius:"16px",children:[e.jsx(re,{width:n==="announcement"?"60px":"32px",height:n==="announcement"?"60px":"32px",src:Ot(`svg/${n}.svg`),alt:"Announcement Logo"}),e.jsxs(v,{margin:n==="announcement"?"0 0 0 16px":"0 0 0 13px",justifyContent:"center",alignItems:"flex-start",gap:n==="announcement"?"4px":"0px",children:[e.jsx($,{color:"inherit",fontSize:s?"20px":"24px",textAlign:"left",fontWeight:500,children:t}),e.jsxs($,{color:"inherit",fontSize:s?"12px":"16px",textAlign:"left",fontWeight:500,children:[a," ",t.includes("New V2")&&e.jsxs(e.Fragment,{children:[e.jsx(cn,{onClick:()=>o(1),children:"here"})," to migrate."]})]})]})]})},cn=c(Bt)`
  cursor: pointer;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;Q.coreContractChain;const un=({setActiveTab:n})=>{const{account:t,provider:a}=Pe(),[o,s]=u.useState(null),[i,r]=u.useState(null),[l,p]=u.useState(null),[h,g]=u.useState(null),[x,M]=u.useState(null),[F,L]=u.useState(null),[O,Y]=u.useState(null),[_,ee]=u.useState(null),[U,ie]=u.useState(null),[G,W]=u.useState(null),b=a==null?void 0:a.getSigner(t),D=u.useCallback(async()=>{const z=await Ee.getInstance().getPoolStats();L({...z})},[o,i,l,h,x]),I=u.useCallback(async()=>{const z=await Ee.getInstance().getPUSHPoolStats();Y({...z})},[o,i,l,h,x]),w=u.useCallback(async z=>{const ne=await Ee.getInstance().getLPPoolStats(z);ee({...ne})},[o,i,l,h,x]),R=u.useCallback(async()=>{const z=await Ee.getInstance().getUserData(h);ie({...z})},[h]),K=u.useCallback(async()=>{const z=await Ee.getInstance().getUserData(l);W({...z})},[l]);u.useEffect(()=>{let z=new k(d.pushToken,A.pushToken,b),ne=new k(d.staking,A.staking,b),fe=new k(d.depYieldFarmPUSH,A.yieldFarming,b),j=new k(d.depYieldFarmLP,A.yieldFarming,b),f=new k(d.uniswapV2Router02,A.uniswapV2Router02,b);if(s(z),r(ne),g(fe),p(j),M(f),b&&t){var T=a.getSigner(t);let P=new k(d.pushToken,A.pushToken,T),C=new k(d.staking,A.staking,T),E=new k(d.depYieldFarmPUSH,A.yieldFarming,T),V=new k(d.depYieldFarmLP,A.yieldFarming,T),B=new k(d.uniswapV2Router02,A.uniswapV2Router02,T);s(P),r(C),g(E),p(V),M(B)}},[t]),u.useEffect(()=>{o!=null&&i!=null&&h!=null&&(Ee.getInstance().init(t,o,i,h,l,x),D())},[D]),u.useEffect(()=>{F&&we(F)},[F]);const we=async z=>{I(),w(z),R(),K()};return e.jsxs(e.Fragment,{children:[e.jsx(jt,{logo:"WarningCircle",title:"This reward program (V1) has ended.",body:"To continue earning rewards please migrate to new pools.",setActiveTab:n}),e.jsxs(hn,{children:[e.jsx(wt,{poolName:"PUSH",userData:U,PoolStats:O,poolAddress:d.depYieldFarmPUSH,getUserData:R,getPoolStats:I,tokenAddress:d.pushToken,setActiveTab:n}),e.jsx(wt,{poolName:"UNI-V2",userData:G,PoolStats:_,poolAddress:d.depYieldFarmLP,getUserData:K,getPoolStats:w,tokenAddress:d.uniV2LPToken,setActiveTab:n})]})]})},hn=c(S)`
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
`,xn=({poolStats:n})=>{function t(o){return o==null?void 0:o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const a=Re(600);return e.jsx(mn,{justifyContent:"stretch",children:n?e.jsxs(e.Fragment,{children:[e.jsx(Et,{fontSize:a?"16px":"18px",textAlign:"left",fontWeight:600,children:"Push Price"}),e.jsxs(S,{gap:"5px",justifyContent:"flex-end",children:[e.jsxs(Et,{fontSize:a?"18px ":"24px",textAlign:"left",fontWeight:600,children:["$",t(n==null?void 0:n.pushPrice.toFixed(2))]}),e.jsx(re,{width:"25px",height:a?"20px":"27px",src:Ot("svg/uniswapLogo.svg"),alt:"Uniswap Logo"})]})]}):e.jsxs(gn,{children:[e.jsx(m,{height:"12px",width:"135px",margin:"10px 0 10px 0"}),e.jsx(m,{height:"12px",width:"135px",margin:"10px 0 10px 0"})]})})},mn=c(S)`
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
`,Et=c($)`
  color: ${n=>n.theme.stakingPrimaryText};
`,gn=c(ke)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
  flex-direction: row;
  justify-content: inherit;
  flex: 1;
`,yn=({getLpPoolStats:n,poolStats:t,setPoolStats:a})=>{const[o,s]=Ze.useState(""),[i,r]=Ze.useState(),l=()=>{const h=t.epochEndTime,g=new Date().getTime()+h*1e3;r(g)};Ze.useEffect(()=>{t&&l()},[t]);const p=()=>{if(t!=null&&t.epochEndTimestamp){t.epochEndTimestamp.toNumber();const h=new Date().getTime(),g=i-h;g<0&&(a(null),n());const x=Math.floor(g/(1e3*60*60*24)),M=Math.floor(g%(1e3*60*60*24)/(1e3*60*60)),F=Math.floor(g%(1e3*60*60)/(1e3*60)),L=Math.floor(g%(1e3*60)/1e3);s(`${x}D ${M}H ${F}M ${L}S`)}};return Ze.useEffect(()=>{const h=setTimeout(()=>{p()},1e3);return()=>clearTimeout(h)}),e.jsxs(Tn,{children:[e.jsxs(st,{alignItems:"baseline",justifyContent:"center",background:"linear-gradient(0deg, #7ADDB3, #7ADDB3), #FFFFFF",children:[e.jsx(ot,{background:"radial-gradient(70% 90% at 40% 16.25%, #7CDCB4 2.6%, #7ADDB3 53.65%, #E888F8 85.42%, #F99DEA 100%)"}),t?e.jsx(e.Fragment,{children:e.jsxs(dt,{children:[e.jsx(rt,{children:"Total Value Locked"}),e.jsx(lt,{children:`$ ${X(t==null?void 0:t.totalValueLocked.toFixed(2))}`})]})}):e.jsx(it,{})]}),e.jsxs(st,{alignItems:"baseline",justifyContent:"center",background:"#F58DF8",children:[e.jsx(ot,{background:"radial-gradient(70% 90% at 40% 16.25%, #F58DF8 2.6%, #F47EF8 53.65%, #A17DEF 85.42%, #AE68F4 100%)"}),t?e.jsx(e.Fragment,{children:e.jsxs(dt,{children:[e.jsx(rt,{children:"Push Rewards Given"}),e.jsxs(pt,{justifyContent:"end",children:[e.jsx(lt,{children:X(Math.min(J(t==null?void 0:t.pushRewardsDistributed),J(t==null?void 0:t.totalDistributedAmount)))}),e.jsxs(Te,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:["out of ",X(J(t==null?void 0:t.totalDistributedAmount))]})]})]})}):e.jsx(it,{})]}),e.jsxs(st,{alignItems:"baseline",justifyContent:"center",background:"#A17DEF",children:[e.jsx(ot,{background:"radial-gradient(70% 90% at 40% 16.25%, #A17DEF 2.6%, #9770ED 53.65%, #DF7EEF 85.42%, #F488E3 100%)"}),o?e.jsx(e.Fragment,{children:e.jsxs(dt,{children:[e.jsx(rt,{children:"Time Left"}),e.jsxs(pt,{justifyContent:"end",children:[e.jsx(lt,{children:o}),e.jsx(Te,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:"until next epoch"})]})]})}):e.jsx(it,{})]})]})},it=()=>{const n=Re(1300);return e.jsxs(wn,{padding:"21px 15px",children:[e.jsx(m,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(m,{height:"26px;",width:n?"175px":"189px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(m,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"})]})},Tn=c(S)`
  column-gap: 12px;

  @media (max-width: 992px) {
    flex-direction: column;
    row-gap: 12px;
  }
`,st=c(v)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`,ot=c(v)`
  position: absolute;
  width: 170px;
  height: 170px;
  right: 5px;
  top: -35px;
  border-radius: 50%;

  box-shadow: 0px 30px 50px rgba(240, 86, 254, 0.5);
  filter: blur(2.5px);
`,rt=c(Te)`
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
`,lt=c(Te)`
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
`,pt=c(v)`
  align-items: flex-start;
`,dt=c(pt)`
  padding: 20px 10px 20px 15px;
  // gap: 8px;
  justify-content: center;
`,wn=c(ke)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  justify-content: center;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,ct=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"channelType",type:"uint8"},{indexed:!1,internalType:"bytes",name:"identity",type:"bytes"}],name:"AddChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!1,internalType:"bytes",name:"_subGraphData",type:"bytes"}],name:"AddSubGraph",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"oldBridge",type:"address"},{indexed:!0,internalType:"address",name:"newBridge",type:"address"}],name:"BridgeAddressUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"}],name:"ChannelBlocked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"_channel",type:"address"},{indexed:!1,internalType:"uint256",name:"totalNotifOptions",type:"uint256"},{indexed:!1,internalType:"string",name:"_notifSettings",type:"string"},{indexed:!1,internalType:"string",name:"_notifDescription",type:"string"}],name:"ChannelNotifcationSettingsAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"ChannelOwnershipTransfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"revoker",type:"address"}],name:"ChannelVerificationRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"verifier",type:"address"}],name:"ChannelVerified",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountClaimed",type:"uint256"}],name:"ChatIncentiveClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountRefunded",type:"uint256"}],name:"DeactivateChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"requestSender",type:"address"},{indexed:!1,internalType:"address",name:"requestReceiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amountForReqReceiver",type:"uint256"},{indexed:!1,internalType:"uint256",name:"feePoolAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"}],name:"IncentivizeChatReqReceived",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountDeposited",type:"uint256"}],name:"ReactivateChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"oldRelayer",type:"address"},{indexed:!0,internalType:"address",name:"newRelayer",type:"address"}],name:"RelayerAddressUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"rewardAmount",type:"uint256"}],name:"RewardsClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"rewardAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"fromEpoch",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tillEpoch",type:"uint256"}],name:"RewardsHarvested",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountStaked",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountRefunded",type:"uint256"}],name:"TimeBoundChannelDestroyed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountUnstaked",type:"uint256"}],name:"Unstaked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!1,internalType:"bytes",name:"identity",type:"bytes"}],name:"UpdateChannel",type:"event"},{inputs:[],name:"ADD_CHANNEL_MIN_FEES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"CHANNEL_POOL_FUNDS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"CREATE_CHANNEL_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DOMAIN_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"FEE_AMOUNT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MIN_POOL_CONTRIBUTION",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PROTOCOL_POOL_FEES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PUSH_TOKEN_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"REFERRAL_CODE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"UNISWAP_V2_ROUTER",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"WETH_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"aDaiAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_rewardAmount",type:"uint256"}],name:"addPoolFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"_subGraphData",type:"bytes"}],name:"addSubGraph",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_startIndex",type:"uint256"},{internalType:"uint256",name:"_endIndex",type:"uint256"},{internalType:"address[]",name:"_channelList",type:"address[]"}],name:"batchVerification",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channelAddress",type:"address"}],name:"blockChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"bridgeAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_epochId",type:"uint256"}],name:"calculateEpochRewards",outputs:[{internalType:"uint256",name:"rewards",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"celebUserFunds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"channelById",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channelNotifSettings",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channelUpdateCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channels",outputs:[{internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"channelType",type:"uint8"},{internalType:"uint8",name:"channelState",type:"uint8"},{internalType:"address",name:"verifiedBy",type:"address"},{internalType:"uint256",name:"poolContribution",type:"uint256"},{internalType:"uint256",name:"channelHistoricalZ",type:"uint256"},{internalType:"uint256",name:"channelFairShareCount",type:"uint256"},{internalType:"uint256",name:"channelLastUpdate",type:"uint256"},{internalType:"uint256",name:"channelStartBlock",type:"uint256"},{internalType:"uint256",name:"channelUpdateBlock",type:"uint256"},{internalType:"uint256",name:"channelWeight",type:"uint256"},{internalType:"uint256",name:"expiryTime",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"channelsCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"claimChatIncentives",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_notifOptions",type:"uint256"},{internalType:"string",name:"_notifSettings",type:"string"},{internalType:"string",name:"_notifDescription",type:"string"},{internalType:"uint256",name:"_amountDeposited",type:"uint256"}],name:"createChannelSettings",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"_channelType",type:"uint8"},{internalType:"bytes",name:"_identity",type:"bytes"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"uint256",name:"_channelExpiryTime",type:"uint256"}],name:"createChannelWithPUSH",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"daiAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tillEpoch",type:"uint256"}],name:"daoHarvestPaginated",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"deactivateChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channelAddress",type:"address"}],name:"destroyTimeBoundChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"epnsCommunicator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"epochDuration",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"epochRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"epochToTotalStakedWeight",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"genesisEpoch",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"getChannelVerfication",outputs:[{internalType:"uint8",name:"verificationStatus",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"governance",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupFairShareCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupHistoricalZ",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupLastUpdate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupNormalizedWeight",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"requestSender",type:"address"},{internalType:"address",name:"requestReceiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"vaa",type:"bytes"}],name:"handleChatRequestData",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"harvestAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_tillEpoch",type:"uint256"}],name:"harvestPaginated",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_pushChannelAdmin",type:"address"},{internalType:"address",name:"_pushTokenAddress",type:"address"},{internalType:"address",name:"_wethAddress",type:"address"},{internalType:"address",name:"_uniswapRouterAddress",type:"address"},{internalType:"address",name:"_lendingPoolProviderAddress",type:"address"},{internalType:"address",name:"_daiAddress",type:"address"},{internalType:"address",name:"_aDaiAddress",type:"address"},{internalType:"uint256",name:"_referralCode",type:"uint256"}],name:"initialize",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"initializeStake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"isMigrationComplete",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_from",type:"uint256"},{internalType:"uint256",name:"_to",type:"uint256"}],name:"lastEpochRelative",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lendingPoolProviderAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"pauseContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"previouslySetEpochRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"pushChannelAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"reactivateChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"relayerAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_bridge",type:"address"}],name:"setBridgeAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_commAddress",type:"address"}],name:"setEpnsCommunicatorAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newFees",type:"uint256"}],name:"setFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_governanceAddress",type:"address"}],name:"setGovernanceAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newFees",type:"uint256"}],name:"setMinChannelCreationFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newAmount",type:"uint256"}],name:"setMinPoolContribution",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_relayer",type:"address"}],name:"setRelayerAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalStakedAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_newAdmin",type:"address"}],name:"transferPushChannelAdminControl",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unPauseContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unstake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"unverifyChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"},{internalType:"bytes",name:"_newIdentity",type:"bytes"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"updateChannelMeta",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userFeesInfo",outputs:[{internalType:"uint256",name:"stakedAmount",type:"uint256"},{internalType:"uint256",name:"stakedWeight",type:"uint256"},{internalType:"uint256",name:"lastStakedBlock",type:"uint256"},{internalType:"uint256",name:"lastClaimedBlock",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"usersRewardsClaimed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"verifyChannel",outputs:[],stateMutability:"nonpayable",type:"function"}];class Ct{static createInterface(){return new ra(ct)}static connect(t,a){return new k(t,ct,a)}}N(Ct,"abi",ct);const kt={config:{SLOTS:{userFeesInfo:134}},epochDuration:21*7156},ge={toBN:n=>y.from(n),getCoreV2Contract:(n,t)=>Ct.connect(t,n),lastEpochRelative:(n,t)=>Math.floor((t-n)/kt.epochDuration+1),epochToUserStakedWeight:async(n,t,a,o)=>{const s=kt.config.SLOTS.userFeesInfo,i=_t(["uint256","uint256"],[t,s]),r=y.from(i).add(4).toHexString(),l=_t(["uint256","uint256"],[a,r]),p=await n.getStorageAt(o,l);return y.from(p)},deepCopy(n){return JSON.parse(JSON.stringify(n))},getEmptyState(){return{currentEpoch:0,currentBlockNumber:0,genesisEpoch:0,epochRewards:[],lastEpochInitialized:0,lastTotalStakeEpochInitialized:0,epochToTotalStakedWeight:[],previouslySetEpochRewards:y.from(0),userFeesInfo:{epochToUserStakedWeight:[],lastClaimedBlock:y.from(0),lastStakedBlock:y.from(0),stakedAmount:y.from(0),stakedWeight:y.from(0)}}}};class Pt{constructor(t,a){N(this,"STATE");N(this,"coreV2Contract");N(this,"userAddress");this.coreV2Contract=t,this.userAddress=a,this.STATE=ge.getEmptyState()}async initState(){const t=this.coreV2Contract,a=await t.provider.getBlockNumber(),o=await t.genesisEpoch().then(x=>x.toNumber()),s=ge.lastEpochRelative(o,a);this.STATE.currentBlockNumber=a,this.STATE.genesisEpoch=o,this.STATE.currentEpoch=s,this.STATE.currentBlockNumber=a,this.STATE.genesisEpoch=o,this.STATE.currentEpoch=s;const i=Array.from({length:s+1},(x,M)=>M),r=await Promise.all(i.map(x=>t.epochRewards(x))),l=await Promise.all(i.map(x=>t.epochToTotalStakedWeight(x))),p=await t.provider.getStorageAt(t.address,129).then(x=>Number(x)),h=await t.provider.getStorageAt(t.address,130).then(x=>Number(x));this.STATE.lastEpochInitialized=p,this.STATE.lastTotalStakeEpochInitialized=h,this.STATE.epochRewards=r,this.STATE.epochToTotalStakedWeight=l,this.STATE.previouslySetEpochRewards=await t.previouslySetEpochRewards();const g=await t.userFeesInfo(this.userAddress);this.STATE.userFeesInfo.stakedAmount=g.stakedAmount,this.STATE.userFeesInfo.stakedWeight=g.stakedWeight,this.STATE.userFeesInfo.lastStakedBlock=g.lastStakedBlock,this.STATE.userFeesInfo.lastClaimedBlock=g.lastClaimedBlock,this.STATE.userFeesInfo.epochToUserStakedWeight=await Promise.all(i.map(x=>ge.epochToUserStakedWeight(t.provider,this.userAddress,x,this.coreV2Contract.address)))}async _setupEpochsRewardAndWeights(t){const a=this.coreV2Contract,o=await a.genesisEpoch().then(r=>r.toNumber()),s=ge.lastEpochRelative(o,this.STATE.lastEpochInitialized),i=this.STATE.currentEpoch;if(console.debug(`

Doing with: _currentEpoch, _lastEpochInitiliazed`,i,s,`
`),i>s||i==1){const r=await a.PROTOCOL_POOL_FEES(),l=await a.previouslySetEpochRewards(),p=r.sub(l);i-s>1?this.STATE.epochRewards[i-1]=this.STATE.epochRewards[i-1].add(p):this.STATE.epochRewards[i]=ge.toBN(this.STATE.epochRewards[i].toString()).add(p),this.STATE.lastEpochInitialized=await a.provider.getBlockNumber(),this.STATE.previouslySetEpochRewards=r}if(this.STATE.lastTotalStakeEpochInitialized==0||this.STATE.lastTotalStakeEpochInitialized==i)this.STATE.epochToTotalStakedWeight[i]=this.STATE.epochToTotalStakedWeight[i].add(t);else{for(let r=this.STATE.lastTotalStakeEpochInitialized+1;r<=i-1;r++)this.STATE.epochToTotalStakedWeight[r].toNumber()==0&&(this.STATE.epochToTotalStakedWeight[r]=this.STATE.epochToTotalStakedWeight[this.STATE.lastTotalStakeEpochInitialized]);this.STATE.epochToTotalStakedWeight[i]=this.STATE.epochToTotalStakedWeight[this.STATE.lastTotalStakeEpochInitialized].add(t)}this.STATE.lastTotalStakeEpochInitialized=i}async _adjustUserAndTotalStake(t){await this._setupEpochsRewardAndWeights(t);const a=this.STATE.currentEpoch,o=this.STATE.userFeesInfo.stakedWeight;if(o.isZero())this.STATE.userFeesInfo.stakedWeight=ge.toBN(t);else{const s=ge.lastEpochRelative(this.STATE.genesisEpoch,this.STATE.userFeesInfo.lastStakedBlock.toNumber());if(a==s)this.STATE.userFeesInfo.stakedWeight=o.add(t);else for(let i=s;i<=a;i++)i!=a?this.STATE.userFeesInfo.epochToUserStakedWeight[i]=o:(this.STATE.userFeesInfo.stakedWeight=o.add(t),this.STATE.userFeesInfo.epochToUserStakedWeight[i]=this.STATE.userFeesInfo.stakedWeight)}t!=0&&(this.STATE.userFeesInfo.lastStakedBlock=ge.toBN(this.STATE.currentBlockNumber))}calculateEpochRewards(t){return this.STATE.userFeesInfo.epochToUserStakedWeight[t].mul(this.STATE.epochRewards[t]).div(this.STATE.epochToTotalStakedWeight[t].add(1))}async estimateHarvestAll(){await this.initState();const t=this.STATE.currentEpoch-1;if(await this._adjustUserAndTotalStake(0),!(this.STATE.currentEpoch>t))return ge.toBN(0);const a=ge.lastEpochRelative(this.STATE.genesisEpoch,Math.max(this.STATE.userFeesInfo.lastClaimedBlock.toNumber(),this.STATE.genesisEpoch));if(this.coreV2Contract,!(t>=a))return ge.toBN(0);let o=ge.toBN(0);for(let s=a;s<=t;s++){const i=this.calculateEpochRewards(s);o=o.add(i)}return o}async getUserPotentialEpochReward(){await this.initState(),await this._setupEpochsRewardAndWeights(0);const t=this.STATE.epochRewards[this.STATE.currentEpoch],a=this.STATE.epochToTotalStakedWeight[this.STATE.currentEpoch],o=this.STATE.userFeesInfo.stakedWeight.mul(t).div(a),s=this.STATE.currentEpoch,i=this.STATE.userFeesInfo.stakedAmount;return{potentialReward:o,epochRewards:t,userStaked:i,currentEpochNumber:s}}}const At=async(n,t,a)=>{const o=ge.getCoreV2Contract(n,a),s=new Pt(o,t),i=new Pt(o,t),[r,l]=await Promise.all([s.estimateHarvestAll(),i.getUserPotentialEpochReward()]);return{availableRewards:r,...l}},vt=y.from(1).mul(y.from(10).pow(y.from(18))),fn=59400,Sn=75300,bn=1323100,We=function(n,t=null){return y.from(n)},Ne=n=>n.mul(y.from(10).pow(y.from(18))),ae=n=>parseFloat(la(n)),jn="0x0000000000000000000000000000000000000001",ve=class ve{constructor(){N(this,"state",{account:null,signer:null,staking:null,yieldFarmingPUSH:null,yieldFarmingLP:null,rewardForCurrentEpochPush:null,rewardForCurrentEpochLP:null,highCapLPStakingAPR:200,highCapPUSHStakingAPR:200,genesisEpochAmountPUSH:fn,deprecationPerEpochPUSH:900,genesisEpochAmountLP:Sn,deprecationPerEpochLP:900,annualPushReward:bn,uniswapV2Router02:null});N(this,"init",(t,a,o,s,i,r)=>{this.state.account=t,this.state.staking=a,this.state.pushToken=o,this.state.pushCoreV2=s,this.state.yieldFarmingLP=i,this.state.uniswapV2Router02=r});N(this,"getPoolStats",t=>new Promise(async(a,o)=>{const s=this.state.pushCoreV2,i=this.state.yieldFarmingLP,r=await i.getCurrentEpoch(),l=await this.currentEpochCalculation(t);let p;const h=await this.state.uniswapV2Router02.getAmountsOut(vt.toString(),[d.pushToken,d.WETHAddress,d.USDTAddress]);Q.coreContractChain===42||Q.coreContractChain===5?p=ae(h[h.length-1]):p=h[h.length-1].toNumber()/1e6;const g=ae(await this.state.pushToken.balanceOf(d.uniV2LPToken)),x=ae(await this.state.pushToken.attach(d.WETHAddress).balanceOf(d.uniV2LPToken));let M;const F=await this.state.uniswapV2Router02.getAmountsOut(vt.toString(),[d.WETHAddress,d.USDTAddress]);Q.coreContractChain===42||Q.coreContractChain===5?M=ae(F[F.length-1]):M=F[F.length-1].toNumber()/1e6;const L=ae(await this.state.pushToken.attach(d.uniV2LPToken).totalSupply()),O=(g*p+x*M)/L,Y=O/p,_=ae(await i.getPoolSize(r.add(1))),ee=ae(await s.totalStakedAmount())*p+_*O,U=await i.epochDuration(),ie=(await i.epochStart()).add(r.sub(1).mul(U)).add(U);let G=await t.getBlock("latest");G=G.number;const W=await s.genesisEpoch(),b=await s.epochDuration();let D=(b.toNumber()-(G-W.toNumber())%b.toNumber())*12.6;D=Math.round(D);const I=Ne(y.from(this.state.annualPushReward)),w=await i.TOTAL_DISTRIBUTED_AMOUNT(),R=I.add(w),K=await this.getPushRewardsDistributed(l,r);a({pushPrice:p,lpToPushRatio:Y,epochEndTimestamp:ie,epochEndTime:D,totalValueLocked:ee,totalDistributedAmount:R,pushRewardsDistributed:K})}));N(this,"getPushRewardsDistributed",async(t,a)=>{const o=this.state.pushCoreV2,s=await this.state.yieldFarmingLP.NR_OF_EPOCHS();a=a.toNumber()>s.toNumber()?s:a;const i=Ne(y.from(this.state.genesisEpochAmountLP)),r=Ne(y.from(this.state.deprecationPerEpochLP));let l=y.from(0),p=y.from(0);for(var h=0;h<a.toNumber();h++){const g=this.calcTotalAmountPerEpoch(i,y.from(h),r);p=p.add(g);const x=await o.epochRewards(h);p=p.add(x)}return l.add(p)});N(this,"getLPPoolStats",async t=>new Promise(async(a,o)=>{const s=this.state.yieldFarmingLP,i=await s.NR_OF_EPOCHS(),r=await s.getCurrentEpoch().then(M=>M.toNumber()>i.toNumber()?i:M),l=Ne(y.from(this.state.genesisEpochAmountLP)),p=Ne(y.from(this.state.deprecationPerEpochLP)),h=this.calcTotalAmountPerEpoch(l,r,p);this.state.rewardForCurrentEpochLP=h;const g=await s.getPoolSize(r.add(1));let x=await this.calcLPPoolAPR(l,r,p,g,t);x=Math.min(this.state.highCapLPStakingAPR,x),a({currentEpochLP:r,totalEpochLP:i,rewardForCurrentEpoch:h,poolBalance:g,stakingAPR:x})}));N(this,"getUserDataLP",async()=>new Promise(async(t,a)=>{if(this.state.account){const o=this.state.yieldFarmingLP,s=await o.NR_OF_EPOCHS(),i=await o.getCurrentEpoch().then(L=>L.toNumber()>s.toNumber()?s:L);let r=o.getEpochStake(this.state.account,i.add(1));const l=(await this.calculateUserEpochReward(i.toNumber(),o)).toFixed(2),p=(await o.lastEpochIdHarvested(this.state.account)).toNumber();let h=this.getAccumulatedReward(i,o),g=this.getTotalAvailableRewards(p,i,o),[x,M,F]=await Promise.all([h,g,r]);t({potentialUserReward:l,epochStakeNext:F,totalAccumulatedReward:x,totalAvailableReward:M})}}));N(this,"calculateLpEpochRewards",async(t,a)=>{t=t+1;const o=ae(await a.getEpochStake(this.state.account,t)),s=ae(await a.getPoolSize(t));let i=0;if(s>0&&a.address==d.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,p=r-l*t;i=o/s*p}return i});N(this,"getAccumulatedReward",async(t,a)=>{let o=[];for(var s=0;s<t.sub(1).toNumber();s++){const r=this.calculateLpEpochRewards(s,a);o.push(r)}let i=(await Promise.all(o)).reduce((r,l)=>r+l,0);return i=i.toFixed(2),i});N(this,"getTotalAvailableRewards",async(t,a,o)=>{let s=[];for(var i=t;i<a.sub(1).toNumber();i++){const l=this.calculateLpEpochRewards(i,o);s.push(l)}let r=(await Promise.all(s)).reduce((l,p)=>l+p,0);return r=r.toFixed(2),r});N(this,"getUserDataPUSH",async t=>new Promise(async(a,o)=>{if(this.state.account){const s=this.state.pushCoreV2;let{epochRewards:i=We(0),currentEpochNumber:r=0,userStaked:l=We(0),potentialReward:p=We(0),availableRewards:h=We(0)}={};({epochRewards:i,currentEpochNumber:r}=await At(t,this.state.account,d.pushCoreV2)),this.state.account!==jn&&({userStaked:l,potentialReward:p,availableRewards:h}=await At(t,this.state.account,d.pushCoreV2));const g=await s.totalStakedAmount();let x=await s.usersRewardsClaimed(this.state.account);x=ae(x);let M=i;this.state.rewardForCurrentEpochPush=M;let F=this.calcPushStakingAPR(g);F=Math.min(this.state.highCapPUSHStakingAPR,F),p=ae(p),h=ae(h),a([{currentEpochNumber:r,currentReward:M,totalStakedAmount:g,stakingAPR:F},{userStaked:l,claimedReward:x,potentialReward:p,availableRewards:h}])}}));N(this,"calculateUserEpochReward",async(t,a)=>{const o=ae(await a.getEpochStake(this.state.account,t)),s=ae(await a.getPoolSize(t));let i=0;if(s>0&&a.address==d.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,p=r-l*t;i=o/s*p}return i});N(this,"calcTotalAmountPerEpoch",(t,a,o)=>a.toNumber()===0?t.mul(0):t.sub(a.mul(o)));N(this,"currentEpochCalculation",async t=>{const a=this.state.pushCoreV2,o=await a.genesisEpoch(),s=await t.getBlock("latest");return await a.lastEpochRelative(o,s.number)});N(this,"calcAnnualEpochReward",(t,a,o)=>{const s=this.calcTotalAmountPerEpoch(t,a,o);let i=s;for(let r=a.toNumber();r<a.toNumber()+12;r++)i=i.add(s.sub(o.mul(r)));return i});N(this,"calcPushStakingAPR",t=>{const a=this.state.annualPushReward;let o;return Q.coreContractChain===42||Q.coreContractChain===5?o=a/Math.max(ae(t),1)*100:o=a/ae(t)*100,o.toFixed(2)});N(this,"calcLPPoolAPR",async(t,a,o,s,i)=>{const r=this.calcAnnualEpochReward(t,a,o),l=s*i.lpToPushRatio;return(r.mul(100)/l).toFixed(2)})}static getInstance(){return ve.instance||(ve.instance=new ve),ve.instance}};N(ve,"instance",null);let Ce=ve;const Rt=({onClose:n,InnerComponentProps:t,toastObject:a})=>{const{title:o,getUserData:s,getPoolStats:i,setUnstakeErrorMessage:r,setWithdrawErrorMessage:l}=t,{account:p,provider:h,isWalletConnected:g,connect:x}=Pe(),[M,F]=u.useState(0),[L,O]=u.useState(0),[Y,_]=u.useState(!1),[ee,U]=u.useState(!1),[ie,G]=u.useState(!1);u.useState(null),u.useContext(da);const[W,b]=u.useState(0),D=()=>{r(null),l(null),n()},I=qe(),w=u.useRef(null);Wt(w,()=>D());const R=async()=>{var f=h.getSigner(p);const T=o==="Uni-V2"?d.uniV2LPToken:d.pushToken,P=new k(T,A.uniV2LpToken,f);let C=Qt(await P.balanceOf(p));F(parseInt(C.toString().replace(/\D/,""))||0)},K=async()=>{U(!0);var f=h.getSigner(p);let T;o==="Uni-V2"?T=await new k(d.uniV2LPToken,A.uniV2LpToken,f).allowance(p,d.stakingV2):T=await new k(d.pushToken,A.uniV2LpToken,f).allowance(p,d.pushCoreV2),O(J(T)),U(!1)};u.useEffect(()=>{R(),K()},[]);const we=async()=>{if(!g){x();return}if(Y||ee)return;U(!0);var f=h.getSigner(p);let T;const P=ua(W.toString(),18);o==="Uni-V2"?T=new k(d.uniV2LPToken,A.uniV2LpToken,f).approve(d.stakingV2,P):T=new k(d.pushToken,A.uniV2LpToken,f).approve(d.pushCoreV2,P),T.then(async C=>{a.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await h.waitForTransaction(C.hash),a.showMessageToast({toastTitle:"Success",toastMessage:`Successfully approved ${o} Tokens!`,toastType:"SUCCESS",getToastIcon:E=>e.jsx(he,{size:E,color:"green"})}),U(!1),_(!0)}catch(E){console.error("Error",E),a.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:V=>e.jsx(H,{size:V,color:"red"})}),U(!1)}}).catch(C=>{console.error("Error",C),a.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature",toastType:"ERROR",getToastIcon:E=>e.jsx(H,{size:E,color:"red"})}),U(!1)})},z=async()=>{if(!g){x();return}if(ie||!Y)return;if(G(!0),W==0){a.showMessageToast({toastTitle:"Error",toastMessage:`You need to deposit atleast 1 ${o} token `,toastType:"ERROR",getToastIcon:P=>e.jsx(H,{size:P,color:"red"})}),G(!1);return}var f=h.getSigner(p);let T;o==="Uni-V2"?T=new k(d.stakingV2,A.stakingV2,f).deposit(d.uniV2LPToken,y.from(W).mul(y.from(10).pow(18))):T=new k(d.pushCoreV2,A.pushCoreV2,f).stake(y.from(W).mul(y.from(10).pow(18))),T.then(async P=>{a.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await h.waitForTransaction(P.hash),a.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:C=>e.jsx(he,{size:C,color:"green"})}),i(),s(),G(!1),D()}catch(C){console.error("Error",C),a.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${C.name}+ ")`,toastType:"ERROR",getToastIcon:E=>e.jsx(H,{size:E,color:"red"})}),G(!1)}}).catch(P=>{console.error("Error in depositing",P),P.reason=P.reason.slice(P.reason.indexOf("::")+1),a.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Cancelled! ${P.reason}`,toastType:"ERROR",getToastIcon:C=>e.jsx(H,{size:C,color:"red"})}),G(!1)})},ne=f=>{f.preventDefault(),b(parseInt(f.target.value.replace(/\D/,""))||0),L>=parseInt(f.target.value.replace(/\D/,""))?_(!0):_(!1)},fe=f=>{b(parseInt(f.toString().replace(/\D/,""))||0)},j=Re(600);return e.jsxs(En,{children:[e.jsxs(S,{justifyContent:"space-between",children:[e.jsx(Cn,{children:o==="Uni-V2"?"Uniswap V2 Staking Pool":"Push Fee Staking Pool"}),e.jsx(gt,{onClick:()=>D(),style:{cursor:"pointer"}})]}),e.jsxs(v,{children:[e.jsx(ca,{weight:"500",size:"14px",self:"baseline",color:I.stakingSecondaryText,children:"You are Staking"}),e.jsxs(S,{width:"-webkit-fill-available",background:I.default.bg,height:"60px",padding:j?"8px":"14px",borderRadius:"12px",border:`1px solid ${I.modalBorderColor}`,children:[e.jsx(kn,{placeholder:"Enter Amount",flex:"2",radius:"4px",size:"32px",height:"32px",self:"auto",bg:"#FFF",color:I.stakingSecondaryText,value:W,onChange:f=>{f.preventDefault(),ne(f)},autoFocus:!0}),e.jsxs(Pn,{onClick:()=>fe(M),children:["Max: ",M]})]})]}),e.jsxs(S,{margin:"20px 0",gap:"12px",children:[e.jsxs(le,{variant:"primary",size:"medium",onClick:we,disabled:!!Y,children:[!Y&&!ee&&e.jsxs(Xe,{color:"#FFFFFF",weight:"400",cursor:"pointer",children:["Approve ",o]}),ee&&!Y&&e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#fff",title:"Approving",titleColor:"#FFF"}),Y&&e.jsx(Xe,{color:I.emptyButtonText,weight:"600",cursor:"default",children:"Approved"})]}),e.jsxs(le,{variant:"outline",size:"medium",disabled:!!(!Y||ie),onClick:z,children:[!ie&&"Deposit",ie&&e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFFF",title:"Depositing",titleColor:"#FFF"})]})]})]})},En=c.div`
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
`,Cn=c($)`
  font-size: 16px;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};
`,kn=c(pa)`
  background: transparent;
`,Pn=c.p`
  font-size: 14px;
  text-align: right;
  text-decoration-line: underline;
  color: #657795;
  margin: 0px;
  cursor: pointer;
`,An=({lpPoolStats:n,userDataLP:t,getLpPoolStats:a,getUserDataLP:o})=>{const{account:s,provider:i}=Pe(),[r,l]=u.useState(!1),[p,h]=u.useState(!1),[g,x]=u.useState(null),[M,F]=u.useState(null),L=Ve(),O=qe(),Y=async()=>{if(r)return;l(!0);const D=J(t.epochStakeNext);if(D==0){F("Nothing to unstake. You need to stake first"),l(!1);return}var I=i.getSigner(s);let w=new k(d.stakingV2,A.stakingV2,I);await w.balanceOf(s,d.uniV2LPToken),w.withdraw(d.uniV2LPToken,y.from(D).mul(y.from(10).pow(18))).then(async R=>{L.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await i.waitForTransaction(R.hash),L.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:K=>e.jsx(he,{size:K,color:"green"})}),l(!1),a(),o()}catch(K){console.error("Error",K),L.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${K.name}+ ")`,toastType:"ERROR",getToastIcon:we=>e.jsx(H,{size:we,color:"red"})}),l(!1)}}).catch(R=>{L.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:K=>e.jsx(H,{size:K,color:"red"})}),l(!1)})},_=async()=>{if(!p){if((t==null?void 0:t.totalAvailableReward)==0){x("No Rewards to Claim!");return}if(console.debug("Lp POOL stats",n),!n.currentEpochLP||n.currentEpochLP==1){L.showMessageToast({toastTitle:"Error",toastMessage:"Harvest unlocks from Epoch 2!)",toastType:"ERROR",getToastIcon:I=>e.jsx(H,{size:I,color:"red"})});return}h(!0);var D=i.getSigner(s);new k(d.yieldFarmLP,A.yieldFarming,D).massHarvest().then(async I=>{L.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await i.waitForTransaction(I.hash),L.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:w=>e.jsx(he,{size:w,color:"green"})}),o(),h(!1)}catch(w){L.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${w.name}+ ")`,toastType:"ERROR",getToastIcon:R=>e.jsx(H,{size:R,color:"red"})}),h(!1)}}).catch(I=>{L.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:w=>e.jsx(H,{size:w,color:"red"})}),h(!1)})}};u.useEffect(()=>{x(null),F(null)},[s]);const ee=()=>{(n==null?void 0:n.currentEpochLP.toNumber())+1<=(n==null?void 0:n.totalEpochLP.toNumber())?ie():L.showMessageToast({toastTitle:"Error",toastMessage:"Epochs have ended!",toastType:"ERROR",getToastIcon:D=>e.jsx(H,{size:D,color:"red"})})},{isModalOpen:U,showModal:ie,ModalComponent:G}=Qe(),W=Ve(),b=Re(600);return e.jsxs(vn,{children:[e.jsx(G,{InnerComponent:Rt,InnerComponentProps:{title:"Uni-V2",getUserData:o,getPoolStats:a,setUnstakeErrorMessage:F,setWithdrawErrorMessage:x},toastObject:W,modalPosition:et.ON_PARENT}),e.jsx(v,{margin:"0px 0px 20px 0px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(Rn,{children:"Uniswap V2 LP Staking Pool"}),e.jsxs(ut,{children:["Current APR"," ",e.jsxs(Te,{color:"#D53A94",fontWeight:"600",children:[">",X(n==null?void 0:n.stakingAPR),"%"]})]})]}):e.jsxs(Le,{padding:"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(m,{height:"12px",width:"112px"})]})}),e.jsxs(v,{flex:"5",children:[e.jsxs(Mn,{border:`1px solid ${O.stakingBorder}`,borderRadius:"16px",children:[e.jsx(v,{margin:b?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:b?" 7px":"10px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(ut,{children:"Current Reward"}),e.jsxs($,{fontSize:b?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:[X(J(n==null?void 0:n.rewardForCurrentEpoch))," PUSH"]})]}):e.jsxs(Le,{padding:b?"0px":"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:b?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(m,{height:"12px",width:b?"65px":"100px}"})]})}),e.jsx(Fn,{width:"10px",height:"100%"}),e.jsx(v,{margin:b?"0 0 0 6px":"0 0 0 18px",padding:b?" 7px":"10px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(ut,{children:"Total Staked"}),e.jsxs(Un,{fontSize:b?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[X(J(n==null?void 0:n.poolBalance))," UNI-V2"]})]}):e.jsxs(Le,{padding:b?"0px":"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:b?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(m,{height:"12px",width:b?"65px":"100px}"})]})})]}),e.jsx(S,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:n?e.jsxs(e.Fragment,{children:[e.jsx(Mt,{children:"Current Epoch"}),e.jsxs(Mt,{children:[Math.min(n==null?void 0:n.currentEpochLP,n==null?void 0:n.totalEpochLP).toString(),"/",n==null?void 0:n.totalEpochLP.toString()]})]}):e.jsx(Le,{padding:"5px 0px 0 15px",children:e.jsx(m,{height:"12px",width:"124px"})})}),t?e.jsxs(v,{children:[e.jsxs(S,{justifyContent:"space-between",margin:b?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs($e,{children:["User Deposit",e.jsx(He,{children:e.jsx(q,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(re,{src:me,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ge,{children:[J(t==null?void 0:t.epochStakeNext)," UNI-V2"]})]}),e.jsxs(S,{justifyContent:"space-between",margin:b?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs($e,{children:["Rewards Claimed",e.jsx(He,{children:e.jsx(q,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(re,{src:me,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ge,{children:[" ",X(((t==null?void 0:t.totalAccumulatedReward)-(t==null?void 0:t.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(S,{justifyContent:"space-between",margin:b?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs($e,{children:["Current Epoch Reward",e.jsx(He,{children:e.jsx(q,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(re,{src:me,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ge,{children:[" ",X(t==null?void 0:t.potentialUserReward)," PUSH"]})]}),e.jsxs(S,{justifyContent:"space-between",margin:b?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs($e,{children:["Available for Claiming",e.jsx(He,{children:e.jsx(q,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(re,{src:me,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ge,{children:[" ",X(t==null?void 0:t.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(ke,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(S,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(S,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(S,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(S,{justifyContent:"space-between",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]})]})]}),e.jsx(v,{padding:b?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx(le,{variant:"primary",size:"medium",onClick:()=>{ee()},children:"Stake $UNI-V2 LP Tokens"})}),e.jsxs(In,{children:[J(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(q,{error:!0,ToolTipTitle:"Nothing to unstake! Stake First.",ToolTipWidth:"16rem",bottom:"-30px",children:e.jsx(le,{disabled:!0,size:"medium",children:r?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Unstake $UNI-V2"})}):e.jsx(le,{size:"medium",variant:"outline",onClick:Y,children:r?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:O.activeButtonText,title:"Unstaking",titleColor:O.activeButtonText}):"Unstake $UNI-V2"}),(t==null?void 0:t.totalAvailableReward)==="0.00"?e.jsx(q,{bottom:"-30px",left:"40px",ToolTipTitle:"No Rewards to Claim!",error:!0,ToolTipWidth:"10rem",children:e.jsx(le,{disabled:!0,size:"medium",children:p?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFF"}):"Claim Rewards"})}):e.jsx(le,{variant:"outline",size:"medium",onClick:()=>_(),children:p?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:O.activeButtonText,title:"Claiming",titleColor:O.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Le,{width:"100%",children:[e.jsx(m,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(m,{height:"49px",width:"100%"})]})})]})},vn=c(De)`
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
`,Rn=c($)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`,ut=c.div`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  // color: #333333;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Mn=c(S)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,Fn=c.div`
  width: 1px;
  height: 100%;
  background: ${n=>n.theme.stakingBorder};
`,$e=c.div`
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
`,Un=c($)`
  color: ${n=>n.theme.stakingSecondaryText};
`,Mt=c($t)`
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
`,He=c(Te)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,Ge=c($)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,In=c.div`
  display: flex;
  gap: var(--spacing-xxxs, 4px);
  margin: 15px 0px 0px 0px;
`,Le=c(ke)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,Nn=n=>u.createElement("svg",{width:29,height:28,viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},u.createElement("path",{d:"M26.1673 14.0002C26.1673 20.4431 20.9436 25.6668 14.5007 25.6668C8.05773 25.6668 2.83398 20.4431 2.83398 14.0002C2.83398 7.55725 8.05773 2.3335 14.5007 2.3335C20.9436 2.3335 26.1673 7.55725 26.1673 14.0002Z",fill:"#30CC8B"}),u.createElement("path",{d:"M20.6751 8.5083L12.7593 16.4335L9.49146 13.175L7.8418 14.8246L12.7616 19.7328L22.3254 10.158L20.6751 8.5083Z",fill:"white"})),Ln=({onClose:n,InnerComponentProps:t})=>{const{currentTransactionNo:a,totalTransactionNo:o,transactionSteps:s,transactionText:i,setCurrentTransactionNo:r,setTotalTransactionNo:l,setTransactionSteps:p,claimRewards:h,unstakeTokensPaginated:g}=t,x=()=>{p(0),n()},M=async()=>{p(0),l(0),r(0),i!=null&&i.includes("Unstaking")?g():h()};return e.jsx(zn,{children:o?e.jsxs(e.Fragment,{children:[e.jsx(S,{justifyContent:"end",children:e.jsx(gt,{onClick:()=>x(),style:{cursor:"pointer"}})}),s===0&&e.jsxs(e.Fragment,{children:[e.jsx(Ht,{size:42,color:xe.COLORS.PRIMARY_PINK,type:Gt.PROCESSING}),e.jsxs(v,{gap:"24px",margin:"16px 0 0 0",children:[e.jsxs(v,{children:[e.jsxs($,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:["Please sign transaction ",a,"/",o]}),e.jsx($,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"Processing your request"})]}),e.jsx($,{fontSize:"18px",fontWeight:"400",color:"#657795",children:i}),e.jsx(v,{padding:"16px",children:e.jsx($,{fontSize:"16px",fontWeight:"400",color:"#D53A94",children:"Confirm the request in your wallet"})})]})]}),s===1&&e.jsxs(v,{gap:"24px",children:[e.jsx(v,{gap:"9px",children:e.jsx($,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:"Transaction Error"})}),e.jsx(v,{children:e.jsx(le,{variant:"primary",size:"medium",onClick:M,children:"Retry"})})]}),s===2&&e.jsxs(v,{gap:"24px",children:[e.jsxs(v,{children:[e.jsx(Nn,{height:"50px",width:"50px"}),e.jsxs(v,{gap:"9px",children:[e.jsx($,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:"Transactions Successful"}),e.jsx($,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"You have claimed all the rewards."})]})]}),e.jsx(le,{variant:"primary",size:"medium",onClick:x,children:"Close"})]})]}):e.jsx(Ht,{size:42,color:xe.COLORS.PRIMARY_PINK,type:Gt.PROCESSING})})},zn=c(v)`
  min-width: 493px;
  padding: 32px 24px;
`,Dn=({userDataPush:n,getUserDataPush:t,PUSHPoolstats:a,getPUSHPoolStats:o})=>{const{account:s,provider:i}=Pe(),[r,l]=u.useState(!1),[p,h]=u.useState(!1),[g,x]=u.useState(null),[M,F]=u.useState(null),[L,O]=u.useState(0),[Y,_]=u.useState(0),[ee,U]=u.useState(0),[ie,G]=u.useState(""),W=Ve(),b=qe(),D=async C=>{var E=i.getSigner(s);let V=new k(d.pushToken,A.pushToken,E);if(await V.holderDelegation(s,C.address))return!0;try{W.showLoaderToast({loaderMessage:"Delegating! Please wait.."});const B=await V.setHolderDelegation(C.address,"true");return await i.waitForTransaction(B.hash),W.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Address Delegated",toastType:"SUCCESS",getToastIcon:se=>e.jsx(he,{size:se,color:"green"})}),!0}catch(B){return console.error("Error in delegating",B),W.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${B.reason}`,toastType:"ERROR",getToastIcon:se=>e.jsx(H,{size:se,color:"red"})}),l(!1),!1}},I=async C=>{const E=(await C.userFeesInfo(s)).lastClaimedBlock;if(E.toNumber()!==0){const V=await C.genesisEpoch(),B=await C.epochDuration();return(E-V)/B}},w=async()=>{if(p)return;if(h(!0),(n==null?void 0:n.availableRewards)==0){F("No Rewards to Claim"),h(!1);return}var C=i.getSigner(s);let E=new k(d.pushCoreV2,A.pushCoreV2,C);const V=a==null?void 0:a.currentEpochNumber,B=14;if(!await D(E))return;let se=1;se=await I(E),T(),h(!1);let oe=0;V-se<B,oe=Math.ceil((V-se)/B),_(oe),oe!=0&&(await R(oe,se,E,B),t(),U(2),O(0))},R=async(C,E,V,B)=>{const se=a==null?void 0:a.currentEpochNumber;let oe=0;for(let te=0;te<C;te++){let Z=E;E+=B;let ye=Math.min(E,se-1);G(`Claiming the rewards from Epoch ${Z} to ${ye} `),await V.harvestPaginated(ye,{gasLimit:91e4}).then(async pe=>{try{W.showLoaderToast({loaderMessage:"Waiting for confirmation"}),await i.waitForTransaction(pe.hash),W.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:de=>e.jsx(he,{size:de,color:"green"})}),oe++,O(oe)}catch{console.error("Error in the transaction",pe);return}}).catch(pe=>{throw console.error("Error in claiming the reward",pe),W.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${pe.reason}`,toastType:"ERROR",getToastIcon:de=>e.jsx(H,{size:de,color:"red"})}),G(""),l(!1),t(),U(1),O(0),pe})}},K=async()=>{if(r)return;if(l(!0),J(n==null?void 0:n.userStaked)==0){x("Nothing to unstake, You need to stake first"),l(!1);return}var C=i.getSigner(s);let E=new k(d.pushCoreV2,A.pushCoreV2,C);const V=await D(E);if(h(!1),!V)return;const B=a==null?void 0:a.currentEpochNumber,se=14;let oe=0;if(oe=await I(E),oe>=B-1){l(!1),x("PUSH cannot be unstaked until current epoch is over."),W.showMessageToast({toastTitle:"Unstaking Error",toastMessage:"You cannot unstake until Current Epoch gets over.",toastType:"ERROR",getToastIcon:Z=>e.jsx(H,{size:Z,color:"red"})});return}T();const te=Math.ceil((B-oe)/se);_(te),te>1&&await R(te-1,oe,E,se),G("Unstaking Your Push Tokens. Please wait..."),E.unstake().then(async Z=>{W.showLoaderToast({loaderMessage:"Unstaking! Waiting for Confirmation..."});try{await i.waitForTransaction(Z.hash),W.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:ye=>e.jsx(he,{size:ye,color:"green"})}),o(),t(),l(!1),U(2),O(0)}catch(ye){console.error("Error",ye),W.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${ye.name}+ ")`,toastType:"ERROR",getToastIcon:pe=>e.jsx(H,{size:pe,color:"red"})}),G(""),l(!1)}}).catch(Z=>{console.error("Error: ",Z);const ye=Z.reason.includes("PushCoreV2::unstake:"),pe=Z.reason.includes("PushCoreV2::harvestPaginated:");if(ye||pe)x("PUSH cannot be unstaked until current epoch is over.");else{let de=Z.reason.slice(Z.reason.indexOf("::")+1);de=de.replace("unstake:",""),W.showMessageToast({toastTitle:"Error",toastMessage:`${de}`,toastType:"ERROR",getToastIcon:Se=>e.jsx(H,{size:Se,color:"red"})})}l(!1),t(),U(1),O(0)})};u.useEffect(()=>{F(null),x(null)},[s]);const{isModalOpen:we,showModal:z,ModalComponent:ne}=Qe(),fe=Ve(),j=Re(600),{isModalOpen:f,showModal:T,ModalComponent:P}=Qe();return e.jsxs(_n,{children:[e.jsx(ne,{InnerComponent:Rt,InnerComponentProps:{title:"PUSH",getUserData:t,getPoolStats:o,setUnstakeErrorMessage:x,setWithdrawErrorMessage:F},toastObject:fe,modalPosition:et.ON_PARENT}),e.jsx(P,{InnerComponent:Ln,InnerComponentProps:{currentTransactionNo:L,totalTransactionNo:Y,transactionSteps:ee,transactionText:ie,setCurrentTransactionNo:O,setTotalTransactionNo:_,setTransactionSteps:U,claimRewards:w,unstakeTokensPaginated:K},onConfirm:()=>{},modalPadding:"0px",modalPosition:et.ON_ROOT}),e.jsx(v,{margin:"0px 0px 20px 0px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Wn,{children:"PUSH Fee Staking Pool"}),e.jsxs($n,{children:["Current APR",e.jsxs(Te,{color:"#D53A94",fontWeight:"600",margin:"0 5px 0 5px",children:[">",X(a==null?void 0:a.stakingAPR),"% + Fee"]}),e.jsx(Vn,{})]})]}):e.jsxs(ze,{padding:"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(m,{height:"12px",width:"112px"})]})}),e.jsxs(v,{flex:"5",children:[e.jsxs(Hn,{border:`1px solid ${b.stakingBorder}`,borderRadius:"16px",children:[e.jsx(v,{margin:j?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:j?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Ut,{children:"Current Reward"}),e.jsxs($,{fontSize:j?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:[X(J(a==null?void 0:a.currentReward))," PUSH"]})]}):e.jsxs(ze,{padding:j?"0px":"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:j?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(m,{height:"12px",width:j?"65px":"100px}"})]})}),e.jsx(Gn,{width:"10px",height:"100%"}),e.jsx(v,{margin:j?"0 0 0 6px":"0 0 0 18px",padding:j?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Ut,{children:"Total Staked"}),e.jsxs(Jn,{fontSize:j?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[X(J(a==null?void 0:a.totalStakedAmount))," PUSH"]})]}):e.jsxs(ze,{padding:j?"0px":"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:j?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(m,{height:"12px",width:j?"65px":"100px}"})]})})]}),e.jsx(S,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:a?e.jsxs(e.Fragment,{children:[e.jsx(It,{children:"Current Epoch"}),e.jsx(It,{children:a==null?void 0:a.currentEpochNumber})]}):e.jsx(ze,{padding:"5px 0px 0 15px",children:e.jsx(m,{height:"12px",width:"124px"})})}),n?e.jsxs(v,{children:[e.jsxs(S,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Je,{children:["User Deposit",e.jsx(Ye,{children:e.jsx(q,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(re,{src:me,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ke,{children:[" ",X(J(n==null?void 0:n.userStaked))," PUSH"]})]}),e.jsxs(S,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Je,{children:["Rewards Claimed",e.jsx(Ye,{children:e.jsx(q,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(re,{src:me,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ke,{children:[" ",X((n==null?void 0:n.claimedReward).toFixed(2))," PUSH"]})]}),e.jsxs(S,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Je,{children:["Current Epoch Reward",e.jsx(Ye,{children:e.jsx(q,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(re,{src:me,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ke,{children:[" ",X((n==null?void 0:n.potentialReward).toFixed(2))," PUSH"]})]}),e.jsxs(S,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Je,{children:["Available for Claiming",e.jsx(Ye,{children:e.jsx(q,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(re,{src:me,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ke,{children:[" ",X((n==null?void 0:n.availableRewards).toFixed(2))," PUSH"]})]})]}):e.jsxs(ke,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(S,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(S,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(S,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(S,{justifyContent:"space-between",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]})]})]}),e.jsx(v,{padding:j?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx(le,{variant:"primary",size:"medium",onClick:z,children:"Stake $PUSH"})}),e.jsxs(Yn,{children:[(a==null?void 0:a.currentEpochNumber)<=2?e.jsx(Ft,{ToolTipTitle:"You can unstake once epoch 2 ends.",ButtonTitle:"Unstake PUSH"}):J(n==null?void 0:n.userStaked)==0||g!==null?e.jsx(Ft,{ToolTipTitle:g||"Nothing to unstake, Stake First",ButtonTitle:"Unstake PUSH"}):e.jsx(le,{variant:"outline",size:"medium",onClick:K,children:r?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:b.activeButtonText,title:"Unstaking",titleColor:b.activeButtonText}):"Unstake $PUSH"}),(n==null?void 0:n.availableRewards)===0?e.jsx(q,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,left:"40px",ToolTipWidth:"10rem",children:e.jsx(le,{size:"medium",disabled:!0,children:p?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Claim Rewards"})}):e.jsx(le,{variant:"outline",size:"medium",onClick:w,children:p?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:b.activeButtonText,title:"Claiming",titleColor:b.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(ze,{width:"100%",children:[e.jsx(m,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(m,{height:"49px",width:"100%"})]})})]})},Ft=n=>e.jsx(q,{error:!0,ToolTipTitle:n.ToolTipTitle,ToolTipWidth:"16rem",bottom:"-30px",children:e.jsx(le,{size:"medium",disabled:!0,children:n.ButtonTitle})}),Vn=()=>{const[n,t]=u.useState(!1),a=()=>t(!1),o=u.useRef(null);return Wt(o,()=>a()),e.jsxs(Bn,{ref:o,children:[e.jsx(re,{onClick:()=>t(!n),src:me,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}}),n&&e.jsx(On,{id:"channel",children:e.jsx(Tt,{title:"",body:"Push Fee Pool APR distributes yield farming rewards + fee earned by protocol. More Info "})})]})},Bn=c.div`
  width: 34%;
  width: 100%;
  min-width: none;
  max-width: none;
  display: flex;
  flex: 1;
  height: fit-content;
  position: relative;
  @media ${tt.tablet} {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`,On=c.div`
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
`,_n=c(De)`
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
`,Wn=c($)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`,$n=c.div`
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
`,Ut=c.p`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Hn=c(S)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,Gn=c.div`
  width: 1px;
  height: 100%;
  background: ${n=>n.theme.stakingBorder};
`,Je=c.div`
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
`,Jn=c($)`
  color: ${n=>n.theme.stakingSecondaryText};
`,It=c($t)`
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
`,Ye=c(Te)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,Ke=c($)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Yn=c.div`
  display: flex;
  margin: 15px 0px 0px 0px;
  gap: var(--s3);
`,ze=c(ke)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,Kn=({setActiveTab:n})=>{const{provider:t,account:a,chainId:o}=Pe(),[s,i]=u.useState(),[r,l]=u.useState(),[p,h]=u.useState(),[g,x]=u.useState(),[M,F]=u.useState(),[L,O]=u.useState(null),[Y,_]=u.useState(null),[ee,U]=u.useState(null),[ie,G]=u.useState(null),[W,b]=u.useState(null),D=t==null?void 0:t.getSigner(a),I=u.useCallback(async()=>{const z=await Ce.getInstance().getPoolStats(t);O({...z})},[r,s,g,p,M,t]),w=u.useCallback(async()=>{const z=await Ce.getInstance().getPoolStats(t),ne=await Ce.getInstance().getLPPoolStats(z);_({...ne})},[r,s,g,p,M,t]),R=u.useCallback(async()=>{},[]),K=u.useCallback(async()=>{const z=await Ce.getInstance().getUserDataLP();U({...z})},[r,s,g,p,M]),we=u.useCallback(async()=>{const[z,ne]=await Ce.getInstance().getUserDataPUSH(t);b({...z}),G({...ne})},[r,s,g,p,M,t]);return u.useEffect(()=>{if(o!==Q.coreContractChain&&o!==Q.mainnetCoreContractChain)return;_(null),U(null),b(null),G(null);let z=new k(d.stakingV2,A.stakingV2,D),ne=new k(d.pushToken,A.pushToken,D),fe=new k(d.pushCoreV2,A.pushCoreV2,D),j=new k(d.yieldFarmLP,A.yieldFarming,D),f=new k(d.uniswapV2Router02,A.uniswapV2Router02,D);if(l(z),i(ne),x(fe),h(j),F(f),D&&a){var T=t==null?void 0:t.getSigner(a);let P=new k(d.stakingV2,A.stakingV2,T),C=new k(d.pushToken,A.pushToken,T),E=new k(d.pushCoreV2,A.pushCoreV2,T),V=new k(d.yieldFarmLP,A.yieldFarming,T),B=new k(d.uniswapV2Router02,A.uniswapV2Router02,T);l(P),i(C),x(E),h(V),F(B)}Ce.getInstance().init(a,z,ne,fe,j,f),I(),K(),w(),we()},[a,o]),e.jsxs(e.Fragment,{children:[e.jsx(jt,{logo:"announcement",title:"New V2 Pools are now Live! Stake or migrate now.",body:"Users who were part of the previous Push staking program, need to migrate to new pools to continue earning rewards. Click",setActiveTab:n}),e.jsx(yn,{getLpPoolStats:w,poolStats:L,setPoolStats:O}),e.jsx(xn,{poolStats:L}),e.jsxs(qn,{children:[e.jsx(Dn,{userDataPush:ie,getUserDataPush:we,PUSHPoolstats:W,getPUSHPoolStats:R}),e.jsx(An,{lpPoolStats:Y,userDataLP:ee,getLpPoolStats:w,getUserDataLP:K})]})]})},qn=c(S)`
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`,Xn=({onClose:n})=>{const{chainId:t,switchChain:a}=Pe(),o=()=>{const s=Q.allowedNetworks[0];t!==1&&t!==11155111&&(console.info("Current Chain ID ",t),console.info("Chain Id to pass",s),a(Q.coreContractChain))};return u.useEffect(()=>{(t===Q.coreContractChain||t===Q.mainnetCoreContractChain)&&n()},[t]),e.jsxs(Zn,{children:[e.jsx(gt,{style:{cursor:"pointer",alignSelf:"end"}}),e.jsxs(Qn,{children:[e.jsx(ea,{children:"Unsupported Network"}),e.jsxs(ta,{children:["Push Yield Farm V2 is only live on Ethereum Chain.",e.jsx("br",{}),"Kindly switch to Ethereum"]})]}),e.jsx(na,{children:e.jsx(le,{onClick:o,variant:"primary",size:"large",children:"Switch Network"})})]})},Zn=c(v)`
  padding: 32px 36px;
  width: 445px;
`,Qn=c(v)`
  font-family: FK Grotesk Neu;
  font-style: normal;
  line-height: 141%; /* 39.48px */
  letter-spacing: normal;
`,ea=c.div`
  font-size: 28px;
  font-weight: 500;
  color: ${n=>n.theme.stakingSecondaryText};
`,ta=c.div`
  color: ${n=>n.theme.activeButtonText};
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 24px 0;
`,na=c.div``;Q.coreContractChain;let Nt,Lt,zt,ht,Dt,Vt;Nt=()=>{ha.pageview("/yield");const[n,t]=u.useState(0),[a,o]=u.useState(!1),{account:s,chainId:i,switchChain:r}=Pe(),l=()=>{const x=Q.allowedNetworks[0];i!==1&&i!==5&&r(x)};u.useEffect(()=>{i!==1&&i!==11155111&&(h(),l())},[i]);const{isModalOpen:p,showModal:h,ModalComponent:g}=Qe();return e.jsxs(Lt,{children:[e.jsx(g,{InnerComponent:Xn,onConfirm:()=>{},modalPadding:"0px",modalPosition:et.ON_PARENT}),e.jsxs(zt,{children:[e.jsx(ht,{isActive:!n,onClick:()=>{o(!0),t(0)},children:"Yield Farming V2"}),e.jsxs(ht,{isActive:n,onClick:()=>{o(!1),t(1)},children:["Yield Farming V1 ",e.jsx(Dt,{children:"Deprecated"})]})]}),n===0&&e.jsx(Kn,{setActiveTab:t}),n===1&&e.jsx(un,{setActiveTab:t})]})},Lt=c(De)`
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
    100% - ${nt.MINI_MODULES.DESKTOP.RIGHT} - ${nt.MINI_MODULES.DESKTOP.LEFT} -
      ${xe.ADJUSTMENTS.PADDING.BIG} - ${xe.ADJUSTMENTS.PADDING.BIG}
  );
  gap: 16px;
  padding: 24px;

  margin: ${xe.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  
  @media ${tt.laptop} {
    margin: ${xe.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${tt.tablet} {
    width: calc(
      100% - ${nt.MINI_MODULES.TABLET.RIGHT} - ${nt.MINI_MODULES.TABLET.LEFT} -
        ${xe.ADJUSTMENTS.PADDING.DEFAULT} - ${xe.ADJUSTMENTS.PADDING.DEFAULT}
    );
    margin: ${xe.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding:16px;
  }

  @media ${tt.mobileL} {
    margin: ${xe.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    border: ${xe.ADJUSTMENTS.RADIUS.LARGE};
    width: 100%;
    padding: ${xe.ADJUSTMENTS.PADDING.DEFAULT};
`,zt=c(S)`
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
`,ht=c.div`
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
`,Dt=c(Te)`
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
`,Jt=()=>e.jsx(Vt,{children:e.jsx(Nt,{})}),Vt=c(De)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{ma as __tla,Jt as default};
