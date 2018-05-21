/**
 * Created by lenovo1 on 2018/5/18.
 */
;
define(["jquery","jqueryCookie"],function ($) {
    function ChangeSrc(fathSelector) {
        this.fathEle = $(fathSelector);
        this.init();
    }
    ChangeSrc.prototype = {
        constructor: ChangeSrc,
        init: function () {
            this.fathEle.on("mouseenter", ".item img", {change: "next"}, $.proxy(this.change, this));
            this.fathEle.on("mouseleave", ".item img", {change: "prev"}, $.proxy(this.change, this));

            this.fathEle.on("click", ".item img", $.proxy(this.hrefChange, this));
        },
        change: function (event) {
            var changeDir = event.data.change;
            // console.log(changeDir);
            if (changeDir == "next") {
                var reg = /001.jpg/i;
                event.target.src = event.target.src.replace(reg, "002.jpg");
            } else if (changeDir == "prev") {
                var reg = /002.jpg/i;
                event.target.src = event.target.src.replace(reg, "001.jpg");
            }
        },
        hrefChange:function (event) {
            // console.log($(event.target).parents(".item"));
            var parentEleIndex=$(event.target).parents(".item").index();
            var goodsMsg=document.goodsList[parentEleIndex];
            console.log(goodsMsg);
            var  goodUrl=goodsMsg.gsrc;
            var  goodName=goodsMsg.gname;
            var  goodBrand=goodsMsg.gbrand;
            var  goodImgNum=goodsMsg.gsrcnum;
            var  goodColor=goodsMsg.gcolor;
            var  goodNowPrice=goodsMsg.gnowprice;
            var  goodOldPrice=goodsMsg.goldprice;
            var goodSizeList=goodsMsg.gsizelist;

            var data={};
            data.goodUrl=goodUrl;
            data.goodName=goodName;
            data.goodBrand=goodBrand;
            data.goodImgNum=parseInt(goodImgNum);
            data.goodColor=goodColor;
            data.goodNowPrice=parseInt(goodNowPrice);
            data.goodOldPrice=parseInt(goodOldPrice);
            data.goodSizeList=goodSizeList;
            console.log(data);



            $.cookie("data",JSON.stringify(data));

            location.href="shoppingCart.html";







        }
    }

    new ChangeSrc("#gallery .listWrap");

})