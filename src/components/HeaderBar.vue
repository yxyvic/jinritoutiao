<template lang="html">
  <header>
    <slot name="Home"></slot>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="css">
header{
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  background: #d43d3d;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  z-index: 999;
}
</style>
