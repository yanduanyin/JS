// - Object.assign  方法用于对象的合并，将源对象（source）的所有可枚举属性，复制（浅拷贝）到目标对象（target）。

// assign 方法的实现 使用defineProperty() 定义属性

if (typeof Object.assign2 != 'function') {
  Object.defineProperty(Object, 'assign2', { // Object.defineProperty()定义属性
    value: function (target) {
      'use strict';
      if (target == null || target == undefined) {
        throw new TypeError('Connot conver undefined or null to object')
      }
      var to = Object(target)
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index]
        if (nextSource != null) {
          for (var nextKey in nextSource) {
            // if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) { // 判断nextKey是否是nextSource自己的属性 
            //   to[nextKey] = nextSource[nextKey]
            // }
            to[nextKey] = nextSource[nextKey]
          }
        }
      }
      return to
    },
    writable: true,
    configurable: true
  })
}

let a = {
  name: null,
  age: '18'
}
let b = {
  name: 'sd',
  book: {
    title: null,
    price: '23'
  }
}
let c = Object.assign2(a, b)
console.log(c)
