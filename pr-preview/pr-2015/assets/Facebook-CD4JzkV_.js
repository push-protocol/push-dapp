import{ev as B,dX as x,__tla as F}from"./index-CInSjBxa.js";import{u as L,p as N,__tla as A}from"./NFTPage-BnYpPmMD.js";let g,C=Promise.all([(()=>{try{return F}catch{}})(),(()=>{try{return A}catch{}})()]).then(async()=>{function P(t,e){for(var r=0;r<e.length;r++){const a=e[r];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in t)){const p=Object.getOwnPropertyDescriptor(a,s);p&&Object.defineProperty(t,s,p.get?p:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var _=Object.create,o=Object.defineProperty,v=Object.getOwnPropertyDescriptor,O=Object.getOwnPropertyNames,j=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty,I=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,E=(t,e)=>{for(var r in e)o(t,r,{get:e[r],enumerable:!0})},u=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of O(e))!D.call(t,s)&&s!==r&&o(t,s,{get:()=>e[s],enumerable:!(a=v(e,s))||a.enumerable});return t},S=(t,e,r)=>(r=t!=null?_(j(t)):{},u(!t||!t.__esModule?o(r,"default",{value:t,enumerable:!0}):r,t)),k=t=>u(o({},"__esModule",{value:!0}),t),l=(t,e,r)=>(I(t,typeof e!="symbol"?e+"":e,r),r),c={};E(c,{default:()=>n});var y=k(c),h=S(x),i=L,w=N;const f="https://connect.facebook.net/en_US/sdk.js",d="FB",b="fbAsyncInit",M="facebook-player-";class n extends h.Component{constructor(){super(...arguments),l(this,"callPlayer",i.callPlayer),l(this,"playerID",this.props.config.playerId||`${M}${(0,i.randomString)()}`),l(this,"mute",()=>{this.callPlayer("mute")}),l(this,"unmute",()=>{this.callPlayer("unmute")})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,r){if(r){(0,i.getSDK)(f,d,b).then(a=>a.XFBML.parse());return}(0,i.getSDK)(f,d,b).then(a=>{a.init({appId:this.props.config.appId,xfbml:!0,version:this.props.config.version}),a.Event.subscribe("xfbml.render",s=>{this.props.onLoaded()}),a.Event.subscribe("xfbml.ready",s=>{s.type==="video"&&s.id===this.playerID&&(this.player=s.instance,this.player.subscribe("startedPlaying",this.props.onPlay),this.player.subscribe("paused",this.props.onPause),this.player.subscribe("finishedPlaying",this.props.onEnded),this.player.subscribe("startedBuffering",this.props.onBuffer),this.player.subscribe("finishedBuffering",this.props.onBufferEnd),this.player.subscribe("error",this.props.onError),this.props.muted?this.callPlayer("mute"):this.callPlayer("unmute"),this.props.onReady(),document.getElementById(this.playerID).querySelector("iframe").style.visibility="visible")})})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentPosition")}getSecondsLoaded(){return null}render(){const{attributes:e}=this.props.config,r={width:"100%",height:"100%"};return h.default.createElement("div",{style:r,id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false",...e})}}l(n,"displayName","Facebook"),l(n,"canPlay",w.canPlay.facebook),l(n,"loopOnEnded",!0);let m;m=B(y),g=P({__proto__:null,default:m},[y])});export{g as F,C as __tla};
