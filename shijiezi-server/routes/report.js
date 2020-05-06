
const router = require('koa-router')()
const Controller = require("../controller")

router.prefix('/report')

router.get("/",Controller.hello)

module.exports = router;