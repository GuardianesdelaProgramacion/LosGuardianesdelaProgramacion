
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



/*$(function() {
    $(".contactoTelefonoT").on("keyup", function(event) {
      let value = $(this).val();
      if (value.indexOf('#') != -1) {
        $(this).val(value.replace(/\#/g, ""));
      }
    })
  });*/

//Función para agregar objetos a un arreglo

/*let datosContacto = {data:[]};
let cnCount=0;
let dataArreglo;*/

/*let obj = {
    length: 0,

    addElem: function addElem(d1,d2,d3,d4,d5) {//d1,d2,d3,d4,d5 //elem
        [].push.call(this, {nombre:d1,correo:d2,asunto:d3,telefono:d4,comentario:d5});//nombre:d1,correo:d2,asunto:d3,telefono:d4,comentario:d5  //elem
    }
};*/

let contactoData=[];

function contactoEnviar(){
    nom = document.getElementById("cn1").value;
    corr = document.getElementById("cn2").value;
    asun = document.getElementById("cn3").value;
    let tel = document.getElementById("cn4").value;
    com = document.getElementById("cn5").value;

    
    /*dataArreglo = [nom,corr,asun,tel,com];
    datosContacto['data'].push(dataArreglo);
    cnCount++;*/
    let objL= {nombre:nom,correo:corr,asunto:asun,telefono:tel,comentario:com};
    console.log(objL.nombre);
    console.log(objL.correo);
    console.log(objL.asunto);
    console.log(objL.telefono);
    console.log(objL.comentario);

    contactoData.push(objL);
    console.log(contactoData);

    /*obj.addElem(nom,corr,asun,tel,com);//{nom,corr,asun,tel,com}
    console.log(obj.length);*/


}



//console.log(obj.addElem);