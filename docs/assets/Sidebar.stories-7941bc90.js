import{r as i}from"./index-76fb7be0.js";import{P as he,c as U,b as E,Z as w,D as k,m as g,O as $,I as ve,l as ge}from"./api.esm-2e2d159c.js";import{C as ye,u as xe}from"./componentbase.esm-b0caea1e.js";import{C as Se}from"./csstransition.esm-653f5084.js";import{c as we,d as Ee,e as B,f as ke}from"./hooks.esm-c93f10ee.js";import{T as Oe}from"./index.esm-1e412bae.js";import{P as Ie}from"./portal.esm-c66f0cf3.js";import{R as Ce}from"./ripple.esm-cba91116.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-439d6f79.js";function R(){return R=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},R.apply(this,arguments)}function O(r){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(r)}function Pe(r,t){if(O(r)!=="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var e=n.call(r,t||"default");if(O(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function je(r){var t=Pe(r,"string");return O(t)==="symbol"?t:String(t)}function De(r,t,n){return t=je(t),t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function Re(r){if(Array.isArray(r))return r}function Te(r,t){var n=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var e,u,p,o,b=[],c=!0,f=!1;try{if(p=(n=n.call(r)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(e=p.call(n)).done)&&(b.push(e.value),b.length!==t);c=!0);}catch(s){f=!0,u=s}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(f)throw u}}return b}}function W(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function _e(r,t){if(r){if(typeof r=="string")return W(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(r,t)}}function Le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(r,t){return Re(r)||Te(r,t)||_e(r,t)||Le()}var J=function(t){var n=i.useRef(void 0);return i.useEffect(function(){n.current=t}),n.current},Ne=function(t){return i.useEffect(function(){return t},[])},Me=function(t){var n=t.target,e=n===void 0?"document":n,u=t.type,p=t.listener,o=t.options,b=t.when,c=b===void 0?!0:b,f=i.useRef(null),s=i.useRef(null),I=J(p),y=J(o),m=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};$.isNotEmpty(S.target)&&(d(),(S.when||c)&&(f.current=k.getTargetElement(S.target))),!s.current&&f.current&&(s.current=function(h){return p&&p(h)},f.current.addEventListener(u,s.current,o))},d=function(){s.current&&(f.current.removeEventListener(u,s.current,o),s.current=null)};return i.useEffect(function(){c?f.current=k.getTargetElement(e):(d(),f.current=null)},[e,c]),i.useEffect(function(){s.current&&(""+I!=""+p||y!==o)&&(d(),c&&m())},[p,o,c]),Ne(function(){d()}),[m,d]},Ae=function(t,n,e){var u=function(s){(s.key==="Esc"||s.key==="Escape")&&(s.stopImmediatePropagation(),e(s))},p=Me({type:"keydown",listener:u}),o=D(p,2),b=o[0],c=o[1];return i.useEffect(function(){if(n&&t.current)return b(),function(){c()}}),[t,e]},Ue={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(t){var n=t.props,e=t.maskVisibleState,u=["left","right","top","bottom"],p=u.find(function(o){return o===n.position});return U("p-sidebar-mask",p&&!n.fullScreen?"p-sidebar-".concat(p):"",{"p-component-overlay p-component-overlay-enter":n.modal,"p-sidebar-mask-scrollblocker":n.blockScroll,"p-sidebar-visible":e,"p-sidebar-full":n.fullScreen},n.maskClassName)},header:function(t){var n=t.props;return U("p-sidebar-header",{"p-sidebar-custom-header":n.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(t){var n=t.props,e=t.context;return U("p-sidebar p-component",n.className,{"p-input-filled":e&&e.inputStyle==="filled"||E.inputStyle==="filled","p-ripple-disabled":e&&e.ripple===!1||E.ripple===!1})},transition:"p-sidebar"},Be=`
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
`,$e={mask:function(t){var n=t.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n.position==="left"?"flex-start":n.position==="right"?"flex-end":"center",alignItems:n.position==="top"?"flex-start":n.position==="bottom"?"flex-end":"center"}}},P=ye.extend({defaultProps:{__TYPE:"Sidebar",id:null,style:null,className:null,maskStyle:null,maskClassName:null,visible:!1,position:"left",fullScreen:!1,blockScroll:!1,baseZIndex:0,dismissable:!0,showCloseIcon:!0,closeIcon:null,ariaCloseLabel:null,closeOnEscape:!0,icons:null,modal:!0,appendTo:null,transitionOptions:null,onShow:null,onHide:null,children:void 0},css:{classes:Ue,styles:Be,inlineStyles:$e}});function X(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),n.push.apply(n,e)}return n}function ze(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?X(Object(n),!0).forEach(function(e){De(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var G=i.forwardRef(function(r,t){var n=i.useContext(he),e=P.getProps(r,n),u=i.useState(!1),p=D(u,2),o=p[0],b=p[1],c=i.useState(!1),f=D(c,2),s=f[0],I=f[1],y=P.setMetaData({props:e,state:{containerVisible:o}}),m=y.ptm,d=y.cx,T=y.sx,S=y.isUnstyled;xe(P.css.styles,S,{name:"sidebar"});var h=i.useRef(null),v=i.useRef(null),_=i.useRef(null);Ae(v,e.closeOnEscape,function(a){w.get(v.current)===w.getCurrent("modal",n&&n.autoZIndex||E.autoZIndex)&&C(a)});var Q=we({type:"click",listener:function(l){l.button===0&&ee(l)&&C(l)}}),z=D(Q,2),H=z[0],Z=z[1],ee=function(l){return h&&h.current&&!h.current.contains(l.target)},ne=function(){var l=document.activeElement,x=l&&h&&h.current.contains(l);!x&&e.showCloseIcon&&_.current.focus()},te=function(l){e.dismissable&&e.modal&&v.current===l.target&&C(l)},C=function(l){e.onHide(),l.preventDefault()},re=function(){e.onShow&&e.onShow(),ne(),se()},ie=function(){e.modal&&k.addClass(v.current,"p-component-overlay-leave")},oe=function(){w.clear(v.current),b(!1),V()},se=function(){e.dismissable&&!e.modal&&H(),e.blockScroll&&k.blockBodyScroll()},V=function(){Z(),e.blockScroll&&k.unblockBodyScroll()};i.useImperativeHandle(t,function(){return{props:e,getElement:function(){return h.current},gteMask:function(){return v.current},getCloseIcon:function(){return _.current}}}),Ee(function(){e.visible&&b(!0)}),B(function(){e.visible&&!o&&b(!0),e.visible!==s&&o&&I(e.visible)}),B(function(){o&&(w.set("modal",v.current,n&&n.autoZIndex||E.autoZIndex,e.baseZIndex||n&&n.zIndex.modal||E.zIndex.modal),I(!0))},[o]),B(function(){s&&(Z(),e.dismissable&&!e.modal&&H())},[e.dismissable,e.modal,s]),ke(function(){V(),v.current&&w.clear(v.current)});var ae=function(){var l=g({type:"button",ref:_,className:d("closeButton"),onClick:function(A){return C(A)},"aria-label":M},m("closeButton")),x=g({className:d("closeIcon")},m("closeIcon")),L=e.closeIcon||i.createElement(Oe,x),N=ve.getJSXIcon(L,ze({},x),{props:e}),M=e.ariaCloseLabel||ge("close");return e.showCloseIcon?i.createElement("button",l,N,i.createElement(Ce,null)):null},le=function(){return e.header?$.getJSXElement(e.header,e):null},pe=function(){return e.icons?$.getJSXElement(e.icons,e):null},ce=function(){var l=ae(),x=pe(),L=le(),N={enter:e.fullScreen?150:300,exit:e.fullScreen?150:300},M=g({ref:v,style:T("mask"),className:d("mask",{maskVisibleState:o}),onMouseDown:function(me){return te(me)}},m("mask")),K=g({id:e.id,className:d("root",{context:n}),style:e.style,role:"complementary"},P.getOtherProps(e),m("root")),A=g({className:d("header")},m("header")),ue=g({className:d("content")},m("content")),fe=g({className:d("icons")},m("icons")),be=g({classNames:d("transition"),in:s,timeout:N,options:e.transitionOptions,unmountOnExit:!0,onEntered:re,onExiting:ie,onExited:oe},m("transition"));return i.createElement("div",M,i.createElement(Se,R({nodeRef:h},be),i.createElement("div",R({ref:h},K),i.createElement("div",A,L,i.createElement("div",fe,x,l)),i.createElement("div",ue,e.children))))},de=function(){var l=ce();return i.createElement(Ie,{element:l,appendTo:e.appendTo,visible:!0})};return o&&de()});G.displayName="Sidebar";const nn={title:"Overlay/Sidebar",component:G,parameters:{layout:"centered"},argTypes:{appendTo:{control:"select",description:"DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and self. The self value is used to render a component where it is located.",options:["null","HTMLElement","self"]},ariaCloseLabel:{control:"text",description:"Aria label of the close icon.",options:null},baseZIndex:{control:"number",description:"Base zIndex value to use in layering.",options:null},blockScroll:{control:"boolean",description:"Whether to block scrolling of the document when sidebar is active.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},closeIcon:{control:"select",description:"Icon of the close button.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},closeOnEscape:{control:"boolean",description:"Specifies if pressing escape key should hide the sidebar.",options:null},dismissable:{control:"boolean",description:"Whether to dismiss sidebar on click of the mask.",options:null},fullScreen:{control:"boolean",description:"Adds a close icon to the header to hide the dialog.",options:null},header:{control:"text",description:"Custom template for the header.",options:null},icons:{control:"text",description:"Custom icons template for the header.",options:null},maskClassName:{control:"text",description:"Style class of the mask.",options:null},maskStyle:{control:"object",description:"Inline style of the mask.",options:null},modal:{control:"boolean",description:"Whether to a modal layer behind the sidebar.",options:null},position:{control:"select",description:'Specifies the position of the sidebar, valid values are "left" and "right".',options:["left","top","bottom","right"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},showCloseIcon:{control:"boolean",description:"Whether to display a close icon inside the panel.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},visible:{control:"boolean",description:"Specifies the visibility of the dialog.",options:null}}},j={args:{unstyled:!1}};var F,Y,q;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(q=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};const tn=["Default"];export{j as Default,tn as __namedExportsOrder,nn as default};
//# sourceMappingURL=Sidebar.stories-7941bc90.js.map
