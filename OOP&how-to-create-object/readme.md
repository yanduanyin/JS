##创建对象的几种方法
1. 对象字面量
```js
var obj = {
    name: ''
}
2. new Object()   Object
3. 构造函数  
    通过new 调用的时候,
    如果构造函数没有返回值，或者返回的不是一个对象，则按一般流程，会先隐式的创建一个对象， 把属性放到该对象，返回
    如果原本构造函数里返回了一个对象，则new 调用返回的就是构造函数的这个对象
```js
    var t = new Object()
    t.x = x;
    return typeof Constructor() === 'object' ? Constructor() : t;
```
    会隐式的创建一个对象， 把属性放到该对象，返回
```js
    var t = new Object()
    t.x = x;
    return t;
```
## 每一个函数创建的时候  被赋予了一个prototype 属性