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

-- #手表
INSERT into goodsTable values
(default,"img/list/follifollie_WF17R002SPWBL_001.jpg",6,"FolliFollie","芙丽轻奢时尚真皮镀玫瑰金色女士石英手表",975,1950,"女士","均码","玫瑰金","首饰","手表",default,default);

-- #上衣
INSERT into goodsTable values
(default,"img/list/lacoste_TH4775-WAV_001.jpg",2,"Lacoste","男式T恤",234,390,"男士","3,4,5,6","WAV","服饰","上装",default,default);
INSERT into goodsTable values
(default,"img/list/lacoste_TH3881-9JU_001.jpg",2,"Lacoste","男式T恤",474,790,"男士","3,4,5,6","9JU","服饰","上装",default,default);
INSERT into goodsTable values
(default,"img/list/brooks-brothers_BB100098529I1_001.jpg",3,"BROOKS BROTHERS","蓝色男士外套",234,390,"男士","M","蓝色","服饰","上装",default,default);

-- 下装
INSERT into goodsTable values
(default,"img/list/lacoste_FH7053-166_001.jpg",2,"Lacoste","男式短裤",495,990,"男士","38,40,42,44,46","黑色","服饰","下装",default,default);
INSERT into goodsTable values
(default,"img/list/guess_MI1D9050MBL_001.jpg",4,"GUESS","靛蓝色男士牛仔裤",559,699,"男士","175","靛蓝色","服饰","下装",default,default);

-- 连衣裙
INSERT into goodsTable values
(default,"img/list/lacoste_EF8078-HRT_001.jpg",2,"Lacoste","女式连衣裙",714,1190,"女士","36,38,40,42,44","HRT","服饰","连衣裙",default,default);
INSERT into goodsTable values
(default,"img/list/lacoste_EF2427-4Y5_001.jpg",2,"Lacoste","女式连衣裙",654,1090,"女士","S,M,L","4Y5","服饰","连衣裙",default,default);


-- 手拿包
INSERT into goodsTable values
(default,"img/list/versace_DL24197-DVSAND41E_001.jpg",4,"VERSACE","范思哲黑色男士手拿包",2400,4800,"男士","均码","黑色","包袋","手拿包",default,default);
INSERT into goodsTable values
(default,"img/list/salvatore-ferragamo_638329TAN_001.jpg",6,"SALVATORE FERRAGAMO","棕褐色男士商务手包",4600,1150,"男士","均码","棕褐色","包袋","手拿包",default,default);

-- 单肩包
INSERT into goodsTable values
(default,"img/list/inniu_IN51CRED_001.jpg",4,"INNIU","红色女士肩背手提双用包",1680,2980,"女士","均码","红色","包袋","单肩包",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_IN51CTAN_001.jpg",4,"INNIU","沙色女士肩背手提双用包",1680,2980,"女士","均码","沙色","包袋","单肩包",default,default);


-- 迷你包
INSERT into goodsTable values
(default,"img/list/guess_18GF-149DEN_001.jpg",4,"GUESS","深蓝色女士手包",279,399,"女士","均码","深蓝色","包袋","迷你包",default,default);
INSERT into goodsTable values
(default,"img/list/guess_18GF-149BLU_001.jpg",5,"GUESS","淡蓝色女士手包",279,399,"女士","均码","淡蓝色","包袋","迷你包",default,default);

-- 手拿包
INSERT into goodsTable values
(default,"img/list/inniu_BO-19CBLACK_001.jpg",4,"INNIU","黑色女士手提包",1180,3680,"女士","均码","黑色","包袋","手提包",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_1006CPINK_001.jpg",4,"INNIU","粉色女士手提包",980,2280,"女士","均码","粉色","包袋","手提包",default,default);

-- 鞋履 平底鞋
INSERT into goodsTable values
(default,"img/list/inniu_4848ANBROWNCORAL_001.jpg",3,"INNIU","棕色珊瑚色女士芭蕾鞋",990,1980,"女士","36.5,35,37,39","棕色珊瑚色","鞋履","平底鞋",default,default);
INSERT into goodsTable values
(default,"img/list/inniu_28310MBRONZESILVER_001.jpg",3,"INNIU","棕色银色女士凉鞋",980,2680,"女士","36,38","银色","鞋履","平底鞋",default,default);



