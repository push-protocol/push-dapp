const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-B9zIvjtm.js","assets/index-C-cI4LrB.js","assets/index-nOOUxA6-.css"])))=>i.map(i=>d[i]);
import{hr as Re,gc as xe,__tla as Ve}from"./index-C-cI4LrB.js";let p,ge,R,f,B,z,he,se,j,me,$e=Promise.all([(()=>{try{return Ve}catch{}})()]).then(async()=>{const fe=Symbol(),ne=Object.getPrototypeOf,J=new WeakMap,be=e=>e&&(J.has(e)?J.get(e):ne(e)===Object.prototype||ne(e)===Array.prototype),ye=e=>be(e)&&e[fe]||null,re=(e,t=!0)=>{J.set(e,t)},x={BASE_URL:"/push-dapp/pr-preview/pr-1912",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_DEPLOY_ENV:"PREVIEW",VITE_APP_DISCORD_CLIENT_ID:"1253336966875840532",VITE_APP_NODE_ENV:"production",VITE_APP_PUBLIC_URL:"https://push-protocol.github.io/",VITE_APP_WALLETCONNECT_PROJECT_ID:"0be3ae8bdea578d63a04771622c4a250",VITE_PR_PREVIEW_BASE:"pr-1912"},q=e=>typeof e=="object"&&e!==null,L=new WeakMap,V=new WeakSet,we=(e=Object.is,t=(r,E)=>new Proxy(r,E),s=r=>q(r)&&!V.has(r)&&(Array.isArray(r)||!(Symbol.iterator in r))&&!(r instanceof WeakMap)&&!(r instanceof WeakSet)&&!(r instanceof Error)&&!(r instanceof Number)&&!(r instanceof Date)&&!(r instanceof String)&&!(r instanceof RegExp)&&!(r instanceof ArrayBuffer),n=r=>{switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:throw r}},l=new WeakMap,c=(r,E,O=n)=>{const b=l.get(r);if((b==null?void 0:b[0])===E)return b[1];const I=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r));return re(I,!0),l.set(r,[E,I]),Reflect.ownKeys(r).forEach(T=>{if(Object.getOwnPropertyDescriptor(I,T))return;const W=Reflect.get(r,T),k={value:W,enumerable:!0,configurable:!0};if(V.has(W))re(W,!1);else if(W instanceof Promise)delete k.value,k.get=()=>O(W);else if(L.has(W)){const[y,X]=L.get(W);k.value=c(y,X(),O)}Object.defineProperty(I,T,k)}),Object.preventExtensions(I)},g=new WeakMap,h=[1,1],C=r=>{if(!q(r))throw new Error("object required");const E=g.get(r);if(E)return E;let O=h[0];const b=new Set,I=(i,o=++h[0])=>{O!==o&&(O=o,b.forEach(a=>a(i,o)))};let T=h[1];const W=(i=++h[1])=>(T!==i&&!b.size&&(T=i,y.forEach(([o])=>{const a=o[1](i);a>O&&(O=a)})),O),k=i=>(o,a)=>{const m=[...o];m[1]=[i,...m[1]],I(m,a)},y=new Map,X=(i,o)=>{if((x?"production":void 0)!=="production"&&y.has(i))throw new Error("prop listener already exists");if(b.size){const a=o[3](k(i));y.set(i,[o,a])}else y.set(i,[o])},ue=i=>{var o;const a=y.get(i);a&&(y.delete(i),(o=a[1])==null||o.call(a))},Te=i=>(b.add(i),b.size===1&&y.forEach(([o,a],m)=>{if((x?"production":void 0)!=="production"&&a)throw new Error("remove already exists");const ee=o[3](k(m));y.set(m,[o,ee])}),()=>{b.delete(i),b.size===0&&y.forEach(([o,a],m)=>{a&&(a(),y.set(m,[o]))})}),Z=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),H=t(Z,{deleteProperty(i,o){const a=Reflect.get(i,o);ue(o);const m=Reflect.deleteProperty(i,o);return m&&I(["delete",[o],a]),m},set(i,o,a,m){const ee=Reflect.has(i,o),te=Reflect.get(i,o,m);if(ee&&(e(te,a)||g.has(a)&&e(te,g.get(a))))return!0;ue(o),q(a)&&(a=ye(a)||a);let K=a;if(a instanceof Promise)a.then(_=>{a.status="fulfilled",a.value=_,I(["resolve",[o],_])}).catch(_=>{a.status="rejected",a.reason=_,I(["reject",[o],_])});else{!L.has(a)&&s(a)&&(K=C(a));const _=!V.has(K)&&L.get(K);_&&X(o,_)}return Reflect.set(i,o,K,m),I(["set",[o],a,te]),!0}});g.set(r,H);const Ne=[Z,W,c,Te];return L.set(H,Ne),Reflect.ownKeys(r).forEach(i=>{const o=Object.getOwnPropertyDescriptor(r,i);"value"in o&&(H[i]=r[i],delete o.value,delete o.writable),Object.defineProperty(Z,i,o)}),H})=>[C,L,V,e,t,s,n,l,c,g,h],[ve]=we();function A(e={}){return ve(e)}function D(e,t,s){const n=L.get(e);(x?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");let l;const c=[],g=n[3];let h=!1;const C=g(r=>{c.push(r),l||(l=Promise.resolve().then(()=>{l=void 0,h&&t(c.splice(0))}))});return h=!0,()=>{h=!1,C()}}function Ie(e,t){const s=L.get(e);(x?"production":void 0)!=="production"&&!s&&console.warn("Please use proxy object");const[n,l,c]=s;return c(n,l(),t)}let d,oe,u,w,N;d=A({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),B={state:d,subscribe(e){return D(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;if(n.startsWith("https://t.me")){const c=Re.from(t).toString("base64").replace(/[=]/g,"");n.endsWith("/")&&(n=n.slice(0,-1)),this.setWalletConnectDeepLink(n,s);const g=new URL(n);return g.searchParams.set("startapp",c),g.toString()}n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){const s=this.isTelegram()?"_blank":t;window.open(e,s,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.7.0")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=B.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},oe=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=A({enabled:oe,userSessionId:"",events:[],connectedWalletId:void 0}),se={state:u,subscribe(e){return D(u.events,()=>e(Ie(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},w=A({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),f={state:w,subscribe(e){return D(w,()=>e(w))},setChains(e){w.chains=e},setWalletConnectUri(e){w.walletConnectUri=e},setIsCustomDesktop(e){w.isCustomDesktop=e},setIsCustomMobile(e){w.isCustomMobile=e},setIsDataLoaded(e){w.isDataLoaded=e},setIsUiLoaded(e){w.isUiLoaded=e},setIsAuth(e){w.isAuth=e}},N=A({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),j={state:N,subscribe(e){return D(N,()=>e(N))},setConfig(e){var t,s;se.initialize(),f.setChains(e.chains),f.setIsAuth(!!e.enableAuthMode),f.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),f.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),p.setModalVersionInStorage(),Object.assign(N,e)}};var Ee=Object.defineProperty,ae=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,ie=(e,t,s)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,We=(e,t)=>{for(var s in t||(t={}))Oe.call(t,s)&&ie(e,s,t[s]);if(ae)for(var s of ae(t))Ce.call(t,s)&&ie(e,s,t[s]);return e};const Y="https://explorer-api.walletconnect.com",F="wcm",G="js-2.7.0";async function $(e,t){const s=We({sdkType:F,sdkVersion:G},t),n=new URL(e,Y);return n.searchParams.append("projectId",j.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&n.searchParams.append(l,String(c))}),(await fetch(n)).json()}const M={async getDesktopListings(e){return $("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return $("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return $("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return $("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${Y}/w3m/v1/getWalletImage/${e}?projectId=${j.state.projectId}&sdkType=${F}&sdkVersion=${G}`},getAssetImageUrl(e){return`${Y}/w3m/v1/getAssetImage/${e}?projectId=${j.state.projectId}&sdkType=${F}&sdkVersion=${G}`}};var Le=Object.defineProperty,le=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,ce=(e,t,s)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_e=(e,t)=>{for(var s in t||(t={}))Ae.call(t,s)&&ce(e,s,t[s]);if(le)for(var s of le(t))Pe.call(t,s)&&ce(e,s,t[s]);return e};let Q,v,U;Q=p.isMobile(),v=A({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),ge={state:v,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=j.state;if(e==="NONE"||t==="ALL"&&!e)return v.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:n}=await M.getAllListings(s),l=Object.values(n);l.sort((c,g)=>{const h=e.indexOf(c.id),C=e.indexOf(g.id);return h-C}),v.recomendedWallets=l}else{const{chains:s,isAuth:n}=f.state,l=s==null?void 0:s.join(","),c=p.isArray(t),g={page:1,sdks:n?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:h}=Q?await M.getMobileListings(g):await M.getDesktopListings(g);v.recomendedWallets=Object.values(h)}return v.recomendedWallets},async getWallets(e){const t=_e({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=j.state,{recomendedWallets:l}=v;if(n==="ALL")return v.wallets;l.length?t.excludedIds=l.map(O=>O.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),f.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:g}=e,{listings:h,total:C}=Q?await M.getMobileListings(t):await M.getDesktopListings(t),r=Object.values(h),E=g?"search":"wallets";return v[E]={listings:[...v[E].listings,...r],total:C,page:c??1},{listings:r,total:C}},getWalletImageUrl(e){return M.getWalletImageUrl(e)},getAssetImageUrl(e){return M.getAssetImageUrl(e)},resetSearch(){v.search={listings:[],total:0,page:1}}},U=A({open:!1}),R={state:U,subscribe(e){return D(U,()=>e(U))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:n}=f.state;if(p.removeWalletConnectDeepLink(),f.setWalletConnectUri(e==null?void 0:e.uri),f.setChains(e==null?void 0:e.chains),B.reset("ConnectWallet"),s&&n)U.open=!0,t();else{const l=setInterval(()=>{const c=f.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),U.open=!0,t())},200)}})},close(){U.open=!1}};var je=Object.defineProperty,de=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,pe=(e,t,s)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ue=(e,t)=>{for(var s in t||(t={}))De.call(t,s)&&pe(e,s,t[s]);if(de)for(var s of de(t))Me.call(t,s)&&pe(e,s,t[s]);return e};function ke(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}let S,P;S=A({themeMode:ke()?"dark":"light"}),z={state:S,subscribe(e){return D(S,()=>e(S))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(S.themeMode=t),s&&(S.themeVariables=Ue({},s))}},P=A({open:!1,message:"",variant:"success"}),he={state:P,subscribe(e){return D(P,()=>e(P))},openToast(e,t){P.open=!0,P.message=e,P.variant=t},closeToast(){P.open=!1}};class Se{constructor(t){this.openModal=R.open,this.closeModal=R.close,this.subscribeModal=R.subscribe,this.setTheme=z.setThemeConfig,z.setThemeConfig(t),j.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await xe(()=>import("./index-B9zIvjtm.js").then(async s=>(await s.__tla,s)),__vite__mapDeps([0,1,2]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),f.setIsUiLoaded(!0)}}}me=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Se},Symbol.toStringTag,{value:"Module"}))});export{p as C,ge as E,R as M,f as O,B as R,z as T,$e as __tla,he as a,se as b,j as c,me as i};
