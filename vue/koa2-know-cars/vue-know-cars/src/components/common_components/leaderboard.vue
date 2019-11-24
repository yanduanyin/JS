<template>
  <div>
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
          <span class="month"  v-else></span>
          <a href="" class="cars-name" target="_blank" title="">
            <span class="photo"></span>
            <span class="name line-1">沃尔沃S60</span>
            <span class="active price">19.05万起</span>
          </a>
        </div>
      </div>
    </div>  
    <div class="newcar">
      <div class="header">
        <span class="title">{{LbName}}</span>
        <span class="more">
          总榜单
          <span class="more-icon iconfont icon-jiantouarrow487"></span>
        </span>
      </div>
      <div class="list">
        <div class="series clearfix">
          <span class="month"></span>
          <a href="" class="cars-name" target="_blank" title="">
            <span class="photo"></span>
            <span class="name line-1">沃尔沃S60</span>
            <span class="active price">19.05万起</span>
          </a>
        </div>
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
    height: 60px
    line-height: 60px
    border-bottom: 1px solid #e6e6e6
    background-image url()
    box-sizing border-box
    .title
      font-size: 24px
      font-weight: 500
      color: #333333   
    .more
      float right
  .list
    padding-bottom: 16px
    .series
      height: 60px
      margin-top: 16px
      .icon
        display: inline-block
        width: 36px
        height: 36px
        margin-right: 4px
        vertical-align: middle
        background-repeat no-repeat
        background-position-x center
        background-position-y center
        background-size: 36px 36px
      .month
        margin-right: 7px
        font-size: 18px
        font-weight: 500
        vertical-align: text-top
      .cars-name
        text-decoration: none
        cursor: pointer
        color: inherit
        -webkit-text-size-adjust: none
        -webkit-touch-callout: none
        -webkit-tap-highlight-color: transparent
        .photo
          display: inline-block
          width: 90px
          height: 60px
          margin-right: 12px
          vertical-align: middle
          &:hover 
            transform: scale(1.1)
        .name
          display: inline-block
          width: 90px
          height: 22px
          font-size: 16px
          font-weight: 500
          vertical-align: text-top
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          cursor: pointer
          -webkit-transition: color 0.3s ease-in-out
          transition: color 0.3s ease-in-out
          &:hover 
            color: #406599
        .price
          float: right
          margin-top: 20px
        .active
          color: #ff9100
          font-weight: 500
          &:hover
            text-decoration: underline
            cursor: pointer
</style>