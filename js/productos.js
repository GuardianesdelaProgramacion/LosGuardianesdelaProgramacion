console.log("LOS GUARDINES DE LA PROGRAMCIÓN");
/**Obtener los datos realizando una petición de fetch******************************************************************************************************************************************************** */

api("https://musarana.herokuapp.com/api/productos");
let producto;
function api(url) {
    fetch(url)
        .then((responseJSON) => {
            return responseJSON.json();
        })
        .then(productos => {
            if (localStorage.getItem('producto')) {
                producto = JSON.parse(localStorage.getItem('producto'));
                console.log("Linea 13 productos de local");
                tarjetaDinamicas2(producto)
                let filtroTodo = document.getElementById("filtroTodo");
                filtroTodo.addEventListener('click', filtrotodo, true);
                function filtrotodo() {
                    return tarjetaDinamicas2(producto)
                }
            }

            else {
                console.log("Lineaff1kkk9");

                guardar(productos);
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
    let productoR = {}
     for(const producto in datos){      
        
        const productoP = {  
            id : datos[producto].idProductos,    
            nombre_producto: datos[producto].nombreProducto,   
            precio: datos[producto].precio,
            descripcion: datos[producto].descripcion,
            url : datos[producto].imagenproducto[0].imagen,
            seccion: datos[producto].seccion,
            categoria: datos[producto].categoria.categoria
        }   
        window.location.reload(); 
        // console.log(datos[producto].imagenproducto[producto].imagen) 
        // console.log(datos[producto].imagenproducto[0].imagen)
        productoR[productoP.id] = { ...productoP }
        // console.log(productoR)
        localStorage.setItem('producto', JSON.stringify(productoR))
    }

}

/**Tarjetas dinamicas********************************************************************************************************************************************************* */


const tarjetaDinamicas2 = data => {    
    let datos = "";
    for (const producto in data) {
        productoscarrito = data[producto]

        datos +=
        `<div class="col-lg-3 col-md-4 col-sm-6 col-12 productos mt-3 mb-3">
            <div class="card tarjeta-producto border-0">
                <img src=${productoscarrito.url} class="producto-card-imagen click" id="${productoscarrito.id}" alt="...">
                <span class="producto_nombre text-center mt-3 mb-1">${productoscarrito.nombre_producto}</span>
                
                <span class="producto_precio text-center"> ${productoscarrito.precio}</span>
                
                <span> MXN </span>
                <button type="button" class="ver-button col-11 mx-auto p-1 m-2 agregar-carrito-producto">Añadir
                        al carrito</button>
                <button type="button" class="ver-button col-11 mx-auto mt-2 mb-3 p-1 verRapido" id="${productoscarrito.id} " data-bs-toggle="modal" data-bs-target="#ModalProducto"> Ver
                        rápido </button>
            </div>
            </div>`;
    }
    document.getElementById("Tarjetas-js").innerHTML = datos;
    document.getElementById("tituloProducto").innerHTML = "PRODUCTOS";
    descripcion(".click")
}


/**Filtro de productos********************************************************************************************************************************************************* */
const main = document.getElementById('rescribir')

main.addEventListener('click', e => {
    prefiltro(e);
})

const prefiltro = e => {
    if (e.target.classList.contains('categoria')) {
        id_categoria = e.target.getAttribute("id")
        // console.log(id_categoria)
        producto = JSON.parse(localStorage.getItem('producto'));
        filtro(producto, id_categoria)
    }
}


const filtro = data => {    
    let datos = "";
    for (const carrito in data) {
        productoscarrito = data[carrito]
        if (productoscarrito.categoria == id_categoria) {
        datos +=
                `<div class="col-lg-3 col-md-4 col-sm-6 col-12 productos mt-3 mb-3">
                <div class="card tarjeta-producto border-0">
                    <img src=${productoscarrito.url} class="producto-card-imagen click" id="${productoscarrito.id}" alt="...">
                    <span class="producto_nombre text-center mt-3 mb-1">${productoscarrito.nombre_producto}</span>
                    <span class="producto_precio text-center"> ${productoscarrito.precio}</span>
                    <span> MXN </span>
                    <button type="button" class="ver-button col-11 mx-auto p-1 m-2 agregar-carrito-producto">Añadir
                            al carrito</button>
                    <button type="button" class="ver-button col-11 mx-auto mt-2 mb-3 p-1 verRapido" id="${productoscarrito.id} " data-bs-toggle="modal" data-bs-target="#ModalProducto"> Ver
                            rapido </button>
                </div>
                </div>`;

        }
    
    }
    document.getElementById("Tarjetas-js").innerHTML = datos;
            document.getElementById("tituloProducto").innerHTML = id_categoria.toUpperCase();
    
            descripcion(".click")
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
                location.href = "Producto_detalles.html?" + id;
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
                             <span class="producto-precio-ind" style="font-size: 18px"> ${productos.precio}</span>
                             <span> MXN </span>
                             <p class="descripcion1 mt-2 mb-2">${productos.descripcion}</p>                                                         
                           </div>                
                         <div class="share_wf mt-30">
                             <p>Musaraña</p>
                           <!--  <div class="_icon">
                                 <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                 <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                 <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                 <a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a>-->
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
        // console.log("hay información")
        // console.log(carrito)
    }
    else {
        console.log("no hay ")
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

/**Carrito********************************************************************************************************************************************************* */
document.addEventListener('DOMContentLoaded', () => {
    leer();
ocultar();
})

function ocultar() {
 if (localStorage.getItem('carrito') == '{}') {
    cnHiddenpagoytotal(); 
  }
  }

function cnHiddenpagoytotal(){
    document.getElementById('data2').innerHTML = '';
}



function leer() {

    let productoLocal = {}
    productoLocal = JSON.parse(localStorage.getItem('carrito'))
    // console.log(productoLocal)
    tarjetaDinamicas(productoLocal);
    contador(productoLocal);
}


const tarjetaDinamicas = data => {
    // console.log(data[1])
    let datos = "";
    for (const carrito in data) {
        productoscarrito = data[carrito]

        datos +=
            `<tr class="mytr" id="fila${productoscarrito.id}">
        <td><button value="Eliminar" style="font-size:20px;background-color:whith;" class="bi bi-x buttonx" onclick="eliminarFila(${productoscarrito.id})"></button></td>
        <td><img style="width: 120px;" src="${productoscarrito.url}" alt="Producto 1" /></td>
        <td><p style="font-size:10px">${productoscarrito.nombre_producto}</p></td>
        <td><p style="font-size:12px">${productoscarrito.cantidad}</p></td>
        <!-- <td><input class="input_carrito" type="number" min="1" max="${productoscarrito.cantidad}" value=${productoscarrito.cantidad}></td> -->
    </tr>
    `;
    }
    document.getElementById('data2').innerHTML = datos;
}


///eliminarProducto 

function eliminarFila(index) {
    $("#fila" + index).remove();
    // console.log(index)
    let carritoPreEliminado = JSON.parse(localStorage.getItem("carrito"));
    eliminar(carritoPreEliminado, index,);
    contador(carritoPreEliminado)

ocultar();

}

const eliminar = (carritoPreEliminado, index) => {
    for (const carrito in carritoPreEliminado) {
        console.log(carritoPreEliminado[carrito].id)
        //   console.log(productoscarrito[1])
        if (carritoPreEliminado[carrito].id == index) {
            console.log(carritoPreEliminado[carrito].id)
            delete (carritoPreEliminado[carrito])
            console.log(carritoPreEliminado)
            localStorage.setItem("carrito", JSON.stringify(carritoPreEliminado));
        }
    }
}


//Obtner el total de cantidad de productosy
const contador = data => {
    let cantidadPre = 0
    for (const carrito in data) {
        // console.log(data[carrito])
        productoscarrito = data[carrito]//No se borra       
        cantidadPre = cantidadPre + parseInt(productoscarrito.cantidad)
        console.log(cantidadPre)
    }
    document.getElementById('data3').innerHTML = cantidadPre;
}







