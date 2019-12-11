let a = {
  name: 'ziyin',
  age: '18'
}

var b = Object.create(a)
var c = a
console.log(b.name, c);

// 实现原理 简单版本

Object.prototype.newCreate = function (oldObj) {
  function F () {}
  F.prototype = oldObj
  return new F()
}

// 第二种 

if (typeof Object.create !== 'function') {
  Object.create = function (prototype, properties) {
    function Ctor () {}
    Ctor.prototype = prototype
    var o = new Ctor()
    if (prototype) {o.constructor = Ctor}
    if (properties !== undefined) {
      if (properties !== Object(properties)) {
        throw Error()
      }
      Object.defineProperty(o, properties)
    }
    return o
  }
}
