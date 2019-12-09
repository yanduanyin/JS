// set 去重
var arr = [1, 2, 4, 4, 6, 8, 2, 4]
let set = new Set()
arr.forEach(item => set.add(item))
console.log(set);

// Set  有一个特性就是天生可以去重，你可以将重复的值push进set的数组里去，set的数组只会保留第一次碰见的值，后面重复的值不会进入set的数组。

let set2 = new Set(arr)
// Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。
// 将一个类数组对象转换为一个真正的数组，必须具备以下条件：
// 　　1、该类数组对象必须具有length属性，用于指定数组的长度。如果没有length属性，那么转换后的数组是一个空数组。
// 　　2、该类数组对象的属性名必须为数值型或字符串型的数字
// 　　ps: 该类数组对象的属性名可以加引号，也可以不加引号
Array.from(set2)

console.log(set2);
// ES6 新出的方法 from 