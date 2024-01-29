import{r as i}from"./index-76fb7be0.js";import{P as ue,c as fe,a as k,D as g,U as de,Z as N,m as C,I as ve,l as me,O as ye}from"./api.esm-e57be548.js";import{C as be,u as he}from"./componentbase.esm-f35515f0.js";import{C as ge}from"./csstransition.esm-2b0eb2be.js";import{h as Ee,a as Oe,c as we}from"./hooks.esm-2e882e60.js";import{T as Pe}from"./index.esm-8d6e6251.js";import{O as R}from"./overlayservice.esm-f3934ea7.js";import{P as xe}from"./portal.esm-d730a851.js";import{R as Se}from"./ripple.esm-42b8b102.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-64142d35.js";function _(){return _=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_.apply(this,arguments)}function T(n){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(n)}function Ce(n,e){if(T(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(T(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Ie(n){var e=Ce(n,"string");return T(e)==="symbol"?e:String(e)}function ke(n,e,t){return e=Ie(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Te(n){if(Array.isArray(n))return n}function je(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,m,v,c,y=[],p=!0,f=!1;try{if(v=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;p=!1}else for(;!(p=(r=v.call(t)).done)&&(y.push(r.value),y.length!==e);p=!0);}catch(s){f=!0,m=s}finally{try{if(!p&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(f)throw m}}return y}}function B(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Re(n,e){if(n){if(typeof n=="string")return B(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(n,e)}}function Le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(n,e){return Te(n)||je(n,e)||Re(n,e)||Le()}var $=function(e){var t=i.useRef(void 0);return i.useEffect(function(){t.current=e}),t.current},_e=function(e){return i.useEffect(function(){return e},[])},Ae=function(e){var t=e.target,r=t===void 0?"document":t,m=e.type,v=e.listener,c=e.options,y=e.when,p=y===void 0?!0:y,f=i.useRef(null),s=i.useRef(null),w=$(v),P=$(c),a=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ye.isNotEmpty(E.target)&&(d(),(E.when||p)&&(f.current=g.getTargetElement(E.target))),!s.current&&f.current&&(s.current=function(b){return v&&v(b)},f.current.addEventListener(m,s.current,c))},d=function(){s.current&&(f.current.removeEventListener(m,s.current,c),s.current=null)};return i.useEffect(function(){p?f.current=g.getTargetElement(r):(d(),f.current=null)},[r,p]),i.useEffect(function(){s.current&&(""+w!=""+v||P!==c)&&(d(),p&&a())},[v,c,p]),_e(function(){d()}),[a,d]},De=function(e,t,r){var m=function(s){(s.key==="Esc"||s.key==="Escape")&&(s.stopImmediatePropagation(),r(s))},v=Ae({type:"keydown",listener:m}),c=z(v,2),y=c[0],p=c[1];return i.useEffect(function(){if(t&&e.current)return y(),function(){p()}}),[e,r]},Ue={root:function(e){var t=e.props,r=e.context;return fe("p-overlaypanel p-component",t.className,{"p-input-filled":r&&r.inputStyle==="filled"||k.inputStyle==="filled","p-ripple-disabled":r&&r.ripple===!1||k.ripple===!1})},closeIcon:"p-overlaypanel-close-icon",closeButton:"p-overlaypanel-close p-link",content:"p-overlaypanel-content",transition:"p-overlaypanel"},Ne=`
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
`,I=be.extend({defaultProps:{__TYPE:"OverlayPanel",id:null,dismissable:!0,showCloseIcon:!1,closeIcon:null,style:null,className:null,appendTo:null,breakpoints:null,ariaCloseLabel:null,transitionOptions:null,onShow:null,onHide:null,children:void 0,closeOnEscape:!0},css:{classes:Ue,styles:Ne}});function K(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(m){return Object.getOwnPropertyDescriptor(n,m).enumerable})),t.push.apply(t,r)}return t}function ze(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?K(Object(t),!0).forEach(function(r){ke(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var V=i.forwardRef(function(n,e){var t=i.useContext(ue),r=I.getProps(n,t),m=i.useState(!1),v=z(m,2),c=v[0],y=v[1],p=I.setMetaData({props:r,state:{visible:c}}),f=p.ptm,s=p.cx;p.sx;var w=p.isUnstyled;he(I.css.styles,w,{name:"overlaypanel"});var P=i.useRef(""),a=i.useRef(null),d=i.useRef(null),O=i.useRef(!1),E=i.useRef(null),b=i.useRef(null),q=Ee({target:d,overlay:a,listener:function(o,l){var h=l.type,S=l.valid;if(S)switch(h){case"outside":r.dismissable&&!O.current&&x();break;case"resize":case"scroll":case"orientationchange":j();break}O.current=!1},when:c}),H=z(q,2),G=H[0],J=H[1];De(b,r.closeOnEscape,function(){x()});var X=function(o){return a&&a.current&&!(a.current.isSameNode(o)||a.current.contains(o))},F=function(o,l){return d.current!=null&&d.current!==(l||o.currentTarget||o.target)},Q=function(o){x(),o.preventDefault()},ee=function(o){O.current=!0,R.emit("overlay-click",{originalEvent:o,target:d.current})},M=function(){O.current=!0},ne=function(o,l){c?(x(),F(o,l)&&(d.current=l||o.currentTarget||o.target,setTimeout(function(){A(o,d.current)},200))):A(o,l)},A=function(o,l){d.current=l||o.currentTarget||o.target,c?j():(y(!0),b.current=function(h){!X(h.target)&&(O.current=!0)},R.on("overlay-click",b.current))},x=function(){y(!1),R.off("overlay-click",b.current),b.current=null},te=function(){a.current.setAttribute(P.current,""),N.set("overlay",a.current,t&&t.autoZIndex||k.autoZIndex,t&&t.zIndex.overlay||k.zIndex.overlay),g.addStyles(a.current,{position:"absolute",top:"0",left:"0"}),j()},re=function(){G(),r.onShow&&r.onShow()},oe=function(){J()},ie=function(){N.clear(a.current),r.onHide&&r.onHide()},j=function(){if(d.current&&a.current){g.absolutePosition(a.current,d.current);var o=g.getOffset(a.current),l=g.getOffset(d.current),h=0;o.left<l.left&&(h=l.left-o.left),a.current.style.setProperty("--overlayArrowLeft","".concat(h,"px")),o.top<l.top?(a.current.setAttribute("data-p-overlaypanel-flipped","true"),w&&g.addClass(a.current,"p-overlaypanel-flipped")):(a.current.setAttribute("data-p-overlaypanel-flipped","false"),w&&g.removeClass(a.current,"p-overlaypanel-flipped"))}},ae=function(){if(!E.current){E.current=g.createInlineStyle(t&&t.nonce||k.nonce);var o="";for(var l in r.breakpoints)o+=`
                    @media screen and (max-width: `.concat(l,`) {
                        .p-overlaypanel[`).concat(P.current,`] {
                            width: `).concat(r.breakpoints[l],`;
                        }
                    }
                `);E.current.innerHTML=o}};Oe(function(){P.current=de(),r.breakpoints&&ae()}),we(function(){E.current=g.removeInlineStyle(E.current),b.current&&(R.off("overlay-click",b.current),b.current=null),N.clear(a.current)}),i.useImperativeHandle(e,function(){return{props:r,toggle:ne,show:A,hide:x,align:j,getElement:function(){return a.current}}});var le=function(){var o=C({className:s("closeIcon"),"aria-hidden":!0},f("closeIcon")),l=r.closeIcon||i.createElement(Pe,o),h=ve.getJSXIcon(l,ze({},o),{props:r}),S=r.ariaCloseLabel||me("close"),D=C({type:"button",className:s("closeButton"),onClick:function(pe){return Q(pe)},"aria-label":S},f("closeButton"));return r.showCloseIcon?i.createElement("button",D,h,i.createElement(Se,null)):null},se=function(){var o=le(),l=C({id:r.id,className:s("root",{context:t}),style:r.style,onClick:function(U){return ee(U)}},I.getOtherProps(r),f("root")),h=C({className:s("content"),onClick:function(U){return M()},onMouseDown:M},I.getOtherProps(r),f("content")),S=C({classNames:s("transition"),in:c,timeout:{enter:120,exit:100},options:r.transitionOptions,unmountOnExit:!0,onEnter:te,onEntered:re,onExit:oe,onExited:ie},f("transition"));return i.createElement(ge,_({nodeRef:a},S),i.createElement("div",_({ref:a},l),i.createElement("div",h,r.children),o))},ce=se();return i.createElement(xe,{element:ce,appendTo:r.appendTo})});V.displayName="OverlayPanel";const Fe={title:"Overlay/OverlayPanel",component:V,parameters:{layout:"centered"},argTypes:{appendTo:{control:"select",description:"DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.",options:["null","HTMLElement","self"]},ariaCloseLabel:{control:"text",description:"Aria label of the close icon.",options:null},breakpoints:{control:"object",description:"Object literal to define widths per screen size.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},closeIcon:{control:"select",description:"Icon to display as close icon.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},closeOnEscape:{control:"boolean",description:"Specifies if pressing escape key should hide the preview.",options:null},dismissable:{control:"boolean",description:"Enables to hide the overlay when outside is clicked.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},showCloseIcon:{control:"boolean",description:"When enabled, displays a close icon at top right corner.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},L={args:{unstyled:!1}};var Z,W,Y;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(Y=(W=L.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const Qe=["Default"];export{L as Default,Qe as __namedExportsOrder,Fe as default};
