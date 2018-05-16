<template lang="html">
  <div class="">
    <header-bar class="detailHeader">
      <div slot="newsDetailHeader">
       <mu-icon value="arrow_back_ios" class="backarrow" :size="30" @click.native="goBack"/>    <!-- 组件中v-on只能绑定自定义事件，绑定原生事件需要加上.native修饰符 -->
        新闻详情
        <mu-icon value="more_horiz" class="more_horiz" :size="30"/>
      </div>
    </header-bar>
    <div class="newsDetailBody">
      <div class="newstitle">
        <h1>{{detailNews.title}}</h1>
      </div>
      <div class="media_user">
        <span><img :src="detailNews.media_user.avatar_url" class="authorImg"></span>
        <span class="screen_name">{{detailNews.media_user.screen_name}}</span>
        <span class="publish_time">{{publishTime}}</span>
      </div>
      <div class="newscontent" v-html="detailNews.content">
      </div>
    </div>
    </div>

</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import jsonp from 'jsonp'
import {
  mapGetters,
  mapActions,
  mapState
} from 'vuex'
export default {
  //name只有作为组件选项时起作用，允许组件模板递归地调用自身，一般情况没有用，不等同于组件标签名，组件使用的模板名为其他组件import时命得名
  // name: 'newsDetail',
  components: {HeaderBar},
  computed: {
    ...mapGetters([ //使用对象展开运算符将此对象混入到外部对象中 将getters中的对象映射到计算属性中
      'detailNews',
    ]),
    publishTime: function() {
      return new Date(this.detailNews.publish_time*1000).toLocaleString('chinese',{hour12:false})
    },
  },
  methods: {
    ...mapActions([
      'getNewsDetail'
    ]),
    goBack() {
      this.$router.back()     //router实例方法，router.go(n) router.back()后退路由，组件中使用this.$router.back()调用
    }
  },
  mounted(){    //初始第一次进入界面时获取第一次新闻详情信息
    if (this.$route.params.id) {
      this.getNewsDetail({
        tag_id: this.$route.params.id
      })
    }
  },
  watch: {
    '$route': function(){   //之后每次切换新闻，监听路由变换重新获取
      if (this.$route.params.id) {
        this.getNewsDetail({
          tag_id: this.$route.params.id
        })
      }
    }
  }
}
</script>

<style lang="css">
.detailHeader{
  background: #fff;
  font-size: 18px;
  font-weight: bold;
  color: #000;
}
/* 使用伪元素在detailHeader后加一个1px细线 */
.detailHeader::after{
  content: "";
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border-top: 1px solid #ccc;
}
/* 媒体查询，根据不同设备的设备像素比率，由于设备像素比率大，实际设置1px，设备会放大倍数1px，使得线宽变粗，通过媒体查询，在y方向缩小元素，使其在不同设备都为真正1px*/
@media screen and (-webkit-min-device-pixel-ratio:3) {
	.detailHeader::after {
	transform:scaleY(.33333)
  }
}
@media screen and (-webkit-min-device-pixel-ratio:2) {
	.detailHeader::after {
	transform:scaleY(.5)
  }
}
.backarrow{
  float: left;
  line-height: 1.2rem;
  margin-left: 0.2rem;
}
.more_horiz{
  float: right;
  line-height: 1.2rem;
  margin-right: 0.2rem;
}
.media_user{
  position: relative;
  margin-top: 10px;
}
.authorImg{
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
}
.screen_name{
  position: absolute;
  left: 1.2rem;
  top: 2px;
  font-weight: 600;
  color: #000;
  font-size: 14px;
}
.publish_time{
  position: absolute;
  left: 1.2rem;
  bottom: 3px;
  font-size: 11px;
  color: #999;
}
.newsDetailBody{
  margin-top: 1.4rem;
  padding-left: 14px;
  padding-right: 14px;
}
.newsDetailBody .newstitle h1{
  color: #000;
    font-size: 22px;
    line-height: 1.45;
    font-weight: 600;
}
.newsDetailBody .newscontent p {
  word-wrap: break-word;
  color: #000;
  margin-top: 16px;
  font-size: 17px;
  line-height: 27px;
}
.newsDetailBody .newscontent img{
    width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 4px;
    margin-bottom: 4px;
    transition: opacity 200ms ease;
}
</style>
