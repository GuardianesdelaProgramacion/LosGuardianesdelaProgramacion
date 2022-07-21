const btnAbrirFormulario = document.querySelector('#abrirFormulario');
const formulario = document.querySelector('#formularioTarjeta');
const numeroTarjeta = document.querySelector('#tarjeta .numero');
const nombreTarjeta = document.querySelector('#tarjeta .nombre');
//const logoMarca = document.querySelector('#logoMarca');
const firma = document.querySelector('#tarjeta .firma p');
const mesExpiracion =document.querySelector('#tarjeta #expiracion .mes');
const annoExpiracion =document.querySelector('#tarjeta #expiracion .anno');
const ccv =document.querySelector('#tarjeta #expiracion .CCV');


//Voltear la tarjeta de frente cuando el usuarannoExpiracionVoltear la tarjeta de frente cuando el usuario eannoibe
const mostrarFrente=()=>{
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');
    }
}

/* Rotación de la tarjeta */
tarjeta.addEventListener('click', ()=>{
    tarjeta.classList.toggle('active');
});
/* Botón de abrir formulario */
abrirFormulario.addEventListener('click', () =>{
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
const annoActual = new Date().getFullYear();
for(let i= annoActual; i <= annoActual+8; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectAnno.appendChild(opcion);
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
    //QUitamos el último espaciado
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

    if(valorInput == ''){
        nombreTarjeta.textContent = 'John Doe';
    }
})

//Select mes
formulario.selectMes.addEventListener('change',(e)=>{
    mesExpiracion.textContent=e.target.value;
});
formulario.selectAnno.addEventListener('change',(e)=>{
    annoExpiracion.textContent=e.target.value.slice(2);
});
//CCV
formulario.inputCCV.addEventListener('keyup',()=>{
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
    }
    formulario.inputCCV.value = formulario.inputCCV.value
    .replace(/\s/g, '')
    .replace(/\D/g, '');

    ccv.textContent = formulario.inputCCV.value;
})
