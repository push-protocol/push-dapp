import{ea as z,hK as W,fW as J,hL as Ee,hM as _e,hN as Ae,d_ as e,eu as V,hO as Te,hP as ke,hQ as De,dV as R,g$ as Q,dX as h,gj as L,eR as X,fU as G,d$ as s,e2 as l,go as K,e3 as xe,gy as Me,gh as Ce,fZ as ve,eh as $,ep as Fe,__tla as $e}from"./index-SVBZTWc1.js";import{c as O,a as N,u as Z,__tla as Be}from"./index.esm-CK2JbSbj.js";import{g as fe}from"./Common.form-Ds5bAxK4.js";import{C as ye,__tla as Ie}from"./CopyButton-DFDIx6Ni.js";import{D as je,__tla as Ve}from"./Discord-DdxO1x2X.js";import{u as Y,__tla as Re}from"./useDisclosure-DgQNDkTS.js";let we,be,Se,_,Pe,Le=Promise.all([(()=>{try{return $e}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return Re}catch{}})()]).then(async()=>{let ee,ae,ie,ne,te,re,I,H,se,oe,le,U,ce,de,ge,ue,me,he,pe;ee=a=>a,ae=a=>a,ie=a=>a,ne=async a=>{const t=await z({method:"POST",url:`${W()}/apis/v1/users/verify/init/${a==null?void 0:a.caipAddress}/${a.social_platform}`,data:{value:a==null?void 0:a.value,verificationProof:a==null?void 0:a.verificationProof},headers:{"Content-Type":"application/json"}});return ee(t.data)},te=async a=>{const t=await z({method:"POST",url:`${W()}/apis/v1/users/verify/${a==null?void 0:a.caipAddress}/${a==null?void 0:a.social_platform}`,data:{value:a==null?void 0:a.value,verificationCode:a==null?void 0:a.verificationCode},headers:{"Content-Type":"application/json"}});return ae(t.data)},re=async a=>{const t=await z({method:"POST",url:`${W()}/apis/v1/users/${a==null?void 0:a.channelAddress}`,data:{verificationProof:a==null?void 0:a.verificationProof}});return ie(t.data)},I=()=>J({mutationKey:[Ee],mutationFn:ne}),H=()=>J({mutationKey:[_e],mutationFn:te}),se=()=>J({mutationKey:[Ae],mutationFn:re}),oe=a=>{const{svgProps:t,...i}=a;return e.jsx(V,{componentName:"DiscordProfile",illustration:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:(i==null?void 0:i.width)??"28",height:(i==null?void 0:i.height)??"22",viewBox:"0 0 28 22",fill:"none",...t,children:e.jsx("path",{d:"M23.176 2.24798C21.4552 1.45838 19.6098 0.876619 17.6803 0.54339C17.6452 0.536957 17.61 0.553041 17.5919 0.585156C17.3546 1.00729 17.0917 1.55795 16.9076 1.99079C14.8324 1.68008 12.7677 1.68008 10.735 1.99079C10.5508 1.54835 10.2784 1.00729 10.04 0.585156C10.0219 0.554095 9.9868 0.538011 9.95168 0.54339C8.02329 0.875511 6.1779 1.45728 4.45591 2.24798C4.44099 2.25441 4.42823 2.26511 4.41974 2.27904C0.91944 7.50844 -0.0394818 12.6093 0.430909 17.6469C0.433018 17.6716 0.446887 17.6951 0.46603 17.7102C2.77543 19.4062 5.01252 20.4357 7.20801 21.1182C7.24314 21.1289 7.28037 21.1161 7.30273 21.0872C7.82205 20.378 8.28501 19.6301 8.68194 18.8437C8.70535 18.7977 8.68299 18.743 8.63511 18.7248C7.90079 18.4462 7.20158 18.1066 6.52895 17.7209C6.47575 17.6899 6.47147 17.6138 6.52046 17.5773C6.662 17.4713 6.8036 17.3609 6.93875 17.2495C6.96322 17.2291 6.99729 17.2249 7.02603 17.2377C11.4447 19.2551 16.2285 19.2551 20.5951 17.2377C20.6239 17.2237 20.6579 17.2281 20.6834 17.2484C20.8187 17.3598 20.9602 17.4712 21.1028 17.5773C21.1517 17.6137 21.1485 17.6898 21.0954 17.7209C20.4227 18.1141 19.7235 18.4462 18.9881 18.7237C18.9403 18.7419 18.919 18.7976 18.9424 18.8436C19.3479 19.629 19.8108 20.3768 20.3206 21.0861C20.3419 21.1161 20.3802 21.1289 20.4153 21.1182C22.6214 20.4357 24.8585 19.4061 27.1679 17.7101C27.1882 17.6951 27.2009 17.6726 27.203 17.648C27.766 11.824 26.2601 6.76489 23.2111 2.28009C23.2037 2.26512 23.1909 2.25441 23.176 2.24798ZM9.34191 14.5795C8.01158 14.5795 6.91539 13.3582 6.91539 11.8582C6.91539 10.3583 7.99028 9.13693 9.34191 9.13693C10.7041 9.13693 11.7897 10.369 11.7684 11.8582C11.7684 13.3582 10.6934 14.5795 9.34191 14.5795ZM18.3135 14.5795C16.9832 14.5795 15.887 13.3582 15.887 11.8582C15.887 10.3583 16.9619 9.13693 18.3135 9.13693C19.6757 9.13693 20.7612 10.369 20.74 11.8582C20.74 13.3582 19.6757 14.5795 18.3135 14.5795Z",fill:"#5865F2"})}),...i})},le=a=>{const{svgProps:t,...i}=a;return e.jsx(V,{componentName:"EmailProfile",illustration:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:(i==null?void 0:i.width)??"23",height:(i==null?void 0:i.height)??"17",viewBox:"0 0 23 17",fill:"none",...t,children:e.jsx("path",{d:"M19.8248 0.854492H3.81389C2.16087 0.856473 0.821316 2.19602 0.819336 3.84905V13.8149C0.821316 15.468 2.16087 16.8075 3.81389 16.8095H19.8248C21.4778 16.8075 22.8174 15.468 22.8193 13.8149V3.84905C22.8174 2.19602 21.4778 0.856473 19.8248 0.854492ZM20.3039 5.35431L12.1348 10.453C11.9423 10.5755 11.6964 10.5755 11.5039 10.453L3.33476 5.35431C3.05361 5.179 2.9678 4.80897 3.14311 4.52781C3.31842 4.24666 3.68845 4.16085 3.96961 4.33616L11.8193 9.23925L19.6691 4.33616C19.9502 4.16085 20.3203 4.24666 20.4956 4.52781C20.6709 4.80897 20.5851 5.179 20.3039 5.35431Z",fill:"#EF9CFF"})}),...i})},U=a=>{const{svgProps:t,...i}=a;return e.jsx(V,{componentName:"Telegram",illustration:e.jsxs("svg",{width:(i==null?void 0:i.width)??"48",height:(i==null?void 0:i.height)??"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[e.jsx("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"#25A2E0"}),e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.13931 23.5154C16.9132 20.1285 22.097 17.8956 24.6907 16.8168C32.0963 13.7366 33.6352 13.2015 34.6381 13.1838C34.8587 13.1799 35.3519 13.2346 35.6714 13.4939C36.1454 13.8785 36.1481 14.7133 36.0955 15.2658C35.6941 19.4824 33.9577 29.715 33.0742 34.4377C32.7004 36.4361 31.9643 37.1062 31.2518 37.1717C29.7033 37.3142 28.5273 36.1483 27.0274 35.1651C24.6805 33.6266 23.3545 32.6689 21.0763 31.1676C18.4435 29.4326 20.1503 28.4791 21.6507 26.9207C22.0434 26.5128 28.8664 20.3067 28.9985 19.7437C29.0151 19.6733 29.0304 19.4108 28.8744 19.2722C28.7185 19.1337 28.4884 19.181 28.3223 19.2187C28.0869 19.2721 24.3375 21.7503 17.0742 26.6533C16.0099 27.3841 15.046 27.7401 14.1823 27.7215C13.2301 27.701 11.3987 27.1832 10.0371 26.7406C8.36713 26.1977 7.03983 25.9107 7.15546 24.9888C7.21567 24.5085 7.87692 24.0174 9.13931 23.5154Z",fill:"white"})]}),...i})},ce=a=>{const{svgProps:t,...i}=a;return e.jsx(V,{componentName:"TelegramProfile",illustration:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:(i==null?void 0:i.width)??"25",height:(i==null?void 0:i.height)??"21",viewBox:"0 0 25 21",fill:"none",...t,children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.40809 9.44191C8.8863 6.61943 13.2062 4.75866 15.3676 3.8597C21.5389 1.29286 22.8213 0.846943 23.657 0.832186C23.8409 0.828974 24.2519 0.874547 24.5182 1.09061C24.9131 1.41109 24.9154 2.10675 24.8715 2.56717C24.5371 6.08106 23.09 14.6082 22.3538 18.5438C22.0423 20.2091 21.4289 20.7675 20.8352 20.8221C19.5447 20.9409 18.5648 19.9693 17.3149 19.15C15.359 17.8679 14.2541 17.0698 12.3556 15.8187C10.1616 14.3729 11.5839 13.5783 12.8342 12.2796C13.1615 11.9397 18.8473 6.76795 18.9574 6.29877C18.9712 6.24009 18.984 6.02134 18.854 5.90588C18.7241 5.79043 18.5323 5.82984 18.3939 5.86127C18.1978 5.9058 15.0733 7.97099 9.0205 12.0568C8.13361 12.6658 7.33031 12.9625 6.6106 12.9469C5.81711 12.9298 4.2909 12.4983 3.15626 12.1295C1.7646 11.6772 0.65852 11.4379 0.754875 10.6697C0.805048 10.2694 1.35609 9.86023 2.40809 9.44191Z",fill:"#29A9EB"})}),...i})},de=O({email:N().email("Invalid email address").required(fe("Email"))}),ge=O({code:N().length(6,"Code should be 6 digits").required("Required")}),ue=a=>Z({initialValues:{email:""},validationSchema:de,onSubmit:a}),me=a=>Z({initialValues:{code:""},validationSchema:ge,onSubmit:a}),_=async(a,t)=>{if(t&&!(t!=null&&t.readmode())){const i=JSON.stringify(a),C=await Te({text:i}),v=await ke({armoredKey:t.decryptedPgpPvtKey});return await De({message:C,signingKeys:v,detached:!0})}},we=({modalControl:a,refetchSocialHandleStatus:t,setErrorMessage:i,setSuccessMessage:C})=>{const{isOpen:v,onClose:f}=a,{account:S,wallet:c}=R(),{handleConnectWalletAndEnableProfile:p}=Q(),[g,m]=h.useState(!1),y=L({account:S}),[u,P]=h.useState(1),{userPushSDKInstance:x}=X(n=>n.user),{mutate:j,isPending:r}=I(),{mutate:B}=H(),T=h.useCallback(async()=>x!=null&&x.signer?x:await p({wallet:c}),[x,p,c]),A=async()=>{m(!0);const n=await T(),M={wallet:y,value:o.values.email,valueType:"email"},w=await _(M,n);w&&j({caipAddress:y,verificationProof:w,value:o.values.email,social_platform:"email"},{onSuccess:b=>{b!=null&&b.success?P(2):o==null||o.setFieldError("email","Error sending code. Please try again"),m(!1)},onError:b=>{console.log("Error sending code",b),m(!1)}})},k=async()=>{const n=await T(),M={wallet:y,value:o.values.email,valueType:"email",verificationCode:d.values.code};await _(M,n)&&B({caipAddress:y,verificationCode:d.values.code,value:o.values.email,social_platform:"email"},{onSuccess:w=>{w!=null&&w.success?(f(),t(),C("Email Account was linked successfully")):d==null||d.setFieldError("code","Error verifying code. Please try again")},onError:w=>{console.log("Error verifying code",w),i("Error verifying code")}})},o=ue(A),d=me(k);h.useEffect(()=>{d.values.code.length===6&&!d.errors.code&&d.submitForm()},[d.values.code,d.errors.code]);const D=()=>{A()};return e.jsxs(G,{size:"small",isOpen:v,onClose:f,acceptButtonProps:u===1?{children:"Next",loading:r||g,onClick:()=>{o.handleSubmit()}}:null,cancelButtonProps:null,children:[u===1&&e.jsxs(s,{width:"100%",children:[e.jsx(l,{textAlign:"center",variant:"h4-semibold",children:"Enter your email"}),e.jsx(l,{textAlign:"center",variant:"bs-regular",children:"Confirm your email and verify to connect"}),e.jsx("form",{onSubmit:o.handleSubmit,children:e.jsx(s,{margin:"spacing-md spacing-none spacing-none spacing-none",width:"100%",children:e.jsx(K,{label:"Email Address",value:o.values.email,onChange:o.handleChange("email"),error:o.touched.email&&!!o.errors.email,errorMessage:o.touched.email?o.errors.email:""})})})]}),u===2&&e.jsxs(s,{width:"100%",children:[e.jsx(l,{textAlign:"center",variant:"h4-semibold",children:"Verify Email"}),e.jsxs(l,{textAlign:"center",variant:"bs-regular",children:["We sent you a 6 digit confirmation code to ",o.values.email," Please enter it below to confirm your email address."]}),e.jsx(s,{margin:"spacing-md spacing-none",width:"100%",children:e.jsx(K,{placeholder:"Enter 6-digit code",value:d.values.code,onChange:d.handleChange("code"),error:d.touched.code&&!!d.errors.code,errorMessage:d.touched.code?d.errors.code:""})}),e.jsxs(s,{display:"flex",flexDirection:"row",justifyContent:"center",gap:"spacing-xxxs",children:[e.jsx(l,{textAlign:"center",children:"Didn't receive a code?"}),e.jsx(l,{textAlign:"center",onClick:D,css:xe`
                text-decoration: underline;
                cursor: pointer;
              `,children:"Send code again"}),(r||g)&&e.jsx(Me,{variant:"secondary"})]})]})]})},he=O({telegram:N().required(fe("Telegram"))}),pe=a=>Z({initialValues:{telegram:""},validationSchema:he,onSubmit:()=>{a()}}),be=({modalControl:a,refetchSocialHandleStatus:t,setErrorMessage:i,setSuccessMessage:C})=>{var M,w;const{isOpen:v,onClose:f}=a,{account:S,wallet:c}=R(),{handleConnectWalletAndEnableProfile:p}=Q(),g=L({account:S}),[m,y]=h.useState(1),[u,P]=h.useState(""),[x,j]=h.useState(!1),{userPushSDKInstance:r}=X(b=>b.user),{mutate:B,isPending:T}=I(),{mutate:A,isPending:k}=H(),o=h.useCallback(async()=>r!=null&&r.signer?r:await p({wallet:c}),[r,p,c]),d=async()=>{j(!0);const b=await o(),q={wallet:g,value:{telegram_username:n.values.telegram},valueType:"telegram"},E=await _(q,b);E&&B({caipAddress:g,verificationProof:E,value:{telegram_username:n.values.telegram},social_platform:"telegram"},{onSuccess:F=>{F!=null&&F.success?(P(F.verificationCode),y(2)):n==null||n.setFieldError("telegram","Error sending code. Please try again"),j(!1)},onError:F=>{console.log("Error sending code",F),j(!1)}})},D=async()=>{const b=await o(),q={wallet:g,value:{telegram_username:n.values.telegram},valueType:"telegram",verificationCode:u};await _(q,b)&&A({caipAddress:g,verificationCode:u,value:{telegram_username:n.values.telegram},social_platform:"telegram"},{onSuccess:E=>{E!=null&&E.success?(f(),t(),C("Telegram Account was linked successfully")):n==null||n.setFieldError("telegram","Error verifying code. Please try again")},onError:E=>{console.log("Error verifying code",E),i("Error verifying code")}})},n=pe(d);return e.jsxs(G,{size:m===1?"small":"medium",isOpen:v,onClose:()=>{C(""),t(),f()},...m===2&&{onBack:()=>y(1)},acceptButtonProps:m===1?{children:"Next",loading:T||x,onClick:()=>{n==null||n.handleSubmit()}}:null,cancelButtonProps:null,children:[m===1&&e.jsxs(s,{width:"100%",children:[e.jsx(s,{width:"100%",display:"flex",margin:"spacing-none spacing-none spacing-sm spacing-none",justifyContent:"center",children:e.jsx(U,{})}),e.jsx(l,{textAlign:"center",variant:"h4-semibold",children:"Enter your Telegram ID"}),e.jsx(l,{textAlign:"center",variant:"bs-regular",children:"Proceed to the next step after entering your Telegram chat ID"}),e.jsx("form",{onSubmit:n.handleSubmit,children:e.jsx(s,{margin:"spacing-md spacing-none spacing-none spacing-none",width:"100%",children:e.jsx(K,{label:"Telegram ID",value:n.values.telegram,onChange:n.handleChange("telegram"),error:n.touched.telegram&&!!n.errors.telegram,errorMessage:n.touched.telegram?n.errors.telegram:""})})})]}),m===2&&u&&e.jsxs(s,{width:"100%",children:[e.jsx(s,{width:"100%",display:"flex",margin:"spacing-none spacing-none spacing-sm spacing-none",justifyContent:"center",children:e.jsx(U,{})}),e.jsx(l,{textAlign:"center",variant:"h3-semibold",children:"Connect your Telegram"}),e.jsx(l,{textAlign:"center",variant:"bs-regular",color:"text-tertiary",children:"Follow the steps to link your Telegram to Push and receive notifications"}),e.jsxs(s,{margin:"spacing-sm spacing-none",gap:"spacing-xxs",display:"flex",flexDirection:"column",alignItems:"center",children:[e.jsx(l,{textAlign:"center",variant:"bl-regular",children:"Step 1: Copy the verification code"}),e.jsxs(s,{display:"flex",padding:"spacing-xs",gap:"spacing-xxs",alignItems:"center",justifyContent:"center",backgroundColor:"surface-tertiary",width:"fit-content",borderRadius:"radius-sm",children:[e.jsx(l,{color:"text-brand-medium",variant:"bl-semibold",textAlign:"center",children:Ce(`/verify ${g}-${u}`,10)}),v&&e.jsx(ye,{tooltipTitle:"Copy Address",content:`/verify ${g}-${u}`,size:24})]})]}),e.jsxs(s,{margin:"spacing-lg spacing-none spacing-none spacing-none",children:[e.jsx(l,{textAlign:"center",variant:"bl-regular",children:"Step 2: Visit the link and paste the code"}),e.jsx(s,{margin:"spacing-xs spacing-none",width:"100%",children:e.jsx(ve,{to:(M=$)==null?void 0:M.telegramExternalURL,target:"_blank",isText:!0,textProps:{variant:"bl-semibold",textAlign:"center",color:"text-brand-medium"},css:xe`
                  overflow: auto;
                  word-wrap: break-word;
                  width: 100%;
                `,children:(w=$)==null?void 0:w.telegramExternalURL})})]}),e.jsx(l,{textAlign:"center",variant:"bs-regular",color:"text-tertiary",children:"Please ensure you\u2019re logged into your Telegram account."}),e.jsxs(s,{margin:"spacing-lg spacing-none spacing-none spacing-none",children:[e.jsx(l,{textAlign:"center",variant:"bl-regular",children:"Step 3: Click on the Complete Verification button once the above steps are completed"}),e.jsx(s,{margin:"spacing-xs spacing-none",display:"flex",justifyContent:"center",width:"100%",children:e.jsx(Fe,{loading:k,onClick:D,children:"Complete Verification"})})]})]})]})},Se=({modalControl:a,refetchSocialHandleStatus:t})=>{var A,k;const{isOpen:i,onClose:C}=a,{account:v,wallet:f}=R(),{handleConnectWalletAndEnableProfile:S}=Q(),c=L({account:v}),[p,g]=h.useState(1),[m,y]=h.useState(""),{userPushSDKInstance:u}=X(o=>o.user),{mutate:P,isPending:x}=I(),j=O({discord:N().required("Required")}),r=Z({initialValues:{discord:""},validationSchema:j,onSubmit:()=>{T()}}),B=h.useCallback(async()=>u!=null&&u.signer?u:await S({wallet:f}),[u,S,f]),T=async()=>{const o=await B(),d={wallet:c,value:{discord_username:r.values.discord},valueType:"telegram"},D=await _(d,o);D&&P({caipAddress:c,verificationProof:D,value:{discord_username:r.values.discord},social_platform:"discord"},{onSuccess:n=>{n!=null&&n.success?(y(n.verificationCode),g(2)):r==null||r.setFieldError("discord","Error sending code. Please try again")},onError:n=>{console.log("Error sending code",n)}})};return e.jsxs(G,{size:"small",isOpen:i,onClose:()=>{t(),C()},...p===2&&{onBack:()=>g(1)},acceptButtonProps:p===1?{children:"Next",loading:x,onClick:()=>{r==null||r.handleSubmit()}}:null,cancelButtonProps:null,children:[p===1&&e.jsxs(s,{width:"100%",children:[e.jsx(s,{width:"100%",display:"flex",margin:"spacing-none spacing-none spacing-sm spacing-none",justifyContent:"center",children:e.jsx(je,{width:48,height:48})}),e.jsx(l,{textAlign:"center",variant:"h4-semibold",children:"Enter your Discord ID"}),e.jsx(l,{textAlign:"center",variant:"bs-regular",children:"Follow the steps to link your Discord to Push and receive notifications"}),e.jsx("form",{onSubmit:r.handleSubmit,children:e.jsx(s,{margin:"spacing-md spacing-none spacing-none spacing-none",width:"100%",children:e.jsx(K,{label:"Discord ID",value:r.values.discord,onChange:r.handleChange("discord"),error:r.touched.discord&&!!r.errors.discord,errorMessage:r.touched.discord?r.errors.discord:""})})})]}),p===2&&m&&e.jsxs(s,{width:"100%",children:[e.jsx(s,{width:"100%",display:"flex",margin:"spacing-none spacing-none spacing-sm spacing-none",justifyContent:"center",children:e.jsx(je,{width:48,height:48})}),e.jsx(l,{textAlign:"center",variant:"h3-semibold",children:"Connect your Discord"}),e.jsx(l,{textAlign:"center",variant:"bs-regular",color:"text-tertiary",children:"Follow the steps to link your Discord to Push and receive notifications"}),e.jsxs(s,{margin:"spacing-sm spacing-none",gap:"spacing-xxs",display:"flex",flexDirection:"column",alignItems:"center",children:[e.jsx(l,{textAlign:"center",variant:"bl-regular",children:"Step 1: Copy the verification code"}),e.jsxs(s,{display:"flex",padding:"spacing-xs",gap:"spacing-xxs",alignItems:"center",justifyContent:"center",backgroundColor:"surface-tertiary",width:"fit-content",borderRadius:"radius-sm",children:[e.jsx(l,{color:"text-brand-subtle",variant:"bl-semibold",textAlign:"center",children:Ce(`${c}-${m}`,10)}),e.jsx(ye,{tooltipTitle:"Copy Address",content:`${c}-${m}`,size:24})]})]}),e.jsxs(s,{margin:"spacing-lg spacing-none spacing-none spacing-none",children:[e.jsx(l,{textAlign:"center",variant:"bl-regular",children:"Step 2: Visit the link and paste the code"}),e.jsx(s,{margin:"spacing-xs spacing-none",children:e.jsx(ve,{to:(A=$)==null?void 0:A.discordExternalURL,isText:!0,textProps:{variant:"bl-semibold",textAlign:"center",color:"text-brand-medium"},children:(k=$)==null?void 0:k.discordExternalURL})})]}),e.jsx(l,{textAlign:"center",variant:"bs-regular",color:"text-tertiary",children:"Please ensure you\u2019re logged into your Discord account. Click on Complete Verification below once complete."})]})]})},Pe=(a,t,i)=>{var P,x;const C=Y(),v=Y(),f=Y(),{account:S}=R(),[c,p]=h.useState(null),g=L({account:S}),{mutate:m,isPending:y}=se(),u=async()=>{if(!g)return;let j;t&&(j=await _({wallet:g},i),!j)||m({channelAddress:g,...t&&{verificationProof:j}},{onError:r=>{a("Failed to fetch social status."),console.error("Error fetching social status:",r)},onSuccess:r=>{p(r)}})};return h.useEffect(()=>{g&&!t&&u()},[g]),{socialHandlesList:[{icon:()=>e.jsx(le,{height:23}),itemTitle:"Email",itemDescription:"Receive notifications in your email inbox",onClick:()=>C.open(),userStatus:(c==null?void 0:c.email)||null},((P=$)==null?void 0:P.telegramExternalURL)&&{icon:()=>e.jsx(ce,{height:23}),itemTitle:"Telegram",itemDescription:"Receive notifications as Telegram messages",onClick:()=>v.open(),userStatus:(c==null?void 0:c.telegram_username)||null},((x=$)==null?void 0:x.discordExternalURL)&&{icon:()=>e.jsx(oe,{height:23}),itemTitle:"Discord",itemDescription:"Receive notifications as Discord messages",onClick:()=>f.open(),userStatus:(c==null?void 0:c.discord_username)||null}].filter(Boolean),socialHandleStatus:c,modalControl:C,telegramModalControl:v,discordModalControl:f,isPending:y,fetchStatus:u,channelAddress:g}}});export{we as A,Le as __tla,be as a,Se as b,_ as g,Pe as u};
