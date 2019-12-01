// 浅拷贝  返回的对象并不是独立的新的对象  
// 浅拷贝 会连地址一起拷贝，改变新对象里的属性可能改变到原对象的属性的值




// 
let obj = {
  a: 1,
  field4: {
      child: 'child',
      child2: {
          child2: 'child2'
      }
  }
}

function shallowclone(target) {
  let newCloneTarget = {} // 给浅拷贝的内存空间

  for(let key in target) {
    newCloneTarget[key] = target[key]
  }
  return newCloneTarget
}

obj1 = shallowclone(obj)
obj1.a = '我是简单数据类型，值未被改变'
obj1.field4.child = '我是被浅拷贝改变了原对象的里复杂数据类型的child的值'
console.log(obj.a);
console.log(obj.field4.child);
