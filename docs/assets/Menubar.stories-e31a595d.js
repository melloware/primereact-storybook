import{r as c}from"./index-76fb7be0.js";import{a as Vn,c as X,D as R,O as y,U as Hn,Z as je,P as nn,b as Jn,I as $e}from"./api.esm-4644ee78.js";import{C as Wn,u as Xn}from"./componentbase.esm-1c796d7e.js";import{d as ln,h as Gn,e as Zn,a as qn,b as oe,c as Yn}from"./hooks.esm-d069ba29.js";import{B as Qn}from"./index.esm-8f2f3fba.js";import{A as et}from"./index.esm-9930a1d0.js";import{A as nt}from"./index.esm-7585bae1.js";import{R as tt}from"./ripple.esm-1f3221bd.js";import"./_commonjsHelpers-de833af9.js";import"./iconbase.esm-60e86362.js";function ue(n){"@babel/helpers - typeof";return ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ue(n)}function rt(n,a){if(ue(n)!=="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var l=i.call(n,a||"default");if(ue(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}function it(n){var a=rt(n,"string");return ue(a)==="symbol"?a:String(a)}function W(n,a,i){return a=it(a),a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i,n}function at(n){if(Array.isArray(n))return n}function ot(n,a){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var l,s,K,D,E=[],_=!0,T=!1;try{if(K=(i=i.call(n)).next,a===0){if(Object(i)!==i)return;_=!1}else for(;!(_=(l=K.call(i)).done)&&(E.push(l.value),E.length!==a);_=!0);}catch(x){T=!0,s=x}finally{try{if(!_&&i.return!=null&&(D=i.return(),Object(D)!==D))return}finally{if(T)throw s}}return E}}function tn(n,a){(a==null||a>n.length)&&(a=n.length);for(var i=0,l=new Array(a);i<a;i++)l[i]=n[i];return l}function ut(n,a){if(n){if(typeof n=="string")return tn(n,a);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return tn(n,a)}}function st(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(n,a){return at(n)||ot(n,a)||ut(n,a)||st()}var lt={start:"p-menubar-start",end:"p-menubar-end",button:"p-menubar-button",root:function(a){var i=a.mobileActiveState;return X("p-menubar p-component",{"p-menubar-mobile-active":i})},separator:"p-menuitem-separator",icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",menuitem:function(a){var i=a.active,l=a.focused,s=a.disabled;return X("p-menuitem",{"p-menuitem-active p-highlight":i,"p-focus":l,"p-disabled":s})},menu:"p-menubar-root-list",content:"p-menuitem-content",submenu:"p-submenu-list",action:function(a){var i=a.disabled;return X("p-menuitem-link",{"p-disabled":i})}},ct=`
@layer primereact {
    .p-menubar {
        display: flex;
        align-items: center;
    }

    .p-menubar ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-menubar .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-menubar .p-menuitem-text {
        line-height: 1;
    }

    .p-menubar .p-menuitem {
        position: relative;
    }

    .p-menubar-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-menubar-root-list > li ul {
        display: none;
        z-index: 1;
    }

    .p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
        display: block;
    }

    .p-menubar .p-submenu-list {
        display: none;
        position: absolute;
        z-index: 1;
    }

    .p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-menubar .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-button {
        display: none;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
}
`,Ee=Wn.extend({defaultProps:{__TYPE:"Menubar",id:null,model:null,style:null,className:null,start:null,ariaLabel:null,ariaLabelledBy:null,onFocus:null,onBlur:null,submenuIcon:null,menuIcon:null,end:null,children:void 0},css:{classes:lt,styles:ct}});function rn(n,a){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);a&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),i.push.apply(i,l)}return i}function Fe(n){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?rn(Object(i),!0).forEach(function(l){W(n,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):rn(Object(i)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(i,l))})}return n}var Be=c.memo(c.forwardRef(function(n,a){var i=ln(),l=n.ptm,s=n.cx,K=function(t,m,f){return l(m,{props:n,hostName:n.hostName,context:{item:t,index:f,active:S(t),focused:ee(t),disabled:G(t),level:n.level}})},D=function(t,m){if(G(m)||n.mobileActive){t.preventDefault();return}n.onItemMouseEnter&&n.onItemMouseEnter({originalEvent:t,processedItem:m})},E=function(t,m){var f=m.item;if(G(m)){t.preventDefault();return}f.url||t.preventDefault(),f.command&&f.command({originalEvent:t,item:f}),_({originalEvent:t,processedItem:m,isFocus:!0})},_=function(t){n.onLeafClick&&n.onLeafClick(t)},T=function(t){return"".concat(n.id,"_").concat(t.key)},x=function(t,m,f){return t&&t.item?y.getItemValue(t.item[m],f):void 0},S=function(t){return n.activeItemPath.some(function(m){return m.key===t.key})},A=function(t){return x(t,"visible")!==!1},G=function(t){return x(t,"disabled")},ee=function(t){return n.focusedItemId===T(t)},se=function(t){return y.isNotEmpty(t.items)},le=function(){return n.model.filter(function(t){return A(t)&&!x(t,"separator")}).length},Pe=function(t){return t-n.model.slice(0,t).filter(function(m){return A(m)&&x(m,"separator")}).length+1},ce=function(t){var m=n.id+"_separator_"+t,f=i({id:m,key:m,className:s("separator"),role:"separator"},l("separator",{hostName:n.hostName}));return c.createElement("li",f)},p=function(t){var m=t&&t.items;return m?c.createElement(Be,{id:n.id,hostName:n.hostName,menuProps:n.menuProps,level:n.level+1,model:m,activeItemPath:n.activeItemPath,focusedItemId:n.focusedItemId,onLeafClick:_,onItemMouseEnter:n.onItemMouseEnter,submenuIcon:n.submenuIcon,ptm:l,style:{display:S(t)?"block":"none"},cx:s}):null},I=function(t,m){var f=t.item;if(!A(t))return null;var de=T(t),ne=S(t),te=ee(t),O=G(t)||!1,ve=se(t),Re=X("p-menuitem-link",{"p-disabled":O}),be=X("p-menuitem-icon",x(t,"icon")),ye=i({className:s("icon")},K(t,"icon",m)),q=$e.getJSXIcon(f.icon,Fe({},ye),{props:n.menuProps}),_e=i({className:s("label")},K(t,"label",m)),ge=f.label&&c.createElement("span",_e,f.label),Ie=x(t,"items"),$="p-submenu-icon",M=i({className:s("submenuIcon")},K(t,"submenuIcon",m)),g=Ie&&$e.getJSXIcon(n.root?n.submenuIcon||c.createElement(et,M):n.submenuIcon||c.createElement(nt,M),Fe({},M),{props:Fe({menuProps:n.menuProps},n)}),B=p(t),C=i({href:f.url||"#",tabIndex:"-1","aria-hidden":"true",className:s("action",{disabled:O}),onFocus:function(z){return z.stopPropagation()},target:x(t,"target"),"aria-haspopup":Ie!=null},K(t,"action",m)),N=c.createElement("a",C,q,ge,g,c.createElement(tt,null));if(f.template){var re={className:Re,labelClassName:"p-menuitem-text",iconClassName:be,submenuIconClassName:$,element:N,props:n};N=y.getJSXElement(f.template,f,re)}var ie=i({onClick:function(z){return E(z,t)},onMouseEnter:function(z){return D(z,t)},className:s("content")},K(t,"content",m)),L=x(t,"className"),U=i(W({id:de,key:de,role:"menuitem","aria-label":f.label,"aria-disabled":O,"aria-expanded":ve?ne:void 0,"aria-haspopup":ve&&!f.url?"menu":void 0,"aria-level":n.level+1,"aria-setsize":le(),"aria-posinset":Pe(m),"data-p-highlight":ne,"data-p-focused":te,"data-p-disabled":O,className:X(L,s("menuitem",{active:ne,focused:te,disabled:O}))},"data-p-disabled",O||!1),K(t,"menuitem",m));return c.createElement("li",U,c.createElement("div",ie,N),B)},Ke=function(t,m){return x(t,"separator")?ce(m):I(t,m)},pe=function(){return n.model?n.model.map(Ke):null},Z=n.root?"menubar":"menu",me=n.root?"menu":"submenu",Oe=n.root?"0":null,fe=pe(),h=i({ref:a,className:s(me),level:n.level,onFocus:n.onFocus,onBlur:n.onBlur,onKeyDown:n.onKeyDown,id:n.id,tabIndex:Oe,"aria-activedescendant":n.ariaActivedescendant,style:n.style,role:Z},l(me));return c.createElement("ul",h,fe)}));Be.displayName="MenubarSub";function an(n,a){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);a&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),i.push.apply(i,l)}return i}function Te(n){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?an(Object(i),!0).forEach(function(l){W(n,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):an(Object(i)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(i,l))})}return n}var cn=c.memo(c.forwardRef(function(n,a){var i=ln(),l=c.useContext(Vn),s=Ee.getProps(n,l),K=c.useState(s.id),D=P(K,2),E=D[0],_=D[1],T=c.useState(!1),x=P(T,2),S=x[0],A=x[1],G=c.useState(!1),ee=P(G,2),se=ee[0],le=ee[1],Pe=c.useState({index:-1,level:0,parentKey:""}),ce=P(Pe,2),p=ce[0],I=ce[1],Ke=c.useState(null),pe=P(Ke,2),Z=pe[0],me=pe[1],Oe=c.useState([]),fe=P(Oe,2),h=fe[0],v=fe[1],t=c.useState([]),m=P(t,2),f=m[0],de=m[1],ne=c.useState([]),te=P(ne,2),O=te[0],ve=te[1],Re=c.useState(!1),be=P(Re,2),ye=be[0],q=be[1],_e=c.useState(!1),ge=P(_e,2),Ie=ge[0],$=ge[1],M=c.useRef(null),g=c.useRef(null),B=c.useRef(null),C=c.useRef(""),N=c.useRef(null),re=c.useRef(!1),ie=Ee.setMetaData({props:s,state:{id:E,mobileActive:S}}),L=ie.ptm,U=ie.cx,he=ie.isUnstyled;Xn(Ee.css.styles,he,{name:"menubar"});var z=Gn({type:"click",listener:function(e){if(dn(e)){var r=M.current&&!M.current.contains(e.target);r&&Y()}}}),Ue=P(z,2),ze=Ue[0],Ve=Ue[1],pn=Zn({listener:function(e){R.isTouchDevice()||Y(e)}}),He=P(pn,2),Je=He[0],We=He[1],De=function(e){S?(A(!1),Y()):(A(!0),setTimeout(function(){mn()},1)),e.preventDefault()},mn=function(){I({index:H(),level:0,parentKey:""}),R.focus(g.current)},Y=function(e){S&&(A(!1),setTimeout(function(){R.focus(B.current)},0)),v([]),I({index:-1,level:0,parentKey:""}),e&&R.focus(g.current),$(!1)},fn=function(e){(e.code==="Enter"||e.code==="Space")&&De(e)},dn=function(e){return g.current!==e.target&&!g.current.contains(e.target)&&B.current!==e.target&&!B.current.contains(e.target)},Ae=function(e,r){return e?y.getItemValue(e[r]):void 0},vn=function(e){return Ae(e,"label")},bn=function(e){return Ae(e,"disabled")},yn=function(e){return Ae(e,"separator")},gn=function(e){return e?vn(e.item):void 0},ae=function(e){return e&&y.isNotEmpty(e.items)},In=function(e){le(!0),I(p.index!==-1?p:{index:H(),level:0,parentKey:""}),s.onFocus&&s.onFocus(e)},hn=function(e){le(!1),I({index:-1,level:0,parentKey:""}),C.current="",$(!1),s.onBlur&&s.onBlur(e)},xn=function(e){var r=e.metaKey||e.ctrlKey,u=e.code;switch(u){case"ArrowDown":En(e);break;case"ArrowUp":kn(e);break;case"ArrowLeft":Xe(e);break;case"ArrowRight":Pn(e);break;case"Home":Kn(e);break;case"End":On(e);break;case"Space":Rn(e);break;case"Enter":Ge(e);break;case"Escape":_n();break;case"Tab":Dn(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!r&&y.isPrintableCharacter(e.key)&&Mn(e,e.key);break}},V=function(e){var r=e.processedItem,u=e.isFocus;if(!y.isEmpty(r)){var b=r.index,d=r.key,k=r.level,w=r.parentKey,F=r.items,xe=y.isNotEmpty(F),Se=h.filter(function(J){return J.parentKey!==w&&J.parentKey!==d});xe&&Se.push(r),I({index:b,level:k,parentKey:w}),v(Se),xe&&$(!0),u&&R.focus(g.current)}},Sn=function(e){var r=e.originalEvent,u=e.processedItem,b=ae(u),d=y.isEmpty(u.parent),k=Ze(u);if(k){var w=u.index,F=u.key,xe=u.level,Se=u.parentKey;v(h.filter(function(we){return F!==we.key&&F.startsWith(we.key)})),I({index:w,level:xe,parentKey:Se}),b||$(!d),setTimeout(function(){R.focus(g.current),b&&$(!0)},0)}else if(b)R.focus(g.current),V({originalEvent:r,processedItem:u});else{var J=d?u:h.find(function(we){return we.parentKey===""}),zn=J?J.index:-1;Y(r),I({index:zn,parentKey:J?J.parentKey:""}),A(!1)}},wn=function(e){!S&&Ie&&V(e)},En=function(e){var r=f[p.index],u=r?y.isEmpty(r.parent):null;if(u){var b=ae(r);b&&(V({originalEvent:e,processedItem:r}),I({index:-1,parentKey:r.key}),setTimeout(function(){return q(!0)},0))}else{var d=p.index!==-1?Ne(p.index):H();j(d)}e.preventDefault()},kn=function(e){var r=f[p.index],u=y.isEmpty(r.parent);if(u){var b=ae(r);b&&(V({originalEvent:e,processedItem:r}),I({index:-1,parentKey:r.key}),re.current=!0,setTimeout(function(){return q(!0)},0))}else{var d=h.find(function(w){return w.key===r.parentKey});if(p.index===0&&d&&d.parentKey==="")I({index:-1,parentKey:d?d.parentKey:""}),C.current="",Xe(e);else{var k=p.index!==-1?Ye(p.index):en();j(k)}}e.preventDefault()},Xe=function(e){var r=f[p.index],u=r?h.find(function(d){return d.key===r.parentKey}):null;if(u)V({originalEvent:e,processedItem:u}),v(h.filter(function(d){return d.key!==u.key}));else{var b=p.index!==-1?Ye(p.index):en();j(b)}e.preventDefault()},Pn=function(e){var r=f[p.index],u=r?h.find(function(k){return k.key===r.parentKey}):null;if(u){var b=ae(r);b&&(V({originalEvent:e,processedItem:r}),I({index:-1,parentKey:r.key}),setTimeout(function(){return q(!0)},0))}else{var d=p.index!==-1?Ne(p.index):H();j(d)}e.preventDefault()},Kn=function(e){j(qe()),e.preventDefault()},On=function(e){j(Ce()),e.preventDefault()},Ge=function(e){if(p.index!==-1){var r=R.findSingle(g.current,'li[id="'.concat("".concat(Z),'"]')),u=r&&R.findSingle(r,'a[data-pc-section="action"]');u?u.click():r&&r.click()}e.preventDefault()},Rn=function(e){Ge(e)},_n=function(e){Y(!0),I({focusedItemInfo:p,index:H()})},Dn=function(e){if(p.index!==-1){var r=f[p.index],u=ae(r);!u&&V({originalEvent:e,processedItem:r})}Y()},Me=function(e){return Q(e)&&gn(e).toLocaleLowerCase().startsWith(C.current.toLocaleLowerCase())},Q=function(e){return!!e&&!bn(e.item)&&!yn(e.item)},An=function(e){return Q(e)&&Ze(e)},Ze=function(e){return h.some(function(r){return r.key===e.key})},qe=function(){return f.findIndex(function(e){return Q(e)})},Ce=function(){return y.findLastIndex(f,function(e){return Q(e)})},Ne=function(e){var r=e<f.length-1?f.slice(e+1).findIndex(function(u){return Q(u)}):-1;return r>-1?r+e+1:e},Ye=function(e){var r=e>0?y.findLastIndex(f.slice(0,e),function(u){return Q(u)}):-1;return r>-1?r:e},Qe=function(){return f.findIndex(function(e){return An(e)})},H=function(){var e=Qe();return e<0?qe():e},en=function(){var e=Qe();return e<0?Ce():e},Mn=function(e,r){C.current=(C.current||"")+r;var u=-1,b=!1;return p.index!==-1?(u=f.slice(p.index).findIndex(function(d){return Me(d)}),u=u===-1?f.slice(0,p.index).findIndex(function(d){return Me(d)}):u+p.index):u=f.findIndex(function(d){return Me(d)}),u!==-1&&(b=!0),u===-1&&p.index===-1&&(u=H()),u!==-1&&j(u),N.current&&clearTimeout(N.current),N.current=setTimeout(function(){C.current="",N.current=null},500),b},j=function(e){p.index!==e&&(I(Te(Te({},p),{},{index:e})),Cn())},Cn=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,r=e!==-1?"".concat(E,"_").concat(e):Z,u=R.findSingle(g.current,'li[id="'.concat(r,'"]'));u&&u.scrollIntoView&&u.scrollIntoView({block:"nearest",inline:"start"})},Le=c.useCallback(function(o){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",b=[];return o&&o.forEach(function(d,k){var w=(u!==""?u+"_":"")+k,F={item:d,index:k,level:e,key:w,parent:r,parentKey:u};F.items=Le(d.items,e+1,F,w),b.push(F)}),b},[]);qn(function(){E||_(Hn())}),oe(function(){S?(ze(),Je(),je.set("menu",g.current,l&&l.autoZIndex||nn.autoZIndex,l&&l.zIndex.menu||nn.zIndex.menu)):(We(),Ve(),je.clear(g.current))},[S]),c.useEffect(function(){var o=s.model||[],e=Le(o,0,null,"");ve(e)},[s.model,Le]),oe(function(){var o=h.find(function(r){return r.key===p.parentKey}),e=o?o.items:O;de(e)},[h,p,O]),oe(function(){y.isNotEmpty(h)?(ze(),Je()):(Ve(),We())},[h]),oe(function(){if(ye){var o=p.index!==-1?Ne(p.index):re.current?Ce():H();j(o),re.current=!1,q(!1)}},[ye]),oe(function(){me(p.index!==-1?"".concat(E).concat(y.isNotEmpty(p.parentKey)?"_"+p.parentKey:"","_").concat(p.index):null)},[p]),Yn(function(){je.clear(g.current)}),c.useImperativeHandle(a,function(){return{props:s,toggle:De,getElement:function(){return M.current},getRootMenu:function(){return g.current},getMenuButton:function(){return B.current}}});var Nn=function(){if(s.start){var e=y.getJSXElement(s.start,s),r=i({className:U("start")},L("start"));return c.createElement("div",r,e)}return null},Ln=function(){if(s.end){var e=y.getJSXElement(s.end,s),r=i({className:U("end")},L("end"));return c.createElement("div",r,e)}return null},jn=function(){if(s.model&&s.model.length<1)return null;var e=i(W(W(W(W({ref:B,href:"#",tabIndex:"0","aria-haspopup":!!(S&&s.model&&s.model.lentgh>0),"aria-expanded":S,"aria-label":Jn("navigation"),"aria-controls":E,role:"button"},"tabIndex",0),"className",U("button")),"onKeyDown",function(w){return fn(w)}),"onClick",function(w){return De(w)}),L("button")),r=i(L("popupIcon")),u=s.menuIcon||c.createElement(Qn,r),b=$e.getJSXIcon(u,Te({},r),{props:s}),d=c.createElement("a",e,b);return d},Fn=Nn(),Tn=Ln(),$n=jn(),Bn=c.createElement(Be,{hostName:"Menubar",ariaActivedescendant:se?Z:void 0,level:0,id:E,ref:g,menuProps:s,model:O,onLeafClick:Sn,onItemMouseEnter:wn,onFocus:In,onBlur:hn,onKeyDown:xn,root:!0,activeItemPath:h,focusedItemId:se?Z:void 0,submenuIcon:s.submenuIcon,ptm:L,cx:U}),Un=i({id:s.id,ref:M,className:X(s.className,U("root",{mobileActiveState:S})),style:s.style},Ee.getOtherProps(s),L("root"));return c.createElement("div",Un,Fn,$n,Bn,Tn)}));cn.displayName="Menubar";const xt={title:"Menu/Menubar",component:cn,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},end:{control:"text",description:"The template of trailing element.",options:null},menuIcon:{control:"select",description:"Icon of the menu.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},model:{control:"object",description:"An array of menuitems.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},start:{control:"text",description:"The template of starting element.",options:null},submenuIcon:{control:"select",description:"Icon of the submenu.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},ke={args:{unstyled:!1,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var on,un,sn;ke.parameters={...ke.parameters,docs:{...(on=ke.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(sn=(un=ke.parameters)==null?void 0:un.docs)==null?void 0:sn.source}}};const St=["Default"];export{ke as Default,St as __namedExportsOrder,xt as default};
