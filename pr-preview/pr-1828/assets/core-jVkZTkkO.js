import{fx as Ml,bf as Nl,__tla as _l}from"./index-C90_3Hdb.js";import{a as jl,__tla as Tl}from"./markup-oRc0xwiy.js";import{a as Dl,__tla as Il}from"./css-pdxBI3m5.js";import{a as Ul,__tla as Bl}from"./clike-D1OTb8cp.js";import{a as Hl,__tla as Rl}from"./javascript-YrG3AT_z.js";let xn,zl=Promise.all([(()=>{try{return _l}catch{}})(),(()=>{try{return Tl}catch{}})(),(()=>{try{return Il}catch{}})(),(()=>{try{return Bl}catch{}})(),(()=>{try{return Rl}catch{}})()]).then(async()=>{function vn(e,n){for(var t=0;t<n.length;t++){const l=n[t];if(typeof l!="string"&&!Array.isArray(l)){for(const f in l)if(f!=="default"&&!(f in e)){const d=Object.getOwnPropertyDescriptor(l,f);d&&Object.defineProperty(e,f,d.get?d:{enumerable:!0,get:()=>l[f]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var Oe=Me,pe=Me.prototype;pe.space=null,pe.normal={},pe.property={};function Me(e,n,t){this.property=e,this.normal=n,t&&(this.space=t)}var Ne=Ml,yn=Oe,bn=wn;function wn(e){for(var n=e.length,t=[],l=[],f=-1,d,x;++f<n;)d=e[f],t.push(d.property),l.push(d.normal),x=d.space;return new yn(Ne.apply(null,t),Ne.apply(null,l),x)}var de=Cn;function Cn(e){return e.toLowerCase()}var _e=je,j=je.prototype;j.space=null,j.attribute=null,j.property=null,j.boolean=!1,j.booleanish=!1,j.overloadedBoolean=!1,j.number=!1,j.commaSeparated=!1,j.spaceSeparated=!1,j.commaOrSpaceSeparated=!1,j.mustUseProperty=!1,j.defined=!1;function je(e,n){this.property=e,this.attribute=n}var B={},Sn=0;B.boolean=J(),B.booleanish=J(),B.overloadedBoolean=J(),B.number=J(),B.spaceSeparated=J(),B.commaSeparated=J(),B.commaOrSpaceSeparated=J();function J(){return Math.pow(2,++Sn)}var Te=_e,De=B,Ie=ge;ge.prototype=new Te,ge.prototype.defined=!0;var Ue=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],An=Ue.length;function ge(e,n,t,l){var f=-1,d;for(Be(this,"space",l),Te.call(this,e,n);++f<An;)d=Ue[f],Be(this,d,(t&De[d])===De[d])}function Be(e,n,t){t&&(e[n]=t)}var He=de,kn=Oe,Ln=Ie,ne=En;function En(e){var n=e.space,t=e.mustUseProperty||[],l=e.attributes||{},f=e.properties,d=e.transform,x={},c={},h,k;for(h in f)k=new Ln(h,d(l,h),f[h],n),t.indexOf(h)!==-1&&(k.mustUseProperty=!0),x[h]=k,c[He(h)]=h,c[He(k.attribute)]=h;return new kn(x,c,n)}var Pn=ne,On=Pn({space:"xlink",transform:Mn,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function Mn(e,n){return"xlink:"+n.slice(5).toLowerCase()}var Nn=ne,_n=Nn({space:"xml",transform:jn,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function jn(e,n){return"xml:"+n.slice(3).toLowerCase()}var Tn=Dn;function Dn(e,n){return n in e?e[n]:n}var In=Tn,Re=Un;function Un(e,n){return In(e,n.toLowerCase())}var Bn=ne,Hn=Re,Rn=Bn({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Hn,properties:{xmlns:null,xmlnsXLink:null}}),he=B,zn=ne,N=he.booleanish,T=he.number,G=he.spaceSeparated,qn=zn({transform:Wn,properties:{ariaActiveDescendant:null,ariaAtomic:N,ariaAutoComplete:null,ariaBusy:N,ariaChecked:N,ariaColCount:T,ariaColIndex:T,ariaColSpan:T,ariaControls:G,ariaCurrent:null,ariaDescribedBy:G,ariaDetails:null,ariaDisabled:N,ariaDropEffect:G,ariaErrorMessage:null,ariaExpanded:N,ariaFlowTo:G,ariaGrabbed:N,ariaHasPopup:null,ariaHidden:N,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:G,ariaLevel:T,ariaLive:null,ariaModal:N,ariaMultiLine:N,ariaMultiSelectable:N,ariaOrientation:null,ariaOwns:G,ariaPlaceholder:null,ariaPosInSet:T,ariaPressed:N,ariaReadOnly:N,ariaRelevant:null,ariaRequired:N,ariaRoleDescription:G,ariaRowCount:T,ariaRowIndex:T,ariaRowSpan:T,ariaSelected:N,ariaSetSize:T,ariaSort:null,ariaValueMax:T,ariaValueMin:T,ariaValueNow:T,ariaValueText:null,role:null}});function Wn(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}var Q=B,Vn=ne,$n=Re,m=Q.boolean,Fn=Q.overloadedBoolean,te=Q.booleanish,y=Q.number,O=Q.spaceSeparated,ie=Q.commaSeparated,Kn=Vn({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:$n,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ie,acceptCharset:O,accessKey:O,action:null,allow:null,allowFullScreen:m,allowPaymentRequest:m,allowUserMedia:m,alt:null,as:null,async:m,autoCapitalize:null,autoComplete:O,autoFocus:m,autoPlay:m,capture:m,charSet:null,checked:m,cite:null,className:O,cols:y,colSpan:null,content:null,contentEditable:te,controls:m,controlsList:O,coords:y|ie,crossOrigin:null,data:null,dateTime:null,decoding:null,default:m,defer:m,dir:null,dirName:null,disabled:m,download:Fn,draggable:te,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:m,formTarget:null,headers:O,height:y,hidden:m,high:y,href:null,hrefLang:null,htmlFor:O,httpEquiv:O,id:null,imageSizes:null,imageSrcSet:ie,inputMode:null,integrity:null,is:null,isMap:m,itemId:null,itemProp:O,itemRef:O,itemScope:m,itemType:O,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:m,low:y,manifest:null,max:null,maxLength:y,media:null,method:null,min:null,minLength:y,multiple:m,muted:m,name:null,nonce:null,noModule:m,noValidate:m,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:m,optimum:y,pattern:null,ping:O,placeholder:null,playsInline:m,poster:null,preload:null,readOnly:m,referrerPolicy:null,rel:O,required:m,reversed:m,rows:y,rowSpan:y,sandbox:O,scope:null,scoped:m,seamless:m,selected:m,shape:null,size:y,sizes:null,slot:null,span:y,spellCheck:te,src:null,srcDoc:null,srcLang:null,srcSet:ie,start:y,step:null,style:null,tabIndex:y,target:null,title:null,translate:null,type:null,typeMustMatch:m,useMap:null,value:te,width:y,wrap:null,align:null,aLink:null,archive:O,axis:null,background:null,bgColor:null,border:y,borderColor:null,bottomMargin:y,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:m,declare:m,event:null,face:null,frame:null,frameBorder:null,hSpace:y,leftMargin:y,link:null,longDesc:null,lowSrc:null,marginHeight:y,marginWidth:y,noResize:m,noHref:m,noShade:m,noWrap:m,object:null,profile:null,prompt:null,rev:null,rightMargin:y,rules:null,scheme:null,scrolling:te,standby:null,summary:null,text:null,topMargin:y,valueType:null,version:null,vAlign:null,vLink:null,vSpace:y,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:m,disableRemotePlayback:m,prefix:null,property:null,results:y,security:null,unselectable:null}}),Jn=bn,Gn=On,Yn=_n,Qn=Rn,Xn=qn,Zn=Kn,et=Jn([Yn,Gn,Qn,Xn,Zn]),nt=de,tt=Ie,rt=_e,me="data",at=it,lt=/^data[-\w.:]+$/i,ze=/-[a-z]/g,ot=/[A-Z]/g;function it(e,n){var t=nt(n),l=n,f=rt;return t in e.normal?e.property[e.normal[t]]:(t.length>4&&t.slice(0,4)===me&&lt.test(n)&&(n.charAt(4)==="-"?l=ut(n):n=ct(n),f=tt),new f(l,n))}function ut(e){var n=e.slice(5).replace(ze,ft);return me+n.charAt(0).toUpperCase()+n.slice(1)}function ct(e){var n=e.slice(4);return ze.test(n)?e:(n=n.replace(ot,st),n.charAt(0)!=="-"&&(n="-"+n),me+n)}function st(e){return"-"+e.toLowerCase()}function ft(e){return e.charAt(1).toUpperCase()}var pt=dt,qe=/[#.]/g;function dt(e,n){for(var t=e||"",l=n||"div",f={},d=0,x,c,h;d<t.length;)qe.lastIndex=d,h=qe.exec(t),x=t.slice(d,h?h.index:t.length),x&&(c?c==="#"?f.id=x:f.className?f.className.push(x):f.className=[x]:l=x,d+=x.length),h&&(c=h[0],d++);return{type:"element",tagName:l,properties:f,children:[]}}var xe={};xe.parse=mt,xe.stringify=xt;var We="",gt=" ",ht=/[ \t\n\r\f]+/g;function mt(e){var n=String(e||We).trim();return n===We?[]:n.split(ht)}function xt(e){return e.join(gt).trim()}var ve={};ve.parse=vt,ve.stringify=yt;var ye=",",Ve=" ",re="";function vt(e){for(var n=[],t=String(e||re),l=t.indexOf(ye),f=0,d=!1,x;!d;)l===-1&&(l=t.length,d=!0),x=t.slice(f,l).trim(),(x||!d)&&n.push(x),f=l+1,l=t.indexOf(ye,f);return n}function yt(e,n){var t=n||{},l=t.padLeft===!1?re:Ve,f=t.padRight?Ve:re;return e[e.length-1]===re&&(e=e.concat(re)),e.join(f+ye+l).trim()}var bt=at,$e=de,wt=pt,Fe=xe.parse,Ke=ve.parse,Ct=At,St={}.hasOwnProperty;function At(e,n,t){var l=t?Ot(t):null;return f;function f(x,c){var h=wt(x,n),k=Array.prototype.slice.call(arguments,2),P=h.tagName.toLowerCase(),C;if(h.tagName=l&&St.call(l,P)?l[P]:P,c&&kt(c,h)&&(k.unshift(c),c=null),c)for(C in c)d(h.properties,C,c[C]);return Je(h.children,k),h.tagName==="template"&&(h.content={type:"root",children:h.children},h.children=[]),h}function d(x,c,h){var k,P,C;h==null||h!==h||(k=bt(e,c),P=k.property,C=h,typeof C=="string"&&(k.spaceSeparated?C=Fe(C):k.commaSeparated?C=Ke(C):k.commaOrSpaceSeparated&&(C=Fe(Ke(C).join(" ")))),P==="style"&&typeof h!="string"&&(C=Pt(C)),P==="className"&&x.className&&(C=x.className.concat(C)),x[P]=Et(k,P,C))}}function kt(e,n){return typeof e=="string"||"length"in e||Lt(n.tagName,e)}function Lt(e,n){var t=n.type;return e==="input"||!t||typeof t!="string"?!1:typeof n.children=="object"&&"length"in n.children?!0:(t=t.toLowerCase(),e==="button"?t!=="menu"&&t!=="submit"&&t!=="reset"&&t!=="button":"value"in n)}function Je(e,n){var t,l;if(typeof n=="string"||typeof n=="number"){e.push({type:"text",value:String(n)});return}if(typeof n=="object"&&"length"in n){for(t=-1,l=n.length;++t<l;)Je(e,n[t]);return}if(typeof n!="object"||!("type"in n))throw new Error("Expected node, nodes, or string, got `"+n+"`");e.push(n)}function Et(e,n,t){var l,f,d;if(typeof t!="object"||!("length"in t))return Ge(e,n,t);for(f=t.length,l=-1,d=[];++l<f;)d[l]=Ge(e,n,t[l]);return d}function Ge(e,n,t){var l=t;return e.number||e.positiveNumber?!isNaN(l)&&l!==""&&(l=Number(l)):(e.boolean||e.overloadedBoolean)&&typeof l=="string"&&(l===""||$e(t)===$e(n))&&(l=!0),l}function Pt(e){var n=[],t;for(t in e)n.push([t,e[t]].join(": "));return n.join("; ")}function Ot(e){for(var n=e.length,t=-1,l={},f;++t<n;)f=e[t],l[f.toLowerCase()]=f;return l}var Mt=et,Nt=Ct,Ye=Nt(Mt,"div");Ye.displayName="html";var _t=Ye,jt=_t;const Tt="\xC6",Dt="&",It="\xC1",Ut="\xC2",Bt="\xC0",Ht="\xC5",Rt="\xC3",zt="\xC4",qt="\xA9",Wt="\xC7",Vt="\xD0",$t="\xC9",Ft="\xCA",Kt="\xC8",Jt="\xCB",Gt=">",Yt="\xCD",Qt="\xCE",Xt="\xCC",Zt="\xCF",er="<",nr="\xD1",tr="\xD3",rr="\xD4",ar="\xD2",lr="\xD8",or="\xD5",ir="\xD6",ur='"',cr="\xAE",sr="\xDE",fr="\xDA",pr="\xDB",dr="\xD9",gr="\xDC",hr="\xDD",mr="\xE1",xr="\xE2",vr="\xB4",yr="\xE6",br="\xE0",wr="&",Cr="\xE5",Sr="\xE3",Ar="\xE4",kr="\xA6",Lr="\xE7",Er="\xB8",Pr="\xA2",Or="\xA9",Mr="\xA4",Nr="\xB0",_r="\xF7",jr="\xE9",Tr="\xEA",Dr="\xE8",Ir="\xF0",Ur="\xEB",Br="\xBD",Hr="\xBC",Rr="\xBE",zr=">",qr="\xED",Wr="\xEE",Vr="\xA1",$r="\xEC",Fr="\xBF",Kr="\xEF",Jr="\xAB",Gr="<",Yr="\xAF",Qr="\xB5",Xr="\xB7",Zr="\xA0",ea="\xAC",na="\xF1",ta="\xF3",ra="\xF4",aa="\xF2",la="\xAA",oa="\xBA",ia="\xF8",ua="\xF5",ca="\xF6",sa="\xB6",fa="\xB1",pa="\xA3",da='"',ga="\xBB",ha="\xAE",ma="\xA7",xa="\xAD",va="\xB9",ya="\xB2",ba="\xB3",wa="\xDF",Ca="\xFE",Sa="\xD7",Aa="\xFA",ka="\xFB",La="\xF9",Ea="\xA8",Pa="\xFC",Oa="\xFD",Ma="\xA5",Na="\xFF",_a={AElig:Tt,AMP:Dt,Aacute:It,Acirc:Ut,Agrave:Bt,Aring:Ht,Atilde:Rt,Auml:zt,COPY:qt,Ccedil:Wt,ETH:Vt,Eacute:$t,Ecirc:Ft,Egrave:Kt,Euml:Jt,GT:Gt,Iacute:Yt,Icirc:Qt,Igrave:Xt,Iuml:Zt,LT:er,Ntilde:nr,Oacute:tr,Ocirc:rr,Ograve:ar,Oslash:lr,Otilde:or,Ouml:ir,QUOT:ur,REG:cr,THORN:sr,Uacute:fr,Ucirc:pr,Ugrave:dr,Uuml:gr,Yacute:hr,aacute:mr,acirc:xr,acute:vr,aelig:yr,agrave:br,amp:wr,aring:Cr,atilde:Sr,auml:Ar,brvbar:kr,ccedil:Lr,cedil:Er,cent:Pr,copy:Or,curren:Mr,deg:Nr,divide:_r,eacute:jr,ecirc:Tr,egrave:Dr,eth:Ir,euml:Ur,frac12:Br,frac14:Hr,frac34:Rr,gt:zr,iacute:qr,icirc:Wr,iexcl:Vr,igrave:$r,iquest:Fr,iuml:Kr,laquo:Jr,lt:Gr,macr:Yr,micro:Qr,middot:Xr,nbsp:Zr,not:ea,ntilde:na,oacute:ta,ocirc:ra,ograve:aa,ordf:la,ordm:oa,oslash:ia,otilde:ua,ouml:ca,para:sa,plusmn:fa,pound:pa,quot:da,raquo:ga,reg:ha,sect:ma,shy:xa,sup1:va,sup2:ya,sup3:ba,szlig:wa,thorn:Ca,times:Sa,uacute:Aa,ucirc:ka,ugrave:La,uml:Ea,uuml:Pa,yacute:Oa,yen:Ma,yuml:Na},ja={0:"\uFFFD",128:"\u20AC",130:"\u201A",131:"\u0192",132:"\u201E",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02C6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017D",145:"\u2018",146:"\u2019",147:"\u201C",148:"\u201D",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02DC",153:"\u2122",154:"\u0161",155:"\u203A",156:"\u0153",158:"\u017E",159:"\u0178"};var Qe=Ta;function Ta(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=48&&n<=57}var Da=Ia;function Ia(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}var Ua=Ba;function Ba(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}var Ha=Ua,Ra=Qe,za=qa;function qa(e){return Ha(e)||Ra(e)}var ue,Wa=59,Va=$a;function $a(e){var n="&"+e+";",t;return ue=ue||document.createElement("i"),ue.innerHTML=n,t=ue.textContent,t.charCodeAt(t.length-1)===Wa&&e!=="semi"||t===n?!1:t}var Xe=_a,Ze=ja,Fa=Qe,Ka=Da,en=za,Ja=Va,Ga=ul,Ya={}.hasOwnProperty,X=String.fromCharCode,Qa=Function.prototype,nn={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},Xa=9,tn=10,Za=12,el=32,rn=38,nl=59,tl=60,rl=61,al=35,ll=88,ol=120,il=65533,Z="named",be="hexadecimal",we="decimal",Ce={};Ce[be]=16,Ce[we]=10;var ce={};ce[Z]=en,ce[we]=Fa,ce[be]=Ka;var an=1,ln=2,on=3,un=4,cn=5,Se=6,sn=7,W={};W[an]="Named character references must be terminated by a semicolon",W[ln]="Numeric character references must be terminated by a semicolon",W[on]="Named character references cannot be empty",W[un]="Numeric character references cannot be empty",W[cn]="Named character references must be known",W[Se]="Numeric character references cannot be disallowed",W[sn]="Numeric character references cannot be outside the permissible Unicode range";function ul(e,n){var t={},l,f;n||(n={});for(f in nn)l=n[f],t[f]=l??nn[f];return(t.position.indent||t.position.start)&&(t.indent=t.position.indent||[],t.position=t.position.start),cl(e,t)}function cl(e,n){var t=n.additional,l=n.nonTerminated,f=n.text,d=n.reference,x=n.warning,c=n.textContext,h=n.referenceContext,k=n.warningContext,P=n.position,C=n.indent||[],V=e.length,H=0,se=-1,_=P.column||1,ee=P.line||1,R="",a=[],r,u,i,o,p,g,s,v,S,D,z,$,q,I,oe,w,M,L,b;for(typeof t=="string"&&(t=t.charCodeAt(0)),w=E(),v=x?ke:Qa,H--,V++;++H<V;)if(p===tn&&(_=C[se]||1),p=e.charCodeAt(H),p===rn){if(s=e.charCodeAt(H+1),s===Xa||s===tn||s===Za||s===el||s===rn||s===tl||s!==s||t&&s===t){R+=X(p),_++;continue}for(q=H+1,$=q,b=q,s===al?(b=++$,s=e.charCodeAt(b),s===ll||s===ol?(I=be,b=++$):I=we):I=Z,r="",z="",o="",oe=ce[I],b--;++b<V&&(s=e.charCodeAt(b),!!oe(s));)o+=X(s),I===Z&&Ya.call(Xe,o)&&(r=o,z=Xe[o]);i=e.charCodeAt(b)===nl,i&&(b++,u=I===Z?Ja(o):!1,u&&(r=o,z=u)),L=1+b-q,!i&&!l||(o?I===Z?(i&&!z?v(cn,1):(r!==o&&(b=$+r.length,L=1+b-$,i=!1),i||(S=r?an:on,n.attribute?(s=e.charCodeAt(b),s===rl?(v(S,L),z=null):en(s)?z=null:v(S,L)):v(S,L))),g=z):(i||v(ln,L),g=parseInt(o,Ce[I]),sl(g)?(v(sn,L),g=X(il)):g in Ze?(v(Se,L),g=Ze[g]):(D="",fl(g)&&v(Se,L),g>65535&&(g-=65536,D+=X(g>>>10|55296),g=56320|g&1023),g=D+X(g))):I!==Z&&v(un,L)),g?(U(),w=E(),H=b-1,_+=b-q+1,a.push(g),M=E(),M.offset++,d&&d.call(h,g,{start:w,end:M},e.slice(q-1,b)),w=M):(o=e.slice(q-1,b),R+=o,_+=o.length,H=b-1)}else p===10&&(ee++,se++,_=0),p===p?(R+=X(p),_++):U();return a.join("");function E(){return{line:ee,column:_,offset:H+(P.offset||0)}}function ke(F,Y){var K=E();K.column+=Y,K.offset+=Y,x.call(k,W[F],K,F)}function U(){R&&(a.push(R),f&&f.call(c,R,{start:w,end:E()}),R="")}}function sl(e){return e>=55296&&e<=57343||e>1114111}function fl(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var fn={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},t=function(l){var f=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,x={},c={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function a(r){return r instanceof h?new h(r.type,a(r.content),r.alias):Array.isArray(r)?r.map(a):r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++d}),a.__id},clone:function a(r,u){u=u||{};var i,o;switch(c.util.type(r)){case"Object":if(o=c.util.objId(r),u[o])return u[o];i={},u[o]=i;for(var p in r)r.hasOwnProperty(p)&&(i[p]=a(r[p],u));return i;case"Array":return o=c.util.objId(r),u[o]?u[o]:(i=[],u[o]=i,r.forEach(function(g,s){i[s]=a(g,u)}),i);default:return r}},getLanguage:function(a){for(;a;){var r=f.exec(a.className);if(r)return r[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,r){a.className=a.className.replace(RegExp(f,"gi"),""),a.classList.add("language-"+r)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(i){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(a){var r=document.getElementsByTagName("script");for(var u in r)if(r[u].src==a)return r[u]}return null}},isActive:function(a,r,u){for(var i="no-"+r;a;){var o=a.classList;if(o.contains(r))return!0;if(o.contains(i))return!1;a=a.parentElement}return!!u}},languages:{plain:x,plaintext:x,text:x,txt:x,extend:function(a,r){var u=c.util.clone(c.languages[a]);for(var i in r)u[i]=r[i];return u},insertBefore:function(a,r,u,i){i=i||c.languages;var o=i[a],p={};for(var g in o)if(o.hasOwnProperty(g)){if(g==r)for(var s in u)u.hasOwnProperty(s)&&(p[s]=u[s]);u.hasOwnProperty(g)||(p[g]=o[g])}var v=i[a];return i[a]=p,c.languages.DFS(c.languages,function(S,D){D===v&&S!=a&&(this[S]=p)}),p},DFS:function a(r,u,i,o){o=o||{};var p=c.util.objId;for(var g in r)if(r.hasOwnProperty(g)){u.call(r,g,r[g],i||g);var s=r[g],v=c.util.type(s);v==="Object"&&!o[p(s)]?(o[p(s)]=!0,a(s,u,null,o)):v==="Array"&&!o[p(s)]&&(o[p(s)]=!0,a(s,u,g,o))}}},plugins:{},highlightAll:function(a,r){c.highlightAllUnder(document,a,r)},highlightAllUnder:function(a,r,u){var i={callback:u,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),c.hooks.run("before-all-elements-highlight",i);for(var o=0,p;p=i.elements[o++];)c.highlightElement(p,r===!0,i.callback)},highlightElement:function(a,r,u){var i=c.util.getLanguage(a),o=c.languages[i];c.util.setLanguage(a,i);var p=a.parentElement;p&&p.nodeName.toLowerCase()==="pre"&&c.util.setLanguage(p,i);var g=a.textContent,s={element:a,language:i,grammar:o,code:g};function v(D){s.highlightedCode=D,c.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,c.hooks.run("after-highlight",s),c.hooks.run("complete",s),u&&u.call(s.element)}if(c.hooks.run("before-sanity-check",s),p=s.element.parentElement,p&&p.nodeName.toLowerCase()==="pre"&&!p.hasAttribute("tabindex")&&p.setAttribute("tabindex","0"),!s.code){c.hooks.run("complete",s),u&&u.call(s.element);return}if(c.hooks.run("before-highlight",s),!s.grammar){v(c.util.encode(s.code));return}if(r&&l.Worker){var S=new Worker(c.filename);S.onmessage=function(D){v(D.data)},S.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else v(c.highlight(s.code,s.grammar,s.language))},highlight:function(a,r,u){var i={code:a,grammar:r,language:u};if(c.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=c.tokenize(i.code,i.grammar),c.hooks.run("after-tokenize",i),h.stringify(c.util.encode(i.tokens),i.language)},tokenize:function(a,r){var u=r.rest;if(u){for(var i in u)r[i]=u[i];delete r.rest}var o=new C;return V(o,o.head,a),P(a,o,r,o.head,0),se(o)},hooks:{all:{},add:function(a,r){var u=c.hooks.all;u[a]=u[a]||[],u[a].push(r)},run:function(a,r){var u=c.hooks.all[a];if(!(!u||!u.length))for(var i=0,o;o=u[i++];)o(r)}},Token:h};l.Prism=c;function h(a,r,u,i){this.type=a,this.content=r,this.alias=u,this.length=(i||"").length|0}h.stringify=function a(r,u){if(typeof r=="string")return r;if(Array.isArray(r)){var i="";return r.forEach(function(v){i+=a(v,u)}),i}var o={type:r.type,content:a(r.content,u),tag:"span",classes:["token",r.type],attributes:{},language:u},p=r.alias;p&&(Array.isArray(p)?Array.prototype.push.apply(o.classes,p):o.classes.push(p)),c.hooks.run("wrap",o);var g="";for(var s in o.attributes)g+=" "+s+'="'+(o.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+g+">"+o.content+"</"+o.tag+">"};function k(a,r,u,i){a.lastIndex=r;var o=a.exec(u);if(o&&i&&o[1]){var p=o[1].length;o.index+=p,o[0]=o[0].slice(p)}return o}function P(a,r,u,i,o,p){for(var g in u)if(!(!u.hasOwnProperty(g)||!u[g])){var s=u[g];s=Array.isArray(s)?s:[s];for(var v=0;v<s.length;++v){if(p&&p.cause==g+","+v)return;var S=s[v],D=S.inside,z=!!S.lookbehind,$=!!S.greedy,q=S.alias;if($&&!S.pattern.global){var I=S.pattern.toString().match(/[imsuy]*$/)[0];S.pattern=RegExp(S.pattern.source,I+"g")}for(var oe=S.pattern||S,w=i.next,M=o;w!==r.tail&&!(p&&M>=p.reach);M+=w.value.length,w=w.next){var L=w.value;if(r.length>a.length)return;if(!(L instanceof h)){var b=1,E;if($){if(E=k(oe,M,a,z),!E||E.index>=a.length)break;var Y=E.index,ke=E.index+E[0].length,U=M;for(U+=w.value.length;Y>=U;)w=w.next,U+=w.value.length;if(U-=w.value.length,M=U,w.value instanceof h)continue;for(var F=w;F!==r.tail&&(U<ke||typeof F.value=="string");F=F.next)b++,U+=F.value.length;b--,L=a.slice(M,U),E.index-=M}else if(E=k(oe,0,L,z),!E)continue;var Y=E.index,K=E[0],Le=L.slice(0,Y),mn=L.slice(Y+K.length),Ee=M+L.length;p&&Ee>p.reach&&(p.reach=Ee);var fe=w.prev;Le&&(fe=V(r,fe,Le),M+=Le.length),H(r,fe,b);var Ol=new h(g,D?c.tokenize(K,D):K,q,K);if(w=V(r,fe,Ol),mn&&V(r,w,mn),b>1){var Pe={cause:g+","+v,reach:Ee};P(a,r,u,w.prev,M,Pe),p&&Pe.reach>p.reach&&(p.reach=Pe.reach)}}}}}}function C(){var a={value:null,prev:null,next:null},r={value:null,prev:a,next:null};a.next=r,this.head=a,this.tail=r,this.length=0}function V(a,r,u){var i=r.next,o={value:u,prev:r,next:i};return r.next=o,i.prev=o,a.length++,o}function H(a,r,u){for(var i=r.next,o=0;o<u&&i!==a.tail;o++)i=i.next;r.next=i,i.prev=r,a.length-=o}function se(a){for(var r=[],u=a.head.next;u!==a.tail;)r.push(u.value),u=u.next;return r}if(!l.document)return l.addEventListener&&(c.disableWorkerMessageHandler||l.addEventListener("message",function(a){var r=JSON.parse(a.data),u=r.language,i=r.code,o=r.immediateClose;l.postMessage(c.highlight(i,c.languages[u],u)),o&&l.close()},!1)),c;var _=c.util.currentScript();_&&(c.filename=_.src,_.hasAttribute("data-manual")&&(c.manual=!0));function ee(){c.manual||c.highlightAll()}if(!c.manual){var R=document.readyState;R==="loading"||R==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",ee):window.requestAnimationFrame?window.requestAnimationFrame(ee):window.setTimeout(ee,16)}return c}(n);e.exports&&(e.exports=t),typeof globalThis<"u"&&(globalThis.Prism=t)})(fn);var pl=fn.exports,ae=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof globalThis=="object"?globalThis:{},dl=Pl();ae.Prism={manual:!0,disableWorkerMessageHandler:!0};var gl=jt,hl=Ga,pn=pl,ml=jl,xl=Dl,vl=Ul,yl=Hl;dl();var Ae={}.hasOwnProperty;function dn(){}dn.prototype=pn;var A=new dn,gn=A;A.highlight=wl,A.register=le,A.alias=bl,A.registered=Cl,A.listLanguages=Sl,le(ml),le(xl),le(vl),le(yl),A.util.encode=Ll,A.Token.stringify=Al;function le(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");A.languages[e.displayName]===void 0&&e(A)}function bl(e,n){var t=A.languages,l=e,f,d,x,c;n&&(l={},l[e]=n);for(f in l)for(d=l[f],d=typeof d=="string"?[d]:d,x=d.length,c=-1;++c<x;)t[d[c]]=t[f]}function wl(e,n){var t=pn.highlight,l;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(A.util.type(n)==="Object")l=n,n=null;else{if(typeof n!="string")throw new Error("Expected `string` for `name`, got `"+n+"`");if(Ae.call(A.languages,n))l=A.languages[n];else throw new Error("Unknown language: `"+n+"` is not registered")}return t.call(this,e,l,n)}function Cl(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Ae.call(A.languages,e)}function Sl(){var e=A.languages,n=[],t;for(t in e)Ae.call(e,t)&&typeof e[t]=="object"&&n.push(t);return n}function Al(e,n,t){var l;return typeof e=="string"?{type:"text",value:e}:A.util.type(e)==="Array"?kl(e,n):(l={type:e.type,content:A.Token.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t},e.alias&&(l.classes=l.classes.concat(e.alias)),A.hooks.run("wrap",l),gl(l.tag+"."+l.classes.join("."),El(l.attributes),l.content))}function kl(e,n){for(var t=[],l=e.length,f=-1,d;++f<l;)d=e[f],d!==""&&d!==null&&d!==void 0&&t.push(d);for(f=-1,l=t.length;++f<l;)d=t[f],t[f]=A.Token.stringify(d,n,t);return t}function Ll(e){return e}function El(e){var n;for(n in e)e[n]=hl(e[n]);return e}function Pl(){var e="Prism"in ae,n=e?ae.Prism:void 0;return t;function t(){e?ae.Prism=n:delete ae.Prism,e=void 0,n=void 0}}let hn;hn=Nl(gn),xn=vn({__proto__:null,default:hn},[gn])});export{zl as __tla,xn as c};
