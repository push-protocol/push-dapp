import{d as L,h as k,t as h,c as H,a as z,i as v,I as P,b as ct,e as w,f as Gt,g as Ft,j as D,F as T,T as It,k as kt,l as lt,B as g,s as ut,m as Ut,n as U,w as Ot,o as Et,p as St,H as Ct,q as N,r as dt,u as Ht,v as zt,x as m}from"./index-021f6a62-BTi0khNm.js";function O(t){return{formatters:void 0,fees:void 0,serializers:void 0,...t}}const At={gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},ht={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function R(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?z(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerBlobGas:t.maxFeePerBlobGas?BigInt(t.maxFeePerBlobGas):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?z(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?ht[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e.type==="eip1559"&&delete e.maxFeePerBlobGas,e}const Lt=L("transaction",R);function Dt(t){var n;const e=(n=t.transactions)==null?void 0:n.map(s=>typeof s=="string"?s:R(s));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,blobGasUsed:t.blobGasUsed?BigInt(t.blobGasUsed):void 0,difficulty:t.difficulty?BigInt(t.difficulty):void 0,excessBlobGas:t.excessBlobGas?BigInt(t.excessBlobGas):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}const Tt=L("block",Dt);function Nt(t,{args:e,eventName:n}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...n?{args:e,eventName:n}:{}}}const Rt={"0x0":"reverted","0x1":"success"};function Vt(t){const e={...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(n=>Nt(n)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?z(t.transactionIndex):null,status:t.status?Rt[t.status]:null,type:t.type?ht[t.type]||t.type:null};return t.blobGasPrice&&(e.blobGasPrice=BigInt(t.blobGasPrice)),t.blobGasUsed&&(e.blobGasUsed=BigInt(t.blobGasUsed)),e}const Mt=L("transactionReceipt",Vt),$t={block:Tt({format(t){var e;return{transactions:(e=t.transactions)==null?void 0:e.map(n=>{if(typeof n=="string")return n;const s=R(n);return s.typeHex==="0x7e"&&(s.isSystemTx=n.isSystemTx,s.mint=n.mint?k(n.mint):void 0,s.sourceHash=n.sourceHash,s.type="deposit"),s}),stateRoot:t.stateRoot}}}),transaction:Lt({format(t){const e={};return t.type==="0x7e"&&(e.isSystemTx=t.isSystemTx,e.mint=t.mint?k(t.mint):void 0,e.sourceHash=t.sourceHash,e.type="deposit"),e}}),transactionReceipt:Mt({format(t){return{l1GasPrice:t.l1GasPrice?k(t.l1GasPrice):null,l1GasUsed:t.l1GasUsed?k(t.l1GasUsed):null,l1Fee:t.l1Fee?k(t.l1Fee):null,l1FeeScalar:t.l1FeeScalar?Number(t.l1FeeScalar):null}}})};function E(t,e="hex"){const n=pt(t),s=ct(new Uint8Array(n.length));return n.encode(s),e==="hex"?w(s.bytes):s.bytes}function pt(t){return Array.isArray(t)?jt(t.map(e=>pt(e))):Kt(t)}function jt(t){const e=t.reduce((s,r)=>s+r.length,0),n=ft(e);return{length:e<=55?1+e:1+n+e,encode(s){e<=55?s.pushByte(192+e):(s.pushByte(247+n),n===1?s.pushUint8(e):n===2?s.pushUint16(e):n===3?s.pushUint24(e):s.pushUint32(e));for(const{encode:r}of t)r(s)}}}function Kt(t){const e=typeof t=="string"?U(t):t,n=ft(e.length);return{length:e.length===1&&e[0]<128?1:e.length<=55?1+e.length:1+n+e.length,encode(s){e.length===1&&e[0]<128?s.pushBytes(e):e.length<=55?(s.pushByte(128+e.length),s.pushBytes(e)):(s.pushByte(183+n),n===1?s.pushUint8(e.length):n===2?s.pushUint16(e.length):n===3?s.pushUint24(e.length):s.pushUint32(e.length),s.pushBytes(e))}}}function ft(t){if(t<2**8)return 1;if(t<2**16)return 2;if(t<2**24)return 3;if(t<2**32)return 4;throw new g("Length is too large.")}function bt(t){const{kzg:e}=t,n=t.to??(typeof t.blobs[0]=="string"?"hex":"bytes"),s=typeof t.blobs[0]=="string"?t.blobs.map(a=>U(a)):t.blobs,r=[];for(const a of s)r.push(Uint8Array.from(e.blobToKzgCommitment(a)));return n==="bytes"?r:r.map(a=>w(a))}function mt(t){const{kzg:e}=t,n=t.to??(typeof t.blobs[0]=="string"?"hex":"bytes"),s=typeof t.blobs[0]=="string"?t.blobs.map(o=>U(o)):t.blobs,r=typeof t.commitments[0]=="string"?t.commitments.map(o=>U(o)):t.commitments,a=[];for(let o=0;o<s.length;o++){const i=s[o],c=r[o];a.push(Uint8Array.from(e.computeBlobKzgProof(i,c)))}return n==="bytes"?a:a.map(o=>w(o))}function _t(t,e,n,s){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,s);const r=BigInt(32),a=BigInt(4294967295),o=Number(n>>r&a),i=Number(n&a),c=s?4:0,d=s?0:4;t.setUint32(e+c,o,s),t.setUint32(e+d,i,s)}class qt extends Ct{constructor(e,n,s,r){super(),this.blockLen=e,this.outputLen=n,this.padOffset=s,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=N(this.buffer)}update(e){dt(this);const{view:n,buffer:s,blockLen:r}=this;e=Ht(e);const a=e.length;for(let o=0;o<a;){const i=Math.min(r-this.pos,a-o);if(i===r){const c=N(e);for(;r<=a-o;o+=r)this.process(c,o);continue}s.set(e.subarray(o,o+i),this.pos),this.pos+=i,o+=i,this.pos===r&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){dt(this),zt(e,this),this.finished=!0;const{buffer:n,view:s,blockLen:r,isLE:a}=this;let{pos:o}=this;n[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>r-o&&(this.process(s,0),o=0);for(let u=o;u<r;u++)n[u]=0;_t(s,r-8,BigInt(this.length*8),a),this.process(s,0);const i=N(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const d=c/4,p=this.get();if(d>p.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<d;u++)i.setUint32(4*u,p[u],a)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const s=e.slice(0,n);return this.destroy(),s}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:s,length:r,finished:a,destroyed:o,pos:i}=this;return e.length=r,e.pos=i,e.finished=a,e.destroyed=o,r%n&&e.buffer.set(s),e}}const Jt=(t,e,n)=>t&e^~t&n,Qt=(t,e,n)=>t&e^t&n^e&n,Wt=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),x=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),y=new Uint32Array(64);class Xt extends qt{constructor(){super(64,32,8,!1),this.A=x[0]|0,this.B=x[1]|0,this.C=x[2]|0,this.D=x[3]|0,this.E=x[4]|0,this.F=x[5]|0,this.G=x[6]|0,this.H=x[7]|0}get(){const{A:e,B:n,C:s,D:r,E:a,F:o,G:i,H:c}=this;return[e,n,s,r,a,o,i,c]}set(e,n,s,r,a,o,i,c){this.A=e|0,this.B=n|0,this.C=s|0,this.D=r|0,this.E=a|0,this.F=o|0,this.G=i|0,this.H=c|0}process(e,n){for(let u=0;u<16;u++,n+=4)y[u]=e.getUint32(n,!1);for(let u=16;u<64;u++){const b=y[u-15],f=y[u-2],G=m(b,7)^m(b,18)^b>>>3,S=m(f,17)^m(f,19)^f>>>10;y[u]=S+y[u-7]+G+y[u-16]|0}let{A:s,B:r,C:a,D:o,E:i,F:c,G:d,H:p}=this;for(let u=0;u<64;u++){const b=m(i,6)^m(i,11)^m(i,25),f=p+b+Jt(i,c,d)+Wt[u]+y[u]|0,G=(m(s,2)^m(s,13)^m(s,22))+Qt(s,r,a)|0;p=d,d=c,c=i,i=o+f|0,o=a,a=r,r=s,s=f+G|0}s=s+this.A|0,r=r+this.B|0,a=a+this.C|0,o=o+this.D|0,i=i+this.E|0,c=c+this.F|0,d=d+this.G|0,p=p+this.H|0,this.set(s,r,a,o,i,c,d,p)}roundClean(){y.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Yt=Ot(()=>new Xt);function Zt(t,e){return Yt(St(t,{strict:!1})?Et(t):t)}function te(t){const{commitment:e,version:n=1}=t,s=t.to??(typeof e=="string"?"hex":"bytes"),r=Zt(e);return r.set([n],0),s==="bytes"?r:w(r)}function ee(t){const{commitments:e,version:n}=t,s=t.to??(typeof e[0]=="string"?"hex":"bytes"),r=[];for(const a of e)r.push(te({commitment:a,to:s,version:n}));return r}const gt=6,xt=32,V=4096,yt=xt*V,Bt=yt*gt-1-1*V*gt,vt=1;class se extends g{constructor({maxSize:e,size:n}){super("Blob size is too large.",{metaMessages:[`Max: ${e} bytes`,`Given: ${n} bytes`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlobSizeTooLargeError"})}}class Pt extends g{constructor(){super("Blob data must not be empty."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EmptyBlobError"})}}class ne extends g{constructor({hash:e,size:n}){super(`Versioned hash "${e}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${n}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashSizeError"})}}class re extends g{constructor({hash:e,version:n}){super(`Versioned hash "${e}" version is invalid.`,{metaMessages:[`Expected: ${vt}`,`Received: ${n}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashVersionError"})}}function ae(t){const e=t.to??(typeof t.data=="string"?"hex":"bytes"),n=typeof t.data=="string"?U(t.data):t.data,s=ut(n);if(!s)throw new Pt;if(s>Bt)throw new se({maxSize:Bt,size:s});const r=[];let a=!0,o=0;for(;a;){const i=ct(new Uint8Array(yt));let c=0;for(;c<V;){const d=n.slice(o,o+(xt-1));if(i.pushByte(0),i.pushBytes(d),d.length<31){i.pushByte(128),a=!1;break}c++,o+=31}r.push(i)}return e==="bytes"?r.map(i=>i.bytes):r.map(i=>w(i.bytes))}function oe(t){const{data:e,kzg:n,to:s}=t,r=t.blobs??ae({data:e,to:s}),a=t.commitments??bt({blobs:r,kzg:n,to:s}),o=t.proofs??mt({blobs:r,commitments:a,kzg:n,to:s}),i=[];for(let c=0;c<r.length;c++)i.push({blob:r[c],commitment:a[c],proof:o[c]});return i}function ie(t){const{blobVersionedHashes:e}=t;if(e){if(e.length===0)throw new Pt;for(const n of e){const s=ut(n),r=z(Ut(n,0,1));if(s!==32)throw new ne({hash:n,size:s});if(r!==vt)throw new re({hash:n,version:r})}}wt(t)}function wt(t){const{chainId:e,maxPriorityFeePerGas:n,maxFeePerGas:s,to:r}=t;if(e<=0)throw new D({chainId:e});if(r&&!v(r))throw new P({address:r});if(s&&s>2n**256n-1n)throw new T({maxFeePerGas:s});if(n&&s&&n>s)throw new It({maxFeePerGas:s,maxPriorityFeePerGas:n})}function ce(t){const{chainId:e,maxPriorityFeePerGas:n,gasPrice:s,maxFeePerGas:r,to:a}=t;if(e<=0)throw new D({chainId:e});if(a&&!v(a))throw new P({address:a});if(n||r)throw new g("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(s&&s>2n**256n-1n)throw new T({maxFeePerGas:s})}function le(t){const{chainId:e,maxPriorityFeePerGas:n,gasPrice:s,maxFeePerGas:r,to:a,accessList:o}=t;if(a&&!v(a))throw new P({address:a});if(typeof e<"u"&&e<=0)throw new D({chainId:e});if(n||r)throw new g("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(s&&s>2n**256n-1n)throw new T({maxFeePerGas:s});if(o)throw new g("`accessList` is not a valid Legacy Transaction attribute.")}function ue(t){if(t.type)return t.type;if(typeof t.blobs<"u"||typeof t.blobVersionedHashes<"u"||typeof t.maxFeePerBlobGas<"u"||typeof t.sidecars<"u")return"eip4844";if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new Gt({transaction:t})}function M(t){if(!t||t.length===0)return[];const e=[];for(let n=0;n<t.length;n++){const{address:s,storageKeys:r}=t[n];for(let a=0;a<r.length;a++)if(r[a].length-2!==64)throw new kt({storageKey:r[a]});if(!v(s,{strict:!1}))throw new P({address:s});e.push([s,r])}return e}function de(t,e){const n=ue(t);return n==="eip1559"?pe(t,e):n==="eip2930"?fe(t,e):n==="eip4844"?he(t,e):be(t,e)}function he(t,e){const{chainId:n,gas:s,nonce:r,to:a,value:o,maxFeePerBlobGas:i,maxFeePerGas:c,maxPriorityFeePerGas:d,accessList:p,data:u}=t;ie(t);let b=t.blobVersionedHashes,f=t.sidecars;if(t.blobs&&(typeof b>"u"||typeof f>"u")){const B=typeof t.blobs[0]=="string"?t.blobs:t.blobs.map(I=>w(I)),C=t.kzg,F=bt({blobs:B,kzg:C});if(typeof b>"u"&&(b=ee({commitments:F})),typeof f>"u"){const I=mt({blobs:B,commitments:F,kzg:C});f=oe({blobs:B,commitments:F,proofs:I})}}const G=M(p),S=[h(n),r?h(r):"0x",d?h(d):"0x",c?h(c):"0x",s?h(s):"0x",a??"0x",o?h(o):"0x",u??"0x",G,i?h(i):"0x",b??[],...$(t,e)],at=[],ot=[],it=[];if(f)for(let B=0;B<f.length;B++){const{blob:C,commitment:F,proof:I}=f[B];at.push(C),ot.push(F),it.push(I)}return H(["0x03",E(f?[S,at,ot,it]:S)])}function pe(t,e){const{chainId:n,gas:s,nonce:r,to:a,value:o,maxFeePerGas:i,maxPriorityFeePerGas:c,accessList:d,data:p}=t;wt(t);const u=M(d),b=[h(n),r?h(r):"0x",c?h(c):"0x",i?h(i):"0x",s?h(s):"0x",a??"0x",o?h(o):"0x",p??"0x",u,...$(t,e)];return H(["0x02",E(b)])}function fe(t,e){const{chainId:n,gas:s,data:r,nonce:a,to:o,value:i,accessList:c,gasPrice:d}=t;ce(t);const p=M(c),u=[h(n),a?h(a):"0x",d?h(d):"0x",s?h(s):"0x",o??"0x",i?h(i):"0x",r??"0x",p,...$(t,e)];return H(["0x01",E(u)])}function be(t,e){const{chainId:n=0,gas:s,data:r,nonce:a,to:o,value:i,gasPrice:c}=t;le(t);let d=[a?h(a):"0x",c?h(c):"0x",s?h(s):"0x",o??"0x",i?h(i):"0x",r??"0x"];if(e){const p=(()=>{if(e.v>=35n)return(e.v-35n)/2n>0?e.v:27n+(e.v===35n?0n:1n);if(n>0)return BigInt(n*2)+BigInt(35n+e.v-27n);const u=27n+(e.v===27n?0n:1n);if(e.v!==u)throw new Ft({v:e.v});return u})();d=[...d,h(p),e.r,e.s]}else n>0&&(d=[...d,h(n),"0x","0x"]);return E(d)}function $(t,e){const{r:n,s,v:r,yParity:a}=e??t;return typeof n>"u"?[]:typeof s>"u"?[]:typeof r>"u"&&typeof a>"u"?[]:[typeof a=="number"?a?h(1):"0x":r===0n?"0x":r===1n?h(1):r===27n?"0x":h(1),lt(n),lt(s)]}function me(t,e){return ye(t)?xe(t):de(t,e)}const ge={transaction:me};function xe(t){Be(t);const{sourceHash:e,data:n,from:s,gas:r,isSystemTx:a,mint:o,to:i,value:c}=t,d=[e,s,i??"0x",o?h(o):"0x",c?h(c):"0x",r?h(r):"0x",a?"0x1":"0x",n??"0x"];return H(["0x7e",E(d)])}function ye(t){return t.type==="deposit"||typeof t.sourceHash<"u"}function Be(t){const{from:e,to:n}=t;if(e&&!v(e))throw new P({address:e});if(n&&!v(n))throw new P({address:n})}const l={contracts:At,formatters:$t,serializers:ge},j=1;({...l,contracts:{...l.contracts,l2OutputOracle:j+"",portal:j+"",l1StandardBridge:j+""}});const K=11155111;({...l,contracts:{...l.contracts,l2OutputOracle:K+"",portal:K+"",l1StandardBridge:K+""}});const _=1;({...l,contracts:{...l.contracts,l2OutputOracle:_+"",portal:_+"",l1StandardBridge:_+""}});const q=5;({...l,contracts:{...l.contracts,l2OutputOracle:q+"",portal:q+"",l1StandardBridge:q+""}});const J=11155111;({...l,contracts:{...l.contracts,l2OutputOracle:J+"",portal:J+"",l1StandardBridge:J+""}},O({id:60808,name:"BOB",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.gobob.xyz"],webSocket:["wss://rpc.gobob.xyz"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.gobob.xyz"}},contracts:{multicall3:{address:"0x63f8279bccDb75c0F38e0CD6B6A0c72a0a760FF9",blockCreated:457045}},testnet:!1})),O({id:53457,name:"DODOchain Testnet",nativeCurrency:{decimals:18,name:"DODO",symbol:"DODO"},rpcUrls:{default:{http:["https://dodochain-testnet.alt.technology"],webSocket:["wss://dodochain-testnet.alt.technology/ws"]}},blockExplorers:{default:{name:"DODOchain Testnet (Sepolia) Explorer",url:"https://testnet-scan.dodochain.com"}},testnet:!0});const Q=1;({...l,contracts:{...l.contracts,l2OutputOracle:Q+"",portal:Q+"",l1StandardBridge:Q+""}});const W=17e3;({...l,contracts:{...l.contracts,l2OutputOracle:W+"",portal:W+"",l1StandardBridge:W+""}});const ve=11155111;O({...l,id:3397901,network:"funkiSepolia",name:"Funki Sepolia Sandbox",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://funki-testnet.alt.technology"]}},blockExplorers:{default:{name:"Funki Sepolia Sandbox Explorer",url:"https://sepolia-sandbox.funkichain.com/"}},testnet:!0,contracts:{...l.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:1620204}},sourceId:ve});const X=11155111;({...l,contracts:{...l.contracts,l2OutputOracle:X+"",portal:X+"",l1StandardBridge:X+""}});const Pe=O({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),Y=1;({...l,contracts:{...l.contracts,l2OutputOracle:Y+"",portal:Y+"",l1StandardBridge:Y+""}});const Z=1;({...l,contracts:{...l.contracts,l2OutputOracle:Z+"",portal:Z+"",l1StandardBridge:Z+""}});const tt=5;({...l,contracts:{...l.contracts,l2OutputOracle:tt+"",portal:tt+"",l1StandardBridge:tt+""}});const A=11155111;({...l,contracts:{...l.contracts,disputeGameFactory:A+"",l2OutputOracle:A+"",portal:A+"",l1StandardBridge:A+""}});const et=1;({...l,contracts:{...l.contracts,l2OutputOracle:et+"",portal:et+"",l1StandardBridge:et+""}});const st=11155111;({...l,contracts:{...l.contracts,l2OutputOracle:st+"",portal:st+"",l1StandardBridge:st+""}});const we=O({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.sepolia.org"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",blockCreated:5317080}},testnet:!0}),nt=1;({...l,contracts:{...l.contracts,l2OutputOracle:nt+"",portal:nt+"",l1StandardBridge:nt+""}});const rt=11155111;({...l,contracts:{...l.contracts,l2OutputOracle:rt+"",portal:rt+"",l1StandardBridge:rt+""}});const Ge=5;({...l,contracts:{...l.contracts,portal:Ge+""}});export{Pe as mainnet,we as sepolia};
