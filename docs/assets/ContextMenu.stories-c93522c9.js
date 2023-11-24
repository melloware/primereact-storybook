import{r as s}from"./index-76fb7be0.js";import{P as He,c as H,b as A,m as S,D as f,U as Ae,Z as J,I as me,O as Ue}from"./api.esm-2e2d159c.js";import{C as $e,u as ze}from"./componentbase.esm-b0caea1e.js";import{C as xe}from"./csstransition.esm-653f5084.js";import{j as We,c as fe,b as Ze,d as Be,e as Y,f as Ve}from"./hooks.esm-c93f10ee.js";import{P as Xe}from"./portal.esm-c66f0cf3.js";import{A as Je}from"./index.esm-958628e1.js";import{R as qe}from"./ripple.esm-cba91116.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-439d6f79.js";function R(){return R=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},R.apply(this,arguments)}function Ke(e){if(Array.isArray(e))return e}function Ye(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n,b,p,h,v=[],m=!0,y=!1;try{if(p=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;m=!1}else for(;!(m=(n=p.call(t)).done)&&(v.push(n.value),v.length!==r);m=!0);}catch(g){y=!0,b=g}finally{try{if(!m&&t.return!=null&&(h=t.return(),Object(h)!==h))return}finally{if(y)throw b}}return v}}function de(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Fe(e,r){if(e){if(typeof e=="string")return de(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return de(e,r)}}function Ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(e,r){return Ke(e)||Ye(e,r)||Fe(e,r)||Ge()}var Qe=`
@layer primereact {
    .p-contextmenu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    .p-contextmenu .p-submenu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
    }
    
    .p-contextmenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }
    
    .p-contextmenu .p-menuitem-text {
        line-height: 1;
    }
    
    .p-contextmenu .p-menuitem {
        position: relative;
    }
    
    .p-contextmenu .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }
    
    .p-contextmenu-enter {
        opacity: 0;
    }
    
    .p-contextmenu-enter-active {
        opacity: 1;
        transition: opacity 250ms;
    }
}
`,et={root:function(r){var t=r.context;return H("p-contextmenu p-component",{"p-input-filled":t&&t.inputStyle==="filled"||A.inputStyle==="filled","p-ripple-disabled":t&&t.ripple===!1||A.ripple===!1})},menu:function(r){var t=r.menuProps;return H({"p-submenu-list":!t.root})},menuitem:function(r){var t=r.item,n=r.active;return H("p-menuitem",{"p-menuitem-active":n},t.className)},action:function(r){var t=r.item;return H("p-menuitem-link",{"p-disabled":t.disabled})},icon:"p-menuitem-icon",submenuIcon:"p-submenu-icon",label:"p-menuitem-text",separator:"p-menu-separator",transition:"p-contextmenu",submenuTransition:"p-contextmenusub"},q=$e.extend({defaultProps:{__TYPE:"ContextMenu",id:null,model:null,style:null,className:null,global:!1,autoZIndex:!0,baseZIndex:0,breakpoint:void 0,scrollHeight:"400px",appendTo:null,transitionOptions:null,onShow:null,onHide:null,submenuIcon:null,children:void 0},css:{classes:et,styles:Qe}});function U(e){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},U(e)}function tt(e,r){if(U(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(U(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function nt(e){var r=tt(e,"string");return U(r)==="symbol"?r:String(r)}function ie(e,r,t){return r=nt(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function be(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(b){return Object.getOwnPropertyDescriptor(e,b).enumerable})),t.push.apply(t,n)}return t}function ve(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?be(Object(t),!0).forEach(function(n){ie(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var ae=s.memo(function(e){var r=s.useState(null),t=I(r,2),n=t[0],b=t[1],p=s.useRef(null),h=e.root||!e.resetMenu,v=e.ptm,m=e.cx,y=function(o,i){return v(i,{hostName:e.hostName,context:{active:n===o}})};e.resetMenu===!0&&n!==null&&b(null);var g=function(o,i){if(i.disabled||e.isMobileMode){o.preventDefault();return}b(i)},k=function(o,i){if(i.disabled){o.preventDefault();return}i.url||o.preventDefault(),i.command&&i.command({originalEvent:o,item:i}),e.isMobileMode&&i.items&&b(n&&i===n?null:i),i.items||e.onLeafClick(o)},$=function(){if(!e.isMobileMode){var o=p.current.parentElement,i=f.getOffset(o),d=f.getViewport(),x=p.current.offsetParent?p.current.offsetWidth:f.getHiddenElementOuterWidth(p.current),_=f.getOuterWidth(o.children[0]),u=parseInt(i.top,10)+p.current.offsetHeight-f.getWindowScrollTop();u>d.height?p.current.style.top=d.height-u+"px":p.current.style.top="0px",parseInt(i.left,10)+_+x>d.width-f.calculateScrollbarWidth()?p.current.style.left=-1*x+"px":p.current.style.left=_+"px"}},z=function(){$()};Y(function(){h&&$()});var N=function(o){var i=e.id+"_separator_"+o,d=S({id:i,key:i,className:m("separator"),role:"separator"},v("separator",{hostName:e.hostName}));return s.createElement("li",d)},L=function(o,i){return o.items?s.createElement(ae,{id:e.id+"_"+i,hostName:e.hostName,menuProps:e.menuProps,model:o.items,resetMenu:o!==n,onLeafClick:e.onLeafClick,isMobileMode:e.isMobileMode,submenuIcon:e.submenuIcon,ptm:v,cx:m}):null},F=function(o,i){if(o.visible===!1)return null;var d=n===o,x=o.id||e.id+"_"+i,_=S({className:m("icon")},y(o,"icon")),u=me.getJSXIcon(o.icon,ve({},_),{props:e.menuProps}),E=S({className:m("submenuIcon")},y(o,"submenuIcon")),P=S({className:m("label")},y(o,"label")),Q=o.items&&me.getJSXIcon(e.submenuIcon||s.createElement(Je,E),ve({},E),{props:e.menuProps}),ee=o.label&&s.createElement("span",P,o.label),B=L(o,i),te=S({href:o.url||"#",className:m("action",{item:o}),target:o.target,onClick:function(C){return k(C,o)},role:"menuitem","aria-haspopup":o.items!=null,"aria-disabled":o.disabled},y(o,"action")),T=s.createElement("a",te,u,ee,Q,s.createElement(qe,null));if(o.template){var ne={onClick:function(C){return k(C,o)},className:"p-menuitem-link",labelClassName:"p-menuitem-text",iconClassName:"p-menuitem-icon",submenuIconClassName:m("submenuIcon"),element:T,props:e,active:d};T=Ue.getJSXElement(o.template,o,ne)}var re=S(ie(ie({id:x,key:x,role:"none",className:m("menuitem",{item:o,active:d}),style:o.style},"key",x),"onMouseEnter",function(C){return g(C,o)}),y(o,"menuitem"));return s.createElement("li",re,T,B)},W=function(o,i){return o.separator?N(i):F(o,i)},D=function(){return e.model?e.model.map(W):null},w=D(),G=S({className:m("menu",{menuProps:e})},v("menu",{hostName:e.hostName})),Z=S({classNames:m("submenuTransition"),in:h,timeout:{enter:0,exit:0},unmountOnExit:!0,onEnter:z},v("menu.transition",{hostName:e.hostName}));return s.createElement(xe,R({nodeRef:p},Z),s.createElement("ul",R({ref:p},G),w))});ae.displayName="ContextMenuSub";var Se=s.memo(s.forwardRef(function(e,r){var t=s.useContext(He),n=q.getProps(e,t),b=s.useState(n.id),p=I(b,2),h=p[0],v=p[1],m=s.useState(!1),y=I(m,2),g=y[0],k=y[1],$=s.useState(!1),z=I($,2),N=z[0],L=z[1],F=s.useState(!1),W=I(F,2),D=W[0],w=W[1],G=s.useState(null),Z=I(G,2),c=Z[0],o=Z[1],i=q.setMetaData({props:n,state:{id:h,visible:g,reshow:N,resetMenu:D,attributeSelector:c}}),d=i.ptm,x=i.cx,_=i.isUnstyled;ze(q.css.styles,_,{name:"contextmenu"});var u=s.useRef(null),E=s.useRef(null),P=s.useRef(null),Q=We("screen and (max-width: ".concat(n.breakpoint,")"),!!n.breakpoint),ee=fe({type:"click",listener:function(a){Ne(a)&&a.button!==2&&(V(a),w(!0))}}),B=I(ee,2),te=B[0],T=B[1],ne=fe({type:"contextmenu",when:n.global,listener:function(a){oe(a)}}),re=I(ne,1),j=re[0],C=Ze({listener:function(a){g&&!f.isTouchDevice()&&V(a)}}),ue=I(C,2),Ee=ue[0],Me=ue[1],se=function(){if(!P.current){P.current=f.createInlineStyle(t&&t.nonce||A.nonce);var a="".concat(c),M=`
@media screen and (max-width: `.concat(n.breakpoint,`) {
    .p-contextmenu[`).concat(a,`] > ul {
        max-height: `).concat(n.scrollHeight,`;
        overflow: `).concat(n.scrollHeight?"auto":"",`;
    }

    .p-contextmenu[`).concat(a,`] .p-submenu-list {
        position: relative;
    }

    .p-contextmenu[`).concat(a,`] .p-menuitem-active > .p-submenu-list {
        left: 0;
        box-shadow: none;
        border-radius: 0;
        padding: 0 0 0 calc(var(--inline-spacing) * 2); /* @todo */
    }

    .p-contextmenu[`).concat(a,`] .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-contextmenu[`).concat(a,`] .p-submenu-icon:before {
        content: "\\e930";
    }
}
`);P.current.innerHTML=M}},le=function(){P.current=f.removeInlineStyle(P.current)},Ie=function(){w(!1)},we=function(){w(!1)},oe=function(a){a.stopPropagation(),a.preventDefault(),E.current=a,g?L(!0):(k(!0),n.onShow&&n.onShow(E.current))},V=function(a){E.current=a,k(!1),L(!1),n.onHide&&n.onHide(E.current)},Pe=function(){f.addStyles(u.current,{position:"absolute"}),n.autoZIndex&&J.set("menu",u.current,t&&t.autoZIndex||A.autoZIndex,n.baseZIndex||t&&t.zIndex.menu||A.zIndex.menu),_e(E.current),c&&n.breakpoint&&(u.current.setAttribute(c,""),se())},Ce=function(){Le()},Oe=function(){De(),J.clear(u.current)},ke=function(){J.clear(u.current),le()},_e=function(a){if(a){var M=a.pageX+1,O=a.pageY+1,X=u.current.offsetParent?u.current.offsetWidth:f.getHiddenElementOuterWidth(u.current),ce=u.current.offsetParent?u.current.offsetHeight:f.getHiddenElementOuterHeight(u.current),pe=f.getViewport();M+X-document.body.scrollLeft>pe.width&&(M-=X),O+ce-document.body.scrollTop>pe.height&&(O-=ce),M<document.body.scrollLeft&&(M=document.body.scrollLeft),O<document.body.scrollTop&&(O=document.body.scrollTop),u.current.style.left=M+"px",u.current.style.top=O+"px"}},Re=function(a){w(!0),V(a),a.stopPropagation()},Ne=function(a){return u&&u.current&&!(u.current.isSameNode(a.target)||u.current.contains(a.target))},Le=function(){Ee(),te()},De=function(){Me(),T()};Be(function(){var l=Ae();!h&&v(l),n.global&&j(),n.breakpoint&&!c&&o(l)}),Y(function(){n.global&&j()},[n.global]),Y(function(){return c&&u.current&&(u.current.setAttribute(c,""),se()),function(){le()}},[c,n.breakpoint]),Y(function(){g?(k(!1),L(!1),w(!0)):!N&&!g&&D&&oe(E.current)},[N]),Ve(function(){J.clear(u.current)}),s.useImperativeHandle(r,function(){return{props:n,show:oe,hide:V,getElement:function(){return u.current}}});var Te=function(){var a=S({id:n.id,className:H(n.className,x("root",{context:t})),style:n.style,onClick:function(X){return Ie()},onMouseEnter:function(X){return we()}},q.getOtherProps(n),d("root")),M=S({classNames:x("transition"),in:g,timeout:{enter:250,exit:0},options:n.transitionOptions,unmountOnExit:!0,onEnter:Pe,onEntered:Ce,onExit:Oe,onExited:ke},d("transition"));return s.createElement(xe,R({nodeRef:u},M),s.createElement("div",R({ref:u},a),s.createElement(ae,{hostName:"ContextMenu",id:h,menuProps:n,model:n.model,root:!0,resetMenu:D,onLeafClick:Re,isMobileMode:Q,submenuIcon:n.submenuIcon,ptm:d,cx:x})))},je=Te();return s.createElement(Xe,{element:je,appendTo:n.appendTo})}));Se.displayName="ContextMenu";const bt={title:"Menu/ContextMenu",component:Se,parameters:{layout:"centered"},argTypes:{appendTo:{control:"select",description:"DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.",options:["null","HTMLElement","self"]},autoZIndex:{control:"boolean",description:"Whether to automatically manage layering.",options:null},baseZIndex:{control:"number",description:"Base zIndex value to use in layering.",options:null},breakpoint:{control:"text",description:"The breakpoint to define the maximum width boundary when responsiveness is enabled.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},global:{control:"boolean",description:"Attaches the menu to document instead of a particular item.",options:null},model:{control:"object",description:"An array of menuitems.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},scrollHeight:{control:"text",description:"Maximum height of the options panel on responsive mode.",options:null},submenuIcon:{control:"select",description:"Icon of the submenu.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},K={args:{unstyled:!1,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var ye,he,ge;K.parameters={...K.parameters,docs:{...(ye=K.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(he=K.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const vt=["Default"];export{K as Default,vt as __namedExportsOrder,bt as default};
//# sourceMappingURL=ContextMenu.stories-c93522c9.js.map
