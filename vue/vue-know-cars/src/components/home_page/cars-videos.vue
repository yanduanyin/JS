<template>
  <div class="featured-videos">
    <div class="videos-wrapper">
      <div class="title fl">精选视频</div>
      <ul class="video-title-list">
        <li class="title-item-box fl" v-for="(item, index) in titleData" :key="index">
          <a target="_blank" :title="item.text" class="title-item" :href="'https://www.dcdapp.com/video/groups/'+item.videoUrl">{{item.text}}</a>
        </li>
      </ul>
      <div class="fr">
        <a href="/video" class="more">
          进入视频频道
          <span class="more-icon iconfont icon-jiantouarrow487"></span>
        </a>
      </div>
    </div>
    <div class="swiper-container">
      <div class="img-wrapper">
        <div class="img-parent-box" ref="parent">
          <div class="img-item-box fl" v-for="(item, index) in url" :key="index" ref="item">
            <div class="left-section fl">
              <a href="https://www.dcdapp.com/article/6757993213706928648" target="_blank" rel="noopener noreferrer">
                <div class="big-video-transition">
                  <div class="big-video">
                    <div class="big-video-icon"></div>
                  </div>
                </div>
                <div class="pic-title line-1">雷克萨斯LC：超百万的豪华GT，看完你还买911吗？</div>
              </a>
            </div>
            <div class="right-rection">
              <div class="small-video-wrapper">
                <a href="https://www.dcdapp.com/article/6758036180266140163" target="_blank" rel="noopener noreferrer">
                  <div class="small-video-transition">
                    <div class="small-video">
                      <div class="small-video-icon">16:50</div>
                    </div>
                  </div>
                  <div class="pic-title line-1">情怀不敌硬实力？背靠大众的捷达VS5是否德味儿依旧？</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination" ref="pagination">
        <span :class="['swiper-pagination-bullet', {'active':currentIndex === index}]"
          v-for="(item, index) in cirArr" :key="index" @click="clickCirN(index)"></span>
      </div>
      <div class="swiper-button-next button" @click="clickNext">
        <span></span>
      </div>
      <div class="swiper-button-prev button" @click="clickPrev">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 data() {
   return {
      titleData: [
        {
          videoUrl: '128',
          text: '大神评测官'
        },
        {
          videoUrl: '124',
          text: '汽车角斗场'
        },
        {
          videoUrl: '129',
          text: '懂车评测'
        },
        {
          videoUrl: '144',
          text: '明星评测官'
        },
        {
          videoUrl: '111',
          text: '38号车评中心'
        },
        {
          videoUrl: '59',
          text: '大疯车'
        },
        {
          videoUrl: '131',
          text: '丈母娘唠车'
        },
        {
          videoUrl: '123',
          text: '驶向荒野之旅第二季'
        }
      ], 
      rate:8, //一张图片的切换速度， 单位为px
      timer: null,//初始化一个定时器
      cirArr: [],
      picN: 0,//当前显示的图片下标
      cirN: 0,//当前显示图片的小圆点下标
      url: [
        {url: 'https://p3.pstatp.com/obj/17492000011dd357938ac.jpg'},
        {url: 'https://p3.pstatp.com/obj/1749500001118411c9039.jpg'},
        {url: 'https://p3.pstatp.com/obj/174950000111a0d8a692e.jpg'},
        {url: 'https://p3.pstatp.com/obj/1749500001119e5971af9.jpg'},
        {url: 'https://p3.pstatp.com/obj/17492000011e4cd85d7fe.jpg'}
      ]
    }
  },
  created() {
    this.$nextTick(() => {
      this.$refs.parent.appendChild(this.$refs.parent.children[0].cloneNode(true));//克隆第一张图片至列表尾部
      this.$refs.parent.style.width = this.$refs.parent.children.length * 1190 + 'px' // 将父容器的宽度根据内容动态添加
      //添加小圆点，之所用js添加小圆点，是因为小圆点的数量是由图片张数决定的。
      let len = this.$refs.item.length
      for(let i = 0; i < len;i++){
        this.cirArr.push(i);
      }
      this.autoRun()
    })
  },
  computed: {
    currentIndex() {
      return this.cirN
    }
  },
  methods: {
    RollNext(distance){ //参数distance：滚动的目标点（必为图片宽度的倍数）
      if (this.picN > 1) {
        // console.log('1111')
        this.autoRun()
      } else if (this.picN === 0) {
        this.autoRun()
      } else if (this.picN === 1) {
        // console.log(this.$refs.parent, '====55555')
        this.$refs.parent.style.left = 0;//改变left至真正的第一项处，这个过程是时间太快太短所以可以忽略不计然后立刻
        this.autoRun()
      }
       let img_parent_box = this.$refs.parent
      clearInterval(img_parent_boxTime);  //每次运行该函数必须清除之前的定时器！
      var speed = img_parent_box.offsetLeft < distance ?  this.rate : (0-this.rate);//判断图片移动的方向  此处用了三元运算符  ？ 前面的不等式成立时为rate,不成立时为0-rete
          // console.log(speed)
      let img_parent_boxTime = setInterval(function(){ //设置定时器，每隔10毫秒，调用一次该匿名函数
          img_parent_box.style.left = img_parent_box.offsetLeft + speed + "px";//每一次调用滚动到的地方 (速度为 speed px/5 ms)       offsetLeft为元素边框外侧到父元素边框内侧的距离    
          var leave = distance - img_parent_box.offsetLeft;//距目标点剩余的px值      
          /*接近目标点时的处理，滚动接近目标时直接到达， 避免rate值设置不当时不能完整显示图片*/
          // Math.abs()  abs() 方法可返回一个数的绝对值
          // console.log(speed);
          if (Math.abs(leave) <= Math.abs(speed)) {                    
              clearInterval(img_parent_boxTime);
              img_parent_box.style.left = distance + "px";
          } 
      },3);
    },
    RollPrev(distance){ //参数distance：滚动的目标点（必为图片宽度的倍数）
      this.autoRun()
      let img_parent_box = this.$refs.parent
      clearInterval(img_parent_boxTime);  //每次运行该函数必须清除之前的定时器！
      var speed = img_parent_box.offsetLeft < distance ?  this.rate : (0-this.rate);//判断图片移动的方向  此处用了三元运算符  ？ 前面的不等式成立时为rate,不成立时为0-rete
      let img_parent_boxTime = setInterval(function(){ //设置定时器，每隔10毫秒，调用一次该匿名函数
          img_parent_box.style.left = img_parent_box.offsetLeft + speed + "px";//每一次调用滚动到的地方 (速度为 speed px/5 ms) offsetLeft为元素边框外侧到父元素边框内侧的距离    
          var leave = distance - img_parent_box.offsetLeft;//距目标点剩余的px值      
          if (Math.abs(leave) <= Math.abs(speed)) {                    
              clearInterval(img_parent_boxTime);
              img_parent_box.style.left = distance + "px";
          } 
      },3);
    },
    autoRun(){
      let len = this.$refs.item.length
      this.picN = ++this.picN
      //如果轮播完克隆项应该轮播回第二张照片上，因为克隆项和第一张图片一样
      // console.log(this.picN)
      // 自动轮播，当图片为第一张时应该自动到第二张上去，所以要传入第二张的picN值，以次类推
      if (this.picN == len+1) {
        this.picN = 1
      }
      this.timer = setTimeout( () => {
        this.RollNext(-this.picN*1190)
        this.cirN == this.cirN++
        if (this.cirN == this.$refs.item.length) {
          //判断是否到了最后一个圆点，当圆点到了最后一个时，应该变回第一个点进行轮播
            this.cirN = 0;
        } 
      }, 3500)
    },
    clickCirN(index) {
      clearTimeout(this.timer)
      this.$refs.parent.style.left = -1190*(index) + 'px';//改变left至真正的第一项处，这个过程是时间太快太短所以可以忽略不计然后立刻
      this.cirN = index
      this.picN = index
      this.autoRun()
    },
    clickNext() {
      clearTimeout(this.timer)
      ++this.cirN
      // console.log(this.cirN, '++++');
      if (this.cirN == this.$refs.item.length) {
        //判断是否到了最后一个圆点，当圆点到了最后一个时，应该变回第一个点进行轮播
          this.cirN = 0;
      } 
      this.RollNext(-this.picN*1190)
    },
    clickPrev() {
      clearTimeout(this.timer)
      --this.cirN
      if (this.cirN == -1) {
        //判断是否到了最后一个圆点，当圆点到了最后一个时，应该变回第一个点进行轮播
          this.cirN = this.$refs.item.length - 1;
      }
      if (this.picN == 1) {
        this.picN = this.$refs.item.length - 1
        this.$refs.parent.style.left = -1190*(this.picN+1) + 'px';
        this.RollNext(-this.picN*1190)
      } else if (this.picN === 3){
        this.picN = --this.picN
        this.picN = --this.picN
        this.RollPrev(-this.picN*1190)
      } else {
        this.picN = --this.picN
        this.picN = --this.picN
        this.RollNext(-this.picN*1190)
      }
    }
  },
  destroyed:function () { // 离开当前路由之前的钩子函数 beforeRouteLeave

    console.log('我离开了')
    this.stopTimer();
    clearTimeout(this.timer)
  }
}
</script>

<style lang="stylus" scoped>
.featured-videos
  height 442px
  .videos-wrapper
    height: 60px;
    line-height: 60px;
    margin-bottom: 16px;
    border-bottom: 1px solid #e6e6e6;
    .title
      font-size: 24px;
      font-weight: 500;
      color: #333333;
    .video-title-list
      display: inline-block;
      margin: 0 20px 0 40px;
      font-size: 16px;
      color: #333333;
      .title-item-box
        cursor: pointer;
        .title-item
          &:hover 
            color: #406599
        &:not(:last-child)::after
          content: '|';
          padding: 0 8px;
          color: #e6e6e6;
    .fr
      float right
      .more
        font-size: 16px;
        color: #333333;
        -webkit-text-decoration: none;
        text-decoration: none;
  .swiper-container
    margin 0 auto 
    position relative
    width: 1190px;
    min-width: 1190px;
    list-style none
    padding 0
    z-index 1
    .img-wrapper
      position relative
      width: 1190px;
      min-width: 1190px;
      height: 355px;
      min-height: 355px;
      overflow hidden
      padding 0
      .img-parent-box
        position absolute
        left 0
        top 0
        width 4000px
        .img-item-box
          width: 1190px;
          
    .swiper-pagination
      line-height 20px
      bottom: 0px
      left: 0
      width: 100%
      position: absolute
      text-align: center
      -webkit-transition: 300ms opacity
      transition: 300ms opacity
      -webkit-transform: translate3d(0, 0, 0)
      transform: translate3d(0, 0, 0)
      z-index: 10
      .swiper-pagination-bullet
        display: inline-block
        margin: 0 4px
        cursor: pointer
        width: 8px
        height: 8px
        border-radius: 100%
        background-color: #e6e6e6
      .active
        width: 24px
        height: 8px
        border-radius: 4px
        background-color: #ffe100
    .button
      position: absolute
      top: 50%
      margin-top: -45px
      width: 50px
      height: 90px
      opacity: 0.2
      background-color: #000000
      z-index: 10
      cursor: pointer
    .swiper-button-next
      right 0
      border-radius 8px 0 0 8px
      &::after
        content: ''
        display: inline-block
        width: 19px
        height: 32px
        position: relative
        top: 50%
        left: 50%
        margin-top: -16px
        margin-left: -9.5px
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAABgCAYAAACnmdq6AAAAAXNSR0IArs4c6QAAAkhJREFUeAHtnD9OwzAYxVsGFipGrsGGxMIKV+IYPQA3gBUhISExMbKwoi6dqeAC4blqrNTYsaPa8uePZ8mq/zX2z34viSrXsxkDZ0DPDHRdd2aiHqIdCaAWiEvENWIfTNqULZoHBsQ54goxFFaouGgWFIM/RvxAjIVvNLhsEhQDv43RDerbBAXAywAiJdkeKKi+UsicNuJBjxxfbZx8SvYUjZ4ALtajLuR7CpWnjXhQO2asxrUjxalZ8dLdwoLqbiqZ014+KAZ8gvjqDHxqlqDWH7UTXNFp4qV0ayvW9k/pUrreGaBHrUdqJ+hRr0KDhZRubcXa/indoEq9FZSulU7tBKXrVWiwkNKtrVjbP6UbVKm3gtK10qmdoHS9Cg0WUrq1FWv7p3SDKvVWULpWOrUTlK5XocHCfyVd2btSMkl3hevI3meUCXRZ+14T7T8D6DraiYQGGUD39gK6GyMkMOofQ4ZV/CNXUStpALGMj4hXByznwwHfLfvVDCuIS2x3d8p8hGQCNG89Ml8GMgLK3PZGQMxAQpD7Yo7B6971RcAEfaIJJVr2aT5ydUqUEt3OAD044pKyVfQgPUgPlvVY7Or0ID1ID8ZcUraeHqQH6cGyHotdnR6kB+nBmEvK1tODrXvQ6AMMuv+4DUD9f8EH5H2aGr2t5P6qNryFYeif3uHHC9sA3PlR5QEnw4U0Nx2VR9W4uz+e96jHMz+ovpnP52/jzYTVYiX1Hx9l5hygug8C64UFUN1HuvWg/SeAdR7O1wPykzMgawZ+ARwclMWJw6EYAAAAAElFTkSuQmCC')
        background-repeat: no-repeat
        background-size: cover
      &:hover
        opacity: 0.4
    .swiper-button-prev
      left 0
      border-radius 0 8px 8px 0
      &::after
        content: '';
        display: inline-block;
        width: 19px;
        height: 32px;
        position: relative;
        top: 50%;
        left: 50%;
        margin-top: -16px;
        margin-left: -9.5px;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAABACAYAAAB2kAXpAAAAAXNSR0IArs4c6QAAAgJJREFUaAXt2kFKxTAQBuBX8RTiwht4heIJBJfuBM+gqFvBO/hw51Jx6Up6hXcDF+IphPqPZEpsX9sknZlk8QJ9ado08zGPlqbtarUrcRmo4rrL9W7b9gCjHbsRN1VVffujm8MAopiXWC6w7DvMD+o1cGvXXpnCHOoWwU8Z0KvvgHunbXu9HWrNABTFPmeACSwQRaYjM1gEikxfJrBIFJle1GEJqA91WAKqAeoGZ2TLGRO/XCSiroGia1lXRGFSKNKJwSRRYjBplAhMA7UYpoVaBNNEJcO0UUkwC1Q0zAoVBbNEBcOsUUGwHKhZWC7UJCwnahSWG7UVVgJqACsFRbD+9I1myGOTUervlwaNwZ2n32HJenejiGzRs4RXLDxtnxq3wU41FAX2M0YPOIpA9WHULqb4GdtA9W+mMqKssf0Bf31IdkeGmN/cwTB9oudTT/OH/PWo8auK62AO9Ij6za3PVTU6qOG6s5IVpVzLBjACloDbCisBNwrLjZuE5cTNwnLhgmA5cMEwa1wUzBIXDbPCJcEscMkwbdwimCZuMUwLJwLTwInBpHGiMEmcOEwKpwJLxNFLrit+n9S/56cxRYoLcI/BQucQJ+h7xsHVYBQgAWcDS8AdmmSMg0Rk7pOPUf0rOQjVgbhnPkbtrOQA/dpNDcv6IMRHAjj5CY3fd7cekoFfCpo+slA7IxYAAAAASUVORK5CYII=');
        background-repeat: no-repeat;
        background-size: cover;
      &:hover
        opacity: 0.4
</style>