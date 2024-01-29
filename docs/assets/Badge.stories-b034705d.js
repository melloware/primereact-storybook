import{r as a}from"./index-76fb7be0.js";import{a as x,c as y,O as u}from"./api.esm-4644ee78.js";import{C as S,u as _}from"./componentbase.esm-1c796d7e.js";import{d as w}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";function s(t){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(t)}function E(t,e){if(s(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(s(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function B(t){var e=E(t,"string");return s(e)==="symbol"?e:String(e)}function b(t,e,r){return e=B(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var D={root:function(e){var r=e.props;return y("p-badge p-component",b({"p-badge-no-gutter":u.isNotEmpty(r.value)&&String(r.value).length===1,"p-badge-dot":u.isEmpty(r.value),"p-badge-lg":r.size==="large","p-badge-xl":r.size==="xlarge"},"p-badge-".concat(r.severity),r.severity!==null))}},M=`
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
`,l=S.extend({defaultProps:{__TYPE:"Badge",__parentMetadata:null,value:null,severity:null,size:null,style:null,className:null,children:void 0},css:{classes:D,styles:M}});function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?d(Object(r),!0).forEach(function(n){b(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var v=a.memo(a.forwardRef(function(t,e){var r=w(),n=a.useContext(x),o=l.getProps(t,n),p=l.setMetaData(N({props:o},o.__parentMetadata)),h=p.ptm,O=p.cx,P=p.isUnstyled;_(l.css.styles,P,{name:"badge"});var c=a.useRef(null);a.useImperativeHandle(e,function(){return{props:o,getElement:function(){return c.current}}});var j=r({ref:c,style:o.style,className:y(o.className,O("root"))},l.getOtherProps(o),h("root"));return a.createElement("span",j,o.value)}));v.displayName="Badge";const K={title:"Misc/Badge",component:v,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},severity:{control:"select",description:"Severity type of the badge.",options:["null","success","warning","info","danger"]},size:{control:"select",description:'Size of the badge, valid options are "large" and "xlarge".',options:["null","normal","large","xlarge"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"object",description:"Value to display inside the badge.",options:null}}},i={args:{value:0,unstyled:!1}};var m,g,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const I=["Default"];export{i as Default,I as __namedExportsOrder,K as default};
