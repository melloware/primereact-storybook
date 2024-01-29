import{r as n}from"./index-76fb7be0.js";import{c as Me,a as Be,D as i,U as Ce}from"./api.esm-4644ee78.js";import{C as Te,u as Pe}from"./componentbase.esm-1c796d7e.js";import{d as Ae,a as Ee,c as _e}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";function O(){return O=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},O.apply(this,arguments)}function Le(t){if(Array.isArray(t))return t}function He(t,o){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var u,l,S,v,g=[],h=!0,R=!1;try{if(S=(r=r.call(t)).next,o===0){if(Object(r)!==r)return;h=!1}else for(;!(h=(u=S.call(r)).done)&&(g.push(u.value),g.length!==o);h=!0);}catch(D){R=!0,l=D}finally{try{if(!h&&r.return!=null&&(v=r.return(),Object(v)!==v))return}finally{if(R)throw l}}return g}}function te(t,o){(o==null||o>t.length)&&(o=t.length);for(var r=0,u=new Array(o);r<o;r++)u[r]=t[r];return u}function Ue(t,o){if(t){if(typeof t=="string")return te(t,o);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return te(t,o)}}function Fe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(t,o){return Le(t)||He(t,o)||Ue(t,o)||Fe()}var P=Te.extend({defaultProps:{__TYPE:"ScrollPanel",id:null,style:null,className:null,children:void 0,step:5},css:{classes:{root:function(o){var r=o.props;return Me("p-scrollpanel p-component",r.className)},wrapper:"p-scrollpanel-wrapper",content:"p-scrollpanel-content",barx:"p-scrollpanel-bar p-scrollpanel-bar-x",bary:"p-scrollpanel-bar p-scrollpanel-bar-y"},styles:`
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
        `}}),le=n.forwardRef(function(t,o){var r=Ae(),u=n.useContext(Be),l=P.getProps(t,u),S=n.useState(l.id),v=T(S,2),g=v[0],h=v[1],R=n.useState("vertical"),D=T(R,2),E=D[0],b=D[1],_=P.setMetaData({props:l}),y=_.ptm,w=_.cx,se=_.isUnstyled;Pe(P.css.styles,se,{name:"scrollpanel"});var f=n.useRef(null),s=n.useRef(null),p=n.useRef(null),d=n.useRef(null),ce=n.useState(0),z=T(ce,2),N=z[0],ie=z[1],ue=n.useState(0),j=T(ue,2),W=j[0],pe=j[1],L=n.useRef(!1),H=n.useRef(!1),U=n.useRef(null),F=n.useRef(null),M=n.useRef(null),B=n.useRef(null),x=n.useRef(null),$=n.useRef(!1),Y=n.useRef(null),k=g+"_content",de=function(){var e=getComputedStyle(f.current),c=getComputedStyle(p.current),X=i.getHeight(f.current)-parseInt(c.height,10);e["max-height"]!=="none"&&X===0&&(s.current.offsetHeight+parseInt(c.height,10)>parseInt(e["max-height"],10)?f.current.style.height=e["max-height"]:f.current.style.height=s.current.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},m=function(){var e=s.current.scrollWidth,c=s.current.clientWidth,X=(f.current.clientHeight-p.current.clientHeight)*-1;M.current=c/e;var re=s.current.scrollHeight,Re=s.current.clientHeight,De=(f.current.clientWidth-d.current.clientWidth)*-1;B.current=Re/re,x.current=window.requestAnimationFrame(function(){M.current>=1?i.addClass(p.current,"p-scrollpanel-hidden"):(i.removeClass(p.current,"p-scrollpanel-hidden"),p.current.style.cssText="width:"+Math.max(M.current*100,10)+"%; left:"+s.current.scrollLeft/e*100+"%;bottom:"+X+"px;"),B.current>=1?i.addClass(d.current,"p-scrollpanel-hidden"):(i.removeClass(d.current,"p-scrollpanel-hidden"),d.current.style.cssText="height:"+Math.max(B.current*100,10)+"%; top: calc("+s.current.scrollTop/re*100+"% - "+p.current.clientHeight+"px);right:"+De+"px;")})},K=function(e){p.current.isSameNode(e.target)?b("horizontal"):d.current.isSameNode(e.target)&&b("vertical")},q=function(){E==="horizontal"&&b("vertical")},fe=function(e){N!==e.target.scrollLeft?(ie(e.target.scrollLeft),b("horizontal")):W!==e.target.scrollTop&&(pe(e.target.scrollTop),b("vertical")),m()},me=function(e){H.current=!0,F.current=e.pageY,i.addClass(d.current,"p-scrollpanel-grabbed"),i.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",I),document.addEventListener("mouseup",Q),e.preventDefault()},ve=function(e){L.current=!0,U.current=e.pageX,i.addClass(p.current,"p-scrollpanel-grabbed"),i.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",I),document.addEventListener("mouseup",Q),e.preventDefault()},I=function(e){L.current?G(e):(H.current||G(e),J(e))},G=function(e){var c=e.pageX-U.current;U.current=e.pageX,x.current=window.requestAnimationFrame(function(){s.current.scrollLeft+=c/M.current})},J=function(e){var c=e.pageY-F.current;F.current=e.pageY,x.current=window.requestAnimationFrame(function(){s.current.scrollTop+=c/B.current})},Q=function a(e){i.removeClass(d.current,"p-scrollpanel-grabbed"),i.removeClass(p.current,"p-scrollpanel-grabbed"),i.removeClass(document.body,"p-scrollpanel-grabbed"),document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",a),L.current=!1,H.current=!1},V=function(e){if(E==="vertical")switch(e.code){case"ArrowDown":{C("scrollTop",l.step),e.preventDefault();break}case"ArrowUp":{C("scrollTop",l.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(E==="horizontal")switch(e.code){case"ArrowRight":{C("scrollLeft",l.step),e.preventDefault();break}case"ArrowLeft":{C("scrollLeft",l.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},Z=function(){ee()},he=function(e,c){s.current[e]+=c,m()},C=function(e,c){ee(),Y.current=setTimeout(function(){he(e,c)},40)},ee=function(){Y.current&&clearTimeout(Y.current)},ge=function(){m()};Ee(function(){l.id||h(Ce()),m(),window.addEventListener("resize",m),de(),$.current=!0}),_e(function(){$.current&&window.removeEventListener("resize",m),x.current&&window.cancelAnimationFrame(x.current)}),n.useImperativeHandle(o,function(){return{props:l,refresh:ge,getElement:function(){return f.current},getContent:function(){return s.current},getXBar:function(){return p.current},getYBar:function(){return d.current}}});var be=r({id:l.id,ref:f,style:l.style,className:w("root")},P.getOtherProps(l),y("root")),ye=r({className:w("wrapper")},y("wrapper")),we=r({className:w("content"),onScroll:fe,onMouseEnter:m},y("content")),xe=r({ref:p,role:"scrollbar",className:w("barx"),tabIndex:0,"aria-valuenow":W,"aria-controls":k,"aria-orientation":"horizontal",onFocus:K,onBlur:q,onKeyDown:V,onKeyUp:Z,onMouseDown:ve},y("barx")),Se=r({ref:d,role:"scrollbar",className:w("bary"),tabIndex:0,"aria-valuenow":N,"aria-controls":k,"aria-orientation":"vertical",onFocus:K,onBlur:q,onKeyDown:V,onKeyUp:Z,onMouseDown:me},y("bary"));return n.createElement("div",be,n.createElement("div",ye,n.createElement("div",O({ref:s},we),l.children)),n.createElement("div",xe),n.createElement("div",Se))});le.displayName="ScrollPanel";const Ne={title:"Panel/ScrollPanel",component:le,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},A={args:{unstyled:!1}};var ne,oe,ae;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(ae=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};const je=["Default"];export{A as Default,je as __namedExportsOrder,Ne as default};
