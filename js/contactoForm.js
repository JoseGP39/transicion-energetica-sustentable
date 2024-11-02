//Funcion para obtener los valores del formulario
//se llama al metodo trim() para eliminar espacios en blanco al principio y final de cada valor
function enviarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const mensajeError = document.getElementById("mensajeError"); // Nos aseguramos de obtener el elemento con ID "mensajeError"
  const mensajeAgradecimiento = document.getElementById("mensajeAgradecimiento");

  // Ocultar mensajes previos
  mensajeError.style.display = "none";
  mensajeAgradecimiento.style.display = "none";

  // Validar que todos los campos estén completos
  if (nombre === "" || apellido === "" || email === "" || telefono === "" || mensaje === "") {
      mensajeError.style.display = "block";
      mensajeError.textContent = "Por favor, completa todos los campos.";
  } else {
      // Mostrar mensaje de agradecimiento y ocultar mensaje de error
      mensajeAgradecimiento.style.display = "block";
      mensajeAgradecimiento.textContent = "Gracias por contactarnos.";
      mensajeError.style.display = "none";
  }
}

function limpiarFormulario() {
  document.getElementById("formContacto").reset();
  document.getElementById("mensajeError").style.display = "none";
  document.getElementById("mensajeAgradecimiento").style.display = "none";
}
