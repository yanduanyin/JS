// 快速排序

function quickSort(arr) {
  if(arr.length <= 1) return arr  // 出口
  let pivot = arr[0];
  let arr1 = [] ;
  let arr2 = [] ;
  for(let i  = 1 ; i < arr.length ; i ++) {
    if(arr[i] < pivot) {
      arr1.push(arr[i])
    }else {
      arr2.push(arr[i])
    }
  }
  return quickSort(arr1).concat([pivot],quickSort(arr2))
}

let arr= [1, -2 ,3 ,-4 ,5,-6]
console.log(quickSort(arr))