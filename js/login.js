// Referencias a los elementos del DOM
const formLogin = document.getElementById('formLogin');
const inputUsuario = document.getElementById('usuario');
const inputClave = document.getElementById('clave');
const mensaje = document.getElementById('mensaje');

// Función para mostrar mensaje en el HTML
function mostrarMensaje(texto, tipo = "danger") {
    mensaje.innerHTML = `
        <div class="col-md-6 col-lg-4">
            <div class="alert alert-${tipo}">${texto}</div>
        </div>
    `;
}

// Al enviar el formulario
formLogin.addEventListener('submit', function(event) {
    event.preventDefault();

    let usuarioIngresado = inputUsuario.value.trim();
    let claveIngresada = inputClave.value.trim();

    // Buscar el usuario en el array
    const usuarioEncontrado = usuarios.find(
        u => u.usuario === usuarioIngresado && u.clave === claveIngresada
    );

    if (usuarioEncontrado) {
        sessionStorage.setItem("usuarioLogueado", usuarioIngresado);
        mostrarMensaje("¡Login exitoso!", "success");
        // window.location.href = "index.html";
    } else {
        mostrarMensaje("Usuario o contraseña incorrectos.", "danger");
    }
});