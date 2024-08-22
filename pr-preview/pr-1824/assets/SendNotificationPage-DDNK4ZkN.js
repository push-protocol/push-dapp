import{dP as ie,dQ as re,b1 as a,b2 as c,bq as f,dR as le,dS as ce,dT as de,bi as W,cZ as oe,a_ as w,aY as Z,cV as ue,bZ as S,c$ as he,d0 as pe,dU as T,bp as C,dV as U,dW as j,d9 as ge,dX as xe,dK as me,bW as fe,dY as ye,dZ as be,dw as Ce,aZ as ve,d_ as je,d$ as ke,e0 as Se,__tla as Te}from"./index-COtUxmek.js";import{c as Ie,a as h,u as _e,__tla as we}from"./index.esm-EOjRXuPp.js";import{g as Ue,__tla as De}from"./Common.utils-bzZY6y7k.js";import{u as Le,__tla as Ae}from"./useMutation-Cst03QPp.js";import{g as p}from"./Common.form-LPxQflxb.js";import{C as Re,__tla as Ve}from"./ContentLayout-BkfG5eVg.js";let Y,Ee=Promise.all([(()=>{try{return Te}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return De}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return Ve}catch{}})()]).then(async()=>{let D,L,A,R,V,E,M,N,F,B,P,K,q,O;D=i=>i,L=({userPushSDKInstance:i,channel:t,recipients:r,payload:n,notification:l})=>i.channel.send(r,{notification:l,payload:n,channel:t}).then(D),A=()=>Le({mutationKey:[ie],mutationFn:L}),R=i=>{const t=re(),r=({title:n,body:l,cta:o,channelName:x,icon:g,image:y,chainId:m})=>a.jsx(le,{notificationTitle:n,notificationBody:l,cta:o,app:x,icon:g,image:y,chainName:ce[m],theme:t.mode,url:""});return a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-none",children:[a.jsx(f,{variant:"h6-semibold",color:"text-primary",textTransform:"uppercase",children:"Preview Notification"}),a.jsx(r,{...i})]})},V=(i,t)=>{var r,n;return[...((n=(r=i==null?void 0:i.aliases)==null?void 0:r.filter(l=>l.is_alias_verified&&de(l.alias_address)===t))==null?void 0:n.map(l=>parseInt(l.alias_blockchain_id)))||[],W.coreContractChain]},E=(i,t)=>{const r=[...i||[],...t?[t]:[]];return r&&r.length?r==null?void 0:r.map(n=>({icon:a.jsx(c,{width:"24px",height:"24px",borderRadius:"radius-xxs",overflow:"hidden",children:a.jsx("img",{width:"100%",height:"100%",src:n==null?void 0:n.iconV2,alt:n==null?void 0:n.name})}),label:n==null?void 0:n.name,value:n==null?void 0:n.channel})):[]},M=i=>{var n;let t=[];const r={label:"Default",value:"0"};return i&&(t=((n=JSON.parse(i==null?void 0:i.channel_settings))==null?void 0:n.map((l,o)=>({label:l==null?void 0:l.description,value:(o+1).toString()})))||[]),[...t,r]},N=(i,t)=>{if(t){if(i==="SUBSET")return t.split(",");if(i==="TARGETTED")return[t]}return["*"]},F=(i,t,r)=>{var n;return r?oe(i.channel,parseInt(t)):((n=i.aliases.find(l=>l.alias_blockchain_id===t))==null?void 0:n.alias_address)||i.channel},B=[{label:"Broadcast",value:"BROADCAST"},{label:"Targeted",value:"TARGETTED"},{label:"Subset",value:"SUBSET"}],P=i=>Ie().shape({channelAddress:h().required(p("Delegate")),chainId:h().required(p("Chain")),type:h().required(p("Type")),body:h().required(p("Description")),setting:h().required(p("Setting")),recipient:h().test("recipient",p("Recipient"),function(t){return(this.parent.type!=="SUBSET"||i)&&(this.parent.type!=="TARGETTED"||!!t)}),title:h().test("title",p("Title"),function(t){return!this.parent.titleChecked||!!t}),mediaUrl:h().test("mediaUrl",p("Media URL"),function(t){return!this.parent.mediaUrlChecked||!!t}),ctaLink:h().test("ctaLink",p("CTA Link"),function(t){return!this.parent.ctaLinkChecked||!!t})}),K=(i,t)=>{var r,n;return{channelAddress:((r=i[0])==null?void 0:r.value)||"",chainId:((n=t[0])==null?void 0:n.value)||W.coreContractChain.toString(),type:"BROADCAST",recipient:"",titleChecked:!1,mediaUrlChecked:!1,ctaLinkChecked:!1,title:"",body:"",setting:"0",mediaUrl:"",ctaLink:""}},q=({channelDetails:i})=>{const[t,r]=w.useState([]),{chainId:n,switchChain:l,account:o}=Z(),{mutate:x,isPending:g}=A(),y=ue(),{userPushSDKInstance:m}=S(s=>s.user),{delegatees:k}=S(s=>s.admin),$=ye===n,I=E(k,i),u=(k==null?void 0:k.find(s=>{var d;return s.channel===((d=I[0])==null?void 0:d.value)}))||i,z=Ue(V(u,o)),e=_e({initialValues:K(I,z),validationSchema:P(!!t.length),onSubmit:s=>{Q(s)}}),J=e.values.body||e.values.title||e.values.ctaLink||e.values.mediaUrl,Q=({chainId:s,title:d,type:b,recipient:v,ctaLink:ae,mediaUrl:te,body:G,setting:se})=>{x({channel:F(u,s,$),recipients:N(b,v||t.join()),notification:{title:d,body:G},userPushSDKInstance:m,payload:{title:d,body:G,cta:ae,embed:te,category:parseInt(se)??void 0}},{onSuccess:()=>{y.showMessageToast({toastTitle:"Success",toastMessage:"Successfully sent notification",toastType:"SUCCESS",getToastIcon:_=>a.jsx(he,{size:_,color:"green"})}),e.resetForm()},onError:_=>{_&&y.showMessageToast({toastTitle:"Error",toastMessage:"Unable to send notification",toastType:"ERROR",getToastIcon:ne=>a.jsx(pe,{size:ne,color:"red"})})}})},X=s=>{if(s.key==="Enter"&&s.preventDefault(),["Enter",","].includes(s.key)){const d=e.values.recipient.split(" ").filter(b=>b);r(b=>{const v=new Set([...b,...d]);return Array.from(v)}),e.setFieldValue("recipient","")}},H=s=>{r(d=>d.filter((b,v)=>v!==s))},ee=s=>{e.setFieldValue("type",s),e.setFieldValue("recipient",""),r([])};return a.jsx("form",{onSubmit:e.handleSubmit,children:a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignItems:"center",children:[a.jsxs(c,{display:"flex",gap:{dp:"spacing-md",ml:"spacing-sm"},width:"100%",flexDirection:"column",children:[a.jsxs(c,{display:"flex",gap:"spacing-sm",flexDirection:{dp:"row",ml:"column"},children:[a.jsx(c,{width:{dp:"65%",ml:"auto"},children:a.jsx(T,{options:I,value:e.values.channelAddress,onSelect:e.handleChange("channelAddress"),error:e.touched.channelAddress&&!!e.errors.channelAddress,errorMessage:e.touched.channelAddress?e.errors.channelAddress:""})}),a.jsx(T,{options:z,value:e.values.chainId,onSelect:s=>{e.setFieldValue("chainId",s),l(parseInt(s))},error:e.touched.chainId&&!!e.errors.chainId,errorMessage:e.touched.chainId?e.errors.chainId:""})]}),a.jsx(T,{options:B,value:e.values.type,onSelect:s=>ee(s),error:e.touched.type&&!!e.errors.type,errorMessage:e.touched.type?e.errors.type:""}),a.jsxs(c,{display:"flex",gap:"spacing-sm",justifyContent:"space-between",css:C`
              flex-wrap: wrap;
            `,children:[a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",alignItems:"center",backgroundColor:"surface-secondary",borderRadius:"radius-xs",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"Title"}),a.jsx(U,{leadingToggle:!1,checked:e.values.titleChecked,onCheckedChange:s=>e.setFieldValue("titleChecked",s)})]}),a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"Media URL"}),a.jsx(U,{leadingToggle:!1,checked:e.values.mediaUrlChecked,onCheckedChange:s=>e.setFieldValue("mediaUrlChecked",s)})]}),a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"CTA Link"}),a.jsx(U,{leadingToggle:!1,checked:e.values.ctaLinkChecked,onCheckedChange:s=>e.setFieldValue("ctaLinkChecked",s)})]})]}),e.values.type==="TARGETTED"&&a.jsx(j,{placeholder:"Input Value",label:"Recipient Wallet Address",onChange:e.handleChange("recipient"),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""}),e.values.type==="SUBSET"&&a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-xs",onKeyDown:s=>X(s),children:[a.jsx(c,{display:"flex",gap:"spacing-xxs",css:C`
                  flex-wrap: wrap;
                `,children:!!t.length&&t.map((s,d)=>a.jsxs(c,{display:"flex",gap:"spacing-xxs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xxxs spacing-xxs",borderRadius:"radius-xxxs",backgroundColor:"surface-brand-medium",children:[a.jsx(f,{color:"text-brand-subtle",children:s.slice(0,-1)}),a.jsx(c,{cursor:"pointer",display:"flex",alignItems:"center",onClick:()=>H(d),children:a.jsx(ge,{size:14,color:"icon-secondary"})})]}))}),a.jsx(j,{placeholder:"Input Value",label:"Enter Recipients Wallet Addresses",description:"Enter recipients wallet addresses separated by a comma or by pressing the enter key",onChange:s=>e.setFieldValue("recipient",s.target.value),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""})]}),e.values.titleChecked&&a.jsx(j,{totalCount:80,placeholder:"Input Value",label:"Notification Title",onChange:e.handleChange("title"),value:e.values.title,error:e.touched.title&&!!e.errors.title,errorMessage:e.touched.title?e.errors.title:""}),a.jsx(xe,{label:"Notification Message",placeholder:"Input Value",totalCount:500,onChange:e.handleChange("body"),value:e.values.body,error:e.touched.body&&!!e.errors.body,errorMessage:e.touched.body?e.errors.body:""}),a.jsx(T,{action:a.jsx(me,{textProps:{color:"text-brand-medium"},to:"/channel/settings",children:"Manage Setting"}),label:"Notification Setting Type",options:M(u),value:e.values.setting,onSelect:e.handleChange("setting"),error:e.touched.setting&&!!e.errors.setting,errorMessage:e.touched.setting?e.errors.setting:""}),e.values.mediaUrlChecked&&a.jsx(j,{placeholder:"Input Value",label:"Media URL",onChange:e.handleChange("mediaUrl"),value:e.values.mediaUrl,error:e.touched.mediaUrl&&!!e.errors.mediaUrl,errorMessage:e.touched.mediaUrl?e.errors.mediaUrl:""}),e.values.ctaLinkChecked&&a.jsx(j,{placeholder:"Input Value",label:"CTA Link",onChange:e.handleChange("ctaLink"),value:e.values.ctaLink,error:e.touched.ctaLink&&!!e.errors.ctaLink,errorMessage:e.touched.ctaLink?e.errors.ctaLink:""}),J&&a.jsx(R,{title:e.values.title,body:e.values.body,cta:e.values.ctaLink,channelName:(u==null?void 0:u.name)||"",icon:(u==null?void 0:u.iconV2)||"",image:e.values.mediaUrl,chainId:parseInt(e.values.chainId)})]}),a.jsx(fe,{disabled:g,children:g?"Sending":" Send Notification"})]})})},O=()=>{const[i,t]=w.useState(!0),{userPushSDKInstance:r}=S(m=>m.user),{account:n,chainId:l}=Z(),{data:o}=be({alias:n,aliasChain:Se[l]}),{data:x}=Ce((o==null?void 0:o.channel)||n),{delegatees:g}=S(m=>m.admin),y=ve();return w.useEffect(()=>{!x&&!(g!=null&&g.length)&&!o&&y("/channels")},[x]),a.jsxs(c,{padding:{dp:"spacing-lg",ml:"spacing-sm"},display:"flex",flexDirection:"column",gap:{dp:"spacing-xl",ml:"spacing-md"},alignSelf:"center",width:{dp:"648px",ml:"357px"},borderRadius:"radius-lg",alignItems:"center",backgroundColor:"surface-primary",margin:{dp:"spacing-lg",ml:"spacing-sm"},children:[a.jsx(f,{color:"text-primary",variant:"h3-semibold",display:{dp:"block",ml:"none"},children:"Send Notification"}),a.jsx(f,{color:"text-primary",variant:"h5-semibold",display:{dp:"none",ml:"block"},children:"Send Notification"}),a.jsx(c,{width:"100%",children:a.jsx(q,{channelDetails:x})}),i&&r&&(r==null?void 0:r.readmode())&&a.jsx(c,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:C`
            z-index: 99999;
          `,children:a.jsx(je,{type:ke.MODAL,showConnectModal:!0,onClose:()=>t(!1),description:"Unlock your profile to proceed."})})]})},Y=()=>a.jsx(Re,{children:a.jsx(O,{})})});export{Ee as __tla,Y as default};
