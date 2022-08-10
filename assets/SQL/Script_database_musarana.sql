-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema musarana_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema musarana_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `musarana_db` DEFAULT CHARACTER SET utf8 ;
USE `musarana_db` ;

-- -----------------------------------------------------
-- Table `musarana_db`.`modo_de_uso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`modo_de_uso` (
  `idmodo_de_uso` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `modo_de_uso` VARCHAR(500) NULL,
  PRIMARY KEY (`idmodo_de_uso`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`categoria` (
  `idcategoria` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(45) NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`presentacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`presentacion` (
  `idpresentacion` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `presentacion` VARCHAR(50) NULL,
  PRIMARY KEY (`idpresentacion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`productos` (
  `idproductos` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(20) NOT NULL,
  `nombre_producto` VARCHAR(100) NOT NULL,
  `precio` DECIMAL(10,2) UNSIGNED NOT NULL,
  `id_modo_de_uso` INT UNSIGNED NOT NULL,
  `id_categoria` INT UNSIGNED NOT NULL,
  `inventario` INT UNSIGNED NOT NULL,
  `ingredientes` VARCHAR(500) NOT NULL,
  `id_presentacion` INT UNSIGNED NOT NULL,
  `descripcion` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`idproductos`),
  INDEX `fk_productos_descripcion_idx` (`id_modo_de_uso` ASC) VISIBLE,
  INDEX `fk_productos_categoria_idx` (`id_categoria` ASC) VISIBLE,
  INDEX `fk_productos_size_idx` (`id_presentacion` ASC) VISIBLE,
  CONSTRAINT `fk_productos_modo_de_uso`
    FOREIGN KEY (`id_modo_de_uso`)
    REFERENCES `musarana_db`.`modo_de_uso` (`idmodo_de_uso`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_productos_categoria`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `musarana_db`.`categoria` (`idcategoria`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_productos_size`
    FOREIGN KEY (`id_presentacion`)
    REFERENCES `musarana_db`.`presentacion` (`idpresentacion`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`seccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`seccion` (
  `id_seccion` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `seccion` VARCHAR(60) NULL,
  PRIMARY KEY (`id_seccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`imagen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`imagen` (
  `id_imagen` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `imagen` VARCHAR(200) NULL,
  PRIMARY KEY (`id_imagen`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`usuario` (
  `idusuario` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(150) NULL,
  `e-mail` VARCHAR(60) NULL,
  `contrasenia` VARCHAR(45) NULL,
  `fecha_nacimiento` DATE NULL,
  `telefono` INT UNSIGNED NULL,
  `metodo_de_pago` VARCHAR(45) NULL,
  `id_orden` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`orden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`orden` (
  `id_orden` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_usuario` INT UNSIGNED NULL,
  `cantidad` INT UNSIGNED NULL,
  `total_orden` INT UNSIGNED NULL,
  PRIMARY KEY (`id_orden`),
  CONSTRAINT `fk_orden_ususario`
    FOREIGN KEY (`id_orden`)
    REFERENCES `musarana_db`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`estado` (
  `id_estado` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_estado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`direccion` (
  `id_direccion` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `colonia` VARCHAR(100) NULL,
  `municipio` VARCHAR(100) NULL,
  `codigo_postal` INT NULL,
  `id_estado` INT UNSIGNED NOT NULL,
  `id_usuario` INT UNSIGNED NOT NULL,
  `estado_id_estado` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_direccion`, `estado_id_estado`),
  INDEX `fk_direccion_usuario_idx` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_direccion_estado1_idx` (`estado_id_estado` ASC) VISIBLE,
  CONSTRAINT `fk_direccion_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `musarana_db`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_direccion_estado1`
    FOREIGN KEY (`estado_id_estado`)
    REFERENCES `musarana_db`.`estado` (`id_estado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`blog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`blog` (
  `idblog` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `contenido` VARCHAR(500) NULL,
  `categoria_blog` INT NULL,
  `titulo` VARCHAR(100) NOT NULL,
  `resumen` VARCHAR(100) NULL,
  `id_img_blog` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idblog`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`img_blog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`img_blog` (
  `id_img_blog` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `imagen` VARCHAR(150) NULL,
  PRIMARY KEY (`id_img_blog`),
  CONSTRAINT `img_blog`
    FOREIGN KEY (`id_img_blog`)
    REFERENCES `musarana_db`.`blog` (`idblog`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`contacto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`contacto` (
  `id_contacto` INT NOT NULL AUTO_INCREMENT,
  `nombre_cn` VARCHAR(45) NULL,
  `correo_cn` VARCHAR(80) NULL,
  `asunto_cn` VARCHAR(150) NULL,
  `telefono_cn` INT NULL,
  `comentario` VARCHAR(500) NULL,
  PRIMARY KEY (`id_contacto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`productos_has_orden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`productos_has_orden` (
  `productos_idproductos` INT UNSIGNED NOT NULL,
  `orden_id_orden` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`productos_idproductos`, `orden_id_orden`),
  INDEX `fk_productos_has_orden_orden1_idx` (`orden_id_orden` ASC) VISIBLE,
  INDEX `fk_productos_has_orden_productos1_idx` (`productos_idproductos` ASC) VISIBLE,
  CONSTRAINT `fk_productos_has_orden_productos1`
    FOREIGN KEY (`productos_idproductos`)
    REFERENCES `musarana_db`.`productos` (`idproductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_has_orden_orden1`
    FOREIGN KEY (`orden_id_orden`)
    REFERENCES `musarana_db`.`orden` (`id_orden`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`productos_has_imagen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`productos_has_imagen` (
  `productos_idproductos` INT UNSIGNED NOT NULL,
  `imagen_id_imagen` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`productos_idproductos`, `imagen_id_imagen`),
  INDEX `fk_productos_has_imagen_imagen1_idx` (`imagen_id_imagen` ASC) VISIBLE,
  INDEX `fk_productos_has_imagen_productos1_idx` (`productos_idproductos` ASC) VISIBLE,
  CONSTRAINT `fk_productos_has_imagen_productos1`
    FOREIGN KEY (`productos_idproductos`)
    REFERENCES `musarana_db`.`productos` (`idproductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_has_imagen_imagen1`
    FOREIGN KEY (`imagen_id_imagen`)
    REFERENCES `musarana_db`.`imagen` (`id_imagen`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`seccion_has_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`seccion_has_productos` (
  `seccion_id_seccion` INT UNSIGNED NOT NULL,
  `productos_idproductos` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`seccion_id_seccion`, `productos_idproductos`),
  INDEX `fk_seccion_has_productos_productos1_idx` (`productos_idproductos` ASC) VISIBLE,
  INDEX `fk_seccion_has_productos_seccion1_idx` (`seccion_id_seccion` ASC) VISIBLE,
  CONSTRAINT `fk_seccion_has_productos_seccion1`
    FOREIGN KEY (`seccion_id_seccion`)
    REFERENCES `musarana_db`.`seccion` (`id_seccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_seccion_has_productos_productos1`
    FOREIGN KEY (`productos_idproductos`)
    REFERENCES `musarana_db`.`productos` (`idproductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
