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