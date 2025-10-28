-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: onementor
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `coach_id` int DEFAULT NULL,
  `slot_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1,1,1,1,'2025-09-16 05:00:16'),(2,1,2,7,'2025-09-17 04:54:03'),(3,21,1,10,'2025-09-23 14:29:49');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coach`
--

DROP TABLE IF EXISTS `coach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coach` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coach`
--

LOCK TABLES `coach` WRITE;
/*!40000 ALTER TABLE `coach` DISABLE KEYS */;
INSERT INTO `coach` VALUES (1,'Suriya Kumar','suriya@example.com','9876543210'),(2,'Anitha R','anitha@example.com','9123456780');
/*!40000 ALTER TABLE `coach` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coaches`
--

DROP TABLE IF EXISTS `coaches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coaches` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `skill` varchar(255) DEFAULT NULL,
  `rating` decimal(2,1) DEFAULT NULL,
  `availability` varchar(100) DEFAULT NULL,
  `isAI` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coaches`
--

LOCK TABLES `coaches` WRITE;
/*!40000 ALTER TABLE `coaches` DISABLE KEYS */;
/*!40000 ALTER TABLE `coaches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coachprofile`
--

DROP TABLE IF EXISTS `coachprofile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coachprofile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `category` varchar(50) NOT NULL,
  `bio` text,
  `skills` json DEFAULT NULL,
  `other_skills` json DEFAULT NULL,
  `resume` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coachprofile`
--

LOCK TABLES `coachprofile` WRITE;
/*!40000 ALTER TABLE `coachprofile` DISABLE KEYS */;
INSERT INTO `coachprofile` VALUES (1,'suriya','suri','fitness','i am gymer','[\"weight Lift\"]','[]','1758773854521.pdf','2025-09-25 10:11:51'),(2,'vino','vino','career','i am coder','[\"python\"]','[]','1758775678.pdf','2025-09-25 10:18:59');
/*!40000 ALTER TABLE `coachprofile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interactions`
--

DROP TABLE IF EXISTS `interactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `question` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `interactions_ibfk_1` (`user_id`),
  CONSTRAINT `interactions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `coachprofile` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interactions`
--

LOCK TABLES `interactions` WRITE;
/*!40000 ALTER TABLE `interactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `interactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `managecoachslots`
--

DROP TABLE IF EXISTS `managecoachslots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `managecoachslots` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `coach_id` int NOT NULL,
  `is_booked` tinyint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `managecoachslots`
--

LOCK TABLES `managecoachslots` WRITE;
/*!40000 ALTER TABLE `managecoachslots` DISABLE KEYS */;
INSERT INTO `managecoachslots` VALUES (1,'2025-09-18','17:38:00','05:37:00','2025-09-12 09:07:08',1,1),(2,'2025-09-16','17:04:00','19:06:00','2025-09-15 08:34:52',1,0),(9,'2025-09-25','20:29:00','21:29:00','2025-09-23 12:00:01',1,0),(10,'2025-09-25','20:37:00','21:37:00','2025-09-23 12:07:17',1,1),(11,'2025-09-25','19:58:00','21:58:00','2025-09-23 12:28:26',25,0),(13,'2025-10-01','00:44:00','02:44:00','2025-09-24 05:14:28',25,0);
/*!40000 ALTER TABLE `managecoachslots` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `otps`
--

DROP TABLE IF EXISTS `otps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `otps` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `otp_hash` varchar(255) NOT NULL,
  `expires_at` datetime NOT NULL,
  `used` tinyint DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `otps`
--

LOCK TABLES `otps` WRITE;
/*!40000 ALTER TABLE `otps` DISABLE KEYS */;
INSERT INTO `otps` VALUES (1,'suriyaa1031@gmail.com','$2b$10$ScFFww6mHslEOP9sH0x3IuETwfQfUqjo6EWWRUPea2qa63YfjeWdG','2025-09-19 16:19:07',1,'2025-09-19 10:39:06'),(2,'suriya.ss9994481@gmail.com','$2b$10$dUbUZZS.BipMn4VEpaCEJereV.w1VfSrOxvxEurZtlVqMW7IOT5ma','2025-09-19 16:26:11',1,'2025-09-19 10:46:10'),(3,'suriya.ss9994481@gmail.com','$2b$10$iEzZB3bAUwagUazkyVUiheEhRVrFLzS9vd.AcMsonhqlr1AE74Bfy','2025-09-19 16:31:37',1,'2025-09-19 10:51:36'),(4,'suriya.ss9994481@gmail.com','$2b$10$iECDyrludp76jj9mi85LzOZXxp/PbbRtZBknBBr2q3dEP3Il9oiem','2025-09-19 16:47:35',1,'2025-09-19 11:07:35'),(5,'suriya.ss9994481@gmail.com','$2b$10$27ojBu2JXKlFxpnxYFtCPuJKf4mPrcgYn1aCnjJh9FTkB9WbyfmEa','2025-09-19 16:52:55',1,'2025-09-19 11:12:54'),(6,'suriya.ss9994481@gmail.com','$2b$10$RmO2AnspeCIITdYTd3hFVuIvxtp2G9Huy/FBy.B4KqhP8Wb6I/g1q','2025-09-20 14:58:32',1,'2025-09-20 09:18:32'),(7,'suriyaa1031@gmail.com','$2b$10$ZJe7k1MvQ2ItEnuQFLkheue4Veq365d0KFrDzPuQQAD6quJpSD2JO','2025-09-20 15:03:05',0,'2025-09-20 09:23:05'),(8,'suriyaa1031@gmail.com','$2b$10$K6YeirPCOqbNhFf/KSjb9ujV052XRUsDKTyDLNWqc9PcL0.VpEhmW','2025-09-20 15:04:07',1,'2025-09-20 09:24:07'),(9,'suriya.ss9994481@gmail.com','$2b$10$gBiD9ZqP7iLMUIP/rFTty.CrWBVACylFUvhQH1d6JLXM9G.ZDe.eC','2025-09-20 15:57:57',1,'2025-09-20 10:17:56'),(10,'suriya.ss9994481@gmail.com','$2b$10$o6Pknhp7ZTXyIJU8OBwiYO8MDksX59i32PE.80fry1.XJdeMV298e','2025-09-20 16:06:26',1,'2025-09-20 10:26:26'),(11,'suriya.ss9994481@gmail.com','$2b$10$IiWf8sjsEPg2n3/0n2hh8u1TuxbQhzcTLzfWmAN2Cd9afFhun0hVG','2025-09-20 16:10:19',1,'2025-09-20 10:30:18'),(12,'suriyaa1031@gmail.com','$2b$10$3R0qRmbug27m97P6.jYuu.7EDmZ2Ip8wLBbdPjSDX6/Bt3SOT0myK','2025-09-20 16:15:06',0,'2025-09-20 10:35:06'),(13,'suriyaa1031@gmail.com','$2b$10$.XUdYJxKRIjFePaqY3JnoexLApBK3hyRImC/dd1Aq2nUyCCcpZVh.','2025-09-20 16:15:51',1,'2025-09-20 10:35:50'),(14,'suriya.ss9994481@gmail.com','$2b$10$PYdrPgVORMkE3CvsyBsSgO3zZX1fDO4EklKJIy1weqxTDrAIMfy8u','2025-09-20 16:18:08',1,'2025-09-20 10:38:08'),(15,'vivi@gmail.com','$2b$10$dfgkH8TASZ.V6uGqo76eMu326548FqVZpytLshVEq233HFDFVCmnC','2025-09-20 16:23:53',0,'2025-09-20 10:43:53'),(16,'vivi@gmail.com','$2b$10$h6tSLchzYeaoNeKbKo0/H.E0aWj6mNgWA/C7mq5ON0HOIhJRkeZM6','2025-09-20 16:27:59',0,'2025-09-20 10:47:58'),(17,'vivi@gmail.com','$2b$10$IDm4QlW/d9vyGAnqmvM7/ubl22wAsr8QZxHXA1W8UP6ly.cTTFEWG','2025-09-20 16:34:17',0,'2025-09-20 10:54:16'),(18,'suriya.ss9994481@gmail.com','$2b$10$TMafl4adw9aWKs0nuCXeGOPbP0bnh5YfZDQoYakMVKYwMUf2a3UTi','2025-09-20 16:36:32',0,'2025-09-20 10:56:31'),(19,'suriya.ss9994481@gmail.com','$2b$10$V8H4AANaGHSHLaiQ/Cd35OikPXPLVea23c5J4PyJoppNGwNfkuvKG','2025-09-20 16:41:01',0,'2025-09-20 11:01:00'),(20,'suriya.ss9994481@gmail.com','$2b$10$dLLm2C1wzQ4D0AK/MgM/.erOXMSZJFV7C.lhdAHSv3p3JFT0Osr0a','2025-09-20 16:41:29',1,'2025-09-20 11:01:29'),(21,'suriya.ss9994481@gmail.com','$2b$10$Erjgp3YMguZieRjC4m4pden1BCUwWhD2785Ermxmwg5ZBo3hjqCim','2025-09-21 15:40:09',1,'2025-09-21 10:00:08'),(22,'suriya.ss9994481@gmail.com','$2b$10$IJznQLXBWjufHq1qpuyfxeurTa06pJbRm0vOu/dyTjuEu/EIK0sra','2025-09-21 15:41:26',0,'2025-09-21 10:01:25'),(23,'suriya.ss9994481@gmail.com','$2b$10$7chZMr4rTj6YbQGWTvDvO.SZMrc8rEUHljkw8feE/YomcT2Eyeu1q','2025-09-21 15:41:31',1,'2025-09-21 10:01:30'),(24,'suriyaa1031@gmail.com','$2b$10$55Sq65EXHjKDLvNqzPdJ5.Mju.oahe8jpOpoP.k46pYYipJ7LEn22','2025-09-21 15:42:25',0,'2025-09-21 10:02:25'),(25,'suriya.ss9994481@gmail.com','$2b$10$Z4T4owF.RLJZ65j4.MYw7Oyq0rlVJJ6KaXhn2t6mQhKZ0vPqFgXaK','2025-09-21 15:43:41',1,'2025-09-21 10:03:40'),(26,'suriya.ss9994481@gmail.com','$2b$10$IqCyNlniOLkNl.DeQnPPg.Vb3CjFplBrf.osWAN3hUFmU2dl6WKxi','2025-09-21 19:22:19',1,'2025-09-21 13:42:18'),(27,'suriya.ss9994481@gmail.com','$2b$10$yOBAB8GQHApOObQfpTmfOucvcAT2ahWbfTXfziNhuxPSLYoK0118C','2025-09-21 19:46:08',1,'2025-09-21 14:06:07'),(28,'suriya.ss9994481@gmail.com','$2b$10$17nC6D0MZIcnSzKh23jUjOAEeGNcJ44tT.8hwhZJQPq0Erk5c3agW','2025-09-21 19:58:22',0,'2025-09-21 14:18:22'),(29,'suriya.ss9994481@gmail.com','$2b$10$bVuPb0qpIB3qj63f3molMeou.lFJN.C4zs9AQ1rC9NYv1XPz7awc.','2025-09-21 20:03:44',0,'2025-09-21 14:23:44'),(30,'suriya.ss9994481@gmail.com','$2b$10$23jgnR8Wn.hnB4qZd564NOzzBzEatG.ccZWUWu6aFXV3ANXfZU7QG','2025-09-21 20:14:45',1,'2025-09-21 14:34:45'),(31,'suriya.ss9994481@gmail.com','$2b$10$ScXm.ifF5VIHBYklFR6snOboMG5U9MM6bx8vQxxCqIjsHF9ot5K62','2025-09-21 21:30:00',1,'2025-09-21 15:49:59'),(32,'suriya.ss9994481@gmail.com','$2b$10$/tfk46DPqLGdIs7fN2Uq2euCL06V45RO44AKtoPO1Mn7aL6ga3nJ2','2025-09-21 21:33:54',0,'2025-09-21 15:53:54'),(33,'suriya.ss9994481@gmail.com','$2b$10$eAhEte4kx1Ej9Ge2gLV8Ju6OWHOGp1sBCo7xqGlixplWcGX2bPXne','2025-09-21 21:42:56',1,'2025-09-21 16:02:55'),(34,'suriyaa1031@gmail.com','$2b$10$sTNFiTfAR71ITotMV.D8helqj3vKnnFaBFVwEk2NTdS5nP5i7bpce','2025-09-21 21:43:33',1,'2025-09-21 16:03:32'),(35,'suriya.ss9994481@gmail.com','$2b$10$6kyesrCCo7V1vETq2yMOnOwoXQKeBkqTotSedcc.Qj9Q4kHJJc4oC','2025-09-21 21:45:51',1,'2025-09-21 16:05:50'),(36,'suriya.ss9994481@gmail.com','$2b$10$tQJP87nvd4xx3OCYJf/sHu.QcUmeBwNtCWMvuQcxEpNvoFsziSyAm','2025-09-22 09:47:39',1,'2025-09-22 04:07:38'),(37,'suriya.ss9994481@gmail.com','$2b$10$9ioE97ZilTfWxIubxJhLS.0PBTKHdFTxAUUDFVoxzhaEXxOr.P6TW','2025-09-22 09:54:37',1,'2025-09-22 04:14:36'),(38,'suriyaa1031@gmail.com','$2b$10$xhpUrNr7ZsQ66GUSVzY7IuLJWTnsaANw/kI1wDs7xePcXbCzTBsIW','2025-09-22 10:04:19',1,'2025-09-22 04:24:19'),(39,'suriyaa1031@gmail.com','$2b$10$wOp5JJXDjDH7S5cSImKUEO2K89eUY6u1mRQh8FfnamJfRJG.aG1Wa','2025-09-22 10:06:40',1,'2025-09-22 04:26:39'),(40,'suriyaa1031@gmail.com','$2b$10$y3KPv0bWwKkr5c6yBuRuxutIJQFTze.wOFIDw.uvfyqlLDGO4kcS.','2025-09-22 18:36:30',1,'2025-09-22 12:56:30'),(41,'suriyaa1031@gmail.com','$2b$10$rbQQF7TuVnjTI6ZbrsKKAug1m89zJelrygQME74cl5nkiyHdHe/0u','2025-09-22 19:47:12',1,'2025-09-22 14:07:11'),(42,'suriyaa1031@gmail.com','$2b$10$gvv37aoc6J9.mCyY2B7u4uYIx5Kj3lRLA/Hqo9E7q.HRnoEEikWxO','2025-09-22 20:39:04',0,'2025-09-22 14:59:03'),(43,'suriya.ss9994481@gmail.com','$2b$10$4LuM8DLiplVqdJLddF4KL.mmhQqqP9LcTNJc50DJLaUOvaaJnAwYu','2025-09-22 20:40:09',0,'2025-09-22 15:00:09'),(44,'suriyaa1031@gmail.com','$2b$10$Df77RmVgwVv.ac2Jg6/IeObBb0oAHQqoCIkaCLuQDBtzTvv5K/PA.','2025-09-22 20:40:47',1,'2025-09-22 15:00:47'),(45,'suriyaa1031@gmail.com','$2b$10$NqGl1Q6X3fgXlCt.oaTlHu3StlxGLCgbgwAwVPvsS5SfFWHHMGIi2','2025-09-22 22:09:21',1,'2025-09-22 16:29:20'),(46,'suriyaa1031@gmail.com','$2b$10$NTz7AvWbzMotMTyuEK8p/O8SSK888DxWFKgUp.qif8rZMtzs/Z5Le','2025-09-23 09:42:32',1,'2025-09-23 04:02:31'),(47,'suriyaa1031@gmail.com','$2b$10$PyvuDz.pWPCbXb01FVmcc.hwgDbmH4oyzcMylligdo7HCSWfhOyrG','2025-09-23 10:19:21',1,'2025-09-23 04:39:20'),(48,'suriyaa1031@gmail.com','$2b$10$2An8rKIil4hpKPw5V7sYfOyj7CXlgas/6gK8CdrDcGyrev3CEU9x2','2025-09-23 10:22:42',1,'2025-09-23 04:42:42'),(49,'suriyaa1031@gmail.com','$2b$10$0xsXW/rmDdBVR9T5VTOx7OYP/0hQnxCpPkCFzvV85N9hTkratm4im','2025-09-23 11:10:18',1,'2025-09-23 05:30:17'),(50,'suriyaa1031@gmail.com','$2b$10$/r9F.mG0q1/ATUDf7h.my.NrKAsqD9hWodxuEHRgg3bzpZgFrVZey','2025-09-23 12:25:43',1,'2025-09-23 06:45:42'),(51,'suriyaa1031@gmail.com','$2b$10$g8x90ox0XyuA8hRdu52w4O9x9I/DAcbbp2ecHensiygeD0IPaD.r6','2025-09-23 14:37:14',1,'2025-09-23 08:57:14'),(52,'suriyaa1031@gmail.com','$2b$10$Kw4kp.nWe.zlnwgJ2GxyTubmH2JxefURJ1CYT.c2wlsl8LSGCdm5m','2025-09-23 14:55:21',1,'2025-09-23 09:15:20'),(53,'suriyaa1031@gmail.com','$2b$10$uCwA8YENcz9XN6aK5uql5.uE2OjemzGdhBh7XBImmASrmCBEYFIVC','2025-09-23 14:56:09',1,'2025-09-23 09:16:09'),(54,'suriyaa1031@gmail.com','$2b$10$J71DyAdE9op/LbMlr5J2Je2XUJSyhjATIN3n./Sd6ryE3D2Zg9.Ku','2025-09-23 15:01:13',1,'2025-09-23 09:21:13'),(55,'suriyaa1031@gmail.com','$2b$10$IsMOquif46YaCHVcY8ATRepwz9z5eLu08Zo1Q5Urv.VKRCuncfQGO','2025-09-23 15:05:39',1,'2025-09-23 09:25:39'),(56,'suriyaa1031@gmail.com','$2b$10$syg6XSRucn25ucqhthEVm.Q4XsTeXymqHv8Qa5Dm112D8ROQSONRW','2025-09-23 15:06:54',1,'2025-09-23 09:26:53'),(57,'suriyaa1031@gmail.com','$2b$10$DbwCcedO9JF9Ijy/YveK0.jarFzZa/jwoPiqg44vnf/HYOypE8rty','2025-09-23 15:15:42',1,'2025-09-23 09:35:41'),(58,'suriya.ss9994481@gmail.com','$2b$10$uORnhyWLjKN4KVyJ.0Fvq.JhpRfnqDRftLmda4cPJOas8qulvPdE.','2025-09-23 15:17:58',1,'2025-09-23 09:37:57'),(59,'suriyaa1031@gmail.com','$2b$10$FvrIZKMOwVujwxHdHJugxeljCjMdZIcnaQwxu49cyWTtVo5keGH1C','2025-09-23 15:25:42',1,'2025-09-23 09:45:42'),(60,'suriyaa1031@gmail.com','$2b$10$oIaHvamBdOA9HYBEPbPdcO2Jl8FqA.gykbOLQD54/SaQADn6LU8I6','2025-09-23 15:47:48',1,'2025-09-23 10:07:48'),(61,'suriyaa1031@gmail.com','$2b$10$x4esd/3DzG50YQBQcSBKHOIpNM7.Q5rhYTAqnKtqC.pQnlc9QT1vm','2025-09-23 15:48:34',0,'2025-09-23 10:08:34'),(62,'suriyaa1031@gmail.com','$2b$10$dlAFG3VeO1wDnmBJEQG.z.0eeLDMUMty6V51PVjHoMgUSYtUWBCeq','2025-09-23 15:48:36',0,'2025-09-23 10:08:35'),(63,'suriyaa1031@gmail.com','$2b$10$WdxvikQlFNrY39eh.SmoqumTqM0rThXvDyo/PZ9wANsxx6G9wNoOW','2025-09-23 15:48:36',1,'2025-09-23 10:08:36'),(64,'suriya.ss9994481@gmail.com','$2b$10$Yp9EJtyntreOAkXgYDQlnu0hwhKLbmjN4fsrPANVjDGv33SRncfci','2025-09-23 15:49:29',1,'2025-09-23 10:09:28'),(65,'suriyaa1031@gmail.com','$2b$10$vVvotOS0iynbiKG6oWBire.dkq.L4RpUPL1riQ6D3Od4az2.wYKna','2025-09-23 15:50:41',0,'2025-09-23 10:10:40'),(66,'suriyaa1031@gmail.com','$2b$10$DbMxUCu.au71uQz41.zLLuIzXBGsjT2IkFmeeCeS0wcizpDH56M2a','2025-09-23 15:51:26',1,'2025-09-23 10:11:25'),(67,'suriyaa1031@gmail.com','$2b$10$3ZcyAnXF3pYPdUOt3Dp0guCo/ldtDis5/NaF8VFRP4e2TewVC3DVC','2025-09-23 16:32:39',1,'2025-09-23 10:52:38'),(68,'suriyaa1031@gmail.com','$2b$10$02hvOwk4QGz4rbo5wL7Odumrv4g3yO3l1Srj40W8xUlF2RBHyuwXS','2025-09-23 17:30:20',0,'2025-09-23 11:50:19'),(69,'suriya.ss9994481@gmail.com','$2b$10$KsGfCCeQ8NmevuOyHRYb2uChxxUdBTCmptXYQ6lflb95DZB5bsXIO','2025-09-23 17:30:39',0,'2025-09-23 11:50:38'),(70,'suriyaa1031@gmail.com','$2b$10$7RmgztWckqE9qWPGG/77e.7gvdvlpPsTb22uW77f5jXbKTkeN.bha','2025-09-23 17:32:11',1,'2025-09-23 11:52:10'),(71,'suriyacseucet@gmail.com','$2b$10$USfv0Vy35jL1K2qKKUn8pehuuLww9M5ESbiCjS3aX7W6omPTX1EL2','2025-09-23 17:57:37',1,'2025-09-23 12:17:37'),(72,'suriyaa1031@gmail.com','$2b$10$GdJjRo1atBVTiH0VDedkFuPTtiLvcLoXkl2mBrsLBzdzlSEFmHxLy','2025-09-23 18:20:54',0,'2025-09-23 12:40:53'),(73,'suriyaa1031@gmail.com','$2b$10$1p0JI5Vp6Zv0ILqTKE2NEuroOFG5es4YWqfBhK2P9t0DhvCommmaO','2025-09-23 18:24:19',1,'2025-09-23 12:44:18'),(74,'suriya.ss9994481@gmail.com','$2b$10$Qbc9/ztzBb8tSrLAk.lx8OC.xBs76EMCKi6J5fcHyj.2PScqGYvSO','2025-09-23 18:25:44',1,'2025-09-23 12:45:43'),(75,'suriya.ss9994481@gmail.com','$2b$10$uMk5zQZW5JeU8uJzXyPzQ.ZaMxzYxNLCtyCuTuhcG/EMDQVSWvuiq','2025-09-24 10:38:19',1,'2025-09-24 04:58:18'),(76,'suriyacseucet@gmail.com','$2b$10$HXkuox382gjVu01F8DvfE.Kmv6UzrvS7ALXp3mmKlZainEK34MoWC','2025-09-24 10:51:41',1,'2025-09-24 05:11:40'),(77,'suriya.ss9994481@gmail.com','$2b$10$bIgt10WDM1sB49QkJuItLu9CVaDceQgaU10NsgPbuYH8P7P4yV/3y','2025-09-24 10:55:12',1,'2025-09-24 05:15:11'),(78,'suriya.ss9994481@gmail.com','$2b$10$VMsujS7ou9Kas6Oiu5ieTuSwPZGrR2WcN09H95zUqfKDBIg3FV8EK','2025-09-24 12:00:45',0,'2025-09-24 06:20:45'),(79,'suriya.ss9994481@gmail.com','$2b$10$TeGWPjAJTT8VWEtn3u8F0.FDY0JLUGmOSTD03Vj9pzjPSOXRfKZBu','2025-09-24 12:00:48',1,'2025-09-24 06:20:47'),(80,'suriyaa1031@gmail.com','$2b$10$95zXyMbO00GKxauVEnHpbeKRG9gwHZiiXMS1ZjtDgfnJonH2LczNy','2025-09-24 12:08:42',1,'2025-09-24 06:28:41'),(81,'suriyaa1031@gmail.com','$2b$10$iPlK1bKS8VkAWBdP3835cum/cUC.o1Y0/bcpPHrHlQIylzrJDqz26','2025-09-24 13:49:02',1,'2025-09-24 08:09:02'),(82,'suriyaa1031@gmail.com','$2b$10$xXf40slL5txFSZWkVqR1YeULjRgw8naDhmEPoiNWaHcHLnMdUB8Ii','2025-09-24 13:53:36',1,'2025-09-24 08:13:36'),(83,'suriyacseucet@gmail.com','$2b$10$bNpTXINj6M.UZzkMqB63xeNiPjXIQQDSWZaCPd4C7Sbjh6WJNSyRi','2025-09-24 14:18:59',1,'2025-09-24 08:38:59'),(84,'suriya.ss9994481@gmail.com','$2b$10$MgEJbr3jnBZEDoAhTrAD9O7361RxIdIPdYeBg7kTRU6/H4JswAuVq','2025-09-24 14:22:36',1,'2025-09-24 08:42:36'),(85,'suriyaa1031@gmail.com','$2b$10$sAySisq9ooWTkIIEDhr9w.v5/Qh5le0gWcRyTurmDWI/Njh0BmPB6','2025-09-25 09:39:14',1,'2025-09-25 03:59:13'),(86,'suriya.ss9994481@gmail.com','$2b$10$MUfSYWnHu9AIFeMPLsfEmuYLpViU0v/VftZpfy3mrccNwzU61GrKO','2025-09-25 09:52:41',1,'2025-09-25 04:12:41'),(87,'suriya.ss9994481@gmail.com','$2b$10$MB1N5g8fwhwttr5vN5..3.kMNPhAA0BPtdNEwyFcq8VAszDBFO9uG','2025-09-25 09:55:56',0,'2025-09-25 04:15:55'),(88,'suriyaa1031@gmail.com','$2b$10$yTjwuRX4Xj2LFg8nCIYNKOWrAM0BYRKPK5cDZsLUo9bvlsZwisTiu','2025-09-25 09:56:19',1,'2025-09-25 04:16:19'),(89,'suriya.ss9994481@gmail.com','$2b$10$zCfF8KHUadwKp6zYa1DmPurA7sM6D4KddhKOXJ6oxJ8OoHRDiAgZO','2025-09-25 10:34:30',1,'2025-09-25 04:54:29'),(90,'suriya.ss9994481@gmail.com','$2b$10$M.WItOVKmUtp3B9eJFktzeKSYRJ2mKUKcKgAmc7oHodkQDrLzEHWS','2025-09-26 12:04:08',0,'2025-09-26 06:24:08'),(91,'suriya.ss9994481@gmail.com','$2b$10$dFQiefeVWVKih3gS1DUh6.Zhe786cv6AYZgJ.qK45ynnRP7/zkcAe','2025-09-26 12:04:20',0,'2025-09-26 06:24:20'),(92,'suriya.ss9994481@gmail.com','$2b$10$Fzo.Ro9U4QvFXczMAkG2eO/qlSCuB7kr/C/QS29c0vB5UFh2i4n3K','2025-09-26 12:09:44',0,'2025-09-26 06:29:44'),(93,'suriya.ss9994481@gmail.com','$2b$10$MMfzmoV2rMKJAAu3h/d.1.WTMn8znBt651Sr/Dk7/iM4uVseOW8fi','2025-09-26 12:11:02',1,'2025-09-26 06:31:01'),(94,'suriyaa1031@gmail.com','$2b$10$xY4yHI.hjqOHy2G57SF4Oe8RrfIF3yfeAi1byIAQA6pszimiwS1Im','2025-09-26 13:03:01',1,'2025-09-26 07:23:01'),(95,'suriya.ss9994481@gmail.com','$2b$10$0GJfQJGSxfvBDF8xHynR8Oqx03R0OQfsoRUjaOqLmNUGWgkSHsejS','2025-09-26 15:43:55',1,'2025-09-26 10:03:55'),(96,'suriyaa1031@gmail.com','$2b$10$Ho7ouP6LaGKoXsdCSKEEku9/dSHdvasT42nN1NK8uHGu9YbnT6Ofe','2025-09-26 16:10:33',1,'2025-09-26 10:30:32'),(97,'suriyaa1031@gmail.com','$2b$10$Nszj5YT0C156CzYYxXvyWOeK2TlCi2WKsIF/lSfxkqIFMIzEn3rqm','2025-09-26 16:50:56',1,'2025-09-26 11:10:56'),(98,'suriya.ss9994481@gmail.com','$2b$10$p4mKX5FsvL1LE8YtM/J.3u6BMlxN21qZ7ohISfZy/R3xJdOqSK6nG','2025-09-26 16:57:24',0,'2025-09-26 11:17:23'),(99,'suriya.ss9994481@gmail.com','$2b$10$AysDJ621yeyDjORjQdzTy.pJc2zbC.Ae/hU8n2W5aK35na/Dbk0T.','2025-09-26 16:58:08',1,'2025-09-26 11:18:08');
/*!40000 ALTER TABLE `otps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profiles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `skills` json NOT NULL,
  `interests` json NOT NULL,
  `resume` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,'[\"java\"]','[\"Web Dev\", \"AI\"]','uploads\\1757483963741-734523862-Gray and Green Simple Professional  CV Resume (3).pdf','2025-09-10 05:59:23'),(2,'[\"python\"]','[\"Python\"]','uploads\\1757484126071-924925610-Black and White Clean Professional A4 Resume (1) (2).pdf','2025-09-10 06:02:06'),(3,'[\"java\"]','[\"Web Dev\", \"AI\"]','uploads\\1757649036815-168393868-Raw Query_Spring-CRUD.docx','2025-09-12 03:50:36'),(4,'[\"java\"]','[\"Web Dev\", \"AI\"]','uploads\\1757649040405-389915780-Raw Query_Spring-CRUD.docx','2025-09-12 03:50:40');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `progress`
--

DROP TABLE IF EXISTS `progress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `progress` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `booking_id` int DEFAULT NULL,
  `notes` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `booking_id` (`booking_id`),
  CONSTRAINT `progress_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `progress_ibfk_2` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `progress`
--

LOCK TABLES `progress` WRITE;
/*!40000 ALTER TABLE `progress` DISABLE KEYS */;
INSERT INTO `progress` VALUES (1,2,NULL,'learning python','2025-09-17 07:40:43'),(2,2,NULL,'i learned java','2025-09-17 07:52:07'),(3,2,NULL,'ok','2025-09-25 08:59:45');
/*!40000 ALTER TABLE `progress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session_reports`
--

DROP TABLE IF EXISTS `session_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session_reports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `booking_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `coach_id` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `comments` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `booking_id` (`booking_id`),
  KEY `user_id` (`user_id`),
  KEY `coach_id` (`coach_id`),
  CONSTRAINT `session_reports_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`),
  CONSTRAINT `session_reports_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session_reports`
--

LOCK TABLES `session_reports` WRITE;
/*!40000 ALTER TABLE `session_reports` DISABLE KEYS */;
INSERT INTO `session_reports` VALUES (1,NULL,2,1,4,'good','2025-09-17 07:50:20'),(2,NULL,2,1,2,'good','2025-09-25 08:59:39');
/*!40000 ALTER TABLE `session_reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slots`
--

DROP TABLE IF EXISTS `slots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `slots` (
  `id` int NOT NULL AUTO_INCREMENT,
  `coach_id` int DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL,
  `is_booked` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `coach_id` (`coach_id`),
  CONSTRAINT `slots_ibfk_1` FOREIGN KEY (`coach_id`) REFERENCES `coaches` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slots`
--

LOCK TABLES `slots` WRITE;
/*!40000 ALTER TABLE `slots` DISABLE KEYS */;
/*!40000 ALTER TABLE `slots` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Suriya Kumar','suriya@example.com','9876543210'),(2,'Anitha R','anitha@example.com','9123456780'),(3,'','suriyaa1031@gmail.com',NULL),(4,'','suriya.ss9994481@gmail.com',NULL),(17,'','vivi@gmail.com',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users1`
--

DROP TABLE IF EXISTS `users1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users1` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `role` enum('user','coach') DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `otp` varchar(6) DEFAULT NULL,
  `otp_expiry` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users1`
--

LOCK TABLES `users1` WRITE;
/*!40000 ALTER TABLE `users1` DISABLE KEYS */;
INSERT INTO `users1` VALUES (1,'suriya','suriyaa1031@gmail.com','8883780655','coach','2025-09-18 09:15:24',NULL,NULL),(3,'abi','abi@gmail.com','8883780655','user','2025-09-18 09:20:38',NULL,NULL),(7,'naveen','naveen@gmail.com','8883780677','user','2025-09-18 12:32:02',NULL,NULL),(9,'naveena','naveena@gmail.com','8883780633','user','2025-09-18 12:37:35',NULL,NULL),(10,'durai','durai@gmail.com','8834562367','user','2025-09-18 12:48:11',NULL,NULL),(11,'indhu','indhu@gmail.com','9876543201','user','2025-09-18 12:51:47',NULL,NULL),(12,'meena','meena@gmail.com','7856340921','user','2025-09-18 13:01:34',NULL,NULL),(13,'ravi','ravi@gmail.com','7890769865','user','2025-09-18 13:03:56',NULL,NULL),(14,'mari','mari@gmail.com','9867543287','user','2025-09-19 08:59:40',NULL,NULL),(15,'nitheesh','nithees@gmail.com','7654679809','user','2025-09-19 11:21:41',NULL,NULL),(17,'akash','akash@gmail.com','8790658754','user','2025-09-19 11:38:11',NULL,NULL),(20,'','vivi@gmail.com',NULL,'user','2025-09-20 10:47:58',NULL,NULL),(21,'ariyan','suriya.ss9994481@gmail.com','8883780655','user','2025-09-20 10:56:13',NULL,NULL),(22,'mathi','mathi@gmail.com','08883780655','user','2025-09-21 16:07:53',NULL,NULL),(24,'mari','mari12@gmail.com','08883780655','user','2025-09-21 16:13:31',NULL,NULL),(25,'suri','suriyacseucet@gmail.com','8883780655','coach','2025-09-23 12:16:50',NULL,NULL);
/*!40000 ALTER TABLE `users1` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-08  9:34:54
