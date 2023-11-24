import{r}from"./index-76fb7be0.js";import{c as Q,P as V,m as g,D as o}from"./api.esm-2e2d159c.js";import{d as Z,f as ee}from"./hooks.esm-c93f10ee.js";import{C as re,u as ne}from"./componentbase.esm-b0caea1e.js";import"./_commonjsHelpers-de833af9.js";function H(){return H=Object.assign?Object.assign.bind():function(m){for(var u=1;u<arguments.length;u++){var p=arguments[u];for(var a in p)Object.prototype.hasOwnProperty.call(p,a)&&(m[a]=p[a])}return m},H.apply(this,arguments)}var y=re.extend({defaultProps:{__TYPE:"ScrollPanel",id:null,style:null,className:null,children:void 0},css:{classes:{root:function(u){var p=u.props;return Q("p-scrollpanel p-component",p.className)},wrapper:"p-scrollpanel-wrapper",content:"p-scrollpanel-content",barx:"p-scrollpanel-bar p-scrollpanel-bar-x",bary:"p-scrollpanel-bar p-scrollpanel-bar-y"},styles:`
        @layer primereact {
            .p-scrollpanel-wrapper {
                overflow: hidden;
                width: 100%;
                height: 100%;
                position: relative;
                z-index: 1;
                float: left;
            }
            
            .p-scrollpanel-content {
                height: calc(100% + 18px);
                width: calc(100% + 18px);
                padding: 0 18px 18px 0;
                position: relative;
                overflow: auto;
                box-sizing: border-box;
            }
            
            .p-scrollpanel-bar {
                position: relative;
                background: #c1c1c1;
                border-radius: 3px;
                z-index: 2;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.25s linear;
            }
            
            .p-scrollpanel-bar-y {
                width: 9px;
                top: 0;
            }
            
            .p-scrollpanel-bar-x {
                height: 9px;
                bottom: 0;
            }
            
            .p-scrollpanel-hidden {
                visibility: hidden;
            }
            
            .p-scrollpanel:hover .p-scrollpanel-bar,
            .p-scrollpanel:active .p-scrollpanel-bar {
                opacity: 1;
            }
            
            .p-scrollpanel-grabbed {
                user-select: none;
            }
        }
        `}}),T=r.forwardRef(function(m,u){var p=r.useContext(V),a=y.getProps(m,p),M=y.setMetaData({props:a}),f=M.ptm,v=M.cx,U=M.isUnstyled;ne(y.css.styles,U,{name:"scrollpanel"});var s=r.useRef(null),t=r.useRef(null),l=r.useRef(null),c=r.useRef(null),B=r.useRef(!1),C=r.useRef(!1),P=r.useRef(null),E=r.useRef(null),b=r.useRef(null),x=r.useRef(null),h=r.useRef(null),Y=r.useRef(!1),_=function(){var e=getComputedStyle(s.current),i=getComputedStyle(l.current),D=o.getHeight(s.current)-parseInt(i.height,10);e["max-height"]!=="none"&&D===0&&(t.current.offsetHeight+parseInt(i.height,10)>parseInt(e["max-height"],10)?s.current.style.height=e["max-height"]:s.current.style.height=t.current.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},d=function(){var e=t.current.scrollWidth,i=t.current.clientWidth,D=(s.current.clientHeight-l.current.clientHeight)*-1;b.current=i/e;var L=t.current.scrollHeight,J=t.current.clientHeight,K=(s.current.clientWidth-c.current.clientWidth)*-1;x.current=J/L,h.current=window.requestAnimationFrame(function(){b.current>=1?o.addClass(l.current,"p-scrollpanel-hidden"):(o.removeClass(l.current,"p-scrollpanel-hidden"),l.current.style.cssText="width:"+Math.max(b.current*100,10)+"%; left:"+t.current.scrollLeft/e*100+"%;bottom:"+D+"px;"),x.current>=1?o.addClass(c.current,"p-scrollpanel-hidden"):(o.removeClass(c.current,"p-scrollpanel-hidden"),c.current.style.cssText="height:"+Math.max(x.current*100,10)+"%; top: calc("+t.current.scrollTop/L*100+"% - "+l.current.clientHeight+"px);right:"+K+"px;")})},z=function(e){C.current=!0,E.current=e.pageY,o.addClass(c.current,"p-scrollpanel-grabbed"),o.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",R),document.addEventListener("mouseup",F),e.preventDefault()},j=function(e){B.current=!0,P.current=e.pageX,o.addClass(l.current,"p-scrollpanel-grabbed"),o.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",R),document.addEventListener("mouseup",F),e.preventDefault()},R=function(e){B.current?S(e):(C.current||S(e),X(e))},S=function(e){var i=e.pageX-P.current;P.current=e.pageX,h.current=window.requestAnimationFrame(function(){t.current.scrollLeft+=i/b.current})},X=function(e){var i=e.pageY-E.current;E.current=e.pageY,h.current=window.requestAnimationFrame(function(){t.current.scrollTop+=i/x.current})},F=function n(e){o.removeClass(c.current,"p-scrollpanel-grabbed"),o.removeClass(l.current,"p-scrollpanel-grabbed"),o.removeClass(document.body,"p-scrollpanel-grabbed"),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",n),B.current=!1,C.current=!1},A=function(){d()};Z(function(){d(),window.addEventListener("resize",d),_(),Y.current=!0}),ee(function(){Y.current&&window.removeEventListener("resize",d),h.current&&window.cancelAnimationFrame(h.current)}),r.useImperativeHandle(u,function(){return{props:a,refresh:A,getElement:function(){return s.current},getContent:function(){return t.current},getXBar:function(){return l.current},getYBar:function(){return c.current}}});var I=g({id:a.id,ref:s,style:a.style,className:v("root")},y.getOtherProps(a),f("root")),q=g({className:v("wrapper")},f("wrapper")),k=g({className:v("content"),onScroll:d,onMouseEnter:d},f("content")),$=g({ref:l,className:v("barx"),onMouseDown:j},f("barx")),G=g({ref:c,className:v("bary"),onMouseDown:z},f("bary"));return r.createElement("div",I,r.createElement("div",q,r.createElement("div",H({ref:t},k),a.children)),r.createElement("div",$),r.createElement("div",G))});T.displayName="ScrollPanel";const ce={title:"Panel/ScrollPanel",component:T,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},w={args:{unstyled:!1}};var N,W,O;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(O=(W=w.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const ie=["Default"];export{w as Default,ie as __namedExportsOrder,ce as default};
//# sourceMappingURL=ScrollPanel.stories-1b457a50.js.map
