(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login-index"],{"07bf":function(e,r,t){},"1e4b":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-card",[t("h3",[e._v("相册")]),t("div",{staticClass:"operation"},[t("el-button",{on:{click:function(r){e.dialogVisible=!0}}},[e._v(" 创建相册 ")]),t("el-input",{attrs:{placeholder:"请输入查询关键字"},model:{value:e.query,callback:function(r){e.query=r},expression:"query"}})],1),t("ul",{staticClass:"albumlist"},e._l(e.albumlist,(function(r){return t("router-link",{key:r.albumid,attrs:{to:"/album/"+r.albumid}},[t("li",[t("div",{staticClass:"albumlist-img"},[t("el-image",{attrs:{src:r.aPhoto?e.dfUrl+r.aPhoto.photoaddress:"",width:"164px",height:"164px"}},[t("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[t("i",{staticClass:"el-icon-picture-outline"})])])],1),t("div",{staticClass:"albumlist-b"},[t("span",[e._v(e._s(r.albumname||"相册名称"))]),t("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(t){return t.preventDefault(),e.del(r)}}})],1),t("div",{staticClass:"albumlist-desc"},[e._v(" "+e._s(r.albumdescribe||"描述")+" ")])])])})),1)]),t("el-dialog",{attrs:{center:"",visible:e.dialogVisible,"before-close":e.handleClose,title:"创建相册",width:"50%"},on:{"update:visible":function(r){e.dialogVisible=r}}},[t("el-form",{ref:"addalbumFormref",attrs:{rules:e.rules,model:e.addalbumForm}},[t("el-form-item",{attrs:{prop:"albumname",label:"相册名称"}},[t("el-input",{model:{value:e.addalbumForm.albumname,callback:function(r){e.$set(e.addalbumForm,"albumname",r)},expression:"addalbumForm.albumname"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(r){return e.submit("addalbumFormref")}}},[e._v("提交")]),t("el-button",{on:{click:function(r){e.dialogVisible=!1}}},[e._v("取 消")])],1)],1)],1)},a=[],n=(t("caad"),t("45fc"),t("2532"),t("96cf"),t("1da1")),i={data:function(){return{query:"",id:JSON.parse(window.sessionStorage.user).userid||JSON.parse(window.sessionStorage.user).adminid,dialogVisible:!1,dfUrl:"http://localhost:10086/ps/",albumlist:[{}],allalbumlist:[],addalbumForm:{},rules:{albumname:[{required:!0,message:"请输入相册名",trigger:"blur"}]}}},created:function(){this.getalbumlist(),this.queryuserlist()},methods:{getalbumlist:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var t,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("album/list",{params:{userid:e.id}});case 2:t=r.sent,s=t.data,e.allalbumlist=s.obj;case 5:case"end":return r.stop()}}),r)})))()},queryuserlist:function(){var e=this,r=[];this.allalbumlist.some((function(t){(t.albumname.includes(e.query)||t.albumdesc.includes(e.query))&&r.push(t)})),this.albumlist=r},submit:function(e){var r=this;this.$refs[e].validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:return r.addalbumForm.albumuserid=r.userid,e.next=5,r.$http.post("user/addAlbum",r.addalbumForm);case 5:s=e.sent,s.data,r.handleClose(),r.getalbumlist();case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())},del:function(e){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.$confirm("是否确认删除该相册?","确认删除",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(s=t.sent,"confirm"==s){t.next=5;break}return t.abrupt("return",r.$message.info("已取消删除"));case 5:return a=e.albumid,t.next=8,r.$http.delete("user/delAlbum",{params:{id:a}});case 8:n=t.sent,n.data,r.getalbumlist();case 11:case"end":return t.stop()}}),t)})))()},handleClose:function(){this.dialogVisible=!1}},watch:{query:function(e){e&&this.queryuserlist()}}},o=i,u=(t("2104"),t("2877")),l=Object(u["a"])(o,s,a,!1,null,"7b7b15b4",null);r["default"]=l.exports},2104:function(e,r,t){"use strict";var s=t("8ba6"),a=t.n(s);a.a},2532:function(e,r,t){"use strict";var s=t("23e7"),a=t("5a34"),n=t("1d80"),i=t("ab13");s({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(n(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},3348:function(e,r,t){"use strict";var s=t("7b7f"),a=t.n(s);a.a},"44e7":function(e,r,t){var s=t("861d"),a=t("c6b6"),n=t("b622"),i=n("match");e.exports=function(e){var r;return s(e)&&(void 0!==(r=e[i])?!!r:"RegExp"==a(e))}},"5a34":function(e,r,t){var s=t("44e7");e.exports=function(e){if(s(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5d99":function(e,r,t){"use strict";var s=t("07bf"),a=t.n(s);a.a},7803:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login_container"},[t("div"),t("div",{staticClass:"bg"}),t("div",{staticClass:"login_box"},[t("h1",[e._v("注册")]),t("el-form",{ref:"registerFormref",staticClass:"login-form",attrs:{"lable-width":"0px",model:e.registerForm,rules:e.rules}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{ref:"username",attrs:{placeholder:"手机号"},model:{value:e.registerForm.username,callback:function(r){e.$set(e.registerForm,"username",r)},expression:"registerForm.username"}},[t("i",{staticClass:"el-input__icon el-icon-phone",attrs:{slot:"prefix"},slot:"prefix"})])],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{ref:"password",attrs:{type:"password",placeholder:"密码"},model:{value:e.registerForm.password,callback:function(r){e.$set(e.registerForm,"password",r)},expression:"registerForm.password"}},[t("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),t("el-form-item",{attrs:{prop:"repassword"}},[t("el-input",{ref:"password",attrs:{type:"password",placeholder:"确认密码"},model:{value:e.registerForm.repassword,callback:function(r){e.$set(e.registerForm,"repassword",r)},expression:"registerForm.repassword"}},[t("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("registerFormref")}}},[e._v(" 注册 ")])],1),t("el-form-item",[t("el-button",{staticClass:"back",on:{click:function(r){return e.reback()}}},[e._v(" 取消 ")])],1)],1)],1)])},a=[],n=(t("96cf"),t("1da1")),i={data:function(){var e=this,r=function(r,t,s){if(t===e.registerForm.password)return s();s(new Error("两次输入的密码不一致，请重新输入"))},t=function(e,r,t){var s=/^1[3456789]\d{9}$/;s.test(r)||""==r||void 0==r?t():t(new Error("请输入正确的手机号码"))},s=function(){var r=Object(n["a"])(regeneratorRuntime.mark((function r(t,s,a){var n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("user/isPhone",{params:{username:s}});case 2:n=r.sent,i=n.data,i.obj?a(new Error("已注册手机号")):a();case 5:case"end":return r.stop()}}),r)})));return function(e,t,s){return r.apply(this,arguments)}}(),a=function(e,r,t){var s=/^[a-zA-Z][a-zA-Z0-9_]*$/;s.test(r)?t():t(new Error("以英文字母开头，只能包含英文字母、数字、下划线"))};return{registerForm:{},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{validator:t,trigger:"change"},{validator:s,trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:2,max:15,message:"长度在 2 到 15 个字符",trigger:"change"},{validator:a,trigger:"change"}],repassword:[{required:!0,message:"请确认密码",trigger:"blur"},{validator:r,trigger:"change"}]}}},mounted:function(){var e=this;document.onkeydown=function(r){var t=window.event.keyCode;13===t&&e.submitForm("registerFormref")},""===this.registerForm.username?this.$refs.username.focus():""===this.registerForm.password&&this.$refs.password.focus()},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var s,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:return delete r.registerForm.repassword,console.log(r.registerForm),e.next=6,r.$http.post("user/doregist",r.registerForm);case 6:s=e.sent,a=s.data,200===a.code?(r.$message({type:"success",message:"注册成功！"}),n=a.obj,window.sessionStorage.setItem("user",JSON.stringify(n)),r.$router.push("/")):r.$message({type:"error",message:"注册失败！"});case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())},reback:function(){this.$router.go(-1)}}},o=i,u=(t("3348"),t("2877")),l=Object(u["a"])(o,s,a,!1,null,"df6e00a8",null);r["default"]=l.exports},"7b7f":function(e,r,t){},"8ba6":function(e,r,t){},ab13:function(e,r,t){var s=t("b622"),a=s("match");e.exports=function(e){var r=/./;try{"/./"[e](r)}catch(t){try{return r[a]=!1,"/./"[e](r)}catch(s){}}return!1}},caad:function(e,r,t){"use strict";var s=t("23e7"),a=t("4d64").includes,n=t("44d2"),i=t("ae40"),o=i("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:!o},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")},dd7b:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login_container"},[t("div"),t("div",{staticClass:"bg"}),t("div",{staticClass:"login_box"},[t("h1",[e._v("登录")]),t("el-form",{ref:"loginFormref",staticClass:"login-form",attrs:{"lable-width":"0px",model:e.loginForm,rules:e.rules}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{ref:"username",attrs:{placeholder:"手机号"},model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}},[t("i",{staticClass:"el-input__icon el-icon-phone",attrs:{slot:"prefix"},slot:"prefix"})])],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{ref:"password",attrs:{type:"password",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}},[t("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("loginFormref")}}},[e._v(" 登录 ")])],1),t("el-form-item",[t("router-link",{attrs:{to:"/register"}},[e._v(" 还没有账号？立即注册 ")])],1)],1)],1)])},a=[],n=(t("96cf"),t("1da1")),i={data:function(){return{loginForm:{},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},mounted:function(){var e=this;document.onkeydown=function(r){var t=window.event.keyCode;13===t&&e.submitForm("loginFormref")},""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var s,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,r.$http.post("login",r.loginForm);case 4:if(s=e.sent,a=s.data,console.log(a),200!==a.code){e.next=17;break}if(2!==a.obj.userban){e.next=10;break}return e.abrupt("return",r.$message({type:"error",message:"用户已被禁用"}));case 10:r.$message({type:"success",message:"登录成功！"}),n=a.obj,console.log(r.prototype),window.sessionStorage.setItem("user",JSON.stringify(n)),r.$router.push("/"),e.next=18;break;case 17:r.$message({type:"error",message:"用户名或密码错误！"});case 18:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}}},o=i,u=(t("5d99"),t("2877")),l=Object(u["a"])(o,s,a,!1,null,"23dbf3b4",null);r["default"]=l.exports}}]);
//# sourceMappingURL=login-index.5e40aec3.js.map