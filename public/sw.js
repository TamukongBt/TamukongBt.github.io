if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>n(e,c),f={module:{uri:c},exports:r,require:t};s[c]=Promise.all(a.map((e=>f[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts("/fallback-ce627215c0e4a9af.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1.jpg",revision:"2a0e18cd3f613d2a0d967145c37e35f6"},{url:"/1.png",revision:"04e827802ba46773ccccfff5542be366"},{url:"/10.png",revision:"7b98e2a94f3866ac83e8bd0e082b3672"},{url:"/2.jpg",revision:"4f36a24541c82ab29b9682f0878aa0be"},{url:"/3.jpg",revision:"c250ef15868d66719575bbc5eb53c4d0"},{url:"/4.jpg",revision:"b2e6a0da889b43a524f01dff35f71b10"},{url:"/5.jpg",revision:"32e9b58e3c161941df580daf99169205"},{url:"/512.png",revision:"270447151f7b189b7a6f0b06d1a85047"},{url:"/6.jpg",revision:"c864a7732d7036f74094cc2447665d7a"},{url:"/7.jpg",revision:"c5102f64c14aac2a294c106b3530bb42"},{url:"/8.jpg",revision:"c6fcb22f823a59a28205ca6073ba2347"},{url:"/9.jpg",revision:"817ee5898c836adf6005367cbdc6b815"},{url:"/DSC_0114.JPG",revision:"531627e29ef872b2956dfe2f3b309b54"},{url:"/_next/static/chunks/190-6a47f0c06a5da89f.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/231-9dc24df0feccf51e.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/241-b9787eecb46d5cb2.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/270-7990ed0fb0b2473a.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/294-56dcbe6cc30f810e.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/721-477c60b6e54e3935.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/739-556a6c2342f9f93c.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/768-f51bcfa89b4235a4.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/app/_not-found/page-d7fb48a0eb915e6c.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/app/credits/page-e4dca1a37b00c31f.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/app/hobbies/page-eaa06e2431fb0509.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/app/layout-d2dd04e7f9ff14c1.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/app/offline/page-6774c875ae81f94c.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/app/page-c0bac944da47a8ae.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/app/thoughts/page-957fc209f85c2c92.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/app/work/page-5e6a6bca6f86b678.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/fd9d1056-e3680af195b857b1.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/main-app-2da4cc89082271f9.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/main-f3bdff403c340eb4.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-ec9026ba9f8d91a2.js",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/_next/static/css/36ffa5ddaba45062.css",revision:"36ffa5ddaba45062"},{url:"/_next/static/css/b893c4c5dcdd4ac2.css",revision:"b893c4c5dcdd4ac2"},{url:"/_next/static/kGs1M4_s65RIGg0_pFlVj/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/kGs1M4_s65RIGg0_pFlVj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"7a9faef04502e50cd553dca4b13e652b"},{url:"/android-chrome-512x512.png",revision:"afca2ee857ad8f06b5530db3181abc76"},{url:"/apple-touch-icon.png",revision:"acd4624b3448b3d07e579a04d4890e1c"},{url:"/axis.png",revision:"eb6b72ff57b1cab6a7089efb78a100ea"},{url:"/blue.png",revision:"a15682e9493740d17dae13861c393ca3"},{url:"/chops-list.json",revision:"b6f70616b803b5b3f64273e7527173e0"},{url:"/cocktail-list.json",revision:"182d5574f19892fc4cd65392e4f31d8c"},{url:"/congress.png",revision:"453864c7666a0a1b336d13b4d609b909"},{url:"/fallback-ce627215c0e4a9af.js",revision:"4f20e76600cac989810927f2e95e5b79"},{url:"/favicon-16x16.png",revision:"12611b3cca7d5d75db623d3b98ed87c5"},{url:"/favicon-32x32.png",revision:"3d6a38f98665dd822b4ca19ae939c346"},{url:"/favicon.ico",revision:"e95a6a51b7c05411d90888db496a7077"},{url:"/games-list.json",revision:"24779ae729666956c99f06e77c0dd9d6"},{url:"/github.png",revision:"1b9b9f71269e504156ce9d89a00f2551"},{url:"/grey.png",revision:"62342680df408da7c13ebb607ac2e53d"},{url:"/grey2.png",revision:"091a1863e433a7ea0d2893b2668a51ef"},{url:"/hc.png",revision:"4a8e7f3cd0bcaa49bd8d493cca09d46e"},{url:"/hc2.png",revision:"eb95dde30c27c341500c0ca12eab77e4"},{url:"/hc3.png",revision:"4f811ffe8bfac592d2ac22eaaf7ffbf4"},{url:"/hc4.png",revision:"73988d3b9b0c9af8298b3088ba9e7a53"},{url:"/icon-192x192.png",revision:"07a6d6ce4b7425ee3434c82cae22d988"},{url:"/icon-512x512.png",revision:"a977faaee399e52b611261d0e77110cc"},{url:"/image.png",revision:"bad486d76ee35610f1577545a8a36b34"},{url:"/kvision.png",revision:"eeece1ecc02afec9201b3458827f9cba"},{url:"/logo.png",revision:"88814510dc14d4f94d7d017c875acedf"},{url:"/manifest.json",revision:"a4b37c49b6155cc6291fc1272cfb5a57"},{url:"/me.jpg",revision:"b4d9aefb8df62c26e17f64cdff7ca46e"},{url:"/me2.jpg",revision:"63f59001b0afc76703a2308e98fb9d92"},{url:"/mnm.png",revision:"0230d35d1fd8ae42cc93de4872978bfe"},{url:"/nightout.png",revision:"604b857ae87d9439aabf4545bc1b3ccc"},{url:"/offline",revision:"kGs1M4_s65RIGg0_pFlVj"},{url:"/omega.png",revision:"36016831f85b6cad3801ed6d432f057c"},{url:"/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/vz.png",revision:"b668e5e348b31749558537b03d7dd2c6"},{url:"/yellow.png",revision:"3eac2219a83e1d73c92e82a8c9bdfe31"},{url:"/youtube.webp",revision:"24652bc9685fdc6f8347edba1d9f9b9a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
