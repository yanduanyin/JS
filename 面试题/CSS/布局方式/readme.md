- flex 布局  弹性盒子布局
  设置父元素display flex
  可以使用 justify-content: center 实现水平居中，align-items: center 实现垂直居中。 让元素垂直水平居中
  子元素设置 flex 1 即可均匀分布   flex 1   ===  flex-grow: 1;flex-shrink: 1;flex-basis: 0%;
        
  flex-wrap：wrap   // 换行
  flex-wrap：nowrap   // 不换行

  flex-grow属性 当flex盒子的宽度大于项目之和的宽度， 会让项目自动扩展
  flex-basis 可以设置flex盒子里面的项目的宽度， 他的优先级会 大于设置的width
  flex-shrink   当flex盒子的宽度小于项目之和的宽度， 会让项目自动收缩
- grid布局
Grid布局，是一个基于网格的二维布局系统，目的是用来优化用户界面设计。
  .parent {
    display:grid;
    grid-template-columns:auto;    /* grid-template-columns 设置列宽*/
    grid-template-rows： 100px // 设置行高px
    grid-gap:20px // 网格轨道之间的间距
  } 
- 







- 自适应两栏布局   
解决方案：
  1. 固定宽度的盒子float left  自适应的盒子 升级为BFC容器
  2. 利用外边距 左边固定宽度，右边留下左边宽度大小的外边距 margin
  3. 利用position 定位
  4. flex 父容器为flex box 固定宽度的flex: 0 0 200px; 自适应的 flex: 1;
- 中间自适应三栏布局  
解决方案：
  1. flex box布局是css3里新出的一个，它就是为了解决上述两种方式的不足出现的，是比较完美的一个。
      目前移动端的布局也都是用flexbox。 flexbox的缺点就是IE10开始支持，但是IE10的是-ms形式的。
  2. grid布局（网格布局 ） 网格布局的兼容性不好。IE10+上支持，而且也仅支持部分属性。
  3. 使用负外边距
  4. 利用position 定位
- 两列等高布局
解决方案：
  1. 利用padding-bottom的正值与margin-bottom的负值相互抵消即可，同时最外层设置overflow:hidden;
  2. flex 父容器为flex box 里面的项目会自调整高度，等高等宽