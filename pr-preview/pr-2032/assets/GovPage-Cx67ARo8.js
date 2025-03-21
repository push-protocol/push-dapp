import{ef as X,e9 as o,eT as l,eU as j,eV as W,e3 as Te,eX as we,e4 as je,dX as a,fD as me,dV as Me,fE as be,fz as q,fA as Ie,fy as Ae,d_ as e,eY as Q,e8 as h,e0 as P,eZ as Ne,eW as g,fF as M,fG as ye,fH as $e,d$ as Ue,ep as y,e6 as ve,f0 as Le,eh as _e,ec as Oe,ei as S,f2 as Pe,__tla as Ge}from"./index-BybhKjTN.js";import{C as ze,__tla as Ce}from"./ContentLayout-BKFRVQcj.js";import{E as Re,__tla as ke}from"./EPNSCoreHelper-WCY88_zZ.js";let Z,Je=Promise.all([(()=>{try{return Ge}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return ke}catch{}})()]).then(async()=>{const i=new Array(4);function ee(t){for(let s=0;s<i.length;s++)i[s]=0;for(let s=0;s<t.length;s++)i[s%4]=(i[s%4]<<5)-i[s%4]+t.charCodeAt(s)}function T(){const t=i[0]^i[0]<<11;return i[0]=i[1],i[1]=i[2],i[2]=i[3],i[3]=i[3]^i[3]>>19^t^t>>8,(i[3]>>>0)/(1<<31>>>0)}function $(){const t=Math.floor(T()*360),s=`${T()*60+40}%`,r=`${(T()+T()+T()+T())*25+50}%`;return`hsl(${t},${s},${r})`}function te(t){const s=t,r=t,p=Math.ceil(s/2),f=s-p,x=[];for(let w=0;w<r;w++){const u=[];for(let E=0;E<p;E++)u[E]=Math.floor(T()*2.3);const D=u.slice(0,f);D.reverse(),u.push(...D),x.push(...u)}return x}function se(t){const s={};return s.seed=t.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16),ee(s.seed),s.size=t.size||8,s.scale=t.scale||4,s.color=t.color||$(),s.bgcolor=t.bgcolor||$(),s.spotcolor=t.spotcolor||$(),s}function G(t,s){t=se(t||{});const r=te(t.size),p=Math.sqrt(r.length);s.width=s.height=t.size*t.scale;const f=s.getContext("2d");f.fillStyle=t.bgcolor,f.fillRect(0,0,s.width,s.height),f.fillStyle=t.color;for(let x=0;x<r.length;x++)if(r[x]){const w=Math.floor(x/p),u=x%p;f.fillStyle=r[x]==1?t.color:t.spotcolor,f.fillRect(u*t.scale,w*t.scale,t.scale,t.scale)}return s}function re(t){const s=document.createElement("canvas");return G(t,s),s}const ie={create:re,render:G};class ne extends X.Component{constructor(s){super(s)}getOpts(){return{seed:this.props.opts.seed||"foo",color:this.props.opts.color||"#dfe",bgcolor:this.props.opts.bgcolor||"#a71",size:this.props.opts.size||15,scale:this.props.opts.scale||3,spotcolor:this.props.opts.spotcolor||"#000"}}componentDidMount(){this.draw()}componentDidUpdate(s){this.props.seed!==s.seed&&this.draw()}draw(){ie.render({seed:this.props.opts.seed,size:this.props.opts.size,scale:this.props.opts.scale},this.canvas)}render(){return X.createElement("canvas",{ref:s=>this.canvas=s})}}const ae=()=>{we.pageview("/governance");const t=je(),{web3NameList:s}=a.useContext(me),{account:r,provider:p,chainId:f}=Me(),x=f===_e.coreContractChain,[w,u]=a.useState(!0),[D,E]=a.useState(!1),[n,ce]=a.useState(null),[de,pe]=a.useState(null),[b,xe]=a.useState(null),[m,v]=a.useState(!1),[V,he]=a.useState(null),[L,fe]=a.useState(null),[I,ge]=a.useState("0x"),[H,Y]=a.useState(null);be(r);const _=s[r];a.useEffect(()=>{if(!x){const d=window.location.origin;window.location.replace(`${d}/#/notavailable`)}}),a.useEffect(()=>{if(console.debug(r),p&&r){let d=p.getSigner(r);const c=new q(Ie.epnsToken,Ae.epnsToken,d);ce(c)}},[r]),a.useEffect(()=>{n&&De()},[n,r,p,b,de]),a.useEffect(()=>{u(!1)},[r]);const ue=async d=>{try{const c=await Re.getVotingPower(d,n,!0);Y(c)}catch(c){console.error("\u{1F680} ~ file: Delegate.tsx ~ line 86 ~ getVotingPower ~ err",c)}},De=async()=>{let d=await(n==null?void 0:n.balanceOf(r)),c=await(n==null?void 0:n.decimals()),A=await Number(d/Math.pow(10,c)),O=A.toString(),N=await(n==null?void 0:n.delegates(r)),Ee=await(n==null?void 0:n.getCurrentVotes(r)),Se=(await Number(Ee/Math.pow(10,c))).toLocaleString();pe(A),xe(O),he(N),fe(Se)},K=async d=>{try{if(E(!0),!Oe(d)){S.dark("Invalid address!",{type:S.TYPE.ERROR}),E(!1);return}if(!p){S.dark("No provider found!",{type:S.TYPE.ERROR}),E(!1);return}const c="0xf418588522d5dd018b425e472991e52ebbeeeeee",A=["function delegate(address delegatee) external"],O=p.getSigner(r),N=await new q(c,A,O).delegate(d);await N.wait(),console.log("\u2705 Transaction Mined:",N.hash),S.dark("Transaction Completed!",{type:S.TYPE.SUCCESS})}catch(c){console.error("Error in delegateAction:",c),S.dark(`Error: ${c.message||"Transaction failed"}`,{type:S.TYPE.ERROR})}finally{E(!1)}};return e.jsx(oe,{children:e.jsx(Q,{alignItems:"stretch",children:e.jsxs(h,{align:"stretch",justify:"flex-start",margin:"0px 15px 15px 15px",children:[(w||!b||!L)&&e.jsx(h,{padding:"20px",children:e.jsx(P,{})}),e.jsx(Q,{margin:"0px 0px 0px 0px",children:e.jsx(Ne,{children:e.jsx(g,{weight:"400",size:"32px",color:t.color,children:"Governance Dashboard"})})}),!w&&b&&L&&e.jsx(h,{margin:"10px 0px 0px 0px",self:"stretch",items:"stretch",children:e.jsxs(z,{align:"stretch",justify:"flex-start",self:"stretch",bg:t.default.secondaryBg,op:"1",children:[e.jsx(C,{bg:"#e20880",children:"Governance Dashboard"}),e.jsxs(R,{children:[e.jsxs(M,{align:"stretch",self:"stretch",children:[e.jsxs(h,{align:"center",self:"center",flex:"initial",padding:"10px",children:[e.jsx(J,{children:e.jsx(B,{children:e.jsx(ne,{seed:r.toLowerCase(),opts:{seed:r.toLowerCase(),size:10,scale:10}})})}),e.jsx(F,{children:_===null?e.jsx(P,{}):_?e.jsx(e.Fragment,{children:_}):e.jsx(e.Fragment,{children:ye(r,6)})})]}),e.jsxs(h,{align:"flex-start",self:"stretch",padding:"10px",size:"16px",children:[e.jsxs(M,{flex:"initial",padding:"5px",children:[e.jsxs(g,{weight:"500",padding:"0px 8px 0px 0px",color:t.color,children:["$PUSH Balance:"," "]}),e.jsx(U,{bg:"#e20880",color:"#fff",weight:"600",padding:"4px 8px",textTransform:"uppercase",children:b})]}),e.jsxs(M,{flex:"initial",padding:"5px",children:[e.jsxs(g,{weight:"500",padding:"0px 8px 0px 0px",color:t.color,children:["Voting Power:"," "]}),e.jsx(U,{bg:"#35c5f3",color:"#fff",weight:"600",padding:"4px 8px",textTransform:"uppercase",children:L})]}),V!=="0x0000000000000000000000000000000000000000"&&e.jsxs(M,{flex:"initial",padding:"5px",children:[e.jsx(g,{padding:"0px 8px 0px 0px",children:"Delegated To: "}),e.jsx(g,{weight:"600",children:V})]})]})]}),m&&e.jsx(h,{bg:"#eeeeeeee",position:"absolute",top:"0",bottom:"0",left:"0",right:"0",children:e.jsxs(h,{align:"stretch",self:"stretch",margin:"0px 20px 40px 20px",children:[e.jsx(g,{color:"#000",weight:"400",children:"Enter delegatee address"}),e.jsx("br",{}),e.jsx($e,{placeholder:"Enter delegatee address",radius:"4px",padding:"12px",self:"stretch",bg:"#fff",value:I,onChange:async d=>{ge(d.target.value),Y(null)}}),H&&I&&e.jsxs(k,{children:["Voting Power: ",H]})]})}),e.jsx(h,{self:"stretch",align:"flex-end",children:e.jsx(M,{children:e.jsxs(Ue,{gap:"s2",display:"flex",flexDirection:"row",children:[!D&&e.jsx(y,{variant:"primary",size:"small",disabled:D,onClick:()=>{m?K(I):v(!0)},children:e.jsx(g,{color:"#fff",weight:"400",children:"Delegate to Others"})}),!m&&!D&&e.jsx(y,{variant:"outline",size:"small",disabled:D,onClick:()=>{K(r)},children:"Delegate to Myself"}),e.jsx(y,{variant:"tertiary",size:"small",onClick:()=>{m?ue(I):v(!0)},children:D?e.jsx(le,{children:e.jsx(P,{})}):e.jsx(g,{color:"#fff",weight:"400",children:"Query Voting Power"})}),m&&e.jsx(y,{variant:"tertiary",size:"small",onClick:()=>{v(!1)},children:"Close"})]})})})]})]})})]})})})},oe=o(ve)`
  align-items: center;
  align-self: center;
  background: ${t=>t.theme.default.bg};
  border-radius: ${l.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${l.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${j.MINI_MODULES.DESKTOP.RIGHT} - ${j.MINI_MODULES.DESKTOP.LEFT} -
      ${l.ADJUSTMENTS.PADDING.BIG} - ${l.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${l.ADJUSTMENTS.PADDING.BIG};
  position: relative;
  margin: ${l.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${W.laptop} {
    margin: ${l.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${l.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${j.MINI_MODULES.TABLET.RIGHT} - ${j.MINI_MODULES.TABLET.LEFT} -
        ${l.ADJUSTMENTS.PADDING.DEFAULT} - ${l.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${W.mobileM} {
    margin: ${l.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${l.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${j.MINI_MODULES.MOBILE.RIGHT} - ${j.MINI_MODULES.MOBILE.LEFT} -
        ${l.ADJUSTMENTS.PADDING.DEFAULT} - ${l.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`;o(Le)`
  align-items: stretch;
  align-self: stretch;
  background: #fff;
`;const le=o.span`
  ${t=>t.hideit&&Te`
      visibility: hidden;
    `};
`;o.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,o.div`
  margin: 0px 10px;
`;let z,C,R,k,U,J,B,F;z=o(h)`
  overflow: hidden;
  min-width: 180px;

  border-radius: 12px;
  border: 1px solid ${t=>t.theme.default.border};

  &:hover {
    opacity: ${t=>t.op?"0.9":t.op};
  }
`,C=o(h)`
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
`,R=o(h)`
  padding: 20px 20px;
`,k=o.span`
  // font-weight: bold;
  font-size: 15px;
  letter-spacing: normal;
  align-items: left;
  margin-top: 10px;
`,U=o(g)`
  font-size: 14px;
`,J=o.div`
  position: relative;
  width: 96px;
  height: 96px;
  border-radius: 100%;
  overflow: hidden;
  transform: scale(0.85);
  outline-width: 2px;
  outline-color: rgba(225, 225, 225, 1);
`,B=o.div``,F=o.span`
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
`,Z=()=>e.jsx(ze,{children:e.jsx(ae,{})}),o(Pe)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{Je as __tla,Z as default};
