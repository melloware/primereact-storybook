import{r as t}from"./index-76fb7be0.js";import{c as O,P as U,O as i,m as n}from"./api.esm-2e2d159c.js";import{C as _,u as D}from"./componentbase.esm-b0caea1e.js";import"./_commonjsHelpers-de833af9.js";import"./hooks.esm-c93f10ee.js";var s=_.extend({defaultProps:{__TYPE:"Toolbar",id:null,style:null,className:null,left:null,right:null,start:null,center:null,end:null,children:void 0},css:{classes:{root:function(a){var p=a.props;return O("p-toolbar p-component",p.className)},start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},styles:`
        @layer primereact {
            .p-toolbar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            
            .p-toolbar-group-start,
            .p-toolbar-group-center,
            .p-toolbar-group-end {
                display: flex;
                align-items: center;
            }
            
            .p-toolbar-group-left,
            .p-toolbar-group-right {
                display: flex;
                align-items: center;
            }
        }
        `}}),b=t.memo(t.forwardRef(function(m,a){var p=t.useContext(U),e=s.getProps(m,p),d=t.useRef(null),h=i.getJSXElement(e.left||e.start,e),v=i.getJSXElement(e.center,e),y=i.getJSXElement(e.right||e.end,e),c=s.setMetaData({props:e}),o=c.ptm,r=c.cx,x=c.isUnstyled;D(s.css.styles,x,{name:"toolbar"}),t.useImperativeHandle(a,function(){return{props:e,getElement:function(){return d.current}}});var T=n({className:r("start")},o("start")),E=n({className:r("center")},o("center")),P=n({className:r("end")},o("end")),N=n({id:e.id,ref:d,style:e.style,className:r("root"),role:"toolbar"},s.getOtherProps(e),o("root"));return t.createElement("div",N,t.createElement("div",T,h),t.createElement("div",E,v),t.createElement("div",P,y))}));b.displayName="Toolbar";const J={title:"Panel/Toolbar",component:b,parameters:{layout:"centered"},argTypes:{center:{control:"text",description:"The template of center section.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},end:{control:"text",description:"The template of end section.",options:null},left:{control:"text",description:"The template of left section.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},right:{control:"text",description:"The template of right section.",options:null},start:{control:"text",description:"The template of start section.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},l={args:{unstyled:!1}};var u,f,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const M=["Default"];export{l as Default,M as __namedExportsOrder,J as default};
//# sourceMappingURL=Toolbar.stories-ee74107b.js.map
