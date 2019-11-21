<template>
  <div>
    <div class="box clearfix" v-for="(item, index) in newsList" :key="index">
      <a :href="'https://www.dcdapp.com'+item.href_logo" class="photo fl">
        <span class="image" :style="'background-image: url('+item.imgUrl+')'"></span>
        <span class="duration" v-show="item.video_time">
          <i class="icon"></i>
          {{item.video_time}}
        </span>
      </a>
      <div class="info">
        <a :href="'https://www.dcdapp.com'+item.href_title" class="title" target="_blank">{{item.text_title}}</a>
        <a :href="'https://www.dcdapp.com'+item.href_name" class="name" target="_blank">
          <span>{{item.text_name}}</span>
          <span>{{item.text_time}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsList',
  props: {
    newsList: {
      type: Array
    }
  }
}
</script>

<style scoped lang="stylus">
.box
  height: 124px
  border-bottom: 1px solid rgb(237, 237, 237)
  padding: 12px 0px
  .photo
    position: relative
    display: block
    margin-right: 22px
    width: 152px
    height: 100px
    cursor: pointer
    .image
      position: relative
      display: inline-block
      vertical-align: middle
      width: 100%
      height: 100%
      background-size: cover
      transition: transform 0.3s ease-in-out 0s
    .duration
      position: absolute
      right: 4px
      bottom: 4px
      display: block
      width: 94px
      height: 40px
      line-height: 40px
      font-size: 20px
      text-align: center
      color: rgb(255, 255, 255)
      transform: scale(0.5)
      transform-origin: right bottom
      background-color: rgba(0, 0, 0, 0.4)
      border-radius: 30px
      .icon
        display: inline-block
        width: 17px
        height: 29px
        margin-right: 3px
        vertical-align: text-bottom
        background: url('https://sf1-ttcdn-tos.pstatp.com/obj/motor-img/81c16ecb55fae398c44652173375536b') center / cover no-repeat
  .info
    position: relative
    display: table-cell
    width: 100%
    height: 100px
    vertical-align: middle
    text-align: left
    .title
      line-height: 28px
      font-size: 20px
      font-weight: 500
      cursor: pointer
      transition: color 0.3s ease-in-out 0s
    .title:visited 
      color: rgb(153, 153, 153)
    .name
      display: block
      margin-top: 8px
      color: rgb(153, 153, 153)
      span 
        margin-right: 8px
</style>