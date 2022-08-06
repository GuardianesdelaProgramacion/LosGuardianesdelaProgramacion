// del html trabajamos con los que tengan la clase .list__button--click
let listElements = document.querySelectorAll('.list__button--click');

//
listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        // con esta línea quitamos y ponemos la clase arrow a los botones de submenú
        listElement.classList.toggle('arrow');
// con esta función tomamos al hermano abjasencente para obtener su hide. scrollHeight sirve para que el elemento no se desborde 
        // scrollHeight hace el calculo dinámico del hide de cada submenu
        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }
        // una vez pase esa condicional hacemos que el estilo del menú cambia al que en css
        menu.style.height = `${height}px`;

    })
});

let indexValue=1;
showimg(indexValue);
function btm_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += e);}
function showImg(e){
    var i;
    const img = document.querySelectorAll('img');
    const sliders = document.querySelectorAll('.btm-sliders span'); 
    if(e>img.length){indexValue=1}
    if(e<1){indexValue=img.length}
    for(i=0;i<img.length;i++){
      img[i].style.display="none";  
    }
    for(i=0;i<sliders.length;i++){
        sliders[i].style.background="rgb(205,229,208,0.5)";  
    }
    img[indexValue-1].style.display="block";
    sliders[indexValue-1].style.background="rgb(236,179,144)";
}



// calificación de estrellas