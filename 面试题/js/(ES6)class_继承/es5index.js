// 第一种 借助 call
function person1() {
  this.name = 'person1'
}
function  child1() {
  person.call(this)
  this.type = 'html'
}
let chi1 = new child1
console.log(chi1.name);

// 这样写的时候子类虽然能够拿到父类的属性值，但是问题是父类原型对象中一旦存在方法那么子类无法继承。那么引出下面的方法。

// 第二种 借助原型链

function person2() {
  this.name = 'person2'
  this.play = [1, 2, 3]
}

function child2() {
  this.type = 'html2'
}
child2.prototype = new person2()
let chi2 = new child2
console.log(chi2.name);
// 看似没有问题，父类的方法和属性都能够访问，但实际上有一个潜在的不足。举个例子：

var s1 = new Child2();
var s2 = new Child2();
s1.play.push(4);
console.log(s1.play, s2.play);

// 明明我只改变了s1的play属性，为什么s2也跟着变了呢？很简单，因为两个实例使用的是同一个原型对象。

// 第三种：将前两种组合

function Parent3 () {
  this.name = 'parent3';
  this.play = [1, 2, 3];
}
function Child3() {
  Parent3.call(this);
  this.type = 'child3';
}
Child3.prototype = new Parent3();
var s3 = new Child3();
var s4 = new Child3();
s3.play.push(4);
console.log(s3.play, s4.play);

// 寄生组合继承。(最推荐使用): 组合继承的优化1

function Parent5 () {
  this.name = 'parent5';
  this.play = [1, 2, 3];
}
function Child5() {
  Parent5.call(this);
  this.type = 'child5';
}
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;

console.log(new Child5);

