import{b8 as T,b7 as S,__tla as V}from"./index-D2WXfsHq.js";import{u as R,p as C,__tla as N}from"./NFTPage-DeJT81An.js";let f,x=Promise.all([(()=>{try{return V}catch{}})(),(()=>{try{return N}catch{}})()]).then(async()=>{function m(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in t)){const s=Object.getOwnPropertyDescriptor(n,o);s&&Object.defineProperty(t,o,s.get?s:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var b=Object.create,i=Object.defineProperty,g=Object.getOwnPropertyDescriptor,P=Object.getOwnPropertyNames,_=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty,v=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,j=(t,e)=>{for(var r in e)i(t,r,{get:e[r],enumerable:!0})},p=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of P(e))!O.call(t,o)&&o!==r&&i(t,o,{get:()=>e[o],enumerable:!(n=g(e,o))||n.enumerable});return t},M=(t,e,r)=>(r=t!=null?b(_(t)):{},p(!t||!t.__esModule?i(r,"default",{value:t,enumerable:!0}):r,t)),k=t=>p(i({},"__esModule",{value:!0}),t),a=(t,e,r)=>(v(t,typeof e!="symbol"?e+"":e,r),r),h={};j(h,{default:()=>l});var u=k(h),c=M(S),y=R,w=C;const D="https://player.vimeo.com/api/player.js",E="Vimeo",L=t=>t.replace("/manage/videos","");class l extends c.Component{constructor(){super(...arguments),a(this,"callPlayer",y.callPlayer),a(this,"duration",null),a(this,"currentTime",null),a(this,"secondsLoaded",null),a(this,"mute",()=>{this.setMuted(!0)}),a(this,"unmute",()=>{this.setMuted(!1)}),a(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){this.duration=null,(0,y.getSDK)(D,E).then(r=>{if(!this.container)return;const{playerOptions:n,title:o}=this.props.config;this.player=new r.Player(this.container,{url:L(e),autoplay:this.props.playing,muted:this.props.muted,loop:this.props.loop,playsinline:this.props.playsinline,controls:this.props.controls,...n}),this.player.ready().then(()=>{const s=this.container.querySelector("iframe");s.style.width="100%",s.style.height="100%",o&&(s.title=o)}).catch(this.props.onError),this.player.on("loaded",()=>{this.props.onReady(),this.refreshDuration()}),this.player.on("play",()=>{this.props.onPlay(),this.refreshDuration()}),this.player.on("pause",this.props.onPause),this.player.on("seeked",s=>this.props.onSeek(s.seconds)),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({seconds:s})=>{this.currentTime=s}),this.player.on("progress",({seconds:s})=>{this.secondsLoaded=s}),this.player.on("bufferstart",this.props.onBuffer),this.player.on("bufferend",this.props.onBufferEnd),this.player.on("playbackratechange",s=>this.props.onPlaybackRateChange(s.playbackRate))},this.props.onError)}refreshDuration(){this.player.getDuration().then(e=>{this.duration=e})}play(){const e=this.callPlayer("play");e&&e.catch(this.props.onError)}pause(){this.callPlayer("pause")}stop(){this.callPlayer("unload")}seekTo(e,r=!0){this.callPlayer("setCurrentTime",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setMuted(e){this.callPlayer("setMuted",e)}setLoop(e){this.callPlayer("setLoop",e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const{display:e}=this.props,r={width:"100%",height:"100%",overflow:"hidden",display:e};return c.default.createElement("div",{key:this.props.url,ref:this.ref,style:r})}}a(l,"displayName","Vimeo"),a(l,"canPlay",w.canPlay.vimeo),a(l,"forceLoad",!0);let d;d=T(u),f=m({__proto__:null,default:d},[u])});export{f as V,x as __tla};
