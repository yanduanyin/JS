<template>
  <div class="featured-videos">
    <div class="videos-wrapper">
      <div class="title fl">精选视频</div>
      <ul class="video-title-list">
        <li class="title-item-box fl" v-for="(item, index) in titleData" :key="index">
          <a target="_blank" :title="item.text" class="title-item" :href="'https://www.dcdapp.com/video/groups/'+item.videoUrl">{{item.text}}</a>
        </li>
      </ul>
      <div class="fr">
        <a href="/video" class="more">
          进入视频频道
          <span class="more-icon iconfont icon-jiantouarrow487"></span>
        </a>
      </div>
    </div>
    <videoSlider :sliderList="sliderListData" :outClass="'swiper-container'"/>
  </div>
</template>

<script>
import videoSlider from '../common_components/videoSlider.vue'
export default {
 data() {
   return {
      titleData: [
        {
          videoUrl: '128',
          text: '大神评测官'
        },
        {
          videoUrl: '124',
          text: '汽车角斗场'
        },
        {
          videoUrl: '129',
          text: '懂车评测'
        },
        {
          videoUrl: '144',
          text: '明星评测官'
        },
        {
          videoUrl: '111',
          text: '38号车评中心'
        },
        {
          videoUrl: '59',
          text: '大疯车'
        },
        {
          videoUrl: '131',
          text: '丈母娘唠车'
        },
        {
          videoUrl: '123',
          text: '驶向荒野之旅第二季'
        }
      ],
      sliderListData: []
    }
  },
  components: {
    videoSlider
  },
  created() {
    this.$nextTick(() => {
      this.$http.get('http://localhost:8080/static/Data/shouye/videosData.json')
      .then((res) => {
        this.sliderListData = res.data
      })
    })
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.featured-videos
  height 442px
  .videos-wrapper
    height: 60px;
    line-height: 60px;
    margin-bottom: 16px;
    border-bottom: 1px solid #e6e6e6;
    .title
      font-size: 24px;
      font-weight: 500;
      color: #333333;
    .video-title-list
      display: inline-block;
      margin: 0 20px 0 40px;
      font-size: 16px;
      color: #333333;
      .title-item-box
        cursor: pointer;
        .title-item
          &:hover 
            color: #406599
        &:not(:last-child)::after
          content: '|';
          padding: 0 8px;
          color: #e6e6e6;
    .fr
      float right
      .more
        font-size: 16px;
        color: #333333;
        -webkit-text-decoration: none;
        text-decoration: none;
  .swiper-container
    margin 0 auto 
    position relative
    width: 1190px;
    min-width: 1190px;
    list-style none
    padding 0
    z-index 1
</style>