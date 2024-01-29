import{r as o}from"./index-76fb7be0.js";import{a as D,c as P}from"./api.esm-4644ee78.js";import{C as j,u as E}from"./componentbase.esm-1c796d7e.js";import{d as N}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";var C={root:function(n){var e=n.props,i=n.horizontal,t=n.vertical;return P("p-divider p-component p-divider-".concat(e.layout," p-divider-").concat(e.type),{"p-divider-left":i&&(!e.align||e.align==="left"),"p-divider-right":i&&e.align==="right","p-divider-center":i&&e.align==="center"||t&&(!e.align||e.align==="center"),"p-divider-top":t&&e.align==="top","p-divider-bottom":t&&e.align==="bottom"},e.className)},content:"p-divider-content"},S=`
@layer primereact {
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
    }
    
    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        width: 100%;
        content: "";
    }
    
    .p-divider-horizontal.p-divider-left {
        justify-content: flex-start;
    }
    
    .p-divider-horizontal.p-divider-right {
        justify-content: flex-end;
    }
    
    .p-divider-horizontal.p-divider-center {
        justify-content: center;
    }
    
    .p-divider-content {
        z-index: 1;
    }
    
    .p-divider-vertical {
        min-height: 100%;
        margin: 0 1rem;
        display: flex;
        position: relative;
        justify-content: center;
    }
    
    .p-divider-vertical:before {
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        height: 100%;
        content: "";
    }
    
    .p-divider-vertical.p-divider-top {
        align-items: flex-start;
    }
    
    .p-divider-vertical.p-divider-center {
        align-items: center;
    }
    
    .p-divider-vertical.p-divider-bottom {
        align-items: flex-end;
    }
    
    .p-divider-solid.p-divider-horizontal:before {
        border-top-style: solid;
    }
    
    .p-divider-solid.p-divider-vertical:before {
        border-left-style: solid;
    }
    
    .p-divider-dashed.p-divider-horizontal:before {
        border-top-style: dashed;
    }
    
    .p-divider-dashed.p-divider-vertical:before {
        border-left-style: dashed;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-top-style: dotted;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-left-style: dotted;
    }
}
`,U={root:function(n){var e=n.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},l=j.extend({defaultProps:{__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null,children:void 0},css:{classes:C,styles:S,inlineStyles:U}}),m=o.forwardRef(function(d,n){var e=N(),i=o.useContext(D),t=l.getProps(d,i),r=l.setMetaData({props:t}),s=r.ptm,p=r.cx,h=r.sx,y=r.isUnstyled;E(l.css.styles,y,{name:"divider"});var c=o.useRef(null),g=t.layout==="horizontal",b=t.layout==="vertical";o.useImperativeHandle(n,function(){return{props:t,getElement:function(){return c.current}}});var x=e({ref:c,style:h("root"),className:p("root",{horizontal:g,vertical:b}),"aria-orientation":t.layout,role:"separator"},l.getOtherProps(t),s("root")),z=e({className:p("content")},s("content"));return o.createElement("div",x,o.createElement("div",z,t.children))});m.displayName="Divider";const k={title:"Panel/Divider",component:m,parameters:{layout:"centered"},argTypes:{align:{control:"select",description:'Alignment of the content, options are "left", "center", "right" for horizontal layout and "top", "center", "bottom" for vertical.',options:["center","left","top","bottom","right"]},children:{control:"text",description:"Used to get the child elements of the component.",options:null},layout:{control:"select",description:'Specifies the orientation, valid values are "horizontal" and "vertical".',options:["horizontal","vertical"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},type:{control:"select",description:'Border style type, default is "solid" and other options are "dashed" and "dotted".',options:["dashed","dotted","solid"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},a={args:{unstyled:!1}};var v,u,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const H=["Default"];export{a as Default,H as __namedExportsOrder,k as default};
