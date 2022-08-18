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



