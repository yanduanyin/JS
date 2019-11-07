<template>
  <div>
    <div ref="commentWrapper" class="wrapper">
      <ul class="ratings">
        <!-- 分数描述区 -->
        <li class="scoreDesc border-1px">
          <div class="scoreLeft">
            <span class="score">4.2</span>
            <span class="desc">综合评分</span>
            <span class="desc-score">高于周边商家69.2%</span>
          </div>
          <div class="scoreRight">
            <div class="score-wrapper">
              <span>服务态度</span>
              <div class="stars">
                <i class="stars-item on" v-for="(item, index) of serviceStarArr" :key="index"></i>
                <i class="stars-item off" v-for="(item, index) of serviceStarArr2" :key="index"></i>
              </div>
              <span style="color:#f90">{{seller.serviceScore}}</span>
            </div>
            <div class="score-wrapper">
              <span>商品评分</span>
              <div class="stars">
                <i class="stars-item on" v-for="(item, index) of foodStarArr" :key="index"></i>
                <i class="stars-item off" v-for="(item, index) of foodStarArr2" :key="index"></i>
              </div>
              <span style="color:#f90">{{seller.foodScore}}</span>
            </div>
            <div class="desctimes">
              <span>送达时间</span>
              <span style="color:#93999f;margin-left:12px">38分钟</span>
            </div>
          </div>
        </li>
        <div class="split"></div>
        <!-- 评论满意区 -->
        <li class="ratingselect">
          <div class="select-comment">
            <div class="select-item"
            @click="clickSelect(index,$event)"
            v-for="(item, index) in select"
            :key="index"
            :class="{'select-no': index === 2, 'active': index === CIndex, 'active2': CIndex === index + 15}"
            >
            <span>{{item.desc}}</span>
            <span>{{item.num}}</span>
            </div>
          </div>
          <div class="sw-comment">
            <i @click="clickI" :class="{'on': Istatus === true}"></i>
            <span>只看有内容的评价</span>
          </div>
        </li>
        <!-- 评论内容区 -->
        <li class="commentsWrapper">
          <div class="commentList" v-for="(item, index) in ratingsNum" :key="index">
            <img class="logo" :src="item.avatar"/>
            <div class="userRight">
              <div class="titleWrapper">
                <div class="userTop">
                  <span class="userNumber">{{item.username}}</span>
                  <span class="timeRight">{{item.rateTime | Ctime}}</span>
                </div>
                <div class="scoreNum">
                  <div class="star-items">
                    <star :score="item.score" :size="24"></star>
                  </div>
                  <span>{{item.deliveryTime}}</span>
                </div>
              </div>
              <div class="contentWrapper">
                <span>{{item.text}}</span>
                <div class="fooder-content">
                  <img class="dianzan" src="http://localhost:8081/static/点赞.png"/>
                  <span class="text" v-for="(comment,index ) of item.recommend" :key="index">{{comment}}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import star from '../star/star'
export default {
  props: { // 接收父组件传来的数据 seller
    seller: {
      type: Object
    }
  },
  data () {
    return {
      select: [
        {
          desc: '全部',
          num: '24'
        },
        {
          desc: '满意',
          num: '18'
        },
        {
          desc: '不满意',
          num: '4'
        }
      ],
      Istatus: true,
      ratings: [],
      CIndex: 0,
      Cratings: []
    }
  },
  components: {
    star // 注册 star 星星组件
  },
  computed: {
    serviceStarArr () {
      let serviceStarArr = []
      let starNum = Math.round(this.seller.serviceScore)
      for (let i = 0; i < starNum; i++) {
        serviceStarArr.push(i)
      }
      return serviceStarArr
    }, // 一种笨的根据data里的scroe大小来生成用来循环星星数的方法，但是用来练手可以
    foodStarArr () {
      let foodStarArr = []
      let starNum = Math.round(this.seller.foodScore)
      for (let i = 0; i < starNum; i++) {
        foodStarArr.push(i)
      }
      return foodStarArr
    },
    serviceStarArr2 () {
      let serviceStarArr2 = []
      let starNum = Math.round(this.seller.serviceScore)
      let starNum2 = 5 - starNum
      for (let i = 0; i < starNum2; i++) {
        serviceStarArr2.push(i)
      }
      return serviceStarArr2
    },
    foodStarArr2 () {
      let foodStarArr2 = []
      let starNum = Math.round(this.seller.foodScore)
      let starNum2 = 5 - starNum
      for (let i = 0; i < starNum2; i++) {
        foodStarArr2.push(i)
      }
      return foodStarArr2
    },
    ratingsNum () { // 根据Istatus的改变，动态改变循环数据的数据源
      let ratingsNum = []
      if (this.Cratings.length === 0) {
        if (!this.Istatus) {
          ratingsNum = this.ratings
        } else {
          this.ratings.forEach(item => {
            if (item.text !== '') {
              ratingsNum.push(item)
            }
          })
        }
      } else {
        if (!this.Istatus) {
          ratingsNum = this.Cratings
        } else {
          this.Cratings.forEach(item => {
            if (item.text !== '') {
              ratingsNum.push(item)
            }
          })
        }
      }
      return ratingsNum
    }
  },
  filters: { // 过滤属性，用以对数据的处理，一般用在v-for出来的列表数据的再处理
    Ctime: function (value) {
      let date = new Date(value)
      let Y = date.getFullYear()// 年
      let M = date.getMonth() + 1// 月
      let D = date.getDate()// 日
      let H = date.getHours()// 时
      let i = date.getMinutes()// 分
      if (M < 10) {
        M = '0' + M
      }
      if (D < 10) {
        D = '0' + D
      }
      if (H < 10) {
        H = '0' + H
      }
      if (i < 10) {
        i = '0' + i
      }
      let t = Y + '-' + M + '-' + D + ' ' + H + ':' + i
      return t
    }
  },
  created () {
    // 请求数据，并以数据源里的ratings数组接收，以便使用
    this.$http.get('http://localhost:8081/static/ratings.json')
      .then((res) => {
        console.log(res.data.data)
        if (res.data.errno === 0) {
          this.ratings = res.data.data
          this.$nextTick(() => {
            this._initScroll()
          })
        }
      })
  },
  methods: {
    _initScroll () { // 初始化 better scroll
      this.commentScroll = new BScroll(this.$refs.commentWrapper, {
        click: true
      })
      // console.log(this.commentScroll)
    },
    clickI () {
      this.Istatus = !this.Istatus// 点击事件改变Istatus的状态，从而影响计算属性中的评价内容循环列表
      // console.log(this.Istatus)
    }, // 控制有无内容的评价
    clickSelect (index, event) {
      // console.log(event)
      // console.log(index)
      this.Cratings = this.ratings
      if (index === 0) { // 当点击全部是显示的评价内容列表
        this.CIndex = index
      } else if (index === 1) { // 当点击满意按钮，显示四星以上的评价内容
        this.CIndex = index
        let ratings = []
        this.Cratings.forEach(item => {
          if (item.score >= 4) {
            ratings.push(item)
          }
          this.Cratings = ratings
        })
      } else { // 当点击不满意按钮，显示四星以下的评价内容
        this.CIndex = index + 15
        let ratings = []
        this.Cratings.forEach(item => {
          if (item.score < 4) {
            ratings.push(item)
          }
          this.Cratings = ratings
        })
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  height 400px
  overflow hidden
.scoreDesc
  width 100%
  padding 18px 0
  border-bottom 1px solid rgba(7, 17, 27, 0.1)
  vertical-align top
  span
    display block
    font-size 12px
    color #07111b
  .scoreLeft
    display inline-block
    width 35%
    border-right 1px solid rgba(7, 17, 27, 0.1)
    text-align center
    padding 6px 0
    // vertical-align middle
    .score
      font-size 24px
      line-height 28px
      color #f90
      margin-bottom 6px
    .desc
      line-height 12px
      margin-bottom 8px
    .desc-score
      line-height 10px
      font-size 10px
      color #93999f
  .scoreRight
    display inline-block
    float right
    flex 1
    padding 6px 6px 6px 24px
    .score-wrapper
      margin-bottom 8px
      font-size 0px
      span
        display inline-block
        vertical-align top
        line-height 18px
      .stars
        display inline-block
        margin 0 12px
        vertical-align top
        .stars-item
          display inline-block
          width 15px
          height 15px
          margin-right 6px
          background-size 15px 15px
          background-repeat no-repeat
        .on
          background-image url('http://localhost:8081/static/star-on.png')
        .off
          background-image url('http://localhost:8081/static/star-off.png')
          margin 0
    .desctimes
      span
        display inline-block
.split
  width 100%
  height 16px
  border-bottom 1px solid rgba(7,17,27,.1)
  background #f3f5f7
.ratingselect
  width 100%
  border-bottom 1px solid rgba(7,17,27,.1)
  .select-comment
    padding 18px 0
    margin 0 18px
    font-size 0
    border-bottom 1px solid rgba(7,17,27,.07)
    .select-item
      display inline-block
      padding 8px 12px
      margin-right 8px
      line-height 16px
      border-radius 1px
      font-size 12px
      color #4d555d
      background-color rgba(0,160,220,.2)
    .select-no
      background-color rgba(77,85,93,.2)
    .active
      background-color #00a0dc
      color #fff
    .active2
      background-color rgba(77,85,93,.9)
      color #fff
      span
        font-size 8px
  .sw-comment
    padding 12px 18px
    margin-bottom 1px solid rgba(7,17,27,.1)
    color #93999f
    line-height 24px
    .on
      background-color #00c850
    i
      background-color #93999f
      display inline-block
      vertical-align top
      margin-right 4px
      line-height 20px
      width 20px
      height 20px
      border-radius 50%
      &:before
        content ""
        display block
        width 5px
        height 10px
        border-bottom 2px solid #fff
        border-right  2px solid #fff
        transform translate(90%, 20%) rotate(40deg)
    span
      display inline-block
      vertical-align top
      line-height 20px
      font-size 12px
.commentsWrapper
  padding 0 18px
  .commentList
    padding 18px 0
    display flex
    .logo
      display inline-block
      width 28px
      height 28px
      border-radius 50%
      vertical-align top
      margin-right 12px
    .userRight
      display inline-block
      vertical-align top
      flex 1
      .titleWrapper
        display inline-block
        width 100%
        .userTop
          margin-bottom 4px
          line-height 12px
          font-size 10px
          color #07111b
          &:before
            content ''
            display inline-block
            clear both
          .userNumber
            float left
          .timeRight
            float right
        .scoreNum
          margin-bottom 6px
          font-size 0
          .star-items
            display inline-block
            line-height 12px
          span
            font-size 10px
            display inline-block
            vertical-align top
            line-height 12px
            color #93999f
      .contentWrapper
        display inline-block
        width 100%
        span
          display inline-block
          margin-bottom 8px
          line-height 18px
          font-size 12px
          color #07111b
        .fooder-content
          line-height 16px
          font-size 0
          .dianzan
            display inline-block
            margin 2px 6px 2px 2px
            width 13px
            height 13px
          .text
            display inline-block
            padding 0 6px
            border 1px solid rgba(7,17,27,.1)
            border-radius 1px
            color #93999f
            background #fff
            vertical-align top
            margin 0 8px 4px 0
</style>
