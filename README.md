<p align="center"><img src="http://md.hao2.top/img/logo.png"
        alt="Logo" width="158" height="82" style="max-width: 100%;"></p>
<h1 align="center">BigEvent</h1>
<p align="center">前端小项目,实现网站前台展示,后台管理~</p>
<p align="center">
    <a href="https://github.com/1042970366/">
        <img src="https://img.shields.io/badge/技术栈-HTML-green" alt="MIT License" />
    </a>
    <a href="https://vuejs.org/">
        <img src="https://img.shields.io/badge/技术栈-CSS-green" alt="Vue2.0">
    </a>
    <a href="https://github.com/1042970366/">
        <img src="https://img.shields.io/badge/技术栈-JS/JQuery/Ajax-blueviolet" alt="Author">
    </a>
    <a href="https://github.com/1042970366/">
        <img src="https://img.shields.io/badge/Author-Tmier-blueviolet" alt="Author">
    </a>
</p>


项目地址:https://github.com/1042970366/BigEvent

### 2019-10-13

##### **后台功能制作--v1.0**

**登陆功能制作**

- 输入框是否为空检测 

  核心代码:

  ```js
   if (username.trim() === '' || password.trim() === '') {
              alert('请完整填写表单~');
              return;
          }
  ```

  

- 数据与后台数据对比检测 (ajax)

  ```js
  	$.ajax({
              type: 'post',
              url: 'http://localhost:8000/admin/login',
              data: {
                  user_name: username,
                  password: password,
              },
              success: function (res) {
                  // console.log(res);
                  if (res.code === 200) {
                      alert('登陆成功!~');
                      isLogin = true;
                      location.href = './index.html'
                  } else {
                      alert('同户名或密码输入错误!~\n用户名:admin\n密码为:123456');
                  }
  
  
              }
  
          })
  ```

  

- 键盘enter键功能与登录按钮功能共享~

  ```js
  	document.addEventListener('keydown', keydown);
  
      function keydown(event) {
          console.log(event.keyCode);
          if (event.keyCode == 13) {
              login();
          }
  
      }
  ```

- 配置config.js,统一请求接口配置



### 2019-10-14

##### 后台功能制作--v1.2

- 通过bootstrap美化弹窗(不过感觉更丑了~)
- 后台首页退出功能,并封装到user.js中
- 用户的简单信息展示功能并封装到user.js
- iframe初识
- 用户个人信息页面的信息展示功能,并封装到user.js中
- 用户个人信息页面的信息编辑功能,并封装到user.js中
- 用户信息页面头像图片预览功能

**今日功能简介:**

![](http://md.hao2.top/img/1571021117.gif)



### 2019-10-15

bug:新增分类时出现删除的分类名也无法加入

具体:

![](http://md.hao2.top/img/bug1.gif)



### 2019-10-16 --v1.5

功能总结

- 分类页面数据的获取和展示

  - 字符串拼接 ES6 || 模板字符串 然后 通过`$('#tbody').html(str);`

- 分类页面数据的新增功能

- 分类数据的编辑功能

  - ```js
    			var id = $(this).data('id');
                $('#modal_edit').data('id', id);
                var $tds = $(this).parents('tr').children();
                $('#cate_name').val($tds.eq(0).text());
                $('#cate_slug').val($tds.eq(1).text());
    ```

    

- 分类数据的删除功能

- 文章列表页面数据获取和展示

- 筛选文章数据

  - ```js
    		$('#btnSearch').on('click', function (e) {
                e.preventDefault();//阻止submit提交功能
                getArticle();
            });
    ```

    

### 2019-10-16 --plus

- 完成文章列表分页功能

  - 创建全局变量

  > 页面序号:在后边点击时将函数中的page储存,传入ajax数据中,然后通过ajax取出服务器中的6条数据并显示
  >
  > currentTotalPage与服务器响应的总页数做对比,如果相同的话,则return,结束整个自调用循环,如果不设置该参数,则自调用无限循环中~循环~循环~Duang~

  ```js
  		var clickPage = 1; //页面序号
          // var myTotalPage; 
          var currentTotalPage;//当前显示页面的所有页数
  ```

  - **在ajax传输数据时,将page传入以实现分页,每页6份数据,page控制从哪一页开始(服务器根据传入的type与state自动将符合条件的数据分页)**

  ```js
  		data: {
          type: $('#selCategory').val(),
          state: $('#selStatus').val(),
          page: clickPage,
          },
  ```

  - **下边是当请求成功时文章分类列表的分页功能的具体实现的代码:**

  ```js
  						var totalPages = res.totalPage; //将服务器响应的totalPage保存
                          if (totalPages === currentTotalPage) {
                              //如果服务器响应出的页面总和与当前页面总和一样,则return,不一样的话继								 续向下走,将服务器响应的页面总和传递给currentTotalPages来生成序号
                              return;
                          }
                          //  - 如果页数不同，将当前的最新页号设置给全局变量currentTotalPage保存
                          currentTotalPage = totalPages;
                          //进行分页功能设置
  
                          $('.pagination').twbsPagination('destroy'); //销毁当前生成的序号结构,在下边重构
                          $('.pagination').twbsPagination({
                              totalPages: totalPages, //总页数
                              visiblePages: 5, //显示的页数
                              first: '首页',
                              last: '尾页',
                              prev: '上一页',
                              next: '下一页',
                              onPageClick: function (event, page) {
                                  console.log(page);
  
                                  clickPage = page;
                                  getArticle();
                                  // console.log(1)
                              },
  
                          });
  ```

  

### 2019-10-17

- 日期小插件:jedate

  - 使用步骤:

  ```js
  1.引入jedate的css,js文件
  2.调用方法:
  jeDate('#text',{
      trigger:false,//是否内部触发,可以添加按钮,使用按钮触发
      //isinitVal:true,//--是否在绑定的元素中初始化日期(显示日期)
      //festival:true,节日,农历是否显示
      format:'YYYY-MM-DD hh:mm:ss'
  })
  ```

  > 可以将输入框设置为readonly,使输入框只读



- 文本编辑器插件使用

  - 引入主文件和setup配置文件

  - 获取编辑器内容方法:

    > tinyMCE.activeEditor.getContent();
    >
    > tinyMCE.editor[0].getContent();

  - 记得下载的js不能移动位置,要跟tiny的 文件夹待在一起,因为里面有皮肤,主体,语言等等文件夹,是一伙的,js单独移除就失效了~~~

- axios的使用

  - **与ajax()的对比**

    ```js
    $.ajax({
        type:'',
        url:'',
        data:{},
        //成功是的处理函数
        success:function(res){
            
        },
        //失败时的处理函数
        error:function(err){
            
        },
        //无论成功还是失败都会执行的函数
        complete:function(){
            
        }
    })
    ```

    **ajax()的另一种数据传递方式**

    ```js
    $.ajax({
        type:'',
        url:'',
        data:{},
    })
    	//成功时的处理函数,相当于success
        .then(function(res){
        
    })
    	//失败时的处理函数,相当于error
        .fail(function(err){
        
    })
    	//无论成功失败都会执行的函数,相当于complete
        .always(function(){
        
    })
    ```

    > 提一笔:上边注意函数后边是没有句号点的,都是直接点的方法

    **axios:**

    ```js
    axios({
        method:'get',//请求方式
        url:'http:...',
        params:{	//相当于ajax()中的data{}
            username:'',
            userAge:16,
        }
    })
    	//ajax().then()
        .then(function(res){
        //这里需要注意,axios返回的res与ajax()返回的不太相同,axios中返回的res多包裹了一个对象,axios返回的res.data相当于ajax()返回的res,具体看下图
    	console.log(res.data);
    })
    	//ajax().fail()
        .catch(function(err){
        
    })
    	//ajax().always()
        .finally(function(){
        
    })
    ```

    ![](E:\Github\BigEvent\assets\20191017104640.png)



- 功能:
  - 实现文章分类页面分页功能
  - 实现前台页面index.html的新闻标题与图片的获取加载

## 待续~

