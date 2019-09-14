// 使用.call() 实现基本的继承   缺点（不能继承方法和函数）
// function Parent1() {
//   this.name = 'parent1'
// }
// function Child1() {
//   Parent1.call(this)
//   this.type = 'child1'
// }
// console.log(new Child1)


// 使用原型链实现继承    缺点（所有实例都可以使用自身的prototype属性给对象原型添加方法和属性，所有实例都必须共享）
function Parent2() {
  this.name = 'parent1'
  this.play = [1, 2, 3]
}
function Child2() {
  this.type = 'child2'
}
// 原型链实现继承，具体实现
// 1. 让Child2的实例的原型对象等于另外一个类型的实例   
// 2. Parent2的实例的原型对象又等于Parent2的原型prototype 
Child2.prototype = new Parent2()
console.log(new Child2)

