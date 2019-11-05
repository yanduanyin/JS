<template>
  <div class="site-container"  @click="cityListShow">
    <span class="site-icon iconfont icon-weizhi"></span>
    南昌
    <section :class="['cityList']" v-show="cityShow">
      <div class="listLt fl">
        <span data-letter="热门城市" class="listLt-item active">热</span>
        <span data-letter="a" class="listLt-item">A</span>
        <span data-letter="b" class="listLt-item">B</span>
      </div>
      <section class="listRt">
        <div class="listRt-container" data-letter="热门城市">
          <h4 class="listRtHitem">热门城市</h4>
          <div>
            <span class="listRt-item">北京</span>
            <span class="listRt-item">上海</span>
            <span class="listRt-item">广州</span>
            <span class="listRt-item">深圳</span>
            <span class="listRt-item">重庆</span>
            <span class="listRt-item">天津</span>
            <span class="listRt-item">成都</span>
            <span class="listRt-item">杭州</span>
            <span class="listRt-item">武汉</span>
            <span class="listRt-item">苏州</span>
            <span class="listRt-item">西安</span>
            <span class="listRt-item">南京</span>
          </div>
        </div>
        <div class="listRt-container" data-letter="a">
          <h4 class="listRtHitem">A</h4>
          <span class="listRt-item">北京</span>
          <span class="listRt-item">上海</span>
          <span class="listRt-item">广州</span>
          <span class="listRt-item">深圳</span>
          <span class="listRt-item">重庆</span>
          <span class="listRt-item">天津</span>
          <span class="listRt-item">成都</span>
          <span class="listRt-item">杭州</span>
          <span class="listRt-item">武汉</span>
          <span class="listRt-item">苏州</span>
          <span class="listRt-item">西安</span>
          <span class="listRt-item">南京</span>
        </div>
        <div class="listRt-container" data-letter="b">
          <h4 class="listRtHitem">C</h4>
          <span class="listRt-item">北京</span>
          <span class="listRt-item">上海</span>
          <span class="listRt-item">广州</span>
          <span class="listRt-item">深圳</span>
          <span class="listRt-item">重庆</span>
          <span class="listRt-item">天津</span>
          <span class="listRt-item">成都</span>
          <span class="listRt-item">杭州</span>
          <span class="listRt-item">武汉</span>
          <span class="listRt-item">苏州</span>
          <span class="listRt-item">西安</span>
          <span class="listRt-item">南京</span>
          <span class="listRt-item">武汉</span>
          <span class="listRt-item">苏州</span>
          <span class="listRt-item">西安</span>
          <span class="listRt-item">南京</span>
        </div>
        <div class="listRt-container" data-letter="c">
          <h4 class="listRtHitem">D</h4>
          <span class="listRt-item">北京</span>
          <span class="listRt-item">上海</span>
          <span class="listRt-item">广州</span>
          <span class="listRt-item">深圳</span>
          <span class="listRt-item">重庆</span>
          <span class="listRt-item">天津</span>
          <span class="listRt-item">成都</span>
          <span class="listRt-item">杭州</span>
          <span class="listRt-item">武汉</span>
          <span class="listRt-item">苏州</span>
          <span class="listRt-item">西安</span>
          <span class="listRt-item">南京</span>
          <span class="listRt-item">武汉</span>
          <span class="listRt-item">苏州</span>
          <span class="listRt-item">西安</span>
          <span class="listRt-item">南京</span>
        </div>
      </section>
    </section>
    <span class="arrow-down iconfont icon-jiantou"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityShow: false
    }
  },
  methods: {
   cityListShow () {
     this.cityShow = !this.cityShow
   }
  }
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
    margin-right 1px
    margin-top -1px
    line-height 1
  .arrow-down
    display inline-block
    font-size 16px
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
    .listLt
      display inline-block
      width 43px
      height 100%
      line-height 0
      vertical-align top
      padding 12px 8px
      border-right 1px solid rgb(230, 230, 230)
      box-sizing border-box
      .listLt-item
        display inline-block
        width 26px
        height 26px
        line-height 26px
        font-size 14px
        text-align center
        &:hover
          background-color rgb(255, 225, 0) !important
      .active
        font-weight 500
        background rgb(255, 225, 0)
        transition all 0.2s ease 0s
    .listRt
      width 307px
      height 100%
      position absolute
      left 43px
      overflow-x hidden
      overflow-y auto
      float right
      // transform translateZ(0px)
      margin 12px 0px
      &::-webkit-scrollbar 
        display: none
      .listRt-container
        line-height 0
        padding-bottom 8px
        .listRtHitem
          position sticky
          top 0px
          line-height 28px
          margin-bottom 8px
          padding-left 16px
          font-size 12px
          color rgb(102, 102, 102)
          background rgb(248, 248, 248)
        .listRt-item
          display inline-block
          width 23%
          line-height 22px
          text-align center
          padding 8px 0px
          &:hover
            background-color rgba(255, 225, 0, 0.2)


</style>