import{r as o}from"./index-76fb7be0.js";import{P as j,m as x,c as f,O as c}from"./api.esm-2e2d159c.js";import{C as S,u as _}from"./componentbase.esm-b0caea1e.js";import"./_commonjsHelpers-de833af9.js";import"./hooks.esm-c93f10ee.js";function s(t){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(t)}function w(t,e){if(s(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(s(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function E(t){var e=w(t,"string");return s(e)==="symbol"?e:String(e)}function y(t,e,r){return e=E(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var B={root:function(e){var r=e.props;return f("p-badge p-component",y({"p-badge-no-gutter":c.isNotEmpty(r.value)&&String(r.value).length===1,"p-badge-dot":c.isEmpty(r.value),"p-badge-lg":r.size==="large","p-badge-xl":r.size==="xlarge"},"p-badge-".concat(r.severity),r.severity!==null))}},D=`
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
`,l=S.extend({defaultProps:{__TYPE:"Badge",__parentMetadata:null,value:null,severity:null,size:null,style:null,className:null,children:void 0},css:{classes:B,styles:D}});function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?u(Object(r),!0).forEach(function(n){y(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var b=o.memo(o.forwardRef(function(t,e){var r=o.useContext(j),n=l.getProps(t,r),a=l.setMetaData(N({props:n},n.__parentMetadata)),v=a.ptm,h=a.cx,O=a.isUnstyled;_(l.css.styles,O,{name:"badge"});var p=o.useRef(null);o.useImperativeHandle(e,function(){return{props:n,getElement:function(){return p.current}}});var P=x({ref:p,style:n.style,className:f(n.className,h("root"))},l.getOtherProps(n),v("root"));return o.createElement("span",P,n.value)}));b.displayName="Badge";const H={title:"Misc/Badge",component:b,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},severity:{control:"select",description:"Severity type of the badge.",options:["null","success","warning","info","danger"]},size:{control:"select",description:'Size of the badge, valid options are "large" and "xlarge".',options:["null","normal","large","xlarge"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"object",description:"Value to display inside the badge.",options:null}}},i={args:{value:0,unstyled:!1}};var d,m,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const K=["Default"];export{i as Default,K as __namedExportsOrder,H as default};
//# sourceMappingURL=Badge.stories-2a926e12.js.map
