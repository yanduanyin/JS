<template>
  <div class="switch-img-box" id="ec-slide-box" :style="{width: swidth + 'px'}"
  >
    幻灯片
  </div>
</template>
<script>
export default {
  name: 'EcSlide',   // 做公用组件请加name标识，
  // 组件内部数据
  data () {
    return {
      timer: null,   //定时器  可以形成一种幻灯的感觉  用定时器就可以自己打理

    }
  },
  // 外界的传参  更好定制  
  // props: ['time', 'autoplay']   // 松散类型
  props: {
    time: {
      type: Number,
      default: 4000
    },
    autoplay: {
      type: Boolean
    },
    swidth: {
      type: Number
  }
  },
  // 计算属性
  computed: {

  },
  // 生命周期函数  专门处理事件 （函数定义）
  methods: {
    
  }
}
</script>
<!-- scoped  将样式设置为只作用于本组件   独有的  单独组件内部使用的类名(样式)-->
<style lang="stylus" scoped>
// stylus stylus-loader  将样式加工再输出css文档
  .switch-img-box 
    position relative
    height 100%
    width 100%
</style>
