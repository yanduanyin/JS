<template>
  <div>
    <button @click="handleToast">购买</button>
    <!-- <toast msg="测试弹窗一" :visiable="visiable"/> -->
  </div>
</template>

<script>
// import Toast from './Toast/index'
import showMessage from './Toast/index.js'
export default {
  name: 'HelloWorld',
  // components: {
  //   Toast
  // },
  data () {
    return {
      visiable: false
    }
  },
  methods: {
    handleToast () {
      // this.visiable = true;
      // setTimeout(() => {
      //   this.visiable = false;
      // }, 3000)
      showMessage('没到开售时间');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
