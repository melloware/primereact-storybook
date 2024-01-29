import{r as s}from"./index-76fb7be0.js";import{a as Pt,D as N,P as re,c as P,U as Kt,Z as be,O as g,b as _t,I as ye}from"./api.esm-4644ee78.js";import{C as Nt,u as Rt}from"./componentbase.esm-1c796d7e.js";import{d as Ct,l as Dt,h as At,e as Lt,a as Mt,b as G}from"./hooks.esm-d069ba29.js";import{A as Ot}from"./index.esm-9930a1d0.js";import{A as zt}from"./index.esm-7585bae1.js";import{B as Tt}from"./index.esm-8f2f3fba.js";import{R as tn}from"./ripple.esm-1f3221bd.js";import"./_commonjsHelpers-de833af9.js";import"./iconbase.esm-60e86362.js";function xe(){return xe=Object.assign?Object.assign.bind():function(u){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(u[c]=r[c])}return u},xe.apply(this,arguments)}function ie(u){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},ie(u)}function Ft(u,i){if(ie(u)!=="object"||u===null)return u;var r=u[Symbol.toPrimitive];if(r!==void 0){var c=r.call(u,i||"default");if(ie(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(u)}function jt(u){var i=Ft(u,"string");return ie(i)==="symbol"?i:String(i)}function cn(u,i,r){return i=jt(i),i in u?Object.defineProperty(u,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):u[i]=r,u}function an(u){throw new TypeError('"'+u+'" is read-only')}function $t(u){if(Array.isArray(u))return u}function Bt(u,i){var r=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(r!=null){var c,o,j,$,x=[],B=!0,oe=!1;try{if(j=(r=r.call(u)).next,i===0){if(Object(r)!==r)return;B=!1}else for(;!(B=(c=j.call(r)).done)&&(x.push(c.value),x.length!==i);B=!0);}catch(ue){oe=!0,o=ue}finally{try{if(!B&&r.return!=null&&($=r.return(),Object($)!==$))return}finally{if(oe)throw o}}return x}}function rn(u,i){(i==null||i>u.length)&&(i=u.length);for(var r=0,c=new Array(i);r<i;r++)c[r]=u[r];return c}function Ut(u,i){if(u){if(typeof u=="string")return rn(u,i);var r=Object.prototype.toString.call(u).slice(8,-1);if(r==="Object"&&u.constructor&&(r=u.constructor.name),r==="Map"||r==="Set")return Array.from(u);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return rn(u,i)}}function Vt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(u,i){return $t(u)||Bt(u,i)||Ut(u,i)||Vt()}var Ht={root:function(i){var r=i.props,c=i.mobileActiveState;return P("p-megamenu p-component",{"p-megamenu-horizontal":r.orientation==="horizontal","p-megamenu-vertical":r.orientation==="vertical","p-megamenu-mobile-active":c})},content:"p-menuitem-content",separator:"p-menuitem-separator",submenuIcon:"p-submenu-icon",action:function(i){var r=i.item;return P("p-menuitem-link",{"p-disabled":r.disabled})},submenuItem:function(i){var r=i.focused,c=i.disabled,o=i.active;return P("p-menuitem",{"p-menuitem-active":o,"p-focus":r,"p-disabled":c})},submenuHeader:function(i){var r=i.disabled;return P("p-megamenu-submenu-header p-submenu-header",{"p-disabled":r})},submenu:"p-submenu-list p-megamenu-submenu",panel:"p-megamenu-panel",grid:"p-megamenu-grid",icon:"p-menuitem-icon",label:"p-menuitem-text",column:function(i){var r=i.category,c=r.items?r.items.length:0,o;switch(c){case 2:o="p-megamenu-col-6";break;case 3:o="p-megamenu-col-4";break;case 4:o="p-megamenu-col-3";break;case 6:o="p-megamenu-col-2";break;default:o="p-megamenu-col-12";break}return o},menuButton:"p-megamenu-button",menuitem:function(i){var r=i.category,c=i.activeItemState,o=i.focused,j=i.disabled;return P("p-menuitem",{"p-menuitem-active p-highlight":c&&c.item===r,"p-focus":o,"p-disabled":j})},menubar:"p-megamenu-root-list",menu:"p-megamenu-root-list",start:"p-megamenu-start",end:"p-megamenu-end"},Jt=`
@layer primereact {
    .p-megamenu {
        display: flex;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-megamenu-root-list > .p-menuitem {
        position: relative;
    }

    .p-megamenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-megamenu .p-menuitem-text {
        line-height: 1;
    }

    .p-megamenu-panel {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
    }

    .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    /* Horizontal */
    .p-megamenu-horizontal {
        align-items: center;
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-megamenu-horizontal .p-megamenu-custom,
    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    /* Vertical */
    .p-megamenu-vertical {
        flex-direction: column;
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        flex-direction: column;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link  > .p-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: 0.5rem;
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }

    .p-megamenu-button {
        display: none;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
}
`,he=Nt.extend({defaultProps:{__TYPE:"MegaMenu",id:null,model:null,style:null,className:null,orientation:"horizontal",breakpoint:void 0,scrollHeight:"400px",start:null,submenuIcon:null,onFocus:null,onBlur:null,tabIndex:0,menuIcon:null,end:null,children:void 0},css:{classes:Ht,styles:Jt}});function on(u,i){var r=Object.keys(u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(u);i&&(c=c.filter(function(o){return Object.getOwnPropertyDescriptor(u,o).enumerable})),r.push.apply(r,c)}return r}function q(u){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?on(Object(r),!0).forEach(function(c){cn(u,c,r[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(r)):on(Object(r)).forEach(function(c){Object.defineProperty(u,c,Object.getOwnPropertyDescriptor(r,c))})}return u}var mn=s.memo(s.forwardRef(function(u,i){var r=Ct(),c=s.useContext(Pt),o=he.getProps(u,c),j=s.useState(o.id),$=E(j,2),x=$[0],B=$[1],oe=s.useState(null),ue=E(oe,2),m=ue[0],z=ue[1],pn=s.useState(null),Le=E(pn,2),dn=Le[0],Me=Le[1],fn=s.useState({index:-1,key:"",parentKey:""}),Oe=E(fn,2),d=Oe[0],h=Oe[1],vn=s.useState(null),ze=E(vn,2),le=ze[0],gn=ze[1],bn=s.useState(!1),Te=E(bn,2),yn=Te[0],se=Te[1],hn=s.useState(null),Fe=E(hn,2),ce=Fe[0],In=Fe[1],xn=s.useState([]),je=E(xn,2),S=je[0],Sn=je[1],kn=s.useState(null),$e=E(kn,2),U=$e[0],wn=$e[1],En=s.useState(!1),Be=E(En,2),C=Be[0],Y=Be[1],Pn=s.useState(!1),Ue=E(Pn,2),Ve=Ue[0],Se=Ue[1],T=s.useRef(""),me=s.useRef(null),D=s.useRef(null),A=s.useRef(null),Q=s.useRef(null),pe=s.useRef(null),de=o.orientation==="horizontal",ee=o.orientation==="vertical",ke=Dt("screen and (max-width: ".concat(o.breakpoint,")"),!!o.breakpoint),we=he.setMetaData({props:o,state:{id:x,activeItem:m&&m.item,attributeSelector:U,mobileActive:C}}),I=we.ptm,b=we.cx,Kn=we.isUnstyled;Rt(he.css.styles,Kn,{name:"megamenu"});var L=function(e,t,n){return I(t,{context:{active:ve(e),focused:Ce(e),disabled:Z(e),item:e,index:n}})},_n=At({type:"click",listener:function(e){Fn(e)&&H()}}),He=E(_n,2),Nn=He[0],Rn=He[1],Cn=Lt({type:"resize",listener:function(){H()}}),Je=E(Cn,2),Dn=Je[0],An=Je[1],Xe=function(){Nn(),Dn()},Ee=function(){Rn(),An()},Ln=function(e){var t=e.originalEvent,n=e.processedItem,l=n.item;if(l.disabled){t.preventDefault();return}l.url||t.preventDefault(),l.command&&l.command({originalEvent:t,item:l});var p=O(n),v=Ke(n);if(v){var f=n.index,y=n.key,k=n.parentKey;z(null),h({index:f,key:y,parentKey:k})}else if(p)V(e);else{var w=m?m.index:-1,_=m?m.key:"";H(t),h({index:w,key:_,parentKey:""}),Y(!1)}},V=function(e){var t=e.processedItem,n=e.isFocus;if(!g.isEmpty(t)){var l=t.index,p=t.key,v=t.parentKey,f=t.items,y=g.isNotEmpty(f);y&&z(t),h({index:l,key:p,parentKey:v}),y&&se(!0),n&&N.focus(A.current)}},Mn=function(e){!C&&yn&&V(e)},On=function(e){var t=e.originalEvent,n=e.processedItem,l=n.item;if(l.disabled){t.preventDefault();return}l.url||t.preventDefault(),l.command&&(l.command({originalEvent:t,item:o.item}),t.preventDefault());var p=O(n),v=g.isEmpty(n.parent),f=Ke(n);if(f){var y=n.index,k=n.key,w=n.parentKey;z(null),h({index:y,key:k,parentKey:w}),se(!v)}else if(p)V(e);else{var _=v?n:m;H(),K(t,_?_.index:-1),Y(!1),N.focus(A.current)}},zn=function(){h({index:ne(),level:0,parentKey:""})},H=function(e){C&&(Y(!1),setTimeout(function(){N.focus(pe.current)},0)),z(null),e&&(h({index:-1,key:"",parentKey:""}),N.focus(A.current)),se(!1)},Tn=function(e){e.preventDefault(),C?(Y(!1),be.clear(A.current),H()):(Y(!0),be.set("menu",A.current,c&&c.autoZIndex||re.autoZIndex,c&&c.zIndex.menu||re.zIndex.menu),setTimeout(function(){zn()},1))},Fn=function(e){return D.current&&!(D.current.isSameNode(e.target)||D.current.contains(e.target)||pe.current&&pe.current.contains(e.target))};s.useImperativeHandle(i,function(){return{props:o,getElement:function(){return D.current}}}),Mt(function(){var a=Kt();!x&&B(a),o.breakpoint&&!U&&wn(a)}),G(function(){return U&&D.current&&(D.current.setAttribute(U,""),pt()),function(){dt()}},[U,o.breakpoint]),G(function(){C?Xe():Ee()},[C]),G(function(){if(Ve){var a=d.index!==-1?Ge(d.index):ne();K(a),Se(!1)}},[Ve]),G(function(){var a=N.findSingle(D.current,".p-menuitem-active > .p-megamenu-panel");return m?(Xe(),ke||be.set("menu",a,c&&c.autoZIndex||re.autoZIndex,c&&c.zIndex.menu||re.zIndex.menu)):Ee(),ke&&a&&a.previousElementSibling.scrollIntoView({block:"nearest",inline:"nearest"}),function(){Ee(),be.clear(a)}},[m,ke]),G(function(){var a=g.isNotEmpty(d.key)?"".concat(x,"_").concat(d.key):null;gn(a)},[d]),s.useEffect(function(){var a=o.model||[],e=at(a,0,null,"");In(e)},[o.model]),G(function(){var a=g.isNotEmpty(m)?m:null,e=a&&a.key===d.parentKey?a.items.reduce(function(t,n){return n.forEach(function(l){l.items.forEach(function(p){t.push(p)})}),t},[]):ce;Sn(e)},[d,m,ce]);var jn=function(e){if(Me(!0),d.index===-1){var t=ne(),n=M(t);h({index:t,key:n.key,parentKey:n.parentKey})}o.onFocus&&o.onFocus(e)},$n=function(e){Me(!1),h({index:-1,key:"",parentKey:""}),T.current="",se(!1),o.onBlur&&o.onBlur(e)},Bn=function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":Un(e);break;case"ArrowUp":Vn(e);break;case"ArrowLeft":Hn(e);break;case"ArrowRight":Jn(e);break;case"Home":Xn(e);break;case"End":Zn(e);break;case"Space":Wn(e);break;case"Enter":Ze(e);break;case"Escape":Gn(e);break;case"Tab":qn(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&g.isPrintableCharacter(e.key)&&et(e,e.key);break}},Un=function(e){if(e.preventDefault(),de){var t=d;if(g.isNotEmpty(m)&&m.key===d.key)m.key,an("_focusedItemInfo"),h(t);else{var n=M(d.index),l=O(n);l&&(V({originalEvent:e,processedItem:n}),n.key,n.parentKey,an("_focusedItemInfo"),h(t),T.current="")}setTimeout(function(){return Se(!0)},0)}else{var p=d.index!==-1?Ge(d.index):ne();K(p)}},Vn=function(e){var t=M(d.index),n=O(t);if(e.altKey&&de)d.index!==-1&&!n&&g.isNotEmpty(m)&&(d.index===0?(h({index:m.index,key:m.key,parentKey:m.parentKey}),z(null)):K(_e()));else{var l=d.index!==-1?qe(d.index):Qe();K(l)}e.preventDefault()},Hn=function(e){var t=M(d.index),n=O(t);if(n){if(de){var l=d.index!==-1?qe(d.index):Qe();K(l)}}else{ee&&g.isNotEmpty(m)&&t.columnIndex===0&&(h({index:m.index,key:m.key,parentKey:m.parentKey}),z(null));var p=t.columnIndex-1,v=S.findIndex(function(f){return f.columnIndex===p});v!==-1&&K(v)}e.preventDefault()},Jn=function(e){e.preventDefault();var t=M(d.index),n=O(t);if(n){if(ee)if(g.isNotEmpty(m)&&m.key===t.key)h({index:-1,key:"",parentKey:m.key});else{var l=M(d.index),p=O(l);p&&(V({originalEvent:e,processedItem:l}),h({index:-1,key:l.key,parentKey:l.parentKey}),T.current="")}setTimeout(function(){return Se(!0)},0)}else{var v=t.columnIndex+1,f=S.findIndex(function(y){return y.columnIndex===v});f!==-1&&K(f)}},Xn=function(e){K(_e()),e.preventDefault()},Zn=function(e){K(We()),e.preventDefault()},Ze=function(e){if(d.index!==-1){var t=N.findSingle(A.current,'li[id="'.concat(le,'"]')),n=t&&N.findSingle(t,'a[data-pc-section="action"]');n?n.click():t&&t.click()}e.preventDefault()},Wn=function(e){Ze(e)},Gn=function(e){g.isNotEmpty(m)&&(h({index:m.index,key:m.key}),z(null)),e.preventDefault()},qn=function(e){if(d.index!==-1){var t=M(d.index),n=O(t);!n&&V({originalEvent:e,processedItem:t})}H()},Pe=function(e){var t=Qn(e);return J(e)&&t&&t.toLocaleLowerCase().startsWith(T.current.toLocaleLowerCase())},J=function(e){return!!e&&!Z(e.item)&&!tt(e.item)},Yn=function(e){return J(e)&&Ke(e)},Ke=function(e){return g.isNotEmpty(m)?m.key===e.key:!1},_e=function(){return S.findIndex(function(e){return J(e)})},We=function(){return g.findLastIndex(S,function(e){return J(e)})},Ge=function(e){var t=e<S.length-1?S.slice(e+1).findIndex(function(n){return J(n)}):-1;return t>-1?t+e+1:e},qe=function(e){var t=e>0?g.findLastIndex(S.slice(0,e),function(n){return J(n)}):-1;return t>-1?t:e},Ye=function(){return S&&S.findIndex(function(e){return Yn(e)})},ne=function(){var e=Ye();return e<0?_e():e},Qe=function(){var e=Ye();return e<0?We():e},M=function(e){return g.isNotEmpty(S)?S[e]:null},Qn=function(e){return e&&e.item?fe(e):void 0},et=function(e,t){T.current=(T.current||"")+t;var n=-1,l=!1;return d.index!==-1?(n=S.slice(d.index).findIndex(function(p){return Pe(p)}),n=n===-1?S.slice(0,d.index).findIndex(function(p){return Pe(p)}):n+d.index):n=S.findIndex(function(p){return Pe(p)}),n!==-1&&(l=!0),n===-1&&d.index===-1&&(n=ne()),n!==-1&&K(n),me&&clearTimeout(me),me.current=setTimeout(function(){T.current="",me.current=null},500),l},K=function(e){var t=M(e),n=g.isNotEmpty(t)?t.key:"";h(q(q({},d),{},{index:e,key:n})),nt()},nt=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(x,"_").concat(e):le,n=N.findSingle(A.current,'li[id="'.concat(t,'"]'));n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"})},Ne=function(e){return"".concat(x,"_").concat(e.key)},X=function(e,t,n){return e&&e.item?g.getItemValue(e.item[t],n):void 0},fe=function(e){return X(e,"label")},ve=function(e){return g.isNotEmpty(m)?m.key===e.key:!1},Re=function(e){return X(e,"visible")!==!1},Z=function(e){return X(e,"disabled")},Ce=function(e){return le===Ne(e)},De=function(e){return g.isNotEmpty(e.items)},tt=function(e){return X(e,"separator")},O=function(e){return e&&g.isNotEmpty(e.items)},en=function(){return o.model.filter(function(e){return Re(e)&&!X(e,"separator")}).length},nn=function(e){return e-o.model.slice(0,e).filter(function(t){return Re(t)&&X(t,"separator")}).length+1},at=function a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",p=arguments.length>4?arguments[4]:void 0,v=[];return e&&e.forEach(function(f,y){var k=(l!==""?l+"_":"")+(p!==void 0?p+"_":"")+y,w={item:f,index:y,level:t,key:k,parent:n,parentKey:l,columnIndex:p!==void 0?p:n&&n.columnIndex!==void 0?n.columnIndex:y};w.items=t===0&&f.items&&f.items.length>0?f.items.map(function(_,F){return a(_,t+1,w,k,F)}):a(f.items,t+1,w,k),v.push(w)}),v},rt=function(e){var t=x+"_separator__"+e,n=r({id:t,key:t,className:b("separator"),role:"separator"},I("separator"));return s.createElement("li",n)},it=function(e){if(e.items){var t=r({className:b("submenuIcon")},I("submenuIcon")),n=ee?o.submenuIcon||s.createElement(zt,t):o.submenuIcon||s.createElement(Ot,t),l=ye.getJSXIcon(n,q({},t),{props:o});return l}return null},ot=function(e,t){var n=e.item;if(n.visible===!1)return null;if(n.separator)return rt(t);var l=Ne(e),p=P("p-menuitem-link",{"p-disabled":n.disabled}),v=r({className:P(n.icon,b("icon"))},I("icon")),f=r({className:b("label")},I("label")),y=P(n.icon,"p-menuitem-icon"),k=ye.getJSXIcon(n.icon,q({},v),{props:o}),w=n.label&&s.createElement("span",f,n.label),_=r({href:n.url||"#",className:b("action",{item:n}),target:n.target,tabIndex:"-1","aria-hidden":!0},L(e,"action",t)),F=Ce(e),W=Z(e),te=De(e),ae=ve(e),Ae=r({key:l,id:l,"aria-label":fe(e),"aria-disabled":W,"aria-haspopup":te?"menu":void 0,"aria-level":"2","aria-expanded":te?ae:void 0,"aria-setsize":en(),"aria-posinset":nn(t),"data-p-highlight":ae,"data-p-disabled":W,"data-p-focused":F,className:P(n.className,b("submenuItem",{focused:F,disabled:W,active:ae})),style:n.style,role:"menuitem"},L(e,"submenuItem",t)),ge=r({onClick:function(Et){return Ln({originalEvent:Et,processedItem:e})},className:b("content")},L(e,"content",t)),R=s.createElement("a",_,k,w,s.createElement(tn,null));if(n.template){var wt={className:p,labelClassName:"p-menuitem-text",iconClassName:y,element:R,props:o};R=g.getJSXElement(n.template,n,wt)}return s.createElement("li",Ae,s.createElement("div",ge,R))},ut=function(e,t){if(!Re(e))return null;var n=e.items.map(ot),l=e.id||x+"_sub_"+t,p=fe(e),v=Z(e),f=r({id:l,key:l,className:P(e.className,b("submenuHeader",{disabled:v})),style:e.style,role:"presentation","data-p-disabled":v},I("submenuHeader"));return s.createElement(s.Fragment,{key:l},s.createElement("li",f,p),n)},lt=function(e){return e.map(ut)},st=function(e,t,n){var l=e.item,p=l.label+"_column_"+n,v=lt(t),f=r({key:p,className:b("column",{category:l})},I("column")),y=m&&m.item===l?"block":"none",k=r({role:"menu",tabIndex:o.disabled?null:o.tabIndex||"0",className:b("submenu"),style:{display:y}},I("submenu"));return s.createElement("div",f,s.createElement("ul",k,v))},ct=function(e){return e.items?e.items.map(function(t,n){return st(e,t,n)}):null},mt=function(e){var t=e.item;if(t.items){var n=ct(e),l=r({className:b("panel")},I("panel")),p=r({className:b("grid")},I("grid"));return s.createElement("div",l,s.createElement("div",p,n))}return null},pt=function(){if(!Q.current){Q.current=N.createInlineStyle(c&&c.nonce||re.nonce,c&&c.styleContainer);var e="".concat(U),t=`
                    @media screen and (max-width: `.concat(o.breakpoint,`) {
                        .p-megamenu[`).concat(e,`] > .p-megamenu-root-list .p-menuitem-active .p-megamenu-panel {
                            position: relative;
                            left: 0;
                            box-shadow: none;
                            border-radius: 0;
                            background: inherit;
                        }

                        .p-megamenu[`).concat(e,`] {
                            width: 100%;
                            position: relative;
                            padding: 0.5rem;
                        }

                        .p-megamenu[`).concat(e,`] .p-megamenu-grid {
                            flex-wrap: wrap;
                        }

                        .p-megamenu[`).concat(e,`] .p-megamenu-button {
                            display: flex;
                        }

                        .p-megamenu[`).concat(e,`] .p-megamenu-root-list {
                            display: none;
                        }

                        .p-megamenu[`).concat(e,`] div[class*="p-megamenu-col-"] {
                            width: 100%;
                        }

                        .p-megamenu[`).concat(e,`].p-megamenu-mobile-active .p-megamenu-root-list {
                            left: 0;
                            top: 100%;
                            z-index: 1;
                            width: 100%;
                            display: flex;
                            padding: 0.5rem 0;
                            position: absolute;
                            flex-direction: column;
                        }

                        .p-megamenu[`).concat(e,`] .p-menuitem  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                            margin-left: auto;
                        }
                        
                        .p-megamenu[`).concat(e,`] .p-submenu-list .p-menuitem-content .p-menuitem-link {
                            padding-left: 2.25rem;
                        }

                        `).concat(de?`
                                    .p-megamenu[`.concat(e,`] .p-menuitem-active  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                                        transform: rotate(-180deg);
                                    }
                            `):"",`

                        `).concat(ee?`                                                                   
                                    .p-megamenu[`.concat(e,`] .p-menuitem  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                                        transform: rotate(90deg);
                                    }

                                    .p-megamenu[`).concat(e,`] .p-menuitem-active  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                                        transform: rotate(-90deg);
                                    }
                            `):"",`
                    }
                `);Q.current.innerHTML=t}},dt=function(){Q.current=N.removeInlineStyle(Q.current)},ft=function(e,t){var n=e.item,l=r({className:b("icon")},L(e,"icon",t)),p=ye.getJSXIcon(n.icon,q({},l),{props:o}),v=r({className:b("label")},L(e,"label",t)),f=n.label&&s.createElement("span",v,n.label),y=it(n),k=mt(e),w=r({href:n.url||"#",className:b("action",{item:n}),target:n.target,onFocus:function(R){return R.stopPropagation()},tabIndex:"-1","aria-hidden":!0},L(e,"action",t)),_=n.template?g.getJSXElement(n.template,n,w):s.createElement("a",w,p,f,y,s.createElement(tn,null)),F=Ne(e),W=Ce(e),te=Z(e),ae=r(cn({key:F,id:F,className:P(n.className,b("menuitem",{category:n,activeItemState:m,focused:W,disabled:te})),"aria-label":fe(n),"aria-level":"1","aria-setsize":en(),"aria-posinset":nn(t),"aria-expanded":De(e)?ve(e):void 0,"aria-haspopup":De(e)?"menu":void 0,"aria-disabled":Z(e),"data-p-highlight":ve(n),"data-p-disabled":te,"data-p-focused":W,style:n.style,role:"menuitem"},"data-p-disabled",n.disabled||!1),L(e,"menuitem",t)),Ae=r({onClick:function(R){return On({originalEvent:R,processedItem:e})},onMouseEnter:function(R){return Mn({originalEvent:R,processedItem:e})},className:b("content")},L(e,"content",t));return s.createElement("li",ae,s.createElement("div",Ae,_),k)},vt=function(){var e=r({ref:A,tabIndex:o.disabled?null:o.tabIndex||"0",className:b("menu"),onFocus:jn,onBlur:$n,onKeyDown:Bn,"aria-label":o.ariaLabel,"aria-labelledby":o.ariaLabelledBy,"aria-orientation":ee?"vertical":"horizontal","aria-activedescendant":dn?le:null,id:x+"_list",role:"menubar"},I("menu"));return ce?s.createElement("ul",e,ce.map(function(t,n){return ft(t,n)})):null},gt=function(){var e=r({className:b("start")},I("start"));if(o.start){var t=g.getJSXElement(o.start,o);return s.createElement("div",e,t)}return null},bt=function(){var e=r({className:b("end")},I("end"));if(o.end){var t=g.getJSXElement(o.end,o);return s.createElement("div",e,t)}return null},yt=function(){if(o.model&&o.model.length<1)return null;var e=r({className:b("menuButton"),href:"#",role:"button","aria-haspopup":!!(o.model&&o.model.length>0),"aria-expanded":C,"aria-controls":x,"aria-label":_t("navigation"),tabIndex:0,onClick:function(f){return Tn(f)}},I("menuButton")),t=r(I("menuButtonIcon")),n=o.menuIcon||s.createElement(Tt,t),l=ye.getJSXIcon(n,q({},t),{props:o}),p=s.createElement("a",xe({ref:pe},e),l);return p},ht=r({className:P(o.className,b("root",{mobileActiveState:C})),id:x,style:o.style},he.getOtherProps(o),I("root")),It=vt(),xt=gt(),St=bt(),kt=yt();return s.createElement("div",xe({id:o.id,ref:D},ht),xt,kt,It,St)}));mn.displayName="MegaMenu";const ra={title:"Menu/MegaMenu",component:mn,parameters:{layout:"centered"},argTypes:{breakpoint:{control:"text",description:"The breakpoint to define the maximum width boundary when responsiveness is enabled.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},end:{control:"text",description:"The template of trailing element",options:null},menuIcon:{control:"select",description:"Icon to display in the horizontal menu.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},model:{control:"object",description:"An array of menuitems.",options:null},orientation:{control:"select",description:"Defines the orientation, valid values are horizontal and vertical.",options:["horizontal","vertical"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},scrollHeight:{control:"text",description:"Maximum height of the options panel on responsive mode.",options:null},start:{control:"text",description:"The template of starting element.",options:null},submenuIcon:{control:"select",description:"Icon of the submenu.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},Ie={args:{unstyled:!1,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var un,ln,sn;Ie.parameters={...Ie.parameters,docs:{...(un=Ie.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(sn=(ln=Ie.parameters)==null?void 0:ln.docs)==null?void 0:sn.source}}};const ia=["Default"];export{Ie as Default,ia as __namedExportsOrder,ra as default};
