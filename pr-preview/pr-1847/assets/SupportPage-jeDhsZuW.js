import{e6 as c,eM as t,eN as p,eO as U,eQ as k,eg as o,e9 as B,e1 as e,eR as D,eS as C,eP as l,fg as F,ed as n,fh as w,fi as R,eV as W,e3 as q,e4 as H,fj as L,eb as K,fk as V,e7 as X,__tla as Z}from"./index-CfZ560Wg.js";import{D as Q,__tla as Y}from"./index-Bczat9Df.js";let $,ee=Promise.all([(()=>{try{return Z}catch{}})(),(()=>{try{return Y}catch{}})()]).then(async()=>{let T,x,j,M,E,f,I,A;T=a=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase()),x=a=>a.trim().length===0,j=()=>{k.pageview("/support");const a=["Support","Integrate","Others"],[s,i]=o.useState(0),[g,_]=o.useState(""),[h,O]=o.useState(""),[N,G]=o.useState(a[0]),[u,z]=o.useState(""),[m,v]=o.useState(""),[y,d]=o.useState(""),S=B(),J=r=>{if(r.preventDefault(),T(h))if(x(g))d("Name can't be empty"),i(0);else if(x(u))d("Subject can't be empty"),i(0);else if(x(m))d("Message can't be empty"),i(0);else{i(1);const P={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from:h,name:g,topic:N,sub:u,msg:m})};fetch("https://backend-kovan.epns.io/apis/mailing/sendMail",P).then(b=>b.json()).then(b=>{i(2)}).catch(b=>{d("Mayday! Mayday! something went wrong. Please retry..."),i(0)})}else d("Incorrect e-mail, please check and retry!"),i(0)};return e.jsx(M,{children:e.jsxs(D,{alignSelf:"stretch",justifyContent:"flex-start",children:[e.jsxs(D,{alignSelf:"stretch",justifyContent:"flex-start",children:[e.jsx(C,{children:e.jsx(l,{weight:"400",size:"32px",color:S.color,children:"Support"})}),e.jsx(l,{color:S.default.secondaryColor,weight:"400",size:"16px",textTransform:"none",textAlign:"center",spacing:"normal",margin:"0px 0px",children:"Let's get in touch!"})]}),e.jsx(D,{alignSelf:"stretch",children:e.jsx(F,{flex:"1",direction:"row",self:"stretch",margin:"0px",size:"1.1rem",onSubmit:J,children:e.jsxs(n,{self:"stretch",align:"stretch",justify:"stretch",margin:"10px -15px",children:[s===0&&e.jsxs(e.Fragment,{children:[e.jsxs(w,{align:"stretch",children:[e.jsxs(n,{flex:"1",margin:"15px",justify:"flex-start",align:"stretch",minWidth:"280px",children:[e.jsx(f,{required:!0,radius:"4px",padding:"12px",bg:"#fff",border:"12px",placeholder:"John Wick",value:g,onChange:r=>{_(r.target.value)},autocomplete:"name",style:{}}),g.trim().length===0&&e.jsx(l,{padding:"4px 10px",right:"0px",top:"0px",pos:"absolute",color:"#fff",bg:"#000",size:"0.7rem",z:"1",children:"Name"})]}),e.jsxs(n,{flex:"5",margin:"15px",justify:"flex-start",align:"stretch",minWidth:"280px",children:[e.jsx(f,{required:!0,placeholder:"john@wick.com",radius:"4px",padding:"12px",bg:"#fff",value:h,onChange:r=>{O(r.target.value)},autocomplete:"email"}),h.trim().length===0&&e.jsx(l,{padding:"4px 10px",right:"0px",top:"0px",pos:"absolute",color:"#fff",bg:"#000",size:"0.7rem",z:"1",children:"E-mail"})]})]}),e.jsx(n,{flex:"5",justify:"flex-start",align:"stretch",minWidth:"280px",margin:"15px",children:e.jsx(E,{options:a,onChange:r=>G(r.value),value:N,placeholder:"Select an option"})}),e.jsxs(n,{justify:"center",align:"stretch",minWidth:"280px",margin:"15px",children:[e.jsx(f,{required:!0,placeholder:"I want to tell you guys a secret!",radius:"4px",padding:"12px",bg:"#fff",value:u,onChange:r=>{z(r.target.value)},autocomplete:"on"}),u.trim().length===0&&e.jsx(l,{padding:"4px 10px",right:"0px",top:"0px",pos:"absolute",color:"#fff",bg:"#000",size:"0.7rem",z:"1",children:"Subject"})]}),e.jsx(n,{justify:"center",align:"stretch",minWidth:"280px",margin:"15px",children:e.jsx(I,{required:!0,placeholder:"This is where you will tell us that secret, or a bug or whatever is on your mind.",rows:"6",radius:"4px",padding:"12px",bg:"#fff",value:m,onChange:r=>{v(r.target.value)},autocomplete:"off"})})]}),s===2&&e.jsx(n,{align:"center",margin:"0px 10px",children:e.jsxs(w,{color:"#e20880",bg:"#000",padding:"10px 15px",columnGap:"0px",rowGap:"0px",children:[e.jsx(R,{size:24,color:"#fff"}),e.jsx(l,{padding:"0px 0px 0px 8px",color:"#fff",textTransform:"uppercase",spacing:"normal",children:"Message Sent! We will be in Touch :)"})]})}),y&&s===0&&e.jsx(n,{align:"center",margin:"0px 10px",children:e.jsx(n,{color:"#e20880",bg:"#000",padding:"10px 15px",margin:"15px",children:e.jsx(l,{color:"#fff",textTransform:"uppercase",spacing:"normal",children:y})})}),e.jsx(n,{justify:"stretch",self:"stretch",align:"stretch",minWidth:"280px",children:s!==2&&e.jsxs(W,{bg:"#000",color:"#fff",border:S.buttonBd,flex:"1",radius:"4px",disabled:s,margin:"15px",padding:"12px 15px",children:[s===1&&e.jsx(q,{type:H.SEAMLESS,spinnerColor:"#fff",spinnerSize:24}),s===0&&e.jsx(L,{cursor:"hand",color:"#fff",weight:"400",size:".9em",spacing:"normal",type:"submit",value:"Submit"})]})})]})})})]})})},M=c(K)`
  align-items: center;
  align-self: center;
  background: ${a=>a.theme.default.bg};
  border-radius: ${t.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${t.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${p.MINI_MODULES.DESKTOP.RIGHT} - ${p.MINI_MODULES.DESKTOP.LEFT} -
      ${t.ADJUSTMENTS.PADDING.BIG} - ${t.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${t.ADJUSTMENTS.PADDING.BIG};
  position: relative;
  margin: ${t.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${U.laptop} {
    margin: ${t.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${t.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${p.MINI_MODULES.TABLET.RIGHT} - ${p.MINI_MODULES.TABLET.LEFT} -
        ${t.ADJUSTMENTS.PADDING.DEFAULT} - ${t.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${U.mobileM} {
    margin: ${t.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${t.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${p.MINI_MODULES.MOBILE.RIGHT} - ${p.MINI_MODULES.MOBILE.LEFT} -
        ${t.ADJUSTMENTS.PADDING.DEFAULT} - ${t.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`,E=c(Q)`
  .Dropdown-control {
    background-color: #000;
    color: #fff;
    padding: 12px 52px 12px 10px;
    border: 1px solid ${a=>a.theme.buttonBd};
    border-radius: 4px;
  }

  .Dropdown-placeholder {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: normal;
    font-size: 0.8em;
    padding-left: 6px;
  }

  .Dropdown-arrow {
    top: 18px;
    bottom: 0;
    border-color: #fff transparent transparent;
  }

  .Dropdown-menu {
    border: 1px solid #000;
    box-shadow: none;
    background-color: #000;
    border-radius: 0px;
    margin-top: -3px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .Dropdown-option {
    background-color: rgb(35 35 35);
    color: #ffffff99;

    text-transform: uppercase;
    letter-spacing: normal;
    font-size: 0.7em;
    padding: 15px 20px;
  }

  .Dropdown-option:hover {
    background-color: #000000;
    color: #fff;
  }
`,f=c(L)`
  background: #ffffff;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 4px;
`,I=c(V)`
  background: #ffffff;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 4px;
`,$=()=>e.jsx(A,{children:e.jsx(j,{})}),A=c(X)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{ee as __tla,$ as default};
