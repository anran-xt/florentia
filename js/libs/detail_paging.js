/**
 * Created by lenovo1 on 2018/5/21.
 */
;
define(["jquery","jqueryCookie"],function ($, cookie) {
    function Paging() {
        this.pageBtn=$("#paging .pageBtn:not(.noMore)");
        this.pageNum=$("#paging .pageNum:not(.nowPage)");
        console.log(this.pageBtn,this.pageNum);

        this.init();
    }
    Paging.prototype={
        constructor:Paging,
        init:function () {
            this.pageBtn.on("click",$.proxy(this.btnChange,this));
            this.pageNum.on("click",$.proxy(this.numChange,this));
        },
        btnChange:function (event) {
            console.log($(event.target).hasClass("prevPage"));
            if($(event.target).hasClass("prevPage")){
                $.cookie("nowPage",$.cookie("nowPage")-1);
                console.log($.cookie("nowPage"));
                location.reload();
            }else if($(event.target).hasClass("nextPage")){
                $.cookie("nowPage",parseInt($.cookie("nowPage"))+1);
                console.log($.cookie("nowPage"));
                location.reload();
            }
        },
        numChange:function (event) {
            // console.log($(event.target).html());
            $.cookie("nowPage",$(event.target).html());
            location.reload();

        }
    }
    return Paging;
})