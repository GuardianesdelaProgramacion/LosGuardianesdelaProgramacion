console.log("Carrito.js");

function limpiarTabla(){
	document.getElementById('data').innerHTML = '';
}


function Eliminar (i) {
 document.getElementsByTagName("table")[0].setAttribute("id","tableid");
 document.getElementById("tableid").deleteRow(i);
}
