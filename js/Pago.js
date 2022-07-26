const inputAbrirFormulario = document.querySelector('#abrirFormulario');
const formulario = document.querySelector('#formularioTarjeta');
const numeroTarjeta = document.querySelector('#tarjeta .numero');
const nombreTarjeta = document.querySelector('#tarjeta .nombre');
const mesExpiracion =document.querySelector('#tarjeta #expiracion .mes');
const yearExpiracion =document.querySelector('#tarjeta #expiracion .year');
const ccv =document.querySelector('#tarjeta #expiracion .CCV');



/* Botón de abrir formulario */
abrirFormulario.addEventListener('active', () =>{
    abrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
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

    numeroTarjeta.textContent =valorInput;

    if(valorInput==''){
        numeroTarjeta.textContent= '#### ##### ##### #####';
        logoMarca.innerHTML='';
    }

    if(valorInput[0]==4){
        logoMarca.innerHTML='';
        const imagen =document.createElement('img');
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
    nombreTarjeta.textContent =valorInput;
    firma.textContent =valorInput;
})

//Select mes
formulario.selectMes.addEventListener('change',(e)=>{
    mesExpiracion.textContent=e.target.value;
});
formulario.selectYear.addEventListener('change',(e)=>{
    yearExpiracion.textContent=e.target.value.slice(2);
});
//CCV
formulario.inputCCV.addEventListener('keyup',()=>{
    formulario.inputCCV.value = formulario.inputCCV.value
    .replace(/\s/g, '')
    .replace(/\D/g, '');

    ccv.textContent = formulario.inputCCV.value;
})
