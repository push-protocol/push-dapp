import{eu as c,__tla as b}from"./index-CMEDYTeG.js";let d,m=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function u(e,n){for(var r=0;r<n.length;r++){const i=n[r];if(typeof i!="string"&&!Array.isArray(i)){for(const t in i)if(t!=="default"&&!(t in e)){const s=Object.getOwnPropertyDescriptor(i,t);s&&Object.defineProperty(e,t,s.get?s:{enumerable:!0,get:()=>i[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o,a;function p(){if(a)return o;a=1,o=e,e.displayName="inform7",e.aliases=[];function e(n){n.languages.inform7={string:{pattern:/"[^"]*"/,inside:{substitution:{pattern:/\[[^\[\]]+\]/,inside:{delimiter:{pattern:/\[|\]/,alias:"punctuation"}}}}},comment:{pattern:/\[[^\[\]]+\]/,greedy:!0},title:{pattern:/^[ \t]*(?:book|chapter|part(?! of)|section|table|volume)\b.+/im,alias:"important"},number:{pattern:/(^|[^-])(?:\b\d+(?:\.\d+)?(?:\^\d+)?(?:(?!\d)\w+)?|\b(?:eight|eleven|five|four|nine|one|seven|six|ten|three|twelve|two))\b(?!-)/i,lookbehind:!0},verb:{pattern:/(^|[^-])\b(?:answering|applying to|are|asking|attacking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:ing|s)?|consulting|contain(?:ing|s)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:s|ve|ving)|hold(?:ing|s)?|impl(?:ies|y)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:ing|s)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:ing|s)?|setting|showing|singing|sleeping|smelling|squeezing|support(?:ing|s)?|swearing|switching|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:ing|s)?|var(?:ies|y|ying)|waiting|waking|waving|wear(?:ing|s)?)\b(?!-)/i,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|the story|unless)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,lookbehind:!0},property:{pattern:/(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: off| on)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,lookbehind:!0,alias:"symbol"},position:{pattern:/(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,lookbehind:!0,alias:"keyword"},type:{pattern:/(^|[^-])\b(?:actions?|activit(?:ies|y)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,lookbehind:!0,alias:"variable"},punctuation:/[.,:;(){}]/},n.languages.inform7.string.inside.substitution.inside.rest=n.languages.inform7,n.languages.inform7.string.inside.substitution.inside.rest.text={pattern:/\S(?:\s*\S)*/,alias:"comment"}}return o}var l=p();let g;g=c(l),d=u({__proto__:null,default:g},[l])});export{m as __tla,d as i};
