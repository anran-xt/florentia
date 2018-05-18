//18/5/16 ——xietao

//1.图片移入更换src 事件委托
// function ChangeSrc(fathSelector) {
//     this.fathEle = $(fathSelector);
//     this.init();
// }
// ChangeSrc.prototype = {
//     constructor: ChangeSrc,
//     init: function () {
//         this.fathEle.on("mouseenter", ".item img", {change: "next"}, $.proxy(this.change, this));
//         this.fathEle.on("mouseleave", ".item img", {change: "prev"}, $.proxy(this.change, this));
//     },
//     change: function (event) {
//         var changeDir = event.data.change;
//         // console.log(changeDir);
//         if (changeDir == "next") {
//             var reg = /001.jpg/;
//             event.target.src = event.target.src.replace(reg, "002.jpg");
//         } else if (changeDir == "prev") {
//             var reg = /002.jpg/;
//             event.target.src = event.target.src.replace(reg, "001.jpg");
//         }
//
//
//     }
// }
// new ChangeSrc("#gallery .listWrap");
//
// //2.加载数据模块
// function loadData(classObj, url, wrap) {
//     // console.log(classObj);
//     if (!classObj.bigclass || !url || !wrap) return;
//     this.gfirstclass = classObj.bigclass;
//     if (classObj.midclass) this.gsecondclass = classObj.midclass;
//     this.url = url;
//     this.wrap = $(wrap);
//
//     this.init()
// }
// loadData.prototype = {
//     constructor: loadData,
//     init: function () {
//         this.loading()
//             .then(function (res) {
//                 this.rendering(res);
//
//             }.bind(this))
//     },
//     loading: function () {
//         var parameter = {
//             url: this.url,
//             type: "post",
//             data: {gfirstclass: this.gfirstclass}
//         };
//         if (this.gsecondclass) {
//             parameter.data.gsecondclass = this.gsecondclass;
//         }
//         return $.ajax(parameter);
//     },
//     rendering: function (res) {
//         // console.log(JSON.parse(res));
//         var resArr = JSON.parse(res);   //拿到的全部数据
//         var goodsList = resArr.goodsList; //拿出商品信息数据
//         var libsMsg = resArr.libsmsg;     //拿出附加信息数据
//         // console.log(libsMsg);
//         //1.渲染商品数据
//         this.renderGoods(goodsList);
//
//         //2.渲染附加数据
//         this.renderLibs(libsMsg);
//
//     },
//     renderGoods: function (goodsList) {
//         var strs = "";
//         goodsList.forEach(function (item) {
//             this.judgeSize(item.gsizelist);
//             var str = `<div class="item">
//                 <a href="##"><img src=${item.gsrc} alt="img"></a>
//                 <div class="bottomArea">
//                     <p class="brand">${item.gbrand}</p>
//                     <p class="goodsName">${item.gname}</p>
//                 </div>
//                 <div class="sizeList">
//                     ${this.judgeSize(item.gsizelist)}
//                 </div>
//                 <p class="goodsPrice">
//                     <span class="nowPrice">￥&nbsp;${item.gnowprice}</span>
//                     <span class="oldPrice">￥&nbsp;${item.goldprice}</span>
//                     <span class="discount">${parseInt((item.gnowprice / item.goldprice) * 10)}折</span>
//                 </p>
//                 <i class="hidden" hidden>${item.gid}</i>
//             </div>`;
//
//             strs += str;
//         }.bind(this));
//         this.wrap.html(this.wrap.html() + strs);
//     },
//     renderLibs: function (libsMsg) {
//         // console.log(libsMsg);
//
//         var filterClassify = $("#productFilter .filterClassify ");
//         var filterDetail = $("#productFilter .filterDetail ");
//
//
//         //1.filterClassify
//         //1.1 一级分类
//         var str = "";
//         str += `<span class="filterItem bigClass">${libsMsg.gfirstclass[0]}</span>`;
//         str += `<span class="filterItem detailFilter midClass">`;
//         //1.2.二级分类
//         if (libsMsg.nowClass) {
//             str += `<span class="nowItem">${libsMsg.nowClass}</span>`;
//         } else {
//             str += `<span class="nowItem">全部${libsMsg.gfirstclass[0]}</span>`;
//         }
//         str += `<i class="filterIcon"></i>
//               <span class="moreClass more">`
//         str += this.splicingStr(libsMsg.gsecondclass);
//         str += `</span></span>`;
//
//         //1.3.是否全部显示
//         if (libsMsg.nowClass) {
//             str += `<span class="filterItem showAll">全部${libsMsg.nowClass} </span>`
//         }
//         filterClassify.html(str);
//
//
//         //2.filterDetail
//         var str = "";
//         str += `<span class="filterItem detailFilter color">
//             <span class="nowItem">颜色</span>
//             <i class="filterIcon"></i>
//             <span class="moreColor more">
//             <span class="moreItem">全部颜色</span>
//             ${this.splicingStr(libsMsg.gcolor)}
//             </span>
//             </span>`;
//
//         str += `<span class="filterItem detailFilter size">
//             <span class="nowItem">尺码</span>
//             <i class="filterIcon"></i>
//             <span class="moreSize more">
//                 <span class="moreItem">全部尺码</span>
//                 ${this.splicingStr(libsMsg.gsizelist)}
//                 <!--<span class="moreItem">均码</span>-->
//             </span>
//         </span>`;
//
//         str += `<span class="filterItem detailFilter sex">
//             <span class="nowItem">性别</span>
//             <i class="filterIcon"></i>
//             <span class="moreSex more">
//                 <span class="moreItem">全部性别</span>
//                 ${this.splicingStr(libsMsg.gsex)}
//                 <!--<span class="moreItem">男士</span>-->
//                 <!--<span class="moreItem">女士</span>-->
//             </span>
//         </span>`;
//
//         str += `<div class="ranking">
//             <span class="filterItem rankingDes">排序方式</span>
//             <span class="filterItem detailFilter rankingBy">
//                 <span class="nowItem">默认</span>
//                  <i class="filterIcon"></i>
//                 <span class="moreSex more">
//                 <span class="moreItem">默认</span>
//                 <span class="moreItem descending">价格从高到低</span>
//                 <span class="moreItem ascending">价格从低到高</span>
//             </span>
//             </span>
//         </div>`;
//
//         filterDetail.html(str);
//
//         new toggleShow("click", "#productFilter .detailFilter", "#productFilter .detailFilter .more",);
//
//     },
//     splicingStr: function (arr) {
//         var newarr=[];
//         arr.forEach(function (item) {
//             newarr=newarr.concat(item.split(","));
//         });
//         var newTwoArr=[];
//         for(var i=0;i<newarr.length;i++) {
//             var items=newarr[i];
//             if($.inArray(items,newTwoArr)==-1) {
//                 newTwoArr.push(items);
//             }
//         }
//         arr=newTwoArr;
//
//
//         var str = "";
//         arr.forEach(function (item) {
//             str += `<span class="moreItem">${item}</span>`
//         });
//         return str;
//     },
//     judgeSize: function (str) {
//         var arr = str.split(",");
//
//         var str = "";
//         if (arr.length <= 3) {
//             for (var i = 0; i < arr.length; i++) {
//                 str += `<span>${arr[i]}</span>`;
//             }
//         } else {
//             for (var i = 0; i < 3; i++) {
//                 str += `<span>${arr[i]}</span>`;
//             }
//             str += `<span>更多</span>`;
//         }
//         return str;
//     }
// }
//
//
//
// //3.读取cookie中缓存的bigclass和midclass来向后台发送请求
// function getCookie() {
//     var opt={};
//     if(!$.cookie("bigclass")) return;
//     var bigclass=$.cookie("bigclass");
//
//     opt.bigclass=bigclass;
//     if($.cookie("midclass")){
//         var midclass=$.cookie("midclass");
//         opt.midclass=midclass;
//     }
//     var url="http://127.0.0.1/florentia/data/1_loadGoods.php";
//     var contanier="#gallery .listWrap";
//     new loadData(opt,url,contanier);
// }
// //获取cookie，开始加载数据
// getCookie();
//
//
// //4.通过ajax加载index的head
// function loadPart(url,wrapPart) {
//     $(wrapPart).load(url);
// }
// loadPart("index.html #head","#headWrap");
// loadPart("index.html #footer","#footerWrap");
//
// document.onreadystatechange=function() {
//     if(document.readyState=="complete"){
//         new JumpLoad("#head .mainNav a");
//         new headOver("#head .nav .mainNav .item","#head .nav .mainNav .subList");
//
//     }
// }


define(["loadPart","getCookie","changeSrc"],function (loadPort,getCookie,changeSrc,headMove,headClick) {

    // new headMove("#head .nav .mainNav .item", "#head .nav .mainNav .subList");
    // new headClick("#head .mainNav a");
    console.log(45454);


    
})



