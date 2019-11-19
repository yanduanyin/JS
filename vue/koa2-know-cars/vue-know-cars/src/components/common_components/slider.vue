<template>
  <div>
    <div>
      <slot
        v-if="showInfoList && showInfoList.length > 0"
        name="showArea"
        :currItem="currItem"
      ></slot>
    </div>
    <div :class="olClass ? olClass : 'swiper-pagination'">
      <div
        v-for="(item, index) in showInfoList"
        :key="index + item"
        @click="selectItem(index)" style="display: inline-block;">
        <slot
          v-if="showInfoList && showInfoList.length > 0"
          name="clickArea"
          :scopeItem="{currIndex, index, item}"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    showInfoList: {
      type: Array
    },
    olClass: {
      type: String
    },
    setTime: {
      type: Number
    }
  },
  data () {
    return {
      currIndex: 0,
      ivTimer: null
    }
  },
  computed: {
    currItem () {
      return this.showInfoList[this.currIndex]
    }
  },
  mounted () {
    this.ivTimer = setInterval(this.loopItem, this.setTime)
  },
  methods: {
    selectItem (val) {
      // console.log(val)
      this.$emit('slideToRight')
      this.$emit('slideToLeft')
      this.currIndex = val
    },
    loopItem () {
      clearInterval(this.ivTimer)
      this.selectItem((this.currIndex + 1) % this.showInfoList.length)
      this.ivTimer = setInterval(this.loopItem, this.setTime)
    },
    nextIndex () {
      clearInterval(this.ivTimer)
      this.selectItem((this.currIndex + 1) % this.showInfoList.length)
      this.ivTimer = setInterval(this.loopItem, this.setTime)
    },
    preIndex () {
      clearInterval(this.ivTimer)
      this.selectItem((this.currIndex - 1 + this.showInfoList.length) % this.showInfoList.length)
      this.ivTimer = setInterval(this.loopItem, this.setTime)
    }
  },
  beforeDestroy () {
    clearInterval(this.ivTimer)
  }
}
</script>

<style scoped lang="stylus">
.swiper-pagination
  line-height 20px
  bottom: 0px
  left: 0
  width: 100%
  position: absolute
  text-align: center
  -webkit-transition: 300ms opacity
  transition: 300ms opacity
  -webkit-transform: translate3d(0, 0, 0)
  transform: translate3d(0, 0, 0)
  z-index: 10
    
</style>
