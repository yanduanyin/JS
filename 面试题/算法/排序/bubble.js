// 冒泡排序

let arr= [1, -2 ,3 ,-4 ,5,-6]
// 冒泡排序核心是两层循环 
//  第一层循环是确定外层循环
//  第二层循环是内层具体每两个左右相邻的数是如何比较并且交换

// 1 [-2,1,3,-4,5,-6]
// 2 [-2, 1, 3,-4,5,-6]
// 3 [-2,1,-4,3,5,-6]
// 4 [-2,1,-4,3,5,-6]
// 5 [-2,1,-4,3,-6,5]
// 执行arr.length -1 次， 最大的值确定了
// ... 每次都是如此，


function bubble1(arr) {
  for(let i = 0 ; i < arr.length - 1 ; i ++) {
    let bool = true ;
    for(let j = 0 ; j < arr.length - 1 -i ;j++) {
      if(arr[j] >= arr[j+1]) {
        [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
        bool = false
      }
    }
    if(bool) break ;
  }
  return arr;
}


console.log(bubble1(arr));
