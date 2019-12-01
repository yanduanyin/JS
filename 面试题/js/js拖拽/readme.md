## 实现拖拽 两种方法
  拖拽的实现过程  可以简化为  选中 -> 拖拽 -> 释放
### HTML5 drop && drap
- 在HTML5标准中，为了使元素可拖动，把 draggable 属性设置为 true 。 文本、图片和链接是默认可以拖放的，它们的draggable属性自动被设置成了true。
  图片和链接按住鼠标左键选中，就可以拖放。文本只有在被选中的情况下才能拖放。如果显示设置文本的draggable属性为true，按住鼠标左键也可以直接拖放。
- draggable属性：设置元素是否可拖动。语法：<element draggable="true | false | auto" >
    true: 可以拖动
    false: 禁止拖动
    auto: 跟随浏览器定义是否可以拖动
- 拖放API作用到两个目标对象，分别是拖拽目标对象和放置目标对象。
- 一些  API
    ondragstart:源对象开始被拖动
　　ondrag:源对象被拖动的过程中
　　ondragend:源对象被拖动结束
　　ondragenter:目标对象被源对象拖动进入
　　ondragover:目标对象被源对象悬浮在上面
　　ondragleave:源对象拖动着离开了目标对象
　　ondrop:源对象拖动着在目标对象上方松手
### 原生js实现
- 通过js 提供的 onmousedown、onmousemove、onmouseup API来实现

注意，你是让拖拽的目标在window窗口上移动，所以监听移动是给window窗口监听的，设置当前移动的时候的位置，使用定位给目标盒子定位