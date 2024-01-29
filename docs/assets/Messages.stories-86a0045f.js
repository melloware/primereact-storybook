import{r as a}from"./index-76fb7be0.js";import{a as fe,c as W,m as w,O as ye,l as ge,I as G}from"./api.esm-4644ee78.js";import{C as ve,u as be}from"./componentbase.esm-1c796d7e.js";import{C as de}from"./csstransition.esm-f87c8556.js";import{d as he,n as Oe}from"./hooks.esm-d069ba29.js";import{C as _e}from"./index.esm-506c6505.js";import{E as we,I as je}from"./index.esm-97a33bff.js";import{T as Ce}from"./index.esm-9702a90e.js";import{T as Ne}from"./index.esm-97b4c75f.js";import{R as Se}from"./ripple.esm-1f3221bd.js";import{T as Pe}from"./TransitionGroup-4117e09b.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-60e86362.js";import"./assertThisInitialized-081f9914.js";function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},k.apply(this,arguments)}function X(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function xe(e){if(Array.isArray(e))return X(e)}function Ee(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function re(e,t){if(e){if(typeof e=="string")return X(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return X(e,t)}}function Ie(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(e){return xe(e)||Ee(e)||re(e)||Ie()}function N(e){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(e)}function Te(e,t){if(N(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(N(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ke(e){var t=Te(e,"string");return N(t)==="symbol"?t:String(t)}function q(e,t,r){return t=ke(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Me(e){if(Array.isArray(e))return e}function Ae(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,s,j,p,m=[],g=!0,i=!1;try{if(j=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;g=!1}else for(;!(g=(n=j.call(r)).done)&&(m.push(n.value),m.length!==t);g=!0);}catch(h){i=!0,s=h}finally{try{if(!g&&r.return!=null&&(p=r.return(),Object(p)!==p))return}finally{if(i)throw s}}return m}}function De(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(e,t){return Me(e)||Ae(e,t)||re(e,t)||De()}var Re=`
@layer primereact {
    .p-message-wrapper {
        display: flex;
        align-items: center;
    }

    .p-message-icon {
        flex-shrink: 0;
    }
    
    .p-message-close {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-message-close.p-link {
        margin-left: auto;
        overflow: hidden;
        position: relative;
    }
    
    .p-message-enter {
        opacity: 0;
    }
    
    .p-message-enter-active {
        opacity: 1;
        transition: opacity .3s;
    }
    
    .p-message-exit {
        opacity: 1;
        max-height: 1000px;
    }
    
    .p-message-exit-active {
        opacity: 0;
        max-height: 0;
        margin: 0;
        overflow: hidden;
        transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;
    }
    
    .p-message-exit-active .p-message-close {
        display: none;
    }
}
`,Ue={uimessage:{root:function(t){var r=t.severity;return W("p-message p-component",q({},"p-message-".concat(r),r))},wrapper:"p-message-wrapper",detail:"p-message-detail",summary:"p-message-summary",icon:"p-message-icon",buttonicon:"p-message-close-icon",button:"p-message-close p-link",transition:"p-message"}},I=ve.extend({defaultProps:{__TYPE:"Messages",__parentMetadata:null,id:null,className:null,style:null,transitionOptions:null,onRemove:null,onClick:null,children:void 0},css:{classes:Ue,styles:Re}});function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?L(Object(r),!0).forEach(function(n){q(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var ae=a.memo(a.forwardRef(function(e,t){var r=e.message,n=e.metaData,s=e.ptCallbacks,j=s.ptm,p=s.ptmo,m=s.cx,g=e.index,i=r.message,h=i.severity,O=i.content,M=i.summary,S=i.detail,A=i.closable,D=i.life,P=i.sticky,R=i.className,U=i.style,$=i.contentClassName,v=i.contentStyle,o=i.icon,u=i.closeIcon,y=i.pt,l={index:g},b=c(c({},n),l),C=Oe(function(){F(null)},D||3e3,!P),x=ne(C,1),H=x[0],_=function(f,d){return j(f,c({hostName:e.hostName},d))},F=function(f){H(),e.onClose&&e.onClose(e.message),f&&(f.preventDefault(),f.stopPropagation())},oe=function(){e.onClick&&e.onClick(e.message)},ie=function(){if(A!==!1){var f=ge("close"),d=w({className:m("uimessage.buttonicon")},_("buttonicon",b),p(y,"buttonicon",c(c({},l),{},{hostName:e.hostName}))),K=u||a.createElement(Ce,d),z=G.getJSXIcon(K,c({},d),{props:e}),B=w({type:"button",className:m("uimessage.button"),"aria-label":f,onClick:F},_("button",b),p(y,"button",c(c({},l),{},{hostName:e.hostName})));return a.createElement("button",B,z,a.createElement(Se,null))}return null},ce=function(){if(e.message){var f=w({className:m("uimessage.icon")},_("icon",b),p(y,"icon",c(c({},l),{},{hostName:e.hostName}))),d=o;if(!o)switch(h){case"info":d=a.createElement(je,f);break;case"warn":d=a.createElement(we,f);break;case"error":d=a.createElement(Ne,f);break;case"success":d=a.createElement(_e,f);break}var K=G.getJSXIcon(d,c({},f),{props:e}),z=w({className:m("uimessage.summary")},_("summary",b),p(y,"summary",c(c({},l),{},{hostName:e.hostName}))),B=w({className:m("uimessage.detail")},_("detail",b),p(y,"detail",c(c({},l),{},{hostName:e.hostName})));return O||a.createElement(a.Fragment,null,K,a.createElement("span",z,M),a.createElement("span",B,S))}return null},le=ie(),me=ce(),ue=w({className:W($,m("uimessage.wrapper")),style:v},_("wrapper",b),p(y,"wrapper",c(c({},l),{},{hostName:e.hostName}))),pe=w({ref:t,className:W(R,m("uimessage.root",{severity:h})),style:U,role:"alert","aria-live":"assertive","aria-atomic":"true",onClick:oe},_("root",b),p(y,"root",c(c({},l),{},{hostName:e.hostName})));return a.createElement("div",pe,a.createElement("div",ue,me,le))}));ae.displayName="UIMessage";function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Y(Object(r),!0).forEach(function(n){q(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var V=0,se=a.memo(a.forwardRef(function(e,t){var r=he(),n=a.useContext(fe),s=I.getProps(e,n),j=a.useState([]),p=ne(j,2),m=p[0],g=p[1],i=a.useRef(null),h=Q(Q({props:s},s.__parentMetadata),{},{state:{messages:m}}),O=I.setMetaData(h);be(I.css.styles,O.isUnstyled,{name:"messages"});var M=function(o){o&&g(function(u){return S(u,o,!0)})},S=function(o,u,y){var l;if(Array.isArray(u)){var b=u.reduce(function(x,H){return x.push({_pId:V++,message:H}),x},[]);y?l=o?[].concat(J(o),J(b)):b:l=b}else{var C={_pId:V++,message:u};y?l=o?[].concat(J(o),[C]):[C]:l=[C]}return l},A=function(){g([])},D=function(o){g(function(u){return S(u,o,!1)})},P=function(o){var u=o._pId?o.message:o;g(function(y){return y.filter(function(l){return l._pId!==o._pId&&!ye.deepEquals(l.message,u)})}),s.onRemove&&s.onRemove(u)},R=function(o){P(o)};a.useImperativeHandle(t,function(){return{props:s,show:M,replace:D,remove:P,clear:A,getElement:function(){return i.current}}});var U=r({id:s.id,className:s.className,style:s.style},I.getOtherProps(s),O.ptm("root")),$=r({classNames:O.cx("uimessage.transition"),unmountOnExit:!0,timeout:{enter:300,exit:300},options:s.transitionOptions},O.ptm("transition"));return a.createElement("div",k({ref:i},U),a.createElement(Pe,null,m&&m.map(function(v,o){var u=a.createRef();return a.createElement(de,k({nodeRef:u,key:v._pId},$),a.createElement(ae,{hostName:"Messages",ref:u,message:v,onClick:s.onClick,onClose:R,ptCallbacks:O,metaData:h,index:o}))})))}));se.displayName="Messages";const et={title:"Messages/Messages",component:se,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null}}},T={args:{}};var Z,ee,te;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {}
}`,...(te=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const tt=["Default"];export{T as Default,tt as __namedExportsOrder,et as default};
