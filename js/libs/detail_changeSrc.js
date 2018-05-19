/**
 * Created by lenovo1 on 2018/5/18.
 */
define(["jquery"],function ($) {
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
                var reg = /001.jpg/i;
                event.target.src = event.target.src.replace(reg, "002.jpg");
            } else if (changeDir == "prev") {
                var reg = /002.jpg/i;
                event.target.src = event.target.src.replace(reg, "001.jpg");
            }
        }
    }

    new ChangeSrc("#gallery .listWrap");

})