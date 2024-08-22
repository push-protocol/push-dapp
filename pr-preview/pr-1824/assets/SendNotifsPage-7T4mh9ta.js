import{b6 as s,bM as t,bN as l,bO as D,bQ as u,b_ as N,aY as m,b$ as T,bg as a,b1 as e,c0 as h,bb as L,bi as _,b7 as f,__tla as $}from"./index-BjKsqWaG.js";import{S as b,__tla as O}from"./SendNotifications-bSrR0qmx.js";import{__tla as x}from"./index-CJ0QHPhX.js";import{__tla as p}from"./Tag-DHXND-Hb.js";import{__tla as g}from"./TransitionGroupContext-eV0q5ksf.js";let A,R=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{_.coreContractChain;function M(){u.pageview("/send_notificaiton"),N(),m(),T(n=>n.contracts),T(n=>n.admin),_.coreContractChain;const[r,G]=a.useState(2),[d,J]=a.useState(!0);a.useState(null),a.useState(null);const[o,y]=a.useState(!0);a.useState([]);const[E,I]=a.useState(null),U=()=>I(null);return a.useEffect(()=>{E&&U()},[E]),e.jsx(i,{children:r===2&&d?e.jsxs(e.Fragment,{children:[!o&&e.jsx(h,{replace:!0,to:"/dashboard"}),o&&e.jsx(b,{})]}):e.jsx(S,{children:"Channel details are being loaded, please wait\u2026"})})}let i,S,c;i=s(L)`
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
  color: ${r=>r.theme.color};
`,A=()=>e.jsx(c,{children:e.jsx(M,{})}),c=s(f)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{R as __tla,A as default};
