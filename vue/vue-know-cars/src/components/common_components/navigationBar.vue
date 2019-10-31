<template>
  <div id="home_page">
    <div class="header_mg">
      <a href="http://localhost:8080/#/" class="dcd_login fl"></a>
      <router-link to="/" class="nvg-alink fl">首页</router-link>
      <router-link to="/auto" class="nvg-alink fl">车型库</router-link>
      <router-link to="/video" class="nvg-alink fl">视频</router-link>
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
  font-size 18px
  color #ffffff
  background #333
  box-shadow 0 2px 10px 0 rgba(0,0,0,0.12)
  .header_mg
    width 1200px
    margin 0 auto
    .dcd_login
      display inline-block
      width 133px
      height 40px
      margin 14px 8px 0 0
      vertical-align middle
      border-radius 5px
      background url('http://localhost:8080/static/know-cars-image/logo-img@3x.png') no-repeat
      background-size 133px 40px
    .nvg-alink
      display inline-block
      line-height 68px
      color #fff
      text-decoration none // 去掉下划线
      margin-left 50px
      letter-spacing 0 // 字符间距  
</style>