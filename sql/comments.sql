CREATE TABLE `comments` (
  `id` int NOT NULL,
  `mId` int DEFAULT NULL,
  `uId` int DEFAULT NULL,
  `text` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uId_idx` (`uId`),
  KEY `mId` (`mId`),
  CONSTRAINT `mId` FOREIGN KEY (`mId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `uId` FOREIGN KEY (`uId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
