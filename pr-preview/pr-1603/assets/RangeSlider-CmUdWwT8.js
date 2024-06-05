import{aV as p,b0 as l,b4 as a,__tla as Z}from"./index-OHFN2ukP.js";let W,Y,ee=Promise.all([(()=>{try{return Z}catch{}})()]).then(async()=>{let q,G,H,J,K,_,O,U,Q,X;W=({disabled:e,val:c,min:n,max:t,step:s,defaultVal:u,onChange:y,onDragStart:b,onDragEnd:D,preview:V=!1,...C})=>{const w=l.useRef(null),$=l.useRef(null),g=l.useRef(null),N=l.useRef(null),x=l.useRef(null),M=d=>{e||(b&&b(d),document.addEventListener("mousemove",E),document.addEventListener("mouseup",f),document.addEventListener("touchmove",E),document.addEventListener("touchend",f))},E=d=>{if(e||!N.current)return;const{left:h,width:L}=N.current.getBoundingClientRect(),{clientX:B}=d instanceof MouseEvent?d:d.touches[0];let i=(B-h)/L;const v=u-Math.floor((u-n)/s)*s,P=u+Math.floor((t-u)/s)*s;if(i<=0)i=v;else if(i>=1)i=P;else{const o=Math.floor((i*(t-n)+n-u)/s);i=u+o*s,i<v&&(i=v),i>P&&(i=P)}const F=(s.toString().split(".")[1]||"").length;y({x:Number(i.toFixed(F))})},f=d=>{e||(D&&D(d),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",f))},R=()=>{var d;return(d=x.current)==null?void 0:d.style.setProperty("display","flex")},T=()=>{var d;return(d=x.current)==null?void 0:d.style.setProperty("display","none")};return l.useEffect(()=>{var d;if(w.current&&$.current&&g.current){const h=Math.min(t,Math.max(n,c));w.current.style.left=`${(h-n)/(t-n)*98}%`,$.current.style.width=`${(h-n)/(t-n)*100}%`,g.current.style.width=`${(t-h)/(t-n)*100}%`,(d=x.current)==null||d.style.setProperty("left",`${(Number(h)-Number(n))/(Number(t)-Number(n))*90}%`)}},[w,$,g,c,n,t]),a.jsxs(J,{ref:N,onMouseEnter:R,onMouseLeave:T,onTouchStart:R,onTouchEnd:T,...C,children:[a.jsx(G,{ref:$}),a.jsx(q,{ref:w,onTouchStart:M,onMouseDown:M,onTouchEnd:f,onMouseUp:f}),a.jsx(H,{ref:g}),V&&!Number.isNaN(Number(c))&&a.jsx(K,{ref:x,children:c})]})},q=p.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.theme.default.bg};
  border: 1px solid ${e=>e.theme.default.border};
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  z-index: 1;
  position: absolute;
`,G=p.div`
  width: 100%;
  height: 4px;
  background-color: ${e=>e.theme.default.primaryPushThemeTextColor};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`,H=p.div`
  width: 100%;
  height: 4px;
  background-color: ${e=>e.theme.snfBorder};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`,J=p.div`
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
  width: 100%;
`,K=p.div`
  display: none;
  position: absolute;
  bottom: -48px;
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.default.border};
  background: ${e=>e.theme.default.bg};
  color: ${e=>e.theme.default.color};
  width: max-content;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,Y=({disabled:e,startVal:c,endVal:n,min:t,max:s,step:u,defaultStartVal:y,defaultEndVal:b,onChange:D,onDragStart:V,onDragEnd:C,preview:w=!1,...$})=>{const g=l.useRef(null),N=l.useRef(null),x=l.useRef(null),M=l.useRef(null),E=l.useRef(null),f=l.useRef(null),R=l.useRef(null),T=l.useRef(null),d=o=>{e||(V&&V(o),document.addEventListener("mousemove",h),document.addEventListener("mouseup",L),document.addEventListener("touchmove",h),document.addEventListener("touchend",L))},h=o=>{if(e||!x.current)return;const{left:m,width:z}=x.current.getBoundingClientRect(),{clientX:I}=o instanceof MouseEvent?o:o.touches[0];let r=(I-m)/z;const j=y-Math.floor((y-t)/u)*u,S=y+Math.floor((s-y)/u)*u;if(r<=0)r=j;else if(r>=1)r=S;else{const A=Math.floor((r*(s-t)+t-y)/u);r=y+A*u,r<j&&(r=j),r>S&&(r=S)}const k=(u.toString().split(".")[1]||"").length;Number(r.toFixed(k))>=n||D({startVal:Number(r.toFixed(k)),endVal:n})},L=o=>{e||(C&&C(o),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",L))},B=o=>{e||(V&&V(o),document.addEventListener("mousemove",i),document.addEventListener("mouseup",v),document.addEventListener("touchmove",i),document.addEventListener("touchend",v))},i=o=>{if(e||!x.current)return;const{left:m,width:z}=x.current.getBoundingClientRect(),{clientX:I}=o instanceof MouseEvent?o:o.touches[0];let r=(I-m)/z;const j=b-Math.floor((b-t)/u)*u,S=b+Math.floor((s-b)/u)*u;if(r<=0)r=j;else if(r>=1)r=S;else{const A=Math.floor((r*(s-t)+t-b)/u);r=b+A*u,r<j&&(r=j),r>S&&(r=S)}const k=(u.toString().split(".")[1]||"").length;Number(r.toFixed(k))<=c||D({startVal:c,endVal:Number(r.toFixed(k))})},v=o=>{e||(C&&C(o),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",i),document.removeEventListener("touchend",v))},P=()=>{var o,m;(o=M.current)==null||o.style.setProperty("display","flex"),(m=E.current)==null||m.style.setProperty("display","flex")},F=()=>{var o,m;(o=M.current)==null||o.style.setProperty("display","none"),(m=E.current)==null||m.style.setProperty("display","none")};return l.useEffect(()=>{var o,m;g.current&&R.current&&N.current&&f.current&&T.current&&(g.current.style.left=`${(c-t)/(s-t)*98}%`,R.current.style.width=`${(c-t)/(s-t)*100}%`,f.current.style.width=`${(n-c)/(s-t)*100}%`,N.current.style.left=`${(n-t)/(s-t)*95}%`,T.current.style.width=`${(s-n)/(s-t)*100}%`,(o=M.current)==null||o.style.setProperty("left",`${(Number(c)-Number(t))/(Number(s)-Number(t))*90}%`),(m=E.current)==null||m.style.setProperty("left",`${(Number(n)-Number(t))/(Number(s)-Number(t))*90}%`))},[g,N,f,R,T,c,n,t,s]),a.jsxs(Q,{ref:x,onMouseEnter:P,onMouseLeave:F,onTouchStart:P,onTouchEnd:F,...$,...$,children:[a.jsx(U,{ref:R}),a.jsx(_,{ref:g,onTouchStart:d,onMouseDown:d,onTouchEnd:L,onMouseUp:L}),a.jsx(O,{ref:f}),a.jsx(_,{ref:N,onTouchStart:B,onMouseDown:B,onTouchEnd:v,onMouseUp:v}),a.jsx(U,{ref:T}),w&&!Number.isNaN(Number(c))&&a.jsx(X,{ref:M,children:c}),w&&!Number.isNaN(Number(n))&&a.jsx(X,{ref:E,children:n})]})},_=p.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.theme.default.bg};
  border: 1px solid ${e=>e.theme.default.border};
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  z-index: 1;
  position: absolute;
`,O=p.div`
  width: 100%;
  height: 4px;
  background-color: ${e=>e.theme.default.primaryPushThemeTextColor};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`,U=p.div`
  width: 100%;
  height: 4px;
  background-color: ${e=>e.theme.snfBorder};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`,Q=p.div`
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
  width: 100%;
`,X=p.div`
  display: none;
  position: absolute;
  bottom: -48px;
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.default.border};
  background: ${e=>e.theme.default.bg};
  color: ${e=>e.theme.default.color};
  width: max-content;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,p.div`
  position: absolute;
  height: 4px;
  background-color: #999;
`});export{W as I,Y as R,ee as __tla};
