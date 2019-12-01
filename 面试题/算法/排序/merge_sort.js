// 归并排序

// 二路归并子算法

function  Merge(arr1, arr2) {
  let arr3 = new Array(arr1.length + arr2.length)
  let i = 0, j = 0;
  let k = 0;
  arr1[arr1.length] = Infinity   // Infinity js 的最大安全数字
  arr2[arr2.length] = Infinity
  while( k < arr3.length) {
    if(arr1[i] < arr2[j]) {
      arr3[k] = arr1[i]
      i++;
      k++;
    } else {
      arr3[k] = arr2[j]
        j++;
        k++;
    }
  }
  return arr3
}

arr1 = [1, 3, 5]
arr2 = [2, 4, 6]
console.log(Merge(arr2, arr1));


// 归并算法

function Merge_sort(arr) {
  if(arr.length === 1) return arr  // 出口
  let mid =Math.floor( arr.length / 2); // 取中间值
  let left = arr.slice(0, mid)  // 对半分数组， 左边的数组
  let right = arr.slice(mid) // 右边的数组
  return Merge(Merge_sort(left), Merge_sort(right)) // 会先执行Merge_sort直到让数组变成有序数组，然后再调用二路归并子算法
}


let arr = [9, 0, 1, -3, 5, -7];
console.log(Merge_sort(arr));
