(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login-index"],{1797:function(t,e,r){"use strict";var n=r("c7c0"),i=r.n(n);i.a},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7"),r("e6cf");function n(t,e,r,n,i,o,s){try{var a=t[o](s),c=a.value}catch(u){return void r(u)}a.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var s=t.apply(e,r);function a(t){n(s,i,o,a,c,"next",t)}function c(t){n(s,i,o,a,c,"throw",t)}a(void 0)}))}}},"1e4b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"w"},[r("el-carousel",{attrs:{type:"card",height:"350px"}},t._l(t.imgList,(function(e,n){return r("el-carousel-item",{key:n},[r("img",{attrs:{height:"350",title:e.ts_descript,src:t.root+e.ts_url}})])})),1),r("div",{staticClass:"scenic-list"},[r("div",{staticClass:"list-item clearfix"},[r("ul",t._l(t.sceniclist,(function(e){return r("router-link",{key:e.ti_id,attrs:{to:"/scenic/details/"+e.ti_id}},[r("li",[r("img",{attrs:{src:e.ti_img.ttii_url||"../assets/img/1.jpg",width:"180",height:"180"}}),r("h3",{staticClass:"title"},[t._v(" "+t._s(e.ti_title||"商品名")+" ")]),r("p",{staticClass:"desc"},[t._v(" "+t._s(e.ti_context||"商品简介")+" ")])])])})),1)])])],1)])},i=[],o=(r("45fc"),r("96cf"),r("1da1")),s={data:function(){return{search:"",sceniclist:[],imgList:[]}},created:function(){this.getsceniclist(),this.getimglist()},methods:{getsceniclist:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("info/showAll");case 2:if(r=e.sent,n=r.data,200===n.code){e.next=6;break}return e.abrupt("return");case 6:n.obj.some((function(e){e.ti_img.ttii_url=t.root+e.ti_img.ttii_url})),t.sceniclist=n.obj;case 8:case"end":return e.stop()}}),e)})))()},getimglist:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("scenery/showAll");case 2:if(r=e.sent,n=r.data,200===n.code){e.next=6;break}return e.abrupt("return");case 6:t.imgList=n.obj;case 7:case"end":return e.stop()}}),e)})))()}},watch:{"$route.path":function(t,e){}}},a=s,c=(r("ab5a"),r("2877")),u=Object(c["a"])(a,n,i,!1,null,"cda03374",null);e["default"]=u.exports},"281a":function(t,e,r){"use strict";var n=r("81df"),i=r.n(n);i.a},"45fc":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").some,o=r("a640"),s=r("ae40"),a=o("some"),c=s("some");n({target:"Array",proto:!0,forced:!a||!c},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),s=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7803:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login_container"},[r("div"),r("div",{staticClass:"bg"}),r("div",{staticClass:"login_box"},[r("h1",[t._v("注册")]),r("el-form",{ref:"registerFormref",staticClass:"login-form",attrs:{"lable-width":"0px",model:t.registerForm,rules:t.rules}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{ref:"username",attrs:{placeholder:"用户名"},model:{value:t.registerForm.username,callback:function(e){t.$set(t.registerForm,"username",e)},expression:"registerForm.username"}},[r("i",{staticClass:"el-input__icon el-icon-user",attrs:{slot:"prefix"},slot:"prefix"})])],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{ref:"password",attrs:{type:"password",placeholder:"密码"},model:{value:t.registerForm.password,callback:function(e){t.$set(t.registerForm,"password",e)},expression:"registerForm.password"}},[r("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),r("el-form-item",{attrs:{prop:"repassword"}},[r("el-input",{ref:"password",attrs:{type:"password",placeholder:"确认密码"},model:{value:t.registerForm.repassword,callback:function(e){t.$set(t.registerForm,"repassword",e)},expression:"registerForm.repassword"}},[r("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),r("el-form-item",{attrs:{"label-width":"80",label:"注册方式"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[r("el-option",{attrs:{label:"用户",value:1}}),r("el-option",{attrs:{label:"商家",value:2}})],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("registerFormref")}}},[t._v(" 注册 ")])],1),r("el-form-item",[r("el-button",{staticClass:"back",on:{click:function(e){return t.reback()}}},[t._v(" 取消 ")])],1)],1)],1)])},i=[],o=(r("96cf"),r("1da1")),s={data:function(){var t=this,e=function(e,r,n){if(r===t.registerForm.password)return n();n(new Error("两次输入的密码不一致，请重新输入"))},r=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r,n,i){var o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("user/check",{params:{username:n}});case 2:o=e.sent,s=o.data,s?i(new Error("用户已注册")):i();case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),n=function(t,e,r){var n=/^[a-zA-Z][a-zA-Z0-9_]*$/;n.test(e)?r():r(new Error("以英文字母开头，只能包含英文字母、数字、下划线"))};return{select:1,registerForm:{},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{validator:r,trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:2,max:15,message:"长度在 2 到 15 个字符",trigger:"change"},{validator:n,trigger:"change"}],repassword:[{required:!0,message:"请确认密码",trigger:"blur"},{validator:e,trigger:"change"}]}}},mounted:function(){var t=this;document.onkeydown=function(e){var r=window.event.keyCode;13===r&&t.submitForm("registerFormref")},""===this.registerForm.username?this.$refs.username.focus():""===this.registerForm.password&&this.$refs.password.focus()},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var n,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",!1);case 2:return delete e.registerForm.repassword,t.next=5,e.$http.post(1===e.select?"user/doregist":"user/doShopperRegist",e.registerForm);case 5:n=t.sent,i=n.data,200===i.code?(e.$message({type:"success",message:"注册成功！"}),o=i.obj,window.sessionStorage.setItem("user",JSON.stringify(o)),e.$router.push("/")):e.$message({type:"error",message:"注册失败！"});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},reback:function(){this.$router.go(-1)}}},a=s,c=(r("1797"),r("2877")),u=Object(c["a"])(a,n,i,!1,null,"59247f22",null);e["default"]=u.exports},"81df":function(t,e,r){},"858e":function(t,e,r){},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",m={},g={};g[s]=function(){return this};var v=Object.getPrototypeOf,w=v&&v(v(A([])));w&&w!==n&&i.call(w,s)&&(g=w);var y=F.prototype=x.prototype=Object.create(g);k.prototype=y.constructor=F,F.constructor=k,F[c]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,F):(t.__proto__=F,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},l.awrap=function(t){return{__await:t}},j(L.prototype),L.prototype[a]=function(){return this},l.AsyncIterator=L,l.async=function(t,e,r,n){var i=new L(b(t,e,r,n));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(y),y[c]="Generator",y[s]=function(){return this},y.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=A,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var c=i.call(s,"catchLoc"),u=i.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}}}function b(t,e,r,n){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),s=new R(n||[]);return o._invoke=E(t,r,s),o}function _(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function x(){}function k(){}function F(){}function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(r,n,o,s){var a=_(t[r],t,n);if("throw"!==a.type){var c=a.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,s)}),(function(t){e("throw",t,o,s)})):Promise.resolve(u).then((function(t){c.value=t,o(c)}),s)}s(a.arg)}var r;function n(t,n){function i(){return new Promise((function(r,i){e(t,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=n}function E(t,e,r){var n=f;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return S()}r.method=i,r.arg=o;while(1){var s=r.delegate;if(s){var a=$(s,r);if(a){if(a===m)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=_(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function $(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,$(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=_(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(t){if(t){var e=t[s];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},"9f9e":function(t,e,r){"use strict";var n=r("858e"),i=r.n(n);i.a},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},a85c:function(t,e,r){},ab5a:function(t,e,r){"use strict";var n=r("a85c"),i=r.n(n);i.a},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),s=r("50c4"),a=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,f=6==t,p=5==t||f;return function(h,d,m,g){for(var v,w,y=o(h),b=i(y),_=n(d,m,3),x=s(b.length),k=0,F=g||a,j=e?F(h,x):r?F(h,0):void 0;x>k;k++)if((p||k in b)&&(v=b[k],w=_(v,k,y),t))if(e)j[k]=w;else if(w)switch(t){case 3:return!0;case 5:return v;case 6:return k;case 2:c.call(j,v)}else if(l)return!1;return f?-1:u||l?l:j}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},b8fd:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v(" 首页 ")]),r("el-breadcrumb-item",[t._v(t._s("商品"))])],1),r("div",{staticClass:"w"},[r("div",{staticClass:"goods-list"},[r("div",{staticClass:"list-item clearfix"},[r("ul",t._l(t.goodslist,(function(e){return r("router-link",{key:e.tg_id,attrs:{to:"/goods/details/"+e.tg_id}},[r("li",[r("img",{attrs:{src:e.tg_img.ttgi_url||"../assets/img/1.jpg",width:"180",height:"180"}}),r("h3",{staticClass:"title"},[t._v(" "+t._s(e.tg_title||"商品名")+" ")]),r("p",{staticClass:"desc"},[t._v(" "+t._s(e.tg_context||"商品简介")+" ")]),r("div",{staticClass:"prices"},[r("span",[t._v(t._s("￥"+e.tg_price))])])])])})),1)])])])],1)},i=[],o=(r("45fc"),r("96cf"),r("1da1")),s={data:function(){return{goodslist:[]}},created:function(){this.getgoodslist()},methods:{getgoodslist:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("goods/showAll");case 2:r=e.sent,n=r.data,n.obj.some((function(e){e.tg_img.ttgi_url=t.root+e.tg_img.ttgi_url})),t.goodslist=n.obj;case 6:case"end":return e.stop()}}),e)})))()}}},a=s,c=(r("281a"),r("2877")),u=Object(c["a"])(a,n,i,!1,null,"4191d2af",null);e["default"]=u.exports},c7c0:function(t,e,r){},dd7b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login_container"},[r("div",{staticClass:"bg"}),r("div",{staticClass:"login_box"},[r("h1",[t._v(t._s(t.isadmin?"管理员登录":"用户登录"))]),r("el-form",{ref:"loginFormref",staticClass:"login-form",attrs:{"lable-width":"0px",model:t.loginForm,rules:t.rules}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{ref:"username",attrs:{placeholder:"用户名"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}},[r("i",{staticClass:"el-input__icon el-icon-user",attrs:{slot:"prefix"},slot:"prefix"})])],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{ref:"password",attrs:{type:"password",placeholder:"密码"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}},[r("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("loginFormref")}}},[t._v(" 登录 ")])],1),r("el-form-item",[r("router-link",{attrs:{to:"/register"}},[t._v(" 还没有账号？立即注册 ")])],1)],1)],1)])},i=[],o=(r("96cf"),r("1da1")),s={data:function(){return{loginForm:{},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},mounted:function(){var t=this;document.onkeydown=function(e){var r=window.event.keyCode;13===r&&t.submitForm("loginFormref")},""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var n,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,e.$http.get(e.isadmin?"dologin":"user/login",{params:e.loginForm});case 4:n=t.sent,i=n.data,200===i.code?(e.$message({type:"success",message:"登录成功！"}),o=i.obj,window.sessionStorage.setItem("user",JSON.stringify(o)),e.$router.push("/")):e.$message({type:"error",message:i.obj});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},a=s,c=(r("9f9e"),r("2877")),u=Object(c["a"])(a,n,i,!1,null,"78b8f2d7",null);e["default"]=u.exports},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=login-index.826e7079.js.map