/**
 * Created by lenovo1 on 2018/5/18.
 */
define(["jquery","jqueryCookie","loadData"],function ($,cookie,loadData) {
    function getCookie() {
        var opt={};
        if(!$.cookie("bigclass")) return;
        var bigclass=$.cookie("bigclass");

        opt.bigclass=bigclass;
        if($.cookie("midclass")){
            var midclass=$.cookie("midclass");
            opt.midclass=midclass;
        }
        var url="http://127.0.0.1/florentia/data/1_loadGoods.php";
        var contanier="#gallery .listWrap";
        new loadData(opt,url,contanier);
    }

    getCookie();


})