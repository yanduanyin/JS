<template>
  <div class="clearfix content">
    <div class="feed fl">
      <div class="fl title-list-box">
        <ul class="title-list">
          <li :class="['title-item']"  v-for="(item, index) in tltieItemName" :key="index" >
            <span :class="[{'active':currentIndex === index}]" @click="clickIn(index)">{{item.text}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="leaderboard">
      <div class="hotspot">
        <div class="header">
          <span class="title">热门排行榜</span>
          <span class="more">
            总榜单
            <span class="more-icon iconfont icon-jiantouarrow487"></span>
          </span>
        </div>
        <div class="list">
          <div class="series clearfix">
            <span class="icon"></span>
            <a href="" class="cars-name" target="_blank" title="">
              <span class="photo"></span>
              <span class="name line-1">
                <span class="active price">
                  
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tltieItemName: [
        {text: '推荐'},
        {text: '新车'},
        {text: '用车'},
        {text: '导购'},
        {text: 'SUV'},
        {text: '自驾游'},
        {text: '新能源'},
        {text: '提车作业'},
        {text: '试驾测评'}
      ],
      clickIndex: 0,
      leaderboardData: [
        {
          'showLogoType': 1,
          'cover_url': '',
          'outter_name': '领克03',
          "dealer_price": "6.98-13.18\u4e07",
        },
        {
          'showLogoType': 2,
          'cover_url': '',
          'outter_name': '思域',
          "dealer_price": "6.98-13.18\u4e07",
        },
        {
          'showLogoType': 3,
          'cover_url': '',
          'outter_name': '雅阁',
          "dealer_price": "6.98-13.18\u4e07",
        }
      ]
    }
  },
  computed: {
    currentIndex() {
      return this.clickIndex
    }
  },
  methods: {
    clickIn(index) {
      console.log(index)
      this.clickIndex = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  margin-top 10px
  .feed
    width: 790px
    min-width: 790px
    min-height: 1px
    .title-list-box
      .title-list
        position: sticky;
        top: 0px;
        z-index: 10;
        width: 790px;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        color: rgb(255, 255, 255);
        background-color: rgb(51, 51, 51);
        display: flex;
        text-align: center;
        box-sizing border-box
        .title-item
          display: inline-block;
          height: 100%;
          cursor: pointer;
          flex: 1 1 0%;
          .active
            &::before
              content: "";
              display: inline-block;
              width: 100%;
              height: 4px;
              position: absolute;
              bottom: -2px;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: rgb(255, 225, 0);
          span 
            display: inline-block;
            color: rgb(255, 255, 255);
            position: relative;
            &:hover
              font-weight: 500;
              font-size: 20px;
  .leaderboard
    width: 340px
    margin-left: 10px
    float right
    .hotspot
      margin-bottom 10px
      .header
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #e6e6e6;
        box-sizing border-box
        .title
          font-size: 24px;
          font-weight: 500;
          color: #333333;   
        .more
          float right
</style>