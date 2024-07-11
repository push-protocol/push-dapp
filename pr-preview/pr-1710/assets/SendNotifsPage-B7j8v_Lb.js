import{q as s,c$ as t,d0 as l,d1 as _,d3 as m,dd as u,x as h,de as D,R as a,m as e,df as N,n as f,z as T,S as L,__tla as $}from"./index-DVrWTDQT.js";import{S as x,__tla as p}from"./SendNotifications-C6UW2Eq4.js";import{__tla as O}from"./index-Bh9TYiT8.js";import{__tla as R}from"./Tag-BWW3iseB.js";import{__tla as g}from"./TransitionGroupContext-u5tq2e5X.js";import{__tla as G}from"./slicedToArray-zr8-PhwI.js";let d,J=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return R}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return G}catch{}})()]).then(async()=>{T.coreContractChain;function A(){m.pageview("/send_notificaiton"),u(),h(),D(n=>n.contracts),D(n=>n.admin),T.coreContractChain;const[r,y]=a.useState(2),[M,b]=a.useState(!0);a.useState(null),a.useState(null);const[o,j]=a.useState(!0);a.useState([]);const[E,I]=a.useState(null),U=()=>I(null);return a.useEffect(()=>{E&&U()},[E]),e.jsx(i,{children:r===2&&M?e.jsxs(e.Fragment,{children:[!o&&e.jsx(N,{replace:!0,to:"/dashboard"}),o&&e.jsx(x,{})]}):e.jsx(S,{children:"Channel details are being loaded, please wait\u2026"})})}let i,S,c;i=s(f)`
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

  @media ${_.laptop} {
    margin: ${t.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${_.mobileL} {
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
`,d=()=>e.jsx(c,{children:e.jsx(A,{})}),c=s(L)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{J as __tla,d as default};
