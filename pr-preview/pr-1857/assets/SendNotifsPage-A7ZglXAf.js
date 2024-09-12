import{e6 as s,eM as t,eN as l,eO as D,eQ as u,e_ as N,dY as m,e$ as T,eg as e,e1 as a,f0 as h,eb as L,ei as _,e7 as f,__tla as $}from"./index-8TAbY26M.js";import{S as x,__tla as O}from"./SendNotifications-91qaMj03.js";import{__tla as p}from"./index-CaahYujy.js";import{__tla as g}from"./Tag-DMcKdt36.js";import{__tla as R}from"./TransitionGroupContext-dj_ffHpn.js";let A,G=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return R}catch{}})()]).then(async()=>{_.coreContractChain;function M(){u.pageview("/send_notificaiton"),N(),m(),T(n=>n.contracts),T(n=>n.admin),_.coreContractChain;const[r,J]=e.useState(2),[d,y]=e.useState(!0);e.useState(null),e.useState(null);const[c,b]=e.useState(!0);e.useState([]);const[E,I]=e.useState(null),U=()=>I(null);return e.useEffect(()=>{E&&U()},[E]),a.jsx(i,{children:r===2&&d?a.jsxs(a.Fragment,{children:[!c&&a.jsx(h,{replace:!0,to:"/dashboard"}),c&&a.jsx(x,{})]}):a.jsx(S,{children:"Channel details are being loaded, please wait\u2026"})})}let i,S,o;i=s(L)`
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
`,A=()=>a.jsx(o,{children:a.jsx(M,{})}),o=s(f)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{G as __tla,A as default};
