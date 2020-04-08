const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '欢迎使用Koa 2，接下来我们将一起探索!^_^'
  })
})

router.get('/string', async (ctx, next) => {
  console.log(ctx.query);
  ctx.body = 'koa2 string' + ctx.query.prm
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
