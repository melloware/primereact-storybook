import{r}from"./index-76fb7be0.js";import{c as $,P as ne,m as c,U as oe,O as y,I as ie}from"./api.esm-e57be548.js";import{C as re,u as ae}from"./componentbase.esm-f35515f0.js";import{C as le}from"./csstransition.esm-2b0eb2be.js";import{a as pe}from"./hooks.esm-2e882e60.js";import{M as se}from"./index.esm-fe2936ef.js";import{P as ce}from"./index.esm-cc1f0761.js";import{R as ue}from"./ripple.esm-42b8b102.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-64142d35.js";function _(){return _=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},_.apply(this,arguments)}function de(t){if(Array.isArray(t))return t}function me(t,o){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var e,x,g,l,h=[],f=!0,v=!1;try{if(g=(n=n.call(t)).next,o===0){if(Object(n)!==n)return;f=!1}else for(;!(f=(e=g.call(n)).done)&&(h.push(e.value),h.length!==o);f=!0);}catch(S){v=!0,x=S}finally{try{if(!f&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(v)throw x}}return h}}function M(t,o){(o==null||o>t.length)&&(o=t.length);for(var n=0,e=new Array(o);n<o;n++)e[n]=t[n];return e}function fe(t,o){if(t){if(typeof t=="string")return M(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(t,o)}}function ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(t,o){return de(t)||me(t,o)||fe(t,o)||ge()}var E=re.extend({defaultProps:{__TYPE:"Panel",id:null,header:null,headerTemplate:null,footer:null,footerTemplate:null,toggleable:null,style:null,className:null,collapsed:null,expandIcon:null,collapseIcon:null,icons:null,transitionOptions:null,onExpand:null,onCollapse:null,onToggle:null,children:void 0},css:{classes:{root:function(o){var n=o.props;return $("p-panel p-component",{"p-panel-toggleable":n.toggleable})},header:"p-panel-header",title:"p-panel-title",icons:"p-panel-icons",toggler:"p-panel-header-icon p-panel-toggler p-link",togglerIcon:"p-panel-header-icon p-panel-toggler p-link",toggleableContent:"p-toggleable-content",content:"p-panel-content",footer:"p-panel-footer",transition:"p-toggleable-content"},styles:`
        @layer primereact {
            .p-panel-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            .p-panel-title {
              line-height: 1;
            }
            
            .p-panel-header-icon {
              display: inline-flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              text-decoration: none;
              overflow: hidden;
              position: relative;
            }
        }
        `}}),B=r.forwardRef(function(t,o){var n=r.useContext(ne),e=E.getProps(t,n),x=r.useState(e.id),g=k(x,2),l=g[0],h=g[1],f=r.useState(e.collapsed),v=k(f,2),S=v[0],N=v[1],O=r.useRef(null),T=r.useRef(null),u=e.toggleable?e.onToggle?e.collapsed:S:!1,R=l+"_header",j=l+"_content",I=E.setMetaData({props:e,state:{id:l,collapsed:u}}),p=I.ptm,s=I.cx,F=I.isUnstyled;ae(E.css.styles,F,{name:"panel"});var P=function(i){e.toggleable&&(u?A(i):U(i),i&&(e.onToggle&&e.onToggle({originalEvent:i,value:!u}),i.preventDefault()))},A=function(i){e.onToggle||N(!1),e.onExpand&&i&&e.onExpand(i)},U=function(i){e.onToggle||N(!0),e.onCollapse&&i&&e.onCollapse(i)};r.useImperativeHandle(o,function(){return{props:e,toggle:P,expand:A,collapse:U,getElement:function(){return O.current},getContent:function(){return T.current}}}),pe(function(){l||h(oe())});var W=function(){if(e.toggleable){var i=l+"_label",m=c({className:s("toggler"),onClick:P,id:i,"aria-controls":j,"aria-expanded":!u,role:"tab"},p("toggler")),a=c(p("togglericon")),b=u?e.expandIcon||r.createElement(ce,a):e.collapseIcon||r.createElement(se,a),w=ie.getJSXIcon(b,a,{props:e,collapsed:u});return r.createElement("button",m,w,r.createElement(ue,null))}return null},q=function(){var i=y.getJSXElement(e.header,e),m=y.getJSXElement(e.icons,e),a=W(),b=c({id:R,className:s("title")},p("title")),w=r.createElement("span",b,i),Z=c({className:s("icons")},p("icons")),D=r.createElement("div",Z,m,a),ee=c({className:s("header")},p("header")),z=r.createElement("div",ee,w,D);if(e.headerTemplate){var te={className:"p-panel-header",titleClassName:"p-panel-title",iconsClassName:"p-panel-icons",togglerClassName:"p-panel-header-icon p-panel-toggler p-link",onTogglerClick:P,titleElement:w,iconsElement:D,togglerElement:a,element:z,props:e,collapsed:u};return y.getJSXElement(e.headerTemplate,te)}else if(e.header||e.toggleable)return z;return null},L=function(){var i=c({ref:T,className:s("toggleableContent"),"aria-hidden":u,role:"region",id:j,"aria-labelledby":R},p("toggleablecontent")),m=c({className:s("content")},p("content")),a=c({classNames:s("transition"),timeout:{enter:1e3,exit:450},in:!u,unmountOnExit:!0,options:e.transitionOptions},p("transition"));return r.createElement(le,_({nodeRef:T},a),r.createElement("div",i,r.createElement("div",m,e.children)))},Y=function(){var i=y.getJSXElement(e.footer,e),m=c({className:s("footer")},p("footer")),a=r.createElement("div",m,i);if(e.footerTemplate){var b={className:s("footer"),element:a,props:e};return y.getJSXElement(e.footerTemplate,b)}else if(e.footer)return a;return null},G=c({id:l,ref:O,style:e.style,className:$(e.className,s("root"))},E.getOtherProps(e),p("root")),K=q(),Q=L(),V=Y();return r.createElement("div",G,K,Q,V)});B.displayName="Panel";const _e={title:"Panel/Panel",component:B,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},collapsed:{control:"boolean",description:"Defines the initial state of panel content, supports one or two-way binding as well.",options:null},collapseIcon:{control:"select",description:"Icon of a collapsed tab.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},expandIcon:{control:"select",description:"Icon of a expanded tab.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},footer:{control:"text",description:"Custom footer template of the panel.",options:null},footerTemplate:{control:"text",description:"Footer template of the panel to customize more.",options:null},header:{control:"text",description:"Custom header template of the panel.",options:null},headerTemplate:{control:"text",description:"Header template of the panel to customize more.",options:null},icons:{control:"text",description:"Custom icons template for the header.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},toggleable:{control:"boolean",description:"Defines if content of panel can be expanded and collapsed.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},C={args:{unstyled:!1}};var H,J,X;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(X=(J=C.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};const Ne=["Default"];export{C as Default,Ne as __namedExportsOrder,_e as default};