import{gL as re,gy as le,d_ as a,d$ as c,e2 as f,gz as ce,gM as oe,gN as de,ed as G,gn as ue,gO as he,dX as U,dV as X,gi as pe,f3 as S,gP as ge,gQ as xe,gk as me,gR as T,e3 as C,gS as w,gT as j,gf as fe,gU as ye,f_ as be,el as Ce,gV as ve,gW as je,gE as ke,dW as Se,gX as Te,__tla as Ie}from"./index-12q0UTS3.js";import{c as _e,a as h,u as Ue,__tla as we}from"./index.esm-4hh3oKAf.js";import{u as Le,__tla as De}from"./useMutation-djVGkEPx.js";import{g,a as J,b as Ae}from"./Common.form-Ds5bAxK4.js";import{U as Re,a as Me,__tla as Ee}from"./UnlockProfileWrapper-BSuMa81b.js";import{C as Ve,__tla as Ne}from"./ContentLayout-vjRseRvG.js";let Q,Fe=Promise.all([(()=>{try{return Ie}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return De}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return Ne}catch{}})()]).then(async()=>{let L,D,A,R,M,E,V,N,F,P,B,O,z,K;L=i=>i,D=({userPushSDKInstance:i,channel:t,recipients:r,payload:n,notification:l})=>i.channel.send(r,{notification:l,payload:n,channel:t}).then(L),A=()=>Le({mutationKey:[re],mutationFn:D}),R=i=>{const t=le(),r=({title:n,body:l,cta:d,channelName:x,icon:p,image:y,chainId:m})=>a.jsx(ce,{notificationTitle:n,notificationBody:l,cta:d,app:x,icon:p,image:y,chainName:oe[m],theme:t.mode,url:""});return a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-none",children:[a.jsx(f,{variant:"h6-semibold",color:"text-primary",textTransform:"uppercase",children:"Preview Notification"}),a.jsx(r,{...i})]})},M=(i,t)=>{var r,n;return[...((n=(r=i==null?void 0:i.aliases)==null?void 0:r.filter(l=>l.is_alias_verified&&de(l.alias_address)===t))==null?void 0:n.map(l=>parseInt(l.alias_blockchain_id)))||[],G.coreContractChain]},E=(i,t)=>{const r=[...i||[],...t?[t]:[]];return r&&r.length?r==null?void 0:r.map(n=>({icon:a.jsx(c,{width:"24px",height:"24px",borderRadius:"radius-xxs",overflow:"hidden",children:a.jsx("img",{width:"100%",height:"100%",src:n==null?void 0:n.iconV2,alt:n==null?void 0:n.name})}),label:n==null?void 0:n.name,value:n==null?void 0:n.channel})):[]},V=i=>{var n;let t=[];const r={label:"Default",value:"0"};return i&&(t=((n=JSON.parse(i==null?void 0:i.channel_settings))==null?void 0:n.map((l,d)=>({label:l==null?void 0:l.description,value:(d+1).toString()})))||[]),[...t,r]},N=(i,t)=>{if(t){if(i==="SUBSET")return t.split(",");if(i==="TARGETTED")return[t]}return["*"]},F=(i,t,r)=>{var n;return r?ue(i.channel,parseInt(t)):((n=i.aliases.find(l=>l.alias_blockchain_id===t))==null?void 0:n.alias_address)||i.channel},P=[{label:"Broadcast",value:"BROADCAST"},{label:"Targeted",value:"TARGETTED"},{label:"Subset",value:"SUBSET"}],B=i=>_e().shape({channelAddress:h().required(g("Delegate")),chainId:h().required(g("Chain")),type:h().required(g("Type")),body:h().required(g("Description")).max(500,J(500)),setting:h().required(g("Setting")),recipient:h().test("recipient",g("Recipient"),function(t){return(this.parent.type!=="SUBSET"||i)&&(this.parent.type!=="TARGETTED"||!!t)}),title:h().test("title",g("Title"),function(t){return!this.parent.titleChecked||!!t}).max(80,J(80)),mediaUrl:h().test("mediaUrl",g("Media URL"),function(t){return!this.parent.mediaUrlChecked||!!t}),ctaLink:h().test("ctaLink",Ae("CTA Link"),function(t){return this.parent.ctaLinkChecked?!!t&&he(t):!0})}),O=(i,t)=>{var r,n;return{channelAddress:((r=i[0])==null?void 0:r.value)||"",chainId:((n=t[0])==null?void 0:n.value)||G.coreContractChain.toString(),type:"BROADCAST",recipient:"",titleChecked:!1,mediaUrlChecked:!1,ctaLinkChecked:!1,title:"",body:"",setting:"0",mediaUrl:"",ctaLink:""}},z=({channelDetails:i})=>{const[t,r]=U.useState([]),{chainId:n,switchChain:l,account:d}=X(),{mutate:x,isPending:p}=A(),y=pe(),{userPushSDKInstance:m}=S(s=>s.user),{delegatees:k}=S(s=>s.admin),$=ve===n,I=E(k,i),u=(k==null?void 0:k.find(s=>{var o;return s.channel===((o=I[0])==null?void 0:o.value)}))||i,q=ge(M(u,d)),e=Ue({initialValues:O(I,q),validationSchema:B(!!t.length),onSubmit:s=>{Y(s)}}),H=e.values.body||e.values.title||e.values.ctaLink||e.values.mediaUrl,Y=({chainId:s,title:o,type:b,recipient:v,ctaLink:te,mediaUrl:se,body:W,setting:ne})=>{x({channel:F(u,s,$),recipients:N(b,v||t.join()),notification:{title:o,body:W},userPushSDKInstance:m,payload:{title:o,body:W,cta:te,embed:se,category:parseInt(ne)??void 0}},{onSuccess:()=>{y.showMessageToast({toastTitle:"Success",toastMessage:"Successfully sent notification",toastType:"SUCCESS",getToastIcon:_=>a.jsx(xe,{size:_,color:"green"})}),e.resetForm()},onError:_=>{_&&y.showMessageToast({toastTitle:"Error",toastMessage:"Unable to send notification",toastType:"ERROR",getToastIcon:ie=>a.jsx(me,{size:ie,color:"red"})})}})},Z=s=>{if(s.key==="Enter"&&s.preventDefault(),["Enter",","].includes(s.key)){const o=e.values.recipient.split(" ").filter(b=>b);r(b=>{const v=new Set([...b,...o]);return Array.from(v)}),e.setFieldValue("recipient","")}},ee=s=>{r(o=>o.filter((b,v)=>v!==s))},ae=s=>{e.setFieldValue("type",s),e.setFieldValue("recipient",""),r([])};return a.jsx("form",{onSubmit:e.handleSubmit,children:a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignItems:"center",children:[a.jsxs(c,{display:"flex",gap:{dp:"spacing-md",ml:"spacing-sm"},width:"100%",flexDirection:"column",children:[a.jsxs(c,{display:"flex",gap:"spacing-sm",flexDirection:{dp:"row",ml:"column"},children:[a.jsx(c,{width:{dp:"65%",ml:"auto"},children:a.jsx(T,{options:I,value:e.values.channelAddress,onSelect:e.handleChange("channelAddress"),error:e.touched.channelAddress&&!!e.errors.channelAddress,errorMessage:e.touched.channelAddress?e.errors.channelAddress:""})}),a.jsx(T,{options:q,value:e.values.chainId,onSelect:s=>{e.setFieldValue("chainId",s),l(parseInt(s))},error:e.touched.chainId&&!!e.errors.chainId,errorMessage:e.touched.chainId?e.errors.chainId:""})]}),a.jsx(T,{options:P,value:e.values.type,onSelect:s=>ae(s),error:e.touched.type&&!!e.errors.type,errorMessage:e.touched.type?e.errors.type:""}),a.jsxs(c,{display:"flex",gap:"spacing-sm",justifyContent:"space-between",css:C`
              flex-wrap: wrap;
            `,children:[a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",alignItems:"center",backgroundColor:"surface-secondary",borderRadius:"radius-xs",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"Title"}),a.jsx(w,{leadingToggle:!1,checked:e.values.titleChecked,onCheckedChange:s=>e.setFieldValue("titleChecked",s)})]}),a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"Media URL"}),a.jsx(w,{leadingToggle:!1,checked:e.values.mediaUrlChecked,onCheckedChange:s=>e.setFieldValue("mediaUrlChecked",s)})]}),a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"CTA Link"}),a.jsx(w,{leadingToggle:!1,checked:e.values.ctaLinkChecked,onCheckedChange:s=>e.setFieldValue("ctaLinkChecked",s)})]})]}),e.values.type==="TARGETTED"&&a.jsx(j,{placeholder:"Input Value",label:"Recipient Wallet Address",onChange:e.handleChange("recipient"),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""}),e.values.type==="SUBSET"&&a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-xs",onKeyDown:s=>Z(s),children:[a.jsx(c,{display:"flex",gap:"spacing-xxs",css:C`
                  flex-wrap: wrap;
                `,children:!!t.length&&t.map((s,o)=>a.jsxs(c,{display:"flex",gap:"spacing-xxs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xxxs spacing-xxs",borderRadius:"radius-xxxs",backgroundColor:"surface-brand-medium",children:[a.jsx(f,{color:"text-brand-subtle",children:s.slice(0,-1)}),a.jsx(c,{cursor:"pointer",display:"flex",alignItems:"center",onClick:()=>ee(o),children:a.jsx(fe,{size:14,color:"icon-secondary"})})]}))}),a.jsx(j,{placeholder:"Input Value",label:"Enter Recipients Wallet Addresses",description:"Enter recipients wallet addresses separated by a comma or by pressing the enter key",onChange:s=>e.setFieldValue("recipient",s.target.value),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""})]}),e.values.titleChecked&&a.jsx(j,{totalCount:80,placeholder:"Input Value",label:"Notification Title",onChange:e.handleChange("title"),value:e.values.title,error:e.touched.title&&!!e.errors.title,errorMessage:e.touched.title?e.errors.title:""}),a.jsx(ye,{label:"Notification Message",placeholder:"Input Value",totalCount:500,onChange:e.handleChange("body"),value:e.values.body,error:e.touched.body&&!!e.errors.body,errorMessage:e.touched.body?e.errors.body:""}),a.jsx(T,{action:a.jsx(be,{textProps:{color:"text-brand-medium"},to:"/channel/settings",children:"Manage Setting"}),label:"Notification Setting Type",options:V(u),value:e.values.setting,onSelect:e.handleChange("setting"),error:e.touched.setting&&!!e.errors.setting,errorMessage:e.touched.setting?e.errors.setting:""}),e.values.mediaUrlChecked&&a.jsx(j,{placeholder:"Input Value",label:"Media URL",onChange:e.handleChange("mediaUrl"),value:e.values.mediaUrl,error:e.touched.mediaUrl&&!!e.errors.mediaUrl,errorMessage:e.touched.mediaUrl?e.errors.mediaUrl:""}),e.values.ctaLinkChecked&&a.jsx(j,{placeholder:"Input Value",label:"CTA Link",onChange:e.handleChange("ctaLink"),value:e.values.ctaLink,error:e.touched.ctaLink&&!!e.errors.ctaLink,errorMessage:e.touched.ctaLink?e.errors.ctaLink:""}),H&&a.jsx(R,{title:e.values.title,body:e.values.body,cta:e.values.ctaLink,channelName:(u==null?void 0:u.name)||"",icon:(u==null?void 0:u.iconV2)||"",image:e.values.mediaUrl,chainId:parseInt(e.values.chainId)})]}),a.jsx(Ce,{disabled:p,children:p?"Sending":" Send Notification"})]})})},K=()=>{const[i,t]=U.useState(!0),{userPushSDKInstance:r}=S(m=>m.user),{account:n,chainId:l}=X(),{data:d}=je({alias:n,aliasChain:Te[l]}),{data:x}=ke((d==null?void 0:d.channel)||n),{delegatees:p}=S(m=>m.admin),y=Se();return U.useEffect(()=>{!x&&!(p!=null&&p.length)&&!d&&y("/channels")},[x]),a.jsxs(c,{padding:{dp:"spacing-lg",ml:"spacing-sm"},display:"flex",flexDirection:"column",gap:{dp:"spacing-xl",ml:"spacing-md"},alignSelf:"center",width:{dp:"648px",ml:"357px"},borderRadius:"radius-lg",alignItems:"center",backgroundColor:"surface-primary",margin:{dp:"spacing-lg",ml:"spacing-sm"},children:[a.jsx(f,{color:"text-primary",variant:"h3-semibold",display:{initial:"block",ml:"none"},children:"Send Notification"}),a.jsx(f,{color:"text-primary",variant:"h5-semibold",display:{initial:"none",ml:"block"},children:"Send Notification"}),a.jsx(c,{width:"100%",children:a.jsx(z,{channelDetails:x})}),i&&r&&(r==null?void 0:r.readmode())&&a.jsx(c,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:C`
            z-index: 99999;
          `,children:a.jsx(Re,{type:Me.MODAL,showConnectModal:!0,onClose:()=>t(!1),description:"Unlock your profile to proceed."})})]})},Q=()=>a.jsx(Ve,{children:a.jsx(K,{})})});export{Fe as __tla,Q as default};
