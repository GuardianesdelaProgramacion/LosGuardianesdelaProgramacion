
function eliminar() {
    let arreglo = datos();
    
   
        setTimeout(function() {
            location.reload();
            alert(`Se eliminó producto ${arreglo[0]}`);
        }, 1000);
 
    }
    boton2.onsubmit = eliminar;
 
    function alerta(){
      
       
        let arreglo = datos();
        setTimeout(function() {
            location.reload();
            alert(`Se eliminó producto ${arreglo[0]}`);
        }, 1000);
 
    }

    boton1.onsubmit = alerta;

    function datos(){
        let uno = document.getElementById("texto1").value;
        let tres = document.getElementById("texto3").value;
        let arreglo = [uno, tres];
        return arreglo;
    }