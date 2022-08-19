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



