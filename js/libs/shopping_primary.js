/**
 * Created by lenovo1 on 2018/5/18.
 */
;
define(["jquery","toggleShow","shoppingLoadMsg","magnifier"],function ($,toggleShow,loadMsg) {
    // new loadMsg();  //加载数据
    //1.基本的事件
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

    //2.放大镜事件



    function Manifier() {
        this.wrapMask=$("#product .turnWrap .wrapMask");
        this.wrap=$("#product .turnWrap .wrap");
        this.bigger=$("#product .turnWrap .bigger");

        this.manifierWidth=$(this.wrap).width();
        this.leftMax=$(this.wrapMask).width()-$(this.wrap).width();
        this.topMax=$(this.wrapMask).height()-$(this.wrap).width();

        this.ratioX=$(this.wrap).width()/$(this.wrapMask).width();
        this.ratioY=$(this.wrap).width()/$(this.wrapMask).height();


        this.init();
    }
    Manifier.prototype={
        constructor:Manifier,
        init:function () {
            this.wrapMask.on("mousemove",$.proxy(this.manifierMove,this));
            this.wrapMask.on("mouseleave",function () {
                $(this.wrap).css("display","none");
                $(this.bigger).css("display","none");
            }.bind(this))
        },
        manifierMove:function (event) {

            $(this.bigger).css("display","block");
            $(this.wrap).css("display","block");


            // console.log(event);
            this.nowShow=$("#product .showList .showing img");
            this.pos={
                x:event.offsetX,
                y:event.offsetY
            }
            this.changePos(this.pos);
        },
        changePos:function (pos) {
            //边界检测
            var posX=pos.x-(this.manifierWidth/2);
            var posY=pos.y-(this.manifierWidth/2);

            if(posX<0){
                posX=0;
            }
            if(posX>this.leftMax){
                posX=this.leftMax;
            }
            if(posY<0){
                posY=0;
            }
            if(posY>this.topMax){
                posY=this.topMax;
            }
            $(this.wrap).css("left",posX);
            $(this.wrap).css("top",posY);


            var biggerSizeX=$(this.wrapMask).width()/this.ratioX;
            var biggerSizeY=$(this.wrapMask).height()/this.ratioY;

            $(this.bigger).css("background-image","url("+$(this.nowShow).attr("src")+")");
            $(this.bigger).css("background-size",biggerSizeX+"px "+biggerSizeY+"px");

            var biggerLeft=posX/this.ratioX;
            var biggerTop=posY/this.ratioY;
            $(this.bigger).css("background-position",-biggerLeft+"px "+(-biggerTop)+"px");





        }
    }
    //放大镜
    new Manifier();

})