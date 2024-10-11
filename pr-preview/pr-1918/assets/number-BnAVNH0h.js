import{g6 as S,bl as K,bg as W,C as F,g7 as Y,c5 as Z,bN as $,c6 as ee,g8 as te,g9 as se,ga as ne,ab as B,bX as G,aA as v,al as U,at as ae,aE as re,ba as oe,bt as ie,bv as ce,bw as he,bx as fe,bo as r,bB as L,aC as ue,ca as V,__tla as le}from"./index-ClFky8uL.js";let I,_,z,N,m,X,p,b,xe=Promise.all([(()=>{try{return le}catch{}})()]).then(async()=>{b=function(t,e="hex"){const n=A(t),s=S(new Uint8Array(n.length));return n.encode(s),e==="hex"?K(s.bytes):s.bytes};function A(t){return Array.isArray(t)?j(t.map(e=>A(e))):q(t)}function j(t){const e=t.reduce((s,a)=>s+a.length,0),n=k(e);return{length:e<=55?1+e:1+n+e,encode(s){e<=55?s.pushByte(192+e):(s.pushByte(247+n),n===1?s.pushUint8(e):n===2?s.pushUint16(e):n===3?s.pushUint24(e):s.pushUint32(e));for(const{encode:a}of t)a(s)}}}function q(t){const e=typeof t=="string"?W(t):t,n=k(e.length);return{length:e.length===1&&e[0]<128?1:e.length<=55?1+e.length:1+n+e.length,encode(s){e.length===1&&e[0]<128?s.pushBytes(e):e.length<=55?(s.pushByte(128+e.length),s.pushBytes(e)):(s.pushByte(183+n),n===1?s.pushUint8(e.length):n===2?s.pushUint16(e.length):n===3?s.pushUint24(e.length):s.pushUint32(e.length),s.pushBytes(e))}}}function k(t){if(t<2**8)return 1;if(t<2**16)return 2;if(t<2**24)return 3;if(t<2**32)return 4;throw new F("Length is too large.")}function D(t){const{blobVersionedHashes:e}=t;if(e){if(e.length===0)throw new Y;for(const n of e){const s=Z(n),a=$(ee(n,0,1));if(s!==32)throw new te({hash:n,size:s});if(a!==se)throw new ne({hash:n,version:a})}}I(t)}I=function(t){const{chainId:e,maxPriorityFeePerGas:n,maxFeePerGas:s,to:a}=t;if(e<=0)throw new B({chainId:e});if(a&&!G(a))throw new v({address:a});if(s&&s>2n**256n-1n)throw new U({maxFeePerGas:s});if(n&&s&&n>s)throw new ae({maxFeePerGas:s,maxPriorityFeePerGas:n})},_=function(t){const{chainId:e,maxPriorityFeePerGas:n,gasPrice:s,maxFeePerGas:a,to:o}=t;if(e<=0)throw new B({chainId:e});if(o&&!G(o))throw new v({address:o});if(n||a)throw new F("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(s&&s>2n**256n-1n)throw new U({maxFeePerGas:s})},z=function(t){const{chainId:e,maxPriorityFeePerGas:n,gasPrice:s,maxFeePerGas:a,to:o,accessList:c}=t;if(o&&!G(o))throw new v({address:o});if(typeof e<"u"&&e<=0)throw new B({chainId:e});if(n||a)throw new F("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(s&&s>2n**256n-1n)throw new U({maxFeePerGas:s});if(c)throw new F("`accessList` is not a valid Legacy Transaction attribute.")},p=function(t){if(!t||t.length===0)return[];const e=[];for(let n=0;n<t.length;n++){const{address:s,storageKeys:a}=t[n];for(let o=0;o<a.length;o++)if(a[o].length-2!==64)throw new re({storageKey:a[o]});if(!G(s,{strict:!1}))throw new v({address:s});e.push([s,a])}return e},N=function(t,e){const n=oe(t);return n==="eip1559"?M(t,e):n==="eip2930"?O(t,e):n==="eip4844"?J(t,e):Q(t,e)};function J(t,e){const{chainId:n,gas:s,nonce:a,to:o,value:c,maxFeePerBlobGas:h,maxFeePerGas:f,maxPriorityFeePerGas:i,accessList:l,data:u}=t;D(t);let w=t.blobVersionedHashes,x=t.sidecars;if(t.blobs&&(typeof w>"u"||typeof x>"u")){const g=typeof t.blobs[0]=="string"?t.blobs:t.blobs.map(d=>K(d)),P=t.kzg,y=ie({blobs:g,kzg:P});if(typeof w>"u"&&(w=ce({commitments:y})),typeof x>"u"){const d=he({blobs:g,commitments:y,kzg:P});x=fe({blobs:g,commitments:y,proofs:d})}}const R=p(l),T=[r(n),a?r(a):"0x",i?r(i):"0x",f?r(f):"0x",s?r(s):"0x",o??"0x",c?r(c):"0x",u??"0x",R,h?r(h):"0x",w??[],...m(t,e)],C=[],E=[],H=[];if(x)for(let g=0;g<x.length;g++){const{blob:P,commitment:y,proof:d}=x[g];C.push(P),E.push(y),H.push(d)}return L(["0x03",b(x?[T,C,E,H]:T)])}function M(t,e){const{chainId:n,gas:s,nonce:a,to:o,value:c,maxFeePerGas:h,maxPriorityFeePerGas:f,accessList:i,data:l}=t;I(t);const u=p(i),w=[r(n),a?r(a):"0x",f?r(f):"0x",h?r(h):"0x",s?r(s):"0x",o??"0x",c?r(c):"0x",l??"0x",u,...m(t,e)];return L(["0x02",b(w)])}function O(t,e){const{chainId:n,gas:s,data:a,nonce:o,to:c,value:h,accessList:f,gasPrice:i}=t;_(t);const l=p(f),u=[r(n),o?r(o):"0x",i?r(i):"0x",s?r(s):"0x",c??"0x",h?r(h):"0x",a??"0x",l,...m(t,e)];return L(["0x01",b(u)])}function Q(t,e){const{chainId:n=0,gas:s,data:a,nonce:o,to:c,value:h,gasPrice:f}=t;z(t);let i=[o?r(o):"0x",f?r(f):"0x",s?r(s):"0x",c??"0x",h?r(h):"0x",a??"0x"];if(e){const l=(()=>{if(e.v>=35n)return(e.v-35n)/2n>0?e.v:27n+(e.v===35n?0n:1n);if(n>0)return BigInt(n*2)+BigInt(35n+e.v-27n);const u=27n+(e.v===27n?0n:1n);if(e.v!==u)throw new ue({v:e.v});return u})();i=[...i,r(l),e.r,e.s]}else n>0&&(i=[...i,r(n),"0x","0x"]);return b(i)}m=function(t,e){const{r:n,s,v:a,yParity:o}=e??t;return typeof n>"u"?[]:typeof s>"u"?[]:typeof a>"u"&&typeof o>"u"?[]:[typeof o=="number"?o?r(1):"0x":a===0n?"0x":a===1n?r(1):a===27n?"0x":r(1),V(n),V(s)]},X=2n**16n-1n});export{xe as __tla,I as a,_ as b,z as c,N as d,m as e,X as m,p as s,b as t};
