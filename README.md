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



## 2019-10-16

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

    







## 待续~

