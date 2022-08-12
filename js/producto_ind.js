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
                   <!-- <select name="presentacion" id="presentacion"
                    style="border-radius: 8px; border: 1px solid var(--salmon); width: 25%; height: 30px; background-color: none; "
                    class="my-3 ">
                    <option disabled selected>Tamaño </option>
                    <option value="1">Chico</option>
                    <option value="2">Grande</option>
                    </select> -->
                    
                    <div class="row" id="padreContadorProductos">
                  



                    <button type="button" class="form-btn " id="menosProductos" style="width:10%; margin-left:25%; height:30px; display: flex; align-items: center; justify-content: center; ">-</button>                                   
                    <input  class="form-btn  posicion" id="contadorProductos" type="number" value="1" min="1" style="width:15% ; height:30px; display: flex; align-items: center; justify-content: center;">                
                    <button type="button" class="form-btn " id="masProductos" style="width:10%; margin-right:25%;height:30px;display: flex; align-items: center; justify-content:center;">+</button>                  
                                   
                    <br>                   
                    </div>                       
                    <button type="button" class="form-btn my-3  productos-botones  agregar-carrito-producto" style="height:30px;display: flex; align-items: center; justify-content: center;">Añadir al carrito</button>                                      
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
    document.getElementById("popProducto").style.visibility = "visible";
    document.getElementById("popProducto").style.opacity = 1;
    document.getElementById("contadorProductos").style.visibility = "hidden";
    // }
  }

}




let setCarrito = objecto => {
  console.log(objecto)
  if (document.getElementById("contadorProductos").value > 0 ) {
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



function closePopProducto() {
  document.getElementById("popProducto").style.visibility = "hidden";
  document.getElementById("popProducto").style.opacity = 0;
  document.getElementById("contadorProductos").style.visibility = "visible";
}


document.addEventListener('DOMContentLoaded',()=>{
  leer();
})


function leer(){

let productoLocal={}
productoLocal = JSON.parse(localStorage.getItem('carrito'))  
// console.log(productoLocal)
    tarjetaDinamicas(productoLocal);

}


const tarjetaDinamicas = data=>{
  // console.log(data[1])
 let datos="";
  for (const carrito in data) {        
          // console.log(data[carrito])
      productoscarrito=data[carrito]
      console.log(productoscarrito.nombre_producto)
      // console.log(productoscarrito.descripcion)

          datos+= 
          `<tr class="mytr" id="fila${productoscarrito.id}">
          <td><button value="Eliminar" style="font-size:20px;background-color:whith;" class="bi bi-x buttonx" onclick="eliminarFila(${productoscarrito.id})"></button></td>
  <td><img style="width: 120px;" src="${productoscarrito.url}"alt="Producto 1" /></td>
  <td><p style="font-size:10px">${productoscarrito.nombre_producto}</p></td>
          <td><input class="input_carrito" type="number" min="1" max="${productoscarrito.cantidad}" value=${productoscarrito.cantidad}></td>
      </tr>
        `;
   }
   document.getElementById('data2').innerHTML = datos;

}

function eliminarFila(index) {
  $("#fila" + index).remove();
  console.log(index)
  
  eliminar(index);
  contador(); 
}



function eliminar (index){
  let carritoPreEliminado = JSON.parse(localStorage.getItem("carrito"));
  for (let i =0; i< carritoPreEliminado; i++) {
   
      if (carritoPreEliminado.id == index) {
          carritoPreEliminado.splice(i, 1);
          console.log(carritoPreEliminado.splice(i, 1))
      }
  }

  carritoPreEliminado = JSON.stringify(carritoPreEliminado);
  localStorage.setItem("carrito", carritoPreEliminado);
}

function contador(){
  productoLocal = JSON.parse(localStorage.getItem('carrito'))  
  console.log(productoLocal)
  document.getElementById('data3').innerHTML = 7;


}
