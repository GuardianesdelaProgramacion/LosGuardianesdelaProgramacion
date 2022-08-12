console.log("Carrito.js");
//const Clickbutton = document.querySelectorAll('.button')
//const tbody = document.querySelector('.tbody')
const listaProductos = document.querySelector('#list-carrito tbody');
//let carrito = [];
function limpiarTabla(){
	document.getElementById('data').innerHTML = '';
//	document.getElementById('data2').innerHTML = '';
}
function limpiarproducto(){
}
function limpiarTabla2(){
	document.getElementById('data2').innerHTML = '';
}
function eliminarFila(index) {
  $("#fila" + index).remove();
}

function Obtenerdatoss() {
    if ( localStorage.getItem("carrito") !== null   ) {
  //    alert("si existe en localStorage!!");
  //  let compra=localStorage.getItem("carrito");
   // console.log(compra);
    //compra=JSON.parse(compra);
    console.log("Si existe");
    

  } 
else if ( localStorage.getItem("carrito") === null   ) {
    console.log("No existe");
    limpiarTabla2();
    }

  else {
    limpiarTabla();
    console.log("No hay localStorage!!");
 //alert("No hay localStorage!!");
}

}
function renderCarritolocalstorage(){
  let carritoD;

  if ( localStorage.getItem("carrito") === null   ) {
    carritoD=[];
   console.log("No existe");
  }
  else{
    console.log("Si existe");
  carritoD=JSON.parse(localStorage.getItem("carrito"));
    leerenderCarrito(carritoD);
  }
  return carritoD;
}
function leerenderCarrito(){
  let carritoD;
  carritoD=JSON.parse(localStorage.getItem("carrito"));
  console.log(carritoD);
  carritoD.forEach(element => {
  console.log(carritoD);
  });
}



function extraerDatos(){
  let carrito =localStorage.getItem('carrito');
  let carrito2 =localStorage.setItem('carrito', JSON.stringify(carrito));

    let productoLocal = JSON.parse(localStorage.getItem('productos'));
    // for (let user of productoLocal) {
    //     console.log(user)
    // }
    console.log(productoLocal.length)
    tarjetaDinamicas(productoLocal);
   
}






const tarjetaDinamicas = data=>{
    console.log(data)
    data.forEach(productos => {
        console.log(productos)
        templateTarjeta.querySelector('.producto-precio').textContent = productos.nombre_producto
        templateTarjeta.querySelector('.img-producto').setAttribute("src",productos.url)
        templateTarjeta.querySelector('.img-producto').setAttribute("id",productos.id)
        const clone = templateTarjeta.cloneNode(true)
        fragmento.appendChild(clone)
    });
    items.appendChild(fragmento)   
}








function apiUrl() {    

  carrito=JSON.parse(localStorage.getItem('carrito'));
//console.log(data.length);
  }
  

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
  }
}

function renderCarrito2(){
  //
  //let data=JSON.stringify(data3);
  let carrito = JSON.parse(localStorage.getItem('carrito'));
  console.log(carrito);
let body = ''
for (let i = 0; i < carrito.length; i++) {
  body += 
  `<tr class="mytr" id="fila${carrito.id}">
        <td><button value="Eliminar" style="font-size:30px" class="bi bi-x buttonx" onclick="eliminarFila(${carrito.id})"></button></td>
<td><img class="img_carrito" src="${carrito.url}"alt="Producto 1" /></td>
<td>${carrito.nombre_producto}</td>
        <td><span>${carrito.precio}<span></td>
        <td><input class="input_carrito" type="number" min="1" max="${carrito.id}" value=${carrito.id}></td>
        <td>$<span>60.00<span></td>
    </tr>
`
 // localStorage.setItem('data2', JSON.stringify(data));
}
document.getElementById('data').innerHTML = body;
 }









