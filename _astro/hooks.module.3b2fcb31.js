import{l as o}from"./preact.module.3821bb68.js";var e,r,p,y,a=0,C=[],m=[],E=o.__b,g=o.__r,b=o.diffed,A=o.__c,F=o.unmount;function f(_,n){o.__h&&o.__h(r,_,a||n),a=0;var t=r.__H||(r.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:m}),t.__[_]}function P(_){return a=1,U(T,_)}function U(_,n,t){var u=f(e++,2);if(u.t=_,!u.__c&&(u.__=[t?t(n):T(void 0,n),function(h){var v=u.__N?u.__N[0]:u.__[0],l=u.t(v,h);v!==l&&(u.__N=[l,u.__[1]],u.__c.setState({}))}],u.__c=r,!r.u)){r.u=!0;var c=r.shouldComponentUpdate;r.shouldComponentUpdate=function(h,v,l){if(!u.__c.__H)return!0;var N=u.__c.__H.__.filter(function(i){return i.__c});if(N.every(function(i){return!i.__N}))return!c||c.call(this,h,v,l);var V=!1;return N.forEach(function(i){if(i.__N){var x=i.__[0];i.__=i.__N,i.__N=void 0,x!==i.__[0]&&(V=!0)}}),!(!V&&u.__c.props===h)&&(!c||c.call(this,h,v,l))}}return u.__N||u.__}function B(_,n){var t=f(e++,3);!o.__s&&d(t.__H,n)&&(t.__=_,t.i=n,r.__H.__h.push(t))}function j(_,n){var t=f(e++,4);!o.__s&&d(t.__H,n)&&(t.__=_,t.i=n,r.__h.push(t))}function S(_){return a=5,D(function(){return{current:_}},[])}function $(_,n,t){a=6,j(function(){return typeof _=="function"?(_(n()),function(){return _(null)}):_?(_.current=n(),function(){return _.current=null}):void 0},t==null?t:t.concat(_))}function D(_,n){var t=f(e++,7);return d(t.__H,n)?(t.__V=_(),t.i=n,t.__h=_,t.__V):t.__}function G(_,n){return a=8,D(function(){return _},n)}function I(_){var n=r.context[_.__c],t=f(e++,9);return t.c=_,n?(t.__==null&&(t.__=!0,n.sub(r)),n.props.value):_.__}function J(_,n){o.useDebugValue&&o.useDebugValue(n?n(_):_)}function K(_){var n=f(e++,10),t=P();return n.__=_,r.componentDidCatch||(r.componentDidCatch=function(u,c){n.__&&n.__(u,c),t[1](u)}),[t[0],function(){t[1](void 0)}]}function L(){var _=f(e++,11);if(!_.__){for(var n=r.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;var t=n.__m||(n.__m=[0,0]);_.__="P"+t[0]+"-"+t[1]++}return _.__}function k(){for(var _;_=C.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(s),_.__H.__h.forEach(H),_.__H.__h=[]}catch(n){_.__H.__h=[],o.__e(n,_.__v)}}o.__b=function(_){r=null,E&&E(_)},o.__r=function(_){g&&g(_),e=0;var n=(r=_.__c).__H;n&&(p===r?(n.__h=[],r.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=m,t.__N=t.i=void 0})):(n.__h.forEach(s),n.__h.forEach(H),n.__h=[])),p=r},o.diffed=function(_){b&&b(_);var n=_.__c;n&&n.__H&&(n.__H.__h.length&&(C.push(n)!==1&&y===o.requestAnimationFrame||((y=o.requestAnimationFrame)||w)(k)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==m&&(t.__=t.__V),t.i=void 0,t.__V=m})),p=r=null},o.__c=function(_,n){n.some(function(t){try{t.__h.forEach(s),t.__h=t.__h.filter(function(u){return!u.__||H(u)})}catch(u){n.some(function(c){c.__h&&(c.__h=[])}),n=[],o.__e(u,t.__v)}}),A&&A(_,n)},o.unmount=function(_){F&&F(_);var n,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(u){try{s(u)}catch(c){n=c}}),t.__H=void 0,n&&o.__e(n,t.__v))};var q=typeof requestAnimationFrame=="function";function w(_){var n,t=function(){clearTimeout(u),q&&cancelAnimationFrame(n),setTimeout(_)},u=setTimeout(t,100);q&&(n=requestAnimationFrame(t))}function s(_){var n=r,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),r=n}function H(_){var n=r;_.__c=_.__(),r=n}function d(_,n){return!_||_.length!==n.length||n.some(function(t,u){return t!==_[u]})}function T(_,n){return typeof n=="function"?n(_):n}export{$ as A,D as F,K as P,G as T,L as V,S as _,B as h,P as p,I as q,j as s,J as x,U as y};
