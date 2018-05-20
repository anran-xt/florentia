/**
 * Created by lenovo1 on 2018/5/20.
 */
define(["jquery"], function ($) {
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
                    alert(res);
                })
        }
    }

    new loginRegisterCheck();


})