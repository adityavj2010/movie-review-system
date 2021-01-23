CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mId` int DEFAULT NULL,
  `uId` int DEFAULT NULL,
  `text` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uId_idx` (`uId`),
  KEY `mId` (`mId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
