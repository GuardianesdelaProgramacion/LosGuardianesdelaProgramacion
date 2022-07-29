
// Hago constantes el acceso con query selector al HTML #es el ID y . para la clase
const formulario = document.querySelector('#formularioTarjeta');
const numeroTarjeta = document.querySelector('#datosTarjeta #inputNumero');
const nombreTarjeta = document.querySelector('#datosTarjeta #inputNombre');
const mesExpiracion =document.querySelector('#datosTarjeta .grupo-expira #selectMes');
const yearExpiracion =document.querySelector('#datosTarjeta .grupo-expira #selectYear');
const ccv =document.querySelector('#datosTarjeta #grupo-expira .inputCCV');

const datosEnvio= document.querySelector('#dirEnvio');
const nombreRecibe = document.querySelector('.grupoPersonaRecibe #Nombre');
const apellidoRecibe = document.querySelector('.grupoPersonaRecibe #Apellido');
const codigoPostal = document.querySelector('.grupoDireccion #CP');
const telefono = document.querySelector('.grupoDireccion #Tel');


/* Select del mes generado dinámicamente */
for (let i = 1; i<=12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

/* Select del año generado dinámicamente */
const yearActual = new Date().getFullYear();
for(let i= yearActual; i <= yearActual+8; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

/* Input número de tarjeta */
/* formulario es la constante, inputNumero el Id de mi Html, agrego un listener*/

formulario.inputNumero.addEventListener('keyup', (e)=>{
    let valorInput= e.target.value;
    formulario.inputNumero.value =valorInput
    //eliminamos espacios en blanco
    .replace(/\s/g, '')
    //Eliminar las letras
    .replace(/\D/g,'')
    //Ponemos espacio cada cuatro números
    .replace(/([0-9]{4})/g, '$1 ')
    //Quitamos el último espaciado
    .trim();
});

/*Input nombre de tarjeta*/
formulario.inputNombre.addEventListener('keyup',(e)=>{
    let valorInput=e.target.value;
    formulario.inputNombre.value=valorInput.replace(/[0-9]/g, '');
})
//CCV
formulario.inputCCV.addEventListener('keyup',()=>{
    formulario.inputCCV.value = formulario.inputCCV.value
    .replace(/\s/g, '')
    .replace(/\D/g, '');
})
/**Input Nombre y Apellidos de quien recibe**/
    datosEnvio.Nombre.addEventListener('keyup',(e)=>{
        let valorInput=e.target.value
        datosEnvio.Nombre.value = valorInput.replace(/[0-9]/g,'');
    });
    datosEnvio.Apellido.addEventListener('keyup',(e)=>{
        let valorInput=e.target.value
        datosEnvio.Apellido.value = valorInput.replace(/[0-9]/g,'');
    })
    /**Input del Código Postal y de teléfono */
    datosEnvio.CP.addEventListener('keyup',()=>{
        datosEnvio.CP.value=datosEnvio.CP.value
        .replace(/\s/g,'')
        .replace(/\D/g,'');
    })
    datosEnvio.Tel.addEventListener('keyup',()=>{
        datosEnvio.Tel.value=datosEnvio.Tel.value
        .replace(/\s/g,'')
        .replace(/\D/g,'')
        //Ponemos espacio cada cuatro números
        .replace(/([0-9]{2})/g, '$1 ')
        //Quitamos el último espaciado
        .trim();
    })
    function terminarPedido(){
        /*popup onclick*/
        popup2.style.visibility = "visible";
        popup2.style.opacity= 1;
       pay1.style.visibility = "hidden";
       Nombre.style.visibility = "hidden";
       Apellido.style.visibility = "hidden";
       pay4.style.visibility = "hidden";
       pay5.style.visibility = "hidden";
       pay6.style.visibility = "hidden";
       CP.style.visibility = "hidden";
       Tel.style.visibility = "hidden";
       inputNumero.style.visibility = "hidden";
       inputNombre.style.visibility = "hidden";
       inputCCV.style.visibility = "hidden";
    }
    /*Close del popup*/
    function closePago(){
        popup2.style.visibility = "hidden";
        popup2.style.opacity= 0;
        pay1.style.visibility = "visible";
        Nombre.style.visibility = "visible";
        Apellido.style.visibility = "visible";
        pay4.style.visibility = "visible";
        pay5.style.visibility = "visible";
        pay6.style.visibility = "visible";
        CP.style.visibility = "visible";
        Tel.style.visibility = "visible";
        inputNombre.style.visibility = "visible";
        inputNumero.style.visibility = "visible";
        inputCCV.style.visibility = "visible";
        document.getElementById("posicion").value = "";

    
    }