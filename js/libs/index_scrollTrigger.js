/**
 * Created by lenovo1 on 2018/5/18.
 */
//scrollTrigger模块
;
define(["jquery"],function () {
    function ScrollTrigger() {
        this.changeObj = {
            pageHome: $("#pageHome"),
            mask: $("#pageHome .mask"),
            des: $("#pageHome .pageDes"),
            header:$("#head"),
            wrap:$("#head .wrap"),
            logo:$("#head .wrap .leftLogo img"),
            topNav:$("#head .wrap .nav .topNav"),
            mainNav:$("#head .wrap .nav .mainNav li")
        };
        this.arrowDown = $("#pageHome .arrowDown");
        this.max = 280;
        this.now = 0;
        this.proportion = this.now / this.max;
        this.hasChanged=false;
        $(window).scroll(function () {
            this.init();
        }.bind(this));
        this.arrowDown.click(function () {
            if (this.now == this.max) return;
            this.now = this.max;
            this.proportion = this.now / this.max;
            this.change();

            $('html').animate({scrollTop: this.max + "px"});

        }.bind(this))
    }
    ScrollTrigger.prototype = {
        constructor: ScrollTrigger,
        init: function () {
            var now = $(window).scrollTop();
            if (now < 280) {
                this.now = now;
                this.proportion = this.now / this.max;
                this.change();
            }
            if(now>800&&!this.hasChanged){
                this.hasChanged=true;
                console.log(1);
                this.changeObj.wrap.css({
                    "transition":"all .3s ease",
                    "padding":"5px"
                });

                this.changeObj.logo.css({
                    "width":120,
                    "height":66
                });

                this.changeObj.topNav.css({
                    transition:"all .3s ease",
                    transform:"translateY(-100px)"
                });

                this.changeObj.mainNav.css("padding-bottom",6)
            }else if(now<800 &&this.hasChanged){
                this.hasChanged=false;
                console.log(2);
                this.changeObj.wrap.css({
                    "transition":"all .3s ease",
                    "padding":"14px"
                });

                this.changeObj.logo.css({
                    "width":150,
                    "height":82
                });

                this.changeObj.topNav.css({
                    transition:"all .3s ease",
                    transform:"translateY(0)"
                });

                this.changeObj.mainNav.css("padding-bottom",28)

            }
        },
        change: function () {
            // size:       100 90  10
            // background a:    1   0.4   0.6
            // bottom:      50  20  30
            // opacity:     1 0.4
            // 0   280 280
            // 100-x/280*34
            // 1-x/280
            // 40-x/280*20;
            //pageHome背景大小改变范围：100-66
            //mask透明度变化范围：1-0
            //des的bottom变化范围：40-20
            //des的opacity变化范围：1-0.4
            this.changeObj.pageHome.css("background-size", (100 - this.proportion * 10) + "%");
            this.changeObj.mask.css("background", "rgba(0,0,0," + (this.proportion) * 0.8 + ")");

            this.changeObj.des.css("bottom", (50 - this.proportion * 30) + "%");
            this.changeObj.des.css("opacity", (1 - this.proportion * 0.8));
            // console.log(1-this.proportion);
        }

    }
    return new ScrollTrigger();
})