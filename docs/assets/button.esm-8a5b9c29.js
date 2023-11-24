import{r}from"./index-76fb7be0.js";import{P as x,O,m as u,c as s,I as A}from"./api.esm-2e2d159c.js";import{C as N,u as _}from"./componentbase.esm-b0caea1e.js";import{S as F}from"./index.esm-a9455747.js";import{R as J}from"./ripple.esm-cba91116.js";import{T as X}from"./tooltip.esm-ca4db4c1.js";function m(){return m=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a},m.apply(this,arguments)}function g(a){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(a)}function q(a,n){if(g(a)!=="object"||a===null)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var e=t.call(a,n||"default");if(g(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function G(a){var n=q(a,"string");return g(n)==="symbol"?n:String(n)}function l(a,n,t){return n=G(n),n in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}var Q={root:function(n){var t=n.props;return s("p-badge p-component",l({"p-badge-no-gutter":O.isNotEmpty(t.value)&&String(t.value).length===1,"p-badge-dot":O.isEmpty(t.value),"p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge"},"p-badge-".concat(t.severity),t.severity!==null))}},V=`
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
`,v=N.extend({defaultProps:{__TYPE:"Badge",__parentMetadata:null,value:null,severity:null,size:null,style:null,className:null,children:void 0},css:{classes:Q,styles:V}});function w(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),t.push.apply(t,e)}return t}function W(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?w(Object(t),!0).forEach(function(e){l(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}var S=r.memo(r.forwardRef(function(a,n){var t=r.useContext(x),e=v.getProps(a,t),o=v.setMetaData(W({props:e},e.__parentMetadata)),f=o.ptm,d=o.cx,i=o.isUnstyled;_(v.css.styles,i,{name:"badge"});var c=r.useRef(null);r.useImperativeHandle(n,function(){return{props:e,getElement:function(){return c.current}}});var P=u({ref:c,style:e.style,className:s(e.className,d("root"))},v.getOtherProps(e),f("root"));return r.createElement("span",P,e.value)}));S.displayName="Badge";var Z={icon:function(n){var t=n.props;return s("p-button-icon p-c",l({},"p-button-icon-".concat(t.iconPos),t.label))},loadingIcon:function(n){var t=n.props,e=n.className;return s(e,{"p-button-loading-icon":t.loading})},label:"p-button-label p-c",root:function(n){var t=n.props,e=n.size,o=n.disabled;return s("p-button p-component",l(l(l(l({"p-button-icon-only":(t.icon||t.loading)&&!t.label&&!t.children,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-disabled":o,"p-button-loading":t.loading,"p-button-outlined":t.outlined,"p-button-raised":t.raised,"p-button-link":t.link,"p-button-text":t.text,"p-button-rounded":t.rounded,"p-button-loading-label-only":t.loading&&!t.icon&&t.label},"p-button-loading-".concat(t.iconPos),t.loading&&t.label),"p-button-".concat(e),e),"p-button-".concat(t.severity),t.severity),"p-button-plain",t.plain))}},y=N.extend({defaultProps:{__TYPE:"Button",__parentMetadata:null,badge:null,badgeClassName:null,className:null,children:void 0,disabled:!1,icon:null,iconPos:"left",label:null,link:!1,loading:!1,loadingIcon:null,outlined:!1,plain:!1,raised:!1,rounded:!1,severity:null,size:null,text:!1,tooltip:null,tooltipOptions:null,visible:!0},css:{classes:Z}});function E(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),t.push.apply(t,e)}return t}function h(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?E(Object(t),!0).forEach(function(e){l(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}var ee=r.memo(r.forwardRef(function(a,n){var t=r.useContext(x),e=y.getProps(a,t),o=e.disabled||e.loading,f=h(h({props:e},e.__parentMetadata),{},{context:{disabled:o}}),d=y.setMetaData(f),i=d.ptm,c=d.cx,P=d.isUnstyled;_(y.css.styles,P,{name:"button",styled:!0});var b=r.useRef(n);if(r.useEffect(function(){O.combinedRefs(b,n)},[b,n]),e.visible===!1)return null;var B=function(){var p=s("p-button-icon p-c",l({},"p-button-icon-".concat(e.iconPos),e.label)),K=u({className:c("icon")},i("icon"));p=s(p,{"p-button-loading-icon":e.loading});var Y=u({className:c("loadingIcon",{className:p})},i("loadingIcon")),k=e.loading?e.loadingIcon||r.createElement(F,m({},Y,{spin:!0})):e.icon;return A.getJSXIcon(k,h({},K),{props:e})},I=function(){var p=u({className:c("label")},i("label"));return e.label?r.createElement("span",p,e.label):!e.children&&!e.label&&r.createElement("span",m({},p,{dangerouslySetInnerHTML:{__html:"&nbsp;"}}))},D=function(){if(e.badge){var p=u({className:s(e.badgeClassName),value:e.badge,unstyled:e.unstyled,__parentMetadata:{parent:f}},i("badge"));return r.createElement(S,p,e.badge)}return null},M=!o||e.tooltipOptions&&e.tooltipOptions.showOnDisabled,z=O.isNotEmpty(e.tooltip)&&M,R={large:"lg",small:"sm"},T=R[e.size],C=B(),U=I(),$=D(),L=e.label?e.label+(e.badge?" "+e.badge:""):e["aria-label"],H=u({ref:b,"aria-label":L,className:s(e.className,c("root",{size:T,disabled:o})),disabled:o},y.getOtherProps(e),i("root"));return r.createElement(r.Fragment,null,r.createElement("button",H,C,U,e.children,$,r.createElement(J,null)),z&&r.createElement(X,m({target:b,content:e.tooltip},e.tooltipOptions,{pt:i("tooltip")})))}));ee.displayName="Button";export{ee as B};
//# sourceMappingURL=button.esm-8a5b9c29.js.map
