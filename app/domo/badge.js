/**
 * @license
 * Lo-Dash 2.0.0 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash include="each,flatten,isUndefined,isArray,isObject,extend,pluck,max,range,object" exports="global" iife="var util " -m --output vendor/lodash.build.js`
 */
;var util={};!function(n){function t(n){return n.charCodeAt(0)}function e(){return O.pop()||{a:"",b:null,c:"",k:null,configurable:!1,enumerable:!1,"false":!1,d:"",e:"",v:null,g:"","null":!1,number:null,z:null,push:null,h:null,string:null,i:"","true":!1,undefined:!1,j:!1,writable:!1}}function r(){}function u(n){n.length=0,_.length<x&&_.push(n)}function o(n){var t=n.k;t&&o(t),n.b=n.k=n.object=n.number=n.string=null,O.length<x&&O.push(n)}function a(){}function c(n,t,e){if(typeof n!="function")return E;
if(typeof t=="undefined")return n;var r=n.__bindData__||lt.funcNames&&!n.name;if(typeof r=="undefined"){var u=S&&U.call(n);lt.funcNames||!u||A.test(u)||(r=!0),(lt.funcNames||!r)&&(r=!S||S.test(u),ft(n,r))}if(true!==r&&r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return j(n,t)}function i(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var a=n[r];
a&&typeof a=="object"&&(st(a)||g(a))?Q.apply(o,t?a:i(a,t,e)):e||o.push(a)}return o}function l(n,t,e,r,o,a){if(e){var c=e(n,t);if(typeof c!="undefined")return!!c}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&R[typeof n]||t&&R[typeof t]))return!1;if(null==n||null==t)return n===t;var i=X.call(n),f=X.call(t);if(i==P&&(i=z),f==P&&(f=z),i!=f)return!1;switch(i){case D:case F:return+n==+t;case N:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case L:case K:return n==t+""}if(f=i==B,!f){if(V.call(n,"__wrapped__")||V.call(t,"__wrapped__"))return l(n.__wrapped__||n,t.__wrapped__||t,e,r,o,a);
if(i!=z)return!1;var i=!lt.argsObject&&g(n)?Object:n.constructor,s=!lt.argsObject&&g(t)?Object:t.constructor;if(i!=s&&!(y(i)&&i instanceof i&&y(s)&&s instanceof s))return!1}for(s=!o,o||(o=_.pop()||[]),a||(a=_.pop()||[]),i=o.length;i--;)if(o[i]==n)return a[i]==t;var p=0,c=!0;if(o.push(n),a.push(t),f){if(i=n.length,p=t.length,c=p==n.length,!c&&!r)return c;for(;p--;)if(f=i,s=t[p],r)for(;f--&&!(c=l(n[f],s,e,r,o,a)););else if(!(c=l(n[p],s,e,r,o,a)))break;return c}return ht(t,function(t,u,i){return V.call(i,u)?(p++,c=V.call(n,u)&&l(n[u],t,e,r,o,a)):void 0
}),c&&!r&&ht(n,function(n,t,e){return V.call(e,t)?c=-1<--p:void 0}),s&&(u(o),u(a)),c}function f(n,t,e,r,u,o){var a=1&t,c=2&t,i=4&t,l=8&t,s=16&t,g=32&t,h=n;if(!c&&!y(n))throw new TypeError;s&&!e.length&&(t&=-17,s=e=!1),g&&!r.length&&(t&=-33,g=r=!1);var b=n&&n.__bindData__;if(b)return!a||1&b[1]||(b[4]=u),!a&&1&b[1]&&(t|=8),!i||4&b[1]||(b[5]=o),s&&Q.apply(b[2]||(b[2]=[]),e),g&&Q.apply(b[3]||(b[3]=[]),r),b[1]|=t,f.apply(null,b);if(!a||c||i||g||!(lt.fastBind||nt&&s))d=function(){var y=arguments,b=a?u:this;
return(i||s||g)&&(y=ot.call(y),s&&Y.apply(y,e),g&&Q.apply(y,r),i&&y.length<o)?(t|=16,f(n,l?t:-4&t,y,null,u,o)):(c&&(n=b[h]),this instanceof d?(b=p(n.prototype),y=n.apply(b,y),v(y)?y:b):n.apply(b,y))};else{if(s){var m=[u];Q.apply(m,e)}var d=s?nt.apply(n,m):nt.call(n,u)}return ft(d,ot.call(arguments)),d}function s(){var n=e();n.h=C,n.b=n.c=n.g=n.i="",n.e="t",n.j=!0;for(var t,r=0;t=arguments[r];r++)for(var u in t)n[u]=t[u];r=n.a,n.d=/^[^,]+/.exec(r)[0],t=Function,r="return function("+r+"){",u="var n,t="+n.d+",E="+n.e+";if(!t)return E;"+n.i+";",n.b?(u+="var u=t.length;n=-1;if("+n.b+"){",lt.unindexedChars&&(u+="if(s(t)){t=t.split('')}"),u+="while(++n<u){"+n.g+";}}else{"):lt.nonEnumArgs&&(u+="var u=t.length;n=-1;if(u&&p(t)){while(++n<u){n+='';"+n.g+";}}else{"),lt.enumPrototypes&&(u+="var G=typeof t=='function';"),lt.enumErrorProps&&(u+="var F=t===k||t instanceof Error;");
var a=[];if(lt.enumPrototypes&&a.push('!(G&&n=="prototype")'),lt.enumErrorProps&&a.push('!(F&&(n=="message"||n=="name"))'),n.j&&n.f)u+="var C=-1,D=B[typeof t]&&v(t),u=D?D.length:0;while(++C<u){n=D[C];",a.length&&(u+="if("+a.join("&&")+"){"),u+=n.g+";",a.length&&(u+="}"),u+="}";else if(u+="for(n in t){",n.j&&a.push("m.call(t, n)"),a.length&&(u+="if("+a.join("&&")+"){"),u+=n.g+";",a.length&&(u+="}"),u+="}",lt.nonEnumShadows){for(u+="if(t!==A){var i=t.constructor,r=t===(i&&i.prototype),f=t===J?I:t===k?j:L.call(t),x=y[f];",k=0;7>k;k++)u+="n='"+n.h[k]+"';if((!(r&&x[n])&&m.call(t,n))",n.j||(u+="||(!x[n]&&t[n]!==A[n])"),u+="){"+n.g+"}";
u+="}"}return(n.b||lt.nonEnumArgs)&&(u+="}"),u+=n.c+";return E",t=t("d,j,k,m,o,p,q,s,v,A,B,y,I,J,L",r+u+"}"),o(n),t(c,I,J,V,w,g,st,h,n.f,M,R,it,K,q,X)}function p(n){return v(n)?tt(n):{}}function g(n){return n&&typeof n=="object"?X.call(n)==P:!1}function y(n){return typeof n=="function"}function v(n){return!(!n||!R[typeof n])}function h(n){return typeof n=="string"||X.call(n)==K}function b(n,t,e){if(t&&typeof e=="undefined"&&st(n)){e=-1;for(var r=n.length;++e<r&&false!==t(n[e],e,n););}else vt(n,t,e);return n
}function m(n,t,e){var r=-1,u=n?n.length:0,o=Array(typeof u=="number"?u:0);if(t=a.createCallback(t,e,3),st(n))for(;++r<u;)o[r]=t(n[r],r,n);else vt(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function d(n,t){for(var e=-1,r=n?n.length:0,u={};++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function j(n,t){return 2<arguments.length?f(n,17,ot.call(arguments,2),null,t):f(n,1,null,null,t)}function E(n){return n}var _=[],O=[],w={},x=40,A=/^function[ \n\r\t]+\w/,S=(S=/\bthis\b/,S.test(function(){return this
})&&S),C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),P="[object Arguments]",B="[object Array]",D="[object Boolean]",F="[object Date]",I="[object Error]",N="[object Number]",z="[object Object]",L="[object RegExp]",K="[object String]",R={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},$=R[typeof n]&&n||this,G=[],J=Error.prototype,M=Object.prototype,q=String.prototype,H=RegExp("^"+(M.valueOf+"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),T=Math.ceil,U=Function.prototype.toString,V=M.hasOwnProperty,Q=G.push,W=M.propertyIsEnumerable,X=M.toString,Y=G.unshift,Z=function(){try{var n={},t=H.test(t=Object.defineProperty)&&t,e=t(n,n,n)&&t
}catch(r){}return e}(),nt=H.test(nt=X.bind)&&nt,tt=H.test(tt=Object.create)&&tt,et=H.test(et=Array.isArray)&&et,rt=H.test(rt=Object.keys)&&rt,ut=Math.max,ot=G.slice,at=H.test($.attachEvent),ct=nt&&!/\n|true/.test(nt+at),it={};it[B]=it[F]=it[N]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},it[D]=it[K]={constructor:!0,toString:!0,valueOf:!0},it[I]=it["[object Function]"]=it[L]={constructor:!0,toString:!0},it[z]={constructor:!0},function(){for(var n=C.length;n--;){var t,e=C[n];for(t in it)V.call(it,t)&&!V.call(it[t],e)&&(it[t][e]=!1)
}}();var lt=a.support={};!function(){var n=function(){this.x=1},t={0:1,length:1},e=[];n.prototype={valueOf:1,y:1};for(var r in new n)e.push(r);for(r in arguments);lt.argsObject=arguments.constructor==Object&&!(arguments instanceof Array),lt.argsClass=X.call(arguments)==P,lt.enumErrorProps=W.call(J,"message")||W.call(J,"name"),lt.enumPrototypes=W.call(n,"prototype"),lt.fastBind=nt&&!ct,lt.funcNames=typeof Function.name=="string",lt.nonEnumArgs=0!=r,lt.nonEnumShadows=!/valueOf/.test(e),lt.spliceObjects=(G.splice.call(t,0,1),!t[0]),lt.unindexedChars="xx"!="x"[0]+Object("x")[0]
}(1),tt||(p=function(n){if(v(n)){r.prototype=n;var t=new r;r.prototype=null}return t||{}});var ft=Z?function(n,t){var r=e();r.value=t,Z(n,"__bindData__",r),o(r)}:r;lt.argsClass||(g=function(n){return n&&typeof n=="object"?V.call(n,"callee"):!1});var st=et||function(n){return n&&typeof n=="object"?X.call(n)==B:!1},pt=s({a:"z",e:"[]",i:"if(!(B[typeof z]))return E",g:"E.push(n)"}),gt=rt?function(n){return v(n)?lt.enumPrototypes&&typeof n=="function"||lt.nonEnumArgs&&n.length&&g(n)?pt(n):rt(n):[]}:pt,et={a:"g,e,K",i:"e=e&&typeof K=='undefined'?e:d(e,K,3)",b:"typeof u=='number'",v:gt,g:"if(e(t[n],n,g)===false)return E"},yt={a:"z,H,l",i:"var a=arguments,b=0,c=typeof l=='number'?2:a.length;while(++b<c){t=a[b];if(t&&B[typeof t]){",v:gt,g:"if(typeof E[n]=='undefined')E[n]=t[n]",c:"}}"},at={i:"if(!B[typeof t])return E;"+et.i,b:!1},vt=s(et),yt=s(yt,{i:yt.i.replace(";",";if(c>3&&typeof a[c-2]=='function'){var e=d(a[--c-1],a[c--],2)}else if(c>2&&typeof a[c-1]=='function'){e=a[--c]}"),g:"E[n]=e?e(E[n],t[n]):t[n]"}),ht=s(et,at,{j:!1});
y(/x/)&&(y=function(n){return typeof n=="function"&&"[object Function]"==X.call(n)}),a.assign=yt,a.bind=j,a.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return c(n,t,e);if("object"!=r)return function(t){return t[n]};var u=gt(n),o=u[0],a=n[o];return 1!=u.length||a!==a||v(a)?function(t){for(var e=u.length,r=!1;e--&&(r=l(t[u[e]],n[u[e]],null,!0)););return r}:function(n){return n=n[o],a===n&&(0!==a||1/a==1/n)}},a.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(e=(r=e)&&r[t]===n?null:t,t=!1),null!=e&&(n=m(n,e,r)),i(n,t)
},a.forEach=b,a.forIn=ht,a.keys=gt,a.map=m,a.max=function(n,e,r){var u=-1/0,o=u;if(!e&&st(n)){r=-1;for(var c=n.length;++r<c;){var i=n[r];i>o&&(o=i)}}else e=!e&&h(n)?t:a.createCallback(e,r,3),vt(n,function(n,t,r){t=e(n,t,r),t>u&&(u=t,o=n)});return o},a.pluck=m,a.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=ut(0,T((t-n)/(e||1)));for(var u=Array(t);++r<t;)u[r]=n,n+=e;return u},a.zipObject=d,a.collect=m,a.each=b,a.extend=yt,a.object=d,a.identity=E,a.isArguments=g,a.isArray=st,a.isFunction=y,a.isObject=v,a.isString=h,a.isUndefined=function(n){return typeof n=="undefined"
},a.VERSION="2.0.0",$._=a}(util);

/**
 * when.js
 */

!function(t){window.when=t()}(function(){var t
return function n(t,e,r){function o(u,c){if(!e[u]){if(!t[u]){var f="function"==typeof require&&require
if(!c&&f)return f(u,!0)
if(i)return i(u,!0)
throw Error("Cannot find module '"+u+"'")}var a=e[u]={exports:{}}
t[u][0].call(a.exports,function(n){var e=t[u][1][n]
return o(e?e:n)},a,a.exports,n,t,e,r)}return e[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u])
return o}({1:[function(t,n){var e=n.exports=t("../when")
e.callbacks=t("../callbacks"),e.cancelable=t("../cancelable"),e.delay=t("../delay"),e.fn=t("../function"),e.guard=t("../guard"),e.keys=t("../keys"),e.nodefn=e.node=t("../node"),e.parallel=t("../parallel"),e.pipeline=t("../pipeline"),e.poll=t("../poll"),e.sequence=t("../sequence"),e.timeout=t("../timeout")},{"../callbacks":2,"../cancelable":3,"../delay":4,"../function":5,"../guard":6,"../keys":7,"../node":26,"../parallel":27,"../pipeline":28,"../poll":29,"../sequence":30,"../timeout":31,"../when":32}],2:[function(n,e){!function(t){t(function(t){function n(t,n){return v(t,this,n||[])}function e(t,n,e,o){e.push(s(o.resolve,o),s(o.reject,o)),r(t,n,e,o)}function r(t,n,e,r){try{t.apply(n,e)}catch(o){r.reject(o)}}function o(t){return v(t,this,d.call(arguments,1))}function i(t){var n=arguments.length>1?d.call(arguments,1):[]
return function(){return v(t,this,n.concat(d.call(arguments)))}}function u(t,n,e){return p(i,n,e,t)}function c(t,n){return function(){var e=this
return h.all(arguments).then(function(r){var o,i,u=h._defer()
return"number"==typeof n.callback&&(o=f(r,n.callback)),"number"==typeof n.errback&&(i=f(r,n.errback)),o>i?(a(r,i,u._handler.reject,u._handler),a(r,o,u._handler.resolve,u._handler)):(a(r,o,u._handler.resolve,u._handler),a(r,i,u._handler.reject,u._handler)),t.apply(e,r),u})}}function f(t,n){return 0>n?t.length+n+2:n}function a(t,n,e,r){"number"==typeof n&&t.splice(n,0,s(e,r))}function s(t,n){return function(){arguments.length>1?t.call(n,d.call(arguments)):t.apply(n,arguments)}}var l=t("./when"),h=l.Promise,p=t("./lib/liftAll"),d=Array.prototype.slice,y=t("./lib/apply"),v=y(h,e)
return{lift:i,liftAll:u,apply:n,call:o,promisify:c}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"./lib/apply":11,"./lib/liftAll":23,"./when":32}],3:[function(n,e){!function(t){t(function(){return function(t,n){return t.cancel=function(){try{t.reject(n(t))}catch(e){t.reject(e)}return t.promise},t}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t()})},{}],4:[function(n,e){!function(t){t(function(t){var n=t("./when")
return function(t,e){return n(e).delay(t)}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"./when":32}],5:[function(n,e){!function(t){t(function(t){function n(t,n){return f(t,this,null==n?[]:a.call(n))}function e(t){var n=arguments.length>1?a.call(arguments,1):[]
return function(){return f(t,this,n.concat(a.call(arguments)))}}function r(t,n,r){return c(e,n,r,t)}function o(t){var n=a.call(arguments,1)
return function(){var e=this,r=a.call(arguments),o=u.apply(e,[t].concat(r))
return i.reduce(n,function(t,n){return n.call(e,t)},o)}}var i=t("./when"),u=i["try"],c=t("./lib/liftAll"),f=t("./lib/apply")(i.Promise),a=Array.prototype.slice
return{lift:e,liftAll:r,call:u,apply:n,compose:o}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"./lib/apply":11,"./lib/liftAll":23,"./when":32}],6:[function(n,e){!function(t){t(function(t){function n(t,n){return function(){var e=o.call(arguments)
return r(t()).withThis(this).then(function(t){return r(n.apply(this,e))["finally"](t)})}}function e(t){function n(){e=Math.max(e-1,0),o.length>0&&o.shift()(n)}var e=0,o=[]
return function(){return r.promise(function(r){t>e?r(n):o.push(r),e+=1})}}var r=t("./when"),o=Array.prototype.slice
return n.n=e,n})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"./when":32}],7:[function(n,e){!function(t){"use strict"
t(function(t){function n(t){function n(t,n,e){this[t]=n,0===--f&&e.resolve(u)}for(var e,r=o._defer(),i=o._handler(r),u={},c=Object.keys(t),f=c.length,a=0;a<c.length;++a)e=c[a],o._handler(t[e]).fold(n,e,u,i)
return 0===f&&i.resolve(u),r}function e(t,e){function r(t,n){return e(n,t)}return i(t).then(function(t){return n(Object.keys(t).reduce(function(n,e){return n[e]=i(t[e]).fold(r,e),n},{}))})}var r=t("./when"),o=r.Promise,i=r.resolve
return{all:r.lift(n),map:e}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"./when":32}],8:[function(n,e){!function(t){"use strict"
t(function(t){var n=t("./makePromise"),e=t("./Scheduler"),r=t("./env").asap
return n({scheduler:new e(r)})})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"./Scheduler":9,"./env":21,"./makePromise":24}],9:[function(n,e){!function(t){"use strict"
t(function(){function t(t){this._async=t,this._running=!1,this._queue=this,this._queueLen=0,this._afterQueue={},this._afterQueueLen=0
var n=this
this.drain=function(){n._drain()}}return t.prototype.enqueue=function(t){this._queue[this._queueLen++]=t,this.run()},t.prototype.afterQueue=function(t){this._afterQueue[this._afterQueueLen++]=t,this.run()},t.prototype.run=function(){this._running||(this._running=!0,this._async(this.drain))},t.prototype._drain=function(){for(var t=0;t<this._queueLen;++t)this._queue[t].run(),this._queue[t]=void 0
for(this._queueLen=0,this._running=!1,t=0;t<this._afterQueueLen;++t)this._afterQueue[t].run(),this._afterQueue[t]=void 0
this._afterQueueLen=0},t})}("function"==typeof t&&t.amd?t:function(t){e.exports=t()})},{}],10:[function(n,e){!function(t){"use strict"
t(function(){function t(n){Error.call(this),this.message=n,this.name=t.name,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t})}("function"==typeof t&&t.amd?t:function(t){e.exports=t()})},{}],11:[function(n,e){!function(t){"use strict"
t(function(){function t(t,e){function r(n,r,i){var u=t._defer(),c=i.length,f=Array(c)
return o({f:n,thisArg:r,args:i,params:f,i:c-1,call:e},u._handler),u}function o(n,r){if(n.i<0)return e(n.f,n.thisArg,n.params,r)
var o=t._handler(n.args[n.i])
o.fold(i,n,void 0,r)}function i(t,n,e){t.params[t.i]=n,t.i-=1,o(t,e)}return arguments.length<2&&(e=n),r}function n(t,n,e,r){try{r.resolve(t.apply(n,e))}catch(o){r.reject(o)}}return t.tryCatchResolve=n,t})}("function"==typeof t&&t.amd?t:function(t){e.exports=t()})},{}],12:[function(n,e){!function(t){"use strict"
t(function(t){var n=t("../state"),e=t("../apply")
return function(t){function r(n){function e(t){s=null,this.resolve(t)}function r(t){this.resolved||(s.push(t),0===--a&&this.reject(s))}for(var o,i,u=t._defer(),c=u._handler,f=n.length>>>0,a=f,s=[],l=0;f>l;++l)if(i=n[l],void 0!==i||l in n){if(o=t._handler(i),o.state()>0){c.become(o),t._visitRemaining(n,l,o)
break}o.visit(c,e,r)}else--a
return 0===a&&c.reject(new RangeError("any(): array must not be empty")),u}function o(n,e){function r(t){this.resolved||(s.push(t),0===--p&&(l=null,this.resolve(s)))}function o(t){this.resolved||(l.push(t),0===--i&&(s=null,this.reject(l)))}var i,u,c,f=t._defer(),a=f._handler,s=[],l=[],h=n.length>>>0,p=0
for(c=0;h>c;++c)u=n[c],(void 0!==u||c in n)&&++p
for(e=Math.max(e,0),i=p-e+1,p=Math.min(e,p),e>p?a.reject(new RangeError("some(): array must contain at least "+e+" item(s), but had "+p)):0===p&&a.resolve(s),c=0;h>c;++c)u=n[c],(void 0!==u||c in n)&&t._handler(u).visit(a,r,o,a.notify)
return f}function i(n,e){return t._traverse(e,n)}function u(n,e){var r=b.call(n)
return t._traverse(e,r).then(function(t){return c(r,t)})}function c(n,e){for(var r=e.length,o=Array(r),i=0,u=0;r>i;++i)e[i]&&(o[u++]=t._handler(n[i]).value)
return o.length=u,o}function f(t){return y(t.map(a))}function a(e){var r=t._handler(e)
return 0===r.state()?d(e).then(n.fulfilled,n.rejected):n.inspect(r)}function s(t,n){return arguments.length>2?v.call(t,h(n),arguments[2]):v.call(t,h(n))}function l(t,n){return arguments.length>2?m.call(t,h(n),arguments[2]):m.call(t,h(n))}function h(t){return function(n,e,r){return p(t,void 0,[n,e,r])}}var p=e(t),d=t.resolve,y=t.all,v=Array.prototype.reduce,m=Array.prototype.reduceRight,b=Array.prototype.slice
return t.any=r,t.some=o,t.settle=f,t.map=i,t.filter=u,t.reduce=s,t.reduceRight=l,t.prototype.spread=function(t){return this.then(y).then(function(n){return t.apply(this,n)})},t}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"../apply":11,"../state":25}],13:[function(n,e){!function(t){"use strict"
t(function(){function t(){throw new TypeError("catch predicate must be a function")}function n(t,n){return e(n)?t instanceof n:n(t)}function e(t){return t===Error||null!=t&&t.prototype instanceof Error}function r(t){return("object"==typeof t||"function"==typeof t)&&null!==t}function o(t){return t}return function(e){function i(t,e){return function(r){return n(r,e)?t.call(this,r):a(r)}}function u(t,n,e,o){var i=t.call(n)
return r(i)?c(i,e,o):e(o)}function c(t,n,e){return f(t).then(function(){return n(e)})}var f=e.resolve,a=e.reject,s=e.prototype["catch"]
return e.prototype.done=function(t,n){this._handler.visit(this._handler.receiver,t,n)},e.prototype["catch"]=e.prototype.otherwise=function(n){return arguments.length<2?s.call(this,n):"function"!=typeof n?this.ensure(t):s.call(this,i(arguments[1],n))},e.prototype["finally"]=e.prototype.ensure=function(t){return"function"!=typeof t?this:this.then(function(n){return u(t,this,o,n)},function(n){return u(t,this,a,n)})},e.prototype["else"]=e.prototype.orElse=function(t){return this.then(void 0,function(){return t})},e.prototype["yield"]=function(t){return this.then(function(){return t})},e.prototype.tap=function(t){return this.then(t)["yield"](this)},e}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t()})},{}],14:[function(n,e){!function(t){"use strict"
t(function(){return function(t){return t.prototype.fold=function(n,e){var r=this._beget()
return this._handler.fold(function(e,r,o){t._handler(e).fold(function(t,e,r){r.resolve(n.call(this,e,t))},r,this,o)},e,r._handler.receiver,r._handler),r},t}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t()})},{}],15:[function(n,e){!function(t){"use strict"
t(function(t){var n=t("../state").inspect
return function(t){return t.prototype.inspect=function(){return n(t._handler(this))},t}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"../state":25}],16:[function(n,e){!function(t){"use strict"
t(function(){return function(t){function n(t,n,r,o){return e(function(n){return[n,t(n)]},n,r,o)}function e(t,n,o,i){function u(i,u){return r(o(i)).then(function(){return e(t,n,o,u)})}return r(i).then(function(e){return r(n(e)).then(function(n){return n?e:r(t(e)).spread(u)})})}var r=t.resolve
return t.iterate=n,t.unfold=e,t}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t()})},{}],17:[function(n,e){!function(t){"use strict"
t(function(){return function(t){return t.prototype.progress=function(t){return this.then(void 0,void 0,t)},t}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t()})},{}],18:[function(n,e){!function(t){"use strict"
t(function(t){function n(t,n,r,o){return e.setTimer(function(){t(r,o,n)},n)}var e=t("../env"),r=t("../TimeoutError")
return function(t){function o(t,e,r){n(i,t,e,r)}function i(t,n){n.resolve(t)}function u(t,n,e){var o=void 0===t?new r("timed out after "+e+"ms"):t
n.reject(o)}return t.prototype.delay=function(t){var n=this._beget()
return this._handler.fold(o,t,void 0,n._handler),n},t.prototype.timeout=function(t,r){var o=this._beget(),i=o._handler,c=n(u,t,r,o._handler)
return this._handler.visit(i,function(t){e.clearTimer(c),this.resolve(t)},function(t){e.clearTimer(c),this.reject(t)},i.notify),o},t}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"../TimeoutError":10,"../env":21}],19:[function(n,e){!function(t){"use strict"
t(function(t){function n(t){throw t}function e(){}var r=t("../env").setTimer,o=t("../format")
return function(t){function i(t){t.handled||(p.push(t),s("Potentially unhandled rejection ["+t.id+"] "+o.formatError(t.value)))}function u(t){var n=p.indexOf(t)
n>=0&&(p.splice(n,1),l("Handled previous rejection ["+t.id+"] "+o.formatObject(t.value)))}function c(t,n){h.push(t,n),null===d&&(d=r(f,0))}function f(){for(d=null;h.length>0;)h.shift()(h.shift())}var a,s=e,l=e
"undefined"!=typeof console&&(a=console,s=void 0!==a.error?function(t){a.error(t)}:function(t){a.log(t)},l=void 0!==a.info?function(t){a.info(t)}:function(t){a.log(t)}),t.onPotentiallyUnhandledRejection=function(t){c(i,t)},t.onPotentiallyUnhandledRejectionHandled=function(t){c(u,t)},t.onFatalRejection=function(t){c(n,t.value)}
var h=[],p=[],d=null
return t}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"../env":21,"../format":22}],20:[function(n,e){!function(t){"use strict"
t(function(){return function(t){return t.prototype["with"]=t.prototype.withThis=function(t){var n=this._beget(),e=n._handler
return e.receiver=t,this._handler.chain(e,t),n},t}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t()})},{}],21:[function(n,e){!function(t){"use strict"
t(function(t){function n(){return"undefined"!=typeof process&&null!==process&&"function"==typeof process.nextTick}function e(){return"function"==typeof MutationObserver&&MutationObserver||"function"==typeof WebKitMutationObserver&&WebKitMutationObserver}function r(t){function n(){var t=e
e=void 0,t()}var e,r=document.createTextNode(""),o=new t(n)
o.observe(r,{characterData:!0})
var i=0
return function(t){e=t,r.data=i^=1}}var o,i="undefined"!=typeof setTimeout&&setTimeout,u=function(t,n){return setTimeout(t,n)},c=function(t){return clearTimeout(t)},f=function(t){return i(t,0)}
if(n())f=function(t){return process.nextTick(t)}
else if(o=e())f=r(o)
else if(!i){var a=t,s=a("vertx")
u=function(t,n){return s.setTimer(n,t)},c=s.cancelTimer,f=s.runOnLoop||s.runOnContext}return{setTimer:u,clearTimer:c,asap:f}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{}],22:[function(n,e){!function(t){"use strict"
t(function(){function t(t){var e="object"==typeof t&&null!==t&&t.stack?t.stack:n(t)
return t instanceof Error?e:e+" (WARNING: non-Error used)"}function n(t){var n=t+""
return"[object Object]"===n&&"undefined"!=typeof JSON&&(n=e(t,n)),n}function e(t,n){try{return JSON.stringify(t)}catch(e){return n}}return{formatError:t,formatObject:n,tryStringify:e}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t()})},{}],23:[function(n,e){!function(t){"use strict"
t(function(){function t(t,n,e){return t[e]=n,t}function n(t){return"function"==typeof t?t.bind():Object.create(t)}return function(e,r,o,i){return void 0===r&&(r=t),Object.keys(i).reduce(function(t,n){var o=i[n]
return"function"==typeof o?r(t,e(o),n):t},void 0===o?n(i):o)}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t()})},{}],24:[function(n,e){!function(t){"use strict"
t(function(){return function(t){function n(t,n){this._handler=t===g?n:e(t)}function e(t){function n(t){o.resolve(t)}function e(t){o.reject(t)}function r(t){o.notify(t)}var o=new w
try{t(n,e,r)}catch(i){e(i)}return o}function r(t){return L(t)?t:new n(g,new j(v(t)))}function o(t){return new n(g,new j(new A(t)))}function i(){return Y}function u(){return new n(g,new w)}function c(t,n){var e=new w(t.receiver,t.join().context)
return new n(g,e)}function f(t){return s(K,null,t)}function a(t,n){return s(H,t,n)}function s(t,e,r){function o(n,o,u){u.resolved||l(r,i,n,t(e,o,n),u)}function i(t,n,e){s[t]=n,0===--a&&e.become(new k(s))}for(var u,c="function"==typeof e?o:i,f=new w,a=r.length>>>0,s=Array(a),h=0;h<r.length&&!f.resolved;++h)u=r[h],void 0!==u||h in r?l(r,c,h,u,f):--a
return 0===a&&f.become(new k(s)),new n(g,f)}function l(t,n,e,r,o){if(M(r)){var i=m(r),u=i.state()
0===u?i.fold(n,e,void 0,o):u>0?n(e,i.value,o):(o.become(i),h(t,e+1,i))}else n(e,r,o)}function h(t,n,e){for(var r=n;r<t.length;++r)p(v(t[r]),e)}function p(t,n){if(t!==n){var e=t.state()
0===e?t.visit(t,void 0,t._unreport):0>e&&t._unreport()}}function d(t){return"object"!=typeof t||null===t?o(new TypeError("non-iterable passed to race()")):0===t.length?i():1===t.length?r(t[0]):y(t)}function y(t){var e,r,o,i=new w
for(e=0;e<t.length;++e)if(r=t[e],void 0!==r||e in t){if(o=v(r),0!==o.state()){i.become(o),h(t,e+1,o)
break}o.visit(i,i.resolve,i.reject)}return new n(g,i)}function v(t){return L(t)?t._handler.join():M(t)?b(t):new k(t)}function m(t){return L(t)?t._handler.join():b(t)}function b(t){try{var n=t.then
return"function"==typeof n?new x(n,t):new k(t)}catch(e){return new A(e)}}function g(){}function _(){}function w(t,e){n.createContext(this,e),this.consumers=void 0,this.receiver=t,this.handler=void 0,this.resolved=!1}function j(t){this.handler=t}function x(t,n){w.call(this),G.enqueue(new O(t,n,this))}function k(t){n.createContext(this),this.value=t}function A(t){n.createContext(this),this.id=++V,this.value=t,this.handled=!1,this.reported=!1,this._report()}function T(t,n){this.rejection=t,this.context=n}function E(t){this.rejection=t}function q(){return new A(new TypeError("Promise cycle"))}function P(t,n){this.continuation=t,this.handler=n}function R(t,n){this.handler=n,this.value=t}function O(t,n,e){this._then=t,this.thenable=n,this.resolver=e}function C(t,n,e,r,o){try{t.call(n,e,r,o)}catch(i){r(i)}}function Q(t,n,e,r){this.f=t,this.z=n,this.c=e,this.to=r,this.resolver=B,this.receiver=this}function L(t){return t instanceof n}function M(t){return("object"==typeof t||"function"==typeof t)&&null!==t}function S(t,e,r,o){return"function"!=typeof t?o.become(e):(n.enterContext(e),F(t,e.value,r,o),void n.exitContext())}function U(t,e,r,o,i){return"function"!=typeof t?i.become(r):(n.enterContext(r),W(t,e,r.value,o,i),void n.exitContext())}function N(t,e,r,o,i){return"function"!=typeof t?i.notify(e):(n.enterContext(r),z(t,e,o,i),void n.exitContext())}function H(t,n,e){try{return t(n,e)}catch(r){return o(r)}}function F(t,n,e,r){try{r.become(v(t.call(e,n)))}catch(o){r.become(new A(o))}}function W(t,n,e,r,o){try{t.call(r,n,e,o)}catch(i){o.become(new A(i))}}function z(t,n,e,r){try{r.notify(t.call(e,n))}catch(o){r.notify(o)}}function J(t,n){n.prototype=I(t.prototype),n.prototype.constructor=n}function K(t,n){return n}function D(){}var G=t.scheduler,I=Object.create||function(t){function n(){}return n.prototype=t,new n}
n.resolve=r,n.reject=o,n.never=i,n._defer=u,n._handler=v,n.prototype.then=function(t,n,e){var r=this._handler,o=r.join().state()
if("function"!=typeof t&&o>0||"function"!=typeof n&&0>o)return new this.constructor(g,r)
var i=this._beget(),u=i._handler
return r.chain(u,r.receiver,t,n,e),i},n.prototype["catch"]=function(t){return this.then(void 0,t)},n.prototype._beget=function(){return c(this._handler,this.constructor)},n.all=f,n.race=d,n._traverse=a,n._visitRemaining=h,g.prototype.when=g.prototype.become=g.prototype.notify=g.prototype.fail=g.prototype._unreport=g.prototype._report=D,g.prototype._state=0,g.prototype.state=function(){return this._state},g.prototype.join=function(){for(var t=this;void 0!==t.handler;)t=t.handler
return t},g.prototype.chain=function(t,n,e,r,o){this.when({resolver:t,receiver:n,fulfilled:e,rejected:r,progress:o})},g.prototype.visit=function(t,n,e,r){this.chain(B,t,n,e,r)},g.prototype.fold=function(t,n,e,r){this.when(new Q(t,n,e,r))},J(g,_),_.prototype.become=function(t){t.fail()}
var B=new _
J(g,w),w.prototype._state=0,w.prototype.resolve=function(t){this.become(v(t))},w.prototype.reject=function(t){this.resolved||this.become(new A(t))},w.prototype.join=function(){if(!this.resolved)return this
for(var t=this;void 0!==t.handler;)if(t=t.handler,t===this)return this.handler=q()
return t},w.prototype.run=function(){var t=this.consumers,n=this.handler
this.handler=this.handler.join(),this.consumers=void 0
for(var e=0;e<t.length;++e)n.when(t[e])},w.prototype.become=function(t){this.resolved||(this.resolved=!0,this.handler=t,void 0!==this.consumers&&G.enqueue(this),void 0!==this.context&&t._report(this.context))},w.prototype.when=function(t){this.resolved?G.enqueue(new P(t,this.handler)):void 0===this.consumers?this.consumers=[t]:this.consumers.push(t)},w.prototype.notify=function(t){this.resolved||G.enqueue(new R(t,this))},w.prototype.fail=function(t){var n=void 0===t?this.context:t
this.resolved&&this.handler.join().fail(n)},w.prototype._report=function(t){this.resolved&&this.handler.join()._report(t)},w.prototype._unreport=function(){this.resolved&&this.handler.join()._unreport()},J(g,j),j.prototype.when=function(t){G.enqueue(new P(t,this))},j.prototype._report=function(t){this.join()._report(t)},j.prototype._unreport=function(){this.join()._unreport()},J(w,x),J(g,k),k.prototype._state=1,k.prototype.fold=function(t,n,e,r){U(t,n,this,e,r)},k.prototype.when=function(t){S(t.fulfilled,this,t.receiver,t.resolver)}
var V=0
J(g,A),A.prototype._state=-1,A.prototype.fold=function(t,n,e,r){r.become(this)},A.prototype.when=function(t){"function"==typeof t.rejected&&this._unreport(),S(t.rejected,this,t.receiver,t.resolver)},A.prototype._report=function(t){G.afterQueue(new T(this,t))},A.prototype._unreport=function(){this.handled||(this.handled=!0,G.afterQueue(new E(this)))},A.prototype.fail=function(t){n.onFatalRejection(this,void 0===t?this.context:t)},T.prototype.run=function(){this.rejection.handled||(this.rejection.reported=!0,n.onPotentiallyUnhandledRejection(this.rejection,this.context))},E.prototype.run=function(){this.rejection.reported&&n.onPotentiallyUnhandledRejectionHandled(this.rejection)},n.createContext=n.enterContext=n.exitContext=n.onPotentiallyUnhandledRejection=n.onPotentiallyUnhandledRejectionHandled=n.onFatalRejection=D
var X=new g,Y=new n(g,X)
return P.prototype.run=function(){this.handler.join().when(this.continuation)},R.prototype.run=function(){var t=this.handler.consumers
if(void 0!==t)for(var n,e=0;e<t.length;++e)n=t[e],N(n.progress,this.value,this.handler,n.receiver,n.resolver)},O.prototype.run=function(){function t(t){r.resolve(t)}function n(t){r.reject(t)}function e(t){r.notify(t)}var r=this.resolver
C(this._then,this.thenable,t,n,e)},Q.prototype.fulfilled=function(t){this.f.call(this.c,this.z,t,this.to)},Q.prototype.rejected=function(t){this.to.reject(t)},Q.prototype.progress=function(t){this.to.notify(t)},n}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t()})},{}],25:[function(n,e){!function(t){"use strict"
t(function(){function t(){return{state:"pending"}}function n(t){return{state:"rejected",reason:t}}function e(t){return{state:"fulfilled",value:t}}function r(r){var o=r.state()
return 0===o?t():o>0?e(r.value):n(r.value)}return{pending:t,fulfilled:e,rejected:n,inspect:r}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t()})},{}],26:[function(n,e){!function(t){t(function(t){function n(t,n){return p(t,this,n||[])}function e(t,n,e,r){var o=u(r)
try{switch(e.length){case 2:t.call(n,e[0],e[1],o)
break
case 1:t.call(n,e[0],o)
break
case 0:t.call(n,o)
break
default:e.push(o),t.apply(n,e)}}catch(i){r.reject(i)}}function r(t){return p(t,this,h.call(arguments,1))}function o(t){var n=arguments.length>1?h.call(arguments,1):[]
return function(){var e,r=n.length,o=arguments.length,i=Array(o+r)
for(e=0;r>e;++e)i[e]=n[e]
for(e=0;o>e;++e)i[e+r]=arguments[e]
return p(t,this,i)}}function i(t,n,e){return s(o,n,e,t)}function u(t){return function(n,e){n?t.reject(n):t.resolve(arguments.length>2?h.call(arguments,1):e)}}function c(t,n){function e(t){r(null,t)}function r(t,e){l(function(){n(t,e)},0)}return t=a(t),n&&t.then(e,r),t}function f(t){return function(n){return c(n,t)}}var a=t("./when"),s=t("./lib/liftAll"),l=t("./lib/env").setTimer,h=Array.prototype.slice,p=t("./lib/apply")(a.Promise,e)
return{lift:o,liftAll:i,apply:n,call:r,createCallback:u,bindCallback:c,liftCallback:f}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"./lib/apply":11,"./lib/env":21,"./lib/liftAll":23,"./when":32}],27:[function(n,e){!function(t){t(function(t){var n=t("./when"),e=n.Promise.all,r=Array.prototype.slice
return function(t){return e(r.call(arguments,1)).then(function(e){return n.map(t,function(t){return t.apply(void 0,e)})})}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"./when":32}],28:[function(n,e){!function(t){t(function(t){var n=t("./when"),e=n.Promise.all,r=Array.prototype.slice
return function(t){var o=function(t,n){return o=function(t,n){return n(t)},n.apply(null,t)}
return e(r.call(arguments,1)).then(function(e){return n.reduce(t,function(t,n){return o(t,n)},e)})}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"./when":32}],29:[function(n,e){!function(t){"use strict"
t(function(t){var n=t("./when"),e=n["try"],r=t("./cancelable")
return function(t,o,i,u){function c(t){s.resolve(t)}function f(t){e(o).then(a,h),void 0!==t&&s.notify(t)}function a(){l||n(t(),function(t){n(i(t),function(n){return n?c(t):f(t)},function(){f(t)})},h)}var s,l,h
return l=!1,s=r(n.defer(),function(){l=!0}),h=s.reject,i=i||function(){return!1},"function"!=typeof o&&(o=function(t){return function(){return n().delay(t)}}(o)),u?f():a(),s.promise=Object.create(s.promise),s.promise.cancel=s.cancel,s.promise}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"./cancelable":3,"./when":32}],30:[function(n,e){!function(t){t(function(t){var n=t("./when"),e=n.Promise.all,r=Array.prototype.slice
return function(t){function o(t){return i.push(t),i}var i=[]
return e(r.call(arguments,1)).then(function(e){return n.reduce(t,function(t,r){return n(r.apply(void 0,e),o)},i)})}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"./when":32}],31:[function(n,e){!function(t){t(function(t){var n=t("./when")
return function(t,e){return n(e).timeout(t)}})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"./when":32}],32:[function(n,e){!function(t){"use strict"
t(function(t){function n(t,n,e,r){var o=x.resolve(t)
return arguments.length<2?o:o.then(n,e,r)}function e(t){return new x(t)}function r(t){return function(){for(var n=0,e=arguments.length,r=Array(e);e>n;++n)r[n]=arguments[n]
return k(t,this,r)}}function o(t){for(var n=0,e=arguments.length-1,r=Array(e);e>n;++n)r[n]=arguments[n+1]
return k(t,this,r)}function i(){return new u}function u(){function t(t){r._handler.resolve(t)}function n(t){r._handler.reject(t)}function e(t){r._handler.notify(t)}var r=x._defer()
this.promise=r,this.resolve=t,this.reject=n,this.notify=e,this.resolver={resolve:t,reject:n,notify:e}}function c(t){return t&&"function"==typeof t.then}function f(){return x.all(arguments)}function a(t){return n(t,x.all)}function s(t){return n(t,x.settle)}function l(t,e){return n(t,function(t){return x.map(t,e)})}function h(t,e){return n(t,function(t){return x.filter(t,e)})}var p=t("./lib/decorators/timed"),d=t("./lib/decorators/array"),y=t("./lib/decorators/flow"),v=t("./lib/decorators/fold"),m=t("./lib/decorators/inspect"),b=t("./lib/decorators/iterate"),g=t("./lib/decorators/progress"),_=t("./lib/decorators/with"),w=t("./lib/decorators/unhandledRejection"),j=t("./lib/TimeoutError"),x=[d,y,v,b,g,m,_,p,w].reduce(function(t,n){return n(t)},t("./lib/Promise")),k=t("./lib/apply")(x)
return n.promise=e,n.resolve=x.resolve,n.reject=x.reject,n.lift=r,n["try"]=o,n.attempt=o,n.iterate=x.iterate,n.unfold=x.unfold,n.join=f,n.all=a,n.settle=s,n.any=r(x.any),n.some=r(x.some),n.race=r(x.race),n.map=l,n.filter=h,n.reduce=r(x.reduce),n.reduceRight=r(x.reduceRight),n.isPromiseLike=c,n.Promise=x,n.defer=i,n.TimeoutError=j,n})}("function"==typeof t&&t.amd?t:function(t){e.exports=t(n)})},{"./lib/Promise":8,"./lib/TimeoutError":10,"./lib/apply":11,"./lib/decorators/array":12,"./lib/decorators/flow":13,"./lib/decorators/fold":14,"./lib/decorators/inspect":15,"./lib/decorators/iterate":16,"./lib/decorators/progress":17,"./lib/decorators/timed":18,"./lib/decorators/unhandledRejection":19,"./lib/decorators/with":20}]},{},[1])(1)})

/**
 * $badge
 */

;(function(exports) {

  var rawData = {};
  var renders = [];
  var displayOrder = 0;
  var schemaByName = {};

  function tryParseJson(json) {
    try {
      return JSON.parse(json);
    } catch (e) {}
    return {};
  }

  function toElement(html) {
    var factory = document.createElement('div');
    factory.innerHTML = html;
    return factory.firstChild;
  }

  function makeType(typeName, defaultForType, methods){
    var domo = this;
    function Type(displayName, arg2){
      if (!(this instanceof Type)) {return new Type(displayName, arg2); }
      var argMap;
      var defVal;

      if (util._.isObject(arg2) && !util._.isArray(arg2)) {
        util._.extend(this, arg2)
        defVal = arg2.defaultValue;
      } else {
        defVal = arg2;
      }

      this.type = typeName;
      this.displayName = displayName;
      this._defaultValue = defVal;
      this._displayOrder = displayOrder++;
      this._postConstruct();
    }

    Type.prototype.val = function(){
      var realData = this.name && rawData[this.name];
      if (!realData || !realData.length){
        realData = undefined;
        domo.usingDefaultData = true;
      }
      return realData || this._defaultValue || defaultForType;
    };

    Type.prototype.dqlQuery = function(query) {
      console.log('this', this);
      return dqlQuery(query,this.dataSourceId);
    }

    //for overriding in types
    Type.prototype._postConstruct = function(){}

    if (util._.isObject(methods)){
      util._.extend(Type.prototype, methods);
    }

    return Type;
  };

  //! Execute a DQL query against the given dataSourceId.
  function dqlQuery(query,dataSourceId) {
    return when.promise(function(resolve, reject) {

      // verify that a valid dataSourceId is provided
      if ( !dataSourceId ) {
        reject('No Data Source ID.');

      // execute the query
      } else {
        var urlPfx = (dataSourceId.indexOf('ss:') == 0) ? '/api/domoweb' : '/api/data/v2';
        var request = new XMLHttpRequest();
        request.open('POST', [urlPfx,'datasources',dataSourceId,'data'].join('/'), true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            // Success!
            resolve(JSON.parse(request.responseText));
          } else {
            // We reached our target server, but it returned an error
            reject('We reached our target server, but it returned an error.');
          }
        };

        request.onerror = function(err) {
          // There was a connection error of some sort
          reject(err);
        };

        request.send(JSON.stringify({
          dataQuery: JSON.stringify(query)
        }));
      }
    });
  }

  var datagridMethods = {
    asTable: function() {
      var thead = '<thead>'+util._.map(this.columnNames, function(column) {
        return '<th>'+column+'</th>';
      }).join('') +'</thead>';

      var tbody = '<tbody>'+util._.map(this.val(), function(row){
        return '<tr>' + util._.map(row, function(item){
          return '<td>' + item + '</td>';
        }).join('') + '</tr>';
      }).join('')+'</tbody>';

      var table = '<table>' + thead + tbody + '</table>';

      return toElement(table);
    },

    row: function(n){
      return this.val()[n] || null;
    },

    col: function(n){
      return util._.pluck(this.val(), n) || null;
    },

    rowAsObject: function(n){
      return util._.object(this.columnNames, this.row(n));
    },

    eachRow: function(cb){
      util._.each(this.val(), cb);
    },

    eachCol: function(cb){
      util._.each(this.columnNames, function(name, index) {
        cb(this.col(index), name);
      }, this);
    },

    eachCell: function(cb){
      util._.each(util._.flatten(this.val()), cb);
    },

    _postConstruct: function(){
      var total = util._.max(util._.pluck(this._defaultValue, 'length'));

      function generate(howMany) {
        return util._.map(util._.range(1, howMany + 1), function(index) { return 'Column ' + index;});
      }

      // If column names aren't provided generate them!
      if (!util._.isArray(this.columnNames)) {
        this.columnNames = generate(total);
      }

      var difference = Math.max(total - this.columnNames.length, 0);

      // If they didn't provide enough column names, generate the remainder
      this.columnNames.push.apply(this.columnNames, generate(difference));
    }
  }

  exports.$badge = {
    data: {},
    Text: makeType("Text", ""),
    DataGrid: makeType("DataGrid", [], datagridMethods),
    Number: makeType("Number", 0),

    config: function(conf) {
      if ( ! util._.isUndefined(conf)) {
        this.__design = conf;
      }
    },

    __schema: [],

    __update: function(newData) {

      // apply the new configuration
      rawData = newData;
      util._.each(renders, function(r){ r(rawData); });
    },

    __buildSchema: function(){
      this.__schema = util._.map(this.data, function(val, key){
        schemaByName[key] = val;
        val.name = key;
        return val;
      }).sort(function(a,b){
        return ~~a._displayOrder - ~~b._displayOrder;
      });
    },

    __config: function(ice,statics, kpiId, locale) {
      this.id = kpiId;
      this.locale = locale;
      var conf = {};

      // load the static config
      util._.each(statics,function(value,key) {
        if (value.slice(0,2) == '[['){
          conf[key] = tryParseJson(value);
        } else {
          conf[key] = value;
        }
      });

      // load the ice data
      util._.each(ice,function(value,key) {

        // store the dataSourceId
        util._.extend(schemaByName[key],{ dataSourceId: value.dataSourceId });

        //turn the columns into a 2d arry
        if (value.columns.length > 1 || value.columns[0].rows.length > 1){
          var res = [];
          for (var i=0, iLen=value.columns[0].rows.length; i<iLen; i++){
            var row = res[i] = [];
            for (var j=0, jLen=value.columns.length; j<jLen; j++){
              row[j] = value.columns[j].rows[i];
            }
          }
          conf[key] = res;
        } else {
          conf[key] = value.columns[0].rows[0] + "";
        }
      });

      // render the data
      this.__update(conf);
    },

    onRender: function(func) { renders.push(func); }
  };

  exports.Domo = $badge;
  exports.Domo.render = function(func) {
    console.warn('Referencing the Domo object is deprecated, please use $badge and $badge.onRender instead.');
    $badge.onRender(func);
  };
}(window));
