<template>
  <div class="main-content">
    <!-- 头部的header -->
    <!-- //使用组件 -->
    <Header></Header>
  </div>
</template>

<script>
// 引入组件
import Header from '@/common/Header'
export default {
  name: 'mainContent',
  data () {
    return {
    }
  },
  components: {// 声明组件
    Header
  }
}
</script>

<style scoped>

</style>
