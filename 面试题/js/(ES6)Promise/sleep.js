// 如何实现sleep的效果（es5或者es6）

// es5 使用while循环和Date.now()API 获取当前时间

function sleep1(ms) {
  let startTime = Date.now()
  let expire = startTime + ms
  console.log('看到我一秒后看到222');
  while(Date.now() < expire);
  console.log('222');
  return ;
}
sleep1(1000)

//  Promise ES6 实现
function sleep2(ms) {
  let tem = new Promise((resolve) => {
    console.log('看到我一秒后看到222');
    setTimeout(resolve, ms)
  })
  tem.then(() => {
    console.log('222');
  })
}

sleep2(1000)


// async await 实现
function sleep3(ms) {
  console.log('看到我一秒后看到222');
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
async function test() {
  await sleep3(1000)
  console.log('222');
}

test()

// 通过generate来实现

function* sleep(ms){
yield new Promise(function(resolve,reject){
console.log(111);
setTimeout(resolve,ms);
})
}

// next()方法会执行generator的代码，然后，每次遇到yield x;就返回一个对象{value: x, done: true/false}，
// 然后“暂停”。返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。如果done为true，则value就是return的返回值。
sleep(1000).next().value.then(function(){console.log(2222)})
