// Obtener referencia al formulario y los campos de entrada
const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const asuntoInput = document.getElementById('asunto');
const mensajeInput = document.getElementById('mensaje');

// Funciones para mostrar y ocultar mensajes de error
function mostrarError(elemento, mensaje) {
  const errorSpan = elemento.nextElementSibling;
  errorSpan.textContent = mensaje;
}

function ocultarError(elemento) {
  const errorSpan = elemento.nextElementSibling;
  errorSpan.textContent = '';
}

// Función para validar el formulario
function validarFormulario(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Validar campo nombre
  if (nombreInput.value.trim() === '' || nombreInput.value.length > 50) {
    mostrarError(nombreInput, 'Por favor, ingresa un nombre válido (máximo 50 caracteres).');
    return;
  } else {
    ocultarError(nombreInput);
  }

  // Validar campo email
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value)) {
    mostrarError(emailInput, 'Por favor, ingresa una dirección de correo electrónico válida.');
    return;
  } else {
    ocultarError(emailInput);
  }

  // Validar campo asunto
  if (asuntoInput.value.trim() === '' || asuntoInput.value.length > 50) {
    mostrarError(asuntoInput, 'Por favor, ingresa un asunto válido (máximo 50 caracteres).');
    return;
  } else {
    ocultarError(asuntoInput);
  }

  // Validar campo mensaje
  if (mensajeInput.value.trim() === '' || mensajeInput.value.length > 300) {
    mostrarError(mensajeInput, 'Por favor, ingresa un mensaje válido (máximo 300 caracteres).');
    return;
  } else {
    ocultarError(mensajeInput);
  }

  // Si todas las validaciones pasan, enviar el formulario
  formulario.submit();
}

// Agregar evento de escucha al botón de envío
const enviarBoton = document.querySelector('.formcontato__botao');
enviarBoton.addEventListener('click', validarFormulario);




  
 


 

  