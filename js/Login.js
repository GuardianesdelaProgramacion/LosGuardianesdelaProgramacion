function verificarPasswords() {
 
    // Ontenemos los valores de los campos de contraseñas 
    const pass2 = "Musarana";
    const mail2=  "musarana@musarana.com"
    const pass1 = document.getElementById('pass1').value;
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    console.log(name);
    console.log(mail);
    console.log(pass1);

    // Verificamos si las constraseñas no coinciden 
    if (pass1 != pass2 ) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");
 
        return false;

        
    } 
    if (mail != mail2 ) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");
 
        return false;

        
    } 
    else if (pass1 == pass2 && mail==mail2 ) {
 
        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");
 
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");
 
    // Desabilitamos el botón de login 
       document.getElementById("log").disabled = true;

        // Refrescamos la página (Simulación de envío del formulario) 
        setTimeout(function() {
            location.reload();
        }, 3000);
 
        return true;
    }
 
}
