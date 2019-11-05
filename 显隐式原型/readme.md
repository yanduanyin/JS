## 判断是否是数组数组的方法
let arr = [1, 2, 3]

1. Array.isArray(arr)
2. typeof arr  // 这个方法只能判断基础数据类型， 不能判断数组
3. arr instanceof Array // true