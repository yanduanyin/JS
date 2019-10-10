//  实例是否是 this.state
 export class Store {
  constructor(options, Vue) {
    // console.log(options);
    // 让 this.$store
    // 找到 .state
    this.options = options
    this.getters = {}
    // 扩展vue
    // new Vue({
    //   store
    // })
    Vue.mixin({
      // beforeCreate 钩子函数
      beforeCreate: vuexInit
    })
    forEachValue(options.getters, (getterFn, getterName) => {
      // console.log(getterFn, getterName);
      console.log(this)
      registerGetter(this, getterName, getterFn);
    }) 
  }
  // this.$store.state.count
  // 在获取的同时还可以做其他事情
  get state() {
    // console.log('get 获取属性')
    return this.options.state;
  }
  set state(val) {
    throw new Error('不可以直接操作属性state, 请通过mutations修改');
  }
}

// this.$store
function vuexInit () {
  // console.log('实例化之前');
  // console.log(this, this.$options)
  const options = this.$options;
  if (options.store) { // 已有
    // this指向vue
    this.$store = typeof options.store === 'function' ? options.store() : options.store
  }else if(options.parent && options.parent.$store){
    this.$store = options.parent.$store
  }
}
function forEachValue(obj, fn) {
  // console.log(obj, fn);
  // console.log(Object.keys(obj));
  Object.keys(obj).forEach(key => fn(obj[key], key));
  // obj 所有的方法遍历一下， fn(name, func())
}

function registerGetter(store, getterName, getterFn) {
  // this.$store.getters.getterName
  // defineProperty  数据劫持
  Object.defineProperty(store.getters, getterName, {
    get: () => {
      console.log(getterFn, '-----------')
      return getterFn(store.state)
    }
  })
}