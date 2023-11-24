import{r as a}from"./index-76fb7be0.js";import{P as fe,m as O,c as J,O as ye,l as ge,I as F}from"./api.esm-2e2d159c.js";import{C as be,u as de}from"./componentbase.esm-b0caea1e.js";import{C as ve}from"./csstransition.esm-653f5084.js";import{i as he}from"./hooks.esm-c93f10ee.js";import{C as Oe}from"./index.esm-5bc749e4.js";import{E as _e,I as we}from"./index.esm-1a721830.js";import{T as je}from"./index.esm-1e412bae.js";import{T as Ce}from"./index.esm-e304a04b.js";import{R as Ne}from"./ripple.esm-cba91116.js";import{T as Se}from"./TransitionGroup-ba1a53bb.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-439d6f79.js";import"./assertThisInitialized-081f9914.js";function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(this,arguments)}function W(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Pe(e){if(Array.isArray(e))return W(e)}function xe(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function te(e,t){if(e){if(typeof e=="string")return W(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(e,t)}}function Ee(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(e){return Pe(e)||xe(e)||te(e)||Ee()}function C(e){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(e)}function Ie(e,t){if(C(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(C(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Te(e){var t=Ie(e,"string");return C(t)==="symbol"?t:String(t)}function X(e,t,r){return t=Te(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ke(e){if(Array.isArray(e))return e}function Me(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,f,_,u,c=[],h=!0,s=!1;try{if(_=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;h=!1}else for(;!(h=(n=_.call(r)).done)&&(c.push(n.value),c.length!==t);h=!0);}catch(d){s=!0,f=d}finally{try{if(!h&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw f}}return c}}function Ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(e,t){return ke(e)||Me(e,t)||te(e,t)||Ae()}var De=`
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
`,Re={uimessage:{root:function(t){var r=t.severity;return J("p-message p-component",X({},"p-message-".concat(r),r))},wrapper:"p-message-wrapper",detail:"p-message-detail",summary:"p-message-summary",icon:"p-message-icon",buttonicon:"p-message-close-icon",button:"p-message-close p-link",transition:"p-message"}},E=be.extend({defaultProps:{__TYPE:"Messages",__parentMetadata:null,id:null,className:null,style:null,transitionOptions:null,onRemove:null,onClick:null,children:void 0},css:{classes:Re,styles:De}});function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(f){return Object.getOwnPropertyDescriptor(e,f).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?G(Object(r),!0).forEach(function(n){X(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var ne=a.memo(a.forwardRef(function(e,t){var r=e.message,n=e.metaData,f=e.ptCallbacks,_=f.ptm,u=f.ptmo,c=f.cx,h=e.index,s=r.message,d=s.severity,k=s.content,N=s.summary,M=s.detail,A=s.closable,S=s.life,D=s.sticky,R=s.className,U=s.style,g=s.contentClassName,o=s.contentStyle,l=s.icon,j=s.closeIcon,m=s.pt,y={index:h},b=i(i({},n),y),P=he(function(){q(null)},S||3e3,!D),$=re(P,1),se=$[0],w=function(p,v){return _(p,i({hostName:e.hostName},v))},q=function(p){se(),e.onClose&&e.onClose(e.message),p&&(p.preventDefault(),p.stopPropagation())},oe=function(){e.onClick&&e.onClick(e.message)},ie=function(){if(A!==!1){var p=ge("close"),v=O({className:c("uimessage.buttonicon"),"aria-hidden":!0},w("buttonicon",b),u(m,"buttonicon",i(i({},y),{},{hostName:e.hostName}))),H=j||a.createElement(je,v),K=F.getJSXIcon(H,i({},v),{props:e}),z=O({type:"button",className:c("uimessage.button"),"aria-label":p,onClick:q},w("button",b),u(m,"button",i(i({},y),{},{hostName:e.hostName})));return a.createElement("button",z,K,a.createElement(Ne,null))}return null},ce=function(){if(e.message){var p=O({className:c("uimessage.icon")},w("icon",b),u(m,"icon",i(i({},y),{},{hostName:e.hostName}))),v=l;if(!l)switch(d){case"info":v=a.createElement(we,p);break;case"warn":v=a.createElement(_e,p);break;case"error":v=a.createElement(Ce,p);break;case"success":v=a.createElement(Oe,p);break}var H=F.getJSXIcon(v,i({},p),{props:e}),K=O({className:c("uimessage.summary")},w("summary",b),u(m,"summary",i(i({},y),{},{hostName:e.hostName}))),z=O({className:c("uimessage.detail")},w("detail",b),u(m,"detail",i(i({},y),{},{hostName:e.hostName})));return k||a.createElement(a.Fragment,null,H,a.createElement("span",K,N),a.createElement("span",z,M))}return null},le=ie(),me=ce(),ue=O({className:J(g,c("uimessage.wrapper")),style:o},w("wrapper",b),u(m,"wrapper",i(i({},y),{},{hostName:e.hostName}))),pe=O({ref:t,className:J(R,c("uimessage.root",{severity:d})),style:U,onClick:oe},w("root",b),u(m,"root",i(i({},y),{},{hostName:e.hostName})));return a.createElement("div",pe,a.createElement("div",ue,me,le))}));ne.displayName="UIMessage";function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(f){return Object.getOwnPropertyDescriptor(e,f).enumerable})),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?L(Object(r),!0).forEach(function(n){X(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var Q=0,ae=a.memo(a.forwardRef(function(e,t){var r=a.useContext(fe),n=E.getProps(e,r),f=a.useState([]),_=re(f,2),u=_[0],c=_[1],h=a.useRef(null),s=Y(Y({props:n},n.__parentMetadata),{},{state:{messages:u}}),d=E.setMetaData(s);de(E.css.styles,d.isUnstyled,{name:"messages"});var k=function(o){o&&c(function(l){return N(l,o,!0)})},N=function(o,l,j){var m;if(Array.isArray(l)){var y=l.reduce(function(P,$){return P.push({_pId:Q++,message:$}),P},[]);j?m=o?[].concat(B(o),B(y)):y:m=y}else{var b={_pId:Q++,message:l};j?m=o?[].concat(B(o),[b]):[b]:m=[b]}return m},M=function(){c([])},A=function(o){c(function(l){return N(l,o,!1)})},S=function(o){var l=o._pId?o.message:o;c(function(j){return j.filter(function(m){return m._pId!==o._pId&&!ye.deepEquals(m.message,l)})}),n.onRemove&&n.onRemove(l)},D=function(o){S(o)};a.useImperativeHandle(t,function(){return{props:n,show:k,replace:A,remove:S,clear:M,getElement:function(){return h.current}}});var R=O({id:n.id,className:n.className,style:n.style},E.getOtherProps(n),d.ptm("root")),U=O({classNames:d.cx("transition"),unmountOnExit:!0,timeout:{enter:300,exit:300},options:n.transitionOptions},d.ptm("transition"));return a.createElement("div",T({ref:h},R),a.createElement(Se,null,u&&u.map(function(g,o){var l=a.createRef();return a.createElement(ve,T({nodeRef:l,key:g._pId},U),a.createElement(ne,{hostName:"Messages",ref:l,message:g,onClick:n.onClick,onClose:D,ptCallbacks:d,metaData:s,index:o}))})))}));ae.displayName="Messages";const Ze={title:"Messages/Messages",component:ae,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null}}},I={args:{}};var V,Z,ee;I.parameters={...I.parameters,docs:{...(V=I.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {}
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const et=["Default"];export{I as Default,et as __namedExportsOrder,Ze as default};
//# sourceMappingURL=Messages.stories-d107a1d2.js.map
