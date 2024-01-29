import{r as o}from"./index-76fb7be0.js";import{a as Ne,U as Oe,O as ge,c as z,P as Y,l as D,m as C,D as b,Z as he,I as se}from"./api.esm-4644ee78.js";import{C as Me,u as Ue}from"./componentbase.esm-1c796d7e.js";import{C as Fe}from"./csstransition.esm-f87c8556.js";import{m as $e,c as Ge,d as Xe,a as Te,g as ye,e as Ze,b as Je}from"./hooks.esm-d069ba29.js";import{T as Ye}from"./index.esm-9702a90e.js";import{P as qe}from"./portal.esm-16954874.js";import{R as ie}from"./ripple.esm-1f3221bd.js";import{C as ke}from"./index.esm-4336c134.js";import{C as Ae}from"./index.esm-2c97deba.js";import{C as Qe}from"./index.esm-4f5bfc3f.js";import{C as et}from"./index.esm-83dc302e.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-60e86362.js";function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},ue.apply(this,arguments)}function pe(e){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},pe(e)}function tt(e,i){if(pe(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var t=n.call(e,i||"default");if(pe(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function nt(e){var i=tt(e,"string");return pe(i)==="symbol"?i:String(i)}function Ie(e,i,n){return i=nt(i),i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function it(e){if(Array.isArray(e))return e}function at(e,i){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t,s,y,w,_=[],x=!0,V=!1;try{if(y=(n=n.call(e)).next,i===0){if(Object(n)!==n)return;x=!1}else for(;!(x=(t=y.call(n)).done)&&(_.push(t.value),_.length!==i);x=!0);}catch(h){V=!0,s=h}finally{try{if(!x&&n.return!=null&&(w=n.return(),Object(w)!==w))return}finally{if(V)throw s}}return _}}function be(e,i){(i==null||i>e.length)&&(i=e.length);for(var n=0,t=new Array(i);n<i;n++)t[n]=e[n];return t}function je(e,i){if(e){if(typeof e=="string")return be(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return be(e,i)}}function rt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(e,i){return it(e)||at(e,i)||je(e,i)||rt()}var ot={header:"p-galleria-header",footer:"p-galleria-footer",closeIcon:"p-galleria-close-icon",closeButton:"p-galleria-close p-link",root:function(i){var n=i.props,t=i.context,s=i.thumbnailsPosClassName,y=i.indicatorPosClassName;return z("p-galleria p-component",{"p-galleria-fullscreen":n.fullScreen,"p-galleria-indicator-onitem":n.showIndicatorsOnItem,"p-galleria-item-nav-onhover":n.showItemNavigatorsOnHover&&!n.fullScreen,"p-input-filled":t&&t.inputStyle==="filled"||Y.inputStyle==="filled","p-ripple-disabled":t&&t.ripple===!1||Y.ripple===!1},s,y)},content:"p-galleria-content",mask:function(i){var n=i.visibleState;return z("p-galleria-mask",{"p-galleria-visible":n})},thumbnailItem:function(i){var n=i.subProps;return z("p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":n.current,"p-galleria-thumbnail-item-active":n.active,"p-galleria-thumbnail-item-start":n.start,"p-galleria-thumbnail-item-end":n.end})},thumbnailItemContent:"p-galleria-thumbnail-item-content",previousThumbnailIcon:"p-galleria-thumbnail-prev-icon",previousThumbnailButton:function(i){var n=i.isDisabled;return z("p-galleria-thumbnail-prev p-link",{"p-disabled":n})},nextThumbnailIcon:"p-galleria-thumbnail-next-icon",nextThumbnailButton:function(i){var n=i.isDisabled;return z("p-galleria-thumbnail-next p-link",{"p-disabled":n})},thumbnailContainer:"p-galleria-thumbnail-container",thumbnailItemsContainer:"p-galleria-thumbnail-items-container",thumbnailItems:"p-galleria-thumbnail-items",thumbnailWrapper:"p-galleria-thumbnail-wrapper",previousItemIcon:"p-galleria-item-prev-icon",previousItemButton:function(i){var n=i.isDisabled;return z("p-galleria-item-prev p-galleria-item-nav p-link",{"p-disabled":n})},nextItemIcon:"p-galleria-item-next-icon",nextItemButton:function(i){var n=i.isDisabled;return z("p-galleria-item-next p-galleria-item-nav p-link",{"p-disabled":n})},caption:"p-galleria-caption",indicator:function(i){var n=i.isActive;return z("p-galleria-indicator",{"p-highlight":n})},indicators:"p-galleria-indicators p-reset",itemWrapper:"p-galleria-item-wrapper",itemContainer:"p-galleria-item-container",item:"p-galleria-item",transition:"p-galleria"},lt=`
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
`,ct={thumbnailItemsContainer:function(i){var n=i.height;return{height:n}}},me=Me.extend({defaultProps:{__TYPE:"Galleria",id:null,value:null,activeIndex:0,fullScreen:!1,item:null,thumbnail:null,indicator:null,caption:null,className:null,closeIcon:null,style:null,header:null,footer:null,numVisible:3,responsiveOptions:null,showItemNavigators:!1,showThumbnailNavigators:!0,showItemNavigatorsOnHover:!1,changeItemOnIndicatorHover:!1,circular:!1,autoPlay:!1,transitionInterval:4e3,showThumbnails:!0,itemNextIcon:null,itemPrevIcon:null,nextThumbnailIcon:null,prevThumbnailIcon:null,thumbnailsPosition:"bottom",verticalThumbnailViewPortHeight:"300px",showIndicators:!1,showIndicatorsOnItem:!1,indicatorsPosition:"bottom",baseZIndex:0,transitionOptions:null,onItemChange:null,children:void 0},css:{classes:ot,styles:lt,inlineStyles:ct}});function st(e){if(Array.isArray(e))return be(e)}function ut(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(e){return st(e)||ut(e)||je(e)||pt()}function we(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,t)}return n}function fe(e){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?we(Object(n),!0).forEach(function(t){Ie(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Re=o.memo(o.forwardRef(function(e,i){var n=Xe(),t=o.useRef(null),s=e.ptm,y=e.cx,w=function(a,p){return s(a,fe({hostName:e.hostName},p))},_=function(a){return D("aria")?D("aria").slideNumber.replace(/{slideNumber}/g,a):void 0},x=function(a){return D("aria")?D("aria").pageLabel.replace(/{page}/g,a):void 0},V=function(){var a=e.activeItemIndex+1;e.onActiveItemChange({index:e.circular&&e.value.length-1===e.activeItemIndex?0:a})},h=function(){var a=e.activeItemIndex!==0?e.activeItemIndex-1:0;e.onActiveItemChange({index:e.circular&&e.activeItemIndex===0?e.value.length-1:a})},j=function(){e.slideShowActive&&e.stopSlideShow&&e.stopSlideShow()},B=function(a){j(),h(),a&&a.cancelable&&a.preventDefault()},K=function(a){j(),V(),a&&a.cancelable&&a.preventDefault()},P=function(a){j(),e.onActiveItemChange({index:a})},F=function(a){e.changeItemOnIndicatorHover&&(j(),e.onActiveItemChange({index:a}))},$=function(a,p){switch(a.code){case"Enter":case"Space":j(),e.onActiveItemChange({index:p}),a.preventDefault();break;case"ArrowRight":g();break;case"ArrowLeft":c();break;case"Home":d(),a.preventDefault();break;case"End":O(),a.preventDefault();break;case"Tab":k();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":a.preventDefault();break}},g=function(){var a=X(b.find(t.current,'[data-pc-section="indicator"]')),p=E();L(p,p+1===a.length?a.length-1:p+1)},c=function(){var a=E();L(a,a-1<=0?0:a-1)},d=function(){var a=E();L(a,0)},O=function(){var a=X(b.find(t.current,'[data-pc-section="indicator"]')),p=E();L(p,a.length-1)},k=function(){var a=X(b.find(t.current,'[data-pc-section="indicator"]')),p=a.findIndex(function(R){return b.getAttribute(R,"data-p-highlight")===!0}),I=b.findSingle(t.current,'[data-pc-section="indicator"] > button[tabindex="0"]'),N=a.findIndex(function(R){return R===I.parentElement});a[N].children[0].tabIndex="-1",a[p].children[0].tabIndex="0"},E=function(){var a=X(b.find(t.current,'[data-pc-section="indicator"]')),p=b.findSingle(t.current,'[data-pc-section="indicator"] > button[tabindex="0"]');return a.findIndex(function(I){return I===p.parentElement})},L=function(a,p){var I=X(b.find(t.current,'[data-pc-section="indicator"]'));I[a].children[0].tabIndex="-1",I[p].children[0].tabIndex="0",I[p].children[0].focus()};Te(function(){e.autoPlay&&e.startSlideShow()});var ae=function(){if(e.showItemNavigators){var a=!e.circular&&e.activeItemIndex===0,p=n({className:y("previousItemIcon")},w("previousItemIcon")),I=e.itemPrevIcon||o.createElement(ke,p),N=se.getJSXIcon(I,fe({},p),{props:e}),R=n({type:"button",className:y("previousItemButton",{isDisabled:a}),onClick:B,disabled:a,"data-p-disabled":a,"data-pc-group-section":"itemnavigator"},w("previousItemButton"));return o.createElement("button",R,N,o.createElement(ie,null))}return null},W=function(){if(e.showItemNavigators){var a=!e.circular&&e.activeItemIndex===e.value.length-1,p=n({className:y("nextItemIcon")},w("nextItemIcon")),I=e.itemNextIcon||o.createElement(Ae,p),N=se.getJSXIcon(I,fe({},p),{props:e}),R=n({type:"button",className:y("nextItemButton",{isDisabled:a}),onClick:K,disabled:a,"data-p-disabled":a,"data-pc-group-section":"itemnavigator"},w("nextItemButton"));return o.createElement("button",R,N,o.createElement(ie,null))}return null},M=function(){var a=n({className:y("caption")},w("caption"));if(e.caption){var p=e.caption(e.value[e.activeItemIndex]);return o.createElement("div",a,p)}return null},S=function(a){var p="p-galleria-indicator-"+a,I=e.activeItemIndex===a,N=e.indicator&&e.indicator(a),R=n({className:y("indicator",{isActive:I}),key:p,tabIndex:0,"aria-label":x(a+1),"aria-selected":e.activeIndex===a,"aria-controls":e.id+"_item_"+a,"data-p-highlight":I,onClick:function(){return P(a)},onMouseEnter:function(){return F(a)},onKeyDown:function(le){return $(le,a)}},w("indicator"));return N||(N=o.createElement("button",{tabIndex:e.activeIndex===a?"0":"-1",type:"button",className:"p-link"},o.createElement(ie,null))),o.createElement("li",R,N)},A=function(){if(e.showIndicators){for(var a=[],p=n({className:z(e.indicatorsContentClassName,y("indicators"))},w("indicators")),I=0;I<e.value.length;I++)a.push(S(I));return o.createElement("ul",ue({ref:t},p),a)}return null},q=e.itemTemplate&&e.itemTemplate(e.value[e.activeItemIndex]),G=ae(),Z=W(),re=M(),Q=A(),oe=n({ref:i,className:y("itemWrapper")},w("itemWrapper")),ee=n({className:y("itemContainer")},w("itemContainer")),te=n({className:y("item"),id:e.id+"_item_"+e.activeItemIndex,role:"group","aria-label":_(e.activeItemIndex+1),"aria-roledescription":D("aria")?D("aria").slide:void 0},w("item"));return o.createElement("div",oe,o.createElement("div",ee,G,o.createElement("div",te,q),Z,re),Q)}));Re.displayName="GalleriaItem";function xe(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,t)}return n}function ve(e){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?xe(Object(n),!0).forEach(function(t){Ie(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var De=o.memo(function(e){var i=e.ptm,n=e.cx,t=function(c,d){return i(c,ve({hostName:e.hostName},d))},s=function(c){e.onItemClick({originalEvent:c,index:e.index})},y=function(c){return D("aria")?D("aria").pageLabel.replace(/{page}/g,c):void 0},w=function(c){switch((c.code==="Enter"||c.code==="Space")&&(e.onItemClick({originalEvent:c,index:e.index}),c.preventDefault()),c.code){case"ArrowRight":_();break;case"ArrowLeft":x();break;case"Home":V(),c.preventDefault();break;case"End":h(),c.preventDefault();break;case"ArrowUp":case"ArrowDown":c.preventDefault();break;case"Tab":j();break}},_=function(){var c=b.find(e.itemsContainerRef.current,'[data-pc-section="thumbnailitem"]'),d=B();K(d,d+1===c.length?c.length-1:d+1)},x=function(){var c=B();K(c,c-1<=0?0:c-1)},V=function(){var c=B();K(c,0)},h=function(){var c=b.find(e.itemsContainerRef.current,'[data-pc-section="thumbnailitem"]'),d=B();K(d,c.length-1)},j=function(){var c=X(b.find(e.itemsContainerRef.current,'[data-pc-section="thumbnailitem"]')),d=c.findIndex(function(E){return b.getAttribute(E,"data-p-active")===!0}),O=b.findSingle(e.itemsContainerRef.current,'[tabindex="0"]'),k=c.findIndex(function(E){return E===O.parentElement});c[k].children[0].tabIndex="-1",c[d].children[0].tabIndex="0"},B=function(){var c=X(b.find(e.itemsContainerRef.current,'[data-pc-section="thumbnailitem"]')),d=b.findSingle(e.itemsContainerRef.current,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return c.findIndex(function(O){return O===d.parentElement})},K=function(c,d){var O=b.find(e.itemsContainerRef.current,'[data-pc-section="thumbnailitem"]');O[c].children[0].tabIndex="-1",O[d].children[0].tabIndex="0",O[d].children[0].focus()},P=e.template&&e.template(e.item),F=C({className:z(e.className,n("thumbnailItem",{subProps:e})),key:"p-galleria-thumbnail-item-"+e.index,role:"tab","data-p-active":e.current,"aria-selected":e.current,"aria-controls":e.containerId+"_item_"+e.index,onKeyDown:w,"data-p-galleria-thumbnail-item-current":e.current,"data-p-galleria-thumbnail-item-active":e.active,"data-p-galleria-thumbnail-item-start":e.start,"data-p-galleria-thumbnail-item-end":e.end},t("thumbnailItem")),$=C({className:n("thumbnailItemContent"),tabIndex:e.current?"0":"-1","aria-label":y(e.index+1),"aria-current":e.current?"page":void 0,onClick:s},t("thumbnailItemContent"));return o.createElement("div",F,o.createElement("div",$,P))}),_e=o.memo(o.forwardRef(function(e,i){var n=o.useState(e.numVisible),t=J(n,2),s=t[0],y=t[1],w=o.useState(0),_=J(w,2),x=_[0],V=_[1],h=o.useRef(null),j=o.useRef(null),B=o.useRef(""),K=o.useRef(null),P=o.useRef(null),F=ye(s),$=ye(e.activeItemIndex),g=o.useContext(Ne),c=e.ptm,d=e.cx,O=e.sx,k=function(l,r){return c(l,ve({hostName:e.hostName},r))},E=Ze({listener:function(){a()},when:e.responsiveOptions}),L=J(E,1),ae=L[0],W=function(l){var r=x+l;l<0&&-1*r+s>e.value.length-1?r=s-e.value.length:l>0&&r>0&&(r=0),e.circular&&(l<0&&e.value.length-1===e.activeItemIndex?r=0:l>0&&e.activeItemIndex===0&&(r=s-e.value.length)),h.current&&(b.removeClass(h.current,"p-items-hidden"),h.current.style.transform=e.isVertical?"translate3d(0, ".concat(r*(100/s),"%, 0)"):"translate3d(".concat(r*(100/s),"%, 0, 0)"),h.current.style.transition="transform 500ms ease 0s"),V(r)},M=function(){e.slideShowActive&&e.stopSlideShow&&e.stopSlideShow()},S=function(){var l=Math.floor(s/2);return s%2?l:l-1},A=function(l){M();var r=e.activeItemIndex!==0?e.activeItemIndex-1:0,u=r+x;s-u-1>S()&&(-1*x!==0||e.circular)&&W(1),e.onActiveItemChange({index:e.circular&&e.activeItemIndex===0?e.value.length-1:r}),l.cancelable&&l.preventDefault()},q=function(l){M();var r=e.activeItemIndex+1;r+x>S()&&(-1*x<te()-1||e.circular)&&W(-1),e.onActiveItemChange({index:e.circular&&e.value.length-1===e.activeItemIndex?0:r}),l.cancelable&&l.preventDefault()},G=function(l){M();var r=l.index;if(r!==e.activeItemIndex){var u=r+x,v=0;r<e.activeItemIndex?(v=s-u-1-S(),v>0&&-1*x!==0&&W(v)):(v=S()-u,v<0&&-1*x<te()-1&&W(v)),e.onActiveItemChange({index:r})}},Z=function(l){h.current&&l.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","false"),!e.isUnstyled()&&b.addClass(h.current,"p-items-hidden"),h.current.style.transition="")},re=function(l){var r=l.changedTouches[0];j.current={x:r.pageX,y:r.pageY}},Q=function(l){l.cancelable&&l.preventDefault()},oe=function(l){var r=l.changedTouches[0];e.isVertical?ee(l,r.pageY-j.current.y):ee(l,r.pageX-j.current.x)},ee=function(l,r){r<0?q(l):A(l)},te=function(){return e.value.length>s?e.value.length-s+1:0},f=function(){K.current||(K.current=b.createInlineStyle(g&&g.nonce||Y.nonce,g&&g.styleContainer));var l=`
            [data-pc-section="thumbnailitems"][`.concat(B.current,`] {
                [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/s,`%
                }
            } 
        `);if(e.responsiveOptions){var r=ge.localeComparator(g&&g.locale||Y.locale);P.current=X(e.responsiveOptions),P.current.sort(function(T,H){var U=T.breakpoint,ce=H.breakpoint;return ge.sort(U,ce,-1,r,g&&g.nullSortOrder||Y.nullSortOrder)});for(var u=0;u<P.current.length;u++){var v=P.current[u];l+=`
                    @media screen and (max-width: `.concat(v.breakpoint,`) {
                        [data-pc-section="thumbnailitems"][`).concat(B.current,`] {
                            [data-pc-section="thumbnailitem"] {
                                flex: 1 0 `).concat(100/v.numVisible,`%
                            }
                        } 
                    }
                `)}}K.current.innerHTML=l},a=function(){if(h.current&&P.current){for(var l=window.innerWidth,r={numVisible:e.numVisible},u=0;u<P.current.length;u++){var v=P.current[u];parseInt(v.breakpoint,10)>=l&&(r=v)}s!==r.numVisible&&y(r.numVisible)}};Te(function(){h.current&&(B.current=Oe(),h.current.setAttribute(B.current,"")),f(),a(),ae()}),Je(function(){var m=x;(F!==s||$!==e.activeItemIndex)&&(e.activeItemIndex<=S()?m=0:e.value.length-s+S()<e.activeItemIndex?m=s-e.value.length:e.value.length-s<e.activeItemIndex&&s%2===0?m=e.activeItemIndex*-1+S()+1:m=e.activeItemIndex*-1+S(),m!==x&&V(m),h.current.style.transform=e.isVertical?"translate3d(0, ".concat(m*(100/s),"%, 0)"):"translate3d(".concat(m*(100/s),"%, 0, 0)"),$!==e.activeItemIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!e.isUnstyled()&&b.removeClass(h.current,"p-items-hidden"),h.current.style.transition="transform 500ms ease 0s"))});var p=function(){return e.value.map(function(l,r){var u=x*-1,v=u+s-1,T=u<=r&&v>=r,H=u===r,U=v===r,ce=e.activeItemIndex===r;return o.createElement(De,{key:r,index:r,containerId:e.containerId,itemsContainerRef:h,template:e.itemTemplate,item:l,active:T,start:H,end:U,onItemClick:G,current:ce,ptm:c,cx:d,sx:O})})},I=function(){if(e.showThumbnailNavigators){var l=!e.circular&&e.activeItemIndex===0||e.value.length<=s,r=C({className:d("previousThumbnailIcon")},k("previousThumbnailIcon")),u=e.isVertical?e.prevThumbnailIcon||o.createElement(et,r):e.prevThumbnailIcon||o.createElement(ke,r),v=se.getJSXIcon(u,ve({},r),{props:e}),T=C({className:d("previousThumbnailButton",{isDisabled:l}),onClick:A,type:"button",disabled:l,"data-p-disabled":l,"aria-label":D("aria")?D("aria").previousPageLabel:void 0,"data-pc-group-section":"thumbnailnavigator"},k("previousThumbnailButton"));return o.createElement("button",T,v,o.createElement(ie,null))}return null},N=function(){if(e.showThumbnailNavigators){var l=!e.circular&&e.activeItemIndex===e.value.length-1||e.value.length<=s,r=C({className:d("nextThumbnailIcon")},k("nextThumbnailIcon")),u=e.isVertical?e.nextThumbnailIcon||o.createElement(Qe,r):e.nextThumbnailIcon||o.createElement(Ae,r),v=se.getJSXIcon(u,ve({},r),{props:e}),T=C({className:d("nextThumbnailButton",{isDisabled:l}),disabled:l,type:"button","aria-label":D("aria")?D("aria").nextPageLabel:void 0,onClick:q,"data-p-disabled":l,"data-pc-group-section":"thumbnailnavigator"},k("nextThumbnailButton"));return o.createElement("button",T,v,o.createElement(ie,null))}return null},R=function(){var l=p(),r=e.isVertical?e.contentHeight:"",u=I(),v=N(),T=C({className:d("thumbnailContainer")},k("thumbnailContainer")),H=C({className:d("thumbnailItemsContainer"),style:O("thumbnailItemsContainer",{height:r})},k("thumbnailItemsContainer")),U=C({ref:h,className:d("thumbnailItems"),role:"tablist",onTransitionEnd:Z,onTouchStart:re,onTouchMove:Q,onTouchEnd:oe},k("thumbnailItems"));return o.createElement("div",T,u,o.createElement("div",H,o.createElement("div",U,l)),v)},ne=R(),le=C({className:d("thumbnailWrapper")},k("thumbnailWrapper"));return o.createElement("div",le,ne)}));De.displayName="GalleriaThumbnailItem";_e.displayName="GalleriaThumbnails";function Se(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,t)}return n}function mt(e){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?Se(Object(n),!0).forEach(function(t){Ie(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Be=o.memo(o.forwardRef(function(e,i){var n=o.useContext(Ne),t=me.getProps(e,n),s=o.useState(!1),y=J(s,2),w=y[0],_=y[1],x=o.useState(t.numVisible),V=J(x,2),h=V[0],j=V[1],B=o.useState(!1),K=J(B,2),P=K[0],F=K[1],$=o.useState(t.activeIndex),g=J($,2),c=g[0],d=g[1],O=o.useRef(null),k=o.useRef(null),E=o.useRef(null),L=t.onItemChange?t.activeIndex:c,ae=t.thumbnailsPosition==="left"||t.thumbnailsPosition==="right",W=t.id||Oe(),M=me.setMetaData({props:t,state:{visible:w,numVisible:h,slideShowActive:P,activeIndex:c}}),S=M.ptm,A=M.cx,q=M.sx,G=M.isUnstyled;Ue(me.css.styles,G,{name:"galleria"}),$e(function(){Z({index:t.circular&&t.value.length-1===L?0:L+1})},t.transitionInterval,P);var Z=function(u){if(u.index>=t.value.length){N();return}t.onItemChange?t.onItemChange(u):d(u.index)},re=function(){_(!0)},Q=function(){_(!1)},oe=function(){b.blockBodyScroll()},ee=function(){he.set("modal",E.current,n&&n.autoZIndex||Y.autoZIndex,t.baseZIndex||n&&n.zIndex.modal||Y.zIndex.modal),!G()&&b.addMultipleClasses(E.current,"p-component-overlay p-component-overlay-enter")},te=function(){t.onShow&&t.onShow()},f=function(){b.unblockBodyScroll(),!G()&&b.addClass(E.current,"p-component-overlay-leave")},a=function(){he.clear(E.current),t.onHide&&t.onHide()},p=function(){return P},I=function(){F(!0)},N=function(){F(!1)},R=function(u,v){var T=["top","left","bottom","right"],H=T.find(function(U){return U===v});return H?"".concat(u,"-").concat(H):""};o.useEffect(function(){t.value&&t.value.length<h&&j(t.value.length)},[t.value,h]),o.useEffect(function(){j(t.numVisible)},[t.numVisible]),Ge(function(){P&&N(),he.clear(E.current)}),o.useImperativeHandle(i,function(){return{props:t,show:re,hide:Q,isAutoPlayActive:p,startSlideShow:I,stopSlideShow:N,getElement:function(){return O.current},getPreviewContent:function(){return k.current}}});var ne=function(){var u=C({className:A("header")},S("header"));return t.header?o.createElement("div",u,t.header):null},le=function(){var u=C({className:A("footer")},S("footer"));return t.footer?o.createElement("div",u,t.footer):null},m=function(){var u=t.showThumbnails&&R("p-galleria-thumbnails",t.thumbnailsPosition),v=t.showIndicators&&R("p-galleria-indicators",t.indicatorsPosition),T=C({className:A("closeIcon"),"aria-hidden":!0},S("closeIcon")),H=t.closeIcon||o.createElement(Ye,T),U=se.getJSXIcon(H,mt({},T),{props:t}),ce=C({type:"button",className:A("closeButton"),"aria-label":D("aria")?D("aria").close:void 0,onClick:Q},S("closeButton")),Ke=t.fullScreen&&o.createElement("button",ce,U,o.createElement(ie,null)),Ve=ne(),He=le(),Le=C({ref:O,id:W,className:z(t.className,A("root",{context:n,thumbnailsPosClassName:u,indicatorPosClassName:v})),style:t.style,role:"region"},me.getOtherProps(t),S("root")),ze=C({className:A("content"),"aria-live":t.autoPlay?"polite":"off"},S("content")),We=o.createElement("div",Le,Ke,Ve,o.createElement("div",ze,o.createElement(Re,{hostName:"Galleria",ref:k,id:W,value:t.value,activeItemIndex:L,onActiveItemChange:Z,itemTemplate:t.item,circular:t.circular,caption:t.caption,showIndicators:t.showIndicators,itemPrevIcon:t.itemPrevIcon,itemNextIcon:t.itemNextIcon,changeItemOnIndicatorHover:t.changeItemOnIndicatorHover,indicator:t.indicator,showItemNavigators:t.showItemNavigators,autoPlay:t.autoPlay,slideShowActive:P,startSlideShow:I,stopSlideShow:N,ptm:S,cx:A}),t.showThumbnails&&o.createElement(_e,{hostName:"Galleria",value:t.value,containerId:W,activeItemIndex:L,onActiveItemChange:Z,itemTemplate:t.thumbnail,numVisible:h,nextThumbnailIcon:t.nextThumbnailIcon,prevThumbnailIcon:t.prevThumbnailIcon,responsiveOptions:t.responsiveOptions,circular:t.circular,isVertical:ae,contentHeight:t.verticalThumbnailViewPortHeight,showThumbnailNavigators:t.showThumbnailNavigators,autoPlay:t.autoPlay,slideShowActive:P,stopSlideShow:N,isUnstyled:G,ptm:S,cx:A,sx:q})),He);return We},l=function(){var u=m();if(t.fullScreen){var v=C({className:A("mask",{visibleState:w}),role:"dialog","aria-modal":"true"},S("mask")),T=C({classNames:A("transition"),in:w,timeout:{enter:150,exit:150},options:t.transitionOptions,unmountOnExit:!0,onEnter:oe,onEntering:ee,onEntered:te,onExit:f,onExited:a},S("transition")),H=o.createElement("div",ue({ref:E},v),o.createElement(Fe,ue({nodeRef:O},T),u));return o.createElement(qe,{element:H})}return u};return ge.isNotEmpty(t.value)&&l()}));Be.displayName="Galleria";const Tt={title:"Media/Galleria",component:Be,parameters:{layout:"centered"},argTypes:{activeIndex:{control:"number",description:"Index of the first item.",options:null},autoPlay:{control:"boolean",description:"Items are displayed with a slideshow in autoPlay mode.",options:null},baseZIndex:{control:"number",description:"Base zIndex value to use in layering.",options:null},changeItemOnIndicatorHover:{control:"boolean",description:"When enabled, item is changed on indicator item's hover.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},circular:{control:"boolean",description:"Defines if scrolling would be infinite.",options:null},closeIcon:{control:"select",description:"Icon to display in the galleria close button.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},footer:{control:"text",description:"Custom footer template.",options:null},fullScreen:{control:"boolean",description:"Whether to display the component on fullscreen.",options:null},header:{control:"text",description:"Custom header template.",options:null},indicatorsPosition:{control:"select",description:'Position of indicators. Valid values are "bottom", "top", "left" and "right".',options:["left","top","bottom","right"]},itemNextIcon:{control:"select",description:"Icon to show in the next item button.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},itemPrevIcon:{control:"select",description:"Icon to show in the previous item button.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},nextThumbnailIcon:{control:"select",description:"Icon to show in the next thumbnail button.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},numVisible:{control:"number",description:"Number of items per page.",options:null},prevThumbnailIcon:{control:"select",description:"Icon to show in the previous thumbnail button.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},responsiveOptions:{control:"object",description:"An array of options for responsive design.",options:null},showIndicators:{control:"boolean",description:"Whether to display indicator container.",options:null},showIndicatorsOnItem:{control:"boolean",description:"When enabled, indicator container is displayed on item container.",options:null},showItemNavigators:{control:"boolean",description:"Whether to display navigation buttons in item container.",options:null},showItemNavigatorsOnHover:{control:"boolean",description:"Whether to display navigation buttons on item container's hover.",options:null},showThumbnailNavigators:{control:"boolean",description:"Whether to display navigation buttons in thumbnail container.",options:null},showThumbnails:{control:"boolean",description:"Whether to display thumbnail container.",options:null},thumbnailsPosition:{control:"select",description:'Position of thumbnails. Valid values are "bottom", "top", "left" and "right".',options:["left","top","bottom","right"]},transitionInterval:{control:"number",description:"Time in milliseconds to scroll items.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"object",description:"An array of objects to display.",options:null}}},de={args:{value:0,unstyled:!1,activeIndex:0}};var Pe,Ce,Ee;de.parameters={...de.parameters,docs:{...(Pe=de.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false,
    "activeIndex": 0
  }
}`,...(Ee=(Ce=de.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};const kt=["Default"];export{de as Default,kt as __namedExportsOrder,Tt as default};
