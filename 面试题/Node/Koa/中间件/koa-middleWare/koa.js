const Koa = require('koa')
const app = new Koa();

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
// 1 -> 3 -> 5(最里面了) -> 4 -> 2  洋葱模型式的调用中间件
app.listen(3003, () => {
  console.log('3000');
})