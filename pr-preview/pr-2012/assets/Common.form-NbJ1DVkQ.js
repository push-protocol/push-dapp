const s = /^(http:\/\/|https:\/\/|www\.)?([\w-]+\.)+[\w-]{2,}(\/[\w.-]*)*\/?$/, a = (e) => `${e} is required.`, t = (e) => `${e} is invalid.`, i = (e) => `Maximum ${e} characters allowed.`, g = (e) => `Must be greater than ${e}`, n = (e) => `${e} must be within the defined range limits.`;
export {
  s as U,
  a,
  i as b,
  g as c,
  n as d,
  t as g
};
