(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mana"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7"),r("e6cf");function n(t,e,r,n,i,a,o){try{var s=t[a](o),l=s.value}catch(u){return void r(u)}s.done?e(l):Promise.resolve(l).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,a){var o=t.apply(e,r);function s(t){n(o,i,a,s,l,"next",t)}function l(t){n(o,i,a,s,l,"throw",t)}s(void 0)}))}}},"365c":function(t,e,r){"use strict";var n=r("7c3e"),i=r.n(n);i.a},"5bcf":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v(" 首页 ")]),r("el-breadcrumb-item",[t._v("相册管理")])],1),r("el-card",[r("ul",{staticClass:"albumlist"},t._l(t.userlist,(function(e){return r("li",{key:e.userid,on:{click:function(r){return r.preventDefault(),t.getalbumlist(e)}}},[r("div",{staticClass:"albumlist-img"},[r("el-image",{attrs:{src:"../assets/img/1.jpg",width:"164px",height:"164px"}})],1),r("div",{staticClass:"albumlist-b"},[t._v(" "+t._s(e.username||"用户名")+" ")])])})),0)]),r("el-dialog",{attrs:{center:"",visible:t.dialogVisible1,"before-close":t.handleClose1,title:"相册管理",width:"85%"},on:{"update:visible":function(e){t.dialogVisible1=e}}},[r("ul",{staticClass:"albumlist albumlist1"},t._l(t.albumlist,(function(e){return r("li",{key:e.albumid,on:{click:function(r){return r.stopPropagation(),t.getphotolist(e)}}},[r("div",{staticClass:"albumlist-img"},[r("el-image",{attrs:{src:"../assets/img/1.jpg",width:"164px",height:"164px"}})],1),r("div",{staticClass:"albumlist1-b",on:{click:function(t){t.stopPropagation()}}},[r("span",[t._v(t._s(e.albumname||"相册名"))]),r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"2"},on:{change:function(r){return t.statusChange(e)}},model:{value:e.status,callback:function(r){t.$set(e,"status",r)},expression:"item.status"}})],1)])})),0),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogVisible1=!1}}},[t._v("关 闭")])],1)]),r("el-dialog",{attrs:{center:"",visible:t.dialogVisible2,"before-close":t.handleClose2,title:"相片管理",width:"85%"},on:{"update:visible":function(e){t.dialogVisible2=e}}},[r("ul",{staticClass:"albumlist albumlist1"},t._l(t.photolist,(function(e){return r("li",{key:e.photoid},[r("div",{staticClass:"albumlist-img"},[r("el-image",{attrs:{src:"../assets/img/1.jpg",width:"164px",height:"164px","preview-src-list":t.srcList}})],1),r("div",{staticClass:"albumlist-b"},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"2"},on:{change:function(r){return t.statusChange(e)}},model:{value:e.status,callback:function(r){t.$set(e,"status",r)},expression:"item.status"}})],1)])})),0),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogVisible2=!1}}},[t._v("关闭")])],1)])],1)},i=[],a=(r("96cf"),r("1da1")),o={data:function(){return{dialogVisible1:!1,dialogVisible2:!1,srcList:[],userlist:[],albumlist:[],photolist:[]}},methods:{getuserlist:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("user/list");case 2:r=e.sent,n=r.data,t.userlist=n.obj;case 5:case"end":return e.stop()}}),e)})))()},getalbumlist:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,i,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.dialogVisible1=!0,n=t.userid,r.next=4,e.$http.get("album/list",{params:{userid:n}});case 4:i=r.sent,a=i.data,e.albumlist=a.obj;case 7:case"end":return r.stop()}}),r)})))()},getphotolist:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,i,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.dialogVisible2=!0,n=t.albumid,r.next=4,e.$http.get("album/getphotobyid",{params:{id:n}});case 4:i=r.sent,a=i.data,e.photolist=a.obj;case 7:case"end":return r.stop()}}),r)})))()},statusChange:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,i,a,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t.albumid){r.next=8;break}return n=t.albumid,i=t.status,r.next=4,e.$http.get("admin/banAlbum",{id:n,ban:i});case 4:a=r.sent,a.data,r.next=14;break;case 8:if(!t.photoid){r.next=14;break}return t.photoid,o=t.status,r.next=12,e.$http.get("admin/banPhoto",{is:is,ban:o});case 12:s=r.sent,s.data;case 14:case"end":return r.stop()}}),r)})))()},handleClose1:function(){this.dialogVisible1=!1},handleClose2:function(){this.dialogVisible2=!1}}},s=o,l=(r("365c"),r("2877")),u=Object(l["a"])(s,n,i,!1,null,"1c732f0f",null);e["default"]=u.exports},"7c3e":function(t,e,r){},"7cdc":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v(" 首页 ")]),r("el-breadcrumb-item",[t._v("用户管理")])],1),r("el-card",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.userlist,stripe:""}},[r("el-table-column",{attrs:{label:"用户状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"2"},on:{change:function(r){return t.statusChange(e.row)}},model:{value:e.row.status,callback:function(r){t.$set(e.row,"status",r)},expression:"scope.row.status"}})]}}])}),r("el-table-column",{attrs:{prop:"userid",label:"用户ID"}}),r("el-table-column",{attrs:{prop:"username",label:"用户名"}}),r("el-table-column",{attrs:{prop:"usersex",label:"性别"}}),r("el-table-column",{attrs:{prop:"userphone",label:"手机"}}),r("el-table-column",{attrs:{prop:"useremail",label:"邮箱"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-edit"},on:{click:function(r){return r.stopPropagation(),t.alter(e.row)}}})]}}])})],1)],1),r("el-dialog",{attrs:{center:"",visible:t.dialogVisible,"before-close":t.handleClose,title:"修改用户信息",width:"35%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("el-form",{ref:"alteruserFormref",attrs:{inline:"","label-width":"60px",rules:t.rules,model:t.alteruserForm}},[r("el-form-item",{attrs:{prop:"username",label:"用户名"}},[r("el-input",{model:{value:t.alteruserForm.username,callback:function(e){t.$set(t.alteruserForm,"username",e)},expression:"alteruserForm.username"}})],1),r("el-form-item",{attrs:{label:"性别"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.alteruserForm.usersex,callback:function(e){t.$set(t.alteruserForm,"usersex",e)},expression:"alteruserForm.usersex"}},t._l(t.options,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),r("el-form-item",{attrs:{prop:"userphone",label:"手机",disabled:""}},[r("el-input",{model:{value:t.alteruserForm.userphone,callback:function(e){t.$set(t.alteruserForm,"userphone",e)},expression:"alteruserForm.userphone"}})],1),r("el-form-item",{attrs:{prop:"useremail",label:"邮箱"}},[r("el-input",{model:{value:t.alteruserForm.useremail,callback:function(e){t.$set(t.alteruserForm,"useremail",e)},expression:"alteruserForm.useremail"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){return t.submit("alteruserFormref")}}},[t._v("提交")]),r("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)},i=[],a=(r("96cf"),r("1da1")),o={data:function(){var t=function(t,e,r){var n=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;n.test(e)||""==e||void 0==e?r():r(new Error("请输入正确的邮箱"))},e=function(t,e,r){var n=/^1[3456789]\d{9}$/;n.test(e)||""==e||void 0==e?r():r(new Error("请输入正确的手机号码"))};return{userlist:[{}],alteruserForm:{},dialogVisible:!1,options:[{label:"男",value:1},{label:"女",value:2}],rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],userphone:[{validator:e,trigger:"change"}],useremail:[{validator:t,trigger:"change"}]}}},created:function(){this.getuserlist()},methods:{getuserlist:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("user/list");case 2:r=e.sent,n=r.data,t.userlist=n.obj,console.log(t.userlist);case 6:case"end":return e.stop()}}),e)})))()},alter:function(t){console.log(t),this.dialogVisible=!0,this.alteruserForm=t},submit:function(t){},handleClose:function(){this.dialogVisible=!1},statusChange:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,i,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.userid,i=t.status,r.next=3,e.$http.get("admin/banUser",{id:n,ban:i});case 3:a=r.sent,a.data;case 5:case"end":return r.stop()}}),r)})))()}}},s=o,l=r("2877"),u=Object(l["a"])(s,n,i,!1,null,null,null);e["default"]=u.exports},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag",u="object"===typeof t,c=e.regeneratorRuntime;if(c)u&&(t.exports=c);else{c=e.regeneratorRuntime=u?t.exports:{},c.wrap=y;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",m={},v={};v[o]=function(){return this};var b=Object.getPrototypeOf,g=b&&b(b(R([])));g&&g!==n&&i.call(g,o)&&(v=g);var w=L.prototype=k.prototype=Object.create(v);_.prototype=w.constructor=L,L.constructor=_,L[l]=_.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(w),t},c.awrap=function(t){return{__await:t}},j(E.prototype),E.prototype[s]=function(){return this},c.AsyncIterator=E,c.async=function(t,e,r,n){var i=new E(y(t,e,r,n));return c.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(w),w[l]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},c.values=R,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(V),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(l&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),V(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;V(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:R(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}}}function y(t,e,r,n){var i=e&&e.prototype instanceof k?e:k,a=Object.create(i.prototype),o=new $(n||[]);return a._invoke=C(t,r,o),a}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function k(){}function _(){}function L(){}function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(r,n,a,o){var s=x(t[r],t,n);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(u).then((function(t){l.value=t,a(l)}),o)}o(s.arg)}var r;function n(t,n){function i(){return new Promise((function(r,i){e(t,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=n}function C(t,e,r){var n=f;return function(i,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw a;return P()}r.method=i,r.arg=a;while(1){var o=r.delegate;if(o){var s=F(o,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=x(t,e,r);if("normal"===l.type){if(n=r.done?d:h,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=d,r.method="throw",r.arg=l.arg)}}}function F(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,F(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=x(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function V(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function R(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){while(++n<t.length)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())}}]);
//# sourceMappingURL=mana.3d1edc1b.js.map