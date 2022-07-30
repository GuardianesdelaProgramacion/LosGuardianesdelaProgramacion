//Objeto para usuario nuevo en local storage
let text = localStorage.getItem("usuarionuevo");
 
let objec = JSON.parse(text);
//Valores REGISTRADOS X EL USUARIO

const pass2 = objec.password1;
const mail2=  objec.correo;
console.log(mail2 );
console.log(pass2 );

function verificarPasswords() {  
 
    // Ontenemos los valores de los campos de contraseñas 
    const pass1 = document.getElementById('passs').value;
   // const name = document.getElementById("namee").value;
    const mail = document.getElementById("maill").value;
   
   // console.log(name);
    //console.log(mail);
    // console.log(pass1);

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

        popup1.style.visibility = "visible";
        popup1.style.opacity= 1;
        passs.style.visibility = "hidden";
        namee.style.visibility = "hidden";
        maill.style.visibility = "hidden";


        // Si las contraseñas coinciden ocultamos el mensaje de error
        // document.getElementById("error").classList.remove("mostrar");
 
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        // document.getElementById("ok").classList.remove("ocultar");
 
    // Desabilitamos el botón de login 
      // document.getElementById("log").disabled = true;

 
        return true;
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
 
    // Ontenemos los valores de los campos de contraseñas 
    
   // const name = document.getElementById("namee").value;
    const mailolvidado = document.getElementById("mailll").value;
   

    if (mailolvidado != mail2 ) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("errorr").classList.add("mostrar");
 
      
        
    } 
    else  if (mailolvidado == mail2 ) {

       // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("errorr").classList.remove("mostrar");
 
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
         document.getElementById("okk").classList.remove("ocultar");
 
    // Desabilitamos el botón de login 
       //document.getElementById("resett").disabled = true;

       document.getElementById("resett").disabled = true;

       // Refrescamos la página (Simulación de envío del formulario) 
    setTimeout(function() {
         
           location.reload();
       }, 3000);
 
     
    }
 
}

function cnClose2(){
    popup.style.visibility = "hidden";
    popup.style.opacity= 0;
    passs.style.visibility = "visible";
    namee.style.visibility = "visible";
    maill.style.visibility = "visible";

    document.getElementById("passs").value = "";
    document.getElementById("namee").value = "";
    document.getElementById("maill").value = "";


}