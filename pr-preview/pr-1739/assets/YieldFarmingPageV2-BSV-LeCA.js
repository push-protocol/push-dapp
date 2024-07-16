var ia=Object.defineProperty;var sa=(je,Se,Re)=>Se in je?ia(je,Se,{enumerable:!0,configurable:!0,writable:!0,value:Re}):je[Se]=Re;var I=(je,Se,Re)=>sa(je,typeof Se!="symbol"?Se+"":Se,Re);import{dW as y,dZ as d,z as Q,q as c,d3 as M,fe as O,m as e,fy as oa,fr as Vt,S as ze,d5 as we,g8 as ra,et as b,dv as xt,g9 as Ce,x as ke,r as u,de as Bt,eg as _t,er as Ve,X as Je,fq as ve,ga as m,dr as pe,d1 as Ze,dj as ue,dk as he,dY as A,dX as v,eI as xe,eu as $,es as Ot,R as Xe,gb as la,dV as $t,gc as pa,dl as da,du as Wt,ev as mt,gd as ca,db as de,ge as ua,d$ as Ht,dw as Qe,dx as et,dA as Gt,c_ as me,dB as Kt,d0 as tt,c$ as nt,d2 as ha,__tla as xa}from"./index-woVYzpj2.js";let Yt,ma=Promise.all([(()=>{try{return xa}catch{}})()]).then(async()=>{const je=y.from(1).mul(y.from(10).pow(y.from(18))),Se=3e4,Re=35e3,gt=n=>n.mul(y.from(10).pow(y.from(18))),Me=n=>n.div(y.from(10).pow(y.from(10))).toNumber()/1e8,Pe=class Pe{constructor(){I(this,"state",{account:null,signer:null,staking:null,yieldFarmingPUSH:null,yieldFarmingLP:null,rewardForCurrentEpochPush:null,rewardForCurrentEpochLP:null,genesisEpochAmountPUSH:Se,deprecationPerEpochPUSH:100,genesisEpochAmountLP:Re,deprecationPerEpochLP:100,uniswapV2Router02:null});I(this,"init",(t,a,o,s,i,r)=>{this.state.account=t,this.state.pushToken=a,this.state.staking=o,this.state.yieldFarmingPUSH=s,this.state.yieldFarmingLP=i,this.state.uniswapV2Router02=r});I(this,"getPoolStats",()=>new Promise(async(t,a)=>{const o=await this.state.yieldFarmingPUSH.getCurrentEpoch(),s=await this.state.uniswapV2Router02.getAmountsOut(je.toString(),[d.pushToken,d.WETHAddress,d.USDTAddress]);let i;Q.coreContractChain===42||Q.coreContractChain===5?i=s[s.length-1].div(1e6).toNumber():i=s[s.length-1].toNumber()/1e6,console.debug("Push PRice",i);const r=Me(await this.state.pushToken.balanceOf(d.uniV2LPToken)),l=Me(await this.state.pushToken.attach(d.WETHAddress).balanceOf(d.uniV2LPToken)),p=await this.state.uniswapV2Router02.getAmountsOut(je.toString(),[d.WETHAddress,d.USDTAddress]);let h;Q.coreContractChain===42||Q.coreContractChain===5?h=Me(p[p.length-1]):h=p[p.length-1].toNumber()/1e6,console.debug("Eth Price",h);const g=Me(await this.state.pushToken.attach(d.uniV2LPToken).totalSupply()),x=(r*i+l*h)/g/i;t({currentEpoch:o,lpToPushRatio:x})}));I(this,"getPUSHPoolStats",async()=>new Promise(async(t,a)=>{const o=this.state.yieldFarmingPUSH;let s=await o.NR_OF_EPOCHS();const i=await o.getCurrentEpoch();s=s.toString()>i.toString()?i:s;const r=gt(y.from(this.state.genesisEpochAmountPUSH)),l=gt(y.from(this.state.deprecationPerEpochPUSH)),p=this.calcTotalAmountPerEpoch(r,s,l);this.state.rewardForCurrentEpochPush=p;const h=await o.getPoolSize(i.add(1));t({currentEpochPUSH:i,totalEpochPUSH:s,poolBalance:h})}));I(this,"getLPPoolStats",async t=>new Promise(async(a,o)=>{const s=this.state.yieldFarmingLP;let i=await s.NR_OF_EPOCHS();const r=await s.getCurrentEpoch();i=i.toString()>r.toString()?r:i;const l=await s.getPoolSize(r.add(1));a({currentEpochPUSH:r,totalEpochPUSH:i,poolBalance:l})}));I(this,"getUserData",async t=>new Promise(async(a,o)=>{if(this.state.account){const s=await t.getCurrentEpoch().then(F=>y.from(Math.min(F,100))),i=await t.getCurrentEpoch(),r=await t.getEpochStake(this.state.account,i.add(1)),l=(await t.lastEpochIdHarvested(this.state.account)).toNumber();let p=this.getAccumulatedReward(s,t),h=this.getTotalAvailableRewards(l,s,t),[g,x]=await Promise.all([p,h]);a({epochStakeNext:r,totalAccumulatedReward:g,totalAvailableReward:x})}}));I(this,"getTotalAvailableRewards",async(t,a,o)=>{let s=[];for(var i=t+1;i<=a.toNumber();i++){const l=this.calculateUserEpochReward(i,o);s.push(l)}let r=(await Promise.all(s)).reduce((l,p)=>l+p,0);return r=r.toFixed(2),r});I(this,"getAccumulatedReward",async(t,a)=>{let o=[];for(var s=0;s<=t.toNumber();s++){const r=this.calculateUserEpochReward(s,a);o.push(r)}let i=(await Promise.all(o)).reduce((r,l)=>r+l,0);return i=i.toFixed(2),i});I(this,"calcTotalAmountPerEpoch",(t,a,o)=>t.sub(a.mul(o)));I(this,"calculateUserEpochReward",async(t,a)=>{const o=Me(await a.getEpochStake(this.state.account,t)),s=Me(await a.getPoolSize(t));let i=0;if(s>0)if(a.address==d.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,p=r-l*t;i=o/s*p}else{const r=this.state.genesisEpochAmountPUSH,l=this.state.deprecationPerEpochPUSH,p=r-l*t;i=o/s*p}return i})}static getInstance(){return Pe.instance||(Pe.instance=new Pe),Pe.instance}};I(Pe,"instance",null);let be=Pe;const Z=n=>e.jsx(oa,{wrapperProps:{width:"100%",maxWidth:"none",minWidth:"auto",display:"flex",flex:"1",margin:n.margin?n.margin:"0"},placementProps:{background:"none",bottom:n.bottom?n.bottom:"25px",left:n.error?"40px":"0px"},tooltipContent:n.error?e.jsx(qt,{title:n.ToolTipTitle,width:n.ToolTipWidth}):e.jsx(yt,{title:n.ToolTipTitle,body:n.ToolTipBody}),children:n.children}),qt=n=>e.jsx(M,{width:n.width,background:"#131313",justifyContent:"flex-start",border:"1px solid rgba(173, 176, 190, 0.2)",alignItems:"flex-start",padding:"0.75rem 0.75rem 0.75rem 1rem",boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.05)",color:"#FFF",borderRadius:"2px 12px 12px 12px",children:e.jsx(O,{color:"inherit",children:n.title})}),yt=({title:n,body:t})=>e.jsxs(Jt,{children:[e.jsx(Zt,{children:n}),e.jsxs(Xt,{children:[t,"  "," ",t.includes("Push Fee Pool APR")&&e.jsx(Vt,{cursor:"pointer",href:"https://medium.com/push-protocol/new-push-yield-farming-rewards-full-details-4a9ff473226d",target:"_blank",children:"here"})]})]}),Jt=c(M)`
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


`,Zt=c(O)`
  color: ${n=>n.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`,Xt=c(O)`
  color: ${n=>n.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
  text-align:left;
`,ge="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15284_45077)'%3e%3cpath%20d='M8.5%2014.5C11.8137%2014.5%2014.5%2011.8137%2014.5%208.5C14.5%205.18629%2011.8137%202.5%208.5%202.5C5.18629%202.5%202.5%205.18629%202.5%208.5C2.5%2011.8137%205.18629%2014.5%208.5%2014.5Z'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%208C8.13261%208%208.25979%208.05268%208.35355%208.14645C8.44732%208.24021%208.5%208.36739%208.5%208.5V11C8.5%2011.1326%208.55268%2011.2598%208.64645%2011.3536C8.74021%2011.4473%208.86739%2011.5%209%2011.5'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.25%206.5C8.66421%206.5%209%206.16421%209%205.75C9%205.33579%208.66421%205%208.25%205C7.83579%205%207.5%205.33579%207.5%205.75C7.5%206.16421%207.83579%206.5%208.25%206.5Z'%20fill='%23797D8F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15284_45077'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",G=n=>n.div(y.from(10).pow(18)).toString(),X=n=>{var t;return(t=n==null?void 0:n.toString())==null?void 0:t.replace(/\B(?=(\d{3})+(?!\d))/g,",")},Qt=function(n,t=null){return y.from(n)},en=function(n){return n.div(Qt(10).pow(18))},Tt=({poolName:n,userData:t,PoolStats:a,poolAddress:o,getUserData:s,tokenAddress:i,setActiveTab:r})=>{const{account:l,provider:p}=ke(),[h,g]=u.useState(!1),[x,F]=u.useState(!1),[U,E]=u.useState(!1),[z,V]=u.useState(null),[K,te]=u.useState(null),[Y,re]=u.useState(null),{userPushSDKInstance:W}=Bt(S=>S.user),{handleConnectWallet:N}=u.useContext(_t),[k,R]=u.useState(0),f=Ve(),j=Je(),ee=async()=>{if(!W.signer){N();return}if(!x){if((t==null?void 0:t.totalAvailableReward)==0){re("No Rewards to Claim"),F(!1);return}F(!0);var S=p.getSigner(l);new A(o,v.yieldFarming,S).massHarvest().then(async T=>{f.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await p.waitForTransaction(T.hash),f.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:w=>e.jsx(xe,{size:w,color:"green"})}),s(),F(!1)}catch(w){f.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${w.name}+ ")`,toastType:"ERROR",getToastIcon:D=>e.jsx($,{size:D,color:"red"})}),F(!1)}}).catch(T=>{f.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:w=>e.jsx($,{size:w,color:"red"})}),F(!1)})}},q=async()=>{if(!W.signer){N();return}if(h)return;g(!0);const S=G(t.epochStakeNext);if(S==0){te("Nothing to unstake, Stake Now in new reward program."),g(!1);return}var T=p.getSigner(l);let w=new A(d.staking,v.staking,T);await w.balanceOf(l,i),w.withdraw(i,y.from(S).mul(y.from(10).pow(18))).then(async D=>{f.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await p.waitForTransaction(D.hash),f.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:C=>e.jsx(xe,{size:C,color:"green"})}),g(!1),s()}catch(C){console.error("Error",C),f.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${C.name}+ ")`,toastType:"ERROR",getToastIcon:P=>e.jsx($,{size:P,color:"red"})}),g(!1)}}).catch(D=>{f.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:C=>e.jsx($,{size:C,color:"red"})}),g(!1)})},fe=async()=>{if(!W.signer){N();return}if(U)return;let S=3;const T=G(t.epochStakeNext);if(T==0){f.showMessageToast({toastTitle:"Error",toastMessage:"Nothing to Withdraw!",toastType:"ERROR",getToastIcon:H=>e.jsx($,{size:H,color:"red"})}),E(!1),V(null);return}var w=p.getSigner(l);let D=new A(d.staking,v.staking,w);const C=i===d.pushToken?d.pushCoreV2:d.stakingV2;var P=new A(i,v.pushToken,w);let B=await P.allowance(l,C),J=G(B);parseInt(J)>=parseInt(T)?(S=2,R(50)):(S=3,R(33)),E(!0),V(`Withdrawing 1/${S}`);let se;se=D.withdraw(i,y.from(T).mul(y.from(10).pow(18))),se.then(async H=>{if(f.showLoaderToast({loaderMessage:"Withdrawing! Please Wait..."}),await p.waitForTransaction(H.hash),f.showMessageToast({toastTitle:"Success",toastMessage:"Successfully withdrawn!",toastType:"SUCCESS",getToastIcon:le=>e.jsx(xe,{size:le,color:"green"})}),i===d.pushToken){var ce=new A(i,v.pushToken,w);let le=await ce.allowance(l,d.pushCoreV2),Te=G(le);parseInt(Te)>=parseInt(T)?ne(H,T,S):(H=ce.approve(d.pushCoreV2,y.from(T).mul(y.from(10).pow(18))),V(`Approving 2/${S}`),R(66),H.then(async ae=>{f.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await p.waitForTransaction(ae.hash),f.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:oe=>e.jsx(xe,{size:oe,color:"green"})}),ne(ae,T,S)}).catch(ae=>{console.error("Error in approving 2",ae),f.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:oe=>e.jsx($,{size:oe,color:"red"})}),E(!1),V(null),s(),R(0)}))}else{var ce=new A(i,v.pushToken,w);let Te=await ce.allowance(l,d.stakingV2),ae=G(Te);parseInt(ae)>=parseInt(T)?L(H,T,S):(H=ce.approve(d.stakingV2,y.from(T).mul(y.from(10).pow(18))),V(`Approving 2/${S}`),R(66),H.then(async oe=>{f.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await p.waitForTransaction(oe.hash),f.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:De=>e.jsx(xe,{size:De,color:"green"})}),L(oe,T,S)}).catch(oe=>{console.error("Error in approving",oe),f.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:De=>e.jsx($,{size:De,color:"red"})}),E(!1),V(null),s(),R(0)}))}}).catch(H=>{console.error("Error in withdrawing: ",H),f.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Withdraw!",toastType:"ERROR",getToastIcon:ce=>e.jsx($,{size:ce,color:"red"})}),E(!1),V(null),R(0)})},L=async(S,T,w)=>{if(!W.signer){N();return}var D=p.getSigner(l),C=new A(d.stakingV2,v.stakingV2,D);V(`Staking ${w}/${w}`),R(100),S=C.deposit(i,y.from(T).mul(y.from(10).pow(18))),S.then(async P=>{f.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await p.waitForTransaction(P.hash),f.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!Successfully Deposited the UNI-V2 Token to V2 ",toastType:"SUCCESS",getToastIcon:B=>e.jsx(xe,{size:B,color:"green"})}),E(!1),s(),V(null),r(0)}).catch(P=>{console.error("Error in depositing: ",P),f.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit the Amount",toastType:"ERROR",getToastIcon:B=>e.jsx($,{size:B,color:"red"})}),E(!1),s(),V(null),R(0)})},ne=async(S,T,w)=>{if(!W.signer){N();return}var D=p.getSigner(l);let C=new A(d.pushCoreV2,v.pushCoreV2,D);V(`Staking ${w}/${w}`),R(100),S=C.stake(y.from(T).mul(y.from(10).pow(18))),S.then(async P=>{f.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await p.waitForTransaction(P.hash),f.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Successfully Deposited the Push Token to V2 ",toastType:"SUCCESS",getToastIcon:B=>e.jsx(xe,{size:B,color:"green"})}),E(!1),s(),V(null),r(0)}).catch(P=>{console.error("Error in depositing: ",P),f.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit Push Token",toastType:"ERROR",getToastIcon:B=>e.jsx($,{size:B,color:"red"})}),E(!1),s(),V(null),R(0)})};u.useEffect(()=>{re(null),te(null)},[l]);const _=ve(600);return e.jsxs(tn,{margin:n==="UNI-V2"?" 10px 0 10px 10px ":"  10px 10px 10px 0",children:[e.jsx(M,{margin:"0px 0px 20px 0",children:a?e.jsxs(e.Fragment,{children:[e.jsxs(nn,{children:[n==="UNI-V2"?"Uniswap V2 Staking Pool":"PUSH Staking Pool ",e.jsx(an,{children:"Deprecated"})]}),e.jsxs(at,{children:["Current APR"," ",e.jsx(we,{color:"#D53A94",fontWeight:"600",children:"0%"})]})]}):e.jsxs(Ue,{padding:"15px 15px 0 15px",children:[e.jsx(m,{height:"15px",width:"234px",margin:"0 0 10px 0"}),e.jsx(m,{height:"15px",width:"112px"})]})}),e.jsxs(M,{children:[e.jsxs(rn,{border:`1px solid ${j.stakingBorder}`,borderRadius:"16px",children:[e.jsx(M,{margin:_?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:_?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(at,{children:"Current Reward"}),e.jsx(O,{fontSize:_?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:"0 PUSH"})]}):e.jsxs(Ue,{padding:_?"0px":"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:_?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(m,{height:"12px",width:_?"65px":"100px}"})]})}),e.jsx(sn,{width:"10px",height:"100%"}),e.jsx(M,{margin:_?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:_?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(at,{children:"Total Staked"}),e.jsxs(on,{fontSize:_?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[X(G(a==null?void 0:a.poolBalance))," ",n=="UNI-V2"?"UNI-V2":"PUSH"]})]}):e.jsxs(Ue,{padding:_?"0px":"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:_?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(m,{height:"12px",width:_?"65px":"100px}"})]})})]}),e.jsx(b,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:a?e.jsxs(e.Fragment,{children:[e.jsx(wt,{padding:"0px 5px 0px 0px",children:"Current Epoch"}),e.jsx(wt,{margin:"0 0 0 5px",children:"100 / 100"})]}):e.jsx(Ue,{padding:"6px 0px 0 15px",children:e.jsx(m,{height:"17px",width:"124px"})})}),e.jsx(ln,{children:t?e.jsxs(M,{children:[e.jsxs(b,{justifyContent:"space-between",margin:_?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Be,{children:["User Deposit",e.jsx(_e,{children:e.jsx(Z,{ToolTipTitle:"User Deposited",ToolTipBody:`Amount of ${n} Token User Staked`,children:e.jsx(pe,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Oe,{children:[" ",G(t==null?void 0:t.epochStakeNext)," ",n=="UNI-V2"?"UNI-V2":"PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:_?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Be,{children:["Rewards Claimed",e.jsx(_e,{children:e.jsx(Z,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(pe,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Oe,{children:[" ",X(((t==null?void 0:t.totalAccumulatedReward)-(t==null?void 0:t.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:_?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Be,{children:["Current Epoch Reward",e.jsx(_e,{children:e.jsx(Z,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(pe,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsx(Oe,{children:"0 PUSH"})]}),e.jsxs(b,{justifyContent:"space-between",margin:_?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Be,{children:["Available for Claiming",e.jsx(_e,{children:e.jsx(Z,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(pe,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Oe,{children:[X(t==null?void 0:t.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(Ce,{padding:"16px 15px 16px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]})]})})]}),e.jsx(pn,{padding:_?"0px ":"0px 14px",margin:"24px 0px 0px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(ft,{children:G(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(Z,{error:!0,ToolTipTitle:"Nothing to Withdraw, so you cannot Migrate.",ToolTipWidth:"16rem",bottom:"-50px",margin:"0 0 15px 0",children:e.jsx(Fe,{border:"none",cursor:"default",background:j.disableButtonBg,color:j.disabledButtonText,children:e.jsx(St,{children:!U&&z==null&&e.jsxs(Ze,{color:j.disabledButtonText,weight:"400",cursor:"default",children:["Migrate to ",n==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]})})})}):e.jsxs(dn,{onClick:fe,children:[e.jsx(cn,{style:{width:`${k}%`}}),e.jsxs(St,{children:[!U&&z==null&&e.jsxs(Ze,{color:"#FFF",weight:"400",cursor:"pointer",children:["Migrate to ",n==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]}),U&&z!=null&&e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:"#FFF",title:z,titleColor:"#FFF"})]})]})}),e.jsxs(ft,{children:[G(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(Z,{error:!0,ToolTipTitle:K||"Nothing to unstake, Stake First",ToolTipWidth:"16rem",margin:"0 10px 0 0",bottom:"-30px",children:e.jsx(Fe,{border:"none",cursor:"default",background:j.disableButtonBg,color:j.disabledButtonText,children:h?e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:j.activeButtonText,title:"Claiming",titleColor:j.activeButtonText}):` Unstake ${n}`})}):e.jsx(Fe,{border:`1px solid ${j.activeButtonText}`,background:"transparent",color:j.activeButtonText,cursor:"pointer",margin:"0 10px 0 0",onClick:q,children:h?e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:j.activeButtonText,title:"Unstaking",titleColor:j.activeButtonText}):` Unstake ${n}`}),(t==null?void 0:t.totalAvailableReward)==="0.00"?e.jsx(Z,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,ToolTipWidth:"10rem",children:e.jsx(Fe,{border:"none",cursor:"default",background:j.disableButtonBg,color:j.disabledButtonText,children:x?e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:j.activeButtonText,title:"Claiming",titleColor:j.activeButtonText}):" Claim Rewards"})}):e.jsx(Fe,{border:`1px solid ${j.activeButtonText}`,background:"transparent",color:j.activeButtonText,cursor:"pointer",onClick:ee,children:x?e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:j.activeButtonText,title:"Claiming",titleColor:j.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Ue,{width:"100%",children:[e.jsx(m,{height:"49px",width:"100%",margin:"0 0 11px 0"}),e.jsx(m,{height:"49px",width:"100%"})]})})]})},tn=c(ze)`
  border: 1px solid ${n=>n.theme.stakingBorder};
  border-radius: 24px;
  padding: 24px 19px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  // min-height: 587px;
  color: ${n=>n.theme.stakingPrimaryText};
`,nn=c(O)`
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
`,an=c(we)`
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
`,sn=c.div`
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
`,on=c(O)`
  color: ${n=>n.theme.stakingSecondaryText};
`,wt=c(ra)`
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
`,_e=c(we)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,rn=c(b)`
  max-height: 108px;
  min-height: 108px;
  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,Oe=c(O)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,ln=c(M)`
  min-height: 150px;
`,pn=c(M)`
  // min-height:132px;
`,ft=c.div`
  display: flex;
  width: 100%;
  // margin:15px 0px 0px 0px;
`;c(xt)`
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
`;const dn=c(xt)`
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
`,cn=c.div`
  min-height: 37px;
  background-color: rgb(183, 46, 126);
  transition: width 0.5s ease 0s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,St=c.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #eee;
`,Fe=c(xt)`
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
`,Ue=c(Ce)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,jt=({logo:n,title:t,body:a,setActiveTab:o})=>{const s=ve(600);return e.jsxs(b,{style:{color:n==="announcement"?"white":"#333"},justifyContent:"stretch",padding:s?"12px":"16px",background:n==="announcement"?"linear-gradient(90deg, #121315 -2.55%, #2A2A39 32.62%, #8E317A 68.34%, #121315 102.97%)":"#FFF7DA",borderRadius:"16px",children:[e.jsx(pe,{width:n==="announcement"?"60px":"32px",height:n==="announcement"?"60px":"32px",src:Ot(`svg/${n}.svg`),alt:"Announcement Logo"}),e.jsxs(M,{margin:n==="announcement"?"0 0 0 16px":"0 0 0 13px",justifyContent:"center",alignItems:"flex-start",gap:n==="announcement"?"4px":"0px",children:[e.jsx(O,{color:"inherit",fontSize:s?"20px":"24px",textAlign:"left",fontWeight:500,children:t}),e.jsxs(O,{color:"inherit",fontSize:s?"12px":"16px",textAlign:"left",fontWeight:500,children:[a," ",t.includes("New V2")&&e.jsxs(e.Fragment,{children:[e.jsx(un,{onClick:()=>o(1),children:"here"})," to migrate."]})]})]})]})},un=c(Vt)`
  cursor: pointer;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;Q.coreContractChain;const hn=({setActiveTab:n})=>{const{account:t,provider:a}=ke(),[o,s]=u.useState(null),[i,r]=u.useState(null),[l,p]=u.useState(null),[h,g]=u.useState(null),[x,F]=u.useState(null),[U,E]=u.useState(null),[z,V]=u.useState(null),[K,te]=u.useState(null),[Y,re]=u.useState(null),[W,N]=u.useState(null),k=a==null?void 0:a.getSigner(t),R=u.useCallback(async()=>{const L=await be.getInstance().getPoolStats();E({...L})},[o,i,l,h,x]),f=u.useCallback(async()=>{const L=await be.getInstance().getPUSHPoolStats();V({...L})},[o,i,l,h,x]),j=u.useCallback(async L=>{const ne=await be.getInstance().getLPPoolStats(L);te({...ne})},[o,i,l,h,x]),ee=u.useCallback(async()=>{const L=await be.getInstance().getUserData(h);re({...L})},[h]),q=u.useCallback(async()=>{const L=await be.getInstance().getUserData(l);N({...L})},[l]);u.useEffect(()=>{let L=new A(d.pushToken,v.pushToken,k),ne=new A(d.staking,v.staking,k),_=new A(d.depYieldFarmPUSH,v.yieldFarming,k),S=new A(d.depYieldFarmLP,v.yieldFarming,k),T=new A(d.uniswapV2Router02,v.uniswapV2Router02,k);if(s(L),r(ne),g(_),p(S),F(T),k&&t){var w=a.getSigner(t);let D=new A(d.pushToken,v.pushToken,w),C=new A(d.staking,v.staking,w),P=new A(d.depYieldFarmPUSH,v.yieldFarming,w),B=new A(d.depYieldFarmLP,v.yieldFarming,w),J=new A(d.uniswapV2Router02,v.uniswapV2Router02,w);s(D),r(C),g(P),p(B),F(J)}},[t]),u.useEffect(()=>{o!=null&&i!=null&&h!=null&&(be.getInstance().init(t,o,i,h,l,x),R())},[R]),u.useEffect(()=>{U&&fe(U)},[U]);const fe=async L=>{f(),j(L),ee(),q()};return e.jsxs(e.Fragment,{children:[e.jsx(jt,{logo:"WarningCircle",title:"This reward program (V1) has ended.",body:"To continue earning rewards please migrate to new pools.",setActiveTab:n}),e.jsxs(xn,{children:[e.jsx(Tt,{poolName:"PUSH",userData:Y,PoolStats:z,poolAddress:d.depYieldFarmPUSH,getUserData:ee,getPoolStats:f,tokenAddress:d.pushToken,setActiveTab:n}),e.jsx(Tt,{poolName:"UNI-V2",userData:W,PoolStats:K,poolAddress:d.depYieldFarmLP,getUserData:q,getPoolStats:j,tokenAddress:d.uniV2LPToken,setActiveTab:n})]})]})},xn=c(b)`
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
`,mn=({poolStats:n})=>{function t(o){return o==null?void 0:o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const a=ve(600);return e.jsx(gn,{justifyContent:"stretch",children:n?e.jsxs(e.Fragment,{children:[e.jsx(bt,{fontSize:a?"16px":"18px",textAlign:"left",fontWeight:600,children:"Push Price"}),e.jsxs(b,{gap:"5px",justifyContent:"flex-end",children:[e.jsxs(bt,{fontSize:a?"18px ":"24px",textAlign:"left",fontWeight:600,children:["$",t(n==null?void 0:n.pushPrice.toFixed(2))]}),e.jsx(pe,{width:"25px",height:a?"20px":"27px",src:Ot("svg/uniswapLogo.svg"),alt:"Uniswap Logo"})]})]}):e.jsxs(yn,{children:[e.jsx(m,{height:"12px",width:"135px",margin:"10px 0 10px 0"}),e.jsx(m,{height:"12px",width:"135px",margin:"10px 0 10px 0"})]})})},gn=c(b)`
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
`,bt=c(O)`
  color: ${n=>n.theme.stakingPrimaryText};
`,yn=c(Ce)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
  flex-direction: row;
  justify-content: inherit;
  flex: 1;
`,Tn=({getLpPoolStats:n,poolStats:t,setPoolStats:a})=>{const[o,s]=Xe.useState(""),[i,r]=Xe.useState(),l=()=>{const h=t.epochEndTime,g=new Date().getTime()+h*1e3;r(g)};Xe.useEffect(()=>{t&&l()},[t]);const p=()=>{if(t!=null&&t.epochEndTimestamp){t.epochEndTimestamp.toNumber();const h=new Date().getTime(),g=i-h;g<0&&(a(null),n());const x=Math.floor(g/(1e3*60*60*24)),F=Math.floor(g%(1e3*60*60*24)/(1e3*60*60)),U=Math.floor(g%(1e3*60*60)/(1e3*60)),E=Math.floor(g%(1e3*60)/1e3);s(`${x}D ${F}H ${U}M ${E}S`)}};return Xe.useEffect(()=>{const h=setTimeout(()=>{p()},1e3);return()=>clearTimeout(h)}),e.jsxs(wn,{children:[e.jsxs(st,{alignItems:"baseline",justifyContent:"center",background:"linear-gradient(0deg, #7ADDB3, #7ADDB3), #FFFFFF",children:[e.jsx(ot,{background:"radial-gradient(70% 90% at 40% 16.25%, #7CDCB4 2.6%, #7ADDB3 53.65%, #E888F8 85.42%, #F99DEA 100%)"}),t?e.jsx(e.Fragment,{children:e.jsxs(dt,{children:[e.jsx(rt,{children:"Total Value Locked"}),e.jsx(lt,{children:`$ ${X(t==null?void 0:t.totalValueLocked.toFixed(2))}`})]})}):e.jsx(it,{})]}),e.jsxs(st,{alignItems:"baseline",justifyContent:"center",background:"#F58DF8",children:[e.jsx(ot,{background:"radial-gradient(70% 90% at 40% 16.25%, #F58DF8 2.6%, #F47EF8 53.65%, #A17DEF 85.42%, #AE68F4 100%)"}),t?e.jsx(e.Fragment,{children:e.jsxs(dt,{children:[e.jsx(rt,{children:"Push Rewards Given"}),e.jsxs(pt,{justifyContent:"end",children:[e.jsx(lt,{children:X(Math.min(G(t==null?void 0:t.pushRewardsDistributed),G(t==null?void 0:t.totalDistributedAmount)))}),e.jsxs(we,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:["out of ",X(G(t==null?void 0:t.totalDistributedAmount))]})]})]})}):e.jsx(it,{})]}),e.jsxs(st,{alignItems:"baseline",justifyContent:"center",background:"#A17DEF",children:[e.jsx(ot,{background:"radial-gradient(70% 90% at 40% 16.25%, #A17DEF 2.6%, #9770ED 53.65%, #DF7EEF 85.42%, #F488E3 100%)"}),o?e.jsx(e.Fragment,{children:e.jsxs(dt,{children:[e.jsx(rt,{children:"Time Left"}),e.jsxs(pt,{justifyContent:"end",children:[e.jsx(lt,{children:o}),e.jsx(we,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:"until next epoch"})]})]})}):e.jsx(it,{})]})]})},it=()=>{const n=ve(1300);return e.jsxs(fn,{padding:"21px 15px",children:[e.jsx(m,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(m,{height:"26px;",width:n?"175px":"189px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(m,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"})]})},wn=c(b)`
  column-gap: 12px;

  @media (max-width: 992px) {
    flex-direction: column;
    row-gap: 12px;
  }
`,st=c(M)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`,ot=c(M)`
  position: absolute;
  width: 170px;
  height: 170px;
  right: 5px;
  top: -35px;
  border-radius: 50%;

  box-shadow: 0px 30px 50px rgba(240, 86, 254, 0.5);
  filter: blur(2.5px);
`,rt=c(we)`
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
`,lt=c(we)`
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
`,pt=c(M)`
  align-items: flex-start;
`,dt=c(pt)`
  padding: 20px 10px 20px 15px;
  // gap: 8px;
  justify-content: center;
`,fn=c(Ce)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  justify-content: center;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,ct=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"channelType",type:"uint8"},{indexed:!1,internalType:"bytes",name:"identity",type:"bytes"}],name:"AddChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!1,internalType:"bytes",name:"_subGraphData",type:"bytes"}],name:"AddSubGraph",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"oldBridge",type:"address"},{indexed:!0,internalType:"address",name:"newBridge",type:"address"}],name:"BridgeAddressUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"}],name:"ChannelBlocked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"_channel",type:"address"},{indexed:!1,internalType:"uint256",name:"totalNotifOptions",type:"uint256"},{indexed:!1,internalType:"string",name:"_notifSettings",type:"string"},{indexed:!1,internalType:"string",name:"_notifDescription",type:"string"}],name:"ChannelNotifcationSettingsAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"ChannelOwnershipTransfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"revoker",type:"address"}],name:"ChannelVerificationRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"verifier",type:"address"}],name:"ChannelVerified",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountClaimed",type:"uint256"}],name:"ChatIncentiveClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountRefunded",type:"uint256"}],name:"DeactivateChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"requestSender",type:"address"},{indexed:!1,internalType:"address",name:"requestReceiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amountForReqReceiver",type:"uint256"},{indexed:!1,internalType:"uint256",name:"feePoolAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"}],name:"IncentivizeChatReqReceived",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountDeposited",type:"uint256"}],name:"ReactivateChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"oldRelayer",type:"address"},{indexed:!0,internalType:"address",name:"newRelayer",type:"address"}],name:"RelayerAddressUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"rewardAmount",type:"uint256"}],name:"RewardsClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"rewardAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"fromEpoch",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tillEpoch",type:"uint256"}],name:"RewardsHarvested",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountStaked",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountRefunded",type:"uint256"}],name:"TimeBoundChannelDestroyed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountUnstaked",type:"uint256"}],name:"Unstaked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!1,internalType:"bytes",name:"identity",type:"bytes"}],name:"UpdateChannel",type:"event"},{inputs:[],name:"ADD_CHANNEL_MIN_FEES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"CHANNEL_POOL_FUNDS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"CREATE_CHANNEL_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DOMAIN_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"FEE_AMOUNT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MIN_POOL_CONTRIBUTION",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PROTOCOL_POOL_FEES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PUSH_TOKEN_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"REFERRAL_CODE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"UNISWAP_V2_ROUTER",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"WETH_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"aDaiAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_rewardAmount",type:"uint256"}],name:"addPoolFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"_subGraphData",type:"bytes"}],name:"addSubGraph",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_startIndex",type:"uint256"},{internalType:"uint256",name:"_endIndex",type:"uint256"},{internalType:"address[]",name:"_channelList",type:"address[]"}],name:"batchVerification",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channelAddress",type:"address"}],name:"blockChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"bridgeAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_epochId",type:"uint256"}],name:"calculateEpochRewards",outputs:[{internalType:"uint256",name:"rewards",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"celebUserFunds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"channelById",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channelNotifSettings",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channelUpdateCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channels",outputs:[{internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"channelType",type:"uint8"},{internalType:"uint8",name:"channelState",type:"uint8"},{internalType:"address",name:"verifiedBy",type:"address"},{internalType:"uint256",name:"poolContribution",type:"uint256"},{internalType:"uint256",name:"channelHistoricalZ",type:"uint256"},{internalType:"uint256",name:"channelFairShareCount",type:"uint256"},{internalType:"uint256",name:"channelLastUpdate",type:"uint256"},{internalType:"uint256",name:"channelStartBlock",type:"uint256"},{internalType:"uint256",name:"channelUpdateBlock",type:"uint256"},{internalType:"uint256",name:"channelWeight",type:"uint256"},{internalType:"uint256",name:"expiryTime",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"channelsCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"claimChatIncentives",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_notifOptions",type:"uint256"},{internalType:"string",name:"_notifSettings",type:"string"},{internalType:"string",name:"_notifDescription",type:"string"},{internalType:"uint256",name:"_amountDeposited",type:"uint256"}],name:"createChannelSettings",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"_channelType",type:"uint8"},{internalType:"bytes",name:"_identity",type:"bytes"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"uint256",name:"_channelExpiryTime",type:"uint256"}],name:"createChannelWithPUSH",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"daiAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tillEpoch",type:"uint256"}],name:"daoHarvestPaginated",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"deactivateChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channelAddress",type:"address"}],name:"destroyTimeBoundChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"epnsCommunicator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"epochDuration",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"epochRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"epochToTotalStakedWeight",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"genesisEpoch",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"getChannelVerfication",outputs:[{internalType:"uint8",name:"verificationStatus",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"governance",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupFairShareCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupHistoricalZ",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupLastUpdate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupNormalizedWeight",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"requestSender",type:"address"},{internalType:"address",name:"requestReceiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"vaa",type:"bytes"}],name:"handleChatRequestData",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"harvestAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_tillEpoch",type:"uint256"}],name:"harvestPaginated",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_pushChannelAdmin",type:"address"},{internalType:"address",name:"_pushTokenAddress",type:"address"},{internalType:"address",name:"_wethAddress",type:"address"},{internalType:"address",name:"_uniswapRouterAddress",type:"address"},{internalType:"address",name:"_lendingPoolProviderAddress",type:"address"},{internalType:"address",name:"_daiAddress",type:"address"},{internalType:"address",name:"_aDaiAddress",type:"address"},{internalType:"uint256",name:"_referralCode",type:"uint256"}],name:"initialize",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"initializeStake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"isMigrationComplete",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_from",type:"uint256"},{internalType:"uint256",name:"_to",type:"uint256"}],name:"lastEpochRelative",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lendingPoolProviderAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"pauseContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"previouslySetEpochRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"pushChannelAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"reactivateChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"relayerAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_bridge",type:"address"}],name:"setBridgeAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_commAddress",type:"address"}],name:"setEpnsCommunicatorAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newFees",type:"uint256"}],name:"setFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_governanceAddress",type:"address"}],name:"setGovernanceAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newFees",type:"uint256"}],name:"setMinChannelCreationFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newAmount",type:"uint256"}],name:"setMinPoolContribution",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_relayer",type:"address"}],name:"setRelayerAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalStakedAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_newAdmin",type:"address"}],name:"transferPushChannelAdminControl",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unPauseContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unstake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"unverifyChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"},{internalType:"bytes",name:"_newIdentity",type:"bytes"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"updateChannelMeta",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userFeesInfo",outputs:[{internalType:"uint256",name:"stakedAmount",type:"uint256"},{internalType:"uint256",name:"stakedWeight",type:"uint256"},{internalType:"uint256",name:"lastStakedBlock",type:"uint256"},{internalType:"uint256",name:"lastClaimedBlock",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"usersRewardsClaimed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"verifyChannel",outputs:[],stateMutability:"nonpayable",type:"function"}];class Et{static createInterface(){return new la(ct)}static connect(t,a){return new A(t,ct,a)}}I(Et,"abi",ct);const Ct={config:{SLOTS:{userFeesInfo:134}},epochDuration:21*7156},ye={toBN:n=>y.from(n),getCoreV2Contract:(n,t)=>Et.connect(t,n),lastEpochRelative:(n,t)=>Math.floor((t-n)/Ct.epochDuration+1),epochToUserStakedWeight:async(n,t,a,o)=>{const s=Ct.config.SLOTS.userFeesInfo,i=$t(["uint256","uint256"],[t,s]),r=y.from(i).add(4).toHexString(),l=$t(["uint256","uint256"],[a,r]),p=await n.getStorageAt(o,l);return y.from(p)},deepCopy(n){return JSON.parse(JSON.stringify(n))},getEmptyState(){return{currentEpoch:0,currentBlockNumber:0,genesisEpoch:0,epochRewards:[],lastEpochInitialized:0,lastTotalStakeEpochInitialized:0,epochToTotalStakedWeight:[],previouslySetEpochRewards:y.from(0),userFeesInfo:{epochToUserStakedWeight:[],lastClaimedBlock:y.from(0),lastStakedBlock:y.from(0),stakedAmount:y.from(0),stakedWeight:y.from(0)}}}};class kt{constructor(t,a){I(this,"STATE");I(this,"coreV2Contract");I(this,"userAddress");this.coreV2Contract=t,this.userAddress=a,this.STATE=ye.getEmptyState()}async initState(){const t=this.coreV2Contract,a=await t.provider.getBlockNumber(),o=await t.genesisEpoch().then(x=>x.toNumber()),s=ye.lastEpochRelative(o,a);this.STATE.currentBlockNumber=a,this.STATE.genesisEpoch=o,this.STATE.currentEpoch=s,this.STATE.currentBlockNumber=a,this.STATE.genesisEpoch=o,this.STATE.currentEpoch=s;const i=Array.from({length:s+1},(x,F)=>F),r=await Promise.all(i.map(x=>t.epochRewards(x))),l=await Promise.all(i.map(x=>t.epochToTotalStakedWeight(x))),p=await t.provider.getStorageAt(t.address,129).then(x=>Number(x)),h=await t.provider.getStorageAt(t.address,130).then(x=>Number(x));this.STATE.lastEpochInitialized=p,this.STATE.lastTotalStakeEpochInitialized=h,this.STATE.epochRewards=r,this.STATE.epochToTotalStakedWeight=l,this.STATE.previouslySetEpochRewards=await t.previouslySetEpochRewards();const g=await t.userFeesInfo(this.userAddress);this.STATE.userFeesInfo.stakedAmount=g.stakedAmount,this.STATE.userFeesInfo.stakedWeight=g.stakedWeight,this.STATE.userFeesInfo.lastStakedBlock=g.lastStakedBlock,this.STATE.userFeesInfo.lastClaimedBlock=g.lastClaimedBlock,this.STATE.userFeesInfo.epochToUserStakedWeight=await Promise.all(i.map(x=>ye.epochToUserStakedWeight(t.provider,this.userAddress,x,this.coreV2Contract.address)))}async _setupEpochsRewardAndWeights(t){const a=this.coreV2Contract,o=await a.genesisEpoch().then(r=>r.toNumber()),s=ye.lastEpochRelative(o,this.STATE.lastEpochInitialized),i=this.STATE.currentEpoch;if(console.debug(`

Doing with: _currentEpoch, _lastEpochInitiliazed`,i,s,`
`),i>s||i==1){const r=await a.PROTOCOL_POOL_FEES(),l=await a.previouslySetEpochRewards(),p=r.sub(l);i-s>1?this.STATE.epochRewards[i-1]=this.STATE.epochRewards[i-1].add(p):this.STATE.epochRewards[i]=ye.toBN(this.STATE.epochRewards[i].toString()).add(p),this.STATE.lastEpochInitialized=await a.provider.getBlockNumber(),this.STATE.previouslySetEpochRewards=r}if(this.STATE.lastTotalStakeEpochInitialized==0||this.STATE.lastTotalStakeEpochInitialized==i)this.STATE.epochToTotalStakedWeight[i]=this.STATE.epochToTotalStakedWeight[i].add(t);else{for(let r=this.STATE.lastTotalStakeEpochInitialized+1;r<=i-1;r++)this.STATE.epochToTotalStakedWeight[r].toNumber()==0&&(this.STATE.epochToTotalStakedWeight[r]=this.STATE.epochToTotalStakedWeight[this.STATE.lastTotalStakeEpochInitialized]);this.STATE.epochToTotalStakedWeight[i]=this.STATE.epochToTotalStakedWeight[this.STATE.lastTotalStakeEpochInitialized].add(t)}this.STATE.lastTotalStakeEpochInitialized=i}async _adjustUserAndTotalStake(t){await this._setupEpochsRewardAndWeights(t);const a=this.STATE.currentEpoch,o=this.STATE.userFeesInfo.stakedWeight;if(o.isZero())this.STATE.userFeesInfo.stakedWeight=ye.toBN(t);else{const s=ye.lastEpochRelative(this.STATE.genesisEpoch,this.STATE.userFeesInfo.lastStakedBlock.toNumber());if(a==s)this.STATE.userFeesInfo.stakedWeight=o.add(t);else for(let i=s;i<=a;i++)i!=a?this.STATE.userFeesInfo.epochToUserStakedWeight[i]=o:(this.STATE.userFeesInfo.stakedWeight=o.add(t),this.STATE.userFeesInfo.epochToUserStakedWeight[i]=this.STATE.userFeesInfo.stakedWeight)}t!=0&&(this.STATE.userFeesInfo.lastStakedBlock=ye.toBN(this.STATE.currentBlockNumber))}calculateEpochRewards(t){return this.STATE.userFeesInfo.epochToUserStakedWeight[t].mul(this.STATE.epochRewards[t]).div(this.STATE.epochToTotalStakedWeight[t].add(1))}async estimateHarvestAll(){await this.initState();const t=this.STATE.currentEpoch-1;if(await this._adjustUserAndTotalStake(0),!(this.STATE.currentEpoch>t))return ye.toBN(0);const a=ye.lastEpochRelative(this.STATE.genesisEpoch,Math.max(this.STATE.userFeesInfo.lastClaimedBlock.toNumber(),this.STATE.genesisEpoch));if(this.coreV2Contract,!(t>=a))return ye.toBN(0);let o=ye.toBN(0);for(let s=a;s<=t;s++){const i=this.calculateEpochRewards(s);o=o.add(i)}return o}async getUserPotentialEpochReward(){await this.initState(),await this._setupEpochsRewardAndWeights(0);const t=this.STATE.epochRewards[this.STATE.currentEpoch],a=this.STATE.epochToTotalStakedWeight[this.STATE.currentEpoch],o=this.STATE.userFeesInfo.stakedWeight.mul(t).div(a),s=this.STATE.currentEpoch,i=this.STATE.userFeesInfo.stakedAmount;return{potentialReward:o,epochRewards:t,userStaked:i,currentEpochNumber:s}}}const Pt=async(n,t,a)=>{const o=ye.getCoreV2Contract(n,a),s=new kt(o,t),i=new kt(o,t),[r,l]=await Promise.all([s.estimateHarvestAll(),i.getUserPotentialEpochReward()]);return{availableRewards:r,...l}},At=y.from(1).mul(y.from(10).pow(y.from(18))),Sn=59400,jn=75300,bn=1323100,$e=function(n,t=null){return y.from(n)},Ie=n=>n.mul(y.from(10).pow(y.from(18))),ie=n=>parseFloat(pa(n)),En="0x0000000000000000000000000000000000000001",Ae=class Ae{constructor(){I(this,"state",{account:null,signer:null,staking:null,yieldFarmingPUSH:null,yieldFarmingLP:null,rewardForCurrentEpochPush:null,rewardForCurrentEpochLP:null,highCapLPStakingAPR:200,highCapPUSHStakingAPR:200,genesisEpochAmountPUSH:Sn,deprecationPerEpochPUSH:900,genesisEpochAmountLP:jn,deprecationPerEpochLP:900,annualPushReward:bn,uniswapV2Router02:null});I(this,"init",(t,a,o,s,i,r)=>{this.state.account=t,this.state.staking=a,this.state.pushToken=o,this.state.pushCoreV2=s,this.state.yieldFarmingLP=i,this.state.uniswapV2Router02=r});I(this,"getPoolStats",t=>new Promise(async(a,o)=>{const s=this.state.pushCoreV2,i=this.state.yieldFarmingLP,r=await i.getCurrentEpoch(),l=await this.currentEpochCalculation(t);let p;const h=await this.state.uniswapV2Router02.getAmountsOut(At.toString(),[d.pushToken,d.WETHAddress,d.USDTAddress]);Q.coreContractChain===42||Q.coreContractChain===5?p=ie(h[h.length-1]):p=h[h.length-1].toNumber()/1e6;const g=ie(await this.state.pushToken.balanceOf(d.uniV2LPToken)),x=ie(await this.state.pushToken.attach(d.WETHAddress).balanceOf(d.uniV2LPToken));let F;const U=await this.state.uniswapV2Router02.getAmountsOut(At.toString(),[d.WETHAddress,d.USDTAddress]);Q.coreContractChain===42||Q.coreContractChain===5?F=ie(U[U.length-1]):F=U[U.length-1].toNumber()/1e6;const E=ie(await this.state.pushToken.attach(d.uniV2LPToken).totalSupply()),z=(g*p+x*F)/E,V=z/p,K=ie(await i.getPoolSize(r.add(1))),te=ie(await s.totalStakedAmount())*p+K*z,Y=await i.epochDuration(),re=(await i.epochStart()).add(r.sub(1).mul(Y)).add(Y);let W=await t.getBlock("latest");W=W.number;const N=await s.genesisEpoch(),k=await s.epochDuration();let R=(k.toNumber()-(W-N.toNumber())%k.toNumber())*12.6;R=Math.round(R);const f=Ie(y.from(this.state.annualPushReward)),j=await i.TOTAL_DISTRIBUTED_AMOUNT(),ee=f.add(j),q=await this.getPushRewardsDistributed(l,r);a({pushPrice:p,lpToPushRatio:V,epochEndTimestamp:re,epochEndTime:R,totalValueLocked:te,totalDistributedAmount:ee,pushRewardsDistributed:q})}));I(this,"getPushRewardsDistributed",async(t,a)=>{const o=this.state.pushCoreV2,s=await this.state.yieldFarmingLP.NR_OF_EPOCHS();a=a.toNumber()>s.toNumber()?s:a;const i=Ie(y.from(this.state.genesisEpochAmountLP)),r=Ie(y.from(this.state.deprecationPerEpochLP));let l=y.from(0),p=y.from(0);for(var h=0;h<a.toNumber();h++){const g=this.calcTotalAmountPerEpoch(i,y.from(h),r);p=p.add(g);const x=await o.epochRewards(h);p=p.add(x)}return l.add(p)});I(this,"getLPPoolStats",async t=>new Promise(async(a,o)=>{const s=this.state.yieldFarmingLP,i=await s.NR_OF_EPOCHS(),r=await s.getCurrentEpoch().then(F=>F.toNumber()>i.toNumber()?i:F),l=Ie(y.from(this.state.genesisEpochAmountLP)),p=Ie(y.from(this.state.deprecationPerEpochLP)),h=this.calcTotalAmountPerEpoch(l,r,p);this.state.rewardForCurrentEpochLP=h;const g=await s.getPoolSize(r.add(1));let x=await this.calcLPPoolAPR(l,r,p,g,t);x=Math.min(this.state.highCapLPStakingAPR,x),a({currentEpochLP:r,totalEpochLP:i,rewardForCurrentEpoch:h,poolBalance:g,stakingAPR:x})}));I(this,"getUserDataLP",async()=>new Promise(async(t,a)=>{if(this.state.account){const o=this.state.yieldFarmingLP,s=await o.NR_OF_EPOCHS(),i=await o.getCurrentEpoch().then(E=>E.toNumber()>s.toNumber()?s:E);let r=o.getEpochStake(this.state.account,i.add(1));const l=(await this.calculateUserEpochReward(i.toNumber(),o)).toFixed(2),p=(await o.lastEpochIdHarvested(this.state.account)).toNumber();let h=this.getAccumulatedReward(i,o),g=this.getTotalAvailableRewards(p,i,o),[x,F,U]=await Promise.all([h,g,r]);t({potentialUserReward:l,epochStakeNext:U,totalAccumulatedReward:x,totalAvailableReward:F})}}));I(this,"calculateLpEpochRewards",async(t,a)=>{t=t+1;const o=ie(await a.getEpochStake(this.state.account,t)),s=ie(await a.getPoolSize(t));let i=0;if(s>0&&a.address==d.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,p=r-l*t;i=o/s*p}return i});I(this,"getAccumulatedReward",async(t,a)=>{let o=[];for(var s=0;s<t.sub(1).toNumber();s++){const r=this.calculateLpEpochRewards(s,a);o.push(r)}let i=(await Promise.all(o)).reduce((r,l)=>r+l,0);return i=i.toFixed(2),i});I(this,"getTotalAvailableRewards",async(t,a,o)=>{let s=[];for(var i=t;i<a.sub(1).toNumber();i++){const l=this.calculateLpEpochRewards(i,o);s.push(l)}let r=(await Promise.all(s)).reduce((l,p)=>l+p,0);return r=r.toFixed(2),r});I(this,"getUserDataPUSH",async t=>new Promise(async(a,o)=>{if(this.state.account){const s=this.state.pushCoreV2;let{epochRewards:i=$e(0),currentEpochNumber:r=0,userStaked:l=$e(0),potentialReward:p=$e(0),availableRewards:h=$e(0)}={};({epochRewards:i,currentEpochNumber:r}=await Pt(t,this.state.account,d.pushCoreV2)),this.state.account!==En&&({userStaked:l,potentialReward:p,availableRewards:h}=await Pt(t,this.state.account,d.pushCoreV2));const g=await s.totalStakedAmount();let x=await s.usersRewardsClaimed(this.state.account);x=ie(x);let F=i;this.state.rewardForCurrentEpochPush=F;let U=this.calcPushStakingAPR(g);U=Math.min(this.state.highCapPUSHStakingAPR,U),p=ie(p),h=ie(h),a([{currentEpochNumber:r,currentReward:F,totalStakedAmount:g,stakingAPR:U},{userStaked:l,claimedReward:x,potentialReward:p,availableRewards:h}])}}));I(this,"calculateUserEpochReward",async(t,a)=>{const o=ie(await a.getEpochStake(this.state.account,t)),s=ie(await a.getPoolSize(t));let i=0;if(s>0&&a.address==d.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,p=r-l*t;i=o/s*p}return i});I(this,"calcTotalAmountPerEpoch",(t,a,o)=>a.toNumber()===0?t.mul(0):t.sub(a.mul(o)));I(this,"currentEpochCalculation",async t=>{const a=this.state.pushCoreV2,o=await a.genesisEpoch(),s=await t.getBlock("latest");return await a.lastEpochRelative(o,s.number)});I(this,"calcAnnualEpochReward",(t,a,o)=>{const s=this.calcTotalAmountPerEpoch(t,a,o);let i=s;for(let r=a.toNumber();r<a.toNumber()+12;r++)i=i.add(s.sub(o.mul(r)));return i});I(this,"calcPushStakingAPR",t=>{const a=this.state.annualPushReward;let o;return Q.coreContractChain===42||Q.coreContractChain===5?o=a/Math.max(ie(t),1)*100:o=a/ie(t)*100,o.toFixed(2)});I(this,"calcLPPoolAPR",async(t,a,o,s,i)=>{const r=this.calcAnnualEpochReward(t,a,o),l=s*i.lpToPushRatio;return(r.mul(100)/l).toFixed(2)})}static getInstance(){return Ae.instance||(Ae.instance=new Ae),Ae.instance}};I(Ae,"instance",null);let Ee=Ae;const vt=({onClose:n,InnerComponentProps:t,toastObject:a})=>{const{title:o,getUserData:s,getPoolStats:i,setUnstakeErrorMessage:r,setWithdrawErrorMessage:l}=t,{account:p,provider:h}=ke(),[g,x]=u.useState(0),[F,U]=u.useState(0),[E,z]=u.useState(!1),[V,K]=u.useState(!1),[te,Y]=u.useState(!1);u.useState(null);const{userPushSDKInstance:re}=Bt(T=>T.user),{handleConnectWallet:W}=u.useContext(_t),[N,k]=u.useState(0),R=()=>{r(null),l(null),n()},f=Je(),j=u.useRef(null);Wt(j,()=>R());const ee=async()=>{var T=h.getSigner(p);const w=o==="Uni-V2"?d.uniV2LPToken:d.pushToken,D=new A(w,v.uniV2LpToken,T);let C=en(await D.balanceOf(p));x(parseInt(C.toString().replace(/\D/,""))||0)},q=async()=>{K(!0);var T=h.getSigner(p);let w;o==="Uni-V2"?w=await new A(d.uniV2LPToken,v.uniV2LpToken,T).allowance(p,d.stakingV2):w=await new A(d.pushToken,v.uniV2LpToken,T).allowance(p,d.pushCoreV2),U(G(w)),K(!1)};u.useEffect(()=>{ee(),q()},[]);const fe=async()=>{if(!re.signer){W();return}if(E||V)return;K(!0);var T=h.getSigner(p);let w;const D=ua(N.toString(),18);o==="Uni-V2"?w=new A(d.uniV2LPToken,v.uniV2LpToken,T).approve(d.stakingV2,D):w=new A(d.pushToken,v.uniV2LpToken,T).approve(d.pushCoreV2,D),w.then(async C=>{a.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await h.waitForTransaction(C.hash),a.showMessageToast({toastTitle:"Success",toastMessage:`Successfully approved ${o} Tokens!`,toastType:"SUCCESS",getToastIcon:P=>e.jsx(xe,{size:P,color:"green"})}),K(!1),z(!0)}catch(P){console.error("Error",P),a.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:B=>e.jsx($,{size:B,color:"red"})}),K(!1)}}).catch(C=>{console.error("Error",C),a.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature",toastType:"ERROR",getToastIcon:P=>e.jsx($,{size:P,color:"red"})}),K(!1)})},L=async()=>{if(!re.signer){W();return}if(te||!E)return;if(Y(!0),N==0){a.showMessageToast({toastTitle:"Error",toastMessage:`You need to deposit atleast 1 ${o} token `,toastType:"ERROR",getToastIcon:D=>e.jsx($,{size:D,color:"red"})}),Y(!1);return}var T=h.getSigner(p);let w;o==="Uni-V2"?w=new A(d.stakingV2,v.stakingV2,T).deposit(d.uniV2LPToken,y.from(N).mul(y.from(10).pow(18))):w=new A(d.pushCoreV2,v.pushCoreV2,T).stake(y.from(N).mul(y.from(10).pow(18))),w.then(async D=>{a.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await h.waitForTransaction(D.hash),a.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:C=>e.jsx(xe,{size:C,color:"green"})}),i(),s(),Y(!1),R()}catch(C){console.error("Error",C),a.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${C.name}+ ")`,toastType:"ERROR",getToastIcon:P=>e.jsx($,{size:P,color:"red"})}),Y(!1)}}).catch(D=>{console.error("Error in depositing",D),D.reason=D.reason.slice(D.reason.indexOf("::")+1),a.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Cancelled! ${D.reason}`,toastType:"ERROR",getToastIcon:C=>e.jsx($,{size:C,color:"red"})}),Y(!1)})},ne=T=>{T.preventDefault(),k(parseInt(T.target.value.replace(/\D/,""))||0),F>=parseInt(T.target.value.replace(/\D/,""))?z(!0):z(!1)},_=T=>{k(parseInt(T.toString().replace(/\D/,""))||0)},S=ve(600);return e.jsxs(Cn,{children:[e.jsxs(b,{justifyContent:"space-between",children:[e.jsx(kn,{children:o==="Uni-V2"?"Uniswap V2 Staking Pool":"Push Fee Staking Pool"}),e.jsx(mt,{onClick:()=>R(),style:{cursor:"pointer"}})]}),e.jsxs(M,{children:[e.jsx(ca,{weight:"500",size:"14px",self:"baseline",color:f.stakingSecondaryText,children:"You are Staking"}),e.jsxs(b,{width:"-webkit-fill-available",background:f.default.bg,height:"60px",padding:S?"8px":"14px",borderRadius:"12px",border:`1px solid ${f.modalBorderColor}`,children:[e.jsx(Pn,{placeholder:"Enter Amount",flex:"2",radius:"4px",size:"32px",height:"32px",self:"auto",bg:"#FFF",color:f.stakingSecondaryText,value:N,onChange:T=>{T.preventDefault(),ne(T)},autoFocus:!0}),e.jsxs(An,{onClick:()=>_(g),children:["Max: ",g]})]})]}),e.jsxs(b,{margin:"20px 0",gap:"12px",children:[e.jsxs(de,{variant:"primary",size:"medium",onClick:fe,disabled:!!E,children:[!E&&!V&&e.jsxs(Ze,{color:"#FFFFFF",weight:"400",cursor:"pointer",children:["Approve ",o]}),V&&!E&&e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:"#fff",title:"Approving",titleColor:"#FFF"}),E&&e.jsx(Ze,{color:f.emptyButtonText,weight:"600",cursor:"default",children:"Approved"})]}),e.jsxs(de,{variant:"outline",size:"medium",disabled:!!(!E||te),onClick:L,children:[!te&&"Deposit",te&&e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFFF",title:"Depositing",titleColor:"#FFF"})]})]})]})},Cn=c.div`
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
`,kn=c(O)`
  font-size: 16px;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};
`,Pn=c(da)`
  background: transparent;
`,An=c.p`
  font-size: 14px;
  text-align: right;
  text-decoration-line: underline;
  color: #657795;
  margin: 0px;
  cursor: pointer;
`,vn=({lpPoolStats:n,userDataLP:t,getLpPoolStats:a,getUserDataLP:o})=>{const{account:s,provider:i}=ke(),[r,l]=u.useState(!1),[p,h]=u.useState(!1),[g,x]=u.useState(null),[F,U]=u.useState(null),E=Ve(),z=Je(),V=async()=>{if(r)return;l(!0);const R=G(t.epochStakeNext);if(R==0){U("Nothing to unstake. You need to stake first"),l(!1);return}var f=i.getSigner(s);let j=new A(d.stakingV2,v.stakingV2,f);await j.balanceOf(s,d.uniV2LPToken),j.withdraw(d.uniV2LPToken,y.from(R).mul(y.from(10).pow(18))).then(async ee=>{E.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await i.waitForTransaction(ee.hash),E.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:q=>e.jsx(xe,{size:q,color:"green"})}),l(!1),a(),o()}catch(q){console.error("Error",q),E.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${q.name}+ ")`,toastType:"ERROR",getToastIcon:fe=>e.jsx($,{size:fe,color:"red"})}),l(!1)}}).catch(ee=>{E.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:q=>e.jsx($,{size:q,color:"red"})}),l(!1)})},K=async()=>{if(!p){if((t==null?void 0:t.totalAvailableReward)==0){x("No Rewards to Claim!");return}if(console.debug("Lp POOL stats",n),!n.currentEpochLP||n.currentEpochLP==1){E.showMessageToast({toastTitle:"Error",toastMessage:"Harvest unlocks from Epoch 2!)",toastType:"ERROR",getToastIcon:f=>e.jsx($,{size:f,color:"red"})});return}h(!0);var R=i.getSigner(s);new A(d.yieldFarmLP,v.yieldFarming,R).massHarvest().then(async f=>{E.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await i.waitForTransaction(f.hash),E.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:j=>e.jsx(xe,{size:j,color:"green"})}),o(),h(!1)}catch(j){E.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${j.name}+ ")`,toastType:"ERROR",getToastIcon:ee=>e.jsx($,{size:ee,color:"red"})}),h(!1)}}).catch(f=>{E.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:j=>e.jsx($,{size:j,color:"red"})}),h(!1)})}};u.useEffect(()=>{x(null),U(null)},[s]);const te=()=>{(n==null?void 0:n.currentEpochLP.toNumber())+1<=(n==null?void 0:n.totalEpochLP.toNumber())?re():E.showMessageToast({toastTitle:"Error",toastMessage:"Epochs have ended!",toastType:"ERROR",getToastIcon:R=>e.jsx($,{size:R,color:"red"})})},{isModalOpen:Y,showModal:re,ModalComponent:W}=Qe(),N=Ve(),k=ve(600);return e.jsxs(Rn,{children:[e.jsx(W,{InnerComponent:vt,InnerComponentProps:{title:"Uni-V2",getUserData:o,getPoolStats:a,setUnstakeErrorMessage:U,setWithdrawErrorMessage:x},toastObject:N,modalPosition:et.ON_PARENT}),e.jsx(M,{margin:"0px 0px 20px 0px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(Mn,{children:"Uniswap V2 LP Staking Pool"}),e.jsxs(ut,{children:["Current APR"," ",e.jsxs(we,{color:"#D53A94",fontWeight:"600",children:[">",X(n==null?void 0:n.stakingAPR),"%"]})]})]}):e.jsxs(Ne,{padding:"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(m,{height:"12px",width:"112px"})]})}),e.jsxs(M,{flex:"5",children:[e.jsxs(Fn,{border:`1px solid ${z.stakingBorder}`,borderRadius:"16px",children:[e.jsx(M,{margin:k?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:k?" 7px":"10px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(ut,{children:"Current Reward"}),e.jsxs(O,{fontSize:k?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:[X(G(n==null?void 0:n.rewardForCurrentEpoch))," PUSH"]})]}):e.jsxs(Ne,{padding:k?"0px":"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:k?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(m,{height:"12px",width:k?"65px":"100px}"})]})}),e.jsx(Un,{width:"10px",height:"100%"}),e.jsx(M,{margin:k?"0 0 0 6px":"0 0 0 18px",padding:k?" 7px":"10px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(ut,{children:"Total Staked"}),e.jsxs(In,{fontSize:k?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[X(G(n==null?void 0:n.poolBalance))," UNI-V2"]})]}):e.jsxs(Ne,{padding:k?"0px":"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:k?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(m,{height:"12px",width:k?"65px":"100px}"})]})})]}),e.jsx(b,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:n?e.jsxs(e.Fragment,{children:[e.jsx(Rt,{children:"Current Epoch"}),e.jsxs(Rt,{children:[Math.min(n==null?void 0:n.currentEpochLP,n==null?void 0:n.totalEpochLP).toString(),"/",n==null?void 0:n.totalEpochLP.toString()]})]}):e.jsx(Ne,{padding:"5px 0px 0 15px",children:e.jsx(m,{height:"12px",width:"124px"})})}),t?e.jsxs(M,{children:[e.jsxs(b,{justifyContent:"space-between",margin:k?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(We,{children:["User Deposit",e.jsx(He,{children:e.jsx(Z,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(pe,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ge,{children:[G(t==null?void 0:t.epochStakeNext)," UNI-V2"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:k?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(We,{children:["Rewards Claimed",e.jsx(He,{children:e.jsx(Z,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(pe,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ge,{children:[" ",X(((t==null?void 0:t.totalAccumulatedReward)-(t==null?void 0:t.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:k?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(We,{children:["Current Epoch Reward",e.jsx(He,{children:e.jsx(Z,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(pe,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ge,{children:[" ",X(t==null?void 0:t.potentialUserReward)," PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:k?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(We,{children:["Available for Claiming",e.jsx(He,{children:e.jsx(Z,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(pe,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ge,{children:[" ",X(t==null?void 0:t.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(Ce,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]})]})]}),e.jsx(M,{padding:k?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx(de,{variant:"primary",size:"medium",onClick:()=>{te()},children:"Stake $UNI-V2 LP Tokens"})}),e.jsxs(Nn,{children:[G(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(Z,{error:!0,ToolTipTitle:"Nothing to unstake! Stake First.",ToolTipWidth:"16rem",bottom:"-30px",children:e.jsx(de,{disabled:!0,size:"medium",children:r?e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Unstake $UNI-V2"})}):e.jsx(de,{size:"medium",variant:"outline",onClick:V,children:r?e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:z.activeButtonText,title:"Unstaking",titleColor:z.activeButtonText}):"Unstake $UNI-V2"}),(t==null?void 0:t.totalAvailableReward)==="0.00"?e.jsx(Z,{bottom:"-30px",left:"40px",ToolTipTitle:"No Rewards to Claim!",error:!0,ToolTipWidth:"10rem",children:e.jsx(de,{disabled:!0,size:"medium",children:p?e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFF"}):"Claim Rewards"})}):e.jsx(de,{variant:"outline",size:"medium",onClick:()=>K(),children:p?e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:z.activeButtonText,title:"Claiming",titleColor:z.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Ne,{width:"100%",children:[e.jsx(m,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(m,{height:"49px",width:"100%"})]})})]})},Rn=c(ze)`
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
`,Mn=c(O)`
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
`,Fn=c(b)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,Un=c.div`
  width: 1px;
  height: 100%;
  background: ${n=>n.theme.stakingBorder};
`,We=c.div`
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
`,In=c(O)`
  color: ${n=>n.theme.stakingSecondaryText};
`,Rt=c(Ht)`
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
`,He=c(we)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,Ge=c(O)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Nn=c.div`
  display: flex;
  gap: var(--s3);
  margin: 15px 0px 0px 0px;
`,Ne=c(Ce)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,Ln=n=>u.createElement("svg",{width:29,height:28,viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},u.createElement("path",{d:"M26.1673 14.0002C26.1673 20.4431 20.9436 25.6668 14.5007 25.6668C8.05773 25.6668 2.83398 20.4431 2.83398 14.0002C2.83398 7.55725 8.05773 2.3335 14.5007 2.3335C20.9436 2.3335 26.1673 7.55725 26.1673 14.0002Z",fill:"#30CC8B"}),u.createElement("path",{d:"M20.6751 8.5083L12.7593 16.4335L9.49146 13.175L7.8418 14.8246L12.7616 19.7328L22.3254 10.158L20.6751 8.5083Z",fill:"white"})),Dn=({onClose:n,InnerComponentProps:t})=>{const{currentTransactionNo:a,totalTransactionNo:o,transactionSteps:s,transactionText:i,setCurrentTransactionNo:r,setTotalTransactionNo:l,setTransactionSteps:p,claimRewards:h,unstakeTokensPaginated:g}=t,x=()=>{p(0),n()},F=async()=>{p(0),l(0),r(0),i!=null&&i.includes("Unstaking")?g():h()};return e.jsx(zn,{children:o?e.jsxs(e.Fragment,{children:[e.jsx(b,{justifyContent:"end",children:e.jsx(mt,{onClick:()=>x(),style:{cursor:"pointer"}})}),s===0&&e.jsxs(e.Fragment,{children:[e.jsx(Gt,{size:42,color:me.COLORS.PRIMARY_PINK,type:Kt.PROCESSING}),e.jsxs(M,{gap:"24px",margin:"16px 0 0 0",children:[e.jsxs(M,{children:[e.jsxs(O,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:["Please sign transaction ",a,"/",o]}),e.jsx(O,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"Processing your request"})]}),e.jsx(O,{fontSize:"18px",fontWeight:"400",color:"#657795",children:i}),e.jsx(M,{padding:"16px",children:e.jsx(O,{fontSize:"16px",fontWeight:"400",color:"#D53A94",children:"Confirm the request in your wallet"})})]})]}),s===1&&e.jsxs(M,{gap:"24px",children:[e.jsx(M,{gap:"9px",children:e.jsx(O,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:"Transaction Error"})}),e.jsx(M,{children:e.jsx(de,{variant:"primary",size:"medium",onClick:F,children:"Retry"})})]}),s===2&&e.jsxs(M,{gap:"24px",children:[e.jsxs(M,{children:[e.jsx(Ln,{height:"50px",width:"50px"}),e.jsxs(M,{gap:"9px",children:[e.jsx(O,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:"Transactions Successful"}),e.jsx(O,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"You have claimed all the rewards."})]})]}),e.jsx(de,{variant:"primary",size:"medium",onClick:x,children:"Close"})]})]}):e.jsx(Gt,{size:42,color:me.COLORS.PRIMARY_PINK,type:Kt.PROCESSING})})},zn=c(M)`
  min-width: 493px;
  padding: 32px 24px;
`,Vn=({userDataPush:n,getUserDataPush:t,PUSHPoolstats:a,getPUSHPoolStats:o})=>{const{account:s,provider:i}=ke(),[r,l]=u.useState(!1),[p,h]=u.useState(!1),[g,x]=u.useState(null),[F,U]=u.useState(null),[E,z]=u.useState(0),[V,K]=u.useState(0),[te,Y]=u.useState(0),[re,W]=u.useState(""),N=Ve(),k=Je(),R=async C=>{var P=i.getSigner(s);let B=new A(d.pushToken,v.pushToken,P);if(await B.holderDelegation(s,C.address))return!0;try{N.showLoaderToast({loaderMessage:"Delegating! Please wait.."});const J=await B.setHolderDelegation(C.address,"true");return await i.waitForTransaction(J.hash),N.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Address Delegated",toastType:"SUCCESS",getToastIcon:se=>e.jsx(xe,{size:se,color:"green"})}),!0}catch(J){return console.error("Error in delegating",J),N.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${J.reason}`,toastType:"ERROR",getToastIcon:se=>e.jsx($,{size:se,color:"red"})}),l(!1),!1}},f=async C=>{const P=(await C.userFeesInfo(s)).lastClaimedBlock;if(P.toNumber()!==0){const B=await C.genesisEpoch(),J=await C.epochDuration();return(P-B)/J}},j=async()=>{if(p)return;if(h(!0),(n==null?void 0:n.availableRewards)==0){U("No Rewards to Claim"),h(!1);return}var C=i.getSigner(s);let P=new A(d.pushCoreV2,v.pushCoreV2,C);const B=a==null?void 0:a.currentEpochNumber,J=14;if(!await R(P))return;let se=1;se=await f(P),w(),h(!1);let H=0;B-se<J,H=Math.ceil((B-se)/J),K(H),H!=0&&(await ee(H,se,P,J),t(),Y(2),z(0))},ee=async(C,P,B,J)=>{const se=a==null?void 0:a.currentEpochNumber;let H=0;for(let ce=0;ce<C;ce++){let le=P;P+=J;let Te=Math.min(P,se-1);W(`Claiming the rewards from Epoch ${le} to ${Te} `),await B.harvestPaginated(Te,{gasLimit:91e4}).then(async ae=>{try{N.showLoaderToast({loaderMessage:"Waiting for confirmation"}),await i.waitForTransaction(ae.hash),N.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:oe=>e.jsx(xe,{size:oe,color:"green"})}),H++,z(H)}catch{console.error("Error in the transaction",ae);return}}).catch(ae=>{throw console.error("Error in claiming the reward",ae),N.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${ae.reason}`,toastType:"ERROR",getToastIcon:oe=>e.jsx($,{size:oe,color:"red"})}),W(""),l(!1),t(),Y(1),z(0),ae})}},q=async()=>{if(r)return;if(l(!0),G(n==null?void 0:n.userStaked)==0){x("Nothing to unstake, You need to stake first"),l(!1);return}var C=i.getSigner(s);let P=new A(d.pushCoreV2,v.pushCoreV2,C);const B=await R(P);if(h(!1),!B)return;const J=a==null?void 0:a.currentEpochNumber,se=14;let H=0;if(H=await f(P),H>=J-1){l(!1),x("PUSH cannot be unstaked until current epoch is over."),N.showMessageToast({toastTitle:"Unstaking Error",toastMessage:"You cannot unstake until Current Epoch gets over.",toastType:"ERROR",getToastIcon:le=>e.jsx($,{size:le,color:"red"})});return}w();const ce=Math.ceil((J-H)/se);K(ce),ce>1&&await ee(ce-1,H,P,se),W("Unstaking Your Push Tokens. Please wait..."),P.unstake().then(async le=>{N.showLoaderToast({loaderMessage:"Unstaking! Waiting for Confirmation..."});try{await i.waitForTransaction(le.hash),N.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:Te=>e.jsx(xe,{size:Te,color:"green"})}),o(),t(),l(!1),Y(2),z(0)}catch(Te){console.error("Error",Te),N.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${Te.name}+ ")`,toastType:"ERROR",getToastIcon:ae=>e.jsx($,{size:ae,color:"red"})}),W(""),l(!1)}}).catch(le=>{console.error("Error: ",le);const Te=le.reason.includes("PushCoreV2::unstake:"),ae=le.reason.includes("PushCoreV2::harvestPaginated:");if(Te||ae)x("PUSH cannot be unstaked until current epoch is over.");else{let oe=le.reason.slice(le.reason.indexOf("::")+1);oe=oe.replace("unstake:",""),N.showMessageToast({toastTitle:"Error",toastMessage:`${oe}`,toastType:"ERROR",getToastIcon:De=>e.jsx($,{size:De,color:"red"})})}l(!1),t(),Y(1),z(0)})};u.useEffect(()=>{U(null),x(null)},[s]);const{isModalOpen:fe,showModal:L,ModalComponent:ne}=Qe(),_=Ve(),S=ve(600),{isModalOpen:T,showModal:w,ModalComponent:D}=Qe();return e.jsxs($n,{children:[e.jsx(ne,{InnerComponent:vt,InnerComponentProps:{title:"PUSH",getUserData:t,getPoolStats:o,setUnstakeErrorMessage:x,setWithdrawErrorMessage:U},toastObject:_,modalPosition:et.ON_PARENT}),e.jsx(D,{InnerComponent:Dn,InnerComponentProps:{currentTransactionNo:E,totalTransactionNo:V,transactionSteps:te,transactionText:re,setCurrentTransactionNo:z,setTotalTransactionNo:K,setTransactionSteps:Y,claimRewards:j,unstakeTokensPaginated:q},onConfirm:()=>{},modalPadding:"0px",modalPosition:et.ON_ROOT}),e.jsx(M,{margin:"0px 0px 20px 0px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Wn,{children:"PUSH Fee Staking Pool"}),e.jsxs(Hn,{children:["Current APR",e.jsxs(we,{color:"#D53A94",fontWeight:"600",margin:"0 5px 0 5px",children:[">",X(a==null?void 0:a.stakingAPR),"% + Fee"]}),e.jsx(Bn,{})]})]}):e.jsxs(Le,{padding:"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(m,{height:"12px",width:"112px"})]})}),e.jsxs(M,{flex:"5",children:[e.jsxs(Gn,{border:`1px solid ${k.stakingBorder}`,borderRadius:"16px",children:[e.jsx(M,{margin:S?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:S?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Ft,{children:"Current Reward"}),e.jsxs(O,{fontSize:S?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:[X(G(a==null?void 0:a.currentReward))," PUSH"]})]}):e.jsxs(Le,{padding:S?"0px":"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:S?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(m,{height:"12px",width:S?"65px":"100px}"})]})}),e.jsx(Kn,{width:"10px",height:"100%"}),e.jsx(M,{margin:S?"0 0 0 6px":"0 0 0 18px",padding:S?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Ft,{children:"Total Staked"}),e.jsxs(Yn,{fontSize:S?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[X(G(a==null?void 0:a.totalStakedAmount))," PUSH"]})]}):e.jsxs(Le,{padding:S?"0px":"5px 15px 0 15px",children:[e.jsx(m,{height:"12px",width:S?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(m,{height:"12px",width:S?"65px":"100px}"})]})})]}),e.jsx(b,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Ut,{children:"Current Epoch"}),e.jsx(Ut,{children:a==null?void 0:a.currentEpochNumber})]}):e.jsx(Le,{padding:"5px 0px 0 15px",children:e.jsx(m,{height:"12px",width:"124px"})})}),n?e.jsxs(M,{children:[e.jsxs(b,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ke,{children:["User Deposit",e.jsx(Ye,{children:e.jsx(Z,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(pe,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(qe,{children:[" ",X(G(n==null?void 0:n.userStaked))," PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ke,{children:["Rewards Claimed",e.jsx(Ye,{children:e.jsx(Z,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(pe,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(qe,{children:[" ",X((n==null?void 0:n.claimedReward).toFixed(2))," PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ke,{children:["Current Epoch Reward",e.jsx(Ye,{children:e.jsx(Z,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(pe,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(qe,{children:[" ",X((n==null?void 0:n.potentialReward).toFixed(2))," PUSH"]})]}),e.jsxs(b,{justifyContent:"space-between",margin:S?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ke,{children:["Available for Claiming",e.jsx(Ye,{children:e.jsx(Z,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(pe,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(qe,{children:[" ",X((n==null?void 0:n.availableRewards).toFixed(2))," PUSH"]})]})]}):e.jsxs(Ce,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]}),e.jsxs(b,{justifyContent:"space-between",children:[e.jsx(m,{height:"12px",width:"164px"}),e.jsx(m,{height:"12px",width:"72px"})]})]})]}),e.jsx(M,{padding:S?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx(de,{variant:"primary",size:"medium",onClick:L,children:"Stake $PUSH"})}),e.jsxs(qn,{children:[(a==null?void 0:a.currentEpochNumber)<=2?e.jsx(Mt,{ToolTipTitle:"You can unstake once epoch 2 ends.",ButtonTitle:"Unstake PUSH"}):G(n==null?void 0:n.userStaked)==0||g!==null?e.jsx(Mt,{ToolTipTitle:g||"Nothing to unstake, Stake First",ButtonTitle:"Unstake PUSH"}):e.jsx(de,{variant:"outline",size:"medium",onClick:q,children:r?e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:k.activeButtonText,title:"Unstaking",titleColor:k.activeButtonText}):"Unstake $PUSH"}),(n==null?void 0:n.availableRewards)===0?e.jsx(Z,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,left:"40px",ToolTipWidth:"10rem",children:e.jsx(de,{size:"medium",disabled:!0,children:p?e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Claim Rewards"})}):e.jsx(de,{variant:"outline",size:"medium",onClick:j,children:p?e.jsx(ue,{type:he.SEAMLESS,spinnerSize:26,spinnerColor:k.activeButtonText,title:"Claiming",titleColor:k.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Le,{width:"100%",children:[e.jsx(m,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(m,{height:"49px",width:"100%"})]})})]})},Mt=n=>e.jsx(Z,{error:!0,ToolTipTitle:n.ToolTipTitle,ToolTipWidth:"16rem",bottom:"-30px",children:e.jsx(de,{size:"medium",disabled:!0,children:n.ButtonTitle})}),Bn=()=>{const[n,t]=u.useState(!1),a=()=>t(!1),o=u.useRef(null);return Wt(o,()=>a()),e.jsxs(_n,{ref:o,children:[e.jsx(pe,{onClick:()=>t(!n),src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}}),n&&e.jsx(On,{id:"channel",children:e.jsx(yt,{title:"",body:"Push Fee Pool APR distributes yield farming rewards + fee earned by protocol. More Info "})})]})},_n=c.div`
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
`,$n=c(ze)`
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
`,Wn=c(O)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`,Hn=c.div`
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
`,Ft=c.p`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Gn=c(b)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,Kn=c.div`
  width: 1px;
  height: 100%;
  background: ${n=>n.theme.stakingBorder};
`,Ke=c.div`
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
`,Yn=c(O)`
  color: ${n=>n.theme.stakingSecondaryText};
`,Ut=c(Ht)`
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
`,Ye=c(we)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,qe=c(O)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,qn=c.div`
  display: flex;
  margin: 15px 0px 0px 0px;
  gap: var(--s3);
`,Le=c(Ce)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,Jn=({setActiveTab:n})=>{const{provider:t,account:a,chainId:o}=ke(),[s,i]=u.useState(),[r,l]=u.useState(),[p,h]=u.useState(),[g,x]=u.useState(),[F,U]=u.useState(),[E,z]=u.useState(null),[V,K]=u.useState(null),[te,Y]=u.useState(null),[re,W]=u.useState(null),[N,k]=u.useState(null),R=t==null?void 0:t.getSigner(a),f=u.useCallback(async()=>{const L=await Ee.getInstance().getPoolStats(t);z({...L})},[r,s,g,p,F,t]),j=u.useCallback(async()=>{const L=await Ee.getInstance().getPoolStats(t),ne=await Ee.getInstance().getLPPoolStats(L);K({...ne})},[r,s,g,p,F,t]),ee=u.useCallback(async()=>{},[]),q=u.useCallback(async()=>{const L=await Ee.getInstance().getUserDataLP();Y({...L})},[r,s,g,p,F]),fe=u.useCallback(async()=>{const[L,ne]=await Ee.getInstance().getUserDataPUSH(t);k({...L}),W({...ne})},[r,s,g,p,F,t]);return u.useEffect(()=>{if(o!==Q.coreContractChain&&o!==Q.mainnetCoreContractChain)return;K(null),Y(null),k(null),W(null);let L=new A(d.stakingV2,v.stakingV2,R),ne=new A(d.pushToken,v.pushToken,R),_=new A(d.pushCoreV2,v.pushCoreV2,R),S=new A(d.yieldFarmLP,v.yieldFarming,R),T=new A(d.uniswapV2Router02,v.uniswapV2Router02,R);if(l(L),i(ne),x(_),h(S),U(T),R&&a){var w=t==null?void 0:t.getSigner(a);let D=new A(d.stakingV2,v.stakingV2,w),C=new A(d.pushToken,v.pushToken,w),P=new A(d.pushCoreV2,v.pushCoreV2,w),B=new A(d.yieldFarmLP,v.yieldFarming,w),J=new A(d.uniswapV2Router02,v.uniswapV2Router02,w);l(D),i(C),x(P),h(B),U(J)}Ee.getInstance().init(a,L,ne,_,S,T),f(),q(),j(),fe()},[a,o]),e.jsxs(e.Fragment,{children:[e.jsx(jt,{logo:"announcement",title:"New V2 Pools are now Live! Stake or migrate now.",body:"Users who were part of the previous Push staking program, need to migrate to new pools to continue earning rewards. Click",setActiveTab:n}),e.jsx(Tn,{getLpPoolStats:j,poolStats:E,setPoolStats:z}),e.jsx(mn,{poolStats:E}),e.jsxs(Zn,{children:[e.jsx(Vn,{userDataPush:re,getUserDataPush:fe,PUSHPoolstats:N,getPUSHPoolStats:ee}),e.jsx(vn,{lpPoolStats:V,userDataLP:te,getLpPoolStats:j,getUserDataLP:q})]})]})},Zn=c(b)`
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`,Xn=({onClose:n})=>{const{chainId:t,switchChain:a}=ke(),o=()=>{const s=Q.allowedNetworks[0];t!==1&&t!==11155111&&(console.info("Current Chain ID ",t),console.info("Chain Id to pass",s),a(Q.coreContractChain))};return u.useEffect(()=>{(t===Q.coreContractChain||t===Q.mainnetCoreContractChain)&&n()},[t]),e.jsxs(Qn,{children:[e.jsx(mt,{style:{cursor:"pointer",alignSelf:"end"}}),e.jsxs(ea,{children:[e.jsx(ta,{children:"Unsupported Network"}),e.jsxs(na,{children:["Push Yield Farm V2 is only live on Ethereum Chain.",e.jsx("br",{}),"Kindly switch to Ethereum"]})]}),e.jsx(aa,{children:e.jsx(de,{onClick:o,variant:"primary",size:"large",children:"Switch Network"})})]})},Qn=c(M)`
  padding: 32px 36px;
  width: 445px;
`,ea=c(M)`
  font-family: FK Grotesk Neu;
  font-style: normal;
  line-height: 141%; /* 39.48px */
  letter-spacing: normal;
`,ta=c.div`
  font-size: 28px;
  font-weight: 500;
  color: ${n=>n.theme.stakingSecondaryText};
`,na=c.div`
  color: ${n=>n.theme.activeButtonText};
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 24px 0;
`,aa=c.div``;Q.coreContractChain;let It,Nt,Lt,ht,Dt,zt;It=()=>{ha.pageview("/yield");const[n,t]=u.useState(0),[a,o]=u.useState(!1),{account:s,chainId:i,switchChain:r}=ke(),l=()=>{const x=Q.allowedNetworks[0];i!==1&&i!==5&&r(x)};u.useEffect(()=>{i!==1&&i!==11155111&&(h(),l())},[i]);const{isModalOpen:p,showModal:h,ModalComponent:g}=Qe();return e.jsxs(Nt,{children:[e.jsx(g,{InnerComponent:Xn,onConfirm:()=>{},modalPadding:"0px",modalPosition:et.ON_PARENT}),e.jsxs(Lt,{children:[e.jsx(ht,{isActive:!n,onClick:()=>{o(!0),t(0)},children:"Yield Farming V2"}),e.jsxs(ht,{isActive:n,onClick:()=>{o(!1),t(1)},children:["Yield Farming V1 ",e.jsx(Dt,{children:"Deprecated"})]})]}),n===0&&e.jsx(Jn,{setActiveTab:t}),n===1&&e.jsx(hn,{setActiveTab:t})]})},Nt=c(ze)`
	align-items: stretch;
	align-self: center;
  flex: 1;
	background: ${n=>n.theme.default.bg};
	border-radius: ${me.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${me.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: calc(
    100% - ${nt.MINI_MODULES.DESKTOP.RIGHT} - ${nt.MINI_MODULES.DESKTOP.LEFT} -
      ${me.ADJUSTMENTS.PADDING.BIG} - ${me.ADJUSTMENTS.PADDING.BIG}
  );
  gap: 16px;
  padding: 24px;

  margin: ${me.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  
  @media ${tt.laptop} {
    margin: ${me.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${tt.tablet} {
    width: calc(
      100% - ${nt.MINI_MODULES.TABLET.RIGHT} - ${nt.MINI_MODULES.TABLET.LEFT} -
        ${me.ADJUSTMENTS.PADDING.DEFAULT} - ${me.ADJUSTMENTS.PADDING.DEFAULT}
    );
    margin: ${me.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding:16px;
  }

  @media ${tt.mobileL} {
    margin: ${me.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    border: ${me.ADJUSTMENTS.RADIUS.LARGE};
    width: 100%;
    padding: ${me.ADJUSTMENTS.PADDING.DEFAULT};
`,Lt=c(b)`
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
`,Dt=c(we)`
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
`,Yt=()=>e.jsx(zt,{children:e.jsx(It,{})}),zt=c(ze)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{ma as __tla,Yt as default};
