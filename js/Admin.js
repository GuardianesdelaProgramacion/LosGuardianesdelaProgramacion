function traer() {
    let id = document.getElementById("id_productos").value;
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let m = `https://musarana.herokuapp.com/api/productos/${id}`;
    let a = new URL(m);
    fetch(`https://musarana.herokuapp.com/api/productos/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result.idProductos);

            document.getElementById("sku").value = result.sku;
            document.getElementById("nombreProducto").value = result.nombreProducto;
            document.getElementById("precio").value = result.precio;
            document.getElementById("id_mododeuso").value = result.modoDeUso.idmodoDeUso;
            document.getElementById("id_categoria").value = result.categoria.idCategoria;
            document.getElementById("inventario").value = result.inventario;
            document.getElementById("ingredientes").value = result.ingredientes;
            document.getElementById("id_presentacion").value = result.presentacion.idPresentacion;
            document.getElementById("descripcion").value = result.descripcion;
            document.getElementById("idSeccion").value = result.seccion[0].idSeccion;
            document.getElementById("imagenproducto").value = result.imagenproducto[0].idImagenProducto;
        })

        .catch(error => console.log('error', error));
}

function postprue() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "idProductos": document.getElementById("id_productos").value,
        "sku": document.getElementById("sku").value,
        "nombreProducto": document.getElementById("nombreProducto").value,
        "precio": document.getElementById("precio").value,
        "modoDeUso": {
            "idmodoDeUso": document.getElementById("id_mododeuso").value,
        },
        "categoria": {
            "idCategoria": document.getElementById("id_categoria").value,
        },
        "inventario": document.getElementById("inventario").value,
        "ingredientes": document.getElementById("ingredientes").value,
        "presentacion": {
            "idPresentacion": document.getElementById("id_presentacion").value,
        },
        "descripcion": document.getElementById("descripcion").value,
        "seccion": [
            {
                "idSeccion": document.getElementById("idSeccion").value,
            }
        ],
        "imagenproducto": [
            {
                "idImagenProducto": document.getElementById("imagenproducto").value,
            }
        ]
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://musarana.herokuapp.com/api/productos", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function borrar() {
    let id = document.getElementById("id_productos").value;
    let requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    let m = `https://musarana.herokuapp.com/api/productos/${id}`;
    let a = new URL(m);
    fetch(a, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function editar() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "idProductos": document.getElementById("id_productos").value,
        "sku": document.getElementById("sku").value,
        "nombreProducto": document.getElementById("nombreProducto").value,
        "precio": document.getElementById("precio").value,
        "modoDeUso": {
            "idmodoDeUso": parseInt(document.getElementById("id_mododeuso").value),
            "modoDeUso": "FROTAR LA BARRA EN LAS MANOS O DIRECTAMENTE SOBRE EL CABELLO DE MEDIAS A PUNTAS."
        },
        "categoria": {
            "idCategoria": parseInt(document.getElementById("id_categoria").value),
            "categoria": "Cuerpo"
        },
        "inventario": parseInt(document.getElementById("inventario").value),
        "ingredientes": document.getElementById("ingredientes").value,
        "presentacion": {
            "idPresentacion": parseInt(document.getElementById("id_presentacion").value,),
            "presentacion": "Chico"
        },
        "descripcion": document.getElementById("descripcion").value,
        "seccion": [
            {
                "idSeccion": 1,
                "seccion": "Todos los productos"
            }
        ],
        "imagenproducto": [
            {
                "idImagenProducto": 2,
                "imagen": "https://i.ibb.co/jVJLPRS/S000-2.jpg"
            }
        ]
    });

    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://musarana.herokuapp.com/api/productos", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))

        .catch(error => console.log('error', error));
}