<template>
  <div>
    <!-- <MyChild></MyChild> -->
    <!-- <my-child></my-child> -->
    <h2 :style="{color: theme}">一段话</h2>
  </div>
</template>
<script>
// import SubChild from './SubChild'
export default {
  inject: ['theme']
}
</script>
<style scoped>

</style>