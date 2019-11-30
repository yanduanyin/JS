// 冒泡排序

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

let arr= [1, -2 ,3 ,-4 ,5,-6]
console.log(bubble1(arr));
