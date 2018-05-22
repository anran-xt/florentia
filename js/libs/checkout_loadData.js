/**
 * Created by lenovo1 on 2018/5/22.
 */
define(["jquery","jqueryCookie"],function () {
    function CheckOutData(){
        if(!$.cookie("shoppingMsg")) return;
        this.data=JSON.parse($.cookie("shoppingMsg"));
        this.leftArea=$("#goodMain .leftArea");
        // console.log(JSON.parse(this.data));
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
                // console.log(this.data[i]);
                var item=this.data[i];
                totalMoney+=parseInt(this.data[i].goodNum*this.data[i].goodDetail.gnowprice);
                totalOriginMoney+=parseInt(this.data[i].goodNum*this.data[i].goodDetail.goldprice);

                // console.log(item.goodDetail.gbrand);
                var str=
                    `<div class="brand">
                    <div class="brandTitle">${item.goodDetail.gbrand}</div>
                    <div class="item">
                        <div class="img"><img src="${item.goodDetail.gsrc}" alt=""></div>
                        <div class="info">
                            <p class="name"> ${item.goodDetail.gname}</p>
                            <p class="option">${item.goodSize}</p>
                            <p class="money">
                                ￥${item.goodDetail.gnowprice}.00
                                <span class="moneyOld">￥${item.goodDetail.goldprice}.00</span>
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
                            <div class="total">￥${item.goodDetail.gnowprice*item.goodNum}.00</div>
                        </div>
                    </div>
                </div>`;
                // console.log(str);
                allStr+=str;
            }
            $(this.leftArea).html(allStr);
            $("#goodMain .rightArea .goodNum span").html(totalNum);
            $("#goodMain .rightArea .total .totalMoney .nowTotal").html("￥"+totalMoney+".00");
            $("#goodMain .rightArea .total .totalMoney .saveMoney").html("（已省￥"+(totalOriginMoney-totalMoney)+".00");



        }
    }
    new CheckOutData();
})