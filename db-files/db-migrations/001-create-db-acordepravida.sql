SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema AcordePraVida
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `AcordePraVida` ;
CREATE SCHEMA IF NOT EXISTS `AcordePraVida` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `AcordePraVida` ;

-- -----------------------------------------------------
-- Table `AcordePraVida`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AcordePraVida`.`usuario` ;

CREATE TABLE IF NOT EXISTS `AcordePraVida`.`usuario` (
`usuarioid` INT PRIMARY KEY AUTO_INCREMENT,
`ativo` BOOLEAN NOT NULL,
`email` VARCHAR(256),
`emailconfirmado` BOOLEAN NOT NULL,
`senha` VARCHAR(256) NOT NULL,
`nome` VARCHAR(256) NOT NULL,
`funcaoid` INT NOT NULL)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AcordePraVida`.`funcao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AcordePraVida`.`funcao` ;

CREATE TABLE IF NOT EXISTS `AcordePraVida`.`funcao` (
`funcaoid` INT PRIMARY KEY AUTO_INCREMENT,
`funcao` VARCHAR(256))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AcordePraVida`.`cifra`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AcordePraVida`.`cifra` ;

CREATE TABLE IF NOT EXISTS `AcordePraVida`.`cifra` (
`cifraid` INT PRIMARY KEY AUTO_INCREMENT,
`conteudo` VARCHAR(1024),
`usuarioid` INT NOT NULL,
`musicaid` INT NOT NULL)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AcordePraVida`.`musica`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AcordePraVida`.`musica` ;

CREATE TABLE IF NOT EXISTS `AcordePraVida`.`musica` (
`musicaid` INT PRIMARY KEY AUTO_INCREMENT,
`nome` VARCHAR(256),
`dificuldade` INT NULL,
`visualizacoes` INT NULL,
`artistaid` INT NOT NULL,
`notaid` INT NOT NULL)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AcordePraVida`.`artista`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AcordePraVida`.`artista` ;

CREATE TABLE IF NOT EXISTS `AcordePraVida`.`artista` (
`artistaid` INT PRIMARY KEY AUTO_INCREMENT,
`nome` VARCHAR(256),
`visualizacoes` INT NULL,
`notaid` INT NOT NULL)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AcordePraVida`.`nota`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AcordePraVida`.`nota` ;

CREATE TABLE IF NOT EXISTS `AcordePraVida`.`nota` (
`notaid` INT PRIMARY KEY AUTO_INCREMENT,
`nota` VARCHAR(256) NOT NULL)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- foreign keys
-- -----------------------------------------------------

ALTER TABLE `usuario` ADD CONSTRAINT `fk_possui_funcao` FOREIGN KEY ( `funcaoid` ) REFERENCES `funcao` ( `funcaoid` );

ALTER TABLE `cifra` ADD CONSTRAINT `fk_criada_usuario` FOREIGN KEY ( `usuarioid` ) REFERENCES `usuario` ( `usuarioid` );

ALTER TABLE `cifra` ADD CONSTRAINT `fk_pertence_musica` FOREIGN KEY ( `musicaid` ) REFERENCES `musica` ( `musicaid` );

ALTER TABLE `musica` ADD CONSTRAINT `fk_pertence_artista` FOREIGN KEY ( `artistaid` ) REFERENCES `artista` ( `artistaid` );

ALTER TABLE `musica` ADD CONSTRAINT `fk_musica_tem_nota` FOREIGN KEY ( `notaid` ) REFERENCES `nota` ( `notaid` );

ALTER TABLE `artista` ADD CONSTRAINT `fk_artista_tem_nota` FOREIGN KEY ( `notaid` ) REFERENCES `nota` ( `notaid` );

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;