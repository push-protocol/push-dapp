import{s as S,r as A,__tla as E}from"./index-CTdJWdDx.js";import{u as L,p as C,__tla as k}from"./NFTPage-CDs63xvH.js";let f,N=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return k}catch{}})()]).then(async()=>{function g(t,e){for(var r=0;r<e.length;r++){const s=e[r];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var _=Object.create,n=Object.defineProperty,b=Object.getOwnPropertyDescriptor,P=Object.getOwnPropertyNames,O=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty,v=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,w=(t,e)=>{for(var r in e)n(t,r,{get:e[r],enumerable:!0})},p=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of P(e))!j.call(t,o)&&o!==r&&n(t,o,{get:()=>e[o],enumerable:!(s=b(e,o))||s.enumerable});return t},M=(t,e,r)=>(r=t!=null?_(O(t)):{},p(!t||!t.__esModule?n(r,"default",{value:t,enumerable:!0}):r,t)),x=t=>p(n({},"__esModule",{value:!0}),t),a=(t,e,r)=>(v(t,typeof e!="symbol"?e+"":e,r),r),c={};w(c,{default:()=>i});var h=x(c),d=M(A),u=L,y=C;const T="https://widget.mixcloud.com/media/js/widgetApi.js",D="Mixcloud";class i extends d.Component{constructor(){super(...arguments),a(this,"callPlayer",u.callPlayer),a(this,"duration",null),a(this,"currentTime",null),a(this,"secondsLoaded",null),a(this,"mute",()=>{}),a(this,"unmute",()=>{}),a(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,u.getSDK)(T,D).then(r=>{this.player=r.PlayerWidget(this.iframe),this.player.ready.then(()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on((s,o)=>{this.currentTime=s,this.duration=o}),this.props.onReady()})},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){const{url:e,config:r}=this.props,s=e.match(y.MATCH_URL_MIXCLOUD)[1],o={width:"100%",height:"100%"},l=(0,u.queryString)({...r.options,feed:`/${s}/`});return d.default.createElement("iframe",{key:s,ref:this.ref,style:o,src:`https://www.mixcloud.com/widget/iframe/?${l}`,frameBorder:"0",allow:"autoplay"})}}a(i,"displayName","Mixcloud"),a(i,"canPlay",y.canPlay.mixcloud),a(i,"loopOnEnded",!0);let m;m=S(h),f=g({__proto__:null,default:m},[h])});export{f as M,N as __tla};
