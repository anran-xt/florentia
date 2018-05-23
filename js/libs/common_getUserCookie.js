/**
 * Created by lenovo1 on 2018/5/21.
 */
;
define(["jquery","jqueryCookie"],function ($) {
    function GetUser() {
        this.topNav=$("#head .nav .topNav");
        this.userCookie=$.cookie("user");
        this.shopMsg=$.cookie("shoppingMsg");
        // console.log(this.shopMsg);
        this.init();
    }
    GetUser.prototype={
        constructor:GetUser,
        init:function () {
            //1.加载缓存的用户名到页面
            if(this.userCookie){
                this.topNav.find(".login").remove();
                this.topNav.find(".register").remove();
                $(this.topNav).html(`<li><a href="#" id="uname">${this.userCookie}</a> <a href="#" class="exit">退出</a><span></span></li>`+$(this.topNav).html());

                //用户登陆则清除购物车缓存
                $.cookie("shoppingMsg","");
                this.shopMsg="";
            }
            //2.如果有商品已缓存直接读取缓存的商品信息
            console.log(this.shopMsg=="");
            if(this.shopMsg&&this.shopMsg!=""&&this.shopMsg!="[]"){
                //2.1改变购物车小图标
                this.shoppingIcon=$("#head .rightNav .cart a");
                // console.log(this.shoppingIcon);
                this.shopMsg=JSON.parse(this.shopMsg);
                $(this.shoppingIcon).css("background","url(img/icon-cart-active.png) no-repeat center");
                $(this.shoppingIcon).css("background-size","14px 14px");
                $(this.shoppingIcon).parent().find("i").html(this.shopMsg.length);
            }else{
                //3.如果商品没有缓存
                //3.1如果用户名有缓存,向后台发送请求，查询商品信息
                if(this.userCookie){
                    // console.log("进入");
                    //3.1.1根据用户名，发送请求，获取购物车数据
                    $.ajax({
                        url:"data/04_selectUserGood.php",
                        type:"POST",
                        data:`uname=${this.userCookie}`
                    }).then(function (res) {
                        // console.log(JSON.parse(res));
                        var res=JSON.parse(res);

                        //设置购物车详情cookie,以便结算页面使用
                        $.cookie("shoppingMsg",JSON.stringify(res));

                        //3.1.3判断是否改变购物车小图标
                        this.shopMsg=$.cookie("shoppingMsg");
                        console.log(this.shopMsg);
                        if(this.shopMsg!=""&&this.shopMsg!="[]"){
                            console.log("changed");
                            this.shoppingIcon=$("#head .rightNav .cart a");
                            this.shopMsg=JSON.parse(this.shopMsg);
                            $(this.shoppingIcon).css("background","url(img/icon-cart-active.png) no-repeat center");
                            $(this.shoppingIcon).css("background-size","14px 14px");
                            $(this.shoppingIcon).parent().find("i").html(this.shopMsg.length);
                        }



                    })
                }
            }
        }
    }
    return GetUser;
});