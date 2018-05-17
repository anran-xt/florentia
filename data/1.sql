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
(default,"img/list/versace_DG16278-DJMTD00O_001.jpg",2,"VERSACE","范思哲金色男士项链",1860,3100,"男士","均码","金色","首饰","手链",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DG1F907-DJMTD00PO_001.jpg",3,"VERSACE","范思哲银色女士项链",1860,3100,"女士","均码","银色","首饰","手链",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DG1F904-DJMXKW3P_001.jpg",3,"VERSACE","范思哲蓝色女士项链",1800,3600,"女士","均码","蓝色","首饰","手链",default,default);
INSERT into goodsTable values
(default,"img/list/versace_DG1F483-DJMTDGN_001.jpg",3,"VERSACE","范思哲黑色女士项链",1380,2300,"女士","均码","黑色","首饰","手链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5024.1261SILVER_001.jpg",5,"LINKS OF LONDON","时尚S925银和镀玫瑰金时个性心形女士项链饰品",740,1480,"女士","均码","玫瑰金","首饰","手链",default,default);

INSERT into goodsTable values
(default,"img/list/links-of-london_5024.1355SILVER_001.jpg",6,"LINKS OF LONDON","时尚S925银和镀18玫瑰金女士项链饰品",890,1780,"女士","均码","银色","首饰","手链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5020.2599SILVER_001.jpg",6,"LINKS OF LONDON","女士925银长款项链饰品",1610,3220,"女士","均码","银色","首饰","手链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5020.3424SILVER_001.jpg",6,"LINKS OF LONDON","女士925银长款项链饰品",770,1540,"女士","均码","玫瑰金","首饰","手链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5020.2719SILVER_001.jpg",6,"LINKS OF LONDON","时尚925银个性时尚女士项链饰品",2055,4100,"女士","均码","玫瑰金","首饰","手链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5020.3423SILVER_001.jpg",6,"LINKS OF LONDON","时尚925银和镀玫瑰金个性心形女士项链饰品",665,1330,"女士","均码","银色","首饰","手链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5020.3422SILVER_001.jpg",6,"LINKS OF LONDON","时尚925银和镀玫瑰金个性心形女士项链饰品",940,1880,"女士","均码","玫瑰金","首饰","手链",default,default);
INSERT into goodsTable values
(default,"img/list/links-of-london_5020.3421SILVER_001.jpg",6,"LINKS OF LONDON","时尚925银个性时尚女士项链饰品",940,1880,"女士","均码","玫瑰金","首饰","手链",default,default);





