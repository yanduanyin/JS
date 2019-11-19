<template>
  <div id="app">
    <img src="./assets/bg.jpg" alt="">
    <router-link to="/login">登录</router-link>
    <router-link to="/">首页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
body{
  width: 500px;
  background-color: red;
  height: 500px;
  #app{
    background-color: #eee;
  }
}
</style>