import{b1 as l,b2 as s,bp as o,bq as a,__tla as p}from"./index-DyD3sd27.js";let i,x=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{i=({steps:r,setActiveStepKey:n,completedSteps:t})=>{const c=e=>{t!=null&&t.includes(e)&&n(e)};return l.jsx(s,{display:"flex",gap:"spacing-lg",width:"inherit",justifyContent:"space-between",children:r.map((e,d)=>l.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing-xs",css:o`
            flex: 1;
          `,cursor:"pointer",onClick:()=>c(e.value),children:[l.jsx(a,{textAlign:"center",color:t.includes(e.value)?"text-brand-medium":"text-tertiary",variant:"h5-semibold",display:{ml:"none",dp:"block"},children:e.label}),l.jsx(a,{textAlign:"center",variant:"h6-semibold",display:{ml:"block",dp:"none"},children:e.label}),l.jsx(s,{height:"4px",borderRadius:"radius-xxs",backgroundColor:t.includes(e.value)?"stroke-brand-medium":"stroke-tertiary"})]},d))})}});export{i as S,x as __tla};
