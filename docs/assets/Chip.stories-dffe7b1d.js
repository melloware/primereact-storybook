import{r as o}from"./index-76fb7be0.js";import{P as z,c as E,O as $,m,I as S}from"./api.esm-e57be548.js";import{C as B,u as H}from"./componentbase.esm-f35515f0.js";import{T as J}from"./index.esm-d5b3a617.js";import"./_commonjsHelpers-de833af9.js";import"./hooks.esm-2e882e60.js";import"./iconbase.esm-64142d35.js";function f(e){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},f(e)}function W(e,i){if(f(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var t=n.call(e,i||"default");if(f(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function X(e){var i=W(e,"string");return f(i)==="symbol"?i:String(i)}function L(e,i,n){return i=X(i),i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},w.apply(this,arguments)}function V(e){if(Array.isArray(e))return e}function Y(e,i){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t,p,d,l,u=[],s=!0,c=!1;try{if(d=(n=n.call(e)).next,i===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(t=d.call(n)).done)&&(u.push(t.value),u.length!==i);s=!0);}catch(a){c=!0,p=a}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw p}}return u}}function x(e,i){(i==null||i>e.length)&&(i=e.length);for(var n=0,t=new Array(i);n<i;n++)t[n]=e[n];return t}function q(e,i){if(e){if(typeof e=="string")return x(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,i)}}function F(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(e,i){return V(e)||Y(e,i)||q(e,i)||F()}var Q={root:function(i){var n=i.props;return E("p-chip p-component",{"p-chip-image":n.image!=null})},removeIcon:"p-chip-remove-icon",icon:"p-chip-icon",label:"p-chip-text"},Z=`
@layer primereact {
    .p-chip {
        display: inline-flex;
        align-items: center;
    }
    
    .p-chip-text {
        line-height: 1.5;
    }
    
    .p-chip-icon.pi {
        line-height: 1.5;
    }
    
    .p-chip .p-chip-remove-icon {
        line-height: 1.5;
        cursor: pointer;
    }
    
    .p-chip img {
        border-radius: 50%;
    }
}
`,b=B.extend({defaultProps:{__TYPE:"Chip",label:null,icon:null,image:null,removable:!1,removeIcon:null,className:null,style:null,template:null,imageAlt:"chip",onImageError:null,onRemove:null,children:void 0},css:{classes:Q,styles:Z}});function j(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),n.push.apply(n,t)}return n}function I(e){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?j(Object(n),!0).forEach(function(t){L(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var D=o.memo(o.forwardRef(function(e,i){var n=o.useContext(z),t=b.getProps(e,n),p=o.useRef(null),d=o.useState(!0),l=G(d,2),u=l[0],s=l[1],c=b.setMetaData({props:t}),a=c.ptm,h=c.cx,A=c.isUnstyled;H(b.css.styles,A,{name:"chip"});var T=function(r){r.keyCode===13&&O(r)},O=function(r){s(!1),t.onRemove&&t.onRemove(r)},R=function(){var r=[],g=m({key:"removeIcon",tabIndex:0,className:h("removeIcon"),onClick:O,onKeyDown:T},a("removeIcon")),U=t.removeIcon||o.createElement(J,g);if(t.image){var k=m({key:"image",src:t.image,onError:t.onImageError},a("image"));r.push(o.createElement("img",w({alt:t.imageAlt},k)))}else if(t.icon){var K=m({key:"icon",className:h("icon")},a("icon"));r.push(S.getJSXIcon(t.icon,I({},K),{props:t}))}if(t.label){var M=m({key:"label",className:h("label")},a("label"));r.push(o.createElement("span",M,t.label))}return t.removable&&r.push(S.getJSXIcon(U,I({},g),{props:t})),r},N=function(){var r=t.template?$.getJSXElement(t.template,t):R(),g=m({ref:p,style:t.style,className:E(t.className,h("root"))},b.getOtherProps(t),a("root"));return o.createElement("div",g,r)};return o.useImperativeHandle(i,function(){return{props:t,getElement:function(){return p.current}}}),u&&N()}));D.displayName="Chip";const ae={title:"Misc/Chip",component:D,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},icon:{control:"select",description:"Defines the icon to display.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},image:{control:"text",description:"Defines the image to display.",options:null},imageAlt:{control:"text",description:"It specifies an alternate text for an image, if the image cannot be displayed.",options:null},label:{control:"text",description:"Defines the text to display.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},removable:{control:"boolean",description:"Whether to display a remove icon.",options:null},removeIcon:{control:"select",description:"Icon of the remove element.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},template:{control:"object",description:"Template of an item.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},v={args:{label:"Chip",unstyled:!1}};var P,_,C;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "label": "Chip",
    "unstyled": false
  }
}`,...(C=(_=v.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const le=["Default"];export{v as Default,le as __namedExportsOrder,ae as default};