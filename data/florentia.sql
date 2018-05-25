-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-05-25 08:51:26
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `florentia`
--

-- --------------------------------------------------------

--
-- 表的结构 `goodstable`
--

CREATE TABLE `goodstable` (
  `gid` int(11) NOT NULL,
  `gsrc` varchar(128) NOT NULL,
  `gsrcnum` int(11) NOT NULL,
  `gbrand` varchar(32) NOT NULL,
  `gname` varchar(62) NOT NULL,
  `gnowprice` int(11) NOT NULL,
  `goldprice` int(11) NOT NULL,
  `gsex` varchar(8) NOT NULL,
  `gsizelist` varchar(16) NOT NULL,
  `gcolor` varchar(8) NOT NULL,
  `gfirstclass` varchar(16) NOT NULL,
  `gsecondclass` varchar(16) NOT NULL,
  `gthirdclass` varchar(16) DEFAULT NULL,
  `gisnew` tinyint(4) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goodstable`
--

INSERT INTO `goodstable` (`gid`, `gsrc`, `gsrcnum`, `gbrand`, `gname`, `gnowprice`, `goldprice`, `gsex`, `gsizelist`, `gcolor`, `gfirstclass`, `gsecondclass`, `gthirdclass`, `gisnew`) VALUES
(1, 'img/list/versace_DG16278-DJMTD00O_001.jpg', 2, 'VERSACE', '范思哲金色男士项链', 1860, 3100, '男士', '均码', '金色', '首饰', '项链', NULL, 0),
(2, 'img/list/versace_DG1F907-DJMTD00PO_001.jpg', 3, 'VERSACE', '范思哲银色女士项链', 1860, 3100, '女士', '均码', '银色', '首饰', '项链', NULL, 0),
(3, 'img/list/versace_DG1F904-DJMXKW3P_001.jpg', 3, 'VERSACE', '范思哲蓝色女士项链', 1800, 3600, '女士', '均码', '蓝色', '首饰', '项链', NULL, 0),
(4, 'img/list/versace_DG1F483-DJMTDGN_001.jpg', 3, 'VERSACE', '范思哲黑色女士项链', 1380, 2300, '女士', '均码', '黑色', '首饰', '项链', NULL, 0),
(5, 'img/list/links-of-london_5024.1261SILVER_001.jpg', 5, 'LINKS OF LONDON', '时尚S925银和镀玫瑰金时个性心形女士项链饰品', 740, 1480, '女士', '均码', '玫瑰金', '首饰', '项链', NULL, 0),
(6, 'img/list/links-of-london_5024.1355SILVER_001.jpg', 6, 'LINKS OF LONDON', '时尚S925银和镀18玫瑰金女士项链饰品', 890, 1780, '女士', '均码', '银色', '首饰', '项链', NULL, 0),
(7, 'img/list/links-of-london_5020.2599SILVER_001.jpg', 6, 'LINKS OF LONDON', '女士925银长款项链饰品', 1610, 3220, '女士', '均码', '银色', '首饰', '项链', NULL, 0),
(8, 'img/list/links-of-london_5020.3424SILVER_001.jpg', 6, 'LINKS OF LONDON', '女士925银长款项链饰品', 770, 1540, '女士', '均码', '玫瑰金', '首饰', '项链', NULL, 0),
(9, 'img/list/links-of-london_5020.2719SILVER_001.jpg', 6, 'LINKS OF LONDON', '时尚925银个性时尚女士项链饰品', 2055, 4100, '女士', '均码', '玫瑰金', '首饰', '项链', NULL, 0),
(10, 'img/list/links-of-london_5020.3423SILVER_001.jpg', 6, 'LINKS OF LONDON', '时尚925银和镀玫瑰金个性心形女士项链饰品', 665, 1330, '女士', '均码', '银色', '首饰', '项链', NULL, 0),
(11, 'img/list/links-of-london_5020.3422SILVER_001.jpg', 6, 'LINKS OF LONDON', '时尚925银和镀玫瑰金个性心形女士项链饰品', 940, 1880, '女士', '均码', '玫瑰金', '首饰', '项链', NULL, 0),
(12, 'img/list/links-of-london_5020.3421SILVER_001.jpg', 6, 'LINKS OF LONDON', '时尚925银个性时尚女士项链饰品', 940, 1880, '女士', '均码', '玫瑰金', '首饰', '项链', NULL, 0),
(13, 'img/list/lacoste_TH4775-WAV_001.jpg', 2, 'Lacoste', '男式T恤', 234, 390, '男士', '3,4,5,6', 'WAV', '服饰', '上装', NULL, 0),
(14, 'img/list/lacoste_TH3881-9JU_001.jpg', 2, 'Lacoste', '男式T恤', 474, 790, '男士', '3,4,5,6', '9JU', '服饰', '上装', NULL, 0),
(15, 'img/list/brooks-brothers_BB100098529I1_001.jpg', 3, 'BROOKS BROTHERS', '蓝色男士外套', 234, 390, '男士', 'M', '蓝色', '服饰', '上装', NULL, 0),
(16, 'img/list/lacoste_PH2692K1ZU7_001.jpg', 2, 'Lacoste', '男式T恤', 654, 1090, '男士', '3,4,5,6', 'ZU7', '服饰', '上装', NULL, 0),
(17, 'img/list/lacoste_TH2719K1ZTY_001.jpg', 2, 'Lacoste', '男式T恤', 294, 490, '男士', '3,4,5,6', 'ZTY', '服饰', '上装', NULL, 0),
(18, 'img/list/lacoste_FH7053-166_001.jpg', 2, 'Lacoste', '男式短裤', 495, 990, '男士', '38,40,42,44,46', '黑色', '服饰', '下装', NULL, 0),
(19, 'img/list/guess_MI1D9050MBL_001.jpg', 4, 'GUESS', '靛蓝色男士牛仔裤', 559, 699, '男士', '175', '靛蓝色', '服饰', '下装', NULL, 0),
(20, 'img/list/guess_Q81A05R2RX0MDYI_001.jpg', 4, 'GUESS', '浅蓝色女士牛仔裤', 489, 699, '女士', '155', '浅蓝色', '服饰', '下装', NULL, 0),
(21, 'img/list/brooks-brothers_BB10004843899_001.jpg', 3, 'BROOKS BROTHERS', '蓝色男士休闲修身版裤子', 763, 1090, '男士', '3432', '蓝色', '服饰', '下装', NULL, 0),
(22, 'img/list/lacoste_EF8078-HRT_001.jpg', 2, 'Lacoste', '女式连衣裙', 714, 1190, '女士', '36,38,40,42,44', 'HRT', '服饰', '连衣裙', NULL, 0),
(23, 'img/list/lacoste_EF2427-4Y5_001.jpg', 2, 'Lacoste', '女式连衣裙', 654, 1090, '女士', 'S,M,L', '4Y5', '服饰', '连衣裙', NULL, 0),
(24, 'img/list/moschino_J0491540616A1555_001.JPG', 5, 'MOSCHINO', '黑色女针织连衣裙', 4193, 5990, '女士', '36,38,40', '黑色', '服饰', '连衣裙', NULL, 0),
(25, 'img/list/moschino_A0480410017P1555_001.JPG', 5, 'MOSCHINO', '黑色女针织连衣裙', 4495, 8990, '女士', 'XXS,XS,S,M,L,XL', '黑色', '服饰', '连衣裙', NULL, 0),
(26, 'img/list/moschino_A0481410017P1555_001.JPG', 5, 'MOSCHINO', '黑色女针织连衣裙', 3195, 6390, '女士', '40,42,44', '黑色', '服饰', '连衣裙', NULL, 0),
(27, 'img/list/moschino_A0401413417P1063_001.JPG', 5, 'MOSCHINO', '彩色女连衣裙', 4995, 9990, '女士', '38,40,42,44', '彩色', '服饰', '连衣裙', NULL, 0),
(28, 'img/list/versace_DL24197-DVSAND41E_001.jpg', 4, 'VERSACE', '范思哲黑色男士手拿包', 2400, 4800, '男士', '均码', '黑色', '包袋', '手拿包', NULL, 0),
(29, 'img/list/salvatore-ferragamo_638329TAN_001.jpg', 6, 'SALVATORE FERRAGAMO', '棕褐色男士商务手包', 4600, 1150, '男士', '均码', '棕褐色', '包袋', '手拿包', NULL, 0),
(30, 'img/list/follifollie_HB17P028GKBLACK_001.jpg', 5, 'FolliFollie', '芙丽芙丽轻奢时尚潮女士手提单肩包', 1080, 2160, '女士', '均码', '黑色', '包袋', '手拿包', NULL, 0),
(31, 'img/list/inniu_IN51CRED_001.jpg', 4, 'INNIU', '红色女士肩背手提双用包', 1680, 2980, '女士', '均码', '红色', '包袋', '单肩包', NULL, 0),
(32, 'img/list/inniu_IN51CTAN_001.jpg', 4, 'INNIU', '沙色女士肩背手提双用包', 1680, 2980, '女士', '均码', '沙色', '包袋', '单肩包', NULL, 0),
(33, 'img/list/inniu_IN51CBLACK_001.jpg', 4, 'INNIU', '黑色女士肩背手提双用包', 1680, 2980, '女士', '均码', '黑色', '包袋', '单肩包', NULL, 0),
(34, 'img/list/inniu_IN70CBABYBLUEWHITE_001.jpg', 4, 'INNIU', '天蓝色白色女士肩背手提双用包', 1480, 2680, '女士', '均码', '天蓝色白色', '包袋', '单肩包', NULL, 0),
(35, 'img/list/fv-x-tango_50031_001.jpg', 3, 'FV X Tango', '帆布环保袋', 99, 128, '女士', '均码', '白色', '包袋', '单肩包', NULL, 0),
(36, 'img/list/guess_18GF-149DEN_001.jpg', 4, 'GUESS', '深蓝色女士手包', 279, 399, '女士', '均码', '深蓝色', '包袋', '迷你包', NULL, 0),
(37, 'img/list/guess_18GF-149BLU_001.jpg', 5, 'GUESS', '淡蓝色女士手包', 279, 399, '女士', '均码', '淡蓝色', '包袋', '迷你包', NULL, 0),
(38, 'img/list/guess_18GF-149BLS_001.jpg', 5, 'GUESS', '浅粉色女士手包', 279, 399, '女士', '均码', '浅粉色', '包袋', '迷你包', NULL, 0),
(39, 'img/list/guess_18GF-149BLA_001.jpg', 5, 'GUESS', '黑色女士手包', 279, 399, '女士', '均码', '黑色', '包袋', '迷你包', NULL, 0),
(40, 'img/list/versace_DPDF424-DSLCVKY3OC_001.jpg', 3, 'VERSACE', '范思哲彩色女士小包', 3990, 6500, '女士', '均码', '彩色', '包袋', '迷你包', NULL, 0),
(41, 'img/list/inniu_BO-19CBLACK_001.jpg', 4, 'INNIU', '黑色女士手提包', 1180, 3680, '女士', '均码', '黑色', '包袋', '手提包', NULL, 0),
(42, 'img/list/inniu_1006CPINK_001.jpg', 4, 'INNIU', '粉色女士手提包', 980, 2280, '女士', '均码', '粉色', '包袋', '手提包', NULL, 0),
(43, 'img/list/inniu_1006CGREY_001.jpg', 4, 'INNIU', '灰色女士手提包', 980, 2280, '女士', '均码', '灰色', '包袋', '手提包', NULL, 0),
(44, 'img/list/inniu_IN12CRED_001.jpg', 4, 'INNIU', '红色女士手提包', 1880, 3980, '女士', '均码', '红色', '包袋', '手提包', NULL, 0),
(45, 'img/list/inniu_IN12CTAUPE_001.jpg', 4, 'INNIU', '灰褐色女士手提包', 1880, 3980, '女士', '均码', '灰褐色', '包袋', '手提包', NULL, 0),
(46, 'img/list/inniu_4848ANBROWNCORAL_001.jpg', 3, 'INNIU', '棕色珊瑚色女士芭蕾鞋', 990, 1980, '女士', '36.5,35,37,39', '棕色珊瑚色', '鞋履', '平底鞋', NULL, 0),
(47, 'img/list/inniu_28310MBRONZESILVER_001.jpg', 3, 'INNIU', '棕色银色女士凉鞋', 980, 2680, '女士', '36,38', '银色', '鞋履', '平底鞋', NULL, 0),
(48, 'img/list/inniu_28310CWHITEGREY_001.jpg', 3, 'INNIU', '白色灰色女士凉鞋', 980, 2680, '女士', '35,36,38', '灰白色', '鞋履', '平底鞋', NULL, 0),
(49, 'img/list/inniu_4774VGREEN_001.jpg', 3, 'INNIU', '绿色女士莫卡辛鞋', 1352, 3380, '女士', '37,38,38.5,39', '绿色', '鞋履', '平底鞋', NULL, 0),
(50, 'img/list/salvatore-ferragamo_661313TURQUOISE_001.jpg', 4, 'SALVATORE FERRAGAMO', '青绿色儿童芭蕾平底鞋', 1372, 2800, '女士', '27,28,28.5,29', '青绿色', '鞋履', '平底鞋', NULL, 0),
(51, 'img/list/salvatore-ferragamo_653340BLACK_001.jpg', 4, 'SALVATORE FERRAGAMO', '黑色女士运动鞋', 2250, 4500, '女士', '4.5,5.5,6.5,7', '黑色', '鞋履', '运动鞋', NULL, 0),
(52, 'img/list/salvatore-ferragamo_652939FUCHSIA_001.jpg', 4, 'SALVATORE FERRAGAMO', '紫红色女士运动鞋', 2300, 4600, '女士', '36,38', '紫色', '鞋履', '运动鞋', NULL, 0),
(53, 'img/list/salvatore-ferragamo_652936BLACK_001.jpg', 4, 'SALVATORE FERRAGAMO', '黑色女士运动鞋', 2300, 4600, '女士', '5.5,6.5,7.5,8.5', '黑色', '鞋履', '运动鞋', NULL, 0),
(54, 'img/list/salvatore-ferragamo_640238LIGHTBLUE_001.jpg', 4, 'SALVATORE FERRAGAMO', '浅蓝色女士休闲鞋', 1800, 4500, '女士', '5.5,6.5,7.5,8.5', '浅蓝色', '鞋履', '运动鞋', NULL, 0),
(55, 'img/list/salvatore-ferragamo_651453BLACK_001.jpg', 4, 'SALVATORE FERRAGAMO', '黑色男士系带鞋', 3900, 7800, '男士', '5.5,6.5,7.5,8.5', '黑色', '鞋履', '系带鞋', NULL, 0),
(56, 'img/list/salvatore-ferragamo_651444MEDIUMBROWN_001.jpg', 4, 'SALVATORE FERRAGAMO', '棕色男士系带鞋', 4475, 8950, '男士', '5.5,6.5,7.5,8.5', '棕色', '鞋履', '系带鞋', NULL, 0),
(57, 'img/list/inniu_INN806PNAVYBLUE_001.jpg', 3, 'INNIU', '藏青蓝女士高跟鞋', 1500, 3980, '女士', '37.5,36,37,38', '藏青色', '鞋履', '高跟鞋', NULL, 0),
(58, 'img/list/inniu_3529CCOGNAC_001.jpg', 3, 'INNIU', '深棕色女士凉鞋', 1592, 3980, '女士', '35,36,37,38', '深棕色', '鞋履', '高跟鞋', NULL, 0),
(59, 'img/list/inniu_3529CBLACK_001.jpg', 3, 'INNIU', '黑色女士凉鞋', 1592, 3980, '女士', '35,36,37,38', '黑色', '鞋履', '高跟鞋', NULL, 0),
(60, 'img/list/inniu_INN919CWHITEBLACK_001.jpg', 3, 'INNIU', '白色黑色女士凉鞋', 1282, 4280, '女士', '35,36,37,38', '黑白色', '鞋履', '高跟鞋', NULL, 0),
(61, 'img/list/inniu_INN806MSILVER_001.jpg', 3, 'INNIU', '银色女士高跟鞋', 1500, 3980, '女士', '35,36,37,38', '银色', '鞋履', '高跟鞋', NULL, 0),
(62, 'img/list/versace_DP33597-DGOV2K5HDS_001.jpg', 3, 'VERSACE', '范思哲橘黄色男士钱包', 3100, 6200, '男士', '均码', '橘黄色', '配饰', '钱包', NULL, 0),
(63, 'img/list/versace_DPU6061-DGOV2K83DS_001.jpg', 3, 'VERSACE', '范思哲蓝色男士钱包', 1620, 2700, '男士', '均码', '蓝色', '配饰', '钱包', NULL, 0),
(64, 'img/list/versace_DPDD741-DVT4ZD41OC_001.jpg', 3, 'VERSACE', '范思哲黑色女士钱包', 4020, 6700, '女士', '均码', '黑色', '配饰', '钱包', NULL, 0),
(65, 'img/list/versace_DP8E592-DVT4ZD41OC_001.jpg', 3, 'VERSACE', '范思哲黑色女士钱包', 3180, 5300, '女士', '均码', '黑色', '配饰', '钱包', NULL, 0),
(66, 'img/list/salvatore-ferragamo_653644BORDEAUX_001.jpg', 3, 'SALVATORE FERRAGAMO', '酒红色女士钱包', 2600, 5200, '女士', '均码', '酒红色', '配饰', '钱包', NULL, 0),
(67, 'img/list/versace_IFO1401-IT01068I4008_001.jpg', 2, 'VERSACE', '范思哲黑色中性款围巾', 3420, 5700, '男士', '均码', '黑色', '配饰', '围巾', NULL, 0),
(68, 'img/list/versace_IFO1401-IT01068I4016_001.jpg', 2, 'VERSACE', '范思哲玫红色中性款围巾', 3420, 5700, '男士', '均码', '玫红色', '配饰', '围巾', NULL, 0),
(69, 'img/list/versace_IST7003-IT01069I4008_001.jpg', 2, 'VERSACE', '范思哲黑色中性款围巾', 2280, 3800, '男士', '均码', '玫红色', '配饰', '围巾', NULL, 0),
(70, 'img/list/versace_IST1402-IT00445I4008_001.jpg', 2, 'VERSACE', '范思哲黑色女士围巾', 2500, 5000, '男士', '均码', '玫红色', '配饰', '围巾', NULL, 0),
(71, 'img/list/versace_ICR8001-IT00189I7933_001.jpg', 2, 'VERSACE', '范思哲蓝色男士领带', 760, 1900, '男士', '均码', '蓝色', '配饰', '领带', NULL, 0),
(72, 'img/list/versace_ICR8001-IT00189I7934_001.jpg', 2, 'VERSACE', '范思哲黑色男士领带', 760, 1900, '男士', '均码', '黑色', '配饰', '领带', NULL, 0),
(73, 'img/list/versace_ICR8001-IT00470I4245_001.jpg', 2, 'VERSACE', '范思哲蓝色男士领带', 560, 1400, '男士', '均码', '蓝色', '配饰', '领带', NULL, 0),
(74, 'img/list/versace_ICR8001-IT00475I4242_001.jpg', 2, 'VERSACE', '范思哲紫色男士领带', 560, 1400, '男士', '均码', '紫色', '配饰', '领带', NULL, 0),
(75, 'img/list/versace_ICR8001-IT00475I4244_001.jpg', 2, 'VERSACE', '范思哲蓝色男士领带', 560, 1400, '男士', '均码', '蓝色', '配饰', '领带', NULL, 0),
(76, 'img/list/versace_ICR8001-IT00487I4257_001.jpg', 2, 'VERSACE', '范思哲黑色男士领带', 560, 1400, '男士', '均码', '黑色', '配饰', '领带', NULL, 0),
(77, 'img/list/versace_DCDD174-DMT1K6QOC_001.jpg', 3, 'VERSACE', '范思哲玫红色女士腰链', 1800, 4500, '男士', 'S,M,L', '玫红色', '配饰', '腰带', NULL, 0),
(78, 'img/list/versace_DCDD174-DMT1D00O_001.jpg', 3, 'VERSACE', '范思哲金色女士腰链', 1800, 4500, '男士', '均码', '金色', '配饰', '腰带', NULL, 0),
(79, 'img/list/moschino_A7919830317A1888_001.JPG', 4, 'MOSCHINO', '彩色iPhone7手机壳', 495, 990, '女士', '均码', '彩色', '配饰', '电子产品配饰', NULL, 0),
(80, 'img/list/links-of-london_5040.2185SILVER_001.jpg', 6, 'LINKS OF LONDON', '时尚S925银和镀玫瑰金时尚个性心形女士耳环饰品', 665, 1330, '女士', '均码', '玫瑰金', '首饰', '耳环', NULL, 0),
(81, 'img/list/versace_DG25708-DJMTD00O_001.jpg', 2, 'VERSACE', '范思哲金色男士耳钉', 600, 1000, '男士', '均码', '金色', '首饰', '耳环', NULL, 0),
(82, 'img/list/versace_DG66096-DJMRD99P_001.jpg', 2, 'VERSACE', '范思哲银色男士胸针', 2100, 3500, '男士', '均码', '银色', '首饰', '耳环', NULL, 0),
(83, 'img/list/versace_DG74973-DMT1D00K_001.jpg', 2, 'VERSACE', '范思哲银色男士袖扣', 1320, 2200, '男士', '均码', '银色', '首饰', '耳环', NULL, 0),
(84, 'img/list/links-of-london_5040.2905SILVER-STONE_001.jpg', 6, 'LINKS OF LONDON', '时尚S925银时个性圆形女士耳环饰品', 1020, 2040, '女士', '均码', '银色', '首饰', '耳环', NULL, 0),
(85, 'img/list/links-of-london_5040.2279SILVER_001.jpg', 6, 'LINKS OF LONDON', '时尚S925银时潮流个性心形女士耳环饰品', 1050, 2100, '女士', '均码', '银色', '首饰', '耳环', NULL, 0),
(86, 'img/list/links-of-london_5040.2191SILVER_001.jpg', 6, 'LINKS OF LONDON', '时尚S925银时尚个性圆形女士耳环饰品', 1120, 2240, '女士', '均码', '银色', '首饰', '耳环', NULL, 0),
(87, 'img/list/follifollie_WF17R002SPWBL_001.jpg', 6, 'FolliFollie', '芙丽轻奢时尚真皮镀玫瑰金色女士石英手表', 975, 1950, '女士', '均码', '玫瑰金', '首饰', '手表', NULL, 0),
(88, 'img/list/follifollie_WF14B020SDSWH_001.jpg', 6, 'FolliFollie', '芙丽芙丽轻奢时尚方形石英女士手表', 975, 1950, '女士', '均码', '白色', '首饰', '手表', NULL, 0),
(89, 'img/list/follifollie_WF5R084SPSWH_001.jpg', 6, 'FolliFollie', '芙丽芙丽轻奢时尚石英女士手表真皮表带', 1300, 2600, '女士', '均码', '白色', '首饰', '手表', NULL, 0),
(90, 'img/list/follifollie_WF14B020SDSOR_001.jpg', 6, 'FolliFollie', '芙丽芙丽轻奢时尚圆形真皮女士石英手表', 975, 1950, '女士', '均码', '橙色', '首饰', '手表', NULL, 0),
(91, 'img/list/follifollie_WF14A020SDZBR_001.jpg', 6, 'FolliFollie', '芙丽芙丽方形复古石英手表女士真皮表时尚', 825, 1650, '女士', '均码', '棕色', '首饰', '手表', NULL, 0),
(92, 'img/list/links-of-london_5010.3825SILVER-STONE_001.jpg', 6, 'LINKS OF LONDON', '时尚S925银时个性圆形女士手链饰品', 875, 1750, '女士', '均码', '银色', '首饰', '手链', NULL, 0),
(93, 'img/list/links-of-london_5010.2802SILVER_001.jpg', 6, 'LINKS OF LONDON', '时尚S925银和镀玫瑰金时尚个性心形女士手链饰品', 875, 1750, '女士', '均码', '玫瑰金', '首饰', '手链', NULL, 0),
(94, 'img/list/links-of-london_5010.2561SILVER_001.jpg', 6, 'LINKS OF LONDON', '时尚925银潮流个性心形女士手链饰品', 735, 1470, '女士', '均码', '银色', '首饰', '手链', NULL, 0),
(95, 'img/list/links-of-london_5010.3735SILVER_001.jpg', 6, 'LINKS OF LONDON', '女士925银+镀18玫瑰金手链饰品', 730, 1460, '女士', '均码', '金色', '首饰', '手链', NULL, 0);

-- --------------------------------------------------------

--
-- 表的结构 `usertable`
--

CREATE TABLE `usertable` (
  `uid` int(11) NOT NULL,
  `uname` varchar(16) DEFAULT NULL,
  `upwd` varchar(16) NOT NULL,
  `ushopcar` varchar(1024) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `usertable`
--

INSERT INTO `usertable` (`uid`, `uname`, `upwd`, `ushopcar`) VALUES
(1, 'xietao', '123456', NULL),
(2, 'xt', '111', NULL),
(5, 'xiaowu', '520', NULL),
(8, 'chengqi', 'abc123', '[{"goodId":"24","goodSize":"38","goodNum":"3","goodDetail":{"gsrc":"img/list/moschino_J0491540616A1555_001.JPG","gbrand":"MOSCHINO","gname":"黑色女针织连衣裙","gnowprice":"4193","goldprice":"5990"}},{"goodId":"6","goodSize":"均码","goodNum":"4","goodDetail":{"gsrc":"img/list/links-of-london_5024.1355SILVER_001.jpg","gbrand":"LINKS OF LONDON","gname":"时尚S925银和镀18玫瑰金女士项链饰品","gnowprice":"890","goldprice":"1780"}},{"goodId":"14","goodSize":"6","goodNum":"3","goodDetail":{"gsrc":"img/list/lacoste_TH3881-9JU_001.jpg","gbrand":"Lacoste","gname":"男式T恤","gnowprice":"474","goldprice":"790"}},{"goodId":"18","goodSize":"46","goodNum":"2","goodDetail":{"gsrc":"img/list/lacoste_FH7053-166_001.jpg","gbrand":"Lacoste","gname":"男式短裤","gnowprice":"495","goldprice":"990"}}]'),
(7, 'taogege', '123456', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `goodstable`
--
ALTER TABLE `goodstable`
  ADD PRIMARY KEY (`gid`);

--
-- Indexes for table `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `uname` (`uname`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `goodstable`
--
ALTER TABLE `goodstable`
  MODIFY `gid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
--
-- 使用表AUTO_INCREMENT `usertable`
--
ALTER TABLE `usertable`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
