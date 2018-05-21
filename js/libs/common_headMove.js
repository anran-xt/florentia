/**
 * Created by lenovo1 on 2018/5/18.
 */
;
define(["jquery"], function () {
    function headOver(itemList, subSelector) {
        this.itemList = $(itemList);
        this.subList = $(subSelector);
        this.init();
    }
    headOver.prototype = {
        constructor: headOver,
        init: function () {
            this.itemList.on("mouseenter", function (event) {
                var $target = $(event.target);
                while ($target.attr("class") != "item") {
                    $target = $target.parent();
                }
                var index = $target.index();
                this.subList.eq(index).fadeIn("fast");
                this.subList.eq(index).css("top", $("#head").height());
            }.bind(this));
            this.itemList.on("mouseleave", function (event) {
                var $target = $(event.target);
                while ($target.attr("class") != "item") {
                    $target = $target.parent();
                }
                var index = $target.index();
                this.subList.eq(index).fadeOut("fast");
                // console.log("out "+index);
            }.bind(this));
        }
    }

    return headOver;
    // ("#head .nav .mainNav .item", "#head .nav .mainNav .subList")

})