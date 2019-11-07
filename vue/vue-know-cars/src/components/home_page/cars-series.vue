<template>
  <div class="series-wrapper clearfix">
    <div class="seriesFl fl">
      <ul class="title-ul">
        <div  v-for="(item, index) in seriesName" :key="index" class="title-li-box" @mousemove="moveIn(index)">
          <li :class="['title-li', {'active':currentIndex === index}]">
          <span>{{item.name}}</span>
        </li>
        </div>
      </ul>
      <div class="car-list">
        <div class="box clearfix">
          <div class="series1">
            <router-link to="https://www.dcdapp.com/auto/series/99"  target="_blank" class="box-routeLink" title="">
              <span></span>
              <div class="name-wrapper">
                <span class="series-name"></span>
              </div>
            </router-link>
            <div class="series1-item-down">
              <ul>
                <li class="series1-down-li">
                  <a href="https://www.dcdapp.com/dealer/542?zt=default_pc_pc_home_top_series" target="_blank">
                    <span>报价</span>
                  </a>
                </li>
                <li class="series1-down-li">
                  <a href="https://www.dcdapp.com/dealer/542?zt=default_pc_pc_home_top_series" target="_blank">
                    <span>图库</span>
                  </a>
                </li>
                <li class="series1-down-li">
                  <a href="https://www.dcdapp.com/dealer/542?zt=default_pc_pc_home_top_series" target="_blank">
                    <span>参数</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
  data() {
    return {
      seriesName: [
        {name: '热门车型'},
        {name: '国产'},
        {name: '德系'},
        {name: '日系'},
        {name: '10-15万'},
        {name: '15-25万'},
        {name: '25-35万'},
        {name: '35万以上'}
      ],
      moveIndex: 0,
      seriesData1: '',
      seriesData2_3: ''
    }
  },
  computed: {
    currentIndex () {
      return this.moveIndex
    }
  },
  created() {
    this.init(this.moveIndex)
  },
  methods: {
    moveIn (index) {
      this.moveIndex = index
      // console.log(index)
      // this.init(index)
    },
    init (idx) {
      switch (idx) {
        case 0:
          this.$http.get('http://localhost:8080/static/Data/shouye/series_json/series_germany.json')
          .then(res => {
            console.log('seriesData:', res.data.data.series)
            this.seriesData1 = res.data.data.series.slice(0,7)
            // console.log(this.seriesData1) 
            this.seriesData2_3 = res.data.data.series.slice(7, 21)
            // console.log(this.seriesData2_3)
          })
          break;
        case 1:
          this.$http.get('http://localhost:8080/static/Data/shouye/series_json/series_China.json')
          .then(res => {
            console.log('seriesData:', res.data.data.series)
            this.seriesData1 = res.data.data.series.slice(0,7)
            // console.log(this.seriesData1) 
            this.seriesData2_3 = res.data.data.series.slice(7, 21)
          })
          break;
        case 2:
          this.$http.get('http://localhost:8080/static/Data/shouye/series_json/series_popular.json')
          .then(res => {
            console.log('seriesData:', res.data.data.series)
            this.seriesData1 = res.data.data.series.slice(0,7)
            // console.log(this.seriesData1) 
            this.seriesData2_3 = res.data.data.series.slice(7, 21) 
          })
          break;
        case 3:
          this.$http.get('http://localhost:8080/static/Data/shouye/series_json/series_japan.json')
          .then(res => {
            console.log('seriesData:', res.data.data.series)
            this.seriesData1 = res.data.data.series.slice(0,7)
            // console.log(this.seriesData1) 
            this.seriesData2_3 = res.data.data.series.slice(7, 21)
          })
          break;
        case 4:
          this.$http.get('http://localhost:8080/static/Data/shouye/series_json/series_10-15.json')
          .then(res => {
            console.log('seriesData:', res.data.data.series)
            this.seriesData1 = res.data.data.series.slice(0,7)
            // console.log(this.seriesData1) 
            this.seriesData2_3 = res.data.data.series.slice(7, 21)
          })
          break;
        case 5:
          this.$http.get('http://localhost:8080/static/Data/shouye/series_json/series_15-25.json')
          .then(res => {
            console.log('seriesData:', res.data.data.series)
            this.seriesData1 = res.data.data.series.slice(0,7)
            // console.log(this.seriesData1) 
            this.seriesData2_3 = res.data.data.series.slice(7, 21) 
          })
          break;
        case 6:
          this.$http.get('http://localhost:8080/static/Data/shouye/series_json/series_25-35.json')
          .then(res => {
            console.log('seriesData:', res.data.data.series)
            this.seriesData1 = res.data.data.series.slice(0,7)
            // console.log(this.seriesData1) 
            this.seriesData2_3 = res.data.data.series.slice(7, 21) 
          })
          break;
        case 7:
          this.$http.get('http://localhost:8080/static/Data/shouye/series_json/series_35~.json')
          .then(res => {
            console.log('seriesData:', res)
            this.seriesData1 = res.data.data.series.slice(0,7)
            // console.log(this.seriesData1) 
            this.seriesData2_3 = res.data.data.series.slice(7, 21)
          })
          break;
      }
    }
  }
}
</script>

<style  lang="stylus" scoped>
.series-wrapper
  .seriesFl
    width 800px
    height 296px
    border-top 0
    .title-ul
      height 60px
      line-height 60px
      font-size 18px
      font-weight 500
      border-bottom 1px solid #e6e6e6
      padding-left 20px
      .title-li-box
          display inline-block
          margin-right 40px
        .title-li
          &:hover 
            cursor pointer
        .active
          position relative
          &::after
            content: ''
            position: absolute
            left: 0
            bottom: 0
            width: 100%
            height: 4px
            background-color: #333
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