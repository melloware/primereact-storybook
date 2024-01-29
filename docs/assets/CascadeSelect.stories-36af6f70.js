import{r as l}from"./index-76fb7be0.js";import{a as Pe,D as d,O as P,c as M,P as N,U as Je,Z as de,I as fe}from"./api.esm-4644ee78.js";import{C as Xe,u as Ze}from"./componentbase.esm-1c796d7e.js";import{C as Ye}from"./csstransition.esm-f87c8556.js";import{d as Ee,i as Qe,j as et,k as tt,a as Ce,b as Ge,c as nt,E as ot}from"./hooks.esm-d069ba29.js";import{C as rt}from"./index.esm-4f5bfc3f.js";import{S as at}from"./index.esm-91c9b7b7.js";import{O as it}from"./overlayservice.esm-582e1694.js";import{P as lt}from"./portal.esm-16954874.js";import{A as ct}from"./index.esm-7585bae1.js";import{R as st}from"./ripple.esm-1f3221bd.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-60e86362.js";function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ee.apply(this,arguments)}function $(e){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$(e)}function pt(e,n){if($(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if($(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function ut(e){var n=pt(e,"string");return $(n)==="symbol"?n:String(n)}function Re(e,n,t){return n=ut(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function dt(e){if(Array.isArray(e))return e}function ft(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,o,O,h,E=[],v=!0,m=!1;try{if(O=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;v=!1}else for(;!(v=(r=O.call(t)).done)&&(E.push(r.value),E.length!==n);v=!0);}catch(C){m=!0,o=C}finally{try{if(!v&&t.return!=null&&(h=t.return(),Object(h)!==h))return}finally{if(m)throw o}}return E}}function be(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function mt(e,n){if(e){if(typeof e=="string")return be(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return be(e,n)}}function vt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(e,n){return dt(e)||ft(e,n)||mt(e,n)||vt()}var bt={root:function(n){var t=n.props,r=n.focusedState,o=n.overlayVisibleState;return M("p-cascadeselect p-component p-inputwrapper",{"p-disabled":t.disabled,"p-focus":r,"p-inputwrapper-filled":t.value,"p-inputwrapper-focus":r||o},t.className)},label:function(n){var t=n.props,r=n.label;return M("p-cascadeselect-label ",{"p-placeholder":r===t.placeholder,"p-cascadeselect-label-empty":!t.value&&r==="p-emptylabel"})},list:function(n){var t=n.context;return M("p-cascadeselect-panel p-cascadeselect-items",{"p-input-filled":t&&t.inputStyle==="filled"||N.inputStyle==="filled","p-ripple-disabled":t&&t.ripple===!1||N.ripple===!1})},sublist:"p-cascadeselect-panel p-cascadeselect-items p-cascadeselect-sublist",item:function(n){n.option;var t=n.isGroup,r=n.isSelected;return M("p-cascadeselect-item",{"p-cascadeselect-item-group":t,"p-cascadeselect-item-active p-highlight":r})},dropdownIcon:"p-cascadeselect-trigger-icon",loadingIcon:"p-cascadeselect-trigger-icon",dropdownButton:"p-cascadeselect-trigger",loadingButton:"p-cascadeselect-trigger",wrapper:"p-cascadeselect-items-wrapper",panel:"p-cascadeselect-panel p-component",content:"p-cascadeselect-item-content",optionGroupIcon:"p-cascadeselect-group-icon",text:"p-cascadeselect-item-text",transition:"p-connected-overlay"},ht=`
@layer primereact {
    .p-cascadeselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
    }
    
    .p-cascadeselect-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .p-cascadeselect-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
    }
    
    .p-cascadeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }
    
    .p-cascadeselect .p-cascadeselect-panel {
        min-width: 100%;
    }
    
    .p-cascadeselect-panel {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-cascadeselect-item {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
    }
    
    .p-cascadeselect-item-content {
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-cascadeselect-group-icon {
        margin-left: auto;
    }
    
    .p-cascadeselect-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
        min-width: 100%;
    }
    
    .p-fluid .p-cascadeselect {
        display: flex;
    }
    
    .p-fluid .p-cascadeselect .p-cascadeselect-label {
        width: 1%;
    }
    
    .p-cascadeselect-sublist {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        display: none;
    }
    
    .p-cascadeselect-item-active {
        overflow: visible;
    }
    
    .p-cascadeselect-item-active > .p-cascadeselect-sublist {
        display: block;
        left: 100%;
        top: 0;
    }
}
`,Y=Xe.extend({defaultProps:{__TYPE:"CascadeSelect",appendTo:null,ariaLabelledBy:null,autoFocus:!1,breakpoint:void 0,className:null,dataKey:null,disabled:!1,loadingIcon:null,dropdownIcon:null,id:null,inputId:null,inputRef:null,itemTemplate:null,name:null,onBeforeHide:null,onBeforeShow:null,onChange:null,onGroupChange:null,onHide:null,onShow:null,optionGroupChildren:null,optionGroupIcon:null,optionGroupLabel:null,optionLabel:null,optionValue:null,options:null,placeholder:null,scrollHeight:"400px",style:null,tabIndex:null,transitionOptions:null,value:null,children:void 0},css:{classes:bt,styles:ht}});function he(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function ye(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?he(Object(t),!0).forEach(function(r){Re(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):he(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var je=l.memo(function(e){var n=Ee(),t=l.useState(null),r=U(t,2),o=r[0],O=r[1],h=l.useRef(null),E=l.useContext(Pe),v=e.ptm,m=e.cx,C=function(a,s){return v(a,{hostName:e.hostName,state:ye({},s)})},S=function(){var a=h.current.parentElement,s=d.getOffset(a),g=d.getViewport(),G=h.current.offsetParent?h.current.offsetWidth:d.getHiddenElementOuterWidth(element),R=d.getOuterWidth(a.children[0]);parseInt(s.left,10)+R+G>g.width-d.calculateScrollbarWidth()&&(h.current.style.left="-100%")},W=function(a){e.onOptionSelect&&e.onOptionSelect(a)},te=function(a,s){var g=a.currentTarget.parentElement;switch(a.key){case"Down":case"ArrowDown":var G=z(g);G&&G.children[0].focus();break;case"Up":case"ArrowUp":var R=L(g);R&&R.children[0].focus();break;case"Right":case"ArrowRight":f(s)&&(o===s?g.children[1].children[0].children[0].focus():O(s));break;case"Left":case"ArrowLeft":O(null);var j=a.currentTarget.parentElement.parentElement.previousElementSibling;j&&j.focus();break;case"Enter":q(a,s);break;case"Tab":case"Escape":e.onPanelHide&&(e.onPanelHide(),a.preventDefault());break}a.preventDefault()},z=function u(a){var s=a.nextElementSibling;return s?d.hasClass(s,"p-disabled")||!d.hasClass(s,"p-cascadeselect-item")?u(s):s:null},L=function u(a){var s=a.previousElementSibling;return s?d.hasClass(s,"p-disabled")||!d.hasClass(s,"p-cascadeselect-item")?u(s):s:null},q=function(a,s){f(s)?(O(function(g){return g===s?null:s}),e.onOptionGroupSelect&&e.onOptionGroupSelect({originalEvent:a,value:s})):e.onOptionSelect&&e.onOptionSelect({originalEvent:a,value:w(s)})},_=function(a){e.onOptionGroupSelect&&e.onOptionGroupSelect(a)},y=function(a){return e.optionLabel?P.resolveFieldData(a,e.optionLabel):a},w=function(a){return e.optionValue?P.resolveFieldData(a,e.optionValue):a},ne=function(a){return e.optionGroupLabel?P.resolveFieldData(a,e.optionGroupLabel):null},T=function(a){return P.resolveFieldData(a,e.optionGroupChildren[e.level])},f=function(a){return Object.prototype.hasOwnProperty.call(a,e.optionGroupChildren[e.level])},x=function(a){return f(a)?ne(a):y(a)};Ce(function(){if(e.selectionPath&&e.options&&!e.dirty){var u=e.options.find(function(a){return e.selectionPath.includes(a)});u&&O(u)}e.root||S()}),Ge(function(){e.parentActive||O(null)},[e.parentActive]);var H=function(a){if(f(a)&&o===a){var s=T(a),g=o===a,G=e.level+1;return l.createElement(je,{hostName:e.hostName,options:s,className:m("sublist"),selectionPath:e.selectionPath,optionLabel:e.optionLabel,optionValue:e.optionValue,level:G,onOptionSelect:W,onOptionGroupSelect:_,parentActive:g,optionGroupLabel:e.optionGroupLabel,optionGroupChildren:e.optionGroupChildren,dirty:e.dirty,template:e.template,onPanelHide:e.onPanelHide,ptm:v,cx:m})}return null},k=function(a,s){var g=H(a),G=n({className:m("text")},C("text")),R=e.template?P.getJSXElement(e.template,w(a)):l.createElement("span",G,x(a)),j=n({className:m("optionGroupIcon")},C("optionGroupIcon")),re=e.optionGroupIcon||l.createElement(ct,j),ae=f(a)&&fe.getJSXIcon(re,ye({},j),{props:e}),ie=x(a)+"_"+s,Z=n({className:m("content"),onClick:function(K){return q(K,a)},tabIndex:0,onKeyDown:function(K){return te(K,a)}},C("content")),V=o===a,B=f(a),le=n({className:M(a.className,m("item",{option:a,isGroup:B,isSelected:V})),style:a.style,role:"none","data-p-item-group":B,"data-p-highlight":V},C("item",{selected:V,group:B}));return l.createElement("li",ee({key:ie},le),l.createElement("div",Z,R,ae,l.createElement(st,null)),g)},J=function(){return e.options?e.options.map(k):null},X=J(),oe=n({ref:h,className:m(e.level===0?"list":"sublist",{context:E}),role:"listbox","aria-orientation":"horizontal"},e.level===0?C("list"):C("sublist"));return l.createElement("ul",oe,X)});function ge(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=yt(e))||n&&e&&typeof e.length=="number"){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(m){throw m},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O=!0,h=!1,E;return{s:function(){t=t.call(e)},n:function(){var m=t.next();return O=m.done,m},e:function(m){h=!0,E=m},f:function(){try{!O&&t.return!=null&&t.return()}finally{if(h)throw E}}}}function yt(e,n){if(e){if(typeof e=="string")return Oe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Oe(e,n)}}function Oe(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Se(Object(t),!0).forEach(function(r){Re(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Se(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var De=l.memo(l.forwardRef(function(e,n){var t=Ee(),r=l.useContext(Pe),o=Y.getProps(e,r),O=l.useState(!1),h=U(O,2),E=h[0],v=h[1],m=l.useState(!1),C=U(m,2),S=C[0],W=C[1],te=l.useState(null),z=U(te,2),L=z[0],q=z[1],_=Y.setMetaData({props:o,state:{focused:E,overlayVisible:S,attributeSelector:L},context:F({},r)}),y=_.ptm,w=_.cx,ne=_.isUnstyled;Ze(Y.css.styles,ne,{name:"cascadeselect"});var T=l.useRef(null),f=l.useRef(null),x=l.useRef(null),H=l.useRef(null),k=l.useRef(null),J=l.useRef(!1),X=l.useRef(null),oe=Qe({target:T,overlay:f,listener:function(i,p){var b=p.valid;b&&A()},when:S}),u=U(oe,2),a=u[0],s=u[1],g=et("cascade-select",S);tt({callback:function(){A()},when:S&&g,priority:[ot.CASCADE_SELECT,g]});var G=function(i){o.onChange&&o.onChange({originalEvent:i,value:i.value}),Z(),A(),d.focus(x.current)},R=function(i){J.current=!0,o.onGroupChange&&o.onGroupChange(i)},j=function(i){var p=o.optionLabel?P.resolveFieldData(i,o.optionLabel):i;return p||i},re=function(i){return o.optionValue?P.resolveFieldData(i,o.optionValue):i},ae=function(i,p){return P.resolveFieldData(i,o.optionGroupChildren[p])},ie=function(i,p){return Object.prototype.hasOwnProperty.call(i,o.optionGroupChildren[p])},Z=function(){var i;if(o.value!=null&&o.options){var p=ge(o.options),b;try{for(p.s();!(b=p.n()).done;){var I=b.value;if(i=V(I,0),i)break}}catch(D){p.e(D)}finally{p.f()}}X.current=i},V=function c(i,p){if(ie(i,p)){var b,I=ge(ae(i,p)),D;try{for(I.s();!(D=I.n()).done;){var ve=D.value;if(b=c(ve,p+1),b)return b.unshift(i),b}}catch(ue){I.e(ue)}finally{I.f()}}else if(P.equals(o.value,re(i),o.dataKey))return[i];return null},B=function(i){o.disabled||o.loading||(!f.current||!f.current.contains(i.target))&&(d.focus(x.current),S?A():se())},le=function(){v(!0)},ce=function(){v(!1)},K=function(i){switch(i.which){case 40:S?d.findSingle(f.current,'[data-pc-section="item"]').children[0].focus():i.altKey&&o.options&&o.options.length&&se(),i.preventDefault();break;case 32:S?A():se(),i.preventDefault();break;case 9:A();break}},Le=function(i){it.emit("overlay-click",{originalEvent:i,target:T.current})},se=function(){o.onBeforeShow&&o.onBeforeShow(),W(!0)},A=function(){o.onBeforeHide&&o.onBeforeHide(),W(!1),d.focus(x.current)},ke=function(){de.set("overlay",f.current,r&&r.autoZIndex||N.autoZIndex,r&&r.zIndex.overlay||N.zIndex.overlay),d.addStyles(f.current,{position:"absolute",top:"0",left:"0"}),me(),L&&o.breakpoint&&(f.current.setAttribute(L+"_panel",""),_e())},Ae=function(){a(),o.onShow&&o.onShow()},Te=function(){s(),J.current=!1},Ne=function(){de.clear(f.current),o.onHide&&o.onHide(),He()},me=function(){d.alignOverlay(f.current,H.current.parentElement,o.appendTo||r&&r.appendTo||N.appendTo)},_e=function(){if(!k.current){k.current=d.createInlineStyle(r&&r.nonce||N.nonce,r&&r.styleContainer);var i="".concat(L,"_panel"),p=`
@media screen and (max-width: `.concat(o.breakpoint,`) {
    .p-cascadeselect-panel[`).concat(i,`] .p-cascadeselect-items-wrapper > ul {
        max-height: `).concat(o.scrollHeight,`;
        overflow: `).concat(o.scrollHeight?"auto":"",`;
    }

    .p-cascadeselect-panel[`).concat(i,`] .p-cascadeselect-sublist {
        position: relative;
    }

    .p-cascadeselect-panel[`).concat(i,`] .p-cascadeselect-item-active > .p-cascadeselect-sublist {
        left: 0;
        box-shadow: none;
        border-radius: 0;
        padding: 0 0 0 calc(var(--inline-spacing) * 2); /* @todo */
    }

    .p-cascadeselect-panel[`).concat(i,`] .p-cascadeselect-group-icon:before {
        content: "\\e930";
    }
}
`);k.current.innerHTML=p}},He=function(){k.current=d.removeInlineStyle(k.current)};l.useImperativeHandle(n,function(){return{props:o,getElement:function(){return T.current},getOverlay:function(){return f.current},getInput:function(){return x.current},getLabel:function(){return H.current},focus:function(){return d.focus(x.current)}}}),Ce(function(){o.breakpoint&&!L&&q(Je()),o.autoFocus&&d.focus(x.current,o.autoFocus),me()}),l.useEffect(function(){P.combinedRefs(x,o.inputRef)},[x,o.inputRef]),Ge(function(){Z()},[o.value]),nt(function(){de.clear(f.current)});var Ve=function(){var i=o.value?j(o.value):void 0,p=t({className:"p-hidden-accessible"},y("hiddenSelectedMessage")),b=t(F({ref:x,type:"text",id:o.inputId,name:o.name,defaultValue:i,readOnly:!0,disabled:o.disabled,onFocus:le,onBlur:ce,onKeyDown:function(D){return K(D)},tabIndex:o.tabIndex,"aria-haspopup":"listbox"},ze),y("input"));return l.createElement("div",p,l.createElement("input",b))},Be=function(){var i=o.value?j(o.value):o.placeholder||"p-emptylabel",p=t({ref:H,className:w("label",{label:i})},y("label",{context:F({label:i},r)}));return l.createElement("span",p,i)},Ke=function(){var i=t({className:w("loadingIcon")},y("loadingIcon")),p=o.loadingIcon||l.createElement(at,{spin:!0}),b=fe.getJSXIcon(p,F({},i),{props:o}),I=t({className:w("loadingButton"),role:"button","aria-haspopup":"listbox","aria-expanded":S},y("dropdownButton"));return l.createElement("div",I,b)},Fe=function(){var i=t({className:w("dropdownIcon")},y("dropdownIcon")),p=o.dropdownIcon||l.createElement(rt,i),b=fe.getJSXIcon(p,F({},i),{props:o}),I=t({className:w("dropdownButton"),role:"button","aria-haspopup":"listbox","aria-expanded":S},y("dropdownButton"));return l.createElement("div",I,b)},Me=t({className:w("wrapper")},y("wrapper")),Ue=t({ref:f,className:w("panel"),onClick:function(i){return Le(i)}},y("panel")),$e=function(){var i=t({classNames:w("transition"),in:S,timeout:{enter:120,exit:100},options:o.transitionOptions,unmountOnExit:!0,onEnter:ke,onEntered:Ae,onExit:Te,onExited:Ne},y("transition")),p=l.createElement(Ye,ee({nodeRef:f},i),l.createElement("div",Ue,l.createElement("div",Me,l.createElement(je,{hostName:"CascadeSelect",options:o.options,selectionPath:X.current,optionGroupIcon:o.optionGroupIcon,optionLabel:o.optionLabel,optionValue:o.optionValue,parentActive:o.value!=null,level:0,optionGroupLabel:o.optionGroupLabel,optionGroupChildren:o.optionGroupChildren,onOptionSelect:G,onOptionGroupSelect:R,root:!0,template:o.itemTemplate,onPanelHide:A,ptm:y,cx:w}))));return l.createElement(lt,{element:p,appendTo:o.appendTo})},We=function(){var i=Ve(),p=Be(),b=o.loading?Ke():Fe(),I=$e(),D=t({id:o.id,ref:T,className:w("root",{focusedState:E,overlayVisibleState:S}),style:o.style,onClick:function(ue){return B(ue)}},pe,y("root"));return l.createElement("div",D,i,p,b,I)},pe=Y.getOtherProps(o);P.reduceKeys(pe,d.DATA_PROPS);var ze=P.reduceKeys(pe,d.ARIA_PROPS),qe=We();return qe}));De.displayName="CascadeSelect";const At={title:"Form/CascadeSelect",component:De,parameters:{layout:"centered"},argTypes:{appendTo:{control:"select",description:'DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and "self". The "self" value is used to render a component where it is located.',options:["null","HTMLElement","self"]},ariaLabelledBy:{control:"text",description:"Establishes relationships between the component and label(s) where its value should be one or more element IDs.",options:null},autoFocus:{control:"boolean",description:"When present, it specifies that the component should automatically get focus on load.",options:null},breakpoint:{control:"text",description:"The breakpoint to define the maximum width boundary when responsiveness is enabled.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},className:{control:"text",description:"Style class of the component.",options:null},dataKey:{control:"text",description:"A property to uniquely identify an option.",options:null},disabled:{control:"boolean",description:"When present, it specifies that the component should be disabled.",options:null},dropdownIcon:{control:"select",description:"Icon of the dropdown icon.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},id:{control:"text",description:"Unique identifier of the element.",options:null},inputId:{control:"text",description:"Identifier of the underlying input element.",options:null},inputRef:{control:"object",description:"Reference of the input element.",options:null},itemTemplate:{control:"text",description:"The template of items.",options:null},name:{control:"text",description:"Name of the input element.",options:null},optionGroupChildren:{control:"object",description:"Property name or getter function to retrieve the items of a group.",options:null},optionGroupIcon:{control:"select",description:"Icon of the option group.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},optionGroupLabel:{control:"text",description:"Property name or getter function to use as the label of an option group.",options:null},optionLabel:{control:"text",description:"Property name or getter function to use as the label of an option.",options:null},options:{control:"object",description:"An array of selectitems to display as the available options.",options:null},optionValue:{control:"text",description:"Property name or getter function to use as the value of an option, defaults to the option itself when not defined.",options:null},placeholder:{control:"text",description:"Default text to display when no option is selected.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},scrollHeight:{control:"text",description:"Maximum height of the options panel on responsive mode.",options:null},style:{control:"object",description:"Inline style of the component.",options:null},tabIndex:{control:"number",description:"Index of the element in tabbing order.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"object",description:"Value of the component.",options:null}}},Q={args:{placeholder:"CascadeSelect",unstyled:!1,options:[{label:"PrimeReact Rocks!",value:"1"},{label:"StoryBook Rocks!",value:"2"}],optionLabel:"label",optionValue:"value"}};var we,Ie,xe;Q.parameters={...Q.parameters,docs:{...(we=Q.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    "placeholder": "CascadeSelect",
    "unstyled": false,
    "options": [{
      "label": "PrimeReact Rocks!",
      "value": "1"
    }, {
      "label": "StoryBook Rocks!",
      "value": "2"
    }],
    "optionLabel": "label",
    "optionValue": "value"
  }
}`,...(xe=(Ie=Q.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};const Tt=["Default"];export{Q as Default,Tt as __namedExportsOrder,At as default};
