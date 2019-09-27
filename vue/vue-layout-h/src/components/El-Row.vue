<script>
export default {
  props: {
        tag: {
          type: String, default: 'div'
        },
        jiange: {
          type: Number
        }
      },
//  <template>
  // <div class="el-row">
  //   <slot></slot>
  // </div>
// </template>
  render (h) {
    // h === createElement
    return h (
      this.tag,
      {
        class: ['el-row']
      },
      this.$slots.default
    ) 
  }
}
</script>
<style scoped>
.el-row {
  width: 100%;
  display: flex;
}
</style>
