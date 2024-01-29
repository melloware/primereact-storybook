import{r as l}from"./index-76fb7be0.js";import{P as je,O as w,D as H,m as L,c as J}from"./api.esm-e57be548.js";import{C as Ae,u as Le}from"./componentbase.esm-f35515f0.js";import{g as M}from"./hooks.esm-2e882e60.js";import"./_commonjsHelpers-de833af9.js";function N(){return N=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},N.apply(this,arguments)}function O(n){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(n)}function Me(n,t){if(O(n)!=="object"||n===null)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var e=a.call(n,t||"default");if(O(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Te(n){var t=Me(n,"string");return O(t)==="symbol"?t:String(t)}function Ie(n,t,a){return t=Te(t),t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function U(n,t){(t==null||t>n.length)&&(t=n.length);for(var a=0,e=new Array(t);a<t;a++)e[a]=n[a];return e}function Re(n){if(Array.isArray(n))return U(n)}function Ce(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ne(n,t){if(n){if(typeof n=="string")return U(n,t);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return U(n,t)}}function ze(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(n){return Re(n)||Ce(n)||ne(n)||ze()}function Ne(n){if(Array.isArray(n))return n}function Ue(n,t){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var e,d,f,y,v=[],g=!0,E=!1;try{if(f=(a=a.call(n)).next,t===0){if(Object(a)!==a)return;g=!1}else for(;!(g=(e=f.call(a)).done)&&(v.push(e.value),v.length!==t);g=!0);}catch(P){E=!0,d=P}finally{try{if(!g&&a.return!=null&&(y=a.return(),Object(y)!==y))return}finally{if(E)throw d}}return v}}function We(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(n,t){return Ne(n)||Ue(n,t)||ne(n,t)||We()}var Be={handle:function(t){var a=t.index,e=t.handleIndex;return J("p-slider-handle",{"p-slider-handle-start":a===0,"p-slider-handle-end":a===1,"p-slider-handle-active":e.current===a})},range:"p-slider-range",root:function(t){var a=t.props,e=t.vertical,d=t.horizontal;return J("p-slider p-component",a.className,{"p-disabled":a.disabled,"p-slider-horizontal":d,"p-slider-vertical":e})}},Ke=`
@layer primereact {
    .p-slider {
        position: relative;
    }
    
    .p-slider .p-slider-handle {
        position: absolute;
        cursor: grab;
        touch-action: none;
        display: block;
        z-index: 1;
    }
    
    .p-slider .p-slider-handle.p-slider-handle-active {
        z-index: 2;
    }
    
    .p-slider-range {
        position: absolute;
        display: block;
    }
    
    .p-slider-horizontal .p-slider-range {
        top: 0;
        left: 0;
        height: 100%;
    }
    
    .p-slider-horizontal .p-slider-handle {
        top: 50%;
    }
    
    .p-slider-vertical {
        height: 100px;
    }
    
    .p-slider-vertical .p-slider-handle {
        left: 50%;
    }
    
    .p-slider-vertical .p-slider-range {
        bottom: 0;
        left: 0;
        width: 100%;
    }
}
`,ke={handle:{position:"absolute"},range:{position:"absolute"}},D=Ae.extend({defaultProps:{__TYPE:"Slider",id:null,value:null,min:0,max:100,orientation:"horizontal",step:null,range:!1,style:null,className:null,disabled:!1,tabIndex:0,onChange:null,onSlideEnd:null,children:void 0},css:{classes:Be,styles:Ke,inlineStyles:ke}});function Q(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),a.push.apply(a,e)}return a}function S(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Q(Object(a),!0).forEach(function(e){Ie(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}var re=l.memo(l.forwardRef(function(n,t){var a=l.useContext(je),e=D.getProps(n,a),d=l.useRef(null),f=l.useRef(0),y=l.useRef(!1),v=l.useRef(!1),g=l.useRef(0),E=l.useRef(0),P=l.useRef(0),R=l.useRef(0),p=e.range?e.value||[e.min,e.max]:e.value||0,b=e.orientation==="horizontal",te=e.orientation==="vertical",ae=M({type:"mousemove",listener:function(r){return X(r)}}),W=T(ae,2),oe=W[0],ie=W[1],le=M({type:"mouseup",listener:function(r){return $(r)}}),B=T(le,2),se=B[0],ue=B[1],ce=M({type:"touchmove",listener:function(r){return X(r)}}),K=T(ce,2),de=K[0],pe=K[1],me=M({type:"touchend",listener:function(r){return $(r)}}),k=T(me,2),fe=k[0],ve=k[1],_=D.setMetaData({props:e}),j=_.ptm,A=_.cx,C=_.sx,he=_.isUnstyled;Le(D.css.styles,he,{name:"slider"});var F=function(r,o){var i=e.range?p[f.current]:p,u=(e.step||1)*o;G(r,i+u),r.preventDefault()},Y=function(r,o){e.disabled||(v.current=!0,q(),y.current=!0,f.current=o)},X=function(r){v.current&&(z(r),r.preventDefault())},$=function(r){if(v.current){v.current=!1;var o=z(r);e.onSlideEnd&&e.onSlideEnd({originalEvent:r,value:o}),ie(),ue(),pe(),ve()}},ye=function(r,o){oe(),se(),Y(r,o)},ge=function(r,o){de(),fe(),Y(r,o)},be=function(r,o){if(!e.disabled){f.current=o;var i=r.key;i==="ArrowRight"||i==="ArrowUp"?F(r,1):(i==="ArrowLeft"||i==="ArrowDown")&&F(r,-1)}},Se=function(r){if(!e.disabled){if(!y.current){q();var o=z(r);e.onSlideEnd&&e.onSlideEnd({originalEvent:r,value:o})}y.current=!1}},q=function(){var r=d.current.getBoundingClientRect();g.current=r.left+H.getWindowScrollLeft(),E.current=r.top+H.getWindowScrollTop(),P.current=d.current.offsetWidth,R.current=d.current.offsetHeight},z=function(r){var o,i=w.isNotEmpty(r.touches)?r.touches[0].pageX:r.pageX,u=w.isNotEmpty(r.touches)?r.touches[0].pageY:r.pageY;if(!(!i||!u)){b?o=(i-g.current)*100/P.current:o=(E.current+R.current-u)*100/R.current;var c=(e.max-e.min)*(o/100)+e.min;if(e.step){var m=e.range?p[f.current]:p,h=c-m;h<0?c=m+Math.ceil(c/e.step-m/e.step)*e.step:h>0&&(c=m+Math.floor(c/e.step-m/e.step)*e.step)}else c=Math.floor(c);return G(r,c)}},G=function(r,o){var i=parseFloat(o.toFixed(10)),u=i;return e.range?(f.current===0?i<e.min?i=e.min:i>e.max&&(i=e.max):i>e.max?i=e.max:i<e.min&&(i=e.min),u=He(p),u[f.current]=i,e.onChange&&e.onChange({originalEvent:r,value:u})):(i<e.min?i=e.min:i>e.max&&(i=e.max),u=i,e.onChange&&e.onChange({originalEvent:r,value:u})),u},x=function(r,o,i){r=w.isEmpty(r)?null:r,o=w.isEmpty(o)?null:o;var u={transition:v.current?"none":null,left:r!=null?r+"%":null,bottom:o!=null?o+"%":null},c=L(S({className:A("handle",{index:i,handleIndex:f}),style:S(S({},C("handle",{dragging:v,leftValue:r,bottomValue:o})),u),tabIndex:e.tabIndex,role:"slider",onMouseDown:function(h){return ye(h,i)},onTouchStart:function(h){return ge(h,i)},onKeyDown:function(h){return be(h,i)},"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":r||o||0,"aria-orientation":e.orientation},De),j("handle"));return l.createElement("span",c)},xe=function(){var r=(p[0]<e.min?e.min:p[0]-e.min)*100/(e.max-e.min),o=(p[1]>e.max?e.max:p[1]-e.min)*100/(e.max-e.min),i=b?x(r,null,0):x(null,r,0),u=b?x(o,null,1):x(null,o,1),c=o>r?o-r:r-o,m=o>r?r:o,h=b?{left:m+"%",width:c+"%"}:{bottom:m+"%",height:c+"%"},_e=L({className:A("range"),style:S(S({},C("range")),h)},j("range"));return l.createElement(l.Fragment,null,l.createElement("span",_e),i,u)},Ee=function(){var r;p<e.min?r=e.min:p>e.max?r=e.max:r=(p-e.min)*100/(e.max-e.min);var o=b?{width:r+"%"}:{height:r+"%"},i=b?x(r,null,null):x(null,r,null),u=L({className:A("range"),style:S(S({},C("range")),o)},j("range"));return l.createElement(l.Fragment,null,l.createElement("span",u),i)};l.useImperativeHandle(t,function(){return{props:e,getElement:function(){return d.current}}});var we=D.getOtherProps(e),De=w.reduceKeys(we,H.ARIA_PROPS),Oe=e.range?xe():Ee(),Pe=L({style:e.style,className:A("root",{vertical:te,horizontal:b}),onClick:Se},D.getOtherProps(e),j("root"));return l.createElement("div",N({id:e.id,ref:d},Pe),Oe)}));re.displayName="Slider";const Ge={title:"Form/Slider",component:re,parameters:{layout:"centered"},argTypes:{ariaLabelledBy:{control:"text",description:"Establishes relationships between the component and label(s) where its value should be one or more element IDs.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},disabled:{control:"boolean",description:"When present, it specifies that the component should be disabled.",options:null},max:{control:"number",description:"Maximum boundary value.",options:null},min:{control:"number",description:"Mininum boundary value.",options:null},orientation:{control:"select",description:"Orientation of the slider, valid values are horizontal and vertical.",options:["horizontal","vertical"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},range:{control:"boolean",description:"When speficed, allows two boundary values to be picked.",options:null},step:{control:"number",description:"Step factor to increment/decrement the value.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"select",description:"Value of the component.",options:["number","[number, number]"]}}},I={args:{value:0,unstyled:!1}};var Z,V,ee;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(ee=(V=I.parameters)==null?void 0:V.docs)==null?void 0:ee.source}}};const Je=["Default"];export{I as Default,Je as __namedExportsOrder,Ge as default};
