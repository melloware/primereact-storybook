import{r as l}from"./index-76fb7be0.js";import{a as rt,l as N,O as E,D as P,c as I,P as j,Z as J,I as it}from"./api.esm-4644ee78.js";import{C as ot,u as at}from"./componentbase.esm-1c796d7e.js";import{C as st}from"./csstransition.esm-f87c8556.js";import{d as lt,j as ut,k as pt,E as ct,i as ft,a as dt,c as mt}from"./hooks.esm-d069ba29.js";import{E as yt}from"./index.esm-6f2a6725.js";import{I as gt}from"./iconbase.esm-60e86362.js";import{I as vt}from"./inputtext.esm-69345109.js";import{O as ht}from"./overlayservice.esm-582e1694.js";import{P as bt}from"./portal.esm-16954874.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./keyfilter.esm-59cdc628.js";import"./tooltip.esm-2acddad6.js";function X(){return X=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},X.apply(this,arguments)}function wt(r){if(Array.isArray(r))return r}function xt(r,n){var e=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var t,i,o,a,s=[],u=!0,f=!1;try{if(o=(e=e.call(r)).next,n===0){if(Object(e)!==e)return;u=!1}else for(;!(u=(t=o.call(e)).done)&&(s.push(t.value),s.length!==n);u=!0);}catch(g){f=!0,i=g}finally{try{if(!u&&e.return!=null&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw i}}return s}}function W(r,n){(n==null||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}function be(r,n){if(r){if(typeof r=="string")return W(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return W(r,n)}}function Et(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ct(r,n){return wt(r)||xt(r,n)||be(r,n)||Et()}function m(r){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},m(r)}function St(r){if(Array.isArray(r))return W(r)}function Ot(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Pt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(r){return St(r)||Ot(r)||be(r)||Pt()}function It(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function kt(r,n){if(m(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var t=e.call(r,n||"default");if(m(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function Rt(r){var n=kt(r,"string");return m(n)==="symbol"?n:String(n)}function ce(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,Rt(t.key),t)}}function At(r,n,e){return n&&ce(r.prototype,n),e&&ce(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function jt(r,n){var e=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=Dt(r))||n&&r&&typeof r.length=="number"){e&&(r=e);var t=0,i=function(){};return{s:i,n:function(){return t>=r.length?{done:!0}:{done:!1,value:r[t++]}},e:function(f){throw f},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,a=!1,s;return{s:function(){e=e.call(r)},n:function(){var f=e.next();return o=f.done,f},e:function(f){a=!0,s=f},f:function(){try{!o&&e.return!=null&&e.return()}finally{if(a)throw s}}}}function Dt(r,n){if(r){if(typeof r=="string")return fe(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return fe(r,n)}}function fe(r,n){(n==null||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}var Tt=function(){function r(){It(this,r)}return At(r,null,[{key:"equals",value:function(e,t,i){return i&&e&&m(e)==="object"&&t&&m(t)==="object"?this.deepEquals(this.resolveFieldData(e,i),this.resolveFieldData(t,i)):this.deepEquals(e,t)}},{key:"deepEquals",value:function(e,t){if(e===t)return!0;if(e&&t&&m(e)=="object"&&m(t)=="object"){var i=Array.isArray(e),o=Array.isArray(t),a,s,u;if(i&&o){if(s=e.length,s!==t.length)return!1;for(a=s;a--!==0;)if(!this.deepEquals(e[a],t[a]))return!1;return!0}if(i!==o)return!1;var f=e instanceof Date,g=t instanceof Date;if(f!==g)return!1;if(f&&g)return e.getTime()===t.getTime();var v=e instanceof RegExp,R=t instanceof RegExp;if(v!==R)return!1;if(v&&R)return e.toString()===t.toString();var A=Object.keys(e);if(s=A.length,s!==Object.keys(t).length)return!1;for(a=s;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,A[a]))return!1;for(a=s;a--!==0;)if(u=A[a],!this.deepEquals(e[u],t[u]))return!1;return!0}return e!==e&&t!==t}},{key:"resolveFieldData",value:function(e,t){if(!e||!t)return null;try{var i=e[t];if(this.isNotEmpty(i))return i}catch{}if(Object.keys(e).length){if(this.isFunction(t))return t(e);if(this.isNotEmpty(e[t]))return e[t];if(t.indexOf(".")===-1)return e[t];for(var o=t.split("."),a=e,s=0,u=o.length;s<u;++s){if(a==null)return null;a=a[o[s]]}return a}return null}},{key:"findDiffKeys",value:function(e,t){return!e||!t?{}:Object.keys(e).filter(function(i){return!t.hasOwnProperty(i)}).reduce(function(i,o){return i[o]=e[o],i},{})}},{key:"reduceKeys",value:function(e,t){var i={};return!e||!t||t.length===0||Object.keys(e).filter(function(o){return t.some(function(a){return o.startsWith(a)})}).forEach(function(o){i[o]=e[o],delete e[o]}),i}},{key:"reorderArray",value:function(e,t,i){e&&t!==i&&(i>=e.length&&(i%=e.length,t%=e.length),e.splice(i,0,e.splice(t,1)[0]))}},{key:"findIndexInList",value:function(e,t,i){var o=this;return t?i?t.findIndex(function(a){return o.equals(a,e,i)}):t.findIndex(function(a){return a===e}):-1}},{key:"getJSXElement",value:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return this.isFunction(e)?e.apply(void 0,i):e}},{key:"getItemValue",value:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return this.isFunction(e)?e.apply(void 0,i):e}},{key:"getProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=e?e[t]:void 0;return o===void 0?i[t]:o}},{key:"getPropCaseInsensitive",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=this.toFlatCase(t);for(var a in e)if(e.hasOwnProperty(a)&&this.toFlatCase(a)===o)return e[a];for(var s in i)if(i.hasOwnProperty(s)&&this.toFlatCase(s)===o)return i[s]}},{key:"getMergedProps",value:function(e,t){return Object.assign({},t,e)}},{key:"getDiffProps",value:function(e,t){return this.findDiffKeys(e,t)}},{key:"getPropValue",value:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return this.isFunction(e)?e.apply(void 0,i):e}},{key:"getComponentProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(e)?this.getProp(e.props,t,i):void 0}},{key:"getComponentProps",value:function(e,t){return this.isNotEmpty(e)?this.getMergedProps(e.props,t):void 0}},{key:"getComponentDiffProps",value:function(e,t){return this.isNotEmpty(e)?this.getDiffProps(e.props,t):void 0}},{key:"isValidChild",value:function(e,t,i){if(e){var o,a=this.getComponentProp(e,"__TYPE")||(e.type?e.type.displayName:void 0);!a&&e!==null&&e!==void 0&&(o=e.type)!==null&&o!==void 0&&(o=o._payload)!==null&&o!==void 0&&o.value&&(a=e.type._payload.value.find(function(f){return f===t}));var s=a===t;try{var u}catch{}return s}return!1}},{key:"getRefElement",value:function(e){return e?m(e)==="object"&&e.hasOwnProperty("current")?e.current:e:null}},{key:"combinedRefs",value:function(e,t){e&&t&&(typeof t=="function"?t(e.current):t.current=e.current)}},{key:"removeAccents",value:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}},{key:"toFlatCase",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e}},{key:"toCapitalCase",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e[0].toUpperCase()+e.slice(1):e}},{key:"trim",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e.trim():e}},{key:"isEmpty",value:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&m(e)==="object"&&Object.keys(e).length===0}},{key:"isNotEmpty",value:function(e){return!this.isEmpty(e)}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"isObject",value:function(e){return e!==null&&e instanceof Object&&e.constructor===Object}},{key:"isDate",value:function(e){return e!==null&&e instanceof Date&&e.constructor===Date}},{key:"isArray",value:function(e){return e!==null&&Array.isArray(e)}},{key:"isString",value:function(e){return e!==null&&typeof e=="string"}},{key:"isPrintableCharacter",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)}},{key:"isLetter",value:function(e){return/^[a-zA-Z\u00C0-\u017F]$/.test(e)}},{key:"findLast",value:function(e,t){var i;if(this.isNotEmpty(e))try{i=e.findLast(t)}catch{i=pe(e).reverse().find(t)}return i}},{key:"findLastIndex",value:function(e,t){var i=-1;if(this.isNotEmpty(e))try{i=e.findLastIndex(t)}catch{i=e.lastIndexOf(pe(e).reverse().find(t))}return i}},{key:"sort",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,o=arguments.length>3?arguments[3]:void 0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,s=this.compare(e,t,o,i),u=i;return(this.isEmpty(e)||this.isEmpty(t))&&(u=a===1?i:a),u*s}},{key:"compare",value:function(e,t,i){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=-1,s=this.isEmpty(e),u=this.isEmpty(t);return s&&u?a=0:s?a=o:u?a=-o:typeof e=="string"&&typeof t=="string"?a=i(e,t):a=e<t?-1:e>t?1:0,a}},{key:"localeComparator",value:function(e){return new Intl.Collator(e,{numeric:!0}).compare}},{key:"findChildrenByKey",value:function(e,t){var i=jt(e),o;try{for(i.s();!(o=i.n()).done;){var a=o.value;if(a.key===t)return a.children||[];if(a.children){var s=this.findChildrenByKey(a.children,t);if(s.length>0)return s}}}catch(u){i.e(u)}finally{i.f()}return[]}},{key:"mutateFieldData",value:function(e,t,i){if(!(m(e)!=="object"||typeof t!="string"))for(var o=t.split("."),a=e,s=0,u=o.length;s<u;++s){if(s+1-u===0){a[o[s]]=i;break}a[o[s]]||(a[o[s]]={}),a=a[o[s]]}}}]),r}(),de=0;function Lt(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pr_id_";return de++,"".concat(r).concat(de)}var we=l.memo(l.forwardRef(function(r,n){var e=gt.getPTI(r),t=l.useState(r.id),i=Ct(t,2),o=i[0],a=i[1];return l.useEffect(function(){Tt.isEmpty(o)&&a(Lt("pr_icon_clip_"))},[o]),l.createElement("svg",X({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),l.createElement("g",{clipPath:"url(#".concat(o,")")},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",fill:"currentColor"})),l.createElement("defs",null,l.createElement("clipPath",{id:o},l.createElement("rect",{width:"14",height:"14",fill:"white"}))))}));we.displayName="EyeSlashIcon";function K(){return K=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},K.apply(this,arguments)}function D(r){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},D(r)}function _t(r,n){if(D(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var t=e.call(r,n||"default");if(D(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function Ft(r){var n=_t(r,"string");return D(n)==="symbol"?n:String(n)}function Nt(r,n,e){return n=Ft(n),n in r?Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[n]=e,r}function Mt(r){if(Array.isArray(r))return r}function $t(r,n){var e=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var t,i,o,a,s=[],u=!0,f=!1;try{if(o=(e=e.call(r)).next,n===0){if(Object(e)!==e)return;u=!1}else for(;!(u=(t=o.call(e)).done)&&(s.push(t.value),s.length!==n);u=!0);}catch(g){f=!0,i=g}finally{try{if(!u&&e.return!=null&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw i}}return s}}function me(r,n){(n==null||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}function Ut(r,n){if(r){if(typeof r=="string")return me(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return me(r,n)}}function Kt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(r,n){return Mt(r)||$t(r,n)||Ut(r,n)||Kt()}var Vt={root:function(n){var e=n.props,t=n.isFilled,i=n.focusedState;return I("p-password p-component p-inputwrapper",{"p-inputwrapper-filled":t,"p-inputwrapper-focus":i,"p-input-icon-right":e.toggleMask},e.className)},input:function(n){var e=n.props;return I("p-password-input",e.inputClassName)},panel:function(n){var e=n.props,t=n.context;return I("p-password-panel p-component",e.panelClassName,{"p-input-filled":t&&t.inputStyle==="filled"||j.inputStyle==="filled","p-ripple-disabled":t&&t.ripple===!1||j.ripple===!1})},meter:"p-password-meter",meterLabel:function(n){var e=n.strength;return I("p-password-strength",e)},info:function(n){var e=n.strength;return I("p-password-info",e)},transition:"p-connected-overlay"},Ht=`
@layer primereact {
    .p-password {
        position: relative;
        display: inline-flex;
    }
    
    .p-password-panel {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-password .p-password-panel {
        min-width: 100%;
    }
    
    .p-password-meter {
        height: 10px;
    }
    
    .p-password-strength {
        height: 100%;
        width: 0%;
        transition: width 1s ease-in-out;
    }
    
    .p-fluid .p-password {
        display: flex;
    }
    
    .p-password-input::-ms-reveal,
    .p-password-input::-ms-clear {
        display: none;
    }
}
`,M=ot.extend({defaultProps:{__TYPE:"Password",id:null,inputId:null,inputRef:null,promptLabel:null,weakLabel:null,mediumLabel:null,strongLabel:null,mediumRegex:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",strongRegex:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",feedback:!0,toggleMask:!1,appendTo:null,header:null,content:null,footer:null,showIcon:null,hideIcon:null,icon:null,tooltip:null,tooltipOptions:null,style:null,className:null,inputStyle:null,inputClassName:null,panelStyle:null,panelClassName:null,transitionOptions:null,tabIndex:null,value:void 0,onInput:null,onShow:null,onHide:null,children:void 0},css:{classes:Vt,styles:Ht}});function ye(r,n){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),e.push.apply(e,t)}return e}function $(r){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ye(Object(e),!0).forEach(function(t){Nt(r,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):ye(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))})}return r}var xe=l.memo(l.forwardRef(function(r,n){var e=lt(),t=l.useContext(rt),i=M.getProps(r,t),o=i.promptLabel||N("passwordPrompt"),a=i.weakLabel||N("weak"),s=i.mediumLabel||N("medium"),u=i.strongLabel||N("strong"),f=l.useState(!1),g=k(f,2),v=g[0],R=g[1],A=l.useState(null),Y=k(A,2),T=Y[0],Ee=Y[1],Ce=l.useState(o),G=k(Ce,2),L=G[0],V=G[1],Se=l.useState(!1),Q=k(Se,2),H=Q[0],ee=Q[1],Oe=l.useState(!1),te=k(Oe,2),_=te[0],Pe=te[1],C=l.useRef(null),h=l.useRef(null),b=l.useRef(i.inputRef),ne=l.useRef(new RegExp(i.mediumRegex)),re=l.useRef(new RegExp(i.strongRegex)),Ie=_?"text":"password",ie={props:i,state:{overlayVisible:v,meter:T,infoText:L,focused:H,unmasked:_}},B=M.setMetaData(ie),w=B.ptm,O=B.cx,ke=B.isUnstyled;at(M.css.styles,ke,{name:"password"});var oe=ut("password",v);pt({callback:function(){z()},when:v&&i.feedback&&oe,priority:[ct.PASSWORD,oe]});var Re=ft({target:C,overlay:h,listener:function(p,d){var S=d.valid;S&&z()},when:v}),ae=k(Re,2),Ae=ae[0],je=ae[1],se=b.current&&b.current.value,F=l.useMemo(function(){return E.isNotEmpty(i.value)||E.isNotEmpty(i.defaultValue)||E.isNotEmpty(se)},[i.value,i.defaultValue,se]),De=function(){if(T){var p=null;switch(T.strength){case"weak":p=a;break;case"medium":p=s;break;case"strong":p=u;break}p&&L!==p&&V(p)}else L!==o&&V(o)},Te=function(p){i.feedback&&ht.emit("overlay-click",{originalEvent:p,target:C.current})},Z=function(){Pe(function(p){return!p})},le=function(){De(),R(!0)},z=function(){R(!1)},ue=function(){b.current&&P.alignOverlay(h.current,b.current.parentElement,i.appendTo||t&&t.appendTo||j.appendTo)},Le=function(){J.set("overlay",h.current,t&&t.autoZIndex||j.autoZIndex,t&&t.zIndex.overlay||j.zIndex.overlay),P.addStyles(h.current,{position:"absolute",top:"0",left:"0"}),ue()},_e=function(){Ae(),i.onShow&&i.onShow()},Fe=function(){je()},Ne=function(){J.clear(h.current),i.onHide&&i.onHide()},Me=function(p){ee(!0),i.feedback&&le(),i.onFocus&&i.onFocus(p)},$e=function(p){ee(!1),i.feedback&&z(),i.onBlur&&i.onBlur(p)},Ue=function(p){var d=p.code;if(i.feedback){var S=p.target.value,x=null,y=null;switch(Ve(S)){case 1:x=a,y={strength:"weak",width:"33.33%"};break;case 2:x=s,y={strength:"medium",width:"66.66%"};break;case 3:x=u,y={strength:"strong",width:"100%"};break;default:x=o,y=null;break}Ee(y),V(x),d&&d!=="Escape"&&!v&&le()}i.onKeyUp&&i.onKeyUp(p)},Ke=function(p,d){i.onInput&&i.onInput(p,d),i.onChange||(E.isNotEmpty(p.target.value)?P.addClass(C.current,"p-inputwrapper-filled"):P.removeClass(C.current,"p-inputwrapper-filled"))},Ve=function(p){return re.current.test(p)?3:ne.current.test(p)?2:p.length?1:0};l.useImperativeHandle(n,function(){return{props:i,toggleMask:Z,focus:function(){return P.focus(b.current)},getElement:function(){return C.current},getOverlay:function(){return h.current},getInput:function(){return b.current}}}),l.useEffect(function(){E.combinedRefs(b,i.inputRef)},[b,i.inputRef]),l.useEffect(function(){ne.current=new RegExp(i.mediumRegex)},[i.mediumRegex]),l.useEffect(function(){re.current=new RegExp(i.strongRegex)},[i.strongRegex]),l.useEffect(function(){!F&&P.hasClass(C.current,"p-inputwrapper-filled")&&P.removeClass(C.current,"p-inputwrapper-filled")},[F]),dt(function(){ue()}),mt(function(){J.clear(h.current)});var He=function(){var p,d=e(w("hideIcon")),S=e(w("showIcon"));_?p=i.hideIcon||l.createElement(we,d):p=i.showIcon||l.createElement(yt,S);var x=it.getJSXIcon(p,_?$({},d):$({},S),{props:i});if(i.toggleMask){var y=l.createElement("i",{onClick:Z}," ",x," ");if(i.icon){var q={onClick:Z,className:Ze,element:y,props:i};y=E.getJSXElement(i.icon,q)}return y}return null},Be=function(){var p=T||{strength:"",width:"0%"},d=p.strength,S=p.width,x=E.getJSXElement(i.header,i),y=E.getJSXElement(i.footer,i),q=e({className:O("panel",{context:t}),style:i.panelStyle,onClick:Te},w("panel")),Ye=e({className:O("meter")},w("meter")),Ge=e({className:O("meterLabel",{strength:d}),style:{width:S}},w("meterLabel")),Qe=e({className:O("info",{strength:d})},w("info")),et=i.content?E.getJSXElement(i.content,i):l.createElement(l.Fragment,null,l.createElement("div",Ye,l.createElement("div",Ge)),l.createElement("div",Qe,L)),tt=e({classNames:O("transition"),in:v,timeout:{enter:120,exit:100},options:i.transitionOptions,unmountOnExit:!0,onEnter:Le,onEntered:_e,onExit:Fe,onExited:Ne},w("transition")),nt=l.createElement(st,K({nodeRef:h},tt),l.createElement("div",K({ref:h},q),x,et,y));return l.createElement(bt,{element:nt,appendTo:i.appendTo})},Ze=I("p-password p-component p-inputwrapper",{"p-inputwrapper-filled":F,"p-inputwrapper-focus":H,"p-input-icon-right":i.toggleMask},i.className),ze=M.getOtherProps(i),qe=He(),Je=Be(),Xe=e({ref:C,id:i.id,className:O("root",{isFilled:F,focusedState:H}),style:i.style},w("root")),We=e($($({ref:b,id:i.inputId},ze),{},{className:I(i.inputClassName,O("input")),onBlur:$e,onFocus:Me,onInput:Ke,onKeyUp:Ue,style:i.inputStyle,tabIndex:i.tabIndex,tooltip:i.tooltip,tooltipOptions:i.tooltipOptions,type:Ie,value:i.value,__parentMetadata:{parent:ie}}),w("input"));return l.createElement("div",Xe,l.createElement(vt,We),qe,Je)}));xe.displayName="Password";const an={title:"Form/Password",component:xe,parameters:{layout:"centered"},argTypes:{appendTo:{control:"select",description:"DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.",options:["null","HTMLElement","self"]},children:{control:"text",description:"Used to get the child elements of the component.",options:null},content:{control:"text",description:'Template of panel content if "feedback" is enabled.',options:null},feedback:{control:"boolean",description:"Whether to show the strength indicator or not.",options:null},footer:{control:"text",description:'Template of panel footer if "feedback" is enabled.',options:null},header:{control:"text",description:'Template of panel header if "feedback" is enabled.',options:null},hideIcon:{control:"select",description:"Hide icon template.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},icon:{control:"text",description:'Template of mask icon if "toggleMask" is enabled.',options:null},inputClassName:{control:"text",description:"Style class of the input field.",options:null},inputId:{control:"text",description:"Identifier of the input element.",options:null},inputRef:{control:"object",description:"Reference of the input element.",options:null},inputStyle:{control:"object",description:"Inline style of the input field.",options:null},keyfilter:{control:"object",description:"Format definition of the keys to block.",options:null},mediumLabel:{control:"text",description:"Text for a medium password.",options:null},mediumRegex:{control:"text",description:"Regex for a medium level password.",options:null},panelClassName:{control:"text",description:"Style class of the overlay panel element.",options:null},panelStyle:{control:"object",description:"Inline style of the overlay panel element.",options:null},promptLabel:{control:"text",description:"Text to prompt password entry.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},showIcon:{control:"select",description:"Show icon template.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},strongLabel:{control:"text",description:"Text for a strong password.",options:null},strongRegex:{control:"text",description:"Regex for a strong level password.",options:null},toggleMask:{control:"boolean",description:"Whether to show an icon to display the password as plain text.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},weakLabel:{control:"text",description:"Text for a weak password.",options:null}}},U={args:{unstyled:!1}};var ge,ve,he;U.parameters={...U.parameters,docs:{...(ge=U.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(he=(ve=U.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};const sn=["Default"];export{U as Default,sn as __namedExportsOrder,an as default};
