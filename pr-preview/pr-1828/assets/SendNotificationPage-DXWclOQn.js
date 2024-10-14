import{gV as ie,gW as re,e1 as a,e2 as c,eq as f,gX as le,gY as ce,gZ as oe,ei as W,fI as de,d_ as w,dY as Y,fE as he,e$ as S,fK as ue,fL as pe,g_ as I,ep as C,g$ as U,h0 as j,gg as ge,h1 as xe,gQ as me,eY as fe,h2 as ye,h3 as be,gC as Ce,dZ as ve,h4 as je,h5 as ke,h6 as Se,__tla as Ie}from"./index-CWATc5SK.js";import{c as Te,a as u,u as _e,__tla as we}from"./index.esm-CuTRccy8.js";import{g as Ue,__tla as Le}from"./Common.utils-Cam0BmKp.js";import{u as De,__tla as Ae}from"./useMutation-CNjXtMzM.js";import{g as p}from"./Common.form-LPxQflxb.js";import{C as Re,__tla as Ee}from"./ContentLayout-_MyshW35.js";let Z,Me=Promise.all([(()=>{try{return Ie}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return Ee}catch{}})()]).then(async()=>{let L,D,A,R,E,M,V,N,F,B,P,K,q,O;L=i=>i,D=({userPushSDKInstance:i,channel:t,recipients:r,payload:n,notification:l})=>i.channel.send(r,{notification:l,payload:n,channel:t}).then(L),A=()=>De({mutationKey:[ie],mutationFn:D}),R=i=>{const t=re(),r=({title:n,body:l,cta:d,channelName:x,icon:g,image:y,chainId:m})=>a.jsx(le,{notificationTitle:n,notificationBody:l,cta:d,app:x,icon:g,image:y,chainName:ce[m],theme:t.mode,url:""});return a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-none",children:[a.jsx(f,{variant:"h6-semibold",color:"text-primary",textTransform:"uppercase",children:"Preview Notification"}),a.jsx(r,{...i})]})},E=(i,t)=>{var r,n;return[...((n=(r=i==null?void 0:i.aliases)==null?void 0:r.filter(l=>l.is_alias_verified&&oe(l.alias_address)===t))==null?void 0:n.map(l=>parseInt(l.alias_blockchain_id)))||[],W.coreContractChain]},M=(i,t)=>{const r=[...i||[],...t?[t]:[]];return r&&r.length?r==null?void 0:r.map(n=>({icon:a.jsx(c,{width:"24px",height:"24px",borderRadius:"radius-xxs",overflow:"hidden",children:a.jsx("img",{width:"100%",height:"100%",src:n==null?void 0:n.iconV2,alt:n==null?void 0:n.name})}),label:n==null?void 0:n.name,value:n==null?void 0:n.channel})):[]},V=i=>{var n;let t=[];const r={label:"Default",value:"0"};return i&&(t=((n=JSON.parse(i==null?void 0:i.channel_settings))==null?void 0:n.map((l,d)=>({label:l==null?void 0:l.description,value:(d+1).toString()})))||[]),[...t,r]},N=(i,t)=>{if(t){if(i==="SUBSET")return t.split(",");if(i==="TARGETTED")return[t]}return["*"]},F=(i,t,r)=>{var n;return r?de(i.channel,parseInt(t)):((n=i.aliases.find(l=>l.alias_blockchain_id===t))==null?void 0:n.alias_address)||i.channel},B=[{label:"Broadcast",value:"BROADCAST"},{label:"Targeted",value:"TARGETTED"},{label:"Subset",value:"SUBSET"}],P=i=>Te().shape({channelAddress:u().required(p("Delegate")),chainId:u().required(p("Chain")),type:u().required(p("Type")),body:u().required(p("Description")),setting:u().required(p("Setting")),recipient:u().test("recipient",p("Recipient"),function(t){return(this.parent.type!=="SUBSET"||i)&&(this.parent.type!=="TARGETTED"||!!t)}),title:u().test("title",p("Title"),function(t){return!this.parent.titleChecked||!!t}),mediaUrl:u().test("mediaUrl",p("Media URL"),function(t){return!this.parent.mediaUrlChecked||!!t}),ctaLink:u().test("ctaLink",p("CTA Link"),function(t){return!this.parent.ctaLinkChecked||!!t})}),K=(i,t)=>{var r,n;return{channelAddress:((r=i[0])==null?void 0:r.value)||"",chainId:((n=t[0])==null?void 0:n.value)||W.coreContractChain.toString(),type:"BROADCAST",recipient:"",titleChecked:!1,mediaUrlChecked:!1,ctaLinkChecked:!1,title:"",body:"",setting:"0",mediaUrl:"",ctaLink:""}},q=({channelDetails:i})=>{const[t,r]=w.useState([]),{chainId:n,switchChain:l,account:d}=Y(),{mutate:x,isPending:g}=A(),y=he(),{userPushSDKInstance:m}=S(s=>s.user),{delegatees:k}=S(s=>s.admin),$=ye===n,T=M(k,i),h=(k==null?void 0:k.find(s=>{var o;return s.channel===((o=T[0])==null?void 0:o.value)}))||i,z=Ue(E(h,d)),e=_e({initialValues:K(T,z),validationSchema:P(!!t.length),onSubmit:s=>{Q(s)}}),J=e.values.body||e.values.title||e.values.ctaLink||e.values.mediaUrl,Q=({chainId:s,title:o,type:b,recipient:v,ctaLink:ae,mediaUrl:te,body:G,setting:se})=>{x({channel:F(h,s,$),recipients:N(b,v||t.join()),notification:{title:o,body:G},userPushSDKInstance:m,payload:{title:o,body:G,cta:ae,embed:te,category:parseInt(se)??void 0}},{onSuccess:()=>{y.showMessageToast({toastTitle:"Success",toastMessage:"Successfully sent notification",toastType:"SUCCESS",getToastIcon:_=>a.jsx(ue,{size:_,color:"green"})}),e.resetForm()},onError:_=>{_&&y.showMessageToast({toastTitle:"Error",toastMessage:"Unable to send notification",toastType:"ERROR",getToastIcon:ne=>a.jsx(pe,{size:ne,color:"red"})})}})},X=s=>{if(s.key==="Enter"&&s.preventDefault(),["Enter",","].includes(s.key)){const o=e.values.recipient.split(" ").filter(b=>b);r(b=>{const v=new Set([...b,...o]);return Array.from(v)}),e.setFieldValue("recipient","")}},H=s=>{r(o=>o.filter((b,v)=>v!==s))},ee=s=>{e.setFieldValue("type",s),e.setFieldValue("recipient",""),r([])};return a.jsx("form",{onSubmit:e.handleSubmit,children:a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignItems:"center",children:[a.jsxs(c,{display:"flex",gap:{dp:"spacing-md",ml:"spacing-sm"},width:"100%",flexDirection:"column",children:[a.jsxs(c,{display:"flex",gap:"spacing-sm",flexDirection:{dp:"row",ml:"column"},children:[a.jsx(c,{width:{dp:"65%",ml:"auto"},children:a.jsx(I,{options:T,value:e.values.channelAddress,onSelect:e.handleChange("channelAddress"),error:e.touched.channelAddress&&!!e.errors.channelAddress,errorMessage:e.touched.channelAddress?e.errors.channelAddress:""})}),a.jsx(I,{options:z,value:e.values.chainId,onSelect:s=>{e.setFieldValue("chainId",s),l(parseInt(s))},error:e.touched.chainId&&!!e.errors.chainId,errorMessage:e.touched.chainId?e.errors.chainId:""})]}),a.jsx(I,{options:B,value:e.values.type,onSelect:s=>ee(s),error:e.touched.type&&!!e.errors.type,errorMessage:e.touched.type?e.errors.type:""}),a.jsxs(c,{display:"flex",gap:"spacing-sm",justifyContent:"space-between",css:C`
              flex-wrap: wrap;
            `,children:[a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",alignItems:"center",backgroundColor:"surface-secondary",borderRadius:"radius-xs",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"Title"}),a.jsx(U,{leadingToggle:!1,checked:e.values.titleChecked,onCheckedChange:s=>e.setFieldValue("titleChecked",s)})]}),a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"Media URL"}),a.jsx(U,{leadingToggle:!1,checked:e.values.mediaUrlChecked,onCheckedChange:s=>e.setFieldValue("mediaUrlChecked",s)})]}),a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"CTA Link"}),a.jsx(U,{leadingToggle:!1,checked:e.values.ctaLinkChecked,onCheckedChange:s=>e.setFieldValue("ctaLinkChecked",s)})]})]}),e.values.type==="TARGETTED"&&a.jsx(j,{placeholder:"Input Value",label:"Recipient Wallet Address",onChange:e.handleChange("recipient"),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""}),e.values.type==="SUBSET"&&a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-xs",onKeyDown:s=>X(s),children:[a.jsx(c,{display:"flex",gap:"spacing-xxs",css:C`
                  flex-wrap: wrap;
                `,children:!!t.length&&t.map((s,o)=>a.jsxs(c,{display:"flex",gap:"spacing-xxs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xxxs spacing-xxs",borderRadius:"radius-xxxs",backgroundColor:"surface-brand-medium",children:[a.jsx(f,{color:"text-brand-subtle",children:s.slice(0,-1)}),a.jsx(c,{cursor:"pointer",display:"flex",alignItems:"center",onClick:()=>H(o),children:a.jsx(ge,{size:14,color:"icon-secondary"})})]}))}),a.jsx(j,{placeholder:"Input Value",label:"Enter Recipients Wallet Addresses",description:"Enter recipients wallet addresses separated by a comma or by pressing the enter key",onChange:s=>e.setFieldValue("recipient",s.target.value),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""})]}),e.values.titleChecked&&a.jsx(j,{totalCount:80,placeholder:"Input Value",label:"Notification Title",onChange:e.handleChange("title"),value:e.values.title,error:e.touched.title&&!!e.errors.title,errorMessage:e.touched.title?e.errors.title:""}),a.jsx(xe,{label:"Notification Message",placeholder:"Input Value",totalCount:500,onChange:e.handleChange("body"),value:e.values.body,error:e.touched.body&&!!e.errors.body,errorMessage:e.touched.body?e.errors.body:""}),a.jsx(I,{action:a.jsx(me,{textProps:{color:"text-brand-medium"},to:"/channel/settings",children:"Manage Setting"}),label:"Notification Setting Type",options:V(h),value:e.values.setting,onSelect:e.handleChange("setting"),error:e.touched.setting&&!!e.errors.setting,errorMessage:e.touched.setting?e.errors.setting:""}),e.values.mediaUrlChecked&&a.jsx(j,{placeholder:"Input Value",label:"Media URL",onChange:e.handleChange("mediaUrl"),value:e.values.mediaUrl,error:e.touched.mediaUrl&&!!e.errors.mediaUrl,errorMessage:e.touched.mediaUrl?e.errors.mediaUrl:""}),e.values.ctaLinkChecked&&a.jsx(j,{placeholder:"Input Value",label:"CTA Link",onChange:e.handleChange("ctaLink"),value:e.values.ctaLink,error:e.touched.ctaLink&&!!e.errors.ctaLink,errorMessage:e.touched.ctaLink?e.errors.ctaLink:""}),J&&a.jsx(R,{title:e.values.title,body:e.values.body,cta:e.values.ctaLink,channelName:(h==null?void 0:h.name)||"",icon:(h==null?void 0:h.iconV2)||"",image:e.values.mediaUrl,chainId:parseInt(e.values.chainId)})]}),a.jsx(fe,{disabled:g,children:g?"Sending":" Send Notification"})]})})},O=()=>{const[i,t]=w.useState(!0),{userPushSDKInstance:r}=S(m=>m.user),{account:n,chainId:l}=Y(),{data:d}=be({alias:n,aliasChain:Se[l]}),{data:x}=Ce((d==null?void 0:d.channel)||n),{delegatees:g}=S(m=>m.admin),y=ve();return w.useEffect(()=>{!x&&!(g!=null&&g.length)&&!d&&y("/channels")},[x]),a.jsxs(c,{padding:{dp:"spacing-lg",ml:"spacing-sm"},display:"flex",flexDirection:"column",gap:{dp:"spacing-xl",ml:"spacing-md"},alignSelf:"center",width:{dp:"648px",ml:"357px"},borderRadius:"radius-lg",alignItems:"center",backgroundColor:"surface-primary",margin:{dp:"spacing-lg",ml:"spacing-sm"},children:[a.jsx(f,{color:"text-primary",variant:"h3-semibold",display:{dp:"block",ml:"none"},children:"Send Notification"}),a.jsx(f,{color:"text-primary",variant:"h5-semibold",display:{dp:"none",ml:"block"},children:"Send Notification"}),a.jsx(c,{width:"100%",children:a.jsx(q,{channelDetails:x})}),i&&r&&(r==null?void 0:r.readmode())&&a.jsx(c,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:C`
            z-index: 99999;
          `,children:a.jsx(je,{type:ke.MODAL,showConnectModal:!0,onClose:()=>t(!1),description:"Unlock your profile to proceed."})})]})},Z=()=>a.jsx(Re,{children:a.jsx(O,{})})});export{Me as __tla,Z as default};