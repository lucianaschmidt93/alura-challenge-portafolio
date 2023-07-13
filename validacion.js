function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var asunto = document.getElementById("asunto").value;
  var mensaje = document.getElementById("mensaje").value;
  var expresion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (nombre === "" || email === ""  || asunto === "" || mensaje === "") {
    document.getElementById("demo").innerHTML = "Por favor, completá todos los campos";
    return false;
  }
  else if (!expresion.test(email)) {
    document.getElementById("demo").innerHTML = "Por favor, ingresá un correo electrónico válido";
    return false;
  }
  else {
    document.getElementById("demo").innerHTML = "";
  }
}
  
 


 

  