import{u as _e}from"./ucs2length-xALg2LS9.js";import{f as Ue}from"./formats-DzAOFwGz.js";import{fX as W,__tla as He}from"./index-OH6gUJzS.js";let i,Se,We=Promise.all([(()=>{try{return He}catch{}})()]).then(async()=>{let l,ce,ee,be,Ne,Oe,fe,xe,Te,Ie;Se=i,l=_e.default,ce=new RegExp("^[\\w ]+$","u"),ee=new RegExp("^[\\w]+$","u"),be=new RegExp("^[ \\w]+$","u"),Ne=new RegExp("^[ \\w\\.,:]+$","u"),Oe=Ue.fullFormats["date-time"],fe=Ue.fullFormats.uri,xe=new RegExp("^0x[a-fA-F0-9]{40}$","u"),Te=new RegExp("^[ \\S+]+$","u"),Ie=new RegExp("^\\S+$","u");function re(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=c.instancePath,t=O===void 0?"":O;c.parentData,c.parentDataProperty,c.rootData;var n=null,p=0,a=p,e=!1,y=p,v=p,m=!1,g=p;if(p===g)if(typeof r=="string"){if(l(r)>42){var o={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};n===null?n=[o]:n.push(o),p++}else if(l(r)<1){var s={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};n===null?n=[s]:n.push(s),p++}}else{var x={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};n===null?n=[x]:n.push(x),p++}var P=g===p;if(m=m||P,!m){var h=p;if(typeof r!="boolean"){var d={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};n===null?n=[d]:n.push(d),p++}var P=h===p;if(m=m||P,!m){var j=p;if(!(typeof r=="number"&&isFinite(r))){var b={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};n===null?n=[b]:n.push(b),p++}var P=j===p;if(m=m||P,!m){var M=p;if(r!==null){var w={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};n===null?n=[w]:n.push(w),p++}var P=M===p;m=m||P}}}if(m)p=v,n!==null&&(v?n.length=v:n=null);else{var T={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};n===null?n=[T]:n.push(T),p++}var $=y===p;if(e=e||$,e)p=a,n!==null&&(a?n.length=a:n=null);else{var k={instancePath:t,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return n===null?n=[k]:n.push(k),p++,re.errors=n,!1}return re.errors=n,p===0}function se(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=c.instancePath,t=O===void 0?"":O;c.parentData,c.parentDataProperty;var n=c.rootData,p=n===void 0?r:n,a=null,e=0,y=e,v=!1,m=e,g=e,o=!1,s=e;if(e===s)if(typeof r=="string"){if(l(r)>42){var x={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};a===null?a=[x]:a.push(x),e++}else if(l(r)<1){var P={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};a===null?a=[P]:a.push(P),e++}}else{var h={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};a===null?a=[h]:a.push(h),e++}var d=s===e;if(o=o||d,!o){var j=e;if(typeof r!="boolean"){var b={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};a===null?a=[b]:a.push(b),e++}var d=j===e;if(o=o||d,!o){var M=e;if(!(typeof r=="number"&&isFinite(r))){var w={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};a===null?a=[w]:a.push(w),e++}var d=M===e;if(o=o||d,!o){var T=e;if(r!==null){var $={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};a===null?a=[$]:a.push($),e++}var d=T===e;o=o||d}}}if(o)e=g,a!==null&&(g?a.length=g:a=null);else{var k={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};a===null?a=[k]:a.push(k),e++}var N=m===e;if(v=v||N,!v){var q=e;if(e===q)if(r&&W(r)=="object"&&!Array.isArray(r))if(Object.keys(r).length>10){var I={instancePath:t,schemaPath:"#/anyOf/1/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"};a===null?a=[I]:a.push(I),e++}else{for(var f in r){var A=e,Q=e;if(e===Q)if(typeof f=="string"){if(l(f)>40){var D={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:f};a===null?a=[D]:a.push(D),e++}else if(l(f)<1){var B={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:f};a===null?a=[B]:a.push(B),e++}else if(!ee.test(f)){var E={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:f};a===null?a=[E]:a.push(E),e++}}else{var U={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:f};a===null?a=[U]:a.push(U),e++}var L=A===e;if(!L){var S={instancePath:t,schemaPath:"#/anyOf/1/propertyNames",keyword:"propertyNames",params:{propertyName:f},message:"property name must be valid"};a===null?a=[S]:a.push(S),e++;break}}if(L)for(var V in r){var X=e;re(r[V],{instancePath:t+"/"+V.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:r,parentDataProperty:V,rootData:p})||(a=a===null?re.errors:a.concat(re.errors),e=a.length);var G=X===e;if(!G)break}}else{var F={instancePath:t,schemaPath:"#/anyOf/1/type",keyword:"type",params:{type:"object"},message:"must be object"};a===null?a=[F]:a.push(F),e++}var N=q===e;v=v||N}if(v)e=y,a!==null&&(y?a.length=y:a=null);else{var K={instancePath:t,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return a===null?a=[K]:a.push(K),e++,se.errors=a,!1}return se.errors=a,e===0}function ie(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=c.instancePath,t=O===void 0?"":O;c.parentData,c.parentDataProperty;var n=c.rootData,p=n===void 0?r:n,a=null,e=0,y=e,v=!1,m=e,g=e,o=!1,s=e;if(e===s)if(typeof r=="string"){if(l(r)>42){var x={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};a===null?a=[x]:a.push(x),e++}else if(l(r)<1){var P={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};a===null?a=[P]:a.push(P),e++}}else{var h={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};a===null?a=[h]:a.push(h),e++}var d=s===e;if(o=o||d,!o){var j=e;if(typeof r!="boolean"){var b={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};a===null?a=[b]:a.push(b),e++}var d=j===e;if(o=o||d,!o){var M=e;if(!(typeof r=="number"&&isFinite(r))){var w={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};a===null?a=[w]:a.push(w),e++}var d=M===e;if(o=o||d,!o){var T=e;if(r!==null){var $={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};a===null?a=[$]:a.push($),e++}var d=T===e;o=o||d}}}if(o)e=g,a!==null&&(g?a.length=g:a=null);else{var k={instancePath:t,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};a===null?a=[k]:a.push(k),e++}var N=m===e;if(v=v||N,!v){var q=e;if(e===q)if(r&&W(r)=="object"&&!Array.isArray(r))if(Object.keys(r).length>10){var I={instancePath:t,schemaPath:"#/anyOf/1/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"};a===null?a=[I]:a.push(I),e++}else{for(var f in r){var A=e,Q=e;if(e===Q)if(typeof f=="string"){if(l(f)>40){var D={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:f};a===null?a=[D]:a.push(D),e++}else if(l(f)<1){var B={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:f};a===null?a=[B]:a.push(B),e++}else if(!ee.test(f)){var E={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:f};a===null?a=[E]:a.push(E),e++}}else{var U={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:f};a===null?a=[U]:a.push(U),e++}var L=A===e;if(!L){var S={instancePath:t,schemaPath:"#/anyOf/1/propertyNames",keyword:"propertyNames",params:{propertyName:f},message:"property name must be valid"};a===null?a=[S]:a.push(S),e++;break}}if(L)for(var V in r){var X=e;se(r[V],{instancePath:t+"/"+V.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:r,parentDataProperty:V,rootData:p})||(a=a===null?se.errors:a.concat(se.errors),e=a.length);var G=X===e;if(!G)break}}else{var F={instancePath:t,schemaPath:"#/anyOf/1/type",keyword:"type",params:{type:"object"},message:"must be object"};a===null?a=[F]:a.push(F),e++}var N=q===e;v=v||N}if(v)e=y,a!==null&&(y?a.length=y:a=null);else{var K={instancePath:t,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return a===null?a=[K]:a.push(K),e++,ie.errors=a,!1}return ie.errors=a,e===0}function Y(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=c.instancePath,t=O===void 0?"":O;c.parentData,c.parentDataProperty;var n=c.rootData,p=n===void 0?r:n,a=null,e=0;if(e===0)if(r&&W(r)=="object"&&!Array.isArray(r)){if(Object.keys(r).length>10)return Y.errors=[{instancePath:t,schemaPath:"#/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"}],!1;for(var y in r){var v=e,m=e;if(e===m)if(typeof y=="string"){if(l(y)>40){var g={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:y};a===null?a=[g]:a.push(g),e++}else if(l(y)<1){var o={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:y};a===null?a=[o]:a.push(o),e++}else if(!ee.test(y)){var s={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:y};a===null?a=[s]:a.push(s),e++}}else{var x={instancePath:t,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:y};a===null?a=[x]:a.push(x),e++}var P=v===e;if(!P){var h={instancePath:t,schemaPath:"#/propertyNames",keyword:"propertyNames",params:{propertyName:y},message:"property name must be valid"};return a===null?a=[h]:a.push(h),e++,Y.errors=a,!1}}if(P)for(var d in r){var j=e;ie(r[d],{instancePath:t+"/"+d.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:r,parentDataProperty:d,rootData:p})||(a=a===null?ie.errors:a.concat(ie.errors),e=a.length);var b=j===e;if(!b)break}}else return Y.errors=[{instancePath:t,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;return Y.errors=a,e===0}function u(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=c.instancePath,t=O===void 0?"":O;c.parentData,c.parentDataProperty;var n=c.rootData,p=n===void 0?r:n,a=null,e=0;if(e===0)if(r&&W(r)=="object"&&!Array.isArray(r)){var y;if(r.chainId===void 0&&(y="chainId")||r.address===void 0&&(y="address")||r.decimals===void 0&&(y="decimals")||r.name===void 0&&(y="name")||r.symbol===void 0&&(y="symbol"))return u.errors=[{instancePath:t,schemaPath:"#/required",keyword:"required",params:{missingProperty:y},message:"must have required property '"+y+"'"}],!1;var v=e;for(var m in r)if(!(m==="chainId"||m==="address"||m==="decimals"||m==="name"||m==="symbol"||m==="logoURI"||m==="tags"||m==="extensions"))return u.errors=[{instancePath:t,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:m},message:"must NOT have additional properties"}],!1;if(v===e){if(r.chainId!==void 0){var g=r.chainId,o=e;if(!(typeof g=="number"&&!(g%1)&&!isNaN(g)&&isFinite(g)))return u.errors=[{instancePath:t+"/chainId",schemaPath:"#/properties/chainId/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===o&&typeof g=="number"&&isFinite(g)&&(g<1||isNaN(g)))return u.errors=[{instancePath:t+"/chainId",schemaPath:"#/properties/chainId/minimum",keyword:"minimum",params:{comparison:">=",limit:1},message:"must be >= 1"}],!1;var s=o===e}else var s=!0;if(s){if(r.address!==void 0){var x=r.address,P=e;if(e===P)if(typeof x=="string"){if(!xe.test(x))return u.errors=[{instancePath:t+"/address",schemaPath:"#/properties/address/pattern",keyword:"pattern",params:{pattern:"^0x[a-fA-F0-9]{40}$"},message:'must match pattern "^0x[a-fA-F0-9]{40}$"'}],!1}else return u.errors=[{instancePath:t+"/address",schemaPath:"#/properties/address/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=P===e}else var s=!0;if(s){if(r.decimals!==void 0){var h=r.decimals,d=e;if(!(typeof h=="number"&&!(h%1)&&!isNaN(h)&&isFinite(h)))return u.errors=[{instancePath:t+"/decimals",schemaPath:"#/properties/decimals/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===d&&typeof h=="number"&&isFinite(h)){if(h>255||isNaN(h))return u.errors=[{instancePath:t+"/decimals",schemaPath:"#/properties/decimals/maximum",keyword:"maximum",params:{comparison:"<=",limit:255},message:"must be <= 255"}],!1;if(h<0||isNaN(h))return u.errors=[{instancePath:t+"/decimals",schemaPath:"#/properties/decimals/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1}var s=d===e}else var s=!0;if(s){if(r.name!==void 0){var j=r.name,b=e,M=e,w=!1,T=e;if(j!==""){var $={instancePath:t+"/name",schemaPath:"#/properties/name/anyOf/0/const",keyword:"const",params:{allowedValue:""},message:"must be equal to constant"};a===null?a=[$]:a.push($),e++}var k=T===e;if(w=w||k,!w){var N=e;if(typeof j=="string"&&!Te.test(j)){var q={instancePath:t+"/name",schemaPath:"#/properties/name/anyOf/1/pattern",keyword:"pattern",params:{pattern:"^[ \\S+]+$"},message:'must match pattern "^[ \\S+]+$"'};a===null?a=[q]:a.push(q),e++}var k=N===e;w=w||k}if(w)e=M,a!==null&&(M?a.length=M:a=null);else{var I={instancePath:t+"/name",schemaPath:"#/properties/name/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return a===null?a=[I]:a.push(I),e++,u.errors=a,!1}if(e===b)if(typeof j=="string"){if(l(j)>40)return u.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters"}],!1;if(l(j)<0)return u.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/minLength",keyword:"minLength",params:{limit:0},message:"must NOT have fewer than 0 characters"}],!1}else return u.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=b===e}else var s=!0;if(s){if(r.symbol!==void 0){var f=r.symbol,A=e,Q=e,D=!1,B=e;if(f!==""){var E={instancePath:t+"/symbol",schemaPath:"#/properties/symbol/anyOf/0/const",keyword:"const",params:{allowedValue:""},message:"must be equal to constant"};a===null?a=[E]:a.push(E),e++}var U=B===e;if(D=D||U,!D){var L=e;if(typeof f=="string"&&!Ie.test(f)){var S={instancePath:t+"/symbol",schemaPath:"#/properties/symbol/anyOf/1/pattern",keyword:"pattern",params:{pattern:"^\\S+$"},message:'must match pattern "^\\S+$"'};a===null?a=[S]:a.push(S),e++}var U=L===e;D=D||U}if(D)e=Q,a!==null&&(Q?a.length=Q:a=null);else{var V={instancePath:t+"/symbol",schemaPath:"#/properties/symbol/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return a===null?a=[V]:a.push(V),e++,u.errors=a,!1}if(e===A)if(typeof f=="string"){if(l(f)>20)return u.errors=[{instancePath:t+"/symbol",schemaPath:"#/properties/symbol/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(l(f)<0)return u.errors=[{instancePath:t+"/symbol",schemaPath:"#/properties/symbol/minLength",keyword:"minLength",params:{limit:0},message:"must NOT have fewer than 0 characters"}],!1}else return u.errors=[{instancePath:t+"/symbol",schemaPath:"#/properties/symbol/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=A===e}else var s=!0;if(s){if(r.logoURI!==void 0){var X=r.logoURI,G=e;if(e===G&&e===G)if(typeof X=="string"){if(!fe(X))return u.errors=[{instancePath:t+"/logoURI",schemaPath:"#/properties/logoURI/format",keyword:"format",params:{format:"uri"},message:'must match format "uri"'}],!1}else return u.errors=[{instancePath:t+"/logoURI",schemaPath:"#/properties/logoURI/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=G===e}else var s=!0;if(s){if(r.tags!==void 0){var F=r.tags,K=e;if(e===K)if(Array.isArray(F)){if(F.length>10)return u.errors=[{instancePath:t+"/tags",schemaPath:"#/properties/tags/maxItems",keyword:"maxItems",params:{limit:10},message:"must NOT have more than 10 items"}],!1;for(var ae=!0,ge=F.length,_=0;_<ge;_++){var Z=F[_],me=e,ne=e;if(e===ne)if(typeof Z=="string"){if(l(Z)>10)return u.errors=[{instancePath:t+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/maxLength",keyword:"maxLength",params:{limit:10},message:"must NOT have more than 10 characters"}],!1;if(l(Z)<1)return u.errors=[{instancePath:t+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!ee.test(Z))return u.errors=[{instancePath:t+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"'}],!1}else return u.errors=[{instancePath:t+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var ae=me===e;if(!ae)break}}else return u.errors=[{instancePath:t+"/tags",schemaPath:"#/properties/tags/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;var s=K===e}else var s=!0;if(s)if(r.extensions!==void 0){var de=e;Y(r.extensions,{instancePath:t+"/extensions",parentData:r,parentDataProperty:"extensions",rootData:p})||(a=a===null?Y.errors:a.concat(Y.errors),e=a.length);var s=de===e}else var s=!0}}}}}}}}else return u.errors=[{instancePath:t,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;return u.errors=a,e===0}i=function(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=c.instancePath,t=O===void 0?"":O;c.parentData,c.parentDataProperty;var n=c.rootData,p=n===void 0?r:n,a=null,e=0;if(e===0)if(r&&W(r)=="object"&&!Array.isArray(r)){var y;if(r.tokens===void 0&&(y="tokens"))return i.errors=[{instancePath:t,schemaPath:"#/required",keyword:"required",params:{missingProperty:y},message:"must have required property '"+y+"'"}],!1;var v=e;for(var m in r)if(!(m==="name"||m==="timestamp"||m==="version"||m==="tokens"||m==="tokenMap"||m==="keywords"||m==="tags"||m==="logoURI"))return i.errors=[{instancePath:t,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:m},message:"must NOT have additional properties"}],!1;if(v===e){if(r.name!==void 0){var g=r.name,o=e;if(e===o)if(typeof g=="string"){if(l(g)>30)return i.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/maxLength",keyword:"maxLength",params:{limit:30},message:"must NOT have more than 30 characters"}],!1;if(l(g)<1)return i.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!ce.test(g))return i.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/pattern",keyword:"pattern",params:{pattern:"^[\\w ]+$"},message:'must match pattern "^[\\w ]+$"'}],!1}else return i.errors=[{instancePath:t+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=o===e}else var s=!0;if(s){if(r.timestamp!==void 0){var x=r.timestamp,P=e;if(e===P&&e===P)if(typeof x=="string"){if(!Oe.validate(x))return i.errors=[{instancePath:t+"/timestamp",schemaPath:"#/properties/timestamp/format",keyword:"format",params:{format:"date-time"},message:'must match format "date-time"'}],!1}else return i.errors=[{instancePath:t+"/timestamp",schemaPath:"#/properties/timestamp/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=P===e}else var s=!0;if(s){if(r.version!==void 0){var h=r.version,d=e,j=e;if(e===j)if(h&&W(h)=="object"&&!Array.isArray(h)){var b;if(h.major===void 0&&(b="major")||h.minor===void 0&&(b="minor")||h.patch===void 0&&(b="patch"))return i.errors=[{instancePath:t+"/version",schemaPath:"#/definitions/Version/required",keyword:"required",params:{missingProperty:b},message:"must have required property '"+b+"'"}],!1;var M=e;for(var w in h)if(!(w==="major"||w==="minor"||w==="patch"))return i.errors=[{instancePath:t+"/version",schemaPath:"#/definitions/Version/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:w},message:"must NOT have additional properties"}],!1;if(M===e){if(h.major!==void 0){var T=h.major,$=e;if(!(typeof T=="number"&&!(T%1)&&!isNaN(T)&&isFinite(T)))return i.errors=[{instancePath:t+"/version/major",schemaPath:"#/definitions/Version/properties/major/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===$&&typeof T=="number"&&isFinite(T)&&(T<0||isNaN(T)))return i.errors=[{instancePath:t+"/version/major",schemaPath:"#/definitions/Version/properties/major/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var k=$===e}else var k=!0;if(k){if(h.minor!==void 0){var N=h.minor,q=e;if(!(typeof N=="number"&&!(N%1)&&!isNaN(N)&&isFinite(N)))return i.errors=[{instancePath:t+"/version/minor",schemaPath:"#/definitions/Version/properties/minor/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===q&&typeof N=="number"&&isFinite(N)&&(N<0||isNaN(N)))return i.errors=[{instancePath:t+"/version/minor",schemaPath:"#/definitions/Version/properties/minor/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var k=q===e}else var k=!0;if(k)if(h.patch!==void 0){var I=h.patch,f=e;if(!(typeof I=="number"&&!(I%1)&&!isNaN(I)&&isFinite(I)))return i.errors=[{instancePath:t+"/version/patch",schemaPath:"#/definitions/Version/properties/patch/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===f&&typeof I=="number"&&isFinite(I)&&(I<0||isNaN(I)))return i.errors=[{instancePath:t+"/version/patch",schemaPath:"#/definitions/Version/properties/patch/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var k=f===e}else var k=!0}}}else return i.errors=[{instancePath:t+"/version",schemaPath:"#/definitions/Version/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var s=d===e}else var s=!0;if(s){if(r.tokens!==void 0){var A=r.tokens,Q=e;if(e===Q)if(Array.isArray(A)){if(A.length>1e4)return i.errors=[{instancePath:t+"/tokens",schemaPath:"#/properties/tokens/maxItems",keyword:"maxItems",params:{limit:1e4},message:"must NOT have more than 10000 items"}],!1;if(A.length<1)return i.errors=[{instancePath:t+"/tokens",schemaPath:"#/properties/tokens/minItems",keyword:"minItems",params:{limit:1},message:"must NOT have fewer than 1 items"}],!1;for(var D=!0,B=A.length,E=0;E<B;E++){var U=e;u(A[E],{instancePath:t+"/tokens/"+E,parentData:A,parentDataProperty:E,rootData:p})||(a=a===null?u.errors:a.concat(u.errors),e=a.length);var D=U===e;if(!D)break}}else return i.errors=[{instancePath:t+"/tokens",schemaPath:"#/properties/tokens/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;var s=Q===e}else var s=!0;if(s){if(r.tokenMap!==void 0){var L=r.tokenMap,S=e;if(e===S)if(L&&W(L)=="object"&&!Array.isArray(L)){if(Object.keys(L).length>1e4)return i.errors=[{instancePath:t+"/tokenMap",schemaPath:"#/properties/tokenMap/maxProperties",keyword:"maxProperties",params:{limit:1e4},message:"must NOT have more than 10000 properties"}],!1;if(Object.keys(L).length<1)return i.errors=[{instancePath:t+"/tokenMap",schemaPath:"#/properties/tokenMap/minProperties",keyword:"minProperties",params:{limit:1},message:"must NOT have fewer than 1 properties"}],!1;for(var V in L){var X=e;if(typeof V!="string"){var G={instancePath:t+"/tokenMap",schemaPath:"#/properties/tokenMap/propertyNames/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:V};a===null?a=[G]:a.push(G),e++}var F=X===e;if(!F){var K={instancePath:t+"/tokenMap",schemaPath:"#/properties/tokenMap/propertyNames",keyword:"propertyNames",params:{propertyName:V},message:"property name must be valid"};return a===null?a=[K]:a.push(K),e++,i.errors=a,!1}}if(F)for(var ae in L){var ge=e;u(L[ae],{instancePath:t+"/tokenMap/"+ae.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:L,parentDataProperty:ae,rootData:p})||(a=a===null?u.errors:a.concat(u.errors),e=a.length);var _=ge===e;if(!_)break}}else return i.errors=[{instancePath:t+"/tokenMap",schemaPath:"#/properties/tokenMap/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var s=S===e}else var s=!0;if(s){if(r.keywords!==void 0){var Z=r.keywords,me=e;if(e===me)if(Array.isArray(Z)){if(Z.length>20)return i.errors=[{instancePath:t+"/keywords",schemaPath:"#/properties/keywords/maxItems",keyword:"maxItems",params:{limit:20},message:"must NOT have more than 20 items"}],!1;for(var ne=!0,de=Z.length,C=0;C<de;C++){var oe=Z[C],Le=e;if(e===Le)if(typeof oe=="string"){if(l(oe)>20)return i.errors=[{instancePath:t+"/keywords/"+C,schemaPath:"#/properties/keywords/items/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(l(oe)<1)return i.errors=[{instancePath:t+"/keywords/"+C,schemaPath:"#/properties/keywords/items/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!ce.test(oe))return i.errors=[{instancePath:t+"/keywords/"+C,schemaPath:"#/properties/keywords/items/pattern",keyword:"pattern",params:{pattern:"^[\\w ]+$"},message:'must match pattern "^[\\w ]+$"'}],!1}else return i.errors=[{instancePath:t+"/keywords/"+C,schemaPath:"#/properties/keywords/items/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var ne=Le===e;if(!ne)break}if(ne){var te=Z.length,ve;if(te>1)for(var Pe={};te--;){var pe=Z[te];if(typeof pe=="string"){if(typeof Pe[pe]=="number")return ve=Pe[pe],i.errors=[{instancePath:t+"/keywords",schemaPath:"#/properties/keywords/uniqueItems",keyword:"uniqueItems",params:{i:te,j:ve},message:"must NOT have duplicate items (items ## "+ve+" and "+te+" are identical)"}],!1;Pe[pe]=te}}}}else return i.errors=[{instancePath:t+"/keywords",schemaPath:"#/properties/keywords/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;var s=me===e}else var s=!0;if(s){if(r.tags!==void 0){var J=r.tags,je=e;if(e===je)if(J&&W(J)=="object"&&!Array.isArray(J)){if(Object.keys(J).length>20)return i.errors=[{instancePath:t+"/tags",schemaPath:"#/properties/tags/maxProperties",keyword:"maxProperties",params:{limit:20},message:"must NOT have more than 20 properties"}],!1;for(var H in J){var Ke=e,Ze=e;if(e===Ze)if(typeof H=="string"){if(l(H)>10){var De={instancePath:t+"/tags",schemaPath:"#/definitions/TagIdentifier/maxLength",keyword:"maxLength",params:{limit:10},message:"must NOT have more than 10 characters",propertyName:H};a===null?a=[De]:a.push(De),e++}else if(l(H)<1){var Ee={instancePath:t+"/tags",schemaPath:"#/definitions/TagIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:H};a===null?a=[Ee]:a.push(Ee),e++}else if(!ee.test(H)){var Ve={instancePath:t+"/tags",schemaPath:"#/definitions/TagIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:H};a===null?a=[Ve]:a.push(Ve),e++}}else{var $e={instancePath:t+"/tags",schemaPath:"#/definitions/TagIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:H};a===null?a=[$e]:a.push($e),e++}var Ae=Ke===e;if(!Ae){var Fe={instancePath:t+"/tags",schemaPath:"#/properties/tags/propertyNames",keyword:"propertyNames",params:{propertyName:H},message:"property name must be valid"};return a===null?a=[Fe]:a.push(Fe),e++,i.errors=a,!1}}if(Ae)for(var R in J){var z=J[R],Qe=e,Ge=e;if(e===Ge)if(z&&W(z)=="object"&&!Array.isArray(z)){var he=void 0;if(z.name===void 0&&(he="name")||z.description===void 0&&(he="description"))return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/required",keyword:"required",params:{missingProperty:he},message:"must have required property '"+he+"'"}],!1;var ze=e;for(var we in z)if(!(we==="name"||we==="description"))return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:we},message:"must NOT have additional properties"}],!1;if(ze===e){if(z.name!==void 0){var ue=z.name,Re=e;if(e===Re)if(typeof ue=="string"){if(l(ue)>20)return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(l(ue)<1)return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!be.test(ue))return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/pattern",keyword:"pattern",params:{pattern:"^[ \\w]+$"},message:'must match pattern "^[ \\w]+$"'}],!1}else return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var le=Re===e}else var le=!0;if(le)if(z.description!==void 0){var ye=z.description,Me=e;if(e===Me)if(typeof ye=="string"){if(l(ye)>200)return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/maxLength",keyword:"maxLength",params:{limit:200},message:"must NOT have more than 200 characters"}],!1;if(l(ye)<1)return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!Ne.test(ye))return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/pattern",keyword:"pattern",params:{pattern:"^[ \\w\\.,:]+$"},message:'must match pattern "^[ \\w\\.,:]+$"'}],!1}else return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var le=Me===e}else var le=!0}}else return i.errors=[{instancePath:t+"/tags/"+R.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var Be=Qe===e;if(!Be)break}}else return i.errors=[{instancePath:t+"/tags",schemaPath:"#/properties/tags/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var s=je===e}else var s=!0;if(s)if(r.logoURI!==void 0){var qe=r.logoURI,ke=e;if(e===ke&&e===ke)if(typeof qe=="string"){if(!fe(qe))return i.errors=[{instancePath:t+"/logoURI",schemaPath:"#/properties/logoURI/format",keyword:"format",params:{format:"uri"},message:'must match format "uri"'}],!1}else return i.errors=[{instancePath:t+"/logoURI",schemaPath:"#/properties/logoURI/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=ke===e}else var s=!0}}}}}}}}else return i.errors=[{instancePath:t,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;return i.errors=a,e===0}});export{We as __tla,i as default,Se as validate};
