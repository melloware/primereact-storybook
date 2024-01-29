import{r as i}from"./index-76fb7be0.js";import{a as $,D as H,c as I,O,I as q}from"./api.esm-4644ee78.js";import{C as B,u as J}from"./componentbase.esm-1c796d7e.js";import{d as K}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";function u(e){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(e)}function L(e,t){if(u(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(u(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function W(e){var t=L(e,"string");return u(t)==="symbol"?t:String(t)}function X(e,t,r){return t=W(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}function Y(e){if(Array.isArray(e))return e}function G(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,l,p,s=[],o=!0,m=!1;try{if(l=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;o=!1}else for(;!(o=(n=l.call(r)).done)&&(s.push(n.value),s.length!==t);o=!0);}catch(y){m=!0,a=y}finally{try{if(!o&&r.return!=null&&(p=r.return(),Object(p)!==p))return}finally{if(m)throw a}}return s}}function x(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Q(e,t){if(e){if(typeof e=="string")return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}}function V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(e,t){return Y(e)||G(e,t)||Q(e,t)||V()}var Z={root:function(t){var r=t.props,n=t.state;return I("p-avatar p-component",{"p-avatar-image":O.isNotEmpty(r.image)&&!n.imageFailed,"p-avatar-circle":r.shape==="circle","p-avatar-lg":r.size==="large","p-avatar-xl":r.size==="xlarge","p-avatar-clickable":!!r.onClick})},label:"p-avatar-text",icon:"p-avatar-icon"},ee=`
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
`,g=B.extend({defaultProps:{__TYPE:"Avatar",className:null,icon:null,image:null,imageAlt:"avatar",imageFallback:"default",label:null,onImageError:null,shape:"square",size:"normal",style:null,template:null,children:void 0},css:{classes:Z,styles:ee}});function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(n){X(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var D=i.forwardRef(function(e,t){var r=K(),n=i.useContext($),a=g.getProps(e,n),l=i.useRef(null),p=i.useState(!1),s=E(p,2),o=s[0],m=s[1],y=i.useState(!1),S=E(y,2),N=S[0],R=S[1],v=g.setMetaData({props:a,state:{imageFailed:o,nested:N}}),f=v.ptm,h=v.cx,z=v.isUnstyled;J(g.css.styles,z,{name:"avatar"});var F=function(){if(O.isNotEmpty(a.image)&&!o){var c=r({src:a.image,onError:T},f("image"));return i.createElement("img",w({alt:a.imageAlt},c))}else if(a.label){var C=r({className:h("label")},f("label"));return i.createElement("span",C,a.label)}else if(a.icon){var M=r({className:h("icon")},f("icon"));return q.getJSXIcon(a.icon,te({},M),{props:a})}return null},T=function(c){a.imageFallback==="default"?a.onImageError||(m(!0),c.target.src=null):c.target.src=a.imageFallback,a.onImageError&&a.onImageError(c)};i.useEffect(function(){var d=H.isAttributeEquals(l.current.parentElement,"data-pc-name","avatargroup");R(d)},[]),i.useImperativeHandle(t,function(){return{props:a,getElement:function(){return l.current}}});var U=r({ref:l,style:a.style,className:I(a.className,h("root",{imageFailed:o}))},g.getOtherProps(a),f("root")),k=a.template?O.getJSXElement(a.template,a):F();return i.createElement("div",U,k,a.children)});D.displayName="Avatar";const le={title:"Misc/Avatar",component:D,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},icon:{control:"select",description:"Defines the icon to display.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},image:{control:"text",description:"Defines the image to display.",options:null},imageAlt:{control:"text",description:"It specifies an alternate text for an image, if the image cannot be displayed.",options:null},imageFallback:{control:"text",description:'Defines a fallback image or URL if the main image fails to load. If "default" will fallback to label then icon.',options:null},label:{control:"text",description:"Defines the text to display.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},shape:{control:"select",description:"Shape of the element.",options:["square","circle"]},size:{control:"select",description:"Size of the element.",options:["normal","large","xlarge"]},template:{control:"text",description:"Template of the content.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},b={args:{label:"Avatar",unstyled:!1}};var A,P,_;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    "label": "Avatar",
    "unstyled": false
  }
}`,...(_=(P=b.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const se=["Default"];export{b as Default,se as __namedExportsOrder,le as default};
