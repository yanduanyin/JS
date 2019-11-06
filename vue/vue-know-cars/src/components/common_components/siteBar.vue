<template>
  <div class="site-container"  @click="cityListShow">
    <span class="site-icon iconfont icon-weizhi"></span>
    {{hostCity}}
    <section :class="['cityList']" v-show="cityShow" @click.stop>
      <div class="listLt fl">
        <div :class="['listLt-item', {'active':currentIndex === index}]" v-for="(item,index) in siteLetter" :key="index"
         @click="clickColor(index, $event)">
          <span :data-letter="item.letter">{{item.content}}</span>
        </div>
      </div>
      <section class="listRt" ref="nameWrapper">
        <div class="listRt-wrapper">
          <div class="listRt-box" v-for="(Bitem, index) in siteName" :key="index" ref="nameList">
            <div class="listRt-container" :data-letter="Bitem.letter" v-for="(items, index) in Bitem.child" :key="index">
              <h4 class="listRtHitem">{{items.h4_content}}</h4>
              <div class="listRt-item-box" v-for="(item, index) in items.citynames" :key="index" @click="clickCity(item.city_name)">
                <span class="listRt-item">{{item.city_name}}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <span class="arrow-down iconfont icon-jiantou"></span>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
export default {
  data() {
    return {
      siteLetter: [],// 接受axios请求的数据
      siteName: [], // 接受axios请求的数据
      hostCity: '南昌', //默认地名南昌
      // currentIndex: 0,
      cityShow: false, // 控制城市列表dmo结构出现的开关变量
      listHeight: [], // 保存不同首字母 城市名列表的高度
      scrollY: 0 // 初始化滚动距离
    }
  },
  created() {
  },
  mounted() {
    window.addEventListener('mousewheel',this.handleScroll,false)
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    }
  },
  methods: {
   cityListShow () {
     this.cityShow = !this.cityShow
     this.$http.get('http://localhost:8080/static/Data/shouye/siteData/siteletterData.json')
      .then(res => {
        // console.log('siteletterData:', res.data)
        this.siteLetter = res.data 
      })
      .catch((err)=>{
        console.log('err:请求数据失败！');
      })　　　　
     this.$http.get('http://localhost:8080/static/Data/shouye/siteData/siteData.json')
      .then(res => {
        // console.log('siteData:', res)
        this.siteName = res.data
         this.$nextTick(() => { // 页面渲染完成才会执行
          this._calculateHeight()
          this.handleScroll()
        })
      })
      .catch((err)=>{
        console.log('err:请求数据失败！');
      })　
   },
   clickCity(name) {
    //  console.log(name)
    this.cityShow = !this.cityShow
    this.hostCity = name
   },
   // 监控pc 端滚轮滑动
   handleScroll (e) {
     //var direction = e.deltaY>0?'down':'up' 该语句可以用来判断滚轮是向上滑动还是向下
    if(document.getElementsByTagName("li").length == 1){   //此处决定无论一次滚轮滚动的距离是多少，此事件都得等上次滚动结束，才会执行本次
          this.isShow = false
          setTimeout(() => {
              this.isShow = true
              ++ this.nowIndex
              if(this.nowIndex == 3){
              this.nowIndex = 0
          }
          }, 10)
      }
    },
    clickColor(index, event) {
      console.log(index)
      console.log(event)
      // this.currentIndex = index
      let nameList = this.$refs.nameList
      let el = nameList[index]
      // this.namesScroll.scrollToElement(el, 3)
   },
    _calculateHeight () {
      let nameList = this.$refs.nameList
      let height = 0
      // console.log(this.$refs)
      // console.log(nameList)
      this.listHeight.push(height)
      // console.log(this.$refs.nameWrapper.clientHeight)
      for (let i = 0; i < nameList.length; i++) {
        let item = nameList[i]
        // console.log(item, item.clientHeight)
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.site-container
  position relative
  float right
  margin-right 50px
  font-size 16px
  cursor pointer
  user-select none
  &:hover
    color #ffe733
  .site-icon
    display inline-block
    font-size 24px
    vertical-align middle
    margin-right 1px
    margin-top -1px
    line-height 1
  .arrow-down
    display inline-block
    font-size 16px
    margin-top -3px
    vertical-align middle
    line-height 1
  .cityList
    position absolute
    top 68px
    right 0px
    z-index 1000
    width 350px
    height 616px
    color rgb(51, 51, 51)
    background-color rgb(255, 255, 255)
    box-shadow rgba(0, 0, 0, 0.2) 0px 2px 12px 0px
    overflow hidden
    .listLt
      display inline-block
      width 43px
      height 100%
      line-height 0
      vertical-align top
      padding 12px 8px
      border-right 1px solid rgb(230, 230, 230)
      box-sizing border-box
      .listLt-item
        display inline-block
        width 26px
        height 26px
        line-height 26px
        font-size 14px
        text-align center
        &:hover
          background-color rgb(255, 225, 0) !important
      .active
            font-weight 500
            background rgb(255, 225, 0)
            transition all 0.2s ease 0s
    .listRt
      width 307px
      height 100%
      position absolute
      left 43px
      overflow-x hidden
      overflow-y auto
      float right
      // transform translateZ(0px)
      margin 12px 0px
      &::-webkit-scrollbar 
        display: none
      .listRt-wrapper
        .listRt-box
          .listRt-container
            line-height 0
            padding-bottom 8px
            .listRtHitem
              position sticky
              top 0px
              line-height 28px
              margin-bottom 8px
              padding-left 16px
              font-size 12px
              color rgb(102, 102, 102)
              background rgb(248, 248, 248)
            .listRt-item-box
              display inline-block
              width 23%
              line-height 22px
              text-align center
              padding 8px 0px
              &:hover
                background-color rgba(255, 225, 0, 0.2)
</style>