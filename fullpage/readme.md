- css 处理 
  - 某个盒子里的所有子元素   每个都占据一页
  - 事件 onscroll   很多次， 节流  
  - transfrom transition 
  - 面向对象 
- jquery API $() 怎么实现？
  $(fn)   原生js也是有生命周期的（vue），只不过我们叫它事件  JS是基于事件的脚本语言  找对的生命周期
  $('.container)   querySelector方法  

  typeof  参数  function  走分支
  .find() 查找  querySelector
  .css(cssname, val)   .height() 

  VUE  统统没有
  VUE MVVM   尽量少DOM编程   querySelector ...
  css DOM的查找， 执行， 都是要花很多内存的， vue 可以优化

  vue 生命周期  js 事件
  .innerHTML CSS width() 
  <template>
  <div :width="width">{{content}} </div>
  </template>
 