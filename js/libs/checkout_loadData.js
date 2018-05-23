/**
 * Created by lenovo1 on 2018/5/22.
 */
define(["jquery","jqueryCookie"],function () {
    function CheckOutData(){
        // console.log($.cookie("shoppingMsg")=="null");
        if(!$.cookie("shoppingMsg")||$.cookie("shoppingMsg")=="[]") return;
        console.log(JSON.parse($.cookie("shoppingMsg")));
        this.data=JSON.parse($.cookie("shoppingMsg"));
        this.leftArea=$("#goodMain .leftArea");
        this.init();
    }
    CheckOutData.prototype={
        constructor:CheckOutData,
        init:function () {
            var allStr="";
            var totalMoney=0;
            var totalOriginMoney=0;
            var totalNum=this.data.length;
            for(var i=0;i<this.data.length;i++){
                console.log(this.data[i]);
                var item=this.data[i];
                totalMoney+=parseInt(this.data[i].goodNum*this.data[i].goodDetail.gnowprice);
                totalOriginMoney+=parseInt(this.data[i].goodNum*this.data[i].goodDetail.goldprice);

                // console.log(item.goodDetail.gbrand);
                var str=
                    `<div class="brand"> 
                    <i class="hidden" hidden>${item.goodId}</i>
                    <div class="brandTitle">${item.goodDetail.gbrand}</div>
                    <div class="item">
                        <div class="img"><img src="${item.goodDetail.gsrc}" alt=""></div>
                        <div class="info">
                            <p class="name"> ${item.goodDetail.gname}</p>
                            <p class="option">${item.goodSize}</p>
                            <p class="money">
                                ￥<span class="nowMoney">${item.goodDetail.gnowprice}</span>.00
                                ￥<span class="moneyOld">${item.goodDetail.goldprice}</span>.00
                            </p>
                        </div>
                        <div class="numpicker">
                            <span class="pickerMinus picker">-</span>
                            <span class="pickerSum">${item.goodNum}</span>
                            <span class="pickerPlus picker">+</span>
                        </div>
                        <div class="extra">
                            <div class="action">
                                <span class="">移至收藏夹</span>
                                <i></i>
                                <span class="deleteItem">删除</span>
                            </div>
                            <div class="total">￥<span>${item.goodDetail.gnowprice*item.goodNum}</span>.00</div>
                        </div>
                    </div>
                </div>`;
                // console.log(str);
                allStr+=str;
            }
            $(this.leftArea).html(allStr);
            $("#goodMain .rightArea .goodNum span").html(totalNum);
            $("#goodMain .rightArea .total .totalMoney .nowTotal").html("￥"+totalMoney+".00");
            $("#goodMain .rightArea .subTotal span").html("￥"+totalMoney+".00");
            $("#goodMain .rightArea .total .totalMoney .saveMoney").html("（已省￥"+(totalOriginMoney-totalMoney)+".00");



        }
    }
    new CheckOutData();
})