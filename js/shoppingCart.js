/**
 * Created by lenovo1 on 2018/5/15.
 */
//1.轮播模块
function ProductSwiper(list,turnWrap,swiperWrap){
    this.list=$(list);
    this.turnWrap=$(turnWrap);
    this.swiperWrap=$(swiperWrap);

    this.items=this.list.find(".showItem");

    this.turnLeft=this.turnWrap.find(".turnLeft");
    this.turnRight=this.turnWrap.find(".turnRight");

    this.swiperItems=this.swiperWrap.find(".swiperItem");
    this.turnTop=this.swiperWrap.find(".arrowUp");
    this.turnDown=this.swiperWrap.find(".arrowDown");

    this.firstIndex=0;
    this.showIndex=1;

    this.init();
}
ProductSwiper.prototype={
    constructor:ProductSwiper,
    init:function () {

        this.turnLeft.on("click.changeIndex",{turn:"left"},$.proxy(this.changeIndex,this));
        this.turnLeft.on("click.startMove",{turn:"left"},$.proxy(this.startMove,this));

        this.turnRight.on("click.changeIndex",{turn:"right"},$.proxy(this.changeIndex,this));
        this.turnRight.on("click.startMove",{turn:"right"},$.proxy(this.startMove,this));

        this.swiperItems.on("mouseenter.changeIndex",{turn:"toIndex"},$.proxy(this.changeIndex,this));
        this.swiperItems.on("mouseenter.startMove",{turn:"toIndex"},$.proxy(this.startMove,this));


    },
    changeIndex:function (event) {
        this.itemWidth=this.items.eq(0).width();

        if(event.data.turn=="right"){
            if(this.firstIndex==parseInt(this.items.length/2)){
                console.log("change");
                this.list.css("left",0);
                this.firstIndex=0;
            }
            this.firstIndex++;
            this.showIndex=this.firstIndex+1;
            for(var i=0;i<this.items.length;i++){
                this.items[i].className="showItem";
            }
            this.items[this.showIndex].className="showItem showing";

        }else if(event.data.turn=="left"){
            if(this.firstIndex==0){
                this.list.css("left",-this.itemWidth*4);
                this.firstIndex=4;
            }
            this.firstIndex--;
            this.showIndex=this.firstIndex+1;
            for(var i=0;i<this.items.length;i++){
                this.items[i].className="showItem";
            }
            this.items[this.showIndex].className="showItem showing";
        }else if(event.data.turn=="toIndex"){
            while(event.target.className!="swiperItem"){
                event.target=event.target.parentNode;
            }

            var index=$(event.target).index();
            // console.log(index,this.showIndex);
            if(index ==this.showIndex) return;
            this.firstIndex=index-1;
            this.showIndex=this.firstIndex+1;
            for(var i=0;i<this.items.length;i++){
                this.items[i].className="showItem";
            }
            this.items[this.showIndex].className="showItem showing";
            // alert(22);
        }
    },
    startMove:function (event) {
        // console.log(this.firstIndex);
        this.list
            .stop()
            .animate({left:-this.firstIndex*this.itemWidth});
    }
}
new ProductSwiper("#product .showList","#product .turnWrap","#product .swiperWrap");




//4.通过ajax加载index的head
function loadPart(url,wrapPart) {
    $(wrapPart).load(url);
}
new Promise(function (resolve) {
    loadPart("index.html #head","#headWrap");
    loadPart("index.html #footer","#footerWrap");
    resolve("加载头尾完毕");
}).then(function (res) {
    console.log(res);
    document.write(`<script src="common.js"></script>`);
});


