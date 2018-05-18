#18/5/16 xietao

#1.删除数据库
drop database if exists florentia;
#2.创建数据库,设置字符集
create database florentia charset=utf8;
#3.使用数据库
use florentia;
#4.创建商品信息表
#主键 #图片路径 #图片个数 #品牌名 #商品名 #活动价 #原价 #性别 #尺寸表 #颜色 #一级分类 #二级分类 #三级分类 #是否新品
create table goodsTable(
  gid int auto_increment PRIMARY KEY ,
  gsrc varchar(128) not null,
  gsrcnum int not NULL ,
  gbrand varchar(32) not null,
  gname varchar(62) not null,
  gnowprice int not null,
  goldprice int not null,
  gsex varchar(8) not null,
  gsizelist varchar(16) not null,
  gcolor varchar(8) not null,
  gfirstclass varchar(16) not null,
  gsecondclass varchar(16) not null,
  gthirdclass varchar(16) default null,
  gisnew  tinyint default 0
);

-- 项链
INSERT into goodsTable values
(default,"img/list/versace_DG16278-DJMTD00O_001.jpg",2,"VERSACE","范思哲金色男士项链",1860,3100,"男士","均码","金色","首饰","项链",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DG1F907-DJMTD00PO_001.jpg",3,"VERSACE","范思哲银色女士项链",1860,3100,"女士","均码","银色","首饰","项链",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DG1F904-DJMXKW3P_001.jpg",3,"VERSACE","范思哲蓝色女士项链",1800,3600,"女士","均码","蓝色","首饰","项链",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DG1F483-DJMTDGN_001.jpg",3,"VERSACE","范思哲黑色女士项链",1380,2300,"女士","均码","黑色","首饰","项链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5024.1261SILVER_001.jpg",5,"LINKS OF LONDON","时尚S925银和镀玫瑰金时个性心形女士项链饰品",740,1480,"女士","均码","玫瑰金","首饰","项链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5024.1355SILVER_001.jpg",6,"LINKS OF LONDON","时尚S925银和镀18玫瑰金女士项链饰品",890,1780,"女士","均码","银色","首饰","项链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5020.2599SILVER_001.jpg",6,"LINKS OF LONDON","女士925银长款项链饰品",1610,3220,"女士","均码","银色","首饰","项链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5020.3424SILVER_001.jpg",6,"LINKS OF LONDON","女士925银长款项链饰品",770,1540,"女士","均码","玫瑰金","首饰","项链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5020.2719SILVER_001.jpg",6,"LINKS OF LONDON","时尚925银个性时尚女士项链饰品",2055,4100,"女士","均码","玫瑰金","首饰","项链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5020.3423SILVER_001.jpg",6,"LINKS OF LONDON","时尚925银和镀玫瑰金个性心形女士项链饰品",665,1330,"女士","均码","银色","首饰","项链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5020.3422SILVER_001.jpg",6,"LINKS OF LONDON","时尚925银和镀玫瑰金个性心形女士项链饰品",940,1880,"女士","均码","玫瑰金","首饰","项链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5020.3421SILVER_001.jpg",6,"LINKS OF LONDON","时尚925银个性时尚女士项链饰品",940,1880,"女士","均码","玫瑰金","首饰","项链",default,default);


-- #上衣
INSERT into goodsTable values
(default,"img/list/lacoste_TH4775-WAV_001.jpg",2,"Lacoste","男式T恤",234,390,"男士","3,4,5,6","WAV","服饰","上装",default,default);
INSERT into goodsTable values
(default,"img/list/lacoste_TH3881-9JU_001.jpg",2,"Lacoste","男式T恤",474,790,"男士","3,4,5,6","9JU","服饰","上装",default,default);
INSERT into goodsTable values
(default,"img/list/brooks-brothers_BB100098529I1_001.jpg",3,"BROOKS BROTHERS","蓝色男士外套",234,390,"男士","M","蓝色","服饰","上装",default,default);
INSERT into goodsTable values
(default,"img/list/lacoste_PH2692K1ZU7_001.jpg",2,"Lacoste","男式T恤",654,1090,"男士","3,4,5,6","ZU7","服饰","上装",default,default);
INSERT into goodsTable values
(default,"img/list/lacoste_TH2719K1ZTY_001.jpg",2,"Lacoste","男式T恤",294,490,"男士","3,4,5,6","ZTY","服饰","上装",default,default);

-- 下装
INSERT into goodsTable values
(default,"img/list/lacoste_FH7053-166_001.jpg",2,"Lacoste","男式短裤",495,990,"男士","38,40,42,44,46","黑色","服饰","下装",default,default);
INSERT into goodsTable values
(default,"img/list/guess_MI1D9050MBL_001.jpg",4,"GUESS","靛蓝色男士牛仔裤",559,699,"男士","175","靛蓝色","服饰","下装",default,default);
INSERT into goodsTable values
(default,"img/list/guess_Q81A05R2RX0MDYI_001.jpg",4,"GUESS","浅蓝色女士牛仔裤",489,699,"女士","155","浅蓝色","服饰","下装",default,default);
INSERT into goodsTable values
(default,"img/list/brooks-brothers_BB10004843899_001.jpg",3,"BROOKS BROTHERS","蓝色男士休闲修身版裤子",763,1090,"男士","3432","蓝色","服饰","下装",default,default);


-- 连衣裙
INSERT into goodsTable values
(default,"img/list/lacoste_EF8078-HRT_001.jpg",2,"Lacoste","女式连衣裙",714,1190,"女士","36,38,40,42,44","HRT","服饰","连衣裙",default,default);
INSERT into goodsTable values
(default,"img/list/lacoste_EF2427-4Y5_001.jpg",2,"Lacoste","女式连衣裙",654,1090,"女士","S,M,L","4Y5","服饰","连衣裙",default,default);
INSERT into goodsTable values
(default,"img/list/moschino_J0491540616A1555_001.JPG",5,"MOSCHINO","黑色女针织连衣裙",4193,5990,"女士","36,38,40","黑色","服饰","连衣裙",default,default);
INSERT into goodsTable values
(default,"img/list/moschino_A0480410017P1555_001.JPG",5,"MOSCHINO","黑色女针织连衣裙",4495,8990,"女士","XXS,XS,S,M,L,XL","黑色","服饰","连衣裙",default,default);
INSERT into goodsTable values
(default,"img/list/moschino_A0481410017P1555_001.JPG",5,"MOSCHINO","黑色女针织连衣裙",3195,6390,"女士","40,42,44","黑色","服饰","连衣裙",default,default);
INSERT into goodsTable values
(default,"img/list/moschino_A0401413417P1063_001.JPG",5,"MOSCHINO","彩色女连衣裙",4995,9990,"女士","38,40,42,44","彩色","服饰","连衣裙",default,default);


-- 手拿包
INSERT into goodsTable values
(default,"img/list/versace_DL24197-DVSAND41E_001.jpg",4,"VERSACE","范思哲黑色男士手拿包",2400,4800,"男士","均码","黑色","包袋","手拿包",default,default);
INSERT into goodsTable values
(default,"img/list/salvatore-ferragamo_638329TAN_001.jpg",6,"SALVATORE FERRAGAMO","棕褐色男士商务手包",4600,1150,"男士","均码","棕褐色","包袋","手拿包",default,default);
INSERT into goodsTable values
(default,"img/list/follifollie_HB17P028GKBLACK_001.jpg",5,"FolliFollie","芙丽芙丽轻奢时尚潮女士手提单肩包",1080,2160,"女士","均码","黑色","包袋","手拿包",default,default);


-- 单肩包
INSERT into goodsTable values
(default,"img/list/inniu_IN51CRED_001.jpg",4,"INNIU","红色女士肩背手提双用包",1680,2980,"女士","均码","红色","包袋","单肩包",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_IN51CTAN_001.jpg",4,"INNIU","沙色女士肩背手提双用包",1680,2980,"女士","均码","沙色","包袋","单肩包",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_IN51CBLACK_001.jpg",4,"INNIU","黑色女士肩背手提双用包",1680,2980,"女士","均码","黑色","包袋","单肩包",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_IN70CBABYBLUEWHITE_001.jpg",4,"INNIU","天蓝色白色女士肩背手提双用包",1480,2680,"女士","均码","天蓝色白色","包袋","单肩包",default,default);
INSERT into goodsTable values
(default,"img/list/fv-x-tango_50031_001.jpg",3,"FV X Tango","帆布环保袋",99,128,"女士","均码","白色","包袋","单肩包",default,default);



-- 迷你包
INSERT into goodsTable values
(default,"img/list/guess_18GF-149DEN_001.jpg",4,"GUESS","深蓝色女士手包",279,399,"女士","均码","深蓝色","包袋","迷你包",default,default);
INSERT into goodsTable values
(default,"img/list/guess_18GF-149BLU_001.jpg",5,"GUESS","淡蓝色女士手包",279,399,"女士","均码","淡蓝色","包袋","迷你包",default,default);
INSERT into goodsTable values
(default,"img/list/guess_18GF-149BLS_001.jpg",5,"GUESS","浅粉色女士手包",279,399,"女士","均码","浅粉色","包袋","迷你包",default,default);
INSERT into goodsTable values
(default,"img/list/guess_18GF-149BLA_001.jpg",5,"GUESS","黑色女士手包",279,399,"女士","均码","黑色","包袋","迷你包",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DPDF424-DSLCVKY3OC_001.jpg",3,"VERSACE","范思哲彩色女士小包",3990,6500,"女士","均码","彩色","包袋","迷你包",default,default);



-- 手提包
INSERT into goodsTable values
(default,"img/list/inniu_BO-19CBLACK_001.jpg",4,"INNIU","黑色女士手提包",1180,3680,"女士","均码","黑色","包袋","手提包",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_1006CPINK_001.jpg",4,"INNIU","粉色女士手提包",980,2280,"女士","均码","粉色","包袋","手提包",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_1006CGREY_001.jpg",4,"INNIU","灰色女士手提包",980,2280,"女士","均码","灰色","包袋","手提包",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_IN12CRED_001.jpg",4,"INNIU","红色女士手提包",1880,3980,"女士","均码","红色","包袋","手提包",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_IN12CTAUPE_001.jpg",4,"INNIU","灰褐色女士手提包",1880,3980,"女士","均码","灰褐色","包袋","手提包",default,default);


-- 鞋履 平底鞋
INSERT into goodsTable values
(default,"img/list/inniu_4848ANBROWNCORAL_001.jpg",3,"INNIU","棕色珊瑚色女士芭蕾鞋",990,1980,"女士","36.5,35,37,39","棕色珊瑚色","鞋履","平底鞋",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_28310MBRONZESILVER_001.jpg",3,"INNIU","棕色银色女士凉鞋",980,2680,"女士","36,38","银色","鞋履","平底鞋",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_28310CWHITEGREY_001.jpg",3,"INNIU","白色灰色女士凉鞋",980,2680,"女士","35,36,38","灰白色","鞋履","平底鞋",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_4774VGREEN_001.jpg",3,"INNIU","绿色女士莫卡辛鞋",1352,3380,"女士","37,38,38.5,39","绿色","鞋履","平底鞋",default,default);
INSERT into goodsTable values
(default,"img/list/salvatore-ferragamo_661313TURQUOISE_001.jpg",4,"SALVATORE FERRAGAMO","青绿色儿童芭蕾平底鞋",1372,2800,"女士","27,28,28.5,29","青绿色","鞋履","平底鞋",default,default);


-- 运动鞋
INSERT into goodsTable values
(default,"img/list/salvatore-ferragamo_653340BLACK_001.jpg",4,"SALVATORE FERRAGAMO","黑色女士运动鞋",2250,4500,"女士","4.5,5.5,6.5,7","黑色","鞋履","运动鞋",default,default);
INSERT into goodsTable values
(default,"img/list/salvatore-ferragamo_652939FUCHSIA_001.jpg",4,"SALVATORE FERRAGAMO","紫红色女士运动鞋",2300,4600,"女士","36,38","紫色","鞋履","运动鞋",default,default);
INSERT into goodsTable values
(default,"img/list/salvatore-ferragamo_652936BLACK_001.jpg",4,"SALVATORE FERRAGAMO","黑色女士运动鞋",2300,4600,"女士","5.5,6.5,7.5,8.5","黑色","鞋履","运动鞋",default,default);
INSERT into goodsTable values
(default,"img/list/salvatore-ferragamo_640238LIGHTBLUE_001.jpg",4,"SALVATORE FERRAGAMO","浅蓝色女士休闲鞋",1800,4500,"女士","5.5,6.5,7.5,8.5","浅蓝色","鞋履","运动鞋",default,default);



-- 系带鞋
INSERT into goodsTable values
(default,"img/list/salvatore-ferragamo_651453BLACK_001.jpg",4,"SALVATORE FERRAGAMO","黑色男士系带鞋",3900,7800,"男士","5.5,6.5,7.5,8.5","黑色","鞋履","系带鞋",default,default);
INSERT into goodsTable values
(default,"img/list/salvatore-ferragamo_651444MEDIUMBROWN_001.jpg",4,"SALVATORE FERRAGAMO","棕色男士系带鞋",4475,8950,"男士","5.5,6.5,7.5,8.5","棕色","鞋履","系带鞋",default,default);

-- 高跟鞋
INSERT into goodsTable values
(default,"img/list/inniu_INN806PNAVYBLUE_001.jpg",3,"INNIU","藏青蓝女士高跟鞋",1500,3980,"女士","37.5,36,37,38","藏青色","鞋履","高跟鞋",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_3529CCOGNAC_001.jpg",3,"INNIU","深棕色女士凉鞋",1592,3980,"女士","35,36,37,38","深棕色","鞋履","高跟鞋",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_3529CBLACK_001.jpg",3,"INNIU","黑色女士凉鞋",1592,3980,"女士","35,36,37,38","黑色","鞋履","高跟鞋",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_INN919CWHITEBLACK_001.jpg",3,"INNIU","白色黑色女士凉鞋",1282,4280,"女士","35,36,37,38","黑白色","鞋履","高跟鞋",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_INN806MSILVER_001.jpg",3,"INNIU","银色女士高跟鞋",1500,3980,"女士","35,36,37,38","银色","鞋履","高跟鞋",default,default);



-- 钱包
INSERT into goodsTable values
(default,"img/list/versace_DP33597-DGOV2K5HDS_001.jpg",3,"VERSACE","范思哲橘黄色男士钱包",3100,6200,"男士","均码","橘黄色","配饰","钱包",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DPU6061-DGOV2K83DS_001.jpg",3,"VERSACE","范思哲蓝色男士钱包",1620,2700,"男士","均码","蓝色","配饰","钱包",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DPDD741-DVT4ZD41OC_001.jpg",3,"VERSACE","范思哲黑色女士钱包",4020,6700,"女士","均码","黑色","配饰","钱包",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DP8E592-DVT4ZD41OC_001.jpg",3,"VERSACE","范思哲黑色女士钱包",3180,5300,"女士","均码","黑色","配饰","钱包",default,default);
INSERT into goodsTable values
(default,"img/list/salvatore-ferragamo_653644BORDEAUX_001.jpg",3,"SALVATORE FERRAGAMO","酒红色女士钱包",2600,5200,"女士","均码","酒红色","配饰","钱包",default,default);


-- 围巾
INSERT into goodsTable values
(default,"img/list/versace_IFO1401-IT01068I4008_001.jpg",2,"VERSACE","范思哲黑色中性款围巾",3420,5700,"男士","均码","黑色","配饰","围巾",default,default);
INSERT into goodsTable values
(default,"img/list/versace_IFO1401-IT01068I4016_001.jpg",2,"VERSACE","范思哲玫红色中性款围巾",3420,5700,"男士","均码","玫红色","配饰","围巾",default,default);
INSERT into goodsTable values
(default,"img/list/versace_IST7003-IT01069I4008_001.jpg",2,"VERSACE","范思哲黑色中性款围巾",2280,3800,"男士","均码","玫红色","配饰","围巾",default,default);
INSERT into goodsTable values
(default,"img/list/versace_IST1402-IT00445I4008_001.jpg",2,"VERSACE","范思哲黑色女士围巾",2500,5000,"男士","均码","玫红色","配饰","围巾",default,default);


-- 领带
INSERT into goodsTable values
(default,"img/list/versace_ICR8001-IT00189I7933_001.jpg",2,"VERSACE","范思哲蓝色男士领带",760,1900,"男士","均码","蓝色","配饰","领带",default,default);
INSERT into goodsTable values
(default,"img/list/versace_ICR8001-IT00189I7934_001.jpg",2,"VERSACE","范思哲黑色男士领带",760,1900,"男士","均码","黑色","配饰","领带",default,default);
INSERT into goodsTable values
(default,"img/list/versace_ICR8001-IT00470I4245_001.jpg",2,"VERSACE","范思哲蓝色男士领带",560,1400,"男士","均码","蓝色","配饰","领带",default,default);
INSERT into goodsTable values
(default,"img/list/versace_ICR8001-IT00475I4242_001.jpg",2,"VERSACE","范思哲紫色男士领带",560,1400,"男士","均码","紫色","配饰","领带",default,default);
INSERT into goodsTable values
(default,"img/list/versace_ICR8001-IT00475I4244_001.jpg",2,"VERSACE","范思哲蓝色男士领带",560,1400,"男士","均码","蓝色","配饰","领带",default,default);
INSERT into goodsTable values
(default,"img/list/versace_ICR8001-IT00487I4257_001.jpg",2,"VERSACE","范思哲黑色男士领带",560,1400,"男士","均码","黑色","配饰","领带",default,default);




-- 腰带
INSERT into goodsTable values
(default,"img/list/versace_DCDD174-DMT1K6QOC_001.jpg",3,"VERSACE","范思哲玫红色女士腰链",1800,4500,"男士","S,M,L","玫红色","配饰","腰带",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DCDD174-DMT1D00O_001.jpg",3,"VERSACE","范思哲金色女士腰链",1800,4500,"男士","均码","金色","配饰","腰带",default,default);

-- 电子产品配饰
INSERT into goodsTable values
(default,"img/list/moschino_A7919830317A1888_001.JPG",4,"MOSCHINO","彩色iPhone7手机壳",495,990,"女士","均码","彩色","配饰","电子产品配饰",default,default);

-- 耳环
INSERT into goodsTable values
(default,"img/list/links-of-london_5040.2185SILVER_001.jpg",6,"LINKS OF LONDON","时尚S925银和镀玫瑰金时尚个性心形女士耳环饰品",665,1330,"女士","均码","玫瑰金","首饰","耳环",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DG25708-DJMTD00O_001.jpg",2,"VERSACE","范思哲金色男士耳钉",600,1000,"男士","均码","金色","首饰","耳环",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DG66096-DJMRD99P_001.jpg",2,"VERSACE","范思哲银色男士胸针",2100,3500,"男士","均码","银色","首饰","耳环",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DG74973-DMT1D00K_001.jpg",2,"VERSACE","范思哲银色男士袖扣",1320,2200,"男士","均码","银色","首饰","耳环",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5040.2905SILVER-STONE_001.jpg",6,"LINKS OF LONDON","时尚S925银时个性圆形女士耳环饰品",1020,2040,"女士","均码","银色","首饰","耳环",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5040.2279SILVER_001.jpg",6,"LINKS OF LONDON","时尚S925银时潮流个性心形女士耳环饰品",1050,2100,"女士","均码","银色","首饰","耳环",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5040.2191SILVER_001.jpg",6,"LINKS OF LONDON","时尚S925银时尚个性圆形女士耳环饰品",1120,2240,"女士","均码","银色","首饰","耳环",default,default);


-- 手表
INSERT into goodsTable values
(default,"img/list/follifollie_WF17R002SPWBL_001.jpg",6,"FolliFollie","芙丽轻奢时尚真皮镀玫瑰金色女士石英手表",975,1950,"女士","均码","玫瑰金","首饰","手表",default,default);
INSERT into goodsTable values
(default,"img/list/follifollie_WF14B020SDSWH_001.jpg",6,"FolliFollie","芙丽芙丽轻奢时尚方形石英女士手表",975,1950,"女士","均码","白色","首饰","手表",default,default);
INSERT into goodsTable values
(default,"img/list/follifollie_WF5R084SPSWH_001.jpg",6,"FolliFollie","芙丽芙丽轻奢时尚石英女士手表真皮表带",1300,2600,"女士","均码","白色","首饰","手表",default,default);
INSERT into goodsTable values
(default,"img/list/follifollie_WF14B020SDSOR_001.jpg",6,"FolliFollie","芙丽芙丽轻奢时尚圆形真皮女士石英手表",975,1950,"女士","均码","橙色","首饰","手表",default,default);
INSERT into goodsTable values
(default,"img/list/follifollie_WF14A020SDZBR_001.jpg",6,"FolliFollie","芙丽芙丽方形复古石英手表女士真皮表时尚",825,1650,"女士","均码","棕色","首饰","手表",default,default);

-- 手链
INSERT into goodsTable values
(default,"img/list/links-of-london_5010.3825SILVER-STONE_001.jpg",6,"LINKS OF LONDON","时尚S925银时个性圆形女士手链饰品",875,1750,"女士","均码","银色","首饰","手链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5010.2802SILVER_001.jpg",6,"LINKS OF LONDON","时尚S925银和镀玫瑰金时尚个性心形女士手链饰品",875,1750,"女士","均码","玫瑰金","首饰","手链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5010.2561SILVER_001.jpg",6,"LINKS OF LONDON","时尚925银潮流个性心形女士手链饰品",735,1470,"女士","均码","银色","首饰","手链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5010.3735SILVER_001.jpg",6,"LINKS OF LONDON","女士925银+镀18玫瑰金手链饰品",730,1460,"女士","均码","金色","首饰","手链",default,default);


drop table usertable if exists usertable;
create table usertable(
  uid int auto_increment primary KEY,
  uname varchar(16)  UNIQUE,
  upwd varchar(16) not null,
  ushopcar varchar(1024) DEFAULT null
);
INSERT into usertable VALUES
(default,"xietao","123456",default);









