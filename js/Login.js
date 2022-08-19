function verificarPasswords() {      
    api1("https://musarana.herokuapp.com/api/usuario");
    let usaurio;
    function api1(url) {
        fetch(url)
            .then((responseJSON) => {
                return responseJSON.json();
            })
            .then(usuario => {
                console.log(usuario)
                localStorage.setItem('usuario', JSON.stringify(usuario))
                 guardar2(usuario); 
                
            }
            )
    }
    //Objeto para usuario nuevo en local storage
    // let text = localStorage.getItem("usuarionuevo");
     
    // let objec = JSON.parse(text);
    //Valores REGISTRADOS X EL USUARIO
      const pass1 = document.getElementById('passs').value;
    //    const name = document.getElementById("namee").value;
       const mail = document.getElementById("maill").value;
    // const pass2 = objec.password1;
    // const mail2=  objec.correo;
    const guardar2 = datos => {
        let email;
        let contrasenia;
        let modo;
        let modo1 = "admin";
        let modoadmin ="user";
         for(const producto in datos){      
            console.log(datos)
            console.log(datos[producto].email)
            console.log(datos[producto].contrasenia)
            email =  datos[producto].email;
            contrasenia= datos[producto].contrasenia;
            modo =  datos[producto].rol;
            console.log(modo);
            if (email==mail && contrasenia==pass1 && modo==modo1){
                console.log("aceptado");

                window.location.replace("Perfil.html");
            }
            else if (email==mail && contrasenia==pass1 && modo==modoadmin){
                console.log("aceptado");

                window.location.replace("Admin_Page.html");
            }
        }
    
    }
}



function cnClose(){
popup1.style.visibility = "hidden";
popup1.style.opacity= 0;
passs.style.visibility = "visible";
namee.style.visibility = "visible";
maill.style.visibility = "visible";

document.getElementById("passs").value = "";
document.getElementById("namee").value = "";
document.getElementById("maill").value = "";


}

function contactoEnviar(){

popup.style.visibility = "visible";
popup.style.opacity= 1;
passs.style.visibility = "hidden";
namee.style.visibility = "hidden";
maill.style.visibility = "hidden";
}

function verificarOlvidar() {  

// 

}

function cnClose2(){
popup.style.visibility = "hidden";
popup.style.opacity= 0;
passs.style.visibility = "visible";
namee.style.visibility = "visible";
maill.style.visibility = "visible";
document.getElementById('formul').reset();
document.getElementById("passs").value = "";
document.getElementById("namee").value = "";
document.getElementById("maill").value = "";
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
