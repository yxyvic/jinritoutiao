webpackJsonp([1],{"0w8Q":function(t,e){},"52Am":function(t,e){},E51W:function(t,e){},"Kl+x":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",[e("keep-alive",[e("router-view")],1)],1)],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},s,!1,function(t){n("Kl+x")},null,null).exports,o=n("/ocq"),r=n("Dd8w"),l=n.n(r),c={render:function(){var t=this.$createElement;return(this._self._c||t)("header",[this._t("homeHeader"),this._v(" "),this._t("newsDetailHeader")],2)},staticRenderFns:[]};var u=n("VU/8")({},c,!1,function(t){n("k10v")},null,null).exports,m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("mu-paper",[e("mu-bottom-nav",{attrs:{value:this.bottomNav,shift:""},on:{change:this.handleChange}},[e("mu-bottom-nav-item",{attrs:{value:"home",title:"首页",icon:"home"}}),this._v(" "),e("mu-bottom-nav-item",{attrs:{value:"star",title:"收藏",icon:"star"}}),this._v(" "),e("mu-bottom-nav-item",{attrs:{value:"favorite",title:"关注",icon:"favorite"}}),this._v(" "),e("mu-bottom-nav-item",{attrs:{value:"account_box",title:"我的",icon:"account_box"}})],1)],1)},staticRenderFns:[]};var d=n("VU/8")({data:function(){return{bottomNav:"home",bottomNavColor:"home"}},methods:{handleChange:function(t){this.bottomNav=t}}},m,!1,function(t){n("lUo0")},"data-v-2549cf38",null).exports,_=n("NYxO"),h={components:{HeaderBar:u,BottomNav:d},computed:l()({},Object(_.c)(["list"]),{listnews:function(){return this.$route.query.type?this.list[this.$route.query.type]:this.list.__all__}}),mounted:function(){this.getNews({kind:"__all__"})},methods:l()({},Object(_.b)(["getNews"])),watch:{$route:function(){console.log(this.$route.query.type),this.getNews({kind:this.$route.query.type})},listnews:function(t,e){console.log(t,e)}},data:function(){return{navbar:[{text:"推荐",url:"/home/all",type:"__all__"},{text:"热点",url:"/home/hot",type:"news_hot"},{text:"社会",url:"/home/society",type:"news_society"},{text:"娱乐",url:"/home/entertainment",type:"news_entertainment"},{text:"科技",url:"/home/tech",type:"news_tech"},{text:"汽车",url:"/home/car",type:"news_car"},{text:"体育",url:"/home/sports",type:"news_sports"},{text:"财经",url:"/home/finance",type:"news_finance"},{text:"军事",url:"/home/military",type:"news_military"},{text:"国际",url:"/home/world",type:"news_world"},{text:"时尚",url:"/home/fashion",type:"news_fashion"}]}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header-bar",[n("div",{attrs:{slot:"homeHeader"},slot:"homeHeader"},[n("mu-icon",{staticClass:"mail",attrs:{value:"mail",color:"white",size:30}}),t._v(" "),n("span",{staticClass:"logo"},[t._v("今日头条\n        "),n("mu-icon",{attrs:{value:"refresh",color:"white"}})],1),t._v(" "),n("router-link",{staticClass:"search",attrs:{to:{name:"",params:{}}}},[n("mu-icon",{staticClass:"searchicon",attrs:{value:"search",color:"white",size:30}})],1)],1)]),t._v(" "),n("ul",{staticClass:"homenav"},t._l(t.navbar,function(e,a){return n("li",{key:a,staticClass:"navbarli"},[n("router-link",{attrs:{to:{path:e.url,query:{type:e.type}}}},[t._v(t._s(e.text))])],1)})),t._v(" "),n("transition",[n("ul",{staticClass:"newsContent"},t._l(t.listnews,function(e,a){return n("router-link",{key:a,staticClass:"newsDetail",attrs:{to:{name:"newsDetail",params:{id:e.tag_id}}}},[n("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"bottomInfo clearfix"},[t._l(e.image_list,function(t,e){return n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.url,expression:"img.url"}],attrs:{alt:"加载失败"}})}),t._v(" "),n("div",{},[n("span",{staticClass:"writer"},[t._v(t._s(e.media_name))])])],2)])}))]),t._v(" "),n("div",{staticClass:"noMoreNews"},[t._v("\n      没有更多了！\n  ")]),t._v(" "),n("bottom-nav")],1)},staticRenderFns:[]};var p=n("VU/8")(h,v,!1,function(t){n("52Am")},"data-v-6248b528",null).exports,w=n("hU7x"),f=n.n(w),y={components:{HeaderBar:u},computed:l()({},Object(_.c)(["detailNews","newsTitle"])),methods:l()({},Object(_.b)(["getNewsDetail"])),created:function(){this.$route.params.id&&this.getNewsDetail({tag_id:this.$route.params.id})},watch:{$route:function(){this.$route.params.id&&this.getNewsDetail({tag_id:this.$route.params.id})}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("header-bar",{staticClass:"detailHeader"},[n("div",{attrs:{slot:"newsDetailHeader"},slot:"newsDetailHeader"},[t._v("\n      新闻详情\n    ")])]),t._v(" "),n("div",{staticClass:"newsDetailBody"},[n("div",{staticClass:"newstitle"},[n("h1",[t._v(t._s(t.newsTitle))])]),t._v(" "),n("div",{staticClass:"newscontent",domProps:{innerHTML:t._s(t.detailNews)}})])],1)},staticRenderFns:[]};var b=n("VU/8")(y,g,!1,function(t){n("0w8Q")},null,null).exports;a.default.use(o.a);var N,x=new o.a({routes:[{path:"/home/:type",name:"Home",component:p},{path:"/news/:id",name:"newsDetail",component:b},{path:"/",redirect:"./home/all?type=__all__"},{path:"/home",redirect:"./home/all?type=__all__"}],scrollBehavior:function(t,e,n){return n||{x:0,y:0}}}),C=n("bOdI"),E=n.n(C),k=(N={},E()(N,"GET_NEWSLIST",function(t,e){for(var n in t.list[e.kind]&&(t.list[e.kind]=[]),e.data)t.list[e.kind].push(e.data[n])}),E()(N,"GET_DETAILNEWS",function(t,e){t.detailNews=e.data.content,t.newsTitle=e.data.title}),N),T={getNews:function(t,e){var n=t.commit;t.state;e.kind&&f()("https://m.toutiao.com/list/?tag="+e.kind+"&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time="+parseInt((new Date).getTime()/1e3),function(t,a){n("GET_NEWSLIST",{data:a.data,kind:e.kind})})},getNewsDetail:function(t,e){var n=t.commit;t.state;f()("https://m.toutiao.com/i"+e.tag_id+"/info/",function(t,e){console.log(e.data),n("GET_DETAILNEWS",{data:e.data})})}};a.default.use(_.a);var D=new _.a.Store({state:{list:{__all__:[],news_hot:[],news_society:[],news_entertainment:[],news_tech:[],news_car:[],news_sports:[],news_finance:[],news_military:[],news_world:[],news_fashion:[]},detailNews:"",newsTitle:""},mutations:k,actions:T,getters:{list:function(t){return t.list},detailNews:function(t){return t.detailNews},newsTitle:function(t){return t.newsTitle}}}),$=(n("oPmM"),n("cTzj")),H=n.n($),A=n("u64Q"),j=n.n(A);n("E51W");a.default.use(H.a,{error:"../static/images/imgerror.jpg",loading:"../static/images/imgloading.gif"}),a.default.use(j.a),a.default.config.productionTip=!1,new a.default({el:"#app",store:D,router:x,components:{App:i},template:"<App/>"})},k10v:function(t,e){},lUo0:function(t,e){},oPmM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e22a87a4132648d79777.js.map