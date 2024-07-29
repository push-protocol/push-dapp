import{a_ as s,bH as t,bI as l,bJ as D,bL as u,bV as L,ba as N,bW as T,bb as a,aZ as e,bX as h,b3 as m,be as A,a$ as $,__tla as f}from"./index-BVCZN7ZR.js";import{S as x,__tla as b}from"./SendNotifications-Db34vtNe.js";import{__tla as O}from"./index-Dn8Sn__p.js";import{__tla as R}from"./TransitionGroupContext-DEoMvch_.js";let M,g=Promise.all([(()=>{try{return f}catch{}})(),(()=>{try{return b}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return R}catch{}})()]).then(async()=>{A.coreContractChain;function I(){u.pageview("/send_notificaiton"),L(),N(),T(r=>r.contracts),T(r=>r.admin),A.coreContractChain;const[n,p]=a.useState(2),[_,G]=a.useState(!0);a.useState(null),a.useState(null);const[o,J]=a.useState(!0);a.useState([]);const[E,d]=a.useState(null),U=()=>d(null);return a.useEffect(()=>{E&&U()},[E]),e.jsx(i,{children:n===2&&_?e.jsxs(e.Fragment,{children:[!o&&e.jsx(h,{replace:!0,to:"/channel"}),o&&e.jsx(x,{})]}):e.jsx(S,{children:"Channel details are being loaded, please wait\u2026"})})}let i,S,c;i=s(m)`
  align-items: center;
  align-self: center;
  background: ${n=>n.theme.default.bg};
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
  color: ${n=>n.theme.color};
`,M=()=>e.jsx(c,{children:e.jsx(I,{})}),c=s($)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{g as __tla,M as default};
