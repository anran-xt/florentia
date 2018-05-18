/**
 * Created by lenovo1 on 2018/5/18.
 */
;+function(factory){
    //AMD判断;
    if(typeof define === "function" && define.amd){
        define(["jquery"],factory)
    }else{
        factory(jQuery);
    }
}(function ($) {
    $.fn.swiperBanner = function (banner_selector, options) {

        //保证每次实例化对象独立
        new Banner(banner_selector, options, this);//this指向调用swiperBanner函数的元素对象
    }

    function Banner(banner_selector, options, base_ele) {
        this.init(banner_selector, options, base_ele);
    }

    Banner.prototype = {
        constructor: Banner,
        init: function (banner_selector, options, base_ele) {
            //1.即将显示下标
            this.index = 0;
            //2.即将隐藏的下标
            this.prev = 0;
            //3.轮播图主体元素
            this.swiperWrap = $(banner_selector);
            this.parentContanier=this.swiperWrap.parent();  //保证移入不会在轮播图内部发生移出事件
            // console.log(this.parentContanier);

            //4.轮播子元素
            this.swiperItem = this.swiperWrap.children();
            this.itemNum = this.swiperItem.length;
            //5.左右切换按钮
            this.leftChangeBtn = $(options.leftBtn);
            this.rightChangeBtn = $(options.rightBtn);
            //6.小按钮们
            this.dots = $(options.dots);


            //7.左右按钮事件
            this.leftChangeBtn
                .on("click.change_index", {turn: "prev"}, $.proxy(this.change_index, this)) //绑定改变下标函数，并传递参数值，绑定this指向
                .on("click.animation", {turn: "prev"}, $.proxy(this.animation, this));
            this.rightChangeBtn
                .on("click.change_index", {turn: "next"}, $.proxy(this.change_index, this))
                .on("click.animation", {turn: "next"}, $.proxy(this.animation, this));
            //8.小点点移入移除事件
            this.dots
                .on("mouseover.change_index", {turn: "toIndex"}, $.proxy(this.change_index, this))
                .on("mouseover.animation", {turn: "toIndex"}, $.proxy(this.animation, this));

            //9.自动轮播事件
            this.autoMove();

            //轮播移入移出事件
            this.parentContanier.on("mouseenter",$.proxy(function(){
                // console.log("clear");
                clearInterval(this.parentContanier.autoTimer);
            },this));
            this.parentContanier.on("mouseleave",
                $.proxy(this.autoMove,this));
        },
        change_index: function (event) {
            //设计模式
            if (this.isMoving) return;

            var turnList = {
                "prev": function () {
                    this.prev = this.index;
                    if (this.index == 0) {
                        this.index = this.itemNum - 1;
                    } else {
                        this.index--;
                    }
                }.bind(this),   //改变this指向
                "next": function () {
                    this.prev = this.index;
                    if (this.index == this.itemNum - 1) {
                        this.index = 0;
                    } else {
                        this.index++;
                    }
                }.bind(this),   //改变this指向
                "toIndex": function () {
                    this.prev = this.index;
                    this.index = $(event.target).index();
                }.bind(this)   //改变this指向
            }
            if (!typeof turnList[event.data.turn] == "function") return;

            turnList[event.data.turn]();
        },
        animation: function (event) {
            if (this.prev == this.index) return;

            //设计模式
            var animationList = {
                //右
                "prev": function () {
                    this.isMoving = true;   //表示正在运动
                    this.swiperItem.eq(this.prev)
                        .stop()
                        .animate({
                            left: this.swiperItem.width()
                        })
                        .end()
                        .eq(this.index)
                        .css({
                            left: -this.swiperItem.width()
                        })
                        .stop()
                        .animate({
                            left: 0
                        });
                    setTimeout(function () {
                        this.isMoving=false;    //表示运动结束，防止反复触发事件，造成bug
                    }.bind(this),400);
                }.bind(this),

                //左
                "next": function () {
                    this.isMoving = true;
                    // console.log(this.isMoving);
                    this.swiperItem.eq(this.prev)
                        .stop()
                        .animate({
                            left: -this.swiperItem.width()
                        })
                        .end()
                        .eq(this.index)
                        .css({
                            left: this.swiperItem.width()
                        })
                        .stop()
                        .animate({
                            left: 0
                        });
                    setTimeout(function () {
                        this.isMoving = false;
                    }.bind(this), 400);
                }.bind(this),
                //toIndex
                "toIndex": function () {

                    // console.log(0);
                    this.isMoving = true;
                    if (this.prev > this.index) {
                        //右
                        this.swiperItem.eq(this.prev)
                            .stop()
                            .animate({
                                left: this.swiperItem.width()
                            })
                            .end()
                            .eq(this.index)
                            .css({
                                left: -this.swiperItem.width()
                            })
                            .stop()
                            .animate({
                                left: 0
                            })
                        // .queue(function () {
                        //     console.log(1);
                        //     this.isMoving = false;
                        // }.bind(this))
                    } else {
                        //左
                        this.swiperItem.eq(this.prev)
                            .stop()
                            .animate({
                                left: -this.swiperItem.width()
                            })
                            .end()
                            .eq(this.index)
                            .css({
                                left: this.swiperItem.width()
                            })
                            .stop()
                            .animate({
                                left: 0
                            })
                        // .queue(function () {
                        //     console.log(1);
                        //     this.isMoving = false;
                        // }.bind(this))

                    }
                    setTimeout(function () {
                        this.isMoving = false;
                    }.bind(this), 400)
                }.bind(this)
            };


            // console.log(this.isMoving);
            if (!this.isMoving) {
                //改变层级
                this.swiperItem.eq(this.prev)
                    .css("zIndex",1)
                    .siblings()
                    .css("zIndex",0)
                    .end()
                    .end()
                    .eq(this.index)
                    .css("zIndex",1);

                //改变小点点状态
                this.dots.eq(this.index)
                    .addClass("chosed")
                    .siblings()
                    .removeClass();

                animationList[event.data.turn]();
            }

        },
        autoMove:function(){
            clearInterval(this.parentContanier.autoTimer);
            this.parentContanier.autoTimer=
                setInterval(function () {
                    var parameter={};
                    parameter.data={};
                    parameter.data.turn="next";
                    this.change_index(parameter);
                    this.animation(parameter);
                }.bind(this),2500);
        }
    }


    $("#banner").swiperBanner(
        ".bannerList",
        {
            leftBtn: "#banner .swiperLeft",
            rightBtn: "#banner .swiperRight",
            dots: "#banner .dotList li"
        }
    );
    // console.log($.fn.swiperBanner);




});