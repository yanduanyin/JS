// 冒泡排序


var arr = [2, -4, 6, -8, 9, -1] // 从小到大排序

function bubble1(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j] >= arr[j+1]) {
        // Es6数组解构   交换位置
        [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
      }
    }
  }
  return arr;
}

console.log(bubble1(arr));

// 试想一下如果给你的数组本来就是排好序的？ 你怎么优化使复杂度降低  时间复杂度O(n^2) -> O(n)    空间复杂度 D(1) -> D(1)
let arr1 = [1, 2, 3, 4, 5]

function bubble2(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let bool = true;
    for(let j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j] >= arr[j+1]) {
        // Es6数组解构   交换位置
        [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
        bool = false
      }
      console.log('000'); // 执行第一次外层循环发现bool还是true 说明这个数组是有序的，所以直接中断后面的循环，直接return
    }
    console.log('111');
    if(bool) break;
  }
  console.log('222');
  return arr;
}

console.log(bubble2(arr1));