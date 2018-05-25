/**
 * Created by lenovo1 on 2018/5/25.
 */
define(["jquery","jqueryCookie"],function () {
    function UserExit() {
        this.exitBtn=$(".exit");
        console.log(this.exitBtn);
        this.init();
    }
    UserExit.prototype={
        constructor:UserExit,
        init:function () {
            this.exitBtn.on("click",$.proxy(this.exitNow,this));
        },
        exitNow:function () {
            $.cookie("user","");
            $.cookie("shoppingMsg","");
            location.reload();
        }
    }
    console.log("in");
    return UserExit;

})