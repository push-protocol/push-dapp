import{e6 as s,eR as t,eS as l,eT as T,eV as m,f2 as u,dY as f,f3 as D,ek as e,e1 as a,f4 as N,eb as h,em as _,e7 as L,__tla as $}from"./index-qPDXv_Sg.js";import{S as x,__tla as O}from"./SendNotifications-Cu3jbfu-.js";import{__tla as p}from"./index--vlTUIDC.js";import{__tla as R}from"./Tag-1aDvuu93.js";import{__tla as g}from"./TransitionGroupContext-BRalqUYv.js";let A,G=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return R}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{_.coreContractChain;function M(){m.pageview("/send_notificaiton"),u(),f(),D(n=>n.contracts),D(n=>n.admin),_.coreContractChain;const[r,J]=e.useState(2),[d,y]=e.useState(!0);e.useState(null),e.useState(null);const[c,b]=e.useState(!0);e.useState([]);const[E,I]=e.useState(null),U=()=>I(null);return e.useEffect(()=>{E&&U()},[E]),a.jsx(i,{children:r===2&&d?a.jsxs(a.Fragment,{children:[!c&&a.jsx(N,{replace:!0,to:"/dashboard"}),c&&a.jsx(x,{})]}):a.jsx(S,{children:"Channel details are being loaded, please wait\u2026"})})}let i,S,o;i=s(h)`
  align-items: center;
  align-self: center;
  background: ${r=>r.theme.default.bg};
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

  @media ${T.laptop} {
    margin: ${t.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${T.mobileL} {
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
  color: ${r=>r.theme.color};
`,A=()=>a.jsx(o,{children:a.jsx(M,{})}),o=s(L)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{G as __tla,A as default};
