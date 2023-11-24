import{r as s}from"./index-76fb7be0.js";import{P as F,m as u,c as O,U as G,I as Q,O as V}from"./api.esm-2e2d159c.js";import{C as Z,u as ee}from"./componentbase.esm-b0caea1e.js";import{d as te}from"./hooks.esm-c93f10ee.js";import"./_commonjsHelpers-de833af9.js";function v(e){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(e)}function ne(e,t){if(v(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(v(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function re(e){var t=ne(e,"string");return v(t)==="symbol"?t:String(t)}function oe(e,t,n){return t=re(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e){if(Array.isArray(e))return e}function se(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,f,c,y=[],p=!0,m=!1;try{if(f=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=f.call(n)).done)&&(y.push(r.value),y.length!==t);p=!0);}catch(l){m=!0,i=l}finally{try{if(!p&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(m)throw i}}return y}}function _(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function le(e,t){if(e){if(typeof e=="string")return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}}function ie(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ce(e,t){return ae(e)||se(e,t)||le(e,t)||ie()}var pe={icon:function(t){var n=t.item;return O("p-menuitem-icon",n.icon)},label:"p-steps-title",step:"p-steps-number",action:"p-menuitem-link",menuitem:function(t){var n=t.active,r=t.disabled,i=t.item;return O("p-steps-item",i.className,{"p-highlight p-steps-current":n,"p-disabled":r})},root:function(t){var n=t.props;return O("p-steps p-component",{"p-readonly":n.readOnly},n.className)}},ue=`
@layer primereact {
    .p-steps {
        position: relative;
    }
    
    .p-steps ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
    }
    
    .p-steps-item {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
    }
    
    .p-steps-item .p-menuitem-link {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        text-decoration: none;
    }
    
    .p-steps.p-readonly .p-steps-item {
        cursor: auto;
    }
    
    .p-steps-item.p-steps-current .p-menuitem-link {
        cursor: default;
    }
    
    .p-steps-title {
        white-space: nowrap;
    }
    
    .p-steps-number {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-steps-title {
        display: block;
    }
}
`,h=Z.extend({defaultProps:{__TYPE:"Steps",id:null,model:null,activeIndex:0,readOnly:!0,style:null,className:null,onSelect:null,children:void 0},css:{classes:pe,styles:ue}});function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var D=s.memo(s.forwardRef(function(e,t){var n=s.useContext(F),r=h.getProps(e,n),i=s.useState(r.id),f=ce(i,2),c=f[0],y=f[1],p=s.useRef(null),m=h.setMetaData({props:r,state:{id:c}}),l=m.ptm,d=m.cx,A=m.isUnstyled;ee(h.css.styles,A,{name:"steps"});var E=function(o,a,b){if(r.readOnly||a.disabled){o.preventDefault();return}r.onSelect&&r.onSelect({originalEvent:o,item:a,index:b}),a.url||o.preventDefault(),a.command&&a.command({originalEvent:o,item:a,index:b})},R=function(o,a){if(o.visible===!1)return null;var b=o.id||c+"_"+a,g=a===r.activeIndex,x=o.disabled||a!==r.activeIndex&&r.readOnly,w=x?-1:"",$=O("p-menuitem-icon",o.icon),B=u({className:d("icon",{item:o})},l("icon")),H=Q.getJSXIcon(o.icon,me({},B),{props:r}),J=u({className:d("label")},l("label")),K=o.label&&s.createElement("span",J,o.label),X=u({className:d("step")},l("step")),q=u({href:o.url||"#",className:d("action"),role:"presentation",target:o.target,onClick:function(j){return E(j,o,a)},tabIndex:w},l("action")),I=s.createElement("a",q,s.createElement("span",X,a+1),H,K);if(o.template){var L={onClick:function(j){return E(j,o,a)},className:"p-menuitem-link",labelClassName:"p-steps-title",numberClassName:"p-steps-number",iconClassName:$,element:I,props:r,tabIndex:w,active:g,disabled:x};I=V.getJSXElement(o.template,o,L)}var Y=u({key:b,id:b,className:d("menuitem",{active:g,disabled:x,item:o}),style:o.style,role:"tab","aria-selected":g,"aria-expanded":g},l("menuitem"));return s.createElement("li",Y,I)},T=function(){var o=u({role:"tablist"},l("menu"));if(r.model){var a=r.model.map(R);return s.createElement("ul",o,a)}return null};te(function(){c||y(G())}),s.useImperativeHandle(t,function(){return{props:r,getElement:function(){return p.current}}});var M=u({id:r.id,ref:p,className:d("root"),style:r.style},h.getOtherProps(r),l("root")),W=T();return s.createElement("div",M,W)}));D.displayName="Steps";const ge={title:"Menu/Steps",component:D,parameters:{layout:"centered"},argTypes:{activeIndex:{control:"number",description:"Index of the active item.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},model:{control:"select",description:"An array of menuitems.",options:["undefined","MenuItem[]"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},readOnly:{control:"boolean",description:"Whether the items are clickable or not.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},S={args:{unstyled:!1,activeIndex:0,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var C,k,U;S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(U=(k=S.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};const he=["Default"];export{S as Default,he as __namedExportsOrder,ge as default};
//# sourceMappingURL=Steps.stories-e9d0ce79.js.map
