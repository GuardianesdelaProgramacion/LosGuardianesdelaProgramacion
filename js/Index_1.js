// del htmle trabajamos con los que tengan la clase .list__button--click
let listElements = document.querySelectorAll('.list__button--click');

//
listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        // con esta línea quitamos y ponemos la clase arrow a los botones de submenu
        listElement.classList.toggle('arrow');
// con esta funcio tomamos al hermano abjasencente para obtener su hide. scrollHeight sirve para que el elemento no se desborde 
        // scrollHeight hace el calculo dinamico del hide de cada submenu
        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }
        // una ves pase esa condicional hacemos que el estilo del menu cambia al que en css
        menu.style.height = `${height}px`;

    })
});