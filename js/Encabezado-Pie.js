
/*Encabezado*/
// Es el elemento superiror el HTMLElement
class encabezadoJs extends HTMLElement{
    constructor(){
        super();

    }


    connectedCallback(){
        this.innerHTML =
`  <div class="background-container">
<div class="card-container glass-effect">
</div>
</div>
<header class="heder-statica">
<nav class="navbar navbar-expand-xl">
  <!-- muestra el botón con tres rayitas del lado izquierdo -->
  <div class="container-fluid padre" style="background-color: #cee5d0">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Son los botones que te llevan a sus respectivas páginas como Producto, Nosotros y Blog-->
    <div class="collapse navbar-collapse hijo_1" id="navbarSupportedContent" style="text-align: center;">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- <ul class="navbar-nav me-auto col-xl-1 mb-lg-0"> -->
        <li class="nav-item">
          <a class="btn-ghost nav-link" href="../html/Productos.html">Productos</a>
        </li>
        <li class="nav-item">
          <a class="btn-ghost nav-link" href="../html/blog.html">Blog</a>
        </li>
        <li class="nav-item">
          <a class="btn-ghost nav-link" href="../html/Nosotros.html">Nosotros</a>
        </li>
    </div>
    <!-- Contiene el enlace de la imagen y con la etiqueta a la linkeamos para que siempre te lleve a la página de inicio -->

    <!-- col-12 es modo responviso y col-sm-12 es para pantallas más grandes -->
    <!-- <div class=" hijo_2 col-xl-4 col-sm-2">  -->
    <div class=" hijo_2  col-sm-4 col-5">
      <a href="Index_1.html">
        <img src="https://i.ibb.co/XV3sMNN/Logo-Musara-a.png" class="img-encabezado" alt="Logo_Musaraña"
          title="Logo_Musaraña" />
      </a>
    </div>
    <!-- contiene la barra de búsqueda -->
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
      <a class="icono fa-solid fa-user-large" width="5px" href="../html/Login.html" style="color: black;"></a>
      <a class="icono2 bi bi-cart4" width="5px" href="../html/Carrito.html" style="color: black;"></a>
    </div>
  </div>
</nav>
</header>
`;
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
`  <!-- Datos de contacto -->
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

            <a class="fa-solid fa-credit-card-front href="musaranamx@gmail.com"></a>
          </div>
        </div>
      </div>
      <!-- Container de segundo logo -->
      <div class="contenedor_imagen col-xl-2 col-sm-4">
        <!-- Segundo logo -->
        <a href="Index_1.html">
        <img src="https://i.ibb.co/h76whK5/Musara-a-logo-pie.png" width="150px" class="img-pie"
          alt="Logo_Musaraña_pie" title="Logo_Musaraña_pie" /></a>
      </div>
      <div class="col-xl-2 col-sm-2 contnedor-in">
        <!-- Container de Redes Sociales -->
        <b>REDES SOCIALES</b>
        <div class="row">
          <!-- Container de icons -->
          <div class="col contenedor-ini">
            <a class="bi bi-facebook" href="https://www.facebook.com/musaranamx"></a>

            <a class="bi bi-instagram" href="https://www.instagram.com/musaranamx/"></a>

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

