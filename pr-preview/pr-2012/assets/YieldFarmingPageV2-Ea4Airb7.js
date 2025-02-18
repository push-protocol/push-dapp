var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { eG as U, fE as l, en as xe, ea as e, fX as Et, hi as Tt, eT as E, hj as N, ej as s, e5 as Te, e7 as i, ga as Re, ee as _e, fP as Se, eW as me, fT as x, fS as f, fb as ae, fW as je, eV as He, ec as pe, ed as de, f1 as Ge, hk as Pt, fh as st, gc as D, fD as S, fC as C, gX as ce, gb as jt, el as Fe, fO as Mt, fg as St, hl as ot, hm as Rt, ev as ie, hn as Ft, g0 as vt, fi as Oe, fj as We, eb as Ye, fG as Ct, fm as it, fn as at, eX as le, e_ as Be, ho as Ce, eS as At, eZ as ve, __tla as __tla_0 } from "./index-Kvkq3-iW.js";
import { n as q, f as J, b as It, __tla as __tla_1 } from "./StakingHelper-B34R3TYl.js";
import { C as Ut, __tla as __tla_2 } from "./ContentLayout-BGhKIoso.js";
let Gn;
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  const rt = U.from(1).mul(U.from(10).pow(U.from(18))), Lt = 3e4, Dt = 35e3, lt = (t) => t.mul(U.from(10).pow(U.from(18))), ke = (t) => t.div(U.from(10).pow(U.from(10))).toNumber() / 1e8;
  const _fe = class _fe {
    constructor() {
      __publicField(this, "state", {
        account: null,
        signer: null,
        staking: null,
        yieldFarmingPUSH: null,
        yieldFarmingLP: null,
        rewardForCurrentEpochPush: null,
        rewardForCurrentEpochLP: null,
        genesisEpochAmountPUSH: Lt,
        deprecationPerEpochPUSH: 100,
        genesisEpochAmountLP: Dt,
        deprecationPerEpochLP: 100,
        uniswapV2Router02: null
      });
      __publicField(this, "init", (n, a, c, o, r, m) => {
        this.state.account = n, this.state.pushToken = a, this.state.staking = c, this.state.yieldFarmingPUSH = o, this.state.yieldFarmingLP = r, this.state.uniswapV2Router02 = m;
      });
      __publicField(this, "getPoolStats", () => new Promise(async (n, a) => {
        const o = await this.state.yieldFarmingPUSH.getCurrentEpoch(), r = await this.state.uniswapV2Router02.getAmountsOut(rt.toString(), [
          l.pushToken,
          l.WETHAddress,
          l.USDTAddress
        ]);
        let m;
        xe.coreContractChain === 42 || xe.coreContractChain === 5 ? m = r[r.length - 1].div(1e6).toNumber() : m = r[r.length - 1].toNumber() / 1e6, console.debug("Push PRice", m);
        const p = ke(await this.state.pushToken.balanceOf(l.uniV2LPToken)), d = ke(await this.state.pushToken.attach(l.WETHAddress).balanceOf(l.uniV2LPToken)), h = await this.state.uniswapV2Router02.getAmountsOut(rt.toString(), [
          l.WETHAddress,
          l.USDTAddress
        ]);
        let y;
        xe.coreContractChain === 42 || xe.coreContractChain === 5 ? y = ke(h[h.length - 1]) : y = h[h.length - 1].toNumber() / 1e6, console.debug("Eth Price", y);
        const M = ke(await this.state.pushToken.attach(l.uniV2LPToken).totalSupply()), W = (p * m + d * y) / M / m;
        n({
          currentEpoch: o,
          lpToPushRatio: W
        });
      }));
      __publicField(this, "getPUSHPoolStats", async () => new Promise(async (n, a) => {
        const c = this.state.yieldFarmingPUSH;
        let o = await c.NR_OF_EPOCHS();
        const r = await c.getCurrentEpoch();
        o = o.toString() > r.toString() ? r : o;
        const m = lt(U.from(this.state.genesisEpochAmountPUSH)), p = lt(U.from(this.state.deprecationPerEpochPUSH)), d = this.calcTotalAmountPerEpoch(m, o, p);
        this.state.rewardForCurrentEpochPush = d;
        const h = await c.getPoolSize(r.add(1));
        n({
          currentEpochPUSH: r,
          totalEpochPUSH: o,
          poolBalance: h
        });
      }));
      __publicField(this, "getLPPoolStats", async (n) => new Promise(async (a, c) => {
        const o = this.state.yieldFarmingLP;
        let r = await o.NR_OF_EPOCHS();
        const m = await o.getCurrentEpoch();
        r = r.toString() > m.toString() ? m : r;
        const p = await o.getPoolSize(m.add(1));
        a({
          currentEpochPUSH: m,
          totalEpochPUSH: r,
          poolBalance: p
        });
      }));
      __publicField(this, "getUserData", async (n) => new Promise(async (a, c) => {
        if (this.state.account) {
          const o = await n.getCurrentEpoch().then((V) => U.from(Math.min(V, 100))), r = await n.getCurrentEpoch(), m = await n.getEpochStake(this.state.account, r.add(1)), p = (await n.lastEpochIdHarvested(this.state.account)).toNumber();
          let d = this.getAccumulatedReward(o, n), h = this.getTotalAvailableRewards(p, o, n), [y, M] = await Promise.all([
            d,
            h
          ]);
          a({
            epochStakeNext: m,
            totalAccumulatedReward: y,
            totalAvailableReward: M
          });
        }
      }));
      __publicField(this, "getTotalAvailableRewards", async (n, a, c) => {
        let o = [];
        for (var r = n + 1; r <= a.toNumber(); r++) {
          const d = this.calculateUserEpochReward(r, c);
          o.push(d);
        }
        let p = (await Promise.all(o)).reduce((d, h) => d + h, 0);
        return p = p.toFixed(2), p;
      });
      __publicField(this, "getAccumulatedReward", async (n, a) => {
        let c = [];
        for (var o = 0; o <= n.toNumber(); o++) {
          const p = this.calculateUserEpochReward(o, a);
          c.push(p);
        }
        let m = (await Promise.all(c)).reduce((p, d) => p + d, 0);
        return m = m.toFixed(2), m;
      });
      __publicField(this, "calcTotalAmountPerEpoch", (n, a, c) => n.sub(a.mul(c)));
      __publicField(this, "calculateUserEpochReward", async (n, a) => {
        const c = ke(await a.getEpochStake(this.state.account, n)), o = ke(await a.getPoolSize(n));
        let r = 0;
        if (o > 0) if (a.address == l.yieldFarmLP) {
          const m = this.state.genesisEpochAmountLP, p = this.state.deprecationPerEpochLP, d = m - p * n;
          r = c / o * d;
        } else {
          const m = this.state.genesisEpochAmountPUSH, p = this.state.deprecationPerEpochPUSH, d = m - p * n;
          r = c / o * d;
        }
        return r;
      });
    }
    static getInstance() {
      return _fe.instance || (_fe.instance = new _fe()), _fe.instance;
    }
  };
  __publicField(_fe, "instance", null);
  let fe = _fe;
  const Q = (t) => e.jsx(Et, {
    wrapperProps: {
      width: "100%",
      maxWidth: "none",
      minWidth: "auto",
      display: "flex",
      flex: "1",
      margin: t.margin ? t.margin : "0"
    },
    placementProps: {
      background: "none",
      bottom: t.bottom ? t.bottom : "25px",
      left: t.error ? "40px" : "0px"
    },
    tooltipContent: t.error ? e.jsx(Nt, {
      title: t.ToolTipTitle,
      width: t.ToolTipWidth
    }) : e.jsx(kt, {
      title: t.ToolTipTitle,
      body: t.ToolTipBody
    }),
    children: t.children
  }), Nt = (t) => e.jsx(E, {
    width: t.width,
    background: "#131313",
    justifyContent: "flex-start",
    border: "1px solid rgba(173, 176, 190, 0.2)",
    alignItems: "flex-start",
    padding: "0.75rem 0.75rem 0.75rem 1rem",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
    color: "#FFF",
    borderRadius: "2px 12px 12px 12px",
    children: e.jsx(N, {
      color: "inherit",
      children: t.title
    })
  }), kt = ({ title: t, body: n }) => e.jsxs(Vt, {
    children: [
      e.jsx($t, {
        children: t
      }),
      e.jsxs(zt, {
        children: [
          n,
          "  ",
          " ",
          n.includes("Push Fee Pool APR") && e.jsx(Tt, {
            cursor: "pointer",
            href: "https://medium.com/push-protocol/new-push-yield-farming-rewards-full-details-4a9ff473226d",
            target: "_blank",
            children: "here"
          })
        ]
      })
    ]
  }), Vt = s(E)`
  box-sizing: border-box;
  width: 16rem;
  background: ${(t) => t.theme.default.bg};
  justify-content: flex-start;
  border: 1px solid rgba(173, 176, 190, 0.2);
  align-items: flex-start;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius:1rem 1rem 1rem 0.125rem;

  @media (max-width:400px){
    width:16.75rem;
  }


`, $t = s(N)`
  color: ${(t) => t.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`, zt = s(N)`
  color: ${(t) => t.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
  text-align:left;
`, he = "data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15284_45077)'%3e%3cpath%20d='M8.5%2014.5C11.8137%2014.5%2014.5%2011.8137%2014.5%208.5C14.5%205.18629%2011.8137%202.5%208.5%202.5C5.18629%202.5%202.5%205.18629%202.5%208.5C2.5%2011.8137%205.18629%2014.5%208.5%2014.5Z'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%208C8.13261%208%208.25979%208.05268%208.35355%208.14645C8.44732%208.24021%208.5%208.36739%208.5%208.5V11C8.5%2011.1326%208.55268%2011.2598%208.64645%2011.3536C8.74021%2011.4473%208.86739%2011.5%209%2011.5'%20stroke='%23797D8F'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.25%206.5C8.66421%206.5%209%206.16421%209%205.75C9%205.33579%208.66421%205%208.25%205C7.83579%205%207.5%205.33579%207.5%205.75C7.5%206.16421%207.83579%206.5%208.25%206.5Z'%20fill='%23797D8F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15284_45077'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ct = ({ poolName: t, userData: n, PoolStats: a, poolAddress: c, getUserData: o, tokenAddress: r, setActiveTab: m }) => {
    const { account: p, provider: d, isWalletConnected: h, connect: y } = Te(), [M, V] = i.useState(false), [W, L] = i.useState(false), [Y, $] = i.useState(false), [Z, z] = i.useState(null), [K, se] = i.useState(null), [ee, P] = i.useState(null), [B, A] = i.useState(0), T = Re(), k = _e(), X = async () => {
      if (!h) {
        y();
        return;
      }
      if (W) return;
      if ((n == null ? void 0 : n.totalAvailableReward) == 0) {
        P("No Rewards to Claim"), L(false);
        return;
      }
      L(true);
      var I = d.getSigner(p);
      new S(c, C.yieldFarming, I).massHarvest().then(async (g) => {
        T.showLoaderToast({
          loaderMessage: "Waiting for Confirmation..."
        });
        try {
          await d.waitForTransaction(g.hash), T.showMessageToast({
            toastTitle: "Success",
            toastMessage: "Transaction Completed!",
            toastType: "SUCCESS",
            getToastIcon: (w) => e.jsx(ce, {
              size: w,
              color: "green"
            })
          }), o(), L(false);
        } catch (w) {
          T.showMessageToast({
            toastTitle: "Error",
            toastMessage: `Transaction Failed! (" +${w.name}+ ")`,
            toastType: "ERROR",
            getToastIcon: (u) => e.jsx(D, {
              size: u,
              color: "red"
            })
          }), L(false);
        }
      }).catch((g) => {
        T.showMessageToast({
          toastTitle: "Error",
          toastMessage: "Transaction Cancelled!",
          toastType: "ERROR",
          getToastIcon: (w) => e.jsx(D, {
            size: w,
            color: "red"
          })
        }), L(false);
      });
    }, H = async () => {
      if (!h) {
        y();
        return;
      }
      if (M) return;
      V(true);
      const v = J(n.epochStakeNext);
      if (v == 0) {
        se("Nothing to unstake, Stake Now in new reward program."), V(false);
        return;
      }
      var I = d.getSigner(p);
      let b = new S(l.staking, C.staking, I);
      await b.balanceOf(p, r), b.withdraw(r, U.from(v).mul(U.from(10).pow(18))).then(async (g) => {
        T.showLoaderToast({
          loaderMessage: "Waiting for Confirmation..."
        });
        try {
          await d.waitForTransaction(g.hash), T.showMessageToast({
            toastTitle: "Success",
            toastMessage: "Transaction Completed!",
            toastType: "SUCCESS",
            getToastIcon: (w) => e.jsx(ce, {
              size: w,
              color: "green"
            })
          }), V(false), o();
        } catch (w) {
          console.error("Error", w), T.showMessageToast({
            toastTitle: "Error",
            toastMessage: `Transaction Failed! (" +${w.name}+ ")`,
            toastType: "ERROR",
            getToastIcon: (u) => e.jsx(D, {
              size: u,
              color: "red"
            })
          }), V(false);
        }
      }).catch((g) => {
        T.showMessageToast({
          toastTitle: "Error",
          toastMessage: `Transaction Cancelled! ${g.message}`,
          toastType: "ERROR",
          getToastIcon: (w) => e.jsx(D, {
            size: w,
            color: "red"
          })
        }), V(false);
      });
    }, ge = async () => {
      if (!h) {
        y();
        return;
      }
      if (Y) return;
      let v = 3;
      const I = J(n.epochStakeNext);
      if (I == 0) {
        T.showMessageToast({
          toastTitle: "Error",
          toastMessage: "Nothing to Withdraw!",
          toastType: "ERROR",
          getToastIcon: (O) => e.jsx(D, {
            size: O,
            color: "red"
          })
        }), $(false), z(null);
        return;
      }
      var b = d.getSigner(p);
      let _ = new S(l.staking, C.staking, b);
      const g = r === l.pushToken ? l.pushCoreV2 : l.stakingV2;
      var w = new S(r, C.pushToken, b);
      let u = await w.allowance(p, g), R = J(u);
      parseInt(R) >= parseInt(I) ? (v = 2, A(50)) : (v = 3, A(33)), $(true), z(`Withdrawing 1/${v}`);
      let G;
      G = _.withdraw(r, U.from(I).mul(U.from(10).pow(18))), G.then(async (O) => {
        if (T.showLoaderToast({
          loaderMessage: "Withdrawing! Please Wait..."
        }), await d.waitForTransaction(O.hash), T.showMessageToast({
          toastTitle: "Success",
          toastMessage: "Successfully withdrawn!",
          toastType: "SUCCESS",
          getToastIcon: (re) => e.jsx(ce, {
            size: re,
            color: "green"
          })
        }), r === l.pushToken) {
          var we = new S(r, C.pushToken, b);
          let re = await we.allowance(p, l.pushCoreV2), ne = J(re);
          parseInt(ne) >= parseInt(I) ? te(O, I, v) : (O = we.approve(l.pushCoreV2, U.from(I).mul(U.from(10).pow(18))), z(`Approving 2/${v}`), A(66), O.then(async (oe) => {
            T.showLoaderToast({
              loaderMessage: "Approving! Please Wait..."
            }), await d.waitForTransaction(oe.hash), T.showMessageToast({
              toastTitle: "Success",
              toastMessage: "Successfully Approved!",
              toastType: "SUCCESS",
              getToastIcon: (ue) => e.jsx(ce, {
                size: ue,
                color: "green"
              })
            }), te(oe, I, v);
          }).catch((oe) => {
            console.error("Error in approving 2", oe), T.showMessageToast({
              toastTitle: "Error",
              toastMessage: "Transaction Failed! Could Not Approve",
              toastType: "ERROR",
              getToastIcon: (ue) => e.jsx(D, {
                size: ue,
                color: "red"
              })
            }), $(false), z(null), o(), A(0);
          }));
        } else {
          var we = new S(r, C.pushToken, b);
          let ne = await we.allowance(p, l.stakingV2), oe = J(ne);
          parseInt(oe) >= parseInt(I) ? F(O, I, v) : (O = we.approve(l.stakingV2, U.from(I).mul(U.from(10).pow(18))), z(`Approving 2/${v}`), A(66), O.then(async (ue) => {
            T.showLoaderToast({
              loaderMessage: "Approving! Please Wait..."
            }), await d.waitForTransaction(ue.hash), T.showMessageToast({
              toastTitle: "Success",
              toastMessage: "Successfully Approved!",
              toastType: "SUCCESS",
              getToastIcon: (be) => e.jsx(ce, {
                size: be,
                color: "green"
              })
            }), F(ue, I, v);
          }).catch((ue) => {
            console.error("Error in approving", ue), T.showMessageToast({
              toastTitle: "Error",
              toastMessage: "Transaction Failed! Could Not Approve",
              toastType: "ERROR",
              getToastIcon: (be) => e.jsx(D, {
                size: be,
                color: "red"
              })
            }), $(false), z(null), o(), A(0);
          }));
        }
      }).catch((O) => {
        console.error("Error in withdrawing: ", O), T.showMessageToast({
          toastTitle: "Error",
          toastMessage: "Transaction Failed! Could Not Withdraw!",
          toastType: "ERROR",
          getToastIcon: (we) => e.jsx(D, {
            size: we,
            color: "red"
          })
        }), $(false), z(null), A(0);
      });
    }, F = async (v, I, b) => {
      if (!h) {
        y();
        return;
      }
      var _ = d.getSigner(p), g = new S(l.stakingV2, C.stakingV2, _);
      z(`Staking ${b}/${b}`), A(100), v = g.deposit(r, U.from(I).mul(U.from(10).pow(18))), v.then(async (w) => {
        T.showLoaderToast({
          loaderMessage: "Depositing to V2 ! Please Wait..."
        }), await d.waitForTransaction(w.hash), T.showMessageToast({
          toastTitle: "Success",
          toastMessage: "Transaction Completed!Successfully Deposited the UNI-V2 Token to V2 ",
          toastType: "SUCCESS",
          getToastIcon: (u) => e.jsx(ce, {
            size: u,
            color: "green"
          })
        }), $(false), o(), z(null), m(0);
      }).catch((w) => {
        console.error("Error in depositing: ", w), T.showMessageToast({
          toastTitle: "Error",
          toastMessage: "Transaction Failed! Could Not Deposit the Amount",
          toastType: "ERROR",
          getToastIcon: (u) => e.jsx(D, {
            size: u,
            color: "red"
          })
        }), $(false), o(), z(null), A(0);
      });
    }, te = async (v, I, b) => {
      if (!h) {
        y();
        return;
      }
      var _ = d.getSigner(p);
      let g = new S(l.pushCoreV2, C.pushCoreV2, _);
      z(`Staking ${b}/${b}`), A(100), v = g.stake(U.from(I).mul(U.from(10).pow(18))), v.then(async (w) => {
        T.showLoaderToast({
          loaderMessage: "Depositing to V2 ! Please Wait..."
        }), await d.waitForTransaction(w.hash), T.showMessageToast({
          toastTitle: "Success",
          toastMessage: "Transaction Completed! Successfully Deposited the Push Token to V2 ",
          toastType: "SUCCESS",
          getToastIcon: (u) => e.jsx(ce, {
            size: u,
            color: "green"
          })
        }), $(false), o(), z(null), m(0);
      }).catch((w) => {
        console.error("Error in depositing: ", w), T.showMessageToast({
          toastTitle: "Error",
          toastMessage: "Transaction Failed! Could Not Deposit Push Token",
          toastType: "ERROR",
          getToastIcon: (u) => e.jsx(D, {
            size: u,
            color: "red"
          })
        }), $(false), o(), z(null), A(0);
      });
    };
    i.useEffect(() => {
      P(null), se(null);
    }, [
      p
    ]);
    const j = Se(600);
    return e.jsxs(Bt, {
      margin: t === "UNI-V2" ? " 10px 0 10px 10px " : "  10px 10px 10px 0",
      children: [
        e.jsx(E, {
          margin: "0px 0px 20px 0",
          children: a ? e.jsxs(e.Fragment, {
            children: [
              e.jsxs(Ht, {
                children: [
                  t === "UNI-V2" ? "Uniswap V2 Staking Pool" : "PUSH Staking Pool ",
                  e.jsx(Ot, {
                    children: "Deprecated"
                  })
                ]
              }),
              e.jsxs(Je, {
                children: [
                  "Current APR",
                  " ",
                  e.jsx(me, {
                    color: "#D53A94",
                    fontWeight: "600",
                    children: "0%"
                  })
                ]
              })
            ]
          }) : e.jsxs(Ee, {
            padding: "15px 15px 0 15px",
            children: [
              e.jsx(x, {
                height: "15px",
                width: "234px",
                margin: "0 0 10px 0"
              }),
              e.jsx(x, {
                height: "15px",
                width: "112px"
              })
            ]
          })
        }),
        e.jsxs(E, {
          children: [
            e.jsxs(_t, {
              border: `1px solid ${k.stakingBorder}`,
              borderRadius: "16px",
              children: [
                e.jsx(E, {
                  margin: j ? "0px 6px 0 0 " : "0px 18px 0px 0px",
                  padding: j ? " 7px" : "10px",
                  children: a ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(Je, {
                        children: "Current Reward"
                      }),
                      e.jsx(N, {
                        fontSize: j ? "18px" : "24px",
                        fontWeight: "600",
                        color: "#D53A94",
                        letterSpacing: "normal",
                        children: "0 PUSH"
                      })
                    ]
                  }) : e.jsxs(Ee, {
                    padding: j ? "0px" : "5px 15px 0 15px",
                    children: [
                      e.jsx(x, {
                        height: "12px",
                        width: j ? "100px" : "135px",
                        margin: "0 0 8px 0"
                      }),
                      e.jsx(x, {
                        height: "12px",
                        width: j ? "65px" : "100px}"
                      })
                    ]
                  })
                }),
                e.jsx(Wt, {
                  width: "10px",
                  height: "100%"
                }),
                e.jsx(E, {
                  margin: j ? "0px 6px 0 0 " : "0px 18px 0px 0px",
                  padding: j ? " 7px" : "10px",
                  children: a ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(Je, {
                        children: "Total Staked"
                      }),
                      e.jsxs(Yt, {
                        fontSize: j ? "18px" : "24px",
                        fontWeight: "600",
                        letterSpacing: "normal",
                        children: [
                          q(J(a == null ? void 0 : a.poolBalance)),
                          " ",
                          t == "UNI-V2" ? "UNI-V2" : "PUSH"
                        ]
                      })
                    ]
                  }) : e.jsxs(Ee, {
                    padding: j ? "0px" : "5px 15px 0 15px",
                    children: [
                      e.jsx(x, {
                        height: "12px",
                        width: j ? "100px" : "135px",
                        margin: "0 0 8px 0"
                      }),
                      e.jsx(x, {
                        height: "12px",
                        width: j ? "65px" : "100px}"
                      })
                    ]
                  })
                })
              ]
            }),
            e.jsx(f, {
              alignSelf: "end",
              margin: "12px 13px 24px 0px",
              color: "#575D73",
              letterSpacing: "normal",
              children: a ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx(pt, {
                    padding: "0px 5px 0px 0px",
                    children: "Current Epoch"
                  }),
                  e.jsx(pt, {
                    margin: "0 0 0 5px",
                    children: "100 / 100"
                  })
                ]
              }) : e.jsx(Ee, {
                padding: "6px 0px 0 15px",
                children: e.jsx(x, {
                  height: "17px",
                  width: "124px"
                })
              })
            }),
            e.jsx(Gt, {
              children: n ? e.jsxs(E, {
                children: [
                  e.jsxs(f, {
                    justifyContent: "space-between",
                    margin: j ? "0px 0px 12px 0px" : "0px 13px 12px 13px",
                    children: [
                      e.jsxs(Ae, {
                        children: [
                          "User Deposit",
                          e.jsx(Ie, {
                            children: e.jsx(Q, {
                              ToolTipTitle: "User Deposited",
                              ToolTipBody: `Amount of ${t} Token User Staked`,
                              children: e.jsx(ae, {
                                src: he,
                                alt: "Info-Logo",
                                width: "16px",
                                style: {
                                  cursor: "pointer"
                                }
                              })
                            })
                          })
                        ]
                      }),
                      e.jsxs(Ue, {
                        children: [
                          " ",
                          J(n == null ? void 0 : n.epochStakeNext),
                          " ",
                          t == "UNI-V2" ? "UNI-V2" : "PUSH"
                        ]
                      })
                    ]
                  }),
                  e.jsxs(f, {
                    justifyContent: "space-between",
                    margin: j ? "0px 0px 12px 0px" : "0px 13px 12px 13px",
                    children: [
                      e.jsxs(Ae, {
                        children: [
                          "Rewards Claimed",
                          e.jsx(Ie, {
                            children: e.jsx(Q, {
                              ToolTipTitle: "Rewards Claimed",
                              ToolTipBody: "Amount of Push Claimed by User",
                              children: e.jsx(ae, {
                                src: he,
                                alt: "Info-Logo",
                                width: "16px",
                                style: {
                                  cursor: "pointer"
                                }
                              })
                            })
                          })
                        ]
                      }),
                      e.jsxs(Ue, {
                        children: [
                          " ",
                          q(((n == null ? void 0 : n.totalAccumulatedReward) - (n == null ? void 0 : n.totalAvailableReward)).toFixed(2)),
                          " ",
                          "PUSH"
                        ]
                      })
                    ]
                  }),
                  e.jsxs(f, {
                    justifyContent: "space-between",
                    margin: j ? "0px 0px 12px 0px" : "0px 13px 12px 13px",
                    children: [
                      e.jsxs(Ae, {
                        children: [
                          "Current Epoch Reward",
                          e.jsx(Ie, {
                            children: e.jsx(Q, {
                              ToolTipTitle: "Current Epoch Reward",
                              ToolTipBody: "Displays the approximate latest reward amount for current epoch",
                              children: e.jsx(ae, {
                                src: he,
                                alt: "Info-Logo",
                                width: "16px",
                                style: {
                                  cursor: "pointer"
                                }
                              })
                            })
                          })
                        ]
                      }),
                      e.jsx(Ue, {
                        children: "0 PUSH"
                      })
                    ]
                  }),
                  e.jsxs(f, {
                    justifyContent: "space-between",
                    margin: j ? "0px 0px 12px 0px" : "0px 13px 12px 13px",
                    children: [
                      e.jsxs(Ae, {
                        children: [
                          "Available for Claiming",
                          e.jsx(Ie, {
                            children: e.jsx(Q, {
                              ToolTipTitle: "Available for Claiming",
                              ToolTipBody: "Amount of Push Token Available to claim",
                              children: e.jsx(ae, {
                                src: he,
                                alt: "Info-Logo",
                                width: "16px",
                                style: {
                                  cursor: "pointer"
                                }
                              })
                            })
                          })
                        ]
                      }),
                      e.jsxs(Ue, {
                        children: [
                          q(n == null ? void 0 : n.totalAvailableReward),
                          " PUSH"
                        ]
                      })
                    ]
                  })
                ]
              }) : e.jsxs(je, {
                padding: "16px 15px 16px 15px",
                width: "100%",
                maxWidth: " -webkit-fill-available",
                borderRadius: "5px",
                children: [
                  e.jsxs(f, {
                    justifyContent: "space-between",
                    margin: "0 0 23px 0",
                    children: [
                      e.jsx(x, {
                        height: "12px",
                        width: "164px"
                      }),
                      e.jsx(x, {
                        height: "12px",
                        width: "72px"
                      })
                    ]
                  }),
                  e.jsxs(f, {
                    justifyContent: "space-between",
                    margin: "0 0 23px 0",
                    children: [
                      e.jsx(x, {
                        height: "12px",
                        width: "164px"
                      }),
                      e.jsx(x, {
                        height: "12px",
                        width: "72px"
                      })
                    ]
                  }),
                  e.jsxs(f, {
                    justifyContent: "space-between",
                    margin: "0 0 23px 0",
                    children: [
                      e.jsx(x, {
                        height: "12px",
                        width: "164px"
                      }),
                      e.jsx(x, {
                        height: "12px",
                        width: "72px"
                      })
                    ]
                  }),
                  e.jsxs(f, {
                    justifyContent: "space-between",
                    children: [
                      e.jsx(x, {
                        height: "12px",
                        width: "164px"
                      }),
                      e.jsx(x, {
                        height: "12px",
                        width: "72px"
                      })
                    ]
                  })
                ]
              })
            })
          ]
        }),
        e.jsx(Jt, {
          padding: j ? "0px " : "0px 14px",
          margin: "24px 0px 0px 0px",
          children: n ? e.jsxs(e.Fragment, {
            children: [
              e.jsx(dt, {
                children: J(n == null ? void 0 : n.epochStakeNext) === "0" ? e.jsx(Q, {
                  error: true,
                  ToolTipTitle: "Nothing to Withdraw, so you cannot Migrate.",
                  ToolTipWidth: "16rem",
                  bottom: "-50px",
                  margin: "0 0 15px 0",
                  children: e.jsx(ye, {
                    border: "none",
                    cursor: "default",
                    background: k.disableButtonBg,
                    color: k.disabledButtonText,
                    children: e.jsx(xt, {
                      children: !Y && Z == null && e.jsxs(He, {
                        color: k.disabledButtonText,
                        weight: "400",
                        cursor: "default",
                        children: [
                          "Migrate to ",
                          t === "UNI-V2" ? "UNI-V2 " : "PUSH Fee",
                          " Pool"
                        ]
                      })
                    })
                  })
                }) : e.jsxs(Kt, {
                  onClick: ge,
                  children: [
                    e.jsx(Xt, {
                      style: {
                        width: `${B}%`
                      }
                    }),
                    e.jsxs(xt, {
                      children: [
                        !Y && Z == null && e.jsxs(He, {
                          color: "#FFF",
                          weight: "400",
                          cursor: "pointer",
                          children: [
                            "Migrate to ",
                            t === "UNI-V2" ? "UNI-V2 " : "PUSH Fee",
                            " Pool"
                          ]
                        }),
                        Y && Z != null && e.jsx(pe, {
                          type: de.SEAMLESS,
                          spinnerSize: 26,
                          spinnerColor: "#FFF",
                          title: Z,
                          titleColor: "#FFF"
                        })
                      ]
                    })
                  ]
                })
              }),
              e.jsxs(dt, {
                children: [
                  J(n == null ? void 0 : n.epochStakeNext) === "0" ? e.jsx(Q, {
                    error: true,
                    ToolTipTitle: K || "Nothing to unstake, Stake First",
                    ToolTipWidth: "16rem",
                    margin: "0 10px 0 0",
                    bottom: "-30px",
                    children: e.jsx(ye, {
                      border: "none",
                      cursor: "default",
                      background: k.disableButtonBg,
                      color: k.disabledButtonText,
                      children: M ? e.jsx(pe, {
                        type: de.SEAMLESS,
                        spinnerSize: 26,
                        spinnerColor: k.activeButtonText,
                        title: "Claiming",
                        titleColor: k.activeButtonText
                      }) : ` Unstake ${t}`
                    })
                  }) : e.jsx(ye, {
                    border: `1px solid ${k.activeButtonText}`,
                    background: "transparent",
                    color: k.activeButtonText,
                    cursor: "pointer",
                    margin: "0 10px 0 0",
                    onClick: H,
                    children: M ? e.jsx(pe, {
                      type: de.SEAMLESS,
                      spinnerSize: 26,
                      spinnerColor: k.activeButtonText,
                      title: "Unstaking",
                      titleColor: k.activeButtonText
                    }) : ` Unstake ${t}`
                  }),
                  (n == null ? void 0 : n.totalAvailableReward) === "0.00" ? e.jsx(Q, {
                    bottom: "-30px",
                    ToolTipTitle: "No Rewards to Claim",
                    error: true,
                    ToolTipWidth: "10rem",
                    children: e.jsx(ye, {
                      border: "none",
                      cursor: "default",
                      background: k.disableButtonBg,
                      color: k.disabledButtonText,
                      children: W ? e.jsx(pe, {
                        type: de.SEAMLESS,
                        spinnerSize: 26,
                        spinnerColor: k.activeButtonText,
                        title: "Claiming",
                        titleColor: k.activeButtonText
                      }) : " Claim Rewards"
                    })
                  }) : e.jsx(ye, {
                    border: `1px solid ${k.activeButtonText}`,
                    background: "transparent",
                    color: k.activeButtonText,
                    cursor: "pointer",
                    onClick: X,
                    children: W ? e.jsx(pe, {
                      type: de.SEAMLESS,
                      spinnerSize: 26,
                      spinnerColor: k.activeButtonText,
                      title: "Claiming",
                      titleColor: k.activeButtonText
                    }) : "Claim Rewards"
                  })
                ]
              })
            ]
          }) : e.jsxs(Ee, {
            width: "100%",
            children: [
              e.jsx(x, {
                height: "49px",
                width: "100%",
                margin: "0 0 11px 0"
              }),
              e.jsx(x, {
                height: "49px",
                width: "100%"
              })
            ]
          })
        })
      ]
    });
  }, Bt = s(Ge)`
  border: 1px solid ${(t) => t.theme.stakingBorder};
  border-radius: 24px;
  padding: 24px 19px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  // min-height: 587px;
  color: ${(t) => t.theme.stakingPrimaryText};
`, Ht = s(N)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  display: flex;
  align-items: center;
  color: ${(t) => t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 470px) {
    flex-direction: column;
  }
`, Ot = s(me)`
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #d53a94;
  margin-left: 10px;
  padding: 2px 6px;
  background: #f3d7fa;
  border-radius: 6px;
  height: 17px;
`, Je = s.p`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`, Wt = s.div`
  width: 1px;
  height: 100%;
  background: ${(t) => t.theme.stakingBorder};
`, Ae = s.div`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(t) => t.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`, Yt = s(N)`
  color: ${(t) => t.theme.stakingSecondaryText};
`, pt = s(Pt)`
  font-weight: 600;
  text-align: right;
  letter-spacing: normal;
  font-size: 16px;
  margin-left: 5px;
  line-height: 141%;
  color: ${(t) => t.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`, Ie = s(me)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`, _t = s(f)`
  max-height: 108px;
  min-height: 108px;
  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`, Ue = s(N)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${(t) => t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`, Gt = s(E)`
  min-height: 150px;
`, Jt = s(E)`
  // min-height:132px;
`, dt = s.div`
  display: flex;
  width: 100%;
  // margin:15px 0px 0px 0px;
`;
  s(st)`
  width: 100%;
  background: #d53a94;
  border: 1px solid #d53a94;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  line-height: 141%;
  flex-direction: row;
  letter-spacing: normal;
  color: #ffffff;
  cursor: pointer;
  & > div {
    display: block;
  }
`;
  const Kt = s(st)`
  width: 100%;
  background: #d53a94;
  border: 1px solid #d53a94;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  line-height: 141%;
  flex-direction: row;
  letter-spacing: normal;
  color: #ffffff;
  cursor: pointer;
  justify-content: flex-start;
  margin: 0px 0px 15px 0px;
  min-height: 49px;
  position: relative;

  &:after {
    background: transparent;
  }

  & > div {
    display: block;
  }

  &:hover {
    opacity: 1;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`, Xt = s.div`
  min-height: 37px;
  background-color: rgb(183, 46, 126);
  transition: width 0.5s ease 0s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`, xt = s.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #eee;
`, ye = s(st)`
  font-size: 16px;
  line-height: 19px;
  flex-direction: row;
  flex: 1;
  // width: 145px;
  height: 49px;
  padding: 12px;
  border-radius: 8px;
  & > div {
    display: block;
  }
  &:after {
    background: transparent;
  }

  &:hover {
    opacity: 1;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`, Ee = s(je)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`, bt = ({ logo: t, title: n, body: a, setActiveTab: c }) => {
    const o = Se(600);
    return e.jsxs(f, {
      style: {
        color: t === "announcement" ? "white" : "#333"
      },
      justifyContent: "stretch",
      padding: o ? "12px" : "16px",
      background: t === "announcement" ? "linear-gradient(90deg, #121315 -2.55%, #2A2A39 32.62%, #8E317A 68.34%, #121315 102.97%)" : "#FFF7DA",
      borderRadius: "16px",
      children: [
        e.jsx(ae, {
          width: t === "announcement" ? "60px" : "32px",
          height: t === "announcement" ? "60px" : "32px",
          src: jt(`svg/${t}.svg`),
          alt: "Announcement Logo"
        }),
        e.jsxs(E, {
          margin: t === "announcement" ? "0 0 0 16px" : "0 0 0 13px",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: t === "announcement" ? "4px" : "0px",
          children: [
            e.jsx(N, {
              color: "inherit",
              fontSize: o ? "20px" : "24px",
              textAlign: "left",
              fontWeight: 500,
              children: n
            }),
            e.jsxs(N, {
              color: "inherit",
              fontSize: o ? "12px" : "16px",
              textAlign: "left",
              fontWeight: 500,
              children: [
                a,
                " ",
                n.includes("New V2") && e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(Zt, {
                      onClick: () => c(1),
                      children: "here"
                    }),
                    " to migrate."
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }, Zt = s(Tt)`
  cursor: pointer;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;
  xe.coreContractChain;
  const qt = ({ setActiveTab: t }) => {
    const { account: n, provider: a } = Te(), [c, o] = i.useState(null), [r, m] = i.useState(null), [p, d] = i.useState(null), [h, y] = i.useState(null), [M, V] = i.useState(null), [W, L] = i.useState(null), [Y, $] = i.useState(null), [Z, z] = i.useState(null), [K, se] = i.useState(null), [ee, P] = i.useState(null), B = a == null ? void 0 : a.getSigner(n), A = i.useCallback(async () => {
      const F = await fe.getInstance().getPoolStats();
      L({
        ...F
      });
    }, [
      c,
      r,
      p,
      h,
      M
    ]), T = i.useCallback(async () => {
      const F = await fe.getInstance().getPUSHPoolStats();
      $({
        ...F
      });
    }, [
      c,
      r,
      p,
      h,
      M
    ]), k = i.useCallback(async (F) => {
      const te = await fe.getInstance().getLPPoolStats(F);
      z({
        ...te
      });
    }, [
      c,
      r,
      p,
      h,
      M
    ]), X = i.useCallback(async () => {
      const F = await fe.getInstance().getUserData(h);
      se({
        ...F
      });
    }, [
      h
    ]), H = i.useCallback(async () => {
      const F = await fe.getInstance().getUserData(p);
      P({
        ...F
      });
    }, [
      p
    ]);
    i.useEffect(() => {
      let F = new S(l.pushToken, C.pushToken, B), te = new S(l.staking, C.staking, B), j = new S(l.depYieldFarmPUSH, C.yieldFarming, B), v = new S(l.depYieldFarmLP, C.yieldFarming, B), I = new S(l.uniswapV2Router02, C.uniswapV2Router02, B);
      if (o(F), m(te), y(j), d(v), V(I), B && n) {
        var b = a.getSigner(n);
        let _ = new S(l.pushToken, C.pushToken, b), g = new S(l.staking, C.staking, b), w = new S(l.depYieldFarmPUSH, C.yieldFarming, b), u = new S(l.depYieldFarmLP, C.yieldFarming, b), R = new S(l.uniswapV2Router02, C.uniswapV2Router02, b);
        o(_), m(g), y(w), d(u), V(R);
      }
    }, [
      n
    ]), i.useEffect(() => {
      c != null && r != null && h != null && (fe.getInstance().init(n, c, r, h, p, M), A());
    }, [
      A
    ]), i.useEffect(() => {
      W && ge(W);
    }, [
      W
    ]);
    const ge = async (F) => {
      T(), k(F), X(), H();
    };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(bt, {
          logo: "WarningCircle",
          title: "This reward program (V1) has ended.",
          body: "To continue earning rewards please migrate to new pools.",
          setActiveTab: t
        }),
        e.jsxs(Qt, {
          children: [
            e.jsx(ct, {
              poolName: "PUSH",
              userData: K,
              PoolStats: Y,
              poolAddress: l.depYieldFarmPUSH,
              getUserData: X,
              getPoolStats: T,
              tokenAddress: l.pushToken,
              setActiveTab: t
            }),
            e.jsx(ct, {
              poolName: "UNI-V2",
              userData: ee,
              PoolStats: Z,
              poolAddress: l.depYieldFarmLP,
              getUserData: H,
              getPoolStats: k,
              tokenAddress: l.uniV2LPToken,
              setActiveTab: t
            })
          ]
        })
      ]
    });
  }, Qt = s(f)`
  @media (max-width: 1300px) {
    margin: auto;
    width: 75%;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
  }
`, en = ({ poolStats: t }) => {
    function n(c) {
      return c == null ? void 0 : c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const a = Se(600);
    return e.jsx(tn, {
      justifyContent: "stretch",
      children: t ? e.jsxs(e.Fragment, {
        children: [
          e.jsx(ht, {
            fontSize: a ? "16px" : "18px",
            textAlign: "left",
            fontWeight: 600,
            children: "Push Price"
          }),
          e.jsxs(f, {
            gap: "5px",
            justifyContent: "flex-end",
            children: [
              e.jsxs(ht, {
                fontSize: a ? "18px " : "24px",
                textAlign: "left",
                fontWeight: 600,
                children: [
                  "$",
                  n(t == null ? void 0 : t.pushPrice.toFixed(2))
                ]
              }),
              e.jsx(ae, {
                width: "25px",
                height: a ? "20px" : "27px",
                src: jt("svg/uniswapLogo.svg"),
                alt: "Uniswap Logo"
              })
            ]
          })
        ]
      }) : e.jsxs(nn, {
        children: [
          e.jsx(x, {
            height: "12px",
            width: "135px",
            margin: "10px 0 10px 0"
          }),
          e.jsx(x, {
            height: "12px",
            width: "135px",
            margin: "10px 0 10px 0"
          })
        ]
      })
    });
  }, tn = s(f)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;

  border: 1px solid #bac4d6;
  border-color: ${(t) => t.theme.default.borderColor};
  border-radius: 14px;

  @media (max-width: 600px) {
    padding: 7px 14px;
  }
`, ht = s(N)`
  color: ${(t) => t.theme.stakingPrimaryText};
`, nn = s(je)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
  flex-direction: row;
  justify-content: inherit;
  flex: 1;
`, sn = ({ getLpPoolStats: t, poolStats: n, setPoolStats: a }) => {
    const [c, o] = Fe.useState(""), [r, m] = Fe.useState(), p = () => {
      const h = n.epochEndTime, y = (/* @__PURE__ */ new Date()).getTime() + h * 1e3;
      m(y);
    };
    Fe.useEffect(() => {
      n && p();
    }, [
      n
    ]);
    const d = () => {
      if (n == null ? void 0 : n.epochEndTimestamp) {
        n.epochEndTimestamp.toNumber();
        const h = (/* @__PURE__ */ new Date()).getTime(), y = r - h;
        y < 0 && (a(null), t());
        const M = Math.floor(y / (1e3 * 60 * 60 * 24)), V = Math.floor(y % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)), W = Math.floor(y % (1e3 * 60 * 60) / (1e3 * 60)), L = Math.floor(y % (1e3 * 60) / 1e3);
        o(`${M}D ${V}H ${W}M ${L}S`);
      }
    };
    return Fe.useEffect(() => {
      const h = setTimeout(() => {
        d();
      }, 1e3);
      return () => clearTimeout(h);
    }), e.jsxs(on, {
      children: [
        e.jsxs(Xe, {
          alignItems: "baseline",
          justifyContent: "center",
          background: "linear-gradient(0deg, #7ADDB3, #7ADDB3), #FFFFFF",
          children: [
            e.jsx(Ze, {
              background: "radial-gradient(70% 90% at 40% 16.25%, #7CDCB4 2.6%, #7ADDB3 53.65%, #E888F8 85.42%, #F99DEA 100%)"
            }),
            n ? e.jsx(e.Fragment, {
              children: e.jsxs(et, {
                children: [
                  e.jsx(qe, {
                    children: "Total Value Locked"
                  }),
                  e.jsx(Qe, {
                    children: `$ ${q(n == null ? void 0 : n.totalValueLocked.toFixed(2))}`
                  })
                ]
              })
            }) : e.jsx(Ke, {})
          ]
        }),
        e.jsxs(Xe, {
          alignItems: "baseline",
          justifyContent: "center",
          background: "#F58DF8",
          children: [
            e.jsx(Ze, {
              background: "radial-gradient(70% 90% at 40% 16.25%, #F58DF8 2.6%, #F47EF8 53.65%, #A17DEF 85.42%, #AE68F4 100%)"
            }),
            n ? e.jsx(e.Fragment, {
              children: e.jsxs(et, {
                children: [
                  e.jsx(qe, {
                    children: "Push Rewards Given"
                  }),
                  e.jsxs(nt, {
                    justifyContent: "end",
                    children: [
                      e.jsx(Qe, {
                        children: q(Math.min(J(n == null ? void 0 : n.pushRewardsDistributed), J(n == null ? void 0 : n.totalDistributedAmount)))
                      }),
                      e.jsxs(me, {
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "141%",
                        children: [
                          "out of ",
                          q(J(n == null ? void 0 : n.totalDistributedAmount))
                        ]
                      })
                    ]
                  })
                ]
              })
            }) : e.jsx(Ke, {})
          ]
        }),
        e.jsxs(Xe, {
          alignItems: "baseline",
          justifyContent: "center",
          background: "#A17DEF",
          children: [
            e.jsx(Ze, {
              background: "radial-gradient(70% 90% at 40% 16.25%, #A17DEF 2.6%, #9770ED 53.65%, #DF7EEF 85.42%, #F488E3 100%)"
            }),
            c ? e.jsx(e.Fragment, {
              children: e.jsxs(et, {
                children: [
                  e.jsx(qe, {
                    children: "Time Left"
                  }),
                  e.jsxs(nt, {
                    justifyContent: "end",
                    children: [
                      e.jsx(Qe, {
                        children: c
                      }),
                      e.jsx(me, {
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "141%",
                        children: "until next epoch"
                      })
                    ]
                  })
                ]
              })
            }) : e.jsx(Ke, {})
          ]
        })
      ]
    });
  }, Ke = () => {
    const t = Se(1300);
    return e.jsxs(an, {
      padding: "21px 15px",
      children: [
        e.jsx(x, {
          height: "12px",
          width: "135px",
          margin: "0 0 10px 0",
          background: "linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"
        }),
        e.jsx(x, {
          height: "26px;",
          width: t ? "175px" : "189px",
          margin: "0 0 10px 0",
          background: "linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"
        }),
        e.jsx(x, {
          height: "12px",
          width: "135px",
          margin: "0 0 10px 0",
          background: "linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)"
        })
      ]
    });
  }, on = s(f)`
  column-gap: 12px;

  @media (max-width: 992px) {
    flex-direction: column;
    row-gap: 12px;
  }
`, Xe = s(E)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`, Ze = s(E)`
  position: absolute;
  width: 170px;
  height: 170px;
  right: 5px;
  top: -35px;
  border-radius: 50%;

  box-shadow: 0px 30px 50px rgba(240, 86, 254, 0.5);
  filter: blur(2.5px);
`, qe = s(me)`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 141%;

  @media (max-width: 600px) {
    font-size: 16px;
  }

  @media (min-width: 992px) and (max-width: 1150px) {
    font-size: 14px;
  }

  @media (min-width: 1150px) and (max-width: 1300px) {
    font-size: 16px;
  }
`, Qe = s(me)`
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  line-height: 141%;

  @media (max-width: 992px) {
    font-size: 24px;
  }

  @media (min-width: 992px) and (max-width: 1150px) {
    font-size: 18px;
  }

  @media (min-width: 1150px) and (max-width: 1300px) {
    font-size: 24px;
  }
`, nt = s(E)`
  align-items: flex-start;
`, et = s(nt)`
  padding: 20px 10px 20px 15px;
  // gap: 8px;
  justify-content: center;
`, an = s(je)`
  // width:150px;
  z-index: 1;
  align-items: baseline;
  justify-content: center;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`, yt = ({ onClose: t, InnerComponentProps: n, toastObject: a }) => {
    const { title: c, getUserData: o, getPoolStats: r, setUnstakeErrorMessage: m, setWithdrawErrorMessage: p } = n, { account: d, provider: h, isWalletConnected: y, connect: M } = Te(), [V, W] = i.useState(0), [L, Y] = i.useState(0), [$, Z] = i.useState(false), [z, K] = i.useState(false), [se, ee] = i.useState(false), [P, B] = i.useState(null), { handleConnectWalletAndEnableProfile: A } = i.useContext(Mt), [T, k] = i.useState(0), X = () => {
      m(null), p(null), t();
    }, H = _e(), ge = i.useRef(null);
    St(ge, () => X());
    const F = async () => {
      var g = h.getSigner(d);
      const w = c === "Uni-V2" ? l.uniV2LPToken : l.pushToken, u = new S(w, C.uniV2LpToken, g);
      let R = It(await u.balanceOf(d));
      W(parseInt(R.toString().replace(/\D/, "")) || 0);
    }, te = async () => {
      K(true);
      var g = h.getSigner(d);
      let w;
      c === "Uni-V2" ? w = await new S(l.uniV2LPToken, C.uniV2LpToken, g).allowance(d, l.stakingV2) : w = await new S(l.pushToken, C.uniV2LpToken, g).allowance(d, l.pushCoreV2), Y(J(w)), K(false);
    };
    i.useEffect(() => {
      F(), te();
    }, []);
    const j = async () => {
      if (!y) {
        M();
        return;
      }
      if ($ || z) return;
      K(true);
      var g = h.getSigner(d);
      let w;
      const u = vt(T.toString(), 18);
      c === "Uni-V2" ? w = new S(l.uniV2LPToken, C.uniV2LpToken, g).approve(l.stakingV2, u) : w = new S(l.pushToken, C.uniV2LpToken, g).approve(l.pushCoreV2, u), w.then(async (R) => {
        a.showLoaderToast({
          loaderMessage: "Waiting for Confirmation..."
        });
        try {
          await h.waitForTransaction(R.hash), a.showMessageToast({
            toastTitle: "Success",
            toastMessage: `Successfully approved ${c} Tokens!`,
            toastType: "SUCCESS",
            getToastIcon: (G) => e.jsx(ce, {
              size: G,
              color: "green"
            })
          }), K(false), Z(true);
        } catch (G) {
          console.error("Error", G), a.showMessageToast({
            toastTitle: "Error",
            toastMessage: "User denied message signature.",
            toastType: "ERROR",
            getToastIcon: (O) => e.jsx(D, {
              size: O,
              color: "red"
            })
          }), K(false);
        }
      }).catch((R) => {
        console.error("Error", R), a.showMessageToast({
          toastTitle: "Error",
          toastMessage: "User denied message signature",
          toastType: "ERROR",
          getToastIcon: (G) => e.jsx(D, {
            size: G,
            color: "red"
          })
        }), K(false);
      });
    }, v = async () => {
      if (!y) {
        M();
        return;
      }
      if (se || !$) return;
      if (ee(true), T == 0) {
        a.showMessageToast({
          toastTitle: "Error",
          toastMessage: `You need to deposit atleast 1 ${c} token `,
          toastType: "ERROR",
          getToastIcon: (u) => e.jsx(D, {
            size: u,
            color: "red"
          })
        }), ee(false);
        return;
      }
      var g = h.getSigner(d);
      let w;
      c === "Uni-V2" ? w = new S(l.stakingV2, C.stakingV2, g).deposit(l.uniV2LPToken, U.from(T).mul(U.from(10).pow(18))) : w = new S(l.pushCoreV2, C.pushCoreV2, g).stake(U.from(T).mul(U.from(10).pow(18))), w.then(async (u) => {
        a.showLoaderToast({
          loaderMessage: "Waiting for Confirmation..."
        });
        try {
          await h.waitForTransaction(u.hash), a.showMessageToast({
            toastTitle: "Success",
            toastMessage: "Transaction Completed!",
            toastType: "SUCCESS",
            getToastIcon: (R) => e.jsx(ce, {
              size: R,
              color: "green"
            })
          }), r(), o(), ee(false), X();
        } catch (R) {
          console.error("Error", R), a.showMessageToast({
            toastTitle: "Error",
            toastMessage: `Transaction Failed! (" +${R.name}+ ")`,
            toastType: "ERROR",
            getToastIcon: (G) => e.jsx(D, {
              size: G,
              color: "red"
            })
          }), ee(false);
        }
      }).catch((u) => {
        console.error("Error in depositing", u), u.reason = u.reason.slice(u.reason.indexOf("::") + 1), a.showMessageToast({
          toastTitle: "Error",
          toastMessage: `Transaction Cancelled! ${u.reason}`,
          toastType: "ERROR",
          getToastIcon: (R) => e.jsx(D, {
            size: R,
            color: "red"
          })
        }), ee(false);
      });
    }, I = (g) => {
      g.preventDefault(), k(parseInt(g.target.value.replace(/\D/, "")) || 0), L >= parseInt(g.target.value.replace(/\D/, "")) ? Z(true) : Z(false);
    }, b = (g) => {
      k(parseInt(g.toString().replace(/\D/, "")) || 0);
    }, _ = Se(600);
    return e.jsxs(rn, {
      children: [
        e.jsxs(f, {
          justifyContent: "space-between",
          children: [
            e.jsx(ln, {
              children: c === "Uni-V2" ? "Uniswap V2 Staking Pool" : "Push Fee Staking Pool"
            }),
            e.jsx(ot, {
              onClick: () => X(),
              style: {
                cursor: "pointer"
              }
            })
          ]
        }),
        e.jsxs(E, {
          children: [
            e.jsx(Rt, {
              weight: "500",
              size: "14px",
              self: "baseline",
              color: H.stakingSecondaryText,
              children: "You are Staking"
            }),
            e.jsxs(f, {
              width: "-webkit-fill-available",
              background: H.default.bg,
              height: "60px",
              padding: _ ? "8px" : "14px",
              borderRadius: "12px",
              border: `1px solid ${H.modalBorderColor}`,
              children: [
                e.jsx(cn, {
                  placeholder: "Enter Amount",
                  flex: "2",
                  radius: "4px",
                  size: "32px",
                  height: "32px",
                  self: "auto",
                  bg: "#FFF",
                  color: H.stakingSecondaryText,
                  value: T,
                  onChange: (g) => {
                    g.preventDefault(), I(g);
                  },
                  autoFocus: true
                }),
                e.jsxs(pn, {
                  onClick: () => b(V),
                  children: [
                    "Max: ",
                    V
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs(f, {
          margin: "20px 0",
          gap: "12px",
          children: [
            e.jsxs(ie, {
              variant: "primary",
              size: "medium",
              onClick: j,
              disabled: !!$,
              children: [
                !$ && !z && e.jsxs(He, {
                  color: "#FFFFFF",
                  weight: "400",
                  cursor: "pointer",
                  children: [
                    "Approve ",
                    c
                  ]
                }),
                z && !$ && e.jsx(pe, {
                  type: de.SEAMLESS,
                  spinnerSize: 26,
                  spinnerColor: "#fff",
                  title: "Approving",
                  titleColor: "#FFF"
                }),
                $ && e.jsx(He, {
                  color: H.emptyButtonText,
                  weight: "600",
                  cursor: "default",
                  children: "Approved"
                })
              ]
            }),
            e.jsxs(ie, {
              variant: "outline",
              size: "medium",
              disabled: !!(!$ || se),
              onClick: v,
              children: [
                !se && "Deposit",
                se && e.jsx(pe, {
                  type: de.SEAMLESS,
                  spinnerSize: 26,
                  spinnerColor: "#FFFFFF",
                  title: "Depositing",
                  titleColor: "#FFF"
                })
              ]
            })
          ]
        })
      ]
    });
  }, rn = s.div`
  padding: 16px 20px;
  width: 340px;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  @media (max-width: 500px) {
    width: 270px;
    padding: 16px 15px;
  }
`, ln = s(N)`
  font-size: 16px;
  letter-spacing: normal;
  color: ${(t) => t.theme.stakingPrimaryText};
`, cn = s(Ft)`
  background: transparent;
  width: 100%;
`, pn = s.p`
  font-size: 14px;
  text-align: right;
  text-decoration-line: underline;
  color: #657795;
  margin: 0px;
  cursor: pointer;
`, dn = ({ lpPoolStats: t, userDataLP: n, getLpPoolStats: a, getUserDataLP: c }) => {
    const { account: o, provider: r } = Te(), [m, p] = i.useState(false), [d, h] = i.useState(false), [y, M] = i.useState(null), [V, W] = i.useState(null), L = Re(), Y = _e(), $ = async () => {
      if (m) return;
      p(true);
      const B = J(n.epochStakeNext);
      if (B == 0) {
        W("Nothing to unstake. You need to stake first"), p(false);
        return;
      }
      var A = r.getSigner(o);
      let T = new S(l.stakingV2, C.stakingV2, A);
      await T.balanceOf(o, l.uniV2LPToken), T.withdraw(l.uniV2LPToken, U.from(B).mul(U.from(10).pow(18))).then(async (X) => {
        L.showLoaderToast({
          loaderMessage: "Waiting for Confirmation..."
        });
        try {
          await r.waitForTransaction(X.hash), L.showMessageToast({
            toastTitle: "Success",
            toastMessage: "Transaction Completed!",
            toastType: "SUCCESS",
            getToastIcon: (H) => e.jsx(ce, {
              size: H,
              color: "green"
            })
          }), p(false), a(), c();
        } catch (H) {
          console.error("Error", H), L.showMessageToast({
            toastTitle: "Error",
            toastMessage: `Transaction Failed! (" +${H.name}+ ")`,
            toastType: "ERROR",
            getToastIcon: (ge) => e.jsx(D, {
              size: ge,
              color: "red"
            })
          }), p(false);
        }
      }).catch((X) => {
        L.showMessageToast({
          toastTitle: "Error",
          toastMessage: "Transaction Cancelled!",
          toastType: "ERROR",
          getToastIcon: (H) => e.jsx(D, {
            size: H,
            color: "red"
          })
        }), p(false);
      });
    }, Z = async () => {
      if (d) return;
      if ((n == null ? void 0 : n.totalAvailableReward) == 0) {
        M("No Rewards to Claim!");
        return;
      }
      if (console.debug("Lp POOL stats", t), !t.currentEpochLP || t.currentEpochLP == 1) {
        L.showMessageToast({
          toastTitle: "Error",
          toastMessage: "Harvest unlocks from Epoch 2!)",
          toastType: "ERROR",
          getToastIcon: (k) => e.jsx(D, {
            size: k,
            color: "red"
          })
        });
        return;
      }
      h(true);
      var B = r.getSigner(o);
      new S(l.yieldFarmLP, C.yieldFarming, B).massHarvest().then(async (k) => {
        L.showLoaderToast({
          loaderMessage: "Waiting for Confirmation..."
        });
        try {
          await r.waitForTransaction(k.hash), L.showMessageToast({
            toastTitle: "Success",
            toastMessage: "Transaction Completed!",
            toastType: "SUCCESS",
            getToastIcon: (X) => e.jsx(ce, {
              size: X,
              color: "green"
            })
          }), c(), h(false);
        } catch (X) {
          L.showMessageToast({
            toastTitle: "Error",
            toastMessage: `Transaction Failed! (" +${X.name}+ ")`,
            toastType: "ERROR",
            getToastIcon: (H) => e.jsx(D, {
              size: H,
              color: "red"
            })
          }), h(false);
        }
      }).catch((k) => {
        L.showMessageToast({
          toastTitle: "Error",
          toastMessage: "Transaction Cancelled!",
          toastType: "ERROR",
          getToastIcon: (X) => e.jsx(D, {
            size: X,
            color: "red"
          })
        }), h(false);
      });
    };
    i.useEffect(() => {
      M(null), W(null);
    }, [
      o
    ]);
    const z = () => {
      (t == null ? void 0 : t.currentEpochLP.toNumber()) + 1 <= (t == null ? void 0 : t.totalEpochLP.toNumber()) ? K() : L.showMessageToast({
        toastTitle: "Error",
        toastMessage: "Epochs have ended!",
        toastType: "ERROR",
        getToastIcon: (B) => e.jsx(D, {
          size: B,
          color: "red"
        })
      });
    }, { showModal: K, ModalComponent: se } = Oe(), ee = Re(), P = Se(600);
    return e.jsxs(xn, {
      children: [
        e.jsx(se, {
          InnerComponent: yt,
          InnerComponentProps: {
            title: "Uni-V2",
            getUserData: c,
            getPoolStats: a,
            setUnstakeErrorMessage: W,
            setWithdrawErrorMessage: M
          },
          toastObject: ee,
          modalPosition: We.ON_PARENT
        }),
        e.jsx(E, {
          margin: "0px 0px 20px 0px",
          children: t ? e.jsxs(e.Fragment, {
            children: [
              e.jsx(hn, {
                children: "Uniswap V2 LP Staking Pool"
              }),
              e.jsxs(tt, {
                children: [
                  "Current APR",
                  " ",
                  e.jsxs(me, {
                    color: "#D53A94",
                    fontWeight: "600",
                    children: [
                      ">",
                      q(t == null ? void 0 : t.stakingAPR),
                      "%"
                    ]
                  })
                ]
              })
            ]
          }) : e.jsxs(Pe, {
            padding: "5px 15px 0 15px",
            children: [
              e.jsx(x, {
                height: "12px",
                width: "234px",
                margin: "0 0 10px 0"
              }),
              e.jsx(x, {
                height: "12px",
                width: "112px"
              })
            ]
          })
        }),
        e.jsxs(E, {
          flex: "5",
          children: [
            e.jsxs(gn, {
              border: `1px solid ${Y.stakingBorder}`,
              borderRadius: "16px",
              children: [
                e.jsx(E, {
                  padding: P ? " 1px" : "8px",
                  children: t ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(tt, {
                        children: "Current Reward"
                      }),
                      e.jsxs(N, {
                        fontSize: P ? "18px" : "24px",
                        fontWeight: "600",
                        color: "#D53A94",
                        letterSpacing: "normal",
                        children: [
                          q(J(t == null ? void 0 : t.rewardForCurrentEpoch)),
                          " PUSH"
                        ]
                      })
                    ]
                  }) : e.jsxs(Pe, {
                    padding: P ? "0px" : "5px 15px 0 15px",
                    children: [
                      e.jsx(x, {
                        height: "12px",
                        width: P ? "100px" : "135px",
                        margin: "0 0 8px 0"
                      }),
                      e.jsx(x, {
                        height: "12px",
                        width: P ? "65px" : "100px}"
                      })
                    ]
                  })
                }),
                e.jsx(un, {
                  width: "10px",
                  height: "100%"
                }),
                e.jsx(E, {
                  padding: P ? " 1px" : "8px",
                  children: t ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(tt, {
                        children: "Total Staked"
                      }),
                      e.jsxs(mn, {
                        fontSize: P ? "18px" : "24px",
                        fontWeight: "600",
                        letterSpacing: "normal",
                        children: [
                          q(J(t == null ? void 0 : t.poolBalance)),
                          " UNI-V2"
                        ]
                      })
                    ]
                  }) : e.jsxs(Pe, {
                    padding: P ? "0px" : "5px 15px 0 15px",
                    children: [
                      e.jsx(x, {
                        height: "12px",
                        width: P ? "100px" : "135px",
                        margin: "0 0 8px 0"
                      }),
                      e.jsx(x, {
                        height: "12px",
                        width: P ? "65px" : "100px}"
                      })
                    ]
                  })
                })
              ]
            }),
            e.jsx(f, {
              alignSelf: "end",
              margin: "12px 13px 24px 0px",
              color: "#575D73",
              letterSpacing: "normal",
              children: t ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx(gt, {
                    children: "Current Epoch"
                  }),
                  e.jsxs(gt, {
                    children: [
                      Math.min(t == null ? void 0 : t.currentEpochLP, t == null ? void 0 : t.totalEpochLP).toString(),
                      "/",
                      t == null ? void 0 : t.totalEpochLP.toString()
                    ]
                  })
                ]
              }) : e.jsx(Pe, {
                padding: "5px 0px 0 15px",
                children: e.jsx(x, {
                  height: "12px",
                  width: "124px"
                })
              })
            }),
            n ? e.jsxs(E, {
              children: [
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: P ? "0px 0px 12px 0px" : "0px 13px 12px 13px",
                  children: [
                    e.jsxs(Le, {
                      children: [
                        "User Deposit",
                        e.jsx(De, {
                          children: e.jsx(Q, {
                            ToolTipTitle: "User Deposited",
                            ToolTipBody: "Amount of PUSH Token User Staked",
                            children: e.jsx(ae, {
                              src: he,
                              alt: "Info-Logo",
                              width: "16px",
                              style: {
                                cursor: "pointer"
                              }
                            })
                          })
                        })
                      ]
                    }),
                    e.jsxs(Ne, {
                      children: [
                        J(n == null ? void 0 : n.epochStakeNext),
                        " UNI-V2"
                      ]
                    })
                  ]
                }),
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: P ? "0px 0px 12px 0px" : "0px 13px 12px 13px",
                  children: [
                    e.jsxs(Le, {
                      children: [
                        "Rewards Claimed",
                        e.jsx(De, {
                          children: e.jsx(Q, {
                            ToolTipTitle: "Rewards Claimed",
                            ToolTipBody: "Amount of Push Claimed by User",
                            children: e.jsx(ae, {
                              src: he,
                              alt: "Info-Logo",
                              width: "16px",
                              style: {
                                cursor: "pointer"
                              }
                            })
                          })
                        })
                      ]
                    }),
                    e.jsxs(Ne, {
                      children: [
                        " ",
                        q(((n == null ? void 0 : n.totalAccumulatedReward) - (n == null ? void 0 : n.totalAvailableReward)).toFixed(2)),
                        " ",
                        "PUSH"
                      ]
                    })
                  ]
                }),
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: P ? "0px 0px 12px 0px" : "0px 13px 12px 13px",
                  children: [
                    e.jsxs(Le, {
                      children: [
                        "Current Epoch Reward",
                        e.jsx(De, {
                          children: e.jsx(Q, {
                            ToolTipTitle: "Current Epoch Reward",
                            ToolTipBody: "Displays the approximate latest reward amount for current epoch",
                            children: e.jsx(ae, {
                              src: he,
                              alt: "Info-Logo",
                              width: "16px",
                              style: {
                                cursor: "pointer"
                              }
                            })
                          })
                        })
                      ]
                    }),
                    e.jsxs(Ne, {
                      children: [
                        " ",
                        q(n == null ? void 0 : n.potentialUserReward),
                        " PUSH"
                      ]
                    })
                  ]
                }),
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: P ? "0px 0px 12px 0px" : "0px 13px 12px 13px",
                  children: [
                    e.jsxs(Le, {
                      children: [
                        "Available for Claiming",
                        e.jsx(De, {
                          children: e.jsx(Q, {
                            ToolTipTitle: "Available for Claiming",
                            ToolTipBody: "Amount of Push Token Available to claim",
                            children: e.jsx(ae, {
                              src: he,
                              alt: "Info-Logo",
                              width: "16px",
                              style: {
                                cursor: "pointer"
                              }
                            })
                          })
                        })
                      ]
                    }),
                    e.jsxs(Ne, {
                      children: [
                        " ",
                        q(n == null ? void 0 : n.totalAvailableReward),
                        " PUSH"
                      ]
                    })
                  ]
                })
              ]
            }) : e.jsxs(je, {
              padding: "0 15px 15px 15px",
              width: "100%",
              maxWidth: " -webkit-fill-available",
              borderRadius: "5px",
              children: [
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: "0 0 23px 0",
                  children: [
                    e.jsx(x, {
                      height: "12px",
                      width: "164px"
                    }),
                    e.jsx(x, {
                      height: "12px",
                      width: "72px"
                    })
                  ]
                }),
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: "0 0 23px 0",
                  children: [
                    e.jsx(x, {
                      height: "12px",
                      width: "164px"
                    }),
                    e.jsx(x, {
                      height: "12px",
                      width: "72px"
                    })
                  ]
                }),
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: "0 0 23px 0",
                  children: [
                    e.jsx(x, {
                      height: "12px",
                      width: "164px"
                    }),
                    e.jsx(x, {
                      height: "12px",
                      width: "72px"
                    })
                  ]
                }),
                e.jsxs(f, {
                  justifyContent: "space-between",
                  children: [
                    e.jsx(x, {
                      height: "12px",
                      width: "164px"
                    }),
                    e.jsx(x, {
                      height: "12px",
                      width: "72px"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsx(E, {
          padding: P ? "0px " : "0px 14px",
          margin: "24px 0px 24px 0px",
          children: n ? e.jsxs(e.Fragment, {
            children: [
              e.jsx(f, {
                children: e.jsx(ie, {
                  variant: "primary",
                  size: "medium",
                  block: true,
                  onClick: () => {
                    z();
                  },
                  children: "Stake $UNI-V2 LP Tokens"
                })
              }),
              e.jsxs(wn, {
                children: [
                  e.jsx(Ye, {
                    width: "50%",
                    children: J(n == null ? void 0 : n.epochStakeNext) === "0" ? e.jsx(Q, {
                      error: true,
                      ToolTipTitle: "Nothing to unstake! Stake First.",
                      ToolTipWidth: "16rem",
                      bottom: "-30px",
                      children: e.jsx(ie, {
                        disabled: true,
                        size: "medium",
                        block: true,
                        children: m ? e.jsx(pe, {
                          type: de.SEAMLESS,
                          spinnerSize: 26,
                          spinnerColor: "#D53A94"
                        }) : "Unstake $UNI-V2"
                      })
                    }) : e.jsx(ie, {
                      size: "medium",
                      variant: "outline",
                      block: true,
                      onClick: $,
                      children: m ? e.jsx(pe, {
                        type: de.SEAMLESS,
                        spinnerSize: 26,
                        spinnerColor: Y.activeButtonText,
                        title: "Unstaking",
                        titleColor: Y.activeButtonText
                      }) : "Unstake $UNI-V2"
                    })
                  }),
                  e.jsx(Ye, {
                    width: "50%",
                    children: (n == null ? void 0 : n.totalAvailableReward) === "0.00" ? e.jsx(Q, {
                      bottom: "-30px",
                      left: "40px",
                      ToolTipTitle: "No Rewards to Claim!",
                      error: true,
                      ToolTipWidth: "10rem",
                      children: e.jsx(ie, {
                        disabled: true,
                        size: "medium",
                        block: true,
                        children: d ? e.jsx(pe, {
                          type: de.SEAMLESS,
                          spinnerSize: 26,
                          spinnerColor: "#FFFFF"
                        }) : "Claim Rewards"
                      })
                    }) : e.jsx(ie, {
                      variant: "outline",
                      size: "medium",
                      block: true,
                      onClick: () => Z(),
                      children: d ? e.jsx(pe, {
                        type: de.SEAMLESS,
                        spinnerSize: 26,
                        spinnerColor: Y.activeButtonText,
                        title: "Claiming",
                        titleColor: Y.activeButtonText
                      }) : "Claim Rewards"
                    })
                  })
                ]
              })
            ]
          }) : e.jsxs(Pe, {
            width: "100%",
            children: [
              e.jsx(x, {
                height: "49px",
                width: "100%",
                margin: "0 0 8px 0"
              }),
              e.jsx(x, {
                height: "49px",
                width: "100%"
              })
            ]
          })
        })
      ]
    });
  }, xn = s(Ge)`
  border: 1px solid ${(t) => t.theme.stakingBorder};
  border-radius: 24px;
  padding: 20px;

  font-family: 'FK Grotesk Neu';

  margin: 10px 0 10px 10px;

  font-style: normal;
  font-weight: 500;
  min-height: 587px;
  color: ${(t) => t.theme.stakingPrimaryText};
  width: -webkit-fill-available;
  @media (max-width: 1300px) {
    margin: 0 0 10px 0;
  }
  @media (max-width: 600px) {
    padding: 16px;
  }
`, hn = s(N)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${(t) => t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`, tt = s.div`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  // color: #333333;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`, gn = s(f)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`, un = s.div`
  width: 1px;
  height: 100%;
  background: ${(t) => t.theme.stakingBorder};
`, Le = s.div`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  // color: rgba(87, 93, 115, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(t) => t.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`, mn = s(N)`
  color: ${(t) => t.theme.stakingSecondaryText};
`, gt = s(Ct)`
  font-weight: 600;
  text-align: right;
  letter-spacing: normal;
  font-size: 16px;
  line-height: 141%;
  margin-right: 5px;
  color: ${(t) => t.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`, De = s(me)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`, Ne = s(N)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${(t) => t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`, wn = s.div`
  display: flex;
  gap: 12px;
  margin: 15px 0px 0px 0px;
  width: 100%;
`, Pe = s(je)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`, fn = (t) => i.createElement("svg", {
    width: 29,
    height: 28,
    viewBox: "0 0 29 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  }, i.createElement("path", {
    d: "M26.1673 14.0002C26.1673 20.4431 20.9436 25.6668 14.5007 25.6668C8.05773 25.6668 2.83398 20.4431 2.83398 14.0002C2.83398 7.55725 8.05773 2.3335 14.5007 2.3335C20.9436 2.3335 26.1673 7.55725 26.1673 14.0002Z",
    fill: "#30CC8B"
  }), i.createElement("path", {
    d: "M20.6751 8.5083L12.7593 16.4335L9.49146 13.175L7.8418 14.8246L12.7616 19.7328L22.3254 10.158L20.6751 8.5083Z",
    fill: "white"
  })), Tn = ({ onClose: t, InnerComponentProps: n }) => {
    const { currentTransactionNo: a, totalTransactionNo: c, transactionSteps: o, transactionText: r, setCurrentTransactionNo: m, setTotalTransactionNo: p, setTransactionSteps: d, claimRewards: h, unstakeTokensPaginated: y } = n, M = () => {
      d(0), t();
    }, V = async () => {
      d(0), p(0), m(0), (r == null ? void 0 : r.includes("Unstaking")) ? y() : h();
    };
    return e.jsx(jn, {
      children: c ? e.jsxs(e.Fragment, {
        children: [
          e.jsx(f, {
            justifyContent: "end",
            children: e.jsx(ot, {
              onClick: () => M(),
              style: {
                cursor: "pointer"
              }
            })
          }),
          o === 0 && e.jsxs(e.Fragment, {
            children: [
              e.jsx(it, {
                size: 42,
                color: le.COLORS.PRIMARY_PINK,
                type: at.PROCESSING
              }),
              e.jsxs(E, {
                gap: "24px",
                margin: "16px 0 0 0",
                children: [
                  e.jsxs(E, {
                    children: [
                      e.jsxs(N, {
                        fontSize: "28px",
                        fontWeight: "500",
                        letterSpacing: "normal",
                        children: [
                          "Please sign transaction ",
                          a,
                          "/",
                          c
                        ]
                      }),
                      e.jsx(N, {
                        fontSize: "18px",
                        fontWeight: "400",
                        color: "#657795",
                        children: "Processing your request"
                      })
                    ]
                  }),
                  e.jsx(N, {
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#657795",
                    children: r
                  }),
                  e.jsx(E, {
                    padding: "16px",
                    children: e.jsx(N, {
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#D53A94",
                      children: "Confirm the request in your wallet"
                    })
                  })
                ]
              })
            ]
          }),
          o === 1 && e.jsxs(E, {
            gap: "24px",
            children: [
              e.jsx(E, {
                gap: "9px",
                children: e.jsx(N, {
                  fontSize: "28px",
                  fontWeight: "500",
                  letterSpacing: "normal",
                  children: "Transaction Error"
                })
              }),
              e.jsx(E, {
                children: e.jsx(ie, {
                  variant: "primary",
                  size: "medium",
                  onClick: V,
                  children: "Retry"
                })
              })
            ]
          }),
          o === 2 && e.jsxs(E, {
            gap: "24px",
            children: [
              e.jsxs(E, {
                children: [
                  e.jsx(fn, {
                    height: "50px",
                    width: "50px"
                  }),
                  e.jsxs(E, {
                    gap: "9px",
                    children: [
                      e.jsx(N, {
                        fontSize: "28px",
                        fontWeight: "500",
                        letterSpacing: "normal",
                        children: "Transactions Successful"
                      }),
                      e.jsx(N, {
                        fontSize: "18px",
                        fontWeight: "400",
                        color: "#657795",
                        children: "You have claimed all the rewards."
                      })
                    ]
                  })
                ]
              }),
              e.jsx(ie, {
                variant: "primary",
                size: "medium",
                onClick: M,
                children: "Close"
              })
            ]
          })
        ]
      }) : e.jsx(it, {
        size: 42,
        color: le.COLORS.PRIMARY_PINK,
        type: at.PROCESSING
      })
    });
  }, jn = s(E)`
  min-width: 493px;
  padding: 32px 24px;
`, Sn = ({ userDataPush: t, getUserDataPush: n, PUSHPoolstats: a, getPUSHPoolStats: c }) => {
    const { account: o, provider: r } = Te(), [m, p] = i.useState(false), [d, h] = i.useState(false), [y, M] = i.useState(null), [V, W] = i.useState(null), [L, Y] = i.useState(0), [$, Z] = i.useState(0), [z, K] = i.useState(0), [se, ee] = i.useState(""), P = Re(), B = _e(), A = async (b) => {
      var _ = r.getSigner(o);
      let g = new S(l.pushToken, C.pushToken, _);
      if (await g.holderDelegation(o, b.address)) return true;
      try {
        P.showLoaderToast({
          loaderMessage: "Delegating! Please wait.."
        });
        const u = await g.setHolderDelegation(b.address, "true");
        return await r.waitForTransaction(u.hash), P.showMessageToast({
          toastTitle: "Success",
          toastMessage: "Transaction Completed! Address Delegated",
          toastType: "SUCCESS",
          getToastIcon: (R) => e.jsx(ce, {
            size: R,
            color: "green"
          })
        }), true;
      } catch (u) {
        return console.error("Error in delegating", u), P.showMessageToast({
          toastTitle: "Error",
          toastMessage: `Transaction failed! ${u.reason}`,
          toastType: "ERROR",
          getToastIcon: (R) => e.jsx(D, {
            size: R,
            color: "red"
          })
        }), p(false), false;
      }
    }, T = async (b) => {
      const g = (await b.userFeesInfo(o)).lastClaimedBlock;
      if (g.toNumber() !== 0) {
        const w = await b.genesisEpoch(), u = await b.epochDuration();
        return (g - w) / u;
      }
    }, k = async () => {
      if (d) return;
      if (h(true), (t == null ? void 0 : t.availableRewards) == 0) {
        W("No Rewards to Claim"), h(false);
        return;
      }
      var _ = r.getSigner(o);
      let g = new S(l.pushCoreV2, C.pushCoreV2, _);
      const w = a == null ? void 0 : a.currentEpochNumber, u = 14;
      if (!await A(g)) return;
      let G = 1;
      G = await T(g), v(), h(false);
      let O = 0;
      w - G < u, O = Math.ceil((w - G) / u), Z(O), O != 0 && (await X(O, G, g, u), n(), K(2), Y(0));
    }, X = async (b, _, g, w) => {
      const u = a == null ? void 0 : a.currentEpochNumber;
      let R = 0;
      for (let G = 0; G < b; G++) {
        let O = _;
        _ += w;
        let we = Math.min(_, u - 1);
        ee(`Claiming the rewards from Epoch ${O} to ${we} `), await g.harvestPaginated(we, {
          gasLimit: 91e4
        }).then(async (ne) => {
          try {
            P.showLoaderToast({
              loaderMessage: "Waiting for confirmation"
            }), await r.waitForTransaction(ne.hash), P.showMessageToast({
              toastTitle: "Success",
              toastMessage: "Transaction Completed!",
              toastType: "SUCCESS",
              getToastIcon: (oe) => e.jsx(ce, {
                size: oe,
                color: "green"
              })
            }), R++, Y(R);
          } catch {
            console.error("Error in the transaction", ne);
            return;
          }
        }).catch((ne) => {
          throw console.error("Error in claiming the reward", ne), P.showMessageToast({
            toastTitle: "Error",
            toastMessage: `Transaction failed! ${ne.reason}`,
            toastType: "ERROR",
            getToastIcon: (oe) => e.jsx(D, {
              size: oe,
              color: "red"
            })
          }), ee(""), p(false), n(), K(1), Y(0), ne;
        });
      }
    }, H = async () => {
      if (m) return;
      if (p(true), J(t == null ? void 0 : t.userStaked) == 0) {
        M("Nothing to unstake, You need to stake first"), p(false);
        return;
      }
      var _ = r.getSigner(o);
      let g = new S(l.pushCoreV2, C.pushCoreV2, _);
      const w = await A(g);
      if (h(false), !w) return;
      const u = a == null ? void 0 : a.currentEpochNumber, R = 14;
      let G = 0;
      if (G = await T(g), G >= u - 1) {
        p(false), M("PUSH cannot be unstaked until current epoch is over."), P.showMessageToast({
          toastTitle: "Unstaking Error",
          toastMessage: "You cannot unstake until Current Epoch gets over.",
          toastType: "ERROR",
          getToastIcon: (re) => e.jsx(D, {
            size: re,
            color: "red"
          })
        });
        return;
      }
      v();
      const O = Math.ceil((u - G) / R);
      Z(O), O > 1 && await X(O - 1, G, g, R), ee("Unstaking Your Push Tokens. Please wait..."), g.unstake().then(async (re) => {
        P.showLoaderToast({
          loaderMessage: "Unstaking! Waiting for Confirmation..."
        });
        try {
          await r.waitForTransaction(re.hash), P.showMessageToast({
            toastTitle: "Success",
            toastMessage: "Transaction Completed!",
            toastType: "SUCCESS",
            getToastIcon: (ne) => e.jsx(ce, {
              size: ne,
              color: "green"
            })
          }), c(), n(), p(false), K(2), Y(0);
        } catch (ne) {
          console.error("Error", ne), P.showMessageToast({
            toastTitle: "Error",
            toastMessage: `Transaction Failed! (" +${ne.name}+ ")`,
            toastType: "ERROR",
            getToastIcon: (oe) => e.jsx(D, {
              size: oe,
              color: "red"
            })
          }), ee(""), p(false);
        }
      }).catch((re) => {
        console.error("Error: ", re);
        const ne = re.reason.includes("PushCoreV2::unstake:"), oe = re.reason.includes("PushCoreV2::harvestPaginated:");
        if (ne || oe) M("PUSH cannot be unstaked until current epoch is over.");
        else {
          let ue = re.reason.slice(re.reason.indexOf("::") + 1);
          ue = ue.replace("unstake:", ""), P.showMessageToast({
            toastTitle: "Error",
            toastMessage: `${ue}`,
            toastType: "ERROR",
            getToastIcon: (be) => e.jsx(D, {
              size: be,
              color: "red"
            })
          });
        }
        p(false), n(), K(1), Y(0);
      });
    };
    i.useEffect(() => {
      W(null), M(null);
    }, [
      o
    ]);
    const { showModal: ge, ModalComponent: F } = Oe(), te = Re(), j = Se(600), { showModal: v, ModalComponent: I } = Oe();
    return e.jsxs(yn, {
      children: [
        e.jsx(F, {
          InnerComponent: yt,
          InnerComponentProps: {
            title: "PUSH",
            getUserData: n,
            getPoolStats: c,
            setUnstakeErrorMessage: M,
            setWithdrawErrorMessage: W
          },
          toastObject: te,
          modalPosition: We.ON_PARENT
        }),
        e.jsx(I, {
          InnerComponent: Tn,
          InnerComponentProps: {
            currentTransactionNo: L,
            totalTransactionNo: $,
            transactionSteps: z,
            transactionText: se,
            setCurrentTransactionNo: Y,
            setTotalTransactionNo: Z,
            setTransactionSteps: K,
            claimRewards: k,
            unstakeTokensPaginated: H
          },
          onConfirm: () => {
          },
          modalPadding: "0px",
          modalPosition: We.ON_ROOT
        }),
        e.jsx(E, {
          margin: "0px 0px 20px 0px",
          children: a ? e.jsxs(e.Fragment, {
            children: [
              e.jsx(En, {
                children: "PUSH Fee Staking Pool"
              }),
              e.jsxs(Pn, {
                children: [
                  "Current APR",
                  e.jsxs(me, {
                    color: "#D53A94",
                    fontWeight: "600",
                    margin: "0 5px 0 5px",
                    children: [
                      ">",
                      q(a == null ? void 0 : a.stakingAPR),
                      "% + Fee"
                    ]
                  }),
                  e.jsx(Cn, {})
                ]
              })
            ]
          }) : e.jsxs(Me, {
            padding: "5px 15px 0 15px",
            children: [
              e.jsx(x, {
                height: "12px",
                width: "234px",
                margin: "0 0 10px 0"
              }),
              e.jsx(x, {
                height: "12px",
                width: "112px"
              })
            ]
          })
        }),
        e.jsxs(E, {
          flex: "5",
          children: [
            e.jsxs(Mn, {
              border: `1px solid ${B.stakingBorder}`,
              borderRadius: "16px",
              children: [
                e.jsx(E, {
                  padding: j ? " 1px" : "8px",
                  children: a ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(mt, {
                        children: "Current Reward"
                      }),
                      e.jsxs(N, {
                        fontSize: j ? "18px" : "24px",
                        fontWeight: "600",
                        color: "#D53A94",
                        letterSpacing: "normal",
                        children: [
                          q(J(a == null ? void 0 : a.currentReward)),
                          " PUSH"
                        ]
                      })
                    ]
                  }) : e.jsxs(Me, {
                    padding: j ? "0px" : "5px 15px 0 15px",
                    children: [
                      e.jsx(x, {
                        height: "12px",
                        width: j ? "100px" : "135px",
                        margin: "0 0 8px 0"
                      }),
                      e.jsx(x, {
                        height: "12px",
                        width: j ? "65px" : "100px}"
                      })
                    ]
                  })
                }),
                e.jsx(Rn, {
                  width: "10px",
                  height: "100%"
                }),
                e.jsx(E, {
                  padding: j ? " 1px" : "8px",
                  children: a ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(mt, {
                        children: "Total Staked"
                      }),
                      e.jsxs(Fn, {
                        fontSize: j ? "18px" : "24px",
                        fontWeight: "600",
                        letterSpacing: "normal",
                        children: [
                          q(J(a == null ? void 0 : a.totalStakedAmount)),
                          " PUSH"
                        ]
                      })
                    ]
                  }) : e.jsxs(Me, {
                    padding: j ? "0px" : "5px 15px 0 15px",
                    children: [
                      e.jsx(x, {
                        height: "12px",
                        width: j ? "100px" : "135px",
                        margin: "0 0 8px 0"
                      }),
                      e.jsx(x, {
                        height: "12px",
                        width: j ? "65px" : "100px}"
                      })
                    ]
                  })
                })
              ]
            }),
            e.jsx(f, {
              alignSelf: "end",
              margin: "12px 13px 24px 0px",
              color: "#575D73",
              letterSpacing: "normal",
              children: a ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx(wt, {
                    children: "Current Epoch"
                  }),
                  e.jsx(wt, {
                    children: a == null ? void 0 : a.currentEpochNumber
                  })
                ]
              }) : e.jsx(Me, {
                padding: "5px 0px 0 15px",
                children: e.jsx(x, {
                  height: "12px",
                  width: "124px"
                })
              })
            }),
            t ? e.jsxs(E, {
              children: [
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: j ? "0px 0px 12px 0px" : "0px 13px 12px 13px",
                  children: [
                    e.jsxs(Ve, {
                      children: [
                        "User Deposit",
                        e.jsx($e, {
                          children: e.jsx(Q, {
                            ToolTipTitle: "User Deposited",
                            ToolTipBody: "Amount of PUSH Token User Staked",
                            children: e.jsx(ae, {
                              src: he,
                              alt: "Info-Logo",
                              width: "16px",
                              style: {
                                cursor: "pointer"
                              }
                            })
                          })
                        })
                      ]
                    }),
                    e.jsxs(ze, {
                      children: [
                        " ",
                        q(J(t == null ? void 0 : t.userStaked)),
                        " PUSH"
                      ]
                    })
                  ]
                }),
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: j ? "0px 0px 12px 0px" : "0px 13px 12px 13px",
                  children: [
                    e.jsxs(Ve, {
                      children: [
                        "Rewards Claimed",
                        e.jsx($e, {
                          children: e.jsx(Q, {
                            ToolTipTitle: "Rewards Claimed",
                            ToolTipBody: "Amount of Push Claimed by User",
                            children: e.jsx(ae, {
                              src: he,
                              alt: "Info-Logo",
                              width: "16px",
                              style: {
                                cursor: "pointer"
                              }
                            })
                          })
                        })
                      ]
                    }),
                    e.jsxs(ze, {
                      children: [
                        " ",
                        q((t == null ? void 0 : t.claimedReward).toFixed(2)),
                        " PUSH"
                      ]
                    })
                  ]
                }),
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: j ? "0px 0px 12px 0px" : "0px 13px 12px 13px",
                  children: [
                    e.jsxs(Ve, {
                      children: [
                        "Current Epoch Reward",
                        e.jsx($e, {
                          children: e.jsx(Q, {
                            ToolTipTitle: "Current Epoch Reward",
                            ToolTipBody: "Displays the approximate latest reward amount for current epoch",
                            children: e.jsx(ae, {
                              src: he,
                              alt: "Info-Logo",
                              width: "16px",
                              style: {
                                cursor: "pointer"
                              }
                            })
                          })
                        })
                      ]
                    }),
                    e.jsxs(ze, {
                      children: [
                        " ",
                        q((t == null ? void 0 : t.potentialReward).toFixed(2)),
                        " PUSH"
                      ]
                    })
                  ]
                }),
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: j ? "0px 0px 12px 0px" : "0px 13px 12px 13px",
                  children: [
                    e.jsxs(Ve, {
                      children: [
                        "Available for Claiming",
                        e.jsx($e, {
                          children: e.jsx(Q, {
                            ToolTipTitle: "Available for Claiming",
                            ToolTipBody: "Amount of Push Token Available to claim",
                            children: e.jsx(ae, {
                              src: he,
                              alt: "Info-Logo",
                              width: "16px",
                              style: {
                                cursor: "pointer"
                              }
                            })
                          })
                        })
                      ]
                    }),
                    e.jsxs(ze, {
                      children: [
                        " ",
                        q((t == null ? void 0 : t.availableRewards).toFixed(2)),
                        " PUSH"
                      ]
                    })
                  ]
                })
              ]
            }) : e.jsxs(je, {
              padding: "0 15px 15px 15px",
              width: "100%",
              maxWidth: " -webkit-fill-available",
              borderRadius: "5px",
              children: [
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: "0 0 23px 0",
                  children: [
                    e.jsx(x, {
                      height: "12px",
                      width: "164px"
                    }),
                    e.jsx(x, {
                      height: "12px",
                      width: "72px"
                    })
                  ]
                }),
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: "0 0 23px 0",
                  children: [
                    e.jsx(x, {
                      height: "12px",
                      width: "164px"
                    }),
                    e.jsx(x, {
                      height: "12px",
                      width: "72px"
                    })
                  ]
                }),
                e.jsxs(f, {
                  justifyContent: "space-between",
                  margin: "0 0 23px 0",
                  children: [
                    e.jsx(x, {
                      height: "12px",
                      width: "164px"
                    }),
                    e.jsx(x, {
                      height: "12px",
                      width: "72px"
                    })
                  ]
                }),
                e.jsxs(f, {
                  justifyContent: "space-between",
                  children: [
                    e.jsx(x, {
                      height: "12px",
                      width: "164px"
                    }),
                    e.jsx(x, {
                      height: "12px",
                      width: "72px"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsx(E, {
          padding: j ? "0px " : "0px 14px",
          margin: "24px 0px 24px 0px",
          children: t ? e.jsxs(e.Fragment, {
            children: [
              e.jsx(f, {
                children: e.jsx(ie, {
                  variant: "primary",
                  size: "medium",
                  block: true,
                  onClick: ge,
                  children: "Stake $PUSH"
                })
              }),
              e.jsxs(vn, {
                children: [
                  e.jsx(Ye, {
                    width: "50%",
                    children: (a == null ? void 0 : a.currentEpochNumber) <= 2 ? e.jsx(ut, {
                      ToolTipTitle: "You can unstake once epoch 2 ends.",
                      ButtonTitle: "Unstake PUSH"
                    }) : J(t == null ? void 0 : t.userStaked) == 0 || y !== null ? e.jsx(ut, {
                      ToolTipTitle: y || "Nothing to unstake, Stake First",
                      ButtonTitle: "Unstake PUSH"
                    }) : e.jsx(ie, {
                      variant: "outline",
                      size: "medium",
                      block: true,
                      onClick: H,
                      children: m ? e.jsx(pe, {
                        type: de.SEAMLESS,
                        spinnerSize: 26,
                        spinnerColor: B.activeButtonText,
                        title: "Unstaking",
                        titleColor: B.activeButtonText
                      }) : "Unstake $PUSH"
                    })
                  }),
                  e.jsx(Ye, {
                    width: "50%",
                    children: (t == null ? void 0 : t.availableRewards) === 0 ? e.jsx(Q, {
                      bottom: "-30px",
                      ToolTipTitle: "No Rewards to Claim",
                      error: true,
                      left: "40px",
                      ToolTipWidth: "10rem",
                      children: e.jsx(ie, {
                        size: "medium",
                        block: true,
                        disabled: true,
                        children: d ? e.jsx(pe, {
                          type: de.SEAMLESS,
                          spinnerSize: 26,
                          spinnerColor: "#D53A94"
                        }) : "Claim Rewards"
                      })
                    }) : e.jsx(ie, {
                      variant: "outline",
                      size: "medium",
                      block: true,
                      onClick: k,
                      children: d ? e.jsx(pe, {
                        type: de.SEAMLESS,
                        spinnerSize: 26,
                        spinnerColor: B.activeButtonText,
                        title: "Claiming",
                        titleColor: B.activeButtonText
                      }) : "Claim Rewards"
                    })
                  })
                ]
              })
            ]
          }) : e.jsxs(Me, {
            width: "100%",
            children: [
              e.jsx(x, {
                height: "49px",
                width: "100%",
                margin: "0 0 8px 0"
              }),
              e.jsx(x, {
                height: "49px",
                width: "100%"
              })
            ]
          })
        })
      ]
    });
  }, ut = (t) => e.jsx(Q, {
    error: true,
    ToolTipTitle: t.ToolTipTitle,
    ToolTipWidth: "16rem",
    bottom: "-30px",
    children: e.jsx(ie, {
      size: "medium",
      block: true,
      disabled: true,
      children: t.ButtonTitle
    })
  }), Cn = () => {
    const [t, n] = i.useState(false), a = () => n(false), c = i.useRef(null);
    return St(c, () => a()), e.jsxs(kn, {
      ref: c,
      children: [
        e.jsx(ae, {
          onClick: () => n(!t),
          src: he,
          alt: "Info-Logo",
          width: "16px",
          style: {
            cursor: "pointer"
          }
        }),
        t && e.jsx(bn, {
          id: "channel",
          children: e.jsx(kt, {
            title: "",
            body: "Push Fee Pool APR distributes yield farming rewards + fee earned by protocol. More Info "
          })
        })
      ]
    });
  }, kn = s.div`
  width: 34%;
  width: 100%;
  min-width: none;
  max-width: none;
  display: flex;
  flex: 1;
  height: fit-content;
  position: relative;
  @media ${Be.tablet} {
    width: 100%;
    max-width: 100%;
  }
`, bn = s.div`
  position: absolute;
  border-radius: 17px;
  background: none;
  bottom: 25px;
  left: 5px;
  color: #fff;
  background: #131313;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  line-height: 21px;
  z-index: 10;
  &::before {
    bottom: 100%;
    border-bottom-color: #131313;
  }
`, yn = s(Ge)`
  border: 1px solid ${(t) => t.theme.stakingBorder};
  border-radius: 24px;
  padding: 20px;
  margin: 10px 10px 10px 0;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  min-height: 587px;
  color: ${(t) => t.theme.stakingPrimaryText};
  width: -webkit-fill-available;
  @media (max-width: 1300px) {
    margin: 10px 0;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
`, En = s(N)`
  font-size: 24px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${(t) => t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`, Pn = s.div`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`, mt = s.p`
  margin: 0px;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`, Mn = s(f)`
  min-height: 110px;

  @media (min-width: 600px) and (max-width: 992px) {
    margin: 0px 13px;
  }
`, Rn = s.div`
  width: 1px;
  height: 100%;
  background: ${(t) => t.theme.stakingBorder};
`, Ve = s.div`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(t) => t.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`, Fn = s(N)`
  color: ${(t) => t.theme.stakingSecondaryText};
`, wt = s(Ct)`
  font-weight: 600;
  text-align: right;
  letter-spacing: normal;
  font-size: 16px;
  line-height: 141%;
  margin-right: 5px;
  color: ${(t) => t.theme.stakingUserDetails};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`, $e = s(me)`
  margin: 0px 0px 0px 6px;
  cursor: pointer;
`, ze = s(N)`
  font-size: 18px;
  line-height: 141%;
  letter-spacing: normal;
  color: ${(t) => t.theme.stakingPrimaryText};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`, vn = s.div`
  display: flex;
  margin: 15px 0px 0px 0px;
  gap: var(--s3);
  width: 100%;
`, Me = s(je)`
  // width:150px;
  max-width: -webkit-fill-available;
  border-radius: 5px;
  gap: 5px;
`, An = ({ setActiveTab: t }) => {
    const { provider: n, account: a, chainId: c } = Te(), [o, r] = i.useState(), [m, p] = i.useState(), [d, h] = i.useState(), [y, M] = i.useState(), [V, W] = i.useState(), [L, Y] = i.useState(null), [$, Z] = i.useState(null), [z, K] = i.useState(null), [se, ee] = i.useState(null), [P, B] = i.useState(null), A = n == null ? void 0 : n.getSigner(a), T = i.useCallback(async () => {
      const F = await Ce.getInstance().getPoolStats(n);
      Y({
        ...F
      });
    }, [
      m,
      o,
      y,
      d,
      V,
      n
    ]), k = i.useCallback(async () => {
      const F = await Ce.getInstance().getPoolStats(n), te = await Ce.getInstance().getLPPoolStats(F);
      Z({
        ...te
      });
    }, [
      m,
      o,
      y,
      d,
      V,
      n
    ]), X = i.useCallback(async () => {
    }, []), H = i.useCallback(async () => {
      const F = await Ce.getInstance().getUserDataLP();
      K({
        ...F
      });
    }, [
      m,
      o,
      y,
      d,
      V
    ]), ge = i.useCallback(async () => {
      const [F, te] = await Ce.getInstance().getUserDataPUSH(n);
      B({
        ...F
      }), ee({
        ...te
      });
    }, [
      m,
      o,
      y,
      d,
      V,
      n
    ]);
    return i.useEffect(() => {
      if (c !== xe.coreContractChain && c !== xe.mainnetCoreContractChain) return;
      Z(null), K(null), B(null), ee(null);
      let F = new S(l.stakingV2, C.stakingV2, A), te = new S(l.pushToken, C.pushToken, A), j = new S(l.pushCoreV2, C.pushCoreV2, A), v = new S(l.yieldFarmLP, C.yieldFarming, A), I = new S(l.uniswapV2Router02, C.uniswapV2Router02, A);
      if (p(F), r(te), M(j), h(v), W(I), A && a) {
        var b = n == null ? void 0 : n.getSigner(a);
        let _ = new S(l.stakingV2, C.stakingV2, b), g = new S(l.pushToken, C.pushToken, b), w = new S(l.pushCoreV2, C.pushCoreV2, b), u = new S(l.yieldFarmLP, C.yieldFarming, b), R = new S(l.uniswapV2Router02, C.uniswapV2Router02, b);
        p(_), r(g), M(w), h(u), W(R);
      }
      Ce.getInstance().init(a, F, te, j, v, I), T(), H(), k(), ge();
    }, [
      a,
      c
    ]), e.jsxs(e.Fragment, {
      children: [
        e.jsx(bt, {
          logo: "announcement",
          title: "New V2 Pools are now Live! Stake or migrate now.",
          body: "Users who were part of the previous Push staking program, need to migrate to new pools to continue earning rewards. Click",
          setActiveTab: t
        }),
        e.jsx(sn, {
          getLpPoolStats: k,
          poolStats: L,
          setPoolStats: Y
        }),
        e.jsx(en, {
          poolStats: L
        }),
        e.jsxs(In, {
          children: [
            e.jsx(Sn, {
              userDataPush: se,
              getUserDataPush: ge,
              PUSHPoolstats: P,
              getPUSHPoolStats: X
            }),
            e.jsx(dn, {
              lpPoolStats: $,
              userDataLP: z,
              getLpPoolStats: k,
              getUserDataLP: H
            })
          ]
        })
      ]
    });
  }, In = s(f)`
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`, Un = ({ onClose: t }) => {
    const { chainId: n, switchChain: a } = Te(), c = () => {
      const o = xe.allowedNetworks[0];
      n !== 1 && n !== 11155111 && (console.info("Current Chain ID ", n), console.info("Chain Id to pass", o), a(xe.coreContractChain));
    };
    return i.useEffect(() => {
      (n === xe.coreContractChain || n === xe.mainnetCoreContractChain) && t();
    }, [
      n
    ]), e.jsxs(Ln, {
      children: [
        e.jsx(ot, {
          style: {
            cursor: "pointer",
            alignSelf: "end"
          }
        }),
        e.jsxs(Dn, {
          children: [
            e.jsx(Nn, {
              children: "Unsupported Network"
            }),
            e.jsxs(Vn, {
              children: [
                "Push Yield Farm V2 is only live on Ethereum Chain.",
                e.jsx("br", {}),
                "Kindly switch to Ethereum"
              ]
            })
          ]
        }),
        e.jsx($n, {
          children: e.jsx(ie, {
            onClick: c,
            variant: "primary",
            size: "large",
            children: "Switch Network"
          })
        })
      ]
    });
  }, Ln = s(E)`
  padding: 32px 36px;
  width: 445px;
`, Dn = s(E)`
  font-family: FK Grotesk Neu;
  font-style: normal;
  line-height: 141%; /* 39.48px */
  letter-spacing: normal;
`, Nn = s.div`
  font-size: 28px;
  font-weight: 500;
  color: ${(t) => t.theme.stakingSecondaryText};
`, Vn = s.div`
  color: ${(t) => t.theme.activeButtonText};
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 24px 0;
`, $n = s.div``;
  xe.coreContractChain;
  let zn, Bn, Hn, ft, On;
  zn = () => {
    At.pageview("/yield");
    const [t, n] = i.useState(0), [a, c] = i.useState(false), { chainId: o, switchChain: r } = Te(), m = () => {
      const h = xe.allowedNetworks[0];
      o !== 1 && o !== 5 && r(h);
    };
    i.useEffect(() => {
      o !== 1 && o !== 11155111 && (p(), m());
    }, [
      o
    ]);
    const { showModal: p, ModalComponent: d } = Oe();
    return e.jsxs(Bn, {
      children: [
        e.jsx(d, {
          InnerComponent: Un,
          onConfirm: () => {
          },
          modalPadding: "0px",
          modalPosition: We.ON_PARENT
        }),
        e.jsxs(Hn, {
          children: [
            e.jsx(ft, {
              isActive: !t,
              onClick: () => {
                c(true), n(0);
              },
              children: "Yield Farming V2"
            }),
            e.jsxs(ft, {
              isActive: t,
              onClick: () => {
                c(false), n(1);
              },
              children: [
                "Yield Farming V1 ",
                e.jsx(On, {
                  children: "Deprecated"
                })
              ]
            })
          ]
        }),
        t === 0 && e.jsx(An, {
          setActiveTab: n
        }),
        t === 1 && e.jsx(qt, {
          setActiveTab: n
        })
      ]
    });
  };
  Bn = s(Ge)`
	align-items: stretch;
	align-self: center;
  flex: 1;
	background: ${(t) => t.theme.default.bg};
	border-radius: ${le.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${le.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: calc(
    100% - ${ve.MINI_MODULES.DESKTOP.RIGHT} - ${ve.MINI_MODULES.DESKTOP.LEFT} -
      ${le.ADJUSTMENTS.PADDING.BIG} - ${le.ADJUSTMENTS.PADDING.BIG}
  );
  gap: 16px;
  padding: 24px;

  margin: ${le.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  
  @media ${Be.laptop} {
    margin: ${le.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${Be.tablet} {
    width: calc(
      100% - ${ve.MINI_MODULES.TABLET.RIGHT} - ${ve.MINI_MODULES.TABLET.LEFT} -
        ${le.ADJUSTMENTS.PADDING.DEFAULT} - ${le.ADJUSTMENTS.PADDING.DEFAULT}
    );
    margin: ${le.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding:16px;
  }

  @media ${Be.mobileL} {
    margin: ${le.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    border: ${le.ADJUSTMENTS.RADIUS.LARGE};
    width: 100%;
    padding: ${le.ADJUSTMENTS.PADDING.DEFAULT};
`;
  Hn = s(f)`
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 51px;
  position: relative;

  :after {
    position: absolute;
    height: 2px;
    left: 0;
    bottom: 0px;
    width: 100%;
    content: '';
    background-color: ${(t) => t.theme.default.border};
  }
`;
  ft = s.div`
  cursor: pointer;
  // padding: 0 25px;
  width: 250px;
  justify-content: center;
  display: flex;
  height: 25px;
  line-height: 141%;
  text-align: center;
  position: relative;
  color: ${(t) => t.isActive ? "#CF1C84" : t.theme.color};

  @media (max-width: 638px) {
    width: 150px;
    flex: 1;
    flex-direction: column;
    align-items: baseline;
  }

  ${(t) => t.isActive && `&:after{
        position: absolute;
        height: 2px;
        left: 0;
        bottom: -13px;
        width: 100%;
        content: '';
        background-color: #CF1C84;
        z-index: 1;
        
    }`}
`;
  On = s(me)`
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #d53a94;
  margin-left: 10px;
  padding: 2px 6px;
  background: #f3d7fa;
  border-radius: 6px;
  height: 17px;
  width: fit-content;
`;
  Gn = () => e.jsx(Ut, {
    children: e.jsx(zn, {})
  });
});
export {
  __tla,
  Gn as default
};
