import{eh as C,d_ as i,d$ as a,e3 as t,em as l,en as u,dZ as j,eo as L,ep as f,eq as S,e2 as c,er as V,es as w,et as z,__tla as I}from"./index-CHLbB0dT.js";import{U as M,N as k,V as P,T as N,__tla as O}from"./VerifiedChannelTooltipContent-BmYfj-BL.js";let y,R=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return O}catch{}})()]).then(async()=>{y=({channelDetails:e,isLoading:n,isSubscribed:o,isSubscriptionLoading:d,handleRefetch:x,userSettings:_,width:h,subscribeButtonVariant:v="tertiary",onChangeProfileModalVisibility:p,profileModalVisibility:g})=>{var b;let r=[C.coreContractChain,...((b=e==null?void 0:e.aliases)==null?void 0:b.filter(s=>s.is_alias_verified).map(s=>parseInt(s.alias_blockchain_id)))||[]];return i.jsxs(a,{display:"flex",flexDirection:"column",border:"border-sm solid stroke-secondary",padding:{initial:"spacing-md",ml:"spacing-md spacing-sm",tb:"spacing-sm",lp:"spacing-sm"},borderRadius:"radius-md",gap:"spacing-xs",width:{initial:"290px",mm:"258px",ml:"auto",tb:"278px",lp:"278px",...typeof h!="string"&&h},css:t`
        flex-shrink: 0;
      `,minHeight:{initial:"auto",tb:"180px"},children:[i.jsxs(a,{display:"flex",justifyContent:"space-between",css:t`
          .channel-card-icon {
            border: var(--border-sm) solid rgba(0, 0, 0, 0.05);
            border-radius: var(--radius-sm);
            height: 52px;
            width: 52px;
          }
        `,children:[i.jsx(l,{isLoading:n,children:i.jsx(u,{to:j.ChannelDetails(e==null?void 0:e.channel),style:{textDecoration:"none"},children:i.jsx("img",{className:"channel-card-icon",src:e==null?void 0:e.iconV2,alt:e==null?void 0:e.name})})}),!o&&i.jsx(l,{isLoading:d||n,height:"40px",children:i.jsx(L,{onChangeProfileModalVisibility:p,profileModalVisibility:g,channelDetails:e,onSuccess:x,children:i.jsx(f,{id:"basic-button",disabled:n,variant:v,size:"small",children:"Subscribe"})})}),!!o&&i.jsx(l,{isLoading:d||n,height:"40px",children:i.jsx(M,{onChangeProfileModalVisibility:p,profileModalVisibility:g,channelDetail:e,onSuccess:x,userSetting:_,children:i.jsx(f,{variant:"secondary",size:"small",leadingIcon:i.jsx(k,{size:20}),trailingIcon:i.jsx(S,{size:20}),children:"Subscribed"})})})]}),i.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing-xxs",children:[i.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing-xxxs",children:[i.jsx(l,{isLoading:n,height:"20px",children:i.jsxs(a,{display:"flex",flexDirection:"row",gap:"spacing-xxxs",alignItems:"center",children:[i.jsx(u,{to:j.ChannelDetails(e==null?void 0:e.channel),style:{textDecoration:"none"},children:i.jsx(c,{variant:"h5-semibold",color:"text-primary",children:e==null?void 0:e.name})}),!!(e!=null&&e.verified_status)&&i.jsx(V,{overlay:i.jsx(P,{}),children:i.jsx(a,{cursor:"pointer",display:"flex",children:i.jsx(N,{color:"icon-tertiary",size:16})})}),(r==null?void 0:r.length)>0&&i.jsx(a,{display:"flex",alignItems:"center",margin:"spacing-none spacing-none spacing-none spacing-xxxs",children:r.map((s,D)=>{const m=z[s];return m?i.jsx(a,{display:"flex",css:t`
                          margin-left: -5px;
                        `,children:i.jsx(m,{width:16,height:16},s)},`${D}`):null})})]})}),i.jsx(l,{isLoading:n,height:"20px",children:i.jsxs(c,{variant:"c-regular",color:"text-tertiary-inverse",children:[w(e==null?void 0:e.subscriber_count)," subscribers"]})})]}),i.jsx(a,{children:i.jsx(l,{isLoading:n,height:"40px",children:i.jsx(c,{variant:"bs-regular",color:"text-tertiary-inverse",numberOfLines:2,children:e==null?void 0:e.info})})})]})]})}});export{y as C,R as __tla};
