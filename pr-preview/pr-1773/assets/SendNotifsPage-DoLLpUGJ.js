import{b6 as s,bL as t,bM as l,bN as D,bP as N,bY as u,aZ as L,bZ as T,bh as e,b2 as a,b_ as h,bb as m,bj as A,b7 as f,__tla as $}from"./index-pmR1DyNh.js";import{S as b,__tla as x}from"./SendNotifications-CO087ifd.js";import{__tla as O}from"./index-uzAz6uKC.js";import{__tla as R}from"./TransitionGroupContext-DioLaQ2F.js";let M,g=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return R}catch{}})()]).then(async()=>{A.coreContractChain;function _(){N.pageview("/send_notificaiton"),u(),L(),T(r=>r.contracts),T(r=>r.admin),A.coreContractChain;const[n,p]=e.useState(2),[I,G]=e.useState(!0);e.useState(null),e.useState(null);const[o,J]=e.useState(!0);e.useState([]);const[E,d]=e.useState(null),U=()=>d(null);return e.useEffect(()=>{E&&U()},[E]),a.jsx(i,{children:n===2&&I?a.jsxs(a.Fragment,{children:[!o&&a.jsx(h,{replace:!0,to:"/channel"}),o&&a.jsx(b,{})]}):a.jsx(S,{children:"Channel details are being loaded, please wait\u2026"})})}let i,S,c;i=s(m)`
  align-items: center;
  align-self: center;
  background: ${n=>n.theme.default.bg};
  border-radius: ${t.ADJUSTMENTS.RADIUS.LARGE} ${t.ADJUSTMENTS.RADIUS.LARGE}
    ${t.ADJUSTMENTS.RADIUS.LARGE} ${t.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${t.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(100% - ${l.MINI_MODULES.DESKTOP.RIGHT} - ${l.MINI_MODULES.DESKTOP.LEFT});
  position: relative;
  margin: ${t.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${D.laptop} {
    margin: ${t.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${D.mobileL} {
    margin: ${t.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${t.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${l.MINI_MODULES.MOBILE.RIGHT} - ${l.MINI_MODULES.MOBILE.LEFT} -
        ${t.ADJUSTMENTS.PADDING.DEFAULT} - ${t.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${t.CONSTANTS.HEADER_HEIGHT}px - ${l.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${t.ADJUSTMENTS.RADIUS.LARGE} ${t.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,S=s.div`
  width: 100%;
  padding: 40px;
  font-size: 1.5em;
  font-weight: 300;
  text-align: center;
  color: ${n=>n.theme.color};
`,M=()=>a.jsx(c,{children:a.jsx(_,{})}),c=s(f)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{g as __tla,M as default};
