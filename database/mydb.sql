CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.32-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `name` varchar(45) DEFAULT 'admin',
  `add` varchar(45) DEFAULT NULL,
  `phone` varchar(13) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin@gmail.com','1234','admin',NULL,NULL),(2,'admintest@gmail.com','1234','admin',NULL,NULL),(3,'admin1@gmail.com','1234','admin',NULL,NULL),(4,'admin2@gmail.com','1234','admin',NULL,NULL),(5,'longlong@gmail.com','1234','admin',NULL,NULL);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `note` varchar(50) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_cat` int(11) DEFAULT NULL,
  `id_payment` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bill_user_idx` (`id_user`),
  KEY `bill_cat_idx` (`id_cat`),
  KEY `bill_payment_idx` (`id_payment`),
  CONSTRAINT `bill_cat` FOREIGN KEY (`id_cat`) REFERENCES `cat` (`id`),
  CONSTRAINT `bill_payment` FOREIGN KEY (`id_payment`) REFERENCES `payment` (`id`),
  CONSTRAINT `bill_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat`
--

DROP TABLE IF EXISTS `cat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `origin` varchar(100) NOT NULL,
  `type` varchar(10) NOT NULL,
  `price` varchar(45) NOT NULL,
  `features` varchar(45) NOT NULL,
  `quantity` int(11) NOT NULL,
  `img` text NOT NULL,
  `guide` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat`
--

LOCK TABLES `cat` WRITE;
/*!40000 ALTER TABLE `cat` DISABLE KEYS */;
INSERT INTO `cat` VALUES (1,'Mèo Chartreux','Thuần chủng','Hàn Quốc','Mèo con','12000','Rất xinh',1202,'https://petto.vn/wp-content/uploads/2019/02/nga10.jpg?v=1598607339','thích hợp nuôi ở Việt Nam'),(2,'Mèo Munchkin','Thuần chủng','Hoa Kỳ','Mèo con','36000','Dễ nuôi',3699,'https://upload.wikimedia.org/wikipedia/commons/4/44/Cat_img.jpg','thích hợp nuôi ở Việt Nam'),(3,'Mèo Miến Điện','Lai','Hàn Quốc','Mèo con','18000','Ngoan',1123,'https://media.npr.org/assets/img/2019/05/17/gettyimages-611696954_wide-7ccf1c1dbd6bf693f32364d6a0cd1b92c554859a-s800-c85.jpg','thích hợp nuôi ở Việt Nam'),(4,'Mèo Sphynx','Thuần chủng','Lào','Mèo con','52000','Lông mượt',4341,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cat_Sphynx._Kittens._img_11.jpg/640px-Cat_Sphynx._Kittens._img_11.jpg','thích hợp nuôi ở Việt Nam'),(5,'Mèo Bombay','Lai','Lào','Mèo con','62000','Lông dài',4200,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIS7hmd1uBZSutSg3HPOdy3xiEoBtpU10cNg&usqp=CAU','thích hợp nuôi ở Việt Nam'),(6,'Mèo Bengal','Thuần chủng','Hàn Quốc','Mèo con','12000','Rất xinh',2123,'https://thumbs.dreamstime.com/b/crazy-cat-tongue-hanging-out-40087599.jpg','thích hợp nuôi ở Việt Nam'),(7,'Mèo Angora','Lai','Thổ Nhĩ Kỳ','Mèo con','12000','Lông mượt',2123,'https://img.theculturetrip.com/wp-content/uploads/2018/05/maxpixel-freegreatpicture-com-persian-cat-the-difference-is-cat-cute-white-cat-1092371.jpg','thích hợp nuôi ở Việt Nam'),(8,'Mèo Mướp','Thuần chủng','Việt Nam','Mèo con','12000','Lông dài',1102,'https://images.unsplash.com/photo-1543082333-fc0b9cfee612?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHw%3D&w=1000&q=80','thích hợp nuôi ở Việt Nam'),(9,'Mèo Anh','Thuần chủng','NhatBan','Mèo con','22000','Lông mượt',1212,'https://genk.mediacdn.vn/thumb_w/600/2017/mwsnap004-1484714735215.png','thích hợp nuôi ở Việt Nam'),(10,'Mèo Anh','Lai','Việt Nam','Mèo con','52000','Lông Ngắn',5443,'https://info-imgs.vgcloud.vn/2020/08/25/10/su-that-ve-viec-nhuom-long-meo-bang-nghe-o-thai-lan-3.jpg','thích hợp nuôi ở Việt Nam'),(11,'Mèo Mun','Lai','Việt Nam','Mèo con','19000','Lông dài',3456,'https://gamek.mediacdn.vn/133514250583805952/2020/2/21/bestie-con-meo-den-2-20170407134700-158229014806951321928.jpg','thích hợp nuôi ở Việt Nam'),(12,'Mèo ba tư','Lai','Ba Tư','Mèo con','72000','Ngoan',1212,'https://bloganchoi.com/wp-content/uploads/2019/09/cat-v.jpg','thích hợp nuôi ở Việt Nam'),(13,'Mèo Angora','Thuần chủng','Thổ Nhĩ Kỳ','Mèo con','12000','Ngoan',1122,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjfnoy3SthriBegbXB8orZdUNmbX1Xo7HTA&usqp=CAU','thích hợp nuôi ở Việt Nam'),(14,'Mèo Khao Manee','Lai','Thổ Nhĩ Kỳ','Mèo con','21000','Rất xinh',2342,'https://petmaster.vn/petroom/wp-content/uploads/2020/04/meo-canh-14.jpg','thích hợp nuôi ở Việt Nam'),(15,'Mèo Vàng','Lai','Việt Nam','Mèo con','21000','Rất xinh',1212,'https://sohanews.sohacdn.com/thumb_w/660/160588918557773824/2020/8/24/9-1598262367031113733245.jpg','thích hợp nuôi ở Việt Nam'),(16,'Mèo Mỹ','Thuần chủng','Mỹ','Mèo con','52000','Lông ngắn',5424,'https://i.imgur.com/d0IcMLh.jpg','thích hợp nuôi ở Việt Nam'),(17,'Mèo Bungari ','Lai','Bungari ','Mèo con','42000','Ngoan',1212,'https://danviet.mediacdn.vn/thumb_w/640/upload/2-2019/images/2019-06-28/156171465633598-thumbnail.jpg','thích hợp nuôi ở Việt Nam'),(18,'Mèo Nga','Thuần chủng','Nga','Mèo con','32000','Ngoan',5435,'https://cdn.pose.com.vn/legacy/images/baiviet/201604/20160223-012059-yannews-23-6-2016_520x520.jpg','thích hợp nuôi ở Việt Nam'),(19,'Mèo Russian Blue','Lai','Nga','Mèo con','22000','Lông Ngắn',1212,'https://duypets.com/wp-content/uploads/2019/11/meo-nga-mat-xanh-long-ngan-10.jpg','thích hợp nuôi ở Việt Nam'),(20,'Mèo Angora','Thuần chủng','Thổ Nhĩ Kỳ','Mèo con','12000','Ngoan',1212,'https://www.chotot.com/kinhnghiem/wp-content/uploads/2019/11/meo-mat-2-mau-3-1024x655.jpg','thích hợp nuôi ở Việt Nam'),(21,'Mèo Khao Manee','Thuần chủng','Thái Lan','Mèo con','28000','Lông ngắn',2435,'https://hoiyeumeo.vn/public/upload/images/2%20b%C3%A9%20m%C3%A8o%20c%C3%B3%20%C4%91%C3%B4i%20m%E1%BA%AFt%202%20m%C3%A0u.jpg','thích hợp nuôi ở Việt Nam'),(22,'Mèo Siamese ','Thuần chủng','Thái Lan','Mèo con','12000','Ngoan',1212,'https://petmaster.vn/petroom/wp-content/uploads/2020/04/meo-canh-2.jpg','thích hợp nuôi ở Việt Nam'),(23,'Mèo Chinchilla','Lai','VietNam','Mèo con','12000','Lông Ngắn',5452,'https://petmaster.vn/petroom/wp-content/uploads/2020/04/meo-canh-7.jpg','thích hợp nuôi ở Việt Nam'),(24,'Mèo Scottish Fold','Thuần chủng','Scotland','Mèo con','12000','Lông ngắn',1212,'https://petmaster.vn/petroom/wp-content/uploads/2020/04/meo-canh-8.jpg','thích hợp nuôi ở Việt Nam'),(25,'Mèo Munchkin','Thuần chủng','Mỹ','Mèo con','52000','Lông Ngắn',3141,'https://petmaster.vn/petroom/wp-content/uploads/2020/04/meo-canh-9.jpg','thích hợp nuôi ở Việt Nam'),(26,'Mèo SherylDolls','Thuần chủng','Ba Tư ','Mèo con','123121','Lông ngắn',1231,'https://petmaster.vn/petroom/wp-content/uploads/2020/04/meo-canh-11.jpg','thích hợp nuôi ở Việt Nam');
/*!40000 ALTER TABLE `cat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_bill` int(11) NOT NULL,
  `purchase_date` varchar(45) NOT NULL,
  `total_cost` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (28,2,'2020-12-30 22:01:02','12000'),(29,3,'2020-12-30 22:01:53','12000'),(30,4,'2020-12-30 22:28:40','12000'),(31,5,'2020-12-30 23:08:11','36000'),(32,6,'2020-12-30 23:10:11','12000'),(33,7,'2020-12-30 23:27:32','12000'),(34,8,'2020-12-30 23:31:11','12000'),(35,9,'2020-12-30 23:34:52','12000'),(36,10,'2020-12-31 00:38:07','12000'),(37,11,'2020-12-31 00:51:25','12000'),(38,11,'2020-12-31 23:02:44','12000'),(39,11,'2020-12-31 23:05:01','12000');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) CHARACTER SET utf8 NOT NULL,
  `password` varchar(45) CHARACTER SET utf8 NOT NULL,
  `name` varchar(45) CHARACTER SET utf8 DEFAULT 'user',
  `add` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `phone` varchar(13) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'dangtrungdu12@gmail.com','123123','Dang Trung Du','Minh Khai','8626100'),(2,'nguyenvanmuoi@gmail.com','1234','Nguyen Van Muoi','HaNoi','0924352435'),(3,'dang@gmail.com','12345','Dang Trung Du','Nguyen Trai','0345352234'),(4,'ngoduykien@gmail.com','1234','Ngô Duy Kiên','Minh Khai','0912123111'),(5,'phanvanb@gmail.com','1234','Phan Văn B','QuangNam','0912311231'),(6,'buithic@gmail.com','1234','Bùi Thị Nam','Minh Khai','0912311231'),(7,'nguyentruong@gmail.com','1234','Truong Nguyen','PhuTho','0912312313'),(8,'trung4@gmail.com','1234','Trung','Minh Khai','0912311231'),(9,'trung5@gmail.com','1234','Trung','HCM','0912311231'),(10,'trung6@gmail.com','12341','user','VietNam','0123913123'),(11,'phanthinam@gmail.com','1234','Phan Thi Nam','ThanhHoa','0912311231'),(12,'nguyenthia@gmail.com','12342','Nguyen Thi Thia','CaMau','0912311231'),(13,'nguyenthia@gmail.com','1234','Nguyen Thị Thia','NhaTrang','0182343113'),(14,'nguyenvana@gmail.com','12344','Nguyen Van A','Minh Khai','0988311132'),(15,'nguyenthib@gmail.com','1234','Nguyen Thị b','DaNang','0112341123'),(16,'nguyenvanb@gmail.com','12345','Nguyen Van B','NhaTrang','0341231123'),(17,'nguyenthic@gmail.com','1234','Nguyen Thi C','ThanhHoa','0912311231'),(18,'nguyenvanc@gmail.com','1234','Nguyen Van C','VietNam','0988132411'),(19,'dangtrungdu@gmail.com','123456','Dang Trung Du','DongLao','0984640898'),(20,'nguyenvannam@gmail.com','123154','Nguyen Van Nam','NinhBinh','031223122'),(21,'test@gmail.com','12345','Nguyen Thi Test','VietNam','0223334121'),(22,'test123@gmail.com','12345123','Nguyen Van Test','NhaTrang','0913412333'),(23,'test4@gmail.com','1234','dangtrungdu12','ThanhHoa','012341234'),(41,'dangtrungdutest@gmail.com','du86262100','name',NULL,'phone');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mydb'
--

--
-- Dumping routines for database 'mydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-02 22:46:56
