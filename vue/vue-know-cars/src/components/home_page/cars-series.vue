<template>
  <div class="series-wrapper clearfix">
    <div class="seriesFl fl">
      
    </div>
    <div class="seriesRt fl">
      <div class="title-container">
        <span class="titleFl">热门品牌</span>
        <a href="" class="icon-title">
          更多品牌
          <span class="icon iconfont icon-jiantouarrow487"></span>
        </a>
      </div>
      <div class="brands">
        <div class="list">
          <router-link to="/auto?key=brand&param=1&text=大众" target="_blank" class="brands-routeLink">
            <img src="http://localhost:8080/static/know-cars-image/car1.png" alt="" class="brands-item">
            <span>大众</span>
          </router-link>
          <router-link to="/auto?key=brand&param=1&text=大众" target="_blank" class="brands-routeLink">
            <img src="http://localhost:8080/static/know-cars-image/car2.png" alt="" class="brands-item">
            <span>奥迪</span>
          </router-link>
          <router-link to="/auto?key=brand&param=1&text=大众" target="_blank" class="brands-routeLink">
            <img src="http://localhost:8080/static/know-cars-image/car3.png" alt="" class="brands-item">
            <span>奔驰</span>
          </router-link>
          <router-link to="/auto?key=brand&param=1&text=大众" target="_blank" class="brands-routeLink">
            <img src="http://localhost:8080/static/know-cars-image/car4.png" alt="" class="brands-item">
            <span>宝马</span>
          </router-link>
          <router-link to="/auto?key=brand&param=1&text=大众" target="_blank" class="brands-routeLink">
            <img src="http://localhost:8080/static/know-cars-image/car5.png" alt="" class="brands-item">
            <span>丰田</span>
          </router-link>
        </div>
        <div class="list">
          <router-link to="/auto?key=brand&param=1&text=大众" target="_blank" class="brands-routeLink">
            <img src="http://localhost:8080/static/know-cars-image/car1.png" alt="" class="brands-item">
            <span>雪佛兰</span>
          </router-link>
          <router-link to="/auto?key=brand&param=1&text=大众" target="_blank" class="brands-routeLink">
            <img src="http://localhost:8080/static/know-cars-image/car2.png" alt="" class="brands-item">
            <span>福特</span>
          </router-link>
          <router-link to="/auto?key=brand&param=1&text=大众" target="_blank" class="brands-routeLink">
            <img src="http://localhost:8080/static/know-cars-image/car3.png" alt="" class="brands-item">
            <span>长城</span>
          </router-link>
          <router-link to="/auto?key=brand&param=1&text=大众" target="_blank" class="brands-routeLink">
            <img src="http://localhost:8080/static/know-cars-image/car4.png" alt="" class="brands-item">
            <span>本田</span>
          </router-link>
          <router-link to="/auto?key=brand&param=1&text=大众" target="_blank" class="brands-routeLink">
            <img src="http://localhost:8080/static/know-cars-image/car5.png" alt="" class="brands-item">
            <span>日产</span>
          </router-link>
        </div>
      </div>
      <a href="https://www.dcdapp.com/download/" target="_blank" class="download">下载懂车帝APP 看车 选车 买车</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style  lang="stylus" scoped>
.series-wrapper
  .seriesFl
    width 800px
    height 296px
    border-top 0
  .seriesRt
    width 380px
    min-height 215px
    font-size 16px
    border-top 0
    border-left 0
    margin-left 8px
    .title-container
      height 60px
      line-height 60px
      padding 0 20px
      border-bottom 1px solid #e6e6e6
      .titleFl
        font-size 24px
        font-weight 500
      .icon-title
        float right
        &:hover 
          color #406599
    .brands
      box-sizing border-box
      .list
        padding 0 15px 10px
        .brands-routeLink
          display inline-block
          width 66px
          margin-top 10px
          // margin-right 2px
          text-align center
          cursor pointer
          &:hover 
            color #406599
          .brands-item
            display block
            width 36px
            height 36px
            margin-left 15px
          span 
            text-align center
            cursor pointer
    .download
      width 340px
      height 52px
      margin 2px 20px 0
      display inline-block
      border 1px solid #ff9100
      background-color rgba(255,145,0,0.2)
      font-size 18px
      line-height 52px
      color #ff9100
      text-align center
</style>