class EventEmitter {
  constructor () {
    this.events = this.events || new Map()
  }
  addListener(type, fn) { // 监听事件
    // 将type事件以及对应的fn函数放入this.events中储存
    if (!this.events.get(type)) {
      this.events.set(type, fn)
    }
  }

  emit (type) { // 触发事件
    let handle = this.events.get(type)
    handle.apply(this, [...arguments].slice(1)) // 切割掉不需要的监听事件名这个参数。
  }
}
let emitter = new EventEmitter()

emitter.addListener('a',  (age) => {
  console.log(`我发布一个事件: ${age}`);
  
})

emitter.emit('a', 18)