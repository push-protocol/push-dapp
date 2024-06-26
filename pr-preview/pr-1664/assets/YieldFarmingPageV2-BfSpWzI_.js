var ca=Object.defineProperty;var ua=(be,Se,Re)=>Se in be?ca(be,Se,{enumerable:!0,configurable:!0,writable:!0,value:Re}):be[Se]=Re;var N=(be,Se,Re)=>ua(be,typeof Se!="symbol"?Se+"":Se,Re);import{e2 as y,e5 as c,z as Q,q as p,dh as M,f0 as H,m as e,fk as ha,fd as Ot,S as ze,J as Te,fU as xa,ec as E,dD as fe,fV as ke,x as Ce,r as u,D as Ht,F as $t,H as Be,X as Ve,fc as ve,fW as g,dA as le,df as Oe,M as ce,N as ue,e4 as A,e3 as v,V as he,Y as $,ey as _t,R as et,fX as ga,e1 as Wt,fY as ma,du as ya,dC as Yt,ez as mt,fZ as Ta,f_ as wa,e7 as Gt,dE as tt,dF as nt,dI as Jt,dc as xe,dJ as Kt,de as at,dd as it,dg as fa,__tla as Sa}from"./index-4uTPYoui.js";let Zt,ba=Promise.all([(()=>{try{return Sa}catch{}})()]).then(async()=>{const be=y.from(1).mul(y.from(10).pow(y.from(18))),Se=3e4,Re=35e3,yt=n=>n.mul(y.from(10).pow(y.from(18))),Me=n=>n.div(y.from(10).pow(y.from(10))).toNumber()/1e8,Pe=class Pe{constructor(){N(this,"state",{account:null,signer:null,staking:null,yieldFarmingPUSH:null,yieldFarmingLP:null,rewardForCurrentEpochPush:null,rewardForCurrentEpochLP:null,genesisEpochAmountPUSH:Se,deprecationPerEpochPUSH:100,genesisEpochAmountLP:Re,deprecationPerEpochLP:100,uniswapV2Router02:null});N(this,"init",(t,a,o,s,i,r)=>{this.state.account=t,this.state.pushToken=a,this.state.staking=o,this.state.yieldFarmingPUSH=s,this.state.yieldFarmingLP=i,this.state.uniswapV2Router02=r});N(this,"getPoolStats",()=>new Promise(async(t,a)=>{const o=await this.state.yieldFarmingPUSH.getCurrentEpoch(),s=await this.state.uniswapV2Router02.getAmountsOut(be.toString(),[c.pushToken,c.WETHAddress,c.USDTAddress]);let i;Q.coreContractChain===42||Q.coreContractChain===5?i=s[s.length-1].div(1e6).toNumber():i=s[s.length-1].toNumber()/1e6,console.debug("Push PRice",i);const r=Me(await this.state.pushToken.balanceOf(c.uniV2LPToken)),l=Me(await this.state.pushToken.attach(c.WETHAddress).balanceOf(c.uniV2LPToken)),d=await this.state.uniswapV2Router02.getAmountsOut(be.toString(),[c.WETHAddress,c.USDTAddress]);let h;Q.coreContractChain===42||Q.coreContractChain===5?h=Me(d[d.length-1]):h=d[d.length-1].toNumber()/1e6,console.debug("Eth Price",h);const m=Me(await this.state.pushToken.attach(c.uniV2LPToken).totalSupply()),x=(r*i+l*h)/m/i;t({currentEpoch:o,lpToPushRatio:x})}));N(this,"getPUSHPoolStats",async()=>new Promise(async(t,a)=>{const o=this.state.yieldFarmingPUSH;let s=await o.NR_OF_EPOCHS();const i=await o.getCurrentEpoch();s=s.toString()>i.toString()?i:s;const r=yt(y.from(this.state.genesisEpochAmountPUSH)),l=yt(y.from(this.state.deprecationPerEpochPUSH)),d=this.calcTotalAmountPerEpoch(r,s,l);this.state.rewardForCurrentEpochPush=d;const h=await o.getPoolSize(i.add(1));t({currentEpochPUSH:i,totalEpochPUSH:s,poolBalance:h})}));N(this,"getLPPoolStats",async t=>new Promise(async(a,o)=>{const s=this.state.yieldFarmingLP;let i=await s.NR_OF_EPOCHS();const r=await s.getCurrentEpoch();i=i.toString()>r.toString()?r:i;const l=await s.getPoolSize(r.add(1));a({currentEpochPUSH:r,totalEpochPUSH:i,poolBalance:l})}));N(this,"getUserData",async t=>new Promise(async(a,o)=>{if(this.state.account){const s=await t.getCurrentEpoch().then(F=>y.from(Math.min(F,100))),i=await t.getCurrentEpoch(),r=await t.getEpochStake(this.state.account,i.add(1)),l=(await t.lastEpochIdHarvested(this.state.account)).toNumber();let d=this.getAccumulatedReward(s,t),h=this.getTotalAvailableRewards(l,s,t),[m,x]=await Promise.all([d,h]);a({epochStakeNext:r,totalAccumulatedReward:m,totalAvailableReward:x})}}));N(this,"getTotalAvailableRewards",async(t,a,o)=>{let s=[];for(var i=t+1;i<=a.toNumber();i++){const l=this.calculateUserEpochReward(i,o);s.push(l)}let r=(await Promise.all(s)).reduce((l,d)=>l+d,0);return r=r.toFixed(2),r});N(this,"getAccumulatedReward",async(t,a)=>{let o=[];for(var s=0;s<=t.toNumber();s++){const r=this.calculateUserEpochReward(s,a);o.push(r)}let i=(await Promise.all(o)).reduce((r,l)=>r+l,0);return i=i.toFixed(2),i});N(this,"calcTotalAmountPerEpoch",(t,a,o)=>t.sub(a.mul(o)));N(this,"calculateUserEpochReward",async(t,a)=>{const o=Me(await a.getEpochStake(this.state.account,t)),s=Me(await a.getPoolSize(t));let i=0;if(s>0)if(a.address==c.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,d=r-l*t;i=o/s*d}else{const r=this.state.genesisEpochAmountPUSH,l=this.state.deprecationPerEpochPUSH,d=r-l*t;i=o/s*d}return i})}static getInstance(){return Pe.instance||(Pe.instance=new Pe),Pe.instance}};N(Pe,"instance",null);let je=Pe;const q=n=>e.jsx(ha,{wrapperProps:{width:"100%",maxWidth:"none",minWidth:"auto",display:"flex",flex:"1",margin:n.margin?n.margin:"0"},placementProps:{background:"none",bottom:n.bottom?n.bottom:"25px",left:n.error?"40px":"0px"},tooltipContent:n.error?e.jsx(qt,{title:n.ToolTipTitle,width:n.ToolTipWidth}):e.jsx(Tt,{title:n.ToolTipTitle,body:n.ToolTipBody}),children:n.children}),qt=n=>e.jsx(M,{width:n.width,background:"#131313",justifyContent:"flex-start",border:"1px solid rgba(173, 176, 190, 0.2)",alignItems:"flex-start",padding:"0.75rem 0.75rem 0.75rem 1rem",boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.05)",color:"#FFF",borderRadius:"2px 12px 12px 12px",children:e.jsx(H,{color:"inherit",children:n.title})}),Tt=({title:n,body:t})=>e.jsxs(Xt,{children:[e.jsx(Qt,{children:n}),e.jsxs(en,{children:[t,"  "," ",t.includes("Push Fee Pool APR")&&e.jsx(Ot,{cursor:"pointer",href:"https://medium.com/push-protocol/new-push-yield-farming-rewards-full-details-4a9ff473226d",target:"_blank",children:"here"})]})]}),Xt=p(M)`
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


`,Qt=p(H)`
  color: ${n=>n.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`,en=p(H)`
  color: ${n=>n.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
  text-align:left;
`,ge="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15284_45077)'%3e%3cpath%20d='M8.5%2014.5C11.8137%2014.5%2014.5%2011.8137%2014.5%208.5C14.5%205.18629%2011.8137%202.5%208.5%202.5C5.18629%202.5%202.5%205.18629%202.5%208.5C2.5%2011.8137%205.18629%2014.5%208.5%2014.5Z'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%208C8.13261%208%208.25979%208.05268%208.35355%208.14645C8.44732%208.24021%208.5%208.36739%208.5%208.5V11C8.5%2011.1326%208.55268%2011.2598%208.64645%2011.3536C8.74021%2011.4473%208.86739%2011.5%209%2011.5'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.25%206.5C8.66421%206.5%209%206.16421%209%205.75C9%205.33579%208.66421%205%208.25%205C7.83579%205%207.5%205.33579%207.5%205.75C7.5%206.16421%207.83579%206.5%208.25%206.5Z'%20fill='%23797D8F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15284_45077'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Y=n=>n.div(y.from(10).pow(18)).toString(),X=n=>{var t;return(t=n==null?void 0:n.toString())==null?void 0:t.replace(/\B(?=(\d{3})+(?!\d))/g,",")},tn=function(n,t=null){return y.from(n)},nn=function(n){return n.div(tn(10).pow(18))},wt=({poolName:n,userData:t,PoolStats:a,poolAddress:o,getUserData:s,tokenAddress:i,setActiveTab:r})=>{const{account:l,provider:d}=Ce(),[h,m]=u.useState(!1),[x,F]=u.useState(!1),[I,w]=u.useState(!1),[U,B]=u.useState(null),[G,te]=u.useState(null),[J,re]=u.useState(null),{userPushSDKInstance:_}=Ht(j=>j.user),{handleConnectWallet:L}=u.useContext($t),[b,R]=u.useState(0),T=Be(),k=Ve(),ee=async()=>{if(!_.signer){L();return}if(!x){if((t==null?void 0:t.totalAvailableReward)==0){re("No Rewards to Claim"),F(!1);return}F(!0);var j=d.getSigner(l);new A(o,v.yieldFarming,j).massHarvest().then(async f=>{T.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await d.waitForTransaction(f.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:S=>e.jsx(he,{size:S,color:"green"})}),s(),F(!1)}catch(S){T.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${S.name}+ ")`,toastType:"ERROR",getToastIcon:z=>e.jsx($,{size:z,color:"red"})}),F(!1)}}).catch(f=>{T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:S=>e.jsx($,{size:S,color:"red"})}),F(!1)})}},K=async()=>{if(!_.signer){L();return}if(h)return;m(!0);const j=Y(t.epochStakeNext);if(j==0){te("Nothing to unstake, Stake Now in new reward program."),m(!1);return}var f=d.getSigner(l);let S=new A(c.staking,v.staking,f);await S.balanceOf(l,i),S.withdraw(i,y.from(j).mul(y.from(10).pow(18))).then(async z=>{T.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await d.waitForTransaction(z.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:C=>e.jsx(he,{size:C,color:"green"})}),m(!1),s()}catch(C){console.error("Error",C),T.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${C.name}+ ")`,toastType:"ERROR",getToastIcon:P=>e.jsx($,{size:P,color:"red"})}),m(!1)}}).catch(z=>{T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:C=>e.jsx($,{size:C,color:"red"})}),m(!1)})},we=async()=>{if(!_.signer){L();return}if(I)return;let j=3;const f=Y(t.epochStakeNext);if(f==0){T.showMessageToast({toastTitle:"Error",toastMessage:"Nothing to Withdraw!",toastType:"ERROR",getToastIcon:W=>e.jsx($,{size:W,color:"red"})}),w(!1),B(null);return}var S=d.getSigner(l);let z=new A(c.staking,v.staking,S);const C=i===c.pushToken?c.pushCoreV2:c.stakingV2;var P=new A(i,v.pushToken,S);let V=await P.allowance(l,C),Z=Y(V);parseInt(Z)>=parseInt(f)?(j=2,R(50)):(j=3,R(33)),w(!0),B(`Withdrawing 1/${j}`);let se;se=z.withdraw(i,y.from(f).mul(y.from(10).pow(18))),se.then(async W=>{if(T.showLoaderToast({loaderMessage:"Withdrawing! Please Wait..."}),await d.waitForTransaction(W.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Successfully withdrawn!",toastType:"SUCCESS",getToastIcon:pe=>e.jsx(he,{size:pe,color:"green"})}),i===c.pushToken){var de=new A(i,v.pushToken,S);let pe=await de.allowance(l,c.pushCoreV2),ye=Y(pe);parseInt(ye)>=parseInt(f)?ne(W,f,j):(W=de.approve(c.pushCoreV2,y.from(f).mul(y.from(10).pow(18))),B(`Approving 2/${j}`),R(66),W.then(async ae=>{T.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await d.waitForTransaction(ae.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:oe=>e.jsx(he,{size:oe,color:"green"})}),ne(ae,f,j)}).catch(ae=>{console.error("Error in approving 2",ae),T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:oe=>e.jsx($,{size:oe,color:"red"})}),w(!1),B(null),s(),R(0)}))}else{var de=new A(i,v.pushToken,S);let ye=await de.allowance(l,c.stakingV2),ae=Y(ye);parseInt(ae)>=parseInt(f)?D(W,f,j):(W=de.approve(c.stakingV2,y.from(f).mul(y.from(10).pow(18))),B(`Approving 2/${j}`),R(66),W.then(async oe=>{T.showLoaderToast({loaderMessage:"Approving! Please Wait..."}),await d.waitForTransaction(oe.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Successfully Approved!",toastType:"SUCCESS",getToastIcon:De=>e.jsx(he,{size:De,color:"green"})}),D(oe,f,j)}).catch(oe=>{console.error("Error in approving",oe),T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Approve",toastType:"ERROR",getToastIcon:De=>e.jsx($,{size:De,color:"red"})}),w(!1),B(null),s(),R(0)}))}}).catch(W=>{console.error("Error in withdrawing: ",W),T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Withdraw!",toastType:"ERROR",getToastIcon:de=>e.jsx($,{size:de,color:"red"})}),w(!1),B(null),R(0)})},D=async(j,f,S)=>{if(!_.signer){L();return}var z=d.getSigner(l),C=new A(c.stakingV2,v.stakingV2,z);B(`Staking ${S}/${S}`),R(100),j=C.deposit(i,y.from(f).mul(y.from(10).pow(18))),j.then(async P=>{T.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await d.waitForTransaction(P.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!Successfully Deposited the UNI-V2 Token to V2 ",toastType:"SUCCESS",getToastIcon:V=>e.jsx(he,{size:V,color:"green"})}),w(!1),s(),B(null),r(0)}).catch(P=>{console.error("Error in depositing: ",P),T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit the Amount",toastType:"ERROR",getToastIcon:V=>e.jsx($,{size:V,color:"red"})}),w(!1),s(),B(null),R(0)})},ne=async(j,f,S)=>{if(!_.signer){L();return}var z=d.getSigner(l);let C=new A(c.pushCoreV2,v.pushCoreV2,z);B(`Staking ${S}/${S}`),R(100),j=C.stake(y.from(f).mul(y.from(10).pow(18))),j.then(async P=>{T.showLoaderToast({loaderMessage:"Depositing to V2 ! Please Wait..."}),await d.waitForTransaction(P.hash),T.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Successfully Deposited the Push Token to V2 ",toastType:"SUCCESS",getToastIcon:V=>e.jsx(he,{size:V,color:"green"})}),w(!1),s(),B(null),r(0)}).catch(P=>{console.error("Error in depositing: ",P),T.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Failed! Could Not Deposit Push Token",toastType:"ERROR",getToastIcon:V=>e.jsx($,{size:V,color:"red"})}),w(!1),s(),B(null),R(0)})};u.useEffect(()=>{re(null),te(null)},[l]);const O=ve(600);return e.jsxs(an,{margin:n==="UNI-V2"?" 10px 0 10px 10px ":"  10px 10px 10px 0",children:[e.jsx(M,{margin:"0px 0px 20px 0",children:a?e.jsxs(e.Fragment,{children:[e.jsxs(sn,{children:[n==="UNI-V2"?"Uniswap V2 Staking Pool":"PUSH Staking Pool ",e.jsx(on,{children:"Deprecated"})]}),e.jsxs(st,{children:["Current APR"," ",e.jsx(Te,{color:"#D53A94",fontWeight:"600",children:"0%"})]})]}):e.jsxs(Ue,{padding:"15px 15px 0 15px",children:[e.jsx(g,{height:"15px",width:"234px",margin:"0 0 10px 0"}),e.jsx(g,{height:"15px",width:"112px"})]})}),e.jsxs(M,{children:[e.jsxs(ln,{border:`1px solid ${k.stakingBorder}`,borderRadius:"16px",children:[e.jsx(M,{margin:O?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:O?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(st,{children:"Current Reward"}),e.jsx(H,{fontSize:O?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"-0.03em",children:"0 PUSH"})]}):e.jsxs(Ue,{padding:O?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:O?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:O?"65px":"100px}"})]})}),e.jsx(rn,{width:"10px",height:"100%"}),e.jsx(M,{margin:O?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:O?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(st,{children:"Total Staked"}),e.jsxs(pn,{fontSize:O?"18px":"24px",fontWeight:"600",letterSpacing:"-0.03em",children:[X(Y(a==null?void 0:a.poolBalance))," ",n=="UNI-V2"?"UNI-V2":"PUSH"]})]}):e.jsxs(Ue,{padding:O?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:O?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:O?"65px":"100px}"})]})})]}),e.jsx(E,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"-0.03em",children:a?e.jsxs(e.Fragment,{children:[e.jsx(ft,{padding:"0px 5px 0px 0px",children:"Current Epoch"}),e.jsx(ft,{margin:"0 0 0 5px",children:"100 / 100"})]}):e.jsx(Ue,{padding:"6px 0px 0 15px",children:e.jsx(g,{height:"17px",width:"124px"})})}),e.jsx(dn,{children:t?e.jsxs(M,{children:[e.jsxs(E,{justifyContent:"space-between",margin:O?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(He,{children:["User Deposit",e.jsx($e,{children:e.jsx(q,{ToolTipTitle:"User Deposited",ToolTipBody:`Amount of ${n} Token User Staked`,children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(_e,{children:[" ",Y(t==null?void 0:t.epochStakeNext)," ",n=="UNI-V2"?"UNI-V2":"PUSH"]})]}),e.jsxs(E,{justifyContent:"space-between",margin:O?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(He,{children:["Rewards Claimed",e.jsx($e,{children:e.jsx(q,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(_e,{children:[" ",X(((t==null?void 0:t.totalAccumulatedReward)-(t==null?void 0:t.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(E,{justifyContent:"space-between",margin:O?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(He,{children:["Current Epoch Reward",e.jsx($e,{children:e.jsx(q,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsx(_e,{children:"0 PUSH"})]}),e.jsxs(E,{justifyContent:"space-between",margin:O?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(He,{children:["Available for Claiming",e.jsx($e,{children:e.jsx(q,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(_e,{children:[X(t==null?void 0:t.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(ke,{padding:"16px 15px 16px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(E,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(E,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(E,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(E,{justifyContent:"space-between",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]})]})})]}),e.jsx(cn,{padding:O?"0px ":"0px 14px",margin:"24px 0px 0px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(St,{children:Y(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(q,{error:!0,ToolTipTitle:"Nothing to Withdraw, so you cannot Migrate.",ToolTipWidth:"16rem",bottom:"-50px",margin:"0 0 15px 0",children:e.jsx(Fe,{border:"none",cursor:"default",background:k.disableButtonBg,color:k.disabledButtonText,children:e.jsx(bt,{children:!I&&U==null&&e.jsxs(Oe,{color:k.disabledButtonText,weight:"400",cursor:"default",children:["Migrate to ",n==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]})})})}):e.jsxs(un,{onClick:we,children:[e.jsx(hn,{style:{width:`${b}%`}}),e.jsxs(bt,{children:[!I&&U==null&&e.jsxs(Oe,{color:"#FFF",weight:"400",cursor:"pointer",children:["Migrate to ",n==="UNI-V2"?"UNI-V2 ":"PUSH Fee"," Pool"]}),I&&U!=null&&e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#FFF",title:U,titleColor:"#FFF"})]})]})}),e.jsxs(St,{children:[Y(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(q,{error:!0,ToolTipTitle:G||"Nothing to unstake, Stake First",ToolTipWidth:"16rem",margin:"0 10px 0 0",bottom:"-30px",children:e.jsx(Fe,{border:"none",cursor:"default",background:k.disableButtonBg,color:k.disabledButtonText,children:h?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:k.activeButtonText,title:"Claiming",titleColor:k.activeButtonText}):` Unstake ${n}`})}):e.jsx(Fe,{border:`1px solid ${k.activeButtonText}`,background:"transparent",color:k.activeButtonText,cursor:"pointer",margin:"0 10px 0 0",onClick:K,children:h?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:k.activeButtonText,title:"Unstaking",titleColor:k.activeButtonText}):` Unstake ${n}`}),(t==null?void 0:t.totalAvailableReward)==="0.00"?e.jsx(q,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,ToolTipWidth:"10rem",children:e.jsx(Fe,{border:"none",cursor:"default",background:k.disableButtonBg,color:k.disabledButtonText,children:x?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:k.activeButtonText,title:"Claiming",titleColor:k.activeButtonText}):" Claim Rewards"})}):e.jsx(Fe,{border:`1px solid ${k.activeButtonText}`,background:"transparent",color:k.activeButtonText,cursor:"pointer",onClick:ee,children:x?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:k.activeButtonText,title:"Claiming",titleColor:k.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Ue,{width:"100%",children:[e.jsx(g,{height:"49px",width:"100%",margin:"0 0 11px 0"}),e.jsx(g,{height:"49px",width:"100%"})]})})]})},an=p(ze)`
  border: 1px solid ${n=>n.theme.stakingBorder};
  border-radius: 24px;
  padding: 24px 19px;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  // min-height: 587px;
  color: ${n=>n.theme.stakingPrimaryText};
`,sn=p(H)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: -0.03em;
  display: flex;
  align-items: center;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 470px) {
    flex-direction: column;
  }
`,on=p(Te)`
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
  letter-spacing: -0.03em;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,rn=p.div`
  width: 1px;
  height: 100%;
  background: ${n=>n.theme.stakingBorder};
`,He=p.div`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: -0.03em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${n=>n.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,pn=p(H)`
  color: ${n=>n.theme.stakingSecondaryText};
`,ft=p(xa)`
  font-weight: 600;
  text-align: right;
  letter-spacing: -0.03em;
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
`,ln=p(E)`
  max-height: 108px;
  min-height: 108px;
  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,_e=p(H)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: -0.03em;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,dn=p(M)`
  min-height: 150px;
`,cn=p(M)`
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
  letter-spacing: -0.03em;
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
  letter-spacing: -0.03em;
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
`,Ue=p(ke)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,jt=({logo:n,title:t,body:a,setActiveTab:o})=>{const s=ve(600);return e.jsxs(E,{style:{color:n==="announcement"?"white":"#333"},justifyContent:"stretch",padding:s?"12px":"16px",background:n==="announcement"?"linear-gradient(90deg, #121315 -2.55%, #2A2A39 32.62%, #8E317A 68.34%, #121315 102.97%)":"#FFF7DA",borderRadius:"16px",children:[e.jsx(le,{width:n==="announcement"?"60px":"32px",height:n==="announcement"?"60px":"32px",src:_t(`svg/${n}.svg`),alt:"Announcement Logo"}),e.jsxs(M,{margin:n==="announcement"?"0 0 0 16px":"0 0 0 13px",justifyContent:"center",alignItems:"flex-start",gap:n==="announcement"?"4px":"0px",children:[e.jsx(H,{color:"inherit",fontSize:s?"20px":"24px",textAlign:"left",fontWeight:500,children:t}),e.jsxs(H,{color:"inherit",fontSize:s?"12px":"16px",textAlign:"left",fontWeight:500,children:[a," ",t.includes("New V2")&&e.jsxs(e.Fragment,{children:[e.jsx(xn,{onClick:()=>o(1),children:"here"})," to migrate."]})]})]})]})},xn=p(Ot)`
  cursor: pointer;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;Q.coreContractChain;const gn=({setActiveTab:n})=>{const{account:t,provider:a}=Ce(),[o,s]=u.useState(null),[i,r]=u.useState(null),[l,d]=u.useState(null),[h,m]=u.useState(null),[x,F]=u.useState(null),[I,w]=u.useState(null),[U,B]=u.useState(null),[G,te]=u.useState(null),[J,re]=u.useState(null),[_,L]=u.useState(null),b=a==null?void 0:a.getSigner(t),R=u.useCallback(async()=>{const D=await je.getInstance().getPoolStats();w({...D})},[o,i,l,h,x]),T=u.useCallback(async()=>{const D=await je.getInstance().getPUSHPoolStats();B({...D})},[o,i,l,h,x]),k=u.useCallback(async D=>{const ne=await je.getInstance().getLPPoolStats(D);te({...ne})},[o,i,l,h,x]),ee=u.useCallback(async()=>{const D=await je.getInstance().getUserData(h);re({...D})},[h]),K=u.useCallback(async()=>{const D=await je.getInstance().getUserData(l);L({...D})},[l]);u.useEffect(()=>{let D=new A(c.pushToken,v.pushToken,b),ne=new A(c.staking,v.staking,b),O=new A(c.depYieldFarmPUSH,v.yieldFarming,b),j=new A(c.depYieldFarmLP,v.yieldFarming,b),f=new A(c.uniswapV2Router02,v.uniswapV2Router02,b);if(s(D),r(ne),m(O),d(j),F(f),b&&t){var S=a.getSigner(t);let z=new A(c.pushToken,v.pushToken,S),C=new A(c.staking,v.staking,S),P=new A(c.depYieldFarmPUSH,v.yieldFarming,S),V=new A(c.depYieldFarmLP,v.yieldFarming,S),Z=new A(c.uniswapV2Router02,v.uniswapV2Router02,S);s(z),r(C),m(P),d(V),F(Z)}},[t]),u.useEffect(()=>{o!=null&&i!=null&&h!=null&&(je.getInstance().init(t,o,i,h,l,x),R())},[R]),u.useEffect(()=>{I&&we(I)},[I]);const we=async D=>{T(),k(D),ee(),K()};return e.jsxs(e.Fragment,{children:[e.jsx(jt,{logo:"WarningCircle",title:"This reward program (V1) has ended.",body:"To continue earning rewards please migrate to new pools.",setActiveTab:n}),e.jsxs(mn,{children:[e.jsx(wt,{poolName:"PUSH",userData:J,PoolStats:U,poolAddress:c.depYieldFarmPUSH,getUserData:ee,getPoolStats:T,tokenAddress:c.pushToken,setActiveTab:n}),e.jsx(wt,{poolName:"UNI-V2",userData:_,PoolStats:G,poolAddress:c.depYieldFarmLP,getUserData:K,getPoolStats:k,tokenAddress:c.uniV2LPToken,setActiveTab:n})]})]})},mn=p(E)`
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
`,yn=({poolStats:n})=>{function t(o){return o==null?void 0:o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const a=ve(600);return e.jsx(Tn,{justifyContent:"stretch",children:n?e.jsxs(e.Fragment,{children:[e.jsx(Et,{fontSize:a?"16px":"18px",textAlign:"left",fontWeight:600,children:"Push Price"}),e.jsxs(E,{gap:"5px",justifyContent:"flex-end",children:[e.jsxs(Et,{fontSize:a?"18px ":"24px",textAlign:"left",fontWeight:600,children:["$",t(n==null?void 0:n.pushPrice.toFixed(2))]}),e.jsx(le,{width:"25px",height:a?"20px":"27px",src:_t("svg/uniswapLogo.svg"),alt:"Uniswap Logo"})]})]}):e.jsxs(wn,{children:[e.jsx(g,{height:"12px",width:"135px",margin:"10px 0 10px 0"}),e.jsx(g,{height:"12px",width:"135px",margin:"10px 0 10px 0"})]})})},Tn=p(E)`
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
`,Et=p(H)`
  color: ${n=>n.theme.stakingPrimaryText};
`,wn=p(ke)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
  flex-direction: row;
  justify-content: inherit;
  flex: 1;
`,fn=({getLpPoolStats:n,poolStats:t,setPoolStats:a})=>{const[o,s]=et.useState(""),[i,r]=et.useState(),l=()=>{const h=t.epochEndTime,m=new Date().getTime()+h*1e3;r(m)};et.useEffect(()=>{t&&l()},[t]);const d=()=>{if(t!=null&&t.epochEndTimestamp){t.epochEndTimestamp.toNumber();const h=new Date().getTime(),m=i-h;m<0&&(a(null),n());const x=Math.floor(m/(1e3*60*60*24)),F=Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),I=Math.floor(m%(1e3*60*60)/(1e3*60)),w=Math.floor(m%(1e3*60)/1e3);s(`${x}D ${F}H ${I}M ${w}S`)}};return et.useEffect(()=>{const h=setTimeout(()=>{d()},1e3);return()=>clearTimeout(h)}),e.jsxs(Sn,{children:[e.jsxs(rt,{alignItems:"baseline",justifyContent:"center",background:"linear-gradient(0deg, #7ADDB3, #7ADDB3), #FFFFFF",children:[e.jsx(pt,{background:"radial-gradient(70% 90% at 40% 16.25%, #7CDCB4 2.6%, #7ADDB3 53.65%, #E888F8 85.42%, #F99DEA 100%)"}),t?e.jsx(e.Fragment,{children:e.jsxs(ut,{children:[e.jsx(lt,{children:"Total Value Locked"}),e.jsx(dt,{children:`$ ${X(t==null?void 0:t.totalValueLocked.toFixed(2))}`})]})}):e.jsx(ot,{})]}),e.jsxs(rt,{alignItems:"baseline",justifyContent:"center",background:"#F58DF8",children:[e.jsx(pt,{background:"radial-gradient(70% 90% at 40% 16.25%, #F58DF8 2.6%, #F47EF8 53.65%, #A17DEF 85.42%, #AE68F4 100%)"}),t?e.jsx(e.Fragment,{children:e.jsxs(ut,{children:[e.jsx(lt,{children:"Push Rewards Given"}),e.jsxs(ct,{justifyContent:"end",children:[e.jsx(dt,{children:X(Math.min(Y(t==null?void 0:t.pushRewardsDistributed),Y(t==null?void 0:t.totalDistributedAmount)))}),e.jsxs(Te,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:["out of ",X(Y(t==null?void 0:t.totalDistributedAmount))]})]})]})}):e.jsx(ot,{})]}),e.jsxs(rt,{alignItems:"baseline",justifyContent:"center",background:"#A17DEF",children:[e.jsx(pt,{background:"radial-gradient(70% 90% at 40% 16.25%, #A17DEF 2.6%, #9770ED 53.65%, #DF7EEF 85.42%, #F488E3 100%)"}),o?e.jsx(e.Fragment,{children:e.jsxs(ut,{children:[e.jsx(lt,{children:"Time Left"}),e.jsxs(ct,{justifyContent:"end",children:[e.jsx(dt,{children:o}),e.jsx(Te,{color:"#fff",fontSize:"16px",fontWeight:"600",lineHeight:"141%",children:"until next epoch"})]})]})}):e.jsx(ot,{})]})]})},ot=()=>{const n=ve(1300);return e.jsxs(bn,{padding:"21px 15px",children:[e.jsx(g,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(g,{height:"26px;",width:n?"175px":"189px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"}),e.jsx(g,{height:"12px",width:"135px",margin:"0 0 10px 0",background:"linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"})]})},Sn=p(E)`
  column-gap: 12px;

  @media (max-width: 992px) {
    flex-direction: column;
    row-gap: 12px;
  }
`,rt=p(M)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`,pt=p(M)`
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
`,ct=p(M)`
  align-items: flex-start;
`,ut=p(ct)`
  padding: 20px 10px 20px 15px;
  // gap: 8px;
  justify-content: center;
`,bn=p(ke)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  justify-content: center;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`,ht=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"channelType",type:"uint8"},{indexed:!1,internalType:"bytes",name:"identity",type:"bytes"}],name:"AddChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!1,internalType:"bytes",name:"_subGraphData",type:"bytes"}],name:"AddSubGraph",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"oldBridge",type:"address"},{indexed:!0,internalType:"address",name:"newBridge",type:"address"}],name:"BridgeAddressUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"}],name:"ChannelBlocked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"_channel",type:"address"},{indexed:!1,internalType:"uint256",name:"totalNotifOptions",type:"uint256"},{indexed:!1,internalType:"string",name:"_notifSettings",type:"string"},{indexed:!1,internalType:"string",name:"_notifDescription",type:"string"}],name:"ChannelNotifcationSettingsAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"ChannelOwnershipTransfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"revoker",type:"address"}],name:"ChannelVerificationRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"address",name:"verifier",type:"address"}],name:"ChannelVerified",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountClaimed",type:"uint256"}],name:"ChatIncentiveClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountRefunded",type:"uint256"}],name:"DeactivateChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"requestSender",type:"address"},{indexed:!1,internalType:"address",name:"requestReceiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amountForReqReceiver",type:"uint256"},{indexed:!1,internalType:"uint256",name:"feePoolAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"}],name:"IncentivizeChatReqReceived",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountDeposited",type:"uint256"}],name:"ReactivateChannel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"oldRelayer",type:"address"},{indexed:!0,internalType:"address",name:"newRelayer",type:"address"}],name:"RelayerAddressUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"rewardAmount",type:"uint256"}],name:"RewardsClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"rewardAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"fromEpoch",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tillEpoch",type:"uint256"}],name:"RewardsHarvested",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountStaked",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!0,internalType:"uint256",name:"amountRefunded",type:"uint256"}],name:"TimeBoundChannelDestroyed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"amountUnstaked",type:"uint256"}],name:"Unstaked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"channel",type:"address"},{indexed:!1,internalType:"bytes",name:"identity",type:"bytes"}],name:"UpdateChannel",type:"event"},{inputs:[],name:"ADD_CHANNEL_MIN_FEES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"CHANNEL_POOL_FUNDS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"CREATE_CHANNEL_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DOMAIN_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"FEE_AMOUNT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MIN_POOL_CONTRIBUTION",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PROTOCOL_POOL_FEES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PUSH_TOKEN_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"REFERRAL_CODE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"UNISWAP_V2_ROUTER",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"WETH_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"aDaiAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_rewardAmount",type:"uint256"}],name:"addPoolFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"_subGraphData",type:"bytes"}],name:"addSubGraph",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_startIndex",type:"uint256"},{internalType:"uint256",name:"_endIndex",type:"uint256"},{internalType:"address[]",name:"_channelList",type:"address[]"}],name:"batchVerification",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channelAddress",type:"address"}],name:"blockChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"bridgeAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_epochId",type:"uint256"}],name:"calculateEpochRewards",outputs:[{internalType:"uint256",name:"rewards",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"celebUserFunds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"channelById",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channelNotifSettings",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channelUpdateCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"channels",outputs:[{internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"channelType",type:"uint8"},{internalType:"uint8",name:"channelState",type:"uint8"},{internalType:"address",name:"verifiedBy",type:"address"},{internalType:"uint256",name:"poolContribution",type:"uint256"},{internalType:"uint256",name:"channelHistoricalZ",type:"uint256"},{internalType:"uint256",name:"channelFairShareCount",type:"uint256"},{internalType:"uint256",name:"channelLastUpdate",type:"uint256"},{internalType:"uint256",name:"channelStartBlock",type:"uint256"},{internalType:"uint256",name:"channelUpdateBlock",type:"uint256"},{internalType:"uint256",name:"channelWeight",type:"uint256"},{internalType:"uint256",name:"expiryTime",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"channelsCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"claimChatIncentives",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_notifOptions",type:"uint256"},{internalType:"string",name:"_notifSettings",type:"string"},{internalType:"string",name:"_notifDescription",type:"string"},{internalType:"uint256",name:"_amountDeposited",type:"uint256"}],name:"createChannelSettings",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"enum EPNSCoreStorageV1_5.ChannelType",name:"_channelType",type:"uint8"},{internalType:"bytes",name:"_identity",type:"bytes"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"uint256",name:"_channelExpiryTime",type:"uint256"}],name:"createChannelWithPUSH",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"daiAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tillEpoch",type:"uint256"}],name:"daoHarvestPaginated",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"deactivateChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channelAddress",type:"address"}],name:"destroyTimeBoundChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"epnsCommunicator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"epochDuration",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"epochRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"epochToTotalStakedWeight",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"genesisEpoch",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"getChannelVerfication",outputs:[{internalType:"uint8",name:"verificationStatus",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"governance",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupFairShareCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupHistoricalZ",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupLastUpdate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"groupNormalizedWeight",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"requestSender",type:"address"},{internalType:"address",name:"requestReceiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"vaa",type:"bytes"}],name:"handleChatRequestData",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"harvestAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_tillEpoch",type:"uint256"}],name:"harvestPaginated",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_pushChannelAdmin",type:"address"},{internalType:"address",name:"_pushTokenAddress",type:"address"},{internalType:"address",name:"_wethAddress",type:"address"},{internalType:"address",name:"_uniswapRouterAddress",type:"address"},{internalType:"address",name:"_lendingPoolProviderAddress",type:"address"},{internalType:"address",name:"_daiAddress",type:"address"},{internalType:"address",name:"_aDaiAddress",type:"address"},{internalType:"uint256",name:"_referralCode",type:"uint256"}],name:"initialize",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"initializeStake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"isMigrationComplete",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_from",type:"uint256"},{internalType:"uint256",name:"_to",type:"uint256"}],name:"lastEpochRelative",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lendingPoolProviderAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"pauseContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"previouslySetEpochRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"pushChannelAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"reactivateChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"relayerAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_bridge",type:"address"}],name:"setBridgeAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_commAddress",type:"address"}],name:"setEpnsCommunicatorAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newFees",type:"uint256"}],name:"setFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_governanceAddress",type:"address"}],name:"setGovernanceAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newFees",type:"uint256"}],name:"setMinChannelCreationFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newAmount",type:"uint256"}],name:"setMinPoolContribution",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_relayer",type:"address"}],name:"setRelayerAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalStakedAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_newAdmin",type:"address"}],name:"transferPushChannelAdminControl",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unPauseContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unstake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"unverifyChannel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"},{internalType:"bytes",name:"_newIdentity",type:"bytes"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"updateChannelMeta",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userFeesInfo",outputs:[{internalType:"uint256",name:"stakedAmount",type:"uint256"},{internalType:"uint256",name:"stakedWeight",type:"uint256"},{internalType:"uint256",name:"lastStakedBlock",type:"uint256"},{internalType:"uint256",name:"lastClaimedBlock",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"usersRewardsClaimed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_channel",type:"address"}],name:"verifyChannel",outputs:[],stateMutability:"nonpayable",type:"function"}];class kt{static createInterface(){return new ga(ht)}static connect(t,a){return new A(t,ht,a)}}N(kt,"abi",ht);const Ct={config:{SLOTS:{userFeesInfo:134}},epochDuration:21*7156},me={toBN:n=>y.from(n),getCoreV2Contract:(n,t)=>kt.connect(t,n),lastEpochRelative:(n,t)=>Math.floor((t-n)/Ct.epochDuration+1),epochToUserStakedWeight:async(n,t,a,o)=>{const s=Ct.config.SLOTS.userFeesInfo,i=Wt(["uint256","uint256"],[t,s]),r=y.from(i).add(4).toHexString(),l=Wt(["uint256","uint256"],[a,r]),d=await n.getStorageAt(o,l);return y.from(d)},deepCopy(n){return JSON.parse(JSON.stringify(n))},getEmptyState(){return{currentEpoch:0,currentBlockNumber:0,genesisEpoch:0,epochRewards:[],lastEpochInitialized:0,lastTotalStakeEpochInitialized:0,epochToTotalStakedWeight:[],previouslySetEpochRewards:y.from(0),userFeesInfo:{epochToUserStakedWeight:[],lastClaimedBlock:y.from(0),lastStakedBlock:y.from(0),stakedAmount:y.from(0),stakedWeight:y.from(0)}}}};class Pt{constructor(t,a){N(this,"STATE");N(this,"coreV2Contract");N(this,"userAddress");this.coreV2Contract=t,this.userAddress=a,this.STATE=me.getEmptyState()}async initState(){const t=this.coreV2Contract,a=await t.provider.getBlockNumber(),o=await t.genesisEpoch().then(x=>x.toNumber()),s=me.lastEpochRelative(o,a);this.STATE.currentBlockNumber=a,this.STATE.genesisEpoch=o,this.STATE.currentEpoch=s,this.STATE.currentBlockNumber=a,this.STATE.genesisEpoch=o,this.STATE.currentEpoch=s;const i=Array.from({length:s+1},(x,F)=>F),r=await Promise.all(i.map(x=>t.epochRewards(x))),l=await Promise.all(i.map(x=>t.epochToTotalStakedWeight(x))),d=await t.provider.getStorageAt(t.address,129).then(x=>Number(x)),h=await t.provider.getStorageAt(t.address,130).then(x=>Number(x));this.STATE.lastEpochInitialized=d,this.STATE.lastTotalStakeEpochInitialized=h,this.STATE.epochRewards=r,this.STATE.epochToTotalStakedWeight=l,this.STATE.previouslySetEpochRewards=await t.previouslySetEpochRewards();const m=await t.userFeesInfo(this.userAddress);this.STATE.userFeesInfo.stakedAmount=m.stakedAmount,this.STATE.userFeesInfo.stakedWeight=m.stakedWeight,this.STATE.userFeesInfo.lastStakedBlock=m.lastStakedBlock,this.STATE.userFeesInfo.lastClaimedBlock=m.lastClaimedBlock,this.STATE.userFeesInfo.epochToUserStakedWeight=await Promise.all(i.map(x=>me.epochToUserStakedWeight(t.provider,this.userAddress,x,this.coreV2Contract.address)))}async _setupEpochsRewardAndWeights(t){const a=this.coreV2Contract,o=await a.genesisEpoch().then(r=>r.toNumber()),s=me.lastEpochRelative(o,this.STATE.lastEpochInitialized),i=this.STATE.currentEpoch;if(console.debug(`

Doing with: _currentEpoch, _lastEpochInitiliazed`,i,s,`
`),i>s||i==1){const r=await a.PROTOCOL_POOL_FEES(),l=await a.previouslySetEpochRewards(),d=r.sub(l);i-s>1?this.STATE.epochRewards[i-1]=this.STATE.epochRewards[i-1].add(d):this.STATE.epochRewards[i]=me.toBN(this.STATE.epochRewards[i].toString()).add(d),this.STATE.lastEpochInitialized=await a.provider.getBlockNumber(),this.STATE.previouslySetEpochRewards=r}if(this.STATE.lastTotalStakeEpochInitialized==0||this.STATE.lastTotalStakeEpochInitialized==i)this.STATE.epochToTotalStakedWeight[i]=this.STATE.epochToTotalStakedWeight[i].add(t);else{for(let r=this.STATE.lastTotalStakeEpochInitialized+1;r<=i-1;r++)this.STATE.epochToTotalStakedWeight[r].toNumber()==0&&(this.STATE.epochToTotalStakedWeight[r]=this.STATE.epochToTotalStakedWeight[this.STATE.lastTotalStakeEpochInitialized]);this.STATE.epochToTotalStakedWeight[i]=this.STATE.epochToTotalStakedWeight[this.STATE.lastTotalStakeEpochInitialized].add(t)}this.STATE.lastTotalStakeEpochInitialized=i}async _adjustUserAndTotalStake(t){await this._setupEpochsRewardAndWeights(t);const a=this.STATE.currentEpoch,o=this.STATE.userFeesInfo.stakedWeight;if(o.isZero())this.STATE.userFeesInfo.stakedWeight=me.toBN(t);else{const s=me.lastEpochRelative(this.STATE.genesisEpoch,this.STATE.userFeesInfo.lastStakedBlock.toNumber());if(a==s)this.STATE.userFeesInfo.stakedWeight=o.add(t);else for(let i=s;i<=a;i++)i!=a?this.STATE.userFeesInfo.epochToUserStakedWeight[i]=o:(this.STATE.userFeesInfo.stakedWeight=o.add(t),this.STATE.userFeesInfo.epochToUserStakedWeight[i]=this.STATE.userFeesInfo.stakedWeight)}t!=0&&(this.STATE.userFeesInfo.lastStakedBlock=me.toBN(this.STATE.currentBlockNumber))}calculateEpochRewards(t){return this.STATE.userFeesInfo.epochToUserStakedWeight[t].mul(this.STATE.epochRewards[t]).div(this.STATE.epochToTotalStakedWeight[t].add(1))}async estimateHarvestAll(){await this.initState();const t=this.STATE.currentEpoch-1;if(await this._adjustUserAndTotalStake(0),!(this.STATE.currentEpoch>t))return me.toBN(0);const a=me.lastEpochRelative(this.STATE.genesisEpoch,Math.max(this.STATE.userFeesInfo.lastClaimedBlock.toNumber(),this.STATE.genesisEpoch));if(this.coreV2Contract,!(t>=a))return me.toBN(0);let o=me.toBN(0);for(let s=a;s<=t;s++){const i=this.calculateEpochRewards(s);o=o.add(i)}return o}async getUserPotentialEpochReward(){await this.initState(),await this._setupEpochsRewardAndWeights(0);const t=this.STATE.epochRewards[this.STATE.currentEpoch],a=this.STATE.epochToTotalStakedWeight[this.STATE.currentEpoch],o=this.STATE.userFeesInfo.stakedWeight.mul(t).div(a),s=this.STATE.currentEpoch,i=this.STATE.userFeesInfo.stakedAmount;return{potentialReward:o,epochRewards:t,userStaked:i,currentEpochNumber:s}}}const At=async(n,t,a)=>{const o=me.getCoreV2Contract(n,a),s=new Pt(o,t),i=new Pt(o,t),[r,l]=await Promise.all([s.estimateHarvestAll(),i.getUserPotentialEpochReward()]);return{availableRewards:r,...l}},vt=y.from(1).mul(y.from(10).pow(y.from(18))),jn=59400,En=75300,kn=1323100,We=function(n,t=null){return y.from(n)},Ie=n=>n.mul(y.from(10).pow(y.from(18))),ie=n=>parseFloat(ma(n)),Cn="0x0000000000000000000000000000000000000001",Ae=class Ae{constructor(){N(this,"state",{account:null,signer:null,staking:null,yieldFarmingPUSH:null,yieldFarmingLP:null,rewardForCurrentEpochPush:null,rewardForCurrentEpochLP:null,highCapLPStakingAPR:200,highCapPUSHStakingAPR:200,genesisEpochAmountPUSH:jn,deprecationPerEpochPUSH:900,genesisEpochAmountLP:En,deprecationPerEpochLP:900,annualPushReward:kn,uniswapV2Router02:null});N(this,"init",(t,a,o,s,i,r)=>{this.state.account=t,this.state.staking=a,this.state.pushToken=o,this.state.pushCoreV2=s,this.state.yieldFarmingLP=i,this.state.uniswapV2Router02=r});N(this,"getPoolStats",t=>new Promise(async(a,o)=>{const s=this.state.pushCoreV2,i=this.state.yieldFarmingLP,r=await i.getCurrentEpoch(),l=await this.currentEpochCalculation(t);let d;const h=await this.state.uniswapV2Router02.getAmountsOut(vt.toString(),[c.pushToken,c.WETHAddress,c.USDTAddress]);Q.coreContractChain===42||Q.coreContractChain===5?d=ie(h[h.length-1]):d=h[h.length-1].toNumber()/1e6;const m=ie(await this.state.pushToken.balanceOf(c.uniV2LPToken)),x=ie(await this.state.pushToken.attach(c.WETHAddress).balanceOf(c.uniV2LPToken));let F;const I=await this.state.uniswapV2Router02.getAmountsOut(vt.toString(),[c.WETHAddress,c.USDTAddress]);Q.coreContractChain===42||Q.coreContractChain===5?F=ie(I[I.length-1]):F=I[I.length-1].toNumber()/1e6;const w=ie(await this.state.pushToken.attach(c.uniV2LPToken).totalSupply()),U=(m*d+x*F)/w,B=U/d,G=ie(await i.getPoolSize(r.add(1))),te=ie(await s.totalStakedAmount())*d+G*U,J=await i.epochDuration(),re=(await i.epochStart()).add(r.sub(1).mul(J)).add(J);let _=await t.getBlock("latest");_=_.number;const L=await s.genesisEpoch(),b=await s.epochDuration();let R=(b.toNumber()-(_-L.toNumber())%b.toNumber())*12.6;R=Math.round(R);const T=Ie(y.from(this.state.annualPushReward)),k=await i.TOTAL_DISTRIBUTED_AMOUNT(),ee=T.add(k),K=await this.getPushRewardsDistributed(l,r);a({pushPrice:d,lpToPushRatio:B,epochEndTimestamp:re,epochEndTime:R,totalValueLocked:te,totalDistributedAmount:ee,pushRewardsDistributed:K})}));N(this,"getPushRewardsDistributed",async(t,a)=>{const o=this.state.pushCoreV2,s=await this.state.yieldFarmingLP.NR_OF_EPOCHS();a=a.toNumber()>s.toNumber()?s:a;const i=Ie(y.from(this.state.genesisEpochAmountLP)),r=Ie(y.from(this.state.deprecationPerEpochLP));let l=y.from(0),d=y.from(0);for(var h=0;h<a.toNumber();h++){const m=this.calcTotalAmountPerEpoch(i,y.from(h),r);d=d.add(m);const x=await o.epochRewards(h);d=d.add(x)}return l.add(d)});N(this,"getLPPoolStats",async t=>new Promise(async(a,o)=>{const s=this.state.yieldFarmingLP,i=await s.NR_OF_EPOCHS(),r=await s.getCurrentEpoch().then(F=>F.toNumber()>i.toNumber()?i:F),l=Ie(y.from(this.state.genesisEpochAmountLP)),d=Ie(y.from(this.state.deprecationPerEpochLP)),h=this.calcTotalAmountPerEpoch(l,r,d);this.state.rewardForCurrentEpochLP=h;const m=await s.getPoolSize(r.add(1));let x=await this.calcLPPoolAPR(l,r,d,m,t);x=Math.min(this.state.highCapLPStakingAPR,x),a({currentEpochLP:r,totalEpochLP:i,rewardForCurrentEpoch:h,poolBalance:m,stakingAPR:x})}));N(this,"getUserDataLP",async()=>new Promise(async(t,a)=>{if(this.state.account){const o=this.state.yieldFarmingLP,s=await o.NR_OF_EPOCHS(),i=await o.getCurrentEpoch().then(w=>w.toNumber()>s.toNumber()?s:w);let r=o.getEpochStake(this.state.account,i.add(1));const l=(await this.calculateUserEpochReward(i.toNumber(),o)).toFixed(2),d=(await o.lastEpochIdHarvested(this.state.account)).toNumber();let h=this.getAccumulatedReward(i,o),m=this.getTotalAvailableRewards(d,i,o),[x,F,I]=await Promise.all([h,m,r]);t({potentialUserReward:l,epochStakeNext:I,totalAccumulatedReward:x,totalAvailableReward:F})}}));N(this,"calculateLpEpochRewards",async(t,a)=>{t=t+1;const o=ie(await a.getEpochStake(this.state.account,t)),s=ie(await a.getPoolSize(t));let i=0;if(s>0&&a.address==c.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,d=r-l*t;i=o/s*d}return i});N(this,"getAccumulatedReward",async(t,a)=>{let o=[];for(var s=0;s<t.sub(1).toNumber();s++){const r=this.calculateLpEpochRewards(s,a);o.push(r)}let i=(await Promise.all(o)).reduce((r,l)=>r+l,0);return i=i.toFixed(2),i});N(this,"getTotalAvailableRewards",async(t,a,o)=>{let s=[];for(var i=t;i<a.sub(1).toNumber();i++){const l=this.calculateLpEpochRewards(i,o);s.push(l)}let r=(await Promise.all(s)).reduce((l,d)=>l+d,0);return r=r.toFixed(2),r});N(this,"getUserDataPUSH",async t=>new Promise(async(a,o)=>{if(this.state.account){const s=this.state.pushCoreV2;let{epochRewards:i=We(0),currentEpochNumber:r=0,userStaked:l=We(0),potentialReward:d=We(0),availableRewards:h=We(0)}={};({epochRewards:i,currentEpochNumber:r}=await At(t,this.state.account,c.pushCoreV2)),this.state.account!==Cn&&({userStaked:l,potentialReward:d,availableRewards:h}=await At(t,this.state.account,c.pushCoreV2));const m=await s.totalStakedAmount();let x=await s.usersRewardsClaimed(this.state.account);x=ie(x);let F=i;this.state.rewardForCurrentEpochPush=F;let I=this.calcPushStakingAPR(m);I=Math.min(this.state.highCapPUSHStakingAPR,I),d=ie(d),h=ie(h),a([{currentEpochNumber:r,currentReward:F,totalStakedAmount:m,stakingAPR:I},{userStaked:l,claimedReward:x,potentialReward:d,availableRewards:h}])}}));N(this,"calculateUserEpochReward",async(t,a)=>{const o=ie(await a.getEpochStake(this.state.account,t)),s=ie(await a.getPoolSize(t));let i=0;if(s>0&&a.address==c.yieldFarmLP){const r=this.state.genesisEpochAmountLP,l=this.state.deprecationPerEpochLP,d=r-l*t;i=o/s*d}return i});N(this,"calcTotalAmountPerEpoch",(t,a,o)=>a.toNumber()===0?t.mul(0):t.sub(a.mul(o)));N(this,"currentEpochCalculation",async t=>{const a=this.state.pushCoreV2,o=await a.genesisEpoch(),s=await t.getBlock("latest");return await a.lastEpochRelative(o,s.number)});N(this,"calcAnnualEpochReward",(t,a,o)=>{const s=this.calcTotalAmountPerEpoch(t,a,o);let i=s;for(let r=a.toNumber();r<a.toNumber()+12;r++)i=i.add(s.sub(o.mul(r)));return i});N(this,"calcPushStakingAPR",t=>{const a=this.state.annualPushReward;let o;return Q.coreContractChain===42||Q.coreContractChain===5?o=a/Math.max(ie(t),1)*100:o=a/ie(t)*100,o.toFixed(2)});N(this,"calcLPPoolAPR",async(t,a,o,s,i)=>{const r=this.calcAnnualEpochReward(t,a,o),l=s*i.lpToPushRatio;return(r.mul(100)/l).toFixed(2)})}static getInstance(){return Ae.instance||(Ae.instance=new Ae),Ae.instance}};N(Ae,"instance",null);let Ee=Ae;const Rt=({onClose:n,InnerComponentProps:t,toastObject:a})=>{const{title:o,getUserData:s,getPoolStats:i,setUnstakeErrorMessage:r,setWithdrawErrorMessage:l}=t,{account:d,provider:h}=Ce(),[m,x]=u.useState(0),[F,I]=u.useState(0),[w,U]=u.useState(!1),[B,G]=u.useState(!1),[te,J]=u.useState(!1);u.useState(null);const{userPushSDKInstance:re}=Ht(f=>f.user),{handleConnectWallet:_}=u.useContext($t),[L,b]=u.useState(0),R=()=>{r(null),l(null),n()},T=Ve(),k=u.useRef(null);Yt(k,()=>R());const ee=async()=>{var f=h.getSigner(d);const S=o==="Uni-V2"?c.uniV2LPToken:c.pushToken,z=new A(S,v.uniV2LpToken,f);let C=nn(await z.balanceOf(d));x(parseInt(C.toString().replace(/\D/,""))||0)},K=async()=>{G(!0);var f=h.getSigner(d);let S;o==="Uni-V2"?S=await new A(c.uniV2LPToken,v.uniV2LpToken,f).allowance(d,c.stakingV2):S=await new A(c.pushToken,v.uniV2LpToken,f).allowance(d,c.pushCoreV2),I(Y(S)),G(!1)};u.useEffect(()=>{ee(),K()},[]);const we=async()=>{if(!re.signer){_();return}if(w||B)return;G(!0);var f=h.getSigner(d);let S;const z=wa(L.toString(),18);o==="Uni-V2"?S=new A(c.uniV2LPToken,v.uniV2LpToken,f).approve(c.stakingV2,z):S=new A(c.pushToken,v.uniV2LpToken,f).approve(c.pushCoreV2,z),S.then(async C=>{a.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await h.waitForTransaction(C.hash),a.showMessageToast({toastTitle:"Success",toastMessage:`Successfully approved ${o} Tokens!`,toastType:"SUCCESS",getToastIcon:P=>e.jsx(he,{size:P,color:"green"})}),G(!1),U(!0)}catch(P){console.error("Error",P),a.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:V=>e.jsx($,{size:V,color:"red"})}),G(!1)}}).catch(C=>{console.error("Error",C),a.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature",toastType:"ERROR",getToastIcon:P=>e.jsx($,{size:P,color:"red"})}),G(!1)})},D=async()=>{if(!re.signer){_();return}if(te||!w)return;if(J(!0),L==0){a.showMessageToast({toastTitle:"Error",toastMessage:`You need to deposit atleast 1 ${o} token `,toastType:"ERROR",getToastIcon:z=>e.jsx($,{size:z,color:"red"})}),J(!1);return}var f=h.getSigner(d);let S;o==="Uni-V2"?S=new A(c.stakingV2,v.stakingV2,f).deposit(c.uniV2LPToken,y.from(L).mul(y.from(10).pow(18))):S=new A(c.pushCoreV2,v.pushCoreV2,f).stake(y.from(L).mul(y.from(10).pow(18))),S.then(async z=>{a.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await h.waitForTransaction(z.hash),a.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:C=>e.jsx(he,{size:C,color:"green"})}),i(),s(),J(!1),R()}catch(C){console.error("Error",C),a.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${C.name}+ ")`,toastType:"ERROR",getToastIcon:P=>e.jsx($,{size:P,color:"red"})}),J(!1)}}).catch(z=>{console.error("Error in depositing",z),z.reason=z.reason.slice(z.reason.indexOf("::")+1),a.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Cancelled! ${z.reason}`,toastType:"ERROR",getToastIcon:C=>e.jsx($,{size:C,color:"red"})}),J(!1)})},ne=f=>{f.preventDefault(),b(parseInt(f.target.value.replace(/\D/,""))||0),F>=parseInt(f.target.value.replace(/\D/,""))?U(!0):U(!1)},O=f=>{b(parseInt(f.toString().replace(/\D/,""))||0)},j=ve(600);return e.jsxs(Pn,{children:[e.jsxs(E,{justifyContent:"space-between",children:[e.jsx(An,{children:o==="Uni-V2"?"Uniswap V2 Staking Pool":"Push Fee Staking Pool"}),e.jsx(mt,{onClick:()=>R(),style:{cursor:"pointer"}})]}),e.jsxs(M,{children:[e.jsx(Ta,{weight:"500",size:"14px",self:"baseline",color:T.stakingSecondaryText,children:"You are Staking"}),e.jsxs(E,{width:"-webkit-fill-available",background:T.default.bg,height:"60px",padding:j?"8px":"14px",borderRadius:"12px",border:`1px solid ${T.modalBorderColor}`,children:[e.jsx(vn,{placeholder:"Enter Amount",flex:"2",radius:"4px",size:"32px",height:"32px",self:"auto",bg:"#FFF",color:T.stakingSecondaryText,value:L,onChange:f=>{f.preventDefault(),ne(f)},autoFocus:!0}),e.jsxs(Rn,{onClick:()=>O(m),children:["Max: ",m]})]})]}),e.jsxs(E,{margin:"20px 0",children:[e.jsxs(Mn,{onClick:we,background:w?T.stakingEmptyButtonBG:"#D53A94",cursor:w?"default":"pointer",disabled:!!w,children:[!w&&!B&&e.jsxs(Oe,{color:"#FFFFFF",weight:"400",cursor:"pointer",children:["Approve ",o]}),B&&!w&&e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#fff",title:"Approving",titleColor:"#FFF"}),w&&e.jsx(Oe,{color:T.emptyButtonText,weight:"600",cursor:"default",children:"Approved"})]}),e.jsxs(Fn,{cursor:w?"pointer":"default",background:w?"#D53A94":T.stakingEmptyButtonBG,disabled:!!(!w||te),onClick:D,children:[!te&&e.jsx(Oe,{color:w?"#FFFFFF":T.emptyButtonText,weight:"400",cursor:w?"pointer":"default",children:"Deposit"}),te&&e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFFF",title:"Depositing",titleColor:"#FFF"})]})]})]})},Pn=p.div`
  padding: 16px 20px;
  width: 340px;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  @media (max-width: 500px) {
    width: 270px;
    padding: 16px 15px;
  }
`,An=p(H)`
  font-size: 16px;
  letter-spacing: -0.019em;
  color: ${n=>n.theme.stakingPrimaryText};
`,vn=p(ya)`
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
  letter-spacing: -0.03em;
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
`,Un=({lpPoolStats:n,userDataLP:t,getLpPoolStats:a,getUserDataLP:o})=>{const{account:s,provider:i}=Ce(),[r,l]=u.useState(!1),[d,h]=u.useState(!1),[m,x]=u.useState(null),[F,I]=u.useState(null),w=Be(),U=Ve(),B=async()=>{if(r)return;l(!0);const R=Y(t.epochStakeNext);if(R==0){I("Nothing to unstake. You need to stake first"),l(!1);return}var T=i.getSigner(s);let k=new A(c.stakingV2,v.stakingV2,T);await k.balanceOf(s,c.uniV2LPToken),k.withdraw(c.uniV2LPToken,y.from(R).mul(y.from(10).pow(18))).then(async ee=>{w.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await i.waitForTransaction(ee.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:K=>e.jsx(he,{size:K,color:"green"})}),l(!1),a(),o()}catch(K){console.error("Error",K),w.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${K.name}+ ")`,toastType:"ERROR",getToastIcon:we=>e.jsx($,{size:we,color:"red"})}),l(!1)}}).catch(ee=>{w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:K=>e.jsx($,{size:K,color:"red"})}),l(!1)})},G=async()=>{if(!d){if((t==null?void 0:t.totalAvailableReward)==0){x("No Rewards to Claim!");return}if(console.debug("Lp POOL stats",n),!n.currentEpochLP||n.currentEpochLP==1){w.showMessageToast({toastTitle:"Error",toastMessage:"Harvest unlocks from Epoch 2!)",toastType:"ERROR",getToastIcon:T=>e.jsx($,{size:T,color:"red"})});return}h(!0);var R=i.getSigner(s);new A(c.yieldFarmLP,v.yieldFarming,R).massHarvest().then(async T=>{w.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{await i.waitForTransaction(T.hash),w.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:k=>e.jsx(he,{size:k,color:"green"})}),o(),h(!1)}catch(k){w.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${k.name}+ ")`,toastType:"ERROR",getToastIcon:ee=>e.jsx($,{size:ee,color:"red"})}),h(!1)}}).catch(T=>{w.showMessageToast({toastTitle:"Error",toastMessage:"Transaction Cancelled!",toastType:"ERROR",getToastIcon:k=>e.jsx($,{size:k,color:"red"})}),h(!1)})}};u.useEffect(()=>{x(null),I(null)},[s]);const te=()=>{(n==null?void 0:n.currentEpochLP.toNumber())+1<=(n==null?void 0:n.totalEpochLP.toNumber())?re():w.showMessageToast({toastTitle:"Error",toastMessage:"Epochs have ended!",toastType:"ERROR",getToastIcon:R=>e.jsx($,{size:R,color:"red"})})},{isModalOpen:J,showModal:re,ModalComponent:_}=tt(),L=Be(),b=ve(600);return e.jsxs(In,{children:[e.jsx(_,{InnerComponent:Rt,InnerComponentProps:{title:"Uni-V2",getUserData:o,getPoolStats:a,setUnstakeErrorMessage:I,setWithdrawErrorMessage:x},toastObject:L,modalPosition:nt.ON_PARENT}),e.jsx(M,{margin:"0px 0px 20px 0px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(Nn,{children:"Uniswap V2 LP Staking Pool"}),e.jsxs(xt,{children:["Current APR"," ",e.jsxs(Te,{color:"#D53A94",fontWeight:"600",children:[">",X(n==null?void 0:n.stakingAPR),"%"]})]})]}):e.jsxs(Ne,{padding:"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(g,{height:"12px",width:"112px"})]})}),e.jsxs(M,{flex:"5",children:[e.jsxs(Ln,{border:`1px solid ${U.stakingBorder}`,borderRadius:"16px",children:[e.jsx(M,{margin:b?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:b?" 7px":"10px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(xt,{children:"Current Reward"}),e.jsxs(H,{fontSize:b?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"-0.03em",children:[X(Y(n==null?void 0:n.rewardForCurrentEpoch))," PUSH"]})]}):e.jsxs(Ne,{padding:b?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:b?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:b?"65px":"100px}"})]})}),e.jsx(Dn,{width:"10px",height:"100%"}),e.jsx(M,{margin:b?"0 0 0 6px":"0 0 0 18px",padding:b?" 7px":"10px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(xt,{children:"Total Staked"}),e.jsxs(zn,{fontSize:b?"18px":"24px",fontWeight:"600",letterSpacing:"-0.03em",children:[X(Y(n==null?void 0:n.poolBalance))," UNI-V2"]})]}):e.jsxs(Ne,{padding:b?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:b?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:b?"65px":"100px}"})]})})]}),e.jsx(E,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"-0.03em",children:n?e.jsxs(e.Fragment,{children:[e.jsx(Mt,{children:"Current Epoch"}),e.jsxs(Mt,{children:[Math.min(n==null?void 0:n.currentEpochLP,n==null?void 0:n.totalEpochLP).toString(),"/",n==null?void 0:n.totalEpochLP.toString()]})]}):e.jsx(Ne,{padding:"5px 0px 0 15px",children:e.jsx(g,{height:"12px",width:"124px"})})}),t?e.jsxs(M,{children:[e.jsxs(E,{justifyContent:"space-between",margin:b?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ye,{children:["User Deposit",e.jsx(Ge,{children:e.jsx(q,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Je,{children:[Y(t==null?void 0:t.epochStakeNext)," UNI-V2"]})]}),e.jsxs(E,{justifyContent:"space-between",margin:b?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ye,{children:["Rewards Claimed",e.jsx(Ge,{children:e.jsx(q,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Je,{children:[" ",X(((t==null?void 0:t.totalAccumulatedReward)-(t==null?void 0:t.totalAvailableReward)).toFixed(2))," ","PUSH"]})]}),e.jsxs(E,{justifyContent:"space-between",margin:b?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ye,{children:["Current Epoch Reward",e.jsx(Ge,{children:e.jsx(q,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Je,{children:[" ",X(t==null?void 0:t.potentialUserReward)," PUSH"]})]}),e.jsxs(E,{justifyContent:"space-between",margin:b?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ye,{children:["Available for Claiming",e.jsx(Ge,{children:e.jsx(q,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Je,{children:[" ",X(t==null?void 0:t.totalAvailableReward)," PUSH"]})]})]}):e.jsxs(ke,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(E,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(E,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(E,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(E,{justifyContent:"space-between",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]})]})]}),e.jsx(M,{padding:b?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:t?e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(Vn,{onClick:()=>{te()},children:"Stake $UNI-V2 LP Tokens"})}),e.jsxs(Bn,{children:[Y(t==null?void 0:t.epochStakeNext)==="0"?e.jsx(q,{error:!0,ToolTipTitle:"Nothing to unstake! Stake First.",ToolTipWidth:"16rem",margin:"0 10px 0 0",bottom:"-30px",children:e.jsx(Ke,{border:"none",background:U.disableButtonBg,cursor:"default",color:U.disabledButtonText,children:r?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Unstake $UNI-V2"})}):e.jsx(Ke,{border:`1px solid ${U.activeButtonText}`,background:"transparent",color:U.activeButtonText,cursor:"pointer",onClick:B,style:{margin:"0px 10px 0px 0px"},children:r?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:U.activeButtonText,title:"Unstaking",titleColor:U.activeButtonText}):"Unstake $UNI-V2"}),(t==null?void 0:t.totalAvailableReward)==="0.00"?e.jsx(q,{bottom:"-30px",left:"40px",ToolTipTitle:"No Rewards to Claim!",error:!0,ToolTipWidth:"10rem",children:e.jsx(Ke,{border:"none",cursor:"default",background:U.disableButtonBg,color:U.disabledButtonText,children:d?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#FFFFF"}):"Claim Rewards"})}):e.jsx(Ke,{border:`1px solid ${U.activeButtonText}`,background:"transparent",color:U.activeButtonText,cursor:"pointer",onClick:()=>G(),children:d?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:U.activeButtonText,title:"Claiming",titleColor:U.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Ne,{width:"100%",children:[e.jsx(g,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(g,{height:"49px",width:"100%"})]})})]})},In=p(ze)`
  border: 1px solid ${n=>n.theme.stakingBorder};
  border-radius: 24px;
  padding: 20px;

  font-family: 'Strawford';

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
`,Nn=p(H)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: -0.03em;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`,xt=p.div`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: -0.03em;
  // color: #333333;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Ln=p(E)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,Dn=p.div`
  width: 1px;
  height: 100%;
  background: ${n=>n.theme.stakingBorder};
`,Ye=p.div`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: -0.03em;
  // color: rgba(87, 93, 115, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${n=>n.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,zn=p(H)`
  color: ${n=>n.theme.stakingSecondaryText};
`,Mt=p(Gt)`
  font-weight: 600;
  text-align: right;
  letter-spacing: -0.03em;
  font-size: 16px;
  line-height: 141%;
  margin-right: 5px;
  color: ${n=>n.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,Ge=p(Te)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,Je=p(H)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: -0.03em;
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
  letter-spacing: -0.03em;
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
`;const Ne=p(ke)`
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
`;const On=n=>u.createElement("svg",{width:29,height:28,viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},u.createElement("path",{d:"M26.1673 14.0002C26.1673 20.4431 20.9436 25.6668 14.5007 25.6668C8.05773 25.6668 2.83398 20.4431 2.83398 14.0002C2.83398 7.55725 8.05773 2.3335 14.5007 2.3335C20.9436 2.3335 26.1673 7.55725 26.1673 14.0002Z",fill:"#30CC8B"}),u.createElement("path",{d:"M20.6751 8.5083L12.7593 16.4335L9.49146 13.175L7.8418 14.8246L12.7616 19.7328L22.3254 10.158L20.6751 8.5083Z",fill:"white"})),Hn=({onClose:n,InnerComponentProps:t})=>{const{currentTransactionNo:a,totalTransactionNo:o,transactionSteps:s,transactionText:i,setCurrentTransactionNo:r,setTotalTransactionNo:l,setTransactionSteps:d,claimRewards:h,unstakeTokensPaginated:m}=t,x=()=>{d(0),n()},F=async()=>{d(0),l(0),r(0),i!=null&&i.includes("Unstaking")?m():h()};return e.jsx($n,{children:o?e.jsxs(e.Fragment,{children:[e.jsx(E,{justifyContent:"end",children:e.jsx(mt,{onClick:()=>x(),style:{cursor:"pointer"}})}),s===0&&e.jsxs(e.Fragment,{children:[e.jsx(Jt,{size:42,color:xe.COLORS.PRIMARY_PINK,type:Kt.PROCESSING}),e.jsxs(M,{gap:"24px",margin:"16px 0 0 0",children:[e.jsxs(M,{children:[e.jsxs(H,{fontSize:"28px",fontWeight:"500",letterSpacing:"-0.84px",children:["Please sign transaction ",a,"/",o]}),e.jsx(H,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"Processing your request"})]}),e.jsx(H,{fontSize:"18px",fontWeight:"400",color:"#657795",children:i}),e.jsx(M,{padding:"16px",children:e.jsx(H,{fontSize:"16px",fontWeight:"400",color:"#D53A94",children:"Confirm the request in your wallet"})})]})]}),s===1&&e.jsxs(M,{gap:"24px",children:[e.jsx(M,{gap:"9px",children:e.jsx(H,{fontSize:"28px",fontWeight:"500",letterSpacing:"-0.84px",children:"Transaction Error"})}),e.jsx(M,{children:e.jsx(Ft,{onClick:F,children:"Retry"})})]}),s===2&&e.jsxs(M,{gap:"24px",children:[e.jsxs(M,{children:[e.jsx(On,{height:"50px",width:"50px"}),e.jsxs(M,{gap:"9px",children:[e.jsx(H,{fontSize:"28px",fontWeight:"500",letterSpacing:"-0.84px",children:"Transactions Successful"}),e.jsx(H,{fontSize:"18px",fontWeight:"400",color:"#657795",children:"You have claimed all the rewards."})]})]}),e.jsx(M,{onClick:x,children:e.jsx(Ft,{children:"Close"})})]})]}):e.jsx(Jt,{size:42,color:xe.COLORS.PRIMARY_PINK,type:Kt.PROCESSING})})},$n=p(M)`
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
  letter-spacing: -0.03em;
  color: #ffffff;
  cursor: pointer;
  & > div {
    display: block;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,_n=({userDataPush:n,getUserDataPush:t,PUSHPoolstats:a,getPUSHPoolStats:o})=>{const{account:s,provider:i}=Ce(),[r,l]=u.useState(!1),[d,h]=u.useState(!1),[m,x]=u.useState(null),[F,I]=u.useState(null),[w,U]=u.useState(0),[B,G]=u.useState(0),[te,J]=u.useState(0),[re,_]=u.useState(""),L=Be(),b=Ve(),R=async C=>{var P=i.getSigner(s);let V=new A(c.pushToken,v.pushToken,P);if(await V.holderDelegation(s,C.address))return!0;try{L.showLoaderToast({loaderMessage:"Delegating! Please wait.."});const Z=await V.setHolderDelegation(C.address,"true");return await i.waitForTransaction(Z.hash),L.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed! Address Delegated",toastType:"SUCCESS",getToastIcon:se=>e.jsx(he,{size:se,color:"green"})}),!0}catch(Z){return console.error("Error in delegating",Z),L.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${Z.reason}`,toastType:"ERROR",getToastIcon:se=>e.jsx($,{size:se,color:"red"})}),l(!1),!1}},T=async C=>{const P=(await C.userFeesInfo(s)).lastClaimedBlock;if(P.toNumber()!==0){const V=await C.genesisEpoch(),Z=await C.epochDuration();return(P-V)/Z}},k=async()=>{if(d)return;if(h(!0),(n==null?void 0:n.availableRewards)==0){I("No Rewards to Claim"),h(!1);return}var C=i.getSigner(s);let P=new A(c.pushCoreV2,v.pushCoreV2,C);const V=a==null?void 0:a.currentEpochNumber,Z=14;if(!await R(P))return;let se=1;se=await T(P),S(),h(!1);let W=0;V-se<Z,W=Math.ceil((V-se)/Z),G(W),W!=0&&(await ee(W,se,P,Z),t(),J(2),U(0))},ee=async(C,P,V,Z)=>{const se=a==null?void 0:a.currentEpochNumber;let W=0;for(let de=0;de<C;de++){let pe=P;P+=Z;let ye=Math.min(P,se-1);_(`Claiming the rewards from Epoch ${pe} to ${ye} `),await V.harvestPaginated(ye,{gasLimit:91e4}).then(async ae=>{try{L.showLoaderToast({loaderMessage:"Waiting for confirmation"}),await i.waitForTransaction(ae.hash),L.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:oe=>e.jsx(he,{size:oe,color:"green"})}),W++,U(W)}catch{console.error("Error in the transaction",ae);return}}).catch(ae=>{throw console.error("Error in claiming the reward",ae),L.showMessageToast({toastTitle:"Error",toastMessage:`Transaction failed! ${ae.reason}`,toastType:"ERROR",getToastIcon:oe=>e.jsx($,{size:oe,color:"red"})}),_(""),l(!1),t(),J(1),U(0),ae})}},K=async()=>{if(r)return;if(l(!0),Y(n==null?void 0:n.userStaked)==0){x("Nothing to unstake, You need to stake first"),l(!1);return}var C=i.getSigner(s);let P=new A(c.pushCoreV2,v.pushCoreV2,C);const V=await R(P);if(h(!1),!V)return;const Z=a==null?void 0:a.currentEpochNumber,se=14;let W=0;if(W=await T(P),W>=Z-1){l(!1),x("PUSH cannot be unstaked until current epoch is over."),L.showMessageToast({toastTitle:"Unstaking Error",toastMessage:"You cannot unstake until Current Epoch gets over.",toastType:"ERROR",getToastIcon:pe=>e.jsx($,{size:pe,color:"red"})});return}S();const de=Math.ceil((Z-W)/se);G(de),de>1&&await ee(de-1,W,P,se),_("Unstaking Your Push Tokens. Please wait..."),P.unstake().then(async pe=>{L.showLoaderToast({loaderMessage:"Unstaking! Waiting for Confirmation..."});try{await i.waitForTransaction(pe.hash),L.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Completed!",toastType:"SUCCESS",getToastIcon:ye=>e.jsx(he,{size:ye,color:"green"})}),o(),t(),l(!1),J(2),U(0)}catch(ye){console.error("Error",ye),L.showMessageToast({toastTitle:"Error",toastMessage:`Transaction Failed! (" +${ye.name}+ ")`,toastType:"ERROR",getToastIcon:ae=>e.jsx($,{size:ae,color:"red"})}),_(""),l(!1)}}).catch(pe=>{console.error("Error: ",pe);const ye=pe.reason.includes("PushCoreV2::unstake:"),ae=pe.reason.includes("PushCoreV2::harvestPaginated:");if(ye||ae)x("PUSH cannot be unstaked until current epoch is over.");else{let oe=pe.reason.slice(pe.reason.indexOf("::")+1);oe=oe.replace("unstake:",""),L.showMessageToast({toastTitle:"Error",toastMessage:`${oe}`,toastType:"ERROR",getToastIcon:De=>e.jsx($,{size:De,color:"red"})})}l(!1),t(),J(1),U(0)})};u.useEffect(()=>{I(null),x(null)},[s]);const{isModalOpen:we,showModal:D,ModalComponent:ne}=tt(),O=Be(),j=ve(600),{isModalOpen:f,showModal:S,ModalComponent:z}=tt();return e.jsxs(Jn,{children:[e.jsx(ne,{InnerComponent:Rt,InnerComponentProps:{title:"PUSH",getUserData:t,getPoolStats:o,setUnstakeErrorMessage:x,setWithdrawErrorMessage:I},toastObject:O,modalPosition:nt.ON_PARENT}),e.jsx(z,{InnerComponent:Hn,InnerComponentProps:{currentTransactionNo:w,totalTransactionNo:B,transactionSteps:te,transactionText:re,setCurrentTransactionNo:U,setTotalTransactionNo:G,setTransactionSteps:J,claimRewards:k,unstakeTokensPaginated:K},onConfirm:()=>{},modalPadding:"0px",modalPosition:nt.ON_ROOT}),e.jsx(M,{margin:"0px 0px 20px 0px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Kn,{children:"PUSH Fee Staking Pool"}),e.jsxs(Zn,{children:["Current APR",e.jsxs(Te,{color:"#D53A94",fontWeight:"600",margin:"0 5px 0 5px",children:[">",X(a==null?void 0:a.stakingAPR),"% + Fee"]}),e.jsx(Wn,{})]})]}):e.jsxs(Le,{padding:"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:"234px",margin:"0 0 10px 0"}),e.jsx(g,{height:"12px",width:"112px"})]})}),e.jsxs(M,{flex:"5",children:[e.jsxs(qn,{border:`1px solid ${b.stakingBorder}`,borderRadius:"16px",children:[e.jsx(M,{margin:j?"0px 6px 0 0 ":"0px 18px 0px 0px",padding:j?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(It,{children:"Current Reward"}),e.jsxs(H,{fontSize:j?"18px":"24px",fontWeight:"600",color:"#D53A94",letterSpacing:"-0.03em",children:[X(Y(a==null?void 0:a.currentReward))," PUSH"]})]}):e.jsxs(Le,{padding:j?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:j?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:j?"65px":"100px}"})]})}),e.jsx(Xn,{width:"10px",height:"100%"}),e.jsx(M,{margin:j?"0 0 0 6px":"0 0 0 18px",padding:j?" 7px":"10px",children:a?e.jsxs(e.Fragment,{children:[e.jsx(It,{children:"Total Staked"}),e.jsxs(Qn,{fontSize:j?"18px":"24px",fontWeight:"600",letterSpacing:"-0.03em",children:[X(Y(a==null?void 0:a.totalStakedAmount))," PUSH"]})]}):e.jsxs(Le,{padding:j?"0px":"5px 15px 0 15px",children:[e.jsx(g,{height:"12px",width:j?"100px":"135px",margin:"0 0 8px 0"}),e.jsx(g,{height:"12px",width:j?"65px":"100px}"})]})})]}),e.jsx(E,{alignSelf:"end",margin:"12px 13px 24px 0px",color:"#575D73",letterSpacing:"-0.03em",children:a?e.jsxs(e.Fragment,{children:[e.jsx(Nt,{children:"Current Epoch"}),e.jsx(Nt,{children:a==null?void 0:a.currentEpochNumber})]}):e.jsx(Le,{padding:"5px 0px 0 15px",children:e.jsx(g,{height:"12px",width:"124px"})})}),n?e.jsxs(M,{children:[e.jsxs(E,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ze,{children:["User Deposit",e.jsx(qe,{children:e.jsx(q,{ToolTipTitle:"User Deposited",ToolTipBody:"Amount of PUSH Token User Staked",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Xe,{children:[" ",X(Y(n==null?void 0:n.userStaked))," PUSH"]})]}),e.jsxs(E,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ze,{children:["Rewards Claimed",e.jsx(qe,{children:e.jsx(q,{ToolTipTitle:"Rewards Claimed",ToolTipBody:"Amount of Push Claimed by User",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Xe,{children:[" ",X((n==null?void 0:n.claimedReward).toFixed(2))," PUSH"]})]}),e.jsxs(E,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ze,{children:["Current Epoch Reward",e.jsx(qe,{children:e.jsx(q,{ToolTipTitle:"Current Epoch Reward",ToolTipBody:"Displays the approximate latest reward amount for current epoch",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Xe,{children:[" ",X((n==null?void 0:n.potentialReward).toFixed(2))," PUSH"]})]}),e.jsxs(E,{justifyContent:"space-between",margin:j?"0px 0px 12px 0px":"0px 13px 12px 13px",children:[e.jsxs(Ze,{children:["Available for Claiming",e.jsx(qe,{children:e.jsx(q,{ToolTipTitle:"Available for Claiming",ToolTipBody:"Amount of Push Token Available to claim",children:e.jsx(le,{src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}})})})]}),e.jsxs(Xe,{children:[" ",X((n==null?void 0:n.availableRewards).toFixed(2))," PUSH"]})]})]}):e.jsxs(ke,{padding:"0 15px 15px 15px",width:"100%",maxWidth:" -webkit-fill-available",borderRadius:"5px",children:[e.jsxs(E,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(E,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(E,{justifyContent:"space-between",margin:"0 0 23px 0",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]}),e.jsxs(E,{justifyContent:"space-between",children:[e.jsx(g,{height:"12px",width:"164px"}),e.jsx(g,{height:"12px",width:"72px"})]})]})]}),e.jsx(M,{padding:j?"0px ":"0px 14px",margin:"24px 0px 24px 0px",children:n?e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(ta,{onClick:D,children:" Stake $PUSH"})}),e.jsxs(ea,{children:[(a==null?void 0:a.currentEpochNumber)<=2?e.jsx(Ut,{ToolTipTitle:"You can unstake once epoch 2 ends.",ButtonTitle:"Unstake PUSH"}):Y(n==null?void 0:n.userStaked)==0||m!==null?e.jsx(Ut,{ToolTipTitle:m||"Nothing to unstake, Stake First",ButtonTitle:"Unstake PUSH"}):e.jsx(Qe,{border:`1px solid ${b.activeButtonText}`,background:"transparent",color:b.activeButtonText,cursor:"pointer",onClick:K,style:{margin:"0px 10px 0px 0px"},children:r?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:b.activeButtonText,title:"Unstaking",titleColor:b.activeButtonText}):"Unstake $PUSH"}),(n==null?void 0:n.availableRewards)===0?e.jsx(q,{bottom:"-30px",ToolTipTitle:"No Rewards to Claim",error:!0,left:"40px",ToolTipWidth:"10rem",children:e.jsx(Qe,{border:"none",background:b.disableButtonBg,cursor:"default",color:b.disabledButtonText,children:d?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:"#D53A94"}):"Claim Rewards"})}):e.jsx(Qe,{border:`1px solid ${b.activeButtonText}`,background:"transparent",color:b.activeButtonText,cursor:"pointer",onClick:k,children:d?e.jsx(ce,{type:ue.SEAMLESS,spinnerSize:26,spinnerColor:b.activeButtonText,title:"Claiming",titleColor:b.activeButtonText}):"Claim Rewards"})]})]}):e.jsxs(Le,{width:"100%",children:[e.jsx(g,{height:"49px",width:"100%",margin:"0 0 8px 0"}),e.jsx(g,{height:"49px",width:"100%"})]})})]})},Ut=n=>{const t=Ve();return e.jsx(q,{error:!0,ToolTipTitle:n.ToolTipTitle,ToolTipWidth:"16rem",margin:"0 10px 0 0",bottom:"-30px",children:e.jsx(Qe,{border:"none",background:t.disableButtonBg,cursor:"default",color:t.disabledButtonText,children:n.ButtonTitle})})},Wn=()=>{const[n,t]=u.useState(!1),a=()=>t(!1),o=u.useRef(null);return Yt(o,()=>a()),e.jsxs(Yn,{ref:o,children:[e.jsx(le,{onClick:()=>t(!n),src:ge,alt:"Info-Logo",width:"16px",style:{cursor:"pointer"}}),n&&e.jsx(Gn,{id:"channel",children:e.jsx(Tt,{title:"",body:"Push Fee Pool APR distributes yield farming rewards + fee earned by protocol. More Info "})})]})},Yn=p.div`
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
  font-family: 'Strawford';
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
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  min-height: 587px;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 1300px) {
    margin: 10px 0;
  }
  @media (max-width: 600px) {
    padding: 16px;
  }
`,Kn=p(H)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: -0.03em;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`,Zn=p.div`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: -0.03em;
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
  letter-spacing: -0.03em;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`,qn=p(E)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`,Xn=p.div`
  width: 1px;
  height: 100%;
  background: ${n=>n.theme.stakingBorder};
`,Ze=p.div`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: -0.03em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${n=>n.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Qn=p(H)`
  color: ${n=>n.theme.stakingSecondaryText};
`,Nt=p(Gt)`
  font-weight: 600;
  text-align: right;
  letter-spacing: -0.03em;
  font-size: 16px;
  line-height: 141%;
  margin-right: 5px;
  color: ${n=>n.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`,qe=p(Te)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`,Xe=p(H)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: -0.03em;
  color: ${n=>n.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;p(E)`
  align-self: end;
  margin: 12px 13px 24px 0px;
  letter-spacing: -0.03em;
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
  letter-spacing: -0.03em;
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
`,Le=p(ke)`
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
`;const na=({setActiveTab:n})=>{const{provider:t,account:a,chainId:o}=Ce(),[s,i]=u.useState(),[r,l]=u.useState(),[d,h]=u.useState(),[m,x]=u.useState(),[F,I]=u.useState(),[w,U]=u.useState(null),[B,G]=u.useState(null),[te,J]=u.useState(null),[re,_]=u.useState(null),[L,b]=u.useState(null),R=t==null?void 0:t.getSigner(a),T=u.useCallback(async()=>{const D=await Ee.getInstance().getPoolStats(t);U({...D})},[r,s,m,d,F,t]),k=u.useCallback(async()=>{const D=await Ee.getInstance().getPoolStats(t),ne=await Ee.getInstance().getLPPoolStats(D);G({...ne})},[r,s,m,d,F,t]),ee=u.useCallback(async()=>{},[]),K=u.useCallback(async()=>{const D=await Ee.getInstance().getUserDataLP();J({...D})},[r,s,m,d,F]),we=u.useCallback(async()=>{const[D,ne]=await Ee.getInstance().getUserDataPUSH(t);b({...D}),_({...ne})},[r,s,m,d,F,t]);return u.useEffect(()=>{if(o!==Q.coreContractChain&&o!==Q.mainnetCoreContractChain)return;G(null),J(null),b(null),_(null);let D=new A(c.stakingV2,v.stakingV2,R),ne=new A(c.pushToken,v.pushToken,R),O=new A(c.pushCoreV2,v.pushCoreV2,R),j=new A(c.yieldFarmLP,v.yieldFarming,R),f=new A(c.uniswapV2Router02,v.uniswapV2Router02,R);if(l(D),i(ne),x(O),h(j),I(f),R&&a){var S=t==null?void 0:t.getSigner(a);let z=new A(c.stakingV2,v.stakingV2,S),C=new A(c.pushToken,v.pushToken,S),P=new A(c.pushCoreV2,v.pushCoreV2,S),V=new A(c.yieldFarmLP,v.yieldFarming,S),Z=new A(c.uniswapV2Router02,v.uniswapV2Router02,S);l(z),i(C),x(P),h(V),I(Z)}Ee.getInstance().init(a,D,ne,O,j,f),T(),K(),k(),we()},[a,o]),e.jsxs(e.Fragment,{children:[e.jsx(jt,{logo:"announcement",title:"New V2 Pools are now Live! Stake or migrate now.",body:"Users who were part of the previous Push staking program, need to migrate to new pools to continue earning rewards. Click",setActiveTab:n}),e.jsx(fn,{getLpPoolStats:k,poolStats:w,setPoolStats:U}),e.jsx(yn,{poolStats:w}),e.jsxs(aa,{children:[e.jsx(_n,{userDataPush:re,getUserDataPush:we,PUSHPoolstats:L,getPUSHPoolStats:ee}),e.jsx(Un,{lpPoolStats:B,userDataLP:te,getLpPoolStats:k,getUserDataLP:K})]})]})},aa=p(E)`
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`,ia=({onClose:n})=>{const{chainId:t,switchChain:a}=Ce(),o=()=>{const s=Q.allowedNetworks[0];t!==1&&t!==11155111&&(console.info("Current Chain ID ",t),console.info("Chain Id to pass",s),a(Q.coreContractChain))};return u.useEffect(()=>{(t===Q.coreContractChain||t===Q.mainnetCoreContractChain)&&n()},[t]),e.jsxs(sa,{children:[e.jsx(mt,{style:{cursor:"pointer",alignSelf:"end"}}),e.jsxs(oa,{children:[e.jsx(ra,{children:"Unsupported Network"}),e.jsxs(pa,{children:["Push Yield Farm V2 is only live on Ethereum Chain.",e.jsx("br",{}),"Kindly switch to Ethereum"]})]}),e.jsx(la,{children:e.jsx(da,{onClick:o,children:"Switch Network"})})]})},sa=p(M)`
  padding: 32px 36px;
  width: 445px;
`,oa=p(M)`
  font-family: Strawford;
  font-style: normal;
  line-height: 141%; /* 39.48px */
  letter-spacing: -0.84px;
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
  letter-spacing: -0.03em;
  color: #ffffff;
  cursor: pointer;
  & > div {
    display: block;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;Q.coreContractChain;let Lt,Dt,zt,gt,Bt,Vt;Lt=()=>{fa.pageview("/yield");const[n,t]=u.useState(0),[a,o]=u.useState(!1),{account:s,chainId:i,switchChain:r}=Ce(),l=()=>{const x=Q.allowedNetworks[0];i!==1&&i!==5&&r(x)};u.useEffect(()=>{i!==1&&i!==11155111&&(h(),l())},[i]);const{isModalOpen:d,showModal:h,ModalComponent:m}=tt();return e.jsxs(Dt,{children:[e.jsx(m,{InnerComponent:ia,onConfirm:()=>{},modalPadding:"0px",modalPosition:nt.ON_PARENT}),e.jsxs(zt,{children:[e.jsx(gt,{isActive:!n,onClick:()=>{o(!0),t(0)},children:"Yield Farming V2"}),e.jsxs(gt,{isActive:n,onClick:()=>{o(!1),t(1)},children:["Yield Farming V1 ",e.jsx(Bt,{children:"Deprecated"})]})]}),n===0&&e.jsx(na,{setActiveTab:t}),n===1&&e.jsx(gn,{setActiveTab:t})]})},Dt=p(ze)`
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
`,zt=p(E)`
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
`,Zt=()=>e.jsx(Vt,{children:e.jsx(Lt,{})}),Vt=p(ze)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{ba as __tla,Zt as default};
