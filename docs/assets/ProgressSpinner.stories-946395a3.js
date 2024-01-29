import{r as e}from"./index-76fb7be0.js";import{P,m as p,c as b}from"./api.esm-e57be548.js";import{C as S,u as D}from"./componentbase.esm-f35515f0.js";import"./_commonjsHelpers-de833af9.js";import"./hooks.esm-2e882e60.js";var E={root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},N=`
@layer primereact {
    .p-progress-spinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }
    
    .p-progress-spinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }
    
    .p-progress-spinner-svg {
        animation: p-progress-spinner-rotate 2s linear infinite;
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    
    .p-progress-spinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: #d62d20;
        animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }
}

@keyframes p-progress-spinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes p-progress-spinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}
`,W={spinner:function(t){var o=t.props;return{animationDuration:o.animationDuration}}},l=S.extend({defaultProps:{__TYPE:"ProgressSpinner",id:null,style:null,className:null,strokeWidth:"2",fill:"none",animationDuration:"2s",children:void 0},css:{classes:E,styles:N,inlineStyles:W}}),g=e.memo(e.forwardRef(function(c,t){var o=e.useContext(P),n=l.getProps(c,o),d=e.useRef(null),r=l.setMetaData({props:n}),i=r.ptm,a=r.cx,h=r.sx,y=r.isUnstyled;D(l.css.styles,y,{name:"progressspinner"}),e.useImperativeHandle(t,function(){return{props:n,getElement:function(){return d.current}}});var k=p({id:n.id,ref:d,style:n.style,className:b(n.className,a("root")),role:"alert","aria-busy":!0},i("root")),v=p({className:a("spinner"),viewBox:"25 25 50 50",style:h("spinner")},i("spinner")),x=p({className:a("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,strokeWidth:n.strokeWidth,strokeMiterlimit:"10"},i("circle"));return e.createElement("div",k,e.createElement("svg",v,e.createElement("circle",x)))}));g.displayName="ProgressSpinner";const R={title:"Misc/ProgressSpinner",component:g,parameters:{layout:"centered"},argTypes:{animationDuration:{control:"text",description:"Duration of the rotate animation.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},fill:{control:"text",description:"Color for the background of the circle.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},strokeWidth:{control:"text",description:"Width of the circle stroke.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},s={args:{unstyled:!1}};var m,u,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const O=["Default"];export{s as Default,O as __namedExportsOrder,R as default};
