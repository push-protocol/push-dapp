import{C as p,f5 as m,c9 as y,aU as R,bY as S,f6 as v,bz as E,aX as T,ax as w,bZ as _,__tla as j}from"./index-cxV55chu.js";let b,g,h,k,P=Promise.all([(()=>{try{return j}catch{}})()]).then(async()=>{class x extends p{constructor({callbackSelector:r,cause:e,data:n,extraData:c,sender:u,urls:a}){var l;super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],(l=e.metaMessages)!=null&&l.length?"":[],"Offchain Gateway Call:",a&&["  Gateway URL(s):",...a.map(d=>`    ${m(d)}`)],`  Sender: ${u}`,`  Data: ${n}`,`  Callback selector: ${r}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class O extends p{constructor({result:r,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${m(e)}`,`Response: ${y(r)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class L extends p{constructor({sender:r,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${r}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}k="0x556f1830",h={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]},g=async function(o,{blockNumber:r,blockTag:e,data:n,to:c}){const{args:u}=R({data:n,abi:[h]}),[a,l,d,t,s]=u,{ccipRead:i}=o,$=i&&typeof(i==null?void 0:i.request)=="function"?i.request:b;try{if(!S(c,a))throw new L({sender:a,to:c});const f=await $({data:d,sender:a,urls:l}),{data:M}=await v(o,{blockNumber:r,blockTag:e,data:E([t,T([{type:"bytes"},{type:"bytes"}],[f,s])]),to:c});return M}catch(f){throw new x({callbackSelector:t,cause:f,data:n,extraData:s,sender:a,urls:l})}},b=async function({data:o,sender:r,urls:e}){var c;let n=new Error("An unknown error occurred.");for(let u=0;u<e.length;u++){const a=e[u],l=a.includes("{data}")?"GET":"POST",d=l==="POST"?{data:o,sender:r}:void 0;try{const t=await fetch(a.replace("{sender}",r).replace("{data}",o),{body:JSON.stringify(d),method:l});let s;if((c=t.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?s=(await t.json()).data:s=await t.text(),!t.ok){n=new w({body:d,details:s!=null&&s.error?y(s.error):t.statusText,headers:t.headers,status:t.status,url:a});continue}if(!_(s)){n=new O({result:s,url:a});continue}return s}catch(t){n=new w({body:d,details:t.message,url:a})}}throw n}});export{P as __tla,b as ccipRequest,g as offchainLookup,h as offchainLookupAbiItem,k as offchainLookupSignature};
