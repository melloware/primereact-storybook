import{r as t}from"./index-76fb7be0.js";import{E as le,P as ie,m as f,D as O,c as me}from"./api.esm-e57be548.js";import{C as ue,u as pe}from"./componentbase.esm-f35515f0.js";import"./_commonjsHelpers-de833af9.js";import"./hooks.esm-2e882e60.js";var x=le();function N(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,a=new Array(r);n<r;n++)a[n]=e[n];return a}function fe(e){if(Array.isArray(e))return N(e)}function de(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function K(e,r){if(e){if(typeof e=="string")return N(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,r)}}function ve(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(e){return fe(e)||de(e)||K(e)||ve()}function ye(e){if(Array.isArray(e))return e}function he(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,b,h,i,d=[],y=!0,g=!1;try{if(h=(n=n.call(e)).next,r===0){if(Object(n)!==n)return;y=!1}else for(;!(y=(a=h.call(n)).done)&&(d.push(a.value),d.length!==r);y=!0);}catch(s){g=!0,b=s}finally{try{if(!y&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(g)throw b}}return d}}function ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(e,r){return ye(e)||he(e,r)||K(e,r)||ge()}var xe={root:"p-terminal p-component",content:"p-terminal-content",container:"p-terminal-prompt-container",command:"p-terminal-command",commandText:"p-terminal-input",prompt:"p-terminal-prompt",response:"p-terminal-response"},be=`
@layer primereact {
    .p-terminal {
        height: 18rem;
        overflow: auto;
    }
    
    .p-terminal-prompt-container {
        display: flex;
        align-items: center;
    }
    
    .p-terminal-input {
        flex: 1 1 auto;
        border: 0 none;
        background-color: transparent;
        color: inherit;
        padding: 0;
        outline: 0 none;
    }
    
    .p-terminal-input::-ms-clear {
        display: none;
    }        
}
`,E=ue.extend({defaultProps:{__TYPE:"Terminal",id:null,style:null,className:null,welcomeMessage:null,prompt:null,children:void 0},css:{classes:xe,styles:be}}),L=t.memo(t.forwardRef(function(e,r){var n=t.useContext(ie),a=E.getProps(e,n),b=t.useState(""),h=_(b,2),i=h[0],d=h[1],y=t.useState([]),g=_(y,2),s=g[0],w=g[1],Y=t.useState(0),k=_(Y,2),D=k[0],P=k[1],q=t.useState(""),$=_(q,2),z=$[0],F=$[1],S=t.useRef(null),A=t.useRef(null),R=t.useRef(!1),I=E.setMetaData({props:a,state:{commandText:i,commands:s}}),m=I.ptm,v=I.cx,G=I.isUnstyled;pe(E.css.styles,G,{name:"terminal"});var j=f({className:v("prompt")},m("prompt")),J=function(){O.focus(A.current)},Q=function(o){d(o.target.value)},V=function(o){var u=o.which||o.keyCode;switch(u){case 38:if(s&&s.length){var p=D-1<0?s.length-1:D-1,l=s[p];P(p),d(l.text)}break;case 13:if(i){var T=H(s);T.push({text:i}),P(function(M){return M+1}),d(""),w(T),F(i),R.current=!0}break}};t.useImperativeHandle(r,function(){return{props:a,focus:function(){return O.focus(A.current)},getElement:function(){return S.current}}}),t.useEffect(function(){var c=function(p){if(s&&s.length>0){var l=H(s);l[l.length-1].response=p,w(l)}},o=function(){w([]),P(0)};return x.on("response",c),x.on("clear",o),function(){x.off("response",c),x.off("clear",o)}},[s]),t.useEffect(function(){R.current&&(x.emit("command",z),R.current=!1),S.current.scrollTop=S.current.scrollHeight});var X=function(){if(a.welcomeMessage){var o=f(m("welcomeMessage"));return t.createElement("div",o,a.welcomeMessage)}return null},Z=function(o,u){var p=o.text,l=o.response,T=p+"_"+u,M=f({key:T},m("commands")),se=f({className:v("command")},m("command")),ce=f({className:v("response")},m("response"));return t.createElement("div",M,t.createElement("span",j,a.prompt," "),t.createElement("span",se,p),t.createElement("div",ce,l))},ee=function(){var o=s.map(Z),u=f({className:v("content")},m("content"));return t.createElement("div",u,o)},te=function(){var o=f({className:v("container")},m("container")),u=f({ref:A,value:i,type:"text",className:v("commandText"),autoComplete:"off",onChange:function(l){return Q(l)},onKeyDown:function(l){return V(l)}},m("commandText"));return t.createElement("div",o,t.createElement("span",j,a.prompt," "),t.createElement("input",u))},ne=X(),re=ee(),ae=te(),oe=f({id:a.id,ref:S,className:me(a.className,v("root")),style:a.style,onClick:J},E.getOtherProps(a),m("root"));return t.createElement("div",oe,ne,re,ae)}));L.displayName="Terminal";const we={title:"Misc/Terminal",component:L,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},prompt:{control:"text",description:"Prompt text for each command.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},welcomeMessage:{control:"text",description:"Initial text to display on terminal.",options:null}}},C={args:{unstyled:!1}};var U,W,B;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(B=(W=C.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const Pe=["Default"];export{C as Default,Pe as __namedExportsOrder,we as default};
