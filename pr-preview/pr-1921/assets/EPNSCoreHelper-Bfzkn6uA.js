import{ee as f,ef as C,eg as F,eh as w,__tla as E}from"./index-DQDx4L-B.js";import{I as P,__tla as v}from"./IpfsHelper-Cz4PqwZ7.js";let l,p=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let g,d,y,b;g="0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF",d="1+bafkreif643vf3cteadznccivnsk5uj26e3ls7onbshnldb3aej3omrxsau",y="0x983110309620D911731Ac0932219af06091b6744",b="1+bafkreiekigkyezwrspignt7l7vsrjefjmogwmigy4eqtts277cu2p23ilm",l={getGasPriceInDollars:async e=>{const t=await f.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD").then(({data:r})=>r.USD||0),o=await e.getGasPrice();return C(o)*t},getVotingPower:async(e,t,o=!1)=>{if(await F(e)||e.endsWith(".eth"))try{let r=await t.decimals(),n=await t.getCurrentVotes(e),a=await Number(n/Math.pow(10,r)),s=a.toString();return o?a:s}catch(r){console.error("\u{1F680} ~ file: ViewDelegateeItem.js ~ line 47 ~ getVotingPower ~ err",r)}return"0.000"},getChannelInfo:async(e,t)=>{if(e!==null)return new Promise((o,r)=>{t.channels(e).then(n=>{const a={...n};a.addr=e,o(a)}).catch(n=>{console.error("!!!Error, getChannelInfo() --> %o",n),r(n)})})},getChannelEvent:async(e,t,o,r)=>new Promise((n,a)=>{let s=r.filters.AddChannel(e),h=t;t!=o&&(s=r.filters.UpdateChannel(e),h=o),r.queryFilter(s,h,h).then(async c=>{c.length==0&&(c=await r.queryFilter(r.filters.AddChannel(e),t,t));let u;c.forEach(function(i){i.args.channel.toString()==e.toString()&&(u=w(i.args.identity))}),n(u)}).catch(c=>{console.error("!!!Error, getChannelEvent() --> %o",c),a(c)})}),getJsonFileFromIdentity:async(e,t)=>new Promise((o,r)=>{e||r(`There is no identity file for channel: ${t}`);const n=(e==null?void 0:e.split("+"))||[];if(n[0]==1){const a=P+n[1];fetch(a).then(s=>s.json()).then(s=>{o(s)}).catch(s=>{console.error("!!!Error, getJsonFileFromIdentity() --> %o",s),r(s)})}}),getChannelJsonFromChannelAddress:async(e,t)=>{if(e!==null)return new Promise((o,r)=>{l.getChannelInfo(e,t).then(n=>l.getChannelEvent(e,n.channelStartBlock.toNumber(),n.channelUpdateBlock.toNumber(),t)).then(n=>{const a=e===g?d:e===y?b:n;return l.getJsonFileFromIdentity(a,e)}).then(n=>{o(n)}).catch(n=>{console.error("!!!Error, getChannelJsonFromChannelAddress() --> %o",n),r(n)})})},getChannelJsonFromChannelAddressStartBlock:async(e,t)=>{if(e!==null)return new Promise((o,r)=>{l.getChannelInfo(e,t).then(n=>l.getChannelEvent(e,n.channelStartBlock.toNumber(),n.channelStartBlock.toNumber(),t)).then(n=>{const a=e===g?d:e===y?b:n;return l.getJsonFileFromIdentity(a,e)}).then(n=>{o(n)}).catch(n=>{console.error("!!!Error, getChannelJsonFromChannelAddress() --> %o",n),r(n)})})},getChannelJsonFromUserAddress:async(e,t)=>{if(e!==null)return new Promise((o,r)=>{l.getChannelJsonFromChannelAddress(e,t).then(n=>{o(n)}).catch(n=>{console.error("!!!Error, getChannelJsonFromUserAddress() --> %o",n),r(n)})})},getTotalNumberOfChannels:async e=>new Promise((t,o)=>{e.channelsCount().then(r=>{t(r.toNumber())}).catch(r=>{console.error("!!!Error, getTotalNumberOfChannels() --> %o",r),o(r)})}),getChannelsMetaLatestToOldest:async(e,t,o)=>new Promise((r,n)=>{l.getTotalNumberOfChannels(o).then(async a=>{let s=[];const h=a;(e>h||e==-1)&&(e=h-1),t==-1&&(t=h);let c=[];for(let i=t-1;i>=0;i--){const m=e-i;c.push(m)}const u=c.map(async i=>{await l.getChannelAddressFromID(i,o).then(m=>l.getChannelInfo(m,o)).then(m=>{s=[m,...s]}).catch(m=>console.error("Error in channel: %d | skipping...",i))});await Promise.all(u),r(s)}).catch(a=>{console.error("!!!Error, getChannelsMetaLatestToOldest() --> %o",a),n(a)})}),getSubscribedStatus:async(e,t,o)=>new Promise((r,n)=>{o.isUserSubscribed(t,e).then(a=>{r(a)}).catch(a=>{console.error("!!!Error, getSubscribedStatus() --> %o",a),n(a)})}),getTotalSubscribedChannels:async(e,t)=>new Promise((o,r)=>{t.users[e].subscribedCount().then(n=>{console.debug("getTotalSubscribedChannels() --> %o",n.toNumber()),o(n.toNumber())}).catch(n=>{console.error("!!!Error, getTotalSubscribedChannels() --> %o",n),r(n)})}),getFairShareOfUserAtBlock:async(e,t,o)=>new Promise((r,n)=>{o.users(e).then(a=>{a.userActivated?o.calcAllChannelsRatio(e,t).then(s=>{r(s)}).catch(s=>{console.error("!!!Error, calcAllChannelsRatio() --> %o",s),n(s)}):n("User not activated")}).catch(a=>{console.error("!!!Error, calcAllChannelsRatio() --> %o",a),n(a)})}),getPoolFunds:async e=>new Promise((t,o)=>{e.poolFunds().then(r=>{t(r)}).catch(r=>{console.error("!!!Error, getPoolFunds() --> %o",r),o(r)})}),formatBigNumberToMetric:(e,t)=>{try{return t&&(e=e.div(1e14),e=e.div(1e4)),e=e.toNumber(),l.metricFormatter(e,2)}catch(o){return console.error(o),"---"}},metricFormatter:(e,t)=>{var o=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}],r=/\.0+$|(\.[0-9]*[1-9])0+$/,n;for(n=o.length-1;n>0&&!(e>=o[n].value);n--);return(e/o[n].value).toFixed(t).replace(r,"$1")+o[n].symbol}}});export{l as E,p as __tla};
