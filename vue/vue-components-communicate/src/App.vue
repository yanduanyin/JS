<template>
  <!-- <div id="child1"> -->
    <!-- 父组件传值（方法）给子组件 -->
    <!-- <child1 :msg="msg" :msg2="msg2" :fn="appFn" v-bind="test" :count="count" @addCount="countAdd"></child1>
    <P>----------------------------------</P>
    <child2></child2>
    <P>----------------------------------</P>
    <child3 @fromChild="fromChild"></child3>
    <span>{{message}}</span>
  </div> -->
  <router-view/>
</template>

<script>
import child1 from '@/components/common/child1'
import child2 from '@/components/common/child2'
import child3 from '@/components/common/child3'

export default {
  name: 'App',
  components: {
    child1,
    child2,
    child3
  },
  data () {
    return {
      msg: '第一次给child1',
      msg2: '第二次给child1',
      test: {
        a: 1,
        b: 2
      },
      count: 1,
      message: '父组件默认的数据'
    }
  },
  methods: {
    appFn () {
      console.log('我是APP.vue 传给child1的方法')
    },
    countAdd () {
      this.count++
    },
    fromChild (e) {
      // console.log(e)
      this.message = e
    }
  }
}
</script>

<style>
</style>
