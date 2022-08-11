SELECT * FROM musarana_db.estado;

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

SELECT * FROM productos;

INSERT INTO productos (sku,nombre_producto,precio,id_modo_de_uso,id_categoria,inventario,ingredientes,id_presentacion,descripcion) VALUES
('S000', 'JABÓN DE CALÉNDULA', 90, 1,2,20,'Sodium Cocoyl Isethionate, Agua destilada, Pétalos de Calendula, Oleato de Caléndula, Caolín, Manteca de coco, Glicerina Vegetal y Pantenol.
',1,'Gracias a las propiedades anticépticas y cicatrizantes de Calendula officinalis este jabón ayuda con afecciones en la piel como brotes (acné/alergias).');


INSERT INTO productos (sku,nombre_producto,precio,id_modo_de_uso,id_categoria,inventario,ingredientes,id_presentacion,descripcion) VALUES
('S001', 'JABÓN DE JAMAICA', 90, 1,2,15,'Sodium Cocoyl Isethionate, Agua destilada, Sépalos de Jamaica, Oleato de Jamaica, Caolín, Manteca de coco, Glicerina Vegetal y Pantenol.
',1,'La jamaica (Hibiscus sabdarifa) es una planta que nos brinda una variedad de beneficios dependiendo de su presentación, tiene un alto contenido de vitamina A, C, E Y B1 , aporta nutrición y previene el envejecimiento prematuro.');

ALTER TABLE `musarana_db`.`usuario` 
ADD COLUMN `rol_usuario` VARCHAR(45) NOT NULL AFTER `id_orden`;

SELECT * FROM usuario;
INSERT INTO usuario (nombre, email, contrasenia, fecha_nacimiento, telefono, metodo_de_pago, id_orden, rol_usuario) VALUES
('Cinthia', 'cinthia123@gmail.com','12345678','2000-08-22',3318252865,'Efectivo',2020,'usuario');

INSERT INTO orden (id_usuario, cantidad, total_orden) VALUES (1,5,300);
SELECT * FROM orden;

SELECT * FROM productos_has_orden;
INSERT INTO productos_has_orden (productos_idproductos, orden_id_orden) VALUES (1,1);
INSERT INTO productos_has_orden (productos_idproductos, orden_id_orden) VALUES (2,1);
INSERT INTO productos_has_orden (productos_idproductos, orden_id_orden) VALUES (1,2020);

SELECT * FROM modo_de_uso;
SELECT * FROM categoria;
SELECT * FROM id_presentacion;
SELECT * FROM categoria;



-- select * from blog;   -- no hay
-- select * from categoria;  -- ya tenemos info
-- update productos set id_categoria = 2 where idproductos = 1;
-- update categoria set categoria = 'Protector solar' where idcategoria = 4;
-- select * from contacto; -- no hay info
select * from descripcion; -- no hay

select * from direccion; -- no hay
-- select * from estado; -- ya estan
select * from imagen; -- no hay nada
select * from img_blog; -- no hay 
-- select * from modo_de_uso; -- ya estan
select * from orden; -- no hay 
-- select * from presentacion; -- ya tenemos info de los tamaños
select * from productos; -- no hay nada
select * from productos_has_imagen; -- no hay nada
select * from productos_has_orden; -- no hay nada
-- select * from seccion; -- ya hay cosas
select * from seccion_has_productos; -- no hay nada
select * from usuario; -- no hay nada