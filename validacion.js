const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const asuntoInput = document.getElementById('asunto');
const mensajeInput = document.getElementById('mensaje');
const errorSpan = document.getElementById('demo');

function mostrarError(mensaje) {
  errorSpan.textContent = mensaje;
}

function ocultarError() {
  errorSpan.textContent = '';
}

function validarFormulario(event) {
  event.preventDefault();

  ocultarError();

  if (nombreInput.value.trim() === '') {
    mostrarError('Por favor, ingresa tu nombre.');
    return;
  }

  if (nombreInput.value.length > 50) {
    mostrarError('El nombre no puede tener más de 50 caracteres.');
    return;
  }

  if (emailInput.value.trim() === '') {
    mostrarError('Por favor, ingresa tu dirección de correo electrónico.');
    return;
  }

  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (!emailRegex.test(emailInput.value)) {
    mostrarError('Por favor, ingresa una dirección de correo electrónico válida.');
    return;
  }

  if (asuntoInput.value.trim() === '') {
    mostrarError('Por favor, ingresa el asunto del mensaje.');
    return;
  }

  if (asuntoInput.value.length > 50) {
    mostrarError('El asunto no puede tener más de 50 caracteres.');
    return;
  }

  if (mensajeInput.value.trim() === '') {
    mostrarError('Por favor, ingresa tu mensaje.');
    return;
  }

  if (mensajeInput.value.length > 300) {
    mostrarError('El mensaje no puede tener más de 300 caracteres.');
    return;
  }
  
  formulario.submit();
}

const enviarBoton = document.querySelector('.formcontato__botao');
enviarBoton.addEventListener('click', validarFormulario);





  
 


 

  