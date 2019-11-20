const router = require('koa-router')()
const recommendService = require('../controllers/mySqlConfig.js')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/recommend', async(ctx, next) => {
  await recommendService.getAllRecommend().then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    // ctx.body = res
  })
})

module.exports = router
