import{r as a}from"./index-76fb7be0.js";import{a as xe,c as j,P,D,Z as _,O as R,l as Se,I as we}from"./api.esm-4644ee78.js";import{C as Ee,u as ke}from"./componentbase.esm-1c796d7e.js";import{C as W}from"./csstransition.esm-f87c8556.js";import{d as Ie,j as Oe,k as Ce,E as Pe,h as je,a as De,b as T,c as _e}from"./hooks.esm-d069ba29.js";import{T as Re}from"./index.esm-9702a90e.js";import{P as Te}from"./portal.esm-16954874.js";import{R as Ne}from"./ripple.esm-1f3221bd.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-60e86362.js";function v(){return v=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},v.apply(this,arguments)}function S(n){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(n)}function Ae(n,t){if(S(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t||"default");if(S(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Me(n){var t=Ae(n,"string");return S(t)==="symbol"?t:String(t)}function Le(n,t,e){return t=Me(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Be(n){if(Array.isArray(n))return n}function Ue(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var i,r,f,c,l=[],d=!0,w=!1;try{if(f=(e=e.call(n)).next,t===0){if(Object(e)!==e)return;d=!1}else for(;!(d=(i=f.call(e)).done)&&(l.push(i.value),l.length!==t);d=!0);}catch(E){w=!0,r=E}finally{try{if(!d&&e.return!=null&&(c=e.return(),Object(c)!==c))return}finally{if(w)throw r}}return l}}function $(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function He(n,t){if(n){if(typeof n=="string")return $(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return $(n,t)}}function ze(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(n,t){return Be(n)||Ue(n,t)||He(n,t)||ze()}var Ve={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(t){var e=t.props,i=t.maskVisibleState,r=["left","right","top","bottom"],f=r.find(function(c){return c===e.position});return j("p-sidebar-mask",f&&!e.fullScreen?"p-sidebar-".concat(f):"",{"p-component-overlay p-component-overlay-enter":e.modal,"p-sidebar-mask-scrollblocker":e.blockScroll,"p-sidebar-visible":i,"p-sidebar-full":e.fullScreen},e.maskClassName)},header:function(t){var e=t.props;return j("p-sidebar-header",{"p-sidebar-custom-header":e.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(t){var e=t.props,i=t.context;return j("p-sidebar p-component",e.className,{"p-input-filled":i&&i.inputStyle==="filled"||P.inputStyle==="filled","p-ripple-disabled":i&&i.ripple===!1||P.ripple===!1})},transition:"p-sidebar"},Ze=`
@layer primereact {
    .p-sidebar-mask {
        display: none;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }
    
    .p-sidebar-visible {
        display: flex;
    }
    
    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
    }
    
    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }
    
    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .p-sidebar-custom-header {
        justify-content: space-between;
    }
    
    .p-sidebar-icons {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw;
        height: 100vh;
        max-height: 100%;
        top: 0px;
        left: 0px;
    }
    
    /* Animation */
    /* Top, Bottom, Left and Right */
    .p-sidebar-top .p-sidebar-enter,
    .p-sidebar-top .p-sidebar-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }
    
    .p-sidebar-bottom .p-sidebar-enter,
    .p-sidebar-bottom .p-sidebar-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }
    
    .p-sidebar-left .p-sidebar-enter,
    .p-sidebar-left .p-sidebar-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }
    
    .p-sidebar-right .p-sidebar-enter,
    .p-sidebar-right .p-sidebar-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }
    
    .p-sidebar-top .p-sidebar-enter-active,
    .p-sidebar-bottom .p-sidebar-enter-active,
    .p-sidebar-left .p-sidebar-enter-active,
    .p-sidebar-right .p-sidebar-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s;
    }
    
    .p-sidebar-top .p-sidebar-enter-done,
    .p-sidebar-bottom .p-sidebar-enter-done,
    .p-sidebar-left .p-sidebar-enter-done,
    .p-sidebar-right .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-top .p-sidebar-exit-active,
    .p-sidebar-bottom .p-sidebar-exit-active,
    .p-sidebar-left .p-sidebar-exit-active,
    .p-sidebar-right .p-sidebar-exit-active {
        transition: all 0.3s;
    }
    
    /* Full */
    .p-sidebar-full .p-sidebar-enter {
        opacity: 0;
        transform: scale(0.5);
    }
    
    .p-sidebar-full .p-sidebar-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 0.15s cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-sidebar-full .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-full .p-sidebar-exit-active {
        opacity: 0;
        transform: scale(0.5);
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }
    
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }
    
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }
    
    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }
    
    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }
    
    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }
    
    .p-sidebar-left .p-sidebar-view,
    .p-sidebar-right .p-sidebar-view,
    .p-sidebar-top .p-sidebar-view,
    .p-sidebar-bottom .p-sidebar-view {
        width: 100%;
        height: 100%;
    }
    
    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }
    
    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }        
}
`,We={mask:function(t){var e=t.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:e.position==="left"?"flex-start":e.position==="right"?"flex-end":"center",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"}}},O=Ee.extend({defaultProps:{__TYPE:"Sidebar",id:null,style:null,className:null,maskStyle:null,maskClassName:null,visible:!1,position:"left",fullScreen:!1,blockScroll:!1,baseZIndex:0,dismissable:!0,showCloseIcon:!0,closeIcon:null,ariaCloseLabel:null,closeOnEscape:!0,icons:null,modal:!0,appendTo:null,transitionOptions:null,onShow:null,onHide:null,children:void 0},css:{classes:Ve,styles:Ze,inlineStyles:We}});function J(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,i)}return e}function $e(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?J(Object(e),!0).forEach(function(i){Le(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):J(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}var Y=a.forwardRef(function(n,t){var e=Ie(),i=a.useContext(xe),r=O.getProps(n,i),f=a.useState(!1),c=N(f,2),l=c[0],d=c[1],w=a.useState(!1),E=N(w,2),h=E[0],A=E[1],k=O.setMetaData({props:r,state:{containerVisible:l}}),u=k.ptm,b=k.cx,F=k.sx,q=k.isUnstyled;ke(O.css.styles,q,{name:"sidebar"});var p=a.useRef(null),m=a.useRef(null),y=a.useRef(null),M=Oe("sidebar",h);Ce({callback:function(o){g(o)},when:h&&r.closeOnEscape&&M,priority:[Pe.SIDEBAR,M]});var Q=je({type:"click",listener:function(o){o.button===0&&ee(o)&&g(o)}}),L=N(Q,2),B=L[0],U=L[1],ee=function(o){return p&&p.current&&!p.current.contains(o.target)},ne=function(){var o=document.activeElement,x=o&&p&&p.current.contains(o);!x&&r.showCloseIcon&&y.current&&y.current.focus()},te=function(o){r.dismissable&&r.modal&&m.current===o.target&&g(o)},g=function(o){r.onHide(),o.preventDefault()},re=function(){r.onShow&&r.onShow(),ne(),ae()},ie=function(){r.modal&&D.addClass(m.current,"p-component-overlay-leave")},oe=function(){_.clear(m.current),d(!1),H()},ae=function(){r.dismissable&&!r.modal&&B(),r.blockScroll&&D.blockBodyScroll()},H=function(){U(),r.blockScroll&&D.unblockBodyScroll()};a.useImperativeHandle(t,function(){return{props:r,getElement:function(){return p.current},gteMask:function(){return m.current},getCloseIcon:function(){return y.current}}}),De(function(){r.visible&&d(!0)}),T(function(){r.visible&&!l&&d(!0),r.visible!==h&&l&&A(r.visible)}),T(function(){l&&(_.set("modal",m.current,i&&i.autoZIndex||P.autoZIndex,r.baseZIndex||i&&i.zIndex.modal||P.zIndex.modal),A(!0))},[l]),T(function(){h&&(U(),r.dismissable&&!r.modal&&B())},[r.dismissable,r.modal,h]),_e(function(){H(),m.current&&_.clear(m.current)});var se=function(){var o=r.ariaCloseLabel||Se("close"),x=e({type:"button",ref:y,className:b("closeButton"),onClick:function(ge){return g(ge)},"aria-label":o},u("closeButton")),I=e({className:b("closeIcon")},u("closeIcon")),ve=r.closeIcon||a.createElement(Re,I),ye=we.getJSXIcon(ve,$e({},I),{props:r});return r.showCloseIcon?a.createElement("button",x,ye,a.createElement(Ne,null)):null},le=function(){return r.header?R.getJSXElement(r.header,r):null},pe=function(){return r.icons?R.getJSXElement(r.icons,r):null},z=e({ref:m,style:F("mask"),className:b("mask",{maskVisibleState:l}),onMouseDown:function(o){return te(o)}},u("mask")),V=e({id:r.id,className:b("root",{context:i}),style:r.style,role:"complementary"},O.getOtherProps(r),u("root")),ce=e({className:b("header")},u("header")),de=e({className:b("content")},u("content")),ue=e({className:b("icons")},u("icons")),be={enter:r.fullScreen?150:300,exit:r.fullScreen?150:300},Z=e({classNames:b("transition"),in:h,timeout:be,options:r.transitionOptions,unmountOnExit:!0,onEntered:re,onExiting:ie,onExited:oe},u("transition")),me=function(){var o={closeIconRef:y,hide:g};return a.createElement("div",z,a.createElement(W,v({nodeRef:p},Z),a.createElement("div",v({ref:p},V),R.getJSXElement(n.content,o))))},fe=function(){var o=se(),x=pe(),I=le();return a.createElement("div",z,a.createElement(W,v({nodeRef:p},Z),a.createElement("div",v({ref:p},V),a.createElement("div",ce,I,a.createElement("div",ue,x,o)),a.createElement("div",de,r.children))))},he=function(){var o=n!=null&&n.content?me():fe();return a.createElement(Te,{element:o,appendTo:r.appendTo,visible:!0})};return l&&he()});Y.displayName="Sidebar";const an={title:"Overlay/Sidebar",component:Y,parameters:{layout:"centered"},argTypes:{appendTo:{control:"select",description:"DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and self. The self value is used to render a component where it is located.",options:["null","HTMLElement","self"]},ariaCloseLabel:{control:"text",description:"Aria label of the close icon.",options:null},baseZIndex:{control:"number",description:"Base zIndex value to use in layering.",options:null},blockScroll:{control:"boolean",description:"Whether to block scrolling of the document when sidebar is active.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},closeIcon:{control:"select",description:"Icon of the close button.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},closeOnEscape:{control:"boolean",description:"Specifies if pressing escape key should hide the sidebar.",options:null},dismissable:{control:"boolean",description:"Whether to dismiss sidebar on click of the mask.",options:null},fullScreen:{control:"boolean",description:"Adds a close icon to the header to hide the dialog.",options:null},header:{control:"text",description:"Custom template for the header.",options:null},icons:{control:"text",description:"Custom icons template for the header.",options:null},maskClassName:{control:"text",description:"Style class of the mask.",options:null},maskStyle:{control:"object",description:"Inline style of the mask.",options:null},modal:{control:"boolean",description:"Whether to a modal layer behind the sidebar.",options:null},position:{control:"select",description:'Specifies the position of the sidebar, valid values are "left" and "right".',options:["left","top","bottom","right"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},showCloseIcon:{control:"boolean",description:"Whether to display a close icon inside the panel.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},visible:{control:"boolean",description:"Specifies the visibility of the dialog.",options:null}}},C={args:{unstyled:!1}};var K,X,G;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(G=(X=C.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};const sn=["Default"];export{C as Default,sn as __namedExportsOrder,an as default};
