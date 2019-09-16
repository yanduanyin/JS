<template>
  <div>
    {{mag}}
    {{msg2}}
    <button @click="fn">按钮</button>
    {{test.a}}
    {{test.b}}
    <button @click="add">+</button>
    {{count}}
  </div>
</template>
<script>
export default {
  props: ['mag', 'msg2', 'fn', 'test', 'count'],
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