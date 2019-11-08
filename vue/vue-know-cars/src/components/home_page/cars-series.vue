<template>
  <div class="series-wrapper clearfix">
    <div class="seriesFl fl">
      <ul class="title-ul">
        <div  v-for="(item, index) in seriesName" :key="index" class="title-li-box" @mouseenter="moveIn(index)">
          <li :class="['title-li', {'active':currentIndex === index}]">
            <span>{{item.name}}</span>
          </li>
        </div>
      </ul>
      <div class="car-list">
        <div class="box" clearfix>
          <div class="series1 fl"  v-for="(item, index) in seriesData1" :key="'info1-'+index">
            <router-link :to="'https://www.dcdapp.com/auto/series/' + item.id"  target="_blank" class="box-routeLink" :title="item.outter_name">
              <span :style="'backgroundImage: url(' + item.cover_url + ')'"></span>
              <div class="name-wrapper">
                <span class="series-name">{{item.outter_name}}</span>
                <span class="tag" v-show="item.series_status_tag">新</span>
              </div>
            </router-link>
            <div class="series1-item-down">
              <ul class="series1-down-ul">
                <li class="series1-down-li">
                  <a :href="'https://www.dcdapp.com/dealer/' + item.concern_id + '?zt=default_pc_pc_home_top_series'" target="_blank" :title="item.outter_name">
                    <span>报价</span>
                  </a>
                </li>
                <li class="series1-down-li">
                  <a :href="'https://www.dcdapp.com/auto/series/' + item.concern_id + '/images/wg'" target="_blank" :title="item.outter_name">
                    <span>图库</span>
                  </a>
                </li>
                <li class="series1-down-li">
                  <a :href="'https://www.dcdapp.com/auto/params?carIds='+item.car_ids+''" target="_blank" :title="item.outter_name">
                    <span>参数</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="series1 fl"  v-for="(item, index) in seriesData2_3" :key="index">
            <router-link to="https://www.dcdapp.com/auto/series/99"  target="_blank" class="box-routeLink" :title="item.outter_name">
              <!-- <span :style="'backgroundImage: url(' + item.cover_url + ')'"></span> -->
              <div class="name-wrapper">
                <span class="series-name">{{item.outter_name}}</span>
                <span class="tag" v-show="item.series_status_tag">新</span>
              </div>
            </router-link>
            <div class="series1-item-down">
              <ul class="series1-down-ul">
                <li class="series1-down-li">
                  <a :href="'https://www.dcdapp.com/dealer/' + item.concern_id + '?zt=default_pc_pc_home_top_series'" target="_blank" :title="item.outter_name">
                    <span>报价</span>
                  </a>
                </li>
                <li class="series1-down-li">
                  <a :href="'https://www.dcdapp.com/auto/series/' + item.concern_id + '/images/wg'" target="_blank" :title="item.outter_name">
                    <span>图库</span>
                  </a>
                </li>
                <li class="series1-down-li">
                  <a :title="item.outter_name" :href="'https://www.dcdapp.com/auto/params?carIds='+item.car_ids+''" target="_blank">
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
      seriesData: '',
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
     this.$http.get('http://localhost:8080/static/Data/shouye/series_json/seriesData.json')
     .then(res => {
      //  console.log(res.data.data)
       this.seriesData = res.data.data
       this.seriesData1 = this.seriesData[this.moveIndex].series.slice(0,7)
       console.log(this.seriesData1, '1')
       this.seriesData2_3 = this.seriesData[this.moveIndex].series.slice(7,21)
       console.log(this.seriesData2_3, '23')
     })
  },
  methods: {
    moveIn (index) {
      this.moveIndex = index
      // console.log(index, 'sahdsa')
      this.seriesData1 = this.seriesData[index].series.slice(0,7)
      // console.log('11', this.seriesData1)
      this.seriesData2_3 = this.seriesData[index].series.slice(7,21)
      // console.log('22', this.seriesData2_3)
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
    .car-list
      margin-left 10px
      .box
        .series1
          position relative
          width 112px
          font-size 14px
          text-align center
          padding 10px 9px 7px
          border-width 0px 1px 2px
          border-style solid solid
          border-color rgb(255, 255, 255) rgb(255, 255, 255)
          border-image initial
          border-top 0px
          border-bottom 2px solid rgb(255, 255, 255)
          box-sizing border-box
          .box-routeLink
            &:hover 
              color: #406599
            span 
              display: block
              width: 90px
              height: 60px
              background-size: 90px 60px
              background-repeat: no-repeat
              position: relative
              vertical-align: middle
              transition: transform 0.3s ease-in-out 0s
              &:hover 
                transform: scale(1.1)
            .name-wrapper
              display: flex
              -webkit-box-pack: center
              justify-content: center
              width: 90px
              position: relative
              text-align: center
              height: 20px
              line-height: 20px
              .series-name
                text-overflow: ellipsis
                height 20px
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 1
                word-break: break-all
                overflow: hidden
                &:hover 
                  transform: scale(1)
              .tag
                position relative
                display inline-block
                height 14px
                width 14px
                margin-left 4px
                top 3px
                line-height 14px
                font-size 10px
                color rgb(255, 255, 255)
                background-color rgb(250,85,85)
                padding 0 2px
                border-radius 2px
          .series1-item-down
            .series1-down-ul
              height: 12px;
              line-height: 12px;
              font-size: 12px;
              display: flex;
              color: rgb(153, 153, 153);
              margin: 2px 0px 2.5px;
              .series1-down-li
                padding 0px 4px
                &:not(:last-child) 
                  border-right 1px solid rgb(204, 204, 204)
                &:first-child 
                  padding-left 0px
                a
                  &:hover 
                    color: #406599
                  span
                    white-space: nowrap
                    overflow: hidden
                    text-overflow: ellipsis              
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