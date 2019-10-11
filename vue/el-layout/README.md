## 
  <template>
  <div>
  <slot />
  <Elbutton></Elbutton>
  </div>
  </template>

  里面的东西都会被编译为
  h('div', {}, [children])
  babel.io
  h 函数的返回
  一个对象 
  {
    详细的描述了，该标签（<div/><component/>）上的信息：props, id, class 子节点
  }
  虚拟节点 （virtual node） Vnode
  虚拟DOM  （）

  https://babeljs.io/repl