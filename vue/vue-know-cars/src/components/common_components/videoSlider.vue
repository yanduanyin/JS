<template>
  <div class="digslidebox" :class="outClass">
    <slider @slideToRight="slideRight" @slideToLeft="slideLeft" :showInfoList="sliderList" >
      <template v-slot:showArea="{currItem}">
        <transition tag="div" :name="slideDec">
          <div :key="currItem.bigvideo_href" class="slide-li">
            <div class="image">
              <!-- <router-link to="" tag="a">
                <img v-lazy="currItem.imgUrl" width="800" height="316" alt="">
              </router-link> -->
              <div class="left-section fl">
                <a :href="'https://www.dcdapp.com' + currItem.bigvideo_href" target="_blank">
                  <div class="big-video-transition">
                    <div class="big-video" :style="'background-image:url(' + currItem.bigvideo_imageUrl + ')'">
                      <div class="big-video-icon"></div>
                    </div>
                  </div>
                  <div class="pic-title line-1">{{currItem.bigvideo_title}}</div>
                </a>
              </div>
              <div class="right-section">
                <div class="small-video-wrapper" v-for="(item, idx) in currItem.smallvideo" :key="'info1'+idx">
                  <a :href="'https://www.dcdapp.com' + item.smallvideo_href" target="_blank">
                    <div class="small-video-transition">
                      <div class="small-video" :style="'background-image:url(' + item.smallvideo_imageUrl + ')'">  
                        <div class="small-video-icon">{{item.smallvideo_time}}</div>
                      </div>
                    </div>
                    <div class="pic-title line-1">{{item.smallvideo_title}}</div>
                  </a>
                </div>
              </div>
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
  width: 1190pxpx;
  min-width: 1190pxpx;
  list-style none
  .slide-li
    width: 1190px;
    min-width: 1190px;
    height: 355px;
    min-height: 355px;
    overflow hidden
    padding 0
    .image
      position relative
      width 1190px
      margin-right 30px
      height 355px
      .left-section
        width 483px
        a 
          text-decoration none
          .big-video-transition
            overflow hidden
            .big-video
              width: 483px
              height: 298px
              background-size: cover
              -webkit-transition: -webkit-transform 0.3s ease-in-out
              -webkit-transition: transform 0.3s ease-in-out
              transition: transform 0.3s ease-in-out
              position: relative
              &:hover
                transform: scale(1.1)
              .big-video-icon
                width: 100px
                height: 100px
                border-radius: 50%
                background-color: rgba(0,0,0,0.6)
                position: absolute
                top: 50%
                left: 50%
                -webkit-transform: translate(-50%,-50%)
                -ms-transform: translate(-50%,-50%)
                transform: translate(-50%,-50%)
                &::before
                  content: ''
                  display: inline-block
                  position: absolute
                  top: 50%
                  left: 54%
                  -webkit-transform: translate(-50%,-50%)
                  -ms-transform: translate(-50%,-50%)
                  transform: translate(-50%,-50%)
                  background: url('https://sf1-ttcdn-tos.pstatp.com/obj/motor-img/81c16ecb55fae398c44652173375536b')  center / cover no-repeat
                  width: 30.8px
                  height: 34.3px
          .pic-title
            width: 100%
            margin-top: 8px
            font-size: 16px
            color: #333333
          .line-1
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
      .right-section
        width 705px
        display flex
        flex-wrap wrap
        float right
        .small-video-wrapper
          width: 225px
          height: 156px
          margin-left: 10px
          margin-bottom: 16px
          a
            .small-video-transition
              overflow hidden
              .small-video
                width: 226px
                height: 126px
                background-size: cover
                overflow: hidden
                position: relative
                font-size: 10px
                color: #ffffff
                -webkit-transition: -webkit-transform 0.3s ease-in-out
                -webkit-transition: transform 0.3s ease-in-out
                transition: transform 0.3s ease-in-out
                &:hover
                  transform: scale(1.1)
                .small-video-icon
                  padding: 0 4px
                  position: absolute
                  bottom: 8px
                  right: 8px
                  height: 20px
                  line-height: 20px
                  border-radius: 15px
                  background-color: rgba(0,0,0,0.4)
                  text-align: center
                  min-width: 47px
                  &:before
                    content: ''
                    display: inline-block
                    background: url('https://p.pstatp.com/origin/dc14000d8e436aea872a') center / cover no-repeat
                    width: 12px
                    height: 12px
          .pic-title
            width: 100%
            margin-top: 8px
            font-size: 16px
            color: #333333
          .line-1
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis

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
