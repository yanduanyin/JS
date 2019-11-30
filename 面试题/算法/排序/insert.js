 // 插入排序

 function insert(arr) {
   for(let i = 1; i < arr.length; i++) {
     target = arr[i]
     let j = i -1;
     while(j >= 0 && arr[j] > target) {
       arr[j+1] = arr[j]
       j--
     }
     arr[j+1] = target;
   }
   return arr;
 }

 let arr = [1, 0, 2, 4, -1, -9, 10]

 console.log(insert(arr));
 