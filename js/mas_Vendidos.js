api("./assets/json/masVendido.json");
console.log("*****Leo datos**********")
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
console.log("*****Termino de leer datos**********")
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

const listaProducto = document.getElementById('lista-productos')

//**Descripcion de productos ventana modal********************************************************************************************************************************************************* */

listaProducto.addEventListener('click', e => {
    verRapido1(e);
})

const verRapido1 = e => {
    // console.log(e.target);
    // console.log(e.target.classList.contains('agregar-carrito-producto'))
    if (e.target.classList.contains('verRapido')) {
        // console.log(e.target.parentElement)
        url = document.querySelector("img").getAttribute("src")
        nombre = e.target.parentElement.querySelector('.producto_nombre').textContent
        precio = e.target.parentElement.querySelector('.producto_precio').textContent
        id = e.target.getAttribute("id")
        let modalP = JSON.parse(localStorage.getItem('producto'))
        modalProductos(modalP, id);
    }

}

function modalProductos(data, id) {
    let datos = "";
    for (const producto in data) {
        let productos = data[producto]
        if (productos.id == id) {

            datos += `  
     <div>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
     </div>
     <div class="modal-body">
         <div class="quickview_body">
             <div class="container">
                 <div class="row">
                     <div class="col-12 col-lg-6 imagen-ind">
                         <img src=${productos.url} class="img-ind modal-img" alt="">
                     </div>
                     <div class="col-12 col-lg-6  descripcion2">
                         <div>
                             <h1 class="producto-nombre-ind">${productos.nombre_producto}</h2>
                             <span class="producto-precio-ind">${productos.precio}</span>
                             <p class="descripcion1 mt-2 mb-2">${productos.descripcion}</p>                                                         
                           </div>                
                         <div class="share_wf mt-30">
                             <p>Musaraña</p>
                             <div class="_icon">
                                 <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                 <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                 <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                 <a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>`;
        }
    }
    document.getElementById('ModalProducto1').innerHTML = datos;
}
/**AgregarProducto a la local********************************************************************************************************************************************************* */
let carrito = {}

listaProducto.addEventListener('click', e => {
    addCarrito(e);
})

const addCarrito = e => {
    // console.log(e.target);
    // console.log(e.target.classList.contains('agregar-carrito-producto'))
    if (e.target.classList.contains('agregar-carrito-producto')) {
        // console.log( e.target.parentElement)

        setCarrito(e.target.parentElement) 
        document.getElementById("popProducto").style.visibility = "visible";
        document.getElementById("popProducto").style.opacity = 1;
        leer();
        // contador();

    }

}

let setCarrito = objecto => {
    // console.log(objecto)    
    const productoCarrito = {
        id: objecto.querySelector('.click').getAttribute("id"),
        nombre_producto: objecto.querySelector('.producto_nombre').textContent,
        precio: objecto.querySelector('.producto_precio').textContent,
        url: objecto.querySelector('.click').getAttribute("src"),
        cantidad: 1
    }
    // console.log(productoCarrito);
  

    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        console.log("hay información")
        console.log(carrito)
    }
    else {
        console.log("no hay")
        console.log(carrito)
        carrito = {}
    }

  if (carrito.hasOwnProperty(productoCarrito.id)) {
        // console.log("hola")
        productoCarrito.cantidad = carrito[productoCarrito.id].cantidad + 1
    }

    //Coleccion de datos, ... es una copia de productos spre operatio 
    // console.log(productoCarrito.cantidad)
    carrito[productoCarrito.id] = { ...productoCarrito }
    // console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
}


function closePopProducto() {
    document.getElementById("popProducto").style.visibility = "hidden";
    document.getElementById("popProducto").style.opacity = 0;

}
