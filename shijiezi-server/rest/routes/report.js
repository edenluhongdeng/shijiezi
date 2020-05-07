/*
* @ author sessionboy 
* @ github https://github.com/sessionboy
* @ website http://sinn.boyagirl.com
* @ use 前端的接口配置
* @ 逻辑层实现 /controllers/frontend/*
*/ 
const IndexController = require('./../controllers/frontend/index') ;
const ArticleController = require('./../controllers/frontend/article') ;
const UserController = require('./../controllers/frontend/user') ;

const router = require('koa-router')();


  // 前端sinn Api 
router 
  .get('/api/query',IndexController.query)                                             // 获取首页数据 

  // 文章相关api
  .get('/api/article/get_detail',ArticleController.get_detail)                         // 获取文章详情
  
module.exports = router;





