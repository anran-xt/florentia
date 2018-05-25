/**
 * Created by lenovo1 on 2018/5/20.
 */
;
define(["jquery","jqueryCookie"], function ($) {
    function loginRegisterCheck() {
        this.loginBtn = $(".loginArea .loginBtn");
        this.registerBtn=$(".registerPart .registerBtn");

        this.url = "data/02_login.php";
        this.init();
    }

    loginRegisterCheck.prototype = {
        constructor: loginRegisterCheck,
        init: function () {
            this.loginBtn.on("click",{type:"login"},$.proxy(this.checkValid, this));
            this.registerBtn.on("click",{type:"register"},$.proxy(this.checkValid,this))

        },
        checkValid: function (event) {
            if(event.data.type=="login"){
                this.uName = $("#uName");
                this.uPwd = $("#uPwd");
                this.type="login";
            }else if(event.data.type=="register"){
                this.uName=$("#unName");
                this.uPwd=$("#unPwd");
                this.type="register";
            }
            if ($(this.uName).val() == "" || $(this.uName).val() == null) {
                $(this.uName).css("border-color", "red");
                return;
            }
            if ($(this.uPwd).val() == "" || $(this.uPwd).val() == null) {
                $(this.uPwd).css("border-color", "red");
                return;
            }

            var opt = `uname=${$(this.uName).val()}&upwd=${$(this.uPwd).val()}&type=${this.type}`;

            $.ajax({
                url: this.url,
                data: opt
            })
                .then(function (res) {
                    // console.log(res!='0');
                    if(this.type=="login"){
                        if(res!='0'){
                            $.cookie("user",$(this.uName).val());
                            location.href="index.html";
                        }else{
                            alert("用户名或密码错误");
                        }
                    }else if(this.type=="register"){
                        if(res=="1"){
                            alert("注册成功,请返回登录");
                        }else{
                            alert("注册失败,用户名已存在");
                        }
                    }
                    // alert(res);
                }.bind(this))
        }
    }

    new loginRegisterCheck();


})