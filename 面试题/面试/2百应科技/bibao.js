// 
function Bar (name) {
  this.name = name
}
function makeFactor(name) {
  var p = new Bar (name);  // 1
  return function() { 
    // return p;
    return {
      // 清除闭包里的变量的方法 1. 创建这个变量 2. 给变量一个方法，让变量等于 null
      create: p,
      destry: function () {
        p = null;
      }
    }

  }
}

var p1 = makeFactor('zhao');  // p1 是一个方法
var p2 = p1(); // p2 一直引用着p
var p2 = null; 
// 引用计数  引用 数量 + 1
// 经过两步才能拿到p
// window.p2