/*
SQLyog Trial v13.1.5  (64 bit)
MySQL - 8.0.17 : Database - travel_springboot
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`travel_springboot` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `travel_springboot`;

/*Table structure for table `table_admin` */

DROP TABLE IF EXISTS `table_admin`;

CREATE TABLE `table_admin` (
  `Id` int(255) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Rname` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Age` int(255) DEFAULT NULL,
  `Birthday` datetime DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Tel` varchar(255) DEFAULT NULL,
  `PersonID` varchar(255) NOT NULL,
  `Picture` varchar(255) DEFAULT NULL,
  `State` int(11) DEFAULT '1',
  `CreateTime` datetime DEFAULT NULL,
  `UpdateTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `Role` int(255) DEFAULT NULL,
  PRIMARY KEY (`Id`,`PersonID`),
  KEY `Role` (`Role`),
  CONSTRAINT `table_admin_ibfk_1` FOREIGN KEY (`Role`) REFERENCES `table_role` (`role_Id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_admin` */

insert  into `table_admin`(`Id`,`Name`,`Rname`,`Password`,`Age`,`Birthday`,`Email`,`Tel`,`PersonID`,`Picture`,`State`,`CreateTime`,`UpdateTime`,`Role`) values 
(10,'root','后台管理员','123123',22,'2020-06-05 20:06:25','11151515@163.com','12161616','4000000xxxx141000',NULL,1,'2020-06-05 20:06:49','2020-06-05 20:06:57',1);

/*Table structure for table `table_funs` */

DROP TABLE IF EXISTS `table_funs`;

CREATE TABLE `table_funs` (
  `fun_Id` int(255) NOT NULL AUTO_INCREMENT,
  `fun_Name` varchar(255) DEFAULT NULL,
  `fun_Url` varchar(255) DEFAULT NULL,
  `fun_Target` varchar(255) DEFAULT NULL,
  `fun_Pid` int(255) DEFAULT NULL,
  PRIMARY KEY (`fun_Id`),
  KEY `fun_Pid` (`fun_Pid`),
  CONSTRAINT `table_funs_ibfk_1` FOREIGN KEY (`fun_Pid`) REFERENCES `table_funs` (`fun_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_funs` */

/*Table structure for table `table_goods` */

DROP TABLE IF EXISTS `table_goods`;

CREATE TABLE `table_goods` (
  `tg_id` int(11) NOT NULL AUTO_INCREMENT,
  `tg_title` longtext,
  `tg_context` text,
  `tg_price` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `tg_createTime` datetime DEFAULT NULL,
  `tu_id` int(11) DEFAULT NULL,
  `tg_status` int(1) DEFAULT '1',
  PRIMARY KEY (`tg_id`),
  KEY `tu_id` (`tu_id`),
  CONSTRAINT `table_goods_ibfk_1` FOREIGN KEY (`tu_id`) REFERENCES `table_user` (`u_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_goods` */

insert  into `table_goods`(`tg_id`,`tg_title`,`tg_context`,`tg_price`,`tg_createTime`,`tu_id`,`tg_status`) values 
(1,'去陕西旅游 去陕西旅游线路 西安北线两日游 ','去陕西旅游 去陕西旅游线路 西安北线两日游 国际旅行社 029-86699768 86690158 86690914 86699469网上线路信息和报价仅作参考 实际以电话咨询为主：029-86699768 86690158 86690914 86699469谢谢！','200','2020-06-06 09:30:29',2,1),
(2,'西安路线：兵马俑、华山、法门寺、延安、壶口瀑布五晚六日全线游','游秦始皇帝陵博物院世界第八大奇迹秦兵马俑；参观唐玄宗李隆基和四大美女杨贵妃爱情别苑“春寒赐浴华清池，温泉水滑洗凝脂”避寒胜地，唐华清宫遗址-—华清池；西安事变旧址--五间厅；攀登以险俊闻名天下的西岳华山之雄峰；去陕北延安看民居窑洞、听黄河壶口瀑布的咆哮、参观红色革命旧址－－枣园、杨家岭；龙年祭祖去黄帝陵；到佛家圣地法门寺为家人祈福安康；到武则天一代女皇的陵墓－－乾陵去探究无字碑的原由……西安旅游品质接待服务商：西安凯莱国际旅行社 古都西安欢迎您！','1510','2020-06-06 09:36:45',2,1),
(3,'西线一日游，法门寺旅游，乾陵旅游，西安到法门寺乾陵纯玩一日游','西线一日游，法门寺旅游，乾陵旅游，西安到法门寺乾陵纯玩一日游：\r\n西线纯玩一日游：景点游览时间更充裕，讲解更详细！保证游得尽兴玩得开心！\r\n&此行程为纯玩团，全程无购物无自费，有充足时间游览景区。 \r\n&当地导游全程陪同进行各景区的讲解，让您更加了解西安的历史文化。\r\n&各个线路推出西安市内免费接送，全程豪华旅游空调大巴车，让您的出行更加放心。\r\n&24小时电话服务热线，让您在西安出游更加便捷与舒心。\r\n陕西中国旅行社24小时预定咨询电话：13384944550（微信同号），029-87441114。','260','2020-06-06 09:38:11',2,1),
(4,'西安一日游必玩：西安兵马俑+华清池+骊山一日游【纯玩团】','西安旅游攻略 西安旅游多少钱 西安兵马俑旅游\r\n西安兵马俑必玩线路：兵马俑、华清池、骊山一日游\r\n西安一日游推荐：西安兵马俑+华清池+骊山一日游【纯玩团】\r\n西安旅游咨询电话：029-88859575 88859578\r\n24小时免费电话：029-88859578','360','2020-06-06 09:41:07',22,1),
(5,'西安兵马俑大雁塔广场一日游_纯玩购物_西安抖音网红线路推荐','赠：兵马俑博物馆专业讲解+耳麦使用！\r\n景点：兵马俑博物院 秦始皇陵 西安 大慈恩寺 大雁塔 大唐不夜城\r\n温馨提示：此行程接受2人以上报名，含2人；如有问题请联系客服。\r\n西安一日游_西安一日游有那些线路_西安一日游线路景点推荐_西安一日游有那些景点_西安一日游多钱_西安一日游报团_西安旅游有那些景点推荐_西安旅游去哪些景点好_西安一日游去哪些景点','450','2020-06-06 09:41:34',22,1),
(6,'推荐西安兵马俑一日游，兵马俑西安代表性旅游景点','陕西西安到兵马俑旅游、西安兵马俑旅游攻略、西安兵马俑华清池一日游线路、兵马俑旅游行程安排，华清池一日游，西安到兵马俑华清池旅游线路。\r\n陕西中国旅行社团队，散客天天发，独立小包团，散拼一日游，大品牌，品质有保证，我公司提供：西一日游、西安二日游、西安三日游、西安四日游、西安五日游、西安六日游、兵马俑一日游，华清池一日游，西安一日游， 西安乾陵法门寺一日游、西安华山一日游、延安壶口瀑布黄帝陵两日游，纯玩无购物。\r\n❤ 西安二环以内免费接送，免去您坐车不便；\r\n❤ 景点游览时间更充裕，讲解更详细！保证游得尽兴玩得开心！\r\n❤ 车载WiFi随时上网，随时随地晒美图，分享旅途好心情！\r\n❤ 24小时咨询电话：15809292338 座机：029-86393020 客服小南为您服务!','309','2020-06-06 09:43:13',2,1);

/*Table structure for table `table_ic_reply` */

DROP TABLE IF EXISTS `table_ic_reply`;

CREATE TABLE `table_ic_reply` (
  `ticr_id` int(11) NOT NULL AUTO_INCREMENT,
  `tic_id` int(11) DEFAULT NULL,
  `ticr_context` text,
  `ticr_createTime` datetime DEFAULT NULL,
  `ticr_customer_replyId` int(11) DEFAULT NULL,
  `tu_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`ticr_id`),
  KEY `FK_Relationship_5` (`tic_id`),
  KEY `tu_id` (`tu_id`),
  CONSTRAINT `FK_Relationship_5` FOREIGN KEY (`tic_id`) REFERENCES `table_information_comment` (`tic_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `table_ic_reply_ibfk_1` FOREIGN KEY (`tu_id`) REFERENCES `table_user` (`u_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_ic_reply` */

insert  into `table_ic_reply`(`ticr_id`,`tic_id`,`ticr_context`,`ticr_createTime`,`ticr_customer_replyId`,`tu_id`) values 
(1,1,'首个资讯下评论的回复1','2020-06-05 22:41:45',NULL,1),
(2,1,'首个资讯下评论的回复2','2020-06-05 22:42:08',NULL,1),
(3,1,'首个资讯下评论的回复1又被回复了','2020-06-05 22:42:54',1,21),
(4,1,'又被回复了','2020-06-05 23:31:08',3,1),
(5,1,'又又被回复了','2020-06-06 00:27:49',4,21),
(7,1,'又又又','2020-06-06 01:10:06',5,1),
(8,1,'我回复了id是4的回复','2020-06-06 01:13:06',4,1);

/*Table structure for table `table_information` */

DROP TABLE IF EXISTS `table_information`;

CREATE TABLE `table_information` (
  `ti_id` int(11) NOT NULL AUTO_INCREMENT,
  `ti_title` longtext,
  `ti_context` text,
  `ti_createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`ti_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_information` */

insert  into `table_information`(`ti_id`,`ti_title`,`ti_context`,`ti_createTime`) values 
(2,'周末逛城墙 | 在护城河畔一起触碰城市的脉动','人说老西安的一天\r\n\r\n是从西安城墙开始的\r\n\r\n\r\n\r\n世界上很多历史悠久的古城\r\n\r\n都有一条环城四周的护城河\r\n\r\n但有所不同的是\r\n\r\n西安城墙脚下的护城河\r\n\r\n不仅是一道靓丽的风景线\r\n\r\n更是古城西安的形象和标识之一\r\n\r\n\r\n\r\n\r\n\r\n微信图片_20200527103426.jpg\r\n\r\n\r\n一波碧水绕长安\r\n\r\n护城河水环绕着这座古城\r\n\r\n春醉、夏嗨、秋藏、冬舞\r\n\r\n一年四季\r\n\r\n每一个时令都有它独特的风韵\r\n\r\n\r\n\r\n\r\n\r\n微信图片_20200527103434.jpg\r\n\r\n\r\n时值五月末\r\n\r\n透蓝的天空\r\n\r\n鸟语蝉鸣\r\n\r\n古城的人们\r\n\r\n在护城河畔\r\n\r\n伴随着清晨的第一缕曙光\r\n\r\n开启新的一天\r\n\r\n\r\n\r\n\r\n\r\n\r\n“一湖碧水一抹霞，一眼孤帆一树花。”\r\n\r\n行走在碧波荡漾的护城河两岸\r\n\r\n抬眼处\r\n\r\n是世界现存历史最悠久\r\n\r\n规模最宏大、保存最完整的古代城垣建筑\r\n\r\n\r\n\r\n\r\n\r\n微信图片_20200527103458.jpg\r\n微信图片_20200527103502.jpg\r\n\r\n\r\n城墙下环城公园里的人们\r\n\r\n晨练、遛鸟、吼秦腔\r\n\r\n散步、下棋、会老友\r\n\r\n享受着美好的都市清闲\r\n\r\n\r\n\r\n\r\n\r\n微信图片_20200527103505.jpg\r\n\r\n\r\n\r\n让天更蓝、地更绿\r\n\r\n水更清是每个人的心愿\r\n\r\n西安护城河这湾碧水将助力大西安\r\n\r\n实现“蓝天、碧水、青山、净土”的生态目标\r\n\r\n努力打造人居环境优美的生态城市\r\n\r\n\r\n\r\n微信图片_20200527103508.jpg\r\n\r\n微信图片_20200527103512.jpg\r\n微信图片_20200527103515.jpg\r\n\r\n静中有美 美中有雅\r\n\r\n是一座城的静雅\r\n\r\n正值初夏\r\n\r\n微风习习\r\n\r\n快带你的小伙伴一起\r\n\r\n探索护城河边的美吧','2020-06-05 21:57:28'),
(3,'来蓝田，给你初夏的仪式感~','转眼之间\r\n\r\n已至初夏\r\n\r\n花鸟更替，绿叶渐深\r\n\r\n蝉鸣渐起，温情四溢\r\n\r\n蓝田的初夏\r\n\r\n满目皆是小美好\r\n\r\n去热情拥抱一切\r\n\r\n给初夏一个该有的仪式感吧！\r\n\r\n\r\n\r\n微信图片_20200527100832.jpg\r\n\r\n\r\n\r\n01\r\n\r\n登山\r\n\r\n\r\n\r\n邀三两好友\r\n\r\n走进“天下第一孝山”王顺山\r\n在“天然氧吧”里深呼吸吧！\r\n\r\n微信图片_20200527100837.jpg\r\n\r\n这里流水潺潺，鸟儿鸣啼\r\n一片世外桃源的景象\r\n\r\n伴着山间温柔的风\r\n将一花一木尽收眼底\r\n\r\n微信图片_20200527100840.jpg\r\n\r\n02\r\n\r\n采摘\r\n\r\n\r\n和家人朋友一起\r\n在洩湖镇、白鹿原等地\r\n采摘新鲜的大樱桃\r\n\r\n微信图片_20200527100844.jpg\r\n\r\n咬一口香甜的大樱桃\r\n闻一闻空气中属于五月的味道\r\n享受舌尖上的鲜美\r\n体验惬意的乡土情趣\r\n\r\n微信图片_20200527100849.jpg\r\n\r\n\r\n03\r\n\r\n漫步\r\n\r\n\r\n闲暇时光\r\n在灞河河畔悠然漫步\r\n和爱人一起手牵手\r\n览尽旖旎的灞河风光\r\n\r\n微信图片_20200527100852.jpg\r\n\r\n夕阳西下时\r\n再与绵延的远山一起\r\n迎接金色霞光的洗礼\r\n静心感受浪漫的气息\r\n微信图片_20200527100855.jpg\r\n\r\n04\r\n\r\n骑行\r\n\r\n\r\n\r\n清风送爽，又不躁热\r\n\r\n恰是单车骑行的好时节\r\n\r\n骑上心爱的单车\r\n\r\n和小伙伴们一路向汤峪镇前进\r\n\r\n\r\n\r\n微信图片_20200527100859.jpg\r\n\r\n\r\n\r\n在满眼绿意中\r\n\r\n呼吸着清新空气\r\n\r\n感受着风的追逐\r\n\r\n体验加速度带来的淋漓快感\r\n\r\n\r\n\r\n微信图片_20200527100903.jpg\r\n\r\n五月\r\n和风徐徐，日暖花香\r\n蓝田初夏的小美好\r\n等你一一体验','2020-06-05 22:02:16'),
(4,'厉害了，秦始皇帝陵博物院荣登榜首！','5·18国际博物馆日即将到来，一大波精彩纷呈的文化活动来袭，哪些是一定要去打卡的热门博物馆？\r\n\r\n5月15日，高德地图发布了疫情后最新的全国热门博物馆榜单，秦始皇帝陵博物院超过故宫，居全国十大热门博物馆首位。\r\n\r\n1.jpg\r\n\r\n这份最新出炉的博物馆榜单是基于疫情防控阶段后首个“五一”小长假的出行洞察。数据显示，北京、西安、南京这三个文化古都，均是文化之旅的热门打卡地。\r\n\r\n\r\n\r\n\r\n2.jpg\r\n\r\n\r\n\r\n\r\n\r\n在高德地图覆盖的全国近5000家博物馆中，秦始皇帝陵博物院居全国十大热门博物馆首位，故宫、南京博物院、成都武侯祠博物馆、杜甫草堂博物馆、苏州博物馆、陕西历史博物馆、上海博物馆、湖南省博物馆和中国国家博物馆入围TOP10。\r\n\r\n\r\n\r\n\r\n3.jpg\r\n\r\n\r\n\r\n\r\n\r\n参观博物馆无疑是人们了解目的地文化的方式之一。此次疫情的暴发，博物馆体验也被重新定义。\r\n\r\n直播活动、在线看展……在被憋在家不能出门的这段日子里，“云游”“听游”“学游”逐渐成为热词。高德景区随身听语音导览服务自去年国庆节上线以来，已经覆盖全国超3000个景区，其中包含逾百家博物馆。\r\n\r\n以榜单上的十大热门博物馆为例，有著名文化学者马未都和著名演员王刚讲解的故宫、网红小张爱胡窜讲解的《探秘陕历博的绝世珍宝》、演员徐晟铠场景再现式讲述的《世界第八大奇迹：兵马俑》等，这些深度文化讲解不论是在博物馆内，还是在家都可以收听，成为打开博物馆的不一样的新方式。\r\n\r\n面对各大博物馆举办的精彩纷呈的线下文化活动，疫情防控依然不能放松。\r\n\r\n提醒计划参观的市民，大部分免费开放的博物馆需要提前预约，出发前了解实时客流情况和高峰时段，尽量错峰出行。','2020-06-05 22:06:52');

/*Table structure for table `table_information_comment` */

DROP TABLE IF EXISTS `table_information_comment`;

CREATE TABLE `table_information_comment` (
  `tic_id` int(11) NOT NULL AUTO_INCREMENT,
  `ti_id` int(11) DEFAULT NULL,
  `tic_context` text,
  `tic_createTime` datetime DEFAULT NULL,
  `tu_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`tic_id`),
  KEY `FK_Relationship_4` (`ti_id`),
  KEY `tu_id` (`tu_id`),
  CONSTRAINT `FK_Relationship_4` FOREIGN KEY (`ti_id`) REFERENCES `table_information` (`ti_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `table_information_comment_ibfk_1` FOREIGN KEY (`tu_id`) REFERENCES `table_user` (`u_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_information_comment` */

insert  into `table_information_comment`(`tic_id`,`ti_id`,`tic_context`,`tic_createTime`,`tu_id`) values 
(1,2,'资讯下的首个评论在','2020-06-05 22:41:21',21);

/*Table structure for table `table_order` */

DROP TABLE IF EXISTS `table_order`;

CREATE TABLE `table_order` (
  `to_id` int(11) NOT NULL AUTO_INCREMENT,
  `tps_id` int(11) DEFAULT NULL,
  `tg_id` int(11) DEFAULT NULL,
  `to_price` double(10,2) DEFAULT NULL,
  `to_name` longtext,
  `to_status` int(11) DEFAULT '1',
  `to_createTime` datetime DEFAULT NULL,
  `tu_id` int(11) DEFAULT NULL,
  `to_title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`to_id`),
  KEY `FK_Relationship_6` (`tg_id`),
  KEY `FK_Relationship_7` (`tps_id`),
  KEY `tu_id` (`tu_id`),
  CONSTRAINT `FK_Relationship_6` FOREIGN KEY (`tg_id`) REFERENCES `table_goods` (`tg_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_Relationship_7` FOREIGN KEY (`tps_id`) REFERENCES `table_post_sale` (`tps_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `table_order_ibfk_1` FOREIGN KEY (`tu_id`) REFERENCES `table_user` (`u_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_order` */

insert  into `table_order`(`to_id`,`tps_id`,`tg_id`,`to_price`,`to_name`,`to_status`,`to_createTime`,`tu_id`,`to_title`) values 
(1,2,1,240.00,'服务1,服务2',2,'2020-06-05 20:14:20',1,'去陕西旅游 去陕西旅游线路 西安北线两日游 '),
(2,NULL,1,240.00,'服务1,服务2',1,'2020-06-06 11:09:08',21,'去陕西旅游 去陕西旅游线路 西安北线两日游 '),
(3,3,1,220.00,'服务1',2,'2020-06-06 11:17:57',24,'去陕西旅游 去陕西旅游线路 西安北线两日游 '),
(4,NULL,6,319.00,'无',1,'2020-06-06 12:02:44',1,'推荐西安兵马俑一日游，兵马俑西安代表性旅游景点'),
(10,9,3,220.00,'无',1,'2020-06-06 23:43:13',21,'xxxx'),
(11,10,4,333.00,'无',1,'2020-06-06 23:43:48',1,'xxx'),
(12,11,5,444.00,'无',1,'2020-06-06 23:43:50',21,'aaa'),
(13,12,6,555.00,'无',1,'2020-06-06 23:46:13',24,'bbb');

/*Table structure for table `table_permissions` */

DROP TABLE IF EXISTS `table_permissions`;

CREATE TABLE `table_permissions` (
  `role_id` int(255) DEFAULT NULL,
  `funs_id` int(255) DEFAULT NULL,
  KEY `role_id` (`role_id`),
  KEY `funs_id` (`funs_id`),
  CONSTRAINT `table_permissions_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `table_role` (`role_Id`),
  CONSTRAINT `table_permissions_ibfk_2` FOREIGN KEY (`funs_id`) REFERENCES `table_funs` (`fun_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_permissions` */

/*Table structure for table `table_post_sale` */

DROP TABLE IF EXISTS `table_post_sale`;

CREATE TABLE `table_post_sale` (
  `tps_id` int(11) NOT NULL AUTO_INCREMENT,
  `to_id` int(11) DEFAULT NULL,
  `tps_score` int(11) DEFAULT NULL,
  `tps_commment` text,
  `tu_id` int(11) DEFAULT NULL,
  `tps_createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`tps_id`),
  KEY `FK_Relationship_8` (`to_id`),
  KEY `tu_id` (`tu_id`),
  CONSTRAINT `FK_Relationship_8` FOREIGN KEY (`to_id`) REFERENCES `table_order` (`to_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `table_post_sale_ibfk_1` FOREIGN KEY (`tu_id`) REFERENCES `table_user` (`u_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_post_sale` */

insert  into `table_post_sale`(`tps_id`,`to_id`,`tps_score`,`tps_commment`,`tu_id`,`tps_createTime`) values 
(2,1,4,'5星好评给你4星怕你骄傲',1,'2020-06-06 11:07:43'),
(3,3,1,'差评1星',24,'2020-06-06 11:18:14'),
(9,10,1,'差评',21,'2020-06-06 23:44:29'),
(10,11,1,'差评',1,'2020-06-06 23:45:26'),
(11,12,2,'差评\r\n',21,'2020-06-06 23:45:45'),
(12,13,1,'差评',24,'2020-06-06 23:46:44');

/*Table structure for table `table_role` */

DROP TABLE IF EXISTS `table_role`;

CREATE TABLE `table_role` (
  `role_Id` int(255) NOT NULL AUTO_INCREMENT,
  `role_Name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_role` */

insert  into `table_role`(`role_Id`,`role_Name`) values 
(1,'管理员'),
(2,'店铺拥有者'),
(3,'消费者');

/*Table structure for table `table_scenery` */

DROP TABLE IF EXISTS `table_scenery`;

CREATE TABLE `table_scenery` (
  `ts_id` int(11) NOT NULL AUTO_INCREMENT,
  `ts_url` varchar(255) DEFAULT NULL,
  `ts_descript` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ts_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_scenery` */

insert  into `table_scenery`(`ts_id`,`ts_url`,`ts_descript`) values 
(1,'img/scen/kgorl2.jpg','西湖美景'),
(2,'img/scen/32fa828ba61ea8d33f5ba7ae9d0a304e251f581b.jpg','长城八达岭');

/*Table structure for table `table_server` */

DROP TABLE IF EXISTS `table_server`;

CREATE TABLE `table_server` (
  `ts_id` int(11) NOT NULL AUTO_INCREMENT,
  `tg_id` int(11) DEFAULT NULL,
  `ts_name` varchar(255) DEFAULT NULL,
  `ts_price` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ts_id`),
  KEY `FK_Relationship_3` (`tg_id`),
  CONSTRAINT `FK_Relationship_3` FOREIGN KEY (`tg_id`) REFERENCES `table_goods` (`tg_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_server` */

insert  into `table_server`(`ts_id`,`tg_id`,`ts_name`,`ts_price`) values 
(1,1,'服务1','10'),
(2,1,'服务2','30'),
(3,2,'服务1','20'),
(4,2,'服务2','40');

/*Table structure for table `table_tg_img` */

DROP TABLE IF EXISTS `table_tg_img`;

CREATE TABLE `table_tg_img` (
  `tg_id` int(11) DEFAULT NULL,
  `ttgi_url` longtext,
  `ttgi_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ttgi_id`),
  KEY `FK_Relationship_2` (`tg_id`),
  CONSTRAINT `FK_Relationship_2` FOREIGN KEY (`tg_id`) REFERENCES `table_goods` (`tg_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_tg_img` */

insert  into `table_tg_img`(`tg_id`,`ttgi_url`,`ttgi_id`) values 
(1,'img/goods/img/ffab_m.jpg',1),
(2,'img/goods/img/3afd_m.jpg',2),
(4,'img/goods/img/926a_m.jpg',3),
(5,'img/goods/img/e5b3_m.jpg',4),
(6,'img/goods/img/403b_m.jpg',5),
(3,'img/goods/img/db3a_m.jpg',6),
(1,'img/goods/img/05_03.jpg',7);

/*Table structure for table `table_ti_img` */

DROP TABLE IF EXISTS `table_ti_img`;

CREATE TABLE `table_ti_img` (
  `ti_id` int(11) DEFAULT NULL,
  `ttii_url` longtext,
  `ttii_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ttii_id`),
  KEY `FK_Relationship_1` (`ti_id`),
  CONSTRAINT `FK_Relationship_1` FOREIGN KEY (`ti_id`) REFERENCES `table_information` (`ti_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_ti_img` */

insert  into `table_ti_img`(`ti_id`,`ttii_url`,`ttii_id`) values 
(2,'img/0d01008a-f86b-43cc-9a20-52d7e8407696.jpg',1),
(2,'img/30e84b99-4217-452f-ac5c-9c4ab4c8ed3e.jpg',2),
(2,'img/58aa6d05-8847-44ed-ab86-5923ca0feb73.jpg',3),
(2,'img/215fbc6f-f402-4786-9f68-6d975445cae1.jpg',4),
(2,'img/42551c55-dbc4-4303-ac3c-00a73a48ab0e.jpg',5),
(2,'img/a61a6363-0a5e-481b-8c5d-99382f216828.jpg',6),
(2,'img/c9200e8f-fb22-4f27-8cbf-77da44956d3d.jpg',7),
(2,'img/dfa4a07f-3efa-4a9b-9bd2-8f11d4e5d06f.jpg',8),
(3,'img/0cb8239d-9256-4d4f-815b-3542d4c90b4b.jpg',9),
(3,'img/d0933aa3-e901-4ac5-91ab-622d70e55a8b.jpg',10),
(3,'img/14442987-0f8f-46e0-b195-f73153ec510d.jpg',11),
(3,'img/8b8d692e-5162-4c52-9a47-91b4160db066.jpg',12),
(3,'img/8040e478-13c0-4e93-8d53-c8d3ac1a6cf2.jpg',13),
(3,'img/1437aac0-dd40-4daf-bd88-11fbf058b9b3.jpg',14),
(3,'img/05876f3b-61df-45a5-af9a-1ead5465e3a8.jpg',15),
(3,'img/0ce1679d-3392-455f-b33f-d370b0f2fe30.jpg',16),
(3,'img/ecf5322a-0590-4dba-b697-fe67e34e3cd4.jpg',17),
(4,'img/f2be6f0c-637e-4973-8314-50da3e15a7d2.jpg',18),
(4,'img/43d04180-dc48-4c72-8945-06d899f35356.jpg',19),
(4,'img/583180bc-b801-4ddd-b1bb-9f3e0cbfa5d9.jpg',20);

/*Table structure for table `table_user` */

DROP TABLE IF EXISTS `table_user`;

CREATE TABLE `table_user` (
  `u_id` int(255) NOT NULL AUTO_INCREMENT,
  `u_name` varchar(255) DEFAULT NULL,
  `u_nickname` varchar(255) DEFAULT NULL,
  `u_password` varchar(255) DEFAULT NULL,
  `u_rname` varchar(255) DEFAULT NULL,
  `u_tel` varchar(255) DEFAULT NULL,
  `u_email` varchar(255) DEFAULT NULL,
  `u_sex` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '0',
  `u_birthday` datetime DEFAULT NULL,
  `u_adress` text,
  `u_personID` varchar(255) DEFAULT NULL,
  `u_picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `u_stuta` int(10) DEFAULT '1',
  `u_m_tel` varchar(255) DEFAULT NULL,
  `u_fixed_tel` varchar(255) DEFAULT NULL,
  `u_nation` varchar(10) DEFAULT NULL,
  `u_poli_outlook` varchar(20) DEFAULT NULL,
  `u_native_place` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `u_religious_belief` varchar(10) DEFAULT NULL,
  `CreateTime` datetime DEFAULT NULL,
  `UpdateTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `role_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`u_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `table_user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `table_role` (`role_Id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `table_user` */

insert  into `table_user`(`u_id`,`u_name`,`u_nickname`,`u_password`,`u_rname`,`u_tel`,`u_email`,`u_sex`,`u_birthday`,`u_adress`,`u_personID`,`u_picture`,`u_stuta`,`u_m_tel`,`u_fixed_tel`,`u_nation`,`u_poli_outlook`,`u_native_place`,`u_religious_belief`,`CreateTime`,`UpdateTime`,`role_id`) values 
(1,'customer','消费者','123123','消费者真实姓名','1001010086','1001010086@163.com','1','2020-06-05 20:08:15',NULL,'400000xxxxx400000',NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,'2020-06-06 23:58:19','2020-06-06 23:58:20',3),
(2,'shopper','店铺老板','123123','店铺老板真名','100010088','100010088@163.com','2','2020-06-05 20:10:24',NULL,'400000xxxxx400001',NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,'2020-06-06 23:58:21','2020-06-06 23:58:22',2),
(21,'customer2','消费者2','123123','消费者真实姓名2','1001010089','1001010089@163.com','2','2020-06-05 23:07:38',NULL,'400000xxxxx400002',NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,'2020-06-06 23:58:23','2020-06-06 23:58:25',3),
(22,'test1','7993cd18-2860-40c6-a2e7-007c38be92e2','1231243',NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,'2020-06-06 01:29:18','2020-06-07 00:00:34',2),
(24,'test2','7788uy','1231243','7788uy',NULL,NULL,'0',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,'2020-06-06 01:31:48','2020-06-06 09:18:54',3);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
