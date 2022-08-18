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
            
        </div>
      </div>`
    });
    document.getElementById("SinFondo-js").innerHTML = datos;
}



/**AgregarProducto a la local********************************************************************************************************************************************************* */
const listaProducto = document.getElementById('lista-productos')

let carrito = {}

listaProducto.addEventListener('click', e => {
    addCarrito(e);
})

const addCarrito = e => {
    // console.log(e.target);
    // console.log(e.target.classList.contains('agregar-carrito-producto'))
    if (e.target.classList.contains('agregar-carrito-producto')) {
        // console.log( e.target.parentElement)

        setCarrito(e.target.parentElement.parentElement)
        console.log("/////////Hola1///////////////")
        console.log(e.target.parentElement.parentElement)
        console.log("/////////Hola2////////////")
        document.getElementById("popProducto").style.visibility = "visible";
        document.getElementById("popProducto").style.opacity = 1;
     
        // contador();

    }

}

let setCarrito = objecto => {
    // console.log(objecto)    
    const productoCarrito = {
        id: objecto.querySelector('.click').getAttribute("id"),
        nombre_producto: objecto.querySelector('.name').textContent,
        precio: objecto.querySelector('.costo').textContent,
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

