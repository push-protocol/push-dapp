import{d_ as n,e1 as s,e2 as a,ep as m,eq as d,__tla as g}from"./index-Pg68Md8O.js";let c,f=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{c=({steps:i,setActiveStepKey:p,completedSteps:t})=>{const[u,x]=n.useState(0),r=n.useRef(null),o=i==null?void 0:i.length,b=e=>{t!=null&&t.includes(e)&&p(e)},l=n.useCallback(()=>{r.current&&x((r.current.offsetWidth-32*(o-1))/o)},[]);return n.useEffect(()=>(l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}),[l]),s.jsx(a,{display:"flex",gap:"spacing-lg",justifyContent:"space-between",ref:r,width:"inherit",css:m`
        box-sizing: content-box;
      `,children:i.map((e,h)=>s.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing-xs",width:`${u}px`,cursor:"pointer",onClick:()=>b(e.value),children:[s.jsx(d,{textAlign:"center",color:t.includes(e.value)?"text-brand-medium":"text-tertiary",variant:"h5-semibold",ellipsis:!0,display:{ml:"none",dp:"block"},children:e.label}),s.jsx(d,{ellipsis:!0,textAlign:"center",variant:"h6-semibold",display:{ml:"block",dp:"none"},children:e.label}),s.jsx(a,{height:"4px",borderRadius:"radius-xxs",backgroundColor:t.includes(e.value)?"stroke-brand-medium":"stroke-tertiary"})]},h))})}});export{c as S,f as __tla};
