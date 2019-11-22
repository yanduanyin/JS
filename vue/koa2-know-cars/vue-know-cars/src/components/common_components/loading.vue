<template>
  <div >
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
      <span class="text">加载中…</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@keyframes scale1
  0% 
    opacity 1
    transform scale(1.4)
  50%
    opacity 1
    transform scale(0.4)
  100%
    transform scale(1.4)
.spinner
  text-align center
  font-size 0px
  padding 20px 0px
  .bounce1
    display inline-block
    vertical-align middle
    width 4px
    height 4px
    margin-right 6px
    background-color rgb(193,193,193)
    border-radius 100%
    animation scale1 1.4s 0s infinite linear
  .bounce2
    display inline-block
    vertical-align middle
    width 4px
    height 4px
    margin-right 6px
    background-color rgb(193,193,193)
    border-radius 100%
    animation scale1 1.4s 0.25s infinite linear
  .bounce3
    display inline-block
    vertical-align middle
    width 4px
    height 4px
    margin-right 6px
    background-color rgb(193,193,193)
    border-radius 100%
    animation 1.4s scale1 .5s infinite linear
  .text 
    font-size 12px
    color rgb(102, 102, 102)
    margin-left 6px
    vertical-align middle
</style>