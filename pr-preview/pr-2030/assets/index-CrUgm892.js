const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-I2bOFIHd.js","assets/index-R5rj5rOD.js","assets/index-BMdRskdO.css"])))=>i.map(i=>d[i]);
import{fw as Ne,eN as Re,__tla as xe}from"./index-R5rj5rOD.js";let u,pe,R,f,K,z,ge,te,k,me,$e=Promise.all([(()=>{try{return xe}catch{}})()]).then(async()=>{const he=Symbol(),se=Object.getPrototypeOf,B=new WeakMap,fe=e=>e&&(B.has(e)?B.get(e):se(e)===Object.prototype||se(e)===Array.prototype),be=e=>fe(e)&&e[he]||null,ne=(e,t=!0)=>{B.set(e,t)},J=e=>typeof e=="object"&&e!==null,L=new WeakMap,x=new WeakSet,ye=(e=Object.is,t=(o,W)=>new Proxy(o,W),s=o=>J(o)&&!x.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),n=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,W,O=n)=>{const b=l.get(o);if((b==null?void 0:b[0])===W)return b[1];const v=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return ne(v,!0),l.set(o,[W,v]),Reflect.ownKeys(o).forEach(T=>{if(Object.getOwnPropertyDescriptor(v,T))return;const E=Reflect.get(o,T),_={value:E,enumerable:!0,configurable:!0};if(x.has(E))ne(E,!1);else if(E instanceof Promise)delete _.value,_.get=()=>O(E);else if(L.has(E)){const[I,X]=L.get(E);_.value=c(I,X(),O)}Object.defineProperty(v,T,_)}),Object.preventExtensions(v)},g=new WeakMap,m=[1,1],C=o=>{if(!J(o))throw new Error("object required");const W=g.get(o);if(W)return W;let O=m[0];const b=new Set,v=(i,r=++m[0])=>{O!==r&&(O=r,b.forEach(a=>a(i,r)))};let T=m[1];const E=(i=++m[1])=>(T!==i&&!b.size&&(T=i,I.forEach(([r])=>{const a=r[1](i);a>O&&(O=a)})),O),_=i=>(r,a)=>{const h=[...r];h[1]=[i,...h[1]],v(h,a)},I=new Map,X=(i,r)=>{if(b.size){const a=r[3](_(i));I.set(i,[r,a])}else I.set(i,[r])},ue=i=>{var r;const a=I.get(i);a&&(I.delete(i),(r=a[1])==null||r.call(a))},Se=i=>(b.add(i),b.size===1&&I.forEach(([r,a],h)=>{const Z=r[3](_(h));I.set(h,[r,Z])}),()=>{b.delete(i),b.size===0&&I.forEach(([r,a],h)=>{a&&(a(),I.set(h,[r]))})}),Y=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),V=t(Y,{deleteProperty(i,r){const a=Reflect.get(i,r);ue(r);const h=Reflect.deleteProperty(i,r);return h&&v(["delete",[r],a]),h},set(i,r,a,h){const Z=Reflect.has(i,r),ee=Reflect.get(i,r,h);if(Z&&(e(ee,a)||g.has(a)&&e(ee,g.get(a))))return!0;ue(r),J(a)&&(a=be(a)||a);let H=a;if(a instanceof Promise)a.then(M=>{a.status="fulfilled",a.value=M,v(["resolve",[r],M])}).catch(M=>{a.status="rejected",a.reason=M,v(["reject",[r],M])});else{!L.has(a)&&s(a)&&(H=C(a));const M=!x.has(H)&&L.get(H);M&&X(r,M)}return Reflect.set(i,r,H,h),v(["set",[r],a,ee]),!0}});g.set(o,V);const Te=[Y,E,c,Se];return L.set(V,Te),Reflect.ownKeys(o).forEach(i=>{const r=Object.getOwnPropertyDescriptor(o,i);"value"in r&&(V[i]=o[i],delete r.value,delete r.writable),Object.defineProperty(Y,i,r)}),V})=>[C,L,x,e,t,s,n,l,c,g,m],[we]=ye();function j(e={}){return we(e)}function P(e,t,s){const n=L.get(e);let l;const c=[],g=n[3];let m=!1;const C=g(o=>{c.push(o),l||(l=Promise.resolve().then(()=>{l=void 0,m&&t(c.splice(0))}))});return m=!0,()=>{m=!1,C()}}function ve(e,t){const s=L.get(e),[n,l,c]=s;return c(n,l(),t)}let d,oe,p,y,N;d=j({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),K={state:d,subscribe(e){return P(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},u={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return u.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return u.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},formatNativeUrl(e,t,s){if(u.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!u.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;if(n.startsWith("https://t.me")){const c=Ne.from(t).toString("base64").replace(/[=]/g,"");n.endsWith("/")&&(n=n.slice(0,-1)),this.setWalletConnectDeepLink(n,s);const g=new URL(n);return g.searchParams.set("startapp",c),g.toString()}n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){const s=this.isTelegram()?"_blank":t;window.open(e,s,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(u.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(u.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(u.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(u.WCM_VERSION,"2.7.0")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=K.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},oe=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),p=j({enabled:oe,userSessionId:"",events:[],connectedWalletId:void 0}),te={state:p,subscribe(e){return P(p.events,()=>e(ve(p.events[p.events.length-1])))},initialize(){p.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(p.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){p.connectedWalletId=e},click(e){if(p.enabled){const t={type:"CLICK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},track(e){if(p.enabled){const t={type:"TRACK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},view(e){if(p.enabled){const t={type:"VIEW",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}}},y=j({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),f={state:y,subscribe(e){return P(y,()=>e(y))},setChains(e){y.chains=e},setWalletConnectUri(e){y.walletConnectUri=e},setIsCustomDesktop(e){y.isCustomDesktop=e},setIsCustomMobile(e){y.isCustomMobile=e},setIsDataLoaded(e){y.isDataLoaded=e},setIsUiLoaded(e){y.isUiLoaded=e},setIsAuth(e){y.isAuth=e}},N=j({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),k={state:N,subscribe(e){return P(N,()=>e(N))},setConfig(e){var t,s;te.initialize(),f.setChains(e.chains),f.setIsAuth(!!e.enableAuthMode),f.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),f.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),u.setModalVersionInStorage(),Object.assign(N,e)}};var Ie=Object.defineProperty,re=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,ae=(e,t,s)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ce=(e,t)=>{for(var s in t||(t={}))We.call(t,s)&&ae(e,s,t[s]);if(re)for(var s of re(t))Oe.call(t,s)&&ae(e,s,t[s]);return e};const q="https://explorer-api.walletconnect.com",F="wcm",G="js-2.7.0";async function $(e,t){const s=Ce({sdkType:F,sdkVersion:G},t),n=new URL(e,q);return n.searchParams.append("projectId",k.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&n.searchParams.append(l,String(c))}),(await fetch(n)).json()}const U={async getDesktopListings(e){return $("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return $("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return $("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return $("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${q}/w3m/v1/getWalletImage/${e}?projectId=${k.state.projectId}&sdkType=${F}&sdkVersion=${G}`},getAssetImageUrl(e){return`${q}/w3m/v1/getAssetImage/${e}?projectId=${k.state.projectId}&sdkType=${F}&sdkVersion=${G}`}};var Ee=Object.defineProperty,ie=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,le=(e,t,s)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ae=(e,t)=>{for(var s in t||(t={}))Le.call(t,s)&&le(e,s,t[s]);if(ie)for(var s of ie(t))je.call(t,s)&&le(e,s,t[s]);return e};let Q,w,D;Q=u.isMobile(),w=j({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),pe={state:w,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=k.state;if(e==="NONE"||t==="ALL"&&!e)return w.recomendedWallets;if(u.isArray(e)){const s={recommendedIds:e.join(",")},{listings:n}=await U.getAllListings(s),l=Object.values(n);l.sort((c,g)=>{const m=e.indexOf(c.id),C=e.indexOf(g.id);return m-C}),w.recomendedWallets=l}else{const{chains:s,isAuth:n}=f.state,l=s==null?void 0:s.join(","),c=u.isArray(t),g={page:1,sdks:n?"auth_v1":void 0,entries:u.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:m}=Q?await U.getMobileListings(g):await U.getDesktopListings(g);w.recomendedWallets=Object.values(m)}return w.recomendedWallets},async getWallets(e){const t=Ae({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=k.state,{recomendedWallets:l}=w;if(n==="ALL")return w.wallets;l.length?t.excludedIds=l.map(O=>O.id).join(","):u.isArray(s)&&(t.excludedIds=s.join(",")),u.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),f.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:g}=e,{listings:m,total:C}=Q?await U.getMobileListings(t):await U.getDesktopListings(t),o=Object.values(m),W=g?"search":"wallets";return w[W]={listings:[...w[W].listings,...o],total:C,page:c??1},{listings:o,total:C}},getWalletImageUrl(e){return U.getWalletImageUrl(e)},getAssetImageUrl(e){return U.getAssetImageUrl(e)},resetSearch(){w.search={listings:[],total:0,page:1}}},D=j({open:!1}),R={state:D,subscribe(e){return P(D,()=>e(D))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:n}=f.state;if(u.removeWalletConnectDeepLink(),f.setWalletConnectUri(e==null?void 0:e.uri),f.setChains(e==null?void 0:e.chains),K.reset("ConnectWallet"),s&&n)D.open=!0,t();else{const l=setInterval(()=>{const c=f.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),D.open=!0,t())},200)}})},close(){D.open=!1}};var Me=Object.defineProperty,ce=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,de=(e,t,s)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ue=(e,t)=>{for(var s in t||(t={}))ke.call(t,s)&&de(e,s,t[s]);if(ce)for(var s of ce(t))Pe.call(t,s)&&de(e,s,t[s]);return e};function De(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}let S,A;S=j({themeMode:De()?"dark":"light"}),z={state:S,subscribe(e){return P(S,()=>e(S))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(S.themeMode=t),s&&(S.themeVariables=Ue({},s))}},A=j({open:!1,message:"",variant:"success"}),ge={state:A,subscribe(e){return P(A,()=>e(A))},openToast(e,t){A.open=!0,A.message=e,A.variant=t},closeToast(){A.open=!1}};class _e{constructor(t){this.openModal=R.open,this.closeModal=R.close,this.subscribeModal=R.subscribe,this.setTheme=z.setThemeConfig,z.setThemeConfig(t),k.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await Re(()=>import("./index-I2bOFIHd.js").then(async s=>(await s.__tla,s)),__vite__mapDeps([0,1,2]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),f.setIsUiLoaded(!0)}}}me=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:_e},Symbol.toStringTag,{value:"Module"}))});export{u as C,pe as E,R as M,f as O,K as R,z as T,$e as __tla,ge as a,te as b,k as c,me as i};
