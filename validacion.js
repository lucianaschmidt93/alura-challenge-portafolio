function validarFormulario() {
    var nombre = document.forms["formulario"]["nombre"].value;
    var email = document.forms["formulario"]["email"].value;
    var asunto = document.forms["formulario"]["asunto"].value;
    var mensaje = document.forms["formulario"]["mensaje"].value;

    var mensajesError = document.getElementsByClassName("error");
        for (var i = 0; i < mensajesError.length; i++) {
            mensajesError[i].style.display = "none";
        }

        if (nombre == "") {
            mostrarError("nombre", "Por favor, ingresa tu nombre.");
            return false;
        }

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            mostrarError("email", "Por favor, ingresa un correo electrónico válido.");
            return false;
        }

 
        if (asunto == "") {
            mostrarError("asunto", "Por favor, ingresa un asunto.");
            return false;
        }

        if (mensaje == "") {
            mostrarError("mensaje", "Por favor, ingresa un mensaje.");
            return false;
        }

           
}

function mostrarError(campo, mensaje) {
    var elementoCampo = document.getElementById(campo);
    var mensajeError = document.createElement("span");
        mensajeError.className = "error";
        mensajeError.innerHTML = mensaje;
        elementoCampo.parentNode.insertBefore(mensajeError, elementoCampo.nextSibling);
}
