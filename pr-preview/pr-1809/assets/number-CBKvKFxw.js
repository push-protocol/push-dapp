import{aR as He,eR as w,eS as Me,eT as l,eU as Bt,eV as Ft,eW as P,eX as v,eY as R,eZ as O,e_ as Ut,e$ as q,f0 as Ae,f1 as $t,f2 as Tt,f3 as Ot,f4 as m,f5 as Et,aS as b,f6 as z,f7 as V,f8 as _e,__tla as kt}from"./index-HLNsEolX.js";let X,Z,Se,De,E,H,G,J,Q,ee,te,Ke,Ye,M,se,We,ne,qe,ie,I,oe,Xe,A,Ze,re,ae,ce,ue,B,Je,le,k,Qe,he,L,_,et,be,fe,F,de,pe,me,ge,S,tt,ye,D,xe,Pe,K,ve,we,Ge,Ie,Be,st,nt,Y,it,Lt=Promise.all([(()=>{try{return kt}catch{}})()]).then(async()=>{et=function(e){return typeof e[0]=="string"?B(e):X(e)},X=function(e){let t=0;for(const i of e)t+=i.length;const s=new Uint8Array(t);let n=0;for(const i of e)s.set(i,n),n+=i.length;return s},B=function(e){return`0x${e.reduce((t,s)=>t+s.replace("0x",""),"")}`},we=function(e,t,s,{strict:n}={}){return He(e,{strict:!1})?he(e,t,s,{strict:n}):be(e,t,s,{strict:n})};function Fe(e,t){if(typeof t=="number"&&t>0&&t>w(e)-1)throw new Me({offset:t,position:"start",size:w(e)})}function Ue(e,t,s){if(typeof t=="number"&&typeof s=="number"&&w(e)!==s-t)throw new Me({offset:s,position:"end",size:w(e)})}be=function(e,t,s,{strict:n}={}){Fe(e,t);const i=e.slice(t,s);return n&&Ue(i,t,s),i},he=function(e,t,s,{strict:n}={}){Fe(e,t);const i=`0x${e.replace("0x","").slice((t??0)*2,(s??e.length)*2)}`;return n&&Ue(i,t,s),i};class $e extends l{constructor({offset:t}){super(`Offset \`${t}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}ne=class extends l{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}};class ot extends l{constructor({count:t,limit:s}){super(`Recursive read limit of \`${s}\` exceeded (recursive read count: \`${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}const rt={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new ot({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new ne({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new $e({offset:e});const t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new $e({offset:e});const t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){const s=t??this.position;return this.assertPosition(s+e-1),this.bytes.subarray(s,s+e)},inspectUint8(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){const t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){const t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){const t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,e&255),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();const s=this.inspectBytes(e);return this.position+=t??e,s},readUint8(){this.assertReadLimit(),this._touch();const e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();const e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();const e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();const e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){const t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};_=function(e,{recursiveReadLimit:t=8192}={}){const s=Object.create(rt);return s.bytes=e,s.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),s.positionReadCount=new Map,s.recursiveReadLimit=t,s},F=function(e,t="wei"){return Bt(e,Ft[t])},Pe=function(e){const t=Object.entries(e).map(([n,i])=>i===void 0||i===!1?null:[n,i]).filter(Boolean),s=t.reduce((n,[i])=>Math.max(n,i.length),0);return t.map(([n,i])=>`  ${`${n}:`.padEnd(s+1)}  ${i}`).join(`
`)},tt=class extends l{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}},J=class extends l{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}},Q=class extends l{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Pe(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}},te=class extends l{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}},nt=class extends l{constructor({blockHash:e,blockNumber:t,blockTag:s,hash:n,index:i}){let o="Transaction";s&&i!==void 0&&(o=`Transaction at block time "${s}" at index "${i}"`),e&&i!==void 0&&(o=`Transaction at block hash "${e}" at index "${i}"`),t&&i!==void 0&&(o=`Transaction at block number "${t}" at index "${i}"`),n&&(o=`Transaction with hash "${n}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}},it=class extends l{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}},Ze=class extends l{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}},H=class extends l{constructor({cause:e,message:t}={}){var n;const s=(n=t==null?void 0:t.replace("execution reverted: ",""))==null?void 0:n.replace("execution reverted","");super(`Execution reverted ${s?`with reason: ${s}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}},Object.defineProperty(H,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(H,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/}),G=class extends l{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${F(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}},Object.defineProperty(G,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/}),fe=class extends l{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${F(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}},Object.defineProperty(fe,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/}),se=class extends l{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}},Object.defineProperty(se,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/}),de=class extends l{constructor({cause:e,nonce:t}={}){super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}},Object.defineProperty(de,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/}),pe=class extends l{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}},Object.defineProperty(pe,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/}),ee=class extends l{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}},Object.defineProperty(ee,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/}),me=class extends l{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}},Object.defineProperty(me,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/}),ge=class extends l{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}},Object.defineProperty(ge,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/}),oe=class extends l{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}},Object.defineProperty(oe,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/}),S=class extends l{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:s}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${F(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${s?` = ${F(s)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}},Object.defineProperty(S,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/}),Xe=class extends l{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}};function j(e,t){return({exclude:s,format:n})=>({exclude:s,format:i=>{const o=t(i);if(s)for(const r of s)delete o[r];return{...o,...n(i)}},type:e})}ie={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"},Ie=function(e){const t={};return typeof e.accessList<"u"&&(t.accessList=e.accessList),typeof e.blobVersionedHashes<"u"&&(t.blobVersionedHashes=e.blobVersionedHashes),typeof e.blobs<"u"&&(typeof e.blobs[0]!="string"?t.blobs=e.blobs.map(s=>P(s)):t.blobs=e.blobs),typeof e.data<"u"&&(t.data=e.data),typeof e.from<"u"&&(t.from=e.from),typeof e.gas<"u"&&(t.gas=v(e.gas)),typeof e.gasPrice<"u"&&(t.gasPrice=v(e.gasPrice)),typeof e.maxFeePerBlobGas<"u"&&(t.maxFeePerBlobGas=v(e.maxFeePerBlobGas)),typeof e.maxFeePerGas<"u"&&(t.maxFeePerGas=v(e.maxFeePerGas)),typeof e.maxPriorityFeePerGas<"u"&&(t.maxPriorityFeePerGas=v(e.maxPriorityFeePerGas)),typeof e.nonce<"u"&&(t.nonce=v(e.nonce)),typeof e.to<"u"&&(t.to=e.to),typeof e.type<"u"&&(t.type=ie[e.type]),typeof e.value<"u"&&(t.value=v(e.value)),t},qe=j("transactionRequest",Ie),M={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"},Y=function(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?R(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?R(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?M[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if(typeof t.v=="bigint"){if(t.v===0n||t.v===27n)return 0;if(t.v===1n||t.v===28n)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),t.type==="legacy"&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),t.type==="eip2930"&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t.type==="eip1559"&&delete t.maxFeePerBlobGas,t},Ye=j("transaction",Y),ye=function(e){var s;const t=(s=e.transactions)==null?void 0:s.map(n=>typeof n=="string"?n:Y(n));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}},Ke=j("block",ye),D=function(e){const{kzg:t}=e,s=e.to??(typeof e.blobs[0]=="string"?"hex":"bytes"),n=typeof e.blobs[0]=="string"?e.blobs.map(o=>O(o)):e.blobs,i=[];for(const o of n)i.push(Uint8Array.from(t.blobToKzgCommitment(o)));return s==="bytes"?i:i.map(o=>P(o))},K=function(e){const{kzg:t}=e,s=e.to??(typeof e.blobs[0]=="string"?"hex":"bytes"),n=typeof e.blobs[0]=="string"?e.blobs.map(r=>O(r)):e.blobs,i=typeof e.commitments[0]=="string"?e.commitments.map(r=>O(r)):e.commitments,o=[];for(let r=0;r<n.length;r++){const a=n[r],c=i[r];o.push(Uint8Array.from(t.computeBlobKzgProof(a,c)))}return s==="bytes"?o:o.map(r=>P(r))};function at(e,t,s,n){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,s,n);const i=BigInt(32),o=BigInt(4294967295),r=Number(s>>i&o),a=Number(s&o),c=n?4:0,h=n?0:4;e.setUint32(t+c,r,n),e.setUint32(t+h,a,n)}class ct extends Ut{constructor(t,s,n,i){super(),this.blockLen=t,this.outputLen=s,this.padOffset=n,this.isLE=i,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=q(this.buffer)}update(t){Ae(this);const{view:s,buffer:n,blockLen:i}=this;t=$t(t);const o=t.length;for(let r=0;r<o;){const a=Math.min(i-this.pos,o-r);if(a===i){const c=q(t);for(;i<=o-r;r+=i)this.process(c,r);continue}n.set(t.subarray(r,r+a),this.pos),this.pos+=a,r+=a,this.pos===i&&(this.process(s,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Ae(this),Tt(t,this),this.finished=!0;const{buffer:s,view:n,blockLen:i,isLE:o}=this;let{pos:r}=this;s[r++]=128,this.buffer.subarray(r).fill(0),this.padOffset>i-r&&(this.process(n,0),r=0);for(let u=r;u<i;u++)s[u]=0;at(n,i-8,BigInt(this.length*8),o),this.process(n,0);const a=q(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=c/4,f=this.get();if(h>f.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<h;u++)a.setUint32(4*u,f[u],o)}digest(){const{buffer:t,outputLen:s}=this;this.digestInto(t);const n=t.slice(0,s);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:s,buffer:n,length:i,finished:o,destroyed:r,pos:a}=this;return t.length=i,t.pos=a,t.finished=o,t.destroyed=r,i%s&&t.buffer.set(n),t}}const ut=(e,t,s)=>e&t^~e&s,lt=(e,t,s)=>e&t^e&s^t&s,ht=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),g=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),y=new Uint32Array(64);class bt extends ct{constructor(){super(64,32,8,!1),this.A=g[0]|0,this.B=g[1]|0,this.C=g[2]|0,this.D=g[3]|0,this.E=g[4]|0,this.F=g[5]|0,this.G=g[6]|0,this.H=g[7]|0}get(){const{A:t,B:s,C:n,D:i,E:o,F:r,G:a,H:c}=this;return[t,s,n,i,o,r,a,c]}set(t,s,n,i,o,r,a,c){this.A=t|0,this.B=s|0,this.C=n|0,this.D=i|0,this.E=o|0,this.F=r|0,this.G=a|0,this.H=c|0}process(t,s){for(let u=0;u<16;u++,s+=4)y[u]=t.getUint32(s,!1);for(let u=16;u<64;u++){const p=y[u-15],d=y[u-2],U=m(p,7)^m(p,18)^p>>>3,N=m(d,17)^m(d,19)^d>>>10;y[u]=N+y[u-7]+U+y[u-16]|0}let{A:n,B:i,C:o,D:r,E:a,F:c,G:h,H:f}=this;for(let u=0;u<64;u++){const p=m(a,6)^m(a,11)^m(a,25),d=f+p+ut(a,c,h)+ht[u]+y[u]|0,U=(m(n,2)^m(n,13)^m(n,22))+lt(n,i,o)|0;f=h,h=c,c=a,a=r+d|0,r=o,o=i,i=n,n=d+U|0}n=n+this.A|0,i=i+this.B|0,o=o+this.C|0,r=r+this.D|0,a=a+this.E|0,c=c+this.F|0,h=h+this.G|0,f=f+this.H|0,this.set(n,i,o,r,a,c,h,f)}roundClean(){y.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const ft=Ot(()=>new bt);le=function(e,t){const s=t||"hex",n=ft(He(e,{strict:!1})?Et(e):e);return s==="bytes"?n:b(n)},ce=function(e){const{commitment:t,version:s=1}=e,n=e.to??(typeof t=="string"?"hex":"bytes"),i=le(t,"bytes");return i.set([s],0),n==="bytes"?i:P(i)},xe=function(e){const{commitments:t,version:s}=e,n=e.to??(typeof t[0]=="string"?"hex":"bytes"),i=[];for(const o of t)i.push(ce({commitment:o,to:n,version:s}));return i};const Te=6,Oe=32,W=4096,Ee=Oe*W,ke=Ee*Te-1-1*W*Te,Le=1;class dt extends l{constructor({maxSize:t,size:s}){super("Blob size is too large.",{metaMessages:[`Max: ${t} bytes`,`Given: ${s} bytes`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlobSizeTooLargeError"})}}class je extends l{constructor(){super("Blob data must not be empty."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EmptyBlobError"})}}class pt extends l{constructor({hash:t,size:s}){super(`Versioned hash "${t}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${s}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashSizeError"})}}class mt extends l{constructor({hash:t,version:s}){super(`Versioned hash "${t}" version is invalid.`,{metaMessages:[`Expected: ${Le}`,`Received: ${s}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashVersionError"})}}ue=function(e){const t=e.to??(typeof e.data=="string"?"hex":"bytes"),s=typeof e.data=="string"?O(e.data):e.data,n=w(s);if(!n)throw new je;if(n>ke)throw new dt({maxSize:ke,size:n});const i=[];let o=!0,r=0;for(;o;){const a=_(new Uint8Array(Ee));let c=0;for(;c<W;){const h=s.slice(r,r+(Oe-1));if(a.pushByte(0),a.pushBytes(h),h.length<31){a.pushByte(128),o=!1;break}c++,r+=31}i.push(a)}return t==="bytes"?i.map(a=>a.bytes):i.map(a=>P(a.bytes))},Ge=function(e){const{data:t,kzg:s,to:n}=e,i=e.blobs??ue({data:t,to:n}),o=e.commitments??D({blobs:i,kzg:s,to:n}),r=e.proofs??K({blobs:i,commitments:o,kzg:s,to:n}),a=[];for(let c=0;c<i.length;c++)a.push({blob:i[c],commitment:o[c],proof:r[c]});return a},ve=function(e){if(e.type)return e.type;if(typeof e.blobs<"u"||typeof e.blobVersionedHashes<"u"||typeof e.maxFeePerBlobGas<"u"||typeof e.sidecars<"u")return"eip4844";if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")return"eip1559";if(typeof e.gasPrice<"u")return typeof e.accessList<"u"?"eip2930":"legacy";throw new Q({transaction:e})},Be=function(e,{args:t,eventName:s}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...s?{args:t,eventName:s}:{}}},De=class extends l{constructor({blockNumber:e,chain:t,contract:s}){super(`Chain "${t.name}" does not support contract "${s.name}".`,{metaMessages:["This could be due to any of the following:",...e&&s.blockCreated&&s.blockCreated>e?[`- The contract "${s.name}" was not deployed until block ${s.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${s.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}},st=class extends l{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}},E=class extends l{constructor({chainId:e}){super(typeof e=="number"?`Chain ID "${e}" is invalid.`:"Chain ID is invalid."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}},Je=function(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}},I=function(e,t="hex"){const s=Ne(e),n=_(new Uint8Array(s.length));return s.encode(n),t==="hex"?P(n.bytes):n.bytes};function Ne(e){return Array.isArray(e)?gt(e.map(t=>Ne(t))):yt(e)}function gt(e){const t=e.reduce((n,i)=>n+i.length,0),s=Ce(t);return{length:t<=55?1+t:1+s+t,encode(n){t<=55?n.pushByte(192+t):(n.pushByte(247+s),s===1?n.pushUint8(t):s===2?n.pushUint16(t):s===3?n.pushUint24(t):n.pushUint32(t));for(const{encode:i}of e)i(n)}}}function yt(e){const t=typeof e=="string"?O(e):e,s=Ce(t.length);return{length:t.length===1&&t[0]<128?1:t.length<=55?1+t.length:1+s+t.length,encode(n){t.length===1&&t[0]<128?n.pushBytes(t):t.length<=55?(n.pushByte(128+t.length),n.pushBytes(t)):(n.pushByte(183+s),s===1?n.pushUint8(t.length):s===2?n.pushUint16(t.length):s===3?n.pushUint24(t.length):n.pushUint32(t.length),n.pushBytes(t))}}}function Ce(e){if(e<2**8)return 1;if(e<2**16)return 2;if(e<2**24)return 3;if(e<2**32)return 4;throw new l("Length is too large.")}const xt={"0x0":"reverted","0x1":"success"};Z=function(e){const t={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(s=>Be(s)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?R(e.transactionIndex):null,status:e.status?xt[e.status]:null,type:e.type?M[e.type]||e.type:null};return e.blobGasPrice&&(t.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(t.blobGasUsed=BigInt(e.blobGasUsed)),t},We=j("transactionReceipt",Z);function Pt(e){const{blobVersionedHashes:t}=e;if(t){if(t.length===0)throw new je;for(const s of t){const n=w(s),i=R(we(s,0,1));if(n!==32)throw new pt({hash:s,size:n});if(i!==Le)throw new mt({hash:s,version:i})}}A(e)}A=function(e){const{chainId:t,maxPriorityFeePerGas:s,maxFeePerGas:n,to:i}=e;if(t<=0)throw new E({chainId:t});if(i&&!z(i))throw new V({address:i});if(n&&n>2n**256n-1n)throw new G({maxFeePerGas:n});if(s&&n&&s>n)throw new S({maxFeePerGas:n,maxPriorityFeePerGas:s})},re=function(e){const{chainId:t,maxPriorityFeePerGas:s,gasPrice:n,maxFeePerGas:i,to:o}=e;if(t<=0)throw new E({chainId:t});if(o&&!z(o))throw new V({address:o});if(s||i)throw new l("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(n&&n>2n**256n-1n)throw new G({maxFeePerGas:n})},ae=function(e){const{chainId:t,maxPriorityFeePerGas:s,gasPrice:n,maxFeePerGas:i,to:o,accessList:r}=e;if(o&&!z(o))throw new V({address:o});if(typeof t<"u"&&t<=0)throw new E({chainId:t});if(s||i)throw new l("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(n&&n>2n**256n-1n)throw new G({maxFeePerGas:n});if(r)throw new l("`accessList` is not a valid Legacy Transaction attribute.")},k=function(e){if(!e||e.length===0)return[];const t=[];for(let s=0;s<e.length;s++){const{address:n,storageKeys:i}=e[s];for(let o=0;o<i.length;o++)if(i[o].length-2!==64)throw new te({storageKey:i[o]});if(!z(n,{strict:!1}))throw new V({address:n});t.push([n,i])}return t},Qe=function(e,t){const s=ve(e);return s==="eip1559"?wt(e,t):s==="eip2930"?Gt(e,t):s==="eip4844"?vt(e,t):It(e,t)};function vt(e,t){const{chainId:s,gas:n,nonce:i,to:o,value:r,maxFeePerBlobGas:a,maxFeePerGas:c,maxPriorityFeePerGas:h,accessList:f,data:u}=e;Pt(e);let p=e.blobVersionedHashes,d=e.sidecars;if(e.blobs&&(typeof p>"u"||typeof d>"u")){const x=typeof e.blobs[0]=="string"?e.blobs:e.blobs.map(T=>P(T)),C=e.kzg,$=D({blobs:x,kzg:C});if(typeof p>"u"&&(p=xe({commitments:$})),typeof d>"u"){const T=K({blobs:x,commitments:$,kzg:C});d=Ge({blobs:x,commitments:$,proofs:T})}}const U=k(f),N=[b(s),i?b(i):"0x",h?b(h):"0x",c?b(c):"0x",n?b(n):"0x",o??"0x",r?b(r):"0x",u??"0x",U,a?b(a):"0x",p??[],...L(e,t)],Re=[],ze=[],Ve=[];if(d)for(let x=0;x<d.length;x++){const{blob:C,commitment:$,proof:T}=d[x];Re.push(C),ze.push($),Ve.push(T)}return B(["0x03",I(d?[N,Re,ze,Ve]:N)])}function wt(e,t){const{chainId:s,gas:n,nonce:i,to:o,value:r,maxFeePerGas:a,maxPriorityFeePerGas:c,accessList:h,data:f}=e;A(e);const u=k(h),p=[b(s),i?b(i):"0x",c?b(c):"0x",a?b(a):"0x",n?b(n):"0x",o??"0x",r?b(r):"0x",f??"0x",u,...L(e,t)];return B(["0x02",I(p)])}function Gt(e,t){const{chainId:s,gas:n,data:i,nonce:o,to:r,value:a,accessList:c,gasPrice:h}=e;re(e);const f=k(c),u=[b(s),o?b(o):"0x",h?b(h):"0x",n?b(n):"0x",r??"0x",a?b(a):"0x",i??"0x",f,...L(e,t)];return B(["0x01",I(u)])}function It(e,t){const{chainId:s=0,gas:n,data:i,nonce:o,to:r,value:a,gasPrice:c}=e;ae(e);let h=[o?b(o):"0x",c?b(c):"0x",n?b(n):"0x",r??"0x",a?b(a):"0x",i??"0x"];if(t){const f=(()=>{if(t.v>=35n)return(t.v-35n)/2n>0?t.v:27n+(t.v===35n?0n:1n);if(s>0)return BigInt(s*2)+BigInt(35n+t.v-27n);const u=27n+(t.v===27n?0n:1n);if(t.v!==u)throw new J({v:t.v});return u})();h=[...h,b(f),t.r,t.s]}else s>0&&(h=[...h,b(s),"0x","0x"]);return I(h)}L=function(e,t){const{r:s,s:n,v:i,yParity:o}=t??e;return typeof s>"u"?[]:typeof n>"u"?[]:typeof i>"u"&&typeof o>"u"?[]:[typeof o=="number"?o?b(1):"0x":i===0n?"0x":i===1n?b(1):i===27n?"0x":b(1),_e(s),_e(n)]},Se=2n**16n-1n});export{X as $,Z as A,Se as B,De as C,E as D,H as E,G as F,J as G,Q as H,ee as I,te as J,Ke as K,Ye as L,M,se as N,We as O,ne as P,qe as Q,ie as R,I as S,oe as T,Xe as U,A as V,Ze as W,re as X,ae as Y,ce as Z,ue as _,Lt as __tla,B as a,Je as a0,le as a1,k as a2,Qe as a3,he as a4,L as a5,_ as b,et as c,be as d,fe as e,F as f,de as g,pe as h,me as i,ge as j,S as k,tt as l,ye as m,D as n,xe as o,Pe as p,K as q,ve as r,we as s,Ge as t,Ie as u,Be as v,st as w,nt as x,Y as y,it as z};
