import{r as u}from"./index-76fb7be0.js";import{O as x,a as kt,c as L,D as p,U as Dt,I as D,b as Be}from"./api.esm-4644ee78.js";import{C as Le,u as Bt}from"./componentbase.esm-1c796d7e.js";import{d as _t,a as jt,b as _e}from"./hooks.esm-d069ba29.js";import{C as Rt}from"./index.esm-4336c134.js";import{C as Ht}from"./index.esm-2c97deba.js";import{T as Kt}from"./index.esm-9702a90e.js";import{R as Q}from"./ripple.esm-1f3221bd.js";import"./_commonjsHelpers-de833af9.js";import"./iconbase.esm-60e86362.js";function ee(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=n[r];return c}function Ut(n){if(Array.isArray(n))return ee(n)}function Lt(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function $e(n,t){if(n){if(typeof n=="string")return ee(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(n,t)}}function $t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vt(n){return Ut(n)||Lt(n)||$e(n)||$t()}function _(n){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(n)}function Wt(n,t){if(_(n)!=="object"||n===null)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var c=r.call(n,t||"default");if(_(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Ft(n){var t=Wt(n,"string");return _(t)==="symbol"?t:String(t)}function Ve(n,t,r){return t=Ft(t),t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function Mt(n){if(Array.isArray(n))return n}function Jt(n,t){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var c,l,b,y,d=[],w=!0,j=!1;try{if(b=(r=r.call(n)).next,t===0){if(Object(r)!==r)return;w=!1}else for(;!(w=(c=b.call(r)).done)&&(d.push(c.value),d.length!==t);w=!0);}catch(R){j=!0,l=R}finally{try{if(!w&&r.return!=null&&(y=r.return(),Object(y)!==y))return}finally{if(j)throw l}}return d}}function Xt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(n,t){return Mt(n)||Jt(n,t)||$e(n,t)||Xt()}function je(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);t&&(c=c.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),r.push.apply(r,c)}return r}function $(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?je(Object(r),!0).forEach(function(c){Ve(n,c,r[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach(function(c){Object.defineProperty(n,c,Object.getOwnPropertyDescriptor(r,c))})}return n}var zt={navcontent:"p-tabview-nav-content",nav:"p-tabview-nav",inkbar:"p-tabview-ink-bar",panelcontainer:function(t){var r=t.props;return L("p-tabview-panels",r.panelContainerClassName)},prevbutton:"p-tabview-nav-prev p-tabview-nav-btn p-link",nextbutton:"p-tabview-nav-next p-tabview-nav-btn p-link",root:function(t){var r=t.props;return L("p-tabview p-component",{"p-tabview-scrollable":r.scrollable},r.className)},navcontainer:"p-tabview-nav-container",tab:{header:function(t){var r=t.selected,c=t.disabled,l=t.headerClassName,b=t._className;return L("p-unselectable-text",{"p-tabview-selected p-highlight":r,"p-disabled":c},l,b)},headertitle:"p-tabview-title",headeraction:"p-tabview-nav-link",content:function(t){var r=t.props,c=t.selected,l=t.getTabProp,b=t.tab,y=t.isSelected,d=t.shouldUseTab,w=t.index;return d(b,w)&&(!r.renderActiveOnly||y(w))?L(l(b,"contentClassName"),l(b,"className"),"p-tabview-panel",{"p-hidden":!c}):void 0}}},Yt=`
@layer primereact {
    .p-tabview-nav-container {
        position: relative;
    }
    
    .p-tabview-scrollable .p-tabview-nav-container {
        overflow: hidden;
    }
    
    .p-tabview-nav-content {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
        position: relative;
    }
    
    .p-tabview-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex: 1 1 auto;
    }
    
    .p-tabview-nav-link {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        overflow: hidden;
    }
    
    .p-tabview-ink-bar {
        display: none;
        z-index: 1;
    }
    
    .p-tabview-nav-link:focus {
        z-index: 1;
    }
    
    .p-tabview-close {
        z-index: 1;
    }
    
    .p-tabview-title {
        line-height: 1;
        white-space: nowrap;
    }
    
    .p-tabview-nav-btn {
        position: absolute;
        top: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-tabview-nav-prev {
        left: 0;
    }
    
    .p-tabview-nav-next {
        right: 0;
    }
    
    .p-tabview-nav-content::-webkit-scrollbar {
        display: none;
    }
}
`,qt={tab:{header:function(t){var r=t.headerStyle,c=t._style;return $($({},r||{}),c||{})},content:function(t){var r=t.props,c=t.getTabProp,l=t.tab,b=t.isSelected,y=t.shouldUseTab,d=t.index;return y(l,d)&&(!r.renderActiveOnly||b(d))?$($({},c(l,"contentStyle")||{}),c(l,"style")||{}):void 0}}},V=Le.extend({defaultProps:{__TYPE:"TabView",id:null,activeIndex:0,className:null,onBeforeTabChange:null,onBeforeTabClose:null,onTabChange:null,onTabClose:null,panelContainerClassName:null,panelContainerStyle:null,renderActiveOnly:!0,scrollable:!1,style:null,children:void 0},css:{classes:zt,styles:Yt,inlineStyles:qt}}),E=Le.extend({defaultProps:{__TYPE:"TabPanel",className:null,closable:!1,contentClassName:null,contentStyle:null,disabled:!1,header:null,headerClassName:null,headerStyle:null,headerTemplate:null,leftIcon:null,rightIcon:null,prevButton:null,nextButton:null,closeIcon:null,style:null,children:void 0},getCProp:function(t,r){return x.getComponentProp(t,r,E.defaultProps)},getCProps:function(t){return x.getComponentProps(t,E.defaultProps)},getCOtherProps:function(t){return x.getComponentDiffProps(t,E.defaultProps)}});function Re(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);t&&(c=c.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),r.push.apply(r,c)}return r}function Z(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Re(Object(r),!0).forEach(function(c){Ve(n,c,r[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Re(Object(r)).forEach(function(c){Object.defineProperty(n,c,Object.getOwnPropertyDescriptor(r,c))})}return n}var We=u.forwardRef(function(n,t){var r=_t(),c=u.useContext(kt),l=V.getProps(n,c),b=u.useState(l.id),y=B(b,2),d=y[0],w=y[1],j=u.useState(!0),R=B(j,2),te=R[0],ne=R[1],Fe=u.useState(!1),re=B(Fe,2),ae=re[0],oe=re[1],Me=u.useState([]),le=B(Me,2),S=le[0],ie=le[1],Je=u.useState(l.activeIndex),se=B(Je,2),H=se[0],ce=se[1],ue=u.useRef(null),g=u.useRef(null),K=u.useRef(null),F=u.useRef(null),de=u.useRef(null),pe=u.useRef(null),M=u.useRef({}),J=l.onTabChange?l.activeIndex:H,fe=u.Children.count(l.children),ve={props:l,state:{id:d,isPrevButtonDisabled:te,isNextButtonDisabled:ae,hiddenTabsState:S,activeIndex:H}},O=V.setMetaData(Z({},ve)),f=O.ptm,Xe=O.ptmo,m=O.cx,be=O.sx,ze=O.isUnstyled;Bt(V.css.styles,ze,{name:"tabview"});var T=function(e,a,o){var i={props:e.props,parent:ve,context:{index:o,count:fe,first:o===0,last:o===fe-1,active:o==H,disabled:C(e,"disabled")}};return r(f("tab.".concat(a),{tab:i}),f("tabpanel.".concat(a),{tabpanel:i}),f("tabpanel.".concat(a),i),Xe(C(e,"pt"),a,i))},A=function(e){return e===J},C=function(e,a){return E.getCProp(e,a)},N=function(e){return e&&x.isValidChild(e,"TabPanel")&&S.every(function(a){return a!==e.key})},Ye=function(e){var a=u.Children.map(l.children,function(o,i){if(N(o))return{tab:o,index:i}});return a.find(function(o){var i=o.tab,h=o.index;return!C(i,"disabled")&&h>=e})||a.reverse().find(function(o){var i=o.tab,h=o.index;return!C(i,"disabled")&&e>h})},me=function(e,a){e.preventDefault();var o=l.onBeforeTabClose,i=l.onTabClose,h=l.children,P=h[a].key;o&&o({originalEvent:e,index:a})===!1||(ie([].concat(Vt(S),[P])),i&&i({originalEvent:e,index:a}))},X=function(e,a,o){he(e,a,o)},he=function(e,a,o){if(e&&e.preventDefault(),!C(a,"disabled")){if(l.onBeforeTabChange&&l.onBeforeTabChange({originalEvent:e,index:o})===!1)return;l.onTabChange?l.onTabChange({originalEvent:e,index:o}):ce(o)}k({index:o})},ye=function(e,a,o){switch(e.code){case"ArrowLeft":Ge(e);break;case"ArrowRight":qe(e);break;case"Home":ge(e);break;case"End":we(e);break;case"PageDown":Qe(e);break;case"PageUp":Ze(e);break;case"Enter":case"Space":et(e,a,o);break}},qe=function(e){var a=Ce(e.target.parentElement);a?U(a):ge(e),e.preventDefault()},Ge=function(e){var a=Se(e.target.parentElement);a?U(a):we(e),e.preventDefault()},ge=function(e){var a=tt();U(a),e.preventDefault()},we=function(e){var a=nt();U(a),e.preventDefault()},Qe=function(e){k({index:u.Children.count(l.children)-1}),e.preventDefault()},Ze=function(e){k({index:0}),e.preventDefault()},et=function(e,a,o){he(e,a,o),e.preventDefault()},Ce=function s(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=a?e:e.nextElementSibling;return o?p.getAttribute(o,"data-p-disabled")||p.getAttribute(o,"data-pc-section")==="inkbar"?s(o):p.findSingle(o,'[data-pc-section="headeraction"]'):null},Se=function s(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=a?e:e.previousElementSibling;return o?p.getAttribute(o,"data-p-disabled")||p.getAttribute(o,"data-pc-section")==="inkbar"?s(o):p.findSingle(o,'[data-pc-section="headeraction"]'):null},tt=function(){return Ce(K.current.firstElementChild,!0)},nt=function(){return Se(K.current.lastElementChild,!0)},U=function(e){e&&(p.focus(e),k({element:e}))},rt=function(){var e=M.current["tab_".concat(J)];F.current.style.width=p.getWidth(e)+"px",F.current.style.left=p.getOffset(e).left-p.getOffset(K.current).left+"px"},k=function(e){var a=e.index,o=e.element,i=o||M.current["tab_".concat(a)];i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest"})},Pe=function(){var e=g.current,a=e.scrollLeft,o=e.scrollWidth,i=p.getWidth(g.current);ne(a===0),oe(a===o-i)},at=function(e){l.scrollable&&Pe(),e.preventDefault()},Te=function(){return[de.current,pe.current].reduce(function(e,a){return a?e+p.getWidth(a):e},0)},ot=function(){var e=p.getWidth(g.current)-Te(),a=g.current.scrollLeft-e;g.current.scrollLeft=a<=0?0:a},lt=function(){var e=p.getWidth(g.current)-Te(),a=g.current.scrollLeft+e,o=g.current.scrollWidth-e;g.current.scrollLeft=a>=o?o:a},it=function(){ne(!0),oe(!1),ie([]),l.onTabChange?l.onTabChange({index:J}):ce(l.activeIndex)};u.useEffect(function(){rt(),Pe()}),jt(function(){d||w(Dt())}),_e(function(){if(x.isNotEmpty(S)){var s=Ye(S[S.length-1]);s&&X(null,s.tab,s.index)}},[S]),_e(function(){l.activeIndex!==H&&k({index:l.activeIndex})},[l.activeIndex]),u.useImperativeHandle(t,function(){return{props:l,reset:it,getElement:function(){return ue.current}}});var st=function(e,a){var o=A(a),i=E.getCProps(e),h=i.headerStyle,P=i.headerClassName,z=i.style,Y=i.className,q=i.disabled,Ie=i.leftIcon,xe=i.rightIcon,wt=i.header,Ee=i.headerTemplate,Ct=i.closable,St=i.closeIcon,Pt=d+"_header_"+a,Oe=d+a+"_content",Tt=q||!o?-1:0,Ae=Ie&&D.getJSXIcon(Ie,void 0,{props:l}),It=r({className:m("tab.headertitle")},T(e,"headertitle",a)),Ne=u.createElement("span",It,wt),ke=xe&&D.getJSXIcon(xe,void 0,{props:l}),De="p-tabview-close",xt=St||u.createElement(Kt,{className:De,onClick:function(v){return me(v,a)}}),Et=Ct?D.getJSXIcon(xt,{className:De,onClick:function(v){return me(v,a)}},{props:l}):null,Ot=r({id:Pt,role:"tab",className:m("tab.headeraction"),tabIndex:Tt,"aria-controls":Oe,"aria-selected":o,"aria-disabled":q,onClick:function(v){return X(v,e,a)},onKeyDown:function(v){return ye(v,e,a)}},T(e,"headeraction",a)),G=u.createElement("a",Ot,Ae,Ne,ke,Et,u.createElement(Q,null));if(Ee){var At={className:"p-tabview-nav-link",titleClassName:"p-tabview-title",onClick:function(v){return X(v,e,a)},onKeyDown:function(v){return ye(v,e,a)},leftIconElement:Ae,titleElement:Ne,rightIconElement:ke,element:G,props:l,index:a,selected:o,ariaControls:Oe};G=x.getJSXElement(Ee,At)}var Nt=r({ref:function(v){return M.current["tab_".concat(a)]=v},className:m("tab.header",{selected:o,disabled:q,headerClassName:P,_className:Y}),style:be("tab.header",{headerStyle:h,_style:z}),role:"presentation"},T(e,"root",a),T(e,"header",a));return u.createElement("li",Nt,G)},ct=function(){return u.Children.map(l.children,function(e,a){if(N(e))return st(e,a)})},ut=function(){var e=ct(),a=r({id:d,ref:g,className:m("navcontent"),style:l.style,onScroll:at},f("navcontent")),o=r({ref:K,className:m("nav"),role:"tablist"},f("nav")),i=r({ref:F,"aria-hidden":"true",role:"presentation",className:m("inkbar")},f("inkbar"));return u.createElement("div",a,u.createElement("ul",o,e,u.createElement("li",i)))},dt=function(){var e=r({className:m("panelcontainer"),style:l.panelContainerStyle},f("panelcontainer")),a=u.Children.map(l.children,function(o,i){if(N(o)&&(!l.renderActiveOnly||A(i))){var h=A(i),P=d+i+"_content",z=d+"_header_"+i,Y=r({id:P,className:m("tab.content",{props:l,selected:h,getTabProp:C,tab:o,isSelected:A,shouldUseTab:N,index:i}),style:be("tab.content",{props:l,getTabProp:C,tab:o,isSelected:A,shouldUseTab:N,index:i}),role:"tabpanel","aria-labelledby":z},E.getCOtherProps(o),T(o,"root",i),T(o,"content",i));return u.createElement("div",Y,l.renderActiveOnly?h&&C(o,"children"):C(o,"children"))}});return u.createElement("div",e,a)},pt=function(){var e=r({"aria-hidden":"true"},f("previcon")),a=l.prevButton||u.createElement(Rt,e),o=D.getJSXIcon(a,Z({},e),{props:l}),i=r({ref:de,type:"button",className:m("prevbutton"),"aria-label":Be("previousPageLabel"),onClick:function(P){return ot()}},f("prevbutton"));return l.scrollable&&!te?u.createElement("button",i,o,u.createElement(Q,null)):null},ft=function(){var e=r({"aria-hidden":"true"},f("nexticon")),a=l.nextButton||u.createElement(Ht,e),o=D.getJSXIcon(a,Z({},e),{props:l}),i=r({ref:pe,type:"button",className:m("nextbutton"),"aria-label":Be("nextPageLabel"),onClick:function(P){return lt()}},f("nextbutton"));if(l.scrollable&&!ae)return u.createElement("button",i,o,u.createElement(Q,null))},vt=r({id:d,ref:ue,style:l.style,className:m("root")},V.getOtherProps(l),f("root")),bt=r({className:m("navcontainer")},f("navcontainer")),mt=ut(),ht=dt(),yt=pt(),gt=ft();return u.createElement("div",vt,u.createElement("div",bt,yt,mt,gt),ht)});We.displayName="TabView";const sn={title:"Panel/TabView",component:We,parameters:{layout:"centered"},argTypes:{activeIndex:{control:"number",description:"Active index of the TabView.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},panelContainerClassName:{control:"text",description:"Style class of the panels container of the tabview.",options:null},panelContainerStyle:{control:"object",description:"Inline style of the panels container of the tabview.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},renderActiveOnly:{control:"boolean",description:"Whether to render the contents of the selected tab or all tabs.",options:null},scrollable:{control:"boolean",description:"When enabled displays buttons at each side of the tab headers to scroll the tab list.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},W={args:{unstyled:!1,activeIndex:0}};var He,Ke,Ue;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    "unstyled": false,
    "activeIndex": 0
  }
}`,...(Ue=(Ke=W.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};const cn=["Default"];export{W as Default,cn as __namedExportsOrder,sn as default};
