import{aZ as s,bg as r,c2 as n,c3 as x,__tla as h}from"./index-BhjWYQsI.js";let d,c,i,o,u=Promise.all([(()=>{try{return h}catch{}})()]).then(async()=>{d=({steps:t,setActiveStepKey:l,completedSteps:e})=>{const p=a=>{e!=null&&e.includes(a)&&l(a)};return s.jsx(r,{display:"flex",gap:"spacing-lg",children:t.map(a=>s.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing-xs",width:"180px",cursor:"pointer",onClick:()=>p(a.value),children:[s.jsx(n,{textAlign:"center",color:e.includes(a.value)?"text-brand-medium":"text-tertiary",variant:"h5-semibold",display:{ml:"none",dp:"block"},children:a.label}),s.jsx(n,{textAlign:"center",variant:"h6-semibold",display:{ml:"block",dp:"none"},children:a.label}),s.jsx(r,{height:"4px",borderRadius:"r2",backgroundColor:e.includes(a.value)?"stroke-brand-medium":"stroke-tertiary"})]}))})},i=(t,l,e)=>(e=e??1,t.length>=e&&t.length<=l),c=t=>{var l=new RegExp("^((?:https|http):\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return!!l.test(t)},o=t=>x(t)});export{d as S,u as __tla,c as a,i as b,o as i};
