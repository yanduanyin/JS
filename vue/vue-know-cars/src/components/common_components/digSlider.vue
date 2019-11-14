<template>
  <div class="digslidebox" :class="outClass">
    <slider @slideToRight="slideRight" @slideToLeft="slideLeft" :showInfoList="sliderList" >
      <template v-slot:showArea="{currItem}">
        <transition tag="div" :name="slideDec">
          <div :key="currItem.title" class="slide-li">
            <div class="image">
              <router-link to="" tag="a">
                <img v-lazy="currItem.imgUrl" width="800" height="316" alt="">
              </router-link>
            </div>
            <!-- <div class="swiper-pagination" ref="pagination">
              <span :class="['swiper-pagination-bullet', {'active':currentIndex === index}]"
              v-for="(item, index) in cirArr" :key="index" @click="clickCirN(index)"></span>
            </div> -->
            <div class="swiper-button-next button" @click="clickNext">
              <span></span>
            </div>
            <div class="swiper-button-prev button" @click="clickPrev">
              <span></span>
            </div>
          </div>
        </transition>
      </template>
      <template v-slot:clickArea="{scopeItem}">
        <div class="slide-oi" :class="{'active': scopeItem.currIndex === scopeItem.index}">
        </div>
      </template>
    </slider>
  </div>
</template>

<script>
import slider from './slider.vue'
export default {
  name: 'digSlider',
  props: {
    sliderList: {
      type: Array
    },
    outClass: {
      type: String
    }
  },
  data () {
    return {
      slideDec: 'slideRight'
    }
  },
  methods: {
    slideRight () {
      this.slideDec = 'slideRight'
    },
    slideLeft () {
      this.slideDec = 'slideLeft'
    }
  },
  components: {
    slider
  }
}
</script>

<style scoped lang="stylus">
.digslidebox
  margin 0 auto 
  position relative
  width: 800px;
  min-width: 800px;
  // list-style none
  .slide-li
    width 100%
    .image
      height 316px
      overflow hidden
//     h3
//       margin 10px 0 5px
//       width 260px
//       height 26px
//       font-size 16px
//       color #333
//       font-weight normal
//       line-height 26px
//       overflow hidden
//       white-space nowrap
//       text-overflow ellipsis
//       a
//         color #333
//     p
//       height 60px
//       line-height 20px
//       font-size 14px
//       overflow hidden
//   .slide-oi
//     float left
//     display inline
//     margin-left 3px
//     width 15px
//     height 8px
//     background-color #fff
//     border-radius 4px
//     cursor pointer
//     overflow hidden
//     &.active
//       background-color $theme_color
//     &:hover
//       background-color $theme_color
</style>
