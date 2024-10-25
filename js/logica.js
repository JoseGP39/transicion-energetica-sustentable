/*let currentIndex = 0;

document.querySelector(".prev-button").addEventListener("click", () => {
  navigate(-1);
});

document.querySelector(".next-button").addEventListener("click", () => {
  navigate(1);
});

function navigate(direction) {
  const galleryContainer = document.querySelector(".gallery-container");
  const totalImages = document.querySelectorAll(".gallery-item").length;

  currentIndex = (currentIndex + direction + totalImages) % totalImages;
  const offset = -currentIndex * 100;

  galleryContainer.style.transform = `translateX(${offset}%)`;
}*/

/*let autoplayInterval = null;

function startAutoplay(interval) {
   stopAutoplay(); // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
   autoplayInterval = setInterval(() => {
      navigate(1); // Navega a la siguiente imagen cada intervalo de tiempo.
   }, interval);
}

function stopAutoplay() {
   clearInterval(autoplayInterval);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay(3000);

// Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', stopAutoplay);
});*/

// Función para verificar la selección de mes y año
function checkSelection() {
  const month = document.getElementById('monthSelect').value;
  const year = document.getElementById('yearSelect').value;

  // Ocultar todos los eventos primero
  document.querySelectorAll('.info-box').forEach(function(infoBox) {
      infoBox.style.display = 'none'; // Ocultamos todas las cajas
  });

  // Mostrar solo el evento correspondiente al mes y año seleccionados
  if (month !== 'none' && year !== 'none') {
      const selectedEvent = document.getElementById(`info-${year}-${month}`);
      if (selectedEvent) {
          selectedEvent.style.display = 'flex'; // Cambiar a 'flex' para mantener el diseño
      }
  }
}

// Agregar eventos a los selectores
document.getElementById('monthSelect').addEventListener('change', checkSelection);
document.getElementById('yearSelect').addEventListener('change', checkSelection);
