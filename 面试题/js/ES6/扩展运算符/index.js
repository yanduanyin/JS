// 在以往，我们给函数传不确定参数数量时，是通过arguments来获取的
function sum() {
  console.log(arguments) // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
                         // 我们可以看出，arguments不是一个数组，而是一个伪数组
  let total = 0
  let { length } = arguments
  for(let i = 0;i < length;i++){
    total += arguments[i]
  }
  return total
}

console.log(sum(1,2,3,4,5,6)) // 21
// 接下来我们用扩展运算符看看
function sum(...args){ // 使用...扩展运算符
    console.log(args) // [ 1, 2, 3, 4, 5, 6 ] args是一个数组
    return eval(args.join('+'))
}

console.log(sum(1,2,3,4,5,6)) // 21
// 得到的args是一个数组，直接对数组进行操作会比对伪数组进行操作更加方便，还有一些注意点需要注意
// 正确的写法 扩展运算符只能放在最后一个参数
function sum(a,b,...args){
    console.log(a) // 1
    console.log(b) // 2
    console.log(args) // [ 3, 4, 5, 6 ]
}

sum(1,2,3,4,5,6)

// 错误的写法 扩展运算符只能放在最后一个参数
function sum(...args,a,b){
    // 报错
}

sum(1,2,3,4,5,6)
// 我们可以对比下扩展运算符的方便之处
// 以往我们是这样拼接数组的
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = arr1.concat(arr2)
console.log(arr3) // [ 1, 2, 3, 4, 5, 6 ]

// 现在我们用扩展运算符看看
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [...arr1,...arr2]
console.log(arr3) // [ 1, 2, 3, 4, 5, 6 ]
// 以往我们这样来取数组中最大的值
function max(...args){
    return Math.max.apply(null,args)
}
console.log(max(1,2,3,4,5,6)) // 6

// 现在我们用扩展运算符看看
function max(...args){
    return Math.max(...args) // 把args [1,2,3,4,5,6]展开为1,2,3,4,5,6
}
console.log(max(1,2,3,4,5,6)) // 6
// 扩展运算符可以把argument转为数组
function max(){
    console.log(arguments) // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
    let arr = [...arguments]
    console.log(arr) // [1,2,3,4,5,6]
}

max(1,2,3,4,5,6)

// 但是扩展运算符不能把伪数组转为数组（除了有迭代器iterator的伪数组，如arguments）
let likeArr = { "0":1,"1":2,"length":2 }
let arr = [...likeArr] // 报错 TypeError: likeArr is not iterable

// 但是可以用Array.from把伪数组转为数组
let likeArr = { "0":1,"1":2,"length":2 }
let arr = Array.from(likeArr)
console.log(arr) // [1,2]

// 对象也可以使用扩展运算符
// 以往我们这样合并对象
let name = { name:"邵威儒" }
let age = { age:28 }
let person = {}
Object.assign(person,name,age)
console.log(person) // { name: '邵威儒', age: 28 }

// 使用扩展运算符
let name = { name:"邵威儒" }
let age = { age:28 }
let person = {...name,...age}
console.log(person) // { name: '邵威儒', age: 28 }