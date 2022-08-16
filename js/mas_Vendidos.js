api("./assets/json/masVendido.json");
/**Obtener los datos realizando una petición de fetch******************************************************************************************************************************************************** */
let masVendido;
function api(url) {
    fetch(url)
        .then((responseJSON) => {
            return responseJSON.json();
        })
        .then(masVendido => {
            if (localStorage.getItem('masVendido')) {
                masVendido = JSON.parse(localStorage.getItem('masVendido'));
                console.log("Linea 13 productos de local");
                tarjetaD(masVendido);
                function filtrotodo() {
                    return tarjetaD(masVendido);
                }
            }

            else {
                console.log("Linea19");
                guardar(masVendido.data);
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
    localStorage.setItem('masVendido', JSON.stringify(datos))
    console.log("Datos de json ")
    tarjetaD(datos);
    let filtroTodo = document.getElementById("filtroTodo");
    filtroTodo.addEventListener('click', filtrotodo, true);
    function filtrotodo() {
        return tarjetaD(masVendido);
    }
}


/**Tarjetas dinamicas********************************************************************************************************************************************************* */
const tarjetaD = (data) => {
    let datos = "";
    data.forEach(masVendido => {
        datos +=
            `<div class="col-lg-6 col-md-6 col-sm-6 col-12 productos mt-3 mb-3 align-content-center">
                <div class="card tarjeta-producto border-0">
                    <img src=${masVendido.url} class="img-producto click" id="${masVendido.id}" alt="...">
                    <span class="producto_nombre text-center">${masVendido.nombre_producto}</span>
                    <span class="producto_precio text-center">${masVendido.precio}</span>
                    <button type="button" class="ver-button col-11 mx-auto p-1 m-2 agregar-carrito-producto">Añadir
                            al carrito</button>
                    <button type="button" class="ver-button col-11 mx-auto m-2 p-1 verRapido" id="${masVendido.id} " data-bs-toggle="modal" data-bs-target="#ModalProducto"> Ver
                            rapido </button>
                </div>
                </div>`
    });
    document.getElementById("Tarjetas-js").innerHTML = datos;
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
                location.href = " ./html/Producto_detalles.html?" + id;
            }
            return id;
        });
    });
}





