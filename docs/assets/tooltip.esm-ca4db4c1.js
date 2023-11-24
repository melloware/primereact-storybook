import{r as f}from"./index-76fb7be0.js";import{P as Ve,c as Ee,D as h,Z as _,O as qe,m as V,b as ge}from"./api.esm-2e2d159c.js";import{C as Ge,u as Je}from"./componentbase.esm-b0caea1e.js";import{b as Qe,g as et,d as tt,e as q,f as nt}from"./hooks.esm-c93f10ee.js";import{P as rt}from"./portal.esm-c66f0cf3.js";function $(){return $=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$.apply(this,arguments)}function P(t){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},P(t)}function ot(t,i){if(P(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,i||"default");if(P(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(t)}function it(t){var i=ot(t,"string");return P(i)==="symbol"?i:String(i)}function Se(t,i,n){return i=it(i),i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}function G(t,i){(i==null||i>t.length)&&(i=t.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=t[n];return r}function at(t){if(Array.isArray(t))return G(t)}function ut(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Te(t,i){if(t){if(typeof t=="string")return G(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(t,i)}}function lt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(t){return at(t)||ut(t)||Te(t)||lt()}function ct(t){if(Array.isArray(t))return t}function pt(t,i){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,w,T,m,E=[],S=!0,x=!1;try{if(T=(n=n.call(t)).next,i===0){if(Object(n)!==n)return;S=!1}else for(;!(S=(r=T.call(n)).done)&&(E.push(r.value),E.length!==i);S=!0);}catch(y){x=!0,w=y}finally{try{if(!S&&n.return!=null&&(m=n.return(),Object(m)!==m))return}finally{if(x)throw w}}return E}}function ft(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(t,i){return ct(t)||pt(t,i)||Te(t,i)||ft()}var dt={root:function(i){var n=i.positionState,r=i.classNameState;return Ee("p-tooltip p-component",Se({},"p-tooltip-".concat(n),!0),r)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},vt={arrow:function(i){var n=i.context;return{top:n.bottom?"0":n.right||n.left||!n.right&&!n.left&&!n.top&&!n.bottom?"50%":null,bottom:n.top?"0":null,left:n.right||!n.right&&!n.left&&!n.top&&!n.bottom?"0":n.top||n.bottom?"50%":null,right:n.left?"0":null}}},mt=`
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }

    .p-tooltip-target-wrapper {
        display: inline-flex;
    }
}
`,W=Ge.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:dt,styles:mt,inlineStyles:vt}});function we(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);i&&(r=r.filter(function(w){return Object.getOwnPropertyDescriptor(t,w).enumerable})),n.push.apply(n,r)}return n}function ht(t){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?we(Object(n),!0).forEach(function(r){Se(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var yt=f.memo(f.forwardRef(function(t,i){var n=f.useContext(Ve),r=W.getProps(t,n),w=f.useState(!1),T=O(w,2),m=T[0],E=T[1],S=f.useState(r.position),x=O(S,2),y=x[0],k=x[1],xe=f.useState(""),J=O(xe,2),Q=J[0],ee=J[1],te={props:r,state:{visible:m,position:y,className:Q},context:{right:y==="right",left:y==="left",top:y==="top",bottom:y==="bottom"}},C=W.setMetaData(te),B=C.ptm,U=C.cx,Oe=C.sx,Pe=C.isUnstyled;Je(W.css.styles,Pe,{name:"tooltip"});var c=f.useRef(null),R=f.useRef(null),p=f.useRef(null),D=f.useRef(null),j=f.useRef(!0),ne=f.useRef({}),re=f.useRef(null),Ce=Qe({listener:function(e){!h.isTouchDevice()&&g(e)}}),oe=O(Ce,2),Re=oe[0],De=oe[1],je=et({target:p.current,listener:function(e){g(e)},when:m}),ie=O(je,2),Ae=ie[0],Le=ie[1],Ie=function(e){return!(r.content||d(e,"tooltip"))},Me=function(e){return!(r.content||d(e,"tooltip")||r.children)},Z=function(e){return d(e,"mousetrack")||r.mouseTrack},ae=function(e){return d(e,"disabled")==="true"||le(e,"disabled")||r.disabled},ue=function(e){return d(e,"showondisabled")||r.showOnDisabled},A=function(){return d(p.current,"autohide")||r.autoHide},d=function(e,o){return le(e,"data-pr-".concat(o))?e.getAttribute("data-pr-".concat(o)):null},le=function(e,o){return e&&e.hasAttribute(o)},se=function(e){var o=[d(e,"showevent")||r.showEvent],u=[d(e,"hideevent")||r.hideEvent];if(Z(e))o=["mousemove"],u=["mouseleave"];else{var l=d(e,"event")||r.event;l==="focus"&&(o=["focus"],u=["blur"]),l==="both"&&(o=["focus","mouseenter"],u=["blur","mouseleave"])}return{showEvents:o,hideEvents:u}},Ne=function(e){return d(e,"position")||y},He=function(e){var o=d(e,"mousetracktop")||r.mouseTrackTop,u=d(e,"mousetrackleft")||r.mouseTrackLeft;return{top:o,left:u}},ce=function(e,o){if(R.current){var u=d(e,"tooltip")||r.content;u?(R.current.innerHTML="",R.current.appendChild(document.createTextNode(u)),o()):r.children&&o()}},pe=function(e){ce(p.current,function(){var o=re.current,u=o.pageX,l=o.pageY;r.autoZIndex&&!_.get(c.current)&&_.set("tooltip",c.current,n&&n.autoZIndex||ge.autoZIndex,r.baseZIndex||n&&n.zIndex.tooltip||ge.zIndex.tooltip),c.current.style.left="",c.current.style.top="",A()&&(c.current.style.pointerEvents="none");var s=Z(p.current)||e==="mouse";(s&&!D.current||s)&&(D.current={width:h.getOuterWidth(c.current),height:h.getOuterHeight(c.current)}),fe(p.current,{x:u,y:l},e)})},L=function(e){p.current=e.currentTarget;var o=ae(p.current),u=Me(ue(p.current)&&o?p.current.firstChild:p.current);if(!(u||o))if(re.current=e,m)I("updateDelay",pe);else{var l=M(r.onBeforeShow,{originalEvent:e,target:p.current});l&&I("showDelay",function(){E(!0),M(r.onShow,{originalEvent:e,target:p.current})})}},g=function(e){if(de(),m){var o=M(r.onBeforeHide,{originalEvent:e,target:p.current});o&&I("hideDelay",function(){!A()&&j.current===!1||(_.clear(c.current),h.removeClass(c.current,"p-tooltip-active"),E(!1),M(r.onHide,{originalEvent:e,target:p.current}))})}},fe=function(e,o,u){var l=0,s=0,v=u||y;if((Z(e)||v=="mouse")&&o){var b={width:h.getOuterWidth(c.current),height:h.getOuterHeight(c.current)};l=o.x,s=o.y;var he=He(e),N=he.top,H=he.left;switch(v){case"left":l-=b.width+H,s-=b.height/2-N;break;case"right":case"mouse":l+=H,s-=b.height/2-N;break;case"top":l-=b.width/2-H,s-=b.height+N;break;case"bottom":l-=b.width/2-H,s+=N;break}l<=0||D.current.width>b.width?(c.current.style.left="0px",c.current.style.right=window.innerWidth-b.width-l+"px"):(c.current.style.right="",c.current.style.left=l+"px"),c.current.style.top=s+"px",h.addClass(c.current,"p-tooltip-active")}else{var Y=h.findCollisionPosition(v),Xe=d(e,"my")||r.my||Y.my,Ye=d(e,"at")||r.at||Y.at;c.current.style.padding="0px",h.flipfitCollision(c.current,e,Xe,Ye,function(K){var ye=K.at,z=ye.x,Ke=ye.y,ze=K.my.x,be=r.at?z!=="center"&&z!==ze?z:Ke:K.at["".concat(Y.axis)];c.current.style.padding="",k(be),_e(be),h.addClass(c.current,"p-tooltip-active")})}},_e=function(e){if(c.current){var o=getComputedStyle(c.current);e==="left"?c.current.style.left=parseFloat(o.left)-parseFloat(o.paddingLeft)*2+"px":e==="top"&&(c.current.style.top=parseFloat(o.top)-parseFloat(o.paddingTop)*2+"px")}},We=function(){A()||(j.current=!1)},$e=function(e){A()||(j.current=!0,g(e))},ke=function(e){if(e){var o=se(e),u=o.showEvents,l=o.hideEvents,s=ve(e);u.forEach(function(v){return s==null?void 0:s.addEventListener(v,L)}),l.forEach(function(v){return s==null?void 0:s.addEventListener(v,g)})}},Be=function(e){if(e){var o=se(e),u=o.showEvents,l=o.hideEvents,s=ve(e);u.forEach(function(v){return s==null?void 0:s.removeEventListener(v,L)}),l.forEach(function(v){return s==null?void 0:s.removeEventListener(v,g)})}},I=function(e,o){de();var u=d(p.current,e.toLowerCase())||r[e];u?ne.current["".concat(e)]=setTimeout(function(){return o()},u):o()},M=function(e){if(e){for(var o=arguments.length,u=new Array(o>1?o-1:0),l=1;l<o;l++)u[l-1]=arguments[l];var s=e.apply(void 0,u);return s===void 0&&(s=!0),s}return!0},de=function(){Object.values(ne.current).forEach(function(e){return clearTimeout(e)})},ve=function(e){if(e){if(ue(e)){if(e.hasWrapper)return e.parentElement;var o=document.createElement("div"),u=e.nodeName==="INPUT";return u?h.addMultipleClasses(o,"p-tooltip-target-wrapper p-inputwrapper"):h.addClass(o,"p-tooltip-target-wrapper"),e.parentNode.insertBefore(o,e),o.appendChild(e),e.hasWrapper=!0,o}else if(e.hasWrapper){var l;(l=e.parentElement).replaceWith.apply(l,st(e.parentElement.childNodes)),delete e.hasWrapper}return e}return null},Ue=function(e){X(e),F(e)},F=function(e){me(e||r.target,ke)},X=function(e){me(e||r.target,Be)},me=function(e,o){if(e=qe.getRefElement(e),e)if(h.isElement(e))o(e);else{var u=function(s){var v=h.find(document,s);v.forEach(function(b){o(b)})};e instanceof Array?e.forEach(function(l){u(l)}):u(e)}};tt(function(){m&&p.current&&ae(p.current)&&g()}),q(function(){return F(),function(){X()}},[L,g,r.target]),q(function(){if(m){var a=Ne(p.current),e=d(p.current,"classname");k(a),ee(e),pe(a),Re(),Ae()}else k(r.position),ee(""),p.current=null,D.current=null,j.current=!0;return function(){De(),Le()}},[m]),q(function(){m&&I("updateDelay",function(){ce(p.current,function(){fe(p.current)})})},[r.content]),nt(function(){g(),_.clear(c.current)}),f.useImperativeHandle(i,function(){return{props:r,updateTargetEvents:Ue,loadTargetEvents:F,unloadTargetEvents:X,show:L,hide:g,getElement:function(){return c.current},getTarget:function(){return p.current}}});var Ze=function(){var e=Ie(p.current),o=V({id:r.id,className:Ee(r.className,U("root",{positionState:y,classNameState:Q})),style:r.style,role:"tooltip","aria-hidden":m,onMouseEnter:function(v){return We()},onMouseLeave:function(v){return $e(v)}},W.getOtherProps(r),B("root")),u=V({className:U("arrow"),style:Oe("arrow",ht({},te))},B("arrow")),l=V({className:U("text")},B("text"));return f.createElement("div",$({ref:c},o),f.createElement("div",u),f.createElement("div",$({ref:R},l),e&&r.children))};if(m){var Fe=Ze();return f.createElement(rt,{element:Fe,appendTo:r.appendTo,visible:!0})}return null}));yt.displayName="Tooltip";export{yt as T};
//# sourceMappingURL=tooltip.esm-ca4db4c1.js.map
