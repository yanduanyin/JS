## 浏览器合成层
- translate3D 开启 CPU 加速

steps：
1. html 解析dom树， css 解析为 cssom树
2. 合并dom树和cssom树  为 渲染树 (render tree)
3. 回流layout 确定dom树节点的 几何信息
4. 重绘paint  绘制像素
5. 合成 compoise

js -> layout -> paint -> compoise

- 重绘不一定引起回流
- 回流一定会引起重绘

都是： 针对元素所在当前这一个层的

layout: 触发条件是大小、位置发生改变、top、left、right、bottom
paint: color shadow...  
composite: transfrom opacity 发生变化的元素 必须在一个合成层上面

提升层的方法： 
          1. translate3D 开启 CPU 加速 
          2. will-change 
          3. css3: animation transiton 开始的时候有分层，结束之后层就不在了
          4. backface-visiablity: hidden;
          5. video 天生在一个单独的层

提升层的好处： 元素变化只会影响当前这个层

层越多越好吗？ 每一个层都需要内存消耗的。不是越多越好的，不能滥用。

这个网站介绍能影响浏览器回流重绘的一些样式： https://csstriggers.com/

