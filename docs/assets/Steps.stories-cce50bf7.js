import{r as l}from"./index-76fb7be0.js";import{a as se,c as x,U as le,I as ce,O as ue,D as _}from"./api.esm-4644ee78.js";import{C as pe,u as me}from"./componentbase.esm-1c796d7e.js";import{d as fe,a as de}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";function g(t){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(t)}function ve(t,n){if(g(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,n||"default");if(g(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function be(t){var n=ve(t,"string");return g(n)==="symbol"?n:String(n)}function ye(t,n,r){return n=be(n),n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function ge(t){if(Array.isArray(t))return t}function Ie(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i,o,I,f,u=[],d=!0,b=!1;try{if(I=(r=r.call(t)).next,n===0){if(Object(r)!==r)return;d=!1}else for(;!(d=(i=I.call(r)).done)&&(u.push(i.value),u.length!==n);d=!0);}catch(y){b=!0,o=y}finally{try{if(!d&&r.return!=null&&(f=r.return(),Object(f)!==f))return}finally{if(b)throw o}}return u}}function C(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=t[r];return i}function he(t,n){if(t){if(typeof t=="string")return C(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(t,n)}}function Se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oe(t,n){return ge(t)||Ie(t,n)||he(t,n)||Se()}var xe={icon:function(n){var r=n.item;return x("p-menuitem-icon",r.icon)},label:"p-steps-title",step:"p-steps-number",action:"p-menuitem-link",menuitem:function(n){var r=n.active,i=n.disabled,o=n.item;return x("p-steps-item",o.className,{"p-highlight p-steps-current":r,"p-disabled":i})},root:function(n){var r=n.props;return x("p-steps p-component",{"p-readonly":r.readOnly},r.className)}},Pe=`
@layer primereact {
    .p-steps {
        position: relative;
    }

    .p-steps ol {
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
`,S=pe.extend({defaultProps:{__TYPE:"Steps",id:null,model:null,activeIndex:0,readOnly:!0,style:null,className:null,onSelect:null,children:void 0},css:{classes:xe,styles:Pe}});function F(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,i)}return r}function we(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?F(Object(r),!0).forEach(function(i){ye(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}var M=l.memo(l.forwardRef(function(t,n){var r=fe(),i=l.useContext(se),o=S.getProps(t,i),I=l.useState(o.id),f=Oe(I,2),u=f[0],d=f[1],b=l.useRef(null),y=l.useRef(null),P=S.setMetaData({props:o,state:{id:u}}),p=P.ptm,v=P.cx,K=P.isUnstyled;me(S.css.styles,K,{name:"steps"});var w=function(e,a,c){if(o.readOnly||a.disabled){e.preventDefault();return}o.onSelect&&o.onSelect({originalEvent:e,item:a,index:c}),a.url||e.preventDefault(),a.command&&a.command({originalEvent:e,item:a,index:c})},L=function(e,a,c){if(!o.readOnly)switch(e.code){case"ArrowRight":B(e.target),e.preventDefault();break;case"ArrowLeft":H(e.target),e.preventDefault();break;case"Home":W(e.target),e.preventDefault();break;case"End":$(e.target),e.preventDefault();break;case"Tab":break;case"Enter":case"Space":w(e,a,c),e.preventDefault();break}},B=function(e){var a=J(e);a&&h(e,a)},H=function(e){var a=X(e);a&&h(e,a)},W=function(e){var a=T();a&&h(e,a)},$=function(e){var a=q();a&&h(e,a)},J=function(e){var a=e.parentElement.nextElementSibling;return a?a.children[0]:null},X=function(e){var a=e.parentElement.previousElementSibling;return a?a.children[0]:null},T=function(){var e=_.findSingle(y.current,'[data-pc-section="menuitem"]');return e?e.children[0]:null},q=function(){var e=_.find(y.current,'[data-pc-section="menuitem"]');return e?e[e.length-1].children[0]:null},h=function(e,a){e.tabIndex="-1",a.tabIndex="0",setTimeout(function(){return a.focus()},0)},k=function(){var e=T();e.tabIndex="0",e.focus()},Y=function(e,a){if(e.visible===!1)return null;var c=e.id||u+"_"+a,E=a===o.activeIndex,N=e.disabled||a!==o.activeIndex&&o.readOnly,V=x("p-menuitem-icon",e.icon),Z=r({className:v("icon",{item:e})},p("icon")),ee=ce.getJSXIcon(e.icon,we({},Z),{props:o}),te=r({className:v("label")},p("label")),ne=e.label&&l.createElement("span",te,e.label),re=r({className:v("step")},p("step")),ae=r({href:e.url||"#",className:v("action"),tabIndex:"-1",onFocus:function(m){return m.stopPropagation()},target:e.target,onKeyDown:function(m){return L(m,e,a)},onClick:function(m){return w(m,e,a)}},p("action")),D=l.createElement("a",ae,l.createElement("span",re,a+1),ee,ne);if(e.template){var oe={onClick:function(m){return w(m,e,a)},className:"p-menuitem-link",labelClassName:"p-steps-title",numberClassName:"p-steps-number",iconClassName:V,"aria-current":E,element:D,props:o,active:E,disabled:N};D=ue.getJSXElement(e.template,e,oe)}var ie=r({key:c,id:c,className:v("menuitem",{active:E,disabled:N,item:e}),style:e.style},p("menuitem"));return l.createElement("li",ie,D)},z=function(){var e=r({ref:y,tabIndex:o.readOnly?null:"0",onFocus:function(){o.readOnly||k()},onBlur:function(){return k}},p("menu"));if(o.model){var a=o.model.map(Y);return l.createElement("ol",e,a)}return null};de(function(){u||d(le())}),l.useImperativeHandle(n,function(){return{props:o,getElement:function(){return b.current}}});var G=r({id:o.id,ref:b,className:v("root"),style:o.style},S.getOtherProps(o),p("root")),Q=z();return l.createElement("nav",G,Q)}));M.displayName="Steps";const Ne={title:"Menu/Steps",component:M,parameters:{layout:"centered"},argTypes:{activeIndex:{control:"number",description:"Index of the active item.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},model:{control:"select",description:"An array of menuitems.",options:["undefined","MenuItem[]"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},readOnly:{control:"boolean",description:"Whether the items are clickable or not.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},O={args:{unstyled:!1,activeIndex:0,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var U,A,R;O.parameters={...O.parameters,docs:{...(U=O.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(R=(A=O.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const _e=["Default"];export{O as Default,_e as __namedExportsOrder,Ne as default};
