- hash路由
  hash路由一个明显的标志是带有#,我们主要是通过监听url中的hash变化来进行路由跳转。
  #符号本身以及它后面的字符称之为hash，可通过window.location.hash属性读取。它具有如下特点：
  hash的优势就是兼容性更好,在老版IE中都有运行,问题在于url中一直存在#不够美观,而且hash路由更像是Hack而非标准,
  相信随着发展更加标准化的History API会逐步蚕食掉hash路由的市场。
- H5 History
  我们可以直接在浏览器中查询出History API的方法和属性。
  window.history.back();       // 后退
  window.history.forward();    // 前进
  window.history.go(-3);       // 后退三个页面
  history.pushState用于在浏览历史中添加历史记录,但是并不触发跳转,此方法接受三个参数，依次为：
    state:一个与指定网址相关的状态对象，popstate事件触发时，该对象会传入回调函数。如果不需要这个对象，此处可以填null。
    title：新页面的标题，但是所有浏览器目前都忽略这个值，因此这里可以填null。
    url：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址。
  popstate事件,每当同一个文档的浏览历史（即history对象）出现变化时，就会触发popstate事件。
