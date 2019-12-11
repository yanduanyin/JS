// [1, [2, [3, 4]]]
// 数组扁平化   
// [1, 2, 3, 4]

// 1 递归实现
function flat(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res.concat(flat(arr[i]));
      // [2, 3, 4]
    } else {
      res.push(arr[i])
    }
  }
  return res;
}