import{r as i}from"./index-76fb7be0.js";import{P as D,m as c,c as P}from"./api.esm-e57be548.js";import{C as j,u as E}from"./componentbase.esm-f35515f0.js";import"./_commonjsHelpers-de833af9.js";import"./hooks.esm-2e882e60.js";var N={root:function(o){var e=o.props,t=o.horizontal,n=o.vertical;return P("p-divider p-component p-divider-".concat(e.layout," p-divider-").concat(e.type),{"p-divider-left":t&&(!e.align||e.align==="left"),"p-divider-right":t&&e.align==="right","p-divider-center":t&&e.align==="center"||n&&(!e.align||e.align==="center"),"p-divider-top":n&&e.align==="top","p-divider-bottom":n&&e.align==="bottom"},e.className)},content:"p-divider-content"},C=`
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
`,S={root:function(o){var e=o.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},r=j.extend({defaultProps:{__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null,children:void 0},css:{classes:N,styles:C,inlineStyles:S}}),m=i.forwardRef(function(a,o){var e=i.useContext(D),t=r.getProps(a,e),n=r.setMetaData({props:t}),d=n.ptm,s=n.cx,h=n.sx,y=n.isUnstyled;E(r.css.styles,y,{name:"divider"});var p=i.useRef(null),g=t.layout==="horizontal",b=t.layout==="vertical";i.useImperativeHandle(o,function(){return{props:t,getElement:function(){return p.current}}});var x=c({ref:p,style:h("root"),className:s("root",{horizontal:g,vertical:b}),role:"separator"},r.getOtherProps(t),d("root")),z=c({className:s("content")},d("content"));return i.createElement("div",x,i.createElement("div",z,t.children))});m.displayName="Divider";const M={title:"Panel/Divider",component:m,parameters:{layout:"centered"},argTypes:{align:{control:"select",description:'Alignment of the content, options are "left", "center", "right" for horizontal layout and "top", "center", "bottom" for vertical.',options:["center","left","top","bottom","right"]},children:{control:"text",description:"Used to get the child elements of the component.",options:null},layout:{control:"select",description:'Specifies the orientation, valid values are "horizontal" and "vertical".',options:["horizontal","vertical"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},type:{control:"select",description:'Border style type, default is "solid" and other options are "dashed" and "dotted".',options:["dashed","dotted","solid"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},l={args:{unstyled:!1}};var v,u,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const k=["Default"];export{l as Default,k as __namedExportsOrder,M as default};
