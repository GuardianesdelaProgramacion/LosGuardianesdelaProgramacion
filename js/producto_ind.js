let prueba= JSON.parse(localStorage.getItem('id_descrip'));
console.log ("El id del producto: "+ prueba.id_descrip);


descripcion2("prueba",prueba.id_descrip);
// function envio(){
// location.href="Producto_individual.html"
      //obj para guardar usuarios
      // var initialPage = location.pathname;
      // location.replace('Producto_individual.html#' + initialPage);

              
      
      function descripcion2(id, id_producto) {
        console.log(id_producto+"hola")
        let datos = "";
        for (let i = 1; i <=id_producto; i++) {
          let lista = JSON.parse(localStorage.getItem(i));
          console.log(lista.id+" vs "+ id_producto)
          
          if (lista.id == id_producto) {
            datos += `<div class="col-lg-6 col-md-12 col-sm-12 mx-auto text-center">
            <div class=" mb-3">
                <img src=${lista.url}  class="img-fluid img-producto-individual ">
            </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="producto-mes mx-auto">
                <div>
                    <h2>${lista.nombre_producto}</h2>
                    <span class="producto-precio">${lista.precio}</span>
                    <p class="descripcion1 mt-2 mb-2">${lista.descripcion}</p>
                    <div class="rating-container">
                    <input type="radio" name="rating" id="5${lista.nombre_producto}">
                    <label for="5${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
                    <input type="radio" name="rating" id="4${lista.nombre_producto}">
                    <label for="4${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
                    <input type="radio" name="rating" id="3${lista.nombre_producto}">
                    <label for="3${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
                    <input type="radio" name="rating" id="2${lista.nombre_producto}">
                    <label for="2${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
                    <input type="radio" name="rating" id="1${lista.nombre_producto}">
                    <label for="1${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
                    </div>                    
                    <input  class="incremento col-2 py-2 text-center" type="number" value="1" >                    
                    <button type="button" class="ver-button productos-botones  mx-auto p-2 col-8" style="margin: 0 100px 0 100px;">Añadir al carrito</button>                  
                                     
                    <button type="button" class="ver-button w-25 mx-auto p-2 m-2 col-12">Comprar</button> 
                                                  
                </div>
            </div>
        </div> 
            `;
          }
        }
        console.log(datos)
         document.getElementById(id).innerHTML = datos;      
      }






