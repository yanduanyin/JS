<template>
  <div class="digslidebox" :class="outClass">
    <slider @slideToRight="slideRight" @slideToLeft="slideLeft" :showInfoList="sliderList" >
      <template v-slot:showArea="{currItem}">
        <transition tag="div" :name="slideDec">
          <div :key="currItem.imgUrl" class="slide-li">
            <div class="image">
              <router-link to="" tag="a">
                <img v-lazy="currItem.imgUrl" width="800" height="316" alt="">
              </router-link>
            </div>
            <div class="swiper-button-next button" @click="slideRight">
              <span></span>
            </div>
            <div class="swiper-button-prev button" @click="slideLeft">
              <span></span>
            </div>
          </div>
        </transition>
      </template>
      <template v-slot:clickArea="{scopeItem}">
        <span :class="['swiper-pagination-bullet', {'active': scopeItem.currIndex === scopeItem.index}]"></span>
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
  list-style none
  .slide-li
    width: 800px;
    min-width: 800px;
    height: 316px;
    min-height: 316px;
    overflow hidden
    padding 0
    .image
      height 316px
      overflow hidden
    .button
      position: absolute
      top: 50%
      margin-top: -45px
      width: 50px
      height: 90px
      opacity: 0.2
      background-color: #000000
      z-index: 10
      cursor: pointer
    .swiper-button-next
      right 0
      border-radius 8px 0 0 8px
      &::after
        content: ''
        display: inline-block
        width: 19px
        height: 32px
        position: relative
        top: 50%
        left: 50%
        margin-top: -16px
        margin-left: -9.5px
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAABgCAYAAACnmdq6AAAAAXNSR0IArs4c6QAAAkhJREFUeAHtnD9OwzAYxVsGFipGrsGGxMIKV+IYPQA3gBUhISExMbKwoi6dqeAC4blqrNTYsaPa8uePZ8mq/zX2z34viSrXsxkDZ0DPDHRdd2aiHqIdCaAWiEvENWIfTNqULZoHBsQ54goxFFaouGgWFIM/RvxAjIVvNLhsEhQDv43RDerbBAXAywAiJdkeKKi+UsicNuJBjxxfbZx8SvYUjZ4ALtajLuR7CpWnjXhQO2asxrUjxalZ8dLdwoLqbiqZ014+KAZ8gvjqDHxqlqDWH7UTXNFp4qV0ayvW9k/pUrreGaBHrUdqJ+hRr0KDhZRubcXa/indoEq9FZSulU7tBKXrVWiwkNKtrVjbP6UbVKm3gtK10qmdoHS9Cg0WUrq1FWv7p3SDKvVWULpWOrUTlK5XocHCfyVd2btSMkl3hevI3meUCXRZ+14T7T8D6DraiYQGGUD39gK6GyMkMOofQ4ZV/CNXUStpALGMj4hXByznwwHfLfvVDCuIS2x3d8p8hGQCNG89Ml8GMgLK3PZGQMxAQpD7Yo7B6971RcAEfaIJJVr2aT5ydUqUEt3OAD044pKyVfQgPUgPlvVY7Or0ID1ID8ZcUraeHqQH6cGyHotdnR6kB+nBmEvK1tODrXvQ6AMMuv+4DUD9f8EH5H2aGr2t5P6qNryFYeif3uHHC9sA3PlR5QEnw4U0Nx2VR9W4uz+e96jHMz+ovpnP52/jzYTVYiX1Hx9l5hygug8C64UFUN1HuvWg/SeAdR7O1wPykzMgawZ+ARwclMWJw6EYAAAAAElFTkSuQmCC')
        background-repeat: no-repeat
        background-size: cover
      &:hover
        opacity: 0.4
    .swiper-button-prev
      left 0
      border-radius 0 8px 8px 0
      &::after
        content: '';
        display: inline-block;
        width: 19px;
        height: 32px;
        position: relative;
        top: 50%;
        left: 50%;
        margin-top: -16px;
        margin-left: -9.5px;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAABACAYAAAB2kAXpAAAAAXNSR0IArs4c6QAAAgJJREFUaAXt2kFKxTAQBuBX8RTiwht4heIJBJfuBM+gqFvBO/hw51Jx6Up6hXcDF+IphPqPZEpsX9sknZlk8QJ9ado08zGPlqbtarUrcRmo4rrL9W7b9gCjHbsRN1VVffujm8MAopiXWC6w7DvMD+o1cGvXXpnCHOoWwU8Z0KvvgHunbXu9HWrNABTFPmeACSwQRaYjM1gEikxfJrBIFJle1GEJqA91WAKqAeoGZ2TLGRO/XCSiroGia1lXRGFSKNKJwSRRYjBplAhMA7UYpoVaBNNEJcO0UUkwC1Q0zAoVBbNEBcOsUUGwHKhZWC7UJCwnahSWG7UVVgJqACsFRbD+9I1myGOTUervlwaNwZ2n32HJenejiGzRs4RXLDxtnxq3wU41FAX2M0YPOIpA9WHULqb4GdtA9W+mMqKssf0Bf31IdkeGmN/cwTB9oudTT/OH/PWo8auK62AO9Ij6za3PVTU6qOG6s5IVpVzLBjACloDbCisBNwrLjZuE5cTNwnLhgmA5cMEwa1wUzBIXDbPCJcEscMkwbdwimCZuMUwLJwLTwInBpHGiMEmcOEwKpwJLxNFLrit+n9S/56cxRYoLcI/BQucQJ+h7xsHVYBQgAWcDS8AdmmSMg0Rk7pOPUf0rOQjVgbhnPkbtrOQA/dpNDcv6IMRHAjj5CY3fd7cekoFfCpo+slA7IxYAAAAASUVORK5CYII=');
        background-repeat: no-repeat;
        background-size: cover;
      &:hover
        opacity: 0.4
  .swiper-pagination-bullet
    display: inline-block
    margin: 0 4px
    cursor: pointer
    width: 8px
    height: 8px
    border-radius: 100%
    background-color: #e6e6e6
  .active
    width: 24px
    height: 8px
    border-radius: 4px
    background-color: #ffe100
</style>
