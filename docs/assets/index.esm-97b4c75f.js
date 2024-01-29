import{r as c}from"./index-76fb7be0.js";import{I as P}from"./iconbase.esm-60e86362.js";function g(){return g=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},g.apply(this,arguments)}function A(n){if(Array.isArray(n))return n}function I(n,r){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var t,i,u,a,o=[],s=!0,f=!1;try{if(u=(e=e.call(n)).next,r===0){if(Object(e)!==e)return;s=!1}else for(;!(s=(t=u.call(e)).done)&&(o.push(t.value),o.length!==r);s=!0);}catch(y){f=!0,i=y}finally{try{if(!s&&e.return!=null&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw i}}return o}}function m(n,r){(r==null||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}function b(n,r){if(n){if(typeof n=="string")return m(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m(n,r)}}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(n,r){return A(n)||I(n,r)||b(n,r)||O()}function l(n){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},l(n)}function w(n){if(Array.isArray(n))return m(n)}function D(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function F(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(n){return w(n)||D(n)||b(n)||F()}function k(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function j(n,r){if(l(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var t=e.call(n,r||"default");if(l(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function L(n){var r=j(n,"string");return l(r)==="symbol"?r:String(r)}function C(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,L(t.key),t)}}function T(n,r,e){return r&&C(n.prototype,r),e&&C(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function N(n,r){var e=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=_(n))||r&&n&&typeof n.length=="number"){e&&(n=e);var t=0,i=function(){};return{s:i,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(f){throw f},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u=!0,a=!1,o;return{s:function(){e=e.call(n)},n:function(){var f=e.next();return u=f.done,f},e:function(f){a=!0,o=f},f:function(){try{!u&&e.return!=null&&e.return()}finally{if(a)throw o}}}}function _(n,r){if(n){if(typeof n=="string")return E(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return E(n,r)}}function E(n,r){(r==null||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}var q=function(){function n(){k(this,n)}return T(n,null,[{key:"equals",value:function(e,t,i){return i&&e&&l(e)==="object"&&t&&l(t)==="object"?this.deepEquals(this.resolveFieldData(e,i),this.resolveFieldData(t,i)):this.deepEquals(e,t)}},{key:"deepEquals",value:function(e,t){if(e===t)return!0;if(e&&t&&l(e)=="object"&&l(t)=="object"){var i=Array.isArray(e),u=Array.isArray(t),a,o,s;if(i&&u){if(o=e.length,o!==t.length)return!1;for(a=o;a--!==0;)if(!this.deepEquals(e[a],t[a]))return!1;return!0}if(i!==u)return!1;var f=e instanceof Date,y=t instanceof Date;if(f!==y)return!1;if(f&&y)return e.getTime()===t.getTime();var d=e instanceof RegExp,h=t instanceof RegExp;if(d!==h)return!1;if(d&&h)return e.toString()===t.toString();var p=Object.keys(e);if(o=p.length,o!==Object.keys(t).length)return!1;for(a=o;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,p[a]))return!1;for(a=o;a--!==0;)if(s=p[a],!this.deepEquals(e[s],t[s]))return!1;return!0}return e!==e&&t!==t}},{key:"resolveFieldData",value:function(e,t){if(!e||!t)return null;try{var i=e[t];if(this.isNotEmpty(i))return i}catch{}if(Object.keys(e).length){if(this.isFunction(t))return t(e);if(this.isNotEmpty(e[t]))return e[t];if(t.indexOf(".")===-1)return e[t];for(var u=t.split("."),a=e,o=0,s=u.length;o<s;++o){if(a==null)return null;a=a[u[o]]}return a}return null}},{key:"findDiffKeys",value:function(e,t){return!e||!t?{}:Object.keys(e).filter(function(i){return!t.hasOwnProperty(i)}).reduce(function(i,u){return i[u]=e[u],i},{})}},{key:"reduceKeys",value:function(e,t){var i={};return!e||!t||t.length===0||Object.keys(e).filter(function(u){return t.some(function(a){return u.startsWith(a)})}).forEach(function(u){i[u]=e[u],delete e[u]}),i}},{key:"reorderArray",value:function(e,t,i){e&&t!==i&&(i>=e.length&&(i%=e.length,t%=e.length),e.splice(i,0,e.splice(t,1)[0]))}},{key:"findIndexInList",value:function(e,t,i){var u=this;return t?i?t.findIndex(function(a){return u.equals(a,e,i)}):t.findIndex(function(a){return a===e}):-1}},{key:"getJSXElement",value:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),u=1;u<t;u++)i[u-1]=arguments[u];return this.isFunction(e)?e.apply(void 0,i):e}},{key:"getItemValue",value:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),u=1;u<t;u++)i[u-1]=arguments[u];return this.isFunction(e)?e.apply(void 0,i):e}},{key:"getProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=e?e[t]:void 0;return u===void 0?i[t]:u}},{key:"getPropCaseInsensitive",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=this.toFlatCase(t);for(var a in e)if(e.hasOwnProperty(a)&&this.toFlatCase(a)===u)return e[a];for(var o in i)if(i.hasOwnProperty(o)&&this.toFlatCase(o)===u)return i[o]}},{key:"getMergedProps",value:function(e,t){return Object.assign({},t,e)}},{key:"getDiffProps",value:function(e,t){return this.findDiffKeys(e,t)}},{key:"getPropValue",value:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),u=1;u<t;u++)i[u-1]=arguments[u];return this.isFunction(e)?e.apply(void 0,i):e}},{key:"getComponentProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(e)?this.getProp(e.props,t,i):void 0}},{key:"getComponentProps",value:function(e,t){return this.isNotEmpty(e)?this.getMergedProps(e.props,t):void 0}},{key:"getComponentDiffProps",value:function(e,t){return this.isNotEmpty(e)?this.getDiffProps(e.props,t):void 0}},{key:"isValidChild",value:function(e,t,i){if(e){var u,a=this.getComponentProp(e,"__TYPE")||(e.type?e.type.displayName:void 0);!a&&e!==null&&e!==void 0&&(u=e.type)!==null&&u!==void 0&&(u=u._payload)!==null&&u!==void 0&&u.value&&(a=e.type._payload.value.find(function(f){return f===t}));var o=a===t;try{var s}catch{}return o}return!1}},{key:"getRefElement",value:function(e){return e?l(e)==="object"&&e.hasOwnProperty("current")?e.current:e:null}},{key:"combinedRefs",value:function(e,t){e&&t&&(typeof t=="function"?t(e.current):t.current=e.current)}},{key:"removeAccents",value:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}},{key:"toFlatCase",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e}},{key:"toCapitalCase",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e[0].toUpperCase()+e.slice(1):e}},{key:"trim",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e.trim():e}},{key:"isEmpty",value:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&l(e)==="object"&&Object.keys(e).length===0}},{key:"isNotEmpty",value:function(e){return!this.isEmpty(e)}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"isObject",value:function(e){return e!==null&&e instanceof Object&&e.constructor===Object}},{key:"isDate",value:function(e){return e!==null&&e instanceof Date&&e.constructor===Date}},{key:"isArray",value:function(e){return e!==null&&Array.isArray(e)}},{key:"isString",value:function(e){return e!==null&&typeof e=="string"}},{key:"isPrintableCharacter",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)}},{key:"isLetter",value:function(e){return/^[a-zA-Z\u00C0-\u017F]$/.test(e)}},{key:"findLast",value:function(e,t){var i;if(this.isNotEmpty(e))try{i=e.findLast(t)}catch{i=v(e).reverse().find(t)}return i}},{key:"findLastIndex",value:function(e,t){var i=-1;if(this.isNotEmpty(e))try{i=e.findLastIndex(t)}catch{i=e.lastIndexOf(v(e).reverse().find(t))}return i}},{key:"sort",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,u=arguments.length>3?arguments[3]:void 0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,o=this.compare(e,t,u,i),s=i;return(this.isEmpty(e)||this.isEmpty(t))&&(s=a===1?i:a),s*o}},{key:"compare",value:function(e,t,i){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=-1,o=this.isEmpty(e),s=this.isEmpty(t);return o&&s?a=0:o?a=u:s?a=-u:typeof e=="string"&&typeof t=="string"?a=i(e,t):a=e<t?-1:e>t?1:0,a}},{key:"localeComparator",value:function(e){return new Intl.Collator(e,{numeric:!0}).compare}},{key:"findChildrenByKey",value:function(e,t){var i=N(e),u;try{for(i.s();!(u=i.n()).done;){var a=u.value;if(a.key===t)return a.children||[];if(a.children){var o=this.findChildrenByKey(a.children,t);if(o.length>0)return o}}}catch(s){i.e(s)}finally{i.f()}return[]}},{key:"mutateFieldData",value:function(e,t,i){if(!(l(e)!=="object"||typeof t!="string"))for(var u=t.split("."),a=e,o=0,s=u.length;o<s;++o){if(o+1-s===0){a[u[o]]=i;break}a[u[o]]||(a[u[o]]={}),a=a[u[o]]}}}]),n}(),x=0;function V(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pr_id_";return x++,"".concat(n).concat(x)}var K=c.memo(c.forwardRef(function(n,r){var e=P.getPTI(n),t=c.useState(n.id),i=S(t,2),u=i[0],a=i[1];return c.useEffect(function(){q.isEmpty(u)&&a(V("pr_icon_clip_"))},[u]),c.createElement("svg",g({ref:r,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c.createElement("g",{clipPath:"url(#".concat(u,")")},c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"})),c.createElement("defs",null,c.createElement("clipPath",{id:u},c.createElement("rect",{width:"14",height:"14",fill:"white"}))))}));K.displayName="TimesCircleIcon";export{K as T};
