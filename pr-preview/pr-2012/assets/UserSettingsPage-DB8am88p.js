import{d_ as e,ei as Xe,eQ as N,fe as Qe,hL as et,f_ as tt,hM as at,er as it,gh as st,eb as nt,hN as rt,hO as lt,dX as f,fY as ae,d$ as o,eg as g,hP as ot,eh as A,em as D,dV as U,h1 as ct,gr as ie,dW as R,f7 as se,hQ as ne,hR as re,hS as dt,e7 as h,fd as le,hT as oe,gf as G,e2 as pt,hU as ht,fi as xt,fj as ut,hV as gt,eT as Z,gm as ce,hW as mt,hj as ft,eW as K,eP as B,e0 as de,e1 as pe,hX as jt,fr as yt,e_ as M,fS as bt,g7 as Lt,gK as wt,hY as he,hf as St,hZ as _t,h_ as Ct,ej as vt,dZ as Mt,fP as Et,e$ as Dt,eX as E,eZ as F,f1 as It,__tla as kt}from"./index-TcVMqmjB.js";import{u as Pt,c as $t,a as xe,__tla as Nt}from"./index.esm-DOczyHWp.js";import{a as Ot}from"./Common.form-NbJ1DVkQ.js";import{u as ue,__tla as Tt}from"./useDisclosure-BF3A6yWF.js";import{I as At,__tla as Ut}from"./ImageClipper-CAT0x1kx.js";import{c as Zt,__tla as Bt}from"./cloneDeep-BX7-D4sc.js";import{E as Ft,__tla as zt}from"./EmptyNotificationSettings-OR2sG31X.js";import{L as Rt,__tla as Ht}from"./LoaderSpinner-BFyK5Jo4.js";import{p as qt,__tla as Gt}from"./index-BOMpH2iV.js";import{c as ge}from"./index-KR9cftpy.js";import{U as Kt,a as Vt,__tla as Wt}from"./UnlockProfileWrapper-DsD0p4Qv.js";import{u as Jt,A as Yt,a as Xt,b as Qt,__tla as ea}from"./useSocialHandles-DA_YTiTH.js";import{__tla as ta}from"./index.esm-vNpJBjCe.js";import{__tla as aa}from"./CopyButton-C718oV57.js";import{__tla as ia}from"./Copy-VJWyyuKN.js";import{__tla as sa}from"./Discord-CmG2U2BE.js";let me,na=Promise.all([(()=>{try{return kt}catch{}})(),(()=>{try{return Nt}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return Ut}catch{}})(),(()=>{try{return Bt}catch{}})(),(()=>{try{return zt}catch{}})(),(()=>{try{return Ht}catch{}})(),(()=>{try{return Gt}catch{}})(),(()=>{try{return Wt}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return sa}catch{}})()]).then(async()=>{const fe=t=>{const{svgProps:s,...c}=t;return e.jsx(Xe,{componentName:"CameraFilled",icon:e.jsx("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:e.jsx("path",{d:"M25.2308 8.15385H22.0346L20.4654 5.80001C20.3819 5.67131 20.2673 5.56576 20.1321 5.49315C19.997 5.42054 19.8457 5.38321 19.6923 5.38462H12.3077C12.1543 5.38321 12.003 5.42054 11.8679 5.49315C11.7327 5.56576 11.6181 5.67131 11.5346 5.80001L9.96538 8.15385H6.76923C6.03572 8.15689 5.33312 8.44962 4.81444 8.9683C4.29577 9.48697 4.00304 10.1896 4 10.9231V23.8462C4.00304 24.5797 4.29577 25.2823 4.81444 25.8009C5.33312 26.3196 6.03572 26.6124 6.76923 26.6154H25.2308C25.9643 26.6124 26.6669 26.3196 27.1856 25.8009C27.7042 25.2823 27.997 24.5797 28 23.8462V10.9231C27.997 10.1896 27.7042 9.48697 27.1856 8.9683C26.6669 8.44962 25.9643 8.15689 25.2308 8.15385ZM20.1538 16.9231C20.1538 17.7446 19.9102 18.5477 19.4538 19.2308C18.9974 19.9139 18.3486 20.4463 17.5896 20.7607C16.8306 21.0751 15.9954 21.1574 15.1896 20.9971C14.3839 20.8368 13.6437 20.4412 13.0628 19.8603C12.4819 19.2794 12.0862 18.5392 11.926 17.7335C11.7657 16.9277 11.848 16.0925 12.1623 15.3335C12.4767 14.5745 13.0092 13.9257 13.6922 13.4693C14.3753 13.0129 15.1784 12.7692 16 12.7692C17.1017 12.7692 18.1582 13.2069 18.9372 13.9859C19.7162 14.7649 20.1538 15.8214 20.1538 16.9231Z",fill:"currentColor"})}),...c})},je=t=>t,ye=t=>t.profile.info().then(je),be=async({userPushSDKInstance:t,name:s,desc:c,picture:j})=>await t.profile.update({name:s,desc:c||"",picture:j}),Le=t=>{const{userPushSDKInstance:s}=N(c=>c.user);return Qe({queryKey:[et,s==null?void 0:s.account],queryFn:()=>ye(s),...t})},we=()=>tt({mutationKey:[at],mutationFn:be}),Se=t=>{const{svgProps:s,...c}=t;return e.jsx(it,{componentName:"Metamask",illustration:e.jsxs("svg",{width:c.width??"40",height:c.height??"39",viewBox:"0 0 43 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[e.jsx("path",{d:"M39.9998 0.674622L23.5776 12.968L26.6208 5.72021L39.9998 0.674622Z",fill:"#E27625"}),e.jsx("path",{d:"M2.0835 0.674622L18.3685 13.0795L15.4625 5.72021L2.0835 0.674622Z",fill:"#E27625"}),e.jsx("path",{d:"M34.1053 29.1919L29.7188 35.9379L39.095 38.5583L41.7818 29.3313L34.1053 29.1919Z",fill:"#E27625"}),e.jsx("path",{d:"M0.356445 29.3313L3.01579 38.5583L12.3646 35.9379L8.00549 29.1919L0.356445 29.3313Z",fill:"#E27625"}),e.jsx("path",{d:"M11.8711 17.7627L9.2666 21.749L18.5332 22.1671L18.2316 12.0759L11.8711 17.7627Z",fill:"#E27625"}),e.jsx("path",{d:"M30.2397 17.7627L23.7695 11.9644L23.5776 22.1671L32.8442 21.7489L30.2397 17.7627Z",fill:"#E27625"}),e.jsx("path",{d:"M12.3647 35.9379L17.985 33.206L13.1324 29.4149L12.3647 35.9379Z",fill:"#E27625"}),e.jsx("path",{d:"M24.126 33.206L29.7188 35.9379L28.9512 29.4149L24.126 33.206Z",fill:"#E27625"}),e.jsx("path",{d:"M29.7188 35.9379L24.126 33.206L24.592 36.8856L24.5372 38.4467L29.7188 35.9379Z",fill:"#D7C1B3"}),e.jsx("path",{d:"M12.3647 35.9379L17.5738 38.4467L17.5464 36.8856L17.985 33.206L12.3647 35.9379Z",fill:"#D7C1B3"}),e.jsx("path",{d:"M17.6558 26.9619L13.0225 25.5959L16.3124 24.0627L17.6558 26.9619Z",fill:"#2F343B"}),e.jsx("path",{d:"M24.4277 26.9619L25.7985 24.0627L29.0884 25.5959L24.4277 26.9619Z",fill:"#2F343B"}),e.jsx("path",{d:"M12.3645 35.9379L13.187 29.1919L8.00537 29.3313L12.3645 35.9379Z",fill:"#CC6228"}),e.jsx("path",{d:"M28.9238 29.1919L29.7189 35.9379L34.1054 29.3313L28.9238 29.1919Z",fill:"#CC6228"}),e.jsx("path",{d:"M32.8442 21.749L23.5776 22.1671L24.4275 26.9618L25.7983 24.0627L29.0882 25.5959L32.8442 21.749Z",fill:"#CC6228"}),e.jsx("path",{d:"M13.0226 25.5959L16.3125 24.0627L17.6559 26.9618L18.5332 22.1671L9.2666 21.749L13.0226 25.5959Z",fill:"#CC6228"}),e.jsx("path",{d:"M9.2666 21.749L13.1322 29.4149L13.0226 25.5959L9.2666 21.749Z",fill:"#E27625"}),e.jsx("path",{d:"M29.0883 25.5959L28.9512 29.4149L32.8442 21.749L29.0883 25.5959Z",fill:"#E27625"}),e.jsx("path",{d:"M18.5331 22.1672L17.6558 26.9619L18.7524 32.6486L18.9991 25.1778L18.5331 22.1672Z",fill:"#E27625"}),e.jsx("path",{d:"M23.5779 22.1672L23.1118 25.1499L23.3311 32.6486L24.4278 26.9619L23.5779 22.1672Z",fill:"#E27625"}),e.jsx("path",{d:"M24.4277 26.9619L23.3311 32.6486L24.1261 33.2061L28.9513 29.415L29.0884 25.5959L24.4277 26.9619Z",fill:"#F5841F"}),e.jsx("path",{d:"M13.0225 25.5959L13.1321 29.415L17.9847 33.2061L18.7524 32.6486L17.6558 26.9619L13.0225 25.5959Z",fill:"#F5841F"}),e.jsx("path",{d:"M24.5374 38.4468L24.5922 36.8857L24.1536 36.5233H17.9302L17.5464 36.8857L17.5738 38.4468L12.3647 35.9379L14.1742 37.4432L17.8753 40.0357H24.2084L27.9096 37.4432L29.719 35.9379L24.5374 38.4468Z",fill:"#C0AD9E"}),e.jsx("path",{d:"M24.1262 33.206L23.3311 32.6485H18.7527L17.985 33.206L17.5464 36.8857L17.9302 36.5233H24.1536L24.5923 36.8857L24.1262 33.206Z",fill:"#2F343B"}),e.jsx("path",{d:"M40.7126 13.7764L42.0834 6.97463L39.9998 0.674622L24.126 12.5499L30.2397 17.7627L38.8757 20.3273L40.7674 18.0693L39.945 17.4561L41.2609 16.2574L40.2465 15.449L41.5625 14.4454L40.7126 13.7764Z",fill:"#763E1A"}),e.jsx("path",{d:"M0 6.97469L1.39821 13.7765L0.520902 14.4455L1.83687 15.4769L0.822478 16.2575L2.13844 17.4561L1.31596 18.0694L3.23508 20.3274L11.8711 17.7628L17.9848 12.5499L2.08361 0.674683L0 6.97469Z",fill:"#763E1A"}),e.jsx("path",{d:"M38.8757 20.3273L30.2397 17.7627L32.8442 21.749L28.9512 29.4149L34.1054 29.3313H41.7818L38.8757 20.3273Z",fill:"#F5841F"}),e.jsx("path",{d:"M11.8711 17.7627L3.23512 20.3273L0.356445 29.3313H8.00549L13.1323 29.4149L9.26662 21.749L11.8711 17.7627Z",fill:"#F5841F"}),e.jsx("path",{d:"M23.5775 22.1671L24.1258 12.5499L26.6207 5.72021H15.4624L17.9847 12.5499L18.533 22.1671L18.7523 25.1778V32.6486H23.3308L23.3582 25.1778L23.5775 22.1671Z",fill:"#F5841F"})]}),...c})},_e=async({channel:t})=>{try{return await st.channels.getChannel({channel:t,env:nt.appEnv})}catch(s){throw console.error(s),new Error(s.message)}},Ce=async({userCaipAddress:t})=>{var c,j;const s=lt.userSubscriptions(t);try{return(j=(c=await rt(s))==null?void 0:c.data)==null?void 0:j.subscriptions}catch(d){throw new Error(d.message)}},ve=$t({displayName:xe().max(50,"Display Name cannot exceed 50 characters").required(Ot("Display Name")),desc:xe().max(150,"Bio cannot exceed 150 characters").nullable()}),Me=t=>Pt({initialValues:{displayName:"",picture:null,desc:""},validationSchema:ve,onSubmit:t}),Ee=({formValues:t,setFieldValue:s,modalControl:c})=>{const{isOpen:j,onClose:d}=c,l=f.useRef(null),[a,n]=f.useState(t.picture),b=async i=>{var w;const p=(w=i.currentTarget.files)==null?void 0:w[0];n(void 0),p&&await r(p)},L=async i=>{var w;i.preventDefault(),i.stopPropagation(),n(void 0);const p=(w=i.dataTransfer.files)==null?void 0:w[0];p&&await r(p)},r=async i=>{const p=new FileReader;p.readAsDataURL(i),p.onloadend=()=>{s("picture",p.result)}};return e.jsxs(ae,{size:"medium",isOpen:j,onClose:d,acceptButtonProps:null,cancelButtonProps:null,children:[e.jsxs(o,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing-lg",children:[e.jsx(g,{variant:"bes-regular",color:"text-tertiary",children:"Upload a PNG, JPG up to 1MB. Crop the image to resize to 128px."}),e.jsx(ot,{id:"file-upload",onChange:b,onDrop:L,children:e.jsxs(o,{width:{initial:"500px",ml:"325px"},padding:"spacing-xxl spacing-none",display:"flex",flexDirection:"column",alignItems:"center",border:"border-sm dashed stroke-tertiary",borderRadius:"radius-md",backgroundColor:"surface-secondary",gap:"spacing-md",children:[a?e.jsx(o,{width:"128px",height:"128px",borderRadius:"radius-md",children:e.jsx("img",{style:{borderRadius:"inherit"},width:"100%",height:"100%",src:a,alt:"Cropped Image"})}):e.jsx(At,{width:"200px",height:"200px",imageSrc:t.picture,onImageCropped:i=>{n(i),s("picture",i)},ref:l}),e.jsxs(o,{display:"flex",gap:"spacing-xxxs",children:[e.jsx(g,{variant:"bs-semibold",color:"text-tertiary",children:"Drag and Drop or"}),e.jsx("label",{htmlFor:"file-upload",children:e.jsx(g,{variant:"bs-semibold",color:"text-brand-medium",css:A`
                    cursor: pointer;
                  `,children:"Browse to Choose"})})]})]})})]}),e.jsx(o,{display:"flex",justifyContent:"center",width:"100%",margin:"spacing-md spacing-none spacing-none spacing-none",children:a?e.jsx(D,{onClick:()=>{s("picture",a),d()},children:"Upload Image"}):e.jsx(D,{disabled:t.picture==null,onClick:()=>{l.current.showCroppedImage()},children:"Crop Image"})})]})},De=({setErrorMessage:t,setSuccessMessage:s})=>{const c=ue(),{wallet:j}=U(),{handleConnectWalletAndEnableProfile:d}=ct(),{data:l,refetch:a}=Le(),{mutate:n,isPending:b}=we(),{userPushSDKInstance:L}=N(i=>i.user),r=Me(async()=>{const i=L!=null&&L.signer?L:await d({wallet:j})??void 0;n({userPushSDKInstance:i,name:r==null?void 0:r.values.displayName,desc:r==null?void 0:r.values.desc,picture:r==null?void 0:r.values.picture},{onSuccess:p=>{console.log(p),s("User Details Updated Successfully"),a()},onError:p=>{console.log("Error updating user profile info",p),t("Error while updating User Info!")}})});return f.useEffect(()=>{l&&r.setValues({displayName:l.name||"",picture:(l==null?void 0:l.picture)||null,desc:(l==null?void 0:l.desc)||null})},[l]),e.jsx(o,{children:e.jsxs("form",{onSubmit:r.handleSubmit,children:[e.jsxs(o,{display:"flex",flexDirection:"row",gap:"spacing-sm",alignItems:"center",margin:"spacing-xs spacing-none spacing-md spacing-none",children:[r.values.picture?e.jsx(o,{width:"90px",height:"90px",border:"border-sm solid stroke-tertiary",borderRadius:"radius-md",css:A`
                img {
                  border-radius: 16px;
                }
              `,children:e.jsx("img",{width:"100%",height:"100%",src:r.values.picture})}):e.jsx(o,{width:"75px",height:"75px",backgroundColor:"surface-tertiary",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"radius-sm",children:e.jsx(fe,{color:"icon-primary",size:25})}),e.jsx(D,{variant:"tertiary",size:"extraSmall",onClick:()=>c.open(),type:"button",children:"Change Avatar"})]}),c.isOpen&&e.jsx(Ee,{modalControl:c,formValues:r.values,setFieldValue:r.setFieldValue}),e.jsx(o,{display:"flex",flexDirection:"column",margin:"spacing-none spacing-none spacing-xl spacing-none",children:e.jsx(ie,{label:"Display Name",value:r.values.displayName,onChange:r.handleChange("displayName"),error:r.submitCount>0&&!r.values.displayName?!0:r.values.displayName.length>50,errorMessage:r.submitCount>0&&!r.values.displayName?"Display Name is required":r.values.displayName.length>50?"Display Name cannot exceed 50 characters":"",totalCount:50})}),e.jsx(o,{display:"flex",flexDirection:"column",margin:"spacing-none spacing-none spacing-xl spacing-none",children:e.jsx(ie,{label:"Bio",value:r.values.desc,onChange:r.handleChange("desc"),error:!!r.errors.desc,errorMessage:r.errors.desc?r.errors.desc:"",totalCount:150})}),e.jsx(D,{size:"small",loading:b,children:"Save Changes"})]})})},Ie=()=>{const{account:t,chainId:s}=U(),{subscriptionStatus:c,userSettings:j}=N(u=>u.channels),[d,l]=f.useState([]),[a,n]=f.useState(!0),b=R(),L=se(),r=()=>{b("/channels")},i=async u=>{const m=await _e({channel:u});if(m)return{channel:u,id:m.id,icon:m.icon,name:m.name,channel_settings:m.channel_settings}},p=async u=>{const m=await Promise.all(Object.keys(u).map(async _=>{const S=await i(_);if(S)return S}));l(m)};f.useEffect(()=>{t&&async function(){if(n(!0),Object.keys(c).length===0){const u=G(t,s),m=await Ce({userCaipAddress:u}),_={},S={};m.map(({channel:I,user_settings:k})=>{_[I]=!0,S[I]=k?JSON.parse(k):null}),L(ne(_)),L(re(S)),await p(_)}else await p(c);n(!1)}()},[t]);const w=f.useMemo(()=>Zt(j),[j]);return e.jsx(e.Fragment,{children:a?e.jsx(e.Fragment,{children:e.jsx(V,{children:e.jsx(Rt,{})})}):e.jsx(e.Fragment,{children:d.length>0?d.map((u,m)=>e.jsx(e.Fragment,{children:u&&e.jsxs(e.Fragment,{children:[e.jsxs(ke,{children:[e.jsxs(Pe,{children:[e.jsx($e,{src:u.icon}),e.jsx(Ne,{children:u.name})]}),e.jsx(dt,{userSetting:w[u.channel],centerOnMobile:!1,channelDetail:u,onSuccessOptout:()=>{l(_=>_.filter(S=>(S==null?void 0:S.id)!==u.id))},children:e.jsx(Oe,{})})]},u.id),m!==d.length-1&&e.jsx(Te,{})]})})):e.jsx(V,{children:e.jsx(Ft,{title:"No Channel Opt-ins",description:"Opt-in channels to manage your notification preferences",buttonTitle:"Go to Channels",onClick:r,showTopBorder:!1})})})})},ke=h.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px;
`,Pe=h.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,$e=h(le)`
  border: 1px solid ${t=>t.theme.default.borderColor};
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
  width: 28px;
  height: 28px;
`,Ne=h.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: normal;
  color: ${t=>t.theme.default.color};
`,Oe=h(oe)`
  background: transparent;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0px;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${t=>t.theme.default.color};
`,Te=h.span`
  background-color: ${t=>t.theme.default.borderColor};
  width: 100%;
  display: flex;
  height: 1px;
`,V=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`,Ae=()=>{const{account:t,isWalletConnected:s,connect:c,provider:j}=U(),d=pt(),[l,a]=f.useState(!1),[n,b]=f.useState(!1),[L,r]=f.useState(!1),[i,p]=f.useState(null),[w,u]=f.useState({enabled:!1,hrsLeft:0}),[m,_]=f.useState(!1),S="npm:@pushprotocol/snap";async function I(){if(!s){p("Connect your metamask wallet to install Snap"),_(!1);return}p("");const y=await window.ethereum.request({method:"wallet_getSnaps"});console.debug("Snaps installed",y),Object.keys(y).forEach(C=>{C=="npm:@pushprotocol/snap"&&_(!0)})}async function k(y){return await j.getSigner(y).signMessage(`Add address ${y} to receive notifications through Push Snap`)}async function P(){var y;try{await k(t)?t&&(await((y=window.ethereum)==null?void 0:y.request({method:"wallet_invokeSnap",params:{snapId:S,request:{method:"pushproto_addaddress",params:{address:t}}}})),console.debug("Added",t),b(!0)):console.error("Signature Validation Failed")}catch(C){p(C.message)}}async function H(){var C;const y=await((C=window.ethereum)==null?void 0:C.request({method:"wallet_invokeSnap",params:{snapId:S,request:{method:"pushproto_getaddresses"}}}));console.debug(t),y.includes(t)?(r(!0),b(!0)):r(!1)}f.useEffect(()=>{I(),H()},[t,s,m]);async function q(){var x;if(!s)return;let y=S,C={};await((x=window.ethereum)==null?void 0:x.request({method:"wallet_requestSnaps",params:{[y]:C}})),console.info("Snap Installed"),_(!0)}async function O(){if(!s){p("Connect your metamask wallet to install Snap");return}p(""),a(!0);try{s||await c(),m?await P():(await q(),I()),a(!1)}catch(y){a(!1),console.error("Error",y)}}const $=()=>{const{showModal:y,ModalComponent:C}=xt();return e.jsxs(Ue,{children:[e.jsx(C,{InnerComponent:gt,modalPadding:"0px",modalPosition:ut.ON_ROOT}),e.jsx(Z,{children:e.jsx(ce,{src:mt,width:"276px",height:"202px"})}),e.jsxs(Z,{gap:"24px",children:[e.jsxs(Z,{gap:"12px",children:[e.jsxs(Z,{children:[e.jsx(ft,{fontSize:"34px",fontWeight:"500",color:d.snapPrimaryText,letterSpacing:"normal",children:"Push Snap"}),e.jsx(K,{fontSize:"12px",fontWeight:"400",color:d.modalIconColor,children:"powered by MetaMask"})]}),e.jsx(Z,{children:e.jsx(K,{fontSize:"14px",fontWeight:"400",color:d.snapSecondaryText,children:"You\u2019re about to install Push Snap which allows you to receive notifications from Push directly on MetaMask!"})})]}),i&&e.jsx(B,{variant:"error",heading:i,showIcon:!0}),e.jsxs(o,{gap:"spacing-sm",display:"flex",flexDirection:"column",width:"-webkit-fill-available",children:[l&&!m?e.jsx(de,{type:pe.SEAMLESS,spinnerSize:44}):e.jsx(D,{disabled:!!m,onClick:()=>O(),variant:"primary",size:"large",children:m?"Step 1: Completed":"Step 1: Install Snap"}),l&&m?e.jsx(de,{type:pe.SEAMLESS,spinnerSize:44}):e.jsx(D,{disabled:!m,onClick:()=>O(),trailingIcon:e.jsx(Se,{height:24,width:24}),children:"Step 2: Sign In with Metamask"})]}),e.jsxs(Ze,{gap:"7px",onClick:y,children:[e.jsx(ce,{src:jt,width:16}),e.jsx(K,{color:d.modalIconColor,fontSize:"14px",fontWeight:"400",children:"About this Snap"})]})]})]})};return e.jsx(e.Fragment,{children:n?e.jsx(e.Fragment,{children:e.jsxs(o,{display:"flex",flexDirection:"column",padding:"spacing-none spacing-none spacing-none spacing-xxs",children:[e.jsx(g,{variant:"h4-semibold",children:"Push Snap Settings"}),e.jsx(ht,{snoozeDuration:w,setSnoozeDuration:u})]})}):e.jsx($,{})})},Ue=h(yt)`
  width: 438px;
  height: auto;
  border-radius: 32px;
  background: #fff;
  background: ${t=>t.theme.default.bg};
  margin: auto;
  @media ${M.mobileL} {
    width: 330px;
  }
`,Ze=h(bt)`
  cursor: pointer;
`,Be=({modalControl:t,pricingInfoList:s,pricingPlanStatus:c})=>{const{isOpen:j,onClose:d}=t,l=s==null?void 0:s.filter(n=>(n==null?void 0:n.id)==parseInt(c==null?void 0:c.pricing_plan_id))[0],a=ge(c);return e.jsx(ae,{size:"medium",isOpen:j,onClose:d,acceptButtonProps:{children:"Go Back",onClick:()=>{d()}},cancelButtonProps:{children:"Cancel Plan",onClick:()=>{console.log("cancel plan",l)}},children:e.jsxs(o,{width:"100%",children:[e.jsx(g,{variant:"h3-semibold",color:"text-primary",textAlign:"center",children:"We\u2019re sorry to see you go"}),e.jsxs(g,{variant:"bs-regular",color:"text-tertiary",textAlign:"center",children:["If you cancel you will be able to continue using Push ",l==null?void 0:l.name," features until"," ",a==null?void 0:a.expirationDate,". Once the billing term ends:"]}),e.jsx(o,{display:"flex",flexDirection:"column",margin:"spacing-md spacing-none",gap:"spacing-sm",children:qt(l==null?void 0:l.description).map(n=>e.jsxs(o,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"spacing-xxs",children:[e.jsx(Lt,{size:24,color:"icon-primary"}),e.jsx(g,{variant:"bs-regular",color:"text-primary",textAlign:"center",children:n})]}))})]})})},Fe=()=>{const t=ue(),{account:s,chainId:c}=U(),j=R(),d=G(s,c),{data:l}=wt(),{data:a}=he({channelId:d}),n=l==null?void 0:l.find(i=>(i==null?void 0:i.id)==St.toNumber(a!=null&&a.pricing_plan_id?a==null?void 0:a.pricing_plan_id:"1")),b=[{title:"Email Notification Delivery",subtitle:`${((a==null?void 0:a.email_total_quota)??0)-((a==null?void 0:a.email_quota_used)??0)} remaining`,progress:(a==null?void 0:a.email_quota_used)??0,max:(a==null?void 0:a.email_total_quota)??0},{title:"Telegram Notification Delivery",subtitle:`${((a==null?void 0:a.telegram_total_quota)??0)-((a==null?void 0:a.telegram_quota_used)??0)} remaining`,progress:(a==null?void 0:a.telegram_quota_used)??0,max:(a==null?void 0:a.telegram_total_quota)??0},{title:"Discord Notification Delivery",subtitle:`${((a==null?void 0:a.discord_total_quota)??0)-((a==null?void 0:a.discord_quota_used)??0)} remaining`,progress:(a==null?void 0:a.discord_quota_used)??0,max:(a==null?void 0:a.discord_total_quota)??0}],L=(n==null?void 0:n.id)==1,r=()=>{j("/pricing")};return e.jsxs(o,{width:"100%",children:[e.jsx(g,{variant:"bs-regular",color:"text-tertiary",children:"Take full control of your Push Notification plan, manage and stay up to date with your plan usage"}),a!=null&&a.pricing_plan_id?e.jsxs(o,{backgroundColor:"surface-secondary",margin:"spacing-lg spacing-none spacing-none spacing-none",padding:"spacing-md",borderRadius:"radius-md",children:[e.jsxs(o,{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",children:[e.jsxs(g,{variant:"h2-semibold",color:"text-primary",children:[n==null?void 0:n.name," Plan"]}),e.jsxs(g,{variant:"h2-semibold",color:"text-primary",children:["$",n==null?void 0:n.value,"/mo"]})]}),e.jsxs(o,{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",children:[e.jsx(g,{variant:"bm-regular",color:"text-tertiary",children:"For individuals"}),e.jsx(g,{variant:"bm-regular",color:"text-tertiary",children:"billed yearly"})]}),e.jsxs(o,{margin:"spacing-lg spacing-none spacing-none spacing-none",display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsx(D,{variant:"tertiary",size:"small",onClick:r,children:"Upgrade Plan"}),e.jsx(g,{variant:"bs-semibold",color:"text-primary",css:A`
                cursor: pointer;
              `,onClick:()=>t.open(),children:"Cancel Plan"})]})]}):e.jsxs(o,{backgroundColor:"surface-secondary",margin:"spacing-lg spacing-none spacing-none spacing-none",padding:"spacing-md",borderRadius:"radius-md",children:[e.jsx(o,{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",children:e.jsx(g,{variant:"h2-semibold",color:"text-primary",children:"Free Plan"})}),e.jsx(o,{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",children:e.jsx(g,{variant:"bm-regular",color:"text-tertiary",children:"For individuals"})}),e.jsx(o,{margin:"spacing-lg spacing-none spacing-none spacing-none",display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:e.jsx(D,{variant:"primary",size:"small",onClick:r,children:"Upgrade Plan"})})]}),e.jsxs(o,{margin:"spacing-xl spacing-none spacing-none spacing-none",children:[e.jsx(g,{variant:"h4-semibold",color:"text-primary",children:"Plan Usage"}),e.jsx(g,{variant:"bs-regular",color:"text-tertiary",children:"Keep track of usage in your current cycle"})]}),e.jsx(o,{margin:"spacing-lg spacing-none spacing-none spacing-none",display:"flex",flexDirection:{initial:"row",ml:"column"},width:"100%",justifyContent:"space-between",gap:"spacing-md",children:b==null?void 0:b.map(i=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing-xxs",width:"100%",children:[e.jsxs(o,{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",gap:"spacing-xxxs",children:[!L&&(i==null?void 0:i.progress)-(i==null?void 0:i.max)==0&&e.jsx(_t,{color:"icon-state-danger-bold"}),e.jsx(g,{color:"text-secondary",variant:"c-bold",children:i.title})]}),e.jsx(Ct,{progress:i==null?void 0:i.progress,max:i==null?void 0:i.max}),e.jsxs(o,{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",children:[e.jsx(g,{color:"text-secondary",variant:"c-regular",children:!L&&(i==null?void 0:i.progress)-(i==null?void 0:i.max)==0?"Limit reached":i.subtitle}),!L&&(i==null?void 0:i.progress)-(i==null?void 0:i.max)==0&&e.jsx(g,{color:"text-secondary",variant:"c-bold",onClick:r,css:A`
                    &: hover {
                      text-decoration: underline;
                      cursor: pointer;
                    }
                  `,children:"Upgrade Plan"})]})]}))}),t.isOpen&&e.jsx(Be,{modalControl:t,pricingInfoList:l,pricingPlanStatus:a})]})},ze=({item:t,isPending:s})=>e.jsxs(o,{display:"flex",margin:"spacing-sm spacing-none spacing-none spacing-none",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(o,{display:"flex",gap:"spacing-sm",alignItems:"center",children:[e.jsx(o,{padding:"spacing-xs",borderRadius:"radius-xs",border:"border-xs solid stroke-tertiary",children:t==null?void 0:t.icon()}),e.jsxs(o,{children:[e.jsx(g,{variant:"h5-semibold",color:"text-primary",children:t.itemTitle}),e.jsx(g,{variant:"bs-regular",color:"text-tertiary",children:t.itemDescription})]})]}),t.userStatus===null?e.jsx(D,{variant:"tertiary",size:"extraSmall",onClick:t==null?void 0:t.onClick,children:"Connect"}):e.jsx(vt,{isLoading:s,children:e.jsx(D,{variant:"secondary",size:"extraSmall",children:t==null?void 0:t.userStatus})})]}),Re=({setErrorMessage:t,setSuccessMessage:s})=>{const c=R(),[j,d]=f.useState(!0),{userPushSDKInstance:l}=N(u=>u.user),{socialHandlesList:a,modalControl:n,telegramModalControl:b,discordModalControl:L,isPending:r,fetchStatus:i,channelAddress:p}=Jt(t,!0,l);f.useEffect(()=>{!l||!p||i()},[l,p]),f.useEffect(()=>{d(l&&(l==null?void 0:l.readmode()))},[l]);const w=()=>{d(!1),c(Mt.WelcomeDashboard)};return e.jsxs(o,{children:[e.jsxs(o,{children:[e.jsx(g,{variant:"h4-semibold",color:"text-primary",children:"Get Notified Anywhere"}),e.jsx(g,{variant:"bs-regular",color:"text-tertiary",children:"Connects apps and receive notifications directly in your Email, Telegram and Discord"})]}),e.jsx(o,{padding:"spacing-sm spacing-none spacing-none spacing-none",children:a==null?void 0:a.map(u=>e.jsx(ze,{item:u,isPending:r}))}),j&&e.jsx(o,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:A`
            z-index: 99999;
          `,children:e.jsx(Kt,{type:Vt.MODAL,showConnectModal:!0,onClose:w,description:"Unlock your profile to proceed."})}),n.isOpen&&e.jsx(Yt,{modalControl:n,refetchSocialHandleStatus:i,setErrorMessage:t,setSuccessMessage:s}),b.isOpen&&e.jsx(Xt,{modalControl:b,refetchSocialHandleStatus:i,setErrorMessage:t,setSuccessMessage:s}),L.isOpen&&e.jsx(Qt,{modalControl:L,refetchSocialHandleStatus:i,setErrorMessage:t,setSuccessMessage:s})]})};function He(){var y,C;const t=Et(800),{account:s,chainId:c}=U(),j=G(s,c),{userPushSDKInstance:d}=N(x=>x.user),{subscriptionStatus:l,userSettings:a}=N(x=>x.channels),[n,b]=f.useState(0),[L,r]=f.useState([]),[i,p]=f.useState(!0),[w,u]=f.useState(""),[m,_]=f.useState(""),S=R(),I=se(),{data:k}=he({channelId:j}),P=ge(k??null),H=()=>{S("/pricing")},q=async x=>{const v=await d.channel.info(x);if(v)return{channel:x,id:v.id,icon:v.icon,name:v.name,channel_settings:v.channel_settings}},O=async x=>{const v=[];await Promise.all(Object.keys(x).map(async z=>{const T=await q(z);T&&v.push(T)})),r(v)};f.useEffect(()=>{!s||!d||async function(){if(p(!0),Object.keys(l).length===0){const x=await d.notification.subscriptions(),v={},z={};x.map(({channel:T,user_settings:te})=>{v[T]=!0,z[T]=te?JSON.parse(te):null}),I(ne(v)),I(re(z)),await O(v)}else await O(l);p(!1)}()},[s,d]);const $=[{value:0,label:"My Profile",title:"Your Profile",section:"top"},{value:1,label:"Notification Settings",title:"Notification Settings",section:"top"},{value:2,label:"Push Snap",title:"",section:"top"},{value:3,label:"Plan & Billing",title:"Plan & Billing",section:"bottom"}];return e.jsxs(qe,{children:[e.jsx(Ge,{children:"Settings"}),e.jsx(Ke,{children:"Customize your Push profile or manage your notification preferences"}),e.jsxs(Ve,{children:[e.jsxs(We,{children:[$.filter(x=>x.section==="top").map(x=>e.jsx(W,{onClick:()=>b(x.value),isSelected:x.value===n,children:x.label},x.value)),!t&&e.jsx(o,{margin:"spacing-lg spacing-none spacing-none spacing-none",children:e.jsx(g,{variant:"os-regular",color:"text-tertiary",children:"Developers"})}),$.filter(x=>x.section==="bottom").map(x=>e.jsx(W,{onClick:()=>b(x.value),isSelected:x.value===n,children:x.label},x.value))]}),e.jsxs(Je,{children:[n===0&&e.jsxs(e.Fragment,{children:[m&&e.jsx(o,{margin:"spacing-sm spacing-none spacing-none spacing-none",children:e.jsx(B,{variant:"success",heading:m})}),w&&e.jsx(o,{margin:"spacing-sm spacing-none spacing-none spacing-none",children:e.jsx(B,{variant:"error",heading:w})})]}),n===3&&k==null&&e.jsx(B,{showIcon:!1,heading:"Go Pro for $11.99/mo and unlock access to more features",onAction:()=>H(),actionText:"Upgrade Plan",variant:"basic"}),n===3&&k!=null&&!(P!=null&&P.isExpired)&&e.jsx(B,{showIcon:!0,heading:`Your Pro plan is active until ${P==null?void 0:P.expirationDate}`,variant:"basic"}),e.jsx(J,{children:e.jsxs(Y,{selectedOption:n,children:[((y=$[n])==null?void 0:y.title)&&e.jsx(Ye,{bottomSpacing:n!=2,children:(C=$[n])==null?void 0:C.title}),n===0&&e.jsx(De,{errorMessage:w,setErrorMessage:u,successMessage:m,setSuccessMessage:_}),n===1&&e.jsx(Ie,{}),n===2&&e.jsx(Ae,{}),n===3&&e.jsx(Fe,{})]})}),n==0&&e.jsx(J,{children:e.jsx(Y,{selectedOption:n,children:e.jsx(Re,{errorMessage:w,setErrorMessage:u,successMessage:m,setSuccessMessage:_})})})]})]})]})}const qe=h.div`
  padding: 32px 24px;
  flex: 1;
  height: 100%;
  overflow: hidden;

  @media ${M.tablet} {
    padding: 24px 12px;
  }
`,Ge=h.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 45px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.color};

  @media ${M.tablet} {
    text-align: center;
    margin-top: 24px;
  }
`,Ke=h.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.secondaryColor};
  margin-bottom: 40px;

  @media ${M.tablet} {
    text-align: center;
    margin-bottom: 8px;
  }
`,Ve=h.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 100%;
  flex: 1;
  min-height: 0;

  @media ${M.tablet} {
    flex-direction: column;
  }
`,We=h.div`
  display: flex;
  flex-direction: column;
  margin-right: 42px;

  @media ${M.tablet} {
    margin-right: 0px;
    flex-direction: row;
    overflow-x: scroll;
    justify-content: center;
  }
`,W=h(Dt)`
  background-color: ${t=>t.isSelected?t.theme.default.secondaryBg:"transparent"};
  color: ${t=>t.theme.default.secondaryColor};
  border-radius: 12px;
  width: 100%;
  padding: 14px;
  margin: 10px 0px;
  justify-content: flex-start;

  &:hover:after {
    background-color: ${t=>t.theme.default.secondaryBg};
  }

  @media ${M.tablet} {
    padding: 12px;
    max-width: fit-content;
  }
`,J=h.div`
  border: 1px solid ${t=>t.theme.userSettingsBorder};
  padding: 12px;
  border-radius: 24px;

  @media ${M.tablet} {
    margin: 8px 0px;
    padding: 12px 6px;
  }
`,Je=h.div`
  overflow: hidden;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  height: auto;
  flex-grow: 1;
  min-height: 0;
  gap: 16px;
  padding-right: 12px;
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    background-color: transparent;
    position: absolute;
    right: 10px;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 4px;
    position: absolute;
    right: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d53a94;
    border-radius: 99px;
    width: 4px;
    position: absolute;
    right: 10px;
  }

  // Adding margin-bottom to the last child
  & > *:last-child {
    margin-bottom: 100px;
  }
`,Y=h.div`
  overflow-y: ${t=>t.selectedOption===3?"none":"auto"};
  height: ${t=>t.selectedOption===0||t.selectedOption===3?"auto":"55vh"};

  padding: 12px;

  &::-webkit-scrollbar-track {
    background-color: transparent;
    position: absolute;
    right: 10px;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 4px;
    position: absolute;
    right: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d53a94;
    border-radius: 99px;
    width: 4px;
    position: absolute;
    right: 10px;
  }

  @media ${M.tablet} {
    margin: 8px 0px;
    padding: 12px 6px;
  }
`,Ye=h.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: ${t=>t.bottomSpacing?"20px":"0px"};
  color: ${t=>t.theme.default.color};

  @media ${M.tablet} {
    text-align: center;
  }
`;h.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px;
`,h(le)`
  border: 1px solid ${t=>t.theme.default.borderColor};
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
  width: 28px;
  height: 28px;
`,h.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: normal;
  color: ${t=>t.theme.default.color};
`,h.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,h.span`
  background-color: ${t=>t.theme.default.borderColor};
  width: 100%;
  display: flex;
  height: 1px;
`,h(oe)`
  background: transparent;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0px;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${t=>t.theme.default.color};
`,h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;let X,Q,ee;X=()=>e.jsx(Q,{children:e.jsx(He,{})}),Q=h.div`
	align-items: stretch;
	align-self: stretch;
  flex: 1;
	background: ${t=>t.theme.default.bg};
	border-radius: ${E.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${E.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${E.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  height: calc(100vh - ${E.CONSTANTS.HEADER_HEIGHT}px - ${F.MINI_MODULES.DESKTOP.TOP} - ${F.MINI_MODULES.DESKTOP.BOTTOM});
  
  @media ${M.laptop} {
    margin: ${E.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(100vh - ${E.CONSTANTS.HEADER_HEIGHT}px - ${F.MINI_MODULES.TABLET.TOP} - ${F.MINI_MODULES.TABLET.BOTTOM});
  }

  @media ${M.mobileL} {
    margin: ${E.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    height: calc(100vh - ${E.CONSTANTS.HEADER_HEIGHT}px - ${F.MINI_MODULES.MOBILE.TOP});
    border: ${E.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${E.ADJUSTMENTS.RADIUS.LARGE} ${E.ADJUSTMENTS.RADIUS.LARGE} 0 0;
`,me=()=>e.jsx(ee,{children:e.jsx(X,{})}),ee=h(It)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{na as __tla,me as default};
