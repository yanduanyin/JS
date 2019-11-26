<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <navigationBar />
      <div class="main-mg">
        <router-view />
      </div>
    </div>
    <div class="main-mg" v-else>
      <router-view />
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
// .slideRight-enter
//   transform translateX(100%)
//   position absolute
// .slideRight-leave-to
//   transform translateX(-100%)
//   position absolute
// .slideLeft-enter
//   transform translateX(-100%)
//   position absolute
// .slideLeft-leave-to
//   transform translateX(100%)
//   position absolute
// .slideRight-enter-active,
// .slideRight-leave-active,
// .slideLeft-enter-active,
// .slideLeft-leave-active
//   transition: transform 2s

</style>
