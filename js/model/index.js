/**
 * Created by lenovo1 on 2018/5/10.
 */
;

define(["scrollTrigger","indexSwiper","moreBrands","headMove","headClick","getUser"],function (scroll,swiper,moreBrands,headMove,headClick,GetUser) {
    new headMove("#head .nav .mainNav .item", "#head .nav .mainNav .subList");
    new headClick("#head .mainNav a");
    new GetUser();
    // console.log(swiper);
    // console.log(scroll);
});




