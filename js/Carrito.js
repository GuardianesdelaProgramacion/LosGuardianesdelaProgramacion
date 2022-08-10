console.log("Carrito.js");

function limpiarTabla(){
	document.getElementById('data').innerHTML = '';
}
function limpiarproducto(){
	document.getElementById(`fila${id}`).innerHTML = '';
}
function limpiarTabla2(){
	document.getElementById('data2').innerHTML = '';
}
function eliminarFila(index) {
  $("#fila" + index).remove();
}






Obtenerdatoss();
function Obtenerdatoss() {
    if ( localStorage.getItem("carrito") !== null   ) {
  //    alert("Sidebar si existe en localStorage!!");
    let compra=localStorage.getItem("10");
    console.log(compra);
    //compra=JSON.parse(compra);
   let datos = "";
  for (let i = 1; i < localStorage.length + 1; i++) {
    compra = JSON.parse(compra);
    if (compra!==null) {
      datos+= 
        `<tr class="mytr" id="fila${lista.id}">
        <td><button value="Eliminar" style="font-size:30px" class="bi bi-x buttonx" onclick="eliminarFila(${lista.id})"></button></td>
<td><img class="img_carrito" src="${lista.url}"alt="Producto 1" /></td>
<td>${lista.descripción}</td>
        <td><span>${lista.precio}<span></td>
        <td><input class="input_carrito" type="number" min="1" max="${lista.id}" value=${lista.id}></td>
        <td>$<span>60.00<span></td>
    </tr>
      `;
    }
  }
  document.getElementById(data).innerHTML = datos;



  }
else {
 // alert("No hay localStorage!!");
    limpiarTabla();
    limpiarTabla2();
}

}


 function carritoaPrincipal(compra) {
  let datos = "";
  for (let i = 1; i < localStorage.length + 1; i++) {
    lista = JSON.parse(localStorage.getItem(i));
    if (lista.seccion == "catalogo") {
      datos+= 
        `<tr class="mytr" id="fila${lista.id}">
        <td><button value="Eliminar" style="font-size:30px" class="bi bi-x buttonx" onclick="eliminarFila(${lista.id})"></button></td>
<td><img class="img_carrito" src="${lista.url}"alt="Producto 1" /></td>
<td>${lista.descripción}</td>
        <td><span>${lista.precio}<span></td>
        <td><input class="input_carrito" type="number" min="1" max="${lista.id}" value=${lista.id}></td>
        <td>$<span>60.00<span></td>
    </tr>
      `;
    }
  }
  document.getElementById(dataa).innerHTML = datos;
}

 function vendido(data2a) {
  let datos = "";
  let o=1;
  for (let i = 1; i < localStorage.length + 1; i++) {
    lista = JSON.parse(localStorage.getItem(i));
    if (lista.seccion == "catalogo") {
      datos+= 
        `<tr class="mytr" id="fila${lista.id}">
        <td><button value="Eliminar" style="font-size:20px;background-color:whith;" class="bi bi-x buttonx" onclick="eliminarFila(${lista.id})"></button></td>
        <td><img class="img_carrito2" src="${lista.url}"alt="Producto 1" /></td>
        <td><p style="font-size:10px">${lista.descripción}</p></td>
        <td><input class="input_carrito" type="number" min="1" max="${lista.id}" value=${lista.id}></td>
    </tr>
      `;
    }
  }
  document.getElementById(data2a).innerHTML = datos;
}

    let compra=localStorage.getItem("10");
    console.log(compra);
    //compra=JSON.parse(compra);
   let datos = "";
  for (let i = 1; i < localStorage.length + 1; i++) {
    compra = JSON.parse(compra);
    if (compra!==null) {
      datos+= 
        `<tr class="mytr" id="fila${lista.id}">
        <td><button value="Eliminar" style="font-size:30px" class="bi bi-x buttonx" onclick="eliminarFila(${lista.id})"></button></td>
<td><img class="img_carrito" src="${lista.url}"alt="Producto 1" /></td>
<td>${lista.descripción}</td>
        <td><span>${lista.precio}<span></td>
        <td><input class="input_carrito" type="number" min="1" max="${lista.id}" value=${lista.id}></td>
        <td>$<span>60.00<span></td>
    </tr>
      `;
    }
  }
  document.getElementById(data).innerHTML = datos;




const listaProducto=document.getElementById('lista-productos')
let carrito={}
if(localStorage.getItem('carrito')){
    carrito=JSON.parse(localStorage.getItem('carrito'))
}





listaProducto.addEventListener('click',e=>{
    addCarrito(e);
})

const addCarrito= e =>{
    // console.log(e.target);
    // console.log(e.target.classList.contains('agregar-carrito-producto'))
    if(e.target.classList.contains('agregar-carrito-producto')){    
        // console.log( e.target.parentElement)
        setCarrito(e.target.parentElement)
    }
 
}

let setCarrito= objecto =>{
    // console.log(objecto)    
    const productoCarrito={
        id: objecto.querySelector('.click').getAttribute("id"),
        nombre_producto: objecto.querySelector('.producto-nombre').textContent,
        precio: objecto.querySelector('.producto-precio').textContent,
        url: objecto.querySelector('.click').getAttribute("src"),   
        cantidad:1     
    }
    // console.log(productoCarrito);
    
    if(carrito.hasOwnProperty(productoCarrito.id)){
        console.log("hola")
        productoCarrito.cantidad= carrito[productoCarrito.id].cantidad+1

    }
    //Coleccion de datos, ... es una copia de productos spre operatio 
   
    carrito[productoCarrito.id]={...productoCarrito}
    console.log(carrito)
    localStorage.setItem('carrito',JSON.stringify(carrito))
}

//apiUrl();
/*function apiUrl() {    
//let url = document.getElementById('api').value;
let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error));

const mostrarData = (data) => {
  console.log(data)
let body = ''
for (let i = 0; i < data.length; i++) {
  body += `<tr><td>${data[i].name}</td><td>${data[i].username}</td><td>${data[i].email}</td><td>${data[i].id}</td><td><img src=\'${data[i].avatar}\'</td></tr>`
  localStorage.setItem('data1', JSON.stringify(data));
}
document.getElementById('dat').innerHTML = body;
 }
}
*/



  
