let arr = [,1,2]
let [a='我是默认值',b,c] = arr
console.log(a) // '我是默认值'
console.log(b) // 1
console.log(c) // 2
// 从这个例子可以看出，在解构赋值的过程中，a=undefined时，会使用默认值
// 那么当a=null时呢？当a=null时，那么a就不会使用默认值，而是使用null
// 数组的拼接
let a = [0,1,2]
let b = [3,4,5]
let c = a.concat(b)
console.log(c) // [0,1,2,3,4,5]

let d = [...a,...b]
console.log(d) // [0,1,2,3,4,5]

//  数组的深克隆 
// 假如我们简单地把一个数组赋值给另外一个变量
let a = [0,1,2,3]
let b = a
b.push(4)
console.log(a) // [0,1,2,3,4]
console.log(b) // [0,1,2,3,4]
// 因为这只是简单的把引用地址赋值给b，而不是重新开辟一个内存地址，所以
// a和b共享了同一个内存地址，该内存地址的更改，会影响到所有引用该地址的变量
// 那么用下面的方法，把数组进行深克隆一份，互不影响

let a = [0,1,2,3]
let b = [...a]
b.push(4)
console.log(a) // [0,1,2,3]
console.log(b) // [0,1,2,3,4]