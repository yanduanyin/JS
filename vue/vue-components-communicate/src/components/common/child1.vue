<template>
  <div>
    {{mag}}
    {{msg2}}
    <button @click="fn">按钮</button>
    {{a}}
    {{b}}
    <button @click="add">+</button>
    {{count}}
  </div>
</template>
<script>
export default {
  // props: ['mag', 'msg2', 'fn', 'a', 'b', 'count'],
  // 如果父组件传值过来是用v-bind传过来的对象，那么子组件里用props接收必须要将对象里的key一一接收
  props: {
    a: {
      type:Number
    },
    b: {
      type:Number
    }
  },
  methods: {
    add () {
      // this.count++   props过来的数据不可操作
      this.$emit('addCount')
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>