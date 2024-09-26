import{u as _e}from"./ucs2length-xALg2LS9.js";import{f as Ue}from"./formats-DzAOFwGz.js";import{eL as X,__tla as Je}from"./index-YvQQ39y3.js";let i,Se,Xe=Promise.all([(()=>{try{return Je}catch{}})()]).then(async()=>{let y,ce,ee,be,Ne,Oe,fe,xe,Te,Ie;Se=i,y=_e.default,ce=new RegExp("^[\\w ]+$","u"),ee=new RegExp("^[\\w]+$","u"),be=new RegExp("^[ \\w]+$","u"),Ne=new RegExp("^[ \\w\\.,:]+$","u"),Oe=Ue.fullFormats["date-time"],fe=Ue.fullFormats.uri,xe=new RegExp("^0x[a-fA-F0-9]{40}$","u"),Te=new RegExp("^[ \\S+]+$","u"),Ie=new RegExp("^\\S+$","u");function re(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=c.instancePath,t=O===void 0?"":O;c.parentData,c.parentDataProperty,c.rootData;var n=null,p=0,a=p,e=!1,l=p,v=p,m=!1,g=p;if(p===g)if(typeof r=="string"){if(y(r)>42){var o={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};n===null?n=[o]:n.push(o),p++}else if(y(r)<1){var s={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};n===null?n=[s]:n.push(s),p++}}else{var x={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};n===null?n=[x]:n.push(x),p++}var P=g===p;if(m=m||P,!m){var h=p;if(typeof r!="boolean"){var d={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};n===null?n=[d]:n.push(d),p++}var P=h===p;if(m=m||P,!m){var j=p;if(!(typeof r=="number"&&isFinite(r))){var b={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};n===null?n=[b]:n.push(b),p++}var P=j===p;if(m=m||P,!m){var M=p;if(r!==null){var w={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};n===null?n=[w]:n.push(w),p++}var P=M===p;m=m||P}}}if(m)p=v,n!==null&&(v?n.length=v:n=null);else{var T={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};n===null?n=[T]:n.push(T),p++}var $=l===p;if(e=e||$,e)p=a,n!==null&&(a?n.length=a:n=null);else{var k={instancePath:t,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return n===null?n=[k]:n.push(k),p++,re.errors=n,!1}return re.errors=n,p===0}function se(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=c.instancePath,t=O===void 0?"":O;c.parentData,c.parentDataProperty;var n=c.rootData,p=n===void 0?r:n,a=null,e=0,l=e,v=!1,m=e,g=e,o=!1,s=e;if(e===s)if(typeof r=="string"){if(y(r)>42){var x={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};a===null?a=[x]:a.push(x),e++}else if(y(r)<1){var P={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};a===null?a=[P]:a.push(P),e++}}else{var h={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};a===null?a=[h]:a.push(h),e++}var d=s===e;if(o=o||d,!o){var j=e;if(typeof r!="boolean"){var b={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};a===null?a=[b]:a.push(b),e++}var d=j===e;if(o=o||d,!o){var M=e;if(!(typeof r=="number"&&isFinite(r))){var w={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};a===null?a=[w]:a.push(w),e++}var d=M===e;if(o=o||d,!o){var T=e;if(r!==null){var $={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};a===null?a=[$]:a.push($),e++}var d=T===e;o=o||d}}}if(o)e=g,a!==null&&(g?a.length=g:a=null);else{var k={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};a===null?a=[k]:a.push(k),e++}var N=m===e;if(v=v||N,!v){var q=e;if(e===q)if(r&&X(r)=="object"&&!Array.isArray(r))if(Object.keys(r).length>10){var I={instancePath:t,schemaPath:"#/anyOf/1/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"};a===null?a=[I]:a.push(I),e++}else{for(var f in r){var A=e,W=e;if(e===W)if(typeof f=="string"){if(y(f)>40){var D={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:f};a===null?a=[D]:a.push(D),e++}else if(y(f)<1){var C={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:f};a===null?a=[C]:a.push(C),e++}else if(!ee.test(f)){var E={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:f};a===null?a=[E]:a.push(E),e++}}else{var U={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:f};a===null?a=[U]:a.push(U),e++}var L=A===e;if(!L){var S={instancePath:t,schemaPath:"#/anyOf/1/propertyNames",keyword:"propertyNames",params:{propertyName:f},message:"property name must be valid"};a===null?a=[S]:a.push(S),e++;break}}if(L)for(var V in r){var Y=e;re(r[V],{instancePath:t+"/"+V.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:r,parentDataProperty:V,rootData:p})||(a=a===null?re.errors:a.concat(re.errors),e=a.length);var H=Y===e;if(!H)break}}else{var F={instancePath:t,schemaPath:"#/anyOf/1/type",keyword:"type",params:{type:"object"},message:"must be object"};a===null?a=[F]:a.push(F),e++}var N=q===e;v=v||N}if(v)e=l,a!==null&&(l?a.length=l:a=null);else{var Q={instancePath:t,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return a===null?a=[Q]:a.push(Q),e++,se.errors=a,!1}return se.errors=a,e===0}function ie(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=c.instancePath,t=O===void 0?"":O;c.parentData,c.parentDataProperty;var n=c.rootData,p=n===void 0?r:n,a=null,e=0,l=e,v=!1,m=e,g=e,o=!1,s=e;if(e===s)if(typeof r=="string"){if(y(r)>42){var x={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};a===null?a=[x]:a.push(x),e++}else if(y(r)<1){var P={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};a===null?a=[P]:a.push(P),e++}}else{var h={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};a===null?a=[h]:a.push(h),e++}var d=s===e;if(o=o||d,!o){var j=e;if(typeof r!="boolean"){var b={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};a===null?a=[b]:a.push(b),e++}var d=j===e;if(o=o||d,!o){var M=e;if(!(typeof r=="number"&&isFinite(r))){var w={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};a===null?a=[w]:a.push(w),e++}var d=M===e;if(o=o||d,!o){var T=e;if(r!==null){var $={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};a===null?a=[$]:a.push($),e++}var d=T===e;o=o||d}}}if(o)e=g,a!==null&&(g?a.length=g:a=null);else{var k={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};a===null?a=[k]:a.push(k),e++}var N=m===e;if(v=v||N,!v){var q=e;if(e===q)if(r&&X(r)=="object"&&!Array.isArray(r))if(Object.keys(r).length>10){var I={instancePath:t,schemaPath:"#/anyOf/1/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"};a===null?a=[I]:a.push(I),e++}else{for(var f in r){var A=e,W=e;if(e===W)if(typeof f=="string"){if(y(f)>40){var D={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:f};a===null?a=[D]:a.push(D),e++}else if(y(f)<1){var C={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:f};a===null?a=[C]:a.push(C),e++}else if(!ee.test(f)){var E={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:f};a===null?a=[E]:a.push(E),e++}}else{var U={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:f};a===null?a=[U]:a.push(U),e++}var L=A===e;if(!L){var S={instancePath:t,schemaPath:"#/anyOf/1/propertyNames",keyword:"propertyNames",params:{propertyName:f},message:"property name must be valid"};a===null?a=[S]:a.push(S),e++;break}}if(L)for(var V in r){var Y=e;se(r[V],{instancePath:t+"/"+V.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:r,parentDataProperty:V,rootData:p})||(a=a===null?se.errors:a.concat(se.errors),e=a.length);var H=Y===e;if(!H)break}}else{var F={instancePath:t,schemaPath:"#/anyOf/1/type",keyword:"type",params:{type:"object"},message:"must be object"};a===null?a=[F]:a.push(F),e++}var N=q===e;v=v||N}if(v)e=l,a!==null&&(l?a.length=l:a=null);else{var Q={instancePath:t,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return a===null?a=[Q]:a.push(Q),e++,ie.errors=a,!1}return ie.errors=a,e===0}function z(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=c.instancePath,t=O===void 0?"":O;c.parentData,c.parentDataProperty;var n=c.rootData,p=n===void 0?r:n,a=null,e=0;if(e===0)if(r&&X(r)=="object"&&!Array.isArray(r)){if(Object.keys(r).length>10)return z.errors=[{instancePath:t,schemaPath:"#/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"}],!1;for(var l in r){var v=e,m=e;if(e===m)if(typeof l=="string"){if(y(l)>40){var g={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:l};a===null?a=[g]:a.push(g),e++}else if(y(l)<1){var o={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:l};a===null?a=[o]:a.push(o),e++}else if(!ee.test(l)){var s={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:l};a===null?a=[s]:a.push(s),e++}}else{var x={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:l};a===null?a=[x]:a.push(x),e++}var P=v===e;if(!P){var h={instancePath:t,schemaPath:"#/propertyNames",keyword:"propertyNames",params:{propertyName:l},message:"property name must be valid"};return a===null?a=[h]:a.push(h),e++,z.errors=a,!1}}if(P)for(var d in r){var j=e;ie(r[d],{instancePath:t+"/"+d.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:r,parentDataProperty:d,rootData:p})||(a=a===null?ie.errors:a.concat(ie.errors),e=a.length);var b=j===e;if(!b)break}}else return z.errors=[{instancePath:t,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;return z.errors=a,e===0}function u(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=c.instancePath,t=O===void 0?"":O;c.parentData,c.parentDataProperty;var n=c.rootData,p=n===void 0?r:n,a=null,e=0;if(e===0)if(r&&X(r)=="object"&&!Array.isArray(r)){var l;if(r.chainId===void 0&&(l="chainId")||r.address===void 0&&(l="address")||r.decimals===void 0&&(l="decimals")||r.name===void 0&&(l="name")||r.symbol===void 0&&(l="symbol"))return u.errors=[{instancePath:t,schemaPath:"#/required",keyword:"required",params:{missingProperty:l},message:"must have required property '"+l+"'"}],!1;var v=e;for(var m in r)if(!(m==="chainId"||m==="address"||m==="decimals"||m==="name"||m==="symbol"||m==="logoURI"||m==="tags"||m==="extensions"))return u.errors=[{instancePath:t,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:m},message:"must NOT have additional properties"}],!1;if(v===e){if(r.chainId!==void 0){var g=r.chainId,o=e;if(!(typeof g=="number"&&!(g%1)&&!isNaN(g)&&isFinite(g)))return u.errors=[{instancePath:t+"/chainId",schemaPath:"#/properties/chainId/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===o&&typeof g=="number"&&isFinite(g)&&(g<1||isNaN(g)))return u.errors=[{instancePath:t+"/chainId",schemaPath:"#/properties/chainId/minimum",keyword:"minimum",params:{comparison:">=",limit:1},message:"must be >= 1"}],!1;var s=o===e}else var s=!0;if(s){if(r.address!==void 0){var x=r.address,P=e;if(e===P)if(typeof x=="string"){if(!xe.test(x))return u.errors=[{instancePath:t+"/address",schemaPath:"#/properties/address/pattern",keyword:"pattern",params:{pattern:"^0x[a-fA-F0-9]{40}$"},message:'must match pattern "^0x[a-fA-F0-9]{40}$"'}],!1}else return u.errors=[{instancePath:t+"/address",schemaPath:"#/properties/address/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=P===e}else var s=!0;if(s){if(r.decimals!==void 0){var h=r.decimals,d=e;if(!(typeof h=="number"&&!(h%1)&&!isNaN(h)&&isFinite(h)))return u.errors=[{instancePath:t+"/decimals",schemaPath:"#/properties/decimals/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===d&&typeof h=="number"&&isFinite(h)){if(h>255||isNaN(h))return u.errors=[{instancePath:t+"/decimals",schemaPath:"#/properties/decimals/maximum",keyword:"maximum",params:{comparison:"<=",limit:255},message:"must be <= 255"}],!1;if(h<0||isNaN(h))return u.errors=[{instancePath:t+"/decimals",schemaPath:"#/properties/decimals/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1}var s=d===e}else var s=!0;if(s){if(r.name!==void 0){var j=r.name,b=e,M=e,w=!1,T=e;if(j!==""){var $={instancePath:t+"/name",schemaPath:"#/properties/name/anyOf/0/const",keyword:"const",params:{allowedValue:""},message:"must be equal to constant"};a===null?a=[$]:a.push($),e++}var k=T===e;if(w=w||k,!w){var N=e;if(typeof j=="string"&&!Te.test(j)){var q={instancePath:t+"/name",schemaPath:"#/properties/name/anyOf/1/pattern",keyword:"pattern",params:{pattern:"^[ \\S+]+$"},message:'must match pattern "^[ \\S+]+$"'};a===null?a=[q]:a.push(q),e++}var k=N===e;w=w||k}if(w)e=M,a!==null&&(M?a.length=M:a=null);else{var I={instancePath:t+"/name",schemaPath:"#/properties/name/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return a===null?a=[I]:a.push(I),e++,u.errors=a,!1}if(e===b)if(typeof j=="string"){if(y(j)>40)return u.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters"}],!1;if(y(j)<0)return u.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/minLength",keyword:"minLength",params:{limit:0},message:"must NOT have fewer than 0 characters"}],!1}else return u.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=b===e}else var s=!0;if(s){if(r.symbol!==void 0){var f=r.symbol,A=e,W=e,D=!1,C=e;if(f!==""){var E={instancePath:t+"/symbol",schemaPath:"#/properties/symbol/anyOf/0/const",keyword:"const",params:{allowedValue:""},message:"must be equal to constant"};a===null?a=[E]:a.push(E),e++}var U=C===e;if(D=D||U,!D){var L=e;if(typeof f=="string"&&!Ie.test(f)){var S={instancePath:t+"/symbol",schemaPath:"#/properties/symbol/anyOf/1/pattern",keyword:"pattern",params:{pattern:"^\\S+$"},message:'must match pattern "^\\S+$"'};a===null?a=[S]:a.push(S),e++}var U=L===e;D=D||U}if(D)e=W,a!==null&&(W?a.length=W:a=null);else{var V={instancePath:t+"/symbol",schemaPath:"#/properties/symbol/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return a===null?a=[V]:a.push(V),e++,u.errors=a,!1}if(e===A)if(typeof f=="string"){if(y(f)>20)return u.errors=[{instancePath:t+"/symbol",schemaPath:"#/properties/symbol/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(y(f)<0)return u.errors=[{instancePath:t+"/symbol",schemaPath:"#/properties/symbol/minLength",keyword:"minLength",params:{limit:0},message:"must NOT have fewer than 0 characters"}],!1}else return u.errors=[{instancePath:t+"/symbol",schemaPath:"#/properties/symbol/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=A===e}else var s=!0;if(s){if(r.logoURI!==void 0){var Y=r.logoURI,H=e;if(e===H&&e===H)if(typeof Y=="string"){if(!fe(Y))return u.errors=[{instancePath:t+"/logoURI",schemaPath:"#/properties/logoURI/format",keyword:"format",params:{format:"uri"},message:'must match format "uri"'}],!1}else return u.errors=[{instancePath:t+"/logoURI",schemaPath:"#/properties/logoURI/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=H===e}else var s=!0;if(s){if(r.tags!==void 0){var F=r.tags,Q=e;if(e===Q)if(Array.isArray(F)){if(F.length>10)return u.errors=[{instancePath:t+"/tags",schemaPath:"#/properties/tags/maxItems",keyword:"maxItems",params:{limit:10},message:"must NOT have more than 10 items"}],!1;for(var ae=!0,ge=F.length,_=0;_<ge;_++){var Z=F[_],me=e,ne=e;if(e===ne)if(typeof Z=="string"){if(y(Z)>10)return u.errors=[{instancePath:t+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/maxLength",keyword:"maxLength",params:{limit:10},message:"must NOT have more than 10 characters"}],!1;if(y(Z)<1)return u.errors=[{instancePath:t+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!ee.test(Z))return u.errors=[{instancePath:t+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"'}],!1}else return u.errors=[{instancePath:t+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var ae=me===e;if(!ae)break}}else return u.errors=[{instancePath:t+"/tags",schemaPath:"#/properties/tags/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;var s=Q===e}else var s=!0;if(s)if(r.extensions!==void 0){var de=e;z(r.extensions,{instancePath:t+"/extensions",parentData:r,parentDataProperty:"extensions",rootData:p})||(a=a===null?z.errors:a.concat(z.errors),e=a.length);var s=de===e}else var s=!0}}}}}}}}else return u.errors=[{instancePath:t,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;return u.errors=a,e===0}i=function(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=c.instancePath,t=O===void 0?"":O;c.parentData,c.parentDataProperty;var n=c.rootData,p=n===void 0?r:n,a=null,e=0;if(e===0)if(r&&X(r)=="object"&&!Array.isArray(r)){var l;if(r.name===void 0&&(l="name")||r.timestamp===void 0&&(l="timestamp")||r.version===void 0&&(l="version")||r.tokens===void 0&&(l="tokens"))return i.errors=[{instancePath:t,schemaPath:"#/required",keyword:"required",params:{missingProperty:l},message:"must have required property '"+l+"'"}],!1;var v=e;for(var m in r)if(!(m==="name"||m==="timestamp"||m==="version"||m==="tokens"||m==="tokenMap"||m==="keywords"||m==="tags"||m==="logoURI"))return i.errors=[{instancePath:t,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:m},message:"must NOT have additional properties"}],!1;if(v===e){if(r.name!==void 0){var g=r.name,o=e;if(e===o)if(typeof g=="string"){if(y(g)>30)return i.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/maxLength",keyword:"maxLength",params:{limit:30},message:"must NOT have more than 30 characters"}],!1;if(y(g)<1)return i.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!ce.test(g))return i.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/pattern",keyword:"pattern",params:{pattern:"^[\\w ]+$"},message:'must match pattern "^[\\w ]+$"'}],!1}else return i.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=o===e}else var s=!0;if(s){if(r.timestamp!==void 0){var x=r.timestamp,P=e;if(e===P&&e===P)if(typeof x=="string"){if(!Oe.validate(x))return i.errors=[{instancePath:t+"/timestamp",schemaPath:"#/properties/timestamp/format",keyword:"format",params:{format:"date-time"},message:'must match format "date-time"'}],!1}else return i.errors=[{instancePath:t+"/timestamp",schemaPath:"#/properties/timestamp/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=P===e}else var s=!0;if(s){if(r.version!==void 0){var h=r.version,d=e,j=e;if(e===j)if(h&&X(h)=="object"&&!Array.isArray(h)){var b;if(h.major===void 0&&(b="major")||h.minor===void 0&&(b="minor")||h.patch===void 0&&(b="patch"))return i.errors=[{instancePath:t+"/version",schemaPath:"#/definitions/Version/required",keyword:"required",params:{missingProperty:b},message:"must have required property '"+b+"'"}],!1;var M=e;for(var w in h)if(!(w==="major"||w==="minor"||w==="patch"))return i.errors=[{instancePath:t+"/version",schemaPath:"#/definitions/Version/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:w},message:"must NOT have additional properties"}],!1;if(M===e){if(h.major!==void 0){var T=h.major,$=e;if(!(typeof T=="number"&&!(T%1)&&!isNaN(T)&&isFinite(T)))return i.errors=[{instancePath:t+"/version/major",schemaPath:"#/definitions/Version/properties/major/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===$&&typeof T=="number"&&isFinite(T)&&(T<0||isNaN(T)))return i.errors=[{instancePath:t+"/version/major",schemaPath:"#/definitions/Version/properties/major/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var k=$===e}else var k=!0;if(k){if(h.minor!==void 0){var N=h.minor,q=e;if(!(typeof N=="number"&&!(N%1)&&!isNaN(N)&&isFinite(N)))return i.errors=[{instancePath:t+"/version/minor",schemaPath:"#/definitions/Version/properties/minor/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===q&&typeof N=="number"&&isFinite(N)&&(N<0||isNaN(N)))return i.errors=[{instancePath:t+"/version/minor",schemaPath:"#/definitions/Version/properties/minor/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var k=q===e}else var k=!0;if(k)if(h.patch!==void 0){var I=h.patch,f=e;if(!(typeof I=="number"&&!(I%1)&&!isNaN(I)&&isFinite(I)))return i.errors=[{instancePath:t+"/version/patch",schemaPath:"#/definitions/Version/properties/patch/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===f&&typeof I=="number"&&isFinite(I)&&(I<0||isNaN(I)))return i.errors=[{instancePath:t+"/version/patch",schemaPath:"#/definitions/Version/properties/patch/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var k=f===e}else var k=!0}}}else return i.errors=[{instancePath:t+"/version",schemaPath:"#/definitions/Version/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var s=d===e}else var s=!0;if(s){if(r.tokens!==void 0){var A=r.tokens,W=e;if(e===W)if(Array.isArray(A)){if(A.length>1e4)return i.errors=[{instancePath:t+"/tokens",schemaPath:"#/properties/tokens/maxItems",keyword:"maxItems",params:{limit:1e4},message:"must NOT have more than 10000 items"}],!1;if(A.length<1)return i.errors=[{instancePath:t+"/tokens",schemaPath:"#/properties/tokens/minItems",keyword:"minItems",params:{limit:1},message:"must NOT have fewer than 1 items"}],!1;for(var D=!0,C=A.length,E=0;E<C;E++){var U=e;u(A[E],{instancePath:t+"/tokens/"+E,parentData:A,parentDataProperty:E,rootData:p})||(a=a===null?u.errors:a.concat(u.errors),e=a.length);var D=U===e;if(!D)break}}else return i.errors=[{instancePath:t+"/tokens",schemaPath:"#/properties/tokens/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;var s=W===e}else var s=!0;if(s){if(r.tokenMap!==void 0){var L=r.tokenMap,S=e;if(e===S)if(L&&X(L)=="object"&&!Array.isArray(L)){if(Object.keys(L).length>1e4)return i.errors=[{instancePath:t+"/tokenMap",schemaPath:"#/properties/tokenMap/maxProperties",keyword:"maxProperties",params:{limit:1e4},message:"must NOT have more than 10000 properties"}],!1;if(Object.keys(L).length<1)return i.errors=[{instancePath:t+"/tokenMap",schemaPath:"#/properties/tokenMap/minProperties",keyword:"minProperties",params:{limit:1},message:"must NOT have fewer than 1 properties"}],!1;for(var V in L){var Y=e;if(typeof V!="string"){var H={instancePath:t+"/tokenMap",schemaPath:"#/properties/tokenMap/propertyNames/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:V};a===null?a=[H]:a.push(H),e++}var F=Y===e;if(!F){var Q={instancePath:t+"/tokenMap",schemaPath:"#/properties/tokenMap/propertyNames",keyword:"propertyNames",params:{propertyName:V},message:"property name must be valid"};return a===null?a=[Q]:a.push(Q),e++,i.errors=a,!1}}if(F)for(var ae in L){var ge=e;u(L[ae],{instancePath:t+"/tokenMap/"+ae.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:L,parentDataProperty:ae,rootData:p})||(a=a===null?u.errors:a.concat(u.errors),e=a.length);var _=ge===e;if(!_)break}}else return i.errors=[{instancePath:t+"/tokenMap",schemaPath:"#/properties/tokenMap/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var s=S===e}else var s=!0;if(s){if(r.keywords!==void 0){var Z=r.keywords,me=e;if(e===me)if(Array.isArray(Z)){if(Z.length>20)return i.errors=[{instancePath:t+"/keywords",schemaPath:"#/properties/keywords/maxItems",keyword:"maxItems",params:{limit:20},message:"must NOT have more than 20 items"}],!1;for(var ne=!0,de=Z.length,G=0;G<de;G++){var oe=Z[G],Le=e;if(e===Le)if(typeof oe=="string"){if(y(oe)>20)return i.errors=[{instancePath:t+"/keywords/"+G,schemaPath:"#/properties/keywords/items/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(y(oe)<1)return i.errors=[{instancePath:t+"/keywords/"+G,schemaPath:"#/properties/keywords/items/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!ce.test(oe))return i.errors=[{instancePath:t+"/keywords/"+G,schemaPath:"#/properties/keywords/items/pattern",keyword:"pattern",params:{pattern:"^[\\w ]+$"},message:'must match pattern "^[\\w ]+$"'}],!1}else return i.errors=[{instancePath:t+"/keywords/"+G,schemaPath:"#/properties/keywords/items/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var ne=Le===e;if(!ne)break}if(ne){var te=Z.length,ve;if(te>1)for(var Pe={};te--;){var pe=Z[te];if(typeof pe=="string"){if(typeof Pe[pe]=="number")return ve=Pe[pe],i.errors=[{instancePath:t+"/keywords",schemaPath:"#/properties/keywords/uniqueItems",keyword:"uniqueItems",params:{i:te,j:ve},message:"must NOT have duplicate items (items ## "+ve+" and "+te+" are identical)"}],!1;Pe[pe]=te}}}}else return i.errors=[{instancePath:t+"/keywords",schemaPath:"#/properties/keywords/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;var s=me===e}else var s=!0;if(s){if(r.tags!==void 0){var K=r.tags,je=e;if(e===je)if(K&&X(K)=="object"&&!Array.isArray(K)){if(Object.keys(K).length>20)return i.errors=[{instancePath:t+"/tags",schemaPath:"#/properties/tags/maxProperties",keyword:"maxProperties",params:{limit:20},message:"must NOT have more than 20 properties"}],!1;for(var J in K){var Qe=e,Ze=e;if(e===Ze)if(typeof J=="string"){if(y(J)>10){var De={instancePath:t+"/tags",schemaPath:"#/definitions/TagIdentifier/maxLength",keyword:"maxLength",params:{limit:10},message:"must NOT have more than 10 characters",propertyName:J};a===null?a=[De]:a.push(De),e++}else if(y(J)<1){var Ee={instancePath:t+"/tags",schemaPath:"#/definitions/TagIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:J};a===null?a=[Ee]:a.push(Ee),e++}else if(!ee.test(J)){var Ve={instancePath:t+"/tags",schemaPath:"#/definitions/TagIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:J};a===null?a=[Ve]:a.push(Ve),e++}}else{var $e={instancePath:t+"/tags",schemaPath:"#/definitions/TagIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:J};a===null?a=[$e]:a.push($e),e++}var Ae=Qe===e;if(!Ae){var Fe={instancePath:t+"/tags",schemaPath:"#/properties/tags/propertyNames",keyword:"propertyNames",params:{propertyName:J},message:"property name must be valid"};return a===null?a=[Fe]:a.push(Fe),e++,i.errors=a,!1}}if(Ae)for(var R in K){var B=K[R],We=e,He=e;if(e===He)if(B&&X(B)=="object"&&!Array.isArray(B)){var he=void 0;if(B.name===void 0&&(he="name")||B.description===void 0&&(he="description"))return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/required",keyword:"required",params:{missingProperty:he},message:"must have required property '"+he+"'"}],!1;var Be=e;for(var we in B)if(!(we==="name"||we==="description"))return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:we},message:"must NOT have additional properties"}],!1;if(Be===e){if(B.name!==void 0){var le=B.name,Re=e;if(e===Re)if(typeof le=="string"){if(y(le)>20)return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(y(le)<1)return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!be.test(le))return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/pattern",keyword:"pattern",params:{pattern:"^[ \\w]+$"},message:'must match pattern "^[ \\w]+$"'}],!1}else return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var ye=Re===e}else var ye=!0;if(ye)if(B.description!==void 0){var ue=B.description,Me=e;if(e===Me)if(typeof ue=="string"){if(y(ue)>200)return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/maxLength",keyword:"maxLength",params:{limit:200},message:"must NOT have more than 200 characters"}],!1;if(y(ue)<1)return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!Ne.test(ue))return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/pattern",keyword:"pattern",params:{pattern:"^[ \\w\\.,:]+$"},message:'must match pattern "^[ \\w\\.,:]+$"'}],!1}else return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var ye=Me===e}else var ye=!0}}else return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var Ce=We===e;if(!Ce)break}}else return i.errors=[{instancePath:t+"/tags",schemaPath:"#/properties/tags/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var s=je===e}else var s=!0;if(s)if(r.logoURI!==void 0){var qe=r.logoURI,ke=e;if(e===ke&&e===ke)if(typeof qe=="string"){if(!fe(qe))return i.errors=[{instancePath:t+"/logoURI",schemaPath:"#/properties/logoURI/format",keyword:"format",params:{format:"uri"},message:'must match format "uri"'}],!1}else return i.errors=[{instancePath:t+"/logoURI",schemaPath:"#/properties/logoURI/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=ke===e}else var s=!0}}}}}}}}else return i.errors=[{instancePath:t,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;return i.errors=a,e===0}});export{Xe as __tla,i as default,Se as validate};
