// //es5 面向对象
// function Person(name) {  //女主角
//     //constructor
//     //object { }

//     this.name = name;
// }
// // 男主
// Person.prototype = {
//     getName: function() {
//         return this.name
//     },
//     playHpjy: function() {
//         console.log('今晚刺激，大吉大利！')
//     }
// } 
// //new + fun()  新的对象
// //实例  第三者
// let person = new Person('赵晓盟');
// console.log(person.name)

// 构造函数创建对象
// function Person() {}
// // var Person = function () {};
// Person.prototype.name = "子银";
// Person.prototype.myFunc = function () {
//     alert(this.name)
// }

// var person1 = new Person();
// person1.myFunc();

// console.log(person1.__proto__ === Person.prototype)//true
// console.log(Person.prototype.constructor) //function Person(){}
// console.log(person1.__proto__.constructor) //function Person(){}


// 对象字面量创建对象
var Person = {};//等同于 var Person = new Object()
console.log(Person.__proto__ === Object.prototype)//true   
console.log(Person.__proto__ === Person.constructor.prototype)//true   
console.log(Person.constructor === Person.__proto__.constructor)//true  此处前面是实例对象的constructor，后面是对象原型的constructor属性
console.log(Person.constructor)//function Object()

// Object.create()创建对象
//ECMAScript 5 中引入了一个新方法：Object.create()。可以调用这个方法来创建一个新对象。新对象的原型就是调用 create 方法时传入的第一个参数
var person1 = {name:"ziyin"};//等同于 var Person = new Object()
var person2 = Object.create(person1);

console.log(person2.constructor)// function Object()  onstructor 未失效
console.log(person1.constructor)// function Object()  onstructor 未失效
console.log(person2.__proto__ === person1)// true
console.log(person2.__proto__ === person2.constructor.prototype)// false  __proto__失效
console.log(person1.constructor === Object)// true  
console.log(person1.__proto__ === Object.prototype)// true __proto__ 未失效



// 原型链
var Person = function () {} // function Person() {}
var person = new Person()

console.log(person.__proto__ === Person.prototype)//true  
console.log(person.__proto__)//Object {} 这个是一个函数  constructor指向Person()函数
console.log(person.__proto__.__proto__)//Object  这里是一个对象，constructor指向Object()函数
console.log(person.__proto__.__proto__.__proto__)//null















