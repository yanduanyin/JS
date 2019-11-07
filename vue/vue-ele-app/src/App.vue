<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
      <!-- <button @click="showBu">点击我</button> -->
    </div>
    <router-view :seller="seller"/>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  methods: {
    // showBu () {
    //   this.$toast('恭喜你', 'top')
    // }
  },
  created () {
    // 请求 easy mock 数据方式   this.$http.get('easy mock里的接口地址')
    // 本地服务器数据
    this.$http.get('http://localhost:8081/static/seller.json')
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      })
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin.styl'
@import './common/stylus/plugin.styl'
.tab
  display flex
  height 40px
  z-index 9999
  line-height 40px
  // align-items center
  border-bottom 1px solid rgba(7, 17, 27, 0.1)
  border-1px(rgba(7, 17, 27, 0.1))
  &-item
    flex 1
    text-align center
    & > a
      display block
      font-size 14px
      color rgb(77, 85, 93)
      text-decoration none
      &.router-link-active
        color rgb(240, 20, 20)
</style>
