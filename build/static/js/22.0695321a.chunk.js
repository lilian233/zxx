(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[22],{411:function(e,t,a){"use strict";a(29),a(64),a(412)},412:function(e,t,a){},413:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=g(a(2)),n=g(a(12)),s=g(a(4)),c=g(a(6)),o=g(a(3)),r=g(a(5)),i=g(a(11)),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(0)),m=g(a(51)),u=g(a(130)),p=g(a(43));function g(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){(0,s.default)(this,t);var a=(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onClick=function(){var e=a.props,t=e.disabled,l=e.onChange;if(!t){var n=a.state.selected;a.setState({selected:!n},(function(){l&&l(!n)}))}},a.onTagClose=function(){a.props.onClose&&a.props.onClose(),a.setState({closed:!0},a.props.afterClose)},a.state={selected:e.selected,closed:!1},a}return(0,r.default)(t,e),(0,c.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.props.selected!==e.selected&&this.setState({selected:e.selected})}},{key:"render",value:function(){var e,t=this.props,a=t.children,s=t.className,c=t.prefixCls,o=t.disabled,r=t.closable,g=t.small,f=t.style,h=(0,i.default)(s,c,(e={},(0,n.default)(e,c+"-normal",!o&&(!this.state.selected||g||r)),(0,n.default)(e,c+"-small",g),(0,n.default)(e,c+"-active",this.state.selected&&!o&&!g&&!r),(0,n.default)(e,c+"-disabled",o),(0,n.default)(e,c+"-closable",r),e)),E=!r||o||g?null:d.createElement(m.default,{activeClassName:c+"-close-active"},d.createElement("div",{className:c+"-close",role:"button",onClick:this.onTagClose,"aria-label":"remove tag"},d.createElement(p.default,{type:"cross-circle",size:"xs","aria-hidden":"true"})));return this.state.closed?null:d.createElement("div",(0,l.default)({},(0,u.default)(this.props),{className:h,onClick:this.onClick,style:f}),d.createElement("div",{className:c+"-text"},a),E)}}]),t}(d.Component);t.default=f,f.defaultProps={prefixCls:"am-tag",disabled:!1,selected:!1,closable:!1,small:!1,onChange:function(){},onClose:function(){},afterClose:function(){}},e.exports=t.default},414:function(e,t,a){},477:function(e,t,a){"use strict";a.r(t);a(128);var l,n=a(44),s=a.n(n),c=(a(411),a(413)),o=a.n(c),r=a(14),i=a(19),d=a(23),m=a(15),u=a(90),p=a(22),g=(a(263),a(264)),f=a.n(g),h=(a(414),a(0)),E=a.n(h),v=a(85),I=a(52),b=a(87),N=f.a.alert,C=function(e){var t=N("\u63d0\u793a","\u8bf7\u767b\u5f55\u540e\u8bbf\u95ee\u8d2d\u7269\u8f66",[{text:"\u53d6\u6d88",onPress:function(){return console.log(666)},style:"default"},{text:"\u767b\u5f55",onPress:function(){return e.props.history.push("/login")},style:"default"}]);setTimeout((function(){console.log("auto close"),t.close()}),5e5)},y=function(e){var t=N("\u52a0\u5165\u6210\u529f","\u53bb\u8d2d\u7269\u8f66\u7ed3\u7b97",[{text:"\u518d\u901b\u901b",onPress:function(){return console.log(666)},style:"default"},{text:"\u53bb\u770b\u770b",onPress:function(){return e.props.history.push("/main/cart")},style:"default"}]);setTimeout((function(){console.log("auto close"),t.close()}),5e5)},O=Object(I.b)((function(e){return{goodDetail:e.getIn(["data","goodDetail"]),detailImg1:e.getIn(["data","detailImg1"]),detailImg2:e.getIn(["data","detailImg2"]),detailImg3:e.getIn(["data","detailImg3"]),detailImg4:e.getIn(["data","detailImg4"]),detailImg5:e.getIn(["data","detailImg5"])}}))(l=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),s=0;s<l;s++)n[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).handleAddCar=function(){var e=a.props,t=e.goodDetail,l=e.dispatch;sessionStorage.token||C(Object(u.a)(a)),console.log(t),l(Object(b.b)({url:"/react/addShopcar",params:{goodDetail:t}})),y(Object(u.a)(a))},a.handleBuyIt=function(){sessionStorage.token?a.props.history.push("/main/cart"):C(Object(u.a)(a))},a.handleAddCollect=function(){var e=a.props,t=e.goodDetail,l=e.dispatch;sessionStorage.token||C(Object(u.a)(a)),console.log(t),l(Object(b.a)({url:"/react/addCollection",params:{goodDetail:t}}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=(e.goodList,e.goodDetail,e.match);e.detailImg1,e.detailImg2,e.detailImg3,e.detailImg4,e.detailImg5;console.log(this.props),t(Object(b.d)({url:"/react/getGoodDetail",params:{_id:a.params.id}}))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.item,t.location),l=(t.match,t.goodDetail),n=t.detailImg1,c=t.detailImg2,r=t.detailImg3,i=t.detailImg4,d=t.detailImg5;return E.a.createElement("div",{className:"d-main"},E.a.createElement(v.a,{title:new URLSearchParams(a.search).get("name").slice(0,12),show:!0,search:!0}),E.a.createElement("div",{className:"d-box"},E.a.createElement("img",{src:l.image,className:"d-img"}),E.a.createElement("p",{className:"d-name"},l.name),E.a.createElement("p",{className:"d-desc"},l.description),E.a.createElement("p",{className:"d-oldPrice"},"\u539f\u4ef7\uff1a",E.a.createElement("span",null,"\xa5",l.oldPrice,".00")),E.a.createElement("p",{className:"d-pbox"},E.a.createElement("span",{className:"d-price"},"\xa5",l.price,".00"),E.a.createElement("span",{className:"d-sell"},"\u5df2\u552e",l.sellCount,"\u4efd")),E.a.createElement("div",null," ",E.a.createElement(o.a,{"data-seed":"logId"},"\u914d\u9001"),E.a.createElement("span",{className:"d-sort"},"\u8be5\u5546\u54c1\u652f\u6301\u5168\u56fd\u4e3b\u8981\u57ce\u5e02\u53ca\u8fd1\u90ca\u914d\u9001")),E.a.createElement("img",{src:n,className:"detailImg1"})),E.a.createElement("div",{className:"d-detail"},E.a.createElement("img",{src:c,className:"detailImg2"}),E.a.createElement("img",{src:l.image,className:"d-img"}),E.a.createElement("img",{src:r,className:"detailImg3"}),E.a.createElement("div",{className:"thh"},E.a.createElement("h3",null,"\u9000\u6362\u8d27\u8bf4\u660e\uff1a"),E.a.createElement("p",null,"\u9c9c\u82b1\u4e0d\u63a5\u53d77\u5929\u65e0\u7406\u7531\u9000\u6362\u8d27,\u5982\u9700\u5f00\u5177\u53d1\u7968\u6216\u5176\u4ed6\u95ee\u9898,\u8bf7\u8054\u7cfb\u9c9c\u82b1\u5ba2\u670d"),E.a.createElement("p",null,"TEL\uff1a",E.a.createElement("span",null,"400-000-8797")),E.a.createElement("div",{className:"xhx"},E.a.createElement("hr",null)),E.a.createElement("p",null,"iOS/\u5b89\u5353\u641c\u7d22\uff1aBloom"),E.a.createElement("p",null,"\u5fae\u4fe1\u516c\u4f17\u53f7\uff1a\u9c9c\u82b1BLOOM"),E.a.createElement("p",null,"\u7f51\u7ad9\uff1ahttps://www.bloomapp.com.cn/")),E.a.createElement("img",{src:i,className:"detailImg4"}),E.a.createElement("img",{src:d,className:"detailImg5"})),E.a.createElement("div",{className:"d-shop"},E.a.createElement("div",{className:"d-gotoShop"},E.a.createElement("i",{className:"iconfont icon-goodsfill"}),E.a.createElement("p",{onClick:this.handleAddCollect},"\u6536\u85cf")),E.a.createElement("div",{className:"d-add"},E.a.createElement(s.a,{className:"d-addCar",inline:!0,onClick:function(){return e.handleAddCar()}},"\u52a0\u5165\u8d2d\u7269\u8f66"),E.a.createElement(s.a,{className:"d-buy",inline:!0,onClick:function(){return e.handleBuyIt()}},"\u7acb\u5373\u8d2d\u4e70"))))}}]),t}(h.Component))||l;t.default=O}}]);
//# sourceMappingURL=22.0695321a.chunk.js.map