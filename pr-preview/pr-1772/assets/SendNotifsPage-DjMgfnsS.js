import{a_ as s,bz as t,bA as l,bB as D,bD as u,bO as m,b9 as N,bP as T,ba as a,aZ as e,bQ as h,b3 as L,bd as A,a$ as f,__tla as $}from"./index-LigZ0onX.js";import{S as x,__tla as O}from"./SendNotifications-BCKVs1HI.js";import{__tla as b}from"./index-BYp8F2M0.js";import{__tla as p}from"./Tag-CDLajZgL.js";import{__tla as R}from"./TransitionGroupContext-Cn4F4Ds2.js";let _,g=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return b}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return R}catch{}})()]).then(async()=>{A.coreContractChain;function M(){u.pageview("/send_notificaiton"),m(),N(),T(n=>n.contracts),T(n=>n.admin),A.coreContractChain;const[r,G]=a.useState(2),[d,J]=a.useState(!0);a.useState(null),a.useState(null);const[c,y]=a.useState(!0);a.useState([]);const[E,I]=a.useState(null),U=()=>I(null);return a.useEffect(()=>{E&&U()},[E]),e.jsx(i,{children:r===2&&d?e.jsxs(e.Fragment,{children:[!c&&e.jsx(h,{replace:!0,to:"/dashboard"}),c&&e.jsx(x,{})]}):e.jsx(S,{children:"Channel details are being loaded, please wait\u2026"})})}let i,S,o;i=s(L)`
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
`});export{g as __tla,_ as default};
