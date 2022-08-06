let timeout;
console.log("hi");
//let expiresdate = new Date(2068, 1, 02, 11, 20);
//let cookievalue = "Hola Mundo!";
//document.cookie = "testcookie=" + encodeURIComponent( cookievalue ) + "; expires=" + expiresdate.toUTCString();
  let now = new Date();
  let time = now.getTime();
  let expireTime = time + 1000*36000;
  now.setTime(expireTime);
tiempo();
function hazUnaVez() {
  if (document.cookie.replace(/(?:(?:^|.*;\s*)testcookie\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    alertFunc();
    document.cookie = 'testcookie=true; expires='+now.toUTCString()+'; path=/';
  }
}






function tiempo(){
  timeout = setTimeout(hazUnaVez, 5000);
}

function alertFunc() {
//  if(getCookie("alert") == ""){
  //  clearTimeout(timeout);
 // }
 //   else{
  contactoEnviar();
//    }
}
function contactoEnviar(){

    
    /*popup onclick*/
    popup1.style.visibility = "visible";
    popup1.style.opacity= 1;


}

/*Close del popup*/
function cnClose(){
    popup1.style.visibility = "hidden";
    popup1.style.opacity= 0;

}
