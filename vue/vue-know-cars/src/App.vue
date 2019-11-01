<template>
  <div id="app">
    <navigationBar />
    <div class="main-mg">
      <router-view/>
    </div>
  </div>
</template>

<script>
import navigationBar from './components/common_components/navigationBar.vue'
export default {
  name: 'App',
  components: {
    navigationBar
  }
}
</script>

<style lang="stylus" scoped>

#app
  .main-mg
    width 1190px
    margin 0 auto


</style>
