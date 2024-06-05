import{dK as rl,dL as ol,dM as al,b0 as h,cB as sl,bg as N,aV as d,aY as ke,a_ as he,b4 as o,b5 as te,bL as J,bE as Yt,ca as Zt,cW as fe,bf as cl,aZ as _,b7 as L,bR as Te,cX as ne,be as Yi,dN as ll,dO as dl,cj as ct,dP as P,bP as Re,a$ as Xt,bF as z,bK as Qt,c4 as pl,bJ as Zi,dQ as ul,ba as ie,bb as re,dR as hl,ds as fl,ci as en,dB as gl,dS as ml,bU as lt,bV as ze,bZ as He,dT as Xi,b$ as Qi,cc as er,dU as dt,dV as xl,b3 as bl,dW as wl,co as pt,dX as tn,bG as ut,dY as nn,ch as yl,di as vl,cl as rn,dZ as tr,dq as Sl,d_ as jl,d$ as nr,e0 as ir,e1 as rr,e2 as or,e3 as ar,e4 as El,e5 as Cl,e6 as kl,e7 as on,e8 as Tl,aW as I,aX as _e,bi as _l,__tla as Il}from"./index-D4u_zvI-.js";import{D as sr,__tla as Dl}from"./DisplayNotice-CH15UIXZ.js";import{S as q,__tla as Al}from"./Skeleton-DL9XsUFN.js";import{c as Bl,__tla as Ol}from"./cloneDeep-CVJfgBDj.js";import{G as cr,__tla as $l}from"./index.esm-CxsKBSOD.js";import{S as Ml,N as Nl,__tla as Ll}from"./RedCircle-Lt1zOjP-.js";import{D as Pl,n as Fl,g as Rl,u as zl,M as Hl,__tla as Wl}from"./ManageNotifSettingDropdown-QEknQZG8.js";import{I as Vl,R as Ul,__tla as Kl}from"./RangeSlider-BixHGvWl.js";let lr,an,V,Gl=Promise.all([(()=>{try{return Il}catch{}})(),(()=>{try{return Dl}catch{}})(),(()=>{try{return Al}catch{}})(),(()=>{try{return Ol}catch{}})(),(()=>{try{return $l}catch{}})(),(()=>{try{return Ll}catch{}})(),(()=>{try{return Wl}catch{}})(),(()=>{try{return Kl}catch{}})()]).then(async()=>{const dr=async({token:e,account:t})=>{const n=al.registerDeviceToken();try{const i={wallet:rl(t.toLowerCase()),device_token:e,platform:"web"},r=await ol(n,i)}catch(i){throw console.error(i),new Error(i.message)}},pr=e=>h.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("path",{d:"M27 16H5",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),h.createElement("path",{d:"M14 7L5 16L14 25",stroke:"#657795",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));var sn={};const cn=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},ur=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const a=e[n++];t[i++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=e[n++],s=e[n++],p=e[n++],u=((r&7)<<18|(a&63)<<12|(s&63)<<6|p&63)-65536;t[i++]=String.fromCharCode(55296+(u>>10)),t[i++]=String.fromCharCode(56320+(u&1023))}else{const a=e[n++],s=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(a&63)<<6|s&63)}}return t.join("")},ln={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const a=e[r],s=r+1<e.length,p=s?e[r+1]:0,u=r+2<e.length,c=u?e[r+2]:0,m=a>>2,x=(a&3)<<4|p>>4;let v=(p&15)<<2|c>>6,j=c&63;u||(j=64,s||(v=64)),i.push(n[m],n[x],n[v],n[j])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(cn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ur(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const a=n[e.charAt(r++)],s=r<e.length?n[e.charAt(r)]:0;++r;const p=r<e.length?n[e.charAt(r)]:64;++r;const u=r<e.length?n[e.charAt(r)]:64;if(++r,a==null||s==null||p==null||u==null)throw new hr;const c=a<<2|s>>4;if(i.push(c),p!==64){const m=s<<4&240|p>>2;if(i.push(m),u!==64){const x=p<<6&192|u;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class hr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fr=function(e){const t=cn(e);return ln.encodeByteArray(t,!0)},dn=function(e){return fr(e).replace(/\./g,"")},gr=function(e){try{return ln.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function mr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof globalThis<"u")return globalThis;throw new Error("Unable to locate global object.")}const xr=()=>mr().__FIREBASE_DEFAULTS__,br=()=>{if(typeof sl>"u"||typeof sn>"u")return;const e=sn.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},wr=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&gr(e[1]);return t&&JSON.parse(t)},yr=()=>{try{return xr()||br()||wr()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},pn=()=>{var e;return(e=yr())===null||e===void 0?void 0:e.config};class vr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}function un(){try{return typeof indexedDB=="object"}catch{return!1}}function hn(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var a;t(((a=r.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}function Sr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}const jr="FirebaseError";class ge extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=jr,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,We.prototype.create)}}class We{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,a=this.errors[t],s=a?Er(a,i):"Error",p=`${this.serviceName}: ${s} (${r}).`;return new ge(r,p,i)}}function Er(e,t){return e.replace(Cr,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const Cr=/\{\$([^}]+)}/g;function ht(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const a=e[r],s=t[r];if(fn(a)&&fn(s)){if(!ht(a,s))return!1}else if(a!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function fn(e){return e!==null&&typeof e=="object"}function gn(e){return e&&e._delegate?e._delegate:e}class Y{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}const oe="[DEFAULT]";class kr{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new vr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_r(t))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:r});i.resolve(a)}catch{}}}}clearInstance(t=oe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=oe){return this.instances.has(t)}getOptions(t=oe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[a,s]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);i===p&&s.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),a=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;a.add(t),this.onInitCallbacks.set(r,a);const s=this.instances.get(r);return s&&t(s,r),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Tr(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=oe){return this.component?this.component.multipleInstances?t:oe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tr(e){return e===oe?void 0:e}function _r(e){return e.instantiationMode==="EAGER"}class Ir{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new kr(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}var y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(y||(y={}));const Dr={debug:y.DEBUG,verbose:y.VERBOSE,info:y.INFO,warn:y.WARN,error:y.ERROR,silent:y.SILENT},Ar=y.INFO,Br={[y.DEBUG]:"log",[y.VERBOSE]:"log",[y.INFO]:"info",[y.WARN]:"warn",[y.ERROR]:"error"},Or=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=Br[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $r{constructor(t){this.name=t,this._logLevel=Ar,this._logHandler=Or,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,y.DEBUG,...t),this._logHandler(this,y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,y.VERBOSE,...t),this._logHandler(this,y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,y.INFO,...t),this._logHandler(this,y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,y.WARN,...t),this._logHandler(this,y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,y.ERROR,...t),this._logHandler(this,y.ERROR,...t)}}const Mr=(e,t)=>t.some(n=>e instanceof n);let mn,xn;function Nr(){return mn||(mn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lr(){return xn||(xn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bn=new WeakMap,ft=new WeakMap,wn=new WeakMap,gt=new WeakMap,mt=new WeakMap;function Pr(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{n(U(e.result)),r()},s=()=>{i(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&bn.set(n,e)}).catch(()=>{}),mt.set(t,e),t}function Fr(e){if(ft.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{n(),r()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});ft.set(e,t)}let xt={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ft.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wn.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return U(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Rr(e){xt=e(xt)}function zr(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(bt(this),t,...n);return wn.set(i,t.sort?t.sort():[t]),U(i)}:Lr().includes(e)?function(...t){return e.apply(bt(this),t),U(bn.get(this))}:function(...t){return U(e.apply(bt(this),t))}}function Hr(e){return typeof e=="function"?zr(e):(e instanceof IDBTransaction&&Fr(e),Mr(e,Nr())?new Proxy(e,xt):e)}function U(e){if(e instanceof IDBRequest)return Pr(e);if(gt.has(e))return gt.get(e);const t=Hr(e);return t!==e&&(gt.set(e,t),mt.set(t,e)),t}const bt=e=>mt.get(e);function Ve(e,t,{blocked:n,upgrade:i,blocking:r,terminated:a}={}){const s=indexedDB.open(e,t),p=U(s);return i&&s.addEventListener("upgradeneeded",u=>{i(U(s.result),u.oldVersion,u.newVersion,U(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),p.then(u=>{a&&u.addEventListener("close",()=>a()),r&&u.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),p}function wt(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",i=>t(i.oldVersion,i)),U(n).then(()=>{})}const Wr=["get","getKey","getAll","getAllKeys","count"],Vr=["put","add","delete","clear"],yt=new Map;function yn(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(yt.get(t))return yt.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Vr.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Wr.includes(n)))return;const a=async function(s,...p){const u=this.transaction(s,r?"readwrite":"readonly");let c=u.store;return i&&(c=c.index(p.shift())),(await Promise.all([c[n](...p),r&&u.done]))[0]};return yt.set(t,a),a}Rr(e=>({...e,get:(t,n,i)=>yn(t,n)||e.get(t,n,i),has:(t,n)=>!!yn(t,n)||e.has(t,n)}));class Ur{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Kr(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Kr(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const vt="@firebase/app",vn="0.10.5",ae=new $r("@firebase/app"),Gr="@firebase/app-compat",Jr="@firebase/analytics-compat",qr="@firebase/analytics",Yr="@firebase/app-check-compat",Zr="@firebase/app-check",Xr="@firebase/auth",Qr="@firebase/auth-compat",eo="@firebase/database",to="@firebase/database-compat",no="@firebase/functions",io="@firebase/functions-compat",ro="@firebase/installations",oo="@firebase/installations-compat",ao="@firebase/messaging",so="@firebase/messaging-compat",co="@firebase/performance",lo="@firebase/performance-compat",po="@firebase/remote-config",uo="@firebase/remote-config-compat",ho="@firebase/storage",fo="@firebase/storage-compat",go="@firebase/firestore",mo="@firebase/vertexai-preview",xo="@firebase/firestore-compat",bo="firebase",St="[DEFAULT]",wo={[vt]:"fire-core",[Gr]:"fire-core-compat",[qr]:"fire-analytics",[Jr]:"fire-analytics-compat",[Zr]:"fire-app-check",[Yr]:"fire-app-check-compat",[Xr]:"fire-auth",[Qr]:"fire-auth-compat",[eo]:"fire-rtdb",[to]:"fire-rtdb-compat",[no]:"fire-fn",[io]:"fire-fn-compat",[ro]:"fire-iid",[oo]:"fire-iid-compat",[ao]:"fire-fcm",[so]:"fire-fcm-compat",[co]:"fire-perf",[lo]:"fire-perf-compat",[po]:"fire-rc",[uo]:"fire-rc-compat",[ho]:"fire-gcs",[fo]:"fire-gcs-compat",[go]:"fire-fst",[xo]:"fire-fst-compat",[mo]:"fire-vertex","fire-js":"fire-js",[bo]:"fire-js-all"},Ue=new Map,yo=new Map,jt=new Map;function Sn(e,t){try{e.container.addComponent(t)}catch(n){ae.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function se(e){const t=e.name;if(jt.has(t))return ae.debug(`There were multiple attempts to register component ${t}.`),!1;jt.set(t,e);for(const n of Ue.values())Sn(n,e);for(const n of yo.values())Sn(n,e);return!0}function Et(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const vo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Z=new We("app","Firebase",vo);class So{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Y("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Z.create("app-deleted",{appName:this._name})}}function jn(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:St,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw Z.create("bad-app-name",{appName:String(r)});if(n||(n=pn()),!n)throw Z.create("no-options");const a=Ue.get(r);if(a){if(ht(n,a.options)&&ht(i,a.config))return a;throw Z.create("duplicate-app",{appName:r})}const s=new Ir(r);for(const u of jt.values())s.addComponent(u);const p=new So(n,i,s);return Ue.set(r,p),p}function jo(e=St){const t=Ue.get(e);if(!t&&e===St&&pn())return jn();if(!t)throw Z.create("no-app",{appName:e});return t}function ce(e,t,n){var i;let r=(i=wo[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const a=r.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const p=[`Unable to register library "${r}" with version "${t}":`];a&&p.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&s&&p.push("and"),s&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ae.warn(p.join(" "));return}se(new Y(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const Eo="firebase-heartbeat-database",Co=1,Ie="firebase-heartbeat-store";let Ct=null;function En(){return Ct||(Ct=Ve(Eo,Co,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ie)}catch(n){console.warn(n)}}}}).catch(e=>{throw Z.create("idb-open",{originalErrorMessage:e.message})})),Ct}async function ko(e){try{const t=(await En()).transaction(Ie),n=await t.objectStore(Ie).get(kn(e));return await t.done,n}catch(t){if(t instanceof ge)ae.warn(t.message);else{const n=Z.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ae.warn(n.message)}}}async function Cn(e,t){try{const n=(await En()).transaction(Ie,"readwrite");await n.objectStore(Ie).put(t,kn(e)),await n.done}catch(n){if(n instanceof ge)ae.warn(n.message);else{const i=Z.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ae.warn(i.message)}}}function kn(e){return`${e.name}!${e.options.appId}`}const To=1024,_o=30*24*60*60*1e3;class Io{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ao(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Tn();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const s=new Date(a.date).valueOf();return Date.now()-s<=_o}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tn(),{heartbeatsToSend:i,unsentEntries:r}=Do(this._heartbeatsCache.heartbeats),a=dn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Tn(){return new Date().toISOString().substring(0,10)}function Do(e,t=To){const n=[];let i=e.slice();for(const r of e){const a=n.find(s=>s.agent===r.agent);if(a){if(a.dates.push(r.date),_n(n)>t){a.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),_n(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ao{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return un()?hn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ko(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cn(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cn(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function _n(e){return dn(JSON.stringify({version:2,heartbeats:e})).length}function Bo(e){se(new Y("platform-logger",t=>new Ur(t),"PRIVATE")),se(new Y("heartbeat",t=>new Io(t),"PRIVATE")),ce(vt,vn,e),ce(vt,vn,"esm2017"),ce("fire-js","")}Bo("");const In="@firebase/installations",kt="0.6.7",Dn=1e4,An=`w:${kt}`,Bn="FIS_v2",Oo="https://firebaseinstallations.googleapis.com/v1",$o=60*60*1e3,Mo="installations",No="Installations",Lo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},le=new We(Mo,No,Lo);function On(e){return e instanceof ge&&e.code.includes("request-failed")}function $n({projectId:e}){return`${Oo}/projects/${e}/installations`}function Mn(e){return{token:e.token,requestStatus:2,expiresIn:Fo(e.expiresIn),creationTime:Date.now()}}async function Nn(e,t){const n=(await t.json()).error;return le.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Ln({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Po(e,{refreshToken:t}){const n=Ln(e);return n.append("Authorization",Ro(t)),n}async function Pn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Fo(e){return Number(e.replace("s","000"))}function Ro(e){return`${Bn} ${e}`}async function zo({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=$n(e),r=Ln(e),a=t.getImmediate({optional:!0});if(a){const c=await a.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const s={fid:n,authVersion:Bn,appId:e.appId,sdkVersion:An},p={method:"POST",headers:r,body:JSON.stringify(s)},u=await Pn(()=>fetch(i,p));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Mn(c.authToken)}}else throw await Nn("Create Installation",u)}function Fn(e){return new Promise(t=>{setTimeout(t,e)})}function Ho(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}const Wo=/^[cdef][\w-]{21}$/,Tt="";function Vo(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=Uo(e);return Wo.test(t)?t:Tt}catch{return Tt}}function Uo(e){return Ho(e).substr(0,22)}function Ke(e){return`${e.appName}!${e.appId}`}const Rn=new Map;function zn(e,t){const n=Ke(e);Hn(n,t),Ko(n,t)}function Hn(e,t){const n=Rn.get(e);if(n)for(const i of n)i(t)}function Ko(e,t){const n=Go();n&&n.postMessage({key:e,fid:t}),Jo()}let de=null;function Go(){return!de&&"BroadcastChannel"in self&&(de=new BroadcastChannel("[Firebase] FID Change"),de.onmessage=e=>{Hn(e.data.key,e.data.fid)}),de}function Jo(){Rn.size===0&&de&&(de.close(),de=null)}const qo="firebase-installations-database",Yo=1,pe="firebase-installations-store";let _t=null;function It(){return _t||(_t=Ve(qo,Yo,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(pe)}}})),_t}async function Ge(e,t){const n=Ke(e),i=(await It()).transaction(pe,"readwrite"),r=i.objectStore(pe),a=await r.get(n);return await r.put(t,n),await i.done,(!a||a.fid!==t.fid)&&zn(e,t.fid),t}async function Wn(e){const t=Ke(e),n=(await It()).transaction(pe,"readwrite");await n.objectStore(pe).delete(t),await n.done}async function Je(e,t){const n=Ke(e),i=(await It()).transaction(pe,"readwrite"),r=i.objectStore(pe),a=await r.get(n),s=t(a);return s===void 0?await r.delete(n):await r.put(s,n),await i.done,s&&(!a||a.fid!==s.fid)&&zn(e,s.fid),s}async function Dt(e){let t;const n=await Je(e.appConfig,i=>{const r=Zo(i),a=Xo(e,r);return t=a.registrationPromise,a.installationEntry});return n.fid===Tt?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Zo(e){const t=e||{fid:Vo(),registrationStatus:0};return Un(t)}function Xo(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(le.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=Qo(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ea(e)}:{installationEntry:t}}async function Qo(e,t){try{const n=await zo(e,t);return Ge(e.appConfig,n)}catch(n){throw On(n)&&n.customData.serverCode===409?await Wn(e.appConfig):await Ge(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ea(e){let t=await Vn(e.appConfig);for(;t.registrationStatus===1;)await Fn(100),t=await Vn(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Dt(e);return i||n}return t}function Vn(e){return Je(e,t=>{if(!t)throw le.create("installation-not-found");return Un(t)})}function Un(e){return ta(e)?{fid:e.fid,registrationStatus:0}:e}function ta(e){return e.registrationStatus===1&&e.registrationTime+Dn<Date.now()}async function na({appConfig:e,heartbeatServiceProvider:t},n){const i=ia(e,n),r=Po(e,n),a=t.getImmediate({optional:!0});if(a){const c=await a.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const s={installation:{sdkVersion:An,appId:e.appId}},p={method:"POST",headers:r,body:JSON.stringify(s)},u=await Pn(()=>fetch(i,p));if(u.ok){const c=await u.json();return Mn(c)}else throw await Nn("Generate Auth Token",u)}function ia(e,{fid:t}){return`${$n(e)}/${t}/authTokens:generate`}async function At(e,t=!1){let n;const i=await Je(e.appConfig,r=>{if(!Gn(r))throw le.create("not-registered");const a=r.authToken;if(!t&&aa(a))return r;if(a.requestStatus===1)return n=ra(e,t),r;{if(!navigator.onLine)throw le.create("app-offline");const s=ca(r);return n=oa(e,s),s}});return n?await n:i.authToken}async function ra(e,t){let n=await Kn(e.appConfig);for(;n.authToken.requestStatus===1;)await Fn(100),n=await Kn(e.appConfig);const i=n.authToken;return i.requestStatus===0?At(e,t):i}function Kn(e){return Je(e,t=>{if(!Gn(t))throw le.create("not-registered");const n=t.authToken;return la(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function oa(e,t){try{const n=await na(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await Ge(e.appConfig,i),n}catch(n){if(On(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Wn(e.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ge(e.appConfig,i)}throw n}}function Gn(e){return e!==void 0&&e.registrationStatus===2}function aa(e){return e.requestStatus===2&&!sa(e)}function sa(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+$o}function ca(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function la(e){return e.requestStatus===1&&e.requestTime+Dn<Date.now()}async function da(e){const t=e,{installationEntry:n,registrationPromise:i}=await Dt(t);return i?i.catch(console.error):At(t).catch(console.error),n.fid}async function pa(e,t=!1){const n=e;return await ua(n),(await At(n,t)).token}async function ua(e){const{registrationPromise:t}=await Dt(e);t&&await t}function ha(e){if(!e||!e.options)throw Bt("App Configuration");if(!e.name)throw Bt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Bt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Bt(e){return le.create("missing-app-config-values",{valueName:e})}const Jn="installations",fa="installations-internal",ga=e=>{const t=e.getProvider("app").getImmediate(),n=ha(t),i=Et(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},ma=e=>{const t=e.getProvider("app").getImmediate(),n=Et(t,Jn).getImmediate();return{getId:()=>da(n),getToken:i=>pa(n,i)}};function xa(){se(new Y(Jn,ga,"PUBLIC")),se(new Y(fa,ma,"PRIVATE"))}xa(),ce(In,kt),ce(In,kt,"esm2017");const ba="/firebase-messaging-sw.js",wa="/firebase-cloud-messaging-push-scope",qn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ya="https://fcmregistrations.googleapis.com/v1",Yn="google.c.a.c_id",va="google.c.a.c_l",Sa="google.c.a.ts",ja="google.c.a.e";var Zn;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Zn||(Zn={}));var De;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(De||(De={}));function K(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ea(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let a=0;a<i.length;++a)r[a]=i.charCodeAt(a);return r}const Ot="fcm_token_details_db",Ca=5,Xn="fcm_token_object_Store";async function ka(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(n=>n.name).includes(Ot))return null;let t=null;return(await Ve(Ot,Ca,{upgrade:async(n,i,r,a)=>{var s;if(i<2||!n.objectStoreNames.contains(Xn))return;const p=a.objectStore(Xn),u=await p.index("fcmSenderId").get(e);if(await p.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;t={token:c.fcmToken,createTime:(s=c.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:K(c.vapidKey)}}}else if(i===3){const c=u;t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:K(c.auth),p256dh:K(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:K(c.vapidKey)}}}else if(i===4){const c=u;t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:K(c.auth),p256dh:K(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:K(c.vapidKey)}}}}}})).close(),await wt(Ot),await wt("fcm_vapid_details_db"),await wt("undefined"),Ta(t)?t:null}function Ta(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}const _a="firebase-messaging-database",Ia=1,Ae="firebase-messaging-store";let $t=null;function Qn(){return $t||($t=Ve(_a,Ia,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ae)}}})),$t}async function Da(e){const t=ei(e),n=await(await Qn()).transaction(Ae).objectStore(Ae).get(t);if(n)return n;{const i=await ka(e.appConfig.senderId);if(i)return await Mt(e,i),i}}async function Mt(e,t){const n=ei(e),i=(await Qn()).transaction(Ae,"readwrite");return await i.objectStore(Ae).put(t,n),await i.done,t}function ei({appConfig:e}){return e.appId}const Aa={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},T=new We("messaging","Messaging",Aa);async function Ba(e,t){const n=await Lt(e),i=ti(t),r={method:"POST",headers:n,body:JSON.stringify(i)};let a;try{a=await(await fetch(Nt(e.appConfig),r)).json()}catch(s){throw T.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(a.error){const s=a.error.message;throw T.create("token-subscribe-failed",{errorInfo:s})}if(!a.token)throw T.create("token-subscribe-no-token");return a.token}async function Oa(e,t){const n=await Lt(e),i=ti(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let a;try{a=await(await fetch(`${Nt(e.appConfig)}/${t.token}`,r)).json()}catch(s){throw T.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(a.error){const s=a.error.message;throw T.create("token-update-failed",{errorInfo:s})}if(!a.token)throw T.create("token-update-no-token");return a.token}async function $a(e,t){const n={method:"DELETE",headers:await Lt(e)};try{const i=await(await fetch(`${Nt(e.appConfig)}/${t}`,n)).json();if(i.error){const r=i.error.message;throw T.create("token-unsubscribe-failed",{errorInfo:r})}}catch(i){throw T.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Nt({projectId:e}){return`${ya}/projects/${e}/registrations`}async function Lt({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ti({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:t,p256dh:e}};return i!==qn&&(r.web.applicationPubKey=i),r}const Ma=7*24*60*60*1e3;async function Na(e){const t=await Pa(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:K(t.getKey("auth")),p256dh:K(t.getKey("p256dh"))},i=await Da(e.firebaseDependencies);if(i){if(Fa(i.subscriptionOptions,n))return Date.now()>=i.createTime+Ma?La(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await $a(e.firebaseDependencies,i.token)}catch(r){console.warn(r)}return ni(e.firebaseDependencies,n)}else return ni(e.firebaseDependencies,n)}async function La(e,t){try{const n=await Oa(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Mt(e.firebaseDependencies,i),n}catch(n){throw n}}async function ni(e,t){const n={token:await Ba(e,t),createTime:Date.now(),subscriptionOptions:t};return await Mt(e,n),n.token}async function Pa(e,t){return await e.pushManager.getSubscription()||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ea(t)})}function Fa(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,r=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&i&&r&&a}function ii(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Ra(t,e),za(t,e),Ha(t,e),t}function Ra(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const r=t.notification.image;r&&(e.notification.image=r);const a=t.notification.icon;a&&(e.notification.icon=a)}function za(e,t){t.data&&(e.data=t.data)}function Ha(e,t){var n,i,r,a,s;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const p=(r=(i=t.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&r!==void 0?r:(a=t.notification)===null||a===void 0?void 0:a.click_action;p&&(e.fcmOptions.link=p);const u=(s=t.fcmOptions)===null||s===void 0?void 0:s.analytics_label;u&&(e.fcmOptions.analyticsLabel=u)}function Wa(e){return typeof e=="object"&&!!e&&Yn in e}ri("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),ri("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function ri(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}function Va(e){if(!e||!e.options)throw Pt("App Configuration Object");if(!e.name)throw Pt("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Pt(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Pt(e){return T.create("missing-app-config-values",{valueName:e})}class Ua{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=Va(t);this.firebaseDependencies={app:t,appConfig:r,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}async function Ka(e){try{e.swRegistration=await navigator.serviceWorker.register(ba,{scope:wa}),e.swRegistration.update().catch(()=>{})}catch(t){throw T.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function Ga(e,t){if(!t&&!e.swRegistration&&await Ka(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw T.create("invalid-sw-registration");e.swRegistration=t}}async function Ja(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=qn)}async function oi(e,t){if(!navigator)throw T.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw T.create("permission-blocked");return await Ja(e,t==null?void 0:t.vapidKey),await Ga(e,t==null?void 0:t.serviceWorkerRegistration),Na(e)}async function qa(e,t,n){const i=Ya(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[Yn],message_name:n[va],message_time:n[Sa],message_device_time:Math.floor(Date.now()/1e3)})}function Ya(e){switch(e){case De.NOTIFICATION_CLICKED:return"notification_open";case De.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}async function Za(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===De.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(ii(n)):e.onMessageHandler.next(ii(n)));const i=n.data;Wa(i)&&i[ja]==="1"&&await qa(e,n.messageType,i)}const ai="@firebase/messaging",si="0.12.9",Xa=e=>{const t=new Ua(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Za(t,n)),t},Qa=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:n=>oi(t,n)}};function es(){se(new Y("messaging",Xa,"PUBLIC")),se(new Y("messaging-internal",Qa,"PRIVATE")),ce(ai,si),ce(ai,si,"esm2017")}async function ts(){try{await hn()}catch{return!1}return typeof window<"u"&&un()&&Sr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function ns(e=jo()){return ts().then(t=>{if(!t)throw T.create("unsupported-browser")},t=>{throw T.create("indexed-db-unsupported")}),Et(gn(e),"messaging").getImmediate()}async function is(e,t){return e=gn(e),oi(e,t)}es();var rs={...N.firebaseConfig};const Ft="EPNS_BASE_PUSH_TOKEN",Rt="PUSH_TOKEN_",os=jn(rs),as=ns(os),ss=()=>localStorage.getItem(Ft),cs=e=>localStorage.setItem(Ft,e),ls=async()=>{try{let e=ss(Ft);return e||(e=await is(as,{vapidKey:N.vapidKey}),cs(e)),e}catch(e){throw console.error("An error occurred while retrieving token. ",e),e}},ds=async e=>{try{const t=`${Rt}${e}`;if(!(localStorage.getItem(t)||localStorage.getItem(Rt))){const n=await ls();await dr({token:n,account:e}),localStorage.setItem(t,n),localStorage.setItem(Rt,"response")}}catch(t){console.error("Error setting up the browser notification",t)}},ps=(e,t,n)=>{if(!("serviceWorker"in navigator)||!e||e==t)return;const i=ci();i==="notValid"?alert("This browser does not support desktop notification"):i==="pending"&&Notification.requestPermission().then(async r=>{r==="granted"&&await ds(e)})},ci=()=>{if("Notification"in window){if(Notification.permission==="granted")return"granted";if(Notification.permission!=="denied")return"pending"}else return"notValid";return"denied"},us=({onModalClose:e})=>{const t=he();return o.jsx(hs,{theme:t,children:o.jsxs(te,{gap:"16px",children:[o.jsxs(te,{gap:"10px",alignItems:"start",children:[o.jsx(J,{fontSize:"20px",fontWeight:"500",color:t.default.color,children:"Allow Notifications"}),o.jsx(J,{fontSize:"14px",fontWeigth:"400",maxWidth:"264px",textAlign:"left",color:t.default.descriptionTextColor,children:"We recommend enabling notifications for receiving updates from subscribed channels for a seamless experience."})]}),o.jsxs(Yt,{width:"100%",justifyContent:"space-between",children:[o.jsx(Zt,{padding:"14px 0px",background:"#D53A94",maxWidth:"110px",color:"#fff",borderRadius:"8px",onClick:()=>{ps(e)},children:"Allow"}),o.jsx(Zt,{padding:"14px 0px",background:t.modalContentBackground,color:t.default.descriptionTextColor,borderRadius:"8px",maxWidth:"110px",hoverBackground:"none",onClick:()=>e(),children:"Skip"})]})]})})},hs=d.div`
  display: flex;
  flex-direction: column;
  right: 20px;
  bottom: 20px;
  position: fixed;
  z-index: 99999999999;
  width: 340px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${e=>e.theme.modalContentBackground};
  padding: 16px 20px;

  @media (${ke.mobileL}) {
    width: calc(100% - 80px);
  }
`;function zt({externalIcon:e=null,internalIcon:t=null,text:n,bgColor:i,onClick:r=()=>{},onMouseEnter:a=()=>{},onMouseLeave:s=()=>{},padding:p,color:u}){return o.jsx(fs,{bg:i,margin:"0 8px",radius:"25px",maxWidth:"fit-content",onMouseEnter:a,onMouseLeave:s,padding:p,children:o.jsx(gs,{hoverBG:"transparent",onClick:r,children:o.jsxs(_,{color:u,children:[e&&o.jsx(fe,{children:e}),t&&o.jsx(ms,{children:t}),o.jsx(fe,{children:n})]})})})}const fs=d(fe)`
  white-space: pre;
  margin: 0.3rem 0.4rem;
`,gs=d(cl)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  max-width: fit-content;

  & > Span {
    gap: 5px;
    font-weight: 500;
    display: flex;
    font-size: 14px;
    transition: 300ms;

  }
  & > Span:hover {
    white-space: pre;
    cursor:${e=>e.onClick?"pointer":"default"};

  }
`,ms=d(_)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 4px 0px 0px;
  color: inherit;
`,Be={ens:{maintainer:"0x983110309620D911731Ac0932219af06091b6744",userjourneyyoutube:"https://www.youtube.com/embed/AmalyHBJ5Gw?controls=0&autoplay=1",userjourneyshort:"ens",article:"https://medium.com/ethereum-push-notification-service/epns-to-add-push-notifications-to-ens-decentralized-domain-name-services-a20f001a7234"},coindesk:{maintainer:"0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF",userjourneyyoutube:"https://www.youtube.com/embed/z_RZgoYNH_Y?controls=0&autoplay=1",userjourneyshort:"coindesk",article:"https://medium.com/ethereum-push-notification-service/epns-and-coindesk-announce-media-push-notifications-1707b12884d"},snapshot:{maintainer:"0x8C28Cf33d9Fd3D0293f963b1cd27e3FF422B425c",userjourneyyoutube:"https://www.youtube.com/embed/AYy42D5oG20?controls=0&autoplay=1",userjourneyshort:"snapshot",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-snapshot-to-deliver-notifications-to-improve-community-governance-5730559cb84b"},makerdao:{maintainer:"0x8Cd0ad5C55498Aacb72b6689E1da5A284C69c0C7",userjourneyyoutube:"https://www.youtube.com/embed/OxZ5H2vRnRc?controls=0&autoplay=1",userjourneyshort:"makerdao",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-makerdao-development-and-ux-core-unit-to-enable-push-notifications-for-protocol-53f777957d26"},cvi:{maintainer:"0x2dbf5aFead4759E6151590E4a8F6cD596B7044F8",userjourneyyoutube:"https://www.youtube.com/embed/r_wXWfEWSM0?controls=0&autoplay=1",userjourneyshort:"cvi",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-cvi-crypto-volatility-index-to-enable-push-notifications-for-their-5ea662ee73a3"},bancor:{maintainer:"0x7F41abf7fDb9E4A6373EC3BAB3Df814b5CCceCC3",userjourneyyoutube:"https://www.youtube.com/embed/SmoOX2JXx_4?controls=0&autoplay=1",userjourneyshort:"bancor",article:"https://medium.com/ethereum-push-notification-service/epns-integrates-with-bancor-network-to-facilitate-decentralized-push-notifications-d35b5e27d4a9"},oasisapp:{maintainer:"0x12b3eE60Df8ea26D03b8035Ec90434a38A82C4C7",userjourneyyoutube:"https://www.youtube.com/embed/7PPc6a3XUo4?controls=0&autoplay=1",userjourneyshort:"oasisapp",article:"https://medium.com/ethereum-push-notification-service/epns-push-notifications-arrive-at-defi-on-oasis-app-770ae7ed1b"},mover:{maintainer:"0xb754601d2C8C1389E6633b1449B84CcE57788566",userjourneyyoutube:"https://www.youtube.com/embed/TX1acRPGovA?controls=0&autoplay=1",userjourneyshort:"mover",article:"https://medium.com/ethereum-push-notification-service/mover-integrates-with-epns-to-deliver-yield-harvesting-notifications-ab3bc9a6b26e"},poh:{maintainer:"0x327a29fcE0a6490E4236240Be176dAA282EcCfdF",userjourneyyoutube:"https://www.youtube.com/embed/_Urc35obsOQ?controls=0&autoplay=1",userjourneyshort:"poh",article:"https://medium.com/ethereum-push-notification-service/epns-joins-proof-of-humanity-to-enhance-the-user-experience-of-decentralized-self-sovereign-e734780c9840"},kyber:{maintainer:"0x91c9D4373B077eF8082F468C7c97f2c499e36F5b",userjourneyyoutube:"https://www.youtube.com/embed/EpTYdJMQxoU?controls=0&autoplay=1",userjourneyshort:"kyber",article:"https://medium.com/ethereum-push-notification-service/epns-push-notifications-to-support-kybers-frictionless-liquidity-pools-4fe65746b39"},fabwelt:{maintainer:"0x361Cb6BE977d0113A33914A8f952Ced95747F793",userjourneyyoutube:"https://www.youtube.com/embed/kLyZ0DT?controls=0&autoplay=1",userjourneyshort:"fabwelt",article:"https://medium.com/ethereum-push-notification-service/fabwelt-partners-with-epns-to-bring-push-notifications-to-crypto-gaming-c247e70bb627"},banklessfr:{maintainer:"0xA8aF754379d8ae406dFbDD0D6c46324aD647243E",userjourneyyoutube:"https://www.youtube.com/embed/1mnLTslK_sY?controls=0&autoplay=1",userjourneyshort:"banklessfr",article:null},angle:{maintainer:"0xA2dEe32662F6243dA539bf6A8613F9A9e39843D3",userjourneyyoutube:null,userjourneyshort:"angle",article:"https://medium.com/ethereum-push-notification-service/epns-allies-with-angle-protocol-to-facilitate-push-notifications-for-users-af77cf4d3e2b"},mstable:{maintainer:"0xC30CE8F08BD8F667E65185310807Db937A5d6E53",userjourneyyoutube:null,userjourneyshort:"mstable",article:"https://medium.com/ethereum-push-notification-service/epns-allies-with-mstable-to-facilitate-decentralized-notifications-for-users-a3e6be14eecc"},aragon:{maintainer:"0x187a34c86aA6378333cE9033Aa34718D2CEdEd2C",userjourneyyoutube:"https://www.youtube.com/embed/PT90Zyi9A0g?controls=0&autoplay=1",userjourneyshort:"aragon",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-aragon-voice-to-power-unstoppable-decentralized-governance-56182b9d9aa0"},cryptomanga:{maintainer:"0x0B430A1651E6A64510afC97195040359941d0b23",userjourneyyoutube:null,userjourneyshort:"cryptomanga",article:"https://medium.com/ethereum-push-notification-service/epns-x-cryptomanga-decentralized-communication-for-decentralized-gaming-d296956afdeb"},dydx:{maintainer:"0x23c6b8fB0557FD5e6696BceF3fD4855E0d7018C0",userjourneyyoutube:"https://www.youtube.com/embed/oXgNlebVUAo?controls=0&autoplay=1",userjourneyshort:"dydx",article:"https://medium.com/ethereum-push-notification-service/epns-teams-up-with-dydx-foundation-to-enable-notifications-for-governance-updates-5794a5e22c4d"},idle:{maintainer:"0xFb3bD022D5DAcF95eE28a6B07825D4Ff9C5b3814",userjourneyyoutube:"https://www.youtube.com/embed/08bBRIzRcok?controls=0&autoplay=1",userjourneyshort:"idle",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-idle-to-enable-push-notifications-for-governance-updates-32e142ed2f33"},tracerdao:{maintainer:"0x8bf25240402C126bb236d26D391b782c5c893D32",userjourneyyoutube:"https://www.youtube.com/embed/Pw5zjKmQLFg?controls=0&autoplay=1",userjourneyshort:"tracerdao",article:"https://medium.com/ethereum-push-notification-service/epns-brings-push-notifs-to-tracer-dao-governance-91f7b9a9ddcc"},armor:{maintainer:"0x5aFeDeF166bd626B3043cb1D53e16EA9BF863E06",userjourneyyoutube:"https://www.youtube.com/embed/AMW9Xf0Rc2Y?controls=0&autoplay=1",userjourneyshort:"armor",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-armor-to-enable-push-notifications-for-its-users-daa70b4f172d"},pods:{maintainer:"0xb4F88Ad000A53638F203dcA2C39828a58057d53c",userjourneyyoutube:"https://www.youtube.com/embed/Ink21CE_RzM?controls=0&autoplay=1",userjourneyshort:"pods",article:"https://medium.com/ethereum-push-notification-service/epns-inks-partnership-with-options-protocol-pods-finance-e5adcd2d5821"},ooki:{maintainer:"0x9B43a385E08EE3e4b402D4312dABD11296d09E93",userjourneyyoutube:"https://www.youtube.com/embed/vGu--SUV4l4?controls=0&autoplay=1",userjourneyshort:"ooki",article:"https://medium.com/ethereum-push-notification-service/epns-partners-with-bzx-to-deliver-crucial-margin-trading-push-notifications-to-wallets-a2f52e4fcefe"},pushgov:{maintainer:"0xfE4A6Fbd27B496855245A1e8047F693f0aDfDb08",userjourneyyoutube:"https://www.youtube.com/embed/vvDlJttgQgQ?controls=0&autoplay=1",userjourneyshort:"pushgov",article:"https://medium.com/ethereum-push-notification-service/epns-governance-goes-live-lets-push-for-progressive-decentralized-governance-7448b58b89b4"},symphony:{maintainer:"0xd32908F63713F514aDDBE3962A2dE7112fdCD4A7",userjourneyyoutube:"https://www.youtube.com/embed/FtadeuLSPmE?controls=0&autoplay=1",userjourneyshort:"symphony",article:"https://medium.com/ethereum-push-notification-service/epns-collaborates-with-symphony-finance-to-facilitate-push-notifications-for-limit-order-c6f27bf8e02a"},ethtracker:{maintainer:"0xDBc5936E4daaE94F415C39D284f6a69c4d553F2F",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"ethtracker",article:null},ethpricetracker:{maintainer:"0x2B8ffb4460550Dbe8Ec1cEA9C1B61322dB56B082",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"ethpricetracker",article:null},btctracker:{maintainer:"0x03EAAAa48ea78d1E66eA3458364d553AD981871E",userjourneyyoutube:"https://www.youtube.com/embed/13ahwv-Ox04?controls=0&autoplay=1",userjourneyshort:"btctracker",article:null},aave:{maintainer:"0xAA940b3501176af328423d975C350d0d1BaAae50",userjourneyyoutube:"https://www.youtube.com/embed/YKflQ8eADFg?controls=0&autoplay=1",userjourneyshort:"aave",article:"https://medium.com/ethereum-push-notification-service/epns-x-aave-protection-against-asset-liquidation-f33be395ef87"},gro:{maintainer:"0x3c1F2E6Ec3De7811E2daa2B8E132CdCd8e39851c",userjourneyyoutube:null,userjourneyshort:"gro",article:"https://medium.com/ethereum-push-notification-service/epns-monthly-blocks-4371ef89bc91"},flipside:{maintainer:"0xC2f41b3a1FF28Fd2A6EeE76EE12e51482fcFd11F",userjourneyyoutube:null,userjourneyshort:"flipside",article:"https://medium.com/ethereum-push-notification-service/epns-and-flipside-crypto-join-forces-to-facilitate-push-notifications-for-users-58df98b7aba7"},thedefiant:{maintainer:"0x46b676303ebC5699BF47e416677A57A89c70a015",userjourneyyoutube:null,userjourneyshort:"thedefiant",article:"https://medium.com/ethereum-push-notification-service/epns-teams-up-with-the-defiant-to-bring-defi-news-directly-to-users-wallets-8b4896d674bb"}},xs=e=>{let t=!1;return Object.entries(Be).forEach(([n,i])=>{if(Be[n].maintainer===e){t=!0;return}}),t},bs=({addr:e,bgColor:t,loadTeaser:n,playTeaser:i})=>{const r=he(),[a,s]=Te.useState(!1),p=(u=>{let c=null;return Object.entries(Be).forEach(([m,x])=>{if(Be[m].maintainer===u){c=Be[m];return}}),c})(e);return o.jsxs(L,{flex:"initial",onMouseEnter:()=>{s(!0),console.debug("enter")},onMouseLeave:()=>{s(!1),console.debug("exit")},zIndex:"9",children:[a&&o.jsx(L,{position:"absolute",width:"280px",bottom:"0px",padding:"0px 0px 40px 0px",children:o.jsxs(ws,{bg:r.backgroundBG,padding:"10px",border:`1px solid ${r.borderBg}`,children:[p.userjourneyshort&&o.jsxs(L,{children:[o.jsx(_,{bg:r.viewChannelTutsTitleBg,color:"#fff",padding:"4px 10px",margin:"0px 0px 10px 0px",self:"flex-end",spacing:"0.1em",textTransform:"uppercase",size:"bold",children:"Opt-in to enable"}),o.jsx(ne,{src:`./tuts/${p.userjourneyshort}/${p.userjourneyshort}_${r.scheme}.png`,srcSet:`./tuts/${p.userjourneyshort}/${p.userjourneyshort}_${r.scheme}@2x.png 2x, ./tuts/${p.userjourneyshort}/${p.userjourneyshort}_${r.scheme}@3x.png 3x`,alt:`${p.alt}`})]}),o.jsxs(fe,{padding:"10px 0px 0px 0px",justify:"space-between",self:"stretch",children:[p.userjourneyyoutube&&o.jsxs(Yi,{bg:r.viewChannelTutsButtonBg,color:"#fff",radius:"4px",padding:"5px 10px",onClick:()=>{s(!1),n(p.userjourneyyoutube),i(!0)},children:[o.jsx(_,{margin:"0px 5px 0px 0px",weight:"bold",color:"#fff",children:"User Journey"}),o.jsx(ll,{size:"20px"})]}),p.article&&o.jsx(Yi,{bg:r.viewChannelTutsButtonBg,color:"#fff",radius:"4px",padding:"5px 10px",onClick:()=>{s(!1),window.open(`${p.article}`,"_blank")},children:o.jsx(dl,{size:"20px"})})]})]})}),o.jsx(zt,{internalIcon:o.jsx(ct,{filter:r.snackbarBorderIcon,width:"fit-content",src:P("svg/view-tutorial-icon.svg")}),text:"Tutorial",bgColor:t,color:r.viewChannelPrimaryText,padding:"6px 16px"})]})},ws=d(L)`
  border-radius: 10px;
  box-shadow: 0px 15px 20px -5px rgb(0 0 0 / 10%);
`,li="data:image/svg+xml,%3csvg%20width='16'%20height='15'%20viewBox='0%200%2016%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.25%2011.25H8.75V6.75H7.25V11.25ZM8%205.25C8.2125%205.25%208.39075%205.178%208.53475%205.034C8.67825%204.8905%208.75%204.7125%208.75%204.5C8.75%204.2875%208.67825%204.10925%208.53475%203.96525C8.39075%203.82175%208.2125%203.75%208%203.75C7.7875%203.75%207.6095%203.82175%207.466%203.96525C7.322%204.10925%207.25%204.2875%207.25%204.5C7.25%204.7125%207.322%204.8905%207.466%205.034C7.6095%205.178%207.7875%205.25%208%205.25ZM8%2015C6.9625%2015%205.9875%2014.803%205.075%2014.409C4.1625%2014.0155%203.36875%2013.4813%202.69375%2012.8063C2.01875%2012.1313%201.4845%2011.3375%201.091%2010.425C0.697%209.5125%200.5%208.5375%200.5%207.5C0.5%206.4625%200.697%205.4875%201.091%204.575C1.4845%203.6625%202.01875%202.86875%202.69375%202.19375C3.36875%201.51875%204.1625%200.98425%205.075%200.59025C5.9875%200.19675%206.9625%200%208%200C9.0375%200%2010.0125%200.19675%2010.925%200.59025C11.8375%200.98425%2012.6313%201.51875%2013.3063%202.19375C13.9813%202.86875%2014.5155%203.6625%2014.909%204.575C15.303%205.4875%2015.5%206.4625%2015.5%207.5C15.5%208.5375%2015.303%209.5125%2014.909%2010.425C14.5155%2011.3375%2013.9813%2012.1313%2013.3063%2012.8063C12.6313%2013.4813%2011.8375%2014.0155%2010.925%2014.409C10.0125%2014.803%209.0375%2015%208%2015Z'%20fill='%23BAC4D6'/%3e%3c/svg%3e",ys=({settings:e,optInHandler:t})=>{const[n,i]=h.useState([...e]),[r,a]=h.useState(!1),s=he(),p=(c,m)=>{const x=[...n];x[c].default=m,i(x)},u=c=>{const m=[...n];if(m[c].type===1){const x=m[c];x.default=!x.default}else{const x=m[c];x.enabled=!x.enabled}i(m)};return o.jsxs(Ss,{children:[n.map((c,m)=>o.jsxs(js,{hasBottomBorder:m!==e.length-1,children:[o.jsxs(Es,{children:[o.jsx(J,{color:s.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:c.description}),o.jsx(ul,{onChange:()=>u(m),checked:c.type===1?c.default:c.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),c.type===2&&c.enabled===!0&&o.jsxs(di,{children:[o.jsx(J,{color:s.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:c.default}),o.jsx(Vl,{val:c.default,max:c.upperLimit,min:c.lowerLimit,step:c.ticker||1,defaultVal:c.default,onChange:({x})=>p(m,x)})]}),c.type===3&&c.enabled===!0&&o.jsxs(di,{children:[o.jsxs(J,{color:s.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[c.default.lower," - ",c.default.upper]}),o.jsx(Ul,{startVal:c.default.lower,endVal:c.default.upper,max:c.upperLimit,min:c.lowerLimit,step:c.ticker||1,defaultStartVal:c.default.lower,defaultEndVal:c.default.upper,onChange:({startVal:x,endVal:v})=>p(m,{lower:x,upper:v})})]})]},m)),o.jsxs(Cs,{children:[o.jsx(J,{color:s.textcolor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:"You will receive all important updates from this channel."}),o.jsxs(ks,{onClick:()=>t({channelSettings:n,setLoading:a}),children:[r&&o.jsx(ie,{type:re.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!r&&o.jsx(Ts,{hideIt:r,children:"Opt-in"})]})]})]})},vs=e=>{const{children:t,channelDetail:n,setLoading:i,onSuccessOptin:r}=e,{chainId:a,provider:s,account:p,wallet:u}=Xt();z(D=>D.user);const[c,m]=h.useState(!1),x=Qt(),{handleConnectWallet:v,connectWallet:j}=h.useContext(pl),A=a===N.coreContractChain,$=h.useMemo(()=>n&&(n!=null&&n.channel_settings)?JSON.parse(n==null?void 0:n.channel_settings):null,[n]),b=()=>{m(!c)},F=()=>{m(!1)},C=Zi(),G=async({channelSettings:D,setLoading:R})=>{var we;const B=R||e&&e.setLoading||(()=>{});B(!0);let H=p,X=s;if(!(((we=u==null?void 0:u.accounts)==null?void 0:we.length)>0)){const l=await j();H=l.accounts[0].address,X=new hl(l.provider,"any")}try{let l=n.channel;A||(l=n.alias_address),C.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const Q=await(X==null?void 0:X.getSigner(H)),ye=Fl({settings:D}),ue=Rl(ye);await fl.channels.subscribeV2({signer:Q,channelAddress:en(l,a),userAddress:en(H,a),settings:ue,onSuccess:()=>{x(gl({channelAddress:l,status:!0})),x(ml({channelAddress:l,settings:zl({channelSetting:D})})),r(),C.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted into channel !",toastType:"SUCCESS",getToastIcon:E=>o.jsx(lt,{size:E,color:"green"})})},onError:()=>{console.error("opt in error"),C.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting into channel",toastType:"ERROR",getToastIcon:E=>o.jsx(ze,{size:E,color:"red"})})},env:N.pushNodesEnv})}catch(l){C.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${l.message} )`,toastType:"ERROR",getToastIcon:Q=>o.jsx(ze,{size:Q,color:"red"})}),console.error(l)}finally{B(!1)}};return $&&$.length?o.jsx(Pl,{centerOnMobile:!0,showDropdown:c,toggleDropdown:b,closeDropdown:F,renderDropdownContainer:o.jsx(ys,{settings:$,optInHandler:G}),containerPadding:"0px 16px 16px 16px",children:t}):o.jsx(J,{onClick:G,children:t})},Ss=d.div`
  min-width: 300px;
`,js=d.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${e=>e.hasBottomBorder&&Re`
      border-bottom: 1px solid ${t=>t.theme.settingsModalBorderBottomColor};
    `}
`,Es=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,Cs=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,ks=d.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  min-width: 90px;
  justify-content: center;
  margin: 0px 0px 0px 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  background: #e20880;
  border-radius: 8px;
  padding: 9px 20px;
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
  ${e=>e.disabled&&Re`
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
`,di=d.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,Ts=d.span`
  ${e=>e.hideIt&&Re`
      visibility: hidden;
    `};
`,pi=({channelName:e,channelDescription:t,channelLogoSrc:n,height:i})=>o.jsxs(_s,{style:{borderRadius:i<250?"0.125rem 1rem 1rem 1rem":"1rem 1rem 1rem 0.125rem"},children:[o.jsx(Is,{children:"Channel was recently updated"}),o.jsx(Ds,{children:"Previously"}),o.jsxs(As,{children:[o.jsx(Bs,{children:o.jsx(Os,{src:n})}),o.jsxs($s,{children:[o.jsx(Ms,{children:e}),o.jsx(Ns,{children:t})]})]})]}),_s=d(te)`
  box-sizing: border-box;
  width: 18.75rem;
  // height: 7.5rem;
  // max-height: 7.5rem;
  background: ${e=>e.theme.default.bg};
  // border-radius: 0.125rem 1rem 1rem 1rem;
  justify-content: flex-start;
  border: 1px solid rgba(173, 176, 190, 0.2);
  align-items: flex-start;
  padding: 0.75rem 0.25rem 0.75rem 1rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width:400px){
    width:16.75rem;
  }


`,Is=d(He)`
  color: ${e=>e.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`,Ds=d(He)`
  color: ${e=>e.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
`,As=d(Yt)`
  align-items: center;
  margin-top:8px;
`,Bs=d(Yt)`
  width: 3rem;
  max-width: 2.94rem;
  height: 3rem;
  margin-right:8px;
`,Os=d(ct)`
  height: 100%;
  width: 100%;
  border-radius: 0.6rem;
  border: ${e=>`0.5px solid ${e.theme.tooltipIconBorderClr}`};
`,$s=d(te)`
  align-items: flex-start;
`,Ms=d(He)`
  color: ${e=>e.theme.tooltipContentHeading};
  font-weight: 500;
  font-size: 0.75rem;
  text-align: left;
`,Ns=d(He)`
  color: ${e=>e.theme.tooltipContentDesc};
  font-weight: 300;
  font-size: 9px;
  text-align: left;
  margin-top: 3px;
`,ui=({verifierIcon:e,verifierName:t,height:n})=>{const i=(t==null?void 0:t.length)>15?t.substring(0,15)+"...":t;return o.jsxs(Ls,{style:{width:212+(i&&i.length*2)+"px",borderRadius:n<160?"0.125rem 1rem 1rem 1rem":"1rem 1rem 1rem 0.125rem"},children:[o.jsx(hi,{children:"Verified By:"}),o.jsx(Ps,{src:e}),o.jsx(hi,{children:i})]})},Ls=d(te)`
  box-sizing: border-box;
  height: 37px;
  max-height: 37px;
  background: #131313;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`,hi=d(He)`
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  margin-right: 7px;
`,Ps=d.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 6px;
`;function fi({channelObjectProp:e,loadTeaser:t,playTeaser:n,minimal:i,profileType:r}){var Ji,qi;const a=Qt(),s=he();z(f=>f.userJourney);const{userPushSDKInstance:p}=z(f=>f.user),{epnsReadProvider:u,epnsWriteProvider:c,epnsCommReadProvider:m,pushAdminAddress:x,ZERO_ADDRESS:v}=z(f=>f.contracts),{canVerify:j,channelDetails:A,coreChannelAdmin:$}=z(f=>f.admin),{isAllowNotifModalVisible:b}=z(f=>f.modal),{channelsCache:F,CHANNEL_BLACKLIST:C,CHANNEL_ACTIVE_STATE:G,subscriptionStatus:D,userSettings:R}=z(f=>f.channels),{account:B,provider:H,chainId:X}=Xt(),we=X===N.coreContractChain,[l,Q]=h.useState(e),[ye,ue]=h.useState(!1),[E,tt]=h.useState(!1),[Gt,Ne]=h.useState(0),[ve,g]=h.useState(!1),[S,O]=h.useState(!1),[Se,Le]=h.useState(!1),[je,zc]=h.useState(!1),[Hc,Jl]=h.useState(!1),[M,Vi]=h.useState(null),[Wc,Jt]=h.useState(l.channel),[ee,Vc]=h.useState(0),[nt,ql]=h.useState({}),[W,Uc]=h.useState({}),[Ui,Kc]=h.useState(!1),it=l.verified_status,Gc=l.blocked,qt=Qi(600),Ki=Qi(500),Pe=l.activation_status,Fe=er(),Jc=C.includes(l.channel),[rt,qc]=h.useState(null),Gi=()=>qc(null);h.useEffect(()=>{ue(D[l.channel])},[D]),h.useEffect(()=>{b&&setTimeout(()=>{a(dt({flag:!1}))},1e4)},[b]),h.useEffect(()=>{g(x==B)},[x,B]);const Yc=async()=>{try{return await yl.getInstance().getChannelJsonStartBlockAsync(l.channel)}catch(f){console.error(f)}};h.useEffect(()=>{l.channel&&async function(){const f=await Yc();f&&Uc(f)}()},[l.channel]),h.useEffect(()=>{if(nt&&W){if(Object.keys(nt).length==0||Object.keys(W).length==0)return;let f=!1;["name","icon","info"].forEach(w=>{nt[w]!=W[w]&&(f=!0)}),Kc(f)}},[nt,W]),h.useEffect(()=>{!l||!l.channel||!p||async function(){var f;if(Ne(l.subscriber_count),!l.verified_status)tt(!1);else try{let w=null;if(w=(await u.channels(l.channel)).verifiedBy,F[w])Vi(F[w]);else{let k={};xl((f=bl)==null?void 0:f.pushChannelAdmin,w)?k={name:"Push Admin",icon:"./logo192.png"}:k=await p.channel.info(en(w,N.coreContractChain)),a(wl({address:w,meta:k})),Vi(k)}}catch(w){console.error("Error fetching channel information:",w)}finally{tt(!1)}}()},[B,l,p]);let Ee;we?Ee=l.channel==B:Ee=l.alias_address==B,h.useEffect(()=>{rt&&Gi()},[rt]),m==null||m.address;const Ce=Zi(),Zc=h.useMemo(()=>Bl(R),[R]),Xc=f=>f.length>40?`${vl(f,4,6)}`:f,Qc=()=>{O(!0),c.verifyChannel(l.channel).then(async f=>{console.debug(f),console.info("Transaction Sent!"),Ce.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:w=>o.jsx(lt,{size:w,color:"green"})}),await f.wait(1),console.info("Transaction Mined!"),setIsVerified(!0)}).catch(f=>{console.error("!!!Error verifyChannel() --> %o",f),Ce.showMessageToast({toastTitle:"Error",toastMessage:"There was an error verifying the channel",toastType:"ERROR",getToastIcon:w=>o.jsx(ze,{size:w,color:"red"})})}).finally(()=>{O(!1)})},el=()=>{O(!0),c.unverifyChannel(l.channel).then(async f=>{console.debug(f),console.info("Transaction Sent!"),Ce.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:w=>o.jsx(lt,{size:w,color:"green"})}),await f.wait(1),console.info("Transaction Mined!"),setIsVerified(!1)}).catch(f=>{console.error("!!!Error handleSendMessage() --> %o",f),Ce.showMessageToast({toastTitle:"Error",toastMessage:"There was an error unverifying the channel",toastType:"ERROR",getToastIcon:w=>o.jsx(ze,{size:w,color:"red"})})}),O(!1)},tl=()=>{Le(!0),c.blockChannel(l.channel).then(async f=>{console.debug(f),console.info("Transaction Sent!"),Ce.showMessageToast({toastTitle:"Success",toastMessage:"Transaction Sent!",toastType:"SUCCESS",getToastIcon:w=>o.jsx(lt,{size:w,color:"green"})}),await f.wait(1),console.info("Transaction Mined!")}).catch(f=>{console.error("!!!Error handleSendMessage() --> %o",f),Ce.showMessageToast({toastTitle:"Error",toastMessage:"There was an error blocking the channel",toastType:"ERROR",getToastIcon:w=>o.jsx(ze,{size:w,color:"red"})})}).finally(()=>{Le(!1),setIsBlocked(!0)})},nl=f=>{const w=ot(f,!0);if(navigator&&navigator.clipboard)navigator.clipboard.writeText(w);else{const k=document.createElement("textarea");k.value=w,document.body.appendChild(k),k.select(),document.execCommand("copy"),document.body.removeChild(k)}},ot=(f,w)=>{let k=`${rn.Channels}/${f}`;if(w){let st=window.location.hostname;st==="localhost"&&(st=st+":3000"),k=`${st}${k}`}return k};if(Gc)return o.jsx(o.Fragment,{});if(Jc)return o.jsx(o.Fragment,{});const at=f=>{var k;const w=(k=document.getElementById(l==null?void 0:l.channel))==null?void 0:k.getBoundingClientRect();Vc(w==null?void 0:w.top)},il=()=>{if(ci()==="pending"){let f=localStorage.getItem(tr),w=new Date().getTime()+1*24*60*60*1e3;f?(f=parseInt(f),f>=w&&a(dt({flag:!0}))):a(dt({flag:!0})),localStorage.setItem(tr,w)}};return o.jsxs(Rs,{id:l.channel,minimal:i,border:r=="Profile"?"none":`1px solid ${i?"transparent":s.default.border}`,children:[qt&&o.jsxs(zs,{children:[o.jsx(bi,{minimal:i,children:o.jsx(xi,{children:o.jsx(mi,{minimal:i,children:E?o.jsx(q,{color:s.interfaceSkeleton,height:"100%"}):o.jsx(gi,{src:`${l.iconV2?l.iconV2:l.icon}`})})})}),!i&&o.jsx(yi,{children:E?o.jsx(q,{color:s.interfaceSkeleton,width:"50%",height:24}):o.jsx(vi,{children:o.jsxs(Ws,{children:[o.jsxs(_,{children:[Ui&&o.jsx(pt,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:ee<250?{background:"none",top:"20px",left:Ki?"-100px":"5px"}:{background:"none",bottom:"25px",left:Ki?"-100px":"5px"},tooltipContent:o.jsx(pi,{height:ee,channelName:W.name,channelDescription:W.info,channelLogoSrc:W.icon}),children:o.jsx("div",{onMouseEnter:()=>{at(l.channel)},children:o.jsx(wi,{src:li})})}),o.jsx(_,{onClick:()=>{Fe(ot(l.channel,!1))},children:l.name})]}),it==1&&o.jsxs(_,{margin:"3px 5px 0px",style:{display:"flex"},children:[o.jsx(pt,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:ee<160?{background:"none",top:"20px",left:"7px"}:{background:"none",bottom:"28px",left:"7px"},tooltipContent:o.jsx(ui,{height:ee,verifierIcon:M==null?void 0:M.icon,verifierName:M==null?void 0:M.name}),children:o.jsx("div",{style:{cursor:"pointer"},onMouseEnter:()=>{at(l.channel)},children:o.jsx(cr,{size:18,color:s.viewChannelVerifiedBadge})})}),l&&(l==null?void 0:l.channel)&&o.jsx(_,{padding:"0 0 0 5px",children:o.jsx(ne,{src:P("svg/Ethereum.svg"),alt:"Ethereum",width:"20px",height:"20px"})}),l&&(l==null?void 0:l.alias_address)!=null&&(l==null?void 0:l.alias_address)!="NULL"&&N.allowedNetworks.includes(+(l==null?void 0:l.alias_blockchain_id))&&!tn[+(l==null?void 0:l.alias_blockchain_id)][l==null?void 0:l.channel]&&o.jsx(_,{padding:"0 0 0 5px",children:o.jsx(ne,{src:P(`svg/${(qi=(Ji=ut[+l.alias_blockchain_id])==null?void 0:Ji.label)==null?void 0:qi.split(" ")[0]}.svg`),alt:"Polygon",width:"20px",height:"20px"})})]})]})})})]}),!qt&&o.jsx(o.Fragment,{children:o.jsx(bi,{minimal:i,onClick:()=>{Fe(ot(l.channel,!1))},children:o.jsx(xi,{children:o.jsx(mi,{children:E?o.jsx(q,{color:s.interfaceSkeleton,height:"100%"}):o.jsx(gi,{src:`${l.iconV2?l.iconV2:l.icon}`})})})})}),!i&&o.jsxs(Hs,{children:[!qt&&o.jsx(yi,{children:E?o.jsx(q,{color:s.interfaceSkeleton,width:"50%",height:24}):o.jsx(vi,{children:o.jsxs(_,{style:{display:"flex",alignItems:"center"},children:[Ui&&o.jsx(pt,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:ee<250?{background:"none",top:"20px",left:"5px"}:{background:"none",bottom:"25px",left:"5px"},tooltipContent:o.jsx(pi,{height:ee,channelName:W.name,channelDescription:W.info,channelLogoSrc:W.icon}),children:o.jsx("div",{onMouseEnter:()=>{at(l.channel)},style:{cursor:"pointer"},children:o.jsx(wi,{src:li})})}),o.jsx(_,{onClick:()=>{Fe(ot(l.channel,!1))},children:l.name}),it==1&&o.jsx(_,{margin:"3px 5px 0px",style:{display:"flex"},children:o.jsx(pt,{wrapperProps:{width:"fit-content",maxWidth:"fit-content",minWidth:"fit-content"},placementProps:ee<160?{background:"none",top:"20px",left:"7px"}:{background:"none",bottom:"28px",left:"7px"},tooltipContent:o.jsx(ui,{height:ee,verifierIcon:M==null?void 0:M.icon,verifierName:M==null?void 0:M.name}),children:o.jsx("div",{style:{cursor:"pointer"},onMouseEnter:()=>{at(l.channel)},children:o.jsx(cr,{size:18,color:s.viewChannelVerifiedBadge})})})}),l&&(l==null?void 0:l.channel)&&o.jsx(_,{padding:"0 0 0 5px",children:o.jsx(ne,{src:P("svg/Ethereum.svg"),alt:"Ethereum",width:"20px",height:"20px"})}),l&&(l==null?void 0:l.alias_address)!=null&&(l==null?void 0:l.alias_address)!="NULL"&&N.allowedNetworks.includes(+(l==null?void 0:l.alias_blockchain_id))&&!tn[+(l==null?void 0:l.alias_blockchain_id)][l==null?void 0:l.channel]&&o.jsx(_,{padding:"0 0 0 5px",children:o.jsx(ne,{src:P(`svg/${nn[+l.alias_blockchain_id]}`),alt:"Alias Chain Logo",width:"20px",height:"20px"})})]})})}),o.jsx(Vs,{children:E?o.jsxs(o.Fragment,{children:[o.jsx(qe,{atH:5,atW:100,children:o.jsx(q,{color:s.interfaceSkeleton,width:"100%",height:5})}),o.jsx(qe,{atH:5,atW:100,children:o.jsx(q,{color:s.interfaceSkeleton,width:"100%",height:5})}),o.jsx(qe,{atH:5,atW:100,children:o.jsx(q,{color:s.interfaceSkeleton,width:"40%",height:5})})]}):o.jsx(Us,{children:l.info})}),o.jsx(Ks,{children:E?o.jsx(o.Fragment,{children:o.jsx(qe,{atH:10,atW:30,marginBottom:"0",children:o.jsx(q,{color:s.interfaceSkeleton})})}):o.jsx(fe,{align:"center",justify:"flex-start",margin:"0px -5px",children:o.jsxs(Gs,{children:[o.jsx(zt,{externalIcon:o.jsx(ne,{src:P("svg/users.svg"),alt:"users",width:"14px",height:"14px"}),internalIcon:null,text:Gt,padding:"5.3px 10px",bgColor:s.viewChannelSecondaryBG,color:s.viewChannelSecondaryText}),o.jsx(zt,{text:Xc(Wc),bgColor:s.viewChannelSearchBg,padding:"6px 16px",color:s.viewChannelPrimaryText,onClick:()=>{nl(l.channel),Jt("copied")},onMouseEnter:()=>{Jt("click to copy")},onMouseLeave:()=>{Jt(l.channel)}}),r==="Profile"&&o.jsxs(Xs,{active:Pe,children:[Pe===0&&o.jsx(ct,{width:"12px",src:Ml,margin:"0 5px 2px 0px",height:"30px"}),Pe===1?"Active":"Deactivated"]}),xs(l.channel)&&o.jsx(bs,{addr:l.channel,bgColor:s.viewChannelSearchBg,loadTeaser:t,playTeaser:n})]})})})]}),!!B&&!!H&&!i&&o.jsxs(o.Fragment,{children:[o.jsx(Js,{}),o.jsxs(qs,{children:[E&&o.jsx(Ys,{children:o.jsx(q,{color:s.interfaceSkeleton})}),!E&&ve&&r=="Channel"&&o.jsxs(Ht,{onClick:tl,disabled:Se,children:[Se&&o.jsx($e,{children:o.jsx(ie,{type:re.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),o.jsx(Oe,{hideit:Se,children:"Block channel"})]}),!E&&(ve||j)&&!it&&r=="Channel"&&o.jsxs(Ht,{onClick:Qc,disabled:S,children:[S&&o.jsx($e,{children:o.jsx(ie,{type:re.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),o.jsx(Oe,{hideit:S,children:"Verify Channel"})]}),!E&&(ve||Hc)&&it&&r=="Channel"&&o.jsxs(ji,{onClick:el,disabled:S,children:[S&&o.jsx($e,{children:o.jsx(ie,{type:re.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),o.jsx(Oe,{hideit:S,children:"Unverify Channel"})]}),!E&&!ye&&o.jsxs(o.Fragment,{children:[Ee&&o.jsx(o.Fragment,{children:r=="Profile"?o.jsx(Ci,{onClick:()=>Fe("/dashboard"),children:"Go To Dashboard"}):o.jsx(Ei,{disabled:!0,children:"Owner"})}),!Ee&&Pe!==0&&o.jsx(vs,{channelDetail:l,setLoading:zc,onSuccessOptin:()=>{il()},children:o.jsxs(Ht,{onClick:()=>{},disabled:je,className:"optin",children:[je&&o.jsx($e,{children:o.jsx(ie,{type:re.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),o.jsx(Oe,{hideit:je,children:"Opt-In"})]})})]}),!E&&ye&&Pe!==0&&o.jsxs(o.Fragment,{children:[Ee&&o.jsx(o.Fragment,{children:r=="Profile"?o.jsx(Ci,{onClick:()=>Fe("/dashboard"),children:"Go To Dashboard"}):o.jsx(Ei,{disabled:!0,children:"Owner"})}),!Ee&&o.jsx(Hl,{centerOnMobile:!0,channelDetail:l,setSubscribed:ue,userSetting:Zc[l.channel],setSubscriberCount:Ne,onSuccessOptout:()=>{ue(!1),Ne(f=>f-1)},children:o.jsxs(ji,{onClick:()=>{},disabled:je,children:[je&&o.jsx($e,{children:o.jsx(ie,{type:re.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"})}),o.jsx(Oe,{hideit:je,children:"Manage"}),o.jsx(ct,{alt:"arrow",src:P("svg/arrow.svg"),height:"10px",width:"12px"})]})})]})]})]}),rt&&o.jsx(Nl,{notification:rt,clearToast:Gi}),b&&o.jsx(us,{onModalClose:()=>a(dt({flag:!1}))})]},l.channel)}const Fs=d.div`
  display: flex;
`;d(Fs)`
  flex-direction: column;
`;const Rs=d.div`
  // flex: 1;
  display: flex;
  flex-wrap: nowrap;
  border: ${e=>e.border};
  border-bottom: none;
  border-left: none;
  border-right: none;
  margin: 0px 5px;
  justify-content: center;
  padding: ${e=>e.minimal?"5px 0px":"25px 10px"};
  align-self: stretch;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${e=>e.minimal?"transparent":e.theme.default.border};
    border-top: none;
    border-left: none;
    border-right: none;
  }
`,qe=d.div`
  overflow: hidden;
  width: ${e=>e.atW+"%"||"100%"};
  height: ${e=>e.atH}px;
  border-radius: ${e=>e.borderRadius||10}px;
  margin-bottom: ${e=>e.marginBottom||5}px;
  margin-right: ${e=>e.marginRight||0}px;
`,gi=d.img`
  object-fit: contain;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`,mi=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: ${e=>e.minimal?"10px":"20px"};
  display: flex;
  justify-content: center;
  align-items: center;
`,xi=d.div`
  padding-top: 100%;
  width: 100%;
  position: relative;
`,bi=d(Zt)`
  max-width: 100px;
  min-width: 48px;
  flex: 1;
  margin: 5px;
  padding: ${e=>e.minimal?"5px":"10px"};
  border: 1px solid ${e=>e.theme.viewChannelIconBorder};
  background: transparent;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;

  @media (max-width: 768px) {
    align-self: center;
    min-width: ${e=>e.minimal?"48px":"100px"};
    max-width: ${e=>e.minimal?"48px":"100px"};
    min-height: ${e=>e.minimal?"48px":"100px"};
  }

  @media (max-width: 600px) {
    align-self: center;
  }
`,zs=d.div`
  display: flex;
`,wi=d.img`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`,Hs=d.div`
  flex: 1;
  margin: 5px 10px;
  min-width: 240px;
  flex-grow: 4;
  flex-direction: column;
  display: flex;

  @media (max-width: 480px) {
    min-width: 210px;
  }
`;d.div`
  word-break: break-word;

  @media (max-width: 768px) {
    text-align: center;
  }
`;const yi=d(fe)`
  padding: 5px 10px 5px 0px;
  position: relative;
  justify-content: flex-start;
  margin: 0;
  flex: initial;
  align-items: center;
  @media (max-width: 768px) {
    align-self: center;
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    flex: 5;
    padding-left: 5px;
  }
`,vi=d.a`
  text-decoration: none;
  display: flex;
  flex: inherit;
  align-item: center;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    pointer: hand;
  }

  & > span > span {
    font-weight: 500;
    color: ${e=>e.theme.viewChannelLink};
    font-size: 18px;
    cursor: pointer;
  }

  & > span > span {
    vertical-align: middle;
  }
`,Ws=d(_)`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    align-items: baseline;
    flex-direction: column;
  }
  & > span > span {
    font-weight: 500;
    color: ${e=>e.theme.viewChannelLink};
    font-size: 18px;
    cursor: pointer;
  }
`;d.span`
  color: #ec008c;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
`,d.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 4px;
`,d.span`
  font-weight: 400;
  color: ${e=>e.theme.color};
  font-size: 16px;
  letter-spacing: 0em;
  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;const Vs=d.div`
  flex: 1;
  display: flex;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.75);
  padding: 5px 0px 10px 0px;
  font-weight: 400;
  flex-direction: column;
  color: ${e=>e.theme.color};
  @media (max-width: 768px) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 600px) {
    align-self: flex-start;
    text-align: left;
  }
`,Us=d.label`
  flex: 1;
  line-height: 165%;
  color: ${e=>e.theme.viewChannelPrimaryTextColor};
`,Ks=d.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 5px 0px;
  font-size: 13px;
  @media (max-width: 768px) {
    align-self: center;
  }
`,Gs=d.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    align-self: center;
    justify-content: center;
  }
`,Si=d.label`
  margin: 0px 5px;
  color: #fff;
  font-weight: 600;
  padding: 5px 10px;
  display: flex;
  border-radius: 10px;
  font-size: 11px;
  gap: 3px;
`;d.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${Xi.laptopL} {
    padding-top: 1rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-self: center;
    text-align: center;
    align-items: center;
  }
`,d(Si)`
  background: ${e=>e.theme.viewChannelSecondaryBG};
  transition: 300ms;
`,d.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,d(Si)`
  background: #674c9f;
`;const Js=d.div`
  display: none;
  flex-basis: 100%;
  height: 0;

  @media ${Xi.tablet} {
    display: block;
  }
`,qs=d.div`
  margin: 5px;
  flex: 0;
  // max-width: 250px;
  display: flex;
  justify-content: center;
  // justify-content: center;
  align-items: center;
  gap: 24px;
  @media (max-width: 768px) {
    align-self: center;
  }
`,Ye=d.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
  ${e=>e.disabled&&Re`
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
`,Oe=d.span`
  font-weight: 500;
  font-size: 14px;

  ${e=>e.hideit&&Re`
      visibility: hidden;
    `};
`,$e=d.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ys=d.div`
  border: 0;
  outline: 0;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 5px;
  flex: 1;
`,Ht=d(Ye)`
  background: #e20880;
  color: #fff;
  border-radius: 8px;
  padding: 0px;
  min-height: 36px;
  min-width: 108px;
`,ji=d(Ye)`
  background: transparent;
  color: ${e=>e.theme.viewChannelPrimaryText};
  border: 1px solid #bac4d6;
  border-radius: 8px;
  padding: 0px 8px 0px 16px;
  gap: 8px;
  min-height: 36px;
  min-width: 108px;
`,Ei=d(Ye)`
  background: #35c5f3;
  border-radius: 8px;
  min-height: 36px;
  min-width: 108px;
`,Ci=d(Ye)`
  background: #e20880;
  border-radius: 8px;
  padding: 7px 14px;
  min-height: 36px;
  min-width: max-content;
`;d.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`,d.div`
  margin: 0px 10px;
`;const Zs=d.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px 8px;
  border-radius: 25px;
  height: 26px;
  background-color: pink;
  font-family: Strawford, Source Sans Pro;
`,Xs=d(Zs)`
  color: #2dbd81;
  color: ${e=>e.active?"#2DBD81":"#E93636"};
  background-color: ${e=>e.active?"#c6efd1":"#FFD8D8"};
  margin-left: 10px;
  ${e=>e.active&&`
        &::before {
            width:16px;
            height:16px;
            background: #2DBD81;
            border-radius: 50%;
            content: "";
            display: inline-flex;
            align-items: center;
            margin-right: 6px;
        }
    `}
`,Qs=20,ec=({channelID:e,loadTeaser:t,playTeaser:n,minimal:i,profileType:r})=>{const{userPushSDKInstance:a}=z(b=>b.user),s=he(),[p,u]=h.useState(!0),[c,m]=h.useState(!0),[x,v]=h.useState([]),[j,A]=h.useState(null),$=er();return h.useEffect(()=>{A(null),a&&(u(!0),(async()=>{try{const b=await a.channel.info(e);A(b),u(!1)}catch(b){console.log("Error",b),u(!1)}})())},[e,a]),h.useEffect(()=>(a&&(u(!0),a.channel.notifications(e,{page:1,limit:Qs}).then(b=>{console.log(b),v(b.notifications),m(!1)}).catch(b=>{console.error("Error >>>>",b),m(!1)})),()=>{v([]),m(!0)}),[e,a]),o.jsxs(tc,{children:[o.jsx(nc,{flex:"initial",alignItems:"flex-start",padding:"0px",children:o.jsx(pr,{onClick:()=>{$(rn.Channels)}})}),o.jsxs(o.Fragment,{children:[j&&!p&&o.jsx(fi,{channelObjectProp:j,loadTeaser:t,playTeaser:n,minimal:i,profileType:r}),!p&&o.jsxs(oc,{children:[o.jsx(J,{fontSize:"20px",fontWeight:"500",color:s.color,children:"Recent Notifications"}),o.jsx(ac,{color:s.color,children:"Showing preview of the latest non-encrypted notifications sent by the channel."})]}),o.jsxs(rc,{children:[c&&o.jsx(ie,{type:re.SEAMLESS,spinnerSize:40}),!x.length&&!c&&o.jsx("div",{style:{textAlign:"center"},children:o.jsx(sr,{title:"You currently have no notifications, try subscribing to some channels."})}),x.map((b,F)=>{const C=b.message.payload;return o.jsx(ic,{children:o.jsx(Sl,{notificationTitle:C.title,notificationBody:C.body,cta:C.cta,image:C.embed,app:b.channel.name,icon:b.channel.icon,url:b.channel.url,chainName:b.source,theme:s.scheme})},`${b.payload_id}`)})]})]})]})},tc=d.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  font-weight: 200;
  margin: 20px 0px 0px 20px;

  @media ${ke.tablet} {
    overflow-y: auto;
    margin: 20px 10px 0px 10px;
  }
`,nc=d(te)`
  @media ${ke.tablet} {
    position: absolute;
    z-index: 1;
    padding: 10px;
    backdrop-filter: blur(4px);
    top: 0;
    left: 0;
    right: 0;
  }
`,ic=d.div``,rc=d(te)`
  display: flex;
  align-self: stretch;
  align-items: stretch;
  justify-content: stretch;
  flex-wrap: nowrap;

  flex: 1;
  padding: 0px 20px 10px 0px;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: ${e=>e.theme.scrollBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    background-color: ${e=>e.theme.scrollBg};
    width: 6px;
  }

  @media ${ke.tablet} {
    padding: 0px 20px;
    overflow-y: visible;

    &::-webkit-scrollbar-track {
      background-color: none;
      border-radius: 9px;
    }

    &::-webkit-scrollbar {
      background-color: none;
      width: 4px;
    }
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.44, #cf1c84),
      color-stop(0.72, #cf1c84),
      color-stop(0.86, #cf1c84)
    );
  }
`,oc=d(te)`
  flex: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  align-items: baseline;
  margin: 7px 20px 24px 5px;
`,ac=d(J)`
  font-size: 0.8em;
`;var sc=!!(typeof window<"u"&&window.document&&window.document.createElement);function cc(){if(!sc||!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){function i(){e=!0}return i}()}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch{}return e}var Wt=void 0;function lc(){return Wt===void 0&&(Wt=cc()),Wt}function dc(e){if(e)return lc()?e:!!e.capture}function pc(e){if(!e)return 0;if(e===!0)return 100;var t=e.capture<<0,n=e.passive<<1,i=e.once<<2;return t+n+i}function ki(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function Ze(e){this.target=e,this.events={}}Ze.prototype.getEventHandlers=function(){function e(t,n){var i=String(t)+" "+String(pc(n));return this.events[i]||(this.events[i]={handlers:[],handleEvent:void 0},this.events[i].nextHandlers=this.events[i].handlers),this.events[i]}return e}(),Ze.prototype.handleEvent=function(){function e(t,n,i){var r=this.getEventHandlers(t,n);r.handlers=r.nextHandlers,r.handlers.forEach(function(a){a&&a(i)})}return e}(),Ze.prototype.add=function(){function e(t,n,i){var r=this,a=this.getEventHandlers(t,i);ki(a),a.nextHandlers.length===0&&(a.handleEvent=this.handleEvent.bind(this,t,i),this.target.addEventListener(t,a.handleEvent,i)),a.nextHandlers.push(n);var s=!0,p=function(){function u(){if(s){s=!1,ki(a);var c=a.nextHandlers.indexOf(n);a.nextHandlers.splice(c,1),a.nextHandlers.length===0&&(r.target&&r.target.removeEventListener(t,a.handleEvent,i),a.handleEvent=void 0)}}return u}();return p}return e}();var Vt="__consolidated_events_handlers__";function Ti(e,t,n,i){e[Vt]||(e[Vt]=new Ze(e));var r=dc(i);return e[Vt].add(t,n,r)}function uc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hc(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function fc(e,t,n){return t&&hc(e.prototype,t),e}function gc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ut(e,t)}function Xe(e){return Xe=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Xe(e)}function Ut(e,t){return Ut=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},Ut(e,t)}function mc(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function xc(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bc(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:xc(e)}function wc(e){var t=mc();return function(){var n=Xe(e),i;if(t){var r=Xe(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return bc(this,i)}}function yc(e){if(e.slice(-1)==="%")return parseFloat(e.slice(0,-1))/100}function vc(e){if(!isNaN(parseFloat(e))&&isFinite(e))return parseFloat(e);if(e.slice(-2)==="px")return parseFloat(e.slice(0,-2))}function _i(e,t){var n=vc(e);if(typeof n=="number")return n;var i=yc(e);if(typeof i=="number")return i*t}var Qe="above",me="inside",et="below",Kt="invisible";function Ii(e){return typeof e.type=="string"}var Sc=`<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.

See https://goo.gl/LrBNgw for more info.`;function jc(e,t){if(e&&!Ii(e)&&!t)throw new Error(Sc)}function Ec(e){return e.viewportBottom-e.viewportTop===0?Kt:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?me:e.viewportBottom<e.waypointTop?et:e.waypointTop<e.viewportTop?Qe:Kt}var xe,Me=[];function Di(e){Me.push(e),xe||(xe=setTimeout(function(){xe=null;for(var n;n=Me.shift();)n()},0));var t=!0;return function(){if(t){t=!1;var n=Me.indexOf(e);n!==-1&&(Me.splice(n,1),!Me.length&&xe&&(clearTimeout(xe),xe=null))}}}function Cc(e){return e==="window"?globalThis.window:e}let Ai;Ai={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},V=function(e){gc(n,e);var t=wc(n);function n(i){var r;return uc(this,n),r=t.call(this,i),r.refElement=function(a){r._ref=a},r}return fc(n,[{key:"componentDidMount",value:function(){var i=this;n.getWindow()&&(this.cancelOnNextTick=Di(function(){i.cancelOnNextTick=null;var r=i.props,a=r.children;r.debug,jc(a,i._ref),i._handleScroll=i._handleScroll.bind(i),i.scrollableAncestor=i._findScrollableAncestor(),i.scrollEventListenerUnsubscribe=Ti(i.scrollableAncestor,"scroll",i._handleScroll,{passive:!0}),i.resizeEventListenerUnsubscribe=Ti(window,"resize",i._handleScroll,{passive:!0}),i._handleScroll(null)}))}},{key:"componentDidUpdate",value:function(){var i=this;n.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=Di(function(){i.cancelOnNextTick=null,i._handleScroll(null)})))}},{key:"componentWillUnmount",value:function(){n.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var i=this.props,r=i.horizontal,a=i.scrollableAncestor;if(a)return Cc(a);for(var s=this._ref;s.parentNode;){if(s=s.parentNode,s===document.body)return window;var p=window.getComputedStyle(s),u=r?p.getPropertyValue("overflow-x"):p.getPropertyValue("overflow-y"),c=u||p.getPropertyValue("overflow");if(c==="auto"||c==="scroll"||c==="overlay")return s}return window}},{key:"_handleScroll",value:function(i){if(this._ref){var r=this._getBounds(),a=Ec(r),s=this._previousPosition,p=this.props;p.debug;var u=p.onPositionChange,c=p.onEnter,m=p.onLeave,x=p.fireOnRapidScroll;if(this._previousPosition=a,s!==a){var v={currentPosition:a,previousPosition:s,event:i,waypointTop:r.waypointTop,waypointBottom:r.waypointBottom,viewportTop:r.viewportTop,viewportBottom:r.viewportBottom};u.call(this,v),a===me?c.call(this,v):s===me&&m.call(this,v);var j=s===et&&a===Qe,A=s===Qe&&a===et;x&&(j||A)&&(c.call(this,{currentPosition:me,previousPosition:s,event:i,waypointTop:r.waypointTop,waypointBottom:r.waypointBottom,viewportTop:r.viewportTop,viewportBottom:r.viewportBottom}),m.call(this,{currentPosition:a,previousPosition:me,event:i,waypointTop:r.waypointTop,waypointBottom:r.waypointBottom,viewportTop:r.viewportTop,viewportBottom:r.viewportBottom}))}}}},{key:"_getBounds",value:function(){var i=this.props,r=i.horizontal;i.debug;var a=this._ref.getBoundingClientRect(),s=a.left,p=a.top,u=a.right,c=a.bottom,m=r?s:p,x=r?u:c,v,j;this.scrollableAncestor===window?(v=r?window.innerWidth:window.innerHeight,j=0):(v=r?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,j=r?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var A=this.props,$=A.bottomOffset,b=A.topOffset,F=_i(b,v),C=_i($,v),G=j+v;return{waypointTop:m,waypointBottom:x,viewportTop:j+F,viewportBottom:G-C}}},{key:"render",value:function(){var i=this,r=this.props.children;if(!r)return Te.createElement("span",{ref:this.refElement,style:{fontSize:0}});if(Ii(r)||jl.isForwardRef(r)){var a=function(s){i.refElement(s),r.ref&&(typeof r.ref=="function"?r.ref(s):r.ref.current=s)};return Te.cloneElement(r,{ref:a})}return Te.cloneElement(r,{innerRef:this.refElement})}}]),n}(Te.PureComponent),V.above=Qe,V.below=et,V.inside=me,V.invisible=Kt,V.getWindow=function(){if(typeof window<"u")return window},V.defaultProps=Ai,V.displayName="Waypoint";const Bi=({channelsNetworkId:e,setChannelsNetworkId:t})=>{var c;const n=he(),i=h.useRef(null),r=h.useRef(null),[a,s]=h.useState(!1),[p,u]=h.useState([]);return nr(i,r,()=>{s(!1)}),h.useEffect(()=>{const m=[];N.allowedNetworks.map(x=>{m.push({id:x,value:ut[x].label,title:ut[x].label,icon:P(`svg/${nn[x]}`),function:()=>{t(x),s(!1)}})}),u(m)},[N]),o.jsxs(kc,{children:[o.jsxs(_c,{color:n.viewChannelSearchText,onClick:()=>s(!a),ref:i,children:[o.jsx(fe,{padding:"0 8px 0 0",children:o.jsx(ne,{src:P(`svg/${nn[e]}`),alt:"active chain",width:"32px",height:"32px"})}),o.jsx(L,{width:"max-content",className:"text",children:(c=ut[e])==null?void 0:c.label}),o.jsx(Ic,{children:o.jsx("img",{alt:"arrow",className:`${a?"down":"up"}`,src:P("svg/arrow.svg")})})]}),a&&o.jsx(Tc,{ref:r,bg:n.default.secondaryBg,border:`1px solid ${n.snackbarBorderColor}`,radius:"24px",align:"flex-start",padding:"7px 20px 7px 14px",position:"absolute",top:"0rem",zIndex:"10",right:"-0.5rem",children:o.jsx(ir,{dropdownValues:p})})]})},kc=d.button`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
  justify-content: flex-start;
  flex: 1;
  flex-direction: row;
  align-items: center;
  display: flex;
`,Tc=d(L)`
  background: ${e=>e.theme.default.secondaryBg};
  border: 1px solid;
  border-color: ${e=>e.theme.snackbarBorderColor};
  border-radius: 24px;
  align-items: flex-start;
  padding: 7px 20px 7px 14px;
  position: absoltue;
  top: 0rem;
  z-index: 10;
  right: -0.5rem;

  @media (max-width: 768px) {
    right: 0px;
  }
`,_c=d.span`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border: 1px solid ${e=>e.theme.faucetBorder};
  font-size: 15px;
  background: ${e=>e.theme.faucetBg};
  color: ${e=>e.theme.faucetText};
  border-radius: 20px;
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
  @media (max-width: 768px) {
    border-radius: 37px;
    height: 45px;
    padding: 2px 10px;
  }
  .text {
    display: flex;
    color: ${e=>e.theme.faucetText};
    @media (max-width: 600px) {
      display: none;
    }
  }
`,Ic=d.div`
  margin-left: 1rem;
  filter: ${e=>e.theme.faucetFilter};

  @media (max-width: 600px) {
    margin-left: 0rem;
  }

  &:hover {
    cursor: pointer;
  }
  .down {
    transform: rotate(-180deg);
    transition: transform 0.25s;
  }

  .up {
    transform: rotate(-360deg);
    transition: transform 0.25s;
  }
`,Dc=()=>{const e=he(),t=h.useRef(null),n=h.useRef(null),[i,r]=Te.useState(!1);nr(t,n,()=>{r(!1)});const a=[{id:"11155111",value:"Sepolia",title:"Sepolia Faucet",function:()=>{},link:"https://sepoliafaucet.com/"},{id:"80002",value:"Polygon",title:"Amoy Faucet",function:()=>{},link:"https://faucet.polygon.technology/"},{id:"97",value:"BNB",title:"BNB Faucet",function:()=>{},link:"https://testnet.bnbchain.org/faucet-smart"},{id:"11155420",value:"Optimism",title:"Optimism Sepolia Faucet",function:()=>{},link:"https://faucet.quicknode.com/optimism/sepolia"},{id:"2442",value:"Polygon zkEVM",title:"Polygon zkEVM Bridge",function:()=>{},link:"https://faucet.polygon.technology/"},{id:"421614",value:"Arbitrum",title:"Arbitrum Testnet Faucet",function:()=>{},link:"https://faucet.quicknode.com/arbitrum/sepolia"},{id:"123",value:"Fuse",title:"Fuse Sparknet Faucet",function:()=>{},link:"https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},{id:"111557560",value:"Cyber",title:"Cyber Faucet",function:()=>{},link:"https://cyber-testnet.testnets.rollbridge.app/"}];return o.jsxs(Ac,{children:[o.jsxs(Oc,{color:e.viewChannelSearchText,onClick:()=>r(!i),ref:t,children:[o.jsx(Bc,{children:o.jsx(ne,{src:P("svg/gasPump.svg"),alt:"faucet",width:"32px",height:"32px"})}),"Testnet Faucets",o.jsx($c,{children:o.jsx("img",{alt:"arrow",className:`${i?"down":"up"}`,src:P("svg/arrow.svg")})})]}),i&&o.jsx(L,{ref:n,bg:e.default.secondaryBg,border:`1px solid ${e.snackbarBorderColor}`,radius:"24px",align:"flex-start",padding:"7px 14px 7px 14px",position:"absolute",top:"0rem",zIndex:"10",right:"-0.5rem",children:o.jsx(ir,{dropdownValues:a})})]})},Ac=d.button`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
  min-width: 230px;

  @media (max-width: 768px) {
    width: 100%;
    // padding: 0 0px 0px 0px;
  }
`,Bc=d.div`
  padding: 0 20px 0 0px;
`,Oc=d.div`
  margin: 0px 10px;
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border: 1px solid ${e=>e.theme.faucetBorder};
  font-size: 15px;
  background: ${e=>e.theme.faucetBg};
  color: ${e=>e.theme.faucetText};
  border-radius: 20px;
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

  @media (max-width: 768px) {
    border-radius: 37px;
    flex: 1;
    justify-content: flex-start;
  }
`,$c=d.div`
  margin-left: auto;
  filter: ${e=>e.theme.faucetFilter};
  &:hover {
    cursor: pointer;
  }
  .down {
    transform: rotate(-180deg);
    transition: transform 0.25s;
  }

  .up {
    transform: rotate(-360deg);
    transition: transform 0.25s;
  }
`,be=10,Mc=5,Nc=500,Oi=10;function Lc({loadTeaser:e,playTeaser:t,minimal:n}){const i=Qt(),{userPushSDKInstance:r}=z(g=>g.user),{account:a,chainId:s}=Xt(),{channels:p,page:u,ZERO_ADDRESS:c}=z(g=>g.channels),{run:m,stepIndex:x}=z(g=>g.userJourney),[v,j]=h.useState(!1),[A,$]=h.useState(!1),[b,F]=h.useState(""),[C,G]=h.useState(1),[D,R]=h.useState([]),[B,H]=h.useState(!1),[X,we]=h.useState(0),[l,Q]=h.useState(s),ye=u*be;h.useEffect(()=>{j(!p.length),r&&E()},[a,s,r]),h.useEffect(()=>{Q(s),r&&E()},[s]);const ue=()=>{if(!(v||A)){if($(!0),b&&r){Gt();return}i(rr()),tt(u+1)}},E=async()=>{try{let g={page:Math.ceil(ye/be)||1,limit:be};if(!p.length){const S=await r.channel.list({options:g});i(rr()),i(or(S==null?void 0:S.channels))}m&&x===3&&(i(ar()),i(ar())),j(!1)}catch(g){console.error(g)}},tt=async g=>{const S=g*be;try{const O=await r.channel.list({page:Math.ceil(S/be)||1,limit:be});i(or([...p,...O==null?void 0:O.channels])),$(!1)}catch(O){console.error(O)}},Gt=async()=>{try{const g=await r.channel.search(b,{limit:Oi,page:C});g&&g.length>0&&(R([...D,...g]),G(S=>S+1)),$(!1)}catch(g){console.error(g)}},Ne=g=>b?Number(g)===D.length-1:Number(g)===p.length-1;h.useEffect(()=>{p.length&&R(p)},[p]);async function ve(){if(r&&!B)if(b){H(!0),R([]);try{const g=await r.channel.search(b,{limit:Oi,page:C});R(g||[]),g&&g.length>0&&G(S=>S+1),H(!1)}catch(g){console.error(g),X<Mc?(we(S=>S+1),ve()):(R(p),F(""),H(!1))}}else H(!1),F(""),R(p)}return h.useEffect(()=>{const g=setTimeout(ve,Nc);return()=>{clearTimeout(g)}},[b]),h.useEffect(()=>{!a||!r||async function(){const g=await r.notification.subscriptions(),S={},O={};g.map(({channel:Se,user_settings:Le})=>{S[Se]=!0,O[Se]=Le?JSON.parse(Le):null}),i(El(S)),i(Cl(O))}()},[a,r]),o.jsxs(Mi,{minimal:n,children:[!v&&!n&&o.jsxs($i,{children:[o.jsxs(Fc,{children:[o.jsxs(Ri,{flex:"1",children:[o.jsx(Pc,{type:"text",value:b,onChange:g=>{G(1),F(g.target.value)},className:"input",placeholder:`Search by Name or ${a==null?void 0:a.slice(0,6)}`}),o.jsx(L,{position:"absolute",top:"0",bottom:"0",left:"12px",children:o.jsx(kl,{size:20,style:{color:"#657795"}})})]}),on.isMainnet(s)&&o.jsx(L,{flex:"1",children:o.jsx(Bi,{channelsNetworkId:l,setChannelsNetworkId:Q})})]}),o.jsxs(Rc,{children:[N.allowedNetworks.length>1&&!on.isMainnet(s)&&o.jsx(L,{flex:"1",children:o.jsx(Bi,{channelsNetworkId:l,setChannelsNetworkId:Q})}),!on.isMainnet(s)&&o.jsx(Dc,{})]})]}),o.jsxs(an,{id:"scroll",minimal:n,children:[o.jsx("div",{children:(b?D:p).map((g,S)=>g&&g.channel!==c&&o.jsxs("div",{children:[o.jsx(Li,{self:"stretch",children:!Tl[g.channel]&&g&&(l==N.coreContractChain||l==g.alias_blockchain_id&&!tn[l][g.channel])&&o.jsx(fi,{channelObjectProp:g,loadTeaser:e,playTeaser:t,minimal:n,profileType:zi.CHANNEL})},g.channel),Ne(S)&&o.jsx(V,{onEnter:ue})]},g.channel))}),b&&!(D!=null&&D.length)&&!B&&o.jsx(Pi,{children:o.jsx(sr,{title:"No channels match your query, please search for another name/address"})}),(A&&p.length||v||B)&&o.jsx(Fi,{children:o.jsx(ie,{type:re.SEAMLESS,spinnerSize:n?24:42})})]})]})}const Pc=d.input`
  width: 100%;
  padding: 13px 40px;
  border: 1px solid;
  border-color: ${e=>e.theme.viewChannelSearchBg};
  background: ${e=>e.theme.viewChannelSearchBg};
  color: ${e=>e.theme.viewChannelSearchText};
  box-sizing: border-box;
  border-radius: 99px;
  text-transform: none;
  font-size: 16px;
  font-weight: 400;

  input[type='reset'] {
    display: none;
  }
  &::placeholder {
    letter-spacing: -0.019em;
    color: #657795;
  }
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
  &:focus {
    border: 1px solid #ec008c;
  }
`,Fc=d.div`
  // width: 100%;
  width: -webkit-fill-available;
  padding: 10px 0px;
  display: flex;
  flex-direction: row important!;
  // justify-content: space-evenly;
  @media (max-width: 768px) {
    padding: 10px 4px 10px 10px;
  }
`,Rc=d.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    padding-right: 10px;
  }
`;d.img`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;let $i,Mi,Ni,Li,Pi,Fi,Ri;$i=d.div`
  padding: 5px 15px 10px 20px;
  // width: 100%;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px 0px 0px 0px;
  }
`,Mi=d.div`
  display: flex;
  flex: ${e=>e.minimal?0:1};
  flex-direction: column;
  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;
  max-height: 100vh;

  @media (max-width: 768px) {
    display: ${e=>e.minimal?"none":"flex"};
  }
`,Ni=d.div`
  padding: 20px;
`,Li=d.div`
  align-self: stretch;
  // position: absolute;
  // top: 70px;
`,Pi=d.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Fi=d(Ni)`
  width: fit-content;
  align-self: center;
`,an=d(L)`
  display: flex;
  align-self: stretch;
  align-items: stretch;
  justify-content: stretch;
  flex-wrap: nowrap;

  flex: 1;
  padding: ${e=>e.minimal?"20px 10px":"0px 20px 10px 20px"};
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: ${e=>e.theme.scrollBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    background-color: ${e=>e.theme.scrollBg};
    width: 6px;
  }

  @media (max-width: 768px) {
    padding: ${e=>e.minimal?"10px 5px":"0px"};

    &::-webkit-scrollbar-track {
      background-color: none;
      border-radius: 9px;
    }

    &::-webkit-scrollbar {
      background-color: none;
      width: 4px;
    }
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.44, #cf1c84),
      color-stop(0.72, #cf1c84),
      color-stop(0.86, #cf1c84)
    );
  }
`,Ri=d(L)`
  width: 100%;
  margin-right: 10px;
`;var zi=(e=>(e.CHANNEL="Channel",e.CHANNEL_PROFILE="Profile",e))(zi||{});let Hi,Wi;lr=({channelID:e,loadTeaser:t,playTeaser:n})=>(_l.pageview(rn.Channels),o.jsx(Hi,{children:o.jsxs(Wi,{children:[o.jsx(Lc,{loadTeaser:t,playTeaser:n,minimal:!!e}),e&&o.jsx(ec,{channelID:e,loadTeaser:t,playTeaser:n,minimal:!1,profileType:"Profile"})]})})),Hi=d.div`
  align-items: stretch;
  align-self: stretch;
  flex: 1;
  background: ${e=>e.theme.default.bg};
  border-top-left-radius: ${I.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${I.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${I.ADJUSTMENTS.MARGIN.BIG_MODULES.DESKTOP};
  height: calc(
    100vh - ${I.CONSTANTS.HEADER_HEIGHT}px - ${_e.BIG_MODULES.DESKTOP.TOP} -
      ${_e.BIG_MODULES.DESKTOP.BOTTOM}
  );

  @media ${ke.laptop} {
    margin: ${I.ADJUSTMENTS.MARGIN.BIG_MODULES.TABLET};
    height: calc(
      100vh - ${I.CONSTANTS.HEADER_HEIGHT}px - ${_e.BIG_MODULES.TABLET.TOP} -
        ${_e.BIG_MODULES.TABLET.BOTTOM}
    );
    border-radius: ${I.ADJUSTMENTS.RADIUS.LARGE} ${I.ADJUSTMENTS.RADIUS.LARGE}
      ${I.ADJUSTMENTS.RADIUS.LARGE} ${I.ADJUSTMENTS.RADIUS.LARGE};
  }

  @media ${ke.mobileL} {
    margin: ${I.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${I.CONSTANTS.HEADER_HEIGHT}px - ${_e.BIG_MODULES.MOBILE.TOP} -
        ${_e.BIG_MODULES.MOBILE.BOTTOM}
    );
    border: ${I.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${I.ADJUSTMENTS.RADIUS.LARGE} ${I.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,Wi=d.div`
  flex: 1;
  display: flex;

  overflow: hidden;
`});export{lr as C,an as S,V as W,Gl as __tla};
