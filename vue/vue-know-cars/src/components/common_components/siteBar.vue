<template>
  <div class="site-container">
    <span class="site-icon iconfont icon-weizhi"></span>
    南昌
    <section class="cityList"></section>
    <span class="arrow-down iconfont icon-jiantou"></span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.site-container
  position relative
  float right
  margin-right 50px
  font-size 16px
  cursor pointer
  user-select none
  &:hover
    color #ffe733
  .site-icon
    display inline-block
    font-size 24px
    vertical-align middle
    margin-right 8px
    margin-top -1px
    line-height 1
  .arrow-down
    display inline-block
    font-size 16px
    color #fff
    margin-left 8px
    margin-top -3px
    vertical-align middle
    line-height 1
  .cityList
    position absolute
    top 68px
    right 0px
    z-index 1000
    width 350px
    height 616px
    color rgb(51, 51, 51)
    background-color rgb(255, 255, 255)
    box-shadow rgba(0, 0, 0, 0.2) 0px 2px 12px 0px
    overflow hidden
</style>