import{r as p}from"./index-76fb7be0.js";import{a as ue,c as fe,P as S,D as d,U as de,Z as U,I as ye,l as me}from"./api.esm-4644ee78.js";import{C as ve,u as be}from"./componentbase.esm-1c796d7e.js";import{C as he}from"./csstransition.esm-f87c8556.js";import{d as ge,i as Oe,j as we,k as Ee,E as Pe,a as xe,c as Se}from"./hooks.esm-d069ba29.js";import{T as Ce}from"./index.esm-9702a90e.js";import{O as j}from"./overlayservice.esm-582e1694.js";import{P as Ie}from"./portal.esm-16954874.js";import{R as ke}from"./ripple.esm-1f3221bd.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-60e86362.js";function _(){return _=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_.apply(this,arguments)}function C(e){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(e)}function je(e,n){if(C(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(C(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Te(e){var n=je(e,"string");return C(n)==="symbol"?n:String(n)}function _e(e,n,t){return n=Te(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Re(e){if(Array.isArray(e))return e}function Ae(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,I,h,c=[],y=!0,m=!1;try{if(I=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;y=!1}else for(;!(y=(r=I.call(t)).done)&&(c.push(r.value),c.length!==n);y=!0);}catch(v){m=!0,i=v}finally{try{if(!y&&t.return!=null&&(h=t.return(),Object(h)!==h))return}finally{if(m)throw i}}return c}}function B(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function De(e,n){if(e){if(typeof e=="string")return B(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(e,n)}}function Le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(e,n){return Re(e)||Ae(e,n)||De(e,n)||Le()}var Ne={root:function(n){var t=n.props,r=n.context;return fe("p-overlaypanel p-component",t.className,{"p-input-filled":r&&r.inputStyle==="filled"||S.inputStyle==="filled","p-ripple-disabled":r&&r.ripple===!1||S.ripple===!1})},closeIcon:"p-overlaypanel-close-icon",closeButton:"p-overlaypanel-close p-link",content:"p-overlaypanel-content",transition:"p-overlaypanel"},Ue=`
@layer primereact {
    .p-overlaypanel {
        position: absolute;
        margin-top: 10px;
        /* Github #3122: Prevent animation flickering  */
        top: -9999px;
        left: -9999px;
    }
    
    .p-overlaypanel-flipped {
        margin-top: 0;
        margin-bottom: 10px;
    }
    
    .p-overlaypanel-close {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }
    
    /* Animation */
    .p-overlaypanel-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }
    
    .p-overlaypanel-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-overlaypanel-enter-done {
        transform: none;
    }
    
    .p-overlaypanel-exit {
        opacity: 1;
    }
    
    .p-overlaypanel-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }
    
    .p-overlaypanel:after, .p-overlaypanel:before {
        bottom: 100%;
        left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }
    
    .p-overlaypanel:after {
        border-width: 8px;
        margin-left: -8px;
    }
    
    .p-overlaypanel:before {
        border-width: 10px;
        margin-left: -10px;
    }
    
    .p-overlaypanel-flipped:after, .p-overlaypanel-flipped:before {
        bottom: auto;
        top: 100%;
    }
    
    .p-overlaypanel.p-overlaypanel-flipped:after {
        border-bottom-color: transparent;
    }
    
    .p-overlaypanel.p-overlaypanel-flipped:before {
        border-bottom-color: transparent
    }
}
`,x=ve.extend({defaultProps:{__TYPE:"OverlayPanel",id:null,dismissable:!0,showCloseIcon:!1,closeIcon:null,style:null,className:null,appendTo:null,breakpoints:null,ariaCloseLabel:null,transitionOptions:null,onShow:null,onHide:null,children:void 0,closeOnEscape:!0},css:{classes:Ne,styles:Ue}});function K(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function ze(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?K(Object(t),!0).forEach(function(r){_e(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var V=p.forwardRef(function(e,n){var t=ge(),r=p.useContext(ue),i=x.getProps(e,r),I=p.useState(!1),h=Y(I,2),c=h[0],y=h[1],m=x.setMetaData({props:i,state:{visible:c}}),v=m.ptm,g=m.cx;m.sx;var R=m.isUnstyled;be(x.css.styles,R,{name:"overlaypanel"});var A=p.useRef(""),a=p.useRef(null),u=p.useRef(null),O=p.useRef(!1),w=p.useRef(null),b=p.useRef(null),W=Oe({target:u,overlay:a,listener:function(o,l){var f=l.type,P=l.valid;if(P)switch(f){case"outside":i.dismissable&&!O.current&&E();break;case"resize":case"scroll":case"orientationchange":k();break}O.current=!1},when:c}),z=Y(W,2),q=z[0],J=z[1],H=we("overlay-panel",c);Ee({callback:function(){E()},when:c&&i.closeOnEscape&&H,priority:[Pe.OVERLAY_PANEL,H]});var X=function(o){return a&&a.current&&!(a.current.isSameNode(o)||a.current.contains(o))},F=function(o,l){return u.current!=null&&u.current!==(l||o.currentTarget||o.target)},Q=function(o){E(),o.preventDefault()},ee=function(o){O.current=!0,j.emit("overlay-click",{originalEvent:o,target:u.current})},M=function(){O.current=!0},ne=function(o,l){c?(E(),F(o,l)&&(u.current=l||o.currentTarget||o.target,setTimeout(function(){D(o,u.current)},200))):D(o,l)},D=function(o,l){u.current=l||o.currentTarget||o.target,c?k():(y(!0),b.current=function(f){!X(f.target)&&(O.current=!0)},j.on("overlay-click",b.current))},E=function(){y(!1),j.off("overlay-click",b.current),b.current=null},te=function(){a.current.setAttribute(A.current,""),U.set("overlay",a.current,r&&r.autoZIndex||S.autoZIndex,r&&r.zIndex.overlay||S.zIndex.overlay),d.addStyles(a.current,{position:"absolute",top:"0",left:"0"}),k()},re=function(){q(),i.onShow&&i.onShow()},oe=function(){J()},ie=function(){U.clear(a.current),i.onHide&&i.onHide()},k=function(){if(u.current&&a.current){d.absolutePosition(a.current,u.current);var o=d.getOffset(a.current),l=d.getOffset(u.current),f=0;o.left<l.left&&(f=l.left-o.left),a.current.style.setProperty("--overlayArrowLeft","".concat(f,"px")),o.top<l.top?(a.current.setAttribute("data-p-overlaypanel-flipped","true"),R&&d.addClass(a.current,"p-overlaypanel-flipped")):(a.current.setAttribute("data-p-overlaypanel-flipped","false"),R&&d.removeClass(a.current,"p-overlaypanel-flipped"))}},ae=function(){if(!w.current){w.current=d.createInlineStyle(r&&r.nonce||S.nonce,r&&r.styleContainer);var o="";for(var l in i.breakpoints)o+=`
                    @media screen and (max-width: `.concat(l,`) {
                        .p-overlaypanel[`).concat(A.current,`] {
                            width: `).concat(i.breakpoints[l],`;
                        }
                    }
                `);w.current.innerHTML=o}};xe(function(){A.current=de(),i.breakpoints&&ae()}),Se(function(){w.current=d.removeInlineStyle(w.current),b.current&&(j.off("overlay-click",b.current),b.current=null),U.clear(a.current)}),p.useImperativeHandle(n,function(){return{props:i,toggle:ne,show:D,hide:E,align:k,getElement:function(){return a.current}}});var le=function(){var o=t({className:g("closeIcon"),"aria-hidden":!0},v("closeIcon")),l=i.closeIcon||p.createElement(Ce,o),f=ye.getJSXIcon(l,ze({},o),{props:i}),P=i.ariaCloseLabel||me("close"),L=t({type:"button",className:g("closeButton"),onClick:function(ce){return Q(ce)},"aria-label":P},v("closeButton"));return i.showCloseIcon?p.createElement("button",L,f,p.createElement(ke,null)):null},se=function(){var o=le(),l=t({id:i.id,className:g("root",{context:r}),style:i.style,onClick:function(N){return ee(N)}},x.getOtherProps(i),v("root")),f=t({className:g("content"),onClick:function(N){return M()},onMouseDown:M},x.getOtherProps(i),v("content")),P=t({classNames:g("transition"),in:c,timeout:{enter:120,exit:100},options:i.transitionOptions,unmountOnExit:!0,onEnter:te,onEntered:re,onExit:oe,onExited:ie},v("transition"));return p.createElement(he,_({nodeRef:a},P),p.createElement("div",_({ref:a},l),p.createElement("div",f,i.children),o))},pe=se();return p.createElement(Ie,{element:pe,appendTo:i.appendTo})});V.displayName="OverlayPanel";const Fe={title:"Overlay/OverlayPanel",component:V,parameters:{layout:"centered"},argTypes:{appendTo:{control:"select",description:"DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.",options:["null","HTMLElement","self"]},ariaCloseLabel:{control:"text",description:"Aria label of the close icon.",options:null},breakpoints:{control:"object",description:"Object literal to define widths per screen size.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},closeIcon:{control:"select",description:"Icon to display as close icon.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},closeOnEscape:{control:"boolean",description:"Specifies if pressing escape key should hide the preview.",options:null},dismissable:{control:"boolean",description:"Enables to hide the overlay when outside is clicked.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},showCloseIcon:{control:"boolean",description:"When enabled, displays a close icon at top right corner.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},T={args:{unstyled:!1}};var Z,$,G;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(G=($=T.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};const Qe=["Default"];export{T as Default,Qe as __namedExportsOrder,Fe as default};
