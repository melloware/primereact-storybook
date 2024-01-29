import{r}from"./index-76fb7be0.js";import{c as T,P as X,m as p,O as m}from"./api.esm-e57be548.js";import{C as q,u as H}from"./componentbase.esm-f35515f0.js";import"./_commonjsHelpers-de833af9.js";import"./hooks.esm-2e882e60.js";function h(){return h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},h.apply(this,arguments)}function c(t){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(t)}function A(t,e){if(c(t)!=="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(c(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function F(t){var e=A(t,"string");return c(e)==="symbol"?e:String(e)}function x(t,e,i){return e=F(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v=q.extend({defaultProps:{__TYPE:"Timeline",align:"left",className:null,content:null,dataKey:null,layout:"vertical",marker:null,opposite:null,value:null,children:void 0},css:{classes:{marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",content:"p-timeline-event-content",root:function(e){var i=e.props;return T("p-timeline p-component",x(x({},"p-timeline-".concat(i.align),!0),"p-timeline-".concat(i.layout),!0),i.className)}},styles:`
        @layer primereact {
            .p-timeline {
                display: flex;
                flex-grow: 1;
                flex-direction: column;
            }
        
            .p-timeline-left .p-timeline-event-opposite {
                text-align: right;
            }
        
            .p-timeline-left .p-timeline-event-content {
                text-align: left;
            }
        
            .p-timeline-right .p-timeline-event {
                flex-direction: row-reverse;
            }
        
            .p-timeline-right .p-timeline-event-opposite {
                text-align: left;
            }
        
            .p-timeline-right .p-timeline-event-content {
                text-align: right;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
                flex-direction: row-reverse;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
                text-align: right;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
                text-align: left;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
                text-align: left;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
                text-align: right;
            }
        
            .p-timeline-event {
                display: flex;
                position: relative;
                min-height: 70px;
            }
        
            .p-timeline-event:last-child {
                min-height: 0;
            }
        
            .p-timeline-event-opposite {
                flex: 1;
                padding: 0 1rem;
            }
        
            .p-timeline-event-content {
                flex: 1;
                padding: 0 1rem;
            }
        
            .p-timeline-event-separator {
                flex: 0;
                display: flex;
                align-items: center;
                flex-direction: column;
            }
        
            .p-timeline-event-marker {
                display: flex;
                align-self: baseline;
            }
        
            .p-timeline-event-connector {
                flex-grow: 1;
            }
        
            .p-timeline-horizontal {
                flex-direction: row;
            }
        
            .p-timeline-horizontal .p-timeline-event {
                flex-direction: column;
                flex: 1;
            }
        
            .p-timeline-horizontal .p-timeline-event:last-child {
                flex: 0;
            }
        
            .p-timeline-horizontal .p-timeline-event-separator {
                flex-direction: row;
            }
        
            .p-timeline-horizontal .p-timeline-event-connector  {
                width: 100%;
            }
        
            .p-timeline-bottom .p-timeline-event {
                flex-direction: column-reverse;
            }
        
            .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
                flex-direction: column-reverse;
            }
        }
    `}}),N=r.memo(r.forwardRef(function(t,e){var i=r.useContext(X),n=v.getProps(t,i),f=v.setMetaData({props:n}),g=f.ptm,a=f.cx,O=f.isUnstyled;H(v.css.styles,O,{name:"timeline"});var s=function(l,o){return g(l,{context:{index:o}})},y=r.useRef(null),S=function(l,o){return n.dataKey?m.resolveFieldData(l,n.dataKey):"pr_id__".concat(o)},_=function(){return n.value&&n.value.map(function(l,o){var k=m.getJSXElement(n.opposite,l,o),j=p({className:a("marker")},s("marker",o)),K=m.getJSXElement(n.marker,l,o)||r.createElement("div",j),D=p({className:a("connector")},s("connector",o)),U=o!==n.value.length-1&&r.createElement("div",D),C=m.getJSXElement(n.content,l,o),R=p({className:a("event")},s("event",o)),B=p({className:a("opposite")},s("opposite",o)),J=p({className:a("separator")},s("separator",o)),M=p({className:a("content")},s("content",o));return r.createElement("div",h({key:S(l,o)},R),r.createElement("div",B,k),r.createElement("div",J,K,U),r.createElement("div",M,C))})};r.useImperativeHandle(e,function(){return{props:n,getElement:function(){return y.current}}});var w=_(),z=p({ref:y,className:T(n.className,a("root"))},v.getOtherProps(n),g("root"));return r.createElement("div",z,w)}));N.displayName="Timeline";const G={title:"Data/Timeline",component:N,parameters:{layout:"centered"},argTypes:{align:{control:"select",description:'Position of the timeline bar relative to the content. Valid values are "left", "right for vertical layout and "top", "bottom" for horizontal layout.',options:["alternate","left","top","bottom","right"]},children:{control:"text",description:"Used to get the child elements of the component.",options:null},content:{control:"text",description:"Template of the content.",options:null},dataKey:{control:"text",description:"Name of the field that uniquely identifies a record in the data. Should be a unique business key to prevent re-rendering.",options:null},layout:{control:"select",description:'Orientation of the timeline, valid values are "vertical" and "horizontal".',options:["horizontal","vertical"]},marker:{control:"text",description:"Template content allows placing a custom event marker instead of the default one.",options:null},opposite:{control:"text",description:"Template content to be placed at the other side of the bar.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"object",description:"An array of events to display.",options:null}}},u={args:{value:0,unstyled:!1}};var b,P,E;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(E=(P=u.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const L=["Default"];export{u as Default,L as __namedExportsOrder,G as default};
