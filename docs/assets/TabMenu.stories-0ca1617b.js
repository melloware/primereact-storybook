import{r as l}from"./index-76fb7be0.js";import{P as be,m as u,c as I,D as k,U as ve,I as ye,O as ge}from"./api.esm-e57be548.js";import{C as he,u as xe}from"./componentbase.esm-f35515f0.js";import{a as Oe}from"./hooks.esm-2e882e60.js";import{R as Se}from"./ripple.esm-42b8b102.js";import"./_commonjsHelpers-de833af9.js";function y(e){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(e)}function _e(e,t){if(y(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(y(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ie(e){var t=_e(e,"string");return y(t)==="symbol"?t:String(t)}function Pe(e,t,n){return t=Ie(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function je(e){if(Array.isArray(e))return e}function we(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,d,s,b=[],p=!0,v=!1;try{if(d=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=d.call(n)).done)&&(b.push(r.value),b.length!==t);p=!0);}catch(g){v=!0,i=g}finally{try{if(!p&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(v)throw i}}return b}}function W(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ee(e,t){if(e){if(typeof e=="string")return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}}function Ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(e,t){return je(e)||we(e,t)||Ee(e,t)||Ne()}var Te={icon:function(t){var n=t._icon;return I("p-menuitem-icon",n)},label:"p-menuitem-text",action:"p-menuitem-link",menuitem:function(t){var n=t._className,r=t.active,i=t.disabled;return I("p-tabmenuitem",{"p-highlight":r,"p-disabled":i},n)},inkbar:"p-tabmenu-ink-bar",menu:"p-tabmenu-nav p-reset",root:function(t){var n=t.props;return I("p-tabmenu p-component",n.className)}},ke=`
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
`,S=he.extend({defaultProps:{__TYPE:"TabMenu",id:null,model:null,activeIndex:0,style:null,className:null,onTabChange:null,children:void 0},css:{classes:Te,styles:ke}});function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?z(Object(n),!0).forEach(function(r){Pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var q=l.memo(l.forwardRef(function(e,t){var n=l.useContext(be),r=S.getProps(e,n),i=l.useState(r.id),d=H(i,2),s=d[0],b=d[1],p=l.useState(r.activeIndex),v=H(p,2),g=v[0],L=v[1],C=l.useRef(null),P=l.useRef(null),R=l.useRef(null),D=l.useRef({}),M=r.onTabChange?r.activeIndex:g,j=S.setMetaData({props:r,state:{id:s,activeIndex:g}}),h=j.ptm,c=j.cx,Y=j.isUnstyled,x=function(a,o,f){return h(a,{context:{item:o,index:f}})};xe(S.css.styles,Y,{name:"tabmenu"});var U=function(a,o,f){if(o.disabled){a.preventDefault();return}o.url||a.preventDefault(),o.command&&o.command({originalEvent:a,item:o}),r.onTabChange?r.onTabChange({originalEvent:a,value:o,index:f}):L(f)},F=function(a){return a===(M||0)},G=function(){if(r.model){var a=D.current["tab_".concat(M)];P.current.style.width=k.getWidth(a)+"px",P.current.style.left=k.getOffset(a).left-k.getOffset(R.current).left+"px"}};Oe(function(){s||b(ve())}),l.useImperativeHandle(t,function(){return{props:r,getElement:function(){return C.current}}}),l.useEffect(function(){G()});var Q=function(a,o){if(a.visible===!1)return null;var f=a.className,re=a.style,w=a.disabled,E=a.icon,A=a.label,$=a.template,ae=a.url,oe=a.target,B=a.id||s+"_"+o,O=F(o),le=I("p-menuitem-icon",E),ie=u({className:c("icon",{_icon:E})},x("icon",a,o)),se=ye.getJSXIcon(E,Ce({},ie),{props:r}),ce=u({className:c("label")},x("label",a,o)),ue=A&&l.createElement("span",ce,A),pe=u({href:ae||"#",className:c("action"),target:oe,onClick:function(T){return U(T,a,o)},role:"presentation"},x("action",a,o)),N=l.createElement("a",pe,se,ue,l.createElement(Se,null));if($){var me={onClick:function(T){return U(T,a,o)},className:"p-menuitem-link",labelClassName:"p-menuitem-text",iconClassName:le,element:N,props:r,active:O,index:o,disabled:w};N=ge.getJSXElement($,a,me)}var fe=u({ref:D.current["tab_".concat(o)],id:B,key:B,className:c("menuitem",{_className:f,active:O,disabled:w}),style:re,role:"tab","aria-selected":O,"aria-expanded":O,"aria-disabled":w},x("menuitem",a,o));return l.createElement("li",fe,N)},V=function(){return r.model.map(Q)};if(r.model){var Z=V(),ee=u({ref:P,className:c("inkbar")},h("inkbar")),te=u({ref:R,className:c("menu"),role:"tablist"},h("menu")),ne=u({id:r.id,ref:C,className:c("root"),style:r.style},S.getOtherProps(r),h("root"));return l.createElement("div",ne,l.createElement("ul",te,Z,l.createElement("li",ee)))}return null}));q.displayName="TabMenu";const Be={title:"Menu/TabMenu",component:q,parameters:{layout:"centered"},argTypes:{activeIndex:{control:"number",description:"Active index of menuitem.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},model:{control:"object",description:"An array of menuitems.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},_={args:{unstyled:!1,activeIndex:0,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var J,K,X;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(K=_.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const We=["Default"];export{_ as Default,We as __namedExportsOrder,Be as default};
