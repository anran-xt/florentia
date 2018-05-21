/**
 * Created by lenovo1 on 2018/5/18.
 */
;
define(["jquery","jqueryCookie"],function () {
    //3.点击导航栏跳转加载数据模块
    function JumpLoad(selector) {
        this.ele=$(selector);
        this.init();
        // console.log(this.ele);
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
                $.cookie("nowPage",1);
                location.href="detail.html";
                return;
            }
            var midclass=$(this).text();
            var nowEle=$(this);
            while(nowEle.attr("class")!="item"){
                nowEle=nowEle.parent();
            }
            var bigclass=nowEle.children("a");
            bigclass=bigclass.text();
            $.cookie("bigclass",bigclass);
            $.cookie("midclass",midclass);
            $.cookie("nowPage",1);
            location.href="detail.html";
        }
    }

    return JumpLoad;
    // ("#head .mainNav a")
})