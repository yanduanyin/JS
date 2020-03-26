<template>
  <section :class="['clearfix', 'container']">
    <div class="listLt fl">
      <div :class="['listLt-item', {'active':currentIndex === index}]" v-for="(item,index) in asideList" :key="index"
        @click="clickColor(index, $event)">{{item.bigLetter}}</div>
    </div>
    <div class="listRt" @scroll.stop="handleScroll" >
      <div class="listRt-wrapper" ref="nameWrapper">
        <div class="listRt-box" :data-letter="Bitem.bigLetter" v-for="(Bitem, index) in asideList" :key="index" ref="nameList">
          <h4 class="listRtHitem">{{Bitem.bigLetter}}</h4>
          <p :class="['listRt-container', items.brand_id]" v-for="(items, index) in Bitem.child" :key="index">
            <img :src="items.imgSrc" alt="" srcset="" class="pic">
            <span class="listRt-item">{{items.text}}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      asideList: [],// 接受axios请求的数据
      listHeight: [], // 保存不同首字母 城市名列表的高度
      scrollY: 0, // 初始化滚动距离
      scorllTop: 0
    }
  },
  created() {
    this.aSideListShow()
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
    aSideListShow () {
      this.$http.get('http://localhost:8080/static/Data/auto/asideData.json')
        .then(res => {
          // console.log('asideData:', res.data)
          this.asideList = res.data 
          this.$nextTick(() => { // 页面渲染完成才会执行
            this._calculateHeight()
          })
        })
        .catch((err)=>{
          console.log('err:请求数据失败！');
        })　　　　
    },
    // 监控pc 端滚轮滑动
    //getBoundingClientRect()   这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。分别表示元素各边与页面上边和左边的距离。
    // 
    // var box=document.getElementById('box');         // 获取元素
    // alert(box.getBoundingClientRect().top);         // 元素上边距离页面上边的距离
    // alert(box.getBoundingClientRect().right);       // 元素右边距离页面左边的距离
    // alert(box.getBoundingClientRect().bottom);      // 元素下边距离页面上边的距离
    // alert(box.getBoundingClientRect().left);        // 元素左边距离页面左边的距离
    handleScroll () {
      // console.log('滚动了一次')
     let nameWrapper = this.$refs.nameWrapper
      console.log(nameWrapper.getBoundingClientRect().top)
      this.scrollTop = nameWrapper.getBoundingClientRect().top
      if (this.scrollTop >= 0) {
        this.scrollY = 80 - this.scrollTop
      } else if (this.scrollTop < 0) {
        this.scrollY = Math.abs(this.scrollTop) + 80
      }
      //  nameList.style.top =(-this.scrollY)+'px'
      // console.log('滚动了:',this.scrollY) 
    },
    clickColor(index, event) {
      console.log(index, event)
      let el = this.$refs.nameWrapper
      console.log(el)
      this.scrollY = this.listHeight[index]
      console.log(this.scrollY)
      el.style.top =(-this.scrollY)+'px'
    },
    _calculateHeight () {
      let nameList = this.$refs.nameList
      // console.log(this.$refs)
      // console.log(nameList)
      let Height = 0
      this.listHeight.push(Height)
      for (let i = 0; i < nameList.length; i++) {
        let item = nameList[i]
        Height += item.clientHeight
        // console.log(Height, '----')
        this.listHeight.push(Height)
      }
      // console.log(this.listHeight)
    }
    }
}
</script>

<style lang="stylus" scoped>
.container
  position: sticky;
  // position absolute
  top: 0;
  display: inline-block;
  width: 270px;
  height: 666px;
  vertical-align: top;
  .listLt
    width: 28px
    padding: 11px 0px
    -webkit-user-select: none
    user-select: none
    background-color: #333333
    .listLt-item
      height: 28px
      line-height: 28px
      font-size: 16px
      text-align: center
      color: #fff
      &.active
        color: #333333
        -webkit-transition: all 0.3s ease-in-out
        transition: all 0.3s ease-in-out
        background-color: #ffe100
      &:hover
        background-color: rgba(255,255,255,0.2)
        // -webkit-transition: background 0.3s ease-in-out;
        // transition: background 0.3s ease-in-out;
        cursor: pointer
  .listRt
    position relative
    // position absolute
    height: 722px
    overflow-x: hidden
    overflow-y: auto
    -webkit-transform: translateZ(0)
    transform: translateZ(0)
    border: 1px solid #e6e6e6
    border-left: 0
    box-sizing: border-box
    .listRt-wrapper
      position absolute
      .listRt-box
        .listRtHitem
          position: sticky
          top: 0
          line-height: 28px
          padding-left: 16px
          font-size: 12px
          color: #666
          background: #f8f8f8
        .listRt-container
          line-height: 52px
          padding-left: 16px
          cursor: pointer
          font-size: 16px
          &:hover
            color: #406599
          .pic
            width: 36px
            height: 36px
            margin-right: 8px
            border-radius: 50%
            vertical-align: middle
</style>