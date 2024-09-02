const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
    }//length==0

    if (isNaN(txtNumber.value)){
        return false;
    } //isNaN sirve para que verifiqie si es correcto que es un número

    if (Number (txtNumber.value)<=0){
        return false;
    }

    return true
}//validarCantidad()


btnAgregar.addEventListener("click", function(evenet){
    evenet.preventDefault();
        txtNombre.style.border="";
        txtNumber.style.border="";
        alertValidacionesTexto.innerHTML="";
        alertValidaciones.style.display="none";

        //validar nombre del producto
    if(txtNombre.value.length<3){
        txtNombre.style.border="solid red medium";
        alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto.</br>";
        alertValidaciones.style.display="block";

    }// if length <3

//Validar la cantidad
    if (! validarCantidad()){
        txtNumber.style.border="solid red medium";
        alertValidacionesTexto.innerHTML+="La <strong>cantidad</strong> no es correcta.</br>";
        alertValidaciones.style.display="block";
    }


}) //btnAgregar.addEventListener

//blur es cuando un campo pierde el foco, se sale del texto
txtNombre.addEventListener("blur", function(event){
    txtNombre.value = txtNombre.value.trim();
}) // txtNombre. addEventListener


txtNumber.addEventListener("blur", function(event){
    txtNumber.value = txtNumber.value.trim();
}) // txtNombre. addEventListener