<template>
  <div id="home_page">
    <div class="header_mg">
      <a href="http://http://localhost:8080/#/" class="dcd_Login"></a>
      <router-link to="/" class="nvg-alink">首页</router-link>
      <router-link to="/auto" class="nvg-alink">车型库</router-link>
      <router-link to="/video" class="nvg-alink">视频</router-link>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
#home_page
  min-width 1200
  height 68px
  line-height 68px
  margin 0 auto
  color #ffffff
  font-size 18px
  background #333
  box-shadow 0 2px 10px 0 rgba(0,0,0,0.12)
  .header_mg
    width 1200px
    margin 0 auto
    .dcd_Login
      display inline-block
      background url('http://localhost:8080/static/know-cars-image/logo-img@3x.png)
    .nvg-alink
      color #fff
      text-decoration none
    .nvg-alink:hover
      color #ffe100

    
</style>