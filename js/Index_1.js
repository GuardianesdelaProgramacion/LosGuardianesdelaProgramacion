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
  
  