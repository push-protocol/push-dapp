var Ls=Object.defineProperty;var Ns=(Se,je,Ee)=>je in Se?Ls(Se,je,{enumerable:!0,configurable:!0,writable:!0,value:Ee}):Se[je]=Ee;var ue=(Se,je,Ee)=>Ns(Se,typeof je!="symbol"?je+"":je,Ee);import{et as I,ek as p,ei as ge,e6 as i,eR as P,ha as D,e1 as e,hK as $s,hz as vt,e7 as He,eT as me,hV as Vs,fB as T,fo as pt,hW as be,dY as ye,d_ as n,fE as ze,e9 as _e,h2 as Pe,hX as c,f4 as oe,eP as Ge,e3 as le,e4 as pe,ej as b,el as y,fK as xe,fL as L,gK as Rt,eg as Ye,fj as Bs,fD as Os,fn as Ft,gm as xt,hY as Ws,eY as ie,en as Hs,g1 as Mt,fp as Ke,fq as Je,ft as Ut,eM as de,fu as At,eO as qe,hZ as Re,eN as Ze,eQ as _s,__tla as Gs}from"./index-DAwOsNLq.js";import{n as Z,f as H,b as Ys,__tla as Ks}from"./StakingHelper-BGqBFpLj.js";import{C as Js,__tla as qs}from"./ContentLayout-D3jQ_2yv.js";let zt,Zs=Promise.all([(()=>{try{return Gs}catch{}})(),(()=>{try{return Ks}catch{}})(),(()=>{try{return qs}catch{}})()]).then(async()=>{const Se=I.from(1).mul(I.from(10).pow(I.from(18))),je=3e4,Ee=35e3,dt=t=>t.mul(I.from(10).pow(I.from(18))),ve=t=>t.div(I.from(10).pow(I.from(10))).toNumber()/1e8,ke=class ke{constructor(){ue(this,"state",{account:null,signer:null,staking:null,yieldFarmingPUSH:null,yieldFarmingLP:null,rewardForCurrentEpochPush:null,rewardForCurrentEpochLP:null,genesisEpochAmountPUSH:je,deprecationPerEpochPUSH:100,genesisEpochAmountLP:Ee,deprecationPerEpochLP:100,uniswapV2Router02:null});ue(this,"init",(s,o,l,r,a,h)=>{this.state.account=s,this.state.pushToken=o,this.state.staking=l,this.state.yieldFarmingPUSH=r,this.state.yieldFarmingLP=a,this.state.uniswapV2Router02=h});ue(this,"getPoolStats",()=>new Promise(async(s,o)=>{const l=await this.state.yieldFarmingPUSH.getCurrentEpoch(),r=await this.state.uniswapV2Router02.getAmountsOut(Se.toString(),[p.pushToken,p.WETHAddress,p.USDTAddress]);let a;ge.coreContractChain===42||ge.coreContractChain===5?a=r[r.length-1].div(1e6).toNumber():a=r[r.length-1].toNumber()/1e6,console.debug("Push PRice",a);const h=ve(await this.state.pushToken.balanceOf(p.uniV2LPToken)),x=ve(await this.state.pushToken.attach(p.WETHAddress).balanceOf(p.uniV2LPToken)),d=await this.state.uniswapV2Router02.getAmountsOut(Se.toString(),[p.WETHAddress,p.USDTAddress]);let u;ge.coreContractChain===42||ge.coreContractChain===5?u=ve(d[d.length-1]):u=d[d.length-1].toNumber()/1e6,console.debug("Eth Price",u);const v=ve(await this.state.pushToken.attach(p.uniV2LPToken).totalSupply()),E=(h*a+x*u)/v/a;s({currentEpoch:l,lpToPushRatio:E})}));ue(this,"getPUSHPoolStats",async()=>new Promise(async(s,o)=>{const l=this.state.yieldFarmingPUSH;let r=await l.NR_OF_EPOCHS();const a=await l.getCurrentEpoch();r=r.toString()>a.toString()?a:r;const h=dt(I.from(this.state.genesisEpochAmountPUSH)),x=dt(I.from(this.state.deprecationPerEpochPUSH)),d=this.calcTotalAmountPerEpoch(h,r,x);this.state.rewardForCurrentEpochPush=d;const u=await l.getPoolSize(a.add(1));s({currentEpochPUSH:a,totalEpochPUSH:r,poolBalance:u})}));ue(this,"getLPPoolStats",async s=>new Promise(async(o,l)=>{const r=this.state.yieldFarmingLP;let a=await r.NR_OF_EPOCHS();const h=await r.getCurrentEpoch();a=a.toString()>h.toString()?h:a;const x=await r.getPoolSize(h.add(1));o({currentEpochPUSH:h,totalEpochPUSH:a,poolBalance:x})}));ue(this,"getUserData",async s=>new Promise(async(o,l)=>{if(this.state.account){const r=await s.getCurrentEpoch().then(_=>I.from(Math.min(_,100))),a=await s.getCurrentEpoch(),h=await s.getEpochStake(this.state.account,a.add(1)),x=(await s.lastEpochIdHarvested(this.state.account)).toNumber();let d=this.getAccumulatedReward(r,s),u=this.getTotalAvailableRewards(x,r,s),[v,E]=await Promise.all([d,u]);o({epochStakeNext:h,totalAccumulatedReward:v,totalAvailableReward:E})}}));ue(this,"getTotalAvailableRewards",async(s,o,l)=>{let r=[];for(var a=s+1;a<=o.toNumber();a++){const x=this.calculateUserEpochReward(a,l);r.push(x)}let h=(await Promise.all(r)).reduce((x,d)=>x+d,0);return h=h.toFixed(2),h});ue(this,"getAccumulatedReward",async(s,o)=>{let l=[];for(var r=0;r<=s.toNumber();r++){const h=this.calculateUserEpochReward(r,o);l.push(h)}let a=(await Promise.all(l)).reduce((h,x)=>h+x,0);return a=a.toFixed(2),a});ue(this,"calcTotalAmountPerEpoch",(s,o,l)=>s.sub(o.mul(l)));ue(this,"calculateUserEpochReward",async(s,o)=>{const l=ve(await o.getEpochStake(this.state.account,s)),r=ve(await o.getPoolSize(s));let a=0;if(r>0)if(o.address==p.yieldFarmLP){const h=this.state.genesisEpochAmountLP,x=this.state.deprecationPerEpochLP,d=h-x*s;a=l/r*d}else{const h=this.state.genesisEpochAmountPUSH,x=this.state.deprecationPerEpochPUSH,d=h-x*s;a=l/r*d}return a})}static getInstance(){return ke.instance||(ke.instance=new ke),ke.instance}};ue(ke,"instance",null);let Ce=ke;const K=t=>e.jsx($s,{wrapperProps:{width:"100%",maxWidth:"none",minWidth:"auto",display:"flex",flex:"1",margin:t.margin?t.margin:"0"},placementProps:{background:"none",bottom:t.bottom?t.bottom:"25px",left:t.error?"40px":"0px"},tooltipContent:t.error?e.jsx(It,{title:t.ToolTipTitle,width:t.ToolTipWidth}):e.jsx(ct,{title:t.ToolTipTitle,body:t.ToolTipBody}),children:t.children}),It=t=>e.jsx(P,{width:t.width,background:"#131313",justifyContent:"flex-start",border:"1px solid rgba(173, 176, 190, 0.2)",alignItems:"flex-start",padding:"0.75rem 0.75rem 0.75rem 1rem",boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.05)",color:"#FFF",borderRadius:"2px 12px 12px 12px",children:e.jsx(D,{color:"inherit",children:t.title})}),ct=({title:t,body:s})=>e.jsxs(Dt,{children:[e.jsx(Lt,{children:t}),e.jsxs(Nt,{children:[s,"  "," ",s.includes("Push Fee Pool APR")&&e.jsx(vt,{cursor:"pointer",href:"https://medium.com/push-protocol/new-push-yield-farming-rewards-full-details-4a9ff473226d",target:"_blank",children:"here"})]})]}),Dt=i(P)`
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


`,Lt=i(D)`
  color: ${t=>t.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`,Nt=i(D)`
  color: ${t=>t.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
  text-align:left;
`,ce="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15284_45077)'%3e%3cpath%20d='M8.5%2014.5C11.8137%2014.5%2014.5%2011.8137%2014.5%208.5C14.5%205.18629%2011.8137%202.5%208.5%202.5C5.18629%202.5%202.5%205.18629%202.5%208.5C2.5%2011.8137%205.18629%2014.5%208.5%2014.5Z'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%208C8.13261%208%208.25979%208.05268%208.35355%208.14645C8.44732%208.24021%208.5%208.36739%208.5%208.5V11C8.5%2011.1326%208.55268%2011.2598%208.64645%2011.3536C8.74021%2011.4473%208.86739%2011.5%209%2011.5'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.25%206.5C8.66421%206.5%209%206.16421%209%205.75C9%205.33579%208.66421%205%208.25%205C7.83579%205%207.5%205.33579%207.5%205.75C7.5%206.16421%207.83579%206.5%208.25%206.5Z'%20fill='%23797D8F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15284_45077'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",ht=({poolName:t,userData:s,PoolStats:o,poolAddress:l,getUserData:r,tokenAddress:a,setActiveTab:h})=>{const{account:x,provider:d,wallet:u,isWalletConnected:v,connect:E}=ye(),[_,B]=n.useState(!1),[N,$]=n.useState(!1),[G,O]=n.useState(!1),[ee,F]=n.useState(null),[ae,Y]=n.useState(null),[W,k]=n.useState(null),[V,M]=n.useState(0),w=ze(),R=_e(),J=async()=>{if(!v){E();return}if(!N){if((s==null?void 0:s.totalAvailableReward)==0){k("No Rewards to Claim"),$(!1);return}$(!0);var m=d.getSigner(x);new b(l,y.yieldFarming,m).massHarvest().then(async g=>{w.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await d.waitForTransaction(g.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:C=>e.jsx(xe,{size:C,color:"green"})}),r(),$(!1)}catch(C){w.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${C.name}+ ")`,toastType:"ERROR",getToastIcon:S=>e.jsx(L,{size:S,color:"red"})}),$(!1)}}).catch(g=>{w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:C=>e.jsx(L,{size:C,color:"red"})}),$(!1)})}},we=async()=>{if(!v){E();return}if(_)return;B(!0);const m=H(s.epochStakeNext);if(m==0){Y("Nothing to unstake, Stake Now in new reward program."),B(!1);return}var g=d.getSigner(x);let C=new b(p.staking,y.staking,g);await C.balanceOf(x,a),C.withdraw(a,I.from(m).mul(I.from(10).pow(18))).then(async S=>{w.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await d.waitForTransaction(S.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:j=>e.jsx(xe,{size:j,color:"green"})}),B(!1),r()}catch(j){console.error("Error",j),w.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${j.name}+ ")`,toastType:"ERROR",getToastIcon:A=>e.jsx(L,{size:A,color:"red"})}),B(!1)}}).catch(S=>{w.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Cancelled! ${S.message}`,toastType:"ERROR",getToastIcon:j=>e.jsx(L,{size:j,color:"red"})}),B(!1)})},U=async()=>{if(!v){E();return}if(G)return;let m=3;const g=H(s.epochStakeNext);if(g==0){w.showMessageToast({toastTitle:"Error",toastMessage:"Nothing to Withdraw!",toastType:"ERROR",getToastIcon:X=>e.jsx(L,{size:X,color:"red"})}),O(!1),F(null);return}var C=d.getSigner(x);let S=new b(p.staking,y.staking,C);const j=a===p.pushToken?p.pushCoreV2:p.stakingV2;var A=new b(a,y.pushToken,C);let z=await A.allowance(x,j),te=H(z);parseInt(te)>=parseInt(g)?(m=2,M(50)):(m=3,M(33)),O(!0),F(`Withdrawing 1/${m}`);let se;se=S.withdraw(a,I.from(g).mul(I.from(10).pow(18))),se.then(async X=>{if(w.showLoaderToast({loaderMessage:"Withdrawing! Please Wait..."}),await d.waitForTransaction(X.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Successfully withdrawn!",toastType:"SUCCESS",getToastIcon:he=>e.jsx(xe,{size:he,color:"green"})}),a===p.pushToken){var q=new b(a,y.pushToken,C);let he=await q.allowance(x,p.pushCoreV2),ne=H(he);parseInt(ne)>=parseInt(g)?Te(X,g,m):(X=q.approve(p.pushCoreV2,I.from(g).mul(I.from(10).pow(18))),F(`Approving 2/${m}`),M(66),X.then(async re=>{w.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await d.waitForTransaction(re.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:fe=>e.jsx(xe,{size:fe,color:"green"})}),Te(re,g,m)}).catch(re=>{console.error("Error in approving 2",re),w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:fe=>e.jsx(L,{size:fe,color:"red"})}),O(!1),F(null),r(),M(0)}))}else{var q=new b(a,y.pushToken,C);let ne=await q.allowance(x,p.stakingV2),re=H(ne);parseInt(re)>=parseInt(g)?Q(X,g,m):(X=q.approve(p.stakingV2,I.from(g).mul(I.from(10).pow(18))),F(`Approving 2/${m}`),M(66),X.then(async fe=>{w.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await d.waitForTransaction(fe.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:lt=>e.jsx(xe,{size:lt,color:"green"})}),Q(fe,g,m)}).catch(fe=>{console.error("Error in approving",fe),w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:lt=>e.jsx(L,{size:lt,color:"red"})}),O(!1),F(null),r(),M(0)}))}}).catch(X=>{console.error("Error in withdrawing: ",X),w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Withdraw!",toastType:"ERROR",getToastIcon:q=>e.jsx(L,{size:q,color:"red"})}),O(!1),F(null),M(0)})},Q=async(m,g,C)=>{if(!v){E();return}var S=d.getSigner(x),j=new b(p.stakingV2,y.stakingV2,S);F(`Staking ${C}/${C}`),M(100),m=j.deposit(a,I.from(g).mul(I.from(10).pow(18))),m.then(async A=>{w.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await d.waitForTransaction(A.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!Successfully Deposited the UNI-V2 Token to V2 ",toastType:"SUCCESS",getToastIcon:z=>e.jsx(xe,{size:z,color:"green"})}),O(!1),r(),F(null),h(0)}).catch(A=>{console.error("Error in depositing: ",A),w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit the Amount",toastType:"ERROR",getToastIcon:z=>e.jsx(L,{size:z,color:"red"})}),O(!1),r(),F(null),M(0)})},Te=async(m,g,C)=>{if(!v){E();return}var S=d.getSigner(x);let j=new b(p.pushCoreV2,y.pushCoreV2,S);F(`Staking ${C}/${C}`),M(100),m=j.stake(I.from(g).mul(I.from(10).pow(18))),m.then(async A=>{w.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await d.waitForTransaction(A.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Successfully Deposited the Push Token to V2 ",toastType:"SUCCESS",getToastIcon:z=>e.jsx(xe,{size:z,color:"green"})}),O(!1),r(),F(null),h(0)}).catch(A=>{console.error("Error in depositing: ",A),w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit Push Token",toastType:"ERROR",getToastIcon:z=>e.jsx(L,{size:z,color:"red"})}),O(!1),r(),F(null),M(0)})};n.useEffect(()=>{k(null),Y(null)},[x]);const f=Pe(600);return e.jsxs($t,{margin:t==="UNI-V2"?" 10px 0 10px 10px ":"  10px 10px 10px 0",children:[e.jsx(P,{margin:"0px 0px 20px 0",children:o?e.jsxs(e.Fragment,{children:[e.jsxs(Vt,{children:[t==="UNI-V2"?"Uniswap V2 Staking Pool":"PUSH Staking Pool ",e.jsx(Bt,{children:"Deprecated"})]}),e.jsxs(Xe,{children:["Current APR"," ",e.jsx(me,{color:"#D53A94",fontWeight:"600",children:"0%"})]})]}):e.jsxs(Me,{padding:"15px 15px 0 15px",children:[e.jsx(c,{height:"15px",width:"234px",margin:"0 0 10px 0"}),e.jsx(c,{height:"15px",width:"112px"})]})}),e.jsxs(P,{children:[e.jsxs(Ht,{border:`1px solid ${R.stakingBorder}`,borderRadius:"16px",children:[e.jsx(P,{margin:f?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:f?" 7px":"10px",children:o?e.jsxs(e.Fragment,{children:[e.jsx(Xe,{children:"Current Reward"}),e.jsx(D,{fontSize:f?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:"0 PUSH"})]}):e.jsxs(Me,{padding:f?"0px":"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:f?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(c,{height:"12px",width:f?"65px":"100px}"})]})}),e.jsx(Ot,{width:"10px",height:"100%"}),e.jsx(P,{margin:f?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:f?" 7px":"10px",children:o?e.jsxs(e.Fragment,{children:[e.jsx(Xe,{children:"Total Staked"}),e.jsxs(Wt,{fontSize:f?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[Z(H(o==null?void 0:o.poolBalance))," ",t=="UNI-V2"?"UNI-V2":"PUSH"]})]}):e.jsxs(Me,{padding:f?"0px":"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:f?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(c,{height:"12px",width:f?"65px":"100px}"})]})})]}),e.jsx(T,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:o?e.jsxs(e.Fragment,{children:[e.jsx(gt,{padding:"0px 5px 0px 0px",children:"Current Epoch"}),e.jsx(gt,{margin:"0 0 0 5px",children:"100 / 100"})]}):e.jsx(Me,{padding:"6px 0px 0 15px",children:e.jsx(c,{height:"17px",width:"124px"})})}),e.jsx(_t,{children:s?e.jsxs(P,{children:[e.jsxs(T,{justifyContent:"space-between",margin:f?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ie,{children:["User Deposit",e.jsx(De,{children:e.jsx(K,{ToolTipTitle:"User Deposited",ToolTipBody:`Amount of ${t} Token User Staked`,children:e.jsx(oe,{src:ce,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Le,{children:[" ",H(s==null?void 0:s.epochStakeNext)," ",t=="UNI-V2"?"UNI-V2":"PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:f?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ie,{children:["Rewards Claimed",e.jsx(De,{children:e.jsx(K,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(oe,{src:ce,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Le,{children:[" ",Z(((s==null?void 0:s.totalAccumulatedReward)-(s==null?void 0:s.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:f?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ie,{children:["Current Epoch Reward",e.jsx(De,{children:e.jsx(K,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(oe,{src:ce,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsx(Le,{children:"0 PUSH"})]}),e.jsxs(T,{justifyContent:"space-between",margin:f?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ie,{children:["Available for Claiming",e.jsx(De,{children:e.jsx(K,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(oe,{src:ce,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Le,{children:[Z(s==null?void 0:s.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(be,{padding:"16px 15px 16px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]})]})})]}),e.jsx(Gt,{padding:f?"0px ":"0px 14px",margin:"24px 0px 0px 0px",children:s?e.jsxs(e.Fragment,{children:[e.jsx(ut,{children:H(s==null?void 0:s.epochStakeNext)==="0"?e.jsx(K,{error:!0,ToolTipTitle:"Nothing to Withdraw, so you cannot Migrate.",ToolTipWidth:"16rem",bottom:"-50px",margin:"0 0 15px 0",children:e.jsx(Fe,{border:"none",cursor:"default",background:R.disableButtonBg,color:R.disabledButtonText,children:e.jsx(mt,{children:!G&&ee==null&&e.jsxs(Ge,{color:R.disabledButtonText,weight:"400",cursor:"default",children:["Migrate to ",t==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]})})})}):e.jsxs(Yt,{onClick:U,children:[e.jsx(Kt,{style:{width:`${V}%`}}),e.jsxs(mt,{children:[!G&&ee==null&&e.jsxs(Ge,{color:"#FFF",weight:"400",cursor:"pointer",children:["Migrate to ",t==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]}),G&&ee!=null&&e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:"#FFF",title:ee,titleColor:"#FFF"})]})]})}),e.jsxs(ut,{children:[H(s==null?void 0:s.epochStakeNext)==="0"?e.jsx(K,{error:!0,ToolTipTitle:ae||"Nothing to unstake, Stake First",ToolTipWidth:"16rem",margin:"0 10px 0 0",bottom:"-30px",children:e.jsx(Fe,{border:"none",cursor:"default",background:R.disableButtonBg,color:R.disabledButtonText,children:_?e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:R.activeButtonText,title:"Claiming",titleColor:R.activeButtonText}):` Unstake ${t}`})}):e.jsx(Fe,{border:`1px solid ${R.activeButtonText}`,background:"transparent",color:R.activeButtonText,cursor:"pointer",margin:"0 10px 0 0",onClick:we,children:_?e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:R.activeButtonText,title:"Unstaking",titleColor:R.activeButtonText}):` Unstake ${t}`}),(s==null?void 0:s.totalAvailableReward)==="0.00"?e.jsx(K,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,ToolTipWidth:"10rem",children:e.jsx(Fe,{border:"none",cursor:"default",background:R.disableButtonBg,color:R.disabledButtonText,children:N?e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:R.activeButtonText,title:"Claiming",titleColor:R.activeButtonText}):" Claim Rewards"})}):e.jsx(Fe,{border:`1px solid ${R.activeButtonText}`,background:"transparent",color:R.activeButtonText,cursor:"pointer",onClick:J,children:N?e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:R.activeButtonText,title:"Claiming",titleColor:R.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Me,{width:"100%",children:[e.jsx(c,{height:"49px",width:"100%",margin:"0 0 11px 0"}),e.jsx(c,{height:"49px",width:"100%"})]})})]})},$t=i(He)`
  border: 1px solid ${t=>t.theme.stakingBorder};
  border-radius: 24px;
  padding: 24px 19px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  // min-height: 587px;
  color: ${t=>t.theme.stakingPrimaryText};
`,Vt=i(D)`
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
`,Bt=i(me)`
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
`,Xe=i.p`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Ot=i.div`
  width: 1px;
  height: 100%;
  background: ${t=>t.theme.stakingBorder};
`,Ie=i.div`
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
`,Wt=i(D)`
  color: ${t=>t.theme.stakingSecondaryText};
`,gt=i(Vs)`
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
`,De=i(me)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,Ht=i(T)`
  max-height: 108px;
  min-height: 108px;
  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,Le=i(D)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${t=>t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,_t=i(P)`
  min-height: 150px;
`,Gt=i(P)`
  // min-height:132px;
`,ut=i.div`
  display: flex;
  width: 100%;
  // margin:15px 0px 0px 0px;
`;i(pt)`
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
`;const Yt=i(pt)`
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
`,Kt=i.div`
  min-height: 37px;
  background-color: rgb(183, 46, 126);
  transition: width 0.5s ease 0s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,mt=i.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #eee;
`,Fe=i(pt)`
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
`,Me=i(be)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,wt=({logo:t,title:s,body:o,setActiveTab:l})=>{const r=Pe(600);return e.jsxs(T,{style:{color:t==="announcement"?"white":"#333"},justifyContent:"stretch",padding:r?"12px":"16px",background:t==="announcement"?"linear-gradient(90deg, #121315 -2.55%, #2A2A39 32.62%, #8E317A 68.34%, #121315 102.97%)":"#FFF7DA",borderRadius:"16px",children:[e.jsx(oe,{width:t==="announcement"?"60px":"32px",height:t==="announcement"?"60px":"32px",src:Rt(`svg/${t}.svg`),alt:"Announcement Logo"}),e.jsxs(P,{margin:t==="announcement"?"0 0 0 16px":"0 0 0 13px",justifyContent:"center",alignItems:"flex-start",gap:t==="announcement"?"4px":"0px",children:[e.jsx(D,{color:"inherit",fontSize:r?"20px":"24px",textAlign:"left",fontWeight:500,children:s}),e.jsxs(D,{color:"inherit",fontSize:r?"12px":"16px",textAlign:"left",fontWeight:500,children:[o," ",s.includes("New V2")&&e.jsxs(e.Fragment,{children:[e.jsx(Jt,{onClick:()=>l(1),children:"here"})," to migrate."]})]})]})]})},Jt=i(vt)`
  cursor: pointer;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;ge.coreContractChain;const qt=({setActiveTab:t})=>{const{account:s,provider:o}=ye(),[l,r]=n.useState(null),[a,h]=n.useState(null),[x,d]=n.useState(null),[u,v]=n.useState(null),[E,_]=n.useState(null),[B,N]=n.useState(null),[$,G]=n.useState(null),[O,ee]=n.useState(null),[F,ae]=n.useState(null),[Y,W]=n.useState(null),k=o==null?void 0:o.getSigner(s),V=n.useCallback(async()=>{const U=await Ce.getInstance().getPoolStats();N({...U})},[l,a,x,u,E]),M=n.useCallback(async()=>{const U=await Ce.getInstance().getPUSHPoolStats();G({...U})},[l,a,x,u,E]),w=n.useCallback(async U=>{const Q=await Ce.getInstance().getLPPoolStats(U);ee({...Q})},[l,a,x,u,E]),R=n.useCallback(async()=>{const U=await Ce.getInstance().getUserData(u);ae({...U})},[u]),J=n.useCallback(async()=>{const U=await Ce.getInstance().getUserData(x);W({...U})},[x]);n.useEffect(()=>{let U=new b(p.pushToken,y.pushToken,k),Q=new b(p.staking,y.staking,k),Te=new b(p.depYieldFarmPUSH,y.yieldFarming,k),f=new b(p.depYieldFarmLP,y.yieldFarming,k),m=new b(p.uniswapV2Router02,y.uniswapV2Router02,k);if(r(U),h(Q),v(Te),d(f),_(m),k&&s){var g=o.getSigner(s);let C=new b(p.pushToken,y.pushToken,g),S=new b(p.staking,y.staking,g),j=new b(p.depYieldFarmPUSH,y.yieldFarming,g),A=new b(p.depYieldFarmLP,y.yieldFarming,g),z=new b(p.uniswapV2Router02,y.uniswapV2Router02,g);r(C),h(S),v(j),d(A),_(z)}},[s]),n.useEffect(()=>{l!=null&&a!=null&&u!=null&&(Ce.getInstance().init(s,l,a,u,x,E),V())},[V]),n.useEffect(()=>{B&&we(B)},[B]);const we=async U=>{M(),w(U),R(),J()};return e.jsxs(e.Fragment,{children:[e.jsx(wt,{logo:"WarningCircle",title:"This reward program (V1) has ended.",body:"To continue earning rewards please migrate to new pools.",setActiveTab:t}),e.jsxs(Zt,{children:[e.jsx(ht,{poolName:"PUSH",userData:F,PoolStats:$,poolAddress:p.depYieldFarmPUSH,getUserData:R,getPoolStats:M,tokenAddress:p.pushToken,setActiveTab:t}),e.jsx(ht,{poolName:"UNI-V2",userData:Y,PoolStats:O,poolAddress:p.depYieldFarmLP,getUserData:J,getPoolStats:w,tokenAddress:p.uniV2LPToken,setActiveTab:t})]})]})},Zt=i(T)`
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
`,Xt=({poolStats:t})=>{function s(l){return l==null?void 0:l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const o=Pe(600);return e.jsx(Qt,{justifyContent:"stretch",children:t?e.jsxs(e.Fragment,{children:[e.jsx(Tt,{fontSize:o?"16px":"18px",textAlign:"left",fontWeight:600,children:"Push Price"}),e.jsxs(T,{gap:"5px",justifyContent:"flex-end",children:[e.jsxs(Tt,{fontSize:o?"18px ":"24px",textAlign:"left",fontWeight:600,children:["$",s(t==null?void 0:t.pushPrice.toFixed(2))]}),e.jsx(oe,{width:"25px",height:o?"20px":"27px",src:Rt("svg/uniswapLogo.svg"),alt:"Uniswap Logo"})]})]}):e.jsxs(es,{children:[e.jsx(c,{height:"12px",width:"135px",margin:"10px 0 10px 0"}),e.jsx(c,{height:"12px",width:"135px",margin:"10px 0 10px 0"})]})})},Qt=i(T)`
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
`,Tt=i(D)`
  color: ${t=>t.theme.stakingPrimaryText};
`,es=i(be)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
  flex-direction: row;
  justify-content: inherit;
  flex: 1;
`,ts=({getLpPoolStats:t,poolStats:s,setPoolStats:o})=>{const[l,r]=Ye.useState(""),[a,h]=Ye.useState(),x=()=>{const u=s.epochEndTime,v=new Date().getTime()+u*1e3;h(v)};Ye.useEffect(()=>{s&&x()},[s]);const d=()=>{if(s!=null&&s.epochEndTimestamp){s.epochEndTimestamp.toNumber();const u=new Date().getTime(),v=a-u;v<0&&(o(null),t());const E=Math.floor(v/(1e3*60*60*24)),_=Math.floor(v%(1e3*60*60*24)/(1e3*60*60)),B=Math.floor(v%(1e3*60*60)/(1e3*60)),N=Math.floor(v%(1e3*60)/1e3);r(`${E}D ${_}H ${B}M ${N}S`)}};return Ye.useEffect(()=>{const u=setTimeout(()=>{d()},1e3);return()=>clearTimeout(u)}),e.jsxs(ss,{children:[e.jsxs(et,{alignItems:"baseline",justifyContent:"center",background:"linear-gradient(0deg, #7ADDB3, #7ADDB3), #FFFFFF",children:[e.jsx(tt,{background:"radial-gradient(70% 90% at 40% 16.25%, #7CDCB4 2.6%, #7ADDB3 53.65%, #E888F8 85.42%, #F99DEA 100%)"}),s?e.jsx(e.Fragment,{children:e.jsxs(at,{children:[e.jsx(st,{children:"Total Value Locked"}),e.jsx(ot,{children:`$ ${Z(s==null?void 0:s.totalValueLocked.toFixed(2))}`})]})}):e.jsx(Qe,{})]}),e.jsxs(et,{alignItems:"baseline",justifyContent:"center",background:"#F58DF8",children:[e.jsx(tt,{background:"radial-gradient(70% 90% at 40% 16.25%, #F58DF8 2.6%, #F47EF8 53.65%, #A17DEF 85.42%, #AE68F4 100%)"}),s?e.jsx(e.Fragment,{children:e.jsxs(at,{children:[e.jsx(st,{children:"Push Rewards Given"}),e.jsxs(it,{justifyContent:"end",children:[e.jsx(ot,{children:Z(Math.min(H(s==null?void 0:s.pushRewardsDistributed),H(s==null?void 0:s.totalDistributedAmount)))}),e.jsxs(me,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:["out of ",Z(H(s==null?void 0:s.totalDistributedAmount))]})]})]})}):e.jsx(Qe,{})]}),e.jsxs(et,{alignItems:"baseline",justifyContent:"center",background:"#A17DEF",children:[e.jsx(tt,{background:"radial-gradient(70% 90% at 40% 16.25%, #A17DEF 2.6%, #9770ED 53.65%, #DF7EEF 85.42%, #F488E3 100%)"}),l?e.jsx(e.Fragment,{children:e.jsxs(at,{children:[e.jsx(st,{children:"Time Left"}),e.jsxs(it,{justifyContent:"end",children:[e.jsx(ot,{children:l}),e.jsx(me,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:"until next epoch"})]})]})}):e.jsx(Qe,{})]})]})},Qe=()=>{const t=Pe(1300);return e.jsxs(os,{padding:"21px 15px",children:[e.jsx(c,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(c,{height:"26px;",width:t?"175px":"189px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(c,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"})]})},ss=i(T)`
  column-gap: 12px;

  @media (max-width: 992px) {
    flex-direction: column;
    row-gap: 12px;
  }
`,et=i(P)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`,tt=i(P)`
  position: absolute;
  width: 170px;
  height: 170px;
  right: 5px;
  top: -35px;
  border-radius: 50%;

  box-shadow: 0px 30px 50px rgba(240, 86, 254, 0.5);
  filter: blur(2.5px);
`,st=i(me)`
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
`,ot=i(me)`
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
`,it=i(P)`
  align-items: flex-start;
`,at=i(it)`
  padding: 20px 10px 20px 15px;
  // gap: 8px;
  justify-content: center;
`,os=i(be)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  justify-content: center;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,ft=({onClose:t,InnerComponentProps:s,toastObject:o})=>{const{title:l,getUserData:r,getPoolStats:a,setUnstakeErrorMessage:h,setWithdrawErrorMessage:x}=s,{account:d,provider:u,isWalletConnected:v,connect:E}=ye(),[_,B]=n.useState(0),[N,$]=n.useState(0),[G,O]=n.useState(!1),[ee,F]=n.useState(!1),[ae,Y]=n.useState(!1);n.useState(null),n.useContext(Os);const[W,k]=n.useState(0),V=()=>{h(null),x(null),t()},M=_e(),w=n.useRef(null);Ft(w,()=>V());const R=async()=>{var m=u.getSigner(d);const g=l==="Uni-V2"?p.uniV2LPToken:p.pushToken,C=new b(g,y.uniV2LpToken,m);let S=Ys(await C.balanceOf(d));B(parseInt(S.toString().replace(/\D/,""))||0)},J=async()=>{F(!0);var m=u.getSigner(d);let g;l==="Uni-V2"?g=await new b(p.uniV2LPToken,y.uniV2LpToken,m).allowance(d,p.stakingV2):g=await new b(p.pushToken,y.uniV2LpToken,m).allowance(d,p.pushCoreV2),$(H(g)),F(!1)};n.useEffect(()=>{R(),J()},[]);const we=async()=>{if(!v){E();return}if(G||ee)return;F(!0);var m=u.getSigner(d);let g;const C=Hs(W.toString(),18);l==="Uni-V2"?g=new b(p.uniV2LPToken,y.uniV2LpToken,m).approve(p.stakingV2,C):g=new b(p.pushToken,y.uniV2LpToken,m).approve(p.pushCoreV2,C),g.then(async S=>{o.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await u.waitForTransaction(S.hash),o.showMessageToast({toastTitle:"Success",toastMessage:`Successfully approved ${l} Tokens!`,toastType:"SUCCESS",getToastIcon:j=>e.jsx(xe,{size:j,color:"green"})}),F(!1),O(!0)}catch(j){console.error("Error",j),o.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:A=>e.jsx(L,{size:A,color:"red"})}),F(!1)}}).catch(S=>{console.error("Error",S),o.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature",toastType:"ERROR",getToastIcon:j=>e.jsx(L,{size:j,color:"red"})}),F(!1)})},U=async()=>{if(!v){E();return}if(ae||!G)return;if(Y(!0),W==0){o.showMessageToast({toastTitle:"Error",toastMessage:`You need to deposit atleast 1 ${l} token `,toastType:"ERROR",getToastIcon:C=>e.jsx(L,{size:C,color:"red"})}),Y(!1);return}var m=u.getSigner(d);let g;l==="Uni-V2"?g=new b(p.stakingV2,y.stakingV2,m).deposit(p.uniV2LPToken,I.from(W).mul(I.from(10).pow(18))):g=new b(p.pushCoreV2,y.pushCoreV2,m).stake(I.from(W).mul(I.from(10).pow(18))),g.then(async C=>{o.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await u.waitForTransaction(C.hash),o.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:S=>e.jsx(xe,{size:S,color:"green"})}),a(),r(),Y(!1),V()}catch(S){console.error("Error",S),o.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${S.name}+ ")`,toastType:"ERROR",getToastIcon:j=>e.jsx(L,{size:j,color:"red"})}),Y(!1)}}).catch(C=>{console.error("Error in depositing",C),C.reason=C.reason.slice(C.reason.indexOf("::")+1),o.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Cancelled! ${C.reason}`,toastType:"ERROR",getToastIcon:S=>e.jsx(L,{size:S,color:"red"})}),Y(!1)})},Q=m=>{m.preventDefault(),k(parseInt(m.target.value.replace(/\D/,""))||0),N>=parseInt(m.target.value.replace(/\D/,""))?O(!0):O(!1)},Te=m=>{k(parseInt(m.toString().replace(/\D/,""))||0)},f=Pe(600);return e.jsxs(is,{children:[e.jsxs(T,{justifyContent:"space-between",children:[e.jsx(as,{children:l==="Uni-V2"?"Uniswap V2 Staking Pool":"Push Fee Staking Pool"}),e.jsx(xt,{onClick:()=>V(),style:{cursor:"pointer"}})]}),e.jsxs(P,{children:[e.jsx(Ws,{weight:"500",size:"14px",self:"baseline",color:M.stakingSecondaryText,children:"You are Staking"}),e.jsxs(T,{width:"-webkit-fill-available",background:M.default.bg,height:"60px",padding:f?"8px":"14px",borderRadius:"12px",border:`1px solid ${M.modalBorderColor}`,children:[e.jsx(ns,{placeholder:"Enter Amount",flex:"2",radius:"4px",size:"32px",height:"32px",self:"auto",bg:"#FFF",color:M.stakingSecondaryText,value:W,onChange:m=>{m.preventDefault(),Q(m)},autoFocus:!0}),e.jsxs(rs,{onClick:()=>Te(_),children:["Max: ",_]})]})]}),e.jsxs(T,{margin:"20px 0",gap:"12px",children:[e.jsxs(ie,{variant:"primary",size:"medium",onClick:we,disabled:!!G,children:[!G&&!ee&&e.jsxs(Ge,{color:"#FFFFFF",weight:"400",cursor:"pointer",children:["Approve ",l]}),ee&&!G&&e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:"#fff",title:"Approving",titleColor:"#FFF"}),G&&e.jsx(Ge,{color:M.emptyButtonText,weight:"600",cursor:"default",children:"Approved"})]}),e.jsxs(ie,{variant:"outline",size:"medium",disabled:!!(!G||ae),onClick:U,children:[!ae&&"Deposit",ae&&e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFFF",title:"Depositing",titleColor:"#FFF"})]})]})]})},is=i.div`
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
`,as=i(D)`
  font-size: 16px;
  letter-spacing: normal;
  color: ${t=>t.theme.stakingPrimaryText};
`,ns=i(Bs)`
  background: transparent;
`,rs=i.p`
  font-size: 14px;
  text-align: right;
  text-decoration-line: underline;
  color: #657795;
  margin: 0px;
  cursor: pointer;
`,ls=({lpPoolStats:t,userDataLP:s,getLpPoolStats:o,getUserDataLP:l})=>{const{account:r,provider:a}=ye(),[h,x]=n.useState(!1),[d,u]=n.useState(!1),[v,E]=n.useState(null),[_,B]=n.useState(null),N=ze(),$=_e(),G=async()=>{if(h)return;x(!0);const V=H(s.epochStakeNext);if(V==0){B("Nothing to unstake. You need to stake first"),x(!1);return}var M=a.getSigner(r);let w=new b(p.stakingV2,y.stakingV2,M);await w.balanceOf(r,p.uniV2LPToken),w.withdraw(p.uniV2LPToken,I.from(V).mul(I.from(10).pow(18))).then(async R=>{N.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await a.waitForTransaction(R.hash),N.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:J=>e.jsx(xe,{size:J,color:"green"})}),x(!1),o(),l()}catch(J){console.error("Error",J),N.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${J.name}+ ")`,toastType:"ERROR",getToastIcon:we=>e.jsx(L,{size:we,color:"red"})}),x(!1)}}).catch(R=>{N.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:J=>e.jsx(L,{size:J,color:"red"})}),x(!1)})},O=async()=>{if(!d){if((s==null?void 0:s.totalAvailableReward)==0){E("No Rewards to Claim!");return}if(console.debug("Lp POOL stats",t),!t.currentEpochLP||t.currentEpochLP==1){N.showMessageToast({toastTitle:"Error",toastMessage:"Harvest unlocks from Epoch 2!)",toastType:"ERROR",getToastIcon:M=>e.jsx(L,{size:M,color:"red"})});return}u(!0);var V=a.getSigner(r);new b(p.yieldFarmLP,y.yieldFarming,V).massHarvest().then(async M=>{N.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await a.waitForTransaction(M.hash),N.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:w=>e.jsx(xe,{size:w,color:"green"})}),l(),u(!1)}catch(w){N.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${w.name}+ ")`,toastType:"ERROR",getToastIcon:R=>e.jsx(L,{size:R,color:"red"})}),u(!1)}}).catch(M=>{N.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:w=>e.jsx(L,{size:w,color:"red"})}),u(!1)})}};n.useEffect(()=>{E(null),B(null)},[r]);const ee=()=>{(t==null?void 0:t.currentEpochLP.toNumber())+1<=(t==null?void 0:t.totalEpochLP.toNumber())?ae():N.showMessageToast({toastTitle:"Error",toastMessage:"Epochs have ended!",toastType:"ERROR",getToastIcon:V=>e.jsx(L,{size:V,color:"red"})})},{isModalOpen:F,showModal:ae,ModalComponent:Y}=Ke(),W=ze(),k=Pe(600);return e.jsxs(ps,{children:[e.jsx(Y,{InnerComponent:ft,InnerComponentProps:{title:"Uni-V2",getUserData:l,getPoolStats:o,setUnstakeErrorMessage:B,setWithdrawErrorMessage:E},toastObject:W,modalPosition:Je.ON_PARENT}),e.jsx(P,{margin:"0px 0px 20px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(xs,{children:"Uniswap V2 LP Staking Pool"}),e.jsxs(nt,{children:["Current APR"," ",e.jsxs(me,{color:"#D53A94",fontWeight:"600",children:[">",Z(t==null?void 0:t.stakingAPR),"%"]})]})]}):e.jsxs(Ue,{padding:"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(c,{height:"12px",width:"112px"})]})}),e.jsxs(P,{flex:"5",children:[e.jsxs(ds,{border:`1px solid ${$.stakingBorder}`,borderRadius:"16px",children:[e.jsx(P,{margin:k?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:k?" 7px":"10px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(nt,{children:"Current Reward"}),e.jsxs(D,{fontSize:k?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:[Z(H(t==null?void 0:t.rewardForCurrentEpoch))," PUSH"]})]}):e.jsxs(Ue,{padding:k?"0px":"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:k?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(c,{height:"12px",width:k?"65px":"100px}"})]})}),e.jsx(cs,{width:"10px",height:"100%"}),e.jsx(P,{margin:k?"0 0 0 6px":"0 0 0 18px",padding:k?" 7px":"10px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(nt,{children:"Total Staked"}),e.jsxs(hs,{fontSize:k?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[Z(H(t==null?void 0:t.poolBalance))," UNI-V2"]})]}):e.jsxs(Ue,{padding:k?"0px":"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:k?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(c,{height:"12px",width:k?"65px":"100px}"})]})})]}),e.jsx(T,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:t?e.jsxs(e.Fragment,{children:[e.jsx(jt,{children:"Current Epoch"}),e.jsxs(jt,{children:[Math.min(t==null?void 0:t.currentEpochLP,t==null?void 0:t.totalEpochLP).toString(),"/",t==null?void 0:t.totalEpochLP.toString()]})]}):e.jsx(Ue,{padding:"5px 0px 0 15px",children:e.jsx(c,{height:"12px",width:"124px"})})}),s?e.jsxs(P,{children:[e.jsxs(T,{justifyContent:"space-between",margin:k?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ne,{children:["User Deposit",e.jsx($e,{children:e.jsx(K,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(oe,{src:ce,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ve,{children:[H(s==null?void 0:s.epochStakeNext)," UNI-V2"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:k?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ne,{children:["Rewards Claimed",e.jsx($e,{children:e.jsx(K,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(oe,{src:ce,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ve,{children:[" ",Z(((s==null?void 0:s.totalAccumulatedReward)-(s==null?void 0:s.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:k?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ne,{children:["Current Epoch Reward",e.jsx($e,{children:e.jsx(K,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(oe,{src:ce,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ve,{children:[" ",Z(s==null?void 0:s.potentialUserReward)," PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:k?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ne,{children:["Available for Claiming",e.jsx($e,{children:e.jsx(K,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(oe,{src:ce,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Ve,{children:[" ",Z(s==null?void 0:s.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(be,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]})]})]}),e.jsx(P,{padding:k?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:s?e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(ie,{variant:"primary",size:"medium",block:!0,onClick:()=>{ee()},children:"Stake $UNI-V2 LP Tokens"})}),e.jsxs(gs,{children:[H(s==null?void 0:s.epochStakeNext)==="0"?e.jsx(K,{error:!0,ToolTipTitle:"Nothing to unstake! Stake First.",ToolTipWidth:"16rem",bottom:"-30px",children:e.jsx(ie,{disabled:!0,size:"medium",block:!0,children:h?e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Unstake $UNI-V2"})}):e.jsx(ie,{size:"medium",variant:"outline",block:!0,onClick:G,children:h?e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:$.activeButtonText,title:"Unstaking",titleColor:$.activeButtonText}):"Unstake $UNI-V2"}),(s==null?void 0:s.totalAvailableReward)==="0.00"?e.jsx(K,{bottom:"-30px",left:"40px",ToolTipTitle:"No Rewards to Claim!",error:!0,ToolTipWidth:"10rem",children:e.jsx(ie,{disabled:!0,size:"medium",block:!0,children:d?e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFF"}):"Claim Rewards"})}):e.jsx(ie,{variant:"outline",size:"medium",block:!0,onClick:()=>O(),children:d?e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:$.activeButtonText,title:"Claiming",titleColor:$.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Ue,{width:"100%",children:[e.jsx(c,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(c,{height:"49px",width:"100%"})]})})]})},ps=i(He)`
  border: 1px solid ${t=>t.theme.stakingBorder};
  border-radius: 24px;
  padding: 20px;

  font-family: 'FK Grotesk Neu';

  margin: 10px 0 10px 10px;

  font-style: normal;
  font-weight: 500;
  min-height: 587px;
  color: ${t=>t.theme.stakingPrimaryText};

  @media (max-width: 1300px) {
    margin: 0 0 10px 0;
  }
  @media (max-width: 600px) {
    padding: 16px;
  }
`,xs=i(D)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${t=>t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`,nt=i.div`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  // color: #333333;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,ds=i(T)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,cs=i.div`
  width: 1px;
  height: 100%;
  background: ${t=>t.theme.stakingBorder};
`,Ne=i.div`
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
`,hs=i(D)`
  color: ${t=>t.theme.stakingSecondaryText};
`,jt=i(Mt)`
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
`,$e=i(me)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,Ve=i(D)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${t=>t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,gs=i.div`
  display: flex;
  gap: var(--spacing-xxxs, 4px);
  margin: 15px 0px 0px 0px;
  width: 100%;
`,Ue=i(be)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,us=t=>n.createElement("svg",{width:29,height:28,viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M26.1673 14.0002C26.1673 20.4431 20.9436 25.6668 14.5007 25.6668C8.05773 25.6668 2.83398 20.4431 2.83398 14.0002C2.83398 7.55725 8.05773 2.3335 14.5007 2.3335C20.9436 2.3335 26.1673 7.55725 26.1673 14.0002Z",fill:"#30CC8B"}),n.createElement("path",{d:"M20.6751 8.5083L12.7593 16.4335L9.49146 13.175L7.8418 14.8246L12.7616 19.7328L22.3254 10.158L20.6751 8.5083Z",fill:"white"})),ms=({onClose:t,InnerComponentProps:s})=>{const{currentTransactionNo:o,totalTransactionNo:l,transactionSteps:r,transactionText:a,setCurrentTransactionNo:h,setTotalTransactionNo:x,setTransactionSteps:d,claimRewards:u,unstakeTokensPaginated:v}=s,E=()=>{d(0),t()},_=async()=>{d(0),x(0),h(0),a!=null&&a.includes("Unstaking")?v():u()};return e.jsx(ws,{children:l?e.jsxs(e.Fragment,{children:[e.jsx(T,{justifyContent:"end",children:e.jsx(xt,{onClick:()=>E(),style:{cursor:"pointer"}})}),r===0&&e.jsxs(e.Fragment,{children:[e.jsx(Ut,{size:42,color:de.COLORS.PRIMARY_PINK,type:At.PROCESSING}),e.jsxs(P,{gap:"24px",margin:"16px 0 0 0",children:[e.jsxs(P,{children:[e.jsxs(D,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:["Please sign transaction ",o,"/",l]}),e.jsx(D,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"Processing your request"})]}),e.jsx(D,{fontSize:"18px",fontWeight:"400",color:"#657795",children:a}),e.jsx(P,{padding:"16px",children:e.jsx(D,{fontSize:"16px",fontWeight:"400",color:"#D53A94",children:"Confirm the request in your wallet"})})]})]}),r===1&&e.jsxs(P,{gap:"24px",children:[e.jsx(P,{gap:"9px",children:e.jsx(D,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:"Transaction Error"})}),e.jsx(P,{children:e.jsx(ie,{variant:"primary",size:"medium",onClick:_,children:"Retry"})})]}),r===2&&e.jsxs(P,{gap:"24px",children:[e.jsxs(P,{children:[e.jsx(us,{height:"50px",width:"50px"}),e.jsxs(P,{gap:"9px",children:[e.jsx(D,{fontSize:"28px",fontWeight:"500",letterSpacing:"normal",children:"Transactions Successful"}),e.jsx(D,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"You have claimed all the rewards."})]})]}),e.jsx(ie,{variant:"primary",size:"medium",onClick:E,children:"Close"})]})]}):e.jsx(Ut,{size:42,color:de.COLORS.PRIMARY_PINK,type:At.PROCESSING})})},ws=i(P)`
  min-width: 493px;
  padding: 32px 24px;
`,Ts=({userDataPush:t,getUserDataPush:s,PUSHPoolstats:o,getPUSHPoolStats:l})=>{const{account:r,provider:a}=ye(),[h,x]=n.useState(!1),[d,u]=n.useState(!1),[v,E]=n.useState(null),[_,B]=n.useState(null),[N,$]=n.useState(0),[G,O]=n.useState(0),[ee,F]=n.useState(0),[ae,Y]=n.useState(""),W=ze(),k=_e(),V=async S=>{var j=a.getSigner(r);let A=new b(p.pushToken,y.pushToken,j);if(await A.holderDelegation(r,S.address))return!0;try{W.showLoaderToast({loaderMessage:"Delegating! Please wait.."});const z=await A.setHolderDelegation(S.address,"true");return await a.waitForTransaction(z.hash),W.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Address Delegated",toastType:"SUCCESS",getToastIcon:te=>e.jsx(xe,{size:te,color:"green"})}),!0}catch(z){return console.error("Error in delegating",z),W.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${z.reason}`,toastType:"ERROR",getToastIcon:te=>e.jsx(L,{size:te,color:"red"})}),x(!1),!1}},M=async S=>{const j=(await S.userFeesInfo(r)).lastClaimedBlock;if(j.toNumber()!==0){const A=await S.genesisEpoch(),z=await S.epochDuration();return(j-A)/z}},w=async()=>{if(d)return;if(u(!0),(t==null?void 0:t.availableRewards)==0){B("No Rewards to Claim"),u(!1);return}var S=a.getSigner(r);let j=new b(p.pushCoreV2,y.pushCoreV2,S);const A=o==null?void 0:o.currentEpochNumber,z=14;if(!await V(j))return;let te=1;te=await M(j),g(),u(!1);let se=0;A-te<z,se=Math.ceil((A-te)/z),O(se),se!=0&&(await R(se,te,j,z),s(),F(2),$(0))},R=async(S,j,A,z)=>{const te=o==null?void 0:o.currentEpochNumber;let se=0;for(let X=0;X<S;X++){let q=j;j+=z;let he=Math.min(j,te-1);Y(`Claiming the rewards from Epoch ${q} to ${he} `),await A.harvestPaginated(he,{gasLimit:91e4}).then(async ne=>{try{W.showLoaderToast({loaderMessage:"Waiting for confirmation"}),await a.waitForTransaction(ne.hash),W.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:re=>e.jsx(xe,{size:re,color:"green"})}),se++,$(se)}catch{console.error("Error in the transaction",ne);return}}).catch(ne=>{throw console.error("Error in claiming the reward",ne),W.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${ne.reason}`,toastType:"ERROR",getToastIcon:re=>e.jsx(L,{size:re,color:"red"})}),Y(""),x(!1),s(),F(1),$(0),ne})}},J=async()=>{if(h)return;if(x(!0),H(t==null?void 0:t.userStaked)==0){E("Nothing to unstake, You need to stake first"),x(!1);return}var S=a.getSigner(r);let j=new b(p.pushCoreV2,y.pushCoreV2,S);const A=await V(j);if(u(!1),!A)return;const z=o==null?void 0:o.currentEpochNumber,te=14;let se=0;if(se=await M(j),se>=z-1){x(!1),E("PUSH cannot be unstaked until current epoch is over."),W.showMessageToast({toastTitle:"Unstaking Error",toastMessage:"You cannot unstake until Current Epoch gets over.",toastType:"ERROR",getToastIcon:q=>e.jsx(L,{size:q,color:"red"})});return}g();const X=Math.ceil((z-se)/te);O(X),X>1&&await R(X-1,se,j,te),Y("Unstaking Your Push Tokens. Please wait..."),j.unstake().then(async q=>{W.showLoaderToast({loaderMessage:"Unstaking! Waiting for Confirmation..."});try{await a.waitForTransaction(q.hash),W.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:he=>e.jsx(xe,{size:he,color:"green"})}),l(),s(),x(!1),F(2),$(0)}catch(he){console.error("Error",he),W.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${he.name}+ ")`,toastType:"ERROR",getToastIcon:ne=>e.jsx(L,{size:ne,color:"red"})}),Y(""),x(!1)}}).catch(q=>{console.error("Error: ",q);const he=q.reason.includes("PushCoreV2::unstake:"),ne=q.reason.includes("PushCoreV2::harvestPaginated:");if(he||ne)E("PUSH cannot be unstaked until current epoch is over.");else{let re=q.reason.slice(q.reason.indexOf("::")+1);re=re.replace("unstake:",""),W.showMessageToast({toastTitle:"Error",toastMessage:`${re}`,toastType:"ERROR",getToastIcon:fe=>e.jsx(L,{size:fe,color:"red"})})}x(!1),s(),F(1),$(0)})};n.useEffect(()=>{B(null),E(null)},[r]);const{isModalOpen:we,showModal:U,ModalComponent:Q}=Ke(),Te=ze(),f=Pe(600),{isModalOpen:m,showModal:g,ModalComponent:C}=Ke();return e.jsxs(Cs,{children:[e.jsx(Q,{InnerComponent:ft,InnerComponentProps:{title:"PUSH",getUserData:s,getPoolStats:l,setUnstakeErrorMessage:E,setWithdrawErrorMessage:B},toastObject:Te,modalPosition:Je.ON_PARENT}),e.jsx(C,{InnerComponent:ms,InnerComponentProps:{currentTransactionNo:N,totalTransactionNo:G,transactionSteps:ee,transactionText:ae,setCurrentTransactionNo:$,setTotalTransactionNo:O,setTransactionSteps:F,claimRewards:w,unstakeTokensPaginated:J},onConfirm:()=>{},modalPadding:"0px",modalPosition:Je.ON_ROOT}),e.jsx(P,{margin:"0px 0px 20px 0px",children:o?e.jsxs(e.Fragment,{children:[e.jsx(bs,{children:"PUSH Fee Staking Pool"}),e.jsxs(ys,{children:["Current APR",e.jsxs(me,{color:"#D53A94",fontWeight:"600",margin:"0 5px 0 5px",children:[">",Z(o==null?void 0:o.stakingAPR),"% + Fee"]}),e.jsx(fs,{})]})]}):e.jsxs(Ae,{padding:"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(c,{height:"12px",width:"112px"})]})}),e.jsxs(P,{flex:"5",children:[e.jsxs(ks,{border:`1px solid ${k.stakingBorder}`,borderRadius:"16px",children:[e.jsx(P,{margin:f?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:f?" 7px":"10px",children:o?e.jsxs(e.Fragment,{children:[e.jsx(Ct,{children:"Current Reward"}),e.jsxs(D,{fontSize:f?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"normal",children:[Z(H(o==null?void 0:o.currentReward))," PUSH"]})]}):e.jsxs(Ae,{padding:f?"0px":"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:f?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(c,{height:"12px",width:f?"65px":"100px}"})]})}),e.jsx(Ps,{width:"10px",height:"100%"}),e.jsx(P,{margin:f?"0 0 0 6px":"0 0 0 18px",padding:f?" 7px":"10px",children:o?e.jsxs(e.Fragment,{children:[e.jsx(Ct,{children:"Total Staked"}),e.jsxs(Es,{fontSize:f?"18px":"24px",fontWeight:"600",letterSpacing:"normal",children:[Z(H(o==null?void 0:o.totalStakedAmount))," PUSH"]})]}):e.jsxs(Ae,{padding:f?"0px":"5px 15px 0 15px",children:[e.jsx(c,{height:"12px",width:f?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(c,{height:"12px",width:f?"65px":"100px}"})]})})]}),e.jsx(T,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"normal",children:o?e.jsxs(e.Fragment,{children:[e.jsx(bt,{children:"Current Epoch"}),e.jsx(bt,{children:o==null?void 0:o.currentEpochNumber})]}):e.jsx(Ae,{padding:"5px 0px 0 15px",children:e.jsx(c,{height:"12px",width:"124px"})})}),t?e.jsxs(P,{children:[e.jsxs(T,{justifyContent:"space-between",margin:f?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Be,{children:["User Deposit",e.jsx(Oe,{children:e.jsx(K,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(oe,{src:ce,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(We,{children:[" ",Z(H(t==null?void 0:t.userStaked))," PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:f?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Be,{children:["Rewards Claimed",e.jsx(Oe,{children:e.jsx(K,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(oe,{src:ce,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(We,{children:[" ",Z((t==null?void 0:t.claimedReward).toFixed(2))," PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:f?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Be,{children:["Current Epoch Reward",e.jsx(Oe,{children:e.jsx(K,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(oe,{src:ce,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(We,{children:[" ",Z((t==null?void 0:t.potentialReward).toFixed(2))," PUSH"]})]}),e.jsxs(T,{justifyContent:"space-between",margin:f?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Be,{children:["Available for Claiming",e.jsx(Oe,{children:e.jsx(K,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(oe,{src:ce,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(We,{children:[" ",Z((t==null?void 0:t.availableRewards).toFixed(2))," PUSH"]})]})]}):e.jsxs(be,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]}),e.jsxs(T,{justifyContent:"space-between",children:[e.jsx(c,{height:"12px",width:"164px"}),e.jsx(c,{height:"12px",width:"72px"})]})]})]}),e.jsx(P,{padding:f?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(ie,{variant:"primary",size:"medium",block:!0,onClick:U,children:"Stake $PUSH"})}),e.jsxs(vs,{children:[(o==null?void 0:o.currentEpochNumber)<=2?e.jsx(St,{ToolTipTitle:"You can unstake once epoch 2 ends.",ButtonTitle:"Unstake PUSH"}):H(t==null?void 0:t.userStaked)==0||v!==null?e.jsx(St,{ToolTipTitle:v||"Nothing to unstake, Stake First",ButtonTitle:"Unstake PUSH"}):e.jsx(ie,{variant:"outline",size:"medium",block:!0,onClick:J,children:h?e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:k.activeButtonText,title:"Unstaking",titleColor:k.activeButtonText}):"Unstake $PUSH"}),(t==null?void 0:t.availableRewards)===0?e.jsx(K,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,left:"40px",ToolTipWidth:"10rem",children:e.jsx(ie,{size:"medium",block:!0,disabled:!0,children:d?e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Claim Rewards"})}):e.jsx(ie,{variant:"outline",size:"medium",block:!0,onClick:w,children:d?e.jsx(le,{type:pe.SEAMLESS,spinnerSize:26,spinnerColor:k.activeButtonText,title:"Claiming",titleColor:k.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Ae,{width:"100%",children:[e.jsx(c,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(c,{height:"49px",width:"100%"})]})})]})},St=t=>e.jsx(K,{error:!0,ToolTipTitle:t.ToolTipTitle,ToolTipWidth:"16rem",bottom:"-30px",children:e.jsx(ie,{size:"medium",disabled:!0,children:t.ButtonTitle})}),fs=()=>{const[t,s]=n.useState(!1),o=()=>s(!1),l=n.useRef(null);return Ft(l,()=>o()),e.jsxs(js,{ref:l,children:[e.jsx(oe,{onClick:()=>s(!t),src:ce,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}}),t&&e.jsx(Ss,{id:"channel",children:e.jsx(ct,{title:"",body:"Push Fee Pool APR distributes yield farming rewards + fee earned by protocol. More Info "})})]})},js=i.div`
  width: 34%;
  width: 100%;
  min-width: none;
  max-width: none;
  display: flex;
  flex: 1;
  height: fit-content;
  position: relative;
  @media ${qe.tablet} {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`,Ss=i.div`
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
`,Cs=i(He)`
  border: 1px solid ${t=>t.theme.stakingBorder};
  border-radius: 24px;
  padding: 20px;
  margin: 10px 10px 10px 0;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  min-height: 587px;
  color: ${t=>t.theme.stakingPrimaryText};

  @media (max-width: 1300px) {
    margin: 10px 0;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
`,bs=i(D)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${t=>t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`,ys=i.div`
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
`,Ct=i.p`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`,ks=i(T)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,Ps=i.div`
  width: 1px;
  height: 100%;
  background: ${t=>t.theme.stakingBorder};
`,Be=i.div`
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
`,Es=i(D)`
  color: ${t=>t.theme.stakingSecondaryText};
`,bt=i(Mt)`
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
`,Oe=i(me)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,We=i(D)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${t=>t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,vs=i.div`
  display: flex;
  margin: 15px 0px 0px 0px;
  gap: var(--s3);
  width: 100%;
`,Ae=i(be)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,Rs=({setActiveTab:t})=>{const{provider:s,account:o,chainId:l}=ye(),[r,a]=n.useState(),[h,x]=n.useState(),[d,u]=n.useState(),[v,E]=n.useState(),[_,B]=n.useState(),[N,$]=n.useState(null),[G,O]=n.useState(null),[ee,F]=n.useState(null),[ae,Y]=n.useState(null),[W,k]=n.useState(null),V=s==null?void 0:s.getSigner(o),M=n.useCallback(async()=>{const U=await Re.getInstance().getPoolStats(s);$({...U})},[h,r,v,d,_,s]),w=n.useCallback(async()=>{const U=await Re.getInstance().getPoolStats(s),Q=await Re.getInstance().getLPPoolStats(U);O({...Q})},[h,r,v,d,_,s]),R=n.useCallback(async()=>{},[]),J=n.useCallback(async()=>{const U=await Re.getInstance().getUserDataLP();F({...U})},[h,r,v,d,_]),we=n.useCallback(async()=>{const[U,Q]=await Re.getInstance().getUserDataPUSH(s);k({...U}),Y({...Q})},[h,r,v,d,_,s]);return n.useEffect(()=>{if(l!==ge.coreContractChain&&l!==ge.mainnetCoreContractChain)return;O(null),F(null),k(null),Y(null);let U=new b(p.stakingV2,y.stakingV2,V),Q=new b(p.pushToken,y.pushToken,V),Te=new b(p.pushCoreV2,y.pushCoreV2,V),f=new b(p.yieldFarmLP,y.yieldFarming,V),m=new b(p.uniswapV2Router02,y.uniswapV2Router02,V);if(x(U),a(Q),E(Te),u(f),B(m),V&&o){var g=s==null?void 0:s.getSigner(o);let C=new b(p.stakingV2,y.stakingV2,g),S=new b(p.pushToken,y.pushToken,g),j=new b(p.pushCoreV2,y.pushCoreV2,g),A=new b(p.yieldFarmLP,y.yieldFarming,g),z=new b(p.uniswapV2Router02,y.uniswapV2Router02,g);x(C),a(S),E(j),u(A),B(z)}Re.getInstance().init(o,U,Q,Te,f,m),M(),J(),w(),we()},[o,l]),e.jsxs(e.Fragment,{children:[e.jsx(wt,{logo:"announcement",title:"New V2 Pools are now Live! Stake or migrate now.",body:"Users who were part of the previous Push staking program, need to migrate to new pools to continue earning rewards. Click",setActiveTab:t}),e.jsx(ts,{getLpPoolStats:w,poolStats:N,setPoolStats:$}),e.jsx(Xt,{poolStats:N}),e.jsxs(Fs,{children:[e.jsx(Ts,{userDataPush:ae,getUserDataPush:we,PUSHPoolstats:W,getPUSHPoolStats:R}),e.jsx(ls,{lpPoolStats:G,userDataLP:ee,getLpPoolStats:w,getUserDataLP:J})]})]})},Fs=i(T)`
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`,Ms=({onClose:t})=>{const{chainId:s,switchChain:o}=ye(),l=()=>{const r=ge.allowedNetworks[0];s!==1&&s!==11155111&&(console.info("Current Chain ID ",s),console.info("Chain Id to pass",r),o(ge.coreContractChain))};return n.useEffect(()=>{(s===ge.coreContractChain||s===ge.mainnetCoreContractChain)&&t()},[s]),e.jsxs(Us,{children:[e.jsx(xt,{style:{cursor:"pointer",alignSelf:"end"}}),e.jsxs(As,{children:[e.jsx(zs,{children:"Unsupported Network"}),e.jsxs(Is,{children:["Push Yield Farm V2 is only live on Ethereum Chain.",e.jsx("br",{}),"Kindly switch to Ethereum"]})]}),e.jsx(Ds,{children:e.jsx(ie,{onClick:l,variant:"primary",size:"large",children:"Switch Network"})})]})},Us=i(P)`
  padding: 32px 36px;
  width: 445px;
`,As=i(P)`
  font-family: FK Grotesk Neu;
  font-style: normal;
  line-height: 141%; /* 39.48px */
  letter-spacing: normal;
`,zs=i.div`
  font-size: 28px;
  font-weight: 500;
  color: ${t=>t.theme.stakingSecondaryText};
`,Is=i.div`
  color: ${t=>t.theme.activeButtonText};
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 24px 0;
`,Ds=i.div``;ge.coreContractChain;let yt,kt,Pt,rt,Et;yt=()=>{_s.pageview("/yield");const[t,s]=n.useState(0),[o,l]=n.useState(!1),{account:r,chainId:a,switchChain:h}=ye(),x=()=>{const E=ge.allowedNetworks[0];a!==1&&a!==5&&h(E)};n.useEffect(()=>{a!==1&&a!==11155111&&(u(),x())},[a]);const{isModalOpen:d,showModal:u,ModalComponent:v}=Ke();return e.jsxs(kt,{children:[e.jsx(v,{InnerComponent:Ms,onConfirm:()=>{},modalPadding:"0px",modalPosition:Je.ON_PARENT}),e.jsxs(Pt,{children:[e.jsx(rt,{isActive:!t,onClick:()=>{l(!0),s(0)},children:"Yield Farming V2"}),e.jsxs(rt,{isActive:t,onClick:()=>{l(!1),s(1)},children:["Yield Farming V1 ",e.jsx(Et,{children:"Deprecated"})]})]}),t===0&&e.jsx(Rs,{setActiveTab:s}),t===1&&e.jsx(qt,{setActiveTab:s})]})},kt=i(He)`
	align-items: stretch;
	align-self: center;
  flex: 1;
	background: ${t=>t.theme.default.bg};
	border-radius: ${de.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${de.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: calc(
    100% - ${Ze.MINI_MODULES.DESKTOP.RIGHT} - ${Ze.MINI_MODULES.DESKTOP.LEFT} -
      ${de.ADJUSTMENTS.PADDING.BIG} - ${de.ADJUSTMENTS.PADDING.BIG}
  );
  gap: 16px;
  padding: 24px;

  margin: ${de.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  
  @media ${qe.laptop} {
    margin: ${de.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${qe.tablet} {
    width: calc(
      100% - ${Ze.MINI_MODULES.TABLET.RIGHT} - ${Ze.MINI_MODULES.TABLET.LEFT} -
        ${de.ADJUSTMENTS.PADDING.DEFAULT} - ${de.ADJUSTMENTS.PADDING.DEFAULT}
    );
    margin: ${de.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding:16px;
  }

  @media ${qe.mobileL} {
    margin: ${de.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    border: ${de.ADJUSTMENTS.RADIUS.LARGE};
    width: 100%;
    padding: ${de.ADJUSTMENTS.PADDING.DEFAULT};
`,Pt=i(T)`
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
`,rt=i.div`
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
`,Et=i(me)`
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
`,zt=()=>e.jsx(Js,{children:e.jsx(yt,{})})});export{Zs as __tla,zt as default};
