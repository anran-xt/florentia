/**
 * Created by lenovo1 on 2018/5/17.
 */
//1.某个事件触发显示或隐藏某些元素  ==>  公用组件
define(["jquery"],function () {
    function toggleShow(type,originEle,targetEle,callbale) {
        if(!type||!originEle||!targetEle) return;
        this.type=type;
        this.originEle=$(originEle);
        this.targetEle=$(targetEle);
        this.init();
    }
    toggleShow.prototype={
        constructor:toggleShow,
        init:function () {
            this.originEle.each(function (index,item) {
                $(item).on(this.type,function () {
                    this.targetEle.each(function (innerindex) {
                        if(innerindex!=index){
                            $(this.targetEle[innerindex]).slideUp("fast");
                        }
                    }.bind(this));
                    $(this.targetEle[index]).slideToggle("fast");
                    return false;
                }.bind(this));
            }.bind(this));

            if(this.type=="click"){
                $("html").on("click",function () {
                    this.targetEle.each(function (index) {
                        $(this.targetEle[index]).slideUp("fast");
                    }.bind(this));
                }.bind(this));

            }

        }
    }
    return toggleShow;
})
