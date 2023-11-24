import{r as p}from"./index-76fb7be0.js";import{P as ue,O as g,D as O,m as y,c as C,I as ce}from"./api.esm-2e2d159c.js";import{C as fe,u as de}from"./componentbase.esm-b0caea1e.js";import{d as me}from"./hooks.esm-c93f10ee.js";import{T as he}from"./index.esm-e304a04b.js";import{K}from"./keyfilter.esm-d0e9408b.js";import{T as ye}from"./tooltip.esm-ca4db4c1.js";import"./_commonjsHelpers-de833af9.js";import"./iconbase.esm-439d6f79.js";import"./portal.esm-c66f0cf3.js";import"./index-d3ea75b5.js";function E(){return E=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t},E.apply(this,arguments)}function P(t){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},P(t)}function ve(t,n){if(P(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var e=o.call(t,n||"default");if(P(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function be(t){var n=ve(t,"string");return P(n)==="symbol"?n:String(n)}function ge(t,n,o){return n=be(n),n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function j(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,e=new Array(n);o<n;o++)e[o]=t[o];return e}function we(t){if(Array.isArray(t))return j(t)}function Oe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $(t,n){if(t){if(typeof t=="string")return j(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return j(t,n)}}function Pe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(t){return we(t)||Oe(t)||$(t)||Pe()}function xe(t){if(Array.isArray(t))return t}function Ie(t,n){var o=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var e,v,w,d,b=[],m=!0,f=!1;try{if(w=(o=o.call(t)).next,n===0){if(Object(o)!==o)return;m=!1}else for(;!(m=(e=w.call(o)).done)&&(b.push(e.value),b.length!==n);m=!0);}catch(h){f=!0,v=h}finally{try{if(!m&&o.return!=null&&(d=o.return(),Object(d)!==d))return}finally{if(f)throw v}}return b}}function ke(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Se(t,n){return xe(t)||Ie(t,n)||$(t,n)||ke()}var De=`
@layer primereact {
    .p-chips {
        display: inline-flex;
    }
    
    .p-chips-multiple-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .p-chips-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }
    
    .p-chips-input-token {
        flex: 1 1 auto;
        display: inline-flex;
    }
    
    .p-chips-token-icon {
        cursor: pointer;
    }
    
    .p-chips-input-token input {
        border: 0 none;
        outline: 0 none;
        background-color: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
    }
    
    .p-fluid .p-chips {
        display: flex;
    }
    
    .p-chips-icon-left,
    .p-chips-icon-right {
        position: relative;
        display: inline-block;
    }
    
    .p-chips-icon-left > i,
    .p-chips-icon-right > i,
    .p-chips-icon-left > svg,
    .p-chips-icon-right > svg,
    .p-chips-icon-left > .p-chips-prefix,
    .p-chips-icon-right > .p-chips-suffix {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }
    
    .p-fluid .p-chips-icon-left,
    .p-fluid .p-chips-icon-right {
        display: block;
        width: 100%;
    }
}
`,Ce={removeTokenIcon:"p-chips-token-icon",label:"p-chips-token-label",token:"p-chips-token p-highlight",inputToken:"p-chips-input-token",container:function(n){var o=n.props,e=n.focusedState;return C("p-inputtext p-chips-multiple-container",{"p-disabled":o.disabled,"p-focus":e})},root:function(n){var o=n.isFilled,e=n.focusedState;return C("p-chips p-component p-inputwrapper",{"p-inputwrapper-filled":o,"p-inputwrapper-focus":e})}},I=fe.extend({defaultProps:{__TYPE:"Chips",addOnBlur:null,allowDuplicate:!0,ariaLabelledBy:null,autoFocus:!1,className:null,disabled:null,id:null,inputId:null,inputRef:null,itemTemplate:null,keyfilter:null,max:null,name:null,onAdd:null,onBlur:null,onChange:null,onFocus:null,onKeyDown:null,onRemove:null,placeholder:null,readOnly:!1,removable:!0,removeIcon:null,separator:null,style:null,tooltip:null,tooltipOptions:null,value:null,children:void 0},css:{classes:Ce,styles:De}});function W(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(v){return Object.getOwnPropertyDescriptor(t,v).enumerable})),o.push.apply(o,e)}return o}function M(t){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?W(Object(o),!0).forEach(function(e){ge(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):W(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var z=p.memo(p.forwardRef(function(t,n){var o=p.useContext(ue),e=I.getProps(t,o),v=p.useState(!1),w=Se(v,2),d=w[0],b=w[1],m=I.setMetaData({props:e,state:{focused:d}}),f=m.ptm,h=m.cx,J=m.isUnstyled;de(I.css.styles,J,{name:"chips"});var R=p.useRef(null),X=p.useRef(null),u=p.useRef(e.inputRef),_=function(r,i){if(!(e.disabled&&e.readOnly)){var a=x(e.value),l=a.splice(i,1);B(l,i)&&(e.onRemove&&e.onRemove({originalEvent:r,value:l}),e.onChange&&e.onChange({originalEvent:r,value:a,stopPropagation:function(){r.stopPropagation()},preventDefault:function(){r.preventDefault()},target:{name:e.name,id:e.id,value:a}}))}},S=function(r,i,a){if(i&&i.trim().length){var l=e.value?x(e.value):[];if(e.allowDuplicate||l.indexOf(i)===-1){var c=!0;e.onAdd&&(c=e.onAdd({originalEvent:r,value:i})),c!==!1&&l.push(i)}T(r,l,a)}},Y=function(){O.focus(u.current)},q=function(r){var i=r.target.value,a=e.value||[];if(e.onKeyDown&&e.onKeyDown(r),!r.defaultPrevented)switch(r.key){case"Backspace":u.current.value.length===0&&a.length>0&&_(r,a.length-1);break;case"Enter":i&&i.trim().length&&(!e.max||e.max>a.length)&&S(r,i,!0);break;default:e.keyfilter&&K.onKeyPress(r,e.keyfilter),A()?r.preventDefault():e.separator===","&&(r.key===e.separator||O.isAndroid()&&r.which===229)&&S(r,i,!0);break}},T=function(r,i,a){e.onChange&&e.onChange({originalEvent:r,value:i,stopPropagation:function(){r.stopPropagation()},preventDefault:function(){r.preventDefault()},target:{name:e.name,id:e.id,value:i}}),u.current.value="",a&&r.preventDefault()},G=function(r){if(e.separator){var i=(r.clipboardData||window.clipboardData).getData("Text");if(e.keyfilter&&K.onPaste(r,e.keyfilter),i){var a=e.value||[],l=i.split(e.separator);l=l.filter(function(c){return(e.allowDuplicate||a.indexOf(c)===-1)&&c.trim().length}),a=[].concat(x(a),x(l)),T(r,a,!0)}}},Q=function(r){b(!0),e.onFocus&&e.onFocus(r)},V=function(r){if(e.addOnBlur){var i=r.target.value,a=e.value||[];i&&i.trim().length&&(!e.max||e.max>a.length)&&S(r,i,!0)}b(!1),e.onBlur&&e.onBlur(r)},A=function(){return e.max&&e.value&&e.max===e.value.length},F=u.current&&u.current.value,Z=p.useMemo(function(){return g.isNotEmpty(e.value)||g.isNotEmpty(F)},[e.value,F]),B=function(r,i){return g.getPropValue(e.removable,{value:r,index:i,props:e})};p.useImperativeHandle(n,function(){return{props:e,focus:function(){return O.focus(u.current)},getElement:function(){return R.current},getInput:function(){return u.current}}}),p.useEffect(function(){g.combinedRefs(u,e.inputRef)},[u,e.inputRef]),me(function(){e.autoFocus&&O.focus(u.current,e.autoFocus)});var ee=function(r,i){var a=y({className:h("removeTokenIcon"),onClick:function(D){return _(D,i)}},f("removeTokenIcon")),l=e.removeIcon||p.createElement(he,a),c=ce.getJSXIcon(l,M({},a),{props:e});return!e.disabled&&!e.readOnly&&B(r,i)?c:null},te=function(r,i){var a=e.itemTemplate?e.itemTemplate(r):r,l=y({className:h("label")},f("label")),c=p.createElement("span",l,a),N=ee(r,i),D=y({key:i,className:h("token"),"data-p-highlight":!0},f("token"));return p.createElement("li",D,c,N)},ne=function(){var r=y({className:h("inputToken")},f("inputToken")),i=y(M({id:e.inputId,ref:u,placeholder:e.placeholder,type:"text",name:e.name,disabled:e.disabled||A(),onKeyDown:function(l){return q(l)},onPaste:function(l){return G(l)},onFocus:function(l){return Q(l)},onBlur:function(l){return V(l)},readOnly:e.readOnly},le),f("input"));return p.createElement("li",r,p.createElement("input",i))},oe=function(){return e.value?e.value.map(te):null},re=function(){var r=oe(),i=ne(),a=y({ref:X,className:h("container",{focusedState:d}),onClick:function(c){return Y()},"data-p-disabled":e.disabled,"data-p-focus":d},f("container"));return p.createElement("ul",a,r,i)},ie=g.isNotEmpty(e.tooltip),ae=I.getOtherProps(e),le=g.reduceKeys(ae,O.ARIA_PROPS),pe=re(),se=y({id:e.id,ref:R,className:C(e.className,h("root",{isFilled:Z,focusedState:d})),style:e.style},f("root"));return p.createElement(p.Fragment,null,p.createElement("div",se,pe),ie&&p.createElement(ye,E({target:u,content:e.tooltip},e.tooltipOptions,{pt:f("tooltip")})))}));z.displayName="Chips";const Me={title:"Form/Chips",component:z,parameters:{layout:"centered"},argTypes:{addOnBlur:{control:"boolean",description:"Whether to add an item when the input loses focus.",options:null},allowDuplicate:{control:"boolean",description:"Whether to allow duplicate values or not.",options:null},ariaLabelledBy:{control:"text",description:"Establishes relationships between the component and label(s) where its value should be one or more element IDs.",options:null},autoFocus:{control:"boolean",description:"When present, it specifies that the component should automatically get focus on load.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},disabled:{control:"boolean",description:"When present, it specifies that the element should be disabled.",options:null},inputId:{control:"text",description:"Identifier of the input element.",options:null},inputRef:{control:"object",description:"Reference of the input element.",options:null},keyfilter:{control:"object",description:"Format definition of the keys to block.",options:null},max:{control:"number",description:"Maximum number of entries allowed.",options:null},name:{control:"text",description:"Name of the input field.",options:null},placeholder:{control:"text",description:"Advisory information to display on input.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},readOnly:{control:"boolean",description:"When present, it specifies that the element should be read-only.",options:null},removable:{control:"select",description:"Whether an item is removable.",options:["boolean","Function"]},removeIcon:{control:"select",description:"Icon of the remove element.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},separator:{control:"text",description:"Separator char to add an item when pressed in addition to the enter key. Currently only possible value is ','.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"object",description:"Value of the component.",options:null}}},k={args:{placeholder:"Chips",unstyled:!1}};var U,H,L;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    "placeholder": "Chips",
    "unstyled": false
  }
}`,...(L=(H=k.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const Ue=["Default"];export{k as Default,Ue as __namedExportsOrder,Me as default};
//# sourceMappingURL=Chips.stories-c183afb9.js.map
