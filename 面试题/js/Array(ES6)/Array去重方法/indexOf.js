// indexof 实现去重
var arr = [1, 2, 4, 4, 6, 8, 2, 4]
function find(arr) {
  var newArr = []
  for(let i = 0; i < arr.length; i++ ) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(find(arr));

// 总结： 去重可以使用indexof的原因是因为indexof函数的特性，如果在查找数组里没查找到会返回 -1
        // 解决思路：一个数组去重后，这个新数组里可以循环查找原本没有去重的数组，如果新数组中没有原数组的值，即将原数组中的这个值push到新数组中。