import{ej as a,ek as t,el as r,em as h,en as p,__tla as f}from"./index-BTRg2c5V.js";let w,d,k,m,y,T,g=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{w=async({address:o,provider:s,contractAddress:n})=>{try{const e=await new a(t.pushToken,r.pushToken,s).allowance(o,n);return h(e.toString())}catch(e){console.error(e.message)}},k=async({address:o,provider:s,noOfPushTokensToCheck:n})=>{try{const e=await new a(t.pushToken,r.pushToken,s).balanceOf(o);return+h(e.toString())>=n}catch(e){console.error(e.message)}},m=async({address:o,provider:s})=>{try{const n=await new a(t.pushToken,r.pushToken,s).balanceOf(o);return+h(n.toString())}catch(n){console.error(n.message)}},d=async({signer:o,contractAddress:s,amount:n})=>{try{const e=new a(t.pushToken,r.pushToken,o),i=p(n.toString(),18);return await(await e.approve(s,i)).wait(),!0}catch(e){throw console.error(e),e}},y=async()=>{try{const o="Ethereum Push Notification Service";return await window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t.pushToken,symbol:"PUSH",decimals:18}}}),!0}catch(o){throw console.error(o),o}},T=async({noOfTokens:o,provider:s,account:n})=>{try{var e=s.getSigner(n);let c=new a(t.pushToken,r.pushToken,e);console.info({pushTokenContract:c}),console.info(1);const l=p(o.toString(),18);console.info(l);var i=c.mint(l);console.info(3);const u=await i;return console.info(u),await s.waitForTransaction(u.hash),console.info(4),console.info("Transaction Completed"),o}catch(c){return console.error(c),0}}});export{g as __tla,w as a,d as b,k as c,m as g,y as i,T as m};
