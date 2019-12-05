## 盒模型可以从这几个里面谈
- 基本概念：标准模型 和IE模型
盒模型： content + padding + border + margin
标准盒模型： 宽高 等于 内容的宽高
IE盒模型： 宽高 等于 内容的宽高 + 填充 + 边框

-  块级元素:默认独自占据一行，左右两边都没有元素；可以设置宽高，在不设置宽度的情况下，默认为父元素的宽度一致。 常见的块级元素：<h1></h1>; <p></p>; <div></div>等等。
- 行内元素：左右两边都可以有元素，和其他元素在一行上；不可以设置宽高，其宽度就是内容的宽度。对margin仅设置左右方向有效，上下无效；padding设置上下左右都有效，但是padding上下对其他元素无影响。<span></span>; <a></a>; <img></img>，
  注意：行内元素之间可能会存在间距，这是在写标签时候换行导致的，解决办法：1. 让所有行内元素标签到达同一行 2. 设置float: left;
- 替换元素：替换元素是浏览器根据元素的标签和属性，来决定元素的具体显示内容。<img>、<input>标签，<textarea>
- 非替换元素：将内容直接告诉浏览器，将其显示出来<p>标签
- img 是行内块级元素是替换元素  padding 和 margin属性 top buttom 失效，但是left,right依然有效

- CSS如何设置这两种模型（通过css3的box-sizing属性）
-   /* 标准模型 */  box-sizing:content-box;
-   /*IE模型*/   box-sizing:border-box;

- JS如何设置获取盒模型对应的宽和高
1. dom.offsetWidth/offsetHeight
2. dom.getBoundingClientRect().width/height     这种方式是根据元素在视窗中的绝对位置来获取宽高的
3. dom.style.width/height  这种方式只能取到dom元素内联样式所设置的宽高，也就是说如果该节点的样式是在style标签中或外联的CSS文件中设置的话，
                            通过这种方法是获取不到dom的宽高的。


- 实例题（根据盒模型解释边距重叠）
- BFC（边距重叠解决方案）（Block Formatting Context 直译为“块级格式化上下文”）

- BFC的原理
  1. 内部的box会在垂直方向，一个接一个的放置
  2. 每个元素的margin box的左边，与包含块border box的左边相接触（对于从做往右的格式化，否则相反）
  3. box垂直方向的距离由margin决定，属于同一个bfc的两个相邻box的margin会发生重叠
  4. bfc的区域不会与浮动区域的box重叠
  5. bfc是一个页面上的独立的容器，外面的元素不会影响bfc里的元素，反过来，里面的也不会影响外面的
  6. 计算bfc高度的时候，浮动元素也会参与计算
- 怎么取创建bfc
1. float属性不为none（脱离文档流）
2. position为absolute或fixed
3. display为inline-block（脱离文档流）,table-caption，flex（容器内的所有项目都为行内块级元素）, table-cell
4. overflow不为visible（可见）, 

- 应用场景
1. 自适应两栏布局（float left + overflow hiddin）
- 什么是自适应两栏布局
　　当我们调整浏览器的宽度时，我们希望其中的一个比较重要的分栏保持不变；而另一个分栏能随着浏览器宽度的变化自动的调节自己的宽度，而其内容自动的换行，      不  会出现横向的滚动条或浏览器遮挡内容的情况。

2. 清除内部浮动 （给浮动元素的相邻元素升级为BFC容器）
3. 防止垂直margin重叠 （让其中一个元素变为BFC容器）

