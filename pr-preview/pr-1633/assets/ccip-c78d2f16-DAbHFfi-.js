import{d as C,c as T,e as E,H as b,s as y,__tla as v}from"./index-021f6a62-DXZGINBk.js";import{C as D,n as P,B as p,J as w,i as g,I as k}from"./transactionRequest-be6a8ea9-ZOMaSDkJ.js";import{__tla as j}from"./index-DGS2C2HC.js";let h,O,m,x,q=Promise.all([(()=>{try{return v}catch{}})(),(()=>{try{return j}catch{}})()]).then(async()=>{class L extends p{constructor({callbackSelector:e,cause:a,data:o,extraData:c,sender:i,urls:t}){var l;super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],(l=a.metaMessages)!=null&&l.length?"":[],"Offchain Gateway Call:",t&&["  Gateway URL(s):",...t.map(u=>`    ${w(u)}`)],`  Sender: ${i}`,`  Data: ${o}`,`  Callback selector: ${e}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class _ extends p{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${w(a)}`,`Response: ${y(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class $ extends p{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function M(s,e){if(!g(s,{strict:!1}))throw new k({address:s});if(!g(e,{strict:!1}))throw new k({address:e});return s.toLowerCase()===e.toLowerCase()}x="0x556f1830",m={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]},O=async function(s,{blockNumber:e,blockTag:a,data:o,to:c}){const{args:i}=C({data:o,abi:[m]}),[t,l,u,r,n]=i,{ccipRead:d}=s,R=d&&typeof(d==null?void 0:d.request)=="function"?d.request:h;try{if(!M(c,t))throw new $({sender:t,to:c});const f=await R({data:u,sender:t,urls:l}),{data:S}=await T(s,{blockNumber:e,blockTag:a,data:D([r,E([{type:"bytes"},{type:"bytes"}],[f,n])]),to:c});return S}catch(f){throw new L({callbackSelector:r,cause:f,data:o,extraData:n,sender:t,urls:l})}},h=async function({data:s,sender:e,urls:a}){var c;let o=new Error("An unknown error occurred.");for(let i=0;i<a.length;i++){const t=a[i],l=t.includes("{data}")?"GET":"POST",u=l==="POST"?{data:s,sender:e}:void 0;try{const r=await fetch(t.replace("{sender}",e).replace("{data}",s),{body:JSON.stringify(u),method:l});let n;if((c=r.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?n=(await r.json()).data:n=await r.text(),!r.ok){o=new b({body:u,details:n!=null&&n.error?y(n.error):r.statusText,headers:r.headers,status:r.status,url:t});continue}if(!P(n)){o=new _({result:n,url:t});continue}return n}catch(r){o=new b({body:u,details:r.message,url:t})}}throw o}});export{q as __tla,h as ccipRequest,O as offchainLookup,m as offchainLookupAbiItem,x as offchainLookupSignature};