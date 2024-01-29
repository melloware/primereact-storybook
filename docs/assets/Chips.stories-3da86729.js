import{r as s}from"./index-76fb7be0.js";import{a as ue,O as g,D as w,c as C,I as ce}from"./api.esm-4644ee78.js";import{C as fe,u as de}from"./componentbase.esm-1c796d7e.js";import{d as me,a as he}from"./hooks.esm-d069ba29.js";import{T as ye}from"./index.esm-97b4c75f.js";import{K}from"./keyfilter.esm-59cdc628.js";import{T as ve}from"./tooltip.esm-2acddad6.js";import"./_commonjsHelpers-de833af9.js";import"./iconbase.esm-60e86362.js";import"./portal.esm-16954874.js";import"./index-d3ea75b5.js";function E(){return E=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(t[l]=o[l])}return t},E.apply(this,arguments)}function O(t){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},O(t)}function be(t,n){if(O(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var l=o.call(t,n||"default");if(O(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function ge(t){var n=be(t,"string");return O(n)==="symbol"?n:String(n)}function we(t,n,o){return n=ge(n),n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function j(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,l=new Array(n);o<n;o++)l[o]=t[o];return l}function Oe(t){if(Array.isArray(t))return j(t)}function Pe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $(t,n){if(t){if(typeof t=="string")return j(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return j(t,n)}}function xe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(t){return Oe(t)||Pe(t)||$(t)||xe()}function Ie(t){if(Array.isArray(t))return t}function ke(t,n){var o=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var l,e,P,y,m=[],h=!0,v=!1;try{if(P=(o=o.call(t)).next,n===0){if(Object(o)!==o)return;h=!1}else for(;!(h=(l=P.call(o)).done)&&(m.push(l.value),m.length!==n);h=!0);}catch(d){v=!0,e=d}finally{try{if(!h&&o.return!=null&&(y=o.return(),Object(y)!==y))return}finally{if(v)throw e}}return m}}function Se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(t,n){return Ie(t)||ke(t,n)||$(t,n)||Se()}var Ce=`
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
`,Ee={removeTokenIcon:"p-chips-token-icon",label:"p-chips-token-label",token:"p-chips-token p-highlight",inputToken:"p-chips-input-token",container:function(n){var o=n.props,l=n.focusedState;return C("p-inputtext p-chips-multiple-container",{"p-disabled":o.disabled,"p-focus":l})},root:function(n){var o=n.isFilled,l=n.focusedState;return C("p-chips p-component p-inputwrapper",{"p-inputwrapper-filled":o,"p-inputwrapper-focus":l})}},I=fe.extend({defaultProps:{__TYPE:"Chips",addOnBlur:null,allowDuplicate:!0,ariaLabelledBy:null,autoFocus:!1,className:null,disabled:null,id:null,inputId:null,inputRef:null,itemTemplate:null,keyfilter:null,max:null,name:null,onAdd:null,onBlur:null,onChange:null,onFocus:null,onKeyDown:null,onRemove:null,placeholder:null,readOnly:!1,removable:!0,removeIcon:null,separator:null,style:null,tooltip:null,tooltipOptions:null,value:null,children:void 0},css:{classes:Ee,styles:Ce}});function W(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,l)}return o}function M(t){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?W(Object(o),!0).forEach(function(l){we(t,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):W(Object(o)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(o,l))})}return t}var z=s.memo(s.forwardRef(function(t,n){var o=me(),l=s.useContext(ue),e=I.getProps(t,l),P=s.useState(!1),y=De(P,2),m=y[0],h=y[1],v=I.setMetaData({props:e,state:{focused:m}}),d=v.ptm,b=v.cx,J=v.isUnstyled;de(I.css.styles,J,{name:"chips"});var R=s.useRef(null),X=s.useRef(null),c=s.useRef(e.inputRef),_=function(r,i){if(!(e.disabled&&e.readOnly)){var a=x(e.value),p=a.splice(i,1);B(p,i)&&(e.onRemove&&e.onRemove({originalEvent:r,value:p}),e.onChange&&e.onChange({originalEvent:r,value:a,stopPropagation:function(){r.stopPropagation()},preventDefault:function(){r.preventDefault()},target:{name:e.name,id:e.id,value:a}}))}},S=function(r,i,a){if(i&&i.trim().length){var p=e.value?x(e.value):[];if(e.allowDuplicate||p.indexOf(i)===-1){var f=!0;e.onAdd&&(f=e.onAdd({originalEvent:r,value:i})),f!==!1&&p.push(i)}T(r,p,a)}},Y=function(){w.focus(c.current)},q=function(r){var i=r.target.value,a=e.value||[];if(e.onKeyDown&&e.onKeyDown(r),!r.defaultPrevented)switch(r.key){case"Backspace":c.current.value.length===0&&a.length>0&&_(r,a.length-1);break;case"Enter":i&&i.trim().length&&(!e.max||e.max>a.length)&&S(r,i,!0);break;default:e.keyfilter&&K.onKeyPress(r,e.keyfilter),A()?r.preventDefault():e.separator===","&&(r.key===e.separator||w.isAndroid()&&r.which===229)&&S(r,i,!0);break}},T=function(r,i,a){e.onChange&&e.onChange({originalEvent:r,value:i,stopPropagation:function(){r.stopPropagation()},preventDefault:function(){r.preventDefault()},target:{name:e.name,id:e.id,value:i}}),c.current.value="",a&&r.preventDefault()},G=function(r){if(e.separator){var i=(r.clipboardData||window.clipboardData).getData("Text");if(e.keyfilter&&K.onPaste(r,e.keyfilter),i){var a=e.value||[],p=i.split(e.separator);p=p.filter(function(f){return(e.allowDuplicate||a.indexOf(f)===-1)&&f.trim().length}),a=[].concat(x(a),x(p)),T(r,a,!0)}}},Q=function(r){h(!0),e.onFocus&&e.onFocus(r)},V=function(r){if(e.addOnBlur){var i=r.target.value,a=e.value||[];i&&i.trim().length&&(!e.max||e.max>a.length)&&S(r,i,!0)}h(!1),e.onBlur&&e.onBlur(r)},A=function(){return e.max&&e.value&&e.max===e.value.length},F=c.current&&c.current.value,Z=s.useMemo(function(){return g.isNotEmpty(e.value)||g.isNotEmpty(F)},[e.value,F]),B=function(r,i){return g.getPropValue(e.removable,{value:r,index:i,props:e})};s.useImperativeHandle(n,function(){return{props:e,focus:function(){return w.focus(c.current)},getElement:function(){return R.current},getInput:function(){return c.current}}}),s.useEffect(function(){g.combinedRefs(c,e.inputRef)},[c,e.inputRef]),he(function(){e.autoFocus&&w.focus(c.current,e.autoFocus)});var ee=function(r,i){var a=o({className:b("removeTokenIcon"),onClick:function(D){return _(D,i)},"aria-hidden":"true"},d("removeTokenIcon")),p=e.removeIcon||s.createElement(ye,a),f=ce.getJSXIcon(p,M({},a),{props:e});return!e.disabled&&!e.readOnly&&B(r,i)?f:null},te=function(r,i){var a=e.itemTemplate?e.itemTemplate(r):r,p=o({className:b("label")},d("label")),f=s.createElement("span",p,a),N=ee(r,i),D=o({key:i,className:b("token"),"data-p-highlight":!0},d("token"));return s.createElement("li",D,f,N)},ne=function(){var r=o({className:b("inputToken")},d("inputToken")),i=o(M({id:e.inputId,ref:c,placeholder:e.placeholder,type:"text",name:e.name,disabled:e.disabled||A(),onKeyDown:function(p){return q(p)},onPaste:function(p){return G(p)},onFocus:function(p){return Q(p)},onBlur:function(p){return V(p)},readOnly:e.readOnly},le),d("input"));return s.createElement("li",r,s.createElement("input",i))},oe=function(){return e.value?e.value.map(te):null},re=function(){var r=oe(),i=ne(),a=o({ref:X,className:b("container",{focusedState:m}),onClick:function(f){return Y()},"data-p-disabled":e.disabled,"data-p-focus":m},d("container"));return s.createElement("ul",a,r,i)},ie=g.isNotEmpty(e.tooltip),ae=I.getOtherProps(e),le=g.reduceKeys(ae,w.ARIA_PROPS),pe=re(),se=o({id:e.id,ref:R,className:C(e.className,b("root",{isFilled:Z,focusedState:m})),style:e.style},d("root"));return s.createElement(s.Fragment,null,s.createElement("div",se,pe),ie&&s.createElement(ve,E({target:c,content:e.tooltip},e.tooltipOptions,{pt:d("tooltip")})))}));z.displayName="Chips";const Ue={title:"Form/Chips",component:z,parameters:{layout:"centered"},argTypes:{addOnBlur:{control:"boolean",description:"Whether to add an item when the input loses focus.",options:null},allowDuplicate:{control:"boolean",description:"Whether to allow duplicate values or not.",options:null},ariaLabelledBy:{control:"text",description:"Establishes relationships between the component and label(s) where its value should be one or more element IDs.",options:null},autoFocus:{control:"boolean",description:"When present, it specifies that the component should automatically get focus on load.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},disabled:{control:"boolean",description:"When present, it specifies that the element should be disabled.",options:null},inputId:{control:"text",description:"Identifier of the input element.",options:null},inputRef:{control:"object",description:"Reference of the input element.",options:null},keyfilter:{control:"object",description:"Format definition of the keys to block.",options:null},max:{control:"number",description:"Maximum number of entries allowed.",options:null},name:{control:"text",description:"Name of the input field.",options:null},placeholder:{control:"text",description:"Advisory information to display on input.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},readOnly:{control:"boolean",description:"When present, it specifies that the element should be read-only.",options:null},removable:{control:"select",description:"Whether an item is removable.",options:["boolean","Function"]},removeIcon:{control:"select",description:"Icon of the remove element.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},separator:{control:"text",description:"Separator char to add an item when pressed in addition to the enter key. Currently only possible value is ','.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"object",description:"Value of the component.",options:null}}},k={args:{placeholder:"Chips",unstyled:!1}};var U,H,L;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    "placeholder": "Chips",
    "unstyled": false
  }
}`,...(L=(H=k.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const He=["Default"];export{k as Default,He as __namedExportsOrder,Ue as default};
