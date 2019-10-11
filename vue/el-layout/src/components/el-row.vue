<!--<template>
  <div class="el-row">
    <slot></slot>
  </div>
</template>-->
<script>
export default {
  data() {},
  render(h) {
    return ;
    let obj = h(
      'div',
      {},
      'render 函数'
    )
    // return 'render 函数'
    console.log(obj)
    return obj
  }
}
</script>
<style scoped>
/* // 3 1
// 总：24列  */
</style>