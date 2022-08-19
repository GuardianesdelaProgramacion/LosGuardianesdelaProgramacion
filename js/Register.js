let newUserData=[];
function verificarPasswords() {
 
    // Obtenemos los valores de los campos de contraseñas 
    const pass1 = document.getElementById('pass1').value;
    const pass2 = document.getElementById('pass2').value;
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const fechanac = document.getElementById("fecha").value;
    //const newsletter = document.getElementById("exampleCheck1").value; 
   
    // Verificamos si las constraseñas no coinciden 
    if (pass1 != pass2) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");
 
        return false;
    } else {
        let tel = "546544";
        let pago = "efectivo";
        let usuario = "usuario";
      let obj= {nombre:name,email:mail,fechaNacimiento:fechanac,contrasenia:pass1,telefono:tel,metodoPago:pago, rol:usuario};

      newUserData.push(obj);
      localStorage.setItem("usuarionuevo", JSON.stringify(obj));

      console.log(newUserData);
      

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify(obj);
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        fetch("https://musarana.herokuapp.com/api/usuario", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));














        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");
 
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");
 
    // Deshabilitamos el botón de login 
       document.getElementById("reg").disabled = true;

        // Refrescamos la página (Simulación de envío del formulario) 
     setTimeout(function() {
          
            location.reload();
        }, 3000);
    
        return true;
    }

}
document.addEventListener('DOMContentLoaded', () => {
    leer();
ocultar();
})

function ocultar() {
 if (localStorage.getItem('carrito') == '{}') {
    cnHiddenpagoytotal(); 
  }
  }


function cnHiddenpagoytotal(){
    document.getElementById('data2').innerHTML = '';
}


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




