/*Encabezado*/
// Es el elemento superiror el HTMLElement
class encabezadoJs extends HTMLElement{
    constructor(){
        super();

    }


    connectedCallback(){
        this.innerHTML =
` <header class="heder-statica">
<div class="background-container">
  <div class="card-container glass-effect"></div>
</div>
<nav class="navbar navbar-expand-xl">
  <!-- muestra el botón con tres rayitas del lado izquierdo -->
  <div class="container-fluid padre" style="background-color: #cee5d0">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Son los botones que te llevan a sus respectivas páginas como Producto, Nosotros y Blog-->
    <div class="collapse navbar-collapse hijo_1" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- <ul class="navbar-nav me-auto col-xl-1 mb-lg-0"> -->
        <li class="nav-item">
          <a class="btn-ghost nav-link" href="./html/Productos.html">Productos</a>
        </li>
        <li class="nav-item">
          <a class="btn-ghost nav-link" href="./html/blog.html">Blog</a>
        </li>
        <li class="nav-item">
          <a class="btn-ghost nav-link" href="./html/Nosotros.html">Nosotros</a>
        </li>
    </div>
    <!-- Contiene el enlace de la imagen y con la etiqueta a la linkeamos para que siempre te lleve a la página de inicio -->

    <!-- col-12 es modo responviso y col-sm-12 es para pantallas más grandes -->
     <div class=" hijo_2  col-sm-4 col-5">
    </div>
    <!-- contiene la barra de búsqueda -->

    <div class="hijo_3 col-xl-2 col-sm-2">
      <form class="d-flex" role="search">
        <div class="buscar">
          <input type="text" id="inputSearch" placeholder="Buscar">
          <div class="buscar-icon">
            <i class="bi bi-search icon" id="icon-search"></i>
          </div>
        </div>
      </form>
    </div>
    <!-- Se coloca imagen del login y carrito -->
    <div class="hijo_4">
      <a class="icono fa-solid fa-user-large" width="5px" href="./html/Login.html"></a>
    </div>
    <div class="Carrito-mini">
      <ul style="list-style: none;">
        <li class="submenu">
          <a class="icono2 bi bi-cart4" href="./html/Carrito.html" width="5px"></a>
          <div id="carrito">
            <table class="tablemini">
              <thead>
                <tr>
                  <th style="width:40px"></th>
                  <th style="width:40px">Producto</th>
                  <th style="width:200px"></th>
                  <th style="width:100px">Cantidad</th>
                </tr>
              </thead>
              <tbody style="width:400px" id="data2"></tbody>
            </table>
            <a href="#" onclick="limpiarTabla2()" id="vaciar" style="color: black;">vaciar carrito</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="contadormini">
      <span id="data3">0</span>
    </div>

  </div>
</nav>
<div class="p_logo">
  <div class="h_logo">
    <a href="./Index.html">
      <img src="https://i.ibb.co/XV3sMNN/Logo-Musara-a.png" class="img-encabezado" alt="Logo_Musaraña"
        title="Logo_Musaraña" />
    </a>
  </div>
</div>
</header>

<ul id="box-search">
  <li>
    <a href="./html/Productos.html">
      <div class="T-img-p">
        <i class="bi bi-search icon"></i>
        <img src="https://i.ibb.co/tXgGSkD/Copia-de-Dise-o-sin-t-tulo-2.png" alt="" class="card-img"/> 
        TABLETAS DENTALES 
      </div>
    </a>
  </li>
  <li>
    <a href="./html/Productos.html">
      <i class="bi bi-search icon"></i>
      <div class="T-img-p">
        <img src="https://i.ibb.co/Pw9TJBf/Dise-o-sin-t-tulo-11.png" alt="" class="card-img"/>
         SÉRUM-UNISEX
      </div>
    </a>
  </li>
  <li>
    <a href="./html/Productos.html">
      <i class="bi bi-search icon"></i>
      <div class="T-img-p">
        <img src="https://i.ibb.co/zxpTzBk/Copia-de-Dise-o-sin-t-tulo-3.png" alt="" class="card-img"/>
        SHAMPOO DE MAR          
      </div>
    </a>
  </li>
  <li>
    <a href="./html/Productos.html">
      <i class="bi bi-search icon"></i>
      <div class="T-img-p">
        <img src="https://i.ibb.co/2gDHTgc/Copia-de-Dise-o-sin-t-tulo-4.png" alt="" class="card-img"/>
        CARBÓN ACTIVADO
      </div>
    </a>
  </li>
  <li>
    <a href="./html/Productos.html">
      <i class="bi bi-search icon"></i>
      <div class="T-img-p">
      <img src="https://i.ibb.co/cJKvkf8/Copia-de-Dise-o-sin-t-tulo.png" alt="" class="card-img"/>
      JABÓN FRUTOS ROJO  
      </div>
    </a>
  </li>
  <li>
    <a href="./html/Productos.html">
      <i class="bi bi-search icon"></i>
      <div class="T-img-p">
        <img src="https://i.ibb.co/cYpXfWy/Dise-o-sin-t-tulo-13.png" alt="" class="card-img"/>
        JABÓN DE HIERBA
      </div>
    </a>
  </li>
  <li><a href="./Productos.html"><i class="bi bi-search icon"></i>SHAMPOO</a></li>
  <li><a href="./Productos.html"><i class="bi bi-search icon"></i>JABÓN</a></li>
  <li><a href="./Productos.html"><i class="bi bi-search icon"></i>CREMA</a></li>
  <li><a href="./Productos.html"><i class="bi bi-search icon"></i>PROTECTOR SOLAR</a></li>
  <li><a href="./Productos.html"><i class="bi bi-search icon"></i>PIEL</a></li>
  <li><a href="./Productos.html"><i class="bi bi-search icon"></i>DIENTES</a></li>
  <li><a href="./html/Register.html"><i class="bi bi-search icon"></i>RREGISTRO</a></li>
  <li><a href="./html/ContactoP.html"><i class="bi bi-search icon"></i>CONTACTO</a></li>
  <li><a href="./html/Blog.html"><i class="bi bi-search icon"></i>BLOG</a></li>
  <li><a href="./html/Nosotros.html"><i class="bi bi-search icon"></i>NOSOTROS</a></li>
</ul>
<div id="cover-ctn-search"></div>`;
}
}
// Imprime en el HTML definimos el elemento con window.customElements
window.customElements.define("encabezado-js", encabezadoJs);


/*Pie de página*/
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

  <!-- Container principal -->
  <div class="container text-center contenedor-padre">
    <div class="row">
      <!-- Container de contacto -->
      <div class="col-xl-3 col-sm-2 contnedor-in">
        <a class="ico" href="./html/ContactoP.html"><b>CONTACTO</b></a>
        <div class="row">
          <!-- container de icons -->
          <div class="col contenedor-ini">
            <i class="bi bi-whatsapp ico"></i>

            <i class="bi bi-telephone-fill ico"></i>

            <i class="bi bi-telegram ico"></i>

            <a class="bi bi-envelope-fill ico" href="https://musaranamx@gmail.com"></a>
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

            <i class="bi bi-paypal ico"></i>

            <i class="fa-brands fa-cc-visa ico"></i>

            <a class="fa-solid fa-credit-card-front ico" href="#"></a>
          </div>
        </div>
      </div>
      <!-- Container de segundo logo -->
      <div class="contenedor_imagen col-xl-2 col-sm-4">
        <!-- Segundo logo -->
        <a href="./Index.html">
          <img src="https://i.ibb.co/h76whK5/Musara-a-logo-pie.png" width="150px" class="img-pie"
            alt="Logo_Musaraña_pie" title="Logo_Musaraña_pie" /></a>
      </div>
      <div class="col-xl-2 col-sm-2 contnedor-in">
        <!-- Container de Redes Sociales -->
        <b>REDES SOCIALES</b>
        <div class="row ">
          <!-- Container de icons -->
          <div class="col contenedor-ini">
            <a class="bi bi-facebook ico" href="https://www.facebook.com/musaranamx"></a>

            <a class="bi bi-instagram ico" href="https://www.instagram.com/musaranamx/"></a>

            <i class="bi bi-twitter ico"></i>

            <i class="bi bi-youtube ico"></i>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-2 contnedor-in">
        <div class="row">
          <!-- Container de Preguntas Frecuentes -->
          <b>PREGUNTAS FRECUENTES</b>
          <div class="col contenedor-ini">
          <a href="../html/Preguntas_frecuentes.html" class="bi bi-question-circle-fill ico"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>`;
}
} 
window.customElements.define("piedepagina-js", piedepaginaJs);

//Ejecutando funcion
document.getElementById("icon-search").addEventListener("click",mostrar_busquedor);
document.getElementById("cover-ctn-search").addEventListener("click",ocultar_buscador);

//Buscador de contenido
//Declarando variables
// Esta es la linea para controlar el div que contiene al input de la barra de busqueda
// bars_search=document.getElementById("ctn-bars-search");
cover_ctn_buscar=document.getElementById("cover-ctn-search");
inputSearch=document.getElementById("inputSearch");
box_search=document.getElementById("box-search");

//Funcion para mostrar lo buscado
function mostrar_busquedor(){
    cover_ctn_buscar.style.display="block";
    inputSearch.focus();

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }
}

//funcion para ocultar el buscador
function ocultar_buscador(){
    cover_ctn_buscar.style.display="none";
    inputSearch.value="";
    box_search.style.display = "none";
    
}

// Creando filtrado de busqueda
document.getElementById("inputSearch").addEventListener("keyup",buscador_interno);

function buscador_interno(){

    filter=inputSearch.value.toUpperCase();
    li=box_search.getElementsByTagName("li");

    //recorriendo elementos a filtrar mediante los "li"
    for(let i=0;i<li.length;i++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;
        
        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

            
        }else{
            li[i].style.display = "none";
        }
    }
}
