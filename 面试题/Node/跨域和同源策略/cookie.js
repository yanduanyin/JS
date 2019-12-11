const Koa = require('koa');
const app = new Koa();
const KoaRouter = require('koa-router');
const router = new KoaRouter();
let id = 0;
const sessiontable = [ // 会话表 根据session-id 找到用户 

]

router.get('/login', async (ctx) => {
  // set-cookie
  id ++;
  let col = {
    id, 
    uid,

  }
  // session-id 
  ctx.cookies.set('login', true, {
    maxAge: 1000 * 60,
    httpOnly: true
  })
  ctx.body = 'login success';
})

router.get('/islogin', async (ctx) => {
  let login = ctx.cookies.get('login');
  if (login) {
    ctx.body = {
      islogin: true
    }
  } else {
    ctx.body = {
      islogin: false
    }
  }
})
router.get('/', async (ctx) => {
  ctx.body = `
  <a href="/login">login</a>
  <a href="/islogin">islogin</a>
  `
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3003, () => {
  console.log('3003');
  
})