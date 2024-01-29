import{r as o}from"./index-76fb7be0.js";import{a as S,I as E,c as h}from"./api.esm-4644ee78.js";import{C as _,u as T}from"./componentbase.esm-1c796d7e.js";import{d as D}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";function p(t){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(t)}function N(t,e){if(p(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(p(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function U(t){var e=N(t,"string");return p(e)==="symbol"?e:String(e)}function d(t,e,n){return e=U(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var I={value:"p-tag-value",icon:"p-tag-icon",root:function(e){var n=e.props;return h("p-tag p-component",d(d({},"p-tag-".concat(n.severity),n.severity!==null),"p-tag-rounded",n.rounded))}},M=`
@layer primereact {
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-tag-icon,
    .p-tag-value,
    .p-tag-icon.pi {
        line-height: 1.5;
    }
    
    .p-tag.p-tag-rounded {
        border-radius: 10rem;
    }
}
`,a=_.extend({defaultProps:{__TYPE:"Tag",value:null,severity:null,rounded:!1,icon:null,style:null,className:null,children:void 0},css:{classes:I,styles:M}});function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?f(Object(n),!0).forEach(function(r){d(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var b=o.forwardRef(function(t,e){var n=D(),r=o.useContext(S),i=a.getProps(t,r),l=a.setMetaData({props:i}),c=l.ptm,u=l.cx,w=l.isUnstyled;T(a.css.styles,w,{name:"tag"});var m=o.useRef(null),P=n({className:u("icon")},c("icon")),O=E.getJSXIcon(i.icon,C({},P),{props:i});o.useImperativeHandle(e,function(){return{props:i,getElement:function(){return m.current}}});var j=n({ref:m,className:h(i.className,u("root")),style:i.style},a.getOtherProps(i),c("root")),x=n({className:u("value")},c("value"));return o.createElement("span",j,O,o.createElement("span",x,i.value),o.createElement("span",null,i.children))});b.displayName="Tag";const J={title:"Misc/Tag",component:b,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},icon:{control:"select",description:"Icon of the tag to display next to the value.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},rounded:{control:"boolean",description:"Whether the corners of the tag are rounded.",options:null},severity:{control:"select",description:"Severity type of the tag.",options:["null","success","warning","info","danger"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"text",description:"Value to display inside the tag.",options:null}}},s={args:{value:0,unstyled:!1}};var g,y,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const V=["Default"];export{s as Default,V as __namedExportsOrder,J as default};
