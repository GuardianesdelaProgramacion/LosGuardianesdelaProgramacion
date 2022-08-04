async function adquirirDatos(proveedor = "Axios", direccionhttp) {

    return new Promise((resolve, reject) => {
      fetch(direccionhttp)
        .then((responseJSON) => responseJSON.json())
        .then((usuarios) => {
          //console.log("Json: "+JSON.stringify(usuarios));
          resolve(usuarios.data.data)
        }
        )
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }

solicitudBtn();
async function solicitudBtn() {
  datos = await adquirirDatos("Json", "../assets/json2/productos.json");
  console.log("Solicitud Json Productos:" + JSON.stringify(datos));
  masVendido = await adquirirDatos("Json", "../assets/json2/masVendido.json");
  console.log("Solicitud Json Mas Vendido:" + JSON.stringify(datos));


  for (let user of datos) {

    let llave = JSON.stringify(user.id)
    localStorage.setItem(llave, JSON.stringify(user));
  }

  for (let user of masVendido) {
    let llave = JSON.stringify(user.id)
    localStorage.setItem(llave, JSON.stringify(user));
  }

  vendido("data2");

}


 function vendido(data2) {
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
  document.getElementById(data2).innerHTML = datos;
}
function eliminarFila(index) {
  $("#fila" + index).remove();
}