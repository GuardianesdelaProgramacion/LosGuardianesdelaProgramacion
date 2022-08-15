console.log("LOS GUARDINES DE LA PROGRAMCIÓN");
/**Obtener el ID del producto seleccionado******************************************************************************************************************************************************** */
let descripcion = JSON.parse(localStorage.getItem('producto'))
tarjetaD(descripcion);

function tarjetaD(data) {
  let datos = "";
  for (const producto in data) {
    let productos = data[producto]
    let id = JSON.parse(localStorage.getItem('id_descrip'));

    if (productos.id == id.id_descrip) {
      datos += `<div class="col-lg-6 col-md-6 col-sm-12 col-12  mx-auto text-center">
              <div class=" mb-3">
                  <img src=${productos.url}  class="img-fluid img-producto-individual click" id="${productos.id}">
              </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="producto-central mx-auto">
                  <div>
                      <h2 class="producto-nombre-ind">${productos.nombre_producto}</h2>
                      <span class="producto-precio-ind">${productos.precio}</span>
                      <p class="descripcion1 mt-2 mb-2">${productos.descripcion}</p>               
                     <!-- <select name="presentacion" id="presentacion-ind"
                      style="border-radius: 8px; border: 1px solid var(--salmon); width: 25%; height: 30px; background-color: none; "
                      class="my-3 ">
                      <option disabled selected>Tamaño </option>
                      <option value="1">Chico</option>
                      <option value="2">Grande</option>
                      </select> -->                      
                      <div class="row mt-4" id="padreContadorProductos">                
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
  document.getElementById('lista-productosInd').innerHTML = datos;
}

/**Validar los botones de la cantidad de productos(+-)******************************************************************************************************************************************************** */
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
  console.log(padreContadorProductos.value);
  padreContadorProductos.value = padreContadorProductos.value
    .replace("[^\w\.@-]", '');

});


//Agregar carrito 


const listaProducto = document.getElementById('lista-productosInd')
let carrito = {}



listaProducto.addEventListener('click', e => {
  addCarrito(e);
})

const addCarrito = e => {
  // console.log(e.target);
  // console.log(e.target.parentElement);
  // console.log(e.target.classList.contains('agregar-carrito-producto'))
  if (e.target.classList.contains('agregar-carrito-producto')) {

    console.log("hola")
    setCarrito(e.target.parentElement.parentElement.parentElement.parentElement.parentElement)
    document.getElementById("popProducto").style.visibility = "visible";
    document.getElementById("popProducto").style.opacity = 1;
    document.getElementById("contadorProductos").style.visibility = "hidden";
    
    leer();
  }
}



let setCarrito = objecto => {
  console.log(objecto)
  if (document.getElementById("contadorProductos").value > 0) {
    let contadorProductos = parseInt(document.getElementById("contadorProductos").value)
    console.log(contadorProductos)



    const productoCarrito = {
      id: objecto.querySelector('.click').getAttribute("id"),
      nombre_producto: objecto.querySelector('.producto-nombre-ind').textContent,
      precio: objecto.querySelector('.producto-precio-ind').textContent,
      url: objecto.querySelector('.click').getAttribute("src"),
      cantidad: contadorProductos
    }
    // console.log(productoCarrito);
    if (localStorage.getItem('carrito')) {
      carrito = JSON.parse(localStorage.getItem('carrito'))
    }
    else {
      console.log("no hay")
      console.log(carrito)
      carrito = {}
    }








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
  else {
    alert("El valor debe de ser superior a 1");
    document.getElementById("contadorProductos").value = 1
  }
}



function closePopProducto() {
  document.getElementById("popProducto").style.visibility = "hidden";
  document.getElementById("popProducto").style.opacity = 0;
  document.getElementById("contadorProductos").style.visibility = "visible";
}

document.addEventListener('DOMContentLoaded', () => {
  leer();
})


function leer() {

  let productoLocal = {}
  productoLocal = JSON.parse(localStorage.getItem('carrito'))
  // console.log(productoLocal)
  tarjetaDinamicas(productoLocal);
  contador(productoLocal);
}


const tarjetaDinamicas = data => {
  // console.log(data[1])
  let datos = "";
  for (const carrito in data) {
      productoscarrito = data[carrito]

      datos +=
          `<tr class="mytr" id="fila${productoscarrito.id}">
      <td><button value="Eliminar" style="font-size:20px;background-color:whith;" class="bi bi-x buttonx" onclick="eliminarFila(${productoscarrito.id})"></button></td>
      <td><img style="width: 120px;" src="${productoscarrito.url}" alt="Producto 1" /></td>
      <td><p style="font-size:10px">${productoscarrito.nombre_producto}</p></td>
      <td><input class="input_carrito" type="number" min="1" max="${productoscarrito.cantidad}" value=${productoscarrito.cantidad}></td>
  </tr>
  `;
  }
  document.getElementById('data2').innerHTML = datos;
}


///eliminarProducto 

function eliminarFila(index) {
  $("#fila" + index).remove();
  // console.log(index)
  let carritoPreEliminado = JSON.parse(localStorage.getItem("carrito"));
  eliminar(carritoPreEliminado, index,);
  contador(carritoPreEliminado)


}

const eliminar = (carritoPreEliminado, index) => {
  for (const carrito in carritoPreEliminado) {
      console.log(carritoPreEliminado[carrito].id)
      //   console.log(productoscarrito[1])
      if (carritoPreEliminado[carrito].id == index) {
          console.log(carritoPreEliminado[carrito].id)
          delete (carritoPreEliminado[carrito])
          console.log(carritoPreEliminado)
          localStorage.setItem("carrito", JSON.stringify(carritoPreEliminado));
      }
  }
}


//Obtner el total de cantidad de productosy
const contador = data => {
  let cantidadPre = 0
  for (const carrito in data) {
      // console.log(data[carrito])
      productoscarrito = data[carrito]//No se borra       
      cantidadPre = cantidadPre + parseInt(productoscarrito.cantidad)
      console.log(cantidadPre)
  }
  document.getElementById('data3').innerHTML = cantidadPre;
}

