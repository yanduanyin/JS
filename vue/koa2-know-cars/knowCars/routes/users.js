const router = require('koa-router')()
const recommendService = require('../controllers/mySqlConfig.js')

router.prefix('/knowcars')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/recommend', async(ctx, next) => {
  await recommendService.getAllRecommend().then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.get('/new', async(ctx, next) => {
  await recommendService.getAllNew().then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.get('/newResources', async(ctx, next) => {
  await recommendService.getAllNewResources().then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.get('/evaluation', async(ctx, next) => {
  await recommendService.getAllEvaluation().then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.get('/shopping', async(ctx, next) => {
  await recommendService.getAllShopping().then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.get('/SUV', async(ctx, next) => {
  await recommendService.getAllSuv().then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.get('/tarvel', async(ctx, next) => {
  await recommendService.getAllTarvel().then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.get('/task', async(ctx, next) => {
  await recommendService.getAllTask().then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.get('/use', async(ctx, next) => {
  await recommendService.getAllUse().then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})

module.exports = router
