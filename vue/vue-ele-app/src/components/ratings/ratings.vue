<template>
  <div>
    <div class="ratings" ref="commentWrapper">
      <!-- 分数描述区 -->
      <div class="scoreDesc border-1px">
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
              <i class="stars-item on"></i>
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
      </div>
      <div class="split"></div>
      <!-- 评论满意区 -->
      <div class="ratingselect">
        <div class="select-comment">
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="sw-comment">
          <i></i>
          <span></span>
        </div>
      </div>
      <!-- 评论内容区 -->
      <div class="commentsWrapper">
        <div class="titleWrapper">
          <div class="userLeft">
            <i class="logo"></i>
            <div class="userName">
              <span class="userNum"></span>
              <div class="scoreNum">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <span></span>
              </div>
            </div>
          </div>
          <span class="timeRight"></span>
        </div>
        <div class="contentWrapper">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      starNum: [4.1, 4.3]
    }
  },
  methods: {
    _initScroll () {
      this.commentScroll = new BScroll(this.$refs.commentWrapper, {
        click: true
      })
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/ratings.json')
      .then((res) => {
        console.log(res)
        if (res.data.errno === 0) {
          this.ratings = res.data.data
          this.$nextTick(() => {
            this._initScroll()
          })
        }
      })
  }
}
</script>
<style lang="stylus" scoped>
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
    flex 1
    padding 6px 0 6px 24px
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
</style>
