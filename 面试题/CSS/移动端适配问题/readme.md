## 移动端自适应布局方案
- css 移动端适配有哪些（viewport，媒体查询，rem, %）
- 移动端有哪些单位（px，rem，%，em）
- 那 em 和 rem 是什么，rem 就是 :root { font-size: 16px }，em 根据父元素的 font-size。默认值多少 16px;

### viewport 是用户网页的可视区域。
- 手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比屏幕宽，
  这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。

- 设置 Viewport meta 标签的name属性设置为viewport
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
- Viewport 属性
width：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
height：和 width 相对应，指定高度。
initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
maximum-scale：允许用户缩放到的最大比例。
minimum-scale：允许用户缩放到的最小比例。
user-scalable：用户是否可以手动缩放。
### 媒体查询 （@media）
- 如果文档宽度小于 300 像素则修改背景颜色(background-color):
  @media screen and (max-width: 300px) {
      body {
          background-color:lightblue;
      }
  }
### rem and %

### % 用百分比设置元素的尺寸
  - 优点： (直接简单粗暴)
  - 缺点： 1、可以实现元素尺寸的自适应，但是无法实现字体大小的自适应，
        2、而且尺寸转化为百分比计算很麻烦，
        3、还有就是元素尺寸的高很难相对屏幕宽度设置百分比。百分比适用于某种具体场景，不是通用解决方案。
### rem
  - rem是一个**相对单位**，1rem等于html元素上字体设置的大小。我们只要设置html上font-size的大小，就可以改变rem所代表的大小。
  - 一个前提： 无论是设置html的font-size和屏幕宽度成正比，还是换算单位，我们都是以我们的标注稿为参考的。移动端的标注稿一般是640px(iphone5)或者750px(iphone6/7/8),现在750px用的比较多一些。
  - css尺寸和屏幕实际尺寸不是1比1的映射关系，而是取决于屏幕的像素密度。屏幕设备宽度，比如iphoneX是3倍屏(1125px)，iphone8是2倍屏(750px)，
  但是两个的屏幕css尺寸都是375px。

  通过css预编译或者webpack插件，实时计算 比如，我们将html根元素设置为16px，标注稿上有一个div元素宽度为100px,我们在scss中可以这样写
```
  $rem: 32rem;

  div{
    width: 100/$rem;   // 原本为了让100px的宽度随着根字体16px自适应应该为，100/16px ，但是放到移动化还要考虑css尺寸和屏幕实际尺寸的映射关系
                          所以使用rem相对单位，由于是750px的标准稿，所以是0.5px = 1rem（1个css单位等于2个实际单位），
                          所以再放到移动端上必须转化为屏幕的实际单位 100/32px（100/$rem）
  }
```

### em 也是一个相对单位 ， 他的大小是有他的父元素的font-size大小决定的