
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

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `exchangeGames` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `exchangeGames`;
DROP TABLE IF EXISTS `anuncios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anuncios` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ano` varchar(10) NOT NULL,
  `descricao` varchar(1500) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `tempo_uso` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `usuarios_id` bigint NOT NULL,
  `plataformas_id` bigint NOT NULL,
  `condicao` enum('NOVO','USADO','LACRADO') NOT NULL,
  `chat_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idEndereco_UNIQUE` (`id`),
  KEY `fk_anuncios_usuarios_idx` (`usuarios_id`),
  KEY `fk_anuncios_plataformas1_idx` (`plataformas_id`),
  CONSTRAINT `fk_anuncios_plataformas1` FOREIGN KEY (`plataformas_id`) REFERENCES `plataformas` (`id`),
  CONSTRAINT `fk_anuncios_usuarios` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `anuncios` WRITE;
/*!40000 ALTER TABLE `anuncios` DISABLE KEYS */;
/*!40000 ALTER TABLE `anuncios` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `anuncios_favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anuncios_favoritos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `lista_favoritos_id` bigint NOT NULL,
  `anuncios_id` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `usuarios_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_anuncios_favoritos_anuncios1_idx` (`anuncios_id`),
  KEY `fk_anuncios_favoritos_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_anuncios_favoritos_anuncios1` FOREIGN KEY (`anuncios_id`) REFERENCES `anuncios` (`id`),
  CONSTRAINT `fk_anuncios_favoritos_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `anuncios_favoritos` WRITE;
/*!40000 ALTER TABLE `anuncios_favoritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `anuncios_favoritos` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `anuncios_generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anuncios_generos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `anuncios_id` bigint NOT NULL,
  `generos_id` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_anuncios_generos_anuncios1_idx` (`anuncios_id`),
  KEY `fk_anuncios_generos_generos1_idx` (`generos_id`),
  CONSTRAINT `fk_anuncios_generos_anuncios1` FOREIGN KEY (`anuncios_id`) REFERENCES `anuncios` (`id`),
  CONSTRAINT `fk_anuncios_generos_generos1` FOREIGN KEY (`generos_id`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `anuncios_generos` WRITE;
/*!40000 ALTER TABLE `anuncios_generos` DISABLE KEYS */;
/*!40000 ALTER TABLE `anuncios_generos` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `chats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chats` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `usuarios_id` bigint NOT NULL,
  `usuarios_id1` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_chats_usuarios1_idx` (`usuarios_id`),
  KEY `fk_chats_usuarios2_idx` (`usuarios_id1`),
  CONSTRAINT `fk_chats_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `fk_chats_usuarios2` FOREIGN KEY (`usuarios_id1`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `chats` WRITE;
/*!40000 ALTER TABLE `chats` DISABLE KEYS */;
/*!40000 ALTER TABLE `chats` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `imagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagens` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `anuncios_id` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `foto_principal` tinyint(1) NOT NULL DEFAULT '0',
  `caminho` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_imagens_anuncios1_idx` (`anuncios_id`),
  CONSTRAINT `fk_imagens_anuncios1` FOREIGN KEY (`anuncios_id`) REFERENCES `anuncios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `imagens` WRITE;
/*!40000 ALTER TABLE `imagens` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagens` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `mensagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensagens` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `usuarios_id` bigint NOT NULL,
  `chat_id` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `conteudo` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_mensagens_usuarios1_idx` (`usuarios_id`),
  KEY `fk_mensagens_chat1_idx` (`chat_id`),
  CONSTRAINT `fk_mensagens_chat1` FOREIGN KEY (`chat_id`) REFERENCES `chats` (`id`),
  CONSTRAINT `fk_mensagens_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `mensagens` WRITE;
/*!40000 ALTER TABLE `mensagens` DISABLE KEYS */;
/*!40000 ALTER TABLE `mensagens` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `plataformas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plataformas` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `console` varchar(150) NOT NULL,
  `marca` varchar(150) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `plataformas` WRITE;
/*!40000 ALTER TABLE `plataformas` DISABLE KEYS */;
/*!40000 ALTER TABLE `plataformas` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `trocas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trocas` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `data` datetime NOT NULL,
  `avaliacao` varchar(200) NOT NULL,
  `anuncios_id` bigint NOT NULL,
  `usuarios_id` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `usuarios_id2` bigint NOT NULL,
  `chat_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_trocas_anuncios1_idx` (`anuncios_id`),
  KEY `fk_trocas_usuarios1_idx` (`usuarios_id`),
  KEY `fk_trocas_usuarios2_idx` (`usuarios_id2`),
  CONSTRAINT `fk_trocas_anuncios1` FOREIGN KEY (`anuncios_id`) REFERENCES `anuncios` (`id`),
  CONSTRAINT `fk_trocas_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `fk_trocas_usuarios2` FOREIGN KEY (`usuarios_id2`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `trocas` WRITE;
/*!40000 ALTER TABLE `trocas` DISABLE KEYS */;
/*!40000 ALTER TABLE `trocas` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `sobrenome` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `nickname` varchar(150) NOT NULL,
  `senha` varchar(150) NOT NULL,
  `cidade` varchar(100) DEFAULT NULL,
  `estado` varchar(100) DEFAULT NULL,
  `facebook` varchar(100) DEFAULT NULL,
  `instagram` varchar(100) DEFAULT NULL,
  `twitter` varchar(100) DEFAULT NULL,
  `notificacao_site` tinyint(1) NOT NULL DEFAULT '0',
  `notificacao_parceiros` tinyint(1) NOT NULL DEFAULT '0',
  `usuario_bloqueado` tinyint(1) NOT NULL DEFAULT '0',
  `role` enum('USER','ADMIN') NOT NULL DEFAULT 'USER',
  `lista_favoritos_id` bigint NOT NULL,
  `avatar` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idClientes_UNIQUE` (`id`),
  UNIQUE KEY `nickname_UNIQUE` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Paulo','Daniel','pda.ambrosio@gmail.com','pdajgs','$2b$05$PUCTVA/nlKWtdjX6PhoyGOF57sAdtnaPWxrMQm/OEzkIPWG7b.PdC','São Paulo','São Paulo','facebook.com.br','instagram.com','twitter.com',0,0,0,'USER',10,'foto'),(2,'teste','teste1','pda.ambrosio123@gmail.com','123','$2b$05$ZjGkBsFr0dEJhJuWXDfiLeoQwTUjUWE2NsgRx.ngL2dApXc4nruJm',NULL,NULL,NULL,NULL,NULL,0,0,0,'USER',10,'foto');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

