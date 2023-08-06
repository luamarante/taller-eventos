// eventos.js
function saludar() {
    alert('Hola! Soy el botón.');
  }
  
  // Agregar manejador de eventos para el div
  document.addEventListener('DOMContentLoaded', function () {
    const divSaludar = document.getElementById('divSaludar');
    divSaludar.addEventListener('click', function () {
      alert('Hola! Soy el div.');
    });
  });
  