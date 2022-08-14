(function(){"use strict";var e={9552:function(e,t,n){var r=n(9669),o=n.n(r);const a="http://36.150.108.226:81/client-api/XiuXian/advertisement",i=o().create({baseURL:a,timeout:5e3});i.interceptors.request.use((e=>e),(e=>Promise.reject(e))),i.interceptors.response.use((e=>e.data),(e=>Promise.reject(e))),t["Z"]=i},6e3:function(e,t,n){var r=n(9963),o=n(6252);const a={class:"container"};function i(e,t,n,r,i,c){const u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(u)])}var c={name:"App"},u=n(3744);const s=(0,u.Z)(c,[["render",i]]);var l=s,f=n(9489),d=(n(8438),n(2201)),h=n(58);const p=[{path:"/",component:()=>n.e(709).then(n.bind(n,9709)),children:[{path:"/",redirect:"/home"},{path:"/home",component:()=>n.e(263).then(n.bind(n,3263))},{path:"/function",component:()=>Promise.all([n.e(16),n.e(456),n.e(261)]).then(n.bind(n,4959))},{path:"/chat",component:()=>Promise.all([n.e(215),n.e(608)]).then(n.bind(n,1983))},{path:"/set",component:()=>Promise.all([n.e(16),n.e(215),n.e(368),n.e(456),n.e(868)]).then(n.bind(n,2654))}]},{path:"/login",component:()=>Promise.all([n.e(16),n.e(215),n.e(368),n.e(304)]).then(n.bind(n,8304))}],m=(0,d.p7)({history:(0,d.r5)(),routes:p,scrollBehavior(e,t,n){return{left:0,top:0}}});m.beforeEach((async(e,t,n)=>{let r=h.Z.state.user.token;if(r)if("/login"===e.path)n("/home");else{let e=!!h.Z.state.user.userInfo.name;if(e)n();else try{await h.Z.dispatch("user/userInfoUpdate"),n()}catch(o){f.z8.error("获取最新信息失败，请重新登录"),h.Z.commit("user/deleteAllInfo"),n("/login")}}else"/login"!==e.path?n("/login"):n()}));var g=m;(0,r.ri)(l).use(h.Z).use(g).mount("#app")},58:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3907),o=(n(1703),n(9552));const a=e=>(0,o.Z)({url:"/login.d",method:"post",params:{...e,banben:"1.21"}}),i=e=>(0,o.Z)({url:"/getToken.d",method:"post",params:e}),c=e=>(0,o.Z)({url:"/getPersonData.d",method:"post",params:{...e,banben:"wap"}});var u=n(1474),s={namespaced:!0,state(){return{userInfo:{},token:"",account:{},worldChatBox:[],menpaiChatBox:[],accountArr:[]}},mutations:{setUserInfo(e,t){e.userInfo=t},setUserToken(e,t){e.token=t},setAccount(e,t){e.account=t},deleteAllInfo(e){e.userInfo={},e.token="",e.account={}},setWorldChatBox(e,t){e.worldChatBox.push(t)},setMenpaiChatBox(e,t){e.menpaiChatBox.push(t)},deleteWorldChatBox(e){e.worldChatBox.shift()},deleteMenpaiChatBox(e){e.menpaiChatBox.shift()},deletaAllChat(e){e.worldChatBox=[],e.menpaiChatBox=[]},changeActive(e,t){e.accountArr.forEach((e=>{e.zhanghao===t?e.active=!0:e.active=!1}))},deleteAccountArr(e,t){let n=e.accountArr.findIndex((e=>e.zhanghao===t));-1!==n&&e.accountArr.splice(n,1)},addAccountArr(e,t){e.accountArr.push(t)}},actions:{async login({commit:e},t){const n=await a(t),r=n.substr(0,1);if("1"!==r){let e=n.substr(1,n.length);return Promise.reject(new Error(e))}{let t=(0,u.c)(n.substr(1,n.length));e("setUserInfo",t)}},async getUserToken({commit:e},t){const n=await i(t);e("setUserToken",n.substr(1,n.length)),e("setAccount",t)},async userInfoUpdate({commit:e,state:t}){const n=await c(t.account),r=n.substr(0,1);if("1"!==r){let e=n.substr(1,n.length);return Promise.reject(new Error(e))}{let t=(0,u.c)(n.substr(1,n.length));e("setUserInfo",t)}},handleWorldChat({commit:e,state:t},n){e("setWorldChatBox",n),t.worldChatBox.length>100&&e("deleteWorldChatBox")},handleMenpaiChat({commit:e,state:t},n){e("setMenpaiChatBox",n),t.menpaiChatBox.length>100&&e("deleteMenpaiChatBox")},addAccountArrAction({commit:e,state:t}){t.accountArr.length>3||(e("addAccountArr",{zhanghao:t.account.zhanghao,mima:t.account.mima,name:t.userInfo.name,active:!0}),e("changeActive",t.account.zhanghao))}},getters:{getMenpaiId(e){return e.userInfo.menpaiId}}},l={user:s},f=n(4702),d=(0,r.MT)({modules:l,plugins:[(0,f.Z)({key:"xiuxian-client-pe-store",paths:["user"]})]})},1474:function(e,t,n){n.d(t,{L:function(){return a},c:function(){return o}});var r=n(58);const o=e=>{let t=e,n=new RegExp(", ","g"),r=new RegExp("=","g");return t=t.replace(n,'","'),t=t.replace(r,'":"'),t=t.replace("[",'{"'),t=t.replace(",]",'"}'),t=JSON.parse(t),t},a=async()=>{await r.Z.dispatch("user/getUserToken",{zhanghao:r.Z.state.user.account.zhanghao?r.Z.state.user.account.zhanghao:"",mima:r.Z.state.user.account.mima?r.Z.state.user.account.mima:""})}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{16:"64121c18",215:"509118cf",261:"3e95d27b",263:"27b1fc30",304:"e2f26e76",368:"7c52b9e1",456:"f3d2738c",608:"5f8cdf32",709:"0ad25319",868:"b4449d3a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{261:"89ee9db9",263:"9ffc652e",304:"b32f49cf",368:"d7b9d962",608:"0d47d819",709:"279ca021",868:"28a9fa9b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="xiuxianphone:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=r),e[r]=[o];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),c=n.p+i;if(t(i,c))return o();e(r,c,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={261:1,263:1,304:1,368:1,608:1,709:1,868:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),c=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],c=r[1],u=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkxiuxianphone"]=self["webpackChunkxiuxianphone"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6e3)}));r=n.O(r)})();
//# sourceMappingURL=app.c3feaa42.js.map