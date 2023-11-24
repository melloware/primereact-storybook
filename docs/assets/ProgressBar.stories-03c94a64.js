import{r as o}from"./index-76fb7be0.js";import{P as N,c as d,m as p}from"./api.esm-2e2d159c.js";import{C as B,u as C}from"./componentbase.esm-b0caea1e.js";import"./_commonjsHelpers-de833af9.js";import"./hooks.esm-c93f10ee.js";function f(){return f=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},f.apply(this,arguments)}function c(t){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},c(t)}function D(t,r){if(c(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var e=n.call(t,r||"default");if(c(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function M(t){var r=D(t,"string");return c(r)==="symbol"?r:String(r)}function V(t,r,n){return r=M(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var T={root:function(r){var n=r.props;return n.mode==="indeterminate"?d("p-progressbar p-component p-progressbar-indeterminate"):d("p-progressbar p-component p-progressbar-determinate")},value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label",container:"p-progressbar-indeterminate-container"},U=`
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
`,z={value:function(r){var n=r.props,e=Math.max(n.value,2),a=n.value?n.color:"transparent";return n.mode==="indeterminate"?{backgroundColor:n.color}:{width:e+"%",display:"flex",backgroundColor:a}}},u=B.extend({defaultProps:{__TYPE:"ProgressBar",__parentMetadata:null,id:null,value:null,showValue:!0,unit:"%",style:null,className:null,mode:"determinate",displayValueTemplate:null,color:null,children:void 0},css:{classes:T,styles:U,inlineStyles:z}});function h(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,e)}return n}function R(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?h(Object(n),!0).forEach(function(e){V(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var x=o.memo(o.forwardRef(function(t,r){var n=o.useContext(N),e=u.getProps(t,n),a=u.setMetaData(R({props:e},e.__parentMetadata)),s=a.ptm,i=a.cx,j=a.isUnstyled;C(u.css.styles,j,{name:"progressbar"});var b=o.useRef(null),S=function(){if(e.showValue&&e.value!=null){var l=e.displayValueTemplate?e.displayValueTemplate(e.value):e.value+e.unit;return l}return null},_=function(){var l=S(),v=p({className:d(e.className,i("root")),style:e.style,role:"progressbar","aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},u.getOtherProps(e),s("root")),y=p({className:i("value"),style:{width:e.value+"%",display:"flex",backgroundColor:e.color}},s("value")),k=p({className:i("label")},s("label"));return o.createElement("div",f({id:e.id,ref:b},v),o.createElement("div",y,l!=null&&o.createElement("div",k,l)))},E=function(){var l=p({className:d(e.className,i("root")),style:e.style,role:"progressbar"},u.getOtherProps(e),s("root")),v=p({className:i("container")},s("container")),y=p({className:i("value"),style:{backgroundColor:e.color}},s("value"));return o.createElement("div",f({id:e.id,ref:b},l),o.createElement("div",v,o.createElement("div",y)))};if(o.useImperativeHandle(r,function(){return{props:e,getElement:function(){return b.current}}}),e.mode==="determinate")return _();if(e.mode==="indeterminate")return E();throw new Error(e.mode+" is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'")}));x.displayName="ProgressBar";const Y={title:"Misc/ProgressBar",component:x,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},color:{control:"text",description:"Color for the background of the progress.",options:null},mode:{control:"select",description:'Defines the mode of the progress, valid values are "determinate" and "indeterminate".',options:["determinate","indeterminate"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},showValue:{control:"boolean",description:"Show or hide progress bar value.",options:null},unit:{control:"text",description:"Unit sign appended to the value.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"select",description:"Current value of the progress.",options:["null","string","number"]}}},m={args:{value:0,unstyled:!1}};var P,w,O;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(O=(w=m.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const $=["Default"];export{m as Default,$ as __namedExportsOrder,Y as default};
//# sourceMappingURL=ProgressBar.stories-03c94a64.js.map
