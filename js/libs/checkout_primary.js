/**
 * Created by lenovo1 on 2018/5/22.
 */
;
define(["jquery","jqueryCookie","checkoutData"],function () {
    function CheckoutPrimary() {
        if(!$("#goodMain .leftArea .brand").length) return;

        this.leftArea=$("#goodMain .leftArea");
        this.rightArea=$("#goodMain .rightArea");

        this.minusPick=$(this.leftArea).find(".pickerMinus")
        this.plusPick=$(this.leftArea).find(".pickerPlus");
        this.pickerSum=$(this.leftArea).find(".pickerSum");

        this.deleteItem=$(this.leftArea).find(".deleteItem");

        // console.log(this.minusPick,this.plusPick,this.pickerSum);
        this.init();

    }
    CheckoutPrimary.prototype={
        constructor:CheckoutPrimary,
        init:function () {
            //1.改变商品数量
            this.minusPick.on("click.minus",{mode:"minus"},$.proxy(this.changeNum,this));
            this.plusPick.on("click.plus",{mode:"plus"},$.proxy(this.changeNum,this));

            //2.删除商品
            this.deleteItem.on("click.delete",$.proxy(this.deleteGood,this));
        },
        changeNum:function (event) {
            //1.增减方式
            var mode=event.data.mode;
            //2.事件源父对象
            var originParent=$(event.target).parents(".item");
            //3.事件源
            var originTarget=event.target;
            //4.商品数
            var pickerSum=$(originParent).find(".pickerSum");
            //5.单价
            var unitPrice=$(originParent).find(".info .money span");
            //6.该商品总价
            var itemTotal=$(originParent).find(".extra .total span");


            //7.修改商品数量
            if(mode=="minus"){
                if($(pickerSum).html()<=1){
                    return;
                }else{
                    $(pickerSum).html(parseInt($(pickerSum).html()-1));
                }
            }else if(mode=="plus"){
                $(pickerSum).html(parseInt(parseInt($(pickerSum).html())+1));
            }
            //修改该商品总价
            $(itemTotal).html($(unitPrice).html()*$(pickerSum).html());

            this.changeTotal();


        },
        changeTotal:function () {
            //8.计算改变后的各种结果
            var totalMoney=0;
            var totalOriginMoney=0;
            var itemList=$(this.leftArea).find(".item");
            var totalNum=itemList.length;

            var nowMoney=$(this.leftArea).find(".info .money  .nowMoney");
            var oldMoney=$(this.leftArea).find(".info .money .moneyOld");
            var itemNum=$(this.leftArea).find(".pickerSum");

            var goodNum=$(this.rightArea).find(".goodNum span");
            var subCount=$(this.rightArea).find(".subTotal span");
            var total=$(this.rightArea).find(".total .nowTotal");
            var saveTotal=$(this.rightArea).find(".total .saveMoney");

            // console.log(nowMoney,oldMoney,itemNum,goodNum,subCount,total,saveTotal);

            for(var i=0;i<itemList.length;i++){
                totalMoney+=($(nowMoney[i]).html()*$(itemNum[i]).html());
                totalOriginMoney+=$(oldMoney[i]).html()*$(itemNum[i]).html();
            }
            // console.log(totalMoney,totalOriginMoney);
            $(goodNum).html(totalNum);
            $(subCount).html("￥"+totalMoney+".00");
            $(total).html("￥"+totalMoney+".00");
            $(saveTotal).html("(已省￥"+(totalOriginMoney-totalMoney)+".00)");
        },
        deleteGood:function (event) {
            // console.log("delete");

            //1.事件源父对象brand
            var originParent=$(event.target).parents(".brand");
            //2.找到该商品的id
            var goodId=$(originParent).find(".hidden").html();
            // console.log(goodId);
            var shoppingMsg=JSON.parse($.cookie("shoppingMsg"));
            // console.log(shoppingMsg);
            //3.删除对应id的商品缓存
            for(var i=0;i<shoppingMsg.length;i++){
                var item=shoppingMsg[i];
                if(goodId==item.goodId){
                    shoppingMsg.splice(i,1);
                    // if(shoppingMsg.length==0) shoppingMsg=null;
                    break;
                }
            }
            // console.log(shoppingMsg);
            var goodNum=shoppingMsg.length; //记录商品数量
            //4.将剩余的商品再次加入缓存
            // if(shoppingMsg.length==0) shoppingMsg=null;
            $.cookie("shoppingMsg",JSON.stringify(shoppingMsg));
            //5.删除对应id的商品
            $(originParent).remove();
            //6.改变购物车的总体情况
            this.changeTotal();
            //7.改变购物车小图标
            var carIcon=$("#head .rightNav .cart");
            // console.log(goodNum);
            if(goodNum==0){
                console.log($(carIcon).find("a"));
                $(carIcon).find("a").css("background-image","url(img/icon-cart.png)");
                $(carIcon).find("i").remove();
            }else{
                $(carIcon).find("i").html(goodNum);
            }



            //8.如果当前状态为用户登陆状态，则连接数据库，发送请求，删除该用户的商品信息
            var user=$("#uname");
            console.log(user);
            if(user){
                var goodMsg=$.cookie("shoppingMsg");
                console.log(JSON.parse(goodMsg));
                $.ajax({
                    url:"data/05_deleteGood.php",
                    data:"uname="+$(user).html()+"&shoppingMsg="+goodMsg
                }).then(function (res) {
                    console.log((res));
                })

            }




        }

    }
    new CheckoutPrimary();
})
