import{ef as Z,ei as j,d_ as e,e9 as c,eT as d,eU as w,eV as q,e3 as Ie,eX as Ae,e4 as ve,dX as n,fO as ye,dV as Ne,fW as Ue,fz as Oe,fA as $e,fy as Le,eY as Q,e8 as u,e0 as v,eZ as Pe,eW as D,fX as b,fY as Ce,fZ as _e,d$ as Re,ep as y,e6 as Ge,f0 as ze,eh as ke,ec as Be,f2 as Je,__tla as Fe}from"./index-bDCKxjmH.js";import{C as He,__tla as Ve}from"./ContentLayout-CHJAjlUG.js";import{E as Ye,__tla as Ke}from"./EPNSCoreHelper-BA_MkSkH.js";let ee,We=Promise.all([(()=>{try{return Fe}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return Ke}catch{}})()]).then(async()=>{const o=new Array(4);function te(t){for(let s=0;s<o.length;s++)o[s]=0;for(let s=0;s<t.length;s++)o[s%4]=(o[s%4]<<5)-o[s%4]+t.charCodeAt(s)}function E(){const t=o[0]^o[0]<<11;return o[0]=o[1],o[1]=o[2],o[2]=o[3],o[3]=o[3]^o[3]>>19^t^t>>8,(o[3]>>>0)/(1<<31>>>0)}function N(){const t=Math.floor(E()*360),s=`${E()*60+40}%`,r=`${(E()+E()+E()+E())*25+50}%`;return`hsl(${t},${s},${r})`}function se(t){const s=t,r=t,l=Math.ceil(s/2),g=s-l,p=[];for(let m=0;m<r;m++){const x=[];for(let T=0;T<l;T++)x[T]=Math.floor(E()*2.3);const f=x.slice(0,g);f.reverse(),x.push(...f),p.push(...x)}return p}function re(t){const s={};return s.seed=t.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16),te(s.seed),s.size=t.size||8,s.scale=t.scale||4,s.color=t.color||N(),s.bgcolor=t.bgcolor||N(),s.spotcolor=t.spotcolor||N(),s}function C(t,s){t=re(t||{});const r=se(t.size),l=Math.sqrt(r.length);s.width=s.height=t.size*t.scale;const g=s.getContext("2d");g.fillStyle=t.bgcolor,g.fillRect(0,0,s.width,s.height),g.fillStyle=t.color;for(let p=0;p<r.length;p++)if(r[p]){const m=Math.floor(p/l),x=p%l;g.fillStyle=r[p]==1?t.color:t.spotcolor,g.fillRect(x*t.scale,m*t.scale,t.scale,t.scale)}return s}function oe(t){const s=document.createElement("canvas");return C(t,s),s}const ae={create:oe,render:C};class ie extends Z.Component{constructor(s){super(s)}getOpts(){return{seed:this.props.opts.seed||"foo",color:this.props.opts.color||"#dfe",bgcolor:this.props.opts.bgcolor||"#a71",size:this.props.opts.size||15,scale:this.props.opts.scale||3,spotcolor:this.props.opts.spotcolor||"#000"}}componentDidMount(){this.draw()}componentDidUpdate(s){this.props.seed!==s.seed&&this.draw()}draw(){ae.render({seed:this.props.opts.seed,size:this.props.opts.size,scale:this.props.opts.scale},this.canvas)}render(){return Z.createElement("canvas",{ref:s=>this.canvas=s})}}j.TYPE.ERROR;const ne=async({delegateeAddress:t,epnsToken:s,toast:r,setTxInProgress:l,provider:g,LoaderToast:p})=>{console.debug("delegateeAddress",t);let m;m=s.delegate(t),m.then(async x=>{let f=r.dark(e.jsx(p,{msg:"Waiting for Confirmation...",color:"#35c5f3"}),{position:"bottom-right",autoClose:!1,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});try{await g.waitForTransaction(x.hash),r.update(f,{render:"Transaction Completed!",type:r.TYPE.SUCCESS,autoClose:5e3}),l(!1)}catch(T){r.update(f,{render:"Transaction Failed! ("+T.name+")",type:r.TYPE.ERROR,autoClose:5e3}),l(!1)}}).catch(x=>{r.dark("Transaction Cancelled!",{position:"bottom-right",type:r.TYPE.ERROR,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),l(!1)})},le=()=>{Ae.pageview("/governance");const t=ve(),{web3NameList:s}=n.useContext(ye),{account:r,provider:l,chainId:g}=Ne(),p=g===ke.coreContractChain,[m,x]=n.useState(!0),[f,T]=n.useState(!1),[i,de]=n.useState(null),[O,pe]=n.useState(null),[M,he]=n.useState(null),[S,$]=n.useState(!1),[Y,ge]=n.useState(null),[L,xe]=n.useState(null),[I,fe]=n.useState("0x"),[K,W]=n.useState(null),[Xe,ue]=n.useState(null),me="withgas";Ue(r);const P=s[r];n.useEffect(()=>{if(!p){const a=window.location.origin;window.location.replace(`${a}/#/notavailable`)}}),n.useEffect(()=>{if(console.debug(r),l&&r){let a=l.getSigner(r);ue(a);const h=new Oe($e.epnsToken,Le.epnsToken,a);de(h)}},[r]),n.useEffect(()=>{i&&Ee()},[i,r,l,M,O]),n.useEffect(()=>{x(!1)},[r]);const Te=a=>Be(a)?!0:(j.dark("Invalid address!",{position:"bottom-right",type:j.TYPE.ERROR,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!1),De=async a=>{try{const h=await Ye.getVotingPower(a,i,!0);W(h)}catch(h){console.error("\u{1F680} ~ file: Delegate.tsx ~ line 86 ~ getVotingPower ~ err",h)}},Ee=async()=>{let a=await(i==null?void 0:i.balanceOf(r)),h=await(i==null?void 0:i.decimals()),A=await Number(a/Math.pow(10,h)),we=A.toString(),Se=await(i==null?void 0:i.delegates(r)),be=await(i==null?void 0:i.getCurrentVotes(r)),Me=(await Number(be/Math.pow(10,h))).toLocaleString();pe(A),he(we),ge(Se),xe(Me)},X=async a=>{T(!0);const h=Te(a),A=await a;if(console.debug(h),!h){T(!1);return}if(console.debug("balance",O),console.debug("transaction mode",me),O==0){j.dark("No PUSH to Delegate!",{position:"bottom-right",type:j.TYPE.ERROR,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),T(!1);return}{ne({delegateeAddress:A,epnsToken:i,toast:j,setTxInProgress:T,provider:l,LoaderToast:je});return}},je=({msg:a,color:h})=>e.jsxs(R,{children:[e.jsx(v,{}),e.jsx(G,{children:a})]});return e.jsx(ce,{children:e.jsx(Q,{alignItems:"stretch",children:e.jsxs(u,{align:"stretch",justify:"flex-start",margin:"0px 15px 15px 15px",children:[(m||!M||!L)&&e.jsx(u,{padding:"20px",children:e.jsx(v,{})}),e.jsx(Q,{margin:"0px 0px 0px 0px",children:e.jsx(Pe,{children:e.jsx(D,{weight:"400",size:"32px",color:t.color,children:"Governance Dashboard"})})}),!m&&M&&L&&e.jsx(u,{margin:"10px 0px 0px 0px",self:"stretch",items:"stretch",children:e.jsxs(z,{align:"stretch",justify:"flex-start",self:"stretch",bg:t.default.secondaryBg,op:"1",children:[e.jsx(k,{bg:"#e20880",children:"Governance Dashboard"}),e.jsxs(B,{children:[e.jsxs(b,{align:"stretch",self:"stretch",children:[e.jsxs(u,{align:"center",self:"center",flex:"initial",padding:"10px",children:[e.jsx(F,{children:e.jsx(H,{children:e.jsx(ie,{seed:r.toLowerCase(),opts:{seed:r.toLowerCase(),size:10,scale:10}})})}),e.jsx(V,{children:P===null?e.jsx(v,{}):P?e.jsx(e.Fragment,{children:P}):e.jsx(e.Fragment,{children:Ce(r,6)})})]}),e.jsxs(u,{align:"flex-start",self:"stretch",padding:"10px",size:"16px",children:[e.jsxs(b,{flex:"initial",padding:"5px",children:[e.jsxs(D,{weight:"500",padding:"0px 8px 0px 0px",color:t.color,children:["$PUSH Balance:"," "]}),e.jsx(U,{bg:"#e20880",color:"#fff",weight:"600",padding:"4px 8px",textTransform:"uppercase",children:M})]}),e.jsxs(b,{flex:"initial",padding:"5px",children:[e.jsxs(D,{weight:"500",padding:"0px 8px 0px 0px",color:t.color,children:["Voting Power:"," "]}),e.jsx(U,{bg:"#35c5f3",color:"#fff",weight:"600",padding:"4px 8px",textTransform:"uppercase",children:L})]}),Y!=="0x0000000000000000000000000000000000000000"&&e.jsxs(b,{flex:"initial",padding:"5px",children:[e.jsx(D,{padding:"0px 8px 0px 0px",children:"Delegated To: "}),e.jsx(D,{weight:"600",children:Y})]})]})]}),S&&e.jsx(u,{bg:"#eeeeeeee",position:"absolute",top:"0",bottom:"0",left:"0",right:"0",children:e.jsxs(u,{align:"stretch",self:"stretch",margin:"0px 20px 40px 20px",children:[e.jsx(D,{color:"#000",weight:"400",children:"Enter delegatee address"}),e.jsx("br",{}),e.jsx(_e,{placeholder:"Enter delegatee address",radius:"4px",padding:"12px",self:"stretch",bg:"#fff",value:I,onChange:async a=>{fe(a.target.value),W(null)}}),K&&I&&e.jsxs(J,{children:["Voting Power: ",K]})]})}),e.jsx(u,{self:"stretch",align:"flex-end",children:e.jsx(b,{children:e.jsxs(Re,{gap:"s2",display:"flex",flexDirection:"row",children:[!f&&e.jsx(y,{variant:"primary",size:"small",disabled:f,onClick:()=>{S?X(I):$(!0)},children:e.jsx(D,{color:"#fff",weight:"400",children:"Delegate to Others"})}),!S&&!f&&e.jsx(y,{variant:"outline",size:"small",disabled:f,onClick:()=>{X(r)},children:"Delegate to Myself"}),e.jsx(y,{variant:"tertiary",size:"small",onClick:()=>{S?De(I):$(!0)},children:f?e.jsx(_,{children:e.jsx(v,{})}):e.jsx(D,{color:"#fff",weight:"400",children:"Query Voting Power"})}),S&&e.jsx(y,{variant:"tertiary",size:"small",onClick:()=>{$(!1)},children:"Close"})]})})})]})]})})]})})})},ce=c(Ge)`
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
    100% - ${w.MINI_MODULES.DESKTOP.RIGHT} - ${w.MINI_MODULES.DESKTOP.LEFT} -
      ${d.ADJUSTMENTS.PADDING.BIG} - ${d.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${d.ADJUSTMENTS.PADDING.BIG};
  position: relative;
  margin: ${d.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${q.laptop} {
    margin: ${d.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${d.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${w.MINI_MODULES.TABLET.RIGHT} - ${w.MINI_MODULES.TABLET.LEFT} -
        ${d.ADJUSTMENTS.PADDING.DEFAULT} - ${d.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${q.mobileM} {
    margin: ${d.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${d.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${w.MINI_MODULES.MOBILE.RIGHT} - ${w.MINI_MODULES.MOBILE.LEFT} -
        ${d.ADJUSTMENTS.PADDING.DEFAULT} - ${d.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`;c(ze)`
  align-items: stretch;
  align-self: stretch;
  background: #fff;
`;let _,R,G,z,k,B,J,U,F,H,V;_=c.span`
  ${t=>t.hideit&&Ie`
      visibility: hidden;
    `};
`,R=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,G=c.div`
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
