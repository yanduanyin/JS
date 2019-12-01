/**
 * 循环二分查找
 * @param {Array} arr 
 * @param {*} val 
 */
function bsearch (arr, val) {
  let len = arr.length
  let low = 0
  let high = len - 1
  while (low <= high) {
    let mid = (low + high) >> 1
    if (arr[mid] === val) {
      return mid
    } else if (arr[mid] < val) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}

/**
 * 递归二分查找
 * @param {Array} arr 
 * @param {*} val 
 */
function dgbsearch (arr, val) {
  return dgbsearchfun(arr, 0, arr.length-1, val)
}

function dgbsearchfun (arr, low, high, val) {
  if (low > high) return -1
  let mid = (low + high) >> 1
  if (arr[mid] === val) {
    return mid
  } else if (arr[mid] < val) {
    return dgbsearchfun(arr, mid+1, high, val)
  } else {
    return dgbsearchfun(arr, low, mid-1, val)
  }
}

/**
 * 二分查找变体
 * 查找第一个元素
 * @param {Array} arr 
 * @param {*} val 
 */
function bt1bsearch (arr, val) {
  let len = arr.length
  let low = 0
  let high = len - 1
  while(low <= high) {
    let mid = low + ((high - low) >> 1)
    if (arr[mid] < val) {
      low = mid + 1
    } else if (arr[mid] > val) {
      high = mid - 1
    } else {
      // 如果
      if (mid == 0 || arr[mid - 1] !== val) return mid
      else high = mid - 1
    }
  }
  return -1
}


/**
 * 二分查找变体
 * 查找最后一个元素
 * @param {Array} arr 
 * @param {*} val 
 */
function bt2bsearch (arr, val) {
  let len = arr.length
  let low = 0
  let high = len - 1
  while(low <= high) {
    let mid = low + ((high - low) >> 1)
    if (arr[mid] < val) {
      low = mid + 1
    } else if (arr[mid] > val) {
      high = mid - 1
    } else {
      // 如果
      if (mid == len - 1 || arr[mid + 1] !== val) return mid
      else low = mid + 1
    }
  }
  return -1
}

/**
 * 二分查找变体
 * 查找第一个大于等于给定值元素
 * @param {Array} arr 
 * @param {*} val 
 */
function bt3bsearch (arr, val) {
  let len = arr.length
  let low = 0
  let high = len - 1
  while(low <= high) {
    let mid = low + ((high - low) >> 1)
    if(arr[mid] >= val) {
      if (mid === 0 || arr[mid - 1] < val) return mid
      else high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}


/**
 * 二分查找变体
 * 查找最后一个小于等于给定值元素
 * @param {Array} arr 
 * @param {*} val 
 */
function bt4bsearch (arr, val) {
  let len = arr.length
  let low = 0
  let high = len - 1
  while(low <= high) {
    let mid = low + ((high - low) >> 1)
    if(arr[mid] <= val) {
      if (mid === len - 1 || arr[mid + 1] > val) return mid
      else low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}

let list = [1, 2, 3, 4, 5, 7, 9, 10, 33, 63, 62]
let list1 = [1, 2, 3, 4, 5, 5, 5, 5, 7, 7, 9, 59]

console.log(bsearch(list, 5))
console.log(dgbsearch(list, 5));
console.log(bsearch(list1, 5))
console.log(dgbsearch(list1, 5));
console.log(bt1bsearch(list1, 5));
console.log(bt2bsearch(list1, 5));
console.log(bt3bsearch(list1, 6));
console.log(bt4bsearch(list1, 6));

