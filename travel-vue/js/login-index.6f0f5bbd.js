(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login-index"],{"1e4b":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-card",[t("h3",[e._v("相册")]),t("div",{staticClass:"operation"},[t("el-button",{on:{click:function(r){e.dialogVisible=!0}}},[e._v(" 创建相册 ")]),t("el-input",{attrs:{placeholder:"请输入查询关键字"},model:{value:e.query,callback:function(r){e.query=r},expression:"query"}})],1),t("ul",{staticClass:"albumlist"},e._l(e.albumlist,(function(r){return t("li",{key:r.albumid,on:{click:function(t){return e.to(r)}}},[t("div",{staticClass:"albumlist-img"},[t("el-image",{attrs:{src:r.aPhoto&&1===r.albumtype?e.dfUrl+r.aPhoto.photoaddress:""}},[1===r.albumtype?t("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[t("i",{staticClass:"el-icon-picture-outline"})]):e._e(),2===r.albumtype?t("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[t("i",{staticClass:"el-icon-warning"})]):e._e()])],1),t("div",{staticClass:"albumlist-b"},[t("span",[e._v(e._s(r.albumname||"相册名称"))]),t("el-dropdown",{on:{command:e.handleCommand}},[t("span",{staticClass:"el-dropdown-link"},[e._v(" ..."),t("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{command:{type:"alter",item:r}}},[e._v(" 修改 ")]),t("el-dropdown-item",{attrs:{command:{type:"del",item:r}}},[e._v(" 删除 ")])],1)],1)],1),t("div",{staticClass:"albumlist-desc",attrs:{title:r.albumdescribe}},[e._v(" "+e._s(r.albumdescribe||"描述")+" ")])])})),0)]),t("el-dialog",{attrs:{center:"",visible:e.dialogVisible,"before-close":e.handleClose,title:"创建相册",width:"50%"},on:{"update:visible":function(r){e.dialogVisible=r}}},[t("el-form",{ref:"addalbumFormref",attrs:{rules:e.rules,model:e.addalbumForm}},[t("el-form-item",{attrs:{prop:"albumname",label:"相册名称"}},[t("el-input",{model:{value:e.addalbumForm.albumname,callback:function(r){e.$set(e.addalbumForm,"albumname",r)},expression:"addalbumForm.albumname"}})],1),t("el-form-item",{attrs:{label:"描述",prop:"albumdescribe"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.addalbumForm.albumdescribe,callback:function(r){e.$set(e.addalbumForm,"albumdescribe",r)},expression:"addalbumForm.albumdescribe"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(r){return e.submit("addalbumFormref")}}},[e._v("提 交")]),t("el-button",{on:{click:function(r){e.dialogVisible=!1}}},[e._v("取 消")])],1)],1),t("el-dialog",{attrs:{center:"",visible:e.dialogVisible1,"before-close":e.handleClose1,title:"修改描述",width:"50%"},on:{"update:visible":function(r){e.dialogVisible1=r}}},[t("el-form",{ref:"alteralbumFormref",attrs:{rules:e.rules,model:e.alteralbumForm}},[t("el-form-item",{attrs:{prop:"albumname",label:"相册名称"}},[t("el-input",{model:{value:e.alteralbumForm.albumname,callback:function(r){e.$set(e.alteralbumForm,"albumname",r)},expression:"alteralbumForm.albumname"}})],1),t("el-form-item",{attrs:{label:"描述",prop:"albumdescribe"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.alteralbumForm.albumdescribe,callback:function(r){e.$set(e.alteralbumForm,"albumdescribe",r)},expression:"alteralbumForm.albumdescribe"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(r){return e.submit("alteralbumFormref")}}},[e._v("提交")]),t("el-button",{on:{click:function(r){e.dialogVisible1=!1}}},[e._v("取 消")])],1)],1)],1)},a=[],o=(t("caad"),t("45fc"),t("2532"),t("96cf"),t("1da1")),i={data:function(){return{query:"",id:JSON.parse(window.sessionStorage.user).userid||JSON.parse(window.sessionStorage.user).adminid,dialogVisible:!1,dialogVisible1:!1,isalter:!1,dfUrl:"http://localhost:10086/ps/",albumlist:[{}],allalbumlist:[],addalbumForm:{},alteralbumForm:{},rules:{albumname:[{required:!0,message:"请输入相册名",trigger:"blur"}],albumdescribe:[{required:!0,message:"请输入相册描述",trigger:"blur"}]}}},created:function(){this.getalbumlist()},methods:{getalbumlist:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var t,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("album/list",{params:{id:e.id}});case 2:t=r.sent,s=t.data,200===s.code&&(e.allalbumlist=s.obj,e.queryuserlist());case 5:case"end":return r.stop()}}),r)})))()},queryuserlist:function(){var e=this,r=[];this.allalbumlist.some((function(t){(t.albumname.includes(e.query)||t.albumdescribe.includes(e.query))&&r.push(t)})),this.albumlist=r},handleCommand:function(e){"alter"===e.type&&this.alter(e.item),"del"===e.type&&this.del(e.item)},alter:function(e){this.dialogVisible1=!0,console.log(e),this.alteralbumForm=e,this.isalter=!0},submit:function(e){var r=this;this.$refs[e].validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var s,a,o,i,n,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:if(console.log(r.alteralbumForm),console.log(r.addalbumForm),!r.isalter){e.next=15;break}return console.log(r.alteralbumForm),s=r.alteralbumForm,a=s.albumid,o=s.albumdescribe,e.next=9,r.$http.post("user/updateAlbum",{id:a,changeWord:o});case 9:i=e.sent,n=i.data,console.log(n),r.handleClose1(),e.next=22;break;case 15:return r.addalbumForm.albumuserid=r.id,e.next=18,r.$http.post("user/addAlbum",r.addalbumForm);case 18:l=e.sent,u=l.data,console.log(u),200===u.code&&(r.getalbumlist(),r.queryuserlist(),r.handleClose());case 22:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())},del:function(e){var r=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var s,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.$confirm("是否确认删除该相册?","确认删除",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(s=t.sent,"confirm"==s){t.next=5;break}return t.abrupt("return",r.$message.info("已取消删除"));case 5:return a=e.albumid,t.next=8,r.$http.get("user/delAlbum",{params:{id:a}});case 8:o=t.sent,i=o.data,200===i.code&&(r.getalbumlist(),r.queryuserlist());case 11:case"end":return t.stop()}}),t)})))()},to:function(e){1===e.albumtype?this.$router.push("/album/"+e.albumid):this.$message({type:"error",message:"相册已被禁用"})},handleClose:function(){this.dialogVisible=!1},handleClose1:function(){this.dialogVisible1=!1}},watch:{query:function(e){this.queryuserlist()}}},n=i,l=(t("249f"),t("2877")),u=Object(l["a"])(n,s,a,!1,null,"3c344c43",null);r["default"]=u.exports},"249f":function(e,r,t){"use strict";var s=t("dc63"),a=t.n(s);a.a},2532:function(e,r,t){"use strict";var s=t("23e7"),a=t("5a34"),o=t("1d80"),i=t("ab13");s({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(o(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},3348:function(e,r,t){"use strict";var s=t("7b7f"),a=t.n(s);a.a},"42f2":function(e,r,t){"use strict";var s=t("be0e"),a=t.n(s);a.a},"44e7":function(e,r,t){var s=t("861d"),a=t("c6b6"),o=t("b622"),i=o("match");e.exports=function(e){var r;return s(e)&&(void 0!==(r=e[i])?!!r:"RegExp"==a(e))}},"5a34":function(e,r,t){var s=t("44e7");e.exports=function(e){if(s(e))throw TypeError("The method doesn't accept regular expressions");return e}},7803:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login_container"},[t("div"),t("div",{staticClass:"bg"}),t("div",{staticClass:"login_box"},[t("h1",[e._v("注册")]),t("el-form",{ref:"registerFormref",staticClass:"login-form",attrs:{"lable-width":"0px",model:e.registerForm,rules:e.rules}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{ref:"username",attrs:{placeholder:"手机号"},model:{value:e.registerForm.username,callback:function(r){e.$set(e.registerForm,"username",r)},expression:"registerForm.username"}},[t("i",{staticClass:"el-input__icon el-icon-phone",attrs:{slot:"prefix"},slot:"prefix"})])],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{ref:"password",attrs:{type:"password",placeholder:"密码"},model:{value:e.registerForm.password,callback:function(r){e.$set(e.registerForm,"password",r)},expression:"registerForm.password"}},[t("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),t("el-form-item",{attrs:{prop:"repassword"}},[t("el-input",{ref:"password",attrs:{type:"password",placeholder:"确认密码"},model:{value:e.registerForm.repassword,callback:function(r){e.$set(e.registerForm,"repassword",r)},expression:"registerForm.repassword"}},[t("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("registerFormref")}}},[e._v(" 注册 ")])],1),t("el-form-item",[t("el-button",{staticClass:"back",on:{click:function(r){return e.reback()}}},[e._v(" 取消 ")])],1)],1)],1)])},a=[],o=(t("96cf"),t("1da1")),i={data:function(){var e=this,r=function(r,t,s){if(t===e.registerForm.password)return s();s(new Error("两次输入的密码不一致，请重新输入"))},t=function(e,r,t){var s=/^1[3456789]\d{9}$/;s.test(r)||""==r||void 0==r?t():t(new Error("请输入正确的手机号码"))},s=function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(t,s,a){var o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("user/isPhone",{params:{username:s}});case 2:o=r.sent,i=o.data,i.obj?a(new Error("已注册手机号")):a();case 5:case"end":return r.stop()}}),r)})));return function(e,t,s){return r.apply(this,arguments)}}(),a=function(e,r,t){var s=/^[a-zA-Z][a-zA-Z0-9_]*$/;s.test(r)?t():t(new Error("以英文字母开头，只能包含英文字母、数字、下划线"))};return{registerForm:{},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{validator:t,trigger:"change"},{validator:s,trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:2,max:15,message:"长度在 2 到 15 个字符",trigger:"change"},{validator:a,trigger:"change"}],repassword:[{required:!0,message:"请确认密码",trigger:"blur"},{validator:r,trigger:"change"}]}}},mounted:function(){var e=this;document.onkeydown=function(r){var t=window.event.keyCode;13===t&&e.submitForm("registerFormref")},""===this.registerForm.username?this.$refs.username.focus():""===this.registerForm.password&&this.$refs.password.focus()},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var s,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:return delete r.registerForm.repassword,console.log(r.registerForm),e.next=6,r.$http.post("user/doregist",r.registerForm);case 6:s=e.sent,a=s.data,200===a.code?(r.$message({type:"success",message:"注册成功！"}),o=a.obj,window.sessionStorage.setItem("user",JSON.stringify(o)),r.$router.push("/")):r.$message({type:"error",message:"注册失败！"});case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())},reback:function(){this.$router.go(-1)}}},n=i,l=(t("3348"),t("2877")),u=Object(l["a"])(n,s,a,!1,null,"df6e00a8",null);r["default"]=u.exports},"7b7f":function(e,r,t){},ab13:function(e,r,t){var s=t("b622"),a=s("match");e.exports=function(e){var r=/./;try{"/./"[e](r)}catch(t){try{return r[a]=!1,"/./"[e](r)}catch(s){}}return!1}},be0e:function(e,r,t){},caad:function(e,r,t){"use strict";var s=t("23e7"),a=t("4d64").includes,o=t("44d2"),i=t("ae40"),n=i("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:!n},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},dc63:function(e,r,t){},dd7b:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login_container"},[t("div"),t("div",{staticClass:"bg"}),t("div",{staticClass:"login_box"},[t("h1",[e._v("登录")]),t("el-form",{ref:"loginFormref",staticClass:"login-form",attrs:{"lable-width":"0px",model:e.loginForm,rules:e.rules}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{ref:"username",attrs:{placeholder:"手机号"},model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}},[t("i",{staticClass:"el-input__icon el-icon-phone",attrs:{slot:"prefix"},slot:"prefix"})])],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{ref:"password",attrs:{type:"password",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}},[t("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("loginFormref")}}},[e._v(" 登录 ")])],1),t("el-form-item",[t("router-link",{attrs:{to:"/register"}},[e._v(" 还没有账号？立即注册 ")])],1)],1)],1)])},a=[],o=(t("96cf"),t("1da1")),i={data:function(){return{loginForm:{},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},mounted:function(){var e=this;document.onkeydown=function(r){var t=window.event.keyCode;13===t&&e.submitForm("loginFormref")},""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var s,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,r.$http.post("login",r.loginForm);case 4:s=e.sent,a=s.data,console.log(a),200===a.code?(r.$message({type:"success",message:"登录成功！"}),o=a.obj,window.sessionStorage.setItem("user",JSON.stringify(o)),r.$router.push("/")):r.$message({type:"error",message:a.obj});case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}}},n=i,l=(t("42f2"),t("2877")),u=Object(l["a"])(n,s,a,!1,null,"67c3c9e8",null);r["default"]=u.exports}}]);
//# sourceMappingURL=login-index.6f0f5bbd.js.map