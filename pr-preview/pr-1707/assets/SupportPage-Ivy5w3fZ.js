import{q as c,c_ as t,c$ as p,d0 as U,d2 as P,R as o,X as k,m as e,d3 as b,d4 as B,d1 as l,df as C,I as s,dg as w,dh as R,d7 as W,di as q,dj as H,dk as L,n as K,dl as X,S as Z,__tla as Q}from"./index-DLFlONIp.js";import{D as V,__tla as Y}from"./index-C6XPPsyM.js";let $,ee=Promise.all([(()=>{try{return Q}catch{}})(),(()=>{try{return Y}catch{}})()]).then(async()=>{let T,x,j,E,M,f,I,A;T=a=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase()),x=a=>a.trim().length===0,j=()=>{P.pageview("/support");const a=["Support","Integrate","Others"],[i,n]=o.useState(0),[g,_]=o.useState(""),[h,F]=o.useState(""),[N,G]=o.useState(a[0]),[u,O]=o.useState(""),[m,z]=o.useState(""),[y,d]=o.useState(""),S=k(),v=r=>{if(r.preventDefault(),T(h))if(x(g))d("Name can't be empty"),n(0);else if(x(u))d("Subject can't be empty"),n(0);else if(x(m))d("Message can't be empty"),n(0);else{n(1);const J={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from:h,name:g,topic:N,sub:u,msg:m})};fetch("https://backend-kovan.epns.io/apis/mailing/sendMail",J).then(D=>D.json()).then(D=>{n(2)}).catch(D=>{d("Mayday! Mayday! something went wrong. Please retry..."),n(0)})}else d("Incorrect e-mail, please check and retry!"),n(0)};return e.jsx(E,{children:e.jsxs(b,{alignSelf:"stretch",justifyContent:"flex-start",children:[e.jsxs(b,{alignSelf:"stretch",justifyContent:"flex-start",children:[e.jsx(B,{children:e.jsx(l,{weight:"400",size:"32px",color:S.color,children:"Support"})}),e.jsx(l,{color:S.default.secondaryColor,weight:"400",size:"16px",textTransform:"none",textAlign:"center",spacing:"0.03em",margin:"0px 0px",children:"Let's get in touch!"})]}),e.jsx(b,{alignSelf:"stretch",children:e.jsx(C,{flex:"1",direction:"row",self:"stretch",margin:"0px",size:"1.1rem",onSubmit:v,children:e.jsxs(s,{self:"stretch",align:"stretch",justify:"stretch",margin:"10px -15px",children:[i===0&&e.jsxs(e.Fragment,{children:[e.jsxs(w,{align:"stretch",children:[e.jsxs(s,{flex:"1",margin:"15px",justify:"flex-start",align:"stretch",minWidth:"280px",children:[e.jsx(f,{required:!0,radius:"4px",padding:"12px",bg:"#fff",border:"12px",placeholder:"John Wick",value:g,onChange:r=>{_(r.target.value)},autocomplete:"name",style:{}}),g.trim().length===0&&e.jsx(l,{padding:"4px 10px",right:"0px",top:"0px",pos:"absolute",color:"#fff",bg:"#000",size:"0.7rem",z:"1",children:"Name"})]}),e.jsxs(s,{flex:"5",margin:"15px",justify:"flex-start",align:"stretch",minWidth:"280px",children:[e.jsx(f,{required:!0,placeholder:"john@wick.com",radius:"4px",padding:"12px",bg:"#fff",value:h,onChange:r=>{F(r.target.value)},autocomplete:"email"}),h.trim().length===0&&e.jsx(l,{padding:"4px 10px",right:"0px",top:"0px",pos:"absolute",color:"#fff",bg:"#000",size:"0.7rem",z:"1",children:"E-mail"})]})]}),e.jsx(s,{flex:"5",justify:"flex-start",align:"stretch",minWidth:"280px",margin:"15px",children:e.jsx(M,{options:a,onChange:r=>G(r.value),value:N,placeholder:"Select an option"})}),e.jsxs(s,{justify:"center",align:"stretch",minWidth:"280px",margin:"15px",children:[e.jsx(f,{required:!0,placeholder:"I want to tell you guys a secret!",radius:"4px",padding:"12px",bg:"#fff",value:u,onChange:r=>{O(r.target.value)},autocomplete:"on"}),u.trim().length===0&&e.jsx(l,{padding:"4px 10px",right:"0px",top:"0px",pos:"absolute",color:"#fff",bg:"#000",size:"0.7rem",z:"1",children:"Subject"})]}),e.jsx(s,{justify:"center",align:"stretch",minWidth:"280px",margin:"15px",children:e.jsx(I,{required:!0,placeholder:"This is where you will tell us that secret, or a bug or whatever is on your mind.",rows:"6",radius:"4px",padding:"12px",bg:"#fff",value:m,onChange:r=>{z(r.target.value)},autocomplete:"off"})})]}),i===2&&e.jsx(s,{align:"center",margin:"0px 10px",children:e.jsxs(w,{color:"#e20880",bg:"#000",padding:"10px 15px",columnGap:"0px",rowGap:"0px",children:[e.jsx(R,{size:24,color:"#fff"}),e.jsx(l,{padding:"0px 0px 0px 8px",color:"#fff",textTransform:"uppercase",spacing:"0.1em",children:"Message Sent! We will be in Touch :)"})]})}),y&&i===0&&e.jsx(s,{align:"center",margin:"0px 10px",children:e.jsx(s,{color:"#e20880",bg:"#000",padding:"10px 15px",margin:"15px",children:e.jsx(l,{color:"#fff",textTransform:"uppercase",spacing:"0.1em",children:y})})}),e.jsx(s,{justify:"stretch",self:"stretch",align:"stretch",minWidth:"280px",children:i!==2&&e.jsxs(W,{bg:"#000",color:"#fff",border:S.buttonBd,flex:"1",radius:"4px",disabled:i,margin:"15px",padding:"12px 15px",children:[i===1&&e.jsx(q,{type:H.SEAMLESS,spinnerColor:"#fff",spinnerSize:24}),i===0&&e.jsx(L,{cursor:"hand",color:"#fff",weight:"400",size:".9em",spacing:"0.2em",type:"submit",value:"Submit"})]})})]})})})]})})},E=c(K)`
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
  width: calc(100% - ${p.MINI_MODULES.DESKTOP.RIGHT} - ${p.MINI_MODULES.DESKTOP.LEFT} - ${t.ADJUSTMENTS.PADDING.BIG} - ${t.ADJUSTMENTS.PADDING.BIG});
  padding: ${t.ADJUSTMENTS.PADDING.BIG};
	position: relative;
  margin: ${t.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${U.laptop} {
    margin: ${t.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${t.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(100% - ${p.MINI_MODULES.TABLET.RIGHT} - ${p.MINI_MODULES.TABLET.LEFT} - ${t.ADJUSTMENTS.PADDING.DEFAULT} - ${t.ADJUSTMENTS.PADDING.DEFAULT});
  }

  @media ${U.mobileM} {
    margin: ${t.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${t.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(100% - ${p.MINI_MODULES.MOBILE.RIGHT} - ${p.MINI_MODULES.MOBILE.LEFT} - ${t.ADJUSTMENTS.PADDING.DEFAULT} - ${t.ADJUSTMENTS.PADDING.DEFAULT});
  }
`,M=c(V)`
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
    letter-spacing: 0.2em;
    font-size: 0.8em;
		padding-left: 6px
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
    letter-spacing: 0.2em;
    font-size: 0.7em;
    padding: 15px 20px;
  }

  .Dropdown-option:hover {
    background-color: #000000;
    color: #fff;
  }
`,f=c(L)`
	background: #FFFFFF;
	border: 1px solid #D4D4D4;
	box-sizing: border-box;
	border-radius: 4px;
`,I=c(X)`
	background: #FFFFFF;
	border: 1px solid #D4D4D4;
	box-sizing: border-box;
	border-radius: 4px;
`,$=()=>e.jsx(A,{children:e.jsx(j,{})}),A=c(Z)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{ee as __tla,$ as default};
