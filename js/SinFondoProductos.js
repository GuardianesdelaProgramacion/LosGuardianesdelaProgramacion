api("../assets/json/productosSinFondo.json");
/**Obtener los datos realizando una petición de fetch******************************************************************************************************************************************************** */
let productosSin;
function api(url) {
    fetch(url)
        .then((responseJSON) => {
            return responseJSON.json();
        })
        .then(productosSin => {
            if (localStorage.getItem('productosSin')) {
                productosSin = JSON.parse(localStorage.getItem('productosSin'));
                console.log("Linea 13 productos de local");
                tarjetaD(productosSin);
                function filtrotodo() {
                    return tarjetaD(productosSin);
                }
            }

            else {
                console.log("Linea19");
                guardar(productosSin.data);
            }
        }
        )
}

/**Guardar los datos********************************************************************************************************************************************************* */
/**
 * Funcion para guardar los datos en la localStorage
 * @param {*} datos Datos del json que fueron traidos de Fetch
 */
 const guardar = datos => {
    localStorage.setItem('productosSin', JSON.stringify(datos))
    console.log("Datos de json ")
    tarjetaD(datos);
    let filtroTodo = document.getElementById("filtroTodo");
    filtroTodo.addEventListener('click', filtrotodo, true);
    function filtrotodo() {
        return tarjetaD(productosSin);
    }
}


/**Tarjetas dinamicas********************************************************************************************************************************************************* */
const tarjetaD = (data) => {
    let datos = "";
    data.forEach(productosSin => {
        datos +=
        `<div class="card swiper-slide" style="border: none;">
        <div class="image-content">
          <span class="overlay"></span>
          <div class="card-image">
            <img src="${productosSin.url}" alt="" class="card-img click" id="${productosSin.id}"/>
          </div>
        </div>
        <div class="card-content">
            <h2 class="name">${productosSin.nombre_producto}</h2>
            <p class="costo">${productosSin.precio}</p>
            <button class="ver-button" id="${productosSin.id}">Añadir al carrito</button>
        </div>
      </div>`
    });
    document.getElementById("SinFondo-js").innerHTML = datos;
    console.log(document.getElementById("SinFondo-js").innerHTML = datos);
    // document.getElementById("tituloProducto").innerHTML = "PRODUCTOS";
    descripcion(".click");
}

/**Descripcion de productos********************************************************************************************************************************************************* */

function descripcion(clase) {
    document.querySelectorAll(clase).forEach(el => {
        el.addEventListener("click", e => {
            const id = e.target.getAttribute("id");
            console.log("El id del producto " + id)
            let id_descripcion = { "id_descrip": id };
            localStorage.setItem("id_descrip", JSON.stringify(id_descripcion));
            envio();
            function envio() {
                location.href = "./Producto_detalles.html?" + id;
            }
            return id;
        });
    });
}



// <button type="button" class="ver-button col-11 mx-auto p-1">Añadir al carrito</button>

// function Productos(id_Html, parametro, columna, nproductos) {
//     let datos = "";
//      for (let i = 1; i <= nproductos; i++) {
//         let lista = JSON.parse(localStorage.getItem(i));
//             datos +=
//                 `${columna}
//       <div class="card tarjeta-producto border-0">
//           <!-- SE COLOCA LA TARJETA CON LA CLASSE DE bootstrap card -->
//           <img src=${lista.url} class="img-producto click" id="${lista.id}" alt="..." >
//           <span class="name text-center">${lista.categoria} DE ${lista.nombre_producto}</span>
//           <div class="rating-container">
//           <input type="radio" name="rating" id="5${lista.nombre_producto}">
//           <label for="5${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
//           <input type="radio" name="rating" id="4${lista.nombre_producto}">
//           <label for="4${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
//           <input type="radio" name="rating" id="3${lista.nombre_producto}">
//           <label for="3${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
//           <input type="radio" name="rating" id="2${lista.nombre_producto}">
//           <label for="2${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
//           <input type="radio" name="rating" id="1${lista.nombre_producto}">
//           <label for="1${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
//           </div>
//           <span class="costo text-center">${lista.precio}</span>
//           <div class="row botones-inf w-100 mx-auto text-center">
//               <button type="button" class="ver-button col-11 mx-auto p-1 m-2">Añadir al carrito</button>
//           </div>
//       </div>
//       </div>`;
//     }
//     document.getElementById(id_Html).innerHTML = datos;
//     console.log(document.getElementById(id_Html).innerHTML = datos);
// }



