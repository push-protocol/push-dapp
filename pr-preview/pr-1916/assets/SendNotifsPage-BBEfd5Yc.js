import{e6 as s,eQ as t,eR as l,eS as E,eU as m,f1 as u,dY as f,f2 as D,ej as e,e1 as a,f3 as h,ea as N,el as T,e7 as L,__tla as $}from"./index-DeSqcabl.js";import{S as p,__tla as x}from"./SendNotifications-CInUrHXz.js";import{__tla as O}from"./index-BI4JHFrK.js";import{__tla as R}from"./Tag-fgdh75ek.js";import{__tla as g}from"./TransitionGroupContext-A4hfhRyz.js";import{__tla as G}from"./useIsFocusVisible-Da8pTpUL.js";import{__tla as J}from"./useEventCallback-BYix1DiG.js";let A,y=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return R}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return J}catch{}})()]).then(async()=>{T.coreContractChain;function M(){m.pageview("/send_notificaiton"),u(),f(),D(n=>n.contracts),D(n=>n.admin),T.coreContractChain;const[r,j]=e.useState(2),[d,b]=e.useState(!0);e.useState(null),e.useState(null);const[c,w]=e.useState(!0);e.useState([]);const[_,I]=e.useState(null),U=()=>I(null);return e.useEffect(()=>{_&&U()},[_]),a.jsx(i,{children:r===2&&d?a.jsxs(a.Fragment,{children:[!c&&a.jsx(h,{replace:!0,to:"/dashboard"}),c&&a.jsx(p,{})]}):a.jsx(S,{children:"Channel details are being loaded, please wait\u2026"})})}let i,S,o;i=s(N)`
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

  @media ${E.laptop} {
    margin: ${t.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${E.mobileL} {
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
`});export{y as __tla,A as default};
