import{dL as ie,dM as te,b1 as a,b2 as l,bp as g,dN as ne,dO as re,db as le,a_ as O,aY as z,c$ as ce,b$ as T,dq as de,d2 as oe,dP as j,bq as m,dQ as I,dR as b,cX as ue,dS as he,dF as pe,bY as ge,dT as xe,dr as me,aZ as ye,dU as fe,dV as be,__tla as ve}from"./index-DnzKmFxo.js";import{c as Ce,a as u,u as je,__tla as ke}from"./index.esm-CwRfMV5R.js";import{g as Se,__tla as Te}from"./Common.utils-DV8MxIGE.js";import{u as Ie,__tla as _e}from"./useMutation-CR-caW6v.js";import{g as h}from"./Common.form-LPxQflxb.js";import{C as we,__tla as Ue}from"./ContentLayout-W130TEwl.js";let G,Le=Promise.all([(()=>{try{return ve}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return Ue}catch{}})()]).then(async()=>{let _,w,U,L,D,A,E,M,R,V,N,F,B,P;_=i=>i,w=({userPushSDKInstance:i,channel:s,recipients:n,payload:r,notification:c})=>i.channel.send(n,{notification:c,payload:r,channel:s}).then(_),U=()=>Ie({mutationKey:[ie],mutationFn:w}),L=i=>{const s=te(),n=({title:r,body:c,cta:y,channelName:v,icon:C,image:k,chainId:d})=>a.jsx(ne,{notificationTitle:r,notificationBody:c,cta:y,app:v,icon:C,image:k,chainName:re[d],theme:s.mode,url:""});return a.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing-none",children:[a.jsx(g,{variant:"h6-semibold",color:"text-primary",textTransform:"uppercase",children:"Preview Notification"}),a.jsx(n,{...i})]})},D=i=>{var s,n;return[...((n=(s=i==null?void 0:i.aliases)==null?void 0:s.filter(r=>r.is_alias_verified))==null?void 0:n.map(r=>parseInt(r.alias_blockchain_id)))||[],11155111]},A=i=>i&&i.length?i==null?void 0:i.map(s=>({icon:a.jsx(l,{width:"24px",height:"24px",borderRadius:"radius-xxs",overflow:"hidden",children:a.jsx("img",{width:"100%",height:"100%",src:s==null?void 0:s.iconV2,alt:s==null?void 0:s.name})}),label:s==null?void 0:s.name,value:s==null?void 0:s.channel})):[],E=i=>{var r;let s=[];const n={label:"Default",value:"0"};return i&&(s=((r=JSON.parse(i==null?void 0:i.channel_settings))==null?void 0:r.map((c,y)=>({label:c==null?void 0:c.description,value:(y+1).toString()})))||[]),[...s,n]},M=(i,s)=>{if(s){if(i==="SUBSET")return s.split(",");if(i==="TARGETTED")return[s]}return["*"]},R=(i,s,n)=>{var r;return console.debug(i),n?le(i.channel,parseInt(s)):((r=i.aliases.find(c=>c.alias_blockchain_id===s))==null?void 0:r.alias_address)||i.channel},V=[{label:"Broadcast",value:"BROADCAST"},{label:"Targeted",value:"TARGETTED"},{label:"Subset",value:"SUBSET"}],N=i=>Ce().shape({channelAddress:u().required(h("Delegate")),chainId:u().required(h("Chain")),type:u().required(h("Type")),body:u().required(h("Description")),setting:u().required(h("Setting")),recipient:u().test("recipient",h("Recipient"),function(s){return(this.parent.type!=="SUBSET"||i)&&(this.parent.type!=="TARGETTED"||!!s)}),title:u().test("title",h("Title"),function(s){return!this.parent.titleChecked||!!s}),mediaUrl:u().test("mediaUrl",h("Media URL"),function(s){return!this.parent.mediaUrlChecked||!!s}),ctaLink:u().test("ctaLink",h("CTA Link"),function(s){return!this.parent.ctaLinkChecked||!!s})}),F=i=>{var s;return{channelAddress:((s=i[0])==null?void 0:s.value)||"",chainId:"11155111",type:"BROADCAST",recipient:"",titleChecked:!1,mediaUrlChecked:!1,ctaLinkChecked:!1,title:"",body:"",setting:"0",mediaUrl:"",ctaLink:""}},B=({channelDetails:i})=>{const[s,n]=O.useState([]),{chainId:r,switchChain:c}=z(),{mutate:y,isPending:v}=U(),C=ce(),{userPushSDKInstance:k}=T(t=>t.user),{delegatees:d}=T(t=>t.admin),W=xe===r,q=A(d!=null&&d.length?d:i?[i]:[]),e=je({initialValues:F(q),validationSchema:N(!!s.length),onSubmit:t=>{J(t)}}),o=(d==null?void 0:d.find(t=>t.channel===e.values.channelAddress))||i,Y=Se(D(o)),$=e.values.body||e.values.title||e.values.ctaLink||e.values.mediaUrl,J=({chainId:t,title:p,type:x,recipient:f,ctaLink:H,mediaUrl:ee,body:K,setting:ae})=>{y({channel:R(o,t,W),recipients:M(x,f||s.join()),notification:{title:p,body:K},userPushSDKInstance:k,payload:{title:p,body:K,cta:H,embed:ee,category:parseInt(ae)??void 0}},{onSuccess:()=>{C.showMessageToast({toastTitle:"Success",toastMessage:"Successfully sent notification",toastType:"SUCCESS",getToastIcon:S=>a.jsx(de,{size:S,color:"green"})}),e.resetForm()},onError:S=>{S&&C.showMessageToast({toastTitle:"Error",toastMessage:"Unable to send notification",toastType:"ERROR",getToastIcon:se=>a.jsx(oe,{size:se,color:"red"})})}})},Q=t=>{if(t.key==="Enter"&&t.preventDefault(),["Enter",","].includes(t.key)){const p=e.values.recipient.split(" ").filter(x=>x);n(x=>{const f=new Set([...x,...p]);return Array.from(f)}),e.setFieldValue("recipient","")}},X=t=>{n(p=>p.filter((x,f)=>f!==t))},Z=t=>{e.setFieldValue("type",t),e.setFieldValue("recipient",""),n([])};return a.jsx("form",{onSubmit:e.handleSubmit,children:a.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignItems:"center",children:[a.jsxs(l,{display:"flex",gap:{dp:"spacing-md",ml:"spacing-sm"},width:"100%",flexDirection:"column",children:[a.jsxs(l,{display:"flex",gap:"spacing-sm",flexDirection:{dp:"row",ml:"column"},children:[a.jsx(l,{width:{dp:"65%",ml:"auto"},children:a.jsx(j,{options:q,value:e.values.channelAddress,onSelect:e.handleChange("channelAddress"),error:e.touched.channelAddress&&!!e.errors.channelAddress,errorMessage:e.touched.channelAddress?e.errors.channelAddress:""})}),a.jsx(j,{options:Y,value:e.values.chainId,onSelect:t=>{e.setFieldValue("chainId",t),c(parseInt(t))},error:e.touched.chainId&&!!e.errors.chainId,errorMessage:e.touched.chainId?e.errors.chainId:""})]}),a.jsx(j,{options:V,value:e.values.type,onSelect:t=>Z(t),error:e.touched.type&&!!e.errors.type,errorMessage:e.touched.type?e.errors.type:""}),a.jsxs(l,{display:"flex",gap:"spacing-sm",justifyContent:"space-between",css:m`
              flex-wrap: wrap;
            `,children:[a.jsxs(l,{css:m`
                flex: 1;
              `,display:"flex",alignItems:"center",backgroundColor:"surface-secondary",borderRadius:"radius-xs",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(g,{ellipsis:!0,variant:"bs-semibold",children:"Title"}),a.jsx(I,{leadingToggle:!1,checked:e.values.titleChecked,onCheckedChange:t=>e.setFieldValue("titleChecked",t)})]}),a.jsxs(l,{css:m`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(g,{ellipsis:!0,variant:"bs-semibold",children:"Media URL"}),a.jsx(I,{leadingToggle:!1,checked:e.values.mediaUrlChecked,onCheckedChange:t=>e.setFieldValue("mediaUrlChecked",t)})]}),a.jsxs(l,{css:m`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(g,{ellipsis:!0,variant:"bs-semibold",children:"CTA Link"}),a.jsx(I,{leadingToggle:!1,checked:e.values.ctaLinkChecked,onCheckedChange:t=>e.setFieldValue("ctaLinkChecked",t)})]})]}),e.values.type==="TARGETTED"&&a.jsx(b,{placeholder:"Input Value",label:"Recipient Wallet Address",onChange:e.handleChange("recipient"),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""}),e.values.type==="SUBSET"&&a.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing-xs",onKeyDown:t=>Q(t),children:[a.jsx(l,{display:"flex",gap:"spacing-xxs",css:m`
                  flex-wrap: wrap;
                `,children:!!s.length&&s.map((t,p)=>a.jsxs(l,{display:"flex",gap:"spacing-xxs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xxxs spacing-xxs",borderRadius:"radius-xxxs",backgroundColor:"surface-brand-medium",children:[a.jsx(g,{color:"text-brand-subtle",children:t.slice(0,-1)}),a.jsx(l,{cursor:"pointer",display:"flex",alignItems:"center",onClick:()=>X(p),children:a.jsx(ue,{size:14,color:"icon-secondary"})})]}))}),a.jsx(b,{placeholder:"Input Value",label:"Enter Recipients Wallet Addresses",description:"Enter recipients wallet addresses separated by a comma or by pressing the enter key",onChange:t=>e.setFieldValue("recipient",t.target.value),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""})]}),e.values.titleChecked&&a.jsx(b,{totalCount:80,placeholder:"Input Value",label:"Notification Title",onChange:e.handleChange("title"),value:e.values.title,error:e.touched.title&&!!e.errors.title,errorMessage:e.touched.title?e.errors.title:""}),a.jsx(he,{label:"Notification Message",placeholder:"Input Value",totalCount:500,onChange:e.handleChange("body"),value:e.values.body,error:e.touched.body&&!!e.errors.body,errorMessage:e.touched.body?e.errors.body:""}),a.jsx(j,{action:a.jsx(pe,{textProps:{color:"text-brand-medium"},to:"/channel/settings",children:"Manage Setting"}),label:"Notification Setting Type",options:E(o),value:e.values.setting,onSelect:e.handleChange("setting"),error:e.touched.setting&&!!e.errors.setting,errorMessage:e.touched.setting?e.errors.setting:""}),e.values.mediaUrlChecked&&a.jsx(b,{placeholder:"Input Value",label:"Media URL",onChange:e.handleChange("mediaUrl"),value:e.values.mediaUrl,error:e.touched.mediaUrl&&!!e.errors.mediaUrl,errorMessage:e.touched.mediaUrl?e.errors.mediaUrl:""}),e.values.ctaLinkChecked&&a.jsx(b,{placeholder:"Input Value",label:"CTA Link",onChange:e.handleChange("ctaLink"),value:e.values.ctaLink,error:e.touched.ctaLink&&!!e.errors.ctaLink,errorMessage:e.touched.ctaLink?e.errors.ctaLink:""}),$&&a.jsx(L,{title:e.values.title,body:e.values.body,cta:e.values.ctaLink,channelName:(o==null?void 0:o.name)||"",icon:(o==null?void 0:o.iconV2)||"",image:e.values.mediaUrl,chainId:parseInt(e.values.chainId)})]}),a.jsx(ge,{disabled:v,children:v?"Sending":" Send Notification"})]})})},P=()=>{const{userPushSDKInstance:i}=T(c=>c.user),{account:s}=z(),{data:n}=me(s),r=ye();return O.useEffect(()=>{n||r("/channels")},[n]),a.jsxs(l,{padding:{dp:"spacing-lg",ml:"spacing-sm"},display:"flex",flexDirection:"column",gap:{dp:"spacing-xl",ml:"spacing-md"},alignSelf:"center",width:{dp:"648px",ml:"357px"},borderRadius:"radius-lg",alignItems:"center",backgroundColor:"surface-primary",margin:{dp:"spacing-lg",ml:"spacing-sm"},children:[a.jsx(g,{color:"text-primary",variant:"h3-semibold",display:{dp:"block",ml:"none"},children:"Send Notification"}),a.jsx(g,{color:"text-primary",variant:"h5-semibold",display:{dp:"none",ml:"block"},children:"Send Notification"}),a.jsx(l,{width:"100%",children:a.jsx(B,{channelDetails:n})}),i&&(i==null?void 0:i.readmode())&&a.jsx(l,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:m`
            z-index: 99999;
          `,children:a.jsx(fe,{type:be.MODAL,showConnectModal:!0})})]})},G=()=>a.jsx(we,{children:a.jsx(P,{})})});export{Le as __tla,G as default};