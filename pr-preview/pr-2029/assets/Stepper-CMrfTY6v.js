import{dX as n,d_ as i,d$ as r,e3 as m,e2 as d,__tla as g}from"./index-M6dEtZnK.js";let c,f=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{c=({steps:s,setActiveStepKey:u,completedSteps:t})=>{const[p,x]=n.useState(0),a=n.useRef(null),o=s==null?void 0:s.length,h=e=>{t!=null&&t.includes(e)&&u(e)},l=n.useCallback(()=>{a.current&&x((a.current.offsetWidth-32*(o-1))/o)},[]);return n.useEffect(()=>(l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}),[l]),i.jsx(r,{display:"flex",gap:"spacing-lg",justifyContent:"space-between",ref:a,width:"inherit",css:m`
        box-sizing: content-box;
      `,children:s.map((e,b)=>i.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing-xs",width:`${p}px`,cursor:"pointer",onClick:()=>h(e.value),children:[i.jsx(d,{textAlign:"center",color:t.includes(e.value)?"text-brand-medium":"text-tertiary",variant:"h5-semibold",ellipsis:!0,display:{ml:"none",initial:"block"},children:e.label}),i.jsx(d,{ellipsis:!0,textAlign:"center",variant:"h6-semibold",display:{ml:"block",initial:"none"},children:e.label}),i.jsx(r,{height:"4px",borderRadius:"radius-xxs",backgroundColor:t.includes(e.value)?"stroke-brand-medium":"stroke-tertiary"})]},b))})}});export{c as S,f as __tla};
