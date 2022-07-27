// const inputAbrirFormulario = document.querySelector('.abrirFormulario');
const formulario = document.querySelector('#formularioTarjeta');
const numeroTarjeta = document.querySelector('#datosTarjeta #inputNumero');
const nombreTarjeta = document.querySelector('#datosTarjeta #inputNombre');
const mesExpiracion =document.querySelector('#datosTarjeta .grupo-expira #selectMes');
const yearExpiracion =document.querySelector('#datosTarjeta .grupo-expira #selectYear');
const ccv =document.querySelector('#datosTarjeta #grupo-expira .inputCCV');



/* Botón de abrir formulario */
abrirFormulario.addEventListener('select', () =>{
    abrirFormulario.classList.toggle('select');
    formulario.classList.toggle('select');
});
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
    if(valorInput[0]==4){
        logoMarca.innerHTML='';
        const imagen =document.createElement('i');
        imagen.src = 'img/logos/visa.png';
        logoMarca.appendChild(imagen);
    }else if (valorInput[0]==5){
        logoMarca.innerHTML='';
        const imagen =document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }
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
