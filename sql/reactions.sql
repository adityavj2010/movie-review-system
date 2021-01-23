CREATE TABLE `ratings` (
  `uId` int NOT NULL,
  `cId` int NOT NULL,
  `ratings` int DEFAULT NULL,
  KEY `User Id_idx` (`uId`) /*!80000 INVISIBLE */,
  KEY `Comment Id_idx` (`cId`),
  CONSTRAINT `Comment Id` FOREIGN KEY (`cId`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `User Id` FOREIGN KEY (`uId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
