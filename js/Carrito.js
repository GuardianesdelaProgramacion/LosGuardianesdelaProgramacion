document.addEventListener('DOMContentLoaded', () => {
 leer();
ocultar();
})

function ocultar() {
 if (localStorage.getItem('carrito') == '{}') {
    cnHiddenpagoytotal(); 
  }
  }

function leer() {
  let productoLocal = {}
  productoLocal = JSON.parse(localStorage.getItem('carrito')) 
  tarjetaDinamicas(productoLocal);
  contador(productoLocal);
}


function eliminarFila(index) {
  $("#fila" + index).remove();
   console.log("ELIMINADO")
  let carritoPreEliminado = JSON.parse(localStorage.getItem("carrito"));
  eliminar(carritoPreEliminado, index,);
  contador(carritoPreEliminado);
  totalCarrito (carritoPreEliminado);  
ocultar();
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


const tarjetaDinamicas = data => {
  // console.log(data[1])
  let preTotal = 0
  let datos = "";
  let total=0;
  for (const carrito in data) {
      productoscarrito = data[carrito]
      cantidad=parseInt(productoscarrito.cantidad)
      precio=parseInt(productoscarrito.precio)
      preTotal=cantidad*precio
      console.log(preTotal)
      total=preTotal+total  
      datos +=
      `<tr class="mytr" id="fila${productoscarrito.id}">
      <td><button value="Eliminar" style="font-size:30px;" class="bi bi-x buttonx" onclick="eliminarFila(${productoscarrito.id})"></button></td>
<td><img class="img_carrito" src="${productoscarrito.url}"alt="Producto 1" /></td>
<td><p style="font-size:15px">${productoscarrito.nombre_producto}</p></td>
<td><span>$${productoscarrito.precio}</span></td>

<td><p style="font-size:15px">${productoscarrito.cantidad}</p></td>
      <td><span>$${preTotal}</span></td>
      </tr>      
  `;
  }
  document.getElementById('data').innerHTML = datos; 
  document.getElementById('total').innerHTML = ("$"+total); 
}





const totalCarrito = (carritoPreEliminado) => {
  let preTotal = 0; 
  let total=0;
  for (const carrito in carritoPreEliminado) {      
      productoscarrito = carritoPreEliminado[carrito]
      cantidad=parseInt(productoscarrito.cantidad)
      precio=parseInt(productoscarrito.precio)
      preTotal=cantidad*precio
      console.log(preTotal)
      total=preTotal+total        
      console.log(total)
  }
  document.getElementById('total').innerHTML = ("$"+total); 
}



function cnHiddenpagoytotal(){
    btpago.style.visibility = "hidden";
    btpago.style.opacity= 0;
    total2.style.visibility = "hidden";
    total2.style.opacity= 0;
    document.getElementById('data').innerHTML = '';
}

