/**
 * Created by lenovo1 on 2018/5/18.
 */
define(["jquery"], function () {
    // //3.更多品牌点击模块
    function MoreBrands(parent_selector, btn_selector) {

        this.parEle = $(parent_selector);
        this.btnEle = $(btn_selector);
        this.flag = false;
        this.init();
    }

    MoreBrands.prototype = {
        constructor: MoreBrands,
        init: function () {
            this.btnEle.on("click", $.proxy(function () {
                if (!this.flag) {
                    this.parEle.animate({
                        height: 517
                    });
                    this.flag = true;
                    this.btnEle.children()
                        .eq(0)
                        .text("收起")
                        .end()
                        .eq(1)
                        .css({
                            border: "1px solid #000",
                            borderTop: "none",
                            borderRight: "none",
                            marginBottom: "-4px"
                        })

                } else {
                    this.parEle.animate({
                        height: 340
                    });
                    this.flag = false;
                    this.btnEle.children()
                        .eq(0)
                        .text("查看更多")
                        .end()
                        .eq(1)
                        .css({
                            border: "1px solid #000",
                            borderBottom: "none",
                            borderLeft: "none",
                            marginBottom: "0px"
                        })
                }

            }, this));
        }
    };
    new MoreBrands("#brands .wrap", "#brands .bottomMore");
})