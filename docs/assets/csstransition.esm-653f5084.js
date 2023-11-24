import{R as g,r as P}from"./index-76fb7be0.js";import{e as G}from"./hooks.esm-c93f10ee.js";import{P as X,b as K,O as _}from"./api.esm-2e2d159c.js";import{_ as A,a as V}from"./inheritsLoose-9eefaa95.js";import{R as O}from"./index-d3ea75b5.js";function M(r,s){if(r==null)return{};var e={},t=Object.keys(r),i,n;for(n=0;n<t.length;n++)i=t[n],!(s.indexOf(i)>=0)&&(e[i]=r[i]);return e}function W(r,s){return r.classList?!!s&&r.classList.contains(s):(" "+(r.className.baseVal||r.className)+" ").indexOf(" "+s+" ")!==-1}function F(r,s){r.classList?r.classList.add(s):W(r,s)||(typeof r.className=="string"?r.className=r.className+" "+s:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+s))}function k(r,s){return r.replace(new RegExp("(^|\\s)"+s+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function B(r,s){r.classList?r.classList.remove(s):typeof r.className=="string"?r.className=k(r.className,s):r.setAttribute("class",k(r.className&&r.className.baseVal||"",s))}const w={disabled:!1},U=g.createContext(null);var I=function(s){return s.scrollTop},S="unmounted",x="exited",h="entering",b="entered",D="exiting",v=function(r){A(s,r);function s(t,i){var n;n=r.call(this,t,i)||this;var a=i,o=a&&!a.isMounting?t.enter:t.appear,u;return n.appearStatus=null,t.in?o?(u=x,n.appearStatus=h):u=b:t.unmountOnExit||t.mountOnEnter?u=S:u=x,n.state={status:u},n.nextCallback=null,n}s.getDerivedStateFromProps=function(i,n){var a=i.in;return a&&n.status===S?{status:x}:null};var e=s.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(i){var n=null;if(i!==this.props){var a=this.state.status;this.props.in?a!==h&&a!==b&&(n=h):(a===h||a===b)&&(n=D)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var i=this.props.timeout,n,a,o;return n=a=o=i,i!=null&&typeof i!="number"&&(n=i.exit,a=i.enter,o=i.appear!==void 0?i.appear:a),{exit:n,enter:a,appear:o}},e.updateStatus=function(i,n){if(i===void 0&&(i=!1),n!==null)if(this.cancelNextCallback(),n===h){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:O.findDOMNode(this);a&&I(a)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===x&&this.setState({status:S})},e.performEnter=function(i){var n=this,a=this.props.enter,o=this.context?this.context.isMounting:i,u=this.props.nodeRef?[o]:[O.findDOMNode(this),o],p=u[0],l=u[1],c=this.getTimeouts(),E=o?c.appear:c.enter;if(!i&&!a||w.disabled){this.safeSetState({status:b},function(){n.props.onEntered(p)});return}this.props.onEnter(p,l),this.safeSetState({status:h},function(){n.props.onEntering(p,l),n.onTransitionEnd(E,function(){n.safeSetState({status:b},function(){n.props.onEntered(p,l)})})})},e.performExit=function(){var i=this,n=this.props.exit,a=this.getTimeouts(),o=this.props.nodeRef?void 0:O.findDOMNode(this);if(!n||w.disabled){this.safeSetState({status:x},function(){i.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:D},function(){i.props.onExiting(o),i.onTransitionEnd(a.exit,function(){i.safeSetState({status:x},function(){i.props.onExited(o)})})})},e.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(i,n){n=this.setNextCallback(n),this.setState(i,n)},e.setNextCallback=function(i){var n=this,a=!0;return this.nextCallback=function(o){a&&(a=!1,n.nextCallback=null,i(o))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},e.onTransitionEnd=function(i,n){this.setNextCallback(n);var a=this.props.nodeRef?this.props.nodeRef.current:O.findDOMNode(this),o=i==null&&!this.props.addEndListener;if(!a||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],p=u[0],l=u[1];this.props.addEndListener(p,l)}i!=null&&setTimeout(this.nextCallback,i)},e.render=function(){var i=this.state.status;if(i===S)return null;var n=this.props,a=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var o=M(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return g.createElement(U.Provider,{value:null},typeof a=="function"?a(i,o):g.cloneElement(g.Children.only(a),o))},s}(g.Component);v.contextType=U;v.propTypes={};function C(){}v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C};v.UNMOUNTED=S;v.EXITED=x;v.ENTERING=h;v.ENTERED=b;v.EXITING=D;const H=v;var Y=function(s,e){return s&&e&&e.split(" ").forEach(function(t){return F(s,t)})},y=function(s,e){return s&&e&&e.split(" ").forEach(function(t){return B(s,t)})},j=function(r){A(s,r);function s(){for(var t,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return t=r.call.apply(r,[this].concat(n))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(o,u){var p=t.resolveArguments(o,u),l=p[0],c=p[1];t.removeClasses(l,"exit"),t.addClass(l,c?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(o,u)},t.onEntering=function(o,u){var p=t.resolveArguments(o,u),l=p[0],c=p[1],E=c?"appear":"enter";t.addClass(l,E,"active"),t.props.onEntering&&t.props.onEntering(o,u)},t.onEntered=function(o,u){var p=t.resolveArguments(o,u),l=p[0],c=p[1],E=c?"appear":"enter";t.removeClasses(l,E),t.addClass(l,E,"done"),t.props.onEntered&&t.props.onEntered(o,u)},t.onExit=function(o){var u=t.resolveArguments(o),p=u[0];t.removeClasses(p,"appear"),t.removeClasses(p,"enter"),t.addClass(p,"exit","base"),t.props.onExit&&t.props.onExit(o)},t.onExiting=function(o){var u=t.resolveArguments(o),p=u[0];t.addClass(p,"exit","active"),t.props.onExiting&&t.props.onExiting(o)},t.onExited=function(o){var u=t.resolveArguments(o),p=u[0];t.removeClasses(p,"exit"),t.addClass(p,"exit","done"),t.props.onExited&&t.props.onExited(o)},t.resolveArguments=function(o,u){return t.props.nodeRef?[t.props.nodeRef.current,o]:[o,u]},t.getClassNames=function(o){var u=t.props.classNames,p=typeof u=="string",l=p&&u?u+"-":"",c=p?""+l+o:u[o],E=p?c+"-active":u[o+"Active"],T=p?c+"-done":u[o+"Done"];return{baseClassName:c,activeClassName:E,doneClassName:T}},t}var e=s.prototype;return e.addClass=function(i,n,a){var o=this.getClassNames(n)[a+"ClassName"],u=this.getClassNames("enter"),p=u.doneClassName;n==="appear"&&a==="done"&&p&&(o+=" "+p),a==="active"&&i&&I(i),o&&(this.appliedClasses[n][a]=o,Y(i,o))},e.removeClasses=function(i,n){var a=this.appliedClasses[n],o=a.base,u=a.active,p=a.done;this.appliedClasses[n]={},o&&y(i,o),u&&y(i,u),p&&y(i,p)},e.render=function(){var i=this.props;i.classNames;var n=M(i,["classNames"]);return g.createElement(H,V({},n,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},s}(g.Component);j.defaultProps={classNames:""};j.propTypes={};const q=j;function N(r){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},N(r)}function z(r,s){if(N(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var t=e.call(r,s||"default");if(N(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(r)}function J(r){var s=z(r,"string");return N(s)==="symbol"?s:String(s)}function Q(r,s,e){return s=J(s),s in r?Object.defineProperty(r,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[s]=e,r}var $={defaultProps:{__TYPE:"CSSTransition",children:void 0},getProps:function(s){return _.getMergedProps(s,$.defaultProps)},getOtherProps:function(s){return _.getDiffProps(s,$.defaultProps)}};function L(r,s){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);s&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),e.push.apply(e,t)}return e}function R(r){for(var s=1;s<arguments.length;s++){var e=arguments[s]!=null?arguments[s]:{};s%2?L(Object(e),!0).forEach(function(t){Q(r,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):L(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))})}return r}var Z=P.forwardRef(function(r,s){var e=$.getProps(r),t=P.useContext(X),i=e.disabled||e.options&&e.options.disabled||t&&!t.cssTransition||!K.cssTransition,n=function(f,m){e.onEnter&&e.onEnter(f,m),e.options&&e.options.onEnter&&e.options.onEnter(f,m)},a=function(f,m){e.onEntering&&e.onEntering(f,m),e.options&&e.options.onEntering&&e.options.onEntering(f,m)},o=function(f,m){e.onEntered&&e.onEntered(f,m),e.options&&e.options.onEntered&&e.options.onEntered(f,m)},u=function(f){e.onExit&&e.onExit(f),e.options&&e.options.onExit&&e.options.onExit(f)},p=function(f){e.onExiting&&e.onExiting(f),e.options&&e.options.onExiting&&e.options.onExiting(f)},l=function(f){e.onExited&&e.onExited(f),e.options&&e.options.onExited&&e.options.onExited(f)};if(G(function(){if(i){var d=_.getRefElement(e.nodeRef);e.in?(n(d,!0),a(d,!0),o(d,!0)):(u(d),p(d),l(d))}},[e.in]),i)return e.in?e.children:null;var c={nodeRef:e.nodeRef,in:e.in,onEnter:n,onEntering:a,onEntered:o,onExit:u,onExiting:p,onExited:l},E={classNames:e.classNames,timeout:e.timeout,unmountOnExit:e.unmountOnExit},T=R(R(R({},E),e.options||{}),c);return P.createElement(q,T,e.children)});Z.displayName="CSSTransition";export{Z as C,U as T,M as _};
//# sourceMappingURL=csstransition.esm-653f5084.js.map