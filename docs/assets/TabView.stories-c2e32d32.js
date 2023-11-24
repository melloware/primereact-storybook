import{r as i}from"./index-76fb7be0.js";import{O,P as ht,m as d,c as H,D as T,U as yt,I as j,a as Ie}from"./api.esm-2e2d159c.js";import{C as Be,u as gt}from"./componentbase.esm-b0caea1e.js";import{d as wt,e as xe}from"./hooks.esm-c93f10ee.js";import{C as St}from"./index.esm-41905940.js";import{C as Ct}from"./index.esm-b3ea3917.js";import{T as Pt}from"./index.esm-1e412bae.js";import{R as Y}from"./ripple.esm-cba91116.js";import"./_commonjsHelpers-de833af9.js";import"./iconbase.esm-439d6f79.js";function G(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function Tt(t){if(Array.isArray(t))return G(t)}function It(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function je(t,e){if(t){if(typeof t=="string")return G(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return G(t,e)}}function xt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ot(t){return Tt(t)||It(t)||je(t)||xt()}function R(t){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(t)}function Et(t,e){if(R(t)!=="object"||t===null)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,e||"default");if(R(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Nt(t){var e=Et(t,"string");return R(e)==="symbol"?e:String(e)}function De(t,e,a){return e=Nt(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function kt(t){if(Array.isArray(t))return t}function _t(t,e){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n,u,v,p,h=[],w=!0,N=!1;try{if(v=(a=a.call(t)).next,e===0){if(Object(a)!==a)return;w=!1}else for(;!(w=(n=v.call(a)).done)&&(h.push(n.value),h.length!==e);w=!0);}catch(A){N=!0,u=A}finally{try{if(!w&&a.return!=null&&(p=a.return(),Object(p)!==p))return}finally{if(N)throw u}}return h}}function Bt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(t,e){return kt(t)||_t(t,e)||je(t,e)||Bt()}function Oe(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),a.push.apply(a,n)}return a}function $(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Oe(Object(a),!0).forEach(function(n){De(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Oe(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}var jt={navcontent:"p-tabview-nav-content",nav:"p-tabview-nav",inkbar:"p-tabview-ink-bar",panelcontainer:function(e){var a=e.props;return H("p-tabview-panels",a.panelContainerClassName)},prevbutton:"p-tabview-nav-prev p-tabview-nav-btn p-link",nextbutton:"p-tabview-nav-next p-tabview-nav-btn p-link",root:function(e){var a=e.props;return H("p-tabview p-component",{"p-tabview-scrollable":a.scrollable},a.className)},navcontainer:"p-tabview-nav-container",tab:{header:function(e){var a=e.selected,n=e.disabled,u=e.headerClassName,v=e._className;return H("p-unselectable-text",{"p-tabview-selected p-highlight":a,"p-disabled":n},u,v)},headertitle:"p-tabview-title",headeraction:"p-tabview-nav-link",content:function(e){var a=e.props,n=e.selected,u=e.getTabProp,v=e.tab,p=e.isSelected,h=e.shouldUseTab,w=e.index;return h(v,w)&&(!a.renderActiveOnly||p(w))?H(u(v,"contentClassName"),u(v,"className"),"p-tabview-panel",{"p-hidden":!n}):void 0}}},Dt=`
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
`,Rt={tab:{header:function(e){var a=e.headerStyle,n=e._style;return $($({},a||{}),n||{})},content:function(e){var a=e.props,n=e.getTabProp,u=e.tab,v=e.isSelected,p=e.shouldUseTab,h=e.index;return p(u,h)&&(!a.renderActiveOnly||v(h))?$($({},n(u,"contentStyle")||{}),n(u,"style")||{}):void 0}}},V=Be.extend({defaultProps:{__TYPE:"TabView",id:null,activeIndex:0,className:null,onBeforeTabChange:null,onBeforeTabClose:null,onTabChange:null,onTabClose:null,panelContainerClassName:null,panelContainerStyle:null,renderActiveOnly:!0,scrollable:!1,style:null,children:void 0},css:{classes:jt,styles:Dt,inlineStyles:Rt}}),E=Be.extend({defaultProps:{__TYPE:"TabPanel",className:null,closable:!1,contentClassName:null,contentStyle:null,disabled:!1,header:null,headerClassName:null,headerStyle:null,headerTemplate:null,leftIcon:null,rightIcon:null,prevButton:null,nextButton:null,closeIcon:null,style:null,children:void 0},getCProp:function(e,a){return O.getComponentProp(e,a,E.defaultProps)},getCProps:function(e){return O.getComponentProps(e,E.defaultProps)},getCOtherProps:function(e){return O.getComponentDiffProps(e,E.defaultProps)}});function Ee(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),a.push.apply(a,n)}return a}function q(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Ee(Object(a),!0).forEach(function(n){De(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ee(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}var Re=i.forwardRef(function(t,e){var a=i.useContext(ht),n=V.getProps(t,a),u=i.useState(n.id),v=D(u,2),p=v[0],h=v[1],w=i.useState(!0),N=D(w,2),A=N[0],Q=N[1],Ae=i.useState(!1),Z=D(Ae,2),ee=Z[0],te=Z[1],Ue=i.useState([]),ne=D(Ue,2),C=ne[0],re=ne[1],He=i.useState(n.activeIndex),ae=D(He,2),L=ae[0],oe=ae[1],le=i.useRef(null),y=i.useRef(null),ie=i.useRef(null),K=i.useRef(null),se=i.useRef(null),ce=i.useRef(null),J=i.useRef({}),X=n.onTabChange?n.activeIndex:L,ue={props:n,state:{id:p,isPrevButtonDisabled:A,isNextButtonDisabled:ee,hiddenTabsState:C,activeIndex:L}},k=V.setMetaData(q({},ue)),g=k.ptm,$e=k.ptmo,m=k.cx,pe=k.sx,Ve=k.isUnstyled;gt(V.css.styles,Ve,{name:"tabview"});var I=function(r,o){return $e(S(r,"pt"),o,{props:r.props,parent:ue})},_=function(r){return r===X},S=function(r,o){return E.getCProp(r,o)},B=function(r){return r&&O.isValidChild(r,"TabPanel")&&C.every(function(o){return o!==r.key})},We=function(r){var o=i.Children.map(n.children,function(l,s){if(B(l))return{tab:l,index:s}});return o.find(function(l){var s=l.tab,b=l.index;return!S(s,"disabled")&&b>=r})||o.reverse().find(function(l){var s=l.tab,b=l.index;return!S(s,"disabled")&&r>b})},de=function(r,o){r.preventDefault();var l=n.onBeforeTabClose,s=n.onTabClose,b=n.children,P=b[o].key;l&&l({originalEvent:r,index:o})===!1||(re([].concat(Ot(C),[P])),s&&s({originalEvent:r,index:o}))},U=function(r,o,l){if(r&&r.preventDefault(),!S(o,"disabled")){if(n.onBeforeTabChange&&n.onBeforeTabChange({originalEvent:r,index:l})===!1)return;n.onTabChange?n.onTabChange({originalEvent:r,index:l}):oe(l)}be(l)},ve=function(r,o,l){r.key==="Enter"&&U(r,o,l)},Le=function(){var r=J.current["tab_".concat(X)];K.current.style.width=T.getWidth(r)+"px",K.current.style.left=T.getOffset(r).left-T.getOffset(ie.current).left+"px"},be=function(r){var o=J.current["tab_".concat(r)];o&&o.scrollIntoView&&o.scrollIntoView({block:"nearest"})},Ke=function(){var r=y.current,o=r.scrollLeft,l=r.scrollWidth,s=T.getWidth(y.current);Q(o===0),te(o===l-s)},Je=function(r){n.scrollable&&Ke(),r.preventDefault()},fe=function(){return[se.current,ce.current].reduce(function(r,o){return o?r+T.getWidth(o):r},0)},Xe=function(){var r=T.getWidth(y.current)-fe(),o=y.current.scrollLeft-r;y.current.scrollLeft=o<=0?0:o},Me=function(){var r=T.getWidth(y.current)-fe(),o=y.current.scrollLeft+r,l=y.current.scrollWidth-r;y.current.scrollLeft=o>=l?l:o},ze=function(){Q(!0),te(!1),re([]),n.onTabChange?n.onTabChange({index:X}):oe(n.activeIndex)};i.useEffect(function(){Le()}),wt(function(){p||h(yt())}),xe(function(){if(O.isNotEmpty(C)){var c=We(C[C.length-1]);c&&U(null,c.tab,c.index)}},[C]),xe(function(){n.activeIndex!==L&&be(n.activeIndex)},[n.activeIndex]),i.useImperativeHandle(e,function(){return{props:n,reset:ze,getElement:function(){return le.current}}});var Fe=function(r,o){var l=_(o),s=E.getCProps(r),b=s.headerStyle,P=s.headerClassName,M=s.style,z=s.className,me=s.disabled,he=s.leftIcon,ye=s.rightIcon,lt=s.header,ge=s.headerTemplate,it=s.closable,st=s.closeIcon,ct=p+"_header_"+o,we=p+"_content_"+o,ut=me?null:0,Se=he&&j.getJSXIcon(he,void 0,{props:n}),pt=d({className:m("tab.headertitle")},I(r,"headertitle")),Ce=i.createElement("span",pt,lt),Pe=ye&&j.getJSXIcon(ye,void 0,{props:n}),Te="p-tabview-close",dt=st||i.createElement(Pt,{className:Te,onClick:function(f){return de(f,o)}}),vt=it?j.getJSXIcon(dt,{className:Te,onClick:function(f){return de(f,o)}},{props:n}):null,bt=d({id:ct,role:"tab",className:m("tab.headeraction"),tabIndex:ut,"aria-controls":we,"aria-selected":l,onClick:function(f){return U(f,r,o)},onKeyDown:function(f){return ve(f,r,o)}},I(r,"headeraction")),F=i.createElement("a",bt,Se,Ce,Pe,vt,i.createElement(Y,null));if(ge){var ft={className:"p-tabview-nav-link",titleClassName:"p-tabview-title",onClick:function(f){return U(f,r,o)},onKeyDown:function(f){return ve(f,r,o)},leftIconElement:Se,titleElement:Ce,rightIconElement:Pe,element:F,props:n,index:o,selected:l,ariaControls:we};F=O.getJSXElement(ge,ft)}var mt=d({ref:function(f){return J.current["tab_".concat(o)]=f},className:m("tab.header",{selected:l,disabled:me,headerClassName:P,_className:z}),style:pe("tab.header",{headerStyle:b,_style:M}),role:"presentation"},I(r,"root"),I(r,"header"));return i.createElement("li",mt,F)},Ye=function(){return i.Children.map(n.children,function(r,o){if(B(r))return Fe(r,o)})},qe=function(){var r=Ye(),o=d({id:p,ref:y,className:m("navcontent"),style:n.style,onScroll:Je},g("navcontent")),l=d({ref:ie,className:m("nav"),role:"tablist"},g("nav")),s=d({ref:K,className:m("inkbar")},g("inkbar"));return i.createElement("div",o,i.createElement("ul",l,r,i.createElement("li",s)))},Ge=function(){var r=d({className:m("panelcontainer"),style:n.panelContainerStyle},g("panelcontainer")),o=i.Children.map(n.children,function(l,s){if(B(l)&&(!n.renderActiveOnly||_(s))){var b=_(s),P=p+"_content_"+s,M=p+"_header_"+s,z=d({id:P,className:m("tab.content",{props:n,selected:b,getTabProp:S,tab:l,isSelected:_,shouldUseTab:B,index:s}),style:pe("tab.content",{props:n,getTabProp:S,tab:l,isSelected:_,shouldUseTab:B,index:s}),role:"tabpanel","aria-labelledby":M,"aria-hidden":!b},E.getCOtherProps(l),I(l,"root"),I(l,"content"));return i.createElement("div",z,n.renderActiveOnly?b&&S(l,"children"):S(l,"children"))}});return i.createElement("div",r,o)},Qe=function(){var r=d(g("previcon")),o=n.prevButton||i.createElement(St,r),l=j.getJSXIcon(o,q({},r),{props:n}),s=d({ref:se,type:"button",className:m("prevbutton"),"aria-label":Ie("previousPageLabel"),onClick:function(P){return Xe()}},g("prevbutton"));return n.scrollable&&!A?i.createElement("button",s,l,i.createElement(Y,null)):null},Ze=function(){var r=d({"aria-hidden":"true"},g("nexticon")),o=n.nextButton||i.createElement(Ct,r),l=j.getJSXIcon(o,q({},r),{props:n}),s=d({ref:ce,type:"button",className:m("nextbutton"),"aria-label":Ie("nextPageLabel"),onClick:function(P){return Me()}},g("nextbutton"));if(n.scrollable&&!ee)return i.createElement("button",s,l,i.createElement(Y,null))},et=d({id:p,ref:le,style:n.style,className:m("root")},V.getOtherProps(n),g("root")),tt=d({className:m("navcontainer")},g("navcontainer")),nt=qe(),rt=Ge(),at=Qe(),ot=Ze();return i.createElement("div",et,i.createElement("div",tt,at,nt,ot),rt)});Re.displayName="TabView";const Mt={title:"Panel/TabView",component:Re,parameters:{layout:"centered"},argTypes:{activeIndex:{control:"number",description:"Active index of the TabView.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},panelContainerClassName:{control:"text",description:"Style class of the panels container of the tabview.",options:null},panelContainerStyle:{control:"object",description:"Inline style of the panels container of the tabview.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},renderActiveOnly:{control:"boolean",description:"Whether to render the contents of the selected tab or all tabs.",options:null},scrollable:{control:"boolean",description:"When enabled displays buttons at each side of the tab headers to scroll the tab list.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},W={args:{unstyled:!1,activeIndex:0}};var Ne,ke,_e;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    "unstyled": false,
    "activeIndex": 0
  }
}`,...(_e=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:_e.source}}};const zt=["Default"];export{W as Default,zt as __namedExportsOrder,Mt as default};
//# sourceMappingURL=TabView.stories-c2e32d32.js.map
