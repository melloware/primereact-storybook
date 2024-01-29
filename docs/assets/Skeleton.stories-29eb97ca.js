import{r as s}from"./index-76fb7be0.js";import{P as w,m as x,c as y}from"./api.esm-e57be548.js";import{C as k,u as j}from"./componentbase.esm-f35515f0.js";import"./_commonjsHelpers-de833af9.js";import"./hooks.esm-2e882e60.js";function i(t){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(t)}function _(t,e){if(i(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var n=o.call(t,e||"default");if(i(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function R(t){var e=_(t,"string");return i(e)==="symbol"?e:String(e)}function E(t,e,o){return e=R(e),e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var D={root:function(e){var o=e.props;return y("p-skeleton p-component",{"p-skeleton-circle":o.shape==="circle","p-skeleton-none":o.animation==="none"})}},z=`
@layer primereact {
    .p-skeleton {
        position: relative;
        overflow: hidden;
    }
    
    .p-skeleton::after {
        content: "";
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
    }
    
    .p-skeleton-circle {
        border-radius: 50%;
    }
    
    .p-skeleton-none::after {
        animation: none;
    }
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`,N={root:{position:"relative"}},a=k.extend({defaultProps:{__TYPE:"Skeleton",shape:"rectangle",size:null,width:"100%",height:"1rem",borderRadius:null,animation:"wave",style:null,className:null},css:{classes:D,inlineStyles:N,styles:z}});function p(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),o.push.apply(o,n)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?p(Object(o),!0).forEach(function(n){E(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}var h=s.memo(s.forwardRef(function(t,e){var o=s.useContext(w),n=a.getProps(t,o),r=a.setMetaData({props:n}),b=r.ptm,g=r.cx,v=r.sx,S=r.isUnstyled;j(a.css.styles,S,{name:"skeleton"});var c=s.useRef(null);s.useImperativeHandle(e,function(){return{props:n,getElement:function(){return c.current}}});var O=n.size?{width:n.size,height:n.size,borderRadius:n.borderRadius}:{width:n.width,height:n.height,borderRadius:n.borderRadius},P=x({ref:c,className:y(n.className,g("root")),style:u(u({},O),v("root"))},a.getOtherProps(n),b("root"));return s.createElement("div",P)}));h.displayName="Skeleton";const X={title:"Misc/Skeleton",component:h,parameters:{layout:"centered"},argTypes:{animation:{control:"select",description:'Type of the animation, valid options are "wave" and "none".',options:["none","wave"]},borderRadius:{control:"text",description:"Border radius of the element, defaults to value from theme.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},height:{control:"text",description:"Height of the element.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},shape:{control:"select",description:"It specifies an alternate text for an image, if the image cannot be displayed.",options:["circle","rectangle"]},size:{control:"text",description:"Size of the Circle or Square.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},width:{control:"text",description:"Width of the element.",options:null}}},l={args:{unstyled:!1}};var m,f,d;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(d=(f=l.parameters)==null?void 0:f.docs)==null?void 0:d.source}}};const I=["Default"];export{l as Default,I as __namedExportsOrder,X as default};
