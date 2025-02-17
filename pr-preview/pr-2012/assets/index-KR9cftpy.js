const u = (n) => {
  if (!n) return { isExpired: true };
  const o = Date.now(), t = n.expirationTimestamp;
  if (o >= t) return { isExpired: true };
  const e = t - o, i = Math.floor(e / (1e3 * 60 * 60 * 24)), s = Math.floor(e % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)), r = Math.floor(e % (1e3 * 60 * 60) / (1e3 * 60)), a = Math.floor(e % (1e3 * 60) / 1e3), m = `${i} days, ${s} hours, ${r} minutes, ${a} seconds`, c = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(t));
  return { timeRemaining: m, expirationDate: c, isExpired: false };
};
export {
  u as c
};
