import{r as n}from"./index-76fb7be0.js";import{E as ce,a as ie,D as j,c as me}from"./api.esm-4644ee78.js";import{C as ue,u as pe}from"./componentbase.esm-1c796d7e.js";import{d as fe}from"./hooks.esm-d069ba29.js";import"./_commonjsHelpers-de833af9.js";var g=ce();function I(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,f=new Array(r);t<r;t++)f[t]=e[t];return f}function de(e){if(Array.isArray(e))return I(e)}function ve(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function B(e,r){if(e){if(typeof e=="string")return I(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,r)}}function ye(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(e){return de(e)||ve(e)||B(e)||ye()}function ge(e){if(Array.isArray(e))return e}function he(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var f,o,h,y,m=[],p=!0,x=!1;try{if(h=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;p=!1}else for(;!(p=(f=h.call(t)).done)&&(m.push(f.value),m.length!==r);p=!0);}catch(b){x=!0,o=b}finally{try{if(!p&&t.return!=null&&(y=t.return(),Object(y)!==y))return}finally{if(x)throw o}}return m}}function xe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(e,r){return ge(e)||he(e,r)||B(e,r)||xe()}var be={root:"p-terminal p-component",content:"p-terminal-content",container:"p-terminal-prompt-container",command:"p-terminal-command",commandText:"p-terminal-input",prompt:"p-terminal-prompt",response:"p-terminal-response"},Se=`
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
`,_=ue.extend({defaultProps:{__TYPE:"Terminal",id:null,style:null,className:null,welcomeMessage:null,prompt:null,children:void 0},css:{classes:be,styles:Se}}),K=n.memo(n.forwardRef(function(e,r){var t=fe(),f=n.useContext(ie),o=_.getProps(e,f),h=n.useState(""),y=T(h,2),m=y[0],p=y[1],x=n.useState([]),b=T(x,2),s=b[0],C=b[1],L=n.useState(0),N=T(L,2),$=N[0],w=N[1],Y=n.useState(""),k=T(Y,2),q=k[0],z=k[1],S=n.useRef(null),A=n.useRef(null),P=n.useRef(!1),R=_.setMetaData({props:o,state:{commandText:m,commands:s}}),u=R.ptm,d=R.cx,F=R.isUnstyled;pe(_.css.styles,F,{name:"terminal"});var D=t({className:d("prompt")},u("prompt")),G=function(){j.focus(A.current)},J=function(a){p(a.target.value)},Q=function(a){switch(a.code){case"ArrowUp":if(s&&s.length){var c=$-1<0?s.length-1:$-1,v=s[c];w(c),p(v.text)}break;case"Enter":if(m){var i=O(s);i.push({text:m}),w(function(M){return M+1}),p(""),C(i),z(m),P.current=!0}break}};n.useImperativeHandle(r,function(){return{props:o,focus:function(){return j.focus(A.current)},getElement:function(){return S.current}}}),n.useEffect(function(){var l=function(v){if(s&&s.length>0){var i=O(s);i[i.length-1].response=v,C(i)}},a=function(){C([]),w(0)};return g.on("response",l),g.on("clear",a),function(){g.off("response",l),g.off("clear",a)}},[s]),n.useEffect(function(){P.current&&(g.emit("command",q),P.current=!1),S.current.scrollTop=S.current.scrollHeight});var V=function(){if(o.welcomeMessage){var a=t(u("welcomeMessage"));return n.createElement("div",a,o.welcomeMessage)}return null},X=function(a,c){var v=a.text,i=a.response,M=v+"_"+c,oe=t({key:M},u("commands")),se=t({className:d("command")},u("command")),le=t({className:d("response"),"aria-live":"polite"},u("response"));return n.createElement("div",oe,n.createElement("span",D,o.prompt," "),n.createElement("span",se,v),n.createElement("div",le,i))},Z=function(){var a=s.map(X),c=t({className:d("content")},u("content"));return n.createElement("div",c,a)},ee=function(){var a=t({className:d("container")},u("container")),c=t({ref:A,value:m,type:"text",className:d("commandText"),autoComplete:"off",onChange:function(i){return J(i)},onKeyDown:Q},u("commandText"));return n.createElement("div",a,n.createElement("span",D,o.prompt," "),n.createElement("input",c))},te=V(),ne=Z(),re=ee(),ae=t({id:o.id,ref:S,className:me(o.className,d("root")),style:o.style,onClick:G},_.getOtherProps(o),u("root"));return n.createElement("div",ae,te,ne,re)}));K.displayName="Terminal";const Ae={title:"Misc/Terminal",component:K,parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"Used to get the child elements of the component.",options:null},prompt:{control:"text",description:"Prompt text for each command.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},welcomeMessage:{control:"text",description:"Initial text to display on terminal.",options:null}}},E={args:{unstyled:!1}};var U,H,W;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(W=(H=E.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const Pe=["Default"];export{E as Default,Pe as __namedExportsOrder,Ae as default};
