console.log("Carrito.js");

function limpiarTabla(){
	document.getElementById('data').innerHTML = '';
}

function eliminarFila(index) {
  $("#fila" + index).remove();
}
apiUrl();
function apiUrl() {    
//let url = document.getElementById('api').value;
let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error));

const mostrarData = (data) => {
  console.log(data)
let body = ''
for (let i = 0; i < data.length; i++) {
  body += `<tr><td>${data[i].name}</td><td>${data[i].username}</td><td>${data[i].email}</td><td>${data[i].id}</td><td><img src=\'${data[i].avatar}\'</td></tr>`
  localStorage.setItem('data1', JSON.stringify(data));
}
document.getElementById('data').innerHTML = body;
 }
}
function apiAnt(){
     apianterior = localStorage.getItem('data1');
	 console.log(apianterior)
}
/*data{
     	id: "",
	nombre: "",
	precio: "",
	cantidad: "",
	total: ""
}*/
