import{r as i}from"./index-76fb7be0.js";import{P as Oe,D as k,O as ye,m as b,c as Y,a as T,Z as K}from"./api.esm-e57be548.js";import{C as tn,u as rn}from"./componentbase.esm-f35515f0.js";import{h as on,g as ge,a as an,b as be,c as ln}from"./hooks.esm-2e882e60.js";import{O as cn}from"./overlayservice.esm-f3934ea7.js";import{T as un}from"./tooltip.esm-969ffd2f.js";import{C as sn}from"./csstransition.esm-2b0eb2be.js";import{P as pn}from"./portal.esm-d730a851.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";function D(t){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},D(t)}function fn(t,a){if(D(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var n=o.call(t,a||"default");if(D(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function dn(t){var a=fn(t,"string");return D(a)==="symbol"?a:String(a)}function vn(t,a,o){return a=dn(a),a in t?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o,t}function w(){return w=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},w.apply(this,arguments)}function mn(t){if(Array.isArray(t))return t}function hn(t,a){var o=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var n,x,C,v,O=[],h=!0,p=!1;try{if(C=(o=o.call(t)).next,a===0){if(Object(o)!==o)return;h=!1}else for(;!(h=(n=C.call(o)).done)&&(O.push(n.value),O.length!==a);h=!0);}catch(m){p=!0,x=m}finally{try{if(!h&&o.return!=null&&(v=o.return(),Object(v)!==v))return}finally{if(p)throw x}}return O}}function xe(t,a){(a==null||a>t.length)&&(a=t.length);for(var o=0,n=new Array(a);o<a;o++)n[o]=t[o];return n}function yn(t,a){if(t){if(typeof t=="string")return xe(t,a);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return xe(t,a)}}function gn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(t,a){return mn(t)||hn(t,a)||yn(t,a)||gn()}var bn={root:function(a){var o=a.props;return Y("p-colorpicker p-component",{"p-colorpicker-overlay":!o.inline},o.className)},input:function(a){var o=a.props;return Y("p-colorpicker-preview p-inputtext",o.inputClassName,{"p-disabled":o.disabled})},panel:function(a){var o=a.panelProps,n=a.context;return Y("p-colorpicker-panel",o.panelClassName,{"p-colorpicker-overlay-panel":!o.inline,"p-disabled":o.disabled,"p-input-filled":n&&n.inputStyle==="filled"||T.inputStyle==="filled","p-ripple-disabled":n&&n.ripple===!1||T.ripple===!1})},content:"p-colorpicker-content",hueHandle:"p-colorpicker-hue-handle",hue:"p-colorpicker-hue",colorHandle:"p-colorpicker-color-handle",color:"p-colorpicker-color",selector:"p-colorpicker-color-selector",transition:"p-connected-overlay"},xn=`
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
`,R=tn.extend({defaultProps:{__TYPE:"ColorPicker",appendTo:null,autoFocus:!1,children:void 0,className:null,defaultColor:"ff0000",disabled:!1,format:"hex",id:null,inline:!1,inputClassName:null,inputId:null,inputRef:null,inputStyle:null,onChange:null,onHide:null,onShow:null,panelClassName:null,panelStyle:null,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,transitionOptions:null,value:null},css:{classes:bn,styles:xn}}),we=i.forwardRef(function(t,a){var o=i.useContext(Oe),n=t.ptm,x=t.cx,C=function(){var h=b({className:x("panel",{panelProps:t,context:o}),style:t.panelStyle,onClick:t.onClick},n("panel",{hostName:t.hostName})),p=b({classNames:x("transition"),in:t.in,timeout:{enter:120,exit:100},options:t.transitionOptions,unmountOnExit:!0,onEnter:t.onEnter,onEntered:t.onEntered,onExit:t.onExit,onExited:t.onExited},n("transition",{hostName:t.hostName}));return i.createElement(sn,w({nodeRef:a},p),i.createElement("div",w({ref:a},h),t.children))},v=C();return t.inline?v:i.createElement(pn,{element:v,appendTo:t.appendTo})});we.displayName="ColorPickerPanel";function Se(t,a){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter(function(x){return Object.getOwnPropertyDescriptor(t,x).enumerable})),o.push.apply(o,n)}return o}function Sn(t){for(var a=1;a<arguments.length;a++){var o=arguments[a]!=null?arguments[a]:{};a%2?Se(Object(o),!0).forEach(function(n){vn(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):Se(Object(o)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}var Pe=i.memo(i.forwardRef(function(t,a){var o=i.useContext(Oe),n=R.getProps(t,o),x=i.useState(!1),C=_(x,2),v=C[0],O=C[1],h=R.setMetaData({props:n,state:{overlayVisible:v}}),p=h.ptm,m=h.cx,I=h.isUnstyled;rn(R.css.styles,I,{name:"colorpicker"});var S=i.useRef(null),E=i.useRef(null),y=i.useRef(n.inputRef),N=i.useRef(null),j=i.useRef(null),U=i.useRef(null),W=i.useRef(null),P=i.useRef(!1),f=i.useRef(null),M=i.useRef(!1),Me=on({target:S,overlay:E,listener:function(e,r){var c=r.valid;c&&B()},when:v}),Z=_(Me,2),He=Z[0],Re=Z[1],Te=ge({type:"mousemove",listener:function(e){M.current&&V(e),P.current&&A(e)}}),$=_(Te,2),De=$[0],z=$[1],Ie=ge({type:"mouseup",listener:function(){M.current=P.current=!1,k.removeClass(S.current,"p-colorpicker-dragging"),z(),J()}}),q=_(Ie,2),Ne=q[0],J=q[1],je=function(e){n.inline||cn.emit("overlay-click",{originalEvent:e,target:S.current})},Be=function(e){n.disabled||(re(),Q(e))},Q=function(e){n.disabled||(P.current=!0,A(e),!I&&k.addClass(S.current,"p-colorpicker-dragging"))},A=function(e){var r=W.current.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0);f.current=G({h:Math.floor(360*(150-Math.max(0,Math.min(150,(e.pageY||e.changedTouches[0].pageY)-r)))/150),s:100,b:100}),le(),ce(),oe()},_e=function(e){n.disabled||(re(),ee(e))},ee=function(e){n.disabled||(M.current=!0,V(e),!I&&k.addClass(S.current,"p-colorpicker-dragging"),e.preventDefault())},ne=function(e){M.current&&(V(e),e.preventDefault()),P.current&&(A(e),e.preventDefault())},te=function(){M.current=!1,P.current=!1,!I&&k.removeClass(S.current,"p-colorpicker-dragging"),Le()},re=function(){De(),Ne()},Le=function(){z(),J()},V=function(e){var r=N.current.getBoundingClientRect(),c=r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),u=r.left+document.body.scrollLeft,s=Math.floor(100*Math.max(0,Math.min(150,(e.pageX||e.changedTouches[0].pageX)-u))/150),d=Math.floor(100*(150-Math.max(0,Math.min(150,(e.pageY||e.changedTouches[0].pageY)-c)))/150);f.current=G({h:f.current.h,s,b:d}),ie(),ue(),oe()},oe=function(){switch(n.format){case"hex":X(F(f.current));break;case"rgb":X(ve(f.current));break;case"hsb":X(f.current);break}},Ue=function(e){var r;if(e)switch(n.format){case"hex":r=fe(e);break;case"rgb":r=de(e);break;case"hsb":r=e;break}else r=fe(n.defaultColor);return r},ae=function(e){f.current=Ue(e)},X=function(e){n.onChange&&n.onChange({value:e,stopPropagation:function(){},preventDefault:function(){},target:{name:n.name,id:n.id,value:e}})},le=function(){if(N.current){var e=G({h:f.current.h,s:100,b:100});N.current.style.backgroundColor="#"+F(e)}},ie=function(){j.current&&(j.current.style.left=Math.floor(150*f.current.s/100)+"px",j.current.style.top=Math.floor(150*(100-f.current.b)/100)+"px")},ce=function(){U.current&&(U.current.style.top=Math.floor(150-150*f.current.h/360)+"px")},ue=function(){y.current&&(y.current.style.backgroundColor="#"+F(f.current))},se=function(){O(!0)},B=function(){O(!1)},Ae=function(){var e=n.inline?void 0:{position:"absolute",top:"0",left:"0"};K.set("overlay",E.current,o&&o.autoZIndex||T.autoZIndex,o&&o.zIndex.overlay||T.zIndex.overlay),k.addStyles(E.current,e),he()},Ve=function(){He(),n.onShow&&n.onShow()},Xe=function(){Re()},Ge=function(){K.clear(E.current),n.onHide&&n.onHide()},Fe=function(){pe()},pe=function(){v?B():se()},Ye=function(e){switch(e.which){case 32:pe(),e.preventDefault();break;case 27:case 9:B();break}},G=function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},Ke=function(e){var r=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:r>>16,g:(r&65280)>>8,b:r&255}},fe=function(e){return de(Ke(e))},de=function(e){var r={h:0,s:0,b:0},c=Math.min(e.r,e.g,e.b),u=Math.max(e.r,e.g,e.b),s=u-c;return r.b=u,r.s=u!==0?255*s/u:0,r.s!==0?e.r===u?r.h=(e.g-e.b)/s:e.g===u?r.h=2+(e.b-e.r)/s:r.h=4+(e.r-e.g)/s:r.h=-1,r.h*=60,r.h<0&&(r.h+=360),r.s*=100/255,r.b*=100/255,r},ve=function(e){var r={r:null,g:null,b:null},c=Math.round(e.h),u=Math.round(e.s*255/100),s=Math.round(e.b*255/100);if(u===0)r={r:s,g:s,b:s};else{var d=s,g=(255-u)*s/255,H=(d-g)*(c%60)/60;c===360&&(c=0),c<60?(r.r=d,r.b=g,r.g=g+H):c<120?(r.g=d,r.b=g,r.r=d-H):c<180?(r.g=d,r.r=g,r.b=g+H):c<240?(r.b=d,r.r=g,r.g=d-H):c<300?(r.b=d,r.g=g,r.r=g+H):c<360?(r.r=d,r.g=g,r.b=d-H):(r.r=0,r.g=0,r.b=0)}return{r:Math.round(r.r),g:Math.round(r.g),b:Math.round(r.b)}},We=function(e){var r=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var c in r)r[c].length===1&&(r[c]="0"+r[c]);return r.join("")},F=function(e){return We(ve(e))},me=function(){ce(),ie(),ue(),le()},he=function(){y.current&&k.alignOverlay(E.current,y.current.parentElement,n.appendTo||o&&o.appendTo||T.appendTo)};i.useImperativeHandle(a,function(){return{props:n,show:se,hide:B,focus:function(){return k.focus(y.current)},getElement:function(){return S.current},getOverlay:function(){return E.current},getInput:function(){return y.current}}}),i.useEffect(function(){ye.combinedRefs(y,n.inputRef)},[y,n.inputRef]),an(function(){ae(n.value),me(),n.autoFocus&&k.focus(y.current,n.autoFocus),he()}),be(function(){!M.current&&!P.current&&ae(n.value)},[n.value]),be(function(){me()}),ln(function(){K.clear(E.current)});var Ze=function(){var e=b({ref:N,className:m("selector"),onMouseDown:function(s){return _e(s)},onTouchStart:function(s){return ee(s)},onTouchMove:function(s){return ne(s)},onTouchEnd:te},p("selector")),r=b({className:m("color")},p("color")),c=b({ref:j,className:m("colorHandle")},p("colorHandle"));return i.createElement("div",e,i.createElement("div",r,i.createElement("div",c)))},$e=function(){var e=b({className:m("hue"),onMouseDown:function(u){return Be(u)},onTouchStart:function(u){return Q(u)},onTouchMove:function(u){return ne(u)},onTouchEnd:te},p("hue")),r=b({className:m("hueHandle")},p("hueHandle"));return i.createElement("div",w({ref:W},e),i.createElement("div",w({ref:U},r)))},ze=function(){var e=Ze(),r=$e(),c=b({className:m("content")},p("content"));return i.createElement("div",c,e,r)},qe=function(){if(!n.inline){var e=R.getOtherProps(n),r=b(Sn({ref:y,type:"text",readOnly:!0,className:m("input"),style:n.inputStyle,id:n.inputId,tabIndex:n.tabIndex,disabled:n.disabled,onClick:Fe,onKeyDown:Ye},e),p("input"));return i.createElement("input",r)}return null},Je=ye.isNotEmpty(n.tooltip),Qe=ze(),en=qe(),nn=b({id:n.id,ref:S,style:n.style,className:m("root")},R.getOtherProps(n),p("root"));return i.createElement(i.Fragment,null,i.createElement("div",nn,en,i.createElement(we,{hostName:"ColorPicker",ref:E,appendTo:n.appendTo,inline:n.inline,disabled:n.disabled,panelStyle:n.panelStyle,panelClassName:n.panelClassName,onClick:je,in:n.inline||v,onEnter:Ae,onEntered:Ve,onExit:Xe,onExited:Ge,transitionOptions:n.transitionOptions,ptm:p,cx:m},Qe)),Je&&i.createElement(un,w({target:S,content:n.tooltip},n.tooltipOptions,{pt:p("tooltip")})))}));Pe.displayName="ColorPicker";const In={title:"Form/ColorPicker",component:Pe,parameters:{layout:"centered"},argTypes:{appendTo:{control:"select",description:'DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and "self". The "self" value is used to render a component where it is located.',options:["null","HTMLElement","self"]},autoFocus:{control:"boolean",description:"When present, it specifies that the component should automatically get focus on load.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},defaultColor:{control:"text",description:"Default color to display when value is null.",options:null},format:{control:"select",description:"Format to use in value binding.",options:["rgb","hex","hsb"]},inline:{control:"boolean",description:"Whether to display as an overlay or not.",options:null},inputClassName:{control:"text",description:"Inline style of the input field.",options:null},inputId:{control:"text",description:"Identifier of the focus input to match a label defined for the dropdown.",options:null},inputRef:{control:"object",description:"Reference of the input element.",options:null},inputStyle:{control:"object",description:"Inline style of the input field.",options:null},panelClassName:{control:"text",description:"Style class of the overlay panel.",options:null},panelStyle:{control:"object",description:"Inline style of the overlay panel.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"select",description:"Value of the component.",options:["string","ColorPickerRGBType","ColorPickerHSBType"]}}},L={args:{value:0,unstyled:!1}};var Ee,ke,Ce;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(Ce=(ke=L.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};const Nn=["Default"];export{L as Default,Nn as __namedExportsOrder,In as default};
