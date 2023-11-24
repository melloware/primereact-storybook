import{r as a}from"./index-76fb7be0.js";import{O as E,P as Ue,D as u,m as D,c as W}from"./api.esm-2e2d159c.js";import{C as pe,u as Be}from"./componentbase.esm-b0caea1e.js";import{c as ae}from"./hooks.esm-c93f10ee.js";import"./_commonjsHelpers-de833af9.js";function X(){return X=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},X.apply(this,arguments)}function $(e,r){(r==null||r>e.length)&&(r=e.length);for(var o=0,t=new Array(r);o<r;o++)t[o]=e[o];return t}function Ge(e){if(Array.isArray(e))return $(e)}function Ke(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fe(e,r){if(e){if(typeof e=="string")return $(e,r);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return $(e,r)}}function Ye(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function We(e){return Ge(e)||Ke(e)||fe(e)||Ye()}function O(e){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},O(e)}function Xe(e,r){if(O(e)!=="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var t=o.call(e,r||"default");if(O(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function $e(e){var r=Xe(e,"string");return O(r)==="symbol"?r:String(r)}function ke(e,r,o){return r=$e(r),r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function Je(e){if(Array.isArray(e))return e}function Fe(e,r){var o=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var t,l,f,b,c=[],v=!0,h=!1;try{if(f=(o=o.call(e)).next,r===0){if(Object(o)!==o)return;v=!1}else for(;!(v=(t=f.call(o)).done)&&(c.push(t.value),c.length!==r);v=!0);}catch(y){h=!0,l=y}finally{try{if(!v&&o.return!=null&&(b=o.return(),Object(b)!==b))return}finally{if(h)throw l}}return c}}function qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(e,r){return Je(e)||Fe(e,r)||fe(e,r)||qe()}var Qe={root:function(r){var o=r.props;return W("p-splitter p-component p-splitter-".concat(o.layout))},gutter:"p-splitter-gutter",gutterHandler:"p-splitter-gutter-handle",panel:{root:"p-splitter-panel"}},Ve=`
@layer primereact {
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
    }
    
    .p-splitter-vertical {
        flex-direction: column;
    }
    
    .p-splitter-panel {
        flex-grow: 1;
    }
    
    .p-splitter-panel-nested {
        display: flex;
    }
    
    .p-splitter-panel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }
    
    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: col-resize;
    }
    
    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }
    
    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: 24px;
        width: 100%;
    }
    
    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }
    
    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }
    
    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }
    
    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: 24px;
        height: 100%;
    }
}

`,N=pe.extend({defaultProps:{__TYPE:"Splitter",className:null,gutterSize:4,id:null,layout:"horizontal",onResizeEnd:null,stateKey:null,stateStorage:"session",style:null,children:void 0},css:{classes:Qe,styles:Ve}}),I=pe.extend({defaultProps:{__TYPE:"SplitterPanel",className:null,minSize:null,size:null,style:null,children:void 0},getCProps:function(r){return E.getComponentProps(r,I.defaultProps)},getCOtherProps:function(r){return E.getComponentDiffProps(r,I.defaultProps)},getCProp:function(r,o){return E.getComponentProp(r,o,I.defaultProps)}});function ie(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),o.push.apply(o,t)}return o}function Y(e){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?ie(Object(o),!0).forEach(function(t){ke(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ie(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var de=a.memo(a.forwardRef(function(e,r){var o=a.useContext(Ue),t=N.getProps(e,o),l=a.useRef(null),f=a.useRef(),b=a.useRef({}),c=a.useRef(null),v=a.useRef(null),h=a.useRef(null),y=a.useRef(null),z=a.useRef(null),R=a.useRef(null),_=a.useRef(null),x=a.useRef(null),j=a.useRef(null),d=a.useRef(null),ge=a.useState([]),k=L(ge,2),J=k[0],F=k[1],me=a.useState(!1),q=L(me,2),ve=q[0],he=q[1],U=t.stateKey!=null,Q=t.children&&t.children.length||1,V=function(n,s){return s in n?n[s]:t.children&&[].concat(t.children)[s].props.size||100/Q},ye={props:t,state:{panelSizes:J,nested:u.getAttribute(l.current&&l.current.parentElement,"data-p-splitter-panel-nested")===!0}},B=N.setMetaData(Y({},ye)),C=B.ptm,T=B.cx,S=B.isUnstyled;Be(N.css.styles,S,{name:"splitter"});var be=function(n){return C(n,{context:{nested:ve}})},Se=ae({type:"mousemove",listener:function(n){return ne(n)}}),Z=L(Se,2),ze=Z[0],Pe=Z[1],we=ae({type:"mouseup",listener:function(n){oe(n),_e()}}),ee=L(we,2),Ee=ee[0],Oe=ee[1],Re=function(){ze(),Ee()},_e=function(){Pe(),Oe()},A=function(n,s){return I.getCProp(n,s)},xe=function(n,s){return!(n>100||n<0||s>100||s<0||t.children[d.current].props&&t.children[d.current].props.minSize&&t.children[d.current].props.minSize>n||t.children[d.current+1].props&&t.children[d.current+1].props.minSize&&t.children[d.current+1].props.minSize>s)},je=function(){v.current=!1,c.current=null,h.current=null,y.current=null,z.current=null,R.current=null,_.current=null,x.current=null,j.current=null,d.current=null},G=a.useCallback(function(){switch(t.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(t.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},[t.stateStorage]),Ce=function(n){E.isArray(n)&&G().setItem(t.stateKey,JSON.stringify(n))},te=a.useCallback(function(){var i=G().getItem(t.stateKey);i&&F(JSON.parse(i))},[G,t.stateKey]),re=function(n,s){f.current=b.current[s];var p=n.type==="touchstart"?n.touches[0].pageX:n.pageX,g=n.type==="touchstart"?n.touches[0].pageY:n.pageY;c.current=t.layout==="horizontal"?u.getWidth(l.current):u.getHeight(l.current),v.current=!0,h.current=t.layout==="horizontal"?p:g,y.current=f.current.previousElementSibling,z.current=f.current.nextElementSibling,R.current=100*(t.layout==="horizontal"?u.getOuterWidth(y.current,!0):u.getOuterHeight(y.current,!0))/c.current,_.current=R.current,x.current=100*(t.layout==="horizontal"?u.getOuterWidth(z.current,!0):u.getOuterHeight(z.current,!0))/c.current,j.current=x.current,d.current=s,!S()&&u.addClass(f.current,"p-splitter-gutter-resizing"),f.current.setAttribute("data-p-splitter-gutter-resizing",!0),!S()&&u.addClass(l.current,"p-splitter-resizing"),l.current.setAttribute("data-p-splitter-resizing",!0)},ne=function(n){var s,p=n.type==="touchmove"?n.touches[0].pageX:n.pageX,g=n.type==="touchmove"?n.touches[0].pageY:n.pageY;t.layout==="horizontal"?s=p*100/c.current-h.current*100/c.current:s=g*100/c.current-h.current*100/c.current;var P=R.current+s,w=x.current-s;xe(P,w)&&(_.current=P,j.current=w,y.current.style.flexBasis="calc("+P+"% - "+(t.children.length-1)*t.gutterSize+"px)",z.current.style.flexBasis="calc("+w+"% - "+(t.children.length-1)*t.gutterSize+"px)")},oe=function(n){F(function(s){for(var p=[],g=0;g<t.children.length;g++)p[g]=V(s,g);return p[d.current]=_.current,p[d.current+1]=j.current,t.onResizeEnd&&t.onResizeEnd({originalEvent:n,sizes:p}),U&&Ce(p),p}),!S()&&u.removeClass(f.current,"p-splitter-gutter-resizing"),f.current.setAttribute("data-p-splitter-gutter-resizing",!1),!S()&&u.removeClass(l.current,"p-splitter-resizing"),l.current.setAttribute("data-p-splitter-resizing",!1),je()},Te=function(n,s){re(n,s),Re()},Ae=function(n,s){re(n,s),window.addEventListener("touchmove",K,{passive:!1,cancelable:!1}),window.addEventListener("touchend",se)},K=function(n){ne(n)},se=function i(n){oe(n),window.removeEventListener("touchmove",K),window.removeEventListener("touchend",i)};a.useImperativeHandle(r,function(){return{props:t,getElement:function(){return l.current}}}),a.useEffect(function(){var i=We(l.current.children).filter(function(n){return u.getAttribute(n,"data-pc-section")==="splitterpanel.root"});i.map(function(n){n.childNodes&&E.isNotEmpty(u.find(n,"[data-pc-name='splitter']")&&u.find(n,"[data-pc-section='root']"))&&(!S()&&u.addClass(n,"p-splitter-panel-nested"),n.setAttribute("data-p-splitter-panel-nested",!0),he(!0))})},[]),a.useEffect(function(){U&&te()},[te,U]);var Me=function(n,s){var p=W(A(n,"className"),T("panel.root")),g=D({ref:function(m){return b.current[s]=m},className:T("gutter"),style:t.layout==="horizontal"?{width:t.gutterSize+"px"}:{height:t.gutterSize+"px"},onMouseDown:function(m){return Te(m,s)},onTouchStart:function(m){return Ae(m,s)},onTouchMove:function(m){return K(m)},onTouchEnd:function(m){return se(m)},"data-p-splitter-gutter-resizing":!1},C("gutter")),P=D({className:T("gutterHandler")},C("gutterHandler")),w=s!==t.children.length-1&&a.createElement("div",g,a.createElement("div",P)),He="calc("+V(J,s)+"% - "+(Q-1)*t.gutterSize+"px)",Ie=D({key:s,id:A(n,"id"),className:p,style:Y(Y({},A(n,"style")),{},{flexBasis:He}),role:"presentation","data-p-splitter-panel-nested":!1},be("splitterpanel.root"));return a.createElement(a.Fragment,null,a.createElement("div",Ie,A(n,"children")),w)},De=function(){return a.Children.map(t.children,Me)},Le=D({id:t.id,style:t.style,className:W(t.className,T("root")),"data-p-splitter-resizing":!1},N.getOtherProps(t),C("root")),Ne=De();return a.createElement("div",X({ref:l},Le),Ne)}));de.displayName="Splitter";const ot={title:"Panel/Splitter",component:de,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},gutterSize:{control:"number",description:"Size of the divider in pixels.",options:null},layout:{control:"select",description:'Orientation of the panels, valid values are "horizontal" and "vertical".',options:["horizontal","vertical"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},stateKey:{control:"text",description:"Storage identifier of a stateful Splitter.",options:null},stateStorage:{control:"select",description:'Defines where a stateful splitter keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.',options:["local","session"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},H={args:{unstyled:!1}};var le,ue,ce;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(ce=(ue=H.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const st=["Default"];export{H as Default,st as __namedExportsOrder,ot as default};
//# sourceMappingURL=Splitter.stories-674104b6.js.map
