import{d_ as t,el as fe,g1 as be,h9 as je,dV as P,d$ as l,e2 as x,ep as T,em as we,ha as le,g_ as Se,h0 as ye,h1 as se,h2 as Ce,hb as ve,gX as Ne,dW as oe,eU as ke,gY as Ve,dY as Re,dX as j,gt as _e,dZ as q,fD as De,g3 as Me,e9 as Ee,gu as V,gV as Le,gW as Pe,e3 as Te,gN as ue,f$ as Ie,gF as Ae,__tla as Fe}from"./index-CHLbB0dT.js";import{C as Oe,__tla as qe}from"./ContentLayout-BzqZ5MOq.js";import{u as ze,__tla as He}from"./useDisclosure-ykfSaqAa.js";import{C as Ue,__tla as We}from"./ChannelDashboardNullState-0sgqVuqD.js";import{A as Be,__tla as $e}from"./Add-0zsMZPuM.js";import{u as Ke,S as Je,g as Xe,a as Ye,__tla as Ze}from"./StakingVariant-DSHyzxQ4.js";import{c as Ge,a as Qe,d as z,e as p,f as de,u as et,F as tt,b as it,__tla as nt}from"./index.esm-iCFxM4ON.js";import{g as N,c as _,d as H}from"./Common.form-Ds5bAxK4.js";let ge,at=Promise.all([(()=>{try{return Fe}catch{}})(),(()=>{try{return qe}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return We}catch{}})(),(()=>{try{return $e}catch{}})(),(()=>{try{return Ze}catch{}})(),(()=>{try{return nt}catch{}})()]).then(async()=>{const ce=e=>{const{svgProps:i,...a}=e;return t.jsx(fe,{componentName:"Pencil",icon:t.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[t.jsx("path",{d:"M8.47489 20.25H4.46739C4.27712 20.25 4.09465 20.1744 3.96012 20.0399C3.82558 19.9053 3.75 19.7229 3.75 19.5326V15.5251C3.75009 15.3351 3.82555 15.1529 3.95984 15.0185L15.0183 3.95995C15.1529 3.82552 15.3353 3.75 15.5254 3.75C15.7156 3.75 15.898 3.82552 16.0325 3.95995L20.04 7.96476C20.1745 8.09928 20.25 8.28168 20.25 8.47186C20.25 8.66204 20.1745 8.84444 20.04 8.97896L8.98154 20.0402C8.84711 20.1744 8.66489 20.2499 8.47489 20.25Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),t.jsx("path",{d:"M12.3589 6.61963L17.3806 11.6413",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),...a})},pe=async({userPushSDKInstance:e,settings:i})=>await e.channel.setting(i),me=()=>be({mutationKey:[je],mutationFn:pe}),U={type:1,default:0,description:"",index:0};function W(e,i){if(e===i)return!0;if(typeof e!="object"||typeof i!="object")return!1;const a=Object.keys(e),n=Object.keys(i);return a.length!==n.length?!1:a.every(r=>W(e[r],i[r]))}let B,$,K,E,J,X,Y,Z,L,G,Q,ee,te,ie,ne,ae,re;B=({modalControl:e,setSettingsToEdit:i})=>{const{open:a}=e,{isWalletConnected:n,connect:r}=P(),d=()=>n?a():r();return t.jsxs(l,{display:"flex",alignItems:"flex-start",justifyContent:"space-between",width:"100%",children:[t.jsxs(l,{children:[t.jsx(x,{variant:"h4-semibold",color:"text-primary",children:"Notification Settings"}),t.jsx(x,{variant:"bs-regular",color:"text-tertiary",children:"Add, Edit or Remove Notification Settings"})]}),t.jsx(T,{size:"extraSmall",variant:"tertiary",leadingIcon:t.jsx(Be,{}),onClick:()=>{i(U),d()},children:"Add Setting"})]})},$=({setting:e,modalControl:i,loadingSettings:a,setSettingsToEdit:n,handleDeleteSetting:r})=>{const{open:d}=i;return t.jsxs(l,{display:"flex",width:"100%",padding:"spacing-sm spacing-none",justifyContent:"space-between",children:[t.jsx(we,{isLoading:a,height:"20px",width:"100px",children:t.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%",gap:"spacing-xxs",children:[t.jsx(x,{variant:"bs-regular",color:"text-primary",children:e.description}),e.type==2&&t.jsx(le,{children:"Range"}),e.type==3&&t.jsx(le,{children:"Multi-Range"})]})}),t.jsx(Se,{overlay:t.jsxs(ye,{children:[t.jsx(se,{label:"Edit",icon:t.jsx(ce,{size:24}),onClick:()=>{n(e),d()}}),t.jsx(se,{label:"Remove",icon:t.jsx(Ce,{size:24}),onClick:()=>{r(e)}})]}),children:t.jsx(l,{cursor:"pointer",children:t.jsx(ve,{})})})]})},K=({newSettings:e,loadingSettings:i,modalControl:a,setSettingsToEdit:n,handleDeleteSetting:r,handleSettingsChange:d})=>t.jsx(l,{width:"100%",display:"flex",flexDirection:"column",children:e.map((y,C)=>t.jsxs(l,{children:[t.jsx($,{loadingSettings:i,setting:y,modalControl:a,setSettingsToEdit:n,handleDeleteSetting:r,handleSettingsChange:d}),t.jsx(Ne,{})]},C))}),E=50,J=({newSettings:e,channelSettings:i})=>{const a=oe(),{account:n,provider:r,wallet:d,isWalletConnected:y,connect:C}=P(),{userPushSDKInstance:w}=ke(c=>c.user),{handleConnectWalletAndEnableProfile:S}=Ve(),{refetchChannelDetails:o}=Re(),[f,s]=j.useState(0),[m,b]=j.useState(""),[v,k]=j.useState(0),R=async()=>{const c=await Xe({address:n,provider:r});k(c)},D=async()=>{const c=await Ye({address:n,provider:r,contractAddress:De.epnscore});s(parseInt(c))};j.useEffect(()=>{!n||!r||(D(),R())},[n,r]);const{mutate:I,isPending:M}=Ke(),A=async()=>{if(!r)return;if(!y){C();return}b("");const c=r.getSigner(n),u=Me((E-f).toString(),18);I({noOfTokenToApprove:u,signer:c},{onSuccess:()=>{D()},onError:g=>{console.log("Error in Approving PUSH",g),g.code=="ACTION_REJECTED"?b("User rejected signature. Please try again."):b("Error in approving PUSH Tokens")}})},{mutate:F,isPending:O}=me(),he=async()=>{let c=w;if(!c.signer&&(c=await S({wallet:d}),!c))return;b("");const u=e.map(g=>g.type===1?{type:g.type,description:g.description,default:g.default?1:0}:{type:g.type,description:g.description,default:g.default,data:{lower:g.lowerLimit,upper:g.upperLimit,ticker:g.ticker,enabled:g.enabled}});F({userPushSDKInstance:c,settings:u},{onSuccess:g=>{g.transactionHash&&(o(),a(`${q.ChannelDashboard(n)}`))},onError:g=>{console.log("Error in adding setting",g),b("Error in saving settings. Please try again later")}})},xe=j.useMemo(()=>{if(!i)return!1;if(e.length!==i.length)return!0;let c=!1;return e.forEach((u,g)=>{const h=i[g];if(u.type!==h.type){c=!0;return}if(u.type===1&&(u.description!==h.description||u.default!==h.default)){c=!0;return}if(u.type===2&&(u.description!==h.description||u.default!==h.default||u.enabled!==h.enabled||u.lowerLimit!==h.lowerLimit||u.upperLimit!==h.upperLimit||u.ticker!==h.ticker)){c=!0;return}if(u.type===3&&(u.description!==h.description||!W(u.default,h.default)||u.enabled!==h.enabled||u.lowerLimit!==h.lowerLimit||u.upperLimit!==h.upperLimit||u.ticker!==h.ticker)){c=!0;return}}),c},[e,i]);return t.jsxs(l,{width:"100%",gap:"spacing-md",display:"flex",flexDirection:"column",children:[m&&t.jsx(_e,{heading:m,variant:"error"}),t.jsx(Je,{title:"Modify Setting Fee",description:"Make sure all settings are ready before proceeding to the next step",fees:E,pushApprovalAmount:f,showBalance:!0,balance:v,setBalance:k}),t.jsxs(l,{display:"flex",justifyContent:{initial:"end",ml:"center"},gap:"spacing-xs",children:[t.jsx(T,{variant:"outline",onClick:()=>a(`${q.ChannelDashboard(n)}`),children:"Cancel"}),f>=E?t.jsx(T,{onClick:he,disabled:O||!xe,loading:O,children:O?"Saving":"Save Settings"}):t.jsx(T,{onClick:A,disabled:M,loading:M,children:M?"Approving":"Approve PUSH"})]})]})},X=e=>({settingName:e.description,isDefault:e.type===1?typeof e.default=="boolean"?e.default:!0:e.enabled,enableRange:e.type!==1,rangelowerlimit:e.lowerLimit?e.lowerLimit:0,rangeupperlimit:e.upperLimit?e.upperLimit:0,enableMultiRange:e.type===3,defaultValue:typeof e.default=="number"?e.default:0,multirangelowerlimit:typeof e.default=="object"?e.default.lower:0,multirangeupperlimit:typeof e.default=="object"?e.default.upper:0,sliderStepValue:e.ticker?e.ticker:0}),Y=Ge().shape({settingName:Qe().required(N("Setting Name")),isDefault:z(),enableRange:z(),rangelowerlimit:p().when("enableRange",{is:!0,then:()=>p().min(1,_(1)).required(N("Range")),otherwise:()=>p()}),rangeupperlimit:p().when("enableRange",{is:!0,then:()=>p().min(de("rangelowerlimit"),_("Lower limit")).required(N("Range")),otherwise:()=>p()}),enableMultiRange:z().required(N("")),multirangelowerlimit:p().when(["enableMultiRange","enableRange"],{is:(e,i)=>e&&i,then:()=>p().min(1,_(1)).required(N("Range")).test("is-multi-range-within-range",H("Multi-range lower limit"),(e,i)=>{const{rangelowerlimit:a,rangeupperlimit:n}=i.parent;return e>=a&&e<n}),otherwise:()=>p()}),multirangeupperlimit:p().when(["enableMultiRange","enableRange"],{is:(e,i)=>e&&i,then:()=>p().min(de("multirangelowerlimit"),_("Lower limit")).required(N("Range")).test("is-multi-range-upper-within-range",H("Multi-range upper limit"),(e,i)=>{const{rangelowerlimit:a,rangeupperlimit:n}=i.parent;return e>a&&e<=n}),otherwise:()=>p()}),defaultValue:p().when(["enableMultiRange","enableRange"],{is:(e,i)=>!e&&i,then:()=>p().min(0,_(0)).required(N("Default Value")).test("is-within-range",H("Default value"),(e,i)=>{const{rangelowerlimit:a,rangeupperlimit:n}=i.parent;return e>=a&&e<=n}),otherwise:()=>p()}),sliderStepValue:p().when("enableRange",{is:!0,then:()=>p().min(1,_(1)).required(N("Slider Step")).test("is-step-value-valid","Slider step value must not exceed the range limits.",(e,i)=>{const{rangeupperlimit:a}=i.parent;return e<a}),otherwise:()=>p()})}),Z=({children:e,initialValue:i,onSubmit:a})=>{const n=X(i),r=et({initialValues:n,enableReinitialize:!0,validationSchema:Y,onSubmit:a});return t.jsx(tt,{value:r,children:e})},L=()=>{const e=it();if(!e)throw new Error("useEditNotificationSettingsForm must be used within a EditNotificationSettingsFormProvider");return e},G=({checked:e,onChange:i})=>t.jsx(Q,{id:"Checkbox-switch",type:"checkbox",checked:e,onChange:i}),Q=Ee.input`
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 16px;
  height: 20px;

  /* Change the color of the checkbox */
  &:checked {
    accent-color: #C742DD;
  }
`,ee=()=>{const{values:e,handleChange:i,setFieldValue:a,errors:n,touched:r}=L(),d=j.useMemo(()=>{const{rangelowerlimit:s,rangeupperlimit:m,enableMultiRange:b,multirangelowerlimit:v,multirangeupperlimit:k,defaultValue:R,sliderStepValue:D}=e,I=Number(s)>0&&Number(m)>0,M=Number(D)>0&&Number(D)<=Number(m)-Number(s),A=!b&&Number(R)>=Number(s)&&Number(R)<=Number(m),F=b&&Number(v)>=Number(s)&&Number(k)<=Number(m)&&Number(k)>Number(v);return I&&M&&(F||A)},[e]),[y,C]=j.useState(e.defaultValue),[w,S]=j.useState(e.multirangelowerlimit),[o,f]=j.useState(e.multirangeupperlimit);return t.jsxs(t.Fragment,{children:[t.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing-xxs",children:[t.jsx(x,{variant:"h6-bold",children:"Range Values"}),t.jsxs(l,{display:"flex",gap:"spacing-xxs",width:"100%",alignItems:"baseline",children:[t.jsx(V,{placeholder:"e.g.0",type:"number",value:e.rangelowerlimit,onChange:i("rangelowerlimit"),error:r.rangelowerlimit&&!!n.rangelowerlimit,errorMessage:r.rangelowerlimit?n.rangelowerlimit:""}),t.jsx(x,{variant:"bm-regular",children:"to"}),t.jsx(V,{placeholder:"e.g.10",type:"number",value:e.rangeupperlimit,onChange:s=>{a("rangeupperlimit",s.target.value)},error:r.rangeupperlimit&&!!n.rangeupperlimit,errorMessage:r.rangeupperlimit?n.rangeupperlimit:""})]})]}),t.jsxs(l,{display:"flex",gap:"spacing-xxs",children:[t.jsx(G,{checked:e.enableMultiRange,onChange:()=>a("enableMultiRange",!e.enableMultiRange)}),t.jsxs(l,{children:[t.jsx(x,{ellipsis:!0,variant:"h6-bold",children:"Enable Multi Range"}),t.jsx(x,{variant:"bes-regular",children:"User can select a range of values in the slider"})]})]}),!e.enableMultiRange&&t.jsx(V,{placeholder:"e.g.0",type:"number",value:e.defaultValue,onChange:s=>{C(Number(s.target.value)),a("defaultValue",s.target.value)},label:"Default Value",error:r.defaultValue&&!!n.defaultValue,errorMessage:r.defaultValue?n.defaultValue:""}),e.enableMultiRange&&t.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing-xxs",children:[t.jsx(x,{variant:"h6-bold",children:"Range Values"}),t.jsxs(l,{display:"flex",gap:"spacing-xxs",width:"100%",alignItems:"baseline",children:[t.jsx(V,{placeholder:"e.g.0",type:"number",value:e.multirangelowerlimit,onChange:s=>{a("multirangelowerlimit",s.target.value),S(Number(s.target.value))},error:r.multirangelowerlimit&&!!n.multirangelowerlimit,errorMessage:r.multirangelowerlimit?n.multirangelowerlimit:""}),t.jsx(x,{variant:"bm-regular",children:"to"}),t.jsx(V,{placeholder:"e.g.10",type:"number",value:e.multirangeupperlimit,onChange:s=>{a("multirangeupperlimit",s.target.value),f(Number(s.target.value))},error:r.multirangeupperlimit&&!!n.multirangeupperlimit,errorMessage:r.multirangeupperlimit?n.multirangeupperlimit:""})]})]}),t.jsx(l,{children:t.jsx(V,{placeholder:"e.g.0",type:"number",value:e.sliderStepValue,onChange:i("sliderStepValue"),label:"Slider Step Value",error:r.sliderStepValue&&!!n.sliderStepValue,errorMessage:r.sliderStepValue?n.sliderStepValue:""})}),d&&t.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing-xxs",children:[t.jsx(l,{children:"Preview"}),!e.enableMultiRange&&t.jsxs(l,{display:"flex",gap:"spacing-xxs",alignItems:"center",children:[t.jsx(l,{children:e.rangelowerlimit}),t.jsx(l,{width:"100%",children:t.jsx(Le,{val:y,min:Number(e.rangelowerlimit),max:Number(e.rangeupperlimit),step:Number(e.sliderStepValue),defaultVal:Number(e.defaultValue),onChange:({x:s})=>{C(s)},preview:!0})}),t.jsx(l,{children:e.rangeupperlimit})]}),e.enableMultiRange&&t.jsxs(l,{display:"flex",gap:"spacing-xxs",alignItems:"center",backgroundColor:"surface-secondary",padding:"spacing-xs",borderRadius:"radius-xxs",children:[t.jsx(l,{children:e.rangelowerlimit}),t.jsx(l,{width:"100%",children:t.jsx(Pe,{startVal:w,endVal:o,min:Number(e.rangelowerlimit),max:Number(e.rangeupperlimit),step:Number(e.sliderStepValue),defaultStartVal:Number(e.multirangelowerlimit),defaultEndVal:Number(e.multirangeupperlimit),onChange:({startVal:s,endVal:m})=>{S(s),f(m)},preview:!0})}),t.jsx(l,{children:e.rangeupperlimit})]})]})]})},te=()=>{const{values:e,handleChange:i,touched:a,errors:n,setFieldValue:r}=L();return t.jsx(l,{width:"100%",children:t.jsx("form",{onSubmit:()=>{},children:t.jsxs(l,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",gap:"spacing-md",children:[t.jsx(x,{textAlign:"center",variant:"h4-semibold",children:"Add a Setting"}),t.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing-md",padding:"spacing-xxs spacing-xs",width:"-webkit-fill-available",maxHeight:{initial:"60vh",ml:"45vh"},css:Te`
              overflow-y: scroll;
            `,customScrollbar:!0,children:[t.jsx(V,{placeholder:"e.g. Announcements",label:"Setting Name",totalCount:50,value:e.settingName,onChange:i("settingName"),error:a.settingName&&!!n.settingName,errorMessage:a.settingName?n.settingName:""}),t.jsxs(l,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[t.jsxs(l,{children:[t.jsx(x,{ellipsis:!0,variant:"h6-bold",children:"Set as Default"}),t.jsx(x,{variant:"bes-regular",children:"Setting on for users by default"})]}),t.jsx(ue,{leadingToggle:!1,checked:e.isDefault,onCheckedChange:d=>r("isDefault",d)})]}),t.jsxs(l,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[t.jsxs(l,{children:[t.jsx(x,{ellipsis:!0,variant:"h6-bold",children:"Range"}),t.jsx(x,{variant:"bes-regular",children:"Set a range for this setting e.g. 1-10"})]}),t.jsx(ue,{leadingToggle:!1,checked:e.enableRange,onCheckedChange:d=>r("enableRange",d)})]}),e.enableRange&&t.jsx(ee,{})]})]})})})},ie=({isOpen:e,onClose:i,settingsToEdit:a,handleSettingsChange:n})=>{const{values:r,validateForm:d,setTouched:y,dirty:C,resetForm:w}=L(),S=async o=>{if(y({settingName:!0,defaultValue:!0,rangelowerlimit:!0,rangeupperlimit:!0,multirangelowerlimit:!0,multirangeupperlimit:!0,sliderStepValue:!0,enableRange:!0,enableMultiRange:!0,isDefault:!0}),C){const m=await d();if(Object.keys(m).length>0)return}const f=a.index!==0?a.index:Math.floor(Math.random()*1e6),s=o.enableRange?o.enableMultiRange?{type:3,default:{lower:Number(o.multirangelowerlimit),upper:Number(o.multirangeupperlimit)},enabled:o.isDefault,description:o.settingName,lowerLimit:Number(o.rangelowerlimit),upperLimit:Number(o.rangeupperlimit),ticker:Number(o.sliderStepValue),index:f}:{type:2,default:Number(o.defaultValue),enabled:o.isDefault,description:o.settingName,lowerLimit:Number(o.rangelowerlimit),upperLimit:Number(o.rangeupperlimit),ticker:Number(o.sliderStepValue),index:f}:{type:1,default:o.isDefault,description:o.settingName,index:f};n(s),w(),i()};return t.jsx(Ie,{isOpen:e,onClose:i,acceptButtonProps:{children:"Save Settings",onClick:()=>{S(r)}},cancelButtonProps:{children:"Cancel"},children:t.jsx(te,{onClose:i})})},ne=({modalControl:e,settingsToEdit:i,handleSettingsChange:a})=>{const{isOpen:n,onClose:r}=e;return t.jsx(Z,{initialValue:i,onSubmit:d=>{},children:t.jsx(ie,{isOpen:n,onClose:r,settingsToEdit:i,handleSettingsChange:a})})},ae=({modalControl:e,channelSettings:i,loadingSettings:a})=>{const{open:n}=e,{isWalletConnected:r,connect:d}=P(),[y,C]=j.useState(U),[w,S]=j.useState([]);j.useEffect(()=>{i&&!a&&S(i)},[a]);const o=m=>{S(b=>b.filter(v=>v.index!==m.index))},f=m=>{const b=w.findIndex(v=>v.index===m.index);if(b===-1)S([...w,m]);else{const v=w.map((k,R)=>R===b?{...m}:k);S(v)}},s=()=>r?n():d();return t.jsxs(t.Fragment,{children:[t.jsx(B,{modalControl:e,setSettingsToEdit:C}),w.length>0?t.jsx(K,{newSettings:w,modalControl:e,setSettingsToEdit:C,loadingSettings:a,handleDeleteSetting:o,handleSettingsChange:f}):t.jsx(Ue,{state:"notificationSettings",title:"No settings yet",subTitle:"Add options for users to customize notifications.",onClick:s}),t.jsx(ne,{modalControl:e,settingsToEdit:y,setNewSettings:S,handleSettingsChange:f}),t.jsx(J,{newSettings:w,channelSettings:i})]})},re=()=>{const{account:e}=P(),i=ze(),a=oe(),{data:n,isLoading:r}=Ae(e),d=(n==null?void 0:n.channel_settings)??"",y=r?Array(3).fill(0):d?JSON.parse(d):[];return j.useEffect(()=>{!n&&!r&&a(`${q.Channels}`)},[n]),t.jsx(l,{display:"flex",padding:{initial:"spacing-lg",ml:"spacing-md"},flexDirection:"column",gap:"spacing-md",width:{ml:"357px",initial:"800px"},alignItems:"center",borderRadius:"radius-md",backgroundColor:"surface-primary",children:t.jsx(ae,{modalControl:i,channelSettings:y,loadingSettings:r})})},ge=()=>t.jsx(Oe,{children:t.jsx(re,{})})});export{at as __tla,ge as default};
