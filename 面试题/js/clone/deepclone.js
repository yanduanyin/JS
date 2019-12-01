// 实现一个简单的浅拷贝

// function cloneShallow(source) {
//   var target = {}
//   for (var key in source) {
//     if (Object.prototype.hasOwnProperty.call(source, key)) { // 看是否有source的属性key 
//       target[key] = source[key]
//     }
//   }
//   return target
// }


// 简单版深拷贝1  JSON.parse(JSON.stringify()) 
// 局限性：
// 1. 他无法实现对函数 、RegExp等特殊对象的克隆
// 2. 会抛弃对象的constructor,所有的构造函数会指向Object
// 3. 对象有循环引用,会报错

// 深拷贝实现原理  简单版 只能判断是否为引用类型或者数组

// function cloneDeep(source) {
//   if (typeof source !== 'object') return source; // 递归出口
//   var target = Array.isArray(source) ? [] : {}  // 深拷贝后 全新的对象的空间
//   for(var key in source) {
//     if (Object.prototype.hasOwnProperty.call(source, key)) {  
//       if (typeof source[key] === 'object') { // 判断key 的值为引用类型
//           target[key] = cloneDeep(source[key])
//         } else {
//           target[key] = source[key]
//         }
//     } 
//   }
//   return target
// }

let a = {
  name: 'wn',
  book: {
    title: 'js',
    price: '45'
  }
}

let b = cloneDeep(a)
console.log(b)

a.book.price = 55
console.log(b)


//  栈升级版 深拷贝的实现
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






// 面试版
/* deep clone
 * @param  {[type]} parent object 需要进行克隆的对象
 * @return {[type]}        深克隆后的对象
*/
const clone = parent => {
  // 判断类型
  const isType = (obj, type) => {
    if (typeof obj !== "object") return false;
    const typeString = Object.prototype.toString.call(obj);
    let flag;
    switch (type) {
      case "Array":
        flag = typeString === "[object Array]";
        break;
      case "Date":
        flag = typeString === "[object Date]";
        break;
      case "RegExp":
        flag = typeString === "[object RegExp]";
        break;
      default:
        flag = false;
    }
    return flag;
  };

  // 处理正则
  const getRegExp = re => {
    var flags = "";
    if (re.global) flags += "g";
    if (re.ignoreCase) flags += "i";
    if (re.multiline) flags += "m";
    return flags;
  };
  // 维护两个储存循环引用的数组
  const parents = [];
  const children = [];

  const _clone = parent => {
    if (parent === null) return null;
    if (typeof parent !== "object") return parent;

    let child, proto;

    if (isType(parent, "Array")) {
      // 对数组做特殊处理
      child = [];
    } else if (isType(parent, "RegExp")) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (isType(parent, "Date")) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime());
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent);
      // 利用Object.create切断原型链
      child = Object.create(proto);
    }

    // 处理循环引用
    const index = parents.indexOf(parent);

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index];
    }
    parents.push(parent);
    children.push(child);

    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i]);
    }

    return child;
  };
  return _clone(parent);
};