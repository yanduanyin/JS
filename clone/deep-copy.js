// 浅拷贝
// function cloneShallow(source) {
//   var target = {}
//   for (var key in source) {
//     if (Object.prototype.hasOwnProperty.call(source, key)) {
//       target[key] = source[key]
//     }
//   }
//   return target
// }
// 深拷贝 实现原理  笔试题 80% 会考

// 简单版  只能判断对象的引用类型
// function cloneShallow(source) {
//     var target = {}
//     for (var key in source) {
//       if (Object.prototype.hasOwnProperty.call(source, key)) {
//         if (typeof source[key] === 'object') {
//           target[key] = cloneShallow(source[key])
//         } else {
//           target[key] = source[key]
//         }
//       }
//     }
//     return target
//   }

// let a = {
//   name: 'wn',
//   book: {
//     title: 'js',
//     price: '45'
//   }
// }

// let b = cloneShallow(a)
// console.log(b)

// a.book.price = 55
// console.log(b)

// 简单版 可以判断数组
// function cloneDeep(source) {
//   if (typeof source !== 'object') return source
//   var target = Array.isArray(source) ? [] : {}
//   for (var key in source) {
//     if (Object.prototype.hasOwnProperty.call(source, key)) {
//       if (typeof source[key] === 'object') {
//         target[key] = cloneDeep(source[key])
//       } else {
//         target[key] = source[key]
//       }
//     }
//   }
//   return target
// }



// let a = [0, '1', [2, 3]]
// let c = cloneDeep(a)
// console.log(c)
// a[0] = 5
// a[2][0] = 6
// console.log(c)

function cloneDeep2(x) {
  const root = {}
  // 栈
const loopList = [
  {
    parent: root,
    key: undefined,
    data: 'x'
  }
]
while (loopList.length) {
  // 广度优先
  const node = loopList.pop()
  const parent = node.parent
  const key = node.key
  const data = node.data


    // 初始化赋值目标 ， key 为 undefined 则拷贝到父元素， 否则拷贝到子元素
    let res = parent
    if (typeof key !== 'undefined') {
      res = parent[key]  = {}
    }
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res, 
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    } 
  }
  return root
}
