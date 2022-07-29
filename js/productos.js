console.log("Sesión tenebrosa de JS09 muajajajajaja");

// GET request for remote image in node.js. Autor del codigo SERGIO TORRES
async function adquirirDatos(proveedor = "Axios", direccionhttp) {
  if (proveedor == "Axios") {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: direccionhttp,
        responseType: "stream",
      })
        .then((usuarios) => {
          //console.log("Axios: "+JSON.stringify(usuarios));
          resolve(usuarios.data.data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  } else if (proveedor == "Fetch") {
    return new Promise((resolve, reject) => {
      fetch(direccionhttp)
        .then((responseJSON) => responseJSON.json())
        .then((usuarios) => {
          //console.log("Fetch: "+JSON.stringify(usuarios));
          resolve(usuarios.data)
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }
  else {
    return new Promise((resolve, reject) => {
      fetch(direccionhttp)
        .then((responseJSON) => responseJSON.json())
        .then((usuarios) => {
          //console.log("Json: "+JSON.stringify(usuarios));
          resolve(usuarios.data.data)
        }
        )
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }
}

solicitudBtn();
async function solicitudBtn() {
  // datos = await adquirirDatos("Axios", "https://reqres.in/api/users?delay=3");
  // console.log("Solicitud Axios:" + JSON.stringify(datos));
  // datos = await adquirirDatos("Fetch", "https://reqres.in/api/users?delay=3");
  // console.log("Solicitud Fetch:" + JSON.stringify(datos));
  datos = await adquirirDatos("Json", "../assets/json/productos.json");
  // console.log("Solicitud Json Productos:" + JSON.stringify(datos));
  masVendido = await adquirirDatos("Json", "../assets/json/masVendido.json");
  // console.log("Solicitud Json Mas Vendido:" + JSON.stringify(datos));

  //Se guardan los json en la localStorage
  guardar(datos);
  guardar(masVendido)

//Manda a llamr a la funcion productos para mostrar productos de forma dinamica
//Productos("el id de la etiqueta en donde se insertara,que seccion")
  Productos("Tarjetas-js","catalogo",'<div class="col-lg-3 col-md-4 col-sm-6 col-6 productos mt-3 mb-3">');
  Productos("masVendido","masVendido",'<div class="col-lg-6 col-md-5 col-sm-5 col-6 productos">');


//Manda a llamar la funcion de descripcion al dar clic en la foto del producto 
  let descripcionIndividual = document.getElementById("1");
  descripcionIndividual.addEventListener('click', descripcionProducto, true);  
  function descripcionProducto() {
    return descripcion("rescribir","1");
  }



}

//Guardar los datos en la local Storage
function guardar(usuario) {
  for (let user of usuario) {
      let llave = JSON.stringify(user.id)
      localStorage.setItem(llave, JSON.stringify(user));
  }
}


//Función para mostrar los productos de forma dinamica 
function Productos(id,seccion,columna) { 
  let datos = ""; 
  for (let i = 1; i < localStorage.length + 1; i++) {
    lista = JSON.parse(localStorage.getItem(i)); 
    if ( lista.seccion == seccion) { 
     datos+= 
        `${columna}
    <div class="card tarjeta-producto border-0">
        <!-- SE COLOCA LA TARJETA CON LA CLASSE DE bootstrap card -->
        <img src=${lista.url} class="img-producto" id="${lista.id}" alt="..." >
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
            <button type="button" class="botones col mx-auto p-2" > <span class="inf"> Añadir al
                    carrito
                </span> </button>
        </div>
    </div>
    </div>`;
    }
  }
  document.getElementById(id).innerHTML = datos;
  document.getElementById("tituloProducto").innerHTML = "PRODUCTOS";  
}


let filtroJabon = document.getElementById("filtroJabon");
filtroJabon.addEventListener('click', filtrojabon, true);

function filtrojabon() {
    return filtro("Tarjetas-js","jabon");
}

let filtroShampoo = document.getElementById("filtroShampoo");
filtroShampoo.addEventListener('click', filtroshampoo, true);

function filtroshampoo() {
  return filtro("Tarjetas-js","shampoo");
}

let filtroTodo = document.getElementById("filtroTodo");
filtroTodo.addEventListener('click', filtrotodo, true);

function filtrotodo() {
  return Productos("Tarjetas-js","catalogo",'<div class="col-lg-3 col-md-4 col-sm-6 col-6 productos mt-3 mb-3">');;
}




//Funcion del filtros
function filtro(id,categoria) {
  let datos = "";
  for (let i = 1; i < localStorage.length + 1; i++) {
    lista = JSON.parse(localStorage.getItem(i));
    if (lista.categoria == categoria) {
            datos+=
        `<div class="col-lg-3 col-md-4 col-sm-6 col-6 productos mt-3 mb-3">
    <div class="card tarjeta-producto border-0">
        <img src=${lista.url} class="img-producto" alt="...">
        <span class="producto-nombre text-center">${lista.nombre_producto}</span>
        <div class="estrellas mx-auto text-center">
            <span>&#9733</span>
            <span>&#9733</span>
            <span>&#9733</span>
            <span>&#9733</span>
            <span>&#9733</span>
        </div>
        <span class="producto-precio text-center">${lista.categoria}</span>
        <div class="row botones-inf w-100 mx-auto text-center">
            <button type="button" class="botones col mx-auto p-1"> <span class="inf"> Añadir al
                    carrito
                </span> </button>
        </div>
    </div>
    </div>`;
    }
  }
  document.getElementById(id).innerHTML = datos;
  document.getElementById("tituloProducto").innerHTML = categoria.toUpperCase() ;
  

}






//Funcion de pruebas
function descripcion(id,id_producto) {
  let datos = "";
  for (let i = 1; i < localStorage.length + 1; i++) {
    lista = JSON.parse(localStorage.getItem(i));
    if (lista.id == id_producto) {
            datos+=
        `    <div class="container my-5">
        <div class="row justify-content-center producto-central ">
            <div class="col-lg-6 col-md-12 col-sm-12 mx-auto text-center">
                <div class="mt-5 mb-3">
                    <img src=${lista.url}  class="img-fluid img-producto-individual ">
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="producto-mes  w-75 mx-auto">
                    <div>
                        <h2>${lista.nombre_producto}</h2>
                        <span class="producto-precio">${lista.precio}</span>
                        <p class="descripcion1">${lista.descripción}</p>
                        <div class="estrellas mx-auto ">
                            <span>&#9733</span>
                            <span>&#9733</span>
                            <span>&#9733</span>
                            <span>&#9733</span>
                            <span>&#9733</span>
                        </div>
                        <input  class="incremento  py-2 text-center" type="number" value="1">
                        <button type="button" class="botones w-50 mt-3 me-2 p-2"> <span class="inf"> Añadir al
                            carrito
                        </span> </button>
                        <button type="button " class="botones w-25 my-2 p-2"> <span class="inf">Comprar </span> </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    }
  }
  document.getElementById(id).innerHTML = datos;
  
}

