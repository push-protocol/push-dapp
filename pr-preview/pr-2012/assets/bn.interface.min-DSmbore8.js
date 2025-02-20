import t, { __tla as __tla_0 } from "./bn.min-GIAJ4lg0.js";
import { __tla as __tla_1 } from "./index-D1Swtpz3.js";
let i;
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
  i = class {
    constructor(e) {
      if (e === void 0) throw Error("Invalid BigInteger input");
      this.value = new t(e);
    }
    clone() {
      const e = new i(null);
      return this.value.copy(e.value), e;
    }
    iinc() {
      return this.value.iadd(new t(1)), this;
    }
    inc() {
      return this.clone().iinc();
    }
    idec() {
      return this.value.isub(new t(1)), this;
    }
    dec() {
      return this.clone().idec();
    }
    iadd(e) {
      return this.value.iadd(e.value), this;
    }
    add(e) {
      return this.clone().iadd(e);
    }
    isub(e) {
      return this.value.isub(e.value), this;
    }
    sub(e) {
      return this.clone().isub(e);
    }
    imul(e) {
      return this.value.imul(e.value), this;
    }
    mul(e) {
      return this.clone().imul(e);
    }
    imod(e) {
      return this.value = this.value.umod(e.value), this;
    }
    mod(e) {
      return this.clone().imod(e);
    }
    modExp(e, r) {
      const n = r.isEven() ? t.red(r.value) : t.mont(r.value), u = this.clone();
      return u.value = u.value.toRed(n).redPow(e.value).fromRed(), u;
    }
    modInv(e) {
      if (!this.gcd(e).isOne()) throw Error("Inverse does not exist");
      return new i(this.value.invm(e.value));
    }
    gcd(e) {
      return new i(this.value.gcd(e.value));
    }
    ileftShift(e) {
      return this.value.ishln(e.value.toNumber()), this;
    }
    leftShift(e) {
      return this.clone().ileftShift(e);
    }
    irightShift(e) {
      return this.value.ishrn(e.value.toNumber()), this;
    }
    rightShift(e) {
      return this.clone().irightShift(e);
    }
    equal(e) {
      return this.value.eq(e.value);
    }
    lt(e) {
      return this.value.lt(e.value);
    }
    lte(e) {
      return this.value.lte(e.value);
    }
    gt(e) {
      return this.value.gt(e.value);
    }
    gte(e) {
      return this.value.gte(e.value);
    }
    isZero() {
      return this.value.isZero();
    }
    isOne() {
      return this.value.eq(new t(1));
    }
    isNegative() {
      return this.value.isNeg();
    }
    isEven() {
      return this.value.isEven();
    }
    abs() {
      const e = this.clone();
      return e.value = e.value.abs(), e;
    }
    toString() {
      return this.value.toString();
    }
    toNumber() {
      return this.value.toNumber();
    }
    getBit(e) {
      return this.value.testn(e) ? 1 : 0;
    }
    bitLength() {
      return this.value.bitLength();
    }
    byteLength() {
      return this.value.byteLength();
    }
    toUint8Array(e = "be", r) {
      return this.value.toArrayLike(Uint8Array, e, r);
    }
  };
});
export {
  __tla,
  i as default
};
