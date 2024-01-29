import{r as i}from"./index-76fb7be0.js";import{a as G,I as Q,l as P,c as A,D as ee,Z as w,P as j}from"./api.esm-4644ee78.js";import{C as te,u as ne}from"./componentbase.esm-1c796d7e.js";import{C as re}from"./csstransition.esm-f87c8556.js";import{d as oe,h as T,c as ie}from"./hooks.esm-d069ba29.js";import{C as le}from"./index.esm-83dc302e.js";import{R as se}from"./ripple.esm-1f3221bd.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-60e86362.js";function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}function ae(e,t){if(d(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(d(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function pe(e){var t=ae(e,"string");return d(t)==="symbol"?t:String(t)}function ce(e,t,n){return t=pe(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e){if(Array.isArray(e))return e}function fe(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,y,p,l=[],o=!0,u=!1;try{if(y=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=y.call(n)).done)&&(l.push(r.value),l.length!==t);o=!0);}catch(f){u=!0,a=f}finally{try{if(!o&&n.return!=null&&(p=n.return(),Object(p)!==p))return}finally{if(u)throw a}}return l}}function _(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function me(e,t){if(e){if(typeof e=="string")return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(e,t){return ue(e)||fe(e,t)||me(e,t)||de()}var ye={root:function(t){var n=t.props;return A("p-scrolltop p-link p-component",{"p-scrolltop-sticky":n.target!=="window"})},icon:"p-scrolltop-icon",transition:"p-scrolltop"},he=`
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
`,b=te.extend({defaultProps:{__TYPE:"ScrollTop",target:"window",threshold:400,icon:null,behavior:"smooth",className:null,style:null,transitionOptions:null,onShow:null,onHide:null,children:void 0},css:{classes:ye,styles:he}});function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?I(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var N=i.memo(i.forwardRef(function(e,t){var n=i.useState(!1),r=S(n,2),a=r[0],y=r[1],p=oe(),l=i.useContext(G),o=b.getProps(e,l),u=b.setMetaData({props:o,state:{visible:a}}),f=u.ptm,g=u.cx,U=u.isUnstyled;ne(b.css.styles,U,{name:"scrolltop"});var m=i.useRef(null),h=i.useRef(null),k=o.target==="parent",L=T({target:function(){return h.current&&h.current.parentElement},type:"scroll",listener:function(c){O(c.currentTarget.scrollTop)}}),H=S(L,1),M=H[0],z=T({target:"window",type:"scroll",listener:function(c){c&&O(ee.getWindowScrollTop())}}),Z=S(z,1),$=Z[0],B=function(){var c=o.target==="window"?window:h.current.parentElement;c.scroll({top:0,behavior:o.behavior})},O=function(c){y(c>o.threshold)},V=function(){w.set("overlay",m.current,l&&l.autoZIndex||j.autoZIndex,l&&l.zIndex.overlay||j.zIndex.overlay)},W=function(){o.onShow&&o.onShow()},J=function(){w.clear(m.current),o.onHide&&o.onHide()};i.useImperativeHandle(t,function(){return{props:o,getElement:function(){return elementRef.current}}}),i.useEffect(function(){o.target==="window"?$():o.target==="parent"&&M()},[]),ie(function(){w.clear(m.current)});var x=p({className:g("icon")},f("icon")),K=o.icon||i.createElement(le,x),X=Q.getJSXIcon(K,be({},x),{props:o}),F=P("aria")?P("aria").scrollTop:void 0,Y=p({ref:m,type:"button",className:A(o.className,g("root")),style:o.style,onClick:B,"aria-label":F},b.getOtherProps(o),f("root")),q=p({classNames:g("transition"),in:a,timeout:{enter:150,exit:150},options:o.transitionOptions,unmountOnExit:!0,onEnter:V,onEntered:W,onExited:J},f("transition"));return i.createElement(i.Fragment,null,i.createElement(re,E({nodeRef:m},q),i.createElement("button",Y,X,i.createElement(se,null))),k&&i.createElement("span",{ref:h,className:"p-scrolltop-helper"}))}));N.displayName="ScrollTop";const Ie={title:"Misc/ScrollTop",component:N,parameters:{layout:"centered"},argTypes:{behavior:{control:"select",description:'Defines the scrolling behavior, "smooth" adds an animation and "auto" scrolls with a jump.',options:["auto","smooth"]},children:{control:"text",description:"Used to get the child elements of the component.",options:null},className:{control:"text",description:"Style class of the component.",options:null},icon:{control:"select",description:"Name of the icon or JSX.Element for icon.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},style:{control:"object",description:"Inline style of the component.",options:null},target:{control:"select",description:'Target of the ScrollTop, valid values are "window" and "parent".',options:["window","parent"]},threshold:{control:"number",description:"Defines the threshold value of the vertical scroll position of the target to toggle the visibility.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},v={args:{unstyled:!1}};var R,C,D;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(D=(C=v.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const Re=["Default"];export{v as Default,Re as __namedExportsOrder,Ie as default};
