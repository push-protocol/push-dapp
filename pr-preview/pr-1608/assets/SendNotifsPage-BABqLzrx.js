import{bK as s,bL as t,bM as l,bN as D,c7 as u,cz as N,bQ as m,cu as T,cG as a,bV as e,gS as L,c2 as h,c5 as A,c8 as f,__tla as $}from"./index-CmyWu-jr.js";import{S as x,__tla as O}from"./SendNotifications-CbllD3C6.js";import{__tla as p}from"./index-CQFQFFOt.js";import{__tla as g}from"./Tag-CaomWg_C.js";import{__tla as G}from"./TransitionGroupContext-FKi9d7HL.js";let _,R=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return G}catch{}})()]).then(async()=>{A.coreContractChain;function M(){u.pageview("/send_notificaiton"),N(),m(),T(n=>n.contracts),T(n=>n.admin),A.coreContractChain;const[r,b]=a.useState(2),[d,J]=a.useState(!0);a.useState(null),a.useState(null);const[o,y]=a.useState(!0);a.useState([]);const[E,I]=a.useState(null),U=()=>I(null);return a.useEffect(()=>{E&&U()},[E]),e.jsx(i,{children:r===2&&d?e.jsxs(e.Fragment,{children:[!o&&e.jsx(L,{replace:!0,to:"/dashboard"}),o&&e.jsx(x,{})]}):e.jsx(c,{children:"Channel details are being loaded, please wait\u2026"})})}let i,c,S;i=s(h)`
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
`,c=s.div`
  width: 100%;
  padding: 40px;
  font-size: 1.5em;
  font-weight: 300;
  text-align: center;
  color: ${r=>r.theme.color};
`,_=()=>e.jsx(S,{children:e.jsx(M,{})}),S=s(f)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{R as __tla,_ as default};