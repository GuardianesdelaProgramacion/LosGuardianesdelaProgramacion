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
  `email` VARCHAR(60) NULL,
  `contrasenia` VARCHAR(45) NULL,
  `fecha_nacimiento` DATE NULL,
  `telefono` INT UNSIGNED NULL,
  `metodo_de_pago` VARCHAR(45) NULL,
  `rol` VARCHAR(45) NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`orden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`orden` (
  `id_orden` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cantidad` INT UNSIGNED NULL,
  `total_orden` DECIMAL(10,2) UNSIGNED NULL,
  `id_usuario` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_orden`, `id_usuario`),
  INDEX `fk_orden_usuario1_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_orden_usuario1`
    FOREIGN KEY (`id_usuario`)
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
  `id_usuario` INT UNSIGNED NOT NULL,
  `id_estado` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_direccion`, `id_estado`),
  INDEX `fk_direccion_usuario_idx` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_direccion_estado1_idx` (`id_estado` ASC) VISIBLE,
  CONSTRAINT `fk_direccion_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `musarana_db`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_direccion_estado1`
    FOREIGN KEY (`id_estado`)
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
  `categoria_blog` VARCHAR(500) NOT NULL,
  `titulo` VARCHAR(100) NOT NULL,
  `resumen` VARCHAR(100) NULL,
  PRIMARY KEY (`idblog`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musarana_db`.`img_blog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musarana_db`.`img_blog` (
  `id:img_blog` INT NOT NULL AUTO_INCREMENT,
  `imagen` VARCHAR(150) NULL,
  `blog_idblog` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id:img_blog`),
  INDEX `fk_img_blog_blog1_idx` (`blog_idblog` ASC) VISIBLE,
  CONSTRAINT `fk_img_blog_blog1`
    FOREIGN KEY (`blog_idblog`)
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
  `telefono_cn` BIGINT(20) UNSIGNED NOT NULL,
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


SELECT * FROM musarana_db.estado;
USE musarana_db;

INSERT INTO estado (estado) VALUES
('Aguascalientes'),
('Baja California'),
('Baja California Sur'),
('Campeche'),
('Ciudad de Mèxico'),
('Chiapas'),
('Chihuahua'),
('Coahuila de Zaragoza'),
('Colima'),
('Durango'),
('Guanajuato'),
('Guerrero'),
('Hidalgo'),
('Jalisco'),
('México'),
('Michoacán de Ocampo'),
('Morelos'),
('Nayarit'),
('Nuevo León'),
('Oaxaca de Juárez'),
('Puebla'),
('Querétaro'),
('Quintana Roo'),
('San Luis Potosí'),
('Sinaloa'),
('Sonora'),
('Tabasco'),
('Tamaulipas'),
('Tlaxcala'),
('Veracruz de Ignacio de la Llave'),
('Yucatán'),
('Zacatecas');

SELECT * FROM estado;

INSERT INTO categoria (`categoria`) VALUES 
('Cabello'),
('Cuerpo'),
('Cuidado dental'),
('Protección Solar'),
('Cara');

SELECT * FROM categoria;


INSERT INTO seccion (`seccion`) VALUES 
('Todos los productos'),
('Más vendidos'),
 ('Carrusel'),
 ('Búsqueda'),
 ('Banner'),
 ('Descuentos');
 
 SELECT * FROM seccion;
 
 INSERT INTO presentacion (`presentacion`) VALUES 
('Chico'),
('Grande');

SELECT * FROM presentacion;

INSERT INTO modo_de_uso (`modo_de_uso`) VALUES 
('FROTAR LA BARRA HÚMEDA EN LAS MANOS Y USAR LA ESPUMA RESULTANTE PARA LAVAR EL CABELLO.'),
 ('FROTAR LA BARRA EN LAS MANOS O DIRECTAMENTE SOBRE EL CABELLO DE MEDIAS A PUNTAS.'), 
('FROTAR LA BARRA SOBRE LA ZONA DESEADA Y ESPARCIR EL PRODUCTO CON LAS MANOS.'),
('HUMEDECE TU CEPILLO Y FRÓTALO SOBRE LA TABLETA, CEPILLA COMO DE COSTUMBRE Y ENJUAGA CON AGUA.'),
('FROTAR LA BARRA SOBRE LA ZONA DESEADA Y ESPARCIR EL PRODUCTO CON LAS MANOS.'),
('USAR UNA GOTA DE PRODUCTO Y DAR UN LIGERO MASAJE SOBRE LA ZONA DESEADA');

SELECT * FROM modo_de_uso;



INSERT INTO productos (sku,nombre_producto,precio,id_modo_de_uso,id_categoria,inventario,ingredientes,id_presentacion,descripcion) VALUES
('S000', 'JABÓN DE CALÉNDULA', 90, 1,2,20,'Sodium Cocoyl Isethionate, Agua destilada, Pétalos de Calendula, Oleato de Caléndula, Caolín, Manteca de coco, Glicerina Vegetal y Pantenol.
',1,'Gracias a las propiedades anticépticas y cicatrizantes de Calendula officinalis este jabón ayuda con afecciones en la piel como brotes (acné/alergias).');


INSERT INTO productos (sku,nombre_producto,precio,id_modo_de_uso,id_categoria,inventario,ingredientes,id_presentacion,descripcion) VALUES
('S001', 'JABÓN DE JAMAICA', 90, 1,2,15,'Sodium Cocoyl Isethionate, Agua destilada, Sépalos de Jamaica, Oleato de Jamaica, Caolín, Manteca de coco, Glicerina Vegetal y Pantenol.
',1,'La jamaica (Hibiscus sabdarifa) es una planta que nos brinda una variedad de beneficios dependiendo de su presentación, tiene un alto contenido de vitamina A, C, E Y B1 , aporta nutrición y previene el envejecimiento prematuro.');

SELECT * FROM productos;

INSERT INTO usuario (nombre, email, contrasenia, fecha_nacimiento, telefono, metodo_de_pago, rol) VALUES
('Cinthia', 'cinthia123@gmail.com','12345678','2000-08-22',3318252865,'Efectivo','usuario');
SELECT * FROM usuario;

INSERT INTO orden (cantidad, total_orden, id_usuario) VALUES (5,329.99,1);
SELECT * FROM orden;

INSERT INTO direccion (colonia, municipio, codigo_postal, id_usuario, id_estado)  VALUES
('San Lorenzo','Chimalhuacán',56340,1,14);
SELECT * FROM direccion;

SELECT * FROM productos_has_orden;
INSERT INTO productos_has_orden (productos_idproductos, orden_id_orden) VALUES (1,1);
INSERT INTO productos_has_orden (productos_idproductos, orden_id_orden) VALUES (2,1);

SELECT * FROM seccion_has_productos;
INSERT INTO seccion_has_productos (seccion_id_seccion, productos_idproductos) VALUES (1,1);
INSERT INTO seccion_has_productos (seccion_id_seccion, productos_idproductos) VALUES (1,2);
SELECT * FROM seccion;

SELECT * FROM modo_de_uso;
SELECT * FROM categoria;

INSERT INTO imagen (imagen) VALUES 
('https://i.ibb.co/0mYYDGn/S001-2.jpg'),
('https://i.ibb.co/GtVyW49/S001-3.jpg');
SELECT * FROM imagen;

INSERT INTO productos_has_imagen (productos_idproductos, imagen_id_imagen) VALUES (1,1);
INSERT INTO productos_has_imagen (productos_idproductos, imagen_id_imagen) VALUES (1,2);
SELECT * FROM productos_has_imagen;


INSERT INTO contacto (nombre_cn, correo_cn, asunto_cn,telefono_cn,comentario) VALUES
('Pablo', 'pablomichoacan@gmail.com', 'Business', 4431304883, 'Me interesaria vender productos a mayoreo'); 
SELECT * FROM contacto;


INSERT INTO blog (fecha, contenido, categoria_blog, titulo, resumen) VALUES
('2022-08-22','Lorem, ipsum  velit actaque!',
'tips','BAÑATE COMO HOMBRE', 'Lorem, ipsum dolor sit amet doloribus, obcaecati velit');
SELECT * FROM blog;


INSERT INTO img_blog (imagen, blog_idblog) VALUES ('https://i.ibb.co/WtYz0zv/S001-1.jpg',1);
SELECT * FROM img_blog;



