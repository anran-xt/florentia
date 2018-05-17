//18/5/16 ——xietao

//1.图片移入更换src 事件委托
function ChangeSrc(fathSelector) {
    this.fathEle = $(fathSelector);
    this.init();
}
ChangeSrc.prototype = {
    constructor: ChangeSrc,
    init: function () {
        this.fathEle.on("mouseenter", ".item img", {change: "next"}, $.proxy(this.change, this));
        this.fathEle.on("mouseleave", ".item img", {change: "prev"}, $.proxy(this.change, this));
    },
    change: function (event) {
        var changeDir = event.data.change;
        // console.log(changeDir);
        if (changeDir == "next") {
            var reg = /001/;
            event.target.src = event.target.src.replace(reg, "002");
        } else if (changeDir == "prev") {
            var reg = /002/;
            event.target.src = event.target.src.replace(reg, "001");
        }


    }
}
new ChangeSrc("#gallery .listWrap");

//2.加载数据
function loadData(gfirstclass, gsecondclass, url,wrap) {
    if (!gfirstclass || !url||!wrap) return;
    this.gfirstclass = gfirstclass;
    if (gsecondclass) this.gsecondclass = gsecondclass;
    this.url = url;
    this.wrap=$(wrap);
    this.init()

}
loadData.prototype = {
    constructor: loadData,
    init: function () {
        this.loading()
            .then(function (res) {
                this.rendering(res);

            }.bind(this))
    },
    loading: function () {
        var parameter = {
            url: this.url,
            type: "post",
            data: {gfirstclass: this.gfirstclass}
        }
        if (this.gsecondclass) {
            parameter.data.gsecondclass = this.gsecondclass;
        }
        // console.log($.ajax(parameter));
        return $.ajax(parameter);
    },
    rendering: function (res) {
        // console.log(JSON.parse(res));
        var resArr = JSON.parse(res);
        console.log(resArr);
        var strs="";
        resArr.forEach(function (item) {
            var str = `<div class="item">
                <a href="##"><img src=${item.gsrc} alt="img"></a>
                <div class="bottomArea">
                    <p class="brand">${item.gbrand}</p>
                    <p class="goodsName">${item.gname}</p>
                </div>
                <div class="sizeList">
                    <span>${item.gsizelist}</span>
                </div>
                <p class="goodsPrice">
                    <span class="nowPrice">￥&nbsp;${item.gnowprice}</span>
                    <span class="oldPrice">￥&nbsp;${item.goldprice}</span>
                    <span class="discount">${parseInt((item.gnowprice/item.goldprice)*10)}折</span>
                </p>
                <i class="hidden" hidden>${item.gid}</i>
            </div>`;

            strs+=str;
        }.bind(this));
        this.wrap.html(this.wrap.html()+strs);


    }
}
new loadData("首饰", "手链", "http://127.0.0.1/florentia/data/1_loadGoods.php","#gallery .listWrap");
