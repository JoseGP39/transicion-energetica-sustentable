function enviarFormulario() {
    // Obtener valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    // Validar que todos los campos estén diligenciados
    if (nombre === "" || apellido === "" || email === "" || telefono === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        // Redirigir a la página de agradecimiento
        window.location.href = "gracias.html";
    }
  }
  
  function limpiarFormulario() {
    // Limpiar el formulari
    document.getElementById("formContacto").reset();
  }