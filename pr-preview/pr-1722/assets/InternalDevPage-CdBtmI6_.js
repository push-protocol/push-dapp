import{q as u,X as I,R as v,du as U,m as e,d5 as a,dv as x,c_ as S,d0 as C,r as h,dw as D,dx as B,dy as E,dz as W,dA as b,di as s,dj as o,dB as t,dC as c,dD as L,dE as m,S as $,d3 as Y,d9 as j,dF as J,dG as V,__tla as F}from"./index-Da8FEqA_.js";let w,K=Promise.all([(()=>{try{return F}catch{}})()]).then(async()=>{let O,N,T,y,A,M,f,P,n,R;O=({onClose:r,InnerComponentProps:i})=>{const{heading:p}=i,l=I(),d=v.useRef(),g=()=>r();return U(d,()=>g()),e.jsxs(N,{ref:d,children:[e.jsx(a,{color:l.default.color,fontSize:"32px",fontWeight:600,children:p}),e.jsx(x,{background:"#e20880",color:"#fff",flex:"initial",borderRadius:"15px",padding:"10px 20px",onClick:()=>g(),children:e.jsx(a,{children:"Close"})})]})},N=u.div`
  min-width: 25vw;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 16px;
  background: ${r=>r.theme.default.secondaryBg};
`,T=(r,i)=>{var p="";const l=Math.floor(Math.random()*i+1);for(var d=0;d<l;d++){d>0&&(p+="<br/>");for(var g=0;g<r;g++)p+=y(r)}return p},y=r=>{for(var i="",p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ",l=p.length,d=0;d<r;d++)i+=p.charAt(Math.floor(Math.random()*l));return i},A=()=>{j.dark(T(20,1),{type:j.TYPE.INFO,position:j.POSITION.BOTTOM_RIGHT,autoClose:1e4,hideProgressBar:!1})},M=()=>{const r={data:{app:"Testing Channel",sid:"1372",url:"https://epns.io",acta:"",aimg:"",amsg:"Testing 3..2..1",asub:"",icon:"https://gateway.ipfs.io/ipfs/bafybeifvqzq7pgr547ridaxceikskfvuxxrfz2m5vlpk7uljikwd3ybesa/QmdKPEWYv1xR6A6pEPPUwfaWSTztjeMWLVaaMjjEMo8foU",type:1,epoch:"1663058708",etime:null,hidden:"0",sectype:null},recipients:"0xb59cdc85cacd15097ece4c77ed9d225014b4d56d",notification:{body:T(5,3),title:"Testing Channel - "}};J(r,!0)},f=()=>{const r=I(),[i,p]=h.useState(0),[l,d]=h.useState(null);h.useEffect(()=>{setTimeout(()=>{i<100?p(i+1):p(0)},100)},[i]),h.useEffect(()=>{l||d(T(20,5))},[l]);const{isModalOpen:g,showModal:k,ModalComponent:G}=D(),{showModal:_,ModalComponent:z}=D();return e.jsxs(P,{children:[e.jsxs(n,{caption:"hooks/useModalBlur  isFullScreen={true}",children:[e.jsx(x,{background:"#e20880",color:"#fff",flex:"initial",borderRadius:"15px",padding:"20px 20px",onClick:_,children:e.jsx(a,{children:"Show Full Screen Modal"})}),e.jsx(z,{InnerComponent:O,modalPadding:"0px",InnerComponentProps:{heading:"Full Screen Modal"},modalPosition:B.ON_ROOT})]}),e.jsxs(n,{caption:"hooks/useModalBlur  isFullScreen={false}",children:[g&&e.jsx(a,{color:r.default.color,children:l.slice(0,70)}),e.jsx(x,{background:"#e20880",color:"#fff",flex:"initial",borderRadius:"15px",padding:"20px 20px",onClick:k,children:e.jsx(a,{children:"Show Local Modal"})}),e.jsx(G,{InnerComponent:O,modalPadding:"0px",InnerComponentProps:{heading:"Local Modal"},modalPosition:B.ON_PARENT})]}),e.jsx(n,{caption:"components/reusables/progress/ProgressBarUnit",children:e.jsx(E,{percent:i,color:S.COLORS.PRIMARY_PINK})}),e.jsx(n,{caption:"components/reusables/progress/ProgressBarUnit",children:e.jsx(E,{percent:i,color:S.COLORS.PRIMARY_PINK,notice:"This is notice on bottom"})}),e.jsx(n,{caption:"components/reusables/progress/ProgressBarUnit noticePositioning=TOP",children:e.jsx(E,{percent:i,color:S.COLORS.PRIMARY_PINK,notice:"This is notice on top",noticePositioning:W.TOP})}),e.jsx(n,{caption:"components/reusables/spinner/SpinnerUnit",children:e.jsx(b,{})}),e.jsx(n,{caption:'components/reusables/spinner/SpinnerUnit - color="#529015"',children:e.jsx(b,{color:"#529015"})}),e.jsx(n,{caption:'components/reusables/spinner/SpinnerUnit - completed=true"',children:e.jsx(b,{completed:!0})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=STANDALONE title=null",children:e.jsx(s,{type:o.STANDALONE})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=STANDALONE_MINIMAL title=null",children:e.jsx(s,{type:o.STANDALONE_MINIMAL})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner",children:e.jsx(s,{type:o.SEAMLESS,title:"This time it's done",spinnerType:t.COMPLETED})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner",children:e.jsx(s,{type:o.SEAMLESS,title:"This time it's a warning",spinnerType:t.WARNING})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner",children:e.jsx(s,{type:o.SEAMLESS,title:"This time it's an error",spinnerType:t.ERROR})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=seamless title=null spinnerSize=20",children:e.jsx(s,{type:o.SEAMLESS,spinnerType:t.PROCESSING,spinnerSize:20})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=STANDALONE spinnerSize=24",children:e.jsx(s,{type:o.STANDALONE,title:"Randomized With Spinner Size",spinnerType:t.PROCESSING,spinnerSize:24})}),e.jsx(n,{caption:'components/reusables/loaders/LoaderSpinner - type=STANDALONE spinnerColor="#083c84"',children:e.jsx(s,{type:o.STANDALONE,title:"Randomized With Spinner Color",spinnerType:t.PROCESSING,spinnerColor:"#083c84"})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=STANDALONE spinnerSize=24",children:e.jsx(s,{type:o.STANDALONE,title:"This time it's done",spinnerType:t.COMPLETED,spinnerSize:24})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=STANDALONE",children:e.jsx(s,{type:o.SEAMLESS,title:"Randomized With Long Text, Very Long",spinnerType:t.COMPLETED})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=STANDALONE progressEnabled=true",children:e.jsx(s,{type:o.STANDALONE,title:"Loading Something Cool",spinnerType:t.PROCESSING,progressEnabled:!0,progress:i})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=STANDALONE progressEnabled=true progressPositioning=BOTTOM",children:e.jsx(s,{type:o.STANDALONE,title:"Step 1: Loading coolness",spinnerType:t.PROCESSING,progressEnabled:!0,progressPositioning:c.BOTTOM,progress:i})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=STANDALONE spinnerEnabled=false progressEnabled=true progressPositioning=BOTTOM",children:e.jsx(s,{type:o.STANDALONE,title:"Step 2: No Spinner, Just Progress",spinnerEnabled:!1,progressEnabled:!0,progressPositioning:c.BOTTOM,progress:i})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=STANDALONE title=null width=50% spinnerEnabled=false progressEnabled=true progressPositioning=BOTTOM",children:e.jsx(s,{type:o.STANDALONE,width:"50%",title:null,spinnerEnabled:!1,progressEnabled:!0,progressPositioning:c.BOTTOM,progress:i})}),e.jsx(n,{caption:'components/reusables/loaders/LoaderSpinner - type=STANDALONE progressEnabled=true progressPositioning=BOTTOM progressColor="#EREDDD"',children:e.jsx(s,{type:o.STANDALONE,title:"Step 1: Loading color coolness",spinnerType:t.PROCESSING,progressEnabled:!0,progressPositioning:c.BOTTOM,progressColor:"#AA33EE",progress:i})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=STANDALONE width=80% progressEnabled=true progressPositioning=BOTTOM",children:e.jsx(s,{type:o.STANDALONE,width:"80%",title:"Step 1: Loading coolness with minimal",spinnerType:t.PROCESSING,progressEnabled:!0,progressPositioning:c.BOTTOM,progress:i})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=STANDALONE_MINIMAL width=80% progressEnabled=true progressPositioning=BOTTOM",children:e.jsx(s,{type:o.STANDALONE_MINIMAL,width:"80%",title:"Step 1: Loading coolness with minimal",spinnerType:t.PROCESSING,progressEnabled:!0,progressPositioning:c.BOTTOM,progress:i})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=SEAMLESS width=80% progressEnabled=true progressPositioning=BOTTOM",children:e.jsx(s,{type:o.SEAMLESS,width:"80%",title:"Step 1: Loading coolness with minimal",spinnerType:t.PROCESSING,progressEnabled:!0,progressPositioning:c.BOTTOM,progress:i})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=SEAMLESS progressEnabled=true progressPositioning=BOTTOM",children:e.jsx(s,{type:o.SEAMLESS,title:"Step 1: Loading minimal no width",spinnerType:t.PROCESSING,progressEnabled:!0,progressPositioning:c.BOTTOM,progress:i})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=SEAMLESS progressEnabled=true progressPositioning=BOTTOM progressNotice=Some_Notice",children:e.jsx(s,{type:o.SEAMLESS,title:"Step 1: Loading minimal no width",spinnerType:t.PROCESSING,progressEnabled:!0,progressPositioning:c.BOTTOM,progress:i,progressNotice:"This might take some time to load"})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner - type=SEAMLESS progressEnabled=true progressPositioning=TOP progressNotice=Some_Notice",children:e.jsx(s,{type:o.SEAMLESS,title:"Step 1: Loading minimal no width",spinnerType:t.PROCESSING,progressEnabled:!0,progressPositioning:c.TOP,progress:i,progressNotice:"This might take some time to load"})}),e.jsxs(n,{caption:"components/reusables/loaders/LoaderSpinner - type=seamless overlay=normal blur=0",children:[e.jsx(a,{color:r.default.color,children:l}),e.jsx(s,{type:o.SEAMLESS,title:"Randomized With Long Text, Very Long",spinnerType:t.PROCESSING})]}),e.jsxs(n,{caption:"components/reusables/loaders/LoaderSpinner - type=seamless overlay=ontop blur=0",children:[e.jsx(a,{color:r.default.color,children:l}),e.jsx(s,{type:o.SEAMLESS,overlay:L.ONTOP,title:"Another Very Randomized Long Text",spinnerType:t.PROCESSING})]}),e.jsxs(n,{caption:"components/reusables/loaders/LoaderSpinner - type=seamless overlay=ontop blur=5",children:[e.jsx(a,{color:r.default.color,children:l}),e.jsx(s,{type:o.SEAMLESS,overlay:L.ONTOP,blur:5,title:"And Yet Another Randomined Loooong Text",spinnerType:t.PROCESSING})]}),e.jsxs(n,{caption:"components/reusables/loaders/LoaderSpinner - type=STANDALONE overlay=ontop blur=5",children:[e.jsx(a,{color:r.default.color,children:l}),e.jsx(s,{type:o.STANDALONE,overlay:L.ONTOP,blur:5,title:"Randomized With Long Text, Very Long",spinnerType:t.PROCESSING})]}),e.jsx(n,{caption:"components/reusables/toasts/ToastController",children:e.jsx(x,{background:"#e20880",color:"#fff",flex:"initial",borderRadius:"15px",padding:"20px 20px",onClick:()=>{M()},children:e.jsx(a,{children:"Trigger Random Notification"})})}),e.jsx(n,{caption:"components/reusables/toasts/ToastController",children:e.jsx(x,{background:"#e20880",color:"#fff",flex:"initial",borderRadius:"15px",padding:"20px 20px",onClick:()=>{A()},children:e.jsx(a,{children:"Trigger Random Toast"})})}),e.jsx(n,{caption:"components/reusables/loaders/LoaderSpinner",children:e.jsx(s,{type:o.STANDALONE,title:"Randomized",spinnerType:t.PROCESSING})}),e.jsxs(n,{caption:"components/reusables/blurs/BlurBG - Blur=10",children:[e.jsx(x,{background:"#e20880",color:"#fff",flex:"initial",borderRadius:"15px",padding:"20px 20px",onClick:()=>{console.warn("Nothing Should Be Clickable")},children:e.jsx(a,{children:"Try to Trigger"})}),e.jsx(m,{blur:10,zIndex:99})]}),e.jsxs(n,{caption:"components/reusables/blurs/BlurBG  - Blur=5",children:[e.jsx(E,{percent:i,color:S.COLORS.PRIMARY_PINK}),e.jsx(s,{type:o.SEAMLESS,title:"Randomized With Long Text, Very Long",spinnerType:t.PROCESSING}),e.jsx(m,{blur:5})]}),e.jsxs(n,{caption:"components/reusables/blurs/BlurBG  - Blur=5",children:[e.jsx(s,{type:o.SEAMLESS,title:"This time it's done",spinnerType:t.COMPLETED}),e.jsx(m,{blur:5,zIndex:99})]}),e.jsxs(n,{caption:"components/reusables/blurs/BlurBG  - Disabled",children:[e.jsx(x,{background:"#e20880",color:"#fff",flex:"initial",borderRadius:"15px",padding:"20px 20px",onClick:()=>{console.info("This should be clickable")},children:e.jsx(a,{children:"Try to Trigger"})}),e.jsx(m,{blur:0})]})]})},P=u($)`
  align-items: center;
  align-self: stretch;
  background: ${r=>r.theme.default.bg};
  border-radius: ${S.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${S.ADJUSTMENTS.MODULE_BOX_SHADOW};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  position: relative;

  margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${C.laptop} {
    margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${C.mobileM} {
    margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
  }
`,n=u(Y)`
  border-radius: 32px;
  border: 1px solid ${r=>r.theme.default.secondaryBg};
  background: ${r=>r.theme.default.secondaryBg};
  margin: 20px;
  min-height: 100px;
  min-width: 25%;
  overflow: hidden;
  padding: 20px;

  &:after {
    background: ${r=>r.theme.nav.bg};
    bottom: 0;
    content: '${r=>r.caption}';
    font-size: 10px;
    left: 0;
    padding: 2px;
    position: absolute;
    right: 0;
    text-align: center;
    z-index: 100;
  }
`,w=()=>e.jsx(R,{children:e.jsx(f,{})}),R=u(V)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: stretch;
`});export{K as __tla,w as default};
