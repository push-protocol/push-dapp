import{ew as L,d_ as S,eL as E,eM as A,__tla as C}from"./index-FHzblH_m.js";let m,k=Promise.all([(()=>{try{return C}catch{}})()]).then(async()=>{function g(t,e){for(var r=0;r<e.length;r++){const s=e[r];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var b=Object.create,a=Object.defineProperty,P=Object.getOwnPropertyDescriptor,_=Object.getOwnPropertyNames,O=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,j=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,v=(t,e)=>{for(var r in e)a(t,r,{get:e[r],enumerable:!0})},p=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of _(e))!w.call(t,o)&&o!==r&&a(t,o,{get:()=>e[o],enumerable:!(s=P(e,o))||s.enumerable});return t},M=(t,e,r)=>(r=t!=null?b(O(t)):{},p(!t||!t.__esModule?a(r,"default",{value:t,enumerable:!0}):r,t)),x=t=>p(a({},"__esModule",{value:!0}),t),n=(t,e,r)=>(j(t,typeof e!="symbol"?e+"":e,r),r),c={};v(c,{default:()=>i});var d=x(c),h=M(S),u=E,y=A;const T="https://widget.mixcloud.com/media/js/widgetApi.js",D="Mixcloud";class i extends h.Component{constructor(){super(...arguments),n(this,"callPlayer",u.callPlayer),n(this,"duration",null),n(this,"currentTime",null),n(this,"secondsLoaded",null),n(this,"mute",()=>{}),n(this,"unmute",()=>{}),n(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,u.getSDK)(T,D).then(r=>{this.player=r.PlayerWidget(this.iframe),this.player.ready.then(()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on((s,o)=>{this.currentTime=s,this.duration=o}),this.props.onReady()})},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){const{url:e,config:r}=this.props,s=e.match(y.MATCH_URL_MIXCLOUD)[1],o={width:"100%",height:"100%"},l=(0,u.queryString)({...r.options,feed:`/${s}/`});return h.default.createElement("iframe",{key:s,ref:this.ref,style:o,src:`https://www.mixcloud.com/widget/iframe/?${l}`,frameBorder:"0",allow:"autoplay"})}}n(i,"displayName","Mixcloud"),n(i,"canPlay",y.canPlay.mixcloud),n(i,"loopOnEnded",!0);let f;f=L(d),m=g({__proto__:null,default:f},[d])});export{m as M,k as __tla};
