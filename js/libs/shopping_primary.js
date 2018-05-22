/**
 * Created by lenovo1 on 2018/5/18.
 */
;
define(["jquery","jqueryCookie","toggleShow","loadPart","shoppingLoadMsg"],function ($,cookie,toggleShow) {
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
        this.ratioY=$(this.wrap).height()/$(this.wrapMask).height();

        // console.log($(this.wrap).width()/this.ratioX);


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

    
    //3.加入购物车
    function AddShoppingCar() {
        this.addSucc=$("#product .productDes .addSucc");
        this.addArea=$("#product .productDes .add");
        this.sizeList=$("#product .productDes .proSize");
        this.goodNum=$("#product .productDes .num");
        this.goodId=$("#product .productDes h2");
        this.init();
    }
    AddShoppingCar.prototype={
        constructor:AddShoppingCar,
        init:function () {
            $(this.addArea).find(".addNow").on("click",$.proxy(this.add,this));
        },
        add:function () {
            this.getGood();
        },
        getGood:function () {
            var chosedSize=$(this.sizeList).find(".chosed");
            if(chosedSize.length!=0){
                var goodId=$(this.goodId).attr("goodid");
                var goodSize=$(chosedSize).text();
                var goodNum=$(this.goodNum).find(".nowNum").text();
                var gbrand=$("#product .productDes h3").html();
                var gname=$("#product .productDes h2").html();
                var gnowprice=$("#product .productDes .price .nowPrice span").html();
                var goldprice=$("#product .productDes .price .oldPrice span").html();
                var gsrc=$("#product .showList:first-of-type .showItem img").attr("src");


                var shoppingCart={
                    goodId:goodId,
                    goodSize:goodSize,
                    goodNum:goodNum,
                    goodDetail:{
                        gbrand:gbrand,
                        gname:gname,
                        gnowprice:gnowprice,
                        goldprice:goldprice,
                        gsrc:gsrc
                    }
                };
                // console.log(shoppingCart);

                var shoppingMsg=$.cookie("shoppingMsg");

                // console.log(shoppingMsg);
                if(shoppingMsg){
                    shoppingMsg=JSON.parse(shoppingMsg);

                    for(var i=0;i<shoppingMsg.length;i++){
                        if(shoppingMsg[i].goodId==shoppingCart.goodId){
                            this.addSucc.html("早先已加入购物车");
                            $(this.addSucc).fadeIn("fast",function () {
                                setTimeout(function () {
                                    $(this.addSucc).fadeOut("fast");
                                }.bind(this),1000)
                            }.bind(this));
                            //显示立即结算
                            this.showSettle();
                            return;
                        }
                    }
                    shoppingMsg.push(shoppingCart);
                    shoppingMsg=JSON.stringify(shoppingMsg);

                    this.addSucc.html("已加入购物车");
                    $(this.addSucc).fadeIn("fast",function () {
                        setTimeout(function () {
                            $(this.addSucc).fadeOut("fast");
                        }.bind(this),1000)
                    }.bind(this));
                    //显示立即结算
                    this.showSettle();

                    //根据用户插入购物车信息
                    console.log(shoppingMsg);
                    this.addShop(shoppingMsg);

                    $.cookie("shoppingMsg",shoppingMsg);
                    // console.log($.cookie("shoppingMsg"));

                }else{
                    shoppingMsg=[];
                    shoppingMsg.push(shoppingCart);
                    shoppingMsg=JSON.stringify(shoppingMsg);



                    this.addSucc.html("已加入购物车");
                    $(this.addSucc).fadeIn("fast",function () {
                        setTimeout(function () {
                            $(this.addSucc).fadeOut("fast");
                        }.bind(this),1000)
                    }.bind(this));
                    //显示立即结算
                    this.showSettle();

                    //根据用户插入购物车信息
                    console.log(shoppingMsg);
                    this.addShop(shoppingMsg);

                    //加入缓存
                    $.cookie("shoppingMsg",shoppingMsg);


                }

                var shopCookie=$.cookie("shoppingMsg");
                var shopMsg=JSON.parse(shopCookie);
                // console.log(shopMsg.length);
                //改变购物车小图标
                this.shoppingIcon=$("#head .rightNav .cart a");
                // console.log(this.shoppingIcon);
                $(this.shoppingIcon).css("background","url(img/icon-cart-active.png) no-repeat center");
                $(this.shoppingIcon).css("background-size","14px 14px");
                $(this.shoppingIcon).parent().find("i").html(shopMsg.length);
            }
        },
        showSettle:function (msg) {
            //显示立即结算
            $(this.addArea).find(".addNow").animate({
                width:"155"
            },500);
            $(this.addArea).find(".settlement").animate({
                width:"155"
            },500);
        },
        addShop:function (msg) {
            var uname=$("#uname");
            console.log($(uname).html());
            if(!$(uname).html()) return;
            var opt={
                url:"data/03_addShopGood.php",
                type:"POST",
            }
            $.ajax({
                url:"data/03_addShopGood.php",
                type:"POST",
                data:`goodMsg=${msg}&uname=${$(uname).html()}`
            }).then(function (res) {
                console.log(res);

            })
        }
    }
    new AddShoppingCar();

})