import{e1 as i,et as yn,en as ze,eo as Se,ep as Ke,jn as vn,jo as wn,jp as jn,fS as de,jq as Xe,fD as Ye,jr as Sn,js as In,ej as bn,dY as he,e2 as g,h6 as $e,h7 as Cn,f0 as G,es as C,fu as En,fw as Pn,jt as _n,em as Ze,d_ as E,ef as Un,jl as kn,er as Tn,eq as Ln,dZ as Dn,hr as Bn,iV as Nn,e0 as Mn,i_ as Fn,__tla as On}from"./index-cxV55chu.js";import{S as Rn,__tla as An}from"./Stepper-DMYHRDXN.js";import{S as Gn,u as Jn,__tla as Vn}from"./StakingVariant-BYpeWaKw.js";import{u as Hn,__tla as Wn}from"./useMutation-BruDBZ7T.js";import{a as qn,__tla as zn}from"./IpfsHelper-CzTIG6Ag.js";import{c as Kn,a as Ie,u as Xn,F as Yn,b as $n,__tla as Zn}from"./index.esm-BaNszSyF.js";import{g as be,a as Qe,U as Qn}from"./Common.form-Ds5bAxK4.js";import{g as er,__tla as tr}from"./PushTokenContractHelper-RS8PN-2f.js";import{a as nr,I as rr,__tla as ir}from"./ImportPushTokenMessage-BOMAmzZ0.js";let et,tt,ar=Promise.all([(()=>{try{return On}catch{}})(),(()=>{try{return An}catch{}})(),(()=>{try{return Vn}catch{}})(),(()=>{try{return Wn}catch{}})(),(()=>{try{return zn}catch{}})(),(()=>{try{return Zn}catch{}})(),(()=>{try{return tr}catch{}})(),(()=>{try{return ir}catch{}})()]).then(async()=>{const nt=e=>{const{svgProps:t,...n}=e;return i.jsx(yn,{componentName:"CloudUpload",icon:i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"inherit",height:"inherit",viewBox:"0 0 53 52",fill:"none",...t,children:[i.jsx("path",{d:"M16.1888 26.3978L26.7966 15.7901L37.4043 26.3978",stroke:"#C4CBD5","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),i.jsx("path",{d:"M27.0618 50.0001V16.8509",stroke:"#C4CBD5","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),i.jsx("path",{d:"M21.4927 35.4144H11.1502C8.05625 35.0608 1.86841 32.4972 1.86841 25.0718C1.86841 17.6464 8.05625 14.9061 11.1502 14.4641C11.769 10.3094 15.6585 2 26.2662 2C39.2607 2 41.0286 10.8398 41.9126 16.0553C45.0065 15.9669 51.4596 19.2906 51.4596 26.9282C51.2828 29.7569 49.6032 35.4144 44.2993 35.4144C38.9955 35.4144 34.1336 35.4144 32.3656 35.4144",stroke:"#C4CBD5","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),...n})},rt=async e=>{const{channelType:t,identityBytes:n,fees:r,signer:a}=e;return(await new ze(Se.epnscore,Ke.epnscore,a).createChannelWithPUSH(t,n,r,0,{gasLimit:6e5})).wait()},it=()=>Hn({mutationKey:[vn],mutationFn:rt});var ue={exports:{}},pe={exports:{}},at=jn(),Ce=wn().EventEmitter;pe.exports=I,pe.exports.default=I;function I(e){if(!(this instanceof I))return new I(e);Ce.call(this),e=e||{},this.concurrency=e.concurrency||1/0,this.timeout=e.timeout||0,this.autostart=e.autostart||!1,this.results=e.results||null,this.pending=0,this.session=0,this.running=!1,this.jobs=[],this.timers={}}at(I,Ce);var st=["pop","shift","indexOf","lastIndexOf"];st.forEach(function(e){I.prototype[e]=function(){return Array.prototype[e].apply(this.jobs,arguments)}}),I.prototype.slice=function(e,t){return this.jobs=this.jobs.slice(e,t),this},I.prototype.reverse=function(){return this.jobs.reverse(),this};var ot=["push","unshift","splice"];ot.forEach(function(e){I.prototype[e]=function(){var t=Array.prototype[e].apply(this.jobs,arguments);return this.autostart&&this.start(),t}}),Object.defineProperty(I.prototype,"length",{get:function(){return this.pending+this.jobs.length}}),I.prototype.start=function(e){if(e&&ct.call(this,e),this.running=!0,this.pending>=this.concurrency)return;if(this.jobs.length===0){this.pending===0&&ge.call(this);return}var t=this,n=this.jobs.shift(),r=!0,a=this.session,s=null,o=!1,u=null,w=n.timeout||this.timeout;function x(d,f){r&&t.session===a&&(r=!1,t.pending--,s!==null&&(delete t.timers[s],clearTimeout(s)),d?t.emit("error",d,n):o===!1&&(u!==null&&(t.results[u]=Array.prototype.slice.call(arguments,1)),t.emit("success",f,n)),t.session===a&&(t.pending===0&&t.jobs.length===0?ge.call(t):t.running&&t.start()))}w&&(s=setTimeout(function(){o=!0,t.listeners("timeout").length>0?t.emit("timeout",x,n):x()},w),this.timers[s]=s),this.results&&(u=this.results.length,this.results[u]=null),this.pending++,t.emit("start",n);var c=n(x);c&&c.then&&typeof c.then=="function"&&c.then(function(d){return x(null,d)}).catch(function(d){return x(d||!0)}),this.running&&this.jobs.length>0&&this.start()},I.prototype.stop=function(){this.running=!1},I.prototype.end=function(e){lt.call(this),this.jobs.length=0,this.pending=0,ge.call(this,e)};function lt(){for(var e in this.timers){var t=this.timers[e];delete this.timers[e],clearTimeout(t)}}function ct(e){var t=this;this.on("error",n),this.on("end",r);function n(a){t.end(a)}function r(a){t.removeListener("error",n),t.removeListener("end",r),e(a,this.results)}}function ge(e){this.session++,this.running=!1,this.emit("end",e)}var dt=pe.exports,N={},J={};Object.defineProperty(J,"__esModule",{value:!0}),J.BMP=void 0,J.BMP={validate(e){return e.toString("ascii",0,2)==="BM"},calculate(e){return{height:Math.abs(e.readInt32LE(22)),width:e.readUInt32LE(18)}}};var V={},M={};Object.defineProperty(M,"__esModule",{value:!0}),M.ICO=void 0;const ht=1,ut=6,pt=16;function Ee(e,t){const n=e.readUInt8(t);return n===0?256:n}function Pe(e,t){const n=ut+t*pt;return{height:Ee(e,n+1),width:Ee(e,n)}}M.ICO={validate(e){return e.readUInt16LE(0)!==0?!1:e.readUInt16LE(2)===ht},calculate(e){const t=e.readUInt16LE(4),n=Pe(e,0);if(t===1)return n;const r=[n];for(let a=1;a<t;a+=1)r.push(Pe(e,a));return{height:n.height,images:r,width:n.width}}},Object.defineProperty(V,"__esModule",{value:!0}),V.CUR=void 0;const gt=M,ft=2;V.CUR={validate(e){return e.readUInt16LE(0)!==0?!1:e.readUInt16LE(2)===ft},calculate(e){return gt.ICO.calculate(e)}};var H={};Object.defineProperty(H,"__esModule",{value:!0}),H.DDS=void 0,H.DDS={validate(e){return e.readUInt32LE(0)===542327876},calculate(e){return{height:e.readUInt32LE(12),width:e.readUInt32LE(16)}}};var W={};Object.defineProperty(W,"__esModule",{value:!0}),W.GIF=void 0;const mt=/^GIF8[79]a/;W.GIF={validate(e){const t=e.toString("ascii",0,6);return mt.test(t)},calculate(e){return{height:e.readUInt16LE(8),width:e.readUInt16LE(6)}}};var q={};Object.defineProperty(q,"__esModule",{value:!0}),q.ICNS=void 0;const xt=8,yt=4,vt=4,wt={ICON:32,"ICN#":32,"icm#":16,icm4:16,icm8:16,"ics#":16,ics4:16,ics8:16,is32:16,s8mk:16,icp4:16,icl4:32,icl8:32,il32:32,l8mk:32,icp5:32,ic11:32,ich4:48,ich8:48,ih32:48,h8mk:48,icp6:64,ic12:32,it32:128,t8mk:128,ic07:128,ic08:256,ic13:256,ic09:512,ic14:512,ic10:1024};function _e(e,t){const n=t+vt;return[e.toString("ascii",t,n),e.readUInt32BE(n)]}function Ue(e){const t=wt[e];return{width:t,height:t,type:e}}q.ICNS={validate(e){return e.toString("ascii",0,4)==="icns"},calculate(e){const t=e.length,n=e.readUInt32BE(yt);let r=xt,a=_e(e,r),s=Ue(a[0]);if(r+=a[1],r===n)return s;const o={height:s.height,images:[s],width:s.width};for(;r<n&&r<t;)a=_e(e,r),s=Ue(a[0]),r+=a[1],o.images.push(s);return o}};var z={};Object.defineProperty(z,"__esModule",{value:!0}),z.J2C=void 0,z.J2C={validate(e){return e.toString("hex",0,4)==="ff4fff51"},calculate(e){return{height:e.readUInt32BE(12),width:e.readUInt32BE(8)}}};var K={};Object.defineProperty(K,"__esModule",{value:!0}),K.JP2=void 0;const X={ftyp:"66747970",ihdr:"69686472",jp2h:"6a703268",jp__:"6a502020",rreq:"72726571",xml_:"786d6c20"},jt=e=>{const t=e.readUInt8(0);let n=1+2*t;const r=e.readUInt16BE(n)*(2+t);n=n+2+r;const a=e.readUInt16BE(n)*(16+t);return n+2+a},ke=e=>({height:e.readUInt32BE(4),width:e.readUInt32BE(8)});K.JP2={validate(e){const t=e.toString("hex",4,8),n=e.readUInt32BE(0);if(t!==X.jp__||n<1)return!1;const r=n+4,a=e.readUInt32BE(n);return e.slice(r,r+a).toString("hex",0,4)===X.ftyp},calculate(e){const t=e.readUInt32BE(0),n=e.readUInt16BE(t+2);let r=t+4+n;switch(e.toString("hex",r,r+4)){case X.rreq:return r=r+4+4+jt(e.slice(r+4)),ke(e.slice(r+8,r+24));case X.jp2h:return ke(e.slice(r+8,r+24));default:throw new TypeError("Unsupported header found: "+e.toString("ascii",r,r+4))}}};var Y={},F={};Object.defineProperty(F,"__esModule",{value:!0}),F.readUInt=void 0;function St(e,t,n,r){n=n||0;const a=r?"BE":"LE",s="readUInt"+t+a;return e[s].call(e,n)}F.readUInt=St,Object.defineProperty(Y,"__esModule",{value:!0}),Y.JPG=void 0;const O=F,It="45786966",bt=2,fe=6,Ct=2,Et="4d4d",Pt="4949",Te=12,_t=2;function Ut(e){return e.toString("hex",2,6)===It}function kt(e,t){return{height:e.readUInt16BE(t),width:e.readUInt16BE(t+2)}}function Tt(e,t){const n=fe+8,r=O.readUInt(e,16,n,t);for(let a=0;a<r;a++){const s=n+_t+a*Te,o=s+Te;if(s>e.length)return;const u=e.slice(s,o);if(O.readUInt(u,16,0,t)===274)return O.readUInt(u,16,2,t)!==3||O.readUInt(u,32,4,t)!==1?void 0:O.readUInt(u,16,8,t)}}function Lt(e,t){const n=e.slice(bt,t),r=n.toString("hex",fe,fe+Ct),a=r===Et;if(a||r===Pt)return Tt(n,a)}function Dt(e,t){if(t>e.length)throw new TypeError("Corrupt JPG, exceeded buffer limits");if(e[t]!==255)throw new TypeError("Invalid JPG, marker table corrupted")}Y.JPG={validate(e){return e.toString("hex",0,2)==="ffd8"},calculate(e){e=e.slice(4);let t,n;for(;e.length;){const r=e.readUInt16BE(0);if(Ut(e)&&(t=Lt(e,r)),Dt(e,r),n=e[r+1],n===192||n===193||n===194){const a=kt(e,r+5);return t?{height:a.height,orientation:t,width:a.width}:a}e=e.slice(r+2)}throw new TypeError("Invalid JPG, no size found")}};var $={};Object.defineProperty($,"__esModule",{value:!0}),$.KTX=void 0;const Bt="KTX 11";$.KTX={validate(e){return Bt===e.toString("ascii",1,7)},calculate(e){return{height:e.readUInt32LE(40),width:e.readUInt32LE(36)}}};var Z={};Object.defineProperty(Z,"__esModule",{value:!0}),Z.PNG=void 0;const Nt=`PNG\r

`,Mt="IHDR",Le="CgBI";Z.PNG={validate(e){if(Nt===e.toString("ascii",1,8)){let t=e.toString("ascii",12,16);if(t===Le&&(t=e.toString("ascii",28,32)),t!==Mt)throw new TypeError("Invalid PNG");return!0}return!1},calculate(e){return e.toString("ascii",12,16)===Le?{height:e.readUInt32BE(36),width:e.readUInt32BE(32)}:{height:e.readUInt32BE(20),width:e.readUInt32BE(16)}}};var Q={};Object.defineProperty(Q,"__esModule",{value:!0}),Q.PNM=void 0;const De={P1:"pbm/ascii",P2:"pgm/ascii",P3:"ppm/ascii",P4:"pbm",P5:"pgm",P6:"ppm",P7:"pam",PF:"pfm"},Ft=Object.keys(De),Be={default:e=>{let t=[];for(;e.length>0;){const n=e.shift();if(n[0]!=="#"){t=n.split(" ");break}}if(t.length===2)return{height:parseInt(t[1],10),width:parseInt(t[0],10)};throw new TypeError("Invalid PNM")},pam:e=>{const t={};for(;e.length>0;){const n=e.shift();if(n.length>16||n.charCodeAt(0)>128)continue;const[r,a]=n.split(" ");if(r&&a&&(t[r.toLowerCase()]=parseInt(a,10)),t.height&&t.width)break}if(t.height&&t.width)return{height:t.height,width:t.width};throw new TypeError("Invalid PAM")}};Q.PNM={validate(e){const t=e.toString("ascii",0,2);return Ft.includes(t)},calculate(e){const t=e.toString("ascii",0,2),n=De[t],r=e.toString("ascii",3).split(/[\r\n]+/);return(Be[n]||Be.default)(r)}};var ee={};Object.defineProperty(ee,"__esModule",{value:!0}),ee.PSD=void 0,ee.PSD={validate(e){return e.toString("ascii",0,4)==="8BPS"},calculate(e){return{height:e.readUInt32BE(14),width:e.readUInt32BE(18)}}};var te={};Object.defineProperty(te,"__esModule",{value:!0}),te.SVG=void 0;const Ne=/<svg\s([^>"']|"[^"]*"|'[^']*')*>/,ne={height:/\sheight=(['"])([^%]+?)\1/,root:Ne,viewbox:/\sviewBox=(['"])(.+?)\1/,width:/\swidth=(['"])([^%]+?)\1/},me=2.54,Ot={cm:96/me,em:16,ex:8,m:96/me*100,mm:96/me/10,pc:96/72/12,pt:96/72};function re(e){const t=/([0-9.]+)([a-z]*)/.exec(e);if(t)return Math.round(parseFloat(t[1])*(Ot[t[2]]||1))}function Rt(e){const t=e.split(" ");return{height:re(t[3]),width:re(t[2])}}function At(e){const t=e.match(ne.width),n=e.match(ne.height),r=e.match(ne.viewbox);return{height:n&&re(n[2]),viewbox:r&&Rt(r[2]),width:t&&re(t[2])}}function Gt(e){return{height:e.height,width:e.width}}function Jt(e,t){const n=t.width/t.height;return e.width?{height:Math.floor(e.width/n),width:e.width}:e.height?{height:e.height,width:Math.floor(e.height*n)}:{height:t.height,width:t.width}}te.SVG={validate(e){const t=String(e);return Ne.test(t)},calculate(e){const t=e.toString("utf8").match(ne.root);if(t){const n=At(t[0]);if(n.width&&n.height)return Gt(n);if(n.viewbox)return Jt(n,n.viewbox)}throw new TypeError("Invalid SVG")}};var ie={};Object.defineProperty(ie,"__esModule",{value:!0}),ie.TIFF=void 0;const ae=Xe,L=F;function Vt(e,t,n){const r=L.readUInt(e,32,4,n);let a=1024;const s=ae.statSync(t).size;r+a>s&&(a=s-r-10);const o=de.alloc(a),u=ae.openSync(t,"r");return ae.readSync(u,o,0,a,r),ae.closeSync(u),o.slice(2)}function Ht(e,t){const n=L.readUInt(e,16,8,t);return(L.readUInt(e,16,10,t)<<16)+n}function Wt(e){if(e.length>24)return e.slice(12)}function qt(e,t){const n={};let r=e;for(;r&&r.length;){const a=L.readUInt(r,16,0,t),s=L.readUInt(r,16,2,t),o=L.readUInt(r,32,4,t);if(a===0)break;o===1&&(s===3||s===4)&&(n[a]=Ht(r,t)),r=Wt(r)}return n}function zt(e){const t=e.toString("ascii",0,2);if(t==="II")return"LE";if(t==="MM")return"BE"}const Kt=["49492a00","4d4d002a"];ie.TIFF={validate(e){return Kt.includes(e.toString("hex",0,4))},calculate(e,t){if(!t)throw new TypeError("Tiff doesn't support buffer");const n=zt(e)==="BE",r=Vt(e,t,n),a=qt(r,n),s=a[256],o=a[257];if(!s||!o)throw new TypeError("Invalid Tiff. Missing tags");return{height:o,width:s}}};var se={};Object.defineProperty(se,"__esModule",{value:!0}),se.WEBP=void 0;function Xt(e){return{height:1+e.readUIntLE(7,3),width:1+e.readUIntLE(4,3)}}function Yt(e){return{height:1+((e[4]&15)<<10|e[3]<<2|(e[2]&192)>>6),width:1+((e[2]&63)<<8|e[1])}}function $t(e){return{height:e.readInt16LE(8)&16383,width:e.readInt16LE(6)&16383}}se.WEBP={validate(e){const t=e.toString("ascii",0,4)==="RIFF",n=e.toString("ascii",8,12)==="WEBP",r=e.toString("ascii",12,15)==="VP8";return t&&n&&r},calculate(e){const t=e.toString("ascii",12,16);if(e=e.slice(20,30),t==="VP8X"){const r=e[0],a=(r&192)===0,s=(r&1)===0;if(a&&s)return Xt(e);throw new TypeError("Invalid WebP")}if(t==="VP8 "&&e[0]!==47)return $t(e);const n=e.toString("hex",3,6);if(t==="VP8L"&&n!=="9d012a")return Yt(e);throw new TypeError("Invalid WebP")}},Object.defineProperty(N,"__esModule",{value:!0}),N.typeHandlers=void 0;const Zt=J,Qt=V,en=H,tn=W,nn=q,rn=M,an=z,sn=K,on=Y,ln=$,cn=Z,dn=Q,hn=ee,un=te,pn=ie,gn=se;N.typeHandlers={bmp:Zt.BMP,cur:Qt.CUR,dds:en.DDS,gif:tn.GIF,icns:nn.ICNS,ico:rn.ICO,j2c:an.J2C,jp2:sn.JP2,jpg:on.JPG,ktx:ln.KTX,png:cn.PNG,pnm:dn.PNM,psd:hn.PSD,svg:un.SVG,tiff:pn.TIFF,webp:gn.WEBP};var oe={};Object.defineProperty(oe,"__esModule",{value:!0}),oe.detector=void 0;const xe=N,fn=Object.keys(xe.typeHandlers),Me={56:"psd",66:"bmp",68:"dds",71:"gif",73:"tiff",77:"tiff",82:"webp",105:"icns",137:"png",255:"jpg"};function mn(e){const t=e[0];if(t in Me){const r=Me[t];if(xe.typeHandlers[r].validate(e))return r}const n=r=>xe.typeHandlers[r].validate(e);return fn.find(n)}oe.detector=mn,function(e,t){var n=Ye&&Ye.__awaiter||function(y,m,h,l){function b(U){return U instanceof h?U:new h(function(j){j(U)})}return new(h||(h=Promise))(function(U,j){function D(P){try{B(l.next(P))}catch(p){j(p)}}function je(P){try{B(l.throw(P))}catch(p){j(p)}}function B(P){P.done?U(P.value):b(P.value).then(D,je)}B((l=l.apply(y,m||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.types=t.setConcurrency=t.imageSize=void 0;const r=Xe,a=In,s=dt,o=N,u=oe,w=512*1024,x=new s.default({concurrency:100,autostart:!0});function c(y,m){const h=u.detector(y);if(h&&h in o.typeHandlers){const l=o.typeHandlers[h].calculate(y,m);if(l!==void 0)return l.type=h,l}throw new TypeError("unsupported file type: "+h+" (file: "+m+")")}function d(y){return n(this,void 0,void 0,function*(){const m=yield r.promises.open(y,"r"),{size:h}=yield m.stat();if(h<=0)throw yield m.close(),new Error("Empty file");const l=Math.min(h,w),b=de.alloc(l);return yield m.read(b,0,l,0),yield m.close(),b})}function f(y){const m=r.openSync(y,"r"),{size:h}=r.fstatSync(m);if(h<=0)throw r.closeSync(m),new Error("Empty file");const l=Math.min(h,w),b=de.alloc(l);return r.readSync(m,b,0,l,0),r.closeSync(m),b}e.exports=t=v,t.default=v;function v(y,m){if(de.isBuffer(y))return c(y);if(typeof y!="string")throw new TypeError("invalid invocation");const h=a.resolve(y);if(typeof m=="function")x.push(()=>d(h).then(l=>Sn.nextTick(m,null,c(l,h))).catch(m));else{const l=f(h);return c(l,h)}}t.imageSize=v,t.setConcurrency=y=>{x.concurrency=y},t.types=Object.keys(o.typeHandlers)}(ue,ue.exports);var xn=ue.exports;let Fe,Oe,le,Re,ce,Ae,R,ye,Ge,Je,Ve,He,ve,We,qe,we;tt=bn(xn),Fe=Kn().shape({channelName:Ie().required(be("Channel Name")).max(32,Qe(32)),channelDesc:Ie().required(be("Channel Description")).max(250,Qe(250)),channelURL:Ie().required(be("Channel URL")).test("url","Please enter a valid channel url",e=>Qn.test(e))}),Oe=({children:e,onSubmit:t})=>{const n=Xn({initialValues:{channelName:"",channelDesc:"",channelURL:"",image:null},validationSchema:Fe,onSubmit:t});return i.jsx(Yn,{value:n,children:e})},le=()=>{const e=$n();if(!e)throw new Error("useChainAliasFormikContext must be used within a FormikChainAliasProvider");return e},Re=({handleNextStep:e,setActiveStepKey:t})=>{const{values:n,touched:r,setFieldTouched:a,setFieldValue:s,errors:o,validateForm:u,setTouched:w}=le(),{isWalletConnected:x,connect:c}=he(),d=()=>{u().then(f=>{w({channelName:!0,channelDesc:!0,channelURL:!0}),Object.keys(f).length===0&&(x||c(),e("uploadLogo"),t("uploadLogo"))})};return i.jsx(g,{display:"flex",flexDirection:"column",alignSelf:"stretch",children:i.jsxs(g,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignSelf:"stretch",children:[i.jsxs(g,{display:"flex",flexDirection:"column",gap:"spacing-sm",alignSelf:"stretch",children:[i.jsx($e,{required:!0,label:"Channel Name",value:n.channelName,onChange:f=>{const v=f.target.value;a("channelName",!0),s("channelName",v)},totalCount:32,error:r.channelName&&!!(o!=null&&o.channelName),errorMessage:r.channelName?o==null?void 0:o.channelName:""}),i.jsx(Cn,{required:!0,label:"Channel Description",placeholder:"Get notified about ...",description:"Enter a Brief description of the notifications the user will receive",value:n.channelDesc,onChange:f=>{const v=f.target.value;a("channelDesc",!0),s("channelDesc",v)},totalCount:250,error:r.channelDesc&&!!(o!=null&&o.channelDesc),errorMessage:r.channelURL?o==null?void 0:o.channelDesc:""}),i.jsx($e,{required:!0,label:"Channel Website URL",value:n.channelURL,onChange:f=>{const v=f.target.value;a("channelURL",!0),s("channelURL",v)},error:r.channelURL&&!!(o!=null&&o.channelURL),errorMessage:r.channelURL?o==null?void 0:o.channelURL:""})]}),i.jsx(g,{display:"flex",justifyContent:"center",children:i.jsx(G,{onClick:d,children:"Next"})})]})})},ce=50,Ae=[{label:"Channel Info",value:"channelInfo"},{label:"Upload Logo",value:"uploadLogo"},{label:"Stake Fees",value:"stakeFees"}],R={progress:null,progressInfo:"",processingInfo:""},ye={txErrorStatus:0,txError:""},Ge=()=>i.jsxs(g,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing-xxs",alignSelf:"stretch",children:[i.jsx(C,{variant:"h3-semibold",color:"text-primary",display:{ml:"none",initial:"block"},children:"Create Your Channel"}),i.jsx(C,{variant:"bs-regular",color:"text-tertiary",display:{ml:"none",initial:"block"},children:"Creating your own notification channel to manage, send and notify users."}),i.jsx(C,{variant:"h4-semibold",color:"text-primary",display:{ml:"block",initial:"none"},children:"Create Your Channel"}),i.jsx(C,{variant:"bes-regular",color:"text-tertiary",display:{ml:"block",initial:"none"},textAlign:"center",children:"Creating your own notification channel to manage, send and notify users."})]}),Je=({progressState:e})=>i.jsxs(g,{display:"flex",flexDirection:"column",alignSelf:"stretch",gap:"spacing-xl",alignItems:"center",children:[i.jsx(g,{padding:"spacing-md",backgroundColor:"surface-secondary",borderRadius:"radius-sm",width:"-webkit-fill-available",children:i.jsx(C,{textAlign:"center",variant:"h5-semibold",color:"text-brand-medium",children:e.progressInfo})}),i.jsx(g,{width:"400px",children:i.jsx(En,{percent:e.progress,color:"#D548EC",backgroundColor:"#F3AEFF",height:"4px"})}),i.jsxs(g,{display:"flex",flexDirection:"row",alignItems:"center",gap:"spacing-xxxs",children:[i.jsx(Pn,{type:_n.PROCESSING,size:16,color:"#D548EC"}),i.jsx(C,{variant:"bs-semibold",color:"text-secondary",children:e.processingInfo})]})]}),Ve=()=>{const{switchChain:e}=he();return i.jsxs(i.Fragment,{children:[i.jsx(g,{display:"flex",flexDirection:"column",padding:"spacing-md",backgroundColor:"surface-secondary",borderRadius:"radius-sm",width:"-webkit-fill-available",children:i.jsx(C,{textAlign:"center",variant:"h5-semibold",color:"text-brand-medium",children:"Please select Ethereum Sepolia Network in your Wallet to create a channel."})}),i.jsx(g,{display:"flex",justifyContent:"center",children:i.jsx(G,{onClick:()=>e(Ze.coreContractChain),children:"Change Network"})})]})},He=({channelStakeFees:e,handleNextStep:t})=>{const n=ce,{provider:r,account:a,isWalletConnected:s,connect:o}=he(),[u,w]=E.useState(0),[x,c]=E.useState(!1),[d,f]=E.useState(!1),v=async()=>{f(!0);const l=await er({address:a,provider:r});f(!1),w(l)};E.useEffect(()=>{v()},[u,a]);const{handleSubmit:y,validateForm:m}=le(),h=()=>{m().then(l=>{(l.channelName||l.channelDesc||l.channelURL)&&t("channelInfo"),l.image&&t("uploadLogo"),Object.keys(l).length||y()})};return i.jsxs(g,{display:"flex",flexDirection:"column",alignSelf:"stretch",justifyContent:"center",gap:"spacing-xl",children:[i.jsxs(g,{display:"flex",flexDirection:"column",gap:"spacing-sm",children:[i.jsx(Gn,{fees:n,title:"Amount for Staking",balance:u,setBalance:w,showFaucet:!0,showBalance:!0}),i.jsx(nr,{title:"Don\u2019t see Push token in your wallet?"})]}),i.jsx(g,{display:"flex",justifyContent:"center",children:i.jsx(G,{disabled:x||u<n,onClick:()=>{h()},children:"Create Channel"})})]})},ve=e=>e.type.startsWith("image/"),We=async({provider:e,account:t})=>{let n=await new ze(Se.pushToken,Ke.pushToken,e).allowance(t,Se.epnscore);n=n==null?void 0:n.toString();const r=Un(n);return Number(r)},qe=({view:e,setView:t,setActiveStepKey:n,handleNextStep:r})=>{const a=E.useRef(),{values:s,setFieldValue:o}=le(),u=async c=>{var f;const d=(f=c.currentTarget.files)==null?void 0:f[0];t(!1),d&&ve(d)&&await x(d)},w=async c=>{var f;c.preventDefault(),c.stopPropagation(),t(!1);const d=(f=c.dataTransfer.files)==null?void 0:f[0];d&&ve(d)&&await x(d)},x=async c=>{o("image",c);const d=new FileReader;d.readAsDataURL(c),d.onloadend=()=>{o("imageSrc",d.result),o("imageType",c.type)}};return i.jsxs(g,{display:"flex",flexDirection:"column",gap:"spacing-lg",alignItems:"center",alignSelf:"stretch",children:[i.jsxs(g,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing-lg",children:[i.jsx(C,{variant:"bes-regular",color:"text-tertiary",children:"Upload a PNG, JPG upto 1MB. Crop the image to resize to 128px."}),i.jsx(kn,{id:"file-upload",onChange:u,onDrop:w,children:i.jsxs(g,{width:{initial:"500px",ml:"325px"},padding:"spacing-xxl spacing-none",display:"flex",flexDirection:"column",alignItems:"center",border:"border-xs dashed stroke-tertiary",borderRadius:"radius-md",backgroundColor:"surface-secondary",gap:"spacing-md",children:[s!=null&&s.image?e?i.jsx(g,{width:"128px",height:"128px",borderRadius:"radius-md",children:i.jsx("img",{style:{borderRadius:"inherit"},width:"100%",height:"100%",src:s.image,alt:"Cropped Img"})}):i.jsx(rr,{width:"200px",height:"200px",imageSrc:s.imageSrc,imageType:s.imageType,onImageCropped:c=>{t(!0),o("image",c)},ref:a}):i.jsx(nt,{size:50}),i.jsxs(g,{display:"flex",gap:"spacing-xxxs",children:[i.jsx(C,{variant:"bs-semibold",color:"text-tertiary",children:" Drag and Drop or"}),i.jsx("label",{htmlFor:"file-upload",children:i.jsx(C,{variant:"bs-semibold",color:"text-brand-medium",css:Tn`cursor:pointer;`,children:"Browse to Choose"})})]})]})})]}),(s==null?void 0:s.image)&&(e?i.jsx(i.Fragment,{children:i.jsx(G,{disabled:!e&&!(s!=null&&s.image),onClick:()=>{r("stakeFees"),n("stakeFees")},children:"Next"})}):i.jsx(i.Fragment,{children:i.jsx(G,{onClick:()=>{a.current.showCroppedImage()},children:"Crop Image"})}))]})},we=Ln(ce.toString(),18),et=()=>{const{account:e,provider:t,isWalletConnected:n,chainId:r,connect:a}=he(),s=Dn(),o=Ze.coreContractChain===r,{mutate:u}=Jn(),{mutate:w}=it(),[x,c]=E.useState("channelInfo"),[d,f]=E.useState(["channelInfo"]),v=p=>{f([...new Set([...d,p])]),c(p)},[y,m]=E.useState(!1),[h,l]=E.useState(R),[b,U]=E.useState(ye),j=(p,_,S)=>{l(T=>({...T,progress:p,progressInfo:_,processingInfo:S}))},D=(p,_)=>{U(S=>({...S,txErrorStatus:p,txError:_}))},je=(p,_)=>{u({noOfTokenToApprove:we,signer:p},{onSuccess:S=>{S.status===1&&(j(60,"Please complete the transaction in your wallet to continue.","Approving PUSH"),B(p,_))},onError:S=>(console.log("Error in approving PUSH Token",S),S.code===4001||S.code==="ACTION_REJECTED"?(console.log("Signature error ",S),D(1,"User Rejected Signature. Please try again.")):D(2,"Transaction failed due to one of the following reasons:"),l(R),!1)})},B=(p,_)=>{let S=Fn.GENERAL;const T="1+"+_,A=Nn(T);j(70,"Please complete the transaction in your wallet to continue.","Creating Channel..."),w({channelType:S,identityBytes:A,fees:we,signer:p},{onSuccess:k=>{k.status===0?D(2,"Transaction failed due to one of the following reasons:"):(j(80,"Please wait while we confirm the transaction..","Transaction Confirmed.."),setTimeout(()=>{j(90,"Creating your channel, Aligning pixels, adjusting padding... This may take some time.","Redirecting... Please do not refresh")},2e3),setTimeout(()=>{j(100,"Creating your channel, Aligning pixels, adjusting padding... This may take some time.","Redirecting... Please do not refresh"),s(`${Mn.ChannelDashboard}/${e}`)},3e3))},onError:k=>{console.log("Error in transaction from query >>>>",k),k.code===4001||k.code==="ACTION_REJECTED"?(console.log("Signature error ",k),D(1,"User Rejected Signature. Please try again."),l(R)):(console.error("Error in creating channel--> %o",k),console.error({error:k}),j(0,"There was an error in creating the Channel","Kindly Contact support@epns.io to resolve the issue."))}})},P=async p=>{if(l(R),U(ye),!n){a();return}j(10,"Checking for PUSH Token Approval","Loading...");const _=await We({provider:t,account:e}),S=JSON.stringify({name:p.channelName,info:p.channelDesc,url:p.channelURL,icon:p.image});j(20,"Please wait, payload is getting uploaded to IPFS","Loading...");let T=await qn(S);console.debug("IPFS storagePointer:",T),j(40,"Please complete the transaction in your wallet to continue.","Uploading Payload...");var A=t.getSigner(e);console.debug(A),_<50?je(A,T):B(A,T)};return i.jsx(Oe,{onSubmit:p=>P(p),children:i.jsxs(g,{padding:{dp:"spacing-lg",ml:"spacing-sm"},display:"flex",flexDirection:"column",gap:"spacing-xl",alignSelf:"center",width:{dp:"648px",ml:"357px"},borderRadius:"radius-md",alignItems:"center",backgroundColor:"surface-primary",margin:{dp:"spacing-lg",ml:"spacing-sm"},children:[i.jsx(Ge,{}),!o&&i.jsx(Ve,{}),o&&i.jsxs(i.Fragment,{children:[b.txErrorStatus!==0&&i.jsx(g,{width:"100%",children:i.jsx(Bn,{variant:"error",heading:b.txError,showIcon:!0})}),h.progress?i.jsx(Je,{progressState:h}):i.jsxs(g,{display:"flex",flexDirection:"column",gap:"spacing-lg",alignItems:"center",alignSelf:"stretch",children:[i.jsx(g,{width:"100%",children:i.jsx(Rn,{steps:Ae,completedSteps:d,setActiveStepKey:p=>c(p)})}),x=="channelInfo"&&i.jsx(Re,{handleNextStep:v,setActiveStepKey:c}),x==="uploadLogo"&&i.jsx(qe,{view:y,setView:m,setActiveStepKey:c,handleNextStep:v}),x==="stakeFees"&&i.jsx(He,{channelStakeFees:ce,handleNextStep:v})]})]})]})})}});export{et as C,ar as __tla,tt as v};
