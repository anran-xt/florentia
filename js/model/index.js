/**
 * Created by lenovo1 on 2018/5/10.
 */
;

define(["scrollTrigger","indexSwiper","moreBrands","headMove","headClick"],function (scroll,swiper,moreBrands,headMove,headClick) {
    new headMove("#head .nav .mainNav .item", "#head .nav .mainNav .subList");
    new headClick("#head .mainNav a");
    // console.log(swiper);
    // console.log(scroll);
});




