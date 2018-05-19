/**
 * Created by lenovo1 on 2018/5/18.
 */
define(["jquery","toggleShow","shoppingLoadMsg"],function ($,toggleShow,loadMsg) {
    new loadMsg();  //加载数据
    //2.基本的事件
    function PrimaryThing() {
        this.proSize = $("#product .productDes .proSize .size");
        this.num = $("#product .productDes .num .nowNum");
        this.numList = $("#product .productDes .num .numList .numItem");
        this.init();
    }

    PrimaryThing.prototype = {
        constructor: PrimaryThing,
        init: function () {
            var _this = this;
            //1.点击改变数量
            //点击显示=>公共组件
            new toggleShow("click", "#product .productDes .num", "#product .productDes .numList");
            $(this.numList).on("click.changeNum", function () {
                // console.log($(this).html());
                $(_this.numList).attr("class", "numItem");
                $(this).attr("class", "numItem chosed");
                _this.num.html($(this).html());
            });
            //2.点击尺寸改变样式
            $(this.proSize).on("click", function () {
                $(this).addClass("chosed")
                    .siblings()
                    .removeClass("chosed");
            })

        }
    }
    new PrimaryThing();

})