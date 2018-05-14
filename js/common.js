/**
 * Created by lenovo1 on 2018/5/13.
 */
//3.更多品牌点击模块
function MoreBrands(parent_selector,btn_selector){

    this.parEle=$(parent_selector);
    this.btnEle=$(btn_selector);
    this.flag=false;
    this.init();
}
MoreBrands.prototype={
    constructor:MoreBrands,
    init:function(){
        this.btnEle.on("click",$.proxy(function(){
            if(!this.flag){
                this.parEle.animate({
                    height:517
                });
                this.flag=true;
                this.btnEle.children()
                    .eq(0)
                    .text("收起")
                    .end()
                    .eq(1)
                    .css({
                        border:"1px solid #000",
                        borderTop:"none",
                        borderRight:"none",
                        marginBottom:"-4px"
                    })

            }else{
                this.parEle.animate({
                    height:340
                });
                this.flag=false;
                this.btnEle.children()
                    .eq(0)
                    .text("查看更多")
                    .end()
                    .eq(1)
                    .css({
                        border:"1px solid #000",
                        borderBottom:"none",
                        borderLeft:"none",
                        marginBottom:"0px"
                    })
            }

        },this));
    }
};
new MoreBrands("#brands .wrap","#brands .bottomMore");


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
