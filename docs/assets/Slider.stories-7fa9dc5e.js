import{r as s}from"./index-76fb7be0.js";import{a as je,O as w,D as z,c as J}from"./api.esm-4644ee78.js";import{C as Me,u as Ae}from"./componentbase.esm-1c796d7e.js";import{d as Le,h as A}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";function H(){return H=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(n[l]=a[l])}return n},H.apply(this,arguments)}function O(n){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(n)}function Te(n,t){if(O(n)!=="object"||n===null)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var l=a.call(n,t||"default");if(O(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Ie(n){var t=Te(n,"string");return O(t)==="symbol"?t:String(t)}function Re(n,t,a){return t=Ie(t),t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function N(n,t){(t==null||t>n.length)&&(t=n.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=n[a];return l}function Ce(n){if(Array.isArray(n))return N(n)}function ze(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ne(n,t){if(n){if(typeof n=="string")return N(n,t);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(n,t)}}function He(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ne(n){return Ce(n)||ze(n)||ne(n)||He()}function Ue(n){if(Array.isArray(n))return n}function We(n,t){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var l,e,y,m,g=[],f=!0,E=!1;try{if(y=(a=a.call(n)).next,t===0){if(Object(a)!==a)return;f=!1}else for(;!(f=(l=y.call(a)).done)&&(g.push(l.value),g.length!==t);f=!0);}catch(P){E=!0,e=P}finally{try{if(!f&&a.return!=null&&(m=a.return(),Object(m)!==m))return}finally{if(E)throw e}}return g}}function Be(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(n,t){return Ue(n)||We(n,t)||ne(n,t)||Be()}var Ke={handle:function(t){var a=t.index,l=t.handleIndex;return J("p-slider-handle",{"p-slider-handle-start":a===0,"p-slider-handle-end":a===1,"p-slider-handle-active":l.current===a})},range:"p-slider-range",root:function(t){var a=t.props,l=t.vertical,e=t.horizontal;return J("p-slider p-component",a.className,{"p-disabled":a.disabled,"p-slider-horizontal":e,"p-slider-vertical":l})}},ke=`
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
`,Fe={handle:{position:"absolute"},range:{position:"absolute"}},D=Me.extend({defaultProps:{__TYPE:"Slider",id:null,value:null,min:0,max:100,orientation:"horizontal",step:null,range:!1,style:null,className:null,disabled:!1,tabIndex:0,onChange:null,onSlideEnd:null,children:void 0},css:{classes:Ke,styles:ke,inlineStyles:Fe}});function Q(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);t&&(l=l.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),a.push.apply(a,l)}return a}function S(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Q(Object(a),!0).forEach(function(l){Re(n,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(a,l))})}return n}var re=s.memo(s.forwardRef(function(n,t){var a=Le(),l=s.useContext(je),e=D.getProps(n,l),y=s.useRef(null),m=s.useRef(0),g=s.useRef(!1),f=s.useRef(!1),E=s.useRef(0),P=s.useRef(0),U=s.useRef(0),I=s.useRef(0),p=e.range?e.value||[e.min,e.max]:e.value||e.min||0,b=e.orientation==="horizontal",te=e.orientation==="vertical",ae=A({type:"mousemove",listener:function(r){return X(r)}}),W=L(ae,2),oe=W[0],ie=W[1],le=A({type:"mouseup",listener:function(r){return $(r)}}),B=L(le,2),se=B[0],ue=B[1],ce=A({type:"touchmove",listener:function(r){return X(r)}}),K=L(ce,2),de=K[0],pe=K[1],me=A({type:"touchend",listener:function(r){return $(r)}}),k=L(me,2),fe=k[0],ve=k[1],_=D.setMetaData({props:e}),j=_.ptm,M=_.cx,R=_.sx,he=_.isUnstyled;Ae(D.css.styles,he,{name:"slider"});var F=function(r,o){var i=e.range?p[m.current]:p,c=(e.step||1)*o;G(r,i+c),r.preventDefault()},Y=function(r,o){e.disabled||(f.current=!0,q(),g.current=!0,m.current=o)},X=function(r){f.current&&(C(r),r.preventDefault())},$=function(r){if(f.current){f.current=!1;var o=C(r);e.onSlideEnd&&e.onSlideEnd({originalEvent:r,value:o}),ie(),ue(),pe(),ve()}},ye=function(r,o){oe(),se(),Y(r,o)},ge=function(r,o){de(),fe(),Y(r,o)},be=function(r,o){if(!e.disabled){m.current=o;var i=r.key;i==="ArrowRight"||i==="ArrowUp"?F(r,1):(i==="ArrowLeft"||i==="ArrowDown")&&F(r,-1)}},Se=function(r){if(!e.disabled){if(!g.current){q();var o=C(r);e.onSlideEnd&&e.onSlideEnd({originalEvent:r,value:o})}g.current=!1}},q=function(){var r=y.current.getBoundingClientRect();E.current=r.left+z.getWindowScrollLeft(),P.current=r.top+z.getWindowScrollTop(),U.current=y.current.offsetWidth,I.current=y.current.offsetHeight},C=function(r){var o,i=w.isNotEmpty(r.touches)?r.touches[0].pageX:r.pageX,c=w.isNotEmpty(r.touches)?r.touches[0].pageY:r.pageY;if(!(!i||!c)){b?o=(i-E.current)*100/U.current:o=(P.current+I.current-c)*100/I.current;var d=(e.max-e.min)*(o/100)+e.min;if(e.step){var v=e.range?p[m.current]:p,h=d-v;h<0?d=v+Math.ceil(d/e.step-v/e.step)*e.step:h>0&&(d=v+Math.floor(d/e.step-v/e.step)*e.step)}else d=Math.floor(d);return G(r,d)}},G=function(r,o){var i=parseFloat(o.toFixed(10)),c=i;return e.range?(m.current===0?i<e.min?i=e.min:i>e.max&&(i=e.max):i>e.max?i=e.max:i<e.min&&(i=e.min),c=Ne(p),c[m.current]=i,e.onChange&&e.onChange({originalEvent:r,value:c})):(i<e.min?i=e.min:i>e.max&&(i=e.max),c=i,e.onChange&&e.onChange({originalEvent:r,value:c})),c},x=function(r,o,i){r=w.isEmpty(r)?null:r,o=w.isEmpty(o)?null:o;var c={transition:f.current?"none":null,left:r!=null?r+"%":null,bottom:o!=null?o+"%":null},d=a(S({className:M("handle",{index:i,handleIndex:m}),style:S(S({},R("handle",{dragging:f,leftValue:r,bottomValue:o})),c),tabIndex:e.tabIndex,role:"slider",onMouseDown:function(h){return ye(h,i)},onTouchStart:function(h){return ge(h,i)},onKeyDown:function(h){return be(h,i)},"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":r||o||0,"aria-orientation":e.orientation},De),j("handle"));return s.createElement("span",d)},xe=function(){var r=(p[0]<e.min?e.min:p[0]-e.min)*100/(e.max-e.min),o=(p[1]>e.max?e.max:p[1]-e.min)*100/(e.max-e.min),i=b?x(r,null,0):x(null,r,0),c=b?x(o,null,1):x(null,o,1),d=o>r?o-r:r-o,v=o>r?r:o,h=b?{left:v+"%",width:d+"%"}:{bottom:v+"%",height:d+"%"},_e=a({className:M("range"),style:S(S({},R("range")),h)},j("range"));return s.createElement(s.Fragment,null,s.createElement("span",_e),i,c)},Ee=function(){var r;p<e.min?r=e.min:p>e.max?r=e.max:r=(p-e.min)*100/(e.max-e.min);var o=b?{width:r+"%"}:{height:r+"%"},i=b?x(r,null,null):x(null,r,null),c=a({className:M("range"),style:S(S({},R("range")),o)},j("range"));return s.createElement(s.Fragment,null,s.createElement("span",c),i)};s.useImperativeHandle(t,function(){return{props:e,getElement:function(){return y.current}}});var we=D.getOtherProps(e),De=w.reduceKeys(we,z.ARIA_PROPS),Oe=e.range?xe():Ee(),Pe=a({style:e.style,className:M("root",{vertical:te,horizontal:b}),onClick:Se},D.getOtherProps(e),j("root"));return s.createElement("div",H({id:e.id,ref:y},Pe),Oe)}));re.displayName="Slider";const Je={title:"Form/Slider",component:re,parameters:{layout:"centered"},argTypes:{ariaLabelledBy:{control:"text",description:"Establishes relationships between the component and label(s) where its value should be one or more element IDs.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},disabled:{control:"boolean",description:"When present, it specifies that the component should be disabled.",options:null},max:{control:"number",description:"Maximum boundary value.",options:null},min:{control:"number",description:"Mininum boundary value.",options:null},orientation:{control:"select",description:"Orientation of the slider, valid values are horizontal and vertical.",options:["horizontal","vertical"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},range:{control:"boolean",description:"When speficed, allows two boundary values to be picked.",options:null},step:{control:"number",description:"Step factor to increment/decrement the value.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"select",description:"Value of the component.",options:["number","[number, number]"]}}},T={args:{value:0,unstyled:!1}};var Z,V,ee;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(ee=(V=T.parameters)==null?void 0:V.docs)==null?void 0:ee.source}}};const Qe=["Default"];export{T as Default,Qe as __namedExportsOrder,Je as default};
