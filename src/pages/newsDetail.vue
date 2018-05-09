<template lang="html">
  <div class="">
    <header-bar class="detailHeader">
      <div slot="newsDetailHeader">
        新闻详情
      </div>
    </header-bar>
    <div class="newsDetailBody">
      <div class="newstitle">
        <h1>{{newsTitle}}</h1>
      </div>
      <div class="newscontent" v-html="detailNews">
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
      'newsTitle',
    ])
  },
  methods: {
    ...mapActions([
      'getNewsDetail'
    ])
  },
  created(){    //初始第一次进入界面时获取第一次新闻详情信息
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
