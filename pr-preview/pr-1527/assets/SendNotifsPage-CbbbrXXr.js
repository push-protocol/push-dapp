import{aV as s,aW as t,aX as l,aY as D,bi as u,bK as m,a$ as N,bF as T,bR as a,b4 as e,g2 as h,bd as L,bg as A,bj as f,__tla as $}from"./index-ClXg8t9P.js";import{S as x,__tla as O}from"./SendNotifications-CMwL69IJ.js";import{__tla as g}from"./index-Bk-k66KO.js";import{__tla as p}from"./Tag-BacL_qMr.js";import{__tla as R}from"./TransitionGroupContext-y7WDCz9S.js";let _,G=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return R}catch{}})()]).then(async()=>{A.coreContractChain;function M(){u.pageview("/send_notificaiton"),m(),N(),T(n=>n.contracts),T(n=>n.admin),A.coreContractChain;const[r,b]=a.useState(2),[d,J]=a.useState(!0);a.useState(null),a.useState(null);const[c,j]=a.useState(!0);a.useState([]);const[E,I]=a.useState(null),U=()=>I(null);return a.useEffect(()=>{E&&U()},[E]),e.jsx(i,{children:r===2&&d?e.jsxs(e.Fragment,{children:[!c&&e.jsx(h,{replace:!0,to:"/dashboard"}),c&&e.jsx(x,{})]}):e.jsx(S,{children:"Channel details are being loaded, please wait\u2026"})})}let i,S,o;i=s(L)`
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
`,_=()=>e.jsx(o,{children:e.jsx(M,{})}),o=s(f)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{G as __tla,_ as default};
