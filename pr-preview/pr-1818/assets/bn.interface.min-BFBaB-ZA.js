import e,{__tla as l}from"./bn.min--GZT0iFA.js";import{__tla as s}from"./index-Dw0HuXW7.js";let i,a=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return s}catch{}})()]).then(async()=>{i=class{constructor(t){if(t===void 0)throw Error("Invalid BigInteger input");this.value=new e(t)}clone(){const t=new i(null);return this.value.copy(t.value),t}iinc(){return this.value.iadd(new e(1)),this}inc(){return this.clone().iinc()}idec(){return this.value.isub(new e(1)),this}dec(){return this.clone().idec()}iadd(t){return this.value.iadd(t.value),this}add(t){return this.clone().iadd(t)}isub(t){return this.value.isub(t.value),this}sub(t){return this.clone().isub(t)}imul(t){return this.value.imul(t.value),this}mul(t){return this.clone().imul(t)}imod(t){return this.value=this.value.umod(t.value),this}mod(t){return this.clone().imod(t)}modExp(t,r){const n=r.isEven()?e.red(r.value):e.mont(r.value),u=this.clone();return u.value=u.value.toRed(n).redPow(t.value).fromRed(),u}modInv(t){if(!this.gcd(t).isOne())throw Error("Inverse does not exist");return new i(this.value.invm(t.value))}gcd(t){return new i(this.value.gcd(t.value))}ileftShift(t){return this.value.ishln(t.value.toNumber()),this}leftShift(t){return this.clone().ileftShift(t)}irightShift(t){return this.value.ishrn(t.value.toNumber()),this}rightShift(t){return this.clone().irightShift(t)}equal(t){return this.value.eq(t.value)}lt(t){return this.value.lt(t.value)}lte(t){return this.value.lte(t.value)}gt(t){return this.value.gt(t.value)}gte(t){return this.value.gte(t.value)}isZero(){return this.value.isZero()}isOne(){return this.value.eq(new e(1))}isNegative(){return this.value.isNeg()}isEven(){return this.value.isEven()}abs(){const t=this.clone();return t.value=t.value.abs(),t}toString(){return this.value.toString()}toNumber(){return this.value.toNumber()}getBit(t){return this.value.testn(t)?1:0}bitLength(){return this.value.bitLength()}byteLength(){return this.value.byteLength()}toUint8Array(t="be",r){return this.value.toArrayLike(Uint8Array,t,r)}}});export{a as __tla,i as default};
