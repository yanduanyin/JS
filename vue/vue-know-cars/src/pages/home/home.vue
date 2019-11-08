<template>
  <div id="home_page">
    <div id="main">
      <carsNav />
      <carsSeries />
      <carsNowSwitch />
    </div>
    <div class="hot-news-content">
      <div class="hot-news-title">热点新闻</div>
      <carsHotNews/>
    </div>
    <div class="featured-videos">
      <carsVideos />
    </div>
    <div class="headline-news">
      <carsContentApp />
    </div>
  </div>
</template>
<script>
import carsNav from '../../components/home_page/cars-navigation'
import carsSeries from '../../components/home_page/cars-series'
import carsNowSwitch from '../../components/home_page/cars-now-switch'
import carsHotNews from '../../components/home_page/hot-news'
import carsVideos from '../../components/home_page/cars-videos'
import carsContentApp from '../../components/home_page/cars-content-app'
export default {
  components: {
    carsNav,
    carsSeries,
    carsNowSwitch,
    carsHotNews,
    carsVideos,
    carsContentApp
  }
}
</script>
<style lang="stylus" scoped>
.hot-news-title
  height: 60px
  font-size: 24px
  font-weight: 500
  line-height: 60px
  color: #333333
  border-bottom: 1px solid #e6e6e6
  margin: 10px 0 16px
</style>