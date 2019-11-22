<template>
  <div class="clearfix content" ref="content">
    <div class="feed fl">
      <div class="fl title-list-box">
        <ul class="title-list">
          <li :class="['title-item']"  v-for="(item, index) in tltieItemName" :key="index" >
            <span :class="[{'active':currentIndex === index}]" @click="clickIn(index)">{{item.text}}</span>
          </li>
        </ul>
        <NewsList :newsList="newsListData"/>
      </div>
    </div>
    <div class="leaderboard">
      <div class="hotspot">
        <div class="header">
          <span class="title">热门排行榜</span>
          <span class="more">
            总榜单
            <span class="more-icon iconfont icon-jiantouarrow487"></span>
          </span>
        </div>
        <div class="list">
          <div class="series clearfix">
            <span class="icon"></span>
            <a href="" class="cars-name" target="_blank" title="">
              <span class="photo"></span>
              <span class="name line-1">
                <span class="active price">
                  
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import NewsList from '../common_components/newsList'
export default {
  components: {
    NewsList
  },
  data() {
    return {
      tltieItemName: [
        {text: '推荐'},
        {text: '新车'},
        {text: '用车'},
        {text: '导购'},
        {text: 'SUV'},
        {text: '自驾游'},
        {text: '新能源'},
        {text: '提车作业'},
        {text: '试驾测评'}
      ],
      clickIndex: 0,
      leaderboardData: [],
      newsListData: [],
      scroll: true, // 控制loding的展示
      pagenum: 1, // 当前页数
      totalnum: ''
    }
  },
  computed: {
    currentIndex() {
      return this.clickIndex
    }
  },
  methods: {
    clickIn(index) {
      console.log(index, '1')
      console.log(this.clickIndex, '2');
      
      // this.clickIndex = index
      if (this.clickIndex === index) {
        var idx = this.pagenum
        this.clickIndex = index
      } if (this.clickIndex != index){
        var idx = 1
        // this.$refs.content  = 1252 + 'px'
        
        this.clickIndex = index
      }

      switch (this.clickIndex)
      {
        case 1: var url = 'http://localhost:3000/knowcars/new'; break;
        case 2: var url = 'http://localhost:3000/knowcars/usecars'; break;
        case 3: var url = 'http://localhost:3000/knowcars/shopping'; break;
        case 4: var url = 'http://localhost:3000/knowcars/SUV'; break;
        case 5: var url = 'http://localhost:3000/knowcars/tarvel'; break;
        case 6: var url = 'http://localhost:3000/knowcars/newResources'; break;
        case 7: var url = 'http://localhost:3000/knowcars/task'; break;
        case 8: var url = 'http://localhost:3000/knowcars/evaluation'; break;
        default: var url = 'http://localhost:3000/knowcars/recommend'
      }
      this.$http({
        method: 'post',
        url: url,
         data: {
          idx: idx
        }
      }).then((res) => {
        // console.log(res.data);
        this.newsListData = res.data
      }).catch((err) => {
       console.log(err)
     })
    },
    // 滚动事件的监听
    handleScroll() {
      // 当滚动的距离加窗口高度等于可视区域的时候，也就是触底时
      if ((document.documentElement.scrollTop + window.innerHeight) === document.body.offsetHeight) {
        this.pagenum = ++this.pagenum
        // console.log(this.pagenum);
        this.clickIn(this.clickIndex)
      }
    }
  },
  created() {
    this.clickIn(this.clickIndex)
  },
  mounted() {
   window.addEventListener('scroll', this.handleScroll) 
  }
}
</script>

<style lang="stylus" scoped>
.content
  margin-top 10px
  .feed
    width: 790px
    min-width: 790px
    min-height: 1px
    .title-list-box
      .title-list
        position: sticky;
        top: 0px;
        z-index: 10;
        width: 790px;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        color: rgb(255, 255, 255);
        background-color: rgb(51, 51, 51);
        display: flex;
        text-align: center;
        box-sizing border-box
        .title-item
          display: inline-block;
          height: 100%;
          cursor: pointer;
          flex: 1 1 0%;
          .active
            &::before
              content: "";
              display: inline-block;
              width: 100%;
              height: 4px;
              position: absolute;
              bottom: -2px;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: rgb(255, 225, 0);
          span 
            display: inline-block;
            color: rgb(255, 255, 255);
            position: relative;
            &:hover
              font-weight: 500;
              font-size: 20px;
  .leaderboard
    width: 340px
    margin-left: 10px
    float right
    .hotspot
      margin-bottom 10px
      .header
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #e6e6e6;
        box-sizing border-box
        .title
          font-size: 24px;
          font-weight: 500;
          color: #333333;   
        .more
          float right
</style>