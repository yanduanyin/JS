# 浏览器渲染的过程
  1. 解析html, 生成一个dom树，解析css 生成cssom树（这两个过程几乎同步）
  2. 将dom树和cssom树结合， 生成渲染树（render tree）
  3. 回流， 根据生成的渲染树进行回流，得到节点的几何信息（位置、大小）
  4. 重绘（重溯）， 根据渲染树和节点的几何信息， 得到节点的绝对像素
  5. 将像素发给GPU，展示在页面上 （GPU画图）


## 浏览器何时执行 重绘和回流
  1. 浏览器窗口大小发生改变
  2. 添加或者删除 *可见* dom元素时发生
  3. 当元素位置和大小发生变化时 （包含内容改变造成容器的变化）
  4. 页面初次渲染
  5. ...

### 回流一定会触发重绘， 但是重绘不一定能触发回流

## 强制队列刷新 （队列： 任务队列 event-loop）
  offsetTop、offsetLeft、offsetWidth、offsetHeight
  scrollTop、scrollLeft、scrollWidth、scrollHeight
  clientTop、clientLeft、clientWidth、clientHeight
  getComputedStyle()
  getBoundingClientRect

## 如何减少回流和重绘的次数
  1. 使元素脱离文档流
  2. 对其进行多次修改
  3. 将元素带回文档流当中
### 让dom脱离文档流的 3 种方式
  1. 隐藏元素
  2. 使用文档片段 （document fragment） 在当前的dom之外构建的一个子树， 再把它拷贝进文档
  3. 将原始元素拷贝到一个脱离文档流的节点中， 修改节点后， 再替换原始元素