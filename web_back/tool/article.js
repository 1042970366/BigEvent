//设置article对象保存文章接口的调用方法
var article = {
    //getCate用来管理文章分类获取接口的调用方式
    getCate:function(options){
        $.ajax({
            url: ARTICLE_GET,
            success: options.callback,
        });

    },


    //addCate用来管理文章分类新增接口的调用方式
    addCate:function(options){
        $.ajax({
            type: 'post',
            url: ARTICLE_ADD,
            data:options.data,
            success: options.callback,
        })
    },
    //editCate用来管理文章分类获取接口的调用方式
    editCate:function(options){
        $.ajax({
            type: 'post',
            url: ARTICLE_EDIT,
            data:options.data,
            success:options.callback,
        });
    },
    //delCate用来管理文章分类获取接口的调用方式
    delCate:function(options){
        $.ajax({
            type: 'post',
            url: ARTICLE_DEL,
            data:options.data,
            success: options.callback,
        });
    },
};