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
    return ctx.render('login', { title: 'SInn管理平台'});
  }
}

export default BackendMain;
