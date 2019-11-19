<template>
  <div class="news-wrapper">
    <a href="https://www.dcdapp.com/article/6756824666133774862" target="_blank" class="pic-box">
      <div class="news-pic fl">
        <div class="pic-mask">
          <span class="pic-title">售15.88万元 观致5S暗夜英雄版正式上市</span>
        </div>
      </div>
    </a>
    <ul class="news-list">
      <li class="line-1" v-for="(item, index) in hotNews" :key="index">
        <a :href="'https://www.dcdapp.com/article/'+item.articleUrl" target="_blank">{{item.text}}</a>
      </li>
    </ul>
    <a href="https://www.dcdapp.com/article/6756401245600088589" target="_blank" class="pic-box">
      <div class="ad-pic" style="background-image: url('https://p7.pstatp.com/large/pgc-image/dfeae47472fd49d3b4923891218328d4')">
        <div class="pic-mask" >
          <span class="pic-title">售15.88万元 观致5S暗夜英雄版正式上市</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotNews: [
        { 
          articleUrl: '6756738101902574091',
          text: '2020款景逸S50正式上市！售价6.99-7.99万元'
        },
        { 
          articleUrl: '6756736864373178893',
          text: '福特纯电动SUV测试谍照曝光 采用Mustang风格'
        },
        { 
          articleUrl: '6756542372043031047',
          text: '最贵黑武士SUV登场 劳斯莱斯Black Badge库里南全球首发'
        },
        { 
          articleUrl: '6756496568158781955',
          text: '广汽丰田发布全新车型“威兰达”定位紧凑型SUV'
        },
        { 
          articleUrl: '6756479033703154184',
          text: '重磅！丰田比亚迪2020年在中国成立合资公司 研发纯电动车'
        },
        { 
          articleUrl: '6756458215115850248',
          text: '广汽本田皓影11月30日上市 预售18万元起'
        },
        {
          articleUrl: '6756408769703313931',
          text: '中国制造Model 3实车正式亮相 尾标中文“特斯拉”网友：好抠吗？'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.news-wrapper
  height 260px
  .pic-box
    .news-pic
      position: relative
      width: 380px
      height: 250px
      background-image: url('https://p3.pstatp.com/large/pgc-image/58a69de94e9144e89a32f315b20e46e5')
      background-size: cover
      .pic-mask
        position: absolute
        width: 100%
        height: 74px
        padding: 12px 12px
        bottom: 0
        font-size: 18px
        font-weight: 500
        color: #ffffff
        background-image: linear-gradient( to bottom, rgba(0,0,0,0), #000000 )
        box-sizing border-box
        .pic-title
          height: 50px
          line-height: 25px
          display: -webkit-box
          -webkit-line-clamp: 2
          overflow: hidden
          text-overflow: ellipsis
          -webkit-box-orient: vertical
    .ad-pic 
      position: relative
      width: 380px
      height: 250px
      background-size: cover
      float: right
      .pic-mask
        position: absolute
        width: 100%
        height: 74px
        padding: 12px 12px
        bottom: 0
        font-size: 18px
        font-weight: 500
        color: #ffffff
        background-image: linear-gradient( to bottom, rgba(0,0,0,0), #000000)
        box-sizing border-box
        .pic-title
          height: 50px
          line-height: 25px
          display: -webkit-box
          -webkit-line-clamp: 2
          overflow: hidden
          text-overflow: ellipsis
          -webkit-box-orient: vertical
  .news-list
    display: inline-block
    margin: 10px 15px 0
    .line-1
      position: relative
      width: 385px
      height: 22px
      margin-bottom: 13px
      padding-left: 8px
      font-size: 16px
      color: #333333
      cursor: pointer
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      &::before
        content: ''
        display: inline-block
        width: 6px
        height: 6px
        border-radius: 50%
        background-color: #d8d8d8
        position: relative
        right: 8px
        top: -2px
      &:hover 
        color: #406599

</style>