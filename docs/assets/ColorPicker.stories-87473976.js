import{r as c}from"./index-76fb7be0.js";import{a as Pe,D as C,O as ye,c as Y,P as T,Z as K,m as ge}from"./api.esm-4644ee78.js";import{C as rn,u as on}from"./componentbase.esm-1c796d7e.js";import{d as an,i as ln,h as be,a as cn,b as xe,c as un}from"./hooks.esm-d069ba29.js";import{O as sn}from"./overlayservice.esm-582e1694.js";import{T as pn}from"./tooltip.esm-2acddad6.js";import{C as fn}from"./csstransition.esm-f87c8556.js";import{P as dn}from"./portal.esm-16954874.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";function D(n){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},D(n)}function vn(n,o){if(D(n)!=="object"||n===null)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var i=r.call(n,o||"default");if(D(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}function mn(n){var o=vn(n,"string");return D(o)==="symbol"?o:String(o)}function hn(n,o,r){return o=mn(o),o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n}function O(){return O=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},O.apply(this,arguments)}function yn(n){if(Array.isArray(n))return n}function gn(n,o){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var i,a,P,y,g=[],b=!0,E=!1;try{if(P=(r=r.call(n)).next,o===0){if(Object(r)!==r)return;b=!1}else for(;!(b=(i=P.call(r)).done)&&(g.push(i.value),g.length!==o);b=!0);}catch(f){E=!0,a=f}finally{try{if(!b&&r.return!=null&&(y=r.return(),Object(y)!==y))return}finally{if(E)throw a}}return g}}function Se(n,o){(o==null||o>n.length)&&(o=n.length);for(var r=0,i=new Array(o);r<o;r++)i[r]=n[r];return i}function bn(n,o){if(n){if(typeof n=="string")return Se(n,o);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Se(n,o)}}function xn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(n,o){return yn(n)||gn(n,o)||bn(n,o)||xn()}var Sn={root:function(o){var r=o.props;return Y("p-colorpicker p-component",{"p-colorpicker-overlay":!r.inline},r.className)},input:function(o){var r=o.props;return Y("p-colorpicker-preview p-inputtext",r.inputClassName,{"p-disabled":r.disabled})},panel:function(o){var r=o.panelProps,i=o.context;return Y("p-colorpicker-panel",r.panelClassName,{"p-colorpicker-overlay-panel":!r.inline,"p-disabled":r.disabled,"p-input-filled":i&&i.inputStyle==="filled"||T.inputStyle==="filled","p-ripple-disabled":i&&i.ripple===!1||T.ripple===!1})},content:"p-colorpicker-content",hueHandle:"p-colorpicker-hue-handle",hue:"p-colorpicker-hue",colorHandle:"p-colorpicker-color-handle",color:"p-colorpicker-color",selector:"p-colorpicker-color-selector",transition:"p-connected-overlay"},En=`
@layer primereact {
    .p-colorpicker {
        display: inline-block;
    }
    
    .p-colorpicker-dragging {
        cursor: pointer;
    }
    
    .p-colorpicker-overlay {
        position: relative;
    }
    
    .p-colorpicker-panel {
        position: relative;
        width: 193px;
        height: 166px;
    }
    
    .p-colorpicker-overlay-panel {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-colorpicker-preview {
        cursor: pointer;
    }
    
    .p-colorpicker-panel .p-colorpicker-content {
        position: relative;
    }
    
    .p-colorpicker-panel .p-colorpicker-color-selector {
        width: 150px;
        height: 150px;
        top: 8px;
        left: 8px;
        position: absolute;
    }
    
    .p-colorpicker-panel .p-colorpicker-color {
        width: 150px;
        height: 150px;
    }
    
    .p-colorpicker-panel .p-colorpicker-color-handle {
        position: absolute;
        top: 0px;
        left: 150px;
        border-radius: 100%;
        width: 10px;
        height: 10px;
        border-width: 1px;
        border-style: solid;
        margin: -5px 0 0 -5px;
        cursor: pointer;
        opacity: 0.85;
    }
    
    .p-colorpicker-panel .p-colorpicker-hue {
        width: 17px;
        height: 150px;
        top: 8px;
        left: 167px;
        position: absolute;
        opacity: 0.85;
    }
    
    .p-colorpicker-panel .p-colorpicker-hue-handle {
        position: absolute;
        top: 150px;
        left: 0px;
        width: 21px;
        margin-left: -2px;
        margin-top: -5px;
        height: 10px;
        border-width: 2px;
        border-style: solid;
        opacity: 0.85;
        cursor: pointer;
    }
    
    .p-colorpicker-panel .p-colorpicker-color {
        background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)
    }
    .p-colorpicker-panel .p-colorpicker-hue {
        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)
    }
}
`,R=rn.extend({defaultProps:{__TYPE:"ColorPicker",appendTo:null,autoFocus:!1,children:void 0,className:null,defaultColor:"ff0000",disabled:!1,format:"hex",id:null,inline:!1,inputClassName:null,inputId:null,inputRef:null,inputStyle:null,onChange:null,onHide:null,onShow:null,panelClassName:null,panelStyle:null,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,transitionOptions:null,value:null},css:{classes:Sn,styles:En}}),we=c.forwardRef(function(n,o){var r=c.useContext(Pe),i=n.ptm,a=n.cx,P=function(){var b=ge({className:a("panel",{panelProps:n,context:r}),style:n.panelStyle,onClick:n.onClick},i("panel",{hostName:n.hostName})),E=ge({classNames:a("transition"),in:n.in,timeout:{enter:120,exit:100},options:n.transitionOptions,unmountOnExit:!0,onEnter:n.onEnter,onEntered:n.onEntered,onExit:n.onExit,onExited:n.onExited},i("transition",{hostName:n.hostName}));return c.createElement(fn,O({nodeRef:o},E),c.createElement("div",O({ref:o},b),n.children))},y=P();return n.inline?y:c.createElement(dn,{element:y,appendTo:n.appendTo})});we.displayName="ColorPickerPanel";function Ee(n,o){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);o&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,i)}return r}function kn(n){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{};o%2?Ee(Object(r),!0).forEach(function(i){hn(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}var Me=c.memo(c.forwardRef(function(n,o){var r=an(),i=c.useContext(Pe),a=R.getProps(n,i),P=c.useState(!1),y=_(P,2),g=y[0],b=y[1],E=R.setMetaData({props:a,state:{overlayVisible:g}}),f=E.ptm,x=E.cx,I=E.isUnstyled;on(R.css.styles,I,{name:"colorpicker"});var S=c.useRef(null),k=c.useRef(null),m=c.useRef(a.inputRef),N=c.useRef(null),j=c.useRef(null),U=c.useRef(null),W=c.useRef(null),w=c.useRef(!1),d=c.useRef(null),M=c.useRef(!1),He=ln({target:S,overlay:k,listener:function(e,t){var u=t.valid;u&&B()},when:g}),Z=_(He,2),Re=Z[0],Te=Z[1],De=be({type:"mousemove",listener:function(e){M.current&&V(e),w.current&&A(e)}}),$=_(De,2),Ie=$[0],z=$[1],Ne=be({type:"mouseup",listener:function(){M.current=w.current=!1,C.removeClass(S.current,"p-colorpicker-dragging"),z(),J()}}),q=_(Ne,2),je=q[0],J=q[1],Be=function(e){a.inline||sn.emit("overlay-click",{originalEvent:e,target:S.current})},_e=function(e){a.disabled||(re(),Q(e))},Q=function(e){a.disabled||(w.current=!0,A(e),!I&&C.addClass(S.current,"p-colorpicker-dragging"))},A=function(e){var t=W.current.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0);d.current=G({h:Math.floor(360*(150-Math.max(0,Math.min(150,(e.pageY||e.changedTouches[0].pageY)-t)))/150),s:100,b:100}),le(),ce(),oe()},Le=function(e){a.disabled||(re(),ee(e))},ee=function(e){a.disabled||(M.current=!0,V(e),!I&&C.addClass(S.current,"p-colorpicker-dragging"),e.preventDefault())},ne=function(e){M.current&&(V(e),e.preventDefault()),w.current&&(A(e),e.preventDefault())},te=function(){M.current=!1,w.current=!1,!I&&C.removeClass(S.current,"p-colorpicker-dragging"),Ue()},re=function(){Ie(),je()},Ue=function(){z(),J()},V=function(e){var t=N.current.getBoundingClientRect(),u=t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),s=t.left+document.body.scrollLeft,p=Math.floor(100*Math.max(0,Math.min(150,(e.pageX||e.changedTouches[0].pageX)-s))/150),v=Math.floor(100*(150-Math.max(0,Math.min(150,(e.pageY||e.changedTouches[0].pageY)-u)))/150);d.current=G({h:d.current.h,s:p,b:v}),ie(),ue(),oe()},oe=function(){switch(a.format){case"hex":X(F(d.current));break;case"rgb":X(ve(d.current));break;case"hsb":X(d.current);break}},Ae=function(e){var t;if(e)switch(a.format){case"hex":t=fe(e);break;case"rgb":t=de(e);break;case"hsb":t=e;break}else t=fe(a.defaultColor);return t},ae=function(e){d.current=Ae(e)},X=function(e){a.onChange&&a.onChange({value:e,stopPropagation:function(){},preventDefault:function(){},target:{name:a.name,id:a.id,value:e}})},le=function(){if(N.current){var e=G({h:d.current.h,s:100,b:100});N.current.style.backgroundColor="#"+F(e)}},ie=function(){j.current&&(j.current.style.left=Math.floor(150*d.current.s/100)+"px",j.current.style.top=Math.floor(150*(100-d.current.b)/100)+"px")},ce=function(){U.current&&(U.current.style.top=Math.floor(150-150*d.current.h/360)+"px")},ue=function(){m.current&&(m.current.style.backgroundColor="#"+F(d.current))},se=function(){b(!0)},B=function(){b(!1)},Ve=function(){var e=a.inline?void 0:{position:"absolute",top:"0",left:"0"};K.set("overlay",k.current,i&&i.autoZIndex||T.autoZIndex,i&&i.zIndex.overlay||T.zIndex.overlay),C.addStyles(k.current,e),he()},Xe=function(){Re(),a.onShow&&a.onShow()},Ge=function(){Te()},Fe=function(){K.clear(k.current),a.onHide&&a.onHide()},Ye=function(){pe()},pe=function(){g?B():se()},Ke=function(e){switch(e.which){case 32:pe(),e.preventDefault();break;case 27:case 9:B();break}},G=function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},We=function(e){var t=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:t>>16,g:(t&65280)>>8,b:t&255}},fe=function(e){return de(We(e))},de=function(e){var t={h:0,s:0,b:0},u=Math.min(e.r,e.g,e.b),s=Math.max(e.r,e.g,e.b),p=s-u;return t.b=s,t.s=s!==0?255*p/s:0,t.s!==0?e.r===s?t.h=(e.g-e.b)/p:e.g===s?t.h=2+(e.b-e.r)/p:t.h=4+(e.r-e.g)/p:t.h=-1,t.h*=60,t.h<0&&(t.h+=360),t.s*=100/255,t.b*=100/255,t},ve=function(e){var t={r:null,g:null,b:null},u=Math.round(e.h),s=Math.round(e.s*255/100),p=Math.round(e.b*255/100);if(s===0)t={r:p,g:p,b:p};else{var v=p,h=(255-s)*p/255,H=(v-h)*(u%60)/60;u===360&&(u=0),u<60?(t.r=v,t.b=h,t.g=h+H):u<120?(t.g=v,t.b=h,t.r=v-H):u<180?(t.g=v,t.r=h,t.b=h+H):u<240?(t.b=v,t.r=h,t.g=v-H):u<300?(t.b=v,t.g=h,t.r=h+H):u<360?(t.r=v,t.g=h,t.b=v-H):(t.r=0,t.g=0,t.b=0)}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}},Ze=function(e){var t=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var u in t)t[u].length===1&&(t[u]="0"+t[u]);return t.join("")},F=function(e){return Ze(ve(e))},me=function(){ce(),ie(),ue(),le()},he=function(){m.current&&C.alignOverlay(k.current,m.current.parentElement,a.appendTo||i&&i.appendTo||T.appendTo)};c.useImperativeHandle(o,function(){return{props:a,show:se,hide:B,focus:function(){return C.focus(m.current)},getElement:function(){return S.current},getOverlay:function(){return k.current},getInput:function(){return m.current}}}),c.useEffect(function(){ye.combinedRefs(m,a.inputRef)},[m,a.inputRef]),cn(function(){ae(a.value),me(),a.autoFocus&&C.focus(m.current,a.autoFocus),he()}),xe(function(){!M.current&&!w.current&&ae(a.value)},[a.value]),xe(function(){me()}),un(function(){K.clear(k.current)});var $e=function(){var e=r({ref:N,className:x("selector"),onMouseDown:function(p){return Le(p)},onTouchStart:function(p){return ee(p)},onTouchMove:function(p){return ne(p)},onTouchEnd:te},f("selector")),t=r({className:x("color")},f("color")),u=r({ref:j,className:x("colorHandle")},f("colorHandle"));return c.createElement("div",e,c.createElement("div",t,c.createElement("div",u)))},ze=function(){var e=r({className:x("hue"),onMouseDown:function(s){return _e(s)},onTouchStart:function(s){return Q(s)},onTouchMove:function(s){return ne(s)},onTouchEnd:te},f("hue")),t=r({className:x("hueHandle")},f("hueHandle"));return c.createElement("div",O({ref:W},e),c.createElement("div",O({ref:U},t)))},qe=function(){var e=$e(),t=ze(),u=r({className:x("content")},f("content"));return c.createElement("div",u,e,t)},Je=function(){if(!a.inline){var e=R.getOtherProps(a),t=r(kn({ref:m,type:"text",readOnly:!0,className:x("input"),style:a.inputStyle,id:a.inputId,tabIndex:a.tabIndex,disabled:a.disabled,onClick:Ye,onKeyDown:Ke},e),f("input"));return c.createElement("input",t)}return null},Qe=ye.isNotEmpty(a.tooltip),en=qe(),nn=Je(),tn=r({id:a.id,ref:S,style:a.style,className:x("root")},R.getOtherProps(a),f("root"));return c.createElement(c.Fragment,null,c.createElement("div",tn,nn,c.createElement(we,{hostName:"ColorPicker",ref:k,appendTo:a.appendTo,inline:a.inline,disabled:a.disabled,panelStyle:a.panelStyle,panelClassName:a.panelClassName,onClick:Be,in:a.inline||g,onEnter:Ve,onEntered:Xe,onExit:Ge,onExited:Fe,transitionOptions:a.transitionOptions,ptm:f,cx:x},en)),Qe&&c.createElement(pn,O({target:S,content:a.tooltip},a.tooltipOptions,{pt:f("tooltip")})))}));Me.displayName="ColorPicker";const jn={title:"Form/ColorPicker",component:Me,parameters:{layout:"centered"},argTypes:{appendTo:{control:"select",description:'DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and "self". The "self" value is used to render a component where it is located.',options:["null","HTMLElement","self"]},autoFocus:{control:"boolean",description:"When present, it specifies that the component should automatically get focus on load.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},defaultColor:{control:"text",description:"Default color to display when value is null.",options:null},format:{control:"select",description:"Format to use in value binding.",options:["rgb","hex","hsb"]},inline:{control:"boolean",description:"Whether to display as an overlay or not.",options:null},inputClassName:{control:"text",description:"Inline style of the input field.",options:null},inputId:{control:"text",description:"Identifier of the focus input to match a label defined for the dropdown.",options:null},inputRef:{control:"object",description:"Reference of the input element.",options:null},inputStyle:{control:"object",description:"Inline style of the input field.",options:null},panelClassName:{control:"text",description:"Style class of the overlay panel.",options:null},panelStyle:{control:"object",description:"Inline style of the overlay panel.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"select",description:"Value of the component.",options:["string","ColorPickerRGBType","ColorPickerHSBType"]}}},L={args:{value:0,unstyled:!1}};var ke,Ce,Oe;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(Oe=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source}}};const Bn=["Default"];export{L as Default,Bn as __namedExportsOrder,jn as default};
