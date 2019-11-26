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
        <Loading v-show="scroll"/>
      </div>
    </div>
    <div class="leaderboard">
      <!-- 排行榜模板 -->
      <Leaderboard :LbName="'热门排行榜'" :Ranking="true" :listData="hotList"/>
      <Leaderboard :LbName="'新车发布'" :Ranking="false" :listData="newCarList"/>
      <Leaderboard :LbName="'销量排行榜'" :Ranking="true" :listData="xiaoliangList"/>
      <div class="statement">
        <p class="textp"> © 2019 懂车帝 www.dcdapp.com</p>
        <p class="textp">
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026035" target="_blank" rel="noopener noreferrer" class="atext">京公网安备 11010802026035号</a>
        </p>
        <p class="textp">
          <a href="http://www.miibeian.gov.cn/" target="_blank" rel="noopener noreferrer" class="atext">京ICP备17027026号-2</a>
        </p>
        <p class="textp">
          <a href="http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/motor/pc/ICP.pdf" target="_blank" rel="noopener noreferrer" class="atext">增值电信业务经营许可证（京B2-20180202）</a>
        </p>
        <p class="textp">
          <a href="http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/motor/pc/radio-tv-License.pdf" target="_blank" rel="noopener noreferrer" class="atext">广播电视节目制作经营许可证</a>
        </p>
        <p class="textp">公司名称：北京空间变换科技有限公司</p>
        <p class="textp">
          <a href="http://www.12377.cn/" target="_blank" rel="noopener noreferrer" class="atext">中央网信办违法和不良信息举报中心</a>
        </p>
        <p class="textp">违法和不良信息举报电话：400-140-2108</p>
        <p class="textp">
          <a href="http://www.dongchediapp.com/cloud/page/agreement.html" class="atext">懂车帝用户协议</a><!-- -->|<!-- --> 
          <a href="http://www.dongchediapp.com/cloud/page/privacy.html" class="atext">懂车帝隐私政策</a><!-- -->|<!-- --> 
          <a href="http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/motor/pc/business-License.pdf" target="_blank" rel="noopener noreferrer" class="atext">营业执照</a>
        </p>
      </div>
    </div>
    
  </div>
</template>

<script>
import NewsList from '../common_components/newsList'
import Loading from '../common_components/loading'
import Leaderboard from '../common_components/leaderboard'
export default {
  components: {
    NewsList,
    Loading,
    Leaderboard
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
      totalnum: '',
      hotList: [],
      newCarList: [],
      xiaoliangList: []
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
      this.scroll = true
      // this.clickIndex = index
      if (this.clickIndex === index) {
        var idx = this.pagenum
        this.clickIndex = index
      } if (this.clickIndex != index){
        var idx = 1
        // this.$refs.content  = 1252 + 'px'
        
        this.clickIndex = index
      }
      // 根据点击事件传的不同的索引来请求不同的数据
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
        // this.scroll = false
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
    this.$http.get('http://localhost:8080/static/Data/leaderboard/hot.json')
    .then(res => {
      // console.log(res, 'hotList');
      this.hotList = res.data.data
    })
    this.$http.get('http://localhost:8080/static/Data/leaderboard/newcars.json')
    .then(res => {
      // console.log(res, 'newCarList');
      this.newCarList = res.data.data
    })
    this.$http.get('http://localhost:8080/static/Data/leaderboard/xiaoliang.json')
    .then(res => {
      // console.log(res, 'xiaoliangList');
      this.xiaoliangList = res.data.data
    })
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
    .statement
      line-height: 20px;
      padding: 16px 20px;
      font-size: 12px;
      color: #666;
      .textp
        .atext
          &:hover
            cursor: pointer
            color: #406599
</style>