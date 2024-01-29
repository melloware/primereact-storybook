import{r as s}from"./index-76fb7be0.js";import{O as D,a as Xe,D as l,c as ee}from"./api.esm-4644ee78.js";import{C as he,u as $e}from"./componentbase.esm-1c796d7e.js";import{d as Fe,h as fe}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";function te(){return te=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},te.apply(this,arguments)}function re(e,r){(r==null||r>e.length)&&(r=e.length);for(var o=0,i=new Array(r);o<r;o++)i[o]=e[o];return i}function Je(e){if(Array.isArray(e))return re(e)}function qe(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ye(e,r){if(e){if(typeof e=="string")return re(e,r);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return re(e,r)}}function Qe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ve(e){return Je(e)||qe(e)||ye(e)||Qe()}function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},T(e)}function Ze(e,r){if(T(e)!=="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var i=o.call(e,r||"default");if(T(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function et(e){var r=Ze(e,"string");return T(r)==="symbol"?r:String(r)}function tt(e,r,o){return r=et(r),r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function rt(e){if(Array.isArray(e))return e}function nt(e,r){var o=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var i,n,d,v,b=[],c=!0,_=!1;try{if(d=(o=o.call(e)).next,r===0){if(Object(o)!==o)return;c=!1}else for(;!(c=(i=d.call(o)).done)&&(b.push(i.value),b.length!==r);c=!0);}catch(E){_=!0,n=E}finally{try{if(!c&&o.return!=null&&(v=o.return(),Object(v)!==v))return}finally{if(_)throw n}}return b}}function ot(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(e,r){return rt(e)||nt(e,r)||ye(e,r)||ot()}var at={root:function(r){var o=r.props;return ee("p-splitter p-component p-splitter-".concat(o.layout))},gutter:"p-splitter-gutter",gutterHandler:"p-splitter-gutter-handle",panel:{root:"p-splitter-panel"}},st=`
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

`,H=he.extend({defaultProps:{__TYPE:"Splitter",className:null,gutterSize:4,id:null,step:5,layout:"horizontal",onResizeEnd:null,stateKey:null,stateStorage:"session",style:null,children:void 0},css:{classes:at,styles:st}}),U=he.extend({defaultProps:{__TYPE:"SplitterPanel",className:null,minSize:null,size:null,style:null,children:void 0},getCProps:function(r){return D.getComponentProps(r,U.defaultProps)},getCOtherProps:function(r){return D.getComponentDiffProps(r,U.defaultProps)},getCProp:function(r,o){return D.getComponentProp(r,o,U.defaultProps)}});function de(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),o.push.apply(o,i)}return o}function Z(e){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?de(Object(o),!0).forEach(function(i){tt(e,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):de(Object(o)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i))})}return e}var be=s.memo(s.forwardRef(function(e,r){var o=Fe(),i=s.useContext(Xe),n=H.getProps(e,i),d=s.useRef(null),v=s.useRef(),b=s.useRef({}),c=s.useRef(null),_=s.useRef(null),E=s.useRef(null),S=s.useRef(null),z=s.useRef(null),P=s.useRef(null),G=s.useRef(null),x=s.useRef(null),w=s.useRef(null),A=s.useRef(null),h=s.useRef(null),B=s.useRef(null),Se=s.useState([]),ne=K(Se,2),W=ne[0],oe=ne[1],ze=s.useState(!1),ae=K(ze,2),Pe=ae[0],we=ae[1],Y=n.stateKey!=null,se=n.children&&n.children.length||1,k=function(t,a){return a in t?t[a]:n.children&&[].concat(n.children)[a].props.size||100/se},Oe={props:n,state:{panelSizes:W,nested:l.getAttribute(d.current&&d.current.parentElement,"data-p-splitter-panel-nested")===!0}},X=H.setMetaData(Z({},Oe)),j=X.ptm,C=X.cx,R=X.isUnstyled;$e(H.css.styles,R,{name:"splitter"});var Ee=function(t){return j(t,{context:{nested:Pe}})},Re=fe({type:"mousemove",listener:function(t){return J(t)}}),ue=K(Re,2),_e=ue[0],De=ue[1],Te=fe({type:"mouseup",listener:function(t){q(t),Ce()}}),ie=K(Te,2),xe=ie[0],Ae=ie[1],je=function(){_e(),xe()},Ce=function(){De(),Ae()},M=function(t,a){return U.getCProp(t,a)},Me=function(t,a){return!(t>100||t<0||a>100||a<0||n.children[h.current].props&&n.children[h.current].props.minSize&&n.children[h.current].props.minSize>t||n.children[h.current+1].props&&n.children[h.current+1].props.minSize&&n.children[h.current+1].props.minSize>a)},Le=function(){_.current=!1,c.current=null,E.current=null,S.current=null,z.current=null,P.current=null,x.current=null,w.current=null,A.current=null,h.current=null},$=s.useCallback(function(){switch(n.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(n.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},[n.stateStorage]),Ne=function(t){D.isArray(t)&&$().setItem(n.stateKey,JSON.stringify(t))},le=s.useCallback(function(){var u=$().getItem(n.stateKey);u&&oe(JSON.parse(u))},[$,n.stateKey]),F=function(t,a,p){v.current=b.current[a];var g=t.type==="touchstart"?t.touches[0].pageX:t.pageX,y=t.type==="touchstart"?t.touches[0].pageY:t.pageY,f=n.layout==="horizontal";c.current=f?l.getWidth(d.current):l.getHeight(d.current),_.current=!0,E.current=f?g:y,S.current=v.current.previousElementSibling,z.current=v.current.nextElementSibling,p?(P.current=f?l.getOuterWidth(S.current,!0):l.getOuterHeight(S.current,!0),w.current=f?l.getOuterWidth(z.current,!0):l.getOuterHeight(z.current,!0)):(P.current=100*(f?l.getOuterWidth(S.current,!0):l.getOuterHeight(S.current,!0))/c.current,w.current=100*(f?l.getOuterWidth(z.current,!0):l.getOuterHeight(z.current,!0))/c.current),x.current=P.current,A.current=w.current,h.current=a,!R()&&l.addClass(v.current,"p-splitter-gutter-resizing"),v.current.setAttribute("data-p-splitter-gutter-resizing",!0),!R()&&l.addClass(d.current,"p-splitter-resizing"),d.current.setAttribute("data-p-splitter-resizing",!0)},J=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,g,y,f,N=n.layout==="horizontal",V=t.type==="touchmove"?t.touches[0].pageX:t.pageX,O=t.type==="touchmove"?t.touches[0].pageY:t.pageY;p?N?(f=100*(P.current+a)/c.current,y=100*(w.current-a)/c.current):(f=100*(P.current-a)/c.current,y=100*(w.current+a)/c.current):(N?g=V*100/c.current-E.current*100/c.current:g=O*100/c.current-E.current*100/c.current,f=P.current+g,y=w.current-g),Me(f,y)&&(x.current=f,A.current=y,S.current.style.flexBasis="calc("+f+"% - "+(n.children.length-1)*n.gutterSize+"px)",z.current.style.flexBasis="calc("+y+"% - "+(n.children.length-1)*n.gutterSize+"px)",G.current=parseFloat(f).toFixed(4))},q=function(t){oe(function(a){for(var p=[],g=0;g<n.children.length;g++)p[g]=k(a,g);return p[h.current]=x.current,p[h.current+1]=A.current,n.onResizeEnd&&n.onResizeEnd({originalEvent:t,sizes:p}),Y&&Ne(p),p}),!R()&&l.removeClass(v.current,"p-splitter-gutter-resizing"),b.current&&Object.keys(b.current).forEach(function(a){return b.current[a].setAttribute("data-p-splitter-gutter-resizing",!1)}),!R()&&l.removeClass(d.current,"p-splitter-resizing"),d.current.setAttribute("data-p-splitter-resizing",!1),Le()},Ke=function(){ce(),q()},He=function(t,a){switch(t.code){case"ArrowLeft":{n.layout==="horizontal"&&L(t,a,n.step*-1),t.preventDefault();break}case"ArrowRight":{n.layout==="horizontal"&&L(t,a,n.step),t.preventDefault();break}case"ArrowDown":{n.layout==="vertical"&&L(t,a,n.step*-1),t.preventDefault();break}case"ArrowUp":{n.layout==="vertical"&&L(t,a,n.step),t.preventDefault();break}}},Ie=function(t,a,p){F(t,a,!0),J(t,p,!0)},L=function(t,a,p){ce(),B.current=setTimeout(function(){Ie(t,a,p)},40)},ce=function(){B.current&&clearTimeout(B.current)},Ue=function(t,a){F(t,a,!1),je()},Ge=function(t,a){F(t,a,!1),window.addEventListener("touchmove",Q,{passive:!1,cancelable:!1}),window.addEventListener("touchend",pe)},Q=function(t){J(t)},pe=function u(t){q(t),window.removeEventListener("touchmove",Q),window.removeEventListener("touchend",u)};s.useImperativeHandle(r,function(){return{props:n,getElement:function(){return d.current}}}),s.useEffect(function(){var u=Ve(d.current.children).filter(function(t){return l.getAttribute(t,"data-pc-section")==="splitterpanel.root"});u.map(function(t,a){G.current=k(W,0),t.childNodes&&D.isNotEmpty(l.find(t,"[data-pc-name='splitter']")&&l.find(t,"[data-pc-section='root']"))&&(!R()&&l.addClass(t,"p-splitter-panel-nested"),t.setAttribute("data-p-splitter-panel-nested",!0),we(!0))})},[]),s.useEffect(function(){Y&&le()},[le,Y]);var Be=function(t,a){var p=ee(M(t,"className"),C("panel.root")),g=o({ref:function(m){return b.current[a]=m},className:C("gutter"),style:n.layout==="horizontal"?{width:n.gutterSize+"px"}:{height:n.gutterSize+"px"},onMouseDown:function(m){return Ue(m,a)},onKeyDown:function(m){return He(m,a)},onKeyUp:Ke,onTouchStart:function(m){return Ge(m,a)},onTouchMove:function(m){return Q(m)},onTouchEnd:function(m){return pe(m)},"data-p-splitter-gutter-resizing":!1},j("gutter")),y=o({tabIndex:0,className:C("gutterHandler"),"aria-orientation":n.layout,"aria-valuenow":G.current},j("gutterHandler")),f=a!==n.children.length-1&&s.createElement("div",g,s.createElement("div",y)),N="calc("+k(W,a)+"% - "+(se-1)*n.gutterSize+"px)",V=o({key:a,id:M(t,"id"),className:p,style:Z(Z({},M(t,"style")),{},{flexBasis:N}),role:"presentation","data-p-splitter-panel-nested":!1},Ee("splitterpanel.root"));return s.createElement(s.Fragment,null,s.createElement("div",V,M(t,"children")),f)},We=function(){return s.Children.map(n.children,Be)},Ye=o({id:n.id,style:n.style,className:ee(n.className,C("root")),"data-p-splitter-resizing":!1},H.getOtherProps(n),j("root")),ke=We();return s.createElement("div",te({ref:d},Ye),ke)}));be.displayName="Splitter";const ft={title:"Panel/Splitter",component:be,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},gutterSize:{control:"number",description:"Size of the divider in pixels.",options:null},layout:{control:"select",description:'Orientation of the panels, valid values are "horizontal" and "vertical".',options:["horizontal","vertical"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},stateKey:{control:"text",description:"Storage identifier of a stateful Splitter.",options:null},stateStorage:{control:"select",description:'Defines where a stateful splitter keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.',options:["local","session"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},I={args:{unstyled:!1}};var ge,me,ve;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(ve=(me=I.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};const dt=["Default"];export{I as Default,dt as __namedExportsOrder,ft as default};
