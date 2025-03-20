document.addEventListener("DOMContentLoaded", function () {
    emailjs.init('8DY4SOcNNTnYqHK6q');

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Capturar datos del formulario
        const serviceID = 'default_service';
        const templateID = 'template_q35fcha_'; // Reemplaza con tu template ID

        const templateParams = {
            title: 'Formulario de contacto',
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        emailjs.send(serviceID, templateID, templateParams)
            .then(response => {
                showToast('✅ Mensaje enviado con éxito', 'success');
                document.getElementById('contact-form').reset();
            })
            .catch(error => {
                showToast('❌ Error al enviar el mensaje', 'error');
                console.error('Error:', error);
            });
    });

    // Función para mostrar el Toast
    function showToast(message, type) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545';
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
});






