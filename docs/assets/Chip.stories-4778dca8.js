import{r as p}from"./index-76fb7be0.js";import{a as z,c as C,O as B,I as S}from"./api.esm-4644ee78.js";import{C as $,u as H}from"./componentbase.esm-1c796d7e.js";import{d as J}from"./hooks.esm-d069ba29.js";import{T as W}from"./index.esm-97b4c75f.js";import"./_commonjsHelpers-de833af9.js";import"./iconbase.esm-60e86362.js";function f(e){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},f(e)}function X(e,i){if(f(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,i||"default");if(f(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function L(e){var i=X(e,"string");return f(i)==="symbol"?i:String(i)}function V(e,i,t){return i=L(i),i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},w.apply(this,arguments)}function Y(e){if(Array.isArray(e))return e}function q(e,i){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,n,s,c,a=[],l=!0,d=!1;try{if(s=(t=t.call(e)).next,i===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=s.call(t)).done)&&(a.push(r.value),a.length!==i);l=!0);}catch(u){d=!0,n=u}finally{try{if(!l&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(d)throw n}}return a}}function x(e,i){(i==null||i>e.length)&&(i=e.length);for(var t=0,r=new Array(i);t<i;t++)r[t]=e[t];return r}function F(e,i){if(e){if(typeof e=="string")return x(e,i);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,i)}}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(e,i){return Y(e)||q(e,i)||F(e,i)||G()}var Z={root:function(i){var t=i.props;return C("p-chip p-component",{"p-chip-image":t.image!=null})},removeIcon:"p-chip-remove-icon",icon:"p-chip-icon",label:"p-chip-text"},ee=`
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
`,y=$.extend({defaultProps:{__TYPE:"Chip",label:null,icon:null,image:null,removable:!1,removeIcon:null,className:null,style:null,template:null,imageAlt:"chip",onImageError:null,onRemove:null,children:void 0},css:{classes:Z,styles:ee}});function j(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function I(e){for(var i=1;i<arguments.length;i++){var t=arguments[i]!=null?arguments[i]:{};i%2?j(Object(t),!0).forEach(function(r){V(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var D=p.memo(p.forwardRef(function(e,i){var t=J(),r=p.useContext(z),n=y.getProps(e,r),s=p.useRef(null),c=p.useState(!0),a=Q(c,2),l=a[0],d=a[1],u=y.setMetaData({props:n}),m=u.ptm,h=u.cx,A=u.isUnstyled;H(y.css.styles,A,{name:"chip"});var T=function(o){(o.code==="Enter"||o.code==="Backspace")&&O(o)},O=function(o){d(!1),n.onRemove&&n.onRemove({originalEvent:o,value:n.label||n.image||n.icon})},R=function(){var o=[],b=t({key:"removeIcon",role:"button",tabIndex:0,className:h("removeIcon"),onClick:O,onKeyDown:T},m("removeIcon")),U=n.removeIcon||p.createElement(W,b);if(n.image){var M=t({key:"image",src:n.image,onError:n.onImageError},m("image"));o.push(p.createElement("img",w({alt:n.imageAlt},M)))}else if(n.icon){var k=t({key:"icon",className:h("icon")},m("icon"));o.push(S.getJSXIcon(n.icon,I({},k),{props:n}))}if(n.label){var K=t({key:"label",className:h("label")},m("label"));o.push(p.createElement("span",K,n.label))}return n.removable&&o.push(S.getJSXIcon(U,I({},b),{props:n})),o},N=function(){var o=n.template?B.getJSXElement(n.template,n):R(),b=t({ref:s,style:n.style,className:C(n.className,h("root")),"aria-label":n.label},y.getOtherProps(n),m("root"));return p.createElement("div",b,o)};return p.useImperativeHandle(i,function(){return{props:n,getElement:function(){return s.current}}}),l&&N()}));D.displayName="Chip";const le={title:"Misc/Chip",component:D,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},icon:{control:"select",description:"Defines the icon to display.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},image:{control:"text",description:"Defines the image to display.",options:null},imageAlt:{control:"text",description:"It specifies an alternate text for an image, if the image cannot be displayed.",options:null},label:{control:"text",description:"Defines the text to display.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},removable:{control:"boolean",description:"Whether to display a remove icon.",options:null},removeIcon:{control:"select",description:"Icon of the remove element.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},template:{control:"object",description:"Template of an item.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},v={args:{label:"Chip",unstyled:!1}};var P,E,_;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "label": "Chip",
    "unstyled": false
  }
}`,...(_=(E=v.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const se=["Default"];export{v as Default,se as __namedExportsOrder,le as default};
