import{ef as H,d_ as J,eI as K,eJ as q,__tla as W}from"./index-DWdYShLP.js";let S,X=Promise.all([(()=>{try{return W}catch{}})()]).then(async()=>{function C(a,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in a)){const l=Object.getOwnPropertyDescriptor(s,r);l&&Object.defineProperty(a,r,l.get?l:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var R=Object.create,c=Object.defineProperty,U=Object.getOwnPropertyDescriptor,j=Object.getOwnPropertyNames,A=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty,V=(a,e,t)=>e in a?c(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,M=(a,e)=>{for(var t in e)c(a,t,{get:e[t],enumerable:!0})},T=(a,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of j(e))!I.call(a,r)&&r!==t&&c(a,r,{get:()=>e[r],enumerable:!(s=U(e,r))||s.enumerable});return a},L=(a,e,t)=>(t=a!=null?R(A(a)):{},T(!a||!a.__esModule?c(t,"default",{value:a,enumerable:!0}):t,a)),N=a=>T(c({},"__esModule",{value:!0}),a),o=(a,e,t)=>(V(a,typeof e!="symbol"?e+"":e,t),t),O={};M(O,{default:()=>m});var v=N(O),P=L(J),i=K,D=q;const Y="https://www.youtube.com/iframe_api",E="YT",B="onYouTubeIframeAPIReady",u=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,g=/user\/([a-zA-Z0-9_-]+)\/?/,z=/youtube-nocookie\.com/,F="https://www.youtube-nocookie.com";class m extends P.Component{constructor(){super(...arguments),o(this,"callPlayer",i.callPlayer),o(this,"parsePlaylist",e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(u.test(e)){const[,t]=e.match(u);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(g.test(e)){const[,t]=e.match(g);return{listType:"user_uploads",list:t}}return{}}),o(this,"onStateChange",e=>{const{data:t}=e,{onPlay:s,onPause:r,onBuffer:l,onBufferEnd:b,onEnded:_,onReady:w,loop:h,config:{playerVars:y,onUnstarted:d}}=this.props,{UNSTARTED:f,PLAYING:p,PAUSED:n,BUFFERING:x,ENDED:G,CUED:Q}=window[E].PlayerState;if(t===f&&d(),t===p&&(s(),b()),t===n&&r(),t===x&&l(),t===G){const Z=!!this.callPlayer("getPlaylist");h&&!Z&&(y.start?this.seekTo(y.start):this.play()),_()}t===Q&&w()}),o(this,"mute",()=>{this.callPlayer("mute")}),o(this,"unmute",()=>{this.callPlayer("unMute")}),o(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||u.test(e)?null:e.match(D.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:s,muted:r,playsinline:l,controls:b,loop:_,config:w,onError:h}=this.props,{playerVars:y,embedOptions:d}=w,f=this.getID(e);if(t){if(u.test(e)||g.test(e)||e instanceof Array){this.player.loadPlaylist(this.parsePlaylist(e));return}this.player.cueVideoById({videoId:f,startSeconds:(0,i.parseStartTime)(e)||y.start,endSeconds:(0,i.parseEndTime)(e)||y.end});return}(0,i.getSDK)(Y,E,B,p=>p.loaded).then(p=>{this.container&&(this.player=new p.Player(this.container,{width:"100%",height:"100%",videoId:f,playerVars:{autoplay:s?1:0,mute:r?1:0,controls:b?1:0,start:(0,i.parseStartTime)(e),end:(0,i.parseEndTime)(e),origin:window.location.origin,playsinline:l?1:0,...this.parsePlaylist(e),...y},events:{onReady:()=>{_&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:n=>this.props.onPlaybackRateChange(n.data),onPlaybackQualityChange:n=>this.props.onPlaybackQualityChange(n),onStateChange:this.onStateChange,onError:n=>h(n.data)},host:z.test(e)?F:void 0,...d}))},h),d.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),!t&&!this.props.playing&&this.pause()}setVolume(e){this.callPlayer("setVolume",e*100)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return P.default.createElement("div",{style:t},P.default.createElement("div",{ref:this.ref}))}}o(m,"displayName","YouTube"),o(m,"canPlay",D.canPlay.youtube);let k;k=H(v),S=C({__proto__:null,default:k},[v])});export{S as Y,X as __tla};
