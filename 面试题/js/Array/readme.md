数组的常见的方法： 
- push() 从后面添加元素，返回值为添加完后的数组的长度  pop() 从后面删除元素，只能是一个，返回值是删除的元素
- shift() 从前面删除元素，只能删除一个 返回值是删除的元素  unshift()  从前面添加元素, 返回值是添加完后的数组的长度
- Array.isArray()   判断是否为数组  
- toString() 把数组转换为数组值（逗号分隔）的字符串。
- join() 方法也可将所有数组元素结合为一个字符串。但是您还可以规定分隔符：
- splice(i, n) 删除从i(索引值)开始之后的那个元素。返回值是删除的元素   
- slice(start,end) 切去索引值start到索引值end的数组，不包含end索引的值，返回值是切出来的数组
- concat() 方法通过合并（连接）现有数组来创建一个新数组：
- str.split() 将字符串转化为数组
排序方法
- sort() 将数组进行排序,返回值是排好的数组，默认是按照最左边的数字进行排序，不是按照数字大小排序的
        let arr = [2,10,6,1,4,22,3]
        console.log(arr.sort())   // [1, 10, 2, 22, 3, 4, 6]
        let arr1 = arr.sort((a, b) =>a - b)  
        console.log(arr1)   // [1, 2, 3, 4, 6, 10, 22]
        let arr2 = arr.sort((a, b) =>b-a)  
        console.log(arr2)  // [22, 10, 6, 4, 3, 2, 1]
- reverse()  将数组反转,返回值是反转后的数组

- Array.forEach(callback) 遍历数组,无return  即使有return，也不会返回任何值，并且会影响原来的数组
- Array.map(callback)  方法通过对每个数组元素执行函数来创建新数组。(映射数组(遍历数组),有return 返回一个新数组 。)
- ps: arr.forEach()和arr.map()的区别 
    1. arr.forEach()是和for循环一样，是代替for。arr.map()是修改数组其中的数据，并返回新的数据。
    2. arr.forEach() 没有return  arr.map() 有return

- Array.indexOf()   方法在数组中搜索元素值并返回其位置。
- Array.find() 方法返回通过测试函数的第一个数组元素的值。
- Array.filter(callback)  创建一个包含通过测试的数组元素的新数组。

- Array.reduce(callback, initialValue)  迭代数组的所有项，累加器，数组中的每个值（从左到右）合并，最终计算为一个值
    let arr = [0,1,2,3,4]
    let arr1 = arr.reduce((preValue, curValue) => 
        preValue + curValue
    )
    console.log(arr1)    // 10

- Array.every() 方法检查所有数组值是否通过测试。