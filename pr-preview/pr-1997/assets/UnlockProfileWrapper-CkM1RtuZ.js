import{g2 as q,e9 as d,g3 as J,eP as O,g4 as C,g5 as x,eS as h,eU as m,g6 as Q,e4 as e2,dX as c,g7 as t2,f3 as o2,dV as n2,g8 as i2,g9 as l2,d_ as t,f8 as a2,ga as g,d$ as r2,el as _,gb as s2,fn as d2,gc as c2,fo as p2,__tla as x2}from"./index-DEzdR-F1.js";let H,P,v,B,h2=Promise.all([(()=>{try{return x2}catch{}})()]).then(async()=>{let $,E,D,I,M;$=e=>{const n=D(e),o=localStorage.getItem(n);return E(o)?o:null},E=e=>{if(!e)return!1;const n=/-----BEGIN PGP PUBLIC KEY BLOCK-----[\s\S]*-----END PGP PUBLIC KEY BLOCK-----/,o=/-----BEGIN PGP PRIVATE KEY BLOCK-----[\s\S]*-----END PGP PRIVATE KEY BLOCK-----/;return n.test(e)||o.test(e)},D=e=>`push-user-${q({account:e})}-pgp`,I="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='unlock%201'%3e%3cg%20id='Unlock'%3e%3cpath%20id='Vector'%20d='M31.5%2043.8126H16.5C12.3578%2043.8126%209%2040.4548%209%2036.3126V21.3126C9%2019.2416%2010.679%2017.5626%2012.75%2017.5626H35.25C37.321%2017.5626%2039%2019.2416%2039%2021.3126V36.3126C39%2040.4548%2035.6422%2043.8126%2031.5%2043.8126Z'%20stroke='%23D53893'%20stroke-width='2.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_2'%20d='M24%2035.2895C24%2034.0068%2024.6085%2032.7307%2025.7437%2032.1334C26.9366%2031.5058%2027.75%2030.2542%2027.75%2028.8126C27.75%2026.7416%2026.071%2025.0626%2024%2025.0626C21.929%2025.0626%2020.25%2026.7416%2020.25%2028.8126C20.25%2030.2542%2021.0634%2031.5058%2022.2563%2032.1334C23.3915%2032.7307%2024%2034.0068%2024%2035.2895ZM24%2035.2895V36.3126'%20stroke='%23D53893'%20stroke-width='2.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_3'%20d='M16.5%2016.6873V11.6873C16.5%207.5451%2019.8578%204.18726%2024%204.18726C28.1422%204.18726%2031.5%207.5451%2031.5%2011.6873V16.6873'%20stroke='%23D53893'%20stroke-width='2.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",M="data:image/svg+xml,%3csvg%20width='38'%20height='33'%20viewBox='0%200%2038%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M34.5%206H4.5C4.10218%206%203.72064%205.84196%203.43934%205.56066C3.15804%205.27936%203%204.89782%203%204.5C3%204.10218%203.15804%203.72064%203.43934%203.43934C3.72064%203.15804%204.10218%203%204.5%203H30C30.3978%203%2030.7794%202.84196%2031.0607%202.56066C31.342%202.27936%2031.5%201.89782%2031.5%201.5C31.5%201.10218%2031.342%200.720645%2031.0607%200.43934C30.7794%200.158036%2030.3978%200%2030%200H4.5C3.30653%200%202.16193%200.474106%201.31802%201.31802C0.474106%202.16193%200%203.30653%200%204.5V28.5C0%2029.6935%200.474106%2030.8381%201.31802%2031.682C2.16193%2032.5259%203.30653%2033%204.5%2033H34.5C35.2957%2033%2036.0587%2032.6839%2036.6213%2032.1213C37.1839%2031.5587%2037.5%2030.7956%2037.5%2030V9C37.5%208.20435%2037.1839%207.44129%2036.6213%206.87868C36.0587%206.31607%2035.2957%206%2034.5%206ZM34.5%2030H4.5C4.10218%2030%203.72064%2029.842%203.43934%2029.5607C3.15804%2029.2794%203%2028.8978%203%2028.5V8.74312C3.48164%208.91386%203.98899%209.00074%204.5%209H34.5V30ZM25.5%2018.75C25.5%2018.305%2025.632%2017.87%2025.8792%2017.5C26.1264%2017.13%2026.4778%2016.8416%2026.889%2016.6713C27.3001%2016.501%2027.7525%2016.4564%2028.189%2016.5432C28.6254%2016.63%2029.0263%2016.8443%2029.341%2017.159C29.6557%2017.4737%2029.87%2017.8746%2029.9568%2018.311C30.0436%2018.7475%2029.999%2019.1999%2029.8287%2019.611C29.6584%2020.0222%2029.37%2020.3736%2029%2020.6208C28.63%2020.868%2028.195%2021%2027.75%2021C27.1533%2021%2026.581%2020.7629%2026.159%2020.341C25.7371%2019.919%2025.5%2019.3467%2025.5%2018.75Z'%20fill='%23D53A94'/%3e%3c/svg%3e",B=e=>{const n="Error decrypting PGP private key ...swiching to Guest mode";return e==null?void 0:e.errors.some(o=>o.type==="ERROR"&&o.message===n)},v=(e=>(e.BOTTOM_BAR="bottombar",e.MODAL="modal",e))(v||{});const f=({InnerComponentProps:e,onClose:n})=>{const{type:o,description:p}=e,l=e2(),{handleConnectWalletAndEnableProfile:b,initializePushSDK:u}=c.useContext(t2);o2(r=>r.user);const{account:w,wallet:i,connect:y}=n2(),[j,T]=c.useState(!1),[s,N]=c.useState({status:"connectwallet",title:"Connect Wallet",body:"Sign with wallet to continue."}),Z=r=>{T(r.target.checked)},Y=()=>{y()},F=c.useCallback(async()=>{const r=await b({remember:j,wallet:i});B(r)&&n&&n()},[i,j]);c.useEffect(()=>{var r;((r=i==null?void 0:i.accounts)==null?void 0:r.length)>0&&N({status:"unlockprofile",title:"Unlock Profile",body:p||"Unlock your profile to read and send messages"})},[i]);const a=i2(parseInt(l2.tablet)),[k,X]=c.useState(!1);return c.useEffect(()=>{var r;(r=i==null?void 0:i.accounts)!=null&&r.length&&$(w)&&(X(!0),u(i))},[w]),t.jsxs(K,{type:o,children:[t.jsxs(L,{type:o,children:[t.jsxs(x,{flex:"none",gap:"12px",flexDirection:o==="modal"||a?"column":"row",children:[t.jsx(a2,{width:"38px",height:"35px",src:s.status==="connectwallet"?M:I,alt:"Unlock Logo",zIndex:1}),t.jsx(h,{alignItems:o==="modal"||a?"center":"baseline",children:k?t.jsxs(z,{children:[t.jsx(g,{height:"24px",width:"100%",margin:"0 0 8px 0",borderRadius:"4px"}),t.jsx(g,{height:"16px",width:"100%",margin:"0 0 8px 0",borderRadius:"4px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(m,{fontSize:o==="modal"||a?"20px":"24px",fontWeight:"500",lineHeight:"28.8px",color:l.default.color,children:s.title}),t.jsx(m,{fontSize:o==="modal"||a?"14px":"18px",fontWeight:"400",lineHeight:"22.4px",color:l.default.secondaryColor,children:s.body})]})})]}),t.jsxs(h,{flex:"none",gap:o==="modal"||a?"16px":"8px",flexDirection:o==="modal"||a?"row":"column",children:[t.jsxs(x,{flex:"none",flexDirection:o==="modal"||a?"column":"row",children:[t.jsx(S,{background:C["primary-500"],color:l.btn.primaryColor,children:"1"}),t.jsx(W,{activeState:s.status,theme:l,type:o}),t.jsx(S,{background:s.status!=="connectwallet"?C["primary-500"]:l.btn.disabledBg,color:s.status!=="connectwallet"?l.btn.primaryColor:l.btn.disabledColor,children:"2"})]}),t.jsx(x,{gap:"16px",flex:"none",alignItems:"baseline",flexDirection:o==="modal"||a?"column":"row",children:k?t.jsxs(G,{width:"100%",flexDirection:o==="modal"||a?"column":"row",children:[t.jsx(g,{height:"40px",width:"150px"}),t.jsx(g,{height:"40px",width:"150px"})]}):t.jsxs(r2,{display:"flex",flexDirection:o==="modal"||a?"column":"row",gap:"spacing-sm",children:[t.jsx(_,{disabled:s.status!=="connectwallet"&&!0,variant:"primary",onClick:()=>Y(),children:"Connect Wallet"}),t.jsx(_,{disabled:s.status==="connectwallet"&&!0,onClick:F,variant:"primary",children:"Unlock Profile"})]})})]})]}),s.status==="unlockprofile"&&t.jsx(t.Fragment,{children:k?t.jsx(h,{width:"100%",flexDirection:o==="modal"||a?"column":"row",justifyContent:o==="modal"?"center":"end",margin:o==="modal"?"12px 0 0 40px":"12px 0 0 0px",children:t.jsx(g,{height:"20px",width:"150px"})}):t.jsx(A,{type:o,children:t.jsxs(x,{gap:"8px",justifyContent:o==="modal"?"center":"end",margin:o==="modal"?"24px 16px 0 40px":"12px 16px 0 0px",children:[t.jsx(U,{checked:j,onChange:Z}),t.jsx(m,{fontSize:"14px",fontWeight:"500",lineHeight:"130%",color:l.default.color,children:"Remember Me"})]})})})]})},A=({children:e,type:n})=>t.jsx(s2,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:n==="modal"?{background:"black",width:"220px",padding:"8px 12px",top:"10px",left:"60px",borderRadius:"4px 12px 12px 12px"}:{background:"black",width:"120px",padding:"8px 12px",bottom:"0px",right:"-30px",borderRadius:"12px 12px 12px 4px"},tooltipContent:t.jsx(m,{fontSize:"10px",fontWeight:"400",children:"Selecting 'Remember me' will save your Push Profile keys locally on this device. Proceed at your own risk."}),children:e}),K=d(x)`
  flex-direction: column;
  align-items: ${e=>e.type==="modal"?"center":"end"};
  width: ${e=>e.type==="modal"?"360px":"inherit"};
  padding: ${e=>e.type==="modal"?"10px":"0px"};

  @media (${J.tablet}) {
    width: ${e=>e.type==="modal"?"360px":"inherit"};
    padding: ${e=>e.type==="modal"?"10px":"0px"};
    align-items: center;
  }
`,L=d(h)`
  gap: ${e=>e.type==="modal"?"24px":"0px"};
  align-items: end;
  flex-direction: ${e=>e.type==="modal"?"column":"row"};
  justify-content: space-between;

  @media ${O.tablet} {
    align-items: center;
    flex-direction: column;
    gap: 24px;
  }
`,U=d.input.attrs({type:"checkbox"})`
  accent-color: #d53a94; /* Changes the checkbox color */
  &:checked {
    background-color: #d53a94;
  }
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 1px solid #c5c8cd;
`,S=d(m)`
  font-size: 12px;
  font-weight: 700;
  line-height: 130%;
  border-radius: 22px;
  width: 6px;
  height: 6px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
`,W=d.div`
  width: ${e=>e.type==="modal"?"2px":"150px"};
  height: ${e=>e.type==="modal"?"40px":"3px"};
  background: ${e=>e.activeState==="connectwallet"?`linear-gradient(to right, ${C["primary-500"]}, ${e.theme.btn.disabledBg})`:C["primary-500"]};

  @media ${O.tablet} {
    width: 2px;
    height: 40px;
  }
`,z=d.div`
  overflow: hidden;
  min-width: 220px;
`,G=d(Q)`
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 16px;
  display: flex;
`;P=(e=>(e.BOTTOM_BAR="bottombar",e.MODAL="modal",e))(P||{});let R,V;R={type:"modal"},H=({type:e=R.type,showConnectModal:n=!1,description:o,onClose:p,modalType:l="portal"})=>{const b=e==="modal"&&l==="portal",u=e==="modal"&&l==="container",{isModalOpen:w,showModal:i,ModalComponent:y}=d2();return c.useEffect(()=>{u&&n&&i()},[e,n]),t.jsxs(t.Fragment,{children:[e==="bottombar"&&t.jsx(V,{className:e,children:t.jsx(f,{InnerComponentProps:{type:e,description:o},onClose:p})}),b&&t.jsx(c2,{isOpen:n,onClose:p,size:"small",acceptButtonProps:null,cancelButtonProps:null,children:t.jsx(f,{InnerComponentProps:{type:e,description:o},onClose:p})}),u&&t.jsx(y,{InnerComponent:f,InnerComponentProps:{type:e,description:o},modalRadius:"24px",modalBorder:!1,modalPosition:p2.ON_PARENT})]})},V=d(h)`
  flex: initial;
  border-radius: 24px;
  padding: 24px;
  align-items: center;
  backdrop-filter: blur(8px);

  &.bottombar {
    flex: initial;
    position: absolute;
    left: 0;
    right: 0;
    width: auto;
    bottom: 0;
    flex-direction: row;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${e=>e.theme.chat.modalBg};
    opacity: 0.75;
  }
`});export{H as U,h2 as __tla,P as a,v as b,B as c};
