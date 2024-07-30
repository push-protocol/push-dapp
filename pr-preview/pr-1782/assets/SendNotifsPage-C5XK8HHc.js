import{b6 as s,bH as t,bI as l,bJ as _,bL as m,bV as u,aY as h,bW as D,bg as a,b1 as e,bX as L,bb as N,bi as T,b7 as f,__tla as $}from"./index-CZOTTSdB.js";import{S as b,__tla as p}from"./SendNotifications-BQ1uhcLT.js";import{__tla as x}from"./index-CiPN0K-P.js";import{__tla as O}from"./Tag-B5z6MGd7.js";import{__tla as g}from"./TransitionGroupContext-8VnUrgDJ.js";import{__tla as R}from"./slicedToArray-CifvO7b8.js";let A,G=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return R}catch{}})()]).then(async()=>{T.coreContractChain;function M(){m.pageview("/send_notificaiton"),u(),h(),D(n=>n.contracts),D(n=>n.admin),T.coreContractChain;const[r,J]=a.useState(2),[I,y]=a.useState(!0);a.useState(null),a.useState(null);const[c,j]=a.useState(!0);a.useState([]);const[E,d]=a.useState(null),U=()=>d(null);return a.useEffect(()=>{E&&U()},[E]),e.jsx(i,{children:r===2&&I?e.jsxs(e.Fragment,{children:[!c&&e.jsx(L,{replace:!0,to:"/dashboard"}),c&&e.jsx(b,{})]}):e.jsx(S,{children:"Channel details are being loaded, please wait\u2026"})})}let i,S,o;i=s(N)`
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
`,A=()=>e.jsx(o,{children:e.jsx(M,{})}),o=s(f)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{G as __tla,A as default};
