/**
 * Created by lenovo1 on 2018/5/22.
 */
;
define(["jquery","checkoutData"],function () {
    function CheckoutPrimary() {
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
            this.pickerSum.on("click.plus",{mode:"plus"},$.proxy(this.change,this));
        },
        change:function (event) {
                        
        }

    }
    new CheckoutPrimary();
})
