document.addEventListener('DOMContentLoaded', function() {
    // Manejo del formulario de inicio de sesión
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que la página se recargue al enviar el formulario
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            // Datos correctos simulados
            const storedEmail = "usuario@ejemplo.com";
            const storedPassword = "123456";
            // Verifica si los datos ingresados son correctos
            if (email === storedEmail && password === storedPassword) {
                // Si el login es correcto, redirige a la página de planificación
                window.location.href = "planificacion.html";
            } else {
                // Si el login es incorrecto, muestra un mensaje de error
                const errorMessage = document.getElementById("error-message");
                errorMessage.textContent = "Correo o contraseña incorrectos.";
            }
        });
    }
});
