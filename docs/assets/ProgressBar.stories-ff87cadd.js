import{r as o}from"./index-76fb7be0.js";import{a as N,c as m}from"./api.esm-4644ee78.js";import{C as B,u as C}from"./componentbase.esm-1c796d7e.js";import{d as D}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},d.apply(this,arguments)}function u(t){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(t)}function M(t,e){if(u(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var a=r.call(t,e||"default");if(u(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function V(t){var e=M(t,"string");return u(e)==="symbol"?e:String(e)}function T(t,e,r){return e=V(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var U={root:function(e){var r=e.props;return r.mode==="indeterminate"?m("p-progressbar p-component p-progressbar-indeterminate"):m("p-progressbar p-component p-progressbar-determinate")},value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label",container:"p-progressbar-indeterminate-container"},z=`
@layer primereact {
  .p-progressbar {
      position: relative;
      overflow: hidden;
  }
  
  .p-progressbar-determinate .p-progressbar-value {
      height: 100%;
      width: 0%;
      position: absolute;
      display: none;
      border: 0 none;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }
  
  .p-progressbar-determinate .p-progressbar-label {
      display: inline-flex;
  }
  
  .p-progressbar-determinate .p-progressbar-value-animate {
      transition: width 1s ease-in-out;
  }
  
  .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
                animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }
  
  .p-progressbar-indeterminate .p-progressbar-value::after {
      content: '';
      position: absolute;
      background-color: inherit;
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
              animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
      -webkit-animation-delay: 1.15s;
              animation-delay: 1.15s;
  }
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%; }
  60% {
    left: 100%;
    right: -90%; }
  100% {
    left: 100%;
    right: -90%; }
}
@keyframes p-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%; }
  60% {
    left: 100%;
    right: -90%; }
  100% {
    left: 100%;
    right: -90%; }
}

@-webkit-keyframes p-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%; }
  60% {
    left: 107%;
    right: -8%; }
  100% {
    left: 107%;
    right: -8%; }
}
@keyframes p-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%; }
  60% {
    left: 107%;
    right: -8%; }
  100% {
    left: 107%;
    right: -8%; }
}
`,R={value:function(e){var r=e.props,a=Math.max(r.value,2),n=r.value?r.color:"transparent";return r.mode==="indeterminate"?{backgroundColor:r.color}:{width:a+"%",display:"flex",backgroundColor:n}}},p=B.extend({defaultProps:{__TYPE:"ProgressBar",__parentMetadata:null,id:null,value:null,showValue:!0,unit:"%",style:null,className:null,mode:"determinate",displayValueTemplate:null,color:null,children:void 0},css:{classes:U,styles:z,inlineStyles:R}});function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,a)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?h(Object(r),!0).forEach(function(a){T(t,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(r,a))})}return t}var x=o.memo(o.forwardRef(function(t,e){var r=D(),a=o.useContext(N),n=p.getProps(t,a),f=p.setMetaData(I({props:n},n.__parentMetadata)),s=f.ptm,i=f.cx,j=f.isUnstyled;C(p.css.styles,j,{name:"progressbar"});var b=o.useRef(null),S=function(){if(n.showValue&&n.value!=null){var l=n.displayValueTemplate?n.displayValueTemplate(n.value):n.value+n.unit;return l}return null},_=function(){var l=S(),v=r({className:m(n.className,i("root")),style:n.style,role:"progressbar","aria-valuemin":"0","aria-valuenow":n.value,"aria-valuemax":"100"},p.getOtherProps(n),s("root")),y=r({className:i("value"),style:{width:n.value+"%",display:"flex",backgroundColor:n.color}},s("value")),k=r({className:i("label")},s("label"));return o.createElement("div",d({id:n.id,ref:b},v),o.createElement("div",y,l!=null&&o.createElement("div",k,l)))},E=function(){var l=r({className:m(n.className,i("root")),style:n.style,role:"progressbar","aria-valuemin":"0","aria-valuenow":n.value,"aria-valuemax":"100"},p.getOtherProps(n),s("root")),v=r({className:i("container")},s("container")),y=r({className:i("value"),style:{backgroundColor:n.color}},s("value"));return o.createElement("div",d({id:n.id,ref:b},l),o.createElement("div",v,o.createElement("div",y)))};if(o.useImperativeHandle(e,function(){return{props:n,getElement:function(){return b.current}}}),n.mode==="determinate")return _();if(n.mode==="indeterminate")return E();throw new Error(n.mode+" is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'")}));x.displayName="ProgressBar";const $={title:"Misc/ProgressBar",component:x,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},color:{control:"text",description:"Color for the background of the progress.",options:null},mode:{control:"select",description:'Defines the mode of the progress, valid values are "determinate" and "indeterminate".',options:["determinate","indeterminate"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},showValue:{control:"boolean",description:"Show or hide progress bar value.",options:null},unit:{control:"text",description:"Unit sign appended to the value.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"select",description:"Current value of the progress.",options:["null","string","number"]}}},c={args:{value:0,unstyled:!1}};var P,w,O;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(O=(w=c.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const q=["Default"];export{c as Default,q as __namedExportsOrder,$ as default};
