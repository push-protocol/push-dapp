const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YouTube-fyJMfE-A.js","assets/index-BDYco_bZ.js","assets/index-DVOSwgdc.css","assets/SoundCloud-B4CNahkI.js","assets/Vimeo-CiaqDTAm.js","assets/Mux-DBogSIqN.js","assets/Facebook-JkPVD2ZW.js","assets/Streamable-AFPd3z1N.js","assets/Wistia-CjJ9Vybw.js","assets/Twitch-DGxOK_yt.js","assets/DailyMotion-BPYg5Roh.js","assets/Mixcloud-CjqSz98q.js","assets/Vidyard-CXXzswS4.js","assets/Kaltura-ozPRomcL.js","assets/FilePlayer-CGz5oCDJ.js","assets/Preview-ChzRFV34.js"])))=>i.map(i=>d[i]);
import{b7 as B,eq as da,er as Mt,bx as z,es as pa,et as Lt,eu as ua,b8 as ha,a_ as c,bg as X,b9 as K,ba as p,bd as H,cv as S,cw as O,cu as E,aZ as o,b5 as M,bS as ce,cM as me,b3 as G,bE as de,bU as Q,bV as ee,b4 as W,bF as pe,bC as D,bR as zt,bW as be,bI as Fe,bz as U,bA as te,bB as Ut,bD as fa,b1 as ya,bH as $t,cy as Ft,bJ as xa,a$ as ga,__tla as ma}from"./index-BDYco_bZ.js";import{S as we,__tla as ba}from"./Skeleton-DOXyS2QQ.js";import{a as Vt,__tla as wa}from"./index.esm-Bqd7ll65.js";import{D as Bt,__tla as Pa}from"./DisplayNotice-TJREbVly.js";let Ht,Ve,ne,Ta=Promise.all([(()=>{try{return ma}catch{}})(),(()=>{try{return ba}catch{}})(),(()=>{try{return wa}catch{}})(),(()=>{try{return Pa}catch{}})()]).then(async()=>{var Gt=Object.create,ue=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,Wt=Object.getOwnPropertyNames,Jt=Object.getPrototypeOf,Xt=Object.prototype.hasOwnProperty,qt=(e,t)=>{for(var a in t)ue(e,a,{get:t[a],enumerable:!0})},Be=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Wt(t))!Xt.call(e,r)&&r!==a&&ue(e,r,{get:()=>t[r],enumerable:!(n=Kt(t,r))||n.enumerable});return e},Pe=(e,t,a)=>(a=e!=null?Gt(Jt(e)):{},Be(!e||!e.__esModule?ue(a,"default",{value:e,enumerable:!0}):a,e)),Yt=e=>Be(ue({},"__esModule",{value:!0}),e),He={};qt(He,{callPlayer:()=>pn,getConfig:()=>cn,getSDK:()=>ln,isBlobUrl:()=>hn,isMediaStream:()=>un,lazy:()=>Zt,omit:()=>dn,parseEndTime:()=>an,parseStartTime:()=>rn,queryString:()=>sn,randomString:()=>on,supportsWebKitPresentationMode:()=>fn});let Ge,Ke,We;ne=Yt(He),Ge=Pe(B),Ke=Pe(da),We=Pe(Mt);const Zt=e=>Ge.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),Qt=/[?&#](?:start|t)=([0-9hms]+)/,en=/[?&#]end=([0-9hms]+)/,Te=/(\d+)(h|m|s)/g,tn=/^\d+$/;function Je(e,t){if(e instanceof Array)return;const a=e.match(t);if(a){const n=a[1];if(n.match(Te))return nn(n);if(tn.test(n))return parseInt(n)}}function nn(e){let t=0,a=Te.exec(e);for(;a!==null;){const[,n,r]=a;r==="h"&&(t+=parseInt(n,10)*60*60),r==="m"&&(t+=parseInt(n,10)*60),r==="s"&&(t+=parseInt(n,10)),a=Te.exec(e)}return t}function rn(e){return Je(e,Qt)}function an(e){return Je(e,en)}function on(){return Math.random().toString(36).substr(2,5)}function sn(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function je(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const q={},ln=function(e,t,a=null,n=()=>!0,r=Ke.default){const i=je(t);return i&&n(i)?Promise.resolve(i):new Promise((s,u)=>{if(q[e]){q[e].push({resolve:s,reject:u});return}q[e]=[{resolve:s,reject:u}];const l=h=>{q[e].forEach(d=>d.resolve(h))};if(a){const h=window[a];window[a]=function(){h&&h(),l(je(t))}}r(e,h=>{h?(q[e].forEach(d=>d.reject(h)),q[e]=null):a||l(je(t))})})};function cn(e,t){return(0,We.default)(t.config,e.config)}function dn(e,...t){const a=[].concat(...t),n={},r=Object.keys(e);for(const i of r)a.indexOf(i)===-1&&(n[i]=e[i]);return n}function pn(e,...t){if(!this.player||!this.player[e]){let a=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(a+="The method was not available"):a+="The player was not available",console.warn(a,"font-weight: bold",""),null}return this.player[e](...t)}function un(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function hn(e){return/^blob:/.test(e)}function fn(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var ve=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,xn=Object.getOwnPropertyNames,gn=Object.prototype.hasOwnProperty,mn=(e,t)=>{for(var a in t)ve(e,a,{get:t[a],enumerable:!0})},bn=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of xn(t))!gn.call(e,r)&&r!==a&&ve(e,r,{get:()=>t[r],enumerable:!(n=yn(t,r))||n.enumerable});return e},wn=e=>bn(ve({},"__esModule",{value:!0}),e),Xe={};mn(Xe,{AUDIO_EXTENSIONS:()=>Se,DASH_EXTENSIONS:()=>ct,FLV_EXTENSIONS:()=>dt,HLS_EXTENSIONS:()=>Ee,MATCH_URL_DAILYMOTION:()=>ot,MATCH_URL_FACEBOOK:()=>Qe,MATCH_URL_FACEBOOK_WATCH:()=>et,MATCH_URL_KALTURA:()=>lt,MATCH_URL_MIXCLOUD:()=>it,MATCH_URL_MUX:()=>Ze,MATCH_URL_SOUNDCLOUD:()=>qe,MATCH_URL_STREAMABLE:()=>tt,MATCH_URL_TWITCH_CHANNEL:()=>at,MATCH_URL_TWITCH_VIDEO:()=>rt,MATCH_URL_VIDYARD:()=>st,MATCH_URL_VIMEO:()=>Ye,MATCH_URL_WISTIA:()=>nt,MATCH_URL_YOUTUBE:()=>_e,VIDEO_EXTENSIONS:()=>Oe,canPlay:()=>Pn});let ke;Ve=wn(Xe),ke=ne;const _e=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,qe=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,Ye=/vimeo\.com\/(?!progressive_redirect).+/,Ze=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,Qe=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,et=/^https?:\/\/fb\.watch\/.+$/,tt=/streamable\.com\/([a-z0-9]+)$/,nt=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,rt=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,at=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,ot=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,it=/mixcloud\.com\/([^/]+\/[^/]+)/,st=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,lt=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,Se=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,Oe=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,Ee=/\.(m3u8)($|\?)/i,ct=/\.(mpd)($|\?)/i,dt=/\.(flv)($|\?)/i,Ie=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&Ie(t)||Ie(t.src))return!0;return!1}return(0,ke.isMediaStream)(e)||(0,ke.isBlobUrl)(e)?!0:Se.test(e)||Oe.test(e)||Ee.test(e)||ct.test(e)||dt.test(e)},Pn={youtube:e=>e instanceof Array?e.every(t=>_e.test(t)):_e.test(e),soundcloud:e=>qe.test(e)&&!Se.test(e),vimeo:e=>Ye.test(e)&&!Oe.test(e)&&!Ee.test(e),mux:e=>Ze.test(e),facebook:e=>Qe.test(e)||et.test(e),streamable:e=>tt.test(e),wistia:e=>nt.test(e),twitch:e=>rt.test(e)||at.test(e),dailymotion:e=>ot.test(e),mixcloud:e=>it.test(e),vidyard:e=>st.test(e),kaltura:e=>lt.test(e),file:Ie};var Ae=Object.defineProperty,Tn=Object.getOwnPropertyDescriptor,jn=Object.getOwnPropertyNames,vn=Object.prototype.hasOwnProperty,kn=(e,t)=>{for(var a in t)Ae(e,a,{get:t[a],enumerable:!0})},_n=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of jn(t))!vn.call(e,r)&&r!==a&&Ae(e,r,{get:()=>t[r],enumerable:!(n=Tn(t,r))||n.enumerable});return e},Sn=e=>_n(Ae({},"__esModule",{value:!0}),e),pt={};kn(pt,{default:()=>En});var On=Sn(pt),L=ne,C=Ve,En=[{key:"youtube",name:"YouTube",canPlay:C.canPlay.youtube,lazyPlayer:(0,L.lazy)(()=>z(()=>import("./YouTube-fyJMfE-A.js").then(async e=>(await e.__tla,e)).then(e=>e.Y),__vite__mapDeps([0,1,2])))},{key:"soundcloud",name:"SoundCloud",canPlay:C.canPlay.soundcloud,lazyPlayer:(0,L.lazy)(()=>z(()=>import("./SoundCloud-B4CNahkI.js").then(async e=>(await e.__tla,e)).then(e=>e.S),__vite__mapDeps([3,1,2])))},{key:"vimeo",name:"Vimeo",canPlay:C.canPlay.vimeo,lazyPlayer:(0,L.lazy)(()=>z(()=>import("./Vimeo-CiaqDTAm.js").then(async e=>(await e.__tla,e)).then(e=>e.V),__vite__mapDeps([4,1,2])))},{key:"mux",name:"Mux",canPlay:C.canPlay.mux,lazyPlayer:(0,L.lazy)(()=>z(()=>import("./Mux-DBogSIqN.js").then(async e=>(await e.__tla,e)).then(e=>e.M),__vite__mapDeps([5,1,2])))},{key:"facebook",name:"Facebook",canPlay:C.canPlay.facebook,lazyPlayer:(0,L.lazy)(()=>z(()=>import("./Facebook-JkPVD2ZW.js").then(async e=>(await e.__tla,e)).then(e=>e.F),__vite__mapDeps([6,1,2])))},{key:"streamable",name:"Streamable",canPlay:C.canPlay.streamable,lazyPlayer:(0,L.lazy)(()=>z(()=>import("./Streamable-AFPd3z1N.js").then(async e=>(await e.__tla,e)).then(e=>e.S),__vite__mapDeps([7,1,2])))},{key:"wistia",name:"Wistia",canPlay:C.canPlay.wistia,lazyPlayer:(0,L.lazy)(()=>z(()=>import("./Wistia-CjJ9Vybw.js").then(async e=>(await e.__tla,e)).then(e=>e.W),__vite__mapDeps([8,1,2])))},{key:"twitch",name:"Twitch",canPlay:C.canPlay.twitch,lazyPlayer:(0,L.lazy)(()=>z(()=>import("./Twitch-DGxOK_yt.js").then(async e=>(await e.__tla,e)).then(e=>e.T),__vite__mapDeps([9,1,2])))},{key:"dailymotion",name:"DailyMotion",canPlay:C.canPlay.dailymotion,lazyPlayer:(0,L.lazy)(()=>z(()=>import("./DailyMotion-BPYg5Roh.js").then(async e=>(await e.__tla,e)).then(e=>e.D),__vite__mapDeps([10,1,2])))},{key:"mixcloud",name:"Mixcloud",canPlay:C.canPlay.mixcloud,lazyPlayer:(0,L.lazy)(()=>z(()=>import("./Mixcloud-CjqSz98q.js").then(async e=>(await e.__tla,e)).then(e=>e.M),__vite__mapDeps([11,1,2])))},{key:"vidyard",name:"Vidyard",canPlay:C.canPlay.vidyard,lazyPlayer:(0,L.lazy)(()=>z(()=>import("./Vidyard-CXXzswS4.js").then(async e=>(await e.__tla,e)).then(e=>e.V),__vite__mapDeps([12,1,2])))},{key:"kaltura",name:"Kaltura",canPlay:C.canPlay.kaltura,lazyPlayer:(0,L.lazy)(()=>z(()=>import("./Kaltura-ozPRomcL.js").then(async e=>(await e.__tla,e)).then(e=>e.K),__vite__mapDeps([13,1,2])))},{key:"file",name:"FilePlayer",canPlay:C.canPlay.file,canEnablePIP:e=>C.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,L.supportsWebKitPresentationMode)())&&!C.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,L.lazy)(()=>z(()=>import("./FilePlayer-CGz5oCDJ.js").then(async e=>(await e.__tla,e)).then(e=>e.F),__vite__mapDeps([14,1,2])))}],In=Object.create,he=Object.defineProperty,An=Object.getOwnPropertyDescriptor,Dn=Object.getOwnPropertyNames,Rn=Object.getPrototypeOf,Cn=Object.prototype.hasOwnProperty,Nn=(e,t)=>{for(var a in t)he(e,a,{get:t[a],enumerable:!0})},ut=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Dn(t))!Cn.call(e,r)&&r!==a&&he(e,r,{get:()=>t[r],enumerable:!(n=An(t,r))||n.enumerable});return e},Mn=(e,t,a)=>(a=e!=null?In(Rn(e)):{},ut(!e||!e.__esModule?he(a,"default",{value:e,enumerable:!0}):a,e)),Ln=e=>ut(he({},"__esModule",{value:!0}),e),ht={};Nn(ht,{defaultProps:()=>$n,propTypes:()=>Un});var ft=Ln(ht),zn=Mn(pa);const{string:I,bool:N,number:Y,array:De,oneOfType:re,shape:$,object:R,func:k,node:yt}=zn.default,Un={url:re([I,De,R]),playing:N,loop:N,controls:N,volume:Y,muted:N,playbackRate:Y,width:re([I,Y]),height:re([I,Y]),style:R,progressInterval:Y,playsinline:N,pip:N,stopOnUnmount:N,light:re([N,I,R]),playIcon:yt,previewTabIndex:Y,previewAriaLabel:I,fallback:yt,oEmbedUrl:I,wrapper:re([I,k,$({render:k.isRequired})]),config:$({soundcloud:$({options:R}),youtube:$({playerVars:R,embedOptions:R,onUnstarted:k}),facebook:$({appId:I,version:I,playerId:I,attributes:R}),dailymotion:$({params:R}),vimeo:$({playerOptions:R,title:I}),mux:$({attributes:R,version:I}),file:$({attributes:R,tracks:De,forceVideo:N,forceAudio:N,forceHLS:N,forceSafariHLS:N,forceDisableHls:N,forceDASH:N,forceFLV:N,hlsOptions:R,hlsVersion:I,dashVersion:I,flvVersion:I}),wistia:$({options:R,playerId:I,customControls:De}),mixcloud:$({options:R}),twitch:$({options:R,playerId:I}),vidyard:$({options:R})}),onReady:k,onStart:k,onPlay:k,onPause:k,onBuffer:k,onBufferEnd:k,onEnded:k,onError:k,onDuration:k,onSeek:k,onPlaybackRateChange:k,onPlaybackQualityChange:k,onProgress:k,onClickPreview:k,onEnablePIP:k,onDisablePIP:k},A=()=>{},$n={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:A},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:A,onStart:A,onPlay:A,onPause:A,onBuffer:A,onBufferEnd:A,onEnded:A,onError:A,onDuration:A,onSeek:A,onPlaybackRateChange:A,onPlaybackQualityChange:A,onProgress:A,onClickPreview:A,onEnablePIP:A,onDisablePIP:A};var Fn=Object.create,ae=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Bn=Object.getOwnPropertyNames,Hn=Object.getPrototypeOf,Gn=Object.prototype.hasOwnProperty,Kn=(e,t,a)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Wn=(e,t)=>{for(var a in t)ae(e,a,{get:t[a],enumerable:!0})},xt=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Bn(t))!Gn.call(e,r)&&r!==a&&ae(e,r,{get:()=>t[r],enumerable:!(n=Vn(t,r))||n.enumerable});return e},gt=(e,t,a)=>(a=e!=null?Fn(Hn(e)):{},xt(!e||!e.__esModule?ae(a,"default",{value:e,enumerable:!0}):a,e)),Jn=e=>xt(ae({},"__esModule",{value:!0}),e),P=(e,t,a)=>(Kn(e,typeof t!="symbol"?t+"":t,a),a),mt={};Wn(mt,{default:()=>fe});var Xn=Jn(mt),bt=gt(B),qn=gt(Lt),wt=ft,Yn=ne;const Zn=5e3;class fe extends bt.Component{constructor(){super(...arguments),P(this,"mounted",!1),P(this,"isReady",!1),P(this,"isPlaying",!1),P(this,"isLoading",!0),P(this,"loadOnReady",null),P(this,"startOnPlay",!0),P(this,"seekOnPlay",null),P(this,"onDurationCalled",!1),P(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),P(this,"getInternalPlayer",t=>this.player?this.player[t]:null),P(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,a=this.getSecondsLoaded(),n=this.getDuration();if(n){const r={playedSeconds:t,played:t/n};a!==null&&(r.loadedSeconds=a,r.loaded=a/n),(r.playedSeconds!==this.prevPlayed||r.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(r),this.prevPlayed=r.playedSeconds,this.prevLoaded=r.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),P(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:a,volume:n,muted:r}=this.props;t(),!r&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):a&&this.player.play(),this.handleDurationCheck()}),P(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:a,playbackRate:n}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&n!==1&&this.player.setPlaybackRate(n),t(),this.startOnPlay=!1),a(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),P(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),P(this,"handleEnded",()=>{const{activePlayer:t,loop:a,onEnded:n}=this.props;t.loopOnEnded&&a&&this.seekTo(0),a||(this.isPlaying=!1,n())}),P(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),P(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),P(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:a,playing:n,volume:r,muted:i,playbackRate:s,pip:u,loop:l,activePlayer:h,disableDeferredLoading:d}=this.props;if(!(0,qn.default)(t.url,a)){if(this.isLoading&&!h.forceLoad&&!d&&!(0,Yn.isMediaStream)(a)){console.warn(`ReactPlayer: the attempt to load ${a} is being deferred until the player has loaded`),this.loadOnReady=a;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(a,this.isReady)}!t.playing&&n&&!this.isPlaying&&this.player.play(),t.playing&&!n&&this.isPlaying&&this.player.pause(),!t.pip&&u&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!u&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==r&&r!==null&&this.player.setVolume(r),t.muted!==i&&(i?this.player.mute():(this.player.unmute(),r!==null&&setTimeout(()=>this.player.setVolume(r)))),t.playbackRate!==s&&this.player.setPlaybackRate&&this.player.setPlaybackRate(s),t.loop!==l&&this.player.setLoop&&this.player.setLoop(l)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,a,n){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},Zn));return}if(a?a==="fraction":t>0&&t<1){const r=this.player.getDuration();if(!r){console.warn("ReactPlayer: could not seek using fraction \u2013\xA0duration not yet available");return}this.player.seekTo(r*t,n);return}this.player.seekTo(t,n)}render(){const t=this.props.activePlayer;return t?bt.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}P(fe,"displayName","Player"),P(fe,"propTypes",wt.propTypes),P(fe,"defaultProps",wt.defaultProps);var Qn=Object.create,oe=Object.defineProperty,er=Object.getOwnPropertyDescriptor,tr=Object.getOwnPropertyNames,nr=Object.getPrototypeOf,rr=Object.prototype.hasOwnProperty,ar=(e,t,a)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,or=(e,t)=>{for(var a in t)oe(e,a,{get:t[a],enumerable:!0})},Pt=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of tr(t))!rr.call(e,r)&&r!==a&&oe(e,r,{get:()=>t[r],enumerable:!(n=er(t,r))||n.enumerable});return e},ie=(e,t,a)=>(a=e!=null?Qn(nr(e)):{},Pt(!e||!e.__esModule?oe(a,"default",{value:e,enumerable:!0}):a,e)),ir=e=>Pt(oe({},"__esModule",{value:!0}),e),T=(e,t,a)=>(ar(e,typeof t!="symbol"?t+"":t,a),a),Tt={};or(Tt,{createReactPlayer:()=>yr});var sr=ir(Tt),Z=ie(B),lr=ie(Mt),Re=ie(ua),jt=ie(Lt),se=ft,vt=ne,cr=ie(Xn);const dr=(0,vt.lazy)(()=>z(()=>import("./Preview-ChzRFV34.js").then(async e=>(await e.__tla,e)).then(e=>e.P),__vite__mapDeps([15,1,2]))),pr=typeof window<"u"&&window.document&&typeof document<"u",ur=typeof globalThis<"u"&&globalThis.window&&globalThis.window.document,hr=Object.keys(se.propTypes),fr=pr||ur?Z.Suspense:()=>null,le=[],yr=(e,t)=>{var a;return a=class extends Z.Component{constructor(){super(...arguments),T(this,"state",{showPreview:!!this.props.light}),T(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{this.player=n}}),T(this,"handleClickPreview",n=>{this.setState({showPreview:!1}),this.props.onClickPreview(n)}),T(this,"showPreview",()=>{this.setState({showPreview:!0})}),T(this,"getDuration",()=>this.player?this.player.getDuration():null),T(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),T(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),T(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null),T(this,"seekTo",(n,r,i)=>{if(!this.player)return null;this.player.seekTo(n,r,i)}),T(this,"handleReady",()=>{this.props.onReady(this)}),T(this,"getActivePlayer",(0,Re.default)(n=>{for(const r of[...le,...e])if(r.canPlay(n))return r;return t||null})),T(this,"getConfig",(0,Re.default)((n,r)=>{const{config:i}=this.props;return lr.default.all([se.defaultProps.config,se.defaultProps.config[r]||{},i,i[r]||{}])})),T(this,"getAttributes",(0,Re.default)(n=>(0,vt.omit)(this.props,hr))),T(this,"renderActivePlayer",n=>{if(!n)return null;const r=this.getActivePlayer(n);if(!r)return null;const i=this.getConfig(n,r.key);return Z.default.createElement(cr.default,{...this.props,key:r.key,ref:this.references.player,config:i,activePlayer:r.lazyPlayer||r,onReady:this.handleReady})})}shouldComponentUpdate(n,r){return!(0,jt.default)(this.props,n)||!(0,jt.default)(this.state,r)}componentDidUpdate(n){const{light:r}=this.props;!n.light&&r&&this.setState({showPreview:!0}),n.light&&!r&&this.setState({showPreview:!1})}renderPreview(n){if(!n)return null;const{light:r,playIcon:i,previewTabIndex:s,oEmbedUrl:u,previewAriaLabel:l}=this.props;return Z.default.createElement(dr,{url:n,light:r,playIcon:i,previewTabIndex:s,previewAriaLabel:l,oEmbedUrl:u,onClick:this.handleClickPreview})}render(){const{url:n,style:r,width:i,height:s,fallback:u,wrapper:l}=this.props,{showPreview:h}=this.state,d=this.getAttributes(n),g=typeof l=="string"?this.references.wrapper:void 0;return Z.default.createElement(l,{ref:g,style:{...r,width:i,height:s},...d},Z.default.createElement(fr,{fallback:u},h?this.renderPreview(n):this.renderActivePlayer(n)))}},T(a,"displayName","ReactPlayer"),T(a,"propTypes",se.propTypes),T(a,"defaultProps",se.defaultProps),T(a,"addCustomPlayer",n=>{le.push(n)}),T(a,"removeCustomPlayers",()=>{le.length=0}),T(a,"canPlay",n=>{for(const r of[...le,...e])if(r.canPlay(n))return!0;return!1}),T(a,"canEnablePIP",n=>{for(const r of[...le,...e])if(r.canEnablePIP&&r.canEnablePIP(n))return!0;return!1}),a};var xr=Object.create,ye=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,mr=Object.getOwnPropertyNames,br=Object.getPrototypeOf,wr=Object.prototype.hasOwnProperty,Pr=(e,t)=>{for(var a in t)ye(e,a,{get:t[a],enumerable:!0})},kt=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of mr(t))!wr.call(e,r)&&r!==a&&ye(e,r,{get:()=>t[r],enumerable:!(n=gr(t,r))||n.enumerable});return e},Tr=(e,t,a)=>(a=e!=null?xr(br(e)):{},kt(!e||!e.__esModule?ye(a,"default",{value:e,enumerable:!0}):a,e)),jr=e=>kt(ye({},"__esModule",{value:!0}),e),_t={};Pr(_t,{default:()=>Sr});var vr=jr(_t),Ce=Tr(On),kr=sr;const _r=Ce.default[Ce.default.length-1];var Sr=(0,kr.createReactPlayer)(Ce.default,_r);const St=ha(vr);function Ot({NFTObject:e,setControlAt:t,setTokenId:a}){const{account:n,provider:r,chainId:i}=K(),[s,u]=p.useState(null),[l,h]=p.useState(!0);p.useState(!1);const d=i===H.mainnetCoreContractChain;return p.useEffect(()=>{if(r&&n){let g=r.getSigner(n);const f=new S(O.NFTRewards,E.NFTRewards,g);u(f)}},[n,r]),p.useEffect(()=>{e&&h(!1)},[n,e]),o.jsx(M,{children:o.jsxs(Dr,{theme:n&&r&&n==e.owner?"#e20880":n&&r&&e.owner!=14367003520353756e32?"#eee":"#fff",children:[o.jsx(Rr,{children:o.jsxs(Cr,{children:[l&&o.jsx(we,{color:"#eee",width:"100%",height:"100%"}),!l&&o.jsx(St,{url:`https://ipfs.io/ipfs/${e.metadata}`,controls:!0,playing:!1,loop:!0}),!!n&&!!r&&e.owner!=14367003520353756e32&&o.jsxs(Or,{children:[o.jsx(Vt,{size:20,color:"#fff"}),o.jsx(Er,{children:"Gifted"})]}),!!n&&!!r&&e.claimable&&o.jsx(Ir,{children:o.jsx(Ar,{children:"2400 $PUSH"})})]})}),!!n&&!!r&&o.jsx(ce,{children:o.jsxs(Nr,{children:[l&&o.jsx(zr,{children:o.jsx(we,{})}),!!n&&!!r&&d&&n==e.owner&&!l&&o.jsx(Ur,{children:o.jsx(Lr,{onClick:()=>{a(e.id),t(2)},children:"Transfer"})})]})})]})},e.id)}const Et=c.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
`,Or=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 10px;
  right: 10px;
`,Er=c(Et)`
  background: #35c4f3;
`,Ir=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 10px;
  left: 10px;
`,Ar=c(Et)`
  background: #e20880;
`,Dr=c.div`
  background: ${e=>e.theme||"#fff"};
  max-width: 25%;
  min-width: 200px;
  flex: 1;
  margin: 5px;
  padding: 10px;
  border: 2px solid #fafafa;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`,Rr=c.div`
  padding-top: 100%;
  position: relative;
`,Cr=c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;c.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
`;const Nr=c.div`
  margin: 5px;
  flex-grow: 1;
  max-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Mr=c.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${e=>e.disabled&&X`
      background: #e20880;
      &:hover {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
      &:active {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
    `}
`,Lr=c.span`
  font-size: 12px;
  ${e=>e.hideit&&X`
      visibility: hidden;
    `};
`;c.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;const zr=c.div`
  border: 0;
  outline: 0;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 5px;
  flex: 1;
`,Ur=c(Mr)`
  background: #000;
`;c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,c.div`
  margin: 0px 10px;
`;const b={getNFTBalance:async(e,t)=>new Promise((a,n)=>{t&&t.balanceOf(e).then(r=>{a(r.toNumber())}).catch(r=>{console.error("!!!Error, getNFTBalance() --> %o",r),n(r)})}),getTotalSupply:async e=>new Promise((t,a)=>{e.totalSupply().then(n=>{t(n.toNumber())}).catch(n=>{console.error("!!!Error, getNFTBalance() --> %o",n),a(n)})}),getOwnerOfTokenId:async({tokenId:e,contract:t})=>new Promise((a,n)=>{t.ownerOf(e).then(r=>{a(r)}).catch(r=>{console.error("!!!Error, getOwnerOfTokenId() --> %o",r),n(r)})}),getTokenOfOwnerByIndex:async(e,t,a)=>new Promise((n,r)=>{a.tokenOfOwnerByIndex(e,t).then(i=>{n(i.toNumber())}).catch(i=>{console.error("!!!Error, getTokenOfOwnerByIndex() --> %o",i),r(i)})}),getTokenByIndex:async(e,t)=>new Promise((a,n)=>{t.tokenByIndex(e).then(r=>{a(r.toNumber())}).catch(r=>{console.error("!!!Error, getTokenByIndex() --> %o",r),n(r)})}),getTokenMetadata:async({tokenId:e,contract:t})=>new Promise((a,n)=>{t.tokenURI(e).then(r=>{a(r)}).catch(r=>{console.error("!!!Error, getTokenMetadata() --> %o",r),n(r)})}),getTokenMetadatasOfOwner:async(e,t,a)=>new Promise((n,r)=>{b.getNFTBalance(e,t).then(async i=>{let s=[],u=[];for(let l=0;l<i;l++)u.push(b.getTokenOfOwnerByIndex(e,l,t).then(async h=>{await b.getClaimable({tokenId:h,contract:a}).then(async d=>{console.debug("\u{1F680} ~ file: NFTHelper.js ~ line 102 ~ .then ~ claimable",d),await b.getTokenMetadata({tokenId:h,contract:t}).then(async g=>{h!=null&&g!=null&&d!=null&&s.push({id:h,metadata:g,claimable:d})})}).catch(d=>{console.error("!!!Error, getClaimable() --> %o",d),r(d)})}));await Promise.all(u),console.debug("\u{1F680} ~ file: NFTHelper.js ~ line 83 ~ .then ~ NFTDetails",s),n(s)}).catch(i=>{console.error("!!!Error, getTokenMetadatasOfOwner() --> %o",i),r(i)})}),getAllTokenDatas:async(e,t)=>new Promise((a,n)=>{b.getNFTBalance(e).then(async r=>{let i=[],s=[];for(let u=0;u<r;u++)s.push(b.getTokenByIndex(u,e).then(async l=>{await b.getClaimable({tokenId:l,contract:t}).then(async h=>{await b.getTokenMetadata({tokenId:l,contract:e}).then(async d=>{await b.getOwnerOfTokenId({tokenId:l,contract:e}).then(async g=>{l!=null&&d!=null&&h!=null&&g!=null&&i.push({id:l,metadata:d,owner:g,claimable:h})}).catch(g=>{console.error("!!!Error, getAllTokenDatas::getOwnerOfTokenId() --> %o",g),n(g)})}).catch(d=>{console.error("!!!Error, getAllTokenDatas::getTokenMetadata() --> %o",d),n(d)})}).catch(h=>{console.error("!!!Error, getAllTokenDatas::getClaimable() --> %o",h),n(h)})}).catch(l=>{console.error("!!!Error, getAllTokenDatas::getTokenByIndex() --> %o",l),n(l)}));await Promise.all(s),console.debug("\u{1F680} ~ file: NFTHelper.js ~ line 83 ~ .then ~ NFTDetails",i),a(i)}).catch(r=>{console.error("!!!Error, getAllTokenDatas() --> %o",r),n(r)})}),getTokenData:async(e,t,a)=>new Promise((n,r)=>{b.getTokenMetadata({tokenId:e,contract:t}).then(async i=>{await b.getOwnerOfTokenId({tokenId:e,contract:t}).then(async s=>{e!=null&&i!=null&&s!=null&&n({id:e,metadata:i,owner:s})})}).catch(i=>{console.error("!!!Error, getTokenData() --> %o",i),r(i)})}),transferNFT:async(e,t,a,n)=>new Promise((r,i)=>{n.safeTransferFrom(e,t,a).then(s=>{console.debug("transferNFT() --> %o",s),r(s)}).catch(s=>{console.error("!!!Error, transferNFT() --> %o",s),i(s)})}),getClaimable:async({tokenId:e,contract:t})=>(console.debug(e,t),new Promise((a,n)=>{t&&t.getClaimRewardStatus(e).then(r=>{a(r)}).catch(r=>{console.error("!!!Error, getClaimable() --> %o",r),n(r)})}))};function $r({controlAt:e,setControlAt:t,setTokenId:a}){const{account:n,chainId:r,provider:i}=K(),[s,u]=p.useState(null),[l,h]=p.useState(null),[d,g]=p.useState(null),[f,y]=p.useState([]),[m,F]=p.useState(!0),j=r===H.mainnetCoreContractChain?i:new me(H.mainnetCoreRPC);p.useEffect(()=>{if(j&&n){const w=new S(O.rockstar,E.rockstar,j);u(w);let x=j.getSigner(n);const v=new S(O.rockstar,E.rockstar,x);h(v);const _=new S(O.NFTRewards,E.NFTRewards,x);g(_)}},[n]),p.useEffect(()=>{s&&d&&J()},[n,s,l,d]);const J=async()=>{let w=await b.getTotalSupply(s);F(!1);for(let x=0;x<w;x++){let v=await b.getTokenByIndex(x,s),_=await b.getTokenData(v,s,d);await y(V=>[...V,_])}};return o.jsxs(G,{align:"center",children:[m&&o.jsx(de,{padding:"50px 20px 20px 20px",children:o.jsx(Q,{type:ee.SEAMLESS})}),!m&&f.length!=0&&o.jsx(ce,{id:"scrollstyle-secondary",margin:"20px 0 0 0",children:Object.keys(f).map(w=>{if(f)return o.jsx(o.Fragment,{children:o.jsx(Ot,{NFTObject:f[w],nftReadProvider:s,nftWriteProvider:l,controlAt:e,setControlAt:t,setTokenId:a},f[w].id)})})})]})}c.div`
  padding: 20px;
`;function It({NFTObject:e,setControlAt:t,setTokenId:a}){const{account:n,provider:r,chainId:i}=K(),[s,u]=p.useState(null),[l,h]=p.useState(!0);p.useState(!1);const d=i===H.mainnetCoreContractChain;p.useEffect(()=>{if(r&&n){let f=r.getSigner(n);const y=new S(O.NFTRewardsV2,E.NFTRewardsV2,f);u(y)}},[n,r]),p.useEffect(()=>{e&&h(!1)},[n,e]);let g=e.nftInfo.animation_url.replace("https://epns.mypinata.cloud/ipfs/","https://ipfs.io/ipfs/");return o.jsx(M,{children:o.jsxs(Gr,{theme:n&&r&&n==e.owner?"#e20880":n&&r&&e.owner!=1178191227273143e33?"#eee":"#fff",children:[o.jsx(Kr,{children:o.jsxs(Wr,{children:[l&&o.jsx(we,{color:"#eee",width:"100%",height:"100%"}),!l&&o.jsx(St,{url:`${g}`,controls:!0,playing:!1,loop:!0}),!!n&&!!r&&e.owner!=1178191227273143e33&&o.jsxs(Fr,{children:[o.jsx(Vt,{size:20,color:"#fff"}),o.jsx(Vr,{children:"Gifted"})]}),!!n&&!!r&&e.claimable&&o.jsx(Br,{children:o.jsx(Hr,{children:"900 $PUSH"})})]})}),!!n&&!!r&&o.jsx(ce,{children:o.jsxs(Jr,{children:[l&&o.jsx(Yr,{children:o.jsx(we,{})}),!!n&&!!r&&d&&n==e.owner&&!l&&o.jsx(Zr,{children:o.jsx(qr,{onClick:()=>{a(e.id),t(3)},children:"Transfer"})})]})})]})},e.id)}const At=c.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
`,Fr=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 10px;
  right: 10px;
`,Vr=c(At)`
  background: #35c4f3;
`,Br=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 10px;
  left: 10px;
`,Hr=c(At)`
  background: #e20880;
`,Gr=c.div`
  background: ${e=>e.theme||"#fff"};
  max-width: 25%;
  min-width: 200px;
  flex: 1;
  margin: 5px;
  padding: 10px;
  border: 2px solid #fafafa;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`,Kr=c.div`
  padding-top: 100%;
  position: relative;
`,Wr=c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Jr=c.div`
  margin: 5px;
  flex-grow: 1;
  max-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Xr=c.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${e=>e.disabled&&X`
      background: #e20880;
      &:hover {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
      &:active {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
    `}
`,qr=c.span`
  font-size: 12px;
  ${e=>e.hideit&&X`
      visibility: hidden;
    `};
`;c.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;const Yr=c.div`
  border: 0;
  outline: 0;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 5px;
  flex: 1;
`,Zr=c(Xr)`
  background: #000;
`;c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,c.div`
  margin: 0px 10px;
`;function Qr({controlAt:e,setControlAt:t,setTokenId:a}){const{account:n,chainId:r,provider:i}=K(),[s,u]=p.useState(null),[l,h]=p.useState(null),[d,g]=p.useState(null),[f,y]=p.useState([]),[m,F]=p.useState(!0),j=r===H.mainnetCoreContractChain?i:new me(H.mainnetCoreRPC);p.useEffect(()=>{if(j&&n){const w=new S(O.rockstarV2,E.rockstarV2,j);u(w);let x=j.getSigner(n);const v=new S(O.rockstarV2,E.rockstarV2,x);h(v);const _=new S(O.NFTRewardsV2,E.NFTRewardsV2,x);g(_)}return()=>{u(null),h(null),g(null)}},[n]),p.useEffect(()=>{s&&J()},[n,s]);const J=async()=>{let w=await b.getTotalSupply(s);F(!1);for(let x=0;x<w;x++){let v=await b.getTokenByIndex(x,s),_=await b.getTokenData(v,s,d),V=_.metadata.replace("ipfs://","https://ipfs.io/ipfs/"),Ue=await(await fetch(`${V}`)).json();_.nftInfo=Ue,await y($e=>[...$e,_])}};return o.jsxs(G,{align:"center",children:[m&&o.jsx(de,{padding:"50px 20px 20px 20px",children:o.jsx(Q,{type:ee.SEAMLESS})}),!m&&f.length!=0&&o.jsx(ce,{id:"scrollstyle-secondary",margin:"20px 0 0 0",children:Object.keys(f).map(w=>{var x;if(f)return o.jsx(It,{NFTObject:f[w],nftReadProvider:s,nftWriteProvider:l,controlAt:e,setControlAt:t,setTokenId:a},(x=f[w])==null?void 0:x.id)})})]})}c.div`
  padding: 20px;
`;function ea({controlAt:e,setControlAt:t,setTokenId:a}){const{account:n,provider:r,chainId:i}=K(),[s,u]=p.useState(null),[l,h]=p.useState(null),[d,g]=p.useState(null),[f,y]=p.useState([]),[m,F]=p.useState(!0),j=i===H.mainnetCoreContractChain?r:new me(H.mainnetCoreRPC);p.useEffect(()=>{if(j&&n){const w=new S(O.rockstar,E.rockstar,j);u(w);let x=j.getSigner(n);const v=new S(O.rockstar,E.rockstar,x);h(v);const _=new S(O.NFTRewards,E.NFTRewards,x);g(_)}},[n]),p.useEffect(()=>{s&&d&&J()},[n,s,l,d]);const J=async()=>{let w=await b.getNFTBalance(n,s);F(!1);for(let x=0;x<w;x++){let v=await b.getTokenOfOwnerByIndex(n,x,s),_=await b.getTokenData(v,s,d);await y(V=>[...V,_])}};return o.jsxs(de,{margin:"32px 0 0 0",children:[m&&o.jsx(Dt,{children:o.jsx(Q,{type:ee.SEAMLESS,spinnerSize:40})}),!m&&f.length==0&&o.jsx(Dt,{children:o.jsx(Bt,{title:"No ROCKSTAR tokens are available in your account"})}),!m&&f.length!=0&&o.jsx(ta,{id:"scrollstyle-secondary",margin:"20px 0 0 0",children:Object.keys(f).map(w=>{if(f[w].id)return o.jsx(Ot,{NFTObject:f[w],nftReadProvider:s,nftWriteProvider:l,controlAt:e,setControlAt:t,setTokenId:a},f[w].id)})})]})}const Dt=c.div`
  padding: 20px;
`,ta=c.div`
  display: block;
  align-self: stretch;
  padding: 10px 20px;
`;function na({controlAt:e,setControlAt:t,setTokenId:a}){const{account:n,provider:r,chainId:i}=K(),[s,u]=B.useState(null),[l,h]=B.useState(null),[d,g]=B.useState(null),[f,y]=B.useState([]),[m,F]=B.useState(!0),j=i===H.mainnetCoreContractChain?r:new me(H.mainnetCoreRPC);B.useEffect(()=>{if(j&&n){const x=new S(O.rockstarV2,E.rockstarV2,j);u(x);let v=j.getSigner(n);const _=new S(O.rockstarV2,E.rockstarV2,v);h(_);const V=new S(O.NFTRewardsV2,E.NFTRewardsV2,v);g(V)}},[n]),B.useEffect(()=>{s&&J()},[n,s]);const J=async()=>{let x=await b.getNFTBalance(n,s);F(!1);for(let v=0;v<x;v++){let _=await b.getTokenOfOwnerByIndex(n,v,s);if(_<1||_>100)return;let V=await b.getTokenData(_,s,d),Ue=await w(V.metadata);V.nftInfo=Ue,y($e=>[...$e,V])}},w=async x=>{let v=x.replace("ipfs://","https://ipfs.io/ipfs/");return await(await fetch(`${v}`)).json()};return o.jsxs(de,{margin:"32px 0 0 0",children:[m&&o.jsx(Rt,{children:o.jsx(Q,{type:ee.SEAMLESS,spinnerSize:40})}),!m&&f.length==0&&o.jsx(Rt,{children:o.jsx(Bt,{title:"No ROCKSTAR NFTs are available in your account"})}),!m&&f.length!=0&&o.jsx(ce,{margin:"20px 0 0 0",children:Object.keys(f).map(x=>{if(f)return o.jsx(It,{NFTObject:f[x],nftReadProvider:s,nftWriteProvider:l,controlAt:e,setControlAt:t,setTokenId:a},f[x].id)})})]})}const Rt=c.div`
  padding: 20px;
`;function ra({tokenId:e}){const{account:t,provider:a}=K(),[n,r]=p.useState(null),[i,s]=p.useState(""),[u,l]=p.useState(0),[h,d]=p.useState("");p.useEffect(()=>{if(a&&t){let y=a.getSigner(t);const m=new S(O.rockstar,E.rockstar,y);r(m)}},[t]);const g=async y=>{if(n){if(console.info("\u{1F680} ~ file: TransferNFT.js ~ line 64 ~ handleTransferNFT ~ nftWriteProvider",n),y.preventDefault(),f(i))return l(3),d("Recipient address field is empty! Please retry!"),!1;l(1),d("Transferring NFT...");let F=a.getSigner(t);new S(O.rockstar,E.rockstar,F);var m=n["safeTransferFrom(address,address,uint256)"](t,i,e);const j=await m;console.debug(j),console.info("waiting for tx to finish"),d("Waiting for Transfer tx to finish..."),await a.waitForTransaction(j.hash),d("Transfer successfull! "),l(3)}},f=y=>y.trim().length==0;return o.jsxs(o.Fragment,{children:[o.jsx(G,{children:o.jsx(W,{padding:"10px 20px 20px",children:o.jsxs(M,{align:"flex-start",children:[o.jsx(pe,{textTransform:"uppercase",spacing:"normal",children:o.jsx(D,{weight:"200",children:"Transfer Your NFT!"})}),o.jsx(pe,{textTransform:"uppercase",spacing:"normal",children:o.jsxs(D,{bg:"#674c9f",color:"#fff",weight:"600",padding:"0px 8px",children:["Token #",e]})})]})})}),o.jsx(G,{children:o.jsx(W,{padding:"50px 0px 0px 0px",children:o.jsxs(zt,{flex:"1",direction:"column",margin:"0px",justify:"center",size:"1.1rem",onSubmit:g,children:[o.jsxs(M,{margin:"-10px 20px 15px 20px",flex:"1",self:"stretch",align:"stretch",children:[o.jsx(be,{required:!0,placeholder:"Recipient Address",maxlength:"40",padding:"12px",borderBottom:"1px solid #000",weight:"400",size:"1.2em",bg:"#fff",value:i,onChange:y=>{s(y.target.value)}}),i.trim().length==0&&o.jsx(D,{padding:"4px 10px",right:"0px",top:"0px",pos:"absolute",color:"#fff",bg:"#000",size:"0.7rem",z:"1",children:"Recipient Address"})]}),o.jsx(M,{margin:"15px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:o.jsxs(Fe,{bg:"#674c9f",color:"#fff",flex:"1",radius:"0px",padding:"20px 10px",disabled:u==1,children:[u==1&&o.jsx(Q,{type:ee.SEAMLESS,spinnerSize:24,spinnerColor:"#fff"}),u!=1&&o.jsx(be,{cursor:"hand",textTransform:"uppercase",color:"#fff",weight:"400",size:"0.8em",spacing:"normal",type:"submit",value:"Transfer"})]})})]})})}),(u==1||u==3)&&o.jsx(G,{children:o.jsx(W,{padding:"0px 0px 0px 0px",children:o.jsx(M,{color:"#fff",bg:u==1?"#e1087f":"#000",padding:"10px 15px",margin:"15px 0px",children:o.jsx(D,{color:"#fff",textTransform:"uppercase",spacing:"normal",weight:"400",size:"1em",children:h})})})})]})}function aa({tokenId:e}){const{account:t,provider:a}=K(),[n,r]=p.useState(null),[i,s]=p.useState(""),[u,l]=p.useState(0),[h,d]=p.useState("");p.useEffect(()=>{if(a&&t){let y=a.getSigner(t);const m=new S(O.rockstarV2,E.rockstarV2,y);r(m)}},[t]);const g=async y=>{if(n){if(y.preventDefault(),f(i))return l(3),d("Recipient address field is empty! Please retry!"),!1;l(1),d("Transferring NFT...");let F=a.getSigner(t);new S(O.rockstarV2,E.rockstarV2,F);var m=n["safeTransferFrom(address,address,uint256)"](t,i,e);const j=await m;console.debug(j),console.info("waiting for tx to finish"),d("Waiting for Transfer tx to finish..."),await a.waitForTransaction(j.hash),d("Transfer successfull! "),l(3)}},f=y=>y.trim().length==0;return o.jsxs(o.Fragment,{children:[o.jsx(G,{children:o.jsx(W,{padding:"10px 20px 20px",children:o.jsxs(M,{align:"flex-start",children:[o.jsx(pe,{textTransform:"uppercase",spacing:"normal",children:o.jsx(D,{weight:"200",children:"Transfer Your NFT!"})}),o.jsx(pe,{textTransform:"uppercase",spacing:"normal",children:o.jsxs(D,{bg:"#674c9f",color:"#fff",weight:"600",padding:"0px 8px",children:["Token #",e]})})]})})}),o.jsx(G,{children:o.jsx(W,{padding:"50px 0px 0px 0px",children:o.jsxs(zt,{flex:"1",direction:"column",margin:"0px",justify:"center",size:"1.1rem",onSubmit:g,children:[o.jsxs(M,{margin:"-10px 20px 15px 20px",flex:"1",self:"stretch",align:"stretch",children:[o.jsx(be,{required:!0,placeholder:"Recipient Address",maxlength:"40",padding:"12px",borderBottom:"1px solid #000",weight:"400",size:"1.2em",bg:"#fff",value:i,onChange:y=>{s(y.target.value)}}),i.trim().length==0&&o.jsx(D,{padding:"4px 10px",right:"0px",top:"0px",pos:"absolute",color:"#fff",bg:"#000",size:"0.7rem",z:"1",children:"Recipient Address"})]}),o.jsx(M,{margin:"15px 0px 0px 0px",flex:"1",self:"stretch",align:"stretch",children:o.jsxs(Fe,{bg:"#674c9f",color:"#fff",flex:"1",radius:"0px",padding:"20px 10px",disabled:u==1,children:[u==1&&o.jsx(Q,{type:ee.SEAMLESS,spinnerSize:24,spinnerColor:"#FFF"}),u!=1&&o.jsx(be,{cursor:"hand",textTransform:"uppercase",color:"#fff",weight:"400",size:"0.8em",spacing:"normal",type:"submit",value:"Transfer"})]})})]})})}),(u==1||u==3)&&o.jsx(G,{children:o.jsx(W,{padding:"0px 0px 0px 0px",children:o.jsx(M,{color:"#fff",bg:u==1?"#e1087f":"#000",padding:"10px 15px",margin:"15px 0px",children:o.jsx(D,{color:"#fff",textTransform:"uppercase",spacing:"normal",weight:"400",size:"1em",children:h})})})})]})}function oa(){fa.pageview("/rockstars");const{account:e}=K(),t=ya(),[a,n]=p.useState(null),[r,i]=p.useState(1),[s,u]=p.useState(2),[l,h]=p.useState([]),d=y=>{let m=[...l];m[y]=!m[y],h(m)};p.useEffect(()=>{g(2)},[e]);const g=y=>{u(y)},f=y=>{y.target.checked?i(0):i(1)};return o.jsx(ia,{children:o.jsxs(G,{children:[o.jsxs(W,{padding:"20px 0px",children:[o.jsxs(de,{alignSelf:"stretch",justifyContent:"flex-start",margin:"0 0 40px 0",children:[o.jsx(pe,{children:o.jsx(D,{weight:"400",size:"32px",color:t.color,children:"Rockstar of Push (EPNS)"})}),o.jsx(D,{color:t.default.secondaryColor,weight:"400",size:"16px",textTransform:"none",textAlign:"center",spacing:"normal",margin:"0px 0px",children:"Thank you community for all your support. Over the next year, we are excited to continue returning our gratitude!"})]}),o.jsx(M,{align:"stretch",justify:"flex-start",margin:"0px 20px 0px 20px",children:o.jsxs(M,{align:"stretch",margin:"0px 0px 20px 0px",children:[o.jsxs(Le,{children:[o.jsxs(xe,{onClick:()=>{d(1)},hover:"#e20880",children:[o.jsx(D,{color:t.color,children:"Does $ROCKSTAR of Push (EPNS) Vol 2 NFTs carry something along with NFTs?"}),o.jsx($t,{size:20,color:"#ddd"})]}),l[1]&&o.jsx(ge,{children:o.jsxs(D,{children:["Yes, Each ",o.jsx(Ft,{children:"$ROCKSTAR_V2"})," contains ",o.jsx(Ft,{children:"900 $PUSH"})," tokens that can be claimed instantly!!!"," ",o.jsx(ze,{href:"https://medium.com/ethereum-push-notification-service/push-token-economics-d7f566c29b1a",target:"_blank",title:"Read more about $PUSH tokeneconomics",children:"Learn about $PUSH Token Economics."})]})})]}),o.jsxs(Le,{children:[o.jsxs(xe,{onClick:()=>{d(2)},hover:"#e20880",children:[o.jsx(D,{color:t.color,children:"How to get $ROCKSTAR of Push (EPNS)?"}),o.jsx($t,{size:20,color:"#ddd"})]}),l[2]&&o.jsx(ge,{children:o.jsxs(D,{children:["We\u2019ll be distributing one NFT a week (every Monday) to one community member who does something to help us push the envelope forward."," ",o.jsx(ze,{href:"https://medium.com/push-protocol/announcing-volume-2-of-epns-rockstars-64f0b3246604",target:"_blank",title:"Read how to get $ROCKSTAR of Push (EPNS)",children:"Here are some ways by which you can get one!"})]})})]})]})})]}),o.jsx(W,{padding:"20px 0px",bg:"#eee",children:o.jsxs(M,{align:"flex-start",margin:"0px 20px 0px 20px",children:[o.jsxs(sa,{children:[o.jsx(Ne,{className:s===2?"v2":"v1",onClick:()=>{g(2)},children:o.jsx(Me,{children:"ROCKSTAR V2"})}),o.jsx(Ne,{className:s===1?"v2":"v1",onClick:()=>{g(1)},children:o.jsx(Me,{children:"ROCKSTAR V1"})}),o.jsxs(la,{children:[o.jsx("input",{type:"checkbox",className:"checkbox",onChange:f}),"Show mine"]})]}),r===0&&s===1&&o.jsx(ea,{controlAt:r,setControlAt:i,setTokenId:n}),r===0&&s===2&&o.jsx(na,{controlAt:r,setControlAt:i,setTokenId:n}),r===1&&s===1&&o.jsx($r,{controlAt:r,setControlAt:i,setTokenId:n}),r===1&&s===2&&o.jsx(Qr,{controlAt:r,setControlAt:i,setTokenId:n}),r===2&&a&&o.jsx(ra,{tokenId:a}),r===3&&a&&o.jsx(aa,{tokenId:a})]})})]})})}const ia=c(G)`
  align-items: center;
  align-self: center;
  background: ${e=>e.theme.default.bg};
  border-radius: ${U.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${U.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${te.MINI_MODULES.DESKTOP.RIGHT} - ${te.MINI_MODULES.DESKTOP.LEFT} -
      ${U.ADJUSTMENTS.PADDING.BIG} - ${U.ADJUSTMENTS.PADDING.BIG}
  );
  position: relative;
  margin: ${U.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  padding: ${U.ADJUSTMENTS.PADDING.BIG};

  @media ${Ut.laptop} {
    margin: ${U.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${U.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${te.MINI_MODULES.TABLET.RIGHT} - ${te.MINI_MODULES.TABLET.LEFT} -
        ${U.ADJUSTMENTS.PADDING.DEFAULT} - ${U.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${Ut.mobileM} {
    margin: ${U.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${U.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${te.MINI_MODULES.MOBILE.RIGHT} - ${te.MINI_MODULES.MOBILE.LEFT} -
        ${U.ADJUSTMENTS.PADDING.DEFAULT} - ${U.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`,sa=c.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`,la=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  background-color: #adb5bd;
  height: 20px;
  padding: 0px 5px;
  color: white;
  input.checkbox {
    width: 11px;
    height: 11px;
    margin-right: 5px;
    border: 1px solid transparent;
    // -webkit-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-color: white;
    &:checked {
      background-color: #e10780;
      border: 1px solid transparent;
    }
  }
`;c.div`
  padding: 20px;
`,c.div`
  display: block;
  align-self: stretch;
  padding: 10px 20px;
  overflow-y: scroll;
  background: #fafafa;
`;const ca=c.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: left;
  // align-items: center;
  justify-content: flex-end;
  // justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${e=>e.disabled&&X`
      &:hover {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
      &:active {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
    `}
`;c.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: left;
  // align-items: center;
  justify-content: flex-end;
  // justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  // border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${e=>e.disabled&&X`
      &:hover {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
      &:active {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
    `}
`;let Ne,Me,xe,ge,Le,ze,Ct,Nt;Ne=c(ca)`
  &.v1 {
    background-color: #adb5bd;
  }
  &.v2 {
    background-color: #35c5f3;
  }
  border-radius: 0px;
  font-size: 1rem;
  letter-spacing: normal;
`,Me=c.span`
  ${e=>e.hideit&&X`
      visibility: hidden;
    `};
`,xe=c(Fe)`
  align-items: stretch;
  align-self: stretch;
`,ge=c(M)`
  align-items: stretch;
  align-self: stretch;
`,Le=c(M)`
  align-items: stretch;
  align-self: stretch;
  flex: auto;
  margin: 15px 0px;
  border: 1px solid ${e=>e.theme.default.border};
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.2);
  overflow: hidden;
  & ${xe} {
    background: ${e=>e.theme.qnaBg};
    justify-content: flex-start;
    text-transform: uppercase;
    & ${D} {
      font-weight: 400;
      letter-spacing: normal;
      margin-left: 10px;
      flex: 1;
    }
    &:hover {
      & ${D} {
        color: #fff;
      }
    }
  }
  & ${ge} {
    border: 1px solid ${e=>e.theme.default.border};
    border-top: 1px solid ${e=>e.theme.default.border};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    margin: -1px;
    margin-top: 0px;
    align-items: flex-start;
    background: ${e=>e.theme.qnaBg};
    & ${D} {
      line-height: 1.5em;
      margin: 10px;
      color: ${e=>e.theme.default.color};
      font-size: 1.05em;
    }
  }
`,ze=c(xa)`
  color: #e20880;
  font-weight: 500;
`,Ct=()=>o.jsx(Nt,{children:o.jsx(oa,{})}),Nt=c(ga)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`,Ht=Object.freeze(Object.defineProperty({__proto__:null,default:Ct},Symbol.toStringTag,{value:"Module"}))});export{Ht as N,Ta as __tla,Ve as p,ne as u};
