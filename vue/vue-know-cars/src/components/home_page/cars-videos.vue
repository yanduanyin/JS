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
    <!-- <div class="swiper-container">
      <div class="img-wrapper">
        <div class="img-parent-box" ref="parent">
          <div class="img-item-box fl" v-for="(item, index) in sliderList" :key="index" ref="item">
            <div class="left-section fl">
              <a href="https://www.dcdapp.com/article/6757993213706928648" target="_blank" rel="noopener noreferrer">
                <div class="big-video-transition">
                  <div class="big-video">
                    <div class="big-video-icon"></div>
                  </div>
                </div>
                <div class="pic-title line-1">雷克萨斯LC：超百万的豪华GT，看完你还买911吗？</div>
              </a>
            </div>
            <div class="right-rection">
              <div class="small-video-wrapper">
                <a href="https://www.dcdapp.com/article/6758036180266140163" target="_blank" rel="noopener noreferrer">
                  <div class="small-video-transition">
                    <div class="small-video">
                      <div class="small-video-icon">16:50</div>
                    </div>
                  </div>
                  <div class="pic-title line-1">情怀不敌硬实力？背靠大众的捷达VS5是否德味儿依旧？</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
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
      sliderListData: [
        {imgUrl: 'https://p3.pstatp.com/obj/17492000011dd357938ac.jpg'},
        {imgUrl: 'https://p3.pstatp.com/obj/1749500001118411c9039.jpg'},
        {imgUrl: 'https://p3.pstatp.com/obj/174950000111a0d8a692e.jpg'},
        {imgUrl: 'https://p3.pstatp.com/obj/1749500001119e5971af9.jpg'},
        {imgUrl: 'https://p3.pstatp.com/obj/17492000011e4cd85d7fe.jpg'}
      ]
    }
  },
  components: {
    videoSlider
  },
  created() {
    this.$nextTick(() => {
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