<template>
  <div class="wrapper">
  <div class="advert-container">
    <a href="https://www.dcdapp.com/article/6667837824596705804" class="advert">
      <img src="https://p3-tt.bytecdn.cn/obj/motor-business/ad/1bea5775d94ca9781c992985fe401d9b" alt>
      <span>广告</span>
    </a>
  </div>
  <div class="cars-nav">
    <a href="#/auto?key=series_type&param=0&text=轿车" target="_blank" class="whole fl">
      <div class="icon1 public"></div>
    </a>
    <a href="#/auto?key=series_type&param=1&text=SUV" target="_blank" class="whole fl">
      <div class="icon2 public"></div>
    </a>
    <a href="#/auto?key=series_type&param=2&text=MPV" target="_blank" class="whole fl">
      <div class="icon3 public"></div>
    </a>
    <a href="#/auto?key=series_type&param=4&text=跑车" target="_blank" class="whole fl">
      <div class="icon4 public"></div>''
    </a>
    <a href="#/auto?key=series_type&param=3&text=皮卡" target="_blank" class="whole fl">
      <div class="icon5 public"></div>
    </a>
    <a href="#/auto?key=series_type&param=7&text=微面" target="_blank" class="whole fl">
      <div class="icon6 public"></div>
    </a>
    <a href="#/auto?key=series_type&param=8&text=微卡" target="_blank" class="whole fl">
      <div class="icon7 public"></div>
    </a>
    <a href="#/auto?key=series_type&param=6&text=轻客" target="_blank" class="whole fl">
      <div class="icon8 public"></div>
    </a>
  </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.wrapper
  .advert-container
    height 110px
    .advert
      display block
      position relative
      margin 10px 0px  
    span 
      position absolute
      right 8px
      bottom 8px
      height 16px
      line-height 16px
      text-align center
      font-size 10px
      color rgba(255, 255, 255, 0.8)
      padding 0px 3px
      background rgba(0, 0, 0, 0.3)
      border-radius 2px
  .cars-nav
    margin-top 10px
    height 84px
    .whole
      display block
      width 148px
      height 100%
      .public
        width 148px
        height 84px
        background-repeat no-repeat
        cursor pointer
        background-image url('http://localhost:8080/static/know-cars-image/series@2x-.png')
        background-size 1190px 168px
      .icon1
        background-position -0px 0px
        &:hover
          background-position -0px -84px
      .icon2
        background-position -148px 0px
        &:hover
          background-position -148px -84px
      .icon3
        background-position -296px 0px
        &:hover
          background-position -296px -84px
      .icon4
        background-position -444px 0px
        &:hover
          background-position -444px -84px
      .icon5
        background-position -592px 0px
        &:hover
          background-position -592px -84px
      .icon6
        background-position -740px 0px
        &:hover
          background-position -740px -84px
      .icon7
        background-position -888px 0px
        &:hover
          background-position -888px -84px
      .icon8
        background-position -1036px 0px
      &:hover
        background-position -1036px -84px
</style>