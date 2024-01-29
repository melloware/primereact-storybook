import{r as s}from"./index-76fb7be0.js";import{a as Fe,c as h,O as K,U as Te,D as k,I as He}from"./api.esm-4644ee78.js";import{C as $e,u as Be}from"./componentbase.esm-1c796d7e.js";import{d as We,a as ze}from"./hooks.esm-d069ba29.js";import{R as Je}from"./ripple.esm-1f3221bd.js";import"./_commonjsHelpers-de833af9.js";function L(){return L=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},L.apply(this,arguments)}function P(e){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},P(e)}function Xe(e,n){if(P(e)!=="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var i=o.call(e,n||"default");if(P(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function qe(e){var n=Xe(e,"string");return P(n)==="symbol"?n:String(n)}function F(e,n,o){return n=qe(n),n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function T(e,n){(n==null||n>e.length)&&(n=e.length);for(var o=0,i=new Array(n);o<n;o++)i[o]=e[o];return i}function Ve(e){if(Array.isArray(e))return T(e)}function Ye(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ne(e,n){if(e){if(typeof e=="string")return T(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return T(e,n)}}function Ge(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(e){return Ve(e)||Ye(e)||ne(e)||Ge()}function Qe(e){if(Array.isArray(e))return e}function Ze(e,n){var o=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var i,p,x,S,f=[],m=!0,I=!1;try{if(x=(o=o.call(e)).next,n===0){if(Object(o)!==o)return;m=!1}else for(;!(m=(i=x.call(o)).done)&&(f.push(i.value),f.length!==n);m=!0);}catch(N){I=!0,p=N}finally{try{if(!m&&o.return!=null&&(S=o.return(),Object(S)!==S))return}finally{if(I)throw p}}return f}}function et(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(e,n){return Qe(e)||Ze(e,n)||ne(e,n)||et()}var tt={icon:"p-dock-action-icon",action:function(n){var o=n.disabled;return h("p-dock-action",{"p-disabled":o})},menuitem:function(n){var o=n.currentIndexState,i=n.index,p=n.active;return h("p-dock-item",{"p-dock-item-second-prev":o-2===i,"p-dock-item-prev":o-1===i,"p-dock-item-current":o===i,"p-dock-item-next":o+1===i,"p-dock-item-second-next":o+2===i,"p-focus":p})},content:"p-menuitem-content",header:"p-dock-header",menu:"p-dock-list",footer:"p-dock-footer",root:function(n){var o=n.props;return h("p-dock p-component p-dock-".concat(o.position),{"p-dock-magnification":o.magnification})},container:"p-dock-list-container"},nt=`
@layer primereact {
    .p-dock {
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }

    .p-dock-list-container {
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

    .p-dock-top .p-dock-list-container {
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

    .p-dock-bottom .p-dock-list-container {
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

    .p-dock-left .p-dock-list-container {
        flex-direction: row-reverse;
    }
}
`,j=$e.extend({defaultProps:{__TYPE:"Dock",id:null,style:null,className:null,model:null,tabIndex:0,onFocus:null,onBlur:null,position:"bottom",magnification:!0,header:null,footer:null,children:void 0},css:{classes:tt,styles:nt}});function Q(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),o.push.apply(o,i)}return o}function ot(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?Q(Object(o),!0).forEach(function(i){F(e,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Q(Object(o)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i))})}return e}var oe=s.memo(s.forwardRef(function(e,n){var o=s.useState(-3),i=_(o,2),p=i[0],x=i[1],S=s.useState(!1),f=_(S,2),m=f[0],I=f[1],N=s.useState(-1),H=_(N,2),v=H[0],$=H[1],u=We(),re=s.useContext(Fe),r=j.getProps(e,re),ie=s.useState(r.id),B=_(ie,2),R=B[0],ae=B[1],C=j.setMetaData({props:r,state:{id:R,currentIndex:p}}),b=C.ptm,d=C.cx,ce=C.isUnstyled,W=s.useRef(null),y=s.useRef(null);Be(j.css.styles,ce,{name:"dock"});var D=function(t,a,l){return b(t,{context:{index:l,item:a}})},se=function(){x(-3)},le=function(t){x(t)},z=function(t,a){a.command&&a.command({originalEvent:t,item:a}),t.preventDefault()},pe=function(t){I(!0),O(0),r.onFocus&&r.onFocus(t)},ue=function(t){I(!1),$(-1),r.onBlur&&r.onBlur(t)},de=function(t){switch(t.code){case"ArrowDown":(r.position==="left"||r.position==="right")&&J(),t.preventDefault();break;case"ArrowUp":(r.position==="left"||r.position==="right")&&X(),t.preventDefault();break;case"ArrowRight":(r.position==="top"||r.position==="bottom")&&J(),t.preventDefault();break;case"ArrowLeft":(r.position==="top"||r.position==="bottom")&&X(),t.preventDefault();break;case"Home":fe(),t.preventDefault();break;case"End":me(),t.preventDefault();break;case"Enter":case"Space":ve(),t.preventDefault();break}},J=function(){var t=be(v);O(t)},X=function(){var t=ye(v);O(t)},fe=function(){O(0)},me=function(){O(k.find(y.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1)},ve=function(){var t=k.findSingle(y.current,'li[id="'.concat("".concat(v),'"]')),a=t&&k.findSingle(t,'[data-pc-section="action"]');a?a.click():t&&t.click()},be=function(t){var a=k.find(y.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),l=G(a).findIndex(function(g){return g.id===t});return l>-1?l+1:0},ye=function(t){var a=k.find(y.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),l=G(a).findIndex(function(g){return g.id===t});return l>-1?l-1:0},O=function(t){var a=k.find(y.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),l=t>=a.length?a.length-1:t<0?0:t;$(a[l].getAttribute("id"))},q=function(t){return t===v},ge=function(t,a){if(t.visible===!1)return null;var l=t.disabled,g=t.icon,V=t.label,Y=t.template,Ee=t.url,_e=t.target,E=t.id||R+"_"+a,je=h("p-dock-action",{"p-disabled":l}),Ae=h("p-dock-action-icon",g),Ne=u({className:d("icon")},D("icon",t,a)),Re=He.getJSXIcon(g,ot({},Ne),{props:r}),Ce=u({href:Ee||"#",onFocus:function(w){return w.stopPropagation()},className:d("action",{disabled:l}),"aria-hidden":"true",tabIndex:-1,target:_e,"data-pr-tooltip":V,onClick:function(w){return z(w,t)}},D("action",t,a)),U=s.createElement("a",Ce,Re,s.createElement(Je,null));if(Y){var Ue={onClick:function(w){return z(w,t)},className:je,iconClassName:Ae,"aria-hidden":"true",tabIndex:-1,element:U,props:r,index:a};U=K.getJSXElement(Y,t,Ue)}var Me=u({className:d("content")},D("content",t,a)),Ke=q(E),Le=u(F(F({id:E,role:"menuitem",key:E,"aria-label":V,"aria-disabled":l,"data-p-focused":Ke,"data-p-disabled":l||!1,className:d("menuitem",{currentIndexState:p,index:a,active:q(E)})},"role","none"),"onMouseEnter",function(){return le(a)}),D("menuitem",t,a));return s.createElement("li",Le,s.createElement("div",Me,U))},ke=function(){return r.model?r.model.map(ge):null},he=function(){if(r.header){var t=K.getJSXElement(r.header,{props:r}),a=u({className:d("header")},b("header"));return s.createElement("div",a,t)}return null},xe=function(){var t=ke(),a=u({ref:y,className:d("menu"),role:"menu","aria-orientation":r.position==="bottom"||r.position==="top"?"horizontal":"vertical","aria-activedescendant":m?v!==-1?v:null:void 0,tabIndex:r.tabIndex||0,onFocus:pe,onBlur:ue,onKeyDown:de,onMouseLeave:se},b("menu"));return s.createElement("ul",a,t)},Se=function(){if(r.footer){var t=K.getJSXElement(r.footer,{props:r}),a=u({className:d("footer")},b("footer"));return s.createElement("div",a,t)}return null};ze(function(){R||ae(Te())}),s.useImperativeHandle(n,function(){return{props:r,getElement:function(){return W.current}}});var Ie=he(),Oe=xe(),we=Se(),Pe=u({className:h(r.className,d("root")),style:r.style},j.getOtherProps(r),b("root")),De=u({className:d("container")},b("container"));return s.createElement("div",L({id:r.id,ref:W},Pe),s.createElement("div",De,Ie,Oe,we))}));oe.displayName="Dock";const pt={title:"Menu/Dock",component:oe,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},footer:{control:"text",description:"Template of footer element.",options:null},header:{control:"text",description:"Template of header element.",options:null},magnification:{control:"boolean",description:"Whether to allow scale animation.",options:null},model:{control:"object",description:"MenuModel instance to define the action items.",options:null},position:{control:"select",description:"Position of element. Valid values are 'bottom', 'top', 'left' and 'right'.",options:["left","top","bottom","right"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},A={args:{unstyled:!1,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var Z,ee,te;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const ut=["Default"];export{A as Default,ut as __namedExportsOrder,pt as default};
