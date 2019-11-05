// function Person(name) {
//   this.name = name
// }
// let p = new Person('wn')
// console.log(p.__proto__ == Person.prototype) // 实例的隐式原型等于构造函数的显式原型

// function Person(name) {
//   this.name = name
//   return {}
// }
// let p = new Person('wn')
// console.log(p) // {}

// function Person(name) {
//   this.name = name
//   return { name }
// }
// let p = new Person('wn')
// console.log(p) // { name: 'wn' }

// Array.prototype.method = function () {}
// const myArray = [1, 2, 3, 4, 5, 6, 7]
// myArray.name = '蜗牛'
// for (let index of myArray) {
//   console.log(index)
// }
// for (let index in myArray) {
//   console.log(index)
// }

// for in 
// 1. index 是索引为字符串数字 不能进行几何运算
// 2. 遍历的顺序有可能不是按照实际数组内容 的内部顺序进行
// 3. 使用for in 会遍历数组所有的可枚举属性 ， 包括原型

// for of 
// 遍历的是数组的元素
// 不包括数组原型和索引

let gArr = [1, [2, 3], 4, 5, [6, 7, [3, 2, 8]]]
let oArr = [1, 2, 3, 4,  5, 6, 7, 3, 2, 8]

function jweiFuc (myArray) {
  let newArr = []
  for (let index of myArray) {
    if (index instanceof Array) {
      newArr = newArr.concat(jweiFuc(index))
    } else {
      newArr.push(index)
    }
  }
  return newArr
}
console.log(jweiFuc(gArr))

// 2
// function jweiFuc(arr) {
//   return arr.reduce(function(pre, item) {
//     return pre.concat(Array.isArray(item) ? jweiFuc(item) : item)
//   }, [])
// }

// 3
// let myArr = []
// gArr.toString().split(',').map(item => myArr.push(Number(item)));
// console.log(myArr)

// // 4
// Array.prototype.flatten  = function () {
//   const stack = this ;
//   const res = [] ;
//   while(stack.length) {
//       // 使用 pop 从 stack 中取出 并 移出值
//       const next = stack.pop() ;
//       if(Array.isArray(next)) {
//           // 使用 push 送回 内层数组中的 元素 , 不会改动原始数组
//           stack.push(...next)
//       } else {
//           res.unshift(next)
//       }
//   }
//   return res;
// }

