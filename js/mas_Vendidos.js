api("./assets/json/masVendido.json");
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
    let llave
    cuenta=0;
    for (let user of usuario) {
        llave = JSON.stringify(user.id)
        localStorage.setItem(llave, JSON.stringify(user));
        cuenta++;
    } 
    
    Productos("Tarjetas-js", "masVendido", '<div class="col-lg-6 col-md-6 col-sm-6 col-12 productos mt-3 mb-3 align-content-center">', cuenta);
    // Productos("Tarjetas-js", "masVendido", '<div class="col-lg-6 col-md-6 col-sm-6 col-12 productos mt-3 mb-3">', cuenta);
     
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
            datos +=
                `${columna}
      <div class="card tarjeta-producto border-0">
          <!-- SE COLOCA LA TARJETA CON LA CLASSE DE bootstrap card -->
          <img src=${lista.url} class="img-producto click" id="${lista.id}" alt="..." >
          <span class="name text-center">${lista.categoria} DE ${lista.nombre_producto}</span>
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
          <span class="costo text-center">${lista.precio}</span>
          <div class="row botones-inf w-100 mx-auto text-center">
              <button type="button" class="ver-button col-11 mx-auto p-1 m-2">Añadir al carrito</button>
          </div>
      </div>
      </div>`;
    }
    document.getElementById(id_Html).innerHTML = datos;
    console.log(document.getElementById(id_Html).innerHTML = datos);
}

// <button type="button" class="ver-button col-11 mx-auto p-1">Añadir al carrito</button>





