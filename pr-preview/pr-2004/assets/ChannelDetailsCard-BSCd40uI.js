import{ed as v,d_ as i,d$ as a,e3 as t,ej as r,ek as m,dZ as j,el as u,em as D,e2 as c,en as S,eo as L,ep as w,__tla as C}from"./index-BRwDlXEy.js";import{S as I,U as k,N as z,V as N,T as V,__tla as R}from"./VerifiedChannelTooltipContent-BAq0QNzZ.js";let b,$=Promise.all([(()=>{try{return C}catch{}})(),(()=>{try{return R}catch{}})()]).then(async()=>{b=({channelDetails:e,isLoading:n,isSubscribed:d,isSubscriptionLoading:o,handleRefetch:x,userSettings:f,width:h,subscribeButtonVariant:y="tertiary"})=>{var p;let l=[v.coreContractChain,...((p=e==null?void 0:e.aliases)==null?void 0:p.filter(s=>s.is_alias_verified).map(s=>parseInt(s.alias_blockchain_id)))||[]];return i.jsxs(a,{display:"flex",flexDirection:"column",border:"border-sm solid stroke-secondary",padding:{initial:"spacing-md",ml:"spacing-md spacing-sm",tb:"spacing-sm",lp:"spacing-sm"},borderRadius:"radius-md",gap:"spacing-xs",width:{initial:"290px",mm:"258px",ml:"auto",tb:"278px",lp:"278px",...typeof h!="string"&&h},css:t`
        flex-shrink: 0;
      `,minHeight:{initial:"auto",tb:"180px"},children:[i.jsxs(a,{display:"flex",justifyContent:"space-between",css:t`
          .channel-card-icon {
            border: var(--border-sm) solid rgba(0, 0, 0, 0.05);
            border-radius: var(--radius-sm);
            height: 52px;
            width: 52px;
          }
        `,children:[i.jsx(r,{isLoading:n,children:i.jsx(m,{to:j.ChannelDetails(e==null?void 0:e.channel),style:{textDecoration:"none"},children:i.jsx("img",{className:"channel-card-icon",src:e==null?void 0:e.iconV2,alt:e==null?void 0:e.name})})}),!d&&i.jsx(r,{isLoading:o||n,height:"40px",children:i.jsx(I,{channelDetails:e,onSuccess:x,children:i.jsx(u,{id:"basic-button",disabled:n,variant:y,size:"small",children:"Subscribe"})})}),!!d&&i.jsx(r,{isLoading:o||n,height:"40px",children:i.jsx(k,{channelDetail:e,onSuccess:x,userSetting:f,children:i.jsx(u,{variant:"secondary",size:"small",leadingIcon:i.jsx(z,{size:20}),trailingIcon:i.jsx(D,{size:20}),children:"Subscribed"})})})]}),i.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing-xxs",children:[i.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing-xxxs",children:[i.jsx(r,{isLoading:n,height:"20px",children:i.jsxs(a,{display:"flex",flexDirection:"row",gap:"spacing-xxxs",alignItems:"center",children:[i.jsx(m,{to:j.ChannelDetails(e==null?void 0:e.channel),style:{textDecoration:"none"},children:i.jsx(c,{variant:"h5-semibold",color:"text-primary",children:e==null?void 0:e.name})}),!!(e!=null&&e.verified_status)&&i.jsx(S,{overlay:i.jsx(N,{}),children:i.jsx(a,{cursor:"pointer",display:"flex",children:i.jsx(V,{color:"icon-tertiary",size:16})})}),(l==null?void 0:l.length)>0&&i.jsx(a,{display:"flex",alignItems:"center",margin:"spacing-none spacing-none spacing-none spacing-xxxs",children:l.map((s,_)=>{const g=w[s];return g?i.jsx(a,{display:"flex",css:t`
                          margin-left: -5px;
                        `,children:i.jsx(g,{width:16,height:16},s)},`${_}`):null})})]})}),i.jsx(r,{isLoading:n,height:"20px",children:i.jsxs(c,{variant:"c-regular",color:"text-tertiary-inverse",children:[L(e==null?void 0:e.subscriber_count)," subscribers"]})})]}),i.jsx(a,{children:i.jsx(r,{isLoading:n,height:"40px",children:i.jsx(c,{variant:"bs-regular",color:"text-tertiary-inverse",numberOfLines:2,children:e==null?void 0:e.info})})})]})]})}});export{b as C,$ as __tla};
