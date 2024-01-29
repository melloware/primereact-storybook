import{r}from"./index-76fb7be0.js";import{a as q}from"./hooks.esm-2e882e60.js";import{T as L}from"./tooltip.esm-969ffd2f.js";import{P as Y,D as g,O as P,m as v,c as C}from"./api.esm-e57be548.js";import{C as z,u as G}from"./componentbase.esm-f35515f0.js";import"./_commonjsHelpers-de833af9.js";import"./portal.esm-d730a851.js";import"./index-d3ea75b5.js";function h(){return h=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t},h.apply(this,arguments)}function b(t){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},b(t)}function J(t,n){if(b(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var e=o.call(t,n||"default");if(b(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function Q(t){var n=J(t,"string");return b(n)==="symbol"?n:String(n)}function X(t,n,o){return n=Q(n),n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function Z(t){if(Array.isArray(t))return t}function ee(t,n){var o=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var e,s,d,u,p=[],l=!0,a=!1;try{if(d=(o=o.call(t)).next,n===0){if(Object(o)!==o)return;l=!1}else for(;!(l=(e=d.call(o)).done)&&(p.push(e.value),p.length!==n);l=!0);}catch(y){a=!0,s=y}finally{try{if(!l&&o.return!=null&&(u=o.return(),Object(u)!==u))return}finally{if(a)throw s}}return p}}function x(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,e=new Array(n);o<n;o++)e[o]=t[o];return e}function te(t,n){if(t){if(typeof t=="string")return x(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return x(t,n)}}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(t,n){return Z(t)||ee(t,n)||te(t,n)||ne()}var re={root:function(n){var o=n.props,e=n.focusedState,s=n.checked;return C("p-inputswitch p-component",{"p-inputswitch-checked":s,"p-disabled":o.disabled,"p-focus":e})},slider:"p-inputswitch-slider"},ie=`
@layer primereact {
    .p-inputswitch {
        position: relative;
        display: inline-block;
    }
    
    .p-inputswitch-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid transparent;
    }
    
    .p-inputswitch-slider:before {
        position: absolute;
        content: "";
        top: 50%;
    }
}
`,O=z.extend({defaultProps:{__TYPE:"InputSwitch",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,id:null,inputId:null,inputRef:null,name:null,onBlur:null,onChange:null,onFocus:null,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,children:void 0},css:{classes:re,styles:ie}});function E(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),o.push.apply(o,e)}return o}function se(t){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?E(Object(o),!0).forEach(function(e){X(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var D=r.memo(r.forwardRef(function(t,n){var o=r.useContext(Y),e=O.getProps(t,o),s=r.useState(!1),d=oe(s,2),u=d[0],p=d[1],l=O.setMetaData({props:e,state:{focused:u}}),a=l.ptm,y=l.cx,F=l.isUnstyled;G(O.css.styles,F,{name:"inputswitch"});var w=r.useRef(null),c=r.useRef(e.inputRef),m=e.checked===e.trueValue,A=function(i){e.disabled||(I(i),g.focus(c.current),i.preventDefault())},I=function(i){if(e.onChange){var j=m?e.falseValue:e.trueValue;e.onChange({originalEvent:i,value:j,stopPropagation:function(){i.stopPropagation()},preventDefault:function(){i.preventDefault()},target:{name:e.name,id:e.id,value:j}})}},N=function(i){p(!0),e.onFocus&&e.onFocus(i)},T=function(i){p(!1),e.onBlur&&e.onBlur(i)};r.useImperativeHandle(n,function(){return{props:e,focus:function(){return g.focus(c.current)},getElement:function(){return w.current},getInput:function(){return c.current}}}),r.useEffect(function(){P.combinedRefs(c,e.inputRef)},[c,e.inputRef]),q(function(){e.autoFocus&&g.focus(c.current,e.autoFocus)});var B=P.isNotEmpty(e.tooltip),V=O.getOtherProps(e),U=P.reduceKeys(V,g.ARIA_PROPS),W=v({className:C(e.className,y("root",{focusedState:u,checked:m})),style:e.style,onClick:A,role:"checkbox","aria-checked":m},a("root")),M=v({className:"p-hidden-accessible"},a("hiddenInputWrapper")),H=v(se({type:"checkbox",id:e.inputId,name:e.name,checked:m,onChange:I,onFocus:N,onBlur:T,disabled:e.disabled,role:"switch",tabIndex:e.tabIndex,"aria-checked":m},U),a("hiddenInput")),$=v({className:y("slider")},a("slider"));return r.createElement(r.Fragment,null,r.createElement("div",h({id:e.id,ref:w},W),r.createElement("div",M,r.createElement("input",h({ref:c},H))),r.createElement("span",$)),B&&r.createElement(L,h({target:w,content:e.tooltip},e.tooltipOptions,{pt:a("tooltip")})))}));D.displayName="InputSwitch";const he={title:"Form/InputSwitch",component:D,parameters:{layout:"centered"},argTypes:{autoFocus:{control:"boolean",description:"When present, it specifies that the component should automatically get focus on load.",options:null},checked:{control:"boolean",description:"Specifies whether a inputswitch should be checked or not.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},className:{control:"text",description:"Style class of the element.",options:null},disabled:{control:"boolean",description:"When present, it specifies that the component should be disabled.",options:null},falseValue:{control:"object",description:"Value in unchecked state.",options:null},id:{control:"text",description:"Unique identifier of the element.",options:null},inputId:{control:"text",description:"Identifier of the input element.",options:null},inputRef:{control:"object",description:"Reference of the input element.",options:null},name:{control:"text",description:"Name of the input element.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},style:{control:"object",description:"Inline style of the element.",options:null},tabIndex:{control:"number",description:"Index of the element in tabbing order.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},trueValue:{control:"object",description:"Value in checked state.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},S={args:{unstyled:!1}};var _,R,k;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(k=(R=S.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const be=["Default"];export{S as Default,be as __namedExportsOrder,he as default};