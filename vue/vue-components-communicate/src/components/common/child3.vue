<template>
  <div class="child3">
    <p @click="change">{{msg}}</p>
  </div>
</template>
<script>
// import bus from '@/bus/index.js'
export default {
  name: 'demo',
  data () {
    return {
      msg: '点击改变数据'
    }
  },
  created () {
    this.$bus.$on('toChild3', (param) => {
      console.log(param)
    })
  },
  // 注意：如果用了$on接收方法的话，要在另外一个生命周期里结束一下
  beforeDestroy() {
    this.$bus.$off('toChild3')
  },
  methods: {
    change () {
      // $emit 可以携带参数传给父组件
      this.$emit('fromChild',this.msg)
    }
  }
}
</script>
<style scoped>

</style>