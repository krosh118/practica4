-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema practica4
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `practica4` ;

-- -----------------------------------------------------
-- Schema practica4
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `practica4` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `practica4` ;

-- -----------------------------------------------------
-- Table `practica4`.`BUS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `practica4`.`BUS` ;

CREATE TABLE IF NOT EXISTS `practica4`.`BUS` (
  `BUS` INT NOT NULL AUTO_INCREMENT,
  `PLACA` VARCHAR(45) NOT NULL,
  `TIPO` VARCHAR(45) NOT NULL,
  `CAPACIDAD` INT NOT NULL,
  PRIMARY KEY (`BUS`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `practica4`.`PUNTO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `practica4`.`PUNTO` ;

CREATE TABLE IF NOT EXISTS `practica4`.`PUNTO` (
  `PUNTO` INT NOT NULL AUTO_INCREMENT,
  `NOMBRE` VARCHAR(45) NULL,
  PRIMARY KEY (`PUNTO`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `practica4`.`RUTA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `practica4`.`RUTA` ;

CREATE TABLE IF NOT EXISTS `practica4`.`RUTA` (
  `RUTA` INT NOT NULL AUTO_INCREMENT,
  `ORIGEN` INT NOT NULL,
  `DESTINO` INT NOT NULL,
  PRIMARY KEY (`RUTA`),
  INDEX `ruta_origen_idx` (`ORIGEN` ASC),
  INDEX `ruta_destino_idx` (`DESTINO` ASC),
  CONSTRAINT `ruta_origen`
    FOREIGN KEY (`ORIGEN`)
    REFERENCES `practica4`.`PUNTO` (`PUNTO`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `ruta_destino`
    FOREIGN KEY (`DESTINO`)
    REFERENCES `practica4`.`PUNTO` (`PUNTO`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `practica4`.`USUARIO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `practica4`.`USUARIO` ;

CREATE TABLE IF NOT EXISTS `practica4`.`USUARIO` (
  `USUARIO` INT NOT NULL AUTO_INCREMENT,
  `NOMBRE` VARCHAR(16) NOT NULL,
  `PASSWORD` VARCHAR(32) NOT NULL,
  `TIPO` INT NOT NULL,
  PRIMARY KEY (`USUARIO`));


-- -----------------------------------------------------
-- Table `practica4`.`RESERVACION`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `practica4`.`RESERVACION` ;

CREATE TABLE IF NOT EXISTS `practica4`.`RESERVACION` (
  `RESERVACION` INT NOT NULL AUTO_INCREMENT,
  `USUARIO` INT NOT NULL,
  `INICIO` INT NOT NULL,
  `FINAL` INT NOT NULL,
  `ESTADO` VARCHAR(45) NOT NULL DEFAULT 'PENDIENTE',
  `SALIDA` DATE NOT NULL,
  `LLEGADA` DATE NOT NULL,
  `BUS` INT NOT NULL,
  PRIMARY KEY (`RESERVACION`),
  INDEX `reservacion_usuario_idx` (`USUARIO` ASC),
  INDEX `reservacion_origen_idx` (`INICIO` ASC),
  INDEX `reservacion_final_idx` (`FINAL` ASC),
  INDEX `reservacion_bus_idx` (`BUS` ASC),
  CONSTRAINT `reservacion_usuario`
    FOREIGN KEY (`USUARIO`)
    REFERENCES `practica4`.`USUARIO` (`USUARIO`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `reservacion_bus`
    FOREIGN KEY (`BUS`)
    REFERENCES `practica4`.`BUS` (`BUS`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `reservacion_origen`
    FOREIGN KEY (`INICIO`)
    REFERENCES `practica4`.`PUNTO` (`PUNTO`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `reservacion_final`
    FOREIGN KEY (`FINAL`)
    REFERENCES `practica4`.`PUNTO` (`PUNTO`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `practica4`.`RUTA_PUNTO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `practica4`.`RUTA_PUNTO` ;

CREATE TABLE IF NOT EXISTS `practica4`.`RUTA_PUNTO` (
  `RUTA_PUNTO` INT NOT NULL AUTO_INCREMENT,
  `RUTA` INT NOT NULL,
  `PUNTO` INT NOT NULL,
  INDEX `ruta_punto_punto_idx` (`PUNTO` ASC),
  PRIMARY KEY (`RUTA_PUNTO`),
  CONSTRAINT `ruta_punto_ruta`
    FOREIGN KEY (`RUTA`)
    REFERENCES `practica4`.`RUTA` (`RUTA`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `ruta_punto_punto`
    FOREIGN KEY (`PUNTO`)
    REFERENCES `practica4`.`PUNTO` (`PUNTO`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `practica4`.`BUS_RUTA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `practica4`.`BUS_RUTA` ;

CREATE TABLE IF NOT EXISTS `practica4`.`BUS_RUTA` (
  `BUS_RUTA` INT NOT NULL AUTO_INCREMENT,
  `BUS` INT NOT NULL,
  `RUTA` INT NOT NULL,
  `ESTADO` VARCHAR(45) NOT NULL,
  `FECHA` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `bus_ruta_ruta_idx` (`RUTA` ASC),
  PRIMARY KEY (`BUS_RUTA`),
  CONSTRAINT `bus_ruta_bus`
    FOREIGN KEY (`BUS`)
    REFERENCES `practica4`.`BUS` (`BUS`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `bus_ruta_ruta`
    FOREIGN KEY (`RUTA`)
    REFERENCES `practica4`.`RUTA` (`RUTA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `practica4`.`FACTURA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `practica4`.`FACTURA` ;

CREATE TABLE IF NOT EXISTS `practica4`.`FACTURA` (
  `FACTURA` INT NOT NULL AUTO_INCREMENT,
  `RESERVACION` INT NOT NULL,
  `MONTO` INT NOT NULL,
  `FECHA` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`FACTURA`),
  INDEX `factura_reservacion_idx` (`RESERVACION` ASC),
  CONSTRAINT `factura_reservacion`
    FOREIGN KEY (`RESERVACION`)
    REFERENCES `practica4`.`RESERVACION` (`RESERVACION`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `practica4`.`RESERVACION_PUNTO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `practica4`.`RESERVACION_PUNTO` ;

CREATE TABLE IF NOT EXISTS `practica4`.`RESERVACION_PUNTO` (
  `RESERVACION_PUNTO` INT NOT NULL AUTO_INCREMENT,
  `RESERVACION` INT NOT NULL,
  `PUNTO` INT NOT NULL,
  `PRECIO` INT NOT NULL,
  PRIMARY KEY (`RESERVACION_PUNTO`),
  INDEX `reservacion_punto_reservacion_idx` (`RESERVACION` ASC),
  INDEX `reservacion_punto_punto_idx` (`PUNTO` ASC),
  CONSTRAINT `reservacion_punto_reservacion`
    FOREIGN KEY (`RESERVACION`)
    REFERENCES `practica4`.`RESERVACION` (`RESERVACION`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `reservacion_punto_punto`
    FOREIGN KEY (`PUNTO`)
    REFERENCES `practica4`.`PUNTO` (`PUNTO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `practica4`.`TEMP`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `practica4`.`TEMP` ;

CREATE TABLE IF NOT EXISTS `practica4`.`TEMP` (
  `PUNTO` INT NULL)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `practica4`.`PUNTO`
-- -----------------------------------------------------
START TRANSACTION;
USE `practica4`;
INSERT INTO `practica4`.`PUNTO` (`PUNTO`, `NOMBRE`) VALUES (1, 'Guatemala');
INSERT INTO `practica4`.`PUNTO` (`PUNTO`, `NOMBRE`) VALUES (2, 'San Lucas');
INSERT INTO `practica4`.`PUNTO` (`PUNTO`, `NOMBRE`) VALUES (3, 'El Tejar');
INSERT INTO `practica4`.`PUNTO` (`PUNTO`, `NOMBRE`) VALUES (4, 'Chimaltenango');
INSERT INTO `practica4`.`PUNTO` (`PUNTO`, `NOMBRE`) VALUES (5, 'Zaragoza');
INSERT INTO `practica4`.`PUNTO` (`PUNTO`, `NOMBRE`) VALUES (6, 'El Camán');
INSERT INTO `practica4`.`PUNTO` (`PUNTO`, `NOMBRE`) VALUES (7, 'Tecpán');
INSERT INTO `practica4`.`PUNTO` (`PUNTO`, `NOMBRE`) VALUES (8, 'Santa Apolonia');

COMMIT;


-- -----------------------------------------------------
-- Data for table `practica4`.`USUARIO`
-- -----------------------------------------------------
START TRANSACTION;
USE `practica4`;
INSERT INTO `practica4`.`USUARIO` (`USUARIO`, `NOMBRE`, `PASSWORD`, `TIPO`) VALUES (1, 'admin', 'admin', 1);
INSERT INTO `practica4`.`USUARIO` (`USUARIO`, `NOMBRE`, `PASSWORD`, `TIPO`) VALUES (2, 'anibal', '123', 2);

COMMIT;

