//TODO ESTE CODIGO DE ESTE METODO ES CAPAZ DE DIRECCIONAR A LOS USUARIOS A LAS PAGINAS DE LOS PRODUCTO HACIENDO QUE NUESTRO CLIENTES SEAN CAPACES DE COMPRAR NUESTROS PRODUCTO Y HACER QUE TODOS NUESTROS EMPLEADOS PUEDAN COMER
function clic_prod(prod){
    location.href = "PRODUCTO_" + prod + ".html"
}
//ESTE CODIGO AVISA AL USUARIO CUANDO HA COMPRADO EL PRODUCTO
function compra(prod){
    alert("HA COMPRADO " + prod)
}
window.addEventListener("load", function (event) {
    alert("¡Todos los recursos terminaron de cargar!")
  });
window.addEventListener("beforeunload", function (event) {
    event.returnValue = ':v'
  }); 
