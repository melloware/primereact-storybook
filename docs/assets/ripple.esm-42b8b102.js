import{r as s}from"./index-76fb7be0.js";import{O as P,P as _,m as C,c as T,a as H,D as o}from"./api.esm-e57be548.js";import{u as M,a as N,b as A,c as B}from"./hooks.esm-2e882e60.js";import{C as I}from"./componentbase.esm-f35515f0.js";function m(){return m=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},m.apply(this,arguments)}function p(r){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(r)}function L(r,t){if(p(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var n=e.call(r,t||"default");if(p(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function U(r){var t=L(r,"string");return p(t)==="symbol"?t:String(t)}function W(r,t,e){return t=U(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var Y=`
@layer primereact {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }
    
    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
    }
    
    .p-ink-active {
        animation: ripple 0.4s linear;
    }
    
    .p-ripple-disabled .p-ink {
        display: none;
    }
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

`,K={root:"p-ink"},c=I.extend({defaultProps:{__TYPE:"Ripple",children:void 0},css:{styles:Y,classes:K},getProps:function(t){return P.getMergedProps(t,c.defaultProps)},getOtherProps:function(t){return P.getDiffProps(t,c.defaultProps)}});function O(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),e.push.apply(e,n)}return e}function X(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?O(Object(e),!0).forEach(function(n){W(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):O(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}var $=s.memo(s.forwardRef(function(r,t){var e=s.useRef(null),n=s.useRef(null),u=s.useContext(_),g=c.getProps(r,u),h={props:g};M(c.css.styles,{name:"ripple"});var d=c.setMetaData(X({},h)),E=d.ptm,w=d.cx,v=function(){return e.current&&e.current.parentElement},y=function(){n.current&&n.current.addEventListener("pointerdown",b)},j=function(){n.current&&n.current.removeEventListener("pointerdown",b)},b=function(i){var f=o.getOffset(n.current),S=i.pageX-f.left+document.body.scrollTop-o.getWidth(e.current)/2,k=i.pageY-f.top+document.body.scrollLeft-o.getHeight(e.current)/2;R(S,k)},R=function(i,f){!e.current||getComputedStyle(e.current,null).display==="none"||(o.removeClass(e.current,"p-ink-active"),l(),e.current.style.top=f+"px",e.current.style.left=i+"px",o.addClass(e.current,"p-ink-active"))},x=function(i){o.removeClass(i.currentTarget,"p-ink-active")},l=function(){if(e.current&&!o.getHeight(e.current)&&!o.getWidth(e.current)){var i=Math.max(o.getOuterWidth(n.current),o.getOuterHeight(n.current));e.current.style.height=i+"px",e.current.style.width=i+"px"}};s.useImperativeHandle(t,function(){return{props:g,getInk:function(){return e.current},getTarget:function(){return n.current}}}),N(function(){e.current&&(n.current=v(),l(),y())}),A(function(){e.current&&!n.current&&(n.current=v(),l(),y())}),B(function(){e.current&&(n.current=null,j())});var D=C({className:T(w("root"))},E("root"));return u&&u.ripple||H.ripple?s.createElement("span",m({role:"presentation",ref:e},D,{onAnimationEnd:x})):null}));$.displayName="Ripple";export{$ as R};
