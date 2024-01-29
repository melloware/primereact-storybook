import{r as n}from"./index-76fb7be0.js";import{a as P,c as b}from"./api.esm-4644ee78.js";import{C as S,u as D}from"./componentbase.esm-1c796d7e.js";import{d as E}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";var N={root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},W=`
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
`,_={spinner:function(i){var r=i.props;return{animationDuration:r.animationDuration}}},t=S.extend({defaultProps:{__TYPE:"ProgressSpinner",id:null,style:null,className:null,strokeWidth:"2",fill:"none",animationDuration:"2s",children:void 0},css:{classes:N,styles:W,inlineStyles:_}}),f=n.memo(n.forwardRef(function(l,i){var r=E(),g=n.useContext(P),e=t.getProps(l,g),c=n.useRef(null),s=t.setMetaData({props:e}),a=s.ptm,p=s.cx,h=s.sx,y=s.isUnstyled;D(t.css.styles,y,{name:"progressspinner"}),n.useImperativeHandle(i,function(){return{props:e,getElement:function(){return c.current}}});var k=r({id:e.id,ref:c,style:e.style,className:b(e.className,p("root")),role:"progressbar","aria-busy":!0},t.getOtherProps(e),a("root")),v=r({className:p("spinner"),viewBox:"25 25 50 50",style:h("spinner")},a("spinner")),x=r({className:p("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,strokeWidth:e.strokeWidth,strokeMiterlimit:"10"},a("circle"));return n.createElement("div",k,n.createElement("svg",v,n.createElement("circle",x)))}));f.displayName="ProgressSpinner";const R={title:"Misc/ProgressSpinner",component:f,parameters:{layout:"centered"},argTypes:{animationDuration:{control:"text",description:"Duration of the rotate animation.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},fill:{control:"text",description:"Color for the background of the circle.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},strokeWidth:{control:"text",description:"Width of the circle stroke.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},o={args:{unstyled:!1}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const j=["Default"];export{o as Default,j as __namedExportsOrder,R as default};
