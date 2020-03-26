<template>
  <div id="home_page">
    <aSideBar />
  </div>
</template>
<script>
import aSideBar from '../../components/auto_page/aSideBar.vue'
export default {
  components: {
    aSideBar
  }
}
</script>
<style lang="stylus" scoped>
#home_page
  width: 1190px
  margin: 11px auto 0
</style>