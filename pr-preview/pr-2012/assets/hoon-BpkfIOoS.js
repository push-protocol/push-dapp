import { eH as c, __tla as __tla_0 } from "./index-AGa8OPve.js";
let y;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(e, t) {
    for (var n = 0; n < t.length; n++) {
      const o = t[n];
      if (typeof o != "string" && !Array.isArray(o)) {
        for (const r in o) if (r !== "default" && !(r in e)) {
          const a = Object.getOwnPropertyDescriptor(o, r);
          a && Object.defineProperty(e, r, a.get ? a : {
            enumerable: true,
            get: () => o[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  var s, i;
  function g() {
    if (i) return s;
    i = 1, s = e, e.displayName = "hoon", e.aliases = [];
    function e(t) {
      t.languages.hoon = {
        comment: {
          pattern: /::.*/,
          greedy: true
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        constant: /%(?:\.[ny]|[\w-]+)/,
        "class-name": /@(?:[a-z0-9-]*[a-z0-9])?|\*/i,
        function: /(?:\+[-+] {2})?(?:[a-z](?:[a-z0-9-]*[a-z0-9])?)/,
        keyword: /\.[\^\+\*=\?]|![><:\.=\?!]|=[>|:,\.\-\^<+;/~\*\?]|\?[>|:\.\-\^<\+&~=@!]|\|[\$_%:\.\-\^~\*=@\?]|\+[|\$\+\*]|:[_\-\^\+~\*]|%[_:\.\-\^\+~\*=]|\^[|:\.\-\+&~\*=\?]|\$[|_%:<>\-\^&~@=\?]|;[:<\+;\/~\*=]|~[>|\$_%<\+\/&=\?!]|--|==/
      };
    }
    return s;
  }
  var u = g();
  let l;
  l = c(u);
  y = f({
    __proto__: null,
    default: l
  }, [
    u
  ]);
});
export {
  __tla,
  y as h
};
