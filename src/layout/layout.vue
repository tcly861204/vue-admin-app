<template>
<el-container>
  <Header></Header>
<el-container>
  <Sidebar></Sidebar>
  <el-main>
    <router-view></router-view>
  </el-main>
</el-container>
<el-footer>Footer</el-footer>
</el-container>
</template>
<script>
import Sidebar from './sidebar'
import Header from './header'
export default {
  components: {
    Sidebar,
    Header
  }
}
</script>
<style lang="less">
html, body{
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
