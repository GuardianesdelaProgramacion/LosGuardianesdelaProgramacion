
//Filtrado de números para el input de teléfono.
const telf= document.querySelector('#cnformtel');
const telefono = document.querySelector('.telcn #cn4');

telf.cn4.addEventListener('keyup',()=>{
  telf.cn4.value=telf.cn4.value
  .replace(/\s/g,'')
  .replace(/\D/g,'')
  //Ponemos espacio cada cuatro números
  .replace(/([0-9]{2})/g, '$1 ')
  //Quitamos el último espaciado
  .trim();
})

//Arreglo donde se van a guardar los datos
let contactoData=[];

//Función del botón
function contactoEnviar(){
    nom = document.getElementById("cn1").value;
    corr = document.getElementById("cn2").value;
    asun = document.getElementById("cn3").value;
    let tel = document.getElementById("cn4").value;
    com = document.getElementById("cn5").value;

    
    let objL= {nombre:nom,correo:corr,asunto:asun,telefono:tel,comentario:com};
    console.log(objL.nombre);
    console.log(objL.correo);
    console.log(objL.asunto);
    console.log(objL.telefono);
    console.log(objL.comentario);

    contactoData.push(objL);
    console.log(contactoData);

    /*popup onclick*/
    popup1.style.visibility = "visible";
    popup1.style.opacity= 1;
    cn1.style.visibility = "hidden";
    cn2.style.visibility = "hidden";
    cn3.style.visibility = "hidden";
    cn4.style.visibility = "hidden";
    cn5.style.visibility = "hidden";


}

/*Close del popup*/
function cnClose(){
    popup1.style.visibility = "hidden";
    popup1.style.opacity= 0;
    cn1.style.visibility = "visible";
    cn2.style.visibility = "visible";
    cn3.style.visibility = "visible";
    cn4.style.visibility = "visible";
    cn5.style.visibility = "visible";
    document.getElementById("cn1").value = "";
    document.getElementById("cn2").value = "";
    document.getElementById("cn3").value = "";
    document.getElementById("cn4").value = "";
    document.getElementById("cn5").value = "";

}