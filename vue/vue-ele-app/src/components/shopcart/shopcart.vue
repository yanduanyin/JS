<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight': totalCount > 0}">
              <i class="icon-shopping_cart" :class="{'highlight': totalCount > 0}"></i>
            </div>
            <div class="num" v-show="totalCount > 0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight': totalCount > 0}">¥{{totalPrice}}</div>
          <div class="desc">另需配送费¥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">
            {{payDesc}}
          </div>
        </div>
      </div>
      <div class="ball-container">
        <div v-for="(ball, index) in balls" :key="index">
          <transition name='drop' @before-enter="boforeDrop" @enter="dropping" @after-enter="afterDrop">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectFoods: {
      type: Array,
      default () {
        return [
          {
            price: 0,
            count: 0
          }
        ]
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      balls: [
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        }
      ],
      // 添加一个变量，用来存贮已经下落的小球
      dropBalls: []
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount () {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    },
    payDesc () {
      if (this.totalPrice === 0) {
        return `¥${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice
        return `还差¥${diff}元起送`
      } else {
        return '去结算'
      }
    },
    payClass () {
      if (this.totalPrice < this.minPrice) {
        return 'not-enough'
      } else {
        return 'enough'
      }
    }
  },
  methods: {
    drop (el) {
      // console.log(el)
      // 遍历balls, 拿到第一个show为false的球，做出一个动画
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i]
        if (!ball.show) { // show为false的球
          ball.show = true // 小球下落
          ball.el = el // 保留当前的DOM对象，用来计算位置
          this.dropBalls.push(ball) // dropBalls 存下已经下落的小球，后续对下落小球再次进行处理
          return
        }
      }
    },
    // 三个钩子函数实现动画
    boforeDrop (el) { // el为当前执行transition动画的DOM对象
    // 先找到所有为true的小球（连续点击的情况)
      let count = this.balls.length
      while (count--) {
        let ball = this.balls[count]
        if (ball.show) { // 要运动的小球true
          let rect = ball.el.getBoundingClientRect() // 获得元素相当于视口的位置
          let x = rect.left - 32
          let y = -(window.innerHeight - rect.top - 22)
          el.style.display = '' // v-show默认display：none，设置为空，让它显示
          // 外层元素是纵向的动画，内层元素是横向的动画
          el.style.webkitTransform = `translate3d(0, ${y}px, 0)`
          el.style.transform = `translate3d(0, ${y}px, 0)`
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`
          inner.style.transform = `translate3d(${x}px, 0, 0)`
        }
      }
    },
    dropping (el) {
      /* 触发浏览器重绘，重绘之后才可以设置transform */
      /* eslint-disable no-unused-vars */
      let rf = el.offsetHeight
      this.$nextTick(() => { // 样式重置
        el.style.webkitTransform = `translate3d(0, 0, 0)`
        el.style.transform = `translate3d(0, 0, 0)`
        let inner = el.getElementsByClassName('inner-hook')[0]
        inner.style.webkitTransform = `translate3d(0, 0, 0)`
        inner.style.transform = `translate3d(0, 0, 0)`
      })
    },
    afterDrop (el) { // 动画完成
      let ball = this.dropBalls.shift() // 删除并返回第一个ball
      if (ball) {
        ball.show = false // 重置 ball.show 的状态
        el.style.display = 'none'
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"

.shopcart
  position: fixed
  left: 0
  bottom: 0
  z-index: 50
  width: 100%
  height: 48px
  .content
    display: flex
    background: #141d27
    font-size: 0
    color: rgba(255, 255, 255, 0.4)
    .content-left
      flex: 1
      .logo-wrapper
        display: inline-block
        vertical-align: top
        position: relative
        top: -10px
        margin: 0 12px
        padding: 6px
        width: 56px
        height: 56px
        box-sizing: border-box
        border-radius: 50%
        background: #141d27
        .logo
          width: 100%
          height: 100%
          border-radius: 50%
          text-align: center
          background: #2b343c
          &.highlight
            background: rgb(0, 160, 220)
          .icon-shopping_cart
            line-height: 44px
            font-size: 24px
            color: #80858a
            &.highlight
              color: #fff
        .num
          position: absolute
          top: 0
          right: 0
          width: 24px
          height: 16px
          line-height: 16px
          text-align: center
          border-radius: 16px
          font-size: 9px
          font-weight: 700
          color: #fff
          background: rgb(240, 20, 20)
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
      .price
        display: inline-block
        vertical-align: top
        margin-top: 12px
        line-height: 24px
        padding-right: 12px
        box-sizing: border-box
        border-right: 1px solid rgba(255, 255, 255, 0.1)
        font-size: 16px
        font-weight: 700
        &.highlight
          color: #fff
      .desc
        display: inline-block
        vertical-align: top
        margin: 12px 0 0 12px
        line-height: 24px
        font-size: 10px
    .content-right
      flex: 0 0 105px
      width: 105px
      .pay
        height: 48px
        line-height: 48px
        text-align: center
        font-size: 12px
        font-weight: 700
        &.not-enough
          background: #2b333b
        &.enough
          background: #00b43c
          color: #fff
  .ball-container
    .ball
        position fixed //相对于视口做布局
        left 32px
        bottom 22px
        z-index 200
        transition: all 0.41s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
            width 16px
            height 16px
            border-radius 50%
            background rgb(0,160,220)
            transition all 0.4s linear  //x轴做一个线性的过渡即可
  .shopcart-list
    position: absolute
    left: 0
    top: 0
    z-index: -1
    width: 100%
    transform: translate3d(0, -100%, 0)
    &.fold-enter-active, &.fold-leave-active
      transition: all 0.5s
    &.fold-enter, &.fold-leave-active
      transform: translate3d(0, 0, 0)
    .list-header
      height: 40px
      line-height: 40px
      padding: 0 18px
      background: #f3f5f7
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      .title
        float: left
        font-size: 14px
        color: rgb(7, 17, 27)
      .empty
        float: right
        font-size: 12px
        color: rgb(0, 160, 220)

    .list-content
      padding: 0 18px
      max-height: 217px
      overflow: hidden
      background: #fff
      .food
        position: relative
        padding: 12px 0
        box-sizing: border-box
        border-1px(rgba(7, 17, 27, 0.1))
        .name
          line-height: 24px
          font-size: 14px
          color: rgb(7, 17, 27)
        .price
          position: absolute
          right: 90px
          bottom: 12px
          line-height: 24px
          font-size: 14px
          font-weight: 700
          color: rgb(240, 20, 20)
        .cartcontrol-wrapper
          position: absolute
          right: 0
          bottom: 6px

.list-mask
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 40
  backdrop-filter: blur(10px)
  opacity: 1
  background: rgba(7, 17, 27, 0.6)
  &.fade-enter-active, &.fade-leave-active
    transition: all 0.5s
  &.fade-enter, &.fade-leave-active
    opacity: 0
    background: rgba(7, 17, 27, 0)
</style>
