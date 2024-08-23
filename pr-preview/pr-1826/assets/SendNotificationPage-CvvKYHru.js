import{dP as ie,dQ as re,b1 as a,b2 as c,bq as f,dR as le,dS as ce,dT as oe,bi as W,cG as de,a_ as U,aY as Y,cC as ue,b$ as S,cI as he,cJ as pe,dU as _,bp as C,dV as w,dW as j,dh as ge,dX as xe,d8 as me,bY as fe,dY as ye,dZ as be,dv as Ce,aZ as ve,d_ as je,d$ as ke,e0 as Se,__tla as _e}from"./index-C8zcvIb_.js";import{u as Te,__tla as Ie}from"./formik.esm-DHT6dKlJ.js";import{g as Ue,__tla as we}from"./Common.utils-DlYcCNCv.js";import{u as De,__tla as Le}from"./useMutation-DTNvpBJ1.js";import{c as Ae,a as h,__tla as Re}from"./index.esm-CO--rvf3.js";import{g as p}from"./Common.form-LPxQflxb.js";import{C as Ee,__tla as Me}from"./ContentLayout-VdAFxfn0.js";let J,Ve=Promise.all([(()=>{try{return _e}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return Me}catch{}})()]).then(async()=>{let D,L,A,R,E,M,V,N,F,B,P,K,q,O;D=i=>i,L=({userPushSDKInstance:i,channel:t,recipients:r,payload:n,notification:l})=>i.channel.send(r,{notification:l,payload:n,channel:t}).then(D),A=()=>De({mutationKey:[ie],mutationFn:L}),R=i=>{const t=re(),r=({title:n,body:l,cta:d,channelName:x,icon:g,image:y,chainId:m})=>a.jsx(le,{notificationTitle:n,notificationBody:l,cta:d,app:x,icon:g,image:y,chainName:ce[m],theme:t.mode,url:""});return a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-none",children:[a.jsx(f,{variant:"h6-semibold",color:"text-primary",textTransform:"uppercase",children:"Preview Notification"}),a.jsx(r,{...i})]})},E=(i,t)=>{var r,n;return[...((n=(r=i==null?void 0:i.aliases)==null?void 0:r.filter(l=>l.is_alias_verified&&oe(l.alias_address)===t))==null?void 0:n.map(l=>parseInt(l.alias_blockchain_id)))||[],W.coreContractChain]},M=(i,t)=>{const r=[...i||[],...t?[t]:[]];return r&&r.length?r==null?void 0:r.map(n=>({icon:a.jsx(c,{width:"24px",height:"24px",borderRadius:"radius-xxs",overflow:"hidden",children:a.jsx("img",{width:"100%",height:"100%",src:n==null?void 0:n.iconV2,alt:n==null?void 0:n.name})}),label:n==null?void 0:n.name,value:n==null?void 0:n.channel})):[]},V=i=>{var n;let t=[];const r={label:"Default",value:"0"};return i&&(t=((n=JSON.parse(i==null?void 0:i.channel_settings))==null?void 0:n.map((l,d)=>({label:l==null?void 0:l.description,value:(d+1).toString()})))||[]),[...t,r]},N=(i,t)=>{if(t){if(i==="SUBSET")return t.split(",");if(i==="TARGETTED")return[t]}return["*"]},F=(i,t,r)=>{var n;return r?de(i.channel,parseInt(t)):((n=i.aliases.find(l=>l.alias_blockchain_id===t))==null?void 0:n.alias_address)||i.channel},B=[{label:"Broadcast",value:"BROADCAST"},{label:"Targeted",value:"TARGETTED"},{label:"Subset",value:"SUBSET"}],P=i=>Ae().shape({channelAddress:h().required(p("Delegate")),chainId:h().required(p("Chain")),type:h().required(p("Type")),body:h().required(p("Description")),setting:h().required(p("Setting")),recipient:h().test("recipient",p("Recipient"),function(t){return(this.parent.type!=="SUBSET"||i)&&(this.parent.type!=="TARGETTED"||!!t)}),title:h().test("title",p("Title"),function(t){return!this.parent.titleChecked||!!t}),mediaUrl:h().test("mediaUrl",p("Media URL"),function(t){return!this.parent.mediaUrlChecked||!!t}),ctaLink:h().test("ctaLink",p("CTA Link"),function(t){return!this.parent.ctaLinkChecked||!!t})}),K=(i,t)=>{var r,n;return{channelAddress:((r=i[0])==null?void 0:r.value)||"",chainId:((n=t[0])==null?void 0:n.value)||W.coreContractChain.toString(),type:"BROADCAST",recipient:"",titleChecked:!1,mediaUrlChecked:!1,ctaLinkChecked:!1,title:"",body:"",setting:"0",mediaUrl:"",ctaLink:""}},q=({channelDetails:i})=>{const[t,r]=U.useState([]),{chainId:n,switchChain:l,account:d}=Y(),{mutate:x,isPending:g}=A(),y=ue(),{userPushSDKInstance:m}=S(s=>s.user),{delegatees:k}=S(s=>s.admin),Z=ye===n,T=M(k,i),u=(k==null?void 0:k.find(s=>{var o;return s.channel===((o=T[0])==null?void 0:o.value)}))||i,z=Ue(E(u,d)),e=Te({initialValues:K(T,z),validationSchema:P(!!t.length),onSubmit:s=>{Q(s)}}),$=e.values.body||e.values.title||e.values.ctaLink||e.values.mediaUrl,Q=({chainId:s,title:o,type:b,recipient:v,ctaLink:ae,mediaUrl:te,body:G,setting:se})=>{x({channel:F(u,s,Z),recipients:N(b,v||t.join()),notification:{title:o,body:G},userPushSDKInstance:m,payload:{title:o,body:G,cta:ae,embed:te,category:parseInt(se)??void 0}},{onSuccess:()=>{y.showMessageToast({toastTitle:"Success",toastMessage:"Successfully sent notification",toastType:"SUCCESS",getToastIcon:I=>a.jsx(he,{size:I,color:"green"})}),e.resetForm()},onError:I=>{I&&y.showMessageToast({toastTitle:"Error",toastMessage:"Unable to send notification",toastType:"ERROR",getToastIcon:ne=>a.jsx(pe,{size:ne,color:"red"})})}})},X=s=>{if(s.key==="Enter"&&s.preventDefault(),["Enter",","].includes(s.key)){const o=e.values.recipient.split(" ").filter(b=>b);r(b=>{const v=new Set([...b,...o]);return Array.from(v)}),e.setFieldValue("recipient","")}},H=s=>{r(o=>o.filter((b,v)=>v!==s))},ee=s=>{e.setFieldValue("type",s),e.setFieldValue("recipient",""),r([])};return a.jsx("form",{onSubmit:e.handleSubmit,children:a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignItems:"center",children:[a.jsxs(c,{display:"flex",gap:{dp:"spacing-md",ml:"spacing-sm"},width:"100%",flexDirection:"column",children:[a.jsxs(c,{display:"flex",gap:"spacing-sm",flexDirection:{dp:"row",ml:"column"},children:[a.jsx(c,{width:{dp:"65%",ml:"auto"},children:a.jsx(_,{options:T,value:e.values.channelAddress,onSelect:e.handleChange("channelAddress"),error:e.touched.channelAddress&&!!e.errors.channelAddress,errorMessage:e.touched.channelAddress?e.errors.channelAddress:""})}),a.jsx(_,{options:z,value:e.values.chainId,onSelect:s=>{e.setFieldValue("chainId",s),l(parseInt(s))},error:e.touched.chainId&&!!e.errors.chainId,errorMessage:e.touched.chainId?e.errors.chainId:""})]}),a.jsx(_,{options:B,value:e.values.type,onSelect:s=>ee(s),error:e.touched.type&&!!e.errors.type,errorMessage:e.touched.type?e.errors.type:""}),a.jsxs(c,{display:"flex",gap:"spacing-sm",justifyContent:"space-between",css:C`
              flex-wrap: wrap;
            `,children:[a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",alignItems:"center",backgroundColor:"surface-secondary",borderRadius:"radius-xs",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"Title"}),a.jsx(w,{leadingToggle:!1,checked:e.values.titleChecked,onCheckedChange:s=>e.setFieldValue("titleChecked",s)})]}),a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"Media URL"}),a.jsx(w,{leadingToggle:!1,checked:e.values.mediaUrlChecked,onCheckedChange:s=>e.setFieldValue("mediaUrlChecked",s)})]}),a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"CTA Link"}),a.jsx(w,{leadingToggle:!1,checked:e.values.ctaLinkChecked,onCheckedChange:s=>e.setFieldValue("ctaLinkChecked",s)})]})]}),e.values.type==="TARGETTED"&&a.jsx(j,{placeholder:"Input Value",label:"Recipient Wallet Address",onChange:e.handleChange("recipient"),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""}),e.values.type==="SUBSET"&&a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-xs",onKeyDown:s=>X(s),children:[a.jsx(c,{display:"flex",gap:"spacing-xxs",css:C`
                  flex-wrap: wrap;
                `,children:!!t.length&&t.map((s,o)=>a.jsxs(c,{display:"flex",gap:"spacing-xxs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xxxs spacing-xxs",borderRadius:"radius-xxxs",backgroundColor:"surface-brand-medium",children:[a.jsx(f,{color:"text-brand-subtle",children:s.slice(0,-1)}),a.jsx(c,{cursor:"pointer",display:"flex",alignItems:"center",onClick:()=>H(o),children:a.jsx(ge,{size:14,color:"icon-secondary"})})]}))}),a.jsx(j,{placeholder:"Input Value",label:"Enter Recipients Wallet Addresses",description:"Enter recipients wallet addresses separated by a comma or by pressing the enter key",onChange:s=>e.setFieldValue("recipient",s.target.value),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""})]}),e.values.titleChecked&&a.jsx(j,{totalCount:80,placeholder:"Input Value",label:"Notification Title",onChange:e.handleChange("title"),value:e.values.title,error:e.touched.title&&!!e.errors.title,errorMessage:e.touched.title?e.errors.title:""}),a.jsx(xe,{label:"Notification Message",placeholder:"Input Value",totalCount:500,onChange:e.handleChange("body"),value:e.values.body,error:e.touched.body&&!!e.errors.body,errorMessage:e.touched.body?e.errors.body:""}),a.jsx(_,{action:a.jsx(me,{textProps:{color:"text-brand-medium"},to:"/channel/settings",children:"Manage Setting"}),label:"Notification Setting Type",options:V(u),value:e.values.setting,onSelect:e.handleChange("setting"),error:e.touched.setting&&!!e.errors.setting,errorMessage:e.touched.setting?e.errors.setting:""}),e.values.mediaUrlChecked&&a.jsx(j,{placeholder:"Input Value",label:"Media URL",onChange:e.handleChange("mediaUrl"),value:e.values.mediaUrl,error:e.touched.mediaUrl&&!!e.errors.mediaUrl,errorMessage:e.touched.mediaUrl?e.errors.mediaUrl:""}),e.values.ctaLinkChecked&&a.jsx(j,{placeholder:"Input Value",label:"CTA Link",onChange:e.handleChange("ctaLink"),value:e.values.ctaLink,error:e.touched.ctaLink&&!!e.errors.ctaLink,errorMessage:e.touched.ctaLink?e.errors.ctaLink:""}),$&&a.jsx(R,{title:e.values.title,body:e.values.body,cta:e.values.ctaLink,channelName:(u==null?void 0:u.name)||"",icon:(u==null?void 0:u.iconV2)||"",image:e.values.mediaUrl,chainId:parseInt(e.values.chainId)})]}),a.jsx(fe,{disabled:g,children:g?"Sending":" Send Notification"})]})})},O=()=>{const[i,t]=U.useState(!0),{userPushSDKInstance:r}=S(m=>m.user),{account:n,chainId:l}=Y(),{data:d}=be({alias:n,aliasChain:Se[l]}),{data:x}=Ce((d==null?void 0:d.channel)||n),{delegatees:g}=S(m=>m.admin),y=ve();return U.useEffect(()=>{!x&&!(g!=null&&g.length)&&!d&&y("/channels")},[x]),a.jsxs(c,{padding:{dp:"spacing-lg",ml:"spacing-sm"},display:"flex",flexDirection:"column",gap:{dp:"spacing-xl",ml:"spacing-md"},alignSelf:"center",width:{dp:"648px",ml:"357px"},borderRadius:"radius-lg",alignItems:"center",backgroundColor:"surface-primary",margin:{dp:"spacing-lg",ml:"spacing-sm"},children:[a.jsx(f,{color:"text-primary",variant:"h3-semibold",display:{dp:"block",ml:"none"},children:"Send Notification"}),a.jsx(f,{color:"text-primary",variant:"h5-semibold",display:{dp:"none",ml:"block"},children:"Send Notification"}),a.jsx(c,{width:"100%",children:a.jsx(q,{channelDetails:x})}),i&&r&&(r==null?void 0:r.readmode())&&a.jsx(c,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:C`
            z-index: 99999;
          `,children:a.jsx(je,{type:ke.MODAL,showConnectModal:!0,onClose:()=>t(!1),description:"Unlock your profile to proceed."})})]})},J=()=>a.jsx(Ee,{children:a.jsx(O,{})})});export{Ve as __tla,J as default};
