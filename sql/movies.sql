CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `plot` varchar(45) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `cast` varchar(45) DEFAULT NULL,
  `genre` varchar(45) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `language` varchar(45) DEFAULT NULL,
  `aggregate` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
