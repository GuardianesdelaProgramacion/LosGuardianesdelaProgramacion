console.log("Carrito.js");

function limpiarTabla(){
	document.getElementById('data').innerHTML = '';
}
function limpiarTabla2(){
	document.getElementById('data2').innerHTML = '';
}
function eliminarFila(index) {
  $("#fila" + index).remove();
}
//apiUrl();
/*function apiUrl() {    
//let url = document.getElementById('api').value;
let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error));

const mostrarData = (data) => {
  console.log(data)
let body = ''
for (let i = 0; i < data.length; i++) {
  body += `<tr><td>${data[i].name}</td><td>${data[i].username}</td><td>${data[i].email}</td><td>${data[i].id}</td><td><img src=\'${data[i].avatar}\'</td></tr>`
  localStorage.setItem('data1', JSON.stringify(data));
}
document.getElementById('dat').innerHTML = body;
 }
}
*/
export function apiAnt(){
     apianterior = localStorage.getItem('data1');
	 console.log(apianterior)
}





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

  catalogosProductos("data");
  vendido("data2");

}





//Función para mostrar los productos de forma dinamica 
 function catalogosProductos(data) {
  let datos = "";
  for (let i = 1; i < localStorage.length + 1; i++) {
    lista = JSON.parse(localStorage.getItem(i));
    if (lista.seccion == "catalogo") {
      datos+= 
        `<tr class="mytr" id="fila${lista.id}">
        <td><button value="Eliminar" style="font-size:30px" class="bi bi-x buttonx" onclick="eliminarFila(${lista.id})"></button></td>
<td><img class="img_carrito" src="${lista.url}"alt="Producto 1" /></td>
<td><p>${lista.descripción}<p></td>
        <td><span>${lista.precio}<span></td>
        <td><input class="input_carrito" type="number" min="1" max="15"></td>
        <td>$<span>60.00<span></td>
    </tr>
      `;
    }
  }
  document.getElementById(data).innerHTML = datos;
}

 function vendido(data2) {
  let datos = "";
  let o=1;
  for (let i = 1; i < localStorage.length + 1; i++) {
    lista = JSON.parse(localStorage.getItem(i));
    if (lista.seccion == "catalogo") {
      datos+= 
        `<tr class="mytr" id="fila${lista.id}">
        <td><button value="Eliminar" style="font-size:30px;background-color:#ECB390;" class="bi bi-x buttonx" onclick="eliminarFila(${lista.id})"></button></td>
<td><img class="img_carrito2" src="${lista.url}"alt="Producto 1" /></td>
        <td><span>${lista.precio}<span></td>
        <td><input class="input_carrito" type="number" min="1" max="15"></td>
    </tr>
      `;
    }
  }
  document.getElementById(data2).innerHTML = datos;
}



