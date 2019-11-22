<template>
  <div class="hotspot">
    <div class="header">
      <span class="title">{{LbName}}</span>
      <span class="more">
        总榜单
        <span class="more-icon iconfont icon-jiantouarrow487"></span>
      </span>
    </div>
    <div class="list">
      <div class="series clearfix">
        <span class="icon" v-if="Ranking" style="background-image:url('http://localhost:8080/static/know-cars-image/0_img.png')"></span>
        <span class="icon"  v-else></span>
        <a href="" class="cars-name" target="_blank" title="">
          <span class="photo"></span>
          <span class="name line-1">沃尔沃S60</span>
          <span class="active price">19.05万起</span>
        </a>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name:"leaderboard",
  props: {
    LbName: {
      type: String
    },
    Ranking: {
      type: Boolean
    }
}
}
</script>

<style lang="stylus" scoped>
.hotspot
  margin-bottom 10px
  .header
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #e6e6e6;
    background-image url()
    box-sizing border-box
    .title
      font-size: 24px;
      font-weight: 500;
      color: #333333;   
    .more
      float right
</style>