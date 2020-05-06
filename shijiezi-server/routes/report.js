const router = require('koa-router')()

router.prefix('/report')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
