const router = require('koa-router')()
const recommendService = require('../controllers/mySqlConfig.js')

router.prefix('/knowcars')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
// 定义路由接口，在前台请求
router.post('/recommend', async(ctx, next) => {
  var idx = ctx.request.body.idx * 8
  await recommendService.getAllRecommend(idx).then((res) => {
    // console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.post('/new', async(ctx, next) => {
  var idx = ctx.request.body.idx * 8
  await recommendService.getAllNew(idx).then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.post('/newResources', async(ctx, next) => {
  var idx = ctx.request.body.idx * 8
  await recommendService.getAllNewResources(idx).then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.post('/evaluation', async(ctx, next) => {
  var idx = ctx.request.body.idx * 8
  await recommendService.getAllEvaluation(idx).then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.post('/shopping', async(ctx, next) => {
  var idx = ctx.request.body.idx * 8
  await recommendService.getAllShopping(idx).then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.post('/SUV', async(ctx, next) => {
  var idx = ctx.request.body.idx * 8
  await recommendService.getAllSuv(idx).then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.post('/tarvel', async(ctx, next) => {
  var idx = ctx.request.body.idx * 8
  await recommendService.getAllTarvel(idx).then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.post('/task', async(ctx, next) => {
  var idx = ctx.request.body.idx * 8
  await recommendService.getAllTask(idx).then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})
router.post('/usecars', async(ctx, next) => {
  var idx = ctx.request.body.idx * 8
  await recommendService.getAllUsecars(idx).then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})

module.exports = router
