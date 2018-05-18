/**
 * Created by lenovo1 on 2018/5/15.
 */
//1.加载数据
// function LoadGoodMsg() {
//     this.product = $("#product");
//     this.showList = this.product.find(".showList");
//     this.swiperWrap = this.product.find(".swiperWrap");
//     this.productDes = this.product.find(".productDes");
//
//     this.data = {
//         goodName: "时尚925银和镀玫瑰金个性心形女士项链饰品",
//         brand: "LINKS OF LONDON",
//         url: "img/list/links-of-london_5020.3423SILVER_001.jpg",
//
//
//     }
//
// }
// new LoadGoodMsg();
//
// //2.基本的事件
// function PrimaryThing() {
//     this.proSize = $("#product .productDes .proSize .size");
//     this.num = $("#product .productDes .num .nowNum");
//     this.numList = $("#product .productDes .num .numList .numItem");
//     this.init();
// }
// PrimaryThing.prototype = {
//     constructor: PrimaryThing,
//     init: function () {
//         var _this = this;
//         //1.点击改变数量
//         //点击显示=>公共组件
//         new toggleShow("click", "#product .productDes .num", "#product .productDes .numList");
//         $(this.numList).on("click.changeNum", function () {
//             // console.log($(this).html());
//             $(_this.numList).attr("class", "numItem");
//             $(this).attr("class", "numItem chosed");
//             _this.num.html($(this).html());
//         });
//         //2.点击尺寸改变样式
//         $(this.proSize).on("click", function () {
//             $(this).addClass("chosed")
//                 .siblings()
//                 .removeClass("chosed");
//         })
//
//     }
// }
// //添加基础事件模块
// new PrimaryThing();
//
//
// //1.轮播模块
// function ProductSwiper(list, turnWrap, swiperWrap) {
//     this.list = $(list);
//     this.turnWrap = $(turnWrap);
//     this.swiperWrap = $(swiperWrap);
//
//     this.items = this.list.find(".showItem");
//
//     this.turnLeft = this.turnWrap.find(".turnLeft");
//     this.turnRight = this.turnWrap.find(".turnRight");
//
//     this.swiperItems = this.swiperWrap.find(".swiperItem");
//     this.turnTop = this.swiperWrap.find(".arrowUp");
//     this.turnDown = this.swiperWrap.find(".arrowDown");
//
//     this.firstIndex = 0;
//     this.showIndex = 1;
//
//     this.init();
// }
// ProductSwiper.prototype = {
//     constructor: ProductSwiper,
//     init: function () {
//
//         this.turnLeft.on("click.changeIndex", {turn: "left"}, $.proxy(this.changeIndex, this));
//         this.turnLeft.on("click.startMove", {turn: "left"}, $.proxy(this.startMove, this));
//
//         this.turnRight.on("click.changeIndex", {turn: "right"}, $.proxy(this.changeIndex, this));
//         this.turnRight.on("click.startMove", {turn: "right"}, $.proxy(this.startMove, this));
//
//         this.swiperItems.on("mouseenter.changeIndex", {turn: "toIndex"}, $.proxy(this.changeIndex, this));
//         this.swiperItems.on("mouseenter.startMove", {turn: "toIndex"}, $.proxy(this.startMove, this));
//
//
//     },
//     changeIndex: function (event) {
//         this.itemWidth = this.items.eq(0).width();
//
//         if (event.data.turn == "right") {
//             if (this.firstIndex == parseInt(this.items.length / 2)) {
//                 console.log("change");
//                 this.list.css("left", 0);
//                 this.firstIndex = 0;
//             }
//             this.firstIndex++;
//             this.showIndex = this.firstIndex + 1;
//             for (var i = 0; i < this.items.length; i++) {
//                 this.items[i].className = "showItem";
//             }
//             this.items[this.showIndex].className = "showItem showing";
//
//         } else if (event.data.turn == "left") {
//             if (this.firstIndex == 0) {
//                 this.list.css("left", -this.itemWidth * 4);
//                 this.firstIndex = 4;
//             }
//             this.firstIndex--;
//             this.showIndex = this.firstIndex + 1;
//             for (var i = 0; i < this.items.length; i++) {
//                 this.items[i].className = "showItem";
//             }
//             this.items[this.showIndex].className = "showItem showing";
//         } else if (event.data.turn == "toIndex") {
//             while (event.target.className != "swiperItem") {
//                 event.target = event.target.parentNode;
//             }
//
//             var index = $(event.target).index();
//             // console.log(index,this.showIndex);
//             if (index == this.showIndex) return;
//             this.firstIndex = index - 1;
//             this.showIndex = this.firstIndex + 1;
//             for (var i = 0; i < this.items.length; i++) {
//                 this.items[i].className = "showItem";
//             }
//             this.items[this.showIndex].className = "showItem showing";
//             // alert(22);
//         }
//     },
//     startMove: function (event) {
//         // console.log(this.firstIndex);
//         this.list
//             .stop()
//             .animate({left: -this.firstIndex * this.itemWidth});
//     }
// }
// new ProductSwiper("#product .showList", "#product .turnWrap", "#product .swiperWrap");
//
//
// //4.通过ajax加载index的head
// function loadPart(url,wrapPart) {
//     $(wrapPart).load(url);
// }
// loadPart("index.html #head","#headWrap");
// loadPart("index.html #footer","#footerWrap");
//



define(["loadPart","shoppingPrimary"],function () {

})

