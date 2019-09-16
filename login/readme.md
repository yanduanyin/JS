- 5G时代  设备的省电很重要  js有可能被禁用
    <a href="/login">登录</a>   跳转页面  功能的实现
    script  addEventListener   更好的用户体验
    无障碍的互联网访问
- event.preventDefault();//阻止默认行为
- event.stopPropgation();//阻止默认冒泡    
- DOM DOM树，body是树根，元素及元素的子元素  字节 子节点 孙节点....
    .inner  默认沿着DOM树  事件的冒泡触发


## js
 1. DOM: document object model
    浏览器将 HTML 建模成了一棵树 ，DOM 允许我们和这棵树交互
    1. arrt
    2. document 表示了一颗 DOM 树
    3. node
    4. MutationObserver  监听 DOM 树的变化
    5. event onclick="stop()"  node.onclick = function()  addEventListener()
 2. ECMAScript ES6 ES5: 规定了 语法
 3. BOM：borwser object  model 和浏览器相关的resize  导航...
    
## nodeType
 1. 8: 注释也是一个节点  comment_node  注释节点
 2. 3: text_node 文本节点
 3. 1: element_node  元素节点

##git 学习
1. 使用git 完整的流程六步  1.创建文件夹->2.git init ->3.git add ...    ->4.git commit ... ->5.关联仓库->6.git push origin master
2. master 主分支  不能用来开发，每个人应该在自己的分支上开发。最后合并到主分支
   主分支上的代码是最新的，已经发布了的代码
   其他分支是正在开发的代码
3. 再切换到其他分支的时候之前，确认当前分支工作区是干净的, 如果当前工作区已经干净会出现一串代码  (nothing to commit ,working tree clean)


