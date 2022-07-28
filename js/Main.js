/*import {limpiarTabla} from '../js/carrito.js';
import {eliminarFila} from '../js/carrito.js';
import {adquirirDatos} from '../js/carrito.js';
import {solicitudBtn} from '../js/carrito.js';
import {catalogosProductos} from '../js/carrito.js';*/
console.log("Main.js");

/*Carrito js*/ 
class carritoJs extends HTMLElement{
    constructor(){
        super();

    }


    connectedCallback(){
        this.innerHTML =
`<main class="main">
<h1 style="margin-top:50px">Carrito</h1>
<div class="div_carrito">
  <table class="table_carrito">
    <thead>
      <tr>
        <th style="width:5%"></th>
        <th style="width:20%">Producto</th>
        <th style="width:20%"></th>
        <th style="width:15%">Precio</th>
        <th style="width:10%">Cantidad</th>
        <th style="width:15%">Total</th>
      </tr>
    </thead>
    <tbody id="data"></tbody>
  </table>
  </form>
</div>
<br>
<div class="div_carrito">
  <form action="./Pago.html">
    <button id="pago" class="button_comprar">Proceder al pago</button>
  </form>
  <button onclick="limpiarTabla()" class="button_comprar">Proceder al pago</button>
</div>
`;
}
}

window.customElements.define("carrito-js", carritoJs);

/*Encabezado*/
class encabezadoJs extends HTMLElement{
    constructor(){
        super();

    }


    connectedCallback(){
        this.innerHTML =
`<div class="background-container">
<div class="card-container glass-effect">
</div>
</div>

<header class="heder-statica">
<nav class="navbar navbar-expand-xl">
  <!-- muestra el boton con tres rallitas del lado Izquierdo -->
  <div class="container-fluid padre" style="background-color: #cee5d0">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Son los botenes que te llevan a sus respectivas paginas como Producto, Nosotro y blog-->
    <div class="collapse navbar-collapse hijo_1" id="navbarSupportedContent" style="text-align: center;">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- <ul class="navbar-nav me-auto col-xl-1 mb-lg-0"> -->
        <li class="nav-item">
          <a class="btn-ghost nav-link" href="Productos.html">Productos</a>
        </li>
        <li class="nav-item">
          <a class="btn-ghost nav-link" href="blog.html">Blog</a>
        </li>
        <li class="nav-item">
          <a class="btn-ghost nav-link" href="Nosotros.html">Nosotros</a>
        </li>
    </div>
    <!-- Contiene el enlase de la imagen y con la etiqueta a la linkeamos para que siempre te lleve a la pagina de inicio -->

    <!-- col-12 es modo responviso y col-sm-12 es para pantallas mas grandes -->
    <!-- <div class=" hijo_2 col-xl-4 col-sm-2">  -->
    <div class=" hijo_2  col-sm-4 col-5">
      <a href="Inicio.html">
        <img src="https://i.ibb.co/XV3sMNN/Logo-Musara-a.png" class="img-encabezado" alt="Logo_Musaraña"
          title="Logo_Musaraña" />
      </a>
    </div>
    <!-- contiene la barra de busqueda -->
    <div class="hijo_3 col-xl-2 col-sm-2">
      <form class="d-flex" role="search">
        <div class="buscar">
          <input type="text" placeholder="Buscar" required />
          <div class="buscar-icon">
            <i class="bi bi-search icon"></i>
          </div>
        </div>
      </form>
    </div>
    <!-- Se coloca imagen del login y carrito -->
    <div class="hijo_4 col-xl-2 col-sm-2">
      <a class="icono fa-solid fa-user-large" width="5px" href="Login.html" style="color: black;"></a>
      <a class="icono2 bi bi-cart4" width="5px" href="Carrito.html" style="color: black;"></a>
    </div>
  </div>
</nav>
</header>
`;
}
}

window.customElements.define("encabezado-js", encabezadoJs);


/*Encabezado*/
class piedepaginaJs extends HTMLElement{
    constructor(){
        super();

    }


    connectedCallback(){
        this.innerHTML =
`<!-- Datos de contacto -->
<footer class="text-center">
    <!-- lineas de colores -->
    <div class="rectangulo_1"></div>
    <div class="rectangulo_2"></div>
    <div class="rectangulo_3"></div>
    <div class="rectangulo_2"></div>

    <!-- Conteiner principal -->
    <div class="container text-center contenedor-padre">
        <div class="row">
            <!-- Container de contacto -->
            <div class="col-xl-3 col-sm-2 contnedor-in">
                <b>CONTACTO</b>
                <div class="row">
                    <!-- container de icons -->
                    <div class="col contenedor-ini">
                        <i class="bi bi-whatsapp"></i>

                        <i class="bi bi-telephone-fill"></i>

                        <i class="bi bi-telegram"></i>

                        <i class="bi bi-envelope-fill"></i>
                    </div>
                </div>
            </div>

            <!-- Container de Pago -->
            <div class="col-xl-2 col-sm-2 contnedor-in">
                <b>FORMAS DE PAGO</b>
                <div class="row">
                    <!-- Container de icons -->
                    <div class="col contenedor-ini">
                        <i class="fa-brands fa-cc-mastercard"></i>

                        <i class="bi bi-paypal"></i>

                        <i class="fa-brands fa-cc-visa"></i>

                        <i class="fa-solid fa-credit-card-front"></i>
                    </div>
                </div>
            </div>
            <!-- Container de segundo logo -->
            <div class="contenedor_imagen col-xl-2 col-sm-4">
                <!-- Segundo logo -->
                <img src="https://i.ibb.co/h76whK5/Musara-a-logo-pie.png" width="150px" class="img-pie"
                    alt="Logo_Musaraña_pie" title="Logo_Musaraña_pie" />
            </div>
            <div class="col-xl-2 col-sm-2 contnedor-in">
                <!-- Container de Redes Sociales -->
                <b>REDES SOCIALES</b>
                <div class="row">
                    <!-- Container de icons -->
                    <div class="col contenedor-ini">
                        <i class="bi bi-facebook"></i>

                        <i class="bi bi-instagram"></i>

                        <i class="bi bi-twitter"></i>

                        <i class="bi bi-youtube"></i>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-2 contnedor-in">
                <div class="row">
                    <!-- Container de Preguntas Frecuentes -->
                    <b>PREGUNTAS FRECUENTES</b>
                    <div class="col contenedor-ini">
                        <i class="bi bi-question-circle-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
`;
}
}

window.customElements.define("piedepagina-js", piedepaginaJs);





console.log("Carrito.js");

function limpiarTabla(){
	document.getElementById('data').innerHTML = '';
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
function apiAnt(){
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
  vendido("masVendido");

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













