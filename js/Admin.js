let newUserData=[];
function postear() {
   // let idProductos = document.getElementById("id_productos").value;
    let descripcion = document.getElementById("descripcion").value;
    let inventario = document.getElementById("inventario").value;
    let precio = document.getElementById("precio").value;
    let sku = document.getElementById("sku").value;
    let ingredientes = document.getElementById("ingredientes").value;
    let categoria = document.getElementById("id_categoria").value;
    let modoDeUso = document.getElementById("id_mododeuso").value;
    let presentacion = document.getElementById("id_presentacion").value;
    let nombreProducto = document.getElementById("nombreProducto").value;
    let imagenproducto  = document.getElementById("imagenproducto").value;
    let orden= 1;
    let seccion =  1;
   // let producto = {sku:sku,nombreProducto:nombreProducto,precio:precio,modoDeUso:modoDeUso,categoria:categoria,inventario:inventario,ingredientes:ingredientes,presentacion:presentacion,descripcion:descripcion,seccion:seccion,imagenproducto:imagenproducto,orden:orden};
    let producto = {sku:sku,nombreProducto:nombreProducto,precio:precio};
        newUserData.push(producto);
        // localStorage.setItem("usuarionuevo", JSON.stringify(obj));
   
         console.log(newUserData);
          
         var myHeaders = new Headers();
         myHeaders.append("Authorization", "Basic Og==");
         myHeaders.append("Content-Type", "application/json");
         
         var raw = JSON.stringify(producto);
         var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
        
          fetch("localhost:8080/api/productos", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            // setTimeout(function() {
          
            //     location.reload();
            // }, 3000);
        
            // return true;
    
    }
    
function poner(){  


        
    }
function borrar(){  
       
    }

function traer(){  
    let id = document.getElementById("id_productos").value;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    var m = `http://localhost:8080/api/productos/${id}`;
    var a = new URL(m);
      fetch(a, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }

    
