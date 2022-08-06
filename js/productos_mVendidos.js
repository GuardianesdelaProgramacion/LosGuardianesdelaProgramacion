// console.log("Archivo js de productos");
api("../assets/json/masVendido.json");
//Funcion para obtner los datos de json
function api(url) {
    fetch(url)
        .then((responseJSON) => {
            return responseJSON.json();
        })
        .then(usuario => {
            guardar(usuario.data.data)
        }
        )
}
//Funcion para guardar los datos en la localStorage
function guardar(usuario) {
    let llave;
    let cuenta=0;
    for (let user of usuario) {
        llave = JSON.stringify(user.id);
        localStorage.setItem(llave, JSON.stringify(user));
        cuenta++;
    }  
    Productos("Tarjetas-js", "masVendido", '<div class="col-lg-3 col-md-4 col-sm-6 col-12 productos mt-3 mb-3">', cuenta);
}

/**
 * Funcion para imprimir en el html de forma dinamica los productos
 * @param {*} id_Html El id de la etiqueta del HTML en donde se va a inserta las nuevas etiquetas
 * @param {*} parametro EL clave que queremos obtener en este caso queremos queremos que se muestren los mas vendidos
 * @param {*} columna El primer div en donde aparece la clases bootstrap para hacerlo responsivo
 * @param {int} nproductos
 */
function Productos(id_Html, parametro, columna, nproductos) {
    console.log("hola_6");
    let datos = "";
    for (let i = 1; i <= nproductos; i++) {
        console.log("hola_7");
        let lista = JSON.parse(localStorage.getItem(i));
        // if (lista != undefined || null); { 
            console.log(lista.seccion);
         if (lista.seccion == parametro) {
            datos +=
                `${columna}
      <div class="card tarjeta-producto border-0">
          <!-- SE COLOCA LA TARJETA CON LA CLASSE DE bootstrap card -->
          <img src=${lista.url} class="img-producto click" id="${lista.id}" alt="..." >
          <span class="producto-nombre text-center">${lista.nombre_producto}</span>
          <div class="estrellas mx-auto text-center">
              <span >&#9733</span>
              <span>&#9733</span>
              <span>&#9733</span>
              <span>&#9733</span>
              <span>&#9733</span>
          </div>
          <span class="producto-precio text-center">${lista.precio}</span>
          <div class="row botones-inf w-100 mx-auto text-center">
              <button type="button" class="botones col-11 mx-auto p-1" > <span class="inf"> Añadir al
                      carrito
                  </span> </button>

                  <button type="button" class="botones col-10 mx-auto m-2 p-1"   id="${lista.id} > <span class="inf"> Ver rapido
              </span> </button>
          </div>
      </div>
      </div>`;
      }
        // }
    }
    document.getElementById(id_Html).innerHTML = datos;
    // document.getElementById("tituloProducto").innerHTML = "PRODUCTOS";
    descripcion(".click")
}


/**
 * Funcion para buscar el id del la imagene seleccionada y mandarlo a la pagina de producto de los detalles
 * @param {*} clase La clase de las imagnes de los productos para buscar su id en el html
 */

function descripcion(clase) {
    document.querySelectorAll(clase).forEach(el => {
        el.addEventListener("click", e => {
            const id = e.target.getAttribute("id");
            console.log("El id del producto " + id)
            let id_descripcion = { "id_descrip": id };
            localStorage.setItem("id_descrip", JSON.stringify(id_descripcion));
            // envio();
            // function envio() {
                location.href = "Producto_detalles.html?"+id;
            // }
            return id;
        });
    });
}


