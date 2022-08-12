console.log("Carrito.js");

const listaProductos = document.querySelector('#list-carrito tbody');

function limpiarTabla(){
	document.getElementById('data').innerHTML = '';

}
function limpiarproducto(){
}
function limpiarTabla2(){
	document.getElementById('data2').innerHTML = '';
}
function eliminarFila(index) {
  $("#fila" + index).remove();
}







document.addEventListener('DOMContentLoaded',()=>{
  leer();
})


function leer(){

let productoLocal={}
productoLocal = JSON.parse(localStorage.getItem('carrito'))  
// console.log(productoLocal)
    tarjetaDinamicas(productoLocal);
    tarjetaDinamicas2(productoLocal);
    tarjetaDinamicas3(productoLocal);
}


const tarjetaDinamicas2= data=>{
  // console.log(data[1])
 let datos="";
  for (const carrito in data) {        
          // console.log(data[carrito])
      productoscarrito=data[carrito]
      console.log(productoscarrito.nombre_producto)
      // console.log(productoscarrito.descripcion)

          datos+= 
          `<tr class="mytr" id="fila${productoscarrito.id}">
          <td><button value="Eliminar" style="font-size:30px;" class="bi bi-x buttonx" onclick="eliminarFila(${productoscarrito.id})"></button></td>
  <td><img class="img_carrito" src="${productoscarrito.url}"alt="Producto 1" /></td>
  <td><p style="font-size:15px">${productoscarrito.nombre_producto}</p></td>
  <td><span>${productoscarrito.precio}</span></td>
          <td><input class="input_carrito" type="number" min="1" max="${productoscarrito.cantidad}" value=${productoscarrito.cantidad}></td>
          <td><span>${productoscarrito.precio}</span></td>
          </tr>

</tfoot>
        `;
   }
   document.getElementById('data').innerHTML = datos;
   

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
          <td><button value="Eliminar" style="font-size:20px" class="bi bi-x buttonx" onclick="eliminarFila(${productoscarrito.id})"></button></td>
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
  document.getElementById('data3').innerHTML = productoLocal.cantidad;


}



const tarjetaDinamicas3= data=>{
  // console.log(data[1])
 let datos="";
  if (data !== null) {        
          // console.log(data[carrito])
      productoscarrito=data[carrito]
      console.log(productoscarrito.nombre_producto)
      // console.log(productoscarrito.descripcion)

          datos+= 
          `         <tr>
          <td colspan="5" style="text-align:right">Total</td>
          <td id="total">${productoscarrito.precio}</td>
          </tr>
          
        `;
        document.getElementById('datooo').innerHTML = datos;
   }
   
   

}
