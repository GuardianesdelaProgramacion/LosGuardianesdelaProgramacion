let prueba = JSON.parse(localStorage.getItem('id_descrip'));
console.log("El id del producto: " + prueba.id_descrip);


descripcion2("lista-productos", prueba.id_descrip);
// function envio(){
// location.href="Producto_individual.html"
//obj para guardar usuarios
// var initialPage = location.pathname;
// location.replace('Producto_individual.html#' + initialPage);



function descripcion2(id, id_producto) {
  // console.log(id_producto + "hola")
  let datos = "";
  for (let i = 1; i <= id_producto; i++) {
    let lista = JSON.parse(localStorage.getItem(i));
    // console.log(lista.id + " vs " + id_producto)

    if (lista.id == id_producto) {
      datos += `<div class="col-lg-6 col-md-12 col-sm-12 mx-auto text-center">
            <div class=" mb-3">
                <img src=${lista.url}  class="img-fluid img-producto-individual click" id="${lista.id}">
            </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="producto-mes mx-auto">
                <div>
                    <h2 class="producto-nombre">${lista.nombre_producto}</h2>
                    <span class="producto-precio">${lista.precio}</span>
                    <p class="descripcion1 mt-2 mb-2">${lista.descripcion}</p>
                    <div class="rating-container">
                    <input type="radio" name="rating" id="5${lista.nombre_producto}">
                    <label for="5${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
                    <input type="radio" name="rating" id="4${lista.nombre_producto}">
                    <label for="4${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
                    <input type="radio" name="rating" id="3${lista.nombre_producto}">
                    <label for="3${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
                    <input type="radio" name="rating" id="2${lista.nombre_producto}">
                    <label for="2${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
                    <input type="radio" name="rating" id="1${lista.nombre_producto}">
                    <label for="1${lista.nombre_producto}"><i class="bi bi-star-fill"></i></label>
                    </div>  
                    <div class="row" id="padreContadorProductos">
                    <button type="button" class="form-btn mx-auto col-1 " id="menosProductos">-</button>                                   
                    <input  class="form-btn text-center mx-auto col-2" id="contadorProductos" type="number" value="1" min="1" style="width:15% ;">                
                    <button type="button" class="form-btn mx-auto  " id="masProductos">+</button>                  
                    <br>
                    <button type="button" class="form-btn mx-auto  productos-botones  agregar-carrito-producto  ">Añadir al carrito</button> 
                    </div>                                         
                </div>
            </div>
        </div> 
            `;
    }
  }
  // console.log(datos)
  document.getElementById(id).innerHTML = datos;
}





let menos = document.getElementById('menosProductos')
menos.addEventListener('click', e => {
  let contadorProductos = parseInt(document.getElementById("contadorProductos").value)
  console.log(contadorProductos)
  if (contadorProductos > 1) {
    contadorProductos = contadorProductos - 1
    document.getElementById("contadorProductos").value = contadorProductos
    console.log(contadorProductos)
  }

})


let mas = document.getElementById('masProductos')
mas.addEventListener('click', e => {
  let contadorProductos = parseInt(document.getElementById("contadorProductos").value)
  console.log(contadorProductos)
  contadorProductos = contadorProductos + 1
  document.getElementById("contadorProductos").value = contadorProductos
  console.log(contadorProductos)
})


const padreContadorProductos = document.querySelector('#padreContadorProductos #contadorProductos');
console.log(padreContadorProductos)
padreContadorProductos.addEventListener('keyup', (e) => {
  console.log( padreContadorProductos.value);
  padreContadorProductos.value = padreContadorProductos.value
      .replace("[^\w\.@-]", '');
      
});














const listaProducto = document.getElementById('lista-productos')
let carrito = {}
if (localStorage.getItem('carrito')) {
  carrito = JSON.parse(localStorage.getItem('carrito'))
}





listaProducto.addEventListener('click', e => {
  addCarrito(e);
})

const addCarrito = e => {
  // console.log(e.target);
  // console.log(e.target.parentElement);
  // console.log(e.target.classList.contains('agregar-carrito-producto'))
  if (e.target.classList.contains('agregar-carrito-producto')) {
    // if () {
    console.log("hola")
    setCarrito(e.target.parentElement.parentElement.parentElement.parentElement.parentElement)

    // }
  }

}




let setCarrito = objecto => {
  console.log(objecto)
  if (document.getElementById("contadorProductos").value > 0) {
    let contadorProductos = parseInt(document.getElementById("contadorProductos").value)
    console.log(contadorProductos)

    const productoCarrito = {
      id: objecto.querySelector('.click').getAttribute("id"),
      nombre_producto: objecto.querySelector('.producto-nombre').textContent,
      precio: objecto.querySelector('.producto-precio').textContent,
      url: objecto.querySelector('.click').getAttribute("src"),
      cantidad: contadorProductos
    }
    // console.log(productoCarrito);


    if (carrito.hasOwnProperty(productoCarrito.id)) {
      console.log(productoCarrito.cantidad)
      productoCarrito.cantidad = carrito[productoCarrito.id].cantidad + contadorProductos
      console.log(productoCarrito.cantidad)
    }
    //Coleccion de datos, ... es una copia de productos spre operatio 
    document.getElementById("contadorProductos").value = 1
    carrito[productoCarrito.id] = { ...productoCarrito }
    // console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }
  else{
    alert("El valor debe de ser superior a 1");
    document.getElementById("contadorProductos").value = 1
  }
}



