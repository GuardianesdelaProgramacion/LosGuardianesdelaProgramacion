function verificarPasswords() {      
    api1("http://musarana.herokuapp.com/api/usuario");
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