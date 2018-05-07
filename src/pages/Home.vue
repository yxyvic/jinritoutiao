<template lang="html">
  <div>
    <header-bar>
      <div slot="homeHeader">
        <mu-icon value="mail" class="mail" color="white" :size="30"/>
        <span class="logo">今日头条
          <mu-icon value="refresh" color="white"/>
        </span>
        <router-link :to="{ name: '', params: {} }" class="search">
          <mu-icon value="search" color="white" :size="30" class="searchicon"/>
        </router-link>
      </div>
    </header-bar>
    <ul class="homenav">
      <li v-for="(item,index) in navbar" :key="index" class="navbarli">
        <router-link :to="{ path:item.url,query:{type:item.type} }">{{item.text}}</router-link>
      </li>
    </ul>
    <transition>
    <ul class="newsContent">
      <router-link :to="{ name: 'newsDetail', params: {id:val.tag_id} }" v-for="(val,index) in listnews" :key="index"  class="newsDetail">
        <p class="title">{{val.title}}</p>
        <div class="bottomInfo clearfix">
         <!-- <img v-for="(img,index) in val.image_list" alt="加载失败"  :src="img.url">  -->
          <img v-for="(img,index) in val.image_list" alt="加载失败"  v-lazy="img.url">   <!-- 懒加载图片 -->
          <div class="">
            <span class="writer">{{val.media_name}}</span>
          </div>
        </div>
      </router-link>
    </ul>
  </transition>
  <div class="noMoreNews">
        没有更多了！
    </div>
    <bottom-nav/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import BottomNav from '@/components/BottomNav'
// import jsonp from 'jsonp'
// import axios from 'axios'
import {
  mapGetters,
  mapActions,
  mapState
} from 'vuex'
export default {
  components: {
    HeaderBar,
    BottomNav
  },
  computed: {
    ...mapGetters([ //使用对象展开运算符将此对象混入到外部对象中 将getters中的对象映射到计算属性中
      'list',
    ]),
    listnews: function() {
      if (this.$route.query.type) { //当选择某种类型新闻，根据进入路由的type，确定选用新闻list中的哪种类型
        return this.list[this.$route.query.type];
      } else { //刚进入页面没有选择新闻类型 路由为/home 默认加载type为_all_的list子项
        return this.list['__all__']
      }
    }
  },
  mounted() { //元素挂载时，初始化执行获取type为_all_的新闻
    this.getNews({
      kind: '__all__'
    })
  },
  methods: {
    ...mapActions([ //组件中使用分发Action，mapActions 辅助函数将组件的 methods 映射为store.dispatch， 在组件中使用的是actions，actions中再commit mutations改变state的值
      'getNews' //相当于执行 this.$store.dispatch('getNews') 需要先在根节点Vue实例中注入store
    ])
  },
  watch: {
    '$route': function() {
      console.log(this.$route.query.type);
      this.getNews({ //当路由发生变化时，根据路由中的type，重新执行getNews，传入参数，新闻类型，获取不同类型新闻数据 传入的参数对应actions中的第二个载荷参数
        kind: this.$route.query.type
      });
      // jsonp('http://m.toutiao.com/list/?tag=' + this.$route.query.type + '&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000),
      //   function (err,res) {
      //     console.log(res.data);
      //   }
      // )
    },
    'listnews': function(val, oldval) {
      console.log(val, oldval);
    }
  },
  data() {
    return {
      navbar: [{
          text: '推荐',
          url: '/home/all',
          type: '__all__'
        },
        {
          text: '热点',
          url: '/home/hot',
          type: 'news_hot'
        },
        {
          text: '社会',
          url: '/home/society',
          type: 'news_society'
        },
        {
          text: '娱乐',
          url: '/home/entertainment',
          type: 'news_entertainment'
        },
        {
          text: '科技',
          url: '/home/tech',
          type: 'news_tech'
        },
        {
          text: '汽车',
          url: '/home/car',
          type: 'news_car'
        },
        {
          text: '体育',
          url: '/home/sports',
          type: 'news_sports'
        },
        {
          text: '财经',
          url: '/home/finance',
          type: 'news_finance'
        },
        {
          text: '军事',
          url: '/home/military',
          type: 'news_military'
        },
        {
          text: '国际',
          url: '/home/world',
          type: 'news_world'
        },
        {
          text: '时尚',
          url: '/home/fashion',
          type: 'news_fashion'
        },
      ],
    }
  }
}
</script>

<style scoped lang="css">
.mail{
  float: left;
  margin-top: 0.22rem;
  margin-left: 0.22rem;
}
.logo{
  color: #fff;
  font-size: 18px;
  vertical-align: bottom;
}
.logo i{
  vertical-align: middle;
}
.search{
  float: right;
}
.search .searchicon{
  margin-top: 0.22rem;
  margin-right: 0.22rem;
}
.homenav{
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  position: fixed;
  left: 0;
  font-size: 0;
  top: 1.2rem;
  background: #f4f5f6;
  font-family: '微软雅黑';
  white-space: nowrap;
  z-index: 999;
}
.navbarli{
  display: inline-block;
  height: 1rem;
  line-height: 1rem;
  width: 1.4rem;
  font-size: 16px;
}
/* 隐藏滚动条 */
::-webkit-scrollbar {
    display: none;
}
.navbarli a{
  color: #000;
}
.navbarli .router-link-active{
  color: #d43d3d;
  font-size: 17px;
  font-weight: bold;
}
.newsContent{
  margin-top: 2.3rem;
  width: 100%;
}
.newsDetail {
  width: 94%;
  display: block;
  position: relative;
  margin: 0 auto;
  padding-bottom: 0.15rem;
}
.newsContent .newsDetail:after {
  content:"";
  box-sizing:border-box;
	position:absolute;
  width:100%;
	left:0;
  bottom:0;
  border-top:1px solid #ccc
}
@media screen and (-webkit-min-device-pixel-ratio:3) {
	.newsContent .newsDetail:after {
	transform:scaleY(.33333)
  }
}
@media screen and (-webkit-min-device-pixel-ratio:2) {
	.newsContent .newsDetail:after {
	transform:scaleY(.5)
  }
}
.newsContent .newsDetail .title {
	font-size:16px;
	font-weight:700;
	color:#000;
	padding-top:.2rem;
	padding-bottom:.15rem
}
img {
  width: 31.1%;
  margin-right: 0.21rem;
  height: 2.3rem;
}
.writer {
  color: #000;
}
.newsContent .newsDetail .bottomInfo {
	font-size:10px;
	margin-top:.15rem
}
.noMoreNews {
  margin-bottom: 1.3rem;
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  color: #000;
  font-size: 18px;
  text-align: center;
}
</style>
