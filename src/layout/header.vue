<template>
<el-header class="header">
  <h1 class="logo">LOGO</h1>
  <div class="flex-full"></div>
  <div class="user">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar size="medium" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"></el-avatar>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人资料</el-dropdown-item>
        <el-dropdown-item>安全设置</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
  <!-- <router-link to="/login">登录</router-link> -->
</el-header>
</template>
<script>
export default {
  methods: {
    onChangeTheme (type) {
      console.log(type)
    }
  }
}
</script>