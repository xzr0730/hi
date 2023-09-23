(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function x_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yp={exports:{}},Za={},Mp={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),S_=Symbol.for("react.portal"),y_=Symbol.for("react.fragment"),M_=Symbol.for("react.strict_mode"),E_=Symbol.for("react.profiler"),T_=Symbol.for("react.provider"),w_=Symbol.for("react.context"),A_=Symbol.for("react.forward_ref"),R_=Symbol.for("react.suspense"),C_=Symbol.for("react.memo"),L_=Symbol.for("react.lazy"),Of=Symbol.iterator;function P_(t){return t===null||typeof t!="object"?null:(t=Of&&t[Of]||t["@@iterator"],typeof t=="function"?t:null)}var Ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tp=Object.assign,wp={};function gs(t,e,n){this.props=t,this.context=e,this.refs=wp,this.updater=n||Ep}gs.prototype.isReactComponent={};gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ap(){}Ap.prototype=gs.prototype;function Cc(t,e,n){this.props=t,this.context=e,this.refs=wp,this.updater=n||Ep}var Lc=Cc.prototype=new Ap;Lc.constructor=Cc;Tp(Lc,gs.prototype);Lc.isPureReactComponent=!0;var zf=Array.isArray,Rp=Object.prototype.hasOwnProperty,Pc={current:null},Cp={key:!0,ref:!0,__self:!0,__source:!0};function Lp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rp.call(e,i)&&!Cp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:go,type:t,key:s,ref:o,props:r,_owner:Pc.current}}function b_(t,e){return{$$typeof:go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bc(t){return typeof t=="object"&&t!==null&&t.$$typeof===go}function D_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kf=/\/+/g;function Ml(t,e){return typeof t=="object"&&t!==null&&t.key!=null?D_(""+t.key):e.toString(36)}function da(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case go:case S_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ml(o,0):i,zf(r)?(n="",t!=null&&(n=t.replace(kf,"$&/")+"/"),da(r,e,n,"",function(u){return u})):r!=null&&(bc(r)&&(r=b_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(kf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",zf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ml(s,a);o+=da(s,e,n,l,r)}else if(l=P_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ml(s,a++),o+=da(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Co(t,e,n){if(t==null)return t;var i=[],r=0;return da(t,i,"","",function(s){return e.call(n,s,r++)}),i}function U_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},ha={transition:null},I_={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:ha,ReactCurrentOwner:Pc};Fe.Children={map:Co,forEach:function(t,e,n){Co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Co(t,function(){e++}),e},toArray:function(t){return Co(t,function(e){return e})||[]},only:function(t){if(!bc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Fe.Component=gs;Fe.Fragment=y_;Fe.Profiler=E_;Fe.PureComponent=Cc;Fe.StrictMode=M_;Fe.Suspense=R_;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I_;Fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Rp.call(e,l)&&!Cp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:go,type:t.type,key:r,ref:s,props:i,_owner:o}};Fe.createContext=function(t){return t={$$typeof:w_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:T_,_context:t},t.Consumer=t};Fe.createElement=Lp;Fe.createFactory=function(t){var e=Lp.bind(null,t);return e.type=t,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(t){return{$$typeof:A_,render:t}};Fe.isValidElement=bc;Fe.lazy=function(t){return{$$typeof:L_,_payload:{_status:-1,_result:t},_init:U_}};Fe.memo=function(t,e){return{$$typeof:C_,type:t,compare:e===void 0?null:e}};Fe.startTransition=function(t){var e=ha.transition;ha.transition={};try{t()}finally{ha.transition=e}};Fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Fe.useCallback=function(t,e){return Gt.current.useCallback(t,e)};Fe.useContext=function(t){return Gt.current.useContext(t)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};Fe.useEffect=function(t,e){return Gt.current.useEffect(t,e)};Fe.useId=function(){return Gt.current.useId()};Fe.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};Fe.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};Fe.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};Fe.useMemo=function(t,e){return Gt.current.useMemo(t,e)};Fe.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};Fe.useRef=function(t){return Gt.current.useRef(t)};Fe.useState=function(t){return Gt.current.useState(t)};Fe.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};Fe.useTransition=function(){return Gt.current.useTransition()};Fe.version="18.2.0";Mp.exports=Fe;var Be=Mp.exports;const N_=x_(Be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=Be,O_=Symbol.for("react.element"),z_=Symbol.for("react.fragment"),k_=Object.prototype.hasOwnProperty,B_=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H_={key:!0,ref:!0,__self:!0,__source:!0};function Pp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)k_.call(e,i)&&!H_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:O_,type:t,key:s,ref:o,props:r,_owner:B_.current}}Za.Fragment=z_;Za.jsx=Pp;Za.jsxs=Pp;yp.exports=Za;var rn=yp.exports,wu={},bp={exports:{}},un={},Dp={exports:{}},Up={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,X){var z=L.length;L.push(X);e:for(;0<z;){var U=z-1>>>1,k=L[U];if(0<r(k,X))L[U]=X,L[z]=k,z=U;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var X=L[0],z=L.pop();if(z!==X){L[0]=z;e:for(var U=0,k=L.length,se=k>>>1;U<se;){var oe=2*(U+1)-1,ue=L[oe],pe=oe+1,Se=L[pe];if(0>r(ue,z))pe<k&&0>r(Se,ue)?(L[U]=Se,L[pe]=z,U=pe):(L[U]=ue,L[oe]=z,U=oe);else if(pe<k&&0>r(Se,z))L[U]=Se,L[pe]=z,U=pe;else break e}}return X}function r(L,X){var z=L.sortIndex-X.sortIndex;return z!==0?z:L.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,m=!1,x=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=L)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function S(L){if(v=!1,g(L),!x)if(n(l)!==null)x=!0,K(T);else{var X=n(u);X!==null&&W(S,X.startTime-L)}}function T(L,X){x=!1,v&&(v=!1,c(b),b=-1),m=!0;var z=d;try{for(g(X),h=n(l);h!==null&&(!(h.expirationTime>X)||L&&!Z());){var U=h.callback;if(typeof U=="function"){h.callback=null,d=h.priorityLevel;var k=U(h.expirationTime<=X);X=t.unstable_now(),typeof k=="function"?h.callback=k:h===n(l)&&i(l),g(X)}else i(l);h=n(l)}if(h!==null)var se=!0;else{var oe=n(u);oe!==null&&W(S,oe.startTime-X),se=!1}return se}finally{h=null,d=z,m=!1}}var C=!1,R=null,b=-1,M=5,w=-1;function Z(){return!(t.unstable_now()-w<M)}function B(){if(R!==null){var L=t.unstable_now();w=L;var X=!0;try{X=R(!0,L)}finally{X?D():(C=!1,R=null)}}else C=!1}var D;if(typeof _=="function")D=function(){_(B)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,V=O.port2;O.port1.onmessage=B,D=function(){V.postMessage(null)}}else D=function(){p(B,0)};function K(L){R=L,C||(C=!0,D())}function W(L,X){b=p(function(){L(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,K(T))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var z=d;d=X;try{return L()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,X){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=d;d=L;try{return X()}finally{d=z}},t.unstable_scheduleCallback=function(L,X,z){var U=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?U+z:U):z=U,L){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=z+k,L={id:f++,callback:X,priorityLevel:L,startTime:z,expirationTime:k,sortIndex:-1},z>U?(L.sortIndex=z,e(u,L),n(l)===null&&L===n(u)&&(v?(c(b),b=-1):v=!0,W(S,z-U))):(L.sortIndex=k,e(l,L),x||m||(x=!0,K(T))),L},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(L){var X=d;return function(){var z=d;d=X;try{return L.apply(this,arguments)}finally{d=z}}}})(Up);Dp.exports=Up;var G_=Dp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip=Be,ln=G_;function Q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Np=new Set,Ks={};function _r(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(Ks[t]=e,t=0;t<e.length;t++)Np.add(e[t])}var ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=Object.prototype.hasOwnProperty,V_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bf={},Hf={};function W_(t){return Au.call(Hf,t)?!0:Au.call(Bf,t)?!1:V_.test(t)?Hf[t]=!0:(Bf[t]=!0,!1)}function X_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function j_(t,e,n,i){if(e===null||typeof e>"u"||X_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){At[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];At[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){At[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){At[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){At[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){At[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){At[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){At[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){At[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dc=/[\-:]([a-z])/g;function Uc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dc,Uc);At[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dc,Uc);At[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dc,Uc);At[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){At[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});At.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){At[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ic(t,e,n,i){var r=At.hasOwnProperty(e)?At[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(j_(e,n,r,i)&&(n=null),i||r===null?W_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var fi=Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lo=Symbol.for("react.element"),zr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Nc=Symbol.for("react.strict_mode"),Ru=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),Op=Symbol.for("react.context"),Fc=Symbol.for("react.forward_ref"),Cu=Symbol.for("react.suspense"),Lu=Symbol.for("react.suspense_list"),Oc=Symbol.for("react.memo"),vi=Symbol.for("react.lazy"),zp=Symbol.for("react.offscreen"),Gf=Symbol.iterator;function Ms(t){return t===null||typeof t!="object"?null:(t=Gf&&t[Gf]||t["@@iterator"],typeof t=="function"?t:null)}var it=Object.assign,El;function Ns(t){if(El===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);El=e&&e[1]||""}return`
`+El+t}var Tl=!1;function wl(t,e){if(!t||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ns(t):""}function Y_(t){switch(t.tag){case 5:return Ns(t.type);case 16:return Ns("Lazy");case 13:return Ns("Suspense");case 19:return Ns("SuspenseList");case 0:case 2:case 15:return t=wl(t.type,!1),t;case 11:return t=wl(t.type.render,!1),t;case 1:return t=wl(t.type,!0),t;default:return""}}function Pu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case kr:return"Fragment";case zr:return"Portal";case Ru:return"Profiler";case Nc:return"StrictMode";case Cu:return"Suspense";case Lu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Op:return(t.displayName||"Context")+".Consumer";case Fp:return(t._context.displayName||"Context")+".Provider";case Fc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oc:return e=t.displayName||null,e!==null?e:Pu(t.type)||"Memo";case vi:e=t._payload,t=t._init;try{return Pu(t(e))}catch{}}return null}function q_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pu(e);case 8:return e===Nc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $_(t){var e=kp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Po(t){t._valueTracker||(t._valueTracker=$_(t))}function Bp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=kp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bu(t,e){var n=e.checked;return it({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Oi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hp(t,e){e=e.checked,e!=null&&Ic(t,"checked",e,!1)}function Du(t,e){Hp(t,e);var n=Oi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uu(t,e.type,Oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uu(t,e,n){(e!=="number"||wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fs=Array.isArray;function Zr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Oi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Iu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return it({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Q(92));if(Fs(n)){if(1<n.length)throw Error(Q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Oi(n)}}function Gp(t,e){var n=Oi(e.value),i=Oi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function jf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bo,Wp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K_=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(t){K_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bs[e]=Bs[t]})});function Xp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bs.hasOwnProperty(t)&&Bs[t]?(""+e).trim():e+"px"}function jp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Xp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Z_=it({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fu(t,e){if(e){if(Z_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function Ou(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zu=null;function zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ku=null,Qr=null,Jr=null;function Yf(t){if(t=xo(t)){if(typeof ku!="function")throw Error(Q(280));var e=t.stateNode;e&&(e=nl(e),ku(t.stateNode,t.type,e))}}function Yp(t){Qr?Jr?Jr.push(t):Jr=[t]:Qr=t}function qp(){if(Qr){var t=Qr,e=Jr;if(Jr=Qr=null,Yf(t),e)for(t=0;t<e.length;t++)Yf(e[t])}}function $p(t,e){return t(e)}function Kp(){}var Al=!1;function Zp(t,e,n){if(Al)return t(e,n);Al=!0;try{return $p(t,e,n)}finally{Al=!1,(Qr!==null||Jr!==null)&&(Kp(),qp())}}function Qs(t,e){var n=t.stateNode;if(n===null)return null;var i=nl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Q(231,e,typeof n));return n}var Bu=!1;if(ai)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Bu=!1}function Q_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Hs=!1,Aa=null,Ra=!1,Hu=null,J_={onError:function(t){Hs=!0,Aa=t}};function ev(t,e,n,i,r,s,o,a,l){Hs=!1,Aa=null,Q_.apply(J_,arguments)}function tv(t,e,n,i,r,s,o,a,l){if(ev.apply(this,arguments),Hs){if(Hs){var u=Aa;Hs=!1,Aa=null}else throw Error(Q(198));Ra||(Ra=!0,Hu=u)}}function vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qf(t){if(vr(t)!==t)throw Error(Q(188))}function nv(t){var e=t.alternate;if(!e){if(e=vr(t),e===null)throw Error(Q(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return qf(r),t;if(s===i)return qf(r),e;s=s.sibling}throw Error(Q(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?t:e}function Jp(t){return t=nv(t),t!==null?em(t):null}function em(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=em(t);if(e!==null)return e;t=t.sibling}return null}var tm=ln.unstable_scheduleCallback,$f=ln.unstable_cancelCallback,iv=ln.unstable_shouldYield,rv=ln.unstable_requestPaint,at=ln.unstable_now,sv=ln.unstable_getCurrentPriorityLevel,kc=ln.unstable_ImmediatePriority,nm=ln.unstable_UserBlockingPriority,Ca=ln.unstable_NormalPriority,ov=ln.unstable_LowPriority,im=ln.unstable_IdlePriority,Qa=null,Hn=null;function av(t){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(Qa,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:cv,lv=Math.log,uv=Math.LN2;function cv(t){return t>>>=0,t===0?32:31-(lv(t)/uv|0)|0}var Do=64,Uo=4194304;function Os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function La(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Os(a):(s&=o,s!==0&&(i=Os(s)))}else o=n&~r,o!==0?i=Os(o):s!==0&&(i=Os(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Un(e),r=1<<n,i|=t[n],e&=~r;return i}function fv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Un(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=fv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rm(){var t=Do;return Do<<=1,!(Do&4194240)&&(Do=64),t}function Rl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function hv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Un(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Bc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Un(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ve=0;function sm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var om,Hc,am,lm,um,Vu=!1,Io=[],Ai=null,Ri=null,Ci=null,Js=new Map,eo=new Map,Si=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kf(t,e){switch(t){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Ri=null;break;case"mouseover":case"mouseout":Ci=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(e.pointerId)}}function Ts(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xo(e),e!==null&&Hc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function mv(t,e,n,i,r){switch(e){case"focusin":return Ai=Ts(Ai,t,e,n,i,r),!0;case"dragenter":return Ri=Ts(Ri,t,e,n,i,r),!0;case"mouseover":return Ci=Ts(Ci,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Js.set(s,Ts(Js.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,eo.set(s,Ts(eo.get(s)||null,t,e,n,i,r)),!0}return!1}function cm(t){var e=er(t.target);if(e!==null){var n=vr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qp(n),e!==null){t.blockedOn=e,um(t.priority,function(){am(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zu=i,n.target.dispatchEvent(i),zu=null}else return e=xo(n),e!==null&&Hc(e),t.blockedOn=n,!1;e.shift()}return!0}function Zf(t,e,n){pa(t)&&n.delete(e)}function gv(){Vu=!1,Ai!==null&&pa(Ai)&&(Ai=null),Ri!==null&&pa(Ri)&&(Ri=null),Ci!==null&&pa(Ci)&&(Ci=null),Js.forEach(Zf),eo.forEach(Zf)}function ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Vu||(Vu=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,gv)))}function to(t){function e(r){return ws(r,t)}if(0<Io.length){ws(Io[0],t);for(var n=1;n<Io.length;n++){var i=Io[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ai!==null&&ws(Ai,t),Ri!==null&&ws(Ri,t),Ci!==null&&ws(Ci,t),Js.forEach(e),eo.forEach(e),n=0;n<Si.length;n++)i=Si[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Si.length&&(n=Si[0],n.blockedOn===null);)cm(n),n.blockedOn===null&&Si.shift()}var es=fi.ReactCurrentBatchConfig,Pa=!0;function _v(t,e,n,i){var r=Ve,s=es.transition;es.transition=null;try{Ve=1,Gc(t,e,n,i)}finally{Ve=r,es.transition=s}}function vv(t,e,n,i){var r=Ve,s=es.transition;es.transition=null;try{Ve=4,Gc(t,e,n,i)}finally{Ve=r,es.transition=s}}function Gc(t,e,n,i){if(Pa){var r=Wu(t,e,n,i);if(r===null)Ol(t,e,i,ba,n),Kf(t,i);else if(mv(r,t,e,n,i))i.stopPropagation();else if(Kf(t,i),e&4&&-1<pv.indexOf(t)){for(;r!==null;){var s=xo(r);if(s!==null&&om(s),s=Wu(t,e,n,i),s===null&&Ol(t,e,i,ba,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ol(t,e,i,null,n)}}var ba=null;function Wu(t,e,n,i){if(ba=null,t=zc(i),t=er(t),t!==null)if(e=vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ba=t,null}function fm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sv()){case kc:return 1;case nm:return 4;case Ca:case ov:return 16;case im:return 536870912;default:return 16}default:return 16}}var Mi=null,Vc=null,ma=null;function dm(){if(ma)return ma;var t,e=Vc,n=e.length,i,r="value"in Mi?Mi.value:Mi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ma=r.slice(t,1<i?1-i:void 0)}function ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function No(){return!0}function Qf(){return!1}function cn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?No:Qf,this.isPropagationStopped=Qf,this}return it(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=cn(_s),vo=it({},_s,{view:0,detail:0}),xv=cn(vo),Cl,Ll,As,Ja=it({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(Cl=t.screenX-As.screenX,Ll=t.screenY-As.screenY):Ll=Cl=0,As=t),Cl)},movementY:function(t){return"movementY"in t?t.movementY:Ll}}),Jf=cn(Ja),Sv=it({},Ja,{dataTransfer:0}),yv=cn(Sv),Mv=it({},vo,{relatedTarget:0}),Pl=cn(Mv),Ev=it({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),Tv=cn(Ev),wv=it({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Av=cn(wv),Rv=it({},_s,{data:0}),ed=cn(Rv),Cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Pv[t])?!!e[t]:!1}function Xc(){return bv}var Dv=it({},vo,{key:function(t){if(t.key){var e=Cv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(t){return t.type==="keypress"?ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Uv=cn(Dv),Iv=it({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),td=cn(Iv),Nv=it({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),Fv=cn(Nv),Ov=it({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=cn(Ov),kv=it({},Ja,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=cn(kv),Hv=[9,13,27,32],jc=ai&&"CompositionEvent"in window,Gs=null;ai&&"documentMode"in document&&(Gs=document.documentMode);var Gv=ai&&"TextEvent"in window&&!Gs,hm=ai&&(!jc||Gs&&8<Gs&&11>=Gs),nd=String.fromCharCode(32),id=!1;function pm(t,e){switch(t){case"keyup":return Hv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function Vv(t,e){switch(t){case"compositionend":return mm(e);case"keypress":return e.which!==32?null:(id=!0,nd);case"textInput":return t=e.data,t===nd&&id?null:t;default:return null}}function Wv(t,e){if(Br)return t==="compositionend"||!jc&&pm(t,e)?(t=dm(),ma=Vc=Mi=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hm&&e.locale!=="ko"?null:e.data;default:return null}}var Xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Xv[t.type]:e==="textarea"}function gm(t,e,n,i){Yp(i),e=Da(e,"onChange"),0<e.length&&(n=new Wc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Vs=null,no=null;function jv(t){Rm(t,0)}function el(t){var e=Vr(t);if(Bp(e))return t}function Yv(t,e){if(t==="change")return e}var _m=!1;if(ai){var bl;if(ai){var Dl="oninput"in document;if(!Dl){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),Dl=typeof sd.oninput=="function"}bl=Dl}else bl=!1;_m=bl&&(!document.documentMode||9<document.documentMode)}function od(){Vs&&(Vs.detachEvent("onpropertychange",vm),no=Vs=null)}function vm(t){if(t.propertyName==="value"&&el(no)){var e=[];gm(e,no,t,zc(t)),Zp(jv,e)}}function qv(t,e,n){t==="focusin"?(od(),Vs=e,no=n,Vs.attachEvent("onpropertychange",vm)):t==="focusout"&&od()}function $v(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return el(no)}function Kv(t,e){if(t==="click")return el(e)}function Zv(t,e){if(t==="input"||t==="change")return el(e)}function Qv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:Qv;function io(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Au.call(e,r)||!Nn(t[r],e[r]))return!1}return!0}function ad(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ld(t,e){var n=ad(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ad(n)}}function xm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sm(){for(var t=window,e=wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wa(t.document)}return e}function Yc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Jv(t){var e=Sm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xm(n.ownerDocument.documentElement,n)){if(i!==null&&Yc(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ld(n,s);var o=ld(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var e0=ai&&"documentMode"in document&&11>=document.documentMode,Hr=null,Xu=null,Ws=null,ju=!1;function ud(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ju||Hr==null||Hr!==wa(i)||(i=Hr,"selectionStart"in i&&Yc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ws&&io(Ws,i)||(Ws=i,i=Da(Xu,"onSelect"),0<i.length&&(e=new Wc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Hr)))}function Fo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gr={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Ul={},ym={};ai&&(ym=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function tl(t){if(Ul[t])return Ul[t];if(!Gr[t])return t;var e=Gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ym)return Ul[t]=e[n];return t}var Mm=tl("animationend"),Em=tl("animationiteration"),Tm=tl("animationstart"),wm=tl("transitionend"),Am=new Map,cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bi(t,e){Am.set(t,e),_r(e,[t])}for(var Il=0;Il<cd.length;Il++){var Nl=cd[Il],t0=Nl.toLowerCase(),n0=Nl[0].toUpperCase()+Nl.slice(1);Bi(t0,"on"+n0)}Bi(Mm,"onAnimationEnd");Bi(Em,"onAnimationIteration");Bi(Tm,"onAnimationStart");Bi("dblclick","onDoubleClick");Bi("focusin","onFocus");Bi("focusout","onBlur");Bi(wm,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function fd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,tv(i,e,void 0,t),t.currentTarget=null}function Rm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;fd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;fd(r,a,u),s=l}}}if(Ra)throw t=Hu,Ra=!1,Hu=null,t}function $e(t,e){var n=e[Zu];n===void 0&&(n=e[Zu]=new Set);var i=t+"__bubble";n.has(i)||(Cm(e,t,2,!1),n.add(i))}function Fl(t,e,n){var i=0;e&&(i|=4),Cm(n,t,i,e)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[Oo]){t[Oo]=!0,Np.forEach(function(n){n!=="selectionchange"&&(i0.has(n)||Fl(n,!1,t),Fl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oo]||(e[Oo]=!0,Fl("selectionchange",!1,e))}}function Cm(t,e,n,i){switch(fm(e)){case 1:var r=_v;break;case 4:r=vv;break;default:r=Gc}n=r.bind(null,e,n,t),r=void 0,!Bu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ol(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Zp(function(){var u=s,f=zc(n),h=[];e:{var d=Am.get(t);if(d!==void 0){var m=Wc,x=t;switch(t){case"keypress":if(ga(n)===0)break e;case"keydown":case"keyup":m=Uv;break;case"focusin":x="focus",m=Pl;break;case"focusout":x="blur",m=Pl;break;case"beforeblur":case"afterblur":m=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Fv;break;case Mm:case Em:case Tm:m=Tv;break;case wm:m=zv;break;case"scroll":m=xv;break;case"wheel":m=Bv;break;case"copy":case"cut":case"paste":m=Av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=td}var v=(e&4)!==0,p=!v&&t==="scroll",c=v?d!==null?d+"Capture":null:d;v=[];for(var _=u,g;_!==null;){g=_;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,c!==null&&(S=Qs(_,c),S!=null&&v.push(so(_,S,g)))),p)break;_=_.return}0<v.length&&(d=new m(d,x,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==zu&&(x=n.relatedTarget||n.fromElement)&&(er(x)||x[li]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?er(x):null,x!==null&&(p=vr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(v=Jf,S="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=td,S="onPointerLeave",c="onPointerEnter",_="pointer"),p=m==null?d:Vr(m),g=x==null?d:Vr(x),d=new v(S,_+"leave",m,n,f),d.target=p,d.relatedTarget=g,S=null,er(f)===u&&(v=new v(c,_+"enter",x,n,f),v.target=g,v.relatedTarget=p,S=v),p=S,m&&x)t:{for(v=m,c=x,_=0,g=v;g;g=Sr(g))_++;for(g=0,S=c;S;S=Sr(S))g++;for(;0<_-g;)v=Sr(v),_--;for(;0<g-_;)c=Sr(c),g--;for(;_--;){if(v===c||c!==null&&v===c.alternate)break t;v=Sr(v),c=Sr(c)}v=null}else v=null;m!==null&&dd(h,d,m,v,!1),x!==null&&p!==null&&dd(h,p,x,v,!0)}}e:{if(d=u?Vr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=Yv;else if(rd(d))if(_m)T=Zv;else{T=$v;var C=qv}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=Kv);if(T&&(T=T(t,u))){gm(h,T,n,f);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Uu(d,"number",d.value)}switch(C=u?Vr(u):window,t){case"focusin":(rd(C)||C.contentEditable==="true")&&(Hr=C,Xu=u,Ws=null);break;case"focusout":Ws=Xu=Hr=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,ud(h,n,f);break;case"selectionchange":if(e0)break;case"keydown":case"keyup":ud(h,n,f)}var R;if(jc)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Br?pm(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(hm&&n.locale!=="ko"&&(Br||b!=="onCompositionStart"?b==="onCompositionEnd"&&Br&&(R=dm()):(Mi=f,Vc="value"in Mi?Mi.value:Mi.textContent,Br=!0)),C=Da(u,b),0<C.length&&(b=new ed(b,t,null,n,f),h.push({event:b,listeners:C}),R?b.data=R:(R=mm(n),R!==null&&(b.data=R)))),(R=Gv?Vv(t,n):Wv(t,n))&&(u=Da(u,"onBeforeInput"),0<u.length&&(f=new ed("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=R))}Rm(h,e)})}function so(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Da(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Qs(t,n),s!=null&&i.unshift(so(t,s,r)),s=Qs(t,e),s!=null&&i.push(so(t,s,r))),t=t.return}return i}function Sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Qs(n,s),l!=null&&o.unshift(so(n,l,a))):r||(l=Qs(n,s),l!=null&&o.push(so(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var r0=/\r\n?/g,s0=/\u0000|\uFFFD/g;function hd(t){return(typeof t=="string"?t:""+t).replace(r0,`
`).replace(s0,"")}function zo(t,e,n){if(e=hd(e),hd(t)!==e&&n)throw Error(Q(425))}function Ua(){}var Yu=null,qu=null;function $u(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,o0=typeof clearTimeout=="function"?clearTimeout:void 0,pd=typeof Promise=="function"?Promise:void 0,a0=typeof queueMicrotask=="function"?queueMicrotask:typeof pd<"u"?function(t){return pd.resolve(null).then(t).catch(l0)}:Ku;function l0(t){setTimeout(function(){throw t})}function zl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),to(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);to(e)}function Li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function md(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),Bn="__reactFiber$"+vs,oo="__reactProps$"+vs,li="__reactContainer$"+vs,Zu="__reactEvents$"+vs,u0="__reactListeners$"+vs,c0="__reactHandles$"+vs;function er(t){var e=t[Bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[li]||n[Bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=md(t);t!==null;){if(n=t[Bn])return n;t=md(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[Bn]||t[li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Q(33))}function nl(t){return t[oo]||null}var Qu=[],Wr=-1;function Hi(t){return{current:t}}function Ke(t){0>Wr||(t.current=Qu[Wr],Qu[Wr]=null,Wr--)}function Ye(t,e){Wr++,Qu[Wr]=t.current,t.current=e}var zi={},Nt=Hi(zi),$t=Hi(!1),cr=zi;function os(t,e){var n=t.type.contextTypes;if(!n)return zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Kt(t){return t=t.childContextTypes,t!=null}function Ia(){Ke($t),Ke(Nt)}function gd(t,e,n){if(Nt.current!==zi)throw Error(Q(168));Ye(Nt,e),Ye($t,n)}function Lm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,q_(t)||"Unknown",r));return it({},n,i)}function Na(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zi,cr=Nt.current,Ye(Nt,t),Ye($t,$t.current),!0}function _d(t,e,n){var i=t.stateNode;if(!i)throw Error(Q(169));n?(t=Lm(t,e,cr),i.__reactInternalMemoizedMergedChildContext=t,Ke($t),Ke(Nt),Ye(Nt,t)):Ke($t),Ye($t,n)}var ei=null,il=!1,kl=!1;function Pm(t){ei===null?ei=[t]:ei.push(t)}function f0(t){il=!0,Pm(t)}function Gi(){if(!kl&&ei!==null){kl=!0;var t=0,e=Ve;try{var n=ei;for(Ve=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ei=null,il=!1}catch(r){throw ei!==null&&(ei=ei.slice(t+1)),tm(kc,Gi),r}finally{Ve=e,kl=!1}}return null}var Xr=[],jr=0,Fa=null,Oa=0,hn=[],pn=0,fr=null,ni=1,ii="";function $i(t,e){Xr[jr++]=Oa,Xr[jr++]=Fa,Fa=t,Oa=e}function bm(t,e,n){hn[pn++]=ni,hn[pn++]=ii,hn[pn++]=fr,fr=t;var i=ni;t=ii;var r=32-Un(i)-1;i&=~(1<<r),n+=1;var s=32-Un(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ni=1<<32-Un(e)+r|n<<r|i,ii=s+t}else ni=1<<s|n<<r|i,ii=t}function qc(t){t.return!==null&&($i(t,1),bm(t,1,0))}function $c(t){for(;t===Fa;)Fa=Xr[--jr],Xr[jr]=null,Oa=Xr[--jr],Xr[jr]=null;for(;t===fr;)fr=hn[--pn],hn[pn]=null,ii=hn[--pn],hn[pn]=null,ni=hn[--pn],hn[pn]=null}var an=null,on=null,Qe=!1,Ln=null;function Dm(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,an=t,on=Li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,an=t,on=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fr!==null?{id:ni,overflow:ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,an=t,on=null,!0):!1;default:return!1}}function Ju(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ec(t){if(Qe){var e=on;if(e){var n=e;if(!vd(t,e)){if(Ju(t))throw Error(Q(418));e=Li(n.nextSibling);var i=an;e&&vd(t,e)?Dm(i,n):(t.flags=t.flags&-4097|2,Qe=!1,an=t)}}else{if(Ju(t))throw Error(Q(418));t.flags=t.flags&-4097|2,Qe=!1,an=t}}}function xd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;an=t}function ko(t){if(t!==an)return!1;if(!Qe)return xd(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$u(t.type,t.memoizedProps)),e&&(e=on)){if(Ju(t))throw Um(),Error(Q(418));for(;e;)Dm(t,e),e=Li(e.nextSibling)}if(xd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){on=Li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}on=null}}else on=an?Li(t.stateNode.nextSibling):null;return!0}function Um(){for(var t=on;t;)t=Li(t.nextSibling)}function as(){on=an=null,Qe=!1}function Kc(t){Ln===null?Ln=[t]:Ln.push(t)}var d0=fi.ReactCurrentBatchConfig;function Rn(t,e){if(t&&t.defaultProps){e=it({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var za=Hi(null),ka=null,Yr=null,Zc=null;function Qc(){Zc=Yr=ka=null}function Jc(t){var e=za.current;Ke(za),t._currentValue=e}function tc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ts(t,e){ka=t,Zc=Yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function xn(t){var e=t._currentValue;if(Zc!==t)if(t={context:t,memoizedValue:e,next:null},Yr===null){if(ka===null)throw Error(Q(308));Yr=t,ka.dependencies={lanes:0,firstContext:t}}else Yr=Yr.next=t;return e}var tr=null;function ef(t){tr===null?tr=[t]:tr.push(t)}function Im(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ef(e)):(n.next=r.next,r.next=n),e.interleaved=n,ui(t,i)}function ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xi=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ui(t,n)}return r=i.interleaved,r===null?(e.next=e,ef(i)):(e.next=r.next,r.next=e),i.interleaved=e,ui(t,n)}function _a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bc(t,n)}}function Sd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ba(t,e,n,i){var r=t.updateQueue;xi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(d=e,m=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){h=x.call(m,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,d=typeof x=="function"?x.call(m,h,d):x,d==null)break e;h=it({},h,d);break e;case 2:xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);hr|=o,t.lanes=o,t.memoizedState=h}}function yd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var Fm=new Ip.Component().refs;function nc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:it({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rl={isMounted:function(t){return(t=t._reactInternals)?vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Ht(),r=Di(t),s=oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Pi(t,s,r),e!==null&&(In(e,t,r,i),_a(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Ht(),r=Di(t),s=oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pi(t,s,r),e!==null&&(In(e,t,r,i),_a(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),i=Di(t),r=oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Pi(t,r,i),e!==null&&(In(e,t,i,n),_a(e,t,i))}};function Md(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!io(n,i)||!io(r,s):!0}function Om(t,e,n){var i=!1,r=zi,s=e.contextType;return typeof s=="object"&&s!==null?s=xn(s):(r=Kt(e)?cr:Nt.current,i=e.contextTypes,s=(i=i!=null)?os(t,r):zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ed(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&rl.enqueueReplaceState(e,e.state,null)}function ic(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Fm,tf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=xn(s):(s=Kt(e)?cr:Nt.current,r.context=os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&rl.enqueueReplaceState(r,r.state,null),Ba(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var i=n.stateNode}if(!i)throw Error(Q(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Fm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,t))}return t}function Bo(t,e){throw t=Object.prototype.toString.call(e),Error(Q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Td(t){var e=t._init;return e(t._payload)}function zm(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Ui(c,_),c.index=0,c.sibling=null,c}function s(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,S){return _===null||_.tag!==6?(_=jl(g,c.mode,S),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,S){var T=g.type;return T===kr?f(c,_,g.props.children,S,g.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===vi&&Td(T)===_.type)?(S=r(_,g.props),S.ref=Rs(c,_,g),S.return=c,S):(S=Ea(g.type,g.key,g.props,null,c.mode,S),S.ref=Rs(c,_,g),S.return=c,S)}function u(c,_,g,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Yl(g,c.mode,S),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function f(c,_,g,S,T){return _===null||_.tag!==7?(_=rr(g,c.mode,S,T),_.return=c,_):(_=r(_,g),_.return=c,_)}function h(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=jl(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Lo:return g=Ea(_.type,_.key,_.props,null,c.mode,g),g.ref=Rs(c,null,_),g.return=c,g;case zr:return _=Yl(_,c.mode,g),_.return=c,_;case vi:var S=_._init;return h(c,S(_._payload),g)}if(Fs(_)||Ms(_))return _=rr(_,c.mode,g,null),_.return=c,_;Bo(c,_)}return null}function d(c,_,g,S){var T=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(c,_,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Lo:return g.key===T?l(c,_,g,S):null;case zr:return g.key===T?u(c,_,g,S):null;case vi:return T=g._init,d(c,_,T(g._payload),S)}if(Fs(g)||Ms(g))return T!==null?null:f(c,_,g,S,null);Bo(c,g)}return null}function m(c,_,g,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(g)||null,a(_,c,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Lo:return c=c.get(S.key===null?g:S.key)||null,l(_,c,S,T);case zr:return c=c.get(S.key===null?g:S.key)||null,u(_,c,S,T);case vi:var C=S._init;return m(c,_,g,C(S._payload),T)}if(Fs(S)||Ms(S))return c=c.get(g)||null,f(_,c,S,T,null);Bo(_,S)}return null}function x(c,_,g,S){for(var T=null,C=null,R=_,b=_=0,M=null;R!==null&&b<g.length;b++){R.index>b?(M=R,R=null):M=R.sibling;var w=d(c,R,g[b],S);if(w===null){R===null&&(R=M);break}t&&R&&w.alternate===null&&e(c,R),_=s(w,_,b),C===null?T=w:C.sibling=w,C=w,R=M}if(b===g.length)return n(c,R),Qe&&$i(c,b),T;if(R===null){for(;b<g.length;b++)R=h(c,g[b],S),R!==null&&(_=s(R,_,b),C===null?T=R:C.sibling=R,C=R);return Qe&&$i(c,b),T}for(R=i(c,R);b<g.length;b++)M=m(R,c,b,g[b],S),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?b:M.key),_=s(M,_,b),C===null?T=M:C.sibling=M,C=M);return t&&R.forEach(function(Z){return e(c,Z)}),Qe&&$i(c,b),T}function v(c,_,g,S){var T=Ms(g);if(typeof T!="function")throw Error(Q(150));if(g=T.call(g),g==null)throw Error(Q(151));for(var C=T=null,R=_,b=_=0,M=null,w=g.next();R!==null&&!w.done;b++,w=g.next()){R.index>b?(M=R,R=null):M=R.sibling;var Z=d(c,R,w.value,S);if(Z===null){R===null&&(R=M);break}t&&R&&Z.alternate===null&&e(c,R),_=s(Z,_,b),C===null?T=Z:C.sibling=Z,C=Z,R=M}if(w.done)return n(c,R),Qe&&$i(c,b),T;if(R===null){for(;!w.done;b++,w=g.next())w=h(c,w.value,S),w!==null&&(_=s(w,_,b),C===null?T=w:C.sibling=w,C=w);return Qe&&$i(c,b),T}for(R=i(c,R);!w.done;b++,w=g.next())w=m(R,c,b,w.value,S),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?b:w.key),_=s(w,_,b),C===null?T=w:C.sibling=w,C=w);return t&&R.forEach(function(B){return e(c,B)}),Qe&&$i(c,b),T}function p(c,_,g,S){if(typeof g=="object"&&g!==null&&g.type===kr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Lo:e:{for(var T=g.key,C=_;C!==null;){if(C.key===T){if(T=g.type,T===kr){if(C.tag===7){n(c,C.sibling),_=r(C,g.props.children),_.return=c,c=_;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===vi&&Td(T)===C.type){n(c,C.sibling),_=r(C,g.props),_.ref=Rs(c,C,g),_.return=c,c=_;break e}n(c,C);break}else e(c,C);C=C.sibling}g.type===kr?(_=rr(g.props.children,c.mode,S,g.key),_.return=c,c=_):(S=Ea(g.type,g.key,g.props,null,c.mode,S),S.ref=Rs(c,_,g),S.return=c,c=S)}return o(c);case zr:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=Yl(g,c.mode,S),_.return=c,c=_}return o(c);case vi:return C=g._init,p(c,_,C(g._payload),S)}if(Fs(g))return x(c,_,g,S);if(Ms(g))return v(c,_,g,S);Bo(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=jl(g,c.mode,S),_.return=c,c=_),o(c)):n(c,_)}return p}var ls=zm(!0),km=zm(!1),So={},Gn=Hi(So),ao=Hi(So),lo=Hi(So);function nr(t){if(t===So)throw Error(Q(174));return t}function nf(t,e){switch(Ye(lo,e),Ye(ao,t),Ye(Gn,So),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nu(e,t)}Ke(Gn),Ye(Gn,e)}function us(){Ke(Gn),Ke(ao),Ke(lo)}function Bm(t){nr(lo.current);var e=nr(Gn.current),n=Nu(e,t.type);e!==n&&(Ye(ao,t),Ye(Gn,n))}function rf(t){ao.current===t&&(Ke(Gn),Ke(ao))}var tt=Hi(0);function Ha(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bl=[];function sf(){for(var t=0;t<Bl.length;t++)Bl[t]._workInProgressVersionPrimary=null;Bl.length=0}var va=fi.ReactCurrentDispatcher,Hl=fi.ReactCurrentBatchConfig,dr=0,nt=null,pt=null,St=null,Ga=!1,Xs=!1,uo=0,h0=0;function Lt(){throw Error(Q(321))}function of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function af(t,e,n,i,r,s){if(dr=s,nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,va.current=t===null||t.memoizedState===null?_0:v0,t=n(i,r),Xs){s=0;do{if(Xs=!1,uo=0,25<=s)throw Error(Q(301));s+=1,St=pt=null,e.updateQueue=null,va.current=x0,t=n(i,r)}while(Xs)}if(va.current=Va,e=pt!==null&&pt.next!==null,dr=0,St=pt=nt=null,Ga=!1,e)throw Error(Q(300));return t}function lf(){var t=uo!==0;return uo=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?nt.memoizedState=St=t:St=St.next=t,St}function Sn(){if(pt===null){var t=nt.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var e=St===null?nt.memoizedState:St.next;if(e!==null)St=e,pt=t;else{if(t===null)throw Error(Q(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},St===null?nt.memoizedState=St=t:St=St.next=t}return St}function co(t,e){return typeof e=="function"?e(t):e}function Gl(t){var e=Sn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((dr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,nt.lanes|=f,hr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Nn(i,e.memoizedState)||(qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,nt.lanes|=s,hr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vl(t){var e=Sn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Nn(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Hm(){}function Gm(t,e){var n=nt,i=Sn(),r=e(),s=!Nn(i.memoizedState,r);if(s&&(i.memoizedState=r,qt=!0),i=i.queue,uf(Xm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||St!==null&&St.memoizedState.tag&1){if(n.flags|=2048,fo(9,Wm.bind(null,n,i,r,e),void 0,null),Mt===null)throw Error(Q(349));dr&30||Vm(n,e,r)}return r}function Vm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=nt.updateQueue,e===null?(e={lastEffect:null,stores:null},nt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wm(t,e,n,i){e.value=n,e.getSnapshot=i,jm(e)&&Ym(t)}function Xm(t,e,n){return n(function(){jm(e)&&Ym(t)})}function jm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function Ym(t){var e=ui(t,1);e!==null&&In(e,t,1,-1)}function wd(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:t},e.queue=t,t=t.dispatch=g0.bind(null,nt,t),[e.memoizedState,t]}function fo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=nt.updateQueue,e===null?(e={lastEffect:null,stores:null},nt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function qm(){return Sn().memoizedState}function xa(t,e,n,i){var r=zn();nt.flags|=t,r.memoizedState=fo(1|e,n,void 0,i===void 0?null:i)}function sl(t,e,n,i){var r=Sn();i=i===void 0?null:i;var s=void 0;if(pt!==null){var o=pt.memoizedState;if(s=o.destroy,i!==null&&of(i,o.deps)){r.memoizedState=fo(e,n,s,i);return}}nt.flags|=t,r.memoizedState=fo(1|e,n,s,i)}function Ad(t,e){return xa(8390656,8,t,e)}function uf(t,e){return sl(2048,8,t,e)}function $m(t,e){return sl(4,2,t,e)}function Km(t,e){return sl(4,4,t,e)}function Zm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qm(t,e,n){return n=n!=null?n.concat([t]):null,sl(4,4,Zm.bind(null,e,t),n)}function cf(){}function Jm(t,e){var n=Sn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&of(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function eg(t,e){var n=Sn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&of(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function tg(t,e,n){return dr&21?(Nn(n,e)||(n=rm(),nt.lanes|=n,hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function p0(t,e){var n=Ve;Ve=n!==0&&4>n?n:4,t(!0);var i=Hl.transition;Hl.transition={};try{t(!1),e()}finally{Ve=n,Hl.transition=i}}function ng(){return Sn().memoizedState}function m0(t,e,n){var i=Di(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ig(t))rg(e,n);else if(n=Im(t,e,n,i),n!==null){var r=Ht();In(n,t,i,r),sg(n,e,i)}}function g0(t,e,n){var i=Di(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ig(t))rg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Nn(a,o)){var l=e.interleaved;l===null?(r.next=r,ef(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Im(t,e,r,i),n!==null&&(r=Ht(),In(n,t,i,r),sg(n,e,i))}}function ig(t){var e=t.alternate;return t===nt||e!==null&&e===nt}function rg(t,e){Xs=Ga=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bc(t,n)}}var Va={readContext:xn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},_0={readContext:xn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:xn,useEffect:Ad,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xa(4194308,4,Zm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return xa(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=m0.bind(null,nt,t),[i.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:wd,useDebugValue:cf,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=wd(!1),e=t[0];return t=p0.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=nt,r=zn();if(Qe){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=e(),Mt===null)throw Error(Q(349));dr&30||Vm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ad(Xm.bind(null,i,s,t),[t]),i.flags|=2048,fo(9,Wm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=Mt.identifierPrefix;if(Qe){var n=ii,i=ni;n=(i&~(1<<32-Un(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=h0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},v0={readContext:xn,useCallback:Jm,useContext:xn,useEffect:uf,useImperativeHandle:Qm,useInsertionEffect:$m,useLayoutEffect:Km,useMemo:eg,useReducer:Gl,useRef:qm,useState:function(){return Gl(co)},useDebugValue:cf,useDeferredValue:function(t){var e=Sn();return tg(e,pt.memoizedState,t)},useTransition:function(){var t=Gl(co)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:Hm,useSyncExternalStore:Gm,useId:ng,unstable_isNewReconciler:!1},x0={readContext:xn,useCallback:Jm,useContext:xn,useEffect:uf,useImperativeHandle:Qm,useInsertionEffect:$m,useLayoutEffect:Km,useMemo:eg,useReducer:Vl,useRef:qm,useState:function(){return Vl(co)},useDebugValue:cf,useDeferredValue:function(t){var e=Sn();return pt===null?e.memoizedState=t:tg(e,pt.memoizedState,t)},useTransition:function(){var t=Vl(co)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:Hm,useSyncExternalStore:Gm,useId:ng,unstable_isNewReconciler:!1};function cs(t,e){try{var n="",i=e;do n+=Y_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Wl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var S0=typeof WeakMap=="function"?WeakMap:Map;function og(t,e,n){n=oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Xa||(Xa=!0,pc=i),rc(t,e)},n}function ag(t,e,n){n=oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){rc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rc(t,e),typeof i!="function"&&(bi===null?bi=new Set([this]):bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new S0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=I0.bind(null,t,e,n),e.then(t,t))}function Cd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ld(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=oi(-1,1),e.tag=2,Pi(n,e,1))),n.lanes|=1),t)}var y0=fi.ReactCurrentOwner,qt=!1;function kt(t,e,n,i){e.child=t===null?km(e,null,n,i):ls(e,t.child,n,i)}function Pd(t,e,n,i,r){n=n.render;var s=e.ref;return ts(e,r),i=af(t,e,n,i,s,r),n=lf(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ci(t,e,r)):(Qe&&n&&qc(e),e.flags|=1,kt(t,e,i,r),e.child)}function bd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!vf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lg(t,e,s,i,r)):(t=Ea(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(o,i)&&t.ref===e.ref)return ci(t,e,r)}return e.flags|=1,t=Ui(s,i),t.ref=e.ref,t.return=e,e.child=t}function lg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(io(s,i)&&t.ref===e.ref)if(qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,ci(t,e,r)}return sc(t,e,n,i,r)}function ug(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye($r,sn),sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ye($r,sn),sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ye($r,sn),sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ye($r,sn),sn|=i;return kt(t,e,r,n),e.child}function cg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sc(t,e,n,i,r){var s=Kt(n)?cr:Nt.current;return s=os(e,s),ts(e,r),n=af(t,e,n,i,s,r),i=lf(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ci(t,e,r)):(Qe&&i&&qc(e),e.flags|=1,kt(t,e,n,r),e.child)}function Dd(t,e,n,i,r){if(Kt(n)){var s=!0;Na(e)}else s=!1;if(ts(e,r),e.stateNode===null)Sa(t,e),Om(e,n,i),ic(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=xn(u):(u=Kt(n)?cr:Nt.current,u=os(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Ed(e,o,i,u),xi=!1;var d=e.memoizedState;o.state=d,Ba(e,i,o,r),l=e.memoizedState,a!==i||d!==l||$t.current||xi?(typeof f=="function"&&(nc(e,n,f,i),l=e.memoizedState),(a=xi||Md(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Nm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Rn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=xn(l):(l=Kt(n)?cr:Nt.current,l=os(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Ed(e,o,i,l),xi=!1,d=e.memoizedState,o.state=d,Ba(e,i,o,r);var x=e.memoizedState;a!==h||d!==x||$t.current||xi?(typeof m=="function"&&(nc(e,n,m,i),x=e.memoizedState),(u=xi||Md(e,n,u,i,d,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return oc(t,e,n,i,s,r)}function oc(t,e,n,i,r,s){cg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&_d(e,n,!1),ci(t,e,s);i=e.stateNode,y0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ls(e,t.child,null,s),e.child=ls(e,null,a,s)):kt(t,e,a,s),e.memoizedState=i.state,r&&_d(e,n,!0),e.child}function fg(t){var e=t.stateNode;e.pendingContext?gd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gd(t,e.context,!1),nf(t,e.containerInfo)}function Ud(t,e,n,i,r){return as(),Kc(r),e.flags|=256,kt(t,e,n,i),e.child}var ac={dehydrated:null,treeContext:null,retryLane:0};function lc(t){return{baseLanes:t,cachePool:null,transitions:null}}function dg(t,e,n){var i=e.pendingProps,r=tt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ye(tt,r&1),t===null)return ec(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ll(o,i,0,null),t=rr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lc(n),e.memoizedState=ac,t):ff(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return M0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ui(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ui(a,s):(s=rr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?lc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ac,i}return s=t.child,t=s.sibling,i=Ui(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ff(t,e){return e=ll({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ho(t,e,n,i){return i!==null&&Kc(i),ls(e,t.child,null,n),t=ff(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function M0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Wl(Error(Q(422))),Ho(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ll({mode:"visible",children:i.children},r,0,null),s=rr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ls(e,t.child,null,o),e.child.memoizedState=lc(o),e.memoizedState=ac,s);if(!(e.mode&1))return Ho(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Q(419)),i=Wl(s,i,void 0),Ho(t,e,o,i)}if(a=(o&t.childLanes)!==0,qt||a){if(i=Mt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ui(t,r),In(i,t,r,-1))}return _f(),i=Wl(Error(Q(421))),Ho(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=N0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,on=Li(r.nextSibling),an=e,Qe=!0,Ln=null,t!==null&&(hn[pn++]=ni,hn[pn++]=ii,hn[pn++]=fr,ni=t.id,ii=t.overflow,fr=e),e=ff(e,i.children),e.flags|=4096,e)}function Id(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),tc(t.return,e,n)}function Xl(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function hg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(kt(t,e,i.children,n),i=tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Id(t,n,e);else if(t.tag===19)Id(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ye(tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ha(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xl(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ha(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xl(e,!0,n,null,s);break;case"together":Xl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Q(153));if(e.child!==null){for(t=e.child,n=Ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function E0(t,e,n){switch(e.tag){case 3:fg(e),as();break;case 5:Bm(e);break;case 1:Kt(e.type)&&Na(e);break;case 4:nf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ye(za,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ye(tt,tt.current&1),e.flags|=128,null):n&e.child.childLanes?dg(t,e,n):(Ye(tt,tt.current&1),t=ci(t,e,n),t!==null?t.sibling:null);Ye(tt,tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return hg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ye(tt,tt.current),i)break;return null;case 22:case 23:return e.lanes=0,ug(t,e,n)}return ci(t,e,n)}var pg,uc,mg,gg;pg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uc=function(){};mg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,nr(Gn.current);var s=null;switch(n){case"input":r=bu(t,r),i=bu(t,i),s=[];break;case"select":r=it({},r,{value:void 0}),i=it({},i,{value:void 0}),s=[];break;case"textarea":r=Iu(t,r),i=Iu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ua)}Fu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ks.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};gg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Cs(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function T0(t,e,n){var i=e.pendingProps;switch($c(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(e),null;case 1:return Kt(e.type)&&Ia(),Pt(e),null;case 3:return i=e.stateNode,us(),Ke($t),Ke(Nt),sf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ko(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(_c(Ln),Ln=null))),uc(t,e),Pt(e),null;case 5:rf(e);var r=nr(lo.current);if(n=e.type,t!==null&&e.stateNode!=null)mg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return Pt(e),null}if(t=nr(Gn.current),ko(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Bn]=e,i[oo]=s,t=(e.mode&1)!==0,n){case"dialog":$e("cancel",i),$e("close",i);break;case"iframe":case"object":case"embed":$e("load",i);break;case"video":case"audio":for(r=0;r<zs.length;r++)$e(zs[r],i);break;case"source":$e("error",i);break;case"img":case"image":case"link":$e("error",i),$e("load",i);break;case"details":$e("toggle",i);break;case"input":Vf(i,s),$e("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},$e("invalid",i);break;case"textarea":Xf(i,s),$e("invalid",i)}Fu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,t),r=["children",""+a]):Ks.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$e("scroll",i)}switch(n){case"input":Po(i),Wf(i,s,!0);break;case"textarea":Po(i),jf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ua)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Bn]=e,t[oo]=i,pg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ou(n,i),n){case"dialog":$e("cancel",t),$e("close",t),r=i;break;case"iframe":case"object":case"embed":$e("load",t),r=i;break;case"video":case"audio":for(r=0;r<zs.length;r++)$e(zs[r],t);r=i;break;case"source":$e("error",t),r=i;break;case"img":case"image":case"link":$e("error",t),$e("load",t),r=i;break;case"details":$e("toggle",t),r=i;break;case"input":Vf(t,i),r=bu(t,i),$e("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=it({},i,{value:void 0}),$e("invalid",t);break;case"textarea":Xf(t,i),r=Iu(t,i),$e("invalid",t);break;default:r=i}Fu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?jp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zs(t,l):typeof l=="number"&&Zs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ks.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$e("scroll",t):l!=null&&Ic(t,s,l,o))}switch(n){case"input":Po(t),Wf(t,i,!1);break;case"textarea":Po(t),jf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Oi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Zr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Zr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ua)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pt(e),null;case 6:if(t&&e.stateNode!=null)gg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(n=nr(lo.current),nr(Gn.current),ko(e)){if(i=e.stateNode,n=e.memoizedProps,i[Bn]=e,(s=i.nodeValue!==n)&&(t=an,t!==null))switch(t.tag){case 3:zo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bn]=e,e.stateNode=i}return Pt(e),null;case 13:if(Ke(tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&on!==null&&e.mode&1&&!(e.flags&128))Um(),as(),e.flags|=98560,s=!1;else if(s=ko(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[Bn]=e}else as(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pt(e),s=!1}else Ln!==null&&(_c(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||tt.current&1?mt===0&&(mt=3):_f())),e.updateQueue!==null&&(e.flags|=4),Pt(e),null);case 4:return us(),uc(t,e),t===null&&ro(e.stateNode.containerInfo),Pt(e),null;case 10:return Jc(e.type._context),Pt(e),null;case 17:return Kt(e.type)&&Ia(),Pt(e),null;case 19:if(Ke(tt),s=e.memoizedState,s===null)return Pt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Cs(s,!1);else{if(mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ha(t),o!==null){for(e.flags|=128,Cs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ye(tt,tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&at()>fs&&(e.flags|=128,i=!0,Cs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ha(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return Pt(e),null}else 2*at()-s.renderingStartTime>fs&&n!==1073741824&&(e.flags|=128,i=!0,Cs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=at(),e.sibling=null,n=tt.current,Ye(tt,i?n&1|2:n&1),e):(Pt(e),null);case 22:case 23:return gf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?sn&1073741824&&(Pt(e),e.subtreeFlags&6&&(e.flags|=8192)):Pt(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function w0(t,e){switch($c(e),e.tag){case 1:return Kt(e.type)&&Ia(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return us(),Ke($t),Ke(Nt),sf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rf(e),null;case 13:if(Ke(tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));as()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ke(tt),null;case 4:return us(),null;case 10:return Jc(e.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var Go=!1,Ut=!1,A0=typeof WeakSet=="function"?WeakSet:Set,ce=null;function qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){st(t,e,i)}else n.current=null}function cc(t,e,n){try{n()}catch(i){st(t,e,i)}}var Nd=!1;function R0(t,e){if(Yu=Pa,t=Sm(),Yc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qu={focusedElem:t,selectionRange:n},Pa=!1,ce=e;ce!==null;)if(e=ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ce=t;else for(;ce!==null;){e=ce;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,p=x.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?v:Rn(e.type,v),p);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(S){st(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}return x=Nd,Nd=!1,x}function js(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&cc(e,n,s)}r=r.next}while(r!==i)}}function ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function fc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _g(t){var e=t.alternate;e!==null&&(t.alternate=null,_g(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bn],delete e[oo],delete e[Zu],delete e[u0],delete e[c0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vg(t){return t.tag===5||t.tag===3||t.tag===4}function Fd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ua));else if(i!==4&&(t=t.child,t!==null))for(dc(t,e,n),t=t.sibling;t!==null;)dc(t,e,n),t=t.sibling}function hc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(hc(t,e,n),t=t.sibling;t!==null;)hc(t,e,n),t=t.sibling}var Tt=null,Cn=!1;function hi(t,e,n){for(n=n.child;n!==null;)xg(t,e,n),n=n.sibling}function xg(t,e,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(Qa,n)}catch{}switch(n.tag){case 5:Ut||qr(n,e);case 6:var i=Tt,r=Cn;Tt=null,hi(t,e,n),Tt=i,Cn=r,Tt!==null&&(Cn?(t=Tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(Cn?(t=Tt,n=n.stateNode,t.nodeType===8?zl(t.parentNode,n):t.nodeType===1&&zl(t,n),to(t)):zl(Tt,n.stateNode));break;case 4:i=Tt,r=Cn,Tt=n.stateNode.containerInfo,Cn=!0,hi(t,e,n),Tt=i,Cn=r;break;case 0:case 11:case 14:case 15:if(!Ut&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cc(n,e,o),r=r.next}while(r!==i)}hi(t,e,n);break;case 1:if(!Ut&&(qr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){st(n,e,a)}hi(t,e,n);break;case 21:hi(t,e,n);break;case 22:n.mode&1?(Ut=(i=Ut)||n.memoizedState!==null,hi(t,e,n),Ut=i):hi(t,e,n);break;default:hi(t,e,n)}}function Od(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new A0),e.forEach(function(i){var r=F0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tt=a.stateNode,Cn=!1;break e;case 3:Tt=a.stateNode.containerInfo,Cn=!0;break e;case 4:Tt=a.stateNode.containerInfo,Cn=!0;break e}a=a.return}if(Tt===null)throw Error(Q(160));xg(s,o,r),Tt=null,Cn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){st(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sg(e,t),e=e.sibling}function Sg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yn(e,t),On(t),i&4){try{js(3,t,t.return),ol(3,t)}catch(v){st(t,t.return,v)}try{js(5,t,t.return)}catch(v){st(t,t.return,v)}}break;case 1:yn(e,t),On(t),i&512&&n!==null&&qr(n,n.return);break;case 5:if(yn(e,t),On(t),i&512&&n!==null&&qr(n,n.return),t.flags&32){var r=t.stateNode;try{Zs(r,"")}catch(v){st(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hp(r,s),Ou(a,o);var u=Ou(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?jp(r,h):f==="dangerouslySetInnerHTML"?Wp(r,h):f==="children"?Zs(r,h):Ic(r,f,h,u)}switch(a){case"input":Du(r,s);break;case"textarea":Gp(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Zr(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Zr(r,!!s.multiple,s.defaultValue,!0):Zr(r,!!s.multiple,s.multiple?[]:"",!1))}r[oo]=s}catch(v){st(t,t.return,v)}}break;case 6:if(yn(e,t),On(t),i&4){if(t.stateNode===null)throw Error(Q(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){st(t,t.return,v)}}break;case 3:if(yn(e,t),On(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{to(e.containerInfo)}catch(v){st(t,t.return,v)}break;case 4:yn(e,t),On(t);break;case 13:yn(e,t),On(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(pf=at())),i&4&&Od(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ut=(u=Ut)||f,yn(e,t),Ut=u):yn(e,t),On(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(ce=t,f=t.child;f!==null;){for(h=ce=f;ce!==null;){switch(d=ce,m=d.child,d.tag){case 0:case 11:case 14:case 15:js(4,d,d.return);break;case 1:qr(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){st(i,n,v)}}break;case 5:qr(d,d.return);break;case 22:if(d.memoizedState!==null){kd(h);continue}}m!==null?(m.return=d,ce=m):kd(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Xp("display",o))}catch(v){st(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){st(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:yn(e,t),On(t),i&4&&Od(t);break;case 21:break;default:yn(e,t),On(t)}}function On(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vg(n)){var i=n;break e}n=n.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Zs(r,""),i.flags&=-33);var s=Fd(t);hc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Fd(t);dc(t,a,o);break;default:throw Error(Q(161))}}catch(l){st(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function C0(t,e,n){ce=t,yg(t)}function yg(t,e,n){for(var i=(t.mode&1)!==0;ce!==null;){var r=ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Go;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ut;a=Go;var u=Ut;if(Go=o,(Ut=l)&&!u)for(ce=r;ce!==null;)o=ce,l=o.child,o.tag===22&&o.memoizedState!==null?Bd(r):l!==null?(l.return=o,ce=l):Bd(r);for(;s!==null;)ce=s,yg(s),s=s.sibling;ce=r,Go=a,Ut=u}zd(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ce=s):zd(t)}}function zd(t){for(;ce!==null;){var e=ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ut||ol(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ut)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&to(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Ut||e.flags&512&&fc(e)}catch(d){st(e,e.return,d)}}if(e===t){ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}}function kd(t){for(;ce!==null;){var e=ce;if(e===t){ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ce=n;break}ce=e.return}}function Bd(t){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ol(4,e)}catch(l){st(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){st(e,r,l)}}var s=e.return;try{fc(e)}catch(l){st(e,s,l)}break;case 5:var o=e.return;try{fc(e)}catch(l){st(e,o,l)}}}catch(l){st(e,e.return,l)}if(e===t){ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ce=a;break}ce=e.return}}var L0=Math.ceil,Wa=fi.ReactCurrentDispatcher,df=fi.ReactCurrentOwner,vn=fi.ReactCurrentBatchConfig,ze=0,Mt=null,dt=null,wt=0,sn=0,$r=Hi(0),mt=0,ho=null,hr=0,al=0,hf=0,Ys=null,jt=null,pf=0,fs=1/0,Jn=null,Xa=!1,pc=null,bi=null,Vo=!1,Ei=null,ja=0,qs=0,mc=null,ya=-1,Ma=0;function Ht(){return ze&6?at():ya!==-1?ya:ya=at()}function Di(t){return t.mode&1?ze&2&&wt!==0?wt&-wt:d0.transition!==null?(Ma===0&&(Ma=rm()),Ma):(t=Ve,t!==0||(t=window.event,t=t===void 0?16:fm(t.type)),t):1}function In(t,e,n,i){if(50<qs)throw qs=0,mc=null,Error(Q(185));_o(t,n,i),(!(ze&2)||t!==Mt)&&(t===Mt&&(!(ze&2)&&(al|=n),mt===4&&yi(t,wt)),Zt(t,i),n===1&&ze===0&&!(e.mode&1)&&(fs=at()+500,il&&Gi()))}function Zt(t,e){var n=t.callbackNode;dv(t,e);var i=La(t,t===Mt?wt:0);if(i===0)n!==null&&$f(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&$f(n),e===1)t.tag===0?f0(Hd.bind(null,t)):Pm(Hd.bind(null,t)),a0(function(){!(ze&6)&&Gi()}),n=null;else{switch(sm(i)){case 1:n=kc;break;case 4:n=nm;break;case 16:n=Ca;break;case 536870912:n=im;break;default:n=Ca}n=Lg(n,Mg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mg(t,e){if(ya=-1,Ma=0,ze&6)throw Error(Q(327));var n=t.callbackNode;if(ns()&&t.callbackNode!==n)return null;var i=La(t,t===Mt?wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ya(t,i);else{e=i;var r=ze;ze|=2;var s=Tg();(Mt!==t||wt!==e)&&(Jn=null,fs=at()+500,ir(t,e));do try{D0();break}catch(a){Eg(t,a)}while(1);Qc(),Wa.current=s,ze=r,dt!==null?e=0:(Mt=null,wt=0,e=mt)}if(e!==0){if(e===2&&(r=Gu(t),r!==0&&(i=r,e=gc(t,r))),e===1)throw n=ho,ir(t,0),yi(t,i),Zt(t,at()),n;if(e===6)yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!P0(r)&&(e=Ya(t,i),e===2&&(s=Gu(t),s!==0&&(i=s,e=gc(t,s))),e===1))throw n=ho,ir(t,0),yi(t,i),Zt(t,at()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:Ki(t,jt,Jn);break;case 3:if(yi(t,i),(i&130023424)===i&&(e=pf+500-at(),10<e)){if(La(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Ht(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ku(Ki.bind(null,t,jt,Jn),e);break}Ki(t,jt,Jn);break;case 4:if(yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Un(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=at()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*L0(i/1960))-i,10<i){t.timeoutHandle=Ku(Ki.bind(null,t,jt,Jn),i);break}Ki(t,jt,Jn);break;case 5:Ki(t,jt,Jn);break;default:throw Error(Q(329))}}}return Zt(t,at()),t.callbackNode===n?Mg.bind(null,t):null}function gc(t,e){var n=Ys;return t.current.memoizedState.isDehydrated&&(ir(t,e).flags|=256),t=Ya(t,e),t!==2&&(e=jt,jt=n,e!==null&&_c(e)),t}function _c(t){jt===null?jt=t:jt.push.apply(jt,t)}function P0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Nn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yi(t,e){for(e&=~hf,e&=~al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),i=1<<n;t[n]=-1,e&=~i}}function Hd(t){if(ze&6)throw Error(Q(327));ns();var e=La(t,0);if(!(e&1))return Zt(t,at()),null;var n=Ya(t,e);if(t.tag!==0&&n===2){var i=Gu(t);i!==0&&(e=i,n=gc(t,i))}if(n===1)throw n=ho,ir(t,0),yi(t,e),Zt(t,at()),n;if(n===6)throw Error(Q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ki(t,jt,Jn),Zt(t,at()),null}function mf(t,e){var n=ze;ze|=1;try{return t(e)}finally{ze=n,ze===0&&(fs=at()+500,il&&Gi())}}function pr(t){Ei!==null&&Ei.tag===0&&!(ze&6)&&ns();var e=ze;ze|=1;var n=vn.transition,i=Ve;try{if(vn.transition=null,Ve=1,t)return t()}finally{Ve=i,vn.transition=n,ze=e,!(ze&6)&&Gi()}}function gf(){sn=$r.current,Ke($r)}function ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,o0(n)),dt!==null)for(n=dt.return;n!==null;){var i=n;switch($c(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ia();break;case 3:us(),Ke($t),Ke(Nt),sf();break;case 5:rf(i);break;case 4:us();break;case 13:Ke(tt);break;case 19:Ke(tt);break;case 10:Jc(i.type._context);break;case 22:case 23:gf()}n=n.return}if(Mt=t,dt=t=Ui(t.current,null),wt=sn=e,mt=0,ho=null,hf=al=hr=0,jt=Ys=null,tr!==null){for(e=0;e<tr.length;e++)if(n=tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}tr=null}return t}function Eg(t,e){do{var n=dt;try{if(Qc(),va.current=Va,Ga){for(var i=nt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ga=!1}if(dr=0,St=pt=nt=null,Xs=!1,uo=0,df.current=null,n===null||n.return===null){mt=1,ho=e,dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Cd(o);if(m!==null){m.flags&=-257,Ld(m,o,a,s,e),m.mode&1&&Rd(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){Rd(s,u,e),_f();break e}l=Error(Q(426))}}else if(Qe&&a.mode&1){var p=Cd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Ld(p,o,a,s,e),Kc(cs(l,a));break e}}s=l=cs(l,a),mt!==4&&(mt=2),Ys===null?Ys=[s]:Ys.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=og(s,l,e);Sd(s,c);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(bi===null||!bi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ag(s,a,e);Sd(s,S);break e}}s=s.return}while(s!==null)}Ag(n)}catch(T){e=T,dt===n&&n!==null&&(dt=n=n.return);continue}break}while(1)}function Tg(){var t=Wa.current;return Wa.current=Va,t===null?Va:t}function _f(){(mt===0||mt===3||mt===2)&&(mt=4),Mt===null||!(hr&268435455)&&!(al&268435455)||yi(Mt,wt)}function Ya(t,e){var n=ze;ze|=2;var i=Tg();(Mt!==t||wt!==e)&&(Jn=null,ir(t,e));do try{b0();break}catch(r){Eg(t,r)}while(1);if(Qc(),ze=n,Wa.current=i,dt!==null)throw Error(Q(261));return Mt=null,wt=0,mt}function b0(){for(;dt!==null;)wg(dt)}function D0(){for(;dt!==null&&!iv();)wg(dt)}function wg(t){var e=Cg(t.alternate,t,sn);t.memoizedProps=t.pendingProps,e===null?Ag(t):dt=e,df.current=null}function Ag(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=w0(n,e),n!==null){n.flags&=32767,dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{mt=6,dt=null;return}}else if(n=T0(n,e,sn),n!==null){dt=n;return}if(e=e.sibling,e!==null){dt=e;return}dt=e=t}while(e!==null);mt===0&&(mt=5)}function Ki(t,e,n){var i=Ve,r=vn.transition;try{vn.transition=null,Ve=1,U0(t,e,n,i)}finally{vn.transition=r,Ve=i}return null}function U0(t,e,n,i){do ns();while(Ei!==null);if(ze&6)throw Error(Q(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hv(t,s),t===Mt&&(dt=Mt=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vo||(Vo=!0,Lg(Ca,function(){return ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=Ve;Ve=1;var a=ze;ze|=4,df.current=null,R0(t,n),Sg(n,t),Jv(qu),Pa=!!Yu,qu=Yu=null,t.current=n,C0(n),rv(),ze=a,Ve=o,vn.transition=s}else t.current=n;if(Vo&&(Vo=!1,Ei=t,ja=r),s=t.pendingLanes,s===0&&(bi=null),av(n.stateNode),Zt(t,at()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xa)throw Xa=!1,t=pc,pc=null,t;return ja&1&&t.tag!==0&&ns(),s=t.pendingLanes,s&1?t===mc?qs++:(qs=0,mc=t):qs=0,Gi(),null}function ns(){if(Ei!==null){var t=sm(ja),e=vn.transition,n=Ve;try{if(vn.transition=null,Ve=16>t?16:t,Ei===null)var i=!1;else{if(t=Ei,Ei=null,ja=0,ze&6)throw Error(Q(331));var r=ze;for(ze|=4,ce=t.current;ce!==null;){var s=ce,o=s.child;if(ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ce=u;ce!==null;){var f=ce;switch(f.tag){case 0:case 11:case 15:js(8,f,s)}var h=f.child;if(h!==null)h.return=f,ce=h;else for(;ce!==null;){f=ce;var d=f.sibling,m=f.return;if(_g(f),f===u){ce=null;break}if(d!==null){d.return=m,ce=d;break}ce=m}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ce=o;else e:for(;ce!==null;){if(s=ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:js(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,ce=c;break e}ce=s.return}}var _=t.current;for(ce=_;ce!==null;){o=ce;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ce=g;else e:for(o=_;ce!==null;){if(a=ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ol(9,a)}}catch(T){st(a,a.return,T)}if(a===o){ce=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ce=S;break e}ce=a.return}}if(ze=r,Gi(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(Qa,t)}catch{}i=!0}return i}finally{Ve=n,vn.transition=e}}return!1}function Gd(t,e,n){e=cs(n,e),e=og(t,e,1),t=Pi(t,e,1),e=Ht(),t!==null&&(_o(t,1,e),Zt(t,e))}function st(t,e,n){if(t.tag===3)Gd(t,t,n);else for(;e!==null;){if(e.tag===3){Gd(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(bi===null||!bi.has(i))){t=cs(n,t),t=ag(e,t,1),e=Pi(e,t,1),t=Ht(),e!==null&&(_o(e,1,t),Zt(e,t));break}}e=e.return}}function I0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,Mt===t&&(wt&n)===n&&(mt===4||mt===3&&(wt&130023424)===wt&&500>at()-pf?ir(t,0):hf|=n),Zt(t,e)}function Rg(t,e){e===0&&(t.mode&1?(e=Uo,Uo<<=1,!(Uo&130023424)&&(Uo=4194304)):e=1);var n=Ht();t=ui(t,e),t!==null&&(_o(t,e,n),Zt(t,n))}function N0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rg(t,n)}function F0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),Rg(t,n)}var Cg;Cg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,E0(t,e,n);qt=!!(t.flags&131072)}else qt=!1,Qe&&e.flags&1048576&&bm(e,Oa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sa(t,e),t=e.pendingProps;var r=os(e,Nt.current);ts(e,n),r=af(null,e,i,t,r,n);var s=lf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(i)?(s=!0,Na(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,tf(e),r.updater=rl,e.stateNode=r,r._reactInternals=e,ic(e,i,t,n),e=oc(null,e,i,!0,s,n)):(e.tag=0,Qe&&s&&qc(e),kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Sa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=z0(i),t=Rn(i,t),r){case 0:e=sc(null,e,i,t,n);break e;case 1:e=Dd(null,e,i,t,n);break e;case 11:e=Pd(null,e,i,t,n);break e;case 14:e=bd(null,e,i,Rn(i.type,t),n);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),sc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),Dd(t,e,i,r,n);case 3:e:{if(fg(e),t===null)throw Error(Q(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Nm(t,e),Ba(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=cs(Error(Q(423)),e),e=Ud(t,e,i,n,r);break e}else if(i!==r){r=cs(Error(Q(424)),e),e=Ud(t,e,i,n,r);break e}else for(on=Li(e.stateNode.containerInfo.firstChild),an=e,Qe=!0,Ln=null,n=km(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),i===r){e=ci(t,e,n);break e}kt(t,e,i,n)}e=e.child}return e;case 5:return Bm(e),t===null&&ec(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,$u(i,r)?o=null:s!==null&&$u(i,s)&&(e.flags|=32),cg(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&ec(e),null;case 13:return dg(t,e,n);case 4:return nf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ls(e,null,i,n):kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),Pd(t,e,i,r,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ye(za,i._currentValue),i._currentValue=o,s!==null)if(Nn(s.value,o)){if(s.children===r.children&&!$t.current){e=ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=oi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),tc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Q(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),tc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ts(e,n),r=xn(r),i=i(r),e.flags|=1,kt(t,e,i,n),e.child;case 14:return i=e.type,r=Rn(i,e.pendingProps),r=Rn(i.type,r),bd(t,e,i,r,n);case 15:return lg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),Sa(t,e),e.tag=1,Kt(i)?(t=!0,Na(e)):t=!1,ts(e,n),Om(e,i,r),ic(e,i,r,n),oc(null,e,i,!0,t,n);case 19:return hg(t,e,n);case 22:return ug(t,e,n)}throw Error(Q(156,e.tag))};function Lg(t,e){return tm(t,e)}function O0(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,i){return new O0(t,e,n,i)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function z0(t){if(typeof t=="function")return vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fc)return 11;if(t===Oc)return 14}return 2}function Ui(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ea(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")vf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case kr:return rr(n.children,r,s,e);case Nc:o=8,r|=8;break;case Ru:return t=_n(12,n,e,r|2),t.elementType=Ru,t.lanes=s,t;case Cu:return t=_n(13,n,e,r),t.elementType=Cu,t.lanes=s,t;case Lu:return t=_n(19,n,e,r),t.elementType=Lu,t.lanes=s,t;case zp:return ll(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fp:o=10;break e;case Op:o=9;break e;case Fc:o=11;break e;case Oc:o=14;break e;case vi:o=16,i=null;break e}throw Error(Q(130,t==null?t:typeof t,""))}return e=_n(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function rr(t,e,n,i){return t=_n(7,t,i,e),t.lanes=n,t}function ll(t,e,n,i){return t=_n(22,t,i,e),t.elementType=zp,t.lanes=n,t.stateNode={isHidden:!1},t}function jl(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function Yl(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function k0(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rl(0),this.expirationTimes=Rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xf(t,e,n,i,r,s,o,a,l){return t=new k0(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tf(s),t}function B0(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Pg(t){if(!t)return zi;t=t._reactInternals;e:{if(vr(t)!==t||t.tag!==1)throw Error(Q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(t.tag===1){var n=t.type;if(Kt(n))return Lm(t,n,e)}return e}function bg(t,e,n,i,r,s,o,a,l){return t=xf(n,i,!0,t,r,s,o,a,l),t.context=Pg(null),n=t.current,i=Ht(),r=Di(n),s=oi(i,r),s.callback=e??null,Pi(n,s,r),t.current.lanes=r,_o(t,r,i),Zt(t,i),t}function ul(t,e,n,i){var r=e.current,s=Ht(),o=Di(r);return n=Pg(n),e.context===null?e.context=n:e.pendingContext=n,e=oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Pi(r,e,o),t!==null&&(In(t,r,o,s),_a(t,r,o)),o}function qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sf(t,e){Vd(t,e),(t=t.alternate)&&Vd(t,e)}function H0(){return null}var Dg=typeof reportError=="function"?reportError:function(t){console.error(t)};function yf(t){this._internalRoot=t}cl.prototype.render=yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Q(409));ul(t,e,null,null)};cl.prototype.unmount=yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pr(function(){ul(null,t,null,null)}),e[li]=null}};function cl(t){this._internalRoot=t}cl.prototype.unstable_scheduleHydration=function(t){if(t){var e=lm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Si.length&&e!==0&&e<Si[n].priority;n++);Si.splice(n,0,t),n===0&&cm(t)}};function Mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wd(){}function G0(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=qa(o);s.call(u)}}var o=bg(e,i,t,0,null,!1,!1,"",Wd);return t._reactRootContainer=o,t[li]=o.current,ro(t.nodeType===8?t.parentNode:t),pr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=qa(l);a.call(u)}}var l=xf(t,0,!1,null,null,!1,!1,"",Wd);return t._reactRootContainer=l,t[li]=l.current,ro(t.nodeType===8?t.parentNode:t),pr(function(){ul(e,l,n,i)}),l}function dl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=qa(o);a.call(l)}}ul(e,o,t,r)}else o=G0(n,e,t,r,i);return qa(o)}om=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Os(e.pendingLanes);n!==0&&(Bc(e,n|1),Zt(e,at()),!(ze&6)&&(fs=at()+500,Gi()))}break;case 13:pr(function(){var i=ui(t,1);if(i!==null){var r=Ht();In(i,t,1,r)}}),Sf(t,1)}};Hc=function(t){if(t.tag===13){var e=ui(t,134217728);if(e!==null){var n=Ht();In(e,t,134217728,n)}Sf(t,134217728)}};am=function(t){if(t.tag===13){var e=Di(t),n=ui(t,e);if(n!==null){var i=Ht();In(n,t,e,i)}Sf(t,e)}};lm=function(){return Ve};um=function(t,e){var n=Ve;try{return Ve=t,e()}finally{Ve=n}};ku=function(t,e,n){switch(e){case"input":if(Du(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nl(i);if(!r)throw Error(Q(90));Bp(i),Du(i,r)}}}break;case"textarea":Gp(t,n);break;case"select":e=n.value,e!=null&&Zr(t,!!n.multiple,e,!1)}};$p=mf;Kp=pr;var V0={usingClientEntryPoint:!1,Events:[xo,Vr,nl,Yp,qp,mf]},Ls={findFiberByHostInstance:er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},W0={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jp(t),t===null?null:t.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||H0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{Qa=Wo.inject(W0),Hn=Wo}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V0;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(e))throw Error(Q(200));return B0(t,e,null,n)};un.createRoot=function(t,e){if(!Mf(t))throw Error(Q(299));var n=!1,i="",r=Dg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xf(t,1,!1,null,null,n,!1,i,r),t[li]=e.current,ro(t.nodeType===8?t.parentNode:t),new yf(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Q(188)):(t=Object.keys(t).join(","),Error(Q(268,t)));return t=Jp(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return pr(t)};un.hydrate=function(t,e,n){if(!fl(e))throw Error(Q(200));return dl(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!Mf(t))throw Error(Q(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Dg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bg(e,null,t,1,n??null,r,!1,s,o),t[li]=e.current,ro(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cl(e)};un.render=function(t,e,n){if(!fl(e))throw Error(Q(200));return dl(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!fl(t))throw Error(Q(40));return t._reactRootContainer?(pr(function(){dl(null,null,t,!1,function(){t._reactRootContainer=null,t[li]=null})}),!0):!1};un.unstable_batchedUpdates=mf;un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fl(n))throw Error(Q(200));if(t==null||t._reactInternals===void 0)throw Error(Q(38));return dl(t,e,n,!1,i)};un.version="18.2.0-next-9e3b772b8-20220608";function Ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)}catch(t){console.error(t)}}Ug(),bp.exports=un;var Ig=bp.exports,Xd=Ig;wu.createRoot=Xd.createRoot,wu.hydrateRoot=Xd.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ef="156",X0=0,jd=1,j0=2,Ng=1,Y0=2,Qn=3,ki=0,Qt=1,ti=2,Ii=0,is=1,Yd=2,qd=3,$d=4,q0=5,Or=100,$0=101,K0=102,Kd=103,Zd=104,Z0=200,Q0=201,J0=202,ex=203,Fg=204,Og=205,tx=206,nx=207,ix=208,rx=209,sx=210,ox=0,ax=1,lx=2,vc=3,ux=4,cx=5,fx=6,dx=7,zg=0,hx=1,px=2,Ni=0,mx=1,gx=2,_x=3,vx=4,xx=5,kg=300,ds=301,hs=302,xc=303,Sc=304,hl=306,yc=1e3,bn=1001,Mc=1002,Bt=1003,Qd=1004,ql=1005,mn=1006,Sx=1007,po=1008,Fi=1009,yx=1010,Mx=1011,Tf=1012,Bg=1013,Ti=1014,wi=1015,mo=1016,Hg=1017,Gg=1018,sr=1020,Ex=1021,Dn=1023,Tx=1024,wx=1025,or=1026,ps=1027,Ax=1028,Vg=1029,Rx=1030,Wg=1031,Xg=1033,$l=33776,Kl=33777,Zl=33778,Ql=33779,Jd=35840,eh=35841,th=35842,nh=35843,Cx=36196,ih=37492,rh=37496,sh=37808,oh=37809,ah=37810,lh=37811,uh=37812,ch=37813,fh=37814,dh=37815,hh=37816,ph=37817,mh=37818,gh=37819,_h=37820,vh=37821,Jl=36492,xh=36494,Sh=36495,Lx=36283,yh=36284,Mh=36285,Eh=36286,jg=3e3,ar=3001,Px=3200,bx=3201,Yg=0,Dx=1,lr="",Ze="srgb",Wn="srgb-linear",pl="display-p3",eu=7680,Ux=519,Ix=512,Nx=513,Fx=514,Ox=515,zx=516,kx=517,Bx=518,Hx=519,Th=35044,wh="300 es",Ec=1035,ri=2e3,$a=2001;class xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tu=Math.PI/180,Tc=180/Math.PI;function yo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[t&255]+bt[t>>8&255]+bt[t>>16&255]+bt[t>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[n&63|128]+bt[n>>8&255]+"-"+bt[n>>16&255]+bt[n>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function Gx(t,e){return(t%e+e)%e}function nu(t,e,n){return(1-n)*t+n*e}function Ah(t){return(t&t-1)===0&&t!==0}function wc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,n,i,r,s,o,a,l,u){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],m=i[5],x=i[8],v=r[0],p=r[3],c=r[6],_=r[1],g=r[4],S=r[7],T=r[2],C=r[5],R=r[8];return s[0]=o*v+a*_+l*T,s[3]=o*p+a*g+l*C,s[6]=o*c+a*S+l*R,s[1]=u*v+f*_+h*T,s[4]=u*p+f*g+h*C,s[7]=u*c+f*S+h*R,s[2]=d*v+m*_+x*T,s[5]=d*p+m*g+x*C,s[8]=d*c+m*S+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,m=u*s-o*l,x=n*h+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=m*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(iu.makeScale(e,n)),this}rotate(e){return this.premultiply(iu.makeRotation(-e)),this}translate(e,n){return this.premultiply(iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const iu=new De;function qg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ka(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Vx(){const t=Ka("canvas");return t.style.display="block",t}const Rh={};function $s(t){t in Rh||(Rh[t]=!0,console.warn(t))}function rs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ru(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Wx=new De().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Xx=new De().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function jx(t){return t.convertSRGBToLinear().applyMatrix3(Xx)}function Yx(t){return t.applyMatrix3(Wx).convertLinearToSRGB()}const qx={[Wn]:t=>t,[Ze]:t=>t.convertSRGBToLinear(),[pl]:jx},$x={[Wn]:t=>t,[Ze]:t=>t.convertLinearToSRGB(),[pl]:Yx},Mn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Wn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=qx[e],r=$x[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let yr;class $g{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yr===void 0&&(yr=Ka("canvas")),yr.width=e.width,yr.height=e.height;const i=yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=yr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ka("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(rs(n[i]/255)*255):n[i]=rs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kx=0;class Kg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=yo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(su(r[o].image)):s.push(su(r[o]))}else s=su(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function su(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$g.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zx=0;class Jt extends xs{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=bn,r=bn,s=mn,o=po,a=Dn,l=Fi,u=Jt.DEFAULT_ANISOTROPY,f=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=yo(),this.name="",this.source=new Kg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:($s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===ar?Ze:lr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yc:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yc:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ze?ar:jg}set encoding(e){$s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ar?Ze:lr}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=kg;Jt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],m=l[5],x=l[9],v=l[2],p=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(m+1)/2,T=(c+1)/2,C=(f+d)/4,R=(h+v)/4,b=(x+p)/4;return g>S&&g>T?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=R/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=b/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-x)*(p-x)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(h-v)/_,this.z=(d-f)/_,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qx extends xs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&($s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ar?Ze:lr),this.texture=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:mn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Kg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends Qx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Zg extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jx extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=x,e[n+3]=v;return}if(h!==v||l!==d||u!==m||f!==x){let p=1-a;const c=l*d+u*m+f*x+h*v,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const T=Math.sqrt(g),C=Math.atan2(T,c*_);p=Math.sin(p*C)/T,a=Math.sin(a*C)/T}const S=a*_;if(l=l*p+d*S,u=u*p+m*S,f=f*p+x*S,h=h*p+v*S,p===1-a){const T=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=T,u*=T,f*=T,h*=T}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+f*h+l*m-u*d,e[n+1]=l*x+f*d+u*h-a*m,e[n+2]=u*x+f*m+a*d-l*h,e[n+3]=f*x-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h-d*m*x;break;case"YXZ":this._x=d*f*h+u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h+d*m*x;break;case"ZXY":this._x=d*f*h-u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h-d*m*x;break;case"ZYX":this._x=d*f*h-u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h+d*m*x;break;case"YZX":this._x=d*f*h+u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h-d*m*x;break;case"XZY":this._x=d*f*h-u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ch.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,f=l*i+a*n-s*r,h=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+f*-a-h*-o,this.y=f*l+d*-o+h*-s-u*-a,this.z=h*l+d*-a+u*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ou.copy(this).projectOnVector(e),this.sub(ou)}reflect(e){return this.sub(ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ou=new G,Ch=new Mo;class Eo{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Mr.copy(e.boundingBox),Mr.applyMatrix4(e.matrixWorld),this.union(Mr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Yn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Yn)}else r.boundingBox===null&&r.computeBoundingBox(),Mr.copy(r.boundingBox),Mr.applyMatrix4(e.matrixWorld),this.union(Mr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),Xo.subVectors(this.max,bs),Er.subVectors(e.a,bs),Tr.subVectors(e.b,bs),wr.subVectors(e.c,bs),pi.subVectors(Tr,Er),mi.subVectors(wr,Tr),Xi.subVectors(Er,wr);let n=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Xi.z,Xi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Xi.z,0,-Xi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Xi.y,Xi.x,0];return!au(n,Er,Tr,wr,Xo)||(n=[1,0,0,0,1,0,0,0,1],!au(n,Er,Tr,wr,Xo))?!1:(jo.crossVectors(pi,mi),n=[jo.x,jo.y,jo.z],au(n,Er,Tr,wr,Xo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new G,new G,new G,new G,new G,new G,new G,new G],Yn=new G,Mr=new Eo,Er=new G,Tr=new G,wr=new G,pi=new G,mi=new G,Xi=new G,bs=new G,Xo=new G,jo=new G,ji=new G;function au(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ji.fromArray(t,s);const a=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),u=n.dot(ji),f=i.dot(ji);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const eS=new Eo,Ds=new G,lu=new G;class wf{constructor(e=new G,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):eS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const n=Ds.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(lu)),this.expandByPoint(Ds.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new G,uu=new G,Yo=new G,gi=new G,cu=new G,qo=new G,fu=new G;class Qg{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,n),qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){uu.copy(e).add(n).multiplyScalar(.5),Yo.copy(n).sub(e).normalize(),gi.copy(this.origin).sub(uu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Yo),a=gi.dot(this.direction),l=-gi.dot(Yo),u=gi.lengthSq(),f=Math.abs(1-o*o);let h,d,m,x;if(f>0)if(h=o*l-a,d=o*a-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const v=1/f;h*=v,d*=v,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(uu).addScaledVector(Yo,d),m}intersectSphere(e,n){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,n,i,r,s){cu.subVectors(n,e),qo.subVectors(i,e),fu.crossVectors(cu,qo);let o=this.direction.dot(fu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const l=a*this.direction.dot(qo.crossVectors(gi,qo));if(l<0)return null;const u=a*this.direction.dot(cu.cross(gi));if(u<0||l+u>o)return null;const f=-a*gi.dot(fu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,u,f,h,d,m,x,v,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,d,m,x,v,p)}set(e,n,i,r,s,o,a,l,u,f,h,d,m,x,v,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=m,c[7]=x,c[11]=v,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=m+x*u,n[5]=d-v*u,n[9]=-a*l,n[2]=v-d*u,n[6]=x+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,x=u*f,v=u*h;n[0]=d+v*a,n[4]=x*a-m,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-x,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,x=u*f,v=u*h;n[0]=d-v*a,n[4]=-o*h,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=x*u-m,n[8]=d*u+v,n[1]=l*h,n[5]=v*u+d,n[9]=m*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=v-d*h,n[8]=x*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*h+x,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,m=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+v,n[5]=o*f,n[9]=m*h-x,n[2]=x*h-m,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tS,e,nS)}lookAt(e,n,i){const r=this.elements;return tn.subVectors(e,n),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),_i.crossVectors(i,tn),_i.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),_i.crossVectors(i,tn)),_i.normalize(),$o.crossVectors(tn,_i),r[0]=_i.x,r[4]=$o.x,r[8]=tn.x,r[1]=_i.y,r[5]=$o.y,r[9]=tn.y,r[2]=_i.z,r[6]=$o.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],m=i[13],x=i[2],v=i[6],p=i[10],c=i[14],_=i[3],g=i[7],S=i[11],T=i[15],C=r[0],R=r[4],b=r[8],M=r[12],w=r[1],Z=r[5],B=r[9],D=r[13],O=r[2],V=r[6],K=r[10],W=r[14],L=r[3],X=r[7],z=r[11],U=r[15];return s[0]=o*C+a*w+l*O+u*L,s[4]=o*R+a*Z+l*V+u*X,s[8]=o*b+a*B+l*K+u*z,s[12]=o*M+a*D+l*W+u*U,s[1]=f*C+h*w+d*O+m*L,s[5]=f*R+h*Z+d*V+m*X,s[9]=f*b+h*B+d*K+m*z,s[13]=f*M+h*D+d*W+m*U,s[2]=x*C+v*w+p*O+c*L,s[6]=x*R+v*Z+p*V+c*X,s[10]=x*b+v*B+p*K+c*z,s[14]=x*M+v*D+p*W+c*U,s[3]=_*C+g*w+S*O+T*L,s[7]=_*R+g*Z+S*V+T*X,s[11]=_*b+g*B+S*K+T*z,s[15]=_*M+g*D+S*W+T*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],c=e[15];return x*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*m-i*l*m)+v*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*f-s*l*f)+p*(+n*u*h-n*a*m-s*o*h+i*o*m+s*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],c=e[15],_=h*p*u-v*d*u+v*l*m-a*p*m-h*l*c+a*d*c,g=x*d*u-f*p*u-x*l*m+o*p*m+f*l*c-o*d*c,S=f*v*u-x*h*u+x*a*m-o*v*m-f*a*c+o*h*c,T=x*h*l-f*v*l-x*a*d+o*v*d+f*a*p-o*h*p,C=n*_+i*g+r*S+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=_*R,e[1]=(v*d*s-h*p*s-v*r*m+i*p*m+h*r*c-i*d*c)*R,e[2]=(a*p*s-v*l*s+v*r*u-i*p*u-a*r*c+i*l*c)*R,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*m-i*l*m)*R,e[4]=g*R,e[5]=(f*p*s-x*d*s+x*r*m-n*p*m-f*r*c+n*d*c)*R,e[6]=(x*l*s-o*p*s-x*r*u+n*p*u+o*r*c-n*l*c)*R,e[7]=(o*d*s-f*l*s+f*r*u-n*d*u-o*r*m+n*l*m)*R,e[8]=S*R,e[9]=(x*h*s-f*v*s-x*i*m+n*v*m+f*i*c-n*h*c)*R,e[10]=(o*v*s-x*a*s+x*i*u-n*v*u-o*i*c+n*a*c)*R,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*m-n*a*m)*R,e[12]=T*R,e[13]=(f*v*r-x*h*r+x*i*d-n*v*d-f*i*p+n*h*p)*R,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*p-n*a*p)*R,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,d=s*u,m=s*f,x=s*h,v=o*f,p=o*h,c=a*h,_=l*u,g=l*f,S=l*h,T=i.x,C=i.y,R=i.z;return r[0]=(1-(v+c))*T,r[1]=(m+S)*T,r[2]=(x-g)*T,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(d+c))*C,r[6]=(p+_)*C,r[7]=0,r[8]=(x+g)*R,r[9]=(p-_)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const o=Ar.set(r[4],r[5],r[6]).length(),a=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);const u=1/s,f=1/o,h=1/a;return En.elements[0]*=u,En.elements[1]*=u,En.elements[2]*=u,En.elements[4]*=f,En.elements[5]*=f,En.elements[6]*=f,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,n.setFromRotationMatrix(En),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ri){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,x;if(a===ri)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===$a)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ri){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*u,m=(i+r)*f;let x,v;if(a===ri)x=(o+s)*h,v=-2*h;else if(a===$a)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ar=new G,En=new gt,tS=new G(0,0,0),nS=new G(1,1,1),_i=new G,$o=new G,tn=new G,Lh=new gt,Ph=new Mo;class ml{constructor(e=0,n=0,i=0,r=ml.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ml.DEFAULT_ORDER="XYZ";class Af{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iS=0;const bh=new G,Rr=new Mo,$n=new gt,Ko=new G,Us=new G,rS=new G,sS=new Mo,Dh=new G(1,0,0),Uh=new G(0,1,0),Ih=new G(0,0,1),oS={type:"added"},aS={type:"removed"};class It extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new G,n=new ml,i=new Mo,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new De}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Af,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rr.setFromAxisAngle(e,n),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,n){return Rr.setFromAxisAngle(e,n),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Dh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,n){return bh.copy(e).applyQuaternion(this.quaternion),this.position.add(bh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ko.copy(e):Ko.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Us,Ko,this.up):$n.lookAt(Ko,Us,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix($n),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(oS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(aS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,rS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,sS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new G(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new G,Kn=new G,du=new G,Zn=new G,Cr=new G,Lr=new G,Nh=new G,hu=new G,pu=new G,mu=new G;let Zo=!1;class Pn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Tn.subVectors(e,n),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Tn.subVectors(r,n),Kn.subVectors(i,n),du.subVectors(e,n);const o=Tn.dot(Tn),a=Tn.dot(Kn),l=Tn.dot(du),u=Kn.dot(Kn),f=Kn.dot(du),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(u*l-a*f)*d,x=(o*f-a*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,n,i,r,s,o,a,l){return Zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zo=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Zn),l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l}static isFrontFacing(e,n,i,r){return Tn.subVectors(i,n),Kn.subVectors(e,n),Tn.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Tn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zo=!0),Pn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Cr.subVectors(r,i),Lr.subVectors(s,i),hu.subVectors(e,i);const l=Cr.dot(hu),u=Lr.dot(hu);if(l<=0&&u<=0)return n.copy(i);pu.subVectors(e,r);const f=Cr.dot(pu),h=Lr.dot(pu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Cr,o);mu.subVectors(e,s);const m=Cr.dot(mu),x=Lr.dot(mu);if(x>=0&&m<=x)return n.copy(s);const v=m*u-l*x;if(v<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Lr,a);const p=f*x-m*h;if(p<=0&&h-f>=0&&m-x>=0)return Nh.subVectors(s,r),a=(h-f)/(h-f+(m-x)),n.copy(r).addScaledVector(Nh,a);const c=1/(p+v+d);return o=v*c,a=d*c,n.copy(i).addScaledVector(Cr,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let lS=0;class To extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=is,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fg,this.blendDst=Og,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eu,this.stencilZFail=eu,this.stencilZPass=eu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Mn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Mn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Mn.workingColorSpace){if(e=Gx(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=gu(o,s,e+1/3),this.g=gu(o,s,e),this.b=gu(o,s,e-1/3)}return Mn.toWorkingColorSpace(this,r),this}setStyle(e,n=Ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ze){const i=Jg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=ru(e.r),this.g=ru(e.g),this.b=ru(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return Mn.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Yt(Dt.r*255,0,255))*65536+Math.round(Yt(Dt.g*255,0,255))*256+Math.round(Yt(Dt.b*255,0,255))}getHexString(e=Ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mn.workingColorSpace){Mn.fromWorkingColorSpace(Dt.copy(this),n);const i=Dt.r,r=Dt.g,s=Dt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Mn.workingColorSpace){return Mn.fromWorkingColorSpace(Dt.copy(this),n),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Ze){Mn.fromWorkingColorSpace(Dt.copy(this),e);const n=Dt.r,i=Dt.g,r=Dt.b;return e!==Ze?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wn),wn.h+=e,wn.s+=n,wn.l+=i,this.setHSL(wn.h,wn.s,wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wn),e.getHSL(Qo);const i=nu(wn.h,Qo.h,n),r=nu(wn.s,Qo.s,n),s=nu(wn.l,Qo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new We;We.NAMES=Jg;class e_ extends To{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new G,Jo=new He;class Vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Th,this.updateRange={offset:0,count:-1},this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jo.fromBufferAttribute(this,n),Jo.applyMatrix3(e),this.setXY(n,Jo.x,Jo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyMatrix3(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyMatrix4(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyNormalMatrix(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.transformDirection(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ps(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ps(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ps(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ps(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Th&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class t_ extends Vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class n_ extends Vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ur extends Vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let uS=0;const dn=new gt,_u=new It,Pr=new G,nn=new Eo,Is=new Eo,xt=new G;class xr extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qg(e)?n_:t_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,n,i){return dn.makeTranslation(e,n,i),this.applyMatrix4(dn),this}scale(e,n,i){return dn.makeScale(e,n,i),this.applyMatrix4(dn),this}lookAt(e){return _u.lookAt(e),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ur(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(nn.min,Is.min),nn.expandByPoint(xt),xt.addVectors(nn.max,Is.max),nn.expandByPoint(xt)):(nn.expandByPoint(Is.min),nn.expandByPoint(Is.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)xt.fromBufferAttribute(a,u),l&&(Pr.fromBufferAttribute(e,u),xt.add(Pr)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let w=0;w<a;w++)u[w]=new G,f[w]=new G;const h=new G,d=new G,m=new G,x=new He,v=new He,p=new He,c=new G,_=new G;function g(w,Z,B){h.fromArray(r,w*3),d.fromArray(r,Z*3),m.fromArray(r,B*3),x.fromArray(o,w*2),v.fromArray(o,Z*2),p.fromArray(o,B*2),d.sub(h),m.sub(h),v.sub(x),p.sub(x);const D=1/(v.x*p.y-p.x*v.y);isFinite(D)&&(c.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(D),_.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(D),u[w].add(c),u[Z].add(c),u[B].add(c),f[w].add(_),f[Z].add(_),f[B].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let w=0,Z=S.length;w<Z;++w){const B=S[w],D=B.start,O=B.count;for(let V=D,K=D+O;V<K;V+=3)g(i[V+0],i[V+1],i[V+2])}const T=new G,C=new G,R=new G,b=new G;function M(w){R.fromArray(s,w*3),b.copy(R);const Z=u[w];T.copy(Z),T.sub(R.multiplyScalar(R.dot(Z))).normalize(),C.crossVectors(b,Z);const D=C.dot(f[w])<0?-1:1;l[w*4]=T.x,l[w*4+1]=T.y,l[w*4+2]=T.z,l[w*4+3]=D}for(let w=0,Z=S.length;w<Z;++w){const B=S[w],D=B.start,O=B.count;for(let V=D,K=D+O;V<K;V+=3)M(i[V+0]),M(i[V+1]),M(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,u=new G,f=new G,h=new G;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)xt.fromBufferAttribute(e,n),xt.normalize(),e.setXYZ(n,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*f;for(let c=0;c<f;c++)d[x++]=u[m++]}return new Vn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fh=new gt,Yi=new Qg,ea=new wf,Oh=new G,br=new G,Dr=new G,Ur=new G,vu=new G,ta=new G,na=new He,ia=new He,ra=new He,zh=new G,kh=new G,Bh=new G,sa=new G,oa=new G;class si extends It{constructor(e=new xr,n=new e_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ta.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(vu.fromBufferAttribute(h,e),o?ta.addScaledVector(vu,f):ta.addScaledVector(vu.sub(n),f))}n.add(ta)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(ea.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(ea,Oh)===null||Yi.origin.distanceToSquared(Oh)>(e.far-e.near)**2))&&(Fh.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(Fh),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Yi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const p=d[x],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,T=g;S<T;S+=3){const C=a.getX(S),R=a.getX(S+1),b=a.getX(S+2);r=aa(this,c,e,i,u,f,h,C,R,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=x,c=v;p<c;p+=3){const _=a.getX(p),g=a.getX(p+1),S=a.getX(p+2);r=aa(this,o,e,i,u,f,h,_,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const p=d[x],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,T=g;S<T;S+=3){const C=S,R=S+1,b=S+2;r=aa(this,c,e,i,u,f,h,C,R,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,c=v;p<c;p+=3){const _=p,g=p+1,S=p+2;r=aa(this,o,e,i,u,f,h,_,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function cS(t,e,n,i,r,s,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ki,a),l===null)return null;oa.copy(a),oa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(oa);return u<n.near||u>n.far?null:{distance:u,point:oa.clone(),object:t}}function aa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,br),t.getVertexPosition(l,Dr),t.getVertexPosition(u,Ur);const f=cS(t,e,n,i,br,Dr,Ur,sa);if(f){r&&(na.fromBufferAttribute(r,a),ia.fromBufferAttribute(r,l),ra.fromBufferAttribute(r,u),f.uv=Pn.getInterpolation(sa,br,Dr,Ur,na,ia,ra,new He)),s&&(na.fromBufferAttribute(s,a),ia.fromBufferAttribute(s,l),ra.fromBufferAttribute(s,u),f.uv1=Pn.getInterpolation(sa,br,Dr,Ur,na,ia,ra,new He),f.uv2=f.uv1),o&&(zh.fromBufferAttribute(o,a),kh.fromBufferAttribute(o,l),Bh.fromBufferAttribute(o,u),f.normal=Pn.getInterpolation(sa,br,Dr,Ur,zh,kh,Bh,new G),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new G,materialIndex:0};Pn.getNormal(br,Dr,Ur,h.normal),f.face=h}return f}class wo extends xr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ur(u,3)),this.setAttribute("normal",new ur(f,3)),this.setAttribute("uv",new ur(h,2));function x(v,p,c,_,g,S,T,C,R,b,M){const w=S/R,Z=T/b,B=S/2,D=T/2,O=C/2,V=R+1,K=b+1;let W=0,L=0;const X=new G;for(let z=0;z<K;z++){const U=z*Z-D;for(let k=0;k<V;k++){const se=k*w-B;X[v]=se*_,X[p]=U*g,X[c]=O,u.push(X.x,X.y,X.z),X[v]=0,X[p]=0,X[c]=C>0?1:-1,f.push(X.x,X.y,X.z),h.push(k/R),h.push(1-z/b),W+=1}}for(let z=0;z<b;z++)for(let U=0;U<R;U++){const k=d+U+V*z,se=d+U+V*(z+1),oe=d+(U+1)+V*(z+1),ue=d+(U+1)+V*z;l.push(k,se,ue),l.push(se,oe,ue),L+=6}a.addGroup(m,L,M),m+=L,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const i=ms(t[n]);for(const r in i)e[r]=i[r]}return e}function fS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function i_(t){return t.getRenderTarget()===null?t.outputColorSpace:Wn}const dS={clone:ms,merge:zt};var hS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends To{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hS,this.fragmentShader=pS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=fS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class r_ extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends r_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Tc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tc*2*Math.atan(Math.tan(tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ir=-90,Nr=1;class mS extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new gn(Ir,Nr,e,n);r.layers=this.layers,this.add(r);const s=new gn(Ir,Nr,e,n);s.layers=this.layers,this.add(s);const o=new gn(Ir,Nr,e,n);o.layers=this.layers,this.add(o);const a=new gn(Ir,Nr,e,n);a.layers=this.layers,this.add(a);const l=new gn(Ir,Nr,e,n);l.layers=this.layers,this.add(l);const u=new gn(Ir,Nr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,f=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(f),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class s_ extends Jt{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:ds,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gS extends mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&($s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ar?Ze:lr),this.texture=new s_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wo(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Ii});s.uniforms.tEquirect.value=n;const o=new si(r,s),a=n.minFilter;return n.minFilter===po&&(n.minFilter=mn),new mS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const xu=new G,_S=new G,vS=new De;class Zi{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xu.subVectors(i,n).cross(_S.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vS.getNormalMatrix(e),r=this.coplanarPoint(xu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new wf,la=new G;class Rf{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,s=new Zi,o=new Zi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],x=r[9],v=r[10],p=r[11],c=r[12],_=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,p-m,S-c).normalize(),i[1].setComponents(l+s,d+u,p+m,S+c).normalize(),i[2].setComponents(l+o,d+f,p+x,S+_).normalize(),i[3].setComponents(l-o,d-f,p-x,S-_).normalize(),i[4].setComponents(l-a,d-h,p-v,S-g).normalize(),n===ri)i[5].setComponents(l+a,d+h,p+v,S+g).normalize();else if(n===$a)i[5].setComponents(a,h,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(la.x=r.normal.x>0?e.max.x:e.min.x,la.y=r.normal.y>0?e.max.y:e.min.y,la.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function o_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,m=t.createBuffer();t.bindBuffer(f,m),t.bufferData(f,h,d),u.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,f,h){const d=f.array,m=f.updateRange;t.bindBuffer(h,u),m.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,f)):h.version<u.version&&(s(h.buffer,u,f),h.version=u.version)}return{get:o,remove:a,update:l}}class gl extends xr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,m=[],x=[],v=[],p=[];for(let c=0;c<f;c++){const _=c*d-o;for(let g=0;g<u;g++){const S=g*h-s;x.push(S,-_,0),v.push(0,0,1),p.push(g/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,S=_+u*(c+1),T=_+1+u*(c+1),C=_+1+u*c;m.push(g,S,C),m.push(S,T,C)}this.setIndex(m),this.setAttribute("position",new ur(x,3)),this.setAttribute("normal",new ur(v,3)),this.setAttribute("uv",new ur(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.widthSegments,e.heightSegments)}}var SS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ES=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,HS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qS="gl_FragColor = linearToOutputTexel( gl_FragColor );",$S=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ty=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ay=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,_y=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,yy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,My=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ty=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ry=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,by=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Uy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,By=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,eM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,sM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _M=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bM=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$M=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:SS,alphahash_pars_fragment:yS,alphamap_fragment:MS,alphamap_pars_fragment:ES,alphatest_fragment:TS,alphatest_pars_fragment:wS,aomap_fragment:AS,aomap_pars_fragment:RS,begin_vertex:CS,beginnormal_vertex:LS,bsdfs:PS,iridescence_fragment:bS,bumpmap_pars_fragment:DS,clipping_planes_fragment:US,clipping_planes_pars_fragment:IS,clipping_planes_pars_vertex:NS,clipping_planes_vertex:FS,color_fragment:OS,color_pars_fragment:zS,color_pars_vertex:kS,color_vertex:BS,common:HS,cube_uv_reflection_fragment:GS,defaultnormal_vertex:VS,displacementmap_pars_vertex:WS,displacementmap_vertex:XS,emissivemap_fragment:jS,emissivemap_pars_fragment:YS,colorspace_fragment:qS,colorspace_pars_fragment:$S,envmap_fragment:KS,envmap_common_pars_fragment:ZS,envmap_pars_fragment:QS,envmap_pars_vertex:JS,envmap_physical_pars_fragment:fy,envmap_vertex:ey,fog_vertex:ty,fog_pars_vertex:ny,fog_fragment:iy,fog_pars_fragment:ry,gradientmap_pars_fragment:sy,lightmap_fragment:oy,lightmap_pars_fragment:ay,lights_lambert_fragment:ly,lights_lambert_pars_fragment:uy,lights_pars_begin:cy,lights_toon_fragment:dy,lights_toon_pars_fragment:hy,lights_phong_fragment:py,lights_phong_pars_fragment:my,lights_physical_fragment:gy,lights_physical_pars_fragment:_y,lights_fragment_begin:vy,lights_fragment_maps:xy,lights_fragment_end:Sy,logdepthbuf_fragment:yy,logdepthbuf_pars_fragment:My,logdepthbuf_pars_vertex:Ey,logdepthbuf_vertex:Ty,map_fragment:wy,map_pars_fragment:Ay,map_particle_fragment:Ry,map_particle_pars_fragment:Cy,metalnessmap_fragment:Ly,metalnessmap_pars_fragment:Py,morphcolor_vertex:by,morphnormal_vertex:Dy,morphtarget_pars_vertex:Uy,morphtarget_vertex:Iy,normal_fragment_begin:Ny,normal_fragment_maps:Fy,normal_pars_fragment:Oy,normal_pars_vertex:zy,normal_vertex:ky,normalmap_pars_fragment:By,clearcoat_normal_fragment_begin:Hy,clearcoat_normal_fragment_maps:Gy,clearcoat_pars_fragment:Vy,iridescence_pars_fragment:Wy,opaque_fragment:Xy,packing:jy,premultiplied_alpha_fragment:Yy,project_vertex:qy,dithering_fragment:$y,dithering_pars_fragment:Ky,roughnessmap_fragment:Zy,roughnessmap_pars_fragment:Qy,shadowmap_pars_fragment:Jy,shadowmap_pars_vertex:eM,shadowmap_vertex:tM,shadowmask_pars_fragment:nM,skinbase_vertex:iM,skinning_pars_vertex:rM,skinning_vertex:sM,skinnormal_vertex:oM,specularmap_fragment:aM,specularmap_pars_fragment:lM,tonemapping_fragment:uM,tonemapping_pars_fragment:cM,transmission_fragment:fM,transmission_pars_fragment:dM,uv_pars_fragment:hM,uv_pars_vertex:pM,uv_vertex:mM,worldpos_vertex:gM,background_vert:_M,background_frag:vM,backgroundCube_vert:xM,backgroundCube_frag:SM,cube_vert:yM,cube_frag:MM,depth_vert:EM,depth_frag:TM,distanceRGBA_vert:wM,distanceRGBA_frag:AM,equirect_vert:RM,equirect_frag:CM,linedashed_vert:LM,linedashed_frag:PM,meshbasic_vert:bM,meshbasic_frag:DM,meshlambert_vert:UM,meshlambert_frag:IM,meshmatcap_vert:NM,meshmatcap_frag:FM,meshnormal_vert:OM,meshnormal_frag:zM,meshphong_vert:kM,meshphong_frag:BM,meshphysical_vert:HM,meshphysical_frag:GM,meshtoon_vert:VM,meshtoon_frag:WM,points_vert:XM,points_frag:jM,shadow_vert:YM,shadow_frag:qM,sprite_vert:$M,sprite_frag:KM},re={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},kn={basic:{uniforms:zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new We(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:zt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:zt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new We(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:zt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:zt([re.points,re.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:zt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:zt([re.common,re.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:zt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:zt([re.sprite,re.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:zt([re.common,re.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:zt([re.lights,re.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};kn.physical={uniforms:zt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const ua={r:0,b:0,g:0};function ZM(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,u,f,h=null,d=0,m=null;function x(p,c){let _=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?v(a,l):g&&g.isColor&&(v(g,1),_=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===hl)?(f===void 0&&(f=new si(new wo(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:ms(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=g.colorSpace!==Ze,(h!==g||d!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new si(new gl(2,2),new gr({name:"BackgroundMaterial",uniforms:ms(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=g.colorSpace!==Ze,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function v(p,c){p.getRGB(ua,i_(t)),i.buffers.color.setClear(ua.r,ua.g,ua.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:x}}function QM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,f=!1;function h(O,V,K,W,L){let X=!1;if(o){const z=v(W,K,V);u!==z&&(u=z,m(u.object)),X=c(O,W,K,L),X&&_(O,W,K,L)}else{const z=V.wireframe===!0;(u.geometry!==W.id||u.program!==K.id||u.wireframe!==z)&&(u.geometry=W.id,u.program=K.id,u.wireframe=z,X=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(X||f)&&(f=!1,b(O,V,K,W),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(O){return i.isWebGL2?t.bindVertexArray(O):s.bindVertexArrayOES(O)}function x(O){return i.isWebGL2?t.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function v(O,V,K){const W=K.wireframe===!0;let L=a[O.id];L===void 0&&(L={},a[O.id]=L);let X=L[V.id];X===void 0&&(X={},L[V.id]=X);let z=X[W];return z===void 0&&(z=p(d()),X[W]=z),z}function p(O){const V=[],K=[],W=[];for(let L=0;L<r;L++)V[L]=0,K[L]=0,W[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:W,object:O,attributes:{},index:null}}function c(O,V,K,W){const L=u.attributes,X=V.attributes;let z=0;const U=K.getAttributes();for(const k in U)if(U[k].location>=0){const oe=L[k];let ue=X[k];if(ue===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),oe===void 0||oe.attribute!==ue||ue&&oe.data!==ue.data)return!0;z++}return u.attributesNum!==z||u.index!==W}function _(O,V,K,W){const L={},X=V.attributes;let z=0;const U=K.getAttributes();for(const k in U)if(U[k].location>=0){let oe=X[k];oe===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(oe=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(oe=O.instanceColor));const ue={};ue.attribute=oe,oe&&oe.data&&(ue.data=oe.data),L[k]=ue,z++}u.attributes=L,u.attributesNum=z,u.index=W}function g(){const O=u.newAttributes;for(let V=0,K=O.length;V<K;V++)O[V]=0}function S(O){T(O,0)}function T(O,V){const K=u.newAttributes,W=u.enabledAttributes,L=u.attributeDivisors;K[O]=1,W[O]===0&&(t.enableVertexAttribArray(O),W[O]=1),L[O]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,V),L[O]=V)}function C(){const O=u.newAttributes,V=u.enabledAttributes;for(let K=0,W=V.length;K<W;K++)V[K]!==O[K]&&(t.disableVertexAttribArray(K),V[K]=0)}function R(O,V,K,W,L,X,z){z===!0?t.vertexAttribIPointer(O,V,K,L,X):t.vertexAttribPointer(O,V,K,W,L,X)}function b(O,V,K,W){if(i.isWebGL2===!1&&(O.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const L=W.attributes,X=K.getAttributes(),z=V.defaultAttributeValues;for(const U in X){const k=X[U];if(k.location>=0){let se=L[U];if(se===void 0&&(U==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),U==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),se!==void 0){const oe=se.normalized,ue=se.itemSize,pe=n.get(se);if(pe===void 0)continue;const Se=pe.buffer,ye=pe.type,Ge=pe.bytesPerElement,Wt=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||se.gpuType===Bg);if(se.isInterleavedBufferAttribute){const Pe=se.data,N=Pe.stride,Rt=se.offset;if(Pe.isInstancedInterleavedBuffer){for(let Me=0;Me<k.locationSize;Me++)T(k.location+Me,Pe.meshPerAttribute);O.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Me=0;Me<k.locationSize;Me++)S(k.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Me=0;Me<k.locationSize;Me++)R(k.location+Me,ue/k.locationSize,ye,oe,N*Ge,(Rt+ue/k.locationSize*Me)*Ge,Wt)}else{if(se.isInstancedBufferAttribute){for(let Pe=0;Pe<k.locationSize;Pe++)T(k.location+Pe,se.meshPerAttribute);O.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Pe=0;Pe<k.locationSize;Pe++)S(k.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Pe=0;Pe<k.locationSize;Pe++)R(k.location+Pe,ue/k.locationSize,ye,oe,ue*Ge,ue/k.locationSize*Pe*Ge,Wt)}}else if(z!==void 0){const oe=z[U];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(k.location,oe);break;case 3:t.vertexAttrib3fv(k.location,oe);break;case 4:t.vertexAttrib4fv(k.location,oe);break;default:t.vertexAttrib1fv(k.location,oe)}}}}C()}function M(){B();for(const O in a){const V=a[O];for(const K in V){const W=V[K];for(const L in W)x(W[L].object),delete W[L];delete V[K]}delete a[O]}}function w(O){if(a[O.id]===void 0)return;const V=a[O.id];for(const K in V){const W=V[K];for(const L in W)x(W[L].object),delete W[L];delete V[K]}delete a[O.id]}function Z(O){for(const V in a){const K=a[V];if(K[O.id]===void 0)continue;const W=K[O.id];for(const L in W)x(W[L].object),delete W[L];delete K[O.id]}}function B(){D(),f=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:Z,initAttributes:g,enableAttribute:S,disableUnusedAttributes:C}}function JM(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,f,h),n.update(f,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function eE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,S=o||e.has("OES_texture_float"),T=g&&S,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:C}}function tE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Zi,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,c=t.get(h);if(!r||x===null||x.length===0||s&&!p)s?f(null):u();else{const _=s?0:i,g=_*4;let S=c.clippingState||null;l.value=S,S=f(x,d,g,m);for(let T=0;T!==g;++T)S[T]=n[T];c.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,x){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const c=m+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<c)&&(p=new Float32Array(c));for(let g=0,S=m;g!==v;++g,S+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function nE(t){let e=new WeakMap;function n(o,a){return a===xc?o.mapping=ds:a===Sc&&(o.mapping=hs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===xc||a===Sc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new gS(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class a_ extends r_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Kr=4,Hh=[.125,.215,.35,.446,.526,.582],Ji=20,Su=new a_,Gh=new We;let yu=null;const Qi=(1+Math.sqrt(5))/2,Fr=1/Qi,Vh=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Qi,Fr),new G(0,Qi,-Fr),new G(Fr,0,Qi),new G(-Fr,0,Qi),new G(Qi,Fr,0),new G(-Qi,Fr,0)];class Wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){yu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yu),e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ds||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:mo,format:Dn,colorSpace:Wn,depthBuffer:!1},r=Xh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iE(s)),this._blurMaterial=rE(s,e,n)}return r}_compileMaterial(e){const n=new si(this._lodPlanes[0],e);this._renderer.compile(n,Su)}_sceneToCubeUV(e,n,i,r){const a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Gh),f.toneMapping=Ni,f.autoClear=!1;const m=new e_({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),x=new si(new wo,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Gh),v=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;ca(r,_*g,c>2?g:0,g,g),f.setRenderTarget(r),v&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ds||e.mapping===hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new si(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ca(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Su)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vh[(r-1)%Vh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new si(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ji-1),v=s/x,p=isFinite(s)?1+Math.floor(f*v):Ji;p>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ji}`);const c=[];let _=0;for(let R=0;R<Ji;++R){const b=R/v,M=Math.exp(-b*b/2);c.push(M),R===0?_+=M:R<p&&(_+=2*M)}for(let R=0;R<c.length;R++)c[R]=c[R]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=x,d.mipInt.value=g-i;const S=this._sizeLods[r],T=3*S*(r>g-Kr?r-g+Kr:0),C=4*(this._cubeSize-S);ca(n,T,C,3*S,2*S),l.setRenderTarget(n),l.render(h,Su)}}function iE(t){const e=[],n=[],i=[];let r=t;const s=t-Kr+1+Hh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Kr?l=Hh[o-t+Kr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,x=6,v=3,p=2,c=1,_=new Float32Array(v*x*m),g=new Float32Array(p*x*m),S=new Float32Array(c*x*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,b=C>2?0:-1,M=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];_.set(M,v*x*C),g.set(d,p*x*C);const w=[C,C,C,C,C,C];S.set(w,c*x*C)}const T=new xr;T.setAttribute("position",new Vn(_,v)),T.setAttribute("uv",new Vn(g,p)),T.setAttribute("faceIndex",new Vn(S,c)),e.push(T),r>Kr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Xh(t,e,n){const i=new mr(t,e,n);return i.texture.mapping=hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ca(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function rE(t,e,n){const i=new Float32Array(Ji),r=new G(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function jh(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Yh(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Cf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===xc||l===Sc,f=l===ds||l===hs;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Wh(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Wh(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function oE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function aE(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let p=0,c=v.length;p<c;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const v=m[x];for(let p=0,c=v.length;p<c;p++)e.update(v[p],t.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,x=h.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let g=0,S=_.length;g<S;g+=3){const T=_[g+0],C=_[g+1],R=_[g+2];d.push(T,C,C,R,R,T)}}else if(x!==void 0){const _=x.array;v=x.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const T=g+0,C=g+1,R=g+2;d.push(T,C,C,R,R,T)}}else return;const p=new(qg(d)?n_:t_)(d,1);p.version=v;const c=s.get(h);c&&e.remove(c),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function lE(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function f(d,m){t.drawElements(s,m,a,d*l),n.update(m,s,1)}function h(d,m,x){if(x===0)return;let v,p;if(r)v=t,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,a,d*l,x),n.update(m,s,x)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h}function uE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function cE(t,e){return t[0]-e[0]}function fE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function dE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new yt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(f);if(p===void 0||p.count!==v){let V=function(){D.dispose(),s.delete(f),f.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();const g=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,T=f.morphAttributes.color!==void 0,C=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let M=0;g===!0&&(M=1),S===!0&&(M=2),T===!0&&(M=3);let w=f.attributes.position.count*M,Z=1;w>e.maxTextureSize&&(Z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const B=new Float32Array(w*Z*4*v),D=new Zg(B,w,Z,v);D.type=wi,D.needsUpdate=!0;const O=M*4;for(let K=0;K<v;K++){const W=C[K],L=R[K],X=b[K],z=w*Z*4*K;for(let U=0;U<W.count;U++){const k=U*O;g===!0&&(o.fromBufferAttribute(W,U),B[z+k+0]=o.x,B[z+k+1]=o.y,B[z+k+2]=o.z,B[z+k+3]=0),S===!0&&(o.fromBufferAttribute(L,U),B[z+k+4]=o.x,B[z+k+5]=o.y,B[z+k+6]=o.z,B[z+k+7]=0),T===!0&&(o.fromBufferAttribute(X,U),B[z+k+8]=o.x,B[z+k+9]=o.y,B[z+k+10]=o.z,B[z+k+11]=X.itemSize===4?o.w:1)}}p={count:v,texture:D,size:new He(w,Z)},s.set(f,p),f.addEventListener("dispose",V)}let c=0;for(let g=0;g<d.length;g++)c+=d[g];const _=f.morphTargetsRelative?1:1-c;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let v=i[f.id];if(v===void 0||v.length!==x){v=[];for(let S=0;S<x;S++)v[S]=[S,0];i[f.id]=v}for(let S=0;S<x;S++){const T=v[S];T[0]=S,T[1]=d[S]}v.sort(fE);for(let S=0;S<8;S++)S<x&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(cE);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const T=a[S],C=T[0],R=T[1];C!==Number.MAX_SAFE_INTEGER&&R?(p&&f.getAttribute("morphTarget"+S)!==p[C]&&f.setAttribute("morphTarget"+S,p[C]),c&&f.getAttribute("morphNormal"+S)!==c[C]&&f.setAttribute("morphNormal"+S,c[C]),r[S]=R,_+=R):(p&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),c&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const g=f.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function hE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const l_=new Jt,u_=new Zg,c_=new Jx,f_=new s_,qh=[],$h=[],Kh=new Float32Array(16),Zh=new Float32Array(9),Qh=new Float32Array(4);function Ss(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qh[r];if(s===void 0&&(s=new Float32Array(r),qh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function _t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function _l(t,e){let n=$h[e];n===void 0&&(n=new Int32Array(e),$h[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function pE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function mE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2fv(this.addr,e),vt(n,e)}}function gE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_t(n,e))return;t.uniform3fv(this.addr,e),vt(n,e)}}function _E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4fv(this.addr,e),vt(n,e)}}function vE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),vt(n,e)}else{if(_t(n,i))return;Qh.set(i),t.uniformMatrix2fv(this.addr,!1,Qh),vt(n,i)}}function xE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),vt(n,e)}else{if(_t(n,i))return;Zh.set(i),t.uniformMatrix3fv(this.addr,!1,Zh),vt(n,i)}}function SE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),vt(n,e)}else{if(_t(n,i))return;Kh.set(i),t.uniformMatrix4fv(this.addr,!1,Kh),vt(n,i)}}function yE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ME(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2iv(this.addr,e),vt(n,e)}}function EE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3iv(this.addr,e),vt(n,e)}}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4iv(this.addr,e),vt(n,e)}}function wE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2uiv(this.addr,e),vt(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3uiv(this.addr,e),vt(n,e)}}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4uiv(this.addr,e),vt(n,e)}}function LE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||l_,r)}function PE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||c_,r)}function bE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||f_,r)}function DE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||u_,r)}function UE(t){switch(t){case 5126:return pE;case 35664:return mE;case 35665:return gE;case 35666:return _E;case 35674:return vE;case 35675:return xE;case 35676:return SE;case 5124:case 35670:return yE;case 35667:case 35671:return ME;case 35668:case 35672:return EE;case 35669:case 35673:return TE;case 5125:return wE;case 36294:return AE;case 36295:return RE;case 36296:return CE;case 35678:case 36198:case 36298:case 36306:case 35682:return LE;case 35679:case 36299:case 36307:return PE;case 35680:case 36300:case 36308:case 36293:return bE;case 36289:case 36303:case 36311:case 36292:return DE}}function IE(t,e){t.uniform1fv(this.addr,e)}function NE(t,e){const n=Ss(e,this.size,2);t.uniform2fv(this.addr,n)}function FE(t,e){const n=Ss(e,this.size,3);t.uniform3fv(this.addr,n)}function OE(t,e){const n=Ss(e,this.size,4);t.uniform4fv(this.addr,n)}function zE(t,e){const n=Ss(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kE(t,e){const n=Ss(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function BE(t,e){const n=Ss(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function HE(t,e){t.uniform1iv(this.addr,e)}function GE(t,e){t.uniform2iv(this.addr,e)}function VE(t,e){t.uniform3iv(this.addr,e)}function WE(t,e){t.uniform4iv(this.addr,e)}function XE(t,e){t.uniform1uiv(this.addr,e)}function jE(t,e){t.uniform2uiv(this.addr,e)}function YE(t,e){t.uniform3uiv(this.addr,e)}function qE(t,e){t.uniform4uiv(this.addr,e)}function $E(t,e,n){const i=this.cache,r=e.length,s=_l(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||l_,s[o])}function KE(t,e,n){const i=this.cache,r=e.length,s=_l(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||c_,s[o])}function ZE(t,e,n){const i=this.cache,r=e.length,s=_l(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||f_,s[o])}function QE(t,e,n){const i=this.cache,r=e.length,s=_l(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||u_,s[o])}function JE(t){switch(t){case 5126:return IE;case 35664:return NE;case 35665:return FE;case 35666:return OE;case 35674:return zE;case 35675:return kE;case 35676:return BE;case 5124:case 35670:return HE;case 35667:case 35671:return GE;case 35668:case 35672:return VE;case 35669:case 35673:return WE;case 5125:return XE;case 36294:return jE;case 36295:return YE;case 36296:return qE;case 35678:case 36198:case 36298:case 36306:case 35682:return $E;case 35679:case 36299:case 36307:return KE;case 35680:case 36300:case 36308:case 36293:return ZE;case 36289:case 36303:case 36311:case 36292:return QE}}class eT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=UE(n.type)}}class tT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=JE(n.type)}}class nT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Mu=/(\w+)(\])?(\[|\.)?/g;function Jh(t,e){t.seq.push(e),t.map[e.id]=e}function iT(t,e,n){const i=t.name,r=i.length;for(Mu.lastIndex=0;;){const s=Mu.exec(i),o=Mu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Jh(n,u===void 0?new eT(a,t,e):new tT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new nT(a),Jh(n,h)),n=h}}}class Ta{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);iT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ep(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let rT=0;function sT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function oT(t){switch(t){case Wn:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function tp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+sT(t.getShaderSource(e),o)}else return r}function aT(t,e){const n=oT(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function lT(t,e){let n;switch(e){case mx:n="Linear";break;case gx:n="Reinhard";break;case _x:n="OptimizedCineon";break;case vx:n="ACESFilmic";break;case xx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function uT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ks).join(`
`)}function cT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ks(t){return t!==""}function np(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ip(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(t){return t.replace(dT,pT)}const hT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pT(t,e){let n=Le[e];if(n===void 0){const i=hT.get(e);if(i!==void 0)n=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ac(n)}const mT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rp(t){return t.replace(mT,gT)}function gT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _T(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ng?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Y0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function vT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ds:case hs:e="ENVMAP_TYPE_CUBE";break;case hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case hs:e="ENVMAP_MODE_REFRACTION";break}return e}function ST(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case zg:e="ENVMAP_BLENDING_MULTIPLY";break;case hx:e="ENVMAP_BLENDING_MIX";break;case px:e="ENVMAP_BLENDING_ADD";break}return e}function yT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function MT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=_T(n),u=vT(n),f=xT(n),h=ST(n),d=yT(n),m=n.isWebGL2?"":uT(n),x=cT(s),v=r.createProgram();let p,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ks).join(`
`),p.length>0&&(p+=`
`),c=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ks).join(`
`),c.length>0&&(c+=`
`)):(p=[sp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),c=[m,sp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ni?"#define TONE_MAPPING":"",n.toneMapping!==Ni?Le.tonemapping_pars_fragment:"",n.toneMapping!==Ni?lT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,aT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ks).join(`
`)),o=Ac(o),o=np(o,n),o=ip(o,n),a=Ac(a),a=np(a,n),a=ip(a,n),o=rp(o),a=rp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=_+p+o,S=_+c+a,T=ep(r,r.VERTEX_SHADER,g),C=ep(r,r.FRAGMENT_SHADER,S);if(r.attachShader(v,T),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const M=r.getProgramInfoLog(v).trim(),w=r.getShaderInfoLog(T).trim(),Z=r.getShaderInfoLog(C).trim();let B=!0,D=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,T,C);else{const O=tp(r,T,"vertex"),V=tp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+O+`
`+V)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||Z==="")&&(D=!1);D&&(this.diagnostics={runnable:B,programLog:M,vertexShader:{log:w,prefix:p},fragmentShader:{log:Z,prefix:c}})}r.deleteShader(T),r.deleteShader(C);let R;this.getUniforms=function(){return R===void 0&&(R=new Ta(r,v)),R};let b;return this.getAttributes=function(){return b===void 0&&(b=fT(r,v)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=C,this}let ET=0;class TT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new wT(e),n.set(e,i)),i}}class wT{constructor(e){this.id=ET++,this.code=e,this.usedTimes=0}}function AT(t,e,n,i,r,s,o){const a=new Af,l=new TT,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function p(M,w,Z,B,D){const O=B.fog,V=D.geometry,K=M.isMeshStandardMaterial?B.environment:null,W=(M.isMeshStandardMaterial?n:e).get(M.envMap||K),L=W&&W.mapping===hl?W.image.height:null,X=x[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,U=z!==void 0?z.length:0;let k=0;V.morphAttributes.position!==void 0&&(k=1),V.morphAttributes.normal!==void 0&&(k=2),V.morphAttributes.color!==void 0&&(k=3);let se,oe,ue,pe;if(X){const qe=kn[X];se=qe.vertexShader,oe=qe.fragmentShader}else se=M.vertexShader,oe=M.fragmentShader,l.update(M),ue=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);const Se=t.getRenderTarget(),ye=D.isInstancedMesh===!0,Ge=!!M.map,Wt=!!M.matcap,Pe=!!W,N=!!M.aoMap,Rt=!!M.lightMap,Me=!!M.bumpMap,Re=!!M.normalMap,Ae=!!M.displacementMap,Je=!!M.emissiveMap,Oe=!!M.metalnessMap,be=!!M.roughnessMap,Xe=M.anisotropy>0,Et=M.clearcoat>0,Ct=M.iridescence>0,A=M.sheen>0,y=M.transmission>0,H=Xe&&!!M.anisotropyMap,ee=Et&&!!M.clearcoatMap,J=Et&&!!M.clearcoatNormalMap,te=Et&&!!M.clearcoatRoughnessMap,me=Ct&&!!M.iridescenceMap,ne=Ct&&!!M.iridescenceThicknessMap,Y=A&&!!M.sheenColorMap,ve=A&&!!M.sheenRoughnessMap,ge=!!M.specularMap,_e=!!M.specularColorMap,de=!!M.specularIntensityMap,he=y&&!!M.transmissionMap,Ue=y&&!!M.thicknessMap,je=!!M.gradientMap,P=!!M.alphaMap,ae=M.alphaTest>0,j=!!M.alphaHash,ie=!!M.extensions,le=!!V.attributes.uv1,ke=!!V.attributes.uv2,et=!!V.attributes.uv3;let lt=Ni;return M.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(lt=t.toneMapping),{isWebGL2:f,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:se,fragmentShader:oe,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:ye,instancingColor:ye&&D.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Se===null?t.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Wn,map:Ge,matcap:Wt,envMap:Pe,envMapMode:Pe&&W.mapping,envMapCubeUVHeight:L,aoMap:N,lightMap:Rt,bumpMap:Me,normalMap:Re,displacementMap:d&&Ae,emissiveMap:Je,normalMapObjectSpace:Re&&M.normalMapType===Dx,normalMapTangentSpace:Re&&M.normalMapType===Yg,metalnessMap:Oe,roughnessMap:be,anisotropy:Xe,anisotropyMap:H,clearcoat:Et,clearcoatMap:ee,clearcoatNormalMap:J,clearcoatRoughnessMap:te,iridescence:Ct,iridescenceMap:me,iridescenceThicknessMap:ne,sheen:A,sheenColorMap:Y,sheenRoughnessMap:ve,specularMap:ge,specularColorMap:_e,specularIntensityMap:de,transmission:y,transmissionMap:he,thicknessMap:Ue,gradientMap:je,opaque:M.transparent===!1&&M.blending===is,alphaMap:P,alphaTest:ae,alphaHash:j,combine:M.combine,mapUv:Ge&&v(M.map.channel),aoMapUv:N&&v(M.aoMap.channel),lightMapUv:Rt&&v(M.lightMap.channel),bumpMapUv:Me&&v(M.bumpMap.channel),normalMapUv:Re&&v(M.normalMap.channel),displacementMapUv:Ae&&v(M.displacementMap.channel),emissiveMapUv:Je&&v(M.emissiveMap.channel),metalnessMapUv:Oe&&v(M.metalnessMap.channel),roughnessMapUv:be&&v(M.roughnessMap.channel),anisotropyMapUv:H&&v(M.anisotropyMap.channel),clearcoatMapUv:ee&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:J&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(M.sheenRoughnessMap.channel),specularMapUv:ge&&v(M.specularMap.channel),specularColorMapUv:_e&&v(M.specularColorMap.channel),specularIntensityMapUv:de&&v(M.specularIntensityMap.channel),transmissionMapUv:he&&v(M.transmissionMap.channel),thicknessMapUv:Ue&&v(M.thicknessMap.channel),alphaMapUv:P&&v(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Re||Xe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:ke,vertexUv3s:et,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Ge||P),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:k,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&Z.length>0,shadowMapType:t.shadowMap.type,toneMapping:lt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&M.map.colorSpace===Ze,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ti,flipSided:M.side===Qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ie&&M.extensions.derivatives===!0,extensionFragDepth:ie&&M.extensions.fragDepth===!0,extensionDrawBuffers:ie&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function c(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Z in M.defines)w.push(Z),w.push(M.defines[Z]);return M.isRawShaderMaterial===!1&&(_(w,M),g(w,M),w.push(t.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function g(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const w=x[M.type];let Z;if(w){const B=kn[w];Z=dS.clone(B.uniforms)}else Z=M.uniforms;return Z}function T(M,w){let Z;for(let B=0,D=u.length;B<D;B++){const O=u[B];if(O.cacheKey===w){Z=O,++Z.usedTimes;break}}return Z===void 0&&(Z=new MT(t,w,M,s),u.push(Z)),Z}function C(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:S,acquireProgram:T,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:b}}function RT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function CT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function op(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ap(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,x,v,p){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:m,groupOrder:x,renderOrder:h.renderOrder,z:v,group:p},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=m,c.groupOrder=x,c.renderOrder=h.renderOrder,c.z=v,c.group=p),e++,c}function a(h,d,m,x,v,p){const c=o(h,d,m,x,v,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(h,d,m,x,v,p){const c=o(h,d,m,x,v,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||CT),i.length>1&&i.sort(d||op),r.length>1&&r.sort(d||op)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function LT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ap,t.set(i,[o])):r>=s.length?(o=new ap,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function PT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new We};break;case"SpotLight":n={position:new G,direction:new G,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function bT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let DT=0;function UT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function IT(t,e){const n=new PT,i=bT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new G);const s=new G,o=new gt,a=new gt;function l(f,h){let d=0,m=0,x=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let v=0,p=0,c=0,_=0,g=0,S=0,T=0,C=0,R=0,b=0;f.sort(UT);const M=h===!0?Math.PI:1;for(let Z=0,B=f.length;Z<B;Z++){const D=f[Z],O=D.color,V=D.intensity,K=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*V*M,m+=O.g*V*M,x+=O.b*V*M;else if(D.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(D.sh.coefficients[L],V);else if(D.isDirectionalLight){const L=n.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const X=D.shadow,z=i.get(D);z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,r.directionalShadow[v]=z,r.directionalShadowMap[v]=W,r.directionalShadowMatrix[v]=D.shadow.matrix,S++}r.directional[v]=L,v++}else if(D.isSpotLight){const L=n.get(D);L.position.setFromMatrixPosition(D.matrixWorld),L.color.copy(O).multiplyScalar(V*M),L.distance=K,L.coneCos=Math.cos(D.angle),L.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),L.decay=D.decay,r.spot[c]=L;const X=D.shadow;if(D.map&&(r.spotLightMap[R]=D.map,R++,X.updateMatrices(D),D.castShadow&&b++),r.spotLightMatrix[c]=X.matrix,D.castShadow){const z=i.get(D);z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,r.spotShadow[c]=z,r.spotShadowMap[c]=W,C++}c++}else if(D.isRectAreaLight){const L=n.get(D);L.color.copy(O).multiplyScalar(V),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),r.rectArea[_]=L,_++}else if(D.isPointLight){const L=n.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*M),L.distance=D.distance,L.decay=D.decay,D.castShadow){const X=D.shadow,z=i.get(D);z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,r.pointShadow[p]=z,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=D.shadow.matrix,T++}r.point[p]=L,p++}else if(D.isHemisphereLight){const L=n.get(D);L.skyColor.copy(D.color).multiplyScalar(V*M),L.groundColor.copy(D.groundColor).multiplyScalar(V*M),r.hemi[g]=L,g++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const w=r.hash;(w.directionalLength!==v||w.pointLength!==p||w.spotLength!==c||w.rectAreaLength!==_||w.hemiLength!==g||w.numDirectionalShadows!==S||w.numPointShadows!==T||w.numSpotShadows!==C||w.numSpotMaps!==R)&&(r.directional.length=v,r.spot.length=c,r.rectArea.length=_,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=C+R-b,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=b,w.directionalLength=v,w.pointLength=p,w.spotLength=c,w.rectAreaLength=_,w.hemiLength=g,w.numDirectionalShadows=S,w.numPointShadows=T,w.numSpotShadows=C,w.numSpotMaps=R,r.version=DT++)}function u(f,h){let d=0,m=0,x=0,v=0,p=0;const c=h.matrixWorldInverse;for(let _=0,g=f.length;_<g;_++){const S=f[_];if(S.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),d++}else if(S.isSpotLight){const T=r.spot[x];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),x++}else if(S.isRectAreaLight){const T=r.rectArea[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),a.identity(),o.copy(S.matrixWorld),o.premultiply(c),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),m++}else if(S.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function lp(t,e){const n=new IT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function NT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new lp(t,e),n.set(s,[l])):o>=a.length?(l=new lp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class FT extends To{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Px,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OT extends To{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BT(t,e,n){let i=new Rf;const r=new He,s=new He,o=new yt,a=new FT({depthPacking:bx}),l=new OT,u={},f=n.maxTextureSize,h={[ki]:Qt,[Qt]:ki,[ti]:ti},d=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:zT,fragmentShader:kT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new xr;x.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new si(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ng;let c=this.type;this.render=function(T,C,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const b=t.getRenderTarget(),M=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending(Ii),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const B=c!==Qn&&this.type===Qn,D=c===Qn&&this.type!==Qn;for(let O=0,V=T.length;O<V;O++){const K=T[O],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const L=W.getFrameExtents();if(r.multiply(L),s.copy(W.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/L.x),r.x=s.x*L.x,W.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/L.y),r.y=s.y*L.y,W.mapSize.y=s.y)),W.map===null||B===!0||D===!0){const z=this.type!==Qn?{minFilter:Bt,magFilter:Bt}:{};W.map!==null&&W.map.dispose(),W.map=new mr(r.x,r.y,z),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();const X=W.getViewportCount();for(let z=0;z<X;z++){const U=W.getViewport(z);o.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),Z.viewport(o),W.updateMatrices(K,z),i=W.getFrustum(),S(C,R,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Qn&&_(W,R),W.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(b,M,w)};function _(T,C){const R=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new mr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,R,d,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,R,m,v,null)}function g(T,C,R,b){let M=null;const w=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)M=w;else if(M=R.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Z=M.uuid,B=C.uuid;let D=u[Z];D===void 0&&(D={},u[Z]=D);let O=D[B];O===void 0&&(O=M.clone(),D[B]=O),M=O}if(M.visible=C.visible,M.wireframe=C.wireframe,b===Qn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Z=t.properties.get(M);Z.light=R}return M}function S(T,C,R,b,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Qn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const B=e.update(T),D=T.material;if(Array.isArray(D)){const O=B.groups;for(let V=0,K=O.length;V<K;V++){const W=O[V],L=D[W.materialIndex];if(L&&L.visible){const X=g(T,L,b,M);t.renderBufferDirect(R,null,B,X,T,W)}}}else if(D.visible){const O=g(T,D,b,M);t.renderBufferDirect(R,null,B,O,T,null)}}const Z=T.children;for(let B=0,D=Z.length;B<D;B++)S(Z[B],C,R,b,M)}}function HT(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ae=new yt;let j=null;const ie=new yt(0,0,0,0);return{setMask:function(le){j!==le&&!P&&(t.colorMask(le,le,le,le),j=le)},setLocked:function(le){P=le},setClear:function(le,ke,et,lt,di){di===!0&&(le*=lt,ke*=lt,et*=lt),ae.set(le,ke,et,lt),ie.equals(ae)===!1&&(t.clearColor(le,ke,et,lt),ie.copy(ae))},reset:function(){P=!1,j=null,ie.set(-1,0,0,0)}}}function s(){let P=!1,ae=null,j=null,ie=null;return{setTest:function(le){le?Se(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(le){ae!==le&&!P&&(t.depthMask(le),ae=le)},setFunc:function(le){if(j!==le){switch(le){case ox:t.depthFunc(t.NEVER);break;case ax:t.depthFunc(t.ALWAYS);break;case lx:t.depthFunc(t.LESS);break;case vc:t.depthFunc(t.LEQUAL);break;case ux:t.depthFunc(t.EQUAL);break;case cx:t.depthFunc(t.GEQUAL);break;case fx:t.depthFunc(t.GREATER);break;case dx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}j=le}},setLocked:function(le){P=le},setClear:function(le){ie!==le&&(t.clearDepth(le),ie=le)},reset:function(){P=!1,ae=null,j=null,ie=null}}}function o(){let P=!1,ae=null,j=null,ie=null,le=null,ke=null,et=null,lt=null,di=null;return{setTest:function(qe){P||(qe?Se(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(qe){ae!==qe&&!P&&(t.stencilMask(qe),ae=qe)},setFunc:function(qe,Fn,Ft){(j!==qe||ie!==Fn||le!==Ft)&&(t.stencilFunc(qe,Fn,Ft),j=qe,ie=Fn,le=Ft)},setOp:function(qe,Fn,Ft){(ke!==qe||et!==Fn||lt!==Ft)&&(t.stencilOp(qe,Fn,Ft),ke=qe,et=Fn,lt=Ft)},setLocked:function(qe){P=qe},setClear:function(qe){di!==qe&&(t.clearStencil(qe),di=qe)},reset:function(){P=!1,ae=null,j=null,ie=null,le=null,ke=null,et=null,lt=null,di=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,h=new WeakMap;let d={},m={},x=new WeakMap,v=[],p=null,c=!1,_=null,g=null,S=null,T=null,C=null,R=null,b=null,M=!1,w=null,Z=null,B=null,D=null,O=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(L)[1]),K=W>=1):L.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),K=W>=2);let X=null,z={};const U=t.getParameter(t.SCISSOR_BOX),k=t.getParameter(t.VIEWPORT),se=new yt().fromArray(U),oe=new yt().fromArray(k);function ue(P,ae,j,ie){const le=new Uint8Array(4),ke=t.createTexture();t.bindTexture(P,ke),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<j;et++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(ae+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return ke}const pe={};pe[t.TEXTURE_2D]=ue(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=ue(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(pe[t.TEXTURE_2D_ARRAY]=ue(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=ue(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Se(t.DEPTH_TEST),l.setFunc(vc),Ae(!1),Je(jd),Se(t.CULL_FACE),Me(Ii);function Se(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function ye(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function Ge(P,ae){return m[P]!==ae?(t.bindFramebuffer(P,ae),m[P]=ae,i&&(P===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ae),P===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function Wt(P,ae){let j=v,ie=!1;if(P)if(j=x.get(ae),j===void 0&&(j=[],x.set(ae,j)),P.isWebGLMultipleRenderTargets){const le=P.texture;if(j.length!==le.length||j[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,et=le.length;ke<et;ke++)j[ke]=t.COLOR_ATTACHMENT0+ke;j.length=le.length,ie=!0}}else j[0]!==t.COLOR_ATTACHMENT0&&(j[0]=t.COLOR_ATTACHMENT0,ie=!0);else j[0]!==t.BACK&&(j[0]=t.BACK,ie=!0);ie&&(n.isWebGL2?t.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function Pe(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const N={[Or]:t.FUNC_ADD,[$0]:t.FUNC_SUBTRACT,[K0]:t.FUNC_REVERSE_SUBTRACT};if(i)N[Kd]=t.MIN,N[Zd]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(N[Kd]=P.MIN_EXT,N[Zd]=P.MAX_EXT)}const Rt={[Z0]:t.ZERO,[Q0]:t.ONE,[J0]:t.SRC_COLOR,[Fg]:t.SRC_ALPHA,[sx]:t.SRC_ALPHA_SATURATE,[ix]:t.DST_COLOR,[tx]:t.DST_ALPHA,[ex]:t.ONE_MINUS_SRC_COLOR,[Og]:t.ONE_MINUS_SRC_ALPHA,[rx]:t.ONE_MINUS_DST_COLOR,[nx]:t.ONE_MINUS_DST_ALPHA};function Me(P,ae,j,ie,le,ke,et,lt){if(P===Ii){c===!0&&(ye(t.BLEND),c=!1);return}if(c===!1&&(Se(t.BLEND),c=!0),P!==q0){if(P!==_||lt!==M){if((g!==Or||C!==Or)&&(t.blendEquation(t.FUNC_ADD),g=Or,C=Or),lt)switch(P){case is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yd:t.blendFunc(t.ONE,t.ONE);break;case qd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $d:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case qd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $d:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,T=null,R=null,b=null,_=P,M=lt}return}le=le||ae,ke=ke||j,et=et||ie,(ae!==g||le!==C)&&(t.blendEquationSeparate(N[ae],N[le]),g=ae,C=le),(j!==S||ie!==T||ke!==R||et!==b)&&(t.blendFuncSeparate(Rt[j],Rt[ie],Rt[ke],Rt[et]),S=j,T=ie,R=ke,b=et),_=P,M=!1}function Re(P,ae){P.side===ti?ye(t.CULL_FACE):Se(t.CULL_FACE);let j=P.side===Qt;ae&&(j=!j),Ae(j),P.blending===is&&P.transparent===!1?Me(Ii):Me(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ie=P.stencilWrite;u.setTest(ie),ie&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),be(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(P){w!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),w=P)}function Je(P){P!==X0?(Se(t.CULL_FACE),P!==Z&&(P===jd?t.cullFace(t.BACK):P===j0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),Z=P}function Oe(P){P!==B&&(K&&t.lineWidth(P),B=P)}function be(P,ae,j){P?(Se(t.POLYGON_OFFSET_FILL),(D!==ae||O!==j)&&(t.polygonOffset(ae,j),D=ae,O=j)):ye(t.POLYGON_OFFSET_FILL)}function Xe(P){P?Se(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function Et(P){P===void 0&&(P=t.TEXTURE0+V-1),X!==P&&(t.activeTexture(P),X=P)}function Ct(P,ae,j){j===void 0&&(X===null?j=t.TEXTURE0+V-1:j=X);let ie=z[j];ie===void 0&&(ie={type:void 0,texture:void 0},z[j]=ie),(ie.type!==P||ie.texture!==ae)&&(X!==j&&(t.activeTexture(j),X=j),t.bindTexture(P,ae||pe[P]),ie.type=P,ie.texture=ae)}function A(){const P=z[X];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(P){se.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),se.copy(P))}function de(P){oe.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),oe.copy(P))}function he(P,ae){let j=h.get(ae);j===void 0&&(j=new WeakMap,h.set(ae,j));let ie=j.get(P);ie===void 0&&(ie=t.getUniformBlockIndex(ae,P.name),j.set(P,ie))}function Ue(P,ae){const ie=h.get(ae).get(P);f.get(ae)!==ie&&(t.uniformBlockBinding(ae,ie,P.__bindingPointIndex),f.set(ae,ie))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},X=null,z={},m={},x=new WeakMap,v=[],p=null,c=!1,_=null,g=null,S=null,T=null,C=null,R=null,b=null,M=!1,w=null,Z=null,B=null,D=null,O=null,se.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Se,disable:ye,bindFramebuffer:Ge,drawBuffers:Wt,useProgram:Pe,setBlending:Me,setMaterial:Re,setFlipSided:Ae,setCullFace:Je,setLineWidth:Oe,setPolygonOffset:be,setScissorTest:Xe,activeTexture:Et,bindTexture:Ct,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:H,texImage2D:ve,texImage3D:ge,updateUBOMapping:he,uniformBlockBinding:Ue,texStorage2D:ne,texStorage3D:Y,texSubImage2D:ee,texSubImage3D:J,compressedTexSubImage2D:te,compressedTexSubImage3D:me,scissor:_e,viewport:de,reset:je}}function GT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return c?new OffscreenCanvas(A,y):Ka("canvas")}function g(A,y,H,ee){let J=1;if((A.width>ee||A.height>ee)&&(J=ee/Math.max(A.width,A.height)),J<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const te=y?wc:Math.floor,me=te(J*A.width),ne=te(J*A.height);v===void 0&&(v=_(me,ne));const Y=H?_(me,ne):v;return Y.width=me,Y.height=ne,Y.getContext("2d").drawImage(A,0,0,me,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+me+"x"+ne+")."),Y}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return Ah(A.width)&&Ah(A.height)}function T(A){return a?!1:A.wrapS!==bn||A.wrapT!==bn||A.minFilter!==Bt&&A.minFilter!==mn}function C(A,y){return A.generateMipmaps&&y&&A.minFilter!==Bt&&A.minFilter!==mn}function R(A){t.generateMipmap(A)}function b(A,y,H,ee,J=!1){if(a===!1)return y;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let te=y;return y===t.RED&&(H===t.FLOAT&&(te=t.R32F),H===t.HALF_FLOAT&&(te=t.R16F),H===t.UNSIGNED_BYTE&&(te=t.R8)),y===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.R8UI),H===t.UNSIGNED_SHORT&&(te=t.R16UI),H===t.UNSIGNED_INT&&(te=t.R32UI),H===t.BYTE&&(te=t.R8I),H===t.SHORT&&(te=t.R16I),H===t.INT&&(te=t.R32I)),y===t.RG&&(H===t.FLOAT&&(te=t.RG32F),H===t.HALF_FLOAT&&(te=t.RG16F),H===t.UNSIGNED_BYTE&&(te=t.RG8)),y===t.RGBA&&(H===t.FLOAT&&(te=t.RGBA32F),H===t.HALF_FLOAT&&(te=t.RGBA16F),H===t.UNSIGNED_BYTE&&(te=ee===Ze&&J===!1?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)),(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(A,y,H){return C(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function w(A){return A===Bt||A===Qd||A===ql?t.NEAREST:t.LINEAR}function Z(A){const y=A.target;y.removeEventListener("dispose",Z),D(y),y.isVideoTexture&&x.delete(y)}function B(A){const y=A.target;y.removeEventListener("dispose",B),V(y)}function D(A){const y=i.get(A);if(y.__webglInit===void 0)return;const H=A.source,ee=p.get(H);if(ee){const J=ee[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&O(A),Object.keys(ee).length===0&&p.delete(H)}i.remove(A)}function O(A){const y=i.get(A);t.deleteTexture(y.__webglTexture);const H=A.source,ee=p.get(H);delete ee[y.__cacheKey],o.memory.textures--}function V(A){const y=A.texture,H=i.get(A),ee=i.get(y);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(H.__webglFramebuffer[J]))for(let te=0;te<H.__webglFramebuffer[J].length;te++)t.deleteFramebuffer(H.__webglFramebuffer[J][te]);else t.deleteFramebuffer(H.__webglFramebuffer[J]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[J])}else{if(Array.isArray(H.__webglFramebuffer))for(let J=0;J<H.__webglFramebuffer.length;J++)t.deleteFramebuffer(H.__webglFramebuffer[J]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let J=0;J<H.__webglColorRenderbuffer.length;J++)H.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[J]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let J=0,te=y.length;J<te;J++){const me=i.get(y[J]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(y[J])}i.remove(y),i.remove(A)}let K=0;function W(){K=0}function L(){const A=K;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),K+=1,A}function X(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function z(A,y){const H=i.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(H,A,y);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+y)}function U(A,y){const H=i.get(A);if(A.version>0&&H.__version!==A.version){Ge(H,A,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+y)}function k(A,y){const H=i.get(A);if(A.version>0&&H.__version!==A.version){Ge(H,A,y);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+y)}function se(A,y){const H=i.get(A);if(A.version>0&&H.__version!==A.version){Wt(H,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+y)}const oe={[yc]:t.REPEAT,[bn]:t.CLAMP_TO_EDGE,[Mc]:t.MIRRORED_REPEAT},ue={[Bt]:t.NEAREST,[Qd]:t.NEAREST_MIPMAP_NEAREST,[ql]:t.NEAREST_MIPMAP_LINEAR,[mn]:t.LINEAR,[Sx]:t.LINEAR_MIPMAP_NEAREST,[po]:t.LINEAR_MIPMAP_LINEAR},pe={[Ix]:t.NEVER,[Hx]:t.ALWAYS,[Nx]:t.LESS,[Ox]:t.LEQUAL,[Fx]:t.EQUAL,[Bx]:t.GEQUAL,[zx]:t.GREATER,[kx]:t.NOTEQUAL};function Se(A,y,H){if(H?(t.texParameteri(A,t.TEXTURE_WRAP_S,oe[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,oe[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,oe[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ue[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ue[y.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==bn||y.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(y.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(y.minFilter)),y.minFilter!==Bt&&y.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Bt||y.minFilter!==ql&&y.minFilter!==po||y.type===wi&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===mo&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(A,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function ye(A,y){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",Z));const ee=y.source;let J=p.get(ee);J===void 0&&(J={},p.set(ee,J));const te=X(y);if(te!==A.__cacheKey){J[te]===void 0&&(J[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[te].usedTimes++;const me=J[A.__cacheKey];me!==void 0&&(J[A.__cacheKey].usedTimes--,me.usedTimes===0&&O(y)),A.__cacheKey=te,A.__webglTexture=J[te].texture}return H}function Ge(A,y,H){let ee=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=t.TEXTURE_3D);const J=ye(A,y),te=y.source;n.bindTexture(ee,A.__webglTexture,t.TEXTURE0+H);const me=i.get(te);if(te.version!==me.__version||J===!0){n.activeTexture(t.TEXTURE0+H),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ne=T(y)&&S(y.image)===!1;let Y=g(y.image,ne,!1,f);Y=Ct(y,Y);const ve=S(Y)||a,ge=s.convert(y.format,y.colorSpace);let _e=s.convert(y.type),de=b(y.internalFormat,ge,_e,y.colorSpace,y.isVideoTexture);Se(ee,y,ve);let he;const Ue=y.mipmaps,je=a&&y.isVideoTexture!==!0,P=me.__version===void 0||J===!0,ae=M(y,Y,ve);if(y.isDepthTexture)de=t.DEPTH_COMPONENT,a?y.type===wi?de=t.DEPTH_COMPONENT32F:y.type===Ti?de=t.DEPTH_COMPONENT24:y.type===sr?de=t.DEPTH24_STENCIL8:de=t.DEPTH_COMPONENT16:y.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===or&&de===t.DEPTH_COMPONENT&&y.type!==Tf&&y.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ti,_e=s.convert(y.type)),y.format===ps&&de===t.DEPTH_COMPONENT&&(de=t.DEPTH_STENCIL,y.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=sr,_e=s.convert(y.type))),P&&(je?n.texStorage2D(t.TEXTURE_2D,1,de,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,de,Y.width,Y.height,0,ge,_e,null));else if(y.isDataTexture)if(Ue.length>0&&ve){je&&P&&n.texStorage2D(t.TEXTURE_2D,ae,de,Ue[0].width,Ue[0].height);for(let j=0,ie=Ue.length;j<ie;j++)he=Ue[j],je?n.texSubImage2D(t.TEXTURE_2D,j,0,0,he.width,he.height,ge,_e,he.data):n.texImage2D(t.TEXTURE_2D,j,de,he.width,he.height,0,ge,_e,he.data);y.generateMipmaps=!1}else je?(P&&n.texStorage2D(t.TEXTURE_2D,ae,de,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,ge,_e,Y.data)):n.texImage2D(t.TEXTURE_2D,0,de,Y.width,Y.height,0,ge,_e,Y.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){je&&P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,de,Ue[0].width,Ue[0].height,Y.depth);for(let j=0,ie=Ue.length;j<ie;j++)he=Ue[j],y.format!==Dn?ge!==null?je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,Y.depth,ge,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,de,he.width,he.height,Y.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,Y.depth,ge,_e,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,de,he.width,he.height,Y.depth,0,ge,_e,he.data)}else{je&&P&&n.texStorage2D(t.TEXTURE_2D,ae,de,Ue[0].width,Ue[0].height);for(let j=0,ie=Ue.length;j<ie;j++)he=Ue[j],y.format!==Dn?ge!==null?je?n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,he.width,he.height,ge,he.data):n.compressedTexImage2D(t.TEXTURE_2D,j,de,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage2D(t.TEXTURE_2D,j,0,0,he.width,he.height,ge,_e,he.data):n.texImage2D(t.TEXTURE_2D,j,de,he.width,he.height,0,ge,_e,he.data)}else if(y.isDataArrayTexture)je?(P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,de,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ge,_e,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,de,Y.width,Y.height,Y.depth,0,ge,_e,Y.data);else if(y.isData3DTexture)je?(P&&n.texStorage3D(t.TEXTURE_3D,ae,de,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ge,_e,Y.data)):n.texImage3D(t.TEXTURE_3D,0,de,Y.width,Y.height,Y.depth,0,ge,_e,Y.data);else if(y.isFramebufferTexture){if(P)if(je)n.texStorage2D(t.TEXTURE_2D,ae,de,Y.width,Y.height);else{let j=Y.width,ie=Y.height;for(let le=0;le<ae;le++)n.texImage2D(t.TEXTURE_2D,le,de,j,ie,0,ge,_e,null),j>>=1,ie>>=1}}else if(Ue.length>0&&ve){je&&P&&n.texStorage2D(t.TEXTURE_2D,ae,de,Ue[0].width,Ue[0].height);for(let j=0,ie=Ue.length;j<ie;j++)he=Ue[j],je?n.texSubImage2D(t.TEXTURE_2D,j,0,0,ge,_e,he):n.texImage2D(t.TEXTURE_2D,j,de,ge,_e,he);y.generateMipmaps=!1}else je?(P&&n.texStorage2D(t.TEXTURE_2D,ae,de,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,_e,Y)):n.texImage2D(t.TEXTURE_2D,0,de,ge,_e,Y);C(y,ve)&&R(ee),me.__version=te.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Wt(A,y,H){if(y.image.length!==6)return;const ee=ye(A,y),J=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+H);const te=i.get(J);if(J.version!==te.__version||ee===!0){n.activeTexture(t.TEXTURE0+H),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const me=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,Y=[];for(let j=0;j<6;j++)!me&&!ne?Y[j]=g(y.image[j],!1,!0,u):Y[j]=ne?y.image[j].image:y.image[j],Y[j]=Ct(y,Y[j]);const ve=Y[0],ge=S(ve)||a,_e=s.convert(y.format,y.colorSpace),de=s.convert(y.type),he=b(y.internalFormat,_e,de,y.colorSpace),Ue=a&&y.isVideoTexture!==!0,je=te.__version===void 0||ee===!0;let P=M(y,ve,ge);Se(t.TEXTURE_CUBE_MAP,y,ge);let ae;if(me){Ue&&je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,P,he,ve.width,ve.height);for(let j=0;j<6;j++){ae=Y[j].mipmaps;for(let ie=0;ie<ae.length;ie++){const le=ae[ie];y.format!==Dn?_e!==null?Ue?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,0,0,le.width,le.height,_e,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,he,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,0,0,le.width,le.height,_e,de,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,he,le.width,le.height,0,_e,de,le.data)}}}else{ae=y.mipmaps,Ue&&je&&(ae.length>0&&P++,n.texStorage2D(t.TEXTURE_CUBE_MAP,P,he,Y[0].width,Y[0].height));for(let j=0;j<6;j++)if(ne){Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Y[j].width,Y[j].height,_e,de,Y[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,he,Y[j].width,Y[j].height,0,_e,de,Y[j].data);for(let ie=0;ie<ae.length;ie++){const ke=ae[ie].image[j].image;Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,0,0,ke.width,ke.height,_e,de,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,he,ke.width,ke.height,0,_e,de,ke.data)}}else{Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_e,de,Y[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,he,_e,de,Y[j]);for(let ie=0;ie<ae.length;ie++){const le=ae[ie];Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,0,0,_e,de,le.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,he,_e,de,le.image[j])}}}C(y,ge)&&R(t.TEXTURE_CUBE_MAP),te.__version=J.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Pe(A,y,H,ee,J,te){const me=s.convert(H.format,H.colorSpace),ne=s.convert(H.type),Y=b(H.internalFormat,me,ne,H.colorSpace);if(!i.get(y).__hasExternalTextures){const ge=Math.max(1,y.width>>te),_e=Math.max(1,y.height>>te);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,te,Y,ge,_e,y.depth,0,me,ne,null):n.texImage2D(J,te,Y,ge,_e,0,me,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Xe(y)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,J,i.get(H).__webglTexture,0,be(y)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,J,i.get(H).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(A,y,H){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let ee=t.DEPTH_COMPONENT16;if(H||Xe(y)){const J=y.depthTexture;J&&J.isDepthTexture&&(J.type===wi?ee=t.DEPTH_COMPONENT32F:J.type===Ti&&(ee=t.DEPTH_COMPONENT24));const te=be(y);Xe(y)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,ee,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,ee,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const ee=be(y);H&&Xe(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,y.width,y.height):Xe(y)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ee=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let J=0;J<ee.length;J++){const te=ee[J],me=s.convert(te.format,te.colorSpace),ne=s.convert(te.type),Y=b(te.internalFormat,me,ne,te.colorSpace),ve=be(y);H&&Xe(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Y,y.width,y.height):Xe(y)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,Y,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Y,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Rt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const ee=i.get(y.depthTexture).__webglTexture,J=be(y);if(y.depthTexture.format===or)Xe(y)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(y.depthTexture.format===ps)Xe(y)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Me(A){const y=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Rt(y.__webglFramebuffer,A)}else if(H){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]=t.createRenderbuffer(),N(y.__webglDepthbuffer[ee],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),N(y.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(A,y,H){const ee=i.get(A);y!==void 0&&Pe(ee.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Me(A)}function Ae(A){const y=A.texture,H=i.get(A),ee=i.get(y);A.addEventListener("dispose",B),A.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=y.version,o.memory.textures++);const J=A.isWebGLCubeRenderTarget===!0,te=A.isWebGLMultipleRenderTargets===!0,me=S(A)||a;if(J){H.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(a&&y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[ne]=[];for(let Y=0;Y<y.mipmaps.length;Y++)H.__webglFramebuffer[ne][Y]=t.createFramebuffer()}else H.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let ne=0;ne<y.mipmaps.length;ne++)H.__webglFramebuffer[ne]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(te)if(r.drawBuffers){const ne=A.texture;for(let Y=0,ve=ne.length;Y<ve;Y++){const ge=i.get(ne[Y]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Xe(A)===!1){const ne=te?y:[y];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Y=0;Y<ne.length;Y++){const ve=ne[Y];H.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[Y]);const ge=s.convert(ve.format,ve.colorSpace),_e=s.convert(ve.type),de=b(ve.internalFormat,ge,_e,ve.colorSpace,A.isXRRenderTarget===!0),he=be(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,de,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,H.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),N(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Se(t.TEXTURE_CUBE_MAP,y,me);for(let ne=0;ne<6;ne++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let Y=0;Y<y.mipmaps.length;Y++)Pe(H.__webglFramebuffer[ne][Y],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Y);else Pe(H.__webglFramebuffer[ne],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);C(y,me)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){const ne=A.texture;for(let Y=0,ve=ne.length;Y<ve;Y++){const ge=ne[Y],_e=i.get(ge);n.bindTexture(t.TEXTURE_2D,_e.__webglTexture),Se(t.TEXTURE_2D,ge,me),Pe(H.__webglFramebuffer,A,ge,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D,0),C(ge,me)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ne=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ne,ee.__webglTexture),Se(ne,y,me),a&&y.mipmaps&&y.mipmaps.length>0)for(let Y=0;Y<y.mipmaps.length;Y++)Pe(H.__webglFramebuffer[Y],A,y,t.COLOR_ATTACHMENT0,ne,Y);else Pe(H.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,ne,0);C(y,me)&&R(ne),n.unbindTexture()}A.depthBuffer&&Me(A)}function Je(A){const y=S(A)||a,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0,J=H.length;ee<J;ee++){const te=H[ee];if(C(te,y)){const me=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ne=i.get(te).__webglTexture;n.bindTexture(me,ne),R(me),n.unbindTexture()}}}function Oe(A){if(a&&A.samples>0&&Xe(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,ee=A.height;let J=t.COLOR_BUFFER_BIT;const te=[],me=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=i.get(A),Y=A.isWebGLMultipleRenderTargets===!0;if(Y)for(let ve=0;ve<y.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){te.push(t.COLOR_ATTACHMENT0+ve),A.depthBuffer&&te.push(me);const ge=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(ge===!1&&(A.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ne.__webglColorRenderbuffer[ve]),ge===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[me])),Y){const _e=i.get(y[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,H,ee,0,0,H,ee,J,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let ve=0;ve<y.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,ne.__webglColorRenderbuffer[ve]);const ge=i.get(y[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function be(A){return Math.min(h,A.samples)}function Xe(A){const y=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Et(A){const y=o.render.frame;x.get(A)!==y&&(x.set(A,y),A.update())}function Ct(A,y){const H=A.colorSpace,ee=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ec||H!==Wn&&H!==lr&&(H===Ze||H===pl?a===!1?e.has("EXT_sRGB")===!0&&ee===Dn?(A.format=Ec,A.minFilter=mn,A.generateMipmaps=!1):y=$g.sRGBToLinear(y):(ee!==Dn||J!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}this.allocateTextureUnit=L,this.resetTextureUnits=W,this.setTexture2D=z,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=se,this.rebindTextures=Re,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Xe}const VT=0,ht=1;function WT(t,e,n){const i=n.isWebGL2;function r(s,o=lr){let a;const l=o===Ze||o===pl?ht:VT;if(s===Fi)return t.UNSIGNED_BYTE;if(s===Hg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Gg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===yx)return t.BYTE;if(s===Mx)return t.SHORT;if(s===Tf)return t.UNSIGNED_SHORT;if(s===Bg)return t.INT;if(s===Ti)return t.UNSIGNED_INT;if(s===wi)return t.FLOAT;if(s===mo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ex)return t.ALPHA;if(s===Dn)return t.RGBA;if(s===Tx)return t.LUMINANCE;if(s===wx)return t.LUMINANCE_ALPHA;if(s===or)return t.DEPTH_COMPONENT;if(s===ps)return t.DEPTH_STENCIL;if(s===Ec)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ax)return t.RED;if(s===Vg)return t.RED_INTEGER;if(s===Rx)return t.RG;if(s===Wg)return t.RG_INTEGER;if(s===Xg)return t.RGBA_INTEGER;if(s===$l||s===Kl||s===Zl||s===Ql)if(l===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===$l)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===$l)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ql)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jd||s===eh||s===th||s===nh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Jd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===eh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===th)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Cx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ih||s===rh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ih)return l===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sh||s===oh||s===ah||s===lh||s===uh||s===ch||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===oh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ah)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===uh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ch)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ph)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_h)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jl||s===xh||s===Sh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Jl)return l===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===xh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Sh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lx||s===yh||s===Mh||s===Eh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Jl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===yh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Eh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===sr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class XT extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fa extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jT={type:"move"};class Eu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),c=this._getHandJoint(u,v);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,x=.005;u.inputState.pinching&&d>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class YT extends Jt{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:or,f!==or&&f!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===or&&(i=Ti),i===void 0&&f===ps&&(i=sr),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class qT extends xs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,m=null,x=null;const v=n.getContextAttributes();let p=null,c=null;const _=[],g=[],S=new gn;S.layers.enable(1),S.viewport=new yt;const T=new gn;T.layers.enable(2),T.viewport=new yt;const C=[S,T],R=new XT;R.layers.enable(1),R.layers.enable(2);let b=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let k=_[U];return k===void 0&&(k=new Eu,_[U]=k),k.getTargetRaySpace()},this.getControllerGrip=function(U){let k=_[U];return k===void 0&&(k=new Eu,_[U]=k),k.getGripSpace()},this.getHand=function(U){let k=_[U];return k===void 0&&(k=new Eu,_[U]=k),k.getHandSpace()};function w(U){const k=g.indexOf(U.inputSource);if(k===-1)return;const se=_[k];se!==void 0&&(se.update(U.inputSource,U.frame,u||o),se.dispatchEvent({type:U.type,data:U.inputSource}))}function Z(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",B);for(let U=0;U<_.length;U++){const k=g[U];k!==null&&(g[U]=null,_[U].disconnect(k))}b=null,M=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,c=null,z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,k),r.updateRenderState({baseLayer:m}),c=new mr(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let k=null,se=null,oe=null;v.depth&&(oe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,k=v.stencil?ps:or,se=v.stencil?sr:Ti);const ue={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(ue),r.updateRenderState({layers:[d]}),c=new mr(d.textureWidth,d.textureHeight,{format:Dn,type:Fi,depthTexture:new YT(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const pe=e.properties.get(c);pe.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),z.setContext(r),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(U){for(let k=0;k<U.removed.length;k++){const se=U.removed[k],oe=g.indexOf(se);oe>=0&&(g[oe]=null,_[oe].disconnect(se))}for(let k=0;k<U.added.length;k++){const se=U.added[k];let oe=g.indexOf(se);if(oe===-1){for(let pe=0;pe<_.length;pe++)if(pe>=g.length){g.push(se),oe=pe;break}else if(g[pe]===null){g[pe]=se,oe=pe;break}if(oe===-1)break}const ue=_[oe];ue&&ue.connect(se)}}const D=new G,O=new G;function V(U,k,se){D.setFromMatrixPosition(k.matrixWorld),O.setFromMatrixPosition(se.matrixWorld);const oe=D.distanceTo(O),ue=k.projectionMatrix.elements,pe=se.projectionMatrix.elements,Se=ue[14]/(ue[10]-1),ye=ue[14]/(ue[10]+1),Ge=(ue[9]+1)/ue[5],Wt=(ue[9]-1)/ue[5],Pe=(ue[8]-1)/ue[0],N=(pe[8]+1)/pe[0],Rt=Se*Pe,Me=Se*N,Re=oe/(-Pe+N),Ae=Re*-Pe;k.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ae),U.translateZ(Re),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Je=Se+Re,Oe=ye+Re,be=Rt-Ae,Xe=Me+(oe-Ae),Et=Ge*ye/Oe*Je,Ct=Wt*ye/Oe*Je;U.projectionMatrix.makePerspective(be,Xe,Et,Ct,Je,Oe),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function K(U,k){k===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(k.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;R.near=T.near=S.near=U.near,R.far=T.far=S.far=U.far,(b!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),b=R.near,M=R.far);const k=U.parent,se=R.cameras;K(R,k);for(let oe=0;oe<se.length;oe++)K(se[oe],k);se.length===2?V(R,S,T):R.projectionMatrix.copy(S.projectionMatrix),W(U,R,k)};function W(U,k,se){se===null?U.matrix.copy(k.matrixWorld):(U.matrix.copy(se.matrixWorld),U.matrix.invert(),U.matrix.multiply(k.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Tc*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let L=null;function X(U,k){if(f=k.getViewerPose(u||o),x=k,f!==null){const se=f.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let oe=!1;se.length!==R.cameras.length&&(R.cameras.length=0,oe=!0);for(let ue=0;ue<se.length;ue++){const pe=se[ue];let Se=null;if(m!==null)Se=m.getViewport(pe);else{const Ge=h.getViewSubImage(d,pe);Se=Ge.viewport,ue===0&&(e.setRenderTargetTextures(c,Ge.colorTexture,d.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(c))}let ye=C[ue];ye===void 0&&(ye=new gn,ye.layers.enable(ue),ye.viewport=new yt,C[ue]=ye),ye.matrix.fromArray(pe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(pe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Se.x,Se.y,Se.width,Se.height),ue===0&&(R.matrix.copy(ye.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),oe===!0&&R.cameras.push(ye)}}for(let se=0;se<_.length;se++){const oe=g[se],ue=_[se];oe!==null&&ue!==void 0&&ue.update(oe,k,u||o)}L&&L(U,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),x=null}const z=new o_;z.setAnimationLoop(X),this.setAnimationLoop=function(U){L=U},this.dispose=function(){}}}function $T(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,i_(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,_,g,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),h(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),d(p,c),c.isMeshPhysicalMaterial&&m(p,c,S)):c.isMeshMatcapMaterial?(s(p,c),x(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),v(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,_,g):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===Qt&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===Qt&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const _=e.get(c).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*g,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,_,g){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*_,p.scale.value=g*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function h(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function d(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,_){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Qt&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,c){c.matcap&&(p.matcap.value=c.matcap)}function v(p,c){const _=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const S=g.program;i.uniformBlockBinding(_,S)}function u(_,g){let S=r[_.id];S===void 0&&(x(_),S=f(_),r[_.id]=S,_.addEventListener("dispose",p));const T=g.program;i.updateUBOMapping(_,T);const C=e.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function f(_){const g=h();_.__bindingPointIndex=g;const S=t.createBuffer(),T=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,T,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],S=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,R=S.length;C<R;C++){const b=S[C];if(m(b,C,T)===!0){const M=b.__offset,w=Array.isArray(b.value)?b.value:[b.value];let Z=0;for(let B=0;B<w.length;B++){const D=w[B],O=v(D);typeof D=="number"?(b.__data[0]=D,t.bufferSubData(t.UNIFORM_BUFFER,M+Z,b.__data)):D.isMatrix3?(b.__data[0]=D.elements[0],b.__data[1]=D.elements[1],b.__data[2]=D.elements[2],b.__data[3]=D.elements[0],b.__data[4]=D.elements[3],b.__data[5]=D.elements[4],b.__data[6]=D.elements[5],b.__data[7]=D.elements[0],b.__data[8]=D.elements[6],b.__data[9]=D.elements[7],b.__data[10]=D.elements[8],b.__data[11]=D.elements[0]):(D.toArray(b.__data,Z),Z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,b.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,S){const T=_.value;if(S[g]===void 0){if(typeof T=="number")S[g]=T;else{const C=Array.isArray(T)?T:[T],R=[];for(let b=0;b<C.length;b++)R.push(C[b].clone());S[g]=R}return!0}else if(typeof T=="number"){if(S[g]!==T)return S[g]=T,!0}else{const C=Array.isArray(S[g])?S[g]:[S[g]],R=Array.isArray(T)?T:[T];for(let b=0;b<C.length;b++){const M=C[b];if(M.equals(R[b])===!1)return M.copy(R[b]),!0}}return!1}function x(_){const g=_.uniforms;let S=0;const T=16;let C=0;for(let R=0,b=g.length;R<b;R++){const M=g[R],w={boundary:0,storage:0},Z=Array.isArray(M.value)?M.value:[M.value];for(let B=0,D=Z.length;B<D;B++){const O=Z[B],V=v(O);w.boundary+=V.boundary,w.storage+=V.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,R>0){C=S%T;const B=T-C;C!==0&&B-w.boundary<0&&(S+=T-C,M.__offset=S)}S+=w.storage}return C=S%T,C>0&&(S+=T-C),_.__size=S,_.__cache={},this}function v(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class d_{constructor(e={}){const{canvas:n=Vx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=Ni,this.toneMappingExposure=1;const g=this;let S=!1,T=0,C=0,R=null,b=-1,M=null;const w=new yt,Z=new yt;let B=null;const D=new We(0);let O=0,V=n.width,K=n.height,W=1,L=null,X=null;const z=new yt(0,0,V,K),U=new yt(0,0,V,K);let k=!1;const se=new Rf;let oe=!1,ue=!1,pe=null;const Se=new gt,ye=new He,Ge=new G,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return R===null?W:1}let N=i;function Rt(E,I){for(let q=0;q<E.length;q++){const F=E[q],$=n.getContext(F,I);if($!==null)return $}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ef}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",j,!1),n.addEventListener("webglcontextcreationerror",ie,!1),N===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),N=Rt(I,E),N===null)throw Rt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Me,Re,Ae,Je,Oe,be,Xe,Et,Ct,A,y,H,ee,J,te,me,ne,Y,ve,ge,_e,de,he,Ue;function je(){Me=new oE(N),Re=new eE(N,Me,e),Me.init(Re),de=new WT(N,Me,Re),Ae=new HT(N,Me,Re),Je=new uE(N),Oe=new RT,be=new GT(N,Me,Ae,Oe,Re,de,Je),Xe=new nE(g),Et=new sE(g),Ct=new xS(N,Re),he=new QM(N,Me,Ct,Re),A=new aE(N,Ct,Je,he),y=new hE(N,A,Ct,Je),ve=new dE(N,Re,be),me=new tE(Oe),H=new AT(g,Xe,Et,Me,Re,he,me),ee=new $T(g,Oe),J=new LT,te=new NT(Me,Re),Y=new ZM(g,Xe,Et,Ae,y,d,l),ne=new BT(g,y,Re),Ue=new KT(N,Je,Re,Ae),ge=new JM(N,Me,Je,Re),_e=new lE(N,Me,Je,Re),Je.programs=H.programs,g.capabilities=Re,g.extensions=Me,g.properties=Oe,g.renderLists=J,g.shadowMap=ne,g.state=Ae,g.info=Je}je();const P=new qT(g,N);this.xr=P,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(V,K,!1))},this.getSize=function(E){return E.set(V,K)},this.setSize=function(E,I,q=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,K=I,n.width=Math.floor(E*W),n.height=Math.floor(I*W),q===!0&&(n.style.width=E+"px",n.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(V*W,K*W).floor()},this.setDrawingBufferSize=function(E,I,q){V=E,K=I,W=q,n.width=Math.floor(E*q),n.height=Math.floor(I*q),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(z)},this.setViewport=function(E,I,q,F){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,I,q,F),Ae.viewport(w.copy(z).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,I,q,F){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,I,q,F),Ae.scissor(Z.copy(U).multiplyScalar(W).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(E){Ae.setScissorTest(k=E)},this.setOpaqueSort=function(E){L=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(E=!0,I=!0,q=!0){let F=0;if(E){let $=!1;if(R!==null){const fe=R.texture.format;$=fe===Xg||fe===Wg||fe===Vg}if($){const fe=R.texture.type,xe=fe===Fi||fe===Ti||fe===Tf||fe===sr||fe===Hg||fe===Gg,Te=Y.getClearColor(),we=Y.getClearAlpha(),Ie=Te.r,Ee=Te.g,Ce=Te.b;xe?(m[0]=Ie,m[1]=Ee,m[2]=Ce,m[3]=we,N.clearBufferuiv(N.COLOR,0,m)):(x[0]=Ie,x[1]=Ee,x[2]=Ce,x[3]=we,N.clearBufferiv(N.COLOR,0,x))}else F|=N.COLOR_BUFFER_BIT}I&&(F|=N.DEPTH_BUFFER_BIT),q&&(F|=N.STENCIL_BUFFER_BIT),N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",j,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),J.dispose(),te.dispose(),Oe.dispose(),Xe.dispose(),Et.dispose(),y.dispose(),he.dispose(),Ue.dispose(),H.dispose(),P.dispose(),P.removeEventListener("sessionstart",qe),P.removeEventListener("sessionend",Fn),pe&&(pe.dispose(),pe=null),Ft.stop()};function ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Je.autoReset,I=ne.enabled,q=ne.autoUpdate,F=ne.needsUpdate,$=ne.type;je(),Je.autoReset=E,ne.enabled=I,ne.autoUpdate=q,ne.needsUpdate=F,ne.type=$}function ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function le(E){const I=E.target;I.removeEventListener("dispose",le),ke(I)}function ke(E){et(E),Oe.remove(E)}function et(E){const I=Oe.get(E).programs;I!==void 0&&(I.forEach(function(q){H.releaseProgram(q)}),E.isShaderMaterial&&H.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,q,F,$,fe){I===null&&(I=Wt);const xe=$.isMesh&&$.matrixWorld.determinant()<0,Te=m_(E,I,q,F,$);Ae.setMaterial(F,xe);let we=q.index,Ie=1;if(F.wireframe===!0){if(we=A.getWireframeAttribute(q),we===void 0)return;Ie=2}const Ee=q.drawRange,Ce=q.attributes.position;let rt=Ee.start*Ie,ot=(Ee.start+Ee.count)*Ie;fe!==null&&(rt=Math.max(rt,fe.start*Ie),ot=Math.min(ot,(fe.start+fe.count)*Ie)),we!==null?(rt=Math.max(rt,0),ot=Math.min(ot,we.count)):Ce!=null&&(rt=Math.max(rt,0),ot=Math.min(ot,Ce.count));const fn=ot-rt;if(fn<0||fn===1/0)return;he.setup($,F,Te,q,we);let Xn,ut=ge;if(we!==null&&(Xn=Ct.get(we),ut=_e,ut.setIndex(Xn)),$.isMesh)F.wireframe===!0?(Ae.setLineWidth(F.wireframeLinewidth*Pe()),ut.setMode(N.LINES)):ut.setMode(N.TRIANGLES);else if($.isLine){let Ne=F.linewidth;Ne===void 0&&(Ne=1),Ae.setLineWidth(Ne*Pe()),$.isLineSegments?ut.setMode(N.LINES):$.isLineLoop?ut.setMode(N.LINE_LOOP):ut.setMode(N.LINE_STRIP)}else $.isPoints?ut.setMode(N.POINTS):$.isSprite&&ut.setMode(N.TRIANGLES);if($.isInstancedMesh)ut.renderInstances(rt,fn,$.count);else if(q.isInstancedBufferGeometry){const Ne=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,vl=Math.min(q.instanceCount,Ne);ut.renderInstances(rt,fn,vl)}else ut.render(rt,fn)},this.compile=function(E,I){function q(F,$,fe){F.transparent===!0&&F.side===ti&&F.forceSinglePass===!1?(F.side=Qt,F.needsUpdate=!0,Ro(F,$,fe),F.side=ki,F.needsUpdate=!0,Ro(F,$,fe),F.side=ti):Ro(F,$,fe)}p=te.get(E),p.init(),_.push(p),E.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(g._useLegacyLights),E.traverse(function(F){const $=F.material;if($)if(Array.isArray($))for(let fe=0;fe<$.length;fe++){const xe=$[fe];q(xe,E,F)}else q($,E,F)}),_.pop(),p=null};let lt=null;function di(E){lt&&lt(E)}function qe(){Ft.stop()}function Fn(){Ft.start()}const Ft=new o_;Ft.setAnimationLoop(di),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(E){lt=E,P.setAnimationLoop(E),E===null?Ft.stop():Ft.start()},P.addEventListener("sessionstart",qe),P.addEventListener("sessionend",Fn),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(I),I=P.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,I,R),p=te.get(E,_.length),p.init(),_.push(p),Se.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),se.setFromProjectionMatrix(Se),ue=this.localClippingEnabled,oe=me.init(this.clippingPlanes,ue),v=J.get(E,c.length),v.init(),c.push(v),bf(E,I,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(L,X),this.info.render.frame++,oe===!0&&me.beginShadows();const q=p.state.shadowsArray;if(ne.render(q,E,I),oe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(v,E),p.setupLights(g._useLegacyLights),I.isArrayCamera){const F=I.cameras;for(let $=0,fe=F.length;$<fe;$++){const xe=F[$];Df(v,E,xe,xe.viewport)}}else Df(v,E,I);R!==null&&(be.updateMultisampleRenderTarget(R),be.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(g,E,I),he.resetDefaultState(),b=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,c.pop(),c.length>0?v=c[c.length-1]:v=null};function bf(E,I,q,F){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||se.intersectsSprite(E)){F&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);const xe=y.update(E),Te=E.material;Te.visible&&v.push(E,xe,Te,q,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||se.intersectsObject(E))){const xe=y.update(E),Te=E.material;if(F&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ge.copy(xe.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(Te)){const we=xe.groups;for(let Ie=0,Ee=we.length;Ie<Ee;Ie++){const Ce=we[Ie],rt=Te[Ce.materialIndex];rt&&rt.visible&&v.push(E,xe,rt,q,Ge.z,Ce)}}else Te.visible&&v.push(E,xe,Te,q,Ge.z,null)}}const fe=E.children;for(let xe=0,Te=fe.length;xe<Te;xe++)bf(fe[xe],I,q,F)}function Df(E,I,q,F){const $=E.opaque,fe=E.transmissive,xe=E.transparent;p.setupLightsView(q),oe===!0&&me.setGlobalState(g.clippingPlanes,q),fe.length>0&&p_($,fe,I,q),F&&Ae.viewport(w.copy(F)),$.length>0&&Ao($,I,q),fe.length>0&&Ao(fe,I,q),xe.length>0&&Ao(xe,I,q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function p_(E,I,q,F){const $=Re.isWebGL2;pe===null&&(pe=new mr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?mo:Fi,minFilter:po,samples:$?4:0})),g.getDrawingBufferSize(ye),$?pe.setSize(ye.x,ye.y):pe.setSize(wc(ye.x),wc(ye.y));const fe=g.getRenderTarget();g.setRenderTarget(pe),g.getClearColor(D),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear();const xe=g.toneMapping;g.toneMapping=Ni,Ao(E,q,F),be.updateMultisampleRenderTarget(pe),be.updateRenderTargetMipmap(pe);let Te=!1;for(let we=0,Ie=I.length;we<Ie;we++){const Ee=I[we],Ce=Ee.object,rt=Ee.geometry,ot=Ee.material,fn=Ee.group;if(ot.side===ti&&Ce.layers.test(F.layers)){const Xn=ot.side;ot.side=Qt,ot.needsUpdate=!0,Uf(Ce,q,F,rt,ot,fn),ot.side=Xn,ot.needsUpdate=!0,Te=!0}}Te===!0&&(be.updateMultisampleRenderTarget(pe),be.updateRenderTargetMipmap(pe)),g.setRenderTarget(fe),g.setClearColor(D,O),g.toneMapping=xe}function Ao(E,I,q){const F=I.isScene===!0?I.overrideMaterial:null;for(let $=0,fe=E.length;$<fe;$++){const xe=E[$],Te=xe.object,we=xe.geometry,Ie=F===null?xe.material:F,Ee=xe.group;Te.layers.test(q.layers)&&Uf(Te,I,q,we,Ie,Ee)}}function Uf(E,I,q,F,$,fe){E.onBeforeRender(g,I,q,F,$,fe),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(g,I,q,F,E,fe),$.transparent===!0&&$.side===ti&&$.forceSinglePass===!1?($.side=Qt,$.needsUpdate=!0,g.renderBufferDirect(q,I,F,$,E,fe),$.side=ki,$.needsUpdate=!0,g.renderBufferDirect(q,I,F,$,E,fe),$.side=ti):g.renderBufferDirect(q,I,F,$,E,fe),E.onAfterRender(g,I,q,F,$,fe)}function Ro(E,I,q){I.isScene!==!0&&(I=Wt);const F=Oe.get(E),$=p.state.lights,fe=p.state.shadowsArray,xe=$.state.version,Te=H.getParameters(E,$.state,fe,I,q),we=H.getProgramCacheKey(Te);let Ie=F.programs;F.environment=E.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(E.isMeshStandardMaterial?Et:Xe).get(E.envMap||F.environment),Ie===void 0&&(E.addEventListener("dispose",le),Ie=new Map,F.programs=Ie);let Ee=Ie.get(we);if(Ee!==void 0){if(F.currentProgram===Ee&&F.lightsStateVersion===xe)return If(E,Te),Ee}else Te.uniforms=H.getUniforms(E),E.onBuild(q,Te,g),E.onBeforeCompile(Te,g),Ee=H.acquireProgram(Te,we),Ie.set(we,Ee),F.uniforms=Te.uniforms;const Ce=F.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=me.uniform),If(E,Te),F.needsLights=__(E),F.lightsStateVersion=xe,F.needsLights&&(Ce.ambientLightColor.value=$.state.ambient,Ce.lightProbe.value=$.state.probe,Ce.directionalLights.value=$.state.directional,Ce.directionalLightShadows.value=$.state.directionalShadow,Ce.spotLights.value=$.state.spot,Ce.spotLightShadows.value=$.state.spotShadow,Ce.rectAreaLights.value=$.state.rectArea,Ce.ltc_1.value=$.state.rectAreaLTC1,Ce.ltc_2.value=$.state.rectAreaLTC2,Ce.pointLights.value=$.state.point,Ce.pointLightShadows.value=$.state.pointShadow,Ce.hemisphereLights.value=$.state.hemi,Ce.directionalShadowMap.value=$.state.directionalShadowMap,Ce.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ce.spotShadowMap.value=$.state.spotShadowMap,Ce.spotLightMatrix.value=$.state.spotLightMatrix,Ce.spotLightMap.value=$.state.spotLightMap,Ce.pointShadowMap.value=$.state.pointShadowMap,Ce.pointShadowMatrix.value=$.state.pointShadowMatrix);const rt=Ee.getUniforms(),ot=Ta.seqWithValue(rt.seq,Ce);return F.currentProgram=Ee,F.uniformsList=ot,Ee}function If(E,I){const q=Oe.get(E);q.outputColorSpace=I.outputColorSpace,q.instancing=I.instancing,q.instancingColor=I.instancingColor,q.skinning=I.skinning,q.morphTargets=I.morphTargets,q.morphNormals=I.morphNormals,q.morphColors=I.morphColors,q.morphTargetsCount=I.morphTargetsCount,q.numClippingPlanes=I.numClippingPlanes,q.numIntersection=I.numClipIntersection,q.vertexAlphas=I.vertexAlphas,q.vertexTangents=I.vertexTangents,q.toneMapping=I.toneMapping}function m_(E,I,q,F,$){I.isScene!==!0&&(I=Wt),be.resetTextureUnits();const fe=I.fog,xe=F.isMeshStandardMaterial?I.environment:null,Te=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Wn,we=(F.isMeshStandardMaterial?Et:Xe).get(F.envMap||xe),Ie=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ee=!!q.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ce=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,ot=!!q.morphAttributes.color;let fn=Ni;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fn=g.toneMapping);const Xn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=Xn!==void 0?Xn.length:0,Ne=Oe.get(F),vl=p.state.lights;if(oe===!0&&(ue===!0||E!==M)){const en=E===M&&F.id===b;me.setState(F,E,en)}let ct=!1;F.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==vl.state.version||Ne.outputColorSpace!==Te||$.isInstancedMesh&&Ne.instancing===!1||!$.isInstancedMesh&&Ne.instancing===!0||$.isSkinnedMesh&&Ne.skinning===!1||!$.isSkinnedMesh&&Ne.skinning===!0||$.isInstancedMesh&&Ne.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ne.instancingColor===!1&&$.instanceColor!==null||Ne.envMap!==we||F.fog===!0&&Ne.fog!==fe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==me.numPlanes||Ne.numIntersection!==me.numIntersection)||Ne.vertexAlphas!==Ie||Ne.vertexTangents!==Ee||Ne.morphTargets!==Ce||Ne.morphNormals!==rt||Ne.morphColors!==ot||Ne.toneMapping!==fn||Re.isWebGL2===!0&&Ne.morphTargetsCount!==ut)&&(ct=!0):(ct=!0,Ne.__version=F.version);let Vi=Ne.currentProgram;ct===!0&&(Vi=Ro(F,I,$));let Nf=!1,ys=!1,xl=!1;const Ot=Vi.getUniforms(),Wi=Ne.uniforms;if(Ae.useProgram(Vi.program)&&(Nf=!0,ys=!0,xl=!0),F.id!==b&&(b=F.id,ys=!0),Nf||M!==E){Ot.setValue(N,"projectionMatrix",E.projectionMatrix),Ot.setValue(N,"viewMatrix",E.matrixWorldInverse);const en=Ot.map.cameraPosition;en!==void 0&&en.setValue(N,Ge.setFromMatrixPosition(E.matrixWorld)),Re.logarithmicDepthBuffer&&Ot.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ot.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,ys=!0,xl=!0)}if($.isSkinnedMesh){Ot.setOptional(N,$,"bindMatrix"),Ot.setOptional(N,$,"bindMatrixInverse");const en=$.skeleton;en&&(Re.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Ot.setValue(N,"boneTexture",en.boneTexture,be),Ot.setValue(N,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Sl=q.morphAttributes;if((Sl.position!==void 0||Sl.normal!==void 0||Sl.color!==void 0&&Re.isWebGL2===!0)&&ve.update($,q,Vi),(ys||Ne.receiveShadow!==$.receiveShadow)&&(Ne.receiveShadow=$.receiveShadow,Ot.setValue(N,"receiveShadow",$.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Wi.envMap.value=we,Wi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),ys&&(Ot.setValue(N,"toneMappingExposure",g.toneMappingExposure),Ne.needsLights&&g_(Wi,xl),fe&&F.fog===!0&&ee.refreshFogUniforms(Wi,fe),ee.refreshMaterialUniforms(Wi,F,W,K,pe),Ta.upload(N,Ne.uniformsList,Wi,be)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ta.upload(N,Ne.uniformsList,Wi,be),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ot.setValue(N,"center",$.center),Ot.setValue(N,"modelViewMatrix",$.modelViewMatrix),Ot.setValue(N,"normalMatrix",$.normalMatrix),Ot.setValue(N,"modelMatrix",$.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const en=F.uniformsGroups;for(let yl=0,v_=en.length;yl<v_;yl++)if(Re.isWebGL2){const Ff=en[yl];Ue.update(Ff,Vi),Ue.bind(Ff,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function g_(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function __(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,I,q){Oe.get(E.texture).__webglTexture=I,Oe.get(E.depthTexture).__webglTexture=q;const F=Oe.get(E);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,I){const q=Oe.get(E);q.__webglFramebuffer=I,q.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,q=0){R=E,T=I,C=q;let F=!0,$=null,fe=!1,xe=!1;if(E){const we=Oe.get(E);we.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(N.FRAMEBUFFER,null),F=!1):we.__webglFramebuffer===void 0?be.setupRenderTarget(E):we.__hasExternalTextures&&be.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(xe=!0);const Ee=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ee[I])?$=Ee[I][q]:$=Ee[I],fe=!0):Re.isWebGL2&&E.samples>0&&be.useMultisampledRTT(E)===!1?$=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ee)?$=Ee[q]:$=Ee,w.copy(E.viewport),Z.copy(E.scissor),B=E.scissorTest}else w.copy(z).multiplyScalar(W).floor(),Z.copy(U).multiplyScalar(W).floor(),B=k;if(Ae.bindFramebuffer(N.FRAMEBUFFER,$)&&Re.drawBuffers&&F&&Ae.drawBuffers(E,$),Ae.viewport(w),Ae.scissor(Z),Ae.setScissorTest(B),fe){const we=Oe.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,we.__webglTexture,q)}else if(xe){const we=Oe.get(E.texture),Ie=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.__webglTexture,q||0,Ie)}b=-1},this.readRenderTargetPixels=function(E,I,q,F,$,fe,xe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Te=Te[xe]),Te){Ae.bindFramebuffer(N.FRAMEBUFFER,Te);try{const we=E.texture,Ie=we.format,Ee=we.type;if(Ie!==Dn&&de.convert(Ie)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Ee===mo&&(Me.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ee!==Fi&&de.convert(Ee)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ee===wi&&(Re.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-F&&q>=0&&q<=E.height-$&&N.readPixels(I,q,F,$,de.convert(Ie),de.convert(Ee),fe)}finally{const we=R!==null?Oe.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(E,I,q=0){const F=Math.pow(2,-q),$=Math.floor(I.image.width*F),fe=Math.floor(I.image.height*F);be.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,E.x,E.y,$,fe),Ae.unbindTexture()},this.copyTextureToTexture=function(E,I,q,F=0){const $=I.image.width,fe=I.image.height,xe=de.convert(q.format),Te=de.convert(q.type);be.setTexture2D(q,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,E.x,E.y,$,fe,xe,Te,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,E.x,E.y,I.mipmaps[0].width,I.mipmaps[0].height,xe,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,F,E.x,E.y,xe,Te,I.image),F===0&&q.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(E,I,q,F,$=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=E.max.x-E.min.x+1,xe=E.max.y-E.min.y+1,Te=E.max.z-E.min.z+1,we=de.convert(F.format),Ie=de.convert(F.type);let Ee;if(F.isData3DTexture)be.setTexture3D(F,0),Ee=N.TEXTURE_3D;else if(F.isDataArrayTexture)be.setTexture2DArray(F,0),Ee=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Ce=N.getParameter(N.UNPACK_ROW_LENGTH),rt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ot=N.getParameter(N.UNPACK_SKIP_PIXELS),fn=N.getParameter(N.UNPACK_SKIP_ROWS),Xn=N.getParameter(N.UNPACK_SKIP_IMAGES),ut=q.isCompressedTexture?q.mipmaps[0]:q.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ut.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,E.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,E.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,E.min.z),q.isDataTexture||q.isData3DTexture?N.texSubImage3D(Ee,$,I.x,I.y,I.z,fe,xe,Te,we,Ie,ut.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ee,$,I.x,I.y,I.z,fe,xe,Te,we,ut.data)):N.texSubImage3D(Ee,$,I.x,I.y,I.z,fe,xe,Te,we,Ie,ut),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ce),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ot),N.pixelStorei(N.UNPACK_SKIP_ROWS,fn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xn),$===0&&F.generateMipmaps&&N.generateMipmap(Ee),Ae.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?be.setTextureCube(E,0):E.isData3DTexture?be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?be.setTexture2DArray(E,0):be.setTexture2D(E,0),Ae.unbindTexture()},this.resetState=function(){T=0,C=0,R=null,Ae.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ze?ar:jg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ar?Ze:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ZT extends d_{}ZT.prototype.isWebGL1Renderer=!0;class QT extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class up extends Jt{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class JT extends To{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yg,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class h_ extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Tu=new gt,cp=new G,fp=new G;class e1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rf,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;cp.setFromMatrixPosition(e.matrixWorld),n.position.copy(cp),fp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(fp),n.updateMatrixWorld(),Tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class t1 extends e1{constructor(){super(new a_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class n1 extends h_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new t1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class i1 extends h_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class r1{constructor(e,n,i=0,r=1/0){this.ray=new Qg(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Af,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Rc(e,this,i,n),i.sort(dp),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Rc(e[r],this,i,n);return i.sort(dp),i}}function dp(t,e){return t.distance-e.distance}function Rc(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Rc(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ef);function Lf(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function hp(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Pf(t,e,n){return e&&hp(t.prototype,e),n&&hp(t,n),t}function pp(t){return+t.replace(/px/,"")}function s1(t){var e=window.devicePixelRatio,n=getComputedStyle(t),i=pp(n.getPropertyValue("width")),r=pp(n.getPropertyValue("height"));t.setAttribute("width",(i*e).toString()),t.setAttribute("height",(r*e).toString())}function An(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=Math.random()*(e-t)+t;return Math.floor(i*Math.pow(10,n))/Math.pow(10,n)}function mp(t){return t[An(0,t.length)]}var o1=.00125,a1=5e-4,l1=9e-4,u1=1e-5,c1=6,f1=80,d1=.9,h1=1.7,p1=.2,m1=.6,g1=.03,_1=.07,gp=15,_p=82,v1=150,x1=100,S1=250,y1=40,M1=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function vp(t){var e=1920;return Math.log(t)/Math.log(e)}var xp=function(){function t(e){Lf(this,t);var n=e.initialPosition,i=e.direction,r=e.confettiRadius,s=e.confettiColors,o=e.emojis,a=e.emojiSize,l=e.canvasWidth,u=An(d1,h1,3),f=u*vp(l);this.confettiSpeed={x:f,y:f},this.finalConfettiSpeedX=An(p1,m1,3),this.rotationSpeed=o.length?.01:An(g1,_1,3)*vp(l),this.dragForceCoefficient=An(a1,l1,6),this.radius={x:r,y:r},this.initialRadius=r,this.rotationAngle=i==="left"?An(0,.2,3):An(-.2,0,3),this.emojiSize=a,this.emojiRotationAngle=An(0,2*Math.PI),this.radiusYUpdateDirection="down";var h=i==="left"?An(_p,gp)*Math.PI/180:An(-gp,-_p)*Math.PI/180;this.absCos=Math.abs(Math.cos(h)),this.absSin=Math.abs(Math.sin(h));var d=An(-v1,0),m={x:n.x+(i==="left"?-d:d)*this.absCos,y:n.y-d*this.absSin};this.currentPosition=Object.assign({},m),this.initialPosition=Object.assign({},m),this.color=o.length?null:mp(s),this.emoji=o.length?mp(o):null,this.createdAt=new Date().getTime(),this.direction=i}return Pf(t,[{key:"draw",value:function(n){var i=this.currentPosition,r=this.radius,s=this.color,o=this.emoji,a=this.rotationAngle,l=this.emojiRotationAngle,u=this.emojiSize,f=window.devicePixelRatio;s?(n.fillStyle=s,n.beginPath(),n.ellipse(i.x*f,i.y*f,r.x*f,r.y*f,a,0,2*Math.PI),n.fill()):o&&(n.font="".concat(u,"px serif"),n.save(),n.translate(f*i.x,f*i.y),n.rotate(l),n.textAlign="center",n.fillText(o,0,0),n.restore())}},{key:"updatePosition",value:function(n,i){var r=this.confettiSpeed,s=this.dragForceCoefficient,o=this.finalConfettiSpeedX,a=this.radiusYUpdateDirection,l=this.rotationSpeed,u=this.createdAt,f=this.direction,h=i-u;if(r.x>o&&(this.confettiSpeed.x-=s*n),this.currentPosition.x+=r.x*(f==="left"?-this.absCos:this.absCos)*n,this.currentPosition.y=this.initialPosition.y-r.y*this.absSin*h+o1*Math.pow(h,2)/2,this.rotationSpeed-=this.emoji?1e-4:u1*n,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*n%(2*Math.PI);return}a==="down"?(this.radius.y-=n*l,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=n*l,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(n){return this.currentPosition.y<n+x1}}]),t}();function E1(){var t=document.createElement("canvas");return t.style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.top="0",t.style.left="0",t.style.zIndex="1000",t.style.pointerEvents="none",document.body.appendChild(t),t}function T1(t){var e=t.confettiRadius,n=e===void 0?c1:e,i=t.confettiNumber,r=i===void 0?t.confettiesNumber||(t.emojis?y1:S1):i,s=t.confettiColors,o=s===void 0?M1:s,a=t.emojis,l=a===void 0?t.emojies||[]:a,u=t.emojiSize,f=u===void 0?f1:u;return t.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),t.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:n,confettiNumber:r,confettiColors:o,emojis:l,emojiSize:f}}var w1=function(){function t(e){var n=this;Lf(this,t),this.canvasContext=e,this.shapes=[],this.promise=new Promise(function(i){return n.resolvePromise=i})}return Pf(t,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var n;(n=this.shapes).push.apply(n,arguments)}},{key:"complete",value:function(){var n;return this.shapes.length?!1:((n=this.resolvePromise)===null||n===void 0||n.call(this),!0)}},{key:"processShapes",value:function(n,i,r){var s=this,o=n.timeDelta,a=n.currentTime;this.shapes=this.shapes.filter(function(l){return l.updatePosition(o,a),l.draw(s.canvasContext),r?l.getIsVisibleOnCanvas(i):!0})}}]),t}(),A1=function(){function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Lf(this,t),this.activeConfettiBatches=[],this.canvas=e.canvas||E1(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return Pf(t,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,s1(this.canvas);var n=new Date().getTime(),i=n-this.lastUpdated,r=this.canvas.offsetHeight,s=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(o){return o.processShapes({timeDelta:i,currentTime:n},r,s),s?!o.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(n)}},{key:"queueAnimationFrameIfNeeded",value:function(n){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=n||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=T1(n),r=i.confettiRadius,s=i.confettiNumber,o=i.confettiColors,a=i.emojis,l=i.emojiSize,u=this.canvas.getBoundingClientRect(),f=u.width,h=u.height,d=h*5/7,m={x:0,y:d},x={x:f,y:d},v=new w1(this.canvasContext),p=0;p<s/2;p++){var c=new xp({initialPosition:m,direction:"right",confettiRadius:r,confettiColors:o,confettiNumber:s,emojis:a,emojiSize:l,canvasWidth:f}),_=new xp({initialPosition:x,direction:"left",confettiRadius:r,confettiColors:o,confettiNumber:s,emojis:a,emojiSize:l,canvasWidth:f});v.addShapes(c,_)}return this.activeConfettiBatches.push(v),this.queueAnimationFrameIfNeeded(),v.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}}]),t}();const R1=t=>{const e=Array.from({length:100}).fill().map((n,i)=>i);return Array.from({length:18}).fill().map((n,i)=>{const r=Math.floor(Math.random()*e.length),s=e.splice(r,1)[0];return s===new Date().getDate()&&i>12&&Math.random()>.5?s-1:s!==t||s===t&&t===r?s:e.pop()||0})},C1=t=>{const e=76.92307692307692,n=280/3.64;return{x:t.x*n+140,y:t.y*e+256}},L1=(t,e)=>e.map((n,i)=>n===t||n===new Date().getDate()?i:null).filter(n=>n!==null),Sp=[5,10,15,20,30,40,50,100,150,200,250,300,400,500,600,700,800,999];function P1(){const t=Be.useRef(),e=Be.useRef(null),n=Be.useRef(!1),i=Be.useRef(new He),r=Be.useRef([]),s=Be.useRef(Math.floor(Math.random()*100)),o=Be.useRef(R1(s.current)),a=Be.useRef(L1(s.current,o.current)),l=Be.useMemo(()=>new QT,[]),u=Be.useMemo(()=>new gn(75,window.innerWidth/(window.innerHeight*.8),.1,1e3),[]),f=Be.useMemo(()=>new d_({antialias:!0}),[]),h=Be.useMemo(()=>new i1(0),[]),d=Be.useMemo(()=>new n1(16777215,2.4),[]),m=Be.useMemo(()=>{const B=new Image(280,512);return B.src="textures/bg.png",B},[]),x=Be.useMemo(()=>{const B=document.createElement("canvas");return B.width=280,B.height=512,B},[]),v=Be.useMemo(()=>{const B=document.createElement("canvas");return B.width=280,B.height=512,B},[]),p=Be.useMemo(()=>{const B=document.createElement("canvas");return B.width=280,B.height=512,B},[]),c=Be.useMemo(()=>new JT({color:16777215,roughness:.42}),[]),_=Be.useMemo(()=>new gl(3.64,6.656),[]),g=Be.useCallback(()=>{const B=v.getContext("2d"),D=p.getContext("2d"),O=r.current.length;r.current.slice(Math.max(0,O-10),O).forEach(V=>{const K=C1(V);B.clearRect(K.x,K.y,20,20);const W=a.current.findIndex(L=>{const X=34+Math.trunc(L%6)*38,z=312+Math.trunc(L/6)*48;if(K.x>=X-20&&K.x<=X+20&&K.y>=z-20&&K.y<=z+20)return new A1().addConfetti({confettiRadius:4,confettiNumber:256}),!0});W!==-1&&a.current.splice(W,1)}),D.drawImage(x,0,0),D.drawImage(v,0,0),c.map=new up(p),c.needsUpdate=!0},[x,v,p,c]),S=Be.useMemo(()=>{const B=x.getContext("2d"),D=v.getContext("2d"),O=p.getContext("2d");m.onload=()=>{B.globalCompositeOperation="source-over",B.drawImage(m,0,0,280,512),D.fillStyle="#ccc",D.beginPath(),D.arc(227.5,238,28,0,2*Math.PI,!1),D.fill(),D.beginPath(),D.roundRect(20,287.5,240,150,4),D.fill();const K=new Date().getDate();B.fillStyle="white",B.font="36px sans",B.fillText(K.toString().padStart(2,"0"),31,252),B.fillStyle="white",B.font="36px sans",B.fillText(s.current.toString().padStart(2,"0"),206,252),o.current.forEach((W,L)=>{const X=34+Math.trunc(L%6)*38,z=312+Math.trunc(L/6)*48;B.fillStyle=W===s.current||W===K?"#ffcc16":"white",B.font="16px sans",B.fillText(W.toString().padStart(2,"0"),X,z),B.fillStyle=W===s.current||W===K?"#ffcc16":"white",B.font="12px sans",B.fillText(`￥${Sp[L]}`,X-B.measureText(`￥${Sp[L]}`).width/4,z+16)}),O.drawImage(x,0,0),O.drawImage(v,0,0),c.map=new up(p),c.needsUpdate=!0};const V=new si(_,c);return V.name="card",V},[_,c,g]),[T,C]=Be.useState({x:0,y:0}),[R,b]=Be.useState(!1),M=()=>b(!0),w=()=>b(!1);Be.useEffect(()=>{const B=()=>{u.aspect=window.innerWidth/(window.innerHeight*.8),u.updateProjectionMatrix(),f.setPixelRatio(window.devicePixelRatio),f.setSize(window.innerWidth,window.innerHeight*.8),f.setClearColor(0,0),t.current.children.length===0&&t.current.appendChild(f.domElement)};return B(),window.addEventListener("resize",B),()=>{window.removeEventListener("resize",B)}},[f,u]),Be.useEffect(()=>{l.add(S),l.add(h),d.position.set(-.5,1.2,2),l.add(d),u.position.z=5},[l,u,h,S,d]),Be.useEffect(()=>{const B=()=>{e.current=requestAnimationFrame(B);const D=Math.PI/16*Math.max(-1,Math.min(1,T.x)),O=Math.PI/36*Math.max(-1,Math.min(1,T.y));S.rotation.x+=(O-S.rotation.x)*.1,S.rotation.y+=(D-S.rotation.y)*.04;const V=new G(i.current.x,i.current.y,.5).unproject(u),W=new r1(u.position,V.sub(u.position).normalize()).intersectObjects(l.children);W.length>0&&n.current&&W.find(({object:L})=>L.name==="card")&&(r.current.push(W[0].point),g()),f.render(l,u)};return B(),()=>{e.current!==null&&cancelAnimationFrame(e.current)}},[l,u,T,c,S,g]),Be.useEffect(()=>{const B=V=>{C({x:V.clientX/window.innerWidth*2-1,y:V.clientY/(window.innerHeight*.8)*2-1})},D=V=>{C({x:V.changedTouches[0].clientX/window.innerWidth*2-1,y:V.changedTouches[0].clientY/(window.innerHeight*.8)*2-1})},O=()=>C({x:0,y:0});return t.current.addEventListener("mousemove",B),t.current.addEventListener("mouseup",O),t.current.addEventListener("mouseleave",O),t.current.addEventListener("touchmove",D),t.current.addEventListener("touchend",O),t.current.addEventListener("touchcancel",O),()=>{t.current.removeEventListener("mousemove",B),t.current.removeEventListener("mouseup",O),t.current.removeEventListener("mouseleave",O),t.current.removeEventListener("touchmove",D),t.current.removeEventListener("touchend",O),t.current.removeEventListener("touchcancel",O)}},[]),Be.useEffect(()=>{const B=L=>{i.current.x=L.clientX/window.innerWidth*2-1,i.current.y=L.clientY/(window.innerHeight*.8)*2-1},D=L=>{n.current=!0,B(L)},O=L=>{n.current=!1,B(L)},V=L=>{i.current.x=L.changedTouches[0].clientX/window.innerWidth*2-1,i.current.y=L.changedTouches[0].clientY/(window.innerHeight*.8)*2-1},K=L=>{n.current=!0,V(L)},W=L=>{n.current=!1,V(L)};return t.current.addEventListener("mousedown",D),t.current.addEventListener("mousemove",B),t.current.addEventListener("mouseup",O),t.current.addEventListener("mouseleave",O),t.current.addEventListener("touchstart",K),t.current.addEventListener("touchmove",V),t.current.addEventListener("touchend",W),t.current.addEventListener("touchcancel",W),()=>{t.current.removeEventListener("mousedown",D),t.current.removeEventListener("mousemove",B),t.current.removeEventListener("mouseup",O),t.current.removeEventListener("mouseleave",O),t.current.removeEventListener("touchstart",K),t.current.removeEventListener("touchmove",V),t.current.removeEventListener("touchend",W),t.current.removeEventListener("touchcancel",W)}},[]);const Z=rn.jsxs("div",{className:"modal","data-visible":`${R}`,onClick:w,children:[rn.jsx("p",{children:"我还年轻，不想踩缝纫机"}),rn.jsx("p",{children:"你领个红包吧👀"}),rn.jsx("img",{src:"/WechatIMG611.png"}),rn.jsx("p",{children:"点击任意处关闭"})]});return rn.jsxs("div",{className:"main",children:[rn.jsx("div",{className:"container",ref:t}),rn.jsxs("div",{className:"menu",children:[rn.jsx("button",{className:"button",onClick:()=>location.reload(),children:"再刮一张"}),rn.jsx("div",{className:"scan",children:rn.jsx("span",{onClick:M,href:"mailto:kuyermqi@outlook.com",children:"→ 点我兑奖 ←"})})]}),Ig.createPortal(Z,document.body)]})}wu.createRoot(document.getElementById("root")).render(rn.jsx(N_.StrictMode,{children:rn.jsx(P1,{})}));
