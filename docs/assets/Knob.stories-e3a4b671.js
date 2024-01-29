import{r as l}from"./index-76fb7be0.js";import{c as Ee,a as Te}from"./api.esm-4644ee78.js";import{C as _e,u as Ce}from"./componentbase.esm-1c796d7e.js";import{d as We,h as E}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";function Le(r){if(Array.isArray(r))return r}function Pe(r,a){var o=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(o!=null){var d,e,v,u,p=[],f=!0,h=!1;try{if(v=(o=o.call(r)).next,a===0){if(Object(o)!==o)return;f=!1}else for(;!(f=(d=v.call(o)).done)&&(p.push(d.value),p.length!==a);f=!0);}catch(b){h=!0,e=b}finally{try{if(!f&&o.return!=null&&(u=o.return(),Object(u)!==u))return}finally{if(h)throw e}}return p}}function X(r,a){(a==null||a>r.length)&&(a=r.length);for(var o=0,d=new Array(a);o<a;o++)d[o]=r[o];return d}function Ae(r,a){if(r){if(typeof r=="string")return X(r,a);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return X(r,a)}}function De(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(r,a){return Le(r)||Pe(r,a)||Ae(r,a)||De()}var P=_e.extend({defaultProps:{__TYPE:"Knob",id:null,style:null,className:null,value:null,size:100,disabled:!1,readOnly:!1,showValue:!0,step:1,min:0,max:100,strokeWidth:14,name:null,valueColor:"var(--primary-color, Black)",rangeColor:"var(--surface-border, LightGray)",textColor:"var(--text-color-secondary, Black)",valueTemplate:"{value}",onChange:null,children:void 0},css:{classes:{range:"p-knob-range",value:"p-knob-value",label:"p-knob-text",root:function(a){var o=a.props;return Ee("p-knob p-component",{"p-disabled":o.disabled},o.className)}},styles:`
        @keyframes dash-frame {
            100% {
                stroke-dashoffset: 0;
            }
        }
        @layer primereact {
            .p-knob-range {
                fill: none;
                transition: stroke .1s ease-in;
            }
            .p-knob-value {
                animation-name: dash-frame;
                animation-fill-mode: forwards;
                fill: none;
            }
            .p-knob-text {
                font-size: 1.3rem;
                text-align: center;
            }
        }
        `}}),i=40,_=50,C=50,g=4*Math.PI/3,m=-Math.PI/3,j=l.memo(l.forwardRef(function(r,a){var o=We(),d=l.useContext(Te),e=P.getProps(r,d),v=P.setMetaData({props:e}),u=v.ptm,p=v.cx,f=v.isUnstyled;Ce(P.css.styles,f,{name:"knob"});var h=l.useRef(null),b=!e.disabled&&!e.readOnly,K=E({target:"window",type:"mousemove",listener:function(t){L(t.offsetX,t.offsetY),t.preventDefault()},when:b}),A=T(K,2),V=A[0],D=A[1],H=E({target:"window",type:"mouseup",listener:function(t){D(),z(),t.preventDefault()},when:b}),S=T(H,2),$=S[0],z=S[1],q=E({target:"window",type:"touchmove",listener:function(t){if(t.touches.length===1){var c=h.current.getBoundingClientRect(),s=t.targetTouches.item(0),y=s.clientX-c.left,x=s.clientY-c.top;L(y,x),t.preventDefault()}},when:b}),R=T(q,2),F=R[0],I=R[1],G=E({target:"window",type:"touchend",listener:function(){I(),Y()},when:b}),U=T(G,2),J=U[0],Y=U[1],M=function(t,c,s,y,x){return(t-c)*(x-y)/(s-c)+y},w=function(){return M(e.min>0&&e.max>0?e.min:0,e.min,e.max,g,m)},k=function(){return M(e.value,e.min,e.max,g,m)},Q=function(){return _+Math.cos(g)*i},Z=function(){return C-Math.sin(g)*i},ee=function(){return _+Math.cos(m)*i},ne=function(){return C-Math.sin(m)*i},te=function(){return _+Math.cos(w())*i},oe=function(){return C-Math.sin(w())*i},re=function(){return _+Math.cos(k())*i},ae=function(){return C-Math.sin(k())*i},ie=function(){return Math.abs(w()-k())<Math.PI?0:1},se=function(){return k()>w()?0:1},le="M ".concat(Q()," ").concat(Z()," A ").concat(i," ").concat(i," 0 1 1 ").concat(ee()," ").concat(ne()),ue="M ".concat(te()," ").concat(oe()," A ").concat(i," ").concat(i," 0 ").concat(ie()," ").concat(se()," ").concat(re()," ").concat(ae()),ce=function(){return e.valueTemplate.replace("{value}",e.value.toString())},L=function(t,c){var s=t-e.size/2,y=e.size/2-c,x=Math.atan2(y,s),ke=-Math.PI/2-Math.PI/6;pe(x,ke)},pe=function(t,c){var s;if(t>m)s=M(t,g,m,e.min,e.max);else if(t<c)s=M(t+2*Math.PI,g,m,e.min,e.max);else return;e.onChange&&e.onChange({value:Math.round((s-e.min)/e.step)*e.step+e.min})},de=function(t){!e.disabled&&!e.readOnly&&L(t.nativeEvent.offsetX,t.nativeEvent.offsetY)},me=function(t){V(),$(),t.preventDefault()},ve=function(){D(),z()},fe=function(){F(),J()},he=function(){I(),Y()};l.useImperativeHandle(a,function(){return{props:e,getElement:function(){return h.current}}});var be=o({x:50,y:57,textAnchor:"middle",fill:e.textColor,className:p("label"),name:e.name},u("label")),ye=e.showValue&&l.createElement("text",be,ce()),ge=o({ref:h,id:e.id,className:p("root"),style:e.style},u("root")),xe=o({viewBox:"0 0 100 100",width:e.size,height:e.size,onClick:function(t){return de(t)},onMouseDown:function(t){return me(t)},onMouseUp:function(t){return ve()},onTouchStart:function(t){return fe()},onTouchEnd:function(t){return he()}},u("svg")),Me=o({d:le,strokeWidth:e.strokeWidth,stroke:e.rangeColor,className:p("range")},u("range")),we=o({d:ue,strokeWidth:e.strokeWidth,stroke:e.valueColor,className:p("value")},u("value"));return l.createElement("div",ge,l.createElement("svg",xe,l.createElement("path",Me),l.createElement("path",we),ye))}));j.displayName="Knob";const Ye={title:"Form/Knob",component:j,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},className:{control:"text",description:"Style class of the element.",options:null},disabled:{control:"boolean",description:"When present, it specifies that the component should be disabled.",options:null},id:{control:"text",description:"Unique identifier of the element.",options:null},max:{control:"number",description:"Maximum boundary value.",options:null},min:{control:"number",description:"Mininum boundary value.",options:null},name:{control:"text",description:"Name of the input element.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},rangeColor:{control:"text",description:"Background color of the range.",options:null},readOnly:{control:"boolean",description:"When present, it specifies that the component value cannot be edited.",options:null},showValue:{control:"boolean",description:"Whether the show the value inside the knob.",options:null},size:{control:"number",description:"Size of the component in pixels.",options:null},step:{control:"number",description:"Step factor to increment/decrement the value.",options:null},strokeWidth:{control:"number",description:"Width of the knob stroke.",options:null},style:{control:"object",description:"Inline style of the element.",options:null},textColor:{control:"text",description:"Color of the value text.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"number",description:"Value of the component.",options:null},valueColor:{control:"text",description:"Background of the value.",options:null},valueTemplate:{control:"text",description:"Template string of the value.",options:null}}},W={args:{value:0,unstyled:!1}};var O,N,B;W.parameters={...W.parameters,docs:{...(O=W.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(B=(N=W.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const Xe=["Default"];export{W as Default,Xe as __namedExportsOrder,Ye as default};
