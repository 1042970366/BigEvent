window.onload = function () {
    /*
        1.结构修改:登录按钮是submit功能,我们需要使用ajax,应当改为普通按钮
            或者e.preventDefault()
    
    
    */
    var isLogin = false;

    $('.input_sub').on('click', login);

    //登录功能
    function login() {

        var username = $('.input_txt').val();
        var password = $('.input_pass').val();
        // 验证输入框不为空
        if (username.trim() === '' || password.trim() === '') {
            alert('请完整填写表单~');
            return;
        }

        //不为空时发送请求
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



    }
    /*     function SureLogin(){
            
            return isLogin;
        }
        window.isLogin = isLogin; */

    //添加键盘enter键登录功能
    document.addEventListener('keydown', keydown);

    function keydown(event) {
        console.log(event.keyCode);
        if (event.keyCode == 13) {
            login();
        }

    }

}