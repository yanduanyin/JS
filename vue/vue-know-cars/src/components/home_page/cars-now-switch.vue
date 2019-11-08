<template>
  <div class="wrapper clearfix">
    <div class="fl wrapper-switch">
      <div class="swiper-container">
        <div class="img-wrapper">

        </div>
        <div class="swiper-pagination">

        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
    <div class="today-news fl">
      <span class="today-news-title"></span>
      <ul class="news-list">
        <a :href="item.newsUrl" target="_blank" v-for="(item, index) in todayNewsData" :key="index">
          <li class="line-1">{{item.newsTitle}}</li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todayNewsData: [
        {
          newsUrl: 'https://www.dcdapp.com/article/6756574750555783687',
          newsTitle: '中国制造特斯拉Model 3首发亮相，续航460公里，2020年一季度交付'
        },
        {
          newsUrl: 'https://www.dcdapp.com/article/6756574750555783687',
          newsTitle: '美国SEMA2019改装展--百年福特传奇继续'
        },
        {
          newsUrl: 'https://www.dcdapp.com/article/6756574750555783687',
          newsTitle: '410km续航/定位紧凑型SUV 雪佛兰首款纯电车型畅巡将于今晚亮相'
        },
        {
          newsUrl: 'https://www.dcdapp.com/article/6756574750555783687',
          newsTitle: '福特纯电动SUV测试谍照曝光 采用Mustang风格'
        },
        {
          newsUrl: 'https://www.dcdapp.com/article/6756574750555783687',
          newsTitle: '家族全新风格，拉低门槛价格，马自达新款CX-4今晚上市'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  margin-top 10px
  .wrapper-switch
    display inline-block
    width 800px
    min-width 800px
    height 316px
    min-width 316px
    background-size cover
    overflow hidden
    .swiper-container
      margin 0 auto 
      position relative
      overflow hidden
      list-style none
      padding 0
      z-index 1
      .img-wrapper
        position relative
        width 100%
        height 100%
      .swiper-button-next
        right 0
        border-radius 8px 0 0 8px
      .swiper-button-prev
        left 0
        border-radius 0 8px 8px 0
  .today-news
    width: 380px
    height: 316px
    margin-left: 9px
    overflow: hidden
    .today-news-title
      display block
      width: 381px
      height: 60px
      background-image: url('http://localhost:8080/static/know-cars-image/today-news.png')
      background-size: cover
    .news-list
      width: 100%
      height: 256px
      padding: 10px 20px
      background-image: linear-gradient(to bottom,#333333,#000000)
      .line-1
        display block
        height: 47.2px
        line-height: 47.2px
        font-size: 18px
        color: #ffffff
        cursor: pointer
        overflow: hidden
        text-overflow: ellipsis
        &:hover
          line-height: initial
          color: #ffe3a3
          white-space: initial
          display: -webkit-box
          -webkit-box-pack: center
          -webkit-line-clamp: 2
          line-clamp: 2
          -webkit-box-orient: vertical
          -webkit-box-align: start
      

</style>