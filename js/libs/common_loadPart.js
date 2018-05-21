/**
 * Created by lenovo1 on 2018/5/18.
 */
;
define(["jquery","headMove","headClick","getUser"],function ($,headMove,headClick,getUser) {
    $.ajax( {
        url: "index.html", //这里是静态页的地址
        type: "GET", //静态页用get方法，否则服务器会抛出405错误
        success: function(data){
            var resultHead = $(data)[9];    //对应head部分
            $("#headWrap").html(resultHead);
            var resultFooter = $(data)[21]; //对应footer部分
            $("#footerWrap").html(resultFooter);

            new headMove("#head .nav .mainNav .item", "#head .nav .mainNav .subList");
            new headClick("#head .mainNav a");
            new getUser();
        }
    });
})
