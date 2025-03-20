// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los elementos con la clase "animated-card"
    const animatedElements = document.querySelectorAll(".animated-card");

    /**
     * Función para manejar el scroll y las animaciones.
     * Verifica si los elementos están en la vista y les añade la clase "in-view".
     */
    const handleScroll = () => {
        animatedElements.forEach((element) => {
            // Obtiene la posición del elemento respecto a la ventana
            const position = element.getBoundingClientRect().top;

            // Si el elemento está en la vista (con un margen de 100px)
            if (position < window.innerHeight - 100) {
                element.classList.add("in-view");
            }
        });
    };

    // Escucha el evento de scroll y ejecuta la función handleScroll
    window.addEventListener("scroll", () => {
        requestAnimationFrame(handleScroll); // Mejora el rendimiento usando requestAnimationFrame
    });

    // Ejecuta handleScroll al cargar la página para animar elementos visibles inicialmente
    handleScroll();
});

/**
 * Función para mostrar información en el modal.
 * @param {string} tipo - El tipo de información a mostrar (misión, visión, seguridad, etc.).
 */
function mostrarInfo(tipo) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const text = document.getElementById("modal-text");

    // Asigna el título y el texto según el tipo de información
    switch (tipo) {
        case "optimizacion":
            title.innerText = "Misión";
            text.innerText =
                "Proporcionar soluciones tecnológicas innovadoras para optimizar la gestión del mantenimiento de la infraestructura física, mejorando la eficiencia operativa y la calidad del entorno de aprendizaje.";
            break;
        case "automatizacion":
            title.innerText = "Visión";
            text.innerText =
                "Ser la empresa líder en América Latina en el desarrollo de software para la gestión de infraestructura física, contribuyendo a un mantenimiento eficiente y sostenible de las instalaciones.";
            break;
        case "seguridad":
            title.innerText = "Seguridad";
            text.innerText = "Garantizar la confiabilidad del sistema mediante autenticación.";
            break;
        default:
            console.warn("Tipo de información no reconocido:", tipo);
            return; // Sale de la función si el tipo no es válido
    }

    // Muestra el modal con una animación
    modal.classList.add("show");
    modal.style.display = "flex";
}

/**
 * Función para cerrar el modal.
 */
function cerrarModal() {
    const modal = document.getElementById("modal");

    // Oculta el modal con una animación
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); // Espera 300ms para que la animación termine antes de ocultar el modal
}

// Script para el menú hamburguesa
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Escucha el clic en el botón del menú hamburguesa
    menuToggle.addEventListener("click", () => {
        // Verifica si el menú está expandido
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

        // Cambia el estado del menú (abierto/cerrado)
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        navLinks.classList.toggle("active");
    });
});