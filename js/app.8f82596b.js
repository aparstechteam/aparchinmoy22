(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ab3636e0","chunk-067a8c82":"c044ebd8","chunk-083eb8de":"51e791a0","chunk-27b8fbf6":"caed88d8","chunk-56c4c656":"5aca9bb9","chunk-6df99eb5":"12f14a96"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-067a8c82":1,"chunk-083eb8de":1,"chunk-27b8fbf6":1,"chunk-56c4c656":1,"chunk-6df99eb5":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-067a8c82":"767bd427","chunk-083eb8de":"0527c49e","chunk-27b8fbf6":"54eb06df","chunk-56c4c656":"70563669","chunk-6df99eb5":"f8d344fb"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/aparchinmoy22/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"150b":function(e,t,n){},"4ee7":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("260b"),a=(n("ea7b"),{apiKey:"AIzaSyA_8xG8Wr4SE6KIysUBKFS49YIFlXIbbag",authDomain:"buet-physics22.firebaseapp.com",projectId:"buet-physics22",storageBucket:"buet-physics22.appspot.com",messagingSenderId:"435243499599",appId:"1:435243499599:web:71286e42241c7051672a3a",measurementId:"G-16S7D5YZV4"}),o=(r["a"].initializeApp(a),r["a"].auth())},"52de":function(e,t,n){},"555f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n    w-24\n    h-24\n    animate-spin\n    border-4 border-gray-400\n    loader\n    mx-auto\n    rounded-full\n  "})},a=[],o={},u=o,c=(n("be44"),n("2877")),i=Object(c["a"])(u,r,a,!1,null,"444879e2",null);t["default"]=i.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"min-h-screen bg-gradient-to-br from-red-400 to-red-500 mainscreen"},[n("Navbar"),n("div",{staticClass:"pb-10"},[n("router-view")],1)],1)},o=[],u=(n("ac1f"),n("5319"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex fex-col justify-center"},[r("img",{staticClass:"h-20 my-5 bg-gray-50 p-2 rounded",attrs:{src:n("cf05"),alt:"Site Logo"}})])}],i={},s=i,l=n("2877"),f=Object(l["a"])(s,u,c,!1,null,"1dab294c",null),d=f.exports,p={components:{Navbar:d},methods:{navigateTocurrentPath:function(){var e=localStorage.getItem("path");e&&(localStorage.removeItem("path"),this.$router.replace(e))}},created:function(){this.navigateTocurrentPath()}},b=p,h=Object(l["a"])(b,a,o,!1,null,null,null),m=h.exports,g=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(g["a"]);var v=[{path:"/login",name:"Auth",component:function(){return n.e("chunk-6df99eb5").then(n.bind(null,"2fef"))}},{path:"/resetpass",name:"ResetPass",component:function(){return n.e("chunk-083eb8de").then(n.bind(null,"fae4"))}},{path:"/",name:"Exam",component:function(){return n.e("chunk-27b8fbf6").then(n.bind(null,"bb51"))},meta:{requiresAuth:!0}},{path:"/exam/:id",name:"ExamQuestion",meta:{requiresAuth:!0},component:function(){return n.e("chunk-067a8c82").then(n.bind(null,"3589"))}},{path:"/ranking/:id",name:"Ranking",meta:{requiresAuth:!0},component:function(){return n.e("chunk-56c4c656").then(n.bind(null,"a936"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],y=new g["a"]({mode:"history",base:"/aparchinmoy22/",routes:v});y.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requiresAuth})),a=localStorage.getItem("acuser");r?a?n():n({path:"/login"}):n()}));var _=y,S=n("2f62"),E=n("4ee7");r["a"].use(S["a"]);var k,x=new S["a"].Store({state:{user:{roll:null},error:"",loading:!1},mutations:{SET_USER:function(e,t){e.user=t},SET_ERROR:function(e,t){e.error=t},SET_LOADING:function(e,t){e.loading=t},SET_INITIALSTATE:function(e,t){e.initialState=t}},actions:{userLogin:function(e,t){var n=e.commit;n("SET_ERROR",""),n("SET_LOADING",!0),E["a"].signInWithEmailAndPassword(t.cred,t.password).then((function(){var e=E["a"].currentUser;n("SET_USER",e),_.replace("/"),n("SET_LOADING",!1)})).catch((function(e){n("SET_ERROR",e),n("SET_LOADING",!1)}))},logOut:function(e){var t=e.commit;t("SET_LOADING",!0),E["a"].signOut().then((function(){_.push("/login")}))}},getters:{loginstatus:function(e){return null!==e.user&&void 0!==e.user},getUser:function(e){return e.user}}}),w=(n("ba8c"),n("150b"),n("2ead")),O=n.n(w),A=n("2ef0"),T=n.n(A),I=n("9955"),j=n.n(I),C=n("14ba"),L=n.n(C),P=n("3b2f"),N=n.n(P),R=(n("be0f"),n("a753"),n("953d")),D=n.n(R);r["a"].config.productionTip=!1,r["a"].use(O.a),r["a"].moment().locale("en"),r["a"].use(j.a,{lodash:T.a}),r["a"].use(L.a),r["a"].use(N.a),window.katex=N.a,r["a"].use(D.a),r["a"].component("tbtn",n("b209").default),r["a"].component("rbtn",n("ce19").default),r["a"].component("loader",n("555f").default),E["a"].onAuthStateChanged((function(e){e&&localStorage.setItem("acuser",e.email),k||(k=new r["a"]({router:_,store:x,render:function(e){return e(m)}}).$mount("#app"))}))},"5a9b":function(e,t,n){"use strict";n("52de")},b209:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"\n    px-5\n    py-3\n    bg-gradient-to-r\n    from-red-400\n    to-red-600\n    font-semibold\n    text-white\n    rounded\n    flex\n  ",attrs:{type:"submit"}},[e.loading?n("div",{staticClass:"\n      w-6\n      h-6\n      mx-1\n      border-4 border-t-4 border-white\n      rounded-full\n      animate-spin\n      loader_btn\n    "}):e._e(),e._v(" "+e._s(e.loading?"Loading...":e.text)+" ")])},a=[],o={props:{text:{type:String},loading:{type:Boolean,default:!1}},watch:{loading:function(e,t){return e!=t?e:t}}},u=o,c=(n("5a9b"),n("2877")),i=Object(c["a"])(u,r,a,!1,null,"0079994c",null);t["default"]=i.exports},ba8c:function(e,t,n){},be44:function(e,t,n){"use strict";n("d9dc")},ce19:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.link?n("router-link",{staticClass:"\n    px-5\n    py-3\n    bg-gradient-to-r\n    from-red-400\n    to-red-600\n    font-semibold\n    text-white\n    rounded\n  ",attrs:{to:e.link}},[e._v(" "+e._s(e.text)+" ")]):e._e()},a=[],o={props:{text:{type:String},link:{type:String}}},u=o,c=n("2877"),i=Object(c["a"])(u,r,a,!1,null,"37e1b42d",null);t["default"]=i.exports},cf05:function(e,t,n){e.exports=n.p+"img/logo.1333da94.png"},d9dc:function(e,t,n){}});
//# sourceMappingURL=app.8f82596b.js.map