import { u as o, __tla as __tla_0 } from "./InfiniteScroll-D3igTPHt.js";
import { eQ as c, eR as m, __tla as __tla_1 } from "./index-C2jH2XEK.js";
let h;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  let y;
  y = ({ userPushSDKInstance: u, page: r, pageSize: l, order: t, sort: s, chain: n, tag: a }) => u.channel.list({
    page: r,
    limit: l,
    order: t,
    sort: s,
    ...n ? {
      filter: Number(n)
    } : {},
    ...a ? {
      tag: a
    } : {}
  });
  h = ({ order: u, pageSize: r, sort: l, chain: t, tag: s }) => {
    const { userPushSDKInstance: n } = c((e) => e.user);
    return o({
      queryKey: [
        m,
        t,
        s
      ],
      initialPageParam: 1,
      queryFn: ({ pageParam: e }) => y({
        userPushSDKInstance: n,
        order: u,
        sort: l,
        pageSize: r,
        page: e,
        chain: t,
        tag: s
      }),
      getNextPageParam: ({ itemcount: e }, f, i) => r * (i + 1) >= e ? null : i + 1
    });
  };
});
export {
  __tla,
  h as u
};
