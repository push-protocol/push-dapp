import{bf as E,a_ as D,bG as A,bH as C,__tla as k}from"./index-COtUxmek.js";let f,x=Promise.all([(()=>{try{return k}catch{}})()]).then(async()=>{function b(t,e){for(var r=0;r<e.length;r++){const a=e[r];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(a,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var P=Object.create,l=Object.defineProperty,g=Object.getOwnPropertyDescriptor,_=Object.getOwnPropertyNames,O=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty,L=(t,e,r)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,T=(t,e)=>{for(var r in e)l(t,r,{get:e[r],enumerable:!0})},p=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of _(e))!j.call(t,s)&&s!==r&&l(t,s,{get:()=>e[s],enumerable:!(a=g(e,s))||a.enumerable});return t},v=(t,e,r)=>(r=t!=null?P(O(t)):{},p(!t||!t.__esModule?l(r,"default",{value:t,enumerable:!0}):r,t)),w=t=>p(l({},"__esModule",{value:!0}),t),o=(t,e,r)=>(L(t,typeof e!="symbol"?e+"":e,r),r),u={};T(u,{default:()=>n});var h=w(u),c=v(D),y=A,d=C;const M="https://cdn.embed.ly/player-0.1.0.min.js",S="playerjs";class n extends c.Component{constructor(){super(...arguments),o(this,"callPlayer",y.callPlayer),o(this,"duration",null),o(this,"currentTime",null),o(this,"secondsLoaded",null),o(this,"mute",()=>{this.callPlayer("mute")}),o(this,"unmute",()=>{this.callPlayer("unmute")}),o(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,y.getSDK)(M,S).then(r=>{this.iframe&&(this.player=new r.Player(this.iframe),this.player.setLoop(this.props.loop),this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seeked",this.props.onSeek),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({duration:a,seconds:s})=>{this.duration=a,this.currentTime=s}),this.player.on("buffered",({percent:a})=>{this.duration&&(this.secondsLoaded=this.duration*a)}),this.props.muted&&this.player.mute())},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("setCurrentTime",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e*100)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const e=this.props.url.match(d.MATCH_URL_STREAMABLE)[1],r={width:"100%",height:"100%"};return c.default.createElement("iframe",{ref:this.ref,src:`https://streamable.com/o/${e}`,frameBorder:"0",scrolling:"no",style:r,allow:"encrypted-media; autoplay; fullscreen;"})}}o(n,"displayName","Streamable"),o(n,"canPlay",d.canPlay.streamable);let m;m=E(h),f=b({__proto__:null,default:m},[h])});export{f as S,x as __tla};
