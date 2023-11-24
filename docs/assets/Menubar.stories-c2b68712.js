import{r as l}from"./index-76fb7be0.js";import{P as Pe,m as d,c as P,U as Ee,Z as V,b as ae,O as ne,I as te,D as _}from"./api.esm-2e2d159c.js";import{C as Oe,u as xe}from"./componentbase.esm-b0caea1e.js";import{c as me,d as fe,e as be,f as ke}from"./hooks.esm-c93f10ee.js";import{B as De}from"./index.esm-87179d0c.js";import{A as Ce}from"./index.esm-d5235214.js";import{A as Ne}from"./index.esm-958628e1.js";import{R as je}from"./ripple.esm-cba91116.js";import"./_commonjsHelpers-de833af9.js";import"./iconbase.esm-439d6f79.js";function D(e){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(e)}function Ae(e,t){if(D(e)!=="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t||"default");if(D(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Me(e){var t=Ae(e,"string");return D(t)==="symbol"?t:String(t)}function de(e,t,i){return t=Me(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _e(e){if(Array.isArray(e))return e}function Re(e,t){var i=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var a,c,s,f,p=[],b=!0,w=!1;try{if(s=(i=i.call(e)).next,t===0){if(Object(i)!==i)return;b=!1}else for(;!(b=(a=s.call(i)).done)&&(p.push(a.value),p.length!==t);b=!0);}catch(v){w=!0,c=v}finally{try{if(!b&&i.return!=null&&(f=i.return(),Object(f)!==f))return}finally{if(w)throw c}}return p}}function oe(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function Te(e,t){if(e){if(typeof e=="string")return oe(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return oe(e,t)}}function Ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(e,t){return _e(e)||Re(e,t)||Te(e,t)||Ue()}var Ke={start:"p-menubar-start",end:"p-menubar-end",button:"p-menubar-button",root:function(t){var i=t.mobileActiveState;return P("p-menubar p-component",{"p-menubar-mobile-active":i})},separator:"p-menu-separator",icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",menuitem:function(t){var i=t.item,a=t.activeItemState;return P("p-menuitem",{"p-menuitem-active":a===i})},menu:"p-menubar-root-list",submenu:"p-submenu-list",action:function(t){var i=t.item;return P("p-menuitem-link",{"p-disabled":i.disabled})}},Le=`
@layer primereact {
    .p-menubar {
        display: flex;
        align-items: center;
    }
    
    .p-menubar ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    .p-menubar .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }
    
    .p-menubar .p-menuitem-text {
        line-height: 1;
    }
    
    .p-menubar .p-menuitem {
        position: relative;
    }
    
    .p-menubar-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .p-menubar-root-list > li ul {
        display: none;
        z-index: 1;
    }
    
    .p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
        display: block;
    }
    
    .p-menubar .p-submenu-list {
        display: none;
        position: absolute;
        z-index: 1;
    }
    
    .p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {
        display: block;
        left: 100%;
        top: 0;
    }
    
    .p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }
    
    .p-menubar .p-menubar-custom,
    .p-menubar .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }
    
    .p-menubar-button {
        display: none;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
}
`,R=Oe.extend({defaultProps:{__TYPE:"Menubar",id:null,model:null,style:null,className:null,start:null,submenuIcon:null,menuIcon:null,end:null,children:void 0},css:{classes:Ke,styles:Le}});function le(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),i.push.apply(i,a)}return i}function ee(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?le(Object(i),!0).forEach(function(a){de(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):le(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}var re=l.memo(l.forwardRef(function(e,t){var i=l.useState(null),a=k(i,2),c=a[0],s=a[1],f=e.ptm,p=e.cx,b=function(n,r){return f(r,{props:e,hostName:e.hostName,context:{active:c===n}})},w=me({type:"click",listener:function(n){t&&t.current&&!t.current.contains(n.target)&&s(null)}}),v=k(w,1),E=v[0],U=function(n,r){if(r.disabled||e.mobileActive){n.preventDefault();return}e.root?(c||e.popup)&&s(r):s(r)},g=function(n,r){if(r.disabled){n.preventDefault();return}r.url||n.preventDefault(),r.command&&r.command({originalEvent:n,item:r}),r.items?s(c&&r===c?null:r):N()},S=function(n,r){var o=n.currentTarget.parentElement;switch(n.which){case 40:e.root?r.items&&y(r,o):K(o),n.preventDefault();break;case 38:!e.root&&C(o),n.preventDefault();break;case 39:if(e.root){var m=x(o);m&&m.children[0].focus()}else r.items&&y(r,o);n.preventDefault();break;case 37:e.root&&C(o),n.preventDefault();break}e.onKeyDown&&e.onKeyDown(n,o)},O=function(n,r){e.root?n.which===38&&r.previousElementSibling==null&&I(r):n.which===37&&I(r)},y=function(n,r){s(n),setTimeout(function(){r.children[1].children[0].children[0].focus()},50)},I=function(n){s(null),n.parentElement.previousElementSibling.focus()},K=function(n){var r=x(n);r&&r.children[0].focus()},C=function(n){var r=L(n);r&&r.children[0].focus()},x=function u(n){var r=n.nextElementSibling;return r?_.getAttribute(r,'[data-p-disabled="true"]')||!_.getAttribute(r,'[data-pc-section="menuitem"]')?u(r):r:null},L=function u(n){var r=n.previousElementSibling;return r?_.getAttribute(r,'[data-p-disabled="true"]')||!_.getAttribute(r,'[data-pc-section="menuitem"]')?u(r):r:null},N=function(){s(null),e.onLeafClick&&e.onLeafClick()};fe(function(){E()}),be(function(){!e.parentActive&&s(null)},[e.parentActive]);var j=function(n){var r=e.id+"_separator_"+n,o=d({id:r,key:r,className:p("separator"),role:"separator"},f("separator",{hostName:e.hostName}));return l.createElement("li",o)},B=function(n,r){return n.items?l.createElement(re,{id:e.id+"_"+r,hostName:e.hostName,menuProps:e.menuProps,model:n.items,mobileActive:e.mobileActive,onLeafClick:N,onKeyDown:O,parentActive:n===c,submenuIcon:e.submenuIcon,ptm:f,cx:p}):null},$=function(n,r){if(n.visible===!1)return null;var o=n.id||e.id+"_"+r,m=P("p-menuitem-link",{"p-disabled":n.disabled}),Z=P("p-menuitem-icon",n.icon),q=d({className:p("icon")},b(n,"icon")),Y=te.getJSXIcon(n.icon,ee({},q),{props:e.menuProps}),ie=d({className:p("label")},b(n,"label")),F=n.label&&l.createElement("span",ie,n.label),ge="p-submenu-icon",G=d({className:p("submenuIcon")},b(n,"submenuIcon")),ye=n.items&&te.getJSXIcon(e.root?e.submenuIcon||l.createElement(Ce,G):e.submenuIcon||l.createElement(Ne,G),ee({},G),{props:ee({menuProps:e.menuProps},e)}),he=B(n,r),Ie=d({href:n.url||"#",role:"menuitem",className:p("action",{item:n}),target:n.target,"aria-haspopup":n.items!=null,onClick:function(h){return g(h,n)},onKeyDown:function(h){return S(h,n)}},b(n,"action")),Q=l.createElement("a",Ie,Y,F,ye,l.createElement(je,null));if(n.template){var we={onClick:function(h){return g(h,n)},onKeyDown:function(h){return S(h,n)},className:m,labelClassName:"p-menuitem-text",iconClassName:Z,submenuIconClassName:ge,element:Q,props:e};Q=ne.getJSXElement(n.template,n,we)}var Se=d({id:o,key:o,role:"none",className:P(n.className,p("menuitem",{item:n,activeItemState:c})),onMouseEnter:function(h){return U(h,n)},"data-p-disabled":n.disabled||!1},b(n,"menuitem"));return l.createElement("li",Se,Q,he)},z=function(n,r){return n.separator?j(r):$(n,r)},J=function(){return e.model?e.model.map(z):null},X=e.root?"menubar":"menu",A=e.root?"menu":"submenu",H=J(),W=d({ref:t,className:p(A),style:!e.root&&{display:e.parentActive?"block":"none"},role:X},f(A));return l.createElement("ul",W,H)}));re.displayName="MenubarSub";function ue(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),i.push.apply(i,a)}return i}function Be(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?ue(Object(i),!0).forEach(function(a){de(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ue(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}var ve=l.memo(l.forwardRef(function(e,t){var i=l.useContext(Pe),a=R.getProps(e,i),c=l.useState(a.id),s=k(c,2),f=s[0],p=s[1],b=l.useState(!1),w=k(b,2),v=w[0],E=w[1],U=l.useRef(null),g=l.useRef(null),S=l.useRef(null),O=R.setMetaData({props:a,state:{id:f,mobileActive:v}}),y=O.ptm,I=O.cx,K=O.isUnstyled;xe(R.css.styles,K,{name:"menubar"});var C=me({type:"click",listener:function(o){v&&$(o)&&E(!1)}}),x=k(C,2),L=x[0],N=x[1],j=function(o){o.preventDefault(),E(function(m){return!m})},B=function(){E(!1)},$=function(o){return g.current!==o.target&&!g.current.contains(o.target)&&S.current!==o.target&&!S.current.contains(o.target)};fe(function(){f||p(Ee())}),be(function(){v?(V.set("menu",g.current,i&&i.autoZIndex||ae.autoZIndex,i&&i.zIndex.menu||ae.zIndex.menu),L()):(N(),V.clear(g.current))},[v]),ke(function(){V.clear(g.current)}),l.useImperativeHandle(t,function(){return{props:a,toggle:j,getElement:function(){return U.current},getRootMenu:function(){return g.current},getMenuButton:function(){return S.current}}});var z=function(){if(a.start){var o=ne.getJSXElement(a.start,a),m=d({className:I("start")},y("start"));return l.createElement("div",m,o)}return null},J=function(){if(a.end){var o=ne.getJSXElement(a.end,a),m=d({className:I("end")},y("end"));return l.createElement("div",m,o)}return null},X=function(){if(a.model&&a.model.length<1)return null;var o=d({ref:S,href:"#",role:"button",tabIndex:0,className:I("button"),onClick:function(F){return j(F)}},y("button")),m=d(y("popupIcon")),Z=a.menuIcon||l.createElement(De,m),q=te.getJSXIcon(Z,Be({},m),{props:a}),Y=l.createElement("a",o,q);return Y},A=z(),H=J(),W=X(),u=l.createElement(re,{hostName:"Menubar",id:f,ref:g,menuProps:a,model:a.model,root:!0,mobileActive:v,onLeafClick:B,submenuIcon:a.submenuIcon,ptm:y,cx:I}),n=d({id:a.id,className:P(a.className,I("root",{mobileActiveState:v})),style:a.style},R.getOtherProps(a),y("root"));return l.createElement("div",n,A,W,u,H)}));ve.displayName="Menubar";const Ge={title:"Menu/Menubar",component:ve,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},end:{control:"text",description:"The template of trailing element.",options:null},menuIcon:{control:"select",description:"Icon of the menu.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},model:{control:"object",description:"An array of menuitems.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},start:{control:"text",description:"The template of starting element.",options:null},submenuIcon:{control:"select",description:"Icon of the submenu.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},T={args:{unstyled:!1,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var ce,se,pe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(se=T.parameters)==null?void 0:se.docs)==null?void 0:pe.source}}};const Qe=["Default"];export{T as Default,Qe as __namedExportsOrder,Ge as default};
//# sourceMappingURL=Menubar.stories-c2b68712.js.map
