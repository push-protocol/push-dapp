import{e7 as s,eS as t,eT as l,eU as T,eW as u,f3 as f,dZ as m,f4 as D,el as e,e2 as a,f5 as N,ec as h,en as _,e8 as L,__tla as $}from"./index-DSj8kGdz.js";import{S as x,__tla as O}from"./SendNotifications-Cb0OTMSK.js";import{__tla as p}from"./index-BjhUl96j.js";import{__tla as R}from"./Tag-DeGPPbw0.js";import{__tla as g}from"./TransitionGroupContext-Dg1Chav8.js";let A,G=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return R}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{_.coreContractChain;function M(){u.pageview("/send_notificaiton"),f(),m(),D(n=>n.contracts),D(n=>n.admin),_.coreContractChain;const[r,J]=e.useState(2),[d,y]=e.useState(!0);e.useState(null),e.useState(null);const[o,j]=e.useState(!0);e.useState([]);const[E,I]=e.useState(null),U=()=>I(null);return e.useEffect(()=>{E&&U()},[E]),a.jsx(i,{children:r===2&&d?a.jsxs(a.Fragment,{children:[!o&&a.jsx(N,{replace:!0,to:"/dashboard"}),o&&a.jsx(x,{})]}):a.jsx(S,{children:"Channel details are being loaded, please wait\u2026"})})}let i,S,c;i=s(h)`
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
`,A=()=>a.jsx(c,{children:a.jsx(M,{})}),c=s(L)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{G as __tla,A as default};
