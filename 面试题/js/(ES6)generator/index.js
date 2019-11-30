// generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。

// generator 定义：
function* p (x) {
  yield x + 1;
  yield x + 2;
  return x + 3;
}

// generator 能解决什么问题？
// 以编写一个产生斐波那契数列的函数 为例；   斐波那契数列  0 1 1 2 3 5 8 13 21 34 ...

// 普通函数方法
// function fib(max) {
//   var t, a = 0, b = 1, arr = [0, 1];
//   while (arr.length < max) {
//     [a, b] = [b, a + b]
//     arr.push(b)
//   }
//   return arr
// }

// console.log(fib(5));
// console.log(fib(10));

// 使用generator方法
function* fib(max) {
  var t, a = 0, b = 1, n = 0;
  while (n < max) {
    yield a;
    [a, b] = [b, a + b]
    n++
  }
  return;
}

// generator 的 调用与普通函数也不同  fib(5)仅仅是创建了一个generator对象，还没有去执行它

//1 
// 调用generator对象有两个方法，一是不断地调用generator对象的next()方法：

var f = fib(5)
console.log(f.next());// {value: 0, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 2, done: false}
f.next(); // {value: 3, done: false}
f.next(); // {value: undefined, done: true}

// next()方法会执行generator的代码，然后，每次遇到yield x;就返回一个对象{value: x, done: true/false}，
// 然后“暂停”。返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。如果done为true，则value就是return的返回值。

// 第二个方法是直接用for ... of循环迭代generator对象，这种方式不需要我们自己判断done：

// for (var f of fib(10)){
//   console.log(f); //  依次输出0, 1, 1, 2, 3, ...
// }



