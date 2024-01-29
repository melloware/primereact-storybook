import{r as n}from"./index-76fb7be0.js";import{P as M,D as H,m as b,c as I,O as w,I as q}from"./api.esm-e57be548.js";import{C as B,u as J}from"./componentbase.esm-f35515f0.js";import"./_commonjsHelpers-de833af9.js";import"./hooks.esm-2e882e60.js";function c(e){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(e)}function K(e,t){if(c(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(c(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function L(e){var t=K(e,"string");return c(t)==="symbol"?t:String(t)}function W(e,t,r){return t=L(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},S.apply(this,arguments)}function X(e){if(Array.isArray(e))return e}function Y(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var a,i,u,l,o=[],s=!0,m=!1;try{if(u=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;s=!1}else for(;!(s=(a=u.call(r)).done)&&(o.push(a.value),o.length!==t);s=!0);}catch(f){m=!0,i=f}finally{try{if(!s&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(m)throw i}}return o}}function x(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function G(e,t){if(e){if(typeof e=="string")return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}}function Q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(e,t){return X(e)||Y(e,t)||G(e,t)||Q()}var V={root:function(t){var r=t.props,a=t.state;return I("p-avatar p-component",{"p-avatar-image":w.isNotEmpty(r.image)&&!a.imageFailed,"p-avatar-circle":r.shape==="circle","p-avatar-lg":r.size==="large","p-avatar-xl":r.size==="xlarge","p-avatar-clickable":!!r.onClick})},label:"p-avatar-text",icon:"p-avatar-icon"},Z=`
@layer primereact {
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
    }
    
    .p-avatar.p-avatar-image {
        background-color: transparent;
    }
    
    .p-avatar.p-avatar-circle {
        border-radius: 50%;
    }
    
    .p-avatar.p-avatar-circle img {
        border-radius: 50%;
    }
    
    .p-avatar .p-avatar-icon {
        font-size: 1rem;
    }
    
    .p-avatar img {
        width: 100%;
        height: 100%;
    }
    
    .p-avatar-clickable {
        cursor: pointer;
    }
}
`,y=B.extend({defaultProps:{__TYPE:"Avatar",className:null,icon:null,image:null,imageAlt:"avatar",imageFallback:"default",label:null,onImageError:null,shape:"square",size:"normal",style:null,template:null,children:void 0},css:{classes:V,styles:Z}});function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,a)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(a){W(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}var D=n.forwardRef(function(e,t){var r=n.useContext(M),a=y.getProps(e,r),i=n.useRef(null),u=n.useState(!1),l=E(u,2),o=l[0],s=l[1],m=n.useState(!1),f=E(m,2),N=f[0],R=f[1],h=y.setMetaData({props:a,state:{imageFailed:o,nested:N}}),d=h.ptm,O=h.cx,z=h.isUnstyled;J(y.css.styles,z,{name:"avatar"});var F=function(){if(w.isNotEmpty(a.image)&&!o){var p=b({src:a.image,onError:T},d("image"));return n.createElement("img",S({alt:a.imageAlt},p))}else if(a.label){var C=b({className:O("label")},d("label"));return n.createElement("span",C,a.label)}else if(a.icon){var $=b({className:O("icon")},d("icon"));return q.getJSXIcon(a.icon,ee({},$),{props:a})}return null},T=function(p){a.imageFallback==="default"?a.onImageError||(s(!0),p.target.src=null):p.target.src=a.imageFallback,a.onImageError&&a.onImageError(p)};n.useEffect(function(){var g=H.isAttributeEquals(i.current.parentElement,"data-pc-name","avatargroup");R(g)},[]),n.useImperativeHandle(t,function(){return{props:a,getElement:function(){return i.current}}});var U=b({ref:i,style:a.style,className:I(a.className,O("root",{imageFailed:o}))},y.getOtherProps(a),d("root")),k=a.template?w.getJSXElement(a.template,a):F();return n.createElement("div",U,k,a.children)});D.displayName="Avatar";const oe={title:"Misc/Avatar",component:D,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},icon:{control:"select",description:"Defines the icon to display.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},image:{control:"text",description:"Defines the image to display.",options:null},imageAlt:{control:"text",description:"It specifies an alternate text for an image, if the image cannot be displayed.",options:null},imageFallback:{control:"text",description:'Defines a fallback image or URL if the main image fails to load. If "default" will fallback to label then icon.',options:null},label:{control:"text",description:"Defines the text to display.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},shape:{control:"select",description:"Shape of the element.",options:["square","circle"]},size:{control:"select",description:"Size of the element.",options:["normal","large","xlarge"]},template:{control:"text",description:"Template of the content.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},v={args:{label:"Avatar",unstyled:!1}};var A,P,_;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    "label": "Avatar",
    "unstyled": false
  }
}`,...(_=(P=v.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const le=["Default"];export{v as Default,le as __namedExportsOrder,oe as default};
