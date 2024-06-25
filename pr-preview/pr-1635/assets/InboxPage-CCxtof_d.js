import{R as he,m as t,r as a,q as u,X as fe,L as Ce,dd as me,eb as Ye,ef as lr,J as Ke,I as oe,E as Re,D as ie,dB as Xe,x as Ne,eg as cr,dm as Ve,eh as dr,ei as pr,M as ve,N as Ee,ej as Oe,ek as hr,O as se,el as mr,em as qe,en as re,dl as H,eo as ur,z as je,H as gr,ep as xr,eq as Ze,er as Ie,es as fr,Q as ke,V as br,T as wr,Y as yr,A as $e,db as D,dc as ue,df as Sr,et as vr,e3 as Qe,e4 as Er,e2 as et,eu as jr,ev as kr,ew as Ar,ex as _r,ey as Tr,ez as Cr,n as Rr,eA as Nr,S as Or,__tla as Ir}from"./index-V3Ch6t70.js";import{W as tt,S as $r,__tla as Dr}from"./ChannelsModule-BgJnPRFd.js";import{D as Mr,__tla as Pr}from"./entry-zPA6aiy-.js";import{D as rt,__tla as Br}from"./DisplayNotice-BM1MqNvH.js";import{N as De,__tla as Lr}from"./RedCircle-bdDwrseh.js";import{__tla as Gr}from"./Skeleton-DHvAJk0k.js";import{__tla as Fr}from"./cloneDeep-DIiDk_Ta.js";import{__tla as Ur}from"./index.esm-BuSYzhGr.js";import{__tla as Wr}from"./ManageNotifSettingDropdown-DAEZjDni.js";import{__tla as zr}from"./RangeSlider-CMZiGQE1.js";import{__tla as Hr}from"./OptinNotifSettingDropdown-BUi1WcNv.js";let at,Jr=Promise.all([(()=>{try{return Ir}catch{}})(),(()=>{try{return Dr}catch{}})(),(()=>{try{return Pr}catch{}})(),(()=>{try{return Br}catch{}})(),(()=>{try{return Lr}catch{}})(),(()=>{try{return Gr}catch{}})(),(()=>{try{return Fr}catch{}})(),(()=>{try{return Ur}catch{}})(),(()=>{try{return Wr}catch{}})(),(()=>{try{return zr}catch{}})(),(()=>{try{return Hr}catch{}})()]).then(async()=>{function it(e,{insertAt:c}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",c==="top"&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}it(`.rmsc{--rmsc-main: #4285f4;--rmsc-hover: #f1f3f5;--rmsc-selected: #e2e6ea;--rmsc-border: #ccc;--rmsc-gray: #aaa;--rmsc-bg: #fff;--rmsc-p: 10px;--rmsc-radius: 4px;--rmsc-h: 38px}.rmsc *{box-sizing:border-box;transition:all .2s ease}.rmsc .gray{color:var(--rmsc-gray)}.rmsc .dropdown-content{position:absolute;z-index:1;top:100%;width:100%;padding-top:8px}.rmsc .dropdown-content .panel-content{overflow:hidden;border-radius:var(--rmsc-radius);background:var(--rmsc-bg);box-shadow:0 0 0 1px #0000001a,0 4px 11px #0000001a}.rmsc .dropdown-container{position:relative;outline:0;background-color:var(--rmsc-bg);border:1px solid var(--rmsc-border);border-radius:var(--rmsc-radius)}.rmsc .dropdown-container[aria-disabled=true]:focus-within{box-shadow:var(--rmsc-gray) 0 0 0 1px;border-color:var(--rmsc-gray)}.rmsc .dropdown-container:focus-within{box-shadow:var(--rmsc-main) 0 0 0 1px;border-color:var(--rmsc-main)}.rmsc .dropdown-heading{position:relative;padding:0 var(--rmsc-p);display:flex;align-items:center;width:100%;height:var(--rmsc-h);cursor:default;outline:0}.rmsc .dropdown-heading .dropdown-heading-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.rmsc .clear-selected-button{cursor:pointer;background:none;border:0;padding:0;display:flex}.rmsc .options{max-height:260px;overflow-y:auto;margin:0;padding-left:0}.rmsc .options li{list-style:none;margin:0}.rmsc .select-item{box-sizing:border-box;cursor:pointer;display:block;padding:var(--rmsc-p);outline-offset:-1px;outline-color:var(--rmsc-primary)}.rmsc .select-item:hover{background:var(--rmsc-hover)}.rmsc .select-item.selected{background:var(--rmsc-selected)}.rmsc .no-options{padding:var(--rmsc-p);text-align:center;color:var(--rmsc-gray)}.rmsc .search{width:100%;position:relative;border-bottom:1px solid var(--rmsc-border)}.rmsc .search input{background:none;height:var(--rmsc-h);padding:0 var(--rmsc-p);width:100%;outline:0;border:0;font-size:1em}.rmsc .search input:focus{background:var(--rmsc-hover)}.rmsc .search-clear-button{cursor:pointer;position:absolute;top:0;right:0;bottom:0;background:none;border:0;padding:0 calc(var(--rmsc-p) / 2)}.rmsc .search-clear-button [hidden]{display:none}.rmsc .item-renderer{display:flex;align-items:baseline}.rmsc .item-renderer input{margin:0 5px 0 0}.rmsc .item-renderer.disabled{opacity:.5}.rmsc .spinner{animation:rotate 2s linear infinite}.rmsc .spinner .path{stroke:var(--rmsc-border);stroke-width:4px;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{to{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}
`);var nt={allItemsAreSelected:"All items are selected.",clearSearch:"Clear Search",clearSelected:"Clear Selected",noOptions:"No options",search:"Search",selectAll:"Select All",selectAllFiltered:"Select All (Filtered)",selectSomeItems:"Select...",create:"Create"},ot={value:[],hasSelectAll:!0,className:"multi-select",debounceDuration:200,options:[]},Me=he.createContext({}),st=({props:e,children:c})=>{let[n,s]=a.useState(e.options),d=l=>{var w;return((w=e.overrideStrings)==null?void 0:w[l])||nt[l]};return a.useEffect(()=>{s(e.options)},[e.options]),t.jsx(Me.Provider,{value:{t:d,...ot,...e,options:n,setOptions:s},children:c})},be=()=>he.useContext(Me);function lt(e,c){let n=a.useRef(!1);a.useEffect(()=>{n.current?e():n.current=!0},c)}var ct={when:!0,eventTypes:["keydown"]};function we(e,c,n){let s=a.useMemo(()=>Array.isArray(e)?e:[e],[e]),d=Object.assign({},ct,n),{when:l,eventTypes:w}=d,f=a.useRef(c),{target:b}=d;a.useEffect(()=>{f.current=c});let y=a.useCallback(g=>{s.some(x=>g.key===x||g.code===x)&&f.current(g)},[s]);a.useEffect(()=>{if(l&&typeof window<"u"){let g=b?b.current:window;return w.forEach(x=>{g&&g.addEventListener(x,y)}),()=>{w.forEach(x=>{g&&g.removeEventListener(x,y)})}}},[l,w,s,b,c])}var M={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",ENTER:"Enter",ESCAPE:"Escape",SPACE:"Space"},dt=(e,c)=>{let n;return function(...s){clearTimeout(n),n=setTimeout(()=>{e.apply(null,s)},c)}};function pt(e,c){return c?e.filter(({label:n,value:s})=>n!=null&&s!=null&&n.toLowerCase().includes(c.toLowerCase())):e}var Pe=()=>t.jsxs("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-search-clear-icon gray",children:[t.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),ht=({checked:e,option:c,onClick:n,disabled:s})=>t.jsxs("div",{className:`item-renderer ${s?"disabled":""}`,children:[t.jsx("input",{type:"checkbox",onChange:n,checked:e,tabIndex:-1,disabled:s}),t.jsx("span",{children:c.label})]}),mt=ht,ut=({itemRenderer:e=mt,option:c,checked:n,tabIndex:s,disabled:d,onSelectionChanged:l,onClick:w})=>{let f=a.useRef(),b=x=>{y(),x.preventDefault()},y=()=>{d||l(!n)},g=x=>{y(),w(x)};return we([M.ENTER,M.SPACE],b,{target:f}),t.jsx("label",{className:`select-item ${n?"selected":""}`,role:"option","aria-selected":n,tabIndex:s,ref:f,children:t.jsx(e,{option:c,checked:n,onClick:g,disabled:d})})},Be=ut,gt=({options:e,onClick:c,skipIndex:n})=>{let{disabled:s,value:d,onChange:l,ItemRenderer:w}=be(),f=(b,y)=>{s||l(y?[...d,b]:d.filter(g=>g.value!==b.value))};return t.jsx(t.Fragment,{children:e.map((b,y)=>{let g=y+n;return t.jsx("li",{children:t.jsx(Be,{tabIndex:g,option:b,onSelectionChanged:x=>f(b,x),checked:!!d.find(x=>x.value===b.value),onClick:x=>c(x,g),itemRenderer:w,disabled:b.disabled||s})},(b==null?void 0:b.key)||y)})})},xt=gt,ft=()=>{let{t:e,onChange:c,options:n,setOptions:s,value:d,filterOptions:l,ItemRenderer:w,disabled:f,disableSearch:b,hasSelectAll:y,ClearIcon:g,debounceDuration:x,isCreatable:P,onCreateOption:R}=be(),O=a.useRef(),_=a.useRef(),[E,N]=a.useState(""),[C,J]=a.useState(n),[v,Z]=a.useState(""),[Y,K]=a.useState(0),Q=a.useCallback(dt(h=>Z(h),x),[]),X=a.useMemo(()=>{let h=0;return b||(h+=1),y&&(h+=1),h},[b,y]),F={label:e(E?"selectAllFiltered":"selectAll"),value:""},ae=h=>{let A=C.filter($=>!$.disabled).map($=>$.value);if(h){let $=[...d.map(ne=>ne.value),...A];return(l?C:n).filter(ne=>$.includes(ne.value))}return d.filter($=>!A.includes($.value))},ee=h=>{let A=ae(h);c(A)},I=h=>{Q(h.target.value),N(h.target.value),K(0)},U=()=>{var h;Z(""),N(""),(h=_==null?void 0:_.current)==null||h.focus()},V=h=>K(h),W=h=>{switch(h.code){case M.ARROW_UP:le(-1);break;case M.ARROW_DOWN:le(1);break;default:return}h.stopPropagation(),h.preventDefault()};we([M.ARROW_DOWN,M.ARROW_UP],W,{target:O});let B=()=>{K(0)},q=async()=>{let h={label:E,value:E,__isNew__:!0};R&&(h=await R(E)),s([h,...n]),U(),c([...d,h])},te=async()=>l?await l(n,v):pt(n,v),le=h=>{let A=Y+h;A=Math.max(0,A),A=Math.min(A,n.length+Math.max(X-1,0)),K(A)};a.useEffect(()=>{var h,A;(A=(h=O==null?void 0:O.current)==null?void 0:h.querySelector(`[tabIndex='${Y}']`))==null||A.focus()},[Y]);let[ge,ce]=a.useMemo(()=>{let h=C.filter(A=>!A.disabled);return[h.every(A=>d.findIndex($=>$.value===A.value)!==-1),h.length!==0]},[C,d]);a.useEffect(()=>{te().then(J)},[v,n]);let de=a.useRef();we([M.ENTER],q,{target:de});let xe=P&&E&&!C.some(h=>(h==null?void 0:h.value)===E);return t.jsxs("div",{className:"select-panel",role:"listbox",ref:O,children:[!b&&t.jsxs("div",{className:"search",children:[t.jsx("input",{placeholder:e("search"),type:"text","aria-describedby":e("search"),onChange:I,onFocus:B,value:E,ref:_,tabIndex:0}),t.jsx("button",{type:"button",className:"search-clear-button",hidden:!E,onClick:U,"aria-label":e("clearSearch"),children:g||t.jsx(Pe,{})})]}),t.jsxs("ul",{className:"options",children:[y&&ce&&t.jsx(Be,{tabIndex:X===1?0:1,checked:ge,option:F,onSelectionChanged:ee,onClick:()=>V(1),itemRenderer:w,disabled:f}),C.length?t.jsx(xt,{skipIndex:X,options:C,onClick:(h,A)=>V(A)}):xe?t.jsx("li",{onClick:q,className:"select-item creatable",tabIndex:1,ref:de,children:`${e("create")} "${E}"`}):t.jsx("li",{className:"no-options",children:e("noOptions")})]})]})},bt=ft,wt=({expanded:e})=>t.jsx("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-heading-dropdown-arrow gray",children:t.jsx("path",{d:e?"M18 15 12 9 6 15":"M6 9L12 15 18 9"})}),yt=()=>{let{t:e,value:c,options:n,valueRenderer:s}=be(),d=c.length===0,l=c.length===n.length,w=s&&s(c,n);return d?t.jsx("span",{className:"gray",children:w||e("selectSomeItems")}):t.jsx("span",{children:w||(l?e("allItemsAreSelected"):c.map(f=>f.label).join(", "))})},St=({size:e=24})=>t.jsx("span",{style:{width:e,marginRight:"0.2rem"},children:t.jsx("svg",{width:e,height:e,className:"spinner",viewBox:"0 0 50 50",style:{display:"inline",verticalAlign:"middle"},children:t.jsx("circle",{cx:"25",cy:"25",r:"20",fill:"none",className:"path"})})}),vt=()=>{let{t:e,onMenuToggle:c,ArrowRenderer:n,shouldToggleOnHover:s,isLoading:d,disabled:l,onChange:w,labelledBy:f,value:b,isOpen:y,defaultIsOpen:g,ClearSelectedIcon:x,closeOnChangedValue:P}=be();a.useEffect(()=>{P&&E(!1)},[b]);let[R,O]=a.useState(!0),[_,E]=a.useState(g),[N,C]=a.useState(!1),J=n||wt,v=a.useRef();lt(()=>{c&&c(_)},[_]),a.useEffect(()=>{g===void 0&&typeof y=="boolean"&&(O(!1),E(y))},[y]);let Z=I=>{var U;["text","button"].includes(I.target.type)&&[M.SPACE,M.ENTER].includes(I.code)||(R&&(I.code===M.ESCAPE?(E(!1),(U=v==null?void 0:v.current)==null||U.focus()):E(!0)),I.preventDefault())};we([M.ENTER,M.ARROW_DOWN,M.SPACE,M.ESCAPE],Z,{target:v});let Y=I=>{R&&s&&E(I)},K=()=>!N&&C(!0),Q=I=>{!I.currentTarget.contains(I.relatedTarget)&&R&&(C(!1),E(!1))},X=()=>Y(!0),F=()=>Y(!1),ae=()=>{R&&E(d||l?!1:!_)},ee=I=>{I.stopPropagation(),w([]),R&&E(!1)};return t.jsxs("div",{tabIndex:0,className:"dropdown-container","aria-labelledby":f,"aria-expanded":_,"aria-readonly":!0,"aria-disabled":l,ref:v,onFocus:K,onBlur:Q,onMouseEnter:X,onMouseLeave:F,children:[t.jsxs("div",{className:"dropdown-heading",onClick:ae,children:[t.jsx("div",{className:"dropdown-heading-value",children:t.jsx(yt,{})}),d&&t.jsx(St,{}),b.length>0&&x!==null&&t.jsx("button",{type:"button",className:"clear-selected-button",onClick:ee,disabled:l,"aria-label":e("clearSelected"),children:x||t.jsx(Pe,{})}),t.jsx(J,{expanded:_})]}),_&&t.jsx("div",{className:"dropdown-content",children:t.jsx("div",{className:"panel-content",children:t.jsx(bt,{})})})]})},Et=vt,jt=e=>t.jsx(st,{props:e,children:t.jsx("div",{className:`rmsc ${e.className||"multi-select"}`,children:t.jsx(Et,{})})}),kt=jt;const At=500,Le=({notifications:e,filterNotifications:c,filter:n,reset:s,loadFilter:d,showFilter:l,setShowFilter:w,search:f,setSearch:b})=>{const[y,g]=a.useState(),[x,P]=a.useState(),R=fe();a.useEffect(()=>{const v=setTimeout(()=>{f?f.length>0&&O():s()},At);return()=>{clearTimeout(v)}},[f]),a.useEffect(()=>{},[f]);const O=async()=>{var v=[];N.length?N.map(Z=>v.push(Z.value)):v=[],await c(f,v,y,x)};var _=[];e.map(v=>_.push({label:v.app,value:v.channel}));var E=[...new Map(_.map(v=>[v.value,v])).values()];const[N,C]=a.useState(E),J=async()=>{g(null),P(null),b(""),C(E),s(),w(!1)};return l?t.jsx(Ce,{theme:R,children:t.jsxs(Rt,{children:[t.jsxs(It,{children:[t.jsxs(We,{mright:"3.5rem",mtop:"28px",children:[t.jsx(ye,{children:"Keywords"}),t.jsx($t,{children:t.jsx(Ct,{value:f,type:"text",placeholder:"eg: push ",onChange:v=>{b(v.target.value)}})}),t.jsx(ye,{children:"From"}),t.jsx(Tt,{children:t.jsx(_t,{options:E,valueRenderer:()=>N.length===0?"eg: ethereum":`${N.length} Selected`,value:N,onChange:C,labelledBy:"Search Notifications from",placeholder:"Search Notifications from"})})]}),t.jsxs(We,{mleft:"3.5rem",mtop:"28px",children:[t.jsx(ye,{children:"Start Date"}),t.jsx(Fe,{mtop:"0.5rem",children:t.jsx(Ge,{className:"date",value:y,onChange:g})}),t.jsx(ye,{children:"End Date"}),t.jsx(Fe,{children:t.jsx(Ge,{className:"date",value:x,onChange:P})})]})]}),t.jsxs(Nt,{children:[t.jsx(Ot,{onClick:J,children:"Reset"}),t.jsx(Ue,{bgColor:"#e20880",onClick:O,children:"Search"})]})]})}):t.jsx(t.Fragment,{})},Ge=u(Mr)`
  padding-right: 4px;
  flex: 6;
  display: flex;
  align-items: center !important;
  font-family: Strawford, Source Sans Pro;
  .react-datetime-picker__wrapper {
    border: 0px !important;
    border-radius: 5px !important;
    height: 40px !important;
  }

  .react-datetime-picker__inputGroup {
    text-align: center !important;
    @media (max-width: 850px) {
      width: 4rem !important;
      margin-right: -2px !important;
      margin: 0px !important;
    }
  }

  .react-datetime-picker__inputGroup__input {
    font-weight: 500 !important;
  }
  .react-datetime-picker__inputGroup__input {
    font-weight: 500 !important;
    color: ${e=>e.theme.scheme==="dark"?"#fff":"#000"};
  }

  .react-datetime-picker__button svg {
    stroke: ${e=>e.theme.scheme==="dark"?"#fff":"#000"};
  }
  .react-datetime-picker__button {
    @media (max-width: 850px) {
      margin: 4px !important;
      padding: 0px !important;
    }
  }
  .react-datetime-picker__inputGroup__input--hasLeadingZero {
    font-weight: 500 !important;
  }
  .react-datetime-picker__inputGroup__minute {
    font-weight: 400 !important;
  }

  .react-datetime-picker__clock {
    display: none;
  }
  .react-datetime-picker__inputGroup__divider {
    font-weight: 400;
  }
`;u.div`
  flex: 2;
  padding: 0 10px;
  background-color: #35c5f3;
  align-self: stretch;
  text-align: center;
  color: white;
  font-weight: bold;

  div {
    margin-top: 10px;
    font-family: Source Sans Pro;
  }

  @media (max-width: 400px) {
    padding: 0 4px;
  }
`;const _t=u(kt)`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  margin-top: 3px;
  .search input {
    color: ${e=>e.theme.scheme==="dark"?"#fff":"#000"};
  }

  input {
    height: 35px;
    outline: none !important;
    border: 0px solid white !important;
    background-color: inherit;
  }

  /* Aligns the option label with the checkbox */
  .select-item {
    position: relative;
  }
  .select-item span {
    position: absolute;
    margin-top: 7px;
    margin-left: 22px;
  }
  .dropdown-container {
    border: 0px solid white !important;
    margin: 0px !important;
    padding: 0px !important;
    /* background: #F4F5FA; */
    background: ${e=>e.theme.backgroundBG};
  }

  .dropdown-heading {
    &:focus {
      border: 0px solid white !important;
      box-shadow: 0 0 0px white !important;
    }
  }

  .dropdown-content {
    .panel-content {
      overflow: hidden;
      font-family: Strawford, Source Sans Pro;
      font-weight: 18px;
    }
  }

  .dropdown-container {
    border: 0px solid white !important;
    margin: 0px !important;
    padding: 0px !important;
  }

  .dropdown-container {
    &:focus-within {
      border: 0px solid white !important;
      box-shadow: 0 0 0 0px white !important;
    }
  }

  ${e=>e.theme.scheme==="dark"&&`
        --rmsc-main: #4285f4;
        --rmsc-hover: #0e0c0a;
        --rmsc-selected: #1d1915;
        --rmsc-border: #333333;
        --rmsc-gray: #555555;
        --rmsc-bg: #000000;
        color: #fff;
    `}
`,ye=u.div`
  height: 23px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${e=>e.theme.color};
  margin-bottom: 10px;
`,Tt=u.div`
  border: 1px solid ${e=>e.theme.faucetBorder};
  border-radius: 5px;
  font-family: Strawford, Source Sans Pro;
  font-style: normal;
  font-weight: 400;
  /* background: #F4F5FA; */
  background: ${e=>e.theme.backgroundBG};
  font-size: 15px;
`,Ct=u.input`
  border: 0px solid white;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  position: relative;
  padding-left: 0.7rem;
  width: 100%;
  height: 35px;
  outline: none !important;
  border: 0px solid white !important;
  font-weight: 400;
  background-color: inherit;
  border: 1px solid #bac4d6;
  border-radius: 8px;
  color: ${e=>e.theme.color};
  &::placeholder {
    opacity: 1;
    font-weight: 400;
    font-family: Strawford, Source Sans Pro;
    // color: #B0B0B0 !important;
    color: ${e=>e.theme.color};
  }
`,Fe=u.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${e=>e.theme.faucetBorder};
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  height: '40px';
  margin-bottom: 28px;

  position: relative;
  margin-top: ${e=>e.mttop?e.mttop:""};
  @media (max-width: 600px) {
    margin-top: ${e=>e.mtop?e.mtop:""};
  }
`,Rt=u.div`
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  background: ${e=>e.theme.backgroundBG};
  border: 1px solid ${e=>e.theme.faucetBorder};
  border-radius: 10px;
  margin: 1.3rem;
  position: absolute;
  z-index: 2;
  top: 43px;
  padding: 0;
  @media (max-width: 600px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding: 0.5rem;
  }
`,Nt=u.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0.3rem 2rem 1.6rem 0;
  font-family: Strawford, Source Sans Pro;
  @media (max-width: 600px) {
    justify-content: space-evenly;
    margin-right: 0;
  }
`,Ue=u.button`
  width: 110px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  background-color: ${e=>e.bgColor?e.bgColor:""};
  margin-right: ${e=>e.mright?e.mright:""};
  &:hover {
    cursor: pointer;
    pointer: hand;
  }
  @media (max-width: 500px) {
    margin-right: ${e=>e.mright?"1.5rem":""};
  }
  font-family: Strawford, Source Sans Pro;
`,Ot=u(Ue)`
  background: ${e=>e.theme.backgroundBG};
  border: 1px solid #bac4d6;
  color: #657795;
  margin-right: 10px;
`,It=u.div`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  margin-right: 2rem;
  font-family: Strawford, Source Sans Pro;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-item: center;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`,We=u.div`
  flex: 1;
  @media (min-width: 600px) {
    margin-right: ${e=>e.mright?e.mright:""};
    margin-left: ${e=>e.mleft?e.mleft:""};
    margin-top: ${e=>e.mtop?e.mtop:""};
  }
  @media (max-width: 600px) {
    margin-top: 1.5rem;
  }
`,$t=u.div`
  height: 40px;
  border: 1px solid ${e=>e.theme.faucetBorder};
  border-radius: 5px;
  padding: 1px;
  margin-bottom: 28px;
  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`,Ae=10,Dt=({showFilter:e,setShowFilter:c,search:n,setSearch:s})=>{const d=Re(),{userPushSDKInstance:l}=ie(r=>r.user),w=a.useRef(null);Xe(w,()=>e&&c(!1));const{account:f,provider:b,chainId:y}=Ne(),{notifications:g,page:x,finishedFetching:P,toggle:R}=ie(r=>r.notifications),O=fe(),[_,E]=a.useState(null),N=()=>E(null),{run:C,welcomeNotifs:J}=ie(r=>r.userJourney),[v,Z]=a.useState(10),[Y,K]=a.useState([]),[Q,X]=a.useState([]),[F,ae]=a.useState(!1),[ee,I]=a.useState([]),[U,V]=a.useState(!1),[W,B]=a.useState(!1),[q,te]=a.useState(!1),{readOnlyWallet:le}=a.useContext(cr),[ge,ce]=a.useState(!0),de=Ve(),xe=()=>{de("/snap")},h=({msg:r})=>t.jsx(Bt,{children:t.jsx(Lt,{children:r})});a.useEffect(()=>{_&&N()},[_]);const A=()=>ae(!1),$=async(r,o,m,S)=>{if(m==null&&(m=new Date("January 1, 2000")),S==null&&(S=new Date("January 1, 3000")),m=m.getTime()/1e3,S=S.getTime()/1e3,!q){B(!0),te(!0),ae(!0);var p={channels:o,date:{lowDate:m,highDate:S}};o.length==0&&delete p.channels,X([]);try{let k=[];for(const L of Y){let G;const z=L.message.match(/\[timestamp:(.*?)\]/);z?G=z[1]:G=L.epoch,(p.channels===void 0||p.channels.includes(L.channel))&&G>=m&&G<=S&&(r===""||L.message.toLowerCase().includes(r.toLowerCase()))&&k.push(L)}I(k)}catch(k){console.error(k)}finally{te(!1),B(!1)}}};a.useEffect(()=>{X(ee)},[ee]);const ne=async()=>{if(!(q||P||!l)){te(!0);try{const r=await l.notification.list("INBOX",{raw:!0,page:x,limit:Ae}),o=se.utils.parseApiResponse(r);d(ur(o)),o.length===0&&d(qe())}catch(r){console.error(r)}finally{te(!1)}}},Se=async()=>{B(!0),te(!0);try{const r=await l.notification.list("INBOX",{raw:!0,page:1,limit:Ae});g.length||d(hr());const o=se.utils.parseApiResponse(r),m=new Map,S=new Map;r.forEach(p=>{m.set(p.payload.data.sid,p.epoch),S.set(p.payload.data.sid,p.sender)}),o.forEach(p=>{p.date=m.get(p.sid),p.epoch=new Date(p.date).getTime()/1e3,p.channel=S.get(p.sid)}),d(mr({notifs:o,pageSize:Ae})),o.length===0&&d(qe())}catch(r){console.error(r)}finally{B(!1),te(!1)}},Te=async()=>{V(!0);try{const r=await l.notification.list("INBOX",{limit:1e5,page:x,raw:!0}),o=se.utils.parseApiResponse(r),m=new Map,S=new Map;r.forEach(p=>{m.set(p.payload.data.sid,p.epoch),S.set(p.payload.data.sid,p.sender)}),o.forEach(p=>{p.date=m.get(p.sid),p.epoch=new Date(p.date).getTime()/1e3,p.channel=S.get(p.sid)}),K(o)}catch(r){console.error(r)}finally{V(!1)}};a.useEffect(()=>{(l==null?void 0:l.account)==le||!l||(Se(),Te())},[R,l]);const i=async()=>{F?Z(v+10):ne()},j=r=>F?Number(r)===v-1:Number(r)===g.length-1&&!P&&!W,T=async({secret:r,title:o,message:m,image:S,cta:p})=>{try{let k=await re.decryptWithWalletRPCMethod(b,r,f);const L=await re.decryptWithAES(m,k);let G=await re.decryptWithAES(o,k),z=await re.decryptWithAES(S,k),pe=await re.decryptWithAES(p,k);return{title:G,body:L,image:z,cta:pe}}catch(k){k.code===4001?(console.error(k),H.dark(t.jsx(h,{msg:"User denied message decryption"}),{position:"bottom-right",type:H.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):k.code===-32601?(console.error(k),H.dark(t.jsx(h,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:H.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(k),H.dark(t.jsx(h,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:H.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return t.jsx(Ce,{theme:O,children:t.jsxs(Mt,{children:[t.jsx("div",{ref:w,children:t.jsx(Le,{notifications:Y,filterNotifications:$,filter:F,reset:A,loadFilter:U,showFilter:e,setShowFilter:c,search:n,setSearch:s})}),t.jsxs(zt,{children:[ge&&t.jsx(t.Fragment,{children:t.jsxs(Gt,{flexWrap:"nowrap",children:[t.jsx(dr,{}),t.jsxs(Ft,{justifyContent:"space-between",children:[t.jsx(Ke,{fontSize:"14px",fontWeight:"400",children:"Get Notifications directly in MetaMask using Push Snap."}),t.jsxs(Wt,{onClick:xe,children:["Install Push Snap ",t.jsx(pr,{})," "]})]}),t.jsx(Ut,{onClick:()=>{ce(!1)}})]})}),(!C&&!g.length||!C&&F&&!Q.length||C&&!J.length)&&!q&&t.jsx("div",{style:{textAlign:"center"},children:t.jsx(rt,{title:"You currently have no notifications, try subscribing to some channels."})}),g&&t.jsxs(Pt,{id:"scrollstyle-secondary",children:[W&&t.jsx(oe,{padding:"10px 20px",children:t.jsx(ve,{type:Ee.SEAMLESS})}),C&&J.map((r,o)=>{const{cta:m,title:S,message:p,app:k,icon:L,image:G,blockchain:z,url:pe}=r;return t.jsx(ze,{children:t.jsx(Oe,{notificationTitle:S,notificationBody:p,cta:m,app:k,icon:L,image:G,theme:O.scheme,chainName:z,url:pe})},`${p}+${S}`)}),(F?Q:g).map((r,o)=>{const{cta:m,title:S,message:p,app:k,icon:L,image:G,secret:z,notification:pe,blockchain:or,url:sr}=r;if(!C)return t.jsxs(ze,{children:[j(o)&&t.jsx(tt,{onEnter:()=>i()}),t.jsx(Oe,{notificationTitle:S,notificationBody:p,cta:m,app:k,icon:L,image:G,isSecret:z!="",decryptFn:()=>T({secret:z,title:S,message:p,image:G,cta:m}),chainName:or,theme:O.scheme,url:sr})]},o)}),q&&!W&&t.jsx(oe,{padding:"10px 20px",children:t.jsx(ve,{type:Ee.SEAMLESS})})]}),_&&t.jsx(De,{notification:_,clearToast:N})]})]})})},Mt=u.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 85%;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  margin: 0 0 0 10px;
  @media ${me.tablet} {
    height: 74%;
  }
`,ze=u.div`
  margin: 25px 0px;
`,Pt=u.div`
  align-self: stretch;
  flex: 1;
`,Bt=u.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,Lt=u.div`
  margin: 0px 10px;
`,Gt=u(Ye)`
  margin-top: 20px;
  border-radius: 12px;
  border: 1px solid #d4dcea;
  background: #fff;
  border: 1px solid ${e=>e.theme.default.border};
  background: ${e=>e.theme.default.bg};
  padding: 12px 16px;
  align-items: center;
  gap: 16px;
  max-height: 50px;

  @media ${me.tablet} {
    gap: 9px;
    margin-right: 10px;
  }

  @media (max-width: 525px) {
    padding: 8px 12px;
  }
`,Ft=u(Ye)`
  @media ${me.tablet} {
    flex-direction: column;
    align-items: baseline;
    display: block;
    align-self: auto;
  }
`,Ut=u(lr)`
  cursor: pointer;
  height: 20px;
  width: 20px;
`,Wt=u(Ke)`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #d53a94;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`,zt=u(oe)`
  display: flex;
  align-self: stretch;
  align-items: stretch;
  justify-content: stretch;
  flex-wrap: nowrap;

  flex: 1;
  padding: ${e=>e.minimal?"20px 10px":"0px 20px 10px 20px"};
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: ${e=>e.theme.scrollBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    background-color: ${e=>e.theme.scrollBg};
    width: 6px;
  }

  @media (max-width: 768px) {
    padding: ${e=>e.minimal?"10px 5px":"0px"};

    &::-webkit-scrollbar-track {
      background-color: none;
      border-radius: 9px;
    }

    &::-webkit-scrollbar {
      background-color: none;
      width: 4px;
    }
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.44, #cf1c84),
      color-stop(0.72, #cf1c84),
      color-stop(0.86, #cf1c84)
    );
  }
`,_e=10,Ht=({showFilter:e,setShowFilter:c,search:n,setSearch:s})=>{const d=Re(),{userPushSDKInstance:l}=ie(i=>i.user),w=a.useRef(null);Xe(w,()=>e&&c(!1));const{account:f,chainId:b,provider:y}=Ne(),{epnsCommReadProvider:g}=ie(i=>i.contracts),{subscriptionStatus:x}=ie(i=>i.channels),P=fe(),[R,O]=a.useState(null),_=()=>O(null),{run:E}=ie(i=>i.userJourney),{notifications:N,page:C,finishedFetching:J}=ie(i=>i.spam);g==null||g.address;const[v,Z]=a.useState([]),[Y,K]=a.useState(!1),[Q,X]=a.useState([]),[F,ae]=a.useState(!1),[ee,I]=a.useState([]),[U,V]=a.useState(!1),[W,B]=a.useState(!1);je.coreContractChain;const q=({msg:i})=>t.jsx(Vt,{children:t.jsx(qt,{children:i})});a.useEffect(()=>{R&&_()},[R]);const te={POLYGON_TEST_AMOY:80002,ETH_TEST_KOVAN:42,ETH_TEST_GOERLI:5,ETH_TEST_SEPOLIA:11155111,POLYGON_MAINNET:137,ETH_MAINNET:1},le=()=>ae(!1),ge=async(i,j,T,r)=>{if(W)return;B(!0),V(!0),ae(!0),T==null&&(T=new Date("January 1, 2000")),r==null&&(r=new Date("January 1, 3000")),T=T.getTime()/1e3,r=r.getTime()/1e3;var o={channels:j,date:{lowDate:T,highDate:r}};j.length==0&&delete o.channels,X([]);let m=[];for(const S of v){let p;const k=S.message.match(/\[timestamp:(.*?)\]/);k?p=k[1]:p=S.epoch,(o.channels===void 0||o.channels.includes(S.channel))&&p>=T&&p<=r&&S.message.toLowerCase().includes(i.toLowerCase())&&m.push(S)}I(m),B(!1),V(!1)};a.useEffect(()=>{console.debug(Q,ee),X(ee)},[ee]);const ce=async()=>{if(!(W||J||E||!l)){B(!0);try{const i=await l.notification.list("SPAM",{limit:_e,page:C,raw:!0});let j=se.utils.parseApiResponse(i);j.forEach((r,o)=>{r.date=i[o].epoch,r.epoch=new Date(r.date).getTime()/1e3});const T=i.map(async(r,o)=>{r.channel=i[o].sender;let m=i[o].sender;return{...r}});j=await Promise.all(T),d(xr(j)),j.length===0&&d(Ze())}catch(i){console.error(i)}finally{B(!1)}}},de=async()=>{if(!(W||U||E)){V(!0),B(!0);try{const i=await l.notification.list("SPAM",{limit:_e,page:1,raw:!0});N.length||d(Ie());let j=se.utils.parseApiResponse(i);j.forEach((r,o)=>{r.date=i[o].epoch,r.epoch=new Date(r.date).getTime()/1e3});const T=j.map(async(r,o)=>{r.channel=i[o].sender;let m=i[o].sender;return{...r}});j=await Promise.all(T),j.length===0&&d(Ze())}catch(i){console.error(i)}finally{V(!1),B(!1)}}},xe=async()=>{K(!0);try{const i=await l.notification.list("SPAM",{limit:1e5,page:1,raw:!0});N.length||d(Ie());let j=se.utils.parseApiResponse(i);j.forEach((o,m)=>{o.date=i[m].epoch,o.epoch=new Date(o.date).getTime()/1e3});const T=j.map(async(o,m)=>{o.channel=i[m].sender;let S=i[m].sender;return{...o}});j=await Promise.all(T),console.debug(j);let r=j.filter(o=>!Se(o.channel));d(fr({notifs:r,pageSize:_e})),Z(r)}catch(i){console.error(i)}finally{V(!1),B(!1),K(!1)}};a.useEffect(()=>{l&&(de(),xe())},[l]),a.useEffect(()=>{g&&ce()},[g,f]);const h=async()=>{ce(),d(Ie())},A=i=>Number(i)===N.length-1&&!J&&!U,$=gr(),ne=async(i,j)=>{if(!i)return;let T=i;if(!T)return;console.debug(T),$.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),console.debug(y,f);const r=await y.getSigner(f);console.debug(r),console.debug({signer:r,channelAddress:ke(i,te[j]),userAddress:ke(f,b)}),await se.channels.subscribe({signer:r,channelAddress:ke(i,b),userAddress:ke(f,b),onSuccess:()=>{$.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:o=>t.jsx(br,{size:o,color:"green"})}),d(wr({channelAddress:i,status:!0}))},onError:o=>{console.error(o),$.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:m=>t.jsx(yr,{size:m,color:"red"})})},env:je.pushNodesEnv})},Se=i=>x[i],Te=async({secret:i,title:j,message:T,image:r,cta:o})=>{try{let m=await re.decryptWithWalletRPCMethod(y,i,f);const S=await re.decryptWithAES(T,m);let p=await re.decryptWithAES(j,m),k=await re.decryptWithAES(r,m),L=await re.decryptWithAES(o,m);return{title:p,body:S,image:k,cta:L}}catch(m){m.code===4001?(console.error(m),H.dark(t.jsx(q,{msg:"User denied message decryption"}),{position:"bottom-right",type:H.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):m.code===-32601?(console.error(m),H.dark(t.jsx(q,{msg:"Your wallet doesn't support message decryption."}),{position:"bottom-right",type:H.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(console.error(m),H.dark(t.jsx(q,{msg:"There was an error in message decryption"}),{position:"bottom-right",type:H.TYPE.ERROR,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}};return t.jsx(Ce,{theme:P,children:t.jsxs(Kt,{children:[t.jsx("div",{ref:w,children:t.jsx(Le,{notifications:v,filterNotifications:ge,filter:F,reset:le,loadFilter:Y,showFilter:e,setShowFilter:c,search:n,setSearch:s})}),t.jsxs($r,{children:[N&&t.jsxs(Yt,{id:"scrollstyle-secondary",children:[U&&t.jsx(oe,{padding:"10px 20px",children:t.jsx(ve,{type:Ee.SEAMLESS})}),(F&&!E?Q:v).map((i,j)=>{const{cta:T,title:r,message:o,app:m,icon:S,image:p,secret:k,notification:L,channel:G,blockchain:z,url:pe}=i;return t.jsxs(Xt,{children:[A(j)&&!W&&t.jsx(tt,{onEnter:h}),t.jsx(Oe,{notificationTitle:r,notificationBody:o,cta:T,app:m,icon:S,image:p,theme:P.scheme,subscribeFn:()=>ne(G,z),isSpam:!0,isSubscribedFn:async()=>Se(G),isSecret:k!="",decryptFn:()=>Te({secret:k,title:r,message:o,image:p,cta:T}),chainName:z,url:pe})]},j)}),W&&!U&&t.jsx(ve,{type:Ee.SEAMLESS})]}),(!N.length||F&&!Q.length)&&!W&&t.jsx(Jt,{children:t.jsx(rt,{title:"You currently have no spam notifications."})}),R&&t.jsx(De,{notification:R,clearToast:_})]})]})})},Jt=u.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Yt=u.div`
  align-self: stretch;
  flex: 1;
`,Kt=u.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 85%;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  margin: 0 0 0 10px;
  @media ${me.tablet} {
    height: 74%;
  }
`,Xt=u.div`
  margin: 25px 0px;
`,Vt=u.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 0 10px;
`,qt=u.div`
  margin: 0px 10px;
`,Zt=({isSpam:e})=>{const[c,n]=a.useState(!e),[s,d]=a.useState(!1),[l,w]=a.useState("");fe();const f=Ve(),b=()=>n(g=>!g),y=g=>{b(),d(!1),w(""),f(g)};return t.jsxs(Qt,{children:[t.jsx(er,{children:t.jsxs(tr,{children:[t.jsx(He,{isActive:c,onClick:()=>y($e.Inbox),children:"Inbox"}),t.jsx(He,{isActive:!c,onClick:()=>y($e.Spam),children:"Spam"})]})}),c?t.jsx(Dt,{showFilter:s,setShowFilter:d,search:l,setSearch:w}):t.jsx(Ht,{showFilter:s,setShowFilter:d,search:l,setSearch:w})]})},Qt=u.div`
  height: 100%;
  width: 100%;
`,er=u.div`
  margin: 0px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  // height: 100%;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    margin: 40px 30px 20px 30px;
  }

  :after {
    position: absolute;
    height: 2px;
    left: 0;
    bottom: 0;
    width: 100%;
    content: '';
    background-color: ${e=>e.theme.default.border};
  }
`,tr=u.div`
  display: flex;
  align-self: flex-end;
  padding-bottom: 15px;
  padding-top: 0px;

  @media (max-width: 768px) {
    align-self: flex-start;
    padding-top: 15px;
  }
`,He=u.div`
  width: 48;
  height: 25px;
  padding: 0 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 141%;
  text-align: center;
  position: relative;
  color: ${e=>e.isActive?"#CF1C84":e.theme.color};
  cursor: pointer;

  ${e=>e.isActive&&`&:after{
        position: absolute;
        height: 2px;
        left: 0;
        bottom: -15px;
        width: 100%;
        content: '';
        background-color: #CF1C84;
        z-index: 1;
        
    }`}
`;u(oe)`
  position: relative;
  max-width: 496px;
  min-width: 320px;
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,u.input`
  width: 100%;
  height: 44px;
  padding-left: 50px;
  border-radius: 99px;
  border: none;
  background: ${e=>e.theme.viewChannelSearchBg};
  color: ${e=>e.theme.viewChannelSearchText};
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  input[type='reset'] {
    display: none;
  }
  &::placeholder {
    color: #657795;
  }
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
  &:focus {
    // border: 1px solid #ec008c;
  }
`,u(oe)`
  cursor: pointer;
`,u(oe)`
  cursor: pointer;
  transform: rotate(90deg);
`;const rr=je.coreContractChain,ar=({isSpam:e})=>{Sr.pageview($e.Inbox);const c=Re(),{account:n,chainId:s,provider:d}=Ne(),{epnsReadProvider:l,epnsCommReadProvider:w}=ie(x=>x.contracts),[f,b]=he.useState(null),y=()=>b(null);fe();const g=rr===s;return he.useEffect(()=>{f&&y()},[f]),he.useEffect(()=>{s&&async function(){const x=g?d:new vr(je.coreRPC),P=new Qe(Er.epnscore,et.epnscore,x),R=jr[s].commAddress,O=new Qe(R,et.epnsComm,d);c(kr(O)),c(Ar(P))}()},[n,s]),he.useEffect(()=>{!l||!w||(l.pushChannelAdmin().then(x=>{c(_r(x))}).catch(x=>{console.error({err:x})}),l!=null&&w!=null&&(Tr.getInstance().init(n,l,w),Cr.getInstance().init(n,l,w,s)))},[l,w]),t.jsx(ir,{children:t.jsxs(nr,{children:[t.jsx("div",{className:"joyride"}),t.jsx(Zt,{isSpam:e}),f&&t.jsx(De,{notification:f,clearToast:y})]})})},ir=u(Rr)`
  align-items: stretch;
  align-self: stretch;
  flex: 1;
  background: ${e=>e.theme.default.bg};
  border-top-left-radius: ${D.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${D.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${D.ADJUSTMENTS.MARGIN.BIG_MODULES.DESKTOP};
  height: calc(
    100vh - ${D.CONSTANTS.HEADER_HEIGHT}px - ${ue.BIG_MODULES.DESKTOP.TOP} -
      ${ue.BIG_MODULES.DESKTOP.BOTTOM}
  );

  @media ${me.laptop} {
    margin: ${D.ADJUSTMENTS.MARGIN.BIG_MODULES.TABLET};
    height: calc(
      100vh - ${D.CONSTANTS.HEADER_HEIGHT}px - ${ue.BIG_MODULES.TABLET.TOP} -
        ${ue.BIG_MODULES.TABLET.BOTTOM}
    );
    border-radius: ${D.ADJUSTMENTS.RADIUS.LARGE} ${D.ADJUSTMENTS.RADIUS.LARGE}
      ${D.ADJUSTMENTS.RADIUS.LARGE} ${D.ADJUSTMENTS.RADIUS.LARGE};
  }

  @media ${me.mobileL} {
    margin: ${D.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${D.CONSTANTS.HEADER_HEIGHT}px - ${ue.BIG_MODULES.MOBILE.TOP} -
        ${ue.BIG_MODULES.MOBILE.BOTTOM}
    );
    border: ${D.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${D.ADJUSTMENTS.RADIUS.LARGE} ${D.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,nr=u.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;u.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,u.div`
  margin: 0px 10px;
`;let Je;at=()=>{const e=Nr();return t.jsx(Je,{children:t.jsx(ar,{isSpam:e.pathname==="/spam"})})},Je=u(Or)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`});export{Jr as __tla,at as default};
