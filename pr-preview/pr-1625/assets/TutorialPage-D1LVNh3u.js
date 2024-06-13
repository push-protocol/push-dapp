import{aV as s,aW as e,aX as a,aY as T,aZ as i,bK as I,a_ as M,bF as A,b4 as t,b5 as n,b6 as m,bc as N,bd as u,be as U,b7 as h,gi as $,bj as b,__tla as L}from"./index-CUGv7H9a.js";let E,j=Promise.all([(()=>{try{return L}catch{}})()]).then(async()=>{function S(){const r=I(),l=M(),{run:f}=A(p=>p.userJourney),g=()=>{f===!1&&r($(!0))};return t.jsx(c,{children:t.jsxs(n,{children:[t.jsxs(n,{align:"stretch",justify:"flex-start",margin:"0px 0px 40px 0px",children:[t.jsx(m,{children:t.jsx(i,{weight:"400",size:"32px",color:l.color,children:"Live Walkthrough"})}),t.jsx(i,{color:l.default.secondaryColor,weight:"400",size:"16px",textTransform:"none",textAlign:"center",spacing:"0.03em",margin:"0px 0px",children:"Let's walk you through the core functions of Push (EPNS), the communication protocol of Web3!"})]}),t.jsx(n,{justify:"flex-start",children:t.jsx(x,{children:t.jsxs(o,{onClick:()=>{g()},hover:"#e20880",children:[t.jsx(i,{color:l.color,children:"\u{1F449} Show me everything!"}),t.jsx(N,{size:20,color:"#ddd"})]})})})]})})}let c,o,d,x,D;c=s(u)`
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
    100% - ${a.MINI_MODULES.DESKTOP.RIGHT} - ${a.MINI_MODULES.DESKTOP.LEFT} -
      ${e.ADJUSTMENTS.PADDING.BIG} - ${e.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${e.ADJUSTMENTS.PADDING.BIG};
  position: relative;
  margin: ${e.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${T.laptop} {
    margin: ${e.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${e.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${a.MINI_MODULES.TABLET.RIGHT} - ${a.MINI_MODULES.TABLET.LEFT} -
        ${e.ADJUSTMENTS.PADDING.DEFAULT} - ${e.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${T.mobileM} {
    margin: ${e.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${e.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${a.MINI_MODULES.MOBILE.RIGHT} - ${a.MINI_MODULES.MOBILE.LEFT} -
        ${e.ADJUSTMENTS.PADDING.DEFAULT} - ${e.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`,o=s(U)`
  align-items: stretch;
  align-self: stretch;
`,d=s(h)`
  align-items: stretch;
  align-self: stretch;
`,x=s(h)`
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

    & ${i} {
      font-weight: 400;
      letter-spacing: 0.2em;
      margin-left: 10px;
      flex: 1;
    }

    &:hover {
      & ${i} {
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

    & ${i} {
      line-height: 1.5em;
      margin: 10px;
      color: #000;
      font-size: 1.05em;
    }
  }
`,E=()=>t.jsx(D,{children:t.jsx(S,{})}),D=s(b)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{j as __tla,E as default};
