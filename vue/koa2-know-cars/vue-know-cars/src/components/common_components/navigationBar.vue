<template>
  <div id="home_page" v-show="$route.meta.keepAlive">
    <div class="header_mg clearfix">
      <a href="http://localhost:8080/#/" class="dcd_login fl"></a>
      <router-link to="/" target="_blank" :class="['nav-alink', 'fl',  isActive1]">首页</router-link>
      <router-link to="/auto" target="_blank" :class="['nav-alink', 'fl', isActive2]">车型库</router-link>
      <router-link to="/video" target="_blank" :class="['nav-alink', 'fl', isActive3]">视频</router-link>
      <!-- 搜索框 -->
      <div class="search-container fl clearfix" v-show="isSearch">
        <i class="search-icon-box fl">
          <span class="search-icon iconfont icon-fangdajing fl"></span>
        </i>
        <input type="search" placeholder="请输入你要搜索的内容" class="searchInput fl">
        <button type="submit" class="searchBt">搜索</button>
      </div>
      <!-- 进入懂车号 -->
      <a href="#/entrance" target="_blank" rel="noopener noreferrer" class="dcdmp" v-show="isActive">进入懂车号</a>
      <!-- 二维码部分 -->
      <a href="https://www.dcdapp.com/download/" class="nav-qrcodeWrap">
        <span class="nav-qrcode-bt iconfont icon-erweima">
          <span>下载懂车帝APP</span>
        </span>
        <div class="nav-qrcode-big">
          <h3>扫码下载懂车帝APP</h3>
          <img src="http://localhost:8080/static/know-cars-image/qrcode@3x-.jpg" alt class="qrcode">
        </div>
      </a>
      <!-- 位置信息组件 -->
      <siteBar  />
    </div>
  </div>
</template>
<script>
import siteBar from './siteBar'
export default {
  data() {
    return {
      isActive: true,
      isSearch: true,
      isActive1: '',
      isActive2: '',
      isActive3: ''
    }
  },
  components: {
    siteBar
  },
  watch:{ // watch监听路由变化
    $route(to,from){
      // console.log(to.path, 'path--------------');
      switch(to.path) {
        case '/':
          this.isActive1 = 'nav-alink-color';
          this.isActive2 = '';
          this.isActive3 = '';
          break;
        case '/auto':
          this.isActive2 = 'nav-alink-color';
          this.isActive1 = '';
          this.isActive3 = '';
          break;
        case '/video':
          this.isActive3 = 'nav-alink-color';
          this.isActive1 = '';
          this.isActive2 = '';
          break;
      }
    }
  },
  created() {
  },  
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
#home_page
  min-width 1200
  height 68px
  line-height 68px
  margin 0 auto
  font-size 18px
  color #ffffff
  background #333
  box-shadow 0 2px 10px 0 rgba(0,0,0,0.12)
  .header_mg
    width 1200px
    margin 0 auto
    .dcd_login
      display inline-block
      width 133px
      height 40px
      margin 14px 8px 0 0
      vertical-align middle
      border-radius 5px
      background url('http://localhost:8080/static/know-cars-image/logo-img@3x.png') no-repeat
      background-size 133px 40px
    .nav-alink
      display inline-block
      line-height 68px
      text-decoration none // 去掉下划线
      margin-left 50px
      letter-spacing 0 // 字符间距 
      &:hover
        color #ffe733 
    .nav-alink-color
      color #ffe733
    .nav-qrcodeWrap
      position relative
      float right
      font-size 16px
      &:hover
        color #ffe733
      .nav-qrcode-bt
        font-size 24px
        vertical-align top
        span
          font-size 16px
          margin-left 8px
          vertical-align top
      .nav-qrcode-big
        display none
        position absolute
        top 68px
        right -8px
        width 280px
        height 325px
        z-index 2000
        box-shadow 0 2px 12px 0 rgba(0,0,0,0.2)
        text-align center
        background-color #ffffff
      &:hover .nav-qrcode-big
        display block
        h3
          color #000
          font-size 18px
          font-weight 600
        .qrcode
          width 240px
          height 240px
    .dcdmp
      float: right
      color: #fff
      font-size: 16px
      margin-left: 24px
      &:hover
        color #ffe733
    .search-container
      position relative
      width 301px
      // height 32px
      margin-left 60px
      margin-top 18px
      background-color rgb(255, 255, 255)
      border-radius 4px
      .search-icon-box
        width 28px
        height 32px
        display flex
        -webkit-box-align center
        align-items center
        -webkit-box-pack center
        justify-content center
        .search-icon
          display inline-block
          font-size 16px
          color #a7a4a4
          line-height 1
          vertical-align middle
      .searchInput
        width 213px
        height 32px
        line-height 12px
        font-size 12px
        box-sizing border-box
        -webkit-appearance: none
        padding 0px 10px 0px 0px
        outline 0px
        border-width 0px
      .searchBt
        width 60px
        line-height 32px
        font-size 14px
        background-color rgb(255, 225, 0)
        cursor pointer
        float right
        border-width 0px
        border-radius 0px 4px 4px 0px
        outline none
</style>