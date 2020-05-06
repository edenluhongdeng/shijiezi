var User = require("./user.js");
// https://www.cnblogs.com/zhongweiv/p/mongoose.html  //参考地址
/**
 * 插入
 */
function insert() {

    var user = new User({
        username: 'Tracy McGrady',                 //用户账号
        userpwd: 'abcd',                            //密码
        userage: 37,                                //年龄
        logindate: new Date()                      //最近登录时间
    });

    user.save(function (err, res) {

        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }

    });
}

insert();

function update(){
    var wherestr = {'username' : 'Tracy McGrady'};
    var updatestr = {'userpwd': 'zzzz'};

    User.update(wherestr, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

// update();
function findByIdAndUpdate(){
    var id = '5eb2cd83fd380541b4251998';
    var updatestr = {'userpwd': 'abcd'};

    User.findByIdAndUpdate(id, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

findByIdAndUpdate();
