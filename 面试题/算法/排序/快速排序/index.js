// 快速排序
// 思路 取一个值为基准， 拿数组里的其他值和这个基准比较，比基准大的放到一个数组，比基准小的也放在一个数组。


let arr= [1, -2 ,3 ,-4 ,5,-6]
function  quickSort(arr) {
  if(arr.length <= 1) return arr; // 递归一定有一个出口的
  let pivot = arr[0];
  let left = [];
  let right = [];
  for(let i = 1; i < arr.length - 1; i ++) {
    if (pivot <= arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort[left].concat([pivot], quickSort[right])
}

console.log(quickSort(arr))