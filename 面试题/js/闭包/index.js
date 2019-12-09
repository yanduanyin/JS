// 闭包：闭包是指有权访问另外一个函数作用域内变量的函数

  // 1. 闭包就是能够读取其他函数内部变量的函数,
  // 2. 闭包就是将函数内部和函数外部连接起来的一座桥梁。
// 闭包的作用：
  //     1. 读取函数内部的变量
  //     2. 让这些变量的值始终保持在内存中。

  // 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，
  // 所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

// 1、函数child嵌套在函数foo内部；

// 2、函数foo返回函数child。

function  foo() {
  let a = 999;

  function child(n) {
    console.log(a + n);
  }
  return child;
}

let bar = foo();
bar(1)


var name = "The Window";　　
var object = {　　　　
    name: "My Object",
    getNameFunc: function() {
        var that = this;　　　　
        return function() {　　　　　　　　
            return that.name;　　　　　
        };　　　　
    }
};

console.log(object.getNameFunc()());
