import{d_ as i,ei as xn,fz as Ke,fA as Ie,fy as Xe,fW as vn,j5 as wn,j6 as jn,j7 as Sn,fw as de,j8 as Ye,j9 as $e,ja as Cn,jb as In,ev as bn,dV as he,d$ as f,go as Ze,gp as En,gq as Pn,em as G,e2 as b,fi as _n,fk as Un,jc as kn,ed as be,ec as Tn,dX as E,f1 as Ln,hp as Dn,e3 as Nn,fY as Bn,dW as Mn,gn as Fn,ix as On,it as Rn,dZ as An,iU as Gn,__tla as Jn}from"./index-M6dEtZnK.js";import{S as Vn,g as Wn,u as Hn,__tla as qn}from"./StakingVariant-BCvMXUXG.js";import{S as zn,__tla as Kn}from"./Stepper-CMrfTY6v.js";import{u as Xn,__tla as Yn}from"./useGetChannelCategories-DtiVWrRq.js";import{c as $n,a as ue,u as Zn,F as Qn,b as er,__tla as tr}from"./index.esm-B4A5iTqa.js";import{g as pe,a as Qe,U as nr}from"./Common.form-Ds5bAxK4.js";import{I as rr,__tla as ir}from"./ImportPushTokenMessage-CzPhW08h.js";import{I as ar,__tla as sr}from"./ImageClipper-BaSpTKQn.js";let et,tt,or=Promise.all([(()=>{try{return Jn}catch{}})(),(()=>{try{return qn}catch{}})(),(()=>{try{return Kn}catch{}})(),(()=>{try{return Yn}catch{}})(),(()=>{try{return tr}catch{}})(),(()=>{try{return ir}catch{}})(),(()=>{try{return sr}catch{}})()]).then(async()=>{const nt=e=>{const{svgProps:t,...n}=e;return i.jsx(xn,{componentName:"CloudUpload",icon:i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"inherit",height:"inherit",viewBox:"0 0 53 52",fill:"none",...t,children:[i.jsx("path",{d:"M16.1888 26.3978L26.7966 15.7901L37.4043 26.3978",stroke:"#C4CBD5","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),i.jsx("path",{d:"M27.0618 50.0001V16.8509",stroke:"#C4CBD5","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),i.jsx("path",{d:"M21.4927 35.4144H11.1502C8.05625 35.0608 1.86841 32.4972 1.86841 25.0718C1.86841 17.6464 8.05625 14.9061 11.1502 14.4641C11.769 10.3094 15.6585 2 26.2662 2C39.2607 2 41.0286 10.8398 41.9126 16.0553C45.0065 15.9669 51.4596 19.2906 51.4596 26.9282C51.2828 29.7569 49.6032 35.4144 44.2993 35.4144C38.9955 35.4144 34.1336 35.4144 32.3656 35.4144",stroke:"#C4CBD5","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),...n})},rt=async e=>{const{channelType:t,identityBytes:n,fees:r,signer:a}=e;return(await new Ke(Ie.epnscore,Xe.epnscore,a).createChannelWithPUSH(t,n,r,0,{gasLimit:6e5})).wait()},it=()=>vn({mutationKey:[wn],mutationFn:rt});var ge={exports:{}},fe={exports:{}},at=Sn(),Ee=jn().EventEmitter;fe.exports=C,fe.exports.default=C;function C(e){if(!(this instanceof C))return new C(e);Ee.call(this),e=e||{},this.concurrency=e.concurrency||1/0,this.timeout=e.timeout||0,this.autostart=e.autostart||!1,this.results=e.results||null,this.pending=0,this.session=0,this.running=!1,this.jobs=[],this.timers={}}at(C,Ee);var st=["pop","shift","indexOf","lastIndexOf"];st.forEach(function(e){C.prototype[e]=function(){return Array.prototype[e].apply(this.jobs,arguments)}}),C.prototype.slice=function(e,t){return this.jobs=this.jobs.slice(e,t),this},C.prototype.reverse=function(){return this.jobs.reverse(),this};var ot=["push","unshift","splice"];ot.forEach(function(e){C.prototype[e]=function(){var t=Array.prototype[e].apply(this.jobs,arguments);return this.autostart&&this.start(),t}}),Object.defineProperty(C.prototype,"length",{get:function(){return this.pending+this.jobs.length}}),C.prototype.start=function(e){if(e&&ct.call(this,e),this.running=!0,this.pending>=this.concurrency)return;if(this.jobs.length===0){this.pending===0&&me.call(this);return}var t=this,n=this.jobs.shift(),r=!0,a=this.session,s=null,o=!1,g=null,w=n.timeout||this.timeout;function y(d,v){r&&t.session===a&&(r=!1,t.pending--,s!==null&&(delete t.timers[s],clearTimeout(s)),d?t.emit("error",d,n):o===!1&&(g!==null&&(t.results[g]=Array.prototype.slice.call(arguments,1)),t.emit("success",v,n)),t.session===a&&(t.pending===0&&t.jobs.length===0?me.call(t):t.running&&t.start()))}w&&(s=setTimeout(function(){o=!0,t.listeners("timeout").length>0?t.emit("timeout",y,n):y()},w),this.timers[s]=s),this.results&&(g=this.results.length,this.results[g]=null),this.pending++,t.emit("start",n);var c=n(y);c&&c.then&&typeof c.then=="function"&&c.then(function(d){return y(null,d)}).catch(function(d){return y(d||!0)}),this.running&&this.jobs.length>0&&this.start()},C.prototype.stop=function(){this.running=!1},C.prototype.end=function(e){lt.call(this),this.jobs.length=0,this.pending=0,me.call(this,e)};function lt(){for(var e in this.timers){var t=this.timers[e];delete this.timers[e],clearTimeout(t)}}function ct(e){var t=this;this.on("error",n),this.on("end",r);function n(a){t.end(a)}function r(a){t.removeListener("error",n),t.removeListener("end",r),e(a,this.results)}}function me(e){this.session++,this.running=!1,this.emit("end",e)}var dt=fe.exports,B={},J={};Object.defineProperty(J,"__esModule",{value:!0}),J.BMP=void 0,J.BMP={validate(e){return e.toString("ascii",0,2)==="BM"},calculate(e){return{height:Math.abs(e.readInt32LE(22)),width:e.readUInt32LE(18)}}};var V={},M={};Object.defineProperty(M,"__esModule",{value:!0}),M.ICO=void 0;const ht=1,ut=6,pt=16;function Pe(e,t){const n=e.readUInt8(t);return n===0?256:n}function _e(e,t){const n=ut+t*pt;return{height:Pe(e,n+1),width:Pe(e,n)}}M.ICO={validate(e){return e.readUInt16LE(0)!==0?!1:e.readUInt16LE(2)===ht},calculate(e){const t=e.readUInt16LE(4),n=_e(e,0);if(t===1)return n;const r=[n];for(let a=1;a<t;a+=1)r.push(_e(e,a));return{height:n.height,images:r,width:n.width}}},Object.defineProperty(V,"__esModule",{value:!0}),V.CUR=void 0;const gt=M,ft=2;V.CUR={validate(e){return e.readUInt16LE(0)!==0?!1:e.readUInt16LE(2)===ft},calculate(e){return gt.ICO.calculate(e)}};var W={};Object.defineProperty(W,"__esModule",{value:!0}),W.DDS=void 0,W.DDS={validate(e){return e.readUInt32LE(0)===542327876},calculate(e){return{height:e.readUInt32LE(12),width:e.readUInt32LE(16)}}};var H={};Object.defineProperty(H,"__esModule",{value:!0}),H.GIF=void 0;const mt=/^GIF8[79]a/;H.GIF={validate(e){const t=e.toString("ascii",0,6);return mt.test(t)},calculate(e){return{height:e.readUInt16LE(8),width:e.readUInt16LE(6)}}};var q={};Object.defineProperty(q,"__esModule",{value:!0}),q.ICNS=void 0;const yt=8,xt=4,vt=4,wt={ICON:32,"ICN#":32,"icm#":16,icm4:16,icm8:16,"ics#":16,ics4:16,ics8:16,is32:16,s8mk:16,icp4:16,icl4:32,icl8:32,il32:32,l8mk:32,icp5:32,ic11:32,ich4:48,ich8:48,ih32:48,h8mk:48,icp6:64,ic12:32,it32:128,t8mk:128,ic07:128,ic08:256,ic13:256,ic09:512,ic14:512,ic10:1024};function Ue(e,t){const n=t+vt;return[e.toString("ascii",t,n),e.readUInt32BE(n)]}function ke(e){const t=wt[e];return{width:t,height:t,type:e}}q.ICNS={validate(e){return e.toString("ascii",0,4)==="icns"},calculate(e){const t=e.length,n=e.readUInt32BE(xt);let r=yt,a=Ue(e,r),s=ke(a[0]);if(r+=a[1],r===n)return s;const o={height:s.height,images:[s],width:s.width};for(;r<n&&r<t;)a=Ue(e,r),s=ke(a[0]),r+=a[1],o.images.push(s);return o}};var z={};Object.defineProperty(z,"__esModule",{value:!0}),z.J2C=void 0,z.J2C={validate(e){return e.toString("hex",0,4)==="ff4fff51"},calculate(e){return{height:e.readUInt32BE(12),width:e.readUInt32BE(8)}}};var K={};Object.defineProperty(K,"__esModule",{value:!0}),K.JP2=void 0;const X={ftyp:"66747970",ihdr:"69686472",jp2h:"6a703268",jp__:"6a502020",rreq:"72726571",xml_:"786d6c20"},jt=e=>{const t=e.readUInt8(0);let n=1+2*t;const r=e.readUInt16BE(n)*(2+t);n=n+2+r;const a=e.readUInt16BE(n)*(16+t);return n+2+a},Te=e=>({height:e.readUInt32BE(4),width:e.readUInt32BE(8)});K.JP2={validate(e){const t=e.toString("hex",4,8),n=e.readUInt32BE(0);if(t!==X.jp__||n<1)return!1;const r=n+4,a=e.readUInt32BE(n);return e.slice(r,r+a).toString("hex",0,4)===X.ftyp},calculate(e){const t=e.readUInt32BE(0),n=e.readUInt16BE(t+2);let r=t+4+n;switch(e.toString("hex",r,r+4)){case X.rreq:return r=r+4+4+jt(e.slice(r+4)),Te(e.slice(r+8,r+24));case X.jp2h:return Te(e.slice(r+8,r+24));default:throw new TypeError("Unsupported header found: "+e.toString("ascii",r,r+4))}}};var Y={},F={};Object.defineProperty(F,"__esModule",{value:!0}),F.readUInt=void 0;function St(e,t,n,r){n=n||0;const a=r?"BE":"LE",s="readUInt"+t+a;return e[s].call(e,n)}F.readUInt=St,Object.defineProperty(Y,"__esModule",{value:!0}),Y.JPG=void 0;const O=F,Ct="45786966",It=2,ye=6,bt=2,Et="4d4d",Pt="4949",Le=12,_t=2;function Ut(e){return e.toString("hex",2,6)===Ct}function kt(e,t){return{height:e.readUInt16BE(t),width:e.readUInt16BE(t+2)}}function Tt(e,t){const n=ye+8,r=O.readUInt(e,16,n,t);for(let a=0;a<r;a++){const s=n+_t+a*Le,o=s+Le;if(s>e.length)return;const g=e.slice(s,o);if(O.readUInt(g,16,0,t)===274)return O.readUInt(g,16,2,t)!==3||O.readUInt(g,32,4,t)!==1?void 0:O.readUInt(g,16,8,t)}}function Lt(e,t){const n=e.slice(It,t),r=n.toString("hex",ye,ye+bt),a=r===Et;if(a||r===Pt)return Tt(n,a)}function Dt(e,t){if(t>e.length)throw new TypeError("Corrupt JPG, exceeded buffer limits");if(e[t]!==255)throw new TypeError("Invalid JPG, marker table corrupted")}Y.JPG={validate(e){return e.toString("hex",0,2)==="ffd8"},calculate(e){e=e.slice(4);let t,n;for(;e.length;){const r=e.readUInt16BE(0);if(Ut(e)&&(t=Lt(e,r)),Dt(e,r),n=e[r+1],n===192||n===193||n===194){const a=kt(e,r+5);return t?{height:a.height,orientation:t,width:a.width}:a}e=e.slice(r+2)}throw new TypeError("Invalid JPG, no size found")}};var $={};Object.defineProperty($,"__esModule",{value:!0}),$.KTX=void 0;const Nt="KTX 11";$.KTX={validate(e){return Nt===e.toString("ascii",1,7)},calculate(e){return{height:e.readUInt32LE(40),width:e.readUInt32LE(36)}}};var Z={};Object.defineProperty(Z,"__esModule",{value:!0}),Z.PNG=void 0;const Bt=`PNG\r

`,Mt="IHDR",De="CgBI";Z.PNG={validate(e){if(Bt===e.toString("ascii",1,8)){let t=e.toString("ascii",12,16);if(t===De&&(t=e.toString("ascii",28,32)),t!==Mt)throw new TypeError("Invalid PNG");return!0}return!1},calculate(e){return e.toString("ascii",12,16)===De?{height:e.readUInt32BE(36),width:e.readUInt32BE(32)}:{height:e.readUInt32BE(20),width:e.readUInt32BE(16)}}};var Q={};Object.defineProperty(Q,"__esModule",{value:!0}),Q.PNM=void 0;const Ne={P1:"pbm/ascii",P2:"pgm/ascii",P3:"ppm/ascii",P4:"pbm",P5:"pgm",P6:"ppm",P7:"pam",PF:"pfm"},Ft=Object.keys(Ne),Be={default:e=>{let t=[];for(;e.length>0;){const n=e.shift();if(n[0]!=="#"){t=n.split(" ");break}}if(t.length===2)return{height:parseInt(t[1],10),width:parseInt(t[0],10)};throw new TypeError("Invalid PNM")},pam:e=>{const t={};for(;e.length>0;){const n=e.shift();if(n.length>16||n.charCodeAt(0)>128)continue;const[r,a]=n.split(" ");if(r&&a&&(t[r.toLowerCase()]=parseInt(a,10)),t.height&&t.width)break}if(t.height&&t.width)return{height:t.height,width:t.width};throw new TypeError("Invalid PAM")}};Q.PNM={validate(e){const t=e.toString("ascii",0,2);return Ft.includes(t)},calculate(e){const t=e.toString("ascii",0,2),n=Ne[t],r=e.toString("ascii",3).split(/[\r\n]+/);return(Be[n]||Be.default)(r)}};var ee={};Object.defineProperty(ee,"__esModule",{value:!0}),ee.PSD=void 0,ee.PSD={validate(e){return e.toString("ascii",0,4)==="8BPS"},calculate(e){return{height:e.readUInt32BE(14),width:e.readUInt32BE(18)}}};var te={};Object.defineProperty(te,"__esModule",{value:!0}),te.SVG=void 0;const Me=/<svg\s([^>"']|"[^"]*"|'[^']*')*>/,ne={height:/\sheight=(['"])([^%]+?)\1/,root:Me,viewbox:/\sviewBox=(['"])(.+?)\1/,width:/\swidth=(['"])([^%]+?)\1/},xe=2.54,Ot={cm:96/xe,em:16,ex:8,m:96/xe*100,mm:96/xe/10,pc:96/72/12,pt:96/72};function re(e){const t=/([0-9.]+)([a-z]*)/.exec(e);if(t)return Math.round(parseFloat(t[1])*(Ot[t[2]]||1))}function Rt(e){const t=e.split(" ");return{height:re(t[3]),width:re(t[2])}}function At(e){const t=e.match(ne.width),n=e.match(ne.height),r=e.match(ne.viewbox);return{height:n&&re(n[2]),viewbox:r&&Rt(r[2]),width:t&&re(t[2])}}function Gt(e){return{height:e.height,width:e.width}}function Jt(e,t){const n=t.width/t.height;return e.width?{height:Math.floor(e.width/n),width:e.width}:e.height?{height:e.height,width:Math.floor(e.height*n)}:{height:t.height,width:t.width}}te.SVG={validate(e){const t=String(e);return Me.test(t)},calculate(e){const t=e.toString("utf8").match(ne.root);if(t){const n=At(t[0]);if(n.width&&n.height)return Gt(n);if(n.viewbox)return Jt(n,n.viewbox)}throw new TypeError("Invalid SVG")}};var ie={};Object.defineProperty(ie,"__esModule",{value:!0}),ie.TIFF=void 0;const ae=Ye,L=F;function Vt(e,t,n){const r=L.readUInt(e,32,4,n);let a=1024;const s=ae.statSync(t).size;r+a>s&&(a=s-r-10);const o=de.alloc(a),g=ae.openSync(t,"r");return ae.readSync(g,o,0,a,r),ae.closeSync(g),o.slice(2)}function Wt(e,t){const n=L.readUInt(e,16,8,t);return(L.readUInt(e,16,10,t)<<16)+n}function Ht(e){if(e.length>24)return e.slice(12)}function qt(e,t){const n={};let r=e;for(;r&&r.length;){const a=L.readUInt(r,16,0,t),s=L.readUInt(r,16,2,t),o=L.readUInt(r,32,4,t);if(a===0)break;o===1&&(s===3||s===4)&&(n[a]=Wt(r,t)),r=Ht(r)}return n}function zt(e){const t=e.toString("ascii",0,2);if(t==="II")return"LE";if(t==="MM")return"BE"}const Kt=["49492a00","4d4d002a"];ie.TIFF={validate(e){return Kt.includes(e.toString("hex",0,4))},calculate(e,t){if(!t)throw new TypeError("Tiff doesn't support buffer");const n=zt(e)==="BE",r=Vt(e,t,n),a=qt(r,n),s=a[256],o=a[257];if(!s||!o)throw new TypeError("Invalid Tiff. Missing tags");return{height:o,width:s}}};var se={};Object.defineProperty(se,"__esModule",{value:!0}),se.WEBP=void 0;function Xt(e){return{height:1+e.readUIntLE(7,3),width:1+e.readUIntLE(4,3)}}function Yt(e){return{height:1+((e[4]&15)<<10|e[3]<<2|(e[2]&192)>>6),width:1+((e[2]&63)<<8|e[1])}}function $t(e){return{height:e.readInt16LE(8)&16383,width:e.readInt16LE(6)&16383}}se.WEBP={validate(e){const t=e.toString("ascii",0,4)==="RIFF",n=e.toString("ascii",8,12)==="WEBP",r=e.toString("ascii",12,15)==="VP8";return t&&n&&r},calculate(e){const t=e.toString("ascii",12,16);if(e=e.slice(20,30),t==="VP8X"){const r=e[0],a=(r&192)===0,s=(r&1)===0;if(a&&s)return Xt(e);throw new TypeError("Invalid WebP")}if(t==="VP8 "&&e[0]!==47)return $t(e);const n=e.toString("hex",3,6);if(t==="VP8L"&&n!=="9d012a")return Yt(e);throw new TypeError("Invalid WebP")}},Object.defineProperty(B,"__esModule",{value:!0}),B.typeHandlers=void 0;const Zt=J,Qt=V,en=W,tn=H,nn=q,rn=M,an=z,sn=K,on=Y,ln=$,cn=Z,dn=Q,hn=ee,un=te,pn=ie,gn=se;B.typeHandlers={bmp:Zt.BMP,cur:Qt.CUR,dds:en.DDS,gif:tn.GIF,icns:nn.ICNS,ico:rn.ICO,j2c:an.J2C,jp2:sn.JP2,jpg:on.JPG,ktx:ln.KTX,png:cn.PNG,pnm:dn.PNM,psd:hn.PSD,svg:un.SVG,tiff:pn.TIFF,webp:gn.WEBP};var oe={};Object.defineProperty(oe,"__esModule",{value:!0}),oe.detector=void 0;const ve=B,fn=Object.keys(ve.typeHandlers),Fe={56:"psd",66:"bmp",68:"dds",71:"gif",73:"tiff",77:"tiff",82:"webp",105:"icns",137:"png",255:"jpg"};function mn(e){const t=e[0];if(t in Fe){const r=Fe[t];if(ve.typeHandlers[r].validate(e))return r}const n=r=>ve.typeHandlers[r].validate(e);return fn.find(n)}oe.detector=mn,function(e,t){var n=$e&&$e.__awaiter||function(u,m,h,l){function I(U){return U instanceof h?U:new h(function(j){j(U)})}return new(h||(h=Promise))(function(U,j){function D(P){try{N(l.next(P))}catch(p){j(p)}}function Ce(P){try{N(l.throw(P))}catch(p){j(p)}}function N(P){P.done?U(P.value):I(P.value).then(D,Ce)}N((l=l.apply(u,m||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.types=t.setConcurrency=t.imageSize=void 0;const r=Ye,a=In,s=dt,o=B,g=oe,w=512*1024,y=new s.default({concurrency:100,autostart:!0});function c(u,m){const h=g.detector(u);if(h&&h in o.typeHandlers){const l=o.typeHandlers[h].calculate(u,m);if(l!==void 0)return l.type=h,l}throw new TypeError("unsupported file type: "+h+" (file: "+m+")")}function d(u){return n(this,void 0,void 0,function*(){const m=yield r.promises.open(u,"r"),{size:h}=yield m.stat();if(h<=0)throw yield m.close(),new Error("Empty file");const l=Math.min(h,w),I=de.alloc(l);return yield m.read(I,0,l,0),yield m.close(),I})}function v(u){const m=r.openSync(u,"r"),{size:h}=r.fstatSync(m);if(h<=0)throw r.closeSync(m),new Error("Empty file");const l=Math.min(h,w),I=de.alloc(l);return r.readSync(m,I,0,l,0),r.closeSync(m),I}e.exports=t=x,t.default=x;function x(u,m){if(de.isBuffer(u))return c(u);if(typeof u!="string")throw new TypeError("invalid invocation");const h=a.resolve(u);if(typeof m=="function")y.push(()=>d(h).then(l=>Cn.nextTick(m,null,c(l,h))).catch(m));else{const l=v(h);return c(l,h)}}t.imageSize=x,t.setConcurrency=u=>{y.concurrency=u},t.types=Object.keys(o.typeHandlers)}(ge,ge.exports);var yn=ge.exports;let Oe,Re,le,Ae,ce,Ge,R,we,Je,Ve,We,He,je,qe,ze,Se;tt=bn(yn),Oe=$n().shape({channelName:ue().required(pe("Channel Name")).max(32,Qe(32)),channelDesc:ue().required(pe("Channel Description")).max(250,Qe(250)),channelCategory:ue().required(pe("Channel Category")),channelURL:ue().required(pe("Channel URL")).test("url","Please enter a valid channel url",e=>nr.test(e))}),Re=({children:e,onSubmit:t})=>{const n=Zn({initialValues:{channelName:"",channelDesc:"",channelCategory:"",channelURL:"",image:null},validationSchema:Oe,onSubmit:t});return i.jsx(Qn,{value:n,children:e})},le=()=>{const e=er();if(!e)throw new Error("useChainAliasFormikContext must be used within a FormikChainAliasProvider");return e},Ae=({handleNextStep:e,setActiveStepKey:t})=>{const{values:n,touched:r,setFieldTouched:a,setFieldValue:s,errors:o,validateForm:g,setTouched:w}=le(),{isWalletConnected:y,connect:c}=he(),{data:d}=Xn(),v=()=>{g().then(x=>{w({channelName:!0,channelDesc:!0,channelCategory:!0,channelURL:!0}),Object.keys(x).length===0&&(y||c(),e("uploadLogo"),t("uploadLogo"))})};return i.jsx(f,{display:"flex",flexDirection:"column",alignSelf:"stretch",children:i.jsxs(f,{display:"flex",flexDirection:"column",gap:"spacing-xl",alignSelf:"stretch",children:[i.jsxs(f,{display:"flex",flexDirection:"column",gap:"spacing-sm",alignSelf:"stretch",children:[i.jsx(Ze,{required:!0,label:"Channel Name",value:n.channelName,onChange:x=>{const u=x.target.value;a("channelName",!0),s("channelName",u)},totalCount:32,error:r.channelName&&!!(o!=null&&o.channelName),errorMessage:r.channelName?o==null?void 0:o.channelName:""}),i.jsx(En,{required:!0,label:"Channel Category",options:(d==null?void 0:d.selectFieldTags)||[],value:n.channelCategory,error:r.channelCategory&&!!(o!=null&&o.channelCategory),errorMessage:r.channelCategory?o==null?void 0:o.channelCategory:"",onSelect:x=>{a("channelCategory",!0),s("channelCategory",x)}}),i.jsx(Pn,{required:!0,label:"Channel Description",placeholder:"Get notified about ...",description:"Enter a Brief description of the notifications the user will receive",value:n.channelDesc,onChange:x=>{const u=x.target.value;a("channelDesc",!0),s("channelDesc",u)},totalCount:250,error:r.channelDesc&&!!(o!=null&&o.channelDesc),errorMessage:r.channelURL?o==null?void 0:o.channelDesc:""}),i.jsx(Ze,{required:!0,label:"Channel Website URL",value:n.channelURL,onChange:x=>{const u=x.target.value;a("channelURL",!0),s("channelURL",u)},error:r.channelURL&&!!(o!=null&&o.channelURL),errorMessage:r.channelURL?o==null?void 0:o.channelURL:""})]}),i.jsx(f,{display:"flex",justifyContent:"center",children:i.jsx(G,{onClick:v,children:"Next"})})]})})},ce=50,Ge=[{label:"Channel Info",value:"channelInfo"},{label:"Upload Logo",value:"uploadLogo"},{label:"Stake Fees",value:"stakeFees"}],R={progress:null,progressInfo:"",processingInfo:""},we={txErrorStatus:0,txError:""},Je=()=>i.jsxs(f,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing-xxs",alignSelf:"stretch",children:[i.jsx(b,{variant:"h3-semibold",color:"text-primary",display:{ml:"none",initial:"block"},children:"Create Your Channel"}),i.jsx(b,{variant:"bs-regular",color:"text-tertiary",display:{ml:"none",initial:"block"},children:"Creating your own notification channel to manage, send and notify users."}),i.jsx(b,{variant:"h4-semibold",color:"text-primary",display:{ml:"block",initial:"none"},children:"Create Your Channel"}),i.jsx(b,{variant:"bes-regular",color:"text-tertiary",display:{ml:"block",initial:"none"},textAlign:"center",children:"Creating your own notification channel to manage, send and notify users."})]}),Ve=({progressState:e})=>i.jsxs(f,{display:"flex",flexDirection:"column",alignSelf:"stretch",gap:"spacing-xl",alignItems:"center",children:[i.jsx(f,{padding:"spacing-md",backgroundColor:"surface-secondary",borderRadius:"radius-sm",width:"-webkit-fill-available",children:i.jsx(b,{textAlign:"center",variant:"h5-semibold",color:"text-brand-medium",children:e.progressInfo})}),i.jsx(f,{width:"400px",children:i.jsx(_n,{percent:e.progress,color:"#D548EC",backgroundColor:"#F3AEFF",height:"4px"})}),i.jsxs(f,{display:"flex",flexDirection:"row",alignItems:"center",gap:"spacing-xxxs",children:[i.jsx(Un,{type:kn.PROCESSING,size:16,color:"#D548EC"}),i.jsx(b,{variant:"bs-semibold",color:"text-secondary",children:e.processingInfo})]})]}),We=()=>{const{switchChain:e}=he(),t=be.allowedNetworks[0],n=Tn[t];return i.jsxs(i.Fragment,{children:[i.jsx(f,{display:"flex",flexDirection:"column",padding:"spacing-md",backgroundColor:"surface-secondary",borderRadius:"radius-sm",width:"-webkit-fill-available",children:i.jsxs(b,{textAlign:"center",variant:"h5-semibold",color:"text-brand-medium",children:["Please select ",n," Network in your Wallet to create a channel."]})}),i.jsx(f,{display:"flex",justifyContent:"center",children:i.jsx(G,{onClick:()=>e(be.coreContractChain),children:"Change Network"})})]})},He=({channelStakeFees:e,handleNextStep:t})=>{const n=ce,{provider:r,account:a,isWalletConnected:s,connect:o}=he(),[g,w]=E.useState(0),[y,c]=E.useState(!1),[d,v]=E.useState(!1),x=async()=>{v(!0);const l=await Wn({address:a,provider:r});v(!1),w(l)};E.useEffect(()=>{x()},[g,a]);const{handleSubmit:u,validateForm:m}=le(),h=()=>{m().then(l=>{(l.channelName||l.channelDesc||l.channelURL||l.channelCategory)&&t("channelInfo"),l.image&&t("uploadLogo"),Object.keys(l).length||u()})};return i.jsxs(f,{display:"flex",flexDirection:"column",alignSelf:"stretch",justifyContent:"center",gap:"spacing-xl",children:[i.jsxs(f,{display:"flex",flexDirection:"column",gap:"spacing-sm",children:[i.jsx(Vn,{fees:n,title:"Amount for Staking",balance:g,setBalance:w,showFaucet:!0,showBalance:!0}),i.jsx(rr,{title:"Don\u2019t see Push token in your wallet?"})]}),i.jsx(f,{display:"flex",justifyContent:"center",children:i.jsx(G,{disabled:y||g<n,onClick:()=>{h()},children:"Create Channel"})})]})},je=e=>e.type.startsWith("image/"),qe=async({provider:e,account:t})=>{let n=await new Ke(Ie.pushToken,Xe.pushToken,e).allowance(t,Ie.epnscore);n=n==null?void 0:n.toString();const r=Ln(n);return Number(r)},ze=({view:e,setView:t,setActiveStepKey:n,handleNextStep:r})=>{const a=E.useRef(),{values:s,setFieldValue:o}=le(),g=async c=>{var v;const d=(v=c.currentTarget.files)==null?void 0:v[0];t(!1),d&&je(d)&&await y(d)},w=async c=>{var v;c.preventDefault(),c.stopPropagation(),t(!1);const d=(v=c.dataTransfer.files)==null?void 0:v[0];d&&je(d)&&await y(d)},y=async c=>{o("image",c);const d=new FileReader;d.readAsDataURL(c),d.onloadend=()=>{o("imageSrc",d.result),o("imageType",c.type)}};return i.jsxs(f,{display:"flex",flexDirection:"column",gap:"spacing-lg",alignItems:"center",alignSelf:"stretch",children:[i.jsxs(f,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing-lg",children:[i.jsx(b,{variant:"bes-regular",color:"text-tertiary",children:"Upload a PNG, JPG upto 1MB. Crop the image to resize to 128px."}),i.jsx(Dn,{id:"file-upload",onChange:g,onDrop:w,children:i.jsxs(f,{width:{initial:"500px",ml:"325px"},padding:"spacing-xxl spacing-none",display:"flex",flexDirection:"column",alignItems:"center",border:"border-xs dashed stroke-tertiary",borderRadius:"radius-md",backgroundColor:"surface-secondary",gap:"spacing-md",children:[s!=null&&s.image?e?i.jsx(f,{width:"128px",height:"128px",borderRadius:"radius-md",children:i.jsx("img",{style:{borderRadius:"inherit"},width:"100%",height:"100%",src:s.image,alt:"Cropped Img"})}):i.jsx(ar,{width:"200px",height:"200px",imageSrc:s.imageSrc,imageType:s.imageType,onImageCropped:c=>{t(!0),o("image",c)},ref:a}):i.jsx(nt,{size:50}),i.jsxs(f,{display:"flex",gap:"spacing-xxxs",children:[i.jsx(b,{variant:"bs-semibold",color:"text-tertiary",children:" Drag and Drop or"}),i.jsx("label",{htmlFor:"file-upload",children:i.jsx(b,{variant:"bs-semibold",color:"text-brand-medium",css:Nn`cursor:pointer;`,children:"Browse to Choose"})})]})]})})]}),(s==null?void 0:s.image)&&(e?i.jsx(i.Fragment,{children:i.jsx(G,{disabled:!e&&!(s!=null&&s.image),onClick:()=>{r("stakeFees"),n("stakeFees")},children:"Next"})}):i.jsx(i.Fragment,{children:i.jsx(G,{onClick:()=>{a.current.showCroppedImage()},children:"Crop Image"})}))]})},Se=Bn(ce.toString(),18),et=()=>{const{account:e,provider:t,isWalletConnected:n,chainId:r,connect:a}=he(),s=Mn(),o=be.coreContractChain===r,{mutate:g}=Hn(),{mutate:w}=it(),[y,c]=E.useState("channelInfo"),[d,v]=E.useState(["channelInfo"]),x=p=>{v([...new Set([...d,p])]),c(p)},[u,m]=E.useState(!1),[h,l]=E.useState(R),[I,U]=E.useState(we),j=(p,_,S)=>{l(T=>({...T,progress:p,progressInfo:_,processingInfo:S}))},D=(p,_)=>{U(S=>({...S,txErrorStatus:p,txError:_}))},Ce=(p,_)=>{g({noOfTokenToApprove:Se,signer:p},{onSuccess:S=>{S.status===1&&(j(60,"Please complete the transaction in your wallet to continue.","Approving PUSH"),N(p,_))},onError:S=>(console.log("Error in approving PUSH Token",S),S.code===4001||S.code==="ACTION_REJECTED"?(console.log("Signature error ",S),D(1,"User Rejected Signature. Please try again.")):D(2,"Transaction failed due to one of the following reasons:"),l(R),!1)})},N=(p,_)=>{let S=Gn.GENERAL;const T="1+"+_,A=Rn(T);j(70,"Please complete the transaction in your wallet to continue.","Creating Channel..."),w({channelType:S,identityBytes:A,fees:Se,signer:p},{onSuccess:k=>{k.status===0?D(2,"Transaction failed due to one of the following reasons:"):(j(80,"Please wait while we confirm the transaction..","Transaction Confirmed.."),setTimeout(()=>{j(90,"Creating your channel, Aligning pixels, adjusting padding... This may take some time.","Redirecting... Please do not refresh")},2e3),setTimeout(()=>{j(100,"Creating your channel, Aligning pixels, adjusting padding... This may take some time.","Redirecting... Please do not refresh"),s(`${An.ChannelDashboard(e)}`)},3e3))},onError:k=>{console.log("Error in transaction from query >>>>",k),k.code===4001||k.code==="ACTION_REJECTED"?(console.log("Signature error ",k),D(1,"User Rejected Signature. Please try again."),l(R)):(console.error("Error in creating channel--> %o",k),console.error({error:k}),j(0,"There was an error in creating the Channel","Kindly Contact support@epns.io to resolve the issue."))}})},P=async p=>{if(l(R),U(we),!n){a();return}j(10,"Checking for PUSH Token Approval","Loading...");const _=await qe({provider:t,account:e}),S=JSON.stringify({name:p.channelName,info:p.channelDesc,url:p.channelURL,icon:p.image,tags:[p.channelCategory]});j(20,"Please wait, payload is getting uploaded to IPFS","Loading...");let T=await On(S);console.debug("IPFS storagePointer:",T),j(40,"Please complete the transaction in your wallet to continue.","Uploading Payload...");var A=t.getSigner(e);console.debug(A),_<50?Ce(A,T):N(A,T)};return i.jsx(Re,{onSubmit:p=>P(p),children:i.jsxs(f,{padding:{dp:"spacing-lg",ml:"spacing-sm"},display:"flex",flexDirection:"column",gap:"spacing-xl",alignSelf:"center",width:{dp:"648px",ml:"357px"},borderRadius:"radius-md",alignItems:"center",backgroundColor:"surface-primary",margin:{dp:"spacing-lg",ml:"spacing-sm"},children:[i.jsx(Je,{}),!o&&i.jsx(We,{}),o&&i.jsxs(i.Fragment,{children:[I.txErrorStatus!==0&&i.jsx(f,{width:"100%",children:i.jsx(Fn,{variant:"error",heading:I.txError,showIcon:!0})}),h.progress?i.jsx(Ve,{progressState:h}):i.jsxs(f,{display:"flex",flexDirection:"column",gap:"spacing-lg",alignItems:"center",alignSelf:"stretch",children:[i.jsx(f,{width:"100%",children:i.jsx(zn,{steps:Ge,completedSteps:d,setActiveStepKey:p=>c(p)})}),y=="channelInfo"&&i.jsx(Ae,{handleNextStep:x,setActiveStepKey:c}),y==="uploadLogo"&&i.jsx(ze,{view:u,setView:m,setActiveStepKey:c,handleNextStep:x}),y==="stakeFees"&&i.jsx(He,{channelStakeFees:ce,handleNextStep:x})]})]})]})})}});export{et as C,or as __tla,tt as v};
