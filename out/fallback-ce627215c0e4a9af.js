!function(){var t,e={454:function(t,e,r){"use strict";var n,o;t.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(663)},663:function(t){!function(){var e={229:function(t){var e,r,n,o=t.exports={};function i(){throw Error("setTimeout has not been defined")}function c(){throw Error("clearTimeout has not been defined")}function u(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(t){r=c}}();var s=[],a=!1,f=-1;function l(){a&&n&&(a=!1,n.length?s=n.concat(s):f=-1,s.length&&h())}function h(){if(!a){var t=u(l);a=!0;for(var e=s.length;e;){for(n=s,s=[];++f<e;)n&&n[f].run();f=-1,e=s.length}n=null,a=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function _(t,e){this.fun=t,this.array=e}function p(){}o.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];s.push(new _(t,e)),1!==s.length||a||u(h)},_.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(t){return[]},o.binding=function(t){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}},c=!0;try{e[t](i,i.exports,n),c=!1}finally{c&&delete r[t]}return i.exports}n.ab="//";var o=n(229);t.exports=o}()}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}},c=!0;try{e[t](i,i.exports,n),c=!1}finally{c&&delete r[t]}return i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t=n(454),self.fallback=async e=>{let{destination:r,url:n}=e,o={document:"/offline",image:t.env.__PWA_FALLBACK_IMAGE__,audio:t.env.__PWA_FALLBACK_AUDIO__,video:t.env.__PWA_FALLBACK_VIDEO__,font:t.env.__PWA_FALLBACK_FONT__}[r];return o?caches.match(o,{ignoreSearch:!0}):""===r&&t.env.__PWA_FALLBACK_DATA__&&n.match(/\/_next\/data\/.+\/.+\.json$/i)?caches.match(t.env.__PWA_FALLBACK_DATA__,{ignoreSearch:!0}):Response.error()}}();