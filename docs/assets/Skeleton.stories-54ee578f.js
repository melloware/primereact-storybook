import{r as s}from"./index-76fb7be0.js";import{a as x,c as h}from"./api.esm-4644ee78.js";import{C as k,u as j}from"./componentbase.esm-1c796d7e.js";import{d as _}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";function i(t){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(t)}function R(t,e){if(i(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(i(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function E(t){var e=R(t,"string");return i(e)==="symbol"?e:String(e)}function D(t,e,n){return e=E(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var z={root:function(e){var n=e.props;return h("p-skeleton p-component",{"p-skeleton-circle":n.shape==="circle","p-skeleton-none":n.animation==="none"})}},N=`
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
`,C={root:{position:"relative"}},l=k.extend({defaultProps:{__TYPE:"Skeleton",shape:"rectangle",size:null,width:"100%",height:"1rem",borderRadius:null,animation:"wave",style:null,className:null},css:{classes:z,inlineStyles:C,styles:N}});function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?u(Object(n),!0).forEach(function(o){D(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}var b=s.memo(s.forwardRef(function(t,e){var n=_(),o=s.useContext(x),r=l.getProps(t,o),a=l.setMetaData({props:r}),g=a.ptm,v=a.cx,S=a.sx,O=a.isUnstyled;j(l.css.styles,O,{name:"skeleton"});var p=s.useRef(null);s.useImperativeHandle(e,function(){return{props:r,getElement:function(){return p.current}}});var P=r.size?{width:r.size,height:r.size,borderRadius:r.borderRadius}:{width:r.width,height:r.height,borderRadius:r.borderRadius},w=n({ref:p,className:h(r.className,v("root")),style:m(m({},P),S("root")),"aria-hidden":!0},l.getOtherProps(r),g("root"));return s.createElement("div",w)}));b.displayName="Skeleton";const I={title:"Misc/Skeleton",component:b,parameters:{layout:"centered"},argTypes:{animation:{control:"select",description:'Type of the animation, valid options are "wave" and "none".',options:["none","wave"]},borderRadius:{control:"text",description:"Border radius of the element, defaults to value from theme.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},height:{control:"text",description:"Height of the element.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},shape:{control:"select",description:"It specifies an alternate text for an image, if the image cannot be displayed.",options:["circle","rectangle"]},size:{control:"text",description:"Size of the Circle or Square.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},width:{control:"text",description:"Width of the element.",options:null}}},c={args:{unstyled:!1}};var f,d,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(y=(d=c.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const K=["Default"];export{c as Default,K as __namedExportsOrder,I as default};
