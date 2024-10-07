import{iE as ne,iF as re,cv as a,cw as c,cU as y,hQ as le,iG as ce,iH as oe,cM as J,h7 as de,cs as w,cq as Q,h3 as he,gq as S,h9 as ue,ha as pe,iI as T,cT as C,iJ as U,iK as j,i7 as ge,iL as xe,hB as me,gn as ye,iM as fe,iN as be,ij as Ce,cr as ve,iO as je,iP as ke,iQ as Se,__tla as Te}from"./index-B9hAuE8R.js";import{c as Ie,a as u,u as _e,__tla as we}from"./index.esm-CXM6XTgW.js";import{g as Ue,__tla as De}from"./Common.utils-7c5pBo9p.js";import{u as Ae,__tla as Le}from"./useMutation-QYYgE4LA.js";import{g as p}from"./Common.form-iMV6nXze.js";import{C as Me,__tla as Re}from"./ContentLayout-BvmZR9n8.js";let W,Ee=Promise.all([(()=>{try{return Te}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return De}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Re}catch{}})()]).then(async()=>{let D,A,L,M,R,E,V,N,F,B,P,q,K,O;D=n=>n,A=({userPushSDKInstance:n,channel:t,recipients:r,payload:i,notification:l})=>n.channel.send(r,{notification:l,payload:i,channel:t}).then(D),L=()=>Ae({mutationKey:[ne],mutationFn:A}),M=n=>{const t=re(),r=({title:i,body:l,cta:d,channelName:x,icon:g,image:f,chainId:m})=>a.jsx(le,{notificationTitle:i,notificationBody:l,cta:d,app:x,icon:g,image:f,chainName:ce[m],theme:t.mode,url:""});return a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-none",children:[a.jsx(y,{variant:"h6-semibold",color:"text-primary",textTransform:"uppercase",children:"Preview Notification"}),a.jsx(r,{...n})]})},R=(n,t)=>{var r,i;return[...((i=(r=n==null?void 0:n.aliases)==null?void 0:r.filter(l=>l.is_alias_verified&&oe(l.alias_address)===t))==null?void 0:i.map(l=>parseInt(l.alias_blockchain_id)))||[],J.coreContractChain]},E=(n,t)=>{const r=[...n||[],...t?[t]:[]];return r&&r.length?r==null?void 0:r.map(i=>({icon:a.jsx(c,{width:"24px",height:"24px",borderRadius:"radius-xxs",overflow:"hidden",children:a.jsx("img",{width:"100%",height:"100%",src:i==null?void 0:i.iconV2,alt:i==null?void 0:i.name})}),label:i==null?void 0:i.name,value:i==null?void 0:i.channel})):[]},V=n=>{var i;let t=[];const r={label:"Default",value:"0"};return n&&(t=((i=JSON.parse(n==null?void 0:n.channel_settings))==null?void 0:i.map((l,d)=>({label:l==null?void 0:l.description,value:(d+1).toString()})))||[]),[...t,r]},N=(n,t)=>{if(t){if(n==="SUBSET")return t.split(",");if(n==="TARGETTED")return[t]}return["*"]},F=(n,t,r)=>{var i;return r?de(n.channel,parseInt(t)):((i=n.aliases.find(l=>l.alias_blockchain_id===t))==null?void 0:i.alias_address)||n.channel},B=[{label:"Broadcast",value:"BROADCAST"},{label:"Targeted",value:"TARGETTED"},{label:"Subset",value:"SUBSET"}],P=n=>Ie().shape({channelAddress:u().required(p("Delegate")),chainId:u().required(p("Chain")),type:u().required(p("Type")),body:u().required(p("Description")),setting:u().required(p("Setting")),recipient:u().test("recipient",p("Recipient"),function(t){return(this.parent.type!=="SUBSET"||n)&&(this.parent.type!=="TARGETTED"||!!t)}),title:u().test("title",p("Title"),function(t){return!this.parent.titleChecked||!!t}),mediaUrl:u().test("mediaUrl",p("Media URL"),function(t){return!this.parent.mediaUrlChecked||!!t}),ctaLink:u().test("ctaLink",p("CTA Link"),function(t){return!this.parent.ctaLinkChecked||!!t})}),q=(n,t)=>{var r,i;return{channelAddress:((r=n[0])==null?void 0:r.value)||"",chainId:((i=t[0])==null?void 0:i.value)||J.coreContractChain.toString(),type:"BROADCAST",recipient:"",titleChecked:!1,mediaUrlChecked:!1,ctaLinkChecked:!1,title:"",body:"",setting:"0",mediaUrl:"",ctaLink:""}},K=({channelDetails:n})=>{const[t,r]=w.useState([]),{chainId:i,switchChain:l,account:d}=Q(),{mutate:x,isPending:g}=L(),f=he(),{userPushSDKInstance:m}=S(s=>s.user),{delegatees:k}=S(s=>s.admin),H=fe===i,I=E(k,n),h=(k==null?void 0:k.find(s=>{var o;return s.channel===((o=I[0])==null?void 0:o.value)}))||n,G=Ue(R(h,d)),e=_e({initialValues:q(I,G),validationSchema:P(!!t.length),onSubmit:s=>{Y(s)}}),X=e.values.body||e.values.title||e.values.ctaLink||e.values.mediaUrl,Y=({chainId:s,title:o,type:b,recipient:v,ctaLink:ae,mediaUrl:te,body:z,setting:se})=>{x({channel:F(h,s,H),recipients:N(b,v||t.join()),notification:{title:o,body:z},userPushSDKInstance:m,payload:{title:o,body:z,cta:ae,embed:te,category:parseInt(se)??void 0}},{onSuccess:()=>{f.showMessageToast({toastTitle:"Success",toastMessage:"Successfully sent notification",toastType:"SUCCESS",getToastIcon:_=>a.jsx(ue,{size:_,color:"green"})}),e.resetForm()},onError:_=>{_&&f.showMessageToast({toastTitle:"Error",toastMessage:"Unable to send notification",toastType:"ERROR",getToastIcon:ie=>a.jsx(pe,{size:ie,color:"red"})})}})},Z=s=>{if(s.key==="Enter"&&s.preventDefault(),["Enter",","].includes(s.key)){const o=e.values.recipient.split(" ").filter(b=>b);r(b=>{const v=new Set([...b,...o]);return Array.from(v)}),e.setFieldValue("recipient","")}},$=s=>{r(o=>o.filter((b,v)=>v!==s))},ee=s=>{e.setFieldValue("type",s),e.setFieldValue("recipient",""),r([])};return a.jsx("form",{onSubmit:e.handleSubmit,children:a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignItems:"center",children:[a.jsxs(c,{display:"flex",gap:{dp:"spacing-md",ml:"spacing-sm"},width:"100%",flexDirection:"column",children:[a.jsxs(c,{display:"flex",gap:"spacing-sm",flexDirection:{dp:"row",ml:"column"},children:[a.jsx(c,{width:{dp:"65%",ml:"auto"},children:a.jsx(T,{options:I,value:e.values.channelAddress,onSelect:e.handleChange("channelAddress"),error:e.touched.channelAddress&&!!e.errors.channelAddress,errorMessage:e.touched.channelAddress?e.errors.channelAddress:""})}),a.jsx(T,{options:G,value:e.values.chainId,onSelect:s=>{e.setFieldValue("chainId",s),l(parseInt(s))},error:e.touched.chainId&&!!e.errors.chainId,errorMessage:e.touched.chainId?e.errors.chainId:""})]}),a.jsx(T,{options:B,value:e.values.type,onSelect:s=>ee(s),error:e.touched.type&&!!e.errors.type,errorMessage:e.touched.type?e.errors.type:""}),a.jsxs(c,{display:"flex",gap:"spacing-sm",justifyContent:"space-between",css:C`
              flex-wrap: wrap;
            `,children:[a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",alignItems:"center",backgroundColor:"surface-secondary",borderRadius:"radius-xs",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(y,{ellipsis:!0,variant:"bs-semibold",children:"Title"}),a.jsx(U,{leadingToggle:!1,checked:e.values.titleChecked,onCheckedChange:s=>e.setFieldValue("titleChecked",s)})]}),a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(y,{ellipsis:!0,variant:"bs-semibold",children:"Media URL"}),a.jsx(U,{leadingToggle:!1,checked:e.values.mediaUrlChecked,onCheckedChange:s=>e.setFieldValue("mediaUrlChecked",s)})]}),a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(y,{ellipsis:!0,variant:"bs-semibold",children:"CTA Link"}),a.jsx(U,{leadingToggle:!1,checked:e.values.ctaLinkChecked,onCheckedChange:s=>e.setFieldValue("ctaLinkChecked",s)})]})]}),e.values.type==="TARGETTED"&&a.jsx(j,{placeholder:"Input Value",label:"Recipient Wallet Address",onChange:e.handleChange("recipient"),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""}),e.values.type==="SUBSET"&&a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-xs",onKeyDown:s=>Z(s),children:[a.jsx(c,{display:"flex",gap:"spacing-xxs",css:C`
                  flex-wrap: wrap;
                `,children:!!t.length&&t.map((s,o)=>a.jsxs(c,{display:"flex",gap:"spacing-xxs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xxxs spacing-xxs",borderRadius:"radius-xxxs",backgroundColor:"surface-brand-medium",children:[a.jsx(y,{color:"text-brand-subtle",children:s.slice(0,-1)}),a.jsx(c,{cursor:"pointer",display:"flex",alignItems:"center",onClick:()=>$(o),children:a.jsx(ge,{size:14,color:"icon-secondary"})})]}))}),a.jsx(j,{placeholder:"Input Value",label:"Enter Recipients Wallet Addresses",description:"Enter recipients wallet addresses separated by a comma or by pressing the enter key",onChange:s=>e.setFieldValue("recipient",s.target.value),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""})]}),e.values.titleChecked&&a.jsx(j,{totalCount:80,placeholder:"Input Value",label:"Notification Title",onChange:e.handleChange("title"),value:e.values.title,error:e.touched.title&&!!e.errors.title,errorMessage:e.touched.title?e.errors.title:""}),a.jsx(xe,{label:"Notification Message",placeholder:"Input Value",totalCount:500,onChange:e.handleChange("body"),value:e.values.body,error:e.touched.body&&!!e.errors.body,errorMessage:e.touched.body?e.errors.body:""}),a.jsx(T,{action:a.jsx(me,{textProps:{color:"text-brand-medium"},to:"/channel/settings",children:"Manage Setting"}),label:"Notification Setting Type",options:V(h),value:e.values.setting,onSelect:e.handleChange("setting"),error:e.touched.setting&&!!e.errors.setting,errorMessage:e.touched.setting?e.errors.setting:""}),e.values.mediaUrlChecked&&a.jsx(j,{placeholder:"Input Value",label:"Media URL",onChange:e.handleChange("mediaUrl"),value:e.values.mediaUrl,error:e.touched.mediaUrl&&!!e.errors.mediaUrl,errorMessage:e.touched.mediaUrl?e.errors.mediaUrl:""}),e.values.ctaLinkChecked&&a.jsx(j,{placeholder:"Input Value",label:"CTA Link",onChange:e.handleChange("ctaLink"),value:e.values.ctaLink,error:e.touched.ctaLink&&!!e.errors.ctaLink,errorMessage:e.touched.ctaLink?e.errors.ctaLink:""}),X&&a.jsx(M,{title:e.values.title,body:e.values.body,cta:e.values.ctaLink,channelName:(h==null?void 0:h.name)||"",icon:(h==null?void 0:h.iconV2)||"",image:e.values.mediaUrl,chainId:parseInt(e.values.chainId)})]}),a.jsx(ye,{disabled:g,children:g?"Sending":" Send Notification"})]})})},O=()=>{const[n,t]=w.useState(!0),{userPushSDKInstance:r}=S(m=>m.user),{account:i,chainId:l}=Q(),{data:d}=be({alias:i,aliasChain:Se[l]}),{data:x}=Ce((d==null?void 0:d.channel)||i),{delegatees:g}=S(m=>m.admin),f=ve();return w.useEffect(()=>{!x&&!(g!=null&&g.length)&&!d&&f("/channels")},[x]),a.jsxs(c,{padding:{dp:"spacing-lg",ml:"spacing-sm"},display:"flex",flexDirection:"column",gap:{dp:"spacing-xl",ml:"spacing-md"},alignSelf:"center",width:{dp:"648px",ml:"357px"},borderRadius:"radius-lg",alignItems:"center",backgroundColor:"surface-primary",margin:{dp:"spacing-lg",ml:"spacing-sm"},children:[a.jsx(y,{color:"text-primary",variant:"h3-semibold",display:{initial:"block",ml:"none"},children:"Send Notification"}),a.jsx(y,{color:"text-primary",variant:"h5-semibold",display:{initial:"none",ml:"block"},children:"Send Notification"}),a.jsx(c,{width:"100%",children:a.jsx(K,{channelDetails:x})}),n&&r&&(r==null?void 0:r.readmode())&&a.jsx(c,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:C`
            z-index: 99999;
          `,children:a.jsx(je,{type:ke.MODAL,showConnectModal:!0,onClose:()=>t(!1),description:"Unlock your profile to proceed."})})]})},W=()=>a.jsx(Me,{children:a.jsx(O,{})})});export{Ee as __tla,W as default};
