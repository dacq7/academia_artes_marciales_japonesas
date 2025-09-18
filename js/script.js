// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Capturamos todos los enlaces con ancla (#) en el documento
    const links = document.querySelectorAll('a[href^="#"]');

    // Añadimos un evento de clic a cada uno de los enlaces
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Evitamos el comportamiento por defecto del enlace
            event.preventDefault();

            // Obtenemos el destino del enlace (el id de la sección)
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Si el destino existe, desplazamos suavemente a esa sección
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop, // La posición vertical de la sección
                    behavior: 'smooth' // Desplazamiento suave
                });
            }
        });
    });
});
