import{r as s}from"./index-76fb7be0.js";import{a as Ee,c as D,D as u,U as ke,I as De,O as Ne}from"./api.esm-4644ee78.js";import{C as je,u as Re}from"./componentbase.esm-1c796d7e.js";import{d as Ce,a as Ae}from"./hooks.esm-d069ba29.js";import{R as Me}from"./ripple.esm-1f3221bd.js";import"./_commonjsHelpers-de833af9.js";function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},h(t)}function Ue(t,a){if(h(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,a||"default");if(h(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function Le(t){var a=Ue(t,"string");return h(a)==="symbol"?a:String(a)}function Ke(t,a,r){return a=Le(a),a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function Be(t){if(Array.isArray(t))return t}function Fe(t,a){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var o,i,I,d,p=[],b=!0,x=!1;try{if(I=(r=r.call(t)).next,a===0){if(Object(r)!==r)return;b=!1}else for(;!(b=(o=I.call(r)).done)&&(p.push(o.value),p.length!==a);b=!0);}catch(S){x=!0,i=S}finally{try{if(!b&&r.return!=null&&(d=r.return(),Object(d)!==d))return}finally{if(x)throw i}}return p}}function $(t,a){(a==null||a>t.length)&&(a=t.length);for(var r=0,o=new Array(a);r<a;r++)o[r]=t[r];return o}function $e(t,a){if(t){if(typeof t=="string")return $(t,a);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(t,a)}}function We(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(t,a){return Be(t)||Fe(t,a)||$e(t,a)||We()}var He={icon:function(a){var r=a._icon;return D("p-menuitem-icon",r)},label:"p-menuitem-text",action:"p-menuitem-link",menuitem:function(a){var r=a._className,o=a.active,i=a.disabled;return D("p-tabmenuitem",{"p-highlight":o,"p-disabled":i},r)},inkbar:"p-tabmenu-ink-bar",menu:"p-tabmenu-nav p-reset",root:function(a){var r=a.props;return D("p-tabmenu p-component",r.className)}},ze=`
@layer primereact {
    .p-tabmenu {
        overflow-x: auto;
    }

    .p-tabmenu-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex-wrap: nowrap;
    }

    .p-tabmenu-nav a {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        text-decoration: none;
        overflow: hidden;
    }

    .p-tabmenu-nav a:focus {
        z-index: 1;
    }

    .p-tabmenu-nav .p-menuitem-text {
        line-height: 1;
    }

    .p-tabmenu-ink-bar {
        display: none;
        z-index: 1;
    }

    .p-tabmenu::-webkit-scrollbar {
        display: none;
    }
}
`,E=je.extend({defaultProps:{__TYPE:"TabMenu",id:null,model:null,activeIndex:0,ariaLabel:null,ariaLabelledBy:null,style:null,className:null,onTabChange:null,children:void 0},css:{classes:He,styles:ze}});function H(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);a&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,o)}return r}function z(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?H(Object(r),!0).forEach(function(o){Ke(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}var Y=s.memo(s.forwardRef(function(t,a){var r=Ce(),o=s.useContext(Ee),i=E.getProps(t,o),I=s.useState(i.id),d=W(I,2),p=d[0],b=d[1],x=s.useState(i.activeIndex),S=W(x,2),M=S[0],G=S[1],U=s.useRef(null),v=s.useRef(null),m=s.useRef(null),Q=s.useRef({}),V=i.onTabChange?i.activeIndex:M,L={props:i,state:{id:p,activeIndex:M}},N=E.setMetaData(z({},L)),T=N.ptm,f=N.cx,Z=N.isUnstyled,O=function(e,n,c){return T(e,{parent:L,context:{item:n,index:c}})};Re(E.css.styles,Z,{name:"tabmenu"});var j=function(e,n,c){if(n.disabled){e.preventDefault();return}n.url||e.preventDefault(),n.command&&n.command({originalEvent:e,item:n}),i.onTabChange?i.onTabChange({originalEvent:e,value:n,index:c}):G(c)},ee=function(e){return e===(V||0)},te=function(){if(i.model){for(var e=m.current.children,n=!1,c=0;c<e.length;c++){var y=e[c];u.getAttribute(y,"data-p-highlight")&&(v.current.style.width=u.getWidth(y)+"px",v.current.style.left=u.getOffset(y).left-u.getOffset(m.current).left+"px",n=!0)}n||(v.current.style.width="0px",v.current.style.left="0px")}};Ae(function(){p||b(ke())}),s.useImperativeHandle(a,function(){return{props:i,getElement:function(){return U.current}}}),s.useEffect(function(){te()});var ne=function(e,n,c){switch(e.code){case"ArrowRight":ae(e.target),e.preventDefault();break;case"ArrowLeft":re(e.target),e.preventDefault();break;case"Home":ie(e.target),e.preventDefault();break;case"End":oe(e.target),e.preventDefault();break;case"Space":case"Enter":j(e,n,c),e.preventDefault();break;case"Tab":pe();break}},ae=function(e){var n=le(e);n&&P(e,n)},re=function(e){var n=se(e);n&&P(e,n)},ie=function(e){var n=ce();n&&P(e,n)},oe=function(e){var n=ue();n&&P(e,n)},le=function l(e){var n=e.parentElement.nextElementSibling;return n?u.getAttribute(n,"data-p-disabled")===!0?l(n.children[0]):n.children[0]:null},se=function l(e){var n=e.parentElement.previousElementSibling;return n?u.getAttribute(n,"data-p-disabled")===!0?l(n.children[0]):n.children[0]:null},ce=function(){var e=u.findSingle(m.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e.children[0]:null},ue=function(){var e=u.find(m.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},P=function(e,n){e.tabIndex="-1",n.tabIndex="0",n.focus()},pe=function(){var e=u.findSingle(m.current,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]'),n=u.findSingle(m.current,'[data-pc-section="action"][tabindex="0"]');n!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),n.tabIndex="-1")},me=function(e,n){if(e.visible===!1)return null;var c=e.className,y=e.style,_=e.disabled,R=e.icon,C=e.label,K=e.template,ge=e.url,he=e.target,B=e.id||p+"_"+n,w=ee(n),Ie=D("p-menuitem-icon",R),xe=r({className:f("icon",{_icon:R})},O("icon",e,n)),Se=De.getJSXIcon(R,z({},xe),{props:i}),Te=r({className:f("label")},O("label",e,n)),Oe=C&&s.createElement("span",Te,C),Pe=r({href:ge||"#",role:"menuitem","aria-label":C,tabIndex:w?"0":"-1",className:f("action"),target:he,onClick:function(g){return j(g,e,n)}},O("action",e,n)),A=s.createElement("a",Pe,Se,Oe,s.createElement(Me,null));if(K){var _e={onClick:function(g){return j(g,e,n)},className:"p-menuitem-link",labelClassName:"p-menuitem-text",iconClassName:Ie,element:A,props:i,active:w,index:n,disabled:_};A=Ne.getJSXElement(K,e,_e)}var we=r({ref:Q.current["tab_".concat(n)],id:B,key:B,onKeyDown:function(g){return ne(g,e,n)},className:f("menuitem",{_className:c,active:w,disabled:_}),style:y,role:"presentation","data-p-highlight":w,"data-p-disabled":_||!1,"aria-disabled":_},O("menuitem",e,n));return s.createElement("li",we,A)},fe=function(){return i.model.map(me)};if(i.model){var de=fe(),be=r({ref:v,role:"none",className:f("inkbar")},T("inkbar")),ve=r({ref:m,"aria-label":i.ariaLabel,"aria-labelledby":i.ariaLabelledBy,className:f("menu"),role:"menubar"},T("menu")),ye=r({id:i.id,ref:U,className:f("root"),style:i.style},E.getOtherProps(i),T("root"));return s.createElement("div",ye,s.createElement("ul",ve,de,s.createElement("li",be)))}return null}));Y.displayName="TabMenu";const Ve={title:"Menu/TabMenu",component:Y,parameters:{layout:"centered"},argTypes:{activeIndex:{control:"number",description:"Active index of menuitem.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},model:{control:"object",description:"An array of menuitems.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},k={args:{unstyled:!1,activeIndex:0,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var J,X,q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    "unstyled": false,
    "activeIndex": 0,
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
}`,...(q=(X=k.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};const Ze=["Default"];export{k as Default,Ze as __namedExportsOrder,Ve as default};
