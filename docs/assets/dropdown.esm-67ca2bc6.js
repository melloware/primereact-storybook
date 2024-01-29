import{r as i}from"./index-76fb7be0.js";import{P as Ae,O as g,a as Y,D as R,m as v,c as T,F as ke,Z as ye,I as pe,l as Ge}from"./api.esm-e57be548.js";import{C as xt,u as Dt}from"./componentbase.esm-f35515f0.js";import{h as Lt,a as Rt,b as be,c as Tt}from"./hooks.esm-2e882e60.js";import{C as Nt}from"./index.esm-7d9aec4e.js";import{T as He}from"./index.esm-8d6e6251.js";import{O as kt}from"./overlayservice.esm-f3934ea7.js";import{T as Gt}from"./tooltip.esm-969ffd2f.js";import{C as Mt}from"./csstransition.esm-2b0eb2be.js";import{S as Kt}from"./index.esm-57909d8b.js";import{P as jt}from"./portal.esm-d730a851.js";import{V as Vt}from"./virtualscroller.esm-2354ac79.js";import{R as At}from"./ripple.esm-42b8b102.js";function q(){return q=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},q.apply(this,arguments)}function Q(t){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Q(t)}function Ht(t,a){if(Q(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(Q(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function _t(t){var a=Ht(t,"string");return Q(a)==="symbol"?a:String(a)}function we(t,a,r){return a=_t(a),a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function Bt(t){if(Array.isArray(t))return t}function Ut(t,a){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var e,y,D,h,F=[],w=!0,p=!1;try{if(D=(r=r.call(t)).next,a===0){if(Object(r)!==r)return;w=!1}else for(;!(w=(e=D.call(r)).done)&&(F.push(e.value),F.length!==a);w=!0);}catch(K){p=!0,y=K}finally{try{if(!w&&r.return!=null&&(h=r.return(),Object(h)!==h))return}finally{if(p)throw y}}return F}}function Me(t,a){(a==null||a>t.length)&&(a=t.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=t[r];return e}function $t(t,a){if(t){if(typeof t=="string")return Me(t,a);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Me(t,a)}}function Jt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ce(t,a){return Bt(t)||Ut(t,a)||$t(t,a)||Jt()}var Xt={root:function(a){var r=a.props,e=a.focusedState,y=a.overlayVisibleState;return T("p-dropdown p-component p-inputwrapper",{"p-disabled":r.disabled,"p-focus":e,"p-dropdown-clearable":r.showClear&&!r.disabled,"p-inputwrapper-filled":g.isNotEmpty(r.value),"p-inputwrapper-focus":e||y})},input:function(a){var r=a.props,e=a.label;return r.editable?"p-dropdown-label p-inputtext":T("p-dropdown-label p-inputtext",{"p-placeholder":e===null&&r.placeholder,"p-dropdown-label-empty":e===null&&!r.placeholder})},trigger:"p-dropdown-trigger",emptyMessage:"p-dropdown-empty-message",itemGroup:function(a){var r=a.optionGroupLabel;return T("p-dropdown-item-group",{"p-dropdown-item-empty":!r||r.length===0})},dropdownIcon:"p-dropdown-trigger-icon p-clickable",clearIcon:"p-dropdown-clear-icon p-clickable",filterIcon:"p-dropdown-filter-icon",filterContainer:function(a){var r=a.clearIcon;return T("p-dropdown-filter-container",{"p-dropdown-clearable-filter":!!r})},filterInput:"p-dropdown-filter p-inputtext p-component",list:function(a){var r=a.virtualScrollerOptions;return"p-dropdown-items"},panel:function(a){var r=a.context;return T("p-dropdown-panel p-component",{"p-input-filled":r&&r.inputStyle==="filled"||Y.inputStyle==="filled","p-ripple-disabled":r&&r.ripple===!1||Y.ripple===!1})},item:function(a){var r=a.selected,e=a.disabled,y=a.label;return T("p-dropdown-item",{"p-highlight":r,"p-disabled":e,"p-dropdown-item-empty":!y||y.length===0})},wrapper:"p-dropdown-items-wrapper",header:"p-dropdown-header",footer:"p-dropdown-footer",transition:"p-connected-overlay"},zt=`
@layer primereact {
    .p-dropdown {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
    }
    
    .p-dropdown-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .p-dropdown-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
    }
    
    .p-dropdown-label-empty {
        overflow: hidden;
        visibility: hidden;
    }
    
    input.p-dropdown-label  {
        cursor: default;
    }
    
    .p-dropdown .p-dropdown-panel {
        min-width: 100%;
    }
    
    .p-dropdown-panel {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-dropdown-items-wrapper {
        overflow: auto;
    }
    
    .p-dropdown-item {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }
    
    .p-dropdown-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    
    .p-dropdown-filter {
        width: 100%;
    }
    
    .p-dropdown-filter-container {
        position: relative;
    }
    
    .p-dropdown-clear-icon,
    .p-dropdown-filter-icon,
    .p-dropdown-filter-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }
    
    .p-fluid .p-dropdown {
        display: flex;
    }
    
    .p-fluid .p-dropdown .p-dropdown-label {
        width: 1%;
    }
}
`,qt={wrapper:function(a){var r=a.props;return{maxHeight:r.scrollHeight||"auto"}},panel:function(a){var r=a.props;r.panelStyle}},se=xt.extend({defaultProps:{__TYPE:"Dropdown",__parentMetadata:null,appendTo:null,ariaLabel:null,ariaLabelledBy:null,autoFocus:!1,children:void 0,className:null,clearIcon:null,dataKey:null,disabled:!1,dropdownIcon:null,editable:!1,emptyFilterMessage:null,emptyMessage:null,filter:!1,filterBy:null,filterClearIcon:null,filterIcon:null,filterInputAutoFocus:!0,filterLocale:void 0,filterMatchMode:"contains",filterPlaceholder:null,filterTemplate:null,focusInputRef:null,id:null,inputId:null,inputRef:null,itemTemplate:null,maxLength:null,name:null,onBlur:null,onChange:null,onContextMenu:null,onFilter:null,onFocus:null,onHide:null,onMouseDown:null,onShow:null,optionDisabled:null,optionGroupChildren:"items",optionGroupLabel:null,optionGroupTemplate:null,optionLabel:null,optionValue:null,options:null,panelClassName:null,panelFooterTemplate:null,panelStyle:null,placeholder:null,required:!1,resetFilterOnHide:!1,scrollHeight:"200px",showClear:!1,showFilterClear:!1,showOnFocus:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,transitionOptions:null,value:null,valueTemplate:null,virtualScrollerOptions:null},css:{classes:Xt,styles:zt,inlineStyles:qt}}),he=i.memo(function(t){var a=t.ptm,r=t.cx,e=t.selected,y=t.disabled,D=t.option,h=t.label,F=function(N){return a(N,{context:{selected:e,disabled:y}})},w=function(N){t.onClick&&t.onClick({originalEvent:N,option:D})},p=t.template?g.getJSXElement(t.template,t.option):t.label,K=v({role:"option",key:t.label,className:T(D.className,r("item",{selected:e,disabled:y,label:h})),style:t.style,onClick:function(N){return w(N)},"aria-label":h,"aria-selected":e,"data-p-highlight":e,"data-p-disabled":y},F("item"));return i.createElement("li",K,p,i.createElement(At,null))});he.displayName="DropdownItem";function Ke(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(y){return Object.getOwnPropertyDescriptor(t,y).enumerable})),r.push.apply(r,e)}return r}function k(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Ke(Object(r),!0).forEach(function(e){we(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ke(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var _e=i.memo(i.forwardRef(function(t,a){var r=t.ptm,e=t.cx,y=t.sx,D=i.useContext(Ae);i.useRef(null);var h=i.useRef(null),F=!(t.visibleOptions&&t.visibleOptions.length)&&t.hasFilter,w={filter:function(c){return N(c)},reset:function(){return t.resetFilter()}},p=function(c,m){return r(c,k({hostName:t.hostName},m))},K=function(){t.onEnter(function(){if(t.virtualScrollerRef.current){var c=t.getSelectedOptionIndex();c!==-1&&setTimeout(function(){return t.virtualScrollerRef.current.scrollToIndex(c)},0)}})},B=function(){t.onEntered(function(){t.filter&&t.filterInputAutoFocus&&R.focus(h.current,!1)})},N=function(c){t.virtualScrollerRef.current&&t.virtualScrollerRef.current.scrollToIndex(0),t.onFilterInputChange&&t.onFilterInputChange(c)},le=function(){if(t.panelFooterTemplate){var c=g.getJSXElement(t.panelFooterTemplate,t,t.onOverlayHide),m=v({className:e("footer")},p("footer"));return i.createElement("div",m,c)}return null},S=function(c,m){var E=t.getOptionGroupChildren(c);return E.map(function(f,d){var b=t.getOptionLabel(f),x=d+"_"+t.getOptionRenderKey(f),j=t.isOptionDisabled(f);return i.createElement(he,{key:x,label:b,option:f,style:m,template:t.itemTemplate,selected:t.isSelected(f),disabled:j,onClick:t.onOptionClick,ptm:r,cx:e})})},Z=function(c,m){var E=g.getJSXElement(c,t)||Ge(m?"emptyFilterMessage":"emptyMessage"),f=v({className:e("emptyMessage")},p("emptyMessage"));return i.createElement("li",f,E)},U=function(c,m){var E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},f={height:E.props?E.props.itemSize:void 0};if(f=k(k({},f),c.style),t.optionGroupLabel){var d=t.optionGroupLabel,b=t.optionGroupTemplate?g.getJSXElement(t.optionGroupTemplate,c,m):t.getOptionGroupLabel(c),x=S(c,f),j=m+"_"+t.getOptionGroupRenderKey(c),J=v({className:e("itemGroup",{optionGroupLabel:d}),style:f},p("itemGroup"));return i.createElement(i.Fragment,{key:j},i.createElement("li",J,b),x)}else{var te=t.getOptionLabel(c),ne=m+"_"+t.getOptionRenderKey(c),fe=t.isOptionDisabled(c);return i.createElement(he,{key:ne,label:te,option:c,style:f,template:t.itemTemplate,selected:t.isSelected(c),disabled:fe,onClick:t.onOptionClick,ptm:r,cx:e})}},P=function(){return g.isNotEmpty(t.visibleOptions)?t.visibleOptions.map(U):t.hasFilter?Z(t.emptyFilterMessage,!0):Z(t.emptyMessage)},O=function(){if(t.showFilterClear&&t.filterValue){var c=Ge("clear"),m=v({className:e("clearIcon"),"aria-label":c,onClick:function(){return t.onFilterClearIconClick(function(){return R.focus(h.current)})}},p("clearIcon")),E=t.filterClearIcon||i.createElement(He,m),f=pe.getJSXIcon(E,k({},m),{props:t});return f}return null},G=function(){if(t.filter){var c=O(),m=v({className:e("filterIcon")},p("filterIcon")),E=t.filterIcon||i.createElement(Kt,m),f=pe.getJSXIcon(E,k({},m),{props:t}),d=v({className:e("filterContainer",{clearIcon:c})},p("filterContainer")),b=v({ref:h,type:"text",autoComplete:"off",className:e("filterInput"),placeholder:t.filterPlaceholder,onKeyDown:t.onFilterInputKeyDown,onChange:function(ne){return N(ne)},value:t.filterValue},p("filterInput")),x=i.createElement("div",d,i.createElement("input",b),c,f);if(t.filterTemplate){var j={className:T("p-dropdown-filter-container",{"p-dropdown-clearable-filter":!!c}),element:x,filterOptions:w,filterInputKeyDown:t.onFilterInputKeyDown,filterInputChange:N,filterIconClassName:"p-dropdown-filter-icon",clearIcon:c,props:t};x=g.getJSXElement(t.filterTemplate,j)}var J=v({className:e("header")},p("header"));return i.createElement("div",J,x)}return null},oe=function(){if(t.virtualScrollerOptions){var c=k(k({},t.virtualScrollerOptions),{style:k(k({},t.virtualScrollerOptions.style),{height:t.scrollHeight}),className:T("p-dropdown-items-wrapper",t.virtualScrollerOptions.className),items:t.visibleOptions,autoSize:!0,onLazyLoad:function(b){return t.virtualScrollerOptions.onLazyLoad(k(k({},b),{filter:t.filterValue}))},itemTemplate:function(b,x){return b&&U(b,x.index,x)},contentTemplate:function(b){var x=t.hasFilter?t.emptyFilterMessage:t.emptyMessage,j=F?Z(x):b.children,J=v({ref:b.contentRef,style:b.style,className:T(b.className,e("list",{virtualScrollerProps:t.virtualScrollerOptions})),role:"listbox"},p("list"));return i.createElement("ul",J,j)}});return i.createElement(Vt,q({ref:t.virtualScrollerRef},c,{pt:r("virtualScroller")}))}else{var m=P(),E=v({className:e("wrapper"),style:y("wrapper")},p("wrapper")),f=v({className:e("list"),role:"listbox"},p("list"));return i.createElement("div",E,i.createElement("ul",f,m))}},ee=function(){var c=G(),m=oe(),E=le(),f=v({className:T(t.panelClassName,e("panel",{context:D})),style:y("panel"),onClick:t.onClick},p("panel")),d=v({classNames:e("transition"),in:t.in,timeout:{enter:120,exit:100},options:t.transitionOptions,unmountOnExit:!0,onEnter:K,onEntered:B,onExit:t.onExit,onExited:t.onExited},p("transition"));return i.createElement(Mt,q({nodeRef:a},d),i.createElement("div",q({ref:a},f),c,m,E))},M=ee();return i.createElement(jt,{element:M,appendTo:t.appendTo})}));_e.displayName="DropdownPanel";function Zt(t,a){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=Wt(t))||a&&t&&typeof t.length=="number"){r&&(t=r);var e=0,y=function(){};return{s:y,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(p){throw p},f:y}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var D=!0,h=!1,F;return{s:function(){r=r.call(t)},n:function(){var p=r.next();return D=p.done,p},e:function(p){h=!0,F=p},f:function(){try{!D&&r.return!=null&&r.return()}finally{if(h)throw F}}}}function Wt(t,a){if(t){if(typeof t=="string")return je(t,a);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return je(t,a)}}function je(t,a){(a==null||a>t.length)&&(a=t.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=t[r];return e}function Ve(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(y){return Object.getOwnPropertyDescriptor(t,y).enumerable})),r.push.apply(r,e)}return r}function $(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Ve(Object(r),!0).forEach(function(e){we(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ve(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var Yt=i.memo(i.forwardRef(function(t,a){var r=i.useContext(Ae),e=se.getProps(t,r),y=i.useState(""),D=ce(y,2),h=D[0],F=D[1],w=i.useState(!1),p=ce(w,2),K=p[0],B=p[1],N=i.useState(!1),le=ce(N,2),S=le[0],Z=le[1],U=i.useRef(null),P=i.useRef(null),O=i.useRef(e.inputRef),G=i.useRef(e.focusInputRef),oe=i.useRef(null),ee=i.useRef(null),M=i.useRef(null),I=i.useRef(null),c=e.virtualScrollerOptions&&e.virtualScrollerOptions.lazy,m=g.isNotEmpty(h),E=e.appendTo||r&&r.appendTo||Y.appendTo,f=se.setMetaData($($({props:e},e.__parentMetadata),{},{state:{filter:h,focused:K,overlayVisible:S}})),d=f.ptm,b=f.cx,x=f.sx,j=f.isUnstyled;Dt(se.css.styles,j,{name:"dropdown"});var J=Lt({target:U,overlay:P,listener:function(n,l){var u=l.type,s=l.valid;s&&(u==="outside"?!Ue(n)&&V():V())},when:S}),te=ce(J,2),ne=te[0],fe=te[1],Be=function(){if(m&&!c){var n=h.trim().toLocaleLowerCase(e.filterLocale),l=e.filterBy?e.filterBy.split(","):[e.optionLabel||"label"];if(e.optionGroupLabel){var u=[],s=Zt(e.options),L;try{for(s.s();!(L=s.n()).done;){var _=L.value,z=ke.filter(A(_),l,n,e.filterMatchMode,e.filterLocale);z&&z.length&&u.push($($({},_),we({},"".concat(e.optionGroupChildren),z)))}}catch(W){s.e(W)}finally{s.f()}return u}else return ke.filter(e.options,l,n,e.filterMatchMode,e.filterLocale)}else return e.options},Ue=function(n){return R.hasClass(n.target,"p-dropdown-clear-icon")||R.hasClass(n.target,"p-dropdown-filter-clear-icon")},$e=function(n){e.disabled||(e.onClick&&e.onClick(n),!n.defaultPrevented&&(R.hasClass(n.target,"p-dropdown-clear-icon")||n.target.tagName==="INPUT"||(!P.current||!(P.current&&P.current.contains(n.target)))&&(R.focus(G.current),S?V():ae())))},Je=function(n){e.showOnFocus&&!S&&ae(),B(!0),e.onFocus&&e.onFocus(n)},Oe=function(n){B(!1),e.onBlur&&setTimeout(function(){var l=O.current?O.current.value:void 0;e.onBlur({originalEvent:n.originalEvent,value:l,stopPropagation:function(){n.originalEvent.stopPropagation()},preventDefault:function(){n.originalEvent.preventDefault()},target:{name:e.name,id:e.id,value:l}})},200)},Xe=function(n){kt.emit("overlay-click",{originalEvent:n,target:U.current})},ze=function(n){switch(n.which){case 40:Se(n);break;case 38:Ie(n);break;case 32:case 13:S?V():ae(),n.preventDefault();break;case 27:case 9:V();break;default:We(n);break}},qe=function(n){switch(n.which){case 40:Se(n);break;case 38:Ie(n);break;case 13:case 27:V(),n.preventDefault();break}},Ie=function(n){if(C){var l=Ce(re());l&&ie({originalEvent:n,option:l})}n.preventDefault()},Se=function(n){if(C)if(!S&&n.altKey)ae();else{var l=Ze(re());l&&ie({originalEvent:n,option:l})}n.preventDefault()},Ze=function o(n){if(e.optionGroupLabel){var l=n===-1?0:n.group,u=n===-1?-1:n.option,s=Ee(A(C[l]),u);return s||(l+1!==C.length?o({group:l+1,option:-1}):null)}return Ee(C,n)},Ee=function o(n,l){var u=l+1;if(u===n.length)return null;var s=n[u];return ge(s)?o(u):s},Ce=function o(n){if(n===-1)return null;if(e.optionGroupLabel){var l=n.group,u=n.option,s=Fe(A(C[l]),u);return s||(l>0?o({group:l-1,option:A(C[l-1]).length}):null)}return Fe(C,n)},Fe=function(n,l){var u=l-1;if(u<0)return null;var s=n[u];return ge(s)?Ce(u):s},We=function(n){ee.current&&clearTimeout(ee.current);var l=n.key;if(!(l==="Shift"||l==="Control"||l==="Alt")){if(I.current===l?M.current=l:M.current=M.current?M.current+l:l,I.current=l,M.current){var u=re(),s=e.optionGroupLabel?Qe(u):Ye(u+1);s&&ie({originalEvent:n,option:s})}ee.current=setTimeout(function(){M.current=null},250)}},Ye=function(n){return M.current?Pe(n,C.length)||Pe(0,n):null},Pe=function(n,l){for(var u=n;u<l;u++){var s=C[u];if(de(s))return s}return null},Qe=function(n){for(var l=n===-1?{group:0,option:-1}:n,u=l.group;u<C.length;u++)for(var s=A(C[u]),L=l.group===u?l.option+1:0;L<s.length;L++)if(de(s[L]))return s[L];for(var _=0;_<=l.group;_++)for(var z=A(C[_]),W=0;W<(l.group===_?l.option:z.length);W++)if(de(z[W]))return z[W];return null},de=function(n){var l=X(n);return l?(l=l.toLocaleLowerCase(e.filterLocale),l.startsWith(M.current.toLocaleLowerCase(e.filterLocale))):!1},et=function(n){e.onChange&&e.onChange({originalEvent:n.originalEvent,value:n.target.value,stopPropagation:function(){n.originalEvent.stopPropagation()},preventDefault:function(){n.originalEvent.preventDefault()},target:{name:e.name,id:e.id,value:n.target.value}})},tt=function(n){B(!0),V(),e.onFocus&&e.onFocus(n)},nt=function(n){var l=n.option;l.disabled||(ie(n),R.focus(G.current)),V()},rt=function(n){var l=n.target.value;F(l),e.onFilter&&e.onFilter({originalEvent:n,filter:l})},at=function(n){ve(n)},ve=function(n){F(""),e.onFilter&&e.onFilter({filter:""}),n&&n()},xe=function(n){e.onChange&&e.onChange({originalEvent:n,value:void 0,stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},target:{name:e.name,id:e.id,value:void 0}}),Re()},ie=function(n){if(H!==n.option){Re(n.option);var l=ue(n.option);e.onChange&&e.onChange({originalEvent:n.originalEvent,value:l,stopPropagation:function(){n.originalEvent.stopPropagation()},preventDefault:function(){n.originalEvent.preventDefault()},target:{name:e.name,id:e.id,value:l}})}},re=function(n){if(n=n||C,e.value!=null&&n)if(e.optionGroupLabel)for(var l=0;l<n.length;l++){var u=Le(e.value,A(n[l]));if(u!==-1)return{group:l,option:u}}else return Le(e.value,n);return-1},De=function(){return e.optionValue?null:e.dataKey},Le=function(n,l){var u=De();return l.findIndex(function(s){return g.equals(n,ue(s),u)})},lt=function(n){return g.equals(e.value,ue(n),De())},ae=function(){Z(!0)},V=function(){Z(!1)},ot=function(n){ye.set("overlay",P.current,r&&r.autoZIndex||Y.autoZIndex,r&&r.zIndex.overlay||Y.zIndex.overlay),R.addStyles(P.current,{position:"absolute",top:"0",left:"0"}),me(),n&&n()},it=function(n){n&&n(),ne(),e.onShow&&e.onShow()},ut=function(){fe()},ct=function(){e.filter&&e.resetFilterOnHide&&ve(),ye.clear(P.current),e.onHide&&e.onHide()},me=function(){R.alignOverlay(P.current,O.current.parentElement,e.appendTo||r&&r.appendTo||Y.appendTo)},st=function(){var n=R.findSingle(P.current,"li.p-highlight");n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"})},Re=function(n){O.current&&(O.current.value=n?X(n):e.value||"")},X=function(n){return e.optionLabel?g.resolveFieldData(n,e.optionLabel):n&&n.label!==void 0?n.label:n},ue=function(n){return e.optionValue?g.resolveFieldData(n,e.optionValue):n&&n.value!==void 0?n.value:n},pt=function(n){return e.dataKey?g.resolveFieldData(n,e.dataKey):X(n)},ge=function(n){return e.optionDisabled?g.isFunction(e.optionDisabled)?e.optionDisabled(n):g.resolveFieldData(n,e.optionDisabled):n&&n.disabled!==void 0?n.disabled:!1},ft=function(n){return g.resolveFieldData(n,e.optionGroupLabel)},dt=function(n){return g.resolveFieldData(n,e.optionGroupLabel)},A=function(n){return g.resolveFieldData(n,e.optionGroupChildren)},vt=function(){if(e.editable&&O.current){var n=H?X(H):null,l=n||e.value||"";O.current.value=l}},mt=function(){var n=re(e.options);return n!==-1?e.optionGroupLabel?A(e.options[n.group])[n.option]:e.options[n]:null};i.useImperativeHandle(a,function(){return{props:e,show:ae,hide:V,clear:xe,focus:function(){return R.focus(G.current)},getElement:function(){return U.current},getOverlay:function(){return P.current},getInput:function(){return O.current},getFocusInput:function(){return G.current},getVirtualScroller:function(){return oe.current}}}),i.useEffect(function(){g.combinedRefs(O,e.inputRef),g.combinedRefs(G,e.focusInputRef)},[O,e.inputRef,G,e.focusInputRef]),Rt(function(){e.autoFocus&&R.focus(G.current,e.autoFocus),me()}),be(function(){S&&e.value&&st()},[S,e.value]),be(function(){S&&h&&e.filter&&me()},[S,h,e.filter]),be(function(){h&&(!e.options||e.options.length===0)&&F(""),vt(),O.current&&(O.current.selectedIndex=1)}),Tt(function(){ye.clear(P.current)});var gt=function(){var n={value:"",label:e.placeholder};if(H){var l=ue(H);n={value:Q(l)==="object"?e.options.findIndex(function(_){return _===l}):l,label:X(H)}}var u=v({className:"p-hidden-accessible p-dropdown-hidden-select"},d("hiddenSelectedMessage")),s=v({ref:O,required:e.required,defaultValue:n.value,name:e.name,tabIndex:-1,"aria-hidden":"true"},d("select")),L=v({value:n.value},d("option"));return i.createElement("div",u,i.createElement("select",s,i.createElement("option",L,n.label)))},yt=function(){var n=v({className:"p-hidden-accessible"},d("hiddenSelectedMessage")),l=v($({ref:G,id:e.inputId,type:"text",readOnly:!0,"aria-haspopup":"listbox",onFocus:Je,onBlur:Oe,onKeyDown:ze,disabled:e.disabled,tabIndex:e.tabIndex},Ne),d("input"));return i.createElement("div",n,i.createElement("input",l))},bt=function(){var n=g.isNotEmpty(H)?X(H):null;if(e.editable){var l=n||e.value||"",u=v($({ref:O,type:"text",defaultValue:l,className:b("input",{label:n}),disabled:e.disabled,placeholder:e.placeholder,maxLength:e.maxLength,onInput:et,onFocus:tt,onBlur:Oe,"aria-haspopup":"listbox"},Ne),d("input"));return i.createElement("input",u)}else{var s=e.valueTemplate?g.getJSXElement(e.valueTemplate,H,e):n||e.placeholder||"empty",L=v({ref:O,className:b("input",{label:n})},d("input"));return i.createElement("span",L,s)}},ht=function(){if(e.value!=null&&e.showClear&&!e.disabled){var n=v({className:b("clearIcon"),onPointerUp:xe},d("clearIcon")),l=e.clearIcon||i.createElement(He,n);return pe.getJSXIcon(l,$({},n),{props:e})}return null},wt=function(){var n=v({className:b("dropdownIcon"),"data-pr-overlay-visible":S},d("dropdownIcon")),l=e.dropdownIcon||i.createElement(Nt,n),u=pe.getJSXIcon(l,$({},n),{props:e}),s=e.placeholder||e.ariaLabel,L=v({className:b("trigger"),role:"button","aria-haspopup":"listbox","aria-expanded":S,"aria-label":s},d("trigger"));return i.createElement("div",L,u)},C=Be(),H=mt(),Ot=g.isNotEmpty(e.tooltip),Te=se.getOtherProps(e),Ne=g.reduceKeys(Te,R.ARIA_PROPS),It=gt(),St=yt(),Et=bt(),Ct=wt(),Ft=ht(),Pt=v({id:e.id,ref:U,className:T(e.className,b("root",{focusedState:K,overlayVisibleState:S})),style:e.style,onClick:function(n){return $e(n)},onMouseDown:e.onMouseDown,onContextMenu:e.onContextMenu,"data-p-disabled":e.disabled,"data-p-focus":K},Te,d("root"));return i.createElement(i.Fragment,null,i.createElement("div",Pt,St,It,Et,Ft,Ct,i.createElement(_e,q({hostName:"Dropdown",ref:P,visibleOptions:C,virtualScrollerRef:oe},e,{appendTo:E,onClick:Xe,onOptionClick:nt,filterValue:h,hasFilter:m,onFilterClearIconClick:at,resetFilter:ve,onFilterInputKeyDown:qe,onFilterInputChange:rt,getOptionLabel:X,getOptionRenderKey:pt,isOptionDisabled:ge,getOptionGroupChildren:A,getOptionGroupLabel:dt,getOptionGroupRenderKey:ft,isSelected:lt,getSelectedOptionIndex:re,in:S,onEnter:ot,onEntered:it,onExit:ut,onExited:ct,ptm:d,cx:b,sx:x}))),Ot&&i.createElement(Gt,q({target:U,content:e.tooltip},e.tooltipOptions,{pt:d("tooltip")})))}));Yt.displayName="Dropdown";export{Yt as D};