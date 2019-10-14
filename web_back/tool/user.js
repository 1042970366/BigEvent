//这个user.js用来管理用户进行的所有接口请求操作
var user = {
    //用户登录操作方式
    login:function(options){

        $.ajax({
            type: 'post',
            url: USER_LOGIN,
            data:options.data,
            success: options.callback,

        })
    },
    //用户登出操作
    logout:function(options){
        $.ajax({
            type:'post',
            url:USER_LOGOUT,
            success:options.callback,

        })

    },
    //简单信息获取
    getInfo:function(options){
        $.ajax({
            url: USER_INFO,
            success:options.callback,
        })
    },
    //管理用户详细信息接口的操作方式
    getAllInfo:function(options){
        $.ajax({
            url:USER_INFO_GET,
            success: options.callback,
        })
    },
    //编辑方法,用来管理用的的编辑接口的操作方法
    edit:function(options){
        $.ajax({
            type: 'post',
            url: USER_INFO_EDIT,
            data:options.data,//获取options中的数据
            contentType: false,
            processData: false,
            success: options.callback,//获取options的回调函数

        });    
    }

}