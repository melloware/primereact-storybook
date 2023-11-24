import{r as l}from"./index-76fb7be0.js";import{P as Oe,O as he,c as j,b as U,m as d,U as ze,D as H,Z as de,I as Y,l as We}from"./api.esm-2e2d159c.js";import{C as Me,u as $e}from"./componentbase.esm-b0caea1e.js";import{C as Ge}from"./csstransition.esm-653f5084.js";import{k as Ue,f as Ke,d as Ce,u as be,b as Fe,e as Le}from"./hooks.esm-c93f10ee.js";import{T as Xe}from"./index.esm-1e412bae.js";import{P as Ze}from"./portal.esm-c66f0cf3.js";import{R as L}from"./ripple.esm-cba91116.js";import{C as Ne}from"./index.esm-41905940.js";import{C as Ee}from"./index.esm-b3ea3917.js";import{C as Je}from"./index.esm-d9d340e5.js";import{C as Ye}from"./index.esm-de2d3243.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-439d6f79.js";function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},oe.apply(this,arguments)}function q(e){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},q(e)}function qe(e,i){if(q(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var t=n.call(e,i||"default");if(q(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function Qe(e){var i=qe(e,"string");return q(i)==="symbol"?i:String(i)}function ge(e,i,n){return i=Qe(i),i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function et(e){if(Array.isArray(e))return e}function tt(e,i){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t,c,x,S,b=[],h=!0,N=!1;try{if(x=(n=n.call(e)).next,i===0){if(Object(n)!==n)return;h=!1}else for(;!(h=(t=x.call(n)).done)&&(b.push(t.value),b.length!==i);h=!0);}catch(v){N=!0,c=v}finally{try{if(!h&&n.return!=null&&(S=n.return(),Object(S)!==S))return}finally{if(N)throw c}}return b}}function fe(e,i){(i==null||i>e.length)&&(i=e.length);for(var n=0,t=new Array(i);n<i;n++)t[n]=e[n];return t}function Te(e,i){if(e){if(typeof e=="string")return fe(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fe(e,i)}}function nt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(e,i){return et(e)||tt(e,i)||Te(e,i)||nt()}var it={header:"p-galleria-header",footer:"p-galleria-footer",closeIcon:"p-galleria-close-icon",closeButton:"p-galleria-close p-link",root:function(i){var n=i.props,t=i.context,c=i.thumbnailsPosClassName,x=i.indicatorPosClassName;return j("p-galleria p-component",{"p-galleria-fullscreen":n.fullScreen,"p-galleria-indicator-onitem":n.showIndicatorsOnItem,"p-galleria-item-nav-onhover":n.showItemNavigatorsOnHover&&!n.fullScreen,"p-input-filled":t&&t.inputStyle==="filled"||U.inputStyle==="filled","p-ripple-disabled":t&&t.ripple===!1||U.ripple===!1},c,x)},content:"p-galleria-content",mask:function(i){var n=i.visibleState;return j("p-galleria-mask",{"p-galleria-visible":n})},thumbnailItem:function(i){var n=i.subProps;return j("p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":n.current,"p-galleria-thumbnail-item-active":n.active,"p-galleria-thumbnail-item-start":n.start,"p-galleria-thumbnail-item-end":n.end})},thumbnailItemContent:"p-galleria-thumbnail-item-content",previousThumbnailIcon:"p-galleria-thumbnail-prev-icon",previousThumbnailButton:function(i){var n=i.isDisabled;return j("p-galleria-thumbnail-prev p-link",{"p-disabled":n})},nextThumbnailIcon:"p-galleria-thumbnail-next-icon",nextThumbnailButton:function(i){var n=i.isDisabled;return j("p-galleria-thumbnail-next p-link",{"p-disabled":n})},thumbnailContainer:"p-galleria-thumbnail-container",thumbnailItemsContainer:"p-galleria-thumbnail-items-container",thumbnailItems:"p-galleria-thumbnail-items",thumbnailWrapper:"p-galleria-thumbnail-wrapper",previousItemIcon:"p-galleria-item-prev-icon",previousItemButton:function(i){var n=i.isDisabled;return j("p-galleria-item-prev p-galleria-item-nav p-link",{"p-disabled":n})},nextItemIcon:"p-galleria-item-next-icon",nextItemButton:function(i){var n=i.isDisabled;return j("p-galleria-item-next p-galleria-item-nav p-link",{"p-disabled":n})},caption:"p-galleria-caption",indicator:function(i){var n=i.isActive;return j("p-galleria-indicator",{"p-highlight":n})},indicators:"p-galleria-indicators p-reset",itemWrapper:"p-galleria-item-wrapper",itemContainer:"p-galleria-item-container",item:"p-galleria-item",transition:"p-galleria"},at=`
@layer primereact {
    .p-galleria-content {
        display: flex;
        flex-direction: column;
    }
    
    .p-galleria-item-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    
    .p-galleria-item-container {
        position: relative;
        display: flex;
        height: 100%;
    }
    
    .p-galleria-item-nav {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    
    .p-galleria-item-prev {
        left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    
    .p-galleria-item-next {
        right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    
    .p-galleria-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    
    .p-galleria-item-nav-onhover .p-galleria-item-nav {
        pointer-events: none;
        opacity: 0;
        transition: opacity .2s ease-in-out;
    }
    
    .p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {
        pointer-events: all;
        opacity: 1;
    }
    
    .p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {
        pointer-events: none;
    }
    
    .p-galleria-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    
    /* Thumbnails */
    .p-galleria-thumbnail-wrapper {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
    }
    
    .p-galleria-thumbnail-prev,
    .p-galleria-thumbnail-next {
        align-self: center;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-galleria-thumbnail-prev span,
    .p-galleria-thumbnail-next span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .p-galleria-thumbnail-container {
        display: flex;
        flex-direction: row;
    }
    
    .p-galleria-thumbnail-items-container {
        overflow: hidden;
        width: 100%;
    }
    
    .p-galleria-thumbnail-items {
        display: flex;
    }
    
    .p-galleria-thumbnail-item {
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: .5;
    }
    
    .p-galleria-thumbnail-item:hover {
        opacity: 1;
        transition: opacity .3s;
    }
    
    .p-galleria-thumbnail-item-current {
        opacity: 1;
    }
    
    /* Positions */
    /* Thumbnails */
    .p-galleria-thumbnails-left .p-galleria-content,
    .p-galleria-thumbnails-right .p-galleria-content {
        flex-direction: row;
    }
    
    .p-galleria-thumbnails-left .p-galleria-item-wrapper,
    .p-galleria-thumbnails-right .p-galleria-item-wrapper {
        flex-direction: row;
    }
    
    .p-galleria-thumbnails-left .p-galleria-item-wrapper,
    .p-galleria-thumbnails-top .p-galleria-item-wrapper {
        order: 2;
    }
    
    .p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,
    .p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {
        order: 1;
    }
    
    .p-galleria-thumbnails-left .p-galleria-thumbnail-container,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-container {
        flex-direction: column;
        flex-grow: 1;
    }
    
    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {
        flex-direction: column;
        height: 100%;
    }
    
    /* Indicators */
    .p-galleria-indicators {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-galleria-indicator > button {
        display: inline-flex;
        align-items: center;
    }
    
    .p-galleria-indicators-left .p-galleria-item-wrapper,
    .p-galleria-indicators-right .p-galleria-item-wrapper {
        flex-direction: row;
        align-items: center;
    }
    
    .p-galleria-indicators-left .p-galleria-item-container,
    .p-galleria-indicators-top .p-galleria-item-container {
        order: 2;
    }
    
    .p-galleria-indicators-left .p-galleria-indicators,
    .p-galleria-indicators-top .p-galleria-indicators {
        order: 1;
    }
    
    .p-galleria-indicators-left .p-galleria-indicators,
    .p-galleria-indicators-right .p-galleria-indicators {
        flex-direction: column;
    }
    
    .p-galleria-indicator-onitem .p-galleria-indicators {
        position: absolute;
        display: flex;
        z-index: 1;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {
        top: 0;
        left: 0;
        width: 100%;
        align-items: flex-start;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {
        right: 0;
        top: 0;
        height: 100%;
        align-items: flex-end;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: flex-end;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {
        left: 0;
        top: 0;
        height: 100%;
        align-items: flex-start;
    }
    
    /* FullScreen */
    .p-galleria-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }
    
    .p-galleria-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-galleria-close {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    
    .p-galleria-mask .p-galleria-item-nav {
        position: fixed;
        top: 50%;
        margin-top: -.5rem;
    }
    
    /* Animation */
    .p-galleria-enter {
        opacity: 0;
        transform: scale(0.7);
    }
    
    .p-galleria-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-galleria-enter-done {
        transform: none;
    }
    
    .p-galleria-exit {
        opacity: 1;
    }
    
    .p-galleria-exit-active {
        opacity: 0;
        transform: scale(0.7);
        transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    }
    
    .p-galleria-enter-active .p-galleria-item-nav {
        opacity: 0;
    }
    
    /* Keyboard Support */
    .p-items-hidden .p-galleria-thumbnail-item {
        visibility: hidden;
    }
    
    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
        visibility: visible;
    }
}
`,rt={thumbnailItemsContainer:function(i){var n=i.height;return{height:n}}},ae=Me.extend({defaultProps:{__TYPE:"Galleria",id:null,value:null,activeIndex:0,fullScreen:!1,item:null,thumbnail:null,indicator:null,caption:null,className:null,closeIcon:null,style:null,header:null,footer:null,numVisible:3,responsiveOptions:null,showItemNavigators:!1,showThumbnailNavigators:!0,showItemNavigatorsOnHover:!1,changeItemOnIndicatorHover:!1,circular:!1,autoPlay:!1,transitionInterval:4e3,showThumbnails:!0,itemNextIcon:null,itemPrevIcon:null,nextThumbnailIcon:null,prevThumbnailIcon:null,thumbnailsPosition:"bottom",verticalThumbnailViewPortHeight:"300px",showIndicators:!1,showIndicatorsOnItem:!1,indicatorsPosition:"bottom",baseZIndex:0,transitionOptions:null,onItemChange:null,children:void 0},css:{classes:it,styles:at,inlineStyles:rt}});function Ie(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,t)}return n}function ve(e){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?Ie(Object(n),!0).forEach(function(t){ge(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var je=l.memo(l.forwardRef(function(e,i){var n=e.ptm,t=e.cx,c=function(o,f){return n(o,ve({hostName:e.hostName},f))},x=function(){var o=e.activeItemIndex+1;e.onActiveItemChange({index:e.circular&&e.value.length-1===e.activeItemIndex?0:o})},S=function(){var o=e.activeItemIndex!==0?e.activeItemIndex-1:0;e.onActiveItemChange({index:e.circular&&e.activeItemIndex===0?e.value.length-1:o})},b=function(){e.slideShowActive&&e.stopSlideShow&&e.stopSlideShow()},h=function(o){b(),S(),o&&o.cancelable&&o.preventDefault()},N=function(o){b(),x(),o&&o.cancelable&&o.preventDefault()},v=function(o){b(),e.onActiveItemChange({index:o})},y=function(o){e.changeItemOnIndicatorHover&&(b(),e.onActiveItemChange({index:o}))},k=function(o,f){o.which===13&&(b(),e.onActiveItemChange({index:f}))};Ce(function(){e.autoPlay&&e.startSlideShow()});var D=function(){if(e.showItemNavigators){var o=!e.circular&&e.activeItemIndex===0,f=d({className:t("previousItemIcon")},c("previousItemIcon")),g=e.itemPrevIcon||l.createElement(Ne,f),C=Y.getJSXIcon(g,ve({},f),{props:e}),R=d({type:"button",className:t("previousItemButton",{isDisabled:o}),onClick:h,disabled:o,"data-p-disabled":o},c("previousItemButton"));return l.createElement("button",R,C,l.createElement(L,null))}return null},I=function(){if(e.showItemNavigators){var o=!e.circular&&e.activeItemIndex===e.value.length-1,f=d({className:t("nextItemIcon")},c("nextItemIcon")),g=e.itemNextIcon||l.createElement(Ee,f),C=Y.getJSXIcon(g,ve({},f),{props:e}),R=d({type:"button",className:t("nextItemButton",{isDisabled:o}),onClick:N,disabled:o,"data-p-disabled":o},c("nextItemButton"));return l.createElement("button",R,C,l.createElement(L,null))}return null},K=function(){var o=d({className:t("caption")},c("caption"));if(e.caption){var f=e.caption(e.value[e.activeItemIndex]);return l.createElement("div",o,f)}return null},F=function(o){var f="p-galleria-indicator-"+o,g=e.activeItemIndex===o,C=e.indicator&&e.indicator(o),R=d({className:t("indicator",{isActive:g}),key:f,tabIndex:0,onClick:function(){return v(o)},onMouseEnter:function(){return y(o)},onKeyDown:function(Z){return k(Z,o)},"data-p-highlight":g},c("indicator"));return C||(C=l.createElement("button",{type:"button",tabIndex:-1,className:"p-link"},l.createElement(L,null))),l.createElement("li",R,C)},E=function(){if(e.showIndicators){for(var o=[],f=d({className:j(e.indicatorsContentClassName,t("indicators"))},c("indicators")),g=0;g<e.value.length;g++)o.push(F(g));return l.createElement("ul",f,o)}return null},z=e.itemTemplate&&e.itemTemplate(e.value[e.activeItemIndex]),P=D(),_=I(),O=K(),A=E(),V=d({ref:i,className:t("itemWrapper")},c("itemWrapper")),X=d({className:t("itemContainer")},c("itemContainer")),T=d({className:t("item")},c("item"));return l.createElement("div",V,l.createElement("div",X,P,l.createElement("div",T,z),_,O),A)}));je.displayName="GalleriaItem";function lt(e){if(Array.isArray(e))return fe(e)}function ot(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ct(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(e){return lt(e)||ot(e)||Te(e)||ct()}function we(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,t)}return n}function le(e){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?we(Object(n),!0).forEach(function(t){ge(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ke=l.memo(function(e){var i=e.ptm,n=e.cx,t=function(y,k){return i(y,le({hostName:e.hostName},k))},c=function(y){e.onItemClick({originalEvent:y,index:e.index})},x=function(y){y.which===13&&e.onItemClick({originalEvent:y,index:e.index})},S=e.active?0:null,b=e.template&&e.template(e.item),h=d({className:j(e.className,n("thumbnailItem",{subProps:e})),"data-p-galleria-thumbnail-item-current":e.current,"data-p-galleria-thumbnail-item-active":e.active,"data-p-galleria-thumbnail-item-start":e.start,"data-p-galleria-thumbnail-item-end":e.end},t("thumbnailItem")),N=d({className:n("thumbnailItemContent"),tabIndex:S,onClick:c,onKeyDown:x},t("thumbnailItemContent"));return l.createElement("div",h,l.createElement("div",N,b))}),Ae=l.memo(l.forwardRef(function(e,i){var n=l.useState(e.numVisible),t=G(n,2),c=t[0],x=t[1],S=l.useState(0),b=G(S,2),h=b[0],N=b[1],v=l.useRef(null),y=l.useRef(null),k=l.useRef(""),D=l.useRef(null),I=l.useRef(null),K=be(c),F=be(e.activeItemIndex),E=l.useContext(Oe),z=e.ptm,P=e.cx,_=e.sx,O=function(r,a){return z(r,le({hostName:e.hostName},a))},A=Fe({listener:function(){te()},when:e.responsiveOptions}),V=G(A,1),X=V[0],T=function(r){var a=h+r;r<0&&-1*a+c>e.value.length-1?a=c-e.value.length:r>0&&a>0&&(a=0),e.circular&&(r<0&&e.value.length-1===e.activeItemIndex?a=0:r>0&&e.activeItemIndex===0&&(a=c-e.value.length)),v.current&&(H.removeClass(v.current,"p-items-hidden"),v.current.style.transform=e.isVertical?"translate3d(0, ".concat(a*(100/c),"%, 0)"):"translate3d(".concat(a*(100/c),"%, 0, 0)"),v.current.style.transition="transform 500ms ease 0s"),N(a)},p=function(){e.slideShowActive&&e.stopSlideShow&&e.stopSlideShow()},o=function(){var r=Math.floor(c/2);return c%2?r:r-1},f=function(r){p();var a=e.activeItemIndex!==0?e.activeItemIndex-1:0,u=a+h;c-u-1>o()&&(-1*h!==0||e.circular)&&T(1),e.onActiveItemChange({index:e.circular&&e.activeItemIndex===0?e.value.length-1:a}),r.cancelable&&r.preventDefault()},g=function(r){p();var a=e.activeItemIndex+1;a+h>o()&&(-1*h<ee()-1||e.circular)&&T(-1),e.onActiveItemChange({index:e.circular&&e.value.length-1===e.activeItemIndex?0:a}),r.cancelable&&r.preventDefault()},C=function(r){p();var a=r.index;if(a!==e.activeItemIndex){var u=a+h,m=0;a<e.activeItemIndex?(m=c-u-1-o(),m>0&&-1*h!==0&&T(m)):(m=o()-u,m<0&&-1*h<ee()-1&&T(m)),e.onActiveItemChange({index:a})}},R=function(r){v.current&&r.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","false"),!e.isUnstyled()&&H.addClass(v.current,"p-items-hidden"),v.current.style.transition="")},W=function(r){var a=r.changedTouches[0];y.current={x:a.pageX,y:a.pageY}},Z=function(r){r.cancelable&&r.preventDefault()},ce=function(r){var a=r.changedTouches[0];e.isVertical?Q(r,a.pageY-y.current.y):Q(r,a.pageX-y.current.x)},Q=function(r,a){a<0?g(r):f(r)},ee=function(){return e.value.length>c?e.value.length-c+1:0},se=function(){D.current||(D.current=H.createInlineStyle(E&&E.nonce||U.nonce));var r=`
            [data-pc-section="thumbnailitems"][`.concat(k.current,`] {
                [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/c,`%
                }
            } 
        `);if(e.responsiveOptions){var a=he.localeComparator(E&&E.locale||U.locale);I.current=st(e.responsiveOptions),I.current.sort(function(w,B){var $=w.breakpoint,J=B.breakpoint;return he.sort($,J,-1,a,E&&E.nullSortOrder||U.nullSortOrder)});for(var u=0;u<I.current.length;u++){var m=I.current[u];r+=`
                    @media screen and (max-width: `.concat(m.breakpoint,`) {
                        [data-pc-section="thumbnailitems"][`).concat(k.current,`] {
                            [data-pc-section="thumbnailitem"] {
                                flex: 1 0 `).concat(100/m.numVisible,`%
                            }
                        } 
                    }
                `)}}D.current.innerHTML=r},te=function(){if(v.current&&I.current){for(var r=window.innerWidth,a={numVisible:e.numVisible},u=0;u<I.current.length;u++){var m=I.current[u];parseInt(m.breakpoint,10)>=r&&(a=m)}c!==a.numVisible&&x(a.numVisible)}};Ce(function(){v.current&&(k.current=ze(),v.current.setAttribute(k.current,"")),se(),te(),X()}),Le(function(){var s=h;(K!==c||F!==e.activeItemIndex)&&(e.activeItemIndex<=o()?s=0:e.value.length-c+o()<e.activeItemIndex?s=c-e.value.length:e.value.length-c<e.activeItemIndex&&c%2===0?s=e.activeItemIndex*-1+o()+1:s=e.activeItemIndex*-1+o(),s!==h&&N(s),v.current.style.transform=e.isVertical?"translate3d(0, ".concat(s*(100/c),"%, 0)"):"translate3d(".concat(s*(100/c),"%, 0, 0)"),F!==e.activeItemIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!e.isUnstyled()&&H.removeClass(v.current,"p-items-hidden"),v.current.style.transition="transform 500ms ease 0s"))});var ne=function(){return e.value.map(function(r,a){var u=h*-1,m=u+c-1,w=u<=a&&m>=a,B=u===a,$=m===a,J=e.activeItemIndex===a;return l.createElement(ke,{key:a,index:a,template:e.itemTemplate,item:r,active:w,start:B,end:$,onItemClick:C,current:J,ptm:z,cx:P,sx:_})})},M=function(){if(e.showThumbnailNavigators){var r=!e.circular&&e.activeItemIndex===0||e.value.length<=c,a=d({className:P("previousThumbnailIcon")},O("previousThumbnailIcon")),u=e.isVertical?e.prevThumbnailIcon||l.createElement(Ye,a):e.prevThumbnailIcon||l.createElement(Ne,a),m=Y.getJSXIcon(u,le({},a),{props:e}),w=d({className:P("previousThumbnailButton",{isDisabled:r}),onClick:f,disabled:r,"data-p-disabled":r},O("previousThumbnailButton"));return l.createElement("button",w,m,l.createElement(L,null))}return null},ie=function(){if(e.showThumbnailNavigators){var r=!e.circular&&e.activeItemIndex===e.value.length-1||e.value.length<=c,a=d({className:P("nextThumbnailIcon")},O("nextThumbnailIcon")),u=e.isVertical?e.nextThumbnailIcon||l.createElement(Je,a):e.nextThumbnailIcon||l.createElement(Ee,a),m=Y.getJSXIcon(u,le({},a),{props:e}),w=d({className:P("nextThumbnailButton",{isDisabled:r}),onClick:g,disabled:r,"data-p-disabled":r},O("nextThumbnailButton"));return l.createElement("button",w,m,l.createElement(L,null))}return null},pe=function(){var r=ne(),a=e.isVertical?e.contentHeight:"",u=M(),m=ie(),w=d({className:P("thumbnailContainer")},O("thumbnailContainer")),B=d({className:P("thumbnailItemsContainer"),style:_("thumbnailItemsContainer",{height:a})},O("thumbnailItemsContainer")),$=d({ref:v,className:P("thumbnailItems"),onTransitionEnd:R,onTouchStart:W,onTouchMove:Z,onTouchEnd:ce},O("thumbnailItems"));return l.createElement("div",w,u,l.createElement("div",B,l.createElement("div",$,r)),m)},ue=pe(),me=d({className:P("thumbnailWrapper")},O("thumbnailWrapper"));return l.createElement("div",me,ue)}));ke.displayName="GalleriaThumbnailItem";Ae.displayName="GalleriaThumbnails";function ye(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,t)}return n}function pt(e){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?ye(Object(n),!0).forEach(function(t){ge(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Re=l.memo(l.forwardRef(function(e,i){var n=l.useContext(Oe),t=ae.getProps(e,n),c=l.useState(!1),x=G(c,2),S=x[0],b=x[1],h=l.useState(t.numVisible),N=G(h,2),v=N[0],y=N[1],k=l.useState(!1),D=G(k,2),I=D[0],K=D[1],F=l.useState(t.activeIndex),E=G(F,2),z=E[0],P=E[1],_=l.useRef(null),O=l.useRef(null),A=l.useRef(null),V=t.onItemChange?t.activeIndex:z,X=t.thumbnailsPosition==="left"||t.thumbnailsPosition==="right",T=ae.setMetaData({props:t,state:{visible:S,numVisible:v,slideShowActive:I,activeIndex:z}}),p=T.ptm,o=T.cx,f=T.sx,g=T.isUnstyled;$e(ae.css.styles,g,{name:"galleria"}),Ue(function(){C({index:t.circular&&t.value.length-1===V?0:V+1})},t.transitionInterval,I);var C=function(a){if(a.index>=t.value.length){M();return}t.onItemChange?t.onItemChange(a):P(a.index)},R=function(){b(!0)},W=function(){b(!1)},Z=function(){H.blockBodyScroll()},ce=function(){de.set("modal",A.current,n&&n.autoZIndex||U.autoZIndex,t.baseZIndex||n&&n.zIndex.modal||U.zIndex.modal),!g()&&H.addMultipleClasses(A.current,"p-component-overlay p-component-overlay-enter")},Q=function(){t.onShow&&t.onShow()},ee=function(){H.unblockBodyScroll(),!g()&&H.addClass(A.current,"p-component-overlay-leave")},se=function(){de.clear(A.current),t.onHide&&t.onHide()},te=function(){return I},ne=function(){K(!0)},M=function(){K(!1)},ie=function(a,u){var m=["top","left","bottom","right"],w=m.find(function(B){return B===u});return w?"".concat(a,"-").concat(w):""};l.useEffect(function(){t.value&&t.value.length<v&&y(t.value.length)},[t.value,v]),l.useEffect(function(){y(t.numVisible)},[t.numVisible]),Ke(function(){I&&M(),de.clear(A.current)}),l.useImperativeHandle(i,function(){return{props:t,show:R,hide:W,isAutoPlayActive:te,startSlideShow:ne,stopSlideShow:M,getElement:function(){return _.current},getPreviewContent:function(){return O.current}}});var pe=function(){var a=d({className:o("header")},p("header"));return t.header?l.createElement("div",a,t.header):null},ue=function(){var a=d({className:o("footer")},p("footer"));return t.footer?l.createElement("div",a,t.footer):null},me=function(){var a=t.showThumbnails&&ie("p-galleria-thumbnails",t.thumbnailsPosition),u=t.showIndicators&&ie("p-galleria-indicators",t.indicatorsPosition),m=d({className:o("closeIcon"),"aria-hidden":!0},p("closeIcon")),w=t.closeIcon||l.createElement(Xe,m),B=Y.getJSXIcon(w,pt({},m),{props:t}),$=d({type:"button",className:o("closeButton"),"aria-label":We("close"),onClick:W},p("closeButton")),J=t.fullScreen&&l.createElement("button",$,B,l.createElement(L,null)),Be=pe(),De=ue(),_e=d({ref:_,id:t.id,className:j(t.className,o("root",{context:n,thumbnailsPosClassName:a,indicatorPosClassName:u})),style:t.style},ae.getOtherProps(t),p("root")),Ve=d({className:o("content")},p("content")),He=l.createElement("div",_e,J,Be,l.createElement("div",Ve,l.createElement(je,{hostName:"Galleria",ref:O,value:t.value,activeItemIndex:V,onActiveItemChange:C,itemTemplate:t.item,circular:t.circular,caption:t.caption,showIndicators:t.showIndicators,itemPrevIcon:t.itemPrevIcon,itemNextIcon:t.itemNextIcon,changeItemOnIndicatorHover:t.changeItemOnIndicatorHover,indicator:t.indicator,showItemNavigators:t.showItemNavigators,autoPlay:t.autoPlay,slideShowActive:I,startSlideShow:ne,stopSlideShow:M,ptm:p,cx:o}),t.showThumbnails&&l.createElement(Ae,{hostName:"Galleria",value:t.value,activeItemIndex:V,onActiveItemChange:C,itemTemplate:t.thumbnail,numVisible:v,nextThumbnailIcon:t.nextThumbnailIcon,prevThumbnailIcon:t.prevThumbnailIcon,responsiveOptions:t.responsiveOptions,circular:t.circular,isVertical:X,contentHeight:t.verticalThumbnailViewPortHeight,showThumbnailNavigators:t.showThumbnailNavigators,autoPlay:t.autoPlay,slideShowActive:I,stopSlideShow:M,isUnstyled:g,ptm:p,cx:o,sx:f})),De);return He},s=function(){var a=me();if(t.fullScreen){var u=d({className:o("mask",{visibleState:S})},p("mask")),m=d({classNames:o("transition"),in:S,timeout:{enter:150,exit:150},options:t.transitionOptions,unmountOnExit:!0,onEnter:Z,onEntering:ce,onEntered:Q,onExit:ee,onExited:se},p("transition")),w=l.createElement("div",oe({ref:A},u),l.createElement(Ge,oe({nodeRef:_},m),a));return l.createElement(Ze,{element:w})}return a};return he.isNotEmpty(t.value)&&s()}));Re.displayName="Galleria";const Nt={title:"Media/Galleria",component:Re,parameters:{layout:"centered"},argTypes:{activeIndex:{control:"number",description:"Index of the first item.",options:null},autoPlay:{control:"boolean",description:"Items are displayed with a slideshow in autoPlay mode.",options:null},baseZIndex:{control:"number",description:"Base zIndex value to use in layering.",options:null},changeItemOnIndicatorHover:{control:"boolean",description:"When enabled, item is changed on indicator item's hover.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},circular:{control:"boolean",description:"Defines if scrolling would be infinite.",options:null},closeIcon:{control:"select",description:"Icon to display in the galleria close button.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},footer:{control:"text",description:"Custom footer template.",options:null},fullScreen:{control:"boolean",description:"Whether to display the component on fullscreen.",options:null},header:{control:"text",description:"Custom header template.",options:null},indicatorsPosition:{control:"select",description:'Position of indicators. Valid values are "bottom", "top", "left" and "right".',options:["left","top","bottom","right"]},itemNextIcon:{control:"select",description:"Icon to show in the next item button.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},itemPrevIcon:{control:"select",description:"Icon to show in the previous item button.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},nextThumbnailIcon:{control:"select",description:"Icon to show in the next thumbnail button.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},numVisible:{control:"number",description:"Number of items per page.",options:null},prevThumbnailIcon:{control:"select",description:"Icon to show in the previous thumbnail button.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},responsiveOptions:{control:"object",description:"An array of options for responsive design.",options:null},showIndicators:{control:"boolean",description:"Whether to display indicator container.",options:null},showIndicatorsOnItem:{control:"boolean",description:"When enabled, indicator container is displayed on item container.",options:null},showItemNavigators:{control:"boolean",description:"Whether to display navigation buttons in item container.",options:null},showItemNavigatorsOnHover:{control:"boolean",description:"Whether to display navigation buttons on item container's hover.",options:null},showThumbnailNavigators:{control:"boolean",description:"Whether to display navigation buttons in thumbnail container.",options:null},showThumbnails:{control:"boolean",description:"Whether to display thumbnail container.",options:null},thumbnailsPosition:{control:"select",description:'Position of thumbnails. Valid values are "bottom", "top", "left" and "right".',options:["left","top","bottom","right"]},transitionInterval:{control:"number",description:"Time in milliseconds to scroll items.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"object",description:"An array of objects to display.",options:null}}},re={args:{value:0,unstyled:!1,activeIndex:0}};var xe,Se,Pe;re.parameters={...re.parameters,docs:{...(xe=re.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false,
    "activeIndex": 0
  }
}`,...(Pe=(Se=re.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};const Et=["Default"];export{re as Default,Et as __namedExportsOrder,Nt as default};
//# sourceMappingURL=Galleria.stories-56e50f19.js.map
