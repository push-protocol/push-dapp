var c = {};
Object.defineProperty(c, "__esModule", { value: true });
function d(l) {
  const u = l.length;
  let n = 0, e = 0, t;
  for (; e < u; ) n++, t = l.charCodeAt(e++), t >= 55296 && t <= 56319 && e < u && (t = l.charCodeAt(e), (t & 64512) === 56320 && e++);
  return n;
}
c.default = d;
d.code = 'require("ajv/dist/runtime/ucs2length").default';
export {
  c as u
};
