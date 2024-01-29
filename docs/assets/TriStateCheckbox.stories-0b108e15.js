import{r as n}from"./index-76fb7be0.js";import{P as G,D as x,O as S,m as h,I as Q,b as O,c as P}from"./api.esm-e57be548.js";import{C as Z,u as ee}from"./componentbase.esm-f35515f0.js";import{a as te}from"./hooks.esm-2e882e60.js";import{C as ie}from"./index.esm-39668683.js";import{T as oe}from"./index.esm-8d6e6251.js";import{T as ne}from"./tooltip.esm-969ffd2f.js";import"./_commonjsHelpers-de833af9.js";import"./iconbase.esm-64142d35.js";import"./portal.esm-d730a851.js";import"./index-d3ea75b5.js";function w(){return w=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},w.apply(this,arguments)}function y(e){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},y(e)}function re(e,i){if(y(e)!=="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var t=o.call(e,i||"default");if(y(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function pe(e){var i=re(e,"string");return y(i)==="symbol"?i:String(i)}function ae(e,i,o){return i=pe(i),i in e?Object.defineProperty(e,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[i]=o,e}function le(e){if(Array.isArray(e))return e}function ce(e,i){var o=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var t,c,d,l,s=[],r=!0,u=!1;try{if(d=(o=o.call(e)).next,i===0){if(Object(o)!==o)return;r=!1}else for(;!(r=(t=d.call(o)).done)&&(s.push(t.value),s.length!==i);r=!0);}catch(a){u=!0,c=a}finally{try{if(!r&&o.return!=null&&(l=o.return(),Object(l)!==l))return}finally{if(u)throw c}}return s}}function j(e,i){(i==null||i>e.length)&&(i=e.length);for(var o=0,t=new Array(i);o<i;o++)t[o]=e[o];return t}function se(e,i){if(e){if(typeof e=="string")return j(e,i);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return j(e,i)}}function ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fe(e,i){return le(e)||ce(e,i)||se(e,i)||ue()}var de={root:function(i){var o=i.props;return P("p-tristatecheckbox p-checkbox p-component",{"p-checkbox-disabled":o.disabled})},checkIcon:"p-checkbox-icon p-c",checkbox:function(i){var o=i.props,t=i.focusedState;return P("p-checkbox-box",{"p-highlight":S.isNotEmpty(o.value),"p-disabled":o.disabled,"p-focus":t})}},b=Z.extend({defaultProps:{__TYPE:"TriStateCheckbox",autoFocus:!1,checkIcon:null,className:null,disabled:!1,id:null,onChange:null,readOnly:!1,style:null,tabIndex:"0",tooltip:null,tooltipOptions:null,uncheckIcon:null,value:null,children:void 0},css:{classes:de}});function E(e,i){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),o.push.apply(o,t)}return o}function T(e){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?E(Object(o),!0).forEach(function(t){ae(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var N=n.memo(n.forwardRef(function(e,i){var o=n.useContext(G),t=b.getProps(e,o),c=n.useState(!1),d=fe(c,2),l=d[0],s=d[1],r=n.useRef(null),u=b.setMetaData({props:t,state:{focused:l}}),a=u.ptm,g=u.cx,F=u.isUnstyled;ee(b.css.styles,F,{name:"tristatecheckbox"});var R=function(p){!t.disabled&&!t.readOnly&&I(p)},I=function(p){var m;t.value===null||t.value===void 0?m=!0:t.value===!0?m=!1:t.value===!1&&(m=null),t.onChange&&t.onChange({originalEvent:p,value:m,stopPropagation:function(){p.stopPropagation()},preventDefault:function(){p.preventDefault()},target:{name:t.name,id:t.id,value:m}})},U=function(){s(!0)},B=function(){s(!1)},K=function(p){p.keyCode===32&&(I(p),p.preventDefault())};n.useImperativeHandle(i,function(){return{props:t,focus:function(){return x.focusFirstElement(r.current)},getElement:function(){return r.current}}}),te(function(){t.autoFocus&&x.focusFirstElement(r.current)});var L=S.isNotEmpty(t.tooltip),W=b.getOtherProps(t),z=S.reduceKeys(W,x.ARIA_PROPS),C=h({className:g("checkIcon")},a("checkIcon")),H=h({className:g("checkIcon")},a("uncheckIcon")),k;t.value===!1?k=t.uncheckIcon||n.createElement(oe,H):t.value===!0&&(k=t.checkIcon||n.createElement(ie,C));var M=Q.getJSXIcon(k,T({},C),{props:t}),V=t.value?O("trueLabel"):t.value===!1?O("falseLabel"):O("nullLabel"),$=t.value?"true":"false",J=h(T({className:g("checkbox",{focusedState:l}),tabIndex:t.tabIndex,onFocus:U,onBlur:B,onKeyDown:K,role:"checkbox","aria-checked":$},z),a("checkbox")),X=h({className:"p-sr-only p-hidden-accessible","aria-live":"polite"},a("srOnlyAria")),Y=h({className:P(t.className,g("root")),style:t.style,onClick:R},b.getOtherProps(t),a("root"));return n.createElement(n.Fragment,null,n.createElement("div",w({id:t.id,ref:r},Y),n.createElement("div",J,M),l&&n.createElement("span",X,V)),L&&n.createElement(ne,w({target:r,content:t.tooltip},t.tooltipOptions,{pt:a("tooltip")})))}));N.displayName="TriStateCheckbox";const Pe={title:"Form/TriStateCheckbox",component:N,parameters:{layout:"centered"},argTypes:{autoFocus:{control:"boolean",description:"When present, it specifies that the component should automatically get focus on load.",options:null},checkIcon:{control:"select",description:"Icon of the checkbox when checked.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},children:{control:"text",description:"Used to get the child elements of the component.",options:null},disabled:{control:"boolean",description:"When present, it specifies that the element value cannot be altered.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},readOnly:{control:"boolean",description:"When present, it specifies that the value cannot be changed.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},uncheckIcon:{control:"select",description:"Icon of the checkbox when unchecked.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"select",description:"Value of the TriStateCheckbox.",options:["null","boolean"]}}},v={args:{value:0,unstyled:!1}};var _,D,A;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(A=(D=v.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const Ie=["Default"];export{v as Default,Ie as __namedExportsOrder,Pe as default};