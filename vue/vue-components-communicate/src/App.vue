<template>
  <div id="child1">
    <child1 :msg="msg" :msg2="msg2" :fn="appFn" v-bind="test" :count="count" @addCount="countAdd" ></child1>
  </div>
</template>

<script>
import child1 from '@/components/common/child1'

export default {
  name: 'App',
  components: {
    child1
  },
  data () {
    return {
      msg: '第一次给child1',
      msg2: '第二次给child1',
      test: {
        a: 1,
        b: 2
      },
      count: 1
    }
  },
  methods: {
    appFn () {
      console.log('我是APP.vue 传给child1的方法')
    },
    countAdd () {
      this.count++
    }
  }
}
</script>

<style>
</style>
