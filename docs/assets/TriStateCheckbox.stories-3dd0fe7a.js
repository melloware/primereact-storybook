import{r}from"./index-76fb7be0.js";import{a as G,D as x,O as S,I as Q,b as O,c as P}from"./api.esm-4644ee78.js";import{C as Z,u as ee}from"./componentbase.esm-1c796d7e.js";import{d as te,a as oe}from"./hooks.esm-d069ba29.js";import{C as ie}from"./index.esm-506c6505.js";import{T as ne}from"./index.esm-9702a90e.js";import{T as re}from"./tooltip.esm-2acddad6.js";import"./_commonjsHelpers-de833af9.js";import"./iconbase.esm-60e86362.js";import"./portal.esm-16954874.js";import"./index-d3ea75b5.js";function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},w.apply(this,arguments)}function b(e){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(e)}function pe(e,t){if(b(e)!=="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(b(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ae(e){var t=pe(e,"string");return b(t)==="symbol"?t:String(t)}function le(e,t,o){return t=ae(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function ce(e){if(Array.isArray(e))return e}function se(e,t){var o=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var n,i,y,s,l=[],c=!0,a=!1;try{if(y=(o=o.call(e)).next,t===0){if(Object(o)!==o)return;c=!1}else for(;!(c=(n=y.call(o)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(d){a=!0,i=d}finally{try{if(!c&&o.return!=null&&(s=o.return(),Object(s)!==s))return}finally{if(a)throw i}}return l}}function j(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function ue(e,t){if(e){if(typeof e=="string")return j(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return j(e,t)}}function fe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function de(e,t){return ce(e)||se(e,t)||ue(e,t)||fe()}var me={root:function(t){var o=t.props;return P("p-tristatecheckbox p-checkbox p-component",{"p-checkbox-disabled":o.disabled})},checkIcon:"p-checkbox-icon p-c",checkbox:function(t){var o=t.props,n=t.focusedState;return P("p-checkbox-box",{"p-highlight":S.isNotEmpty(o.value),"p-disabled":o.disabled,"p-focus":n})}},h=Z.extend({defaultProps:{__TYPE:"TriStateCheckbox",autoFocus:!1,checkIcon:null,className:null,disabled:!1,id:null,onChange:null,readOnly:!1,style:null,tabIndex:"0",tooltip:null,tooltipOptions:null,uncheckIcon:null,value:null,children:void 0},css:{classes:me}});function E(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,n)}return o}function T(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?E(Object(o),!0).forEach(function(n){le(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}var N=r.memo(r.forwardRef(function(e,t){var o=te(),n=r.useContext(G),i=h.getProps(e,n),y=r.useState(!1),s=de(y,2),l=s[0],c=s[1],a=r.useRef(null),d=h.setMetaData({props:i,state:{focused:l}}),u=d.ptm,g=d.cx,F=d.isUnstyled;ee(h.css.styles,F,{name:"tristatecheckbox"});var R=function(p){!i.disabled&&!i.readOnly&&I(p)},I=function(p){var m;i.value===null||i.value===void 0?m=!0:i.value===!0?m=!1:i.value===!1&&(m=null),i.onChange&&i.onChange({originalEvent:p,value:m,stopPropagation:function(){p.stopPropagation()},preventDefault:function(){p.preventDefault()},target:{name:i.name,id:i.id,value:m}})},U=function(){c(!0)},B=function(){c(!1)},K=function(p){p.keyCode===32&&(I(p),p.preventDefault())};r.useImperativeHandle(t,function(){return{props:i,focus:function(){return x.focusFirstElement(a.current)},getElement:function(){return a.current}}}),oe(function(){i.autoFocus&&x.focusFirstElement(a.current)});var L=S.isNotEmpty(i.tooltip),M=h.getOtherProps(i),W=S.reduceKeys(M,x.ARIA_PROPS),C=o({className:g("checkIcon")},u("checkIcon")),z=o({className:g("checkIcon")},u("uncheckIcon")),k;i.value===!1?k=i.uncheckIcon||r.createElement(ne,z):i.value===!0&&(k=i.checkIcon||r.createElement(ie,C));var H=Q.getJSXIcon(k,T({},C),{props:i}),V=i.value?O("trueLabel"):i.value===!1?O("falseLabel"):O("nullLabel"),$=i.value?"true":"false",J=o(T({className:g("checkbox",{focusedState:l}),tabIndex:i.tabIndex,onFocus:U,onBlur:B,onKeyDown:K,role:"checkbox","aria-checked":$},W),u("checkbox")),X=o({className:"p-sr-only p-hidden-accessible","aria-live":"polite"},u("srOnlyAria")),Y=o({className:P(i.className,g("root")),style:i.style,onClick:R},h.getOtherProps(i),u("root"));return r.createElement(r.Fragment,null,r.createElement("div",w({id:i.id,ref:a},Y),r.createElement("div",J,H),l&&r.createElement("span",X,V)),L&&r.createElement(re,w({target:a,content:i.tooltip},i.tooltipOptions,{pt:u("tooltip")})))}));N.displayName="TriStateCheckbox";const Ie={title:"Form/TriStateCheckbox",component:N,parameters:{layout:"centered"},argTypes:{autoFocus:{control:"boolean",description:"When present, it specifies that the component should automatically get focus on load.",options:null},checkIcon:{control:"select",description:"Icon of the checkbox when checked.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},children:{control:"text",description:"Used to get the child elements of the component.",options:null},disabled:{control:"boolean",description:"When present, it specifies that the element value cannot be altered.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},readOnly:{control:"boolean",description:"When present, it specifies that the value cannot be changed.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},uncheckIcon:{control:"select",description:"Icon of the checkbox when unchecked.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"select",description:"Value of the TriStateCheckbox.",options:["null","boolean"]}}},v={args:{value:0,unstyled:!1}};var _,D,A;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(A=(D=v.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const Ce=["Default"];export{v as Default,Ce as __namedExportsOrder,Ie as default};
