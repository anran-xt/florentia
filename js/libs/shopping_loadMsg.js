/**
 * Created by lenovo1 on 2018/5/19.
 */
define(["jquery","jqueryCookie"],function () {
    function LoadGoodMsg() {
        this.product = $("#product");
        this.showList = this.product.find(".showList");
        this.swiperList = this.product.find(".swiperList");
        this.productDes = this.product.find(".productDes");

        this.layoutCenter = $("#layoutCenter");


        var str=$.cookie("data");
        // console.log(JSON.parse(str));
        if(!str)  return;
        this.data=JSON.parse(str);

        // this.data = {
        //     goodName: "时尚925银和镀玫瑰金个性心形女士项链饰品",
        //     goodBrand: "LINKS OF LONDON",
        //     goodUrl: "img/list/links-of-london_5020.3423SILVER_001.jpg",
        //     goodImgNum:6,
        //     goodNowPrice:665,
        //     goodOldPrice:1130,
        //     goodColor:"玫瑰金",
        //     goodSizeList:"均码,均码,均码,均码",
        // };
        this.init();
    }
    LoadGoodMsg.prototype={
        constructor:LoadGoodMsg,
        init:function () {
            this.loadList(this.data);
        },
        loadList:function (data) {
            // console.log(data);
            //1.加载showList
            var showListStr="";
            var reg=/\.(jpg|png)/i;
            var imgSrc=data.goodUrl.slice(0,data.goodUrl.indexOf(reg)-4);
            //1.在listShow处加载两倍数量图片
            if(data.goodImgNum<4){
                var timesNum=6-data.goodImgNum;
            }else{

            }
            var timesNum=2;
            for(var i=0;i<timesNum*data.goodImgNum;i++){
                showListStr+=`<div class="showItem${this.judgeShow(i)}">
                        <img src="${imgSrc}${(i)%data.goodImgNum+1}.jpg" alt="">
                        <div class="mask"></div>
                    </div>`;
            }
            $(this.showList).html(showListStr);

            //2.加载swiperList图片
            var swiperListStr="";
            for(var i=0; i<data.goodImgNum;i++){
                swiperListStr+=`<div class="swiperItem">
                                    <img src="${imgSrc}${i+1}.jpg" alt="">
                                </div>`
            }
            $(this.swiperList).html(swiperListStr);

            // 3.加载productDes
            // console.log(data);
            $(this.productDes).find("h2").html(data.goodName);
            $(this.productDes).find("h2").attr("goodid",data.goodid);
            $(this.productDes).find("h3").html(data.goodBrand);
            $(this.productDes).find(".price .nowPrice").html(`￥&nbsp;<span>${data.goodNowPrice}</span>`);
            $(this.productDes).find(".price .oldPrice").html(`￥&nbsp;<span>${data.goodOldPrice}</span>`);
            $(this.productDes).find(".price .discount").html(`（${Math.round((data.goodNowPrice/data.goodOldPrice)*10)}折）`);
            $(this.productDes).find(".color span").html(data.goodColor);

            $(this.productDes).find(".proSize").html(this.getSize(data.goodSizeList));

            //4.加载layoutCenter图片
            var str="";
            for(var i=0;i<data.goodImgNum;i++){
                str+=`<img src="${imgSrc}${i+1}.jpg" alt="" class="middleImg">`;
            }
            $(this.layoutCenter).html(str);




        },
        judgeShow:function (i) {
            if(i==1){
                return " showing";
            }else{
                return "";
            }
        },
        getSize:function (sizeList) {
            var sizeArr=sizeList.split(",");
            var str="<span>尺寸</span>";
            for(var i=0;i<sizeArr.length;i++){
                str+="<div class='size'>"+sizeArr[i]+"</div> ";
            }
            return str;
        }

    }
    return new LoadGoodMsg();

});