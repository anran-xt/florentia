/**
 * Created by lenovo1 on 2018/5/13.
 */



//4.head移入事件
function headOver(itemList,subSelector) {
    this.itemList=$(itemList);
    this.subList=$(subSelector);
    this.init();
}
headOver.prototype={
    constructor:headOver,
    init:function () {
        this.itemList.on("mouseenter",function (event) {
            var $target=$(event.target);
            while($target.attr("class")!="item"){
                $target=$target.parent();
            }
            var index=$target.index();
            this.subList.eq(index).fadeIn("fast");
            this.subList.eq(index).css("top",$("#head").height());
        }.bind(this));
        this.itemList.on("mouseleave",function (event) {
            var $target=$(event.target);
            while($target.attr("class")!="item"){
                $target=$target.parent();
            }
            var index=$target.index();
            this.subList.eq(index).fadeOut("fast");
            // console.log("out "+index);
        }.bind(this));
    }
}

new headOver("#head .nav .mainNav .item","#head .nav .mainNav .subList");



//3.点击导航栏跳转加载数据
function JumpLoad(selector) {
    this.ele=$(selector);
    this.init();
}
JumpLoad.prototype={
    constructor:JumpLoad,
    init:function () {
        var _this=this;
        this.ele.each(function (index, item) {
            // console.log(item);
            $(item).on("click.jump",function () {
                _this.responseClick.call(this);
            });
        })
    },
    responseClick:function () {
        // console.log($(this).parent().attr("class"));

        if($(this).parent().attr("class")=="item"){
            var bigclass=$(this).text();
            $.cookie("midclass","");
            $.cookie("bigclass",bigclass);
            location.href="detail.html";
            return;
        }
        var midclass=$(this).text();
        var nowEle=$(this);
        while(nowEle.attr("class")!="item"){
            nowEle=nowEle.parent();
            // console.log(nowEle);
        }
        var bigclass=nowEle.children("a");
        bigclass=bigclass.text();
        $.cookie("bigclass",bigclass);
        $.cookie("midclass",midclass);
        location.href="detail.html";



    }
}

new JumpLoad("#head .mainNav a");


