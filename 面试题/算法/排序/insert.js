 // 插入排序

 function insert(arr) {
   for(let i = 1; i < arr.length; i++) { // 
     target = arr[i] // 打扑克 你会把第二张牌拿出来 插入，
     let j = i -1;   // 前一张扑克牌， 先和先一张牌比较
     while(j >= 0 && arr[j] > target) {
       arr[j+1] = arr[j]   // 让比较的 前面的大的数字 等于 后一个数字
       j--
     }
     arr[j+1] = target; // 如果前面的数字较小， 那么要插入的牌的位置不变，如果前面的数字大，那么走完while循环，要插入的牌 等于 前面的数字
   }
   return arr;
 }

 let arr = [1, 0, 2, 4, -1, -9, 10]

 console.log(insert(arr));
 