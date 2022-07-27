console.log("Sesión tenebrosa de JS09 muajajajajaja");

// GET request for remote image in node.js
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
  console.log("Solicitud Json:" + JSON.stringify(datos));

  for (let user of datos) {
    let llave = JSON.stringify(user.id)
    console.log(llave)
    localStorage.setItem(llave, JSON.stringify(user));
  }



}

function recuperar() {
  let datos = "";
  for (let i = 1; i < localStorage.length + 1; i++) {
    lista = JSON.parse(localStorage.getItem(i));
    console.log(lista.nombre_producto)
    datos = datos + `<div class="col">
      <div class="card h-100">        
        <div class="card-body">
          <h5 class="card-title">${lista.nombre_producto}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${lista.nombre_producto}</li>
            <li class="list-group-item">${lista.nombre_producto}</li>
            <li class="list-group-item">ID  ${lista.id}</li>
          </ul>
        </div>
      </div>
      </div>`;
  }
  // console.log(datos)
  document.getElementById("PruebaProducto").innerHTML = datos;
}


recuperar() 







//  function existentes() {
//   let datos = "";
//   for (let i = 1; i < localStorage.length; i++) {
//       lista = JSON.parse(localStorage.getItem(i));
//       datos = datos + `<div class="col">
//       <div class="card h-100">
//         <img src="${lista.nombre_producto}" class="avatar">
//         <div class="card-body">
//           <h5 class="card-title">${lista.descripcion}</h5>
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">${lista.precio}</li>
//             <li class="list-group-item">${lista.precio}</li>
//             <li class="list-group-item">ID  ${lista.id}</li>
//           </ul>
//         </div>
//       </div>
//       </div>`;
//   }
//   document.getElementById("data").innerHTML = datos;
// }


// existentes();


