import { u as Ue } from "./ucs2length-xALg2LS9.js";
import { f as je } from "./formats-BhjaGe7F.js";
import { eK as Q, __tla as __tla_0 } from "./index-AGa8OPve.js";
let i, We;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let v, $e, ne, Se, Ke, ze, Ve, Be, Ce, Ge;
  We = i;
  v = Ue.default;
  $e = new RegExp("^[\\w ]+$", "u");
  ne = new RegExp("^[\\w]+$", "u");
  Se = new RegExp("^[ \\w]+$", "u");
  Ke = new RegExp("^[ \\w\\.,:]+$", "u");
  ze = je.fullFormats["date-time"];
  Ve = je.fullFormats.uri;
  Be = new RegExp("^0x[a-fA-F0-9]{40}$", "u");
  Ce = new RegExp("^[ \\S+]+$", "u");
  Ge = new RegExp("^\\S+$", "u");
  function se(s) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = u.instancePath, a = N === void 0 ? "" : N;
    u.parentData, u.parentDataProperty, u.rootData;
    var n = null, p = 0, r = p, e = false, l = p, P = p, m = false, y = p;
    if (p === y) if (typeof s == "string") {
      if (v(s) > 42) {
        var o = {
          instancePath: a,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
          keyword: "maxLength",
          params: {
            limit: 42
          },
          message: "must NOT have more than 42 characters"
        };
        n === null ? n = [
          o
        ] : n.push(o), p++;
      } else if (v(s) < 1) {
        var t = {
          instancePath: a,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
          keyword: "minLength",
          params: {
            limit: 1
          },
          message: "must NOT have fewer than 1 characters"
        };
        n === null ? n = [
          t
        ] : n.push(t), p++;
      }
    } else {
      var x = {
        instancePath: a,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
        keyword: "type",
        params: {
          type: "string"
        },
        message: "must be string"
      };
      n === null ? n = [
        x
      ] : n.push(x), p++;
    }
    var d = y === p;
    if (m = m || d, !m) {
      var h = p;
      if (typeof s != "boolean") {
        var g = {
          instancePath: a,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
          keyword: "type",
          params: {
            type: "boolean"
          },
          message: "must be boolean"
        };
        n === null ? n = [
          g
        ] : n.push(g), p++;
      }
      var d = h === p;
      if (m = m || d, !m) {
        var I = p;
        if (!(typeof s == "number" && isFinite(s))) {
          var k = {
            instancePath: a,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
            keyword: "type",
            params: {
              type: "number"
            },
            message: "must be number"
          };
          n === null ? n = [
            k
          ] : n.push(k), p++;
        }
        var d = I === p;
        if (m = m || d, !m) {
          var F = p;
          if (s !== null) {
            var w = {
              instancePath: a,
              schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
              keyword: "type",
              params: {
                type: "null"
              },
              message: "must be null"
            };
            n === null ? n = [
              w
            ] : n.push(w), p++;
          }
          var d = F === p;
          m = m || d;
        }
      }
    }
    if (m) p = P, n !== null && (P ? n.length = P : n = null);
    else {
      var T = {
        instancePath: a,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
        keyword: "anyOf",
        params: {},
        message: "must match a schema in anyOf"
      };
      n === null ? n = [
        T
      ] : n.push(T), p++;
    }
    var V = l === p;
    if (e = e || V, e) p = r, n !== null && (r ? n.length = r : n = null);
    else {
      var b = {
        instancePath: a,
        schemaPath: "#/anyOf",
        keyword: "anyOf",
        params: {},
        message: "must match a schema in anyOf"
      };
      return n === null ? n = [
        b
      ] : n.push(b), p++, se.errors = n, false;
    }
    return se.errors = n, p === 0;
  }
  function te(s) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = u.instancePath, a = N === void 0 ? "" : N;
    u.parentData, u.parentDataProperty;
    var n = u.rootData, p = n === void 0 ? s : n, r = null, e = 0, l = e, P = false, m = e, y = e, o = false, t = e;
    if (e === t) if (typeof s == "string") {
      if (v(s) > 42) {
        var x = {
          instancePath: a,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
          keyword: "maxLength",
          params: {
            limit: 42
          },
          message: "must NOT have more than 42 characters"
        };
        r === null ? r = [
          x
        ] : r.push(x), e++;
      } else if (v(s) < 1) {
        var d = {
          instancePath: a,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
          keyword: "minLength",
          params: {
            limit: 1
          },
          message: "must NOT have fewer than 1 characters"
        };
        r === null ? r = [
          d
        ] : r.push(d), e++;
      }
    } else {
      var h = {
        instancePath: a,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
        keyword: "type",
        params: {
          type: "string"
        },
        message: "must be string"
      };
      r === null ? r = [
        h
      ] : r.push(h), e++;
    }
    var g = t === e;
    if (o = o || g, !o) {
      var I = e;
      if (typeof s != "boolean") {
        var k = {
          instancePath: a,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
          keyword: "type",
          params: {
            type: "boolean"
          },
          message: "must be boolean"
        };
        r === null ? r = [
          k
        ] : r.push(k), e++;
      }
      var g = I === e;
      if (o = o || g, !o) {
        var F = e;
        if (!(typeof s == "number" && isFinite(s))) {
          var w = {
            instancePath: a,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
            keyword: "type",
            params: {
              type: "number"
            },
            message: "must be number"
          };
          r === null ? r = [
            w
          ] : r.push(w), e++;
        }
        var g = F === e;
        if (o = o || g, !o) {
          var T = e;
          if (s !== null) {
            var V = {
              instancePath: a,
              schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
              keyword: "type",
              params: {
                type: "null"
              },
              message: "must be null"
            };
            r === null ? r = [
              V
            ] : r.push(V), e++;
          }
          var g = T === e;
          o = o || g;
        }
      }
    }
    if (o) e = y, r !== null && (y ? r.length = y : r = null);
    else {
      var b = {
        instancePath: a,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
        keyword: "anyOf",
        params: {},
        message: "must match a schema in anyOf"
      };
      r === null ? r = [
        b
      ] : r.push(b), e++;
    }
    var O = m === e;
    if (P = P || O, !P) {
      var q = e;
      if (e === q) if (s && Q(s) == "object" && !Array.isArray(s)) if (Object.keys(s).length > 10) {
        var D = {
          instancePath: a,
          schemaPath: "#/anyOf/1/maxProperties",
          keyword: "maxProperties",
          params: {
            limit: 10
          },
          message: "must NOT have more than 10 properties"
        };
        r === null ? r = [
          D
        ] : r.push(D), e++;
      } else {
        for (var c in s) {
          var A = e, z = e;
          if (e === z) if (typeof c == "string") {
            if (v(c) > 40) {
              var E = {
                instancePath: a,
                schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                keyword: "maxLength",
                params: {
                  limit: 40
                },
                message: "must NOT have more than 40 characters",
                propertyName: c
              };
              r === null ? r = [
                E
              ] : r.push(E), e++;
            } else if (v(c) < 1) {
              var G = {
                instancePath: a,
                schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                keyword: "minLength",
                params: {
                  limit: 1
                },
                message: "must NOT have fewer than 1 characters",
                propertyName: c
              };
              r === null ? r = [
                G
              ] : r.push(G), e++;
            } else if (!ne.test(c)) {
              var $ = {
                instancePath: a,
                schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                keyword: "pattern",
                params: {
                  pattern: "^[\\w]+$"
                },
                message: 'must match pattern "^[\\w]+$"',
                propertyName: c
              };
              r === null ? r = [
                $
              ] : r.push($), e++;
            }
          } else {
            var M = {
              instancePath: a,
              schemaPath: "#/definitions/ExtensionIdentifier/type",
              keyword: "type",
              params: {
                type: "string"
              },
              message: "must be string",
              propertyName: c
            };
            r === null ? r = [
              M
            ] : r.push(M), e++;
          }
          var L = A === e;
          if (!L) {
            var U = {
              instancePath: a,
              schemaPath: "#/anyOf/1/propertyNames",
              keyword: "propertyNames",
              params: {
                propertyName: c
              },
              message: "property name must be valid"
            };
            r === null ? r = [
              U
            ] : r.push(U), e++;
            break;
          }
        }
        if (L) for (var j in s) {
          var W = e;
          se(s[j], {
            instancePath: a + "/" + j.replace(/~/g, "~0").replace(/\//g, "~1"),
            parentData: s,
            parentDataProperty: j,
            rootData: p
          }) || (r = r === null ? se.errors : r.concat(se.errors), e = r.length);
          var B = W === e;
          if (!B) break;
        }
      }
      else {
        var R = {
          instancePath: a,
          schemaPath: "#/anyOf/1/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        r === null ? r = [
          R
        ] : r.push(R), e++;
      }
      var O = q === e;
      P = P || O;
    }
    if (P) e = l, r !== null && (l ? r.length = l : r = null);
    else {
      var S = {
        instancePath: a,
        schemaPath: "#/anyOf",
        keyword: "anyOf",
        params: {},
        message: "must match a schema in anyOf"
      };
      return r === null ? r = [
        S
      ] : r.push(S), e++, te.errors = r, false;
    }
    return te.errors = r, e === 0;
  }
  function ie(s) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = u.instancePath, a = N === void 0 ? "" : N;
    u.parentData, u.parentDataProperty;
    var n = u.rootData, p = n === void 0 ? s : n, r = null, e = 0, l = e, P = false, m = e, y = e, o = false, t = e;
    if (e === t) if (typeof s == "string") {
      if (v(s) > 42) {
        var x = {
          instancePath: a,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
          keyword: "maxLength",
          params: {
            limit: 42
          },
          message: "must NOT have more than 42 characters"
        };
        r === null ? r = [
          x
        ] : r.push(x), e++;
      } else if (v(s) < 1) {
        var d = {
          instancePath: a,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
          keyword: "minLength",
          params: {
            limit: 1
          },
          message: "must NOT have fewer than 1 characters"
        };
        r === null ? r = [
          d
        ] : r.push(d), e++;
      }
    } else {
      var h = {
        instancePath: a,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
        keyword: "type",
        params: {
          type: "string"
        },
        message: "must be string"
      };
      r === null ? r = [
        h
      ] : r.push(h), e++;
    }
    var g = t === e;
    if (o = o || g, !o) {
      var I = e;
      if (typeof s != "boolean") {
        var k = {
          instancePath: a,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
          keyword: "type",
          params: {
            type: "boolean"
          },
          message: "must be boolean"
        };
        r === null ? r = [
          k
        ] : r.push(k), e++;
      }
      var g = I === e;
      if (o = o || g, !o) {
        var F = e;
        if (!(typeof s == "number" && isFinite(s))) {
          var w = {
            instancePath: a,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
            keyword: "type",
            params: {
              type: "number"
            },
            message: "must be number"
          };
          r === null ? r = [
            w
          ] : r.push(w), e++;
        }
        var g = F === e;
        if (o = o || g, !o) {
          var T = e;
          if (s !== null) {
            var V = {
              instancePath: a,
              schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
              keyword: "type",
              params: {
                type: "null"
              },
              message: "must be null"
            };
            r === null ? r = [
              V
            ] : r.push(V), e++;
          }
          var g = T === e;
          o = o || g;
        }
      }
    }
    if (o) e = y, r !== null && (y ? r.length = y : r = null);
    else {
      var b = {
        instancePath: a,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
        keyword: "anyOf",
        params: {},
        message: "must match a schema in anyOf"
      };
      r === null ? r = [
        b
      ] : r.push(b), e++;
    }
    var O = m === e;
    if (P = P || O, !P) {
      var q = e;
      if (e === q) if (s && Q(s) == "object" && !Array.isArray(s)) if (Object.keys(s).length > 10) {
        var D = {
          instancePath: a,
          schemaPath: "#/anyOf/1/maxProperties",
          keyword: "maxProperties",
          params: {
            limit: 10
          },
          message: "must NOT have more than 10 properties"
        };
        r === null ? r = [
          D
        ] : r.push(D), e++;
      } else {
        for (var c in s) {
          var A = e, z = e;
          if (e === z) if (typeof c == "string") {
            if (v(c) > 40) {
              var E = {
                instancePath: a,
                schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                keyword: "maxLength",
                params: {
                  limit: 40
                },
                message: "must NOT have more than 40 characters",
                propertyName: c
              };
              r === null ? r = [
                E
              ] : r.push(E), e++;
            } else if (v(c) < 1) {
              var G = {
                instancePath: a,
                schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                keyword: "minLength",
                params: {
                  limit: 1
                },
                message: "must NOT have fewer than 1 characters",
                propertyName: c
              };
              r === null ? r = [
                G
              ] : r.push(G), e++;
            } else if (!ne.test(c)) {
              var $ = {
                instancePath: a,
                schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                keyword: "pattern",
                params: {
                  pattern: "^[\\w]+$"
                },
                message: 'must match pattern "^[\\w]+$"',
                propertyName: c
              };
              r === null ? r = [
                $
              ] : r.push($), e++;
            }
          } else {
            var M = {
              instancePath: a,
              schemaPath: "#/definitions/ExtensionIdentifier/type",
              keyword: "type",
              params: {
                type: "string"
              },
              message: "must be string",
              propertyName: c
            };
            r === null ? r = [
              M
            ] : r.push(M), e++;
          }
          var L = A === e;
          if (!L) {
            var U = {
              instancePath: a,
              schemaPath: "#/anyOf/1/propertyNames",
              keyword: "propertyNames",
              params: {
                propertyName: c
              },
              message: "property name must be valid"
            };
            r === null ? r = [
              U
            ] : r.push(U), e++;
            break;
          }
        }
        if (L) for (var j in s) {
          var W = e;
          te(s[j], {
            instancePath: a + "/" + j.replace(/~/g, "~0").replace(/\//g, "~1"),
            parentData: s,
            parentDataProperty: j,
            rootData: p
          }) || (r = r === null ? te.errors : r.concat(te.errors), e = r.length);
          var B = W === e;
          if (!B) break;
        }
      }
      else {
        var R = {
          instancePath: a,
          schemaPath: "#/anyOf/1/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        r === null ? r = [
          R
        ] : r.push(R), e++;
      }
      var O = q === e;
      P = P || O;
    }
    if (P) e = l, r !== null && (l ? r.length = l : r = null);
    else {
      var S = {
        instancePath: a,
        schemaPath: "#/anyOf",
        keyword: "anyOf",
        params: {},
        message: "must match a schema in anyOf"
      };
      return r === null ? r = [
        S
      ] : r.push(S), e++, ie.errors = r, false;
    }
    return ie.errors = r, e === 0;
  }
  function Z(s) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = u.instancePath, a = N === void 0 ? "" : N;
    u.parentData, u.parentDataProperty;
    var n = u.rootData, p = n === void 0 ? s : n, r = null, e = 0;
    if (e === 0) if (s && Q(s) == "object" && !Array.isArray(s)) {
      if (Object.keys(s).length > 10) return Z.errors = [
        {
          instancePath: a,
          schemaPath: "#/maxProperties",
          keyword: "maxProperties",
          params: {
            limit: 10
          },
          message: "must NOT have more than 10 properties"
        }
      ], false;
      for (var l in s) {
        var P = e, m = e;
        if (e === m) if (typeof l == "string") {
          if (v(l) > 40) {
            var y = {
              instancePath: a,
              schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
              keyword: "maxLength",
              params: {
                limit: 40
              },
              message: "must NOT have more than 40 characters",
              propertyName: l
            };
            r === null ? r = [
              y
            ] : r.push(y), e++;
          } else if (v(l) < 1) {
            var o = {
              instancePath: a,
              schemaPath: "#/definitions/ExtensionIdentifier/minLength",
              keyword: "minLength",
              params: {
                limit: 1
              },
              message: "must NOT have fewer than 1 characters",
              propertyName: l
            };
            r === null ? r = [
              o
            ] : r.push(o), e++;
          } else if (!ne.test(l)) {
            var t = {
              instancePath: a,
              schemaPath: "#/definitions/ExtensionIdentifier/pattern",
              keyword: "pattern",
              params: {
                pattern: "^[\\w]+$"
              },
              message: 'must match pattern "^[\\w]+$"',
              propertyName: l
            };
            r === null ? r = [
              t
            ] : r.push(t), e++;
          }
        } else {
          var x = {
            instancePath: a,
            schemaPath: "#/definitions/ExtensionIdentifier/type",
            keyword: "type",
            params: {
              type: "string"
            },
            message: "must be string",
            propertyName: l
          };
          r === null ? r = [
            x
          ] : r.push(x), e++;
        }
        var d = P === e;
        if (!d) {
          var h = {
            instancePath: a,
            schemaPath: "#/propertyNames",
            keyword: "propertyNames",
            params: {
              propertyName: l
            },
            message: "property name must be valid"
          };
          return r === null ? r = [
            h
          ] : r.push(h), e++, Z.errors = r, false;
        }
      }
      if (d) for (var g in s) {
        var I = e;
        ie(s[g], {
          instancePath: a + "/" + g.replace(/~/g, "~0").replace(/\//g, "~1"),
          parentData: s,
          parentDataProperty: g,
          rootData: p
        }) || (r = r === null ? ie.errors : r.concat(ie.errors), e = r.length);
        var k = I === e;
        if (!k) break;
      }
    } else return Z.errors = [
      {
        instancePath: a,
        schemaPath: "#/type",
        keyword: "type",
        params: {
          type: "object"
        },
        message: "must be object"
      }
    ], false;
    return Z.errors = r, e === 0;
  }
  function f(s) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = u.instancePath, a = N === void 0 ? "" : N;
    u.parentData, u.parentDataProperty;
    var n = u.rootData, p = n === void 0 ? s : n, r = null, e = 0;
    if (e === 0) if (s && Q(s) == "object" && !Array.isArray(s)) {
      var l;
      if (s.chainId === void 0 && (l = "chainId") || s.address === void 0 && (l = "address") || s.decimals === void 0 && (l = "decimals") || s.name === void 0 && (l = "name") || s.symbol === void 0 && (l = "symbol")) return f.errors = [
        {
          instancePath: a,
          schemaPath: "#/required",
          keyword: "required",
          params: {
            missingProperty: l
          },
          message: "must have required property '" + l + "'"
        }
      ], false;
      var P = e;
      for (var m in s) if (!(m === "chainId" || m === "address" || m === "decimals" || m === "name" || m === "symbol" || m === "logoURI" || m === "tags" || m === "extensions")) return f.errors = [
        {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: {
            additionalProperty: m
          },
          message: "must NOT have additional properties"
        }
      ], false;
      if (P === e) {
        if (s.chainId !== void 0) {
          var y = s.chainId, o = e;
          if (!(typeof y == "number" && !(y % 1) && !isNaN(y) && isFinite(y))) return f.errors = [
            {
              instancePath: a + "/chainId",
              schemaPath: "#/properties/chainId/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            }
          ], false;
          if (e === o && typeof y == "number" && isFinite(y) && (y < 1 || isNaN(y))) return f.errors = [
            {
              instancePath: a + "/chainId",
              schemaPath: "#/properties/chainId/minimum",
              keyword: "minimum",
              params: {
                comparison: ">=",
                limit: 1
              },
              message: "must be >= 1"
            }
          ], false;
          var t = o === e;
        } else var t = true;
        if (t) {
          if (s.address !== void 0) {
            var x = s.address, d = e;
            if (e === d) if (typeof x == "string") {
              if (!Be.test(x)) return f.errors = [
                {
                  instancePath: a + "/address",
                  schemaPath: "#/properties/address/pattern",
                  keyword: "pattern",
                  params: {
                    pattern: "^0x[a-fA-F0-9]{40}$"
                  },
                  message: 'must match pattern "^0x[a-fA-F0-9]{40}$"'
                }
              ], false;
            } else return f.errors = [
              {
                instancePath: a + "/address",
                schemaPath: "#/properties/address/type",
                keyword: "type",
                params: {
                  type: "string"
                },
                message: "must be string"
              }
            ], false;
            var t = d === e;
          } else var t = true;
          if (t) {
            if (s.decimals !== void 0) {
              var h = s.decimals, g = e;
              if (!(typeof h == "number" && !(h % 1) && !isNaN(h) && isFinite(h))) return f.errors = [
                {
                  instancePath: a + "/decimals",
                  schemaPath: "#/properties/decimals/type",
                  keyword: "type",
                  params: {
                    type: "integer"
                  },
                  message: "must be integer"
                }
              ], false;
              if (e === g && typeof h == "number" && isFinite(h)) {
                if (h > 255 || isNaN(h)) return f.errors = [
                  {
                    instancePath: a + "/decimals",
                    schemaPath: "#/properties/decimals/maximum",
                    keyword: "maximum",
                    params: {
                      comparison: "<=",
                      limit: 255
                    },
                    message: "must be <= 255"
                  }
                ], false;
                if (h < 0 || isNaN(h)) return f.errors = [
                  {
                    instancePath: a + "/decimals",
                    schemaPath: "#/properties/decimals/minimum",
                    keyword: "minimum",
                    params: {
                      comparison: ">=",
                      limit: 0
                    },
                    message: "must be >= 0"
                  }
                ], false;
              }
              var t = g === e;
            } else var t = true;
            if (t) {
              if (s.name !== void 0) {
                var I = s.name, k = e, F = e, w = false, T = e;
                if (I !== "") {
                  var V = {
                    instancePath: a + "/name",
                    schemaPath: "#/properties/name/anyOf/0/const",
                    keyword: "const",
                    params: {
                      allowedValue: ""
                    },
                    message: "must be equal to constant"
                  };
                  r === null ? r = [
                    V
                  ] : r.push(V), e++;
                }
                var b = T === e;
                if (w = w || b, !w) {
                  var O = e;
                  if (typeof I == "string" && !Ce.test(I)) {
                    var q = {
                      instancePath: a + "/name",
                      schemaPath: "#/properties/name/anyOf/1/pattern",
                      keyword: "pattern",
                      params: {
                        pattern: "^[ \\S+]+$"
                      },
                      message: 'must match pattern "^[ \\S+]+$"'
                    };
                    r === null ? r = [
                      q
                    ] : r.push(q), e++;
                  }
                  var b = O === e;
                  w = w || b;
                }
                if (w) e = F, r !== null && (F ? r.length = F : r = null);
                else {
                  var D = {
                    instancePath: a + "/name",
                    schemaPath: "#/properties/name/anyOf",
                    keyword: "anyOf",
                    params: {},
                    message: "must match a schema in anyOf"
                  };
                  return r === null ? r = [
                    D
                  ] : r.push(D), e++, f.errors = r, false;
                }
                if (e === k) if (typeof I == "string") {
                  if (v(I) > 40) return f.errors = [
                    {
                      instancePath: a + "/name",
                      schemaPath: "#/properties/name/maxLength",
                      keyword: "maxLength",
                      params: {
                        limit: 40
                      },
                      message: "must NOT have more than 40 characters"
                    }
                  ], false;
                  if (v(I) < 0) return f.errors = [
                    {
                      instancePath: a + "/name",
                      schemaPath: "#/properties/name/minLength",
                      keyword: "minLength",
                      params: {
                        limit: 0
                      },
                      message: "must NOT have fewer than 0 characters"
                    }
                  ], false;
                } else return f.errors = [
                  {
                    instancePath: a + "/name",
                    schemaPath: "#/properties/name/type",
                    keyword: "type",
                    params: {
                      type: "string"
                    },
                    message: "must be string"
                  }
                ], false;
                var t = k === e;
              } else var t = true;
              if (t) {
                if (s.symbol !== void 0) {
                  var c = s.symbol, A = e, z = e, E = false, G = e;
                  if (c !== "") {
                    var $ = {
                      instancePath: a + "/symbol",
                      schemaPath: "#/properties/symbol/anyOf/0/const",
                      keyword: "const",
                      params: {
                        allowedValue: ""
                      },
                      message: "must be equal to constant"
                    };
                    r === null ? r = [
                      $
                    ] : r.push($), e++;
                  }
                  var M = G === e;
                  if (E = E || M, !E) {
                    var L = e;
                    if (typeof c == "string" && !Ge.test(c)) {
                      var U = {
                        instancePath: a + "/symbol",
                        schemaPath: "#/properties/symbol/anyOf/1/pattern",
                        keyword: "pattern",
                        params: {
                          pattern: "^\\S+$"
                        },
                        message: 'must match pattern "^\\S+$"'
                      };
                      r === null ? r = [
                        U
                      ] : r.push(U), e++;
                    }
                    var M = L === e;
                    E = E || M;
                  }
                  if (E) e = z, r !== null && (z ? r.length = z : r = null);
                  else {
                    var j = {
                      instancePath: a + "/symbol",
                      schemaPath: "#/properties/symbol/anyOf",
                      keyword: "anyOf",
                      params: {},
                      message: "must match a schema in anyOf"
                    };
                    return r === null ? r = [
                      j
                    ] : r.push(j), e++, f.errors = r, false;
                  }
                  if (e === A) if (typeof c == "string") {
                    if (v(c) > 20) return f.errors = [
                      {
                        instancePath: a + "/symbol",
                        schemaPath: "#/properties/symbol/maxLength",
                        keyword: "maxLength",
                        params: {
                          limit: 20
                        },
                        message: "must NOT have more than 20 characters"
                      }
                    ], false;
                    if (v(c) < 0) return f.errors = [
                      {
                        instancePath: a + "/symbol",
                        schemaPath: "#/properties/symbol/minLength",
                        keyword: "minLength",
                        params: {
                          limit: 0
                        },
                        message: "must NOT have fewer than 0 characters"
                      }
                    ], false;
                  } else return f.errors = [
                    {
                      instancePath: a + "/symbol",
                      schemaPath: "#/properties/symbol/type",
                      keyword: "type",
                      params: {
                        type: "string"
                      },
                      message: "must be string"
                    }
                  ], false;
                  var t = A === e;
                } else var t = true;
                if (t) {
                  if (s.logoURI !== void 0) {
                    var W = s.logoURI, B = e;
                    if (e === B && e === B) if (typeof W == "string") {
                      if (!Ve(W)) return f.errors = [
                        {
                          instancePath: a + "/logoURI",
                          schemaPath: "#/properties/logoURI/format",
                          keyword: "format",
                          params: {
                            format: "uri"
                          },
                          message: 'must match format "uri"'
                        }
                      ], false;
                    } else return f.errors = [
                      {
                        instancePath: a + "/logoURI",
                        schemaPath: "#/properties/logoURI/type",
                        keyword: "type",
                        params: {
                          type: "string"
                        },
                        message: "must be string"
                      }
                    ], false;
                    var t = B === e;
                  } else var t = true;
                  if (t) {
                    if (s.tags !== void 0) {
                      var R = s.tags, S = e;
                      if (e === S) if (Array.isArray(R)) {
                        if (R.length > 10) return f.errors = [
                          {
                            instancePath: a + "/tags",
                            schemaPath: "#/properties/tags/maxItems",
                            keyword: "maxItems",
                            params: {
                              limit: 10
                            },
                            message: "must NOT have more than 10 items"
                          }
                        ], false;
                        for (var ee = true, ce = R.length, H = 0; H < ce; H++) {
                          var K = R[H], me = e, ae = e;
                          if (e === ae) if (typeof K == "string") {
                            if (v(K) > 10) return f.errors = [
                              {
                                instancePath: a + "/tags/" + H,
                                schemaPath: "#/definitions/TagIdentifier/maxLength",
                                keyword: "maxLength",
                                params: {
                                  limit: 10
                                },
                                message: "must NOT have more than 10 characters"
                              }
                            ], false;
                            if (v(K) < 1) return f.errors = [
                              {
                                instancePath: a + "/tags/" + H,
                                schemaPath: "#/definitions/TagIdentifier/minLength",
                                keyword: "minLength",
                                params: {
                                  limit: 1
                                },
                                message: "must NOT have fewer than 1 characters"
                              }
                            ], false;
                            if (!ne.test(K)) return f.errors = [
                              {
                                instancePath: a + "/tags/" + H,
                                schemaPath: "#/definitions/TagIdentifier/pattern",
                                keyword: "pattern",
                                params: {
                                  pattern: "^[\\w]+$"
                                },
                                message: 'must match pattern "^[\\w]+$"'
                              }
                            ], false;
                          } else return f.errors = [
                            {
                              instancePath: a + "/tags/" + H,
                              schemaPath: "#/definitions/TagIdentifier/type",
                              keyword: "type",
                              params: {
                                type: "string"
                              },
                              message: "must be string"
                            }
                          ], false;
                          var ee = me === e;
                          if (!ee) break;
                        }
                      } else return f.errors = [
                        {
                          instancePath: a + "/tags",
                          schemaPath: "#/properties/tags/type",
                          keyword: "type",
                          params: {
                            type: "array"
                          },
                          message: "must be array"
                        }
                      ], false;
                      var t = S === e;
                    } else var t = true;
                    if (t) if (s.extensions !== void 0) {
                      var ve = e;
                      Z(s.extensions, {
                        instancePath: a + "/extensions",
                        parentData: s,
                        parentDataProperty: "extensions",
                        rootData: p
                      }) || (r = r === null ? Z.errors : r.concat(Z.errors), e = r.length);
                      var t = ve === e;
                    } else var t = true;
                  }
                }
              }
            }
          }
        }
      }
    } else return f.errors = [
      {
        instancePath: a,
        schemaPath: "#/type",
        keyword: "type",
        params: {
          type: "object"
        },
        message: "must be object"
      }
    ], false;
    return f.errors = r, e === 0;
  }
  i = function(s) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = u.instancePath, a = N === void 0 ? "" : N;
    u.parentData, u.parentDataProperty;
    var n = u.rootData, p = n === void 0 ? s : n, r = null, e = 0;
    if (e === 0) if (s && Q(s) == "object" && !Array.isArray(s)) {
      var l;
      if (s.tokens === void 0 && (l = "tokens")) return i.errors = [
        {
          instancePath: a,
          schemaPath: "#/required",
          keyword: "required",
          params: {
            missingProperty: l
          },
          message: "must have required property '" + l + "'"
        }
      ], false;
      var P = e;
      for (var m in s) if (!(m === "name" || m === "timestamp" || m === "version" || m === "tokens" || m === "tokenMap" || m === "keywords" || m === "tags" || m === "logoURI")) return i.errors = [
        {
          instancePath: a,
          schemaPath: "#/additionalProperties",
          keyword: "additionalProperties",
          params: {
            additionalProperty: m
          },
          message: "must NOT have additional properties"
        }
      ], false;
      if (P === e) {
        if (s.name !== void 0) {
          var y = s.name, o = e;
          if (e === o) if (typeof y == "string") {
            if (v(y) > 30) return i.errors = [
              {
                instancePath: a + "/name",
                schemaPath: "#/properties/name/maxLength",
                keyword: "maxLength",
                params: {
                  limit: 30
                },
                message: "must NOT have more than 30 characters"
              }
            ], false;
            if (v(y) < 1) return i.errors = [
              {
                instancePath: a + "/name",
                schemaPath: "#/properties/name/minLength",
                keyword: "minLength",
                params: {
                  limit: 1
                },
                message: "must NOT have fewer than 1 characters"
              }
            ], false;
            if (!$e.test(y)) return i.errors = [
              {
                instancePath: a + "/name",
                schemaPath: "#/properties/name/pattern",
                keyword: "pattern",
                params: {
                  pattern: "^[\\w ]+$"
                },
                message: 'must match pattern "^[\\w ]+$"'
              }
            ], false;
          } else return i.errors = [
            {
              instancePath: a + "/name",
              schemaPath: "#/properties/name/type",
              keyword: "type",
              params: {
                type: "string"
              },
              message: "must be string"
            }
          ], false;
          var t = o === e;
        } else var t = true;
        if (t) {
          if (s.timestamp !== void 0) {
            var x = s.timestamp, d = e;
            if (e === d && e === d) if (typeof x == "string") {
              if (!ze.validate(x)) return i.errors = [
                {
                  instancePath: a + "/timestamp",
                  schemaPath: "#/properties/timestamp/format",
                  keyword: "format",
                  params: {
                    format: "date-time"
                  },
                  message: 'must match format "date-time"'
                }
              ], false;
            } else return i.errors = [
              {
                instancePath: a + "/timestamp",
                schemaPath: "#/properties/timestamp/type",
                keyword: "type",
                params: {
                  type: "string"
                },
                message: "must be string"
              }
            ], false;
            var t = d === e;
          } else var t = true;
          if (t) {
            if (s.version !== void 0) {
              var h = s.version, g = e, I = e;
              if (e === I) if (h && Q(h) == "object" && !Array.isArray(h)) {
                var k;
                if (h.major === void 0 && (k = "major") || h.minor === void 0 && (k = "minor") || h.patch === void 0 && (k = "patch")) return i.errors = [
                  {
                    instancePath: a + "/version",
                    schemaPath: "#/definitions/Version/required",
                    keyword: "required",
                    params: {
                      missingProperty: k
                    },
                    message: "must have required property '" + k + "'"
                  }
                ], false;
                var F = e;
                for (var w in h) if (!(w === "major" || w === "minor" || w === "patch")) return i.errors = [
                  {
                    instancePath: a + "/version",
                    schemaPath: "#/definitions/Version/additionalProperties",
                    keyword: "additionalProperties",
                    params: {
                      additionalProperty: w
                    },
                    message: "must NOT have additional properties"
                  }
                ], false;
                if (F === e) {
                  if (h.major !== void 0) {
                    var T = h.major, V = e;
                    if (!(typeof T == "number" && !(T % 1) && !isNaN(T) && isFinite(T))) return i.errors = [
                      {
                        instancePath: a + "/version/major",
                        schemaPath: "#/definitions/Version/properties/major/type",
                        keyword: "type",
                        params: {
                          type: "integer"
                        },
                        message: "must be integer"
                      }
                    ], false;
                    if (e === V && typeof T == "number" && isFinite(T) && (T < 0 || isNaN(T))) return i.errors = [
                      {
                        instancePath: a + "/version/major",
                        schemaPath: "#/definitions/Version/properties/major/minimum",
                        keyword: "minimum",
                        params: {
                          comparison: ">=",
                          limit: 0
                        },
                        message: "must be >= 0"
                      }
                    ], false;
                    var b = V === e;
                  } else var b = true;
                  if (b) {
                    if (h.minor !== void 0) {
                      var O = h.minor, q = e;
                      if (!(typeof O == "number" && !(O % 1) && !isNaN(O) && isFinite(O))) return i.errors = [
                        {
                          instancePath: a + "/version/minor",
                          schemaPath: "#/definitions/Version/properties/minor/type",
                          keyword: "type",
                          params: {
                            type: "integer"
                          },
                          message: "must be integer"
                        }
                      ], false;
                      if (e === q && typeof O == "number" && isFinite(O) && (O < 0 || isNaN(O))) return i.errors = [
                        {
                          instancePath: a + "/version/minor",
                          schemaPath: "#/definitions/Version/properties/minor/minimum",
                          keyword: "minimum",
                          params: {
                            comparison: ">=",
                            limit: 0
                          },
                          message: "must be >= 0"
                        }
                      ], false;
                      var b = q === e;
                    } else var b = true;
                    if (b) if (h.patch !== void 0) {
                      var D = h.patch, c = e;
                      if (!(typeof D == "number" && !(D % 1) && !isNaN(D) && isFinite(D))) return i.errors = [
                        {
                          instancePath: a + "/version/patch",
                          schemaPath: "#/definitions/Version/properties/patch/type",
                          keyword: "type",
                          params: {
                            type: "integer"
                          },
                          message: "must be integer"
                        }
                      ], false;
                      if (e === c && typeof D == "number" && isFinite(D) && (D < 0 || isNaN(D))) return i.errors = [
                        {
                          instancePath: a + "/version/patch",
                          schemaPath: "#/definitions/Version/properties/patch/minimum",
                          keyword: "minimum",
                          params: {
                            comparison: ">=",
                            limit: 0
                          },
                          message: "must be >= 0"
                        }
                      ], false;
                      var b = c === e;
                    } else var b = true;
                  }
                }
              } else return i.errors = [
                {
                  instancePath: a + "/version",
                  schemaPath: "#/definitions/Version/type",
                  keyword: "type",
                  params: {
                    type: "object"
                  },
                  message: "must be object"
                }
              ], false;
              var t = g === e;
            } else var t = true;
            if (t) {
              if (s.tokens !== void 0) {
                var A = s.tokens, z = e;
                if (e === z) if (Array.isArray(A)) {
                  if (A.length > 1e4) return i.errors = [
                    {
                      instancePath: a + "/tokens",
                      schemaPath: "#/properties/tokens/maxItems",
                      keyword: "maxItems",
                      params: {
                        limit: 1e4
                      },
                      message: "must NOT have more than 10000 items"
                    }
                  ], false;
                  if (A.length < 1) return i.errors = [
                    {
                      instancePath: a + "/tokens",
                      schemaPath: "#/properties/tokens/minItems",
                      keyword: "minItems",
                      params: {
                        limit: 1
                      },
                      message: "must NOT have fewer than 1 items"
                    }
                  ], false;
                  for (var E = true, G = A.length, $ = 0; $ < G; $++) {
                    var M = e;
                    f(A[$], {
                      instancePath: a + "/tokens/" + $,
                      parentData: A,
                      parentDataProperty: $,
                      rootData: p
                    }) || (r = r === null ? f.errors : r.concat(f.errors), e = r.length);
                    var E = M === e;
                    if (!E) break;
                  }
                } else return i.errors = [
                  {
                    instancePath: a + "/tokens",
                    schemaPath: "#/properties/tokens/type",
                    keyword: "type",
                    params: {
                      type: "array"
                    },
                    message: "must be array"
                  }
                ], false;
                var t = z === e;
              } else var t = true;
              if (t) {
                if (s.tokenMap !== void 0) {
                  var L = s.tokenMap, U = e;
                  if (e === U) if (L && Q(L) == "object" && !Array.isArray(L)) {
                    if (Object.keys(L).length > 1e4) return i.errors = [
                      {
                        instancePath: a + "/tokenMap",
                        schemaPath: "#/properties/tokenMap/maxProperties",
                        keyword: "maxProperties",
                        params: {
                          limit: 1e4
                        },
                        message: "must NOT have more than 10000 properties"
                      }
                    ], false;
                    if (Object.keys(L).length < 1) return i.errors = [
                      {
                        instancePath: a + "/tokenMap",
                        schemaPath: "#/properties/tokenMap/minProperties",
                        keyword: "minProperties",
                        params: {
                          limit: 1
                        },
                        message: "must NOT have fewer than 1 properties"
                      }
                    ], false;
                    for (var j in L) {
                      var W = e;
                      if (typeof j != "string") {
                        var B = {
                          instancePath: a + "/tokenMap",
                          schemaPath: "#/properties/tokenMap/propertyNames/type",
                          keyword: "type",
                          params: {
                            type: "string"
                          },
                          message: "must be string",
                          propertyName: j
                        };
                        r === null ? r = [
                          B
                        ] : r.push(B), e++;
                      }
                      var R = W === e;
                      if (!R) {
                        var S = {
                          instancePath: a + "/tokenMap",
                          schemaPath: "#/properties/tokenMap/propertyNames",
                          keyword: "propertyNames",
                          params: {
                            propertyName: j
                          },
                          message: "property name must be valid"
                        };
                        return r === null ? r = [
                          S
                        ] : r.push(S), e++, i.errors = r, false;
                      }
                    }
                    if (R) for (var ee in L) {
                      var ce = e;
                      f(L[ee], {
                        instancePath: a + "/tokenMap/" + ee.replace(/~/g, "~0").replace(/\//g, "~1"),
                        parentData: L,
                        parentDataProperty: ee,
                        rootData: p
                      }) || (r = r === null ? f.errors : r.concat(f.errors), e = r.length);
                      var H = ce === e;
                      if (!H) break;
                    }
                  } else return i.errors = [
                    {
                      instancePath: a + "/tokenMap",
                      schemaPath: "#/properties/tokenMap/type",
                      keyword: "type",
                      params: {
                        type: "object"
                      },
                      message: "must be object"
                    }
                  ], false;
                  var t = U === e;
                } else var t = true;
                if (t) {
                  if (s.keywords !== void 0) {
                    var K = s.keywords, me = e;
                    if (e === me) if (Array.isArray(K)) {
                      if (K.length > 20) return i.errors = [
                        {
                          instancePath: a + "/keywords",
                          schemaPath: "#/properties/keywords/maxItems",
                          keyword: "maxItems",
                          params: {
                            limit: 20
                          },
                          message: "must NOT have more than 20 items"
                        }
                      ], false;
                      for (var ae = true, ve = K.length, X = 0; X < ve; X++) {
                        var oe = K[X], we = e;
                        if (e === we) if (typeof oe == "string") {
                          if (v(oe) > 20) return i.errors = [
                            {
                              instancePath: a + "/keywords/" + X,
                              schemaPath: "#/properties/keywords/items/maxLength",
                              keyword: "maxLength",
                              params: {
                                limit: 20
                              },
                              message: "must NOT have more than 20 characters"
                            }
                          ], false;
                          if (v(oe) < 1) return i.errors = [
                            {
                              instancePath: a + "/keywords/" + X,
                              schemaPath: "#/properties/keywords/items/minLength",
                              keyword: "minLength",
                              params: {
                                limit: 1
                              },
                              message: "must NOT have fewer than 1 characters"
                            }
                          ], false;
                          if (!$e.test(oe)) return i.errors = [
                            {
                              instancePath: a + "/keywords/" + X,
                              schemaPath: "#/properties/keywords/items/pattern",
                              keyword: "pattern",
                              params: {
                                pattern: "^[\\w ]+$"
                              },
                              message: 'must match pattern "^[\\w ]+$"'
                            }
                          ], false;
                        } else return i.errors = [
                          {
                            instancePath: a + "/keywords/" + X,
                            schemaPath: "#/properties/keywords/items/type",
                            keyword: "type",
                            params: {
                              type: "string"
                            },
                            message: "must be string"
                          }
                        ], false;
                        var ae = we === e;
                        if (!ae) break;
                      }
                      if (ae) {
                        var re = K.length, ye;
                        if (re > 1) for (var ge = {}; re--; ) {
                          var pe = K[re];
                          if (typeof pe == "string") {
                            if (typeof ge[pe] == "number") return ye = ge[pe], i.errors = [
                              {
                                instancePath: a + "/keywords",
                                schemaPath: "#/properties/keywords/uniqueItems",
                                keyword: "uniqueItems",
                                params: {
                                  i: re,
                                  j: ye
                                },
                                message: "must NOT have duplicate items (items ## " + ye + " and " + re + " are identical)"
                              }
                            ], false;
                            ge[pe] = re;
                          }
                        }
                      }
                    } else return i.errors = [
                      {
                        instancePath: a + "/keywords",
                        schemaPath: "#/properties/keywords/type",
                        keyword: "type",
                        params: {
                          type: "array"
                        },
                        message: "must be array"
                      }
                    ], false;
                    var t = me === e;
                  } else var t = true;
                  if (t) {
                    if (s.tags !== void 0) {
                      var Y = s.tags, be = e;
                      if (e === be) if (Y && Q(Y) == "object" && !Array.isArray(Y)) {
                        if (Object.keys(Y).length > 20) return i.errors = [
                          {
                            instancePath: a + "/tags",
                            schemaPath: "#/properties/tags/maxProperties",
                            keyword: "maxProperties",
                            params: {
                              limit: 20
                            },
                            message: "must NOT have more than 20 properties"
                          }
                        ], false;
                        for (var J in Y) {
                          var Ae = e, Re = e;
                          if (e === Re) if (typeof J == "string") {
                            if (v(J) > 10) {
                              var ke = {
                                instancePath: a + "/tags",
                                schemaPath: "#/definitions/TagIdentifier/maxLength",
                                keyword: "maxLength",
                                params: {
                                  limit: 10
                                },
                                message: "must NOT have more than 10 characters",
                                propertyName: J
                              };
                              r === null ? r = [
                                ke
                              ] : r.push(ke), e++;
                            } else if (v(J) < 1) {
                              var Oe = {
                                instancePath: a + "/tags",
                                schemaPath: "#/definitions/TagIdentifier/minLength",
                                keyword: "minLength",
                                params: {
                                  limit: 1
                                },
                                message: "must NOT have fewer than 1 characters",
                                propertyName: J
                              };
                              r === null ? r = [
                                Oe
                              ] : r.push(Oe), e++;
                            } else if (!ne.test(J)) {
                              var Ne = {
                                instancePath: a + "/tags",
                                schemaPath: "#/definitions/TagIdentifier/pattern",
                                keyword: "pattern",
                                params: {
                                  pattern: "^[\\w]+$"
                                },
                                message: 'must match pattern "^[\\w]+$"',
                                propertyName: J
                              };
                              r === null ? r = [
                                Ne
                              ] : r.push(Ne), e++;
                            }
                          } else {
                            var xe = {
                              instancePath: a + "/tags",
                              schemaPath: "#/definitions/TagIdentifier/type",
                              keyword: "type",
                              params: {
                                type: "string"
                              },
                              message: "must be string",
                              propertyName: J
                            };
                            r === null ? r = [
                              xe
                            ] : r.push(xe), e++;
                          }
                          var Te = Ae === e;
                          if (!Te) {
                            var De = {
                              instancePath: a + "/tags",
                              schemaPath: "#/properties/tags/propertyNames",
                              keyword: "propertyNames",
                              params: {
                                propertyName: J
                              },
                              message: "property name must be valid"
                            };
                            return r === null ? r = [
                              De
                            ] : r.push(De), e++, i.errors = r, false;
                          }
                        }
                        if (Te) for (var _ in Y) {
                          var C = Y[_], _e = e, Fe = e;
                          if (e === Fe) if (C && Q(C) == "object" && !Array.isArray(C)) {
                            var he = void 0;
                            if (C.name === void 0 && (he = "name") || C.description === void 0 && (he = "description")) return i.errors = [
                              {
                                instancePath: a + "/tags/" + _.replace(/~/g, "~0").replace(/\//g, "~1"),
                                schemaPath: "#/definitions/TagDefinition/required",
                                keyword: "required",
                                params: {
                                  missingProperty: he
                                },
                                message: "must have required property '" + he + "'"
                              }
                            ], false;
                            var qe = e;
                            for (var Pe in C) if (!(Pe === "name" || Pe === "description")) return i.errors = [
                              {
                                instancePath: a + "/tags/" + _.replace(/~/g, "~0").replace(/\//g, "~1"),
                                schemaPath: "#/definitions/TagDefinition/additionalProperties",
                                keyword: "additionalProperties",
                                params: {
                                  additionalProperty: Pe
                                },
                                message: "must NOT have additional properties"
                              }
                            ], false;
                            if (qe === e) {
                              if (C.name !== void 0) {
                                var fe = C.name, Le = e;
                                if (e === Le) if (typeof fe == "string") {
                                  if (v(fe) > 20) return i.errors = [
                                    {
                                      instancePath: a + "/tags/" + _.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                      schemaPath: "#/definitions/TagDefinition/properties/name/maxLength",
                                      keyword: "maxLength",
                                      params: {
                                        limit: 20
                                      },
                                      message: "must NOT have more than 20 characters"
                                    }
                                  ], false;
                                  if (v(fe) < 1) return i.errors = [
                                    {
                                      instancePath: a + "/tags/" + _.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                      schemaPath: "#/definitions/TagDefinition/properties/name/minLength",
                                      keyword: "minLength",
                                      params: {
                                        limit: 1
                                      },
                                      message: "must NOT have fewer than 1 characters"
                                    }
                                  ], false;
                                  if (!Se.test(fe)) return i.errors = [
                                    {
                                      instancePath: a + "/tags/" + _.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                      schemaPath: "#/definitions/TagDefinition/properties/name/pattern",
                                      keyword: "pattern",
                                      params: {
                                        pattern: "^[ \\w]+$"
                                      },
                                      message: 'must match pattern "^[ \\w]+$"'
                                    }
                                  ], false;
                                } else return i.errors = [
                                  {
                                    instancePath: a + "/tags/" + _.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                    schemaPath: "#/definitions/TagDefinition/properties/name/type",
                                    keyword: "type",
                                    params: {
                                      type: "string"
                                    },
                                    message: "must be string"
                                  }
                                ], false;
                                var le = Le === e;
                              } else var le = true;
                              if (le) if (C.description !== void 0) {
                                var ue = C.description, Ie = e;
                                if (e === Ie) if (typeof ue == "string") {
                                  if (v(ue) > 200) return i.errors = [
                                    {
                                      instancePath: a + "/tags/" + _.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                      schemaPath: "#/definitions/TagDefinition/properties/description/maxLength",
                                      keyword: "maxLength",
                                      params: {
                                        limit: 200
                                      },
                                      message: "must NOT have more than 200 characters"
                                    }
                                  ], false;
                                  if (v(ue) < 1) return i.errors = [
                                    {
                                      instancePath: a + "/tags/" + _.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                      schemaPath: "#/definitions/TagDefinition/properties/description/minLength",
                                      keyword: "minLength",
                                      params: {
                                        limit: 1
                                      },
                                      message: "must NOT have fewer than 1 characters"
                                    }
                                  ], false;
                                  if (!Ke.test(ue)) return i.errors = [
                                    {
                                      instancePath: a + "/tags/" + _.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                      schemaPath: "#/definitions/TagDefinition/properties/description/pattern",
                                      keyword: "pattern",
                                      params: {
                                        pattern: "^[ \\w\\.,:]+$"
                                      },
                                      message: 'must match pattern "^[ \\w\\.,:]+$"'
                                    }
                                  ], false;
                                } else return i.errors = [
                                  {
                                    instancePath: a + "/tags/" + _.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                    schemaPath: "#/definitions/TagDefinition/properties/description/type",
                                    keyword: "type",
                                    params: {
                                      type: "string"
                                    },
                                    message: "must be string"
                                  }
                                ], false;
                                var le = Ie === e;
                              } else var le = true;
                            }
                          } else return i.errors = [
                            {
                              instancePath: a + "/tags/" + _.replace(/~/g, "~0").replace(/\//g, "~1"),
                              schemaPath: "#/definitions/TagDefinition/type",
                              keyword: "type",
                              params: {
                                type: "object"
                              },
                              message: "must be object"
                            }
                          ], false;
                          var Me = _e === e;
                          if (!Me) break;
                        }
                      } else return i.errors = [
                        {
                          instancePath: a + "/tags",
                          schemaPath: "#/properties/tags/type",
                          keyword: "type",
                          params: {
                            type: "object"
                          },
                          message: "must be object"
                        }
                      ], false;
                      var t = be === e;
                    } else var t = true;
                    if (t) if (s.logoURI !== void 0) {
                      var Ee = s.logoURI, de = e;
                      if (e === de && e === de) if (typeof Ee == "string") {
                        if (!Ve(Ee)) return i.errors = [
                          {
                            instancePath: a + "/logoURI",
                            schemaPath: "#/properties/logoURI/format",
                            keyword: "format",
                            params: {
                              format: "uri"
                            },
                            message: 'must match format "uri"'
                          }
                        ], false;
                      } else return i.errors = [
                        {
                          instancePath: a + "/logoURI",
                          schemaPath: "#/properties/logoURI/type",
                          keyword: "type",
                          params: {
                            type: "string"
                          },
                          message: "must be string"
                        }
                      ], false;
                      var t = de === e;
                    } else var t = true;
                  }
                }
              }
            }
          }
        }
      }
    } else return i.errors = [
      {
        instancePath: a,
        schemaPath: "#/type",
        keyword: "type",
        params: {
          type: "object"
        },
        message: "must be object"
      }
    ], false;
    return i.errors = r, e === 0;
  };
});
export {
  __tla,
  i as default,
  We as validate
};
