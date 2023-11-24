import{r as l}from"./index-76fb7be0.js";import{P as Qe,m as p,c as v,U as en,D as I,Z as le,b as Q,O as H,I as L}from"./api.esm-2e2d159c.js";import{C as nn,u as tn}from"./componentbase.esm-b0caea1e.js";import{j as an,c as rn,b as on,d as ln,e as ue}from"./hooks.esm-c93f10ee.js";import{A as un}from"./index.esm-d5235214.js";import{A as pn}from"./index.esm-958628e1.js";import{B as sn}from"./index.esm-87179d0c.js";import{R as pe}from"./ripple.esm-cba91116.js";import"./_commonjsHelpers-de833af9.js";import"./iconbase.esm-439d6f79.js";function K(){return K=Object.assign?Object.assign.bind():function(i){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(i[t]=r[t])}return i},K.apply(this,arguments)}function z(i){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},z(i)}function mn(i,a){if(z(i)!=="object"||i===null)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var t=r.call(i,a||"default");if(z(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(i)}function cn(i){var a=mn(i,"string");return z(a)==="symbol"?a:String(a)}function dn(i,a,r){return a=cn(a),a in i?Object.defineProperty(i,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[a]=r,i}function fn(i){if(Array.isArray(i))return i}function vn(i,a){var r=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(r!=null){var t,d,M,g,_=[],x=!0,N=!1;try{if(M=(r=r.call(i)).next,a===0){if(Object(r)!==r)return;x=!1}else for(;!(x=(t=M.call(r)).done)&&(_.push(t.value),_.length!==a);x=!0);}catch(f){N=!0,d=f}finally{try{if(!x&&r.return!=null&&(g=r.return(),Object(g)!==g))return}finally{if(N)throw d}}return _}}function se(i,a){(a==null||a>i.length)&&(a=i.length);for(var r=0,t=new Array(a);r<a;r++)t[r]=i[r];return t}function gn(i,a){if(i){if(typeof i=="string")return se(i,a);var r=Object.prototype.toString.call(i).slice(8,-1);if(r==="Object"&&i.constructor&&(r=i.constructor.name),r==="Map"||r==="Set")return Array.from(i);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return se(i,a)}}function bn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(i,a){return fn(i)||vn(i,a)||gn(i,a)||bn()}var hn={root:function(a){var r=a.props,t=a.mobileActiveState;return v("p-megamenu p-component",{"p-megamenu-horizontal":r.orientation==="horizontal","p-megamenu-vertical":r.orientation==="vertical","p-megamenu-mobile-active":t})},separator:"p-menu-separator",submenuIcon:"p-submenu-icon",action:function(a){var r=a.item;return v("p-menuitem-link",{"p-disabled":r.disabled})},submenuItem:"p-menuitem",submenuHeader:function(a){var r=a.submenu;return v("p-megamenu-submenu-header",{"p-disabled":r.disabled})},submenu:"p-megamenu-submenu",panel:"p-megamenu-panel",grid:"p-megamenu-grid",icon:"p-menuitem-icon",label:"p-menuitem-text",column:function(a){var r=a.category,t=r.items?r.items.length:0,d;switch(t){case 2:d="p-megamenu-col-6";break;case 3:d="p-megamenu-col-4";break;case 4:d="p-megamenu-col-3";break;case 6:d="p-megamenu-col-2";break;default:d="p-megamenu-col-12";break}return d},headerAction:function(a){var r=a.category;return v("p-menuitem-link",{"p-disabled":r.disabled})},menuButton:"p-megamenu-button",menuitem:function(a){var r=a.category,t=a.activeItemState;return v("p-menuitem",{"p-menuitem-active":r===t})},menubar:"p-megamenu-root-list",menu:"p-megamenu-root-list",start:"p-megamenu-start",end:"p-megamenu-end"},yn=`
@layer primereact {
    .p-megamenu {
        display: flex;
    }
    
    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    .p-megamenu-root-list > .p-menuitem {
        position: relative;
    }
    
    .p-megamenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }
    
    .p-megamenu .p-menuitem-text {
        line-height: 1;
    }
    
    .p-megamenu-panel {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
    }
    
    .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        display: block;
    }
    
    .p-megamenu-submenu {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    /* Horizontal */
    .p-megamenu-horizontal {
        align-items: center;
    }
    
    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .p-megamenu-horizontal .p-megamenu-custom,
    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }
    
    /* Vertical */
    .p-megamenu-vertical {
        flex-direction: column;
    }
    
    .p-megamenu-vertical .p-megamenu-root-list {
        flex-direction: column;
    }
    
    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        left: 100%;
        top: 0;
    }
    
    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
        margin-left: auto;
    }
    
    .p-megamenu-grid {
        display: flex;
    }
    
    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: 0.5rem;
    }
    
    .p-megamenu-col-2 {
        width: 16.6667%;
    }
    
    .p-megamenu-col-3 {
        width: 25%;
    }
    
    .p-megamenu-col-4 {
        width: 33.3333%;
    }
    
    .p-megamenu-col-6 {
        width: 50%;
    }
    
    .p-megamenu-col-12 {
        width: 100%;
    }
    
    .p-megamenu-button {
        display: none;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
}
`,$=nn.extend({defaultProps:{__TYPE:"MegaMenu",id:null,model:null,style:null,className:null,orientation:"horizontal",breakpoint:void 0,scrollHeight:"400px",start:null,submenuIcon:null,menuIcon:null,end:null,children:void 0},css:{classes:hn,styles:yn}});function me(i,a){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(i);a&&(t=t.filter(function(d){return Object.getOwnPropertyDescriptor(i,d).enumerable})),r.push.apply(r,t)}return r}function J(i){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?me(Object(r),!0).forEach(function(t){dn(i,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):me(Object(r)).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(r,t))})}return i}var ve=l.memo(l.forwardRef(function(i,a){var r=l.useContext(Qe),t=$.getProps(i,r),d=l.useState(t.id),M=C(d,2),g=M[0],_=M[1],x=l.useState(null),N=C(x,2),f=N[0],b=N[1],ge=l.useState(null),ee=C(ge,2),k=ee[0],be=ee[1],he=l.useState(!1),ne=C(he,2),R=ne[0],j=ne[1],y=l.useRef(null),O=l.useRef(null),W=l.useRef(null),T=t.orientation==="horizontal",Z=t.orientation==="vertical",A=an("screen and (max-width: ".concat(t.breakpoint,")"),!!t.breakpoint),q=$.setMetaData({props:t,state:{id:g,activeItem:f,attributeSelector:k,mobileActive:R}}),m=q.ptm,s=q.cx,ye=q.isUnstyled;tn($.css.styles,ye,{name:"megamenu"});var E=function(e,n,u){return m(n,{context:{active:f===e,item:e,index:u}})},Se=rn({type:"click",listener:function(e){(!A||R)&&Ae(e)&&(b(null),j(!1))}}),we=C(Se,1),Ie=we[0],xe=on({listener:function(){(!A||R)&&(b(null),j(!1))}}),ke=C(xe,1),Ee=ke[0],te=function(e,n){if(n.disabled){e.preventDefault();return}n.url||e.preventDefault(),n.command&&n.command({originalEvent:e,item:n}),b(null),j(!1)},Pe=function(e,n){if(n.disabled||A){e.preventDefault();return}f&&b(n)},Ce=function(e,n){if(n.disabled){e.preventDefault();return}n.url||e.preventDefault(),n.command&&(n.command({originalEvent:e,item:t.item}),e.preventDefault()),n.items&&(b(f&&f===n?null:n),e.preventDefault())},Me=function(e,n){var u=e.currentTarget.parentElement;switch(e.which){case 40:T?ae(n):ie(u),e.preventDefault();break;case 38:Z?oe(u):n.items&&n===f&&re(),e.preventDefault();break;case 39:T?ie(u):ae(n),e.preventDefault();break;case 37:T?oe(u):n.items&&n===f&&re(),e.preventDefault();break}},ae=function(e){e.items&&b(e)},re=function(e){b(null)},_e=function(e){e.preventDefault(),j(function(n){return!n}),b(null)},Ne=function o(e){var n=e.nextElementSibling;return n?I.getAttribute(n,'[data-p-disabled="true"]')||!I.getAttribute(n,'[data-pc-section="menuitem"]')?o(n):n:null},Oe=function o(e){var n=e.previousElementSibling;return n?I.getAttribute(n,'[data-p-disabled="true"]')||!I.getAttribute(n,'[data-pc-section="menuitem"]')?o(n):n:null},ie=function(e){var n=Ne(e);n&&n.children[0].focus()},oe=function(e){var n=Oe(e);n&&n.children[0].focus()},Ae=function(e){return y.current&&!(y.current.isSameNode(e.target)||y.current.contains(e.target)||W.current&&W.current.contains(e.target))};l.useImperativeHandle(a,function(){return{props:t,getElement:function(){return y.current}}}),ln(function(){var o=en();!g&&_(o),t.breakpoint&&!k&&be(o),Ie(),Ee()}),ue(function(){var o=I.findSingle(y.current,".p-menuitem-active > .p-megamenu-panel");return f&&!A&&le.set("menu",o,r&&r.autoZIndex||Q.autoZIndex,r&&r.zIndex.menu||Q.zIndex.menu),A&&o&&o.previousElementSibling.scrollIntoView({block:"nearest",inline:"nearest"}),function(){le.clear(o)}},[f]);var De=function(e){var n=g+"_separator__"+e,u=p({id:n,key:n,className:s("separator"),role:"separator"},m("separator"));return l.createElement("li",u)},ze=function(e){if(e.items){var n=p({className:s("submenuIcon")},m("submenuIcon")),u=Z?t.submenuIcon||l.createElement(pn,n):t.submenuIcon||l.createElement(un,n),c=L.getJSXIcon(u,J({},n),{props:t});return c}return null},Re=function(e,n){if(e.visible===!1)return null;if(e.separator)return De(n);var u=e.id||g+"_"+n,c=v("p-menuitem-link",{"p-disabled":e.disabled}),h=p({className:v(e.icon,s("icon"))},m("icon")),P=p({className:s("label")},m("label")),S=v(e.icon,"p-menuitem-icon"),V=L.getJSXIcon(e.icon,J({},h),{props:t}),F=e.label&&l.createElement("span",P,e.label),Y=p({href:e.url||"#",className:s("action",{item:e}),target:e.target,onClick:function(G){return te(G,e)},role:"menuitem","aria-disabled":e.disabled},E(e,"action",n)),U=p({key:u,id:u,className:v(e.className,s("submenuItem")),style:e.style,role:"none"},E(e,"submenuItem",n)),D=l.createElement("a",Y,V,F,l.createElement(pe,null));if(e.template){var B={onClick:function(G){return te(G,e)},className:c,labelClassName:"p-menuitem-text",iconClassName:S,element:D,props:t};D=H.getJSXElement(e.template,e,B)}return l.createElement("li",U,D)},je=function(e,n){if(e.visible===!1)return null;var u=e.items.map(Re),c=e.id||g+"_sub_"+n,h=p({id:c,key:c,className:v(e.className,s("submenuHeader",{submenu:e})),style:e.style,role:"presentation","data-p-disabled":e.disabled},m("submenuHeader"));return l.createElement(l.Fragment,{key:c},l.createElement("li",h,e.label),u)},Te=function(e){return e.map(je)},Ue=function(e,n,u){var c=e.label+"_column_"+u,h=Te(n),P=p({key:c,className:s("column",{category:e})},m("column")),S=p({className:s("submenu"),style:{display:f===e?"block":"none"},role:"menu"},m("submenu"));return l.createElement("div",P,l.createElement("ul",S,h))},Be=function(e){return e.items?e.items.map(function(n,u){return Ue(e,n,u)}):null},He=function(e){if(e.items){var n=Be(e),u=p({className:s("panel")},m("panel")),c=p({className:s("grid")},m("grid"));return l.createElement("div",u,l.createElement("div",c,n))}return null},Le=function(){if(!O.current){O.current=I.createInlineStyle(r&&r.nonce||Q.nonce);var e="".concat(k),n=`
@media screen and (max-width: `.concat(t.breakpoint,`) {
    .p-megamenu[`).concat(e,`] > .p-megamenu-root-list .p-menuitem-active .p-megamenu-panel {
        position: relative;
        left: 0;
        box-shadow: none;
        border-radius: 0;
        background: inherit;
    }

    .p-megamenu[`).concat(e,`] .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-megamenu[`).concat(e,`] .p-megamenu-grid {
        flex-wrap: wrap;
    }

    `).concat(T?`
.p-megamenu[`.concat(e,`] .p-megamenu-button {
    display: flex;
}

.p-megamenu[`).concat(e,`].p-megamenu-horizontal {
    position: relative;
}

.p-megamenu[`).concat(e,`].p-megamenu-horizontal .p-megamenu-root-list {
    display: none;
}

.p-megamenu-horizontal[`).concat(e,`] div[class*="p-megamenu-col-"] {
    width: auto;
    flex: 1;
    padding: 0;
}

.p-megamenu[`).concat(e,`].p-megamenu-mobile-active .p-megamenu-root-list {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    z-index: 1;
}
        `):"",`

    `).concat(Z?`
.p-megamenu-vertical[`.concat(e,`] {
    width: 100%;
}

.p-megamenu-vertical[`).concat(e,`] .p-megamenu-root-list {
    max-height: `).concat(t.scrollHeight,`;
    overflow: `).concat(t.scrollHeight?"auto":"",`;
}
.p-megamenu-vertical[`).concat(e,`] div[class*="p-megamenu-col-"] {
    width: 100%;
    padding: 0;
}

.p-megamenu-vertical[`).concat(e,`] .p-megamenu-submenu {
    width: 100%;
}

.p-megamenu-vertical[`).concat(e,`] div[class*="p-megamenu-col-"] .p-megamenu-submenu-header {
    background: inherit;
}

.p-megamenu-vertical[`).concat(e,`] .p-submenu-icon:before {
    content: "\\e930";
}
        `):"",`
}
`);O.current.innerHTML=n}},$e=function(){O.current=I.removeInlineStyle(O.current)};ue(function(){return k&&y.current&&(y.current.setAttribute(k,""),Le()),function(){$e()}},[k,t.breakpoint]);var Je=function(e,n){var u=p({className:s("icon")},E(e,"icon",n)),c=L.getJSXIcon(e.icon,J({},u),{props:t}),h=p({className:s("label")},E(e,"label",n)),P=e.label&&l.createElement("span",h,e.label),S=e.template?H.getJSXElement(e.template,e):null,V=ze(e),F=He(e),Y=p({href:e.url||"#",className:s("headerAction",{category:e}),target:e.target,onClick:function(w){return Ce(w,e)},onKeyDown:function(w){return Me(w,e)},role:"menuitem","aria-haspopup":e.items!=null,"data-p-disabled":e.disabled},E(e,"headerAction",n)),U=e.id||g+"_cat_"+n,D=p({key:U,id:U,className:v(e.className,s("menuitem",{category:e,activeItemState:f})),style:e.style,onMouseEnter:function(w){return Pe(w,e)},role:"none","data-p-disabled":e.disabled||!1},E(e,"menuitem",n));return l.createElement("li",D,l.createElement("a",Y,c,P,S,V,l.createElement(pe,null)),F)},Xe=function(){var e=p({className:s("menu"),role:"menubar"},m("menu"));return t.model?l.createElement("ul",e,t.model.map(function(n,u){return Je(n,u)})):null},Ke=function(){var e=p({className:s("start")},m("start"));if(t.start){var n=H.getJSXElement(t.start,t);return l.createElement("div",e,n)}return null},We=function(){var e=p({className:s("end")},m("end"));if(t.end){var n=H.getJSXElement(t.end,t);return l.createElement("div",e,n)}return null},Ze=function(){if(t.orientation==="vertical"||t.model&&t.model.length<1)return null;var e=p({className:s("menuButton"),href:"#",role:"button",tabIndex:0,onClick:function(S){return _e(S)}},m("menuButton")),n=p(m("menuButtonIcon")),u=t.menuIcon||l.createElement(sn,n),c=L.getJSXIcon(u,J({},n),{props:t}),h=l.createElement("a",K({ref:W},e),c);return h},qe=p({className:v(t.className,s("root",{mobileActiveState:R})),style:t.style},$.getOtherProps(t),m("root")),Ve=Xe(),Fe=Ke(),Ye=We(),Ge=Ze();return l.createElement("div",K({id:t.id,ref:y},qe),Fe,Ge,Ve,Ye)}));ve.displayName="MegaMenu";const Nn={title:"Menu/MegaMenu",component:ve,parameters:{layout:"centered"},argTypes:{breakpoint:{control:"text",description:"The breakpoint to define the maximum width boundary when responsiveness is enabled.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},end:{control:"text",description:"The template of trailing element",options:null},menuIcon:{control:"select",description:"Icon to display in the horizontal menu.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},model:{control:"object",description:"An array of menuitems.",options:null},orientation:{control:"select",description:"Defines the orientation, valid values are horizontal and vertical.",options:["horizontal","vertical"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},scrollHeight:{control:"text",description:"Maximum height of the options panel on responsive mode.",options:null},start:{control:"text",description:"The template of starting element.",options:null},submenuIcon:{control:"select",description:"Icon of the submenu.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},X={args:{unstyled:!1,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var ce,de,fe;X.parameters={...X.parameters,docs:{...(ce=X.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(fe=(de=X.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};const On=["Default"];export{X as Default,On as __namedExportsOrder,Nn as default};
//# sourceMappingURL=MegaMenu.stories-4657a03c.js.map
