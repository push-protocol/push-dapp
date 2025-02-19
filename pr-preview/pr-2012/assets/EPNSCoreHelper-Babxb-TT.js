import { el as y, f2 as E, eo as F, f3 as P, f4 as b, f5 as w, __tla as __tla_0 } from "./index-AGa8OPve.js";
let i, A;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let m, f, d, C;
  A = y.createContext(null);
  m = "0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF";
  f = "1+bafkreif643vf3cteadznccivnsk5uj26e3ls7onbshnldb3aej3omrxsau";
  d = "0x983110309620D911731Ac0932219af06091b6744";
  C = "1+bafkreiekigkyezwrspignt7l7vsrjefjmogwmigy4eqtts277cu2p23ilm";
  i = {
    getGasPriceInDollars: async (e) => {
      const r = await P.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD").then(({ data: s }) => s.USD || 0), n = await e.getGasPrice();
      return b(n) * r;
    },
    getVotingPower: async (e, r, n = false) => {
      if (await F(e) || e.endsWith(".eth")) try {
        let t = await r.decimals(), s = await r.getCurrentVotes(e), a = await Number(s / Math.pow(10, t)), l = a.toString();
        return n ? a : l;
      } catch (t) {
        console.error("\u{1F680} ~ file: ViewDelegateeItem.js ~ line 47 ~ getVotingPower ~ err", t);
      }
      return "0.000";
    },
    getChannelInfo: async (e, r) => {
      if (e !== null) return new Promise((n, o) => {
        r.channels(e).then((t) => {
          const s = {
            ...t
          };
          s.addr = e, n(s);
        }).catch((t) => {
          console.error("!!!Error, getChannelInfo() --> %o", t), o(t);
        });
      });
    },
    getChannelEvent: async (e, r, n, o) => new Promise((t, s) => {
      let a = o.filters.AddChannel(e), l = r;
      r != n && (a = o.filters.UpdateChannel(e), l = n), o.queryFilter(a, l, l).then(async (h) => {
        h.length == 0 && (h = await o.queryFilter(o.filters.AddChannel(e), r, r));
        let g;
        h.forEach(function(c) {
          c.args.channel.toString() == e.toString() && (g = E(c.args.identity));
        }), t(g);
      }).catch((h) => {
        console.error("!!!Error, getChannelEvent() --> %o", h), s(h);
      });
    }),
    getJsonFileFromIdentity: async (e, r) => new Promise((n, o) => {
      e || o(`There is no identity file for channel: ${r}`);
      const t = (e == null ? void 0 : e.split("+")) || [];
      if (t[0] == 1) {
        const a = w + t[1];
        fetch(a).then((l) => l.json()).then((l) => {
          n(l);
        }).catch((l) => {
          console.error("!!!Error, getJsonFileFromIdentity() --> %o", l), o(l);
        });
      }
    }),
    getChannelJsonFromChannelAddress: async (e, r) => {
      if (e !== null) return new Promise((n, o) => {
        i.getChannelInfo(e, r).then((t) => i.getChannelEvent(e, t.channelStartBlock.toNumber(), t.channelUpdateBlock.toNumber(), r)).then((t) => {
          const s = e === m ? f : e === d ? C : t;
          return i.getJsonFileFromIdentity(s, e);
        }).then((t) => {
          n(t);
        }).catch((t) => {
          console.error("!!!Error, getChannelJsonFromChannelAddress() --> %o", t), o(t);
        });
      });
    },
    getChannelJsonFromChannelAddressStartBlock: async (e, r) => {
      if (e !== null) return new Promise((n, o) => {
        i.getChannelInfo(e, r).then((t) => i.getChannelEvent(e, t.channelStartBlock.toNumber(), t.channelStartBlock.toNumber(), r)).then((t) => {
          const s = e === m ? f : e === d ? C : t;
          return i.getJsonFileFromIdentity(s, e);
        }).then((t) => {
          n(t);
        }).catch((t) => {
          console.error("!!!Error, getChannelJsonFromChannelAddress() --> %o", t), o(t);
        });
      });
    },
    getChannelJsonFromUserAddress: async (e, r) => {
      if (e !== null) return new Promise((n, o) => {
        i.getChannelJsonFromChannelAddress(e, r).then((t) => {
          n(t);
        }).catch((t) => {
          console.error("!!!Error, getChannelJsonFromUserAddress() --> %o", t), o(t);
        });
      });
    },
    getTotalNumberOfChannels: async (e) => new Promise((r, n) => {
      e.channelsCount().then((o) => {
        r(o.toNumber());
      }).catch((o) => {
        console.error("!!!Error, getTotalNumberOfChannels() --> %o", o), n(o);
      });
    }),
    getChannelsMetaLatestToOldest: async (e, r, n) => new Promise((o, t) => {
      i.getTotalNumberOfChannels(n).then(async (s) => {
        let a = [];
        const l = s;
        (e > l || e == -1) && (e = l - 1), r == -1 && (r = l);
        let h = [];
        for (let c = r - 1; c >= 0; c--) {
          const u = e - c;
          h.push(u);
        }
        const g = h.map(async (c) => {
          await i.getChannelAddressFromID(c, n).then((u) => i.getChannelInfo(u, n)).then((u) => {
            a = [
              u,
              ...a
            ];
          }).catch((u) => console.error("Error in channel: %d | skipping...", c));
        });
        await Promise.all(g), o(a);
      }).catch((s) => {
        console.error("!!!Error, getChannelsMetaLatestToOldest() --> %o", s), t(s);
      });
    }),
    getSubscribedStatus: async (e, r, n) => new Promise((o, t) => {
      n.isUserSubscribed(r, e).then((s) => {
        o(s);
      }).catch((s) => {
        console.error("!!!Error, getSubscribedStatus() --> %o", s), t(s);
      });
    }),
    getTotalSubscribedChannels: async (e, r) => new Promise((n, o) => {
      r.users[e].subscribedCount().then((t) => {
        console.debug("getTotalSubscribedChannels() --> %o", t.toNumber()), n(t.toNumber());
      }).catch((t) => {
        console.error("!!!Error, getTotalSubscribedChannels() --> %o", t), o(t);
      });
    }),
    getFairShareOfUserAtBlock: async (e, r, n) => new Promise((o, t) => {
      n.users(e).then((s) => {
        s.userActivated ? n.calcAllChannelsRatio(e, r).then((a) => {
          o(a);
        }).catch((a) => {
          console.error("!!!Error, calcAllChannelsRatio() --> %o", a), t(a);
        }) : t("User not activated");
      }).catch((s) => {
        console.error("!!!Error, calcAllChannelsRatio() --> %o", s), t(s);
      });
    }),
    getPoolFunds: async (e) => new Promise((r, n) => {
      e.poolFunds().then((o) => {
        r(o);
      }).catch((o) => {
        console.error("!!!Error, getPoolFunds() --> %o", o), n(o);
      });
    }),
    formatBigNumberToMetric: (e, r) => {
      try {
        return r && (e = e.div(1e14), e = e.div(1e4)), e = e.toNumber(), i.metricFormatter(e, 2);
      } catch (n) {
        return console.error(n), "---";
      }
    },
    metricFormatter: (e, r) => {
      var n = [
        {
          value: 1,
          symbol: ""
        },
        {
          value: 1e3,
          symbol: "k"
        },
        {
          value: 1e6,
          symbol: "M"
        },
        {
          value: 1e9,
          symbol: "G"
        },
        {
          value: 1e12,
          symbol: "T"
        },
        {
          value: 1e15,
          symbol: "P"
        },
        {
          value: 1e18,
          symbol: "E"
        }
      ], o = /\.0+$|(\.[0-9]*[1-9])0+$/, t;
      for (t = n.length - 1; t > 0 && !(e >= n[t].value); t--) ;
      return (e / n[t].value).toFixed(r).replace(o, "$1") + n[t].symbol;
    }
  };
});
export {
  i as E,
  A as T,
  __tla
};
