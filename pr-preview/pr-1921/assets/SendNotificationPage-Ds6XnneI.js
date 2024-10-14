import{h0 as re,h1 as le,e1 as a,e2 as c,es as f,gg as ce,h2 as oe,h3 as de,em as W,fL as he,d_ as U,dY as H,fH as ue,f3 as S,fN as pe,fO as ge,h4 as I,er as C,h5 as w,h6 as j,gx as xe,h7 as me,g2 as fe,f0 as ye,h8 as be,h9 as Ce,gI as ve,dZ as je,ha as ke,hb as Se,hc as Ie,__tla as Te}from"./index-DQDx4L-B.js";import{c as _e,a as u,u as Ue,__tla as we}from"./index.esm-7_mbHRSb.js";import{i as Le,g as De,__tla as Ae}from"./Common.utils-CLU570JY.js";import{u as Me,__tla as Re}from"./useMutation-BHiKrJrC.js";import{g,a as J,b as Ee}from"./Common.form-Ds5bAxK4.js";import{C as Ve,__tla as Ne}from"./ContentLayout-QQHew6Cm.js";let Y,Fe=Promise.all([(()=>{try{return Te}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return Ne}catch{}})()]).then(async()=>{let L,D,A,M,R,E,V,N,F,B,P,O,K,q;L=i=>i,D=({userPushSDKInstance:i,channel:s,recipients:r,payload:n,notification:l})=>i.channel.send(r,{notification:l,payload:n,channel:s}).then(L),A=()=>Me({mutationKey:[re],mutationFn:D}),M=i=>{const s=le(),r=({title:n,body:l,cta:d,channelName:x,icon:p,image:y,chainId:m})=>a.jsx(ce,{notificationTitle:n,notificationBody:l,cta:d,app:x,icon:p,image:y,chainName:oe[m],theme:s.mode,url:""});return a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-none",children:[a.jsx(f,{variant:"h6-semibold",color:"text-primary",textTransform:"uppercase",children:"Preview Notification"}),a.jsx(r,{...i})]})},R=(i,s)=>{var r,n;return[...((n=(r=i==null?void 0:i.aliases)==null?void 0:r.filter(l=>l.is_alias_verified&&de(l.alias_address)===s))==null?void 0:n.map(l=>parseInt(l.alias_blockchain_id)))||[],W.coreContractChain]},E=(i,s)=>{const r=[...i||[],...s?[s]:[]];return r&&r.length?r==null?void 0:r.map(n=>({icon:a.jsx(c,{width:"24px",height:"24px",borderRadius:"radius-xxs",overflow:"hidden",children:a.jsx("img",{width:"100%",height:"100%",src:n==null?void 0:n.iconV2,alt:n==null?void 0:n.name})}),label:n==null?void 0:n.name,value:n==null?void 0:n.channel})):[]},V=i=>{var n;let s=[];const r={label:"Default",value:"0"};return i&&(s=((n=JSON.parse(i==null?void 0:i.channel_settings))==null?void 0:n.map((l,d)=>({label:l==null?void 0:l.description,value:(d+1).toString()})))||[]),[...s,r]},N=(i,s)=>{if(s){if(i==="SUBSET")return s.split(",");if(i==="TARGETTED")return[s]}return["*"]},F=(i,s,r)=>{var n;return r?he(i.channel,parseInt(s)):((n=i.aliases.find(l=>l.alias_blockchain_id===s))==null?void 0:n.alias_address)||i.channel},B=[{label:"Broadcast",value:"BROADCAST"},{label:"Targeted",value:"TARGETTED"},{label:"Subset",value:"SUBSET"}],P=i=>_e().shape({channelAddress:u().required(g("Delegate")),chainId:u().required(g("Chain")),type:u().required(g("Type")),body:u().required(g("Description")).max(500,J(500)),setting:u().required(g("Setting")),recipient:u().test("recipient",g("Recipient"),function(s){return(this.parent.type!=="SUBSET"||i)&&(this.parent.type!=="TARGETTED"||!!s)}),title:u().test("title",g("Title"),function(s){return!this.parent.titleChecked||!!s}).max(80,J(80)),mediaUrl:u().test("mediaUrl",g("Media URL"),function(s){return!this.parent.mediaUrlChecked||!!s}),ctaLink:u().test("ctaLink",Ee("CTA Link"),function(s){return this.parent.ctaLinkChecked?!!s&&Le(s):!0})}),O=(i,s)=>{var r,n;return{channelAddress:((r=i[0])==null?void 0:r.value)||"",chainId:((n=s[0])==null?void 0:n.value)||W.coreContractChain.toString(),type:"BROADCAST",recipient:"",titleChecked:!1,mediaUrlChecked:!1,ctaLinkChecked:!1,title:"",body:"",setting:"0",mediaUrl:"",ctaLink:""}},K=({channelDetails:i})=>{const[s,r]=U.useState([]),{chainId:n,switchChain:l,account:d}=H(),{mutate:x,isPending:p}=A(),y=ue(),{userPushSDKInstance:m}=S(t=>t.user),{delegatees:k}=S(t=>t.admin),Z=be===n,T=E(k,i),h=(k==null?void 0:k.find(t=>{var o;return t.channel===((o=T[0])==null?void 0:o.value)}))||i,z=De(R(h,d)),e=Ue({initialValues:O(T,z),validationSchema:P(!!s.length),onSubmit:t=>{X(t)}}),Q=e.values.body||e.values.title||e.values.ctaLink||e.values.mediaUrl,X=({chainId:t,title:o,type:b,recipient:v,ctaLink:se,mediaUrl:te,body:G,setting:ne})=>{x({channel:F(h,t,Z),recipients:N(b,v||s.join()),notification:{title:o,body:G},userPushSDKInstance:m,payload:{title:o,body:G,cta:se,embed:te,category:parseInt(ne)??void 0}},{onSuccess:()=>{y.showMessageToast({toastTitle:"Success",toastMessage:"Successfully sent notification",toastType:"SUCCESS",getToastIcon:_=>a.jsx(pe,{size:_,color:"green"})}),e.resetForm()},onError:_=>{_&&y.showMessageToast({toastTitle:"Error",toastMessage:"Unable to send notification",toastType:"ERROR",getToastIcon:ie=>a.jsx(ge,{size:ie,color:"red"})})}})},$=t=>{if(t.key==="Enter"&&t.preventDefault(),["Enter",","].includes(t.key)){const o=e.values.recipient.split(" ").filter(b=>b);r(b=>{const v=new Set([...b,...o]);return Array.from(v)}),e.setFieldValue("recipient","")}},ee=t=>{r(o=>o.filter((b,v)=>v!==t))},ae=t=>{e.setFieldValue("type",t),e.setFieldValue("recipient",""),r([])};return a.jsx("form",{onSubmit:e.handleSubmit,children:a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignItems:"center",children:[a.jsxs(c,{display:"flex",gap:{dp:"spacing-md",ml:"spacing-sm"},width:"100%",flexDirection:"column",children:[a.jsxs(c,{display:"flex",gap:"spacing-sm",flexDirection:{dp:"row",ml:"column"},children:[a.jsx(c,{width:{dp:"65%",ml:"auto"},children:a.jsx(I,{options:T,value:e.values.channelAddress,onSelect:e.handleChange("channelAddress"),error:e.touched.channelAddress&&!!e.errors.channelAddress,errorMessage:e.touched.channelAddress?e.errors.channelAddress:""})}),a.jsx(I,{options:z,value:e.values.chainId,onSelect:t=>{e.setFieldValue("chainId",t),l(parseInt(t))},error:e.touched.chainId&&!!e.errors.chainId,errorMessage:e.touched.chainId?e.errors.chainId:""})]}),a.jsx(I,{options:B,value:e.values.type,onSelect:t=>ae(t),error:e.touched.type&&!!e.errors.type,errorMessage:e.touched.type?e.errors.type:""}),a.jsxs(c,{display:"flex",gap:"spacing-sm",justifyContent:"space-between",css:C`
              flex-wrap: wrap;
            `,children:[a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",alignItems:"center",backgroundColor:"surface-secondary",borderRadius:"radius-xs",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"Title"}),a.jsx(w,{leadingToggle:!1,checked:e.values.titleChecked,onCheckedChange:t=>e.setFieldValue("titleChecked",t)})]}),a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"Media URL"}),a.jsx(w,{leadingToggle:!1,checked:e.values.mediaUrlChecked,onCheckedChange:t=>e.setFieldValue("mediaUrlChecked",t)})]}),a.jsxs(c,{css:C`
                flex: 1;
              `,display:"flex",backgroundColor:"surface-secondary",borderRadius:"radius-xs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xs",children:[a.jsx(f,{ellipsis:!0,variant:"bs-semibold",children:"CTA Link"}),a.jsx(w,{leadingToggle:!1,checked:e.values.ctaLinkChecked,onCheckedChange:t=>e.setFieldValue("ctaLinkChecked",t)})]})]}),e.values.type==="TARGETTED"&&a.jsx(j,{placeholder:"Input Value",label:"Recipient Wallet Address",onChange:e.handleChange("recipient"),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""}),e.values.type==="SUBSET"&&a.jsxs(c,{display:"flex",flexDirection:"column",gap:"spacing-xs",onKeyDown:t=>$(t),children:[a.jsx(c,{display:"flex",gap:"spacing-xxs",css:C`
                  flex-wrap: wrap;
                `,children:!!s.length&&s.map((t,o)=>a.jsxs(c,{display:"flex",gap:"spacing-xxs",alignItems:"center",justifyContent:"space-between",padding:"spacing-xxxs spacing-xxs",borderRadius:"radius-xxxs",backgroundColor:"surface-brand-medium",children:[a.jsx(f,{color:"text-brand-subtle",children:t.slice(0,-1)}),a.jsx(c,{cursor:"pointer",display:"flex",alignItems:"center",onClick:()=>ee(o),children:a.jsx(xe,{size:14,color:"icon-secondary"})})]}))}),a.jsx(j,{placeholder:"Input Value",label:"Enter Recipients Wallet Addresses",description:"Enter recipients wallet addresses separated by a comma or by pressing the enter key",onChange:t=>e.setFieldValue("recipient",t.target.value),value:e.values.recipient,error:e.touched.recipient&&!!e.errors.recipient,errorMessage:e.touched.recipient?e.errors.recipient:""})]}),e.values.titleChecked&&a.jsx(j,{totalCount:80,placeholder:"Input Value",label:"Notification Title",onChange:e.handleChange("title"),value:e.values.title,error:e.touched.title&&!!e.errors.title,errorMessage:e.touched.title?e.errors.title:""}),a.jsx(me,{label:"Notification Message",placeholder:"Input Value",totalCount:500,onChange:e.handleChange("body"),value:e.values.body,error:e.touched.body&&!!e.errors.body,errorMessage:e.touched.body?e.errors.body:""}),a.jsx(I,{action:a.jsx(fe,{textProps:{color:"text-brand-medium"},to:"/channel/settings",children:"Manage Setting"}),label:"Notification Setting Type",options:V(h),value:e.values.setting,onSelect:e.handleChange("setting"),error:e.touched.setting&&!!e.errors.setting,errorMessage:e.touched.setting?e.errors.setting:""}),e.values.mediaUrlChecked&&a.jsx(j,{placeholder:"Input Value",label:"Media URL",onChange:e.handleChange("mediaUrl"),value:e.values.mediaUrl,error:e.touched.mediaUrl&&!!e.errors.mediaUrl,errorMessage:e.touched.mediaUrl?e.errors.mediaUrl:""}),e.values.ctaLinkChecked&&a.jsx(j,{placeholder:"Input Value",label:"CTA Link",onChange:e.handleChange("ctaLink"),value:e.values.ctaLink,error:e.touched.ctaLink&&!!e.errors.ctaLink,errorMessage:e.touched.ctaLink?e.errors.ctaLink:""}),Q&&a.jsx(M,{title:e.values.title,body:e.values.body,cta:e.values.ctaLink,channelName:(h==null?void 0:h.name)||"",icon:(h==null?void 0:h.iconV2)||"",image:e.values.mediaUrl,chainId:parseInt(e.values.chainId)})]}),a.jsx(ye,{disabled:p,children:p?"Sending":" Send Notification"})]})})},q=()=>{const[i,s]=U.useState(!0),{userPushSDKInstance:r}=S(m=>m.user),{account:n,chainId:l}=H(),{data:d}=Ce({alias:n,aliasChain:Ie[l]}),{data:x}=ve((d==null?void 0:d.channel)||n),{delegatees:p}=S(m=>m.admin),y=je();return U.useEffect(()=>{!x&&!(p!=null&&p.length)&&!d&&y("/channels")},[x]),a.jsxs(c,{padding:{dp:"spacing-lg",ml:"spacing-sm"},display:"flex",flexDirection:"column",gap:{dp:"spacing-xl",ml:"spacing-md"},alignSelf:"center",width:{dp:"648px",ml:"357px"},borderRadius:"radius-lg",alignItems:"center",backgroundColor:"surface-primary",margin:{dp:"spacing-lg",ml:"spacing-sm"},children:[a.jsx(f,{color:"text-primary",variant:"h3-semibold",display:{initial:"block",ml:"none"},children:"Send Notification"}),a.jsx(f,{color:"text-primary",variant:"h5-semibold",display:{initial:"none",ml:"block"},children:"Send Notification"}),a.jsx(c,{width:"100%",children:a.jsx(K,{channelDetails:x})}),i&&r&&(r==null?void 0:r.readmode())&&a.jsx(c,{display:"flex",justifyContent:"center",width:"-webkit-fill-available",alignItems:"center",css:C`
            z-index: 99999;
          `,children:a.jsx(ke,{type:Se.MODAL,showConnectModal:!0,onClose:()=>s(!1),description:"Unlock your profile to proceed."})})]})},Y=()=>a.jsx(Ve,{children:a.jsx(q,{})})});export{Fe as __tla,Y as default};
