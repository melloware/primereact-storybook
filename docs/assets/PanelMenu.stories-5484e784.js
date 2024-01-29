import{r as l}from"./index-76fb7be0.js";import{a as Qe,c as R,O as y,U as Ze,D as k,I as Oe}from"./api.esm-4644ee78.js";import{C as en,u as nn}from"./componentbase.esm-1c796d7e.js";import{C as Me}from"./csstransition.esm-f87c8556.js";import{d as Ue,a as tn}from"./hooks.esm-d069ba29.js";import{C as Ve}from"./index.esm-4f5bfc3f.js";import{C as Be}from"./index.esm-2c97deba.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";import"./iconbase.esm-60e86362.js";function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},ye.apply(this,arguments)}function ke(e){"@babel/helpers - typeof";return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ke(e)}function an(e,r){if(ke(e)!=="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var c=a.call(e,r||"default");if(ke(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function rn(e){var r=an(e,"string");return ke(r)==="symbol"?r:String(r)}function qe(e,r,a){return r=rn(r),r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function on(e){throw new TypeError('"'+e+'" is read-only')}function ln(e){if(Array.isArray(e))return e}function un(e,r){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var c,u,F,C,N=[],A=!0,p=!1;try{if(F=(a=a.call(e)).next,r===0){if(Object(a)!==a)return;A=!1}else for(;!(A=(c=F.call(a)).done)&&(N.push(c.value),N.length!==r);A=!0);}catch(O){p=!0,u=O}finally{try{if(!A&&a.return!=null&&(C=a.return(),Object(C)!==C))return}finally{if(p)throw u}}return N}}function _e(e,r){(r==null||r>e.length)&&(r=e.length);for(var a=0,c=new Array(r);a<r;a++)c[a]=e[a];return c}function sn(e,r){if(e){if(typeof e=="string")return _e(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _e(e,r)}}function cn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(e,r){return ln(e)||un(e,r)||sn(e,r)||cn()}var ze=function(r,a){var c=l.useRef(!1);return l.useEffect(function(){if(!c.current){c.current=!0;return}return r&&r()},a)},mn={headerIcon:function(r){var a=r.item;return R("p-menuitem-icon",a.icon)},headerSubmenuIcon:"p-submenu-icon",headerLabel:"p-menuitem-text",headerAction:"p-panelmenu-header-link",panel:function(r){var a=r.item;return R("p-panelmenu-panel",a.className)},header:function(r){var a=r.active,c=r.item;return R("p-component p-panelmenu-header",{"p-highlight":a&&!!c.items,"p-disabled":c.disabled})},headerContent:"p-panelmenu-header-content",menuContent:"p-panelmenu-content",root:function(r){var a=r.props;return R("p-panelmenu p-component",a.className)},separator:"p-menuitem-separator",toggleableContent:function(r){var a=r.active;return R("p-toggleable-content",{"p-toggleable-content-collapsed":!a})},icon:function(r){var a=r.item;return R("p-menuitem-icon",a.icon)},label:"p-menuitem-text",submenuicon:"p-submenu-icon",content:"p-menuitem-content",action:function(r){var a=r.item;return R("p-menuitem-link",{"p-disabled":a.disabled})},menuitem:function(r){var a=r.item,c=r.focused,u=r.disabled;return R("p-menuitem",a.className,{"p-focus":c,"p-disabled":u})},menu:"p-panelmenu-root-list",submenu:"p-submenu-list",transition:"p-toggleable-content"},dn=`
@layer primereact {
    .p-panelmenu .p-panelmenu-header-link {
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;
        text-decoration: none;
    }

    .p-panelmenu .p-panelmenu-header-link:focus {
        z-index: 1;
    }

    .p-panelmenu .p-submenu-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-panelmenu .p-menuitem-link {
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        text-decoration: none;
        position: relative;
        overflow: hidden;
    }

    .p-panelmenu .p-menuitem-text {
        line-height: 1;
    }
}
`,xe=en.extend({defaultProps:{__TYPE:"PanelMenu",id:null,model:null,style:null,submenuIcon:null,expandedKeys:null,className:null,onExpandedKeysChange:null,onOpen:null,onClose:null,multiple:!1,transitionOptions:null,children:void 0},css:{classes:mn,styles:dn}});function He(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);r&&(c=c.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),a.push.apply(a,c)}return a}function Re(e){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?He(Object(a),!0).forEach(function(c){qe(e,c,a[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):He(Object(a)).forEach(function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(a,c))})}return e}var Ae=l.memo(l.forwardRef(function(e,r){var a=Ue(),c=e.ptm,u=e.cx,F=l.useRef(null),C=function(o,f){return c(o,Re({hostName:e.hostName},f))},N=function(o,f,v){return C(f,{context:{item:o,index:v,active:O(o),focused:U(o),disabled:X(o)}})},A=function(o){return"".concat(e.panelId,"_").concat(o.key)},p=function(o,f,v){return o&&o.item?y.getItemValue(o.item[f],v):void 0},O=function(o){return e.activeItemPath&&e.activeItemPath.some(function(f){return f.key===o.key})},H=function(o){return p(o,"visible")!==!1},X=function(o){return p(o,"disabled")},U=function(o){return e.focusedItemId===A(o)},G=function(o){return y.isNotEmpty(o.items)},W=function(o,f){p(f,"url")||o.preventDefault(),p(f,"command",{originalEvent:o,item:f.item}),Y({processedItem:f,expanded:!O(f)})},Y=function(o){e.onItemToggle(o)},D=function(){return e.model.filter(function(o){return H(o)&&!p(o,"separator")}).length},V=function(o){return o-e.model.slice(0,o).filter(function(f){return H(f)&&p(f,"separator")}).length+1};l.useImperativeHandle(r,function(){return{getElement:function(){return F.current}}});var ce=function(o){var f=e.id+"_sep_"+o,v=a({id:f,key:f,className:u("separator"),role:"separator"},C("separator"));return l.createElement("li",v)},B=function(o,f){var v=l.createRef(),L=a({className:u("toggleableContent",{active:f})},C("toggleableContent"));if(H(o)&&G(o)){var j=a({classNames:u("transition"),timeout:{enter:1e3,exit:450},in:f,unmountOnExit:!0},C("transition"));return l.createElement(Me,ye({nodeRef:v},j),l.createElement("div",ye({ref:v},L),l.createElement(Ae,{id:A(o)+"_list",role:"group",panelId:e.panelId,level:e.level+1,focusedItemId:e.focusedItemId,activeItemPath:e.activeItemPath,onItemToggle:Y,menuProps:e.menuProps,model:o.items,submenuIcon:e.submenuIcon,ptm:c,cx:u})))}return null},q=function(o,f){var v=o.item;if(H(o)===!1)return null;var L=A(o),j=O(o),ee=U(o),de=X(v),he=R("p-menuitem-link",{"p-disabled":v.disabled}),ne=R("p-menuitem-icon",v.icon),fe=a({className:u("icon",{item:v})},N(o,"icon",f)),pe=Oe.getJSXIcon(v.icon,Re({},fe),{props:e.menuProps}),Ie=a({className:u("label")},N(o,"label",f)),te=v.label&&l.createElement("span",Ie,v.label),ae="p-panelmenu-icon",ve=a({className:u("submenuicon")},N(o,"submenuicon",f)),ge=v.items&&Oe.getJSXIcon(j?e.submenuIcon||l.createElement(Ve,ve):e.submenuIcon||l.createElement(Be,ve)),re=B(o,j),Ee=a({href:v.url||"#",className:u("action",{item:v}),target:v.target,onFocus:function(le){return le.stopPropagation()},tabIndex:"-1","aria-hidden":!0},N(o,"action",f)),z=l.createElement("a",Ee,ge,pe,te);if(v.template){var ie={className:he,labelClassName:"p-menuitem-text",iconClassName:ne,submenuIconClassName:ae,element:z,props:e,leaf:!v.items,active:j};z=y.getJSXElement(v.template,v,ie)}var K=a({onClick:function(le){return W(le,o)},className:u("content")},N(o,"content",f)),Pe=a({key:L,id:L,className:u("menuitem",{item:v,focused:ee,disabled:de}),style:v.style,role:"treeitem","aria-label":v.label,"aria-expanded":G(v)?j:void 0,"aria-level":e.level+1,"aria-setsize":D(),"aria-posinset":V(f),"data-p-focused":ee,"data-p-disabled":de},N(o,"menuitem",f));return l.createElement("li",Pe,l.createElement("div",K,z),re)},Q=function(o,f){return p(o,"separator")?ce(f):q(o,f)},x=function(){return e.model?e.model.map(Q):null},me=x(),w=e.root?"menu":"submenu",Z=a({id:e.id,ref:F,tabIndex:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onKeyDown:e.onKeyDown,"aria-activedescendant":e.ariaActivedescendant,role:e.role,className:R(u(w),e.className)},c(w));return l.createElement("ul",Z,me)}));Ae.displayName="PanelMenuSub";var Je=l.memo(function(e){var r=e.ptm,a=e.cx,c=l.useState(!1),u=T(c,2),F=u[0],C=u[1],N=l.useState(null),A=T(N,2),p=A[0],O=A[1],H=l.useState(null),X=T(H,2),U=X[0],G=X[1],W=l.useState([]),Y=T(W,2),D=Y[0],V=Y[1],ce=l.useState(null),B=T(ce,2),q=B[0],Q=B[1],x=l.useState([]),me=T(x,2),w=me[0],Z=me[1],I=l.useRef(null),o=l.useRef(null),f=l.useRef(null),v=function(t,s){return t&&t.item?y.getItemValue(t.item[s]):void 0},L=function(t){return v(t,"label")},j=function(t){return v(t,"visible")!==!1},ee=function(t){return v(t,"disabled")},de=function(t){return D&&D.some(function(s){return s.key===t.parentKey})},he=function(t){return y.isNotEmpty(t.items)},ne=function(){return f.current&&f.current.getElement()},fe=function(t){C(!0);var s=p||(Pe(t,t.relatedTarget)?be():g());O(s)},pe=function(){C(!1),O(null),I.current=""},Ie=function(t){var s=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":te(t);break;case"ArrowUp":ae(t);break;case"ArrowLeft":ve(t);break;case"ArrowRight":ge(t);break;case"Home":re(t);break;case"End":Ee(t);break;case"Space":ie(t);break;case"Enter":case"NumpadEnter":z(t);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!s&&y.isPrintableCharacter(t.key)&&E(t,t.key);break}},te=function(t){var s=y.isNotEmpty(p)?n(p):be();h({originalEvent:t,processedItem:s,focusOnNext:!0}),t.preventDefault()},ae=function(t){var s=y.isNotEmpty(p)?i(p):g();h({originalEvent:t,processedItem:s,selfCheck:!0}),t.preventDefault()},ve=function(t){if(y.isNotEmpty(p)){var s=D.some(function(m){return m.key===p.key});s?V(D.filter(function(m){return m.key!==p.key})):O(y.isNotEmpty(p.parent)?p.parent:p),t.preventDefault()}},ge=function(t){if(y.isNotEmpty(p)){var s=he(p);if(s){var m=D.some(function(P){return P.key===p.key});if(m)te(t);else{var b=D.filter(function(P){return P.parentKey!==p.parentKey});b.push(p),V(b)}}t.preventDefault()}},re=function(t){h({originalEvent:t,processedItem:be(),allowHeaderFocus:!1}),t.preventDefault()},Ee=function(t){h({originalEvent:t,processedItem:g(),focusOnNext:!0,allowHeaderFocus:!1}),t.preventDefault()},z=function(t){if(y.isNotEmpty(p)){var s=k.findSingle(ne(),'li[id="'.concat("".concat(U),'"]')),m=s&&(k.findSingle(s,'[data-pc-section="action"]')||k.findSingle(s,"a,button"));m?m.click():s&&s.click()}t.preventDefault()},ie=function(t){z(t)},K=function(t){var s=t.processedItem,m=t.expanded;if(e.expandedKeys)e.onToggle&&e.onToggle({item:s.item,expanded:m});else{var b=D.filter(function(P){return P.parentKey!==s.parentKey});m&&b.push(s),V(b)}k.focus(ne()),O(s)},Pe=function(t,s){var m=t.currentTarget.closest('[data-pc-section="panel"]');return m&&m.contains(s)},oe=function(t){return ue(t)&&L(t).toLocaleLowerCase().startsWith(I.current.toLocaleLowerCase())},le=function(t){return!!t&&(t.level===0||de(t))&&j(t)},ue=function(t){return!!t&&!ee(t)&&!v(t,"separator")},be=function(){return w.find(function(t){return ue(t)})},g=function(){return y.findLast(w,function(t){return ue(t)})},n=function(t){var s=w.findIndex(function(b){return b.key===t.key}),m=s<w.length-1?w.slice(s+1).find(function(b){return ue(b)}):void 0;return m||t},i=function(t){var s=w.findIndex(function(b){return b.key===t.key}),m=s>0?y.findLast(w.slice(0,s),function(b){return ue(b)}):void 0;return m||t},E=function(t,s){I.current=(I.current||"")+s;var m=null,b=!1;if(y.isNotEmpty(p)){var P=w.findIndex(function(S){return S.key===p.key});m=w.slice(P).find(function(S){return oe(S)}),m=y.isEmpty(m)?w.slice(0,P).find(function(S){return oe(S)}):m}else m=w.find(function(S){return oe(S)});return y.isNotEmpty(m)&&(b=!0),y.isEmpty(m)&&y.isEmpty(p)&&(m=be()),y.isNotEmpty(m)&&h({originalEvent:t,processedItem:m,allowHeaderFocus:!1}),o&&clearTimeout(o.current),o.current=setTimeout(function(){I.current="",o.currentt=null},500),b},h=function(t){var s=t.originalEvent,m=t.processedItem,b=t.focusOnNext,P=t.selfCheck,S=t.allowHeaderFocus,$=S===void 0?!0:S;y.isNotEmpty(p)&&p.key!==m.key?(O(m),_()):$&&e.onHeaderFocus&&e.onHeaderFocus({originalEvent:s,focusOnNext:b,selfCheck:P})},_=function(){var t=k.findSingle(ne(),'li[id="'.concat("".concat(U),'"]'));t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest",inline:"start"})},J=function(t){var s=Object.entries(t||{}).reduce(function(m,b){var P=T(b,2),S=P[0],$=P[1];if($){var M=se(S);M&&m.push(M)}return m},[]);V(s)},se=function d(t,s){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,b=s||m===0&&e.model;if(!b)return null;for(var P=0;P<b.length;P++){var S=b[P],$=v(S,"key")||S.key;if($===t)return S;var M=d(t,S.items,m+1);if(M)return M}},Ke=function d(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",P=[];return t&&t.forEach(function(S,$){var M=S.key?S.key:(b!==""?b+"_":"")+$,Se={item:S,index:$,level:s,key:M,parent:m,parentKey:b};Se.items=d(S.items,s+1,Se,M),P.push(Se)}),P},Ne=function d(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t&&t.forEach(function(m){le(m)&&(s.push(m),d(m.items,s))}),s};return l.useEffect(function(){var d=Ke(e.model);Q(d)},[e.model]),l.useEffect(function(){var d=Ne(q);Z(d)},[q,D]),l.useEffect(function(){J(e.expandedKeys)},[e.expandedKeys]),ze(function(){var d=y.isNotEmpty(p)?"".concat(e.panelId,"_").concat(p.key):null;G(d)},[e.panelId,p]),l.createElement(Ae,{hostName:"PanelMenu",id:e.panelId+"_list",ref:f,role:"tree",tabIndex:-1,ariaActivedescendant:F?U:void 0,panelId:e.panelId,focusedItemId:F?U:void 0,model:q,activeItemPath:D,menuProps:e.menuProps,onFocus:fe,onBlur:pe,onKeyDown:Ie,onItemToggle:K,level:0,className:a("submenu"),submenuIcon:e.submenuIcon,root:!0,ptm:r,cx:a})});Je.displayName="PanelMenuList";function je(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);r&&(c=c.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),a.push.apply(a,c)}return a}function Te(e){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?je(Object(a),!0).forEach(function(c){qe(e,c,a[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):je(Object(a)).forEach(function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(a,c))})}return e}var We=l.memo(l.forwardRef(function(e,r){var a=Ue(),c=l.useContext(Qe),u=xe.getProps(e,c),F=l.useState(u.id),C=T(F,2),N=C[0],A=C[1],p=l.useState(null),O=T(p,2),H=O[0],X=O[1],U=l.useState([]),G=T(U,2),W=G[0],Y=G[1],D=l.useState(!1),V=T(D,2);V[0];var ce=V[1],B=l.useRef(null),q=xe.setMetaData({props:u,state:{id:N,activeItem:H}}),Q=q.ptm,x=q.cx,me=q.isUnstyled;nn(xe.css.styles,me,{name:"panelmenu"});var w=function(n,i){if(i.disabled){n.preventDefault();return}i.url||n.preventDefault(),i.command&&i.command({originalEvent:n,item:i}),i.items&&Ee(n,i)},Z=function(n,i){return n?y.getItemValue(n[i]):void 0},I=function(n){return u.expandedKeys?u.expandedKeys[Z(n,"key")]:u.multiple?W.some(function(i){return y.equals(n,i)}):y.equals(n,H)},o=function(n){return Z(n,"visible")!==!1},f=function(n){return Z(n,"disabled")},v=function(n){return y.equals(n,H)},L=function(n){return"".concat(N,"_").concat(n)},j=function(n){return"".concat(L(n),"_header")},ee=function(n){return"".concat(L(n),"_content")},de=function(n,i){switch(n.code){case"ArrowDown":he(n);break;case"ArrowUp":ne(n);break;case"Home":fe(n);break;case"End":pe(n);break;case"Enter":case"NumpadEnter":case"Space":Ie(n,i);break}},he=function(n){var i=k.getAttribute(n.currentTarget,"data-p-highlight")===!0?k.findSingle(n.currentTarget.nextElementSibling,'[data-pc-section="menu"]'):null;i?k.focus(i):re({originalEvent:n,focusOnNext:!0}),n.preventDefault()},ne=function(n){var i=ae(n.currentTarget.parentElement)||ge(),E=k.getAttribute(i,"data-p-highlight")===!0?k.findSingle(i.nextElementSibling,'[data-pc-section="menu"]'):null;E?k.focus(E):re({originalEvent:n,focusOnNext:!1}),n.preventDefault()},fe=function(n){ie(n,ve()),n.preventDefault()},pe=function(n){ie(n,ge()),n.preventDefault()},Ie=function(n,i){var E=k.findSingle(n.currentTarget,'[data-pc-section="headeraction"]');E?E.click():w(n,i),n.preventDefault()},te=function g(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,E=i?n:n.nextElementSibling,h=k.findSingle(E,'[data-pc-section="header"]');return h?k.getAttribute(h,"data-p-disabled")?g(h.parentElement):h:null},ae=function g(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,E=i?n:n.previousElementSibling,h=k.findSingle(E,'[data-pc-section="header"]');return h?k.getAttribute(h,"data-p-disabled")?g(h.parentElement):h:null},ve=function(){return te(B.current.firstElementChild,!0)},ge=function(){return ae(B.current.lastElementChild,!0)},re=function(n){var i=n.originalEvent,E=n.focusOnNext,h=n.selfCheck,_=i.currentTarget.closest('[data-pc-section="panel"]'),J=h?k.findSingle(_,'[data-pc-section="header"]'):E?te(_):ae(_);J?ie(i,J):E?fe(i):pe(i)},Ee=function(n,i){if(!f(i)){var E=I(i),h=!E,_=H&&y.equals(i,H)?null:i;if(X(_),u.multiple){var J=W;W.some(function(se){return y.equals(i,se)})?(W.filter(function(se){return!y.equals(i,se)}),on("activeItems")):J.push(i),Y(J)}z({item:i,expanded:!E}),h?u.onOpen&&u.onOpen({originalEvent:n,item:i}):u.onClose&&u.onClose({originalEvent:n,item:i})}},z=function(n){var i=n.item,E=n.expanded,h=E===void 0?!1:E;if(u.expandedKeys){var _=Te({},u.expandedKeys);h?_[i.key]=!0:delete _[i.key],u.onExpandedKeysChange&&u.onExpandedKeysChange(_)}},ie=function(n,i){i&&k.focus(i)},K=function(n,i,E){return Q(i,{context:{active:I(n),focused:v(n),disabled:f(n),index:E}})};l.useImperativeHandle(r,function(){return{props:u,getElement:function(){return B.current}}}),tn(function(){!N&&A(Ze())}),ze(function(){ce(!0)},[u.model]);var Pe=function(){ce(!1)},oe=function(n,i){if(!o(n))return null;var E=n.id||N+"_"+i,h=I(n),_=R("p-menuitem-icon",n.icon),J=a({className:x("headerIcon",{item:n})},K(n,"headerIcon",i)),se=Oe.getJSXIcon(n.icon,Te({},J),{props:u}),Ke="p-panelmenu-icon",Ne=a({className:x("headerSubmenuIcon")},K(n,"headerSubmenuIcon",i)),d=n.items&&Oe.getJSXIcon(h?u.submenuIcon||l.createElement(Ve,Ne):u.submenuIcon||l.createElement(Be,Ne)),t=a({className:x("headerLabel")},K(n,"headerLabel",i)),s=n.label&&l.createElement("span",t,n.label),m=l.createRef(),b=a({href:n.url||"#",className:x("headerAction"),tabIndex:"-1"},K(n,"headerAction",i)),P=l.createElement("a",b,d,se,s);if(n.template){var S={onClick:function(we){return w(we,n)},className:"p-panelmenu-header-link",labelClassName:"p-menuitem-text",submenuIconClassName:Ke,iconClassName:_,element:P,props:u,leaf:!n.items,active:h};P=y.getJSXElement(n.template,n,S)}var $=a({key:E,className:x("panel",{item:n}),style:n.style},K(n,"panel",i)),M=a({id:j(i),className:x("header",{active:h,item:n}),"aria-label":n.label,"aria-expanded":h,"aria-disabled":n.disabled,"aria-controls":ee(i),tabIndex:n.disabled?null:"0",onClick:function(we){return w(we,n)},onKeyDown:function(we){return de(we,n)},"data-p-disabled":n.disabled,"data-p-highlight":h,role:"button",style:n.style},K(n,"header",i)),Se=a({className:x("headerContent")},K(n,"headerContent",i)),Xe=a({className:x("menuContent")},K(n,"menuContent",i)),Ge=a({className:x("toggleableContent",{active:h}),role:"region","aria-labelledby":j(i)},K(n,"toggleableContent",i)),Ye=a({classNames:x("transition"),timeout:{enter:1e3,exit:450},onEnter:Pe,in:h,unmountOnExit:!0,options:u.transitionOptions},K(n,"transition",i));return l.createElement("div",$,l.createElement("div",M,l.createElement("div",Se,P)),l.createElement(Me,ye({nodeRef:m},Ye),l.createElement("div",ye({id:ee(i),ref:m},Ge),l.createElement("div",Xe,l.createElement(Je,{panelId:L(i),menuProps:u,onToggle:z,onHeaderFocus:re,level:0,model:n.items,expandedKeys:u.expandedKeys,className:"p-panelmenu-root-submenu",submenuIcon:u.submenuIcon,ptm:Q,cx:x})))))},le=function(){return u.model?u.model.map(oe):null},ue=le(),be=a({ref:B,className:x("root"),id:u.id,style:u.style},xe.getOtherProps(u),Q("root"));return l.createElement("div",be,ue)}));We.displayName="PanelMenu";const wn={title:"Menu/PanelMenu",component:We,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},model:{control:"object",description:"An array of menuitems.",options:null},multiple:{control:"boolean",description:"Whether multiple tabs can be activated at the same time or not.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},submenuIcon:{control:"select",description:"Icon of the submenu.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},Ce={args:{unstyled:!1,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var Fe,Le,$e;Ce.parameters={...Ce.parameters,docs:{...(Fe=Ce.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    "unstyled": false,
    "model": [{
      "label": "Update",
      "icon": "pi pi-refresh"
    }, {
      "label": "Delete",
      "icon": "pi pi-times"
    }, {
      "label": "React Website",
      "icon": "pi pi-external-link"
    }, {
      "label": "Upload",
      "icon": "pi pi-upload"
    }]
  }
}`,...($e=(Le=Ce.parameters)==null?void 0:Le.docs)==null?void 0:$e.source}}};const kn=["Default"];export{Ce as Default,kn as __namedExportsOrder,wn as default};
