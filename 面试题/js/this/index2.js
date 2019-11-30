// 词法作用域： 就是定义在词法阶段的作用域。在写代码时，将变量和块作用域写在哪里决定的
//不能使用this 来引用一个词法作用域内部的东西

function  foo(a) {  // 1 包含整个全局作用域    一个标识符 foo
  var b = a*2;    // 2  包含foo创建的作用域  包含三个标识符 b a bar 
  function  bar(c) { // 3 包含bar创建的作用域  一个标识符c
    console.log(a, b, c);
  }
  bar(b*3)
}

foo(2)