/**
 * Created by lenovo1 on 2018/5/20.
 */
define(["jquery"],function (changePage) {
    function ChangePage(btnSelector,hideSelector,showSelector){
        this.btnEle=$(btnSelector);
        this.hideEle=$(hideSelector);
        this.showEle=$(showSelector);
        this.init();
    }
    ChangePage.prototype={
        constructor:ChangePage,
        init:function () {
            this.btnEle.on("click",$.proxy(this.changeNow,this));
        },
        changeNow:function () {

            this.hideEle.fadeOut();
            this.showEle.fadeIn();
        }
    };
    new ChangePage(".registerPart .tips a",".registerPart",".loginArea");
    new ChangePage(".loginArea .rightRetister .registerBtn",".loginArea",".registerPart");
})