/**
 * Created by lenovo1 on 2018/5/22.
 */
;
define(["jquery","checkoutData"],function () {
    function CheckoutPrimary() {
        if(!$("#goodMain .leftArea .brand").length) return;

        this.leftArea=$("#goodMain .leftArea");
        this.rightArea=$("#goodMain .rightArea");

        this.minusPick=$(this.leftArea).find(".pickerMinus")
        this.plusPick=$(this.leftArea).find(".pickerPlus");
        this.pickerSum=$(this.leftArea).find(".pickerSum");

        console.log(this.minusPick,this.plusPick,this.pickerSum);
        this.init();

    }
    CheckoutPrimary.prototype={
        constructor:CheckoutPrimary,
        init:function () {
            this.minusPick.on("click.minus",{mode:"minus"},$.proxy(this.change,this));
            this.plusPick.on("click.plus",{mode:"plus"},$.proxy(this.change,this));
        },
        change:function (event) {
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
            //8.修改该商品总价
            $(itemTotal).html($(unitPrice).html()*$(pickerSum).html());


        }

    }
    new CheckoutPrimary();
})
