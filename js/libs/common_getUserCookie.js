/**
 * Created by lenovo1 on 2018/5/21.
 */
;
define(["jquery","jqueryCookie"],function ($) {
    function GetUser() {
        this.topNav=$("#head .nav .topNav");
        this.userCookie=$.cookie("user");
        // console.log($.cookie("user"));
        this.init();
    }
    GetUser.prototype={
        constructor:GetUser,
        init:function () {
            if(this.userCookie){
                this.topNav.find(".login").remove();
                this.topNav.find(".register").remove();
                $(this.topNav).html(`<li><a href="#">${this.userCookie}</a> <a href="#" class="exit">退出</a><span></span></li>`+$(this.topNav).html());
            }
        }
    }
    return GetUser;
});