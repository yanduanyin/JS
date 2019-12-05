## 与垂直居中有关的属性

- 行内元素的居中属性  
  1.  text-align: center
  2.  vertical-align: middle;
  3. td 标签默认情况下就默认设置了 vertical-align 为 middle, 在 chrome、firefox 及 IE8 以上的浏览器下可以设置块级元素的 display 为 table-cell（设置为表格单元显示），激活 vertical-align 属性
- 行内元素  垂直属性vertical-align：middle/top/bottom
前提：1.给父元素设置行高 line-height
      2.子元素本身必须为行内块元素，若不是则必须设置display:inline-block;或dispaly:inline;vertical-align:不可继承。

- 单行内联(inline-)元素垂直居中
  1. 通过设置内联元素的高度(height)和行高(line-height)相等，从而使元素垂直居中。

- 块级元素的水平居中可以使用 margin: 0 auto  配合定位position 可以实现水平、垂直同时居中但比较麻烦
- flex 的 justify-content: center 实现水平居中，align-items: center 实现垂直居中。

- 固定高度的块级元素
  1. 绝对定位元素距离顶部50%，并设置margin-top向上偏移元素高度的一半，就可以实现垂直居中了。