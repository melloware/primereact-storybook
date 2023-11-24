import{r as i}from"./index-76fb7be0.js";import{P as S,m as u,I as E,c as h}from"./api.esm-2e2d159c.js";import{C as _,u as T}from"./componentbase.esm-b0caea1e.js";import"./_commonjsHelpers-de833af9.js";import"./hooks.esm-c93f10ee.js";function p(t){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(t)}function D(t,e){if(p(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(p(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function N(t){var e=D(t,"string");return p(e)==="symbol"?e:String(e)}function m(t,e,r){return e=N(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var U={value:"p-tag-value",icon:"p-tag-icon",root:function(e){var r=e.props;return h("p-tag p-component",m(m({},"p-tag-".concat(r.severity),r.severity!==null),"p-tag-rounded",r.rounded))}},I=`
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
`,a=_.extend({defaultProps:{__TYPE:"Tag",value:null,severity:null,rounded:!1,icon:null,style:null,className:null,children:void 0},css:{classes:U,styles:I}});function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?f(Object(r),!0).forEach(function(n){m(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var b=i.forwardRef(function(t,e){var r=i.useContext(S),n=a.getProps(t,r),o=a.setMetaData({props:n}),l=o.ptm,c=o.cx,w=o.isUnstyled;T(a.css.styles,w,{name:"tag"});var d=i.useRef(null),P=u({className:c("icon")},l("icon")),O=E.getJSXIcon(n.icon,C({},P),{props:n});i.useImperativeHandle(e,function(){return{props:n,getElement:function(){return d.current}}});var j=u({ref:d,className:h(n.className,c("root")),style:n.style},a.getOtherProps(n),l("root")),x=u({className:c("value")},l("value"));return i.createElement("span",j,O,i.createElement("span",x,n.value),i.createElement("span",null,n.children))});b.displayName="Tag";const W={title:"Misc/Tag",component:b,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},icon:{control:"select",description:"Icon of the tag to display next to the value.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},rounded:{control:"boolean",description:"Whether the corners of the tag are rounded.",options:null},severity:{control:"select",description:"Severity type of the tag.",options:["null","success","warning","info","danger"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"text",description:"Value to display inside the tag.",options:null}}},s={args:{value:0,unstyled:!1}};var g,y,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const J=["Default"];export{s as Default,J as __namedExportsOrder,W as default};
//# sourceMappingURL=Tag.stories-fe78b306.js.map
