import{ev as N,dX as A,__tla as M}from"./index-CfbKVokx.js";let _,K=Promise.all([(()=>{try{return M}catch{}})()]).then(async()=>{function v(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in r)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(r,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var w=Object.create,i=Object.defineProperty,O=Object.getOwnPropertyDescriptor,P=Object.getOwnPropertyNames,j=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty,I=(r,e,t)=>e in r?i(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,k=(r,e)=>{for(var t in e)i(r,t,{get:e[t],enumerable:!0})},h=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of P(e))!x.call(r,a)&&a!==t&&i(r,a,{get:()=>e[a],enumerable:!(n=O(e,a))||n.enumerable});return r},S=(r,e,t)=>(t=r!=null?w(j(r)):{},h(!r||!r.__esModule?i(t,"default",{value:r,enumerable:!0}):t,r)),E=r=>h(i({},"__esModule",{value:!0}),r),s=(r,e,t)=>(I(r,typeof e!="symbol"?e+"":e,t),t),m={};k(m,{default:()=>C});var f=E(m),l=S(A);const c="64px",u={};class C extends l.Component{constructor(){super(...arguments),s(this,"mounted",!1),s(this,"state",{image:null}),s(this,"handleKeyPress",e=>{(e.key==="Enter"||e.key===" ")&&this.props.onClick()})}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:n}=this.props;(e.url!==t||e.light!==n)&&this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage({url:e,light:t,oEmbedUrl:n}){if(!l.default.isValidElement(t)){if(typeof t=="string"){this.setState({image:t});return}if(u[e]){this.setState({image:u[e]});return}return this.setState({image:null}),window.fetch(n.replace("{url}",e)).then(a=>a.json()).then(a=>{if(a.thumbnail_url&&this.mounted){const o=a.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:o}),u[e]=o}})}}render(){const{light:e,onClick:t,playIcon:n,previewTabIndex:a,previewAriaLabel:o}=this.props,{image:b}=this.state,p=l.default.isValidElement(e),y={display:"flex",alignItems:"center",justifyContent:"center"},d={preview:{width:"100%",height:"100%",backgroundImage:b&&!p?`url(${b})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...y},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:c,width:c,height:c,position:p?"absolute":void 0,...y},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},D=l.default.createElement("div",{style:d.shadow,className:"react-player__shadow"},l.default.createElement("div",{style:d.playIcon,className:"react-player__play-icon"}));return l.default.createElement("div",{style:d.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress,...o?{"aria-label":o}:{}},p?e:null,n||D)}}let g;g=N(f),_=v({__proto__:null,default:g},[f])});export{_ as P,K as __tla};
