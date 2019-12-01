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
    grid-template-columns:auto 1fr;
    grid-gap:20px
  } 