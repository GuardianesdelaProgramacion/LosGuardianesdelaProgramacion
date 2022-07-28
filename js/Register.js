
function verificarPasswords() {
 
    // Ontenemos los valores de los campos de contraseñas 
    const pass1 = document.getElementById('pass1').value;
    const pass2 = document.getElementById('pass2').value;
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const fechanac = document.getElementById("fecha").value;
    //const newsletter = document.getElementById("exampleCheck1").value; 
    console.log(name);
    console.log(mail);
    console.log(pass1);
    console.log(pass2);
    console.log(fechanac);
    
    elemento = document.getElementById("exampleCheck1");
    if( elemento.checked ) {
      console.log(elemento);
    }
    // Verificamos si las constraseñas no coinciden 
    if (pass1 != pass2) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");
 
        return false;
    } else {
 
        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");
 
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");
 
    // Desabilitamos el botón de login 
       document.getElementById("reg").disabled = true;

        // Refrescamos la página (Simulación de envío del formulario) 
        setTimeout(function() {
          
            location.reload();
        }, 3000);
    
        return true;
    }
 
}




  