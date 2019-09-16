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
                <i class="stars-item on"></i>
                <i class="stars-item on"></i>
                <i class="stars-item on"></i>
                <i class="stars-item on"></i>
                <i class="stars-item off"></i>
              </div>
              <span style="color:#f90">{{starNum[0]}}</span>
            </div>
            <div class="score-wrapper">
              <span>商品评分</span>
              <div class="stars">
                <i class="stars-ite on"></i>
                <i class="stars-item on"></i>
                <i class="stars-item on"></i>
                <i class="stars-item on"></i>
                <i class="stars-item off"></i>
              </div>
              <span style="color:#f90">{{starNum[1]}}</span>
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
            :class="{'select-no': index === 2,'active': CIndex === index}"
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
          <div class="commentList" v-for="(item, index) in ratings" :key="index">
            <img class="logo" :src="item.avatar"/>
            <div class="userRight">
              <div class="titleWrapper">
                <div class="userTop">
                  <span class="userNumber">{{item.username}}</span>
                  <span class="timeRight">{{item.rateTime}}</span>
                </div>
                <div class="scoreNum">
                  <div class="star-items"></div>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  <span>{{item.deliveryTime}}</span>
                </div>
              </div>
              <div class="contentWrapper">
                <span>{{item.text}}</span>
                <div class="fooder-content">
                  <img class="dianzan" src="http://localhost:8080/static/点赞.png"/>
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
export default {
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
      starNum: [4.1, 4.3],
      Istatus: true,
      ratings: []
    }
  },
  computed: {
    CIndex () {
      return 0
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/ratings.json')
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
    _initScroll () {
      this.commentScroll = new BScroll(this.$refs.commentWrapper, {
        click: true
      })
      // console.log(this.commentScroll)
    },
    clickI () {
      this.Istatus = !this.Istatus
      // console.log(this.Istatus)
    },
    clickSelect (index, event) {
      // console.log(event)
      // console.log(index)
      // this.CIndex = index
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
          background-image url('http://localhost:8080/static/star-on.png')
        .off
          background-image url('http://localhost:8080/static/star-off.png')
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
