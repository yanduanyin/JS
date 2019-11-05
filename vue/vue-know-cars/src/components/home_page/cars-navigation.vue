<template>
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
      <div class="icon4 public"></div>
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
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
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