import{cs as s,cv as i,cw as a,cT as m,cU as o,__tla as g}from"./index-DC41svKB.js";let d,f=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{d=({steps:l,setActiveStepKey:u,completedSteps:t})=>{const[p,x]=s.useState(0),r=s.useRef(null),c=l==null?void 0:l.length,h=e=>{t!=null&&t.includes(e)&&u(e)},n=s.useCallback(()=>{r.current&&x((r.current.offsetWidth-32*(c-1))/c)},[]);return s.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[n]),i.jsx(a,{display:"flex",gap:"spacing-lg",justifyContent:"space-between",ref:r,width:"inherit",css:m`
        box-sizing: content-box;
      `,children:l.map((e,b)=>i.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing-xs",width:`${p}px`,cursor:"pointer",onClick:()=>h(e.value),children:[i.jsx(o,{textAlign:"center",color:t.includes(e.value)?"text-brand-medium":"text-tertiary",variant:"h5-semibold",ellipsis:!0,display:{ml:"none",initial:"block"},children:e.label}),i.jsx(o,{ellipsis:!0,textAlign:"center",variant:"h6-semibold",display:{ml:"block",initial:"none"},children:e.label}),i.jsx(a,{height:"4px",borderRadius:"radius-xxs",backgroundColor:t.includes(e.value)?"stroke-brand-medium":"stroke-tertiary"})]},b))})}});export{d as S,f as __tla};
