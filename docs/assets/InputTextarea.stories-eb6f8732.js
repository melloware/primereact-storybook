import{r as s}from"./index-76fb7be0.js";import{a as C,O as p,c as k,D as v}from"./api.esm-4644ee78.js";import{C as M,u as V}from"./componentbase.esm-1c796d7e.js";import{d as W}from"./hooks.esm-d069ba29.js";import{K as g}from"./keyfilter.esm-59cdc628.js";import{T as Y}from"./tooltip.esm-2acddad6.js";import"./_commonjsHelpers-de833af9.js";import"./portal.esm-16954874.js";import"./index-d3ea75b5.js";function h(){return h=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o[r]=n[r])}return o},h.apply(this,arguments)}function f(o){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(o)}function $(o,t){if(f(o)!=="object"||o===null)return o;var n=o[Symbol.toPrimitive];if(n!==void 0){var r=n.call(o,t||"default");if(f(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(o)}function q(o){var t=$(o,"string");return f(t)==="symbol"?t:String(t)}function A(o,t,n){return t=q(t),t in o?Object.defineProperty(o,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[t]=n,o}var G={root:function(t){var n=t.props,r=t.isFilled;return k("p-inputtextarea p-inputtext p-component",{"p-disabled":n.disabled,"p-filled":r,"p-inputtextarea-resizable":n.autoResize},n.className)}},J=`
@layer primereact {
    .p-inputtextarea-resizable {
        overflow: hidden;
        resize: none;
    }
    
    .p-fluid .p-inputtextarea {
        width: 100%;
    }
}
`,y=M.extend({defaultProps:{__TYPE:"InputTextarea",__parentMetadata:null,autoResize:!1,keyfilter:null,onBlur:null,onFocus:null,onBeforeInput:null,onInput:null,onKeyDown:null,onKeyUp:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,children:void 0},css:{classes:G,styles:J}});function x(o,t){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})),n.push.apply(n,r)}return n}function P(o){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(r){A(o,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(n,r))})}return o}var E=s.memo(s.forwardRef(function(o,t){var n=W(),r=s.useContext(C),e=y.getProps(o,r),u=s.useRef(t),m=s.useRef(0),b=y.setMetaData(P(P({props:e},e.__parentMetadata),{},{context:{disabled:e.disabled}})),O=b.ptm,K=b.cx,B=b.isUnstyled;V(y.css.styles,B,{name:"inputtextarea"});var D=function(l){e.autoResize&&c(),e.onFocus&&e.onFocus(l)},F=function(l){e.autoResize&&c(),e.onBlur&&e.onBlur(l)},R=function(l){e.autoResize&&c(),e.onKeyUp&&e.onKeyUp(l)},_=function(l){e.onKeyDown&&e.onKeyDown(l),e.keyfilter&&g.onKeyPress(l,e.keyfilter,e.validateOnly)},z=function(l){e.onBeforeInput&&e.onBeforeInput(l),e.keyfilter&&g.onBeforeInput(l,e.keyfilter,e.validateOnly)},S=function(l){e.onPaste&&e.onPaste(l),e.keyfilter&&g.onPaste(l,e.keyfilter,e.validateOnly)},T=function(l){var i=l.target;e.autoResize&&c(p.isEmpty(i.value)),e.onInput&&e.onInput(l),p.isNotEmpty(i.value)?v.addClass(i,"p-filled"):v.removeClass(i,"p-filled")},c=function(l){var i=u.current;i&&v.isVisible(i)&&(m.current||(m.current=i.scrollHeight,i.style.overflow="hidden"),(m.current!==i.scrollHeight||l)&&(i.style.height="",i.style.height=i.scrollHeight+"px",parseFloat(i.style.height)>=parseFloat(i.style.maxHeight)?(i.style.overflowY="scroll",i.style.height=i.style.maxHeight):i.style.overflow="hidden",m.current=i.scrollHeight))};s.useEffect(function(){p.combinedRefs(u,t)},[u,t]),s.useEffect(function(){e.autoResize&&c(!0)},[e.autoResize]);var U=s.useMemo(function(){return p.isNotEmpty(e.value)||p.isNotEmpty(e.defaultValue)},[e.value,e.defaultValue]),H=p.isNotEmpty(e.tooltip),N=n({ref:u,className:K("root",{isFilled:U}),onFocus:D,onBlur:F,onKeyUp:R,onKeyDown:_,onBeforeInput:z,onInput:T,onPaste:S},y.getOtherProps(e),O("root"));return s.createElement(s.Fragment,null,s.createElement("textarea",N),H&&s.createElement(Y,h({target:u,content:e.tooltip},e.tooltipOptions,{pt:O("tooltip")})))}));E.displayName="InputTextarea";const ie={title:"Form/InputTextarea",component:E,parameters:{layout:"centered"},argTypes:{autoResize:{control:"boolean",description:"When present, height of textarea changes as being typed.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},keyfilter:{control:"object",description:"Format definition of the keys to block.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"text",description:"The value of component",options:null}}},d={args:{value:0,unstyled:!1}};var w,j,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const le=["Default"];export{d as Default,le as __namedExportsOrder,ie as default};