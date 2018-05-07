<template lang="html">
  <div class="">
    <header-bar class="detailHeader">
      <div slot="newsDetailHeader">
        新闻详情
      </div>
    </header-bar>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
export default {
  //name只有作为组件选项时起作用，允许组件模板递归地调用自身，一般情况没有用，不等同于组件标签名，组件使用的模板名为其他组件import时命得名
  // name: 'newsDetail',
  components: {HeaderBar}
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

</style>
