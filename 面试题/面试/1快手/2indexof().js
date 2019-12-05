indexof(str1, str2, n)
// 首先理解一下，string可以接受三个参数，
// 第一个，你查找的字符串对象str1
// 第二个， 你要在查找的字符串对象里找的 字符串段， 这里可以是一个字符串，也可以是字符串段
// 第三个， 指定查找的起始下标。

// substring() 和 substr()比较
// substring(start, end)   //   substr(start, length)
// 1. substring()  查找指定字符串 起始下标和结束下标的 之间的字符串，并返回这段字符串
// 2. substr() 查找指定开始下标到指定长度的字符串，并返回他
function myIndexof(str1, str2, n) {
  let i = ''
  const len1 = str1.length  // 查找的字符串对象的长度
  const len2 = str2.length  // 查找的字符串段的长度
  // 第一步确定查找的起始位置符合常规，不是不存在或者大于你要查找的字符串对象长度
  if (n == undefined || n == null || n <= -1) {
    return -1
  } else if (n > len1 - 1) {
    return -1
  } else {
    i = n
  }
  // 确定查找的字串不会大于父串
  if (len2 > len1) { // 字串的长度大于父串的长度， 不存在这种情况
    return -1
  } else if (len2 == len1) {  // 字串长度和父串长度相等，但是还要判断值是否相等
    if (str1 == str2) { // 长度一样，字串和父串值也相等，返回第一个的下标
      return 0
    } else {  // // 长度一样，但字串和父串值不相等，不存在
      return -1
    }
  } else {
    while (i < len1) { // 在父串里循环查找字串一样长度的字符串和目标字符串进行比较
      str = str1.substr(i, len2)
      if (str === str2) { // 
        return i
      }
      i++
    }
    if (i === len1) { //如果循环到父串最后一位还是没有出现相等，那么就是-1不存在
      return -1
    }
  }
}

console.log(myIndexof('abc', 'b', 0));
