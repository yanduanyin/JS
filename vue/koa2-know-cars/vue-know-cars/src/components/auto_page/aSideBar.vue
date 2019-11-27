<template>
  <section :class="['clearfix']">
    <div class="listLt fl">
      <div :class="['listLt-item', {'active':currentIndex === index}]" v-for="(item,index) in asideList" :key="index"
        @click="clickColor(index, $event)">
        <span :data-letter="item.letter">A</span>
      </div>
    </div>
    <section class="listRt" @scroll.stop="handleScroll" >
      <div class="listRt-wrapper" ref="nameWrapper">
        <div class="listRt-box" v-for="(Bitem, index) in asideList" :key="index" ref="nameList">
          <div class="listRt-container" :data-letter="A" v-for="(items, index) in Bitem.child" :key="index">
            <h4 class="listRtHitem">A</h4>
            <div class="listRt-item-box">
              <span class="listRt-item">ASS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
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
          console.log('asideData:', res.data)
          this.asideList = res.data 
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
     //  console.log('滚动了一次')
     let nameWrapper = this.$refs.nameWrapper
      // console.log(nameWrapper.getBoundingClientRect().top)
      this.scrollTop = nameWrapper.getBoundingClientRect().top
      if (this.scrollTop >= 0) {
        this.scrollY = 80 - this.scrollTop
      } else if (this.scrollTop < 0) {
        this.scrollY = Math.abs(this.scrollTop) + 80
      }
      // console.log('滚动了:',this.scrollY) 
    },
    clickColor(index, event) {
      // console.log(index, event)
      let el = this.$refs.nameWrapper
      // console.log(el)
      this.scrollY = this.listHeight[index]
      // console.log(this.listHeight[index])
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
      console.log(this.listHeight)
    }
    }
}
</script>

<style lang="stylus" scoped>

</style>