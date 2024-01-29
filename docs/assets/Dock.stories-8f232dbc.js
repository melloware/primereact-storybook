import{r as c}from"./index-76fb7be0.js";import{P as de,m as p,c as f,O as I,U as me,I as fe}from"./api.esm-e57be548.js";import{C as ve,u as be}from"./componentbase.esm-f35515f0.js";import{a as ge}from"./hooks.esm-2e882e60.js";import{R as ye}from"./ripple.esm-42b8b102.js";import"./_commonjsHelpers-de833af9.js";function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_.apply(this,arguments)}function k(e){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(e)}function ke(e,t){if(k(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(k(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function he(e){var t=ke(e,"string");return k(t)==="symbol"?t:String(t)}function xe(e,t,n){return t=he(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Se(e){if(Array.isArray(e))return e}function Oe(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,u,v,b,i=[],d=!0,g=!1;try{if(v=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(o=v.call(n)).done)&&(i.push(o.value),i.length!==t);d=!0);}catch(y){g=!0,u=y}finally{try{if(!d&&n.return!=null&&(b=n.return(),Object(b)!==b))return}finally{if(g)throw u}}return i}}function R(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Pe(e,t){if(e){if(typeof e=="string")return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}}function je(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(e,t){return Se(e)||Oe(e,t)||Pe(e,t)||je()}var Ee={icon:"p-dock-action-icon",action:function(t){var n=t.disabled;return f("p-dock-action",{"p-disabled":n})},menuitem:function(t){var n=t.currentIndexState,o=t.index;return f("p-dock-item",{"p-dock-item-second-prev":n-2===o,"p-dock-item-prev":n-1===o,"p-dock-item-current":n===o,"p-dock-item-next":n+1===o,"p-dock-item-second-next":n+2===o})},header:"p-dock-header",menu:"p-dock-list",footer:"p-dock-footer",root:function(t){var n=t.props;return f("p-dock p-component p-dock-".concat(n.position),{"p-dock-magnification":n.magnification})},container:"p-dock-container"},Ie=`
@layer primereact {
    .p-dock {
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }
    
    .p-dock-container {
        display: flex;
        pointer-events: auto;
    }
    
    .p-dock-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
    }
    
    .p-dock-magnification .p-dock-item {
        transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
    }
    
    .p-dock-action {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: default;
    }
    
    .p-dock-magnification .p-dock-item-second-prev,
    .p-dock-magnification .p-dock-item-second-next {
        transform: scale(1.2);
    }
    
    .p-dock-magnification .p-dock-item-prev,
    .p-dock-magnification .p-dock-item-next {
        transform: scale(1.4);
    }
    
    .p-dock-magnification .p-dock-item-current {
        transform: scale(1.6);
        z-index: 1;
    }
    
    /* Position */
    /* top */
    .p-dock-top {
        left: 0;
        top: 0;
        width: 100%;
    }
    
    .p-dock-top.p-dock-magnification .p-dock-item {
        transform-origin: center top;
    }
    
    .p-dock-top .p-dock-container {
        flex-direction: column-reverse;
    }
    
    /* bottom */
    .p-dock-bottom {
        left: 0;
        bottom: 0;
        width: 100%;
    }
    
    .p-dock-bottom.p-dock-magnification .p-dock-item {
        transform-origin: center bottom;
    }
    
    .p-dock-bottom .p-dock-container {
        flex-direction: column;
    }
    
    /* right */
    .p-dock-right {
        right: 0;
        top: 0;
        height: 100%;
    }
    
    .p-dock-right.p-dock-magnification .p-dock-item {
        transform-origin: center right;
    }
    
    .p-dock-right .p-dock-list {
        flex-direction: column;
    }
    
    /* left */
    .p-dock-left {
        left: 0;
        top: 0;
        height: 100%;
    }
    
    .p-dock-left.p-dock-magnification .p-dock-item {
        transform-origin: center left;
    }
    
    .p-dock-left .p-dock-list {
        flex-direction: column;
    }
    
    .p-dock-left .p-dock-container {
        flex-direction: row-reverse;
    }
}
`,x=ve.extend({defaultProps:{__TYPE:"Dock",id:null,style:null,className:null,model:null,position:"bottom",magnification:!0,header:null,footer:null,children:void 0},css:{classes:Ee,styles:Ie}});function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),n.push.apply(n,o)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A(Object(n),!0).forEach(function(o){xe(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var W=c.memo(c.forwardRef(function(e,t){var n=c.useState(-3),o=T(n,2),u=o[0],v=o[1],b=c.useContext(de),i=x.getProps(e,b),d=c.useState(i.id),g=T(d,2),y=g[0],J=g[1],O=x.setMetaData({props:i,state:{id:y,currentIndex:u}}),m=O.ptm,s=O.cx,X=O.isUnstyled,w=c.useRef(null);be(x.css.styles,X,{name:"dock"});var P=function(r,a,h){return m(r,{context:{index:h,item:a}})},z=function(){v(-3)},B=function(r){v(r)},D=function(r,a){a.command&&a.command({originalEvent:r,item:a}),r.preventDefault()},F=function(r,a){if(r.visible===!1)return null;var h=r.disabled,N=r.icon,ne=r.label,C=r.template,oe=r.url,re=r.target,M=r.id||y+"_"+a,ie=f("p-dock-action",{"p-disabled":h}),ae=f("p-dock-action-icon",N),ce=p({className:s("icon")},P("icon",r,a)),le=fe.getJSXIcon(N,_e({},ce),{props:i}),se=p({href:oe||"#",role:"menuitem",className:s("action",{disabled:h}),target:re,"data-pr-tooltip":ne,onClick:function(E){return D(E,r)}},P("action",r,a)),j=c.createElement("a",se,le,c.createElement(ye,null));if(C){var pe={onClick:function(E){return D(E,r)},className:ie,iconClassName:ae,element:j,props:i,index:a};j=I.getJSXElement(C,r,pe)}var ue=p({id:M,key:M,className:s("menuitem",{currentIndexState:u,index:a}),role:"none",onMouseEnter:function(){return B(a)}},P("menuitem",r,a));return c.createElement("li",ue,j)},K=function(){return i.model?i.model.map(F):null},q=function(){if(i.header){var r=I.getJSXElement(i.header,{props:i}),a=p({className:s("header")},m("header"));return c.createElement("div",a,r)}return null},V=function(){var r=K(),a=p({className:s("menu"),role:"menu",onMouseLeave:z},m("menu"));return c.createElement("ul",a,r)},Y=function(){if(i.footer){var r=I.getJSXElement(i.footer,{props:i}),a=p({className:s("footer")},m("footer"));return c.createElement("div",a,r)}return null};ge(function(){y||J(me())}),c.useImperativeHandle(t,function(){return{props:i,getElement:function(){return w.current}}});var G=q(),Q=V(),Z=Y(),ee=p({className:f(i.className,s("root")),style:i.style},x.getOtherProps(i),m("root")),te=p({className:s("container")},m("container"));return c.createElement("div",_({id:i.id,ref:w},ee),c.createElement("div",te,G,Q,Z))}));W.displayName="Dock";const Re={title:"Menu/Dock",component:W,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},footer:{control:"text",description:"Template of footer element.",options:null},header:{control:"text",description:"Template of header element.",options:null},magnification:{control:"boolean",description:"Whether to allow scale animation.",options:null},model:{control:"object",description:"MenuModel instance to define the action items.",options:null},position:{control:"select",description:"Position of element. Valid values are 'bottom', 'top', 'left' and 'right'.",options:["left","top","bottom","right"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},S={args:{unstyled:!1,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var L,$,H;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    "unstyled": false,
    "model": [{
      "label": "Update",
      "icon": "pi pi-refresh"
    }, {
      "label": "Delete",
      "icon": "pi pi-times"
    }, {
      "label": "React Website",
      "icon": "pi pi-external-link"
    }, {
      "label": "Upload",
      "icon": "pi pi-upload"
    }]
  }
}`,...(H=($=S.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};const Te=["Default"];export{S as Default,Te as __namedExportsOrder,Re as default};
