console.log("Carrito.js");

function limpiarTabla(){
	document.getElementById('data').innerHTML = '';
}

function eliminarFila(index) {
  $("#fila" + index).remove();
}


/*data{
     	id: "",
	nombre: "",
	precio: "",
	cantidad: "",
	total: ""
}*/
