import{d_ as n,e1 as i,e2 as a,eq as m,er as c,__tla as g}from"./index-BDd7Mz03.js";let d,f=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{d=({steps:s,setActiveStepKey:u,completedSteps:t})=>{const[p,x]=n.useState(0),r=n.useRef(null),o=s==null?void 0:s.length,h=e=>{t!=null&&t.includes(e)&&u(e)},l=n.useCallback(()=>{r.current&&x((r.current.offsetWidth-32*(o-1))/o)},[]);return n.useEffect(()=>(l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}),[l]),i.jsx(a,{display:"flex",gap:"spacing-lg",justifyContent:"space-between",ref:r,width:"inherit",css:m`
        box-sizing: content-box;
      `,children:s.map((e,b)=>i.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing-xs",width:`${p}px`,cursor:"pointer",onClick:()=>h(e.value),children:[i.jsx(c,{textAlign:"center",color:t.includes(e.value)?"text-brand-medium":"text-tertiary",variant:"h5-semibold",ellipsis:!0,display:{ml:"none",initial:"block"},children:e.label}),i.jsx(c,{ellipsis:!0,textAlign:"center",variant:"h6-semibold",display:{ml:"block",initial:"none"},children:e.label}),i.jsx(a,{height:"4px",borderRadius:"radius-xxs",backgroundColor:t.includes(e.value)?"stroke-brand-medium":"stroke-tertiary"})]},b))})}});export{d as S,f as __tla};
