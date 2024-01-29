import{r as d}from"./index-76fb7be0.js";import{a as Ve,c as Ee,D as y,Z as W,O as qe,P as ge}from"./api.esm-4644ee78.js";import{C as Ge,u as Je}from"./componentbase.esm-1c796d7e.js";import{d as Qe,e as et,f as tt,a as nt,b as q,c as rt}from"./hooks.esm-d069ba29.js";import{P as ot}from"./portal.esm-16954874.js";function k(){return k=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},k.apply(this,arguments)}function x(t){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},x(t)}function it(t,o){if(x(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var c=n.call(t,o||"default");if(x(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(t)}function at(t){var o=it(t,"string");return x(o)==="symbol"?o:String(o)}function Se(t,o,n){return o=at(o),o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}function G(t,o){(o==null||o>t.length)&&(o=t.length);for(var n=0,c=new Array(o);n<o;n++)c[n]=t[n];return c}function ut(t){if(Array.isArray(t))return G(t)}function lt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Te(t,o){if(t){if(typeof t=="string")return G(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(t,o)}}function st(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ct(t){return ut(t)||lt(t)||Te(t)||st()}function pt(t){if(Array.isArray(t))return t}function ft(t,o){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var c,i,O,S,h=[],E=!0,P=!1;try{if(O=(n=n.call(t)).next,o===0){if(Object(n)!==n)return;E=!1}else for(;!(E=(c=O.call(n)).done)&&(h.push(c.value),h.length!==o);E=!0);}catch(C){P=!0,i=C}finally{try{if(!E&&n.return!=null&&(S=n.return(),Object(S)!==S))return}finally{if(P)throw i}}return h}}function dt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(t,o){return pt(t)||ft(t,o)||Te(t,o)||dt()}var vt={root:function(o){var n=o.positionState,c=o.classNameState;return Ee("p-tooltip p-component",Se({},"p-tooltip-".concat(n),!0),c)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},mt={arrow:function(o){var n=o.context;return{top:n.bottom?"0":n.right||n.left||!n.right&&!n.left&&!n.top&&!n.bottom?"50%":null,bottom:n.top?"0":null,left:n.right||!n.right&&!n.left&&!n.top&&!n.bottom?"0":n.top||n.bottom?"50%":null,right:n.left?"0":null}}},ht=`
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
`,$=Ge.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:vt,styles:ht,inlineStyles:mt}});function we(t,o){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);o&&(c=c.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,c)}return n}function yt(t){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?we(Object(n),!0).forEach(function(c){Se(t,c,n[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach(function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(n,c))})}return t}var bt=d.memo(d.forwardRef(function(t,o){var n=Qe(),c=d.useContext(Ve),i=$.getProps(t,c),O=d.useState(!1),S=T(O,2),h=S[0],E=S[1],P=d.useState(i.position),C=T(P,2),w=C[0],B=C[1],xe=d.useState(""),J=T(xe,2),Q=J[0],ee=J[1],te={props:i,state:{visible:h,position:w,className:Q},context:{right:w==="right",left:w==="left",top:w==="top",bottom:w==="bottom"}},R=$.setMetaData(te),U=R.ptm,Z=R.cx,Oe=R.sx,Pe=R.isUnstyled;Je($.css.styles,Pe,{name:"tooltip"});var p=d.useRef(null),D=d.useRef(null),f=d.useRef(null),j=d.useRef(null),A=d.useRef(!0),ne=d.useRef({}),re=d.useRef(null),Ce=et({listener:function(e){!y.isTouchDevice()&&g(e)}}),oe=T(Ce,2),Re=oe[0],De=oe[1],je=tt({target:f.current,listener:function(e){g(e)},when:h}),ie=T(je,2),Ae=ie[0],Le=ie[1],Me=function(e){return!(i.content||v(e,"tooltip"))},Ie=function(e){return!(i.content||v(e,"tooltip")||i.children)},F=function(e){return v(e,"mousetrack")||i.mouseTrack},ae=function(e){return v(e,"disabled")==="true"||le(e,"disabled")||i.disabled},ue=function(e){return v(e,"showondisabled")||i.showOnDisabled},L=function(){return v(f.current,"autohide")||i.autoHide},v=function(e,r){return le(e,"data-pr-".concat(r))?e.getAttribute("data-pr-".concat(r)):null},le=function(e,r){return e&&e.hasAttribute(r)},se=function(e){var r=[v(e,"showevent")||i.showEvent],u=[v(e,"hideevent")||i.hideEvent];if(F(e))r=["mousemove"],u=["mouseleave"];else{var l=v(e,"event")||i.event;l==="focus"&&(r=["focus"],u=["blur"]),l==="both"&&(r=["focus","mouseenter"],u=["blur","mouseleave"])}return{showEvents:r,hideEvents:u}},Ne=function(e){return v(e,"position")||w},He=function(e){var r=v(e,"mousetracktop")||i.mouseTrackTop,u=v(e,"mousetrackleft")||i.mouseTrackLeft;return{top:r,left:u}},ce=function(e,r){if(D.current){var u=v(e,"tooltip")||i.content;u?(D.current.innerHTML="",D.current.appendChild(document.createTextNode(u)),r()):i.children&&r()}},pe=function(e){ce(f.current,function(){var r=re.current,u=r.pageX,l=r.pageY;i.autoZIndex&&!W.get(p.current)&&W.set("tooltip",p.current,c&&c.autoZIndex||ge.autoZIndex,i.baseZIndex||c&&c.zIndex.tooltip||ge.zIndex.tooltip),p.current.style.left="",p.current.style.top="",L()&&(p.current.style.pointerEvents="none");var s=F(f.current)||e==="mouse";(s&&!j.current||s)&&(j.current={width:y.getOuterWidth(p.current),height:y.getOuterHeight(p.current)}),fe(f.current,{x:u,y:l},e)})},M=function(e){f.current=e.currentTarget;var r=ae(f.current),u=Ie(ue(f.current)&&r?f.current.firstChild:f.current);if(!(u||r))if(re.current=e,h)I("updateDelay",pe);else{var l=N(i.onBeforeShow,{originalEvent:e,target:f.current});l&&I("showDelay",function(){E(!0),N(i.onShow,{originalEvent:e,target:f.current})})}},g=function(e){if(de(),h){var r=N(i.onBeforeHide,{originalEvent:e,target:f.current});r&&I("hideDelay",function(){!L()&&A.current===!1||(W.clear(p.current),y.removeClass(p.current,"p-tooltip-active"),E(!1),N(i.onHide,{originalEvent:e,target:f.current}))})}},fe=function(e,r,u){var l=0,s=0,m=u||w;if((F(e)||m=="mouse")&&r){var b={width:y.getOuterWidth(p.current),height:y.getOuterHeight(p.current)};l=r.x,s=r.y;var he=He(e),H=he.top,_=he.left;switch(m){case"left":l-=b.width+_,s-=b.height/2-H;break;case"right":case"mouse":l+=_,s-=b.height/2-H;break;case"top":l-=b.width/2-_,s-=b.height+H;break;case"bottom":l-=b.width/2-_,s+=H;break}l<=0||j.current.width>b.width?(p.current.style.left="0px",p.current.style.right=window.innerWidth-b.width-l+"px"):(p.current.style.right="",p.current.style.left=l+"px"),p.current.style.top=s+"px",y.addClass(p.current,"p-tooltip-active")}else{var K=y.findCollisionPosition(m),Xe=v(e,"my")||i.my||K.my,Ye=v(e,"at")||i.at||K.at;p.current.style.padding="0px",y.flipfitCollision(p.current,e,Xe,Ye,function(z){var ye=z.at,V=ye.x,Ke=ye.y,ze=z.my.x,be=i.at?V!=="center"&&V!==ze?V:Ke:z.at["".concat(K.axis)];p.current.style.padding="",B(be),_e(be),y.addClass(p.current,"p-tooltip-active")})}},_e=function(e){if(p.current){var r=getComputedStyle(p.current);e==="left"?p.current.style.left=parseFloat(r.left)-parseFloat(r.paddingLeft)*2+"px":e==="top"&&(p.current.style.top=parseFloat(r.top)-parseFloat(r.paddingTop)*2+"px")}},We=function(){L()||(A.current=!1)},$e=function(e){L()||(A.current=!0,g(e))},ke=function(e){if(e){var r=se(e),u=r.showEvents,l=r.hideEvents,s=ve(e);u.forEach(function(m){return s==null?void 0:s.addEventListener(m,M)}),l.forEach(function(m){return s==null?void 0:s.addEventListener(m,g)})}},Be=function(e){if(e){var r=se(e),u=r.showEvents,l=r.hideEvents,s=ve(e);u.forEach(function(m){return s==null?void 0:s.removeEventListener(m,M)}),l.forEach(function(m){return s==null?void 0:s.removeEventListener(m,g)})}},I=function(e,r){de();var u=v(f.current,e.toLowerCase())||i[e];u?ne.current["".concat(e)]=setTimeout(function(){return r()},u):r()},N=function(e){if(e){for(var r=arguments.length,u=new Array(r>1?r-1:0),l=1;l<r;l++)u[l-1]=arguments[l];var s=e.apply(void 0,u);return s===void 0&&(s=!0),s}return!0},de=function(){Object.values(ne.current).forEach(function(e){return clearTimeout(e)})},ve=function(e){if(e){if(ue(e)){if(e.hasWrapper)return e.parentElement;var r=document.createElement("div"),u=e.nodeName==="INPUT";return u?y.addMultipleClasses(r,"p-tooltip-target-wrapper p-inputwrapper"):y.addClass(r,"p-tooltip-target-wrapper"),e.parentNode.insertBefore(r,e),r.appendChild(e),e.hasWrapper=!0,r}else if(e.hasWrapper){var l;(l=e.parentElement).replaceWith.apply(l,ct(e.parentElement.childNodes)),delete e.hasWrapper}return e}return null},Ue=function(e){Y(e),X(e)},X=function(e){me(e||i.target,ke)},Y=function(e){me(e||i.target,Be)},me=function(e,r){if(e=qe.getRefElement(e),e)if(y.isElement(e))r(e);else{var u=function(s){var m=y.find(document,s);m.forEach(function(b){r(b)})};e instanceof Array?e.forEach(function(l){u(l)}):u(e)}};nt(function(){h&&f.current&&ae(f.current)&&g()}),q(function(){return X(),function(){Y()}},[M,g,i.target]),q(function(){if(h){var a=Ne(f.current),e=v(f.current,"classname");B(a),ee(e),pe(a),Re(),Ae()}else B(i.position),ee(""),f.current=null,j.current=null,A.current=!0;return function(){De(),Le()}},[h]),q(function(){h&&I("updateDelay",function(){ce(f.current,function(){fe(f.current)})})},[i.content]),rt(function(){g(),W.clear(p.current)}),d.useImperativeHandle(o,function(){return{props:i,updateTargetEvents:Ue,loadTargetEvents:X,unloadTargetEvents:Y,show:M,hide:g,getElement:function(){return p.current},getTarget:function(){return f.current}}});var Ze=function(){var e=Me(f.current),r=n({id:i.id,className:Ee(i.className,Z("root",{positionState:w,classNameState:Q})),style:i.style,role:"tooltip","aria-hidden":h,onMouseEnter:function(m){return We()},onMouseLeave:function(m){return $e(m)}},$.getOtherProps(i),U("root")),u=n({className:Z("arrow"),style:Oe("arrow",yt({},te))},U("arrow")),l=n({className:Z("text")},U("text"));return d.createElement("div",k({ref:p},r),d.createElement("div",u),d.createElement("div",k({ref:D},l),e&&i.children))};if(h){var Fe=Ze();return d.createElement(ot,{element:Fe,appendTo:i.appendTo,visible:!0})}return null}));bt.displayName="Tooltip";export{bt as T};
