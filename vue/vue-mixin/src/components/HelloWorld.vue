<template>
  <div>
    <my-dialog />
    <my-loading />
  </div>
</template>
<script>
import MyDialog from './MyDialog'
import MyLoading from './MyLoading'
export default {
  data () {
    return {
    }
  },
  components: {
    MyDialog,
    MyLoading
  }
}
</script>
<style scoped>

</style>