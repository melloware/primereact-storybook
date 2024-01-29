import{r as t}from"./index-76fb7be0.js";import{c as O,a as U,O as c}from"./api.esm-4644ee78.js";import{C as _,u as D}from"./componentbase.esm-1c796d7e.js";import{d as S}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";var s=_.extend({defaultProps:{__TYPE:"Toolbar",id:null,style:null,className:null,left:null,right:null,start:null,center:null,end:null,children:void 0},css:{classes:{root:function(a){var o=a.props;return O("p-toolbar p-component",o.className)},start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},styles:`
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
        `}}),g=t.memo(t.forwardRef(function(i,a){var o=S(),b=t.useContext(U),e=s.getProps(i,b),m=t.useRef(null),h=c.getJSXElement(e.left||e.start,e),v=c.getJSXElement(e.center,e),y=c.getJSXElement(e.right||e.end,e),p=s.setMetaData({props:e}),r=p.ptm,n=p.cx,x=p.isUnstyled;D(s.css.styles,x,{name:"toolbar"}),t.useImperativeHandle(a,function(){return{props:e,getElement:function(){return m.current}}});var T=o({className:n("start")},r("start")),E=o({className:n("center")},r("center")),P=o({className:n("end")},r("end")),N=o({id:e.id,ref:m,style:e.style,className:n("root"),role:"toolbar"},s.getOtherProps(e),r("root"));return t.createElement("div",N,t.createElement("div",T,h),t.createElement("div",E,v),t.createElement("div",P,y))}));g.displayName="Toolbar";const J={title:"Panel/Toolbar",component:g,parameters:{layout:"centered"},argTypes:{center:{control:"text",description:"The template of center section.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},end:{control:"text",description:"The template of end section.",options:null},left:{control:"text",description:"The template of left section.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},right:{control:"text",description:"The template of right section.",options:null},start:{control:"text",description:"The template of start section.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},l={args:{unstyled:!1}};var d,u,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const X=["Default"];export{l as Default,X as __namedExportsOrder,J as default};
