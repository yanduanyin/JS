<template>
  <div>
    <div class="header-wrapper">
      <div class="business-name">
        <span>{{seller.name}}</span>
      </div>
      <div class="business-scroe">
        <star :score="seller.score" :size="36" class="test"/>
        <span>({{seller.ratingCount}})</span>
        <span>月售{{seller.sellCount}}单</span>
      </div>
      <!-- 收藏和心脱离文档流 -->
      <div class="sollection">
        <div class="icon-heart">
          <img src="http://localhost:8080/static/心.png" alt="">
        </div>
        <span>收藏</span>
      </div>
      <div class="desc-wrapper">
        <div class="left-wrapper">
          <span>起送价</span>
          <div class="numtext">
            <span>{{seller.minPrice}}</span>元
          </div>
        </div>
        <div class="middle-wrapper">
          <span>商家配送</span>
          <div class="numtext">
            <span>{{seller.deliveryPrice}}</span>元
          </div>
        </div>
        <div class="right-wrapper">
          <span>平均配送时间</span>
         <div class="numtext">
            <span>{{seller.deliveryTime}}</span>分钟
          </div>
        </div>
      </div>
    </div>
    <div class="line-space"></div>
    <div class="notice-wrapper">
      <div class="title">
        <span>公告与活动</span>
      </div>
      <div class="text">
        <span>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
      </div>
      <ul class="supports" v-if="seller.supports">
        <li class="support-item" v-for="(item, index) in seller.supports" :key="index">
          <span class="icon" :class="classMap[seller.supports[index].type]"></span>
          <span class="text">{{seller.supports[index].description}}</span>
        </li>
      </ul>
    </div>
    <div class="line-space"></div>
    <div class="business-pic-wrapper">
      <div class="title">
        <span>商家实景</span>
      </div>
      <div class="scroll-images-wrapper">
        <div class="item-image">
          <img src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180" alt="">
        </div>
        <div class="item-image">
          <img src="http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180" alt="">
        </div>
        <div class="item-image">
          <img src="http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180" alt="">
        </div>
        <div class="item-image">
          <img src="http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180">
        </div>
      </div>
    </div>
    <div class="line-space"></div>
    <div class="fooder-wrapper"></div>
  </div>
</template>
<script>
import star from '../star/star'
export default {
  data () {
    return {
      classMap: []
    }
  },
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    star
  },
  created () {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
  }
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin'
*
  margin 0
  padding 0
.header-wrapper
  padding 18px
  .business-name
    display inline-block
    color #333
    font-size 14px
    margin-bottom 8px
    line-height 14px
  .business-scroe
    align-items center
    padding-bottom 18px
    display flex
    .test
      margin-right 8px
    span
      color #666
      font-size 10px
      line-height 18px
      margin-right 12px
  .sollection
    position absolute
    right 16px
    top 32%
    .icon-heart
      width 28px
      height 28px
      margin-bottom 2px
      img
        width 100%
        height 100%
    span
      color #666
      font-size 10px
      line-height 10px
  .desc-wrapper
    display flex
    padding 18px
    span
      display inline-block
      color #999
      font-size 10px
      line-height 10px
      margin-bottom 4px
    .numtext
      font-size 13px
      span
        font-size 24px
        font-weight 400
        line-height 24px
        color #000
    .left-wrapper
      width 33.3%
      text-align center
    .middle-wrapper
      width 33.3%
      text-align center
      border-right 1px solid #d9dde1
      border-left 1px solid #d9dde1
    .right-wrapper
      width 33.3%
      text-align center
.line-space
  background #f3f5f7
  border-bottom 1px solid rgba(7,17,27,.1)
  border-top 1px solid rgba(7,17,27,.1)
  height 16px
  width 100%
.notice-wrapper
  padding 18px 18px 0 18px
  .title
    color #333
    font-size 14px
    line-height 14px
    margin-bottom 8px
  .text
    padding 0 12px 16px
    span
      color #f01414
      font-size 12px
      line-height 24px
  .supports
    width 80%
    .support-item
      padding 0 12px
      margin-bottom 12px
      font-size 0
      &:last-child
        margin-bottom 0
      .icon
        display inline-block
        width 16px
        height 16px
        vertical-align top
        margin-right 6px
        background-size 16px 16px
        background-repeat no-repeat

        &.decrease
          bg-image('decrease_2')

        &.discount
          bg-image('discount_2')

        &.guarantee
          bg-image('guarantee_2')

        &.invoice
          bg-image('invoice_2')

        &.special
          bg-image('special_2')

      .text
        font-size 12px
        line-height 16px
.business-pic-wrapper
  padding 18px
  .title
    color #333
    font-size 14px
    line-height 14px
    margin-bottom 12px
  .scroll-images-wrapper
    width 100%
    overflow-x scroll
    // height 90px
    font-size 0
    .item-image
      vertical-align middle
      display inline-block
      word-wrap normal
      margin-right 6px
      height 90px
      width 120px
      img
        display inline-block
        width 100%
        height 100%
  </style>
