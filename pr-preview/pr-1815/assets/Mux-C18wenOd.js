import{b8 as x,bx as D,b7 as B,__tla as C}from"./index-D2WXfsHq.js";import{p as T,__tla as S}from"./NFTPage-DeJT81An.js";let E,A=Promise.all([(()=>{try{return C}catch{}})(),(()=>{try{return S}catch{}})()]).then(async()=>{function b(n,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in n)){const i=Object.getOwnPropertyDescriptor(s,a);i&&Object.defineProperty(n,a,i.get?i:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var g=Object.create,o=Object.defineProperty,L=Object.getOwnPropertyDescriptor,_=Object.getOwnPropertyNames,k=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty,O=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,R=(n,e)=>{for(var t in e)o(n,t,{get:e[t],enumerable:!0})},c=(n,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of _(e))!I.call(n,a)&&a!==t&&o(n,a,{get:()=>e[a],enumerable:!(s=L(e,a))||s.enumerable});return n},j=(n,e,t)=>(t=n!=null?g(k(n)):{},c(!n||!n.__esModule?o(t,"default",{value:n,enumerable:!0}):t,n)),M=n=>c(o({},"__esModule",{value:!0}),n),r=(n,e,t)=>(O(n,typeof e!="symbol"?e+"":e,t),t),d={};R(d,{default:()=>h});var y=M(d),m=j(B),u=T;const w="https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs";class h extends m.Component{constructor(){super(...arguments),r(this,"onReady",(...e)=>this.props.onReady(...e)),r(this,"onPlay",(...e)=>this.props.onPlay(...e)),r(this,"onBuffer",(...e)=>this.props.onBuffer(...e)),r(this,"onBufferEnd",(...e)=>this.props.onBufferEnd(...e)),r(this,"onPause",(...e)=>this.props.onPause(...e)),r(this,"onEnded",(...e)=>this.props.onEnded(...e)),r(this,"onError",(...e)=>this.props.onError(...e)),r(this,"onPlayBackRateChange",e=>this.props.onPlaybackRateChange(e.target.playbackRate)),r(this,"onEnablePIP",(...e)=>this.props.onEnablePIP(...e)),r(this,"onSeek",e=>{this.props.onSeek(e.target.currentTime)}),r(this,"onDurationChange",()=>{const e=this.getDuration();this.props.onDuration(e)}),r(this,"mute",()=>{this.player.muted=!0}),r(this,"unmute",()=>{this.player.muted=!1}),r(this,"ref",e=>{this.player=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getPlaybackId(this.props.url);e&&(this.player.playbackId=e)}componentWillUnmount(){this.player.playbackId=null,this.removeListeners(this.player)}addListeners(e){const{playsinline:t}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),e.addEventListener("canplay",this.onReady),t&&e.setAttribute("playsinline","")}removeListeners(e){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("canplay",this.onReady)}async load(e){var t;const{onError:s,config:a}=this.props;if(!((t=globalThis.customElements)!=null&&t.get("mux-player")))try{const l=w.replace("VERSION",a.version);await D(()=>import(`${l}`).then(async p=>(await p.__tla,p)),[]),this.props.onLoaded()}catch(l){s(l)}const[,i]=e.match(u.MATCH_URL_MUX);this.player.playbackId=i}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.playbackId=null}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player&&this.player.requestPictureInPicture()}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player&&document.exitPictureInPicture()}setPlaybackRate(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(e.length===0)return 0;const t=e.end(e.length-1),s=this.getDuration();return t>s?s:t}getPlaybackId(e){const[,t]=e.match(u.MATCH_URL_MUX);return t}render(){const{url:e,playing:t,loop:s,controls:a,muted:i,config:l,width:p,height:v}=this.props,f={width:p==="auto"?p:"100%",height:v==="auto"?v:"100%"};return a===!1&&(f["--controls"]="none"),m.default.createElement("mux-player",{ref:this.ref,"playback-id":this.getPlaybackId(e),style:f,preload:"auto",autoPlay:t||void 0,muted:i?"":void 0,loop:s?"":void 0,...l.attributes})}}r(h,"displayName","Mux"),r(h,"canPlay",u.canPlay.mux);let P;P=x(y),E=b({__proto__:null,default:P},[y])});export{E as M,A as __tla};
