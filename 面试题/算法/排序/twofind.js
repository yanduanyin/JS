// 二分查找

// 1 拆半查找非递归实现
// function  half_find(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid = Math.floor((start + end) / 2);
//   while(start <= end) {
//     mid = Math.floor((start + end) / 2);
//     if(target === arr[mid]) {
//       return true
//     } else if (target > arr[mid]) {
//       start = mid + 1
//     } else if (target < arr[mid]) {
//       end = mid - 1;
//     }
//   }
//   return false
// }

// console.log(half_find([1, 2, 4, 8], 8));

// 2 递归实现

function half_find(arr, target) {
  var start = 0;
  var end = arr.length - 1;
  var mid = Math.floor((start + end) / 2);
  if (target === arr[mid]) {
    return true
  } else if (target > arr[mid]) {
    let arr1 = arr.slice(mid + 1)
    return half_find(arr1, target)
  } else if (target < arr[mid]) {
    let arr2 = arr.slice(0, mid)
    return half_find(arr2, target)
  }
  console.log(11111);
  return false
}

console.log(half_find([1, 2, 4, 8], 8));