import{ei as H,d_ as K,__tla as W}from"./index-CCAoOb7F.js";import{u as $,p as q,__tla as J}from"./NFTPage-Cc-_tcLw.js";let S,X=Promise.all([(()=>{try{return W}catch{}})(),(()=>{try{return J}catch{}})()]).then(async()=>{function C(a,t){for(var e=0;e<t.length;e++){const o=t[e];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in a)){const l=Object.getOwnPropertyDescriptor(o,r);l&&Object.defineProperty(a,r,l.get?l:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var R=Object.create,c=Object.defineProperty,U=Object.getOwnPropertyDescriptor,j=Object.getOwnPropertyNames,A=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty,V=(a,t,e)=>t in a?c(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,M=(a,t)=>{for(var e in t)c(a,e,{get:t[e],enumerable:!0})},T=(a,t,e,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of j(t))!I.call(a,r)&&r!==e&&c(a,r,{get:()=>t[r],enumerable:!(o=U(t,r))||o.enumerable});return a},L=(a,t,e)=>(e=a!=null?R(A(a)):{},T(!a||!a.__esModule?c(e,"default",{value:a,enumerable:!0}):e,a)),N=a=>T(c({},"__esModule",{value:!0}),a),s=(a,t,e)=>(V(a,typeof t!="symbol"?t+"":t,e),e),O={};M(O,{default:()=>m});var v=N(O),P=L(K),i=$,D=q;const Y="https://www.youtube.com/iframe_api",E="YT",B="onYouTubeIframeAPIReady",u=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,g=/user\/([a-zA-Z0-9_-]+)\/?/,z=/youtube-nocookie\.com/,F="https://www.youtube-nocookie.com";class m extends P.Component{constructor(){super(...arguments),s(this,"callPlayer",i.callPlayer),s(this,"parsePlaylist",t=>{if(t instanceof Array)return{listType:"playlist",playlist:t.map(this.getID).join(",")};if(u.test(t)){const[,e]=t.match(u);return{listType:"playlist",list:e.replace(/^UC/,"UU")}}if(g.test(t)){const[,e]=t.match(g);return{listType:"user_uploads",list:e}}return{}}),s(this,"onStateChange",t=>{const{data:e}=t,{onPlay:o,onPause:r,onBuffer:l,onBufferEnd:b,onEnded:_,onReady:w,loop:h,config:{playerVars:y,onUnstarted:d}}=this.props,{UNSTARTED:f,PLAYING:p,PAUSED:n,BUFFERING:x,ENDED:G,CUED:Q}=window[E].PlayerState;if(e===f&&d(),e===p&&(o(),b()),e===n&&r(),e===x&&l(),e===G){const Z=!!this.callPlayer("getPlaylist");h&&!Z&&(y.start?this.seekTo(y.start):this.play()),_()}e===Q&&w()}),s(this,"mute",()=>{this.callPlayer("mute")}),s(this,"unmute",()=>{this.callPlayer("unMute")}),s(this,"ref",t=>{this.container=t})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(t){return!t||t instanceof Array||u.test(t)?null:t.match(D.MATCH_URL_YOUTUBE)[1]}load(t,e){const{playing:o,muted:r,playsinline:l,controls:b,loop:_,config:w,onError:h}=this.props,{playerVars:y,embedOptions:d}=w,f=this.getID(t);if(e){if(u.test(t)||g.test(t)||t instanceof Array){this.player.loadPlaylist(this.parsePlaylist(t));return}this.player.cueVideoById({videoId:f,startSeconds:(0,i.parseStartTime)(t)||y.start,endSeconds:(0,i.parseEndTime)(t)||y.end});return}(0,i.getSDK)(Y,E,B,p=>p.loaded).then(p=>{this.container&&(this.player=new p.Player(this.container,{width:"100%",height:"100%",videoId:f,playerVars:{autoplay:o?1:0,mute:r?1:0,controls:b?1:0,start:(0,i.parseStartTime)(t),end:(0,i.parseEndTime)(t),origin:window.location.origin,playsinline:l?1:0,...this.parsePlaylist(t),...y},events:{onReady:()=>{_&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:n=>this.props.onPlaybackRateChange(n.data),onPlaybackQualityChange:n=>this.props.onPlaybackQualityChange(n),onStateChange:this.onStateChange,onError:n=>h(n.data)},host:z.test(t)?F:void 0,...d}))},h),d.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(t,e=!1){this.callPlayer("seekTo",t),!e&&!this.props.playing&&this.pause()}setVolume(t){this.callPlayer("setVolume",t*100)}setPlaybackRate(t){this.callPlayer("setPlaybackRate",t)}setLoop(t){this.callPlayer("setLoop",t)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:t}=this.props,e={width:"100%",height:"100%",display:t};return P.default.createElement("div",{style:e},P.default.createElement("div",{ref:this.ref}))}}s(m,"displayName","YouTube"),s(m,"canPlay",D.canPlay.youtube);let k;k=H(v),S=C({__proto__:null,default:k},[v])});export{S as Y,X as __tla};
