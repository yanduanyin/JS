<template>
  <div>
    <!-- <MyChild></MyChild> -->
    <!-- <my-child></my-child> -->
  <MySubChild />
  </div>
</template>
<script>
import MySubChild from './SubChild'
export default {
  components: {
    // MyChild 
    MySubChild
  }
}
</script>
<style scoped>

</style>