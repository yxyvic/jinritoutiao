<template lang="html">
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="home" title="首页" icon="home"/>
      <mu-bottom-nav-item value="star" title="收藏" icon="star"/>
      <mu-bottom-nav-item value="favorite" title="关注" icon="favorite"/>
      <mu-bottom-nav-item value="account_box" title="我的" icon="account_box"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
export default {
  data () {
   return {
     bottomNav: 'home',
     bottomNavColor: 'home'
   }
 },
 methods: {
   handleChange (val) {
     this.bottomNav = val
   }
 }
}
</script>

<style scoped lang="css">
.mu-paper{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
