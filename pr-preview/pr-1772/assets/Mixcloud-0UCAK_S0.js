import{bf as S,a_ as A,__tla as E}from"./index-DwNq1Ejd.js";import{u as L,p as C,__tla as k}from"./NFTPage-BFfOPTpN.js";let m,N=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return k}catch{}})()]).then(async()=>{function g(t,e){for(var r=0;r<e.length;r++){const a=e[r];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(a,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var _=Object.create,n=Object.defineProperty,b=Object.getOwnPropertyDescriptor,P=Object.getOwnPropertyNames,O=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty,v=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,w=(t,e)=>{for(var r in e)n(t,r,{get:e[r],enumerable:!0})},p=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of P(e))!j.call(t,o)&&o!==r&&n(t,o,{get:()=>e[o],enumerable:!(a=b(e,o))||a.enumerable});return t},M=(t,e,r)=>(r=t!=null?_(O(t)):{},p(!t||!t.__esModule?n(r,"default",{value:t,enumerable:!0}):r,t)),x=t=>p(n({},"__esModule",{value:!0}),t),s=(t,e,r)=>(v(t,typeof e!="symbol"?e+"":e,r),r),c={};w(c,{default:()=>i});var h=x(c),d=M(A),u=L,y=C;const T="https://widget.mixcloud.com/media/js/widgetApi.js",D="Mixcloud";class i extends d.Component{constructor(){super(...arguments),s(this,"callPlayer",u.callPlayer),s(this,"duration",null),s(this,"currentTime",null),s(this,"secondsLoaded",null),s(this,"mute",()=>{}),s(this,"unmute",()=>{}),s(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,u.getSDK)(T,D).then(r=>{this.player=r.PlayerWidget(this.iframe),this.player.ready.then(()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on((a,o)=>{this.currentTime=a,this.duration=o}),this.props.onReady()})},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){const{url:e,config:r}=this.props,a=e.match(y.MATCH_URL_MIXCLOUD)[1],o={width:"100%",height:"100%"},l=(0,u.queryString)({...r.options,feed:`/${a}/`});return d.default.createElement("iframe",{key:a,ref:this.ref,style:o,src:`https://www.mixcloud.com/widget/iframe/?${l}`,frameBorder:"0",allow:"autoplay"})}}s(i,"displayName","Mixcloud"),s(i,"canPlay",y.canPlay.mixcloud),s(i,"loopOnEnded",!0);let f;f=S(h),m=g({__proto__:null,default:f},[h])});export{m as M,N as __tla};