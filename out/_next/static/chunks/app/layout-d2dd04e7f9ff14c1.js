(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3054:function(e,t,s){Promise.resolve().then(s.t.bind(s,1048,23)),Promise.resolve().then(s.bind(s,4361)),Promise.resolve().then(s.bind(s,6723)),Promise.resolve().then(s.bind(s,5433)),Promise.resolve().then(s.bind(s,1422))},4361:function(e,t,s){"use strict";s.d(t,{ApolloWrapper:function(){return i}});var r=s(7437),a=s(3128),o=s(1909);function n(){let e=new a.u({uri:"https://nightout-be.up.railway.app/api/graphl/",fetchOptions:{cache:"no-store"}});return new o.p0({cache:new o.ND,link:e})}function i(e){let{children:t}=e;return(0,r.jsx)(o.e$,{makeClient:n,children:t})}},6723:function(e,t,s){"use strict";var r=s(7437),a=s(2699),o=s(8296),n=s(7138),i=s(2265);t.default=()=>{let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{"dark"===localStorage.getItem("theme")?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[]),(0,r.jsxs)("header",{className:"sticky top-0 z-30  !w-full justify-between flex md:hidden pl-4 !h-14 border border-lemonchiffon bg-eerieblack sm:static sm:h-auto  ",children:[(0,r.jsxs)("div",{className:"grid grid-cols-3 space-x-3 text-lemonchiffon font-sans pr-2  font-light sm:text-md rounded-lg ",children:[(0,r.jsx)(n.default,{href:"/work",className:"flex items-center ",children:(0,r.jsx)("div",{className:"mx-auto items-center hover:border-lemonchiffon hover:border-b-2",children:"My Work"})}),(0,r.jsx)(n.default,{href:"/hobbies",className:"flex items-center",children:(0,r.jsx)("div",{className:"mx-auto items-center  hover:border-lemonchiffon hover:border-b-2",children:"Hobbies"})}),(0,r.jsx)(n.default,{href:"/thoughts",className:"flex items-center",children:(0,r.jsx)("div",{className:"mx-auto items-center hover:border-lemonchiffon hover:border-b-2",children:"Thoughts"})})]}),(0,r.jsxs)("div",{className:"flex space-x-2 ",children:[(0,r.jsx)("div",{onClick:()=>{localStorage.removeItem("theme"),localStorage.setItem("theme",e?"light":"dark"),document.documentElement.classList.toggle("dark",!e),t(!e)},className:" h-9 w-9 mx-auto my-auto items-center justify-center rounded-lg text-eerieblack bg-lemonchiffon transition-colors border border-lemonchiffon hover:text-bittersweet md:h-8 md:w-8",children:e?(0,r.jsx)(a.Z,{className:"h-7 w-7 mx-auto my-auto "}):(0,r.jsx)(o.Z,{className:"h-7 w-7"})}),(0,r.jsx)("div",{className:" bg-lemonchiffon font-bold font-display capitalize",children:(0,r.jsx)(n.default,{href:"/",className:"px-4 text-2xl text-bittersweet leading-3 my-auto flex align-middle items-center h-full",children:"TB"})})]})]})}},5433:function(e,t,s){"use strict";s.d(t,{default:function(){return j}});var r=s(7437),a=s(7138),o=s(1005),n=s(6035),i=s(4501),l=s(6864),d=s(2699),c=s(8296),m=s(7833),f=s(2265),h=s(7071),u=s(9354);let x=h.zt,p=h.fC,g=h.xz,b=f.forwardRef((e,t)=>{let{className:s,sideOffset:a=4,...o}=e;return(0,r.jsx)(h.VY,{ref:t,sideOffset:a,className:(0,u.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...o})});b.displayName=h.VY.displayName;var v=s(6463),j=function(){let e=(0,v.usePathname)(),[t,s]=(0,f.useState)(!0);return(0,f.useEffect)(()=>{{let e="dark"===localStorage.getItem("theme");s(e),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x,{children:(0,r.jsxs)("aside",{className:" z-10 hidden w-14 flex-col border-lemonchiffon border h-[98vh] bg-eerieblack sm:flex",children:[(0,r.jsx)("div",{className:" bg-lemonchiffon h-[3.5rem] py-2 font-bold font-display capitalize",children:(0,r.jsx)(a.default,{href:"/",className:"px-4 text-2xl text-bittersweet leading-3 my-auto flex align-middle items-center h-full",children:"TB"})}),(0,r.jsxs)("nav",{className:"flex flex-col items-center gap-4 px-2 sm:py-5",children:[(0,r.jsxs)(a.default,{href:"/",className:"group flex h-9 w-9 shrink-0 items-center text-bittersweet dark:text-eerieblack justify-center gap-2 rounded-full bg-bittersweet text-lg ".concat("/"==e?"bg-lemonchiffon !text-eerieblack":""," font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"),children:[(0,r.jsx)(o.Z,{className:"h-4 w-4 transition-all group-hover:scale-110 dark:text-eerieblack ${route == '/' ? 'bg-lemonchiffon !text-eerieblack' : ''}  "}),(0,r.jsx)("span",{className:"sr-only",children:"Tamukong Brian"})]}),(0,r.jsxs)(p,{children:[(0,r.jsx)(g,{asChild:!0,children:(0,r.jsxs)(a.default,{href:"/work",className:"group flex h-9 w-9 shrink-0 items-center justify-center text-lemonchiffon hover:bg-lemonchiffon hover:text-eerieblack gap-2 rounded-full text-lg font-semibold ".concat("/work/"==e?"bg-lemonchiffon !text-eerieblack":""," md:h-8 md:w-8 md:text-base"),children:[(0,r.jsx)(n.Z,{className:"h-5 w-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Work"})]})}),(0,r.jsx)(b,{side:"right",className:"bg-lemonchiffon text-eerieblack",children:"Work"})]}),(0,r.jsxs)(p,{children:[(0,r.jsx)(g,{asChild:!0,children:(0,r.jsxs)(a.default,{href:"/hobbies",className:"group flex h-9 w-9 shrink-0 items-center justify-center text-lemonchiffon hover:bg-lemonchiffon hover:text-eerieblack gap-2 rounded-full text-lg font-semibold ".concat("/hobbies/"==e?"bg-lemonchiffon !text-eerieblack":""," md:h-8 md:w-8 md:text-base"),children:[(0,r.jsx)(i.Z,{className:"h-5 w-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Hobbies"})]})}),(0,r.jsx)(b,{side:"right",className:"bg-lemonchiffon text-eerieblack",children:"Hobbies"})]}),(0,r.jsxs)(p,{children:[(0,r.jsx)(g,{asChild:!0,children:(0,r.jsxs)(a.default,{href:"/thoughts",className:"group flex h-9 w-9 shrink-0 items-center justify-center text-lemonchiffon hover:bg-lemonchiffon hover:text-eerieblack gap-2 rounded-full text-lg font-semibold ".concat("/thoughts/"==e?"bg-lemonchiffon !text-eerieblack":""," md:h-8 md:w-8 md:text-base"),children:[(0,r.jsx)(l.Z,{className:"h-5 w-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Thoughts"})]})}),(0,r.jsx)(b,{side:"right",className:"bg-lemonchiffon text-eerieblack",children:"Thoughts"})]})]}),(0,r.jsxs)("nav",{className:"mt-auto flex flex-col items-center gap-4 px-2 sm:py-5",children:[(0,r.jsxs)(p,{children:[(0,r.jsx)(g,{asChild:!0,children:(0,r.jsxs)("div",{onClick:()=>{localStorage.removeItem("theme"),localStorage.setItem("theme",t?"light":"dark"),document.documentElement.classList.toggle("dark",!t),s(!t)},className:"flex h-9 w-9 items-center justify-center rounded-lg text-lemonchiffon transition-colors hover:bg-lemonchiffon hover:text-eerieblack md:h-8 md:w-8",children:[t?(0,r.jsx)(d.Z,{className:"h-5 w-5"}):(0,r.jsx)(c.Z,{className:"h-5 w-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Theme"})]})}),(0,r.jsx)(b,{side:"right",className:"bg-lemonchiffon text-eerieblack",children:"Theme"})]}),(0,r.jsxs)(p,{children:[(0,r.jsx)(g,{asChild:!0,children:(0,r.jsxs)(a.default,{href:"/credits",className:"flex h-9 w-9 items-center justify-center rounded-lg text-lemonchiffon transition-colors hover:bg-lemonchiffon hover:text-eerieblack md:h-8 md:w-8",children:[(0,r.jsx)(m.Z,{className:"h-5 w-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Credits"})]})}),(0,r.jsx)(b,{side:"right",className:"bg-lemonchiffon text-eerieblack",children:"Credits"})]})]})]})})})}},1422:function(e,t,s){"use strict";s.d(t,{Toaster:function(){return k}});var r=s(7437),a=s(2265),o=s(4504),n=s(2218),i=s(4697),l=s(9354);let d=o.zt,c=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.l_,{ref:t,className:(0,l.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",s),...a})});c.displayName=o.l_.displayName;let m=(0,n.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),f=a.forwardRef((e,t)=>{let{className:s,variant:a,...n}=e;return(0,r.jsx)(o.fC,{ref:t,className:(0,l.cn)(m({variant:a}),s),...n})});f.displayName=o.fC.displayName,a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.aU,{ref:t,className:(0,l.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",s),...a})}).displayName=o.aU.displayName;let h=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.x8,{ref:t,className:(0,l.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",s),"toast-close":"",...a,children:(0,r.jsx)(i.Z,{className:"h-4 w-4"})})});h.displayName=o.x8.displayName;let u=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.Dx,{ref:t,className:(0,l.cn)("text-sm font-semibold",s),...a})});u.displayName=o.Dx.displayName;let x=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.dk,{ref:t,className:(0,l.cn)("text-sm opacity-90",s),...a})});x.displayName=o.dk.displayName;let p=0,g=new Map,b=e=>{if(g.has(e))return;let t=setTimeout(()=>{g.delete(e),w({type:"REMOVE_TOAST",toastId:e})},1e6);g.set(e,t)},v=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?b(s):e.toasts.forEach(e=>{b(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},j=[],N={toasts:[]};function w(e){N=v(N,e),j.forEach(e=>{e(N)})}function y(e){let{...t}=e,s=(p=(p+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>w({type:"DISMISS_TOAST",toastId:s});return w({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>w({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function k(){let{toasts:e}=function(){let[e,t]=a.useState(N);return a.useEffect(()=>(j.push(t),()=>{let e=j.indexOf(t);e>-1&&j.splice(e,1)}),[e]),{...e,toast:y,dismiss:e=>w({type:"DISMISS_TOAST",toastId:e})}}();return(0,r.jsxs)(d,{children:[e.map(function(e){let{id:t,title:s,description:a,action:o,...n}=e;return(0,r.jsxs)(f,{...n,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[s&&(0,r.jsx)(u,{children:s}),a&&(0,r.jsx)(x,{children:a})]}),o,(0,r.jsx)(h,{})]},t)}),(0,r.jsx)(c,{})]})}},9354:function(e,t,s){"use strict";s.d(t,{cn:function(){return o}});var r=s(4839),a=s(6164);function o(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.m6)((0,r.W)(t))}},1048:function(){}},function(e){e.O(0,[141,739,768,231,241,971,190,744],function(){return e(e.s=3054)}),_N_E=e.O()}]);