- 为什么所有公司都考这道题
    内部有性能优化的考点
- 性能优化
  1. chrome  自带的性能优化工具
  console.warn  console,error()
  console.time('for-in') console.timeEnd('for-in')
  顺序执行  瞬间执行
  2. for key in 性能不太好 用for代替吧， while 最快
  3. 开启 HTTP2
      1. http2采用二进制分帧的方式进行通信,而 http1.x 是用文本,http2 的效率更高
      2. http2 可以进行多路复用
      3. http2 可以头部压缩,能够节省消息头占用的网络的流量
      4. http2可以进行服务端推送,我们平时解析 HTML 后碰到相关标签才会进而请求 css 和 js 资源,
          而 http2 可以直接将相关资源直接推送,无需请求,这大大减少了多次请求的耗时
  4. 开启浏览器缓存(强缓存和协商缓存)
  5. FMP(首次有意义绘制)
  6. layzload （图片懒加载）
  7. keep-alive： keep-alive 的作用是在页面已经跳转后依然不销毁组件,保存组件对应的实例在内存中,
                当此页面再次需要渲染的时候就可以利用已经缓存的组件实例了。
  8. 雪碧图,很古老的技术了,http2 使用后也是效果有限了
  9.  css 放头,js 放最后

  10. 动画性能优化
  11. 利用Web Worker 进行多线程编程.
  12. Canvas动画优化