## Map
{}
1. {} / Map 区别
    1. Map 中的 key 是有序的，而添加到对象中的则不是
    2. {} key 只接受 字符串和Symbol，Map 的key 可以是任意值
2. Map /WeakMap 的区别

## ...扩展运算符
可迭代对象
for of 可遍历可迭代对象
[...可迭代对象]
Set Map Array 可以for...in...的，都是可迭代对象

## ES6 新的数据结构类型  Set Map  new Map()

Map 对应于HashMap,  这一传统的数据结构。 has  get   set等API

可以遍历  for [key, val]  of

Map WeakMap  不一样的地方
key  被回收后  WeakMap  找不到了， 它是一个引用关系