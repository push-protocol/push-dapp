import{e1 as t,el as le,d_ as h,hz as we,dY as P,e2 as l,ek as f,eo as T,em as Ce,hA as se,hf as Se,hk as ye,hl as oe,hd as ve,dZ as ue,fh as Ne,he as ke,d$ as _e,h5 as Ve,e0 as q,fJ as Re,f$ as Me,ea as De,g_ as _,hb as Ee,hc as Le,ej as Pe,gZ as de,ge as Te,gQ as Ae,__tla as Ie}from"./index-CtHIn1vx.js";import{C as Fe,__tla as Oe}from"./ContentLayout-BtaXPb0p.js";import{C as qe,__tla as ze}from"./ChannelDashboardNullState-C7QXLoPS.js";import{A as Be,__tla as He}from"./Add-BhA0kGYZ.js";import{O as Ze,__tla as Ke}from"./OptOut-iXGeuZKj.js";import{u as Ue,S as $e,g as We,a as Je,__tla as Qe}from"./StakingVariant-BcJ8WuJ4.js";import{u as Ye,__tla as Ge}from"./useMutation-BqhsEu0q.js";import{c as Xe,a as et,d as z,e as p,f as ce,u as tt,F as it,b as nt,__tla as at}from"./index.esm-BlmNhcHk.js";import{g as N,c as R,d as B}from"./Common.form-Ds5bAxK4.js";let ge,rt=Promise.all([(()=>{try{return Ie}catch{}})(),(()=>{try{return Oe}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return Qe}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return at}catch{}})()]).then(async()=>{const pe=e=>{const{svgProps:i,...a}=e;return t.jsx(le,{componentName:"KebabMenuVertical",icon:t.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[t.jsxs("g",{"clip-path":"url(#clip0_372_37265)",children:[t.jsx("path",{d:"M16 9.00001C17.3807 9.00001 18.5 7.88072 18.5 6.5C18.5 5.11929 17.3807 4 16 4C14.6193 4 13.5 5.11929 13.5 6.5C13.5 7.88072 14.6193 9.00001 16 9.00001Z",fill:"currentColor"}),t.jsx("path",{d:"M16 18.5C17.3807 18.5 18.5 17.3807 18.5 16C18.5 14.6193 17.3807 13.5 16 13.5C14.6193 13.5 13.5 14.6193 13.5 16C13.5 17.3807 14.6193 18.5 16 18.5Z",fill:"currentColor"}),t.jsx("path",{d:"M16 28C17.3807 28 18.5 26.8807 18.5 25.5C18.5 24.1193 17.3807 23 16 23C14.6193 23 13.5 24.1193 13.5 25.5C13.5 26.8807 14.6193 28 16 28Z",fill:"currentColor"})]}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_372_37265",children:t.jsx("rect",{width:"32",height:"32",fill:"white"})})})]}),...a})},me=e=>{const{svgProps:i,...a}=e;return t.jsx(le,{componentName:"Pencil",icon:t.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[t.jsx("path",{d:"M8.47489 20.25H4.46739C4.27712 20.25 4.09465 20.1744 3.96012 20.0399C3.82558 19.9053 3.75 19.7229 3.75 19.5326V15.5251C3.75009 15.3351 3.82555 15.1529 3.95984 15.0185L15.0183 3.95995C15.1529 3.82552 15.3353 3.75 15.5254 3.75C15.7156 3.75 15.898 3.82552 16.0325 3.95995L20.04 7.96476C20.1745 8.09928 20.25 8.28168 20.25 8.47186C20.25 8.66204 20.1745 8.84444 20.04 8.97896L8.98154 20.0402C8.84711 20.1744 8.66489 20.2499 8.47489 20.25Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),t.jsx("path",{d:"M12.3589 6.61963L17.3806 11.6413",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),...a})},he=()=>{const[e,i]=h.useState(!1),a=h.useCallback(()=>i(!0),[]),n=h.useCallback(()=>i(!1),[]);return{isOpen:e,onClose:n,open:a}},xe=async({userPushSDKInstance:e,settings:i})=>await e.channel.setting(i),fe=()=>Ye({mutationKey:[we],mutationFn:xe}),H={type:1,default:0,description:"",index:0};function Z(e,i){if(e===i)return!0;if(typeof e!="object"||typeof i!="object")return!1;const a=Object.keys(e),n=Object.keys(i);return a.length!==n.length?!1:a.every(r=>Z(e[r],i[r]))}let K,U,$,E,W,J,Q,Y,L,G,X,ee,te,ie,ne,ae,re;K=({modalControl:e,setSettingsToEdit:i})=>{const{open:a}=e,{isWalletConnected:n,connect:r}=P(),d=()=>n?a():r();return t.jsxs(l,{display:"flex",alignItems:"flex-start",justifyContent:"space-between",width:"100%",children:[t.jsxs(l,{children:[t.jsx(f,{variant:"h4-semibold",color:"text-primary",children:"Notification Settings"}),t.jsx(f,{variant:"bs-regular",color:"text-tertiary",children:"Add, Edit or Remove Notification Settings"})]}),t.jsx(T,{size:"extraSmall",variant:"tertiary",leadingIcon:t.jsx(Be,{}),onClick:()=>{i(H),d()},children:"Add Setting"})]})},U=({setting:e,modalControl:i,loadingSettings:a,setSettingsToEdit:n,handleDeleteSetting:r})=>{const{open:d}=i;return t.jsxs(l,{display:"flex",width:"100%",padding:"spacing-sm spacing-none",justifyContent:"space-between",children:[t.jsx(Ce,{isLoading:a,height:"20px",width:"100px",children:t.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%",gap:"spacing-xxs",children:[t.jsx(f,{variant:"bs-regular",color:"text-primary",children:e.description}),e.type==2&&t.jsx(se,{children:"Range"}),e.type==3&&t.jsx(se,{children:"Multi-Range"})]})}),t.jsx(Se,{overlay:t.jsxs(ye,{children:[t.jsx(oe,{label:"Edit",icon:t.jsx(me,{size:24}),onClick:()=>{n(e),d()}}),t.jsx(oe,{label:"Remove",icon:t.jsx(Ze,{size:24}),onClick:()=>{r(e)}})]}),children:t.jsx(l,{cursor:"pointer",children:t.jsx(pe,{})})})]})},$=({newSettings:e,loadingSettings:i,modalControl:a,setSettingsToEdit:n,handleDeleteSetting:r,handleSettingsChange:d})=>t.jsx(l,{width:"100%",display:"flex",flexDirection:"column",children:e.map((S,y)=>t.jsxs(l,{children:[t.jsx(U,{loadingSettings:i,setting:S,modalControl:a,setSettingsToEdit:n,handleDeleteSetting:r,handleSettingsChange:d}),t.jsx(ve,{})]},y))}),E=50,W=({newSettings:e,channelSettings:i})=>{const a=ue(),{account:n,provider:r,wallet:d,isWalletConnected:S,connect:y}=P(),{userPushSDKInstance:w}=Ne(g=>g.user),{handleConnectWalletAndEnableProfile:C}=ke(),{refetchChannelDetails:o}=_e(),[b,s]=h.useState(0),[m,j]=h.useState(""),[v,k]=h.useState(0),V=async()=>{const g=await We({address:n,provider:r});k(g)},M=async()=>{const g=await Je({address:n,provider:r,contractAddress:Re.epnscore});s(parseInt(g))};h.useEffect(()=>{!n||!r||(M(),V())},[n,r]);const{mutate:A,isPending:D}=Ue(),I=async()=>{if(!r)return;if(!S){y();return}j("");const g=r.getSigner(n),u=Me((E-b).toString(),18);A({noOfTokenToApprove:u,signer:g},{onSuccess:()=>{M()},onError:c=>{console.log("Error in Approving PUSH",c),c.code=="ACTION_REJECTED"?j("User rejected signature. Please try again."):j("Error in approving PUSH Tokens")}})},{mutate:F,isPending:O}=fe(),be=async()=>{let g=w;if(!g.signer&&(g=await C({wallet:d}),!g))return;j("");const u=e.map(c=>c.type===1?{type:c.type,description:c.description,default:c.default?1:0}:{type:c.type,description:c.description,default:c.default,data:{lower:c.lowerLimit,upper:c.upperLimit,ticker:c.ticker,enabled:c.enabled}});F({userPushSDKInstance:g,settings:u},{onSuccess:c=>{c.transactionHash&&(o(),a(`${q.ChannelDashboard(n)}`))},onError:c=>{console.log("Error in adding setting",c),j("Error in saving settings. Please try again later")}})},je=h.useMemo(()=>{if(!i)return!1;if(e.length!==i.length)return!0;let g=!1;return e.forEach((u,c)=>{const x=i[c];if(u.type!==x.type){g=!0;return}if(u.type===1&&(u.description!==x.description||u.default!==x.default)){g=!0;return}if(u.type===2&&(u.description!==x.description||u.default!==x.default||u.enabled!==x.enabled||u.lowerLimit!==x.lowerLimit||u.upperLimit!==x.upperLimit||u.ticker!==x.ticker)){g=!0;return}if(u.type===3&&(u.description!==x.description||!Z(u.default,x.default)||u.enabled!==x.enabled||u.lowerLimit!==x.lowerLimit||u.upperLimit!==x.upperLimit||u.ticker!==x.ticker)){g=!0;return}}),g},[e,i]);return t.jsxs(l,{width:"100%",gap:"spacing-md",display:"flex",flexDirection:"column",children:[m&&t.jsx(Ve,{heading:m,variant:"error"}),t.jsx($e,{title:"Modify Setting Fee",description:"Make sure all settings are ready before proceeding to the next step",fees:E,pushApprovalAmount:b,showBalance:!0,balance:v,setBalance:k}),t.jsxs(l,{display:"flex",justifyContent:{initial:"end",ml:"center"},gap:"spacing-xs",children:[t.jsx(T,{variant:"outline",onClick:()=>a(`${q.ChannelDashboard(n)}`),children:"Cancel"}),b>=E?t.jsx(T,{onClick:be,disabled:O||!je,loading:O,children:O?"Saving":"Save Settings"}):t.jsx(T,{onClick:I,disabled:D,loading:D,children:D?"Approving":"Approve PUSH"})]})]})},J=e=>({settingName:e.description,isDefault:e.type===1?typeof e.default=="boolean"?e.default:!0:e.enabled,enableRange:e.type!==1,rangelowerlimit:e.lowerLimit?e.lowerLimit:0,rangeupperlimit:e.upperLimit?e.upperLimit:0,enableMultiRange:e.type===3,defaultValue:typeof e.default=="number"?e.default:0,multirangelowerlimit:typeof e.default=="object"?e.default.lower:0,multirangeupperlimit:typeof e.default=="object"?e.default.upper:0,sliderStepValue:e.ticker?e.ticker:0}),Q=Xe().shape({settingName:et().required(N("Setting Name")),isDefault:z(),enableRange:z(),rangelowerlimit:p().when("enableRange",{is:!0,then:()=>p().min(1,R(1)).required(N("Range")),otherwise:()=>p()}),rangeupperlimit:p().when("enableRange",{is:!0,then:()=>p().min(ce("rangelowerlimit"),R("Lower limit")).required(N("Range")),otherwise:()=>p()}),enableMultiRange:z().required(N("")),multirangelowerlimit:p().when(["enableMultiRange","enableRange"],{is:(e,i)=>e&&i,then:()=>p().min(1,R(1)).required(N("Range")).test("is-multi-range-within-range",B("Multi-range lower limit"),(e,i)=>{const{rangelowerlimit:a,rangeupperlimit:n}=i.parent;return e>=a&&e<n}),otherwise:()=>p()}),multirangeupperlimit:p().when(["enableMultiRange","enableRange"],{is:(e,i)=>e&&i,then:()=>p().min(ce("multirangelowerlimit"),R("Lower limit")).required(N("Range")).test("is-multi-range-upper-within-range",B("Multi-range upper limit"),(e,i)=>{const{rangelowerlimit:a,rangeupperlimit:n}=i.parent;return e>a&&e<=n}),otherwise:()=>p()}),defaultValue:p().when(["enableMultiRange","enableRange"],{is:(e,i)=>!e&&i,then:()=>p().min(0,R(0)).required(N("Default Value")).test("is-within-range",B("Default value"),(e,i)=>{const{rangelowerlimit:a,rangeupperlimit:n}=i.parent;return e>=a&&e<=n}),otherwise:()=>p()}),sliderStepValue:p().when("enableRange",{is:!0,then:()=>p().min(1,R(1)).required(N("Slider Step")).test("is-step-value-valid","Slider step value must not exceed the range limits.",(e,i)=>{const{rangeupperlimit:a}=i.parent;return e<a}),otherwise:()=>p()})}),Y=({children:e,initialValue:i,onSubmit:a})=>{const n=J(i),r=tt({initialValues:n,enableReinitialize:!0,validationSchema:Q,onSubmit:a});return t.jsx(it,{value:r,children:e})},L=()=>{const e=nt();if(!e)throw new Error("useEditNotificationSettingsForm must be used within a EditNotificationSettingsFormProvider");return e},G=({checked:e,onChange:i})=>t.jsx(X,{id:"Checkbox-switch",type:"checkbox",checked:e,onChange:i}),X=De.input`
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 16px;
  height: 20px;

  /* Change the color of the checkbox */
  &:checked {
    accent-color: #C742DD;
  }
`,ee=()=>{const{values:e,handleChange:i,setFieldValue:a,errors:n,touched:r}=L(),d=h.useMemo(()=>{const{rangelowerlimit:s,rangeupperlimit:m,enableMultiRange:j,multirangelowerlimit:v,multirangeupperlimit:k,defaultValue:V,sliderStepValue:M}=e,A=Number(s)>0&&Number(m)>0,D=Number(M)>0&&Number(M)<=Number(m)-Number(s),I=!j&&Number(V)>=Number(s)&&Number(V)<=Number(m),F=j&&Number(v)>=Number(s)&&Number(k)<=Number(m)&&Number(k)>Number(v);return A&&D&&(F||I)},[e]),[S,y]=h.useState(e.defaultValue),[w,C]=h.useState(e.multirangelowerlimit),[o,b]=h.useState(e.multirangeupperlimit);return t.jsxs(t.Fragment,{children:[t.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing-xxs",children:[t.jsx(f,{variant:"h6-bold",children:"Range Values"}),t.jsxs(l,{display:"flex",gap:"spacing-xxs",width:"100%",alignItems:"baseline",children:[t.jsx(_,{placeholder:"e.g.0",type:"number",value:e.rangelowerlimit,onChange:i("rangelowerlimit"),error:r.rangelowerlimit&&!!n.rangelowerlimit,errorMessage:r.rangelowerlimit?n.rangelowerlimit:""}),t.jsx(f,{variant:"bm-regular",children:"to"}),t.jsx(_,{placeholder:"e.g.10",type:"number",value:e.rangeupperlimit,onChange:s=>{a("rangeupperlimit",s.target.value)},error:r.rangeupperlimit&&!!n.rangeupperlimit,errorMessage:r.rangeupperlimit?n.rangeupperlimit:""})]})]}),t.jsxs(l,{display:"flex",gap:"spacing-xxs",children:[t.jsx(G,{checked:e.enableMultiRange,onChange:()=>a("enableMultiRange",!e.enableMultiRange)}),t.jsxs(l,{children:[t.jsx(f,{ellipsis:!0,variant:"h6-bold",children:"Enable Multi Range"}),t.jsx(f,{variant:"bes-regular",children:"User can select a range of values in the slider"})]})]}),!e.enableMultiRange&&t.jsx(_,{placeholder:"e.g.0",type:"number",value:e.defaultValue,onChange:s=>{y(Number(s.target.value)),a("defaultValue",s.target.value)},label:"Default Value",error:r.defaultValue&&!!n.defaultValue,errorMessage:r.defaultValue?n.defaultValue:""}),e.enableMultiRange&&t.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing-xxs",children:[t.jsx(f,{variant:"h6-bold",children:"Range Values"}),t.jsxs(l,{display:"flex",gap:"spacing-xxs",width:"100%",alignItems:"baseline",children:[t.jsx(_,{placeholder:"e.g.0",type:"number",value:e.multirangelowerlimit,onChange:s=>{a("multirangelowerlimit",s.target.value),C(Number(s.target.value))},error:r.multirangelowerlimit&&!!n.multirangelowerlimit,errorMessage:r.multirangelowerlimit?n.multirangelowerlimit:""}),t.jsx(f,{variant:"bm-regular",children:"to"}),t.jsx(_,{placeholder:"e.g.10",type:"number",value:e.multirangeupperlimit,onChange:s=>{a("multirangeupperlimit",s.target.value),b(Number(s.target.value))},error:r.multirangeupperlimit&&!!n.multirangeupperlimit,errorMessage:r.multirangeupperlimit?n.multirangeupperlimit:""})]})]}),t.jsx(l,{children:t.jsx(_,{placeholder:"e.g.0",type:"number",value:e.sliderStepValue,onChange:i("sliderStepValue"),label:"Slider Step Value",error:r.sliderStepValue&&!!n.sliderStepValue,errorMessage:r.sliderStepValue?n.sliderStepValue:""})}),d&&t.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing-xxs",children:[t.jsx(l,{children:"Preview"}),!e.enableMultiRange&&t.jsxs(l,{display:"flex",gap:"spacing-xxs",alignItems:"center",children:[t.jsx(l,{children:e.rangelowerlimit}),t.jsx(l,{width:"100%",children:t.jsx(Ee,{val:S,min:Number(e.rangelowerlimit),max:Number(e.rangeupperlimit),step:Number(e.sliderStepValue),defaultVal:Number(e.defaultValue),onChange:({x:s})=>{y(s)},preview:!0})}),t.jsx(l,{children:e.rangeupperlimit})]}),e.enableMultiRange&&t.jsxs(l,{display:"flex",gap:"spacing-xxs",alignItems:"center",backgroundColor:"surface-secondary",padding:"spacing-xs",borderRadius:"radius-xxs",children:[t.jsx(l,{children:e.rangelowerlimit}),t.jsx(l,{width:"100%",children:t.jsx(Le,{startVal:w,endVal:o,min:Number(e.rangelowerlimit),max:Number(e.rangeupperlimit),step:Number(e.sliderStepValue),defaultStartVal:Number(e.multirangelowerlimit),defaultEndVal:Number(e.multirangeupperlimit),onChange:({startVal:s,endVal:m})=>{C(s),b(m)},preview:!0})}),t.jsx(l,{children:e.rangeupperlimit})]})]})]})},te=()=>{const{values:e,handleChange:i,touched:a,errors:n,setFieldValue:r}=L();return t.jsx(l,{width:"100%",children:t.jsx("form",{onSubmit:()=>{},children:t.jsxs(l,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",gap:"spacing-md",children:[t.jsx(f,{textAlign:"center",variant:"h4-semibold",children:"Add a Setting"}),t.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing-md",padding:"spacing-xxs spacing-xs",width:"-webkit-fill-available",maxHeight:{initial:"60vh",ml:"45vh"},css:Pe`
              overflow-y: scroll;
            `,customScrollbar:!0,children:[t.jsx(_,{placeholder:"e.g. Announcements",label:"Setting Name",totalCount:50,value:e.settingName,onChange:i("settingName"),error:a.settingName&&!!n.settingName,errorMessage:a.settingName?n.settingName:""}),t.jsxs(l,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[t.jsxs(l,{children:[t.jsx(f,{ellipsis:!0,variant:"h6-bold",children:"Set as Default"}),t.jsx(f,{variant:"bes-regular",children:"Setting on for users by default"})]}),t.jsx(de,{leadingToggle:!1,checked:e.isDefault,onCheckedChange:d=>r("isDefault",d)})]}),t.jsxs(l,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[t.jsxs(l,{children:[t.jsx(f,{ellipsis:!0,variant:"h6-bold",children:"Range"}),t.jsx(f,{variant:"bes-regular",children:"Set a range for this setting e.g. 1-10"})]}),t.jsx(de,{leadingToggle:!1,checked:e.enableRange,onCheckedChange:d=>r("enableRange",d)})]}),e.enableRange&&t.jsx(ee,{})]})]})})})},ie=({isOpen:e,onClose:i,settingsToEdit:a,handleSettingsChange:n})=>{const{values:r,validateForm:d,setTouched:S,dirty:y,resetForm:w}=L(),C=async o=>{if(S({settingName:!0,defaultValue:!0,rangelowerlimit:!0,rangeupperlimit:!0,multirangelowerlimit:!0,multirangeupperlimit:!0,sliderStepValue:!0,enableRange:!0,enableMultiRange:!0,isDefault:!0}),y){const m=await d();if(Object.keys(m).length>0)return}const b=a.index!==0?a.index:Math.floor(Math.random()*1e6),s=o.enableRange?o.enableMultiRange?{type:3,default:{lower:Number(o.multirangelowerlimit),upper:Number(o.multirangeupperlimit)},enabled:o.isDefault,description:o.settingName,lowerLimit:Number(o.rangelowerlimit),upperLimit:Number(o.rangeupperlimit),ticker:Number(o.sliderStepValue),index:b}:{type:2,default:Number(o.defaultValue),enabled:o.isDefault,description:o.settingName,lowerLimit:Number(o.rangelowerlimit),upperLimit:Number(o.rangeupperlimit),ticker:Number(o.sliderStepValue),index:b}:{type:1,default:o.isDefault,description:o.settingName,index:b};n(s),w(),i()};return t.jsx(Te,{isOpen:e,onClose:i,acceptButtonProps:{children:"Save Settings",onClick:()=>{C(r)}},cancelButtonProps:{children:"Cancel"},children:t.jsx(te,{onClose:i})})},ne=({modalControl:e,settingsToEdit:i,handleSettingsChange:a})=>{const{isOpen:n,onClose:r}=e;return t.jsx(Y,{initialValue:i,onSubmit:d=>{},children:t.jsx(ie,{isOpen:n,onClose:r,settingsToEdit:i,handleSettingsChange:a})})},ae=({modalControl:e,channelSettings:i,loadingSettings:a})=>{const{open:n}=e,{isWalletConnected:r,connect:d}=P(),[S,y]=h.useState(H),[w,C]=h.useState([]);h.useEffect(()=>{i&&!a&&C(i)},[a]);const o=m=>{C(j=>j.filter(v=>v.index!==m.index))},b=m=>{const j=w.findIndex(v=>v.index===m.index);if(j===-1)C([...w,m]);else{const v=w.map((k,V)=>V===j?{...m}:k);C(v)}},s=()=>r?n():d();return t.jsxs(t.Fragment,{children:[t.jsx(K,{modalControl:e,setSettingsToEdit:y}),w.length>0?t.jsx($,{newSettings:w,modalControl:e,setSettingsToEdit:y,loadingSettings:a,handleDeleteSetting:o,handleSettingsChange:b}):t.jsx(qe,{state:"notificationSettings",title:"No settings yet",subTitle:"Add options for users to customize notifications.",onClick:s}),t.jsx(ne,{modalControl:e,settingsToEdit:S,setNewSettings:C,handleSettingsChange:b}),t.jsx(W,{newSettings:w,channelSettings:i})]})},re=()=>{const{account:e}=P(),i=he(),a=ue(),{data:n,isLoading:r}=Ae(e),d=(n==null?void 0:n.channel_settings)??"",S=r?Array(3).fill(0):d?JSON.parse(d):[];return h.useEffect(()=>{!n&&!r&&a(`${q.Channels}`)},[n]),t.jsx(l,{display:"flex",padding:{initial:"spacing-lg",ml:"spacing-md"},flexDirection:"column",gap:"spacing-md",width:{ml:"357px",initial:"800px"},alignItems:"center",borderRadius:"radius-md",backgroundColor:"surface-primary",children:t.jsx(ae,{modalControl:i,channelSettings:S,loadingSettings:r})})},ge=()=>t.jsx(Fe,{children:t.jsx(re,{})})});export{rt as __tla,ge as default};
