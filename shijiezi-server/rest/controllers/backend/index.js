/*
* @ author sessionboy 
* @ github https://github.com/sessionboy
* @ website http://sinn.boyagirl.com
* @ use 管理后台文章相关接口逻辑层
*/ 

class BackendMain {
  // 登录页渲染
  static async Index(ctx) {
    console.log('SInn管理平台');
    await ctx.render('index', {
      title: '欢迎使用Koa 2，接下来我们将一起探索!^_^'
    })
  }
}

export default BackendMain;
