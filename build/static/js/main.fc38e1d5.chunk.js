(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[6],{10:function(e,t,n){"use strict";var a=n(18),r=n(23),o=n(15),c=n(127),s=n(22),i=n(14),l=n(19),u=function(){function e(t,n){Object(i.a)(this,e),this.names=t,this.age=n}return Object(l.a)(e,[{key:"say",value:function(){}},{key:"todo",value:function(){}}]),e}();u.hobby=["eat","sleep"],(function(e){function t(e,n,a){var c;return Object(i.a)(this,t),(c=Object(r.a)(this,Object(o.a)(t).call(this,e,n))).score=a,c}return Object(s.a)(t,e),Object(l.a)(t,[{key:"goto",value:function(){}},{key:"say",value:function(){return Object(c.a)(Object(o.a)(t.prototype),"say",this).call(this)}}]),t}(u)).hobby=["read","music"];n(136);var d=n(28),p=n.n(d),h=n(37),m=n.n(h),f="http://123.57.7.39:2020/",b="";function g(e){p.a.hide(),p.a.fail(e,1)}function v(e){p.a.hide(),p.a.success(e,1)}m.a.defaults.baseURL=f,m.a.defaults.headers.common.token=b,m.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",m.a.interceptors.request.use((function(e){var t,n;return t=t||"\u8bf7\u6c42\u4e2d...",n=n||1,p.a.hide(),p.a.loading(t,n,(function(){console.log("Load complete !!!")})),b=sessionStorage.token?sessionStorage.token:"",e.headers.token=b,e}),(function(e){var t;return t="\u8bf7\u6c42\u5931\u8d25-\u7f51\u7edc\u5f02\u5e38",p.a.hide(),p.a.offline(t,1),Promise.reject(e)})),m.a.interceptors.response.use((function(e){return console.log(e),e.data.code,e.data.type?v(e.data.msg):0==e.data.type?g(e.data.msg):v(e.data.msg),e}),(function(e){return g("\u54cd\u5e94\u5931\u8d25-\u670d\u52a1\u5668\u5f02\u5e38"),Promise.reject(e)})),n.d(t,"c",(function(){return y})),n.d(t,"a",(function(){return m.a})),n.d(t,"b",(function(){return f}));var y=new a.b},139:function(e,t,n){e.exports=n(242)},16:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(122),c=n.n(o),s=function(){return r.a.createElement("div",null,"loading")};t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return c()({loader:e,loading:t})}},194:function(e,t,n){},206:function(e,t,n){},235:function(e,t,n){e.exports=n.p+"static/media/detail1.c1493d30.jpg"},236:function(e,t,n){e.exports=n.p+"static/media/detail2.273ee0b1.jpg"},237:function(e,t,n){e.exports=n.p+"static/media/detail3.cc7614f5.jpg"},238:function(e,t,n){e.exports=n.p+"static/media/detail4.30df1100.jpg"},239:function(e,t,n){e.exports=n.p+"static/media/detail5.cec5b2be.jpg"},240:function(e,t,n){},242:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(7),s=n.n(c),i=n(14),l=n(19),u=n(23),d=n(15),p=n(22),h=n(62),m=n(33),f=n(1),b=n.n(f),g=(n(128),n(44)),v=n.n(g),y=(n(86),n(63)),j=n.n(y),O=(n(135),n(104)),E=n.n(O),k=(n(194),n(85)),w=n(52),L=n(87),C=n(10),x=n(80),S=n(88),A=E.a.RadioItem,I=Object(w.b)((function(e){return{addressList:e.getIn(["address","addressList"]),delList:e.getIn(["address","delList"]),updateList:e.getIn(["address","updateList"])}}))(a=Object(S.a)(a=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},n.onChange=function(e,t,a){console.log(t),console.log(a.target.checked),n.setState({value:e});x.a.addressList;x.a.changeAddChecked(a.target.checked,t),setTimeout((function(){n.props.history.go(0)}),1e3)},n.handleGoAdd=function(){n.props.history.push("/xinzengdizhi")},n.handleGotoBuy=function(){n.props.history.push("/buy")},n.handleDel=function(e){var t=n.props.delList;console.log(n.props.addressList[e]),t.splice(0),t.push(n.props.addressList[e]),console.log(t),C.a.post("/react/delAddress").then((function(e){e.data.type&&n.props.history.go(0)}))},n.handleUpdate=function(e){var t=n.props,a=t.addressList,r=t.updateList;console.log(a),r.splice(0),r.push(n.props.addressList[e]),sessionStorage.updateList=JSON.stringify(r),n.props.history.push("/updatedizhi")},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,n=e.addressList;console.log(n),t(Object(L.c)({url:"/react/getAddress"}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.addressList;t.delList;console.log(this.props);this.state.value;return o.a.createElement("div",{className:"d-addbox"},o.a.createElement(k.a,{title:"\u6536\u8d27\u5730\u5740",search:!0,show:!0}),o.a.createElement(j.a,{className:"a-list"},n.map((function(t,n){return o.a.createElement("div",{key:n,className:"a-smallBox"},o.a.createElement(A,{key:n,checked:t.isDefault,onChange:function(a){return e.onChange(n,t._id,a)}},o.a.createElement("p",null,t.name," ",o.a.createElement("span",null,t.tel)),o.a.createElement("p",null,t.address)))}))),o.a.createElement(v.a,{className:"d-queren",onClick:this.handleGotoBuy},"\u786e\u8ba4\u6536\u8d27\u5730\u5740"),o.a.createElement(v.a,{className:"d-adda",onClick:this.handleGoAdd},"\u65b0\u589e\u6536\u8d27\u5730\u5740"),o.a.createElement("div",{className:"dd-box"},o.a.createElement(v.a,{className:"d-del",inline:!0,onClick:function(){return e.handleDel(e.state.value)}},"\u5220\u9664\u6536\u8d27\u5730\u5740"),o.a.createElement(v.a,{className:"d-update",inline:!0,onClick:function(){return e.handleUpdate(e.state.value)}},"\u4fee\u6539\u6536\u8d27\u5730\u5740")))}}]),t}(r.Component))||a)||a,P=n(16),N=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getChildContext",value:function(){return{history:this.props.history}}},{key:"render",value:function(){return o.a.createElement("div",{className:"main"},o.a.createElement(m.d,null,o.a.createElement(m.b,{path:"/",exact:!0,render:function(){return o.a.createElement(m.a,{to:"/guide"})}}),o.a.createElement(m.b,{path:"/guide",component:Object(P.a)((function(){return Promise.all([n.e(1),n.e(21)]).then(n.bind(null,473))}))}),o.a.createElement(m.b,{path:"/login",component:Object(P.a)((function(){return Promise.all([n.e(2),n.e(17)]).then(n.bind(null,474))}))}),o.a.createElement(m.b,{path:"/search",component:Object(P.a)((function(){return n.e(15).then(n.bind(null,475))}))}),o.a.createElement(m.b,{path:"/main",component:Object(P.a)((function(){return Promise.all([n.e(13),n.e(20)]).then(n.bind(null,489))}))}),o.a.createElement(m.b,{path:"/scan",component:Object(P.a)((function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,476))}))}),o.a.createElement(m.b,{path:"/detail/:id",component:Object(P.a)((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,477))}))}),o.a.createElement(m.b,{path:"/dizhi",component:I}),o.a.createElement(m.b,{path:"/xinzengdizhi",component:Object(P.a)((function(){return Promise.all([n.e(2),n.e(3),n.e(5),n.e(27)]).then(n.bind(null,478))}))}),o.a.createElement(m.b,{path:"/updatedizhi",component:Object(P.a)((function(){return Promise.all([n.e(2),n.e(3),n.e(5),n.e(26)]).then(n.bind(null,479))}))}),o.a.createElement(m.b,{path:"/buy",component:Object(P.a)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,480))}))}),o.a.createElement(m.b,{path:"/comments",component:Object(P.a)((function(){return n.e(11).then(n.bind(null,481))}))}),o.a.createElement(m.b,{path:"/addcomment",component:Object(P.a)((function(){return n.e(19).then(n.bind(null,482))}))}),o.a.createElement(m.b,{path:"/commentlist",component:Object(P.a)((function(){return Promise.all([n.e(4),n.e(10)]).then(n.bind(null,483))}))}),o.a.createElement(m.b,{path:"/collection",component:Object(P.a)((function(){return Promise.all([n.e(4),n.e(23)]).then(n.bind(null,484))}))}),o.a.createElement(m.b,{path:"/chat",component:Object(P.a)((function(){return Promise.all([n.e(28),n.e(24)]).then(n.bind(null,485))}))}),o.a.createElement(m.b,{render:function(){return o.a.createElement(m.a,{to:"/guide"})}})))}}]),t}(r.Component);N.childContextTypes={history:b.a.object};var z=n(50),G=n(124),D=n(125),B=n.n(D),J=n(126),R=n(25),T=R.default.fromJS({banner:[],count:2020,city:"\u7f8e\u4e3d\u7684\u4eac\u5c71",goodList:[],goodDetail:{count:0},detailImg1:n(235),detailImg2:n(236),detailImg3:n(237),detailImg4:n(238),detailImg5:n(239)}),W=n(36),U=R.default.fromJS({pic:null,mobile:"",token:sessionStorage.token}),V={addressList:[],delList:[],updateList:[],value:0,userList:{name:"aaa",tel:null,address:"aaa",xiangXiAddress:"aaa",bigaddress:"aaa",mobile:null,isDefault:!1,id:null},searchList:[]},X={addList:[],checkList:[]},q=Object(J.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"changeCount":return e.update("count",(function(e){return e+t.payload}));case"getGoodList":return e.set("goodList",t.payload);case"getGoodDetail":return e.set("goodDetail",t.payload);default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"changeUser":var n=Object(W.a)({},e.toJS(),{},t.payload);return R.default.fromJS(n);default:return e}},address:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"getAddress":return Object(W.a)({},e,{addressList:t.payload});case"getSearch":return Object(W.a)({},e,{searchList:t.payload});default:return e}},shopcar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"getShopCar":return Object(W.a)({},e,{addList:t.payload});case"delShopCar":return{};default:return e}}}),K=Object(z.c)(q,Object(z.a)(G.a,B.a)),Y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(w.a,{store:K},o.a.createElement(h.a,{basename:""},o.a.createElement(m.b,{component:N})))}}]),t}(r.Component);var F=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(240);s.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),console.log("\u8fd9\u662f\u4e3b\u51fa\u53e3\u6587\u4ef6")},80:function(e,t,n){"use strict";var a,r,o,c,s,i=n(45),l=n(14),u=n(46),d=(n(129),n(8)),p=n(10),h=(a=function e(){Object(l.a)(this,e),Object(i.a)(this,"addressList",r,this),Object(i.a)(this,"youhui",o,this),Object(i.a)(this,"changeAddChecked",c,this),Object(i.a)(this,"getAddress",s,this)},r=Object(u.a)(a.prototype,"addressList",[d.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),o=Object(u.a)(a.prototype,"youhui",[d.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),c=Object(u.a)(a.prototype,"changeAddChecked",[d.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(e,t){p.a.post("/react/changeAddChecked",{checked:e,id:t}).then((function(e){}))}}}),s=Object(u.a)(a.prototype,"getAddress",[d.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){p.a.get("/react/getCheckedAddress").then((function(t){e.addressList=t.data.result}))}}}),a);t.a=new h},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));n(195);var a=n(117),r=n.n(a),o=(n(198),n(81)),c=n.n(o),s=(n(204),n(120)),i=n.n(s),l=(n(64),n(43)),u=n.n(l),d=n(14),p=n(19),h=n(23),m=n(15),f=n(22),b=(n(206),n(0)),g=n.n(b),v=n(10),y=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleGoSearch=function(){v.c.push("/search")},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"handleGoBack",value:function(e){e&&v.c.goBack()}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.show,r=t.search;return g.a.createElement(i.a,{mode:"light",icon:a&&g.a.createElement(u.a,{type:"left"}),onLeftClick:function(){return e.handleGoBack(a)},leftContent:[!r&&g.a.createElement(u.a,{onClick:function(){return e.handleGoSearch()},key:"0",type:"search",style:{marginRight:"16px"}})],rightContent:[g.a.createElement(E,{scan:this.props.scan,login:this.props.login,key:1})]},n)}}]),t}(b.Component),j=c.a.Item,O=function(e){return g.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/".concat(e,".svg"),className:"am-icon am-icon-xs",alt:""})},E=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={visible:!1,selected:""},n.handleVisibleChange=function(e){n.setState({visible:e})},n.onSelect=function(e){console.log(e.props.value),n.setState({visible:!1,selected:e.props.value}),"login"==e.props.value?v.c.push("/login"):"scan"==e.props.value?v.c.push("/scan"):n.showActionSheet()},n.showActionSheet=function(){var e=["\u4f7f\u7528\u76f8\u673a\u62cd\u7167","\u4ece\u76f8\u518c\u4e2d\u9009\u53d6","\u5220\u9664","\u53d6\u6d88"];r.a.showActionSheetWithOptions({options:e,cancelButtonIndex:e.length-1,destructiveButtonIndex:e.length-2,message:"\u7167\u7247",maskClosable:!0,"data-seed":"logId",wrapProps:{onTouchStart:function(e){return e.preventDefault()}}},(function(e){console.log(e)}))},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.scan,n=e.login;return g.a.createElement(c.a,{mask:!0,overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:this.state.visible,overlay:[!t&&g.a.createElement(j,{key:"4",value:"scan",icon:O("tOtXhkIWzwotgGSeptou"),"data-seed":"logId"},"\u626b\u4e00\u626b"),g.a.createElement(j,{key:"5",value:"photo",icon:O("PKAgAqZWJVNwKsAJSmXd"),style:{whiteSpace:"nowrap"}},"\u62cd\u7167"),!n&&g.a.createElement(j,{key:"6",value:"login",icon:O("uQIYTFeRrjPELImDRrPt")},g.a.createElement("span",{style:{marginRight:5}},"\u767b\u5f55"))],align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:this.handleVisibleChange,onSelect:this.onSelect},g.a.createElement(u.a,{type:"ellipsis"}))}}]),t}(b.Component)},87:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d}));var a=n(13),r=n.n(a),o=n(10);function c(e){var t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,r.a.awrap(o.a.get(t,{params:n}));case 3:return a=c.sent,c.abrupt("return",{type:"getGoodList",payload:a.data.result});case 5:case"end":return c.stop()}}))}function s(e){var t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,r.a.awrap(o.a.get(t,{params:n}));case 3:return a=c.sent,c.abrupt("return",{type:"getGoodDetail",payload:a.data.result});case 5:case"end":return c.stop()}}))}function i(e){var t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,r.a.awrap(o.a.get(t,{params:n}));case 3:return a=c.sent,c.abrupt("return",{type:"getAddress",payload:a.data.result});case 5:case"end":return c.stop()}}))}function l(e){var t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,r.a.awrap(o.a.post(t,{params:n}));case 3:return a=c.sent,c.abrupt("return",{type:"getSearch",payload:a.data.result});case 5:case"end":return c.stop()}}))}function u(e){var t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,r.a.awrap(o.a.post(t,{params:n}));case 3:return a=c.sent,c.abrupt("return",{type:"addShopcar",payload:a.data.result});case 5:case"end":return c.stop()}}))}function d(e){var t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,r.a.awrap(o.a.post(t,{params:n}));case 3:return a=c.sent,c.abrupt("return",{type:"addCollection",payload:a.data.result});case 5:case"end":return c.stop()}}))}}},[[139,7,8]]]);
//# sourceMappingURL=main.fc38e1d5.chunk.js.map