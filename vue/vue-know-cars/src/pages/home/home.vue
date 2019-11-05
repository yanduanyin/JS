<template>
  <div id="home_page">
    <div id="main">
      <carsNav />
    </div>
    <div class="news-content">
      热点内容
    </div>
    <div class="featured-videos">
      精选视频
    </div>
    <div class="headline-news">
      热门排行榜
    </div>
  </div>
</template>
<script>
import carsNav from '../../components/home_page/cars-navigation'
export default {
  components: {
    carsNav
  }
}
</script>
<style lang="stylus" scoped>

</style>