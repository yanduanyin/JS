<template>
  <div class="wrapper clearfix">
    <div class="fl wrapper-switch">
      <div class="swiper-container">
        <div class="img-wrapper">
          <div class="img-parent-box" ref="parent">
            <a href="https://www.dcdapp.com/article/6756500835833741836" class="img-item-box fl" v-for="(item, index) in url" :key="index" ref="item">
              <img :src="item.url" alt="" class="img-item" >
            </a>
          </div>
        </div>
        <div class="swiper-pagination" ref="pagination">
          <span :class="['swiper-pagination-bullet', {'active':currentIndex === index}]"
           v-for="(item, index) in cirArr" :key="index" @click="clickCirN(index)"></span>
        </div>
        <div class="swiper-button-next button" @click="clickNext">
          <span></span>
        </div>
        <div class="swiper-button-prev button" @click="clickPrev">
          <span></span>
        </div>
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
      ],
      url: [
        {url: 'https://p3.pstatp.com/obj/17492000011dd357938ac.jpg'},
        {url: 'https://p3.pstatp.com/obj/1749500001118411c9039.jpg'},
        {url: 'https://p3.pstatp.com/obj/174950000111a0d8a692e.jpg'},
        {url: 'https://p3.pstatp.com/obj/1749500001119e5971af9.jpg'},
        {url: 'https://p3.pstatp.com/obj/17492000011e4cd85d7fe.jpg'}
      ]
    }
  },
  created() {
    this.$nextTick(() => {
     
    })
  },
  computed: {
    
  },
  methods: {
  }
}
</script>

<style lang="stylus">
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
      width: 800px;
      min-width: 800px;
      list-style none
      padding 0
      z-index 1
      .img-wrapper
        position relative
        width: 800px;
        min-width: 800px;
        height: 316px;
        min-height: 316px;
        overflow hidden
        padding 0
        .img-parent-box
          position absolute
          left 0
          top 0
          width 3200px
          .img-item-box
            width: 800px;
            .img-item
              width: 800px;
              min-width: 800px;
              height: 316px;
              min-height: 316px;
              background-size: cover;
              overflow: hidden;
      .swiper-pagination
        line-height 20px
        bottom: 0px
        left: 0
        width: 100%
        position: absolute
        text-align: center
        -webkit-transition: 300ms opacity
        transition: 300ms opacity
        -webkit-transform: translate3d(0, 0, 0)
        transform: translate3d(0, 0, 0)
        z-index: 10
        .swiper-pagination-bullet
          display: inline-block
          margin: 0 4px
          cursor: pointer
          width: 8px
          height: 8px
          border-radius: 100%
          background-color: #e6e6e6
        .active
          width: 24px
          height: 8px
          border-radius: 4px
          background-color: #ffe100
      .button
        position: absolute
        top: 50%
        margin-top: -45px
        width: 50px
        height: 90px
        opacity: 0.2
        background-color: #000000
        z-index: 10
        cursor: pointer
      .swiper-button-next
        right 0
        border-radius 8px 0 0 8px
        &::after
          content: ''
          display: inline-block
          width: 19px
          height: 32px
          position: relative
          top: 50%
          left: 50%
          margin-top: -16px
          margin-left: -9.5px
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAABgCAYAAACnmdq6AAAAAXNSR0IArs4c6QAAAkhJREFUeAHtnD9OwzAYxVsGFipGrsGGxMIKV+IYPQA3gBUhISExMbKwoi6dqeAC4blqrNTYsaPa8uePZ8mq/zX2z34viSrXsxkDZ0DPDHRdd2aiHqIdCaAWiEvENWIfTNqULZoHBsQ54goxFFaouGgWFIM/RvxAjIVvNLhsEhQDv43RDerbBAXAywAiJdkeKKi+UsicNuJBjxxfbZx8SvYUjZ4ALtajLuR7CpWnjXhQO2asxrUjxalZ8dLdwoLqbiqZ014+KAZ8gvjqDHxqlqDWH7UTXNFp4qV0ayvW9k/pUrreGaBHrUdqJ+hRr0KDhZRubcXa/indoEq9FZSulU7tBKXrVWiwkNKtrVjbP6UbVKm3gtK10qmdoHS9Cg0WUrq1FWv7p3SDKvVWULpWOrUTlK5XocHCfyVd2btSMkl3hevI3meUCXRZ+14T7T8D6DraiYQGGUD39gK6GyMkMOofQ4ZV/CNXUStpALGMj4hXByznwwHfLfvVDCuIS2x3d8p8hGQCNG89Ml8GMgLK3PZGQMxAQpD7Yo7B6971RcAEfaIJJVr2aT5ydUqUEt3OAD044pKyVfQgPUgPlvVY7Or0ID1ID8ZcUraeHqQH6cGyHotdnR6kB+nBmEvK1tODrXvQ6AMMuv+4DUD9f8EH5H2aGr2t5P6qNryFYeif3uHHC9sA3PlR5QEnw4U0Nx2VR9W4uz+e96jHMz+ovpnP52/jzYTVYiX1Hx9l5hygug8C64UFUN1HuvWg/SeAdR7O1wPykzMgawZ+ARwclMWJw6EYAAAAAElFTkSuQmCC')
          background-repeat: no-repeat
          background-size: cover
        &:hover
          opacity: 0.4
      .swiper-button-prev
        left 0
        border-radius 0 8px 8px 0
        &::after
          content: '';
          display: inline-block;
          width: 19px;
          height: 32px;
          position: relative;
          top: 50%;
          left: 50%;
          margin-top: -16px;
          margin-left: -9.5px;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAABACAYAAAB2kAXpAAAAAXNSR0IArs4c6QAAAgJJREFUaAXt2kFKxTAQBuBX8RTiwht4heIJBJfuBM+gqFvBO/hw51Jx6Up6hXcDF+IphPqPZEpsX9sknZlk8QJ9ado08zGPlqbtarUrcRmo4rrL9W7b9gCjHbsRN1VVffujm8MAopiXWC6w7DvMD+o1cGvXXpnCHOoWwU8Z0KvvgHunbXu9HWrNABTFPmeACSwQRaYjM1gEikxfJrBIFJle1GEJqA91WAKqAeoGZ2TLGRO/XCSiroGia1lXRGFSKNKJwSRRYjBplAhMA7UYpoVaBNNEJcO0UUkwC1Q0zAoVBbNEBcOsUUGwHKhZWC7UJCwnahSWG7UVVgJqACsFRbD+9I1myGOTUervlwaNwZ2n32HJenejiGzRs4RXLDxtnxq3wU41FAX2M0YPOIpA9WHULqb4GdtA9W+mMqKssf0Bf31IdkeGmN/cwTB9oudTT/OH/PWo8auK62AO9Ij6za3PVTU6qOG6s5IVpVzLBjACloDbCisBNwrLjZuE5cTNwnLhgmA5cMEwa1wUzBIXDbPCJcEscMkwbdwimCZuMUwLJwLTwInBpHGiMEmcOEwKpwJLxNFLrit+n9S/56cxRYoLcI/BQucQJ+h7xsHVYBQgAWcDS8AdmmSMg0Rk7pOPUf0rOQjVgbhnPkbtrOQA/dpNDcv6IMRHAjj5CY3fd7cekoFfCpo+slA7IxYAAAAASUVORK5CYII=');
          background-repeat: no-repeat;
          background-size: cover;
        &:hover
          opacity: 0.4
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