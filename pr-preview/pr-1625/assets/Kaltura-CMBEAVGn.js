import{cr as E,b0 as S,__tla as C}from"./index-CUGv7H9a.js";import{u as K,p as k,__tla as x}from"./NFTPage-Czrx_a30.js";let m,A=Promise.all([(()=>{try{return C}catch{}})(),(()=>{try{return x}catch{}})()]).then(async()=>{function f(r,e){for(var t=0;t<e.length;t++){const o=e[t];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in r)){const i=Object.getOwnPropertyDescriptor(o,a);i&&Object.defineProperty(r,a,i.get?i:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var P=Object.create,l=Object.defineProperty,b=Object.getOwnPropertyDescriptor,g=Object.getOwnPropertyNames,_=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty,j=(r,e,t)=>e in r?l(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,w=(r,e)=>{for(var t in e)l(r,t,{get:e[t],enumerable:!0})},u=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of g(e))!O.call(r,a)&&a!==t&&l(r,a,{get:()=>e[a],enumerable:!(o=b(e,a))||o.enumerable});return r},v=(r,e,t)=>(t=r!=null?P(_(r)):{},u(!r||!r.__esModule?l(t,"default",{value:r,enumerable:!0}):t,r)),L=r=>u(l({},"__esModule",{value:!0}),r),s=(r,e,t)=>(j(r,typeof e!="symbol"?e+"":e,t),t),p={};w(p,{default:()=>n});var c=L(p),y=v(S),d=K,T=k;const M="https://cdn.embed.ly/player-0.1.0.min.js",D="playerjs";class n extends y.Component{constructor(){super(...arguments),s(this,"callPlayer",d.callPlayer),s(this,"duration",null),s(this,"currentTime",null),s(this,"secondsLoaded",null),s(this,"mute",()=>{this.callPlayer("mute")}),s(this,"unmute",()=>{this.callPlayer("unmute")}),s(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,d.getSDK)(M,D).then(t=>{this.iframe&&(this.player=new t.Player(this.iframe),this.player.on("ready",()=>{setTimeout(()=>{this.player.isReady=!0,this.player.setLoop(this.props.loop),this.props.muted&&this.player.mute(),this.addListeners(this.player,this.props),this.props.onReady()},500)}))},this.props.onError)}addListeners(e,t){e.on("play",t.onPlay),e.on("pause",t.onPause),e.on("ended",t.onEnded),e.on("error",t.onError),e.on("timeupdate",({duration:o,seconds:a})=>{this.duration=o,this.currentTime=a})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const e={width:"100%",height:"100%"};return y.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:e,allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}}s(n,"displayName","Kaltura"),s(n,"canPlay",T.canPlay.kaltura);let h;h=E(c),m=f({__proto__:null,default:h},[c])});export{m as K,A as __tla};
