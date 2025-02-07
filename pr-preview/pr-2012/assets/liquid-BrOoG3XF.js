import{ev as g,__tla as b}from"./index-CQ-PzbkJ.js";import{r as y}from"./markup-templating-BxAVv-bL.js";let d,h=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function m(o,n){for(var e=0;e<n.length;e++){const t=n[e];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in o)){const r=Object.getOwnPropertyDescriptor(t,a);r&&Object.defineProperty(o,a,r.get?r:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var i,l;function _(){if(l)return i;l=1;var o=y();i=n,n.displayName="liquid",n.aliases=[];function n(e){e.register(o),e.languages.liquid={comment:{pattern:/(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/,lookbehind:!0},delimiter:{pattern:/^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/,alias:"punctuation"},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},keyword:/\b(?:as|assign|break|(?:end)?(?:capture|case|comment|for|form|if|paginate|raw|style|tablerow|unless)|continue|cycle|decrement|echo|else|elsif|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,object:/\b(?:address|all_country_option_tags|article|block|blog|cart|checkout|collection|color|country|country_option_tags|currency|current_page|current_tags|customer|customer_address|date|discount_allocation|discount_application|external_video|filter|filter_value|font|forloop|fulfillment|generic_file|gift_card|group|handle|image|line_item|link|linklist|localization|location|measurement|media|metafield|model|model_source|order|page|page_description|page_image|page_title|part|policy|product|product_option|recommendations|request|robots|routes|rule|script|search|selling_plan|selling_plan_allocation|selling_plan_group|shipping_method|shop|shop_locale|sitemap|store_availability|tax_line|template|theme|transaction|unit_price_measurement|user_agent|variant|video|video_source)\b/,function:[{pattern:/(\|\s*)\w+/,lookbehind:!0,alias:"filter"},{pattern:/(\.\s*)(?:first|last|size)/,lookbehind:!0}],boolean:/\b(?:false|nil|true)\b/,range:{pattern:/\.\./,alias:"operator"},number:/\b\d+(?:\.\d+)?\b/,operator:/[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|contains(?=\s)|or)\b/,punctuation:/[.,\[\]()]/,empty:{pattern:/\bempty\b/,alias:"keyword"}},e.hooks.add("before-tokenize",function(t){var a=/\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g,r=!1;e.languages["markup-templating"].buildPlaceholders(t,"liquid",a,function(f){var u=/^\{%-?\s*(\w+)/.exec(f);if(u){var p=u[1];if(p==="raw"&&!r)return r=!0,!0;if(p==="endraw")return r=!1,!0}return!r})}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"liquid")})}return i}var s=_();let c;c=g(s),d=m({__proto__:null,default:c},[s])});export{h as __tla,d as l};
