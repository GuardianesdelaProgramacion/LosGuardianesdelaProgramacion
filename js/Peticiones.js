
function postSeccion() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsZWNodWdhIiwiZXhwIjoxNjYwNzY3Njc4fQ.ZloH5HCLn95XQwMetcSJoJ_sxUUhPWYWF8gH_SAPZ1B0ruh-w_XpaAMSB2rX0kKFKzL8JSR_s40fdeBfzBI94A");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "seccion": "Luis David"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/api/seccion", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function deleteSeccion() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsZWNodWdhIiwiZXhwIjoxNjYwNzY3Njc4fQ.ZloH5HCLn95XQwMetcSJoJ_sxUUhPWYWF8gH_SAPZ1B0ruh-w_XpaAMSB2rX0kKFKzL8JSR_s40fdeBfzBI94A");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "seccion": "lo que le vamos a enseñar a Cinthia"
    });

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };


    let id = prompt("Ingresa el Id que deseas borrar");
    var m = `http://localhost:8080/api/seccion/${id}`;
    // var a = new URL(m);
    var a = new URL(m);
    console.log("Aqui esta la m" + a);
    // console.log(a);
    fetch(a, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

// let a = 6;
// let b = `"http://localhost:8080/api/seccion/${a}"`;
// console.log(b);;
// fetch(b, requestOptions)



function contacto() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "nombrecn": "David",
        "astuntocn": "Prueba",
        "telefonocn": 331825265,
        "comentario": "NAda"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/api/contacto", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


const options = {
    method: 'POST',
    body: '{"idContacto":5,"nombrecn":"David","astuntocn":"Prueba","telefonocn":331825265,"comentario":"NAda"}'
};

fetch('http://localhost:8080/api/contacto', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


function usuarioPost() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "nombre": "Luis",
        "email": "Luis@ga",
        "contrasenia": "123456",
        "fechaNacimiento": "2022-08-22",
        "telefono": 1234567890,
        "metodoPago": "tarjeta",
        "rol": "usuario",
        "direccion": null
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/api/usuario", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function getUsuario() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost:8080/api/usuario", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


function postDireccion() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "colonia": "insurgentes",
        "municipio": "cuathemoc",
        "codigoPostal": "06800",
        "estado": {
            "idEstado": 4
        }
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/api/direccion", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}






function appiFetch() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };



    let id = prompt("Ingresa el Id que deseas borrar");
    var m = `http://localhost:8080/api/productos/${id}`;
    var a = new URL(m);
    fetch(a, requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result)
        console.log(result.idProductos);
        console.log(result.sku);
        console.log(result.nombreProducto);
        console.log(result.precio);
        console.log(result.modoDeUso.modoDeUso);
        console.log(result.categoria.categoria);
        console.log(result.inventario);
        console.log(result.ingredientes);
        console.log(result.presentacion);
        console.log(result.descripcion);
        console.log(result.seccion);
        console.log(result.imagenproducto);
        console.log(result.orden);
        })
        .catch(error => console.log('error', error));
}






api2("../assets/json/productos.json");
        let producto;
        function api2(url) {
            fetch(url)
                .then((responseJSON) => {
                    return responseJSON.json();
                })
                .then(productos => {              
                        console.log("Linea19");
                        guardar2(productos);                    
                }
                )
        }
        
        /*Guardar los datos**************************************************** */
        /**
         * Funcion para guardar los datos en la localStorage
         * @param {*} datos Datos del json que fueron traidos de Fetch
         */
        const guardar2 = datos => {
            for(const producto in datos){
               console.log(datos[producto])
               document.getElementById("texto1").value=datos[producto].nombreProducto
               document.getElementById("texto3").value=datos[producto].precio                          
            }           
            console.log("Datos de json ")           
        }
