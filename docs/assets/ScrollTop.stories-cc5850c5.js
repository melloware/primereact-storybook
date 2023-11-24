import{r as i}from"./index-76fb7be0.js";import{P as Y,m as g,I as q,c as D,D as G,Z as w,b as P}from"./api.esm-2e2d159c.js";import{C as Q,u as ee}from"./componentbase.esm-b0caea1e.js";import{C as te}from"./csstransition.esm-653f5084.js";import{c as j,f as ne}from"./hooks.esm-c93f10ee.js";import{C as re}from"./index.esm-de2d3243.js";import{R as oe}from"./ripple.esm-cba91116.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-439d6f79.js";function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}function ie(e,t){if(d(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(d(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function le(e){var t=ie(e,"string");return d(t)==="symbol"?t:String(t)}function se(e,t,n){return t=le(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pe(e){if(Array.isArray(e))return e}function ae(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,y,l,o=[],s=!0,u=!1;try{if(y=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=y.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){u=!0,a=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return o}}function T(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ce(e,t){if(e){if(typeof e=="string")return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}}function ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(e,t){return pe(e)||ae(e,t)||ce(e,t)||ue()}var fe={root:function(t){var n=t.props;return D("p-scrolltop p-link p-component",{"p-scrolltop-sticky":n.target!=="window"})},icon:"p-scrolltop-icon",transition:"p-scrolltop"},me=`
@layer primereact {
    .p-scrolltop {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-scrolltop-sticky {
        position: sticky;
    }
    
    .p-scrolltop-sticky.p-link {
        margin-left: auto;
    }
    
    .p-scrolltop-helper {
        display: none;
    }
    
    .p-scrolltop-enter {
        opacity: 0;
    }
    
    .p-scrolltop-enter-active {
        opacity: 1;
        transition: opacity .15s;
    }
    
    .p-scrolltop-exit {
        opacity: 1;
    }
    
    .p-scrolltop-exit-active {
        opacity: 0;
        transition: opacity .15s;
    }
}
`,b=Q.extend({defaultProps:{__TYPE:"ScrollTop",target:"window",threshold:400,icon:null,behavior:"smooth",className:null,style:null,transitionOptions:null,onShow:null,onHide:null,children:void 0},css:{classes:fe,styles:me}});function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var N=i.memo(i.forwardRef(function(e,t){var n=i.useState(!1),r=S(n,2),a=r[0],y=r[1],l=i.useContext(Y),o=b.getProps(e,l),s=b.setMetaData({props:o,state:{visible:a}}),u=s.ptm,f=s.cx,A=s.isUnstyled;ee(b.css.styles,A,{name:"scrolltop"});var m=i.useRef(null),h=i.useRef(null),U=o.target==="parent",k=j({target:function(){return h.current&&h.current.parentElement},type:"scroll",listener:function(c){O(c.currentTarget.scrollTop)}}),L=S(k,1),H=L[0],z=j({target:"window",type:"scroll",listener:function(c){c&&O(G.getWindowScrollTop())}}),M=S(z,1),Z=M[0],$=function(){var c=o.target==="window"?window:h.current.parentElement;c.scroll({top:0,behavior:o.behavior})},O=function(c){y(c>o.threshold)},B=function(){w.set("overlay",m.current,l&&l.autoZIndex||P.autoZIndex,l&&l.zIndex.overlay||P.zIndex.overlay)},V=function(){o.onShow&&o.onShow()},W=function(){w.clear(m.current),o.onHide&&o.onHide()};i.useImperativeHandle(t,function(){return{props:o,getElement:function(){return elementRef.current}}}),i.useEffect(function(){o.target==="window"?Z():o.target==="parent"&&H()},[]),ne(function(){w.clear(m.current)});var x=g({className:f("icon")},u("icon")),J=o.icon||i.createElement(re,x),K=q.getJSXIcon(J,de({},x),{props:o}),X=g({ref:m,type:"button",className:D(o.className,f("root")),style:o.style,onClick:$},b.getOtherProps(o),u("root")),F=g({classNames:f("transition"),in:a,timeout:{enter:150,exit:150},options:o.transitionOptions,unmountOnExit:!0,onEnter:B,onEntered:V,onExited:W},u("transition"));return i.createElement(i.Fragment,null,i.createElement(te,E({nodeRef:m},F),i.createElement("button",X,K,i.createElement(oe,null))),U&&i.createElement("span",{ref:h,className:"p-scrolltop-helper"}))}));N.displayName="ScrollTop";const je={title:"Misc/ScrollTop",component:N,parameters:{layout:"centered"},argTypes:{behavior:{control:"select",description:'Defines the scrolling behavior, "smooth" adds an animation and "auto" scrolls with a jump.',options:["auto","smooth"]},children:{control:"text",description:"Used to get the child elements of the component.",options:null},className:{control:"text",description:"Style class of the component.",options:null},icon:{control:"select",description:"Name of the icon or JSX.Element for icon.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},style:{control:"object",description:"Inline style of the component.",options:null},target:{control:"select",description:'Target of the ScrollTop, valid values are "window" and "parent".',options:["window","parent"]},threshold:{control:"number",description:"Defines the threshold value of the vertical scroll position of the target to toggle the visibility.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},v={args:{unstyled:!1}};var I,R,C;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(C=(R=v.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const Te=["Default"];export{v as Default,Te as __namedExportsOrder,je as default};
//# sourceMappingURL=ScrollTop.stories-cc5850c5.js.map
