/**
 * Created by lenovo1 on 2018/5/19.
 */
define(["jquery"],function () {
    function LoadGoodMsg() {
        this.product = $("#product");
        this.showList = this.product.find(".showList");
        this.swiperList = this.product.find(".swiperList");
        this.productDes = this.product.find(".productDes");

        this.data = {
            goodName: "时尚925银和镀玫瑰金个性心形女士项链饰品",
            brand: "LINKS OF LONDON",
            url: "img/list/links-of-london_5020.3423SILVER_001.jpg",
            imgNum:6,
            nowPrice:665,
            oldPrice:1130,
            goodColor:"玫瑰金",
            sizeList:"均码,均码",

        }
        this.init();
    }
    LoadGoodMsg.prototype={
        constructor:LoadGoodMsg,
        init:function () {
            this.loadList(this.data);
        },
        loadList:function (data) {
            //1.加载showList
            var showListStr="";
            for(var i=0;i<2*data.imgNum;i++){
                showListStr+=`<div class="showItem${this.judgeShow(i)}">
                        <img src="img/list/links-of-london_5020.3423SILVER_00${(i)%data.imgNum+1}.jpg" alt="">
                        <div class="mask"></div>
                    </div>`;
            }
            // console.log(showListStr);
            $(this.showList).html(showListStr);

            //2.加载swiperList
            var swiperListStr="";
            for(var i=0; i<data.imgNum;i++){
                swiperListStr+=`<div class="swiperItem">
                                    <img src="img/list/links-of-london_5020.3423SILVER_00${i+1}.jpg" alt="">
                                </div>`
            }
            // console.log(swiperListStr);
            $(this.swiperList).html(swiperListStr);

            // 3.加载productDes
            $(this.productDes).find("h2").html(data.goodColor);
            $(this.productDes).find("h3").html(data.brand);
            $(this.productDes).find(".price .nowPrice").html(`￥&nbsp;${data.nowPrice}`);
            $(this.productDes).find(".price .oldPrice").html(`￥&nbsp;${data.oldPrice}`);
            $(this.productDes).find(".price .discount").html(`（${Math.round((data.nowPrice/data.oldPrice)*10)}折）`);
            $(this.productDes).find(".color span").html(data.goodColor);




        },
        judgeShow:function (i) {
            if(i==1){
                return " showing";
            }else{
                return "";
            }
        }
    }
    return LoadGoodMsg;

});