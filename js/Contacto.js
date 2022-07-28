
/*let datosContacto = {data:[]};
let cnCount=0;
let dataArreglo;*/

let obj = {
    length: 0,

    addElem: function addElem(d1,d2,d3,d4,d5) {//d1,d2,d3,d4,d5 //elem
        [].push.call(this, {nombre:d1,correo:d2,asunto:d3,telefono:d4,comentario:d5});//nombre:d1,correo:d2,asunto:d3,telefono:d4,comentario:d5  //elem
    }
};

/*formulario.cn4.addEventListener('keyup', (e)=>{
    let valorInput= e.target.value;
    formulario.cn4.value =valorInput
    //eliminamos espacios en blanco
    .replace(/\s/g, '')
    //Eliminar las letras
    .replace(/\D/g,'')
});*/

$(function() {
    $(".contactoTelefonoT").on("keyup", function(event) {
      let value = $(this).val();
      if (value.indexOf('#') != -1) {
        $(this).val(value.replace(/\#/g, ""));
      }
    })
  });

function contactoEnviar(){
    nom = document.getElementById("cn1").value;
    corr = document.getElementById("cn2").value;
    asun = document.getElementById("cn3").value;
    tel = document.getElementById("cn4").value;
    com = document.getElementById("cn5").value;

    console.log(nom);
    /*dataArreglo = [nom,corr,asun,tel,com];
    datosContacto['data'].push(dataArreglo);
    cnCount++;*/
    obj.addElem(nom,corr,asun,tel,com);//{nom,corr,asun,tel,com}
    console.log(obj.length);


}

console.log(obj.addElem);