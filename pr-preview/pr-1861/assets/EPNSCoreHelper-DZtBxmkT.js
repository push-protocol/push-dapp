import{eh as C,e$ as F,f0 as w,em as E,f1 as v,__tla as P}from"./index-BAjRPsh3.js";import{I as p,__tla as S}from"./IpfsHelper-D8YrbaJa.js";let l,f,A=Promise.all([(()=>{try{return P}catch{}})(),(()=>{try{return S}catch{}})()]).then(async()=>{let g,d,y,b;f=C.createContext(null),g="0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF",d="1+bafkreif643vf3cteadznccivnsk5uj26e3ls7onbshnldb3aej3omrxsau",y="0x983110309620D911731Ac0932219af06091b6744",b="1+bafkreiekigkyezwrspignt7l7vsrjefjmogwmigy4eqtts277cu2p23ilm",l={getGasPriceInDollars:async e=>{const r=await F.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD").then(({data:t})=>t.USD||0),o=await e.getGasPrice();return w(o)*r},getVotingPower:async(e,r,o=!1)=>{if(await E(e)||e.endsWith(".eth"))try{let t=await r.decimals(),n=await r.getCurrentVotes(e),a=await Number(n/Math.pow(10,t)),s=a.toString();return o?a:s}catch(t){console.error("\u{1F680} ~ file: ViewDelegateeItem.js ~ line 47 ~ getVotingPower ~ err",t)}return"0.000"},getChannelInfo:async(e,r)=>{if(e!==null)return new Promise((o,t)=>{r.channels(e).then(n=>{const a={...n};a.addr=e,o(a)}).catch(n=>{console.error("!!!Error, getChannelInfo() --> %o",n),t(n)})})},getChannelEvent:async(e,r,o,t)=>new Promise((n,a)=>{let s=t.filters.AddChannel(e),h=r;r!=o&&(s=t.filters.UpdateChannel(e),h=o),t.queryFilter(s,h,h).then(async c=>{c.length==0&&(c=await t.queryFilter(t.filters.AddChannel(e),r,r));let u;c.forEach(function(i){i.args.channel.toString()==e.toString()&&(u=v(i.args.identity))}),n(u)}).catch(c=>{console.error("!!!Error, getChannelEvent() --> %o",c),a(c)})}),getJsonFileFromIdentity:async(e,r)=>new Promise((o,t)=>{e||t(`There is no identity file for channel: ${r}`);const n=(e==null?void 0:e.split("+"))||[];if(n[0]==1){const a=p+n[1];fetch(a).then(s=>s.json()).then(s=>{o(s)}).catch(s=>{console.error("!!!Error, getJsonFileFromIdentity() --> %o",s),t(s)})}}),getChannelJsonFromChannelAddress:async(e,r)=>{if(e!==null)return new Promise((o,t)=>{l.getChannelInfo(e,r).then(n=>l.getChannelEvent(e,n.channelStartBlock.toNumber(),n.channelUpdateBlock.toNumber(),r)).then(n=>{const a=e===g?d:e===y?b:n;return l.getJsonFileFromIdentity(a,e)}).then(n=>{o(n)}).catch(n=>{console.error("!!!Error, getChannelJsonFromChannelAddress() --> %o",n),t(n)})})},getChannelJsonFromChannelAddressStartBlock:async(e,r)=>{if(e!==null)return new Promise((o,t)=>{l.getChannelInfo(e,r).then(n=>l.getChannelEvent(e,n.channelStartBlock.toNumber(),n.channelStartBlock.toNumber(),r)).then(n=>{const a=e===g?d:e===y?b:n;return l.getJsonFileFromIdentity(a,e)}).then(n=>{o(n)}).catch(n=>{console.error("!!!Error, getChannelJsonFromChannelAddress() --> %o",n),t(n)})})},getChannelJsonFromUserAddress:async(e,r)=>{if(e!==null)return new Promise((o,t)=>{l.getChannelJsonFromChannelAddress(e,r).then(n=>{o(n)}).catch(n=>{console.error("!!!Error, getChannelJsonFromUserAddress() --> %o",n),t(n)})})},getTotalNumberOfChannels:async e=>new Promise((r,o)=>{e.channelsCount().then(t=>{r(t.toNumber())}).catch(t=>{console.error("!!!Error, getTotalNumberOfChannels() --> %o",t),o(t)})}),getChannelsMetaLatestToOldest:async(e,r,o)=>new Promise((t,n)=>{l.getTotalNumberOfChannels(o).then(async a=>{let s=[];const h=a;(e>h||e==-1)&&(e=h-1),r==-1&&(r=h);let c=[];for(let i=r-1;i>=0;i--){const m=e-i;c.push(m)}const u=c.map(async i=>{await l.getChannelAddressFromID(i,o).then(m=>l.getChannelInfo(m,o)).then(m=>{s=[m,...s]}).catch(m=>console.error("Error in channel: %d | skipping...",i))});await Promise.all(u),t(s)}).catch(a=>{console.error("!!!Error, getChannelsMetaLatestToOldest() --> %o",a),n(a)})}),getSubscribedStatus:async(e,r,o)=>new Promise((t,n)=>{o.isUserSubscribed(r,e).then(a=>{t(a)}).catch(a=>{console.error("!!!Error, getSubscribedStatus() --> %o",a),n(a)})}),getTotalSubscribedChannels:async(e,r)=>new Promise((o,t)=>{r.users[e].subscribedCount().then(n=>{console.debug("getTotalSubscribedChannels() --> %o",n.toNumber()),o(n.toNumber())}).catch(n=>{console.error("!!!Error, getTotalSubscribedChannels() --> %o",n),t(n)})}),getFairShareOfUserAtBlock:async(e,r,o)=>new Promise((t,n)=>{o.users(e).then(a=>{a.userActivated?o.calcAllChannelsRatio(e,r).then(s=>{t(s)}).catch(s=>{console.error("!!!Error, calcAllChannelsRatio() --> %o",s),n(s)}):n("User not activated")}).catch(a=>{console.error("!!!Error, calcAllChannelsRatio() --> %o",a),n(a)})}),getPoolFunds:async e=>new Promise((r,o)=>{e.poolFunds().then(t=>{r(t)}).catch(t=>{console.error("!!!Error, getPoolFunds() --> %o",t),o(t)})}),formatBigNumberToMetric:(e,r)=>{try{return r&&(e=e.div(1e14),e=e.div(1e4)),e=e.toNumber(),l.metricFormatter(e,2)}catch(o){return console.error(o),"---"}},metricFormatter:(e,r)=>{var o=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}],t=/\.0+$|(\.[0-9]*[1-9])0+$/,n;for(n=o.length-1;n>0&&!(e>=o[n].value);n--);return(e/o[n].value).toFixed(r).replace(t,"$1")+o[n].symbol}}});export{l as E,f as T,A as __tla};