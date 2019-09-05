<template>
  <div class="main-content">
    <!-- 头部的header -->
    <!-- //使用组件 -->
    <Header></Header>
    <Slide></Slide>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
// 引入组件
import Header from '@/common/Header'
import Slide from '@/common/Slide'

export default {
  name: 'mainContent',
  data () {
    return {
    }
  },
  components: {// 声明组件
    Header,
    Slide
  }
}
</script>

<style scoped>
.content {
  padding-left: 200px;
}
</style>
