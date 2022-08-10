console.log("Archivo js de productos");
api("../assets/json/productos.json");
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
    for (let user of usuario) {
        llave = JSON.stringify(user.id)
        localStorage.setItem(llave, JSON.stringify(user));
    }
    console.log("valor de la llave " + llave)
    Productos("Tarjetas-js", "catálogo", '<div class="col-lg-3 col-md-4 col-sm-6 col-12 productos mt-3 mb-3">',llave);
    filtro(".categoria", llave)

    let filtroTodo = document.getElementById("filtroTodo");
    filtroTodo.addEventListener('click', filtrotodo, true);

    function filtrotodo() {
        return Productos("Tarjetas-js", "catálogo", '<div class="col-lg-3 col-md-4 col-sm-6 col-12 productos mt-3 mb-3">', llave);
    }
}

/**
 * Funcion para imprimir en el html de forma dinamica los productos
 * @param {*} id_Html El id de la etiqueta del HTML en donde se va a inserta las nuevas etiquetas
 * @param {*} parametro EL clave que queremos obtener en este caso queremos queremos que se muestren todas las categorias
 * @param {*} columna El primer div en donde aparece la clases bootstrap para hacerlo responsivo
 * @param {int} nproductos
 */
function Productos(id_Html, parametro, columna, nproductos) {
    let datos = "";
    for (let i = 1; i <= nproductos; i++) {
        let lista = JSON.parse(localStorage.getItem(i));
        // if (lista != undefined || null); {    
        if (lista.seccion == parametro) {
            datos +=
                `${columna}
      <div class="card tarjeta-producto border-0">
          <!-- SE COLOCA LA TARJETA CON LA CLASSE DE bootstrap card -->
          <img src=${lista.url} class="img-producto click" id="${lista.id}" alt="..." >
          <span class="producto-nombre text-center">${lista.nombre_producto}</span>
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
          <span class="producto-precio text-center">${lista.precio}</span>
          <div class="row botones-inf w-100 mx-auto text-center">         
          <button type="button" class="ver-button col-11 mx-auto p-1 m-2">Añadir al carrito</button>
        </div>

                  <button type="button" class="ver-button col-10 mx-auto m-2 p-1"   id="${lista.id} > <span class="inf"> Ver rapido
              </span> </button>
          </div>
      </div>
      </div>`;
        }
        // }
    }
    document.getElementById(id_Html).innerHTML = datos;
    document.getElementById("tituloProducto").innerHTML = "PRODUCTOS";
    descripcion(".click")
}



/**
 * Funcion para busacar los id de los html de cada categoria y manda a una funcion para filtrar los productos
 * @param {*} clase_categoria La clase de los botones de las categorias de los productos para buscar su id en el html
 * @param {*} llave 
 */

function filtro(clase_categoria, llave) {
    let id;
    document.querySelectorAll(clase_categoria).forEach(el => {
        el.addEventListener("click", e => {
            id_categoria = e.target.getAttribute("id");
            filtro2("Tarjetas-js", id_categoria, llave)
            return id;
        });
    });
}

/**
 * 
 * @param {*} id_Html_filtro El id de la etiqueta del HTML en donde se va a inserta las nuevas etiquetas de los nuevos productos segun la categoria
 * @param {*} categoria La categoria que se va filtrar
 * @param {*} llave 
 */
function filtro2(id_Html_filtro, categoria, llave) {
    let datos = "";
    for (let i = 1; i <= llave; i++) {
        lista = JSON.parse(localStorage.getItem(i));
        if (lista.categoria == categoria) {
            datos +=
                `<div class="col-lg-3 col-md-4 col-sm-6 col-6 productos mt-3 mb-3">
      <div class="card tarjeta-producto border-0">
          <img src=${lista.url} class="img-producto click" id="${lista.id}" alt="...">
          <span class="producto-nombre text-center " >${lista.nombre_producto}</span>
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
          <span class="producto-precio text-center">${lista.categoria}</span>
          <div class="row botones-inf w-100 mx-auto text-center">
          <div class="row botones-inf w-100 mx-auto text-center">
          <button type="button" class="ver-button col-11 mx-auto p-1 m-2">Añadir al carrito</button>
      </div>
                  <button type="button" class="ver-button col-10 mx-auto m-2 p-1"  id="${lista.id}  > <span class="inf"> Ver rapido
                  </span> </button>
          </div>
      </div>
      </div>`;
        }
    }
    document.getElementById(id_Html_filtro).innerHTML = datos;
    document.getElementById("tituloProducto").innerHTML = categoria.toUpperCase();
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
            location.href = "Producto_detalles.html?" + id;
            // }
            return id;
        });
    });
}


