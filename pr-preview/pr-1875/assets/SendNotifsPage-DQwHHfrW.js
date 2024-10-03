import{cA as s,gb as t,gc as l,gd as D,gf as u,gp as m,cq as N,gq as T,cK as a,cv as e,gr as h,cF as L,cM as A,cB as f,__tla as g}from"./index-C-lL8nMd.js";import{S as $,__tla as x}from"./SendNotifications-DQEXDM7H.js";import{__tla as p}from"./index-CvEMwSHv.js";import{__tla as O}from"./Tag-CyxMlrvM.js";import{__tla as R}from"./TransitionGroupContext-BzFp7RN1.js";let _,G=Promise.all([(()=>{try{return g}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return R}catch{}})()]).then(async()=>{A.coreContractChain;function M(){u.pageview("/send_notificaiton"),m(),N(),T(n=>n.contracts),T(n=>n.admin),A.coreContractChain;const[r,J]=a.useState(2),[d,y]=a.useState(!0);a.useState(null),a.useState(null);const[o,b]=a.useState(!0);a.useState([]);const[E,I]=a.useState(null),U=()=>I(null);return a.useEffect(()=>{E&&U()},[E]),e.jsx(c,{children:r===2&&d?e.jsxs(e.Fragment,{children:[!o&&e.jsx(h,{replace:!0,to:"/dashboard"}),o&&e.jsx($,{})]}):e.jsx(i,{children:"Channel details are being loaded, please wait\u2026"})})}let c,i,S;c=s(L)`
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
`,i=s.div`
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
`});export{G as __tla,_ as default};
