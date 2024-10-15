import{gR as ui,fR as c,__tla as ki}from"./index-DXkSuLFr.js";let li,mi=Promise.all([(()=>{try{return ki}catch{}})()]).then(async()=>{const{Transform:di}=ui();var pi=i=>class fi extends di{constructor(t,e,n,h,o){super(o),this._rate=t,this._capacity=e,this._delimitedSuffix=n,this._hashBitLength=h,this._options=o,this._state=new i,this._state.initialize(t,e),this._finalized=!1}_transform(t,e,n){let h=null;try{this.update(t,e)}catch(o){h=o}n(h)}_flush(t){let e=null;try{this.push(this.digest())}catch(n){e=n}t(e)}update(t,e){if(!c.isBuffer(t)&&typeof t!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Digest already called");return c.isBuffer(t)||(t=c.from(t,e)),this._state.absorb(t),this}digest(t){if(this._finalized)throw new Error("Digest already called");this._finalized=!0,this._delimitedSuffix&&this._state.absorbLastFewBits(this._delimitedSuffix);let e=this._state.squeeze(this._hashBitLength/8);return t!==void 0&&(e=e.toString(t)),this._resetState(),e}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const t=new fi(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);return this._state.copy(t._state),t._finalized=this._finalized,t}};const{Transform:zi}=ui();var wi=i=>class _i extends zi{constructor(t,e,n,h){super(h),this._rate=t,this._capacity=e,this._delimitedSuffix=n,this._options=h,this._state=new i,this._state.initialize(t,e),this._finalized=!1}_transform(t,e,n){let h=null;try{this.update(t,e)}catch(o){h=o}n(h)}_flush(){}_read(t){this.push(this.squeeze(t))}update(t,e){if(!c.isBuffer(t)&&typeof t!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Squeeze already called");return c.isBuffer(t)||(t=c.from(t,e)),this._state.absorb(t),this}squeeze(t,e){this._finalized||(this._finalized=!0,this._state.absorbLastFewBits(this._delimitedSuffix));let n=this._state.squeeze(t);return e!==void 0&&(n=n.toString(e)),n}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const t=new _i(this._rate,this._capacity,this._delimitedSuffix,this._options);return this._state.copy(t._state),t._finalized=this._finalized,t}};const xi=pi,bi=wi;var yi=function(i){const r=xi(i),t=bi(i);return function(e,n){switch(typeof e=="string"?e.toLowerCase():e){case"keccak224":return new r(1152,448,null,224,n);case"keccak256":return new r(1088,512,null,256,n);case"keccak384":return new r(832,768,null,384,n);case"keccak512":return new r(576,1024,null,512,n);case"sha3-224":return new r(1152,448,6,224,n);case"sha3-256":return new r(1088,512,6,256,n);case"sha3-384":return new r(832,768,6,384,n);case"sha3-512":return new r(576,1024,6,512,n);case"shake128":return new t(1344,256,31,n);case"shake256":return new t(1088,512,31,n);default:throw new Error("Invald algorithm: "+e)}}},_0={};const d0=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648];_0.p1600=function(i){for(let r=0;r<24;++r){const t=i[0]^i[10]^i[20]^i[30]^i[40],e=i[1]^i[11]^i[21]^i[31]^i[41],n=i[2]^i[12]^i[22]^i[32]^i[42],h=i[3]^i[13]^i[23]^i[33]^i[43],o=i[4]^i[14]^i[24]^i[34]^i[44],f=i[5]^i[15]^i[25]^i[35]^i[45],_=i[6]^i[16]^i[26]^i[36]^i[46],d=i[7]^i[17]^i[27]^i[37]^i[47],p=i[8]^i[18]^i[28]^i[38]^i[48],z=i[9]^i[19]^i[29]^i[39]^i[49];let s=p^(n<<1|h>>>31),a=z^(h<<1|n>>>31);const gi=i[0]^s,Si=i[1]^a,z0=i[10]^s,w0=i[11]^a,x0=i[20]^s,b0=i[21]^a,y0=i[30]^s,g0=i[31]^a,S0=i[40]^s,k0=i[41]^a;s=t^(o<<1|f>>>31),a=e^(f<<1|o>>>31);const m0=i[2]^s,q0=i[3]^a,B0=i[12]^s,L0=i[13]^a,v0=i[22]^s,E0=i[23]^a,D0=i[32]^s,F0=i[33]^a,T0=i[42]^s,R0=i[43]^a;s=n^(_<<1|d>>>31),a=h^(d<<1|_>>>31);const j0=i[4]^s,C0=i[5]^a,I0=i[14]^s,P0=i[15]^a,A0=i[24]^s,G0=i[25]^a,H0=i[34]^s,J0=i[35]^a,K0=i[44]^s,M0=i[45]^a;s=o^(p<<1|z>>>31),a=f^(z<<1|p>>>31);const N0=i[6]^s,O0=i[7]^a,Q0=i[16]^s,U0=i[17]^a,V0=i[26]^s,W0=i[27]^a,X0=i[36]^s,Y0=i[37]^a,Z0=i[46]^s,$0=i[47]^a;s=_^(t<<1|e>>>31),a=d^(e<<1|t>>>31);const ii=i[8]^s,ti=i[9]^a,ei=i[18]^s,si=i[19]^a,ai=i[28]^s,ni=i[29]^a,ri=i[38]^s,hi=i[39]^a,oi=i[48]^s,ci=i[49]^a,w=gi,x=Si,b=w0<<4|z0>>>28,y=z0<<4|w0>>>28,g=x0<<3|b0>>>29,S=b0<<3|x0>>>29,k=g0<<9|y0>>>23,m=y0<<9|g0>>>23,q=S0<<18|k0>>>14,B=k0<<18|S0>>>14,L=m0<<1|q0>>>31,v=q0<<1|m0>>>31,E=L0<<12|B0>>>20,D=B0<<12|L0>>>20,F=v0<<10|E0>>>22,T=E0<<10|v0>>>22,R=F0<<13|D0>>>19,j=D0<<13|F0>>>19,C=T0<<2|R0>>>30,I=R0<<2|T0>>>30,P=C0<<30|j0>>>2,A=j0<<30|C0>>>2,G=I0<<6|P0>>>26,H=P0<<6|I0>>>26,J=G0<<11|A0>>>21,K=A0<<11|G0>>>21,M=H0<<15|J0>>>17,N=J0<<15|H0>>>17,O=M0<<29|K0>>>3,Q=K0<<29|M0>>>3,U=N0<<28|O0>>>4,V=O0<<28|N0>>>4,W=U0<<23|Q0>>>9,X=Q0<<23|U0>>>9,Y=V0<<25|W0>>>7,Z=W0<<25|V0>>>7,$=X0<<21|Y0>>>11,i0=Y0<<21|X0>>>11,t0=$0<<24|Z0>>>8,e0=Z0<<24|$0>>>8,s0=ii<<27|ti>>>5,a0=ti<<27|ii>>>5,n0=ei<<20|si>>>12,r0=si<<20|ei>>>12,h0=ni<<7|ai>>>25,o0=ai<<7|ni>>>25,c0=ri<<8|hi>>>24,u0=hi<<8|ri>>>24,l0=oi<<14|ci>>>18,f0=ci<<14|oi>>>18;i[0]=w^~E&J,i[1]=x^~D&K,i[10]=U^~n0&g,i[11]=V^~r0&S,i[20]=L^~G&Y,i[21]=v^~H&Z,i[30]=s0^~b&F,i[31]=a0^~y&T,i[40]=P^~W&h0,i[41]=A^~X&o0,i[2]=E^~J&$,i[3]=D^~K&i0,i[12]=n0^~g&R,i[13]=r0^~S&j,i[22]=G^~Y&c0,i[23]=H^~Z&u0,i[32]=b^~F&M,i[33]=y^~T&N,i[42]=W^~h0&k,i[43]=X^~o0&m,i[4]=J^~$&l0,i[5]=K^~i0&f0,i[14]=g^~R&O,i[15]=S^~j&Q,i[24]=Y^~c0&q,i[25]=Z^~u0&B,i[34]=F^~M&t0,i[35]=T^~N&e0,i[44]=h0^~k&C,i[45]=o0^~m&I,i[6]=$^~l0&w,i[7]=i0^~f0&x,i[16]=R^~O&U,i[17]=j^~Q&V,i[26]=c0^~q&L,i[27]=u0^~B&v,i[36]=M^~t0&s0,i[37]=N^~e0&a0,i[46]=k^~C&P,i[47]=m^~I&A,i[8]=l0^~w&E,i[9]=f0^~x&D,i[18]=O^~U&n0,i[19]=Q^~V&r0,i[28]=q^~L&G,i[29]=B^~v&H,i[38]=t0^~s0&b,i[39]=e0^~a0&y,i[48]=C^~P&W,i[49]=I^~A&X,i[0]^=d0[r*2],i[1]^=d0[r*2+1]}};const l=_0;function u(){this.state=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.blockSize=null,this.count=0,this.squeezing=!1}u.prototype.initialize=function(i,r){for(let t=0;t<50;++t)this.state[t]=0;this.blockSize=i/8,this.count=0,this.squeezing=!1},u.prototype.absorb=function(i){for(let r=0;r<i.length;++r)this.state[~~(this.count/4)]^=i[r]<<8*(this.count%4),this.count+=1,this.count===this.blockSize&&(l.p1600(this.state),this.count=0)},u.prototype.absorbLastFewBits=function(i){this.state[~~(this.count/4)]^=i<<8*(this.count%4),i&128&&this.count===this.blockSize-1&&l.p1600(this.state),this.state[~~((this.blockSize-1)/4)]^=128<<8*((this.blockSize-1)%4),l.p1600(this.state),this.count=0,this.squeezing=!0},u.prototype.squeeze=function(i){this.squeezing||this.absorbLastFewBits(1);const r=c.alloc(i);for(let t=0;t<i;++t)r[t]=this.state[~~(this.count/4)]>>>8*(this.count%4)&255,this.count+=1,this.count===this.blockSize&&(l.p1600(this.state),this.count=0);return r},u.prototype.copy=function(i){for(let r=0;r<50;++r)i.state[r]=this.state[r];i.blockSize=this.blockSize,i.count=this.count,i.squeezing=this.squeezing};let p0;p0=u,li=yi(p0)});export{mi as __tla,li as j};
