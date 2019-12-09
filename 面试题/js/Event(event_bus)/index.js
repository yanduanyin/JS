
// node中的Events模块就是通过观察者模式来实现的：
// var events=require('events');
// var eventEmitter=new events.EventEmitter();
// eventEmitter.on('say',function(name){
// console.log('Hello',name);
// })
// eventEmitter.emit('say','Jony yu');


// 实现一个 简单的 EventEmeitter  第一种

function Events(){
  this.on=function(eventName,callBack){
    if(!this.handles){
      this.handles={};
    }
    if(!this.handles[eventName]){
      this.handles[eventName]=[];
    }
    this.handles[eventName].push(callBack);
  }
  this.emit=function(eventName,obj){
    if(this.handles[eventName]){
      for(var i=0;o<this.handles[eventName].length;i++){
        this.handles[eventName][i](obj);
      }
    }
  }
    return this;
}
  // 这样我们就定义了Events，现在我们可以开始来调用：

var events=new Events();
events.on('say',function(name){
  console.log('Hello',nama)
});
events.emit('say','Jony yu');
//结果就是通过emit调用之后，输出了Jony yu
// (2)每个对象是独立的
// 因为是通过new的方式，每次生成的对象都是不相同的，因此：
var event1=new Events();
var event2=new Events();
event1.on('say',function(){
  console.log('Jony event1');
});
event2.on('say',function(){
  console.log('Jony event2');
})
event1.emit('say');
event2.emit('say');
//event1、event2之间的事件监听互相不影响
//输出结果为'Jony event1' 'Jony event2'



// 实现版本二，比较难理解但是好
class EventEmeitter {
  constructor() {
    // 我们选择了Map作为储存事件的结构,因为作为键值对的储存方式Map比一般对象
    // 更加适合,
    this._events = this._events || new Map();
    this._maxListeners = this._maxListeners || 10;
  }
}

// 设置监听事件名为 type事件 函数  发布

EventEmeitter.prototype.addListener = function (type, fn) {
  // 将type事件以及对应的fn函数放入this._events中储存
  if (!this._events.get(type)) {
    this._events.set(type, fn)
  }
}

// 设置触发事件 订阅
EventEmeitter.prototype.emit = function (type, ...args) {
   // 从储存事件键值对的this._events中获取对应事件回调函数
  let handler = this._events.get(type)
  if (args.length > 0) {
    handler.apply(this, args)
  } else {
    handler.apply(this)
  }
  return true;
}

// 实例化
const emitter = new EventEmeitter();
// 监听一个名为arson的事件对应一个回调函数
emitter.addListener('arson', max => {
  console.log(`expel ${max}`);
})
// 我们触发arson事件,发现回调成功执行
emitter.emit('arson', 'low-end')
// 缺点： 如果重复触发则只后触发第一个

// 升级版

// 监听一个名为arson的事件对应一个回调函数
EventEmeitter.prototype.addListener = function (type, fn) {
  const handler = this._events.get(type);

  if(!handler) {
    this._events.set(type, fn);
  } else if (handler && typeof handler === 'function') {
    // 如果handler是函数说明只有一个监听者
    this._events.set(type, [handler, fn])// 多个监听者我们需要用数组储存
  } else {
    handler.push(fn)// 已经有多个监听者,那么直接往数组里push函数即可
  }
}

// 触发名为type的事件

EventEmeitter.prototype.emit = function (type, ...args) {
  let handler;
  handler = this._events.get(type)
  if (Array.isArray(handler)) {
     // 如果是一个数组说明有多个监听者,需要依次此触发里面的函数
     for (let i = 0; i < handler.length; i++ ) {
      if (args.length > 0) {
        handler[i].apply(this, args);
      } else {
        handler[i].call(this)
      }
     }
  } else { // 单个函数的情况我们直接触发即可
    if (args.length > 0) {
      handler.apply(this, args)
    } else {
      handler.apply(this)
    }
  }
  return true;
}


// 监听同一个事件名
emitter.addListener('arson', man => {
  console.log(`expel ${man}`);
});
emitter.addListener('arson', man => {
  console.log(`save ${man}`);
});
emitter.addListener('arson', man => {
  console.log(`kill ${man}`);
});

// 触发事件
emitter.emit('arson', 'low-end');
//expel low-end
//save low-end
//kill low-end


// 移除监听

EventEmeitter.prototype.removeListener = function(type, fn) {
  const handler = this._events.get(type); // 获取对应事件名称的函数清单

  // 如果是函数,说明只被监听了一次
  if (handler && typeof handler === 'function') {
    this._events.delete(type, fn);
  } else {
    let postion;
    // 如果handler是数组,说明被监听多次要找到对应的函数
    for (let i = 0; i < handler.length; i++) {
      if (handler[i] === fn) {
        postion = i;
      } else {
        postion = -1;
      }
    }
    // 如果找到匹配的函数,从数组中清除
    if (postion !== -1) {
      // 找到数组对应的位置,直接清除此回调
      handler.splice(postion, 1);
      // 如果清除后只有一个函数,那么取消数组,以函数形式保存
      if (handler.length === 1) {
        this._events.set(type, handler[0]);
      }
    } else {
      return this;
    }
  }
};