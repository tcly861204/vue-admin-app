<template>
<div class="home rflex">
  home
  <router-view></router-view>
</div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>
<style scoped lang='less'>
.home{
  .menu_right{
    overflow: auto;
    position: absolute;
    right:0;
    top:0;
    bottom:0;
    background:#F6F7FC;
    .menu_content{
      position: relative;
      margin-top:60px;
      width:100%;
      background:#f0f2f5;
    }
  }
}
</style>
