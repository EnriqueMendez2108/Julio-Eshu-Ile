// Función para mostrar los detalles del Orisha en el Modal
function mostrarDetalle(nombre, descripcion) {
    const modal = document.getElementById('orisha-modal');
    const titulo = document.getElementById('modal-titulo');
    const desc = document.getElementById('modal-descripcion');

    titulo.textContent = nombre;
    desc.textContent = descripcion;

    modal.style.display = 'flex';
}

// Función para cerrar el Modal
function cerrarModal() {
    const modal = document.getElementById('orisha-modal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('orisha-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Manejo sencillo del envío del formulario
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por comunicarte! Tu mensaje ha sido enviado correctamente.');
    this.reset();
});