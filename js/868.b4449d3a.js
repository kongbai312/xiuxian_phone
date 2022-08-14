"use strict";(self["webpackChunkxiuxianphone"]=self["webpackChunkxiuxianphone"]||[]).push([[868],{2654:function(e,t,n){n.r(t),n.d(t,{default:function(){return wt}});var o=n(2262),l=n(3577),a=n(6252),s=n(2410),i=n(9963),r=n(9143),c=n(8360);function u(e){let t;const n=(0,r.s)("loading"),l=(0,o.iH)(!1),s=(0,o.qj)({...e,originalPosition:"",originalOverflow:"",visible:!1});function u(e){s.text=e}function d(){const e=s.parent;if(!e.vLoadingAddClassList){let t=e.getAttribute("loading-number");t=Number.parseInt(t)-1,t?e.setAttribute("loading-number",t.toString()):((0,c.IV)(e,n.bm("parent","relative")),e.removeAttribute("loading-number")),(0,c.IV)(e,n.bm("parent","hidden"))}m(),f.unmount()}function m(){var e,t;null==(t=null==(e=h.$el)?void 0:e.parentNode)||t.removeChild(h.$el)}function p(){var n;if(e.beforeClose&&!e.beforeClose())return;const o=s.parent;o.vLoadingAddClassList=void 0,l.value=!0,clearTimeout(t),t=window.setTimeout((()=>{l.value&&(l.value=!1,d())}),400),s.visible=!1,null==(n=e.closed)||n.call(e)}function g(){l.value&&(l.value=!1,d())}const v={name:"ElLoading",setup(){return()=>{const e=s.spinner||s.svg,t=(0,a.h)("svg",{class:"circular",viewBox:s.svgViewBox?s.svgViewBox:"25 25 50 50",...e?{innerHTML:e}:{}},[(0,a.h)("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),o=s.text?(0,a.h)("p",{class:n.b("text")},[s.text]):void 0;return(0,a.h)(i.uT,{name:n.b("fade"),onAfterLeave:g},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)("div",{style:{backgroundColor:s.background||""},class:[n.b("mask"),s.customClass,s.fullscreen?"is-fullscreen":""]},[(0,a.h)("div",{class:n.b("spinner")},[t,o])]),[[i.F8,s.visible]])]))})}}},f=(0,i.ri)(v),h=f.mount(document.createElement("div"));return{...(0,o.BK)(s),setText:u,removeElLoadingChild:m,close:p,handleAfterLeave:g,vm:h,get $el(){return h.$el}}}var d=n(4568);let m;const p=function(e={}){if(!s.C5)return;const t=g(e);if(t.fullscreen&&m)return m;const n=u({...t,closed:()=>{var e;null==(e=t.closed)||e.call(t),t.fullscreen&&(m=void 0)}});v(t,t.parent,n),f(t,t.parent,n),t.parent.vLoadingAddClassList=()=>f(t,t.parent,n);let o=t.parent.getAttribute("loading-number");return o=o?`${Number.parseInt(o)+1}`:"1",t.parent.setAttribute("loading-number",o),t.parent.appendChild(n.$el),(0,a.Y3)((()=>n.visible.value=t.visible)),t.fullscreen&&(m=n),n},g=e=>{var t,n,o,a;let s;return s=(0,l.HD)(e.target)?null!=(t=document.querySelector(e.target))?t:document.body:e.target||document.body,{parent:s===document.body||e.body?document.body:s,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:s===document.body&&(null==(n=e.fullscreen)||n),lock:null!=(o=e.lock)&&o,customClass:e.customClass||"",visible:null==(a=e.visible)||a,target:s}},v=async(e,t,n)=>{const{nextZIndex:o}=(0,d.C)(),l={};if(e.fullscreen)n.originalPosition.value=(0,c.C2)(document.body,"position"),n.originalOverflow.value=(0,c.C2)(document.body,"overflow"),l.zIndex=o();else if(e.parent===document.body){n.originalPosition.value=(0,c.C2)(document.body,"position"),await(0,a.Y3)();for(const t of["top","left"]){const n="top"===t?"scrollTop":"scrollLeft";l[t]=e.target.getBoundingClientRect()[t]+document.body[n]+document.documentElement[n]-Number.parseInt((0,c.C2)(document.body,`margin-${t}`),10)+"px"}for(const t of["height","width"])l[t]=`${e.target.getBoundingClientRect()[t]}px`}else n.originalPosition.value=(0,c.C2)(t,"position");for(const[a,s]of Object.entries(l))n.$el.style[a]=s},f=(e,t,n)=>{const o=(0,r.s)("loading");"absolute"!==n.originalPosition.value&&"fixed"!==n.originalPosition.value?(0,c.cn)(t,o.bm("parent","relative")):(0,c.IV)(t,o.bm("parent","relative")),e.fullscreen&&e.lock?(0,c.cn)(t,o.bm("parent","hidden")):(0,c.IV)(t,o.bm("parent","hidden"))},h=Symbol("ElLoading"),b=(e,t)=>{var n,a,s,i;const r=t.instance,c=e=>(0,l.Kn)(t.value)?t.value[e]:void 0,u=e=>{const t=(0,l.HD)(e)&&(null==r?void 0:r[e])||e;return t?(0,o.iH)(t):t},d=t=>u(c(t)||e.getAttribute(`element-loading-${(0,l.rs)(t)}`)),m=null!=(n=c("fullscreen"))?n:t.modifiers.fullscreen,g={text:d("text"),svg:d("svg"),svgViewBox:d("svgViewBox"),spinner:d("spinner"),background:d("background"),customClass:d("customClass"),fullscreen:m,target:null!=(a=c("target"))?a:m?void 0:e,body:null!=(s=c("body"))?s:t.modifiers.body,lock:null!=(i=c("lock"))?i:t.modifiers.lock};e[h]={options:g,instance:p(g)}},y=(e,t)=>{for(const n of Object.keys(t))(0,o.dq)(t[n])&&(t[n].value=e[n])},w={mounted(e,t){t.value&&b(e,t)},updated(e,t){const n=e[h];t.oldValue!==t.value&&(t.value&&!t.oldValue?b(e,t):t.value&&t.oldValue?(0,l.Kn)(t.value)&&y(t.value,n.options):null==n||n.instance.close())},unmounted(e){var t;null==(t=e[h])||t.instance.close()}};n(3241);var C=n(3114),_=(n(9840),n(6589),n(2732)),k=(n(4367),n(9085)),x=(n(444),n(1446));const A={name:"ElContainer"},I=(0,a.aZ)({...A,props:{direction:{type:String}},setup(e){const t=e,n=(0,a.Rr)(),s=(0,r.s)("container"),i=(0,a.Fl)((()=>{if("vertical"===t.direction)return!0;if("horizontal"===t.direction)return!1;if(n&&n.default){const e=n.default();return e.some((e=>{const t=e.type.name;return"ElHeader"===t||"ElFooter"===t}))}return!1}));return(e,t)=>((0,a.wg)(),(0,a.iD)("section",{class:(0,l.C_)([(0,o.SU)(s).b(),(0,o.SU)(s).is("vertical",(0,o.SU)(i))])},[(0,a.WI)(e.$slots,"default")],2))}});var E=(0,x.Z)(I,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const B={name:"ElAside"},z=(0,a.aZ)({...B,props:{width:{type:String,default:null}},setup(e){const t=e,n=(0,r.s)("aside"),s=(0,a.Fl)((()=>t.width?n.cssVarBlock({width:t.width}):{}));return(e,t)=>((0,a.wg)(),(0,a.iD)("aside",{class:(0,l.C_)((0,o.SU)(n).b()),style:(0,l.j5)((0,o.SU)(s))},[(0,a.WI)(e.$slots,"default")],6))}});var M=(0,x.Z)(z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const S={name:"ElFooter"},L=(0,a.aZ)({...S,props:{height:{type:String,default:null}},setup(e){const t=e,n=(0,r.s)("footer"),s=(0,a.Fl)((()=>t.height?n.cssVarBlock({height:t.height}):{}));return(e,t)=>((0,a.wg)(),(0,a.iD)("footer",{class:(0,l.C_)((0,o.SU)(n).b()),style:(0,l.j5)((0,o.SU)(s))},[(0,a.WI)(e.$slots,"default")],6))}});var T=(0,x.Z)(L,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const D={name:"ElHeader"},F=(0,a.aZ)({...D,props:{height:{type:String,default:null}},setup(e){const t=e,n=(0,r.s)("header"),s=(0,a.Fl)((()=>t.height?n.cssVarBlock({height:t.height}):{}));return(e,t)=>((0,a.wg)(),(0,a.iD)("header",{class:(0,l.C_)((0,o.SU)(n).b()),style:(0,l.j5)((0,o.SU)(s))},[(0,a.WI)(e.$slots,"default")],6))}});var V=(0,x.Z)(F,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const H={name:"ElMain"},R=(0,a.aZ)({...H,setup(e){const t=(0,r.s)("main");return(e,n)=>((0,a.wg)(),(0,a.iD)("main",{class:(0,l.C_)((0,o.SU)(t).b())},[(0,a.WI)(e.$slots,"default")],2))}});var $=(0,x.Z)(R,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]),P=n(2123);const j=(0,P.nz)(E,{Aside:M,Footer:T,Header:V,Main:$});(0,P.dp)(M),(0,P.dp)(T),(0,P.dp)(V),(0,P.dp)($);var U=n(244);const q=e=>((0,a.dD)("data-v-79ba715e"),e=e(),(0,a.Cn)(),e),W=q((()=>(0,a._)("div",{class:"title"},"设置",-1))),Z=q((()=>(0,a._)("button",{class:"setBtn",type:"text",plain:""},"刷新数据",-1))),O=q((()=>(0,a._)("i",{class:"iconfont icon-shuaxin"},null,-1))),Y=[Z,O],K=q((()=>(0,a._)("button",{class:"setBtn",type:"text",plain:""},"清空聊天记录",-1))),N=q((()=>(0,a._)("i",{class:"iconfont icon-qingkong"},null,-1))),J=[K,N],X=q((()=>(0,a._)("button",{class:"setBtn",type:"text",plain:""},"切换账号",-1))),G=[X],Q={class:"changeAcount_container"},ee={key:0,class:"changeAccount_header"},te={key:1,class:"changeAccount_header"},ne=q((()=>(0,a._)("div",{class:"changeAccount_image"},[(0,a._)("img",{src:U,alt:""})],-1))),oe={key:0,class:"changeAccount_text"},le={key:1,class:"changeAccount_text"},ae={key:2,class:"changeAccount_bottom"},se=["onClick"],ie={class:"bottomItem_left"},re=q((()=>(0,a._)("i",{class:"iconfont icon-danxiu"},null,-1))),ce={class:"bottomItem_text"},ue={class:"bottomItem_name"},de={class:"bottomItem_acount"},me={key:0,class:"bottomItem_active"},pe=q((()=>(0,a._)("div",{class:"bottomItem_left"},[(0,a._)("i",{class:"iconfont icon-tianjia"}),(0,a._)("div",{class:"bottomItem_text"},[(0,a._)("span",{class:"bottomItem_add"},"添加账号")])],-1))),ge=[pe],ve={key:3,class:"changeAccount_bottom"},fe={class:"bottomItem_left"},he=q((()=>(0,a._)("i",{class:"iconfont icon-danxiu"},null,-1))),be={class:"bottomItem_text"},ye={class:"bottomItem_name"},we={class:"bottomItem_acount"},Ce={key:0,class:"bottomItem_active"},_e=(0,a.Uk)("清除"),ke={key:0,class:"loginForm_container"},xe={class:"loginForm_header"},Ae=q((()=>(0,a._)("div",{class:"loginForm_text"}," 手机号登录 ",-1))),Ie={class:"loginForm_form"},Ee=(0,a.Uk)("添加账号");function Be(e,t,n,o,s,r){const c=j,u=k.mi,d=_.EZ,m=C.nH,p=C.ly,g=w;return(0,a.wg)(),(0,a.iD)(a.HY,null,[W,(0,a.wy)(((0,a.wg)(),(0,a.j4)(c,{"element-loading-text":"刷新中",class:"set_container"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"setItem",onClick:t[0]||(t[0]=(...e)=>o.setBtnClick&&o.setBtnClick(...e))},Y),(0,a._)("div",{class:"setItem",onClick:t[1]||(t[1]=(...e)=>o.deleteAllChat&&o.deleteAllChat(...e))},J),(0,a._)("div",{class:"setItem outBtn",onClick:t[2]||(t[2]=(...e)=>o.logout&&o.logout(...e))},G)])),_:1})),[[g,o.loading]]),(0,a.Wm)(i.uT,{name:"changeTran"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",Q,[!1===o.isManage?((0,a.wg)(),(0,a.iD)("div",ee,[(0,a._)("span",{class:"headerItem",onClick:t[3]||(t[3]=(...e)=>o.closeChangeAccountShow&&o.closeChangeAccountShow(...e))},"关闭"),(0,a._)("span",{class:"headerItem",onClick:t[4]||(t[4]=e=>o.isManage=!0)},"管理")])):((0,a.wg)(),(0,a.iD)("div",te,[(0,a._)("span",{class:"headerItem",onClick:t[5]||(t[5]=e=>o.isManage=!1)},"取消")])),ne,(0,a.Wm)(i.uT,{name:"slide",mode:"out-in"},{default:(0,a.w5)((()=>[!1===o.isManage?((0,a.wg)(),(0,a.iD)("div",oe," 轻触头像以切换账号 ")):((0,a.wg)(),(0,a.iD)("div",le," 清除登录账号 "))])),_:1}),!1===o.isManage?((0,a.wg)(),(0,a.iD)("div",ae,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.accountArr,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.zhanghao,class:"bottomItem",onClick:t=>o.login(e)},[(0,a._)("div",ie,[re,(0,a._)("div",ce,[(0,a._)("span",ue,(0,l.zw)(e.name),1),(0,a._)("span",de,(0,l.zw)(e.zhanghao),1)])]),e.active?((0,a.wg)(),(0,a.iD)("div",me,"当前使用")):(0,a.kq)("",!0)],8,se)))),128)),o.accountArr.length<3?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"bottomItem",onClick:t[6]||(t[6]=(...e)=>o.addAccount&&o.addAccount(...e))},ge)):(0,a.kq)("",!0)])):((0,a.wg)(),(0,a.iD)("div",ve,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.accountArr,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.zhanghao,class:"bottomItem",style:(0,l.j5)({opacity:e.active?.6:1})},[(0,a._)("div",fe,[he,(0,a._)("div",be,[(0,a._)("span",ye,(0,l.zw)(e.name),1),(0,a._)("span",we,(0,l.zw)(e.zhanghao),1)])]),e.active?((0,a.wg)(),(0,a.iD)("div",Ce,"当前使用")):((0,a.wg)(),(0,a.j4)(u,{key:1,type:"danger",onClick:t=>o.deleteAccount(e)},{default:(0,a.w5)((()=>[_e])),_:2},1032,["onClick"]))],4)))),128))]))],512),[[i.F8,o.changeAccountShow]])])),_:1}),(0,a.Wm)(i.uT,{name:"changeTran"},{default:(0,a.w5)((()=>[o.loginShow?((0,a.wg)(),(0,a.iD)("div",ke,[(0,a._)("div",xe,[(0,a._)("i",{class:"iconfont icon-guanbi",onClick:t[7]||(t[7]=(...e)=>o.closeLogin&&o.closeLogin(...e))})]),Ae,(0,a._)("div",Ie,[(0,a.Wm)(p,{ref:"userFormRef","hide-required-asterisk":"",style:{height:"12vh"},model:o.userForm,rules:o.loginRules,"label-width":"40px"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{prop:"zhanghao",label:"账号"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{style:{width:"70vw"},modelValue:o.userForm.zhanghao,"onUpdate:modelValue":t[8]||(t[8]=e=>o.userForm.zhanghao=e),placeholder:"用户名"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(m,{prop:"mima",label:"密码"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{style:{width:"70vw"},modelValue:o.userForm.mima,"onUpdate:modelValue":t[9]||(t[9]=e=>o.userForm.mima=e),placeholder:"请输入登录密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"]),(0,a.Wm)(u,{style:{"margin-top":"3vh"},size:"large",type:"success",onClick:o.addLoginAcccount},{default:(0,a.w5)((()=>[Ee])),_:1},8,["onClick"])])])):(0,a.kq)("",!0)])),_:1})],64)}var ze=n(9489),Me=n(4903),Se=n(4181),Le=n(4309);const Te='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',De=e=>{const t=getComputedStyle(e);return"fixed"!==t.position&&null!==e.offsetParent},Fe=e=>Array.from(e.querySelectorAll(Te)).filter((e=>Ve(e)&&De(e))),Ve=e=>{if(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex"))return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&"ignore"!==e.rel;case"INPUT":return!("hidden"===e.type||"file"===e.type);case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},He="_trap-focus-children",Re=[],$e=e=>{if(0===Re.length)return;const t=Re[Re.length-1][He];if(t.length>0&&e.code===Le.n.tab){if(1===t.length)return e.preventDefault(),void(document.activeElement!==t[0]&&t[0].focus());const n=e.shiftKey,o=e.target===t[0],l=e.target===t[t.length-1];o&&n&&(e.preventDefault(),t[t.length-1].focus()),l&&!n&&(e.preventDefault(),t[0].focus())}},Pe={beforeMount(e){e[He]=Fe(e),Re.push(e),Re.length<=1&&document.addEventListener("keydown",$e)},updated(e){(0,a.Y3)((()=>{e[He]=Fe(e)}))},unmounted(){Re.shift(),0===Re.length&&document.removeEventListener("keydown",$e)}};var je=n(4377),Ue=n(9809),qe=n(2111),We=n(7774),Ze=n(2259),Oe=n(5711),Ye=n(5818),Ke=n(4420),Ne=n(9446);const Je=(e,t)=>{let n;(0,a.YP)((()=>e.value),(e=>{var l,a;e?(n=document.activeElement,(0,o.dq)(t)&&(null==(a=(l=t.value).focus)||a.call(l))):n.focus()}))},Xe=(0,a.aZ)({name:"ElMessageBox",directives:{TrapFocus:Pe},components:{ElButton:k.mi,ElFocusTrap:je.Z,ElInput:_.EZ,ElOverlay:Me.F6,ElIcon:Se.gn,...Ue.f5},inheritAttrs:!1,props:{buttonSize:{type:String,validator:qe.P},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:t}){const{t:n}=(0,We.bU)(),l=(0,r.s)("message-box"),s=(0,o.iH)(!1),{nextZIndex:i}=(0,d.C)(),c=(0,o.qj)({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:i()}),u=(0,a.Fl)((()=>{const e=c.type;return{[l.bm("icon",e)]:e&&Ue.Rp[e]}})),m=(0,Ze.M)(),p=(0,Ze.M)(),g=(0,Oe.tH)((0,a.Fl)((()=>e.buttonSize)),{prop:!0,form:!0,formItem:!0}),v=(0,a.Fl)((()=>c.icon||Ue.Rp[c.type]||"")),f=(0,a.Fl)((()=>!!c.message)),h=(0,o.iH)(),b=(0,o.iH)(),y=(0,o.iH)(),w=(0,o.iH)(),C=(0,o.iH)(),_=(0,a.Fl)((()=>c.confirmButtonClass));(0,a.YP)((()=>c.inputValue),(async t=>{await(0,a.Y3)(),"prompt"===e.boxType&&null!==t&&z()}),{immediate:!0}),(0,a.YP)((()=>s.value),(t=>{var n,o;t&&("prompt"!==e.boxType&&(c.autofocus?y.value=null!=(o=null==(n=C.value)?void 0:n.$el)?o:h.value:y.value=h.value),c.zIndex=i()),"prompt"===e.boxType&&(t?(0,a.Y3)().then((()=>{var e;w.value&&w.value.$el&&(c.autofocus?y.value=null!=(e=M())?e:h.value:y.value=h.value)})):(c.editorErrorMessage="",c.validateError=!1))}));const k=(0,a.Fl)((()=>e.draggable));function x(){s.value&&(s.value=!1,(0,a.Y3)((()=>{c.action&&t("action",c.action)})))}(0,Ye.O)(h,b,k),(0,a.bv)((async()=>{await(0,a.Y3)(),e.closeOnHashChange&&window.addEventListener("hashchange",x)})),(0,a.Jd)((()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",x)}));const A=()=>{e.closeOnClickModal&&B(c.distinguishCancelAndClose?"close":"cancel")},I=(0,Ke.S)(A),E=e=>{if("textarea"!==c.inputType)return e.preventDefault(),B("confirm")},B=t=>{var n;("prompt"!==e.boxType||"confirm"!==t||z())&&(c.action=t,c.beforeClose?null==(n=c.beforeClose)||n.call(c,t,c,x):x())},z=()=>{if("prompt"===e.boxType){const e=c.inputPattern;if(e&&!e.test(c.inputValue||""))return c.editorErrorMessage=c.inputErrorMessage||n("el.messagebox.error"),c.validateError=!0,!1;const t=c.inputValidator;if("function"===typeof t){const e=t(c.inputValue);if(!1===e)return c.editorErrorMessage=c.inputErrorMessage||n("el.messagebox.error"),c.validateError=!0,!1;if("string"===typeof e)return c.editorErrorMessage=e,c.validateError=!0,!1}}return c.editorErrorMessage="",c.validateError=!1,!0},M=()=>{const e=w.value.$refs;return e.input||e.textarea},S=()=>{B("close")},L=()=>{e.closeOnPressEscape&&S()};return e.lockScroll&&(0,Ne.W)(s),Je(s),{...(0,o.BK)(c),ns:l,overlayEvent:I,visible:s,hasMessage:f,typeClass:u,contentId:m,inputId:p,btnSize:g,iconComponent:v,confirmButtonClasses:_,rootRef:h,focusStartRef:y,headerRef:b,inputRef:w,confirmRef:C,doClose:x,handleClose:S,onCloseRequested:L,handleWrapperClick:A,handleInputEnter:E,handleAction:B,t:n}}}),Ge=["aria-label","aria-describedby"],Qe=["aria-label"],et=["id"];function tt(e,t,n,o,s,r){const c=(0,a.up)("el-icon"),u=(0,a.up)("close"),d=(0,a.up)("el-input"),m=(0,a.up)("el-button"),p=(0,a.up)("el-focus-trap"),g=(0,a.up)("el-overlay");return(0,a.wg)(),(0,a.j4)(i.uT,{name:"fade-in-linear",onAfterLeave:t[11]||(t[11]=t=>e.$emit("vanish")),persisted:""},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(g,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:(0,a.w5)((()=>[(0,a._)("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:(0,l.C_)(`${e.ns.namespace.value}-overlay-message-box`),onClick:t[8]||(t[8]=(...t)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...t)),onMousedown:t[9]||(t[9]=(...t)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...t)),onMouseup:t[10]||(t[10]=(...t)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...t))},[(0,a.Wm)(p,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:(0,a.w5)((()=>[(0,a._)("div",{ref:"rootRef",class:(0,l.C_)([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:(0,l.j5)(e.customStyle),tabindex:"-1",onClick:t[7]||(t[7]=(0,i.iM)((()=>{}),["stop"]))},[null!==e.title&&void 0!==e.title?((0,a.wg)(),(0,a.iD)("div",{key:0,ref:"headerRef",class:(0,l.C_)(e.ns.e("header"))},[(0,a._)("div",{class:(0,l.C_)(e.ns.e("title"))},[e.iconComponent&&e.center?((0,a.wg)(),(0,a.j4)(c,{key:0,class:(0,l.C_)([e.ns.e("status"),e.typeClass])},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(e.iconComponent)))])),_:1},8,["class"])):(0,a.kq)("v-if",!0),(0,a._)("span",null,(0,l.zw)(e.title),1)],2),e.showClose?((0,a.wg)(),(0,a.iD)("button",{key:0,type:"button",class:(0,l.C_)(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:t[0]||(t[0]=t=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:t[1]||(t[1]=(0,i.D2)((0,i.iM)((t=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),["prevent"]),["enter"]))},[(0,a.Wm)(c,{class:(0,l.C_)(e.ns.e("close"))},{default:(0,a.w5)((()=>[(0,a.Wm)(u)])),_:1},8,["class"])],42,Qe)):(0,a.kq)("v-if",!0)],2)):(0,a.kq)("v-if",!0),(0,a._)("div",{id:e.contentId,class:(0,l.C_)(e.ns.e("content"))},[(0,a._)("div",{class:(0,l.C_)(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?((0,a.wg)(),(0,a.j4)(c,{key:0,class:(0,l.C_)([e.ns.e("status"),e.typeClass])},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(e.iconComponent)))])),_:1},8,["class"])):(0,a.kq)("v-if",!0),e.hasMessage?((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,l.C_)(e.ns.e("message"))},[(0,a.WI)(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?((0,a.wg)(),(0,a.j4)((0,a.LL)(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):((0,a.wg)(),(0,a.j4)((0,a.LL)(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.dangerouslyUseHTMLString?"":e.message),1)])),_:1},8,["for"]))]))],2)):(0,a.kq)("v-if",!0)],2),(0,a.wy)((0,a._)("div",{class:(0,l.C_)(e.ns.e("input"))},[(0,a.Wm)(d,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":t[2]||(t[2]=t=>e.inputValue=t),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:(0,l.C_)({invalid:e.validateError}),onKeydown:(0,i.D2)(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),(0,a._)("div",{class:(0,l.C_)(e.ns.e("errormsg")),style:(0,l.j5)({visibility:e.editorErrorMessage?"visible":"hidden"})},(0,l.zw)(e.editorErrorMessage),7)],2),[[i.F8,e.showInput]])],10,et),(0,a._)("div",{class:(0,l.C_)(e.ns.e("btns"))},[e.showCancelButton?((0,a.wg)(),(0,a.j4)(m,{key:0,loading:e.cancelButtonLoading,class:(0,l.C_)([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:t[3]||(t[3]=t=>e.handleAction("cancel")),onKeydown:t[4]||(t[4]=(0,i.D2)((0,i.iM)((t=>e.handleAction("cancel")),["prevent"]),["enter"]))},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.cancelButtonText||e.t("el.messagebox.cancel")),1)])),_:1},8,["loading","class","round","size"])):(0,a.kq)("v-if",!0),(0,a.wy)((0,a.Wm)(m,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:(0,l.C_)([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:t[5]||(t[5]=t=>e.handleAction("confirm")),onKeydown:t[6]||(t[6]=(0,i.D2)((0,i.iM)((t=>e.handleAction("confirm")),["prevent"]),["enter"]))},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.confirmButtonText||e.t("el.messagebox.confirm")),1)])),_:1},8,["loading","class","round","disabled","size"]),[[i.F8,e.showConfirmButton]])],2)],6)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,Ge)])),_:3},8,["z-index","overlay-class","mask"]),[[i.F8,e.visible]])])),_:3})}var nt=(0,x.Z)(Xe,[["render",tt],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]),ot=n(5162);const lt=new Map,at=(e,t,n=null)=>{const o=(0,a.h)(nt,e);return o.appContext=n,(0,i.sY)(o,t),document.body.appendChild(t.firstElementChild),o.component},st=()=>document.createElement("div"),it=(e,t)=>{const n=st();e.onVanish=()=>{(0,i.sY)(null,n),lt.delete(s)},e.onAction=t=>{const n=lt.get(s);let l;l=e.showInput?{value:s.inputValue,action:t}:t,e.callback?e.callback(l,o.proxy):"cancel"===t||"close"===t?e.distinguishCancelAndClose&&"cancel"!==t?n.reject("close"):n.reject("cancel"):n.resolve(l)};const o=at(e,n,t),s=o.proxy;for(const a in e)(0,l.RI)(e,a)&&!(0,l.RI)(s.$props,a)&&(s[a]=e[a]);return(0,a.YP)((()=>s.message),((e,t)=>{(0,a.lA)(e)?o.slots.default=()=>[e]:(0,a.lA)(t)&&!(0,a.lA)(e)&&delete o.slots.default}),{immediate:!0}),s.visible=!0,s};function rt(e,t=null){if(!s.C5)return Promise.reject();let n;return(0,l.HD)(e)||(0,a.lA)(e)?e={message:e}:n=e.callback,new Promise(((o,l)=>{const a=it(e,null!=t?t:rt._context);lt.set(a,{options:e,callback:n,resolve:o,reject:l})}))}const ct=["alert","confirm","prompt"],ut={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};function dt(e){return(t,n,o,a)=>{let s;return(0,l.Kn)(n)?(o=n,s=""):s=(0,ot.o8)(n)?"":n,rt(Object.assign({title:s,message:t,type:"",...ut[e]},o,{boxType:e}),a)}}ct.forEach((e=>{rt[e]=dt(e)})),rt.close=()=>{lt.forEach(((e,t)=>{t.doClose()})),lt.clear()},rt._context=null;const mt=rt;mt.install=e=>{mt._context=e._context,e.config.globalProperties.$msgbox=mt,e.config.globalProperties.$messageBox=mt,e.config.globalProperties.$alert=mt.alert,e.config.globalProperties.$confirm=mt.confirm,e.config.globalProperties.$prompt=mt.prompt};const pt=mt;n(8438),n(7575);var gt=n(3907),vt=n(2201),ft=n(9279),ht={name:"Set",setup(){let e=(0,o.iH)(!1),t=(0,o.iH)(!1),n=(0,o.iH)(!1),l=(0,o.iH)(!1),s=(0,a.Fl)((()=>u.state.user.accountArr));const i=(0,o.qj)({zhanghao:"",mima:""}),r=(0,o.iH)(null),c={zhanghao:[{required:!0,trigger:"blur",message:"用户名不能为空"},{trigger:"blur",validator:ft.Z.validateAccount}],mima:[{required:!0,trigger:"blur",message:"密码不能为空"},{trigger:"blur",validator:ft.Z.validatePassword}]},u=(0,gt.oR)(),d=(0,vt.tv)(),m=async()=>{try{e.value=!0,await u.dispatch("user/userInfoUpdate"),ze.z8.success("数据更新成功"),e.value=!1}catch(t){ze.z8.error(t.message)}},p=()=>{t.value=!0},g=()=>{t.value=!1},v=async e=>{if(!0===e.active)t.value=!1;else try{u.commit("user/deleteAllInfo"),await u.dispatch("user/login",{zhanghao:e.zhanghao,mima:e.mima}),await u.dispatch("user/getUserToken",{zhanghao:e.zhanghao,mima:e.mima}),ze.z8.success("切换账号成功"),u.commit("user/changeActive",e.zhanghao),d.push("/home")}catch(n){ze.z8.success("账号切换失败，请重试"),console.log(`切换账号:${n.message}`)}},f=async()=>{try{await pt.confirm("确定要删除聊天记录吗？"),u.commit("user/deletaAllChat"),ze.z8.success("删除成功")}catch(e){console.log(e.message),ze.z8.info("取消删除")}},h=e=>{u.commit("user/deleteAccountArr",e.zhanghao)},b=()=>{l.value=!0},y=()=>{l.value=!1,userFormRem.value.resetFields()},w=()=>{r.value.validate((async e=>{if(e)try{await u.dispatch("user/login",i),await u.dispatch("user/getUserToken",i),u.dispatch("user/addAccountArrAction"),ze.z8.success("登录成功"),d.push("/home")}catch(t){console.log(`设置页面${t}`),ze.z8.error(t.message)}}))};return{loading:e,setBtnClick:m,logout:p,deleteAllChat:f,changeAccountShow:t,closeChangeAccountShow:g,isManage:n,accountArr:s,login:v,deleteAccount:h,addAccount:b,loginShow:l,closeLogin:y,userForm:i,loginRules:c,userFormRef:r,addLoginAcccount:w}}},bt=n(3744);const yt=(0,bt.Z)(ht,[["render",Be],["__scopeId","data-v-79ba715e"]]);var wt=yt}}]);
//# sourceMappingURL=868.b4449d3a.js.map