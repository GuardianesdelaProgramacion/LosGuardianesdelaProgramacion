console.log("Sesión tenebrosa de JS09 muajajajajaja");

// GET request for remote image in node.js codigo de sergio
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
  console.log("Solicitud Json Productos:" + JSON.stringify(datos));
  masVendido = await adquirirDatos("Json", "../assets/json/masVendido.json");
  console.log("Solicitud Json Mas Vendido:" + JSON.stringify(datos));


  for (let user of datos) {
    let llave = JSON.stringify(user.id)
    localStorage.setItem(llave, JSON.stringify(user));
  }

  for (let user of masVendido) {
    let llave = JSON.stringify(user.id)
    localStorage.setItem(llave, JSON.stringify(user));
  }

  catalogosProductos("Tarjetas-js");
  vendido("masVendido");

}

//Función para mostrar los productos de forma dinamica 
function catalogosProductos(id) {
  let datos = "";
  for (let i = 1; i < localStorage.length + 1; i++) {
    lista = JSON.parse(localStorage.getItem(i));
    if (lista.seccion == "catalogo") {
      datos = datos +
        `<div class="col-lg-3 col-md-4 col-sm-6 col-6 productos mt-3 mb-3">
    <div class="card tarjeta-producto border-0">
        <!-- SE COLOCA LA TARJETA CON LA CLASSE DE bootstrap card -->
        <img src=${lista.url} class="img-producto" alt="..." >
        <span class="producto-nombre text-center">${lista.nombre_producto}</span>
        <div class="estrellas mx-auto text-center">
            <span>&#9733</span>
            <span>&#9733</span>
            <span>&#9733</span>
            <span>&#9733</span>
            <span>&#9733</span>
        </div>
        <span class="producto-precio text-center">${lista.precio}</span>
        <div class="row botones-inf w-100 mx-auto text-center">
            <button type="button" class="botones col mx-auto p-2"> <span class="inf"> Añadir al
                    carrito
                </span> </button>
        </div>
    </div>
    </div>`;
    }
  }
  document.getElementById(id).innerHTML = datos;
}


function vendido(id) {
  let datos = "";
  for (let i = 1; i < localStorage.length + 1; i++) {
    lista = JSON.parse(localStorage.getItem(i));
    if (lista.seccion == "masVendido") {
      datos+=
        `<div class="col-lg-6 col-md-5 col-sm-5 col-6 productos">
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
        <span class="producto-precio text-center">${lista.precio}</span>
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
}










