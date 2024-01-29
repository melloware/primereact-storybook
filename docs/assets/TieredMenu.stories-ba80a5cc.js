import{r as a}from"./index-76fb7be0.js";import{P as Ce,c as _,a as A,m as w,D as m,U as Ne,Z as ie,I as ce,O as De}from"./api.esm-e57be548.js";import{C as Re,u as je}from"./componentbase.esm-f35515f0.js";import{C as Ae}from"./csstransition.esm-2b0eb2be.js";import{i as Le,h as He,a as ye,b as oe,c as Ue,g as Ke,d as ze}from"./hooks.esm-2e882e60.js";import{O as We}from"./overlayservice.esm-f3934ea7.js";import{P as Ze}from"./portal.esm-d730a851.js";import{A as $e}from"./index.esm-a343626e.js";import{R as Be}from"./ripple.esm-42b8b102.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-64142d35.js";function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ae.apply(this,arguments)}function Je(e){if(Array.isArray(e))return e}function Ve(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n,p,s,v,b=[],g=!0,y=!1;try{if(s=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;g=!1}else for(;!(g=(n=s.call(t)).done)&&(b.push(n.value),b.length!==r);g=!0);}catch(E){y=!0,p=E}finally{try{if(!g&&t.return!=null&&(v=t.return(),Object(v)!==v))return}finally{if(y)throw p}}return b}}function pe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Xe(e,r){if(e){if(typeof e=="string")return pe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return pe(e,r)}}function qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(e,r){return Je(e)||Ve(e,r)||Xe(e,r)||qe()}var Ye={root:function(r){var t=r.props,n=r.context;return _("p-tieredmenu p-component",{"p-tieredmenu-overlay":t.popup,"p-input-filled":n&&n.inputStyle==="filled"||A.inputStyle==="filled","p-ripple-disabled":n&&n.ripple===!1||A.ripple===!1},t.className)},separator:"p-menu-separator",icon:function(r){var t=r._icon;return _("p-menuitem-icon",t)},label:"p-menuitem-text",submenuIcon:"p-submenu-icon",action:function(r){var t=r.disabled;return _("p-menuitem-link",{"p-disabled":t})},menuitem:function(r){var t=r._className,n=r.active;return _("p-menuitem",{"p-menuitem-active":n},t)},menu:function(r){var t=r.subProps;return _({"p-submenu-list":!t.root})},submenu:function(r){var t=r.subProps;return _({"p-submenu-list":!t.root})},transition:"p-connected-overlay"},Fe={submenu:function(r){var t=r.subProps;return{display:!t.root&&t.parentActive?"block":"none"}}},Ge=`
@layer primereact {
    .p-tieredmenu-overlay {
        position: absolute;
    }
    
    .p-tieredmenu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    .p-tieredmenu .p-submenu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        display: none;
    }
    
    .p-tieredmenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }
    
    .p-tieredmenu .p-menuitem-text {
        line-height: 1;
    }
    
    .p-tieredmenu .p-menuitem {
        position: relative;
    }
    
    .p-tieredmenu .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }
    
    .p-tieredmenu .p-menuitem-active > .p-submenu-list {
        display: block;
        left: 100%;
        top: 0;
    }
    
    .p-tieredmenu .p-menuitem-active > .p-submenu-list-flipped {
        left: -100%;
    }
}
`,X=Re.extend({defaultProps:{__TYPE:"TieredMenu",id:null,model:null,popup:!1,style:null,className:null,autoZIndex:!0,baseZIndex:0,breakpoint:void 0,scrollHeight:"400px",appendTo:null,transitionOptions:null,onShow:null,onHide:null,submenuIcon:null,children:void 0},css:{classes:Ye,styles:Ge,inlineStyles:Fe}});function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},L(e)}function Qe(e,r){if(L(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(L(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function en(e){var r=Qe(e,"string");return L(r)==="symbol"?r:String(r)}function nn(e,r,t){return r=en(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function me(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,n)}return t}function de(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?me(Object(t),!0).forEach(function(n){nn(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var le=a.memo(function(e){var r=a.useState(null),t=k(r,2),n=t[0],p=t[1],s=a.useRef(null),v=e.ptm,b=e.cx,g=e.sx,y=function(i,o){return v(o,{hostName:e.hostName,context:{active:n===i}})},E=Ke({type:"click",listener:function(i){!e.isMobileMode&&s.current&&!s.current.contains(i.target)&&p(null)}}),H=k(E,1),Y=H[0],U=ze({listener:function(){!e.isMobileMode&&p(null)}}),h=k(U,1),F=h[0],C=function(){if(s.current){var i=s.current.parentElement,o=m.getOffset(i),f=m.getViewport(),M=s.current.offsetParent?s.current.offsetWidth:m.getHiddenElementOuterWidth(s.current),O=m.getOuterWidth(i.children[0]),I=parseInt(o.top,10)+s.current.offsetHeight-m.getWindowScrollTop();I>f.height?s.current.style.top=f.height-I+"px":s.current.style.top="0px",parseInt(o.left,10)+O+M>f.width-m.calculateScrollbarWidth()&&m.addClass(s.current,"p-submenu-list-flipped")}},D=function(i,o){if(o.disabled||e.isMobileMode){i.preventDefault();return}e.root?(n||e.popup)&&p(o):p(o)},N=function(i,o){if(o.disabled){i.preventDefault();return}o.url||i.preventDefault(),o.command&&o.command({originalEvent:i,item:o}),(e.root||e.isMobileMode)&&o.items&&p(n&&o===n?null:o),o.items||P(i)},K=function(i,o){var f=i.currentTarget.parentElement;switch(i.which){case 40:var M=d(f);M&&M.children[0].focus(),i.preventDefault();break;case 38:var O=S(f);O&&O.children[0].focus(),i.preventDefault();break;case 39:o.items&&(p(o),setTimeout(function(){f.children[1].children[0].children[0].focus()},50)),i.preventDefault();break}e.onKeyDown&&e.onKeyDown(i,f)},G=function(i,o){i.which===37&&(p(null),o.parentElement.previousElementSibling.focus())},d=function u(i){var o=i.nextElementSibling;return o?m.hasClass(o,"p-disabled")||!m.hasClass(o,"p-menuitem")?u(o):o:null},S=function u(i){var o=i.previousElementSibling;return o?m.hasClass(o,"p-disabled")||!m.hasClass(o,"p-menuitem")?u(o):o:null},P=function(i){(!e.isMobileMode||e.popup)&&(p(null),e.onLeafClick&&e.onLeafClick(i),e.onHide&&e.onHide(i))};ye(function(){Y(),F()}),oe(function(){e.parentActive||p(null),!e.root&&e.parentActive&&!e.isMobileMode&&C()},[e.parentActive]),oe(function(){e.onItemToggle&&e.onItemToggle()},[n]);var z=function(i){var o="separator_"+i,f=w({key:o,className:b("separator"),role:"separator"},v("separator",{hostName:e.hostName}));return a.createElement("li",f)},Q=function(i,o){return i.items?a.createElement(le,{id:e.id+"_"+o,menuProps:e.menuProps,model:i.items,onLeafClick:P,popup:e.popup,onKeyDown:G,parentActive:i===n,isMobileMode:e.isMobileMode,onItemToggle:e.onItemToggle,submenuIcon:e.submenuIcon,ptm:e.ptm,cx:b,sx:g}):null},W=function(i,o){if(i.visible===!1)return null;var f=i.id,M=i.className,O=i.style,I=i.disabled,j=i.icon,$=i.label,B=i.items,c=i.target,l=i.url,T=i.template,J=f||e.id+"_"+o,ue=n===i,ge=_("p-menuitem-link",{"p-disabled":I}),Se=_("p-menuitem-icon",j),Ie=w({className:b("icon",{_icon:j})},y(i,"icon")),xe=ce.getJSXIcon(j,de({},Ie),{props:e.menuProps}),we=w({className:b("label")},y(i,"label")),Ee=$&&a.createElement("span",we,$),Pe="p-submenu-icon",se=w({className:b("submenuIcon")},y(i,"submenuIcon")),Me=i.items&&ce.getJSXIcon(e.submenuIcon||a.createElement($e,se),de({},se),{props:e.menuProps}),Oe=Q(i,o),Te=w({href:l||"#",className:b("action",{disabled:I}),target:c,role:"menuitem","aria-haspopup":B!=null,onClick:function(x){return N(x,i)},onKeyDown:function(x){return K(x,i)},"aria-disabled":I},y(i,"action")),re=a.createElement("a",Te,xe,Ee,Me,a.createElement(Be,null));if(T){var _e={onClick:function(x){return N(x,i)},onKeyDown:function(x){return K(x,i)},className:ge,labelClassName:"p-menuitem-text",iconClassName:Se,submenuIconClassName:Pe,element:re,props:e,active:ue,disabled:I};re=De.getJSXElement(T,i,_e)}var ke=w({key:J,id:J,className:b("menuitem",{_className:M,active:ue}),style:O,onMouseEnter:function(x){return D(x,i)},role:"none"},y(i,"menuitem"));return a.createElement("li",ke,re,Oe)},ee=function(i,o){return i.separator?z(o):W(i,o)},ne=function(){return e.model?e.model.map(ee):null},te=ne(),R=e.root?"menu":"submenu",Z=w({ref:s,className:b(R,{subProps:e}),style:g(R,{subProps:e}),role:e.root?"menubar":"menu","aria-orientation":"horizontal"},v(R,{hostName:e.hostName}));return a.createElement("ul",Z,te)});le.displayName="TieredMenuSub";var he=a.memo(a.forwardRef(function(e,r){var t=a.useContext(Ce),n=X.getProps(e,t),p=a.useState(n.id),s=k(p,2),v=s[0],b=s[1],g=a.useState(!n.popup),y=k(g,2),E=y[0],H=y[1],Y=a.useState(null),U=k(Y,2),h=U[0],F=U[1],C=X.setMetaData({props:n,state:{id:v,visible:E,attributeSelector:h}}),D=C.ptm,N=C.cx,K=C.sx,G=C.isUnstyled;je(X.css.styles,G,{name:"tieredmenu"});var d=a.useRef(null),S=a.useRef(null),P=a.useRef(null),z=Le("screen and (max-width: ".concat(n.breakpoint,")"),!!n.breakpoint),Q=He({target:S,overlay:d,listener:function(l,T){var J=T.valid;J&&u(l)},when:E}),W=k(Q,2),ee=W[0],ne=W[1],te=function(l){n.popup&&We.emit("overlay-click",{originalEvent:l,target:S.current})},R=function(l){n.popup&&(E?u(l):Z(l))},Z=function(l){S.current=l.currentTarget,H(!0),n.onShow&&n.onShow(l)},u=function(l){n.popup&&(S.current=l.currentTarget,H(!1),n.onHide&&n.onHide(l))},i=function(){n.popup&&z&&m.absolutePosition(d.current,S.current)},o=function(){if(!P.current){P.current=m.createInlineStyle(t&&t.nonce||A.nonce);var l="".concat(h),T=`
@media screen and (max-width: `.concat(n.breakpoint,`) {
    .p-tieredmenu[`).concat(l,`] > ul {
        max-height: `).concat(n.scrollHeight,`;
        overflow: `).concat(n.scrollHeight?"auto":"",`;
    }

    .p-tieredmenu[`).concat(l,`] .p-submenu-list {
        position: relative;
    }

    .p-tieredmenu[`).concat(l,`] .p-menuitem-active > .p-submenu-list {
        left: 0;
        box-shadow: none;
        border-radius: 0;
        padding: 0 0 0 calc(var(--inline-spacing) * 2); /* @todo */
    }

    .p-tieredmenu[`).concat(l,`] .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-tieredmenu[`).concat(l,`] .p-submenu-icon:before {
        content: "\\e930";
    }

    `).concat(n.popup?"":".p-tieredmenu[".concat(l,"] { width: 100%; }"),`
}
`);P.current.innerHTML=T}},f=function(){P.current=m.removeInlineStyle(P.current)},M=function(){n.autoZIndex&&ie.set("menu",d.current,t&&t.autoZIndex||A.autoZIndex,n.baseZIndex||t&&t.zIndex.menu||A.zIndex.menu),m.addStyles(d.current,{position:"absolute",top:"0",left:"0"}),m.absolutePosition(d.current,S.current),h&&n.breakpoint&&(d.current.setAttribute(h,""),o())},O=function(){ee()},I=function(){S.current=null,ne()},j=function(){ie.clear(d.current),f()};ye(function(){var c=Ne();!v&&b(c),n.breakpoint&&!h&&F(c)}),oe(function(){return h&&d.current&&(d.current.setAttribute(h,""),o()),function(){f()}},[h,n.breakpoint]),Ue(function(){ie.clear(d.current)}),a.useImperativeHandle(r,function(){return{props:n,toggle:R,show:Z,hide:u,getElement:function(){return d.current}}});var $=function(){var l=w({ref:d,id:n.id,className:N("root"),style:n.style,onClick:te},X.getOtherProps(n),D("root")),T=w({classNames:N("transition"),in:E,timeout:{enter:120,exit:100},options:n.transitionOptions,unmountOnExit:!0,onEnter:M,onEntered:O,onExit:I,onExited:j},D("transition"));return a.createElement(Ae,ae({nodeRef:d},T),a.createElement("div",l,a.createElement(le,{id:v,hostName:"TieredMenu",menuProps:n,model:n.model,root:!0,popup:n.popup,onHide:u,isMobileMode:z,onItemToggle:i,submenuIcon:n.submenuIcon,ptm:D,cx:N,sx:K})))},B=$();return n.popup?a.createElement(Ze,{element:B,appendTo:n.appendTo}):B}));he.displayName="TieredMenu";const vn={title:"Menu/TieredMenu",component:he,parameters:{layout:"centered"},argTypes:{appendTo:{control:"select",description:"DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.",options:["null","HTMLElement","self"]},autoZIndex:{control:"boolean",description:"Whether to automatically manage layering.",options:null},baseZIndex:{control:"number",description:"Whether to automatically manage layering.",options:null},breakpoint:{control:"text",description:"The breakpoint to define the maximum width boundary when responsiveness is enabled.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},model:{control:"object",description:"An array of menuitems.",options:null},popup:{control:"boolean",description:"Defines if menu would displayed as a popup.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},scrollHeight:{control:"text",description:"Maximum height of the options panel on responsive mode.",options:null},submenuIcon:{control:"select",description:"Icon of the submenu.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},q={args:{unstyled:!1,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var fe,be,ve;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ve=(be=q.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};const yn=["Default"];export{q as Default,yn as __namedExportsOrder,vn as default};
