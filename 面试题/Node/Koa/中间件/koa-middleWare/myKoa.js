
class myKoa {
  constructor() {
    this.middleWare = [];
  }
  // 加载注册中间件的方法
  use (fn) {
    this.middleWare.push(fn);
    // return this 包装了 中间件use的链式调用
    return this;
  }
  // 模拟中间件运行的方法(洋葱模型式的调用)
  run () {
    /** fn
     * async (ctx, next) => {
        console.log('3');
        await next();
        console.log('4');
      }
     */
    // application  compose: 中间件
    // 触发的方法
    let self = this;
    dispatch(0)
    function dispatch(i) {
      let fn = self.middleWare[i];
      if (!fn) return Promise.resolve();
      // fn use 进来的函数  ctx next
      // 1
      // fn({ctx: 'ctx'}, () => {
      //   // next 
      //   return dispatch(i + 1);
      // })
      // 剩余的中间件先执行掉
      // 2 async await 返回的是一个Promise的对象 
      return Promise.resolve(fn({ctx: 'ctx'}, () => {
        // next 
        return dispatch(i + 1);
      }))
    } 
  }
}
const app = new myKoa();

app.use(async (ctx, next) => {
  console.log('1');
  await next();
  console.log('2');
})
app.use(async (ctx, next) => {
  console.log('3');
  await next();
  console.log('4');
})
app.use(async (ctx, next) => {
  console.log('5');
})
// app.run()
const http = require('http');
http.createServer((res, req) => {
  // 请求
  app.run();
})

// export default myKoa;
// module.exports = myKoa;