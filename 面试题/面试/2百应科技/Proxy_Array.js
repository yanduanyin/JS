// Proxy 监听数组
// Proxy()
var a = [1, 2, 3]
let pArr  = new Proxy(a, {
  get: function(target, key, receiver) {
    console.log('get');
    // 3. 恢复
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, value, receiver) {
    console.log('set');
    return Reflect.set(target, key, value, receiver)
  }
})

pArr[2] = 999;
pArr.push(9) // 为什么push 会有两次get 和两次set？这个和push的内部实现有关