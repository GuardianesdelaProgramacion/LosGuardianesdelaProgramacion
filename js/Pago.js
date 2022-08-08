
// Hago constantes el acceso con query selector al HTML #es el ID y . para la clase
const formulario = document.querySelector('#formularioTarjeta');
const numeroTarjeta = document.querySelector('#datosTarjeta #inputNumero');
const nombreTarjeta = document.querySelector('#datosTarjeta #inputNombre');
const mesExpiracion = document.querySelector('#selectMes');
const yearExpiracion = document.querySelector('#selectYear');
const ccv = document.querySelector('#inputCCV');

const envio = document.querySelector('#envio');
const nombreEnv = document.querySelector('#envio #nombreEnvio');
const apellidoEnv = document.querySelector('#envio #apellidoEnvio');
const codPostal = document.querySelector('#envio #grupoDireccion #codigoPostal');
const tel = document.querySelector('#envio #grupoDireccion #telefono');

/* Select del mes generado dinámicamente */
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

/* Select del año generado dinámicamente */
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

/* Input número de tarjeta */
/* formulario es la constante, inputNumero el Id de mi Html, agrego un listener*/

formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    formulario.inputNumero.value = valorInput
        //eliminamos espacios en blanco
        .replace(/\s/g, '')
        //Eliminar las letras
        .replace(/\D/g, '')
        //Ponemos espacio cada cuatro números
        .replace(/([0-9]{4})/g, '$1 ')
        //Quitamos el último espaciado
        .trim();
});

/*Input nombre de tarjeta*/
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
})
//CCV
formulario.inputCCV.addEventListener('keyup', (e) => {
    formulario.inputCCV.value = formulario.inputCCV.value
        .replace(/\s/g, '')
        .replace(/\D/g, '');
});
/**Input Nombre y Apellidos de quien recibe**/
envio.nombreEnvio.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    envio.nombreEnvio.value = valorInput.replace(/[0-9]/g, '');
});
envio.apellidoEnvio.addEventListener('keyup', (e) => {
    let valorInput = e.target.value
    envio.apellidoEnvio.value = valorInput.replace(/[0-9]/g, '');
});
/**Input del Código Postal y de teléfono */
envio.codigoPostal.addEventListener('keyup', () => {
    envio.codigoPostal.value = envio.codigoPostal.value
        .replace(/\s/g, '')
        .replace(/\D/g, '');
});
envio.telefono.addEventListener('keyup', () => {
    envio.telefono.value = envio.telefono.value
        .replace(/\s/g, '')
        .replace(/\D/g, '')
        //Ponemos espacio cada dos números
        .replace(/([0-9]{2})/g, '$1 ')
        //Quitamos el último espaciado
        .trim();
});
function terminarPedido() {
    /*popup onclick*/
    document.getElementById("popup2").style.visibility = "visible";
    document.getElementById("popup2").style.opacity = 1;
    document.getElementById("pay1").style.visibility = "hidden";
    document.getElementById("nombreEnvio").style.visibility = "hidden";
    document.getElementById("apellidoEnvio").style.visibility = "hidden";
    document.getElementById("pay4").style.visibility = "hidden";
    document.getElementById("pay5").style.visibility = "hidden";
    document.getElementById("pay6").style.visibility = "hidden";
    document.getElementById("codigoPostal").style.visibility = "hidden";
    document.getElementById("telefono").style.visibility = "hidden";
    document.getElementById("gridRadios1").style.visibility="hidden";
    document.getElementById("inputNumero").style.visibility = "hidden";
    document.getElementById("inputNombre").style.visibility = "hidden";
    document.getElementById("inputCCV").style.visibility = "hidden";
    document.getElementById("pay7").style.visibility = "hidden";
    document.getElementById("gridRadios2").style.visibility="hidden";
    document.getElementById("gridRadios3").style.visibility="hidden";
}
/*Close del popup*/
function closePago() {
    document.getElementById("popup2").style.visibility = "hidden";
    document.getElementById("popup2").style.opacity = 0;
    document.getElementById("pay1").style.visibility = "visible";
    document.getElementById("nombreEnvio").style.visibility = "visible";
    document.getElementById("apellidoEnvio").style.visibility = "visible";
    document.getElementById("pay4").style.visibility = "visible";
    document.getElementById("pay5").style.visibility = "visible";
    document.getElementById("pay6").style.visibility = "visible";
    document.getElementById("codigoPostal").style.visibility = "visible";
    document.getElementById("telefono").style.visibility = "visible";
    document.getElementById("gridRadios1").style.visibility="visible";
    document.getElementById("inputNumero").style.visibility = "visible";
    document.getElementById("inputNombre").style.visibility = "visible";
    document.getElementById("inputCCV").style.visibility = "visible";
    document.getElementById("pay7").style.visibility = "visible";
    document.getElementById("gridRadios2").style.visibility="visible";
    document.getElementById("gridRadios3").style.visibility="visible";
}