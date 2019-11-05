// const s = new Set();
// [1,2,3,4,5,5,6,3,2,1,'1'].forEach(x => s.add(x));
// console.log(s)

// let set = new Set([1,2,3,2,1])
// console.log(set.size) // 长度

// let set = new Set()
// set.add(1).add(2).add(3) // 增
// set.delete(1) // 删
// // console.log(set.has(1)) //查

// const item = new Set([1, 2, 3, 2])
// const array = Array.from(item)  // Array.from() 把类数组转化为数组
// console.log('数组:',array,'类数组:', item)

// Set 的遍历顺序是根据插入顺序来定的
// keys()  包含集合中所有的 键 的迭代器
// values()  包含集合中所有的 值 的迭代器
// entries() 包含集合中所有的 键值 的迭代器
// forEach(callbackFn, thisArg)

let set = new Set([1, 2, 3])
// console.log(set.keys())
// console.log(set.values())
// console.log(set.entries())
// for (let item of set.entries()) {
//   console.log(item)
// }
// set.forEach((key, value) => { // 只有set的foreach遍历出来的是键值对
//   console.log(key + ':' + value)
// })
set = new Set([...set].map(item => item * 2));
set = new Set([...set].filter(item => (item >= 4)))
console.log(...set)
