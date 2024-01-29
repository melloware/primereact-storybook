import{r as o}from"./index-76fb7be0.js";import{a as x,O,c as s,I as F}from"./api.esm-4644ee78.js";import{C as N,u as _}from"./componentbase.esm-1c796d7e.js";import{d as S}from"./hooks.esm-d069ba29.js";import{S as J}from"./index.esm-91c9b7b7.js";import{R as X}from"./ripple.esm-1f3221bd.js";import{T as q}from"./tooltip.esm-2acddad6.js";function m(){return m=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r])}return a},m.apply(this,arguments)}function g(a){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(a)}function G(a,t){if(g(a)!=="object"||a===null)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var r=e.call(a,t||"default");if(g(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function Q(a){var t=G(a,"string");return g(t)==="symbol"?t:String(t)}function l(a,t,e){return t=Q(t),t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var V={root:function(t){var e=t.props;return s("p-badge p-component",l({"p-badge-no-gutter":O.isNotEmpty(e.value)&&String(e.value).length===1,"p-badge-dot":O.isEmpty(e.value),"p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge"},"p-badge-".concat(e.severity),e.severity!==null))}},W=`
@layer primereact {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }
    
    .p-overlay-badge {
        position: relative;
    }
    
    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }
    
    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }
    
    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,v=N.extend({defaultProps:{__TYPE:"Badge",__parentMetadata:null,value:null,severity:null,size:null,style:null,className:null,children:void 0},css:{classes:V,styles:W}});function w(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),e.push.apply(e,r)}return e}function Z(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?w(Object(e),!0).forEach(function(r){l(a,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(e,r))})}return a}var B=o.memo(o.forwardRef(function(a,t){var e=S(),r=o.useContext(x),n=v.getProps(a,r),i=v.setMetaData(Z({props:n},n.__parentMetadata)),f=i.ptm,d=i.cx,p=i.isUnstyled;_(v.css.styles,p,{name:"badge"});var u=o.useRef(null);o.useImperativeHandle(t,function(){return{props:n,getElement:function(){return u.current}}});var P=e({ref:u,style:n.style,className:s(n.className,d("root"))},v.getOtherProps(n),f("root"));return o.createElement("span",P,n.value)}));B.displayName="Badge";var ee={icon:function(t){var e=t.props;return s("p-button-icon p-c",l({},"p-button-icon-".concat(e.iconPos),e.label))},loadingIcon:function(t){var e=t.props,r=t.className;return s(r,{"p-button-loading-icon":e.loading})},label:"p-button-label p-c",root:function(t){var e=t.props,r=t.size,n=t.disabled;return s("p-button p-component",l(l(l(l({"p-button-icon-only":(e.icon||e.loading)&&!e.label&&!e.children,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-disabled":n,"p-button-loading":e.loading,"p-button-outlined":e.outlined,"p-button-raised":e.raised,"p-button-link":e.link,"p-button-text":e.text,"p-button-rounded":e.rounded,"p-button-loading-label-only":e.loading&&!e.icon&&e.label},"p-button-loading-".concat(e.iconPos),e.loading&&e.label),"p-button-".concat(r),r),"p-button-".concat(e.severity),e.severity),"p-button-plain",e.plain))}},y=N.extend({defaultProps:{__TYPE:"Button",__parentMetadata:null,badge:null,badgeClassName:null,className:null,children:void 0,disabled:!1,icon:null,iconPos:"left",label:null,link:!1,loading:!1,loadingIcon:null,outlined:!1,plain:!1,raised:!1,rounded:!1,severity:null,size:null,text:!1,tooltip:null,tooltipOptions:null,visible:!0},css:{classes:ee}});function E(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),e.push.apply(e,r)}return e}function h(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?E(Object(e),!0).forEach(function(r){l(a,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(e,r))})}return a}var te=o.memo(o.forwardRef(function(a,t){var e=S(),r=o.useContext(x),n=y.getProps(a,r),i=n.disabled||n.loading,f=h(h({props:n},n.__parentMetadata),{},{context:{disabled:i}}),d=y.setMetaData(f),p=d.ptm,u=d.cx,P=d.isUnstyled;_(y.css.styles,P,{name:"button",styled:!0});var b=o.useRef(t);if(o.useEffect(function(){O.combinedRefs(b,t)},[b,t]),n.visible===!1)return null;var I=function(){var c=s("p-button-icon p-c",l({},"p-button-icon-".concat(n.iconPos),n.label)),Y=e({className:u("icon")},p("icon"));c=s(c,{"p-button-loading-icon":n.loading});var k=e({className:u("loadingIcon",{className:c})},p("loadingIcon")),A=n.loading?n.loadingIcon||o.createElement(J,m({},k,{spin:!0})):n.icon;return F.getJSXIcon(A,h({},Y),{props:n})},D=function(){var c=e({className:u("label")},p("label"));return n.label?o.createElement("span",c,n.label):!n.children&&!n.label&&o.createElement("span",m({},c,{dangerouslySetInnerHTML:{__html:"&nbsp;"}}))},M=function(){if(n.badge){var c=e({className:s(n.badgeClassName),value:n.badge,unstyled:n.unstyled,__parentMetadata:{parent:f}},p("badge"));return o.createElement(B,c,n.badge)}return null},z=!i||n.tooltipOptions&&n.tooltipOptions.showOnDisabled,R=O.isNotEmpty(n.tooltip)&&z,T={large:"lg",small:"sm"},C=T[n.size],U=I(),$=D(),L=M(),H=n.label?n.label+(n.badge?" "+n.badge:""):n["aria-label"],K=e({ref:b,"aria-label":H,className:s(n.className,u("root",{size:C,disabled:i})),disabled:i},y.getOtherProps(n),p("root"));return o.createElement(o.Fragment,null,o.createElement("button",K,U,$,n.children,L,o.createElement(X,null)),R&&o.createElement(q,m({target:b,content:n.tooltip},n.tooltipOptions,{pt:p("tooltip")})))}));te.displayName="Button";export{te as B};
