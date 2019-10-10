<template>
<el-container class="warpper">
  <Header></Header>
  <el-container class="main">
    <Sidebar></Sidebar>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  <el-footer class="footer">Footer</el-footer>
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