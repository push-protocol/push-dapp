import{bf as T,a_ as W,bI as q,bJ as x,__tla as L}from"./index-B2wAmwQg.js";let f,N=Promise.all([(()=>{try{return L}catch{}})()]).then(async()=>{function g(t,e){for(var a=0;a<e.length;a++){const s=e[a];if(typeof s!="string"&&!Array.isArray(s)){for(const n in s)if(n!=="default"&&!(n in t)){const r=Object.getOwnPropertyDescriptor(s,n);r&&Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>s[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var _=Object.create,o=Object.defineProperty,w=Object.getOwnPropertyDescriptor,k=Object.getOwnPropertyNames,O=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,v=(t,e,a)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,j=(t,e)=>{for(var a in e)o(t,a,{get:e[a],enumerable:!0})},h=(t,e,a,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of k(e))!C.call(t,n)&&n!==a&&o(t,n,{get:()=>e[n],enumerable:!(s=w(e,n))||s.enumerable});return t},R=(t,e,a)=>(a=t!=null?_(O(t)):{},h(!t||!t.__esModule?o(a,"default",{value:t,enumerable:!0}):a,t)),S=t=>h(o({},"__esModule",{value:!0}),t),l=(t,e,a)=>(v(t,typeof e!="symbol"?e+"":e,a),a),c={};j(c,{default:()=>i});var d=S(c),b=R(W),p=q,P=x;const E="https://fast.wistia.com/assets/external/E-v1.js",D="Wistia",I="wistia-player-";class i extends b.Component{constructor(){super(...arguments),l(this,"callPlayer",p.callPlayer),l(this,"playerID",this.props.config.playerId||`${I}${(0,p.randomString)()}`),l(this,"onPlay",(...e)=>this.props.onPlay(...e)),l(this,"onPause",(...e)=>this.props.onPause(...e)),l(this,"onSeek",(...e)=>this.props.onSeek(...e)),l(this,"onEnded",(...e)=>this.props.onEnded(...e)),l(this,"onPlaybackRateChange",(...e)=>this.props.onPlaybackRateChange(...e)),l(this,"mute",()=>{this.callPlayer("mute")}),l(this,"unmute",()=>{this.callPlayer("unmute")})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:a,muted:s,controls:n,onReady:r,config:y,onError:M}=this.props;(0,p.getSDK)(E,D).then(A=>{y.customControls&&y.customControls.forEach(u=>A.defineControl(u)),window._wq=window._wq||[],window._wq.push({id:this.playerID,options:{autoPlay:a,silentAutoPlay:"allow",muted:s,controlsVisibleOnLoad:n,fullscreenButton:n,playbar:n,playbackRateControl:n,qualityControl:n,volumeControl:n,settingsControl:n,smallPlayButton:n,...y.options},onReady:u=>{this.player=u,this.unbind(),this.player.bind("play",this.onPlay),this.player.bind("pause",this.onPause),this.player.bind("seek",this.onSeek),this.player.bind("end",this.onEnded),this.player.bind("playbackratechange",this.onPlaybackRateChange),r()}})},M)}unbind(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded),this.player.unbind("playbackratechange",this.onPlaybackRateChange)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.unbind(),this.callPlayer("remove")}seekTo(e,a=!0){this.callPlayer("time",e),a||this.pause()}setVolume(e){this.callPlayer("volume",e)}setPlaybackRate(e){this.callPlayer("playbackRate",e)}getDuration(){return this.callPlayer("duration")}getCurrentTime(){return this.callPlayer("time")}getSecondsLoaded(){return null}render(){const{url:e}=this.props,a=e&&e.match(P.MATCH_URL_WISTIA)[1],s=`wistia_embed wistia_async_${a}`,n={width:"100%",height:"100%"};return b.default.createElement("div",{id:this.playerID,key:a,className:s,style:n})}}l(i,"displayName","Wistia"),l(i,"canPlay",P.canPlay.wistia),l(i,"loopOnEnded",!0);let m;m=T(d),f=g({__proto__:null,default:m},[d])});export{f as W,N as __tla};
