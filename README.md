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

##### **后台登录功能制作--v1.0**

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

## 待续~

