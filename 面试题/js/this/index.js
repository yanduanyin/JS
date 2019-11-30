// function identify() {
//     return this.name.toUpperCase()  // oUpperCase() 大小写转化
// }
// function speak() {
//     var greeting = "hello ,I'm" + identify.call(this)
//     console.log(greeting,'----')
//     return '1'
// }
// var me = {
//     name:'ydy',
// }
// var you = {
//     name:'whf'
// }
// console.log(identify.call(me))
// console.log(identify.call(you))

// console.log(speak.call(me))
// console.log(speak.call(you))
//.call方法

// function identify(context) {
//     return context.name.toUpperCase()//toUpperCase()   小写=>大写
// }
// console.log(identify(me))
//this 提供一个更优雅的方式，隐式“传递”一个对象
// function identify(){
//     return this.name.toUpperCase()
// }
// console.log(identify.call(me))
// function foo(num) {
//     console.log("sss" + num)
//     this.count++
// }
// foo.count = 0;
// for(var i = 0;i < 10;i++) {
//     if(i > 5) {
//         foo(i)
//     }
// }
// console.log(this)  
 //此处打印this指向window，、、this 指向谁？ 取决于调用的对象(此处对象在js中不局限于对象object)，不要陷入this在哪里就指向哪里的误区。可以比喻为：
//this 是一个没有老板的公司，它就是一个公司而已，如果没有对象调用这个公司，这个this就指向window，如果有对象（顾客）使用这个公司，这个this就指向
//这个对象（顾客）。

function foo() {
    var a = 2;
    bar()
}
function bar() {
    console.log(this.a)
}
foo()
//不能使用this 来引用一个词法作用域内部的东西


// function baz() {
//     //当前调用栈是baz
//     //因此，当前调用位置是全局作用域
//     console.log('baz')
//     bar()
// }
// function bar() {
//     //当前调用栈是baz -> bar
//     //因此，当前调用位置是baz
//     console.log('bar')
//     foo()
// }
// function foo() {
//     console.log('foo')
//     bar()
// }

// //----------------------------------
// function foo() {
//     "use strict"
//     console.log(this.a)
// }
// var obj = {
//     a: 2,
//     foo: foo
// }
// foo()