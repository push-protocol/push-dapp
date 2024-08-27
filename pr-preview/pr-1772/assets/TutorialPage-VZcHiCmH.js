import{e6 as a,eM as e,eN as i,eO as T,eP as s,e_ as M,e9 as I,e$ as A,e1 as t,eR as n,eS as N,eU as m,eb as u,eV as U,ed as h,fl as $,e7 as L,__tla as b}from"./index-PY_7T9Gu.js";let S,G=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function f(){const r=M(),l=I(),{run:E}=A(p=>p.userJourney),g=()=>{E===!1&&r($(!0))};return t.jsx(c,{children:t.jsxs(n,{children:[t.jsxs(n,{align:"stretch",justify:"flex-start",margin:"0px 0px 40px 0px",children:[t.jsx(N,{children:t.jsx(s,{weight:"400",size:"32px",color:l.color,children:"Live Walkthrough"})}),t.jsx(s,{color:l.default.secondaryColor,weight:"400",size:"16px",textTransform:"none",textAlign:"center",spacing:"normal",margin:"0px 0px",children:"Let's walk you through the core functions of Push (EPNS), the communication protocol of Web3!"})]}),t.jsx(n,{justify:"flex-start",children:t.jsx(x,{children:t.jsxs(o,{onClick:()=>{g()},hover:"#e20880",children:[t.jsx(s,{color:l.color,children:"\u{1F449} Show me everything!"}),t.jsx(m,{size:20,color:"#ddd"})]})})})]})})}let c,o,d,x,D;c=a(u)`
  align-items: center;
  align-self: center;
  background: ${r=>r.theme.default.bg};
  border-radius: ${e.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${e.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${i.MINI_MODULES.DESKTOP.RIGHT} - ${i.MINI_MODULES.DESKTOP.LEFT} -
      ${e.ADJUSTMENTS.PADDING.BIG} - ${e.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${e.ADJUSTMENTS.PADDING.BIG};
  position: relative;
  margin: ${e.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${T.laptop} {
    margin: ${e.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${e.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${i.MINI_MODULES.TABLET.RIGHT} - ${i.MINI_MODULES.TABLET.LEFT} -
        ${e.ADJUSTMENTS.PADDING.DEFAULT} - ${e.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${T.mobileM} {
    margin: ${e.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${e.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${i.MINI_MODULES.MOBILE.RIGHT} - ${i.MINI_MODULES.MOBILE.LEFT} -
        ${e.ADJUSTMENTS.PADDING.DEFAULT} - ${e.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`,o=a(U)`
  align-items: stretch;
  align-self: stretch;
`,d=a(h)`
  align-items: stretch;
  align-self: stretch;
`,x=a(h)`
  align-items: stretch;
  align-self: stretch;
  flex: auto;
  margin: 15px 0px;
  border: 1px solid ${r=>r.theme.qnaBgBorder};
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.2);
  overflow: hidden;

  & ${o} {
    background: ${r=>r.theme.qnaBg};
    justify-content: flex-start;
    text-transform: uppercase;

    & ${s} {
      font-weight: 400;
      letter-spacing: normal;
      margin-left: 10px;
      flex: 1;
    }

    &:hover {
      & ${s} {
        color: #fff;
      }
    }
  }

  & ${d} {
    border: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    align-items: flex-start;
    background: #fff;

    & ${s} {
      line-height: 1.5em;
      margin: 10px;
      color: #000;
      font-size: 1.05em;
    }
  }
`,S=()=>t.jsx(D,{children:t.jsx(f,{})}),D=a(L)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{G as __tla,S as default};
