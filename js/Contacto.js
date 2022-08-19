
//Filtrado de números para el input de teléfono.
const telf= document.querySelector('#cnformtel');
const telefono = document.querySelector('.telcn #cn4');

telf.cn4.addEventListener('keyup',()=>{
  telf.cn4.value=telf.cn4.value
  .replace(/\s/g,'')
  .replace(/\D/g,'')
  //Ponemos espacio cada cuatro números
  .replace(/([0-9]{2})/g, '$1')
  //Quitamos el último espaciado
  .trim();
})

//Arreglo donde se van a guardar los datos
let contactoData=[];

//Función del botón
function contactoEnviar(){
    nom = document.getElementById("cn1").value;
    corr = document.getElementById("cn2").value;
    asun = document.getElementById("cn3").value;
    let tel = document.getElementById("cn4").value;
    com = document.getElementById("cn5").value;

    let nu;
    let objL= {nombre:nom,correo:corr,asunto:asun,telefono:tel,comentario:com};
    let objLS= {nombrecn:nom,asuntocn:asun,telefonocn:tel,comentario:com};
    console.log(objL.nombre);
    console.log(objL.correo);
    console.log(objL.asunto);
    console.log(objL.telefono);
    console.log(objL.comentario);

    contactoData.push(objL);
    console.log(contactoData);
    console.log(objLS);

    

    /*popup onclick*/
    popup1.style.visibility = "visible";
    popup1.style.opacity= 1;
    cn1.style.visibility = "hidden";
    cn2.style.visibility = "hidden";
    cn3.style.visibility = "hidden";
    cn4.style.visibility = "hidden";
    cn5.style.visibility = "hidden";

    /*var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    //"idContacto": 1,
    "nombrecn": nom,
    "asuntocn": asun,
    "telefonocn": tel,
    "comentario": com
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://musarana.herokuapp.com/api/contacto", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));*/

    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify(objLS);
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        fetch("https://musarana.herokuapp.com/api/contacto", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


}

/*Close del popup*/
function cnClose(){
    popup1.style.visibility = "hidden";
    popup1.style.opacity= 0;
    cn1.style.visibility = "visible";
    cn2.style.visibility = "visible";
    cn3.style.visibility = "visible";
    cn4.style.visibility = "visible";
    cn5.style.visibility = "visible";
    document.getElementById("cn1").value = "";
    document.getElementById("cn2").value = "";
    document.getElementById("cn3").value = "";
    document.getElementById("cn4").value = "";
    document.getElementById("cn5").value = "";

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
      <td><p style="font-size:12px">${productoscarrito.cantidad}</p></td>
      <!-- <td><input class="input_carrito" type="number" min="1" max="${productoscarrito.cantidad}" value=${productoscarrito.cantidad}></td> -->
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