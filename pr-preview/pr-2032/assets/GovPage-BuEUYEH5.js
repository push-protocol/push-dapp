import{d_ as e,ef as q,e9 as c,eT as d,eU as j,eV as Q,e3 as Ie,eX as Ae,e4 as ve,dX as n,fF as ye,dV as Ne,fG as Ue,fz as $e,fA as Oe,fy as Le,eY as Z,e8 as u,e0 as v,eZ as Ce,eW as D,fH as S,fI as Pe,fJ as _e,d$ as Ge,ep as y,e6 as Re,f0 as ze,eh as ke,ei as b,ec as Be,f2 as Je,__tla as Fe}from"./index-B8bM1cbm.js";import{C as He,__tla as Ve}from"./ContentLayout-CwaovmqW.js";import{E as Ye,__tla as Ke}from"./EPNSCoreHelper-B02-lXub.js";let ee,We=Promise.all([(()=>{try{return Fe}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return Ke}catch{}})()]).then(async()=>{const te=async({delegateeAddress:t,epnsToken:s,toast:r,setTxInProgress:l,provider:x,LoaderToast:p})=>{console.debug("delegateeAddress",t);let m;m=s.delegate(t),m.then(async g=>{let f=r.dark(e.jsx(p,{msg:"Waiting for Confirmation...",color:"#35c5f3"}),{position:"bottom-right",autoClose:!1,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});try{await x.waitForTransaction(g.hash),r.update(f,{render:"Transaction Completed!",type:r.TYPE.SUCCESS,autoClose:5e3}),l(!1)}catch(T){r.update(f,{render:"Transaction Failed! ("+T.name+")",type:r.TYPE.ERROR,autoClose:5e3}),l(!1)}}).catch(g=>{r.dark("Transaction Cancelled!",{position:"bottom-right",type:r.TYPE.ERROR,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),l(!1)})},o=new Array(4);function se(t){for(let s=0;s<o.length;s++)o[s]=0;for(let s=0;s<t.length;s++)o[s%4]=(o[s%4]<<5)-o[s%4]+t.charCodeAt(s)}function E(){const t=o[0]^o[0]<<11;return o[0]=o[1],o[1]=o[2],o[2]=o[3],o[3]=o[3]^o[3]>>19^t^t>>8,(o[3]>>>0)/(1<<31>>>0)}function N(){const t=Math.floor(E()*360),s=`${E()*60+40}%`,r=`${(E()+E()+E()+E())*25+50}%`;return`hsl(${t},${s},${r})`}function re(t){const s=t,r=t,l=Math.ceil(s/2),x=s-l,p=[];for(let m=0;m<r;m++){const g=[];for(let T=0;T<l;T++)g[T]=Math.floor(E()*2.3);const f=g.slice(0,x);f.reverse(),g.push(...f),p.push(...g)}return p}function oe(t){const s={};return s.seed=t.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16),se(s.seed),s.size=t.size||8,s.scale=t.scale||4,s.color=t.color||N(),s.bgcolor=t.bgcolor||N(),s.spotcolor=t.spotcolor||N(),s}function P(t,s){t=oe(t||{});const r=re(t.size),l=Math.sqrt(r.length);s.width=s.height=t.size*t.scale;const x=s.getContext("2d");x.fillStyle=t.bgcolor,x.fillRect(0,0,s.width,s.height),x.fillStyle=t.color;for(let p=0;p<r.length;p++)if(r[p]){const m=Math.floor(p/l),g=p%l;x.fillStyle=r[p]==1?t.color:t.spotcolor,x.fillRect(g*t.scale,m*t.scale,t.scale,t.scale)}return s}function ae(t){const s=document.createElement("canvas");return P(t,s),s}const ie={create:ae,render:P};class ne extends q.Component{constructor(s){super(s)}getOpts(){return{seed:this.props.opts.seed||"foo",color:this.props.opts.color||"#dfe",bgcolor:this.props.opts.bgcolor||"#a71",size:this.props.opts.size||15,scale:this.props.opts.scale||3,spotcolor:this.props.opts.spotcolor||"#000"}}componentDidMount(){this.draw()}componentDidUpdate(s){this.props.seed!==s.seed&&this.draw()}draw(){ie.render({seed:this.props.opts.seed,size:this.props.opts.size,scale:this.props.opts.scale},this.canvas)}render(){return q.createElement("canvas",{ref:s=>this.canvas=s})}}const le=()=>{Ae.pageview("/governance");const t=ve(),{web3NameList:s}=n.useContext(ye),{account:r,provider:l,chainId:x}=Ne(),p=x===ke.coreContractChain,[m,g]=n.useState(!0),[f,T]=n.useState(!1),[i,de]=n.useState(null),[$,pe]=n.useState(null),[M,he]=n.useState(null),[w,O]=n.useState(!1),[Y,xe]=n.useState(null),[L,ge]=n.useState(null),[I,fe]=n.useState("0x"),[K,W]=n.useState(null),[Xe,ue]=n.useState(null),me="withgas";Ue(r);const C=s[r];n.useEffect(()=>{if(!p){const a=window.location.origin;window.location.replace(`${a}/#/notavailable`)}}),n.useEffect(()=>{if(console.debug(r),l&&r){let a=l.getSigner(r);ue(a);const h=new $e(Oe.epnsToken,Le.epnsToken,a);de(h)}},[r]),n.useEffect(()=>{i&&Ee()},[i,r,l,M,$]),n.useEffect(()=>{g(!1)},[r]);const Te=a=>Be(a)?!0:(b.dark("Invalid address!",{position:"bottom-right",type:b.TYPE.ERROR,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!1),De=async a=>{try{const h=await Ye.getVotingPower(a,i,!0);W(h)}catch(h){console.error("\u{1F680} ~ file: Delegate.tsx ~ line 86 ~ getVotingPower ~ err",h)}},Ee=async()=>{let a=await(i==null?void 0:i.balanceOf(r)),h=await(i==null?void 0:i.decimals()),A=await Number(a/Math.pow(10,h)),we=A.toString(),Se=await(i==null?void 0:i.delegates(r)),be=await(i==null?void 0:i.getCurrentVotes(r)),Me=(await Number(be/Math.pow(10,h))).toLocaleString();pe(A),he(we),xe(Se),ge(Me)},X=async a=>{T(!0);const h=Te(a),A=await a;if(console.debug(h),!h){T(!1);return}if(console.debug("balance",$),console.debug("transaction mode",me),$==0){b.dark("No PUSH to Delegate!",{position:"bottom-right",type:b.TYPE.ERROR,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),T(!1);return}te({delegateeAddress:A,epnsToken:i,toast:b,setTxInProgress:T,provider:l,LoaderToast:je})},je=({msg:a,color:h})=>e.jsxs(G,{children:[e.jsx(v,{}),e.jsx(R,{children:a})]});return e.jsx(ce,{children:e.jsx(Z,{alignItems:"stretch",children:e.jsxs(u,{align:"stretch",justify:"flex-start",margin:"0px 15px 15px 15px",children:[(m||!M||!L)&&e.jsx(u,{padding:"20px",children:e.jsx(v,{})}),e.jsx(Z,{margin:"0px 0px 0px 0px",children:e.jsx(Ce,{children:e.jsx(D,{weight:"400",size:"32px",color:t.color,children:"Governance Dashboard"})})}),!m&&M&&L&&e.jsx(u,{margin:"10px 0px 0px 0px",self:"stretch",items:"stretch",children:e.jsxs(z,{align:"stretch",justify:"flex-start",self:"stretch",bg:t.default.secondaryBg,op:"1",children:[e.jsx(k,{bg:"#e20880",children:"Governance Dashboard"}),e.jsxs(B,{children:[e.jsxs(S,{align:"stretch",self:"stretch",children:[e.jsxs(u,{align:"center",self:"center",flex:"initial",padding:"10px",children:[e.jsx(F,{children:e.jsx(H,{children:e.jsx(ne,{seed:r.toLowerCase(),opts:{seed:r.toLowerCase(),size:10,scale:10}})})}),e.jsx(V,{children:C===null?e.jsx(v,{}):C?e.jsx(e.Fragment,{children:C}):e.jsx(e.Fragment,{children:Pe(r,6)})})]}),e.jsxs(u,{align:"flex-start",self:"stretch",padding:"10px",size:"16px",children:[e.jsxs(S,{flex:"initial",padding:"5px",children:[e.jsxs(D,{weight:"500",padding:"0px 8px 0px 0px",color:t.color,children:["$PUSH Balance:"," "]}),e.jsx(U,{bg:"#e20880",color:"#fff",weight:"600",padding:"4px 8px",textTransform:"uppercase",children:M})]}),e.jsxs(S,{flex:"initial",padding:"5px",children:[e.jsxs(D,{weight:"500",padding:"0px 8px 0px 0px",color:t.color,children:["Voting Power:"," "]}),e.jsx(U,{bg:"#35c5f3",color:"#fff",weight:"600",padding:"4px 8px",textTransform:"uppercase",children:L})]}),Y!=="0x0000000000000000000000000000000000000000"&&e.jsxs(S,{flex:"initial",padding:"5px",children:[e.jsx(D,{padding:"0px 8px 0px 0px",children:"Delegated To: "}),e.jsx(D,{weight:"600",children:Y})]})]})]}),w&&e.jsx(u,{bg:"#eeeeeeee",position:"absolute",top:"0",bottom:"0",left:"0",right:"0",children:e.jsxs(u,{align:"stretch",self:"stretch",margin:"0px 20px 40px 20px",children:[e.jsx(D,{color:"#000",weight:"400",children:"Enter delegatee address"}),e.jsx("br",{}),e.jsx(_e,{placeholder:"Enter delegatee address",radius:"4px",padding:"12px",self:"stretch",bg:"#fff",value:I,onChange:async a=>{fe(a.target.value),W(null)}}),K&&I&&e.jsxs(J,{children:["Voting Power: ",K]})]})}),e.jsx(u,{self:"stretch",align:"flex-end",children:e.jsx(S,{children:e.jsxs(Ge,{gap:"s2",display:"flex",flexDirection:"row",children:[!f&&e.jsx(y,{variant:"primary",size:"small",disabled:f,onClick:()=>{w?X(I):O(!0)},children:e.jsx(D,{color:"#fff",weight:"400",children:"Delegate to Others"})}),!w&&!f&&e.jsx(y,{variant:"outline",size:"small",disabled:f,onClick:()=>{X(r)},children:"Delegate to Myself"}),e.jsx(y,{variant:"tertiary",size:"small",onClick:()=>{w?De(I):O(!0)},children:f?e.jsx(_,{children:e.jsx(v,{})}):e.jsx(D,{color:"#fff",weight:"400",children:"Query Voting Power"})}),w&&e.jsx(y,{variant:"tertiary",size:"small",onClick:()=>{O(!1)},children:"Close"})]})})})]})]})})]})})})},ce=c(Re)`
  align-items: center;
  align-self: center;
  background: ${t=>t.theme.default.bg};
  border-radius: ${d.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${d.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${j.MINI_MODULES.DESKTOP.RIGHT} - ${j.MINI_MODULES.DESKTOP.LEFT} -
      ${d.ADJUSTMENTS.PADDING.BIG} - ${d.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${d.ADJUSTMENTS.PADDING.BIG};
  position: relative;
  margin: ${d.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${Q.laptop} {
    margin: ${d.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${d.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${j.MINI_MODULES.TABLET.RIGHT} - ${j.MINI_MODULES.TABLET.LEFT} -
        ${d.ADJUSTMENTS.PADDING.DEFAULT} - ${d.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${Q.mobileM} {
    margin: ${d.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${d.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${j.MINI_MODULES.MOBILE.RIGHT} - ${j.MINI_MODULES.MOBILE.LEFT} -
        ${d.ADJUSTMENTS.PADDING.DEFAULT} - ${d.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`;c(ze)`
  align-items: stretch;
  align-self: stretch;
  background: #fff;
`;let _,G,R,z,k,B,J,U,F,H,V;_=c.span`
  ${t=>t.hideit&&Ie`
      visibility: hidden;
    `};
`,G=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,R=c.div`
  margin: 0px 10px;
`,z=c(u)`
  overflow: hidden;
  min-width: 180px;

  border-radius: 12px;
  border: 1px solid ${t=>t.theme.default.border};

  &:hover {
    opacity: ${t=>t.op?"0.9":t.op};
  }
`,k=c(u)`
  flex: 0;
  align-self: stretch;
  color: #fff;
  top: 0px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: normal;
  font-size: 15px;
  text-align: center;
  padding: 10px 5px;
  right: 0;
  left: 0;
`,B=c(u)`
  padding: 20px 20px;
`,J=c.span`
  // font-weight: bold;
  font-size: 15px;
  letter-spacing: normal;
  align-items: left;
  margin-top: 10px;
`,U=c(D)`
  font-size: 14px;
`,F=c.div`
  position: relative;
  width: 96px;
  height: 96px;
  border-radius: 100%;
  overflow: hidden;
  transform: scale(0.85);
  outline-width: 2px;
  outline-color: rgba(225, 225, 225, 1);
`,H=c.div``,V=c.span`
  margin: 10px 10px;
  padding: 8px 15px;
  height: 16px;
  display: none;
  align-items: baseline;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  border-radius: 15px;
  background: #333;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
`,ee=()=>e.jsx(He,{children:e.jsx(le,{})}),c(Je)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{We as __tla,ee as default};
